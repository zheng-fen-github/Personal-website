import React,{useEffect,useState} from 'react'
import Head from 'next/head'
import List from './list'
import Nav from '../../component/index/book-nav'
import Book from './book'

function Js({data}) {
    
    useEffect(() => {         //响应字体事件
        setData(data);
        ev() 
        window.addEventListener('resize',ev)
        return () => {            
            window.removeEventListener('resize',ev)
        }       
       },[])
     let windowRef = React.createRef();      // 窗口Dom ref 定义
     let MessageRef = React.createRef(); 
     
     const [BookData, setBookData] = useState(null);         // 数据定义
     const [Data, setData] = useState(null);
     const [Message, setMessage] = useState(null);
      
     const openEv = (id) => {                         // 打开窗口事件
         let LookList = Data.filter(e => e._id === id);         
         setBookData(LookList[0]);
         windowRef.current.classList.add('open-list');
         document.body.style.overflow = "hidden";
     }  
    const openBook = (id) => {                         // 打开三级窗口事件
        
        MessageRef.current.classList.add('open-book');
        MessageRef.current.previousElementSibling.style.display = 'flex';
    }
    return (
        <>
            <Head>
                <title>Create Next App</title>      
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
            </Head> 
                <Nav/>  
                <Book message={Message} ref={MessageRef}/>                                        
                <div className="row justify-content-center  ctn">
                     <div className="col-10 pt-5">
                         <div className="row root">
                               {
                                   Data && Data.map(e => (
                                    <div className="col-6 col-lg-4 p-4 pr-4" key={e._id}>
                                        <div className="row test align-items-center" onClick={() => openEv(e._id)}>
                                                <div className="col-4">
                                                    <img src="../kuai.png" className='my-4' alt=""/>
                                                </div>
                                                <div className="col-8">
                                                        <p className='text-center h2'>
                                                            { e.BookTitle }                                                             
                                                        </p>
                                                </div>
                                        </div>   
                                   </div>
                                   )) 
                               }                                                                                                                                                         
                        </div>
                     </div>
                </div>
                <List ref={windowRef} sendMessage ={setMessage} BookData={BookData} open={openBook}/>
            <style jsx>{`
                 .ctn {
                     min-height:85vh;                   
                     background:#f6f9fd;
                 }   
                 p {
                    
                     transition:.4s;
                 }
                 .test {
                    border-radius:16px;                     
                    box-shadow:0 0 20px #bdbdbd;
                    cursor:pointer;
                 }
                 .root>div:nth-child(odd)>.test {
                    background:linear-gradient(125deg, #8d6bff, #3766ff);
                    color:white;
                 }
                 .root>div:nth-child(even)>.test {
                    background:white;
                    color:black;
                 }
                 
                 .ctn .test:hover p {
                     transform:scale(1.3);
                 }
                 .ctn .test img{
                     width:100%;                     
                 }                 
                `}</style>
        </>
    )
}

export default Js


const ev = () => {
    if(document.documentElement.clientWidth < 980) {   // 响应字体              
       let list = document.querySelectorAll('.test .h2');            
       if(list) {
           Array.from(list).map(e =>{
               e.classList.add('h4')                    
           })
       }                                   
     }else{
       let list = document.querySelectorAll('.test .h4');
       if(list) {
           Array.from(list).map(e =>{
               e.classList.remove('h4')                    
           })
       }}
}


// useEffect(() => {
    //    (async () => {
    //      let req =  await fetch('http://localhost:4040/find/book/0');
    //      let result = await  req.json();
    //      console.log(result);
    //      setData(result);
    //    })()        
    // },[])