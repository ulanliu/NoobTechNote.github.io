"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[9043],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>h});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},c="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=p(n),m=l,h=c["".concat(s,".").concat(m)]||c[m]||k[m]||r;return n?a.createElement(h,i(i({ref:e},u),{},{components:n})):a.createElement(h,i({ref:e},u))}));function h(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[c]="string"==typeof t?t:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38379:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const r={title:"Ch6: \u5206\u4f48\u5f0f\u5171\u8b58\u7b97\u6cd5",tsidebar_label:"Ch6: \u5206\u4f48\u5f0f\u5171\u8b58\u7b97\u6cd5",sidebar_position:7},i="\u5206\u4f48\u5f0f\u5171\u8b58\u7b97\u6cd5",o={unversionedId:"sg/fenix-architecture/ch6",id:"sg/fenix-architecture/ch6",title:"Ch6: \u5206\u4f48\u5f0f\u5171\u8b58\u7b97\u6cd5",description:"\u9019\u7bc0\u6703\u4ecb\u7d39\u5169\u4e09\u7a2e\u5177\u4ee3\u8868\u6027\u7684\u5206\u4f48\u5f0f\u5171\u8b58\u7b97\u6cd5\uff0c\u70ba\u5f8c\u7e8c\u6253\u597d\u57fa\u790e\u3002",source:"@site/docs/sg/fenix-architecture/ch6.md",sourceDirName:"sg/fenix-architecture",slug:"/sg/fenix-architecture/ch6",permalink:"/docs/sg/fenix-architecture/ch6",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/fenix-architecture/ch6.md",tags:[],version:"current",lastUpdatedBy:"sc0ttie",lastUpdatedAt:1704010887,formattedLastUpdatedAt:"Dec 31, 2023",sidebarPosition:7,frontMatter:{title:"Ch6: \u5206\u4f48\u5f0f\u5171\u8b58\u7b97\u6cd5",tsidebar_label:"Ch6: \u5206\u4f48\u5f0f\u5171\u8b58\u7b97\u6cd5",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Ch5: \u67b6\u69cb\u5b89\u5168\u6027",permalink:"/docs/sg/fenix-architecture/ch5"},next:{title:"Ch7: \u5f9e\u51fd\u5f0f\u5eab\u5230\u670d\u52d9",permalink:"/docs/sg/fenix-architecture/ch7"}},s={},p=[{value:"Consensus vs. Consistency",id:"consensus-vs-consistency",level:4},{value:"6.1 Paxos",id:"61-paxos",level:2},{value:"\u7b97\u6cd5\u6d41\u7a0b",id:"\u7b97\u6cd5\u6d41\u7a0b",level:3},{value:"\u5de5\u4f5c\u5b9e\u4f8b",id:"\u5de5\u4f5c\u5b9e\u4f8b",level:2},{value:"6.2 Multi Paxos",id:"62-multi-paxos",level:2},{value:"6.3 Gossip \u5354\u8b70",id:"63-gossip-\u5354\u8b70",level:2}],u={toc:p},c="wrapper";function k(t){let{components:e,...r}=t;return(0,l.kt)(c,(0,a.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5206\u4f48\u5f0f\u5171\u8b58\u7b97\u6cd5"},"\u5206\u4f48\u5f0f\u5171\u8b58\u7b97\u6cd5"),(0,l.kt)("p",null,"\u9019\u7bc0\u6703\u4ecb\u7d39\u5169\u4e09\u7a2e\u5177\u4ee3\u8868\u6027\u7684\u5206\u4f48\u5f0f\u5171\u8b58\u7b97\u6cd5\uff0c\u70ba\u5f8c\u7e8c\u6253\u597d\u57fa\u790e\u3002\n\u5148\u5f9e\u4e00\u500b\u6dfa\u986f\u7684\u5834\u666f\uff0c\u5f15\u51fa\u672c\u7ae0\u7684\u4e3b\u984c"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Q: \u5982\u679c\u4f60\u6709\u4e00\u4efd\u5f88\u91cd\u8981\u7684\u6578\u64da\uff0c\u8981\u78ba\u4fdd\u5b83\u9577\u671f\u5b58\u5132\u5728\u96fb\u8166\u4e0a\u4e0d\u6703\u4e1f\u5931\uff0c\u4f60\u6703\u600e\u9ebd\u505a\uff1f\nA: \u591a\u8cb7\u5e7e\u584a\u786c\u789f\u3002\u5047\u8a2d\u4e00\u584a\u786c\u789f\u6bcf\u5e74\u640d\u58de\u7684\u6a5f\u7387\u662f5\uff05\uff0c\u90a3\u628a\u6587\u4ef6\u8907\u88fd\u5230\u53e6\u5916\u4e00\u584a\u786c\u789f\u4e0a\uff0c\n\u5169\u500b\u786c\u789f\u540c\u6642\u58de\u6389\u800c\u640d\u5931\u8cc7\u6599\u7684\u6a5f\u7387\u53ea\u67090.25\uff05\uff0c3\u500b0.0125\uff05\uff0c4\u500b0.000625\uff05\uff0c\n\u4e5f\u5c31\u662f\u4e00\u5e74\u5167\u6709\u8d85\u904e99.999\uff05\u7684\u6a5f\u7387\u662f\u4e0d\u6703\u540c\u6642\u640d\u5931\u6578\u64da\u7684\u3002")),(0,l.kt)("p",null,"\u8edf\u9ad4\u7cfb\u7d71\u88e1\uff0c\u4fdd\u969c\u53ef\u9760\u6027\u8ddf\u53ef\u7528\u6027\u6703\u9762\u81e8\u7684\u56f0\u96e3\uff1a\n",(0,l.kt)("strong",{parentName:"p"},"\u53ef\u9760\u6027")," "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7a0b\u5e8f\u51fa\u932f"),(0,l.kt)("li",{parentName:"ul"},"\u786c\u789f\u640d\u58de"),(0,l.kt)("li",{parentName:"ul"},"\u7db2\u8def\u5206\u5340"),(0,l.kt)("li",{parentName:"ul"},"\u96fb\u6e90\u6545\u969c\n\u89e3\u6c7a\u65b9\u6cd5: \u589e\u52a0\u64c1\u6709\u540c\u6a23\u526f\u672c\u7684\u6a5f\u5668\u6578\u91cf\n\u8207\u786c\u789f\u5099\u4efd\u7684\u65b9\u6cd5\u76f8\u6bd4\uff0c\u6709\u672c\u8cea\u4e0a\u7684\u5340\u5225")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u4f60\u6709\u4e00\u4efd\u6703\u96a8\u6642\u8b8a\u52d5\u7684\u6578\u64da\uff0c\u8981\u78ba\u4fdd\u5b83\u6b63\u78ba\u5730\u5b58\u5132\u65bc\u7db2\u7d61\u4e2d\u7684\u5e7e\u81fa\u4e0d\u540c\u6a5f\u5668\u4e4b\u4e0a\uff0c\u4f60\u6703\u600e\u9ebd\u505a\uff1f")),(0,l.kt)("p",null,"\u6700\u5bb9\u6613\u60f3\u5230\u7684\u7b54\u6848: \u6578\u64da\u540c\u6b65"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"2PC/3PC"),(0,l.kt)("li",{parentName:"ul"},"MySQL Cluster\n\u4ee5\u540c\u6b65\u70ba\u4ee3\u8868\u7684\u6578\u64da\u8907\u88fd\u65b9\u6cd5\uff0c\u88ab\u7a31\u70ba\u72c0\u614b\u8f49\u79fb (State Transfer)\uff0c\u4f46\u901a\u5e38\u6703\u72a7\u7272\u53ef\u7528\u6027\u3002\n\u9019\u5f80\u5f80\u4e0d\u80fd\u5920\u63a5\u53d7\uff0c\u4e00\u4e9b\u7cfb\u7d71\u53ef\u80fd\u8981\u6c42\u898199.999999\uff05\u53ef\u9760\uff0c\u540c\u6642\u4e5f\u8981\u9054\u523099.999\uff05\u53ef\u7528")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u4f60\u6709\u4e00\u4efd\u6703\u96a8\u6642\u8b8a\u52d5\u7684\u6578\u64da\uff0c\u8981\u78ba\u4fdd\u5b83\u6b63\u78ba\u5730\u5b58\u5132\u65bc\u7db2\u7d61\u4e2d\u7684\u5e7e\u53f0\u4e0d\u540c\u6a5f\u5668\u4e4b\u4e0a\uff0c\u4e26\u4e14\u8981\u76e1\u53ef\u80fd\u4fdd\u8b49\u6578\u64da\u662f\u96a8\u6642\u53ef\u7528\u7684\uff0c\u4f60\u6703\u600e\u9ebd\u505a\uff1f")),(0,l.kt)("p",null,"\u5206\u5e03\u5f0f\u7cfb\u7d71\u4e3b\u6d41\u5f0f\u900f\u904e\u64cd\u4f5c\u8f49\u79fb(Operation Transfer)\uff0c\u900f\u904e\u67d0\u7a2e\u64cd\u4f5c\uff0c\u6700\u7d42\u8f49\u63db\u70ba\u76ee\u6a19\u72c0\u614b\u3002\u4f7f\u7528\u78ba\u5b9a\u7684\u64cd\u4f5c\uff0c\u4f7f\u72c0\u614b\u9593\u7522\u751f\u78ba\u5b9a\u7684\u8f49\u79fb\u8a08\u7b97\u7d50\u679c\uff0c\u5728CS\u9818\u57df\u7a31\u70ba\u72c0\u614b\u6a5f (State machine)"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u984d\u5916\u77e5\u8b58\uff1a\u72c0\u614b\u6a5f\u5fa9\u88fd\n\u72c0\u614b\u6a5f\u6709\u4e00\u500b\u7279\u6027\uff1a\u4efb\u4f55\u521d\u59cb\u72c0\u614b\u4e00\u6a23\u7684\u72c0\u614b\u6a5f\uff0c\u5982\u679c\u57f7\u884c\u7684\u547d\u4ee4\u5e8f\u5217\u4e00\u6a23\uff0c\u5247\u6700\u7d42\u9054\u5230\u7684\u72c0\u614b\u4e5f\u4e00\u6a23\u3002\u5982\u679c\u5c07\u6b64\u7279\u6027\u61c9\u7528\u5728\u591a\u53c3\u8207\u8005\u9032\u884c\u5354\u5546\u5171\u8b58\u4e0a\uff0c\u53ef\u4ee5\u7406\u89e3\u70ba\u7cfb\u7d71\u4e2d\u5b58\u5728\u591a\u500b\u5177\u6709\u5b8c\u5168\u76f8\u540c\u7684\u72c0\u614b\u6a5f\uff08\u53c3\u8207\u8005\uff09\uff0c\u9019\u4e9b\u72c0\u614b\u6a5f\u80fd\u6700\u7d42\u4fdd\u6301\u4e00\u81f4\u7684\u95dc\u9375\u5c31\u662f\u8d77\u59cb\u72c0\u614b\u5b8c\u5168\u4e00\u81f4\u548c\u57f7\u884c\u547d\u4ee4\u5e8f\u5217\u5b8c\u5168\u4e00\u81f4\u3002")),(0,l.kt)("p",null,"\u6839\u64da\u72c0\u614b\u6a5f\u7684\u7279\u6027\uff0c\u8981\u8b93\u591a\u81fa\u6a5f\u5668\u7684\u6700\u7d42\u72c0\u614b\u4e00\u81f4\uff0c\u53ea\u8981\u78ba\u4fdd\u5b83\u5011\u7684\u521d\u59cb\u72c0\u614b\u662f\u4e00\u81f4\u7684\uff0c\u4e26\u4e14\u63a5\u6536\u5230\u7684\u64cd\u4f5c\u6307\u4ee4\u5e8f\u5217\u4e5f\u662f\u4e00\u81f4\u7684\u5373\u53ef\uff0c\u7121\u8ad6\u9019\u500b\u64cd\u4f5c\u6307\u4ee4\u662f\u65b0\u589e\u3001\u4fee\u6539\u3001\u522a\u9664\u6291\u6216\u662f\u5176\u4ed6\u4efb\u4f55\u53ef\u80fd\u7684\u7a0b\u5e8f\u884c\u70ba\uff0c\u90fd\u53ef\u4ee5\u7406\u89e3\u70ba\u8981\u5c07\u4e00\u9023\u4e32\u7684\u64cd\u4f5c\u65e5\u8a8c\u6b63\u78ba\u5730\u5ee3\u64ad\u7d66\u5404\u500b\u5206\u5e03\u5f0f\u7bc0\u9ede\u3002\u5ee3\u64ad\u6307\u4ee4\u8207\u6307\u4ee4\u57f7\u884c\u671f\u9593\uff0c\u5141\u8a31\u7cfb\u7d71\u5167\u90e8\u72c0\u614b\u5b58\u5728\u4e0d\u4e00\u81f4\u7684\u60c5\u6cc1\uff0c\u5373\u4e26\u4e0d\u8981\u6c42\u6240\u6709\u7bc0\u9ede\u7684\u6bcf\u4e00\u689d\u6307\u4ee4\u90fd\u662f\u540c\u6642\u958b\u59cb\u3001\u540c\u6b65\u5b8c\u6210\u7684\uff0c\u53ea\u8981\u6c42\u5728\u6b64\u671f\u9593\u7684\u5167\u90e8\u72c0\u614b\u4e0d\u80fd\u88ab\u5916\u90e8\u89c0\u5bdf\u5230\uff0c\u4e14\u7576\u64cd\u4f5c\u6307\u4ee4\u5e8f\u5217\u57f7\u884c\u5b8c\u7562\u6642\uff0c\u6240\u6709\u7bc0\u9ede\u7684\u6700\u7d42\u7684\u72c0\u614b\u662f\u4e00\u81f4\u7684\uff0c\u9019\u7a2e\u6a21\u578b\u5c31\u88ab\u7a31\u70ba\u72c0\u614b\u6a5f\u5fa9\u88fd\uff08State Machine Replication\uff09\u3002"),(0,l.kt)("p",null,"\u8003\u616e\u5230\u5206\u5e03\u5f0f\u74b0\u5883\u4e0b\u7db2\u7d61\u5206\u5340\u73fe\u8c61\u662f\u4e0d\u53ef\u80fd\u6d88\u9664\u7684\uff0c\u751a\u81f3\u5141\u8a31\u4e0d\u518d\u8ffd\u6c42\u7cfb\u7d71\u5167\u6240\u6709\u7bc0\u9ede\u5728\u4efb\u4f55\u60c5\u6cc1\u4e0b\u7684\u6578\u64da\u72c0\u614b\u90fd\u4e00\u81f4\uff0c\u800c\u662f\u91c7\u7528\u300c\u5c11\u6578\u670d\u5f9e\u591a\u6578\u300d\u7684\u539f\u5247\uff0c\n\u4e00\u65e6\u7cfb\u7d71\u4e2d\u904e\u534a\u6578\u7684\u7bc0\u9ede\u4e2d\u5b8c\u6210\u4e86\u72c0\u614b\u7684\u8f49\u63db\uff0c\u5c31\u8a8d\u70ba\u6578\u64da\u7684\u8b8a\u5316\u5df2\u7d93\u88ab\u6b63\u78ba\u5730\u5b58\u5132\u5728\u7cfb\u7d71\u7576\u4e2d\uff0c\u9019\u7a2e\u601d\u60f3\u7a31\u70ba",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Quorum_(distributed_computing)"},"Quorum"),"\u6a5f\u88fd"),(0,l.kt)("p",null,"Quorum \u82f1\u6587\u88e1\u662f\u6cd5\u5b9a\u4eba\u6578\u7684\u610f\u601d"),(0,l.kt)("h4",{id:"consensus-vs-consistency"},"Consensus vs. Consistency"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e00\u81f4\u6027(Consistency) \u662f\u6307\u6578\u64da\u4e0d\u540c\u526f\u672c\u4e4b\u9593\u7684\u5dee\u7570"),(0,l.kt)("li",{parentName:"ul"},"\u5171\u8b58\uff08Consensus\uff09\u662f\u6307\u9054\u6210\u4e00\u81f4\u6027\u7684\u65b9\u6cd5\u8207\u904e\u7a0b")),(0,l.kt)("p",null,"\u5206\u5e03\u5f0f\u4e00\u81f4\u6027\u7b97\u6cd5 == \u201cDistributed Consensus Algorithm\u201d"),(0,l.kt)("p",null,"Recap:\n\u53ef\u9760\u6027\u5728\u5206\u5e03\u5f0f\u7cfb\u7d71\u6703\u9047\u5230\u66f4\u591a\u6311\u6230 -> \u4fdd\u6301\u4e0d\u540c\u6a5f\u5668\u6240\u6709\u72c0\u614b\u4e00\u81f4\u518d\u958b\u59cb\u904b\u4f5c\u6703\u964d\u4f4e\u53ef\u7528\u6027 -> \u8003\u616e\u63a1\u7528\u72c0\u614b\u6a5f\u8907\u88fd -> \u4f46\u7db2\u8def\u5206\u5340\u4e0d\u53ef\u80fd\u6d88\u9664\uff0c\u65bc\u662f\u5f15\u9032Quorum"),(0,l.kt)("h2",{id:"61-paxos"},"6.1 Paxos"),(0,l.kt)("p",null,"\u53c3\u8003\u8cc7\u6599:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=BhosKsE8up8&t=4545s&ab_channel=BitTiger%E5%AE%98%E6%96%B9%E9%A2%91%E9%81%93BitTigerOfficialChannel"},"https://www.youtube.com/watch?v=BhosKsE8up8&t=4545s&ab_channel=BitTiger%E5%AE%98%E6%96%B9%E9%A2%91%E9%81%93BitTigerOfficialChannel")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=d7nAGI_NZPk&ab_channel=GoogleTechTalks"},"https://www.youtube.com/watch?v=d7nAGI_NZPk&ab_channel=GoogleTechTalks"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"consensus-vs-2pc",src:n(42834).Z,width:"2880",height:"1800"}),"\n\u767c\u660e\u8005 Leslie Lamport (LaTeX \u7684 La)\uff0cPaxos \u5e7e\u4e4e\u5c31\u662f Consensus \u7684\u4ee3\u540d\u8a5e\uff0c"),(0,l.kt)("h3",{id:"\u7b97\u6cd5\u6d41\u7a0b"},"\u7b97\u6cd5\u6d41\u7a0b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u63d0\u6848\u7bc0\u9ede\uff1a\u7a31\u70ba Proposer\uff0c\u63d0\u51fa\u5c0d\u67d0\u500b\u503c\u9032\u884c\u8a2d\u7f6e\u64cd\u4f5c\u7684\u7bc0\u9ede\uff0c\u8a2d\u7f6e\u503c\u9019\u500b\u884c\u70ba\u5c31\u88ab\u7a31\u4e4b\u70ba\u63d0\u6848\uff08Proposal\uff09\uff0c\u503c\u4e00\u65e6\u8a2d\u7f6e\u6210\u529f\uff0c\u5c31\u662f\u4e0d\u6703\u4e1f\u5931\u4e5f\u4e0d\u53ef\u8b8a\u7684\u3002\uff0c\u61c9\u8a72\u985e\u6bd4\u6210\u65e5\u8a8c\u8a18\u9304\u64cd\u4f5c\uff0c\u5728\u5f8c\u9762\u4ecb\u7d39\u7684 Raft \u7b97\u6cd5\u4e2d\u5c31\u76f4\u63a5\u628a\u300c\u63d0\u6848\u300d\u53eb\u4f5c\u300c\u65e5\u8a8c\u300d\u4e86\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6c7a\u7b56\u7bc0\u9ede\uff1a\u7a31\u70ba Acceptor\uff0c\u662f\u61c9\u7b54\u63d0\u6848\u7684\u7bc0\u9ede\uff0c\u6c7a\u5b9a\u8a72\u63d0\u6848\u662f\u5426\u53ef\u88ab\u6295\u7968\u3001\u662f\u5426\u53ef\u88ab\u63a5\u53d7\u3002\u63d0\u6848\u4e00\u65e6\u5f97\u5230\u904e\u534a\u6578\u6c7a\u7b56\u7bc0\u9ede\u7684\u63a5\u53d7\uff0c\u5373\u7a31\u8a72\u63d0\u6848\u88ab\u6279\u6e96\uff08Accept\uff09\uff0c\u63d0\u6848\u88ab\u6279\u6e96\u5373\u610f\u5473\u8457\u8a72\u503c\u4e0d\u80fd\u518d\u88ab\u66f4\u6539\uff0c\u4e5f\u4e0d\u6703\u4e1f\u5931\uff0c\u4e14\u6700\u7d42\u6240\u6709\u7bc0\u9ede\u90fd\u6703\u63a5\u53d7\u8a72\u5b83\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8a18\u9304\u7bc0\u9ede\uff1a\u88ab\u7a31\u70ba Learner\uff0c\u4e0d\u53c3\u8207\u63d0\u6848\uff0c\u4e5f\u4e0d\u53c3\u8207\u6c7a\u7b56\uff0c\u53ea\u662f\u55ae\u7d14\u5730\u5f9e\u63d0\u6848\u3001\u6c7a\u7b56\u7bc0\u9ede\u4e2d\u5b78\u7fd2\u5df2\u7d93\u9054\u6210\u5171\u8b58\u7684\u63d0\u6848\uff0c\u8b6c\u5982\u5c11\u6578\u6d3e\u7bc0\u9ede\u5f9e\u7db2\u7d61\u5206\u5340\u4e2d\u6062\u5fa9\u6642\uff0c\u5c07\u6703\u9032\u5165\u9019\u7a2e\u72c0\u614b\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"paxos-google-slides-1",src:n(29813).Z,width:"1920",height:"1080"})),(0,l.kt)("h2",{id:"\u5de5\u4f5c\u5b9e\u4f8b"},"\u5de5\u4f5c\u5b9e\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://ongardie.net/static/raft/userstudy/paxos.pdf"},"https://ongardie.net/static/raft/userstudy/paxos.pdf"),"\nslides: 13, 14, 15, 16"),(0,l.kt)("p",null,"\u7f3a\u9ede\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53ea\u80fd\u5c0d\u55ae\u500b\u503c\u5f62\u6210\u6c7a\u8b70"),(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u5169\u6b21\u7db2\u8def\u8acb\u6c42\u548c\u61c9\u9054"),(0,l.kt)("li",{parentName:"ul"},"\u9ad8\u4f75\u767c\u60c5\u6cc1\u53ef\u80fd\u5f62\u6210\u6d3b\u9396")),(0,l.kt)("p",null,"\u4e0b\u4e00\u7bc0\u4ecb\u7d39 Multi-Paxos \u548c\u4e00\u4e9b\u7406\u8ad6\u4e0a\u7b49\u50f9\u7684\u6f14\u7b97\u6cd5 (Raft, ZAB)"),(0,l.kt)("h2",{id:"62-multi-paxos"},"6.2 Multi Paxos"),(0,l.kt)("p",null,"Basic Paxos\u554f\u984c: \u6d3b\u9396\n\u554f\u984c\u6839\u6e90\uff1a\u6bcf\u500b\u63d0\u6848\u7bc0\u9ede\u90fd\u662f\u5e73\u7b49\u7684\n\u89e3\u6c7a\uff1a\u5728\u5e73\u7b49\u7bc0\u9ede\u6311\u4e00\u500b\u610f\u898b\u9818\u8896"),(0,l.kt)("p",null,"Multi Paxos \u5c0d Basic Paxos \u7684\u6838\u5fc3\u6539\u9032\u662f\u589e\u52a0\u4e86\u300c\u9078\u4e3b\u300d\u7684\u904e\u7a0b\uff0c\u63d0\u6848\u7bc0\u9ede\u6703\u901a\u904e\u5b9a\u6642\u8f2a\u8a62\uff08\u5fc3\u8df3\uff09\uff0c\u78ba\u5b9a\u7576\u524d\u7db2\u7d61\u4e2d\u7684\u6240\u6709\u7bc0\u9ede\u88cf\u662f\u5426\u5b58\u5728\u6709\u4e00\u500b\u4e3b\u63d0\u6848\u7bc0\u9ede\uff0c\u4e00\u65e6\u6c92\u6709\u767c\u73fe\u4e3b\u7bc0\u9ede\u5b58\u5728\uff0c\u7bc0\u9ede\u5c31\u6703\u5728\u5fc3\u8df3\u8d85\u6642\u5f8c\u4f7f\u7528 Basic Paxos \u4e2d\u5b9a\u7fa9\u7684\u6e96\u5099\u3001\u6279\u6e96\u7684\u5169\u8f2a\u7db2\u7d61\u4ea4\u4e92\u904e\u7a0b\uff0c\u5411\u6240\u6709\u5176\u4ed6\u7bc0\u9ede\u5ee3\u64ad\u81ea\u5df1\u5e0c\u671b\u7af6\u9078\u4e3b\u7bc0\u9ede\u7684\u8acb\u6c42\uff0c\u5e0c\u671b\u6574\u500b\u5206\u5e03\u5f0f\u7cfb\u7d71\u5c0d\u300c\u7531\u6211\u4f5c\u70ba\u4e3b\u7bc0\u9ede\u300d\u9019\u4ef6\u4e8b\u60c5\u5354\u5546\u9054\u6210\u4e00\u81f4\u5171\u8b58\uff0c\u5982\u679c\u5f97\u5230\u4e86\u6c7a\u7b56\u7bc0\u9ede\u4e2d\u591a\u6578\u6d3e\u7684\u6279\u6e96\uff0c\u4fbf\u5ba3\u544a\u7af6\u9078\u6210\u529f\u3002"),(0,l.kt)("p",null,"\u7576\u9078\u4e3b\u5b8c\u6210\u4e4b\u5f8c\uff0c\u9664\u975e\u4e3b\u7bc0\u9ede\u5931\u806f\u4e4b\u5f8c\u767c\u8d77\u91cd\u65b0\u7af6\u9078\uff0c\u5426\u5247\u5f9e\u6b64\u5f80\u5f8c\uff0c\u5c31\u53ea\u6709\u4e3b\u7bc0\u9ede\u672c\u8eab\u624d\u80fd\u5920\u63d0\u51fa\u63d0\u6848\u3002\u6b64\u6642\uff0c\u7121\u8ad6\u54ea\u500b\u63d0\u6848\u7bc0\u9ede\u63a5\u6536\u5230\u5ba2\u6236\u7aef\u7684\u64cd\u4f5c\u8acb\u6c42\uff0c\u90fd\u6703\u5c07\u8acb\u6c42\u8f49\u767c\u7d66\u4e3b\u7bc0\u9ede\u4f86\u5b8c\u6210\u63d0\u6848\uff0c\u800c\u4e3b\u7bc0\u9ede\u63d0\u6848\u7684\u6642\u5019\uff0c\u4e5f\u5c31\u7121\u9700\u518d\u6b21\u7d93\u904e\u6e96\u5099\u904e\u7a0b\uff0c\u56e0\u70ba\u53ef\u4ee5\u8996\u4f5c\u662f\u7d93\u904e\u9078\u8209\u6642\u7684\u90a3\u4e00\u6b21\u6e96\u5099\u4e4b\u5f8c\uff0c\u5f8c\u7e8c\u7684\u63d0\u6848\u90fd\u662f\u5c0d\u76f8\u540c\u63d0\u6848 ID \u7684\u4e00\u9023\u4e32\u7684\u6279\u6e96\u904e\u7a0b\u3002\u4e5f\u53ef\u4ee5\u901a\u4fd7\u7406\u89e3\u70ba\u9078\u4e3b\u904e\u5f8c\uff0c\u5c31\u4e0d\u6703\u518d\u6709\u5176\u4ed6\u7bc0\u9ede\u8207\u5b83\u7af6\u722d\uff0c\u76f8\u7576\u65bc\u662f\u8655\u65bc\u7121\u4e26\u767c\u7684\u74b0\u5883\u7576\u4e2d\u9032\u884c\u7684\u6709\u5e8f\u64cd\u4f5c\uff0c\u6240\u4ee5\u6b64\u6642\u7cfb\u7d71\u4e2d\u8981\u5c0d\u67d0\u500b\u503c\u9054\u6210\u4e00\u81f4\uff0c\u53ea\u9700\u8981\u9032\u884c\u4e00\u6b21\u6279\u6e96\u7684\u4ea4\u4e92\u5373\u53ef\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"6-6-multi-paxos-time.png",src:n(98848).Z,width:"961",height:"433"})),(0,l.kt)("p",null,"\u601d\u8003\u300c\u5206\u5e03\u5f0f\u7cfb\u7d71\u4e2d\u5982\u4f55\u5c0d\u67d0\u500b\u503c\u9054\u6210\u4e00\u81f4\u300d\u9019\u500b\u554f\u984c\uff0c\u53ef\u4ee5\u628a\u8a72\u554f\u984c\u5283\u5206\u505a\u4e09\u500b\u5b50\u554f\u984c\u4f86\u8003\u616e\uff0c\u53ef\u4ee5\u8b49\u660e\uff08\u5177\u9ad4\u8b49\u660e\u5c31\u4e0d\u5217\u5728\u9019\u88cf\u4e86\uff0c\u611f\u8208\u8da3\u7684\u8b80\u8005\u53ef\u53c3\u8003\u7d50\u5c3e\u7d66\u51fa\u7684\u8ad6\u6587\uff09\u7576\u4ee5\u4e0b\u4e09\u500b\u554f\u984c\u540c\u6642\u88ab\u89e3\u6c7a\u6642\uff0c\u5373\u7b49\u50f9\u65bc\u9054\u6210\u5171\u8b58\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u4f55\u9078\u4e3b\uff08Leader Election\uff09\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u4f55\u628a\u6578\u64da\u5fa9\u88fd\u5230\u5404\u500b\u7bc0\u9ede\u4e0a\uff08Entity Replication\uff09\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u4f55\u4fdd\u8b49\u904e\u7a0b\u662f\u5b89\u5168\u7684\uff08Safety\uff09\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u9078\u4e3b\uff1a\u7528 Paxos")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6578\u64da\u8907\u88fd\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"heartbeat"),(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5b50\uff1a\u7db2\u8def\u5206\u5340"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5b89\u5168"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'\u5354\u5b9a\u6027\uff08Safety\uff09\uff1a\u6240\u6709\u7684\u58de\u4e8b\u90fd\u4e0d\u6703\u767c\u751f\uff08something "bad" will never happen\uff09\u3002',(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4fdd\u8b49\u4e86\u9078\u4e3b\u7684\u7d50\u679c\u4e00\u5b9a\u662f\u6709\u4e14\u53ea\u6709\u552f\u4e00\u7684\u4e00\u500b\u4e3b\u7bc0\u9ede\uff0c\u4e0d\u53ef\u80fd\u540c\u6642\u51fa\u73fe\u5169\u500b\u4e3b\u7bc0\u9ede"))),(0,l.kt)("li",{parentName:"ul"},'\u7d42\u6b62\u6027\uff08Liveness\uff09\uff1a\u6240\u6709\u7684\u597d\u4e8b\u90fd\u7d42\u5c07\u767c\u751f\uff0c\u4f46\u4e0d\u77e5\u9053\u662f\u5565\u6642\u5019\uff08something "good" will must happen, but we don\'t know when\uff09\u3002',(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4fdd\u8b49\u9078\u4e3b\u904e\u7a0b\u662f\u4e00\u5b9a\u53ef\u4ee5\u5728\u67d0\u500b\u6642\u523b\u80fd\u5920\u7d50\u675f\u7684\u3002")))))),(0,l.kt)("p",null,"\u4ee5\u4e0a\u8ff0\u4e09\u500b\u554f\u984c\u4f86\u601d\u8003\u5171\u8b58\u7b97\u6cd5\uff0c\u5373\u70baRaft\u7b97\u6cd5\nRaft: ",(0,l.kt)("a",{parentName:"p",href:"https://web.stanford.edu/~ouster/cgi-bin/papers/raft-atc14"},"https://web.stanford.edu/~ouster/cgi-bin/papers/raft-atc14")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://thesecretlivesofdata.com/"},"http://thesecretlivesofdata.com/")),(0,l.kt)("p",null,"\u5f8c\u4f86\u66f4\u6210\u70ba Etcd\u3001LogCabin\u3001Consul \u7b49\u91cd\u8981\u5206\u5e03\u5f0f\u7a0b\u5e8f\u7684\u5be6\u73fe\u57fa\u790e\uff0cZooKeeper \u7684 ZAB \u7b97\u6cd5\u8207 Raft \u7684\u601d\u8def\u4e5f\u975e\u5e38\u985e\u4f3c\uff0c\u9019\u4e9b\u7b97\u6cd5\u90fd\u88ab\u8a8d\u70ba\u662f Multi Paxos \u7684\u7b49\u50f9\u6d3e\u751f\u5be6\u73fe\u3002"),(0,l.kt)("h2",{id:"63-gossip-\u5354\u8b70"},"6.3 Gossip \u5354\u8b70"),(0,l.kt)("p",null,"Paxos\u3001Raft\u3001ZAB \u7b49\u5206\u5e03\u5f0f\u7b97\u6cd5\u7d93\u5e38\u6703\u88ab\u7a31\u4f5c\u662f\u300c\u5f37\u4e00\u81f4\u6027\u300d\u7684\u5206\u5e03\u5f0f\u5171\u8b58\u5354\u8b70\uff0c\u5176\u5be6\u5728\u8aaa\u300c\u76e1\u7ba1\u7cfb\u7d71\u5167\u90e8\u7bc0\u9ede\u53ef\u4ee5\u5b58\u5728\u4e0d\u4e00\u81f4\u7684\u72c0\u614b\uff0c\u4f46\u5f9e\u7cfb\u7d71\u5916\u90e8\u770b\u4f86\uff0c\u4e0d\u4e00\u81f4\u7684\u60c5\u6cc1\u4e26\u4e0d\u6703\u88ab\u89c0\u5bdf\u5230\uff0c\u6240\u4ee5\u6574\u9ad4\u4e0a\u770b\u7cfb\u7d71\u662f\u5f37\u4e00\u81f4\u6027\u7684\u300d\u3002"),(0,l.kt)("p",null,"\u8207\u5b83\u5011\u76f8\u5c0d\u7684\uff0c\u9084\u6709\u53e6\u4e00\u985e\u88ab\u51a0\u4ee5\u300c\u6700\u7d42\u4e00\u81f4\u6027\u300d\u7684\u5206\u5e03\u5f0f\u5171\u8b58\u5354\u8b70\uff0c\u9019\u8868\u660e\u7cfb\u7d71\u4e2d\u4e0d\u4e00\u81f4\u7684\u72c0\u614b\u6709\u53ef\u80fd\u6703\u5728\u4e00\u5b9a\u6642\u9593\u5167\u88ab\u5916\u90e8\u76f4\u63a5\u89c0\u5bdf\u5230\u3002\n\u4f8b\u5982 DNS \u7cfb\u7d71\uff0c\u5728\u5404\u7bc0\u9ede\u7de9\u5b58\u7684 TTL \u5230\u671f\u4e4b\u524d\uff0c\u90fd\u6709\u53ef\u80fd\u8207\u771f\u5be6\u7684\u57df\u540d\u7ffb\u8b6f\u7d50\u679c\u5b58\u5728\u4e0d\u4e00\u81f4\u3002\u5728\u672c\u7bc0\u4e2d\uff0c\u7b46\u8005\u5c07\u4ecb\u7d39\u5728\u6bd4\u7279\u5e63\u7db2\u7d61\u548c\u8a31\u591a\u91cd\u8981\u5206\u5e03\u5f0f\u6846\u67b6\u4e2d\u90fd\u6709\u61c9\u7528\u7684\u53e6\u4e00\u7a2e\u5177\u6709\u4ee3\u8868\u6027\u7684\u300c\u6700\u7d42\u4e00\u81f4\u6027\u300d\u7684\u5206\u5e03\u5f0f\u5171\u8b58\u5354\u8b70\uff1aGossip \u5354\u8b70\u3002"),(0,l.kt)("p",null,"\u6700\u521d\u53eb\u300c\u6d41\u884c\u75c5\u7b97\u6cd5\u300d\uff08Epidemic Algorithm\uff09"),(0,l.kt)("p",null,"\u7b46\u8005\u6309\u7167\u7fd2\u6163\u4e5f\u628a Gossip \u4e5f\u7a31\u4f5c\u662f\u300c\u5171\u8b58\u5354\u8b70\u300d\uff0c\u4f46\u9996\u5148\u5fc5\u9808\u5f37\u8abf\u5b83\u6240\u89e3\u6c7a\u7684\u554f\u984c\u4e26\u4e0d\u662f\u76f4\u63a5\u8207 Paxos\u3001Raft \u9019\u4e9b\u5171\u8b58\u7b97\u6cd5\u7b49\u50f9\u7684\uff0c\u53ea\u662f\u57fa\u65bc Gossip \u4e4b\u4e0a\u53ef\u4ee5\u901a\u904e\u67d0\u4e9b\u65b9\u6cd5\u53bb\u5be6\u73fe\u8207 Paxos\u3001Raft \u76f8\u985e\u4f3c\u7684\u76ee\u6a19\u800c\u5df2\u3002\u4e00\u500b\u6700\u5178\u578b\u7684\u4f8b\u5b50\u662f\u6bd4\u7279\u5e63\u7db2\u7d61\u4e2d\u4f7f\u7528\u5230\u4e86 Gossip \u5354\u8b70\uff0c\u7528\u5b83\u4f86\u5728\u5404\u500b\u5206\u5e03\u5f0f\u7bc0\u9ede\u4e2d\u4e92\u76f8\u540c\u6b65\u5340\u584a\u982d\u548c\u5340\u584a\u9ad4\u7684\u4fe1\u606f\uff0c\u9019\u662f\u6574\u500b\u7db2\u7d61\u80fd\u5920\u6b63\u5e38\u4ea4\u63db\u4fe1\u606f\u7684\u57fa\u790e\uff0c\u4f46\u4e26\u4e0d\u80fd\u7a31\u4f5c\u5171\u8b58\uff1b\u6bd4\u7279\u5e63\u4f7f\u7528\u5de5\u4f5c\u91cf\u8b49\u660e\uff08Proof of Work\uff0cPoW\uff09\u4f86\u5c0d\u300c\u9019\u500b\u5340\u584a\u7531\u8ab0\u4f86\u8a18\u8cec\u300d\u9019\u4e00\u4ef6\u4e8b\u60c5\u5728\u5168\u7db2\u9054\u6210\u5171\u8b58\uff0c\u9019\u500b\u76ee\u6a19\u624d\u53ef\u4ee5\u8a8d\u70ba\u8207 Paxos\u3001Raft \u7684\u76ee\u6a19\u662f\u4e00\u81f4\u7684\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"gossip.gif",src:n(40903).Z,width:"600",height:"401"})),(0,l.kt)("p",null,"\u512a\u9ede"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u6c42\u7db2\u8def\u7bc0\u9ede\u9023\u901a\u6027\u548c\u7a69\u5b9a\u6027\uff0c\u80fd\u5920\u5bb9\u5fcd\u7db2\u8def\u4e0a\u7bc0\u9ede\u96a8\u610f\u589e\u52a0\u6216\u6e1b\u5c11\n\u7f3a\u9ede"),(0,l.kt)("li",{parentName:"ul"},"\u5404\u7bc0\u9ede\u72c0\u614b\u4e0d\u4e00\u81f4"),(0,l.kt)("li",{parentName:"ul"},"\u7121\u6cd5\u9810\u4f30\u9700\u8981\u591a\u9577\u6642\u9593\u53ef\u4ee5\u9054\u6210\u5168\u7db2\u6d88\u606f\u4e00\u81f4")),(0,l.kt)("p",null,"\u53d6\u6368"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e00\u81f4\u6027\u8017\u8cbb\u6642\u9593"),(0,l.kt)("li",{parentName:"ul"},"\u6d88\u606f\u5197\u9918\u91cf")),(0,l.kt)("p",null,"\u56e0\u6b64Gossip \u8a2d\u8a08\u5169\u7a2e\u53ef\u80fd\u6d88\u606f\u50b3\u64ad\u6a21\u5f0f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Anti-Entropy: \u53cd\u71b5\uff0c\u53cd\u6df7\u4e82\uff0c\u63d0\u6607\u500b\u7bc0\u9ede\u4e4b\u9593\u7684\u76f8\u4f3c\u5ea6\u70ba\u76ee\u6a19\uff0c\u6703\u540c\u6b65\u7bc0\u9ede\u7684\u5168\u90e8\u6578\u64da\uff0c\u4f46\u6703\u7d66\u7db2\u8def\u5e36\u4f86\u5de8\u5927\u50b3\u8f38\u958b\u92b7"),(0,l.kt)("li",{parentName:"ul"},"Rumor-Mongering\uff1a\u50b3\u9059\uff0c\u4ee5\u50b3\u64ad\u6d88\u606f\u70ba\u76ee\u6a19\uff0c\u50c5\u50c5\u767c\u9001\u65b0\u5230\u9054\u7bc0\u9ede\u7684\u6578\u64da\uff0c\u5373\u53ea\u5c0d\u5916\u767c\u9001\u8b8a\u66f4\u4fe1\u606f\uff0c\u6d88\u606f\u91cf\u986f\u8457\u6e1b\u5c11")))}k.isMDXComponent=!0},29813:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/6-1-paxos-google-slides-1-ed4e300863b13768b0d68110c64531f5.png"},42834:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/6-3-compare-consensus-2pc-07649d48363fa6eb5ca25cf8c6e776ea.png"},98848:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/6-6-multi-paxos-time-924ee3eaeb68a9aca0ff86bcf64833d1.png"},40903:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/gossip-db3e61581574e12e3cd0573b09eee31e.gif"}}]);