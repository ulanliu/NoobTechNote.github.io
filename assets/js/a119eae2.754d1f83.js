"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[6873],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(o,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[p]="string"==typeof e?e:r,i[1]=u;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(67294),l=n(86010),i=n(12466),u=n(16550),o=n(91980),s=n(67392),c=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[i,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[o,s]=f({queryString:n,groupId:a}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),k=(()=>{const e=o??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&u(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),b(e)}),[s,b,l]),tabValues:l}}var k=n(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:u,selectValue:o,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==u&&(p(t),o(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":u===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(g,(0,a.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},78488:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>u,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),l=n(74866),i=n(85162);const u={title:"Ch2: \u6df1\u5165\u77ad\u89e3\u91cd\u69cb\u7684\u539f\u7406",sidebar_label:"Ch2: \u6df1\u5165\u77ad\u89e3\u91cd\u69cb\u7684\u539f\u7406",sidebar_position:2},o=void 0,s={unversionedId:"sg/five-lines-of-code/ch2",id:"sg/five-lines-of-code/ch2",title:"Ch2: \u6df1\u5165\u77ad\u89e3\u91cd\u69cb\u7684\u539f\u7406",description:"\u53ef\u8b80\u6027\u8207\u53ef\u7dad\u8b77\u6027",source:"@site/docs/sg/five-lines-of-code/ch2.mdx",sourceDirName:"sg/five-lines-of-code",slug:"/sg/five-lines-of-code/ch2",permalink:"/docs/sg/five-lines-of-code/ch2",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/five-lines-of-code/ch2.mdx",tags:[],version:"current",lastUpdatedBy:"mingyen-chung",lastUpdatedAt:1714815139,formattedLastUpdatedAt:"May 4, 2024",sidebarPosition:2,frontMatter:{title:"Ch2: \u6df1\u5165\u77ad\u89e3\u91cd\u69cb\u7684\u539f\u7406",sidebar_label:"Ch2: \u6df1\u5165\u77ad\u89e3\u91cd\u69cb\u7684\u539f\u7406",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Ch1: \u91cd\u69cb\u91cd\u69cb",permalink:"/docs/sg/five-lines-of-code/ch1"},next:{title:"Ch3: Shatter long functions",permalink:"/docs/sg/five-lines-of-code/ch3"}},c={},p=[{value:"\u53ef\u8b80\u6027\u8207\u53ef\u7dad\u8b77\u6027",id:"\u53ef\u8b80\u6027\u8207\u53ef\u7dad\u8b77\u6027",level:2},{value:"2.1 \u53ef\u8b80\u6027 Readability",id:"21-\u53ef\u8b80\u6027-readability",level:3},{value:"2.1 \u53ef\u7dad\u8b77\u6027 Maintainability",id:"21-\u53ef\u7dad\u8b77\u6027-maintainability",level:3},{value:"\u7bc4\u4f8b\uff1a\u96dc\u8ca8\u5e97\u5eab\u5b58\u7ba1\u7406",id:"\u7bc4\u4f8b\u96dc\u8ca8\u5e97\u5eab\u5b58\u7ba1\u7406",level:3},{value:"2.1.2 \u300c\u6539\u8b8a\u7a0b\u5f0f\u78bc\u800c\u4e0d\u6539\u8b8a\u5176\u529f\u80fd\u300d",id:"212-\u6539\u8b8a\u7a0b\u5f0f\u78bc\u800c\u4e0d\u6539\u8b8a\u5176\u529f\u80fd",level:3},{value:"2.2 \u63d0\u9ad8\u901f\u5ea6\u3001\u5f48\u6027\u3001\u7a69\u5b9a\u6027",id:"22-\u63d0\u9ad8\u901f\u5ea6\u5f48\u6027\u7a69\u5b9a\u6027",level:2},{value:"\u7d44\u5408\u8207\u7e7c\u627f",id:"\u7d44\u5408\u8207\u7e7c\u627f",level:3},{value:"\u7bc4\u4f8b\uff1aBird and Peguin",id:"\u7bc4\u4f8bbird-and-peguin",level:4},{value:"\u7bc4\u4f8b\uff1a\u96dc\u8ca8\u5e97\u5eab\u5b58\u7ba1\u7406 (\u7e8c)",id:"\u7bc4\u4f8b\u96dc\u8ca8\u5e97\u5eab\u5b58\u7ba1\u7406-\u7e8c",level:4},{value:"\u900f\u904e\u300c\u65b0\u589e\u300d\u4f86\u4fee\u6539",id:"\u900f\u904e\u65b0\u589e\u4f86\u4fee\u6539",level:3},{value:"2.3 \u91cd\u69cb\u8207\u65e5\u5e38\u5de5\u4f5c",id:"23-\u91cd\u69cb\u8207\u65e5\u5e38\u5de5\u4f5c",level:2},{value:"\u5c0f\u7d50",id:"\u5c0f\u7d50",level:2}],d={toc:p},m="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u53ef\u8b80\u6027\u8207\u53ef\u7dad\u8b77\u6027"},"\u53ef\u8b80\u6027\u8207\u53ef\u7dad\u8b77\u6027"),(0,r.kt)("h3",{id:"21-\u53ef\u8b80\u6027-readability"},"2.1 \u53ef\u8b80\u6027 Readability"),(0,r.kt)("admonition",{title:"Discussion",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5927\u5bb6\u4f86\u627e\u78b4\uff0c\u4ee5\u4e0b\u7a0b\u5f0f\u78bc\u6709\u4ec0\u9ebc\u53ef\u4ee5\u6539\u5584\u7684")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Before Refactor",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function checkValue(str: boolean) {\n    // Check Value\n\n    if (str !== false) {\n        // return result\n        return true;\n    }\n\n    else;\n        return str;\n}\n"))),(0,r.kt)(i.Z,{value:"After Refactor",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function isTrue(bool: boolean) {\n    return bool;\n}\n")))),(0,r.kt)("h3",{id:"21-\u53ef\u7dad\u8b77\u6027-maintainability"},"2.1 \u53ef\u7dad\u8b77\u6027 Maintainability"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53ef\u7dad\u8b77\u6027\uff1a\u5728\u60f3\u5c0d\u7a0b\u5f0f\u78bc\u4fee\u6539\u6642\uff0c\u5c0d\u65bc\u5176\u95b1\u8b80\u7406\u89e3\u3001\u8a55\u4f30\u4fee\u6539\u7a0b\u5ea6\uff0c\u4f86\u9069\u61c9\u65b0\u76ee\u6a19\u6642\uff0c\u6240\u9700\u8981\u9032\u884c\u8abf\u67e5\u7684\u300c\u7a0b\u5ea6\u300d"),(0,r.kt)("li",{parentName:"ul"},"\u9700\u8981\u7684\u8abf\u67e5\u6642\u9593\u8d8a\u9577\uff0c\u4ee3\u8868\u53ef\u7dad\u8b77\u6027\u8d8a\u5dee")),(0,r.kt)("admonition",{title:"\u7cfb\u7d71\u8106\u5f31 System Fragile",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5728\u9032\u884c\u7a0b\u5f0f\u78bc\u4fee\u6539\u6642\uff0c\u7834\u58de\u5230\u53e6\u4e00\u500b\u770b\u4f3c\u4e0d\u76f8\u95dc\u7684\u529f\u80fd\uff0c\u9019\u7a2e\u8106\u5f31\u6027\u7684\u6839\u6e90\u901a\u5e38\u4f86\u81ea\u65bc\u300c\u5168\u57df\u72c0\u614b(Global State)\u300d")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5168\u57df\u72c0\u614b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5168\u57df\uff1a\u6307\u6211\u5011\u8003\u91cf\u7bc4\u570d\u4e4b\u5916\u7684\u6771\u897f"),(0,r.kt)("li",{parentName:"ul"},"\u72c0\u614b\uff1a\u5728\u57f7\u884c\u968e\u6bb5\u80fd\u5920\u6539\u8b8a\u7684\u4efb\u4f55\u6771\u897f"))),(0,r.kt)("li",{parentName:"ul"},"\u5168\u57df\u72c0\u614b\u4e4b\u6240\u4ee5\u6709\u554f\u984c\uff0c\u5728\u65bc\u5bb9\u6613\u5f15\u5165Side Effect",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5373\u300c\u4f60\u89ba\u5f97\u4ed6\u4e0d\u6703\u8b8a\uff0c\u4f46\u4ed6\u537b\u5728\u9810\u671f\u4e4b\u5916\u5730\u88ab\u5176\u4ed6\u4eba\u7d66\u6539\u8b8a\u4e86\u300d")))),(0,r.kt)("h3",{id:"\u7bc4\u4f8b\u96dc\u8ca8\u5e97\u5eab\u5b58\u7ba1\u7406"},"\u7bc4\u4f8b\uff1a\u96dc\u8ca8\u5e97\u5eab\u5b58\u7ba1\u7406"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Goods Class",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class Good {\n    constructor(quant, price) {\n        this.quant = quant\n        this.price = price\n    }\n\n    getQuant() { return this.quant }\n    getPrice() { return this.price }\n    daysUntilExpiry() { this.quant -= 1 }\n}\n\nclass Apple extends Good {\n    constructor(quant) { super(quant) }\n}\n\nclass LightBall extends Good {\n    constructor(quant) { super(quant) }\n\n    daysUntilExpiry() {\n        // \u71c8\u6ce1\u4e0d\u6703\u904e\u671f\uff0c\u4e0d\u9700\u8981\u6bcf\u5929\u81ea\u6e1b\u5eab\u5b58\uff0cOverride\u6389parent method\n    }\n}\n"))),(0,r.kt)(i.Z,{value:"Urgency Ranking",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u50f9\u683c\u9ad8\u7684\u8981\u512a\u5148\u8ce3\uff1b\u5eab\u5b58\u9ad8\u7684\u4e5f\u8a72\u512a\u5148\u8ce3\u51fa"),(0,r.kt)("li",{parentName:"ul"},"OCP: \u5c0d\u64f4\u5c55\u958b\u653e\u3001\u5c0d\u5be6\u4f5c\u5c01\u9589"),(0,r.kt)("li",{parentName:"ul"},"\u9019\u5e7e\u4e4e\u53ea\u80fd\u4f9d\u8cf4\u5de5\u7a0b\u5e2b\u300c\u8a18\u5f97\u300dquanty\u6703\u88ab\u62ff\u53bb\u7b97Urgency\u624d\u80fd\u907f\u514dbug")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const apple = new Apple(5, 20)\nconst lightBall = new LightBall(3, 100)\n\n// ...\n\nconst appleUrgency = apple.getPrice() / apple.getQuant()\nconst lightBallUrgency = lightBall.getPrice() / lightBall.getQuant() // buggy\n\n\n\n\n\n\n\n\n\n\n\n")))),(0,r.kt)("h3",{id:"212-\u6539\u8b8a\u7a0b\u5f0f\u78bc\u800c\u4e0d\u6539\u8b8a\u5176\u529f\u80fd"},"2.1.2 \u300c\u6539\u8b8a\u7a0b\u5f0f\u78bc\u800c\u4e0d\u6539\u8b8a\u5176\u529f\u80fd\u300d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u88ab\u91cd\u69cb\u6240\u7d0d\u5165\u7684\u7a0b\u5f0f\u78bc\u300c\u7bc4\u570d\u300d\u8981\u6709\u591a\u5927\uff0c\u662f\u500b\u982d\u75db\u7684\u554f\u984c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7d0d\u5165\u91cd\u69cb\u7684\u7a0b\u5f0f\u78bc\u7bc4\u570d\u8d8a\u5927\uff0c\u300c\u4e0d\u6539\u8b8a\u5176\u5f9e\u5916\u770b\u8d77\u4f86\u7684\u529f\u80fd\u300d\u8d8a\u5bb9\u6613\uff0c\u4f46\u98a8\u96aa\u3001\u7a0b\u5f0f\u78bc\u5408\u4f75\u885d\u7a81\u7684\u6a5f\u6703\u5c31\u8d8a\u9ad8"))),(0,r.kt)("li",{parentName:"ul"},"\u9069\u7576\u7684\u91cd\u69cb\u7bc4\u570d\u662f\u4e00\u500b\u56f0\u96e3\uff0c\u4e14\u91cd\u8981\u7684\u53d6\u6368\u5e73\u8861")),(0,r.kt)("admonition",{title:"\u91cd\u69cb\u7684\u4e09\u5927\u57fa\u77f3",type:"caution"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"\u900f\u904e\u6e05\u6670\u7684\u8868\u9054\u610f\u5716\u4f86\u63d0\u6607\u53ef\u8b80\u6027"),(0,r.kt)("li",{parentName:"ol"},"\u900f\u904e\u5c40\u90e8\u5316\u4e0d\u8b8a\u689d\u4ef6\u4f86\u63d0\u9ad8\u53ef\u7dad\u8b77\u6027"),(0,r.kt)("li",{parentName:"ol"},"\u4e0d\u5f71\u97ff\u95dc\u6ce8\u7bc4\u570d\u4e4b\u5916\u7684\u4efb\u4f55\u7a0b\u5f0f\u78bc\uff0c\u4f86\u9054\u62101.\u82072."))),(0,r.kt)("h2",{id:"22-\u63d0\u9ad8\u901f\u5ea6\u5f48\u6027\u7a69\u5b9a\u6027"},"2.2 \u63d0\u9ad8\u901f\u5ea6\u3001\u5f48\u6027\u3001\u7a69\u5b9a\u6027"),(0,r.kt)("h3",{id:"\u7d44\u5408\u8207\u7e7c\u627f"},"\u7d44\u5408\u8207\u7e7c\u627f"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u300c\u5584\u7528\u7269\u4ef6\u7d44\u5408\uff0c\u800c\u975e\u7e7c\u627f\u300d - GoF, Design Patterns")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7576\u7a0b\u5f0f\u53ef\u4ee5\u900f\u904e\u6539\u8b8a\u5176\u7d44\u5408\u800c\u8b8a\u66f4\u5176\u529f\u80fd\u6642\uff0c\u5c31\u5bb9\u6613\u5feb\u901f\u62bd\u63db\u96f6\u4ef6\uff0c\u5176\u80fd\u88ab\u4fee\u6539\u7684\u300c\u5f48\u6027\u300d\u5c31\u6703\u8d8a\u597d")),(0,r.kt)("h4",{id:"\u7bc4\u4f8bbird-and-peguin"},"\u7bc4\u4f8b\uff1aBird and Peguin"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u8981\u5728Bird interface\u52a0\u5165\u4e00\u500b",(0,r.kt)("inlineCode",{parentName:"li"},"canSwim()"),"\uff0c\u6703\u767c\u751f\u4ec0\u9ebc\u4e8b\uff1f")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Inheritance",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Bird {\n    hasBeak(): boolean;\n    canFly(): boolean;\n}\nclass CommonBird implements Bird {\n    hasBeak() { return true; }\n    canFly() { return true; }\n}\nclass Peguin extends CommonBird {\n    canFly() { return false; } // override\n}\n\n\n"))),(0,r.kt)(i.Z,{value:"Composition",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Bird {\n    hasBeak(): boolean;\n    canFly(): boolean;\n}\nclass CommonBird implements Bird {\n    hasBeak() { return true; }\n    canFly() { return true; }\n}\nclass Peguin implements Bird {\n    private bird = new CommonBird();\n    hasBeak() { return bird.hasBeak(); } // Manually re-raised\n    canFly() { return false; }\n}\n")))),(0,r.kt)("h4",{id:"\u7bc4\u4f8b\u96dc\u8ca8\u5e97\u5eab\u5b58\u7ba1\u7406-\u7e8c"},"\u7bc4\u4f8b\uff1a\u96dc\u8ca8\u5e97\u5eab\u5b58\u7ba1\u7406 (\u7e8c)"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Inheritance",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class Good {\n    constructor(quant, price) {\n        this.quant = quant\n        this.price = price\n    }\n\n    getQuant() { return this.quant }\n    getPrice() { return this.price }\n    daysUntilExpiry() { this.quant -= 1 }\n}\n\nclass Apple extends Good {\n    constructor(quant) { super(quant) }\n}\n\nclass LightBall extends Good {\n    constructor(quant) { super(quant) }\n\n    daysUntilExpiry() {\n        // \u71c8\u6ce1\u4e0d\u6703\u904e\u671f\uff0c\u4e0d\u9700\u8981\u6bcf\u5929\u81ea\u6e1b\u5eab\u5b58\uff0cOverride\u6389parent method\n    }\n}\n\n\n\n\n\n\n"))),(0,r.kt)(i.Z,{value:"Composition",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Good {\n    getQuant(): int;\n    getPrice(): int;\n    daysUntilExpiry(): void;\n}\n\nclass Apple implements Good {\n    constructor(quant, price) {\n        this.quant = quant\n        this.price = price\n    }\n    getQuant() { return this.quant }\n    getPrice() { return this.price }\n    daysUntilExpiry() {\n        this.quant -= 1\n    }\n}\n\nclass LightBall implements Good {\n    constructor(quant, price) {\n        this.quant = quant\n        this.price = price\n    }\n    getQuant() { return this.quant }\n    getPrice() { return this.price }\n    daysUntilExpiry() {\n        // do nothing\n    }\n}\n")))),(0,r.kt)("h3",{id:"\u900f\u904e\u65b0\u589e\u4f86\u4fee\u6539"},"\u900f\u904e\u300c\u65b0\u589e\u300d\u4f86\u4fee\u6539"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u300c\u4ee5\u65b0\u589e\uff0c\u800c\u4e0d\u662f\u4fee\u6539\u7684\u65b9\u5f0f\u4f86\u8b8a\u66f4\u7a0b\u5f0f\u78bc\u300d"),(0,r.kt)("li",{parentName:"ul"},"\u9019\u662f\u4f7f\u7528\u300c\u7d44\u5408\u300d\u800c\u975e\u300c\u7e7c\u627f\u300d\u5e36\u4f86\u7684\u597d\u8655",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5c0d\u64f4\u5c55\u958b\u653e\u3001\u5c0d\u5be6\u4f5c\u5c01\u9589 (OCP)"))),(0,r.kt)("li",{parentName:"ul"},"\u56e0\u70ba\u4e0d\u6703\u53bb\u66f4\u52d5\u539f\u6709\u7684\u7a0b\u5f0f\u78bc\uff0c\u52a0\u4e0a\u907f\u514dGlobal State\u7684\u4f5c\u6cd5\uff0c\u4fee\u6539(\u6216\u8aaa\uff0c\u65b0\u589e)\u7a0b\u5f0f\u78bc\u4e0d\u5bb9\u6613\u5f15\u5165\u65b0\u7684\u932f\u8aa4",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63d0\u9ad8\u4e86\u7a69\u5b9a\u6027")))),(0,r.kt)("admonition",{title:"Discussion",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u7a0b\u5f0f\u78bc\u4e00\u76f4\u88ab\u900f\u904e\u300c\u65b0\u589e\u300d\u4f86\u4fee\u6539\uff0c\u90a3\u6539\u5230\u5f8c\u4f86\uff0c\u6c92\u7528\u5230\u7684\u7a0b\u5f0f\u78bc(Dead Code)\u8a72\u600e\u9ebc\u8fa6\uff1f")),(0,r.kt)("h2",{id:"23-\u91cd\u69cb\u8207\u65e5\u5e38\u5de5\u4f5c"},"2.3 \u91cd\u69cb\u8207\u65e5\u5e38\u5de5\u4f5c"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u96e2\u958b\u67d0\u500b\u5730\u65b9\u524d\uff0c\u8b93\u90a3\u88e1\u6bd4\u4f7f\u7528\u524d\u66f4\u52a0\u4e7e\u6de8 - \u7ae5\u5b50\u8ecd\u898f\u5247")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u524d\u9762\u63d0\u904e\u7684\uff0c\u91cd\u69cb\u7684\u6642\u6a5f",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u5728\u4fee\u6539\u7a0b\u5f0f\u78bc",(0,r.kt)("strong",{parentName:"li"},"\u524d"),"\uff0c\u9032\u884c\u91cd\u69cb"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u4fee\u6539\u7a0b\u5f0f\u78bc",(0,r.kt)("strong",{parentName:"li"},"\u5f8c"),"\uff0c\u9032\u884c\u91cd\u69cb"))),(0,r.kt)("li",{parentName:"ul"},"\u4ee5\u91cd\u69cb\u4f5c\u70ba\u5b78\u7fd2",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6539code\u5bb9\u6613\u9084\u662f\u5bebcode\u5bb9\u6613\uff1f"),(0,r.kt)("li",{parentName:"ul"},"\u91cd\u69cb\u662f\u9700\u8981\u5b78\u7fd2\u7684\uff0c\u662f\u4e00\u7a2e\u7814\u7a76\u7a0b\u5f0f\u78bc\u7684\u65b9\u5f0f")))),(0,r.kt)("h2",{id:"\u5c0f\u7d50"},"\u5c0f\u7d50"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u907f\u514dGlobal State\uff0c\u628a\u4e0d\u8b8a\u689d\u4ef6\u5c40\u90e8\u5316\uff0c\u800c\u4e0d\u6539\u8b8a\u5176\u529f\u80fd\u800c\u5b8c\u6210\u91cd\u69cb"),(0,r.kt)("li",{parentName:"ul"},"\u8b39\u614e\u9078\u64c7\u91cd\u69cb\u7684\u300c\u7bc4\u570d\u300d\u5927\u5c0f"),(0,r.kt)("li",{parentName:"ul"},"\u512a\u5148\u63a1\u7528\u300c\u7d44\u5408\u300d\u800c\u975e\u300c\u7e7c\u627f\u300d"),(0,r.kt)("li",{parentName:"ul"},"\u91cd\u69cb\u61c9\u8a72\u662f\u65e5\u5e38\u5de5\u4f5c\u7684\u4e00\u90e8\u5206\uff0c\u4ee5\u9632\u6b62\u6280\u8853\u50b5\u7d2f\u7a4d"),(0,r.kt)("li",{parentName:"ul"},"\u91cd\u69cb\u662f\u9700\u8981\u5b78\u7fd2\u7684\uff0c\u7d66\u4e86\u6211\u5011\u770b\u5f85\u7a0b\u5f0f\u78bc\u7684\u7368\u7279\u8996\u89d2\u548c\u89c0\u9ede")))}f.isMDXComponent=!0}}]);