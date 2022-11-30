"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[4729],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8913:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={title:"Ch30: \u8cc7\u6599\u5eab\u662f\u7d30\u7bc0",tsidebar_label:"Ch30: \u8cc7\u6599\u5eab\u662f\u7d30\u7bc0",sidebar_position:30},l=void 0,u={unversionedId:"sg/clean-architecture/ch30",id:"sg/clean-architecture/ch30",title:"Ch30: \u8cc7\u6599\u5eab\u662f\u7d30\u7bc0",description:"\u4f5c\u8005\u8a8d\u70ba\uff0c\u8cc7\u6599\u5b58\u53d6\u6a21\u578b\u4e5f\u662f\u8edf\u9ad4\u67b6\u69cb\u7684\u4e00\u90e8\u5206",source:"@site/docs/sg/clean-architecture/ch30.md",sourceDirName:"sg/clean-architecture",slug:"/sg/clean-architecture/ch30",permalink:"/docs/sg/clean-architecture/ch30",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/clean-architecture/ch30.md",tags:[],version:"current",lastUpdatedBy:"LuPeter",lastUpdatedAt:1669801533,formattedLastUpdatedAt:"11/30/2022",sidebarPosition:30,frontMatter:{title:"Ch30: \u8cc7\u6599\u5eab\u662f\u7d30\u7bc0",tsidebar_label:"Ch30: \u8cc7\u6599\u5eab\u662f\u7d30\u7bc0",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Ch29: \u6574\u6f54\u7684\u5d4c\u5165\u5f0f\u67b6\u69cb",permalink:"/docs/sg/clean-architecture/ch29"},next:{title:"Ch31: Web \u662f\u7d30\u7bc0",permalink:"/docs/sg/clean-architecture/ch31"}},s={},p=[{value:"\u8cc7\u6599\u5eab\u666e\u904d\u7684\u539f\u56e0",id:"\u8cc7\u6599\u5eab\u666e\u904d\u7684\u539f\u56e0",level:2},{value:"\u7576\u78c1\u789f\u4e0d\u5b58\u5728\u6642",id:"\u7576\u78c1\u789f\u4e0d\u5b58\u5728\u6642",level:2},{value:"\u7e3d\u7d50",id:"\u7e3d\u7d50",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4f5c\u8005\u8a8d\u70ba\uff0c\u8cc7\u6599\u5b58\u53d6\u6a21\u578b\u4e5f\u662f\u8edf\u9ad4\u67b6\u69cb\u7684\u4e00\u90e8\u5206\n\u4f46\u662f\u5be6\u969b\u4e0a\u4f7f\u7528\u7684\u8cc7\u6599\u5eab\u7cfb\u7d71\u672c\u8eab\u61c9\u8a72\u8207\u7cfb\u7d71\u67b6\u69cb\u7121\u95dc"),(0,i.kt)("h2",{id:"\u8cc7\u6599\u5eab\u666e\u904d\u7684\u539f\u56e0"},"\u8cc7\u6599\u5eab\u666e\u904d\u7684\u539f\u56e0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8cc7\u6599\u4fdd\u5b58\u4ef0\u8cf4\u78c1\u789f\u7684\u5b58\u53d6"),(0,i.kt)("li",{parentName:"ul"},"\u78c1\u789f\u5b58\u53d6\u901f\u5ea6\u76f8\u8f03\u65bc RAM \u5167\u90e8\u7684\u8cc7\u6599\u50b3\u8f38\uff0c\u662f\u6beb\u79d2\u8207\u8010\u79d2\u7684\u5dee\u7570\uff0c\u7d04\u662f\u4e00\u767e\u842c\u500d"),(0,i.kt)("li",{parentName:"ul"},"\u70ba\u4e86\u89e3\u6c7a\u78c1\u789f\u8b80\u5beb\u7de9\u6162\u7684\u554f\u984c\uff0c\u6703\u9700\u8981\u7d22\u5f15\u3001\u66ab\u5b58\u8207\u6700\u4f73\u5316\u7b49\u6a5f\u5236\u4f86\u512a\u5316\uff0c RDBMS \u8207 file system \u88ab\u7576\u6210\u662f\u89e3\u6c7a\u65b9\u6848")),(0,i.kt)("h2",{id:"\u7576\u78c1\u789f\u4e0d\u5b58\u5728\u6642"},"\u7576\u78c1\u789f\u4e0d\u5b58\u5728\u6642"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6a94\u6848\u8b80\u53d6\u5230 RAM \u4e2d\u6703\u4ee5\u5404\u7a2e\u8cc7\u6599\u7d50\u69cb\u505a\u5132\u5b58\uff0c\u50cf\u662f LinkedList\u3001Tree\u3001HashMap \u7b49\u5e38\u898b\u7684\u8cc7\u6599\u7d50\u69cb")),(0,i.kt)("h2",{id:"\u7e3d\u7d50"},"\u7e3d\u7d50"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u62bd\u8c61\u7684\u8cc7\u6599\u6a21\u578b\u8207\u8edf\u9ad4\u67b6\u69cb\u9ad8\u5ea6\u76f8\u95dc\u4e14\u91cd\u8981\uff0c\u7136\u5728\u8cc7\u6599\u5eab\u672c\u8eab\u7684\u5be6\u4f5c\u8207\u5b58\u53d6\u6a5f\u5236\u7121\u95dc"),(0,i.kt)("li",{parentName:"ul"},"\u5728\u63a2\u8a0e\u8edf\u9ad4\u67b6\u69cb\u7684\u6642\u5019\uff0c\u8cc7\u6599\u5eab\u6703\u662f\u4e00\u500b\u7d30\u7bc0\uff0c\u8cc7\u6599\u5132\u5b58\u65b9\u9762\u7684 issue \u8207\u8edf\u9ad4\u5c64\u7684\u696d\u52d9\u908f\u8f2f\u61c9\u662f\u76f8\u4e92\u7368\u7acb\u7684\u554f\u984c")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Discussion")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u554f\u984c: \u5927\u5bb6\u662f\u5426\u6709\u9047\u904e\uff0c\u5916\u90e8\u7684\u8981\u6c42\u975e\u8981\u5718\u968a\u4f7f\u7528 RDBMS \uff1f\n\u4f46\u5176\u5be6\u7576\u524d\u5be6\u4f5c\u6216\u7dad\u8b77\u7684\u5c08\u6848\uff0c\u6839\u672c\u4e0d\u9700\u8981\u591a\u4e00\u500b\u8cc7\u6599\u5eab\u4f86\u589e\u52a0\u7dad\u8b77\u6210\u672c"))))}m.isMDXComponent=!0}}]);