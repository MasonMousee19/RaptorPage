!function(){"use strict";var t,n,e,r,i,o,a,c,s,p,d,u,l,f,m={263:function(t,n,e){var r=e(81),i=e.n(r),o=e(645),a=e.n(o)()(i());a.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Roboto:wght@400;700&display=swap);"]),a.push([t.id,'.class1{color:#ff0;text-align:center}.classDemo2{text-align:center}.ftco-section{display:block;width:100%;padding:8em 0}.bg-light{background:#b9bdc8 !important;z-index:0}.container-big{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media(min-width: 650px){.container-big{max-width:570px}}@media(min-width: 768px){.container-big{max-width:720px}}@media(min-width: 992px){.container-big{max-width:960px}}@media(min-width: 1200px){.container-big{max-width:1140px}}.container-fluid{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.content-center{justify-content:center !important}.pb-5{padding-bottom:3rem !important}.mb-5{margin-bottom:3rem !important}.row{display:flex;flex-wrap:wrap;margin-left:-15px;margin-right:-15px}.text-center{text-align:center !important}@media(min-width: 768px){.col-md-7{-webkit-box-flex:0;flex:0 0 58.33333%;max-width:58.33333%}}.col-md-7{position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px}.subheading{display:block;color:#24bdc9;font-size:14px;margin-bottom:20px}h2{font-size:30px !important;color:green !important}.container{max-width:1320px;margin:0 auto;padding:0rem .5rem}*{margin:0;padding:0;box-sizing:border-box}html{font-size:62.5%;font-family:"Poppins",sans-serif}body{font-size:1.6rem}',""]),n.Z=a},645:function(t){t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,i,o){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var p=0;p<t.length;p++){var d=[].concat(t[p]);r&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),n.push(d))}},n}},81:function(t){t.exports=function(t){return t[1]}},379:function(t){var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var o={},a=[],c=0;c<t.length;c++){var s=t[c],p=r.base?s[0]+r.base:s[0],d=o[p]||0,u="".concat(p," ").concat(d);o[p]=d+1;var l=e(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)n[l].references++,n[l].updater(f);else{var m=i(f,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function i(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,i){var o=r(t=t||[],i=i||{});return function(t){t=t||[];for(var a=0;a<o.length;a++){var c=e(o[a]);n[c].references--}for(var s=r(t,i),p=0;p<o.length;p++){var d=e(o[p]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}o=s}}},569:function(t){var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:function(t){t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},565:function(t,n,e){t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},795:function(t){t.exports=function(t){var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var i=void 0!==e.layer;i&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,i&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var o=e.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},589:function(t){t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},h={};function g(t){var n=h[t];if(void 0!==n)return n.exports;var e=h[t]={id:t,exports:{}};return m[t](e,e.exports,g),e.exports}g.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return g.d(n,{a:n}),n},g.d=function(t,n){for(var e in n)g.o(n,e)&&!g.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},g.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},t=g(379),n=g.n(t),e=g(795),r=g.n(e),i=g(569),o=g.n(i),a=g(565),c=g.n(a),s=g(216),p=g.n(s),d=g(589),u=g.n(d),l=g(263),(f={}).styleTagTransform=u(),f.setAttributes=c(),f.insert=o().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=p(),n()(l.Z,f),l.Z&&l.Z.locals&&l.Z.locals}();