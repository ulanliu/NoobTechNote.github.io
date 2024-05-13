"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[6151],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,k=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return a?r.createElement(k,l(l({ref:t},s),{},{components:a})):r.createElement(k,l({ref:t},s))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[u]="string"==typeof e?e:n,l[1]=c;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},87251:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={title:"Ch13: \u670d\u52d9\u5f0f(Service-Based)\u67b6\u69cb\u98a8\u683c",tsidebar_label:"Ch13: \u670d\u52d9\u5f0f(Service-Based)\u67b6\u69cb\u98a8\u683c",sidebar_position:13},l=void 0,c={unversionedId:"sg/fundamentals-of-software-architecture/ch13",id:"sg/fundamentals-of-software-architecture/ch13",title:"Ch13: \u670d\u52d9\u5f0f(Service-Based)\u67b6\u69cb\u98a8\u683c",description:"\u6df7\u5408\u4e86\u5fae\u670d\u52d9\u67b6\u69cb\uff0c\u4e5f\u56e0\u70ba\u67b6\u69cb\u4e0a\u7684\u9748\u6d3b\u6027\uff0c\u88ab\u8a8d\u70ba\u662f\u6700\u5be6\u7528\u7684\u67b6\u69cb\u4e4b\u4e00\uff0c\u800c\u4e14\u6c92\u6709\u5206\u6563\u5f0f\u67b6\u69cb\u7684\u8907\u96dc\u5ea6\u8207\u9ad8\u8cbb\u7528\uff0c\u6240\u4ee5\u5f88\u53d7\u6b61\u8fce",source:"@site/docs/sg/fundamentals-of-software-architecture/ch13.md",sourceDirName:"sg/fundamentals-of-software-architecture",slug:"/sg/fundamentals-of-software-architecture/ch13",permalink:"/docs/sg/fundamentals-of-software-architecture/ch13",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/fundamentals-of-software-architecture/ch13.md",tags:[],version:"current",lastUpdatedBy:"yvette-tsai",lastUpdatedAt:1715599055,formattedLastUpdatedAt:"May 13, 2024",sidebarPosition:13,frontMatter:{title:"Ch13: \u670d\u52d9\u5f0f(Service-Based)\u67b6\u69cb\u98a8\u683c",tsidebar_label:"Ch13: \u670d\u52d9\u5f0f(Service-Based)\u67b6\u69cb\u98a8\u683c",sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Ch12: \u5fae\u6838\u5fc3(Microkernel)\u67b6\u69cb\u98a8\u683c",permalink:"/docs/sg/fundamentals-of-software-architecture/ch12"},next:{title:"Ch14: \u4e8b\u4ef6\u9a45\u52d5\u5f0f\u67b6\u69cb",permalink:"/docs/sg/fundamentals-of-software-architecture/ch14"}},o={},p=[],s={toc:p},u="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u6df7\u5408\u4e86\u5fae\u670d\u52d9\u67b6\u69cb\uff0c\u4e5f\u56e0\u70ba\u67b6\u69cb\u4e0a\u7684\u9748\u6d3b\u6027\uff0c\u88ab\u8a8d\u70ba\u662f\u6700\u5be6\u7528\u7684\u67b6\u69cb\u4e4b\u4e00\uff0c\u800c\u4e14\u6c92\u6709\u5206\u6563\u5f0f\u67b6\u69cb\u7684\u8907\u96dc\u5ea6\u8207\u9ad8\u8cbb\u7528\uff0c\u6240\u4ee5\u5f88\u53d7\u6b61\u8fce"),(0,n.kt)("h1",{id:"topology"},"Topology"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5206\u958b\u4f48\u7f72\u7684\u4f7f\u7528\u8005\u4ecb\u9762")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u9060\u7aef\u7c97\u9846\u7c92\u670d\u52d9")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u55ae\u9ad4\u8cc7\u6599\u5eab\n",(0,n.kt)("img",{src:a(72665).Z,width:"1120",height:"600"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u901a\u5e384-12\u500b\u670d\u52d9")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u6bcf\u500b\u9818\u57df\u670d\u52d9\u53ef\u4ee5\u64f4\u5c55")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528\u8005\u4ecb\u9762\u53ef\u4ee5\u5229\u7528REST, RPC, SOAP\u5b58\u53d6\u670d\u52d9")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u7528proxy + gateway\u5b58\u53d6\u670d\u52d9 \u6216",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Service_locator_pattern"},"Service Locator Pattern"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u901a\u5e38\u6703\u6709\u4e2d\u592e\u5171\u4eab\u7684\u8cc7\u6599\u5eab"))),(0,n.kt)("h1",{id:"topology-variants"},"Topology Variants"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(34819).Z,width:"1136",height:"1312"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8981\u78ba\u5b9a\u670d\u52d9\u62c6\u5206\u7684\u6642\u5019\uff0c\u4e0d\u6703\u7528\u5230\u53e6\u4e00\u500b\u670d\u52d9\u7684\u8cc7\u6599\uff0c\u907f\u514d\u8de8\u670d\u52d9\u901a\u4fe1\uff0c\u53ca\u8cc7\u6599\u8907\u88fd")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(63542).Z,width:"1134",height:"1260"})),(0,n.kt)("p",null,"\u5728\u4f7f\u7528\u8005\u4ecb\u9762\u8207\u670d\u52d9\u4e4b\u9593\uff0c\u589e\u52a0\u4e00\u5c64\u53cd\u5411\u4ee3\u7406\u4f3a\u670d\u5668\u6216Gateway\uff0c\u5c07\u6307\u6a19\u3001\u5b89\u5168\u6027\u3001\u7a3d\u6838\u9700\u6c42\u53ca\u670d\u52d9\u767c\u73fe\u79fb\u51fa\u4f7f\u7528\u8005\u4ecb\u9762\uff0c\u662f\u4e00\u7a2e\u826f\u597d\u7684\u5be6\u52d9\u4f5c\u6cd5\n",(0,n.kt)("img",{src:a(6541).Z,width:"1128",height:"796"})),(0,n.kt)("h1",{id:"service-design-and-granularity"},"Service Design and Granularity"),(0,n.kt)("p",null,"\u670d\u52d9\u5f0f\u67b6\u69cb\u7684\u9818\u57df\u670d\u52d9\u901a\u5e38\u9846\u7c92\u8f03\u7c97\uff0c\u9019\u662f\u8ddf\u5fae\u670d\u52d9\u67b6\u69cb\u7684\u8a31\u591a\u91cd\u5927\u5dee\u5225\u4e4b\u4e00\uff0c\u4f8b\u5982\u670d\u52d9\u5f0f\u67b6\u69cb\u7684\u4e00\u500bAPI\u53ef\u80fd\u53eb\u505aOrderService\uff0c\u53ef\u80fd\u727d\u626f\u5230\u8a31\u591a\u5206\u958b\u4f48\u7f72\uff0c\u6216\u8ddf\u9060\u7aef\u5354\u505a\n",(0,n.kt)("img",{src:a(15534).Z,width:"1126",height:"966"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u670d\u52d9\u5f0f\u67b6\u69cb\u901a\u5e38\u6703\u78ba\u4fddACID"),(0,n.kt)("li",{parentName:"ul"},"\u5fae\u670d\u52d9\u56e0\u70ba\u67b6\u69cb\u8f03\u5206\u6563\uff0c\u901a\u5e38\u53ea\u6703\u78ba\u4fdd",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Eventual_consistency"},"BASE"),"(\u57fa\u672c\u53ef\u7528\u6027\uff0c\u8edf\u6027\u72c0\u614b\uff0c\u6700\u7d42\u4e00\u81f4\u6027)")),(0,n.kt)("p",null,"\u70ba\u4ec0\u9ebc\u6703\u9019\u6a23\u5462\uff1f\n\u8209\u4f8b\uff1a\u5047\u8a2d\u5fae\u670d\u52d9\u4e0b\uff0c\u6703\u6709OrderPlacement\u8ddfPaymentService\uff0c\u842c\u4e00\u6536\u4e86order\uff0c\u4f46\u662f\u547c\u53ebpayment\u7684\u6642\u5019\u56e0\u70ba\u4fe1\u7528\u5361\u904e\u671f\u5c0e\u81f4\u5931\u6557\u8a72\u600e\u9ebc\u8fa6\n\u8981\u6536\u8a02\u55ae\u55ce\uff0c\u8981\u6e1b\u5eab\u5b58\u55ce\uff0c\u842c\u4e00\u5176\u4ed6\u4eba\u60f3\u8cb7\u600e\u9ebc\u8fa6"),(0,n.kt)("p",null,"\u53cd\u89c0\uff0c\u670d\u52d9\u5f0f\u67b6\u69cb\u5c31\u53ea\u9700\u8981\u78ba\u4fddOrderService\u904b\u4f5c\u6b63\u5e38\u5c31ok"),(0,n.kt)("p",null,"\u4f46\u662f\u58de\u8655\u5c31\u662f\u4f48\u7f72\u7684\u7a0b\u5f0f\u66f4\u591a\uff0c\u4e00\u500b\u6771\u897f\u6545\u969c\u53ef\u80fd\u6574\u500bService\u90fd\u58de\u3002"),(0,n.kt)("h1",{id:"database-partitioning"},"Database Partitioning"),(0,n.kt)("p",null,"BAD! \u5617\u8a66\u6253\u9020\u4e00\u500b\u55ae\u4e00\u500b\u5be6\u9ad4\u7269\u4ef6\u5171\u4eab\u7a0b\u5f0f\u5eab\n\u9019\u6a23\u6539\u4efb\u4f55\u6771\u897f\uff0c\u90fd\u8981\u91cd\u65b0\u5728\u6240\u6709\u670d\u52d9\u7de8\u8b6f\uff0c\u5c31\u7b97\u6709\u6307\u5b9a\u7248\u672c\u597d\u4e86\uff0c\u6539\u52d5\u4e5f\u90fd\u8981\u8003\u616e\u5230\u6240\u6709\u670d\u52d9\u7684\u4f7f\u7528\u60c5\u6cc1\u3002\n",(0,n.kt)("img",{src:a(7676).Z,width:"1126",height:"778"})),(0,n.kt)("p",null,"\u89e3\u6c7a\u65b9\u6cd5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5206\u5272\u8cc7\u6599\u5eab"),(0,n.kt)("li",{parentName:"ul"},"\u628alib\u5206\u6210common\u8ddf\u5ba2\u88fd\u5316\u7684\uff0ccommon\u7684\u53ea\u80fd\u7531\u8cc7\u6599\u5eab\u5718\u968a\u9032\u884c\u4fee\u6539\n",(0,n.kt)("img",{src:a(53582).Z,width:"1130",height:"932"}))),(0,n.kt)("h1",{id:"example-architecture"},"Example Architecture"),(0,n.kt)("p",null,"\u96fb\u5b50\u56de\u6536\u7cfb\u7d71 Flow:"),(0,n.kt)("p",null,"\u5ba2\u6236\u554f\u516c\u53f8\u80fd\u56de\u6536\u591a\u5c11\u9322(\u5831\u50f9)->\u5982\u679c\u6eff\u610f\uff0c\u5ba2\u6236\u628a\u96fb\u5b50\u7522\u54c1\u9001\u5230\u516c\u53f8(\u63a5\u6536)->\u516c\u53f8\u8a55\u4f30(\u8a55\u4f30)"),(0,n.kt)("p",null,"->\u5982\u679c\u6b63\u5e38\uff0c\u516c\u53f8\u628a\u9322\u7d66\u5ba2\u6236(\u6703\u8a08)->\u5ba2\u6236\u80fd\u96a8\u6642\u6aa2\u8996\u7269\u54c1\u72c0\u614b(\u7269\u54c1\u72c0\u614b)->\u6700\u5f8c\u88dd\u7f6e\u8981\u55ce\u88ab\u56de\u6536\uff0c\u8981\u55ce\u62ff\u53bb\u8ce3(\u56de\u6536)"),(0,n.kt)("p",null,"->\u6700\u5f8c\u516c\u53f8\u6703\u5b9a\u671f\u505a\u5831\u8868(\u5831\u8868)\n",(0,n.kt)("img",{src:a(27639).Z,width:"1128",height:"1012"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5169\u500b\u5206\u958b\u7684\u5be6\u9ad4\u8cc7\u6599\u5eab")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u9632\u706b\u7246\u55ae\u5411\u5b58\u53d6")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u654f\u6377")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u53ef\u6e2c")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u53ef\u4f48\u7f72")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u53ef\u64f4\u5c55")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5bb9\u932f")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5b89\u5168\u6027"))),(0,n.kt)("h1",{id:"architecture-characteristics-ratings"},"Architecture Characteristics Ratings"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u670d\u52d9\u5f0f\u67b6\u69cb\u662f\u9818\u57df\u5206\u5272\u67b6\u69cb"),(0,n.kt)("li",{parentName:"ul"},"\u6bcf\u500b\u670d\u52d9\u90fd\u662f\u5206\u958b\u4f48\u7f72\u7684\u8edf\u9ad4\u55ae\u5143\uff0c\u66f4\u6539\u53ea\u5f71\u97ff\u8a72\u670d\u52d9\u7684\u4f7f\u7528\u8005\u4ecb\u9762\u53ca\u8cc7\u6599\u5eab"),(0,n.kt)("li",{parentName:"ul"},"\u5206\u6563\u5f0f\u67b6\u69cb\uff0c\u91cf\u5b50\u6578\u76ee >= 1\uff0c\u5373\u4f7f\u53ef\u80fd\u67094-12\u500b\u5206\u958b\u4f48\u7f72\u7684\u670d\u52d9\uff0c\u5982\u679c\u5171\u7528\u8cc7\u6599\u5eab\u6216\u4f7f\u7528\u8005\u4ecb\u9762\uff0c\u90a3\u6574\u500b\u7cfb\u7d71\u9084\u662f\u53ea\u6709\u4e00\u500b\u91cf\u5b50\uff0c"),(0,n.kt)("li",{parentName:"ul"},"\u96fb\u5b50\u56de\u6536\u7bc4\u4f8b\u4e2d\u67092\u500b\u91cf\u5b50\uff0c\u5c31\u7b97\u5167\u90e8\u7dad\u904b\u6709\u5169\u500b\u5206\u958b\u4f48\u7f72\u7684\u670d\u52d9\uff0c\u4f46\u56e0\u70ba\u5171\u4eab\u8cc7\u6599\u5eab\u6240\u4ee5\u9084\u662f\u53ea\u6709\u4e00\u500b\u91cf\u5b50\n",(0,n.kt)("img",{src:a(20296).Z,width:"1120",height:"1030"}))),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(75670).Z,width:"1128",height:"992"})),(0,n.kt)("h1",{id:"when-to-use-this-architecture-style"},"When to Use This Architecture Style"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6700\u52d9\u5be6\u7684\u67b6\u69cb\uff0c\u7576\u7136\u6709\u5176\u4ed6\u5f37\u5927\u7684\u591a\u7684\u5206\u6563\u5f0f\u67b6\u69cb--\u4f46\u6709\u4e9b\u516c\u53f8\u767c\u73fe\u9019\u7a2e\u5f37\u5927\u662f\u4ee5\u9ad8\u6f32\u7684\u8cbb\u7528\u70ba\u4ee3\u50f9\uff0c\u9084\u6709\u4e9b\u516c\u53f8\u4e0d\u9700\u8981\u9019\u9ebc\u5f37\u7684\u7cfb\u7d71\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5c31\u50cf\u8cb7\u6cd5\u62c9\u5229\u4e0a\u4e0b\u73ed\uff0c\u4f46\u56e0\u70ba\u585e\u8eca\u53ea\u80fd\u958b50\u516c\u91cc--\u770b\u8d77\u4f86\u5f88\u9177\uff01\uff01\u4f46\u6211\u6c92\u9322\u963f\uff01"),(0,n.kt)("li",{parentName:"ul"},"\u670d\u52d9\u5f0f\u67b6\u69cb\u5f88\u9069\u5408\u9818\u57df\u9a45\u52d5\u958b\u767c"),(0,n.kt)("li",{parentName:"ul"},"\u5206\u6563\u5f0f\u7cfb\u7d71\u5e38\u9047\u5230\u7684\u4e00\u81f4\u6027\u554f\u984c\uff0c\u670d\u52d9\u5f0f\u67b6\u69cb\u53ef\u4ee5\u5f88\u5927\u7684\u7a0b\u5ea6\u4fdd\u7559ACID"),(0,n.kt)("li",{parentName:"ul"},"\u7d30\u9846\u7c92->\u591a\u5354\u8abf, \u670d\u52d9\u5f0f\u67b6\u69cb\u5c6c\u65bc\u7c97\u9846\u7c92->\u5c11\u5354\u8abf")),(0,n.kt)("h1",{id:"recap"},"Recap"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u4e00\u500b\u5178\u578b\u7684\u670d\u52d9\u5f0f\u67b6\u69cb\u6703\u6709\u591a\u5c11\u500b\u670d\u52d9"),(0,n.kt)("li",{parentName:"ol"},"\u5728\u670d\u52d9\u5f0f\u67b6\u69cb\u4e2d\u5fc5\u9808\u628a\u8cc7\u6599\u5eab\u62c6\u5206\u55ce"),(0,n.kt)("li",{parentName:"ol"},"\u4ec0\u9ebc\u60c5\u6cc1\u4e0b\u4f60\u6703\u628a\u8cc7\u6599\u5eab\u62c6\u5206"),(0,n.kt)("li",{parentName:"ol"},"\u6709\u4ec0\u9ebc\u6280\u5de7\u53ef\u4ee5\u5728\u670d\u52d9\u5f0f\u67b6\u69cb\u4e2d\u7ba1\u7406\u8cc7\u6599\u5eab\u8b8a\u66f4"),(0,n.kt)("li",{parentName:"ol"},"\u9818\u57df\u670d\u52d9\u9700\u8981\u8dd1\u5728container\u4e0a\u55ce"),(0,n.kt)("li",{parentName:"ol"},"\u54ea\u4e9b\u67b6\u69cb\u7279\u6027\u5728\u670d\u52d9\u5f0f\u67b6\u69cb\u4e2d\u5f97\u5230\u826f\u597d\u7684\u652f\u63f4"),(0,n.kt)("li",{parentName:"ol"},"\u70ba\u4f55\u5f48\u6027\u5728\u670d\u52d9\u5f0f\u67b6\u69cb\u7684\u652f\u63f4\u4e0d\u4f73"),(0,n.kt)("li",{parentName:"ol"},"\u5982\u4f55\u5728\u670d\u52d9\u5f0f\u67b6\u69cb\u4e2d\u589e\u52a0\u91cf\u5b50\u7684\u6578\u76ee")))}m.isMDXComponent=!0},72665:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/fig_13-1-f8d6e4278172ccbf2f19a5cd0c86dbd2.png"},75670:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/fig_13-10-198686ed7707af6c8057dac8c6fdc9ac.png"},34819:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/fig_13-2-dda1948a9b12bc5576a3ed77014f7982.png"},63542:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/fig_13-3-877e4e15f10937215eb8e4ef2b25e836.png"},6541:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/fig_13-4-45ef7ab944baa8d5d3dedf67a55c0088.png"},15534:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/fig_13-5-db99221e643097f715e547ed8a208f6a.png"},7676:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/fig_13-6-a07da2227a09159864e7eba4c78c18c4.png"},53582:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/fig_13-7-b8d92cf6f420034d9c58dca2f7e8132e.png"},27639:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/fig_13-8-457da7b04db930ae46a3a634dca51d4d.png"},20296:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/fig_13-9-bfe20282052a79c30bfff41c2f0fb9b8.png"}}]);