"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[5721],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var l=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=l.createContext({}),s=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return l.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,m=u["".concat(c,".").concat(d)]||u[d]||h[d]||r;return n?l.createElement(m,a(a({ref:t},p),{},{components:n})):l.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:i,a[1]=o;for(var s=2;s<r;s++)a[s]=n[s];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6929:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var l=n(7462),i=(n(7294),n(3905));const r={title:"Ch14: \u5143\u4ef6\u8026\u5408\u6027 (Component Coupling)",sidebar_label:"Ch14: \u5143\u4ef6\u8026\u5408\u6027",sidebar_position:14},a="Ch14: \u5143\u4ef6\u8026\u5408\u6027 (Component Coupling)",o={unversionedId:"sg/clean-architecture/ch14",id:"sg/clean-architecture/ch14",title:"Ch14: \u5143\u4ef6\u8026\u5408\u6027 (Component Coupling)",description:"\u8a0e\u8ad6 Component \u4e4b\u9593\u7684\u95dc\u4fc2",source:"@site/docs/sg/clean-architecture/ch14.md",sourceDirName:"sg/clean-architecture",slug:"/sg/clean-architecture/ch14",permalink:"/docs/sg/clean-architecture/ch14",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/clean-architecture/ch14.md",tags:[],version:"current",lastUpdatedBy:"MichaelChen",lastUpdatedAt:1678628757,formattedLastUpdatedAt:"Mar 12, 2023",sidebarPosition:14,frontMatter:{title:"Ch14: \u5143\u4ef6\u8026\u5408\u6027 (Component Coupling)",sidebar_label:"Ch14: \u5143\u4ef6\u8026\u5408\u6027",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Ch13: \u5143\u4ef6\u5167\u805a\u6027",permalink:"/docs/sg/clean-architecture/ch13"},next:{title:"Ch15: \u4ec0\u9ebc\u662f\u67b6\u69cb",permalink:"/docs/sg/clean-architecture/ch15"}},c={},s=[{value:"(ADP) The Acyclic Dependencies Principle",id:"adp-the-acyclic-dependencies-principle",level:2},{value:"\u5faa\u74b0\u4f9d\u8cf4(Cycle)\u5728\u5143\u4ef6\u4f9d\u8cf4\u5716\u88e1\u7684\u5f71\u97ff",id:"\u5faa\u74b0\u4f9d\u8cf4cycle\u5728\u5143\u4ef6\u4f9d\u8cf4\u5716\u88e1\u7684\u5f71\u97ff",level:2},{value:"\u6253\u7834\u5faa\u74b0\u4f9d\u8cf4",id:"\u6253\u7834\u5faa\u74b0\u4f9d\u8cf4",level:3},{value:"(SDP) The Stable Dependencies Principle",id:"sdp-the-stable-dependencies-principle",level:2},{value:"\u7a69\u5b9a\u6027 (Stability)",id:"\u7a69\u5b9a\u6027-stability",level:2},{value:"Stability metrics",id:"stability-metrics",level:3},{value:"Abstractness Metric",id:"abstractness-metric",level:3},{value:"\u4e3b\u5e8f\u5217 The Main Sequence",id:"\u4e3b\u5e8f\u5217-the-main-sequence",level:2},{value:"\u75db\u82e6\u5340 The Zone of Pain",id:"\u75db\u82e6\u5340-the-zone-of-pain",level:2},{value:"\u6c92\u7528\u5340 The Zone of Uselessness",id:"\u6c92\u7528\u5340-the-zone-of-uselessness",level:2},{value:"Distance Metric",id:"distance-metric",level:2}],p={toc:s},u="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ch14-\u5143\u4ef6\u8026\u5408\u6027-component-coupling"},"Ch14: \u5143\u4ef6\u8026\u5408\u6027 (Component Coupling)"),(0,i.kt)("p",null,"\u8a0e\u8ad6 Component \u4e4b\u9593\u7684\u95dc\u4fc2\nOutline:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(ADP) The Acyclic Dependencies Principle"),(0,i.kt)("li",{parentName:"ul"},"(SDP) The Stable Dependencies Principle"),(0,i.kt)("li",{parentName:"ul"},"(SAP) The Stable Abstractions Principle"),(0,i.kt)("li",{parentName:"ul"},"Metrics: Management vs. random walks"),(0,i.kt)("li",{parentName:"ul"},"Components and Directory Structures"),(0,i.kt)("li",{parentName:"ul"},"Source code configuration system")),(0,i.kt)("h2",{id:"adp-the-acyclic-dependencies-principle"},"(ADP) The Acyclic Dependencies Principle"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Allow no cycles in the component dependency graph.")),(0,i.kt)("p",null,"\u65e9\u4e0a\u4e5d\u9ede\u4e0a\u73ed\uff0c\u52aa\u529b\u6e2c\u8a66\uff0c\u5168\u904e\u4e86\uff0c\u4e94\u9ede\u4e0b\u73ed\uff0c\u9694\u5929\u65e9\u4e0a\u8d77\u4f86\uff0cTest \u5168\u58de\u4e86"),(0,i.kt)("p",null,"\u89e3\u6c7a\u65b9\u6cd5:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Weekly Build\n\u5de5\u7a0b\u5e2b\u661f\u671f\u4e00\u5230\u56db\u4e0d\u7ba1\u5176\u4ed6\u4eba\uff0c\u5148\u5e79\u4e86\u518d\u8aaa\uff0c\u661f\u671f\u4e94\u5927\u5bb6\u4e00\u8d77\u4f86\u89e3\u6c7a Integration \u7684\u554f\u984c\n\u4f46\u662f\u7576\u5c08\u6848\u9577\u5927\u5230\u6211\u5011\u7121\u6cd5\u4e00\u5929\u89e3\u6c7a Integration \u7684\u6642\u5019\uff0c\u958b\u767c\u9031\u671f\u53ea\u80fd\u4e00\u76f4\u8b8a\u9577\uff0c\n\u958b\u767c\u8005\u53ca PM \u7684\u958b\u767c\u901f\u5ea6\u6703\u4e00\u76f4\u4e0b\u964d")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Eleminating Dependency Cycles\n\u628a\u958b\u767c\u74b0\u5883\u5340\u5206\u6210\u53ef\u91cb\u51fa\u7684\u5143\u4ef6 (releasable components), \u6bcf\u767c\u5e03\u4e00\u500b\u65b0\u7248\uff0c\u4f9d\u8cf4\u6539\u5143\u4ef6\u7684\u5718\u968a\n\u53ef\u4ee5\u81ea\u884c\u6c7a\u5b9a\u662f\u5426\u63a1\u7528\u8a72\u7248\u672c\uff0c\u4f46\u662f\u9019\u500b\u524d\u63d0\u662f\u7d55\u4e0d\u5141\u8a31\u5728\u7d50\u69cb\u4e2d\u7522\u751f\u5faa\u74b0\u4f9d\u8cf4\uff0c"))),(0,i.kt)("p",null,"See Figure 14.1 Typical component diagram"),(0,i.kt)("p",null,"It is a directed acyclic graph (DAG)."),(0,i.kt)("p",null,"\u9700\u8981\u767c\u5e03\u7cfb\u7d71\u6642\uff0c\u53ef\u4ee5\u7531\u4e0b\u800c\u4e0a\u9032\u884c\u7de8\u8b6f, \u6e2c\u8a66, \u767c\u5e03\uff0c\u5716\u4e2d\u4f8b\u5b50\u70ba Entities\uff0c\u63a5\u8457\u70ba Database \u8ddf Interactors"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Python \u76f8\u4f9d\u53ef\u8996\u5316\u5de5\u5177 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/thebjorn/pydeps"},"https://github.com/thebjorn/pydeps"))),(0,i.kt)("h2",{id:"\u5faa\u74b0\u4f9d\u8cf4cycle\u5728\u5143\u4ef6\u4f9d\u8cf4\u5716\u88e1\u7684\u5f71\u97ff"},"\u5faa\u74b0\u4f9d\u8cf4(Cycle)\u5728\u5143\u4ef6\u4f9d\u8cf4\u5716\u88e1\u7684\u5f71\u97ff"),(0,i.kt)("p",null,"See Figure 14.2 A dependency cycle"),(0,i.kt)("p",null,"\u767c\u5e03\u53ca\u6e2c\u8a66\u6703\u8b8a\u5f97\u975e\u5e38\u9ebb\u7169"),(0,i.kt)("h3",{id:"\u6253\u7834\u5faa\u74b0\u4f9d\u8cf4"},"\u6253\u7834\u5faa\u74b0\u4f9d\u8cf4"),(0,i.kt)("p",null,"\u6709\u5169\u500b\u65b9\u6cd5"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u4f9d\u8cf4\u53cd\u8f49\u539f\u5247(DIP)\uff0c\u5728\u571614.3\u4e2d\uff0c\u5275\u5efa\u4e00\u500b User \u985e\u9700\u8981\u4f7f\u7528\u7684\u63a5\u53e3\uff0c")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class User:\n    def __init__(self, permission: Permission):\n        self.permission = permission\n        self.permission.auth()\n\nclass Permission:\n    def auth():\n        pass\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class User:\n    def __init__(self, permission: IPermission):\n        self.permission = permission\n        self.permission.auth()\n\nclass IPermission(ABC):\n    @abstractmethod\n    def auth():\n        pass\n\nclass Permission(IPermission):\n    def auth():\n        pass\n\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u5275\u5efa\u4e00\u500b\u65b0 component\uff0c\u8b93 Authorizer \u8ddf Entities \u4f86\u4f9d\u8cf4")),(0,i.kt)("p",null,"See Figure 14.4 The new component that both Entities and Authorizer depend on"),(0,i.kt)("p",null,"\u5143\u4ef6\u67b6\u69cb\u662f\u96a8\u6642\u9593\u6f14\u9032\u7684\uff0c\u4ed6\u4e0d\u6703\u5728\u4e00\u958b\u59cb\u5c31\u8a2d\u8a08\u597d"),(0,i.kt)("h2",{id:"sdp-the-stable-dependencies-principle"},"(SDP) The Stable Dependencies Principle"),(0,i.kt)("p",null,"Depend in the direction of stability."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e00\u500b Component \u61c9\u8a72\u53ea\u4f9d\u8cf4\u6bd4\u81ea\u5df1\u672c\u8eab\u9084\u8981\u7a69\u5b9a\u7684 Component")),(0,i.kt)("p",null,"\u4efb\u4f55\u6211\u5011\u9810\u671f\u6703\u7d93\u5e38\u8b8a\u66f4\u7684 Component \u90fd\u4e0d\u61c9\u8a72\u88ab\u4e00\u500b\u96e3\u4ee5\u4fee\u6539\u7684\u7d44\u4ef6\u4f9d\u8cf4\uff0c\u5426\u5247\u9019\u500b\u591a\u8b8a\u7684\u7d44\u4ef6\u4e5f\u6703\u8b8a\u5f97\u96e3\u4ee5\u88ab\u4fee\u6539"),(0,i.kt)("p",null,"\u500b\u4eba\u611f\u60f3: \u5c31\u50cf API \u4e00\u6a23\uff0c\u4e00\u4f46\u88ab\u5225\u4eba\u7528\u4e86\uff0c\u5c31\u5f88\u96e3\u518d\u66f4\u6539\u4e86"),(0,i.kt)("h2",{id:"\u7a69\u5b9a\u6027-stability"},"\u7a69\u5b9a\u6027 (Stability)"),(0,i.kt)("p",null,"See Figure 14.5 X: a stable component"),(0,i.kt)("p",null,"See Figure 14.6 Y: a very unstable component"),(0,i.kt)("h3",{id:"stability-metrics"},"Stability metrics"),(0,i.kt)("p",null,"Fan-in: \u5165\u5411\u4f9d\u8cf4\nFan-out: \u51fa\u5411\u4f9d\u8cf4\nI: \u4e0d\u7a69\u5b9a\u6027(Instability): I = Fan-out / (Fan-in + Fan-out)"),(0,i.kt)("p",null,"I \u8d8a\u5c0f\uff0c\u4ee3\u8868\u88ab\u5f88\u591a Component \u4f9d\u8cf4\n\u53cd\u4e4b \u5247\u4f9d\u8cf4\u5176\u4ed6 Component"),(0,i.kt)("p",null,"See Figure 14.7 Our example"),(0,i.kt)("p",null,"Calculate for for cc:"),(0,i.kt)("p",null,"Fan-in = 3"),(0,i.kt)("p",null,"Fan-out = 1"),(0,i.kt)("p",null,"I = 1 / (3 + 1) = 1/4"),(0,i.kt)("p",null,"\u5728 C++ \u9019\u4e9b\u4f9d\u8cf4\u95dc\u4fc2\u901a\u904e #include \u8868\u9054\uff0c\u540c\u7406 Python \u7528 import"),(0,i.kt)("h1",{id:"\u4e26\u4e0d\u662f\u6240\u6709\u5143\u4ef6\u90fd\u61c9\u8a72\u662f\u7a69\u5b9a\u7684"},"\u4e26\u4e0d\u662f\u6240\u6709\u5143\u4ef6\u90fd\u61c9\u8a72\u662f\u7a69\u5b9a\u7684"),(0,i.kt)("p",null,"See Figure 14.8 An ideal configuration for a system with three components"),(0,i.kt)("p",null,"See Figure 14.9 SDP violation"),(0,i.kt)("p",null,"See Figure 14.10 U within Stable uses C within Flexible"),(0,i.kt)("p",null,"See Figure 14.11 C implements the interface class US"),(0,i.kt)("h1",{id:"the-stable-abstrations-principle"},"The Stable Abstrations Principle"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A component should be as abstract as it is stable")),(0,i.kt)("p",null,"\u8d8a\u7a69\u5b9a\u7684\u985e\u5225\u61c9\u542b\u6709\u8d8a\u591a\u7684\u62bd\u8c61\u985e\u5225"),(0,i.kt)("p",null,"\u8d8a\u4e0d\u7a69\u5b9a\u7684\u985e\u5225\uff0c\u62bd\u8c61\u985e\u5225\u8d8a\u5c11"),(0,i.kt)("h3",{id:"abstractness-metric"},"Abstractness Metric"),(0,i.kt)("p",null,"A = Na / N"),(0,i.kt)("p",null,"Na = \u62bd\u8c61 class \u7684\u6578\u91cf"),(0,i.kt)("p",null,"N  = \u6240\u6709 class \u7684\u6578\u91cf"),(0,i.kt)("h2",{id:"\u4e3b\u5e8f\u5217-the-main-sequence"},"\u4e3b\u5e8f\u5217 The Main Sequence"),(0,i.kt)("p",null,"Figure 14.12 The I/A graph"),(0,i.kt)("p",null,"Figure 14.13 Zones of exclusion"),(0,i.kt)("h2",{id:"\u75db\u82e6\u5340-the-zone-of-pain"},"\u75db\u82e6\u5340 The Zone of Pain"),(0,i.kt)("p",null,"\u50cf Database Schema\uff0c\u975e\u5e38\u5177\u9ad4\uff0c\u6bcf\u500b\u4eba\u90fd\u4f9d\u8cf4\u4ed6\uff0c\u4e14\u975e\u5e38\u96e3\u6539\n\u50cf String, Integer\uff0c\u5982\u679c\u4f60\u4e0d\u6539\uff0c\u90a3\u5c31\u4e0d\u9700\u8981\u62bd\u8c61\u4e86\uff0c\u843d\u5728\u75db\u82e6\u5340\u4e5f\u6c92\u95dc\u4fc2"),(0,i.kt)("h2",{id:"\u6c92\u7528\u5340-the-zone-of-uselessness"},"\u6c92\u7528\u5340 The Zone of Uselessness"),(0,i.kt)("p",null,"\u901a\u5e38\u767c\u751f\u5728\u67d0\u500b\u6c92\u6709\u4eba\u5be6\u73fe\u7684\u62bd\u8c61\u985e\u5225\uff0c\u4ed6\u5c31\u8eba\u5728\u90a3"),(0,i.kt)("p",null,"\u8acb\u907f\u958b\u75db\u82e6\u5340\u8ddf\u6c92\u7528\u5340\uff0c\u76e1\u91cf\u8cbc\u8fd1\u65bc\u4e3b\u5e8f\u5217\u5340"),(0,i.kt)("h2",{id:"distance-metric"},"Distance Metric"),(0,i.kt)("p",null,"D = | A + I - 1 |\n\u5c31\u662f\u96e2\u4e3b\u5e8f\u5217\u7dda\u7684\u8ddd\u96e2"),(0,i.kt)("p",null,"\u7d50\u8ad6\uff1a\u672c\u7ae0\u4ecb\u7d39\u5404\u7a2e\u7528\u65bc\u4f9d\u8cf4\u95dc\u4fc2\u7ba1\u7406\u7684\u6307\u6a19\uff0c\u6709\u4e9b\u4f9d\u8cf4\u597d\uff0c\u6709\u4e9b\u4e0d\u597d"))}h.isMDXComponent=!0}}]);