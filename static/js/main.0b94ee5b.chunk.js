(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{121:function(e,t,a){e.exports={message:"Message_message__3K1h0"}},125:function(e,t,a){e.exports=a.p+"static/media/avatar.64830c49.jpg"},126:function(e,t,a){e.exports=a.p+"static/media/loader.181849d9.gif"},127:function(e,t,a){},131:function(e,t,a){e.exports={item:"Post_item__3YEHT"}},136:function(e,t,a){e.exports=a(261)},141:function(e,t,a){},142:function(e,t,a){},16:function(e,t,a){e.exports={nav:"Navbar_nav__7zjwi",item:"Navbar_item__2dKJe",activeLink:"Navbar_activeLink__3dRIm"}},261:function(e,t,a){"use strict";a.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=a(0),r=a.n(n),s=a(10),o=a.n(s),i=(a(141),a(13)),l=a(9),c=(a(142),a(16)),u=a.n(c);var m=function(e){return r.a.createElement("div",{className:u.a.nav},r.a.createElement("nav",null,r.a.createElement("div",{className:u.a.item},r.a.createElement(i.b,{to:"/profile",activeClassName:u.a.activeLink}," Profile ")),r.a.createElement("div",{className:u.a.item},r.a.createElement(i.b,{to:"/dialogs",activeClassName:u.a.activeLink}," Messages")),r.a.createElement("div",{className:u.a.item},r.a.createElement(i.b,{to:"/users",activeClassName:u.a.activeLink}," Users")),r.a.createElement("div",{className:u.a.item},r.a.createElement(i.b,{to:"/news",activeClassName:u.a.activeLink}," News")),r.a.createElement("div",{className:u.a.item},r.a.createElement(i.b,{to:"/music",activeClassName:u.a.activeLink}," Music")),r.a.createElement("div",{className:u.a.item},r.a.createElement(i.b,{to:"/settings",activeClassName:u.a.activeLink}," Settings"))))};var d=function(){return r.a.createElement("div",null,"Music")};var g=function(){return r.a.createElement("div",null,"News")};var p=function(){return r.a.createElement("div",null,"Settings")},f=a(36),h=a(5),E={dialogsData:[{id:1,name:"Arsen"},{id:2,name:"Olya"},{id:3,name:"Tigran"},{id:4,name:"David"}],messagesDataLeft:[{id:1,message:"Hi"},{id:2,message:"How are you"},{id:3,message:"Hello world"},{id:4,message:"Lorem ipsum"}],messagesDataRight:[{id:1,message:"I love my wife"},{id:2,message:"fg gfdgsdfg g fd"},{id:3,message:"fg dfgdf dfg "},{id:4,message:" fd sgdf dfg df "}],newMessageText:""},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":var a={id:5,message:t.newMessageBody};return Object(h.a)(Object(h.a)({},e),{},{messagesDataLeft:[].concat(Object(f.a)(e.messagesDataLeft),[a])});default:return e}},b=a(38),_=a.n(b),S=a(81),O=a.n(S);var w=function(e){return r.a.createElement("div",{className:"".concat(O.a.dialog," ").concat(O.a.active)},r.a.createElement("img",{src:"https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg"}),r.a.createElement(i.b,{to:"/dialogs/"+e.id}," ",e.name," "))},C=a(121),j=a.n(C);var y=function(e){return r.a.createElement("div",{className:j.a.message},e.message)},N=a(291),P=a(290),k=a(88),A=a(49),F=a.n(A),U=function(e){var t=e.input,a=e.meta,n=Object(k.a)(e,["input","meta"]),s=a.touched&&a.error;return r.a.createElement("div",{className:F.a.formControl+" "+(s?F.a.error:"")},r.a.createElement("div",null,r.a.createElement("textarea",Object.assign({},t,n))),s&&r.a.createElement("span",null,a.error))},T=function(e){var t=e.input,a=e.meta,n=Object(k.a)(e,["input","meta"]),s=a.touched&&a.error;return r.a.createElement("div",{className:F.a.formControl+" "+(s?F.a.error:"")},r.a.createElement("div",null,r.a.createElement("input",Object.assign({},t,n))),s&&r.a.createElement("span",null,a.error))},L=function(e){if(!e)return"Field is required"},I=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}},D=I(20);var M=Object(P.a)({form:"AddMessage"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(N.a,{component:U,name:"newMessageBody",placeholder:"Enter your message here",validate:[L,D]})),r.a.createElement("div",null,r.a.createElement("button",null," Add message ")))}));var x=function(e){var t=e.messages.dialogsData.map((function(e){return r.a.createElement(w,{name:e.name,id:e.id,key:e.id})})),a=e.messages.messagesDataLeft.map((function(e){return r.a.createElement(y,{message:e.message})})),n=e.messages.messagesDataRight.map((function(e){return r.a.createElement(y,{message:e.message})}));return r.a.createElement("div",{className:_.a.dialogs},r.a.createElement("div",{className:_.a.dialogsItems},t),r.a.createElement("div",{className:_.a.messages},r.a.createElement("div",{className:_.a.messagesRow},r.a.createElement("div",{className:_.a.messagesCell1},a,r.a.createElement(M,{onSubmit:function(t){var a;a=t.newMessageBody,e.addMessage(a)}})),r.a.createElement("div",{className:_.a.messagesCell2},n))))},R=a(11),G=a(23),H=a(24),B=a(26),W=a(25),z=function(e){return{isAuth:e.auth.isAuth}},q=function(e){var t=function(t){Object(B.a)(n,t);var a=Object(W.a)(n);function n(){return Object(G.a)(this,n),a.apply(this,arguments)}return Object(H.a)(n,[{key:"render",value:function(){return this.props.isAuth?r.a.createElement(e,this.props):r.a.createElement(l.a,{to:"/login"})}}]),n}(r.a.Component);return Object(R.b)(z)(t)},Q=a(7),Y=Object(Q.d)(q,Object(R.b)((function(e){return{messages:e.messagesPage,newMessageText:e.messagesPage.newMessageText}}),(function(e){return{addMessage:function(t){e(function(e){return{type:"ADD-MESSAGE",newMessageBody:e}}(t))}}})))(x),J=a(124),K=a.n(J).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"a318ecb3-f5df-4512-99ed-aabe354d9b6f"}}),V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return K.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},Z=function(){return K.get("auth/me").then((function(e){return e.data}))},X=function(e){return K.post("follow/".concat(e),{}).then((function(e){return e.data}))},$=function(e){return K.delete("follow/".concat(e)).then((function(e){return e.data}))},ee=function(e){return console.log("Obsolete method. Please use profileApi"),te.getProfile(e)},te={getProfile:function(e){return K.get("profile/".concat(e))},getStatus:function(e){return K.get("profile/status/".concat(e))},updateStatus:function(e){return K.put("profile/status",{status:e})}},ae=function(e){return K.post("auth/login",e)},ne=function(){return K.delete("auth/login")},re={users:[],pageSize:100,totalUsersCount:0,currentPage:1,isFetching:!1,isFollowStatusChanging:[]},se=function(e){return{type:"SET_USERS",users:e}},oe=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},ie=function(e,t){return{type:"TOGGLE_FOLLOW_STATUS_CHANGING",isFollowStatusChanging:e,userId:t}},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(h.a)(Object(h.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(h.a)(Object(h.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(h.a)(Object(h.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(h.a)(Object(h.a)({},e),{},{followed:!1}):e}))});case"SET_USERS":return Object(h.a)(Object(h.a)({},e),{},{users:Object(f.a)(t.users)});case"SET_CURRENT_PAGE":return Object(h.a)(Object(h.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_QUANTITY":return Object(h.a)(Object(h.a)({},e),{},{totalUsersCount:t.totalUsersQuantity});case"TOGGLE_IS_FETCHING":return Object(h.a)(Object(h.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_FOLLOW_STATUS_CHANGING":return Object(h.a)(Object(h.a)({},e),{},{isFollowStatusChanging:t.isFollowStatusChanging?[].concat(Object(f.a)(e.isFollowStatusChanging),[t.userId]):e.isFollowStatusChanging.filter((function(e){return e!==t.userId}))});default:return e}},ce=a(32),ue=a.n(ce),me=a(125),de=a.n(me),ge=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),a=[],n=1;n<=t;n++)a.push(n);return r.a.createElement("div",null,r.a.createElement("div",{className:ue.a.pagination},a.map((function(t){return r.a.createElement("span",{className:e.currentPage===t?ue.a.selectedPage:"",style:{cursor:"pointer"},onClick:function(){e.onPaginationClickHandler(t)}}," ",t," ")}))),e.users.map((function(t){return r.a.createElement("div",{key:t.id,className:ue.a.userContainer},r.a.createElement("div",{className:ue.a.imageAndButtonContainer},r.a.createElement("div",null,r.a.createElement(i.b,{to:"/profile/"+t.id},r.a.createElement("img",{src:t.photos.small?t.photos.small:de.a,className:ue.a.usersPhoto}))),r.a.createElement("div",{className:ue.a.button},t.followed?r.a.createElement("button",{disabled:e.isFollowStatusChanging.some((function(e){return e===t.id})),onClick:function(){return e.unFollow(t.id)}},"UnFollow"):r.a.createElement("button",{disabled:e.isFollowStatusChanging.some((function(e){return e===t.id})),onClick:function(){return e.follow(t.id)}},"Follow"))),r.a.createElement("span",{className:ue.a.userInformation},r.a.createElement("span",null,r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.status)),r.a.createElement("span",null,r.a.createElement("div",null,"u.location.country"),r.a.createElement("div",null,"u.location.city"))))})))},pe=a(126),fe=a.n(pe),he=function(){return r.a.createElement("div",{style:{width:"100px",margin:"0 auto"}},r.a.createElement("img",{src:fe.a,style:{width:"100px",height:"60px"}}))},Ee=function(e){Object(B.a)(a,e);var t=Object(W.a)(a);function a(){var e;Object(G.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).onPaginationClickHandler=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(H.a)(a,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(he,null):null,r.a.createElement(ge,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,follow:this.props.follow,unFollow:this.props.unFollow,isFollowStatusChanging:this.props.isFollowStatusChanging,toggleIsFollowStatusChanging:this.props.toggleIsFollowStatusChanging,onPaginationClickHandler:this.onPaginationClickHandler,users:this.props.users}))}}]),a}(r.a.Component),ve=Object(Q.d)(q,Object(R.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,isFollowStatusChanging:e.usersPage.isFollowStatusChanging}}),{follow:function(e){return function(t){t(ie(!0,e)),X(e).then((function(a){0===a.resultCode&&t(function(e){return{type:"FOLLOW",userId:e}}(e)),t(ie(!1,e))}))}},toggleFollowStatusChanging:ie,getUsers:function(e,t){return function(a){a(oe(!0)),a(se([])),a(function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}}(e)),V(e,t).then((function(e){a(oe(!1)),a(se(e.items)),a({type:"SET_TOTAL_USERS_QUANTITY",totalUsersQuantity:e.totalCount})}))}},unFollow:function(e){return function(t){t(ie(!0,e)),$(e).then((function(a){0===a.resultCode&&t(function(e){return{type:"UNFOLLOW",userId:e}}(e)),t(ie(!1,e))}))}}}))(Ee),be=a(127),_e=a.n(be),Se=a(37),Oe=a.n(Se),we=a(289),Ce=function(e){Object(B.a)(a,e);var t=Object(W.a)(a);function a(){var e;Object(G.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={editMode:!1,status:e.props.status},e.onStatusChange=function(t){e.setState({status:t.currentTarget.value})},e.activateEditMode=function(){e.setState({editMode:!0})},e.activateViewMode=function(){e.setState({editMode:!1}),e.props.update(e.state.status)},e}return Object(H.a)(a,[{key:"componentDidUpdate",value:function(e,t,a){e.status!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,!this.state.editMode&&r.a.createElement("div",{className:Oe.a.description},r.a.createElement("span",{onDoubleClick:this.activateEditMode},this.props.status)),this.state.editMode&&r.a.createElement("div",{className:Oe.a.description},r.a.createElement(we.a,{variant:"outlined",type:"text",value:this.state.status,onChange:this.onStatusChange,autoFocus:!0,onBlur:this.activateViewMode})))}}]),a}(r.a.Component);var je=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:Oe.a.description},r.a.createElement("img",{src:e.profile.photos.small,alt:"small avatar"})),r.a.createElement("div",{className:Oe.a.description},e.profile.fullName),r.a.createElement("div",{className:Oe.a.description},e.profile.contacts.facebook),r.a.createElement(Ce,{profile:e.profile,status:e.status,update:e.update}))},ye={profile:{aboutMe:"\u044f \u043a\u0440\u0443\u0442\u043e \u0447\u0443\u0432\u0430\u043a 1001%",contacts:{facebook:"facebook.com",website:null,vk:"vk.com/dimych",twitter:"https://twitter.com/@sdf",instagram:"instagra.com/sds",youtube:null,github:"github.com",mainLink:null},lookingForAJob:!0,lookingForAJobDescription:"\u043d\u0435 \u0438\u0449\u0443, \u0430 \u0434\u0443\u0440\u0430\u0447\u0443\u0441\u044c",fullName:"samurai dimych",userId:2,photos:{small:"https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",large:"https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"}},status:"",postsData:[{id:1,message:"How are you?",likesCount:15},{id:2,message:"It's my first post",likesCount:20},{id:3,message:"I want to learn React",likesCount:35},{id:4,message:"Lorem ipsum",likesCount:1}],newPostText:""},Ne=function(e){return{type:"SET_USER_STATUS",status:e}},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var a={id:5,message:t.addNewPost,likesCount:0};return Object(h.a)(Object(h.a)({},e),{},{postsData:[].concat(Object(f.a)(e.postsData),[a])});case"SET_USERS_PROFILE":return Object(h.a)(Object(h.a)({},e),{},{profile:t.profile});case"SET_USER_STATUS":return Object(h.a)(Object(h.a)({},e),{},{status:t.status});default:return e}},ke=a(86),Ae=a.n(ke),Fe=a(131),Ue=a.n(Fe);var Te=function(e){return r.a.createElement("div",{className:Ue.a.item},r.a.createElement("img",{src:"https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg"}),e.message,r.a.createElement("div",null,r.a.createElement("span",null,e.likesCount,"  likes")))},Le=I(10);var Ie=Object(P.a)({form:"AddPost"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(N.a,{component:U,name:"addNewPost",placeholder:"Add your post here",validate:[L,Le]})),r.a.createElement("div",null,r.a.createElement("button",null,"Add post")))}));var De=function(e){var t=e.posts.map((function(e){return r.a.createElement(Te,{message:e.message,likesCount:e.likesCount})}));return r.a.createElement("div",{className:Ae.a.main},r.a.createElement("h3",null," My posts "),r.a.createElement(Ie,{onSubmit:function(t){var a;a=t.addNewPost,e.addPost(a)}}),r.a.createElement("div",{className:Ae.a.posts},"  ",t,"  "))},Me=Object(R.b)((function(e){return{posts:e.profilePage.postsData,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(function(e){return{type:"ADD-POST",addNewPost:e}}(t))}}}))(De);var xe=function(e){return r.a.createElement("div",null,r.a.createElement(je,{profile:e.profile,status:e.status,update:e.update}),r.a.createElement(Me,null))},Re=function(e){Object(B.a)(a,e);var t=Object(W.a)(a);function a(){return Object(G.a)(this,a),t.apply(this,arguments)}return Object(H.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=9229),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"render",value:function(){return r.a.createElement("div",{className:_e.a.content},r.a.createElement(xe,{profile:this.props.profile,status:this.props.status,update:this.props.updateUserStatus}))}}]),a}(r.a.Component),Ge=Object(Q.d)(q,l.f,Object(R.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status}}),{getUserProfile:function(e){return function(t){ee(e).then((function(e){t({type:"SET_USERS_PROFILE",profile:e.data})}))}},getUserStatus:function(e){return function(t){te.getStatus(e).then((function(e){t(Ne(e.data))}))}},updateUserStatus:function(e){return function(t){te.updateStatus(e).then((function(a){0===a.data.resultCode&&t(Ne(e))}))}}}))(Re),He=a(87),Be=a.n(He);var We=function(e){return r.a.createElement("header",{className:Be.a.header},r.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQie3E0fOUC7Wzjg0m3zZMX44h4RqWOSJqM1cfgO0t2CeE2pmhc&usqp=CAU"}),r.a.createElement("div",{className:Be.a.loginBlock},e.isAuth?r.a.createElement("div",null," ",e.login," --- ",r.a.createElement("button",{onClick:e.logout}," Log out ")," "):r.a.createElement(i.b,{to:"/login"},"Login")))},ze={id:null,email:null,login:null,isAuth:!1},qe=function(e,t,a,n){return{type:"SET_USER_DATA",payload:{id:e,email:t,login:a,isAuth:n}}},Qe=function(){return function(e){Z().then((function(t){if(0===t.resultCode){var a=t.data,n=a.id,r=a.login,s=a.email;e(qe(n,s,r,!0))}}))}},Ye=function(){return function(e){ne().then((function(t){0===t.data.resultCode&&e(qe(null,null,null,!1))}))}},Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(h.a)(Object(h.a)({},e),t.payload);default:return e}},Ke=function(e){Object(B.a)(a,e);var t=Object(W.a)(a);function a(){return Object(G.a)(this,a),t.apply(this,arguments)}return Object(H.a)(a,[{key:"componentDidMount",value:function(){this.props.checkAuth()}},{key:"render",value:function(){return r.a.createElement(We,{isAuth:this.props.isAuth,login:this.props.login,logout:this.props.logout})}}]),a}(r.a.Component),Ve=Object(R.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{setUserData:qe,checkAuth:Qe,logout:Ye})(Ke),Ze=I(10),Xe=I(50),$e=Object(P.a)({form:"login"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(N.a,{type:"text",name:"email",component:T,placeholder:"email",validate:[L,Xe]})),r.a.createElement("div",null,r.a.createElement(N.a,{type:"password",name:"password",component:T,placeholder:"password",validate:[L,Ze]})),r.a.createElement("div",{style:{display:"inline-flex"}},r.a.createElement(N.a,{type:"checkbox",name:"rememberMe",component:T})," ",r.a.createElement("span",null,"remember me")),r.a.createElement("div",null,r.a.createElement("button",null,"Sign in")))})),et=Object(R.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,a){return function(n){ae({email:e,password:t,rememberMe:a}).then((function(e){0===e.data.resultCode&&n(Qe())}))}},logout:Ye})((function(e){return e.isAuth?r.a.createElement(l.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"LOGIN"),r.a.createElement($e,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))})),tt=a(61),at=a.n(tt);var nt=function(e){var t=e.friends.map((function(e){return r.a.createElement("div",{className:at.a.friend},r.a.createElement("img",{src:e.imgSource}),r.a.createElement("div",{className:at.a.friendName},e.name))}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Friends"),r.a.createElement("div",{className:at.a.friends},t))};var rt=function(e){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(Ve,null),r.a.createElement(m,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(l.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(Ge,null)}}),r.a.createElement(l.b,{path:"/dialogs",render:function(){return r.a.createElement(Y,null)}}),r.a.createElement(l.b,{path:"/news",render:function(){return r.a.createElement(d,null)}}),r.a.createElement(l.b,{path:"/music",render:function(){return r.a.createElement(g,null)}}),r.a.createElement(l.b,{path:"/settings",render:function(){return r.a.createElement(p,null)}}),r.a.createElement(l.b,{path:"/users",render:function(){return r.a.createElement(ve,null)}}),r.a.createElement(l.b,{path:"/login",render:function(){return r.a.createElement(et,null)}})),r.a.createElement("div",{style:{gridArea:"r",backgroundColor:"black"}},r.a.createElement(nt,{friends:e.stateForFriends}))))},st=[{name:"David",imgSource:"https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg"},{name:"Tigran",imgSource:"https://freesvg.org/img/myAvatar.png"},{name:"Olga",imgSource:"https://st2.depositphotos.com/2703645/5669/v/950/depositphotos_56695985-stock-illustration-male-avatar.jpg"}],ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:st;return e},it=a(132),lt=a(292),ct=Object(Q.c)({profilePage:Pe,messagesPage:v,usersPage:le,friends:ot,auth:Je,form:lt.a}),ut=Object(Q.e)(ct,Object(Q.a)(it.a));o.a.render(r.a.createElement(R.a,{store:ut},r.a.createElement(rt,{stateForFriends:ut.getState().friends})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},32:function(e,t,a){e.exports={usersPhoto:"Users_usersPhoto__2cLG_",selectedPage:"Users_selectedPage__3FCA3",pagination:"Users_pagination__3QDSV",userContainer:"Users_userContainer__PLg5V",imageAndButtonContainer:"Users_imageAndButtonContainer__3Yr9E",button:"Users_button__2GMTj",userInformation:"Users_userInformation__3W_DY"}},37:function(e,t,a){e.exports={profileImage:"ProfileInfo_profileImage__3S877",description:"ProfileInfo_description__1tfyt"}},38:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__2AfEL",dialogsItems:"Dialogs_dialogsItems__2aUmB",messages:"Dialogs_messages__1tZuv",messagesRow:"Dialogs_messagesRow__gWE1b",messagesCell1:"Dialogs_messagesCell1__gL8Gp",messagesCell2:"Dialogs_messagesCell2__72Wdq"}},49:function(e,t,a){e.exports={formControl:"FormControls_formControl__ZYcM1",error:"FormControls_error__3I2i7"}},61:function(e,t,a){e.exports={friends:"Friends_friends__22q5d",friend:"Friends_friend__2--Sd",friendName:"Friends_friendName__3AgSy"}},81:function(e,t,a){e.exports={dialog:"DialogItem_dialog__BQH-u",active:"DialogItem_active__-weKp"}},86:function(e,t,a){e.exports={main:"MyPosts_main__PN3Os",posts:"MyPosts_posts__1PK4X"}},87:function(e,t,a){e.exports={header:"Header_header__l2oe9",loginBlock:"Header_loginBlock__Zic5-"}}},[[136,1,2]]]);
//# sourceMappingURL=main.0b94ee5b.chunk.js.map