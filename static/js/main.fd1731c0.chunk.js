(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{103:function(e,t,n){e.exports={main:"MyPosts_main__PN3Os",posts:"MyPosts_posts__1PK4X"}},104:function(e,t,n){e.exports={header:"Header_header__l2oe9",loginBlock:"Header_loginBlock__Zic5-"}},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(62),r=n(5),o=function(e){return{type:"ADD-MESSAGE",newMessageBody:e}},i={dialogsData:[{id:1,name:"Arsen"},{id:2,name:"Olya"},{id:3,name:"Tigran"},{id:4,name:"David"}],messagesDataLeft:[{id:1,message:"Hi"},{id:2,message:"How are you"},{id:3,message:"Hello world"},{id:4,message:"Lorem ipsum"}],messagesDataRight:[{id:1,message:"I love my wife"},{id:2,message:"fg gfdgsdfg g fd"},{id:3,message:"fg dfgdf dfg "},{id:4,message:" fd sgdf dfg df "}],newMessageText:""};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":var n={id:5,message:t.newMessageBody};return Object(r.a)(Object(r.a)({},e),{},{messagesDataLeft:[].concat(Object(a.a)(e.messagesDataLeft),[n])});default:return e}}},143:function(e,t,n){e.exports=n.p+"static/media/loader.181849d9.gif"},145:function(e,t,n){},150:function(e,t,n){e.exports={item:"Post_item__3YEHT"}},180:function(e,t,n){e.exports=n(306)},185:function(e,t,n){},186:function(e,t,n){},21:function(e,t,n){e.exports={nav:"Navbar_nav__7zjwi",item:"Navbar_item__2dKJe",activeLink:"Navbar_activeLink__3dRIm"}},23:function(e,t,n){e.exports={description:"ProfileInfo_description__1tfyt",formSummaryError:"ProfileInfo_formSummaryError__1aAT3"}},24:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return l}));var a=n(105),r=n(0),o=n.n(r),i=n(44),s=n.n(i),c=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),i=n.touched&&n.error;return o.a.createElement("div",{className:s.a.formControl+" "+(i?s.a.error:"")},o.a.createElement("div",null,o.a.createElement("textarea",Object.assign({},t,r))),i&&o.a.createElement("span",null,n.error))},l=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),i=n.touched&&n.error;return o.a.createElement("div",{className:s.a.formControl+" "+(i?s.a.error:"")},o.a.createElement("div",null,o.a.createElement("input",Object.assign({},t,r))),i&&o.a.createElement("span",null,n.error))}},306:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(0),r=n.n(a),o=n(12),i=n.n(o),s=(n(185),n(17)),c=n(18),l=n(20),u=n(19),m=n(10),p=(n(186),n(21)),f=n.n(p),d=n(13);var g=function(e){return r.a.createElement("div",{className:f.a.nav},r.a.createElement("nav",null,r.a.createElement("div",{className:f.a.item},r.a.createElement(d.b,{to:"/profile",activeClassName:f.a.activeLink}," Profile ")),r.a.createElement("div",{className:f.a.item},r.a.createElement(d.b,{to:"/dialogs",activeClassName:f.a.activeLink}," Messages")),r.a.createElement("div",{className:f.a.item},r.a.createElement(d.b,{to:"/users",activeClassName:f.a.activeLink}," Users")),r.a.createElement("div",{className:f.a.item},r.a.createElement(d.b,{to:"/news",activeClassName:f.a.activeLink}," News")),r.a.createElement("div",{className:f.a.item},r.a.createElement(d.b,{to:"/music",activeClassName:f.a.activeLink}," Music")),r.a.createElement("div",{className:f.a.item},r.a.createElement(d.b,{to:"/settings",activeClassName:f.a.activeLink}," Settings"))))};var E=function(){return r.a.createElement("div",null,"Music")};var h=function(){return r.a.createElement("div",null,"News")};var b=function(){return r.a.createElement("div",null,"Settings")},v=n(11),O=n(62),S=n(5),j=n(98),_=n.n(j),C=_.a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"a318ecb3-f5df-4512-99ed-aabe354d9b6f"}}),y=_.a.create({baseURL:"https://social-network-1f63a.firebaseio.com/",headers:{"Content-Type":"text/plain","API-KEY":"AIzaSyCllyQV9B_bsPepLBxHZCFa85p5cLfJbs4"}}),P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return C.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},w=function(){return C.get("auth/me").then((function(e){return e.data}))},k=function(e){return C.post("follow/".concat(e),{}).then((function(e){return e.data}))},N=function(e){return C.delete("follow/".concat(e)).then((function(e){return e.data}))},A=function(e){return console.log("Obsolete method. Please use profileApi"),T.getProfile(e)},U=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return C.get("users?friend=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},T={getProfile:function(e){return C.get("profile/".concat(e))},getStatus:function(e){return C.get("profile/status/".concat(e))},updateStatus:function(e){return C.put("profile/status",{status:e})},updateProfileData:function(e){return C.put("profile",e)},savePhoto:function(e){var t=new FormData;return t.append("image",e),C.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})}},F=function(e){return C.post("auth/login",e)},I=function(){return C.delete("auth/login")},L=function(){return C.get("security/get-captcha-url")},D=function(e){return y.post("posts.json",e)},x=function(){return y.get("posts.json")},M=function(e){return y.delete("posts/".concat(e,".json"))},R={users:[],pageSize:100,totalUsersCount:0,currentPage:1,isFetching:!1,isFollowStatusChanging:[]},G=function(e){return{type:"SET_USERS",users:e}},H=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},z=function(e,t){return{type:"TOGGLE_FOLLOW_STATUS_CHANGING",isFollowStatusChanging:e,userId:t}},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(S.a)(Object(S.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(S.a)(Object(S.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(S.a)(Object(S.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(S.a)(Object(S.a)({},e),{},{followed:!1}):e}))});case"SET_USERS":return Object(S.a)(Object(S.a)({},e),{},{users:Object(O.a)(t.users)});case"SET_CURRENT_PAGE":return Object(S.a)(Object(S.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_QUANTITY":return Object(S.a)(Object(S.a)({},e),{},{totalUsersCount:t.totalUsersQuantity});case"TOGGLE_IS_FETCHING":return Object(S.a)(Object(S.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_FOLLOW_STATUS_CHANGING":return Object(S.a)(Object(S.a)({},e),{},{isFollowStatusChanging:t.isFollowStatusChanging?[].concat(Object(O.a)(e.isFollowStatusChanging),[t.userId]):e.isFollowStatusChanging.filter((function(e){return e!==t.userId}))});default:return e}},B=n(51),W=n.n(B),Y=n(47),Q=n.n(Y),q=n(43),K=n(99),Z=n.n(K),V=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],o=1;o<=t;o++)n.push(o);var i=Math.ceil(t/10),s=Object(a.useState)(1),c=Object(q.a)(s,2),l=c[0],u=c[1],m=10*(l-1)+1,p=10*l;return r.a.createElement("div",{className:Z.a.pagination},l>1&&r.a.createElement("button",{onClick:function(){u(l-1)}}," Previous "),n.filter((function(e){return e>=m&&e<=p})).map((function(t,n){return r.a.createElement("span",{key:n,className:e.currentPage===t?Z.a.selectedPage:"",style:{cursor:"pointer"},onClick:function(){e.onPaginationClickHandler(t)}}," ",t," ")})),i>l&&r.a.createElement("button",{onClick:function(){u(l+1)}}," Next "))},X=function(e){return r.a.createElement("div",null,r.a.createElement(V,{totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,onPaginationClickHandler:e.onPaginationClickHandler}),e.users.map((function(t){return r.a.createElement("div",{key:t.id,className:W.a.userContainer},r.a.createElement("div",{className:W.a.imageAndButtonContainer},r.a.createElement("div",null,r.a.createElement(d.b,{to:"/profile/"+t.id},r.a.createElement("img",{src:t.photos.small?t.photos.small:Q.a,className:W.a.usersPhoto}))),r.a.createElement("div",{className:W.a.button},t.followed?r.a.createElement("button",{disabled:e.isFollowStatusChanging.some((function(e){return e===t.id})),onClick:function(){return e.unFollow(t.id)}},"UnFollow"):r.a.createElement("button",{disabled:e.isFollowStatusChanging.some((function(e){return e===t.id})),onClick:function(){return e.follow(t.id)}},"Follow"))),r.a.createElement("span",{className:W.a.userInformation},r.a.createElement("span",null,r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.status))))})))},$=n(143),ee=n.n($),te=function(){return r.a.createElement("div",{style:{width:"100px",margin:"0 auto"}},r.a.createElement("img",{src:ee.a,style:{width:"100px",height:"60px"}}))},ne=n(8),ae=n(144),re=Object(ae.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),oe=function(e){return e.usersPage.pageSize},ie=function(e){return e.usersPage.totalUsersCount},se=function(e){return e.usersPage.currentPage},ce=function(e){return e.usersPage.isFetching},le=function(e){return e.usersPage.isFollowStatusChanging},ue=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPaginationClickHandler=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(te,null):null,r.a.createElement(X,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,follow:this.props.follow,unFollow:this.props.unFollow,isFollowStatusChanging:this.props.isFollowStatusChanging,toggleIsFollowStatusChanging:this.props.toggleIsFollowStatusChanging,onPaginationClickHandler:this.onPaginationClickHandler,users:this.props.users}))}}]),n}(r.a.Component),me=Object(ne.d)(Object(v.b)((function(e){return{users:re(e),pageSize:oe(e),totalUsersCount:ie(e),currentPage:se(e),isFetching:ce(e),isFollowStatusChanging:le(e)}}),{follow:function(e){return function(t){t(z(!0,e)),k(e).then((function(n){0===n.resultCode&&t(function(e){return{type:"FOLLOW",userId:e}}(e)),t(z(!1,e))}))}},toggleFollowStatusChanging:z,getUsers:function(e,t){return function(n){n(H(!0)),n(G([])),n(function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}}(e)),P(e,t).then((function(e){n(H(!1)),n(G(e.items)),n({type:"SET_TOTAL_USERS_QUANTITY",totalUsersQuantity:e.totalCount})}))}},unFollow:function(e){return function(t){t(z(!0,e)),N(e).then((function(n){0===n.resultCode&&t(function(e){return{type:"UNFOLLOW",userId:e}}(e)),t(z(!1,e))}))}}}))(ue),pe=n(145),fe=n.n(pe),de=n(23),ge=n.n(de),Ee=n(334),he=function(e){var t=Object(a.useState)(!1),n=Object(q.a)(t,2),o=n[0],i=n[1],s=Object(a.useState)(e.status),c=Object(q.a)(s,2),l=c[0],u=c[1];Object(a.useEffect)((function(){u(e.status)}),[e.status]);return r.a.createElement(r.a.Fragment,null,!o&&r.a.createElement("div",{className:ge.a.description},r.a.createElement("span",{onDoubleClick:function(){e.isOwner&&i(!0)}},r.a.createElement("strong",null,"Status: "),e.status)),o&&r.a.createElement("div",{className:ge.a.description},r.a.createElement(Ee.a,{variant:"outlined",type:"text",value:l,onChange:function(e){return u(e.currentTarget.value)},onBlur:function(){i(!1),e.update(l)},autoFocus:!0})))},be=function(e){return r.a.createElement("div",null,e.isOwner&&r.a.createElement("div",null,r.a.createElement("button",{onClick:e.activateEditMode}," ",r.a.createElement("strong",null," Edit Profile ")," ")),r.a.createElement("div",{className:ge.a.description},r.a.createElement("strong",null," Full name: ")," ",e.profile.fullName),r.a.createElement("div",{className:ge.a.description},r.a.createElement("strong",null," About me: ")," ",e.profile.aboutMe),r.a.createElement("div",{className:ge.a.description},r.a.createElement("strong",null," Looking for a job: ")," ",e.profile.lookingForAJob?"yes":"no"),e.profile.lookingForAJob&&r.a.createElement("div",{className:ge.a.description},r.a.createElement("strong",null," Professional background: ")," ",e.profile.lookingForAJobDescription),r.a.createElement("div",{className:ge.a.description},r.a.createElement("strong",null," Contacts: ")," ",Object.keys(e.profile.contacts).map((function(t){return r.a.createElement("div",{key:t},r.a.createElement("strong",null,t,": ")," ",e.profile.contacts[t])}))))},ve=n(24),Oe=n(139),Se=n(140),je=n(32),_e=Object(Se.a)({form:"profileData"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement("button",null," Save changes"),e.error&&r.a.createElement("div",{className:ge.a.formSummaryError},e.error)),r.a.createElement("div",null,r.a.createElement("p",null,"Full name"),r.a.createElement(Oe.a,{type:"text",name:"fullName",component:ve.a,placeholder:"Full name",validate:[je.b]})),r.a.createElement("div",null,r.a.createElement("p",null,"Looking for a job"),r.a.createElement(Oe.a,{type:"checkbox",name:"lookingForAJob",component:ve.a})),r.a.createElement("div",null,r.a.createElement("p",null,"My professional skills"),r.a.createElement(Oe.a,{type:"textarea",name:"lookingForAJobDescription",component:ve.b,validate:[je.b]})),r.a.createElement("div",null,r.a.createElement("p",null,"About me"),r.a.createElement(Oe.a,{type:"textarea",name:"aboutMe",component:ve.b,validate:[je.b]})),r.a.createElement("div",null,r.a.createElement("p",null,"Contacts"),Object.keys(e.profile.contacts).map((function(e){return r.a.createElement("div",null,r.a.createElement("strong",null," ",e,": ")," ",r.a.createElement(Oe.a,{type:"text",name:"contacts."+e,component:ve.a}))}))))})),Ce=function(e){var t=e.profile,n=e.status,o=e.update,i=e.isOwner,s=e.savePhoto,c=e.updateProfileData,l=Object(a.useState)(!1),u=Object(q.a)(l,2),m=u[0],p=u[1];return r.a.createElement("div",null,t&&r.a.createElement("div",null,r.a.createElement("div",{className:ge.a.description},r.a.createElement("img",{src:t.photos.large||Q.a,alt:"large avatar"}),i&&r.a.createElement("input",{type:"file",onChange:function(e){e.target.files&&e.target.files.length>0&&s(e.target.files[0])}})),m?r.a.createElement(_e,{initialValues:t,onSubmit:function(e){c(e).then((function(){return p(!1)}))},profile:t}):r.a.createElement(be,{isOwner:i,profile:t,activateEditMode:function(){return p(!0)}}),r.a.createElement(he,{profile:t,status:n,update:o,isOwner:i})))},ye=n(26),Pe=n.n(ye),we=n(74),ke=n(45),Ne=n(35),Ae={profile:null,status:"",postsData:[]},Ue=function(e){return{type:"SET_USER_STATUS",status:e}},Te=function(e){return{type:"SET_UPDATED_PROFILE_STATUS",profile:e}},Fe=function(){return function(){var e=Object(ke.a)(Pe.a.mark((function e(t){var n;return Pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:200===(n=e.sent).status&&(n.data=Object.keys(n.data).map((function(e){return[n.data[e],e]})),t({type:"SET_POSTS",posts:n.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_POSTS":return Object(S.a)(Object(S.a)({},e),{},{postsData:t.posts});case"SET_USERS_PROFILE":return Object(S.a)(Object(S.a)({},e),{},{profile:t.profile});case"SET_USER_STATUS":return Object(S.a)(Object(S.a)({},e),{},{status:t.status});case"SET_USER_PHOTO":return Object(S.a)(Object(S.a)({},e),{},{profile:Object(S.a)(Object(S.a)({},e.profile),{},{photos:t.photos})});case"SET_UPDATED_PROFILE_STATUS":return Object(S.a)(Object(S.a)({},e),{},{profile:Object(S.a)(Object(S.a)({},e.profile),{},{fullName:t.profile.fullName,lookingForAJobDescription:t.profile.lookingForAJobDescription,lookingForAJob:t.profile.lookingForAJob,aboutMe:t.profile.aboutMe,contacts:Object(S.a)({},t.profile.contacts)})});default:return e}},Le=n(103),De=n.n(Le),xe=n(150),Me=n.n(xe),Re=r.a.memo((function(e){return r.a.createElement("div",{className:Me.a.item},r.a.createElement("img",{src:e.avatar?e.avatar:"https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg"}),e.message,r.a.createElement("div",null,r.a.createElement("span",null,e.likesCount,"  likes")),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.deletePost(e.serverID)}}," Delete post ")))})),Ge=r.a.memo((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(Oe.a,{component:ve.b,name:"addNewPost",placeholder:"Add your post here"})),r.a.createElement("div",null,r.a.createElement("button",null,"Add post")))})),He=Object(Se.a)({form:"AddPost",onSubmitSuccess:function(e,t){t(Object(Ne.a)("AddPost"))}})(Ge),ze=r.a.memo((function(e){var t,n=Object(a.useCallback)((function(t){e.deletePost(t)}),[e]);null!==e.posts&&e.isOwner&&e.isOwner&&(t=e.posts.map((function(t){return r.a.createElement(Re,{key:t[0].id,message:t[0].message,likesCount:t[0].likesCount,serverID:t[1],deletePost:n,avatar:e.avatar})})).reverse());var o=Object(a.useCallback)((function(t){var n={id:Math.random(),message:t.addNewPost,likesCount:0};e.sendNewPost(n)}),[]);return r.a.createElement("div",{className:De.a.main},r.a.createElement("h3",null," My posts "),r.a.createElement(He,{onSubmit:o}),r.a.createElement("div",{className:De.a.posts},"  ",t,"  "))})),Je=n(72),Be=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.getPosts()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ze,{posts:this.props.posts,sendNewPost:this.props.sendNewPost,deletePost:this.props.deletePost,avatar:this.props.avatar,isOwner:!this.props.match.params.userId}))}}]),n}(r.a.Component),We=Object(ne.d)(Je.a,m.g,Object(v.b)((function(e){var t;return{posts:e.profilePage.postsData,avatar:null===(t=e.profilePage.profile)||void 0===t?void 0:t.photos.small}}),{sendNewPost:function(e){return function(){var t=Object(ke.a)(Pe.a.mark((function t(n){return Pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D(e);case 2:200===t.sent.status&&n(Fe());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getPosts:Fe,deletePost:function(e){return function(){var t=Object(ke.a)(Pe.a.mark((function t(n){return Pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M(e);case 2:200===t.sent.status&&n(Fe());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))(Be);var Ye=function(e){return r.a.createElement("div",null,r.a.createElement(Ce,{profile:e.profile,status:e.status,update:e.update,isOwner:e.isOwner,savePhoto:e.savePhoto,updateProfileData:e.updateProfileData}),r.a.createElement(We,null))},Qe=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"goToProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorisedId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.goToProfile()}},{key:"componentDidUpdate",value:function(e,t){this.props.match.params.userId!=e.match.params.userId&&this.goToProfile()}},{key:"render",value:function(){return r.a.createElement("div",{className:fe.a.content},r.a.createElement(Ye,{profile:this.props.profile,status:this.props.status,update:this.props.updateUserStatus,isOwner:!this.props.match.params.userId,savePhoto:this.props.savePhoto,updateProfileData:this.props.updateProfileData}))}}]),n}(r.a.Component),qe=Object(ne.d)(Je.a,m.g,Object(v.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorisedId:e.auth.id,isAuth:e.auth.isAuth}}),{getUserProfile:function(e){return function(t){A(e).then((function(e){t({type:"SET_USERS_PROFILE",profile:e.data})}))}},getUserStatus:function(e){return function(t){T.getStatus(e).then((function(e){t(Ue(e.data))}))}},updateUserStatus:function(e){return function(t){T.updateStatus(e).then((function(n){0===n.data.resultCode&&t(Ue(e))}))}},savePhoto:function(e){return function(t){T.savePhoto(e).then((function(e){0===e.data.resultCode&&t({type:"SET_USER_PHOTO",photos:e.data.data.photos})}))}},updateProfileData:function(e){return function(){var t=Object(ke.a)(Pe.a.mark((function t(n){var a,r;return Pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.updateProfileData(e);case 2:if(0!==(a=t.sent).data.resultCode){t.next=7;break}n(Te(e)),t.next=10;break;case 7:return r=a.data.messages[0].match(/Contacts->(\w+)/)[1].toLowerCase(),n(Object(Ne.b)("profileData",{contacts:Object(we.a)({},r,a.data.messages[0])})),t.abrupt("return",Promise.reject(a.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))(Qe),Ke=n(104),Ze=n.n(Ke);var Ve=function(e){return r.a.createElement("header",{className:Ze.a.header},r.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQie3E0fOUC7Wzjg0m3zZMX44h4RqWOSJqM1cfgO0t2CeE2pmhc&usqp=CAU"}),r.a.createElement("div",{className:Ze.a.loginBlock},e.isAuth?r.a.createElement("div",null," ",e.login," --- ",r.a.createElement("button",{onClick:e.logout}," Log out ")," "):r.a.createElement(d.b,{to:"/login"},"Login")))},Xe={friends:[]},$e=function(e){return{type:"SET_FRIENDS",friends:e}},et=function(){return function(e){U(!0).then((function(t){e($e(t.items))}))}},tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FRIENDS":return Object(S.a)(Object(S.a)({},e),{},{friends:t.friends});default:return e}},nt={id:null,email:null,login:null,isAuth:!1,captchaUrl:null},at=function(e,t,n,a){return{type:"SET_USER_DATA",payload:{id:e,email:t,login:n,isAuth:a}}},rt=function(e){return{type:"CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},ot=function(){return function(e){return w().then((function(t){if(0===t.resultCode){var n=t.data,a=n.id,r=n.login,o=n.email;e(at(a,o,r,!0))}}))}},it=function(){return function(e){I().then((function(t){0===t.data.resultCode&&(e(at(null,null,null,!1)),e($e([])))}))}},st=function(){return function(){var e=Object(ke.a)(Pe.a.mark((function e(t){var n,a;return Pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:n=e.sent,a=n.data.url,t(rt(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ct=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":case"CAPTCHA_URL_SUCCESS":return Object(S.a)(Object(S.a)({},e),t.payload);default:return e}},lt=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(Ve,{isAuth:this.props.isAuth,login:this.props.login,logout:this.props.logout})}}]),n}(r.a.Component),ut=Object(v.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:it})(lt),mt=n(44),pt=n.n(mt),ft=Object(je.a)(10),dt=Object(je.a)(50),gt=Object(Se.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,a=e.captchaUrl;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,r.a.createElement(Oe.a,{type:"text",name:"email",component:ve.a,placeholder:"email",validate:[je.b,dt]})),r.a.createElement("div",null,r.a.createElement(Oe.a,{type:"password",name:"password",component:ve.a,placeholder:"password",validate:[je.b,ft]})),r.a.createElement("div",{style:{display:"inline-flex"}},r.a.createElement(Oe.a,{type:"checkbox",name:"rememberMe",component:ve.a})," ",r.a.createElement("span",null,"remember me")),a&&r.a.createElement("div",null," ",r.a.createElement("img",{src:a,alt:"Captcha"})," "),a&&r.a.createElement("div",null,r.a.createElement(Oe.a,{type:"text",name:"captcha",component:ve.a,placeholder:"Type antibot symbols",validate:[je.b]})),n&&r.a.createElement("div",{className:pt.a.formSummaryError},n),r.a.createElement("div",null,r.a.createElement("button",null,"Sign in")))})),Et=Object(v.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return function(r){F({email:e,password:t,rememberMe:n,captcha:a}).then((function(e){if(0===e.data.resultCode)r(ot()),r(et());else{10===e.data.resultCode&&r(st());var t=e.data.messages.length>0?e.data.messages:"Error occurred";r(Object(Ne.b)("login",{_error:"".concat(t)}))}}))}},logout:it,getCaptcha:st})((function(e){return e.isAuth?r.a.createElement(m.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"LOGIN"),r.a.createElement(gt,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl}))})),ht={initialised:!1},bt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ht,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALISED_SUCCESFULLY":return Object(S.a)(Object(S.a)({},e),{},{initialised:!0});default:return e}},vt=n(78),Ot=n.n(vt);var St=function(e){var t=e.friends.map((function(e,t){return r.a.createElement("div",{className:Ot.a.friend,key:t},r.a.createElement(d.b,{to:"/profile/"+e.id},r.a.createElement("img",{src:e.photos.small?e.photos.small:Q.a,alt:""})),r.a.createElement("div",{className:Ot.a.friendName},e.name))}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Friends"),r.a.createElement("div",{className:Ot.a.friends},t))},jt=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.getFriends()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(St,{friends:this.props.friends}))}}]),n}(r.a.Component),_t=Object(v.b)((function(e){return{friends:e.friendsPage.friends}}),{getFriends:et})(r.a.memo(jt)),Ct=r.a.lazy((function(){return n.e(3).then(n.bind(null,338))})),yt=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.initialiseApp()}},{key:"render",value:function(){return this.props.initialised?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(ut,null),r.a.createElement(g,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/",render:function(){return r.a.createElement(m.a,{to:"/profile"})}}),r.a.createElement(m.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(qe,null)}}),r.a.createElement(m.b,{path:"/dialogs",render:function(){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(te,null)},r.a.createElement(Ct,null))}}),r.a.createElement(m.b,{path:"/music",render:function(){return r.a.createElement(E,null)}}),r.a.createElement(m.b,{path:"/news",render:function(){return r.a.createElement(h,null)}}),r.a.createElement(m.b,{path:"/settings",render:function(){return r.a.createElement(b,null)}}),r.a.createElement(m.b,{path:"/users",render:function(){return r.a.createElement(me,null)}}),r.a.createElement(m.b,{path:"/login",render:function(){return r.a.createElement(Et,null)}}),r.a.createElement(m.b,{path:"*",render:function(){return r.a.createElement("div",null," 404 NOT FOUND")}}))),r.a.createElement("div",{style:{gridArea:"r",backgroundColor:"black"}},r.a.createElement(_t,null))):r.a.createElement(te,null)}}]),n}(r.a.Component),Pt=Object(v.b)((function(e){return{initialised:e.app.initialised}}),{initialiseApp:function(){return function(e){var t=e(ot());Promise.all([t]).then((function(){e({type:"INITIALISED_SUCCESFULLY"})}))}}})(yt),wt=n(138),kt=n(151),Nt=n(141),At=Object(ne.c)({profilePage:Ie,messagesPage:wt.b,usersPage:J,friendsPage:tt,auth:ct,app:bt,form:Nt.a}),Ut=Object(ne.e)(At,Object(ne.a)(kt.a));i.a.render(r.a.createElement(v.a,{store:Ut},r.a.createElement(d.a,null,r.a.createElement(Pt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},32:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},44:function(e,t,n){e.exports={formControl:"FormControls_formControl__ZYcM1",error:"FormControls_error__3I2i7",formSummaryError:"FormControls_formSummaryError__2CIQE"}},47:function(e,t,n){e.exports=n.p+"static/media/avatar.64830c49.jpg"},51:function(e,t,n){e.exports={usersPhoto:"Users_usersPhoto__2cLG_",userContainer:"Users_userContainer__PLg5V",imageAndButtonContainer:"Users_imageAndButtonContainer__3Yr9E",button:"Users_button__2GMTj",userInformation:"Users_userInformation__3W_DY"}},72:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(17),r=n(18),o=n(20),i=n(19),s=n(0),c=n.n(s),l=n(10),u=n(11),m=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){Object(o.a)(s,t);var n=Object(i.a)(s);function s(){return Object(a.a)(this,s),n.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return this.props.isAuth?c.a.createElement(e,this.props):c.a.createElement(l.a,{to:"/login"})}}]),s}(c.a.Component);return Object(u.b)(m)(t)}},78:function(e,t,n){e.exports={friends:"Friends_friends__22q5d",friend:"Friends_friend__2--Sd",friendName:"Friends_friendName__3AgSy"}},99:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__3QJY_",pagination:"Paginator_pagination__1WvrG"}}},[[180,1,2]]]);
//# sourceMappingURL=main.fd1731c0.chunk.js.map