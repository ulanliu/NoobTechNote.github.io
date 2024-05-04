"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[8811],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(a),c=n,g=u["".concat(i,".").concat(c)]||u[c]||k[c]||l;return a?r.createElement(g,p(p({ref:t},m),{},{components:a})):r.createElement(g,p({ref:t},m))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,p=new Array(l);p[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:n,p[1]=o;for(var s=2;s<l;s++)p[s]=a[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},95374:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={title:"Ch16: \u7a7a\u9593\u5f0f\u67b6\u69cb\u98a8\u683c",tsidebar_label:"Ch16: \u7a7a\u9593\u5f0f\u67b6\u69cb\u98a8\u683c",sidebar_position:16},p="\u5354\u4f5c\u9a45\u52d5\u7684\u670d\u52d9\u5c0e\u5411\u67b6\u69cb(Orchestration-Driven Service-Oriented Architecture)",o={unversionedId:"sg/fundamentals-of-software-architecture/ch16",id:"sg/fundamentals-of-software-architecture/ch16",title:"Ch16: \u7a7a\u9593\u5f0f\u67b6\u69cb\u98a8\u683c",description:"\u524d\u8a00",source:"@site/docs/sg/fundamentals-of-software-architecture/ch16.md",sourceDirName:"sg/fundamentals-of-software-architecture",slug:"/sg/fundamentals-of-software-architecture/ch16",permalink:"/docs/sg/fundamentals-of-software-architecture/ch16",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/fundamentals-of-software-architecture/ch16.md",tags:[],version:"current",lastUpdatedBy:"mingyen-chung",lastUpdatedAt:1714815139,formattedLastUpdatedAt:"May 4, 2024",sidebarPosition:16,frontMatter:{title:"Ch16: \u7a7a\u9593\u5f0f\u67b6\u69cb\u98a8\u683c",tsidebar_label:"Ch16: \u7a7a\u9593\u5f0f\u67b6\u69cb\u98a8\u683c",sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"Ch15: \u7a7a\u9593\u5f0f\u67b6\u69cb\u98a8\u683c",permalink:"/docs/sg/fundamentals-of-software-architecture/ch15"},next:{title:"Ch17: \u5fae\u670d\u52d9\u67b6\u69cb",permalink:"/docs/sg/fundamentals-of-software-architecture/ch17"}},i={},s=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u62d3\u58a3\u7d50\u69cb",id:"\u62d3\u58a3\u7d50\u69cb",level:2},{value:"\u5206\u985e",id:"\u5206\u985e",level:2},{value:"\u8a0a\u606f\u6d41",id:"\u8a0a\u606f\u6d41",level:3},{value:"\u8209\u4f8b\uff1a",id:"\u8209\u4f8b",level:4},{value:"\u8907\u7528...\u8207\u8026\u5408",id:"\u8907\u7528\u8207\u8026\u5408",level:2},{value:"\u67b6\u69cb\u7279\u6027\u7684\u7b49\u7d1a",id:"\u67b6\u69cb\u7279\u6027\u7684\u7b49\u7d1a",level:2}],m={toc:s},u="wrapper";function k(e){let{components:t,...l}=e;return(0,n.kt)(u,(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u5354\u4f5c\u9a45\u52d5\u7684\u670d\u52d9\u5c0e\u5411\u67b6\u69cborchestration-driven-service-oriented-architecture"},"\u5354\u4f5c\u9a45\u52d5\u7684\u670d\u52d9\u5c0e\u5411\u67b6\u69cb(Orchestration-Driven Service-Oriented Architecture)"),(0,n.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,n.kt)("p",null,"\u5354\u4f5c\u9a45\u52d5\u7684\u670d\u52d9\u5c0e\u5411\u67b6\u69cb\uff0c\u9019\u7a2e\u67b6\u69cb\u98a8\u683c\u7684\u6f14\u9032\u80cc\u666f\u53d7\u5230\u7576\u6642\u7684\u6642\u4ee3\u74b0\u5883\u548c\u7d44\u7e54\u54f2\u5b78\u7684\u5f71\u97ff\u3002\u8a72\u67b6\u69cb\u5728 1990 \u5e74\u4ee3\u672b\u671f\u7684\u4f01\u696d\u74b0\u5883\u4e2d\u61c9\u904b\u800c\u751f\uff0c\u7576\u6642\u7684\u4f01\u696d\u6b63\u5728\u8fc5\u901f\u6210\u9577\uff0c\u9700\u8981\u61c9\u5c0d\u591a\u5143\u5316\u7684 IT \u9700\u6c42\uff0c\u8a31\u591a\u516c\u53f8\u8feb\u5207\u9700\u8981\u53ef\u64f4\u5c55\u6027\u7b49\u7279\u6027\u3002\u7136\u5f8c",(0,n.kt)("strong",{parentName:"p"},"\u8a08\u7b97\u8cc7\u6e90\u6709\u9650\uff0c\u5206\u6563\u5f0f\u8a08\u7b97\u525b\u525b\u5d1b\u8d77"),"\u3002"),(0,n.kt)("p",null,"\u9019\u7a2e\u67b6\u69cb\u7684\u7279\u6027\u5305\u62ec\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u5916\u90e8\u56e0\u7d20\u9a45\u52d5\uff1a")," \u5916\u90e8\u58d3\u529b\u8feb\u4f7f\u67b6\u69cb\u5e2b\u9078\u64c7\u5206\u6563\u5f0f\u67b6\u69cb\uff0c\u4ee5\u61c9\u5c0d\u6602\u8cb4\u7684\u64cd\u4f5c\u7cfb\u7d71\u548c\u8cc7\u6599\u5eab\u6388\u6b0a\u7b49\u554f\u984c\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u4f01\u696d\u5c64\u6b21\u7684\u91cd\u8907\u4f7f\u7528\uff1a")," \u67b6\u69cb\u7684\u4e3b\u8981\u76ee\u6a19\u662f\u5be6\u73fe\u4f01\u696d\u5c64\u6b21\u7684\u91cd\u8907\u4f7f\u7528\uff0c\u5c07\u696d\u52d9\u884c\u70ba\u5206\u70ba\u4e0d\u540c\u5c64\u5f0f\uff0c\u4ee5\u4fc3\u9032\u91cd\u8907\u4f7f\u7528\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u6280\u8853\u5206\u5272\uff1a")," \u8a72\u67b6\u69cb\u98a8\u683c\u63a8\u52d5\u4e86\u6280\u8853\u5206\u5272\u7684\u7406\u5ff5\uff0c\u4f46\u9019\u4e5f\u5e36\u4f86\u4e86\u8907\u96dc\u6027\u8207\u8026\u5408\u6027\u7684\u554f\u984c\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u5354\u4f5c\u5f15\u64ce\uff1a")," \u5354\u4f5c\u5f15\u64ce\u662f\u9019\u7a2e\u67b6\u69cb\u7684\u6838\u5fc3\uff0c\u7528\u65bc\u5354\u8abf\u696d\u52d9\u670d\u52d9\u7684\u5be6\u73fe(\u91cd\u8981\u908f\u8f2f\u90fd\u5728\u9019)\uff0c\u4f46\u9019\u4e5f\u53ef\u80fd\u6210\u70ba\u7d44\u7e54\u4e2d\u7684\u653f\u6cbb\u529b\u91cf\u548c\u5b98\u50da\u8ca7\u9838(\u5eb7\u5a01\u6cd5\u5247)\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u8a0a\u606f\u6d41\uff1a")," \u6240\u6709\u8acb\u6c42\u90fd\u901a\u904e",(0,n.kt)("strong",{parentName:"p"},"\u5354\u4f5c\u5f15\u64ce"),"\u9032\u884c\uff0c\u5373\u4f7f\u662f\u5167\u90e8\u8abf\u7528\u4e5f\u662f\u5982\u6b64\u3002"))),(0,n.kt)("p",null,"\u9019\u7a2e\u67b6\u69cb\u5728\u7576\u6642\u5177\u6709\u4e00\u5b9a\u7684\u512a\u52e2\uff0c\u4f46\u4e5f\u5b58\u5728\u8a31\u591a\u7f3a\u9ede\uff0c\u5305\u62ec\u8907\u96dc\u6027\u3001\u8026\u5408\u6027\u3002"),(0,n.kt)("h2",{id:"\u62d3\u58a3\u7d50\u69cb"},"\u62d3\u58a3\u7d50\u69cb"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"topology",src:a(62195).Z,width:"2264",height:"1446"})),(0,n.kt)("h2",{id:"\u5206\u985e"},"\u5206\u985e"),(0,n.kt)("p",null,"\u8a72\u67b6\u69cb\u7684\u54f2\u5b78\uff0c\u4e3b\u8981\u96c6\u4e2d\u5728",(0,n.kt)("strong",{parentName:"p"},"\u4f01\u696d\u5c64\u7d1a\u7684\u5fa9\u7528"),"\uff0c\u4ee5\u4e0b\u5206\u985e\u4e2d\u7684\u6bcf\u4e00\u5c64\u6b63\u662f\u70ba\u4e86\u652f\u63f4\u9019\u4e00\u500b\u76ee\u6a19"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u696d\u52d9\u670d\u52d9\uff1a")," \u4f4d\u65bc\u67b6\u69cb\u7684\u6700\u9802\u90e8\uff0c\u5145\u7576\u9032\u5165\u9ede\uff0c\u4ee3\u8868\u8457",(0,n.kt)("strong",{parentName:"p"},"\u696d\u52d9\u9818\u57df"),"\u7684\u884c\u70ba\uff0c\u4f8b\u5982\u57f7\u884c\u4ea4\u6613\uff0c\u6216\u662f\u4e0b\u8a02\u55ae\u3002\u9019\u4e9b\u670d\u52d9\u901a\u5e38\u7531\u696d\u52d9\u7528\u6236\u5b9a\u7fa9\uff0c\u4e0d\u5305\u542b\u5be6\u969b\u7684\u7a0b\u5f0f\u78bc\uff0c\u53ea\u5305\u542b",(0,n.kt)("strong",{parentName:"p"},"\u8f38\u5165"),"\u3001",(0,n.kt)("strong",{parentName:"p"},"\u8f38\u51fa"),"\uff0c\u6709\u6642\u6709\u7db1\u8981\u7684\u8cc7\u8a0a\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u4f01\u696d\u670d\u52d9\uff1a")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5305\u62ec\u7d30\u9846\u7c92\u7684\u3001\u5171\u4eab\u7684\u4e00\u4e9b\u5be6\u4f5c\uff0c\u901a\u5e38\u662f\u6253\u9020\u7279\u5b9a\u696d\u52d9\u9818\u57df\u6700\u57fa\u790e\u884c\u70ba\u7684\u4efb\u52d9\u3002\u4f8b\u5982\u5275\u5efa\u5ba2\u6236\u6216\u8a08\u7b97\u5831\u50f9\u3002\u9019\u4e9b\u670d\u52d9\u662f\u69cb\u6210\u7c97\u9846\u7c92\u5ea6\u696d\u52d9\u670d\u52d9\u7684\u57fa\u672c\u5143\u4ef6\uff0c\u900f\u904e\u5354\u4f5c\u5f15\u64ce\u9032\u884c\u5354\u8abf\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u958b\u767c\u4eba\u54e1\u80fd\u5920\u4ee5\u6b63\u78ba\u7684\u9846\u7c92\u5ea6\u4f86\u6253\u9020\u7d30\u9846\u7c92\u7684\u4f01\u696d\u670d\u52d9\uff0c\u5247\u4f01\u696d\u5c31\u4e0d\u9700\u8981\u518d\u91cd\u5beb\u90a3\u90e8\u5206\u7684\u7a0b\u5f0f\u78bc\uff0c\u6f38\u6f38\u7684\uff0c\u4f01\u696d\u5c31\u80fd\u6253\u9020\u4e00\u7d44\u53ef\u8907\u7528\u7684\u8cc7\u7522\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u73fe\u5be6\u7684\u52d5\u614b\u672c\u8cea\u8b93\u9019\u4e9b\u5e38\u8b58\u5931\u6557\u3002\u696d\u52d9\u5143\u4ef6\u4e0d\u50cf\u5efa\u7bc9\u6750\u6599\uff0c\u89e3\u6c7a\u65b9\u6848\u53ef\u4ee5\u6578\u5341\u5e74\u4e0d\u8b8a\u3002\u5e02\u5834\u3001\u6280\u8853\u8b8a\u5316\u3001\u5de5\u7a0b\u5be6\u52d9\u3001\u9084\u6709\u5176\u4ed6\u56e0\u7d20\uff0c\u8b93\u60f3\u5728\u8edf\u9ad4\u9818\u57df\u52a0\u5165\u7a69\u5b9a\u6027\u7684\u5404\u7a2e\u5617\u8a66\u8b8a\u5f97\u66f4\u6df7\u4e82\u3002"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u61c9\u7528\u670d\u52d9\uff1a")," \u4e26\u975e\u6240\u6709\u670d\u52d9\u90fd\u9700\u8981\u50cf\u4f01\u696d\u670d\u52d9\u4e00\u6a23\u7684\u7d30\u7c92\u5ea6\u548c\u91cd\u8907\u4f7f\u7528\u3002\u61c9\u7528\u670d\u52d9\u662f\u4e00\u6b21\u6027\u7684\u3001\u55ae\u4e00\u5be6\u73fe\u7684\u670d\u52d9\uff0c\u901a\u5e38\u7531\u55ae\u4e00\u61c9\u7528\u5718\u968a\u64c1\u6709\u548c\u7ba1\u7406\u3002\u4f8b\u5982\uff1a\u53ef\u80fd\u6709\u500b\u61c9\u7528\u9700\u8981\u5730\u7406\u4f4d\u7f6e\uff0c\u4f46\u7d44\u7e54\u4e0d\u60f3\u82b1\u6642\u9593\u6216\u529b\u6c23\u5c07\u5176\u8b8a\u6210\u53ef\u670d\u7528\u7684\u670d\u52d9\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u57fa\u790e\u8a2d\u65bd\u670d\u52d9\uff1a")," \u63d0\u4f9b\u64cd\u4f5c\u6027\u95dc\u6ce8\u9ede\uff0c\u5982\u76e3\u8996\u3001\u65e5\u8a8c\u8a18\u9304\u3001\u8a8d\u8b49\u548c\u6388\u6b0a\u3002\u9019\u4e9b\u670d\u52d9\u901a\u5e38\u662f\u8207\u5171\u4eab\u7684\u57fa\u790e\u8a2d\u65bd\u5718\u968a\u7dca\u5bc6\u5408\u4f5c")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u5354\u4f5c\u5f15\u64ce\uff1a")," \u5354\u4f5c\u5f15\u64ce\u662f\u6b64\u67b6\u69cb\u7684\u6838\u5fc3\uff0c\u900f\u904e\u5354\u4f5c\u5305\u62ec\u50cf\u662f",(0,n.kt)("strong",{parentName:"p"},"\u4ea4\u6613\u5354\u8abf"),"\u8207",(0,n.kt)("strong",{parentName:"p"},"\u8a0a\u606f\u8f49\u63db"),"\uff0c\u5c07\u696d\u52d9\u670d\u52d9\u7684\u5be6\u4f5c\u4e32\u8d77\u4f86\u3002"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5b9a\u7fa9\u696d\u52d9\u8207\u4f01\u696d\u670d\u52d9\u95dc\u4fc2\uff0c\u4ed6\u5011\u5982\u4f55\u5c0d\u61c9\uff0c\u4ee5\u53ca\u4ea4\u6613\u7684\u754c\u9650\u4f55\u5728\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5145\u7576\u6574\u5408\u4e2d\u6a1e\uff0c\u8b93\u67b6\u69cb\u5e2b\u5f97\u4ee5\u5c07\u5ba2\u88fd\u5316\u7a0b\u5f0f\u78bc\u53ca\u5957\u4ef6\u3001\u820a\u6709\u8edf\u9ad4\u7cfb\u7d71\u6574\u5408\u8d77\u4f86\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u56e0\u70ba\u662f\u67b6\u69cb\u6838\u5fc3\uff0c\u53c8\u53d7\u5230\u5eb7\u5a01\u6cd5\u5247(Conway)\u5f71\u97ff\u3002\u8ca0\u8cac\u5f15\u64ce\u7684\u9019\u7fa4\u67b6\u69cb\u5e2b\u5f62\u6210\u7d44\u7e54\u5167\u7684\u653f\u6cbb\u529b\u91cf\uff0c\u6700\u7d42\u6210\u70ba\u5e36\u6709\u5b98\u50da\u4e3b\u7fa9\u7684\u74f6\u9838\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u628a\u4ea4\u6613\u884c\u70ba\u5378\u8f09\u5230\u4e00\u500b\u5354\u4f5c\u5de5\u5177\u807d\u8d77\u4f86\u5f88\u597d\uff0c\u4f46\u8981\u627e\u51fa\u4ea4\u6613\u7684\u6b63\u78ba\u9846\u7c92\u5ea6\u537b\u8d8a\u4f86\u8d8a\u56f0\u96e3\u3002\u96d6\u7136\u53ef\u4ee5\u628a\u5e7e\u500b\u670d\u52d9\u6253\u5305\u8fd1\u4e00\u500b\u5206\u6563\u5f0f\u4ea4\u6613\uff0c\u4f46\u7576\u958b\u767c\u4eba\u54e1\u5fc5\u9808\u641e\u6e05\u695a\u670d\u52d9\u4e4b\u9593\u9069\u7576\u7684\u4ea4\u6613\u908a\u754c\u6642\uff0c\u67b6\u69cb\u6703\u8b8a\u5f97\u66f4\u8907\u96dc\u3002")))),(0,n.kt)("p",null,"\u4e0d\u540c\u7684\u5206\u5c64\u7d50\u69cb\u5171\u540c\u5efa\u69cb\u4e86\u5354\u4f5c\u9a45\u52d5\u670d\u52d9\u5c0e\u5411\u67b6\u69cb\uff0c\u4f46\u4e5f\u5e36\u4f86\u4e86\u4e00\u4e9b\u6311\u6230\uff1a\u96e3\u4ee5\u78ba\u5b9a\u6b63\u78ba\u7684\u4e8b\u52d9\u9846\u7c92\u5ea6\u548c\u5143\u4ef6\u4e4b\u9593\u7684\u7dca\u8026\u5408\u3002\u62d3\u58a3\u7d50\u69cb\u7684\u7406\u89e3\u5c0d\u65bc\u7406\u89e3\u9019\u7a2e\u67b6\u69cb\u98a8\u683c\u53ca\u5176",(0,n.kt)("strong",{parentName:"p"},"\u5c40\u9650\u6027"),"\u975e\u5e38\u91cd\u8981"),(0,n.kt)("h3",{id:"\u8a0a\u606f\u6d41"},"\u8a0a\u606f\u6d41"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"message_flow",src:a(27217).Z,width:"1956",height:"1374"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u6240\u6709\u7684\u8acb\u6c42\u90fd\u6703\u901a\u904e",(0,n.kt)("strong",{parentName:"p"},"\u5354\u4f5c\u5f15\u64ce")," - \u67b6\u69cb\u4e2d\u8655\u7406\u908f\u8f2f\u7684\u6240\u5728\u4f4d\u7f6e\u3002\u56e0\u6b64\u5373\u4f7f\u662f\u5167\u90e8\u547c\u53eb\uff0c\u8a0a\u606f\u6d41\u9084\u662f\u6703\u7d93\u904e\u5f15\u64ce\u3002")),(0,n.kt)("p",null,"\u5716(\u8aaa\u660e\u5354\u4f5c\u5f15\u64ce)\uff1a\nCreateQuote \u696d\u52d9\u5c64\u7d1a\u7684\u670d\u52d9\u547c\u53eb\u4e86\u670d\u52d9\u532f\u6d41\u6392 - \u4ed6\u5b9a\u7fa9\u4e86\u7531\u91dd\u5c0d CreateCustomer \u8207 CalculateQuote \u7684\u547c\u53eb\u6240\u7d44\u6210\u7684\u5de5\u4f5c\u6d41\u7a0b\uff0c\u4e14\u5176\u4e2d\u6bcf\u6b21\u7684\u547c\u53eb\u4e5f\u90fd\u547c\u53eb\u4e86\u53e6\u5916\u7684\u61c9\u7528\u670d\u52d9\u3002\u6b64\u67b6\u69cb\u7684\u532f\u6d41\u6392\u662f\u6240\u6709\u547c\u53eb\u7684\u6574\u5408\u4e2d\u6a1e\u3002"),(0,n.kt)("h4",{id:"\u8209\u4f8b"},"\u8209\u4f8b\uff1a"),(0,n.kt)("p",null,"\u5047\u8a2d\u6709\u4e00\u500b\u96fb\u5b50\u5546\u52d9\u516c\u53f8\uff0c\u5ba2\u6236\u60f3\u8981\u4e0b\u8a02\u55ae\u3002\u9019\u500b\u8acb\u6c42\u9700\u8981\u7d93\u904e\u4ee5\u4e0b\u4e0d\u540c\u7684\u5206\u5c64\uff0c\u5df2\u5b8c\u6210\u6574\u500b\u8a02\u55ae\u6d41\u7a0b\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u696d\u52d9\u670d\u52d9\uff1a")," \u5ba2\u6236\u7684\u8acb\u6c42\u9996\u5148\u9032\u5165\u5230\u4f4d\u65bc\u67b6\u69cb\u9802\u90e8\u7684\u696d\u52d9\u670d\u52d9\u3002\u5728\u9019\u4f8b\u5b50\u4e2d\uff0c\u53ef\u80fd\u662f\u4e00\u500b\u53eb\u505a",(0,n.kt)("strong",{parentName:"p"},"CreateOrder"),"\u7684\u696d\u52d9\u670d\u52d9\u3002\u9019\u500b\u670d\u52d9\u8ca0\u8cac\u63a5\u6536\u5ba2\u6236\u7684\u8a02\u55ae\u8a0a\u606f\uff0c\u4f8b\u5982\u5546\u54c1\u3001\u6578\u91cf\u548c\u9001\u8ca8\u5730\u5740\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u4f01\u696d\u670d\u52d9\uff1a")," \u696d\u52d9\u670d\u52d9\u53ef\u80fd\u9700\u8981\u7528\u5230\u4f01\u696d\u670d\u52d9\u4f86\u57f7\u884c\u4e0d\u540c\u7684\u4efb\u52d9\u3002\u4f8b\u5982\uff0c\u53ef\u80fd\u9700\u8981 call \u4e00\u500b",(0,n.kt)("strong",{parentName:"p"},"InventoryManagement")," \u4f01\u696d\u670d\u52d9\u4f86\u6aa2\u67e5\u5eab\u5b58\u662f\u5426\u8db3\u5920\uff0c\u4ee5\u78ba\u4fdd\u8a02\u55ae\u80fd\u5920\u5c65\u884c\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u61c9\u7528\u670d\u52d9\uff1a")," \u5728\u67d0\u4e9b\u60c5\u6cc1\u4e0b\uff0c\u696d\u52d9\u670d\u52d9\u53ef\u80fd\u9084\u9700\u8981\u7279\u5b9a\u61c9\u7528\u670d\u52d9\u3002\u4f8b\u5982\uff0c\u5982\u679c\u5ba2\u6236\u9700\u8981\u4f7f\u7528\u4fe1\u7528\u5361\u4ed8\u6b3e\uff0c\u5f79\u5085\u8a92\u7121\u7269\u53ef\u80fd\u9700\u8981\u6389\u7528\u4e00\u500b",(0,n.kt)("strong",{parentName:"p"},"PaymentGateway"),"\u61c9\u7528\u670d\u52d9\u4f86\u8655\u7406\u4ed8\u6b3e\u4e8b\u52d9\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u57fa\u790e\u8a2d\u65bd\u670d\u52d9\uff1a")," \u5728\u6574\u500b\u8a02\u55ae\u904e\u7a0b\u4e2d\uff0c\u57fa\u790e\u8a2d\u65bd\u670d\u52d9\u53ef\u80fd\u7528\u65bc\u76e3\u63a7\u3001\u8a18\u9304\u8a02\u55ae\u76f8\u95dc\u6d3b\u52d5\uff0c\u6216\u662f\u9032\u884c\u7528\u6236\u8eab\u4efd\u9a57\u8b49\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u5354\u4f5c\u5f15\u64ce\uff1a")," \u5354\u4f5c\u5f15\u64ce\u5145\u7576\u6240\u6709\u670d\u52d9\u4e4b\u9593\u7684\u5354\u8abf\u8005\u548c\u7ba1\u7406\u8005\uff0c\u4ed6\u78ba\u4fdd\u8a02\u55ae\u7684\u4e0d\u540c\u670d\u52d9\u6309\u7167\u6b63\u78ba\u9806\u5e8f\u4f86\u57f7\u884c\uff0c\u9084\u6709\u8ca0\u8cac\u5c07\u4e0d\u540c\u670d\u52d9\u7684\u8f38\u5165\u8207\u8f38\u51fa\u4e92\u76f8\u5354\u8abf\u3002"))),(0,n.kt)("h2",{id:"\u8907\u7528\u8207\u8026\u5408"},"\u8907\u7528...\u8207\u8026\u5408"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5fa9\u7528\u8207\u8026\u5408\u4e4b\u9593\u7684\u5e73\u8861\u4ee5\u53ca\u76f8\u95dc\u7684\u6311\u6230")),(0,n.kt)("p",null,"\u5716\u4e2d\u5c55\u793a\u4e86\u5373\u4f7f\u662f\u4e0d\u540c\u7684\u90e8\u9580\u4e5f\u90fd\u5305\u542b\u4e86\u201c\u5ba2\u6236\u201d\u7684\u6982\u5ff5\u3002\n",(0,n.kt)("img",{alt:"seeking_reuse",src:a(51535).Z,width:"2374",height:"1506"}),"\n\u70ba\u4e86\u5be6\u73fe\u91cd\u8907\u4f7f\u7528\uff0c\u5408\u9069\u7684\u7b56\u7565\u5c07\u201c\u5ba2\u6236\u201d\u90e8\u5206\u63d0\u53d6\u51fa\u4f86\uff0c\u5275\u5efa\u4e86\u4e00\u500b\u53ef\u4ee5\u91cd\u8907\u4f7f\u7528\u7684\u201c\u5ba2\u6236\u670d\u52d9\u201d\uff0c\u4e26\u5141\u8a31\u5176\u4ed6\u670d\u52d9\u5f15\u7528\u9019\u500b\u201c\u5ba2\u6236\u670d\u52d9\u201d\n",(0,n.kt)("img",{alt:"seeking_reuse",src:a(21510).Z,width:"2372",height:"1500"})),(0,n.kt)("p",null,"\u9019\u7a2e\u8a2d\u8a08\u4e5f\u5e36\u4f86\u4e86\u8ca0\u9762\u7684\u6b0a\u8861\u554f\u984c\u3002\u4f8b\u5982\u5143\u4ef6\u4e4b\u9593\u5927\u91cf\u7684\u8026\u5408\u6027\u589e\u52a0\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5c0d\u201c\u5ba2\u6236\u670d\u52d9\u201d\u7684\u66f4\u6539\u5f71\u97ff\u53ef\u80fd\u6703\u64f4\u6563\u5230\u6240\u6709\u5176\u4ed6\u670d\u52d9\uff0c\u4f7f\u5f97\u66f4\u65b0\u8b8a\u5f97\u5177\u6709\u98a8\u96aa\u6027\u3002\u5230\u6700\u5f8c\u5373\u4f7f\u662f\u589e\u91cf\u5f0f\u6539\u8b8a\u90fd\u6703\u8cbb\u529b\u6c23\u3002\u6bcf\u4e00\u500b\u5c0f\u5c0f\u7684\u66f4\u65b0\u90fd\u53ef\u80fd\u6f5b\u5728\u5de8\u5927\u7684\u6f23\u6f2a\u6548\u61c9\u3002\u7136\u5f8c\u5c0e\u81f4\u5f8c\u7e8c\u90e8\u7f72\u3001\u5168\u9762\u6e2c\u8a66\u3001\u53ca\u5176\u4ed6\u63a8\u985e\u5de5\u7a0b\u6548\u7387\u7684\u4e8b\u60c5\u767c\u751f\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5c07\u6240\u6709\u884c\u70ba\u96c6\u4e2d\u5230\u4e00\u500b\u5730\u65b9\u4e5f\u6703\u5c0e\u81f4\u554f\u984c\uff0c\u5982\u5716\u4e2d\u7bc4\u4f8b\uff0c\u6c7d\u8eca\u8207\u5931\u80fd\u96aa\uff0c\u8981\u652f\u63f4\u55ae\u4e00\u7684\u201c\u5ba2\u6236\u670d\u52d9\u201d\uff0c\u5f97\u628a\u7d44\u7e54\u6240\u77e5\u9053\u6709\u95dc\u5ba2\u6236\u7684\u4e00\u5207\u90fd\u5305\u542b\u9032\u4f86\u3002\u6c7d\u8eca\u96aa\u9700\u8981\u99d5\u7167 - \u9019\u662f\u4eba\u7684\u8ca1\u7522\uff0c\u800c\u4e0d\u662f\u6c7d\u8eca\u7684\u3002\u6240\u4ee5\u201c\u5ba2\u6236\u670d\u52d9\u201d\u9700\u8981\u5305\u542b\u99d5\u7167\u7684\u7d30\u7bc0\uff0c\u96d6\u7136\u5931\u80fd\u4fdd\u96aa\u90e8\u9580\u6839\u672c\u4e0d\u5728\u4e4e\u3002\u7136\u800c\u8655\u7406\u5931\u80fd\u7684\u5718\u968a\u537b\u5fc5\u9808\u8655\u7406\u76f8\u95dc\u7684\u984d\u5916\u8907\u96dc\u5ea6\u3002"))),(0,n.kt)("p",null,"\u8981\u6253\u9020\u5982\u6b64\u5c08\u6ce8\u5728",(0,n.kt)("strong",{parentName:"p"},"\u6280\u8853\u5206\u5272"),"\u7684\u67b6\u69cb\u6839\u672c\u4e0d\u5207\u6642\u969b\uff0c\u96d6\u7136\u5206\u9694\u8207\u5fa9\u7528\u7684\u89c0\u9ede\u770b\u8d77\u4f86\u6709\u9053\u7406\uff0c\u4f46\u662f\u5be6\u969b\u4e0a\u537b\u662f\u500b\u5922\u9b58\u3002"),(0,n.kt)("p",null,'\u4f8b\u5982 CatalogCheckout \u9019\u6a23\u7684\u9818\u57df\u6982\u5ff5\uff0c\u975e\u5e38\u7d30\u5fae\u7684\u6ef2\u5165\u5230\u67b6\u69cb\u7684\u6bcf\u4e00\u500b\u5730\u65b9\u3002\u958b\u767c\u4eba\u54e1\u5e38\u5e38\u505a\u50cf\u662f"\u65b0\u589e\u4e00\u884c\u5730\u5740\u5230 CatalogCheckout"\u9019\u6a23\u7684\u5de5\u4f5c\u3002\u5728\u6b64\u67b6\u69cb\u4e2d\uff0c\u9019\u9805\u5de5\u4f5c\u53ef\u80fd\u6703\u727d\u626f\u5230\u4f4d\u65bc\u4e0d\u540c\u5c64\u7684\u597d\u5e7e\u5341\u500b\u670d\u52d9\uff0c\u751a\u81f3\u9700\u8981\u66f4\u6539\u55ae\u4e00\u8cc7\u6599\u5eab\u7684 schema\u3002\u800c\u4e14\u5982\u679c\u4e00\u958b\u59cb\u4f01\u696d\u670d\u52d9\u7684\u4ea4\u6613\u9846\u7c92\u5ea6\u5b9a\u7fa9\u4e0d\u6b63\u78ba\uff0c\u958b\u767c\u4eba\u54e1\u4e0d\u662f\u8981\u53eb\u6539\u8a2d\u8a08\uff0c\u5c31\u662f\u8981\u5728\u6253\u9020\u5168\u65b0\u5e7e\u4e4e\u4e00\u6a23\u7684\u670d\u52d9\uff0c\u624d\u80fd\u6539\u8b8a\u4ea4\u6613\u884c\u70ba\u3002\u5fa9\u7528\u5230\u6b64\u7d50\u675f\u3002'),(0,n.kt)("h2",{id:"\u67b6\u69cb\u7279\u6027\u7684\u7b49\u7d1a"},"\u67b6\u69cb\u7279\u6027\u7684\u7b49\u7d1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"seeking_reuse",src:a(48675).Z,width:"1984",height:"1828"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u6280\u8853\u5206\u5272\uff1a")," \u6587\u7ae0\u6307\u5411\uff0c\u7ba1\u5f26\u5f0f\u670d\u52d9\u5c0e\u5411\u67b6\u69cb\u53ef\u80fd\u662f\u8fc4\u4eca\u70ba\u6b62\u6280\u8853\u6700\u56b4\u91cd\u7684\u901a\u7528\u67b6\u69cb\u4e4b\u4e00\u3002\u9019\u7a2e\u904e\u5ea6\u7684\u6280\u8853\u5206\u5340\u5c0e\u81f4\u4e86\u4e00\u4e9b\u554f\u984c\uff0c\u4f8b\u5982\u67b6\u69cb\u4e2d\u7684\u9023\u63a5\u9ede\u5206\u4f48\uff0c\u4e0d\u540c\u95dc\u6ce8\u9ede\u4e4b\u9593\u5b58\u5728\u6b64\u5916\uff0c\u826f\u597d\u7684\u5f15\u64ce\u627f\u64d4\u4e86\u4e00\u500b\u5de8\u5927\u7684\u9023\u63a5\u9ede\uff0c\u9650\u5236\u4e86\u67b6\u69cb\u7684\u9748\u6d3b\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u90e8\u7f72\u6027"),"\u548c",(0,n.kt)("strong",{parentName:"p"},"\u53ef\u6e2c\u8a66\u6027"),"\uff0c\u5728\u8a72\u67b6\u69cb\u4e2d\u5f97\u5206\u6975\u4f4e\u3002\u9019\u662f\u56e0\u70ba\u8a72\u67b6\u69cb\u5c0d\u9019\u4e9b\u76ee\u6a19\u7684\u652f\u6301\u6709\u9650\uff0c\u800c\u4e14\u9019\u4e9b\u76ee\u6a19\u5728\u8a72\u67b6\u69cb\u8208\u76db\u6642\u4e26\u4e0d\u91cd\u8981(\u751a\u81f3\u6c92\u60f3\u904e)\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u5f48\u6027"),"\u548c",(0,n.kt)("strong",{parentName:"p"},"\u53ef\u64f4\u5c55\u6027"),"\uff1a\u96d6\u7136\u5be6\u4f5c\u4e0a\u6709\u4e9b\u56f0\u96e3\uff0c\u4f46\u662f\u4ecd\u7136\u53ef\u4ee5\u5be6\u73fe\u3002\n\u5f48\u6027\uff1a\u900f\u904e\u61c9\u7528\u4f3a\u670d\u5668\u4e0a\u7684\u61c9\u7528\u8b70\u7a0b\u8907\u88fd\u4ee5\u53ca\u5176\u4ed6\u6280\u5de7\u3002\n\u53ef\u64f4\u5c55\u6027\uff1a\u5de5\u5177\u958b\u767c\u5546\u5728\u7cfb\u7d71\u7684\u53ef\u64f4\u5c55\u6027\u4e0a\u6295\u6ce8\u5927\u7b46\u5fc3\u8840...???????????")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u6548\u80fd\uff1a")," \u56e0\u70ba\u5c6c\u65bc\u5206\u6563\u5f0f\u67b6\u69cb\uff0c\u6548\u80fd\u4e0d\u662f\u6b64\u67b6\u69cb\u7684\u4eae\u9ede\uff0c\u751a\u81f3\u662f\u7cdf\u900f\u4e86\u3002\u56e0\u70ba\u6bcf\u4e00\u500b\u696d\u52d9\u8acb\u6c42\u90fd\u88ab\u62c6\u6563\u5230\u67b6\u69cb\u7684\u4e0d\u540c\u5730\u65b9\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u7c21\u55ae\u6027"),"\u8207",(0,n.kt)("strong",{parentName:"p"},"\u8cbb\u7528"),"\u5177\u5099\u53cd\u5411\u7684\u95dc\u4fc2\uff0c\u9019\u662f\u5927\u90e8\u5206\u67b6\u69cb\u5e2b\u559c\u6b61\u7684\u3002(\u70ba\u4ec0\u9ebc\u9084\u662f\u53ea\u6709\u4e00\u9846\u661f\uff1f\uff1f\uff1f\uff1f\uff1f)"))),(0,n.kt)("p",null,"\u6b64\u67b6\u69cb\u8b93\u67b6\u69cb\u5e2b\u4e86\u89e3\u771f\u5be6\u4e16\u754c\u7684\u5206\u6563\u5f0f\u4ea4\u6613\u6709\u591a\u56f0\u96e3\u4ee5\u53ca\u6280\u8853\u5206\u5272\u7684\u5be6\u969b\u9650\u5236\u4f55\u5728\u3002"))}k.isMDXComponent=!0},62195:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/01-ee726e6548d75f56c814fef8910f3941.png"},27217:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/02-3374dab7973d3238304e1d314d4871f9.png"},51535:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/03-e26eaaa3a76f93a01a24a288dc0eb6f4.png"},21510:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/04-f404339e566fa1afa13fef7f3c30b8d6.png"},48675:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/05-471a03d9f6756497af7b9e0fe6cda373.png"}}]);