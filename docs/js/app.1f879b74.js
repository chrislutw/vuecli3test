(function(e){function t(t){for(var o,i,c=t[0],f=t[1],l=t[2],u=0,d=[];u<c.length;u++)i=c[u],r[i]&&d.push(r[i][0]),r[i]=0;for(o in f)Object.prototype.hasOwnProperty.call(f,o)&&(e[o]=f[o]);s&&s(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var f=n[i];0!==r[f]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"c948d90b"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=o);var a,f=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e),a=function(t){l.onerror=l.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+o+": "+a+")");i.type=o,i.request=a,n[1](i)}r[e]=void 0}};var u=setTimeout(function(){a({type:"timeout",target:l})},12e4);l.onerror=l.onload=a,f.appendChild(l)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vuecli3test/",c.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],l=f.push.bind(f);f.push=t,f=f.slice();for(var u=0;u<f.length;u++)t(f[u]);var s=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"05e3":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("744f"),n("6c7b"),n("7514"),n("20d6"),n("1c4c"),n("6762"),n("cadf"),n("e804"),n("55dd"),n("d04f"),n("c8ce"),n("217b"),n("7f7f"),n("f400"),n("7f25"),n("536b"),n("d9ab"),n("f9ab"),n("32d7"),n("25c9"),n("9f3c"),n("042e"),n("c7c6"),n("f4ff"),n("049f"),n("7872"),n("a69f"),n("0b21"),n("6c1a"),n("c7c62"),n("84b4"),n("c5f6"),n("2e37"),n("fca0"),n("7cdf"),n("ee1d"),n("b1b1"),n("87f3"),n("9278"),n("5df2"),n("04ff"),n("f751"),n("4504"),n("fee7"),n("ffc1"),n("0d6d"),n("9986"),n("8e6e"),n("25db"),n("e4f7"),n("b9a1"),n("64d5"),n("9aea"),n("db97"),n("66c8"),n("57f0"),n("165b"),n("456d"),n("cf6a"),n("fd24"),n("8615"),n("551c"),n("097d"),n("df1b"),n("2397"),n("88ca"),n("ba16"),n("d185"),n("ebde"),n("2d34"),n("f6b3"),n("2251"),n("c698"),n("a19f"),n("9253"),n("9275"),n("3b2b"),n("3846"),n("4917"),n("a481"),n("28a5"),n("386d"),n("6b54"),n("4f7f"),n("8a81"),n("ac4d"),n("8449"),n("9c86"),n("fa83"),n("48c0"),n("a032"),n("aef6"),n("d263"),n("6c37"),n("9ec8"),n("5695"),n("2fdb"),n("d0b0"),n("b54a"),n("f576"),n("ed50"),n("788d"),n("14b9"),n("f386"),n("f559"),n("1448"),n("673e"),n("242a"),n("c66f"),n("b05c"),n("34ef"),n("6aa2"),n("15ac"),n("af56"),n("b6e4"),n("9c29"),n("63d9"),n("4dda"),n("10ad"),n("c02b"),n("4795"),n("130f"),n("ac6a"),n("96cf");var o=n("2b0e"),r=n("ce5b"),a=n.n(r),i=(n("bf40"),n("aa47")),c=n.n(i);o["default"].use(a.a,{iconfont:"md",lang:{locales:{zhHant:c.a},current:"zh-Hant"}});var f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-navigation-drawer",{attrs:{persistent:"","mini-variant":e.miniVariant,clipped:e.clipped,"enable-resize-watcher":"",fixed:"",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",e._l(e.items,function(t,o){return n("v-list-tile",{key:o,attrs:{value:"true"}},[n("v-list-tile-action",[n("v-icon",{domProps:{innerHTML:e._s(t.icon)}})],1),n("v-list-tile-content",[n("router-link",{attrs:{to:t.link}},[n("v-list-tile-title",{domProps:{textContent:e._s(t.title)}})],1)],1)],1)}))],1),n("v-toolbar",{attrs:{app:"","clipped-left":e.clipped}},[n("v-toolbar-side-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),n("v-btn",{attrs:{icon:""},on:{click:function(t){t.stopPropagation(),e.miniVariant=!e.miniVariant}}},[n("v-icon",{domProps:{innerHTML:e._s(e.miniVariant?"chevron_right":"chevron_left")}})],1),n("v-btn",{attrs:{icon:""},on:{click:function(t){t.stopPropagation(),e.clipped=!e.clipped}}},[n("v-icon",[e._v("web")])],1),n("v-btn",{attrs:{icon:""},on:{click:function(t){t.stopPropagation(),e.fixed=!e.fixed}}},[n("v-icon",[e._v("web")])],1),n("v-toolbar-title",{domProps:{textContent:e._s(e.title)}}),n("v-spacer")],1),n("v-content",[n("router-view")],1),n("v-footer",{attrs:{fixed:e.fixed,app:""}},[n("span",[e._v("© 2017")])])],1)},l=[],u={name:"App",data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"bubble_chart",title:"Home",link:"/"},{icon:"bubble_chart",title:"About",link:"/about"}],miniVariant:!1,title:"Vuetify.js"}}},s=u,d=n("2877"),p=Object(d["a"])(s,f,l,!1,null,null,null);p.options.__file="App.vue";var b=p.exports,v=n("8c4f"),m=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",{attrs:{fluid:""}},[o("v-slide-y-transition",{attrs:{mode:"out-in"}},[o("v-layout",{attrs:{column:"","align-center":""}},[o("img",{staticClass:"mb-5",attrs:{src:n("cf05"),alt:"Vuetify.js"}}),o("blockquote",[e._v("\n        “First, solve the problem. Then, write the code.”\n        "),o("footer",[o("small",[o("em",[e._v("—John Johnson")])])])])])],1)],1)},h=[],g=(n("bf80"),{}),w=Object(d["a"])(g,m,h,!1,null,"2dda24ab",null);w.options.__file="Home.vue";var y=w.exports;o["default"].use(v["a"]);var _=new v["a"]({mode:"history",base:"/vuecli3test/",routes:[{path:"/",name:"home",component:y},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),k=n("2f62");o["default"].use(k["a"]);var x=new k["a"].Store({state:{},mutations:{},actions:{}}),j=n("9483");Object(j["a"])("".concat("/vuecli3test/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["default"].config.productionTip=!1,new o["default"]({router:_,store:x,render:function(e){return e(b)}}).$mount("#app")},bf80:function(e,t,n){"use strict";var o=n("05e3"),r=n.n(o);r.a},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.1f879b74.js.map