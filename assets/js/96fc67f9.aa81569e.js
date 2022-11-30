"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[5805],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=l(n),h=i,f=d["".concat(u,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,c=new Array(a);c[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9609:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),c=["components"],o={title:"Ch25: \u5c64\u8207\u908a\u754c",tsidebar_label:"Ch25: \u5c64\u8207\u908a\u754c",sidebar_position:25},u=void 0,l={unversionedId:"sg/clean-architecture/ch25",id:"sg/clean-architecture/ch25",title:"Ch25: \u5c64\u8207\u908a\u754c",description:"\u5c07\u7cfb\u7d71\u7c21\u55ae\u770b\u4f5c\u7531\u4e09\u500b\u5143\u4ef6\u6240\u7d44\u6210\uff1aUI\u3001\u696d\u52d9\u3001\u8cc7\u6599\u5eab \u2192 \u5be6\u969b\u4e0a\u5143\u4ef6\u6578\u91cf\u6bd4\u60f3\u50cf\u4e2d\u9084\u591a\u3002",source:"@site/docs/sg/clean-architecture/ch25.md",sourceDirName:"sg/clean-architecture",slug:"/sg/clean-architecture/ch25",permalink:"/docs/sg/clean-architecture/ch25",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/clean-architecture/ch25.md",tags:[],version:"current",lastUpdatedBy:"LuPeter",lastUpdatedAt:1669801533,formattedLastUpdatedAt:"11/30/2022",sidebarPosition:25,frontMatter:{title:"Ch25: \u5c64\u8207\u908a\u754c",tsidebar_label:"Ch25: \u5c64\u8207\u908a\u754c",sidebar_position:25},sidebar:"tutorialSidebar",previous:{title:"Ch24: \u90e8\u5206\u908a\u754c",permalink:"/docs/sg/clean-architecture/ch24"},next:{title:"Ch26: \u4e3b\u5143\u4ef6",permalink:"/docs/sg/clean-architecture/ch26"}},s={},p=[{value:"Hunt the Wumpus",id:"hunt-the-wumpus",level:2},{value:"\u6574\u6f54\u7684\u67b6\u69cb (\u6f14\u9032\u5f8c\u7684\u67b6\u69cb)",id:"\u6574\u6f54\u7684\u67b6\u69cb-\u6f14\u9032\u5f8c\u7684\u67b6\u69cb",level:2},{value:"\u62bd\u96e2\u5177\u9ad4\u5be6\u4f5c\uff0c\u95dc\u6ce8 API \u5143\u4ef6",id:"\u62bd\u96e2\u5177\u9ad4\u5be6\u4f5c\u95dc\u6ce8-api-\u5143\u4ef6",level:3},{value:"\u8de8\u8d8a\u6d41",id:"\u8de8\u8d8a\u6d41",level:2},{value:"\u5206\u5272\u6d41",id:"\u5206\u5272\u6d41",level:2},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}],d={toc:p};function h(e){var t=e.components,o=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5c07\u7cfb\u7d71\u7c21\u55ae\u770b\u4f5c\u7531\u4e09\u500b\u5143\u4ef6\u6240\u7d44\u6210\uff1aUI\u3001\u696d\u52d9\u3001\u8cc7\u6599\u5eab \u2192 \u5be6\u969b\u4e0a\u5143\u4ef6\u6578\u91cf\u6bd4\u60f3\u50cf\u4e2d\u9084\u591a\u3002"),(0,a.kt)("h2",{id:"hunt-the-wumpus"},"Hunt the Wumpus"),(0,a.kt)("p",null,"\u4e00\u6b3e\u5e74\u4ee3\u4e45\u9060\u7684",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hunt_the_Wumpus"},"\u5192\u96aa\u904a\u6232"),"\u3002"),(0,a.kt)("p",null,"\u4fdd\u7559\u57fa\u65bc\u6587\u5b57\u7684 UI\uff0c\u4e26\u4e14\u8981\u548c\u904a\u6232\u898f\u5247\u9032\u884c\u89e3\u8026\uff0c\u8b93\u904a\u6232\u7248\u672c\u80fd\u5728\u4e0d\u540c\u7684\u5e02\u5834\u5207\u63db\u81f3\u4e0d\u540c\u7684\u8a9e\u8a00\uff0c\u540c\u6642\u5e0c\u671b\u9019\u4e9b\u904a\u6232\u72c0\u614b\u88ab\u4fdd\u5b58\u5728\u67d0\u7a2e\u5132\u5b58\u9ad4\u4e0a\u3002\n",(0,a.kt)("img",{alt:"25.1",src:n(8634).Z,width:"592",height:"187"})),(0,a.kt)("h2",{id:"\u6574\u6f54\u7684\u67b6\u69cb-\u6f14\u9032\u5f8c\u7684\u67b6\u69cb"},"\u6574\u6f54\u7684\u67b6\u69cb (\u6f14\u9032\u5f8c\u7684\u67b6\u69cb)"),(0,a.kt)("p",null,"\u5be6\u969b\u4e0a\u8003\u91cf\u7684\u72c0\u6cc1\u66f4\u52a0\u8907\u96dc\uff0c\u4f8b\u5982 UI \u7684\u5340\u584a\u4e0d\u53ea\u6709\u8a9e\u7cfb\u4e0a\u7684\u8b8a\u5316\uff0c\u8a9e\u7cfb\u50b3\u905e\u7684\u65b9\u5f0f\u4e5f\u6709\u53ef\u80fd\u6539\u8b8a\n",(0,a.kt)("img",{alt:"25.2",src:n(6976).Z,width:"864",height:"287"}),"\n\u865b\u7dda\uff1a\u62bd\u8c61\u7684 API; \u865b\u7dda\u4e0a\u4e0b\u65b9\u7684\u5be6\u7dda\uff1a\u5177\u9ad4\u7684\u5be6\u4f5c"),(0,a.kt)("p",null,"\u901a\u8a0a\u6a5f\u5236\u5b58\u5728\u4e0d\u540c\u7684\u53ef\u80fd\u6027\uff0c\u9019\u8868\u793a\u67b6\u69cb\u4e2d\u4e00\u500b\u53ef\u80fd\u7684\u6f5b\u5728\u908a\u754c\uff0c\u65e2\u7136\u6709\u7121\u6578\u7684\u8b8a\u5316\u53ef\u80fd\u6027\uff0c\u9019\u8868\u660e\u9019\u4e9b\u8b8a\u5316\u8ef8\u5b9a\u7fa9\u4e86\u4e00\u500b\u67b6\u69cb\u9650\u5236\u3002\u56e0\u6b64\uff0c\u6709\u5fc5\u8981\u5275\u5efa\u4e00\u500b API \u4f86\u8de8\u8d8a\u9019\u500b\u9650\u5236\uff0c\u4e26\u5c07\u8a9e\u8a00\u8207\u901a\u8a0a\u6a5f\u5236\u9694\u96e2\u958b\u4f86\u3002"),(0,a.kt)("h3",{id:"\u62bd\u96e2\u5177\u9ad4\u5be6\u4f5c\u95dc\u6ce8-api-\u5143\u4ef6"},"\u62bd\u96e2\u5177\u9ad4\u5be6\u4f5c\uff0c\u95dc\u6ce8 API \u5143\u4ef6"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"25.3",src:n(5324).Z,width:"385",height:"404"})),(0,a.kt)("p",null,"\u4e0a\u5716\u7684\u7bad\u982d\u65b9\u5411\u6307\u5411\u7686\u70ba\u4e0a\u65b9\uff0c\u6700\u7d42\u6307\u5411 Game Rule\uff0c\u56e0\u70ba Game Rule \u96b1\u542b\u6700\u9ad8\u5c64\u7d1a\u7684\u5143\u4ef6\u3002"),(0,a.kt)("h2",{id:"\u8de8\u8d8a\u6d41"},"\u8de8\u8d8a\u6d41"),(0,a.kt)("p",null,"\u52a0\u5165\u7db2\u8def(Network)\u9019\u9805\u5143\u4ef6\n",(0,a.kt)("img",{alt:"25.4",src:n(3166).Z,width:"875",height:"365"})),(0,a.kt)("h2",{id:"\u5206\u5272\u6d41"},"\u5206\u5272\u6d41"),(0,a.kt)("p",null,"\u8fd1\u4e00\u6b65\u9817\u6790 Game Rule\uff1a\u8003\u91cf\u73a9\u5bb6\u7684\u72c0\u614b\n",(0,a.kt)("img",{alt:"25.5",src:n(7089).Z,width:"633",height:"390"})),(0,a.kt)("p",null,"\u8003\u91cf\u5fae\u670d\u52d9\u5f8c\u7684\u67b6\u69cb\uff1a\n",(0,a.kt)("img",{alt:"25.6",src:n(7117).Z,width:"865",height:"386"})),(0,a.kt)("h2",{id:"\u7d50\u8ad6"},"\u7d50\u8ad6"),(0,a.kt)("p",null,"\u4e0a\u8ff0\u7684\u4f8b\u5b50\u8aaa\u660e\u67b6\u69cb\u908a\u754c\u7121\u8655\u4e0d\u5728\uff0c\u67b6\u69cb\u5e2b\u8b58\u5225\u4f55\u6642\u9700\u8981\u5b83\u5011\uff0c\u4e5f\u9700\u610f\u8b58\u5230\u5145\u5206\u5be6\u4f5c\u9019\u4e9b\u908a\u754c\u662f\u6602\u8cb4\u7684\uff0c\u4f46\u540c\u6642\u8981\u660e\u767d\u5ffd\u8996\u67d0\u4e9b\u908a\u754c\uff0c\u5728\u672a\u4f86\u624d\u52a0\u5165\u53ef\u80fd\u6703\u7522\u751f\u5de8\u5927\u7684\u6210\u672c\u3002"),(0,a.kt)("p",null,"\u67b6\u69cb\u6c7a\u7b56\u9700\u6b0a\u8861\u6210\u672c\uff1a\u78ba\u8a8d\u4f55\u8655\u70ba\u67b6\u69cb\u7684\u908a\u754c\uff0c\u54ea\u4e9b\u61c9\u5b8c\u5168\u5be6\u4f5c\uff0c\u54ea\u4e9b\u61c9\u90e8\u5206\u5be6\u4f5c\uff0c\u54ea\u4e9b\u53ef\u88ab\u5ffd\u7565\u3002"),(0,a.kt)("p",null,"\u6c7a\u5b9a\u908a\u754c\u4e0d\u662f\u4e00\u6b21\u5230\u4f4d\u7684\uff0c\u6709\u5fc5\u8981\u89c0\u5bdf\u7cfb\u7d71\u7684\u6f14\u8b8a\uff0c\u5206\u6790\u54ea\u4e9b\u5730\u65b9\u53ef\u80fd\u9700\u8981\u908a\u754c\uff0c\u4ee5\u53ca\u5982\u679c\u5b83\u5011\u6c92\u6709\u660e\u78ba\u5b9a\u7fa9\u7684\u908a\u754c\u6703\u7522\u751f\u4f55\u7a2e\u5f71\u97ff\uff0c\u5c07\u5be6\u4f5c\u908a\u754c\u7684\u6210\u672c\u8207\u5ffd\u7565\u5b83\u5011\u7684\u6210\u672c\u9032\u884c\u6bd4\u8f03\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5c0b\u6c42\u7684\u76ee\u6a19\uff1a\u5be6\u4f5c\u908a\u754c\u7684\u6210\u672c\u4f4e\u65bc\u5ffd\u7565\u5b83\u5011\u7684\u6210\u672c")))}h.isMDXComponent=!0},8634:function(e,t,n){t.Z=n.p+"assets/images/25.1-9cf4b0faa133a30f654782f9fcbe9853.png"},6976:function(e,t,n){t.Z=n.p+"assets/images/25.2-61d53a94bfe90d1cca4b21698e2406be.png"},5324:function(e,t,n){t.Z=n.p+"assets/images/25.3-9e02768847eeed2838c18231c39dcb06.png"},3166:function(e,t,n){t.Z=n.p+"assets/images/25.4-dbbb2850fdace9e28fdd68fc0280d6ae.png"},7089:function(e,t,n){t.Z=n.p+"assets/images/25.5-0de69ea6bf440df1c4860825294e226b.png"},7117:function(e,t,n){t.Z=n.p+"assets/images/25.6-7059830187405a88c9f48fd063dbe82d.png"}}]);