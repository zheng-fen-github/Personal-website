(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{DiEm:function(e,t,s){"use strict";var a=s("MX0m"),i=s.n(a),n=s("q1tI"),o=s.n(n),l=s("YFqc"),r=s.n(l),c=o.a.createElement;t.a=function(){var e;return c("div",{id:"nav",className:"jsx-1260759978 row nav"},c("div",{className:"jsx-1260759978 col-8 col-lg-3 justify-content-start logo"},c("div",{className:"jsx-1260759978 img ml-5 ml-lg-0"},c("img",{src:"logo-left.png",alt:"logo",className:"jsx-1260759978"}),c("img",{src:"logo-right.png",alt:"logo",className:"jsx-1260759978"}))),c("div",{onClick:function(){e.classList.toggle("d-none")},className:"jsx-1260759978  col-4 col-lg-1"},c("div",{className:"jsx-1260759978 row d-flex d-lg-none justify-content-end pr-4 align-items-center"},c("svg",{t:"1585663199614",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2193",width:"40",height:"40",className:"jsx-1260759978 icon"},c("path",{d:"M898.8 278.4H152.8a32 32 0 0 1 0-64h746a32 32 0 0 1 0 64zM898.8 547.408H152.8a32 32 0 0 1 0-64h746a32 32 0 0 1 0 64zM898.8 816.4H152.8a32 32 0 0 1 0-64h746a32 32 0 0 1 0 64z",fill:"#ffffff","p-id":"2194",className:"jsx-1260759978"})))),c("div",{ref:function(t){return e=t},className:"jsx-1260759978 col-12 col-lg-8 d-lg-flex d-none bg-black"},c("ul",{className:"jsx-1260759978 list"},c("li",{className:"jsx-1260759978 item"},c(r.a,{href:"/book/react"},c("h2",{className:"jsx-1260759978"},"React"))),c("li",{className:"jsx-1260759978 item"},c(r.a,{href:"/book/javascript"},c("h2",{className:"jsx-1260759978"},"Javascript"))),c("li",{className:"jsx-1260759978 item"},c(r.a,{href:"/book/html"},c("h2",{className:"jsx-1260759978"}," Html5"))),c("li",{className:"jsx-1260759978 item"},c(r.a,{href:"/book/css"},c("h2",{className:"jsx-1260759978"}," css3 "))),c("li",{className:"jsx-1260759978 item"},c(r.a,{href:"/book/next"},c("h2",{className:"jsx-1260759978"}," Next"))),c("li",{className:"jsx-1260759978 item"},c(r.a,{href:"/book/bootstrap"},c("h2",{className:"jsx-1260759978"}," Bootstrap"))))),c("div",{className:"jsx-1260759978 col-auto"}),c(i.a,{id:"1260759978"},[".nav.jsx-1260759978{height:15vh;}",".nav.jsx-1260759978>div.jsx-1260759978{background:#2b4578;}",".list.jsx-1260759978{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0;margin:0;height:100%;width:100%;list-style:none;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".row.jsx-1260759978{height:100%;}",".item.jsx-1260759978:hover>h2.jsx-1260759978{-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);}","h2.jsx-1260759978{-webkit-transition:.3s;transition:.3s;}",".item.jsx-1260759978{-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;cursor:pointer;}",".bg-black.jsx-1260759978{background:#2b4578;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0;margin:0;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;z-index:999;}",".logo.jsx-1260759978{height:15vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#2b4578;cursor:pointer;}",".img.jsx-1260759978{height:60%;}",".img.jsx-1260759978 img.jsx-1260759978{height:100%;}","#nav.jsx-1260759978 .show.jsx-1260759978{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}","@media (max-width:992px){.list.jsx-1260759978{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.item.jsx-1260759978{margin-left:5rem;}.nav.jsx-1260759978{height:auto;}.logo.jsx-1260759978{height:8vh;}}"]))}},RNiq:function(e,t,s){"use strict";s.r(t);var a=s("MX0m"),i=s.n(a),n=s("q1tI"),o=s.n(n),l=s("8Kt/"),r=s.n(l),c=o.a.createElement;var m=function(){var e,t,s=Object(n.useState)(!0),a=s[0],l=s[1],r=Object(n.useRef)(),m=o.a.createRef(),x=function(){var e=document.documentElement.clientWidth,t=document.querySelector(".show .black-anima"),s=document.querySelector(".show .ctt");e>992?(l(!0),t.style.height=s.offsetHeight+"px",t.style.width="6px"):(l((function(){return!1})),t.style.height="6px",t.style.width=s.offsetWidth+"px")},f=function(){var e=document.querySelector(".show .black-anima"),t=document.querySelector(".show .ed"),s=t.dataset.count,a=t.offsetHeight,i=t.offsetWidth,n=document.documentElement.clientWidth,o=("0,".concat(s*a,"px"),"".concat(s*i,"px,0"),n>992?"translate(0,".concat(s*a,"px)"):"translate(".concat(s*i,"px,0)"));e.style.transform=o},d=function(){r.current?(clearTimeout(r.current),r.current=setTimeout((function(){x(),f(),r.current=null}),100)):r.current=setTimeout((function(){x(),f(),r.current=null}),100)};return Object(n.useEffect)((function(){x(),window.addEventListener("resize",d)}),[]),c("div",{className:"jsx-1734988746 row show p-5"},c("div",{onMouseOver:function(s){var i=e,n=s.target.closest(".ctt");if(n){var o=n.offsetHeight,l=n.offsetWidth,r=n.dataset.count;n!==i&&(i.classList.remove("ed"),n.classList.add("ed"),m.current.style.transform=a?"translateY(".concat(r*o,"px)"):"translateX(".concat(r*l,"px)"),t.src="".concat(r,".png"),t.hidden=!0,setTimeout((function(){t.hidden=!1}),10),e=n)}},className:"jsx-1734988746 col-12 col-lg-5 offset-0 offset-lg-1 left"},c("div",{className:"jsx-1734988746 row"},c("div",{"data-count":"0",ref:function(t){return e=t},className:"jsx-1734988746 col-4 col-lg-12 pl-4 ctt ed"},c("div",{className:"jsx-1734988746 row align-self-center"},c("div",{className:"jsx-1734988746 h3 pl-0 col-12"},"Practice Case Display"),c("p",{className:"jsx-1734988746 h2 font-size"},"View page of a post. And some interactive components"))),c("div",{"data-count":"1",className:"jsx-1734988746 col-4 col-lg-12 pl-4 ctt"},c("div",{className:"jsx-1734988746 row align-self-center"},c("div",{className:"jsx-1734988746 h3 pl-0  col-12"},"Practice Case Display"),c("p",{className:"jsx-1734988746 h2 font-size"},"A website background, used to modify the information displayed on the website"))),c("div",{"data-count":"2",className:"jsx-1734988746 col-4 col-lg-12  pl-4 ctt"},c("div",{className:"jsx-1734988746 row align-self-center"},c("div",{className:"jsx-1734988746 h3 pl-0  col-12"},"Practice Case Display"),c("p",{className:"jsx-1734988746 h2 font-size"},"A website similar to ins for uploading pictures and information."))),c("div",{ref:m,className:"jsx-1734988746 black-anima"}))),c("div",{className:"jsx-1734988746 col-12 col-lg-6  photo"},c("div",{className:"jsx-1734988746 cnt"},c("img",{src:"0.png",alt:"flow",ref:function(e){return t=e},className:"jsx-1734988746 img-responsive img-show mx-auto"}))),c(i.a,{id:"1734988746"},[".show.jsx-1734988746{height:85vh;}",".show.jsx-1734988746 .photo.jsx-1734988746{margin-top:2vh;height:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;}",".left.jsx-1734988746>.row.jsx-1734988746{height:100%;}",".ctt.jsx-1734988746{height:33%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:#2b4578;opacity:0.5;}",".ctt.jsx-1734988746:hover{opacity:1;}",".ed.jsx-1734988746{opacity:1;}",".left.jsx-1734988746{border-left:2px solid black;position:relative;height:100%;}",".black-anima.jsx-1734988746{width:6px;position:absolute;background:black;top:0;left:0;-webkit-transition:.6s;transition:.6s;}","img.jsx-1734988746{height:auto;width :100%;}",".img-show.jsx-1734988746{-webkit-animation:gog-jsx-1734988746 0.5s 1;animation:gog-jsx-1734988746 0.5s 1;}","@-webkit-keyframes gog-jsx-1734988746{0%{opacity:0;}100%{opacity:1;}}","@keyframes gog-jsx-1734988746{0%{opacity:0;}100%{opacity:1;}}","@media (max-width:992px){.show.jsx-1734988746{height:auto;}.left.jsx-1734988746{border-left:none;border-bottom:2px solid black;height:auto;}.show.jsx-1734988746 .photo.jsx-1734988746{min-height:52vh;padding:0;}.ctt.jsx-1734988746{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.black-anima.jsx-1734988746{width:40px;height:6px;top:100%;bottom:0;left:0;}.left.jsx-1734988746 .row.jsx-1734988746{height:auto;}.cnt.jsx-1734988746{width:100%;}img.jsx-1734988746{height:auto;width:100%;}.font-size.jsx-1734988746{font-size:20px;}}"]))},x=s("DiEm"),f=o.a.createElement,d=function(){return f(o.a.Fragment,null,f("div",{className:"jsx-2447471329 row case-ctn p-5 bg-danger align-items-center"},f("div",{className:"jsx-2447471329 col-12 col-lg order-12 mt-5 mt-lg-0 order-lg-1 case-left"},f("div",{className:"jsx-2447471329 block test"},f("img",{src:"htmlcode.png",alt:"htmlcode",className:"jsx-2447471329"}),f("div",{className:"jsx-2447471329 h2 pb-3 pt-3 text-center"},"html")),f("div",{className:"jsx-2447471329 block"},f("img",{src:"csscode.png",alt:"csscode",className:"jsx-2447471329"}),f("div",{className:"jsx-2447471329 h2 pb-3 pt-3 text-center"},"css")),f("div",{className:"jsx-2447471329 block test"},f("img",{src:"jscode.png",alt:"jscode",className:"jsx-2447471329"}),f("div",{className:"jsx-2447471329 h2 pb-3 pt-3 text-center"},"js")),f("div",{className:"jsx-2447471329 block"},f("img",{src:"reactcode.png",alt:"reactfcode",className:"jsx-2447471329"}),f("div",{className:"jsx-2447471329 h2 pb-3 pt-3 text-center"},"react"))),f("div",{className:"jsx-2447471329 col-12 col-lg case-right order-1 order-lg-12"},f("img",{src:"code1.jpg",alt:"case\u56e2\u7247",className:"jsx-2447471329"}))),f(i.a,{id:"2447471329"},[".case-ctn.jsx-2447471329{height:100vh;}",".case-right.jsx-2447471329{overflow:hidden;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".case-left.jsx-2447471329{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start;height:calc(100vh - 5rem);overflow:auto;}",".case-left.jsx-2447471329::-webkit-scrollbar{display:none;}",".block.jsx-2447471329{width:46%;background:white;}",".test.jsx-2447471329{margin-top:10vh;}","img.jsx-2447471329{width:100%;}","@media (max-width:992px){.case-ctn.jsx-2447471329{height:auto;}}"]))},p=s("o0o1"),h=s.n(p),u=o.a.createElement;var g=function(){return u("div",{className:"jsx-3235777253 row footer "},u(r.a,null,u("link",{rel:"stylesheet",href:"//at.alicdn.com/t/font_1692861_ox0nq1z4red.css",className:"jsx-3235777253"})),u("div",{className:"jsx-3235777253 col-8 p-5 logo"},u("h1",{className:"jsx-3235777253"},"zf"),u("h5",{className:"jsx-3235777253"},"Copylight 2020 @ ZF")),u("div",{className:"jsx-3235777253 col-4 gotop"},u("div",{className:"jsx-3235777253 gogo"},u("i",{onClick:function(){window.scrollTo(0,0)},className:"jsx-3235777253 iconfont icon-jiantouxia"}))),u("div",{className:"jsx-3235777253 col-12 col-lg p-5 message form"},u("i",{className:"jsx-3235777253 iconfont icon-youxiang"}),u("h2",{className:"jsx-3235777253"},"Send message to me"),u("form",{onSubmit:function(e){var t,s,a;return h.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return e.preventDefault(),t=e.target,i.prev=2,i.next=5,h.a.awrap(fetch("http://49.234.96.80:4040/message",{method:"POST",body:new FormData(t)}));case 5:if(!(s=i.sent).ok){i.next=11;break}alert("\u53d1\u9001\u6210\u529f"),t.message.value="",i.next=15;break;case 11:return i.next=13,h.a.awrap(s.json());case 13:throw a=i.sent,new Error("server \u54cd\u5e94\u4e86\u72b6\u6001\u7801\u4e3a"+s.status+"\u548c\u4fe1\u606f\u4e3a"+a);case 15:i.next=20;break;case 17:i.prev=17,i.t0=i.catch(2),console.log(i.t0);case 20:case"end":return i.stop()}}),null,null,[[2,17]],Promise)},className:"jsx-3235777253"},u("input",{type:"text",name:"message",required:!0,placeholder:"your message",id:"message",className:"jsx-3235777253"}),u("input",{type:"submit",value:"send",className:"jsx-3235777253"}))),u("div",{className:"jsx-3235777253 col-12 col-lg pl-5  buddy"},u("div",{className:"jsx-3235777253 phone"},u("i",{className:"jsx-3235777253 iconfont icon-shouji"}),u("h2",{className:"jsx-3235777253"},"13434912862")),u("div",{className:"jsx-3235777253 wechat"},u("i",{className:"jsx-3235777253 iconfont icon-iconfontweixin"}),u("h2",{className:"jsx-3235777253"},"okokok9610")),u("div",{className:"jsx-3235777253 email"},u("i",{className:"jsx-3235777253 iconfont icon-youxiang"}),u("h2",{className:"jsx-3235777253"},"1582893085@qq.com"))),u(i.a,{id:"3235777253"},[".buddy.jsx-3235777253{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}",".buddy.jsx-3235777253 i.jsx-3235777253{font-size:4rem;}",".buddy.jsx-3235777253 .icon-ai-weixin.jsx-3235777253{font-size:3.6rem;}",".buddy.jsx-3235777253 div.jsx-3235777253{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".buddy.jsx-3235777253 div.jsx-3235777253 h2.jsx-3235777253{margin-left:3vw;}",".gotop.jsx-3235777253{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}",".gogo.jsx-3235777253{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);width:5rem;height:5rem;margin:2vh 4vw 0;}",".gogo.jsx-3235777253 i.jsx-3235777253{font-size:3rem;position:relative;}",".gogo.jsx-3235777253 i.jsx-3235777253:hover.jsx-3235777253::after{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}",".gogo.jsx-3235777253 i.jsx-3235777253::after{content:'';width:150%;height:150%;background:white;position:absolute;top:-25%;left:-25%;border-radius:50%;opacity:0.5;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);-webkit-transition:.2s;transition:.2s;}",".footer.jsx-3235777253{height:50vh;background:#2b4578;color:white;}",".form.jsx-3235777253{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}","form.jsx-3235777253{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:1vh;}","form.jsx-3235777253 input[type='text'].jsx-3235777253{width:18vw;height:4vh;}","form.jsx-3235777253 input[type='submit'].jsx-3235777253{width:6vw;height:4vh;background:black;color:white;font-size:1.2rem;border:none;-webkit-transition:.4s;transition:.4s;}","form.jsx-3235777253 input[type='submit'].jsx-3235777253:hover{-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);}","form.jsx-3235777253 input[type='submit'].jsx-3235777253:active{-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);}",".form.jsx-3235777253 i.jsx-3235777253{font-size:3rem;color:white;}","@media (max-width:992px){.footer.jsx-3235777253{height:auto;background:#2b4578;color:white;}.buddy.jsx-3235777253 div.jsx-3235777253{width:50%;margin:0 auto;}form.jsx-3235777253 input[type='text'].jsx-3235777253{width:60vw;}form.jsx-3235777253 input[type='submit'].jsx-3235777253{width:10vw;}}"]))},j=o.a.createElement;t.default=function(){return Object(n.useEffect)((function(){}),[]),j(o.a.Fragment,null,j(r.a,null,j("title",{className:"jsx-1721205043"},"Create Next App"),j("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css",integrity:"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",crossorigin:"anonymous",className:"jsx-1721205043"})),j(x.a,null),j(m,null),j("main",{className:"jsx-1721205043 skill"},j("div",{className:"jsx-1721205043 row skill-title align-items-center justify-content-center"},j("h1",{className:"jsx-1721205043"}," CURRENT OBSESSIONS")),j("div",{className:"jsx-1721205043 row skill-list"},j("div",{className:"jsx-1721205043 col"},j("div",{className:"jsx-1721205043 item"},j("img",{src:"/html.jpg",alt:"html",className:"jsx-1721205043"})),j("div",{className:"jsx-1721205043 item"},j("img",{src:"/css.jpg",alt:"css",className:"jsx-1721205043"})),j("div",{className:"jsx-1721205043 item"},j("img",{src:"/javascript.jpg",alt:"javascript",className:"jsx-1721205043"})),j("div",{className:"jsx-1721205043 item"},j("img",{src:"/react.jpg",alt:"react",className:"jsx-1721205043"})),j("div",{className:"jsx-1721205043 item"},j("img",{src:"/next.jpg",alt:"next",className:"jsx-1721205043"})),j("div",{className:"jsx-1721205043 item"},j("img",{src:"/bootstrap.jpg",alt:"bootstrap",className:"jsx-1721205043"})),j("div",{className:"jsx-1721205043 item last-child"},j("img",{src:"/mongodb.jpg",alt:"mongodb",className:"jsx-1721205043"}))))),j(d,null),j("footer",{className:"jsx-1721205043"},j(g,null)),j(i.a,{id:"1721205043"},[".skill.jsx-1721205043 .skill-list.jsx-1721205043{background:black;color:white;padding:3vh;overflow:hidden;}",".skill-title.jsx-1721205043{height:18vh;background:black;color:white;}",".skill.jsx-1721205043 .col.jsx-1721205043{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0;-webkit-animation:round-jsx-1721205043 20s infinite;animation:round-jsx-1721205043 20s infinite;}",".item.jsx-1721205043{min-height:15vw;min-width:15vw;background:white;margin:0 6vh;border-radius:10%;overflow:hidden;}","img.jsx-1721205043{width:100%;}","@-webkit-keyframes round-jsx-1721205043{0%{-webkit-transform:translateX(0%);-ms-transform:translateX(0%);transform:translateX(0%);}50%{-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%);}51%{-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%);}100%{-webkit-transform:translateX(0%);-ms-transform:translateX(0%);transform:translateX(0%);}}","@keyframes round-jsx-1721205043{0%{-webkit-transform:translateX(0%);-ms-transform:translateX(0%);transform:translateX(0%);}50%{-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%);}51%{-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%);}100%{-webkit-transform:translateX(0%);-ms-transform:translateX(0%);transform:translateX(0%);}}","@media (max-width:992px){.skill-title.jsx-1721205043{height:9vh;}}"]))}},YFqc:function(e,t,s){e.exports=s("cTJO")},cTJO:function(e,t,s){"use strict";var a=s("lwsE"),i=s("W8MJ"),n=s("a1gu"),o=s("Nsbk"),l=s("7W2i");function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var c=s("TqRt"),m=s("284h");t.__esModule=!0,t.default=void 0;var x,f=m(s("q1tI")),d=s("QmWs"),p=s("g/15"),h=c(s("nOHt"));function u(e){return e&&"object"===typeof e?(0,p.formatWithValidation)(e):e}var g=new Map,j=window.IntersectionObserver,b={};function w(){return x||(j?x=new j((function(e){e.forEach((function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(x.unobserve(e.target),g.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var k=function(e){l(c,e);var t,s=(t=c,function(){var e,s=o(t);if(r()){var a=o(this).constructor;e=Reflect.construct(s,arguments,a)}else e=s.apply(this,arguments);return n(this,e)});function c(e){var t;return a(this,c),(t=s.call(this,e)).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var t=null,s=null,a=null;return function(i,n){if(a&&i===t&&n===s)return a;var o=e(i,n);return t=i,s=n,a=o,o}}((function(e,t){return{href:u(e),as:t?u(t):t}})),t.linkClicked=function(e){var s=e.currentTarget,a=s.nodeName,i=s.target;if("A"!==a||!(i&&"_self"!==i||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var n=t.formatUrls(t.props.href,t.props.as),o=n.href,l=n.as;if(function(e){var t=(0,d.parse)(e,!1,!0),s=(0,d.parse)((0,p.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===s.protocol&&t.host===s.host}(o)){var r=window.location.pathname;o=(0,d.resolve)(r,o),l=l?(0,d.resolve)(r,l):o,e.preventDefault();var c=t.props.scroll;null==c&&(c=l.indexOf("#")<0),h.default[t.props.replace?"replace":"push"](o,l,{shallow:t.props.shallow}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==e.prefetch,t}return i(c,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),s=t.href,a=t.as,i=(0,d.resolve)(e,s);return[i,a?(0,d.resolve)(e,a):i]}},{key:"handleRef",value:function(e){var t=this;this.p&&j&&e&&e.tagName&&(this.cleanUpListeners(),b[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var s=w();return s?(s.observe(e),g.set(e,t),function(){try{s.unobserve(e)}catch(t){console.error(t)}g.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();h.default.prefetch(t[0],t[1],e).catch((function(e){0})),b[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,s=this.formatUrls(this.props.href,this.props.as),a=s.href,i=s.as;"string"===typeof t&&(t=f.default.createElement("a",null,t));var n=f.Children.only(t),o={ref:function(t){e.handleRef(t),n&&"object"===typeof n&&n.ref&&("function"===typeof n.ref?n.ref(t):"object"===typeof n.ref&&(n.ref.current=t))},onMouseEnter:function(t){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==n.type||"href"in n.props)||(o.href=i||a),f.default.cloneElement(n,o)}}]),c}(f.Component);t.default=k},vlRD:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s("RNiq")}])}},[["vlRD",0,1,2,3]]]);