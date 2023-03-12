"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[6649],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var r=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=r.createContext({}),c=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(a),m=l,k=p["".concat(u,".").concat(m)]||p[m]||s[m]||n;return a?r.createElement(k,i(i({ref:t},d),{},{components:a})):r.createElement(k,i({ref:t},d))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5158:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var r=a(7462),l=(a(7294),a(3905));const n={title:"Ch29: \u6574\u6f54\u7684\u5d4c\u5165\u5f0f\u67b6\u69cb",tsidebar_label:"Ch29: \u6574\u6f54\u7684\u5d4c\u5165\u5f0f\u67b6\u69cb",sidebar_position:29},i=void 0,o={unversionedId:"sg/clean-architecture/ch29",id:"sg/clean-architecture/ch29",title:"Ch29: \u6574\u6f54\u7684\u5d4c\u5165\u5f0f\u67b6\u69cb",description:"29.0",source:"@site/docs/sg/clean-architecture/ch29.md",sourceDirName:"sg/clean-architecture",slug:"/sg/clean-architecture/ch29",permalink:"/docs/sg/clean-architecture/ch29",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/clean-architecture/ch29.md",tags:[],version:"current",lastUpdatedBy:"MichaelChen",lastUpdatedAt:1678628757,formattedLastUpdatedAt:"Mar 12, 2023",sidebarPosition:29,frontMatter:{title:"Ch29: \u6574\u6f54\u7684\u5d4c\u5165\u5f0f\u67b6\u69cb",tsidebar_label:"Ch29: \u6574\u6f54\u7684\u5d4c\u5165\u5f0f\u67b6\u69cb",sidebar_position:29},sidebar:"tutorialSidebar",previous:{title:"Ch28: \u6e2c\u8a66\u908a\u754c",permalink:"/docs/sg/clean-architecture/ch28"},next:{title:"Ch30: \u8cc7\u6599\u5eab\u662f\u7d30\u7bc0",permalink:"/docs/sg/clean-architecture/ch30"}},u={},c=[{value:"\u4ec0\u9ebc\u662ffirmware(\u97cc\u9ad4)?",id:"\u4ec0\u9ebc\u662ffirmware\u97cc\u9ad4",level:2},{value:"No more firmware code",id:"no-more-firmware-code",level:2},{value:"APP-TITUDE TEST",id:"app-titude-test",level:2},{value:"\u8edf\u9ad4\u5efa\u69cb\u4e09\u968e\u6bb5(Kent Beck)",id:"\u8edf\u9ad4\u5efa\u69cb\u4e09\u968e\u6bb5kent-beck",level:3},{value:"THE TARGET-HARDWARE BOTTLENECK",id:"the-target-hardware-bottleneck",level:2},{value:"A CLEAN EMBEDDED ARCHITECTURE IS A TESTABLE EMBEDDED ARCHITECTURE",id:"a-clean-embedded-architecture-is-a-testable-embedded-architecture",level:2},{value:"Layers",id:"layers",level:3},{value:"Three Layers",id:"three-layers",level:3},{value:"The Hardware Is a Detail",id:"the-hardware-is-a-detail",level:4},{value:"\u786c\u9ad4\u62bd\u8c61\u5c64(HAL, hardware abstraction layer)",id:"\u786c\u9ad4\u62bd\u8c61\u5c64hal-hardware-abstraction-layer",level:4},{value:"PROGRAMMING TO INTERFACES AND SUBSTITUTABILITY",id:"programming-to-interfaces-and-substitutability",level:4},{value:"DRY CONDITIONAL COMPILATION DIRECTIVES DRY",id:"dry-conditional-compilation-directives-dry",level:4},{value:"\u7e3d\u7d50",id:"\u7e3d\u7d50",level:2}],d={toc:c},p="wrapper";function s(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"29.0",src:a(9249).Z,width:"283",height:"296"})),(0,l.kt)("p",null,"\u201cAlthough software does not wear out, firmware and hardware become obsolete, thereby requiring software modifications.\u201d(Doug Schmidt)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8edf\u9ad4\u4e0d\u4f3c\u786c\u9ad4\u6703\u8017\u640d\u6216\u904e\u6642\uff0c\u4f46\u662f\u4e5f\u9700\u8981\u8207\u6642\u4ff1\u9032")),(0,l.kt)("p",null,"\u201cAlthough software does not wear out, it can be destroyed from within by unmanaged dependencies on firmware and hardware.\u201d(Robert Cecil Martin)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8edf\u9ad4\u96d6\u7136\u4e0d\u4f3c\u786c\u9ad4\u6703\u8017\u640d\u6216\u904e\u6642\uff0c\u4f46\u8981\u6ce8\u610f\u8edf\u9ad4\u53ef\u80fd\u6703\u88ab\u6c92\u6709\u59a5\u5584\u7ba1\u5229\u7684\u786c\u9ad4\u6216\u97cc\u9ad4\u641e\u7206")),(0,l.kt)("h2",{id:"\u4ec0\u9ebc\u662ffirmware\u97cc\u9ad4"},"\u4ec0\u9ebc\u662ffirmware(\u97cc\u9ad4)?"),(0,l.kt)("p",null,"Doug Schmidt"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u88ab\u5132\u5b58\u5728\u4e0d\u53ef\u8b8a\u7684\u8a18\u61b6\u9ad4\u8a2d\u5099\uff0c\u4f8b\u5982ROM, EPROM, flash memory"),(0,l.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u5728\u786c\u9ad4\u4e0a\u7684\u4e00\u500b\u6307\u4ee4\u6216\u8005\u4e00\u6bb5\u7a0b\u5f0f"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u786c\u9ad4\u4e2d\u7684\u8edf\u9ad4\u7a0b\u5f0f"),(0,l.kt)("li",{parentName:"ul"},"\u88ab\u5beb\u5728ROM\u7684\u7a0b\u5f0f\u6216\u8cc7\u6599\n\u4f86",(0,l.kt)("a",{parentName:"li",href:"https://ppfocus.com/0/dia795597.html"},"\u770b\u770b"),"\u9019\u4e9b\u662f\u5565><")),(0,l.kt)("p",null,"Robert Cecil Martin"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u61c9\u8a72\u4e0d\u662f\u770b\u5b58\u5728\u54ea\u88e1\uff0c\u662f\u6709\u6c92\u6709\u5c0d\u786c\u9ad4\u6709\u4f9d\u8cf4"),(0,l.kt)("li",{parentName:"ul"},"\u624b\u6a5f\u7684app\u7b97\u4e0d\u7b97\u5462\uff1f\u76ee\u524d\u61c9\u8a72\u4e0d\u7b97\uff0c\u4f46\u65e9\u671fAndroid\u5de5\u7a0b\u5e2b\u6c92\u6709\u5c07App\u908f\u8f2f\u8ddfAndrioid API\u5206\u96e2\u4e4b\u524d\u5c31\u7b97\u3002")),(0,l.kt)("h2",{id:"no-more-firmware-code"},"No more firmware code"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8edf\u9ad4\u5de5\u7a0b\u5e2b\u4e0d\u8981\u518d\u5bebfirmare code\u4e86"),(0,l.kt)("li",{parentName:"ul"},"\u7ffb\u8b6f\u849f\u84bb",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u518d\u5beb\u4e00\u5806\u8ddf\u786c\u9ad4\u8026\u5408\u56b4\u91cd\u7684code\u4e86"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u9019\u6a23\u786c\u9ad4\u7684\u6539\u52d5\u5c31\u6703\u5f71\u97ff\u904e\u4f86\uff0c\u90a3\u8edf\u9ad4\u7684\u751f\u547d\u9031\u671f\u5c31\u6703\u4f9d\u8cf4\u65bc\u786c\u9ad4\uff0c\u8b8a\u5f97\u6bd4\u8f03\u77ed"))),(0,l.kt)("li",{parentName:"ul"},"\u8209\u500b\ud83c\udf30",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u901a\u5e38\u6211\u5011\u9700\u8981\u8655\u7406\u5668\u628a\u786c\u9ad4\u7684\u547d\u4ee4\u6d88\u606f\u8f49\u5316\u6210\u8edf\u9ad4\u7684\u8f38\u5165\uff0c\u4f46\u901a\u5e38\u64cd\u4f5c\u6d88\u606f\u8f49\u5316\u7684code\u8ddf\u64cd\u4f5c\u786c\u9ad4\u7684code\u5e38\u5e38\u653e\u5728\u540c\u500b\u6587\u4ef6\uff0c\u800c\u4e14\u6d88\u606f\u8f49\u5316\u7684\u908f\u8f2f\u4e2d\u5e38\u5e38\u5b58\u5728\u786c\u9ad4\u64cd\u4f5c\u7684\u7d30\u7bc0\uff0c\u9019\u6a23\u5c0d\u4f5c\u8005\u4f86\u8aaa\u5c31\u662ffirmware code\u3002")))),(0,l.kt)("h2",{id:"app-titude-test"},"APP-TITUDE TEST"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f9d\u64da\u9700\u6c42\u8dd1\u8d77\u4f86\u7684\u7a0b\u5f0f\u6e2c\u8a66"),(0,l.kt)("li",{parentName:"ul"},"\u70ba\u4f55\u5d4c\u5165\u5f0f\u8edf\u9ad4(embedded software)\u90fd\u8b8a\u6210\u97cc\u9ad4(firmware)\uff0c\u56e0\u70ba\u5728\u5d4c\u5165\u5f0f\u8edf\u9ad4\u6211\u5011\u66f4\u805a\u7126\u5728\u52d5\u4e0d\u52d5\u5f97\u4e86\uff0c\u800c\u4e0d\u95dc\u6ce8\u8edf\u9ad4\u7684\u751f\u547d\u9031\u671f\u3002")),(0,l.kt)("h3",{id:"\u8edf\u9ad4\u5efa\u69cb\u4e09\u968e\u6bb5kent-beck"},"\u8edf\u9ad4\u5efa\u69cb\u4e09\u968e\u6bb5(Kent Beck)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u201cFirst make it work.\u201d You are out of business if it doesn\u2019t work.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7ffb\u8b6f\u849f\u84bb\uff1a\u5148\u80fd\u52d5\uff0c\u4e0d\u80fd\u52d5\u5c31\u4e0d\u8981\u73a9\u4e86"))),(0,l.kt)("li",{parentName:"ul"},"\u201cThen make it right.\u201d Refactor the code so that you and others can understand it and evolve it as needs change or are better understood.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7ffb\u8b6f\u849f\u84bb\uff1a\u6539\u5584\u4ed6\uff0c\u8b93\u4ed6\u53ef\u4ee5\u88ab\u81ea\u5df1\u6216\u5176\u4ed6\u4eba\u770b\u61c2(\u53ef\u8b80\u6027\u9ad8)\uff0c\u4ee5\u4fbf\u4f9d\u7167\u9700\u6c42\u4e0d\u65b7\u6539\u5584\u8207\u6f14\u9032(\u53ef\u64f4\u5c55)"))),(0,l.kt)("li",{parentName:"ul"},"\u201cThen make it fast.\u201d Refactor the code for \u201cneeded\u201d performance.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7ffb\u8b6f\u849f\u84bb\uff1a\u8b93\u4ed6\u8b8a\u5feb\uff0c\u70ba\u4f55\u66f4\u597d\u7684\u6027\u80fd\u9700\u6c42\u91cd\u69cbcode"))),(0,l.kt)("li",{parentName:"ul"},"\u5c0f\u6545\u4e8b\u5927\u9053\u7406",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Learn what works, then make a better solution."),(0,l.kt)("li",{parentName:"ul"},"Progress instead of perfect."),(0,l.kt)("li",{parentName:"ul"},"\u6709\u4e9b\u4eba\u7684\u554f\u984c\u662f\u53ea\u6709\u7b2c\u4e00\u6b65\uff0c\u6c92\u6709\u5e36\u8457\u8981\u505a\u7b2c\u4e8c\u6b65\u7684\u601d\u7dad\u53bb\u8a2d\u8a08\uff0c\u5c31\u6703\u5f88\u96e3\u64f4\u5c55 -> only fulfill the app-titude test"),(0,l.kt)("li",{parentName:"ul"},"\u6709\u4e9b\u4eba\u7684\u554f\u984c\u662f\u525b\u958b\u59cb\u5c31\u60f3\u8981\u5be6\u73fe\u7b2c\u4e8c\u6b65\uff0c\u90a3\u5c31\u6703\u5728\u7b2c\u4e00\u6b65\u82b1\u8cbb\u8a31\u591a\u6642\u9593")))),(0,l.kt)("h2",{id:"the-target-hardware-bottleneck"},"THE TARGET-HARDWARE BOTTLENECK"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5d4c\u5165\u5f0f\u5de5\u7a0b\u5e2b\u7684\u7279\u6b8a\u4e4b\u8655\uff0c\u56e0\u70ba\u8981\u8655\u7406\u8ddf\u786c\u9ad4\u95dc\u806f\u7684\u4e00\u4e9b\u554f\u984c\uff0c\u6703\u5c0e\u81f4\u6c92\u6709\u62ff\u5230\u786c\u9ad4\u5c31\u6c92\u6709\u8fa6\u6cd5\u6e2c\u8a66\u7a0b\u5f0f\u54ea\u88e1\u6709\u554f\u984c\u3002"),(0,l.kt)("li",{parentName:"ul"},"THE TARGET-HARDWARE BOTTLENECK \u5c31\u662f\u9019\u6a23\u7684\u74f6\u9838\uff0c\u5982\u679c\u6c92\u6709\u4f9d\u7167\u6e05\u6670\u7684\u67b6\u69cb\u4f86\u8a2d\u8a08\uff0c\u5f88\u591a\u6642\u5019\u6c92\u6709\u6307\u5b9a\u7684\u786c\u9ad4\uff0c\u5c31\u7121\u6cd5\u6e2c\u8a66\uff0c\u9020\u6210\u958b\u767c\u5ef6\u8aa4\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4f46\u662f\u4e5f\u5fc5\u9808\u627f\u8a8d\uff0c\u5d4c\u5165\u5f0f\u958b\u767c\u672c\u8eab\u5c31\u6709\u7279\u6b8a\u6027\uff0c\u4f46\u4e5f\u4e0d\u80fd\u8aaa\u5c31\u4e0d\u9069\u7528Clean Architecture\u7684\u6240\u6709\u5167\u5bb9\u3002")),(0,l.kt)("h2",{id:"a-clean-embedded-architecture-is-a-testable-embedded-architecture"},"A CLEAN EMBEDDED ARCHITECTURE IS A TESTABLE EMBEDDED ARCHITECTURE"),(0,l.kt)("h3",{id:"layers"},"Layers"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"29.1",src:a(6493).Z,width:"567",height:"590"})),(0,l.kt)("h3",{id:"three-layers"},"Three Layers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5206\u6210\u786c\u9ad4\u3001\u97cc\u9ad4\u3001\u8edf\u9ad4")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"29.2",src:a(9572).Z,width:"542",height:"562"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u786c\u9ad4\u8ddf\u5176\u4ed6\u90e8\u5206\u8981\u5206\u96e2\u958b\u4f86"),(0,l.kt)("li",{parentName:"ul"},"\u97cc\u9ad4\u8ddf\u8edf\u9ad4\u4e5f\u8981\u5206\u958b\uff0c\u5426\u5247code\u8abf\u6574\u90fd\u9700\u8981\u6709\u76f8\u61c9\u7684\u6574\u5408\u6e2c\u8a66\uff0c\u4e0d\u7136\u5c31\u5bb9\u6613\u6709\u6f0f\u7db2\u4e4b\u9b5a\u3002")),(0,l.kt)("h4",{id:"the-hardware-is-a-detail"},"The Hardware Is a Detail"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"29.3",src:a(6695).Z,width:"534",height:"558"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u786c\u9ad4\u8ddf\u97cc\u9ad4\u5206\u754c\u662f\u6e05\u695a\u7684\uff0c\u4f46\u97cc\u9ad4\u8ddf\u8edf\u9ad4\u5206\u754c\u5f88\u6a21\u7cca")),(0,l.kt)("h4",{id:"\u786c\u9ad4\u62bd\u8c61\u5c64hal-hardware-abstraction-layer"},"\u786c\u9ad4\u62bd\u8c61\u5c64(HAL, hardware abstraction layer)"),(0,l.kt)("p",null,"\u5340\u5206\u97cc\u9ad4\u8ddf\u8edf\u9ad4\u7684\u4e2d\u9593\u5c64\uff0c\u628aHAL\u5c64\u6b21\u63d0\u9ad8\u5230\u8edf\u9ad4\u8ddf\u97cc\u9ad4\u4e4b\u9593\uff0c\u800c\u4e0d\u662f\u786c\u9ad4\u8ddf\u97cc\u9ad4\u4e4b\u9593"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u5411HAL\u7684\u4f7f\u7528\u8005\uff08\u8edf\u9ad4\uff09\u986f\u793a\u786c\u9ad4\u7d30\u7bc0",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8655\u7406\u5668\u662f\u7d30\u7bc0",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uff08BAD\uff09\u8655\u7406\u5668\u5ee0\u5546\u597d\u5fc3\u63d0\u4f9b\u65b0\u7684\u95dc\u9375\u5b57\uff0c\u4ee5\u4fbf\u63d0\u53d6\u8655\u7406\u5668\u7279\u6027",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9019\u7a2e\u597d\u5fc3\u8981\u5c0f\u5fc3\uff0c\u6216\u8a31\u7576\u4e0b\u5f88\u65b9\u4fbf\uff0c\u4f46\u662f\u8981migrate\u5230\u4e0d\u540c\u74b0\u5883\u5c31\u6703\u4ed8\u51fa\u4ee3\u50f9"))),(0,l.kt)("li",{parentName:"ul"},"\uff08BAD\uff09\u628acode\u7d81\u5728\u7de8\u8b6f\u5668\u4e0a"),(0,l.kt)("li",{parentName:"ul"},"\u8655\u7406\u5668\u62bd\u8c61\u5c64\uff08processor abstraction layer,PAL\uff09"))),(0,l.kt)("li",{parentName:"ul"},"\u4f5c\u696d\u7cfb\u7d71\u662f\u7d30\u7bc0",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f5c\u696d\u7cfb\u7d71\u62bd\u8c61\u5c64\uff08operating system abstraction layer, OSAL\uff09")))))),(0,l.kt)("h4",{id:"programming-to-interfaces-and-substitutability"},"PROGRAMMING TO INTERFACES AND SUBSTITUTABILITY"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ee5\u4ecb\u9762\u548c\u66ff\u63db\u6027\u4f86\u8a2d\u8a08\u7a0b\u5f0f"),(0,l.kt)("li",{parentName:"ul"},"\u53ea\u8981\u6211\u5011\u7684printf\u51fd\u6578\u8ddf\u6a19\u6e96\u5eab\u7684printf\u51fd\u6578\u4ecb\u9762\u4e00\u81f4\u5c31\u53ef\u66ff\u63db"),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u500b\u5206\u5c64\u4e2d\u61c9\u8a72\u90fd\u662f\u53ef\u4ee5\u6e2c\u8a66\u7684")),(0,l.kt)("h4",{id:"dry-conditional-compilation-directives-dry"},"DRY CONDITIONAL COMPILATION DIRECTIVES DRY"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53ef\u80fd\u6709\u7121\u9650\u91cd\u8907\u7684\u7a0b\u5f0f\u51fa\u73fe\u5728\u5d4c\u5165\u5f0f\u7a0b\u5f0f"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679cHAL\u4e2d\u63d0\u4f9b\u4ecb\u9762\uff0c\u800c\u4e0d\u662f\u5404\u7a2eif... do something")),(0,l.kt)("h2",{id:"\u7e3d\u7d50"},"\u7e3d\u7d50"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7c21\u6f54\u7684\u5d4c\u5165\u5f0f\u67b6\u69cb\u6709\u5229\u65bc\u4fdd\u6301\u7522\u54c1\u9577\u671f\u7684\u5065\u5eb7\u72c0\u614b\u3002")))}s.isMDXComponent=!0},9249:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/29.0-8e46067928ebe3de274eab526371df7c.png"},6493:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/29.1-3be6bbc331023e39ce6aa4e2c021fc1b.png"},9572:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/29.2-82a08a8a8de413a6d067b2c204180e49.png"},6695:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/29.3-1f47fe15f1a9110bd738601d54cd42b3.png"}}]);