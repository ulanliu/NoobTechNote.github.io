"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[7057],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>N});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),k=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=k(e.components);return l.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),c=k(n),s=a,N=c["".concat(p,".").concat(s)]||c[s]||m[s]||r;return n?l.createElement(N,i(i({ref:t},o),{},{components:n})):l.createElement(N,i({ref:t},o))}));function N(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=s;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[c]="string"==typeof e?e:a,i[1]=u;for(var k=2;k<r;k++)i[k]=n[k];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},98230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>u,toc:()=>k});var l=n(87462),a=(n(67294),n(3905));const r={title:"Ch12: \u5bb9\u5668\u9593\u7db2\u8def",tsidebar_label:"Ch12: \u5bb9\u5668\u9593\u7db2\u8def",sidebar_position:12},i=void 0,u={unversionedId:"sg/fenix-architecture/ch12",id:"sg/fenix-architecture/ch12",title:"Ch12: \u5bb9\u5668\u9593\u7db2\u8def",description:"Linux \u7db2\u7d61\u865b\u64ec\u5316",source:"@site/docs/sg/fenix-architecture/ch12.md",sourceDirName:"sg/fenix-architecture",slug:"/sg/fenix-architecture/ch12",permalink:"/docs/sg/fenix-architecture/ch12",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/fenix-architecture/ch12.md",tags:[],version:"current",lastUpdatedBy:"Mech",lastUpdatedAt:1692117633,formattedLastUpdatedAt:"Aug 15, 2023",sidebarPosition:12,frontMatter:{title:"Ch12: \u5bb9\u5668\u9593\u7db2\u8def",tsidebar_label:"Ch12: \u5bb9\u5668\u9593\u7db2\u8def",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Ch11: \u865b\u64ec\u5316\u5bb9\u5668",permalink:"/docs/sg/fenix-architecture/ch11"},next:{title:"Ch13: \u6301\u4e45\u5316\u5b58\u50a8",permalink:"/docs/sg/fenix-architecture/ch13"}},p={},k=[{value:"Linux \u7db2\u7d61\u865b\u64ec\u5316",id:"linux-\u7db2\u7d61\u865b\u64ec\u5316",level:2},{value:"\u7db2\u8def\u901a\u8a0a\u6a21\u578b",id:"\u7db2\u8def\u901a\u8a0a\u6a21\u578b",level:3},{value:"\u5e72\u9810\u7db2\u8def\u901a\u8a0a",id:"\u5e72\u9810\u7db2\u8def\u901a\u8a0a",level:3},{value:"\u865b\u64ec\u5316\u7db2\u8def\u8a2d\u5099",id:"\u865b\u64ec\u5316\u7db2\u8def\u8a2d\u5099",level:3},{value:"\u7db2\u5361\uff1atun/tap\u3001veth",id:"\u7db2\u5361tuntapveth",level:4},{value:"\u4ea4\u63db\u6a5f\uff1aLinux Bridge",id:"\u4ea4\u63db\u6a5flinux-bridge",level:4},{value:"\u7db2\u7d61\uff1aVXLAN",id:"\u7db2\u7d61vxlan",level:4},{value:"\u526f\u672c\u7db2\u5361\uff1aMACVLAN",id:"\u526f\u672c\u7db2\u5361macvlan",level:4},{value:"\u5bb9\u5668\u9593\u901a\u8a0a",id:"\u5bb9\u5668\u9593\u901a\u8a0a",level:3},{value:"\u5bb9\u5668\u7db2\u8def\u8207\u751f\u614b",id:"\u5bb9\u5668\u7db2\u8def\u8207\u751f\u614b",level:2},{value:"CNM \u8207 CNI",id:"cnm-\u8207-cni",level:3},{value:"CNM \u5230 CNI",id:"cnm-\u5230-cni",level:3},{value:"\u7db2\u8def\u63d2\u4ef6\u751f\u614b",id:"\u7db2\u8def\u63d2\u4ef6\u751f\u614b",level:3}],o={toc:k},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,l.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"linux-\u7db2\u7d61\u865b\u64ec\u5316"},"Linux \u7db2\u7d61\u865b\u64ec\u5316"),(0,a.kt)("p",null,"\u57fa\u65bc Linux \u7cfb\u7d71\u7684\u7db2\u8def\u865b\u64ec\u5316\u6280\u8853\u4f86\u5be6\u73fe\u7684\u5bb9\u5668\u9593\u7db2\u8def\u901a\u8a0a => \u53ea\u95dc\u6ce8\u90a3\u4e9b\u70ba\u4e86\u76f8\u4e92\u9694\u96e2\u7684 Linux \u7db2\u7d61\u540d\u7a31\u7a7a\u9593\u53ef\u76f8\u4e92\u901a\u8a0a\u800c\u8a2d\u8a08\u51fa\u4f86\u7684\u865b\u64ec\u5316\u7db2\u8def\u8a2d\u65bd "),(0,a.kt)("h3",{id:"\u7db2\u8def\u901a\u8a0a\u6a21\u578b"},"\u7db2\u8def\u901a\u8a0a\u6a21\u578b"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Linux \u7cfb\u7d71\u4e0b\u7684\u7db2\u8def\u901a\u8a0a\u6a21\u578b",src:n(25189).Z,width:"1042",height:"586"}),"\nLinux \u7cfb\u7d71\u4e0b\u7684\u7db2\u8def\u901a\u8a0a\u6a21\u578b"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u7279\u9ede\uff1a \u900f\u904e\u300c\u5206\u5c64\u300d\u7684\u65b9\u5f0f\u4f86\u8655\u7406\u7db2\u8def\u8acb\u6c42")),(0,a.kt)("p",null,"\u8a0a\u606f\u5f9e\u4f86\u6e90\u7aef\u767c\u9001\u8acb\u6c42\u7d66\u63a5\u6536\u7aef\uff0c\u6703\u9010\u5c64\u9032\u884c\u50b3\u9001\uff0c\u7576\u4e2d\u6703\u7d93\u904e\u5e7e\u500b\u968e\u6bb5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"socket\uff1a\u6700\u9760\u8fd1 user space \u7684\u62bd\u8c61\u5c64\uff0c\u5f80\u4e0b\u6703\u901a\u5f80\u50b3\u8f38\u5c64\u7684\u5354\u8b70\u3002Linux Socket \u5f9e BSD Socket \u767c\u5c55\u800c\u4f86\u3002"),(0,a.kt)("li",{parentName:"ul"},"TCP/UDP: \u5c0d\u61c9\u7db2\u8def\u50b3\u8f38\u5c64\uff0cLinux \u652f\u63f4 TCP/UDP \u5169\u5927\u5354\u8b70\uff0c\u5c07Socket\u9001\u4f86\u7684\u8cc7\u6599\u5c01\u88dd\u5f8c\u9032\u884c\u50b3\u8f38(e.g. TCP Segment)\u3002"),(0,a.kt)("li",{parentName:"ul"},"IP: \u7db2\u969b\u7db2\u8def\u5354\u8b70\u3002\u53e6\u5916\u52a0\u5165 IP header, address, \u5354\u8b70\u7248\u672c\u865f\u7b49\uff0c\u5c01\u88dd\u6210 IP \u5c01\u5305\u5f8c\u9001\u5f80\u4e0b\u4e00\u5c64\u3002"),(0,a.kt)("li",{parentName:"ul"},"Device: \u7db2\u8def\u8a2d\u5099\u3002\u504f\u5411\u7cfb\u7d71\u7684\u63a5\u53e3\uff0c\u63d0\u4f9b\u7d71\u4e00\u7684\u62bd\u8c61\u754c\u9762\u3002"),(0,a.kt)("li",{parentName:"ul"},"Driver: \u7db2\u5361\u9a45\u52d5\u7a0b\u5f0f\u3002\u504f\u5411\u786c\u9ad4\u7684\u63a5\u53e3\u3002\u5c07\u7db2\u8def\u5c01\u5305\u5c01\u88dd\u6210 Ethernet Frame ")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Frame: L2 \u7684\u8cc7\u6599\u50b3\u8f38\u55ae\u5143")),(0,a.kt)("h3",{id:"\u5e72\u9810\u7db2\u8def\u901a\u8a0a"},"\u5e72\u9810\u7db2\u8def\u901a\u8a0a"),(0,a.kt)("p",null,"\u5f9eLinux Kernel 2.4 \u7248\u958b\u59cb\uff0cLinux kernel \u958b\u653e\u4e00\u5957\u901a\u7528\u7684\u904e\u6ffe\u5668\u6846\u67b6 - Netfilter"),(0,a.kt)("p",null,"Netfilter \u570d\u7e5e ",(0,a.kt)("strong",{parentName:"p"},"\u7db2\u8def\u5c64(IP \u5354\u8b70)")," \uff0c\u57cb\u4e0b\u4e94\u500b Hooks\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"PREROUTING\uff1a\u4f86\u81ea\u8a2d\u5099\u7684\u5c01\u5305\u9032\u5165\u5354\u8b70\u68e7\u5f8c\u7acb\u5373\u89f8\u767c\u6b64\u9264\u5b50\u3002PREROUTING \u9264\u5b50\u5728\u9032\u5165IP \u8def\u7531\u4e4b\u524d\u89f8\u767c\uff0c\u9019\u610f\u5473\u8457\u53ea\u8981\u63a5\u6536\u5230\u7684\u5c01\u5305\uff0c\u7121\u8ad6\u662f\u5426\u771f\u7684\u767c\u5f80\u672c\u6a5f\uff0c\u90fd\u6703\u89f8\u767c\u6b64\u9264\u5b50\u3002\u4e00\u822c\u7528\u65bc\u76ee\u6a19\u7db2\u7d61\u5730\u5740\u8f49\u63db(Destination NAT\uff0cDNAT)\u3002"),(0,a.kt)("li",{parentName:"ul"},"INPUT\uff1a\u5831\u6587\u7d93\u904eIP \u8def\u7531\u5f8c\uff0c\u5982\u679c\u78ba\u5b9a\u662f\u767c\u5f80\u672c\u6a5f\u7684\uff0c\u5c07\u6703\u89f8\u767c\u6b64\u9264\u5b50\uff0c\u4e00\u822c\u7528\u65bc\u52a0\u5de5\u767c\u5f80\u672c\u5730\u9032\u7a0b\u7684\u5c01\u5305\u3002"),(0,a.kt)("li",{parentName:"ul"},"FORWARD\uff1a\u5831\u6587\u7d93\u904eIP \u8def\u7531\u5f8c\uff0c\u5982\u679c\u78ba\u5b9a ",(0,a.kt)("strong",{parentName:"li"},"\u4e0d")," \u662f\u767c\u5f80\u672c\u6a5f\u7684\uff0c\u5c07\u6703\u89f8\u767c\u6b64\u9264\u5b50\uff0c\u4e00\u822c\u7528\u65bc\u8655\u7406\u8f49\u767c\u5230\u5176\u4ed6\u6a5f\u5668\u7684\u5c01\u5305\u3002"),(0,a.kt)("li",{parentName:"ul"},"OUTPUT\uff1a\u5f9e\u672c\u6a5f\u7a0b\u5e8f\u767c\u51fa\u7684\u5c01\u5305\uff0c\u5728\u7d93\u904eIP \u8def\u7531\u524d\uff0c\u5c07\u6703\u89f8\u767c\u6b64\u9264\u5b50\uff0c\u4e00\u822c\u7528\u65bc\u52a0\u5de5\u672c\u5730\u9032\u7a0b\u7684\u8f38\u51fa\u5c01\u5305\u3002"),(0,a.kt)("li",{parentName:"ul"},"POSTROUTING\uff1a\u5f9e\u672c\u6a5f\u7db2\u5361\u51fa\u53bb\u7684\u5c01\u5305\uff0c\u7121\u8ad6\u662f\u672c\u6a5f\u7684\u7a0b\u5e8f\u6240\u767c\u51fa\u7684\uff0c\u9084\u662f\u7531\u672c\u6a5f\u8f49\u767c\u7d66\u5176\u4ed6\u6a5f\u5668\u7684\uff0c\u90fd\u6703\u89f8\u767c\u6b64\u9264\u5b50\uff0c\u4e00\u822c\u7528\u65bc\u6e90\u7db2\u7d61\u5730\u5740\u8f49\u63db(Source NAT\uff0cSNAT)\u3002")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://icyfenix.cn/immutable-infrastructure/network/linux-vnet.html#%E5%B9%B2%E9%A2%84%E7%BD%91%E7%BB%9C%E9%80%9A%E4%BF%A1"},"(\u571612-2 \u61c9\u7528\u6536\u3001\u767c\u5c01\u5305\u6240\u7d93\u904e\u7684Netfilter \u9264\u5b50)")),(0,a.kt)("p",null,"Netfilter \u5141\u8a31\u5728\u540c\u4e00\u500b Hook \u8655\u8a3b\u518a\u591a\u500b\u56de\u8abf\u51fd\u6578\uff0c\u56e0\u6b64\u5411\u9264\u5b50\u8a3b\u518a\u56de\u8abf\u51fd\u6578\u6642\u5fc5\u9808\u63d0\u4f9b\u660e\u78ba\u7684\u512a\u5148\u7d1a\uff0c\u4ee5\u4fbf\u89f8\u767c\u6642\u80fd\u6309\u7167\u512a\u5148\u7d1a\u5f9e\u9ad8\u5230\u4f4e\u9032\u884c\u555f\u52d5\u3002"),(0,a.kt)("p",null,"\u7531\u65bc\u56de\u8abf\u51fd\u6578\u6703\u5b58\u5728\u591a\u500b\uff0c\u770b\u8d77\u4f86\u5c31\u50cf\u639b\u5728\u540c\u4e00\u500b\u9264\u5b50\u4e0a\u7684\u4e00\u4e32\u93c8\u689d\uff0c\u56e0\u6b64\u9264\u5b50\u89f8\u767c\u7684\u56de\u8abf\u51fd\u6578\u96c6\u5408\u5c31\u88ab\u7a31\u70ba\u201c\u56de\u8abf\u93c8\u201d(Chained Callbacks) -> iptables \u5747\u6709\u4f7f\u7528\u5230\u201c\u93c8\u201d(Chain)\u7684\u6982\u5ff5"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"iptable-flows.png",src:n(32008).Z,width:"409",height:"479"})),(0,a.kt)("p",null,"\u5716\u7247\u6e90\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://linux.vbird.org/linux_server/centos6/0250simple_firewall.php#netfilter_iptables"},"\u9ce5\u54e5 - \u5c01\u5305\u904e\u6ffe\u7684\u898f\u5247\u52d5\u4f5c\u53ca\u5206\u6790\u6d41\u7a0b")),(0,a.kt)("p",null,"iptables \u9810\u7f6e\u7684\u884c\u70ba:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DROP\uff1a\u76f4\u63a5\u5c07\u5c01\u5305\u4e1f\u68c4\u3002"),(0,a.kt)("li",{parentName:"ul"},"REJECT\uff1a\u7d66\u5ba2\u6236\u7aef\u8fd4\u56deConnection Refused \u6216Destination Unreachable \u5831\u6587\u3002"),(0,a.kt)("li",{parentName:"ul"},"QUEUE\uff1a\u5c07\u5c01\u5305\u653e\u5165\u7528\u6236\u7a7a\u9593\u7684\u968a\u5217\uff0c\u4f9b\u7528\u6236\u7a7a\u9593\u7684\u7a0b\u5e8f\u8655\u7406\u3002"),(0,a.kt)("li",{parentName:"ul"},"RETURN\uff1a\u8df3\u51fa\u7576\u524d\u93c8\uff0c\u8a72\u93c8\u91cc\u5f8c\u7e8c\u7684\u898f\u5247\u4e0d\u518d\u57f7\u884c\u3002"),(0,a.kt)("li",{parentName:"ul"},"ACCEPT\uff1a\u540c\u610f\u5c01\u5305\u901a\u904e\uff0c\u7e7c\u7e8c\u57f7\u884c\u5f8c\u7e8c\u7684\u898f\u5247\u3002"),(0,a.kt)("li",{parentName:"ul"},"JUMP\uff1a\u8df3\u8f49\u5230\u5176\u4ed6\u7528\u6236\u81ea\u5b9a\u7fa9\u7684\u93c8\u7e7c\u7e8c\u57f7\u884c\u3002"),(0,a.kt)("li",{parentName:"ul"},"REDIRECT\uff1a\u5728\u672c\u6a5f\u505a\u7aef\u53e3\u6620\u5c04\u3002"),(0,a.kt)("li",{parentName:"ul"},"MASQUERADE\uff1a\u5730\u5740\u507d\u88dd\uff0c\u81ea\u52d5\u7528\u4fee\u6539\u6e90\u6216\u76ee\u6a19\u7684IP \u5730\u5740\u4f86\u505a NAT"),(0,a.kt)("li",{parentName:"ul"},"LOG\uff1a\u5728/var/log/messages \u6587\u4ef6\u4e2d\u8a18\u9304\u65e5\u8a8c\u3002"),(0,a.kt)("li",{parentName:"ul"},"....")),(0,a.kt)("p",null,"iptables \u5167\u5efa\u4e94\u5f35\u4e0d\u53ef\u64f4\u5c55\u7684\u898f\u5247\u8868\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"raw \u8868\uff1a\u7528\u65bc\u53bb\u9664\u5c01\u5305\u4e0a\u7684\u9023\u63a5\u8ffd\u8e64\u6a5f\u5236(Connection Tracking)\u3002"),(0,a.kt)("li",{parentName:"ul"},"mangle \u8868\uff1a\u7528\u65bc\u4fee\u6539\u5c01\u5305\u7684\u5831\u6587\u982d\u4fe1\u606f\uff0c\u5982\u670d\u52d9\u985e\u578b(Type Of Service\uff0cToS)\u3001\u751f\u5b58\u9031\u671f(Time to Live\uff0cTTL)\u4ee5\u53ca\u70ba\u5c01\u5305\u8a2d\u7f6eMark \u6a19\u8a18\uff0c\u5178\u578b\u7684\u61c9\u7528\u662f\u93c8\u8def\u7684\u670d\u52d9\u8cea\u91cf\u7ba1\u7406(Quality Of Service\uff0cQoS)\u3002"),(0,a.kt)("li",{parentName:"ul"},"nat \u8868\uff1a\u7528\u65bc\u4fee\u6539\u5c01\u5305\u7684\u6e90\u6216\u8005\u76ee\u7684\u5730\u5740\u7b49\u4fe1\u606f\uff0c\u5178\u578b\u7684\u61c9\u7528\u662f\u7db2\u7d61\u5730\u5740\u8f49\u63db(Network Address Translation)\u3002"),(0,a.kt)("li",{parentName:"ul"},"filter \u8868\uff1a\u7528\u65bc\u5c0d\u5c01\u5305\u9032\u884c\u904e\u6ffe\uff0c\u63a7\u88fd\u5230\u9054\u67d0\u689d\u93c8\u4e0a\u7684\u5c01\u5305\u662f\u7e7c\u7e8c\u653e\u884c\u3001\u76f4\u63a5\u4e1f\u68c4\u6216\u62d2\u7d55(ACCEPT\u3001DROP\u3001REJECT)\uff0c\u5178\u578b\u7684\u61c9\u7528\u662f\u9632\u706b\u7246\u3002"),(0,a.kt)("li",{parentName:"ul"},"security \u8868\uff1a\u7528\u65bc\u5728\u5c01\u5305\u4e0a\u61c9\u7528SELinux\uff0c\u9019\u5f35\u8868\u4e26\u4e0d\u5e38\u7528\u3002")),(0,a.kt)("p",null,"\u4e94\u5f35\u898f\u5247\u8868\u7684\u512a\u5148\u7d1a\uff1araw\u2192mangle\u2192nat\u2192filter\u2192security"),(0,a.kt)("p",null,"\u5728iptables \u4e2d\u65b0\u589e\u898f\u5247\u6642\uff0c\u9700\u8981\u6309\u7167\u898f\u5247\u7684\u610f\u5716\u6307\u5b9a\u8981\u5b58\u5165\u5230\u54ea\u5f35\u8868\u4e2d\uff0c\u5982\u679c\u6c92\u6709\u6307\u5b9a\uff0c\u9810\u8a2d\u5c07\u6703\u5b58\u5165 filter \u8868\u3002"),(0,a.kt)("p",null,"iptables \u4e0d\u50c5\u662f Linux \u7cfb\u7d71\u81ea\u5e36\u7684\u4e00\u500b\u7db2\u8def\u5de5\u5177\uff0c\u5728\u5bb9\u5668\u9593\u901a\u8a0a\u4e2d\u626e\u6f14\u76f8\u7576\u91cd\u8981\u7684\u89d2\u8272\uff0c\u5982 Kubernetes \u7ba1\u7406 Service \u7684 Endpoints \u7684\u6838\u5fc3\u7d44\u4ef6 - kube-proxy\uff0c\u5c31\u4f9d\u8cf4 iptables \u4f86\u5b8c\u6210 ClusterIP \u5230 Pod \u7684\u901a\u8a0a\u3002"),(0,a.kt)("h3",{id:"\u865b\u64ec\u5316\u7db2\u8def\u8a2d\u5099"},"\u865b\u64ec\u5316\u7db2\u8def\u8a2d\u5099"),(0,a.kt)("h4",{id:"\u7db2\u5361tuntapveth"},"\u7db2\u5361\uff1atun/tap\u3001veth"),(0,a.kt)("p",null,"\u5169\u7a2e\u4e3b\u6d41\u7684\u865b\u64ec\u7db2\u5361\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"tun/tap:")," "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"tap:")," \u6a21\u64ec\u4ee5\u592a\u7db2(Ethernet)\u8a2d\u5099\uff0c\u64cd\u4f5c Ethernet Frame\u3002 (L2)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"tun:")," \u6a21\u64ec\u7db2\u8def\u5c64\u8a2d\u5099\uff0c\u64cd\u4f5c IP \u5c01\u5305\u3002(L3)"),(0,a.kt)("p",null,"\u5178\u578b\u61c9\u7528: VPN"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"12-3.png",src:n(40350).Z,width:"406",height:"261"})),(0,a.kt)("p",null,"(VPN \u4e2d\u6578\u64da\u6d41\u52d5\u793a\u610f\u5716)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5bb9\u5668\u8207\u5bb9\u5668\u7684\u76f4\u63a5\u901a\u4fe1\u4e26\u4e0d\u6703\u628a tun/tap \u4f5c\u70ba\u9996\u9078\u65b9\u6848\uff0c\u4e00\u822c\u662f\u57fa\u65bc veth \u4f86\u5be6\u73fe\u3002")),(0,a.kt)("p",null,"veth: \u53c8\u4f5c\u865b\u64ec\u4e59\u592a\u7db2(Virtual Ethernet)\uff0cLinux Kernel 2.6 \u7248\u672c\u5f8c\u652f\u63f4\u3002\u662f\u4e00\u5c0d\u8a2d\u5099\uff0c\u4e5f\u5e38\u88ab\u7a31\u4f5cveth pair\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"12-4.png",src:n(18003).Z,width:"618",height:"383"})),(0,a.kt)("p",null,"(veth pair \u5de5\u4f5c\u793a\u610f\u5716)"),(0,a.kt)("p",null,"\u5169\u500b\u5bb9\u5668\u9593\u7684\u901a\u8a0a\u63a1 veth \u597d\u8655\uff1a \u6548\u80fd\u4f73\uff0c\u4f46\u4e0d\u9069\u7528\u591a\u500b\u5bb9\u5668\u9593\u7684\u901a\u8a0a\u3002"),(0,a.kt)("p",null,"\u591a\u500b\u5bb9\u5668\u9593\u901a\u8a0a\u554f\u984c\u7684\u89e3\u6c7a\u65b9\u6848\uff1a Linux Bridge"),(0,a.kt)("h4",{id:"\u4ea4\u63db\u6a5flinux-bridge"},"\u4ea4\u63db\u6a5f\uff1aLinux Bridge"),(0,a.kt)("p",null,"Linux \u7cfb\u7d71\u4e0b\u7684\u865b\u64ec\u5316\u4ea4\u63db\u6a5f\u3002"),(0,a.kt)("p",null,"\u81ea Linux Kernel 2.2 \u7248\u672c\u958b\u59cb\u63d0\u4f9b\u7684 L2 \u8f49\u767c\u5de5\u5177\uff0c\u63a5\u5165\u4efb\u4f55\u4f4d\u65bc L2 \u7684\u7db2\u8def\u8a2d\u5099\uff0c\u900f\u904e\u6307\u4ee4- ",(0,a.kt)("inlineCode",{parentName:"p"},"brctl")," \u7ba1\u7406\u3002"),(0,a.kt)("p",null,"\u7576\u6709 L2 \u6578\u64da\u5305(Ethernet Frame)\u5f9e\u7db2\u5361\u9032\u5165 Linux Bridge\uff0c\u5b83\u5c07\u6839\u64da\u6578\u64da\u5305\u7684\u985e\u578b\u548c\u76ee\u6a19 MAC \u5730\u5740\uff0c\u6309\u898f\u5247\u8f49\u767c\u8655\u7406:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u6578\u64da\u5305\u662f\u5ee3\u64ad\u5e40(Broadcast Frame)\uff0c\u8f49\u767c\u7d66\u6240\u6709\u63a5\u5165\u7db2\u6a4b(Bridge)\u7684\u8a2d\u5099\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u6578\u64da\u5305\u662f\u55ae\u64ad\u5e40(Unicast Frame)\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e14MAC \u5730\u5740\u5728\u5730\u5740\u8f49\u767c\u8868\u4e2d\u4e0d\u5b58\u5728\uff0c\u5247\u6d2a\u6c3e(Flooding)\u7d66\u6240\u6709\u63a5\u5165\u7db2\u6a4b\u7684\u8a2d\u5099\uff0c\u4e26\u5c07\u97ff\u61c9\u8a2d\u5099\u7684\u63a5\u53e3\u8207MAC \u5730\u5740\u5b78\u7fd2(MAC Learning)\u5230\u81ea\u5df1\u7684MAC \u5730\u5740\u8f49\u767c\u8868\u4e2d\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e14MAC \u5730\u5740\u5728\u5730\u5740\u8f49\u767c\u8868\u4e2d\u5df2\u5b58\u5728\uff0c\u5247\u76f4\u63a5\u8f49\u767c\u5230\u5730\u5740\u8868\u4e2d\u6307\u5b9a\u7684\u8a2d\u5099\u3002"))),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u6578\u64da\u5305\u662f\u6b64\u524d\u8f49\u767c\u904e\u7684\uff0c\u53c8\u91cd\u65b0\u767c\u56de\u5230\u6b64 Bridge\uff0c\u8aaa\u660e\u5197\u9918\u93c8\u8def\u7522\u751f\u4e86\u74b0\u8def\u3002\u7531\u65bc\u4ee5\u592a\u5e40(Ethernet Frame)\u4e0d\u50cf IP \u5831\u6587\u90a3\u6a23\u6709TTL \u4f86\u7d04\u675f\uff0c\u56e0\u6b64\u4e00\u65e6\u51fa\u73fe\u74b0\u8def\uff0c\u5982\u679c\u6c92\u6709\u984d\u5916\u63aa\u65bd\u4f86\u8655\u7406\u7684\u8a71\u5c31\u6703\u6c38\u4e0d\u505c\u6b47\u5730\u8f49\u767c\u4e0b\u53bb\u3002\n\u5c0d\u65bc\u9019\u7a2e\u6578\u64da\u5305\u5c31\u9700\u8981\u4ea4\u63db\u6a5f\u5be6\u73fe\u751f\u6210\u6a39\u5354\u8b70(Spanning Tree Protocol\uff0cSTP)\u4f86\u4ea4\u63db\u62d3\u64b2\u4fe1\u606f\uff0c\u751f\u6210\u552f\u4e00\u62d3\u64b2\u93c8\u8def\u4ee5\u5207\u65b7\u74b0\u8def\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("h4",{parentName:"blockquote",id:"linux-bridge-\u8207\u666e\u901a\u7684\u7269\u7406\u4ea4\u63db\u6a5f\u4e4b\u9593\u7684\u5dee\u7570linux-bridge-\u4e0d\u50c5\u505a-l2-\u6578\u64da\u8f49\u767c\u4e5f\u80fd\u63a5\u5230-l3-\u5354\u8b70\u4e2d"},"Linux Bridge \u8207\u666e\u901a\u7684\u7269\u7406\u4ea4\u63db\u6a5f\u4e4b\u9593\u7684\u5dee\u7570\uff1aLinux Bridge \u4e0d\u50c5\u505a L2 \u6578\u64da\u8f49\u767c\uff0c\u4e5f\u80fd\u63a5\u5230 L3 \u5354\u8b70\u4e2d\u3002")),(0,a.kt)("p",null,"\u6700\u57fa\u672c\u7684\u5bb9\u5668\u9593\u901a\u8a0a\u5f62\u5f0f: \u900f\u904e NAT \u8f49\u63db\uff0c\u5be6\u73fe\u4e00\u500b\u6700\u539f\u59cb\u7684\u55ae IP \u5bb9\u5668\u7db2\u8def"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Scenario:")," \u547d\u540d\u7a7a\u95931(Namespace1)\u4e2d\u7684\u61c9\u7528\u7a0b\u5f0f\u60f3\u8a2a\u554f\u5916\u7db2\u5730\u5740\u70ba ",(0,a.kt)("inlineCode",{parentName:"p"},"122.246.6.183")," \u7684\u4f3a\u670d\u5668\n",(0,a.kt)("img",{alt:"12-5.png",src:n(13049).Z,width:"749",height:"584"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7db2\u6a4b(Bridge)br0\uff1a\u5206\u914dIP \u5730\u5740192.168.31.1"),(0,a.kt)("li",{parentName:"ul"},"\u5bb9\u5668\uff1a\u4e09\u500b\u7db2\u7d61\u540d\u7a31\u7a7a\u9593(\u5bb9\u5668)\uff0c\u5206\u5225\u7de8\u865f\u70ba1\u30012\u30013\uff0c\u5747\u4f7f\u7528veth pair \u63a5\u5165\u7db2\u6a4b\uff0c\u4e14\u6709\u5982\u4e0b\u914d\u7f6e\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5728\u5bb9\u5668\u4e00\u7aef\u7684\u7db2\u5361\u540d\u70baveth0\uff0c\u5728\u7db2\u6a4b\u4e00\u7aef\u7db2\u5361\u540d\u70baveth1\u3001veth2\u3001veth3"),(0,a.kt)("li",{parentName:"ul"},"\u4e09\u500b\u5bb9\u5668\u4e2d\u7684 veth0 \u7db2\u5361\u5206\u914d IP \u5730\u5740\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"192.168.1.10"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"192.168.1.11"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"192.168.1.12")),(0,a.kt)("li",{parentName:"ul"},"\u4e09\u500b\u5bb9\u5668\u4e2d\u7684 veth0 \u7db2\u5361\u8a2d\u7f6e Gateway \u70ba\u7db2\u6a4b\uff0c\u5373 ",(0,a.kt)("inlineCode",{parentName:"li"},"192.168.31.1")),(0,a.kt)("li",{parentName:"ul"},"\u7db2\u6a4b\u4e2d\u7684 veth1\u3001veth2\u3001veth3 \u7121IP \u5730\u5740"))),(0,a.kt)("li",{parentName:"ul"},"\u7269\u7406\u7db2\u5361eth0\uff1a\u5206\u914d\u7684IP \u5730\u5740 ",(0,a.kt)("inlineCode",{parentName:"li"},"14.123.254.86")),(0,a.kt)("li",{parentName:"ul"},"\u5916\u90e8\u7db2\u7d61\uff1a\u5916\u90e8\u7db2\u7d61\u4e2d\u6709\u4e00\u53f0\u4f3a\u670d\u5668\uff0c\u5730\u5740\u70ba ",(0,a.kt)("inlineCode",{parentName:"li"},"122.246.6.183"))),(0,a.kt)("blockquote",null,(0,a.kt)("h4",{parentName:"blockquote",id:"\u96e3\u984c"},"\u96e3\u984c\uff1a"),(0,a.kt)("p",{parentName:"blockquote"},"\u7db2\u8def\u7684\u7269\u7406\u62d3\u64b2\u7d50\u69cb\u76f8\u5c0d\u56fa\u5b9a\uff0c\u5f88\u96e3\u8ffd\u4e0a\u96f2\u539f\u751f\u6642\u4ee3\u7684\u5206\u6563\u5f0f\u7cfb\u7d71\u7684\u908f\u8f2f\u62d3\u64b2\u7d50\u69cb\u8b8a\u52d5\u983b\u7387")),(0,a.kt)("p",null,"\u767c\u5c55\u51fa\u8edf\u9ad4\u5b9a\u7fa9\u7db2\u7d61(Software Defined Network; SDN): "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7269\u7406\u7684\u7db2\u8def\u4e4b\u4e0a\u518d\u9020\u4e00\u5c64\u865b\u64ec\u5316\u7684\u7db2\u8def"),(0,a.kt)("li",{parentName:"ul"},"\u5207\u51fa\u4e0a\u4e0b\u5c64",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Overlay: \u4e0a\u5c64; \u908f\u8f2f\u7db2\u8def => \u8de8\u4e3b\u6a5f\u7684\u5bb9\u5668\u6e9d\u901a\u591a\u63a1\u7528\u6b64\u65b9\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"Underlay: \u4e0b\u5c64; \u7269\u7406\u7db2\u8def")))),(0,a.kt)("h4",{id:"\u7db2\u7d61vxlan"},"\u7db2\u7d61\uff1aVXLAN"),(0,a.kt)("p",null,"VLAN(\u865b\u64ec\u5340\u57df\u7db2\u8def) \u7684\u8077\u8cac\uff1a\u5283\u5206\u5ee3\u64ad\u5340\u57df\uff0c\u5c07\u9023\u63a5\u5728\u540c\u4e00\u500b\u7269\u7406\u7db2\u8def\u4e0a\u7684\u8a2d\u5099\u5340\u5206\u958b\u4f86\u3002 "),(0,a.kt)("p",null,"\u65b9\u6cd5\uff1a Ethernet Frame \u4e2d\u52a0\u4e0a VLAN Tag\u3002"),(0,a.kt)("p",null,"\u7f3a\u9677\uff1a "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8a2d\u8a08\u4e0a\u7684\u7f3a\u9677\uff1a VLAN ID \u70ba 12 Bits \u7684\u6578\u503c\uff0c\u6700\u591a\u53ea\u80fd\u6709 4096(2^12) \u7a2e\u53d6\u503c"),(0,a.kt)("li",{parentName:"ul"},"\u5be6\u73fe\u4e0a\u7684\u7f3a\u9677: \u8de8\u8cc7\u6599\u4e2d\u5fc3\u7684\u50b3\u905e -> \u4e0d\u5229\u65bc\u5927\u578b\u5206\u6563\u5f0f\u7cfb\u7d71")),(0,a.kt)("p",null,"\u91dd\u5c0d VLAN \u7684\u7f3a\u9677\uff0cIETF \u5b9a\u7fa9 VXLAN(Virtual eXtensible Local Area Network) \u898f\u7bc4\uff0c\u4e09\u5c64\u865b\u64ec\u5316\u7db2\u8def(Network Virtualization over Layer 3; NVO3)\u7684\u6a19\u6e96\u6280\u8853\u898f\u7bc4\u4e4b\u4e00\uff0c\u4e26\u4e14\u5728 Linux Kernel 3.7 \u7248\u672c\u958b\u59cb\u652f\u63f4 VXLAN\u3002"),(0,a.kt)("p",null,"VXLAN \u63a1\u7528 L2 over L4\uff0c\u5c07 L2 \u7684 Ethernet Frame \u653e\u5728 L4 \u7684 TCP Segment\uff0c\u53e6\u5916\u52a0\u5165 VXLAN Header\u3002"),(0,a.kt)("p",null,"VXLAN Header \u88e1\u6709 24 Bits \u7684 VLAN ID => 1677 \u842c\u7a2e\u53d6\u503c\uff0c\u8db3\u5920\u5927\u578b\u5206\u6563\u5f0f\u7cfb\u7d71\u7684\u61c9\u7528\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"12-6.png",src:n(15657).Z,width:"691",height:"443"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u597d\u8655\uff1a\u9748\u6d3b\u6027\u3001\u64f4\u5c55\u6027\u548c\u53ef\u7ba1\u7406\u6027\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7f3a\u9677\uff1a\u50b3\u8f38\u6548\u7387\u4e0b\u964d\u3001\u5ef6\u9072\u589e\u52a0\u3002")),(0,a.kt)("h4",{id:"\u526f\u672c\u7db2\u5361macvlan"},"\u526f\u672c\u7db2\u5361\uff1aMACVLAN"),(0,a.kt)("p",null,"\u5169\u500b VLAN \u6e9d\u901a\u65b9\u5f0f\uff1a\u900f\u904e L3 \u7684\u8def\u7531\u8a2d\u5099\n",(0,a.kt)("img",{alt:"12-7.png",src:n(29989).Z,width:"767",height:"450"})),(0,a.kt)("p",null,"\u8def\u7531\u5668\u4e0a\u7684\u5169\u500b\u63a5\u53e3\u5206\u5225\u8a2d\u7f6e\u4e0d\u540c\u7684 IP \u5730\u5740\uff0c\u7136\u5f8c\u7528\u5169\u689d\u7db2\u7dda\u5206\u5225\u9023\u63a5\u5230\u4ea4\u63db\u6a5f\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6578\u91cf\u592a\u591a\u7684\u8a71(e.g. VLAN \u4e0a\u9650\uff1a4096)\uff0c\u7ba1\u7406\u8d77\u4f86\u6703\u5f88\u9ebb\u7169\u3002")),(0,a.kt)("p",null,"MACVLAN \u70ba\u4e00\u7a2e\u865b\u64ec\u7db2\u5361\u6280\u8853\uff0c\u5141\u8a31\u5c0d\u540c\u4e00\u500b\u7db2\u5361\u8a2d\u7f6e\u591a\u500b IP\u3001MAC \u5730\u5740\uff0c\u6253\u7834 MAC \u5730\u5740\u8207\u7db2\u5361\u63a5\u53e3\u300c\u4e00\u5c0d\u4e00\u7684\u95dc\u4fc2\u300d\u3002"),(0,a.kt)("p",null,"\u4f5c\u6cd5: \u591a\u500b\u865b\u64ec\u7684\u7db2\u5361\uff0c\u5171\u7528\u4e00\u500b\u7269\u7406\u7db2\u5361\u3002\n",(0,a.kt)("img",{alt:"12-8.png",src:n(60376).Z,width:"502",height:"395"})),(0,a.kt)("h3",{id:"\u5bb9\u5668\u9593\u901a\u8a0a"},"\u5bb9\u5668\u9593\u901a\u8a0a"),(0,a.kt)("p",null,"\u4ee5 Docker \u70ba\u4f8b\u63d0\u4f9b\u7684\u5bb9\u5668\u9593\u7684",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/network/"},"\u7db2\u8def\u901a\u8a0a"),"\u65b9\u5f0f\u3002"),(0,a.kt)("p",null,"\u5b89\u88dd Docker \u904e\u7a0b\u4e2d\u6703\u81ea\u52d5\u5728\u4e3b\u6a5f\u4e0a\u5efa\u4e00\u500b\u540d\u70ba ",(0,a.kt)("inlineCode",{parentName:"p"},"docker0")," \u7684\u7db2\u6a4b\uff0c\u4ee5\u53ca\u4e09\u7a2e\u4e0d\u540c\u7684 Docker \u7db2\u8def\u65b9\u6848\u3002"),(0,a.kt)("p",null,"\u900f\u904e ",(0,a.kt)("inlineCode",{parentName:"p"},"docker network ls")," \u6307\u4ee4 docker \u63d0\u4f9b\u4e09\u7a2e\u5167\u5efa\u7db2\u8def\u65b9\u6848\uff0c\u555f\u7528 docker container \u6642\u900f\u904e ",(0,a.kt)("inlineCode",{parentName:"p"},"--network")," \u6307\u5b9a\u7db2\u8def\u6a21\u5f0f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6a4b\u63a5\u6a21\u5f0f: ",(0,a.kt)("inlineCode",{parentName:"li"},"--network=bridge"),"\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9810\u8a2d\u6a21\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"Docker \u6703\u70ba\u65b0\u5bb9\u5668\u5206\u914d\u7368\u7acb\u7684\u7db2\u8def\u547d\u540d\u7a7a\u9593"),(0,a.kt)("li",{parentName:"ul"},"\u5efa\u597d veth pair\uff0c\u4e00\u7aef\u63a5\u5165\u5bb9\u5668\uff0c\u53e6\u4e00\u7aef\u63a5\u5165\u5230 docker0 \u7db2\u6a4b\u4e0a"))),(0,a.kt)("li",{parentName:"ul"},"\u4e3b\u6a5f\u6a21\u5f0f: ",(0,a.kt)("inlineCode",{parentName:"li"},"--network=host"),"\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Docker \u4e0d\u6703\u70ba\u65b0\u5bb9\u5668\u5206\u914d\u7368\u7acb\u7684\u7db2\u8def\u547d\u540d\u7a7a\u9593"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u6703\u64c1\u6709\u81ea\u5df1\u7368\u7acb\u7684 IP \u5730\u5740\u3002"))),(0,a.kt)("li",{parentName:"ul"},"\u7a7a\u7f6e\u6a21\u5f0f: ",(0,a.kt)("inlineCode",{parentName:"li"},"--network=none"),"\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Docker \u6703\u70ba\u65b0\u5bb9\u5668\u5206\u914d\u7368\u7acb\u7684\u7db2\u8def\u547d\u540d\u7a7a\u9593"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u6703\u5275\u5efa\u4efb\u4f55\u865b\u64ec\u7684\u7db2\u8def\u8a2d\u5099"),(0,a.kt)("li",{parentName:"ul"},"\u7528\u6236\u53bb\u505a\u81ea\u5b9a\u7fa9\u7684\u7db2\u8def\u914d\u7f6e")))),(0,a.kt)("p",null,"Docker \u4e5f\u652f\u63f4\u8b93\u4f7f\u7528\u8005\u81ea\u8a02\u7684\u7db2\u8def\u6a21\u5f0f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5bb9\u5668\u6a21\u5f0f:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"--network=container: <container name>"),"; \u5bb9\u5668\u6a21\u5f0f\u4e0b\uff0c\u5171\u4eab\u4e00\u5207\u7684\u300c\u7db2\u8def\u8cc7\u6e90\u300d"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"MACVLAN \u6a21\u5f0f:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"docker network create -d macvlan"),"; \u5141\u8a31\u70ba\u5bb9\u5668\u6307\u5b9a\u4e00\u500b\u526f\u672c\u7db2\u5361\uff0c\u5bb9\u5668\u900f\u904e\u526f\u672c\u7db2\u5361\u7684 MAC \u5730\u5740\u4f86\u4f7f\u7528\u4e3b\u6a5f\u4e0a\u7684\u7269\u7406\u8a2d\u5099"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Overlay \u6a21\u5f0f:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"docker network create -d overlay"),"; \u6307VXLAN\uff0c\u4e3b\u8981\u7528\u65bc Docker Swarm \u670d\u52d9\u4e4b\u9593\u9032\u884c\u901a\u8a0a\u3002")),(0,a.kt)("h2",{id:"\u5bb9\u5668\u7db2\u8def\u8207\u751f\u614b"},"\u5bb9\u5668\u7db2\u8def\u8207\u751f\u614b"),(0,a.kt)("p",null,"\u5bb9\u5668\u7db2\u8def\u7684\u7b2c\u4e00\u500b\u696d\u754c\u6a19\u6e96\u6e90 - ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/moby/libnetwork"},"libnetwork"),"\uff0c\u4f5c\u70ba Docker \u63d0\u51fa\u7684CNM \u898f\u7bc4\uff08Container Network Model\uff09\u7684\u6a19\u6e96\u5be6\u73fe\u800c\u8a2d\u8a08\u3002"),(0,a.kt)("h3",{id:"cnm-\u8207-cni"},"CNM \u8207 CNI"),(0,a.kt)("p",null,"CNM \u8207 CNI(Container Networking Interface) \u7686\u70ba\u5bb9\u5668\u7db2\u8def\u7684\u6a19\u6e96\u898f\u7bc4\u3002"),(0,a.kt)("p",null,"CNI \u7232 Kubernetes \u63d0\u4f9b\u652f\u63f4\u7db2\u8def\u67b6\u69cb\u7684\u6a19\u6e96\u5316\u4ecb\u9762\u3002"),(0,a.kt)("p",null,"CNI \u5e36\u4f86\u7684\u597d\u8655\uff1a\u64c1\u6709\u66f4\u597d\u7684\u64f4\u5c55\u6027\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"12-9.png",src:n(8482).Z,width:"813",height:"430"}),"\n\u77e5\u540d\u7684\u63d0\u4f9b\u5546\u5c0d CNI \u7684\u652f\u63f4"),(0,a.kt)("p",null,"CNI \u7684\u8077\u8cac\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Container \u9593\u7684\u7db2\u8def\u9023\u63a5\uff0c\u7ba1\u7406\u5bb9\u5668\u7db2\u8def\u7684\u751f\u547d\u9031\u671f\u3002"),(0,a.kt)("li",{parentName:"ul"},"IP \u4f4d\u7f6e\u7684\u914d\u767c/\u79fb\u9664")),(0,a.kt)("h3",{id:"cnm-\u5230-cni"},"CNM \u5230 CNI"),(0,a.kt)("p",null,"\u8b1b\u8ff0\u5bb9\u5668\u7db2\u8def\u5f9e CNM \u5230 CNI \u7684\u767c\u5c55\u6b77\u7a0b&\u5bb9\u5668\u7db2\u8def\u7de8\u6392\u7684\u6230\u722d\u3002"),(0,a.kt)("p",null,"\u4e3b\u8981\u539f\u56e0\uff1a "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CNM \u7684\u8a2d\u8a08\u53d7\u9650\u65bc Docker\uff0c\u5b8c\u5168\u7121\u6cd5\u6eff\u8db3 Kubernetes \u8de8\u96c6\u7fa4\u7bc0\u9ede\u7684\u5bb9\u5668\u6e9d\u901a\u7684\u9700\u6c42\u3002"),(0,a.kt)("li",{parentName:"ul"},"Docker & Kubernetes \u5169\u65b9\u9663\u71df\u7684\u7406\u5ff5\u4e0d\u5408\uff0cDocker \u5e0c\u671b\u5c07\u7db2\u8def\u7684\u7ba1\u7406\u6b0a\u4ea4\u7d66 Docker\uff0c\u800c Kubernetes \u5247\u5e0c\u671b\u5c07\u7db2\u8def\u7684\u7ba1\u7406\u6b0a\u4ea4\u7d66\u4f7f\u7528\u8005\u3002")),(0,a.kt)("h3",{id:"\u7db2\u8def\u63d2\u4ef6\u751f\u614b"},"\u7db2\u8def\u63d2\u4ef6\u751f\u614b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Overlay \u6a21\u5f0f: \u4e00\u7a2e\u865b\u64ec\u5316\u7684\u4e0a\u5c64\u908f\u8f2f\u7db2\u8def"),(0,a.kt)("li",{parentName:"ul"},"\u8def\u7531\u6a21\u5f0f: \u6240\u6709\u4e3b\u6a5f\u90fd\u4f4d\u65bc\u540c\u4e00\u500b\u5b50\u7db2\u8def\u5167\uff0c\u90fd\u65bc L2 \u9023\u901a"),(0,a.kt)("li",{parentName:"ul"},"Underlay \u6a21\u5f0f: \u5bb9\u5668\u548c\u5bbf\u4e3b\u6a5f\u8655\u65bc\u540c\u4e00\u7db2\u8def\u3002 \u5927\u578b\u8cc7\u6599\u4e2d\u5fc3\u3001\u5927\u578b\u7cfb\u7d71\u7684\u7db2\u8def\u67b6\u69cb\u901a\u5e38\u6703\u63a1\u7528\u7684\u67b6\u69cb\u3002")),(0,a.kt)("p",null,"\u9078\u64c7 CNI \u7db2\u8def\u63d2\u4ef6\u7684\u539f\u5247\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u74b0\u5883\u662f\u5426\u652f\u63f4\uff1f e.g. \u591a\u7db2\u8def or \u591a\u4e3b\u6a5f"),(0,a.kt)("li",{parentName:"ul"},"\u6548\u80fd&\u529f\u80fd\u662f\u5426\u80fd\u6eff\u8db3\u8981\u6c42\uff1f")))}m.isMDXComponent=!0},25189:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/12-1-a15f5f114bc106649ad1a2100c0251a8.png"},40350:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/12-3-84b0f6d64f8fdbb64883d013bbd057bc.png"},18003:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/12-4-a6b610392448fcab48cf6f401a1d1dbb.png"},13049:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/12-5-feb3e92e294226aaf8357163c480c54d.png"},15657:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/12-6-47d57982aac26ed680371af959b1ed6d.png"},29989:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/12-7-6aab0d468a3a507380a325b01a78b8d7.png"},60376:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/12-8-ef905900f4c555324cbcb406f0ee716f.png"},8482:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/12-9-612a92716a7700628244822feb9649b9.png"},32008:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/iptable-flows-5cb85bed3a16bb2eea99d99c46a24104.png"}}]);