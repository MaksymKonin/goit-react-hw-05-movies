"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[995],{1687:function(e,n,t){t.d(n,{Bt:function(){return p},Fj:function(){return u},Mc:function(){return d},bI:function(){return l},y:function(){return v}});var r=t(5861),a=t(7757),s=t.n(a),i=t(1243),c="https://api.themoviedb.org/3/",o="ca8f7db83e552c6e2e5b39184e2981e9",u=function(){var e=(0,r.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(c,"trending/movie/day?api_key=").concat(o));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(n){var t,r,a=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,i.Z.get("".concat(c,"search/movie"),{params:{api_key:o,language:"en-US",query:n,page:t,include_adult:"false"}});case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(c,"movie/").concat(n,"?api_key=").concat(o));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(c,"movie/").concat(n,"/credits?api_key=").concat(o));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(c,"movie/").concat(n,"/reviews?api_key=").concat(o));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},9323:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(4691),a="Loader_loader__Iv4Mh",s=t(184),i=function(){return(0,s.jsx)("div",{className:a,children:(0,s.jsx)(r.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})})}},2813:function(e,n,t){t.d(n,{Z:function(){return r.Z}});var r=t(9323)},3679:function(e,n,t){t.d(n,{Z:function(){return s}});var r="Message_message__cjLNc",a=t(184),s=function(e){var n=e.children;return(0,a.jsx)("div",{children:(0,a.jsx)("p",{className:r,children:n})})}},5995:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var r=t(5861),a=t(9439),s=t(7757),i=t.n(s),c=t(2791),o=t(7689),u=t(1087),l=t(1687),d=t(9135),v="BackLink_backLink__oD9Fh",p=t(184),f=function(e){var n=e.to,t=e.children;return(0,p.jsxs)(u.rU,{className:v,to:n,children:[(0,p.jsx)(d.x_l,{}),t]})},h=t(3679),_=t(2813),m="MovieDetailsPages_wrapper__RF8vo",x="MovieDetailsPages_thumb-img__o1VPk",g="MovieDetailsPages_img__JLul5",j="MovieDetailsPages_summary__4Gk5v",w="MovieDetailsPages_navigation__sRdoC",k="MovieDetailsPages_link__IRtPv",b=function(){var e,n=(0,c.useState)([]),t=(0,a.Z)(n,2),s=t[0],d=t[1],v=(0,o.UO)().movieId,b=(0,c.useState)(!1),Z=(0,a.Z)(b,2),y=Z[0],N=Z[1],M=(0,c.useState)(!1),P=(0,a.Z)(M,2),L=P[0],D=P[1],S=(0,c.useState)({pathname:"/movies"}),C=(0,a.Z)(S,2),B=C[0],F=C[1],I=(0,o.TH)();(0,c.useEffect)((function(){var e,n;null!==(e=I.state)&&void 0!==e&&e.from&&F(null===(n=I.state)||void 0===n?void 0:n.from)}),[null===(e=I.state)||void 0===e?void 0:e.from]),(0,c.useEffect)((function(){if(""!==v){N(!0);try{var e=function(){var e=(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.Mc)("".concat(v));case 2:n=e.sent,d(n),D(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}catch(n){D(!0)}finally{N(!1)}}}),[v]);var O=s.poster_path,R=s.release_date,E=s.title,U=s.vote_average,G=s.popularity,V=s.overview,q=s.genres,A="has no data",H="https://image.tmdb.org/t/p/original".concat(O),J=null!==R&&void 0!==R&&R.slice(0,4)?null===R||void 0===R?void 0:R.slice(0,4):A,T=[];return null===q||void 0===q||q.forEach((function(e){T.push(e.name)})),(0,p.jsxs)(p.Fragment,{children:[y&&(0,p.jsx)(_.Z,{}),L&&(0,p.jsx)(h.Z,{children:"An error occurred, please reload the page or try again later."}),(0,p.jsx)(f,{to:B,children:"Back to list movies"}),(0,p.jsxs)("div",{className:m,children:[(0,p.jsx)("div",{className:x,children:(0,p.jsx)("img",{className:g,src:H,alt:"poster fath",width:"300"})}),(0,p.jsxs)("div",{className:j,children:[(0,p.jsxs)("h2",{children:[E||A," (",J,")"]}),(0,p.jsxs)("p",{children:["Popularity - ",G||0]}),(0,p.jsxs)("p",{children:["Vote average - ",U||0]}),(0,p.jsx)("h3",{children:"Overview"}),(0,p.jsx)("p",{children:V||A}),(0,p.jsx)("h3",{children:"Genres"}),(0,p.jsx)("p",{children:null!==T&&void 0!==T&&T.join(", ")?null===T||void 0===T?void 0:T.join(", "):A})]})]}),(0,p.jsxs)("ul",{className:w,children:[(0,p.jsx)("li",{children:(0,p.jsx)(u.OL,{to:"cast",className:k,children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(u.OL,{to:"reviews",className:k,children:"Reviews"})})]}),(0,p.jsx)(c.Suspense,{fallback:(0,p.jsx)(_.Z,{}),children:(0,p.jsx)(o.j3,{})})]})}}}]);
//# sourceMappingURL=995.9d66c53e.chunk.js.map