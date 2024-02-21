import{r as l,j as e}from"./jsx-runtime-DexIYAB0.js";import{D as C}from"./divider-CuqUtAp8.js";import{S as T,F as L,b as w}from"./section-BpiAKwBb.js";import{b as k,m as H,T as g,H as _,a as $,t as S,n as B,B as q,I as b,c as D}from"./heading-BqkoGSA_.js";import{I as y,u as M}from"./image-DQbU_jsq.js";import{u as E}from"./useParallax-DjIlx9Hn.js";import{u as R}from"./useScrollToHash-CCsew_gw.js";import{c as z}from"./clamp-e7DugykH.js";import{f as O}from"./date-DvyCAN0s.js";import{L as v,c as A,O as F}from"./components-DX6auwS0.js";import{L as U}from"./link-DDYpR-1Y.js";import{M as X}from"./index-L_4ix5aQ.js";import"./config-BSXQ0pV0.js";const G="_post_opidu_39",J="_header_opidu_87",K="_headerText_opidu_109",Q="_date_opidu_157",V="_dateText_opidu_181",Y="_titleWordWrapper_opidu_235",Z="_titleWord_opidu_235",ee="_postTitleWord_opidu_1",se="_banner_opidu_275",te="_bannerImage_opidu_379",oe="_bannerImageBlur_opidu_381",ae="_details_opidu_403",re="_arrow_opidu_417",ne="_timecode_opidu_465",ce="_wrapper_opidu_507",ie="_content_opidu_531",a={post:G,header:J,headerText:K,date:Q,dateText:V,titleWordWrapper:Y,titleWord:Z,postTitleWord:ee,banner:se,bannerImage:te,bannerImageBlur:oe,details:ae,arrow:re,timecode:ne,wrapper:ce,content:ie},le=({children:s,title:t,date:o,banner:n,timecode:i})=>{const N=R(),m=l.useRef(),[u,x]=l.useState(null);l.useEffect(()=>{x(O(o))},[o,u]),E(.004,c=>{m.current&&m.current.style.setProperty("--blurOpacity",z(c,0,1))});const p=c=>{c.preventDefault(),N(c.currentTarget.href)},d=`${n==null?void 0:n.split(".")[0]}-placeholder.jpg`;return e.jsxs("article",{className:a.post,children:[e.jsxs(T,{children:[n&&e.jsxs("div",{className:a.banner,ref:m,children:[e.jsx("div",{className:a.bannerImage,children:e.jsx(y,{role:"presentation",src:n,placeholder:d,alt:""})}),e.jsx("div",{className:a.bannerImageBlur,children:e.jsx(y,{role:"presentation",src:d,placeholder:d,alt:""})})]}),e.jsx("header",{className:a.header,children:e.jsxs("div",{className:a.headerText,children:[e.jsx(k,{in:!0,timeout:H(S.base.durationM),children:({visible:c,nodeRef:h})=>e.jsxs("div",{className:a.date,ref:h,children:[e.jsx(C,{notchWidth:"64px",notchHeight:"8px",collapsed:!c}),e.jsx(g,{className:a.dateText,"data-visible":c,children:u})]})}),e.jsx(_,{level:2,as:"h1",className:a.title,"aria-label":t,children:t.split(" ").map((c,h)=>e.jsx("span",{className:a.titleWordWrapper,children:e.jsxs("span",{className:a.titleWord,style:$({delay:B(h*100+100)}),children:[c,h!==t.split(" ").length-1?" ":""]})},`${c}-${h}`))}),e.jsxs("div",{className:a.details,children:[e.jsx(v,{to:"#postContent",className:a.arrow,"aria-label":"Scroll to post content",onClick:p,children:e.jsx("svg",{"aria-hidden":!0,stroke:"currentColor",width:"43",height:"15",viewBox:"0 0 43 15",children:e.jsx("path",{d:"M1 1l20.5 12L42 1",strokeWidth:"2",fill:"none"})})}),e.jsx("div",{className:a.timecode,children:i})]})]})})]}),e.jsx(T,{className:a.wrapper,id:"postContent",tabIndex:-1,children:e.jsx(g,{as:"div",size:"l",className:a.content,children:s})}),e.jsx(L,{})]})},de="_code_1t56o_3",me="_actions_1t56o_317",pe="_copyIcon_1t56o_351",he="_lang_1t56o_395",j={code:de,actions:me,copyIcon:pe,lang:he},_e=s=>{var x;const[t,o]=l.useState(!1),{theme:n}=M(),i=l.useRef(),N=l.useRef(),m=(x=s.className)==null?void 0:x.split("-")[1],u=()=>{clearTimeout(N),navigator.clipboard.writeText(i.current.textContent),o(!0),setTimeout(()=>{o(!1)},2e3)};return e.jsxs("div",{className:j.code,"data-theme":n,children:[!!m&&e.jsx(g,{secondary:!0,size:"s",className:j.lang,children:m}),e.jsx("pre",{ref:i,...s}),e.jsx("div",{className:j.actions,children:e.jsx(q,{iconOnly:!0,onClick:u,"aria-label":"Copy",children:e.jsxs("span",{className:j.copyIcon,children:[e.jsx(k,{in:!t,children:({visible:p,nodeRef:d})=>e.jsx(b,{ref:d,icon:"copy","data-visible":p})}),e.jsx(k,{in:t,children:({visible:p,nodeRef:d})=>e.jsx(b,{ref:d,icon:"check","data-visible":p})})]})})})]})},ue="_list_eti0y_3",xe="_item_eti0y_29",P={list:ue,item:xe},I=({ordered:s,children:t,className:o,...n})=>{const i=s?"ol":"ul";return e.jsx(i,{className:D(P.list,o),...n,children:t})},je=({children:s,...t})=>e.jsx("li",{className:P.item,...t,children:s}),ge="_heading_1ckm2_3",fe="_paragraph_1ckm2_27",Ne="_list_1ckm2_27",ke="_image_1ckm2_27",be="_headingLink_1ckm2_37",Te="_code_1ckm2_143",ye="_pre_1ckm2_179",ve="_hr_1ckm2_211",Pe="_blockquote_1ckm2_239",Ie="_strong_1ckm2_277",We="_embed_1ckm2_285",r={heading:ge,paragraph:fe,list:Ne,image:ke,headingLink:be,code:Te,pre:ye,hr:ve,blockquote:Pe,strong:Ie,embed:We},f=({id:s})=>e.jsx(v,{className:r.headingLink,to:`#${s}`,"aria-label":"Link to heading",children:e.jsx(b,{icon:"link"})}),Ce=({children:s,id:t,...o})=>e.jsxs(_,{className:r.heading,id:t,level:2,as:"h1",...o,children:[e.jsx(f,{id:t}),s]}),Le=({children:s,id:t,...o})=>e.jsxs(_,{className:r.heading,id:t,level:3,as:"h2",...o,children:[e.jsx(f,{id:t}),s]}),we=({children:s,id:t,...o})=>e.jsxs(_,{className:r.heading,id:t,level:4,as:"h3",...o,children:[e.jsx(f,{id:t}),s]}),He=({children:s,id:t,...o})=>e.jsxs(_,{className:r.heading,id:t,level:5,as:"h4",...o,children:[e.jsx(f,{id:t}),s]}),$e=({children:s,...t})=>{const o=l.Children.count(s)===1,n=l.Children.toArray(s)[0];return o&&n.type===W?s:e.jsx(g,{className:r.paragraph,size:"l",as:"p",...t,children:s})},Se=({...s})=>e.jsx(U,{...s}),Be=s=>e.jsx(I,{className:r.list,...s}),qe=s=>e.jsx(I,{className:r.list,ordered:!0,...s}),De=({children:s,...t})=>e.jsx(je,{...t,children:s}),Me=({children:s,...t})=>e.jsx("code",{className:r.code,...t,children:s}),Ee=s=>e.jsx("div",{className:r.pre,children:e.jsx(_e,{...s})}),Re=s=>e.jsx("blockquote",{className:r.blockquote,...s}),ze=s=>e.jsx("hr",{className:r.hr,...s}),Oe=s=>e.jsx("strong",{className:r.strong,...s}),W=({src:s,alt:t,width:o,height:n,...i})=>e.jsx("img",{className:r.image,src:s,loading:"lazy",alt:t,width:o,height:n,...i}),Ae=({src:s})=>e.jsx("div",{className:r.embed,children:e.jsx("iframe",{src:s,loading:"lazy",title:"Embed"})}),Fe={h1:Ce,h2:Le,h3:we,h4:He,p:$e,a:Se,ul:Be,ol:qe,li:De,pre:Ee,code:Me,blockquote:Re,hr:ze,img:W,strong:Oe,Embed:Ae};function as({data:s}){const{title:t,abstract:o}=s.frontmatter;return w({title:t,description:o,prefix:"",ogImage:s.ogImage})}function rs(){const{frontmatter:s,timecode:t}=A();return e.jsx(X,{components:Fe,children:e.jsx(le,{...s,timecode:t,children:e.jsx(F,{})})})}export{rs as default,as as meta};
