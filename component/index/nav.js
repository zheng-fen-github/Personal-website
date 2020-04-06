import React from 'react'
import Link from 'next/link'

function Nav() {
    let Dom;
    const toggle = () => {
          Dom.classList.toggle('d-none')
    }
    return (
        <div className='row nav' id='nav'>
            <div className="col-8 col-lg-3 justify-content-start logo">
              <div className="img ml-5 ml-lg-0">
                  <img src="logo-left.png" alt="logo"/>            
                  <img src="logo-right.png" alt="logo"/>
              </div>
            </div>
            <div className=" col-4 col-lg-1" onClick={toggle}>
                <div className="row d-flex d-lg-none justify-content-end pr-4 align-items-center">
                    <svg t="1585663199614" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2193" width="40" height="40"><path d="M898.8 278.4H152.8a32 32 0 0 1 0-64h746a32 32 0 0 1 0 64zM898.8 547.408H152.8a32 32 0 0 1 0-64h746a32 32 0 0 1 0 64zM898.8 816.4H152.8a32 32 0 0 1 0-64h746a32 32 0 0 1 0 64z" fill="#ffffff" p-id="2194"></path></svg>
                </div>
            </div>
            <div  className="col-12 col-lg-8 d-lg-flex d-none bg-black" ref={ref => Dom=ref}>              
                <ul className="list">
                  <li className="item">
                     <Link href="/book/react">                          
                             <h2>React</h2>                         
                     </Link>
                  </li>
                  <li className="item">
                     <Link href="/book/javascript">                        
                             <h2>Javascript</h2>                         
                     </Link>
                      
                  </li>
                  <li className="item">
                     <Link href="/book/html">
                             <h2> Html5</h2>                         
                     </Link>
                     
                  </li>
                  <li className="item">
                    <Link href="/book/css">                          
                             <h2> css3 </h2>                         
                     </Link>                      
                  </li>
                  <li className="item">
                      <Link href="/book/next">                          
                             <h2> Next</h2>                         
                       </Link>                      
                  </li>                  
                  <li className="item">
                     <Link href="/book/bootstrap">                         
                             <h2> Bootstrap</h2>                         
                      </Link>                      
                  </li>                                                     
                </ul>                                                       
            </div>
            <div className="col-auto">

            </div>
            <style jsx>{`
                 .nav {
                    height:15vh;
                 }
                 .nav>div {
                    background:#2b4578;
                 }
                .list {
                    display:flex;
                    padding:0;
                    margin:0;
                    height:100%;
                    width:100%;
                    list-style:none;
                    align-items:center;                   
                }
                .row {
                    height:100%;
                }
                .item:hover>h2 {
                    transform:scale(1.2);
                }
                h2 {
                    transition:.3s;
                }
                .item {
                    flex:1;
                    text-align:center;
                    cursor:pointer;
                }
                .bg-black {
                    background:#2b4578;
                    color:white;
                    display:flex;      
                    padding:0;
                    margin:0; 
                    align-items:center;
                    z-index:999;
                }
                .logo {
                    height:15vh;
                    display:flex;        
                    justify-content:center;
                    align-items:center;
                    background:#2b4578;
                    cursor:pointer;
                }                                                               
                .img {
                    height:60%;
                }
                .img img {
                    height:100%;
                }
                #nav .show{
                  display:flex;
               }
               
                @media (max-width:992px) {
                   
                    .list {
                        flex-direction:column;
                        align-items:flex-start;                        
                    }
                    .item {
                        margin-left:5rem;
                    }
                    .nav {
                        height:auto;
                    }
                    .logo {
                        height:8vh;
                    }
                }

                `}</style>
        </div>
    )
}

export default Nav
