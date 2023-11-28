"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[8669],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},A="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),A=u(n),s=a,k=A["".concat(d,".").concat(s)]||A[s]||m[s]||o;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[A]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},18223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"Ch14: \u8cc7\u6e90\u8207\u8abf\u5ea6",tsidebar_label:"Ch14: \u8cc7\u6e90\u8207\u8abf\u5ea6",sidebar_position:14},l="\u8cc7\u6e90\u8207\u8abf\u5ea6",i={unversionedId:"sg/fenix-architecture/ch14",id:"sg/fenix-architecture/ch14",title:"Ch14: \u8cc7\u6e90\u8207\u8abf\u5ea6",description:"\u8abf\u5ea6\u662f\u6307\u70ba\u65b0\u5275\u5efa\u51fa\u4f86\u7684 Pod \u5c0b\u627e\u5230\u4e00\u500b\u6700\u6070\u7576\u7684\u5bbf\u4e3b\u6a5f\u7bc0\u9ede\u4f86\u904b\u884c\u5b83\uff0c\u9019\u500b\u904e\u7a0b\u6210\u529f\u8207\u5426\u3001\u7d50\u679c\u6070\u7576\u8207\u5426\uff0c\u95dc\u9375\u53d6\u6c7a\u65bc\u5bb9\u5668\u7de8\u6392\u7cfb\u7d71\u662f\u5982\u4f55\u7ba1\u7406\u8207\u5206\u914d\u96c6\u7fa4\u7bc0\u9ede\u7684\u8cc7\u6e90\u7684\u3002",source:"@site/docs/sg/fenix-architecture/ch14.mdx",sourceDirName:"sg/fenix-architecture",slug:"/sg/fenix-architecture/ch14",permalink:"/docs/sg/fenix-architecture/ch14",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/fenix-architecture/ch14.mdx",tags:[],version:"current",lastUpdatedBy:"yvette-tsai",lastUpdatedAt:1701129750,formattedLastUpdatedAt:"Nov 28, 2023",sidebarPosition:14,frontMatter:{title:"Ch14: \u8cc7\u6e90\u8207\u8abf\u5ea6",tsidebar_label:"Ch14: \u8cc7\u6e90\u8207\u8abf\u5ea6",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Ch13: \u6301\u4e45\u5316\u5b58\u50a8",permalink:"/docs/sg/fenix-architecture/ch13"},next:{title:"Ch15: \u670d\u52d9\u7db2\u683c",permalink:"/docs/sg/fenix-architecture/ch15"}},d={},u=[{value:"\u8cc7\u6e90\u6a21\u578b",id:"\u8cc7\u6e90\u6a21\u578b",level:2},{value:"\u670d\u52d9\u8cea\u91cf\u8207\u512a\u5148\u7d1a",id:"\u670d\u52d9\u8cea\u91cf\u8207\u512a\u5148\u7d1a",level:2},{value:"\u9a45\u9010\u6a5f\u5236",id:"\u9a45\u9010\u6a5f\u5236",level:2},{value:"\u9ed8\u8a8d\u8abf\u5ea6\u5668",id:"\u9ed8\u8a8d\u8abf\u5ea6\u5668",level:2}],p={toc:u},A="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(A,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u8cc7\u6e90\u8207\u8abf\u5ea6"},"\u8cc7\u6e90\u8207\u8abf\u5ea6"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8abf\u5ea6\u662f\u6307\u70ba\u65b0\u5275\u5efa\u51fa\u4f86\u7684 Pod \u5c0b\u627e\u5230\u4e00\u500b\u6700\u6070\u7576\u7684\u5bbf\u4e3b\u6a5f\u7bc0\u9ede\u4f86\u904b\u884c\u5b83\uff0c\u9019\u500b\u904e\u7a0b\u6210\u529f\u8207\u5426\u3001\u7d50\u679c\u6070\u7576\u8207\u5426\uff0c\u95dc\u9375\u53d6\u6c7a\u65bc\u5bb9\u5668\u7de8\u6392\u7cfb\u7d71\u662f\u5982\u4f55\u7ba1\u7406\u8207\u5206\u914d\u96c6\u7fa4\u7bc0\u9ede\u7684\u8cc7\u6e90\u7684\u3002")),(0,a.kt)("h2",{id:"\u8cc7\u6e90\u6a21\u578b"},"\u8cc7\u6e90\u6a21\u578b"),(0,a.kt)("p",null,"\u8cc7\u6e90\u5728 Kubernetes \u4e2d\u662f\u6975\u70ba\u5e38\u7528\u7684\u8853\u8a9e\uff0c\u5ee3\u7fa9\u4e0a\u8b1b\uff0cKubernetes \u7cfb\u7d71\u4e2d\u6240\u6709\u4f60\u80fd\u5920\u63a5\u89f8\u7684\u65b9\u65b9\u9762\u9762\u90fd\u88ab\u62bd\u8c61\u6210\u4e86\u8cc7\u6e90"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5de5\u4f5c\u8ca0\u8377\u7684\u8cc7\u6e90\uff08Pod\u3001ReplicaSet\u3001Service\u3001\u2026\u2026\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u5b58\u5132\u7684\u8cc7\u6e90\uff08Volume\u3001PersistentVolume\u3001Secret\u3001\u2026\u2026\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u7b56\u7565\u7684\u8cc7\u6e90\uff08SecurityContext\u3001ResourceQuota\u3001LimitRange\u3001\u2026\u2026\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u8eab\u4efd\u7684\u8cc7\u6e90\uff08ServiceAccount\u3001Role\u3001ClusterRole\u3001\u2026\u2026\uff09")),(0,a.kt)("p",null,"\u5f9e\u7de8\u6392\u7cfb\u7d71\u7684\u89d2\u5ea6\u4f86\u770b\uff0cNode \u662f\u8cc7\u6e90\u7684\u63d0\u4f9b\u8005\uff0cPod \u662f\u8cc7\u6e90\u7684\u4f7f\u7528\u8005\uff0c\u8abf\u5ea6\u662f\u5c07\u5169\u8005\u9032\u884c\u6070\u7576\u7684\u64ae\u5408\u3002"),(0,a.kt)("p",null,"Node \u901a\u5e38\u80fd\u5920\u63d0\u4f9b\u7684\u4e09\u65b9\u9762\u7684\u8cc7\u6e90\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8a08\u7b97\u8cc7\u6e90\uff08\u5982\u8655\u7406\u5668\u3001\u5716\u5f62\u8655\u7406\u5668\u3001\u5167\u5b58\uff09",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8655\u7406\u5668\u9019\u6a23\u7684\u8cc7\u6e90\u88ab\u7a31\u4f5c\u53ef\u58d3\u7e2e\u8cc7\u6e90\uff08Compressible Resources\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u5167\u5b58\u9019\u6a23\u7684\u8cc7\u6e90\uff0c\u5247\u88ab\u7a31\u4f5c\u4e0d\u53ef\u58d3\u7e2e\u8cc7\u6e90\uff08Incompressible Resources\uff09"))),(0,a.kt)("li",{parentName:"ul"},"\u5b58\u5132\u8cc7\u6e90\uff08\u5982\u78c1\u76e4\u5bb9\u91cf\u3001\u4e0d\u540c\u985e\u578b\u7684\u4ecb\u8cea\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u7db2\u7d61\u8cc7\u6e90\uff08\u5982\u5e36\u5bec\u3001\u7db2\u7d61\u5730\u5740\uff09")),(0,a.kt)("h2",{id:"\u670d\u52d9\u8cea\u91cf\u8207\u512a\u5148\u7d1a"},"\u670d\u52d9\u8cea\u91cf\u8207\u512a\u5148\u7d1a"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u8a2d\u5b9a\u8cc7\u6e90\u8a08\u91cf\u55ae\u4f4d\u7684\u76ee\u7684\u662f\u70ba\u4e86\u7ba1\u7406\u54e1\u80fd\u5920\u9650\u5236\u67d0\u500b Pod \u5c0d\u8cc7\u6e90\u7684\u904e\u5ea6\u4f54\u7528\uff0c\u907f\u514d\u5f71\u97ff\u5230\u5176\u4ed6 Pod \u7684\u6b63\u5e38\u904b\u884c\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5177\u9ad4\u7684\u914d\u7f6e\u662f Pod \u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"spec.containers[].resource.limits/requests.cpu/memory")," \u5b57\u6bb5\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"requests")," \u662f\u7d66\u8abf\u5ea6\u5668\u7528\u7684\uff0cKubernetes \u9078\u64c7\u54ea\u500b\u7bc0\u9ede\u904b\u884c Pod\uff0c\u53ea\u6703\u6839\u64da ",(0,a.kt)("inlineCode",{parentName:"li"},"requests")," \u7684\u503c\u4f86\u9032\u884c\u6c7a\u7b56"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"limits")," \u624d\u662f\u7d66 cgroups \u7528\u7684\uff0cKubernetes \u5728\u5411 cgroups \u7684\u50b3\u905e\u8cc7\u6e90\u914d\u984d\u6642\uff0c\u6703\u6309\u7167 ",(0,a.kt)("inlineCode",{parentName:"li"},"limits")," \u7684\u503c\u4f86\u9032\u884c\u8a2d\u7f6e\u3002")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u670d\u52d9\u8cea\u91cf\u7b49\u7d1a\uff08Quality of Service Level\uff0cQoS Level\uff09")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8cea\u91cf\u7b49\u7d1a\u662f Pod \u7684\u4e00\u500b\u96b1\u542b\u5c6c\u6027\uff0c\u4e5f\u662f Kubernetes \u512a\u5148\u4fdd\u969c\u91cd\u8981\u7684\u670d\u52d9\uff0c\u653e\u68c4\u4e00\u4e9b\u6c92\u90a3\u9ebc\u91cd\u8981\u7684\u670d\u52d9\u7684\u8861\u91cf\u6e96\u7e69\u3002")),(0,a.kt)("p",null,"Kubernetes \u76ee\u524d\u63d0\u4f9b\u7684\u670d\u52d9\u8cea\u91cf\u7b49\u7d1a\u4e00\u5171\u5206\u70ba\u4e09\u7d1a\uff0c\u7531\u9ad8\u5230\u4f4e\u5206\u5225\u70ba Guaranteed\u3001Burstable \u548c BestEffort\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Guaranteed: Pod \u4e2d\u6240\u6709\u7684\u5bb9\u5668\u90fd\u8a2d\u7f6e\u4e86 ",(0,a.kt)("inlineCode",{parentName:"li"},"limits")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"requests"),"\uff0c\u4e14\u5169\u8005\u7684\u503c\u76f8\u7b49"),(0,a.kt)("li",{parentName:"ul"},"Burstable: Pod \u4e2d\u6709\u90e8\u5206\u5bb9\u5668\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"requests")," \u503c\u5c0f\u65bc ",(0,a.kt)("inlineCode",{parentName:"li"},"limits")," \u503c\uff0c\u6216\u8005\u53ea\u8a2d\u7f6e\u4e86 ",(0,a.kt)("inlineCode",{parentName:"li"},"requests")," \u800c\u672a\u8a2d\u7f6e limits"),(0,a.kt)("li",{parentName:"ul"},"BestEffort: ",(0,a.kt)("inlineCode",{parentName:"li"},"limits")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"requests")," \u5169\u500b\u90fd\u6c92\u8a2d\u7f6e")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u9664\u4e86\u670d\u52d9\u8cea\u91cf\u7b49\u7d1a\u4ee5\u5916\uff0cKubernetes \u9084\u5141\u8a31\u7cfb\u7d71\u7ba1\u7406\u54e1\u81ea\u884c\u6c7a\u5b9a Pod \u7684\u512a\u5148\u7d1a\uff0c\u9019\u662f\u901a\u904e\u985e\u578b\u70ba PriorityClass \u7684\u8cc7\u6e90\u4f86\u5be6\u73fe\u7684\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u512a\u5148\u7d1a\uff08Priority\uff09")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u512a\u5148\u7d1a\u6703\u5f71\u97ff\u8abf\u5ea6\u9019\u5f88\u5bb9\u6613\u7406\u89e3\uff0c\u5b83\u662f\u6307\u7576\u591a\u500b Pod \u540c\u6642\u88ab\u8abf\u5ea6\u7684\u8a71\uff0c\u9ad8\u512a\u5148\u7d1a\u7684 Pod \u6703\u512a\u5148\u88ab\u8abf\u5ea6\u3002")),(0,a.kt)("p",null,"\u512a\u5148\u7d1a\u5f71\u97ff\u66f4\u5927\u7684\u53e6\u4e00\u65b9\u9762\u662f\u6307 Kubernetes \u7684",(0,a.kt)("strong",{parentName:"p"},"\u6436\u5360\u6a5f\u5236\uff08Preemption\uff09"),"\uff0c\u6b63\u5e38\u672a\u8a2d\u7f6e\u512a\u5148\u7d1a\u7684\u60c5\u6cc1\u4e0b\uff0c\u5982\u679c Pod \u8abf\u5ea6\u5931\u6557\uff0c\u5c31\u6703\u66ab\u6642\u8655\u65bc Pending \u72c0\u614b\u88ab\u64f1\u7f6e\u8d77\u4f86\uff0c\u76f4\u5230\u96c6\u7fa4\u4e2d\u6709\u65b0\u7bc0\u9ede\u52a0\u5165\u6216\u8005\u820a Pod \u9000\u51fa\u3002"),(0,a.kt)("h2",{id:"\u9a45\u9010\u6a5f\u5236"},"\u9a45\u9010\u6a5f\u5236"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Pod \u7684\u9a45\u9010\u6a5f\u5236\u662f\u901a\u904e kubelet \u4f86\u57f7\u884c\u7684\uff0ckubelet \u662f\u90e8\u7f72\u5728\u6bcf\u500b\u7bc0\u9ede\u7684\u96c6\u7fa4\u7ba1\u7406\u7a0b\u5e8f\uff0c\u7531\u65bc\u672c\u8eab\u5c31\u904b\u884c\u5728\u7bc0\u9ede\u4e2d\uff0c\u6240\u4ee5\u6700\u5bb9\u6613\u611f\u77e5\u5230\u7bc0\u9ede\u7684\u8cc7\u6e90\u5be6\u6642\u8017\u7528\u60c5\u6cc1\u3002kubelet \u4e00\u65e6\u767c\u73fe\u67d0\u7a2e\u4e0d\u53ef\u58d3\u7e2e\u8cc7\u6e90\u5c07\u8981\u8017\u76e1\uff0c\u5c31\u6703\u4e3b\u52d5\u7d42\u6b62\u7bc0\u9ede\u4e0a\u8f03\u4f4e\u670d\u52d9\u8cea\u91cf\u7b49\u7d1a\u7684 Pod\uff0c\u4ee5\u4fdd\u8b49\u5176\u4ed6\u66f4\u91cd\u8981\u7684 Pod \u7684\u5b89\u5168\u3002\u88ab\u9a45\u9010\u7684 Pod \u4e2d\u6240\u6709\u7684\u5bb9\u5668\u90fd\u6703\u88ab\u7d42\u6b62\uff0cPod \u7684\u72c0\u614b\u6703\u88ab\u66f4\u6539\u70ba Failed\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ef\u7528\u5167\u5b58\uff08",(0,a.kt)("inlineCode",{parentName:"li"},"memory.available"),"\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u5bbf\u4e3b\u6a5f\u7684\u53ef\u7528\u78c1\u76e4\u7a7a\u9593\uff08",(0,a.kt)("inlineCode",{parentName:"li"},"nodefs.available"),"\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u7cfb\u7d71\u53ef\u7528 inode \u6578\u91cf\uff08",(0,a.kt)("inlineCode",{parentName:"li"},"nodefs.inodesFree"),"\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u7528\u7684\u5bb9\u5668\u904b\u884c\u6642\u93e1\u50cf\u5b58\u5132\u7a7a\u9593\uff08",(0,a.kt)("inlineCode",{parentName:"li"},"imagefs.available"),"\uff09")),(0,a.kt)("p",null,"\u5f8c\u9762\u4e09\u500b\u7684\u95be\u503c\u90fd\u662f\u6309\u7167\u5be6\u969b\u5bb9\u91cf\u7684\u767e\u5206\u6bd4\u4f86\u8a08\u7b97\u7684\uff0c\u5177\u9ad4\u7684\u9ed8\u8a8d\u503c\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"memory.available < 100Mi\nnodefs.available < 10%\nnodefs.inodesFree < 5%\nimagefs.available < 15%\n")),(0,a.kt)("p",null,"\u7ba1\u7406\u54e1\u53ef\u4ee5\u5728 kubelet \u555f\u52d5\u6642\uff0c\u901a\u904e\u547d\u4ee4\u884c\u53c3\u6578\u4f86\u4fee\u6539\u9019\u4e9b\u9ed8\u8a8d\u503c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubelet --eviction-hard=memory.available<10%\n")),(0,a.kt)("p",null,"\u9a45\u9010\u6a5f\u5236\u4e2d\u5c31\u6709\u4e86\u8edf\u9a45\u9010\uff08Soft Eviction\uff09\u3001\u786c\u9a45\u9010\uff08Hard Eviction\uff09\u4ee5\u53ca\u512a\u96c5\u9000\u51fa\u671f\uff08Grace Period\uff09\u7684\u6982\u5ff5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u8edf\u9a45\u9010"),"\uff1a\u901a\u5e38\u914d\u7f6e\u4e00\u500b\u8f03\u4f4e\u7684\u8b66\u6212\u7dda\uff08\u8b6c\u5982\u53ef\u7528\u5167\u5b58\u50c5\u5269 20%\uff09\uff0c\u89f8\u53ca\u6b64\u7dda\u6642\uff0c\u7cfb\u7d71\u5c07\u9032\u5165\u4e00\u6bb5\u89c0\u5bdf\u671f\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u786c\u9a45\u9010"),"\uff1a\u901a\u5e38\u914d\u7f6e\u4e00\u500b\u8f03\u9ad8\u7684\u7d42\u6b62\u7dda\uff08\u8b6c\u5982\u53ef\u7528\u5167\u5b58\u50c5\u5269 10%\uff09\uff0c\u4e00\u65e6\u89f8\u53ca\u6b64\u7d05\u7dda\uff0c\u7acb\u5373\u5f37\u5236\u6bba\u6389 Pod\uff0c\u4e0d\u7406\u6703\u512a\u96c5\u9000\u51fa\u3002")),(0,a.kt)("p",null,"\u8edf\u9a45\u9010\u662f\u70ba\u4e86\u6e1b\u5c11\u8cc7\u6e90\u6296\u52d5\u5c0d\u670d\u52d9\u7684\u5f71\u97ff\uff0c\u786c\u9a45\u9010\u662f\u70ba\u4e86\u4fdd\u969c\u6838\u5fc3\u7cfb\u7d71\u7684\u7a69\u5b9a\uff0c\u5b83\u5011\u4e26\u4e0d\u77db\u76fe\uff0c\u4e00\u822c\u6703\u540c\u6642\u4f7f\u7528\uff0c\u8b6c\u5982\u4ee5\u4e0b\u4f8b\u5b50\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubelet --eviction-hard=memory.available<10% \\\n          --eviction-soft=memory.available<20% \\\n          --eviction-soft-grace-period=memory.available=1m30s \\\n          --eviction-max-pod-grace-period=600\n")),(0,a.kt)("h2",{id:"\u9ed8\u8a8d\u8abf\u5ea6\u5668"},"\u9ed8\u8a8d\u8abf\u5ea6\u5668"),(0,a.kt)("p",null,"Kubernetes \u662f\u5982\u4f55\u64ae\u5408 Pod \u8207 Node \u7684\uff0c\u9019\u5176\u5be6\u4e5f\u662f\u6700\u56f0\u96e3\u7684\u4e00\u500b\u554f\u984c\u3002\u8abf\u5ea6\u662f\u70ba\u65b0\u5275\u5efa\u51fa\u4f86\u7684 Pod \u5c0b\u627e\u5230\u4e00\u500b\u6700\u6070\u7576\u7684\u5bbf\u4e3b\u6a5f\u7bc0\u9ede\u53bb\u904b\u884c\u5b83\uff0c\u9019\u53e5\u8a71\u88e1\u5c31\u5305\u542b\u6709\u201c\u904b\u884c\u201d\u548c\u201c\u6070\u7576\u201d\u5169\u500b\u8abf\u5ea6\u4e2d\u95dc\u9375\u904e\u7a0b\uff0c\u5b83\u5011\u5177\u9ad4\u662f\u6307\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u904b\u884c"),"\uff1a\u5f9e\u96c6\u7fa4\u6240\u6709\u7bc0\u9ede\u4e2d\u627e\u51fa\u4e00\u6279\u5269\u9918\u8cc7\u6e90\u53ef\u4ee5\u6eff\u8db3\u8a72 Pod \u904b\u884c\u7684\u7bc0\u9ede\u3002\u70ba\u6b64\uff0cKubernetes \u8abf\u5ea6\u5668\u8a2d\u8a08\u4e86\u4e00\u7d44\u540d\u70ba Predicate \u7684\u7be9\u9078\u7b97\u6cd5\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u6070\u7576"),"\uff1a\u5f9e\u7b26\u5408\u904b\u884c\u8981\u6c42\u7684\u7bc0\u9ede\u4e2d\u627e\u51fa\u4e00\u500b\u6700\u9069\u5408\u7684\u7bc0\u9ede\u5b8c\u6210\u8abf\u5ea6\u3002\u70ba\u6b64\uff0cKubernetes \u8abf\u5ea6\u5668\u8a2d\u8a08\u4e86\u4e00\u7d44\u540d\u70ba Priority \u7684\u8a55\u50f9\u7b97\u6cd5\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5171\u4eab\u72c0\u614b\uff08Shared State\uff09\u7684\u96d9\u5faa\u74b0\u8abf\u5ea6\u6a5f\u5236")),(0,a.kt)("p",null,"\u9019\u7a2e\u8abf\u5ea6\u6a5f\u5236\u5f8c\u4f86\u4e0d\u50c5\u61c9\u7528\u5728 Google \u7684 Omega \u7cfb\u7d71\uff08Borg \u7684\u4e0b\u4e00\u4ee3\u96c6\u7fa4\u7ba1\u7406\u7cfb\u7d71\uff09\u4e2d\uff0c\u4e5f\u540c\u6a23\u88ab Kubernetes \u7e7c\u627f\u4e86\u4e0b\u4f86\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u571614-1 \u72c0\u614b\u5171\u4eab\u7684\u96d9\u5faa\u74b0",src:n(3649).Z,width:"797",height:"345"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Informer Loop")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5b83\u662f\u4e00\u7cfb\u5217 Informer \u7684\u96c6\u5408\uff0c\u9019\u4e9b Informer \u6301\u7e8c\u76e3\u8996 Etcd \u4e2d\u8207\u8abf\u5ea6\u76f8\u95dc\u8cc7\u6e90\uff08\u4e3b\u8981\u662f Pod \u548c Node\uff09\u7684\u8b8a\u5316\u60c5\u6cc1\uff0c\u4e00\u65e6 Pod\u3001Node \u7b49\u8cc7\u6e90\u51fa\u73fe\u8b8a\u52d5\uff0c\u5c31\u6703\u89f8\u767c\u5c0d\u61c9 Informer \u7684 Handler\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6839\u64da Etcd \u4e2d\u7684\u8cc7\u6e90\u8b8a\u5316\u53bb\u66f4\u65b0\u8abf\u5ea6\u968a\u5217\uff08Priority Queue\uff09\u548c\u8abf\u5ea6\u7de9\u5b58\uff08Scheduler Cache\uff09\u4e2d\u7684\u4fe1\u606f\uff0c\u8b6c\u5982\u7576\u6709\u65b0 Pod \u751f\u6210\uff0c\u5c31\u5c07\u5176\u5165\u968a\uff08Enqueue\uff09\u5230\u8abf\u5ea6\u968a\u5217\u4e2d\uff0c\u5982\u6709\u5fc5\u8981\uff0c\u9084\u6703\u6839\u64da\u512a\u5148\u7d1a\u89f8\u767c\u4e0a\u4e00\u7bc0\u63d0\u5230\u7684\u63d2\u968a\u548c\u6436\u5360\u64cd\u4f5c\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Scheduler Loop")),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"\u6838\u5fc3\u908f\u8f2f\u662f\u4e0d\u505c\u5730\u5c07\u8abf\u5ea6\u968a\u5217\u4e2d\u7684 Pod \u51fa\u968a\uff08Pop\uff09\uff0c\u7136\u5f8c\u4f7f\u7528 Predicate \u7b97\u6cd5\u9032\u884c\u7bc0\u9ede\u9078\u64c7\u3002")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Predicate"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"\u4e00\u7d44\u7bc0\u9ede\u904e\u6ffe\u5668\uff08Filter\uff09"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u901a\u7528\u904e\u6ffe\u7b56\u7565"),"\uff1a\u6700\u57fa\u790e\u7684\u8abf\u5ea6\u904e\u6ffe\u7b56\u7565\uff0c\u7528\u4f86\u6aa2\u67e5\u7bc0\u9ede\u662f\u5426\u80fd\u6eff\u8db3 Pod \u8072\u660e\u4e2d\u9700\u8981\u7684\u8cc7\u6e90\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5377\u904e\u6ffe\u7b56\u7565"),"\uff1a\u8207\u5b58\u5132\u76f8\u95dc\u7684\u904e\u6ffe\u7b56\u7565\uff0c\u7528\u4f86\u6aa2\u67e5\u7bc0\u9ede\u639b\u8f09\u7684 Volume \u662f\u5426\u5b58\u5728\u885d\u7a81\uff08\u8b6c\u5982\u5c07\u4e00\u500b\u584a\u8a2d\u5099\u639b\u8f09\u5230\u5169\u500b\u7bc0\u9ede\u4e0a\uff09\uff0c\u6216\u8005 Volume \u7684\u53ef\u7528\u5340\u57df\u662f\u5426\u8207\u76ee\u6a19\u7bc0\u9ede\u885d\u7a81\uff0c\u7b49\u7b49\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u7bc0\u9ede\u904e\u6ffe\u7b56\u7565"),"\uff1a\u8207\u5bbf\u4e3b\u6a5f\u76f8\u95dc\u7684\u904e\u6ffe\u7b56\u7565\uff0c\u6700\u5178\u578b\u7684\u662f Kubernetes \u7684\u6c61\u9ede\u8207\u5bb9\u5fcd\u5ea6\u6a5f\u5236\uff08Taints and Tolerations\uff09\uff0c\u8b6c\u5982\u9ed8\u8a8d\u60c5\u6cc1\u4e0b Kubernetes \u6703\u8a2d\u7f6e Master \u7bc0\u9ede\u4e0d\u5141\u8a31\u88ab\u8abf\u5ea6\uff0c\u9019\u5c31\u662f\u901a\u904e\u5728 Master \u4e2d\u65bd\u52a0\u6c61\u9ede\u4f86\u907f\u514d\u7684\u3002"))))))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Predicate \u7b97\u6cd5\u6240\u4f7f\u7528\u7684\u4e00\u5207\u6578\u64da\u5747\u4f86\u81ea\u65bc\u8abf\u5ea6\u7de9\u5b58\uff0c\u7d55\u5c0d\u4e0d\u6703\u53bb\u9060\u7a0b\u8a2a\u554f\u7bc0\u9ede\u672c\u8eab\u3002\u53ea\u6709 Informer Loop \u8207 Etcd \u7684\u76e3\u8996\u64cd\u4f5c\u624d\u6703\u6d89\u53ca\u5230\u9060\u7a0b\u8abf\u7528\uff0cScheduler Loop \u4e2d\u9664\u4e86\u6700\u5f8c\u7684\u7570\u6b65\u7d81\u5b9a\u8981\u767c\u8d77\u4e00\u6b21\u9060\u7a0b\u7684 Etcd \u5beb\u5165\u5916\uff0c\u5176\u9918\u5168\u90e8\u90fd\u662f\u9032\u7a0b\u5167\u8a2a\u554f\uff0c\u9019\u4e00\u9ede\u662f\u8abf\u5ea6\u5668\u57f7\u884c\u6548\u7387\u7684\u91cd\u8981\u4fdd\u8b49\u3002")),(0,a.kt)("p",null,"\u8abf\u5ea6\u7de9\u5b58\u5c31\u662f\u5169\u500b\u63a7\u5236\u5faa\u74b0\u7684\u5171\u4eab\u72c0\u614b\uff08Shared State\uff09\uff0c\u9019\u6a23\u7684\u8a2d\u8a08\u907f\u514d\u4e86\u6bcf\u6b21\u8abf\u5ea6\u6642\u4e3b\u52d5\u53bb\u8f2a\u8a62\u6240\u6709\u96c6\u7fa4\u7bc0\u9ede\uff0c\u4fdd\u8b49\u4e86\u8abf\u5ea6\u5668\u7684\u57f7\u884c\u6548\u7387\u3002"))}m.isMDXComponent=!0},3649:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAx0AAAFZCAMAAADKEbLyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNjRDODBENDBBRDIxMUVCQTMyOUY2RDczMzYyQzNBMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozNjRDODBENTBBRDIxMUVCQTMyOUY2RDczMzYyQzNBMiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM2NEM4MEQyMEFEMjExRUJBMzI5RjZENzMzNjJDM0EyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM2NEM4MEQzMEFEMjExRUJBMzI5RjZENzMzNjJDM0EyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+TuHsswAAAYBQTFRFycnJ9vb2np6e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"}}]);