(this["webpackJsonpmu-see-k"]=this["webpackJsonpmu-see-k"]||[]).push([[0],{38:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){},42:function(e,t,s){},43:function(e,t,s){},44:function(e){e.exports=JSON.parse("{}")},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){},73:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),a=s(29),i=s.n(a),r=(s(38),s(39),s(32)),o=s(3),j=(s(40),s(0)),l=(s(42),function(){return Object(j.jsxs)("div",{className:"RegisterSucceed",children:[Object(j.jsx)("header",{className:"RegisterSucceed-header",children:"Rejestracja udana"}),Object(j.jsx)("div",{children:"content here"})]})}),h=s(11),u=(s(43),s(44),s(30)),d=s.n(u),b=s(10),g=s(9),m=s(31),O=s.n(m),p=function(e){var t=e.matches;return Object(j.jsxs)("div",{className:"AsideMatches",children:[Object(j.jsxs)("header",{className:"AsideMatches AsideMatches-header",children:[Object(j.jsx)(g.a,{className:"Icon",icon:b.d}),Object(j.jsx)("span",{className:"Icon",children:"M\xf3j profil"}),Object(j.jsx)(g.a,{className:"Icon",icon:b.a})]}),Object(j.jsxs)("div",{className:"AsideMatches AsideMatches-matchesContainer",children:[Object(j.jsx)("h2",{children:"Polubione"}),t&&t.map((function(e){return Object(j.jsx)("img",{src:e.image[0],className:O()("Suggestions-liked-image",{"Suggestions-liked-image-match":e.likesMe})})}))]})]})},x=function(){var e=Object(c.useState)(0),t=Object(h.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)(!1),i=Object(h.a)(a,2),r=i[0],o=i[1],l=Object(c.useState)(0),u=Object(h.a)(l,2),m=u[0],O=u[1],x=function(){s<9?n(s+1):o(!0),O(0)},f=Object(c.useState)([]),v=Object(h.a)(f,2),N=v[0],k=v[1],S=N;Object(c.useEffect)((function(){d.a.get("http://localhost:8080/muzyka/lista",{headers:{"Access-Control-Allow-Origin":!0}}).then((function(e){console.log(e),k(e.data)}))}),[]);var y=S&&S[s];return Object(j.jsxs)("div",{className:"Suggestions",children:[Object(j.jsx)(p,{matches:[{id:1,name:"Marlena Wytrych",sex:"K",about:"Urodzi\u0142am si\u0119 po to, aby gra\u0107. M\xf3wisz wiesz \u017ce b\u0119dziesz cierpia\u0142a i przeklina\u0142a ca\u0142y \u015bwiat - urodzi\u0142am si\u0119 po to aby gra\u0107.",mp3:"src/FG654DE08GF48FG.mp3",inspirations:["Starchursky","Elvis","Sedaka","Speedy Gonzales","albo Diana"],image:["https://cdn.stocksnap.io/img-thumbs/280h/V2TT0P34KE.jpg","https://cdn.stocksnap.io/img-thumbs/280h/QON4ARVTSC.jpg","https://cdn.stocksnap.io/img-thumbs/280h/Q0LOIKU7GM.jpg"],instrument:"wokal"},{id:3,name:"Czadomen",sex:"M",about:"Time to say goodbye, paesi que non lo mai",mp3:"src/FG654DE08GF8686463.mp3",inspirations:["Pavarotti","Boys","Zygmunt Solorz-\u017bak","Ma\u0142gorzata Walewska"],image:["https://cdn.stocksnap.io/img-thumbs/280h/people-man_NSV3ZCAJXT.jpg","https://cdn.stocksnap.io/img-thumbs/280h/working-home_O8EAEFRYBP.jpg","https://cdn.stocksnap.io/img-thumbs/280h/photographer-picture_ZZGCZRV208.jpg"],instrument:"wokal"}]}),Object(j.jsx)("div",{className:"Suggestions-container",children:S&&S.length>0&&Object(j.jsxs)("div",{className:"Suggestions-container-2",children:[!r&&Object(j.jsxs)("h2",{className:"Suggestions-container-suggestionTitle",children:[y.name," (",y.instrument,")"]}),!r&&Object(j.jsx)("img",{className:"Current-suggestion",src:y.image[m],alt:"User photo",width:"375",height:"565"}),!r&&Object(j.jsxs)("div",{className:"Current-suggestions-radio-buttons",onChange:function(e){console.log(e.target.value),O("firstPhoto"==e.target.value?0:1)},children:[Object(j.jsx)("input",{type:"radio",id:"firstPhoto",name:"photoRadio",value:"firstPhoto",defaultChecked:!0}),Object(j.jsx)("input",{type:"radio",id:"secondPhoto",name:"photoRadio",value:"secondPhoto"})]}),!r&&Object(j.jsxs)("div",{className:"Current-suggestions-swypeIcons",children:[Object(j.jsx)(g.a,{className:"Icon fa-3x Current-suggestions-swypeIcons-no",icon:b.c,onClick:function(){x()}}),Object(j.jsx)(g.a,{className:"Icon fa-3x Current-suggestions-swypeIcons-yes",icon:b.b,onClick:function(){x()}})]}),r&&Object(j.jsx)("h2",{style:{color:"white"},children:"Nie ma nikogo wi\u0119cej :("}),!r&&Object(j.jsx)("div",{className:"Current-suggestion-about",children:y.about}),!r&&Object(j.jsxs)("div",{className:"Current-suggestion-inspirations",children:["Inspiracje: ",y.inspirations]})]})})]})},f=(s(66),function(){return Object(j.jsxs)("div",{className:"Register",children:[Object(j.jsx)("header",{className:"Register-header",children:"Zarejestruj"}),Object(j.jsx)("div",{children:"content here"})]})}),v=(s(67),function(){return Object(j.jsxs)("div",{className:"RegisterFailed",children:[Object(j.jsx)("header",{className:"RegisterFailed-header",children:"Rejestracja nieudana"}),Object(j.jsx)("div",{children:"content here"})]})}),N=(s(68),function(){return Object(j.jsxs)("div",{className:"Matches",children:[Object(j.jsx)("header",{className:"Matches-header",children:"Pary"}),Object(j.jsx)("div",{children:"content here"})]})}),k=(s(69),function(){return Object(j.jsxs)("div",{className:"Me",children:[Object(j.jsx)("header",{className:"Me-header",children:"O mnie"}),Object(j.jsx)("div",{children:"content here"})]})}),S=(s(70),function(){var e=Object(c.useState)(""),t=Object(h.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)(""),i=Object(h.a)(a,2),r=i[0],o=i[1],l=Object(c.useState)(""),u=Object(h.a)(l,2),d=u[0],b=u[1];return Object(j.jsxs)("div",{className:"Login",children:[Object(j.jsx)("header",{className:"Login-header",children:"Zaloguj"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),alert("Submitting with Name ".concat(s))},className:"Login-form",children:[Object(j.jsxs)("label",{children:["Nazwa:",Object(j.jsx)("input",{type:"text",value:s,onChange:function(e){return n(e.target.value)}})]}),Object(j.jsxs)("label",{children:["E-mail:",Object(j.jsx)("input",{type:"email",value:r,onChange:function(e){return o(e.target.value)}})]}),Object(j.jsxs)("label",{children:["Has\u0142o:",Object(j.jsx)("input",{type:"password",value:d,onChange:function(e){return b(e.target.value)}})]}),Object(j.jsx)("input",{type:"submit",value:"Zaloguj"})]})]})});var y=function(){return Object(j.jsx)(r.a,{children:Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/suggestions",children:Object(j.jsx)(x,{})}),Object(j.jsx)(o.a,{path:"/register",children:Object(j.jsx)(f,{})}),Object(j.jsx)(o.a,{path:"/login",children:Object(j.jsx)(S,{})}),Object(j.jsx)(o.a,{path:"/register-succeed",children:Object(j.jsx)(l,{})}),Object(j.jsx)(o.a,{path:"/register-failed",children:Object(j.jsx)(v,{})}),Object(j.jsx)(o.a,{path:"/matches",children:Object(j.jsx)(N,{})}),Object(j.jsx)(o.a,{path:"/me",children:Object(j.jsx)(k,{})}),Object(j.jsx)(o.a,{path:"/",children:Object(j.jsx)(x,{})})]})})})},C=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,74)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),c(e),n(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),C()}},[[73,1,2]]]);
//# sourceMappingURL=main.db8403bb.chunk.js.map