goog.provide('athens.devcards.all_pages');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.devcards.buttons');
goog.require('athens.devcards.db');
goog.require('athens.lib.dom.attributes');
goog.require('athens.router');
goog.require('athens.style');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
goog.require('devcards.core');
goog.require('garden.core');
goog.require('garden.selectors');
goog.require('posh.reagent');
goog.require('stylefy.core');
goog.require('tick.alpha.api');
goog.require('tick.locale_en_us');
athens.devcards.all_pages.table_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left",new cljs.core.Keyword(null,"border-collapse","border-collapse",919100239),"collapse",new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"th-date","th-date",-1579394172),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right"], null),new cljs.core.Keyword(null,"td-title","td-title",-2048420439),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword(null,"width","width",-384071477),"15vw",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"10em",new cljs.core.Keyword(null,"word-break","word-break",-407281356),"break-word",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"21px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"27px"], null),new cljs.core.Keyword(null,"body-preview","body-preview",-543779304),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"wrap",new cljs.core.Keyword(null,"word-break","word-break",-407281356),"break-word",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"text-overflow","text-overflow",-1022366814),"ellipsis",new cljs.core.Keyword(null,"display","display",242065432),"-webkit-box",new cljs.core.Keyword(null,"-webkit-line-clamp","-webkit-line-clamp",438845631),"3",new cljs.core.Keyword(null,"-webkit-box-orient","-webkit-box-orient",-2043252050),"vertical"], null),new cljs.core.Keyword(null,"td-date","td-date",-1089366042),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right",new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity-high","opacity-high",1902226703).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"9em"], null)], null),new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527)))].join('')], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527),new cljs.core.Keyword(null,"opacity-lower","opacity-lower",-521611975)),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__55552 = (garden.selectors.first_child.cljs$core$IFn$_invoke$arity$0 ? garden.selectors.first_child.cljs$core$IFn$_invoke$arity$0() : garden.selectors.first_child.call(null));
return (garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1 ? garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1(G__55552) : garden.selectors._AMPERSAND_.call(null,G__55552));
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px 0 0 8px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"-16px 0 hsla(30, 11.11%, 93%, 0.1)"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__55553 = (garden.selectors.last_child.cljs$core$IFn$_invoke$arity$0 ? garden.selectors.last_child.cljs$core$IFn$_invoke$arity$0() : garden.selectors.last_child.call(null));
return (garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1 ? garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1(G__55553) : garden.selectors._AMPERSAND_.call(null,G__55553));
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"0 8px 8px 0",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"16px 0 hsla(30, 11.11%, 93%, 0.1)"], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"8px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity-med","opacity-med",1700530190).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES)], null)], null)], null)], null)], null);
athens.devcards.all_pages.date_string = (function athens$devcards$all_pages$date_string(x){
if((x < (1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"(unknown date)"], null);
} else {
return clojure.string.replace(clojure.string.replace(tick.alpha.api.format.cljs$core$IFn$_invoke$arity$2(tick.alpha.api.formatter.cljs$core$IFn$_invoke$arity$1("LLLL MM, yyyy h':'ma"),tick.alpha.api.date_time.cljs$core$IFn$_invoke$arity$1(tick.alpha.api.instant.cljs$core$IFn$_invoke$arity$1((new Date(x))))),/AM/,"am"),/PM/,"pm");
}
});
athens.devcards.all_pages.table = (function athens$devcards$all_pages$table(){
var page_eids = (function (){var G__55557 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null)], null);
var G__55558 = athens.db.dsdb;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$2(G__55557,G__55558) : posh.reagent.q.call(null,G__55557,G__55558));
})();
var pages = (function (){var G__55559 = athens.db.dsdb;
var G__55560 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","string","block/string",-2066596447)], null),new cljs.core.Keyword(null,"limit","limit",-1355822363),(5)], null)], null);
var G__55561 = cljs.core.deref(page_eids);
return (posh.reagent.pull_many.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull_many.cljs$core$IFn$_invoke$arity$3(G__55559,G__55560,G__55561) : posh.reagent.pull_many.call(null,G__55559,G__55560,G__55561));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.all_pages.table_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Title"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Body"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.all_pages.table_style,new cljs.core.Keyword(null,"th-date","th-date",-1579394172)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Modified"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.all_pages.table_style,new cljs.core.Keyword(null,"th-date","th-date",-1579394172)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Created"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$all_pages$table_$_iter__55562(s__55563){
return (new cljs.core.LazySeq(null,(function (){
var s__55563__$1 = s__55563;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55563__$1);
if(temp__5735__auto__){
var s__55563__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55563__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__55563__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__55565 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__55564 = (0);
while(true){
if((i__55564 < size__4581__auto__)){
var map__55568 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__55564);
var map__55568__$1 = (((((!((map__55568 == null))))?(((((map__55568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55568):map__55568);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55568__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55568__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var modified = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55568__$1,new cljs.core.Keyword("edit","time","edit/time",1384867476));
var created = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55568__$1,new cljs.core.Keyword("create","time","create/time",-1563077754));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55568__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
cljs.core.chunk_append(b__55565,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),athens.lib.dom.attributes.with_attributes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.all_pages.table_style,new cljs.core.Keyword(null,"td-title","td-title",-2048420439)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55564,map__55568,map__55568__$1,uid,title,modified,created,children,c__4580__auto__,size__4581__auto__,b__55565,s__55563__$2,temp__5735__auto__,page_eids,pages){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__55564,map__55568,map__55568__$1,uid,title,modified,created,children,c__4580__auto__,size__4581__auto__,b__55565,s__55563__$2,temp__5735__auto__,page_eids,pages))
], null)], 0)),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.all_pages.table_style,new cljs.core.Keyword(null,"body-preview","body-preview",-543779304)),clojure.string.join.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__55564,map__55568,map__55568__$1,uid,title,modified,created,children,c__4580__auto__,size__4581__auto__,b__55565,s__55563__$2,temp__5735__auto__,page_eids,pages){
return (function (p1__55555_SHARP_){
return ["\u2022 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","string","block/string",-2066596447).cljs$core$IFn$_invoke$arity$1(p1__55555_SHARP_))].join('');
});})(i__55564,map__55568,map__55568__$1,uid,title,modified,created,children,c__4580__auto__,size__4581__auto__,b__55565,s__55563__$2,temp__5735__auto__,page_eids,pages))
,children)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.all_pages.table_style,new cljs.core.Keyword(null,"td-date","td-date",-1089366042)),athens.devcards.all_pages.date_string(modified)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.all_pages.table_style,new cljs.core.Keyword(null,"td-date","td-date",-1089366042)),athens.devcards.all_pages.date_string(created)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null)));

