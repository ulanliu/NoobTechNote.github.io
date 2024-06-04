"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[9879],{3905:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>d});var n=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function p(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var u=n.createContext({}),o=function(e){var t=n.useContext(u),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},c=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},k="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),k=o(l),m=a,d=k["".concat(u,".").concat(m)]||k[m]||s[m]||r;return l?n.createElement(d,i(i({ref:t},c),{},{components:l})):n.createElement(d,i({ref:t},c))}));function d(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,i=new Array(r);i[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[k]="string"==typeof e?e:a,i[1]=p;for(var o=2;o<r;o++)i[o]=l[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}m.displayName="MDXCreateElement"},65179:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var n=l(87462),a=(l(67294),l(3905));const r={title:"Ch17: \u908a\u754c\uff1a\u756b\u7dda",sidebar_label:"Ch17: \u908a\u754c\uff1a\u756b\u7dda",sidebar_position:17},i=void 0,p={unversionedId:"sg/clean-architecture/ch17",id:"sg/clean-architecture/ch17",title:"Ch17: \u908a\u754c\uff1a\u756b\u7dda",description:"\u908a\u754c",source:"@site/docs/sg/clean-architecture/ch17.md",sourceDirName:"sg/clean-architecture",slug:"/sg/clean-architecture/ch17",permalink:"/docs/sg/clean-architecture/ch17",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/clean-architecture/ch17.md",tags:[],version:"current",lastUpdatedBy:"yvette-tsai",lastUpdatedAt:1717544124,formattedLastUpdatedAt:"Jun 4, 2024",sidebarPosition:17,frontMatter:{title:"Ch17: \u908a\u754c\uff1a\u756b\u7dda",sidebar_label:"Ch17: \u908a\u754c\uff1a\u756b\u7dda",sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"Ch16: \u7368\u7acb\u6027",permalink:"/docs/sg/clean-architecture/ch16"},next:{title:"Ch18: \u908a\u754c\u5256\u6790",permalink:"/docs/sg/clean-architecture/ch18"}},u={},o=[{value:"\u908a\u754c",id:"\u908a\u754c",level:2},{value:"\u5169\u500b\u60b2\u6158\u7684\u6545\u4e8b",id:"\u5169\u500b\u60b2\u6158\u7684\u6545\u4e8b",level:2},{value:"P\u516c\u53f8",id:"p\u516c\u53f8",level:3},{value:"W\u516c\u53f8",id:"w\u516c\u53f8",level:3},{value:"FitNesse",id:"fitnesse",level:2},{value:"\u4f60\u8a72\u756b\u4ec0\u9ebc\u7dda\u53ca\u4ec0\u9ebc\u6642\u5019\u756b\u5b83\u5011\uff1f",id:"\u4f60\u8a72\u756b\u4ec0\u9ebc\u7dda\u53ca\u4ec0\u9ebc\u6642\u5019\u756b\u5b83\u5011",level:2},{value:"\u90a3\u9ebc\u95dc\u65bc\u8f38\u5165\u548c\u8f38\u51fa\u5462\uff1f",id:"\u90a3\u9ebc\u95dc\u65bc\u8f38\u5165\u548c\u8f38\u51fa\u5462",level:2},{value:"Plugin\u67b6\u69cb",id:"plugin\u67b6\u69cb",level:2},{value:"Plugin\u53c3\u6578",id:"plugin\u53c3\u6578",level:2},{value:"\u7e3d\u7d50",id:"\u7e3d\u7d50",level:2}],c={toc:o},k="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(k,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u908a\u754c"},"\u908a\u754c"),(0,a.kt)("p",null,"\u8edf\u9ad4\u67b6\u69cb\u5c31\u662f\u756b\u7dda\u7684\u85dd\u8853\u2014\u2014\u4f5c\u8005\u7a31\u4e4b\u70ba\u908a\u754c\u3002"),(0,a.kt)("p",null,"\u5c07\u8edf\u9ad4\u5143\u7d20\u5f7c\u6b64\u5206\u958b\u4f86\uff0c\u4e26\u9650\u5236\u4e00\u65b9\u5c0d\u5176\u4ed6\u65b9\u7684\u4e86\u89e3\u3002"),(0,a.kt)("p",null,"\u756b\u7dda\u662f\u70ba\u4e86",(0,a.kt)("strong",{parentName:"p"},"\u76e1\u53ef\u80fd\u5ef6\u5f8c\u6c7a\u5b9a"),"\uff0c\u4e26",(0,a.kt)("strong",{parentName:"p"},"\u4f7f\u6c7a\u5b9a\u4e0d\u6703\u6c61\u67d3\u6838\u5fc3\u908f\u8f2f"),"\u3002"),(0,a.kt)("p",null,"\u67b6\u69cb\u5e2b\u7684\u76ee\u6a19\uff1a \u6e1b\u5c11",(0,a.kt)("strong",{parentName:"p"},"\u5efa\u7f6e"),"\u548c",(0,a.kt)("strong",{parentName:"p"},"\u7dad\u8b77"),"\u9700\u6c42\u7cfb\u7d71\u6240\u9700\u7684",(0,a.kt)("strong",{parentName:"p"},"\u4eba\u529b\u8cc7\u6e90"),"\u3002"),(0,a.kt)("p",null,"\u8017\u76e1\u4eba\u529b\u8cc7\u6e90\uff1a\u4ee3\u8868\u8026\u5408\uff08\u8026\u5408\u5c0e\u81f4\u904e\u65e9\u505a\u4e86\u4e0d\u6210\u719f\u7684\u6c7a\u5b9a\uff09"),(0,a.kt)("p",null,"\u54ea\u4e9b\u6c7a\u5b9a\u662f\u4e0d\u6210\u719f\u7684\uff1f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8207\u7cfb\u7d71\u696d\u52d9\u9700\u6c42\uff08\u4f7f\u7528\u6848\u4f8b\uff09\u7121\u95dc\u7684\u6c7a\u5b9a\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6846\u67b6\u3001\u8cc7\u6599\u5eab\u3001Web\u4f3a\u670d\u5668\u3001\u5de5\u5177\u7a0b\u5f0f\u5eab\u3001\u4f9d\u8cf4\u6ce8\u5165\u7b49\u6c7a\u5b9a\u3002")))),(0,a.kt)("p",null,"\u4e00\u500b\u597d\u7684\u7cfb\u7d71\u67b6\u69cb\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u80fd\u8b93\u9019\u985e\u578b\u7684\u6c7a\u5b9a\u51fa\u73fe\u51fa\u4f86\u7684\u7279\u6027\u662f\u8f14\u52a9\u6027\u3001\u53ef\u5ef6\u7de9\u7684\u3001\u4e0d\u4f9d\u8cf4\u9019\u4e9b\u6c7a\u5b9a"),(0,a.kt)("li",{parentName:"ul"},"\u5141\u8a31\u76e1\u53ef\u80fd\u5728\u665a\u7684\u6642\u523b\u624d\u505a\u51fa\u6c7a\u5b9a\uff0c\u4e14\u4e0d\u6703\u6709\u986f\u8457\u6027\u7684\u5f71\u97ff\u3002")),(0,a.kt)("h2",{id:"\u5169\u500b\u60b2\u6158\u7684\u6545\u4e8b"},"\u5169\u500b\u60b2\u6158\u7684\u6545\u4e8b"),(0,a.kt)("h3",{id:"p\u516c\u53f8"},"P\u516c\u53f8"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1980\u5e74\u5275\u59cb\u4eba\u5beb\u7684\u4e00\u500b\u7c21\u55ae\u7684\u55ae\u7247(simple monolithic\uff0c\u55ae\u9ad4\u5f0f\u67b6\u69cb\u61c9\u7528\u7a0b\u5f0f)\u5f62\u5f0f\u7684\u684c\u9762\u61c9\u7528\u7a0b\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"1990\u5e74\u767c\u5c55\u6210\u6d41\u884c\u548c\u6210\u529f\u7684\u7a0b\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"1990\u5e74\u4ee3\u5f8c\u671f\uff0cP\u7684\u5ba2\u6236\u8981\u6c42\u8981\u6709web\u7248\u672c\uff0c\u8058\u8acb\u5f88\u591aJava\u5de5\u7a0b\u5e2b")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Ch17-s1",src:l(33474).Z,width:"2790",height:"1504"})),(0,a.kt)("p",null,"Java \u5de5\u7a0b\u5e2b\u5922\u60f3\u8457\u6709\u4e00\u500b\u4f3a\u670d\u5668\u8fb2\u5834\uff0c\u63a1\u7528\u9f90\u5927\u7684\u4e09\u5c64\u300c\u67b6\u69cb\u300d\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"GUI\u4f3a\u670d\u5668"),(0,a.kt)("li",{parentName:"ol"},"Middleware\u4f3a\u670d\u5668"),(0,a.kt)("li",{parentName:"ol"},"\u8cc7\u6599\u5eab\u4f3a\u670d\u5668")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Ch17-s2",src:l(59791).Z,width:"2750",height:"2336"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65b0\u589e1\u500b\u6b04\u4f4d\uff0c\u5fc5\u9808\u88ab\u52a0\u5230\u6bcf1\u5c64\u7684\u985e\u5225\u4e2d "),(0,a.kt)("li",{parentName:"ul"},"\u67092\u500b\u50b3\u9001\u65b9\u5411\uff0c\u9700\u8a2d\u8a084\u7a2e\u8a0a\u606f\u5354\u5b9a "),(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u500b\u5354\u5b9a\u6709\u767c\u9001\u8ddf\u63a5\u6536\u7aef\uff0c8\u500b\u5354\u5b9a\u8655\u7406\u7a0b\u5e8f(handler)")),(0,a.kt)("p",null,"\u525b\u958b\u59cb\u6c92\u6709\u4f3a\u670d\u5668\u8fb2\u5834\uff0c\u53ea\u662f\u57281\u53f0\u6a5f\u5668\u4e0a\u904b\u884c3\u500b\u57f7\u884c\u6a94\uff0c\u57f7\u884c3\u500b\u4e0d\u540c\u7684\u884c\u7a0b\n\u4f46\u6700\u5f8c\u9084\u662f\u4e00\u6a23\u53ea\u5728\u540c1\u53f0\u6a5f\u5668\u4e0a"),(0,a.kt)("p",null,"P\u516c\u53f8\u4e5f\u5f9e\u4f86\u6c92\u6709\u8ce3\u9700\u8981\u4f3a\u670d\u5668\u8fb2\u5834\u7684\u7248\u672c\uff0c\u4e5f\u53ea\u90e8\u7f72\u5728\u55ae\u4e00\u4f3a\u670d\u5668\n\u60b2\u5287\u5728\u65bc\uff1a",(0,a.kt)("strong",{parentName:"p"},"\u67b6\u69cb\u5e2b\u63d0\u524d\u505a\u4e86\u6c7a\u5b9a"),"\uff0c\u6240\u4ee5\u5927\u5927\u589e\u52a0\u4e86\u958b\u767c\u5de5\u4f5c\u3002"),(0,a.kt)("h3",{id:"w\u516c\u53f8"},"W\u516c\u53f8"),(0,a.kt)("p",null,"\u7ba1\u7406\u516c\u53f8\u8eca\u968a\u7684\u4f01\u696d\uff0c\u8acb\u4e86\u4e00\u540d\u67b6\u69cb\u5e2b"),(0,a.kt)("p",null,"\u67b6\u69cb\u5e2b\u8a8d\u70ba\uff1a\u5c0f\u5c0f\u904b\u884c\u6240\u9700\u8981\u4e00\u500b\u5168\u9762\u7684\u3001\u4f01\u696d\u898f\u6a21\u7684\u3001\u670d\u52d9\u5c0e\u5411\u7684\u300c\u67b6\u69cb\u300d(SoA)\u3002"),(0,a.kt)("p",null,"\u6240\u6709\u4e0d\u540c\u7684\u300cobject\u300d\u5efa\u7acb\u4e00\u500b\u5de8\u5927\u7684domain model\uff0c\u8a2d\u8a08\u4e00\u5957service\u4f86\u7ba1\u7406\u9019\u4e9bdomain object\uff0c\u628a\u958b\u767c\u4eba\u54e1\u9001\u5f80\u5730\u7344"),(0,a.kt)("p",null,"\u5047\u8a2d\u628a\u806f\u7d61\u4eba\u7684\u59d3\u540d\u3001\u5730\u5740\u3001\u96fb\u8a71\uff0c\u52a0\u5165\u5230\u92b7\u552e\u7d00\u9304\u4e2d\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"ServiceRegistry\u8981\u6c42ContactService\u7684ID\uff0c\u9001\u4e00\u500bCreateContact\u5230ContactService"),(0,a.kt)("li",{parentName:"ol"},"CreateContact\u5341\u5e7e\u9805\u5fc5\u586b"),(0,a.kt)("li",{parentName:"ol"},"\u7a0b\u5f0f\u8a2d\u8a08\u5e2b\u7121\u6cd5\u5b58\u53d6\u8cc7\u6599\uff1a\u8a2d\u8a08\u5e2b\u53ea\u6709\u540d\u5b57\u96fb\u8a71\u5730\u5740\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u507d\u9020\u8cc7\u6599\u5f8c\uff0c\u7a0b\u5f0f\u8a2d\u8a08\u5e2b\u9808\u5c07\u65b0\u7684\u806f\u7d61\u4ebaID\u585e\u5230\u92b7\u552e\u7d00\u9304\u4e2d (UpdateContact\u8a0a\u606f\u7d66SaleRecordService)")),(0,a.kt)("p",null,"\u6e2c\u8a66\uff1a\u9010\u4e00\u555f\u52d5\u5fc5\u8981\u670d\u52d9\uff0c\u555f\u52d5\u8a0a\u606f\u532f\u6d41\u6392......\u50b3\u4f86\u50b3\u53bb\u9020\u6210\u50b3\u64ad\u5ef6\u9072\uff0c\u7136\u5f8c\u53c8\u6709\u4e00\u500b\u63a5\u4e00\u500b\u7684\u4f47\u5217\u4e2d\u7b49\u5f85\u8655\u7406"),(0,a.kt)("p",null,"\u672c\u8cea\u4e0a\u6c92\u6709\u932f\nW\u516c\u53f8\u932f\u5728\uff1a",(0,a.kt)("strong",{parentName:"p"},"\u904e\u65e9\u63a1\u7528SoA"),"\uff0c\u63a1\u7528\u5927\u91cf\u7684\u9818\u57df\u7269\u4ef6\u670d\u52d9\u3002"),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"\u67b6\u69cb\u5e2b\u904e\u65e9\u66ff\u7cfb\u7d71\u904b\u884c\u65b9\u5f0f\u4e0b\u6c7a\u5b9a")),(0,a.kt)("h2",{id:"fitnesse"},"FitNesse"),(0,a.kt)("p",null,"\u6b63\u9762\u4f8b\u5b50\uff1a"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u6848\u4f8b\uff1a\u5efa\u7acb\u4e00\u500b\u7c21\u55ae\u7684wiki\u4f86\u5305\u88ddward cunningham FIT\uff08\u81ea\u52d5\u5316\u6e2c\u8a66\u5de5\u5177\uff09\uff0c\u7de8\u5beb\u9a57\u6536\u6e2c\u8a66\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7de8\u5beb\u81ea\u5df1\u7684Web\u4f3a\u670d\u5668\uff0c\u63a8\u9072Web\u6846\u67b6\u9078\u64c7"),(0,a.kt)("li",{parentName:"ul"},"\u63a8\u9072\u8cc7\u6599\u5eab\u9078\u64c7\uff0c\u5728\u8cc7\u6599\u5b58\u53d6\u548c\u5132\u5b58\u9ad4\u4e4b\u9593\u5efa\u7acb\u4ecb\u9762")),(0,a.kt)("p",null,"\u8655\u7406\u65b9\u5f0f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u6d89\u53ca\u7372\u53d6\u548c\u4fdd\u5b58\u8cc7\u6599",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6a01stub -> ",(0,a.kt)("strong",{parentName:"li"},"mock data")," -> MockWikiPage"))),(0,a.kt)("li",{parentName:"ul"},"\u9700\u8981\u771f\u6b63\u8cc7\u6599\u5b58\u53d6",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5be6\u4f5c\u96dc\u6e4a\u8868 -> ",(0,a.kt)("strong",{parentName:"li"},"\u8a18\u5728memory (ram)")," -> InMemoryPage"))),(0,a.kt)("li",{parentName:"ul"},"\u5be6\u4f5c\u8cc7\u6599\u6301\u4e45\u5316",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5b58\u53d6\u4e00\u822c\u6a94\u6848 -> FileSystemPage")))),(0,a.kt)("p",null,"\u5ba2\u6236\u60f3\u8981\u628a\u8cc7\u6599\u5eab\u63db\u6210MySQL -> \u6539\u5beb\u65b0\u589eMySqlWikiPage"),(0,a.kt)("p",null,"\u958b\u767c\u768418\u500b\u6708\u5167\uff0c\u6c92\u6709\u4efb\u4f55\u8cc7\u6599\u5eab\uff0c\u6e2c\u8a66\u57f7\u884c\u90fd\u5f88\u5feb\uff0c\u4e0d\u6703\u9020\u6210\u958b\u767c\u5ef6\u9072\u3002"),(0,a.kt)("p",null,"\u5283\u5b9a\u908a\u754c\u7dda\u52a9\u65bc\u63a8\u9072\u548c\u5ef6\u7de9\u505a\u6c7a\u5b9a\u3002"),(0,a.kt)("h2",{id:"\u4f60\u8a72\u756b\u4ec0\u9ebc\u7dda\u53ca\u4ec0\u9ebc\u6642\u5019\u756b\u5b83\u5011"},"\u4f60\u8a72\u756b\u4ec0\u9ebc\u7dda\u53ca\u4ec0\u9ebc\u6642\u5019\u756b\u5b83\u5011\uff1f"),(0,a.kt)("p",null,"\u5728\u91cd\u8981\u4e8b\u52d9\u548c\u4e0d\u91cd\u8981\u7684\u4e8b\u7269\u4e4b\u9593\u756b\u7dda"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"GUI\u8207\u696d\u52d9\u908f\u8f2f\u6c92\u95dc\u4fc2\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8cc7\u6599\u5eab\u8207GUI\u6c92\u95dc\u4fc2\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8cc7\u6599\u5eab\u8207\u696d\u52d9\u898f\u5247\u7121\u95dc\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4f46\u8cc7\u6599\u5eab\u662f\u696d\u52d9\u898f\u5247\u53ef",(0,a.kt)("strong",{parentName:"p"},"\u9593\u63a5"),"\u4f7f\u7528\u7684\u5de5\u5177"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u696d\u52d9\u898f\u5247\u4e0d\u9700\u4e86\u89e3\u8cc7\u6599\u5eab\u7d30\u7bc0\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u696d\u52d9\u898f\u5247\u9700\u900f\u904e\u4e00\u7d44\u51fd\u5f0f\u53ef\u7372\u53d6get\u6216\u4fdd\u5b58set\u8cc7\u6599",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u628a\u8cc7\u6599\u5eab\u96b1\u85cf\u5728\u4e00\u500b\u4ecb\u9762\u4e4b\u5f8c\u3002")))))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Ch17-2 \u908a\u754c\u7dda",src:l(3171).Z,width:"412",height:"301"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Ch17-3 \u696d\u52d9\u898f\u5247\u548c\u8cc7\u6599\u5eab\u5143\u4ef6",src:l(7990).Z,width:"423",height:"321"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Business Rule\u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55\u985e\u578b\u7684\u8cc7\u6599\u5eab"),(0,a.kt)("li",{parentName:"ul"},"\u4f46\u6c92\u6709Business Rule\uff0c\u8cc7\u6599\u5eab\u7121\u6cd5\u5b58\u5728"),(0,a.kt)("li",{parentName:"ul"},"Database\u5143\u4ef6\u53ef\u4ee5\u88ab\u4e0d\u540c\u5be6\u4f5c\u66ff\u63db",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9078\u64c7\u8cc7\u6599\u5eab\u7684\u6c7a\u5b9a\u53ef\u4ee5\u88ab\u63a8\u9072")))),(0,a.kt)("h2",{id:"\u90a3\u9ebc\u95dc\u65bc\u8f38\u5165\u548c\u8f38\u51fa\u5462"},"\u90a3\u9ebc\u95dc\u65bc\u8f38\u5165\u548c\u8f38\u51fa\u5462\uff1f"),(0,a.kt)("p",null,"\u5ba2\u6236(\u4f7f\u7528\u8005)\u770b\u5230GUI\uff0c\u5c31\u8a8d\u70baGUI\u5c31\u662f\u7cfb\u7d71\u3002"),(0,a.kt)("admonition",{title:"Example",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u904a\u6232"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u4ecb\u9762\uff1a\u87a2\u5e55\u3001\u6ed1\u9f20\u3001\u9375\u76e4\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4ecb\u9762\u5f8c\u9762\u96b1\u85cf\uff1a\u4e00\u5957\u8907\u96dc\u7684\u8cc7\u6599\u7d50\u69cb\u548c\u51fd\u5f0f\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4ed6\u5011\u6a21\u64ec\u904a\u6232\u4e2d\u7684\u4e8b\u4ef6\uff0c\u4f46\u4e0d\u6703\u5728\u87a2\u5e55\u4e0a\u986f\u793a\u51fa\u904a\u6232\u3002"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Ch17-4 GUI\u548c\u696d\u52d9\u898f\u5247\u5143\u4ef6\u4e4b\u9593\u7684\u908a\u754c",src:l(82612).Z,width:"413",height:"288"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"IO\u662f\u7121\u95dc\u7dca\u8981\u7684"),(0,a.kt)("li",{parentName:"ul"},"Business Rule\u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55\u985e\u578b\u7684GUI")),(0,a.kt)("h2",{id:"plugin\u67b6\u69cb"},"Plugin\u67b6\u69cb"),(0,a.kt)("admonition",{title:"\u8edf\u9ad4\u958b\u767c\u6280\u8853\u7684\u6b77\u53f2",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u4f55\u65b9\u4fbf\u5730\u5efa\u7acbplugin\u5960\u5b9a\u53ef\u64f4\u5c55\u548c\u53ef\u7dad\u8b77\u7684\u7cfb\u7d71\u67b6\u69cb")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Ch17-5 \u63d2\u5165Plugin\u5230\u696d\u52d9\u898f\u5247",src:l(36746).Z,width:"445",height:"293"})),(0,a.kt)("p",null,"GUI\u3001DB\u5c31\u985e\u4f3cPlugin"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GUI: web\u3001client/server\u3001SoA\u3001\u4e3b\u63a7\u53f0"),(0,a.kt)("li",{parentName:"ul"},"DB: SQL or NoSQL")),(0,a.kt)("h2",{id:"plugin\u53c3\u6578"},"Plugin\u53c3\u6578"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Ch17-6 ReSharper\u4f9d\u8cf4\u65bcVisual Studio",src:l(19783).Z,width:"230",height:"302"})),(0,a.kt)("p",null,"\u7cfb\u7d71\u67b6\u69cb\u6210Plugin\u67b6\u69cb\n\u53ef\u4ee5\u5efa\u7acb\u8d77\u9632\u706b\u7246\uff0c\u5982\u679cGUI\u63d2\u5165\u5230\u696d\u52d9\u898f\u5247\uff0c\u5247GUI\u7684\u8b8a\u52d5\u4e0d\u6703\u5f71\u97ff\u5230\u696d\u52d9\u898f\u5247\n\u958b\u653e\u67d0\u4e9b\u90e8\u5206\uff0c\u4fdd\u8b77\u4e0d\u76f8\u95dc\u7684\u90e8\u5206\u4e0d\u88ab\u7834\u58de\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8b8a\u5316\u70ba\u8ef8"),"\u756b\u908a\u754c\uff1a\u5169\u5074\u7684\u5143\u4ef6\u4ee5\u4e0d\u540c\u7684\u901f\u7387\u3001\u4e0d\u540c\u7684\u539f\u56e0\u6539\u8b8a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4ee5\u696d\u52d9\u898f\u5247\u76f8\u6bd4\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"GUI\u5728\u4e0d\u540c\u6642\u9593\u4ee5\u4e0d\u540c\u901f\u7387\u6539\u8b8a -> \u4e00\u500b\u908a\u754c"))),(0,a.kt)("li",{parentName:"ul"},"\u4ee5\u4f9d\u8cf4\u6ce8\u5165\u6846\u67b6\u76f8\u6bd4\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u696d\u52d9\u898f\u5247\u5728\u4e0d\u540c\u6642\u9593\u4ee5\u4e0d\u540c\u901f\u7387\u6539\u8b8a -> \u4e00\u500b\u908a\u754c")))),(0,a.kt)("p",null,"\u55ae\u4e00\u8077\u8cac\u539f\u5247SRP\u544a\u8a34\u6211\u5011\u8a72\u5982\u4f55\u756b\u908a\u754c"),(0,a.kt)("h2",{id:"\u7e3d\u7d50"},"\u7e3d\u7d50"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c07\u7cfb\u7d71\u5283\u5206\u70ba",(0,a.kt)("strong",{parentName:"li"},"\u6838\u5fc3\u696d\u52d9 - Business Rule"),"\u3001",(0,a.kt)("strong",{parentName:"li"},"\u8207\u6838\u5fc3\u696d\u52d9\u6c92\u6709\u76f4\u63a5\u95dc\u4fc2\u7684\u5fc5\u8981\u529f\u80fd - Plugin")),(0,a.kt)("li",{parentName:"ul"},"\u5143\u4ef6\u7684\u7bad\u982d\u6307\u5411\u540c\u4e00\u65b9\u5411 - ",(0,a.kt)("strong",{parentName:"li"},"Business Rule")),(0,a.kt)("li",{parentName:"ul"},"\u4f9d\u8cf4\u6027\u7531",(0,a.kt)("strong",{parentName:"li"},"\u4f4e\u5c64\u7d1a\u7684\u7d30\u7bc0"),"\u5230",(0,a.kt)("strong",{parentName:"li"},"\u9ad8\u5c64\u7d1a\u7684\u62bd\u8c61")," (DIP\u4f9d\u8cf4\u53cd\u8f49\u539f\u5247, SAP\u7a69\u5b9a\u62bd\u8c61\u539f\u5247)")))}s.isMDXComponent=!0},3171:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/ch17-2-c727416df07e94343f46a0090b88abc9.png"},7990:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/ch17-3-28980faf7841dbf3e756dc88b3965bd1.png"},82612:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/ch17-4-0bf107ebcc7f5bebe6d7c64268e4a9f5.png"},36746:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/ch17-5-34464a294254ef2c1a3d2f7163108b6f.png"},19783:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/ch17-6-749683c50f33381d1b1411b24e8541a1.png"},33474:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/ch17-s1-f62b6cbae3032a63e0a3cde8af944022.jpg"},59791:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/ch17-s2-acd34b05133d9a9f71c9dbe7bd3c9141.jpg"}}]);