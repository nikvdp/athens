goog.provide('athens.devcards.node_page');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.db');
goog.require('athens.devcards.blocks');
goog.require('athens.devcards.breadcrumbs');
goog.require('athens.devcards.buttons');
goog.require('athens.patterns');
goog.require('athens.router');
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
athens.devcards.node_page.references_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-block","margin-block",1690397674),"3em"], null);
athens.devcards.node_page.references_heading_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 2rem",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"0.25em",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%"], null)], null)], null)], null);
athens.devcards.node_page.references_list_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null);
athens.devcards.node_page.references_group_title_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword(null,"margin","margin",-995903681),"0 1.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a:hover","a:hover",-1474674872),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null)], null);
athens.devcards.node_page.references_group_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527),new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971)),new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 0.5rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.5em 0"], null);
athens.devcards.node_page.reference_breadcrumbs_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem calc(2rem - 0.5em)"], null);
athens.devcards.node_page.references_group_block_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px solid ",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527))], null)], null),new cljs.core.Keyword(null,"padding-block-start","padding-block-start",1054404612),"1em",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"1em",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:first-of-type","&:first-of-type",1836617087),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"0",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"0"], null)], null)], null)], null);
athens.devcards.node_page.handler = (function athens$devcards$node_page$handler(val,uid){
var G__58077 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact-event","transact-event",1188240621),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58077) : re_frame.core.dispatch.call(null,G__58077));
});
athens.devcards.node_page.db_handler = goog.functions.debounce(athens.devcards.node_page.handler,(500));
athens.devcards.node_page.get_ref_ids = (function athens$devcards$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__58078 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__58079 = athens.db.dsdb;
var G__58080 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__58078,G__58079,G__58080) : posh.reagent.q.call(null,G__58078,G__58079,G__58080));
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
athens.devcards.node_page.node_page_el = (function athens$devcards$node_page$node_page_el(p__58081,editing_uid,ref_groups){
var map__58082 = p__58081;
var map__58082__$1 = (((((!((map__58082 == null))))?(((((map__58082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58082):map__58082);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58082__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58082__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58082__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58084 = e.target.value;
var G__58085 = uid;
return (athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58084,G__58085) : athens.devcards.node_page.db_handler.call(null,G__58084,G__58085));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__58086(s__58087){
return (new cljs.core.LazySeq(null,(function (){
var s__58087__$1 = s__58087;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58087__$1);
if(temp__5735__auto__){
var s__58087__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58087__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58087__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58089 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58088 = (0);
while(true){
if((i__58088 < size__4581__auto__)){
var map__58090 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58088);
var map__58090__$1 = (((((!((map__58090 == null))))?(((((map__58090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58090):map__58090);
var child = map__58090__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58090__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58089,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58244 = (i__58088 + (1));
i__58088 = G__58244;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58089),athens$devcards$node_page$node_page_el_$_iter__58086(cljs.core.chunk_rest(s__58087__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58089),null);
}
} else {
var map__58092 = cljs.core.first(s__58087__$2);
var map__58092__$1 = (((((!((map__58092 == null))))?(((((map__58092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58092):map__58092);
var child = map__58092__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58092__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$devcards$node_page$node_page_el_$_iter__58086(cljs.core.rest(s__58087__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__58094(s__58095){
return (new cljs.core.LazySeq(null,(function (){
var s__58095__$1 = s__58095;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58095__$1);
if(temp__5735__auto__){
var s__58095__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58095__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58095__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58097 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58096 = (0);
while(true){
if((i__58096 < size__4581__auto__)){
var vec__58098 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58096);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58098,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58098,(1),null);
cljs.core.chunk_append(b__58097,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (i__58096,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58094_$_iter__58101(s__58102){
return (new cljs.core.LazySeq(null,((function (i__58096,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function (){
var s__58102__$1 = s__58102;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58102__$1);
if(temp__5735__auto____$1){
var s__58102__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58102__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58102__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58104 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58103 = (0);
while(true){
if((i__58103 < size__4581__auto____$1)){
var vec__58105 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58103);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58105,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58105,(1),null);
cljs.core.chunk_append(b__58104,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58103,i__58096,vec__58105,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58104,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58103,i__58096,vec__58105,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58104,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58103,i__58096,vec__58105,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58104,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58094_$_iter__58101_$_iter__58108(s__58109){
return (new cljs.core.LazySeq(null,((function (i__58103,i__58096,vec__58105,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58104,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function (){
var s__58109__$1 = s__58109;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58109__$1);
if(temp__5735__auto____$2){
var s__58109__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58109__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58109__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58111 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58110 = (0);
while(true){
if((i__58110 < size__4581__auto____$2)){
var map__58112 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58110);
var map__58112__$1 = (((((!((map__58112 == null))))?(((((map__58112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58112):map__58112);
var block = map__58112__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58112__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58112__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58111,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58110,i__58103,i__58096,map__58112,map__58112__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58111,s__58109__$2,temp__5735__auto____$2,vec__58105,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58104,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58094_$_iter__58101_$_iter__58108_$_iter__58114(s__58115){
return (new cljs.core.LazySeq(null,((function (i__58110,i__58103,i__58096,map__58112,map__58112__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58111,s__58109__$2,temp__5735__auto____$2,vec__58105,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58104,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function (){
var s__58115__$1 = s__58115;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58115__$1);
if(temp__5735__auto____$3){
var s__58115__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58115__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58115__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58117 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58116 = (0);
while(true){
if((i__58116 < size__4581__auto____$3)){
var map__58118 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58116);
var map__58118__$1 = (((((!((map__58118 == null))))?(((((map__58118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58118):map__58118);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58118__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58118__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58118__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58117,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58116,i__58110,i__58103,i__58096,map__58118,map__58118__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58117,s__58115__$2,temp__5735__auto____$3,map__58112,map__58112__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58111,s__58109__$2,temp__5735__auto____$2,vec__58105,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58104,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58116,i__58110,i__58103,i__58096,map__58118,map__58118__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58117,s__58115__$2,temp__5735__auto____$3,map__58112,map__58112__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58111,s__58109__$2,temp__5735__auto____$2,vec__58105,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58104,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58248 = (i__58116 + (1));
i__58116 = G__58248;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58117),athens$devcards$node_page$node_page_el_$_iter__58094_$_iter__58101_$_iter__58108_$_iter__58114(cljs.core.chunk_rest(s__58115__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58117),null);
}
} else {
var map__58120 = cljs.core.first(s__58115__$2);
var map__58120__$1 = (((((!((map__58120 == null))))?(((((map__58120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58120):map__58120);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58120__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58120__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58120__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58110,i__58103,i__58096,map__58120,map__58120__$1,title__$1,string,uid__$2,s__58115__$2,temp__5735__auto____$3,map__58112,map__58112__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58111,s__58109__$2,temp__5735__auto____$2,vec__58105,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58104,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58110,i__58103,i__58096,map__58120,map__58120__$1,title__$1,string,uid__$2,s__58115__$2,temp__5735__auto____$3,map__58112,map__58112__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58111,s__58109__$2,temp__5735__auto____$2,vec__58105,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58104,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58094_$_iter__58101_$_iter__58108_$_iter__58114(cljs.core.rest(s__58115__$2)));
}
} else {
return null;
}
break;
}
});})(i__58110,i__58103,i__58096,map__58112,map__58112__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58111,s__58109__$2,temp__5735__auto____$2,vec__58105,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58104,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
,null,null));
});})(i__58110,i__58103,i__58096,map__58112,map__58112__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58111,s__58109__$2,temp__5735__auto____$2,vec__58105,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58104,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58249 = (i__58110 + (1));
i__58110 = G__58249;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58111),athens$devcards$node_page$node_page_el_$_iter__58094_$_iter__58101_$_iter__58108(cljs.core.chunk_rest(s__58109__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58111),null);
}
} else {
var map__58122 = cljs.core.first(s__58109__$2);
var map__58122__$1 = (((((!((map__58122 == null))))?(((((map__58122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58122):map__58122);
var block = map__58122__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58122__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58122__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58103,i__58096,map__58122,map__58122__$1,block,uid__$1,parents,s__58109__$2,temp__5735__auto____$2,vec__58105,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58104,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58094_$_iter__58101_$_iter__58108_$_iter__58124(s__58125){
return (new cljs.core.LazySeq(null,((function (i__58103,i__58096,map__58122,map__58122__$1,block,uid__$1,parents,s__58109__$2,temp__5735__auto____$2,vec__58105,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58104,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function (){
var s__58125__$1 = s__58125;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58125__$1);
if(temp__5735__auto____$3){
var s__58125__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58125__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58125__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58127 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58126 = (0);
while(true){
if((i__58126 < size__4581__auto____$2)){
var map__58128 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58126);
var map__58128__$1 = (((((!((map__58128 == null))))?(((((map__58128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58128):map__58128);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58128__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58128__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58128__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58127,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58126,i__58103,i__58096,map__58128,map__58128__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58127,s__58125__$2,temp__5735__auto____$3,map__58122,map__58122__$1,block,uid__$1,parents,s__58109__$2,temp__5735__auto____$2,vec__58105,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58104,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58126,i__58103,i__58096,map__58128,map__58128__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58127,s__58125__$2,temp__5735__auto____$3,map__58122,map__58122__$1,block,uid__$1,parents,s__58109__$2,temp__5735__auto____$2,vec__58105,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58104,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58250 = (i__58126 + (1));
i__58126 = G__58250;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58127),athens$devcards$node_page$node_page_el_$_iter__58094_$_iter__58101_$_iter__58108_$_iter__58124(cljs.core.chunk_rest(s__58125__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58127),null);
}
} else {
var map__58130 = cljs.core.first(s__58125__$2);
var map__58130__$1 = (((((!((map__58130 == null))))?(((((map__58130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58130):map__58130);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58130__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58130__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58130__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58103,i__58096,map__58130,map__58130__$1,title__$1,string,uid__$2,s__58125__$2,temp__5735__auto____$3,map__58122,map__58122__$1,block,uid__$1,parents,s__58109__$2,temp__5735__auto____$2,vec__58105,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58104,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58103,i__58096,map__58130,map__58130__$1,title__$1,string,uid__$2,s__58125__$2,temp__5735__auto____$3,map__58122,map__58122__$1,block,uid__$1,parents,s__58109__$2,temp__5735__auto____$2,vec__58105,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58104,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58094_$_iter__58101_$_iter__58108_$_iter__58124(cljs.core.rest(s__58125__$2)));
}
} else {
return null;
}
break;
}
});})(i__58103,i__58096,map__58122,map__58122__$1,block,uid__$1,parents,s__58109__$2,temp__5735__auto____$2,vec__58105,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58104,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
,null,null));
});})(i__58103,i__58096,map__58122,map__58122__$1,block,uid__$1,parents,s__58109__$2,temp__5735__auto____$2,vec__58105,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58104,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__58094_$_iter__58101_$_iter__58108(cljs.core.rest(s__58109__$2)));
}
} else {
return null;
}
break;
}
});})(i__58103,i__58096,vec__58105,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58104,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
,null,null));
});})(i__58103,i__58096,vec__58105,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58104,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58251 = (i__58103 + (1));
i__58103 = G__58251;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58104),athens$devcards$node_page$node_page_el_$_iter__58094_$_iter__58101(cljs.core.chunk_rest(s__58102__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58104),null);
}
} else {
var vec__58132 = cljs.core.first(s__58102__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58132,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58132,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58096,vec__58132,group_title,group,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58096,vec__58132,group_title,group,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58096,vec__58132,group_title,group,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58094_$_iter__58101_$_iter__58135(s__58136){
return (new cljs.core.LazySeq(null,((function (i__58096,vec__58132,group_title,group,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function (){
var s__58136__$1 = s__58136;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58136__$1);
if(temp__5735__auto____$2){
var s__58136__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58136__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58136__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58138 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58137 = (0);
while(true){
if((i__58137 < size__4581__auto____$1)){
var map__58139 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58137);
var map__58139__$1 = (((((!((map__58139 == null))))?(((((map__58139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58139):map__58139);
var block = map__58139__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58139__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58139__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58138,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58137,i__58096,map__58139,map__58139__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58138,s__58136__$2,temp__5735__auto____$2,vec__58132,group_title,group,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58094_$_iter__58101_$_iter__58135_$_iter__58141(s__58142){
return (new cljs.core.LazySeq(null,((function (i__58137,i__58096,map__58139,map__58139__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58138,s__58136__$2,temp__5735__auto____$2,vec__58132,group_title,group,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function (){
var s__58142__$1 = s__58142;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58142__$1);
if(temp__5735__auto____$3){
var s__58142__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58142__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58142__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58144 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58143 = (0);
while(true){
if((i__58143 < size__4581__auto____$2)){
var map__58145 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58143);
var map__58145__$1 = (((((!((map__58145 == null))))?(((((map__58145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58145):map__58145);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58145__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58145__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58145__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58144,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58143,i__58137,i__58096,map__58145,map__58145__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58144,s__58142__$2,temp__5735__auto____$3,map__58139,map__58139__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58138,s__58136__$2,temp__5735__auto____$2,vec__58132,group_title,group,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58143,i__58137,i__58096,map__58145,map__58145__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58144,s__58142__$2,temp__5735__auto____$3,map__58139,map__58139__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58138,s__58136__$2,temp__5735__auto____$2,vec__58132,group_title,group,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58252 = (i__58143 + (1));
i__58143 = G__58252;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58144),athens$devcards$node_page$node_page_el_$_iter__58094_$_iter__58101_$_iter__58135_$_iter__58141(cljs.core.chunk_rest(s__58142__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58144),null);
}
} else {
var map__58147 = cljs.core.first(s__58142__$2);
var map__58147__$1 = (((((!((map__58147 == null))))?(((((map__58147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58147):map__58147);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58147__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58147__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58147__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58137,i__58096,map__58147,map__58147__$1,title__$1,string,uid__$2,s__58142__$2,temp__5735__auto____$3,map__58139,map__58139__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58138,s__58136__$2,temp__5735__auto____$2,vec__58132,group_title,group,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58137,i__58096,map__58147,map__58147__$1,title__$1,string,uid__$2,s__58142__$2,temp__5735__auto____$3,map__58139,map__58139__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58138,s__58136__$2,temp__5735__auto____$2,vec__58132,group_title,group,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58094_$_iter__58101_$_iter__58135_$_iter__58141(cljs.core.rest(s__58142__$2)));
}
} else {
return null;
}
break;
}
});})(i__58137,i__58096,map__58139,map__58139__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58138,s__58136__$2,temp__5735__auto____$2,vec__58132,group_title,group,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
,null,null));
});})(i__58137,i__58096,map__58139,map__58139__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58138,s__58136__$2,temp__5735__auto____$2,vec__58132,group_title,group,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58253 = (i__58137 + (1));
i__58137 = G__58253;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58138),athens$devcards$node_page$node_page_el_$_iter__58094_$_iter__58101_$_iter__58135(cljs.core.chunk_rest(s__58136__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58138),null);
}
} else {
var map__58149 = cljs.core.first(s__58136__$2);
var map__58149__$1 = (((((!((map__58149 == null))))?(((((map__58149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58149):map__58149);
var block = map__58149__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58149__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58149__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58096,map__58149,map__58149__$1,block,uid__$1,parents,s__58136__$2,temp__5735__auto____$2,vec__58132,group_title,group,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58094_$_iter__58101_$_iter__58135_$_iter__58151(s__58152){
return (new cljs.core.LazySeq(null,((function (i__58096,map__58149,map__58149__$1,block,uid__$1,parents,s__58136__$2,temp__5735__auto____$2,vec__58132,group_title,group,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function (){
var s__58152__$1 = s__58152;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58152__$1);
if(temp__5735__auto____$3){
var s__58152__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58152__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58152__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58154 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58153 = (0);
while(true){
if((i__58153 < size__4581__auto____$1)){
var map__58155 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58153);
var map__58155__$1 = (((((!((map__58155 == null))))?(((((map__58155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58155):map__58155);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58155__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58155__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58155__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58154,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58153,i__58096,map__58155,map__58155__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58154,s__58152__$2,temp__5735__auto____$3,map__58149,map__58149__$1,block,uid__$1,parents,s__58136__$2,temp__5735__auto____$2,vec__58132,group_title,group,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58153,i__58096,map__58155,map__58155__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58154,s__58152__$2,temp__5735__auto____$3,map__58149,map__58149__$1,block,uid__$1,parents,s__58136__$2,temp__5735__auto____$2,vec__58132,group_title,group,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58254 = (i__58153 + (1));
i__58153 = G__58254;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58154),athens$devcards$node_page$node_page_el_$_iter__58094_$_iter__58101_$_iter__58135_$_iter__58151(cljs.core.chunk_rest(s__58152__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58154),null);
}
} else {
var map__58157 = cljs.core.first(s__58152__$2);
var map__58157__$1 = (((((!((map__58157 == null))))?(((((map__58157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58157):map__58157);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58157__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58157__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58157__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58096,map__58157,map__58157__$1,title__$1,string,uid__$2,s__58152__$2,temp__5735__auto____$3,map__58149,map__58149__$1,block,uid__$1,parents,s__58136__$2,temp__5735__auto____$2,vec__58132,group_title,group,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58096,map__58157,map__58157__$1,title__$1,string,uid__$2,s__58152__$2,temp__5735__auto____$3,map__58149,map__58149__$1,block,uid__$1,parents,s__58136__$2,temp__5735__auto____$2,vec__58132,group_title,group,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58094_$_iter__58101_$_iter__58135_$_iter__58151(cljs.core.rest(s__58152__$2)));
}
} else {
return null;
}
break;
}
});})(i__58096,map__58149,map__58149__$1,block,uid__$1,parents,s__58136__$2,temp__5735__auto____$2,vec__58132,group_title,group,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
,null,null));
});})(i__58096,map__58149,map__58149__$1,block,uid__$1,parents,s__58136__$2,temp__5735__auto____$2,vec__58132,group_title,group,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__58094_$_iter__58101_$_iter__58135(cljs.core.rest(s__58136__$2)));
}
} else {
return null;
}
break;
}
});})(i__58096,vec__58132,group_title,group,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
,null,null));
});})(i__58096,vec__58132,group_title,group,s__58102__$2,temp__5735__auto____$1,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__58094_$_iter__58101(cljs.core.rest(s__58102__$2)));
}
} else {
return null;
}
break;
}
});})(i__58096,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
,null,null));
});})(i__58096,vec__58098,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58097,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null));

var G__58255 = (i__58096 + (1));
i__58096 = G__58255;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58097),athens$devcards$node_page$node_page_el_$_iter__58094(cljs.core.chunk_rest(s__58095__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58097),null);
}
} else {
var vec__58159 = cljs.core.first(s__58095__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58159,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58159,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (vec__58159,linked_or_unlinked,refs,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58094_$_iter__58162(s__58163){
return (new cljs.core.LazySeq(null,(function (){
var s__58163__$1 = s__58163;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58163__$1);
if(temp__5735__auto____$1){
var s__58163__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58163__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58163__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58165 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58164 = (0);
while(true){
if((i__58164 < size__4581__auto__)){
var vec__58166 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58164);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58166,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58166,(1),null);
cljs.core.chunk_append(b__58165,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58164,vec__58166,group_title,group,c__4580__auto__,size__4581__auto__,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58164,vec__58166,group_title,group,c__4580__auto__,size__4581__auto__,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58164,vec__58166,group_title,group,c__4580__auto__,size__4581__auto__,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58094_$_iter__58162_$_iter__58169(s__58170){
return (new cljs.core.LazySeq(null,((function (i__58164,vec__58166,group_title,group,c__4580__auto__,size__4581__auto__,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function (){
var s__58170__$1 = s__58170;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58170__$1);
if(temp__5735__auto____$2){
var s__58170__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58170__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58170__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58172 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58171 = (0);
while(true){
if((i__58171 < size__4581__auto____$1)){
var map__58173 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58171);
var map__58173__$1 = (((((!((map__58173 == null))))?(((((map__58173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58173):map__58173);
var block = map__58173__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58173__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58173__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58172,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58171,i__58164,map__58173,map__58173__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58172,s__58170__$2,temp__5735__auto____$2,vec__58166,group_title,group,c__4580__auto__,size__4581__auto__,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58094_$_iter__58162_$_iter__58169_$_iter__58175(s__58176){
return (new cljs.core.LazySeq(null,((function (i__58171,i__58164,map__58173,map__58173__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58172,s__58170__$2,temp__5735__auto____$2,vec__58166,group_title,group,c__4580__auto__,size__4581__auto__,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function (){
var s__58176__$1 = s__58176;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58176__$1);
if(temp__5735__auto____$3){
var s__58176__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58176__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58176__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58178 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58177 = (0);
while(true){
if((i__58177 < size__4581__auto____$2)){
var map__58179 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58177);
var map__58179__$1 = (((((!((map__58179 == null))))?(((((map__58179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58179):map__58179);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58179__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58179__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58179__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58178,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58177,i__58171,i__58164,map__58179,map__58179__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58178,s__58176__$2,temp__5735__auto____$3,map__58173,map__58173__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58172,s__58170__$2,temp__5735__auto____$2,vec__58166,group_title,group,c__4580__auto__,size__4581__auto__,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58177,i__58171,i__58164,map__58179,map__58179__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58178,s__58176__$2,temp__5735__auto____$3,map__58173,map__58173__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58172,s__58170__$2,temp__5735__auto____$2,vec__58166,group_title,group,c__4580__auto__,size__4581__auto__,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58256 = (i__58177 + (1));
i__58177 = G__58256;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58178),athens$devcards$node_page$node_page_el_$_iter__58094_$_iter__58162_$_iter__58169_$_iter__58175(cljs.core.chunk_rest(s__58176__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58178),null);
}
} else {
var map__58181 = cljs.core.first(s__58176__$2);
var map__58181__$1 = (((((!((map__58181 == null))))?(((((map__58181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58181):map__58181);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58181__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58181__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58181__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58171,i__58164,map__58181,map__58181__$1,title__$1,string,uid__$2,s__58176__$2,temp__5735__auto____$3,map__58173,map__58173__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58172,s__58170__$2,temp__5735__auto____$2,vec__58166,group_title,group,c__4580__auto__,size__4581__auto__,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58171,i__58164,map__58181,map__58181__$1,title__$1,string,uid__$2,s__58176__$2,temp__5735__auto____$3,map__58173,map__58173__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58172,s__58170__$2,temp__5735__auto____$2,vec__58166,group_title,group,c__4580__auto__,size__4581__auto__,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58094_$_iter__58162_$_iter__58169_$_iter__58175(cljs.core.rest(s__58176__$2)));
}
} else {
return null;
}
break;
}
});})(i__58171,i__58164,map__58173,map__58173__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58172,s__58170__$2,temp__5735__auto____$2,vec__58166,group_title,group,c__4580__auto__,size__4581__auto__,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
,null,null));
});})(i__58171,i__58164,map__58173,map__58173__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58172,s__58170__$2,temp__5735__auto____$2,vec__58166,group_title,group,c__4580__auto__,size__4581__auto__,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58257 = (i__58171 + (1));
i__58171 = G__58257;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58172),athens$devcards$node_page$node_page_el_$_iter__58094_$_iter__58162_$_iter__58169(cljs.core.chunk_rest(s__58170__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58172),null);
}
} else {
var map__58183 = cljs.core.first(s__58170__$2);
var map__58183__$1 = (((((!((map__58183 == null))))?(((((map__58183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58183):map__58183);
var block = map__58183__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58183__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58183__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58164,map__58183,map__58183__$1,block,uid__$1,parents,s__58170__$2,temp__5735__auto____$2,vec__58166,group_title,group,c__4580__auto__,size__4581__auto__,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58094_$_iter__58162_$_iter__58169_$_iter__58185(s__58186){
return (new cljs.core.LazySeq(null,((function (i__58164,map__58183,map__58183__$1,block,uid__$1,parents,s__58170__$2,temp__5735__auto____$2,vec__58166,group_title,group,c__4580__auto__,size__4581__auto__,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function (){
var s__58186__$1 = s__58186;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58186__$1);
if(temp__5735__auto____$3){
var s__58186__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58186__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58186__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58188 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58187 = (0);
while(true){
if((i__58187 < size__4581__auto____$1)){
var map__58189 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58187);
var map__58189__$1 = (((((!((map__58189 == null))))?(((((map__58189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58189):map__58189);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58189__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58189__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58189__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58188,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58187,i__58164,map__58189,map__58189__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58188,s__58186__$2,temp__5735__auto____$3,map__58183,map__58183__$1,block,uid__$1,parents,s__58170__$2,temp__5735__auto____$2,vec__58166,group_title,group,c__4580__auto__,size__4581__auto__,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58187,i__58164,map__58189,map__58189__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58188,s__58186__$2,temp__5735__auto____$3,map__58183,map__58183__$1,block,uid__$1,parents,s__58170__$2,temp__5735__auto____$2,vec__58166,group_title,group,c__4580__auto__,size__4581__auto__,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58258 = (i__58187 + (1));
i__58187 = G__58258;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58188),athens$devcards$node_page$node_page_el_$_iter__58094_$_iter__58162_$_iter__58169_$_iter__58185(cljs.core.chunk_rest(s__58186__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58188),null);
}
} else {
var map__58191 = cljs.core.first(s__58186__$2);
var map__58191__$1 = (((((!((map__58191 == null))))?(((((map__58191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58191):map__58191);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58191__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58191__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58191__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58164,map__58191,map__58191__$1,title__$1,string,uid__$2,s__58186__$2,temp__5735__auto____$3,map__58183,map__58183__$1,block,uid__$1,parents,s__58170__$2,temp__5735__auto____$2,vec__58166,group_title,group,c__4580__auto__,size__4581__auto__,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58164,map__58191,map__58191__$1,title__$1,string,uid__$2,s__58186__$2,temp__5735__auto____$3,map__58183,map__58183__$1,block,uid__$1,parents,s__58170__$2,temp__5735__auto____$2,vec__58166,group_title,group,c__4580__auto__,size__4581__auto__,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58094_$_iter__58162_$_iter__58169_$_iter__58185(cljs.core.rest(s__58186__$2)));
}
} else {
return null;
}
break;
}
});})(i__58164,map__58183,map__58183__$1,block,uid__$1,parents,s__58170__$2,temp__5735__auto____$2,vec__58166,group_title,group,c__4580__auto__,size__4581__auto__,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
,null,null));
});})(i__58164,map__58183,map__58183__$1,block,uid__$1,parents,s__58170__$2,temp__5735__auto____$2,vec__58166,group_title,group,c__4580__auto__,size__4581__auto__,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__58094_$_iter__58162_$_iter__58169(cljs.core.rest(s__58170__$2)));
}
} else {
return null;
}
break;
}
});})(i__58164,vec__58166,group_title,group,c__4580__auto__,size__4581__auto__,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
,null,null));
});})(i__58164,vec__58166,group_title,group,c__4580__auto__,size__4581__auto__,b__58165,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58259 = (i__58164 + (1));
i__58164 = G__58259;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58165),athens$devcards$node_page$node_page_el_$_iter__58094_$_iter__58162(cljs.core.chunk_rest(s__58163__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58165),null);
}
} else {
var vec__58193 = cljs.core.first(s__58163__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58193,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58193,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58193,group_title,group,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__58193,group_title,group,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (vec__58193,group_title,group,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58094_$_iter__58162_$_iter__58196(s__58197){
return (new cljs.core.LazySeq(null,(function (){
var s__58197__$1 = s__58197;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58197__$1);
if(temp__5735__auto____$2){
var s__58197__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58197__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58197__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58199 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58198 = (0);
while(true){
if((i__58198 < size__4581__auto__)){
var map__58200 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58198);
var map__58200__$1 = (((((!((map__58200 == null))))?(((((map__58200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58200):map__58200);
var block = map__58200__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58200__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58200__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58199,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58198,map__58200,map__58200__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58199,s__58197__$2,temp__5735__auto____$2,vec__58193,group_title,group,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58094_$_iter__58162_$_iter__58196_$_iter__58202(s__58203){
return (new cljs.core.LazySeq(null,((function (i__58198,map__58200,map__58200__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58199,s__58197__$2,temp__5735__auto____$2,vec__58193,group_title,group,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function (){
var s__58203__$1 = s__58203;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58203__$1);
if(temp__5735__auto____$3){
var s__58203__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58203__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58203__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58205 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58204 = (0);
while(true){
if((i__58204 < size__4581__auto____$1)){
var map__58206 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58204);
var map__58206__$1 = (((((!((map__58206 == null))))?(((((map__58206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58206):map__58206);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58206__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58206__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58206__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58205,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58204,i__58198,map__58206,map__58206__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58205,s__58203__$2,temp__5735__auto____$3,map__58200,map__58200__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58199,s__58197__$2,temp__5735__auto____$2,vec__58193,group_title,group,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58204,i__58198,map__58206,map__58206__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58205,s__58203__$2,temp__5735__auto____$3,map__58200,map__58200__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58199,s__58197__$2,temp__5735__auto____$2,vec__58193,group_title,group,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58260 = (i__58204 + (1));
i__58204 = G__58260;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58205),athens$devcards$node_page$node_page_el_$_iter__58094_$_iter__58162_$_iter__58196_$_iter__58202(cljs.core.chunk_rest(s__58203__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58205),null);
}
} else {
var map__58208 = cljs.core.first(s__58203__$2);
var map__58208__$1 = (((((!((map__58208 == null))))?(((((map__58208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58208):map__58208);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58208__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58208__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58208__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58198,map__58208,map__58208__$1,title__$1,string,uid__$2,s__58203__$2,temp__5735__auto____$3,map__58200,map__58200__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58199,s__58197__$2,temp__5735__auto____$2,vec__58193,group_title,group,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58198,map__58208,map__58208__$1,title__$1,string,uid__$2,s__58203__$2,temp__5735__auto____$3,map__58200,map__58200__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58199,s__58197__$2,temp__5735__auto____$2,vec__58193,group_title,group,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58094_$_iter__58162_$_iter__58196_$_iter__58202(cljs.core.rest(s__58203__$2)));
}
} else {
return null;
}
break;
}
});})(i__58198,map__58200,map__58200__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58199,s__58197__$2,temp__5735__auto____$2,vec__58193,group_title,group,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
,null,null));
});})(i__58198,map__58200,map__58200__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58199,s__58197__$2,temp__5735__auto____$2,vec__58193,group_title,group,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58261 = (i__58198 + (1));
i__58198 = G__58261;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58199),athens$devcards$node_page$node_page_el_$_iter__58094_$_iter__58162_$_iter__58196(cljs.core.chunk_rest(s__58197__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58199),null);
}
} else {
var map__58210 = cljs.core.first(s__58197__$2);
var map__58210__$1 = (((((!((map__58210 == null))))?(((((map__58210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58210):map__58210);
var block = map__58210__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58210__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58210__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (map__58210,map__58210__$1,block,uid__$1,parents,s__58197__$2,temp__5735__auto____$2,vec__58193,group_title,group,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58094_$_iter__58162_$_iter__58196_$_iter__58212(s__58213){
return (new cljs.core.LazySeq(null,(function (){
var s__58213__$1 = s__58213;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58213__$1);
if(temp__5735__auto____$3){
var s__58213__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58213__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58213__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58215 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58214 = (0);
while(true){
if((i__58214 < size__4581__auto__)){
var map__58216 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58214);
var map__58216__$1 = (((((!((map__58216 == null))))?(((((map__58216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58216):map__58216);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58216__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58216__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58216__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58215,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58214,map__58216,map__58216__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58215,s__58213__$2,temp__5735__auto____$3,map__58210,map__58210__$1,block,uid__$1,parents,s__58197__$2,temp__5735__auto____$2,vec__58193,group_title,group,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58214,map__58216,map__58216__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58215,s__58213__$2,temp__5735__auto____$3,map__58210,map__58210__$1,block,uid__$1,parents,s__58197__$2,temp__5735__auto____$2,vec__58193,group_title,group,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58262 = (i__58214 + (1));
i__58214 = G__58262;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58215),athens$devcards$node_page$node_page_el_$_iter__58094_$_iter__58162_$_iter__58196_$_iter__58212(cljs.core.chunk_rest(s__58213__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58215),null);
}
} else {
var map__58218 = cljs.core.first(s__58213__$2);
var map__58218__$1 = (((((!((map__58218 == null))))?(((((map__58218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58218):map__58218);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58218__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58218__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58218__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__58218,map__58218__$1,title__$1,string,uid__$2,s__58213__$2,temp__5735__auto____$3,map__58210,map__58210__$1,block,uid__$1,parents,s__58197__$2,temp__5735__auto____$2,vec__58193,group_title,group,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__58218,map__58218__$1,title__$1,string,uid__$2,s__58213__$2,temp__5735__auto____$3,map__58210,map__58210__$1,block,uid__$1,parents,s__58197__$2,temp__5735__auto____$2,vec__58193,group_title,group,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58094_$_iter__58162_$_iter__58196_$_iter__58212(cljs.core.rest(s__58213__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58210,map__58210__$1,block,uid__$1,parents,s__58197__$2,temp__5735__auto____$2,vec__58193,group_title,group,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__58094_$_iter__58162_$_iter__58196(cljs.core.rest(s__58197__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58193,group_title,group,s__58163__$2,temp__5735__auto____$1,vec__58159,linked_or_unlinked,refs,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__58094_$_iter__58162(cljs.core.rest(s__58163__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58159,linked_or_unlinked,refs,s__58095__$2,temp__5735__auto__,map__58082,map__58082__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null),athens$devcards$node_page$node_page_el_$_iter__58094(cljs.core.rest(s__58095__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(ref_groups);
})())], null);
});
/**
 * One diff between datascript and posh: we don't have pull in q for posh
 *   https://github.com/mpdairy/posh/issues/21
 */
athens.devcards.node_page.node_page_component = (function athens$devcards$node_page$node_page_component(ident){
var node = athens.db.sort_block(cljs.core.deref((posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(athens.db.dsdb,athens.db.node_pull_pattern,ident) : posh.reagent.pull.call(null,athens.db.dsdb,athens.db.node_pull_pattern,ident))));
var title = new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(node);
var editing_uid = cljs.core.deref((function (){var G__58220 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58220) : re_frame.core.subscribe.call(null,G__58220));
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
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.node_page !== 'undefined') && (typeof athens.devcards.node_page.t_athens$devcards$node_page58221 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.node_page.t_athens$devcards$node_page58221 = (function (meta58222){
this.meta58222 = meta58222;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.node_page.t_athens$devcards$node_page58221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58223,meta58222__$1){
var self__ = this;
var _58223__$1 = this;
return (new athens.devcards.node_page.t_athens$devcards$node_page58221(meta58222__$1));
}));

(athens.devcards.node_page.t_athens$devcards$node_page58221.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58223){
var self__ = this;
var _58223__$1 = this;
return self__.meta58222;
}));

(athens.devcards.node_page.t_athens$devcards$node_page58221.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.node_page.t_athens$devcards$node_page58221.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__41676__auto__,devcard_opts__41677__auto__){
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

(athens.devcards.node_page.t_athens$devcards$node_page58221.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58222","meta58222",-993434890,null)], null);
}));

(athens.devcards.node_page.t_athens$devcards$node_page58221.cljs$lang$type = true);

(athens.devcards.node_page.t_athens$devcards$node_page58221.cljs$lang$ctorStr = "athens.devcards.node-page/t_athens$devcards$node_page58221");

(athens.devcards.node_page.t_athens$devcards$node_page58221.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.node-page/t_athens$devcards$node_page58221");
}));

/**
 * Positional factory function for athens.devcards.node-page/t_athens$devcards$node_page58221.
 */
athens.devcards.node_page.__GT_t_athens$devcards$node_page58221 = (function athens$devcards$node_page$__GT_t_athens$devcards$node_page58221(meta58222){
return (new athens.devcards.node_page.t_athens$devcards$node_page58221(meta58222));
});

}

return (new athens.devcards.node_page.t_athens$devcards$node_page58221(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.node_page.js.map
