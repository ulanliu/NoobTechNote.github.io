"use strict";(self.webpackChunknoobtechnote_github_io_source=self.webpackChunknoobtechnote_github_io_source||[]).push([[7869],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),d=u(a),c=i,m=d["".concat(s,".").concat(c)]||d[c]||p[c]||l;return a?n.createElement(m,o(o({ref:t},h),{},{components:a})):n.createElement(m,o({ref:t},h))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,o=new Array(l);o[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:i,o[1]=r;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},19141:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>u});var n=a(87462),i=(a(67294),a(3905));const l={title:"Ch3: Shatter long functions",tsidebar_label:"Ch3: Shatter long functions",sidebar_position:3},o=void 0,r={unversionedId:"sg/five-lines-of-code/ch3",id:"sg/five-lines-of-code/ch3",title:"Ch3: Shatter long functions",description:"Code can easily get messy and confusing,",source:"@site/docs/sg/five-lines-of-code/ch3.mdx",sourceDirName:"sg/five-lines-of-code",slug:"/sg/five-lines-of-code/ch3",permalink:"/docs/sg/five-lines-of-code/ch3",draft:!1,editUrl:"https://github.com/NoobTechNote/NoobTechNote.github.io/tree/main/docs/sg/five-lines-of-code/ch3.mdx",tags:[],version:"current",lastUpdatedBy:"yvette-tsai",lastUpdatedAt:1717544124,formattedLastUpdatedAt:"Jun 4, 2024",sidebarPosition:3,frontMatter:{title:"Ch3: Shatter long functions",tsidebar_label:"Ch3: Shatter long functions",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Ch2: \u6df1\u5165\u77ad\u89e3\u91cd\u69cb\u7684\u539f\u7406",permalink:"/docs/sg/five-lines-of-code/ch2"},next:{title:"Ch4: \u8b93\u578b\u5225\u78bc\u80fd\u904b\u4f5c",permalink:"/docs/sg/five-lines-of-code/ch4"}},s={},u=[{value:"3.1. Establishing our first rule: Why five lines?",id:"31-establishing-our-first-rule-why-five-lines",level:2},{value:"3.1.1 Rule: FIVE LINES",id:"311-rule-five-lines",level:3},{value:"What",id:"what",level:4},{value:"Why",id:"why",level:4},{value:"Reference",id:"reference",level:4},{value:"3.2. Introducing a refactoring pattern to break up functions",id:"32-introducing-a-refactoring-pattern-to-break-up-functions",level:2},{value:"looking at the \u201cshape\u201d of the code.",id:"looking-at-the-shape-of-the-code",level:3},{value:"focus on the structure.",id:"focus-on-the-structure",level:3},{value:"compile",id:"compile",level:3},{value:"3.2.1 Refactoring pattern: EXTRACT METHOD",id:"321-refactoring-pattern-extract-method",level:3},{value:"Example",id:"example",level:4},{value:"3.3 Breaking up functions to balancing abstraction",id:"33-breaking-up-functions-to-balancing-abstraction",level:2},{value:"3.3.1 Rule: EITHER CALL OR PASS",id:"331-rule-either-call-or-pass",level:3},{value:"3.3.2 Applying the rule",id:"332-applying-the-rule",level:3},{value:"3.4 Properties of a good function name",id:"34-properties-of-a-good-function-name",level:2},{value:"Applying the rule",id:"applying-the-rule",level:3},{value:"3.5 Breaking up functions that are doing too much",id:"35-breaking-up-functions-that-are-doing-too-much",level:2},{value:"3.5.1 Rule: IF ONLY AT THE START",id:"351-rule-if-only-at-the-start",level:3},{value:"Why?",id:"why-1",level:4},{value:"How?",id:"how",level:4},{value:"3.5.2 Applying the rule",id:"352-applying-the-rule",level:3},{value:"Summary",id:"summary",level:2}],h={toc:u},d="wrapper";function p(e){let{components:t,...l}=e;return(0,i.kt)(d,(0,n.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Code can easily get messy and confusing,",(0,i.kt)("br",{parentName:"p"}),"\n","even when following the Don\u2019t Repeat Yourself (DRY) and Keep It Simple, Stupid (KISS) guidelines.",(0,i.kt)("br",{parentName:"p"}),"\n","Some strong contributors to this messiness are as follows:  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Methods are doing ",(0,i.kt)("mark",null,"multiple different things"),"."),(0,i.kt)("li",{parentName:"ul"},"We use ",(0,i.kt)("mark",null,"low-level primitive operations")," (array accesses, arithmetic operations,etc.)."),(0,i.kt)("li",{parentName:"ul"},"We ",(0,i.kt)("mark",null,"lack human-readable text"),", like comments and good method and variable naming.")),(0,i.kt)("p",null,"Unfortunately, knowing these issues is not enough to determine exactly what is wrong,",(0,i.kt)("br",{parentName:"p"}),"\n","let alone how to deal with it.",(0,i.kt)("br",{parentName:"p"}),"\n","In this chapter, we describe a concrete way to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Identifying overly long methods with FIVE LINES"),(0,i.kt)("li",{parentName:"ul"},"Working with code without looking at the specifics"),(0,i.kt)("li",{parentName:"ul"},"Breaking up long methods with EXTRACT METHOD"),(0,i.kt)("li",{parentName:"ul"},"Balancing abstraction levels with EITHER CALL OR PASS"),(0,i.kt)("li",{parentName:"ul"},"Isolating if statements with if ONLY AT THE START")),(0,i.kt)("h2",{id:"31-establishing-our-first-rule-why-five-lines"},"3.1. Establishing our first rule: Why five lines?"),(0,i.kt)("h3",{id:"311-rule-five-lines"},"3.1.1 Rule: FIVE LINES"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"no method should have more than five lines.\n")),(0,i.kt)("p",null,"In this book, FIVE LINES is the ultimate goal,",(0,i.kt)("br",{parentName:"p"}),"\n","because adhering to this rule is a huge improvement all on its own."),(0,i.kt)("h4",{id:"what"},"What"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A method should not contain more than five lines, discount whitespace and braces: { and }.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"We count four lines: one for each if (including else) and one for each semicolon.\n",(0,i.kt)("img",{alt:"Figure-3.1",src:a(80082).Z,width:"1556",height:"296"})))),(0,i.kt)("li",{parentName:"ul"},"20 lines function --\x3e 10 lines function1 + 10 lines function2",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"10 lines function1 --\x3e 5 lines function1.1 + 5 lines function1.2"),(0,i.kt)("li",{parentName:"ul"},"10 lines function2 --\x3e 5 lines function2.1 + 5 lines function2.2"))),(0,i.kt)("li",{parentName:"ul"},"Once we are comfortable with this rule, we can start ",(0,i.kt)("mark",null,"varying the number of lines to fit specific examples"),". This is fine; but in practice, the number of lines often ends up being around five.")),(0,i.kt)("h4",{id:"why"},"Why"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Having long methods is a smell in itself."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"long methods are difficult to work with."),(0,i.kt)("li",{parentName:"ul"},"Left unchecked, ",(0,i.kt)("mark",null,"methods tend to grow over time")," as we add more and more functionality to them.",(0,i.kt)("br",{parentName:"li"}),"This makes them increasingly difficult to understand. Imposing a size limit on our methods prevents us from sliding into this bad territory."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"this five lines limit also prevents us from breaking ",(0,i.kt)("mark",null,'"Methods should do one thing" smell'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"method\u2019s name is an opportunity to ",(0,i.kt)("mark",null,"communicate the intent of the code")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"that four methods, each with 5 lines of code, can be much more quickly and easily understood than one method with 20 lines.",(0,i.kt)("br",{parentName:"li"}),"This is because each method\u2019s name is an opportunity to communicate the intent of the code."),(0,i.kt)("li",{parentName:"ul"},"Essentially, method naming is equivalent to putting a comment at least every 5 lines."),(0,i.kt)("li",{parentName:"ul"},"Plus, if small methods are properly named, finding a good name for a big function is easier, too.")))),(0,i.kt)("h4",{id:"reference"},"Reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"read more about the smell \u201cMethods should do one thing\u201d in Robert C. Martin\u2019s book Clean Code (Pearson, 2008)  "),(0,i.kt)("li",{parentName:"ul"},"read more about the \u201cLong methods\u201d smell in Martin Fowler\u2019s book Refactoring (Addison-Wesley Professional, 1999).")),(0,i.kt)("h2",{id:"32-introducing-a-refactoring-pattern-to-break-up-functions"},"3.2. Introducing a refactoring pattern to break up functions"),(0,i.kt)("h3",{id:"looking-at-the-shape-of-the-code"},"looking at the \u201cshape\u201d of the code."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The danger is getting bogged down trying to understand every single line\u2014that would take a lot of time and be unproductive"),(0,i.kt)("li",{parentName:"ul"},"Our first stab at understanding the code should always be to consider the function name."),(0,i.kt)("li",{parentName:"ul"},"identify groups of lines related to the same thing.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"To make these groups clear, we add blank lines where we think the group should be."),(0,i.kt)("li",{parentName:"ul"},"Sometimes we add comments to help us remember what the grouping is related to.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"In general, we strive to avoid comments, as they tend to go out of date, or they are used like deodorant on bad code;"),(0,i.kt)("li",{parentName:"ul"},"but in this case, the comments are temporary, as we\u2019ll see in a moment."))),(0,i.kt)("li",{parentName:"ul"},"Often, the original programmers had groupings in mind and inserted blank lines. Sometimes they included comments."))),(0,i.kt)("li",{parentName:"ul"},"Without digesting the entire function, we cut it up and process each piece while it is small and easy to understand.")),(0,i.kt)("h3",{id:"focus-on-the-structure"},"focus on the structure."),(0,i.kt)("p",null,"Even without being able to see any specifics, we notice the two groupings,",(0,i.kt)("br",{parentName:"p"}),"\n","each starting with a comment: // Draw map and // Draw player."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Figure-3.2",src:a(32695).Z,width:"1770",height:"1568"})),(0,i.kt)("p",null,"We can take advantage of those comments by doing the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a new (empty) method, drawMap."),(0,i.kt)("li",{parentName:"ol"},"Where the comment is, put a call to drawMap."),(0,i.kt)("li",{parentName:"ol"},"Select all the lines in the group we identified, and then cut them and paste\nthem as the body of drawMap."),(0,i.kt)("li",{parentName:"ol"},"Repeating the same process for drawPlayer.")),(0,i.kt)("p",null,"take a look at how that works with actual code. ",(0,i.kt)("mark",null,"still without looking at what any individual line does"),".\n",(0,i.kt)("img",{alt:"Figure-3.3",src:a(26860).Z,width:"1294",height:"1268"})),(0,i.kt)("h3",{id:"compile"},"compile"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"we get quite a few errors. This is because the variable g is no longer in scope.",(0,i.kt)("br",{parentName:"li"}),"We can fix this by first hovering our cursor over g in the original draw method.",(0,i.kt)("br",{parentName:"li"}),"This lets us know its type, which we use to introduce a parameter g: CanvasRenderingContext2D in drawMap."),(0,i.kt)("li",{parentName:"ul"},"Notice that there is still no need to examine what the code is doing any deeper than the method names."),(0,i.kt)("li",{parentName:"ul"},"repeat the same process end up with exactly as we expected.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Figure-3.4",src:a(52819).Z,width:"1450",height:"1458"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The process we just went through is a standard pattern-a refactoring pattern\u2014that we call ",(0,i.kt)("mark",null,"EXTRACT METHOD"),"."),(0,i.kt)("li",{parentName:"ul"},"Because we are only moving lines around, ",(0,i.kt)("mark",null,"the risk of introducing errors is minimal"),",",(0,i.kt)("br",{parentName:"li"}),"especially since the compiler told us when we forgot parameters."),(0,i.kt)("li",{parentName:"ul"},"We use the comments as the method names; therefore, the functions\u2019 names and the comments convey the same information.",(0,i.kt)("br",{parentName:"li"}),"Thus we ",(0,i.kt)("mark",null,"eliminate the comments"),". We also eliminate the now-obsolete blank lines that we used to group the lines.")),(0,i.kt)("h3",{id:"321-refactoring-pattern-extract-method"},"3.2.1 Refactoring pattern: EXTRACT METHOD"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"EXTRACT METHOD takes part of one method and extracts it into its own method.  "),(0,i.kt)("li",{parentName:"ul"},"This can be done mechanically, and indeed, many modern IDEs have this refactoring pattern built right in."),(0,i.kt)("li",{parentName:"ul"},"there is also a safe way to do it by hand.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Figure-3.5",src:a(58068).Z,width:"1470",height:"810"})),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Pro tip",(0,i.kt)("br",{parentName:"p"}),"\n","As returning in only some branches of an if can prevent us from extracting a method,",(0,i.kt)("br",{parentName:"p"}),"\n","I recommend starting from the bottom of the method and working upward.",(0,i.kt)("br",{parentName:"p"}),"\n","This has the effect of pushing the return upward, so we eventually return in all branches.")),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Figure-3.6",src:a(56349).Z,width:"1262",height:"1010"}),"\n",(0,i.kt)("img",{alt:"Figure-3.7",src:a(10587).Z,width:"1116",height:"688"}),"\n",(0,i.kt)("img",{alt:"Figure-3.8",src:a(106).Z,width:"1146",height:"938"}),"\n",(0,i.kt)("img",{alt:"Figure-3.9",src:a(54841).Z,width:"1130",height:"490"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You may be thinking that it would be better to use the built-in Math.min or arr","[x][y]"," as an argument instead of all three separately. If you can get there safely, that may be a better approach for you. But the important lesson to take from this example is that the transformation, although slightly cumbersome, is safe. ",(0,i.kt)("mark",null,"We can easily get into trouble trying to be clever"),", which often isn\u2019t worth it."),(0,i.kt)("li",{parentName:"ul"},"We would rather produce unusual-looking code safely than pretty code with less confidence. (If we were feeling confident as a result of something else, like lots of automated testing, we could take more risks; but this isn\u2019t the case here.)")),(0,i.kt)("h2",{id:"33-breaking-up-functions-to-balancing-abstraction"},"3.3 Breaking up functions to balancing abstraction"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Once we start introducing more methods and passing things around as parameters,",(0,i.kt)("br",{parentName:"em"}),"we can end up with ",(0,i.kt)("strong",{parentName:"em"},"uneven responsibilities"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Figure-3.10",src:a(61091).Z,width:"1632",height:"824"})),(0,i.kt)("p",null,"This code would be difficult to read because",(0,i.kt)("br",{parentName:"p"}),"\n","we would need to ",(0,i.kt)("mark",null,"switch between low-level operations and high-level method names"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"It is much easier to stay at one level of abstraction.\n")),(0,i.kt)("h3",{id:"331-rule-either-call-or-pass"},"3.3.1 Rule: EITHER CALL OR PASS"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"The content of a function should be on the same level of abstraction\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This statement is so powerful that it is a smell in its own right."),(0,i.kt)("li",{parentName:"ul"},"read more about the smell \u201cThe content of a function should be on the same level of abstraction\u201d in Robert C. Martin\u2019s book Clean Code.")),(0,i.kt)("h3",{id:"332-applying-the-rule"},"3.3.2 Applying the rule"),(0,i.kt)("p",null,"Again without looking at the specifics, if we examine our draw method as it currently looks"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Figure-3.11",src:a(81394).Z,width:"1598",height:"682"})),(0,i.kt)("p",null,"what do we extract? Here we need to look a bit at the specifics."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Figure-3.12",src:a(88504).Z,width:"1654",height:"548"})),(0,i.kt)("p",null,"only extract the line with g.clearRect will end up violating the rule again,",(0,i.kt)("br",{parentName:"p"}),"\n","passing canvas as an argument and also calling canvas.getContext."),(0,i.kt)("p",null,"Instead, we decide to extract the first three lines together.  "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Figure-3.13",src:a(41986).Z,width:"1872",height:"798"})),(0,i.kt)("p",null,"Every time we perform EXTRACT METHOD,",(0,i.kt)("br",{parentName:"p"}),"\n","it\u2019s a great opportunity to make the code more readable by introducing a good method name.  "),(0,i.kt)("p",null,"For the first time, we need to consider what the code is doing, because we have no comments to follow.",(0,i.kt)("br",{parentName:"p"}),"\n","Luckily, we have already significantly reduced the number of lines we need to consider: only three."),(0,i.kt)("p",null,"Let\u2019s discuss what a good name actually is."),(0,i.kt)("h2",{id:"34-properties-of-a-good-function-name"},"3.4 Properties of a good function name"),(0,i.kt)("p",null,"a few properties that a good name should have:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It should be honest. It should describe the function\u2019s intention."),(0,i.kt)("li",{parentName:"ul"},"It should be complete. It should capture everything the function does."),(0,i.kt)("li",{parentName:"ul"},"It should be understandable for someone working in the domain.",(0,i.kt)("br",{parentName:"li"}),"easier to talk about the code with teammates and customers.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"understandable complete intention\n")),(0,i.kt)("h3",{id:"applying-the-rule"},"Applying the rule"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Figure-3.14",src:a(3386).Z,width:"1642",height:"1444"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"We can naturally split this code into two smaller functions.  "),(0,i.kt)("li",{parentName:"ol"},"What should we call them? Both groups are still pretty complex, so we want to postpone understanding them further.  "),(0,i.kt)("li",{parentName:"ol"},"We notice superficially that in the first group, the predominant word is input, and in the second, the predominant word is map.  "),(0,i.kt)("li",{parentName:"ol"},"We know we are splitting a function called update, so as a first draft,",(0,i.kt)("br",{parentName:"li"}),"we can combine these words to get the function names updateInputs and updateMap.  "),(0,i.kt)("li",{parentName:"ol"},"updateMap is fine; however, we probably do not \u201cupdate\u201d the inputs.",(0,i.kt)("br",{parentName:"li"}),"So, we decide to use another naming trick and use handle, instead: handleInputs."),(0,i.kt)("li",{parentName:"ol"},"When choosing names like this, always come back later,",(0,i.kt)("br",{parentName:"li"}),"when the functions are smaller, to assess whether you can improve the names.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Figure-3.15",src:a(44562).Z,width:"1616",height:"1500"})),(0,i.kt)("h2",{id:"35-breaking-up-functions-that-are-doing-too-much"},"3.5 Breaking up functions that are doing too much"),(0,i.kt)("h3",{id:"351-rule-if-only-at-the-start"},"3.5.1 Rule: IF ONLY AT THE START"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"if you have an if, it should be the first thing in the function.\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"It should also be the only thing, in the sense that we should not do anything after it.\n")),(0,i.kt)("h4",{id:"why-1"},"Why?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Every time we ",(0,i.kt)("mark",null,"check something, it is a responsibility"),", and it should be handled by one function.",(0,i.kt)("br",{parentName:"li"}),"Therefore we have this rule.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u5f9e testability \u7684\u89d2\u5ea6\u4f86\u770b\uff0c\u4e5f\u883b\u5408\u7406\u7684\uff0cUT\u9019\u6a23\u624d\u597d\u5beb")),(0,i.kt)("h4",{id:"how"},"How?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"we do not need to extract its body, and we also should not separate it from its else.  ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Both the body and the else are part of the code structure,",(0,i.kt)("br",{parentName:"li"}),"and we rely on this structure to guide our efforts so we do not have to understand the code."),(0,i.kt)("li",{parentName:"ul"},"Behavior and structure are closely tied,",(0,i.kt)("br",{parentName:"li"}),"and as we are refactoring, we are not supposed to change the behavior",(0,i.kt)("br",{parentName:"li"}),"so ",(0,i.kt)("mark",null,"we shouldn\u2019t change the structure"),", either."))),(0,i.kt)("li",{parentName:"ul"},"A chain of else ifs represents an atomic unit that we cannot split up.",(0,i.kt)("br",{parentName:"li"}),"This means ",(0,i.kt)("mark",null,"the fewest lines we can achieve")," with EXTRACT METHOD in the context of an if with else ifs  ",(0,i.kt)("mark",null,"is to extract exactly only that if along with its else ifs"),"."),(0,i.kt)("li",{parentName:"ul"},"read more about the smell \u201cMethods should do one thing\u201d in Robert C. Martin\u2019s book Clean Code.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Figure-3.15",src:a(76522).Z,width:"1416",height:"1104"})),(0,i.kt)("h3",{id:"352-applying-the-rule"},"3.5.2 Applying the rule"),(0,i.kt)("p",null,"It\u2019s easy to spot violations of this rule without looking at the specifics of the code."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Figure-3.16",src:a(91561).Z,width:"1422",height:"1094"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Figure-3.17",src:a(18523).Z,width:"1426",height:"950"})),(0,i.kt)("p",null,"There are two predominant words in this group of lines: map and tile.",(0,i.kt)("br",{parentName:"p"}),"\n","We already have updateMap, so we call the new function updateTile."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Figure-3.18",src:a(7389).Z,width:"1650",height:"756"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"readability advantage of EXTRACT METHOD:",(0,i.kt)("br",{parentName:"li"}),"it lets us ",(0,i.kt)("mark",null,"give parameters new names")," that are more informative in their new context.",(0,i.kt)("br",{parentName:"li"}),"current is a fine name for a variable in a loop, but in the new handleInput function, input is a much better name."),(0,i.kt)("li",{parentName:"ul"},"handleInput is already compact, and it is hard to see how we can make it compliant with the five-line rule.",(0,i.kt)("br",{parentName:"li"}),"However, as we will see ",(0,i.kt)("mark",null,"in the next chapter, there is an elegant solution"),".")),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bad Smells",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Long methods."),(0,i.kt)("li",{parentName:"ul"},"Methods are doing multiple different things."),(0,i.kt)("li",{parentName:"ul"},"Methods lack human-readable text, like comments and good method and variable naming."))),(0,i.kt)("li",{parentName:"ul"},"Rules",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"FIVE LINES rule : prevent long methods, reduce the chance of methods doing more than one thing."),(0,i.kt)("li",{parentName:"ul"},"EITHER CALL OR PASS rule : prevent methods mixing multiple levels of abstraction to loose focus."),(0,i.kt)("li",{parentName:"ul"},"if ONLY AT THE START rule : prevent methods doing more than one thing."))),(0,i.kt)("li",{parentName:"ul"},"Benefits of EXTRACT METHOD",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"eliminate comments by making them method names."),(0,i.kt)("li",{parentName:"ul"},"rename parameters to further improve readability."))),(0,i.kt)("li",{parentName:"ul"},"Method naming",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"honest"),(0,i.kt)("li",{parentName:"ul"},"complete"),(0,i.kt)("li",{parentName:"ul"},"understandable")))))}p.isMDXComponent=!0},81394:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/draw_abstraction_level_outline-53e6f61fc35475d08475d1d99caa841f.png"},52819:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/draw_function_refactor1-be2c751aced66f7122e936db365550a7.png"},88504:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/draw_in_different_abstraction_level-ea6afa4275643796040b1a9ab1caa11c.png"},41986:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/draw_in_the_same_abstraction_level-e50d7ec864441ab1ac2a64ccdcde936f.png"},56349:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/extract_method_example1-737a8c695354b7666684322043e76cdf.png"},10587:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/extract_method_example2-b16a3a24d5d3f6785de546afc1e07691.png"},106:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/extract_method_example3-1e0cd538840465c0532fb93f603f3e95.png"},54841:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/extract_method_example4-9a26b38b9a68b4aa3274d2b329de5212.png"},58068:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/extract_method_process-be0ca08a73f2a0912d5a483e3098c259.png"},32695:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/focus_on_the_structure-95ec1f040cacfb48f256da72ef4728d4.png"},80082:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/four_line_method-3dd69eaa9e4ce36d3c8bd308ca9fa77a.png"},7389:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/handleInputs_function_refactor1-10dd55f548bc8842b87dcb0342acfe35.png"},76522:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/if_should_be_a_isolate_function-3d8fa4c95bdfa8b490a876091409ee3d.png"},26860:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/original_draw_function-7e67e33a2e67222c93094a8445133723.png"},61091:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/uneven_responsibilities-b4b55ee46c6290f30889bfcd68df6905.png"},18523:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/updateMap_with_isolate_if-63efa8fd8283ab6609fd598342b417ca.png"},91561:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/updateMap_with_non_isolate_if-bc3b148d11d83c46ca084588d5738e0e.png"},3386:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/update_function_before_refactor-4a5835e1f90e2eaa94921fc461dc82b3.png"},44562:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/update_function_refactor1-ad00a26256ca1fa69315ab13851a914f.png"}}]);