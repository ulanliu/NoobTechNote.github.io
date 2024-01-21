"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[7460],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(r),b=l,d=p["".concat(c,".").concat(b)]||p[b]||m[b]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},61515:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var n=r(87462),l=(r(67294),r(3905));const a={title:"Ch23: Presenter \u8207 Humble Object",sidebar_label:"Ch23: Presenter \u8207 Humble Object",sidebar_position:23},i=void 0,o={unversionedId:"sg/clean-architecture/ch23",id:"sg/clean-architecture/ch23",title:"Ch23: Presenter \u8207 Humble Object",description:"Humble Object pattern",source:"@site/docs/sg/clean-architecture/ch23.md",sourceDirName:"sg/clean-architecture",slug:"/sg/clean-architecture/ch23",permalink:"/docs/sg/clean-architecture/ch23",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/clean-architecture/ch23.md",tags:[],version:"current",lastUpdatedBy:"ChenTsungYu",lastUpdatedAt:1705846822,formattedLastUpdatedAt:"Jan 21, 2024",sidebarPosition:23,frontMatter:{title:"Ch23: Presenter \u8207 Humble Object",sidebar_label:"Ch23: Presenter \u8207 Humble Object",sidebar_position:23},sidebar:"tutorialSidebar",previous:{title:"Ch22: \u6574\u6f54\u7684\u67b6\u69cb",permalink:"/docs/sg/clean-architecture/ch22"},next:{title:"Ch24: \u90e8\u5206\u908a\u754c",permalink:"/docs/sg/clean-architecture/ch24"}},c={},u=[{value:"Humble Object pattern",id:"humble-object-pattern",level:2},{value:"Presenter \u53ca View",id:"presenter-\u53ca-view",level:3},{value:"My example IRepository",id:"my-example-irepository",level:3},{value:"\u6e2c\u8a66\u548c\u67b6\u69cb",id:"\u6e2c\u8a66\u548c\u67b6\u69cb",level:2},{value:"\u8cc7\u6599\u5eab\u531d\u9053",id:"\u8cc7\u6599\u5eab\u531d\u9053",level:3},{value:"Data mappers(\u8cc7\u6599\u6620\u5c04\u5668)",id:"data-mappers\u8cc7\u6599\u6620\u5c04\u5668",level:3},{value:"Services Listeners(\u670d\u52d9\u76e3\u807d\u5668)",id:"services-listeners\u670d\u52d9\u76e3\u807d\u5668",level:3},{value:"\u7e3d\u7d50",id:"\u7e3d\u7d50",level:2}],s={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,l.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"humble-object-pattern"},"Humble Object pattern"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"It is a design pattern: \u7528\u4f86\u5e6b\u52a9\u55ae\u5143\u6e2c\u8a66\u5c07\u5bb9\u6613\u6e2c\u8a66\u7684\u6771\u897f\u548c\u4e0d\u5bb9\u6613\u6e2c\u8a66\u7684\u6771\u897f\u5206\u958b\u4f86"),(0,l.kt)("li",{parentName:"ul"},"\u5c07\u884c\u70ba\u5206\u6210 module or class, one of thoe is humble"),(0,l.kt)("li",{parentName:"ul"},"This humble module \u5305\u542b\u6700\u672c\u8cea\u7684\u4e8b\u52d9\uff0c\u5c07\u884c\u70ba\u4e2d\u975e\u672c\u8cea\u7684\u884c\u70ba\u5254\u9664\uff0c\u7559\u4e0b\u672c\u8cea\u7684\u4e8b\u7269"),(0,l.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u6a21\u7d44\u5247\u5305\u542b\u6240\u6709\u53ef\u88ab\u6e2c\u8a66\u7684\u884c\u70ba",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8b1b humble module mock \u5f8c\u5c31\u53ef\u4ee5\u6e2c\u8a66")))),(0,l.kt)("h3",{id:"presenter-\u53ca-view"},"Presenter \u53ca View"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Presenter \u63a5\u53d7\u8cc7\u6599\uff0c\u5305\u6210 View model\uff0c\u544a\u77e5 View \u986f\u793a\u8cc7\u6599\u7684\u5167\u5bb9"),(0,l.kt)("li",{parentName:"ul"},"View \u5c07 View model \u63cf\u8ff0\u7684\u8cc7\u6599\u8f09\u5165\u5230\u87a2\u5e55"),(0,l.kt)("li",{parentName:"ul"},"View \u61c9\u8a72\u88ab\u5254\u9664\u6240\u6709 use case \u7684\u908f\u8f2f\uff0c\u53ea\u6709\u6700\u7c21\u55ae\u7684\u986f\u793a\u908f\u8f2f ex \u8ca0\u6578\u8981\u7d05\u8272\uff0c\u6240\u4ee5\u5728\u9019\u500b\u6848\u4f8b\u88e1\u9762 View \u662f humble object")),(0,l.kt)("h3",{id:"my-example-irepository"},"My example IRepository"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Repository \u53ea\u8ca0\u8cac\u5c0d DB CRUD"),(0,l.kt)("li",{parentName:"ul"},"Use case \u7684 Unit test \u4f7f\u7528 stub \u51fa\u7684 Repository \u78ba\u8a8d use case \u7684 flow as expect")),(0,l.kt)("h2",{id:"\u6e2c\u8a66\u548c\u67b6\u69cb"},"\u6e2c\u8a66\u548c\u67b6\u69cb"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e00\u500b\u597d\u7684\u67b6\u69cb\u61c9\u8a72\u5177\u5099\u53ef\u6e2c\u6027\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7576\u6211\u5011\u5617\u8a66\u53bb\u62c6\u5206\u53ef\u6e2c\u8207\u4e0d\u53ef\u6e2c\u6642\u5176\u5be6\u5c31\u662f\u5728\u5b9a\u7fa9\u67b6\u69cb\u7684\u908a\u754c\u3002")),(0,l.kt)("h3",{id:"\u8cc7\u6599\u5eab\u531d\u9053"},"\u8cc7\u6599\u5eab\u531d\u9053"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6211\u7684\u7406\u89e3\u5c31\u662f Repository or unit of work")),(0,l.kt)("h3",{id:"data-mappers\u8cc7\u6599\u6620\u5c04\u5668"},"Data mappers(\u8cc7\u6599\u6620\u5c04\u5668)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ORM (X)"),(0,l.kt)("li",{parentName:"ul"},"\u5c07\u8cc7\u6599\u5f9e RD table \u8f09\u5230\u8cc7\u6599\u7d50\u69cb"),(0,l.kt)("li",{parentName:"ul"},"\u6211\u8a8d\u70ba\u6240\u6709\u9700\u8981\u8de8\u8d8a\u908a\u754c\u50b3\u905e\u7684\u8cc7\u6599\u90fd\u9700\u8981 data mapper\uff0cin ch22 \u8cc7\u6599\u5982\u4f55\u8de8\u8d8a\u908a\u754c\u63d0\u5230\uff1a\u5167\u90e8\u4e0d\u61c9\u4e86\u89e3\u5916\u5708\u7684\u908f\u8f2f\uff0c\u6240\u4ee5\u7db2\u5167\u547c\u53eb\u7684\u6771\u897f\u61c9\u8a72\u7d93\u904e data mapper\uff0creturn \u7684\u6771\u897f\u4e5f\u662f")),(0,l.kt)("h3",{id:"services-listeners\u670d\u52d9\u76e3\u807d\u5668"},"Services Listeners(\u670d\u52d9\u76e3\u807d\u5668)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b8c\u5168\u770b\u4e0d\u61c2")),(0,l.kt)("h2",{id:"\u7e3d\u7d50"},"\u7e3d\u7d50"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u8de8\u8d8a\u908a\u754c\u6642\u4f7f\u7528 Humble Object pattern \u53ef\u4ee5\u589e\u52a0\u7cfb\u7d71\u7684\u6e2c\u6e2c\u6027\u3002")),(0,l.kt)("p",null,"bgm: Where's My Love by SYML"))}m.isMDXComponent=!0}}]);