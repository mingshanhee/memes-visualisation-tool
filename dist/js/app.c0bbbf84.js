(function(t){function e(e){for(var i,o,r=e[0],l=e[1],c=e[2],u=0,h=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(h.length)h.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,r=1;r<n.length;r++){var l=n[r];0!==a[l]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},a={app:0},s=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/memes-visualisation-tool/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0e9b":function(t,e,n){},1146:function(t,e,n){t.exports=n.p+"img/self-attention-text-2-text.ee902d63.png"},1354:function(t,e,n){},2907:function(t,e,n){"use strict";n("f852")},"3be6":function(t,e,n){"use strict";n("1354")},4425:function(t,e,n){t.exports=n.p+"img/attention-formulation.34916441.png"},"53a7":function(t,e,n){"use strict";n("dfd2")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23");function a(t,e,n,a,s,o){var r=Object(i["l"])("Attention"),l=Object(i["l"])("Demo"),c=Object(i["l"])("Remarks");return Object(i["h"])(),Object(i["c"])("div",null,[Object(i["f"])(r),Object(i["f"])(l),Object(i["f"])(c)])}var s=n("70cd"),o=n.n(s),r=n("b73e"),l=n.n(r),c=n("4425"),d=n.n(c),u=n("fdc6"),h=n.n(u),m=n("1146"),f=n.n(m),p=n("aee3"),b=n.n(p),g={class:"card border-dark m-4 p-1"},v=Object(i["e"])('<div class="card-header"> Introduction &amp; Motivation (Attention Is All You Need?) </div><div class="card-body"><span class="fs-5"><b>Introduction</b></span><div class="row align-items-center mt-2 mb-5"><div class="col-sm-6 fs-5" style="text-align:left;height:100%;"><span> In 2017, Google AI brought a storm to the Natural Language Processing (NLP) research field by introducing a new kind of deep learning architecture - &quot;Transformers&quot;. <br><br> In the highly-cited paper (&quot;Attention Is All You Need&quot;), Google AI detailed the <i>mathematical concepts</i> which drive this one-of-a-kind monster and make it so powerful for learning non-linearity relationships. <br><br> The proposed <b>transformer</b> architecture uses <i>multiple layers</i> of <i>self-attention mechanisms</i> (&quot;Multi-Head Attention&quot;). The self-attention mechanism allows researchers to draw some insights into the models&#39; learnt behavior. </span></div><div class="col-sm-6 fs-6"><img style="max-width:100%;" src="'+o.a+'"><br><span><i>From “Attention is all you need” paper by Vaswani, et al., 2017</i></span></div></div><div class="row align-items-center mb-3"><div class="col-sm-6"><img style="max-width:100%;" src="'+l.a+'"><br><span class="fs-6"><i>From “Attention is all you need” paper by Vaswani, et al., 2017. <br>Scaled dot-product attention formula.</i></span><br><br><img style="max-width:100%;" src="'+d.a+'"><br><span><i>From “Attention is all you need” paper by Vaswani, et al., 2017</i></span></div><div class="col-sm-6 fs-5" style="text-align:left;height:100%;"><span> A self-attention module takes in <i>n</i> inputs and returns <i>n</i> outputs. In essense, it is outputing a latent vector (representation) of the corresponding input features. The self-attention mechanism allows the input to interact with each other (&quot;self&quot;) and find out who they should pay attention to (&quot;attention&quot;). <i>This part is obtained from https://towardsdatascience.com/illustrated-self-attention-2d627e33b20a.</i></span></div></div><hr><span class="fs-5"><b>Existing Text2Text Visualisation</b></span><div class="row align-items-center mt-2 mb-5"><div class="col-sm-6 fs-5" style="text-align:left;height:100%;"><span> A popular visualisation of the self-attention mechanism is the use of <b>heatmaps</b>, where the brightness of an area represents the strength of the attention activations for a word pair. <br><br></span></div><div class="col-sm-6 fs-6"><img style="max-width:100%;" src="'+h.a+'"></div></div><div class="row align-items-center mb-3"><div class="col-sm-6"><img style="max-width:100%;" src="'+f.a+'"></div><div class="col-sm-6 fs-5" style="text-align:left;height:100%;"><span> Another popular visualisation of the self-attention mechanism can be seen on the figure to the right. The visualisation can be seen as a composition of two subfigures (left and right). <br><br> Starting from the right figure, this is a <b>static node and edge graph</b> where a node represents a word. As for the edges, it represents the strength of the attention that each word pays attention to. <br><br> Whereas for the left figure, it is an <b>interactive node and edge graph</b> for researchers to explore the attention connections of each node carefully. </span></div></div><hr><span class="fs-5"><b>Motivation</b></span><div class="mt-4 mb-2"><img width="75%" src="'+b.a+'"><br><br><span class="fs-6">From “VisualBERT: a simple and performant baseline for vision and language” paper by Vaswani, et al., 2017.</span><br><br></div><div class="mb-5" style="text-align:left;"><span class="fs-5"> Recently, there is rapid interests in adapting the <b>transformer</b> architecture for <b>visual-linguistic models</b>. However, there is a lack of tools and studies on the multimodal model&#39;s behaviors. Specifically, we are interested in learning the impact of these multimodal models on social tasks such as <b>multimodal hate speech detection</b>. <ul><li> Does the multimodal models learn the correct visual-text alignments/groundings? Specifically, we are looking at unique visual-text alignments in hateful memes detection (i.e. slurs alignments/groundings). </li><li> When comparing across the various multimodal models, can we discern the factors why model A outperforms model B (i.e. learns better visual-text alignments)? If not, could it be due to some inherit bias learnt? </li></ul></span></div></div>',2),j=[v];function y(t,e,n,a,s,o){return Object(i["h"])(),Object(i["c"])("div",g,j)}var O={name:"Attention"},x=n("6b0d"),_=n.n(x);const w=_()(O,[["render",y]]);var k=w,I=function(t){return Object(i["j"])("data-v-6407d296"),t=t(),Object(i["i"])(),t},A={class:"card border-dark m-4 p-1"},S=I((function(){return Object(i["d"])("div",{class:"card-header"},"Visualisation Demonstrations",-1)})),B={class:"card-body"},M=I((function(){return Object(i["d"])("hr",null,null,-1)})),T={class:"row mt-2"},$={class:"col-sm-2",style:{"border-right":"1px solid #cbcfd4"}},H={class:"col-sm-10"},P=I((function(){return Object(i["d"])("b",null,"Cross-Modality Visualisation",-1)})),q={class:"row"},E={class:"col-sm"},N={class:"col-sm"},V={class:"col-sm"};function C(t,e,n,a,s,o){var r=Object(i["l"])("ModelSelector"),l=Object(i["l"])("MemeSelector"),c=Object(i["l"])("Image"),d=Object(i["l"])("Heatmap");return Object(i["h"])(),Object(i["c"])("div",A,[S,Object(i["d"])("div",B,[Object(i["f"])(r),M,Object(i["d"])("div",T,[Object(i["d"])("div",$,[Object(i["f"])(l)]),Object(i["d"])("div",H,[P,Object(i["f"])(c,{ref:"image",img_id:t.img_id,img_filepath:t.img_filepath,class:"mt-3 mb-3"},null,8,["img_id","img_filepath"]),Object(i["d"])("div",q,[Object(i["d"])("div",E,[(Object(i["h"])(),Object(i["c"])(i["a"],null,Object(i["k"])([0],(function(e){return Object(i["f"])(d,{key:e,ref_for:!0,ref:"heatmap_"+e,layer:t.layer,head:e,img_id:t.img_id},null,8,["layer","head","img_id"])})),64))]),Object(i["d"])("div",N,[(Object(i["h"])(),Object(i["c"])(i["a"],null,Object(i["k"])([1],(function(e){return Object(i["f"])(d,{key:e,ref_for:!0,ref:"heatmap_"+e,layer:t.layer,head:e,img_id:t.img_id},null,8,["layer","head","img_id"])})),64))]),Object(i["d"])("div",V,[(Object(i["h"])(),Object(i["c"])(i["a"],null,Object(i["k"])([2],(function(e){return Object(i["f"])(d,{key:e,ref_for:!0,ref:"heatmap_"+e,layer:t.layer,head:e,img_id:t.img_id},null,8,["layer","head","img_id"])})),64))])])])])])])}var R={class:"canvas-wrapper"},D={ref:"imageCanvas",class:"canvas-overlay"};function W(t,e,n,a,s,o){return Object(i["h"])(),Object(i["c"])("div",null,[Object(i["d"])("div",R,[Object(i["d"])("canvas",D,null,512)])])}n("a9e3"),n("4de4"),n("d3b7");var z={name:"Image",props:{img_id:Number,img_filepath:String},data:function(){return{sample:7528,colors:["#a71e4a","#7d3a97","#483290","#2a92c6","#63b247","#cede35","#f3ee3c","#fabb18","#f35524"]}},computed:{canvas:function(){return this.$refs["imageCanvas"]},ctx:function(){return this.canvas.getContext("2d")},item:function(){var t=this;return this.infos.filter((function(e){return e.image_id==t.img_id}))[0]}},mounted:function(){var t=this;console.log(Object({NODE_ENV:"production",BASE_URL:"/memes-visualisation-tool/"})),fetch("".concat("/memes-visualisation-tool/","sample_infos.json")).then((function(t){return t.json()})).then((function(e){t.infos=e,t.drawImage(t.img_filepath)}),(function(t){console.log("Error loading json:",t)}))},methods:{update:function(){var t=this;fetch("".concat("/memes-visualisation-tool/","sample_infos.json")).then((function(t){return t.json()})).then((function(e){t.infos=e,t.drawImage(t.img_filepath)}),(function(t){console.log("Error loading json:",t)}))},drawImage:function(t){var e=this;console.log(t);var n=new Image;n.src=t,n.onload=function(){e.canvas.height=n.height,e.canvas.width=n.width,e.ctx.drawImage(n,0,0),console.log("done!!",t),e.initial_state=n}},displayBoundingBox:function(t){console.log(t);for(var e=0;e<t.length;e++){var n=t[e],i=this.item["bbox"][n],a=parseInt(i[0]),s=parseInt(i[1]),o=parseInt(i[2])-a,r=parseInt(i[3])-s;this.ctx.beginPath(),this.ctx.strokeStyle=this.colors[e],this.ctx.globalAlpha=.15,this.ctx.lineWidth=3,this.ctx.rect(a,s,o,r),this.ctx.stroke()}this.ctx.globalAlpha=1},highlightBoundingBox:function(t,e){this.ctx.drawImage(this.initial_state,0,0);for(var n=0;n<t.length;n++){var i=t[n],a=this.item["bbox"][i];if(i==e){var s=parseInt(a[0]),o=parseInt(a[1]),r=parseInt(a[2])-s,l=parseInt(a[3])-o;this.ctx.beginPath(),this.ctx.strokeStyle=this.colors[n],i==e?(this.ctx.globalAlpha=1,this.ctx.lineWidth=5):(this.ctx.globalAlpha=.3,this.ctx.lineWidth=3),this.ctx.rect(s,o,r,l),this.ctx.stroke()}}},resetBoundingBox:function(){this.ctx.drawImage(this.initial_state,0,0)}}};n("3be6");const F=_()(z,[["render",W],["__scopeId","data-v-febe2850"]]);var L=F,G={ref:"heatmap"};function J(t,e,n,a,s,o){return Object(i["h"])(),Object(i["c"])("div",G,null,512)}n("99af"),n("a630"),n("3ca3"),n("6062"),n("ddb0"),n("d81d"),n("a15b");var Y=n("5698"),U={name:"Heatmap",props:{img_id:Number,layer:Number,head:Number},data:function(){return{margin:{top:20,right:10,bottom:30,left:60}}},computed:{width:function(){return 350-this.margin.left-this.margin.right},height:function(){return 410-this.margin.top-this.margin.bottom},item:function(){var t=this;return this.attentions.filter((function(e){return e.image_id==t.img_id}))[0]}},mounted:function(){this.svg=Y["e"](this.$refs.heatmap).append("svg").attr("width",this.width).attr("height",this.height).append("g").attr("transform","translate(".concat(this.margin.left,", ").concat(this.margin.top,")")),this.svg.append("text").attr("x",this.width/2/1.5).attr("y",this.height-30).attr("text-anchor","middle").style("font-size","16px").style("font-weight","bold").text("Layer ".concat(this.layer+1," Head ").concat(this.head+1)),this.fetchHeatmap()},methods:{update:function(){this.svg.selectAll("*").remove(),this.fetchHeatmap()},fetchHeatmap:function(){var t=this;fetch("".concat("/memes-visualisation-tool/","sample_attentions.json")).then((function(t){return t.json()})).then((function(e){t.attentions=e,t.displayHeatmap(t.layer,t.head),t.$parent.displayBoundingBox(t.item["x_labels"])}),(function(t){console.log("Error loading json:",t)}))},formatHeatmap:function(t,e,n){for(var i=[],a=0;a<t.length;a++)for(var s=t[a],o=0;o<e.length;o++){var r=e[o],l={group:s,variable:r,value:n[a][o]};i.push(l)}return i},displayHeatmap:function(t,e){var n=this;this.data=this.formatHeatmap(this.item["x_labels"],this.item["y_labels"],this.item["scores"][t][e]);var i=Array.from(new Set(this.data.map((function(t){return t.group})))),a=Array.from(new Set(this.data.map((function(t){return t.variable})))),s=Y["c"]().range([0,this.width-60]).domain(i).padding(.05),o=this.svg.append("g").style("font-size",15).attr("transform","translate(0, ".concat(this.width,")")).call(Y["a"](s).tickSize(0)),r=Y["c"]().range([this.width,0]).domain(a).padding(.05),l=this.svg.append("g").style("font-size",15).call(Y["b"](r).tickSize(0));o.select(".domain").remove(),l.select(".domain").remove();var c=Y["d"]().domain([0,1]).range(["white","blue"]),d=function(t){var e=t.target;Y["e"](e).style("stroke","black").style("opacity",1);var i=Y["e"](e).attr("x-label");o.selectAll(".tick").each((function(t){i==t?(Y["e"](e).selectAll("text").style("fill","red"),n.$parent.mouseenter(n.item["x_labels"],t)):Y["e"](e).selectAll("text").style("fill","black")}));var a=Y["e"](e).attr("y-label");l.selectAll(".tick").each((function(t){a==t?Y["e"](e).selectAll("text").style("fill","red"):Y["e"](e).selectAll("text").style("fill","black")}))},u=function(t){Y["e"](t.target).style("stroke","none").style("opacity",.8),Y["f"]("text").style("fill","black"),n.$parent.mouseleave()};this.svg.selectAll().data(this.data,(function(t){return t.group+":"+t.variable})).join("rect").attr("x",(function(t){return s(t.group)})).attr("y",(function(t){return r(t.variable)})).attr("x-label",(function(t){return t.group})).attr("y-label",(function(t){return t.variable})).attr("rx",4).attr("ry",4).attr("width",s.bandwidth()).attr("height",r.bandwidth()).style("fill",(function(t){return c(t.value)})).style("stroke-width",4).style("stroke","none").style("opacity",.8).on("mouseover",d).on("mouseleave",u)}}};n("d22f");const K=_()(U,[["render",J],["__scopeId","data-v-d1435a62"]]);var Q=K,X=function(t){return Object(i["j"])("data-v-6de5b727"),t=t(),Object(i["i"])(),t},Z=X((function(){return Object(i["d"])("div",null,[Object(i["d"])("b",null,"Meme Selection")],-1)})),tt=["src"],et={key:0,type:"button",class:"btn btn-info m-1"},nt=["onClick"];function it(t,e,n,a,s,o){return Object(i["h"])(),Object(i["c"])("div",null,[Z,(Object(i["h"])(!0),Object(i["c"])(i["a"],null,Object(i["k"])(t.samples,(function(e,n){return Object(i["h"])(),Object(i["c"])("div",{key:e,class:"mt-4 mb-4"},[Object(i["d"])("img",{class:"thumbnail",src:t.sample_filepaths[n]},null,8,tt),n==t.selected_idx?(Object(i["h"])(),Object(i["c"])("button",et,Object(i["m"])(e),1)):(Object(i["h"])(),Object(i["c"])("button",{key:1,type:"button",class:"btn btn-light m-1",onClick:function(t){return o.onSelect(n)}},Object(i["m"])(e)+" ("+Object(i["m"])(t.similarities[t.samples[t.selected_idx]][e])+") ",9,nt))])})),128))])}var at={name:"MemeSelector",components:{},data:function(){return{publicPath:"/memes-visualisation-tool/",sample_filepaths:["".concat("/memes-visualisation-tool/","images/07528.png"),"".concat("/memes-visualisation-tool/","images/46518.png"),"".concat("/memes-visualisation-tool/","images/80597.png"),"".concat("/memes-visualisation-tool/","images/84762.png")],samples:[7528,46518,80597,84762],similarities:{7528:{46518:.124,80597:.1,84762:.127},46518:{7528:.124,80597:.07,84762:.117},80597:{46518:.07,7528:.1,84762:.084},84762:{46518:.117,80597:.084,7528:.127}},selected_idx:0}},computed:{selected_sample:function(){return this.samples[this.selected_idx]},selected_sample_filepath:function(){return this.sample_filepaths[this.selected_idx]}},methods:{onSelect:function(t){this.selected_idx=t,this.$parent.showMeme(this.samples[this.selected_idx],this.sample_filepaths[this.selected_idx])}}};n("a7ba");const st=_()(at,[["render",it],["__scopeId","data-v-6de5b727"]]);var ot=st,rt=function(t){return Object(i["j"])("data-v-a041ced2"),t=t(),Object(i["i"])(),t},lt={class:"mt-2 mb-2"},ct=rt((function(){return Object(i["d"])("div",null,[Object(i["d"])("b",null,"Model Selector")],-1)})),dt=["onClick"];function ut(t,e,n,a,s,o){return Object(i["h"])(),Object(i["c"])("div",lt,[ct,Object(i["d"])("div",null,[(Object(i["h"])(!0),Object(i["c"])(i["a"],null,Object(i["k"])(t.models,(function(e,n){return Object(i["h"])(),Object(i["c"])("button",{key:e,class:Object(i["g"])([{"btn-light":n!=t.selected_idx,"btn-info":n==t.selected_idx},"btn m-1 mt-3 mb-3"]),type:"button",onClick:function(t){return o.onSelect(n)}},Object(i["m"])(e),11,dt)})),128))])])}var ht={name:"ModelSelector",components:{},data:function(){return{models:["VisualBERT","VilBERT"],selected_idx:0}},computed:{selected_model:function(){return this.models[this.selected_idx]}},methods:{onSelect:function(t){this.selected_idx=t,console.log(t)}}};n("53a7");const mt=_()(ht,[["render",ut],["__scopeId","data-v-a041ced2"]]);var ft=mt,pt={name:"Demo",components:{Image:L,Heatmap:Q,MemeSelector:ot,ModelSelector:ft},data:function(){return{layer:3,img_id:7528,img_filepath:"/images/07528.png"}},methods:{mouseenter:function(t,e){this.$refs.image.highlightBoundingBox(t,e)},mouseleave:function(){this.$refs.image.resetBoundingBox()},displayBoundingBox:function(t){setTimeout(this.$refs.image.displayBoundingBox(t),6e3)},showMeme:function(t,e){console.log(t,e),console.log(this.$refs),this.img_id=t,this.img_filepath=e,this.$refs.image.update(),this.$refs.heatmap_0[0].update(),this.$refs.heatmap_1[0].update(),this.$refs.heatmap_2[0].update()}}};n("dceb");const bt=_()(pt,[["render",C],["__scopeId","data-v-6407d296"]]);var gt=bt,vt={class:"card border-dark m-4 p-1"},jt=Object(i["d"])("div",{class:"card-header"},"Work-In-Progress (No time to finish ...)",-1),yt=Object(i["d"])("div",{class:"card-body"},[Object(i["d"])("div",{class:"mb-5",style:{"text-align":"left"}},[Object(i["d"])("span",{class:"fs-5"},[Object(i["d"])("ul",null,[Object(i["d"])("li",null," Increase the number of models for comparisons (should includes all BERT-based models) "),Object(i["d"])("li",null," Increase the number of similarity measures/metrics for grouping memes together ")])])])],-1),Ot=[jt,yt];function xt(t,e,n,a,s,o){return Object(i["h"])(),Object(i["c"])("div",vt,Ot)}var _t={name:"Attention"};const wt=_()(_t,[["render",xt]]);var kt=wt,It={name:"App",components:{Demo:gt,Attention:k,Remarks:kt}};n("2907");const At=_()(It,[["render",a]]);var St=At;Object(i["b"])(St).mount("#app")},"70cd":function(t,e,n){t.exports=n.p+"img/transformer-architecture.2504552c.png"},a7ba:function(t,e,n){"use strict";n("f350")},aee3:function(t,e,n){t.exports=n.p+"img/visualbert-architecture.dd6cd049.png"},b73e:function(t,e,n){t.exports=n.p+"img/attention-detailed-view.90007889.png"},d22f:function(t,e,n){"use strict";n("0e9b")},d8a6:function(t,e,n){},dceb:function(t,e,n){"use strict";n("d8a6")},dfd2:function(t,e,n){},f350:function(t,e,n){},f852:function(t,e,n){},fdc6:function(t,e,n){t.exports=n.p+"img/self-attention-text-2-text-matrix.5cdaac41.jpeg"}});
//# sourceMappingURL=app.c0bbbf84.js.map