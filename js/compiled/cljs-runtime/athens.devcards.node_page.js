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
var G__68277 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact-event","transact-event",1188240621),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__68277) : re_frame.core.dispatch.call(null,G__68277));
});
athens.devcards.node_page.db_handler = goog.functions.debounce(athens.devcards.node_page.handler,(500));
athens.devcards.node_page.get_ref_ids = (function athens$devcards$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__68278 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__68279 = athens.db.dsdb;
var G__68280 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__68278,G__68279,G__68280) : posh.reagent.q.call(null,G__68278,G__68279,G__68280));
})());
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
athens.devcards.node_page.node_page_el = (function athens$devcards$node_page$node_page_el(p__68281,editing_uid,ref_groups){
var map__68282 = p__68281;
var map__68282__$1 = (((((!((map__68282 == null))))?(((((map__68282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68282):map__68282);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68282__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68282__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68282__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__68284 = e.target.value;
var G__68285 = uid;
return (athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__68284,G__68285) : athens.devcards.node_page.db_handler.call(null,G__68284,G__68285));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__68286(s__68287){
return (new cljs.core.LazySeq(null,(function (){
var s__68287__$1 = s__68287;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__68287__$1);
if(temp__5735__auto__){
var s__68287__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__68287__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__68287__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__68289 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__68288 = (0);
while(true){
if((i__68288 < size__4581__auto__)){
var map__68290 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__68288);
var map__68290__$1 = (((((!((map__68290 == null))))?(((((map__68290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68290):map__68290);
var child = map__68290__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68290__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__68289,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__68425 = (i__68288 + (1));
i__68288 = G__68425;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68289),athens$devcards$node_page$node_page_el_$_iter__68286(cljs.core.chunk_rest(s__68287__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68289),null);
}
} else {
var map__68292 = cljs.core.first(s__68287__$2);
var map__68292__$1 = (((((!((map__68292 == null))))?(((((map__68292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68292):map__68292);
var child = map__68292__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68292__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$devcards$node_page$node_page_el_$_iter__68286(cljs.core.rest(s__68287__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__68294(s__68295){
return (new cljs.core.LazySeq(null,(function (){
var s__68295__$1 = s__68295;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__68295__$1);
if(temp__5735__auto__){
var s__68295__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__68295__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__68295__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__68297 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__68296 = (0);
while(true){
if((i__68296 < size__4581__auto__)){
var vec__68298 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__68296);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68298,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68298,(1),null);
cljs.core.chunk_append(b__68297,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__68296,vec__68298,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68297,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__68294_$_iter__68301(s__68302){
return (new cljs.core.LazySeq(null,((function (i__68296,vec__68298,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68297,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid){
return (function (){
var s__68302__$1 = s__68302;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__68302__$1);
if(temp__5735__auto____$1){
var s__68302__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__68302__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__68302__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__68304 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__68303 = (0);
while(true){
if((i__68303 < size__4581__auto____$1)){
var vec__68305 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__68303);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68305,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68305,(1),null);
cljs.core.chunk_append(b__68304,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (i__68303,i__68296,vec__68305,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68304,s__68302__$2,temp__5735__auto____$1,vec__68298,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68297,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__68294_$_iter__68301_$_iter__68308(s__68309){
return (new cljs.core.LazySeq(null,((function (i__68303,i__68296,vec__68305,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68304,s__68302__$2,temp__5735__auto____$1,vec__68298,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68297,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid){
return (function (){
var s__68309__$1 = s__68309;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__68309__$1);
if(temp__5735__auto____$2){
var s__68309__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__68309__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__68309__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__68311 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__68310 = (0);
while(true){
if((i__68310 < size__4581__auto____$2)){
var map__68312 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__68310);
var map__68312__$1 = (((((!((map__68312 == null))))?(((((map__68312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68312):map__68312);
var block = map__68312__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68312__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68312__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__68311,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__68310,i__68303,i__68296,map__68312,map__68312__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__68311,s__68309__$2,temp__5735__auto____$2,vec__68305,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68304,s__68302__$2,temp__5735__auto____$1,vec__68298,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68297,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__68310,i__68303,i__68296,map__68312,map__68312__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__68311,s__68309__$2,temp__5735__auto____$2,vec__68305,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68304,s__68302__$2,temp__5735__auto____$1,vec__68298,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68297,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__68310,i__68303,i__68296,map__68312,map__68312__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__68311,s__68309__$2,temp__5735__auto____$2,vec__68305,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68304,s__68302__$2,temp__5735__auto____$1,vec__68298,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68297,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__68294_$_iter__68301_$_iter__68308_$_iter__68314(s__68315){
return (new cljs.core.LazySeq(null,((function (i__68310,i__68303,i__68296,map__68312,map__68312__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__68311,s__68309__$2,temp__5735__auto____$2,vec__68305,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68304,s__68302__$2,temp__5735__auto____$1,vec__68298,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68297,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid){
return (function (){
var s__68315__$1 = s__68315;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__68315__$1);
if(temp__5735__auto____$3){
var s__68315__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__68315__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__68315__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__68317 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__68316 = (0);
while(true){
if((i__68316 < size__4581__auto____$3)){
var map__68318 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__68316);
var map__68318__$1 = (((((!((map__68318 == null))))?(((((map__68318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68318):map__68318);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68318__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68318__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68318__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__68317,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__68443 = (i__68316 + (1));
i__68316 = G__68443;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68317),athens$devcards$node_page$node_page_el_$_iter__68294_$_iter__68301_$_iter__68308_$_iter__68314(cljs.core.chunk_rest(s__68315__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68317),null);
}
} else {
var map__68320 = cljs.core.first(s__68315__$2);
var map__68320__$1 = (((((!((map__68320 == null))))?(((((map__68320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68320):map__68320);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68320__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68320__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68320__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__68294_$_iter__68301_$_iter__68308_$_iter__68314(cljs.core.rest(s__68315__$2)));
}
} else {
return null;
}
break;
}
});})(i__68310,i__68303,i__68296,map__68312,map__68312__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__68311,s__68309__$2,temp__5735__auto____$2,vec__68305,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68304,s__68302__$2,temp__5735__auto____$1,vec__68298,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68297,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid))
,null,null));
});})(i__68310,i__68303,i__68296,map__68312,map__68312__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__68311,s__68309__$2,temp__5735__auto____$2,vec__68305,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68304,s__68302__$2,temp__5735__auto____$1,vec__68298,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68297,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__68444 = (i__68310 + (1));
i__68310 = G__68444;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68311),athens$devcards$node_page$node_page_el_$_iter__68294_$_iter__68301_$_iter__68308(cljs.core.chunk_rest(s__68309__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68311),null);
}
} else {
var map__68322 = cljs.core.first(s__68309__$2);
var map__68322__$1 = (((((!((map__68322 == null))))?(((((map__68322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68322):map__68322);
var block = map__68322__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68322__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68322__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__68303,i__68296,map__68322,map__68322__$1,block,uid__$1,parents,s__68309__$2,temp__5735__auto____$2,vec__68305,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68304,s__68302__$2,temp__5735__auto____$1,vec__68298,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68297,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__68303,i__68296,map__68322,map__68322__$1,block,uid__$1,parents,s__68309__$2,temp__5735__auto____$2,vec__68305,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68304,s__68302__$2,temp__5735__auto____$1,vec__68298,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68297,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__68303,i__68296,map__68322,map__68322__$1,block,uid__$1,parents,s__68309__$2,temp__5735__auto____$2,vec__68305,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68304,s__68302__$2,temp__5735__auto____$1,vec__68298,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68297,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__68294_$_iter__68301_$_iter__68308_$_iter__68324(s__68325){
return (new cljs.core.LazySeq(null,((function (i__68303,i__68296,map__68322,map__68322__$1,block,uid__$1,parents,s__68309__$2,temp__5735__auto____$2,vec__68305,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68304,s__68302__$2,temp__5735__auto____$1,vec__68298,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68297,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid){
return (function (){
var s__68325__$1 = s__68325;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__68325__$1);
if(temp__5735__auto____$3){
var s__68325__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__68325__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__68325__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__68327 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__68326 = (0);
while(true){
if((i__68326 < size__4581__auto____$2)){
var map__68328 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__68326);
var map__68328__$1 = (((((!((map__68328 == null))))?(((((map__68328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68328):map__68328);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68328__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68328__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68328__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__68327,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__68445 = (i__68326 + (1));
i__68326 = G__68445;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68327),athens$devcards$node_page$node_page_el_$_iter__68294_$_iter__68301_$_iter__68308_$_iter__68324(cljs.core.chunk_rest(s__68325__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68327),null);
}
} else {
var map__68330 = cljs.core.first(s__68325__$2);
var map__68330__$1 = (((((!((map__68330 == null))))?(((((map__68330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68330):map__68330);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68330__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68330__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68330__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__68294_$_iter__68301_$_iter__68308_$_iter__68324(cljs.core.rest(s__68325__$2)));
}
} else {
return null;
}
break;
}
});})(i__68303,i__68296,map__68322,map__68322__$1,block,uid__$1,parents,s__68309__$2,temp__5735__auto____$2,vec__68305,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68304,s__68302__$2,temp__5735__auto____$1,vec__68298,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68297,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid))
,null,null));
});})(i__68303,i__68296,map__68322,map__68322__$1,block,uid__$1,parents,s__68309__$2,temp__5735__auto____$2,vec__68305,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68304,s__68302__$2,temp__5735__auto____$1,vec__68298,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68297,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__68294_$_iter__68301_$_iter__68308(cljs.core.rest(s__68309__$2)));
}
} else {
return null;
}
break;
}
});})(i__68303,i__68296,vec__68305,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68304,s__68302__$2,temp__5735__auto____$1,vec__68298,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68297,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid))
,null,null));
});})(i__68303,i__68296,vec__68305,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__68304,s__68302__$2,temp__5735__auto____$1,vec__68298,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68297,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__68447 = (i__68303 + (1));
i__68303 = G__68447;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68304),athens$devcards$node_page$node_page_el_$_iter__68294_$_iter__68301(cljs.core.chunk_rest(s__68302__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68304),null);
}
} else {
var vec__68332 = cljs.core.first(s__68302__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68332,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68332,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (i__68296,vec__68332,group_title,group,s__68302__$2,temp__5735__auto____$1,vec__68298,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68297,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__68294_$_iter__68301_$_iter__68335(s__68336){
return (new cljs.core.LazySeq(null,((function (i__68296,vec__68332,group_title,group,s__68302__$2,temp__5735__auto____$1,vec__68298,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68297,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid){
return (function (){
var s__68336__$1 = s__68336;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__68336__$1);
if(temp__5735__auto____$2){
var s__68336__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__68336__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__68336__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__68338 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__68337 = (0);
while(true){
if((i__68337 < size__4581__auto____$1)){
var map__68339 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__68337);
var map__68339__$1 = (((((!((map__68339 == null))))?(((((map__68339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68339):map__68339);
var block = map__68339__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68339__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68339__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__68338,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__68337,i__68296,map__68339,map__68339__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__68338,s__68336__$2,temp__5735__auto____$2,vec__68332,group_title,group,s__68302__$2,temp__5735__auto____$1,vec__68298,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68297,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__68337,i__68296,map__68339,map__68339__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__68338,s__68336__$2,temp__5735__auto____$2,vec__68332,group_title,group,s__68302__$2,temp__5735__auto____$1,vec__68298,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68297,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__68337,i__68296,map__68339,map__68339__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__68338,s__68336__$2,temp__5735__auto____$2,vec__68332,group_title,group,s__68302__$2,temp__5735__auto____$1,vec__68298,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68297,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__68294_$_iter__68301_$_iter__68335_$_iter__68341(s__68342){
return (new cljs.core.LazySeq(null,((function (i__68337,i__68296,map__68339,map__68339__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__68338,s__68336__$2,temp__5735__auto____$2,vec__68332,group_title,group,s__68302__$2,temp__5735__auto____$1,vec__68298,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68297,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid){
return (function (){
var s__68342__$1 = s__68342;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__68342__$1);
if(temp__5735__auto____$3){
var s__68342__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__68342__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__68342__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__68344 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__68343 = (0);
while(true){
if((i__68343 < size__4581__auto____$2)){
var map__68345 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__68343);
var map__68345__$1 = (((((!((map__68345 == null))))?(((((map__68345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68345):map__68345);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68345__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68345__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68345__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__68344,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__68448 = (i__68343 + (1));
i__68343 = G__68448;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68344),athens$devcards$node_page$node_page_el_$_iter__68294_$_iter__68301_$_iter__68335_$_iter__68341(cljs.core.chunk_rest(s__68342__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68344),null);
}
} else {
var map__68347 = cljs.core.first(s__68342__$2);
var map__68347__$1 = (((((!((map__68347 == null))))?(((((map__68347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68347):map__68347);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68347__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68347__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68347__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__68294_$_iter__68301_$_iter__68335_$_iter__68341(cljs.core.rest(s__68342__$2)));
}
} else {
return null;
}
break;
}
});})(i__68337,i__68296,map__68339,map__68339__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__68338,s__68336__$2,temp__5735__auto____$2,vec__68332,group_title,group,s__68302__$2,temp__5735__auto____$1,vec__68298,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68297,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid))
,null,null));
});})(i__68337,i__68296,map__68339,map__68339__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__68338,s__68336__$2,temp__5735__auto____$2,vec__68332,group_title,group,s__68302__$2,temp__5735__auto____$1,vec__68298,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68297,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__68449 = (i__68337 + (1));
i__68337 = G__68449;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68338),athens$devcards$node_page$node_page_el_$_iter__68294_$_iter__68301_$_iter__68335(cljs.core.chunk_rest(s__68336__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68338),null);
}
} else {
var map__68349 = cljs.core.first(s__68336__$2);
var map__68349__$1 = (((((!((map__68349 == null))))?(((((map__68349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68349):map__68349);
var block = map__68349__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68349__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68349__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__68296,map__68349,map__68349__$1,block,uid__$1,parents,s__68336__$2,temp__5735__auto____$2,vec__68332,group_title,group,s__68302__$2,temp__5735__auto____$1,vec__68298,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68297,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__68296,map__68349,map__68349__$1,block,uid__$1,parents,s__68336__$2,temp__5735__auto____$2,vec__68332,group_title,group,s__68302__$2,temp__5735__auto____$1,vec__68298,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68297,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__68296,map__68349,map__68349__$1,block,uid__$1,parents,s__68336__$2,temp__5735__auto____$2,vec__68332,group_title,group,s__68302__$2,temp__5735__auto____$1,vec__68298,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68297,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__68294_$_iter__68301_$_iter__68335_$_iter__68351(s__68352){
return (new cljs.core.LazySeq(null,((function (i__68296,map__68349,map__68349__$1,block,uid__$1,parents,s__68336__$2,temp__5735__auto____$2,vec__68332,group_title,group,s__68302__$2,temp__5735__auto____$1,vec__68298,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68297,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid){
return (function (){
var s__68352__$1 = s__68352;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__68352__$1);
if(temp__5735__auto____$3){
var s__68352__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__68352__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__68352__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__68354 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__68353 = (0);
while(true){
if((i__68353 < size__4581__auto____$1)){
var map__68355 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__68353);
var map__68355__$1 = (((((!((map__68355 == null))))?(((((map__68355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68355):map__68355);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68355__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68355__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68355__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__68354,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__68450 = (i__68353 + (1));
i__68353 = G__68450;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68354),athens$devcards$node_page$node_page_el_$_iter__68294_$_iter__68301_$_iter__68335_$_iter__68351(cljs.core.chunk_rest(s__68352__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68354),null);
}
} else {
var map__68357 = cljs.core.first(s__68352__$2);
var map__68357__$1 = (((((!((map__68357 == null))))?(((((map__68357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68357):map__68357);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68357__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68357__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68357__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__68294_$_iter__68301_$_iter__68335_$_iter__68351(cljs.core.rest(s__68352__$2)));
}
} else {
return null;
}
break;
}
});})(i__68296,map__68349,map__68349__$1,block,uid__$1,parents,s__68336__$2,temp__5735__auto____$2,vec__68332,group_title,group,s__68302__$2,temp__5735__auto____$1,vec__68298,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68297,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid))
,null,null));
});})(i__68296,map__68349,map__68349__$1,block,uid__$1,parents,s__68336__$2,temp__5735__auto____$2,vec__68332,group_title,group,s__68302__$2,temp__5735__auto____$1,vec__68298,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68297,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__68294_$_iter__68301_$_iter__68335(cljs.core.rest(s__68336__$2)));
}
} else {
return null;
}
break;
}
});})(i__68296,vec__68332,group_title,group,s__68302__$2,temp__5735__auto____$1,vec__68298,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68297,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid))
,null,null));
});})(i__68296,vec__68332,group_title,group,s__68302__$2,temp__5735__auto____$1,vec__68298,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68297,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__68294_$_iter__68301(cljs.core.rest(s__68302__$2)));
}
} else {
return null;
}
break;
}
});})(i__68296,vec__68298,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68297,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid))
,null,null));
});})(i__68296,vec__68298,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__68297,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})())], null));

var G__68451 = (i__68296 + (1));
i__68296 = G__68451;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68297),athens$devcards$node_page$node_page_el_$_iter__68294(cljs.core.chunk_rest(s__68295__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68297),null);
}
} else {
var vec__68359 = cljs.core.first(s__68295__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68359,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68359,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__68359,linked_or_unlinked,refs,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__68294_$_iter__68362(s__68363){
return (new cljs.core.LazySeq(null,(function (){
var s__68363__$1 = s__68363;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__68363__$1);
if(temp__5735__auto____$1){
var s__68363__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__68363__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__68363__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__68365 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__68364 = (0);
while(true){
if((i__68364 < size__4581__auto__)){
var vec__68366 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__68364);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68366,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68366,(1),null);
cljs.core.chunk_append(b__68365,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (i__68364,vec__68366,group_title,group,c__4580__auto__,size__4581__auto__,b__68365,s__68363__$2,temp__5735__auto____$1,vec__68359,linked_or_unlinked,refs,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__68294_$_iter__68362_$_iter__68369(s__68370){
return (new cljs.core.LazySeq(null,((function (i__68364,vec__68366,group_title,group,c__4580__auto__,size__4581__auto__,b__68365,s__68363__$2,temp__5735__auto____$1,vec__68359,linked_or_unlinked,refs,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid){
return (function (){
var s__68370__$1 = s__68370;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__68370__$1);
if(temp__5735__auto____$2){
var s__68370__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__68370__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__68370__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__68372 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__68371 = (0);
while(true){
if((i__68371 < size__4581__auto____$1)){
var map__68373 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__68371);
var map__68373__$1 = (((((!((map__68373 == null))))?(((((map__68373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68373):map__68373);
var block = map__68373__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68373__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68373__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__68372,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__68371,i__68364,map__68373,map__68373__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__68372,s__68370__$2,temp__5735__auto____$2,vec__68366,group_title,group,c__4580__auto__,size__4581__auto__,b__68365,s__68363__$2,temp__5735__auto____$1,vec__68359,linked_or_unlinked,refs,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__68371,i__68364,map__68373,map__68373__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__68372,s__68370__$2,temp__5735__auto____$2,vec__68366,group_title,group,c__4580__auto__,size__4581__auto__,b__68365,s__68363__$2,temp__5735__auto____$1,vec__68359,linked_or_unlinked,refs,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__68371,i__68364,map__68373,map__68373__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__68372,s__68370__$2,temp__5735__auto____$2,vec__68366,group_title,group,c__4580__auto__,size__4581__auto__,b__68365,s__68363__$2,temp__5735__auto____$1,vec__68359,linked_or_unlinked,refs,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__68294_$_iter__68362_$_iter__68369_$_iter__68375(s__68376){
return (new cljs.core.LazySeq(null,((function (i__68371,i__68364,map__68373,map__68373__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__68372,s__68370__$2,temp__5735__auto____$2,vec__68366,group_title,group,c__4580__auto__,size__4581__auto__,b__68365,s__68363__$2,temp__5735__auto____$1,vec__68359,linked_or_unlinked,refs,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid){
return (function (){
var s__68376__$1 = s__68376;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__68376__$1);
if(temp__5735__auto____$3){
var s__68376__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__68376__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__68376__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__68378 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__68377 = (0);
while(true){
if((i__68377 < size__4581__auto____$2)){
var map__68379 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__68377);
var map__68379__$1 = (((((!((map__68379 == null))))?(((((map__68379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68379):map__68379);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68379__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68379__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68379__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__68378,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__68452 = (i__68377 + (1));
i__68377 = G__68452;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68378),athens$devcards$node_page$node_page_el_$_iter__68294_$_iter__68362_$_iter__68369_$_iter__68375(cljs.core.chunk_rest(s__68376__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68378),null);
}
} else {
var map__68381 = cljs.core.first(s__68376__$2);
var map__68381__$1 = (((((!((map__68381 == null))))?(((((map__68381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68381):map__68381);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68381__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68381__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68381__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__68294_$_iter__68362_$_iter__68369_$_iter__68375(cljs.core.rest(s__68376__$2)));
}
} else {
return null;
}
break;
}
});})(i__68371,i__68364,map__68373,map__68373__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__68372,s__68370__$2,temp__5735__auto____$2,vec__68366,group_title,group,c__4580__auto__,size__4581__auto__,b__68365,s__68363__$2,temp__5735__auto____$1,vec__68359,linked_or_unlinked,refs,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid))
,null,null));
});})(i__68371,i__68364,map__68373,map__68373__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__68372,s__68370__$2,temp__5735__auto____$2,vec__68366,group_title,group,c__4580__auto__,size__4581__auto__,b__68365,s__68363__$2,temp__5735__auto____$1,vec__68359,linked_or_unlinked,refs,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__68453 = (i__68371 + (1));
i__68371 = G__68453;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68372),athens$devcards$node_page$node_page_el_$_iter__68294_$_iter__68362_$_iter__68369(cljs.core.chunk_rest(s__68370__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68372),null);
}
} else {
var map__68383 = cljs.core.first(s__68370__$2);
var map__68383__$1 = (((((!((map__68383 == null))))?(((((map__68383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68383):map__68383);
var block = map__68383__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68383__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68383__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__68364,map__68383,map__68383__$1,block,uid__$1,parents,s__68370__$2,temp__5735__auto____$2,vec__68366,group_title,group,c__4580__auto__,size__4581__auto__,b__68365,s__68363__$2,temp__5735__auto____$1,vec__68359,linked_or_unlinked,refs,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__68364,map__68383,map__68383__$1,block,uid__$1,parents,s__68370__$2,temp__5735__auto____$2,vec__68366,group_title,group,c__4580__auto__,size__4581__auto__,b__68365,s__68363__$2,temp__5735__auto____$1,vec__68359,linked_or_unlinked,refs,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__68364,map__68383,map__68383__$1,block,uid__$1,parents,s__68370__$2,temp__5735__auto____$2,vec__68366,group_title,group,c__4580__auto__,size__4581__auto__,b__68365,s__68363__$2,temp__5735__auto____$1,vec__68359,linked_or_unlinked,refs,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__68294_$_iter__68362_$_iter__68369_$_iter__68385(s__68386){
return (new cljs.core.LazySeq(null,((function (i__68364,map__68383,map__68383__$1,block,uid__$1,parents,s__68370__$2,temp__5735__auto____$2,vec__68366,group_title,group,c__4580__auto__,size__4581__auto__,b__68365,s__68363__$2,temp__5735__auto____$1,vec__68359,linked_or_unlinked,refs,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid){
return (function (){
var s__68386__$1 = s__68386;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__68386__$1);
if(temp__5735__auto____$3){
var s__68386__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__68386__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__68386__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__68388 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__68387 = (0);
while(true){
if((i__68387 < size__4581__auto____$1)){
var map__68389 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__68387);
var map__68389__$1 = (((((!((map__68389 == null))))?(((((map__68389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68389):map__68389);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68389__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68389__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68389__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__68388,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__68454 = (i__68387 + (1));
i__68387 = G__68454;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68388),athens$devcards$node_page$node_page_el_$_iter__68294_$_iter__68362_$_iter__68369_$_iter__68385(cljs.core.chunk_rest(s__68386__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68388),null);
}
} else {
var map__68391 = cljs.core.first(s__68386__$2);
var map__68391__$1 = (((((!((map__68391 == null))))?(((((map__68391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68391):map__68391);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68391__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68391__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68391__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__68294_$_iter__68362_$_iter__68369_$_iter__68385(cljs.core.rest(s__68386__$2)));
}
} else {
return null;
}
break;
}
});})(i__68364,map__68383,map__68383__$1,block,uid__$1,parents,s__68370__$2,temp__5735__auto____$2,vec__68366,group_title,group,c__4580__auto__,size__4581__auto__,b__68365,s__68363__$2,temp__5735__auto____$1,vec__68359,linked_or_unlinked,refs,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid))
,null,null));
});})(i__68364,map__68383,map__68383__$1,block,uid__$1,parents,s__68370__$2,temp__5735__auto____$2,vec__68366,group_title,group,c__4580__auto__,size__4581__auto__,b__68365,s__68363__$2,temp__5735__auto____$1,vec__68359,linked_or_unlinked,refs,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__68294_$_iter__68362_$_iter__68369(cljs.core.rest(s__68370__$2)));
}
} else {
return null;
}
break;
}
});})(i__68364,vec__68366,group_title,group,c__4580__auto__,size__4581__auto__,b__68365,s__68363__$2,temp__5735__auto____$1,vec__68359,linked_or_unlinked,refs,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid))
,null,null));
});})(i__68364,vec__68366,group_title,group,c__4580__auto__,size__4581__auto__,b__68365,s__68363__$2,temp__5735__auto____$1,vec__68359,linked_or_unlinked,refs,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__68455 = (i__68364 + (1));
i__68364 = G__68455;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68365),athens$devcards$node_page$node_page_el_$_iter__68294_$_iter__68362(cljs.core.chunk_rest(s__68363__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68365),null);
}
} else {
var vec__68393 = cljs.core.first(s__68363__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68393,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68393,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (vec__68393,group_title,group,s__68363__$2,temp__5735__auto____$1,vec__68359,linked_or_unlinked,refs,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__68294_$_iter__68362_$_iter__68396(s__68397){
return (new cljs.core.LazySeq(null,(function (){
var s__68397__$1 = s__68397;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__68397__$1);
if(temp__5735__auto____$2){
var s__68397__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__68397__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__68397__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__68399 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__68398 = (0);
while(true){
if((i__68398 < size__4581__auto__)){
var map__68400 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__68398);
var map__68400__$1 = (((((!((map__68400 == null))))?(((((map__68400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68400):map__68400);
var block = map__68400__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68400__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68400__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__68399,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__68398,map__68400,map__68400__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__68399,s__68397__$2,temp__5735__auto____$2,vec__68393,group_title,group,s__68363__$2,temp__5735__auto____$1,vec__68359,linked_or_unlinked,refs,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__68398,map__68400,map__68400__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__68399,s__68397__$2,temp__5735__auto____$2,vec__68393,group_title,group,s__68363__$2,temp__5735__auto____$1,vec__68359,linked_or_unlinked,refs,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__68398,map__68400,map__68400__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__68399,s__68397__$2,temp__5735__auto____$2,vec__68393,group_title,group,s__68363__$2,temp__5735__auto____$1,vec__68359,linked_or_unlinked,refs,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__68294_$_iter__68362_$_iter__68396_$_iter__68402(s__68403){
return (new cljs.core.LazySeq(null,((function (i__68398,map__68400,map__68400__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__68399,s__68397__$2,temp__5735__auto____$2,vec__68393,group_title,group,s__68363__$2,temp__5735__auto____$1,vec__68359,linked_or_unlinked,refs,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid){
return (function (){
var s__68403__$1 = s__68403;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__68403__$1);
if(temp__5735__auto____$3){
var s__68403__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__68403__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__68403__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__68405 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__68404 = (0);
while(true){
if((i__68404 < size__4581__auto____$1)){
var map__68406 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__68404);
var map__68406__$1 = (((((!((map__68406 == null))))?(((((map__68406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68406):map__68406);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68406__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68406__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68406__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__68405,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__68456 = (i__68404 + (1));
i__68404 = G__68456;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68405),athens$devcards$node_page$node_page_el_$_iter__68294_$_iter__68362_$_iter__68396_$_iter__68402(cljs.core.chunk_rest(s__68403__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68405),null);
}
} else {
var map__68408 = cljs.core.first(s__68403__$2);
var map__68408__$1 = (((((!((map__68408 == null))))?(((((map__68408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68408):map__68408);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68408__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68408__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68408__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__68294_$_iter__68362_$_iter__68396_$_iter__68402(cljs.core.rest(s__68403__$2)));
}
} else {
return null;
}
break;
}
});})(i__68398,map__68400,map__68400__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__68399,s__68397__$2,temp__5735__auto____$2,vec__68393,group_title,group,s__68363__$2,temp__5735__auto____$1,vec__68359,linked_or_unlinked,refs,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid))
,null,null));
});})(i__68398,map__68400,map__68400__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__68399,s__68397__$2,temp__5735__auto____$2,vec__68393,group_title,group,s__68363__$2,temp__5735__auto____$1,vec__68359,linked_or_unlinked,refs,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__68457 = (i__68398 + (1));
i__68398 = G__68457;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68399),athens$devcards$node_page$node_page_el_$_iter__68294_$_iter__68362_$_iter__68396(cljs.core.chunk_rest(s__68397__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68399),null);
}
} else {
var map__68410 = cljs.core.first(s__68397__$2);
var map__68410__$1 = (((((!((map__68410 == null))))?(((((map__68410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68410):map__68410);
var block = map__68410__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68410__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68410__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__68410,map__68410__$1,block,uid__$1,parents,s__68397__$2,temp__5735__auto____$2,vec__68393,group_title,group,s__68363__$2,temp__5735__auto____$1,vec__68359,linked_or_unlinked,refs,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(map__68410,map__68410__$1,block,uid__$1,parents,s__68397__$2,temp__5735__auto____$2,vec__68393,group_title,group,s__68363__$2,temp__5735__auto____$1,vec__68359,linked_or_unlinked,refs,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (map__68410,map__68410__$1,block,uid__$1,parents,s__68397__$2,temp__5735__auto____$2,vec__68393,group_title,group,s__68363__$2,temp__5735__auto____$1,vec__68359,linked_or_unlinked,refs,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__68294_$_iter__68362_$_iter__68396_$_iter__68412(s__68413){
return (new cljs.core.LazySeq(null,(function (){
var s__68413__$1 = s__68413;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__68413__$1);
if(temp__5735__auto____$3){
var s__68413__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__68413__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__68413__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__68415 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__68414 = (0);
while(true){
if((i__68414 < size__4581__auto__)){
var map__68416 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__68414);
var map__68416__$1 = (((((!((map__68416 == null))))?(((((map__68416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68416):map__68416);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68416__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68416__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68416__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__68415,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__68458 = (i__68414 + (1));
i__68414 = G__68458;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68415),athens$devcards$node_page$node_page_el_$_iter__68294_$_iter__68362_$_iter__68396_$_iter__68412(cljs.core.chunk_rest(s__68413__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68415),null);
}
} else {
var map__68418 = cljs.core.first(s__68413__$2);
var map__68418__$1 = (((((!((map__68418 == null))))?(((((map__68418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68418):map__68418);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68418__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68418__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68418__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__68294_$_iter__68362_$_iter__68396_$_iter__68412(cljs.core.rest(s__68413__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__68410,map__68410__$1,block,uid__$1,parents,s__68397__$2,temp__5735__auto____$2,vec__68393,group_title,group,s__68363__$2,temp__5735__auto____$1,vec__68359,linked_or_unlinked,refs,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__68294_$_iter__68362_$_iter__68396(cljs.core.rest(s__68397__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__68393,group_title,group,s__68363__$2,temp__5735__auto____$1,vec__68359,linked_or_unlinked,refs,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__68294_$_iter__68362(cljs.core.rest(s__68363__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__68359,linked_or_unlinked,refs,s__68295__$2,temp__5735__auto__,map__68282,map__68282__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})())], null),athens$devcards$node_page$node_page_el_$_iter__68294(cljs.core.rest(s__68295__$2)));
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
var editing_uid = cljs.core.deref((function (){var G__68420 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__68420) : re_frame.core.subscribe.call(null,G__68420));
})());
if(clojure.string.blank_QMARK_(title)){
return null;
} else {
var ref_groups = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Linked References",athens.devcards.node_page.get_data(athens.patterns.linked(title))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unlinked References",athens.devcards.node_page.get_data(athens.patterns.unlinked(title))], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.node_page.node_page_el,node,editing_uid,ref_groups], null);
}
});

//# sourceMappingURL=athens.devcards.node_page.js.map
