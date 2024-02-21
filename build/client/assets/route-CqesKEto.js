import{r as b,j as h,b as Ke}from"./jsx-runtime-DexIYAB0.js";import{c as Ce,a as F,b as P,m as I,t as _,I as Re,H as le,B as ue,T as We,n as ce}from"./heading-BqkoGSA_.js";import{D as Ge}from"./decoder-text-BKPsujxg.js";import{D as Ye}from"./divider-CuqUtAp8.js";import{b as Qe,S as Ze,F as et}from"./section-BpiAKwBb.js";import{i as A,w as G,x as tt,r as rt,y as nt,m as at,U as de,E as ot,z as st,B as it,C as lt,s as ut,F as ct}from"./components-DX6auwS0.js";import"./visually-hidden-Dka5_1TE.js";import"./use-spring-CzxHgdCV.js";import"./config-BSXQ0pV0.js";/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var dt=pt,ft=mt,ht=Object.prototype.toString,N=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function pt(e,t){if(typeof e!="string")throw new TypeError("argument str must be a string");for(var r={},n=t||{},a=n.decode||yt,o=0;o<e.length;){var s=e.indexOf("=",o);if(s===-1)break;var i=e.indexOf(";",o);if(i===-1)i=e.length;else if(i<s){o=e.lastIndexOf(";",s-1)+1;continue}var l=e.slice(o,s).trim();if(r[l]===void 0){var c=e.slice(s+1,i).trim();c.charCodeAt(0)===34&&(c=c.slice(1,-1)),r[l]=_t(c,a)}o=i+1}return r}function mt(e,t,r){var n=r||{},a=n.encode||gt;if(typeof a!="function")throw new TypeError("option encode is invalid");if(!N.test(e))throw new TypeError("argument name is invalid");var o=a(t);if(o&&!N.test(o))throw new TypeError("argument val is invalid");var s=e+"="+o;if(n.maxAge!=null){var i=n.maxAge-0;if(isNaN(i)||!isFinite(i))throw new TypeError("option maxAge is invalid");s+="; Max-Age="+Math.floor(i)}if(n.domain){if(!N.test(n.domain))throw new TypeError("option domain is invalid");s+="; Domain="+n.domain}if(n.path){if(!N.test(n.path))throw new TypeError("option path is invalid");s+="; Path="+n.path}if(n.expires){var l=n.expires;if(!wt(l)||isNaN(l.valueOf()))throw new TypeError("option expires is invalid");s+="; Expires="+l.toUTCString()}if(n.httpOnly&&(s+="; HttpOnly"),n.secure&&(s+="; Secure"),n.partitioned&&(s+="; Partitioned"),n.priority){var c=typeof n.priority=="string"?n.priority.toLowerCase():n.priority;switch(c){case"low":s+="; Priority=Low";break;case"medium":s+="; Priority=Medium";break;case"high":s+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(n.sameSite){var u=typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite;switch(u){case!0:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;case"none":s+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return s}function yt(e){return e.indexOf("%")!==-1?decodeURIComponent(e):e}function gt(e){return encodeURIComponent(e)}function wt(e){return ht.call(e)==="[object Date]"||e instanceof Date}function _t(e,t){try{return t(e)}catch{return e}}/**
 * @remix-run/server-runtime v2.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const fe={};function ke(e,t){!e&&!fe[t]&&(fe[t]=!0,console.warn(t))}/**
 * @remix-run/server-runtime v2.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const bt=({sign:e,unsign:t})=>(r,n={})=>{let{secrets:a=[],...o}={path:"/",sameSite:"lax",...n};return Rt(r,o.expires),{get name(){return r},get isSigned(){return a.length>0},get expires(){return typeof o.maxAge<"u"?new Date(Date.now()+o.maxAge*1e3):o.expires},async parse(s,i){if(!s)return null;let l=dt(s,{...o,...i});return r in l?l[r]===""?"":await vt(t,l[r],a):null},async serialize(s,i){return ft(r,s===""?"":await St(e,s,a),{...o,...i})}}},Y=e=>e!=null&&typeof e.name=="string"&&typeof e.isSigned=="boolean"&&typeof e.parse=="function"&&typeof e.serialize=="function";async function St(e,t,r){let n=xt(t);return r.length>0&&(n=await e(n,r[0])),n}async function vt(e,t,r){if(r.length>0){for(let n of r){let a=await e(t,n);if(a!==!1)return he(a)}return null}return he(t)}function xt(e){return btoa(Ct(encodeURIComponent(JSON.stringify(e))))}function he(e){try{return JSON.parse(decodeURIComponent(Et(atob(e))))}catch{return{}}}function Et(e){let t=e.toString(),r="",n=0,a,o;for(;n<t.length;)a=t.charAt(n++),/[\w*+\-./@]/.exec(a)?r+=a:(o=a.charCodeAt(0),o<256?r+="%"+pe(o,2):r+="%u"+pe(o,4).toUpperCase());return r}function pe(e,t){let r=e.toString(16);for(;r.length<t;)r="0"+r;return r}function Ct(e){let t=e.toString(),r="",n=0,a,o;for(;n<t.length;){if(a=t.charAt(n++),a==="%"){if(t.charAt(n)==="u"){if(o=t.slice(n+1,n+5),/^[\da-f]{4}$/i.exec(o)){r+=String.fromCharCode(parseInt(o,16)),n+=5;continue}}else if(o=t.slice(n,n+2),/^[\da-f]{2}$/i.exec(o)){r+=String.fromCharCode(parseInt(o,16)),n+=2;continue}}r+=a}return r}function Rt(e,t){ke(!t,`The "${e}" cookie has an "expires" property set. This will cause the expires value to not be updated when the session is committed. Instead, you should set the expires value when serializing the cookie. You can use \`commitSession(session, { expires })\` if using a session storage object, or \`cookie.serialize("value", { expires })\` if you're using the cookie directly.`)}function L(e){const t=unescape(encodeURIComponent(e));return Uint8Array.from(t,(r,n)=>t.charCodeAt(n))}function kt(e){const t=String.fromCharCode.apply(null,e);return decodeURIComponent(escape(t))}function U(...e){const t=new Uint8Array(e.reduce((n,a)=>n+a.length,0));let r=0;for(const n of e)t.set(n,r),r+=n.length;return t}function jt(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}function me(e){return e instanceof Uint8Array?t=>e[t]:e}function X(e,t,r,n,a){const o=me(e),s=me(r);for(let i=0;i<a;++i)if(o(t+i)!==s(n+i))return!1;return!0}function Dt(e){const t=new Array(256).fill(e.length);if(e.length>1)for(let r=0;r<e.length-1;r++)t[e[r]]=e.length-1-r;return t}const v=Symbol("Match");class Q{constructor(t){this._lookbehind=new Uint8Array,typeof t=="string"?this._needle=t=L(t):this._needle=t,this._lastChar=t[t.length-1],this._occ=Dt(t)}feed(t){let r=0,n;const a=[];for(;r!==t.length;)[r,...n]=this._feed(t,r),a.push(...n);return a}end(){const t=this._lookbehind;return this._lookbehind=new Uint8Array,t}_feed(t,r){const n=[];let a=-this._lookbehind.length;if(a<0){for(;a<0&&a<=t.length-this._needle.length;){const o=this._charAt(t,a+this._needle.length-1);if(o===this._lastChar&&this._memcmp(t,a,this._needle.length-1))return a>-this._lookbehind.length&&n.push(this._lookbehind.slice(0,this._lookbehind.length+a)),n.push(v),this._lookbehind=new Uint8Array,[a+this._needle.length,...n];a+=this._occ[o]}if(a<0)for(;a<0&&!this._memcmp(t,a,t.length-a);)a++;if(a>=0)n.push(this._lookbehind),this._lookbehind=new Uint8Array;else{const o=this._lookbehind.length+a;return o>0&&(n.push(this._lookbehind.slice(0,o)),this._lookbehind=this._lookbehind.slice(o)),this._lookbehind=Uint8Array.from(new Array(this._lookbehind.length+t.length),(s,i)=>this._charAt(t,i-this._lookbehind.length)),[t.length,...n]}}for(a+=r;a<=t.length-this._needle.length;){const o=t[a+this._needle.length-1];if(o===this._lastChar&&t[a]===this._needle[0]&&X(this._needle,0,t,a,this._needle.length-1))return a>r&&n.push(t.slice(r,a)),n.push(v),[a+this._needle.length,...n];a+=this._occ[o]}if(a<t.length){for(;a<t.length&&(t[a]!==this._needle[0]||!X(t,a,this._needle,0,t.length-a));)++a;a<t.length&&(this._lookbehind=t.slice(a))}return a>0&&n.push(t.slice(r,a<t.length?a:t.length)),[t.length,...n]}_charAt(t,r){return r<0?this._lookbehind[this._lookbehind.length+r]:t[r]}_memcmp(t,r,n){return X(this._charAt.bind(this,t),r,this._needle,0,n)}}class Tt{constructor(t,r){this._readableStream=r,this._search=new Q(t)}async*[Symbol.asyncIterator](){const t=this._readableStream.getReader();try{for(;;){const n=await t.read();if(n.done)break;yield*this._search.feed(n.value)}const r=this._search.end();r.length&&(yield r)}finally{t.releaseLock()}}}const Ot=Function.prototype.apply.bind(U,void 0),je=L("--"),M=L(`\r
`);function Mt(e){const t=e.split(";").map(n=>n.trim());if(t.shift()!=="form-data")throw new Error('malformed content-disposition header: missing "form-data" in `'+JSON.stringify(t)+"`");const r={};for(const n of t){const a=n.split("=",2);if(a.length!==2)throw new Error("malformed content-disposition header: key-value pair not found - "+n+" in `"+e+"`");const[o,s]=a;if(s[0]==='"'&&s[s.length-1]==='"')r[o]=s.slice(1,-1).replace(/\\"/g,'"');else if(s[0]!=='"'&&s[s.length-1]!=='"')r[o]=s;else if(s[0]==='"'&&s[s.length-1]!=='"'||s[0]!=='"'&&s[s.length-1]==='"')throw new Error("malformed content-disposition header: mismatched quotations in `"+e+"`")}if(!r.name)throw new Error("malformed content-disposition header: missing field name in `"+e+"`");return r}function At(e){const t=[];let r=!1,n;for(;typeof(n=e.shift())<"u";){const a=n.indexOf(":");if(a===-1)throw new Error("malformed multipart-form header: missing colon");const o=n.slice(0,a).trim().toLowerCase(),s=n.slice(a+1).trim();switch(o){case"content-disposition":r=!0,t.push(...Object.entries(Mt(s)));break;case"content-type":t.push(["contentType",s])}}if(!r)throw new Error("malformed multipart-form header: missing content-disposition");return Object.fromEntries(t)}async function Ht(e,t){let r=!0,n=!1;const a=[[]],o=new Q(M);for(;;){const s=await e.next();if(s.done)throw new Error("malformed multipart-form data: unexpected end of stream");if(r&&s.value!==v&&jt(s.value.slice(0,2),je))return[void 0,new Uint8Array];let i;if(s.value!==v)i=s.value;else if(!n)i=t;else throw new Error("malformed multipart-form data: unexpected boundary");if(!i.length)continue;r&&(r=!1);const l=o.feed(i);for(const[c,u]of l.entries()){const d=u===v;if(!(!d&&!u.length)){if(n&&d)return l.push(o.end()),[a.filter(y=>y.length).map(Ot).map(kt),U(...l.slice(c+1).map(y=>y===v?M:y))];(n=d)?a.push([]):a[a.length-1].push(u)}}}}async function*Nt(e,t){const r=U(je,L(t)),n=new Tt(r,e)[Symbol.asyncIterator]();for(;;){const o=await n.next();if(o.done)return;if(o.value===v)break}const a=new Q(M);for(;;){let c=function(f){const p=[];for(const g of a.feed(f))l&&p.push(M),(l=g===v)||p.push(g);return U(...p)};const[o,s]=await Ht(n,r);if(!o)return;async function i(){const f=await n.next();if(f.done)throw new Error("malformed multipart-form data: unexpected end of stream");return f}let l=!1,u=!1;async function d(){const f=await i();let p;if(f.value!==v)p=f.value;else if(!l)p=M;else return u=!0,{value:a.end()};return{value:c(p)}}const y=[{value:c(s)}];for(yield{...At(o),data:{[Symbol.asyncIterator](){return this},async next(){for(;;){const f=y.shift();if(!f)break;if(f.value.length>0)return f}for(;;){if(u)return{done:u,value:void 0};const f=await d();if(f.value.length>0)return f}}}};!u;)y.push(await d())}}/**
 * @remix-run/server-runtime v2.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pt(...e){return async t=>{for(let r of e){let n=await r(t);if(typeof n<"u"&&n!==null)return n}}}async function It(e,t){let r=e.headers.get("Content-Type")||"",[n,a]=r.split(/\s*;\s*boundary=/);if(!e.body||!a||n!=="multipart/form-data")throw new TypeError("Could not parse content as FormData.");let o=new FormData,s=Nt(e.body,a);for await(let i of s){if(i.done)break;typeof i.filename=="string"&&(i.filename=i.filename.split(/[/\\]/).pop());let l=await t(i);typeof l<"u"&&l!==null&&o.append(i.name,l)}return o}/**
 * @remix-run/server-runtime v2.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let x=function(e){return e.Development="development",e.Production="production",e.Test="test",e}({});function Ut(e){return e===x.Development||e===x.Production||e===x.Test}/**
 * @remix-run/server-runtime v2.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Z(e,t){if(e instanceof Error&&t!==x.Development){let r=new Error("Unexpected Server Error");return r.stack=void 0,r}return e}function ye(e,t){return Object.entries(e).reduce((r,[n,a])=>Object.assign(r,{[n]:Z(a,t)}),{})}function $(e,t){let r=Z(e,t);return{message:r.message,stack:r.stack}}function ge(e,t){if(!e)return null;let r=Object.entries(e),n={};for(let[a,o]of r)if(A(o))n[a]={...o,__type:"RouteErrorResponse"};else if(o instanceof Error){let s=Z(o,t);n[a]={message:s.message,stack:s.stack,__type:"Error",...s.name!=="Error"?{__subType:s.name}:{}}}else n[a]=o;return n}/**
 * @remix-run/server-runtime v2.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const ee=(e,t={})=>G(e,t),Ft=(e,t={})=>tt(e,t),De=(e,t=302)=>rt(e,t),Lt=(e,t=302)=>nt(e,t);function $t(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function D(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}const zt=new Set([301,302,303,307,308]);function Te(e){return zt.has(e)}function Vt(e){return Te(e.status)}function Bt(e){return e!=null&&typeof e.then=="function"&&e._tracked===!0}const Xt="__deferred_promise:";function qt(e,t,r){let n=new TextEncoder;return new ReadableStream({async start(o){let s={},i=[];for(let[c,u]of Object.entries(e.data))Bt(u)?(s[c]=`${Xt}${c}`,(typeof u._data<"u"||typeof u._error<"u")&&i.push(c)):s[c]=u;o.enqueue(n.encode(JSON.stringify(s)+`

`));for(let c of i)we(o,n,c,e.data[c],r);let l=e.subscribe((c,u)=>{u&&we(o,n,u,e.data[u],r)});await e.resolveData(t),l(),o.close()}})}function we(e,t,r,n,a){"_error"in n?e.enqueue(t.encode("error:"+JSON.stringify({[r]:n._error instanceof Error?$(n._error,a):n._error})+`

`)):e.enqueue(t.encode("data:"+JSON.stringify({[r]:n._data??null})+`

`))}/**
 * @remix-run/server-runtime v2.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jt(e){return Object.keys(e).reduce((t,r)=>(t[r]=e[r].module,t),{})}var z={exports:{}},O={decodeValues:!0,map:!1,silent:!1};function K(e){return typeof e=="string"&&!!e.trim()}function W(e,t){var r=e.split(";").filter(K),n=r.shift(),a=Kt(n),o=a.name,s=a.value;t=t?Object.assign({},O,t):O;try{s=t.decodeValues?decodeURIComponent(s):s}catch(l){console.error("set-cookie-parser encountered an error while decoding a cookie with value '"+s+"'. Set options.decodeValues to false to disable this feature.",l)}var i={name:o,value:s};return r.forEach(function(l){var c=l.split("="),u=c.shift().trimLeft().toLowerCase(),d=c.join("=");u==="expires"?i.expires=new Date(d):u==="max-age"?i.maxAge=parseInt(d,10):u==="secure"?i.secure=!0:u==="httponly"?i.httpOnly=!0:u==="samesite"?i.sameSite=d:i[u]=d}),i}function Kt(e){var t="",r="",n=e.split("=");return n.length>1?(t=n.shift(),r=n.join("=")):r=e,{name:t,value:r}}function Oe(e,t){if(t=t?Object.assign({},O,t):O,!e)return t.map?{}:[];if(e.headers)if(typeof e.headers.getSetCookie=="function")e=e.headers.getSetCookie();else if(e.headers["set-cookie"])e=e.headers["set-cookie"];else{var r=e.headers[Object.keys(e.headers).find(function(a){return a.toLowerCase()==="set-cookie"})];!r&&e.headers.cookie&&!t.silent&&console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."),e=r}if(Array.isArray(e)||(e=[e]),t=t?Object.assign({},O,t):O,t.map){var n={};return e.filter(K).reduce(function(a,o){var s=W(o,t);return a[s.name]=s,a},n)}else return e.filter(K).map(function(a){return W(a,t)})}function Wt(e){if(Array.isArray(e))return e;if(typeof e!="string")return[];var t=[],r=0,n,a,o,s,i;function l(){for(;r<e.length&&/\s/.test(e.charAt(r));)r+=1;return r<e.length}function c(){return a=e.charAt(r),a!=="="&&a!==";"&&a!==","}for(;r<e.length;){for(n=r,i=!1;l();)if(a=e.charAt(r),a===","){for(o=r,r+=1,l(),s=r;r<e.length&&c();)r+=1;r<e.length&&e.charAt(r)==="="?(i=!0,r=s,t.push(e.substring(n,o)),n=r):r=o+1}else r+=1;(!i||r>=e.length)&&t.push(e.substring(n,e.length))}return t}z.exports=Oe;z.exports.parse=Oe;z.exports.parseString=W;var Gt=z.exports.splitCookiesString=Wt;/**
 * @remix-run/server-runtime v2.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yt(e,t){let r=t.errors?t.matches.findIndex(o=>t.errors[o.route.id]):-1,n=r>=0?t.matches.slice(0,r+1):t.matches,a;if(r>=0){let{actionHeaders:o,actionData:s,loaderHeaders:i,loaderData:l}=t;t.matches.slice(r).some(c=>{let u=c.route.id;return o[u]&&(!s||s[u]===void 0)?a=o[u]:i[u]&&l[u]===void 0&&(a=i[u]),a!=null})}return n.reduce((o,s,i)=>{let{id:l}=s.route,c=e.routes[l].module,u=t.loaderHeaders[l]||new Headers,d=t.actionHeaders[l]||new Headers,y=a!=null&&i===n.length-1,f=y&&a!==u&&a!==d;if(c.headers==null){let g=new Headers(o);return f&&k(a,g),k(d,g),k(u,g),g}let p=new Headers(c.headers?typeof c.headers=="function"?c.headers({loaderHeaders:u,parentHeaders:o,actionHeaders:d,errorHeaders:y?a:void 0}):c.headers:void 0);return f&&k(a,p),k(d,p),k(u,p),k(o,p),p},new Headers)}function k(e,t){let r=e.get("Set-Cookie");r&&Gt(r).forEach(a=>{t.append("Set-Cookie",a)})}/**
 * @remix-run/server-runtime v2.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qt(e,t){if(e===!1||e===null||typeof e>"u")throw console.error("The following error is a bug in Remix; please open an issue! https://github.com/remix-run/remix/issues/new"),new Error(t)}/**
 * @remix-run/server-runtime v2.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zt(e,t){let r=at(e,t);return r?r.map(n=>({params:n.params,pathname:n.pathname,route:n.route})):null}/**
 * @remix-run/server-runtime v2.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */async function er({loadContext:e,action:t,params:r,request:n,routeId:a}){let o=await t({request:Ae(Me(n)),context:e,params:r});if(o===void 0)throw new Error(`You defined an action for route "${a}" but didn't return anything from your \`action\` function. Please return a value or \`null\`.`);return D(o)?o:ee(o)}async function tr({loadContext:e,loader:t,params:r,request:n,routeId:a}){let o=await t({request:Ae(Me(n)),context:e,params:r});if(o===void 0)throw new Error(`You defined a loader for route "${a}" but didn't return anything from your \`loader\` function. Please return a value or \`null\`.`);return $t(o)?o.init&&Te(o.init.status||200)?De(new Headers(o.init.headers).get("Location"),o.init):o:D(o)?o:ee(o)}function Me(e){let t=new URL(e.url),r=t.searchParams.getAll("index");t.searchParams.delete("index");let n=[];for(let o of r)o&&n.push(o);for(let o of n)t.searchParams.append("index",o);let a={method:e.method,body:e.body,headers:e.headers,signal:e.signal};return a.body&&(a.duplex="half"),new Request(t.href,a)}function Ae(e){let t=new URL(e.url);t.searchParams.delete("_data");let r={method:e.method,body:e.body,headers:e.headers,signal:e.signal};return r.body&&(r.duplex="half"),new Request(t.href,r)}/**
 * @remix-run/server-runtime v2.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function He(e){let t={};return Object.values(e).forEach(r=>{let n=r.parentId||"";t[n]||(t[n]=[]),t[n].push(r)}),t}function Ne(e,t="",r=He(e)){return(r[t]||[]).map(n=>({...n,children:Ne(e,n.id,r)}))}function Pe(e,t,r="",n=He(e)){return(n[r]||[]).map(a=>{let o={hasErrorBoundary:a.id==="root"||a.module.ErrorBoundary!=null,id:a.id,path:a.path,loader:a.module.loader?s=>tr({request:s.request,params:s.params,loadContext:s.context,loader:a.module.loader,routeId:a.id}):void 0,action:a.module.action?s=>er({request:s.request,params:s.params,loadContext:s.context,action:a.module.action,routeId:a.id}):void 0,handle:a.module.handle};return a.index?{index:!0,...o}:{caseSensitive:a.caseSensitive,children:Pe(e,t,a.id,n),...o}})}/**
 * @remix-run/server-runtime v2.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const rr={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},nr=/[&><\u2028\u2029]/g;function ar(e){return e.replace(nr,t=>rr[t])}/**
 * @remix-run/server-runtime v2.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _e(e){return ar(JSON.stringify(e))}var or={};/**
 * @remix-run/server-runtime v2.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */async function sr(e,t){if(t??(t=or.REMIX_DEV_ORIGIN),!t)throw Error("Dev server origin not set");let r=new URL(t);r.pathname="ping";let n=await fetch(r.href,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({buildHash:e.assets.version})}).catch(a=>{throw console.error(`Could not reach Remix dev server at ${r}`),a});if(!n.ok)throw console.error(`Could not reach Remix dev server at ${r} (${n.status})`),Error(await n.text())}function ir(e){console.log(`[REMIX DEV] ${e.assets.version} ready`)}const Ie="__remix_devServerHooks";function lr(e){globalThis[Ie]=e}function be(){return globalThis[Ie]}/**
 * @remix-run/server-runtime v2.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Se(e,t){var r,n;let a=Ne(e.routes),o=Pe(e.routes,e.future),s=Ut(t)?t:x.Production,i=it(o,{future:{v7_relativeSplatPath:((r=e.future)===null||r===void 0?void 0:r.v3_relativeSplatPath)===!0,v7_throwAbortReason:((n=e.future)===null||n===void 0?void 0:n.v3_throwAbortReason)===!0}}),l=e.entry.module.handleError||((c,{request:u})=>{s!==x.Test&&!u.signal.aborted&&console.error(A(c)&&c.error?c.error:c)});return{routes:a,dataRoutes:o,serverMode:s,staticHandler:i,errorHandler:l}}const ur=(e,t)=>{let r,n,a,o,s;return async function(l,c={}){if(r=typeof e=="function"?await e():e,t??(t=r.mode),typeof e=="function"){let m=Se(r,t);n=m.routes,a=m.serverMode,o=m.staticHandler,s=m.errorHandler}else if(!n||!a||!o||!s){let m=Se(r,t);n=m.routes,a=m.serverMode,o=m.staticHandler,s=m.errorHandler}let u=new URL(l.url),d=Zt(n,u.pathname),y=m=>{if(t===x.Development){var S,C;(S=be())===null||S===void 0||(C=S.processRequestError)===null||C===void 0||C.call(S,m)}s(m,{context:c,params:d&&d.length>0?d[0].params:{},request:l})},f;if(u.searchParams.has("_data")){let m=u.searchParams.get("_data");if(f=await cr(a,o,m,l,c,y),r.entry.module.handleDataRequest){var p;f=await r.entry.module.handleDataRequest(f,{context:c,params:(d==null||(p=d.find(S=>S.route.id==m))===null||p===void 0?void 0:p.params)||{},request:l})}}else if(d&&d[d.length-1].route.module.default==null&&d[d.length-1].route.module.ErrorBoundary==null)f=await fr(a,o,d.slice(-1)[0].route.id,l,c,y);else{var g,E;let m=t===x.Development?await((g=be())===null||g===void 0||(E=g.getCriticalCss)===null||E===void 0?void 0:E.call(g,r,u.pathname)):void 0;f=await dr(a,r,o,l,c,y,m)}return l.method==="HEAD"?new Response(null,{headers:f.headers,status:f.status,statusText:f.statusText}):f}};async function cr(e,t,r,n,a,o){try{let s=await t.queryRoute(n,{routeId:r,requestContext:a});if(Vt(s)){let i=new Headers(s.headers);return i.set("X-Remix-Redirect",i.get("Location")),i.set("X-Remix-Status",s.status),i.delete("Location"),s.headers.get("Set-Cookie")!==null&&i.set("X-Remix-Revalidate","yes"),new Response(null,{status:204,headers:i})}if(de in s){let i=s[de],l=qt(i,n.signal,e),c=i.init||{},u=new Headers(c.headers);return u.set("Content-Type","text/remix-deferred"),u.set("X-Remix-Response","yes"),c.headers=u,new Response(l,c)}return s.headers.set("X-Remix-Response","yes"),s}catch(s){if(D(s))return s.headers.set("X-Remix-Catch","yes"),s;if(A(s))return s&&o(s),Ue(s,e);let i=s instanceof Error||s instanceof DOMException?s:new Error("Unexpected Server Error");return o(i),G($(i,e),{status:500,headers:{"X-Remix-Error":"yes"}})}}async function dr(e,t,r,n,a,o,s){let i;try{i=await r.query(n,{requestContext:a})}catch(d){return o(d),new Response(null,{status:500})}if(D(i))return i;i.errors&&(Object.values(i.errors).forEach(d=>{(!A(d)||d.error)&&o(d)}),i.errors=ye(i.errors,e));let l=Yt(t,i),c={manifest:t.assets,routeModules:Jt(t.routes),staticHandlerContext:i,criticalCss:s,serverHandoffString:_e({url:i.location.pathname,criticalCss:s,state:{loaderData:i.loaderData,actionData:i.actionData,errors:ge(i.errors,e)},future:t.future,isSpaMode:t.isSpaMode}),future:t.future,isSpaMode:t.isSpaMode,serializeError:d=>$(d,e)},u=t.entry.module.default;try{return await u(n,i.statusCode,l,c,a)}catch(d){o(d);let y=d;if(D(d)){let f;try{let p=d.headers.get("Content-Type");p&&/\bapplication\/json\b/.test(p)?d.body==null?f=null:f=await d.json():f=await d.text(),y=new ot(d.status,d.statusText,f)}catch{}}i=st(r.dataRoutes,i,y),i.errors&&(i.errors=ye(i.errors,e)),c={...c,staticHandlerContext:i,serverHandoffString:_e({url:i.location.pathname,state:{loaderData:i.loaderData,actionData:i.actionData,errors:ge(i.errors,e)},future:t.future,isSpaMode:t.isSpaMode})};try{return await u(n,i.statusCode,l,c,a)}catch(f){return o(f),Fe(f,e)}}}async function fr(e,t,r,n,a,o){try{let s=await t.queryRoute(n,{routeId:r,requestContext:a});return Qt(D(s),"Expected a Response to be returned from queryRoute"),s}catch(s){return D(s)?(s.headers.set("X-Remix-Catch","yes"),s):A(s)?(s&&o(s),Ue(s,e)):(o(s),Fe(s,e))}}function Ue(e,t){return G($(e.error||new Error("Unexpected Server Error"),t),{status:e.status,statusText:e.statusText,headers:{"X-Remix-Error":"yes"}})}function Fe(e,t){let r="Unexpected Server Error";return t!==x.Production&&(r+=`

${String(e)}`),new Response(r,{status:500,headers:{"Content-Type":"text/plain"}})}/**
 * @remix-run/server-runtime v2.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function q(e){return`__flash_${e}__`}const te=(e={},t="")=>{let r=new Map(Object.entries(e));return{get id(){return t},get data(){return Object.fromEntries(r)},has(n){return r.has(n)||r.has(q(n))},get(n){if(r.has(n))return r.get(n);let a=q(n);if(r.has(a)){let o=r.get(a);return r.delete(a),o}},set(n,a){r.set(n,a)},flash(n,a){r.set(q(n),a)},unset(n){r.delete(n)}}},hr=e=>e!=null&&typeof e.id=="string"&&typeof e.data<"u"&&typeof e.has=="function"&&typeof e.get=="function"&&typeof e.set=="function"&&typeof e.flash=="function"&&typeof e.unset=="function",pr=e=>({cookie:t,createData:r,readData:n,updateData:a,deleteData:o})=>{let s=Y(t)?t:e((t==null?void 0:t.name)||"__session",t);return Le(s),{async getSession(i,l){let c=i&&await s.parse(i,l),u=c&&await n(c);return te(u||{},c||"")},async commitSession(i,l){let{id:c,data:u}=i,d=(l==null?void 0:l.maxAge)!=null?new Date(Date.now()+l.maxAge*1e3):(l==null?void 0:l.expires)!=null?l.expires:s.expires;return c?await a(c,u,d):c=await r(u,d),s.serialize(c,l)},async destroySession(i,l){return await o(i.id),s.serialize("",{...l,maxAge:void 0,expires:new Date(0)})}}};function Le(e){ke(e.isSigned,`The "${e.name}" cookie is not signed, but session cookies should be signed to prevent tampering on the client before they are sent back to the server. See https://remix.run/utils/cookies#signing-cookies for more information.`)}/**
 * @remix-run/server-runtime v2.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const mr=e=>({cookie:t}={})=>{let r=Y(t)?t:e((t==null?void 0:t.name)||"__session",t);return Le(r),{async getSession(n,a){return te(n&&await r.parse(n,a)||{})},async commitSession(n,a){let o=await r.serialize(n.data,a);if(o.length>4096)throw new Error("Cookie length will exceed browser maximum. Length: "+o.length);return o},async destroySession(n,a){return r.serialize("",{...a,maxAge:void 0,expires:new Date(0)})}}};/**
 * @remix-run/server-runtime v2.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const yr=e=>({cookie:t}={})=>{let r=new Map;return e({cookie:t,async createData(n,a){let o=Math.random().toString(36).substring(2,10);return r.set(o,{data:n,expires:a}),o},async readData(n){if(r.has(n)){let{data:a,expires:o}=r.get(n);if(!o||o>new Date)return a;o&&r.delete(n)}return null},async updateData(n,a,o){r.set(n,{data:a,expires:o})},async deleteData(n){r.delete(n)}})};/**
 * @remix-run/server-runtime v2.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */class $e extends Error{constructor(t,r){super(`Field "${t}" exceeded upload size of ${r} bytes.`),this.field=t,this.maxBytes=r}}/**
 * @remix-run/server-runtime v2.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gr({filter:e,maxPartSize:t=3e6}={}){return async({filename:r,contentType:n,name:a,data:o})=>{if(e&&!await e({filename:r,contentType:n,name:a}))return;let s=0,i=[];for await(let l of o){if(s+=l.byteLength,s>t)throw new $e(a,t);i.push(l)}return typeof r=="string"?new File(i,r,{type:n}):await new Blob(i,{type:n}).text()}}/**
 * @remix-run/server-runtime v2.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const wr=Object.freeze(Object.defineProperty({__proto__:null,MaxPartSizeExceededError:$e,broadcastDevReady:sr,createCookieFactory:bt,createCookieSessionStorageFactory:mr,createMemorySessionStorageFactory:yr,createRequestHandler:ur,createSession:te,createSessionStorageFactory:pr,defer:Ft,isCookie:Y,isSession:hr,json:ee,logDevReady:ir,redirect:De,redirectDocument:Lt,unstable_composeUploadHandlers:Pt,unstable_createMemoryUploadHandler:gr,unstable_parseMultipartFormData:It,unstable_setDevServerHooks:lr},Symbol.toStringTag,{value:"Module"}));function ve(e=""){const[t,r]=b.useState(e),[n,a]=b.useState(),[o,s]=b.useState(!1);return{value:t,error:n,onChange:u=>{r(u.target.value),s(!0),n&&u.target.checkValidity()&&a(null)},onBlur:u=>{o&&u.target.checkValidity()},onInvalid:u=>{u.preventDefault(),a(u.target.validationMessage)}}}const _r="_textarea_13d9g_3",br={textarea:_r},Sr=({className:e,resize:t="none",value:r,onChange:n,minRows:a=1,maxRows:o,...s})=>{const[i,l]=b.useState(a),[c,u]=b.useState(),d=b.useRef();b.useEffect(()=>{const f=getComputedStyle(d.current),p=parseInt(f.lineHeight,10),g=parseInt(f.paddingTop,10)+parseInt(f.paddingBottom,10);u({lineHeight:p,paddingHeight:g})},[]);const y=f=>{n(f);const{lineHeight:p,paddingHeight:g}=c,E=f.target.rows;f.target.rows=a;const m=~~((f.target.scrollHeight-g)/p);m===E&&(f.target.rows=m),o&&m>=o&&(f.target.rows=o,f.target.scrollTop=f.target.scrollHeight),l(o&&m>o?o:m)};return h.jsx("textarea",{className:Ce(br.textarea,e),ref:d,onChange:y,style:F({resize:t}),rows:i,value:r,...s})},vr="_container_17spy_3",xr="_content_17spy_31",Er="_input_17spy_41",Cr="_root_17spy_1",Rr="_underline_17spy_109",kr="_label_17spy_145",jr="_error_17spy_189",Dr="_errorMessage_17spy_221",j={container:vr,content:xr,input:Er,root:Cr,underline:Rr,label:kr,error:jr,errorMessage:Dr},J=({id:e,label:t,value:r,multiline:n,className:a,style:o,error:s,onBlur:i,autoComplete:l,required:c,maxLength:u,type:d,onChange:y,name:f,...p})=>{const[g,E]=b.useState(!1),m=b.useId(),S=b.useRef(),C=e||`${m}input`,oe=`${C}-label`,se=`${C}-error`,Xe=n?Sr:"input",qe=H=>{E(!1),i&&i(H)};return h.jsxs("div",{className:Ce(j.container,a),"data-error":!!s,style:o,...p,children:[h.jsxs("div",{className:j.content,children:[h.jsx("label",{className:j.label,"data-focused":g,"data-filled":!!r,id:oe,htmlFor:C,children:t}),h.jsx(Xe,{className:j.input,id:C,"aria-labelledby":oe,"aria-describedby":s?se:void 0,onFocus:()=>E(!0),onBlur:qe,value:r,onChange:y,autoComplete:l,required:c,maxLength:u,type:d,name:f}),h.jsx("div",{className:j.underline,"data-focused":g})]}),h.jsx(P,{unmount:!0,in:s,timeout:I(_.base.durationM),children:({visible:H,nodeRef:Je})=>{var ie;return h.jsx("div",{ref:Je,className:j.error,"data-visible":H,id:se,role:"alert",style:F({height:H?(ie=S.current)==null?void 0:ie.getBoundingClientRect().height:0}),children:h.jsxs("div",{className:j.errorMessage,ref:S,children:[h.jsx(Re,{icon:"error"}),s]})})}})]})};var Tr={},re={},T={};const ze=Ke(wr);var V={};/**
 * @remix-run/cloudflare v2.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */Object.defineProperty(V,"__esModule",{value:!0});const ne=new TextEncoder,Or=async(e,t)=>{let r=await Ve(t,["sign"]),n=ne.encode(e),a=await crypto.subtle.sign("HMAC",r,n),o=btoa(String.fromCharCode(...new Uint8Array(a))).replace(/=+$/,"");return e+"."+o},Mr=async(e,t)=>{let r=e.lastIndexOf("."),n=e.slice(0,r),a=e.slice(r+1),o=await Ve(t,["verify"]),s=ne.encode(n),i=Ar(atob(a));return await crypto.subtle.verify("HMAC",o,i,s)?n:!1};async function Ve(e,t){return await crypto.subtle.importKey("raw",ne.encode(e),{name:"HMAC",hash:"SHA-256"},!1,t)}function Ar(e){let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}V.sign=Or;V.unsign=Mr;/**
 * @remix-run/cloudflare v2.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */Object.defineProperty(T,"__esModule",{value:!0});var B=ze,xe=V;const ae=B.createCookieFactory({sign:xe.sign,unsign:xe.unsign}),Hr=B.createCookieSessionStorageFactory(ae),Be=B.createSessionStorageFactory(ae),Nr=B.createMemorySessionStorageFactory(Be);T.createCookie=ae;T.createCookieSessionStorage=Hr;T.createMemorySessionStorage=Nr;T.createSessionStorage=Be;/**
 * @remix-run/cloudflare v2.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */Object.defineProperty(re,"__esModule",{value:!0});var Pr=T;function Ir({cookie:e,kv:t}){return Pr.createSessionStorage({cookie:e,async createData(r,n){for(;;){let a=new Uint8Array(8);crypto.getRandomValues(a);let o=[...a].map(s=>s.toString(16).padStart(2,"0")).join("");if(!await t.get(o,"json"))return await t.put(o,JSON.stringify(r),{expiration:n?Math.round(n.getTime()/1e3):void 0}),o}},async readData(r){let n=await t.get(r);return n?JSON.parse(n):null},async updateData(r,n,a){await t.put(r,JSON.stringify(n),{expiration:a?Math.round(a.getTime()/1e3):void 0})},async deleteData(r){await t.delete(r)}})}re.createWorkersKVSessionStorage=Ir;/**
 * @remix-run/cloudflare v2.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=re,r=T,n=ze;e.createWorkersKVSessionStorage=t.createWorkersKVSessionStorage,e.createCookie=r.createCookie,e.createCookieSessionStorage=r.createCookieSessionStorage,e.createMemorySessionStorage=r.createMemorySessionStorage,e.createSessionStorage=r.createSessionStorage,Object.defineProperty(e,"MaxPartSizeExceededError",{enumerable:!0,get:function(){return n.MaxPartSizeExceededError}}),Object.defineProperty(e,"broadcastDevReady",{enumerable:!0,get:function(){return n.broadcastDevReady}}),Object.defineProperty(e,"createRequestHandler",{enumerable:!0,get:function(){return n.createRequestHandler}}),Object.defineProperty(e,"createSession",{enumerable:!0,get:function(){return n.createSession}}),Object.defineProperty(e,"defer",{enumerable:!0,get:function(){return n.defer}}),Object.defineProperty(e,"isCookie",{enumerable:!0,get:function(){return n.isCookie}}),Object.defineProperty(e,"isSession",{enumerable:!0,get:function(){return n.isSession}}),Object.defineProperty(e,"json",{enumerable:!0,get:function(){return n.json}}),Object.defineProperty(e,"logDevReady",{enumerable:!0,get:function(){return n.logDevReady}}),Object.defineProperty(e,"redirect",{enumerable:!0,get:function(){return n.redirect}}),Object.defineProperty(e,"redirectDocument",{enumerable:!0,get:function(){return n.redirectDocument}}),Object.defineProperty(e,"unstable_composeUploadHandlers",{enumerable:!0,get:function(){return n.unstable_composeUploadHandlers}}),Object.defineProperty(e,"unstable_createMemoryUploadHandler",{enumerable:!0,get:function(){return n.unstable_createMemoryUploadHandler}}),Object.defineProperty(e,"unstable_parseMultipartFormData",{enumerable:!0,get:function(){return n.unstable_parseMultipartFormData}})})(Tr);const Ur="_contact_1p6je_1",Fr="_form_1p6je_35",Lr="_title_1p6je_59",$r="_divider_1p6je_119",zr="_input_1p6je_195",Vr="_botkiller_1p6je_279",Br="_button_1p6je_287",Xr="_complete_1p6je_407",qr="_completeTitle_1p6je_429",Jr="_completeText_1p6je_467",Kr="_completeButton_1p6je_505",Wr="_formError_1p6je_557",Gr="_formErrorContent_1p6je_581",Yr="_formErrorMessage_1p6je_589",Qr="_formErrorIcon_1p6je_605",Zr="_footer_1p6je_615",w={contact:Ur,form:Fr,title:Lr,divider:$r,input:zr,botkiller:Vr,button:Br,complete:Xr,completeTitle:qr,completeText:Jr,completeButton:Kr,formError:Wr,formErrorContent:Gr,formErrorMessage:Yr,formErrorIcon:Qr,footer:Zr},dn=()=>Qe({title:"Contact",description:"Send me a message if you’re interested in discussing a project or if you just want to say hi"}),Ee=512,en=4096,fn=()=>{const e=b.useRef(),t=ve(""),r=ve(""),n=_.base.durationS,a=lt(),{state:o}=ut(),s=o==="submitting";return h.jsxs(Ze,{className:w.contact,children:[h.jsx(P,{unmount:!0,in:!(a!=null&&a.success),timeout:1600,children:({status:i,nodeRef:l})=>h.jsxs(ct,{unstable_viewTransition:!0,className:w.form,method:"post",ref:l,children:[h.jsx(le,{className:w.title,"data-status":i,level:3,as:"h1",style:R(_.base.durationXS,n,.3),children:h.jsx(Ge,{text:"Say hello",start:i!=="exited",delay:300})}),h.jsx(Ye,{className:w.divider,"data-status":i,style:R(_.base.durationXS,n,.4)}),h.jsx(J,{required:!0,className:w.name,style:R(_.base.durationS,n),label:"Name",name:"name",maxLength:Ee}),h.jsx(J,{required:!0,className:w.input,"data-status":i,style:R(_.base.durationXS,n),autoComplete:"email",label:"Your email",type:"email",name:"email",maxLength:Ee,...t}),h.jsx(J,{required:!0,multiline:!0,className:w.input,"data-status":i,style:R(_.base.durationS,n),autoComplete:"off",label:"Message",name:"message",maxLength:en,...r}),h.jsx(P,{unmount:!0,in:!s&&(a==null?void 0:a.errors),timeout:I(_.base.durationM),children:({status:c,nodeRef:u})=>{var d,y,f;return h.jsx("div",{className:w.formError,ref:u,"data-status":c,style:F({height:c?(d=e.current)==null?void 0:d.offsetHeight:0}),children:h.jsx("div",{className:w.formErrorContent,ref:e,children:h.jsxs("div",{className:w.formErrorMessage,children:[h.jsx(Re,{className:w.formErrorIcon,icon:"error"}),(y=a==null?void 0:a.errors)==null?void 0:y.email,(f=a==null?void 0:a.errors)==null?void 0:f.message]})})})}}),h.jsx(ue,{className:w.button,"data-status":i,"data-sending":s,style:R(_.base.durationM,n),disabled:s,loading:s,loadingText:"Sending...",icon:"send",type:"submit",children:"Send message"})]})}),h.jsx(P,{unmount:!0,in:a==null?void 0:a.success,children:({status:i,nodeRef:l})=>h.jsxs("div",{className:w.complete,"aria-live":"polite",ref:l,children:[h.jsx(le,{level:3,as:"h3",className:w.completeTitle,"data-status":i,children:"Message Sent"}),h.jsx(We,{size:"l",as:"p",className:w.completeText,"data-status":i,style:R(_.base.durationXS),children:"I’ll get back to you within a couple days, sit tight"}),h.jsx(ue,{secondary:!0,iconHoverShift:!0,className:w.completeButton,"data-status":i,style:R(_.base.durationM),href:"/",icon:"chevron-right",children:"Back to homepage"})]})}),h.jsx(et,{className:w.footer})]})};function R(e,t=ce(0),r=1){const n=I(e)*r;return F({delay:ce((I(t)+n).toFixed(0))})}export{fn as default,dn as meta};
