import React from 'react'

const Case = () => {
    return (
       <> 
    
            <div className="row case-ctn p-5 bg-danger align-items-center">              
                    <div className="col-12 col-lg order-12 mt-5 mt-lg-0 order-lg-1 case-left">
                         <div className="block test">
                             <img src="htmlcode.png" alt="htmlcode"/>
                             <div className="h2 pb-3 pt-3 text-center">
                                html
                             </div>
                         </div>
                         <div className="block">
                              <img src="csscode.png" alt="csscode"/>
                             <div className="h2 pb-3 pt-3 text-center">
                                 css
                             </div>
                         </div>
                         <div className="block test">
                              <img src="jscode.png" alt="jscode"/>
                             <div className="h2 pb-3 pt-3 text-center">
                                 js
                             </div>
                         </div>
                         <div className="block">
                              <img src="reactcode.png" alt="reactfcode"/>
                              <div className="h2 pb-3 pt-3 text-center">
                                 react
                              </div>
                         </div>                         
                    </div>
                    <div className="col-12 col-lg case-right order-1 order-lg-12">
                         <img src="code1.jpg" alt="case团片"/>
                    </div>             
            </div>
     
        <style jsx>{`
           .case-ctn {
              height:100vh;            
          }
          .case-right {
              overflow:hidden;              
              height:100%;
              display:flex;
              align-items:center;
          }
          .case-left {
              display:flex;
              flex-wrap:wrap; 
              justify-content:space-between;
              align-items:flex-start; 
              align-content:flex-start;
              height:calc(100vh - 5rem);
              overflow:auto;
          }
          .case-left::-webkit-scrollbar {display:none};

          
          .block {
              width:46%;            
              background:white;
          }
          .test {
              margin-top:10vh;
          }
          img {              
              width:100%;
          }
          @media (max-width:992px) {
            .case-ctn {
              height:auto;            
          }
          }
    `}</style>
    </>
    )
}

export default Case

