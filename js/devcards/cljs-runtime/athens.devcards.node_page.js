goog.provide('athens.devcards.node_page');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.db');
goog.require('athens.devcards.blocks');
goog.require('athens.devcards.buttons');
goog.require('athens.patterns');
goog.require('athens.style');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
goog.require('devcards.core');
goog.require('garden.selectors');
goog.require('goog.functions');
goog.require('komponentit.autosize');
goog.require('posh.reagent');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('stylefy.core');
athens.devcards.node_page.title_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"visible",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),"1",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.2em 0",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.03em",new cljs.core.Keyword(null,"word-break","word-break",-407281356),"break-word",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"-webkit-appearance","-webkit-appearance",375531635),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"caret-color","caret-color",997187317),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"margin","margin",-995903681)],["inherit","translate3d(0,0,0)","inherit","100%","inherit","opacity 0.15s ease","0","inherit","100%","transparent","text","none","none","0","0",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),"0","absolute","inherit","0","4px","inherit","0","0"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea:focus","textarea:focus",117113075),new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10",new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._PLUS_(new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.Keyword(null,"span","span",1394872991)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null)], null)], null)], null);
athens.devcards.node_page.handler = (function athens$devcards$node_page$handler(val,uid){
var G__60856 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact-event","transact-event",1188240621),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__60856) : re_frame.core.dispatch.call(null,G__60856));
});
athens.devcards.node_page.db_handler = goog.functions.debounce(athens.devcards.node_page.handler,(500));
athens.devcards.node_page.get_ref_ids = (function athens$devcards$node_page$get_ref_ids(pattern){
var G__60857 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__60858 = athens.db.dsdb;
var G__60859 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__60857,G__60858,G__60859) : posh.reagent.q.call(null,G__60857,G__60858,G__60859));
});
athens.devcards.node_page.get_block = (function athens$devcards$node_page$get_block(id){
return cljs.core.deref((posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(athens.db.dsdb,athens.db.block_pull_pattern,id) : posh.reagent.pull.call(null,athens.db.dsdb,athens.db.block_pull_pattern,id)));
});
athens.devcards.node_page.get_parents = (function athens$devcards$node_page$get_parents(id){
return athens.db.shape_parent_query(cljs.core.deref((posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(athens.db.dsdb,athens.db.parents_pull_pattern,id) : posh.reagent.pull.call(null,athens.db.dsdb,athens.db.parents_pull_pattern,id))));
});
athens.devcards.node_page.merge_parents_and_block = (function athens$devcards$node_page$merge_parents_and_block(ref_ids){
var parents = cljs.core.reduce_kv((function (m,_,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,athens.devcards.node_page.get_parents(v));
}),cljs.core.PersistentArrayMap.EMPTY,ref_ids);
var blocks = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return athens.devcards.node_page.get_block(id);
}),ref_ids);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (block){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","parents","block/parents",-1954648902),cljs.core.get.cljs$core$IFn$_invoke$arity$2(parents,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block))], null)], 0));
}),blocks);
});
athens.devcards.node_page.group_by_parent = (function athens$devcards$node_page$group_by_parent(blocks){
return cljs.core.group_by((function (x){
return new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword("block","parents","block/parents",-1954648902).cljs$core$IFn$_invoke$arity$1(x)));
}),blocks);
});
athens.devcards.node_page.get_data = (function athens$devcards$node_page$get_data(pattern){
return cljs.core.seq(athens.devcards.node_page.group_by_parent(athens.devcards.node_page.merge_parents_and_block(athens.devcards.node_page.get_ref_ids(pattern))));
});
athens.devcards.node_page.node_page_el = (function athens$devcards$node_page$node_page_el(p__60860,editing_uid,ref_groups){
var map__60861 = p__60860;
var map__60861__$1 = (((((!((map__60861 == null))))?(((((map__60861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60861):map__60861);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60861__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60861__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60861__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__60863 = e.target.value;
var G__60864 = uid;
return (athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__60863,G__60864) : athens.devcards.node_page.db_handler.call(null,G__60863,G__60864));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__60865(s__60866){
return (new cljs.core.LazySeq(null,(function (){
var s__60866__$1 = s__60866;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60866__$1);
if(temp__5735__auto__){
var s__60866__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60866__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60866__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60868 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60867 = (0);
while(true){
if((i__60867 < size__4581__auto__)){
var map__60869 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60867);
var map__60869__$1 = (((((!((map__60869 == null))))?(((((map__60869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60869):map__60869);
var child = map__60869__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60869__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60868,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__61003 = (i__60867 + (1));
i__60867 = G__61003;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60868),athens$devcards$node_page$node_page_el_$_iter__60865(cljs.core.chunk_rest(s__60866__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60868),null);
}
} else {
var map__60871 = cljs.core.first(s__60866__$2);
var map__60871__$1 = (((((!((map__60871 == null))))?(((((map__60871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60871):map__60871);
var child = map__60871__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60871__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$devcards$node_page$node_page_el_$_iter__60865(cljs.core.rest(s__60866__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__60873(s__60874){
return (new cljs.core.LazySeq(null,(function (){
var s__60874__$1 = s__60874;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60874__$1);
if(temp__5735__auto__){
var s__60874__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60874__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60874__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60876 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60875 = (0);
while(true){
if((i__60875 < size__4581__auto__)){
var vec__60877 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60875);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60877,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60877,(1),null);
cljs.core.chunk_append(b__60876,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__60875,vec__60877,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60876,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60873_$_iter__60880(s__60881){
return (new cljs.core.LazySeq(null,((function (i__60875,vec__60877,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60876,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid){
return (function (){
var s__60881__$1 = s__60881;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__60881__$1);
if(temp__5735__auto____$1){
var s__60881__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60881__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__60881__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__60883 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__60882 = (0);
while(true){
if((i__60882 < size__4581__auto____$1)){
var vec__60884 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__60882);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60884,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60884,(1),null);
cljs.core.chunk_append(b__60883,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (i__60882,i__60875,vec__60884,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60883,s__60881__$2,temp__5735__auto____$1,vec__60877,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60876,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60873_$_iter__60880_$_iter__60887(s__60888){
return (new cljs.core.LazySeq(null,((function (i__60882,i__60875,vec__60884,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60883,s__60881__$2,temp__5735__auto____$1,vec__60877,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60876,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid){
return (function (){
var s__60888__$1 = s__60888;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__60888__$1);
if(temp__5735__auto____$2){
var s__60888__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__60888__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__60888__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__60890 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__60889 = (0);
while(true){
if((i__60889 < size__4581__auto____$2)){
var map__60891 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__60889);
var map__60891__$1 = (((((!((map__60891 == null))))?(((((map__60891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60891):map__60891);
var block = map__60891__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60891__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60891__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__60890,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__60889,i__60882,i__60875,map__60891,map__60891__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__60890,s__60888__$2,temp__5735__auto____$2,vec__60884,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60883,s__60881__$2,temp__5735__auto____$1,vec__60877,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60876,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__60889,i__60882,i__60875,map__60891,map__60891__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__60890,s__60888__$2,temp__5735__auto____$2,vec__60884,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60883,s__60881__$2,temp__5735__auto____$1,vec__60877,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60876,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__60889,i__60882,i__60875,map__60891,map__60891__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__60890,s__60888__$2,temp__5735__auto____$2,vec__60884,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60883,s__60881__$2,temp__5735__auto____$1,vec__60877,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60876,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60873_$_iter__60880_$_iter__60887_$_iter__60893(s__60894){
return (new cljs.core.LazySeq(null,((function (i__60889,i__60882,i__60875,map__60891,map__60891__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__60890,s__60888__$2,temp__5735__auto____$2,vec__60884,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60883,s__60881__$2,temp__5735__auto____$1,vec__60877,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60876,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid){
return (function (){
var s__60894__$1 = s__60894;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60894__$1);
if(temp__5735__auto____$3){
var s__60894__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60894__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__60894__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__60896 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__60895 = (0);
while(true){
if((i__60895 < size__4581__auto____$3)){
var map__60897 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__60895);
var map__60897__$1 = (((((!((map__60897 == null))))?(((((map__60897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60897):map__60897);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60897__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60897__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60897__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60896,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__61004 = (i__60895 + (1));
i__60895 = G__61004;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60896),athens$devcards$node_page$node_page_el_$_iter__60873_$_iter__60880_$_iter__60887_$_iter__60893(cljs.core.chunk_rest(s__60894__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60896),null);
}
} else {
var map__60899 = cljs.core.first(s__60894__$2);
var map__60899__$1 = (((((!((map__60899 == null))))?(((((map__60899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60899):map__60899);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60899__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60899__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60899__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__60873_$_iter__60880_$_iter__60887_$_iter__60893(cljs.core.rest(s__60894__$2)));
}
} else {
return null;
}
break;
}
});})(i__60889,i__60882,i__60875,map__60891,map__60891__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__60890,s__60888__$2,temp__5735__auto____$2,vec__60884,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60883,s__60881__$2,temp__5735__auto____$1,vec__60877,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60876,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid))
,null,null));
});})(i__60889,i__60882,i__60875,map__60891,map__60891__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__60890,s__60888__$2,temp__5735__auto____$2,vec__60884,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60883,s__60881__$2,temp__5735__auto____$1,vec__60877,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60876,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__61005 = (i__60889 + (1));
i__60889 = G__61005;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60890),athens$devcards$node_page$node_page_el_$_iter__60873_$_iter__60880_$_iter__60887(cljs.core.chunk_rest(s__60888__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60890),null);
}
} else {
var map__60901 = cljs.core.first(s__60888__$2);
var map__60901__$1 = (((((!((map__60901 == null))))?(((((map__60901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60901):map__60901);
var block = map__60901__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60901__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60901__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__60882,i__60875,map__60901,map__60901__$1,block,uid__$1,parents,s__60888__$2,temp__5735__auto____$2,vec__60884,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60883,s__60881__$2,temp__5735__auto____$1,vec__60877,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60876,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__60882,i__60875,map__60901,map__60901__$1,block,uid__$1,parents,s__60888__$2,temp__5735__auto____$2,vec__60884,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60883,s__60881__$2,temp__5735__auto____$1,vec__60877,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60876,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__60882,i__60875,map__60901,map__60901__$1,block,uid__$1,parents,s__60888__$2,temp__5735__auto____$2,vec__60884,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60883,s__60881__$2,temp__5735__auto____$1,vec__60877,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60876,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60873_$_iter__60880_$_iter__60887_$_iter__60903(s__60904){
return (new cljs.core.LazySeq(null,((function (i__60882,i__60875,map__60901,map__60901__$1,block,uid__$1,parents,s__60888__$2,temp__5735__auto____$2,vec__60884,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60883,s__60881__$2,temp__5735__auto____$1,vec__60877,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60876,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid){
return (function (){
var s__60904__$1 = s__60904;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60904__$1);
if(temp__5735__auto____$3){
var s__60904__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60904__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__60904__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__60906 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__60905 = (0);
while(true){
if((i__60905 < size__4581__auto____$2)){
var map__60907 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__60905);
var map__60907__$1 = (((((!((map__60907 == null))))?(((((map__60907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60907):map__60907);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60907__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60907__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60907__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60906,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__61006 = (i__60905 + (1));
i__60905 = G__61006;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60906),athens$devcards$node_page$node_page_el_$_iter__60873_$_iter__60880_$_iter__60887_$_iter__60903(cljs.core.chunk_rest(s__60904__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60906),null);
}
} else {
var map__60909 = cljs.core.first(s__60904__$2);
var map__60909__$1 = (((((!((map__60909 == null))))?(((((map__60909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60909):map__60909);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60909__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60909__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60909__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__60873_$_iter__60880_$_iter__60887_$_iter__60903(cljs.core.rest(s__60904__$2)));
}
} else {
return null;
}
break;
}
});})(i__60882,i__60875,map__60901,map__60901__$1,block,uid__$1,parents,s__60888__$2,temp__5735__auto____$2,vec__60884,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60883,s__60881__$2,temp__5735__auto____$1,vec__60877,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60876,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid))
,null,null));
});})(i__60882,i__60875,map__60901,map__60901__$1,block,uid__$1,parents,s__60888__$2,temp__5735__auto____$2,vec__60884,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60883,s__60881__$2,temp__5735__auto____$1,vec__60877,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60876,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__60873_$_iter__60880_$_iter__60887(cljs.core.rest(s__60888__$2)));
}
} else {
return null;
}
break;
}
});})(i__60882,i__60875,vec__60884,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60883,s__60881__$2,temp__5735__auto____$1,vec__60877,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60876,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid))
,null,null));
});})(i__60882,i__60875,vec__60884,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60883,s__60881__$2,temp__5735__auto____$1,vec__60877,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60876,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__61007 = (i__60882 + (1));
i__60882 = G__61007;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60883),athens$devcards$node_page$node_page_el_$_iter__60873_$_iter__60880(cljs.core.chunk_rest(s__60881__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60883),null);
}
} else {
var vec__60911 = cljs.core.first(s__60881__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60911,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60911,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (i__60875,vec__60911,group_title,group,s__60881__$2,temp__5735__auto____$1,vec__60877,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60876,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60873_$_iter__60880_$_iter__60914(s__60915){
return (new cljs.core.LazySeq(null,((function (i__60875,vec__60911,group_title,group,s__60881__$2,temp__5735__auto____$1,vec__60877,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60876,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid){
return (function (){
var s__60915__$1 = s__60915;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__60915__$1);
if(temp__5735__auto____$2){
var s__60915__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__60915__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__60915__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__60917 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__60916 = (0);
while(true){
if((i__60916 < size__4581__auto____$1)){
var map__60918 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__60916);
var map__60918__$1 = (((((!((map__60918 == null))))?(((((map__60918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60918):map__60918);
var block = map__60918__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60918__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60918__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__60917,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__60916,i__60875,map__60918,map__60918__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60917,s__60915__$2,temp__5735__auto____$2,vec__60911,group_title,group,s__60881__$2,temp__5735__auto____$1,vec__60877,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60876,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__60916,i__60875,map__60918,map__60918__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60917,s__60915__$2,temp__5735__auto____$2,vec__60911,group_title,group,s__60881__$2,temp__5735__auto____$1,vec__60877,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60876,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__60916,i__60875,map__60918,map__60918__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60917,s__60915__$2,temp__5735__auto____$2,vec__60911,group_title,group,s__60881__$2,temp__5735__auto____$1,vec__60877,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60876,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60873_$_iter__60880_$_iter__60914_$_iter__60920(s__60921){
return (new cljs.core.LazySeq(null,((function (i__60916,i__60875,map__60918,map__60918__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60917,s__60915__$2,temp__5735__auto____$2,vec__60911,group_title,group,s__60881__$2,temp__5735__auto____$1,vec__60877,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60876,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid){
return (function (){
var s__60921__$1 = s__60921;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60921__$1);
if(temp__5735__auto____$3){
var s__60921__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60921__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__60921__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__60923 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__60922 = (0);
while(true){
if((i__60922 < size__4581__auto____$2)){
var map__60924 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__60922);
var map__60924__$1 = (((((!((map__60924 == null))))?(((((map__60924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60924):map__60924);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60924__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60924__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60924__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60923,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__61008 = (i__60922 + (1));
i__60922 = G__61008;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60923),athens$devcards$node_page$node_page_el_$_iter__60873_$_iter__60880_$_iter__60914_$_iter__60920(cljs.core.chunk_rest(s__60921__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60923),null);
}
} else {
var map__60926 = cljs.core.first(s__60921__$2);
var map__60926__$1 = (((((!((map__60926 == null))))?(((((map__60926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60926):map__60926);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60926__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60926__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60926__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__60873_$_iter__60880_$_iter__60914_$_iter__60920(cljs.core.rest(s__60921__$2)));
}
} else {
return null;
}
break;
}
});})(i__60916,i__60875,map__60918,map__60918__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60917,s__60915__$2,temp__5735__auto____$2,vec__60911,group_title,group,s__60881__$2,temp__5735__auto____$1,vec__60877,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60876,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid))
,null,null));
});})(i__60916,i__60875,map__60918,map__60918__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60917,s__60915__$2,temp__5735__auto____$2,vec__60911,group_title,group,s__60881__$2,temp__5735__auto____$1,vec__60877,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60876,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__61009 = (i__60916 + (1));
i__60916 = G__61009;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60917),athens$devcards$node_page$node_page_el_$_iter__60873_$_iter__60880_$_iter__60914(cljs.core.chunk_rest(s__60915__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60917),null);
}
} else {
var map__60928 = cljs.core.first(s__60915__$2);
var map__60928__$1 = (((((!((map__60928 == null))))?(((((map__60928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60928):map__60928);
var block = map__60928__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60928__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60928__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__60875,map__60928,map__60928__$1,block,uid__$1,parents,s__60915__$2,temp__5735__auto____$2,vec__60911,group_title,group,s__60881__$2,temp__5735__auto____$1,vec__60877,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60876,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__60875,map__60928,map__60928__$1,block,uid__$1,parents,s__60915__$2,temp__5735__auto____$2,vec__60911,group_title,group,s__60881__$2,temp__5735__auto____$1,vec__60877,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60876,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__60875,map__60928,map__60928__$1,block,uid__$1,parents,s__60915__$2,temp__5735__auto____$2,vec__60911,group_title,group,s__60881__$2,temp__5735__auto____$1,vec__60877,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60876,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60873_$_iter__60880_$_iter__60914_$_iter__60930(s__60931){
return (new cljs.core.LazySeq(null,((function (i__60875,map__60928,map__60928__$1,block,uid__$1,parents,s__60915__$2,temp__5735__auto____$2,vec__60911,group_title,group,s__60881__$2,temp__5735__auto____$1,vec__60877,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60876,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid){
return (function (){
var s__60931__$1 = s__60931;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60931__$1);
if(temp__5735__auto____$3){
var s__60931__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60931__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__60931__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__60933 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__60932 = (0);
while(true){
if((i__60932 < size__4581__auto____$1)){
var map__60934 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__60932);
var map__60934__$1 = (((((!((map__60934 == null))))?(((((map__60934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60934):map__60934);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60934__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60934__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60934__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60933,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__61010 = (i__60932 + (1));
i__60932 = G__61010;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60933),athens$devcards$node_page$node_page_el_$_iter__60873_$_iter__60880_$_iter__60914_$_iter__60930(cljs.core.chunk_rest(s__60931__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60933),null);
}
} else {
var map__60936 = cljs.core.first(s__60931__$2);
var map__60936__$1 = (((((!((map__60936 == null))))?(((((map__60936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60936):map__60936);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60936__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60936__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60936__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__60873_$_iter__60880_$_iter__60914_$_iter__60930(cljs.core.rest(s__60931__$2)));
}
} else {
return null;
}
break;
}
});})(i__60875,map__60928,map__60928__$1,block,uid__$1,parents,s__60915__$2,temp__5735__auto____$2,vec__60911,group_title,group,s__60881__$2,temp__5735__auto____$1,vec__60877,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60876,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid))
,null,null));
});})(i__60875,map__60928,map__60928__$1,block,uid__$1,parents,s__60915__$2,temp__5735__auto____$2,vec__60911,group_title,group,s__60881__$2,temp__5735__auto____$1,vec__60877,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60876,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__60873_$_iter__60880_$_iter__60914(cljs.core.rest(s__60915__$2)));
}
} else {
return null;
}
break;
}
});})(i__60875,vec__60911,group_title,group,s__60881__$2,temp__5735__auto____$1,vec__60877,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60876,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid))
,null,null));
});})(i__60875,vec__60911,group_title,group,s__60881__$2,temp__5735__auto____$1,vec__60877,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60876,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__60873_$_iter__60880(cljs.core.rest(s__60881__$2)));
}
} else {
return null;
}
break;
}
});})(i__60875,vec__60877,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60876,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid))
,null,null));
});})(i__60875,vec__60877,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60876,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})())], null));

var G__61011 = (i__60875 + (1));
i__60875 = G__61011;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60876),athens$devcards$node_page$node_page_el_$_iter__60873(cljs.core.chunk_rest(s__60874__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60876),null);
}
} else {
var vec__60938 = cljs.core.first(s__60874__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60938,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60938,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__60938,linked_or_unlinked,refs,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60873_$_iter__60941(s__60942){
return (new cljs.core.LazySeq(null,(function (){
var s__60942__$1 = s__60942;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__60942__$1);
if(temp__5735__auto____$1){
var s__60942__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60942__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60942__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60944 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60943 = (0);
while(true){
if((i__60943 < size__4581__auto__)){
var vec__60945 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60943);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60945,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60945,(1),null);
cljs.core.chunk_append(b__60944,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (i__60943,vec__60945,group_title,group,c__4580__auto__,size__4581__auto__,b__60944,s__60942__$2,temp__5735__auto____$1,vec__60938,linked_or_unlinked,refs,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60873_$_iter__60941_$_iter__60948(s__60949){
return (new cljs.core.LazySeq(null,((function (i__60943,vec__60945,group_title,group,c__4580__auto__,size__4581__auto__,b__60944,s__60942__$2,temp__5735__auto____$1,vec__60938,linked_or_unlinked,refs,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid){
return (function (){
var s__60949__$1 = s__60949;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__60949__$1);
if(temp__5735__auto____$2){
var s__60949__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__60949__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__60949__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__60951 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__60950 = (0);
while(true){
if((i__60950 < size__4581__auto____$1)){
var map__60952 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__60950);
var map__60952__$1 = (((((!((map__60952 == null))))?(((((map__60952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60952):map__60952);
var block = map__60952__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60952__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60952__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__60951,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__60950,i__60943,map__60952,map__60952__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60951,s__60949__$2,temp__5735__auto____$2,vec__60945,group_title,group,c__4580__auto__,size__4581__auto__,b__60944,s__60942__$2,temp__5735__auto____$1,vec__60938,linked_or_unlinked,refs,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__60950,i__60943,map__60952,map__60952__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60951,s__60949__$2,temp__5735__auto____$2,vec__60945,group_title,group,c__4580__auto__,size__4581__auto__,b__60944,s__60942__$2,temp__5735__auto____$1,vec__60938,linked_or_unlinked,refs,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__60950,i__60943,map__60952,map__60952__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60951,s__60949__$2,temp__5735__auto____$2,vec__60945,group_title,group,c__4580__auto__,size__4581__auto__,b__60944,s__60942__$2,temp__5735__auto____$1,vec__60938,linked_or_unlinked,refs,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60873_$_iter__60941_$_iter__60948_$_iter__60954(s__60955){
return (new cljs.core.LazySeq(null,((function (i__60950,i__60943,map__60952,map__60952__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60951,s__60949__$2,temp__5735__auto____$2,vec__60945,group_title,group,c__4580__auto__,size__4581__auto__,b__60944,s__60942__$2,temp__5735__auto____$1,vec__60938,linked_or_unlinked,refs,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid){
return (function (){
var s__60955__$1 = s__60955;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60955__$1);
if(temp__5735__auto____$3){
var s__60955__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60955__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__60955__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__60957 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__60956 = (0);
while(true){
if((i__60956 < size__4581__auto____$2)){
var map__60958 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__60956);
var map__60958__$1 = (((((!((map__60958 == null))))?(((((map__60958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60958):map__60958);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60958__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60958__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60958__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60957,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__61012 = (i__60956 + (1));
i__60956 = G__61012;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60957),athens$devcards$node_page$node_page_el_$_iter__60873_$_iter__60941_$_iter__60948_$_iter__60954(cljs.core.chunk_rest(s__60955__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60957),null);
}
} else {
var map__60960 = cljs.core.first(s__60955__$2);
var map__60960__$1 = (((((!((map__60960 == null))))?(((((map__60960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60960):map__60960);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60960__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60960__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60960__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__60873_$_iter__60941_$_iter__60948_$_iter__60954(cljs.core.rest(s__60955__$2)));
}
} else {
return null;
}
break;
}
});})(i__60950,i__60943,map__60952,map__60952__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60951,s__60949__$2,temp__5735__auto____$2,vec__60945,group_title,group,c__4580__auto__,size__4581__auto__,b__60944,s__60942__$2,temp__5735__auto____$1,vec__60938,linked_or_unlinked,refs,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid))
,null,null));
});})(i__60950,i__60943,map__60952,map__60952__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60951,s__60949__$2,temp__5735__auto____$2,vec__60945,group_title,group,c__4580__auto__,size__4581__auto__,b__60944,s__60942__$2,temp__5735__auto____$1,vec__60938,linked_or_unlinked,refs,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__61013 = (i__60950 + (1));
i__60950 = G__61013;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60951),athens$devcards$node_page$node_page_el_$_iter__60873_$_iter__60941_$_iter__60948(cljs.core.chunk_rest(s__60949__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60951),null);
}
} else {
var map__60962 = cljs.core.first(s__60949__$2);
var map__60962__$1 = (((((!((map__60962 == null))))?(((((map__60962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60962):map__60962);
var block = map__60962__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60962__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60962__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__60943,map__60962,map__60962__$1,block,uid__$1,parents,s__60949__$2,temp__5735__auto____$2,vec__60945,group_title,group,c__4580__auto__,size__4581__auto__,b__60944,s__60942__$2,temp__5735__auto____$1,vec__60938,linked_or_unlinked,refs,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__60943,map__60962,map__60962__$1,block,uid__$1,parents,s__60949__$2,temp__5735__auto____$2,vec__60945,group_title,group,c__4580__auto__,size__4581__auto__,b__60944,s__60942__$2,temp__5735__auto____$1,vec__60938,linked_or_unlinked,refs,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__60943,map__60962,map__60962__$1,block,uid__$1,parents,s__60949__$2,temp__5735__auto____$2,vec__60945,group_title,group,c__4580__auto__,size__4581__auto__,b__60944,s__60942__$2,temp__5735__auto____$1,vec__60938,linked_or_unlinked,refs,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60873_$_iter__60941_$_iter__60948_$_iter__60964(s__60965){
return (new cljs.core.LazySeq(null,((function (i__60943,map__60962,map__60962__$1,block,uid__$1,parents,s__60949__$2,temp__5735__auto____$2,vec__60945,group_title,group,c__4580__auto__,size__4581__auto__,b__60944,s__60942__$2,temp__5735__auto____$1,vec__60938,linked_or_unlinked,refs,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid){
return (function (){
var s__60965__$1 = s__60965;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60965__$1);
if(temp__5735__auto____$3){
var s__60965__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60965__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__60965__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__60967 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__60966 = (0);
while(true){
if((i__60966 < size__4581__auto____$1)){
var map__60968 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__60966);
var map__60968__$1 = (((((!((map__60968 == null))))?(((((map__60968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60968):map__60968);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60968__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60968__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60968__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60967,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__61014 = (i__60966 + (1));
i__60966 = G__61014;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60967),athens$devcards$node_page$node_page_el_$_iter__60873_$_iter__60941_$_iter__60948_$_iter__60964(cljs.core.chunk_rest(s__60965__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60967),null);
}
} else {
var map__60970 = cljs.core.first(s__60965__$2);
var map__60970__$1 = (((((!((map__60970 == null))))?(((((map__60970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60970):map__60970);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60970__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60970__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60970__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__60873_$_iter__60941_$_iter__60948_$_iter__60964(cljs.core.rest(s__60965__$2)));
}
} else {
return null;
}
break;
}
});})(i__60943,map__60962,map__60962__$1,block,uid__$1,parents,s__60949__$2,temp__5735__auto____$2,vec__60945,group_title,group,c__4580__auto__,size__4581__auto__,b__60944,s__60942__$2,temp__5735__auto____$1,vec__60938,linked_or_unlinked,refs,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid))
,null,null));
});})(i__60943,map__60962,map__60962__$1,block,uid__$1,parents,s__60949__$2,temp__5735__auto____$2,vec__60945,group_title,group,c__4580__auto__,size__4581__auto__,b__60944,s__60942__$2,temp__5735__auto____$1,vec__60938,linked_or_unlinked,refs,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__60873_$_iter__60941_$_iter__60948(cljs.core.rest(s__60949__$2)));
}
} else {
return null;
}
break;
}
});})(i__60943,vec__60945,group_title,group,c__4580__auto__,size__4581__auto__,b__60944,s__60942__$2,temp__5735__auto____$1,vec__60938,linked_or_unlinked,refs,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid))
,null,null));
});})(i__60943,vec__60945,group_title,group,c__4580__auto__,size__4581__auto__,b__60944,s__60942__$2,temp__5735__auto____$1,vec__60938,linked_or_unlinked,refs,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__61015 = (i__60943 + (1));
i__60943 = G__61015;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60944),athens$devcards$node_page$node_page_el_$_iter__60873_$_iter__60941(cljs.core.chunk_rest(s__60942__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60944),null);
}
} else {
var vec__60972 = cljs.core.first(s__60942__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60972,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60972,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (vec__60972,group_title,group,s__60942__$2,temp__5735__auto____$1,vec__60938,linked_or_unlinked,refs,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60873_$_iter__60941_$_iter__60975(s__60976){
return (new cljs.core.LazySeq(null,(function (){
var s__60976__$1 = s__60976;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__60976__$1);
if(temp__5735__auto____$2){
var s__60976__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__60976__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60976__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60978 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60977 = (0);
while(true){
if((i__60977 < size__4581__auto__)){
var map__60979 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60977);
var map__60979__$1 = (((((!((map__60979 == null))))?(((((map__60979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60979):map__60979);
var block = map__60979__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60979__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60979__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__60978,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__60977,map__60979,map__60979__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__60978,s__60976__$2,temp__5735__auto____$2,vec__60972,group_title,group,s__60942__$2,temp__5735__auto____$1,vec__60938,linked_or_unlinked,refs,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__60977,map__60979,map__60979__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__60978,s__60976__$2,temp__5735__auto____$2,vec__60972,group_title,group,s__60942__$2,temp__5735__auto____$1,vec__60938,linked_or_unlinked,refs,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__60977,map__60979,map__60979__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__60978,s__60976__$2,temp__5735__auto____$2,vec__60972,group_title,group,s__60942__$2,temp__5735__auto____$1,vec__60938,linked_or_unlinked,refs,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60873_$_iter__60941_$_iter__60975_$_iter__60981(s__60982){
return (new cljs.core.LazySeq(null,((function (i__60977,map__60979,map__60979__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__60978,s__60976__$2,temp__5735__auto____$2,vec__60972,group_title,group,s__60942__$2,temp__5735__auto____$1,vec__60938,linked_or_unlinked,refs,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid){
return (function (){
var s__60982__$1 = s__60982;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60982__$1);
if(temp__5735__auto____$3){
var s__60982__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60982__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__60982__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__60984 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__60983 = (0);
while(true){
if((i__60983 < size__4581__auto____$1)){
var map__60985 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__60983);
var map__60985__$1 = (((((!((map__60985 == null))))?(((((map__60985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60985):map__60985);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60985__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60985__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60985__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60984,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__61016 = (i__60983 + (1));
i__60983 = G__61016;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60984),athens$devcards$node_page$node_page_el_$_iter__60873_$_iter__60941_$_iter__60975_$_iter__60981(cljs.core.chunk_rest(s__60982__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60984),null);
}
} else {
var map__60987 = cljs.core.first(s__60982__$2);
var map__60987__$1 = (((((!((map__60987 == null))))?(((((map__60987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60987):map__60987);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60987__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60987__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60987__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__60873_$_iter__60941_$_iter__60975_$_iter__60981(cljs.core.rest(s__60982__$2)));
}
} else {
return null;
}
break;
}
});})(i__60977,map__60979,map__60979__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__60978,s__60976__$2,temp__5735__auto____$2,vec__60972,group_title,group,s__60942__$2,temp__5735__auto____$1,vec__60938,linked_or_unlinked,refs,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid))
,null,null));
});})(i__60977,map__60979,map__60979__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__60978,s__60976__$2,temp__5735__auto____$2,vec__60972,group_title,group,s__60942__$2,temp__5735__auto____$1,vec__60938,linked_or_unlinked,refs,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__61017 = (i__60977 + (1));
i__60977 = G__61017;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60978),athens$devcards$node_page$node_page_el_$_iter__60873_$_iter__60941_$_iter__60975(cljs.core.chunk_rest(s__60976__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60978),null);
}
} else {
var map__60989 = cljs.core.first(s__60976__$2);
var map__60989__$1 = (((((!((map__60989 == null))))?(((((map__60989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60989):map__60989);
var block = map__60989__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60989__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60989__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__60989,map__60989__$1,block,uid__$1,parents,s__60976__$2,temp__5735__auto____$2,vec__60972,group_title,group,s__60942__$2,temp__5735__auto____$1,vec__60938,linked_or_unlinked,refs,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(map__60989,map__60989__$1,block,uid__$1,parents,s__60976__$2,temp__5735__auto____$2,vec__60972,group_title,group,s__60942__$2,temp__5735__auto____$1,vec__60938,linked_or_unlinked,refs,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (map__60989,map__60989__$1,block,uid__$1,parents,s__60976__$2,temp__5735__auto____$2,vec__60972,group_title,group,s__60942__$2,temp__5735__auto____$1,vec__60938,linked_or_unlinked,refs,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60873_$_iter__60941_$_iter__60975_$_iter__60991(s__60992){
return (new cljs.core.LazySeq(null,(function (){
var s__60992__$1 = s__60992;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60992__$1);
if(temp__5735__auto____$3){
var s__60992__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60992__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60992__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60994 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60993 = (0);
while(true){
if((i__60993 < size__4581__auto__)){
var map__60995 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60993);
var map__60995__$1 = (((((!((map__60995 == null))))?(((((map__60995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60995):map__60995);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60995__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60995__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60995__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60994,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__61018 = (i__60993 + (1));
i__60993 = G__61018;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60994),athens$devcards$node_page$node_page_el_$_iter__60873_$_iter__60941_$_iter__60975_$_iter__60991(cljs.core.chunk_rest(s__60992__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60994),null);
}
} else {
var map__60997 = cljs.core.first(s__60992__$2);
var map__60997__$1 = (((((!((map__60997 == null))))?(((((map__60997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60997):map__60997);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60997__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60997__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60997__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__60873_$_iter__60941_$_iter__60975_$_iter__60991(cljs.core.rest(s__60992__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__60989,map__60989__$1,block,uid__$1,parents,s__60976__$2,temp__5735__auto____$2,vec__60972,group_title,group,s__60942__$2,temp__5735__auto____$1,vec__60938,linked_or_unlinked,refs,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__60873_$_iter__60941_$_iter__60975(cljs.core.rest(s__60976__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__60972,group_title,group,s__60942__$2,temp__5735__auto____$1,vec__60938,linked_or_unlinked,refs,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__60873_$_iter__60941(cljs.core.rest(s__60942__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__60938,linked_or_unlinked,refs,s__60874__$2,temp__5735__auto__,map__60861,map__60861__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})())], null),athens$devcards$node_page$node_page_el_$_iter__60873(cljs.core.rest(s__60874__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(ref_groups);
})()], null);
});
/**
 * One diff between datascript and posh: we don't have pull in q for posh
 *   https://github.com/mpdairy/posh/issues/21
 */
athens.devcards.node_page.node_page_component = (function athens$devcards$node_page$node_page_component(ident){
var node = athens.db.sort_block(cljs.core.deref((posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(athens.db.dsdb,athens.db.node_pull_pattern,ident) : posh.reagent.pull.call(null,athens.db.dsdb,athens.db.node_pull_pattern,ident))));
var title = new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(node);
var editing_uid = cljs.core.deref((function (){var G__60999 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__60999) : re_frame.core.subscribe.call(null,G__60999));
})());
if(clojure.string.blank_QMARK_(title)){
return null;
} else {
var ref_groups = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Linked References",athens.devcards.node_page.get_data(athens.patterns.linked(title))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unlinked References",athens.devcards.node_page.get_data(athens.patterns.unlinked(title))], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.node_page.node_page_el,node,editing_uid,ref_groups], null);
}
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.node_page","athens.devcards.node_page",-728487734),new cljs.core.Keyword(null,"Node-Page","Node-Page",2010568893)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Node-Page",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"pull entity 4093: \"Hyperlink\" page",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.node_page !== 'undefined') && (typeof athens.devcards.node_page.t_athens$devcards$node_page61000 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.node_page.t_athens$devcards$node_page61000 = (function (meta61001){
this.meta61001 = meta61001;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.node_page.t_athens$devcards$node_page61000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61002,meta61001__$1){
var self__ = this;
var _61002__$1 = this;
return (new athens.devcards.node_page.t_athens$devcards$node_page61000(meta61001__$1));
}));

(athens.devcards.node_page.t_athens$devcards$node_page61000.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61002){
var self__ = this;
var _61002__$1 = this;
return self__.meta61001;
}));

(athens.devcards.node_page.t_athens$devcards$node_page61000.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.node_page.t_athens$devcards$node_page61000.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__41676__auto__,devcard_opts__41677__auto__){
var self__ = this;
var this__41676__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__41677__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__41695__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.node_page.node_page_component,(4093)], null);
if(cljs.core.fn_QMARK_(v__41695__auto__)){
return (function (data_atom__41696__auto__,owner__41697__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__41695__auto__,data_atom__41696__auto__,owner__41697__auto__], null));
});
} else {
return reagent.core.as_element(v__41695__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__41677__auto__))], 0))], 0));
}));

(athens.devcards.node_page.t_athens$devcards$node_page61000.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta61001","meta61001",1993183918,null)], null);
}));

(athens.devcards.node_page.t_athens$devcards$node_page61000.cljs$lang$type = true);

(athens.devcards.node_page.t_athens$devcards$node_page61000.cljs$lang$ctorStr = "athens.devcards.node-page/t_athens$devcards$node_page61000");

(athens.devcards.node_page.t_athens$devcards$node_page61000.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.node-page/t_athens$devcards$node_page61000");
}));

/**
 * Positional factory function for athens.devcards.node-page/t_athens$devcards$node_page61000.
 */
athens.devcards.node_page.__GT_t_athens$devcards$node_page61000 = (function athens$devcards$node_page$__GT_t_athens$devcards$node_page61000(meta61001){
return (new athens.devcards.node_page.t_athens$devcards$node_page61000(meta61001));
});

}

return (new athens.devcards.node_page.t_athens$devcards$node_page61000(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.node_page.js.map
