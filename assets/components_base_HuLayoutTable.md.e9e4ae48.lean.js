import{a2 as r,a3 as c,D,o as y,c as F,G as C,b as A,z as l,a as i,O as d,a4 as n}from"./chunks/framework.5a496741.js";const u=l("h1",{id:"自定义行列-table",tabindex:"-1"},[i("自定义行列 table "),l("a",{class:"header-anchor",href:"#自定义行列-table","aria-label":'Permalink to "自定义行列 table"'},"​")],-1),h=l("hr",null,null,-1),b=d("",5),_=JSON.parse('{"title":"自定义行列 table","description":"","frontmatter":{},"headers":[],"relativePath":"components/base/HuLayoutTable.md","filePath":"components/base/HuLayoutTable.md"}'),g={name:"components/base/HuLayoutTable.md"},f=Object.assign(g,{setup(m){const a={name:"huyuchen",sex:1,age:29,status:1},p={0:"一般",1:"良好",2:"差"},o=r({column:[{label:"姓名",prop:"name",span:24},{label:"性别",prop:"sex",render({row:s}){return n("div",{style:{color:"yellow",backgroundColor:"red",display:"flex",alignItems:"center"},innerHTML:["男","女"][a[s.prop]]})},span:12},{label:"年龄",prop:"age",render({row:s}){return n("div",{innerHTML:a[s.prop]+"岁"})},span:12},{label:"身体状态",prop:"status",render({row:s}){return n("div",{innerHTML:p[a[s.prop]]})}}]}),{column:t}=c(o);return(s,x)=>{const e=D("HuLayoutTable",!0);return y(),F("div",null,[u,h,C(e,{column:A(t),tableData:a,labelSpan:4,borderColor:"red",rowHeight:"36px"},null,8,["column"]),b])}}});export{_ as __pageData,f as default};