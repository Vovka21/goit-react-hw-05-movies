"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[900],{1900:function(n,t,e){e.r(t),e.d(t,{default:function(){return p}});var r=e(885),c=e(2791),a=e(6871),i=e(3961),o="Cast_list__X9OlD",u="Cast_listItem__RUSF9",s="Cast_img__SAfvK",l="Cast_names__yl9ex",f=e(184),p=function(){var n=(0,c.useState)([]),t=(0,r.Z)(n,2),e=t[0],p=t[1],d=(0,a.UO)().movieId;return(0,c.useEffect)((function(){i.y(d).then((function(n){var t=n.cast;return p(t)}))}),[d]),(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("ul",{className:o,children:e&&e.length>0&&e.map((function(n){return(0,f.jsxs)("li",{className:u,children:[n.profile_path?(0,f.jsx)("img",{className:s,src:"https://image.tmdb.org/t/p/w300"+(null===n||void 0===n?void 0:n.profile_path),alt:null===n||void 0===n?void 0:n.original_name}):null,(0,f.jsxs)("div",{className:l,children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{children:"Name:"})," ",null===n||void 0===n?void 0:n.original_name]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{children:"Character:"})," ",null===n||void 0===n?void 0:n.character]})]})]},null===n||void 0===n?void 0:n.id)}))})})}},3961:function(n,t,e){e.d(t,{vw:function(){return p},Mc:function(){return d},FE:function(){return h},y:function(){return _},Bt:function(){return m}});var r=e(5861),c=e(7757),a=e.n(c),i=e(4569),o=e.n(i),u="ec54c0409f7f71b36a33826187600e03",s="https://api.themoviedb.org/3";function l(){return f.apply(this,arguments)}function f(){return f=(0,r.Z)(a().mark((function n(){var t,e,r,c=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",e=c.length>1&&void 0!==c[1]?c[1]:{},n.next=4,fetch(t,e);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),f.apply(this,arguments)}function p(){return l("".concat(s,"/trending/all/day?api_key=").concat(u))}function d(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o().get("".concat(s,"/movie/").concat(t,"?api_key=").concat(u,"&language=en-US"));case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.log("===ERROR===",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function h(n,t){return l("".concat(s,"/search/movie?api_key=").concat(u,"&query=").concat(n,"&page=").concat(t,"&language=en-US"))}function _(n){return l("".concat(s,"/movie/").concat(n,"/credits?api_key=").concat(u))}function m(n){return l("".concat(s,"/movie/").concat(n,"/reviews?api_key=").concat(u,"&page=1"))}}}]);
//# sourceMappingURL=900.45ece3f2.chunk.js.map