var G__55637 = (i__55564 + (1));
i__55564 = G__55637;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55565),athens$devcards$all_pages$table_$_iter__55562(cljs.core.chunk_rest(s__55563__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55565),null);
}
} else {
var map__55573 = cljs.core.first(s__55563__$2);
var map__55573__$1 = (((((!((map__55573 == null))))?(((((map__55573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55573):map__55573);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55573__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55573__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var modified = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55573__$1,new cljs.core.Keyword("edit","time","edit/time",1384867476));
var created = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55573__$1,new cljs.core.Keyword("create","time","create/time",-1563077754));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55573__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),athens.lib.dom.attributes.with_attributes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.all_pages.table_style,new cljs.core.Keyword(null,"td-title","td-title",-2048420439)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__55573,map__55573__$1,uid,title,modified,created,children,s__55563__$2,temp__5735__auto__,page_eids,pages){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(map__55573,map__55573__$1,uid,title,modified,created,children,s__55563__$2,temp__5735__auto__,page_eids,pages))
], null)], 0)),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.all_pages.table_style,new cljs.core.Keyword(null,"body-preview","body-preview",-543779304)),clojure.string.join.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__55573,map__55573__$1,uid,title,modified,created,children,s__55563__$2,temp__5735__auto__,page_eids,pages){
return (function (p1__55555_SHARP_){
return ["\u2022 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","string","block/string",-2066596447).cljs$core$IFn$_invoke$arity$1(p1__55555_SHARP_))].join('');
});})(map__55573,map__55573__$1,uid,title,modified,created,children,s__55563__$2,temp__5735__auto__,page_eids,pages))
,children)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.all_pages.table_style,new cljs.core.Keyword(null,"td-date","td-date",-1089366042)),athens.devcards.all_pages.date_string(modified)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.all_pages.table_style,new cljs.core.Keyword(null,"td-date","td-date",-1089366042)),athens.devcards.all_pages.date_string(created)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null)),athens$devcards$all_pages$table_$_iter__55562(cljs.core.rest(s__55563__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.deref(pages));
})())], null)], null);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.all_pages","athens.devcards.all_pages",-311766867),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# All Pages \u2014 [#100](https://github.com/athensresearch/athens/issues/100)",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.all_pages","athens.devcards.all_pages",-311766867),new cljs.core.Keyword(null,"Import-Styles","Import-Styles",584958882)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Import-Styles",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.all_pages !== 'undefined') && (typeof athens.devcards.all_pages.t_athens$devcards$all_pages55576 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.all_pages.t_athens$devcards$all_pages55576 = (function (meta55577){
this.meta55577 = meta55577;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.all_pages.t_athens$devcards$all_pages55576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55578,meta55577__$1){
var self__ = this;
var _55578__$1 = this;
return (new athens.devcards.all_pages.t_athens$devcards$all_pages55576(meta55577__$1));
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages55576.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55578){
var self__ = this;
var _55578__$1 = this;
return self__.meta55577;
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages55576.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.all_pages.t_athens$devcards$all_pages55576.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__41676__auto__,devcard_opts__41677__auto__){
var self__ = this;
var this__41676__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__41677__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__41695__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".com-rigsomelight-devcards-container",".com-rigsomelight-devcards-container",392447819),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"90%"], null)], null)], 0))], null);
if(cljs.core.fn_QMARK_(v__41695__auto__)){
return (function (data_atom__41696__auto__,owner__41697__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__41695__auto__,data_atom__41696__auto__,owner__41697__auto__], null));
});
} else {
return reagent.core.as_element(v__41695__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__41677__auto__))], 0))], 0));
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages55576.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta55577","meta55577",442085455,null)], null);
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages55576.cljs$lang$type = true);

