(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{34:function(e,t,n){e.exports=n.p+"static/media/logo.4ade5cac.png"},35:function(e,t,n){e.exports=n(82)},60:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(17),c=n.n(r),i=n(19),o=n(12),u=n(23);var m={open:!0},s=Object(i.a)({MenuOpenClose:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MENU_OPEN_CLOSE":return Object(u.a)(Object(u.a)({},e),{},{open:!e.open});default:return e}}}),E=n(4),f=n(3),p=n(2),d=n(10),b=n.n(d);var v=function(e,t){var n=Object(a.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(a){return console.log(a),t}})),l=Object(p.a)(n,2),r=l[0],c=l[1];return[r,function(t){try{var n=t instanceof Function?t(r):t;c(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(a){console.log(a)}}]},h=n(34),O=n.n(h),j=(n(60),function(){var e=n(15),t=Object(f.f)(),a=Object(o.b)(),r=v("userId","0"),c=Object(p.a)(r,2),i=c[0],u=c[1];return l.a.createElement("div",{className:"top_nav"},l.a.createElement("div",{className:"left"},l.a.createElement("button",{onClick:function(){a({type:"MENU_OPEN_CLOSE"})}},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement(E.b,{to:"/"},l.a.createElement("img",{src:O.a,alt:"react"}))),"0"!==i?l.a.createElement("div",{className:"right"},l.a.createElement(E.b,{to:"/Information"},"\ub0b4 \uc815\ubcf4"),l.a.createElement("span",null),l.a.createElement("span",{onClick:function(n){e.fire({icon:"question",title:"\uc9c8\ubb38",text:"\uc815\ub9d0 \ub85c\uadf8\uc544\uc6c3 \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",showCancelButton:!0}).then((function(n){n.isConfirmed&&b()({url:"http://127.0.0.1:5000/auth/api/logout",method:"POST"}).then((function(n){"000000"===n.data.result&&e.fire({icon:"success",title:"\uc131\uacf5",text:"\ub85c\uadf8\uc544\uc6c3\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4"}).then((function(e){u("0"),t.push("/")}))})).catch((function(t){e.fire({icon:"error",title:"\uc2e4\ud328",text:"\uc54c\uc218 \uc5c6\ub294 \ubb38\uc81c\ub85c \ub85c\uadf8\uc544\uc6c3\uc774 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4"})}))}))}},"\ub85c\uadf8\uc544\uc6c3")):l.a.createElement("div",{className:"right"},l.a.createElement(E.b,{to:"/Login"},"\ub85c\uadf8\uc778"),l.a.createElement("span",null),l.a.createElement(E.b,{to:"/Join"},"\ud68c\uc6d0\uac00\uc785")))}),g=(n(62),function(e){var t=e.link,n=Object(a.useState)([{id:1,path:"/SessionAndSocket",name:"Session And Socket",icon:"fas fa-bezier-curve awesome-icon"},{id:2,path:"/HabitTracker",name:"Habit Tracker",icon:"fas fa-id-card awesome-icon"}]),r=Object(p.a)(n,1)[0];return l.a.createElement("nav",{className:"left_nav"},l.a.createElement("ul",null,r.map((function(e){return l.a.createElement("li",null,l.a.createElement(E.b,{to:e.path,className:t===e.path&&"on"},l.a.createElement("i",{className:e.icon}),l.a.createElement("span",null,e.name)))}))))}),k=(n(63),function(e){var t=e.link;return l.a.createElement("header",null,l.a.createElement("h1",{className:"blind"},"React Example Header"),l.a.createElement(j,null),l.a.createElement(g,{link:t}))}),x=(n(64),function(e){var t=e.title;return l.a.createElement("p",{className:"main_title"},t)}),S=n(84),N=(n(65),function(){Object(a.useEffect)((function(){"0"!==_&&e.fire({icon:"error",title:"\uc2e4\ud328",text:"\uc62c\ubc14\ub978 \uc811\uadfc \uacbd\ub85c\uac00 \uc544\ub2d9\ub2c8\ub2e4"}).then((function(e){t.push("/")}))}),[]);var e=n(15),t=Object(f.f)(),r=Object(a.useState)(""),c=Object(p.a)(r,2),i=c[0],o=c[1],u=Object(a.useState)(""),m=Object(p.a)(u,2),s=m[0],d=m[1],h=Object(a.useState)(!1),O=Object(p.a)(h,2),j=O[0],g=O[1],k=Object(S.a)(["rememberId"]),x=Object(p.a)(k,3),N=x[0],C=x[1],w=x[2],y=v("userId","0"),T=Object(p.a)(y,2),_=T[0],I=T[1];Object(a.useEffect)((function(){void 0!==N.rememberId&&(o(N.rememberId),g(!0))}),[N]);return l.a.createElement("div",{className:"login_wrap"},l.a.createElement("form",{method:"post",autocomplete:"off"},l.a.createElement("div",null,l.a.createElement("input",{type:"tel",placeholder:"\ud734\ub300\ud3f0 \ubc88\ud638",className:"loginIp",value:i,onChange:function(e){o(e.currentTarget.value)}}),l.a.createElement("input",{type:"password",placeholder:"\ube44\ubc00\ubc88\ud638",className:"loginIp",value:s,onChange:function(e){d(e.currentTarget.value)},autocomplete:"on"})),l.a.createElement("input",{type:"button",value:"\ub85c\uadf8\uc778",className:"loginButton",onClick:function(n){""===i?e.fire({icon:"error",title:"\uc2e4\ud328",text:"\ud734\ub300\ud3f0 \ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}):""===s?e.fire({icon:"error",title:"\uc2e4\ud328",text:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}):b()({url:"http://127.0.0.1:5000/auth/api/login",method:"POST",data:{phone:{Phone:i},password:{Password:s}}}).then((function(n){"000000"===n.data.result?(j?C("rememberId",i,{maxAge:2e3}):w("rememberId"),I("3"),t.push("/")):"000010"===n.data.result&&(e.fire({icon:"error",title:"\uc2e4\ud328",text:"\ud734\ub300\ud3f0 \ubc88\ud638 \ub610\ub294 \ube44\ubc00\uc804\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4"}),d(""))})).catch((function(t){e.fire({icon:"error",title:"\uc2e4\ud328",text:"\uc54c\uc218 \uc5c6\ub294 \ubb38\uc81c\ub85c \ub85c\uadf8\uc778\uc774 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4"}),d("")}))}}),l.a.createElement("p",null,l.a.createElement("input",{type:"checkbox",id:"id_Save",onClick:function(){g(!j)},checked:j}),l.a.createElement("label",{for:"id_Save"},l.a.createElement("span",null,"\uc544\uc774\ub514 \uc800\uc7a5"))),l.a.createElement("span",null),l.a.createElement(E.b,{to:"/Join"},"\ud68c\uc6d0\uac00\uc785")))}),C=(n(66),function(){Object(a.useEffect)((function(){"0"!==B&&e.fire({icon:"error",title:"\uc2e4\ud328",text:"\uc62c\ubc14\ub978 \uc811\uadfc \uacbd\ub85c\uac00 \uc544\ub2d9\ub2c8\ub2e4"}).then((function(e){t.push("/")}))}),[]);var e=n(15),t=Object(f.f)(),r=Object(a.useState)(""),c=Object(p.a)(r,2),i=c[0],o=c[1],u=Object(a.useState)(""),m=Object(p.a)(u,2),s=m[0],d=m[1],h=Object(a.useState)(""),O=Object(p.a)(h,2),j=O[0],g=O[1],k=Object(a.useState)("\uc778\uc99d\ubc88\ud638 \uc694\uccad"),x=Object(p.a)(k,2),S=x[0],N=x[1],C=Object(a.useState)(!1),w=Object(p.a)(C,2),y=w[0],T=w[1],_=Object(a.useState)(""),I=Object(p.a)(_,2),P=I[0],A=I[1],J=Object(a.useState)(""),M=Object(p.a)(J,2),H=M[0],L=M[1],R=v("userId","0"),B=Object(p.a)(R,1)[0];return l.a.createElement("div",{className:"join_wrap"},l.a.createElement("form",{method:"post",autocomplete:"off"},l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("span",null,"\ud734\ub300\ud3f0\ubc88\ud638"),l.a.createElement("span",null,"*")),l.a.createElement("input",{type:"text",value:i,onChange:function(e){o(e.currentTarget.value)}})),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null," ",l.a.createElement("span",null,"\uc131\uba85"),l.a.createElement("span",null,"*")),l.a.createElement("input",{type:"text",value:s,onChange:function(e){d(e.currentTarget.value)}})),l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("span",null,"\ubcf8\uc778\uc778\uc99d"),l.a.createElement("span",null,"*")),l.a.createElement("input",{type:"text",value:j,onChange:function(e){g(e.currentTarget.value)}}),l.a.createElement("button",{type:"button",onClick:function(){""===i?e.fire({icon:"error",title:"\uc2e4\ud328",text:"\ud734\ub300\ud3f0 \ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}):b()({url:"http://127.0.0.1:5000/auth/api/join/certification",method:"POST",data:{phone:{Phone:i}}}).then((function(t){"000000"===t.data.result?y?(e.fire({icon:"success",title:"\uc131\uacf5",text:"\uc778\uc99d\ubc88\ud638\uac00 \uc7ac\ubc1c\uc1a1\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc778\uc99d\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}),g("")):(e.fire({icon:"success",title:"\uc131\uacf5",text:"\uc778\uc99d\ubc88\ud638\uac00 \ubc1c\uc1a1\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc778\uc99d\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}),N("\uc778\uc99d\ubc88\ud638 \uc7ac\uc694\uccad"),T(!0)):"000010"===t.data.result&&e.fire({icon:"error",title:"\uc2e4\ud328",text:"\uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \ud734\ub300\ud3f0 \ubc88\ud638\uc785\ub2c8\ub2e4"})})).catch((function(t){e.fire({icon:"error",title:"\uc2e4\ud328",text:"\uc54c\uc218 \uc5c6\ub294 \ubb38\uc81c\ub85c \uc778\uc99d\ubc88\ud638 \ubc1c\uc1a1\uc774 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4"})}))}},S))),l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("span",null,"\ube44\ubc00\ubc88\ud638"),l.a.createElement("span",null,"*")),l.a.createElement("input",{type:"password",autocomplete:"off",value:P,onChange:function(e){A(e.currentTarget.value)}})),l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("span",null,"\ube44\ubc00\ubc88\ud638 \ud655\uc778"),l.a.createElement("span",null,"*")),l.a.createElement("input",{type:"password",autocomplete:"off",value:H,onChange:function(e){L(e.currentTarget.value)}})),l.a.createElement("p",null,l.a.createElement("span",{onClick:function(){""===i?e.fire({icon:"error",title:"\uc2e4\ud328",text:"\ud734\ub300\ud3f0 \ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}):""===s?e.fire({icon:"error",title:"\uc2e4\ud328",text:"\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"}):""===j?e.fire({icon:"error",title:"\uc2e4\ud328",text:"\ubcf8\uc778\uc778\uc99d \ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}):""===P?e.fire({icon:"error",title:"\uc2e4\ud328",text:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}):""===H?e.fire({icon:"error",title:"\uc2e4\ud328",text:"\ube44\ubc00\ubc88\ud638 \ud655\uc778\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"}):P!==H?e.fire({icon:"error",title:"\uc2e4\ud328",text:"\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4"}):b()({url:"http://127.0.0.1:5000/auth/api/join",method:"POST",data:{phone:{Phone:i},name:{Name:s},certification:{Certification:j},password:{Password:P},passwordConfirm:{PasswordConfirm:H}}}).then((function(n){"000000"===n.data.result?(e.fire({icon:"success",title:"\uc131\uacf5",text:"\ud68c\uc6d0\uac00\uc785\uc774 \uc644\ub8cc\ub410\uc2b5\ub2c8\ub2e4. \ub85c\uadf8\uc778\ud574\uc8fc\uc138\uc694"}),t.push("/login")):"000010"===n.data.result?(e.fire({icon:"error",title:"\uc2e4\ud328",text:"\uc774\ubbf8 \uac00\uc785 \ub41c \ud734\ub300\ud3f0 \ubc88\ud638\uc785\ub2c8\ub2e4"}),A(""),L(""),g("")):"000020"===n.data.result&&(e.fire({icon:"error",title:"\uc2e4\ud328",text:"\ubcf8\uc778 \uc778\uc99d\uc774 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4"}),A(""),L(""),g(""))})).catch((function(t){e.fire({icon:"error",title:"\uc2e4\ud328",text:"\uc54c\uc218 \uc5c6\ub294 \ubb38\uc81c\ub85c \ud68c\uc6d0\uac00\uc785\uc774 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4"}),A(""),L("")}))}},"\uac00\uc785\ud558\uae30"),l.a.createElement(E.b,{to:"/"},"\ucde8\uc18c"))))}),w=(n(67),function(){Object(a.useEffect)((function(){"0"===S&&e.fire({icon:"error",title:"\uc2e4\ud328",text:"\uc62c\ubc14\ub978 \uc811\uadfc \uacbd\ub85c\uac00 \uc544\ub2d9\ub2c8\ub2e4"}).then((function(e){t.push("/")}))}),[]);var e=n(15),t=Object(f.f)(),r=Object(a.useState)(""),c=Object(p.a)(r,1)[0],i=Object(a.useState)(""),o=Object(p.a)(i,2),u=o[0],m=o[1],s=Object(a.useState)(""),d=Object(p.a)(s,2),b=d[0],h=d[1],O=Object(a.useState)(""),j=Object(p.a)(O,2),g=j[0],k=j[1],x=v("userId","0"),S=Object(p.a)(x,1)[0];return l.a.createElement("div",{className:"information_wrap"},l.a.createElement("form",{method:"post",autocomplete:"off"},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("span",null,"\ud734\ub300\ud3f0\ubc88\ud638"),l.a.createElement("span",null,"*")),l.a.createElement("input",{type:"text",value:c,readOnly:!0})),l.a.createElement("div",null,l.a.createElement("p",null," ",l.a.createElement("span",null,"\uc131\uba85"),l.a.createElement("span",null,"*")),l.a.createElement("input",{type:"text",value:u,onChange:function(e){m(e.currentTarget.value)}}))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("span",null,"\ube44\ubc00\ubc88\ud638"),l.a.createElement("span",null,"*")),l.a.createElement("input",{type:"password",autocomplete:"off",value:b,onChange:function(e){h(e.currentTarget.value)}})),l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("span",null,"\ube44\ubc00\ubc88\ud638 \ud655\uc778"),l.a.createElement("span",null,"*")),l.a.createElement("input",{type:"password",autocomplete:"off",value:g,onChange:function(e){k(e.currentTarget.value)}}))),l.a.createElement("p",null,l.a.createElement("span",null,"\ubcc0\uacbd\ud558\uae30"),l.a.createElement(E.b,{to:"/"},"\ucde8\uc18c"))))}),y=(n(68),function(e){var t=e.title,n=e.name;return l.a.createElement("div",{className:"main"},l.a.createElement("main",null,l.a.createElement("h1",{className:"blind"},"React Example Main"),l.a.createElement("div",{className:"content"},l.a.createElement(x,{title:t}),"login"===n&&l.a.createElement(N,null),"join"===n&&l.a.createElement(C,null),"information"===n&&l.a.createElement(w,null))))}),T=(n(69),function(){return l.a.createElement("footer",null,l.a.createElement("h1",{className:"blind"},"React Example Footer"),l.a.createElement("p",null,"\xa9 2021. REACT EXAMPLE all rights reserved."))}),_=(n(70),function(e){var t=e.title,n=e.name,a=e.link;return l.a.createElement("div",{className:n},l.a.createElement(k,{link:a}),l.a.createElement(y,{title:t,name:n}),l.a.createElement(T,null))}),I=(n(71),function(e){var t=e.title,n=e.name,a=e.link;return l.a.createElement("div",{className:n},l.a.createElement(k,{link:a}),l.a.createElement(y,{title:t,name:n}),l.a.createElement(T,null))}),P=(n(72),function(e){var t=e.title,n=e.name,a=e.link;return l.a.createElement("div",{className:n},l.a.createElement(k,{link:a}),l.a.createElement(y,{title:t,name:n}),l.a.createElement(T,null))}),A=(n(73),function(e){var t=e.title,n=e.name,a=e.link;return l.a.createElement("div",{className:n},l.a.createElement(k,{link:a}),l.a.createElement(y,{title:t,name:n}),l.a.createElement(T,null))}),J=(n(74),function(e){var t=e.title,n=e.name,a=e.link;return l.a.createElement("div",{className:n},l.a.createElement(k,{link:a}),l.a.createElement(y,{title:t,name:n}),l.a.createElement(T,null))}),M=(n(75),function(e){var t=e.title,n=e.name,a=e.link;return l.a.createElement("div",{className:n},l.a.createElement(k,{link:a}),l.a.createElement(y,{title:t,name:n}),l.a.createElement(T,null))}),H=(n(76),function(){return l.a.createElement("div",{class:"not_found_wrap"},l.a.createElement("div",{class:"fof"},l.a.createElement("h1",null,"Error 404")))}),L=(n(77),n(78),function(){var e=Object(o.c)((function(e){return e.MenuOpenClose}));return l.a.createElement("div",{className:e.open?"react_app open":"react_app close_"},l.a.createElement(E.a,null,l.a.createElement(f.c,null,l.a.createElement(f.a,{path:"/",exact:!0,render:function(){return l.a.createElement(_,{title:"\ud648",name:"home",link:"/"})}}),l.a.createElement(f.a,{path:"/SessionAndSocket",exact:!0,render:function(){return l.a.createElement(I,{title:"Session And Socket",name:"session and socket",link:"/SessionAndSocket"})}}),l.a.createElement(f.a,{path:"/HabitTracker",exact:!0,render:function(){return l.a.createElement(P,{title:"Habit Tracker",name:"habit_racker",link:"/HabitTracker"})}}),l.a.createElement(f.a,{path:"/Login",exact:!0,render:function(){return l.a.createElement(A,{title:"\ub85c\uadf8\uc778",name:"login",link:"/login"})}}),l.a.createElement(f.a,{path:"/Join",exact:!0,render:function(){return l.a.createElement(J,{title:"\ud68c\uc6d0\uac00\uc785",name:"join",link:"/join"})}}),l.a.createElement(f.a,{path:"/Information",exact:!0,render:function(){return l.a.createElement(M,{title:"\ud68c\uc6d0\uc815\ubcf4",name:"information",link:"/information"})}}),l.a.createElement(f.a,{component:H}))))}),R=(n(79),Object(i.b)(s));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(o.a,{store:R},l.a.createElement(L,null))),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.18009bec.chunk.js.map