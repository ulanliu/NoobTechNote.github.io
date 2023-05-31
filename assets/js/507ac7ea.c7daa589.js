"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[9605],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var l=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=l.createContext({}),u=function(e){var t=l.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return l.createElement(o.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=u(a),s=r,d=c["".concat(o,".").concat(s)]||c[s]||k[s]||n;return a?l.createElement(d,i(i({ref:t},m),{},{components:a})):l.createElement(d,i({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var u=2;u<n;u++)i[u]=a[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}s.displayName="MDXCreateElement"},33032:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>n,metadata:()=>p,toc:()=>u});var l=a(87462),r=(a(67294),a(3905));const n={title:"Ch1: \u4ecb\u7d39",tsidebar_label:"Ch1: \u4ecb\u7d39",sidebar_position:1},i=void 0,p={unversionedId:"sg/fundamentals-of-software-architecture/ch1",id:"sg/fundamentals-of-software-architecture/ch1",title:"Ch1: \u4ecb\u7d39",description:"\u300c\u67b6\u69cb\u300d\u7684\u5b9a\u7fa9",source:"@site/docs/sg/fundamentals-of-software-architecture/ch1.md",sourceDirName:"sg/fundamentals-of-software-architecture",slug:"/sg/fundamentals-of-software-architecture/ch1",permalink:"/docs/sg/fundamentals-of-software-architecture/ch1",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/fundamentals-of-software-architecture/ch1.md",tags:[],version:"current",lastUpdatedBy:"kayeepf",lastUpdatedAt:1685519061,formattedLastUpdatedAt:"May 31, 2023",sidebarPosition:1,frontMatter:{title:"Ch1: \u4ecb\u7d39",tsidebar_label:"Ch1: \u4ecb\u7d39",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u8edf\u9ad4\u67b6\u69cb\u539f\u7406 - \u5de5\u7a0b\u65b9\u6cd5",permalink:"/docs/sg/fundamentals-of-software-architecture/"},next:{title:"Ch2: \u67b6\u69cb\u601d\u7dad",permalink:"/docs/sg/fundamentals-of-software-architecture/ch2"}},o={},u=[{value:"\u300c\u67b6\u69cb\u300d\u7684\u5b9a\u7fa9",id:"\u67b6\u69cb\u7684\u5b9a\u7fa9",level:2},{value:"\u8edf\u9ad4\u67b6\u69cb\u7684\u56db\u500b\u9762\u5411",id:"\u8edf\u9ad4\u67b6\u69cb\u7684\u56db\u500b\u9762\u5411",level:2},{value:"1. \u7cfb\u7d71\u7d50\u69cb Structure",id:"1-\u7cfb\u7d71\u7d50\u69cb-structure",level:3},{value:"2. \u67b6\u69cb\u7279\u6027 Arch Characteristics",id:"2-\u67b6\u69cb\u7279\u6027-arch-characteristics",level:3},{value:"3. \u67b6\u69cb\u6c7a\u7b56 Arch Decision",id:"3-\u67b6\u69cb\u6c7a\u7b56-arch-decision",level:3},{value:"4. \u8a2d\u8a08\u539f\u7406 Design Principles",id:"4-\u8a2d\u8a08\u539f\u7406-design-principles",level:3},{value:"\u5c0d\u8edf\u9ad4\u67b6\u69cb\u5e2b\u7684\u516b\u500b\u671f\u671b",id:"\u5c0d\u8edf\u9ad4\u67b6\u69cb\u5e2b\u7684\u516b\u500b\u671f\u671b",level:2},{value:"\u67b6\u69cb\u8207...\u7684\u4ea4\u96c6",id:"\u67b6\u69cb\u8207\u7684\u4ea4\u96c6",level:2},{value:"Pets.com\u7684\u4f8b\u5b50",id:"petscom\u7684\u4f8b\u5b50",level:3},{value:"\u5de5\u7a0b\u5be6\u52d9",id:"\u5de5\u7a0b\u5be6\u52d9",level:3},{value:"\u7a0b\u5e8f\u8207\u5be6\u52d9",id:"\u7a0b\u5e8f\u8207\u5be6\u52d9",level:3},{value:"\u67b6\u69cb\u8207\u5de5\u7a0b\u5be6\u52d9",id:"\u67b6\u69cb\u8207\u5de5\u7a0b\u5be6\u52d9",level:3},{value:"\u89e3\u6cd51\uff1a\u6b63\u8996\u67b6\u69cb\u672c\u8eab\u5c31\u662f\u8fed\u4ee3\u5f0f (\u672c\u66f8\u7684\u7cbe\u795e)",id:"\u89e3\u6cd51\u6b63\u8996\u67b6\u69cb\u672c\u8eab\u5c31\u662f\u8fed\u4ee3\u5f0f-\u672c\u66f8\u7684\u7cbe\u795e",level:4},{value:"\u89e3\u6cd52\uff1a\u627e\u51fa\u5de5\u7a0b\u5be6\u52d9\u8207\u7a0b\u5e8f\u7684\u4ea4\u96c6",id:"\u89e3\u6cd52\u627e\u51fa\u5de5\u7a0b\u5be6\u52d9\u8207\u7a0b\u5e8f\u7684\u4ea4\u96c6",level:4},{value:"\u7dad\u904b/DevOps",id:"\u7dad\u904bdevops",level:2},{value:"\u7a0b\u5e8f(Development Process)",id:"\u7a0b\u5e8fdevelopment-process",level:2},{value:"\u8cc7\u6599",id:"\u8cc7\u6599",level:2},{value:"\u67b6\u69cb\u7684\u6cd5\u5247",id:"\u67b6\u69cb\u7684\u6cd5\u5247",level:2},{value:"Recap",id:"recap",level:2}],m={toc:u},c="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u67b6\u69cb\u7684\u5b9a\u7fa9"},"\u300c\u67b6\u69cb\u300d\u7684\u5b9a\u7fa9"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Software architecture is about making fundamental structural choices that are costly to change once implemented\n\u8edf\u9ad4\u67b6\u69cb\u662f\u95dc\u65bc\u505a\u51fa\u57fa\u672c\u7d50\u69cb\u7684\u9078\u64c7\uff0c\u4e00\u65e6\u5be6\u65bd\uff0c\u9019\u4e9b\u9078\u64c7\u7684\u6539\u8b8a\u6210\u672c\u5f88\u9ad8")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f5c\u8005\u8a8d\u70ba",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Software_architecture"},"Wiki"),"\u9019\u6bb5\u6558\u8ff0\u662f\u904e\u6642\u7684\uff0c\u5fae\u670d\u52d9\u67b6\u69cb\u7684\u5176\u4e2d\u4e00\u500b\u76ee\u7684\uff0c\u5c31\u662f\u70ba\u4e86\u964d\u4f4e\u67b6\u69cb\u6539\u8b8a\u7684\u6210\u672c"),(0,r.kt)("li",{parentName:"ul"},"\u8a8d\u6e05\u8edf\u9ad4\u67b6\u69cb\u7684\u52d5\u614b\u672c\u8cea - \u5305\u62ec\u5b9a\u7fa9\u672c\u8eab\u90fd\u662f\u52d5\u614b\u7684")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u300c\u67b6\u69cb\u5c31\u662f\u8ddf\u91cd\u8981\u7684\u6771\u897f\u6709\u95dc\u7684\u4e8b\uff0c\u4e0d\u7ba1\u4ed6\u662f\u4ec0\u9ebc\u300d - ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Ralph_Johnson_(computer_scientist)"},"Ralph Johnson")," (",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Design_Patterns"},"Design Patterns"),"\u7684\u4f5c\u8005)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Recap: \u8edf\u9ad4\u67b6\u69cb\u5c6c\u65bc\u827e\u65af\u8c6a\u723e\u77e9\u9663\u7684\u54ea\u500b\u7dad\u5ea6\uff1f")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Eisenhower Matrix",src:a(1183).Z,width:"512",height:"512"})),(0,r.kt)("p",null,"Image from: ",(0,r.kt)("a",{parentName:"p",href:"https://nextlevelgents.com/eisenhower-matrix/"},"The Eisenhower Matrix")),(0,r.kt)("h2",{id:"\u8edf\u9ad4\u67b6\u69cb\u7684\u56db\u500b\u9762\u5411"},"\u8edf\u9ad4\u67b6\u69cb\u7684\u56db\u500b\u9762\u5411"),(0,r.kt)("p",null,"\u7576\u67b6\u69cb\u5e2b\u5728\u5206\u6790\u300c\u67b6\u69cb\u300d\u6642\uff0c\u5177\u9ad4\u800c\u8a00\u5728\u5206\u6790\u4ec0\u9ebc\uff1f"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Arch Rules",src:a(55553).Z,width:"613",height:"422"})),(0,r.kt)("h3",{id:"1-\u7cfb\u7d71\u7d50\u69cb-structure"},"1. \u7cfb\u7d71\u7d50\u69cb Structure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u67b6\u69cb\u6642\u4f7f\u7528\u7684\u300c\u98a8\u683c\u300d"),(0,r.kt)("li",{parentName:"ul"},"\u4f8b\u5982\uff1a\u5fae\u670d\u52d9\u3001\u5206\u5c64\u5f0f\u3001\u5fae\u6838\u5fc3")),(0,r.kt)("h3",{id:"2-\u67b6\u69cb\u7279\u6027-arch-characteristics"},"2. \u67b6\u69cb\u7279\u6027 Arch Characteristics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8207\u7cfb\u7d71\u529f\u80fd\u7121\u95dc\uff0c\u4f46\u6709\u9019\u4e9b\u7279\u6027\u624d\u80fd\u4f7f\u7cfb\u7d71\u6b63\u78ba\u904b\u4f5c"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u7528\u6027\u3001\u5b89\u5168\u6027\u3001\u5bb9\u932f\u6027...etc."),(0,r.kt)("li",{parentName:"ul"},"\u975e\u529f\u80fd\u6027\u9700\u6c42")),(0,r.kt)("h3",{id:"3-\u67b6\u69cb\u6c7a\u7b56-arch-decision"},"3. \u67b6\u69cb\u6c7a\u7b56 Arch Decision"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7cfb\u7d71\u5982\u4f55\u69cb\u5efa\u7684\u898f\u5247\uff0c\u4f8b\u5982\u53ea\u6709\u670d\u52d9\u5c64\u80fd\u5920\u5b58\u53d6DB"),(0,r.kt)("li",{parentName:"ul"},"\u662f\u4e00\u7a2e\u88ab\u8a2d\u8a08\u51fa\u4f86\u7684\u9650\u5236"),(0,r.kt)("li",{parentName:"ul"},"\u82e5\u9700\u8981\u7e5e\u904e\u9019\u4e9b\u9650\u5236\uff0c\u9700\u8981\u67b6\u69cb\u8a55\u8b70\u59d4\u54e1\u6703\u8a0e\u8ad6")),(0,r.kt)("h3",{id:"4-\u8a2d\u8a08\u539f\u7406-design-principles"},"4. \u8a2d\u8a08\u539f\u7406 Design Principles"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u958b\u767c\u7cfb\u7d71\u6642\u7684\u300c\u6307\u5c0e\u65b9\u91dd\u300d"),(0,r.kt)("li",{parentName:"ul"},"\u4f8b\u5982\uff0c\u958b\u767c\u5fae\u670d\u52d9\u6642\u5229\u7528\u975e\u540c\u6b65\u547c\u53eb(e.g. 202 response)\u63d0\u9ad8\u6548\u80fd")),(0,r.kt)("h2",{id:"\u5c0d\u8edf\u9ad4\u67b6\u69cb\u5e2b\u7684\u516b\u500b\u671f\u671b"},"\u5c0d\u8edf\u9ad4\u67b6\u69cb\u5e2b\u7684\u516b\u500b\u671f\u671b"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u505a\u51fa\u6c7a\u5b9a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6307\u5c0e\uff0c\u800c\u975e\u6307\u5b9a\u6280\u8853",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5076\u723e\u53ef\u80fd\u9084\u662f\u5f97\u6c7a\u5b9a\u67d0\u4e9b\u7a0b\u5ea6\u7684\u6280\u8853"))),(0,r.kt)("li",{parentName:"ul"},"\u63a8\u9072\u6280\u8853\u7d30\u7bc0\u7684\u6c7a\u5b9a\u6642\u9593\u9ede (echo Clearn Arch)"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6301\u7e8c\u5206\u6790"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6301\u7e8c\u6aa2\u8996\u7cfb\u7d71\u73fe\u72c0\u3001\u73fe\u4eca\u7684\u6280\u8853\u74b0\u5883"),(0,r.kt)("li",{parentName:"ul"},"\u63a8\u85a6\u6539\u5584\u65b9\u6848"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8ddf\u4e0a\u8da8\u52e2"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8ddf\u4e0a\u696d\u754c\u7684\u8da8\u52e2"),(0,r.kt)("li",{parentName:"ul"},"\u597d\u5728\u4eba\u624d\u5e02\u5834\u4e0a\u627e\u5f97\u5230\u4eba\u624d"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u78ba\u4fdd\u6c7a\u7b56\u7684\u5be6\u884c"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u78ba\u4fdd\u67b6\u69cb\u6c7a\u7b56\u8207\u8a2d\u8a08\u539f\u7406\u5f97\u5230\u9075\u5b88"),(0,r.kt)("li",{parentName:"ul"},"\u4f8b\u5982\uff0c\u963b\u6b62\u6709\u4eba\u56e0\u70ba\u6548\u80fd\u56e0\u7d20\u5f9e\u5448\u73fe\u5c64\u76f4\u63a5\u5b58\u53d6\u8cc7\u6599\u5eab"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5de5\u4f5c\u7d93\u9a57\u7684\u591a\u6a23\u6027"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u67b6\u69cb\u5e2b\u7684\u7d93\u9a57\u8981\u5ee3\u7684\u610f\u601d"),(0,r.kt)("li",{parentName:"ul"},"\u6bd4\u8d77\u7cbe\u901a\u55ae\u4e00\u6280\u8853\uff0c\u5ee3\u5ea6\u66f4\u91cd\u8981"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u64c1\u6709\u696d\u52d9\u9818\u57df\u77e5\u8b58"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u95dc\u65bc\u696d\u52d9\u9818\u57df\u7684\u77e5\u8b58"),(0,r.kt)("li",{parentName:"ul"},"\u91d1\u878d\u7cfb\u7d71\u7684\u67b6\u69cb\u5e2b\uff0c\u81f3\u5c11\u9700\u8981\u4e86\u89e3\u91d1\u878d\u754c\u7684\u8853\u8a9e"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8655\u7406\u4eba\u969b\u95dc\u4fc2"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u300c\u958b\u767c\u4eba\u54e1\u8207\u67b6\u69cb\u5e2b\u559c\u6b61\u89e3\u6c7a\u6280\u8853\u554f\u984c\uff0c\u800c\u4e0d\u662f\u4eba\u7684\u554f\u984c\u300dGerald Weinberg",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.amazon.com/Psychology-Computer-Programming-Silver-Anniversary-ebook/dp/B004R9QACC"},"Psychology of Computer Programming and Introduction to General Systems Thinking."),"\u7684\u4f5c\u8005"))),(0,r.kt)("li",{parentName:"ul"},"\u300c\u4e0d\u7ba1\u5225\u4eba\u544a\u8a34\u4f60\u4ec0\u9ebc\uff0c\u7e3d\u662f\u8ddf\u4eba\u6709\u95dc\u7684\u554f\u984c\u300d")))),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u99d5\u99ad\u653f\u6cbb"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u300c\u67b6\u69cb\u5e2b\u7684\u6bcf\u500b\u6c7a\u5b9a\u5e7e\u4e4e\u90fd\u6703\u53d7\u5230\u6311\u6230\u300d",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u505a\u51fa\u91cd\u8981\u3001\u4e14\u5ee3\u6cdb\u7684\u6c7a\u7b56\uff0c\u4f46"))),(0,r.kt)("li",{parentName:"ul"},"\u4e86\u89e3\u4f01\u696d\u7684\u653f\u6cbb\u6c23\u6c1b\uff0c\u4e26\u4e88\u4ee5\u99d5\u99ad")))),(0,r.kt)("h2",{id:"\u67b6\u69cb\u8207\u7684\u4ea4\u96c6"},"\u67b6\u69cb\u8207...\u7684\u4ea4\u96c6"),(0,r.kt)("h3",{id:"petscom\u7684\u4f8b\u5b50"},"Pets.com\u7684\u4f8b\u5b50"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u65b0\u5275\u516c\u53f8"),(0,r.kt)("li",{parentName:"ul"},"\u82b1\u5728\u5409\u7965\u7269\u8207\u884c\u92b7\u7684\u9810\u7b97\u9060\u9ad8\u65bc\u57fa\u790e\u8a2d\u65bd"),(0,r.kt)("li",{parentName:"ul"},"\u5230\u4e86\u8056\u8a95\u7bc0\u65fa\u5b63\uff0c\u7db2\u7ad9\u6490\u4e0d\u4e86\u6d41\u91cf\u3001\u6389\u8a02\u55ae\u3001\u4ea4\u8ca8\u5ef6\u5b95"),(0,r.kt)("li",{parentName:"ul"},"\u6700\u5f8c\u5012\u9589\uff0c\u5c07\u5409\u7965\u7269\u8ce3\u7d66\u7af6\u722d\u5c0d\u624b")),(0,r.kt)("h3",{id:"\u5de5\u7a0b\u5be6\u52d9"},"\u5de5\u7a0b\u5be6\u52d9"),(0,r.kt)("h3",{id:"\u7a0b\u5e8f\u8207\u5be6\u52d9"},"\u7a0b\u5e8f\u8207\u5be6\u52d9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7a0b\u5e8f Development Process",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4eba\u5011\u5982\u4f55\u7d44\u7e54\u8207\u4e92\u52d5\u7684\u6a5f\u5236"),(0,r.kt)("li",{parentName:"ul"},"\u4f8b\u5982\uff1aScrum"))),(0,r.kt)("li",{parentName:"ul"},"\u5de5\u7a0b\u5be6\u52d9 Engineering Practices",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u660e\u767d\u3001\u53ef\u91cd\u8907\uff0c\u4e14\u8207\u7a0b\u5e8f\u7121\u95dc\u7684\u5be6\u52d9"),(0,r.kt)("li",{parentName:"ul"},"\u4f8b\u5982\uff1aCICD")))),(0,r.kt)("h3",{id:"\u67b6\u69cb\u8207\u5de5\u7a0b\u5be6\u52d9"},"\u67b6\u69cb\u8207\u5de5\u7a0b\u5be6\u52d9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8edf\u9ad4\u958b\u767c\u5be6\u52d9\u4e26\u4e0d\u6210\u719f\uff0c\u7f3a\u4e4f\u6210\u719f\u7684\u5de5\u7a0b\u5b78\u9580\u7684\u7279\u8272"),(0,r.kt)("li",{parentName:"ul"},"\u672a\u77e5\u7684\u672a\u77e5\u662f\u8edf\u9ad4\u7cfb\u7d71\u7684\u524b\u661f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6c92\u4eba\u77e5\u9053\u6703\u767c\u751f\uff0c\u537b\u5728\u7121\u9810\u671f\u4e2d\u767c\u751f\u7684\u4e8b\u7269"),(0,r.kt)("li",{parentName:"ul"},"\u67b6\u69cb\u5e2b\u7121\u6cd5\u5c0d\u672a\u77e5\u7684\u672a\u77e5\u9032\u884c\u8a2d\u8a08")))),(0,r.kt)("h4",{id:"\u89e3\u6cd51\u6b63\u8996\u67b6\u69cb\u672c\u8eab\u5c31\u662f\u8fed\u4ee3\u5f0f-\u672c\u66f8\u7684\u7cbe\u795e"},"\u89e3\u6cd51\uff1a\u6b63\u8996\u67b6\u69cb\u672c\u8eab\u5c31\u662f\u8fed\u4ee3\u5f0f (\u672c\u66f8\u7684\u7cbe\u795e)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u56e0\u70ba\u6709\u672a\u77e5\u7684\u672a\u77e5\uff0c\u6240\u6709\u67b6\u69cb\u90fd\u6703\u662f\u8fed\u4ee3\u5f0f\u7684"),(0,r.kt)("li",{parentName:"ul"},"\u654f\u6377\u958b\u767c\u5c31\u662f\u8a8d\u77e5\u9019\u9805\u4e8b\u5be6\u6240\u505a\u7684\u6539\u8b8a - \u5f9e\u7ba1\u7406\u6d41\u7a0b(\u7a0b\u5e8f)\u53bb\u9762\u5c0d\u5de5\u7a0b\u5be6\u52d9")),(0,r.kt)("h4",{id:"\u89e3\u6cd52\u627e\u51fa\u5de5\u7a0b\u5be6\u52d9\u8207\u7a0b\u5e8f\u7684\u4ea4\u96c6"},"\u89e3\u6cd52\uff1a\u627e\u51fa\u5de5\u7a0b\u5be6\u52d9\u8207\u7a0b\u5e8f\u7684\u4ea4\u96c6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u300c",(0,r.kt)("a",{parentName:"li",href:"https://www.tenlong.com.tw/products/9789865021733"},"\u5efa\u7acb\u6f14\u9032\u5f0f\u7cfb\u7d71\u67b6\u69cb"),"\u300d\u7684\u7cbe\u795e",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4ee5\u9069\u61c9\u5ea6\u51fd\u6578 (Fitness Function)\u70ba\u57fa\u790e\uff0c\u5728\u8b8a\u52d5\u96a8\u8457\u6642\u9593\u767c\u751f\u6642\uff0c\u7528\u4ee5\u4fdd\u969c\u3001\u7ba1\u7406\u67b6\u69cb\u7279\u6027"))),(0,r.kt)("li",{parentName:"ul"},"\u672c\u66f8\u6703\u6709\u5f88\u591a\u5730\u65b9\u547c\u61c9\u9019\u672c\u66f8\u7684\u5167\u5bb9")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Fitness Function\u89e3\u6c7a\u7684\u554f\u984c\u9084\u662f\u6709\u5c40\u9650\u6027\uff0c\u4f60\u6240\u9762\u5c0d\u7684\u554f\u984c\u672c\u8eab\u5fc5\u9808\u662f\u53ef\u8caa\u5a6a\u7684(Greedable)\u624d\u80fd\u9019\u9ebc\u89e3\u3002 \u4f8b\u5982\uff0c\u5c0b\u627e\u6700\u77ed\u8def\u5f91"),(0,r.kt)("p",{parentName:"admonition"},"\u67b6\u69cb\u89d2\u5ea6\u7684\u53e6\u4e00\u7a2e\u8aaa\u6cd5\uff1a\u4f60\u5728\u7576\u4e0b\u505a\u7684\u6700\u4f73\u89e3\uff0c\u5c0d\u6700\u7d42\u8981\u53bb\u7684\u65b9\u5411\u662f\u6709\u5e6b\u52a9\u7684\u3002\u4f60\u624d\u80fd\u7528\u9019\u7a2e\u65b9\u6cd5\u505a")),(0,r.kt)("h2",{id:"\u7dad\u904bdevops"},"\u7dad\u904b/DevOps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u50b3\u7d71\u8a8d\u70ba\u7dad\u904b\u8207\u67b6\u69cb\u662f\u7121\u95dc\u7684\uff0c\u53ef\u4ee5\u628a\u7dad\u904b\u5916\u5305\u51fa\u53bb\u7701\u9322\u3002\u9019\u4f7f\u5f971900~2000\u5e74\u4ee3\u7684\u7cfb\u7d71\u67b6\u69cb\u5e2b\u90fd\u7121\u6cd5\u638c\u63a7\u7dad\u904b\u554f\u984c\u3002\u56e0\u800c\u5728\u8a72\u9650\u5236\u4e0b\u9032\u884c\u9632\u5b88\u6027\u958b\u767c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"SOA(Service Orented Arch)\u3001ESB(Enterprise Service Bus)"),(0,r.kt)("li",{parentName:"ul"},"\u9019\u7a2e\u60f3\u6cd5\u7684\u80cc\u5f8c\uff0c\u5e36\u4f86\u7684\u662f\u67b6\u69cb\u4e2d\u5145\u6eff\u6975\u5176\u8907\u96dc\u7684\u8cc7\u8a0a\u4ea4\u63db")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u9632\u5b88\u6027\u958b\u767c\u7684\u60f3\u6cd5\uff0c\u8ddf\u300c",(0,r.kt)("a",{parentName:"p",href:"https://www.books.com.tw/products/CN11676411"},"\u6070\u5982\u5176\u5206\u7684\u8edf\u4ef6\u67b6\u69cb"),"\u300d\u9019\u672c\u66f8\u7684\u4e3b\u8981\u7cbe\u795e\u985e\u4f3c")),(0,r.kt)("h2",{id:"\u7a0b\u5e8fdevelopment-process"},"\u7a0b\u5e8f(Development Process)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5927\u90e8\u5206\u7684\u8edf\u9ad4\u67b6\u69cb\u66f8\u7c4d\u90fd\u5c0d\u53ef\u9810\u6e2c\u7684\u4e8b\u7269\u505a\u4e86\u4e00\u4e9b\u4f3c\u662f\u800c\u975e\u7684\u5047\u8a2d (\u5f88\u6562\u8b1b)"),(0,r.kt)("li",{parentName:"ul"},"\u6240\u6709\u67b6\u69cb\u6700\u7d42\u90fd\u6703\u8b8a\u6210\u8fed\u4ee3\u5f0f\u7684 - \u67b6\u69cb\u672c\u8eab\u4e5f\u6703\u6539\u8b8a\uff0c\u53ea\u662f\u6642\u9593\u65e9\u665a\u800c\u5df2"),(0,r.kt)("li",{parentName:"ul"},"\u654f\u6377\u65b9\u6cd5\u8ad6\u7684\u4e00\u4e9b\u6280\u5de7\uff0c\u5728\u73fe\u4ee3\u4e5f\u6703\u6709\u5e6b\u52a9",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://trunkbaseddevelopment.com/"},"Trunk Base Development"),"\u8207Feature Toggle"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://martinfowler.com/bliki/StranglerFigApplication.html"},"Strangler Pattern"))))),(0,r.kt)("h2",{id:"\u8cc7\u6599"},"\u8cc7\u6599"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7a0b\u5f0f\u672c\u8eab\u8207\u8cc7\u6599\u6709\u5171\u751f\u95dc\u4fc2 - \u6c92\u6709\u5c0d\u65b9\u5c31\u6c92\u6709\u7528\u4e86"),(0,r.kt)("li",{parentName:"ul"},"\u8cc7\u6599\u67b6\u69cb\u5fc5\u9808\u7d0d\u5165\u8003\u91cf\uff0c\u900f\u904e\u5206\u6790\u95dc\u4fc2\u8207\u5fa9\u7528\u5982\u4f55\u5f71\u97ff\u61c9\u7528\u7a0b\u5f0f\u7684\u7d44\u5408"),(0,r.kt)("li",{parentName:"ul"},"Ch3\u6703\u8a73\u8ff0")),(0,r.kt)("h2",{id:"\u67b6\u69cb\u7684\u6cd5\u5247"},"\u67b6\u69cb\u7684\u6cd5\u5247"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e00\u5207\u90fd\u662f\u53d6\u6368",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.communicationtheory.org/the-johari-window-model/"},"Johari Window")),(0,r.kt)("li",{parentName:"ul"},"\u300c\u5982\u679c\u67b6\u69cb\u5e2b\u627e\u5230\u4e86\u4e0d\u9700\u8981\u53d6\u6368\u7684\u4e8b\u7269\uff0c\u66f4\u53ef\u80fd\u7684\u72c0\u6cc1\u662f\u4ed6\u9084\u6c92\u8fa8\u8b58\u51fa\u53d6\u6368\u5728\u54ea\u88e1\u300d"))),(0,r.kt)("li",{parentName:"ul"},"Why\u6bd4How\u91cd\u8981",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u672c\u66f8\u5f88\u5f37\u8abf\u6c7a\u7b56\u6642\u7684\u300c\u70ba\u4ec0\u9ebc\u300d")))),(0,r.kt)("h2",{id:"recap"},"Recap"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u67b6\u69cb\u7684\u56db\u500b\u7dad\u5ea6\u70ba\u4f55\uff1f"),(0,r.kt)("li",{parentName:"ol"},"\u67b6\u69cb\u6c7a\u7b56\u8207\u8a2d\u8a08\u539f\u7406\u7684\u5dee\u7570\u70ba\u4f55\uff1f"),(0,r.kt)("li",{parentName:"ol"},"\u5217\u51fa\u8edf\u9ad4\u67b6\u69cb\u5e2b\u76848\u500b\u6838\u5fc3\u671f\u671b"),(0,r.kt)("li",{parentName:"ol"},"\u8edf\u9ad4\u67b6\u69cb\u7684\u7b2c\u4e00\u6cd5\u5247\u662f\u4ec0\u9ebc\uff1f")))}k.isMDXComponent=!0},55553:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/arch-rules-c37a967fe93f64a87aeafc4797fbc152.png"},1183:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/eisenhower-matrix-8397a67e22900686d0713f5135948ff6.png"}}]);