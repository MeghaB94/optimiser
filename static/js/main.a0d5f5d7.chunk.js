(this.webpackJsonpoptimiser=this.webpackJsonpoptimiser||[]).push([[0],{108:function(e,t,a){e.exports=a(144)},141:function(e,t,a){},144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),s=a.n(c),o=a(16);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i,l=a(53),m=a.n(l),u=function(e,t){return function(a){t||e.push("/login")}},E=function(e){i=e,b.register(i)},g=function(){return!!i||!!b.getToken()},p=function(){b.deregister(),i=void 0},d=function(){var e="";return(i=i||b.getToken())&&(e="Bearer "+i),e},f=window||{},y=f.btoa,h=f.atob,O=f.localStorage,b={register:function(e){var t=e?y(e):"";O.setItem("USER",t)},deregister:function(){O.clear()},getToken:function(){var e=O.getItem("USER")||"";return e&&(e=e?h(e):""),e}},v=function(e,t){return function(a){return e.listen((function(e,a){console.log("HISTORY",a,e.pathname),t(e.pathname)}))}},x=function(e,t){(t.response?t.response.data:t).timestamp=Date.now(),t&&t.response&&t.response.status},S=function(e){m.a.interceptors.request.use((function(e){return e.headers["content-type"]="application/json",e.headers.setBearerAuth&&(e.headers.Authorization=d(),delete e.headers.setBearerAuth),e}),(function(t){return x(e,t),Promise.reject(t)})),m.a.interceptors.response.use((function(e){if(200===e.status)return console.log(e),e}),(function(t){return x(e,t),Promise.reject(t)}))},C=a(99),N=a(182),j=a(45),L=a(90),I=a(91),w=a(92),k=a.n(w),R=a(6),U=a(18),T=a(183),_=a(184),A=a(189),D={route:"",isLoggedIn:g()},P=Object(T.a)({ON_ROUTE_CHANGE:function(e){return{route:e}},ON_LOGIN:function(e){return E(e),{}},ON_LOGOUT:function(e){return p(),{}}},{prefix:"APP"}),G=P.onLogin,H=P.onLogout,W=P.onRouteChange,B={onLogin:G,onLogout:H,onRouteChange:W},M=Object(_.a)(Object(R.a)({},Object(A.a)(G,H,W),(function(e,t){var a=t.payload;return Object(U.a)({},e,{},a,{isLoggedIn:g()})})),D),F={open:!1},V=Object(T.a)({SHOW:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{data:e,open:!0}},HIDE:function(e){return F}}),z=V.show,K=V.hide,Y={show:z,hide:K},q=Object(_.a)(Object(R.a)({},Object(A.a)(z,K),(function(e,t){return t.payload})),F),$=a(17),J=a.n($),Q=Object({NODE_ENV:"production",PUBLIC_URL:""}).LOGIN_API_ENDPOINT+"/user",X={LOGIN:Q+"/login",LOGOUT:Q+"/logout",SIGNUP:Q+"/signup",GET_USER_DATA:Q+"/",UPDATE_PROFILE:Q+"/updateProfile"},Z=function(e){return{data:{token:"psadadj",message:"Logged In Successfully"}}},ee=function(){return m.a.get(X.SIGNUP,{headers:{setBearerAuth:!0}})},te=function(){return{data:se}},ae=function(){return{data:ce}},ne=function(e){return se.push({strategyInput:{WOS:8,maxStep:5,maxDisc:50,minStep:5,minDisc:5},forecastResults:{WOS:5,erosion:751549.67,EOH:27300769,EOHUnits:3,avgOBDisc:10,salesUnits:4,COGS:200,recoveryRate:200}}),{data:{message:"Saved Successfully"}}},re=function(){return{data:{message:"Logged Out Successfully"}}},ce=[{classLevelSummary:{className:"140 - className",classDesc:"Samsung TV's",avgOBDisc:50,erosion:7769,WOS:10,EOH:7869,EOHUnits:324,salesUnits:8970,COGS:5575,recoveryRate:3897},skuLevelSummary:{SKU:786789,SKUDesc:'Samsung - 43" Class-LED',avgOBDisc:47,erosion:7769,WOS:10,EOH:7869,EOHUnits:324,salesUnits:8970,COGS:5575,recoveryRate:3897}}],se=[],oe={username:"",password:""},ie=Object(T.a)({FETCH_LOGOUT:function(e){var t;return J.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.a.awrap(re());case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}))},FETCH_LOGIN:function(e){var t;return J.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,J.a.awrap(Z(e));case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}))}},"ON_INPUT_CHANGE",{prefix:"LOGIN"}),le=ie.fetchLogin,me=ie.fetchLogout,ue=ie.onInputChange,Ee={login:function(e){var t=e.username,a=e.password;return function(e){var n=window.btoa("".concat(t,":").concat(a));e(le(n)).then((function(t){var a=t.payload;e(B.onLogin(a.token)),e(Y.show(a.message)),e(ue(oe))})).catch((function(t){var a=t.response,n=void 0===a?{data:{error:"Something went wrong"}}:a;e(Y.show(n.data.error))}))}},logout:function(e){return function(e){e(me()).then((function(t){var a=t.payload;e(B.onLogout()),e(Y.show(a.message)),e(ue(oe))})).catch((function(t){var a=t.response,n=void 0===a?{data:{error:"Something went wrong"}}:a;e(Y.show(n.data.error))}))}},onInputChange:ue},ge=Object(_.a)(Object(R.a)({},Object(A.a)(ue),(function(e,t){var a=t.payload;return Object(U.a)({},e,{},a)})),oe),pe={minimizeErosion:!0,clearInventory:!1,clearOldAgeProductFirst:!1,strategyName:"",strategyClass:140,strategyWOS:5,strategyConstraints:[{constraintType:"",constraintValue:""}]},de=Object(T.a)({UPDATE_STRATEGY:function(e){var t;return J.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,J.a.awrap(ne(e));case 2:return t=a.sent,console.log(t),a.abrupt("return",t.data.message);case 5:case"end":return a.stop()}}))},GET_STRATEGY:function(e){var t;return J.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,J.a.awrap(ee(e));case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}))}},"ON_INPUT_CHANGE",{prefix:"STRATEGY"}),fe=de.updateStrategy,ye=de.getStrategy,he=de.onInputChange,Oe={update:function(e){return function(t){t(fe(e)).then((function(e){var a=e.payload;t(Y.show(a)),t(he(pe))})).catch((function(e){var a=e.response,n=void 0===a?{data:{error:"Something went wrong"}}:a;t(Y.show(n.data.error))}))}},getStrategy:ye,onInputChange:he},be=Object(_.a)(Object(R.a)({},Object(A.a)(he),(function(e,t){var a=t.payload;return Object(U.a)({},e,{},a)})),pe),ve=Object(T.a)({GET_SUMMARY:function(e){var t;return J.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.a.awrap(te());case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}))}},{prefix:"SUMMARY"}).getSummary,xe={getSummary:ve},Se=Object(_.a)(Object(R.a)({},Object(A.a)(ve),(function(e,t){return t.payload})),[]),Ce=Object(T.a)({GET_SKU_LEVEL_SUMMARY:function(e){var t;return J.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.a.awrap(ae());case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}))}},{prefix:"ROLLUP"}).getSkuLevelSummary,Ne={getSkuLevelSummary:Ce},je=Object(_.a)(Object(R.a)({},Object(A.a)(Ce),(function(e,t){return t.payload})),[]),Le=Object(j.c)({appStore:M,loginStore:ge,strategyData:be,summaryList:Se,strategyRollUpSummaryList:je,snackbarStore:q}),Ie=Object(j.a)(k.a,I.a,Object(L.createLogger)())(j.d);a(141);var we=a(32),ke=a(37),Re=a(188),Ue=a(67),Te=a(96),_e=a.n(Te),Ae=a(100),De=a(190),Pe=Ee.logout,Ge=Object(o.b)((function(e){return{isLoggedIn:e.appStore.isLoggedIn}}),{logout:Pe})((function(e){var t=e.isLoggedIn,a=e.logout,n=r.a.useState(null),c=Object(Ue.a)(n,2),s=c[0],o=c[1],i=function(){return o(null)};return r.a.createElement("header",{className:"header-wrapper"},r.a.createElement(we.b,{className:"menu-link",to:"/create_strategy"},r.a.createElement("div",{className:"logo-container"})),r.a.createElement("div",{className:"menu-container"},t&&r.a.createElement(_e.a,{onClick:function(e){return o(e.currentTarget)}}),r.a.createElement(Ae.a,{id:"simple-menu",anchorEl:s,keepMounted:!0,open:Boolean(s),onClose:i,className:"menu-container"},r.a.createElement(De.a,{onClick:i},r.a.createElement(we.b,{className:"menu-link",to:"/create_strategy"},"Create Strategy")),r.a.createElement(De.a,{onClick:i},r.a.createElement(we.b,{className:"menu-link",to:"/summary"},"Optimisation Summary")),r.a.createElement(De.a,{onClick:i},r.a.createElement(we.b,{className:"menu-link",to:"/strategy_roll_up"},"Strategy Roll up")),r.a.createElement(De.a,{onClick:function(){i(),a()}},"Log out"))))})),He=a(177),We=a(191),Be=a(180),Me={login:Ee.login,onInputChange:Ee.onInputChange,showError:Y.show,onRouteChange:B.onRouteChange},Fe=Object(o.b)((function(e){var t=e.loginStore,a=e.appStore.isLoggedIn;return Object(U.a)({},t,{isLoggedIn:a})}),Me)((function(e){Object(n.useEffect)((function(){c&&e.history.push("/create_strategy")})),Object(n.useEffect)(v(e.history,e.onRouteChange));var t=e.username,a=e.password,c=e.isLoggedIn,s=function(t,a){var n=t.target.value;e.onInputChange(Object(R.a)({},a,n))};return r.a.createElement("div",{className:"login-content"},r.a.createElement("form",{className:"login-form"},r.a.createElement(He.a,{className:"form-control"},r.a.createElement(We.a,{name:"username",label:"User Name",variant:"outlined",type:"text",placeholder:"User Name",className:"login-input",required:!0,value:t,onChange:function(e){return s(e,"username")}})),r.a.createElement(He.a,{className:"form-control"},r.a.createElement(We.a,{name:"password",label:"Password",variant:"outlined",type:"password",placeholder:"Password",className:"login-input",required:!0,value:a,onChange:function(e){return s(e,"password")},onKeyUp:function(n){return 13===n.keyCode&&e.login({username:t,password:a})}}))),r.a.createElement(Be.a,{color:"primary",size:"large",variant:"contained",className:"login-arrow",onClick:function(n){if(t.length<=0||a.length<=0)return e.showError("Enter valid mobile & password");e.login({username:t,password:a})}},"Login"))})),Ve=a(181),ze=a(176),Ke=Object(o.b)(null,{onRouteChange:B.onRouteChange})((function(e){return Object(n.useEffect)(v(e.history,e.onRouteChange)),r.a.createElement(Ve.a,{container:!0,justify:"center",spacing:3},r.a.createElement(Ve.a,{item:!0,xs:12},r.a.createElement(ze.a,{className:"not-found"})))})),Ye=a(193),qe=a(186),$e=a(29),Je=a(98),Qe=a.n(Je),Xe=["Max Discount %","Min Discount %","Step Change Discount %"],Ze=function(e){var t=e.strategyConstraints,a=e.onInputChange,c=Object(n.useState)([]),s=Object(Ue.a)(c,2),o=s[0],i=s[1];Object(n.useEffect)((function(){var e=t.filter((function(e){return!!e.constraintType})).map((function(e){return e.constraintType})),a=Xe.filter((function(t){return!e.includes(t)}));i(a)}),[t]);var l=function(e,n,r){var c=Object($e.a)(t),s={constraintType:"",constraintValue:""};console.log(r),"pushConstraint"===r&&t.length<3&&c.push(s),"delete"===r?(c.splice(n,1),c.length<1&&c.push(s)):c.splice(n,1,e),a({strategyConstraints:c})};return r.a.createElement(Ve.a,{container:!0},t.map((function(e,t){return r.a.createElement(et,Object.assign({key:"".concat(t,"-").concat(e.type),index:t},e,{constraintTypeList:o,onConstraintChange:l}))})))},et=function(e){var t=e.constraintType,a=e.constraintTypeList,n=e.index,c=e.constraintValue,s=e.onConstraintChange,o=function(e,a){var r=e.target.value,o=""===t&&r&&"constraintType"===a?"pushConstraint":"";s(Object(R.a)({constraintType:t,constraintValue:c},a,r),n,o)};return r.a.createElement(Ve.a,{container:!0},r.a.createElement(Ve.a,{item:!0,xs:6},r.a.createElement(He.a,{variant:"outlined",className:"form-control"},r.a.createElement(Ye.a,{id:"demo-simple-select-outlined-label"},"Constraints"),r.a.createElement(qe.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",labelWidth:72,value:t,onChange:function(e){return o(e,"constraintType")}},t&&r.a.createElement(De.a,{key:t,value:t},t),a.map((function(e){return r.a.createElement(De.a,{key:e,value:e},e)}))))),r.a.createElement(Ve.a,{item:!0,xs:5,className:"contraint-value"},r.a.createElement(He.a,{className:"form-control"},r.a.createElement(We.a,{name:"strategy constraint",label:"Value",variant:"outlined",type:"text",placeholder:t,className:"{styles.loginInput}",required:!0,disabled:!t,value:c,onChange:function(e){return o(e,"constraintValue")}}))),r.a.createElement(Ve.a,{item:!0,xs:1,className:"delete-container",onClick:function(e){return s(null,n,"delete")}},r.a.createElement(Qe.a,null)))},tt=a(185),at=function(e){var t=e.minimizeErosion,a=e.clearInventory,n=e.clearOldAgeProductFirst,c=e.onInputChange,s=function(e,t){var a=e.target.checked;c(Object(R.a)({},t,!!a))};return r.a.createElement(Ve.a,{container:!0},r.a.createElement(Ye.a,null,"Strategy : "),r.a.createElement(Ve.a,{container:!0,className:"checkbox-container"},r.a.createElement(Ve.a,{item:!0},r.a.createElement(Ye.a,{className:"checkbox-label"},r.a.createElement(tt.a,{checked:t,value:"Minimise Errosion",color:"primary",disabled:!0,inputProps:{"aria-label":"secondary checkbox"}}),r.a.createElement("span",null,"Minimise Errosion"))),r.a.createElement(Ve.a,{item:!0},r.a.createElement(Ye.a,{className:"checkbox-label"},r.a.createElement(tt.a,{checked:a,onChange:function(e){return s(e,"clearInventory")},value:"Clear Inventory",color:"primary",inputProps:{"aria-label":"secondary checkbox"}}),r.a.createElement("span",null,"Clear Inventory"))),r.a.createElement(Ve.a,{item:!0},r.a.createElement(Ye.a,{className:"checkbox-label"},r.a.createElement(tt.a,{checked:n,onChange:function(e){return s(e,"clearOldAgeProductFirst")},value:"Clear Old Age Product First",color:"primary",inputProps:{"aria-label":"secondary checkbox"}}),r.a.createElement("span",null,"Clear Old Age Product First")))))},nt=Object(U.a)({},Oe,{showError:Y.show,onRouteChange:B.onRouteChange}),rt=Object(o.b)((function(e){var t=e.strategyData,a=e.appStore.isLoggedIn;return Object(U.a)({},t,{isLoggedIn:a})}),nt)((function(e){var t=e.strategyName,a=e.strategyClass,c=e.strategyWOS,s=e.strategyConstraints,o=e.minimizeErosion,i=e.clearInventory,l=e.clearOldAgeProductFirst,m=e.isLoggedIn;Object(n.useEffect)(u(e.history,m),[m]),Object(n.useEffect)(v(e.history,e.onRouteChange));var E=function(t,a){var n=t.target.value;e.onInputChange(Object(R.a)({},a,n))};return r.a.createElement(ze.a,{className:"create-strategy"},r.a.createElement("form",{className:"strategy-form"},r.a.createElement(Ve.a,{item:!0,xs:12},r.a.createElement(He.a,{className:"form-control"},r.a.createElement(We.a,{name:"strategy name",label:"Name",variant:"outlined",type:"text",placeholder:"Create a name",required:!0,value:t,onChange:function(e){return E(e,"strategyName")}}))),r.a.createElement(Ve.a,{item:!0,xs:6},r.a.createElement(He.a,{variant:"outlined",className:"form-control"},r.a.createElement(Ye.a,{id:"strategy-class-select-label"}," Class "),r.a.createElement(qe.a,{labelId:"strategy-class-select-label",id:"strategy-class-select",labelWidth:37,value:a,onChange:function(e){return E(e,"strategyClass")}},r.a.createElement(De.a,{value:140},"140"),r.a.createElement(De.a,{value:10},"10"),r.a.createElement(De.a,{value:11},"11")))),r.a.createElement(at,{minimizeErosion:o,clearInventory:i,clearOldAgeProductFirst:l,onInputChange:e.onInputChange}),r.a.createElement(Ve.a,{item:!0,xs:6},r.a.createElement(He.a,{className:"form-control"},r.a.createElement(We.a,{name:"strategy name",label:"Class Weeks Of Supply",variant:"outlined",type:"text",placeholder:"Weeks Of Supply",required:!0,value:c,onChange:function(e){return E(e,"strategyWOS")}}))),r.a.createElement(Ze,{strategyConstraints:s,onInputChange:e.onInputChange})),r.a.createElement(Be.a,{color:"primary",size:"large",variant:"contained",onClick:function(n){if(t.length<=0||a.length<=0)return e.showError("Enter valid strategyName & strategyClass");e.update({strategyName:t,strategyClass:a,strategyWOS:c,strategyConstraints:s,minimizeErosion:o,clearInventory:i,clearOldAgeProductFirst:l}),e.history.push("/summary")}}," Submit "))})),ct=function(e){var t=e.data;return r.a.createElement(Ve.a,{container:!0},r.a.createElement(Ve.a,{container:!0,className:"summary-header"},r.a.createElement(Ve.a,{item:!0,xs:8},"Strategy Input"),r.a.createElement(Ve.a,{item:!0,xs:4},"Value")),r.a.createElement(Ve.a,{container:!0},r.a.createElement(Ve.a,{item:!0,xs:8},"Weeks Of Supply"),r.a.createElement(Ve.a,{item:!0,xs:4},t.WOS)),r.a.createElement(Ve.a,{container:!0},r.a.createElement(Ve.a,{item:!0,xs:8},"Max Step"),r.a.createElement(Ve.a,{item:!0,xs:4},t.maxStep)),r.a.createElement(Ve.a,{container:!0},r.a.createElement(Ve.a,{item:!0,xs:8},"Min Step"),r.a.createElement(Ve.a,{item:!0,xs:4},t.minStep)),r.a.createElement(Ve.a,{container:!0},r.a.createElement(Ve.a,{item:!0,xs:8},"Max Discount"),r.a.createElement(Ve.a,{item:!0,xs:4},t.minDisc)),r.a.createElement(Ve.a,{container:!0},r.a.createElement(Ve.a,{item:!0,xs:8},"Min Discount"),r.a.createElement(Ve.a,{item:!0,xs:4},t.minDisc)))},st=function(e){var t=e.data;return r.a.createElement(Ve.a,{container:!0},r.a.createElement(Ve.a,{container:!0,className:"summary-header"},r.a.createElement(Ve.a,{item:!0,xs:8},"Forcasted Results"),r.a.createElement(Ve.a,{item:!0,xs:4},"Value")),r.a.createElement(Ve.a,{container:!0},r.a.createElement(Ve.a,{item:!0,xs:8},"Weeks Of Supply"),r.a.createElement(Ve.a,{item:!0,xs:4},t.WOS)),r.a.createElement(Ve.a,{container:!0},r.a.createElement(Ve.a,{item:!0,xs:8},"Erosion $"),r.a.createElement(Ve.a,{item:!0,xs:4},t.erosion)),r.a.createElement(Ve.a,{container:!0},r.a.createElement(Ve.a,{item:!0,xs:8},"EOH $"),r.a.createElement(Ve.a,{item:!0,xs:4},t.EOH)),r.a.createElement(Ve.a,{container:!0},r.a.createElement(Ve.a,{item:!0,xs:8},"EOH Units"),r.a.createElement(Ve.a,{item:!0,xs:4},t.EOHUnits)),r.a.createElement(Ve.a,{container:!0},r.a.createElement(Ve.a,{item:!0,xs:8},"Avg OB %"),r.a.createElement(Ve.a,{item:!0,xs:4},t.avgOBDisc)),r.a.createElement(Ve.a,{container:!0},r.a.createElement(Ve.a,{item:!0,xs:8},"Sales Units"),r.a.createElement(Ve.a,{item:!0,xs:4},t.salesUnits)),r.a.createElement(Ve.a,{container:!0},r.a.createElement(Ve.a,{item:!0,xs:8},"COGS"),r.a.createElement(Ve.a,{item:!0,xs:4},t.COGS)),r.a.createElement(Ve.a,{container:!0},r.a.createElement(Ve.a,{item:!0,xs:8},"Recovery Rate"),r.a.createElement(Ve.a,{item:!0,xs:4},t.recoveryRate)))},ot=function(e){return e.summaryList.map((function(e,t){return r.a.createElement(Ve.a,{key:t,item:!0,xs:12,sm:6,lg:4},r.a.createElement(ze.a,{className:"summary-item"},r.a.createElement(ct,{data:e.strategyInput}),r.a.createElement(st,{data:e.forecastResults}),r.a.createElement("span",{className:"input-group-btn"},r.a.createElement(we.b,{to:"/strategy_roll_up"},"See more detail"))))}))},it=Object(o.b)((function(e){return{summaryList:e.summaryList,isLoggedIn:e.appStore.isLoggedIn}}),Object(U.a)({},xe,{onRouteChange:B.onRouteChange}))((function(e){var t=e.summaryList,a=e.isLoggedIn,c=e.history,s=e.getSummary,o=e.onRouteChange;return Object(n.useEffect)(u(c,a),[a]),Object(n.useEffect)((function(){a&&s()}),[a,s]),Object(n.useEffect)(v(c,o)),r.a.createElement("div",{className:"summary-container"},r.a.createElement(Ve.a,{container:!0,spacing:2,wrap:"wrap"},r.a.createElement(ot,{summaryList:t}),r.a.createElement(Ve.a,{item:!0,xs:12,sm:6,lg:4},r.a.createElement(we.b,{to:"/create_strategy",className:"add-summary-container"},r.a.createElement(ze.a,{className:"summary-item add-summary"},r.a.createElement("div",null,"Add Another"),r.a.createElement("div",null,"Strategy"))))))})),lt=function(e){var t=e.data;return r.a.createElement(Ve.a,{container:!0},r.a.createElement(Ve.a,{container:!0,className:"roll-up-header"},r.a.createElement(Ve.a,{item:!0,xs:2},"SKU"),r.a.createElement(Ve.a,{item:!0,xs:3},"SKU Description"),r.a.createElement(Ve.a,{item:!0,xs:1},"Avg OB %"),r.a.createElement(Ve.a,{item:!0,xs:1},"Erosion $"),r.a.createElement(Ve.a,{item:!0,xs:1},"WOS"),r.a.createElement(Ve.a,{item:!0,xs:1},"EOH Units"),r.a.createElement(Ve.a,{item:!0,xs:1},"Sales Units"),r.a.createElement(Ve.a,{item:!0,xs:1},"COGS"),r.a.createElement(Ve.a,{item:!0,xs:1},"Recovery Rate")),r.a.createElement(Ve.a,{container:!0},r.a.createElement(Ve.a,{item:!0,xs:2},t.SKU),r.a.createElement(Ve.a,{item:!0,xs:3},t.SKUDesc),r.a.createElement(Ve.a,{item:!0,xs:1},t.avgOBDisc),r.a.createElement(Ve.a,{item:!0,xs:1},t.erosion),r.a.createElement(Ve.a,{item:!0,xs:1},t.WOS),r.a.createElement(Ve.a,{item:!0,xs:1},t.EOHUnits),r.a.createElement(Ve.a,{item:!0,xs:1},t.salesUnits),r.a.createElement(Ve.a,{item:!0,xs:1},t.COGS),r.a.createElement(Ve.a,{item:!0,xs:1},t.recoveryRate)))},mt=function(e){var t=e.data;return r.a.createElement(Ve.a,{container:!0},r.a.createElement(Ve.a,{container:!0,className:"summary-header"},r.a.createElement(Ve.a,{item:!0,xs:12},"TV's - 4k- Holiday")),r.a.createElement(Ve.a,{container:!0,className:"roll-up-header"},r.a.createElement(Ve.a,{item:!0,xs:2},"Class"),r.a.createElement(Ve.a,{item:!0,xs:3},"Class Description"),r.a.createElement(Ve.a,{item:!0,xs:1},"Avg OB %"),r.a.createElement(Ve.a,{item:!0,xs:1},"Erosion $"),r.a.createElement(Ve.a,{item:!0,xs:1},"WOS"),r.a.createElement(Ve.a,{item:!0,xs:1},"EOH Units"),r.a.createElement(Ve.a,{item:!0,xs:1},"Sales Units"),r.a.createElement(Ve.a,{item:!0,xs:1},"COGS"),r.a.createElement(Ve.a,{item:!0,xs:1},"Recovery Rate")),r.a.createElement(Ve.a,{container:!0},r.a.createElement(Ve.a,{item:!0,xs:2},t.className),r.a.createElement(Ve.a,{item:!0,xs:3},t.classDesc),r.a.createElement(Ve.a,{item:!0,xs:1},t.avgOBDisc),r.a.createElement(Ve.a,{item:!0,xs:1},t.erosion),r.a.createElement(Ve.a,{item:!0,xs:1},t.WOS),r.a.createElement(Ve.a,{item:!0,xs:1},t.EOHUnits),r.a.createElement(Ve.a,{item:!0,xs:1},t.salesUnits),r.a.createElement(Ve.a,{item:!0,xs:1},t.COGS),r.a.createElement(Ve.a,{item:!0,xs:1},t.recoveryRate)))},ut=function(e){return e.strategyRollUpSummaryList.map((function(e,t){return r.a.createElement(Ve.a,{key:t,item:!0,xs:12},r.a.createElement(ze.a,{className:"summary-item"},r.a.createElement(mt,{data:e.classLevelSummary}),r.a.createElement(lt,{data:e.skuLevelSummary})))}))},Et=Object(o.b)((function(e){return{strategyRollUpSummaryList:e.strategyRollUpSummaryList,isLoggedIn:e.appStore.isLoggedIn}}),Object(U.a)({},Ne,{onRouteChange:B.onRouteChange}))((function(e){var t=e.strategyRollUpSummaryList,a=e.isLoggedIn,c=e.history,s=e.getSkuLevelSummary,o=e.onRouteChange;return Object(n.useEffect)(u(c,a),[a]),Object(n.useEffect)((function(){a&&s()}),[a,s]),Object(n.useEffect)(v(c,o)),r.a.createElement("div",{className:"summary-container"},r.a.createElement(Ve.a,{container:!0,spacing:2,wrap:"wrap"},r.a.createElement(ut,{strategyRollUpSummaryList:t})))}));var gt=Object(o.b)((function(e){var t=e.snackbarStore;return{snackbarStatus:t.open||!1,snackbarText:t.data||""}}),{handleSnackbarClose:Y.hide})((function(e){return r.a.createElement(we.a,null,r.a.createElement(Ge,null),r.a.createElement("div",{className:"main-wrapper"},r.a.createElement(ke.d,null,r.a.createElement(ke.b,{exact:!0,path:"/",component:Fe}),r.a.createElement(ke.b,{exact:!0,path:"/404",component:Ke}),r.a.createElement(ke.b,{exact:!0,path:"/login",component:Fe}),r.a.createElement(ke.b,{exact:!0,path:"/create_strategy",component:rt}),r.a.createElement(ke.b,{exact:!0,path:"/summary",component:it}),r.a.createElement(ke.b,{exact:!0,path:"/strategy_roll_up",component:Et}),r.a.createElement(ke.a,{to:"/404"})),r.a.createElement(Re.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:e.snackbarStatus,key:"topBottom",autoHideDuration:2e3,onClose:e.handleSnackbarClose,ContentProps:{"aria-describedby":"message-id"},message:r.a.createElement("span",{id:"message-id"},e.snackbarText)})))})),pt=Object(C.a)({palette:{primary:{main:"#0b66af"},secondary:{main:"#686868"}}}),dt=Ie(Le,{});S(dt);var ft=r.a.createElement(o.a,{store:dt},r.a.createElement(N.a,{theme:pt},r.a.createElement(gt,null)));s.a.render(ft,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[108,1,2]]]);
//# sourceMappingURL=main.a0d5f5d7.chunk.js.map