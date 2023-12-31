"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[3596],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),h=a,f=s["".concat(l,".").concat(h)]||s[h]||d[h]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9788:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"Ch21: \u6703\u5c16\u53eb\u7684\u67b6\u69cb",sidebar_label:"Ch21: \u6703\u5c16\u53eb\u7684\u67b6\u69cb",sidebar_position:21},i=void 0,c={unversionedId:"sg/clean-architecture/ch21",id:"sg/clean-architecture/ch21",title:"Ch21: \u6703\u5c16\u53eb\u7684\u67b6\u69cb",description:"\u662f\u5426\u53ef\u4ee5\u7531\u89c0\u5bdf\u9019\u500b\u67b6\u69cb\uff08\u800c\u4e0d\u662f\u6846\u67b6\uff09\u5c31\u77e5\u9053\u9019\u500b\u7cfb\u7d71\u662f\u7528\u4f86\u505a\u4ec0\u9ebc\uff1f",source:"@site/docs/sg/clean-architecture/ch21.md",sourceDirName:"sg/clean-architecture",slug:"/sg/clean-architecture/ch21",permalink:"/docs/sg/clean-architecture/ch21",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/clean-architecture/ch21.md",tags:[],version:"current",lastUpdatedBy:"sc0ttie",lastUpdatedAt:1704010887,formattedLastUpdatedAt:"Dec 31, 2023",sidebarPosition:21,frontMatter:{title:"Ch21: \u6703\u5c16\u53eb\u7684\u67b6\u69cb",sidebar_label:"Ch21: \u6703\u5c16\u53eb\u7684\u67b6\u69cb",sidebar_position:21},sidebar:"tutorialSidebar",previous:{title:"Ch20: \u696d\u52d9\u898f\u5247",permalink:"/docs/sg/clean-architecture/ch20"},next:{title:"Ch22: \u6574\u6f54\u7684\u67b6\u69cb",permalink:"/docs/sg/clean-architecture/ch22"}},l={},u=[{value:"\u67b6\u69cb\u7684\u4e3b\u984c",id:"\u67b6\u69cb\u7684\u4e3b\u984c",level:2},{value:"\u67b6\u69cb\u7684\u76ee\u7684",id:"\u67b6\u69cb\u7684\u76ee\u7684",level:2},{value:"\u53ef\u6e2c\u7684\u67b6\u69cb",id:"\u53ef\u6e2c\u7684\u67b6\u69cb",level:2},{value:"\u7e3d\u7d50",id:"\u7e3d\u7d50",level:2}],p={toc:u},s="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u662f\u5426\u53ef\u4ee5\u7531\u89c0\u5bdf\u9019\u500b\u67b6\u69cb\uff08\u800c\u4e0d\u662f\u6846\u67b6\uff09\u5c31\u77e5\u9053\u9019\u500b\u7cfb\u7d71\u662f\u7528\u4f86\u505a\u4ec0\u9ebc\uff1f"),(0,a.kt)("h2",{id:"\u67b6\u69cb\u7684\u4e3b\u984c"},"\u67b6\u69cb\u7684\u4e3b\u984c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8edf\u9ad4\u67b6\u69cb\u662f\u652f\u63f4\u7cfb\u7d71\u4f7f\u7528\u6848\u4f8b\u7684\u7d50\u69cb by \u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6846\u67b6\u662f\u8981\u4f7f\u7528\u7684\u5de5\u5177\uff0c\u4e0d\u662f\u67b6\u69cb\u8981\u9806\u61c9\u7684\u5c0d\u8c61\u3002")),(0,a.kt)("h2",{id:"\u67b6\u69cb\u7684\u76ee\u7684"},"\u67b6\u69cb\u7684\u76ee\u7684"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u826f\u597d\u7684\u67b6\u69cb\u61c9\u8a72\u662f\u4ee5\u4f7f\u7528\u6848\u4f8b\u70ba\u4e2d\u5fc3 ex.\u623f\u5b50\u662f\u70ba\u4e86\u8b93\u4eba\u4f4f\u800c\u5efa\u9020\uff0c\u800c\u4e0d\u662f\u70ba\u4e86\u78ba\u4fdd\u7528\u78da\u982d\u505a\u7684\u3002")),(0,a.kt)("h2",{id:"\u53ef\u6e2c\u7684\u67b6\u69cb"},"\u53ef\u6e2c\u7684\u67b6\u69cb"),(0,a.kt)("p",null,"\u78ba\u4fdd\u6211\u6c92\u6709\u88ab\u6846\u67b6\u7d81\u67b6\uff1a\u4f60\u7684\u67b6\u69cb\u53ef\u4ee5\u5728\u6c92\u6709\u6846\u67b6\u7684\u60c5\u6cc1\u4e0b\u5c0d\u6240\u6709\u4f7f\u7528\u8005\u6848\u4f8b\u505a\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"\u55ae\u5143\u6e2c\u8a66"),"\u3002\u4f60\u6846\u67b6\u6240\u670d\u52d9\u7684 Entity (\u6240\u5be6\u884c\u7684 Entities) \u4e0d\u61c9\u8a72\u4f9d\u8cf4\u7279\u5b9a\u7684\u6846\u67b6\u6216\u8cc7\u6599\u5eab\u3002"),(0,a.kt)("h2",{id:"\u7e3d\u7d50"},"\u7e3d\u7d50"),(0,a.kt)("p",null,"\u67b6\u69cb\u61c9\u8a72\u544a\u8a34\u95b1\u8b80\u8005\u9019\u500b\u7cfb\u7d71\u7684\u529f\u80fd\uff0c\u4e0d\u662f\u4f60\u7684\u6846\u67b6\u4f86\u505a\u9019\u4ef6\u4e8b\u3002"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u6846\u67b6\u662f\u5de5\u5177\uff0c\u4e0d\u662f\u5b58\u5728\u7684\u65b9\u5f0f")),(0,a.kt)("p",null,"bgm: Endless Embrace By MYTH & ROID"))}d.isMDXComponent=!0}}]);