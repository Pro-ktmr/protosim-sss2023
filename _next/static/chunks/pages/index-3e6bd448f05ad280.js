(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5075)}])},593:function(e,n,t){"use strict";t.d(n,{Ad:function(){return u},Ms:function(){return w},Wq:function(){return O},_V:function(){return x},bZ:function(){return N},jl:function(){return k},kS:function(){return h},mY:function(){return _},x4:function(){return l}});var r=t(7568),i=t(655),s=t(1864),o=t.n(s),a="/nwsim/";function c(){return window.location.pathname.slice(a.length-1)}function u(){var e=(window.location.pathname.match(/\//g)||[]).length-(a.match(/\//g)||[]).length;return o().join("../".repeat(e),"../nwsim-back")}function l(e,n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(function(e,n){var t,r,s,a,c;return(0,i.__generator)(this,function(i){switch(i.label){case 0:return[4,x()];case 1:if(void 0===i.sent())return[2,{status:"error",message:"[ERROR002] サーバとの予備接続に失敗しました"}];return t={status:"error",message:"未知のエラーが発生しました"},r=[o().join(u(),"login.cgi")],s={method:"POST"},a=JSON.stringify,c={username:e,password:n},[4,x()];case 2:return[4,fetch.apply(void 0,r.concat((s.body=a.apply(JSON,[(c.csrf_token=i.sent(),c)]),s))).then(function(e){if(!e.ok){t={status:"error",message:"[ERROR003] サーバとの接続に失敗しました"};return}return e.json()}).then(function(e){t="success"!=e.status?{status:"failure",message:"ログインに失敗しました"}:{status:"success",message:"ログインに成功しました"}}).catch(function(e){t={status:"error",message:"[ERROR004] サーバとの接続に失敗しました"}})];case 3:return i.sent(),[2,t]}})})).apply(this,arguments)}function h(){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(function(){var e,n,t,r,s;return(0,i.__generator)(this,function(i){switch(i.label){case 0:return[4,x()];case 1:if(void 0===i.sent())return[2,{status:"error",message:"[ERROR002] サーバとの予備接続に失敗しました"}];return e={status:"error",message:"未知のエラーが発生しました"},n=[o().join(u(),"logout.cgi")],t={method:"POST"},r=JSON.stringify,s={},[4,x()];case 2:return[4,fetch.apply(void 0,n.concat((t.body=r.apply(JSON,[(s.csrf_token=i.sent(),s)]),t))).then(function(n){if(!n.ok){e={status:"error",message:"[ERROR003] サーバとの接続に失敗しました"};return}return n.json()}).then(function(n){e="success"!=n.status?{status:"failure",message:"ログアウトに失敗しました"}:{status:"success",message:"ログアウトに成功しました"}}).catch(function(n){e={status:"error",message:"[ERROR004] サーバとの接続に失敗しました"}})];case 3:return i.sent(),[2,e]}})})).apply(this,arguments)}var m={},v=new Date("2000/1/1");function g(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(function(e){return(0,i.__generator)(this,function(n){switch(n.label){case 0:if(!e&&new Date().getTime()-v.getTime()<=6e3)return[2,m];return[4,fetch(o().join(u(),"status.cgi")).then(function(e){if(e.ok)return e.json()}).then(function(e){return v=new Date,m=e}).catch(function(){return{}})];case 1:return[2,n.sent()]}})})).apply(this,arguments)}function _(){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(function(){return(0,i.__generator)(this,function(e){switch(e.label){case 0:return[4,g(!0)];case 1:return e.sent(),[2]}})})).apply(this,arguments)}function x(){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(function(){var e;return(0,i.__generator)(this,function(n){switch(n.label){case 0:return[4,g(!1)];case 1:if(void 0===(e=n.sent()))return[2,void 0];return[2,e.csrf_token]}})})).apply(this,arguments)}function w(){return j.apply(this,arguments)}function j(){return(j=(0,r.Z)(function(){var e;return(0,i.__generator)(this,function(n){switch(n.label){case 0:return[4,g(!1)];case 1:if(void 0===(e=n.sent()))return[2,void 0];return[2,e.username]}})})).apply(this,arguments)}function k(){return A.apply(this,arguments)}function A(){return(A=(0,r.Z)(function(){return(0,i.__generator)(this,function(e){switch(e.label){case 0:return[4,w()];case 1:return[2,null!=e.sent()]}})})).apply(this,arguments)}function N(e){return C.apply(this,arguments)}function C(){return(C=(0,r.Z)(function(e){var n;return(0,i.__generator)(this,function(t){switch(t.label){case 0:switch(n={eventName:"tool_"+e.type,href:window.location.href,pathname:c()},e.type){case"moveCover":n.event_coverPosition=e.coverPosition;break;case"enterAddressBar":n.event_url=e.url;break;case"movePipe":n.event_direction=e.direction,n.event_destination=e.destination;break;case"openInsertPage":n.event_device=e.device,n.event_protocolIndex=e.protocolIndex;break;case"insertManually":n.event_device=e.device,n.event_protocolIndex=e.protocolIndex,n.event_body=n.body;break;case"openDataPage":n.event_device=e.device,n.event_direction=e.direction,n.event_protocolIndex=e.protocolIndex;break;case"executeTask":default:return[2];case"enterTextbox":n.event_textboxKey=e.textboxKey,n.event_value=e.value;break;case"finishGoal":case"completePage":n.event_key=e.key}return[4,x()];case 1:return n.csrf_token=t.sent(),[4,fetch(o().join(u(),"log.cgi"),{method:"POST",body:JSON.stringify(n)}).then(function(e){return e.json()}).then(function(e){}).catch(function(e){})];case 2:return t.sent(),[2]}})})).apply(this,arguments)}function O(e){return P.apply(this,arguments)}function P(){return(P=(0,r.Z)(function(e){var n;return(0,i.__generator)(this,function(t){switch(t.label){case 0:switch(n={eventName:e.type,href:window.location.href,pathname:c()},e.type){case"view":case"keep":case"login":case"logout":break;default:return[2]}return[4,x()];case 1:return n.csrf_token=t.sent(),[4,fetch(o().join(u(),"log.cgi"),{method:"POST",body:JSON.stringify(n)}).then(function(e){return e.json()}).then(function(e){}).catch(function(e){})];case 2:return t.sent(),[2]}})})).apply(this,arguments)}},5075:function(e,n,t){"use strict";t.r(n);var r=t(7568),i=t(655),s=t(5893),o=t(9008),a=t.n(o),c=t(7294),u=t(593),l=t(214),f=t.n(l),h=function(){var e=function(){if(null===t.current||null===o.current){alert("[ERROR001] 入力されたユーザ名とパスワードの取得に失敗しました");return}var e=t.current.value,n=o.current.value;(0,u.x4)(e,n).then(function(n){d(""),window.requestAnimationFrame(function(e){window.requestAnimationFrame(function(e){d(n.message)})}),"success"===n.status&&(g(e),(0,r.Z)(function(){return(0,i.__generator)(this,function(e){switch(e.label){case 0:return[4,(0,u.mY)()];case 1:return e.sent(),[4,(0,u.Wq)({type:"login"})];case 2:return e.sent(),[2]}})})())})},n=function(){(0,u.kS)().then(function(e){d(""),window.requestAnimationFrame(function(n){window.requestAnimationFrame(function(n){d(e.message)})}),"success"===e.status&&(g(null),(0,r.Z)(function(){return(0,i.__generator)(this,function(e){switch(e.label){case 0:return[4,(0,u.mY)()];case 1:return e.sent(),[4,(0,u.Wq)({type:"logout"})];case 2:return e.sent(),[2]}})})())})},t=(0,c.useRef)(null),o=(0,c.useRef)(null),l=(0,c.useState)(""),h=l[0],d=l[1],m=(0,c.useState)(null),v=m[0],g=m[1];return(0,c.useEffect)(function(){(0,r.Z)(function(){return(0,i.__generator)(this,function(e){return(0,u.Wq)({type:"view"}),[2]})})()},[]),(0,c.useEffect)(function(){setInterval((0,r.Z)(function(){return(0,i.__generator)(this,function(e){return(0,u.Wq)({type:"keep"}),[2]})}),1e4)},[]),(0,c.useEffect)(function(){(0,r.Z)(function(){return(0,i.__generator)(this,function(e){switch(e.label){case 0:return[4,(0,u.Ms)()];case 1:return g.apply(void 0,[e.sent()]),[2]}})})()},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a(),{children:(0,s.jsx)("title",{children:"ProtoSim (プロトシム) - 通信プロトコルシミュレータ"})}),(0,s.jsx)("div",{className:f().home,children:(0,s.jsxs)("main",{className:f().homeInner,children:[(0,s.jsxs)("h1",{children:["通信プロトコルシミュレータ",(0,s.jsx)("br",{}),"ProtoSim (プロトシム)"]}),(0,s.jsx)("div",{className:f().formArea,children:null==v?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:f().formPanel,children:[(0,s.jsxs)("div",{className:f().row,children:[(0,s.jsx)("div",{className:f().col,children:"ユーザ名"}),(0,s.jsx)("div",{className:f().col,children:(0,s.jsx)("input",{type:"text",ref:t})})]}),(0,s.jsxs)("div",{className:f().row,children:[(0,s.jsx)("div",{className:f().col,children:"パスワード"}),(0,s.jsx)("div",{className:f().col,children:(0,s.jsx)("input",{type:"password",ref:o})})]}),(0,s.jsx)("div",{className:f().row,children:(0,s.jsx)("button",{className:f().button,type:"button",onClick:function(n){return e()},children:"ログイン"})})]}),(0,s.jsx)("div",{className:f().formPanel,children:(0,s.jsx)("div",{className:f().row,children:(0,s.jsx)("a",{className:f().button,href:"./app",children:"ゲストユーザとして利用"})})})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:f().formPanel,children:(0,s.jsx)("div",{className:f().row,children:(0,s.jsx)("a",{className:f().button,href:"./app",children:"ユーザ "+v+" として利用"})})}),(0,s.jsx)("div",{className:f().formPanel,children:(0,s.jsx)("div",{className:f().row,children:(0,s.jsx)("button",{className:f().button,type:"button",onClick:function(e){return n()},children:"ログアウト"})})})]})})]})}),(0,s.jsx)("div",{className:f().loginMessage+" "+(""!==h?f().fadeUp:""),children:h})]})};n.default=h},214:function(e){e.exports={home:"Home_home__V_V4i",homeInner:"Home_homeInner__4i6AD",formArea:"Home_formArea__9mevs",formPanel:"Home_formPanel__8cKlP",row:"Home_row__O1CN_",col:"Home_col__dMCDI",button:"Home_button__Zs7A2",loginMessage:"Home_loginMessage__NFaG7",fadeUp:"Home_fadeUp__EDvde",fadeUpAnim:"Home_fadeUpAnim__az7PA"}},1864:function(e){!function(){"use strict";var n={114:function(e){function n(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function t(e,n){for(var t,r="",i=0,s=-1,o=0,a=0;a<=e.length;++a){if(a<e.length)t=e.charCodeAt(a);else if(47===t)break;else t=47;if(47===t){if(s===a-1||1===o);else if(s!==a-1&&2===o){if(r.length<2||2!==i||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2)){if(r.length>2){var c=r.lastIndexOf("/");if(c!==r.length-1){-1===c?(r="",i=0):i=(r=r.slice(0,c)).length-1-r.lastIndexOf("/"),s=a,o=0;continue}}else if(2===r.length||1===r.length){r="",i=0,s=a,o=0;continue}}n&&(r.length>0?r+="/..":r="..",i=2)}else r.length>0?r+="/"+e.slice(s+1,a):r=e.slice(s+1,a),i=a-s-1;s=a,o=0}else 46===t&&-1!==o?++o:o=-1}return r}var r={resolve:function(){for(var e,r,i="",s=!1,o=arguments.length-1;o>=-1&&!s;o--)o>=0?r=arguments[o]:(void 0===e&&(e=""),r=e),n(r),0!==r.length&&(i=r+"/"+i,s=47===r.charCodeAt(0));return(i=t(i,!s),s)?i.length>0?"/"+i:"/":i.length>0?i:"."},normalize:function(e){if(n(e),0===e.length)return".";var r=47===e.charCodeAt(0),i=47===e.charCodeAt(e.length-1);return(0!==(e=t(e,!r)).length||r||(e="."),e.length>0&&i&&(e+="/"),r)?"/"+e:e},isAbsolute:function(e){return n(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,t=0;t<arguments.length;++t){var i=arguments[t];n(i),i.length>0&&(void 0===e?e=i:e+="/"+i)}return void 0===e?".":r.normalize(e)},relative:function(e,t){if(n(e),n(t),e===t||(e=r.resolve(e))===(t=r.resolve(t)))return"";for(var i=1;i<e.length&&47===e.charCodeAt(i);++i);for(var s=e.length,o=s-i,a=1;a<t.length&&47===t.charCodeAt(a);++a);for(var c=t.length-a,u=o<c?o:c,l=-1,f=0;f<=u;++f){if(f===u){if(c>u){if(47===t.charCodeAt(a+f))return t.slice(a+f+1);if(0===f)return t.slice(a+f)}else o>u&&(47===e.charCodeAt(i+f)?l=f:0===f&&(l=0));break}var h=e.charCodeAt(i+f);if(h!==t.charCodeAt(a+f))break;47===h&&(l=f)}var d="";for(f=i+l+1;f<=s;++f)(f===s||47===e.charCodeAt(f))&&(0===d.length?d+="..":d+="/..");return d.length>0?d+t.slice(a+l):(a+=l,47===t.charCodeAt(a)&&++a,t.slice(a))},_makeLong:function(e){return e},dirname:function(e){if(n(e),0===e.length)return".";for(var t=e.charCodeAt(0),r=47===t,i=-1,s=!0,o=e.length-1;o>=1;--o)if(47===(t=e.charCodeAt(o))){if(!s){i=o;break}}else s=!1;return -1===i?r?"/":".":r&&1===i?"//":e.slice(0,i)},basename:function(e,t){if(void 0!==t&&"string"!=typeof t)throw TypeError('"ext" argument must be a string');n(e);var r,i=0,s=-1,o=!0;if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var a=t.length-1,c=-1;for(r=e.length-1;r>=0;--r){var u=e.charCodeAt(r);if(47===u){if(!o){i=r+1;break}}else -1===c&&(o=!1,c=r+1),a>=0&&(u===t.charCodeAt(a)?-1==--a&&(s=r):(a=-1,s=c))}return i===s?s=c:-1===s&&(s=e.length),e.slice(i,s)}for(r=e.length-1;r>=0;--r)if(47===e.charCodeAt(r)){if(!o){i=r+1;break}}else -1===s&&(o=!1,s=r+1);return -1===s?"":e.slice(i,s)},extname:function(e){n(e);for(var t=-1,r=0,i=-1,s=!0,o=0,a=e.length-1;a>=0;--a){var c=e.charCodeAt(a);if(47===c){if(!s){r=a+1;break}continue}-1===i&&(s=!1,i=a+1),46===c?-1===t?t=a:1!==o&&(o=1):-1!==t&&(o=-1)}return -1===t||-1===i||0===o||1===o&&t===i-1&&t===r+1?"":e.slice(t,i)},format:function(e){var n,t,r;if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return t=e.dir||e.root,r=e.base||(e.name||"")+(e.ext||""),t?t===e.root?t+r:t+"/"+r:r},parse:function(e){n(e);var t,r={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return r;var i=e.charCodeAt(0),s=47===i;s?(r.root="/",t=1):t=0;for(var o=-1,a=0,c=-1,u=!0,l=e.length-1,f=0;l>=t;--l){if(47===(i=e.charCodeAt(l))){if(!u){a=l+1;break}continue}-1===c&&(u=!1,c=l+1),46===i?-1===o?o=l:1!==f&&(f=1):-1!==o&&(f=-1)}return -1===o||-1===c||0===f||1===f&&o===c-1&&o===a+1?-1!==c&&(0===a&&s?r.base=r.name=e.slice(1,c):r.base=r.name=e.slice(a,c)):(0===a&&s?(r.name=e.slice(1,o),r.base=e.slice(1,c)):(r.name=e.slice(a,o),r.base=e.slice(a,c)),r.ext=e.slice(o,c)),a>0?r.dir=e.slice(0,a-1):s&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};r.posix=r,e.exports=r}},t={};function r(e){var i=t[e];if(void 0!==i)return i.exports;var s=t[e]={exports:{}},o=!0;try{n[e](s,s.exports,r),o=!1}finally{o&&delete t[e]}return s.exports}r.ab="//";var i=r(114);e.exports=i}()},9008:function(e,n,t){e.exports=t(5443)},7568:function(e,n,t){"use strict";function r(e,n,t,r,i,s,o){try{var a=e[s](o),c=a.value}catch(u){t(u);return}a.done?n(c):Promise.resolve(c).then(r,i)}function i(e){return function(){var n=this,t=arguments;return new Promise(function(i,s){var o=e.apply(n,t);function a(e){r(o,i,s,a,c,"next",e)}function c(e){r(o,i,s,a,c,"throw",e)}a(void 0)})}}t.d(n,{Z:function(){return i}})}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);