(this.webpackJsonpbabe=this.webpackJsonpbabe||[]).push([[0],{20:function(e,t,n){},41:function(e,t,n){},5:function(e,t,n){e.exports={Container:"bgvideo_Container__2VDr6",Container1:"bgvideo_Container1__2s02K",Container2:"bgvideo_Container2__3x6z6",Video:"bgvideo_Video__3SYeW",Content:"bgvideo_Content__3iF1r",Button1:"bgvideo_Button1__3LlEJ",Button:"bgvideo_Button__AnCNk",SubContent:"bgvideo_SubContent__1nIyK",Name:"bgvideo_Name__3j6F7",Name1:"bgvideo_Name1__3bSOo",Dialogue:"bgvideo_Dialogue__rSc8A",Dialogue1:"bgvideo_Dialogue1__b-qWK",Say:"bgvideo_Say__if4IA"}},60:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),s=n.n(i),c=n(16),o=n.n(c),l=(n(41),n(20),n(34)),r=n.n(l),d=n(7),j=n(10),b=n.n(j),u=n.p+"static/media/converse.ff54b706.mp4",h=n(5),m=n.n(h),p=n.p+"static/media/box.089f66f3.png",O=n.p+"static/media/homestead.dfb6f128.mp3",x=n.p+"static/media/complete.b0427529.mp3",g=n(6),f=n.p+"static/media/quest_complete.86f66b84.PNG",v=n.p+"static/media/bday.3cb81d2c.mp3",N=new Audio(v),y=function(e){return Object(i.useEffect)((function(){N.addEventListener("ended",(function(e){console.log("audio has been ended")})),!0===e.startMusic&&(N.addEventListener("ended",N.play()),N.play())}),[]),Object(a.jsx)(i.Fragment,{children:Object(a.jsx)(b.a,{component:"div",transitionName:"example",transitionAppear:!0,transitionAppearTimeout:500,transitionEnter:!1,transitionLeave:!1,children:Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("header",{className:"App-header",children:[Object(a.jsx)("br",{}),Object(a.jsxs)("p",{children:[Object(a.jsx)("h2",{className:"Cong",children:"HAPPY BIRTHDAY!"}),"I hope you like it.Kupo!",Object(a.jsx)("br",{}),Object(a.jsx)("h3",{style:{color:"#e31b49"},children:"I LOVE YOU!"})]})]})})})})},w=new Audio(O),C=function(e){var t=Object(i.useState)(new Audio(x)),n=Object(d.a)(t,1)[0],s=u,c=Object(i.useState)(0),o=Object(d.a)(c,2),l=o[0],r=o[1],j=Object(i.useState)(!1),h=Object(d.a)(j,2),O=h[0],v=h[1],N=Object(i.useState)(!1),C=Object(d.a)(N,2),_=C[0],A=C[1],k=Object(i.useState)(!1),S=Object(d.a)(k,2),D=S[0],T=S[1],E=Object(i.useState)(""),L=Object(d.a)(E,2),F=L[0],q=L[1];function B(t){e.answer===t?A(!0):r(0)}function I(t){e.answer===t?T(!0):r(0)}return Object(i.useEffect)((function(){w.addEventListener("ended",(function(e){console.log("audio has been ended")})),n.addEventListener("ended",(function(e){console.log("audio has been ended"),A(!1),v(!0)})),!0===e.startMusic&&(w.addEventListener("ended",w.play()),w.play())}),[]),Object(i.useEffect)((function(){_&&(w.pause(),n.play())}),[_]),Object(i.useEffect)((function(){D&&w.pause()}),[D]),Object(a.jsx)(i.Fragment,{children:Object(a.jsx)(b.a,{component:"div",transitionName:"example",transitionAppear:!0,transitionAppearTimeout:500,transitionEnter:!1,transitionLeave:!1,children:O?Object(a.jsx)(g.a,{to:e.next}):""===e.dialogues[l].line?_?Object(a.jsx)("div",{className:m.a.Container2,children:Object(a.jsx)("img",{src:f})}):Object(a.jsx)("div",{className:m.a.Container1,children:Object(a.jsxs)("div",{className:m.a.Say,children:[Object(a.jsx)("p",{className:m.a.Name1,children:"What will you say?"}),e.choices?Object(a.jsxs)("p",{className:m.a.Dialogue1,children:[Object(a.jsx)("button",{className:m.a.Button,onClick:function(e){B(e.target.outerText)},children:"Come hells or high water!"}),Object(a.jsx)("button",{className:m.a.Button,onClick:function(e){B(e.target.outerText)},children:"For the freedom of all!"}),Object(a.jsx)("button",{className:m.a.Button,onClick:function(e){B(e.target.outerText)},children:"To infinity and beyond!"})]}):Object(a.jsxs)("p",{className:m.a.Dialogue1,children:[Object(a.jsx)("input",{value:F,className:"form-control",onChange:function(e){return q(e.target.value)}}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{className:m.a.Button1,color:"light",onClick:function(){return B(F)},children:"I entered my answer above"})]})]})}):"last"===e.dialogues[l].line?D?Object(a.jsx)(y,{startMusic:!0}):Object(a.jsx)("div",{className:m.a.Container1,children:Object(a.jsxs)("div",{className:m.a.Say,children:[Object(a.jsx)("p",{className:m.a.Name1,children:"What will you say?"}),Object(a.jsxs)("p",{className:m.a.Dialogue1,children:[Object(a.jsx)("button",{className:m.a.Button,onClick:function(e){I(e.target.outerText)},children:"I found it!"}),Object(a.jsx)("button",{className:m.a.Button,onClick:function(e){I(e.target.outerText)},children:"Wait, I'm a little lost."})]})]})}):Object(a.jsxs)("div",{className:m.a.Container,children:[Object(a.jsx)("video",{autoPlay:"autoplay",loop:"loop",muted:!0,className:m.a.Video,children:Object(a.jsx)("source",{src:s,type:"video/mp4"})}),Object(a.jsx)("div",{className:m.a.Content,children:Object(a.jsxs)("div",{className:m.a.SubContent,children:[Object(a.jsx)("p",{className:m.a.Name,children:"Sonjhe"}),Object(a.jsxs)("span",{onClick:function(){console.log(e.dialogues[l].complete),e.dialogues[l].complete?(w.pause(),w.removeEventListener("ended",w.play()),v(!0)):r(l+1)},children:[Object(a.jsx)("p",{className:m.a.Dialogue,children:e.dialogues[l].line}),Object(a.jsx)("img",{src:p})]})]})})]})})})},_=n.p+"static/media/e.c3a49490.PNG",A=n(62),k=n(64),S=n(63),D=function(e){var t=Object(i.useState)(!1),n=Object(d.a)(t,2),s=n[0],c=n[1],o=Object(i.useState)(!1),l=Object(d.a)(o,2),r=l[0],j=l[1];return Object(a.jsx)(i.Fragment,{children:Object(a.jsx)(b.a,{component:"div",transitionName:"example",transitionAppear:!0,transitionAppearTimeout:500,transitionEnter:!1,transitionLeave:!1,children:!1===s?Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("header",{className:"App-header",children:[Object(a.jsx)("img",{src:_,className:"App-logo",alt:"logo",style:{height:100,width:100}}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{children:Object(a.jsx)("h1",{children:"HAPPY BIRTHDAY!"})}),Object(a.jsx)("label",{children:"Are you ready for your surprise?"}),Object(a.jsxs)("div",{className:"d-flex",children:[Object(a.jsx)(A.a,{className:"font-weight-bold ml-2",color:"light",onClick:function(){return c(!0)},children:"Yes"}),Object(a.jsx)(A.a,{className:"font-weight-bold ml-2",color:"dark",onClick:function(){return j(!0)},children:"No"})]})]}),Object(a.jsx)(k.a,{backdrop:"static",fade:!1,keyboard:!1,isOpen:r,centered:!0,children:Object(a.jsxs)(S.a,{children:[Object(a.jsxs)("span",{className:"text-center font-weight-bold",children:[Object(a.jsx)("h5",{children:Object(a.jsx)("strong",{children:e.title})}),Object(a.jsx)("p",{children:"Sabi ko na nga ba gagawin mo to! Pwes, wala kang choice. BLEH!"})]}),Object(a.jsx)("div",{className:"d-flex justify-content-end mt-3",children:Object(a.jsx)(A.a,{disabled:""===e.remarks,className:"btn ml-2 btn-wide font-weight-bold",color:"dark",type:"submit",onClick:function(){return c(!0)},children:"OK"})})]})})]}):Object(a.jsx)(C,{startMusic:!0,dialogues:[{line:"Warrior of Love... Hear... Feel... Think...",complete:!1},{line:"Like the rain from a cloudless sky, a gift from thy beloved will be yours. Holding it is nigh!",complete:!1},{line:"Complete these quests and thou shall be rewarded. Assay to fail and thou will rend mine heart assunder.",complete:!0}],next:"/quest1"})})})},T=n(22),E=n(8),L=n.n(E),F=n.p+"static/media/1.d0acac06.png",q=function(e){var t=Object(i.useState)(!1),n=Object(d.a)(t,2),s=n[0],c=n[1];return Object(a.jsx)(i.Fragment,{children:Object(a.jsx)(b.a,{component:"div",transitionName:"example",transitionAppear:!0,transitionAppearTimeout:500,transitionEnter:!1,transitionLeave:!1,children:Object(a.jsx)("div",{children:s?Object(a.jsx)("div",{children:Object(a.jsx)(C,{startMusic:!0,dialogues:[{line:"When you feel down and lost, you must pray at any cost.",complete:!1},{line:"For the divine mercy will guide you, to what the holy family will give you.",complete:!1},{line:"Don't be sad, don't feel blue. Now go to the place yonder and tell me what's the clue.",complete:!1},{line:"",complete:!0}],answer:"Come hells or high water!",next:"/quest2",choices:!0})}):Object(a.jsxs)("div",{className:L.a.Container,children:[Object(a.jsx)("span",{onClick:function(){return c(!0)},children:Object(a.jsx)("p",{className:L.a.Name,children:"Accept"})}),Object(a.jsx)("p",{className:L.a.Dialogue,children:"Decline"}),Object(a.jsx)("img",{src:F})]})})})})},B=n.p+"static/media/2.1abc214c.png",I=function(e){var t=Object(i.useState)(!1),n=Object(d.a)(t,2),s=n[0],c=n[1];return Object(a.jsx)(i.Fragment,{children:Object(a.jsx)(b.a,{component:"div",transitionName:"example",transitionAppear:!0,transitionAppearTimeout:500,transitionEnter:!1,transitionLeave:!1,children:Object(a.jsx)("div",{children:s?Object(a.jsx)("div",{children:Object(a.jsx)(C,{startMusic:!0,dialogues:[{line:"So take a chill pill, don't you feel the thrill?",complete:!1},{line:"This one is very easy - effortless, obvious, EASY!",complete:!1},{line:"The clue is entangled with an invisible root. Think very carefully, think of finding the loot.",complete:!1},{line:"Now go to the nest and uproot the roses, if you want yourself to have an access.",complete:!1},{line:"",complete:!0}],answer:"For the freedom of all!",next:"/quest3",choices:!0})}):Object(a.jsxs)("div",{className:L.a.Container,children:[Object(a.jsx)("span",{onClick:function(){return c(!0)},children:Object(a.jsx)("p",{className:L.a.Name,children:"Accept"})}),Object(a.jsx)("p",{className:L.a.Dialogue,children:"Decline"}),Object(a.jsx)("img",{src:B})]})})})})},M=n.p+"static/media/3.00db610f.png",P=function(e){var t=Object(i.useState)(!1),n=Object(d.a)(t,2),s=n[0],c=n[1];return Object(a.jsx)(i.Fragment,{children:Object(a.jsx)(b.a,{component:"div",transitionName:"example",transitionAppear:!0,transitionAppearTimeout:500,transitionEnter:!1,transitionLeave:!1,children:Object(a.jsx)("div",{children:s?Object(a.jsx)("div",{children:Object(a.jsx)(C,{startMusic:!0,dialogues:[{line:"I know it's really easy on the roses. So you think it's all but multiple choices?",complete:!1},{line:"Well you got it wrong. Let's make our journey long.",complete:!1},{line:"Life is full of ups and downs, and it goes round and round.",complete:!1},{line:"For you to reach a destination, it must be in a good condition.",complete:!1},{line:"Do you get where the treasure lie? Now get it, or say goodbye!",complete:!1},{line:"",complete:!0}],answer:"121818",next:"/quest4"})}):Object(a.jsxs)("div",{className:L.a.Container,children:[Object(a.jsx)("span",{onClick:function(){return c(!0)},children:Object(a.jsx)("p",{className:L.a.Name,children:"Accept"})}),Object(a.jsx)("p",{className:L.a.Dialogue,children:"Decline"}),Object(a.jsx)("img",{src:M})]})})})})},Y=n.p+"static/media/4.55889442.png",W=function(e){var t=Object(i.useState)(!1),n=Object(d.a)(t,2),s=n[0],c=n[1];return Object(a.jsx)(i.Fragment,{children:Object(a.jsx)(b.a,{component:"div",transitionName:"example",transitionAppear:!0,transitionAppearTimeout:500,transitionEnter:!1,transitionLeave:!1,children:Object(a.jsx)("div",{children:s?Object(a.jsx)("div",{children:Object(a.jsx)(C,{startMusic:!0,dialogues:[{line:"Arrgh! This time you don't have to go to a place. You just have to think hard on this phase:",complete:!1},{line:"Every night when most of the people are asleep, two hungry goobbues look for something to eat.",complete:!1},{line:"A light meal or something high in calorie, to maintain their mood and big fluffy body.",complete:!1},{line:"This is the last meal of the day but they eat it earlier, by the way.",complete:!1},{line:"",complete:!0}],answer:"midnight snack",next:"/quest5"})}):Object(a.jsxs)("div",{className:L.a.Container,children:[Object(a.jsx)("span",{onClick:function(){return c(!0)},children:Object(a.jsx)("p",{className:L.a.Name,children:"Accept"})}),Object(a.jsx)("p",{className:L.a.Dialogue,children:"Decline"}),Object(a.jsx)("img",{src:Y})]})})})})},H=n.p+"static/media/5.f6eb3427.png",K=function(e){var t=Object(i.useState)(!1),n=Object(d.a)(t,2),s=n[0],c=n[1];return Object(a.jsx)(i.Fragment,{children:Object(a.jsx)(b.a,{component:"div",transitionName:"example",transitionAppear:!0,transitionAppearTimeout:500,transitionEnter:!1,transitionLeave:!1,children:Object(a.jsx)("div",{children:s?Object(a.jsx)("div",{children:Object(a.jsx)(C,{startMusic:!0,dialogues:[{line:"Wow! You're really good at this game. Can you guess where is the gift you aim?",complete:!1},{line:"It is hidden in a place where you don't usually go. Together with old and new stuff it lay low.",complete:!1},{line:"Behind its secret door are lot of boxes. One of them is huge and seethes in darkness.",complete:!1},{line:"The moogles are all excited to see what it will bring. Get a hold of it and soon you'll be the KING!",complete:!1},{line:"last",complete:!0}],answer:"I found it!",next:"/final"})}):Object(a.jsxs)("div",{className:L.a.Container,children:[Object(a.jsx)("span",{onClick:function(){return c(!0)},children:Object(a.jsx)("p",{className:L.a.Name,children:"Accept"})}),Object(a.jsx)("p",{className:L.a.Dialogue,children:"Decline"}),Object(a.jsx)("img",{src:H})]})})})})},V=function(){return Object(a.jsx)(T.a,{children:Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(i.Suspense,{fallback:Object(a.jsx)("div",{className:"loader-container",children:Object(a.jsxs)("div",{className:"loader-container-inner",children:[Object(a.jsx)("div",{className:"text-center",children:Object(a.jsx)(r.a,{type:"ball-scale-multiple"})}),Object(a.jsxs)("h6",{className:"mt-3",children:[" ",Object(a.jsx)("br",{}),"Please wait..."]})]})}),children:[Object(a.jsx)(g.b,{path:"/welcome",component:D}),Object(a.jsx)(g.b,{path:"/game",component:C}),Object(a.jsx)(g.b,{path:"/quest1",component:q}),Object(a.jsx)(g.b,{path:"/quest2",component:I}),Object(a.jsx)(g.b,{path:"/quest3",component:P}),Object(a.jsx)(g.b,{path:"/quest4",component:W}),Object(a.jsx)(g.b,{path:"/quest5",component:K}),Object(a.jsx)(g.a,{from:"/",to:"/welcome"})]})})})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),s(e),c(e)}))};n(59);o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(V,{})}),document.getElementById("root")),G()},8:function(e,t,n){e.exports={Container:"quest_Container__KCjOi",Name:"quest_Name__1hMSn",Dialogue:"quest_Dialogue__1yiEj"}}},[[60,1,2]]]);
//# sourceMappingURL=main.5d97ce17.chunk.js.map