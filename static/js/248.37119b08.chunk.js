"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[248],{1687:function(e,t,n){n.d(t,{Bt:function(){return d},Fj:function(){return i},Mc:function(){return l},bI:function(){return f},y:function(){return p}});var r=n(5861),a=n(7757),c=n.n(a),u=n(1243),o="https://api.themoviedb.org/3/",s="ca8f7db83e552c6e2e5b39184e2981e9",i=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(o,"trending/movie/day?api_key=").concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,u.Z.get("".concat(o,"search/movie"),{params:{api_key:s,language:"en-US",query:t,page:n,include_adult:"false"}});case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(o,"movie/").concat(t,"?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(o,"movie/").concat(t,"/credits?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},6634:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7689),a=n(1087),c="ListMovies_list__-DUZK",u=n(184),o=function(e){var t=e.movies,n=(0,r.TH)();return(0,u.jsx)("ol",{className:c,children:t.map((function(e){var t=e.id,r=e.title;return(0,u.jsx)(a.rU,{state:{from:n},to:"/movies/".concat(t),children:(0,u.jsx)("li",{children:r})},t)}))})}},9323:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(4691),a="Loader_loader__Iv4Mh",c=n(184),u=function(){return console.log("loader"),(0,c.jsx)("div",{className:a,children:(0,c.jsx)(r.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})})}},2813:function(e,t,n){n.d(t,{Z:function(){return r.Z}});var r=n(9323)},3679:function(e,t,n){n.d(t,{Z:function(){return c}});var r="Message_message__cjLNc",a=n(184),c=function(e){var t=e.children;return(0,a.jsx)("div",{children:(0,a.jsx)("p",{className:r,children:t})})}},9248:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(5861),a=n(9439),c=n(7757),u=n.n(c),o=n(2791),s=n(1087),i=n(1687),f=n(6634),l=n(3679),p=n(2813),d="MoviesPages_searchForm__7dmBU",v="MoviesPages_btn__15d72",h="MoviesPages_input__ZbJoz",m=n(184),_=function(){var e,t=(0,s.lr)(),n=(0,a.Z)(t,2),c=n[0],_=n[1],g=null!==(e=c.get("query"))&&void 0!==e?e:"",x=(0,o.useState)([]),b=(0,a.Z)(x,2),Z=b[0],y=b[1],w=(0,o.useState)(g),j=(0,a.Z)(w,2),k=j[0],N=j[1],S=(0,o.useState)(!1),M=(0,a.Z)(S,2),C=M[0],q=M[1],F=(0,o.useState)(!1),L=(0,a.Z)(F,2),U=L[0],B=L[1];(0,o.useEffect)((function(){""===k&&""!==g&&(_({}),y([]))}),[k,_,g]),(0,o.useEffect)((function(){if(""!==g){q(!0);try{var e=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.bI)(g);case 2:t=e.sent,y(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}catch(t){B(!0)}finally{q(!1)}}}),[g]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),_({query:k.trim()})},className:d,children:[(0,m.jsx)("input",{className:h,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:k,onChange:function(e){return N(e.target.value)}}),(0,m.jsx)("button",{disabled:C,type:"submit",className:v,children:"Search"})]}),C&&(0,m.jsx)(p.Z,{}),U&&(0,m.jsx)(l.Z,{children:"An error occurred, please reload the page or try again later."}),(null===Z||void 0===Z?void 0:Z.length)>0&&(0,m.jsx)(f.Z,{movies:Z}),0===(null===Z||void 0===Z?void 0:Z.length)&&""!==g&&(0,m.jsx)("h3",{children:"Nothing was found for your request"})]})}}}]);
//# sourceMappingURL=248.37119b08.chunk.js.map