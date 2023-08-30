"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[6855],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),h=l,f=s["".concat(o,".").concat(h)]||s[h]||d[h]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=h;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[s]="string"==typeof e?e:l,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4338:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(87462),l=(n(67294),n(3905));const a={title:"Ch27: \u670d\u52d9\u7684\u5049\u5927\u8207\u6e3a\u5c0f",tsidebar_label:"Ch27: \u670d\u52d9\u7684\u5049\u5927\u8207\u6e3a\u5c0f",sidebar_position:27},i=void 0,c={unversionedId:"sg/clean-architecture/ch27",id:"sg/clean-architecture/ch27",title:"Ch27: \u670d\u52d9\u7684\u5049\u5927\u8207\u6e3a\u5c0f",description:"\u670d\u52d9\u5c0e\u5411\u548c\u5fae\u670d\u52d9\u7684\u300c\u67b6\u69cb\u300d\u6d41\u884c\u7684\u539f\u56e0\uff1a",source:"@site/docs/sg/clean-architecture/ch27.md",sourceDirName:"sg/clean-architecture",slug:"/sg/clean-architecture/ch27",permalink:"/docs/sg/clean-architecture/ch27",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/clean-architecture/ch27.md",tags:[],version:"current",lastUpdatedBy:"weichen-lin",lastUpdatedAt:1693374882,formattedLastUpdatedAt:"Aug 30, 2023",sidebarPosition:27,frontMatter:{title:"Ch27: \u670d\u52d9\u7684\u5049\u5927\u8207\u6e3a\u5c0f",tsidebar_label:"Ch27: \u670d\u52d9\u7684\u5049\u5927\u8207\u6e3a\u5c0f",sidebar_position:27},sidebar:"tutorialSidebar",previous:{title:"Ch26: \u4e3b\u5143\u4ef6",permalink:"/docs/sg/clean-architecture/ch26"},next:{title:"Ch28: \u6e2c\u8a66\u908a\u754c",permalink:"/docs/sg/clean-architecture/ch28"}},o={},u=[{value:"\u670d\u52d9\u662f\u67b6\u69cb\uff1f",id:"\u670d\u52d9\u662f\u67b6\u69cb",level:2},{value:"\u670d\u52d9\u6709\u597d\u8655\uff1f",id:"\u670d\u52d9\u6709\u597d\u8655",level:2},{value:"\u89e3\u8026\u7684\u8b2c\u8aa4",id:"\u89e3\u8026\u7684\u8b2c\u8aa4",level:3},{value:"\u7368\u7acb\u958b\u767c\u548c\u7368\u7acb\u90e8\u7f72\u7684\u8b2c\u8aa4",id:"\u7368\u7acb\u958b\u767c\u548c\u7368\u7acb\u90e8\u7f72\u7684\u8b2c\u8aa4",level:3},{value:"Kitty \u8c93\u7684\u554f\u984c",id:"kitty-\u8c93\u7684\u554f\u984c",level:2},{value:"\u5782\u76f4\u5283\u5206",id:"\u5782\u76f4\u5283\u5206",level:3},{value:"\u6a6b\u5207\u95dc\u6ce8\u9762",id:"\u6a6b\u5207\u95dc\u6ce8\u9762",level:3},{value:"\u57fa\u65bc\u5143\u4ef6\u7684\u670d\u52d9",id:"\u57fa\u65bc\u5143\u4ef6\u7684\u670d\u52d9",level:2},{value:"\u7e3d\u7d50",id:"\u7e3d\u7d50",level:2}],p={toc:u},s="wrapper";function d(e){let{components:t,...a}=e;return(0,l.kt)(s,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u670d\u52d9\u5c0e\u5411\u548c\u5fae\u670d\u52d9\u7684\u300c\u67b6\u69cb\u300d\u6d41\u884c\u7684\u539f\u56e0\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u670d\u52d9\u5f7c\u6b64\u4f3c\u4e4e\u5f37\u70c8\u300c\u89e3\u8026\u300d"),(0,l.kt)("li",{parentName:"ul"},"\u670d\u52d9\u4f3c\u4e4e\u652f\u63f4\u958b\u767c\u548c\u90e8\u7f72\u7684\u300c\u7368\u7acb\u6027\u300d")),(0,l.kt)("p",null,"\u9019\u4e9b\u53ea\u662f\u90e8\u5206\u6b63\u78ba\u3002"),(0,l.kt)("h2",{id:"\u670d\u52d9\u662f\u67b6\u69cb"},"\u670d\u52d9\u662f\u67b6\u69cb\uff1f"),(0,l.kt)("p",null,"\u4e3b\u5f35\uff1a\u4f7f\u7528\u670d\u52d9\u672c\u8cea\u4e0a\u662f\u4e00\u7a2e\u67b6\u69cb\u3002"),(0,l.kt)("p",null,"\u524d\u9762\u5e7e\u500b\u7ae0\u7bc0\u7684\u8a0e\u8ad6\uff1a\u7cfb\u7d71\u7684\u67b6\u69cb\u662f\u7531\u5c07\u9ad8\u5c64\u7b56\u7565\u8207\u4f4e\u5c64\u7d30\u7bc0\u5206\u96e2\u7684\u908a\u754c\u4f86\u5b9a\u7fa9\uff0c\u4e26\u9075\u5faa\u300c\u4f9d\u8cf4\u898f\u5247\u300d\u3002"),(0,l.kt)("p",null,"\u670d\u52d9\u672c\u8eab\u50c5\u5c07\u7cfb\u7d71\u7684\u884c\u70ba\u5283\u5206\u70ba\u4e0d\u540c\u7684\u90e8\u5206\uff0c\u4e26\u975e\u6240\u6709\u7684\u670d\u52d9\u90fd\u61c9\u5177\u6709\u67b6\u69cb\u4e0a\u7684\u91cd\u5927\u610f\u7fa9\u3002"),(0,l.kt)("h2",{id:"\u670d\u52d9\u6709\u597d\u8655"},"\u670d\u52d9\u6709\u597d\u8655\uff1f"),(0,l.kt)("h3",{id:"\u89e3\u8026\u7684\u8b2c\u8aa4"},"\u89e3\u8026\u7684\u8b2c\u8aa4"),(0,l.kt)("p",null,"\u4e3b\u5f35\uff1a\u628a\u7cfb\u7d71\u5206\u89e3\u6210\u670d\u52d9\u7684\u4e00\u5927\u597d\u8655\u662f\u670d\u52d9\u5f7c\u6b64\u5f37\u70c8\u89e3\u8026\u3002"),(0,l.kt)("p",null,"\u610f\u898b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u670d\u52d9\u5171\u4eab\u7684\u8cc7\u6599\u4ecd\u7136\u662f\u5f37\u70c8\u8026\u5408\u7684"),(0,l.kt)("li",{parentName:"ul"},"\u670d\u52d9\u4ecb\u9762\u4e26\u6c92\u6709\u66f4\u6b63\u5f0f\u3001\u6c92\u6709\u66f4\u56b4\u683c\uff0c\u4e5f\u6c92\u6709\u5b9a\u7fa9\u7684\u66f4\u597d")),(0,l.kt)("p",null,"\u8907\u7fd2 ",(0,l.kt)("a",{parentName:"p",href:"/docs/sg/clean-architecture/ch16#%E8%A7%A3%E8%80%A6%E6%A8%A1%E5%BC%8F"},"Ch16 \u89e3\u8026\u6a21\u5f0f"),"\u3002"),(0,l.kt)("h3",{id:"\u7368\u7acb\u958b\u767c\u548c\u7368\u7acb\u90e8\u7f72\u7684\u8b2c\u8aa4"},"\u7368\u7acb\u958b\u767c\u548c\u7368\u7acb\u90e8\u7f72\u7684\u8b2c\u8aa4"),(0,l.kt)("p",null,"\u4e3b\u5f35\uff1a\u670d\u52d9\u53ef\u4ee5\u88ab\u4e00\u500b\u5c08\u9580\u7684\u5718\u968a\u4f86\u64c1\u6709\u548c\u904b\u884c\uff0c\u958b\u767c\u548c\u90e8\u7f72\u7684\u9019\u7a2e\u7368\u7acb\u6027\u88ab\u5047\u5b9a\u662f\u53ef\u64f4\u5c55\u7684(scalable)"),(0,l.kt)("p",null,"\u610f\u898b\uff1a\n\u53ea\u8981\u8cc7\u6599\u6216\u884c\u70ba\u76f8\u4e92\u8026\u5408\uff0c\u5c31\u9808\u5354\u540c\u958b\u767c\u3001\u90e8\u7f72\u548c\u904b\u884c\u3002"),(0,l.kt)("p",null,"Scenario: \u5982\u679c\u670d\u52d9 A \u548c B \u5171\u4eab\u8cc7\u6599\u5eab\u6216\u50b3\u905e\u7684\u8cc7\u6599\u683c\u5f0f\uff0c\u7576\u670d\u52d9 A \u66f4\u6539\u8cc7\u6599\u5eab\u67b6\u69cb\u6642\uff0c\u670d\u52d9 B \u4e5f\u8981\u8ddf\u8457\u4fee\u6539\uff0c\u9700\u8981\u5354\u8abf\u90e8\u7f72\u3002"),(0,l.kt)("h2",{id:"kitty-\u8c93\u7684\u554f\u984c"},"Kitty \u8c93\u7684\u554f\u984c"),(0,l.kt)("p",null,"\u6848\u4f8b\uff1a\u8a08\u7a0b\u8eca\u805a\u5408\u7cfb\u7d71"),(0,l.kt)("p",null,"\u7d66\u5b9a\u57ce\u5e02\u7684\u8a08\u7a0b\u8eca\u4f9b\u61c9\u5546\u4e26\u5141\u8a31\u5ba2\u6236\u9810\u8a02\u642d\u4e58\u3002\u5047\u8a2d\u5ba2\u6236\u6839\u64da\u4e00\u4e9b\u6a19\u6e96\u4f86\u9078\u64c7\u8a08\u7a0b\u8eca\uff0c\u5982\u6536\u4ef6\u6642\u9593\u3001\u50f9\u683c\u3001\u8c6a\u83ef\u7a0b\u5ea6\u548c\u99d5\u99db\u7d93\u9a57\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"27.1",src:n(97206).Z,width:"862",height:"340"})),(0,l.kt)("p",null,"\u4f7f\u7528\u6848\u4f8b:\n\u8a72\u516c\u53f8\u5c07\u5728\u5168\u5e02\u8a2d\u7acb\u5e7e\u500b\u5c0f\u8c93\u6536\u96c6\u9ede\u3002\u7576\u5c0f\u8c93\u88ab\u4e0b\u8a02\u6642\uff0c\u5c07\u9078\u64c7\u9644\u8fd1\u7684\u8a08\u7a0b\u8eca\u5f9e\u9019\u4e9b\u6536\u96c6\u9ede\u4e4b\u4e00\uff0c\u6536\u96c6\u4e00\u96bb\u5c0f\u8c93\u4e26\u5c07\u5176\u9001\u5230\u9069\u7576\u7684\u5730\u5740\u3002"),(0,l.kt)("p",null,"\u53ef\u80fd\u78b0\u4e0a\u7684\u9650\u5236\u689d\u4ef6:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6709\u4e9b\u53f8\u6a5f\u53ef\u80fd\u5c0d\u8c93\u904e\u654f\uff0c\u6240\u4ee5\u9019\u4e9b\u53f8\u6a5f\u4e0d\u61c9\u8a72\u88ab\u9019\u9805\u670d\u52d9\u9078\u4e2d\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6709\u4e9b\u5ba2\u6236\u53ef\u80fd\u5c0d\u8c93\u904e\u654f\uff0c\u6240\u4ee5\u5728\u904e\u53bb3\u5929\u5167\u5df2\u7d93\u7528\u4f86\u905e\u9001\u5c0f\u8c93\u7684\u8eca\u8f1b\uff0c\u4e0d\u61c9\u8a72\u88ab\u9078\u64c7\u7528\u4f86\u8f09\u9019\u4e9b\u5ba2\u6236\u3002")),(0,l.kt)("h3",{id:"\u5782\u76f4\u5283\u5206"},"\u5782\u76f4\u5283\u5206"),(0,l.kt)("p",null,"\u57fa\u65bc\u4f7f\u7528\u6848\u4f8b\u9032\u884c\u5782\u76f4\u5283\u5206\uff0c\u5efa\u4e00\u7d44\u53ef\u900f\u904e\u300c\u591a\u578b\u300d\u64f4\u5c55\u4f86\u8655\u7406\u65b0 feature \u7684\u985e\u5225\n",(0,l.kt)("img",{alt:"27.2",src:n(78752).Z,width:"864",height:"860"})),(0,l.kt)("h3",{id:"\u6a6b\u5207\u95dc\u6ce8\u9762"},"\u6a6b\u5207\u95dc\u6ce8\u9762"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"27.3",src:n(54675).Z,width:"1222",height:"800"}),"\n\u67b6\u69cb\u7684\u908a\u754c\u300c\u8cab\u7a7f\u300d\u670d\u52d9\uff0c\u800c\u975e\u5728\u670d\u52d9\u4e4b\u9593\uff0c\u670d\u52d9\u88ab\u62c6\u89e3\u6210\u591a\u500b\u5143\u4ef6\uff0c\u5c07\u670d\u52d9\u8a2d\u8a08\u70ba\u300c\u9075\u5faa\u4f9d\u8cf4\u898f\u5247\u300d\u7684\u5167\u90e8\u5143\u4ef6\u67b6\u69cb"),(0,l.kt)("h2",{id:"\u57fa\u65bc\u5143\u4ef6\u7684\u670d\u52d9"},"\u57fa\u65bc\u5143\u4ef6\u7684\u670d\u52d9"),(0,l.kt)("p",null,"\u670d\u52d9\u53ef\u4ee5\u662f\u57fa\u65bc\u5143\u4ef6\u7684\uff0c\u4e0d\u5fc5\u662f\u4e00\u500b\u55ae\u7247\u3002"),(0,l.kt)("p",null,"\u6bcf\u500b\u670d\u52d9\u90fd\u6709\u81ea\u5df1\u7684\u5167\u90e8\u5143\u4ef6\u8a2d\u8a08\uff0c\u5141\u8a31\u5c07\u52a0\u5165\u65b0\u7279\u6027\u8b8a\u6210\u662f\u589e\u52a0\u65b0\u7684\u884d\u751f\u985e\u5225\u3002\u9019\u4e9b\u884d\u751f\u985e\u5225\u6d3b\u5728\u4ed6\u5011\u81ea\u5df1\u7684\u5143\u4ef6\u4e4b\u4e2d\n",(0,l.kt)("img",{alt:"27.4",src:n(12536).Z,width:"1746",height:"1274"})),(0,l.kt)("h2",{id:"\u7e3d\u7d50"},"\u7e3d\u7d50"),(0,l.kt)("p",null,"\u5118\u7ba1\u670d\u52d9\u5c0d\u65bc\u7cfb\u7d71\u7684\u53ef\u64f4\u5c55\u6027\u8207\u53ef\u958b\u767c\u6027\u662f\u6709\u7528\u7684\uff0c\u4f46\u4ed6\u5011\u672c\u8eab\u4e26\u4e0d\u662f\u67b6\u69cb\u4e0a\u7684\u91cd\u5927\u5143\u7d20\u3002"),(0,l.kt)("p",null,"\u7cfb\u7d71\u7684\u67b6\u69cb\u662f\u7531\u8a72\u7cfb\u7d71\u5167\u90e8\u7e6a\u88fd\u7684\u908a\u754c\uff0c\u4ee5\u53ca\u8de8\u8d8a\u9019\u4e9b\u908a\u754c\u7684\u4f9d\u8cf4\u4f86\u5b9a\u7fa9\u3002\u800c\u4e0d\u662f\u7531\u5143\u7d20\u901a\u8a0a\u548c\u57f7\u884c\u7684\u7269\u7406\u6a5f\u5236\u6240\u5b9a\u7fa9\u3002"),(0,l.kt)("p",null,"\u670d\u52d9\u53ef\u80fd\u662f\u55ae\u4e00\u5143\u4ef6\uff0c\u5b8c\u5168\u88ab\u67b6\u69cb\u908a\u754c\u5305\u570d\u8d77\u4f86\u3002\u6216\u8005\u670d\u52d9\u4e5f\u53ef\u80fd\u7531\u5e7e\u500b\u88ab\u67b6\u69cb\u908a\u754c\u5206\u9694\u7684\u5143\u4ef6\u7d44\u6210\u3002\u5728\u6975\u5c11\u6578\u60c5\u6cc1\u4e0b\uff0cclients \u548c services \u8026\u5408\u7684\u7a0b\u5ea6\u53ef\u80fd\u5c0e\u81f4\u6c92\u6709\u67b6\u69cb\u4e0a\u7684\u4efb\u4f55\u91cd\u8981\u610f\u7fa9\u3002"))}d.isMDXComponent=!0},97206:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/27.1-75185d0cdc0fbad9d11209612cf4b35f.png"},78752:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/27.2-2d93f88fc32f558e4cdaef51b1e82784.png"},54675:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/27.3-dacc193051ef1d83e869b04744a2b05b.png"},12536:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/27.4-7c16582ab90a5d38ee620374c5a842f1.png"}}]);