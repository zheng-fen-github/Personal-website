import React,{useEffect} from 'react'

const book =React.forwardRef( ({message},ref) =>  {
    console.log(message);
    const query = name => document.querySelectorAll(name);
    const classJop = ( list , select , name ) =>  Array.from(list).map(e =>{
                                 e.classList[select](name)                    
                            })
    useEffect(() => {
     const ev = () => {
        if(document.documentElement.clientWidth < 980) {   // 响应字体           
            let list = query('.text .h3');
            let list2 = query('.title .h2');
            if(list) {
                classJop(list,'add','h6');                
            }
            if(list2) {
                classJop(list2,'add','h5');                                
            }   
                         
        }else{
            let list = query('.text .h6');
            let list2 = query('.title .h5');
            if(list) {
                classJop(list,'remove','h6');                                                
            }
            if(list2) {
                classJop(list2,'remove','h5');                
            }
        }
     }

      window.addEventListener('resize',ev);
      return () => {         
         window.removeEventListener('resize',ev);
      }

    },[])

    const closeWindowEv = (e) => {
        e.target.style.display = 'none';
        ref.current.classList.remove('open-book');
    }

    return (
        <>     
            <div className="back justify-content-center align-items-center rounded-circle" onClick={closeWindowEv}>
                       
            </div>       
            <div className="row justify-content-center book" ref={ref}>
                   
                   <div className="col-8  my-5 root">
                      { message &&
                       message.pageContent.map(e => (                             
                        <div className="row shadow rounded p-4 align-items-content mb-4">
                             <div className="col-auto mr-4 title shadow">
                                  <p className='align-middle h2'>
                                      {e.pieceTitle}
                                  </p>
                             </div>
                             <div className="col shadow py-4 text">
                                    {
                                        e.pieceMessage.map( (base,index) => (
                                            <p className='h3 p-2 p-lg-4' key={index}>
                                              {base}
                                            </p>
                                        ))
                                    }                                                                             
                             </div>
                         </div>
                       )
                        )
                   }          
                  </div>    
           </div>
           <style jsx>{`
               .book {
                   position:absolute;
                   top:0;
                   width:100%;
                   min-height:100vh;                   
                   overflow-Y:auto;
                   z-index:99;
                   transform:translateY(-170%);
                   transition:.5s;        
                   background:white;
               }
               
               .open-book {
                    transform:translateY(0%);
               }
               .back {                     
                        position:fixed;
                        right:10px;
                        top:10px;
                        color:white;
                        width:40px;
                        height:40px;
                        display:none;
                        cursor:pointer;
                        background:black;
                        z-index:100;
                    }              
               .title {
                    display:flex;
                    align-items:center;
                    background:linear-gradient(125deg, #2ed2ba, #2ed2ba);
                    color:white;
                    border-radius:10px;
               }
               .text {
                   background:white;     
                   border-radius:10px;              
               }
               .rounded{
                   background:#f1f3f8;
                   transition:.4s;
               }
               .root>div:hover {
                   transform:scale(1.1);
               }
               .root>.rounded:nth-child(2n).title {
                   background:#a8bce1;
               }
               .root>.rounded:nth-child(3n).title {
                   background:#f9859c;
               }
               .rounded p.h3 {
                   background:#232126;
                   color:white;
                   border-radius:12px;                   
               }
                `}</style>
        </>
    )
})

export default book
