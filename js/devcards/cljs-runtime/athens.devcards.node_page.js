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
var G__60834 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact-event","transact-event",1188240621),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__60834) : re_frame.core.dispatch.call(null,G__60834));
});
athens.devcards.node_page.db_handler = goog.functions.debounce(athens.devcards.node_page.handler,(500));
athens.devcards.node_page.get_ref_ids = (function athens$devcards$node_page$get_ref_ids(pattern){
var G__60835 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__60836 = athens.db.dsdb;
var G__60837 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__60835,G__60836,G__60837) : posh.reagent.q.call(null,G__60835,G__60836,G__60837));
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
athens.devcards.node_page.node_page_el = (function athens$devcards$node_page$node_page_el(p__60838,editing_uid,ref_groups){
var map__60839 = p__60838;
var map__60839__$1 = (((((!((map__60839 == null))))?(((((map__60839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60839):map__60839);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60839__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60839__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60839__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__60841 = e.target.value;
var G__60842 = uid;
return (athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__60841,G__60842) : athens.devcards.node_page.db_handler.call(null,G__60841,G__60842));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__60843(s__60844){
return (new cljs.core.LazySeq(null,(function (){
var s__60844__$1 = s__60844;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60844__$1);
if(temp__5735__auto__){
var s__60844__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60844__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60844__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60846 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60845 = (0);
while(true){
if((i__60845 < size__4581__auto__)){
var map__60847 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60845);
var map__60847__$1 = (((((!((map__60847 == null))))?(((((map__60847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60847):map__60847);
var child = map__60847__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60847__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60846,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__60981 = (i__60845 + (1));
i__60845 = G__60981;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60846),athens$devcards$node_page$node_page_el_$_iter__60843(cljs.core.chunk_rest(s__60844__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60846),null);
}
} else {
var map__60849 = cljs.core.first(s__60844__$2);
var map__60849__$1 = (((((!((map__60849 == null))))?(((((map__60849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60849):map__60849);
var child = map__60849__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60849__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$devcards$node_page$node_page_el_$_iter__60843(cljs.core.rest(s__60844__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__60851(s__60852){
return (new cljs.core.LazySeq(null,(function (){
var s__60852__$1 = s__60852;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60852__$1);
if(temp__5735__auto__){
var s__60852__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60852__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60852__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60854 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60853 = (0);
while(true){
if((i__60853 < size__4581__auto__)){
var vec__60855 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60853);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60855,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60855,(1),null);
cljs.core.chunk_append(b__60854,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__60853,vec__60855,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60854,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60851_$_iter__60858(s__60859){
return (new cljs.core.LazySeq(null,((function (i__60853,vec__60855,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60854,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid){
return (function (){
var s__60859__$1 = s__60859;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__60859__$1);
if(temp__5735__auto____$1){
var s__60859__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60859__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__60859__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__60861 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__60860 = (0);
while(true){
if((i__60860 < size__4581__auto____$1)){
var vec__60862 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__60860);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60862,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60862,(1),null);
cljs.core.chunk_append(b__60861,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (i__60860,i__60853,vec__60862,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60861,s__60859__$2,temp__5735__auto____$1,vec__60855,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60854,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60851_$_iter__60858_$_iter__60865(s__60866){
return (new cljs.core.LazySeq(null,((function (i__60860,i__60853,vec__60862,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60861,s__60859__$2,temp__5735__auto____$1,vec__60855,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60854,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid){
return (function (){
var s__60866__$1 = s__60866;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__60866__$1);
if(temp__5735__auto____$2){
var s__60866__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__60866__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__60866__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__60868 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__60867 = (0);
while(true){
if((i__60867 < size__4581__auto____$2)){
var map__60869 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__60867);
var map__60869__$1 = (((((!((map__60869 == null))))?(((((map__60869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60869):map__60869);
var block = map__60869__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60869__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60869__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__60868,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__60867,i__60860,i__60853,map__60869,map__60869__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__60868,s__60866__$2,temp__5735__auto____$2,vec__60862,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60861,s__60859__$2,temp__5735__auto____$1,vec__60855,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60854,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__60867,i__60860,i__60853,map__60869,map__60869__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__60868,s__60866__$2,temp__5735__auto____$2,vec__60862,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60861,s__60859__$2,temp__5735__auto____$1,vec__60855,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60854,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__60867,i__60860,i__60853,map__60869,map__60869__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__60868,s__60866__$2,temp__5735__auto____$2,vec__60862,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60861,s__60859__$2,temp__5735__auto____$1,vec__60855,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60854,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60851_$_iter__60858_$_iter__60865_$_iter__60871(s__60872){
return (new cljs.core.LazySeq(null,((function (i__60867,i__60860,i__60853,map__60869,map__60869__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__60868,s__60866__$2,temp__5735__auto____$2,vec__60862,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60861,s__60859__$2,temp__5735__auto____$1,vec__60855,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60854,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid){
return (function (){
var s__60872__$1 = s__60872;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60872__$1);
if(temp__5735__auto____$3){
var s__60872__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60872__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__60872__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__60874 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__60873 = (0);
while(true){
if((i__60873 < size__4581__auto____$3)){
var map__60875 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__60873);
var map__60875__$1 = (((((!((map__60875 == null))))?(((((map__60875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60875):map__60875);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60875__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60875__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60875__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60874,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__60982 = (i__60873 + (1));
i__60873 = G__60982;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60874),athens$devcards$node_page$node_page_el_$_iter__60851_$_iter__60858_$_iter__60865_$_iter__60871(cljs.core.chunk_rest(s__60872__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60874),null);
}
} else {
var map__60877 = cljs.core.first(s__60872__$2);
var map__60877__$1 = (((((!((map__60877 == null))))?(((((map__60877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60877):map__60877);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60877__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60877__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60877__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__60851_$_iter__60858_$_iter__60865_$_iter__60871(cljs.core.rest(s__60872__$2)));
}
} else {
return null;
}
break;
}
});})(i__60867,i__60860,i__60853,map__60869,map__60869__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__60868,s__60866__$2,temp__5735__auto____$2,vec__60862,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60861,s__60859__$2,temp__5735__auto____$1,vec__60855,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60854,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid))
,null,null));
});})(i__60867,i__60860,i__60853,map__60869,map__60869__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__60868,s__60866__$2,temp__5735__auto____$2,vec__60862,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60861,s__60859__$2,temp__5735__auto____$1,vec__60855,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60854,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__60983 = (i__60867 + (1));
i__60867 = G__60983;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60868),athens$devcards$node_page$node_page_el_$_iter__60851_$_iter__60858_$_iter__60865(cljs.core.chunk_rest(s__60866__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60868),null);
}
} else {
var map__60879 = cljs.core.first(s__60866__$2);
var map__60879__$1 = (((((!((map__60879 == null))))?(((((map__60879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60879):map__60879);
var block = map__60879__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60879__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60879__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__60860,i__60853,map__60879,map__60879__$1,block,uid__$1,parents,s__60866__$2,temp__5735__auto____$2,vec__60862,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60861,s__60859__$2,temp__5735__auto____$1,vec__60855,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60854,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__60860,i__60853,map__60879,map__60879__$1,block,uid__$1,parents,s__60866__$2,temp__5735__auto____$2,vec__60862,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60861,s__60859__$2,temp__5735__auto____$1,vec__60855,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60854,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__60860,i__60853,map__60879,map__60879__$1,block,uid__$1,parents,s__60866__$2,temp__5735__auto____$2,vec__60862,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60861,s__60859__$2,temp__5735__auto____$1,vec__60855,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60854,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60851_$_iter__60858_$_iter__60865_$_iter__60881(s__60882){
return (new cljs.core.LazySeq(null,((function (i__60860,i__60853,map__60879,map__60879__$1,block,uid__$1,parents,s__60866__$2,temp__5735__auto____$2,vec__60862,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60861,s__60859__$2,temp__5735__auto____$1,vec__60855,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60854,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid){
return (function (){
var s__60882__$1 = s__60882;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60882__$1);
if(temp__5735__auto____$3){
var s__60882__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60882__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__60882__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__60884 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__60883 = (0);
while(true){
if((i__60883 < size__4581__auto____$2)){
var map__60885 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__60883);
var map__60885__$1 = (((((!((map__60885 == null))))?(((((map__60885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60885):map__60885);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60885__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60885__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60885__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60884,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__60984 = (i__60883 + (1));
i__60883 = G__60984;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60884),athens$devcards$node_page$node_page_el_$_iter__60851_$_iter__60858_$_iter__60865_$_iter__60881(cljs.core.chunk_rest(s__60882__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60884),null);
}
} else {
var map__60887 = cljs.core.first(s__60882__$2);
var map__60887__$1 = (((((!((map__60887 == null))))?(((((map__60887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60887):map__60887);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60887__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60887__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60887__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__60851_$_iter__60858_$_iter__60865_$_iter__60881(cljs.core.rest(s__60882__$2)));
}
} else {
return null;
}
break;
}
});})(i__60860,i__60853,map__60879,map__60879__$1,block,uid__$1,parents,s__60866__$2,temp__5735__auto____$2,vec__60862,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60861,s__60859__$2,temp__5735__auto____$1,vec__60855,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60854,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid))
,null,null));
});})(i__60860,i__60853,map__60879,map__60879__$1,block,uid__$1,parents,s__60866__$2,temp__5735__auto____$2,vec__60862,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60861,s__60859__$2,temp__5735__auto____$1,vec__60855,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60854,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__60851_$_iter__60858_$_iter__60865(cljs.core.rest(s__60866__$2)));
}
} else {
return null;
}
break;
}
});})(i__60860,i__60853,vec__60862,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60861,s__60859__$2,temp__5735__auto____$1,vec__60855,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60854,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid))
,null,null));
});})(i__60860,i__60853,vec__60862,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60861,s__60859__$2,temp__5735__auto____$1,vec__60855,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60854,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__60985 = (i__60860 + (1));
i__60860 = G__60985;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60861),athens$devcards$node_page$node_page_el_$_iter__60851_$_iter__60858(cljs.core.chunk_rest(s__60859__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60861),null);
}
} else {
var vec__60889 = cljs.core.first(s__60859__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60889,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60889,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (i__60853,vec__60889,group_title,group,s__60859__$2,temp__5735__auto____$1,vec__60855,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60854,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60851_$_iter__60858_$_iter__60892(s__60893){
return (new cljs.core.LazySeq(null,((function (i__60853,vec__60889,group_title,group,s__60859__$2,temp__5735__auto____$1,vec__60855,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60854,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid){
return (function (){
var s__60893__$1 = s__60893;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__60893__$1);
if(temp__5735__auto____$2){
var s__60893__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__60893__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__60893__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__60895 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__60894 = (0);
while(true){
if((i__60894 < size__4581__auto____$1)){
var map__60896 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__60894);
var map__60896__$1 = (((((!((map__60896 == null))))?(((((map__60896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60896):map__60896);
var block = map__60896__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60896__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60896__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__60895,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__60894,i__60853,map__60896,map__60896__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60895,s__60893__$2,temp__5735__auto____$2,vec__60889,group_title,group,s__60859__$2,temp__5735__auto____$1,vec__60855,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60854,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__60894,i__60853,map__60896,map__60896__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60895,s__60893__$2,temp__5735__auto____$2,vec__60889,group_title,group,s__60859__$2,temp__5735__auto____$1,vec__60855,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60854,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__60894,i__60853,map__60896,map__60896__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60895,s__60893__$2,temp__5735__auto____$2,vec__60889,group_title,group,s__60859__$2,temp__5735__auto____$1,vec__60855,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60854,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60851_$_iter__60858_$_iter__60892_$_iter__60898(s__60899){
return (new cljs.core.LazySeq(null,((function (i__60894,i__60853,map__60896,map__60896__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60895,s__60893__$2,temp__5735__auto____$2,vec__60889,group_title,group,s__60859__$2,temp__5735__auto____$1,vec__60855,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60854,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid){
return (function (){
var s__60899__$1 = s__60899;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60899__$1);
if(temp__5735__auto____$3){
var s__60899__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60899__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__60899__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__60901 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__60900 = (0);
while(true){
if((i__60900 < size__4581__auto____$2)){
var map__60902 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__60900);
var map__60902__$1 = (((((!((map__60902 == null))))?(((((map__60902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60902):map__60902);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60902__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60902__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60902__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60901,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__60989 = (i__60900 + (1));
i__60900 = G__60989;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60901),athens$devcards$node_page$node_page_el_$_iter__60851_$_iter__60858_$_iter__60892_$_iter__60898(cljs.core.chunk_rest(s__60899__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60901),null);
}
} else {
var map__60904 = cljs.core.first(s__60899__$2);
var map__60904__$1 = (((((!((map__60904 == null))))?(((((map__60904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60904):map__60904);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60904__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60904__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60904__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__60851_$_iter__60858_$_iter__60892_$_iter__60898(cljs.core.rest(s__60899__$2)));
}
} else {
return null;
}
break;
}
});})(i__60894,i__60853,map__60896,map__60896__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60895,s__60893__$2,temp__5735__auto____$2,vec__60889,group_title,group,s__60859__$2,temp__5735__auto____$1,vec__60855,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60854,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid))
,null,null));
});})(i__60894,i__60853,map__60896,map__60896__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60895,s__60893__$2,temp__5735__auto____$2,vec__60889,group_title,group,s__60859__$2,temp__5735__auto____$1,vec__60855,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60854,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__60994 = (i__60894 + (1));
i__60894 = G__60994;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60895),athens$devcards$node_page$node_page_el_$_iter__60851_$_iter__60858_$_iter__60892(cljs.core.chunk_rest(s__60893__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60895),null);
}
} else {
var map__60906 = cljs.core.first(s__60893__$2);
var map__60906__$1 = (((((!((map__60906 == null))))?(((((map__60906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60906):map__60906);
var block = map__60906__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60906__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60906__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__60853,map__60906,map__60906__$1,block,uid__$1,parents,s__60893__$2,temp__5735__auto____$2,vec__60889,group_title,group,s__60859__$2,temp__5735__auto____$1,vec__60855,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60854,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__60853,map__60906,map__60906__$1,block,uid__$1,parents,s__60893__$2,temp__5735__auto____$2,vec__60889,group_title,group,s__60859__$2,temp__5735__auto____$1,vec__60855,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60854,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__60853,map__60906,map__60906__$1,block,uid__$1,parents,s__60893__$2,temp__5735__auto____$2,vec__60889,group_title,group,s__60859__$2,temp__5735__auto____$1,vec__60855,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60854,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60851_$_iter__60858_$_iter__60892_$_iter__60908(s__60909){
return (new cljs.core.LazySeq(null,((function (i__60853,map__60906,map__60906__$1,block,uid__$1,parents,s__60893__$2,temp__5735__auto____$2,vec__60889,group_title,group,s__60859__$2,temp__5735__auto____$1,vec__60855,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60854,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid){
return (function (){
var s__60909__$1 = s__60909;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60909__$1);
if(temp__5735__auto____$3){
var s__60909__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60909__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__60909__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__60911 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__60910 = (0);
while(true){
if((i__60910 < size__4581__auto____$1)){
var map__60912 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__60910);
var map__60912__$1 = (((((!((map__60912 == null))))?(((((map__60912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60912):map__60912);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60912__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60912__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60912__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60911,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__60996 = (i__60910 + (1));
i__60910 = G__60996;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60911),athens$devcards$node_page$node_page_el_$_iter__60851_$_iter__60858_$_iter__60892_$_iter__60908(cljs.core.chunk_rest(s__60909__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60911),null);
}
} else {
var map__60914 = cljs.core.first(s__60909__$2);
var map__60914__$1 = (((((!((map__60914 == null))))?(((((map__60914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60914):map__60914);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60914__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60914__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60914__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__60851_$_iter__60858_$_iter__60892_$_iter__60908(cljs.core.rest(s__60909__$2)));
}
} else {
return null;
}
break;
}
});})(i__60853,map__60906,map__60906__$1,block,uid__$1,parents,s__60893__$2,temp__5735__auto____$2,vec__60889,group_title,group,s__60859__$2,temp__5735__auto____$1,vec__60855,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60854,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid))
,null,null));
});})(i__60853,map__60906,map__60906__$1,block,uid__$1,parents,s__60893__$2,temp__5735__auto____$2,vec__60889,group_title,group,s__60859__$2,temp__5735__auto____$1,vec__60855,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60854,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__60851_$_iter__60858_$_iter__60892(cljs.core.rest(s__60893__$2)));
}
} else {
return null;
}
break;
}
});})(i__60853,vec__60889,group_title,group,s__60859__$2,temp__5735__auto____$1,vec__60855,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60854,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid))
,null,null));
});})(i__60853,vec__60889,group_title,group,s__60859__$2,temp__5735__auto____$1,vec__60855,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60854,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__60851_$_iter__60858(cljs.core.rest(s__60859__$2)));
}
} else {
return null;
}
break;
}
});})(i__60853,vec__60855,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60854,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid))
,null,null));
});})(i__60853,vec__60855,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60854,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})())], null));

var G__60997 = (i__60853 + (1));
i__60853 = G__60997;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60854),athens$devcards$node_page$node_page_el_$_iter__60851(cljs.core.chunk_rest(s__60852__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60854),null);
}
} else {
var vec__60916 = cljs.core.first(s__60852__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60916,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60916,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__60916,linked_or_unlinked,refs,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60851_$_iter__60919(s__60920){
return (new cljs.core.LazySeq(null,(function (){
var s__60920__$1 = s__60920;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__60920__$1);
if(temp__5735__auto____$1){
var s__60920__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60920__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60920__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60922 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60921 = (0);
while(true){
if((i__60921 < size__4581__auto__)){
var vec__60923 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60921);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60923,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60923,(1),null);
cljs.core.chunk_append(b__60922,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (i__60921,vec__60923,group_title,group,c__4580__auto__,size__4581__auto__,b__60922,s__60920__$2,temp__5735__auto____$1,vec__60916,linked_or_unlinked,refs,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60851_$_iter__60919_$_iter__60926(s__60927){
return (new cljs.core.LazySeq(null,((function (i__60921,vec__60923,group_title,group,c__4580__auto__,size__4581__auto__,b__60922,s__60920__$2,temp__5735__auto____$1,vec__60916,linked_or_unlinked,refs,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid){
return (function (){
var s__60927__$1 = s__60927;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__60927__$1);
if(temp__5735__auto____$2){
var s__60927__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__60927__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__60927__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__60929 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__60928 = (0);
while(true){
if((i__60928 < size__4581__auto____$1)){
var map__60930 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__60928);
var map__60930__$1 = (((((!((map__60930 == null))))?(((((map__60930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60930):map__60930);
var block = map__60930__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60930__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60930__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__60929,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__60928,i__60921,map__60930,map__60930__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60929,s__60927__$2,temp__5735__auto____$2,vec__60923,group_title,group,c__4580__auto__,size__4581__auto__,b__60922,s__60920__$2,temp__5735__auto____$1,vec__60916,linked_or_unlinked,refs,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__60928,i__60921,map__60930,map__60930__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60929,s__60927__$2,temp__5735__auto____$2,vec__60923,group_title,group,c__4580__auto__,size__4581__auto__,b__60922,s__60920__$2,temp__5735__auto____$1,vec__60916,linked_or_unlinked,refs,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__60928,i__60921,map__60930,map__60930__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60929,s__60927__$2,temp__5735__auto____$2,vec__60923,group_title,group,c__4580__auto__,size__4581__auto__,b__60922,s__60920__$2,temp__5735__auto____$1,vec__60916,linked_or_unlinked,refs,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60851_$_iter__60919_$_iter__60926_$_iter__60932(s__60933){
return (new cljs.core.LazySeq(null,((function (i__60928,i__60921,map__60930,map__60930__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60929,s__60927__$2,temp__5735__auto____$2,vec__60923,group_title,group,c__4580__auto__,size__4581__auto__,b__60922,s__60920__$2,temp__5735__auto____$1,vec__60916,linked_or_unlinked,refs,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid){
return (function (){
var s__60933__$1 = s__60933;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60933__$1);
if(temp__5735__auto____$3){
var s__60933__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60933__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__60933__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__60935 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__60934 = (0);
while(true){
if((i__60934 < size__4581__auto____$2)){
var map__60936 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__60934);
var map__60936__$1 = (((((!((map__60936 == null))))?(((((map__60936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60936):map__60936);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60936__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60936__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60936__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60935,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__60998 = (i__60934 + (1));
i__60934 = G__60998;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60935),athens$devcards$node_page$node_page_el_$_iter__60851_$_iter__60919_$_iter__60926_$_iter__60932(cljs.core.chunk_rest(s__60933__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60935),null);
}
} else {
var map__60938 = cljs.core.first(s__60933__$2);
var map__60938__$1 = (((((!((map__60938 == null))))?(((((map__60938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60938):map__60938);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60938__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60938__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60938__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__60851_$_iter__60919_$_iter__60926_$_iter__60932(cljs.core.rest(s__60933__$2)));
}
} else {
return null;
}
break;
}
});})(i__60928,i__60921,map__60930,map__60930__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60929,s__60927__$2,temp__5735__auto____$2,vec__60923,group_title,group,c__4580__auto__,size__4581__auto__,b__60922,s__60920__$2,temp__5735__auto____$1,vec__60916,linked_or_unlinked,refs,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid))
,null,null));
});})(i__60928,i__60921,map__60930,map__60930__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60929,s__60927__$2,temp__5735__auto____$2,vec__60923,group_title,group,c__4580__auto__,size__4581__auto__,b__60922,s__60920__$2,temp__5735__auto____$1,vec__60916,linked_or_unlinked,refs,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__60999 = (i__60928 + (1));
i__60928 = G__60999;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60929),athens$devcards$node_page$node_page_el_$_iter__60851_$_iter__60919_$_iter__60926(cljs.core.chunk_rest(s__60927__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60929),null);
}
} else {
var map__60940 = cljs.core.first(s__60927__$2);
var map__60940__$1 = (((((!((map__60940 == null))))?(((((map__60940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60940):map__60940);
var block = map__60940__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60940__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60940__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__60921,map__60940,map__60940__$1,block,uid__$1,parents,s__60927__$2,temp__5735__auto____$2,vec__60923,group_title,group,c__4580__auto__,size__4581__auto__,b__60922,s__60920__$2,temp__5735__auto____$1,vec__60916,linked_or_unlinked,refs,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__60921,map__60940,map__60940__$1,block,uid__$1,parents,s__60927__$2,temp__5735__auto____$2,vec__60923,group_title,group,c__4580__auto__,size__4581__auto__,b__60922,s__60920__$2,temp__5735__auto____$1,vec__60916,linked_or_unlinked,refs,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__60921,map__60940,map__60940__$1,block,uid__$1,parents,s__60927__$2,temp__5735__auto____$2,vec__60923,group_title,group,c__4580__auto__,size__4581__auto__,b__60922,s__60920__$2,temp__5735__auto____$1,vec__60916,linked_or_unlinked,refs,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60851_$_iter__60919_$_iter__60926_$_iter__60942(s__60943){
return (new cljs.core.LazySeq(null,((function (i__60921,map__60940,map__60940__$1,block,uid__$1,parents,s__60927__$2,temp__5735__auto____$2,vec__60923,group_title,group,c__4580__auto__,size__4581__auto__,b__60922,s__60920__$2,temp__5735__auto____$1,vec__60916,linked_or_unlinked,refs,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid){
return (function (){
var s__60943__$1 = s__60943;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60943__$1);
if(temp__5735__auto____$3){
var s__60943__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60943__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__60943__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__60945 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__60944 = (0);
while(true){
if((i__60944 < size__4581__auto____$1)){
var map__60946 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__60944);
var map__60946__$1 = (((((!((map__60946 == null))))?(((((map__60946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60946):map__60946);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60946__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60946__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60946__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60945,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__61000 = (i__60944 + (1));
i__60944 = G__61000;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60945),athens$devcards$node_page$node_page_el_$_iter__60851_$_iter__60919_$_iter__60926_$_iter__60942(cljs.core.chunk_rest(s__60943__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60945),null);
}
} else {
var map__60948 = cljs.core.first(s__60943__$2);
var map__60948__$1 = (((((!((map__60948 == null))))?(((((map__60948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60948):map__60948);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60948__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60948__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60948__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__60851_$_iter__60919_$_iter__60926_$_iter__60942(cljs.core.rest(s__60943__$2)));
}
} else {
return null;
}
break;
}
});})(i__60921,map__60940,map__60940__$1,block,uid__$1,parents,s__60927__$2,temp__5735__auto____$2,vec__60923,group_title,group,c__4580__auto__,size__4581__auto__,b__60922,s__60920__$2,temp__5735__auto____$1,vec__60916,linked_or_unlinked,refs,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid))
,null,null));
});})(i__60921,map__60940,map__60940__$1,block,uid__$1,parents,s__60927__$2,temp__5735__auto____$2,vec__60923,group_title,group,c__4580__auto__,size__4581__auto__,b__60922,s__60920__$2,temp__5735__auto____$1,vec__60916,linked_or_unlinked,refs,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__60851_$_iter__60919_$_iter__60926(cljs.core.rest(s__60927__$2)));
}
} else {
return null;
}
break;
}
});})(i__60921,vec__60923,group_title,group,c__4580__auto__,size__4581__auto__,b__60922,s__60920__$2,temp__5735__auto____$1,vec__60916,linked_or_unlinked,refs,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid))
,null,null));
});})(i__60921,vec__60923,group_title,group,c__4580__auto__,size__4581__auto__,b__60922,s__60920__$2,temp__5735__auto____$1,vec__60916,linked_or_unlinked,refs,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__61001 = (i__60921 + (1));
i__60921 = G__61001;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60922),athens$devcards$node_page$node_page_el_$_iter__60851_$_iter__60919(cljs.core.chunk_rest(s__60920__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60922),null);
}
} else {
var vec__60950 = cljs.core.first(s__60920__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60950,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60950,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (vec__60950,group_title,group,s__60920__$2,temp__5735__auto____$1,vec__60916,linked_or_unlinked,refs,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60851_$_iter__60919_$_iter__60953(s__60954){
return (new cljs.core.LazySeq(null,(function (){
var s__60954__$1 = s__60954;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__60954__$1);
if(temp__5735__auto____$2){
var s__60954__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__60954__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60954__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60956 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60955 = (0);
while(true){
if((i__60955 < size__4581__auto__)){
var map__60957 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60955);
var map__60957__$1 = (((((!((map__60957 == null))))?(((((map__60957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60957):map__60957);
var block = map__60957__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60957__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60957__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__60956,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__60955,map__60957,map__60957__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__60956,s__60954__$2,temp__5735__auto____$2,vec__60950,group_title,group,s__60920__$2,temp__5735__auto____$1,vec__60916,linked_or_unlinked,refs,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__60955,map__60957,map__60957__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__60956,s__60954__$2,temp__5735__auto____$2,vec__60950,group_title,group,s__60920__$2,temp__5735__auto____$1,vec__60916,linked_or_unlinked,refs,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__60955,map__60957,map__60957__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__60956,s__60954__$2,temp__5735__auto____$2,vec__60950,group_title,group,s__60920__$2,temp__5735__auto____$1,vec__60916,linked_or_unlinked,refs,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60851_$_iter__60919_$_iter__60953_$_iter__60959(s__60960){
return (new cljs.core.LazySeq(null,((function (i__60955,map__60957,map__60957__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__60956,s__60954__$2,temp__5735__auto____$2,vec__60950,group_title,group,s__60920__$2,temp__5735__auto____$1,vec__60916,linked_or_unlinked,refs,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid){
return (function (){
var s__60960__$1 = s__60960;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60960__$1);
if(temp__5735__auto____$3){
var s__60960__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60960__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__60960__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__60962 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__60961 = (0);
while(true){
if((i__60961 < size__4581__auto____$1)){
var map__60963 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__60961);
var map__60963__$1 = (((((!((map__60963 == null))))?(((((map__60963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60963):map__60963);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60963__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60963__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60963__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60962,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__61002 = (i__60961 + (1));
i__60961 = G__61002;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60962),athens$devcards$node_page$node_page_el_$_iter__60851_$_iter__60919_$_iter__60953_$_iter__60959(cljs.core.chunk_rest(s__60960__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60962),null);
}
} else {
var map__60965 = cljs.core.first(s__60960__$2);
var map__60965__$1 = (((((!((map__60965 == null))))?(((((map__60965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60965):map__60965);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60965__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60965__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60965__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__60851_$_iter__60919_$_iter__60953_$_iter__60959(cljs.core.rest(s__60960__$2)));
}
} else {
return null;
}
break;
}
});})(i__60955,map__60957,map__60957__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__60956,s__60954__$2,temp__5735__auto____$2,vec__60950,group_title,group,s__60920__$2,temp__5735__auto____$1,vec__60916,linked_or_unlinked,refs,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid))
,null,null));
});})(i__60955,map__60957,map__60957__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__60956,s__60954__$2,temp__5735__auto____$2,vec__60950,group_title,group,s__60920__$2,temp__5735__auto____$1,vec__60916,linked_or_unlinked,refs,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__61003 = (i__60955 + (1));
i__60955 = G__61003;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60956),athens$devcards$node_page$node_page_el_$_iter__60851_$_iter__60919_$_iter__60953(cljs.core.chunk_rest(s__60954__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60956),null);
}
} else {
var map__60967 = cljs.core.first(s__60954__$2);
var map__60967__$1 = (((((!((map__60967 == null))))?(((((map__60967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60967):map__60967);
var block = map__60967__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60967__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60967__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__60967,map__60967__$1,block,uid__$1,parents,s__60954__$2,temp__5735__auto____$2,vec__60950,group_title,group,s__60920__$2,temp__5735__auto____$1,vec__60916,linked_or_unlinked,refs,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(map__60967,map__60967__$1,block,uid__$1,parents,s__60954__$2,temp__5735__auto____$2,vec__60950,group_title,group,s__60920__$2,temp__5735__auto____$1,vec__60916,linked_or_unlinked,refs,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (map__60967,map__60967__$1,block,uid__$1,parents,s__60954__$2,temp__5735__auto____$2,vec__60950,group_title,group,s__60920__$2,temp__5735__auto____$1,vec__60916,linked_or_unlinked,refs,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__60851_$_iter__60919_$_iter__60953_$_iter__60969(s__60970){
return (new cljs.core.LazySeq(null,(function (){
var s__60970__$1 = s__60970;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60970__$1);
if(temp__5735__auto____$3){
var s__60970__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60970__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60970__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60972 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60971 = (0);
while(true){
if((i__60971 < size__4581__auto__)){
var map__60973 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60971);
var map__60973__$1 = (((((!((map__60973 == null))))?(((((map__60973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60973):map__60973);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60973__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60973__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60973__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60972,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__61004 = (i__60971 + (1));
i__60971 = G__61004;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60972),athens$devcards$node_page$node_page_el_$_iter__60851_$_iter__60919_$_iter__60953_$_iter__60969(cljs.core.chunk_rest(s__60970__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60972),null);
}
} else {
var map__60975 = cljs.core.first(s__60970__$2);
var map__60975__$1 = (((((!((map__60975 == null))))?(((((map__60975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60975):map__60975);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60975__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60975__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60975__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__60851_$_iter__60919_$_iter__60953_$_iter__60969(cljs.core.rest(s__60970__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__60967,map__60967__$1,block,uid__$1,parents,s__60954__$2,temp__5735__auto____$2,vec__60950,group_title,group,s__60920__$2,temp__5735__auto____$1,vec__60916,linked_or_unlinked,refs,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__60851_$_iter__60919_$_iter__60953(cljs.core.rest(s__60954__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__60950,group_title,group,s__60920__$2,temp__5735__auto____$1,vec__60916,linked_or_unlinked,refs,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__60851_$_iter__60919(cljs.core.rest(s__60920__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__60916,linked_or_unlinked,refs,s__60852__$2,temp__5735__auto__,map__60839,map__60839__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})())], null),athens$devcards$node_page$node_page_el_$_iter__60851(cljs.core.rest(s__60852__$2)));
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
var editing_uid = cljs.core.deref((function (){var G__60977 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__60977) : re_frame.core.subscribe.call(null,G__60977));
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
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.node_page !== 'undefined') && (typeof athens.devcards.node_page.t_athens$devcards$node_page60978 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.node_page.t_athens$devcards$node_page60978 = (function (meta60979){
this.meta60979 = meta60979;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.node_page.t_athens$devcards$node_page60978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60980,meta60979__$1){
var self__ = this;
var _60980__$1 = this;
return (new athens.devcards.node_page.t_athens$devcards$node_page60978(meta60979__$1));
}));

(athens.devcards.node_page.t_athens$devcards$node_page60978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60980){
var self__ = this;
var _60980__$1 = this;
return self__.meta60979;
}));

(athens.devcards.node_page.t_athens$devcards$node_page60978.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.node_page.t_athens$devcards$node_page60978.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__41676__auto__,devcard_opts__41677__auto__){
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

(athens.devcards.node_page.t_athens$devcards$node_page60978.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60979","meta60979",603189154,null)], null);
}));

(athens.devcards.node_page.t_athens$devcards$node_page60978.cljs$lang$type = true);

(athens.devcards.node_page.t_athens$devcards$node_page60978.cljs$lang$ctorStr = "athens.devcards.node-page/t_athens$devcards$node_page60978");

(athens.devcards.node_page.t_athens$devcards$node_page60978.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.node-page/t_athens$devcards$node_page60978");
}));

/**
 * Positional factory function for athens.devcards.node-page/t_athens$devcards$node_page60978.
 */
athens.devcards.node_page.__GT_t_athens$devcards$node_page60978 = (function athens$devcards$node_page$__GT_t_athens$devcards$node_page60978(meta60979){
return (new athens.devcards.node_page.t_athens$devcards$node_page60978(meta60979));
});

}

return (new athens.devcards.node_page.t_athens$devcards$node_page60978(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.node_page.js.map
