"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[2794],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),d=a,h=s["".concat(c,".").concat(d)]||s[d]||m[d]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},30383:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"Ch2: \u5169\u7a2e\u50f9\u503c\u89c0\u7684\u6545\u4e8b",sidebar_label:"Ch2: \u5169\u7a2e\u50f9\u503c\u89c0\u7684\u6545\u4e8b",sidebar_position:2},i=void 0,l={unversionedId:"sg/clean-architecture/ch2",id:"sg/clean-architecture/ch2",title:"Ch2: \u5169\u7a2e\u50f9\u503c\u89c0\u7684\u6545\u4e8b",description:"\u884c\u70ba\u8207\u67b6\u69cb",source:"@site/docs/sg/clean-architecture/ch2.md",sourceDirName:"sg/clean-architecture",slug:"/sg/clean-architecture/ch2",permalink:"/docs/sg/clean-architecture/ch2",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/clean-architecture/ch2.md",tags:[],version:"current",lastUpdatedBy:"Mech",lastUpdatedAt:1715660900,formattedLastUpdatedAt:"May 14, 2024",sidebarPosition:2,frontMatter:{title:"Ch2: \u5169\u7a2e\u50f9\u503c\u89c0\u7684\u6545\u4e8b",sidebar_label:"Ch2: \u5169\u7a2e\u50f9\u503c\u89c0\u7684\u6545\u4e8b",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Ch1: \u4ec0\u9ebc\u662f\u8a2d\u8a08\u8207\u7d50\u69cb",permalink:"/docs/sg/clean-architecture/ch1"},next:{title:"Ch3: \u7bc4\u5f0f\u6982\u8ff0",permalink:"/docs/sg/clean-architecture/ch3"}},c={},p=[{value:"\u884c\u70ba\u8207\u67b6\u69cb",id:"\u884c\u70ba\u8207\u67b6\u69cb",level:2},{value:"\u66f4\u9ad8\u7684\u50f9\u503c",id:"\u66f4\u9ad8\u7684\u50f9\u503c",level:2},{value:"\u827e\u68ee\u8c6a\u77e9\u9663(Eisenhower Matrix)",id:"\u827e\u68ee\u8c6a\u77e9\u9663eisenhower-matrix",level:2},{value:"\u70ba\u67b6\u69cb\u800c\u6230",id:"\u70ba\u67b6\u69cb\u800c\u6230",level:2}],u={toc:p},s="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(s,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u884c\u70ba\u8207\u67b6\u69cb"},"\u884c\u70ba\u8207\u67b6\u69cb"),(0,a.kt)("p",null,"\u8edf\u9ad4\u7cfb\u7d71\u5c0d\u5229\u5bb3\u95dc\u4fc2\u8005\u63d0\u4f9b\u4e86\u5169\u7a2e\u4e0d\u540c\u7684\u50f9\u503c\uff1a\u884c\u70ba\u8207\u67b6\u69cb"),(0,a.kt)("p",null,"\u8edf\u9ad4\u958b\u767c\u4eba\u54e1\u9700\u8981\u8b1b\u5169\u8005\u7dad\u6301\u5728\u9ad8\u50f9\u503c\uff0c\u4f46\u5f80\u5f80\u90fd\u6703\u8457\u91cd\u5176\u4e2d\u4e00\u500b\u800c\u5ffd\u7565\u53e6\u4e00\u500b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u884c\u70ba(Behavior)\uff1a",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"\u6a5f\u5668\u900f\u904e\u8edf\u9ad4\u80fd\u7522\u751f\u5c0d\u4f7f\u7528\u8005\u6709\u50f9\u503c\u7684\u52d5\u4f5c"))),(0,a.kt)("li",{parentName:"ul"},"\u67b6\u69cb(Structure)\uff1a",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"\u8edf\u9ad4Soft-ware\uff0c\u8edf(Soft)\u7684\u7522\u54c1(ware)\uff0c\u5fc5\u9808\u662f\u4e00\u7a2e\u53ef\u4ee5\u88ab",(0,a.kt)("inlineCode",{parentName:"p"},"\u8f15\u6613\u6539\u8b8a"),"\u7684\u7522\u54c1\u3002\u80fd\u5920\u5bb9\u6613\u5730\u88ab\u6539\u8b8a\u4e5f\u662f\u8edf\u9ad4\u7cfb\u7d71\u7684\u50f9\u503c\u4e4b\u4e00")))),(0,a.kt)("h2",{id:"\u66f4\u9ad8\u7684\u50f9\u503c"},"\u66f4\u9ad8\u7684\u50f9\u503c"),(0,a.kt)("p",null,"\u54ea\u4e00\u500b\u6bd4\u8f03\u597d\uff1f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u500b\u5b8c\u7f8e\u9054\u6210\u9700\u6c42\u7684\u61c9\u7528\u7a0b\u5f0f\u4f46\u7121\u6cd5\u88ab\u4fee\u6539"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u500b\u7121\u6cd5\u4f7f\u7528\u7684\u7a0b\u5f0f\u4f46\u53ef\u4ee5\u5bb9\u6613\u7684\u88ab\u4f9d\u7167\u9700\u8981\u4fee\u6539")),(0,a.kt)("h2",{id:"\u827e\u68ee\u8c6a\u77e9\u9663eisenhower-matrix"},"\u827e\u68ee\u8c6a\u77e9\u9663(Eisenhower Matrix)"),(0,a.kt)("p",null,"\u8003\u616e\u4ee5\u4e0b\u5e7e\u500b\u8edf\u9ad4\u958b\u767c\u904e\u7a0b\u7684\u60c5\u5883\uff0c\u5206\u5c6c\u54ea\u500b\u77e9\u9663\u7dad\u5ea6\uff1f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6e96\u6642\u5b8c\u6210\u529f\u80fd\u958b\u767c"),(0,a.kt)("li",{parentName:"ol"},"\u63d0\u5347\u7a0b\u5f0f\u57f7\u884c\u6548\u80fd"),(0,a.kt)("li",{parentName:"ol"},"\u5beb\u6e2c\u8a66"),(0,a.kt)("li",{parentName:"ol"},"\u4ee5\u826f\u597d\u7684\u67b6\u69cb\u9032\u884c\u958b\u767c\u5de5\u4f5c"),(0,a.kt)("li",{parentName:"ol"},"\u5ba2\u6236\u7684\u8981\u6c42\u4eca\u5929\u8981\u5b8c\u6210\u4fee\u6539"),(0,a.kt)("li",{parentName:"ol"},"\u7dad\u6301\u5718\u968a\u7687\u57ce\u4e4b\u5167\u7684\u548c\u6c23"),(0,a.kt)("li",{parentName:"ol"},"\u6539\u6389\u5225\u4eba\u7559\u4e0b\u4f86\u7684\u721b\u6524\u5b50")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Eisenhower Matrix",src:r(52954).Z,width:"1024",height:"768"})),(0,a.kt)("admonition",{title:"Important",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"\u7dca\u6025\u7684\u4e8b\u5f88\u5c11\u91cd\u8981\uff0c\u91cd\u8981\u7684\u4e8b\u5f88\u5c11\u7dca\u6025")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://topcareer.id/read/2021/02/14/47023/cobalah-matriks-eisenhower-rahasia-kerja-produktif/"},"\u5716\u7247\u51fa\u8655\uff1atopcareer.id")),(0,a.kt)("h2",{id:"\u70ba\u67b6\u69cb\u800c\u6230"},"\u70ba\u67b6\u69cb\u800c\u6230"),(0,a.kt)("p",null,"\u958b\u767c\u8005\u5fc5\u9808\u70ba\u4e86\u4ed6\u5011\u89ba\u5f97\u5c0d\u516c\u53f8\u6700\u597d\u7684\u4e8b\u60c5\u596e\u9b25\u3002\u5c31\u8ddf\u7ba1\u7406\u5718\u968a\u3001\u696d\u52d9\u5718\u968a\u4e00\u6a23\uff0c\u9019\u6c38\u9060\u90fd\u662f\u4e00\u5834",(0,a.kt)("strong",{parentName:"p"},"\u9b25\u722d"),"\u3002\u5982\u679c\u67b6\u69cb\u662f\u6700\u5f8c\u624d\u51fa\u73fe\u7684\uff0c\u958b\u767c\u7cfb\u7d71\u5c07\u8b8a\u5f97\u6602\u8cb4\uff0c\u6216\u8b8a\u5f97\u5e7e\u4e4e\u7121\u6cd5\u88ab\u4fee\u6539\u3002\u5982\u679c\u6f14\u8b8a\u5230\u9019\u500b\u7a0b\u5ea6\uff0c\u4e5f\u610f\u5473\u8457\u958b\u767c\u5718\u968a\u7684\u5931\u8077\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8eab\u70ba\u5de5\u7a0b\u5e2b\uff0c\u6709\u80fd\u529b\u8a2d\u8a08\u597d\u7684\u67b6\u69cb\u5beb\u51fa\u826f\u597d\u7684\u7a0b\u5f0f\uff0c\u662f\u4f60\u7684\u5c08\u696d"),(0,a.kt)("li",{parentName:"ul"},"\u653e\u68c4\u5c08\u696d\uff0c\u8ddf\u653e\u68c4\u8077\u6daf\u767c\u5c55\u662f\u7b49\u7fa9\u8a5e")),(0,a.kt)("admonition",{title:"Important",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"\u9019\u662f\u4f60\u88ab\u96c7\u7528\u7684\u539f\u56e0")),(0,a.kt)("admonition",{title:"\u82f1\u6587\u5c0f\u6559\u5ba4 AGGRESSIVE",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Aggressive\u539f\u610f\u662f\u6709\u4fb5\u7565\u6027\u7684\u3001\u597d\u9b25\u7684\u3002\u7a4d\u6975\u3001\u6709\u9032\u53d6\u5fc3\u7684"),(0,a.kt)("p",{parentName:"admonition"},"\u4f46\u5728\u8077\u5834\u7684\u884d\u4f38\u5247\u8912\u904e\u65bc\u8cb6\uff0c\u8aaa\u4e00\u4f4d\u61c9\u5fb5\u8005aggressive\uff0c\u901a\u5e38\u662f\u5728\u8aaa\u4ed6\u7a4d\u6975\u9032\u53d6\u3001\u5f88\u6709\u5e79\u52c1\uff0c\u7576\u7136\uff0c\u8cb6\u7fa9\u4e5f\u53ef\u80fd\u6307\u4e00\u500b\u4eba\u5484\u5484\u903c\u4eba\u3002"),(0,a.kt)("p",{parentName:"admonition"},"[",(0,a.kt)("a",{parentName:"p",href:"https://www.core-corner.com/Web/Main.php?stat=a_BgSvJIK"},"\u5916\u5546\u611b\u7528\u768477\u500b\u5b57\uff0c\u6bcf\u500b\u5b57\u90fd\u662f\u4f60\u7684\u8166"),"]")),(0,a.kt)("p",null,"\u5728\u6b64\u52c9\u52f5\u5927\u5bb6\uff1a",(0,a.kt)("strong",{parentName:"p"},"Stay homble, and be aggressive")),(0,a.kt)("p",null,"Mech\u65bc2022 Aug"))}m.isMDXComponent=!0},52954:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/eisenhower-matrix-7ae2f9e629b32c6704bcb69c523c3716.png"}}]);