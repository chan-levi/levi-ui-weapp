import{_ as p,r as a,h as m,i as h,o as t,c as n,b as c,F as v,j as f,n as b,p as g,g as k}from"./index-1pR5XeWh.js";const w=e=>(g("data-v-6c7615c5"),e=e(),k(),e),x={class:"animation-show"},I={class:"phone"},S=w(()=>c("div",{class:"bubble"},null,-1)),B={class:"main"},M={__name:"animation-show",setup(e){const o=a([]),r=a(["navigate","input","card","section","user"]);let s=a(null);const l=()=>{let i=500;s.value=setTimeout(()=>{const u=Math.floor(Math.random()*5);o.value.push(r.value[u]),o.value.length>=12&&(o.value=[]),l()},i)};return m(()=>{l()}),h(()=>{clearTimeout(s),s.value=null}),(i,u)=>(t(),n("div",x,[c("div",I,[S,c("div",B,[(t(!0),n(v,null,f(o.value,(d,_)=>(t(),n("div",{key:_,class:b(["block",d])},null,2))),128))])])]))}},y=p(M,[["__scopeId","data-v-6c7615c5"]]);export{y as default};