"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[8707],{49817:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var l=a(87462),n=(a(67294),a(3905));a(67814);const r={title:"Ch2: \u67b6\u69cb\u601d\u7dad",tsidebar_label:"Ch2: \u67b6\u69cb\u601d\u7dad",sidebar_position:2},i=void 0,o={unversionedId:"sg/fundamentals-of-software-architecture/ch2",id:"sg/fundamentals-of-software-architecture/ch2",title:"Ch2: \u67b6\u69cb\u601d\u7dad",description:"\u67b6\u69cb\u8207\u8a2d\u8a08",source:"@site/docs/sg/fundamentals-of-software-architecture/ch2.mdx",sourceDirName:"sg/fundamentals-of-software-architecture",slug:"/sg/fundamentals-of-software-architecture/ch2",permalink:"/docs/sg/fundamentals-of-software-architecture/ch2",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/fundamentals-of-software-architecture/ch2.mdx",tags:[],version:"current",lastUpdatedBy:"yvette-tsai",lastUpdatedAt:1717544124,formattedLastUpdatedAt:"Jun 4, 2024",sidebarPosition:2,frontMatter:{title:"Ch2: \u67b6\u69cb\u601d\u7dad",tsidebar_label:"Ch2: \u67b6\u69cb\u601d\u7dad",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Ch1: \u4ecb\u7d39",permalink:"/docs/sg/fundamentals-of-software-architecture/ch1"},next:{title:"Ch3: \u6a21\u7d44\u5316",permalink:"/docs/sg/fundamentals-of-software-architecture/ch3"}},u={},p=[{value:"\u67b6\u69cb\u8207\u8a2d\u8a08",id:"\u67b6\u69cb\u8207\u8a2d\u8a08",level:2},{value:"\u6280\u8853\u5ee3\u5ea6",id:"\u6280\u8853\u5ee3\u5ea6",level:2},{value:"\u5206\u6790\u53d6\u6368",id:"\u5206\u6790\u53d6\u6368",level:2},{value:"\u4f47\u5217Queues\u8207\u4e3b\u984cTopics",id:"\u4f47\u5217queues\u8207\u4e3b\u984ctopics",level:3},{value:"\u5e73\u8861\u67b6\u69cb\u8207\u5be6\u969b\u7a0b\u5f0f\u7de8\u5beb",id:"\u5e73\u8861\u67b6\u69cb\u8207\u5be6\u969b\u7a0b\u5f0f\u7de8\u5beb",level:2},{value:"Recap",id:"recap",level:2}],s={toc:p},k="wrapper";function m(t){let{components:e,...r}=t;return(0,n.kt)(k,(0,l.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u67b6\u69cb\u8207\u8a2d\u8a08"},"\u67b6\u69cb\u8207\u8a2d\u8a08"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u50b3\u7d71\u4e0a\uff0c\u67b6\u69cb\u5e2b\u8ca0\u8cac\u67b6\u69cb\uff0c\u958b\u767c\u4eba\u54e1\u8ca0\u8cac\u5beb\u7a0b\u5f0f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u67b6\u69cb\u5e2b\u7684\u6c7a\u5b9a\u4e0d\u4e00\u5b9a\u5230\u5f97\u4e86\u958b\u767c\u5718\u968a"),(0,n.kt)("li",{parentName:"ul"},"\u958b\u767c\u5718\u968a\u7684\u66f4\u52d5\u5f88\u5c11\u56de\u994b\u7d66\u67b6\u69cb\u5e2b"))),(0,n.kt)("li",{parentName:"ul"},"\u6253\u7834\u67b6\u69cb\u5e2b\u8207\u958b\u767c\u4eba\u54e1\u4e4b\u9593\u7684\u969c\u7919\uff0c\u67b6\u69cb\u624d\u6709\u53ef\u80fd\u53ef\u884c")),(0,n.kt)("h2",{id:"\u6280\u8853\u5ee3\u5ea6"},"\u6280\u8853\u5ee3\u5ea6"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Breadth and Depth",src:a(3506).Z,width:"613",height:"405"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9ad8\u5ea6\u662f\u4f60\u7684\u6280\u8853\u6df1\u5ea6\uff1b\u5bec\u5ea6\u662f\u4f60\u7684\u6280\u8853\u5ee3\u5ea6"),(0,n.kt)("li",{parentName:"ul"},"\u91d1\u5b57\u5854\u5c16\u7aef",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6709\u6642\u6548\u6027 - \u4e45\u6c92\u7528\u4f60\u6703\u5fd8\u8a18"))),(0,n.kt)("li",{parentName:"ul"},"\u5c0d\u67b6\u69cb\u5e2b\u4f86\u8aaa\uff0c\u5ee3\u5ea6\u6bd4\u6df1\u5ea6\u91cd\u8981"),(0,n.kt)("li",{parentName:"ul"},"\u82e5\u67b6\u69cb\u5e2b\u5617\u8a66\u5728\u5f88\u5ee3\u7684\u7bc4\u570d\u7dad\u6301\u6df1\u5ea6",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7cbe\u75b2\u529b\u76e1"),(0,n.kt)("li",{parentName:"ul"},"\u6703\u6709\u932f\u89ba\uff0c\u5c0d\u81ea\u5df1\u5df2\u77e5\u7684\u6771\u897f\u62b1\u6709\u4fe1\u5fc3\uff0c\u4f46\u5176\u5be6\u5df2\u7d93\u662f\u904e\u6642\u7684\u6771\u897f"),(0,n.kt)("li",{parentName:"ul"},"\u5176\u4e2d\u7684\u5e73\u8861\uff0c\u662f\u6bcf\u500b\u958b\u767c\u4eba\u54e1\u5728\u8077\u696d\u751f\u6daf\u4e2d\u90fd\u8981\u8a8d\u771f\u8003\u616e\u7684")))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u51b0\u51cd\u7a74\u5c45\u4eba\u53cd\u6a21\u5f0f Forzen Casveman Anti-Pattern"),(0,n.kt)("p",{parentName:"admonition"},"\u56e0\u70ba\u904e\u53bb\u7684\u7d93\u9a57\u906d\u9047\u904e\u7684\u554f\u984c\uff0c\u5118\u7ba1\u8a72\u554f\u984c\u767c\u751f\u7684\u6a5f\u6703\u5f88\u4f4e\uff0c\u4f46\u537b\u4e00\u76f4\u7121\u6cd5\u91cb\u61f7\u3002\u4f7f\u5f97\u67b6\u69cb\u5e2b\u505a\u6c7a\u5b9a\u6642\u7279\u5225\u5c0f\u5fc3\u3002\n\u8981\u4e86\u89e3\u771f\u5be6\u7684\u6a23\u8c8c\u8207\u81ea\u5df1\u7d93\u9a57\u6216\u611f\u89ba\u5f97\u5dee\u7570\uff0c\u907f\u514d\u53d7\u5230\u9019\u7a2e\u5fc3\u7406\u56e0\u7d20\u5f71\u97ff")),(0,n.kt)("h2",{id:"\u5206\u6790\u53d6\u6368"},"\u5206\u6790\u53d6\u6368"),(0,n.kt)("h3",{id:"\u4f47\u5217queues\u8207\u4e3b\u984ctopics"},"\u4f47\u5217Queues\u8207\u4e3b\u984cTopics"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4f47\u5217Queue",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5c07Event\u9001\u7d66\u9700\u8981\u7684\u6d88\u8cbb\u8005"),(0,n.kt)("li",{parentName:"ul"},"\u751f\u7522\u8005\u9700\u8981\u77e5\u9053\u6d88\u8cbb\u8005\u662f\u8ab0\uff0c\u5c07\u4e8b\u4ef6Event\u6d3e\u9032\u5c0d\u61c9\u7684Queue"),(0,n.kt)("li",{parentName:"ul"},"AWS SQS, RabbitMQ, ActiveMQ")))),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(53563).Z,width:"578",height:"333"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e3b\u984cTopic",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u767c\u5e03/\u8a02\u95b1\u8005\u6a21\u5f0f"),(0,n.kt)("li",{parentName:"ul"},"\u751f\u7522\u8005\u4e0d\u4e00\u5b9a\u77e5\u9053\u6d88\u8cbb\u8005\u662f\u8ab0"),(0,n.kt)("li",{parentName:"ul"},"AWS Kinesis, Kafka/Redpanda, Pulsar")))),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(10485).Z,width:"615",height:"214"})),(0,n.kt)("admonition",{title:"Question",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"\u5982\u679c\u8981\u505a\u4e00\u500b\u62cd\u8ce3\u7db2\u7ad9\uff0c\u51fa\u50f9\u8cc7\u6599\u6703\u88ab\u7d00\u9304\u3001\u8ffd\u8e64\u3001\u8cc7\u6599\u5206\u6790\u4e09\u500b\u5b50\u7cfb\u7d71\u62ff\u53bb\u4f7f\u7528\uff0c\u8a72\u4f7f\u7528Queue\u6216\u662fTopic\u4f86\u67b6\u69cb\u9019\u500b\u7cfb\u7d71\uff1f")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"}," \u60c5\u5883               ")),(0,n.kt)("th",{parentName:"tr",align:null},"Queue"),(0,n.kt)("th",{parentName:"tr",align:null},"Topic"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"}," \u52a0\u5165\u65b0\u7684Consumer   ")),(0,n.kt)("td",{parentName:"tr",align:null},"\u8981\u5efa\u7acb\u65b0Queue\uff0cProducer\u4e5f\u9700\u8981\u505a\u4fee\u6539"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("icon",{icon:"fa fa-check",style:{color:"#09ff09"},size:"lg"})," \u53ea\u9700\u8981\u5efa\u7acb\u65b0\u7684Consumer\u8a02\u95b1\u9700\u8981\u7684Topic")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"}," Producer\u53d7\u5230\u7684\u5236\u7d04 ")),(0,n.kt)("td",{parentName:"tr",align:null},"\u8f03\u591a\uff0c\u5c0d\u65bc\u8ab0\u8981\u6d88\u8cbb\u8cc7\u6599\u8981\u6709\u8a8d\u77e5\uff0c\u6709\u8026\u5408"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("icon",{icon:"fa fa-check",style:{color:"#09ff09"},size:"lg"})," \u8f03\u5c11\uff0c\u8026\u5408\u4f4e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"}," \u8cc7\u6599\u5b89\u5168           ")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("icon",{icon:"fa fa-check",style:{color:"#09ff09"},size:"lg"})," \u8f03\u597d\uff0c\u9664\u4e86\u7279\u5b9a\u7684\u63a5\u6536\u8005\u4e4b\u5916\u6c92\u6709\u4eba\u80fd\u770b\u5230\u8cc7\u6599"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4efb\u4f55Consumer\u90fd\u80fd\u8b80\u53d6\u8cc7\u6599")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"}," \u5408\u7d04\u540c\u8cea\u6027         ")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("icon",{icon:"fa fa-check",style:{color:"#09ff09"},size:"lg"})," Consumer\u53ef\u4ee5\u6709\u6240\u9700\u8cc7\u6599\u76f8\u95dc\u7684\u81ea\u6709\u5408\u7d04"),(0,n.kt)("td",{parentName:"tr",align:null},"\u53ea\u80fd\u652f\u63f4\u540c\u8cea\u5408\u7d04")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"}," \u76e3\u63a7Event ")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("icon",{icon:"fa fa-check",style:{color:"#09ff09"},size:"lg"})," \u6bcf\u500bQueue\u53ef\u4ee5\u500b\u5225\u76e3\u63a7\uff0c\u56e0\u6b64\u53ef\u4ee5\u8a2d\u8a08\u81ea\u52d5scale"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4e0d\u652f\u63f4\u76e3\u63a7\uff0c\u7121\u6cd5\u81ea\u52d5Scale")))),(0,n.kt)("h2",{id:"\u5e73\u8861\u67b6\u69cb\u8207\u5be6\u969b\u7a0b\u5f0f\u7de8\u5beb"},"\u5e73\u8861\u67b6\u69cb\u8207\u5be6\u969b\u7a0b\u5f0f\u7de8\u5beb"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5e38\u505a\u6982\u5ff5\u9a57\u8b49(PoCs)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u67b6\u69cb\u5e2b\u4e0d\u53ea\u9700\u8981\u5beb\u7a0b\u5f0f\u78bc\uff0c\u6709\u52a9\u65bc\u5728\u8003\u91cf\u5be6\u4f5c\u7684\u72c0\u6cc1\u4e0b\u9a57\u8b49\u67b6\u69cb\u6c7a\u7b56"),(0,n.kt)("li",{parentName:"ul"},"\u5beb\u51fa\u6700\u597d\u7b49\u7d1a\u7684\u7a0b\u5f0f\u78bc\u4f5c\u70ba\u53c3\u8003\u3001\u4ee5\u53ca\u5851\u9020\u5718\u968a\u6587\u5316"))),(0,n.kt)("li",{parentName:"ol"},"\u53bb\u8655\u7406\u61c9\u5c0d\u6280\u8853\u50b5\u7684\u554f\u984c",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8b93\u958b\u767c\u5718\u968a\u5c08\u5fc3\u505a\u95dc\u9375\u7684\u529f\u80fd"),(0,n.kt)("li",{parentName:"ul"},"\u8f03\u7121\u6642\u6548\u6027\uff0c\u67b6\u69cb\u5e2b\u4e0d\u6703\u6210\u70ba\u5718\u968a\u74f6\u9838"),(0,n.kt)("li",{parentName:"ul"},"\u4feeBug\u4e5f\u662f\u5e6b\u52a9\u5718\u968a\u7684\u65b9\u5f0f"))),(0,n.kt)("li",{parentName:"ol"},"\u81ea\u52d5\u5316\u65e5\u5e38\u5de5\u4f5c\u4ee5\u8f14\u52a9\u958b\u767c\u5718\u968a"),(0,n.kt)("li",{parentName:"ol"},"\u9032\u884cCode Review")),(0,n.kt)("h2",{id:"recap"},"Recap"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u63cf\u8ff0\u67b6\u69cb\u7684\u50b3\u7d71\u505a\u6cd5\u8207\u958b\u767c\u7684\u7570\u540c\uff0c\u4e26\u89e3\u91cb\u70ba\u4f55\u5176\u4e0d\u518d\u594f\u6548"),(0,n.kt)("li",{parentName:"ol"},"\u5217\u51fa\u77e5\u8b58\u4e09\u89d2\u5f62\u7684\u4e09\u500b\u5c64\u6b21\uff0c\u4e26\u5c0d\u6bcf\u4e00\u500b\u63d0\u4f9b\u4f8b\u5b50"),(0,n.kt)("li",{parentName:"ol"},"\u70ba\u4ec0\u9ebc\u5c0d\u67b6\u69cb\u5e2b\u4f86\u8aaa\uff0c\u5c08\u6ce8\u5728\u5ee3\u5ea6\u6bd4\u6df1\u5ea6\u4f86\u7684\u91cd\u8981"),(0,n.kt)("li",{parentName:"ol"},"\u67b6\u69cb\u5e2b\u7dad\u6301\u6280\u8853\u6df1\u5ea6\u3001\u53ca\u4fdd\u6709\u5be6\u8e10\u7d93\u9a57\u53ef\u4ee5\u4f7f\u7528\u54ea\u4e9b\u65b9\u6cd5")))}m.isMDXComponent=!0},3506:(t,e,a)=>{a.d(e,{Z:()=>l});const l=a.p+"assets/images/breadth_and_depth-34ea82115b55cd1625644853ca376683.png"},53563:(t,e,a)=>{a.d(e,{Z:()=>l});const l=a.p+"assets/images/queue_arch-1014c2db414250d7cbe1e65b964cf917.png"},10485:(t,e,a)=>{a.d(e,{Z:()=>l});const l=a.p+"assets/images/topic_arch-0e53cfde3d15b1c131145505bba35c9a.png"}}]);