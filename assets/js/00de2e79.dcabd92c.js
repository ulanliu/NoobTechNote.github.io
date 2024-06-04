"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[3269],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||l;return r?a.createElement(m,i(i({ref:t},u),{},{components:r})):a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},44243:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const l={title:"Ch11: \u7ba1\u9053\u67b6\u69cb\u98a8\u683c",tsidebar_label:"Ch11: \u7ba1\u9053\u67b6\u69cb\u98a8\u683c",sidebar_position:11},i=void 0,o={unversionedId:"sg/fundamentals-of-software-architecture/ch11",id:"sg/fundamentals-of-software-architecture/ch11",title:"Ch11: \u7ba1\u9053\u67b6\u69cb\u98a8\u683c",description:"\u62d3\u58a3\u7d50\u69cb",source:"@site/docs/sg/fundamentals-of-software-architecture/ch11.md",sourceDirName:"sg/fundamentals-of-software-architecture",slug:"/sg/fundamentals-of-software-architecture/ch11",permalink:"/docs/sg/fundamentals-of-software-architecture/ch11",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/fundamentals-of-software-architecture/ch11.md",tags:[],version:"current",lastUpdatedBy:"yvette-tsai",lastUpdatedAt:1717544124,formattedLastUpdatedAt:"Jun 4, 2024",sidebarPosition:11,frontMatter:{title:"Ch11: \u7ba1\u9053\u67b6\u69cb\u98a8\u683c",tsidebar_label:"Ch11: \u7ba1\u9053\u67b6\u69cb\u98a8\u683c",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Ch10: \u5206\u5c64\u5f0f\u67b6\u69cb\u98a8\u683c",permalink:"/docs/sg/fundamentals-of-software-architecture/ch10"},next:{title:"Ch12: \u5fae\u6838\u5fc3(Microkernel)\u67b6\u69cb\u98a8\u683c",permalink:"/docs/sg/fundamentals-of-software-architecture/ch12"}},c={},s=[{value:"\u62d3\u58a3\u7d50\u69cb",id:"\u62d3\u58a3\u7d50\u69cb",level:2},{value:"\u7ba1\u9053",id:"\u7ba1\u9053",level:3},{value:"\u7be9\u9078\u5668",id:"\u7be9\u9078\u5668",level:3},{value:"\u5404\u7a2e\u7be9\u9078\u5668:",id:"\u5404\u7a2e\u7be9\u9078\u5668",level:4},{value:"\u7bc4\u4f8b",id:"\u7bc4\u4f8b",level:2},{value:"\u67b6\u69cb\u7279\u6027\u7684\u7b49\u7d1a",id:"\u67b6\u69cb\u7279\u6027\u7684\u7b49\u7d1a",level:2},{value:"Recap",id:"recap",level:2}],u={toc:s},p="wrapper";function f(e){let{components:t,...l}=e;return(0,n.kt)(p,(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u62d3\u58a3\u7d50\u69cb"},"\u62d3\u58a3\u7d50\u69cb"),(0,n.kt)("p",null,"\u7d44\u6210\u5143\u4ef6:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7ba1\u9053"),(0,n.kt)("li",{parentName:"ul"},"\u7be9\u9078\u5668\n",(0,n.kt)("img",{alt:"fig_11.1",src:r(85922).Z,width:"1492",height:"702"}))),(0,n.kt)("h3",{id:"\u7ba1\u9053"},"\u7ba1\u9053"),(0,n.kt)("p",null,"\u7be9\u9078\u5668\u9593\u7684\u901a\u4fe1\u901a\u9053\u3002\n\u7279\u6027:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u55ae\u5411"),(0,n.kt)("li",{parentName:"ul"},"\u9ede\u5c0d\u9ede"),(0,n.kt)("li",{parentName:"ul"},"\u904b\u9001\u7684\u8cc7\u6599\u662f\u4efb\u4f55\u683c\u5f0f"),(0,n.kt)("li",{parentName:"ul"},"\u904b\u9001\u7684\u6bcf\u7b46\u8cc7\u6599\u5c0f")),(0,n.kt)("h3",{id:"\u7be9\u9078\u5668"},"\u7be9\u9078\u5668"),(0,n.kt)("p",null,"\u57f7\u884c\u55ae\u4e00\u9805\u5de5\u4f5c\u7684\u55ae\u4f4d\u3002\n\u7279\u6027:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5404\u500b\u7be9\u7be9\u9078\u5668\u90fd\u662f\u7368\u7acb\u7684"),(0,n.kt)("li",{parentName:"ul"},"\u53ea\u6703\u57f7\u884c\u4e00\u9805\u5de5\u4f5c")),(0,n.kt)("h4",{id:"\u5404\u7a2e\u7be9\u9078\u5668"},"\u5404\u7a2e\u7be9\u9078\u5668:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u751f\u7522\u8005: \u7a0b\u5e8f\u7684\u8d77\u9ede"),(0,n.kt)("li",{parentName:"ul"},"\u8f49\u63db\u8005(map): \u5c0d\u8cc7\u6599\u4f5c\u8f49\u63db\u7136\u5f8c\u9001\u51fa\u5230\u5c0d\u61c9\u7684\u7ba1\u9053"),(0,n.kt)("li",{parentName:"ul"},"\u6e2c\u8a66\u8005(reduce): \u63a5\u6536\u8f38\u5165\uff0c\u4f9d\u6e2c\u8a66\u7d50\u679c\u9078\u64c7\u6027\u7522\u751f\u8f38\u51fa"),(0,n.kt)("li",{parentName:"ul"},"\u6d88\u8cbb\u8005: \u7ba1\u9053\u6d41\u7a0b\u7684\u7d42\u9ede\uff0c\u628a\u7d50\u679c\u5b58\u5230\u8cc7\u6599\u5eab\u6216\u662f\u986f\u793a\u5728\u4f7f\u7528\u8005\u4ecb\u9762\u4e0a")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://ithelp.ithome.com.tw/articles/10194296"},"ReduceMap")),(0,n.kt)("p",null,"\u4e0b\u5217\u7684termianl command\u5982\u679c\u4ee5\u7ba1\u9053\u67b6\u69cb\u4f86\u770b\u7684\u8a71\uff0c\u986f\u793a\u51fa\u4ed6\u7684\u7ba1\u9053\u7684\u55ae\u5411\u6027\u4ee5\u53ca\u7be9\u9078\u5668\u7684\u7c21\u6613\u6027"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"            tr -cs A-Za-z '\\n' |\n            tr A-Z a-z |\n            sort |\n            uniq -c |\n            sort -rn |\n            sed ${1}q\n")),(0,n.kt)("h2",{id:"\u7bc4\u4f8b"},"\u7bc4\u4f8b"),(0,n.kt)("p",null,"\u7ba1\u9053\u67b6\u69cb\u5e38\u51fa\u73fe\u5728\u7c21\u55ae\u3001\u55ae\u5411\u5de5\u4f5c\u7684\u8655\u7406\uff0c\u4f8b\u5982",(0,n.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/zh-tw/%E7%94%B5%E5%AD%90%E6%95%B0%E6%8D%AE%E4%BA%A4%E6%8D%A2"},"EDI"),"\u3001",(0,n.kt)("a",{parentName:"p",href:"https://www.oracle.com/tw/integration/what-is-etl/"},"ETL"),"\uff0c\u985e\u4f3c\u65bc\u7ba1\u9053\u67b6\u69cb\u7684\u52d5\u4f5c\uff0c\u5c07\u8cc7\u6599\u5f9e\u4e00\u500b\u6b65\u9a5f\u50b3\u5230\u53e6\u4e00\u500b\u6b65\u9a5f\u3002\n\u4e0b\u5716\u70baKafka\u7684\u61c9\u7528\u5834\u666f\uff0c\u4e3b\u8981\u662f\u8655\u7406\u4e32\u6d41\u81f3Kafka\u7684\u4e0d\u540c\u7a2e\u985e\u8cc7\u6599:\n\u670d\u52d9\u8cc7\u8a0a\u7d00\u9304(\u751f\u7522\u8005)\u8a02\u95b1Kafka\u4e3b\u984c\uff0c\u5c0d\u61c9\u5230\u7be9\u9078\u5668\u7684\uff0c\u8cc7\u6599\u7d93\u904e\u6301\u7e8c\u6642\u9593\u7be9\u9078\u5668(\u6e2c\u8a66\u8005)\u5224\u65b7\u8cc7\u6599\u4f7f\u5426\u7b26\u5408\u670d\u52d9\u8acb\u6c42\u7684\u6301\u7e8c\u6642\u9593\uff0c\u4e26\u9078\u64c7\u6027\u50b3\u7d66\u4e0b\u4e00\u500b\u7ba1\u9053\uff0c\n\u5982\u679c\u7b26\u5408\u6301\u7e8c\u6642\u9593\uff0c\u5247\u9078\u64c7\u6027\u50b3\u7d66\u6301\u7e8c\u6642\u9593\u8a08\u7b97\u7be9\u9078\u5668(\u8f49\u63db\u8005)\uff0c\u5426\u5247\u50b3\u7d66\u4e0a\u7dda\u6642\u9593\u7be9\u9078\u5668(\u6e2c\u8a66\u8005)\uff0c\u5982\u679c\u7b26\u5408\u4e0a\u7dda\u689d\u4ef6\uff0c\u5247\u50b3\u7d66\u4e0a\u7dda\u6642\u9593\u8a08\u7b97\u5668(\u8f49\u63db\u8005)\uff0c\u53cd\u4e4b\u7d50\u675f\uff0c\n\u6700\u5f8c\u518d\u7d66\u8cc7\u6599\u8f38\u51fa(\u6d88\u8cbb\u8005)\u3002\n",(0,n.kt)("img",{alt:"fig_11.2",src:r(23743).Z,width:"1368",height:"864"})),(0,n.kt)("h2",{id:"\u67b6\u69cb\u7279\u6027\u7684\u7b49\u7d1a"},"\u67b6\u69cb\u7279\u6027\u7684\u7b49\u7d1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"fig_11.3",src:r(31786).Z,width:"1346",height:"1210"})),(0,n.kt)("h2",{id:"recap"},"Recap"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u7ba1\u9053\u67b6\u69cb\u6709\u53ef\u80fd\u662f\u96d9\u5411\u7684\u55ce\uff1f"),(0,n.kt)("li",{parentName:"ol"},"\u5217\u8209\u56db\u4e2d\u7be9\u9078\u5668\u53ca\u76ee\u7684\uff1f"),(0,n.kt)("li",{parentName:"ol"},"\u7be9\u9078\u5668\u53ef\u4ee5\u900f\u904e\u591a\u500b\u7ba1\u9053\u9001\u51fa\u8cc7\u6599\u55ce\uff1f"),(0,n.kt)("li",{parentName:"ol"},"\u7ba1\u9053\u67b6\u69cb\u662f\u6280\u8853\u6216\u9818\u57df\u5206\u5272\uff1f"),(0,n.kt)("li",{parentName:"ol"},"\u7ba1\u9053\u67b6\u69cb\u4ee5\u4f55\u7a2e\u65b9\u5f0f\u652f\u63f4\u6a21\u7d44\u5316\uff1f"),(0,n.kt)("li",{parentName:"ol"},"\u7d66\u51fa\u7ba1\u9053\u67b6\u69cb\u7684\u5169\u500b\u4f8b\u5b50\uff1f")))}f.isMDXComponent=!0},85922:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/fig_11.1-633b0b83ec318ebf60368c92cf2eaf8b.png"},23743:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/fig_11.2-07c9394276aa8e0b8681bedfc7964f16.png"},31786:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/fig_11.3-c8c019b7ff262a3034dd1787ebf361a4.png"}}]);