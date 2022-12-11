"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[2315],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(c,".").concat(m)]||d[m]||s[m]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6411:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={title:"Ch16: \u7368\u7acb\u6027",sidebar_label:"Ch16: \u7368\u7acb\u6027",sidebar_position:16},c=void 0,u={unversionedId:"sg/clean-architecture/ch16",id:"sg/clean-architecture/ch16",title:"Ch16: \u7368\u7acb\u6027",description:"\u597d\u7684\u67b6\u69cb\u5fc5\u9808\u652f\u63f4",source:"@site/docs/sg/clean-architecture/ch16.md",sourceDirName:"sg/clean-architecture",slug:"/sg/clean-architecture/ch16",permalink:"/docs/sg/clean-architecture/ch16",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/clean-architecture/ch16.md",tags:[],version:"current",lastUpdatedBy:"tom-c-chen",lastUpdatedAt:1670774481,formattedLastUpdatedAt:"12/11/2022",sidebarPosition:16,frontMatter:{title:"Ch16: \u7368\u7acb\u6027",sidebar_label:"Ch16: \u7368\u7acb\u6027",sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"Ch15: \u4ec0\u9ebc\u662f\u67b6\u69cb",permalink:"/docs/sg/clean-architecture/ch15"},next:{title:"Ch17: \u908a\u754c\uff1a\u756b\u7dda",permalink:"/docs/sg/clean-architecture/ch17"}},p={},s=[{value:"\u597d\u7684\u67b6\u69cb\u5fc5\u9808\u652f\u63f4",id:"\u597d\u7684\u67b6\u69cb\u5fc5\u9808\u652f\u63f4",level:2},{value:"\u4f7f\u7528\u6848\u4f8b",id:"\u4f7f\u7528\u6848\u4f8b",level:3},{value:"\u904b\u884c",id:"\u904b\u884c",level:3},{value:"\u958b\u767c",id:"\u958b\u767c",level:3},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:3},{value:"\u8b93\u9078\u9805\u4fdd\u6301\u958b\u653e",id:"\u8b93\u9078\u9805\u4fdd\u6301\u958b\u653e",level:2},{value:"\u89e3\u8026\u5404\u5c64",id:"\u89e3\u8026\u5404\u5c64",level:2},{value:"\u89e3\u8026\u4f7f\u7528\u6848\u4f8b",id:"\u89e3\u8026\u4f7f\u7528\u6848\u4f8b",level:2},{value:"\u7368\u7acb\u958b\u767c",id:"\u7368\u7acb\u958b\u767c",level:2},{value:"\u7368\u7acb\u90e8\u7f72",id:"\u7368\u7acb\u90e8\u7f72",level:2},{value:"\u91cd\u8907",id:"\u91cd\u8907",level:2},{value:"\u89e3\u8026\u6a21\u5f0f",id:"\u89e3\u8026\u6a21\u5f0f",level:2},{value:"\u7e3d\u7d50",id:"\u7e3d\u7d50",level:2}],d={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u597d\u7684\u67b6\u69cb\u5fc5\u9808\u652f\u63f4"},"\u597d\u7684\u67b6\u69cb\u5fc5\u9808\u652f\u63f4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7cfb\u7d71\u7684\u4f7f\u7528\u6848\u4f8b\u548c\u904b\u884c"),(0,l.kt)("li",{parentName:"ul"},"\u7cfb\u7d71\u7684\u7dad\u8b77"),(0,l.kt)("li",{parentName:"ul"},"\u7cfb\u7d71\u7684\u958b\u767c"),(0,l.kt)("li",{parentName:"ul"},"\u7cfb\u7d71\u7684\u90e8\u7f72")),(0,l.kt)("h3",{id:"\u4f7f\u7528\u6848\u4f8b"},"\u4f7f\u7528\u6848\u4f8b"),(0,l.kt)("p",null,"\u7cfb\u7d71\u7684\u67b6\u69cb\u5fc5\u9808\u652f\u63f4\u7cfb\u7d71\u7684\u610f\u5716\uff08\u60f3\u9054\u6210\u4ec0\u9ebc\u76ee\u6a19\uff09"),(0,l.kt)("h3",{id:"\u904b\u884c"},"\u904b\u884c"),(0,l.kt)("p",null,"\u67b6\u69cb\u5728\u652f\u63f4\u7cfb\u7d71\u904b\u884c\u65b9\u9762\u626e\u6f14\u66f4\u91cd\u8981\u4e14\u57fa\u672c\u7684\u89d2\u8272"),(0,l.kt)("h3",{id:"\u958b\u767c"},"\u958b\u767c"),(0,l.kt)("p",null,"\u67b6\u69cb\u5728\u652f\u63f4\u958b\u767c\u74b0\u5883\u65b9\u9762\u626e\u6f14\u91cd\u5927\u7684\u89d2\u8272"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://zh.wikipedia.org/zh-tw/%E5%BA%B7%E5%A8%81%E5%AE%9A%E5%BE%8B"},"\u5eb7\u5a01\u5b9a\u5f8b(Conway's Law)"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"\u8a2d\u8a08\u7cfb\u7d71\u7684\u67b6\u69cb\u53d7\u5236\u65bc\u7522\u751f\u9019\u4e9b\u8a2d\u8a08\u7684\u7d44\u7e54\u7684\u6e9d\u901a\u7d50\u69cb\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://cloud.tencent.com/developer/article/1892297"},"\u53cd\u5411\u5eb7\u5a01\u5b9a\u5f8b"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"\u7d44\u7e54\u8981\u6839\u64da\u4ed6\u5011\u60f3\u5f97\u5230\u7684\u8edf\u4ef6\u67b6\u69cb\u4f86\u8a2d\u8a08\u5718\u968a\u7d50\u69cb\uff0c\u800c\u4e0d\u662f\u671f\u671b\u5718\u968a\u76f2\u5f9e\u4e00\u500b\u88ab\u8a2d\u8a08\u597d\u7684\u5718\u968a\u7d50\u69cb\u3002")))),(0,l.kt)("h3",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,l.kt)("p",null,"\u67b6\u69cb\u5728\u6c7a\u5b9a\u7cfb\u7d71\u90e8\u7f72\u7684\u65b9\u4fbf\u6027\u65b9\u9762\u4e5f\u626e\u6f14\u91cd\u5927\u7684\u89d2\u8272"),(0,l.kt)("h2",{id:"\u8b93\u9078\u9805\u4fdd\u6301\u958b\u653e"},"\u8b93\u9078\u9805\u4fdd\u6301\u958b\u653e"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5ef6\u7e8c ",(0,l.kt)("a",{parentName:"p",href:"/docs/sg/clean-architecture/ch15#%E4%BF%9D%E6%8C%81%E9%81%B8%E9%A0%85%E9%96%8B%E6%94%BE"},"ch15-\u4fdd\u6301\u9078\u9805\u958b\u653e"))),(0,l.kt)("p",null,"\u67b6\u69cb\u5728\u5fc5\u9808\u6539\u8b8a\u7684\u5404\u65b9\u9762\uff0c\u90fd\u53ef\u5c07\u9078\u9805\u958b\u653e\uff0c\u4f7f\u7cfb\u7d71\u66f4\u6613\u65bc\u6539\u8b8a"),(0,l.kt)("h2",{id:"\u89e3\u8026\u5404\u5c64"},"\u89e3\u8026\u5404\u5c64"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u67b6\u69cb\u5e2b\u53ef\u4ee5\u63a1\u53d6 SRP \u548c CCP \u4f86\u5206\u96e2\u90a3\u4e9b\u56e0\u4e0d\u540c\u539f\u56e0\u800c\u8b8a\u5316\u7684\u4e8b\u7269"),(0,l.kt)("li",{parentName:"ul"},"\u5c07\u7cfb\u7d71\u5206\u5272\u70ba\u89e3\u8026\u7684\u591a\u500b\u7368\u7acb\u6c34\u5e73\u5c64\uff0c\u4ee5\u4fbf\u53ef\u4ee5\u7368\u7acb\u4fee\u6539")),(0,l.kt)("h2",{id:"\u89e3\u8026\u4f7f\u7528\u6848\u4f8b"},"\u89e3\u8026\u4f7f\u7528\u6848\u4f8b"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528\u6848\u4f8b\u662f\u5283\u5206\u7cfb\u7d71\u7684\u4e00\u7a2e\u975e\u5e38\u81ea\u7136\u7684\u65b9\u5f0f")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6848\u4f8b\u7528\u4f86\u5207\u5272\u6c34\u5e73\u5c64")),(0,l.kt)("h2",{id:"\u7368\u7acb\u958b\u767c"},"\u7368\u7acb\u958b\u767c"),(0,l.kt)("p",null,"\u7cfb\u7d71\u5c64\u6b21\u8207\u4f7f\u7528\u6848\u4f8b\u88ab\u89e3\u8026\u4e86\uff0c\u5404\u5206\u5c64\u5c31\u53ef\u4ee5\u7368\u7acb\u958b\u767c"),(0,l.kt)("h2",{id:"\u7368\u7acb\u90e8\u7f72"},"\u7368\u7acb\u90e8\u7f72"),(0,l.kt)("p",null,"\u5404\u5206\u5c64\u53ef\u88ab\u958b\u767c\u70ba\u7368\u7acb\u7684\u5fae\u670d\u52d9\u4f86\u7368\u7acb\u90e8\u7f72"),(0,l.kt)("h2",{id:"\u91cd\u8907"},"\u91cd\u8907"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5c0d\u91cd\u8907(Duplication)\u7684\u6050\u61fc")),(0,l.kt)("p",null,"\u5982\u679c\u5169\u500b\u660e\u986f\u91cd\u8907\u7684\u7a0b\u5f0f\u78bc\u6cbf\u8457\u4e0d\u540c\u8def\u5f91\u767c\u5c55-\u5982\u679c\u5b83\u5011\u4ee5\u4e0d\u540c\u7684\u901f\u7387\u4e26\u7531\u65bc\u4e0d\u540c\u7684\u539f\u56e0\u6539\u8b8a\uff0c\u90a3\u9ebc\u5b83\u5011\u5c31\u4e0d\u662f\u771f\u7684\u91cd\u8907"),(0,l.kt)("h2",{id:"\u89e3\u8026\u6a21\u5f0f"},"\u89e3\u8026\u6a21\u5f0f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u539f\u59cb\u78bc\u5c64\u7d1a\uff1a\u63a7\u5236\u539f\u59cb\u78bc\u6a21\u7d44\u9593\u7684\u4f9d\u8cf4\u95dc\u4fc2"),(0,l.kt)("li",{parentName:"ul"},"\u90e8\u7f72\u5c64\u7d1a\uff1a\u63a7\u5236\u90e8\u7f72\u55ae\u5143\u4e4b\u9593\u7684\u4f9d\u8cf4\u95dc\u4fc2"),(0,l.kt)("li",{parentName:"ul"},"\u670d\u52d9\u5c64\u7d1a\uff1a\u5c07\u4f9d\u8cf4\u95dc\u4fc2\u964d\u4f4e\u5230\u8cc7\u6599\u7d50\u69cb\u7684\u5c64\u6b21\uff0c\u4f7f\u6bcf\u500b\u57f7\u884c\u55ae\u5143\u5b8c\u5168\u7368\u7acb\u4f86\u9032\u884c\u66f4\u6539\uff08\u4f8b\u5982\u670d\u52d9\u6216\u5fae\u670d\u52d9\uff09")),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"discussion")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u54ea\u7a2e\u6a21\u5f0f\u662f\u6700\u597d\u7684\uff1f"),(0,l.kt)("p",{parentName:"div"},"\u5728\u5c08\u6848\u65e9\u671f\u5f88\u96e3\u77e5\u9053\u54ea\u7a2e\u6a21\u5f0f\u5c0d\u65bc\u5c08\u6848\u662f\u6700\u597d\u7684\u3002\u96a8\u8457\u5c08\u6848\u7684\u6210\u719f\u5ea6\uff0c\u6700\u597d\u7684\u6a21\u5f0f\u53ef\u80fd\u6703\u767c\u751f\u6539\u8b8a\u3002"))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5c07\u89e3\u8026\u76e1\u91cf\u63a8\u81f3\u53ef\u5f62\u6210\u670d\u52d9\u7684\u7a0b\u5ea6"))),(0,l.kt)("p",null,"\u4e00\u500b\u597d\u67b6\u69cb\u53ef\u4ee5\u4fdd\u8b77\u5927\u90e8\u5206\u7684\u539f\u59cb\u78bc\u4e0d\u6703\u96a8\u8457\u60c5\u6cc1\u7684\u8b8a\u5316\u53d7\u5230\u5f71\u97ff\u3002\u5c07\u89e3\u8026\u6a21\u5f0f\u770b\u4f5c\u662f\u300e",(0,l.kt)("strong",{parentName:"p"},"\u9078\u9805"),"\u300f\u800c\u4fdd\u6301\u958b\u653e\uff0c\u4ee5\u4fbf\u5927\u578b\u90e8\u7f72\u53ef\u4ee5\u4f7f\u7528\u4e00\u7a2e\u6a21\u5f0f\uff0c\u800c\u5c0f\u578b\u90e8\u7f72\u53ef\u4ee5\u4f7f\u7528\u53e6\u4e00\u7a2e\u6a21\u5f0f\u3002"),(0,l.kt)("h2",{id:"\u7e3d\u7d50"},"\u7e3d\u7d50"),(0,l.kt)("p",null,"\u4e00\u500b\u7cfb\u7d71\u7684\u89e3\u8026\u6a21\u5f0f\uff0c\u662f\u53ef\u80fd\u96a8\u6642\u9593\u800c\u6539\u8b8a\u7684\u4e8b\u60c5\u4e4b\u4e00\uff0c\u597d\u7684\u67b6\u69cb\u5e2b\u6703\u9810\u898b\u4e26\u9069\u7576\u5730\u4fc3\u9032\u9019\u4e9b\u8b8a\u5316\u767c\u751f"))}m.isMDXComponent=!0}}]);