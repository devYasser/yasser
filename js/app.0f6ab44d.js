(function(t){function e(e){for(var o,a,i=e[0],c=e[1],l=e[2],u=0,p=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&p.push(n[a][0]),n[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],o=!0,a=1;a<r.length;a++){var c=r[a];0!==n[c]&&(o=!1)}o&&(s.splice(e--,1),t=i(i.s=r[0]))}return t}var o={},n={app:0},s=[];function a(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"619c4560"}[t]+".js"}function i(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r=n[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,o){r=n[t]=[e,o]}));e.push(r[2]=o);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=a(t);var l=new Error;s=function(e){c.onerror=c.onload=null,clearTimeout(u);var r=n[t];if(0!==r){if(r){var o=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",l.name="ChunkLoadError",l.type=o,l.request=s,r[1](l)}n[t]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=o,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(r,o,function(e){return t[e]}.bind(null,o));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"12ae":function(t,e,r){t.exports=r.p+"img/buy-white.40bc2813.svg"},4742:function(t,e,r){t.exports=r.p+"img/aerolab-logo.71af6f4b.svg"},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("header",[o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"row jc-between"},[o("img",{attrs:{src:r("4742"),alt:"Aerolab"}}),o("div",{staticClass:"user"},[o("div",{staticClass:"user-name color-dark-gray"},[t._v(t._s(this.user))]),o("div",{staticClass:"user-points color-dark-gray"},[o("span",{class:{"ani-number":t.animated},on:{animationend:function(e){t.animated=!1}}},[t._v(" "+t._s(this.userPoints)+" ")]),o("img",{staticClass:"icon icon-coin ml-1",attrs:{src:r("b0cb"),alt:"coin"}})]),o("button",{staticClass:"pill reload",on:{click:function(e){return t.reloadPoints()}}},[t._v(" Reload ")])])])])]),t._m(0),o("main",[o("section",{staticClass:"filters"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row border-bottom"},[o("div",{staticClass:"total-prod color-dark-gray"},[t._v(" "+t._s(t.pageOffest)+" of "+t._s(t.totalResults)+" products ")]),o("div",{staticClass:"sort-by"},[o("span",[t._v("Sort by:")]),o("button",{staticClass:"pill pill-filter",class:[1==t.active?"active":""],on:{click:function(e){t.orderBy="",t.active=1,t.getProducts()}}},[t._v(" Most recent ")]),o("button",{staticClass:"pill pill-filter",class:[2==t.active?"active":""],on:{click:function(e){t.orderBy="lowPrices",t.active=2}}},[t._v(" Lowest price ")]),o("button",{staticClass:"pill pill-filter",class:[3==t.active?"active":""],on:{click:function(e){t.orderBy="hightPrices",t.active=3}}},[t._v(" Highest price ")])])])]),o("section",{staticClass:"products"},[o("div",{staticClass:"container"},[o("div",{staticClass:"prod-grid"},t._l(t.productsFiltered,(function(e){return o("div",{key:e.id,staticClass:"prod",attrs:{id:e._id}},[o("div",{staticClass:"prod-status"},[t.userPoints>e.cost?o("div",{staticClass:"icon-redeem"},[o("img",{attrs:{src:r("b63f"),alt:"redeem"}}),o("img",{attrs:{src:r("12ae"),alt:"redeem"}})]):o("div",[o("div",{staticClass:"pill pill-prod"},[t._v(" You need "+t._s(e.cost-t.userPoints)+" "),o("img",{staticClass:"icon icon-coin ml-1",attrs:{src:r("b0cb"),alt:"coin"}})])])]),o("img",{staticClass:"img-fluid prod-img",attrs:{src:e.img.url,alt:e.name}}),o("div",{staticClass:"prod-info"},[o("div",{staticClass:"d-flex jc-between"},[o("div",{staticClass:"prod-cat"},[t._v(t._s(e.category))]),o("div",{staticClass:"color-dark-gray"},[t._v(t._s(e.cost))])]),o("div",{staticClass:"prod-title color-dark-gray"},[t._v(t._s(e.name))])]),o("div",{staticClass:"prod-price"},[o("div",{staticClass:"price"},[t._v(" "+t._s(e.cost)+" "),o("img",{staticClass:"icon icon-coin ml-1",attrs:{src:r("b0cb"),alt:"coin"}})]),o("a",{directives:[{name:"show",rawName:"v-show",value:t.userPoints>e.cost,expression:"userPoints > item.cost"}],staticClass:"btn-redeem",on:{click:function(r){return t.redeemProd(e._id)}}},[t._v(" Redeem now ")])])])})),0),o("div",{staticClass:"container"},[o("div",{staticClass:"row jc-center"},[t.currentPage*t.maxPerPage<t.products.length?o("button",{staticClass:"btn-primary mb-4",on:{click:t.loadMore}},[t._v(" Load more ")]):t._e()])])])])])])])},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"hero"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("h1",[t._v("Electronics")])])])])}],a=(r("b0c0"),r("d3b7"),r("b64b"),r("fb6a"),r("bc3a")),i=r.n(a),c={name:"products",data:function(){return{user:"",userPoints:"",products:[],orderBy:"",active:"1",currentPage:1,maxPerPage:16,showReadMore:!0,animated:!1,sure:!1}},created:function(){this.token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxMjU0OTdlNzE4NzAwMjBlMzhmOTUiLCJpYXQiOjE2MTU5MzA2OTd9.37CNui965OoX0h5MeRCg52SXA7-yEbJkfmRxtLjmSQE",this.getUser(),this.getProducts()},methods:{getUser:function(){var t=this;i.a.get("https://coding-challenge-api.aerolab.co/user/me",{headers:{Authorization:"Bearer ".concat(this.token)}}).then((function(e){t.user=e.data.name,t.userPoints=e.data.points,console.log(e.data)})).catch((function(t){return console.log(t)}))},getProducts:function(){var t=this;i.a.get("https://coding-challenge-api.aerolab.co/products",{headers:{Authorization:"Bearer ".concat(this.token)}}).then((function(e){t.products=e.data})).catch((function(t){return console.log(t)}))},redeemProd:function(t){var e=this;i.a.post("https://coding-challenge-api.aerolab.co/redeem",{productId:t},{headers:{Authorization:"Bearer ".concat(this.token)}}).then((function(t){console.log(t)})).finally((function(){e.getUser()}))},reloadPoints:function(){var t=this;i.a.post("https://coding-challenge-api.aerolab.co/user/points",{amount:1e3},{headers:{Authorization:"Bearer ".concat(this.token)}}).then((function(t){console.log(t)})).finally((function(){t.getUser()}))},loadMore:function(){this.currentPage+=1}},computed:{totalResults:function(){return Object.keys(this.products).length},pageCount:function(){return Math.ceil(this.totalResults/this.maxPerPage)},pageOffest:function(){return this.maxPerPage*this.currentPage},paginatedProd:function(){return this.products.slice(0,this.currentPage*this.maxPerPage)},productsFiltered:function(){var t=this.paginatedProd;return"lowPrices"===this.orderBy?t.sort((function(t,e){return parseFloat(t.cost)-parseFloat(e.cost)})):"hightPrices"===this.orderBy&&t.sort((function(t,e){return parseFloat(e.cost)-parseFloat(t.cost)})),t}},watch:{userPoints:function(){this.animated=!0}}},l=c,u=(r("5c0b"),r("2877")),d=Object(u["a"])(l,n,s,!1,null,null,null),p=d.exports,f=(r("3ca3"),r("ddb0"),r("8c4f")),h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"})},v=[],g={name:"Home"},m=g,b=Object(u["a"])(m,h,v,!1,null,null,null),C=b.exports;o["a"].use(f["a"]);var y=[{path:"/",name:"Home",component:C},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],P=new f["a"]({routes:y}),_=P;o["a"].config.productionTip=!1,new o["a"]({router:_,render:function(t){return t(p)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";r("9c0c")},"9c0c":function(t,e,r){},b0cb:function(t,e,r){t.exports=r.p+"img/coin.4669120c.svg"},b63f:function(t,e,r){t.exports=r.p+"img/buy-blue.2f11a957.svg"}});
//# sourceMappingURL=app.0f6ab44d.js.map