(function(t){function e(e){for(var s,o,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)o=r[d],i[o]&&p.push(i[o][0]),i[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(s=!1)}s&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},i={app:0},a=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2f47":function(t,e,n){},"492f":function(t,e,n){"use strict";var s=n("2f47"),i=n.n(s);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var s=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav",{staticClass:"navbar navbar-expand-sm bg-dark navbar-dark sticky-top"},[n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("庭庭作品集")]),n("ul",{staticClass:"navbar-nav"},[n("li",{staticClass:"nav-item"},[n("a",{staticClass:"navLink",class:{link_focus:t.displayScssColorCardTool},attrs:{href:"#"},on:{click:function(e){t.nextWork("ScssColorCardTool")}}},[t._v("Sass變數色卡網頁工具")])]),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"navLink",class:{link_focus:t.displayChangePicture},attrs:{href:"#"},on:{click:function(e){t.nextWork("ChangePicture")}}},[t._v("圖片輪播")])]),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"navLink",class:{link_focus:t.displayTimeLine},attrs:{href:"#"},on:{click:function(e){t.nextWork("TimeLine")}}},[t._v("時間年表")])])])]),n("ScssColorCardTool",{directives:[{name:"show",rawName:"v-show",value:t.displayScssColorCardTool,expression:"displayScssColorCardTool"}]}),n("ChangePicture",{directives:[{name:"show",rawName:"v-show",value:t.displayChangePicture,expression:"displayChangePicture"}]}),n("TimeLine",{directives:[{name:"show",rawName:"v-show",value:t.displayTimeLine,expression:"displayTimeLine"}]})],1)},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ScssColorCardTool"},[n("div",{staticClass:"container",attrs:{id:"app"}},[n("h1",[t._v("Sass 變數色卡網頁工具")]),n("hr"),n("table",{staticClass:"row",attrs:{width:"100%"}},[n("td",{attrs:{width:"25%"}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.colorSetting,expression:"colorSetting"}],domProps:{value:t.colorSetting},on:{input:function(e){e.target.composing||(t.colorSetting=e.target.value)}}})]),n("td",{attrs:{width:"70%"}},[n("ul",{staticClass:"row"},t._l(t.colorCards,function(e){return n("li",{staticClass:"col-sm-4"},[n("table",{staticClass:"colorCards",attrs:{width:"100%"}},[n("tr",[n("td",[n("div",{staticClass:"block",style:e.colorCSS}),n("div",{staticClass:"info"},[n("div",{staticClass:"name"},[t._v(t._s(e.name))]),n("div",{staticClass:"code"},[t._v(t._s(e.color))])])])])])])}),0)])]),n("a",{attrs:{href:"http://www.ifreesite.com/color/"}},[t._v("> 色碼查詢")])])])},r=[],c=(n("28a5"),{name:"ScssColorCardTool",props:{msg:String},data:function(){return{colorSetting:"color_pink: #ffd9ec\ncolor_purple: #dcb5ff\ncolor_red: #ffb5b5\ncolor_blue: #aaaaff\ncolor_green: #93ff93"}},computed:{colorCards:function(){for(var t=[],e=this.colorSetting.split("\n"),n=0;n<e.length;n+=1){var s=e[n].split(":")[0],i=e[n].split(" ")[1];-1!==s.indexOf("color")&&t.push({name:s,color:i,colorCSS:{"background-color":i}})}return t}}}),l=c,u=(n("9e5d"),n("2877")),d=Object(u["a"])(l,o,r,!1,null,"667602d5",null);d.options.__file="index.vue";var p=d.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"changePicture"},[n("div",{staticClass:"postArea"},[n("div",{staticClass:"posts",style:t.computedLeft},t._l(t.works,function(e,s){return n("div",{staticClass:"postBox",class:{curItem:s==t.nowIndex}},[n("div",{staticClass:"cover",style:t.bgCSS(e.cover)},[n("div",{staticClass:"infos"},[n("h1",[t._v(t._s(e.title))]),n("h5",[t._v(t._s(e.description))])])])])}),0)]),n("div",{staticClass:"controlLeft",on:{click:function(e){t.delta(-1)}}},[n("i",{staticClass:"fa fa-angle-left"})]),n("div",{staticClass:"controlRight"},[n("i",{staticClass:"fa fa-angle-right",on:{click:function(e){t.delta(1)}}})])])},v=[],h=[{title:"童年",description:"回不去的時光",cover:"https://picsum.photos/800/600?image=820"},{title:"陽光",description:"永遠要往光明的地方看",cover:"https://picsum.photos/800/600?image=815"},{title:"Take a nap",description:"休息是為了走更長遠的路",cover:"https://picsum.photos/800/600?image=804"},{title:"青春",description:"青春是盛開的美麗花朵",cover:"https://picsum.photos/800/600?image=348"},{title:"風景",description:"站在高處，總是能看見不一樣的風景",cover:"https://picsum.photos/800/600?image=773"},{title:"溫柔",description:"我很醜，可是我很溫柔",cover:"https://picsum.photos/800/600?image=1062"},{title:"避風港",description:"家是最溫暖的避風港",cover:"https://picsum.photos/800/600?image=870"}],m=h,g={name:"changePicture",props:{msg:String},data:function(){return{nowIndex:0,works:m,span:930}},computed:{computedLeft:function(){var t={left:"".concat(-this.nowIndex*this.span,"px")};return t}},methods:{delta:function(t){this.nowIndex=(this.nowIndex+t+this.works.length)%this.works.length},bgCSS:function(t){return{"background-image":"url(".concat(t,")")}}}},C=g,_=(n("492f"),Object(u["a"])(C,f,v,!1,null,"307d1970",null));_.options.__file="index.vue";var y=_.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"timeLine"},[n("div",{attrs:{id:"app"}},[n("button",{staticClass:"initial",on:{click:t.initial}},[t._v("插入資料")]),n("transition-group",{staticClass:"timeLine",attrs:{tag:"ul",name:"fade"}},t._l(t.logs,function(e,s){return n("li",{key:e,staticClass:"dialogWrapper",style:{"transition-delay":s/2+"s"}},[n("div",{staticClass:"dialog"},[n("h3",{staticClass:"year"},[n("div",{staticClass:"decorationBar"}),t._v("\r\n            "+t._s(e.year)+"\r\n          ")]),n("ul",{staticClass:"content"},t._l(e.content,function(e){return n("li",[t._v("\r\n              "+t._s(e.month)+" 月 "+t._s(e.tag)+"\r\n            ")])}),0)])])}),0)],1)])},w=[],S={name:"timeLine",props:{msg:String},data:function(){return{logs:[]}},methods:{initial:function(){this.logs=[],this.logs=[{year:2014,content:[{month:9,tag:"在緣圈相遇"},{month:12,tag:"聖誕傳情"}]},{year:2015,content:[{month:2,tag:"第一次見面"},{month:7,tag:"第一次去虎尾"}]},{year:2016,content:[{month:9,tag:"開始同居"},{month:11,tag:"豐兒當兵"}]},{year:2017,content:[{month:6,tag:"庭兒先回北部等豐兒"}]},{year:2018,content:[{month:4,tag:"庭兒決定跟隨豐兒的腳步，擔任前端工程師"}]}]}}},k=S,x=(n("6e7f"),Object(u["a"])(k,b,w,!1,null,"6cec686b",null));x.options.__file="index.vue";var T=x.exports,L={name:"app",components:{ScssColorCardTool:p,ChangePicture:y,TimeLine:T},data:function(){return{displayScssColorCardTool:!0,displayChangePicture:!1,displayTimeLine:!1}},methods:{nextWork:function(t){this.resetDisplay(),this["display".concat(t)]=!0},resetDisplay:function(){this.displayScssColorCardTool=!1,this.displayChangePicture=!1,this.displayTimeLine=!1}}},P=L,O=(n("5c0b"),Object(u["a"])(P,i,a,!1,null,null,null));O.options.__file="App.vue";var j=O.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(j)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var s=n("5e27"),i=n.n(s);i.a},"5e27":function(t,e,n){},"6e7f":function(t,e,n){"use strict";var s=n("7d12"),i=n.n(s);i.a},"7d12":function(t,e,n){},"9e5d":function(t,e,n){"use strict";var s=n("cea2"),i=n.n(s);i.a},cea2:function(t,e,n){}});
//# sourceMappingURL=app.1774ac21.js.map