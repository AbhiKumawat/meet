import{r as c}from"./jsx-runtime-DexIYAB0.js";import{u as i,a as u}from"./components-DX6auwS0.js";import{u as m}from"./heading-BqkoGSA_.js";function f(){const t=c.useRef(),e=i(),s=u(),a=m();return c.useCallback((l,o)=>{const n=l.split("#")[1];document.getElementById(n).scrollIntoView({behavior:a?"auto":"smooth"});const r=()=>{clearTimeout(t.current),t.current=setTimeout(()=>{window.removeEventListener("scroll",r),window.location.pathname===e.pathname&&(o==null||o(),s(`${e.pathname}#${n}`,{scroll:!1}))},50)};return window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r),clearTimeout(t.current)}},[s,a,e.pathname])}export{f as u};
