import{h as t,p as u,D as C,o as d,c as g,G as A,B as h,z as c,a as v,O as b}from"./chunks/framework.89a3316d.js";const m=c("h1",{id:"select-下拉-虚拟加载框-分页-基于-elselectv2-封装",tabindex:"-1"},[v("select 下拉=虚拟加载框 + 分页(基于 ElSelectV2 封装) "),c("a",{class:"header-anchor",href:"#select-下拉-虚拟加载框-分页-基于-elselectv2-封装","aria-label":'Permalink to "select 下拉=虚拟加载框 + 分页(基于 ElSelectV2 封装)"'},"​")],-1),f=c("hr",null,null,-1),x=b("",3),q=JSON.parse('{"title":"select 下拉=虚拟加载框 + 分页(基于 ElSelectV2 封装)","description":"","frontmatter":{},"headers":[],"relativePath":"components/fun/HuVirtualSelectPage.md","filePath":"components/fun/HuVirtualSelectPage.md"}'),E={name:"components/fun/HuVirtualSelectPage.md"},V=Object.assign(E,{setup(_){const a=t([]),e=t(!1),y=t([]),s=t({current:1,pageSize:10,total:11});u(()=>{F(!0)});const F=async(D=!1)=>{e.value=!0;const l=await new Promise(r=>{const n=a.value.length,o=[];setTimeout(()=>{const i=s.value.pageSize*(s.value.current+1)<=s.value.total||D?s.value.pageSize:s.value.total-s.value.pageSize*(s.value.current-1);for(let p=0;p<i;p++)o.push({label:`label${n+p}`,value:n+p});e.value=!1,r(o)},1e3)});s.value.current++,a.value=a.value.concat(l)};return(D,l)=>{const r=C("HuVirtualSelectPage",!0),n=C("ClientOnly");return d(),g("div",null,[m,f,A(n,null,{default:h(()=>[A(r,{filterable:"",pages:s.value,options:a.value,modelValue:y.value,"onUpdate:modelValue":l[0]||(l[0]=o=>y.value=o),loading:e.value,onPullUp:F,placeholder:"请输入"},null,8,["pages","options","modelValue","loading"])]),_:1}),x])}}});export{q as __pageData,V as default};