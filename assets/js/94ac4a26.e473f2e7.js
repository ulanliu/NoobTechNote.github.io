"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[6401],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return s}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),u=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=u(a),s=r,k=c["".concat(p,".").concat(s)]||c[s]||m[s]||l;return a?n.createElement(k,i(i({ref:e},d),{},{components:a})):n.createElement(k,i({ref:e},d))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8701:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return m}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={title:"Ch9: \u53ef\u9760\u901a\u4fe1",tsidebar_label:"Ch9: \u53ef\u9760\u901a\u4fe1",sidebar_position:9},p=void 0,u={unversionedId:"sg/fenix-architecture/ch9",id:"sg/fenix-architecture/ch9",title:"Ch9: \u53ef\u9760\u901a\u4fe1",description:"\u96f6\u4fe1\u4efb\u7db2\u8def",source:"@site/docs/sg/fenix-architecture/ch9.md",sourceDirName:"sg/fenix-architecture",slug:"/sg/fenix-architecture/ch9",permalink:"/docs/sg/fenix-architecture/ch9",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/fenix-architecture/ch9.md",tags:[],version:"current",lastUpdatedBy:"zoe chen",lastUpdatedAt:1677722979,formattedLastUpdatedAt:"3/2/2023",sidebarPosition:9,frontMatter:{title:"Ch9: \u53ef\u9760\u901a\u4fe1",tsidebar_label:"Ch9: \u53ef\u9760\u901a\u4fe1",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Ch8: \u6d41\u91cf\u6cbb\u7406",permalink:"/docs/sg/fenix-architecture/ch8"},next:{title:"Web API the Good Parts",permalink:"/docs/sg/web-api-the-good-parts/"}},d={},m=[{value:"\u96f6\u4fe1\u4efb\u7db2\u8def",id:"\u96f6\u4fe1\u4efb\u7db2\u8def",level:2},{value:"\u908a\u754c\u5b89\u5168\u6a21\u578b (Perimeter-Based Security Model)",id:"\u908a\u754c\u5b89\u5168\u6a21\u578b-perimeter-based-security-model",level:3},{value:"\u96f6\u4fe1\u4efb\u5b89\u5168\u6a21\u578b (Zero-Trust Security Model)",id:"\u96f6\u4fe1\u4efb\u5b89\u5168\u6a21\u578b-zero-trust-security-model",level:3},{value:"\u5b89\u5168\u6a21\u578b\u7684\u6bd4\u8f03",id:"\u5b89\u5168\u6a21\u578b\u7684\u6bd4\u8f03",level:3},{value:"Zero Trust\u7684\u4e94\u9805\u5047\u5b9a",id:"zero-trust\u7684\u4e94\u9805\u5047\u5b9a",level:3},{value:"Zero Trust\u7684\u7279\u5fb5",id:"zero-trust\u7684\u7279\u5fb5",level:3},{value:"1. \u96f6\u4fe1\u4efb\u7db2\u8def\u67b6\u69cb\uff0c\u4e0d\u4ee3\u8868\u653e\u68c4\u5728\u908a\u754c\u4e0a\u7684\u5b89\u5168\u4fdd\u8b77",id:"1-\u96f6\u4fe1\u4efb\u7db2\u8def\u67b6\u69cb\u4e0d\u4ee3\u8868\u653e\u68c4\u5728\u908a\u754c\u4e0a\u7684\u5b89\u5168\u4fdd\u8b77",level:4},{value:"2. \u8eab\u4efd\u9a57\u8b49\u53ea\u6e90\u81ea\u65bc\u670d\u52d9",id:"2-\u8eab\u4efd\u9a57\u8b49\u53ea\u6e90\u81ea\u65bc\u670d\u52d9",level:4},{value:"3. \u670d\u52d9\u4e4b\u9593\u6c92\u6709\u56fa\u6709\u7684\u4fe1\u4efb\u95dc\u4fc2",id:"3-\u670d\u52d9\u4e4b\u9593\u6c92\u6709\u56fa\u6709\u7684\u4fe1\u4efb\u95dc\u4fc2",level:4},{value:"4. \u96c6\u4e2d\u3001\u4e14\u5171\u4eab\u7684\u5b89\u5168\u7b56\u7565\u5be6\u65bd\u9ede",id:"4-\u96c6\u4e2d\u4e14\u5171\u4eab\u7684\u5b89\u5168\u7b56\u7565\u5be6\u65bd\u9ede",level:4},{value:"5. \u6388\u4fe1\u4efb\u7684\u6a5f\u5668\u904b\u4f5c\u4f86\u6e90\u5df2\u77e5\u7684\u4ee3\u78bc",id:"5-\u6388\u4fe1\u4efb\u7684\u6a5f\u5668\u904b\u4f5c\u4f86\u6e90\u5df2\u77e5\u7684\u4ee3\u78bc",level:4},{value:"6. \u81ea\u52d5\u5316\u3001\u6a19\u6e96\u5316\u7684\u8b8a\u66f4\u7ba1\u7406",id:"6-\u81ea\u52d5\u5316\u6a19\u6e96\u5316\u7684\u8b8a\u66f4\u7ba1\u7406",level:4},{value:"7. \u5f37\u9694\u96e2\u7684\u5de5\u4f5c\u8ca0\u8f09",id:"7-\u5f37\u9694\u96e2\u7684\u5de5\u4f5c\u8ca0\u8f09",level:4},{value:"\u63a2\u7d22Google\u7684Zero Trust\u5be6\u73fe",id:"\u63a2\u7d22google\u7684zero-trust\u5be6\u73fe",level:3},{value:"\u5c0d\u5b89\u5168\u7684\u9858\u666f",id:"\u5c0d\u5b89\u5168\u7684\u9858\u666f",level:4},{value:"Google\u7684\u5be6\u73fe",id:"google\u7684\u5be6\u73fe",level:4},{value:"\u670d\u52d9\u5b89\u5168",id:"\u670d\u52d9\u5b89\u5168",level:2}],c={toc:m};function s(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u96f6\u4fe1\u4efb\u7db2\u8def"},"\u96f6\u4fe1\u4efb\u7db2\u8def"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u6728\u6876\u6548\u61c9")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u53c8\u7a31 \u77ed\u677f\u7406\u8ad6 / Cannikin Law / Buckets Effect"),(0,l.kt)("p",{parentName:"div"},"\u6c7a\u5b9a\u6728\u6876\u627f\u6c34\u91cf\u7684\u95dc\u9375\u56e0\u7d20\uff0c\u662f\u69cb\u6210\u6728\u6876\u7684\u6700\u77ed\u7684\u6728\u677f\u9ad8\u5ea6\n\u7cfb\u7d71\u6574\u9ad4\u5b89\u5168\u7684\u5f37\u5ea6\uff0c\u53d6\u6c7a\u65bc\u6700\u8584\u5f31\u7684\u90a3\u4e00\u500b\u9ede"))),(0,l.kt)("h3",{id:"\u908a\u754c\u5b89\u5168\u6a21\u578b-perimeter-based-security-model"},"\u908a\u754c\u5b89\u5168\u6a21\u578b (Perimeter-Based Security Model)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u50b3\u7d71\u505a\u6cd5\uff0c\u5b89\u5168\u63aa\u65bd\u96c6\u4e2d\u5728\u5404\u500b\u5340\u57df\u7684\u908a\u754c\u4e0a"),(0,l.kt)("li",{parentName:"ul"},"VPN, DMZ, Firewall, Intranet/Extranet"),(0,l.kt)("li",{parentName:"ul"},"\u53ea\u8981\u4e00\u500b\u9ede\u88ab\u653b\u7834\uff0c\u653b\u64ca\u8005\u5c31\u80fd\u4fb5\u5165\u5167\u7db2\u7684\u5176\u4ed6\u7cfb\u7d71")),(0,l.kt)("h3",{id:"\u96f6\u4fe1\u4efb\u5b89\u5168\u6a21\u578b-zero-trust-security-model"},"\u96f6\u4fe1\u4efb\u5b89\u5168\u6a21\u578b (Zero-Trust Security Model)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://cloud.google.com/blog/products/identity-security/beyondprod-whitepaper-discusses-cloud-native-security-at-google"},"BeyondProd: How Google moved from perimeter-based to cloud-native security")," - 2019 ",(0,l.kt)("a",{parentName:"li",href:"http://arthurchiao.art/blog/google-beyondprod-zh/"},"(\u4e2d\u8b6f\u7248)")),(0,l.kt)("li",{parentName:"ul"},"\u300c\u4e0d\u61c9\u4ee5\u67d0\u500b\u56fa\u6709\u7684\u7279\u5fb5\u4f86\u81ea\u52d5\u4fe1\u4efb\u4efb\u4f55\u6d41\u91cf\uff0c\u9664\u975e\u660e\u78ba\u5f97\u5230\u80fd\u5e36\u8868\u8acb\u6c42\u4f86\u6e90\u7684\u8eab\u4efd\u6191\u8b49\u300d"),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u65bcPKI\u5be6\u73fe (Public Key Infra)"),(0,l.kt)("li",{parentName:"ul"},"\u8f03\u9069\u5408\u5fae\u670d\u52d9\uff0c\u96f2\u539f\u751f\u6642\u4ee3\u7684\u5b89\u5168\u6a21\u578b")),(0,l.kt)("h3",{id:"\u5b89\u5168\u6a21\u578b\u7684\u6bd4\u8f03"},"\u5b89\u5168\u6a21\u578b\u7684\u6bd4\u8f03"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Perimeter Based"),(0,l.kt)("th",{parentName:"tr",align:null},"Zero Trust"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7cbe\u795e"),(0,l.kt)("td",{parentName:"tr",align:null},"\u57fa\u65bc\u9632\u706b\u7246\u7b49\u8a2d\u65bd\uff0c\u8a8d\u70ba\u908a\u754c\u5167\u53ef\u4fe1(\u53ef\u88f8\u5954)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u670d\u52d9\u8207\u670d\u52d9\u6e9d\u901a\u9700\u8981\u6191\u8b49\uff0c\u5167\u90e8\u670d\u52d9\u5f7c\u6b64\u9593\u9700\u8981\u6a5f\u5236\u5efa\u7acb\u4fe1\u4efb")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8cc7\u6e90\u91cd\u7528\u6027"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u7279\u5b9a\u7684IP Address\u6216\u786c\u9ad4"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8cc7\u6e90\u5229\u7528\u7387\u66f4\u9ad8\uff0c\u91cd\u7528\uff0c\u5171\u4eab\u6548\u679c\u66f4\u597d\uff0c\u53ef\u91cd\u8907\u5229\u7528IP\u6216\u786c\u9ad4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u786c\u9ad4\u7684\u8026\u5408"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ad8\uff0c\u670d\u52d9\u904b\u4f5c\u5728\u5df2\u77e5\u7684\uff0c\u53ef\u9810\u671f\u7684\u6a5f\u5668\u4e0a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u786c\u9ad4\u88ab\u62bd\u8c61\u5316\uff0c\u79c1\u6709/\u516c\u6709\u96f2\u6df7\u5408\u90e8\u7f72")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AuthN (\u8eab\u4efd\u9a57\u8b49)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u57fa\u65bcIP\u7684\u8eab\u4efd\u9a57\u8b49 (WL/BL)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u57fa\u65bc\u670d\u52d9\u7684\u8eab\u4efd")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AuthZ (\u6388\u6b0a)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b89\u5168\u76f8\u95dc\u9700\u6c42\u7531\u61c9\u7528\u5c64\u5206\u5225\u5be6\u73fe"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7531\u57fa\u790e\u8a2d\u65bd\u4f86\u5be6\u73fe\uff0c\u57fa\u790e\u8a2d\u65bd\u53ca\u6210\u4e86\u5171\u4eab\u7684\u5b89\u5168\u9700\u6c42")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5b89\u5168\u76f8\u95dc\u7684\u958b\u767c\u7d04\u675f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f03\u5f31\uff0c\u5404\u81ea\u5be6\u73fe"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f03\u9ad8\uff0c\u61c9\u7528\u8981\u9075\u5b88\u57fa\u790e\u5efa\u8a2d\u63d0\u4f9b\u7684\u5b89\u5168\u5be6\u73fe")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5b89\u5168\u89c0\u6e2c\u6027"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f03\u5f31"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f03\u9ad8\uff0c\u6709\u8fa6\u6cd5\u505a\u5b89\u5168\u7b56\u7565\u7684\u5168\u5c40\u8996\u5716")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u767c\u5e03\u983b\u7387"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f03\u4f4e\uff0c\u6216\u8005\u8aaa\u4e0d\u5bb9\u6613\u63d0\u9ad8"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6a19\u6e96\u5316\u7684\u69cb\u5efa\u8207\u767c\u5e03\u6d41\u7a0b")))),(0,l.kt)("h3",{id:"zero-trust\u7684\u4e94\u9805\u5047\u5b9a"},"Zero Trust\u7684\u4e94\u9805\u5047\u5b9a"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Ref: ",(0,l.kt)("a",{parentName:"p",href:"https://www.amazon.com/Zero-Trust-Networks-Building-Untrusted/dp/1491962194/"},"Zero Trust Networks")," Ch1")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u7db2\u8def\u59cb\u7d42\u53d7\u5230\u5c0d\u624b\u89ac\u89a6"),(0,l.kt)("li",{parentName:"ol"},"\u7db2\u8def\u7e3d\u662f\u5b58\u5728\u5916\u90e8\u8207\u5167\u90e8\u5a01\u8105"),(0,l.kt)("li",{parentName:"ol"},"\u4e0a\u7db2\u4f4d\u7f6e\u4e26\u4e0d\u80fd\u4f5c\u70ba\u4fe1\u4efb\u5ea6\u7684\u4f9d\u64da"),(0,l.kt)("li",{parentName:"ol"},"\u5c0d\u6240\u6709\u8a2d\u5099\u3001\u4f7f\u7528\u8005\u548c\u7db2\u8def\u6d41\u91cf\u90fd\u9700\u8981\u900f\u904e\u8eab\u4efd\u9a57\u8b49(AuthN)\uff0c\u4e26\u53d6\u5f97\u5b58\u53d6\u6388\u6b0a(AuthZ)"),(0,l.kt)("li",{parentName:"ol"},"\u5b89\u5168\u653f\u7b56\u5fc5\u9808\u53ef\u4ee5\u52d5\u614b\u8abf\u6574\uff0c\u4e26\u76e1\u53ef\u80fd\u4ee5\u5404\u7a2e\u8cc7\u6599\u4f86\u505a\u70ba\u8a55\u4f30\u4f9d\u64da")),(0,l.kt)("h3",{id:"zero-trust\u7684\u7279\u5fb5"},"Zero Trust\u7684\u7279\u5fb5"),(0,l.kt)("h4",{id:"1-\u96f6\u4fe1\u4efb\u7db2\u8def\u67b6\u69cb\u4e0d\u4ee3\u8868\u653e\u68c4\u5728\u908a\u754c\u4e0a\u7684\u5b89\u5168\u4fdd\u8b77"},"1. \u96f6\u4fe1\u4efb\u7db2\u8def\u67b6\u69cb\uff0c\u4e0d\u4ee3\u8868\u653e\u68c4\u5728\u908a\u754c\u4e0a\u7684\u5b89\u5168\u4fdd\u8b77"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9632\u706b\u7246\u7b49\u908a\u754c\u5b89\u5168\u8a2d\u65bd\u4e0d\u662fZero Trust\u7684\u67b6\u69cb\u6838\u5fc3\uff0c\u4f46\u4ecd\u662f\u4e00\u7a2e\u63d0\u5347\u5b89\u5168\u6027\u6709\u6548\u4e14\u5fc5\u8981\u7684\u624b\u6bb5")),(0,l.kt)("h4",{id:"2-\u8eab\u4efd\u9a57\u8b49\u53ea\u6e90\u81ea\u65bc\u670d\u52d9"},"2. \u8eab\u4efd\u9a57\u8b49\u53ea\u6e90\u81ea\u65bc\u670d\u52d9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Trust Chain (\u4fe1\u4efb\u93c8)\uff0c\u4f60\u53ef\u4ee5\u7528\u4e00\u500bcert\u53bb\u4fdd\u8b77\u53e6\u4e00\u500bcert\uff0c\u4e00\u500bsecret\u53bb\u4fdd\u8b77\u53e6\u4e00\u500bsecret\uff0cwhat\u53bb\u4fdd\u8b77what\u3002\u4f46\u6700\u7d42\uff0c\u4f60\u771f\u6b63\u4fe1\u4efb\u7684\u6839\u6e90\u4e00\u5b9a\u662f",(0,l.kt)("strong",{parentName:"li"},"Who")),(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982\uff1a\u958b\u767c\u7a0b\u5f0f\u7684\u958b\u767c\u8005\uff1b\u8ca0\u8cac\u90e8\u7f72\u7684CICD Runner\uff1b\u4f60\u5916\u5305Infra\u7684\u67d0\u9593\u516c\u53f8\uff1b\u4f60\u8ddf\u4e0a\u6e38\u5ee0\u5546\u7c3d\u8a02\u7684\u5408\u7d04...etc.")),(0,l.kt)("h4",{id:"3-\u670d\u52d9\u4e4b\u9593\u6c92\u6709\u56fa\u6709\u7684\u4fe1\u4efb\u95dc\u4fc2"},"3. \u670d\u52d9\u4e4b\u9593\u6c92\u6709\u56fa\u6709\u7684\u4fe1\u4efb\u95dc\u4fc2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u660e\u78ba\u6388\u6b0a\u7684\u8abf\u7528\u8005\u624d\u80fd\u8a2a\u554f\u8cc7\u6e90\u3002\u5982\u679c\u67d0\u500b\u670d\u52d9\u7bc0\u9ede\u88ab\u5165\u4fb5\uff0c\u53ef\u4ee5\u9632\u6b62\u53d7\u640d\u7bc4\u570d\u64f4\u5927")),(0,l.kt)("h4",{id:"4-\u96c6\u4e2d\u4e14\u5171\u4eab\u7684\u5b89\u5168\u7b56\u7565\u5be6\u65bd\u9ede"},"4. \u96c6\u4e2d\u3001\u4e14\u5171\u4eab\u7684\u5b89\u5168\u7b56\u7565\u5be6\u65bd\u9ede"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8207\u5fae\u670d\u52d9\u5f37\u8abf\u7684\u300c\u5206\u6563\u6cbb\u7406\u300d\u76f8\u53cd\u3002\u5b89\u5168\u76f8\u95dc\u7684\u9700\u6c42\u61c9\u8a72\u8981\u96c6\u4e2d\u5be6\u73fe")),(0,l.kt)("h4",{id:"5-\u6388\u4fe1\u4efb\u7684\u6a5f\u5668\u904b\u4f5c\u4f86\u6e90\u5df2\u77e5\u7684\u4ee3\u78bc"},"5. \u6388\u4fe1\u4efb\u7684\u6a5f\u5668\u904b\u4f5c\u4f86\u6e90\u5df2\u77e5\u7684\u4ee3\u78bc"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9650\u5236Server\u53ea\u80fd\u4f7f\u7528\u8a8d\u8b49\u904e\u7684code\u8ddfconfig"),(0,l.kt)("li",{parentName:"ul"},"\u4e5f\u53ea\u80fd\u904b\u4f5c\u5728\u901a\u904ePKI\u8a8d\u8b49\u7684\u74b0\u5883\u4e2d"),(0,l.kt)("li",{parentName:"ul"},"\u5c0dCICD\u6d41\u7a0b\u9020\u6210\u8f03\u5927\u7684\u6539\u8b8a\uff0c\u5c0d\u65bcSoftware Supply Chain\u7684\u6240\u6709\u968e\u6bb5\u90fd\u52a0\u5165\u63a7\u5236\u7b56\u7565")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u8edf\u9ad4\u4f9b\u61c9\u93c8")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Software Supply Chain; SSC"),(0,l.kt)("p",{parentName:"div"},"\u4ee5\u4e0b\u7bc0\u9304\u81ea",(0,l.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/zh-tw/%E8%BB%9F%E9%AB%94%E4%BE%9B%E6%87%89%E9%8F%88"},"Wikipedia")," \u300c\u8edf\u9ad4\u4f9b\u61c9\u93c8\u300d"),(0,l.kt)("p",{parentName:"div"},"\u5c07\u88fd\u9020\u696d\u7684\u4f9b\u61c9\u93c8\u6982\u5ff5\u7528\u5728\u8edf\u9ad4\u958b\u767c\u4e0a\uff0c\u662f\u6307\u5728\u8edf\u9ad4\u88fd\u54c1\uff08software artifact\uff09\u958b\u767c\u904e\u7a0b\u4e2d\uff0c\u6240\u9700\u8981\u7684\u5143\u4ef6\uff08component\uff09\u3001\u51fd\u5f0f\u5eab\u3001\u5de5\u5177\u548c\u6d41\u7a0b"),(0,l.kt)("p",{parentName:"div"},"\u8edf\u9ad4\u4f9b\u61c9\u5546\u5728\u958b\u767c\u8edf\u9ad4\u6642\uff0c\u6703\u6574\u5408\u958b\u6e90\u8edf\u9ad4\u53ca\u5546\u696d\u8edf\u9ad4\u7684\u5143\u4ef6\u3002\u8edf\u9ad4\u6750\u6599\u8868\uff08software bill of material\uff0cSBOM\uff09","[2]","\u4e2d\u5217\u51fa\u8edf\u9ad4\u5de5\u4ef6\u958b\u767c\u6642\u9700\u8981\u7684\u5143\u4ef6","[3]","\u3002\u8edf\u9ad4\u6750\u6599\u8868\u985e\u4f3c\u98df\u54c1\u4e2d\u7684\u6210\u4efd\u6a19\u7c64\uff0c\u6210\u4efd\u6a19\u7c64\u8aaa\u660e\u98df\u54c1\u7684\u6210\u4efd\uff0c\u56e0\u6b64\u5728\u9078\u64c7\u98df\u54c1\u6642\uff0c\u53ef\u4ee5\u907f\u958b\u904e\u654f\u7269\u8cea\u3002\u5728\u9078\u64c7\u8edf\u9ad4\u6642\u53ef\u4ee5\u5229\u7528\u8edf\u9ad4\u6750\u6599\u8868\uff0c\u907f\u958b\u6703\u9020\u6210\u640d\u5bb3\u7684\u8edf\u9ad4\u3002"))),(0,l.kt)("h4",{id:"6-\u81ea\u52d5\u5316\u6a19\u6e96\u5316\u7684\u8b8a\u66f4\u7ba1\u7406"},"6. \u81ea\u52d5\u5316\u3001\u6a19\u6e96\u5316\u7684\u8b8a\u66f4\u7ba1\u7406"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Infra as Code (IaC) / Config Management"),(0,l.kt)("li",{parentName:"ul"},"\u8981\u5148\u6a19\u6e96\u5316\uff0c\u624d\u6709\u8fa6\u6cd5\u81ea\u52d5\u5316")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u8981\u5148\u6a19\u6e96\u5316\uff0c\u624d\u6709\u8fa6\u6cd5\u81ea\u52d5\u5316"),(0,l.kt)("p",{parentName:"div"},"\u7d93\u9a57\u4e0a\uff0c\u5f88\u591aCICD Pipeline\u91cd\u7528\u6027\u5f88\u4f4e\u4ee5\u53ca\u958b\u767c\u56f0\u96e3\u7684\u4e3b\u56e0\u5c31\u662f\u56e0\u70ba\u6c92\u6709\u5148\u9032\u884c\u6a19\u6e96\u5316"))),(0,l.kt)("h4",{id:"7-\u5f37\u9694\u96e2\u7684\u5de5\u4f5c\u8ca0\u8f09"},"7. \u5f37\u9694\u96e2\u7684\u5de5\u4f5c\u8ca0\u8f09"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5de5\u4f5c\u8ca0\u8f09(Workload)\u9700\u8981\u88ab\u9694\u96e2\uff0c\u5c0d\u65bc\u5b89\u5168\u7684\u5be6\u73fe\u624d\u6709\u4f9d\u64da"),(0,l.kt)("li",{parentName:"ul"},"\u5bb9\u5668\u5316\uff0c\u5bb9\u5668\u8abf\u5ea6(Borg/K8S)\u6280\u8853\u5c0d\u65bc\u8ca0\u8f09\u9694\u96e2\u76f8\u5c0d\u4e0d\u5229"),(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u5c08\u9580\u95dc\u6ce8\u5bb9\u5668\u9694\u96e2\u7684\u5de5\u5177\u5be6\u73fe")),(0,l.kt)("h3",{id:"\u63a2\u7d22google\u7684zero-trust\u5be6\u73fe"},"\u63a2\u7d22Google\u7684Zero Trust\u5be6\u73fe"),(0,l.kt)("h4",{id:"\u5c0d\u5b89\u5168\u7684\u9858\u666f"},"\u5c0d\u5b89\u5168\u7684\u9858\u666f"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5176\u5be6\u5f88\u96e3\u9054\u6210")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"\u5c0d\u7a0b\u5f0f\u4f86\u8aaa"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5c0d\u4eba\u985e\u4f86\u8aaa"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u65e5\u5e38"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b89\u5168"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8896\u624b\u65c1\u89c0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u4f8b\u5916"),(0,l.kt)("td",{parentName:"tr",align:null},"\u98a8\u96aa\u767c\u751f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52d5\u5e72\u9810")))),(0,l.kt)("h4",{id:"google\u7684\u5be6\u73fe"},"Google\u7684\u5be6\u73fe"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728\u908a\u754c\u4e0a\u4fdd\u8b77\u5167\u90e8\u670d\u52d9\u514d\u53d7DDoS\u7684\u653b\u64ca"),(0,l.kt)("p",{parentName:"li"},"\u5728\u908a\u754c\u5be6\u73fe\u4e86Google Front End\u7684proxy\uff0c\u8ca0\u8cac\u4fdd\u8b49\u6b64\u5f8c\u7684\u6d41\u91cf\u90fd\u5728TLS\u4e0a\u50b3\u8f38\uff0c\u4e26\u81ea\u52d5\u5c07\u6d41\u91cf\u8def\u7531\u5230\u5408\u9069\u7684\u5340\u57df\u4e2d")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u8eab\u4efd\u9a57\u8b49\u53ea\u4f86\u81ea\u65bc\u670d\u52d9"),(0,l.kt)("p",{parentName:"li"},"\u8a2d\u8a08\u4e86Application Layer Transport Security\u7684\u9a57\u8b49\u6a5f\u5236\uff0c\u662f\u4e00\u7a2e\u7528\u65bc\u96d9\u5411\u9a57\u8b49\u548c\u50b3\u8f38\u52a0\u5bc6\u7684\u7cfb\u7d71\uff0c\u505a\u81ea\u52d5\u7684service to service\u7684PKI\u7d81\u5b9a")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u78ba\u4fdd\u6c92\u6709\u300c\u56fa\u5b9a\u300d\u7684\u4fe1\u4efb\u95dc\u4fc2"),(0,l.kt)("p",{parentName:"li"},"\u8a2d\u8a08Service Access Policy\u4f86\u7ba1\u7406\u4e00\u500b\u670d\u52d9\u5411\u53e6\u4e00\u500b\u670d\u52d9\u767c\u8d77\u8acb\u6c42\u6642\u6240\u9700\u63d0\u4f9b\u7684cert\uff0cpermission\u4ee5\u53caaudit\u7b56\u7565\u3002\n\u652f\u63f4\u5168\u5c40\u7684\u8996\u89d2\u7684\u96c6\u4e2d\u8a2a\u554f\u63a7\u5236\u3001\u5206\u6790")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u78ba\u4fdd\u6a5f\u5668\u53ea\u57f7\u884c\u4f86\u6e90\u5df2\u77e5\u7684\u4ee3\u78bc"),(0,l.kt)("p",{parentName:"li"},"\u8a2d\u8a08\u4e86Binary Authorization\u7684deploy\u6aa2\u67e5\u6a5f\u5236\uff0c\u78ba\u4fdd\u5728\u6574\u500bSSC\u88e1\uff0c\u90fd\u7b26\u5408\u5167\u90e8\u5b89\u5168\u7684\u6aa2\u67e5\u7b56\u7565")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u78ba\u4fddWorkload\u7684\u5f37\u9694\u96e2"),(0,l.kt)("p",{parentName:"li"},"\u8a2d\u8a08\u4e86gVisor\u7684\u8f15\u91cf\u7d1a\u865b\u64ec\u5316\u65b9\u6848\uff0c\u662f\u4e00\u7a2e\u5f4c\u88dc\u5bb9\u5668\u6280\u8853\u9694\u96e2\u4e0d\u8db3\u554f\u984c\u7684\u6280\u8853\u3002\u70ba\u6bcf\u500b\u5bb9\u5668\u63d0\u4f9b\u4e00\u500b\u7368\u7acb\u7684\u865b\u64eckernel (\u5728gVisor\u7a31\u70baSentry)"),(0,l.kt)("p",{parentName:"li"},"\u672c\u66f8\u7b46\u8005\u8a8d\u70ba\uff0c\u9019\u4e9b\u6280\u8853\u770b\u8d77\u4f86\u50cf\u5bb9\u5668\u6280\u8853\uff0c\u4f46\u5176\u5be6\u662f\u8f15\u91cf\u5316\u7684\u865b\u64ec\u6a5f\u5668\u6280\u8853"))),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Question")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u4f60\u770b\u904e\u7cfb\u7d71\u505a\u5230Zero Trust\u9019\u4e9b\u4e8b\u55ce\uff1f"),(0,l.kt)("p",{parentName:"div"},"\u9019\u6703\u5178\u7bc4\u8f49\u79fb\u55ce\uff1f\u70ba\u4ec0\u9ebc\uff1f"))),(0,l.kt)("h2",{id:"\u670d\u52d9\u5b89\u5168"},"\u670d\u52d9\u5b89\u5168"),(0,l.kt)("p",null,"(TODO)"))}s.isMDXComponent=!0}}]);