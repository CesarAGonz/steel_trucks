(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Components"],{"057f":function(t,e,n){var o=n("fc6a"),r=n("241c").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return r(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?s(t):r(o(t))}},2311:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid px-3 px-md-5"},[n("div",{staticClass:"row"},t._l(t.allComponents,(function(t,e){return n("ComponentGeneral",{key:e,attrs:{item:t}})})),1)])},r=[],i=n("5530"),a=n("a5bc"),s=n("2f62"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-6 px-md-4"},[n("section",{staticClass:"component py-4 px-3 mt-5"},[n("div",{staticClass:"header-component"},[n("h1",{staticClass:"text-center third-header mb-4"},[t._v(" "+t._s(t.item.header.title)+" ")])]),n("div",{staticClass:"component-images"},[n("div",{staticClass:"row"},t._l(t.item.images,(function(t){return n("ComponentImage",{key:t.alt,attrs:{image:t}})})),1)])])])},f=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-4 mb-4"},[n("div",{staticClass:"component-img"},[n("img",{staticClass:"mt-3 w-100 mx-auto",staticStyle:{"object-fit":"cover"},attrs:{src:t.image.url,alt:t.image.alt}})])])},u=[],b={name:"ComponentImage",props:["image"]},l=b,m=n("2877"),p=Object(m["a"])(l,d,u,!1,null,null,null),g=p.exports,v={name:"ComponentGeneral",components:{ComponentImage:g},props:["item"]},h=v,y=(n("ce26"),Object(m["a"])(h,c,f,!1,null,null,null)),w=y.exports,O={name:"ComponentMain",components:{ComponentGeneral:w,Ribbon:a["a"]},computed:Object(i["a"])({},Object(s["b"])("components",["allComponents"]))},C=O,x=Object(m["a"])(C,o,r,!1,null,null,null);e["default"]=x.exports},"4de4":function(t,e,n){"use strict";var o=n("23e7"),r=n("b727").filter,i=n("1dde"),a=n("ae40"),s=i("filter"),c=a("filter");o({target:"Array",proto:!0,forced:!s||!c},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"746f":function(t,e,n){var o=n("428f"),r=n("5135"),i=n("e538"),a=n("9bf2").f;t.exports=function(t){var e=o.Symbol||(o.Symbol={});r(e,t)||a(e,t,{value:i.f(t)})}},a4d3:function(t,e,n){"use strict";var o=n("23e7"),r=n("da84"),i=n("d066"),a=n("c430"),s=n("83ab"),c=n("4930"),f=n("fdbf"),d=n("d039"),u=n("5135"),b=n("e8b5"),l=n("861d"),m=n("825a"),p=n("7b0b"),g=n("fc6a"),v=n("c04e"),h=n("5c6c"),y=n("7c73"),w=n("df75"),O=n("241c"),C=n("057f"),x=n("7418"),S=n("06cf"),j=n("9bf2"),_=n("d1e7"),k=n("9112"),P=n("6eeb"),E=n("5692"),R=n("f772"),I=n("d012"),N=n("90e3"),z=n("b622"),$=n("e538"),T=n("746f"),D=n("d44e"),L=n("69f3"),U=n("b727").forEach,B=R("hidden"),F="Symbol",J="prototype",A=z("toPrimitive"),V=L.set,G=L.getterFor(F),H=Object[J],M=r.Symbol,X=i("JSON","stringify"),Q=S.f,W=j.f,q=C.f,K=_.f,Y=E("symbols"),Z=E("op-symbols"),tt=E("string-to-symbol-registry"),et=E("symbol-to-string-registry"),nt=E("wks"),ot=r.QObject,rt=!ot||!ot[J]||!ot[J].findChild,it=s&&d((function(){return 7!=y(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(t,e,n){var o=Q(H,e);o&&delete H[e],W(t,e,n),o&&t!==H&&W(H,e,o)}:W,at=function(t,e){var n=Y[t]=y(M[J]);return V(n,{type:F,tag:t,description:e}),s||(n.description=e),n},st=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof M},ct=function(t,e,n){t===H&&ct(Z,e,n),m(t);var o=v(e,!0);return m(n),u(Y,o)?(n.enumerable?(u(t,B)&&t[B][o]&&(t[B][o]=!1),n=y(n,{enumerable:h(0,!1)})):(u(t,B)||W(t,B,h(1,{})),t[B][o]=!0),it(t,o,n)):W(t,o,n)},ft=function(t,e){m(t);var n=g(e),o=w(n).concat(mt(n));return U(o,(function(e){s&&!ut.call(n,e)||ct(t,e,n[e])})),t},dt=function(t,e){return void 0===e?y(t):ft(y(t),e)},ut=function(t){var e=v(t,!0),n=K.call(this,e);return!(this===H&&u(Y,e)&&!u(Z,e))&&(!(n||!u(this,e)||!u(Y,e)||u(this,B)&&this[B][e])||n)},bt=function(t,e){var n=g(t),o=v(e,!0);if(n!==H||!u(Y,o)||u(Z,o)){var r=Q(n,o);return!r||!u(Y,o)||u(n,B)&&n[B][o]||(r.enumerable=!0),r}},lt=function(t){var e=q(g(t)),n=[];return U(e,(function(t){u(Y,t)||u(I,t)||n.push(t)})),n},mt=function(t){var e=t===H,n=q(e?Z:g(t)),o=[];return U(n,(function(t){!u(Y,t)||e&&!u(H,t)||o.push(Y[t])})),o};if(c||(M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=N(t),n=function(t){this===H&&n.call(Z,t),u(this,B)&&u(this[B],e)&&(this[B][e]=!1),it(this,e,h(1,t))};return s&&rt&&it(H,e,{configurable:!0,set:n}),at(e,t)},P(M[J],"toString",(function(){return G(this).tag})),P(M,"withoutSetter",(function(t){return at(N(t),t)})),_.f=ut,j.f=ct,S.f=bt,O.f=C.f=lt,x.f=mt,$.f=function(t){return at(z(t),t)},s&&(W(M[J],"description",{configurable:!0,get:function(){return G(this).description}}),a||P(H,"propertyIsEnumerable",ut,{unsafe:!0}))),o({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:M}),U(w(nt),(function(t){T(t)})),o({target:F,stat:!0,forced:!c},{for:function(t){var e=String(t);if(u(tt,e))return tt[e];var n=M(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(u(et,t))return et[t]},useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),o({target:"Object",stat:!0,forced:!c,sham:!s},{create:dt,defineProperty:ct,defineProperties:ft,getOwnPropertyDescriptor:bt}),o({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:lt,getOwnPropertySymbols:mt}),o({target:"Object",stat:!0,forced:d((function(){x.f(1)}))},{getOwnPropertySymbols:function(t){return x.f(p(t))}}),X){var pt=!c||d((function(){var t=M();return"[null]"!=X([t])||"{}"!=X({a:t})||"{}"!=X(Object(t))}));o({target:"JSON",stat:!0,forced:pt},{stringify:function(t,e,n){var o,r=[t],i=1;while(arguments.length>i)r.push(arguments[i++]);if(o=e,(l(e)||void 0!==t)&&!st(t))return b(e)||(e=function(t,e){if("function"==typeof o&&(e=o.call(this,t,e)),!st(e))return e}),r[1]=e,X.apply(null,r)}})}M[J][A]||k(M[J],A,M[J].valueOf),D(M,F),I[B]=!0},a5bc:function(t,e,n){"use strict";(function(t){var n={name:"Ribbon",props:{text:{type:String,default:"vue-ribbon: check it out!"},url:{type:String,default:"https://flatmap.it/vue-ribbon"},position:{type:String,validator:function(t){return"left-top"===t||"right-top"===t||"left-bottom"===t||"right-bottom"===t},default:"right-top"},fixed:{type:Boolean,default:!1},color:{type:String,validator:function(t){return 7===t.length},default:"#364a5e"}},computed:{ribbonClass:function(){var t;return t={"vue-ribbon":!0},t[""+this.position]=!0,t.fixed=this.fixed,t},href:function(){return this.url},componentId:function(){return"vue-ribbon-"+this._uid}},methods:{isLightColor:function(){var t=parseInt(this.color.substring(1),16),e=t>>16&255,n=t>>8&255,o=t>>0&255,r=.2126*e+.7152*n+.0722*o;return r>128},dynamicCSSClass:function(){var t="vue-ribbon-bkg-"+this._uid,e=document.getElementById(t);e||(e=document.createElement("style"),e.id=t,e.type="text/css",this.$el.appendChild(e));var n="#"+this.componentId+":before { background-color: "+this.color+"} ";this.isLightColor()&&(n+="#"+this.componentId+":after { color: #000; border-color: #000;}"),e.innerHTML=n}},mounted:function(){this.dynamicCSSClass()},beforeUpdate:function(){this.dynamicCSSClass()}};function o(t,e,n,o,r,i,a,s,c,f){"boolean"!==typeof a&&(c=s,s=a,a=!1);var d,u="function"===typeof n?n.options:n;if(t&&t.render&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0,r&&(u.functional=!0)),o&&(u._scopeId=o),i?(d=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(i)},u._ssrRegister=d):e&&(d=a?function(){e.call(this,f(this.$root.$options.shadowRoot))}:function(t){e.call(this,s(t))}),d)if(u.functional){var b=u.render;u.render=function(t,e){return d.call(e),b(t,e)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,d):[d]}return n}var r=o,i="undefined"!==typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function a(t){return function(t,e){return f(t,e)}}var s=document.head||document.getElementsByTagName("head")[0],c={};function f(t,e){var n=i?e.media||"default":t,o=c[n]||(c[n]={ids:new Set,styles:[]});if(!o.ids.has(t)){o.ids.add(t);var r=e.source;if(e.map&&(r+="\n/*# sourceURL="+e.map.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),o.element||(o.element=document.createElement("style"),o.element.type="text/css",e.media&&o.element.setAttribute("media",e.media),s.appendChild(o.element)),"styleSheet"in o.element)o.styles.push(r),o.element.styleSheet.cssText=o.styles.filter(Boolean).join("\n");else{var a=o.ids.size-1,f=document.createTextNode(r),d=o.element.childNodes;d[a]&&o.element.removeChild(d[a]),d.length?o.element.insertBefore(f,d[a]):o.element.appendChild(f)}}}var d=a,u=n,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"vue-ribbon-box"}},[n("a",{class:t.ribbonClass,attrs:{id:t.componentId,href:t.href,title:t.text,"data-ribbon":t.text}},[t._v(t._s(t.text))])])},l=[],m=function(t){t&&t("data-v-5d582780_0",{source:'.vue-ribbon[data-v-5d582780]{width:12.1em;height:12.1em;position:absolute;overflow:hidden;top:0;right:0;z-index:9999;pointer-events:none;font-size:13px;text-decoration:none;text-indent:-999999px}.vue-ribbon.fixed[data-v-5d582780]{position:fixed}.vue-ribbon[data-v-5d582780]:active,.vue-ribbon[data-v-5d582780]:hover{background-color:rgba(0,0,0,0)}.vue-ribbon[data-v-5d582780]:after,.vue-ribbon[data-v-5d582780]:before{position:absolute;display:block;width:15.38em;height:1.54em;top:3.23em;right:-3.23em;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg)}.vue-ribbon[data-v-5d582780]:before{content:"";padding:.38em 0;background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,0)),to(rgba(0,0,0,.15)));background-image:-webkit-linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.15));background-image:-moz-linear-gradient(top,rgba(92,60,60,0),rgba(0,0,0,.15));background-image:-ms-linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.15));background-image:-o-linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.15));background-image:linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.15));-webkit-box-shadow:0 .15em .23em 0 rgba(0,0,0,.5);-moz-box-shadow:0 .15em .23em 0 rgba(0,0,0,.5);box-shadow:0 .15em .23em 0 rgba(0,0,0,.5);pointer-events:auto}.vue-ribbon[data-v-5d582780]:after{content:attr(data-ribbon);color:#fff;font:700 1em "Helvetica Neue",Helvetica,Arial,sans-serif;line-height:1.54em;text-decoration:none;text-shadow:0 -.08em rgba(0,0,0,.5);text-align:center;text-indent:0;padding:.15em 0;margin:.15em 0;border-width:.08em 0;border-style:dotted;border-color:#fff;border-color:rgba(255,255,255,.7)}.vue-ribbon.left-bottom[data-v-5d582780],.vue-ribbon.left-top[data-v-5d582780]{right:auto;left:0}.vue-ribbon.left-bottom[data-v-5d582780],.vue-ribbon.right-bottom[data-v-5d582780]{top:auto;bottom:0}.vue-ribbon.left-bottom[data-v-5d582780]:after,.vue-ribbon.left-bottom[data-v-5d582780]:before,.vue-ribbon.left-top[data-v-5d582780]:after,.vue-ribbon.left-top[data-v-5d582780]:before{right:auto;left:-3.23em}.vue-ribbon.left-bottom[data-v-5d582780]:after,.vue-ribbon.left-bottom[data-v-5d582780]:before,.vue-ribbon.right-bottom[data-v-5d582780]:after,.vue-ribbon.right-bottom[data-v-5d582780]:before{top:auto;bottom:3.23em}.vue-ribbon.left-top[data-v-5d582780]:after,.vue-ribbon.left-top[data-v-5d582780]:before,.vue-ribbon.right-bottom[data-v-5d582780]:after,.vue-ribbon.right-bottom[data-v-5d582780]:before{-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-ms-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg)}',map:void 0,media:void 0})},p="data-v-5d582780",g=void 0,v=!1,h=r({render:b,staticRenderFns:l},m,u,p,v,g,d,void 0);function y(t){y.installed||(y.installed=!0,t.component("Ribbon",h))}var w={install:y},O=null;"undefined"!==typeof window?O=window.Vue:"undefined"!==typeof t&&(O=t.Vue),O&&O.use(w),h.install=y,e["a"]=h}).call(this,n("c8ba"))},b64b:function(t,e,n){var o=n("23e7"),r=n("7b0b"),i=n("df75"),a=n("d039"),s=a((function(){i(1)}));o({target:"Object",stat:!0,forced:s},{keys:function(t){return i(r(t))}})},ce26:function(t,e,n){"use strict";n("f314")},dbb4:function(t,e,n){var o=n("23e7"),r=n("83ab"),i=n("56ef"),a=n("fc6a"),s=n("06cf"),c=n("8418");o({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(t){var e,n,o=a(t),r=s.f,f=i(o),d={},u=0;while(f.length>u)n=r(o,e=f[u++]),void 0!==n&&c(d,e,n);return d}})},e439:function(t,e,n){var o=n("23e7"),r=n("d039"),i=n("fc6a"),a=n("06cf").f,s=n("83ab"),c=r((function(){a(1)})),f=!s||c;o({target:"Object",stat:!0,forced:f,sham:!s},{getOwnPropertyDescriptor:function(t,e){return a(i(t),e)}})},e538:function(t,e,n){var o=n("b622");e.f=o},f314:function(t,e,n){}}]);
//# sourceMappingURL=Components.c27e6836.js.map