(athens.devcards.all_pages.t_athens$devcards$all_pages55576.cljs$lang$ctorStr = "athens.devcards.all-pages/t_athens$devcards$all_pages55576");

(athens.devcards.all_pages.t_athens$devcards$all_pages55576.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.all-pages/t_athens$devcards$all_pages55576");
}));

/**
 * Positional factory function for athens.devcards.all-pages/t_athens$devcards$all_pages55576.
 */
athens.devcards.all_pages.__GT_t_athens$devcards$all_pages55576 = (function athens$devcards$all_pages$__GT_t_athens$devcards$all_pages55576(meta55577){
return (new athens.devcards.all_pages.t_athens$devcards$all_pages55576(meta55577));
});

}

return (new athens.devcards.all_pages.t_athens$devcards$all_pages55576(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.all_pages","athens.devcards.all_pages",-311766867),new cljs.core.Keyword(null,"Create-Page","Create-Page",-1525048441)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Create-Page",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Page title increments by more than one each time because we create multiple entities (the child blocks).",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.all_pages !== 'undefined') && (typeof athens.devcards.all_pages.t_athens$devcards$all_pages55583 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.all_pages.t_athens$devcards$all_pages55583 = (function (meta55584){
this.meta55584 = meta55584;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.all_pages.t_athens$devcards$all_pages55583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55585,meta55584__$1){
var self__ = this;
var _55585__$1 = this;
return (new athens.devcards.all_pages.t_athens$devcards$all_pages55583(meta55584__$1));
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages55583.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55585){
var self__ = this;
var _55585__$1 = this;
return self__.meta55584;
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages55583.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.all_pages.t_athens$devcards$all_pages55583.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__41676__auto__,devcard_opts__41677__auto__){
var self__ = this;
var this__41676__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__41677__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__41695__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Create Page",new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
var n = new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.db.dsdb));
var G__55590 = athens.db.dsdb;
var G__55591 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("node","title","node/title",628940777),["Test Title ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword("block","uid","block/uid",-1623585167),["uid",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","string","block/string",-2066596447),"a block string",new cljs.core.Keyword("block","uid","block/uid",-1623585167),["uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join('')], null)], null),new cljs.core.Keyword("create","time","create/time",-1563077754),(new Date()).getTime(),new cljs.core.Keyword("edit","time","edit/time",1384867476),(new Date()).getTime()], null)], null);
return (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__55590,G__55591) : posh.reagent.transact_BANG_.call(null,G__55590,G__55591));
})], null)], null);
if(cljs.core.fn_QMARK_(v__41695__auto__)){
return (function (data_atom__41696__auto__,owner__41697__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__41695__auto__,data_atom__41696__auto__,owner__41697__auto__], null));
});
} else {
return reagent.core.as_element(v__41695__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__41677__auto__))], 0))], 0));
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages55583.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta55584","meta55584",316746428,null)], null);
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages55583.cljs$lang$type = true);

(athens.devcards.all_pages.t_athens$devcards$all_pages55583.cljs$lang$ctorStr = "athens.devcards.all-pages/t_athens$devcards$all_pages55583");

(athens.devcards.all_pages.t_athens$devcards$all_pages55583.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.all-pages/t_athens$devcards$all_pages55583");
}));

/**
 * Positional factory function for athens.devcards.all-pages/t_athens$devcards$all_pages55583.
 */
