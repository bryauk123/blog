(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{38:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(15),r=n.n(c),i=n(32),a=n.n(i),s=(n(38),n(13)),u=n(10),o=n(9);function b(e){var t=e.articles,n=e.setArticle;return Object(o.jsx)("nav",{children:t?t.map((function(e){return Object(o.jsx)("p",{onClick:function(){return n(e)},children:e.title},e.id)})):"No articles"})}var j=n(18),l=n(33),d=n(23),O=Object(l.a)({apiKey:"AIzaSyAU_HaPJZW3NCXxvobWLpJGXyS0tAgDgu8",authDomain:"personal-blog-e6611.firebaseapp.com",projectId:"personal-blog-e6611",storageBucket:"personal-blog-e6611.appspot.com",messagingSenderId:"44728060828",appId:"1:44728060828:web:e28a92b160e60ebe475659"}),p=Object(d.b)(O),h=Object(j.e)(O);function f(e){var t=e.article;return Object(o.jsx)("article",{children:t?Object(o.jsxs)("section",{id:"textOutput",children:[Object(o.jsx)("h2",{children:t.title}),Object(o.jsx)("p",{className:"date",children:"Posted: ".concat(new Date)}),Object(o.jsx)("p",{className:"body",children:t.body}),Object(o.jsx)("button",{onClick:"deleteArticle()",children:"Remove Anime from list"})]}):Object(o.jsx)("p",{id:"welcome",children:"Welcome to My Anime Blog! Where I write personal reviews of the animes I have watched!"})})}function x(e){var t=e.addArticle,n=Object(c.useState)(""),r=Object(u.a)(n,2),i=r[0],a=r[1],s=Object(c.useState)(""),b=Object(u.a)(s,2),j=b[0],l=b[1],d=Object(c.useState)(null),O=Object(u.a)(d,2),p=O[0],h=O[1];return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{onSubmit:function(e){h(null),e.preventDefault(),i.trim()&&j.trim()?t({title:i,body:j}):h("Both the title and body must be supplied")},children:[p&&Object(o.jsx)("p",{className:"error",children:p}),Object(o.jsx)("p",{id:"entry1",children:"Anime Name"}),Object(o.jsx)("input",{value:i,onChange:function(e){return a(e.target.value)}}),Object(o.jsx)("p",{id:"entry2",children:"Personal Review"}),";",Object(o.jsx)("textarea",{rows:"8",value:j,onChange:function(e){return l(e.target.value)}}),Object(o.jsx)("button",{type:"submit",children:"Create"})]})})}function m(){return Object(o.jsx)("button",{onClick:function(){return Object(d.c)(p,new d.a)},children:"Sign In"})}function v(){return Object(o.jsxs)("div",{children:["Hello, ",p.currentUser.displayName," \xa0",Object(o.jsx)("button",{onClick:function(){return Object(d.d)(p)},children:"Sign Out"})]})}var y=n(0),g=n.n(y),w=n(29),A=n(2);function S(){return(S=Object(A.a)(g.a.mark((function e(t){var n,c,r,i;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.title,c=t.body,r={title:n,body:c,date:j.a.now()},e.next=4,Object(j.b)(Object(j.c)(h,"articles"),r);case 4:return i=e.sent,e.abrupt("return",Object(w.a)({id:i.id},r));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(A.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.d)(Object(j.h)(Object(j.c)(h,"articles"),Object(j.g)("date","desc"),Object(j.f)(20)));case 2:return t=e.sent,e.abrupt("return",t.docs.map((function(e){return Object(w.a)({id:e.id},e.data())})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(42);function C(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(null),a=Object(u.a)(i,2),j=a[0],l=a[1],d=Object(c.useState)(!1),O=Object(u.a)(d,2),h=O[0],y=O[1],g=function(){var e=Object(c.useState)(null),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){return p.onAuthStateChanged((function(e){r(e||null)}))}),[]),n}();return Object(c.useEffect)((function(){g&&function(){return k.apply(this,arguments)}().then(r)}),[g]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("header",{children:[Object(o.jsx)("div",{id:"title",children:"My Anime Blog"}),g&&Object(o.jsx)("button",{onClick:function(){return y(!0)},children:"Add Anime"}),g?Object(o.jsx)(v,{}):Object(o.jsx)(m,{})]}),g?Object(o.jsx)(b,{articles:n,setArticle:l}):"",g?h?Object(o.jsx)(x,{addArticle:function(e){(function(e){return S.apply(this,arguments)})({title:e.title,body:e.body}).then((function(e){l(e),r([e].concat(Object(s.a)(n))),y(!1)}))}}):Object(o.jsx)(f,{article:j}):""]})}a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(C,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.d66caedb.chunk.js.map