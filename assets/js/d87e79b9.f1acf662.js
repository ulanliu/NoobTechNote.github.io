"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[6035],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(b,i(i({ref:t},p),{},{components:n})):a.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19884:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"Ch11: DIP - \u4f9d\u8cf4\u53cd\u8f49\u539f\u5247",sidebar_label:"Ch11: DIP - \u4f9d\u8cf4\u53cd\u8f49\u539f\u5247",sidebar_position:11},i=void 0,l={unversionedId:"sg/clean-architecture/ch11",id:"sg/clean-architecture/ch11",title:"Ch11: DIP - \u4f9d\u8cf4\u53cd\u8f49\u539f\u5247",description:"Dependency inversion principle",source:"@site/docs/sg/clean-architecture/ch11.md",sourceDirName:"sg/clean-architecture",slug:"/sg/clean-architecture/ch11",permalink:"/docs/sg/clean-architecture/ch11",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/clean-architecture/ch11.md",tags:[],version:"current",lastUpdatedBy:"Mech",lastUpdatedAt:1684076970,formattedLastUpdatedAt:"May 14, 2023",sidebarPosition:11,frontMatter:{title:"Ch11: DIP - \u4f9d\u8cf4\u53cd\u8f49\u539f\u5247",sidebar_label:"Ch11: DIP - \u4f9d\u8cf4\u53cd\u8f49\u539f\u5247",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Ch10: ISP - \u4ecb\u9762\u9694\u96e2\u539f\u5247",permalink:"/docs/sg/clean-architecture/ch10"},next:{title:"Ch12: \u5143\u4ef6",permalink:"/docs/sg/clean-architecture/ch12"}},c={},s=[{value:"Dependency inversion principle",id:"dependency-inversion-principle",level:2},{value:"DIS \u6700\u4e3b\u8981\u7684\u76ee\u7684\u5728\u65bc\u89e3\u8026 (Decoupling)\uff0c\u5176\u6982\u5ff5\u5982\u4e0b\u3002",id:"dis-\u6700\u4e3b\u8981\u7684\u76ee\u7684\u5728\u65bc\u89e3\u8026-decoupling\u5176\u6982\u5ff5\u5982\u4e0b",level:3},{value:"\u4ec0\u9ebc\u662f\u9ad8\u5c64\u6b21\u8207\u4f4e\u5c64\u6b21\u7684\u985e\u5225\u5462\uff1f",id:"\u4ec0\u9ebc\u662f\u9ad8\u5c64\u6b21\u8207\u4f4e\u5c64\u6b21\u7684\u985e\u5225\u5462",level:3},{value:"\u4f9d\u8cf4\u5012\u8f49\u539f\u5247\u5efa\u8b70\u6539\u8b8a\u9019\u7a2e\u4f9d\u8cf4\u65b9\u5f0f\u3002",id:"\u4f9d\u8cf4\u5012\u8f49\u539f\u5247\u5efa\u8b70\u6539\u8b8a\u9019\u7a2e\u4f9d\u8cf4\u65b9\u5f0f",level:3},{value:"Example",id:"example",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"dependency-inversion-principle"},"Dependency inversion principle"),(0,r.kt)("h3",{id:"dis-\u6700\u4e3b\u8981\u7684\u76ee\u7684\u5728\u65bc\u89e3\u8026-decoupling\u5176\u6982\u5ff5\u5982\u4e0b"},"DIS \u6700\u4e3b\u8981\u7684\u76ee\u7684\u5728\u65bc\u89e3\u8026 (Decoupling)\uff0c\u5176\u6982\u5ff5\u5982\u4e0b\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u9ad8\u5c64\u6b21\u7684\u985e\u5225\u4e0d\u61c9\u8a72\u4f9d\u8cf4\u65bc\u4f4e\u5c64\u6b21\u7684\u985e\u5225\uff0c\u5169\u8005\u90fd\u61c9\u8a72\u4f9d\u8cf4\u65bc\u62bd\u8c61\u7684\u4ecb\u9762\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u62bd\u8c61\u4ecb\u9762\u4e0d\u61c9\u8a72\u4f9d\u8cf4\u65bc\u5177\u9ad4\u7684\u5be6\u4f5c\uff0c\u5177\u9ad4\u7684\u5be6\u4f5c\u61c9\u8a72\u4f9d\u8cf4\u65bc\u62bd\u8c61\u4ecb\u9762\u3002")),(0,r.kt)("h3",{id:"\u4ec0\u9ebc\u662f\u9ad8\u5c64\u6b21\u8207\u4f4e\u5c64\u6b21\u7684\u985e\u5225\u5462"},"\u4ec0\u9ebc\u662f\u9ad8\u5c64\u6b21\u8207\u4f4e\u5c64\u6b21\u7684\u985e\u5225\u5462\uff1f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f4e\u5c64\u6b21\u7684\u985e\u5225\uff0c\u7528\u4f86\u5be6\u4f5c\u57fa\u790e\u64cd\u4f5c\uff0c\u4f8b\u5982\u78c1\u789f\u64cd\u4f5c\uff0c\u7db2\u8def\u6578\u64da\u50b3\u8f38\u548c\u8cc7\u6599\u5eab\u9023\u7dda\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u9ad8\u5c64\u6b21\u7684\u985e\u5225\uff0c\u5305\u542b\u8907\u96dc\u7684\u696d\u52d9\u908f\u8f2f\uff0c\u64cd\u4f5c\u4f4e\u5c64\u6b21\u7684\u985e\u5225\u4f86\u57f7\u884c\u7279\u5b9a\u64cd\u4f5c\u3002")),(0,r.kt)("p",null,"\u5e38\u898b\u958b\u767c\u6d41\u7a0b\uff1a\u4f4e\u5c64\u6b21\u505a\u5b8c\u80fd\u52d5\uff0c\u518d\u62c9\u51fa\u9ad8\u5c64\u6b21\uff0c\u9019\u6a23\u5bb9\u6613\u8b93\u7528\u4f86\u5be6\u73fe\u696d\u52d9\u908f\u8f2f\u7684\u9ad8\u5c64\u6b21\u985e\u5225\u4f9d\u8cf4\u65bc\u4f4e\u5c64\u6b21\u7684\u985e\u5225\u3002"),(0,r.kt)("h3",{id:"\u4f9d\u8cf4\u5012\u8f49\u539f\u5247\u5efa\u8b70\u6539\u8b8a\u9019\u7a2e\u4f9d\u8cf4\u65b9\u5f0f"},"\u4f9d\u8cf4\u5012\u8f49\u539f\u5247\u5efa\u8b70\u6539\u8b8a\u9019\u7a2e\u4f9d\u8cf4\u65b9\u5f0f\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6700\u597d\u4f7f\u7528\u696d\u52d9\u8853\u8a9e\u4f86\u547d\u540d\u9ad8\u5c64\u6b21\u985e\u5225\u7684\u65b9\u6cd5\uff0c\u5982 BudgetReport\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u57fa\u65bc\u62bd\u8c61\u4ecb\u9762\u5efa\u7acb\u9ad8\u5c64\u6b21\u985e\u5225\uff0c\u800c\u4e0d\u662f\u57fa\u65bc\u4f4e\u5c64\u6b21\u7684\u5177\u9ad4\u985e\u5225\uff0c\u9019\u6703\u6bd4\u539f\u59cb\u7684\u4f9d\u8cf4\u95dc\u4fc2\u9748\u6d3b\u5f88\u591a\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4e00\u65e6\u4f4e\u5c64\u6b21\u7684\u985e\u5225\u5be6\u73fe\u9019\u4e9b\u4ecb\u9762\uff0c\u4ed6\u5011\u5c07\u4f9d\u8cf4\u65bc\u696d\u52d9\u908f\u8f2f\u5c64\uff0c\u5f9e\u800c\u5012\u8f49\u4e86\u539f\u59cb\u7684\u4f9d\u8cf4\u95dc\u4fc2\u3002")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bad way:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class MySqlDatabase {\n  insert() {\n    // ...\n  }\n\n  update() {\n    // ...\n  }\n\n  delete() {\n    // ...\n  }\n}\n\nclass BudgetReport {\n  private mySqlDatabase: MySqlDatabase;\n\n  constructor(mySqlDatabase: MySqlDatabase) {\n    this.mySqlDatabase = mySqlDatabase;\n  }\n\n  open(date: string) {\n    //...\n  }\n\n  save() {}\n}\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u9ad8\u5c64\u6b21\u7684\u985e\u5225\u4e0d\u61c9\u8a72\u53bb\u95dc\u6ce8\u8cc7\u6599\u5b58\u5132\u7684\u7d30\u7bc0\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Good way:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface Database {\n  insert(): void;\n\n  update(): void;\n\n  delete(): void;\n}\n\nclass MySql implements Database {\n  insert(): void {\n    // ...\n  }\n\n  update(): void {\n    // ...\n  }\n\n  delete(): void {\n    // ...\n  }\n}\n\nclass MongoDB implements Database {\n  insert(): void {\n    // ...\n  }\n\n  update(): void {\n    // ...\n  }\n\n  delete(): void {\n    // ...\n  }\n}\n\nclass BudgetReport {\n  private database: Database;\n\n  constructor(database: Database) {\n    this.database = database;\n  }\n\n  open(date: string) {\n    //...\n  }\n\n  save() {}\n}\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Depends on abstractions, not on concretions.\n\u4f9d\u8cf4\u65bc\u62bd\u8c61\uff0c\u800c\u975e\u5177\u9ad4\u3002")))}d.isMDXComponent=!0}}]);