athens.devcards.all_pages.__GT_t_athens$devcards$all_pages55583 = (function athens$devcards$all_pages$__GT_t_athens$devcards$all_pages55583(meta55584){
return (new athens.devcards.all_pages.t_athens$devcards$all_pages55583(meta55584));
});

}

return (new athens.devcards.all_pages.t_athens$devcards$all_pages55583(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.all_pages","athens.devcards.all_pages",-311766867),new cljs.core.Keyword(null,"Load-Real-DB","Load-Real-DB",504458170)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load-Real-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.all_pages !== 'undefined') && (typeof athens.devcards.all_pages.t_athens$devcards$all_pages55592 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.all_pages.t_athens$devcards$all_pages55592 = (function (meta55593){
this.meta55593 = meta55593;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.all_pages.t_athens$devcards$all_pages55592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55594,meta55593__$1){
var self__ = this;
var _55594__$1 = this;
return (new athens.devcards.all_pages.t_athens$devcards$all_pages55592(meta55593__$1));
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages55592.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55594){
var self__ = this;
var _55594__$1 = this;
return self__.meta55593;
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages55592.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.all_pages.t_athens$devcards$all_pages55592.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__41676__auto__,devcard_opts__41677__auto__){
var self__ = this;
var this__41676__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__41677__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__41695__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button], null);
if(cljs.core.fn_QMARK_(v__41695__auto__)){
return (function (data_atom__41696__auto__,owner__41697__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__41695__auto__,data_atom__41696__auto__,owner__41697__auto__], null));
});
} else {
return reagent.core.as_element(v__41695__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__41677__auto__))], 0))], 0));
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages55592.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta55593","meta55593",604750703,null)], null);
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages55592.cljs$lang$type = true);

(athens.devcards.all_pages.t_athens$devcards$all_pages55592.cljs$lang$ctorStr = "athens.devcards.all-pages/t_athens$devcards$all_pages55592");

(athens.devcards.all_pages.t_athens$devcards$all_pages55592.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.all-pages/t_athens$devcards$all_pages55592");
}));

/**
 * Positional factory function for athens.devcards.all-pages/t_athens$devcards$all_pages55592.
 */
athens.devcards.all_pages.__GT_t_athens$devcards$all_pages55592 = (function athens$devcards$all_pages$__GT_t_athens$devcards$all_pages55592(meta55593){
return (new athens.devcards.all_pages.t_athens$devcards$all_pages55592(meta55593));
});

}

return (new athens.devcards.all_pages.t_athens$devcards$all_pages55592(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.all_pages","athens.devcards.all_pages",-311766867),new cljs.core.Keyword(null,"Table","Table",-45928924)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Table",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.all_pages !== 'undefined') && (typeof athens.devcards.all_pages.t_athens$devcards$all_pages55604 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.all_pages.t_athens$devcards$all_pages55604 = (function (meta55605){
this.meta55605 = meta55605;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.all_pages.t_athens$devcards$all_pages55604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55606,meta55605__$1){
var self__ = this;
var _55606__$1 = this;
return (new athens.devcards.all_pages.t_athens$devcards$all_pages55604(meta55605__$1));
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages55604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55606){
var self__ = this;
var _55606__$1 = this;
return self__.meta55605;
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages55604.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.all_pages.t_athens$devcards$all_pages55604.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__41676__auto__,devcard_opts__41677__auto__){
var self__ = this;
var this__41676__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__41677__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__41695__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.all_pages.table], null);
if(cljs.core.fn_QMARK_(v__41695__auto__)){
return (function (data_atom__41696__auto__,owner__41697__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__41695__auto__,data_atom__41696__auto__,owner__41697__auto__], null));
});
} else {
return reagent.core.as_element(v__41695__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__41677__auto__))], 0))], 0));
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages55604.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta55605","meta55605",681542926,null)], null);
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages55604.cljs$lang$type = true);

(athens.devcards.all_pages.t_athens$devcards$all_pages55604.cljs$lang$ctorStr = "athens.devcards.all-pages/t_athens$devcards$all_pages55604");

(athens.devcards.all_pages.t_athens$devcards$all_pages55604.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.all-pages/t_athens$devcards$all_pages55604");
}));

/**
 * Positional factory function for athens.devcards.all-pages/t_athens$devcards$all_pages55604.
 */
athens.devcards.all_pages.__GT_t_athens$devcards$all_pages55604 = (function athens$devcards$all_pages$__GT_t_athens$devcards$all_pages55604(meta55605){
return (new athens.devcards.all_pages.t_athens$devcards$all_pages55604(meta55605));
});

}

return (new athens.devcards.all_pages.t_athens$devcards$all_pages55604(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.all_pages.js.map
