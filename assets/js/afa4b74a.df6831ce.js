"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[8748],{3905:(t,e,l)=>{l.d(e,{Zo:()=>k,kt:()=>p});var n=l(67294);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function a(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function i(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?a(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function u(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var s=n.createContext({}),c=function(t){var e=n.useContext(s),l=e;return t&&(l="function"==typeof t?t(e):i(i({},e),t)),l},k=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},o="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,a=t.originalType,s=t.parentName,k=u(t,["components","mdxType","originalType","parentName"]),o=c(l),m=r,p=o["".concat(s,".").concat(m)]||o[m]||d[m]||a;return l?n.createElement(p,i(i({ref:e},k),{},{components:l})):n.createElement(p,i({ref:e},k))}));function p(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=l.length,i=new Array(a);i[0]=m;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=t,u[o]="string"==typeof t?t:r,i[1]=u;for(var c=2;c<a;c++)i[c]=l[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}m.displayName="MDXCreateElement"},85162:(t,e,l)=>{l.d(e,{Z:()=>i});var n=l(67294),r=l(86010);const a={tabItem:"tabItem_Ymn6"};function i(t){let{children:e,hidden:l,className:i}=t;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:l},e)}},74866:(t,e,l)=>{l.d(e,{Z:()=>v});var n=l(87462),r=l(67294),a=l(86010),i=l(12466),u=l(16550),s=l(91980),c=l(67392),k=l(50012);function o(t){return function(t){return r.Children.map(t,(t=>{if(!t||(0,r.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:l,attributes:n,default:r}}=t;return{value:e,label:l,attributes:n,default:r}}))}function d(t){const{values:e,children:l}=t;return(0,r.useMemo)((()=>{const t=e??o(l);return function(t){const e=(0,c.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,l])}function m(t){let{value:e,tabValues:l}=t;return l.some((t=>t.value===e))}function p(t){let{queryString:e=!1,groupId:l}=t;const n=(0,u.k6)(),a=function(t){let{queryString:e=!1,groupId:l}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:e,groupId:l});return[(0,s._X)(a),(0,r.useCallback)((t=>{if(!a)return;const e=new URLSearchParams(n.location.search);e.set(a,t),n.replace({...n.location,search:e.toString()})}),[a,n])]}function h(t){const{defaultValue:e,queryString:l=!1,groupId:n}=t,a=d(t),[i,u]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:l}=t;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${l.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=l.find((t=>t.default))??l[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:e,tabValues:a}))),[s,c]=p({queryString:l,groupId:n}),[o,h]=function(t){let{groupId:e}=t;const l=function(t){return t?`docusaurus.tab.${t}`:null}(e),[n,a]=(0,k.Nk)(l);return[n,(0,r.useCallback)((t=>{l&&a.set(t)}),[l,a])]}({groupId:n}),g=(()=>{const t=s??o;return m({value:t,tabValues:a})?t:null})();(0,r.useLayoutEffect)((()=>{g&&u(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((t=>{if(!m({value:t,tabValues:a}))throw new Error(`Can't select invalid tab value=${t}`);u(t),c(t),h(t)}),[c,h,a]),tabValues:a}}var g=l(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(t){let{className:e,block:l,selectedValue:u,selectValue:s,tabValues:c}=t;const k=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.o5)(),d=t=>{const e=t.currentTarget,l=k.indexOf(e),n=c[l].value;n!==u&&(o(e),s(n))},m=t=>{let e=null;switch(t.key){case"Enter":d(t);break;case"ArrowRight":{const l=k.indexOf(t.currentTarget)+1;e=k[l]??k[0];break}case"ArrowLeft":{const l=k.indexOf(t.currentTarget)-1;e=k[l]??k[k.length-1];break}}e?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":l},e)},c.map((t=>{let{value:e,label:l,attributes:i}=t;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===e?0:-1,"aria-selected":u===e,key:e,ref:t=>k.push(t),onKeyDown:m,onClick:d},i,{className:(0,a.Z)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":u===e})}),l??e)})))}function b(t){let{lazy:e,children:l,selectedValue:n}=t;const a=(Array.isArray(l)?l:[l]).filter(Boolean);if(e){const t=a.find((t=>t.props.value===n));return t?(0,r.cloneElement)(t,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==n}))))}function x(t){const e=h(t);return r.createElement("div",{className:(0,a.Z)("tabs-container",y.tabList)},r.createElement(f,(0,n.Z)({},t,e)),r.createElement(b,(0,n.Z)({},t,e)))}function v(t){const e=(0,g.Z)();return r.createElement(x,(0,n.Z)({key:String(e)},t))}},18390:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>k,contentTitle:()=>s,default:()=>p,frontMatter:()=>u,metadata:()=>c,toc:()=>o});var n=l(87462),r=(l(67294),l(3905)),a=l(74866),i=l(85162);const u={title:"Ch20: \u5206\u6790\u67b6\u69cb\u98a8\u96aa",tsidebar_label:"Ch20: \u5206\u6790\u67b6\u69cb\u98a8\u96aa",sidebar_position:20},s=void 0,c={unversionedId:"sg/fundamentals-of-software-architecture/ch20",id:"sg/fundamentals-of-software-architecture/ch20",title:"Ch20: \u5206\u6790\u67b6\u69cb\u98a8\u96aa",description:"\u5206\u6790\u67b6\u69cb\u98a8\u96aa",source:"@site/docs/sg/fundamentals-of-software-architecture/ch20.mdx",sourceDirName:"sg/fundamentals-of-software-architecture",slug:"/sg/fundamentals-of-software-architecture/ch20",permalink:"/docs/sg/fundamentals-of-software-architecture/ch20",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/fundamentals-of-software-architecture/ch20.mdx",tags:[],version:"current",lastUpdatedBy:"mingyen-chung",lastUpdatedAt:1714815139,formattedLastUpdatedAt:"May 4, 2024",sidebarPosition:20,frontMatter:{title:"Ch20: \u5206\u6790\u67b6\u69cb\u98a8\u96aa",tsidebar_label:"Ch20: \u5206\u6790\u67b6\u69cb\u98a8\u96aa",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Ch19: \u67b6\u69cb\u6c7a\u7b56",permalink:"/docs/sg/fundamentals-of-software-architecture/ch19"},next:{title:"Ch21: \u67b6\u69cb\u7684\u5716\u89e3\u8207\u7c21\u5831",permalink:"/docs/sg/fundamentals-of-software-architecture/ch21"}},k={},o=[{value:"\u5206\u6790\u67b6\u69cb\u98a8\u96aa",id:"\u5206\u6790\u67b6\u69cb\u98a8\u96aa",level:2},{value:"\u98a8\u96aa\u77e9\u9663\u8207\u8a55\u4f30",id:"\u98a8\u96aa\u77e9\u9663\u8207\u8a55\u4f30",level:3},{value:"\u98a8\u96aa\u77e9\u9663\u7bc4\u4f8b",id:"\u98a8\u96aa\u77e9\u9663\u7bc4\u4f8b",level:3},{value:"\u98a8\u96aa\u6fc0\u76ea (Risk Storming)",id:"\u98a8\u96aa\u6fc0\u76ea-risk-storming",level:2},{value:"1. \u78ba\u8a8d Identification",id:"1-\u78ba\u8a8d-identification",level:3},{value:"2. \u5171\u8b58 Consensus",id:"2-\u5171\u8b58-consensus",level:3},{value:"3. \u6e1b\u7de9 Mitigation",id:"3-\u6e1b\u7de9-mitigation",level:3},{value:"\u98a8\u96aa\u6fc0\u76ea\u7bc4\u4f8b",id:"\u98a8\u96aa\u6fc0\u76ea\u7bc4\u4f8b",level:2},{value:"\u53ef\u7528\u6027 Availability",id:"\u53ef\u7528\u6027-availability",level:3},{value:"\u5f48\u6027 Elasticity",id:"\u5f48\u6027-elasticity",level:3},{value:"\u5b89\u5168\u6027 Security",id:"\u5b89\u5168\u6027-security",level:3}],d={toc:o},m="wrapper";function p(t){let{components:e,...u}=t;return(0,r.kt)(m,(0,n.Z)({},d,u,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u5206\u6790\u67b6\u69cb\u98a8\u96aa"},"\u5206\u6790\u67b6\u69cb\u98a8\u96aa"),(0,r.kt)("h3",{id:"\u98a8\u96aa\u77e9\u9663\u8207\u8a55\u4f30"},"\u98a8\u96aa\u77e9\u9663\u8207\u8a55\u4f30"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c07\u7cfb\u7d71\u4e2d\u7684\u9867\u616e\uff0c\u4f9d\u7167\u98a8\u96aa\u767c\u751f\u7684\u53ef\u80fd\u6027\u53ca\u767c\u751f\u6642\u7684\u5f71\u97ff\u7a0b\u5ea6\u4f9d\u5e8f\u8a55\u4f30",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5148\u8003\u616e\u300c\u5f71\u97ff\u300d\u518d\u8003\u616e\u300c\u53ef\u80fd\u6027\u300d"))),(0,r.kt)("li",{parentName:"ul"},"\u98a8\u96aa\u8a55\u4f30\u7684\u4f5c\u6cd5\u5dee\u7570\u5f88\u5927",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6709\u6642\u5f88\u4e3b\u89c0")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5f71\u97ff\\\u53ef\u80fd\u6027"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f4e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4e2d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ad8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4f4e"),(0,r.kt)("td",{parentName:"tr",align:null},"1\ud83d\udfe2"),(0,r.kt)("td",{parentName:"tr",align:null},"2\ud83d\udfe1"),(0,r.kt)("td",{parentName:"tr",align:null},"3\ud83d\udfe0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4e2d"),(0,r.kt)("td",{parentName:"tr",align:null},"2\ud83d\udfe1"),(0,r.kt)("td",{parentName:"tr",align:null},"4\ud83d\udfe0"),(0,r.kt)("td",{parentName:"tr",align:null},"6\ud83d\udd34")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u9ad8"),(0,r.kt)("td",{parentName:"tr",align:null},"3\ud83d\udfe0"),(0,r.kt)("td",{parentName:"tr",align:null},"6\ud83d\udd34"),(0,r.kt)("td",{parentName:"tr",align:null},"9\ud83d\udfe3")))),(0,r.kt)("h3",{id:"\u98a8\u96aa\u77e9\u9663\u7bc4\u4f8b"},"\u98a8\u96aa\u77e9\u9663\u7bc4\u4f8b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8a55\u4f30\u5831\u544a\u662f\u6642\u9593\u4e0a\u7684\u4e00\u500b\u300c\u5feb\u7167\u300d"),(0,r.kt)("li",{parentName:"ul"},"\u96a8\u8457\u7cfb\u7d71\u6f14\u9032\uff0c\u5c0d\u6574\u9ad4\u7684\u98a8\u96aa\u6709\u8996\u89ba\u5316\u7684\u8a55\u4f30")),(0,r.kt)(a.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"\u539f\u59cb\u7248",default:!0,mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null," \u5f71\u97ff\\\u53ef\u80fd\u6027 "),(0,r.kt)("th",null," \u5ba2\u6236\u8a3b\u518a "),(0,r.kt)("th",null," \u524d\u81fa\u7d50\u5e33 "),(0,r.kt)("th",null," \u8a02\u55ae\u5c62\u884c "),(0,r.kt)("th",null," \u8a02\u55ae\u51fa\u8ca8 "),(0,r.kt)("th",null," \u98a8\u96aa\u7e3d\u503c ")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53ef\u64f4\u5c55\u6027"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe1"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udd34"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe2"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe1"),(0,r.kt)("th",null,"11")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53ef\u7528\u6027"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe0"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe0"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe1"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe2"),(0,r.kt)("th",null,"10")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u6548\u80fd"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe0"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe1"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe0"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udd34"),(0,r.kt)("th",null,"15")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u5b89\u5168\u6027"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udd34"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe0"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe2"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe2"),(0,r.kt)("th",null,"11")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u8cc7\u6599\u5b8c\u6574\u6027"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udd34"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udd34"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe2"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe2"),(0,r.kt)("th",null,(0,r.kt)("span",{style:{color:"red"}}," 17"))),(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u98a8\u96aa\u7e3d\u503c"),(0,r.kt)("th",null,(0,r.kt)("span",{style:{color:"red"}},"24")),(0,r.kt)("th",null,(0,r.kt)("span",{style:{color:"red"}},"21")),(0,r.kt)("th",null,"8"),(0,r.kt)("th",null,"11"),(0,r.kt)("td",null)))),(0,r.kt)(i.Z,{value:"\u53ea\u7559\u9ad8\u98a8\u96aa",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null," \u5f71\u97ff\\\u53ef\u80fd\u6027 "),(0,r.kt)("th",null," \u5ba2\u6236\u8a3b\u518a "),(0,r.kt)("th",null," \u524d\u81fa\u7d50\u5e33 "),(0,r.kt)("th",null," \u8a02\u55ae\u5c62\u884c "),(0,r.kt)("th",null," \u8a02\u55ae\u51fa\u8ca8 "),(0,r.kt)("th",null," \u98a8\u96aa\u7e3d\u503c ")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53ef\u64f4\u5c55\u6027"),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udd34"),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("th",null,"6")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53ef\u7528\u6027"),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("th",null,"0")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u6548\u80fd"),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udd34"),(0,r.kt)("th",null,"6")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u5b89\u5168\u6027"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udd34"),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("th",null,"6")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u8cc7\u6599\u5b8c\u6574\u6027"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udd34"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udd34"),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("th",null,"15")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u98a8\u96aa\u7e3d\u503c"),(0,r.kt)("th",null,"15"),(0,r.kt)("th",null,"12"),(0,r.kt)("th",null,"0"),(0,r.kt)("th",null,"6"),(0,r.kt)("td",null)))),(0,r.kt)(i.Z,{value:"\u52a0\u4e0a\u8d70\u5411",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null," \u5f71\u97ff\\\u53ef\u80fd\u6027 "),(0,r.kt)("th",null," \u5ba2\u6236\u8a3b\u518a "),(0,r.kt)("th",null," \u524d\u81fa\u7d50\u5e33 "),(0,r.kt)("th",null," \u8a02\u55ae\u5c62\u884c "),(0,r.kt)("th",null," \u8a02\u55ae\u51fa\u8ca8 "),(0,r.kt)("th",null," \u98a8\u96aa\u7e3d\u503c ")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53ef\u64f4\u5c55\u6027"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe1"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udd34\u2795"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe2"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe1"),(0,r.kt)("th",null,"11")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53ef\u7528\u6027"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe0"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe0"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe1\u2796"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe2"),(0,r.kt)("th",null,"10")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u6548\u80fd"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe0\u2796"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe1\u2795"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe0\u2796"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udd34\u2795"),(0,r.kt)("th",null,"15")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u5b89\u5168\u6027"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udd34\u2796"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe0"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe2"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe2"),(0,r.kt)("th",null,"11")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u8cc7\u6599\u5b8c\u6574\u6027"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udd34\u2795"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udd34\u2796"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe2\u2796"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe2"),(0,r.kt)("th",null,"17")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u98a8\u96aa\u7e3d\u503c"),(0,r.kt)("th",null,"24"),(0,r.kt)("th",null,"21"),(0,r.kt)("th",null,"8"),(0,r.kt)("th",null,"11"),(0,r.kt)("td",null)))),(0,r.kt)(i.Z,{value:"\u8d70\u5411+\u5411\u91cf",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null," \u5f71\u97ff\\\u53ef\u80fd\u6027 "),(0,r.kt)("th",null," \u5ba2\u6236\u8a3b\u518a "),(0,r.kt)("th",null," \u524d\u81fa\u7d50\u5e33 "),(0,r.kt)("th",null," \u8a02\u55ae\u5c62\u884c "),(0,r.kt)("th",null," \u8a02\u55ae\u51fa\u8ca8 "),(0,r.kt)("th",null," \u98a8\u96aa\u7e3d\u503c ")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53ef\u64f4\u5c55\u6027"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe1"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udd34\u2934\ufe0f4"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe2"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe1"),(0,r.kt)("th",null,"11")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53ef\u7528\u6027"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe0"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe0"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe1\u2935\ufe0f3"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe2"),(0,r.kt)("th",null,"10")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u6548\u80fd"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe0\u2935\ufe0f6"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe1\u2934\ufe0f1"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe0\u2935\ufe0f4"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udd34\u2934\ufe0f4"),(0,r.kt)("th",null,"15")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u5b89\u5168\u6027"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udd34\u2935\ufe0f9"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe0"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe2"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe2"),(0,r.kt)("th",null,"11")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u8cc7\u6599\u5b8c\u6574\u6027"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udd34\u2934\ufe0f6"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udd34\u2935\ufe0f9"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe2\u2935\ufe0f2"),(0,r.kt)("td",{style:{textAlign:"center"}},"\ud83d\udfe2"),(0,r.kt)("th",null,"17")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u98a8\u96aa\u7e3d\u503c"),(0,r.kt)("th",null,"24"),(0,r.kt)("th",null,"21"),(0,r.kt)("th",null,"8"),(0,r.kt)("th",null,"11"),(0,r.kt)("td",null))))),(0,r.kt)("h2",{id:"\u98a8\u96aa\u6fc0\u76ea-risk-storming"},"\u98a8\u96aa\u6fc0\u76ea (Risk Storming)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6c92\u6709\u67b6\u69cb\u5e2b\u80fd\u55ae\u7368\u6c7a\u5b9a\u6574\u9ad4\u98a8\u96aa"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u900f\u904e\u4e00\u7fa4\u4eba\u5408\u4f5c\u6fc0\u76ea\u51fa\u67b6\u69cb\u7684\u98a8\u96aa"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Storming\uff1a\u4e00\u7fa4\u4eba\u4e00\u8d77\u5408\u4f5c\u6fc0\u76ea\u706b\u82b1"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Event Storming: \u4e8b\u4ef6\u98a8\u66b4\uff0cDDD\u7684\u5206\u6790\u5de5\u5177"),(0,r.kt)("li",{parentName:"ul"},"Model Storming: Agile Modeling\u7684Just-in-time\u5851\u6a21\u65b9\u6cd5"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u662f\u7b26\u5408",(0,r.kt)("a",{parentName:"p",href:"https://agilemodeling.com/values.htm"},"Agile Modeling"),"\u76845\u9805\u50f9\u503c\u89c0\u7684\u4f5c\u6cd5"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Communication \u6709\u6548\u6e9d\u901a"),(0,r.kt)("li",{parentName:"ul"},"Simplicity \u6700\u5c0f\u6709\u50f9\u503c\u89e3\u6cd5(MVP)"),(0,r.kt)("li",{parentName:"ul"},"Feedback \u5118\u65e9\u53d6\u5f97\u56de\u994b"),(0,r.kt)("li",{parentName:"ul"},"Courage \u5617\u8a66\u7684\u52c7\u6c23"),(0,r.kt)("li",{parentName:"ul"},"Humility \u8b19\u5351\u5730\u63a5\u53d7\u610f\u898b")))),(0,r.kt)("h3",{id:"1-\u78ba\u8a8d-identification"},"1. \u78ba\u8a8d Identification"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6703\u8b70\u524d\u767c\u51fa\u67b6\u69cb\u5716\u7d66\u6240\u6709\u8207\u6703\u8005"),(0,r.kt)("li",{parentName:"ul"},"\u53c3\u8207\u8005\u5148\u5404\u81ea(\u4e0d\u4e00\u8d77\u5408\u4f5c)\u6307\u5b9a\u67b6\u69cb\u7684\u98a8\u96aa\u503c\u70ba1~10\u7684\u4f55\u8005",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u907f\u514d\u5f7c\u6b64\u4e92\u76f8\u5f71\u97ff"))),(0,r.kt)("li",{parentName:"ul"},"\u5c07\u6ce8\u610f\u529b\u5f9e\u7279\u5b9a\u5340\u57df\u96e2\u958b\uff1b\u4f46\u8981\u76e1\u53ef\u80fd\u5728\u540c\u4e00\u500b\u7dad\u5ea6\u4e0a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7dad\u5ea6\uff1a\u6548\u80fd\u3001\u53ef\u64f4\u5c55\u6027...etc."),(0,r.kt)("li",{parentName:"ul"},"\u5340\u57df\uff1a\u8cc7\u6599\u5eab\u3001\u9644\u8f09\u5e73\u8861\u5668\u3001\u5feb\u53d6...etc."),(0,r.kt)("li",{parentName:"ul"},"\u2705 \u5728\u53ef\u64f4\u5c55\u6027\u4e0a\u9032\u884c\u98a8\u96aa\u98a8\u66b4\uff0c\u5c0b\u627e\u67b6\u69cb\u7d44\u4ef6\u7684\u53ef\u64f4\u5c55\u6027\u5177\u6709\u98a8\u96aa\u7684\u5340\u57df"),(0,r.kt)("li",{parentName:"ul"},"\u26d4 \u5728\u7db2\u7ad9\u4f3a\u670d\u5668\u4e0a\u9032\u884c\u4e8b\u4ef6\u98a8\u66b4\uff0c\u5c0b\u627e\u7db2\u7ad9\u4f3a\u670d\u5668\u5177\u6709\u98a8\u96aa\u7684\u7dad\u5ea6")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Architecture",src:l(21329).Z,width:"612",height:"427"})),(0,r.kt)("h3",{id:"2-\u5171\u8b58-consensus"},"2. \u5171\u8b58 Consensus"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c07\u5927\u5bb6\u7684\u7d50\u679c\u5408\u8d77\u4f86\uff0c\u52aa\u529b\u5728\u98a8\u96aa\u5340\u57df\u4e0a\u53d6\u5f97\u5171\u8b58",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f8b\u5982\uff1a\u7d66\u51fa\u6700\u9ad8\u98a8\u96aa\u8ddf\u6700\u4f4e\u98a8\u96aa\u7684\u4eba\uff0c\u89e3\u91cb\u81ea\u5df1\u7684\u60f3\u6cd5..etc.")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Architecture",src:l(55833).Z,width:"614",height:"440"})),(0,r.kt)("h3",{id:"3-\u6e1b\u7de9-mitigation"},"3. \u6e1b\u7de9 Mitigation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u91dd\u5c0d\u67b6\u69cb\u4e2d\uff0c\u539f\u672c\u8a8d\u70ba\u6c92\u6709\u554f\u984c\u7684\u5340\u57df\uff0c\u9032\u884c\u4fee\u6539\u6216\u52a0\u5f37")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Architecture",src:l(9965).Z,width:"613",height:"438"})),(0,r.kt)("h2",{id:"\u98a8\u96aa\u6fc0\u76ea\u7bc4\u4f8b"},"\u98a8\u96aa\u6fc0\u76ea\u7bc4\u4f8b"),(0,r.kt)("h3",{id:"\u53ef\u7528\u6027-availability"},"\u53ef\u7528\u6027 Availability"),(0,r.kt)(a.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"\u539f\u59cb\u67b6\u69cb",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Origin",src:l(62178).Z,width:"614",height:"321"}))),(0,r.kt)(i.Z,{value:"\u53ef\u7528\u6027\u7684\u78ba\u8a8d",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Origin",src:l(81244).Z,width:"612",height:"320"}))),(0,r.kt)(i.Z,{value:"\u53ef\u7528\u6027\u7684\u67b6\u69cb\u4fee\u6539",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Origin",src:l(85528).Z,width:"614",height:"350"})))),(0,r.kt)("h3",{id:"\u5f48\u6027-elasticity"},"\u5f48\u6027 Elasticity"),(0,r.kt)(a.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"\u539f\u59cb\u67b6\u69cb",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Origin",src:l(85528).Z,width:"614",height:"350"}))),(0,r.kt)(i.Z,{value:"\u91dd\u5c0d\u5f48\u6027\u7684\u67b6\u69cb\u4fee\u6539",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Origin",src:l(92154).Z,width:"612",height:"359"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c07\u8b77\u58eb\u4f86\u7684\u6d41\u91cf\uff0c\u8207\u81ea\u52a9\u5f0f\u4f86\u7684\u6d41\u91cf\u5206\u6d41 (Prioirty Queue)"),(0,r.kt)("li",{parentName:"ul"},"\u91dd\u5c0d\u7a81\u767c\u7684\u8a3a\u65b7\u9700\u6c42\u88fd\u4f5c\u65b0\u670d\u52d9")))),(0,r.kt)("h3",{id:"\u5b89\u5168\u6027-security"},"\u5b89\u5168\u6027 Security"),(0,r.kt)(a.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"\u539f\u59cb\u67b6\u69cb",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Origin",src:l(92154).Z,width:"612",height:"359"}))),(0,r.kt)(i.Z,{value:"\u91dd\u5c0d\u5b89\u5168\u6027\u7684\u67b6\u69cb\u4fee\u6539",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Origin",src:l(64782).Z,width:"613",height:"389"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c07API Gateway\u5206\u958b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f9d\u7167\u4e0d\u540c\u7684Auth\u65b9\u6cd5\u5206\u958b"),(0,r.kt)("li",{parentName:"ul"},"\u505a\u51fa\u5be6\u9ad4\u7684\u9694\u96e2\uff0c\u907f\u514d\u56e0\u70ba\u9598\u9053\u672c\u8eab\u7684\u5be6\u4f5c\u7f3a\u5931\u5c0e\u81f4\u56b4\u91cd\u7684\u8cc7\u6599\u6d29\u6f0f\u98a8\u96aa")))))))}p.isMDXComponent=!0},21329:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/architecture_exmaple-a4bfd4ef6dbb02a572f8712af5989cfc.png"},55833:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/architecture_exmaple_consensus-53c3095962fd0b7490e9bc0ce6d519a0.png"},9965:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/architecture_exmaple_mitigation-8c83bf243d9dc9ba8d9eb35490454e58.png"},81244:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/availability_1-bedaf013c819459a1c19c2228f23a403.png"},85528:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/availability_2-816b49c9d56eeac694d3a89d8115c3f3.png"},92154:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/elasticity-1c7d2552430c482f2d62a42454fea162.png"},62178:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/origin-7360b49e51452256f8aa28a9cda750d8.png"},64782:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/security-9dcce485fdfd5eb1fcd8c4b52e17ca95.png"}}]);