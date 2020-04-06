import React from 'react'

const List =React.forwardRef( ({BookData,sendMessage,open},ref) => {
     
     console.log(BookData);
     const closeWindowEv = () => {
         ref.current.classList.remove('open-list');
         document.body.style.overflow = "";
     }
     const message = (data)  => {
        sendMessage(data);
        open();
        document.body.style.overflow = "";
     }  
        return (
            <div className='content-list overflow-auto' ref={ref}>           
                <div className="back justify-content-center align-items-center rounded-circle" onClick={closeWindowEv}>
                    
                </div>
                {  BookData && (
                            <div className="row m-0 p-0 mt-5 justify-content-center">
                                {
                                    BookData.BookMessage.map(e => (
                                    <div className="col-8 mt-4 p-4 rounded shadow"
                                          key={e.createTime}
                                          onClick={() => message(e)}
                                          >
                                        <h2 className='text-center'>
                                            {e.pageTitle}
                                        </h2>
                                    </div>
                                ))
                                }
                                
                                
                                
                            </div>)
               }
                <style jsx>{`
                    .content-list{
                        width:100%;
                        height:85vh;
                        background:#232126;
                        background:linear-gradient(125deg, #8d6bff, #3766ff);
                        position:fixed;
                        z-index:2;
                        top:15%;
                        left:50%;         
                        transition:.5s;            
                        transform:translate(-50%,100%);                     
                    }
                    .open-list {
                        transform:translate(-50%,0%);                     
                    }
                    @media (max-width:992px) {
                            .content-list {
                                height:92vh;
                                top:8%;
                            }
                    }
                
                    .back {                     
                        position:absolute;
                        right:10px;
                        top:10px;
                        color:white;
                        width:40px;
                        height:40px;
                        display:flex;
                        cursor:pointer;
                        background:white;
                    }                
                    .rounded {
                        transition:.4s;
                        background:#17cdd0;
                        background:white;
                        color:black;
                        cursor:pointer;
                    }
                    .rounded:hover {
                        margin-bottom:2vh;
                    }
                    `}</style>
            </div>
        )
})

export default List
