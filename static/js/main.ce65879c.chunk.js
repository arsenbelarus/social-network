(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,t,a){e.exports={profileImage:"ProfileInfo_profileImage__3S877",description:"ProfileInfo_description__1tfyt"}},19:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__2AfEL",dialogsItems:"Dialogs_dialogsItems__2aUmB",messages:"Dialogs_messages__1tZuv",messagesRow:"Dialogs_messagesRow__gWE1b",messagesCell1:"Dialogs_messagesCell1__gL8Gp",messagesCell2:"Dialogs_messagesCell2__72Wdq"}},20:function(e,t,a){e.exports={usersPhoto:"Users_usersPhoto__2cLG_",selectedPage:"Users_selectedPage__3FCA3",pagination:"Users_pagination__3QDSV",userContainer:"Users_userContainer__PLg5V",imageAndButtonContainer:"Users_imageAndButtonContainer__3Yr9E",button:"Users_button__2GMTj"}},25:function(e,t,a){},26:function(e,t,a){e.exports={friends:"Friends_friends__1qYCi",friend:"Friends_friend__AGAtK",friendName:"Friends_friendName__jnWZ5"}},30:function(e,t,a){e.exports={dialog:"DialogItem_dialog__BQH-u",active:"DialogItem_active__-weKp"}},32:function(e,t,a){e.exports={main:"MyPosts_main__PN3Os",posts:"MyPosts_posts__1PK4X"}},33:function(e,t,a){e.exports={header:"Header_header__l2oe9",loginBlock:"Header_loginBlock__Zic5-"}},44:function(e,t,a){e.exports={message:"Message_message__3K1h0"}},47:function(e,t,a){e.exports=a.p+"static/media/avatar.64830c49.jpg"},48:function(e,t,a){e.exports=a.p+"static/media/loader.181849d9.gif"},49:function(e,t,a){e.exports={item:"Post_item__3YEHT"}},51:function(e,t,a){e.exports=a(80)},56:function(e,t,a){},57:function(e,t,a){},7:function(e,t,a){e.exports={nav:"Navbar_nav__7zjwi",item:"Navbar_item__2dKJe",activeLink:"Navbar_activeLink__3dRIm"}},80:function(e,t,a){"use strict";a.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=a(0),s=a.n(n),r=a(23),i=a.n(r),o=(a(56),a(4)),c=a(3),l=(a(57),a(7)),u=a.n(l),m=a(26),g=a.n(m);var d=function(e){var t=e.friends.map((function(e){return s.a.createElement("div",{className:g.a.friend},s.a.createElement("img",{src:e.imgSource}),s.a.createElement("div",{className:g.a.friendName},e.name))}));return s.a.createElement("div",null,s.a.createElement("h2",null,"Friends"),s.a.createElement("div",{className:g.a.friends},t))};var p=function(e){return s.a.createElement("div",{className:u.a.nav},s.a.createElement("nav",null,s.a.createElement("div",{className:u.a.item},s.a.createElement(o.b,{to:"/profile",activeClassName:u.a.activeLink}," Profile ")),s.a.createElement("div",{className:u.a.item},s.a.createElement(o.b,{to:"/dialogs",activeClassName:u.a.activeLink}," Messages")),s.a.createElement("div",{className:u.a.item},s.a.createElement(o.b,{to:"/users",activeClassName:u.a.activeLink}," Users")),s.a.createElement("div",{className:u.a.item},s.a.createElement(o.b,{to:"/news",activeClassName:u.a.activeLink}," News")),s.a.createElement("div",{className:u.a.item},s.a.createElement(o.b,{to:"/music",activeClassName:u.a.activeLink}," Music")),s.a.createElement("div",{className:u.a.item},s.a.createElement(o.b,{to:"/settings",activeClassName:u.a.activeLink}," Settings"))),s.a.createElement(d,{friends:e.friends}))};var f=function(){return s.a.createElement("div",null,"Music")};var E=function(){return s.a.createElement("div",null,"News")};var v=function(){return s.a.createElement("div",null,"Settings")},h=a(17),b=a(1),_={dialogsData:[{id:1,name:"Arsen"},{id:2,name:"Olya"},{id:3,name:"Tigran"},{id:4,name:"David"}],messagesDataLeft:[{id:1,message:"Hi"},{id:2,message:"How are you"},{id:3,message:"Hello world"},{id:4,message:"Lorem ipsum"}],messagesDataRight:[{id:1,message:"I love my wife"},{id:2,message:"fg gfdgsdfg g fd"},{id:3,message:"fg dfgdf dfg "},{id:4,message:" fd sgdf dfg df "}],newMessageText:""},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE-NEW-MESSAGE-TEXT":return Object(b.a)(Object(b.a)({},e),{},{newMessageText:t.newMessage});case"ADD-MESSAGE":var a={id:5,message:e.newMessageText};return Object(b.a)(Object(b.a)({},e),{},{messagesDataLeft:[].concat(Object(h.a)(e.messagesDataLeft),[a]),newMessageText:""});default:return e}},O=a(19),j=a.n(O),C=a(30),N=a.n(C);var S=function(e){return s.a.createElement("div",{className:"".concat(N.a.dialog," ").concat(N.a.active)},s.a.createElement("img",{src:"https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg"}),s.a.createElement(o.b,{to:"/dialogs/"+e.id}," ",e.name," "))},T=a(44),P=a.n(T);var y=function(e){return s.a.createElement("div",{className:P.a.message},e.message)};var k=function(e){var t=e.messages.dialogsData.map((function(e){return s.a.createElement(S,{name:e.name,id:e.id,key:e.id})})),a=e.messages.messagesDataLeft.map((function(e){return s.a.createElement(y,{message:e.message})})),n=e.messages.messagesDataRight.map((function(e){return s.a.createElement(y,{message:e.message})})),r=e.newMessageText;return s.a.createElement("div",{className:j.a.dialogs},s.a.createElement("div",{className:j.a.dialogsItems},t),s.a.createElement("div",{className:j.a.messages},s.a.createElement("div",{className:j.a.messagesRow},s.a.createElement("div",{className:j.a.messagesCell1},a,s.a.createElement("div",null,s.a.createElement("textarea",{value:r,onChange:function(t){var a=t.target.value;a&&e.updateNewMessageText(a)}})),s.a.createElement("div",null,s.a.createElement("button",{onClick:function(){e.addMessage()}}," Add message "))),s.a.createElement("div",{className:j.a.messagesCell2},n))))},A=a(5),F=a(13),U=a(14),M=a(16),x=a(15),D=function(e){return{isAuth:e.auth.isAuth}},L=function(e){var t=function(t){Object(M.a)(n,t);var a=Object(x.a)(n);function n(){return Object(F.a)(this,n),a.apply(this,arguments)}return Object(U.a)(n,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(c.a,{to:"/login"})}}]),n}(s.a.Component);return Object(A.b)(D)(t)},I=a(11),G=Object(I.d)(L,Object(A.b)((function(e){return{messages:e.messagesPage,newMessageText:e.messagesPage.newMessageText}}),(function(e){return{updateNewMessageText:function(t){t&&e(function(e){return{type:"UPDATE-NEW-MESSAGE-TEXT",newMessage:e}}(t))},addMessage:function(){e({type:"ADD-MESSAGE"})}}})))(k),R=a(46),W=a.n(R).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"a318ecb3-f5df-4512-99ed-aabe354d9b6f"}}),H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return W.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},z=function(){return W.get("auth/me").then((function(e){return e.data}))},B=function(e){return W.post("follow/".concat(e),{}).then((function(e){return e.data}))},Q=function(e){return W.delete("follow/".concat(e)).then((function(e){return e.data}))},q=function(e){return W.get("https://social-network.samuraijs.com/api/1.0/profile/".concat(e))},J={users:[],pageSize:100,totalUsersCount:0,currentPage:1,isFetching:!1,isFollowStatusChanging:[]},K=function(e){return{type:"SET_USERS",users:e}},X=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},Y=function(e,t){return{type:"TOGGLE_FOLLOW_STATUS_CHANGING",isFollowStatusChanging:e,userId:t}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(b.a)(Object(b.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(b.a)(Object(b.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(b.a)(Object(b.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(b.a)(Object(b.a)({},e),{},{followed:!1}):e}))});case"SET_USERS":return Object(b.a)(Object(b.a)({},e),{},{users:Object(h.a)(t.users)});case"SET_CURRENT_PAGE":return Object(b.a)(Object(b.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_QUANTITY":return Object(b.a)(Object(b.a)({},e),{},{totalUsersCount:t.totalUsersQuantity});case"TOGGLE_IS_FETCHING":return Object(b.a)(Object(b.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_FOLLOW_STATUS_CHANGING":return Object(b.a)(Object(b.a)({},e),{},{isFollowStatusChanging:t.isFollowStatusChanging?[].concat(Object(h.a)(e.isFollowStatusChanging),[t.userId]):e.isFollowStatusChanging.filter((function(e){return e!==t.userId}))});default:return e}},Z=a(20),$=a.n(Z),ee=a(47),te=a.n(ee),ae=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),a=[],n=1;n<=t;n++)a.push(n);return s.a.createElement("div",null,s.a.createElement("div",{className:$.a.pagination},a.map((function(t){return s.a.createElement("span",{className:e.currentPage===t?$.a.selectedPage:"",style:{cursor:"pointer"},onClick:function(){e.onPaginationClickHandler(t)}}," ",t," ")}))),e.users.map((function(t){return s.a.createElement("div",{key:t.id,className:$.a.userContainer},s.a.createElement("div",{className:$.a.imageAndButtonContainer},s.a.createElement("div",null,s.a.createElement(o.b,{to:"/profile/"+t.id},s.a.createElement("img",{src:t.photos.small?t.photos.small:te.a,className:$.a.usersPhoto}))),s.a.createElement("div",{className:$.a.button},t.followed?s.a.createElement("button",{disabled:e.isFollowStatusChanging.some((function(e){return e===t.id})),onClick:function(){return e.unFollow(t.id)}},"UnFollow"):s.a.createElement("button",{disabled:e.isFollowStatusChanging.some((function(e){return e===t.id})),onClick:function(){return e.follow(t.id)}},"Follow"))),s.a.createElement("span",null,s.a.createElement("span",null,s.a.createElement("div",null,t.name),s.a.createElement("div",null,t.status)),s.a.createElement("span",null,s.a.createElement("div",null,"u.location.country"),s.a.createElement("div",null,"u.location.city"))))})))},ne=a(48),se=a.n(ne),re=function(){return s.a.createElement("div",{style:{width:"100px",margin:"0 auto"}},s.a.createElement("img",{src:se.a,style:{width:"100px",height:"60px"}}))},ie=function(e){Object(M.a)(a,e);var t=Object(x.a)(a);function a(){var e;Object(F.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).onPaginationClickHandler=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(U.a)(a,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,this.props.isFetching?s.a.createElement(re,null):null,s.a.createElement(ae,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,follow:this.props.follow,unFollow:this.props.unFollow,isFollowStatusChanging:this.props.isFollowStatusChanging,toggleIsFollowStatusChanging:this.props.toggleIsFollowStatusChanging,onPaginationClickHandler:this.onPaginationClickHandler,users:this.props.users}))}}]),a}(s.a.Component),oe=Object(I.d)(L,Object(A.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,isFollowStatusChanging:e.usersPage.isFollowStatusChanging}}),{follow:function(e){return function(t){t(Y(!0,e)),B(e).then((function(a){0===a.resultCode&&t(function(e){return{type:"FOLLOW",userId:e}}(e)),t(Y(!1,e))}))}},toggleFollowStatusChanging:Y,getUsers:function(e,t){return function(a){a(X(!0)),a(K([])),a(function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}}(e)),H(e,t).then((function(e){a(X(!1)),a(K(e.items)),a({type:"SET_TOTAL_USERS_QUANTITY",totalUsersQuantity:e.totalCount})}))}},unFollow:function(e){return function(t){t(Y(!0,e)),Q(e).then((function(a){0===a.resultCode&&t(function(e){return{type:"UNFOLLOW",userId:e}}(e)),t(Y(!1,e))}))}}}))(ie),ce=a(25),le=a.n(ce),ue=a(18),me=a.n(ue),ge=function(e){Object(M.a)(a,e);var t=Object(x.a)(a);function a(){var e;Object(F.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={editMode:!1},e.activateEditMode=function(){e.setState({editMode:!0})},e.activateViewMode=function(){e.setState({editMode:!1})},e}return Object(U.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,!this.state.editMode&&s.a.createElement("div",{className:me.a.description},s.a.createElement("span",{onDoubleClick:this.activateEditMode},"My status ".concat(this.props.profile.aboutMe))),this.state.editMode&&s.a.createElement("div",{className:me.a.description},s.a.createElement("input",{type:"text",value:"My status ".concat(this.props.profile.aboutMe),autoFocus:!0,onBlur:this.activateViewMode})))}}]),a}(s.a.Component);var de=function(e){return s.a.createElement("div",null,s.a.createElement("div",{className:me.a.description},s.a.createElement("img",{src:e.profile.photos.small,alt:"small avatar"})),s.a.createElement("div",{className:me.a.description},e.profile.fullName),s.a.createElement("div",{className:me.a.description},e.profile.contacts.facebook),s.a.createElement(ge,{profile:e.profile}))},pe={profile:{aboutMe:"\u044f \u043a\u0440\u0443\u0442\u043e \u0447\u0443\u0432\u0430\u043a 1001%",contacts:{facebook:"facebook.com",website:null,vk:"vk.com/dimych",twitter:"https://twitter.com/@sdf",instagram:"instagra.com/sds",youtube:null,github:"github.com",mainLink:null},lookingForAJob:!0,lookingForAJobDescription:"\u043d\u0435 \u0438\u0449\u0443, \u0430 \u0434\u0443\u0440\u0430\u0447\u0443\u0441\u044c",fullName:"samurai dimych",userId:2,photos:{small:"https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",large:"https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"}},postsData:[{id:1,message:"How are you?",likesCount:15},{id:2,message:"It's my first post",likesCount:20},{id:3,message:"I want to learn React",likesCount:35},{id:4,message:"Lorem ipsum",likesCount:1}],newPostText:""},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var a={id:5,message:e.newPostText,likesCount:0};return Object(b.a)(Object(b.a)({},e),{},{postsData:[].concat(Object(h.a)(e.postsData),[a]),newPostText:""});case"UPDATE-NEW-POST-TEXT":if(t.newText)return Object(b.a)(Object(b.a)({},e),{},{newPostText:t.newText});case"SET_USERS_PROFILE":return Object(b.a)(Object(b.a)({},e),{},{profile:t.profile});default:return e}},Ee=a(32),ve=a.n(Ee),he=a(49),be=a.n(he);var _e=function(e){return s.a.createElement("div",{className:be.a.item},s.a.createElement("img",{src:"https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg"}),e.message,s.a.createElement("div",null,s.a.createElement("span",null,e.likesCount,"  likes")))};var we=function(e){var t=e.posts.map((function(e){return s.a.createElement(_e,{message:e.message,likesCount:e.likesCount})})),a=s.a.createRef();return s.a.createElement("div",{className:ve.a.main},s.a.createElement("h3",null," My posts "),s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("textarea",{value:e.newPostText,onChange:function(){var t,n=null===(t=a.current)||void 0===t?void 0:t.value;n&&e.updateNewPostText(n)},ref:a})),s.a.createElement("div",null,s.a.createElement("button",{onClick:function(){e.addPost()}},"Add post"))),s.a.createElement("div",{className:ve.a.posts},t))},Oe=Object(A.b)((function(e){return{posts:e.profilePage.postsData,newPostText:e.profilePage.newPostText}}),(function(e){return{updateNewPostText:function(t){t&&e({type:"UPDATE-NEW-POST-TEXT",newText:t})},addPost:function(){e({type:"ADD-POST"})}}}))(we);var je=function(e){return s.a.createElement("div",{className:le.a.content},s.a.createElement(de,{profile:e.profile}),s.a.createElement(Oe,null))},Ce=function(e){Object(M.a)(a,e);var t=Object(x.a)(a);function a(){return Object(F.a)(this,a),t.apply(this,arguments)}return Object(U.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=2),this.props.getUserProfile(e)}},{key:"render",value:function(){return s.a.createElement("div",{className:le.a.content},s.a.createElement(je,{profile:this.props.profile}))}}]),a}(s.a.Component),Ne=Object(I.d)(L,c.f,Object(A.b)((function(e){return{profile:e.profilePage.profile}}),{getUserProfile:function(e){return function(t){q(e).then((function(e){t({type:"SET_USERS_PROFILE",profile:e.data})}))}}}))(Ce),Se=a(33),Te=a.n(Se);var Pe=function(e){return s.a.createElement("header",{className:Te.a.header},s.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQie3E0fOUC7Wzjg0m3zZMX44h4RqWOSJqM1cfgO0t2CeE2pmhc&usqp=CAU"}),s.a.createElement("div",{className:Te.a.loginBlock},e.isAuth?e.login:s.a.createElement(o.b,{to:"/login"},"Login")))},ye={id:null,email:null,login:null,isAuth:!1},ke=function(e){return{type:"SET_USER_DATA",data:e}},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(b.a)(Object(b.a)({},e),{},{id:t.data.id,email:t.data.email,login:t.data.login,isAuth:!0});default:return e}},Fe=function(e){Object(M.a)(a,e);var t=Object(x.a)(a);function a(){return Object(F.a)(this,a),t.apply(this,arguments)}return Object(U.a)(a,[{key:"componentDidMount",value:function(){this.props.checkAuth()}},{key:"render",value:function(){return s.a.createElement(Pe,{isAuth:this.props.isAuth,login:this.props.login})}}]),a}(s.a.Component),Ue=Object(A.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{setUserData:ke,checkAuth:function(){return function(e){z().then((function(t){0===t.resultCode&&e(ke(t.data))}))}}})(Fe),Me=function(e){return s.a.createElement("h1",null,"LOGIN")};var xe=function(e){return s.a.createElement(o.a,null,s.a.createElement("div",{className:"app-wrapper"},s.a.createElement(Ue,null),s.a.createElement(p,{friends:e.stateForFriends}),s.a.createElement("div",{className:"app-wrapper-content"},s.a.createElement(c.b,{path:"/profile/:userId?",render:function(){return s.a.createElement(Ne,null)}}),s.a.createElement(c.b,{path:"/dialogs",render:function(){return s.a.createElement(G,null)}}),s.a.createElement(c.b,{path:"/news",render:function(){return s.a.createElement(f,null)}}),s.a.createElement(c.b,{path:"/music",render:function(){return s.a.createElement(E,null)}}),s.a.createElement(c.b,{path:"/settings",render:function(){return s.a.createElement(v,null)}}),s.a.createElement(c.b,{path:"/users",render:function(){return s.a.createElement(oe,null)}}),s.a.createElement(c.b,{path:"/login",render:function(){return s.a.createElement(Me,null)}}))))},De=[{name:"David",imgSource:"https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg"},{name:"Tigran",imgSource:"https://freesvg.org/img/myAvatar.png"},{name:"Olga",imgSource:"https://st2.depositphotos.com/2703645/5669/v/950/depositphotos_56695985-stock-illustration-male-avatar.jpg"}],Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De;return e},Ie=a(50),Ge=Object(I.c)({profilePage:fe,messagesPage:w,usersPage:V,friends:Le,auth:Ae}),Re=Object(I.e)(Ge,Object(I.a)(Ie.a));i.a.render(s.a.createElement(A.a,{store:Re},s.a.createElement(xe,{stateForFriends:Re.getState().friends})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.ce65879c.chunk.js.map