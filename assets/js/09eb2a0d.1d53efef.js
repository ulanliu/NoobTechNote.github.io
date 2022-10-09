"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[821],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7990:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Ch15: \u4ec0\u9ebc\u662f\u67b6\u69cb",sidebar_label:"Ch15: \u4ec0\u9ebc\u662f\u67b6\u69cb",sidebar_position:15},c=void 0,p={unversionedId:"sg/clean-architecture/ch15",id:"sg/clean-architecture/ch15",title:"Ch15: \u4ec0\u9ebc\u662f\u67b6\u69cb",description:"- \u6709\u60f3\u904e\u6210\u70ba\u4e00\u540d\u8edf\u9ad4\u67b6\u69cb\u5e2b\u55ce\uff1f",source:"@site/docs/sg/clean-architecture/ch15.md",sourceDirName:"sg/clean-architecture",slug:"/sg/clean-architecture/ch15",permalink:"/docs/sg/clean-architecture/ch15",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/clean-architecture/ch15.md",tags:[],version:"current",lastUpdatedBy:"zoe chen",lastUpdatedAt:1665309217,formattedLastUpdatedAt:"10/9/2022",sidebarPosition:15,frontMatter:{title:"Ch15: \u4ec0\u9ebc\u662f\u67b6\u69cb",sidebar_label:"Ch15: \u4ec0\u9ebc\u662f\u67b6\u69cb",sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Ch14: \u5143\u4ef6\u8026\u5408\u6027",permalink:"/docs/sg/clean-architecture/ch14"},next:{title:"Ch16: \u7368\u7acb\u6027",permalink:"/docs/sg/clean-architecture/ch16"}},s={},u=[{value:"\u7cfb\u7d71\u67b6\u69cb\u8a72\u6ce8\u610f\u7684\u56db\u9ede",id:"\u7cfb\u7d71\u67b6\u69cb\u8a72\u6ce8\u610f\u7684\u56db\u9ede",level:2},{value:"\u4fdd\u6301\u9078\u9805\u958b\u653e",id:"\u4fdd\u6301\u9078\u9805\u958b\u653e",level:2},{value:"\u5169\u5927\u5143\u7d20",id:"\u5169\u5927\u5143\u7d20",level:3},{value:"\u4f8b\u5982",id:"\u4f8b\u5982",level:3},{value:"\u8a2d\u5099\u7368\u7acb",id:"\u8a2d\u5099\u7368\u7acb",level:2},{value:"\u5783\u573e\u5ee3\u544a\u4fe1",id:"\u5783\u573e\u5ee3\u544a\u4fe1",level:2},{value:"\u7e3d\u7d50",id:"\u7e3d\u7d50",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"discussion")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u6709\u60f3\u904e\u6210\u70ba\u4e00\u540d\u8edf\u9ad4\u67b6\u69cb\u5e2b\u55ce\uff1f"),(0,i.kt)("li",{parentName:"ul"},"\u4ec0\u9ebc\u662f\u8edf\u9ad4\u67b6\u69cb\uff1f"),(0,i.kt)("li",{parentName:"ul"},"\u67b6\u69cb\u5e2b\u8981\u505a\u4e9b\u4ec0\u9ebc\uff1f")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"\u76e1\u53ef\u80fd\u8b93\u66f4\u591a\u7684\u9078\u9805\u662f\u958b\u653e\u7684")))),(0,i.kt)("h2",{id:"\u7cfb\u7d71\u67b6\u69cb\u8a72\u6ce8\u610f\u7684\u56db\u9ede"},"\u7cfb\u7d71\u67b6\u69cb\u8a72\u6ce8\u610f\u7684\u56db\u9ede"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u958b\u767c"),(0,i.kt)("li",{parentName:"ul"},"\u90e8\u7f72"),(0,i.kt)("li",{parentName:"ul"},"\u904b\u884c"),(0,i.kt)("li",{parentName:"ul"},"\u7dad\u8b77")),(0,i.kt)("h2",{id:"\u4fdd\u6301\u9078\u9805\u958b\u653e"},"\u4fdd\u6301\u9078\u9805\u958b\u653e"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},(0,i.kt)("strong",{parentName:"em"},"\u63a8\u9072\u6c7a\u5b9a\u67b6\u69cb\u7684\u7d30\u7bc0\u6280\u8853")))),(0,i.kt)("h3",{id:"\u5169\u5927\u5143\u7d20"},"\u5169\u5927\u5143\u7d20"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7b56\u7565\uff1a\u7cfb\u7d71\u7684\u6838\u5fc3\u696d\u52d9"),(0,i.kt)("li",{parentName:"ul"},"\u7d30\u7bc0\uff1a\u7cfb\u7d71\u7684\u6280\u8853\u5be6\u73fe")),(0,i.kt)("h3",{id:"\u4f8b\u5982"},"\u4f8b\u5982"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6c92\u5fc5\u8981\u5728\u65e9\u671f\u5c31\u6c7a\u5b9a\u8cc7\u6599\u5eab\u7cfb\u7d71"),(0,i.kt)("li",{parentName:"ul"},"\u6c92\u5fc5\u8981\u5728\u65e9\u671f\u5c31\u9078\u64c7\u4f3a\u670d\u5668"),(0,i.kt)("li",{parentName:"ul"},"\u6c92\u5fc5\u8981\u5728\u65e9\u671f\u5c31\u6c7a\u5b9a\u63a1\u7528 REST"),(0,i.kt)("li",{parentName:"ul"},"\u6c92\u5fc5\u8981\u5728\u65e9\u671f\u5c31\u6c7a\u5b9a\u63a1\u7528\u76f8\u4f9d\u6ce8\u5165\u6846\u67b6")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"\u597d\u7684\u67b6\u69cb\u5e2b\u53ef\u4ee5\u5c07\u4e0d\u505a\u51fa\u6c7a\u5b9a\u7684\u6578\u91cf\u6700\u5927\u5316")))),(0,i.kt)("h2",{id:"\u8a2d\u5099\u7368\u7acb"},"\u8a2d\u5099\u7368\u7acb"),(0,i.kt)("p",null,"1960 \u5e74\u4ee3\u5f8c\u671f\uff0c\u767c\u660e\u4e86",(0,i.kt)("strong",{parentName:"p"},"\u8a2d\u5099\u7368\u7acb"),"\u3002\u4f5c\u696d\u7cfb\u7d71\u5c07\u300cIO \u8a2d\u5099\u300d\u62bd\u8c61\u6210\u300e\u7528\u4f86\u8655\u7406\u770b\u4f3c\u5361\u7247\u55ae\u5143\u7d00\u9304\u7684\u8edf\u9ad4\u529f\u80fd\u300f\u3002\u7a0b\u5f0f\u53ea\u8981\u547c\u53eb\u300e\u8655\u7406\u62bd\u8c61\u8a2d\u5099\u300f\u7684\u4f5c\u696d\u7cfb\u7d71\u670d\u52d9\u3002\u5c31\u53ef\u4ee5\u544a\u8a34\u4f5c\u696d\u7cfb\u7d71\uff0c\u9019\u4e9b\u62bd\u8c61\u670d\u52d9\u9023\u5230\u7684\u662f\u4ec0\u9ebc\u8a2d\u5099"),(0,i.kt)("h2",{id:"\u5783\u573e\u5ee3\u544a\u4fe1"},"\u5783\u573e\u5ee3\u544a\u4fe1"),(0,i.kt)("p",null,"\u5728\u78c1\u5e36\u4e0a\u7de8\u5beb\u63d0\u53d6\u8cc7\u6599\u5143\u7d20\u7684\u7a0b\u5f0f\uff0c\u5c07\u9019\u4e9b\u5143\u7d20\u6b63\u78ba\u5370\u5728\u8868\u55ae\u9700\u8981\u51fa\u73fe\u7684\u5730\u65b9\uff0c\u5c07\u7de8\u5beb\u5b8c\u7684\u78c1\u5e36\u5b89\u88dd\u5230\u5370\u8868\u6a5f\u4e0a\uff0c\u5c31\u53ef\u5b89\u7167\u7a0b\u5f0f\u7684\u5167\u5bb9\u5217\u5370\u51fa\u60f3\u8981\u7684\u5167\u5bb9\u3002"),(0,i.kt)("p",null,"\u7a0b\u5f0f\u64c1\u6709\u4e00\u500b\u6a23\u8c8c\uff08shape\uff09\u3002\u6a23\u8c8c\u5c07\u7b56\u7565\u5f9e\u7d30\u7bc0\u4e2d\u812b\u96e2\u3002\u7b56\u7565\u662f\u7de8\u5beb\u7684\u7a0b\u5f0f\uff0c\u7d30\u7bc0\u662f\u8a2d\u5099\u3002\u5c07\u53ef\u4ee5\u5ef6\u7de9\u6c7a\u5b9a\u4f7f\u7528\u54ea\u7a2e\u8a2d\u5099\u3002"),(0,i.kt)("h2",{id:"\u7e3d\u7d50"},"\u7e3d\u7d50"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5c0f\u5fc3\u5730\u5c07\u7d30\u7bc0\u5f9e\u7b56\u7565\u4e2d\u5206\u96e2\u51fa\u4f86\uff0c\u4f7f\u7b56\u7565\u8207\u7d30\u7bc0\u5fb9\u5e95\u812b\u9264"),(0,i.kt)("li",{parentName:"ul"},"\u6709\u95dc\u7d30\u7bc0\u7684\u6c7a\u5b9a\u53ef\u4ee5\u76e1\u53ef\u80fd\u5730\u88ab\u5ef6\u9072\u548c\u5ef6\u7de9")))}d.isMDXComponent=!0}}]);