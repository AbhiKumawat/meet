import{r as b,j as h,b as We}from"./jsx-runtime-DexIYAB0.js";import{c as Ce,a as F,b as P,m as I,t as _,I as ke,H as ue,B as ce,T as Ge,n as de}from"./heading-CJXtzdWm.js";import{D as Ye}from"./decoder-text-CnA3CfMx.js";import{D as Qe}from"./divider-DfYM0cK6.js";import{b as Ze,S as et,F as tt}from"./section-BtIj0eKx.js";import{i as A,w as Y,x as rt,r as nt,y as at,m as st,z as ot,U as K,E as it,B as lt,C as ut,F as ct,s as dt,G as ft}from"./components-C0b2Aiyh.js";import"./visually-hidden-e-VX72-f.js";import"./use-spring-C7KgUGBW.js";import"./config-d3RGDddI.js";/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var ht=yt,mt=gt,pt=Object.prototype.toString,N=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function yt(e,t){if(typeof e!="string")throw new TypeError("argument str must be a string");for(var r={},n=t||{},a=n.decode||wt,s=0;s<e.length;){var o=e.indexOf("=",s);if(o===-1)break;var i=e.indexOf(";",s);if(i===-1)i=e.length;else if(i<o){s=e.lastIndexOf(";",o-1)+1;continue}var l=e.slice(s,o).trim();if(r[l]===void 0){var u=e.slice(o+1,i).trim();u.charCodeAt(0)===34&&(u=u.slice(1,-1)),r[l]=St(u,a)}s=i+1}return r}function gt(e,t,r){var n=r||{},a=n.encode||_t;if(typeof a!="function")throw new TypeError("option encode is invalid");if(!N.test(e))throw new TypeError("argument name is invalid");var s=a(t);if(s&&!N.test(s))throw new TypeError("argument val is invalid");var o=e+"="+s;if(n.maxAge!=null){var i=n.maxAge-0;if(isNaN(i)||!isFinite(i))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(i)}if(n.domain){if(!N.test(n.domain))throw new TypeError("option domain is invalid");o+="; Domain="+n.domain}if(n.path){if(!N.test(n.path))throw new TypeError("option path is invalid");o+="; Path="+n.path}if(n.expires){var l=n.expires;if(!bt(l)||isNaN(l.valueOf()))throw new TypeError("option expires is invalid");o+="; Expires="+l.toUTCString()}if(n.httpOnly&&(o+="; HttpOnly"),n.secure&&(o+="; Secure"),n.partitioned&&(o+="; Partitioned"),n.priority){var u=typeof n.priority=="string"?n.priority.toLowerCase():n.priority;switch(u){case"low":o+="; Priority=Low";break;case"medium":o+="; Priority=Medium";break;case"high":o+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(n.sameSite){var c=typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite;switch(c){case!0:o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"strict":o+="; SameSite=Strict";break;case"none":o+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return o}function wt(e){return e.indexOf("%")!==-1?decodeURIComponent(e):e}function _t(e){return encodeURIComponent(e)}function bt(e){return pt.call(e)==="[object Date]"||e instanceof Date}function St(e,t){try{return t(e)}catch{return e}}/**
 * @remix-run/server-runtime v2.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const fe={};function je(e,t){!e&&!fe[t]&&(fe[t]=!0,console.warn(t))}/**
 * @remix-run/server-runtime v2.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const vt=({sign:e,unsign:t})=>(r,n={})=>{let{secrets:a=[],...s}={path:"/",sameSite:"lax",...n};return jt(r,s.expires),{get name(){return r},get isSigned(){return a.length>0},get expires(){return typeof s.maxAge<"u"?new Date(Date.now()+s.maxAge*1e3):s.expires},async parse(o,i){if(!o)return null;let l=ht(o,{...s,...i});return r in l?l[r]===""?"":await Et(t,l[r],a):null},async serialize(o,i){return mt(r,o===""?"":await xt(e,o,a),{...s,...i})}}},Q=e=>e!=null&&typeof e.name=="string"&&typeof e.isSigned=="boolean"&&typeof e.parse=="function"&&typeof e.serialize=="function";async function xt(e,t,r){let n=Rt(t);return r.length>0&&(n=await e(n,r[0])),n}async function Et(e,t,r){if(r.length>0){for(let n of r){let a=await e(t,n);if(a!==!1)return he(a)}return null}return he(t)}function Rt(e){return btoa(kt(encodeURIComponent(JSON.stringify(e))))}function he(e){try{return JSON.parse(decodeURIComponent(Ct(atob(e))))}catch{return{}}}function Ct(e){let t=e.toString(),r="",n=0,a,s;for(;n<t.length;)a=t.charAt(n++),/[\w*+\-./@]/.exec(a)?r+=a:(s=a.charCodeAt(0),s<256?r+="%"+me(s,2):r+="%u"+me(s,4).toUpperCase());return r}function me(e,t){let r=e.toString(16);for(;r.length<t;)r="0"+r;return r}function kt(e){let t=e.toString(),r="",n=0,a,s;for(;n<t.length;){if(a=t.charAt(n++),a==="%"){if(t.charAt(n)==="u"){if(s=t.slice(n+1,n+5),/^[\da-f]{4}$/i.exec(s)){r+=String.fromCharCode(parseInt(s,16)),n+=5;continue}}else if(s=t.slice(n,n+2),/^[\da-f]{2}$/i.exec(s)){r+=String.fromCharCode(parseInt(s,16)),n+=2;continue}}r+=a}return r}function jt(e,t){je(!t,`The "${e}" cookie has an "expires" property set. This will cause the expires value to not be updated when the session is committed. Instead, you should set the expires value when serializing the cookie. You can use \`commitSession(session, { expires })\` if using a session storage object, or \`cookie.serialize("value", { expires })\` if you're using the cookie directly.`)}function L(e){const t=unescape(encodeURIComponent(e));return Uint8Array.from(t,(r,n)=>t.charCodeAt(n))}function Dt(e){const t=String.fromCharCode.apply(null,e);return decodeURIComponent(escape(t))}function U(...e){const t=new Uint8Array(e.reduce((n,a)=>n+a.length,0));let r=0;for(const n of e)t.set(n,r),r+=n.length;return t}function Tt(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}function pe(e){return e instanceof Uint8Array?t=>e[t]:e}function X(e,t,r,n,a){const s=pe(e),o=pe(r);for(let i=0;i<a;++i)if(s(t+i)!==o(n+i))return!1;return!0}function Ot(e){const t=new Array(256).fill(e.length);if(e.length>1)for(let r=0;r<e.length-1;r++)t[e[r]]=e.length-1-r;return t}const v=Symbol("Match");class Z{constructor(t){this._lookbehind=new Uint8Array,typeof t=="string"?this._needle=t=L(t):this._needle=t,this._lastChar=t[t.length-1],this._occ=Ot(t)}feed(t){let r=0,n;const a=[];for(;r!==t.length;)[r,...n]=this._feed(t,r),a.push(...n);return a}end(){const t=this._lookbehind;return this._lookbehind=new Uint8Array,t}_feed(t,r){const n=[];let a=-this._lookbehind.length;if(a<0){for(;a<0&&a<=t.length-this._needle.length;){const s=this._charAt(t,a+this._needle.length-1);if(s===this._lastChar&&this._memcmp(t,a,this._needle.length-1))return a>-this._lookbehind.length&&n.push(this._lookbehind.slice(0,this._lookbehind.length+a)),n.push(v),this._lookbehind=new Uint8Array,[a+this._needle.length,...n];a+=this._occ[s]}if(a<0)for(;a<0&&!this._memcmp(t,a,t.length-a);)a++;if(a>=0)n.push(this._lookbehind),this._lookbehind=new Uint8Array;else{const s=this._lookbehind.length+a;return s>0&&(n.push(this._lookbehind.slice(0,s)),this._lookbehind=this._lookbehind.slice(s)),this._lookbehind=Uint8Array.from(new Array(this._lookbehind.length+t.length),(o,i)=>this._charAt(t,i-this._lookbehind.length)),[t.length,...n]}}for(a+=r;a<=t.length-this._needle.length;){const s=t[a+this._needle.length-1];if(s===this._lastChar&&t[a]===this._needle[0]&&X(this._needle,0,t,a,this._needle.length-1))return a>r&&n.push(t.slice(r,a)),n.push(v),[a+this._needle.length,...n];a+=this._occ[s]}if(a<t.length){for(;a<t.length&&(t[a]!==this._needle[0]||!X(t,a,this._needle,0,t.length-a));)++a;a<t.length&&(this._lookbehind=t.slice(a))}return a>0&&n.push(t.slice(r,a<t.length?a:t.length)),[t.length,...n]}_charAt(t,r){return r<0?this._lookbehind[this._lookbehind.length+r]:t[r]}_memcmp(t,r,n){return X(this._charAt.bind(this,t),r,this._needle,0,n)}}class Mt{constructor(t,r){this._readableStream=r,this._search=new Z(t)}async*[Symbol.asyncIterator](){const t=this._readableStream.getReader();try{for(;;){const n=await t.read();if(n.done)break;yield*this._search.feed(n.value)}const r=this._search.end();r.length&&(yield r)}finally{t.releaseLock()}}}const At=Function.prototype.apply.bind(U,void 0),De=L("--"),M=L(`\r
`);function Ht(e){const t=e.split(";").map(n=>n.trim());if(t.shift()!=="form-data")throw new Error('malformed content-disposition header: missing "form-data" in `'+JSON.stringify(t)+"`");const r={};for(const n of t){const a=n.split("=",2);if(a.length!==2)throw new Error("malformed content-disposition header: key-value pair not found - "+n+" in `"+e+"`");const[s,o]=a;if(o[0]==='"'&&o[o.length-1]==='"')r[s]=o.slice(1,-1).replace(/\\"/g,'"');else if(o[0]!=='"'&&o[o.length-1]!=='"')r[s]=o;else if(o[0]==='"'&&o[o.length-1]!=='"'||o[0]!=='"'&&o[o.length-1]==='"')throw new Error("malformed content-disposition header: mismatched quotations in `"+e+"`")}if(!r.name)throw new Error("malformed content-disposition header: missing field name in `"+e+"`");return r}function Nt(e){const t=[];let r=!1,n;for(;typeof(n=e.shift())<"u";){const a=n.indexOf(":");if(a===-1)throw new Error("malformed multipart-form header: missing colon");const s=n.slice(0,a).trim().toLowerCase(),o=n.slice(a+1).trim();switch(s){case"content-disposition":r=!0,t.push(...Object.entries(Ht(o)));break;case"content-type":t.push(["contentType",o])}}if(!r)throw new Error("malformed multipart-form header: missing content-disposition");return Object.fromEntries(t)}async function Pt(e,t){let r=!0,n=!1;const a=[[]],s=new Z(M);for(;;){const o=await e.next();if(o.done)throw new Error("malformed multipart-form data: unexpected end of stream");if(r&&o.value!==v&&Tt(o.value.slice(0,2),De))return[void 0,new Uint8Array];let i;if(o.value!==v)i=o.value;else if(!n)i=t;else throw new Error("malformed multipart-form data: unexpected boundary");if(!i.length)continue;r&&(r=!1);const l=s.feed(i);for(const[u,c]of l.entries()){const d=c===v;if(!(!d&&!c.length)){if(n&&d)return l.push(s.end()),[a.filter(y=>y.length).map(At).map(Dt),U(...l.slice(u+1).map(y=>y===v?M:y))];(n=d)?a.push([]):a[a.length-1].push(c)}}}}async function*It(e,t){const r=U(De,L(t)),n=new Mt(r,e)[Symbol.asyncIterator]();for(;;){const s=await n.next();if(s.done)return;if(s.value===v)break}const a=new Z(M);for(;;){let u=function(f){const m=[];for(const g of a.feed(f))l&&m.push(M),(l=g===v)||m.push(g);return U(...m)};const[s,o]=await Pt(n,r);if(!s)return;async function i(){const f=await n.next();if(f.done)throw new Error("malformed multipart-form data: unexpected end of stream");return f}let l=!1,c=!1;async function d(){const f=await i();let m;if(f.value!==v)m=f.value;else if(!l)m=M;else return c=!0,{value:a.end()};return{value:u(m)}}const y=[{value:u(o)}];for(yield{...Nt(s),data:{[Symbol.asyncIterator](){return this},async next(){for(;;){const f=y.shift();if(!f)break;if(f.value.length>0)return f}for(;;){if(c)return{done:c,value:void 0};const f=await d();if(f.value.length>0)return f}}}};!c;)y.push(await d())}}/**
 * @remix-run/server-runtime v2.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ut(...e){return async t=>{for(let r of e){let n=await r(t);if(typeof n<"u"&&n!==null)return n}}}async function Ft(e,t){let r=e.headers.get("Content-Type")||"",[n,a]=r.split(/\s*;\s*boundary=/);if(!e.body||!a||n!=="multipart/form-data")throw new TypeError("Could not parse content as FormData.");let s=new FormData,o=It(e.body,a);for await(let i of o){if(i.done)break;typeof i.filename=="string"&&(i.filename=i.filename.split(/[/\\]/).pop());let l=await t(i);typeof l<"u"&&l!==null&&s.append(i.name,l)}return s}/**
 * @remix-run/server-runtime v2.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let x=function(e){return e.Development="development",e.Production="production",e.Test="test",e}({});function Lt(e){return e===x.Development||e===x.Production||e===x.Test}/**
 * @remix-run/server-runtime v2.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ee(e,t){if(e instanceof Error&&t!==x.Development){let r=new Error("Unexpected Server Error");return r.stack=void 0,r}return e}function ye(e,t){return Object.entries(e).reduce((r,[n,a])=>Object.assign(r,{[n]:ee(a,t)}),{})}function $(e,t){let r=ee(e,t);return{message:r.message,stack:r.stack}}function ge(e,t){if(!e)return null;let r=Object.entries(e),n={};for(let[a,s]of r)if(A(s))n[a]={...s,__type:"RouteErrorResponse"};else if(s instanceof Error){let o=ee(s,t);n[a]={message:o.message,stack:o.stack,__type:"Error",...o.name!=="Error"?{__subType:o.name}:{}}}else n[a]=s;return n}/**
 * @remix-run/server-runtime v2.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const te=(e,t={})=>Y(e,t),$t=(e,t={})=>rt(e,t),Te=(e,t=302)=>nt(e,t),zt=(e,t=302)=>at(e,t);function Vt(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function D(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}const Bt=new Set([301,302,303,307,308]);function Oe(e){return Bt.has(e)}function Xt(e){return Oe(e.status)}function qt(e){return e!=null&&typeof e.then=="function"&&e._tracked===!0}const Jt="__deferred_promise:";function Kt(e,t,r){let n=new TextEncoder;return new ReadableStream({async start(s){let o={},i=[];for(let[u,c]of Object.entries(e.data))qt(c)?(o[u]=`${Jt}${u}`,(typeof c._data<"u"||typeof c._error<"u")&&i.push(u)):o[u]=c;s.enqueue(n.encode(JSON.stringify(o)+`

`));for(let u of i)we(s,n,u,e.data[u],r);let l=e.subscribe((u,c)=>{c&&we(s,n,c,e.data[c],r)});await e.resolveData(t),l(),s.close()}})}function we(e,t,r,n,a){"_error"in n?e.enqueue(t.encode("error:"+JSON.stringify({[r]:n._error instanceof Error?$(n._error,a):n._error})+`

`)):e.enqueue(t.encode("data:"+JSON.stringify({[r]:n._data??null})+`

`))}/**
 * @remix-run/server-runtime v2.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wt(e){return Object.keys(e).reduce((t,r)=>(t[r]=e[r].module,t),{})}var z={exports:{}},O={decodeValues:!0,map:!1,silent:!1};function W(e){return typeof e=="string"&&!!e.trim()}function G(e,t){var r=e.split(";").filter(W),n=r.shift(),a=Gt(n),s=a.name,o=a.value;t=t?Object.assign({},O,t):O;try{o=t.decodeValues?decodeURIComponent(o):o}catch(l){console.error("set-cookie-parser encountered an error while decoding a cookie with value '"+o+"'. Set options.decodeValues to false to disable this feature.",l)}var i={name:s,value:o};return r.forEach(function(l){var u=l.split("="),c=u.shift().trimLeft().toLowerCase(),d=u.join("=");c==="expires"?i.expires=new Date(d):c==="max-age"?i.maxAge=parseInt(d,10):c==="secure"?i.secure=!0:c==="httponly"?i.httpOnly=!0:c==="samesite"?i.sameSite=d:i[c]=d}),i}function Gt(e){var t="",r="",n=e.split("=");return n.length>1?(t=n.shift(),r=n.join("=")):r=e,{name:t,value:r}}function Me(e,t){if(t=t?Object.assign({},O,t):O,!e)return t.map?{}:[];if(e.headers)if(typeof e.headers.getSetCookie=="function")e=e.headers.getSetCookie();else if(e.headers["set-cookie"])e=e.headers["set-cookie"];else{var r=e.headers[Object.keys(e.headers).find(function(a){return a.toLowerCase()==="set-cookie"})];!r&&e.headers.cookie&&!t.silent&&console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."),e=r}if(Array.isArray(e)||(e=[e]),t=t?Object.assign({},O,t):O,t.map){var n={};return e.filter(W).reduce(function(a,s){var o=G(s,t);return a[o.name]=o,a},n)}else return e.filter(W).map(function(a){return G(a,t)})}function Yt(e){if(Array.isArray(e))return e;if(typeof e!="string")return[];var t=[],r=0,n,a,s,o,i;function l(){for(;r<e.length&&/\s/.test(e.charAt(r));)r+=1;return r<e.length}function u(){return a=e.charAt(r),a!=="="&&a!==";"&&a!==","}for(;r<e.length;){for(n=r,i=!1;l();)if(a=e.charAt(r),a===","){for(s=r,r+=1,l(),o=r;r<e.length&&u();)r+=1;r<e.length&&e.charAt(r)==="="?(i=!0,r=o,t.push(e.substring(n,s)),n=r):r=s+1}else r+=1;(!i||r>=e.length)&&t.push(e.substring(n,e.length))}return t}z.exports=Me;z.exports.parse=Me;z.exports.parseString=G;var Qt=z.exports.splitCookiesString=Yt;/**
 * @remix-run/server-runtime v2.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zt(e,t){let r=t.errors?t.matches.findIndex(s=>t.errors[s.route.id]):-1,n=r>=0?t.matches.slice(0,r+1):t.matches,a;if(r>=0){let{actionHeaders:s,actionData:o,loaderHeaders:i,loaderData:l}=t;t.matches.slice(r).some(u=>{let c=u.route.id;return s[c]&&(!o||o[c]===void 0)?a=s[c]:i[c]&&l[c]===void 0&&(a=i[c]),a!=null})}return n.reduce((s,o,i)=>{let{id:l}=o.route,u=e.routes[l].module,c=t.loaderHeaders[l]||new Headers,d=t.actionHeaders[l]||new Headers,y=a!=null&&i===n.length-1,f=y&&a!==c&&a!==d;if(u.headers==null){let g=new Headers(s);return f&&k(a,g),k(d,g),k(c,g),g}let m=new Headers(u.headers?typeof u.headers=="function"?u.headers({loaderHeaders:c,parentHeaders:s,actionHeaders:d,errorHeaders:y?a:void 0}):u.headers:void 0);return f&&k(a,m),k(d,m),k(c,m),k(s,m),m},new Headers)}function k(e,t){let r=e.get("Set-Cookie");r&&Qt(r).forEach(a=>{t.append("Set-Cookie",a)})}/**
 * @remix-run/server-runtime v2.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _e(e,t){if(e===!1||e===null||typeof e>"u")throw console.error("The following error is a bug in Remix; please open an issue! https://github.com/remix-run/remix/issues/new"),new Error(t)}/**
 * @remix-run/server-runtime v2.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function er(e,t,r){let n=st(e,t,r);return n?n.map(a=>({params:a.params,pathname:a.pathname,route:a.route})):null}/**
 * @remix-run/server-runtime v2.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */async function tr({loadContext:e,action:t,params:r,request:n,routeId:a}){let s=await t({request:He(Ae(n)),context:e,params:r});if(s===void 0)throw new Error(`You defined an action for route "${a}" but didn't return anything from your \`action\` function. Please return a value or \`null\`.`);return D(s)?s:te(s)}async function rr({loadContext:e,loader:t,params:r,request:n,routeId:a}){let s=await t({request:He(Ae(n)),context:e,params:r});if(s===void 0)throw new Error(`You defined a loader for route "${a}" but didn't return anything from your \`loader\` function. Please return a value or \`null\`.`);return Vt(s)?s.init&&Oe(s.init.status||200)?Te(new Headers(s.init.headers).get("Location"),s.init):s:D(s)?s:te(s)}function Ae(e){let t=new URL(e.url),r=t.searchParams.getAll("index");t.searchParams.delete("index");let n=[];for(let s of r)s&&n.push(s);for(let s of n)t.searchParams.append("index",s);let a={method:e.method,body:e.body,headers:e.headers,signal:e.signal};return a.body&&(a.duplex="half"),new Request(t.href,a)}function He(e){let t=new URL(e.url);t.searchParams.delete("_data");let r={method:e.method,body:e.body,headers:e.headers,signal:e.signal};return r.body&&(r.duplex="half"),new Request(t.href,r)}/**
 * @remix-run/server-runtime v2.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ne(e){let t={};return Object.values(e).forEach(r=>{let n=r.parentId||"";t[n]||(t[n]=[]),t[n].push(r)}),t}function Pe(e,t="",r=Ne(e)){return(r[t]||[]).map(n=>({...n,children:Pe(e,n.id,r)}))}function Ie(e,t,r="",n=Ne(e)){return(n[r]||[]).map(a=>{let s={hasErrorBoundary:a.id==="root"||a.module.ErrorBoundary!=null,id:a.id,path:a.path,loader:a.module.loader?o=>rr({request:o.request,params:o.params,loadContext:o.context,loader:a.module.loader,routeId:a.id}):void 0,action:a.module.action?o=>tr({request:o.request,params:o.params,loadContext:o.context,action:a.module.action,routeId:a.id}):void 0,handle:a.module.handle};return a.index?{index:!0,...s}:{caseSensitive:a.caseSensitive,children:Ie(e,t,a.id,n),...s}})}/**
 * @remix-run/server-runtime v2.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const nr={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},ar=/[&><\u2028\u2029]/g;function sr(e){return e.replace(ar,t=>nr[t])}/**
 * @remix-run/server-runtime v2.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function be(e){return sr(JSON.stringify(e))}var or={};/**
 * @remix-run/server-runtime v2.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */async function ir(e,t){if(t??(t=or.REMIX_DEV_ORIGIN),!t)throw Error("Dev server origin not set");let r=new URL(t);r.pathname="ping";let n=await fetch(r.href,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({buildHash:e.assets.version})}).catch(a=>{throw console.error(`Could not reach Remix dev server at ${r}`),a});if(!n.ok)throw console.error(`Could not reach Remix dev server at ${r} (${n.status})`),Error(await n.text())}function lr(e){console.log(`[REMIX DEV] ${e.assets.version} ready`)}const Ue="__remix_devServerHooks";function ur(e){globalThis[Ue]=e}function Se(){return globalThis[Ue]}/**
 * @remix-run/server-runtime v2.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ve(e,t){var r,n;let a=Pe(e.routes),s=Ie(e.routes,e.future),o=Lt(t)?t:x.Production,i=ut(s,{basename:e.basename,future:{v7_relativeSplatPath:((r=e.future)===null||r===void 0?void 0:r.v3_relativeSplatPath)===!0,v7_throwAbortReason:((n=e.future)===null||n===void 0?void 0:n.v3_throwAbortReason)===!0}}),l=e.entry.module.handleError||((u,{request:c})=>{o!==x.Test&&!c.signal.aborted&&console.error(A(u)&&u.error?u.error:u)});return{routes:a,dataRoutes:s,serverMode:o,staticHandler:i,errorHandler:l}}const cr=(e,t)=>{let r,n,a,s,o;return async function(l,u={}){if(r=typeof e=="function"?await e():e,t??(t=r.mode),typeof e=="function"){let p=ve(r,t);n=p.routes,a=p.serverMode,s=p.staticHandler,o=p.errorHandler}else if(!n||!a||!s||!o){let p=ve(r,t);n=p.routes,a=p.serverMode,s=p.staticHandler,o=p.errorHandler}let c=new URL(l.url),d=er(n,c.pathname,r.basename),y=p=>{if(t===x.Development){var S,R;(S=Se())===null||S===void 0||(R=S.processRequestError)===null||R===void 0||R.call(S,p)}o(p,{context:u,params:d&&d.length>0?d[0].params:{},request:l})},f;if(c.searchParams.has("_data")){let p=c.searchParams.get("_data");if(f=await dr(a,r,s,p,l,u,y),r.entry.module.handleDataRequest){var m;f=await r.entry.module.handleDataRequest(f,{context:u,params:(d==null||(m=d.find(S=>S.route.id==p))===null||m===void 0?void 0:m.params)||{},request:l})}}else if(d&&d[d.length-1].route.module.default==null&&d[d.length-1].route.module.ErrorBoundary==null)f=await hr(a,s,d.slice(-1)[0].route.id,l,u,y);else{var g,E;let p=t===x.Development?await((g=Se())===null||g===void 0||(E=g.getCriticalCss)===null||E===void 0?void 0:E.call(g,r,c.pathname)):void 0;f=await fr(a,r,s,l,u,y,p)}return l.method==="HEAD"?new Response(null,{headers:f.headers,status:f.status,statusText:f.statusText}):f}};async function dr(e,t,r,n,a,s,o){try{let i=await r.queryRoute(a,{routeId:n,requestContext:s});if(Xt(i)){let l=new Headers(i.headers),u=l.get("Location");return l.set("X-Remix-Redirect",t.basename&&ot(u,t.basename)||u),l.set("X-Remix-Status",i.status),l.delete("Location"),i.headers.get("Set-Cookie")!==null&&l.set("X-Remix-Revalidate","yes"),new Response(null,{status:204,headers:l})}if(K in i){let l=i[K],u=Kt(l,a.signal,e),c=l.init||{},d=new Headers(c.headers);return d.set("Content-Type","text/remix-deferred"),d.set("X-Remix-Response","yes"),c.headers=d,new Response(u,c)}return i.headers.set("X-Remix-Response","yes"),i}catch(i){if(D(i))return i.headers.set("X-Remix-Catch","yes"),i;if(A(i))return i&&o(i),Fe(i,e);let l=i instanceof Error||i instanceof DOMException?i:new Error("Unexpected Server Error");return o(l),Y($(l,e),{status:500,headers:{"X-Remix-Error":"yes"}})}}async function fr(e,t,r,n,a,s,o){let i;try{i=await r.query(n,{requestContext:a})}catch(d){return s(d),new Response(null,{status:500})}if(D(i))return i;i.errors&&(Object.values(i.errors).forEach(d=>{(!A(d)||d.error)&&s(d)}),i.errors=ye(i.errors,e));let l=Zt(t,i),u={manifest:t.assets,routeModules:Wt(t.routes),staticHandlerContext:i,criticalCss:o,serverHandoffString:be({url:i.location.pathname,basename:t.basename,criticalCss:o,state:{loaderData:i.loaderData,actionData:i.actionData,errors:ge(i.errors,e)},future:t.future,isSpaMode:t.isSpaMode}),future:t.future,isSpaMode:t.isSpaMode,serializeError:d=>$(d,e)},c=t.entry.module.default;try{return await c(n,i.statusCode,l,u,a)}catch(d){s(d);let y=d;if(D(d)){let f;try{let m=d.headers.get("Content-Type");m&&/\bapplication\/json\b/.test(m)?d.body==null?f=null:f=await d.json():f=await d.text(),y=new it(d.status,d.statusText,f)}catch{}}i=lt(r.dataRoutes,i,y),i.errors&&(i.errors=ye(i.errors,e)),u={...u,staticHandlerContext:i,serverHandoffString:be({url:i.location.pathname,basename:t.basename,state:{loaderData:i.loaderData,actionData:i.actionData,errors:ge(i.errors,e)},future:t.future,isSpaMode:t.isSpaMode})};try{return await c(n,i.statusCode,l,u,a)}catch(f){return s(f),Le(f,e)}}}async function hr(e,t,r,n,a,s){try{let o=await t.queryRoute(n,{routeId:r,requestContext:a});return _e(!(K in o),`You cannot return a \`defer()\` response from a Resource Route.  Did you forget to export a default UI component from the "${r}" route?`),_e(D(o),"Expected a Response to be returned from queryRoute"),o}catch(o){return D(o)?(o.headers.set("X-Remix-Catch","yes"),o):A(o)?(o&&s(o),Fe(o,e)):(s(o),Le(o,e))}}function Fe(e,t){return Y($(e.error||new Error("Unexpected Server Error"),t),{status:e.status,statusText:e.statusText,headers:{"X-Remix-Error":"yes"}})}function Le(e,t){let r="Unexpected Server Error";return t!==x.Production&&(r+=`

${String(e)}`),new Response(r,{status:500,headers:{"Content-Type":"text/plain"}})}/**
 * @remix-run/server-runtime v2.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function q(e){return`__flash_${e}__`}const re=(e={},t="")=>{let r=new Map(Object.entries(e));return{get id(){return t},get data(){return Object.fromEntries(r)},has(n){return r.has(n)||r.has(q(n))},get(n){if(r.has(n))return r.get(n);let a=q(n);if(r.has(a)){let s=r.get(a);return r.delete(a),s}},set(n,a){r.set(n,a)},flash(n,a){r.set(q(n),a)},unset(n){r.delete(n)}}},mr=e=>e!=null&&typeof e.id=="string"&&typeof e.data<"u"&&typeof e.has=="function"&&typeof e.get=="function"&&typeof e.set=="function"&&typeof e.flash=="function"&&typeof e.unset=="function",pr=e=>({cookie:t,createData:r,readData:n,updateData:a,deleteData:s})=>{let o=Q(t)?t:e((t==null?void 0:t.name)||"__session",t);return $e(o),{async getSession(i,l){let u=i&&await o.parse(i,l),c=u&&await n(u);return re(c||{},u||"")},async commitSession(i,l){let{id:u,data:c}=i,d=(l==null?void 0:l.maxAge)!=null?new Date(Date.now()+l.maxAge*1e3):(l==null?void 0:l.expires)!=null?l.expires:o.expires;return u?await a(u,c,d):u=await r(c,d),o.serialize(u,l)},async destroySession(i,l){return await s(i.id),o.serialize("",{...l,maxAge:void 0,expires:new Date(0)})}}};function $e(e){je(e.isSigned,`The "${e.name}" cookie is not signed, but session cookies should be signed to prevent tampering on the client before they are sent back to the server. See https://remix.run/utils/cookies#signing-cookies for more information.`)}/**
 * @remix-run/server-runtime v2.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const yr=e=>({cookie:t}={})=>{let r=Q(t)?t:e((t==null?void 0:t.name)||"__session",t);return $e(r),{async getSession(n,a){return re(n&&await r.parse(n,a)||{})},async commitSession(n,a){let s=await r.serialize(n.data,a);if(s.length>4096)throw new Error("Cookie length will exceed browser maximum. Length: "+s.length);return s},async destroySession(n,a){return r.serialize("",{...a,maxAge:void 0,expires:new Date(0)})}}};/**
 * @remix-run/server-runtime v2.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const gr=e=>({cookie:t}={})=>{let r=new Map;return e({cookie:t,async createData(n,a){let s=Math.random().toString(36).substring(2,10);return r.set(s,{data:n,expires:a}),s},async readData(n){if(r.has(n)){let{data:a,expires:s}=r.get(n);if(!s||s>new Date)return a;s&&r.delete(n)}return null},async updateData(n,a,s){r.set(n,{data:a,expires:s})},async deleteData(n){r.delete(n)}})};/**
 * @remix-run/server-runtime v2.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */class ze extends Error{constructor(t,r){super(`Field "${t}" exceeded upload size of ${r} bytes.`),this.field=t,this.maxBytes=r}}/**
 * @remix-run/server-runtime v2.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wr({filter:e,maxPartSize:t=3e6}={}){return async({filename:r,contentType:n,name:a,data:s})=>{if(e&&!await e({filename:r,contentType:n,name:a}))return;let o=0,i=[];for await(let l of s){if(o+=l.byteLength,o>t)throw new ze(a,t);i.push(l)}return typeof r=="string"?new File(i,r,{type:n}):await new Blob(i,{type:n}).text()}}/**
 * @remix-run/server-runtime v2.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const _r=Object.freeze(Object.defineProperty({__proto__:null,MaxPartSizeExceededError:ze,broadcastDevReady:ir,createCookieFactory:vt,createCookieSessionStorageFactory:yr,createMemorySessionStorageFactory:gr,createRequestHandler:cr,createSession:re,createSessionStorageFactory:pr,defer:$t,isCookie:Q,isSession:mr,json:te,logDevReady:lr,redirect:Te,redirectDocument:zt,unstable_composeUploadHandlers:Ut,unstable_createMemoryUploadHandler:wr,unstable_parseMultipartFormData:Ft,unstable_setDevServerHooks:ur},Symbol.toStringTag,{value:"Module"}));function xe(e=""){const[t,r]=b.useState(e),[n,a]=b.useState(),[s,o]=b.useState(!1);return{value:t,error:n,onChange:c=>{r(c.target.value),o(!0),n&&c.target.checkValidity()&&a(null)},onBlur:c=>{s&&c.target.checkValidity()},onInvalid:c=>{c.preventDefault(),a(c.target.validationMessage)}}}const br="_textarea_13d9g_3",Sr={textarea:br},vr=({className:e,resize:t="none",value:r,onChange:n,minRows:a=1,maxRows:s,...o})=>{const[i,l]=b.useState(a),[u,c]=b.useState(),d=b.useRef();b.useEffect(()=>{const f=getComputedStyle(d.current),m=parseInt(f.lineHeight,10),g=parseInt(f.paddingTop,10)+parseInt(f.paddingBottom,10);c({lineHeight:m,paddingHeight:g})},[]);const y=f=>{n(f);const{lineHeight:m,paddingHeight:g}=u,E=f.target.rows;f.target.rows=a;const p=~~((f.target.scrollHeight-g)/m);p===E&&(f.target.rows=p),s&&p>=s&&(f.target.rows=s,f.target.scrollTop=f.target.scrollHeight),l(s&&p>s?s:p)};return h.jsx("textarea",{className:Ce(Sr.textarea,e),ref:d,onChange:y,style:F({resize:t}),rows:i,value:r,...o})},xr="_container_17spy_3",Er="_content_17spy_31",Rr="_input_17spy_41",Cr="_root_17spy_1",kr="_underline_17spy_109",jr="_label_17spy_145",Dr="_error_17spy_189",Tr="_errorMessage_17spy_221",j={container:xr,content:Er,input:Rr,root:Cr,underline:kr,label:jr,error:Dr,errorMessage:Tr},J=({id:e,label:t,value:r,multiline:n,className:a,style:s,error:o,onBlur:i,autoComplete:l,required:u,maxLength:c,type:d,onChange:y,name:f,...m})=>{const[g,E]=b.useState(!1),p=b.useId(),S=b.useRef(),R=e||`${p}input`,oe=`${R}-label`,ie=`${R}-error`,qe=n?vr:"input",Je=H=>{E(!1),i&&i(H)};return h.jsxs("div",{className:Ce(j.container,a),"data-error":!!o,style:s,...m,children:[h.jsxs("div",{className:j.content,children:[h.jsx("label",{className:j.label,"data-focused":g,"data-filled":!!r,id:oe,htmlFor:R,children:t}),h.jsx(qe,{className:j.input,id:R,"aria-labelledby":oe,"aria-describedby":o?ie:void 0,onFocus:()=>E(!0),onBlur:Je,value:r,onChange:y,autoComplete:l,required:u,maxLength:c,type:d,name:f}),h.jsx("div",{className:j.underline,"data-focused":g})]}),h.jsx(P,{unmount:!0,in:o,timeout:I(_.base.durationM),children:({visible:H,nodeRef:Ke})=>{var le;return h.jsx("div",{ref:Ke,className:j.error,"data-visible":H,id:ie,role:"alert",style:F({height:H?(le=S.current)==null?void 0:le.getBoundingClientRect().height:0}),children:h.jsxs("div",{className:j.errorMessage,ref:S,children:[h.jsx(ke,{icon:"error"}),o]})})}})]})};var Or={},ne={},T={};const Ve=We(_r);var V={};/**
 * @remix-run/cloudflare v2.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */Object.defineProperty(V,"__esModule",{value:!0});const ae=new TextEncoder,Mr=async(e,t)=>{let r=await Be(t,["sign"]),n=ae.encode(e),a=await crypto.subtle.sign("HMAC",r,n),s=btoa(String.fromCharCode(...new Uint8Array(a))).replace(/=+$/,"");return e+"."+s},Ar=async(e,t)=>{let r=e.lastIndexOf("."),n=e.slice(0,r),a=e.slice(r+1),s=await Be(t,["verify"]),o=ae.encode(n),i=Hr(atob(a));return await crypto.subtle.verify("HMAC",s,i,o)?n:!1};async function Be(e,t){return await crypto.subtle.importKey("raw",ae.encode(e),{name:"HMAC",hash:"SHA-256"},!1,t)}function Hr(e){let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}V.sign=Mr;V.unsign=Ar;/**
 * @remix-run/cloudflare v2.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */Object.defineProperty(T,"__esModule",{value:!0});var B=Ve,Ee=V;const se=B.createCookieFactory({sign:Ee.sign,unsign:Ee.unsign}),Nr=B.createCookieSessionStorageFactory(se),Xe=B.createSessionStorageFactory(se),Pr=B.createMemorySessionStorageFactory(Xe);T.createCookie=se;T.createCookieSessionStorage=Nr;T.createMemorySessionStorage=Pr;T.createSessionStorage=Xe;/**
 * @remix-run/cloudflare v2.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */Object.defineProperty(ne,"__esModule",{value:!0});var Ir=T;function Ur({cookie:e,kv:t}){return Ir.createSessionStorage({cookie:e,async createData(r,n){for(;;){let a=new Uint8Array(8);crypto.getRandomValues(a);let s=[...a].map(o=>o.toString(16).padStart(2,"0")).join("");if(!await t.get(s,"json"))return await t.put(s,JSON.stringify(r),{expiration:n?Math.round(n.getTime()/1e3):void 0}),s}},async readData(r){let n=await t.get(r);return n?JSON.parse(n):null},async updateData(r,n,a){await t.put(r,JSON.stringify(n),{expiration:a?Math.round(a.getTime()/1e3):void 0})},async deleteData(r){await t.delete(r)}})}ne.createWorkersKVSessionStorage=Ur;/**
 * @remix-run/cloudflare v2.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=ne,r=T,n=Ve;e.createWorkersKVSessionStorage=t.createWorkersKVSessionStorage,e.createCookie=r.createCookie,e.createCookieSessionStorage=r.createCookieSessionStorage,e.createMemorySessionStorage=r.createMemorySessionStorage,e.createSessionStorage=r.createSessionStorage,Object.defineProperty(e,"MaxPartSizeExceededError",{enumerable:!0,get:function(){return n.MaxPartSizeExceededError}}),Object.defineProperty(e,"broadcastDevReady",{enumerable:!0,get:function(){return n.broadcastDevReady}}),Object.defineProperty(e,"createRequestHandler",{enumerable:!0,get:function(){return n.createRequestHandler}}),Object.defineProperty(e,"createSession",{enumerable:!0,get:function(){return n.createSession}}),Object.defineProperty(e,"defer",{enumerable:!0,get:function(){return n.defer}}),Object.defineProperty(e,"isCookie",{enumerable:!0,get:function(){return n.isCookie}}),Object.defineProperty(e,"isSession",{enumerable:!0,get:function(){return n.isSession}}),Object.defineProperty(e,"json",{enumerable:!0,get:function(){return n.json}}),Object.defineProperty(e,"logDevReady",{enumerable:!0,get:function(){return n.logDevReady}}),Object.defineProperty(e,"redirect",{enumerable:!0,get:function(){return n.redirect}}),Object.defineProperty(e,"redirectDocument",{enumerable:!0,get:function(){return n.redirectDocument}}),Object.defineProperty(e,"unstable_composeUploadHandlers",{enumerable:!0,get:function(){return n.unstable_composeUploadHandlers}}),Object.defineProperty(e,"unstable_createMemoryUploadHandler",{enumerable:!0,get:function(){return n.unstable_createMemoryUploadHandler}}),Object.defineProperty(e,"unstable_parseMultipartFormData",{enumerable:!0,get:function(){return n.unstable_parseMultipartFormData}})})(Or);const Fr="_contact_1p6je_1",Lr="_form_1p6je_35",$r="_title_1p6je_59",zr="_divider_1p6je_119",Vr="_input_1p6je_195",Br="_botkiller_1p6je_279",Xr="_button_1p6je_287",qr="_complete_1p6je_407",Jr="_completeTitle_1p6je_429",Kr="_completeText_1p6je_467",Wr="_completeButton_1p6je_505",Gr="_formError_1p6je_557",Yr="_formErrorContent_1p6je_581",Qr="_formErrorMessage_1p6je_589",Zr="_formErrorIcon_1p6je_605",en="_footer_1p6je_615",w={contact:Fr,form:Lr,title:$r,divider:zr,input:Vr,botkiller:Br,button:Xr,complete:qr,completeTitle:Jr,completeText:Kr,completeButton:Wr,formError:Gr,formErrorContent:Yr,formErrorMessage:Qr,formErrorIcon:Zr,footer:en},fn=()=>Ze({title:"Contact",description:"Send me a message if you’re interested in discussing a project or if you just want to say hi"}),Re=512,tn=4096,hn=()=>{const e=b.useRef(),t=xe(""),r=xe(""),n=_.base.durationS,a=ct(),{state:s}=dt(),o=s==="submitting";return h.jsxs(et,{className:w.contact,children:[h.jsx(P,{unmount:!0,in:!(a!=null&&a.success),timeout:1600,children:({status:i,nodeRef:l})=>h.jsxs(ft,{unstable_viewTransition:!0,className:w.form,method:"post",ref:l,children:[h.jsx(ue,{className:w.title,"data-status":i,level:3,as:"h1",style:C(_.base.durationXS,n,.3),children:h.jsx(Ye,{text:"Say hello",start:i!=="exited",delay:300})}),h.jsx(Qe,{className:w.divider,"data-status":i,style:C(_.base.durationXS,n,.4)}),h.jsx(J,{className:w.botkiller,style:C(_.base.durationS,n),label:"Name",name:"name",maxLength:Re}),h.jsx(J,{required:!0,className:w.input,"data-status":i,style:C(_.base.durationXS,n),autoComplete:"email",label:"Your email",type:"email",name:"email",maxLength:Re,...t}),h.jsx(J,{required:!0,multiline:!0,className:w.input,"data-status":i,style:C(_.base.durationS,n),autoComplete:"off",label:"Message (add your name before message)",name:"message",maxLength:tn,...r}),h.jsx(P,{unmount:!0,in:!o&&(a==null?void 0:a.errors),timeout:I(_.base.durationM),children:({status:u,nodeRef:c})=>{var d,y,f;return h.jsx("div",{className:w.formError,ref:c,"data-status":u,style:F({height:u?(d=e.current)==null?void 0:d.offsetHeight:0}),children:h.jsx("div",{className:w.formErrorContent,ref:e,children:h.jsxs("div",{className:w.formErrorMessage,children:[h.jsx(ke,{className:w.formErrorIcon,icon:"error"}),(y=a==null?void 0:a.errors)==null?void 0:y.email,(f=a==null?void 0:a.errors)==null?void 0:f.message]})})})}}),h.jsx(ce,{className:w.button,"data-status":i,"data-sending":o,style:C(_.base.durationM,n),disabled:o,loading:o,loadingText:"Sending...",icon:"send",type:"submit",children:"Send message"})]})}),h.jsx(P,{unmount:!0,in:a==null?void 0:a.success,children:({status:i,nodeRef:l})=>h.jsxs("div",{className:w.complete,"aria-live":"polite",ref:l,children:[h.jsx(ue,{level:3,as:"h3",className:w.completeTitle,"data-status":i,children:"Message Sent"}),h.jsx(Ge,{size:"l",as:"p",className:w.completeText,"data-status":i,style:C(_.base.durationXS),children:"I’ll get back to you within a couple days, sit tight"}),h.jsx(ce,{secondary:!0,iconHoverShift:!0,className:w.completeButton,"data-status":i,style:C(_.base.durationM),href:"/",icon:"chevron-right",children:"Back to homepage"})]})}),h.jsx(tt,{className:w.footer})]})};function C(e,t=de(0),r=1){const n=I(e)*r;return F({delay:de((I(t)+n).toFixed(0))})}export{hn as default,fn as meta};
