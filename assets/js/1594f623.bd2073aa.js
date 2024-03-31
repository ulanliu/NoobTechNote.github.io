"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[2744],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=s(t),f=r,d=m["".concat(o,".").concat(f)]||m[f]||p[f]||l;return t?a.createElement(d,i(i({ref:n},c),{},{components:t})):a.createElement(d,i({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=f;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u[m]="string"==typeof e?e:r,i[1]=u;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(67294),r=t(86010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:t},n)}},74866:(e,n,t)=>{t.d(n,{Z:()=>h});var a=t(87462),r=t(67294),l=t(86010),i=t(12466),u=t(16550),o=t(91980),s=t(67392),c=t(50012);function m(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??m(t);return function(e){const n=(0,s.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function d(e){let{queryString:n=!1,groupId:t}=e;const a=(0,u.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=p(e),[i,u]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[o,s]=d({queryString:t,groupId:a}),[m,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,c.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),z=(()=>{const e=o??m;return f({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{z&&u(z)}),[z]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),g(e)}),[s,g,l]),tabValues:l}}var z=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:n,block:t,selectedValue:u,selectValue:o,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),p=e=>{const n=e.currentTarget,t=c.indexOf(n),a=s[t].value;a!==u&&(m(n),o(a))},f=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n)},s.map((e=>{let{value:n,label:t,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===n?0:-1,"aria-selected":u===n,key:n,ref:e=>c.push(e),onKeyDown:f,onClick:p},i,{className:(0,l.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":u===n})}),t??n)})))}function k(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function N(e){const n=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},r.createElement(v,(0,a.Z)({},e,n)),r.createElement(k,(0,a.Z)({},e,n)))}function h(e){const n=(0,z.Z)();return r.createElement(N,(0,a.Z)({key:String(n)},e))}},84131:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>u,metadata:()=>s,toc:()=>m});var a=t(87462),r=(t(67294),t(3905)),l=t(74866),i=t(85162);const u={title:"Ch11: \u9075\u5faa\u7a0b\u5f0f\u78bc\u4e2d\u7684\u7d50\u69cb",sidebar_position:11},o=void 0,s={unversionedId:"sg/five-lines-of-code/ch11",id:"sg/five-lines-of-code/ch11",title:"Ch11: \u9075\u5faa\u7a0b\u5f0f\u78bc\u4e2d\u7684\u7d50\u69cb",description:"11.1 \u6839\u64da\u7bc4\u570d & \u4f86\u6e90\u5c0d\u7d50\u69cb\u505a\u5206\u985e",source:"@site/docs/sg/five-lines-of-code/ch11.mdx",sourceDirName:"sg/five-lines-of-code",slug:"/sg/five-lines-of-code/ch11",permalink:"/docs/sg/five-lines-of-code/ch11",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/five-lines-of-code/ch11.mdx",tags:[],version:"current",lastUpdatedBy:"Mech",lastUpdatedAt:1711898653,formattedLastUpdatedAt:"Mar 31, 2024",sidebarPosition:11,frontMatter:{title:"Ch11: \u9075\u5faa\u7a0b\u5f0f\u78bc\u4e2d\u7684\u7d50\u69cb",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Ch10: \u4e0d\u8981\u5bb3\u6015\u65b0\u589e\u7a0b\u5f0f\u78bc",permalink:"/docs/sg/five-lines-of-code/ch10"},next:{title:"Ch12: \u907f\u514d\u6700\u4f73\u5316\u548c\u901a\u7528\u6027",permalink:"/docs/sg/five-lines-of-code/ch12"}},c={},m=[{value:"11.1 \u6839\u64da\u7bc4\u570d &amp; \u4f86\u6e90\u5c0d\u7d50\u69cb\u505a\u5206\u985e",id:"111-\u6839\u64da\u7bc4\u570d--\u4f86\u6e90\u5c0d\u7d50\u69cb\u505a\u5206\u985e",level:2},{value:"11.2 \u8b93\u7a0b\u5f0f\u78bc\u53cd\u61c9\u884c\u70ba\u7684\u65b9\u5f0f",id:"112-\u8b93\u7a0b\u5f0f\u78bc\u53cd\u61c9\u884c\u70ba\u7684\u65b9\u5f0f",level:2},{value:"\u63a7\u5236\u6d41\u7a0b",id:"\u63a7\u5236\u6d41\u7a0b",level:3},{value:"\u8cc7\u6599\u7d50\u69cb",id:"\u8cc7\u6599\u7d50\u69cb",level:3},{value:"\u8cc7\u6599\u672c\u8eab",id:"\u8cc7\u6599\u672c\u8eab",level:3},{value:"11.3 \u65b0\u589e\u7a0b\u5f0f\u78bc\u4f86\u63ed\u9732\u7d50\u69cb",id:"113-\u65b0\u589e\u7a0b\u5f0f\u78bc\u4f86\u63ed\u9732\u7d50\u69cb",level:2},{value:"11.4 \u89c0\u5bdf\u800c\u975e\u9810\u6e2c\uff0c\u4f7f\u7528\u5be6\u8b49\u6280\u8853",id:"114-\u89c0\u5bdf\u800c\u975e\u9810\u6e2c\u4f7f\u7528\u5be6\u8b49\u6280\u8853",level:2},{value:"11.5 \u4e0d\u9808\u7406\u89e3\u7a0b\u5f0f\u78bc\u5c31\u80fd\u53d6\u5f97\u5b89\u5168\u6027",id:"115-\u4e0d\u9808\u7406\u89e3\u7a0b\u5f0f\u78bc\u5c31\u80fd\u53d6\u5f97\u5b89\u5168\u6027",level:2},{value:"11.6 \u8b58\u5225\u672a\u4f7f\u7528\u7684\u7d50\u69cb",id:"116-\u8b58\u5225\u672a\u4f7f\u7528\u7684\u7d50\u69cb",level:2},{value:"\u900f\u904e\u63d0\u53d6&amp;\u5c01\u88dd\u4f86\u904b\u7528\u7559\u767d",id:"\u900f\u904e\u63d0\u53d6\u5c01\u88dd\u4f86\u904b\u7528\u7559\u767d",level:3},{value:"\u5229\u7528\u91cd\u8907\u9032\u884c\u7d71\u4e00",id:"\u5229\u7528\u91cd\u8907\u9032\u884c\u7d71\u4e00",level:3},{value:"\u900f\u904e\u5c01\u88dd\u5229\u7528\u901a\u7528\u7684\u5b57\u9996\u5b57\u5c3e",id:"\u900f\u904e\u5c01\u88dd\u5229\u7528\u901a\u7528\u7684\u5b57\u9996\u5b57\u5c3e",level:3},{value:"\u900f\u904e\u52d5\u614b\u5206\u6d3e\u4f86\u5229\u7528\u57f7\u884c\u671f\u7684\u578b\u5225",id:"\u900f\u904e\u52d5\u614b\u5206\u6d3e\u4f86\u5229\u7528\u57f7\u884c\u671f\u7684\u578b\u5225",level:3},{value:"\u7e3d\u7d50",id:"\u7e3d\u7d50",level:2}],p={toc:m},f="wrapper";function d(e){let{components:n,...u}=e;return(0,r.kt)(f,(0,a.Z)({},p,u,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"111-\u6839\u64da\u7bc4\u570d--\u4f86\u6e90\u5c0d\u7d50\u69cb\u505a\u5206\u985e"},"11.1 \u6839\u64da\u7bc4\u570d & \u4f86\u6e90\u5c0d\u7d50\u69cb\u505a\u5206\u985e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Inter-team"),(0,r.kt)("th",{parentName:"tr",align:null},"Intra-team"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"In code"),(0,r.kt)("td",{parentName:"tr",align:null},"External API"),(0,r.kt)("td",{parentName:"tr",align:null},"Data and functions, most refactoring")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"In people"),(0,r.kt)("td",{parentName:"tr",align:null},"Organizational chart, processes"),(0,r.kt)("td",{parentName:"tr",align:null},"Behavior, domain experts")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Macro-architecture\uff1a")," \u8207\u300c\u5718\u968a\u4e4b\u9593\u300d\u6709\u95dc\uff0c\u5b9a\u7fa9\u8edf\u9ad4\u5e73\u53f0\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u7d44\u7e54\u6d41\u7a0b\u548c\u5c64\u7d1a\uff1a")," \u5718\u968a\u904b\u4f5c\u65b9\u5f0f\u548c\u6e9d\u901a\u65b9\u5f0f\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Micro-architecture\uff1a")," \u8207\u300c\u5718\u968a\u5167\u90e8\u300d\u6709\u95dc\uff0c\u91cd\u69cb\u6a21\u5f0f\u5c6c\u65bc\u9019\u985e\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u9818\u57df\u5c08\u5bb6\uff1a")," \u5c08\u5bb6\u719f\u6089\u9818\u57df\u4e2d\u7684\u6a21\u5f0f\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5eb7\u5a01\u5b9a\u5f8b\uff1a")," \u7d44\u7e54\u7d50\u69cb\u5f80\u5f80\u9650\u5236\u4e86\u5916\u90e8API\u7684\u5916\u89c0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4f7f\u7528\u8005\u884c\u70ba\uff1a")," \u7a0b\u5f0f\u78bc\u7d50\u69cb\u7684\u66f4\u6539\u6709\u6642\u9700\u8981\u6539\u8b8a\u4f7f\u7528\u8005\u884c\u70ba\u3002")),(0,r.kt)("h2",{id:"112-\u8b93\u7a0b\u5f0f\u78bc\u53cd\u61c9\u884c\u70ba\u7684\u65b9\u5f0f"},"11.2 \u8b93\u7a0b\u5f0f\u78bc\u53cd\u61c9\u884c\u70ba\u7684\u65b9\u5f0f"),(0,r.kt)("p",null,"\u91cd\u69cb\u4e0d\u6703\u6539\u8b8a\u884c\u70ba\uff0c\u628a\u7d50\u69cb\u5f9e\u4e00\u7a2e\u65b9\u6cd5\u8f49\u79fb\u5230\u53e6\u5916\u4e00\u7a2e\u65b9\u6cd5\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u63a7\u5236\u6d41\u7a0b\uff1a")," \u4f7f\u7528\u689d\u4ef6\u8a9e\u53e5\uff08if/else\uff09\u3001\u5faa\u74b0\uff08for\u3001while\uff09\u7b49"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u8cc7\u6599\u7d50\u69cb\uff1a")," \u4f7f\u7528\u9663\u5217\u3001\u7269\u4ef6\u7b49\u8cc7\u6599\u7d50\u69cb"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u8cc7\u6599\u672c\u8eab\uff1a")," \u4f7f\u7528\u7279\u5b9a\u7684\u6578\u503c\u6216\u683c\u5f0f\u4f86\u5f15\u5c0e\u884c\u70ba")),(0,r.kt)("h3",{id:"\u63a7\u5236\u6d41\u7a0b"},"\u63a7\u5236\u6d41\u7a0b"),(0,r.kt)("p",null,"\u900f\u904e\u300c\u63a7\u5236\u904b\u7b97\u5b50\u300d\u3001\u300c\u65b9\u6cd5\u547c\u53eb\u300d\u6216\u7c21\u55ae\u7684\u300c\u7a0b\u5f0f\u884c\u300d\u5728\u7a0b\u5f0f\u78bc\u4e2d\u8868\u9054\u3002"),(0,r.kt)("p",null,"\u540c\u4e00\u500b\u8ff4\u5708\u4f7f\u7528\u4e09\u7a2e\u6700\u5e38\u898b\u7684\u63a7\u5236\u6d41\u7a0b\n",(0,r.kt)("img",{src:t(79490).Z,width:"925",height:"198"})),(0,r.kt)("p",null,"\u9047\u5230\u91cd\u8907\u7684\u7a0b\u5f0f\u78bc\uff0c\u300c\u65b9\u6cd5\u547c\u53eb\u300d\u6216\u300c\u7a0b\u5f0f\u884c\u300d\u8868\u9054\n",(0,r.kt)("img",{src:t(30926).Z,width:"950",height:"390"})),(0,r.kt)("p",null,"\u7528\u300c\u63a7\u5236\u904b\u7b97\u5b50\u300d\u3001\u300c\u65b9\u6cd5\u547c\u53eb\u300d\u505a\u7121\u7aae\u8ff4\u5708\n",(0,r.kt)("img",{src:t(47163).Z,width:"914",height:"132"})),(0,r.kt)("admonition",{title:"fizzBuzz",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u9078\u64c7\u5169\u500b\u6578\u5b57\uff0c\u73a9\u5bb6\u8f2a\u6d41\u6309\u9806\u5e8f\u8aaa\u51fa\u6578\u5b57\u3002\n\u5982\u679c\u5e8f\u5217\u4e2d\u7684\u4e0b\u4e00\u500b\u6578\u5b57 \u53ef\u4ee5\u88ab\u4f60\u7684\u7b2c\u4e00\u500b\u6578\u5b57\u6574\u9664\uff0c\u5b69\u5b50\u6703\u8aaa\u300cFizz\u300d\uff1b\n\u5982\u679c\u5b83\u80fd\u88ab\u4f60\u7684\u7b2c\u4e8c\u500b\u6578\u5b57\u6574\u9664\uff0c\u4ed6\u5011\u6703\u8aaa\u300cBuzz\u300d\uff1b\n\u5982\u679c\u5b83\u80fd\u88ab\u4f60\u7684\u5169\u500b\u6578\u5b57\u6574\u9664\uff0c \u4ed6\u5011\u6703\u8aaa\u300cFizzBu\u200b\u200bzz\u300d\u3002\n\u904a\u6232\u4e00\u76f4\u6301\u7e8c\u5230\u6709\u4eba\u72af\u932f\u70ba\u6b62\u3002")),(0,r.kt)("p",null,"\u4f7f\u7528\u63a7\u5236\u6d41\u7a0b\u4f86\u5be6\u4f5c fizzBuzz"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'function fizzBuzz(n: number) {\n    for (let i = 0; i < n; i++) {\n        if (i % 3 === 0 && i % 5 === 0) {\n            console.log("FizzBuzz");\n        } else if (i % 5 === 0) {\n            console.log("Buzz");\n        } else if (i % 3 === 0) {\n            console.log("Fizz");\n        } else {\n            console.log(i);\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"\u8cc7\u6599\u7d50\u69cb"},"\u8cc7\u6599\u7d50\u69cb"),(0,r.kt)("p",null,"\u5728\u8cc7\u6599\u7d50\u69cb\u4e2d\u8868\u9054\u884c\u70ba\u3002"),(0,r.kt)("p",null,"\u905e\u8ff4\u8cc7\u6599\u7d50\u69cb\n",(0,r.kt)("img",{src:t(56884).Z,width:"1248",height:"366"})),(0,r.kt)("p",null,"\u4f7f\u7528\u8cc7\u6599\u7d50\u69cb\u4f86\u5be6\u4f5c fizzBuzz"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'// Encoding the Fizz behavior\ninterface FizzAction {\n    num(n: number): void;\n    buzz(): void;\n}\nclass SayFizz implements FizzAction {\n    num(n: number) { console.log("Fizz"); }\n    buzz() { console.log("FizzBuzz");\n        console.log("FizzBuzz");\n    }\n}\nclass FizzNumber implements FizzAction {\n    num(n: number){ console.log(n); }\n    buzz() { console.log("Buzz"); }\n}\n\n// Encoding the Buzz behavior\ninterface BuzzAction {\n    num(n: number, act: FizzAction): void;\n}\nclass SayBuzz implements BuzzAction {\n    num(n: number, act: FizzAction) {\n        act.buzz();\n    }\n}\nclass BuzzNumber implements BuzzAction {\n    num(n: number, act: FizzAction) {\n        act.num(n);\n    }\n}\n\n// Encoding %3\ninterface FizzNum {\n    next(): FizzNum;\n    action(): FizzAction;\n}\nclass FizzNum1 implements FizzNum {\n    next() { return new FizzNum2(); }\n    action() { return new FizzNumber(); }\n}\nclass FizzNum2 implements FizzNum {\n    next() { return new Fizz(); }\n    action() { return new FizzNumber(); }\n}\nclass Fizz implements FizzNum {\n    next() { return new FizzNum1(); }\n    action() { return new SayFizz(); }\n}\n\n// Encoding %5\ninterface BuzzNum {\n    next(): BuzzNum;\n    action(): BuzzAction;\n}\nclass BuzzNum1 implements BuzzNum {\n    next() { return new BuzzNum2(); }\n    action() { return new BuzzNumber(); }\n}\nclass BuzzNum2 implements BuzzNum {\n    next() { return new BuzzNum3(); }\n    action() { return new BuzzNumber(); }\n}\nclass BuzzNum3 implements BuzzNum {\n    next() { return new BuzzNum4(); }\n    action() { return new BuzzNumber(); }\n}\nclass BuzzNum4 implements BuzzNum {\n    next() { return new Buzz(); }\n    action() { return new BuzzNumber(); }\n}\nclass Buzz implements BuzzNum {\n    next() { return new BuzzNum1(); }\n    action() { return new SayBuzz(); }\n}\n\nfunction fizzBuzz(n: number) {\n    let f = new Fizz();\n    let b = new Buzz();\n    for (let i = 0; i < n; i++) {\n        b.action().num(i, f.action());\n        f = f.next();\n        b = b.next();\n    }\n}\n')),(0,r.kt)("h3",{id:"\u8cc7\u6599\u672c\u8eab"},"\u8cc7\u6599\u672c\u8eab"),(0,r.kt)("p",null,"\u8cc7\u6599\u4e2d\u91cd\u8907\u51fa\u73fe\u7684\u7d50\u69cb\u3002"),(0,r.kt)("p",null,"\u905e\u8ff4\u8cc7\u6599\u3002 \u5c07\u4e00\u500b\u51fd\u6578\u653e\u5165\u8a18\u61b6\u9ad4\u4e2d\uff0c\u51fd\u6578\u6703\u5c0b\u627e\u53c3\u7167\uff08reference\uff09\u4e26\u547c\u53eb\u5b83\u3002\n",(0,r.kt)("img",{src:t(6914).Z,width:"1286",height:"264"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'interface FizzAction {\n    num(n: number): void;\n    buzz(): void;\n}\nclass SayFizz implements FizzAction {\n    num(n: number) { console.log("Fizz"); }\n    buzz() { console.log("FizzBuzz"); }\n}\nclass FizzNumber implements FizzAction {\n    num(n: number) { console.log(n); }\n    buzz() { console.log("Buzz"); }\n}\ninterface BuzzAction {\n    num(n: number, act: FizzAction): void;\n}\nclass SayBuzz implements BuzzAction {\n    num(n: number, act: FizzAction) {\n        act.buzz();\n    }\n}\nclass BuzzNumber implements BuzzAction {\n    num(n: number, act: FizzAction) {\n        act.num(n);\n    }\n}\n\n// Encoding %3\nconst FIZZ = [\n    new SayFizz(),\n    new FizzNumber(),\n    new FizzNumber()\n];\n\n// Encoding %5\nconst BUZZ = [\n    new SayBuzz(),\n    new BuzzNumber(),\n    new BuzzNumber(),\n    new BuzzNumber(),\n    new BuzzNumber(),\n];\n\nfunction fizzBuzz(n: number) {\n    for (let i = 0; i < n; i++) {\n        BUZZ[i % BUZZ.length].num(i, FIZZ[i % FIZZ.length]);\n    }\n}\n')),(0,r.kt)("h2",{id:"113-\u65b0\u589e\u7a0b\u5f0f\u78bc\u4f86\u63ed\u9732\u7d50\u69cb"},"11.3 \u65b0\u589e\u7a0b\u5f0f\u78bc\u4f86\u63ed\u9732\u7d50\u69cb"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6839\u64da\u9700\u8981\u624d\u9032\u884c\u91cd\u69cb"),(0,r.kt)("li",{parentName:"ul"},"\u8655\u7406\u4e0d\u78ba\u5b9a\u6027",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u719f\u6089\u5e95\u5c64\u7d50\u69cb\u6642\uff1a\u5148\u78ba\u4fdd\u6b63\u78ba\u6027\u3002"))),(0,r.kt)("li",{parentName:"ul"},"\u907f\u514d\u589e\u52a0\u8106\u5f31\u6027",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u907f\u514d\u975e\u5c40\u90e8\u7684\u4e0d\u8b8a\u6027"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u63a8\u9072\u91cd\u69cb\uff0c\u61c9\u5c07\u672a\u91cd\u69cb\u7684\u7a0b\u5f0f\u78bc\u9032\u884c\u5c01\u88dd\uff0c\u4ee5\u514d\u5f71\u97ff\u5176\u4ed6\u90e8\u5206"))),(0,r.kt)("li",{parentName:"ul"},"\u5be6\u73fe\u65b0\u529f\u80fd\u6642\u7684\u8003\u91cf",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 enums \u548c loops \u6bd4 class \u66f4\u5408\u9069")))),(0,r.kt)("h2",{id:"114-\u89c0\u5bdf\u800c\u975e\u9810\u6e2c\u4f7f\u7528\u5be6\u8b49\u6280\u8853"},"11.4 \u89c0\u5bdf\u800c\u975e\u9810\u6e2c\uff0c\u4f7f\u7528\u5be6\u8b49\u6280\u8853"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u4ef0\u8cf4\u731c\u6e2c(\u6191\u611f\u89ba\uff1f)\u4f86\u8655\u7406\u7a0b\u5f0f\u78bc\uff0c\u900f\u904e\u5be6\u8b49\u7684\u65b9\u5f0f\u4f86\u8655\u7406\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u591a\u89c0\u5bdf\u7a0b\u5f0f\u78bc\u7684\u8b8a\u5316\u8da8\u5411\uff0c\u9060\u96e2\u81ea\u4f5c\u8070\u660e\u7684\u9677\u9631e.g. \u904e\u5ea6\u8a2d\u8a08(Overengineering)")),(0,r.kt)("p",null,"\u6539\u9032\u61c9\u8a72\u57fa\u65bc\u5be6\u969b\u7684\u9700\u6c42\u548c\u904e\u53bb\u7684\u8b8a\u66f4\u7d93\u9a57\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u7a0b\u5f0f\u78bc\u4e0d\u9700\u8981\u6539\u8b8a\uff0c\u90a3\u5c31\u4fdd\u6301\u4e0d\u52d5\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u7a0b\u5f0f\u78bc\u8b8a\u52d5\u662f\u4e0d\u53ef\u9810\u6e2c\uff0c\u53ea\u6709\u5728\u5fc5\u8981\u6642\u9032\u884c\u91cd\u69cb\uff0c\u4ee5\u907f\u514d\u8106\u5f31\u6027\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u7a0b\u5f0f\u78bc\u7684\u8b8a\u5316\u6709\u4e00\u5b9a\u7684\u6a21\u5f0f\uff0c\u5247\u91cd\u69cb\u4ee5\u9069\u61c9\u9019\u4e9b\u5df2\u7d93\u767c\u751f\u7684\u8b8a\u5316\u985e\u578b\u3002")),(0,r.kt)("h2",{id:"115-\u4e0d\u9808\u7406\u89e3\u7a0b\u5f0f\u78bc\u5c31\u80fd\u53d6\u5f97\u5b89\u5168\u6027"},"11.5 \u4e0d\u9808\u7406\u89e3\u7a0b\u5f0f\u78bc\u5c31\u80fd\u53d6\u5f97\u5b89\u5168\u6027"),(0,r.kt)("p",null,"\u6309\u7167\u65e2\u5b58\u7a0b\u5f0f\u78bc\u7684\u7d50\u69cb\uff0c\u5728\u4e0d\u9700\u5b8c\u5168\u7406\u89e3\u7d30\u7bc0\u7684\u60c5\u5f62\u4e0b\u505a\u91cd\u69cb\u3002"),(0,r.kt)("p",null,"\u900f\u904e\u591a\u6a23\u7684\u624b\u6bb5\u53d6\u5f97\u5b89\u5168\u6027\uff0c\u6e1b\u5c11\u91cd\u69cb\u904e\u7a0b\u4e2d\u53ef\u80fd\u5f15\u767c\u7684\u932f\u8aa4\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u900f\u904e\u6e2c\u8a66\u53d6\u5f97\u5b89\u5168\u6027"),(0,r.kt)("li",{parentName:"ul"},"\u900f\u904e\u638c\u63e1\u53d6\u5f97\u5b89\u5168\u6027"),(0,r.kt)("li",{parentName:"ul"},"\u900f\u904e\u5de5\u5177\u8f14\u52a9\u53d6\u5f97\u5b89\u5168\u6027"),(0,r.kt)("li",{parentName:"ul"},"\u900f\u904e\u6b63\u5f0f\u9a57\u8b49\u53d6\u5f97\u5b89\u5168\u6027"),(0,r.kt)("li",{parentName:"ul"},"\u900f\u904e\u5bb9\u932f\u53d6\u5f97\u5b89\u5168\u6027")),(0,r.kt)("h2",{id:"116-\u8b58\u5225\u672a\u4f7f\u7528\u7684\u7d50\u69cb"},"11.6 \u8b58\u5225\u672a\u4f7f\u7528\u7684\u7d50\u69cb"),(0,r.kt)("p",null,"\u5728\u7a0b\u5f0f\u78bc\u5c0b\u627e\u53ef\u5229\u7528\u7684\u7d50\u69cb\u4f4d\u7f6e\uff0c\u4e26\u4f7f\u7528\u4ed6\u5011\u4f86\u9032\u884c\u91cd\u69cb\u3002"),(0,r.kt)("h3",{id:"\u900f\u904e\u63d0\u53d6\u5c01\u88dd\u4f86\u904b\u7528\u7559\u767d"},"\u900f\u904e\u63d0\u53d6&\u5c01\u88dd\u4f86\u904b\u7528\u7559\u767d"),(0,r.kt)("p",null,"\u5229\u7528\u7a7a\u767d\u884c\u4f86\u8b58\u5225\u548c\u5be6\u505a\u63d0\u53d6\u65b9\u6cd5(",(0,r.kt)("a",{parentName:"p",href:"https://noobtechnote.github.io/docs/sg/five-lines-of-code/ch3#321-refactoring-pattern-extract-method"},"EXTRACT METHOD"),")"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Before",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function subMin(arr: number[]) {\n    let min = Number.POSITIVE_INFINITY;\n    for (let x = 0; x < arr.length; x++) {\n        min = Math.min(min, arr[x]);\n    }\n\n    for (let x = 0; x < arr.length; x++) {\n        arr[x] -= min;\n    }\n}\n"))),(0,r.kt)(i.Z,{value:"After",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function subMin(arr: number[]) {\n    let min = findMin(arr);\n    subtractFromEach(min, arr);\n}\nfunction findMin(arr: number[]) {\n    let min = Number.POSITIVE_INFINITY;\n    for (let x = 0; x < arr.length; x++) {\n        min = Math.min(min, arr[x]);\n    }\n    return min;\n}\nfunction subtractFromEach(min: number, arr: number[]){\n    for (let x = 0; x < arr.length; x++) {\n        arr[x] -= min;\n    }\n}\n")))),(0,r.kt)("p",null,"\u901a\u904e\u5c01\u88dd\u8cc7\u6599\uff08Encapsulate Data\uff09\u7684\u91cd\u69cb\u6a21\u5f0f"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Before",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class Particle {\n    private x: number;\n    private y: number;\n\n    private color: number;\n    // ...\n}\n"))),(0,r.kt)(i.Z,{value:"After",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class Vector2D {\n    private x: number;\n    private y: number;\n    // ...\n}\n\nclass Particle {\n    private position: Vector2D;\n    private color: number;\n    // ...\n}\n")))),(0,r.kt)("h3",{id:"\u5229\u7528\u91cd\u8907\u9032\u884c\u7d71\u4e00"},"\u5229\u7528\u91cd\u8907\u9032\u884c\u7d71\u4e00"),(0,r.kt)("p",null,"\u9047\u5230\u9673\u8ff0\u53e5(statement)\u76f8\u540c\u7684\u60c5\u6cc1\u3002"),(0,r.kt)("p",null,"\u5148\u7528\u63d0\u53d6\u65b9\u6cd5(EXTRACT METHOD)\u9032\u884c\u91cd\u69cb"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Before",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'class XMLFormatter {\n    format(vals: string[]) {\n        let result = "";\n        for (let i = 0; i < vals.length; i++) {\n            result += `<Value>${vals[i]}</Value>`; // duplicated statement\n        }\n        return result;\n    }\n}\nclass JSONFormatter {\n    format(vals: string[]) {\n        let result = "";\n        for (let i = 0; i < vals.length; i++) {\n            if (i > 0) result += ",";\n            result += `{ value: "${vals[i]}" }`; // duplicated statement\n        }\n        return result;\n    }\n}\n'))),(0,r.kt)(i.Z,{value:"After",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'class XMLFormatter {\n    format(vals: string[]) {\n        let result = "";\n        for (let i = 0; i < vals.length; i++) {\n            result += this.formatSingle(vals[i]); // EXTRACT METHOD\n        }\n        return result;\n    }\n    formatSingle(val: string) {\n        return `<Value>${val}</Value>`;\n    }\n}\nclass JSONFormatter {\n    format(vals: string[]) {\n        let result = "";\n        for (let i = 0; i < vals.length; i++) {\n            if (i > 0) result += ",";\n            result += this.formatSingle(vals[i]); // EXTRACT METHOD\n        }\n        return result;\n    }\n    formatSingle(val: string) {\n        return `{ value: "${val}" }`;\n    }\n}\n')))),(0,r.kt)("p",null,"\u63d0\u53d6\u65b9\u6cd5\u5206\u6563\u5728\u4e0d\u540c\u985e\u5225\uff0c\u900f\u904e\u5c01\u88dd\u8cc7\u6599\uff08Encapsulate Data\uff09\u7684\u91cd\u69cb\u6a21\u5f0f\u5c07\u4ed6\u5011\u96c6\u4e2d\u3002"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Before",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'class XMLFormatter {\n    formatSingle(val: string) {\n        return `<Value>${val}</Value>`;\n    }\n    // ...\n}\nclass JSONFormatter {\n    formatSingle(val: string) {\n        return `{ value: "${val}" }`;\n    }\n    // ...\n}\n'))),(0,r.kt)(i.Z,{value:"After",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'class XMLFormatter {\n    formatSingle(val: string) {\n        return new XMLFormatSingle().format(val); // Encapsulate Data\n    }\n    // ...\n}\nclass JSONFormatter {\n    formatSingle(val: string) {\n        return new JSONFormatSingle().format(val); // Encapsulate Data\n    }\n    // ...\n}\n\nclass XMLFormatSingle {\n    format(val: string) {\n        return `<Value>${val}</Value>`;\n    }\n}\nclass JSONFormatSingle {\n    format(val: string) {\n        return `{ value: "${val}" }`;\n    }\n}\n')))),(0,r.kt)("p",null,"\u5c01\u88dd\u7684\u985e\u5225\u76f8\u4f3c\uff0c\u4e14\u6709\u91cd\u8907\u7684\u985e\u5225\u6642\uff0c\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"https://noobtechnote.github.io/docs/sg/five-lines-of-code/ch5#511-%E9%87%8D%E6%A7%8B%E6%A8%A1%E5%BC%8F-unify-similar-classes"},"\u7d71\u5408\u76f8\u4f3c\u985e\u5225(Unify Similar Classes)")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Before",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'class XMLFormatSingle {\n    format(val: string) {\n        return `<Value>${val}</Value>`;\n    }\n}\nclass JSONFormatSingle {\n    format(val: string) {\n        return `{ value: "${val}" }`;\n    }\n}\n'))),(0,r.kt)(i.Z,{value:"After",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'class XMLFormatter {\n    formatSingle(val: string) {\n        return new FormatSingle("<Value>","</Value>").format(val); // Unified class\n    }\n    // ...\n}\nclass JSONFormatter {\n    formatSingle(val: string) {\n        return new FormatSingle("{ value: \'","\' }").format(val); // Unified class\n    }\n    // ...\n}\n\nclass FormatSingle {\n    constructor(\n        private before: string,\n        private after: string\n    ) { }\n    format(val: string) {\n        return `${before}${val}${after}`;\n    }\n}\n')))),(0,r.kt)("p",null,"\u76f8\u4f3c\u6d41\u7a0b\u7684\u9673\u8ff0\u53e5\uff0c\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"https://noobtechnote.github.io/docs/sg/five-lines-of-code/ch5#%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8Fstrategy-pattern"},"\u5f15\u5165\u7b56\u7565\u6a21\u5f0f(INTRODUCE STRATEGY PATTERN)")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Before",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'class XMLFormatter {\n    format(vals: string[]) {\n        let result = "";\n        for (let i = 0; i < vals.length; i++) {\n            result += new FormatSingle("<Value>","</Value>").format(vals[i]);\n        }\n        return result;\n    }\n}\nclass JSONFormatter {\n    format(vals: string[]) {\n        let result = "";\n        for (let i = 0; i < vals.length; i++) {\n            if (i > 0) result += ",";\n            result += new FormatSingle("{ value: \'","\' }").format(vals[i]);\n        }\n        return result;\n    }\n}\n'))),(0,r.kt)(i.Z,{value:"After",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'class XMLFormatter {\n    format(vals: string[]) {\n    return new Formatter(\n        new FormatSingle("<Value>","</Value>"),\n        new None()).format(vals);\n    }\n}\nclass JSONFormatter {\n    format(vals: string[]) {\n    return new Formatter(\n        new FormatSingle("{ value: \'","\' }"),\n        new Comma()).format(vals);\n    }\n}\n\nclass Formatter {\n    constructor(\n        private single: FormatSingle,\n        private sep: Separator // Strategy pattern\n    ) { }\n    format(vals: string[]) {\n        let result = "";\n        for (let i = 0; i < vals.length; i++) {\n            result = this.sep.put(i, result);\n            result += this.single.format(vals[i]);\n        }\n        return result;\n    }\n}\n\ninterface Separator {\n    put(i: number, str: string): string;\n}\nclass Comma implements Separator {\n    put(i: number, result: string) {\n    if (i > 0) result += ",";\n        return result;\n    }\n}\nclass None implements Separator {\n    put(i: number, result: string) {\n        return result;\n    }\n}\n')))),(0,r.kt)("h3",{id:"\u900f\u904e\u5c01\u88dd\u5229\u7528\u901a\u7528\u7684\u5b57\u9996\u5b57\u5c3e"},"\u900f\u904e\u5c01\u88dd\u5229\u7528\u901a\u7528\u7684\u5b57\u9996\u5b57\u5c3e"),(0,r.kt)("p",null,"\u547c\u61c9 6.2 \u7684\u898f\u5247\uff1a ",(0,r.kt)("a",{parentName:"p",href:"https://noobtechnote.github.io/docs/sg/five-lines-of-code/ch6#622-%E6%87%89%E7%94%A8never-have-common-affixes"},"NEVER HAVE COMMON AFFIXES ")),(0,r.kt)("p",null,"\u7a0b\u5f0f\u78bc\u4e0d\u61c9\u51fa\u73fe\u5e36\u6709\u5171\u540c\u7684\u5b57\u9996\u5b57\u5c3e\u7684\u65b9\u6cd5 or \u8b8a\u6578\u3002"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Before",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Protocol { ... }\nclass StringProtocol implements Protocol { ... }\nclass JSONProtocol implements Protocol { ... }\nclass ProtobufProtocol implements Protocol { ... }\n/// ...\nlet p = new StringProtocol();\n/// ...\n"))),(0,r.kt)(i.Z,{value:"After",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Encapsulate the three classes and interface in namespace\nnamespace protocol {\n    export interface Protocol { ... }\n    export class String implements Protocol { ... }\n    export class JSON implements Protocol { ... }\n    export class Protobuf implements Protocol { ... }\n}\n/// ...\nlet p = new protocol.String();\n/// ...\n")))),(0,r.kt)("h3",{id:"\u900f\u904e\u52d5\u614b\u5206\u6d3e\u4f86\u5229\u7528\u57f7\u884c\u671f\u7684\u578b\u5225"},"\u900f\u904e\u52d5\u614b\u5206\u6d3e\u4f86\u5229\u7528\u57f7\u884c\u671f\u7684\u578b\u5225"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Before",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function foo(obj: any) {\n    if (obj instanceof A) {\n        obj.methodA();\n    } else if (obj instanceof B) {\n        obj.methodB();\n    }\n}\nclass A {\n    methodA() { ... }\n}\nclass B {\n    methodB() { ... }\n}\n"))),(0,r.kt)(i.Z,{value:"After",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function foo(obj: Foo) {\n    obj.foo();\n}\nclass A implements Foo {\n    foo() {\n        this.methodA();\n    }\n    methodA() { ... }\n}\nclass B implements Foo {\n    foo() {\n        this.methodB();\n    }\n    methodB() { ... }\n}\ninterface Foo {\n    foo(): void;\n}\n")))),(0,r.kt)("h2",{id:"\u7e3d\u7d50"},"\u7e3d\u7d50"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7a0b\u5f0f\u78bc\u53cd\u6620\u4e86\u53c3\u8207\u958b\u767c\u7684\u4eba\u54e1\u3001\u6d41\u7a0b\u7684\u884c\u70ba\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u91cd\u69cb\u7ba1\u7406\u5404\u7a2e\u65b9\u6cd5\u4e2d\u7684\u91cd\u8907\uff0c\u6216\u628a\u7d50\u69cb\u5f9e\u4e00\u7a2e\u65b9\u5f0f\u79fb\u52d5\u5230\u53e6\u5916\u4e00\u7a2e\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5c0b\u627e\u5c1a\u672a\u88ab\u5229\u7528\u7684\u7d50\u69cb\uff0c\u900f\u904e\u7559\u767d\u3001\u91cd\u8907\u3001\u5171\u540c\u7684\u5b57\u9996\u5b57\u5c3e\u6216\u662f\u57f7\u884c\u671f\u7684\u578b\u5225\u6aa2\u67e5\u4f86\u767c\u73fe\u3002")))}d.isMDXComponent=!0},79490:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/11.2.1.1-f3d7a2baeaddcc3db484d586a1a053c3.png"},30926:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/11.2.1.2-300253d4c09e7deb24362a4d4e47467b.png"},47163:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/11.2.1.3-ec266862a7284ee40e4d41d2bfa17383.png"},56884:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/11.2.2.1-5f018fa542d6a062303d9911af9efbdf.png"},6914:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/11.2.3.1-258265d63894c74b6e4ae7f35c852c47.png"}}]);