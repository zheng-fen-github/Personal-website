import React,{useEffect,useState,useRef} from 'react'




function Show() {
    const [windowStatus, setwindowStatus] = useState(true);
    let id =  useRef();
    let domR ;
    let photoRef ;
    let animaRef = React.createRef() ;

    const animaEv = () => {   
        let windowWidth = document.documentElement.clientWidth;  
        let animaDom  = document.querySelector('.show .black-anima'); 
        let domR = document.querySelector('.show .ctt');
       
         if(windowWidth > 992) {               
             setwindowStatus(true);               
             animaDom.style.height = domR.offsetHeight+'px';
             animaDom.style.width = '6px';
         }else{             
             setwindowStatus(() => false);                                      
             animaDom.style.height = '6px';
             animaDom.style.width = domR.offsetWidth+'px';
         }
         
    }
    const animanice = () => {
        let animaDom  = document.querySelector('.show .black-anima'); 
        let target = document.querySelector('.show .ed')
        let count  = target.dataset.count; 
        let height  = target.offsetHeight; 
        let width  = target.offsetWidth;  
        let windowWidth = document.documentElement.clientWidth;                               
        let one = `0,${count * height}px`
        let two = `${count * width}px,0`     
        let zhi = windowWidth > 992 ? `translate(0,${count * height}px)` :  `translate(${count * width}px,0)`  ;                                         
        animaDom.style.transform =zhi; 
    }
     const sizeev = () => {     //节流窗口调整事件定义
        if(!id.current) {
            id.current = setTimeout(() =>{
                 animaEv();
                 animanice();       
                 id.current = null;
            },100)
        }else{
            clearTimeout(id.current);
            id.current = setTimeout(() =>{
                animaEv();   
                animanice();                       
                id.current = null;
           },100)
        }
    }
    useEffect(() => {            //定义动画条高度        
        animaEv();
        window.addEventListener('resize',sizeev)         
    },[])
       
    
    const change = (e) => {                                                 
           let oldtarget = domR;
           let target = e.target.closest('.ctt');
           if(!target) return;
           
           let height = target.offsetHeight;
           let width = target.offsetWidth;
           let count = target.dataset.count;           
                      
           if(target !== oldtarget) {                
                oldtarget.classList.remove('ed');
                target.classList.add('ed');                     
                animaRef.current.style.transform =windowStatus ?  `translateY(${count * height}px)`: `translateX(${count * width}px)`;            
                photoRef.src = `${count}.png`    
                photoRef.hidden = true; 
                setTimeout(() => {
                    photoRef.hidden = false; 
                }, 10);          
                domR = target;
           }
                                    
    }
    return (
        <div className='row show p-5'>
             <div className="col-12 col-lg-5 offset-0 offset-lg-1 left" onMouseOver={change}>
                 <div className="row">
                    <div data-count='0' className="col-4 col-lg-12 pl-4 ctt ed" ref={ref => domR=ref}>
                        <div className="row align-self-center">
                            <div className="h3 pl-0 col-12">
                                  Practice Case Display
                            </div>                                          
                            <p className='h2 font-size'>
                                 View page of a post. And some interactive components
                            </p>
                        </div>
                    </div>
                    <div data-count='1' className="col-4 col-lg-12 pl-4 ctt">
                        <div className="row align-self-center">
                            <div className="h3 pl-0  col-12">
                                   Practice Case Display
                            </div>                                          
                            <p className='h2 font-size'>
                                    A website background, used to modify the information displayed on the website
                            </p>
                        </div>
                    </div>
                    <div data-count='2' className="col-4 col-lg-12  pl-4 ctt">
                        <div className="row align-self-center">
                            <div className="h3 pl-0  col-12">
                                    Practice Case Display
                            </div>                                          
                            <p className='h2 font-size'>
                                A website similar to ins for uploading pictures and information.
                            </p>
                        </div>
                    </div>
                    <div className="black-anima" ref={ animaRef }>

                    </div>
                 </div>
             </div>
             <div className="col-12 col-lg-6  photo">
                 <div className="cnt">
                    <img src="0.png" className='img-responsive img-show mx-auto' alt="flow" ref={ref => photoRef =ref}/>
                 </div>
             </div>
<style jsx>{`
        
   .show {
      height:85vh;
   }
   .show .photo  {
       margin-top:2vh;       
       height:auto;
       display:flex;
       justify-content:center;
       align-items:center;
       overflow:hidden;
   }
   .left>.row {
       height:100%;
   }
   .ctt {
       height:33%;
       display:flex;       
       color:#2b4578;
       opacity:0.5;
   }
   
   .ctt:hover {
        opacity:1;
   }
   .ed {
     
        opacity:1;
   }
   .left {
       border-left:2px solid black;
       position:relative;
       height:100%;
   }
   .black-anima {
       width:6px;     
       position:absolute;
       background:black;
       top:0;
       left:0;
       transition:.6s;
       
   }
   img {
       height:auto;
       width :100%;   
   }
   .img-show {
        animation:gog 0.5s 1;
   }
   
   @keyframes gog {
       0%{
          opacity:0; 
       }
       100%{
            opacity:1;
        }
   }
   @media (max-width:992px) {
        .show {
            height:auto;
        }
       .left {
           border-left:none;
           border-bottom:2px solid black;
           height:auto;
       }
       .show .photo  {            
            min-height:52vh;
            padding:0;
       }
       .ctt {
           display:flex;
           flex-direction:column;
           align-items:center;
       }      
       .black-anima {
            width:40px;         
            height:6px;                     
            top:100%;
            bottom:0;
            left:0;                   
        }
        .left .row {
            height:auto;
        }
        .cnt {
            width:100%;
        }
        img {
            height:auto;       
            width:100%;
       }
       .font-size{
           font-size:20px;
       }
   }
`}</style>
        </div>
    )
}

export default Show
