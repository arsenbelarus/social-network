(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{334:function(e,a,s){e.exports={dialogs:"Dialogs_dialogs__2AfEL",dialogsItems:"Dialogs_dialogsItems__2aUmB",messages:"Dialogs_messages__1tZuv",messagesRow:"Dialogs_messagesRow__gWE1b",messagesCell1:"Dialogs_messagesCell1__gL8Gp",messagesCell2:"Dialogs_messagesCell2__72Wdq"}},335:function(e,a,s){e.exports={dialog:"DialogItem_dialog__BQH-u",active:"DialogItem_active__-weKp"}},336:function(e,a,s){e.exports={message:"Message_message__3K1h0"}},337:function(e,a,s){"use strict";s.r(a);var t=s(135),n=s(0),m=s.n(n),l=s(334),g=s.n(l),i=s(335),c=s.n(i),o=s(14);var r=function(e){return m.a.createElement("div",{className:"".concat(c.a.dialog," ").concat(c.a.active)},m.a.createElement("img",{src:"https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg"}),m.a.createElement(o.b,{to:"/dialogs/"+e.id}," ",e.name," "))},d=s(336),u=s.n(d);var _=function(e){return m.a.createElement("div",{className:u.a.message},e.message)},p=s(136),v=s(137),E=s(43),f=s(34),b=Object(f.a)(20);var w=Object(v.a)({form:"AddMessage"})((function(e){return m.a.createElement("form",{onSubmit:e.handleSubmit},m.a.createElement("div",null,m.a.createElement(p.a,{component:E.b,name:"newMessageBody",placeholder:"Enter your message here",validate:[f.b,b]})),m.a.createElement("div",null,m.a.createElement("button",null," Add message ")))}));var D=function(e){var a=e.messages.dialogsData.map((function(e){return m.a.createElement(r,{name:e.name,id:e.id,key:e.id})})),s=e.messages.messagesDataLeft.map((function(e){return m.a.createElement(_,{message:e.message})})),t=e.messages.messagesDataRight.map((function(e){return m.a.createElement(_,{message:e.message})}));return m.a.createElement("div",{className:g.a.dialogs},m.a.createElement("div",{className:g.a.dialogsItems},a),m.a.createElement("div",{className:g.a.messages},m.a.createElement("div",{className:g.a.messagesRow},m.a.createElement("div",{className:g.a.messagesCell1},s,m.a.createElement(w,{onSubmit:function(a){var s;s=a.newMessageBody,e.addMessage(s)}})),m.a.createElement("div",{className:g.a.messagesCell2},t))))},h=s(11),M=s(134),N=s(9);a.default=Object(N.d)(M.a,Object(h.b)((function(e){return{messages:e.messagesPage,newMessageText:e.messagesPage.newMessageText}}),(function(e){return{addMessage:function(a){e(Object(t.a)(a))}}})))(D)}}]);
//# sourceMappingURL=3.e0149688.chunk.js.map