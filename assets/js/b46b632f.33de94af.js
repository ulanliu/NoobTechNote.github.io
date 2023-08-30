"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[4762],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,h=s["".concat(c,".").concat(d)]||s[d]||m[d]||l;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10488:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"Ch19: \u7b56\u7565\u548c\u5c64\u7d1a",sidebar_label:"Ch19: \u7b56\u7565\u548c\u5c64\u7d1a",sidebar_position:19},i=void 0,o={unversionedId:"sg/clean-architecture/ch19",id:"sg/clean-architecture/ch19",title:"Ch19: \u7b56\u7565\u548c\u5c64\u7d1a",description:"\u7b56\u7565 -> \u8edf\u9ad4\u7cfb\u7d71\uff08\u7b56\u7565\u9673\u8ff0\uff09 -> \u96fb\u8166\u7a0b\u5f0f\uff08\u8a73\u7d30\u63cf\u8ff0\uff09",source:"@site/docs/sg/clean-architecture/ch19.md",sourceDirName:"sg/clean-architecture",slug:"/sg/clean-architecture/ch19",permalink:"/docs/sg/clean-architecture/ch19",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/clean-architecture/ch19.md",tags:[],version:"current",lastUpdatedBy:"weichen-lin",lastUpdatedAt:1693374882,formattedLastUpdatedAt:"Aug 30, 2023",sidebarPosition:19,frontMatter:{title:"Ch19: \u7b56\u7565\u548c\u5c64\u7d1a",sidebar_label:"Ch19: \u7b56\u7565\u548c\u5c64\u7d1a",sidebar_position:19},sidebar:"tutorialSidebar",previous:{title:"Ch18: \u908a\u754c\u5256\u6790",permalink:"/docs/sg/clean-architecture/ch18"},next:{title:"Ch20: \u696d\u52d9\u898f\u5247",permalink:"/docs/sg/clean-architecture/ch20"}},c={},p=[{value:"\u5c64\u7d1a",id:"\u5c64\u7d1a",level:2},{value:"\u7e3d\u7d50",id:"\u7e3d\u7d50",level:2}],u={toc:p},s="wrapper";function m(e){let{components:t,...l}=e;return(0,a.kt)(s,(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u7b56\u7565 -> \u8edf\u9ad4\u7cfb\u7d71\uff08\u7b56\u7565\u9673\u8ff0\uff09 -> \u96fb\u8166\u7a0b\u5f0f\uff08\u8a73\u7d30\u63cf\u8ff0\uff09"),(0,a.kt)("p",null,"\u7b56\u7565 \u5206\u89e3\u6210 \u5c0f\u9673\u8ff0\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u4f55\u8a08\u7b97\u696d\u52d9\u898f\u5247"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u4f55\u683c\u5f0f\u5316\u5831\u544a"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u4f55\u9a57\u8b49\u8f38\u5165\u8cc7\u6599")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u767c\u5c55\u8edf\u9ad4\u67b6\u69cb\u7684\u85dd\u8853\uff1a"),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"\u5c07\u7b56\u7565\u5f7c\u6b64\u5206\u958b\uff0c\u4f9d\u8b8a\u5316\u91cd\u7d44\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5c07\u5143\u4ef6\u91cd\u7d44\u6210\u6709\u76f8\u7121\u74b0\u5708\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8cc7\u6599\u6d41\u548c\u539f\u59cb\u78bc\u7684\u4f9d\u8cf4\u95dc\u4fc2\u4e0d\u4e00\u5b9a\u76f8\u540c"))),(0,a.kt)("p",null,"1.\u5c07\u7b56\u7565\u5f7c\u6b64\u5206\u958b\uff0c\u4f9d\u8b8a\u5316\u91cd\u7d44\u3002"),(0,a.kt)("p",null,"\u56e0\u76f8\u540c\u539f\u56e0\u5728\u76f8\u540c\u6642\u9593\u8b8a\u5316\u7684\u7b56\u7565\uff0c\u5728\u540c\u4e00\u5c64\u7d1a\uff0c\u540c\u4e00\u500b\u5143\u4ef6\u3002\n\u57fa\u65bc\u4e0d\u540c\u539f\u56e0\u6216\u4e0d\u540c\u6642\u9593\u7684\u8b8a\u5316\uff0c\u8655\u5728\u4e0d\u540c\u5c64\u7d1a\u3001\u4e0d\u540c\u5143\u4ef6\u3002"),(0,a.kt)("p",null,"2.\u5c07\u5143\u4ef6\u91cd\u7d44\u6210\u6709\u5411\u7121\u74b0\u5708\n\u5373\u4ee3\u8868\u539f\u59cb\u78bc\u7de8\u8b6f\u6642\u671f\u7684\u4f9d\u8cf4\u95dc\u4fc2\uff0c\u5982\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Java \u7684 import"),(0,a.kt)("li",{parentName:"ul"},"C# \u7684 using"),(0,a.kt)("li",{parentName:"ul"},"Ruby \u7684 require")),(0,a.kt)("p",null,"\u597d\u7684\u67b6\u69cb\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f9d\u8cf4\u7684\u95dc\u4fc2\u65b9\u5411\uff0c\u662f\u57fa\u65bc\u9023\u63a5\u7684\u5143\u4ef6\u5c64\u7d1a\u6c7a\u5b9a\u7684\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4f4e\u5c64\u7d1a\u7684\u5143\u4ef6\u90fd\u88ab\u8a2d\u8a08\u70ba",(0,a.kt)("strong",{parentName:"li"},"\u4f9d\u8cf4"),"\u9ad8\u5c64\u7d1a\u7684\u5143\u4ef6\u3002")),(0,a.kt)("admonition",{title:"Example?",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Name\u6b04\u4f4d: InputComponent\nEmail\u6b04\u4f4d: InputComponent\nDescription\u6b04\u4f4d: TextAreaComponent")),(0,a.kt)("h2",{id:"\u5c64\u7d1a"},"\u5c64\u7d1a"),(0,a.kt)("p",null,"\u56b4\u683c\u5b9a\u7fa9\u662f\u300c\u8f38\u5165\u53ca\u8f38\u51fa\u7684\u8ddd\u96e2\u300d\u3002\n\u96e2\u7cfb\u7d71\u8f38\u5165\u8f38\u51fa\u8d8a\u9060\uff0c\u7b56\u7565\u5c64\u7d1a\u8d8a\u9ad8\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Ch19-1 \u4e00\u500b\u7c21\u55ae\u7684\u52a0\u5bc6\u7a0b\u5f0f",src:n(93634).Z,width:"564",height:"315"})),(0,a.kt)("p",null,"Translate\u662f\u6700\u9ad8\u5c64\u7d1a\u7684\u5143\u4ef6\uff0c\u8ddd\u96e2\u8f38\u5165\u8f38\u51fa\u6700\u9060\u3002 -> \u6216\u7a31\u4f5c\u300c\u4e2d\u592e\u8f49\u63db(Central Transform)\u300d\u5143\u4ef6"),(0,a.kt)("p",null,"3.\u8cc7\u6599\u6d41\u548c\u539f\u59cb\u78bc\u7684\u4f9d\u8cf4\u95dc\u4fc2\u4e0d\u4e00\u5b9a\u76f8\u540c\u3002\u5f9e\u8cc7\u6599\u6d41\u89e3\u8026\u51fa\u4f86\u3002\u4e26\u5728\u8026\u5408\u5230\u5c64\u7d1a\u4e0a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"function encrypt() {\nwhile (true)\nwriteChar(translate(readChar()))\n}\n")),(0,a.kt)("p",null,"\u6b64\u7a0b\u5f0f\u78bc\u4e2d\uff0c\u9ad8\u7d1a\u7684 encrypt \u51fd\u5f0f\u4f9d\u8cf4\u8f03\u4f4e\u7d1a\u7684 readChar \u548c writeChar\uff0c\u662f\u4e0d\u6b63\u78ba\u7684\u67b6\u69cb"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Ch19-2 \u985e\u5225\u5716-\u66f4\u597d\u7684\u7cfb\u7d71\u67b6\u69cb",src:n(57451).Z,width:"345",height:"300"})),(0,a.kt)("p",null,"\u865b\u7dda\u6846\u5f0f\u7cfb\u7d71\u4e2d\u6700\u9ad8\u7d1a\u7684\u5143\u7d20\uff0c\u5176\u4ed6\u9760\u8fd1 IO \u7684\u4f4e\u7d1a\u5143\u7d20 (Console Reader\u3001Console Writer) \u6703\u6307\u5411\u5b83"),(0,a.kt)("p",null,"\u7576\u8f38\u5165\u8f38\u51fa\u7684\u7b56\u7565\u8b8a\u66f4\u6642\uff0c\u4e0d\u6703\u5f71\u97ff\u5230\u52a0\u5bc6\u7b56\u7565\u3002"),(0,a.kt)("p",null,"\u900f\u904eSRP\u548cCCP\uff0c\u628a\u8f03\u9ad8\u5c64\u7d1a\u7684\u7b56\u7565\u8ddf\u8f03\u4f4e\u5c64\u7d1a\u7684\u7b56\u7565\u5206\u958b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8f03\u9ad8\u7684\u7b56\u7565",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u66f4\u91cd\u5927\u539f\u56e0\u800c\u8b8a\u5316"),(0,a.kt)("li",{parentName:"ul"},"\u8b8a\u5316\u983b\u7387\u4f4e"))),(0,a.kt)("li",{parentName:"ul"},"\u8f03\u4f4e\u7684\u7b56\u7565",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8b8a\u5316\u539f\u56e0\u4e0d\u91cd\u5927"),(0,a.kt)("li",{parentName:"ul"},"\u7d93\u5e38\u8b8a\u5316\u4e14\u6025\u65bc\u8b8a\u5316")))),(0,a.kt)("p",null,"\u53ef\u4ee5\u628a\u4f4e\u5c64\u7d1a\u7684\u5143\u4ef6\u770b\u6210\u662f\u9ad8\u5c64\u7d1a\u7684Plugin\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Ch19-3 \u4f4e\u5c64\u7d1a\u7684\u5143\u4ef6\u61c9\u8a72\u63d2\u5165\u66f4\u9ad8\u5c64\u7d1a\u7684\u5143\u4ef6",src:n(57451).Z,width:"345",height:"300"})),(0,a.kt)("h2",{id:"\u7e3d\u7d50"},"\u7e3d\u7d50"),(0,a.kt)("p",null,"\u6b64\u7ae0\u6df7\u5408\uff1a\n\u55ae\u4e00\u8077\u8cac\u539f\u5247SRP \u3001\u958b\u653e\u2014\u2014\u5c01\u9589\u539f\u5247CCP\n\u5171\u540c\u5c01\u9589\u539f\u5247OCP\n\u4f9d\u8cf4\u53cd\u8f49\u539f\u5247DIP\u3001\u7a69\u5b9a\u4f9d\u8cf4\u539f\u5247SDP+\u7a69\u5b9a\u62bd\u8c61\u539f\u5247SAP"))}m.isMDXComponent=!0},93634:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ch19-1-dcb518e0b74de39c70cdbc179715b9f7.png"},57451:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ch19-2-899f7ea07b48f43022cb70911d12caaf.png"}}]);