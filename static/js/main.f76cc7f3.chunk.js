(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t,a){e.exports={friends:"Friends_friends__22q5d",friend:"Friends_friend__2--Sd",friendName:"Friends_friendName__3AgSy"}},124:function(e,t,a){e.exports={main:"MyPosts_main__PN3Os",posts:"MyPosts_posts__1PK4X"}},125:function(e,t,a){e.exports={selectedPage:"Paginator_selectedPage__3QJY_",pagination:"Paginator_pagination__1WvrG"}},161:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(80),r=a(7),o=function(e){return{type:"ADD-MESSAGE",newMessageBody:e}},i={dialogsData:[{id:1,name:"Arsen"},{id:2,name:"Olya"},{id:3,name:"Tigran"},{id:4,name:"David"}],messagesDataLeft:[{id:1,message:"Hi"},{id:2,message:"How are you"},{id:3,message:"Hello world"},{id:4,message:"Lorem ipsum"}],messagesDataRight:[{id:1,message:"I love my wife"},{id:2,message:"fg gfdgsdfg g fd"},{id:3,message:"fg dfgdf dfg "},{id:4,message:" fd sgdf dfg df "}],newMessageText:""};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":var a={id:5,message:t.newMessageBody};return Object(r.a)(Object(r.a)({},e),{},{messagesDataLeft:[].concat(Object(n.a)(e.messagesDataLeft),[a])});default:return e}}},170:function(e,t,a){e.exports=a.p+"static/media/loader.181849d9.gif"},171:function(e,t,a){},173:function(e,t,a){e.exports={item:"Post_item__3YEHT"}},209:function(e,t,a){e.exports=a(336)},21:function(e,t,a){e.exports={profilePhotoAndData:"ProfileInfo_profilePhotoAndData__3ymvG",profilePhoto:"ProfileInfo_profilePhoto__2fqhY",profileData:"ProfileInfo_profileData__2pUjb",formControlItem:"ProfileInfo_formControlItem__2G1vd",profileDataButton:"ProfileInfo_profileDataButton__28uRX",status:"ProfileInfo_status__27pRF",description:"ProfileInfo_description__1tfyt",formSummaryError:"ProfileInfo_formSummaryError__1aAT3"}},214:function(e,t,a){},28:function(e,t,a){e.exports={nav:"Navbar_nav__7zjwi",item:"Navbar_item__2dKJe",activeLink:"Navbar_activeLink__3dRIm"}},30:function(e,t,a){"use strict";a.d(t,"c",(function(){return u})),a.d(t,"b",(function(){return m})),a.d(t,"a",(function(){return p}));var n=a(102),r=a(0),o=a.n(r),i=a(44),s=a.n(i),l=a(339),c=a(338),u=function(e){var t=e.input,a=e.meta,r=Object(n.a)(e,["input","meta"]),i=a.touched&&a.error;return o.a.createElement("div",{className:s.a.formControl+" "+(i?s.a.error:"")},o.a.createElement("div",null,o.a.createElement(l.a,Object.assign({variant:"outlined",multiline:!0},t,r))),i&&o.a.createElement("span",null,a.error))},m=function(e){var t=e.input,a=e.meta,r=Object(n.a)(e,["input","meta"]),i=a.touched&&a.error;return o.a.createElement("div",{className:s.a.formControl+" "+(i?s.a.error:"")},o.a.createElement("div",null,o.a.createElement(c.a,Object.assign({},t,r))),i&&o.a.createElement("span",null,a.error))},p=function(e){var t=e.input,a=e.meta,r=Object(n.a)(e,["input","meta"]),i=a.touched&&a.error;return o.a.createElement("div",{className:s.a.formControl+" "+(i?s.a.error:"")},o.a.createElement("div",null,o.a.createElement("input",Object.assign({},t,r))),i&&o.a.createElement("span",null,a.error))}},336:function(e,t,a){"use strict";a.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=a(0),r=a.n(n),o=a(14),i=a.n(o),s=(a(214),a(24)),l=a(25),c=a(27),u=a(26),m=a(93),p=a.n(m),f=a(28),d=a.n(f),g=a(19);var E=function(e){return r.a.createElement("nav",{className:d.a.nav},r.a.createElement("div",{className:d.a.item},r.a.createElement(g.b,{to:"/profile",activeClassName:d.a.activeLink}," Profile ")),r.a.createElement("div",{className:d.a.item},r.a.createElement(g.b,{to:"/dialogs",activeClassName:d.a.activeLink}," Messages")),r.a.createElement("div",{className:d.a.item},r.a.createElement(g.b,{to:"/users",activeClassName:d.a.activeLink}," Users")),r.a.createElement("div",{className:d.a.item},r.a.createElement(g.b,{to:"/news",activeClassName:d.a.activeLink}," News")),r.a.createElement("div",{className:d.a.item},r.a.createElement(g.b,{to:"/music",activeClassName:d.a.activeLink}," Music")),r.a.createElement("div",{className:d.a.item},r.a.createElement(g.b,{to:"/settings",activeClassName:d.a.activeLink}," Settings")))},h=a(81),v=a.n(h),b=a(374),O=a(369),_=a(371),S=a(372),j=a(373),P=a(168),C=a.n(P),y=a(366),w=Object(y.a)((function(e){return Object(b.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}})}));var N=function(e){var t=w();return r.a.createElement("header",{className:v.a.header},r.a.createElement(O.a,{variant:"elevation"},r.a.createElement(_.a,null,r.a.createElement(S.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(C.a,null)),e.isAuth?r.a.createElement("div",{className:v.a.loggedInUser},r.a.createElement("span",{className:v.a.loggedInUserName}," ",e.login," "),r.a.createElement(j.a,{color:"inherit",onClick:e.logout}," Log out ")):r.a.createElement("div",{className:v.a.loggedInUser},r.a.createElement(j.a,{color:"secondary"},r.a.createElement(g.b,{style:{margin:"10px",color:"ivory",textDecoration:"none"},to:"/login"}," Login "))))))},k=a(17),U=a(33),A=a.n(U),F=a(57),T=a(7),I=a(121),D=a.n(I),L=D.a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"a318ecb3-f5df-4512-99ed-aabe354d9b6f"}}),x=D.a.create({baseURL:"https://social-network-1f63a.firebaseio.com/",headers:{"Content-Type":"text/plain","API-KEY":"AIzaSyCllyQV9B_bsPepLBxHZCFa85p5cLfJbs4"}}),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return L.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},R=function(){return L.get("auth/me").then((function(e){return e.data}))},G=function(e){return L.post("follow/".concat(e),{}).then((function(e){return e.data}))},H=function(e){return L.delete("follow/".concat(e)).then((function(e){return e.data}))},W=function(e){return console.log("Obsolete method. Please use profileApi"),J.getProfile(e)},B=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return L.get("users?friend=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},J={getProfile:function(e){return L.get("profile/".concat(e))},getStatus:function(e){return L.get("profile/status/".concat(e))},updateStatus:function(e){return L.put("profile/status",{status:e})},updateProfileData:function(e){return L.put("profile",e)},savePhoto:function(e){var t=new FormData;return t.append("image",e),L.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})}},z=function(e){return L.post("auth/login",e)},Y=function(){return L.delete("auth/login")},Q=function(){return L.get("security/get-captcha-url")},K=function(e){return x.post("posts.json",e)},V=function(){return x.get("posts.json")},q=function(e){return x.delete("posts/".concat(e,".json"))},X=a(42),Z={friends:[]},$=function(e){return{type:"SET_FRIENDS",friends:e}},ee=function(){return function(e){B(!0).then((function(t){e($(t.items))}))}},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FRIENDS":return Object(T.a)(Object(T.a)({},e),{},{friends:t.friends});default:return e}},ae={id:null,email:null,login:null,isAuth:!1,captchaUrl:null},ne=function(e,t,a,n){return{type:"SET_USER_DATA",payload:{id:e,email:t,login:a,isAuth:n}}},re=function(e){return{type:"CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},oe=function(){return function(e){return R().then((function(t){if(0===t.resultCode){var a=t.data,n=a.id,r=a.login,o=a.email;e(ne(n,o,r,!0))}}))}},ie=function(){return function(e){Y().then((function(t){0===t.data.resultCode&&(e(ne(null,null,null,!1)),e($([])))}))}},se=function(){return function(){var e=Object(F.a)(A.a.mark((function e(t){var a,n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q();case 2:a=e.sent,n=a.data.url,t(re(n));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":case"CAPTCHA_URL_SUCCESS":return Object(T.a)(Object(T.a)({},e),t.payload);default:return e}},ce=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(N,{isAuth:this.props.isAuth,login:this.props.login,logout:this.props.logout})}}]),a}(r.a.Component),ue=Object(k.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:ie})(ce),me={initialised:!1},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALISED_SUCCESFULLY":return Object(T.a)(Object(T.a)({},e),{},{initialised:!0});default:return e}},fe=a(170),de=a.n(fe),ge=function(){return r.a.createElement("div",{style:{width:"100px",margin:"0 auto"}},r.a.createElement("img",{src:de.a,style:{width:"100px",height:"60px"}}))},Ee=a(100),he=a.n(Ee),ve=a(59),be=a.n(ve);var Oe=function(e){var t=e.friends.map((function(e,t){return r.a.createElement("div",{className:he.a.friend,key:t},r.a.createElement(g.b,{to:"/profile/"+e.id},r.a.createElement("img",{src:e.photos.small?e.photos.small:be.a,alt:""})),r.a.createElement("div",{className:he.a.friendName},e.name))}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Friends"),r.a.createElement("div",{className:he.a.friends},t))},_e=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.getFriends()}},{key:"render",value:function(){return r.a.createElement("div",{style:{gridArea:"r",backgroundColor:"black"}},r.a.createElement(Oe,{friends:this.props.friends}))}}]),a}(r.a.Component),Se=Object(k.b)((function(e){return{friends:e.friendsPage.friends}}),{getFriends:ee})(r.a.memo(_e)),je=a(171),Pe=a.n(je),Ce=a(56),ye=a(21),we=a.n(ye),Ne=a(339),ke=function(e){var t=Object(n.useState)(!1),a=Object(Ce.a)(t,2),o=a[0],i=a[1],s=Object(n.useState)(e.status),l=Object(Ce.a)(s,2),c=l[0],u=l[1];Object(n.useEffect)((function(){u(e.status)}),[e.status]);return r.a.createElement("div",{className:we.a.status},!o&&r.a.createElement("div",{className:we.a.description},r.a.createElement("span",{onDoubleClick:function(){e.isOwner&&i(!0)}},r.a.createElement("strong",null,"Status: "),e.status)),o&&r.a.createElement("div",{className:we.a.description},r.a.createElement(Ne.a,{variant:"outlined",type:"text",value:c,onChange:function(e){return u(e.currentTarget.value)},onBlur:function(){i(!1),e.update(c)},autoFocus:!0})))},Ue=function(e){return r.a.createElement("div",{className:we.a.profileData},e.isOwner&&r.a.createElement("div",{className:we.a.profileDataButton},r.a.createElement(j.a,{variant:"outlined",onClick:e.activateEditMode}," ",r.a.createElement("strong",null," Edit Profile ")," ")),r.a.createElement("div",{className:we.a.description},r.a.createElement("strong",null," Full name: ")," ",e.profile.fullName),r.a.createElement("div",{className:we.a.description},r.a.createElement("strong",null," About me: ")," ",e.profile.aboutMe),r.a.createElement("div",{className:we.a.description},r.a.createElement("strong",null," Looking for a job: ")," ",e.profile.lookingForAJob?"yes":"no"),e.profile.lookingForAJob&&r.a.createElement("div",{className:we.a.description},r.a.createElement("strong",null," Professional background: ")," ",e.profile.lookingForAJobDescription),r.a.createElement("div",{className:we.a.description},r.a.createElement("strong",null," Contacts: ")," ",Object.keys(e.profile.contacts).map((function(t){return r.a.createElement("div",{key:t},r.a.createElement("strong",null,t,": ")," ",e.profile.contacts[t])}))))},Ae=a(30),Fe=a(162),Te=a(163),Ie=function(e){if(!e)return"Field is required"},De=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}},Le=Object(Te.a)({form:"profileData"})((function(e){return r.a.createElement("div",{className:we.a.profileData},r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",{className:we.a.profileDataButton},r.a.createElement("button",null,r.a.createElement("strong",null," Save changes ")),e.error&&r.a.createElement("div",{className:we.a.formSummaryError},e.error)),r.a.createElement("div",{className:we.a.formControlItem},r.a.createElement("p",null,"Full name"),r.a.createElement(Fe.a,{type:"text",name:"fullName",component:Ae.b,placeholder:"Full name",validate:[Ie]})),r.a.createElement("div",null,r.a.createElement("p",null,"Looking for a job"),r.a.createElement(Fe.a,{type:"checkbox",name:"lookingForAJob",component:Ae.a})),r.a.createElement("div",null,r.a.createElement("p",null,"My professional skills"),r.a.createElement(Fe.a,{type:"textarea",name:"lookingForAJobDescription",component:Ae.c,validate:[Ie]})),r.a.createElement("div",null,r.a.createElement("p",null,"About me"),r.a.createElement(Fe.a,{type:"textarea",name:"aboutMe",component:Ae.c,validate:[Ie]})),r.a.createElement("div",null,r.a.createElement("p",null,"Contacts"),Object.keys(e.profile.contacts).map((function(e){return r.a.createElement("div",null,r.a.createElement("strong",null," ",e,": ")," ",r.a.createElement(Fe.a,{type:"text",name:"contacts."+e,component:Ae.b}))})))))})),xe=a(338),Me=function(e){var t=e.profile,a=e.status,o=e.update,i=e.isOwner,s=e.savePhoto,l=e.updateProfileData,c=Object(n.useState)(!1),u=Object(Ce.a)(c,2),m=u[0],p=u[1];return r.a.createElement("div",null,t&&r.a.createElement("div",null,r.a.createElement("div",{className:we.a.profilePhotoAndData},r.a.createElement("div",{className:we.a.profilePhoto},r.a.createElement("img",{src:t.photos.large||be.a,alt:"large avatar"}),i&&r.a.createElement(xe.a,{type:"file",onChange:function(e){e.target.files&&e.target.files.length>0&&s(e.target.files[0])}}),r.a.createElement(ke,{profile:t,status:a,update:o,isOwner:i})),m?r.a.createElement(Le,{initialValues:t,onSubmit:function(e){l(e).then((function(){return p(!1)}))},profile:t}):r.a.createElement(Ue,{isOwner:i,profile:t,activateEditMode:function(){return p(!0)}}))))},Re=a(96),Ge={profile:null,status:"",postsData:[]},He=function(e){return{type:"SET_USER_STATUS",status:e}},We=function(e){return{type:"SET_UPDATED_PROFILE_STATUS",profile:e}},Be=function(){return function(){var e=Object(F.a)(A.a.mark((function e(t){var a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V();case 2:200===(a=e.sent).status&&(a.data=Object.keys(a.data).map((function(e){return[a.data[e],e]})),t({type:"SET_POSTS",posts:a.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_POSTS":return Object(T.a)(Object(T.a)({},e),{},{postsData:t.posts});case"SET_USERS_PROFILE":return Object(T.a)(Object(T.a)({},e),{},{profile:t.profile});case"SET_USER_STATUS":return Object(T.a)(Object(T.a)({},e),{},{status:t.status});case"SET_USER_PHOTO":return Object(T.a)(Object(T.a)({},e),{},{profile:Object(T.a)(Object(T.a)({},e.profile),{},{photos:t.photos})});case"SET_UPDATED_PROFILE_STATUS":return Object(T.a)(Object(T.a)({},e),{},{profile:Object(T.a)(Object(T.a)({},e.profile),{},{fullName:t.profile.fullName,lookingForAJobDescription:t.profile.lookingForAJobDescription,lookingForAJob:t.profile.lookingForAJob,aboutMe:t.profile.aboutMe,contacts:Object(T.a)({},t.profile.contacts)})});default:return e}},ze=a(124),Ye=a.n(ze),Qe=a(173),Ke=a.n(Qe),Ve=r.a.memo((function(e){return r.a.createElement("div",{className:Ke.a.item},r.a.createElement("img",{src:e.avatar?e.avatar:"https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg"}),e.message,r.a.createElement("div",null,r.a.createElement("span",null,e.likesCount,"  likes")),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.deletePost(e.serverID)}}," Delete post ")))})),qe=r.a.memo((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(Fe.a,{component:Ae.c,name:"addNewPost",placeholder:"Add your post here"})),r.a.createElement("div",null,r.a.createElement("button",null,"Add post")))})),Xe=Object(Te.a)({form:"AddPost",onSubmitSuccess:function(e,t){t(Object(X.a)("AddPost"))}})(qe),Ze=r.a.memo((function(e){var t,a=Object(n.useCallback)((function(t){e.deletePost(t)}),[e]);null!==e.posts&&e.isOwner&&e.isOwner&&(t=e.posts.map((function(t){return r.a.createElement(Ve,{key:t[0].id,message:t[0].message,likesCount:t[0].likesCount,serverID:t[1],deletePost:a,avatar:e.avatar})})).reverse());var o=Object(n.useCallback)((function(t){var a={id:Math.random(),message:t.addNewPost,likesCount:0};e.sendNewPost(a)}),[]);return r.a.createElement("div",{className:Ye.a.main},r.a.createElement("h3",null," My posts "),r.a.createElement(Xe,{onSubmit:o}),r.a.createElement("div",{className:Ye.a.posts},"  ",t,"  "))})),$e=a(13),et=a(16),tt=a(92),at=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.getPosts()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Ze,{posts:this.props.posts,sendNewPost:this.props.sendNewPost,deletePost:this.props.deletePost,avatar:this.props.avatar,isOwner:!this.props.match.params.userId}))}}]),a}(r.a.Component),nt=Object($e.d)(tt.a,et.g,Object(k.b)((function(e){var t;return{posts:e.profilePage.postsData,avatar:null===(t=e.profilePage.profile)||void 0===t?void 0:t.photos.small}}),{sendNewPost:function(e){return function(){var t=Object(F.a)(A.a.mark((function t(a){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,K(e);case 2:200===t.sent.status&&a(Be());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getPosts:Be,deletePost:function(e){return function(){var t=Object(F.a)(A.a.mark((function t(a){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q(e);case 2:200===t.sent.status&&a(Be());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))(at);var rt=function(e){return r.a.createElement("div",null,r.a.createElement(Me,{profile:e.profile,status:e.status,update:e.update,isOwner:e.isOwner,savePhoto:e.savePhoto,updateProfileData:e.updateProfileData}),r.a.createElement(nt,null))},ot=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"goToProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorisedId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.goToProfile()}},{key:"componentDidUpdate",value:function(e,t){this.props.match.params.userId!=e.match.params.userId&&this.goToProfile()}},{key:"render",value:function(){return r.a.createElement("div",{className:Pe.a.content},r.a.createElement(rt,{profile:this.props.profile,status:this.props.status,update:this.props.updateUserStatus,isOwner:!this.props.match.params.userId,savePhoto:this.props.savePhoto,updateProfileData:this.props.updateProfileData}))}}]),a}(r.a.Component),it=Object($e.d)(tt.a,et.g,Object(k.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorisedId:e.auth.id,isAuth:e.auth.isAuth}}),{getUserProfile:function(e){return function(t){W(e).then((function(e){t({type:"SET_USERS_PROFILE",profile:e.data})}))}},getUserStatus:function(e){return function(t){J.getStatus(e).then((function(e){t(He(e.data))}))}},updateUserStatus:function(e){return function(t){J.updateStatus(e).then((function(a){0===a.data.resultCode&&t(He(e))}))}},savePhoto:function(e){return function(t){J.savePhoto(e).then((function(e){0===e.data.resultCode&&t({type:"SET_USER_PHOTO",photos:e.data.data.photos})}))}},updateProfileData:function(e){return function(){var t=Object(F.a)(A.a.mark((function t(a){var n,r;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J.updateProfileData(e);case 2:if(0!==(n=t.sent).data.resultCode){t.next=7;break}a(We(e)),t.next=10;break;case 7:return r=n.data.messages[0].match(/Contacts->(\w+)/)[1].toLowerCase(),a(Object(X.b)("profileData",{contacts:Object(Re.a)({},r,n.data.messages[0])})),t.abrupt("return",Promise.reject(n.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))(ot);var st=function(){return r.a.createElement("div",null,"Music")};var lt=function(){return r.a.createElement("div",null,"News")};var ct=function(){return r.a.createElement("div",null,"Settings")},ut=a(80),mt={users:[],pageSize:100,totalUsersCount:0,currentPage:1,isFetching:!1,isFollowStatusChanging:[]},pt=function(e){return{type:"SET_USERS",users:e}},ft=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},dt=function(e,t){return{type:"TOGGLE_FOLLOW_STATUS_CHANGING",isFollowStatusChanging:e,userId:t}},gt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(T.a)(Object(T.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(T.a)(Object(T.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(T.a)(Object(T.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(T.a)(Object(T.a)({},e),{},{followed:!1}):e}))});case"SET_USERS":return Object(T.a)(Object(T.a)({},e),{},{users:Object(ut.a)(t.users)});case"SET_CURRENT_PAGE":return Object(T.a)(Object(T.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_QUANTITY":return Object(T.a)(Object(T.a)({},e),{},{totalUsersCount:t.totalUsersQuantity});case"TOGGLE_IS_FETCHING":return Object(T.a)(Object(T.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_FOLLOW_STATUS_CHANGING":return Object(T.a)(Object(T.a)({},e),{},{isFollowStatusChanging:t.isFollowStatusChanging?[].concat(Object(ut.a)(e.isFollowStatusChanging),[t.userId]):e.isFollowStatusChanging.filter((function(e){return e!==t.userId}))});default:return e}},Et=a(67),ht=a.n(Et),vt=a(125),bt=a.n(vt),Ot=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),a=[],o=1;o<=t;o++)a.push(o);var i=Math.ceil(t/10),s=Object(n.useState)(1),l=Object(Ce.a)(s,2),c=l[0],u=l[1],m=10*(c-1)+1,p=10*c;return r.a.createElement("div",{className:bt.a.pagination},c>1&&r.a.createElement("button",{onClick:function(){u(c-1)}}," Previous "),a.filter((function(e){return e>=m&&e<=p})).map((function(t,a){return r.a.createElement("span",{key:a,className:e.currentPage===t?bt.a.selectedPage:"",style:{cursor:"pointer"},onClick:function(){e.onPaginationClickHandler(t)}}," ",t," ")})),i>c&&r.a.createElement("button",{onClick:function(){u(c+1)}}," Next "))},_t=function(e){return r.a.createElement("div",null,r.a.createElement(Ot,{totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,onPaginationClickHandler:e.onPaginationClickHandler}),e.users.map((function(t){return r.a.createElement("div",{key:t.id,className:ht.a.userContainer},r.a.createElement("div",{className:ht.a.imageAndButtonContainer},r.a.createElement("div",null,r.a.createElement(g.b,{to:"/profile/"+t.id},r.a.createElement("img",{src:t.photos.small?t.photos.small:be.a,className:ht.a.usersPhoto}))),r.a.createElement("div",{className:ht.a.button},t.followed?r.a.createElement("button",{disabled:e.isFollowStatusChanging.some((function(e){return e===t.id})),onClick:function(){return e.unFollow(t.id)}},"UnFollow"):r.a.createElement("button",{disabled:e.isFollowStatusChanging.some((function(e){return e===t.id})),onClick:function(){return e.follow(t.id)}},"Follow"))),r.a.createElement("span",{className:ht.a.userInformation},r.a.createElement("span",null,r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.status))))})))},St=a(174),jt=Object(St.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),Pt=function(e){return e.usersPage.pageSize},Ct=function(e){return e.usersPage.totalUsersCount},yt=function(e){return e.usersPage.currentPage},wt=function(e){return e.usersPage.isFetching},Nt=function(e){return e.usersPage.isFollowStatusChanging},kt=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPaginationClickHandler=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(ge,null):null,r.a.createElement(_t,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,follow:this.props.follow,unFollow:this.props.unFollow,isFollowStatusChanging:this.props.isFollowStatusChanging,toggleIsFollowStatusChanging:this.props.toggleIsFollowStatusChanging,onPaginationClickHandler:this.onPaginationClickHandler,users:this.props.users}))}}]),a}(r.a.Component),Ut=Object($e.d)(Object(k.b)((function(e){return{users:jt(e),pageSize:Pt(e),totalUsersCount:Ct(e),currentPage:yt(e),isFetching:wt(e),isFollowStatusChanging:Nt(e)}}),{follow:function(e){return function(t){t(dt(!0,e)),G(e).then((function(a){0===a.resultCode&&t(function(e){return{type:"FOLLOW",userId:e}}(e)),t(dt(!1,e))}))}},toggleFollowStatusChanging:dt,getUsers:function(e,t){return function(a){a(ft(!0)),a(pt([])),a(function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}}(e)),M(e,t).then((function(e){a(ft(!1)),a(pt(e.items)),a({type:"SET_TOTAL_USERS_QUANTITY",totalUsersQuantity:e.totalCount})}))}},unFollow:function(e){return function(t){t(dt(!0,e)),H(e).then((function(a){0===a.resultCode&&t(function(e){return{type:"UNFOLLOW",userId:e}}(e)),t(dt(!1,e))}))}}}))(kt),At=a(44),Ft=a.n(At),Tt=De(10),It=De(50),Dt=Object(Te.a)({form:"login"})((function(e){var t=e.handleSubmit,a=e.error,n=e.captchaUrl;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,r.a.createElement(Fe.a,{type:"text",name:"email",component:Ae.b,placeholder:"email",validate:[Ie,It]})),r.a.createElement("div",null,r.a.createElement(Fe.a,{type:"password",name:"password",component:Ae.b,placeholder:"password",validate:[Ie,Tt]})),r.a.createElement("div",{style:{display:"inline-flex"}},r.a.createElement(Fe.a,{type:"checkbox",name:"rememberMe",component:Ae.b})," ",r.a.createElement("span",null,"remember me")),n&&r.a.createElement("div",null," ",r.a.createElement("img",{src:n,alt:"Captcha"})," "),n&&r.a.createElement("div",null,r.a.createElement(Fe.a,{type:"text",name:"captcha",component:Ae.b,placeholder:"Type antibot symbols",validate:[Ie]})),a&&r.a.createElement("div",{className:Ft.a.formSummaryError},a),r.a.createElement("div",null,r.a.createElement("button",null,"Sign in")))})),Lt=Object(k.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return function(r){z({email:e,password:t,rememberMe:a,captcha:n}).then((function(e){if(0===e.data.resultCode)r(oe()),r(ee());else{10===e.data.resultCode&&r(se());var t=e.data.messages.length>0?e.data.messages:"Error occurred";r(Object(X.b)("login",{_error:"".concat(t)}))}}))}},logout:ie,getCaptcha:se})((function(e){return e.isAuth?r.a.createElement(et.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"LOGIN"),r.a.createElement(Dt,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl}))})),xt=r.a.lazy((function(){return a.e(3).then(a.bind(null,379))})),Mt=function(e){return r.a.createElement("div",{className:p.a.appWrapperContent},r.a.createElement(et.d,null,r.a.createElement(et.b,{exact:!0,path:"/",render:function(){return r.a.createElement(et.a,{to:"/profile"})}}),r.a.createElement(et.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(it,null)}}),r.a.createElement(et.b,{path:"/dialogs",render:function(){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(ge,null)},r.a.createElement(xt,null))}}),r.a.createElement(et.b,{path:"/music",render:function(){return r.a.createElement(st,null)}}),r.a.createElement(et.b,{path:"/news",render:function(){return r.a.createElement(lt,null)}}),r.a.createElement(et.b,{path:"/settings",render:function(){return r.a.createElement(ct,null)}}),r.a.createElement(et.b,{path:"/users",render:function(){return r.a.createElement(Ut,null)}}),r.a.createElement(et.b,{path:"/login",render:function(){return r.a.createElement(Lt,null)}}),r.a.createElement(et.b,{path:"*",render:function(){return r.a.createElement("div",null," 404 NOT FOUND")}})))},Rt=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.initialiseApp()}},{key:"render",value:function(){return this.props.initialised?r.a.createElement("div",{className:p.a.appWrapper},r.a.createElement(ue,null),r.a.createElement(E,null),r.a.createElement(Mt,null),r.a.createElement(Se,null)):r.a.createElement(ge,null)}}]),a}(r.a.Component),Gt=Object(k.b)((function(e){return{initialised:e.app.initialised}}),{initialiseApp:function(){return function(e){var t=e(oe());Promise.all([t]).then((function(){e({type:"INITIALISED_SUCCESFULLY"})}))}}})(Rt),Ht=a(161),Wt=a(175),Bt=a(164),Jt=Object($e.c)({profilePage:Je,messagesPage:Ht.b,usersPage:gt,friendsPage:te,auth:le,app:pe,form:Bt.a}),zt=Object($e.e)(Jt,Object($e.a)(Wt.a));i.a.render(r.a.createElement(k.a,{store:zt},r.a.createElement(g.a,null,r.a.createElement(Gt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},44:function(e,t,a){e.exports={formControl:"FormControls_formControl__ZYcM1",error:"FormControls_error__3I2i7",formSummaryError:"FormControls_formSummaryError__2CIQE"}},59:function(e,t,a){e.exports=a.p+"static/media/avatar.64830c49.jpg"},67:function(e,t,a){e.exports={usersPhoto:"Users_usersPhoto__2cLG_",userContainer:"Users_userContainer__PLg5V",imageAndButtonContainer:"Users_imageAndButtonContainer__3Yr9E",button:"Users_button__2GMTj",userInformation:"Users_userInformation__3W_DY"}},81:function(e,t,a){e.exports={header:"Header_header__l2oe9",loggedInUser:"Header_loggedInUser__orrFW",loggedInUserName:"Header_loggedInUserName__2_Vc_"}},92:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(24),r=a(25),o=a(27),i=a(26),s=a(0),l=a.n(s),c=a(16),u=a(17),m=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){Object(o.a)(s,t);var a=Object(i.a)(s);function s(){return Object(n.a)(this,s),a.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return this.props.isAuth?l.a.createElement(e,this.props):l.a.createElement(c.a,{to:"/login"})}}]),s}(l.a.Component);return Object(u.b)(m)(t)}},93:function(e,t,a){e.exports={appWrapper:"App_appWrapper__1S85F",appWrapperContent:"App_appWrapperContent__3g9po"}}},[[209,1,2]]]);
//# sourceMappingURL=main.f76cc7f3.chunk.js.map