"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[6035],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,v=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return t?a.createElement(v,o(o({ref:n},p),{},{components:t})):a.createElement(v,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9884:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],l={title:"Ch11: DIP - \u4f9d\u8cf4\u53cd\u8f49\u539f\u5247",sidebar_label:"Ch11: DIP - \u4f9d\u8cf4\u53cd\u8f49\u539f\u5247",sidebar_position:11},c=void 0,s={unversionedId:"sg/clean-architecture/ch11",id:"sg/clean-architecture/ch11",title:"Ch11: DIP - \u4f9d\u8cf4\u53cd\u8f49\u539f\u5247",description:"Dependency inversion principle",source:"@site/docs/sg/clean-architecture/ch11.md",sourceDirName:"sg/clean-architecture",slug:"/sg/clean-architecture/ch11",permalink:"/docs/sg/clean-architecture/ch11",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/clean-architecture/ch11.md",tags:[],version:"current",lastUpdatedBy:"shueny_wang",lastUpdatedAt:1668596845,formattedLastUpdatedAt:"11/16/2022",sidebarPosition:11,frontMatter:{title:"Ch11: DIP - \u4f9d\u8cf4\u53cd\u8f49\u539f\u5247",sidebar_label:"Ch11: DIP - \u4f9d\u8cf4\u53cd\u8f49\u539f\u5247",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Ch10: ISP - \u4ecb\u9762\u9694\u96e2\u539f\u5247",permalink:"/docs/sg/clean-architecture/ch10"},next:{title:"Ch12: \u5143\u4ef6",permalink:"/docs/sg/clean-architecture/ch12"}},p={},d=[{value:"Dependency inversion principle",id:"dependency-inversion-principle",level:2},{value:"DIS \u6700\u4e3b\u8981\u7684\u76ee\u7684\u5728\u65bc\u89e3\u8026 (Decoupling)\uff0c\u5176\u6982\u5ff5\u5982\u4e0b\u3002",id:"dis-\u6700\u4e3b\u8981\u7684\u76ee\u7684\u5728\u65bc\u89e3\u8026-decoupling\u5176\u6982\u5ff5\u5982\u4e0b",level:3},{value:"\u4ec0\u9ebc\u662f\u9ad8\u5c64\u6b21\u8207\u4f4e\u5c64\u6b21\u7684\u985e\u5225\u5462\uff1f",id:"\u4ec0\u9ebc\u662f\u9ad8\u5c64\u6b21\u8207\u4f4e\u5c64\u6b21\u7684\u985e\u5225\u5462",level:3},{value:"\u4f9d\u8cf4\u5012\u8f49\u539f\u5247\u5efa\u8b70\u6539\u8b8a\u9019\u7a2e\u4f9d\u8cf4\u65b9\u5f0f\u3002",id:"\u4f9d\u8cf4\u5012\u8f49\u539f\u5247\u5efa\u8b70\u6539\u8b8a\u9019\u7a2e\u4f9d\u8cf4\u65b9\u5f0f",level:3},{value:"Example",id:"example",level:2}],u={toc:d};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"dependency-inversion-principle"},"Dependency inversion principle"),(0,i.kt)("h3",{id:"dis-\u6700\u4e3b\u8981\u7684\u76ee\u7684\u5728\u65bc\u89e3\u8026-decoupling\u5176\u6982\u5ff5\u5982\u4e0b"},"DIS \u6700\u4e3b\u8981\u7684\u76ee\u7684\u5728\u65bc\u89e3\u8026 (Decoupling)\uff0c\u5176\u6982\u5ff5\u5982\u4e0b\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u9ad8\u5c64\u6b21\u7684\u985e\u5225\u4e0d\u61c9\u8a72\u4f9d\u8cf4\u65bc\u4f4e\u5c64\u6b21\u7684\u985e\u5225\uff0c\u5169\u8005\u90fd\u61c9\u8a72\u4f9d\u8cf4\u65bc\u62bd\u8c61\u7684\u4ecb\u9762\u3002")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u62bd\u8c61\u4ecb\u9762\u4e0d\u61c9\u8a72\u4f9d\u8cf4\u65bc\u5177\u9ad4\u7684\u5be6\u4f5c\uff0c\u5177\u9ad4\u7684\u5be6\u4f5c\u61c9\u8a72\u4f9d\u8cf4\u65bc\u62bd\u8c61\u4ecb\u9762\u3002")),(0,i.kt)("h3",{id:"\u4ec0\u9ebc\u662f\u9ad8\u5c64\u6b21\u8207\u4f4e\u5c64\u6b21\u7684\u985e\u5225\u5462"},"\u4ec0\u9ebc\u662f\u9ad8\u5c64\u6b21\u8207\u4f4e\u5c64\u6b21\u7684\u985e\u5225\u5462\uff1f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f4e\u5c64\u6b21\u7684\u985e\u5225\uff0c\u7528\u4f86\u5be6\u4f5c\u57fa\u790e\u64cd\u4f5c\uff0c\u4f8b\u5982\u78c1\u789f\u64cd\u4f5c\uff0c\u7db2\u8def\u6578\u64da\u50b3\u8f38\u548c\u8cc7\u6599\u5eab\u9023\u7dda\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u9ad8\u5c64\u6b21\u7684\u985e\u5225\uff0c\u5305\u542b\u8907\u96dc\u7684\u696d\u52d9\u908f\u8f2f\uff0c\u64cd\u4f5c\u4f4e\u5c64\u6b21\u7684\u985e\u5225\u4f86\u57f7\u884c\u7279\u5b9a\u64cd\u4f5c\u3002")),(0,i.kt)("p",null,"\u5e38\u898b\u958b\u767c\u6d41\u7a0b\uff1a\u4f4e\u5c64\u6b21\u505a\u5b8c\u80fd\u52d5\uff0c\u518d\u62c9\u51fa\u9ad8\u5c64\u6b21\uff0c\u9019\u6a23\u5bb9\u6613\u8b93\u7528\u4f86\u5be6\u73fe\u696d\u52d9\u908f\u8f2f\u7684\u9ad8\u5c64\u6b21\u985e\u5225\u4f9d\u8cf4\u65bc\u4f4e\u5c64\u6b21\u7684\u985e\u5225\u3002"),(0,i.kt)("h3",{id:"\u4f9d\u8cf4\u5012\u8f49\u539f\u5247\u5efa\u8b70\u6539\u8b8a\u9019\u7a2e\u4f9d\u8cf4\u65b9\u5f0f"},"\u4f9d\u8cf4\u5012\u8f49\u539f\u5247\u5efa\u8b70\u6539\u8b8a\u9019\u7a2e\u4f9d\u8cf4\u65b9\u5f0f\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u6700\u597d\u4f7f\u7528\u696d\u52d9\u8853\u8a9e\u4f86\u547d\u540d\u9ad8\u5c64\u6b21\u985e\u5225\u7684\u65b9\u6cd5\uff0c\u5982 BudgetReport\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u57fa\u65bc\u62bd\u8c61\u4ecb\u9762\u5efa\u7acb\u9ad8\u5c64\u6b21\u985e\u5225\uff0c\u800c\u4e0d\u662f\u57fa\u65bc\u4f4e\u5c64\u6b21\u7684\u5177\u9ad4\u985e\u5225\uff0c\u9019\u6703\u6bd4\u539f\u59cb\u7684\u4f9d\u8cf4\u95dc\u4fc2\u9748\u6d3b\u5f88\u591a\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u4e00\u65e6\u4f4e\u5c64\u6b21\u7684\u985e\u5225\u5be6\u73fe\u9019\u4e9b\u4ecb\u9762\uff0c\u4ed6\u5011\u5c07\u4f9d\u8cf4\u65bc\u696d\u52d9\u908f\u8f2f\u5c64\uff0c\u5f9e\u800c\u5012\u8f49\u4e86\u539f\u59cb\u7684\u4f9d\u8cf4\u95dc\u4fc2\u3002")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bad way:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"class MySqlDatabase {\n  insert() {\n    // ...\n  }\n\n  update() {\n    // ...\n  }\n\n  delete() {\n    // ...\n  }\n}\n\nclass BudgetReport {\n  private mySqlDatabase: MySqlDatabase;\n\n  constructor(mySqlDatabase: MySqlDatabase) {\n    this.mySqlDatabase = mySqlDatabase;\n  }\n\n  open(date: string) {\n    //...\n  }\n\n  save() {}\n}\n")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u9ad8\u5c64\u6b21\u7684\u985e\u5225\u4e0d\u61c9\u8a72\u53bb\u95dc\u6ce8\u8cc7\u6599\u5b58\u5132\u7684\u7d30\u7bc0\u3002"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Good way:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface Database {\n  insert(): void;\n\n  update(): void;\n\n  delete(): void;\n}\n\nclass MySql implements Database {\n  insert(): void {\n    // ...\n  }\n\n  update(): void {\n    // ...\n  }\n\n  delete(): void {\n    // ...\n  }\n}\n\nclass MongoDB implements Database {\n  insert(): void {\n    // ...\n  }\n\n  update(): void {\n    // ...\n  }\n\n  delete(): void {\n    // ...\n  }\n}\n\nclass BudgetReport {\n  private database: Database;\n\n  constructor(database: Database) {\n    this.database = database;\n  }\n\n  open(date: string) {\n    //...\n  }\n\n  save() {}\n}\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Depends on abstractions, not on concretions.\n\u4f9d\u8cf4\u65bc\u62bd\u8c61\uff0c\u800c\u975e\u5177\u9ad4\u3002"))))}m.isMDXComponent=!0}}]);