"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[520],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(87462),a=n(67294),l=n(86010),i=n(12466),o=n(16550),u=n(91980),s=n(67392),c=n(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=m(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,s]=f({queryString:n,groupId:r}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),g=(()=>{const e=u??p;return d({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),h(e)}),[s,h,l]),tabValues:l}}var g=n(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:o,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==o&&(p(t),u(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},i,{className:(0,l.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function b(e){const t=h(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return a.createElement(b,(0,r.Z)({key:String(t)},e))}},49522:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));n(74866),n(85162);const l={title:"Ch13: \u8b93\u4e0d\u826f\u7684\u7a0b\u5f0f\u78bc\u51f8\u986f\u51fa\u4f86",sidebar_position:13},i=void 0,o={unversionedId:"sg/five-lines-of-code/ch13",id:"sg/five-lines-of-code/ch13",title:"Ch13: \u8b93\u4e0d\u826f\u7684\u7a0b\u5f0f\u78bc\u51f8\u986f\u51fa\u4f86",description:"\u53cd\u91cd\u69cb",source:"@site/docs/sg/five-lines-of-code/ch13.mdx",sourceDirName:"sg/five-lines-of-code",slug:"/sg/five-lines-of-code/ch13",permalink:"/docs/sg/five-lines-of-code/ch13",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/five-lines-of-code/ch13.mdx",tags:[],version:"current",lastUpdatedBy:"mingyen066@gmail.com",lastUpdatedAt:1715010307,formattedLastUpdatedAt:"May 6, 2024",sidebarPosition:13,frontMatter:{title:"Ch13: \u8b93\u4e0d\u826f\u7684\u7a0b\u5f0f\u78bc\u51f8\u986f\u51fa\u4f86",sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Ch12: \u907f\u514d\u6700\u4f73\u5316\u548c\u901a\u7528\u6027",permalink:"/docs/sg/five-lines-of-code/ch12"},next:{title:"Ch14: \u7e3d\u7d50",permalink:"/docs/sg/five-lines-of-code/ch14"}},u={},s=[{value:"\u53cd\u91cd\u69cb",id:"\u53cd\u91cd\u69cb",level:2},{value:"\u767c\u51fa\u6d41\u7a0b\u554f\u984c\u7684\u8a0a\u865f",id:"\u767c\u51fa\u6d41\u7a0b\u554f\u984c\u7684\u8a0a\u865f",level:2},{value:"\u5206\u96e2\u512a\u8cea\u548c\u907a\u7559\u7a0b\u5f0f\u78bc",id:"\u5206\u96e2\u512a\u8cea\u548c\u907a\u7559\u7a0b\u5f0f\u78bc",level:2},{value:"\u4e0d\u826f\u7a0b\u5f0f\u78bc\u7684\u7279\u5fb5",id:"\u4e0d\u826f\u7a0b\u5f0f\u78bc\u7684\u7279\u5fb5",level:2},{value:"\u7c21\u55ae\u800c\u5177\u9ad4 - \u672c\u66f8\u7684\u898f\u5247",id:"\u7c21\u55ae\u800c\u5177\u9ad4---\u672c\u66f8\u7684\u898f\u5247",level:3},{value:"\u7a0b\u5f0f\u78bc\u7570\u5473",id:"\u7a0b\u5f0f\u78bc\u7570\u5473",level:3},{value:"\u5faa\u74b0\u8907\u96dc\u5ea6 - \u5ba2\u89c0\u6307\u6a19",id:"\u5faa\u74b0\u8907\u96dc\u5ea6---\u5ba2\u89c0\u6307\u6a19",level:3},{value:"\u8a8d\u77e5\u8907\u96dc\u5ea6 - \u4e3b\u89c0\u6307\u6a19",id:"\u8a8d\u77e5\u8907\u96dc\u5ea6---\u4e3b\u89c0\u6307\u6a19",level:3},{value:"\u7834\u58de\u7a0b\u5f0f\u78bc",id:"\u7834\u58de\u7a0b\u5f0f\u78bc",level:2},{value:"\u4f7f\u7528enum (4.1.3\u7684\u53cd\u91cd\u69cb)",id:"\u4f7f\u7528enum-413\u7684\u53cd\u91cd\u69cb",level:3},{value:"\u4f7f\u7528\u6574\u6578\u548c\u5b57\u4e32\u4f5c\u70ba\u578b\u5225\u78bc",id:"\u4f7f\u7528\u6574\u6578\u548c\u5b57\u4e32\u4f5c\u70ba\u578b\u5225\u78bc",level:3},{value:"\u5c07\u9b54\u6cd5\u6578\u5b57\u52a0\u5165\u7a0b\u5f0f\u78bc\u4e2d",id:"\u5c07\u9b54\u6cd5\u6578\u5b57\u52a0\u5165\u7a0b\u5f0f\u78bc\u4e2d",level:3},{value:"\u65b0\u589e\u8a3b\u91cb\u5230\u7a0b\u5f0f\u78bc\u4e2d (Ch8\u7684\u53cd\u91cd\u69cb)",id:"\u65b0\u589e\u8a3b\u91cb\u5230\u7a0b\u5f0f\u78bc\u4e2d-ch8\u7684\u53cd\u91cd\u69cb",level:3},{value:"\u5728\u7a0b\u5f0f\u78bc\u4e2d\u52a0\u5165\u7a7a\u767d",id:"\u5728\u7a0b\u5f0f\u78bc\u4e2d\u52a0\u5165\u7a7a\u767d",level:3},{value:"\u4f9d\u64da\u547d\u540d\u5c0d\u4e8b\u7269\u5206\u7d44 (11.6\u7684\u53cd\u6a21\u5f0f)",id:"\u4f9d\u64da\u547d\u540d\u5c0d\u4e8b\u7269\u5206\u7d44-116\u7684\u53cd\u6a21\u5f0f",level:3},{value:"\u5728\u540d\u7a31\u4e2d\u52a0\u4e0a\u8108\u7d61",id:"\u5728\u540d\u7a31\u4e2d\u52a0\u4e0a\u8108\u7d61",level:3},{value:"\u5efa\u7acb\u9577\u65b9\u6cd5",id:"\u5efa\u7acb\u9577\u65b9\u6cd5",level:3},{value:"\u8b93\u65b9\u6cd5\u6709\u5f88\u591a\u53c3\u6578",id:"\u8b93\u65b9\u6cd5\u6709\u5f88\u591a\u53c3\u6578",level:3},{value:"\u4f7f\u7528getter\u548csetter (Ch6\u7684\u53cd\u91cd\u69cb)",id:"\u4f7f\u7528getter\u548csetter-ch6\u7684\u53cd\u91cd\u69cb",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},p=c("Row"),m=c("Col"),d={toc:s},f="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u53cd\u91cd\u69cb"},"\u53cd\u91cd\u69cb"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c07\u4e0d\u826f\u7684\u7a0b\u5f0f\u78bc\u51f8\u986f\u51fa\u4f86\uff0c\u80fd\u4e00\u773c\u770b\u51fa\u7684\u505a\u6cd5"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u78ba\u4fdd\u4e0d\u6703\u7834\u58de\u7a0b\u5f0f\u78bc\u7684\u524d\u63d0\u4e0b\uff0c\u6545\u610f\u5c07\u7a0b\u5f0f\u5beb\u721b")),(0,a.kt)("h2",{id:"\u767c\u51fa\u6d41\u7a0b\u554f\u984c\u7684\u8a0a\u865f"},"\u767c\u51fa\u6d41\u7a0b\u554f\u984c\u7684\u8a0a\u865f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6211\u5011\u6c92\u8fa6\u6cd5\u7e3d\u662f\u5c07\u7a0b\u5f0f\u5beb\u5f97\u597d",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7a0b\u5f0f\u78bc\u6216\u554f\u984c\u672c\u8eab\u7684\u8907\u96dc\u6027"),(0,a.kt)("li",{parentName:"ul"},"\u6642\u9593\u4e0d\u5920"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u78ba\u5b9a\u8a72\u600e\u9ebc\u505a"))),(0,a.kt)("li",{parentName:"ul"},"\u4ea4\u4ed8\u300c\u7cdf\u7cd5\u7684\u7a0b\u5f0f\u78bc\u300d\u6703\u6bd4\u4ea4\u4ed8\u300c\u5c07\u554f\u984c\u96b1\u85cf\u8d77\u4f86\u7684\u7a0b\u5f0f\u78bc\u300d\u4f86\u7684\u597d")),(0,a.kt)("admonition",{title:"Discussion",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u4e0b\u5217\u5169\u500b\u7bc4\u4f8b\uff0c\u54ea\u500b\u6bd4\u8f03\u597d\uff1f")),(0,a.kt)(p,{mdxType:"Row"},(0,a.kt)(m,{col:2,mdxType:"Col"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example1"',title:'"Example1"'},'function animate() {\n    handleChosen();\n    handleDisplaying();\n    handleCompleted();\n    handleMoving();\n}\n\nfunction handleChosen() {\n    if (value >= threshold\n     && banner.state === "chosen") {\n        // ...\n    }\n}\n\nfunction handleDisplaying() {\n    if (value >= target\n     && banner.state === "displaying") {\n        // ...\n    }\n}\n\nfunction handleCompleted() {\n    if (banner.state === "completed") {\n        // ...\n    }\n}\n'))),(0,a.kt)(m,{col:2,mdxType:"Col"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example2"',title:'"Example2"'},"function animate() {\n    // FIXME: All concern banner.state\n    if (value >= threshold\n     && banner.state === State.Chosen) {\n        // ...\n    }\n    if (value >= target\n     && banner.state === State.Displaying) {\n        // ...\n    }\n    if (banner.state === State.Completed) {\n        // ...\n    }\n}\n")))),(0,a.kt)("h2",{id:"\u5206\u96e2\u512a\u8cea\u548c\u907a\u7559\u7a0b\u5f0f\u78bc"},"\u5206\u96e2\u512a\u8cea\u548c\u907a\u7559\u7a0b\u5f0f\u78bc"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7a0b\u5f0f\u78bc\u8d8a\u7cdf\uff0c\u5c31\u8d8a\u5bb9\u6613\u88ab\u767c\u73fe",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u53ef\u80fd\u5beb\u51fa\u6c92\u6709\u554f\u984c\u7684\u7a0b\u5f0f\u78bc"),(0,a.kt)("li",{parentName:"ul"},"\u8fc5\u901f\u767c\u73fe\u554f\u984c\u5f88\u91cd\u8981"))),(0,a.kt)("li",{parentName:"ul"},"\u300c\u5982\u679c\u6c92\u6709\u8fa6\u6cd5\u505a\u5f97\u5f88\u597d\uff0c\u5c31\u8b93\u4ed6\u986f\u773c\u4e00\u9ede\u300d"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Quite good > Bad > Good enough")),(0,a.kt)("li",{parentName:"ul"},"\u91cd\u69cb\u662f\u9023\u9396\u53cd\u61c9",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u70ba\u4e86\u8b93\u7a0b\u5f0f\u78bc\u8b8a\u597d\uff0c\u610f\u5473\u8457\u9700\u8981\u8b93\u5468\u570d\u7684\u7a0b\u5f0f\u78bc\u4e5f\u8b8a\u597d"))),(0,a.kt)("li",{parentName:"ul"},"\u70ba\u4e86\u907f\u514d\u300c\u7834\u7a97\u6548\u61c9\u300d",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ud83d\udc94 \u53cd\u6b63\u9019\u88e1\u7684code\u5beb\u5f97\u5f88\u7cdf\uff0c\u6211\u5beb\u7cdf\u5728\u65c1\u908a\u4e5f\u4e0d\u6703\u600e\u9ebc\u6a23"),(0,a.kt)("li",{parentName:"ul"},"\u2705 \u628a\u597d\u7684code\u548c\u58de\u7684code\u5206\u958b\u653e\uff0c\u5728\u597dcode\u7684\u65c1\u908a\u6703\u6e1b\u5c11\u51fa\u73fe\u7cdf\u7cd5\u7684code\u7684\u6a5f\u6703")))),(0,a.kt)("h2",{id:"\u4e0d\u826f\u7a0b\u5f0f\u78bc\u7684\u7279\u5fb5"},"\u4e0d\u826f\u7a0b\u5f0f\u78bc\u7684\u7279\u5fb5"),(0,a.kt)("h3",{id:"\u7c21\u55ae\u800c\u5177\u9ad4---\u672c\u66f8\u7684\u898f\u5247"},"\u7c21\u55ae\u800c\u5177\u9ad4 - \u672c\u66f8\u7684\u898f\u5247"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="\u9055\u80cc\u826f\u597d\u898f\u5247\u7684\u7a0b\u5f0f\u78bc"',title:'"\u9055\u80cc\u826f\u597d\u898f\u5247\u7684\u7a0b\u5f0f\u78bc"'},"function minimum(arr: number[][]) {\n    let result = 99999;\n    for (let x = 0; x < arr.length; x++) {\n        for (let y = 0; y < arr[x].length; y++) {\n            if (arr[x][y] < result)\n                result = arr[x][y];\n            }\n    }\n    return result;\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u300c",(0,a.kt)("a",{parentName:"li",href:"/docs/sg/five-lines-of-code/ch3#311-rule-five-lines"},"\u4e94\u884c\u898f\u5247"),"\u300d"),(0,a.kt)("li",{parentName:"ul"},"\u300c",(0,a.kt)("a",{parentName:"li",href:"/docs/sg/five-lines-of-code/ch3#311-rule-five-lines"},"\u50c5\u5728\u958b\u982d\u4f7f\u7528if"),"\u300d")),(0,a.kt)("h3",{id:"\u7a0b\u5f0f\u78bc\u7570\u5473"},"\u7a0b\u5f0f\u78bc\u7570\u5473"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c21\u55ae\u7684\u7570\u5473\uff1a\u300c\u9b54\u6cd5\u6578\u5b57\u300d\u300c\u91cd\u8907\u7684\u7a0b\u5f0f\u78bc\u300d"),(0,a.kt)("li",{parentName:"ul"},"\u6709\u7684\u5f88\u96e3\uff0c\u9700\u8981\u7df4\u7fd2\u91cd\u69cb\u4e00\u6bb5\u6642\u9593\u624d\u6703\u5438\u5f15\u4f60\u7684\u76ee\u5149")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function minimum(arr: number[][]) {\n    let result = 99999;  // Bad smells: Magic number\n    for (let x = 0; x < arr.length; x++) {\n        for (let y = 0; y < arr[x].length; y++) {\n            if (arr[x][y] < result)\n                result = arr[x][y];\n        }\n    }\n    return result;\n}\n")),(0,a.kt)("h3",{id:"\u5faa\u74b0\u8907\u96dc\u5ea6---\u5ba2\u89c0\u6307\u6a19"},"\u5faa\u74b0\u8907\u96dc\u5ea6 - \u5ba2\u89c0\u6307\u6a19"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u500b\u8ff4\u5708\u3001\u4e00\u500bif\uff0c\u90fd\u6703\u589e\u52a0\u5faa\u74b0\u8907\u96dc\u5ea6(cyclomatic complexity)"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u5e38\u53ef\u4ee5\u7528\u7e2e\u6392\u6df1\u5ea6\u8a08\u7b97")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function minimum(arr: number[][]) { // +1\n    let result = 99999;\n    for (let x = 0; x < arr.length; x++) { // +1\n        for (let y = 0; y < arr[x].length; y++) { // +1\n            if (arr[x][y] < result) // +1\n                result = arr[x][y];\n        }\n    }\n    return result;\n}\n// total cyclomatic complexity = 4\n")),(0,a.kt)("h3",{id:"\u8a8d\u77e5\u8907\u96dc\u5ea6---\u4e3b\u89c0\u6307\u6a19"},"\u8a8d\u77e5\u8907\u96dc\u5ea6 - \u4e3b\u89c0\u6307\u6a19"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u300c\u8b80\u53d6\u9019\u6bb5code\u7684\u7528\u9014\uff0c\u9700\u8981\u5728\u8166\u888b\u4e2d\u8a18\u4f4f\u591a\u5c11\u8cc7\u8a0a\u91cf\u300d"),(0,a.kt)("li",{parentName:"ul"},"\u66f4\u63a5\u8fd1\u4eba\u5011\u95b1\u8b80code\u7684\u8a55\u4f30")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function minimum(arr: number[][]) {\n    let result = 99999;\n    for (let x = 0; x < arr.length; x++) { // +1\n        for (let y = 0; y < arr[x].length; y++) { // +2\n            if (arr[x][y] < result) // +3\n                result = arr[x][y];\n        }\n    }\n    return result;\n}\n// total cognitive complexity = 6\n")),(0,a.kt)("h2",{id:"\u7834\u58de\u7a0b\u5f0f\u78bc"},"\u7834\u58de\u7a0b\u5f0f\u78bc"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("span",{style:{color:"#33a8ff"}},"\u4e0d\u8981\u7834\u58de\u6b63\u78ba\u7684\u8cc7\u8a0a")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("span",{style:{color:"#33a8ff"}},"\u4e0d\u8981\u8b93\u672a\u4f86\u7684\u91cd\u69cb\u8b8a\u56f0\u96e3")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("span",{style:{color:"#33a8ff"}},"\u7d50\u679c\u61c9\u8a72\u8981\u5f15\u4eba\u6ce8\u76ee"))),(0,a.kt)("h3",{id:"\u4f7f\u7528enum-413\u7684\u53cd\u91cd\u69cb"},"\u4f7f\u7528enum (4.1.3\u7684\u53cd\u91cd\u69cb)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"enum\u6709\u540d\u7a31\uff0c\u5c07\u8cc7\u8a0a\u4fdd\u7559\u4e0b\u4f86"),(0,a.kt)("li",{parentName:"ol"},"\u5c0denum\u7684\u91cd\u69cb\u6709\u65e2\u5b9a\u7684\u6a19\u6e96\u6d41\u7a0b",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u300c",(0,a.kt)("a",{parentName:"li",href:"/docs/sg/five-lines-of-code/ch4#413-replace-type-code-with-classes"},"\u4f7f\u7528\u985e\u5225\u66ff\u4ee3\u578b\u5225"),"\u300d"),(0,a.kt)("li",{parentName:"ol"},"\u300c",(0,a.kt)("a",{parentName:"li",href:"/docs/sg/five-lines-of-code/ch4#414-pushing-code-into-classes"},"\u628a\u7a0b\u5f0f\u78bc\u79fb\u5230\u985e\u5225\u4e2d"),"\u300d"),(0,a.kt)("li",{parentName:"ol"},"\u300c",(0,a.kt)("a",{parentName:"li",href:"/docs/sg/five-lines-of-code/ch4#451-%E9%87%8D%E6%A7%8B%E6%A8%A1%E5%BC%8F%E5%88%AA%E9%99%A4%E5%BE%8C%E5%86%8D%E7%B7%A8%E8%AD%AFtry-delete-then-compile"},"\u5617\u8a66\u522a\u9664\u5f8c\u518d\u7de8\u8b6f"),"\u300d"))),(0,a.kt)("li",{parentName:"ol"},"Enum\u5f88\u5f15\u4eba\u6ce8\u76ee")),(0,a.kt)(p,{mdxType:"Row"},(0,a.kt)(m,{col:2,mdxType:"Col"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Before"',title:'"Before"'},"class Package {\n    private priority: boolean; scheduleDispatch() {\n        if (this.priority)\n            dispatchImmediately(this);\n        else\n            queue.push(this);\n    }\n}\n\n\n\n\n"))),(0,a.kt)(m,{col:2,mdxType:"Col"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="After"',title:'"After"'},"enum Importance {\n    Priority,\n    Regular\n}\nclass Package {\n    private priority: Importance; scheduleDispatch() {\n        if (this.priority === Importance.Priority)\n            dispatchImmediately(this);\n        else\n            queue.push(this);\n    }\n}\n")))),(0,a.kt)("h3",{id:"\u4f7f\u7528\u6574\u6578\u548c\u5b57\u4e32\u4f5c\u70ba\u578b\u5225\u78bc"},"\u4f7f\u7528\u6574\u6578\u548c\u5b57\u4e32\u4f5c\u70ba\u578b\u5225\u78bc"),(0,a.kt)(p,{mdxType:"Row"},(0,a.kt)(m,{col:2,mdxType:"Col"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="String as Type"',title:'"String',as:!0,'Type"':!0},'\n\nfunctionarea(width:number, shape:string) {\n    if (shape === "circle")\n        return (width/2) * (width/2) * Math.PI;\n    else if (shape === "square")\n        return width * width;\n}\n'))),(0,a.kt)(m,{col:2,mdxType:"Col"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Integer as Type"',title:'"Integer',as:!0,'Type"':!0},"const CIRCLE = 0;\nconst SQUARE = 1;\nfunction area(width: number, shape: number) {\n    if (shape === CIRCLE)\n        return (width/2) * (width/2) * Math.PI;\n    else if (shape === SQUARE)\n        return width * width;\n}\n")))),(0,a.kt)("h3",{id:"\u5c07\u9b54\u6cd5\u6578\u5b57\u52a0\u5165\u7a0b\u5f0f\u78bc\u4e2d"},"\u5c07\u9b54\u6cd5\u6578\u5b57\u52a0\u5165\u7a0b\u5f0f\u78bc\u4e2d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5e7e\u4e4e\u6240\u6709\u4eba\u770b\u5230magic number\u90fd\u6703\u6709\u53cd\u61c9",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ud83d\udc94 \u6703\u4e0d\u6703\u611f\u8b1d\u4f60\u7684\u7528\u5fc3\u826f\u82e6\u5c31\u96e3\u8aaa\u4e86"),(0,a.kt)("li",{parentName:"ul"},"\u2705 \u9019\u7a2ecode\u5f88\u5bb9\u6613\u88ab\u6539\u6b63")))),(0,a.kt)(p,{mdxType:"Row"},(0,a.kt)(m,{col:2,mdxType:"Col"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Before"',title:'"Before"'},"const FOUR_THIRDS = 4/3;\nclass Sphere {\n    volume() {\n        let result = FOUR_THIRDS;\n        for (let i = 0; i < 3; i++)\n            result = result * this.radius;\n        return result * Math.PI;\n    }\n}\n"))),(0,a.kt)(m,{col:2,mdxType:"Col"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="After"',title:'"After"'},"class Sphere {\n    volume() {\n        let result = 4/3; // Magic\n        for (let i = 0; i < 3; i++)\n            result = result * this.radius;\n        return result * 3.141592653589793; // Magic\n    }\n}\n")))),(0,a.kt)("h3",{id:"\u65b0\u589e\u8a3b\u91cb\u5230\u7a0b\u5f0f\u78bc\u4e2d-ch8\u7684\u53cd\u91cd\u69cb"},"\u65b0\u589e\u8a3b\u91cb\u5230\u7a0b\u5f0f\u78bc\u4e2d (Ch8\u7684\u53cd\u91cd\u69cb)"),(0,a.kt)(p,{mdxType:"Row"},(0,a.kt)(m,{col:2,mdxType:"Col"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Before"',title:'"Before"'},"function subMin(arr: number[][]) {\n\n    let min = Number.POSITIVE_INFINITY;\n    for (let x = 0; x < arr.length; x++) {\n        for(let y = 0; y < arr[x].length; y++) {\n            min = Math.min(min, arr[x][y]);\n        }\n    }\n}\n\n\nfor (let x = 0; x < arr.length; x++) {\n    for(let y = 0; y < arr[x].length; y++) {\n        arr[x][y] -= min;\n    }\n}\n"))),(0,a.kt)(m,{col:2,mdxType:"Col"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="After"',title:'"After"'},"function subMin(arr: number[][]) {\n    // Find miniumn\n    let min = Number.POSITIVE_INFINITY;\n    for (let x = 0; x < arr.length; x++) {\n        for(let y = 0; y < arr[x].length; y++) {\n            min = Math.min(min, arr[x][y]);\n        }\n    }\n}\n\n// Sub from each element\nfor (let x = 0; x < arr.length; x++) {\n    for(let y = 0; y < arr[x].length; y++) {\n        arr[x][y] -= min;\n    }\n}\n")))),(0,a.kt)("h3",{id:"\u5728\u7a0b\u5f0f\u78bc\u4e2d\u52a0\u5165\u7a7a\u767d"},"\u5728\u7a0b\u5f0f\u78bc\u4e2d\u52a0\u5165\u7a7a\u767d"),(0,a.kt)(p,{mdxType:"Row"},(0,a.kt)(m,{col:2,mdxType:"Col"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Before"',title:'"Before"'},"let cursor = cursor+1 % arr.length;\n// \u53ef\u80fd\u4e0d\u662f\u4f60\u60f3\u8981\u7684\n"))),(0,a.kt)(m,{col:2,mdxType:"Col"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="After"',title:'"After"'},"let cursor = (cursor + 1) % arr.length;\n// \u51f8\u986f\u51fa\u512a\u5148\u5e8f\uff0c\u800c\u4e0d\u662f\u4f9d\u8cf4\u904b\u7b97\u5b50\u672c\u8eab\u7684\u512a\u5148\u5e8f\n")))),(0,a.kt)("admonition",{title:"Javascript\u8207\u7a7a\u767d",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"\u5728JS\u4e2d\uff0c\u7a7a\u767d\u8207\u65b7\u884c\u4e0d\u6703\u88ab\u8996\u70ba\u57f7\u884c\u7684\u4e00\u90e8\u4efd"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Initial variable\nlet init = 20\n\n// Run IIFE\n((data) => {\n    console.log(data+1)\n})(init)\n"))),(0,a.kt)("h3",{id:"\u4f9d\u64da\u547d\u540d\u5c0d\u4e8b\u7269\u5206\u7d44-116\u7684\u53cd\u6a21\u5f0f"},"\u4f9d\u64da\u547d\u540d\u5c0d\u4e8b\u7269\u5206\u7d44 (11.6\u7684\u53cd\u6a21\u5f0f)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u900f\u904e\u547d\u540d\u7684\u5171\u540c\u5b57\u9996\u3001\u5b57\u5c3e\uff0c\u51f8\u986f\u51fa\u53c3\u6578\u9593\u7684\u95dc\u4fc2"),(0,a.kt)("li",{parentName:"ul"},"\u5f8c\u7e8c\u57f7\u884c\u898f\u5247\u300c",(0,a.kt)("a",{parentName:"li",href:"/docs/sg/five-lines-of-code/ch11#%E9%80%8F%E9%81%8E%E5%B0%81%E8%A3%9D%E5%88%A9%E7%94%A8%E9%80%9A%E7%94%A8%E7%9A%84%E5%AD%97%E9%A6%96%E5%AD%97%E5%B0%BE"},"\u5c01\u88dd\u8cc7\u6599"),"\u300d\u9032\u884c\u4fee\u6b63")),(0,a.kt)(p,{mdxType:"Row"},(0,a.kt)(m,{col:2,mdxType:"Col"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Before"',title:'"Before"'},"\nclass PopupWindow {\n    private windowPosition: Point2d;\n    private hasFocus: number;\n    private screenWidth: number;\n    private screenHeight: number;\n    private windowSize: Point2d;\n}\n"))),(0,a.kt)(m,{col:2,mdxType:"Col"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="After"',title:'"After"'},"class PopupWindow {\n    private windowPosition: Point2d; // prefix\n    private windowSize: Point2d; // prefix\n    private hasFocus: number;\n    private screenWidth: number; // prefix\n    private screenHeight: number; // prefix\n}\n")))),(0,a.kt)("h3",{id:"\u5728\u540d\u7a31\u4e2d\u52a0\u4e0a\u8108\u7d61"},"\u5728\u540d\u7a31\u4e2d\u52a0\u4e0a\u8108\u7d61"),(0,a.kt)(p,{mdxType:"Row"},(0,a.kt)(m,{col:2,mdxType:"Col"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Before"',title:'"Before"'},"function avg(arr: number[]) {\n    return sum(arr) / size(arr);\n}\nfunction size(arr: number[]) {\n    return arr.length;\n}\nfunction sum(arr: number[]) {\n    let sum = 0;\n    for (let i = 0; i < arr.length; i++) {\n        sum += arr[i];\n    }\n    return sum;\n}\n"))),(0,a.kt)(m,{col:2,mdxType:"Col"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="After"',title:'"After"'},"function avg_ArrUtil(arr: number[]) {\n    return sum(arr) / size(arr);\n}\nfunction size_ArrUtil(arr: number[]) {\n    return arr.length;\n}\nfunction sum_ArrUtil(arr: number[]) {\n    let sum = 0;\n    for (let i = 0; i < arr.length; i++) {\n        sum += arr[i];\n    }\n    return sum;\n}\n")))),(0,a.kt)("h3",{id:"\u5efa\u7acb\u9577\u65b9\u6cd5"},"\u5efa\u7acb\u9577\u65b9\u6cd5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6307\u884c\u6578\u5f88\u9577\u7684function"),(0,a.kt)("li",{parentName:"ul"},"\u5f88\u660e\u986f\uff0c\u5f15\u4eba\u6ce8\u76ee\u60f3\u56de\u4f86\u6539\u5b83")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function animate() {\n    if (value >= threshold\n     && banner.state === State.Chosen) {\n        // ...\n    }\n    if (value >= target\n     && banner.state === State.Displaying) {\n        // ...\n    }\n    if (banner.state === State.Completed) {\n        // ...\n    }\n}\n")),(0,a.kt)("h3",{id:"\u8b93\u65b9\u6cd5\u6709\u5f88\u591a\u53c3\u6578"},"\u8b93\u65b9\u6cd5\u6709\u5f88\u591a\u53c3\u6578"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f5c\u8005\u6700\u559c\u6b61\u7684\u4e00\u500b\u63d0\u9192\u7684\u65b9\u6cd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function stringConstructor(\n    prefix: string, // \u53c3\u6578\u5f88\u591a\uff0c\u5f15\u4eba\u6ce8\u76ee\n    joiner: string,\n    postfix: string,\n    parts: string[]\n) {\n    return prefix + parts.join(joiner) + postfix;\n}\n")),(0,a.kt)("h3",{id:"\u4f7f\u7528getter\u548csetter-ch6\u7684\u53cd\u91cd\u69cb"},"\u4f7f\u7528getter\u548csetter (Ch6\u7684\u53cd\u91cd\u69cb)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u907f\u514d\u4f7f\u7528\u5168\u57df\u8b8a\u6578\u6216\u516c\u958b\u6b04\u4f4d\u7684\u59a5\u5354\u505a\u6cd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Screen {\n    constructor(\n        private width: number,\n        private height: number\n    ) {}\n    getWidth() { return this.width; }\n    getHeight() { return this.height; }\n}\nlet screen: Screen;\n")))}h.isMDXComponent=!0}}]);