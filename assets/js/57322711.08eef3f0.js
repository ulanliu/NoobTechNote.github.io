"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[9316],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var a=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=a.createContext({}),o=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),k=o(r),m=l,d=k["".concat(c,".").concat(m)]||k[m]||s[m]||n;return r?a.createElement(d,i(i({ref:t},u),{},{components:r})):a.createElement(d,i({ref:t},u))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,i=new Array(n);i[0]=k;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var o=2;o<n;o++)i[o]=r[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},7160:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return s}});var a=r(7462),l=r(3366),n=(r(7294),r(3905)),i=["components"],p={title:"Ch34: \u907a\u6f0f\u7684\u7ae0\u7bc0",tsidebar_label:"Ch34: \u6574\u6f54\u7684\u5d4c\u5165\u5f0f\u67b6\u69cb",sidebar_position:34},c=void 0,o={unversionedId:"sg/clean-architecture/ch34",id:"sg/clean-architecture/ch34",title:"Ch34: \u907a\u6f0f\u7684\u7ae0\u7bc0",description:"\u65b9\u6cd5\u4e00\uff1a\u4f9d\u5957\u4ef6\u9010\u5c64\u6253\u5305 \uff08Package by layer\uff09",source:"@site/docs/sg/clean-architecture/ch34.md",sourceDirName:"sg/clean-architecture",slug:"/sg/clean-architecture/ch34",permalink:"/docs/sg/clean-architecture/ch34",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/clean-architecture/ch34.md",tags:[],version:"current",lastUpdatedBy:"zoe chen",lastUpdatedAt:1677579046,formattedLastUpdatedAt:"2/28/2023",sidebarPosition:34,frontMatter:{title:"Ch34: \u907a\u6f0f\u7684\u7ae0\u7bc0",tsidebar_label:"Ch34: \u6574\u6f54\u7684\u5d4c\u5165\u5f0f\u67b6\u69cb",sidebar_position:34},sidebar:"tutorialSidebar",previous:{title:"Ch33: \u6848\u4f8b\u7814\u7a76\uff1a\u5f71\u7247\u8ca9\u552e",permalink:"/docs/sg/clean-architecture/ch33"},next:{title:"\u9cf3\u51f0\u67b6\u69cb",permalink:"/docs/sg/fenix-architecture/"}},u={},s=[{value:"\u65b9\u6cd5\u4e00\uff1a\u4f9d\u5957\u4ef6\u9010\u5c64\u6253\u5305 \uff08Package by layer\uff09",id:"\u65b9\u6cd5\u4e00\u4f9d\u5957\u4ef6\u9010\u5c64\u6253\u5305-package-by-layer",level:2},{value:"\u6c34\u5e73\u6a6b\u5411\u5206\u5c64\u67b6\u69cb (horizontal layered architecture)",id:"\u6c34\u5e73\u6a6b\u5411\u5206\u5c64\u67b6\u69cb-horizontal-layered-architecture",level:3},{value:"Example",id:"example",level:3},{value:"\u65b9\u6cd5\u4e8c\uff1a\u4f9d\u529f\u80fd\u7279\u6027\u6253\u5305\uff08Package by feature\uff09",id:"\u65b9\u6cd5\u4e8c\u4f9d\u529f\u80fd\u7279\u6027\u6253\u5305package-by-feature",level:2},{value:"\u5782\u76f4\u5207\u7247 (vertical slicing)",id:"\u5782\u76f4\u5207\u7247-vertical-slicing",level:3},{value:"Example",id:"example-1",level:3},{value:"\u5c0f\u7d50",id:"\u5c0f\u7d50",level:3},{value:"\u65b9\u6cd5\u4e09\uff1a\u7aef\u53e3\u548c\u8f49\u63a5\u5668\uff08Port and Adapter\uff09",id:"\u65b9\u6cd5\u4e09\u7aef\u53e3\u548c\u8f49\u63a5\u5668port-and-adapter",level:2},{value:"\u4ee5\u696d\u52d9/\u9818\u57df\u70ba\u4e2d\u5fc3\u7684\u7a0b\u5f0f\u78bc",id:"\u4ee5\u696d\u52d9\u9818\u57df\u70ba\u4e2d\u5fc3\u7684\u7a0b\u5f0f\u78bc",level:3},{value:"\u65b9\u6cd5\u56db\uff1a\u4f9d\u5143\u4ef6\u6253\u5305\uff08Package by component\uff09",id:"\u65b9\u6cd5\u56db\u4f9d\u5143\u4ef6\u6253\u5305package-by-component",level:2},{value:"\u57fa\u65bc\u5143\u4ef6\u7684\u67b6\u69cb (CBA - Component Based Architecture)",id:"\u57fa\u65bc\u5143\u4ef6\u7684\u67b6\u69cb-cba---component-based-architecture",level:3},{value:"\u88dc\u5145\uff1aC4 Model",id:"\u88dc\u5145c4-model",level:3},{value:"\u8a0e\u8ad6",id:"\u8a0e\u8ad6",level:3},{value:"\u9019\u5c6c\u65bc\u54ea\u4e00\u7a2e\u67b6\u69cb\uff1f",id:"\u9019\u5c6c\u65bc\u54ea\u4e00\u7a2e\u67b6\u69cb",level:4},{value:"\u9b54\u9b3c\u5c31\u5728\u5be6\u4f5c\u7d30\u7bc0\u4e2d",id:"\u9b54\u9b3c\u5c31\u5728\u5be6\u4f5c\u7d30\u7bc0\u4e2d",level:2},{value:"\u7d44\u7e54\u8207\u5c01\u88dd",id:"\u7d44\u7e54\u8207\u5c01\u88dd",level:2},{value:"\u5176\u4ed6\u7684\u89e3\u8026\u6a21\u5f0f",id:"\u5176\u4ed6\u7684\u89e3\u8026\u6a21\u5f0f",level:2},{value:"\u901a\u5e38\u9084\u6709\u5176\u4ed6\u65b9\u5f0f\u53ef\u4ee5\u5c07\u539f\u59cb\u78bc\u7684\u4f9d\u8cf4\u95dc\u4fc2\u89e3\u8026",id:"\u901a\u5e38\u9084\u6709\u5176\u4ed6\u65b9\u5f0f\u53ef\u4ee5\u5c07\u539f\u59cb\u78bc\u7684\u4f9d\u8cf4\u95dc\u4fc2\u89e3\u8026",level:3},{value:"\u900f\u904e\u5728\u4e0d\u540c\u7684\u539f\u59cb\u78bc\u6a39\uff08different source code trees\uff09\u652f\u9593\u5206\u5272\u7a0b\u5f0f\u78bc",id:"\u900f\u904e\u5728\u4e0d\u540c\u7684\u539f\u59cb\u78bc\u6a39different-source-code-trees\u652f\u9593\u5206\u5272\u7a0b\u5f0f\u78bc",level:3},{value:"\u7e3d\u7d50",id:"\u7e3d\u7d50",level:2}],k={toc:s};function m(e){var t=e.components,p=(0,l.Z)(e,i);return(0,n.kt)("wrapper",(0,a.Z)({},k,p,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u65b9\u6cd5\u4e00\u4f9d\u5957\u4ef6\u9010\u5c64\u6253\u5305-package-by-layer"},"\u65b9\u6cd5\u4e00\uff1a\u4f9d\u5957\u4ef6\u9010\u5c64\u6253\u5305 \uff08Package by layer\uff09"),(0,n.kt)("h3",{id:"\u6c34\u5e73\u6a6b\u5411\u5206\u5c64\u67b6\u69cb-horizontal-layered-architecture"},"\u6c34\u5e73\u6a6b\u5411\u5206\u5c64\u67b6\u69cb (horizontal layered architecture)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6700\u7c21\u55ae\u7684\u50b3\u7d71\u8a2d\u8a08\u65b9\u6cd5\uff0c\u6839\u64da\u6280\u8853\u89d2\u5ea6\u5c07\u7a0b\u5f0f\u78bc\u5206\u958b\uff0c\u76f8\u540c\u985e\u578b\u7684\u5728\u540c\u4e00\u5c64\uff0c\u6bcf\u4e00\u5c64\u53ea\u5c0d\u76f8\u9130\u7684\u4e0b\u5c64\u6709\u4f9d\u8cf4\u95dc\u4fc2")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u5716\u724734.1 \u9010\u5c64\u6253\u5305",src:r(8925).Z,width:"921",height:"818"})),(0,n.kt)("p",{style:{textAlign:"center"}},"\u5716\u724734.1 \u9010\u5c64\u6253\u5305"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"}," \u8aaa\u660e ")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"}," OrdersController "),": \u4e00\u500b Web \u63a7\u5236\u5668\uff0c\u985e\u4f3c Spring MVC \u63a7\u5236\u5668\uff0c\u7528\u4f86\u8655\u7406\u4f86\u81ea Web \u7684\u8acb\u6c42"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"}," OrdersService ")," : \u5b9a\u7fa9\u8207\u8a02\u55ae\u6709\u95dc\u7684 \u300c\u696d\u52d9\u908f\u8f2f\u300d\u7684\u4ecb\u9762"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"}," OrdersServiceImpl ")," : OdersService \u7684\u5be6\u4f5c"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"}," JdbcOrdersRepository ")," : \u5132\u5b58\u5eab\u4ecb\u9762\u7684\u5be6\u4f5c")),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 com.app\n    \u2514\u2500\u2500 controller\n        \u251c\u2500\u2500 CompanyController\n        \u251c\u2500\u2500 ProductController\n        \u2514\u2500\u2500 UserController\n    \u2514\u2500\u2500 model\n        \u251c\u2500\u2500 Company\n        \u251c\u2500\u2500 Product\n        \u2514\u2500\u2500 User\n    \u2514\u2500\u2500 repository\n        \u251c\u2500\u2500 CompanyRepository\n        \u251c\u2500\u2500 ProductRepository\n        \u2514\u2500\u2500 UserRepository\n    \u2514\u2500\u2500 service\n        \u251c\u2500\u2500 CompanyService\n        \u251c\u2500\u2500 ProductService\n        \u2514\u2500\u2500 UserService\n    \u2514\u2500\u2500 util\n")),(0,n.kt)("p",null,"(\u51fa\u8655\uff1a ",(0,n.kt)("a",{parentName:"p",href:"https://medium.com/sahibinden-technology/package-by-layer-vs-package-by-feature-7e89cde2ae3a"},"Package by Layer vs Package by Feature"),")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u63a1\u7528\u9019\u7a2e\u5206\u5c64\u67b6\u69cb\u505a\u70ba\u958b\u59cb\u662f\u500b\u597d\u65b9\u5f0f"),(0,n.kt)("li",{parentName:"ul"},"\u9069\u5408\u7528\u65bc\u9700\u8981\u5feb\u901f\u5efa\u7acb\u53ca\u6c92\u6709\u5927\u91cf\u8907\u96dc\u6027\u7684\u60c5\u6cc1\u4e0b\u4f7f\u7528"),(0,n.kt)("li",{parentName:"ul"},"\u8edf\u9ad4\u898f\u6a21\u64f4\u5927\u53ca\u8907\u96dc\u5ea6\u589e\u52a0\u5f8c\uff0c\u9700\u8981\u9032\u4e00\u6b65\u7684\u6a21\u7d44\u5316")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"\u65b9\u6cd5\u4e8c\u4f9d\u529f\u80fd\u7279\u6027\u6253\u5305package-by-feature"},"\u65b9\u6cd5\u4e8c\uff1a\u4f9d\u529f\u80fd\u7279\u6027\u6253\u5305\uff08Package by feature\uff09"),(0,n.kt)("h3",{id:"\u5782\u76f4\u5207\u7247-vertical-slicing"},"\u5782\u76f4\u5207\u7247 (vertical slicing)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u57fa\u65bc\u76f8\u95dc\u7279\u6027 (feature)\u3001\u9818\u57df\u6982\u5ff5\u6216\u805a\u5408\u6839 (aggregate roots: \u53d6\u81ea\u9818\u57df\u9a45\u52d5\u8a2d\u8a08 DDD \u7684\u8853\u8a9e) \u800c\u4f5c\u5283\u5206"),(0,n.kt)("li",{parentName:"ul"},"\u6240\u6709\u578b\u614b (types) \u90fd\u653e\u5728\u55ae\u4e00\u500b Java \u5305 (package: \u5957\u4ef6) \u4e2d\uff0c\u5176\u547d\u540d\u5373\u53cd\u61c9\u51fa\u5206\u7d44\u7684\u6982\u5ff5")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u5716\u724734.2 \u4f9d\u529f\u80fd\u7279\u6027\u6253\u5305",src:r(8161).Z,width:"927",height:"800"})),(0,n.kt)("p",{style:{textAlign:"center"}},"\u5716\u724734.2 \u4f9d\u529f\u80fd\u7279\u6027\u6253\u5305"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"}," \u8aaa\u660e ")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6709\u4e0a\u4e00\u500b\u65b9\u6cd5 (Package by layers) \u76f8\u540c\u7684\u4ecb\u9762\u548c\u985e\u5225\uff0c\u4f46\u5168\u90e8\u653e\u5728\u55ae\u4e00\u500b Java package \u4e2d"),(0,n.kt)("li",{parentName:"ul"},"\u7a0b\u5f0f\u78bc\u6700\u9ad8\u5c64\u7d1a\u7d44\u7e54\u73fe\u5728 \u300c\u5c16\u53eb\u300d\u51fa\u4e00\u4e9b\u95dc\u65bc\u696d\u52d9\u9818\u57df\u7684\u5167\u5bb9"),(0,n.kt)("li",{parentName:"ul"},"\u7576 Use case \u8b8a\u66f4\u6642\uff0c\u8f03\u6613\u627e\u51fa\u6240\u6709\u9700\u8981\u4fee\u6539\u7684\u7a0b\u5f0f\u78bc")),(0,n.kt)("h3",{id:"example-1"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 com.app\n    \u2514\u2500\u2500 company\n        \u251c\u2500\u2500 Company\n        \u251c\u2500\u2500 CompanyController\n        \u251c\u2500\u2500 CompanyRepository\n        \u2514\u2500\u2500 CompanyService\n    \u2514\u2500\u2500 product\n        \u251c\u2500\u2500 Product\n        \u251c\u2500\u2500 ProductController\n        \u251c\u2500\u2500 ProductRepository\n        \u2514\u2500\u2500 ProductService\n    \u2514\u2500\u2500 util\n    \u2514\u2500\u2500 user\n        \u251c\u2500\u2500 User\n        \u251c\u2500\u2500 UserController\n        \u251c\u2500\u2500 UserRepository\n        \u2514\u2500\u2500 UserService\n")),(0,n.kt)("p",null,"(\u51fa\u8655\uff1a ",(0,n.kt)("a",{parentName:"p",href:"https://medium.com/sahibinden-technology/package-by-layer-vs-package-by-feature-7e89cde2ae3a"},"Package by Layer vs Package by Feature"),")"),(0,n.kt)("h3",{id:"\u5c0f\u7d50"},"\u5c0f\u7d50"),(0,n.kt)("p",null,"\u4e0d\u8ad6 Package by layer \u6216 Package by feature\uff0c\u5169\u8005\u90fd\u4e0d\u662f\u6700\u7406\u60f3\u7684\u9078\u64c7"),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"\u65b9\u6cd5\u4e09\u7aef\u53e3\u548c\u8f49\u63a5\u5668port-and-adapter"},"\u65b9\u6cd5\u4e09\uff1a\u7aef\u53e3\u548c\u8f49\u63a5\u5668\uff08Port and Adapter\uff09"),(0,n.kt)("h3",{id:"\u4ee5\u696d\u52d9\u9818\u57df\u70ba\u4e2d\u5fc3\u7684\u7a0b\u5f0f\u78bc"},"\u4ee5\u696d\u52d9/\u9818\u57df\u70ba\u4e2d\u5fc3\u7684\u7a0b\u5f0f\u78bc"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u67b6\u69cb\u53c8\u7a31\u70ba Hexagonal Architecture\uff08\u516d\u89d2\u5f62\u67b6\u69cb\uff09\uff0cClean Architecture \u7684\u6838\u5fc3 \uff08",(0,n.kt)("a",{href:"http://teddy-chen-tw.blogspot.com/2018/03/clean-architecture2port-and-adapter.html"},"\u53c3\u8003\uff1aClean Architecture\uff082\uff09\uff1aPort and Adapter Architecture"),"\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u7368\u7acb\u4e14\u8207\u6280\u8853\u5be6\u4f5c\u7d30\u7bc0\uff08\u5982\u6846\u67b6\u548c\u8cc7\u6599\u5eab\uff09\u5206\u96e2"),(0,n.kt)("li",{parentName:"ul"},"\u4ee3\u78bc\u5eab\uff08codebase\uff09\u7531\u300c\u5167\u90e8\u300d\uff08\u9818\u57df Domain\uff09\u548c\u300c\u5916\u90e8\u300d\uff08\u57fa\u790e\u8a2d\u65bd infrastructure\uff09\u6240\u7d44\u6210")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u5716\u724734.3 \u5177\u6709\u5167\u90e8\u548c\u5916\u90e8\u7684\u7a0b\u5f0f\u78bc\u5eab",src:r(262).Z,width:"928",height:"566"})),(0,n.kt)("p",{style:{textAlign:"center"}},"\u5716\u724734.3 \u5177\u6709\u5167\u90e8\u548c\u5916\u90e8\u7684\u7a0b\u5f0f\u78bc\u5eab"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"}," \u8aaa\u660e ")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5916\u90e8\u4f9d\u8cf4\u5167\u90e8"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5167\u90e8\u5340\u57df\u5305\u542b domian \u6982\u5ff5"),(0,n.kt)("li",{parentName:"ul"},"\u5916\u90e8\u5247\u5305\u542b\u8207\u5916\u90e8\u4e16\u754c (UI\u3001DB\u30013rd-party library) \u7684\u4e92\u52d5")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u5716\u724734.4 view orders \u4f7f\u7528\u6848\u4f8b",src:r(4857).Z,width:"926",height:"797"})),(0,n.kt)("p",{style:{textAlign:"center"}},"\u5716\u724734.4 view orders \u4f7f\u7528\u6848\u4f8b"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"}," \u8aaa\u660e ")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u300c\u5167\u90e8\u300d\u6240\u6709\u7684\u5167\u5bb9\u547d\u540d\u8a72\u4f7f\u7528\u300c\u666e\u53ca\u7684\u9818\u57df\u8a9e\u8a00\u300d\uff08DDD \u4e2d\u7684\u5efa\u8b70\uff09",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"OrdersRepository \u91cd\u65b0\u547d\u540d\u70ba orders")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"\u65b9\u6cd5\u56db\u4f9d\u5143\u4ef6\u6253\u5305package-by-component"},"\u65b9\u6cd5\u56db\uff1a\u4f9d\u5143\u4ef6\u6253\u5305\uff08Package by component\uff09"),(0,n.kt)("h3",{id:"\u57fa\u65bc\u5143\u4ef6\u7684\u67b6\u69cb-cba---component-based-architecture"},"\u57fa\u65bc\u5143\u4ef6\u7684\u67b6\u69cb (CBA - Component Based Architecture)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e00\u7a2e\u6df7\u5408\u5f0f\u65b9\u6cd5\uff0c\u76ee\u6a19\u5c07\u300e\u8207\u55ae\u500b\u7c97\u7c92\u5ea6 (Coarse-grained) \u6709\u95dc\u7684\u6240\u6709\u8cac\u4efb\u300f\u7d81\u5b9a\uff08Bunddle\uff09 \u5230\u55ae\u4e00\u7684 Package \u4e2d"),(0,n.kt)("li",{parentName:"ul"},"\u4ee5\u670d\u52d9 (Service) \u70ba\u4e2d\u5fc3\u7684\u8edf\u9ad4\u7cfb\u7d71\u89c0\u9ede"),(0,n.kt)("li",{parentName:"ul"},"\u5143\u4ef6\uff1a\u300c\u696d\u52d9\u908f\u8f2f\u300d\u548c\u6301\u4e45\u6027\u7a0b\u5f0f\u78bc bunddle \u6210\u55ae\u4e00\u7684\u6771\u897f")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"}," Uncle Bob: "),(0,n.kt)("br",{parentName:"p"}),"\n","\u5143\u4ef6\uff08Component)\u662f\u90e8\u7f72\uff08Development\uff09\u7684\u55ae\u4f4d\uff0c\u5b83\u5011\u662f\u7cfb\u7d71\u5728\u90e8\u7f72\u6642\u6700\u5c0f\u7684\u90e8\u5206\u5be6\u9ad4\u3002")),(0,n.kt)("p",null,"\uff08\u50cf\u662f Java \u4e2d\u7684 jar \u6a94\uff1b\u4f7f\u7528 React \u4f5c\u70ba\u524d\u7aef\u958b\u767c\uff09"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u5716\u724734.5 \u5bec\u9b06\u7684\u5206\u5c64\u67b6\u69cb",src:r(8459).Z,width:"927",height:"801"})),(0,n.kt)("p",{style:{textAlign:"center"}},"\u5716\u724734.5 \u5bec\u9b06\u7684\u5206\u5c64\u67b6\u69cb"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"}," \u8aaa\u660e ")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u70ba\u4e86\u8b93\u4f9d\u8cf4\u7bad\u982d\u6307\u5411\u4e0b\uff0cOrderService \u4ecb\u9762\u8981\u6a19\u70ba public\uff0c\u540c\u6a23 OrdersRepository \u4ecb\u9762\u4e5f\u9808\u8981\u6a19\u70ba public"),(0,n.kt)("li",{parentName:"ul"},"\u9019\u6642\u6709\u4f4d\u65b0\u4eba\u52a0\u5165\u5718\u968a\uff0c\u8981\u5be6\u4f5c\u4e00\u500b\u65b0\u7684 Order \u76f8\u95dc\u7684\u4f7f\u7528\u6848\u4f8b\uff0c\u4ed6\u53ef\u80fd\u6703\u5beb\u51fa\u5982\u4e0a\u7684\u67b6\u69cb")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u5716\u724734.6 view orders \u4f7f\u7528\u6848\u4f8b",src:r(1772).Z,width:"922",height:"796"})),(0,n.kt)("p",{style:{textAlign:"center"}},"\u5716\u724734.6 view orders \u4f7f\u7528\u6848\u4f8b"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"}," \u8aaa\u660e ")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5c07\u696d\u52d9\u908f\u8f2f\u4ee5\u53ca\u8cc7\u6599\u5b58\u53d6\u6253\u5305\u5728\u4e00\u8d77\uff0c\u8996\u70ba\u4e00\u500b \u5143\u4ef6 (component)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5169\u8005\u6301\u4e45\u6027\u662f\u5206\u96e2\u7684\uff0c\u4f8b: \u4e00\u500b\u55ae\u7368\u7684 OrderService \u5c01\u88dd\u300c\u8207\u8655\u7406\u8a02\u55ae\u6709\u95dc\u7684\u6240\u6709\u5167\u5bb9\u300d"))),(0,n.kt)("li",{parentName:"ul"},"\u5143\u4ef6\u662f\u90e8\u7f72 (deploymen) \u7684\u55ae\u4f4d",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Web \u76f8\u95dc\u7684 controller \u4f9d\u8cf4 OrdersComponent"),(0,n.kt)("li",{parentName:"ul"},"\u5728\u5143\u4ef6\u5167\u90e8\uff0c\u95dc\u6ce8\u9ede\u7684\u5206\u96e2\u4f9d\u7136\u4e0d\u8b8a")))),(0,n.kt)("h3",{id:"\u88dc\u5145c4-model"},"\u88dc\u5145\uff1aC4 Model"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Context (System Context Diagram)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5c07\u5404\u7a2e\u4f7f\u7528\u8005/\u89d2\u8272\u9700\u8981\u4f7f\u7528\u7684\u529f\u80fd\u756b\u51fa\u4f86\uff0c\u4e0d\u6703\u6709\u6280\u8853\u540d\u8a5e\u6216\u5be6\u4f5c\u7684\u76f8\u95dc\u505a\u6cd5"))),(0,n.kt)("li",{parentName:"ul"},"Containers",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"applications and data stores"))),(0,n.kt)("li",{parentName:"ul"},"Components",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5c07\u61c9\u7528\u7a0b\u5f0f\u5167\u5bb9\u66f4\u6df1\u5165\u5730\u756b\u51fa\u6bcf\u500b\u5143\u4ef6"))),(0,n.kt)("li",{parentName:"ul"},"Code",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u67b6\u69cb\u5143\u7d20\u7684\u8a2d\u8a08\u7d30\u7bc0\uff0c\u53ef\u4ee5\u5c0d\u61c9\u5230\u7a0b\u5f0f\u78bc")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u5716\u7247 - C4 model",src:r(6841).Z,width:"1920",height:"1080"})),(0,n.kt)("p",{style:{textAlign:"center"}},"\u5716\u7247 C4 Model ",(0,n.kt)("a",{href:"https://blog.myctw.cc/post/d11.html",target:"_blank"},"\uff08\u5ef6\u4f38\u95b1\u8b80\uff1a\u8edf\u9ad4\u67b6\u69cb\u4e4b\uff234\u6a21\u578b\uff09")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u5716\u7247 - C4 model",src:r(7228).Z,width:"1312",height:"555"})),(0,n.kt)("p",{style:{textAlign:"center"}},"\u5716\u7247 C4 Model"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"\u8a0e\u8ad6"},"\u8a0e\u8ad6"),(0,n.kt)("h4",{id:"\u9019\u5c6c\u65bc\u54ea\u4e00\u7a2e\u67b6\u69cb"},"\u9019\u5c6c\u65bc\u54ea\u4e00\u7a2e\u67b6\u69cb\uff1f"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\u2514\u2500\u2500 foresight-ats.app\n    \u2514\u2500\u2500 constants\n        \u2514\u2500\u2500 src\n            \u251c\u2500\u2500 assets\n            |   \u2514\u2500\u2500 img\n            \u2514\u2500\u2500 lib\n                \u2514\u2500\u2500 api\n    \u2514\u2500\u2500 constainers\n    \u2514\u2500\u2500 machines\n    \u2514\u2500\u2500 mock\n    \u2514\u2500\u2500 ui\n        \u2514\u2500\u2500 src\n            \u251c\u2500\u2500 components\n            \u2514\u2500\u2500 lib\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"\u9b54\u9b3c\u5c31\u5728\u5be6\u4f5c\u7d30\u7bc0\u4e2d"},"\u9b54\u9b3c\u5c31\u5728\u5be6\u4f5c\u7d30\u7bc0\u4e2d"),(0,n.kt)("h2",{id:"\u7d44\u7e54\u8207\u5c01\u88dd"},"\u7d44\u7e54\u8207\u5c01\u88dd"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},' \u52ff\u6feb\u7528 "Public" ')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u82e5\u5c07\u6240\u6709\u578b\u614b\u90fd\u5ba3\u544a\u70ba public\uff0c\u90a3\u9ebc package \u53ea\u662f\u4e00\u7a2e\u7d44\u7e54\u6a5f\u5236\uff08\u7528\u4f86\u5206\u7d44\uff0c\u5c31\u50cf\u8cc7\u6599\u593e\u90a3\u6a23\uff09\uff0c\u800c\u4e0d\u662f\u7528\u65bc\u5c01\u88dd"),(0,n.kt)("li",{parentName:"ul"},"\u82e5\u90fd\u4f7f\u7528 public \u578b\u614b\uff0c\u6700\u7d42\u9019\u4e9b package \u5bb9\u6613\u88ab\u5ffd\u7565\uff0c\u524d\u9762\u6240\u63d0\u7684\u56db\u7a2e\u67b6\u69cb\u65b9\u6cd5\u90fd\u76f8\u540c\u4e86")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u5716\u724734.7 \u56db\u7a2e\u67b6\u69cb\u65b9\u6cd5\u90fd\u662f\u76f8\u540c\u7684",src:r(6794).Z,width:"930",height:"651"})),(0,n.kt)("p",{style:{textAlign:"center"}},"\u5716\u724734.7 \u56db\u7a2e\u67b6\u69cb\u65b9\u6cd5\u90fd\u662f\u76f8\u540c\u7684"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"}," \u8aaa\u660e ")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u8ad6\u4f7f\u7528\u54ea\u7a2e\u67b6\u69cb\u65b9\u6cd5\u90fd\u662f\u76f8\u540c\u7684"),(0,n.kt)("li",{parentName:"ul"},"\u7576\u6240\u6709\u578b\u614b\u90fd\u5ba3\u544a public \u6642\uff0c\u7b49\u65bc\u53ea\u662f\u7528\u56db\u7a2e\u65b9\u5f0f\u4f86\u63cf\u8ff0\u50b3\u7d71\u7684\u6c34\u5e73\u5206\u5c64\u67b6\u69cb")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u5716\u724734.8 \u8b8a\u6210\u7070\u8272\u7684\u578b\u614b\u662f\u53ef\u4ee5\u4f7f\u5b58\u53d6\u4fee\u98fe\u7b26\u66f4\u5177\u9650\u5236\u7684\u5730\u65b9",src:r(3786).Z,width:"929",height:"711"})),(0,n.kt)("p",{style:{textAlign:"center"}},"\u5716\u724734.8 \u8b8a\u6210\u7070\u8272\u7684\u578b\u614b\u662f\u53ef\u4ee5\u4f7f\u5b58\u53d6\u4fee\u98fe\u7b26\u66f4\u5177\u9650\u5236\u7684\u5730\u65b9"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"}," \u8aaa\u660e ")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9069\u7576\u4f7f\u7528\u5b58\u53d6\u4fee\u98fe\u7b26\uff0c\u53ef\u5f71\u97ff\u9019\u4e9b\u578b\u614b\u7684\u53ef\u5b58\u53d6\u6027\uff08\u6216\u4e0d\u53ef\u5b58\u53d6\u6027\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u9010\u5c64\u6253\u5305",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"OrdersService \u548c OrdersRepository \u56e0\u70ba\u5b9a\u7fa9\u4e86\u88ab\u4f7f\u7528\u7684\u4ecb\u9762 (\u4f9d\u8cf4\u95dc\u4fc2)\uff0c\u88ab\u5ba3\u544a\u70ba public"),(0,n.kt)("li",{parentName:"ul"},"OrdersServiceImpl \u548c JdbcOrdersRepository \u56e0\u70ba\u662f\u5be6\u4f5c\u7d30\u7bc0\uff0c\u4e0d\u5177\u6709\u5c0d\u5916\u6027"))),(0,n.kt)("li",{parentName:"ul"},"\u4f9d\u529f\u80fd\u7279\u6027\u6253\u5305",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u53ea\u6709 OrdersController \u63d0\u4f9b\u552f\u4e00\u7684\u5165\u53e3\uff0c\u5176\u9918\u90fd\u4e0d\u5177\u6709\u5c0d\u5916\u6027"),(0,n.kt)("li",{parentName:"ul"},"\u9664\u975e\u900f\u904e\u9019\u500b package \u7684 controller\uff0c\u5426\u5247\u5176\u4ed6\u7a0b\u5f0f\u78bc\u6c92\u6709\u5b58\u53d6\u8ddf orders \u6709\u95dc\u7684\u8cc7\u8a0a"))),(0,n.kt)("li",{parentName:"ul"},"\u4f9d\u7aef\u53e3\u8207\u8f49\u63a5\u5668\u6253\u5305",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"OrdersService \u548c Orders \u56e0\u70ba\u5c6c\u65bc\u5167\u90e8\uff0c\u9700\u8981\u88ab\u5916\u90e8\u4f9d\u8cf4\uff0c\u56e0\u6b64\u8981\u70ba public"),(0,n.kt)("li",{parentName:"ul"},"\u5176\u9918 OrdersServiceImpl \u548c JdbcOrdersRepository \u5c6c\u65bc\u5be6\u4f5c\u7d30\u7bc0\uff0c\u5728 runtime \u6642\u9032\u884c dependency injection"))),(0,n.kt)("li",{parentName:"ul"},"\u4f9d\u5143\u4ef6\u6253\u5305",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"OrdersComponent \u70ba Controller \u8981\u4e92\u52d5\u7684\u4ecb\u9762\uff0c\u9808\u70ba public\uff0c\u5176\u9918\u7686\u8996\u70ba\u5be6\u4f5c\u7d30\u7bc0")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"\u5176\u4ed6\u7684\u89e3\u8026\u6a21\u5f0f"},"\u5176\u4ed6\u7684\u89e3\u8026\u6a21\u5f0f"),(0,n.kt)("h3",{id:"\u901a\u5e38\u9084\u6709\u5176\u4ed6\u65b9\u5f0f\u53ef\u4ee5\u5c07\u539f\u59cb\u78bc\u7684\u4f9d\u8cf4\u95dc\u4fc2\u89e3\u8026"},"\u901a\u5e38\u9084\u6709\u5176\u4ed6\u65b9\u5f0f\u53ef\u4ee5\u5c07\u539f\u59cb\u78bc\u7684\u4f9d\u8cf4\u95dc\u4fc2\u89e3\u8026"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 OSGi \u548c\u65b0\u7684 Java 9 \u6a21\u7d44\u7cfb\u7d71\uff08module system\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6a21\u7d44\u7cfb\u7d71\u6642\uff0c\u53ef\u5340\u5206 public \u578b\u614b\u548c published (\u767c\u5e03\u7684) \u578b\u614b",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5efa\u7acb\u4e00\u500b Orders \u6a21\u7d44\uff0c\u6240\u6709\u578b\u614b\u90fd\u6a19\u8a18\u70ba public\uff0c\u4f46\u50c5\u5c07\u5176\u4e2d\u4e00\u500b\u5b50\u96c6 publish \u7d66\u5916\u90e8\u4f7f\u7528")))),(0,n.kt)("h3",{id:"\u900f\u904e\u5728\u4e0d\u540c\u7684\u539f\u59cb\u78bc\u6a39different-source-code-trees\u652f\u9593\u5206\u5272\u7a0b\u5f0f\u78bc"},"\u900f\u904e\u5728\u4e0d\u540c\u7684\u539f\u59cb\u78bc\u6a39\uff08different source code trees\uff09\u652f\u9593\u5206\u5272\u7a0b\u5f0f\u78bc"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4ee5\u300c\u7aef\u53e3\u548c\u8f49\u63a5\u5668\u300d\u70ba\u4f8b\uff0c\u53ef\u6709\u4e09\u68f5\u539f\u59cb\u78bc\u6a39"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u696d\u52d9\u548c\u9818\u57df\u7684\u539f\u59cb\u78bc\uff08\u5373\u7368\u7acb\u65bc\u6280\u8853\u548c\u6846\u67b6\u9078\u64c7\u7684\u6240\u6709\u5167\u5bb9\uff09: OrdersService\uff0cOrdersServiceImpl \u548c Orders"),(0,n.kt)("li",{parentName:"ul"},"Web \u7684\u539f\u59cb\u7a0b\u5f0f\u78bc\uff1aOrdersController"),(0,n.kt)("li",{parentName:"ul"},"\u8cc7\u6599\u6301\u4e45\u6027\u7684\u539f\u59cb\u7a0b\u5f0f\u78bc\uff1aJdbcOrdersRepository")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u5716\u724734.9 \u9818\u57df\u548c\u57fa\u790e\u8a2d\u65bd\u7684\u7a0b\u5f0f\u78bc",src:r(3002).Z,width:"924",height:"570"})),(0,n.kt)("p",{style:{textAlign:"center"}},"\u5716\u724734.9 \u9818\u57df\u548c\u57fa\u790e\u8a2d\u65bd\u7684\u7a0b\u5f0f\u78bc"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"}," \u8aaa\u660e ")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u6709\u4e9b\u6703\u63a1\u7528\u66f4\u7c21\u55ae\u7684\u65b9\u5f0f\uff0c\u53ea\u5340\u5206\u5169\u500b source code tree\uff0c\u5982\u4e0a\u5716"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Domain (\u5167\u90e8)"),(0,n.kt)("li",{parentName:"ul"},"Infrastructure (\u5916\u90e8)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5c07\u6240\u6709\u7684 infra \u5be6\u4f5c\u90fd\u653e\u5728\u540c\u4e00\u500b source code tree \u7576\u4e2d\uff0c\u53ef\u80fd\u6703\u51fa\u73fe\u4e00\u7a2e anti-pattern\uff0c\u7a0b\u5f0f\u4e2d\u67d0\u500b infra (ex: Web controller) \u53ef\u80fd\u6703\u76f4\u63a5\u547c\u53eb\u5176\u4ed6\u7684 infra (ex: DB)\uff0c\u800c\u7121\u9808\u900f\u904e\u4e2d\u9593\u7684 domain"))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"\u7e3d\u7d50"},"\u7e3d\u7d50"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8003\u616e\u5718\u968a\u7684\u898f\u6a21\u3001\u6280\u8853\u6c34\u5e73\u53ca\u89e3\u6c7a\u65b9\u6848\u7684\u8907\u96dc\u6027\u548c\u6642\u9593\u53ca\u9810\u7b97\u7684\u9650\u5236"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u4f55\u5229\u7528\u7de8\u8b6f\u5668\u4f86\u5e6b\u52a9\u5f37\u5236\u57f7\u884c\u6240\u9078\u64c7\u7684\u67b6\u69cb\u98a8\u683c"),(0,n.kt)("li",{parentName:"ul"},"\u6ce8\u610f\u5176\u4ed6\u5340\u57df\uff08\u5982\u8cc7\u6599\u6a21\u578b\uff09\u4e2d\u7684\u8026\u5408")))}m.isMDXComponent=!0},7228:function(e,t,r){t.Z=r.p+"assets/images/c4-model-b667182deaaff7da8bf9b2b1c5431135.png"},6841:function(e,t,r){t.Z=r.p+"assets/images/c4-overview-4b83248988426ba51c342379d36469cb.png"},8925:function(e,t,r){t.Z=r.p+"assets/images/fig-34-1-63a4e2d53a32f2c7813cf160ac2d0412.png"},8161:function(e,t,r){t.Z=r.p+"assets/images/fig-34-2-cbcf494dc9765579f974183ba08ef65d.png"},262:function(e,t,r){t.Z=r.p+"assets/images/fig-34-3-f0b36ca645c9b18c3e9bc3af6c306a35.png"},4857:function(e,t,r){t.Z=r.p+"assets/images/fig-34-4-e7f3bb559451f7e3f773a4feac6c7efd.png"},8459:function(e,t,r){t.Z=r.p+"assets/images/fig-34-5-5e61fc30a6eae849a4161c0b1542a6de.png"},1772:function(e,t,r){t.Z=r.p+"assets/images/fig-34-6-14b0d79c9bf2512c0f36e878a12c54a0.png"},6794:function(e,t,r){t.Z=r.p+"assets/images/fig-34-7-b3a4e9b89f75aed446eff74611c88d37.png"},3786:function(e,t,r){t.Z=r.p+"assets/images/fig-34-8-2d35ed7db778de191863d22386d75da7.png"},3002:function(e,t,r){t.Z=r.p+"assets/images/fig-34-9-6cd628749a930b24bb77f63eed2f9a20.png"}}]);