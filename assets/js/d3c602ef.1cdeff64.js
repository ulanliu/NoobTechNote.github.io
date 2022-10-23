"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[774],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var l=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=l.createContext({}),u=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=u(e.components);return l.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),k=o,b=p["".concat(c,".").concat(k)]||p[k]||d[k]||a;return n?l.createElement(b,r(r({ref:t},s),{},{components:n})):l.createElement(b,r({ref:t},s))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var u=2;u<a;u++)r[u]=n[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1892:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var l=n(7462),o=n(3366),a=(n(7294),n(3905)),r=["components"],i={title:"Ch7: SRP - \u55ae\u4e00\u8077\u8cac\u539f\u5247",sidebar_label:"Ch7: SRP - \u55ae\u4e00\u8077\u8cac\u539f\u5247",sidebar_position:7},c="SOLID",u={unversionedId:"sg/clean-architecture/ch7",id:"sg/clean-architecture/ch7",title:"Ch7: SRP - \u55ae\u4e00\u8077\u8cac\u539f\u5247",description:"\u597d\u7684\u8edf\u9ad4\u67b6\u69cb\u59cb\u65bc clean code\u3002",source:"@site/docs/sg/clean-architecture/ch7.md",sourceDirName:"sg/clean-architecture",slug:"/sg/clean-architecture/ch7",permalink:"/docs/sg/clean-architecture/ch7",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/clean-architecture/ch7.md",tags:[],version:"current",lastUpdatedBy:"tom-c-chen",lastUpdatedAt:1666194705,formattedLastUpdatedAt:"10/19/2022",sidebarPosition:7,frontMatter:{title:"Ch7: SRP - \u55ae\u4e00\u8077\u8cac\u539f\u5247",sidebar_label:"Ch7: SRP - \u55ae\u4e00\u8077\u8cac\u539f\u5247",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Ch6: \u51fd\u6578\u5f0f\u7a0b\u5f0f\u8a2d\u8a08",permalink:"/docs/sg/clean-architecture/ch6"},next:{title:"Ch8: OCP - \u958b\u653e-\u5c01\u9589\u539f\u5247",permalink:"/docs/sg/clean-architecture/ch8"}},s={},d=[{value:"\u75c7\u72c0 1 : \u610f\u5916\u91cd\u8907",id:"\u75c7\u72c0-1--\u610f\u5916\u91cd\u8907",level:2},{value:"\u5171\u7528\u6f14\u7b97\u6cd5",id:"\u5171\u7528\u6f14\u7b97\u6cd5",level:4},{value:"\u75c7\u72c0 2 : \u5408\u4f75",id:"\u75c7\u72c0-2--\u5408\u4f75",level:2},{value:"\u89e3\u6c7a\u65b9\u6848",id:"\u89e3\u6c7a\u65b9\u6848",level:2},{value:"Example",id:"example",level:2},{value:"Example 2",id:"example-2",level:2}],p={toc:d};function k(e){var t=e.components,i=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,l.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"solid"},"SOLID"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u597d\u7684\u8edf\u9ad4\u67b6\u69cb\u59cb\u65bc clean code\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u80fd\u5bb9\u5fcd\u8b8a\u5316\uff0c"),(0,a.kt)("li",{parentName:"ul"},"\u5bb9\u6613\u7406\u89e3\uff0c\u800c\u4e14"),(0,a.kt)("li",{parentName:"ul"},"\u662f\u8a31\u591a\u8edf\u9ad4\u7cfb\u7d71\u4e2d\u80fd\u5920\u4f7f\u7528\u7684\u5143\u4ef6\u7684\u57fa\u790e\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e2d\u5c64\u7d1a\uff1a\u5b9a\u7fa9\u6a21\u7d44\u548c\u5143\u4ef6\u5167\u4f7f\u7528\u7684\u8edf\u9ad4\u7d50\u69cb\u985e\u578b")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SRP: \u55ae\u4e00\u8077\u8cac\u539f\u5247"),(0,a.kt)("li",{parentName:"ul"},"OCP: \u958b\u653e-\u5c01\u9589\u539f\u5247"),(0,a.kt)("li",{parentName:"ul"},"LSP: \u91cc\u6c0f\u66ff\u63db\u539f\u5247"),(0,a.kt)("li",{parentName:"ul"},"ISP: \u4ecb\u9762\u9694\u96e2\u539f\u5247"),(0,a.kt)("li",{parentName:"ul"},"DIP: \u4f9d\u8cf4\u53cd\u8f49\u539f\u5247")),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"single-responsibility-principle"},"Single Responsibility Principle"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4e00\u500b\u6a21\u7d44\u61c9\u8a72\u53ea\u5c0d\u552f\u4e00\u7684\u4e00\u500b\u89d2\u8272\u8ca0\u8cac")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6a21\u7d44(Module)\uff1a"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"\u4e00\u500b\u539f\u59cb\u6a94(source file)")))),(0,a.kt)("h2",{id:"\u75c7\u72c0-1--\u610f\u5916\u91cd\u8907"},"\u75c7\u72c0 1 : \u610f\u5916\u91cd\u8907"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"EmployeeClass",src:n(546).Z,width:"285",height:"252"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"calculatePay() \u65b9\u6cd5\u7531\u6703\u8a08\u90e8\u6307\u5b9a\uff0c\u4e26\u5411 CFO \u5831\u544a\u3002"),(0,a.kt)("li",{parentName:"ul"},"reportHours() \u65b9\u6cd5\u7531\u4eba\u529b\u8cc7\u6e90\u90e8\u6307\u5b9a\u548c\u4f7f\u7528\uff0c\u4e26\u5411 COO \u5831\u544a\u3002"),(0,a.kt)("li",{parentName:"ul"},"save() \u65b9\u6cd5\u7531 DBA \u6307\u5b9a\uff0c\u4e26\u5411 CTO \u5831\u544a\u3002")),(0,a.kt)("h4",{id:"\u5171\u7528\u6f14\u7b97\u6cd5"},"\u5171\u7528\u6f14\u7b97\u6cd5"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u5171\u7528\u6f14\u7b97\u6cd5",src:n(1764).Z,width:"321",height:"126"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5206\u958b\u4e0d\u540c\u89d2\u8272\u6240\u4f9d\u8cf4\u7684\u7a0b\u5f0f\u78bc(separate the code that different actors depend on)")),(0,a.kt)("h2",{id:"\u75c7\u72c0-2--\u5408\u4f75"},"\u75c7\u72c0 2 : \u5408\u4f75"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"MergeConflict",src:n(887).Z,width:"360",height:"240"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5206\u96e2\u652f\u63f4\u4e0d\u540c\u89d2\u8272\u7684\u7a0b\u5f0f\u78bc(separate code that supports different actors)")),(0,a.kt)("h2",{id:"\u89e3\u6c7a\u65b9\u6848"},"\u89e3\u6c7a\u65b9\u6848"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u907f\u514d\u610f\u5916\u91cd\u8907(accidental duplication)")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u4e09\u500b\u985e\u5225\u4e0d\u76f8\u4e92\u4e86\u89e3",src:n(3394).Z,width:"301",height:"196"})),(0,a.kt)("p",null,"\u4e09\u500b\u985e\u5225\u4e0d\u76f8\u4e92\u4e86\u89e3"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"FACADE\u6a21\u5f0f",src:n(7292).Z,width:"492",height:"196"})),(0,a.kt)("p",null,"FACADE ","[f\u0259\u02c8s\xe4d]"," \u6a21\u5f0f"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u8f03\u5c11\u51fd\u6578\u7684FACADE\u6a21\u5f0f",src:n(7301).Z,width:"352",height:"142"})),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Bad way:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class Book {\n  public title: string;\n  public author: string;\n  public description: string;\n  public pages: number;\n\n  // constructor and other methods\n\n  public saveToFile(): void {\n    // some fs.write method to save book to file\n  }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Good way:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class Book {\n  public title: string;\n  public author: string;\n  public description: string;\n  public pages: number;\n\n  // constructor and other methods\n}\n\nclass Persistence {\n  public saveToFile(book: Book): void {\n    // some fs.write method to save book to file\n  }\n}\n")),(0,a.kt)("h2",{id:"example-2"},"Example 2"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9019\u500b\u4f8b\u5b50\uff0cBook Model \u7b26\u5408 SRP \u55ce\uff1f\u70ba\u4ec0\u9ebc\uff1f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// MVC Model\nclass Book extends Model {\n  constructor() {\n    this.conn = mysql.createConnection({...});\n  }\n\n  public get() {\n    const conn = this.conn\n    return new Promise((resolve, reject) => {\n      conn.query('SELCT * FROM book', (result, error) => {\n        if (error) { reject(error) }\n        resolve(result)\n      })\n    })\n  }\n\n  public write(books) {\n    // ...\n  }\n\n  destructor() {\n    this.conn.close()\n  }\n}\n\n// MVC Controller\nasync function controller() {\n  const bookModel = new Book()\n  return await bookModel.get()\n}\n\n// Background Cronjob\nasync function updateAuthorJob() {\n  const bookModel = new Book()\n  const books = await bookModel.get()\n  books.map(book => ({...book, author: 'bob'}))\n  await bookModel.write(books)\n}\n")))}k.isMDXComponent=!0},546:function(e,t,n){t.Z=n.p+"assets/images/7.1.EmployeeClass-a46dc67fa46aa918415e881064195ce4.png"},1764:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUEAAAB+CAYAAAC6VaP9AAAEfXRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMkVsZWN0cm9uJTIyJTIwbW9kaWZpZWQlM0QlMjIyMDIyLTA5LTA1VDExJTNBNTclM0E1NS45NzJaJTIyJTIwYWdlbnQlM0QlMjI1LjAlMjAoTWFjaW50b3NoJTNCJTIwSW50ZWwlMjBNYWMlMjBPUyUyMFglMjAxMF8xNV83KSUyMEFwcGxlV2ViS2l0JTJGNTM3LjM2JTIwKEtIVE1MJTJDJTIwbGlrZSUyMEdlY2tvKSUyMGRyYXcuaW8lMkYxNS43LjMlMjBDaHJvbWUlMkY5MS4wLjQ0NzIuMTY0JTIwRWxlY3Ryb24lMkYxMy42LjElMjBTYWZhcmklMkY1MzcuMzYlMjIlMjBldGFnJTNEJTIyNTE1bzNvU3JtN3o1QzlOQTlIbjQlMjIlMjB2ZXJzaW9uJTNEJTIyMTUuNy4zJTIyJTIwdHlwZSUzRCUyMmRldmljZSUyMiUzRSUzQ2RpYWdyYW0lMjBpZCUzRCUyMkM1UkJzNDNvRGEtS2R6WmVOdHV5JTIyJTIwbmFtZSUzRCUyMlBhZ2UtMSUyMiUzRTNaWmRiNXN3RklaJTJGRFplUndDWnBkcHVNdFZ1enJWTzNSZHFkaTAlMkJCMVhDSU1Vbm9yNTlUMjNFWSUyRlZBcVZabDJFJTJCR0g0NCUyRnpudmVZQkhSZWJzOGxxJTJGUFB5RUVFSk9UYmdMNFBDQmxQaWY3ZGdjNkFPS0lHWkxMZ0JrVWVYQmYzWUdGb2FWdHdhSHFCQ2xHb291N0RGS3NLVXRWalRFcmM5TU51VWZSM3JWa0dBM0NkTWpHa3k0S3IzTkFwT2ZQOEFvb3NkenRIazNmbVRjbGNzTTJreVJuSHpRR2lTVURuRWxHWnAzSTdCN0hUenVteSUyRk5ndHhlSnVjdjdwVzdOaVAyYVgzNyUyRjhISm5GUGh3elpaJTJCQ2hFcTllbWxTTFg2TlZzblhETTl1N3VlYjIxbXk0cVBZcHFZNnB4ZHdMWjhkb2xRNVpsZ3hrWGc2azloV0hIYXJobnJrWXhhSXRZYVJocjlCcWM1NmdiVUtOY3BWS2V4YnMlMkJkdW83OUs5RUolMkJOcTdCVnFid1RGTFJ2amphMUlBbEtObnBlUklFVThXNnZ5bXo5c3IyY2Z1cFYxam80NURRZGtJOHRUNXdqZUI4NFpaUVRHYWc3Q3hmQ1Axd2NBeVBIc3B6Uktuc2dkZE10RFlGQ2JWVyUyRjBMTDBRektPSkI3RFZMQjloV0NENFYwVndQcEMwTGpzUmx2Zko5RjdocklEM3BzSEQ2dGZVJTJCMVl5VWElMkY0OXVKbSUyRmo1c2xwM1V3R2J0WlhkdHJxbk9DS2RhZXdNNDMlMkJOVHZUUnpvJTJCMHhMSms3VjhITVdQdSUyQllOTk5KRCUyRjIwMXR2TiUyRlVHanlCdyUzRCUzRCUzQyUyRmRpYWdyYW0lM0UlM0MlMkZteGZpbGUlM0V5T/WeAAAX50lEQVR4Xu1dB7BUxRJtEFBQciwkZ0SwBJGkZEVAyUEkSypEcs45lQQJimQkiQQJAiIIIiKFShaJSkaQrGCR5dfp+nddFnjM2527d2a3p4qSVzu3p+ec6XO7e1ZeHCK6RzKsRODePaHOFOLixIljiiviRywRAHP3JJhiiZoB0xF0wpsBRPzfBeHDHC5i4wl4ExGMDWIGzZWgM4gMIhI+zOJD1RsRQVWkDJwnQWcWKcKHWXyoeiMiqIqUgfMk6MwiRfgwiw9Vb0QEVZEycJ4EnVmkCB9m8aHqjYigKlIGzpOgM4sU4cMsPlS9ERFURcrAeRJ0ZpEifJjFh6o3IoKqSBk4T4LOLFKED7P4UPVGRFAVKQPnSdCZRYrwYRYfqt6ICKoiZeA8CTqzSBE+zOJD1RsRQVWkDJwnQWcWKcKHWXyoeiMiqIqUgfMk6MwiRfgwiw9Vb0QEVZEycJ4EnVmkCB9m8aHqjYigKlIGzpOgM4sU4cMsPlS9ERFURcrAeRJ0ZpEifJjFh6o3IoKqSBk4T4LOLFKED7P4UPVGRFAVKQPnSdCZRYrwYRYfqt6ICKoiZeA8CTqzSBE+zOJD1RsRQVWkDJwnQWcWKcKHWXyoeiMiqIqUgfMk6MwiRfgwiw9Vb4wSwTt37lD8+PHpwIEDlDt3btU9+OaVK1eO3nnnHWrWrNkjnz1+/Dj99NNPVLt27Rjtr1+/nsqXL3/fnLfeeos6duxIZcqUibVvbjwgQecGqsHbjDQ+AmMle/bs1L17d2rZsqUPpB07dlChQoXo/PnzlCpVquDB8/BJI0Vw//79lCdPnljDAhGsV68eNW/e/JHPfvnll9ShQwf6/fffY7T/zTff0GuvvUZnzpyhuHHj0j///ENDhgyhlStX0unTpylevHix9k/3A5EWdLrxCbe9SOMjMFYggt26daNWrVo9IILnzp2j1KlThxtyLeu5KoKXL1+m9957j1atWkWFCxfmt8jrr79OFy9epF69etGyZcsoZ86c1KRJExYuJxOECObIkYNFZ9KkSfyGad26Nb3//vv00UcfEez26dOHAZg4cSILFGz7iyDeUMOGDaPvv//et3aGDBk4uzty5AjVrFmTFi9eTGfPnqX27dvTxo0b6YUXXqCRI0fSiy++SI4I3r17l0UQY8+ePTxn9+7dVKBAARo+fDjNnTuX/a5cuTJ98MEHtGnTJurbty9t2LCBEiRIQLdv3+bMEXNfffVVLaQ5RiIt6LSC44Ext/mYOXMmHT161PcSnjx5Ms2aNYvGjh1L165dowYNGvDZwwu6fv36fFZXrFhBhw8f5jPes2dP/mVQiC/E5fbt2znZwPMlSpQgf/vXr1+nH3/88b5YeZwIpkiRgs85/Lp16xb7MHToUEqYMCHHeN26dalixYrMTKNGjfgPYqNYsWIc36NGjWJN2Lt3L40fP579q1atGsd4kiRJXGPUVRHEpkHa6NGj6auvvqLPP/+cDh06xCUlRGrEiBF07NgxatiwIRObJk0aLodB0nfffUddu3alzz77jEUPcyBeAPjChQs0bdo0BqVHjx509epVFkd/EUQ5Xbp0aWrRogUtWLCA10cZDHA//PBD/hliV6RIEUqWLBm/4VACwyest23bNs4EYRsiiHQfArlkyRL6448/aN++fSyoU6ZMoeTJk3N5/cknnzCp+BkiCn++/fZbKlu2LP3999+UOHFirUS6HXRanY0CY27zAUHBy79ChQr80r9x4wZVqlSJz3TevHmpadOmfN779etHECycWcTPlStXWCAhKvny5eMEI3/+/JyIfP311zRu3Dj67bffaOrUqT77qJZ27tzpi5WCBQuyTTwPwXTGqVOnWKSQCULAOnfuzEII+xBBiN/gwYO5ZEbcww8M/IzYrV69Osc8YqNLly78OdZZuHAhxxHsNW7cmDp16uTaCXJNBBH0SZMm5YwIwoBsCQS2bduWDh48SJkyZaKMGTOymABgCFDJkiV9Ioi3xJtvvsmE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"},3394:function(e,t,n){t.Z=n.p+"assets/images/7.3-4124284d2bf36fc20d7b59878ea29851.png"},7292:function(e,t,n){t.Z=n.p+"assets/images/7.4-0799505734478951a0860b70ee76d589.png"},7301:function(e,t,n){t.Z=n.p+"assets/images/7.5-476ea64f79fa6d024eb84f8b6f3dd00f.png"},887:function(e,t,n){t.Z=n.p+"assets/images/MergeConflict-e53056012e94fc3f79b7c9d10fb19bc0.gif"}}]);