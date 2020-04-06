import React,{useEffect} from 'react'
import Head from 'next/head'
import Show from '../component/index/show'
import Nav from '../component/index/nav'
import Case from '../component/index/case'
import Footer from '../component/index/footer'

const Home = () => {
  useEffect(() => {

  },[])
  return(  
  <>
     <Head>
      <title>Create Next App</title>      
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
    </Head>   
        <Nav/>       
        <Show/>
        <main className='skill'>
          <div className="row skill-title align-items-center justify-content-center">
              <h1> CURRENT OBSESSIONS</h1>
          </div>
          <div className="row skill-list">
             <div className="col">
               <div className="item">
                   <img src="/html.jpg" alt="html"/>
               </div>
               <div className="item">
                  <img src="/css.jpg" alt="css"/>
               </div>
               <div className="item">
                  <img src="/javascript.jpg" alt="javascript"/> 
               </div>
               <div className="item">
                   <img src="/react.jpg" alt="react"/>
               </div>
               <div className="item">
                  <img src="/next.jpg" alt="next"/>
               </div>
               <div className="item">
                  <img src="/bootstrap.jpg" alt="bootstrap"/> 
               </div>
               <div className="item last-child">
                  <img src="/mongodb.jpg" alt="mongodb"/> 
               </div>
              </div>
          </div>
        </main>

        <Case />

        <footer>
             <Footer />
        </footer>    
    <style jsx>{`
                
          .skill .skill-list {
              
               background:black;
               color:white;
               padding:3vh; 
               overflow:hidden;
                       
           }
           .skill-title {
             height:18vh;
             background:black;
             color:white;
           }
           .skill .col {
             display:flex;      
             padding:0;
             animation:round 20s infinite;

           }                      
           .item {
             min-height:15vw;
             min-width:15vw;
             background:white;
             margin:0 6vh;
             border-radius:10%;
             overflow:hidden;
           }
           img {            
             width:100%;
           }
           @keyframes round  {
             0% {
                transform:translateX(0%);
             }
             50% {
                transform:translateX(-100%);
              }
             51% {
                transform:translateX(-100%);
              }
             100% {
              transform:translateX(0%);
              } 

           }
           @media (max-width:992px) {
            .skill-title {
              height:9vh; 
           }
           }
    `}</style>
    
  </>
)}

export default Home
