import React from 'react'
import Head from 'next/head'

function Footer() {
    const gotop = () => {
        window.scrollTo(0,0);
    }
    const messageSend = async (e) => {             //发送信息的事件
               e.preventDefault();
               let form = e.target;
               try {
                    let req = await fetch('http://49.234.96.80:4040/message',{
                        method:'POST',
                        body:new FormData(form),
                    })
                    if(req.ok) {
                        alert('发送成功');
                        form.message.value = '';                          
                    }else{
                        let message = await req.json();
                        throw new Error ('server 响应了状态码为'+req.status+'和信息为'+message);
                    }

               }catch(err) {
                   console.log(err)
               }
               
    }
    return (

        <div className="row footer ">
             <Head>
                 <link rel="stylesheet" href="//at.alicdn.com/t/font_1692861_ox0nq1z4red.css"/>
             </Head>
             <div className="col-8 p-5 logo">              
                  <h1>
                      zf
                  </h1>
                   <h5>
                       Copylight 2020 @ ZF
                   </h5>
             </div>             
             <div className="col-4 gotop">
                 <div className="gogo">
                   <i className='iconfont icon-jiantouxia' onClick={gotop}></i>
                </div>
             </div>
             <div className="col-12 col-lg p-5 message form">
                   <i className='iconfont icon-youxiang'></i>
                   <h2>
                        Send message to me
                   </h2>
                   <form onSubmit={messageSend}>                       
                       <input type="text" name="message" required placeholder='your message' id="message"/>
                       <input type="submit" value="send"/>
                   </form>
             </div>
             <div className="col-12 col-lg pl-5  buddy">
                   <div className="phone">
                      <i className='iconfont icon-shouji'></i>
                      <h2>13434912862</h2>
                   </div>
                   <div className="wechat">
                        <i className='iconfont icon-iconfontweixin'></i>
                        <h2>okokok9610</h2>
                   </div>
                   <div className="email">
                        <i className='iconfont icon-youxiang'></i>
                        <h2>1582893085@qq.com</h2>
                   </div>

            </div>
             <style jsx>{`
                 .buddy {
                     display:flex;
                     justify-content:center;
                     flex-direction:column;
                 }
                 .buddy i {
                      font-size:4rem;                      
                 }
                 
                 .buddy .icon-ai-weixin {
                     font-size:3.6rem;
                 }
                 .buddy div{
                   display:flex;
                   align-items:center;
                 }
                 .buddy div h2 {
                     margin-left:3vw;
                 }
                 .gotop {
                    display:flex;
                    justify-content:flex-end;
                 }
                 .gogo {
                     transform:rotate(180deg);
                     width:5rem;
                     height:5rem;
                     margin:2vh 4vw 0;
                     
                 }
                 .gogo i{
                    font-size:3rem;    
                    position:relative;                
                 }
                 .gogo i:hover::after {
                    transform:scale(1);
                 }
                 .gogo i::after {
                     content:'';
                     width:150%;
                     height:150%;
                     background:white;
                     position:absolute;
                     top:-25%;
                     left:-25%;
                     border-radius:50%;
                     opacity:0.5;
                     transform:scale(0);
                     transition:.2s;
                 }
               .footer {
                   height:50vh;
                   background:#2b4578;                   
                   color:white;
               }
               
               .form {
                    display:flex;
                   flex-direction:column;
                   justify-content:flex-end;
                   
               }
               form {
                   width:100%;   
                   display:flex;   
                   margin-top:1vh;             
               }
               form input[type='text'] {
                      width:18vw;
                      height:4vh;
               }
               form input[type='submit'] {
                      width:6vw;
                      height:4vh;
                      background:black;
                      color:white;
                      font-size:1.2rem;
                      border:none;
                      transition:.4s;
               }
               form input[type='submit']:hover {
                   transform:scale(1.2);
               }
               form input[type='submit']:active {
                   transform:scale(1.2);
               }
               .form i {
                   font-size:3rem;
                   color:white;
               }
               @media (max-width:992px) {
                .footer {
                   height:auto;
                   background:#2b4578;                   
                   color:white;
                }
                .buddy div{
                  width:50%;
                  margin:0 auto;
                  
                 }
                 form input[type='text'] {
                      width:60vw;
                     
                 }
                 form input[type='submit'] {
                      width:10vw;                     
                  }
               }
    `}</style>  
        </div>
    )
}

export default Footer
