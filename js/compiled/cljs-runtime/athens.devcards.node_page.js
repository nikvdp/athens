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
var G__65786 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact-event","transact-event",1188240621),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__65786) : re_frame.core.dispatch.call(null,G__65786));
});
athens.devcards.node_page.db_handler = goog.functions.debounce(athens.devcards.node_page.handler,(500));
athens.devcards.node_page.get_ref_ids = (function athens$devcards$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__65787 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__65788 = athens.db.dsdb;
var G__65789 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__65787,G__65788,G__65789) : posh.reagent.q.call(null,G__65787,G__65788,G__65789));
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
athens.devcards.node_page.node_page_el = (function athens$devcards$node_page$node_page_el(p__65790,editing_uid,ref_groups){
var map__65791 = p__65790;
var map__65791__$1 = (((((!((map__65791 == null))))?(((((map__65791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65791):map__65791);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65791__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65791__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65791__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__65793 = e.target.value;
var G__65794 = uid;
return (athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__65793,G__65794) : athens.devcards.node_page.db_handler.call(null,G__65793,G__65794));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__65795(s__65796){
return (new cljs.core.LazySeq(null,(function (){
var s__65796__$1 = s__65796;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65796__$1);
if(temp__5735__auto__){
var s__65796__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65796__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65796__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65798 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65797 = (0);
while(true){
if((i__65797 < size__4581__auto__)){
var map__65799 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65797);
var map__65799__$1 = (((((!((map__65799 == null))))?(((((map__65799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65799):map__65799);
var child = map__65799__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65799__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65798,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__65947 = (i__65797 + (1));
i__65797 = G__65947;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65798),athens$devcards$node_page$node_page_el_$_iter__65795(cljs.core.chunk_rest(s__65796__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65798),null);
}
} else {
var map__65801 = cljs.core.first(s__65796__$2);
var map__65801__$1 = (((((!((map__65801 == null))))?(((((map__65801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65801):map__65801);
var child = map__65801__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65801__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$devcards$node_page$node_page_el_$_iter__65795(cljs.core.rest(s__65796__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__65803(s__65804){
return (new cljs.core.LazySeq(null,(function (){
var s__65804__$1 = s__65804;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65804__$1);
if(temp__5735__auto__){
var s__65804__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65804__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65804__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65806 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65805 = (0);
while(true){
if((i__65805 < size__4581__auto__)){
var vec__65807 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65805);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65807,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65807,(1),null);
cljs.core.chunk_append(b__65806,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (i__65805,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65803_$_iter__65810(s__65811){
return (new cljs.core.LazySeq(null,((function (i__65805,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function (){
var s__65811__$1 = s__65811;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__65811__$1);
if(temp__5735__auto____$1){
var s__65811__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__65811__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65811__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65813 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65812 = (0);
while(true){
if((i__65812 < size__4581__auto____$1)){
var vec__65814 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65812);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65814,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65814,(1),null);
cljs.core.chunk_append(b__65813,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65812,i__65805,vec__65814,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65813,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__65812,i__65805,vec__65814,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65813,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__65812,i__65805,vec__65814,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65813,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65803_$_iter__65810_$_iter__65817(s__65818){
return (new cljs.core.LazySeq(null,((function (i__65812,i__65805,vec__65814,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65813,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function (){
var s__65818__$1 = s__65818;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65818__$1);
if(temp__5735__auto____$2){
var s__65818__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65818__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__65818__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__65820 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__65819 = (0);
while(true){
if((i__65819 < size__4581__auto____$2)){
var map__65821 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__65819);
var map__65821__$1 = (((((!((map__65821 == null))))?(((((map__65821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65821):map__65821);
var block = map__65821__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65821__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65821__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__65820,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65819,i__65812,i__65805,map__65821,map__65821__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65820,s__65818__$2,temp__5735__auto____$2,vec__65814,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65813,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65803_$_iter__65810_$_iter__65817_$_iter__65823(s__65824){
return (new cljs.core.LazySeq(null,((function (i__65819,i__65812,i__65805,map__65821,map__65821__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65820,s__65818__$2,temp__5735__auto____$2,vec__65814,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65813,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function (){
var s__65824__$1 = s__65824;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65824__$1);
if(temp__5735__auto____$3){
var s__65824__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65824__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__65824__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__65826 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__65825 = (0);
while(true){
if((i__65825 < size__4581__auto____$3)){
var map__65827 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__65825);
var map__65827__$1 = (((((!((map__65827 == null))))?(((((map__65827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65827):map__65827);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65827__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65827__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65827__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65826,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65825,i__65819,i__65812,i__65805,map__65827,map__65827__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__65826,s__65824__$2,temp__5735__auto____$3,map__65821,map__65821__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65820,s__65818__$2,temp__5735__auto____$2,vec__65814,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65813,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65825,i__65819,i__65812,i__65805,map__65827,map__65827__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__65826,s__65824__$2,temp__5735__auto____$3,map__65821,map__65821__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65820,s__65818__$2,temp__5735__auto____$2,vec__65814,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65813,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65951 = (i__65825 + (1));
i__65825 = G__65951;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65826),athens$devcards$node_page$node_page_el_$_iter__65803_$_iter__65810_$_iter__65817_$_iter__65823(cljs.core.chunk_rest(s__65824__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65826),null);
}
} else {
var map__65829 = cljs.core.first(s__65824__$2);
var map__65829__$1 = (((((!((map__65829 == null))))?(((((map__65829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65829):map__65829);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65829__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65829__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65829__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65819,i__65812,i__65805,map__65829,map__65829__$1,title__$1,string,uid__$2,s__65824__$2,temp__5735__auto____$3,map__65821,map__65821__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65820,s__65818__$2,temp__5735__auto____$2,vec__65814,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65813,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65819,i__65812,i__65805,map__65829,map__65829__$1,title__$1,string,uid__$2,s__65824__$2,temp__5735__auto____$3,map__65821,map__65821__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65820,s__65818__$2,temp__5735__auto____$2,vec__65814,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65813,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65803_$_iter__65810_$_iter__65817_$_iter__65823(cljs.core.rest(s__65824__$2)));
}
} else {
return null;
}
break;
}
});})(i__65819,i__65812,i__65805,map__65821,map__65821__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65820,s__65818__$2,temp__5735__auto____$2,vec__65814,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65813,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
,null,null));
});})(i__65819,i__65812,i__65805,map__65821,map__65821__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65820,s__65818__$2,temp__5735__auto____$2,vec__65814,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65813,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__65952 = (i__65819 + (1));
i__65819 = G__65952;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65820),athens$devcards$node_page$node_page_el_$_iter__65803_$_iter__65810_$_iter__65817(cljs.core.chunk_rest(s__65818__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65820),null);
}
} else {
var map__65831 = cljs.core.first(s__65818__$2);
var map__65831__$1 = (((((!((map__65831 == null))))?(((((map__65831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65831):map__65831);
var block = map__65831__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65831__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65831__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65812,i__65805,map__65831,map__65831__$1,block,uid__$1,parents,s__65818__$2,temp__5735__auto____$2,vec__65814,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65813,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65803_$_iter__65810_$_iter__65817_$_iter__65833(s__65834){
return (new cljs.core.LazySeq(null,((function (i__65812,i__65805,map__65831,map__65831__$1,block,uid__$1,parents,s__65818__$2,temp__5735__auto____$2,vec__65814,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65813,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function (){
var s__65834__$1 = s__65834;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65834__$1);
if(temp__5735__auto____$3){
var s__65834__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65834__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__65834__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__65836 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__65835 = (0);
while(true){
if((i__65835 < size__4581__auto____$2)){
var map__65837 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__65835);
var map__65837__$1 = (((((!((map__65837 == null))))?(((((map__65837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65837):map__65837);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65837__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65837__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65837__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65836,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65835,i__65812,i__65805,map__65837,map__65837__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65836,s__65834__$2,temp__5735__auto____$3,map__65831,map__65831__$1,block,uid__$1,parents,s__65818__$2,temp__5735__auto____$2,vec__65814,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65813,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65835,i__65812,i__65805,map__65837,map__65837__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65836,s__65834__$2,temp__5735__auto____$3,map__65831,map__65831__$1,block,uid__$1,parents,s__65818__$2,temp__5735__auto____$2,vec__65814,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65813,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65953 = (i__65835 + (1));
i__65835 = G__65953;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65836),athens$devcards$node_page$node_page_el_$_iter__65803_$_iter__65810_$_iter__65817_$_iter__65833(cljs.core.chunk_rest(s__65834__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65836),null);
}
} else {
var map__65839 = cljs.core.first(s__65834__$2);
var map__65839__$1 = (((((!((map__65839 == null))))?(((((map__65839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65839):map__65839);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65839__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65839__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65839__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65812,i__65805,map__65839,map__65839__$1,title__$1,string,uid__$2,s__65834__$2,temp__5735__auto____$3,map__65831,map__65831__$1,block,uid__$1,parents,s__65818__$2,temp__5735__auto____$2,vec__65814,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65813,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65812,i__65805,map__65839,map__65839__$1,title__$1,string,uid__$2,s__65834__$2,temp__5735__auto____$3,map__65831,map__65831__$1,block,uid__$1,parents,s__65818__$2,temp__5735__auto____$2,vec__65814,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65813,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65803_$_iter__65810_$_iter__65817_$_iter__65833(cljs.core.rest(s__65834__$2)));
}
} else {
return null;
}
break;
}
});})(i__65812,i__65805,map__65831,map__65831__$1,block,uid__$1,parents,s__65818__$2,temp__5735__auto____$2,vec__65814,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65813,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
,null,null));
});})(i__65812,i__65805,map__65831,map__65831__$1,block,uid__$1,parents,s__65818__$2,temp__5735__auto____$2,vec__65814,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65813,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__65803_$_iter__65810_$_iter__65817(cljs.core.rest(s__65818__$2)));
}
} else {
return null;
}
break;
}
});})(i__65812,i__65805,vec__65814,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65813,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
,null,null));
});})(i__65812,i__65805,vec__65814,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65813,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__65954 = (i__65812 + (1));
i__65812 = G__65954;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65813),athens$devcards$node_page$node_page_el_$_iter__65803_$_iter__65810(cljs.core.chunk_rest(s__65811__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65813),null);
}
} else {
var vec__65841 = cljs.core.first(s__65811__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65841,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65841,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65805,vec__65841,group_title,group,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__65805,vec__65841,group_title,group,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__65805,vec__65841,group_title,group,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65803_$_iter__65810_$_iter__65844(s__65845){
return (new cljs.core.LazySeq(null,((function (i__65805,vec__65841,group_title,group,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function (){
var s__65845__$1 = s__65845;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65845__$1);
if(temp__5735__auto____$2){
var s__65845__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65845__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65845__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65847 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65846 = (0);
while(true){
if((i__65846 < size__4581__auto____$1)){
var map__65848 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65846);
var map__65848__$1 = (((((!((map__65848 == null))))?(((((map__65848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65848):map__65848);
var block = map__65848__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65848__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65848__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__65847,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65846,i__65805,map__65848,map__65848__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65847,s__65845__$2,temp__5735__auto____$2,vec__65841,group_title,group,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65803_$_iter__65810_$_iter__65844_$_iter__65850(s__65851){
return (new cljs.core.LazySeq(null,((function (i__65846,i__65805,map__65848,map__65848__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65847,s__65845__$2,temp__5735__auto____$2,vec__65841,group_title,group,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function (){
var s__65851__$1 = s__65851;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65851__$1);
if(temp__5735__auto____$3){
var s__65851__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65851__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__65851__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__65853 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__65852 = (0);
while(true){
if((i__65852 < size__4581__auto____$2)){
var map__65854 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__65852);
var map__65854__$1 = (((((!((map__65854 == null))))?(((((map__65854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65854):map__65854);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65854__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65854__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65854__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65853,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65852,i__65846,i__65805,map__65854,map__65854__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65853,s__65851__$2,temp__5735__auto____$3,map__65848,map__65848__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65847,s__65845__$2,temp__5735__auto____$2,vec__65841,group_title,group,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65852,i__65846,i__65805,map__65854,map__65854__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65853,s__65851__$2,temp__5735__auto____$3,map__65848,map__65848__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65847,s__65845__$2,temp__5735__auto____$2,vec__65841,group_title,group,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65955 = (i__65852 + (1));
i__65852 = G__65955;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65853),athens$devcards$node_page$node_page_el_$_iter__65803_$_iter__65810_$_iter__65844_$_iter__65850(cljs.core.chunk_rest(s__65851__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65853),null);
}
} else {
var map__65856 = cljs.core.first(s__65851__$2);
var map__65856__$1 = (((((!((map__65856 == null))))?(((((map__65856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65856):map__65856);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65856__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65856__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65856__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65846,i__65805,map__65856,map__65856__$1,title__$1,string,uid__$2,s__65851__$2,temp__5735__auto____$3,map__65848,map__65848__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65847,s__65845__$2,temp__5735__auto____$2,vec__65841,group_title,group,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65846,i__65805,map__65856,map__65856__$1,title__$1,string,uid__$2,s__65851__$2,temp__5735__auto____$3,map__65848,map__65848__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65847,s__65845__$2,temp__5735__auto____$2,vec__65841,group_title,group,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65803_$_iter__65810_$_iter__65844_$_iter__65850(cljs.core.rest(s__65851__$2)));
}
} else {
return null;
}
break;
}
});})(i__65846,i__65805,map__65848,map__65848__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65847,s__65845__$2,temp__5735__auto____$2,vec__65841,group_title,group,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
,null,null));
});})(i__65846,i__65805,map__65848,map__65848__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65847,s__65845__$2,temp__5735__auto____$2,vec__65841,group_title,group,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__65956 = (i__65846 + (1));
i__65846 = G__65956;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65847),athens$devcards$node_page$node_page_el_$_iter__65803_$_iter__65810_$_iter__65844(cljs.core.chunk_rest(s__65845__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65847),null);
}
} else {
var map__65858 = cljs.core.first(s__65845__$2);
var map__65858__$1 = (((((!((map__65858 == null))))?(((((map__65858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65858):map__65858);
var block = map__65858__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65858__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65858__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65805,map__65858,map__65858__$1,block,uid__$1,parents,s__65845__$2,temp__5735__auto____$2,vec__65841,group_title,group,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65803_$_iter__65810_$_iter__65844_$_iter__65860(s__65861){
return (new cljs.core.LazySeq(null,((function (i__65805,map__65858,map__65858__$1,block,uid__$1,parents,s__65845__$2,temp__5735__auto____$2,vec__65841,group_title,group,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function (){
var s__65861__$1 = s__65861;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65861__$1);
if(temp__5735__auto____$3){
var s__65861__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65861__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65861__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65863 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65862 = (0);
while(true){
if((i__65862 < size__4581__auto____$1)){
var map__65864 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65862);
var map__65864__$1 = (((((!((map__65864 == null))))?(((((map__65864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65864):map__65864);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65864__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65864__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65864__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65863,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65862,i__65805,map__65864,map__65864__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65863,s__65861__$2,temp__5735__auto____$3,map__65858,map__65858__$1,block,uid__$1,parents,s__65845__$2,temp__5735__auto____$2,vec__65841,group_title,group,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65862,i__65805,map__65864,map__65864__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65863,s__65861__$2,temp__5735__auto____$3,map__65858,map__65858__$1,block,uid__$1,parents,s__65845__$2,temp__5735__auto____$2,vec__65841,group_title,group,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65957 = (i__65862 + (1));
i__65862 = G__65957;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65863),athens$devcards$node_page$node_page_el_$_iter__65803_$_iter__65810_$_iter__65844_$_iter__65860(cljs.core.chunk_rest(s__65861__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65863),null);
}
} else {
var map__65866 = cljs.core.first(s__65861__$2);
var map__65866__$1 = (((((!((map__65866 == null))))?(((((map__65866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65866):map__65866);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65866__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65866__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65866__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65805,map__65866,map__65866__$1,title__$1,string,uid__$2,s__65861__$2,temp__5735__auto____$3,map__65858,map__65858__$1,block,uid__$1,parents,s__65845__$2,temp__5735__auto____$2,vec__65841,group_title,group,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65805,map__65866,map__65866__$1,title__$1,string,uid__$2,s__65861__$2,temp__5735__auto____$3,map__65858,map__65858__$1,block,uid__$1,parents,s__65845__$2,temp__5735__auto____$2,vec__65841,group_title,group,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65803_$_iter__65810_$_iter__65844_$_iter__65860(cljs.core.rest(s__65861__$2)));
}
} else {
return null;
}
break;
}
});})(i__65805,map__65858,map__65858__$1,block,uid__$1,parents,s__65845__$2,temp__5735__auto____$2,vec__65841,group_title,group,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
,null,null));
});})(i__65805,map__65858,map__65858__$1,block,uid__$1,parents,s__65845__$2,temp__5735__auto____$2,vec__65841,group_title,group,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__65803_$_iter__65810_$_iter__65844(cljs.core.rest(s__65845__$2)));
}
} else {
return null;
}
break;
}
});})(i__65805,vec__65841,group_title,group,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
,null,null));
});})(i__65805,vec__65841,group_title,group,s__65811__$2,temp__5735__auto____$1,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__65803_$_iter__65810(cljs.core.rest(s__65811__$2)));
}
} else {
return null;
}
break;
}
});})(i__65805,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
,null,null));
});})(i__65805,vec__65807,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65806,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null));

var G__65958 = (i__65805 + (1));
i__65805 = G__65958;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65806),athens$devcards$node_page$node_page_el_$_iter__65803(cljs.core.chunk_rest(s__65804__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65806),null);
}
} else {
var vec__65868 = cljs.core.first(s__65804__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65868,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65868,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (vec__65868,linked_or_unlinked,refs,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65803_$_iter__65871(s__65872){
return (new cljs.core.LazySeq(null,(function (){
var s__65872__$1 = s__65872;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__65872__$1);
if(temp__5735__auto____$1){
var s__65872__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__65872__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65872__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65874 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65873 = (0);
while(true){
if((i__65873 < size__4581__auto__)){
var vec__65875 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65873);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65875,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65875,(1),null);
cljs.core.chunk_append(b__65874,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65873,vec__65875,group_title,group,c__4580__auto__,size__4581__auto__,b__65874,s__65872__$2,temp__5735__auto____$1,vec__65868,linked_or_unlinked,refs,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__65873,vec__65875,group_title,group,c__4580__auto__,size__4581__auto__,b__65874,s__65872__$2,temp__5735__auto____$1,vec__65868,linked_or_unlinked,refs,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__65873,vec__65875,group_title,group,c__4580__auto__,size__4581__auto__,b__65874,s__65872__$2,temp__5735__auto____$1,vec__65868,linked_or_unlinked,refs,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65803_$_iter__65871_$_iter__65878(s__65879){
return (new cljs.core.LazySeq(null,((function (i__65873,vec__65875,group_title,group,c__4580__auto__,size__4581__auto__,b__65874,s__65872__$2,temp__5735__auto____$1,vec__65868,linked_or_unlinked,refs,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function (){
var s__65879__$1 = s__65879;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65879__$1);
if(temp__5735__auto____$2){
var s__65879__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65879__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65879__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65881 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65880 = (0);
while(true){
if((i__65880 < size__4581__auto____$1)){
var map__65882 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65880);
var map__65882__$1 = (((((!((map__65882 == null))))?(((((map__65882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65882):map__65882);
var block = map__65882__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65882__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65882__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__65881,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65880,i__65873,map__65882,map__65882__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65881,s__65879__$2,temp__5735__auto____$2,vec__65875,group_title,group,c__4580__auto__,size__4581__auto__,b__65874,s__65872__$2,temp__5735__auto____$1,vec__65868,linked_or_unlinked,refs,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65803_$_iter__65871_$_iter__65878_$_iter__65884(s__65885){
return (new cljs.core.LazySeq(null,((function (i__65880,i__65873,map__65882,map__65882__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65881,s__65879__$2,temp__5735__auto____$2,vec__65875,group_title,group,c__4580__auto__,size__4581__auto__,b__65874,s__65872__$2,temp__5735__auto____$1,vec__65868,linked_or_unlinked,refs,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function (){
var s__65885__$1 = s__65885;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65885__$1);
if(temp__5735__auto____$3){
var s__65885__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65885__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__65885__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__65887 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__65886 = (0);
while(true){
if((i__65886 < size__4581__auto____$2)){
var map__65888 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__65886);
var map__65888__$1 = (((((!((map__65888 == null))))?(((((map__65888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65888):map__65888);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65888__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65888__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65888__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65887,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65886,i__65880,i__65873,map__65888,map__65888__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65887,s__65885__$2,temp__5735__auto____$3,map__65882,map__65882__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65881,s__65879__$2,temp__5735__auto____$2,vec__65875,group_title,group,c__4580__auto__,size__4581__auto__,b__65874,s__65872__$2,temp__5735__auto____$1,vec__65868,linked_or_unlinked,refs,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65886,i__65880,i__65873,map__65888,map__65888__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65887,s__65885__$2,temp__5735__auto____$3,map__65882,map__65882__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65881,s__65879__$2,temp__5735__auto____$2,vec__65875,group_title,group,c__4580__auto__,size__4581__auto__,b__65874,s__65872__$2,temp__5735__auto____$1,vec__65868,linked_or_unlinked,refs,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65959 = (i__65886 + (1));
i__65886 = G__65959;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65887),athens$devcards$node_page$node_page_el_$_iter__65803_$_iter__65871_$_iter__65878_$_iter__65884(cljs.core.chunk_rest(s__65885__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65887),null);
}
} else {
var map__65890 = cljs.core.first(s__65885__$2);
var map__65890__$1 = (((((!((map__65890 == null))))?(((((map__65890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65890):map__65890);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65890__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65890__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65890__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65880,i__65873,map__65890,map__65890__$1,title__$1,string,uid__$2,s__65885__$2,temp__5735__auto____$3,map__65882,map__65882__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65881,s__65879__$2,temp__5735__auto____$2,vec__65875,group_title,group,c__4580__auto__,size__4581__auto__,b__65874,s__65872__$2,temp__5735__auto____$1,vec__65868,linked_or_unlinked,refs,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65880,i__65873,map__65890,map__65890__$1,title__$1,string,uid__$2,s__65885__$2,temp__5735__auto____$3,map__65882,map__65882__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65881,s__65879__$2,temp__5735__auto____$2,vec__65875,group_title,group,c__4580__auto__,size__4581__auto__,b__65874,s__65872__$2,temp__5735__auto____$1,vec__65868,linked_or_unlinked,refs,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65803_$_iter__65871_$_iter__65878_$_iter__65884(cljs.core.rest(s__65885__$2)));
}
} else {
return null;
}
break;
}
});})(i__65880,i__65873,map__65882,map__65882__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65881,s__65879__$2,temp__5735__auto____$2,vec__65875,group_title,group,c__4580__auto__,size__4581__auto__,b__65874,s__65872__$2,temp__5735__auto____$1,vec__65868,linked_or_unlinked,refs,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
,null,null));
});})(i__65880,i__65873,map__65882,map__65882__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65881,s__65879__$2,temp__5735__auto____$2,vec__65875,group_title,group,c__4580__auto__,size__4581__auto__,b__65874,s__65872__$2,temp__5735__auto____$1,vec__65868,linked_or_unlinked,refs,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__65960 = (i__65880 + (1));
i__65880 = G__65960;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65881),athens$devcards$node_page$node_page_el_$_iter__65803_$_iter__65871_$_iter__65878(cljs.core.chunk_rest(s__65879__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65881),null);
}
} else {
var map__65892 = cljs.core.first(s__65879__$2);
var map__65892__$1 = (((((!((map__65892 == null))))?(((((map__65892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65892):map__65892);
var block = map__65892__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65892__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65892__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65873,map__65892,map__65892__$1,block,uid__$1,parents,s__65879__$2,temp__5735__auto____$2,vec__65875,group_title,group,c__4580__auto__,size__4581__auto__,b__65874,s__65872__$2,temp__5735__auto____$1,vec__65868,linked_or_unlinked,refs,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65803_$_iter__65871_$_iter__65878_$_iter__65894(s__65895){
return (new cljs.core.LazySeq(null,((function (i__65873,map__65892,map__65892__$1,block,uid__$1,parents,s__65879__$2,temp__5735__auto____$2,vec__65875,group_title,group,c__4580__auto__,size__4581__auto__,b__65874,s__65872__$2,temp__5735__auto____$1,vec__65868,linked_or_unlinked,refs,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function (){
var s__65895__$1 = s__65895;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65895__$1);
if(temp__5735__auto____$3){
var s__65895__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65895__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65895__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65897 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65896 = (0);
while(true){
if((i__65896 < size__4581__auto____$1)){
var map__65898 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65896);
var map__65898__$1 = (((((!((map__65898 == null))))?(((((map__65898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65898):map__65898);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65898__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65898__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65898__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65897,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65896,i__65873,map__65898,map__65898__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65897,s__65895__$2,temp__5735__auto____$3,map__65892,map__65892__$1,block,uid__$1,parents,s__65879__$2,temp__5735__auto____$2,vec__65875,group_title,group,c__4580__auto__,size__4581__auto__,b__65874,s__65872__$2,temp__5735__auto____$1,vec__65868,linked_or_unlinked,refs,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65896,i__65873,map__65898,map__65898__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65897,s__65895__$2,temp__5735__auto____$3,map__65892,map__65892__$1,block,uid__$1,parents,s__65879__$2,temp__5735__auto____$2,vec__65875,group_title,group,c__4580__auto__,size__4581__auto__,b__65874,s__65872__$2,temp__5735__auto____$1,vec__65868,linked_or_unlinked,refs,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65961 = (i__65896 + (1));
i__65896 = G__65961;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65897),athens$devcards$node_page$node_page_el_$_iter__65803_$_iter__65871_$_iter__65878_$_iter__65894(cljs.core.chunk_rest(s__65895__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65897),null);
}
} else {
var map__65900 = cljs.core.first(s__65895__$2);
var map__65900__$1 = (((((!((map__65900 == null))))?(((((map__65900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65900):map__65900);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65900__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65900__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65900__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65873,map__65900,map__65900__$1,title__$1,string,uid__$2,s__65895__$2,temp__5735__auto____$3,map__65892,map__65892__$1,block,uid__$1,parents,s__65879__$2,temp__5735__auto____$2,vec__65875,group_title,group,c__4580__auto__,size__4581__auto__,b__65874,s__65872__$2,temp__5735__auto____$1,vec__65868,linked_or_unlinked,refs,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65873,map__65900,map__65900__$1,title__$1,string,uid__$2,s__65895__$2,temp__5735__auto____$3,map__65892,map__65892__$1,block,uid__$1,parents,s__65879__$2,temp__5735__auto____$2,vec__65875,group_title,group,c__4580__auto__,size__4581__auto__,b__65874,s__65872__$2,temp__5735__auto____$1,vec__65868,linked_or_unlinked,refs,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65803_$_iter__65871_$_iter__65878_$_iter__65894(cljs.core.rest(s__65895__$2)));
}
} else {
return null;
}
break;
}
});})(i__65873,map__65892,map__65892__$1,block,uid__$1,parents,s__65879__$2,temp__5735__auto____$2,vec__65875,group_title,group,c__4580__auto__,size__4581__auto__,b__65874,s__65872__$2,temp__5735__auto____$1,vec__65868,linked_or_unlinked,refs,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
,null,null));
});})(i__65873,map__65892,map__65892__$1,block,uid__$1,parents,s__65879__$2,temp__5735__auto____$2,vec__65875,group_title,group,c__4580__auto__,size__4581__auto__,b__65874,s__65872__$2,temp__5735__auto____$1,vec__65868,linked_or_unlinked,refs,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__65803_$_iter__65871_$_iter__65878(cljs.core.rest(s__65879__$2)));
}
} else {
return null;
}
break;
}
});})(i__65873,vec__65875,group_title,group,c__4580__auto__,size__4581__auto__,b__65874,s__65872__$2,temp__5735__auto____$1,vec__65868,linked_or_unlinked,refs,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
,null,null));
});})(i__65873,vec__65875,group_title,group,c__4580__auto__,size__4581__auto__,b__65874,s__65872__$2,temp__5735__auto____$1,vec__65868,linked_or_unlinked,refs,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__65962 = (i__65873 + (1));
i__65873 = G__65962;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65874),athens$devcards$node_page$node_page_el_$_iter__65803_$_iter__65871(cljs.core.chunk_rest(s__65872__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65874),null);
}
} else {
var vec__65902 = cljs.core.first(s__65872__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65902,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65902,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__65902,group_title,group,s__65872__$2,temp__5735__auto____$1,vec__65868,linked_or_unlinked,refs,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__65902,group_title,group,s__65872__$2,temp__5735__auto____$1,vec__65868,linked_or_unlinked,refs,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (vec__65902,group_title,group,s__65872__$2,temp__5735__auto____$1,vec__65868,linked_or_unlinked,refs,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65803_$_iter__65871_$_iter__65905(s__65906){
return (new cljs.core.LazySeq(null,(function (){
var s__65906__$1 = s__65906;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65906__$1);
if(temp__5735__auto____$2){
var s__65906__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65906__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65906__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65908 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65907 = (0);
while(true){
if((i__65907 < size__4581__auto__)){
var map__65909 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65907);
var map__65909__$1 = (((((!((map__65909 == null))))?(((((map__65909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65909):map__65909);
var block = map__65909__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65909__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65909__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__65908,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65907,map__65909,map__65909__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65908,s__65906__$2,temp__5735__auto____$2,vec__65902,group_title,group,s__65872__$2,temp__5735__auto____$1,vec__65868,linked_or_unlinked,refs,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65803_$_iter__65871_$_iter__65905_$_iter__65911(s__65912){
return (new cljs.core.LazySeq(null,((function (i__65907,map__65909,map__65909__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65908,s__65906__$2,temp__5735__auto____$2,vec__65902,group_title,group,s__65872__$2,temp__5735__auto____$1,vec__65868,linked_or_unlinked,refs,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function (){
var s__65912__$1 = s__65912;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65912__$1);
if(temp__5735__auto____$3){
var s__65912__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65912__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65912__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65914 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65913 = (0);
while(true){
if((i__65913 < size__4581__auto____$1)){
var map__65915 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65913);
var map__65915__$1 = (((((!((map__65915 == null))))?(((((map__65915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65915):map__65915);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65915__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65915__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65915__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65914,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65913,i__65907,map__65915,map__65915__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65914,s__65912__$2,temp__5735__auto____$3,map__65909,map__65909__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65908,s__65906__$2,temp__5735__auto____$2,vec__65902,group_title,group,s__65872__$2,temp__5735__auto____$1,vec__65868,linked_or_unlinked,refs,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65913,i__65907,map__65915,map__65915__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65914,s__65912__$2,temp__5735__auto____$3,map__65909,map__65909__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65908,s__65906__$2,temp__5735__auto____$2,vec__65902,group_title,group,s__65872__$2,temp__5735__auto____$1,vec__65868,linked_or_unlinked,refs,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65963 = (i__65913 + (1));
i__65913 = G__65963;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65914),athens$devcards$node_page$node_page_el_$_iter__65803_$_iter__65871_$_iter__65905_$_iter__65911(cljs.core.chunk_rest(s__65912__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65914),null);
}
} else {
var map__65917 = cljs.core.first(s__65912__$2);
var map__65917__$1 = (((((!((map__65917 == null))))?(((((map__65917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65917):map__65917);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65917__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65917__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65917__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65907,map__65917,map__65917__$1,title__$1,string,uid__$2,s__65912__$2,temp__5735__auto____$3,map__65909,map__65909__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65908,s__65906__$2,temp__5735__auto____$2,vec__65902,group_title,group,s__65872__$2,temp__5735__auto____$1,vec__65868,linked_or_unlinked,refs,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65907,map__65917,map__65917__$1,title__$1,string,uid__$2,s__65912__$2,temp__5735__auto____$3,map__65909,map__65909__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65908,s__65906__$2,temp__5735__auto____$2,vec__65902,group_title,group,s__65872__$2,temp__5735__auto____$1,vec__65868,linked_or_unlinked,refs,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65803_$_iter__65871_$_iter__65905_$_iter__65911(cljs.core.rest(s__65912__$2)));
}
} else {
return null;
}
break;
}
});})(i__65907,map__65909,map__65909__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65908,s__65906__$2,temp__5735__auto____$2,vec__65902,group_title,group,s__65872__$2,temp__5735__auto____$1,vec__65868,linked_or_unlinked,refs,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
,null,null));
});})(i__65907,map__65909,map__65909__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65908,s__65906__$2,temp__5735__auto____$2,vec__65902,group_title,group,s__65872__$2,temp__5735__auto____$1,vec__65868,linked_or_unlinked,refs,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__65964 = (i__65907 + (1));
i__65907 = G__65964;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65908),athens$devcards$node_page$node_page_el_$_iter__65803_$_iter__65871_$_iter__65905(cljs.core.chunk_rest(s__65906__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65908),null);
}
} else {
var map__65919 = cljs.core.first(s__65906__$2);
var map__65919__$1 = (((((!((map__65919 == null))))?(((((map__65919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65919):map__65919);
var block = map__65919__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65919__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65919__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (map__65919,map__65919__$1,block,uid__$1,parents,s__65906__$2,temp__5735__auto____$2,vec__65902,group_title,group,s__65872__$2,temp__5735__auto____$1,vec__65868,linked_or_unlinked,refs,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65803_$_iter__65871_$_iter__65905_$_iter__65921(s__65922){
return (new cljs.core.LazySeq(null,(function (){
var s__65922__$1 = s__65922;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65922__$1);
if(temp__5735__auto____$3){
var s__65922__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65922__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65922__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65924 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65923 = (0);
while(true){
if((i__65923 < size__4581__auto__)){
var map__65925 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65923);
var map__65925__$1 = (((((!((map__65925 == null))))?(((((map__65925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65925):map__65925);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65925__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65925__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65925__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65924,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65923,map__65925,map__65925__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__65924,s__65922__$2,temp__5735__auto____$3,map__65919,map__65919__$1,block,uid__$1,parents,s__65906__$2,temp__5735__auto____$2,vec__65902,group_title,group,s__65872__$2,temp__5735__auto____$1,vec__65868,linked_or_unlinked,refs,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65923,map__65925,map__65925__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__65924,s__65922__$2,temp__5735__auto____$3,map__65919,map__65919__$1,block,uid__$1,parents,s__65906__$2,temp__5735__auto____$2,vec__65902,group_title,group,s__65872__$2,temp__5735__auto____$1,vec__65868,linked_or_unlinked,refs,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65965 = (i__65923 + (1));
i__65923 = G__65965;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65924),athens$devcards$node_page$node_page_el_$_iter__65803_$_iter__65871_$_iter__65905_$_iter__65921(cljs.core.chunk_rest(s__65922__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65924),null);
}
} else {
var map__65927 = cljs.core.first(s__65922__$2);
var map__65927__$1 = (((((!((map__65927 == null))))?(((((map__65927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65927):map__65927);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65927__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65927__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65927__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__65927,map__65927__$1,title__$1,string,uid__$2,s__65922__$2,temp__5735__auto____$3,map__65919,map__65919__$1,block,uid__$1,parents,s__65906__$2,temp__5735__auto____$2,vec__65902,group_title,group,s__65872__$2,temp__5735__auto____$1,vec__65868,linked_or_unlinked,refs,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__65927,map__65927__$1,title__$1,string,uid__$2,s__65922__$2,temp__5735__auto____$3,map__65919,map__65919__$1,block,uid__$1,parents,s__65906__$2,temp__5735__auto____$2,vec__65902,group_title,group,s__65872__$2,temp__5735__auto____$1,vec__65868,linked_or_unlinked,refs,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65803_$_iter__65871_$_iter__65905_$_iter__65921(cljs.core.rest(s__65922__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__65919,map__65919__$1,block,uid__$1,parents,s__65906__$2,temp__5735__auto____$2,vec__65902,group_title,group,s__65872__$2,temp__5735__auto____$1,vec__65868,linked_or_unlinked,refs,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__65803_$_iter__65871_$_iter__65905(cljs.core.rest(s__65906__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__65902,group_title,group,s__65872__$2,temp__5735__auto____$1,vec__65868,linked_or_unlinked,refs,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__65803_$_iter__65871(cljs.core.rest(s__65872__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__65868,linked_or_unlinked,refs,s__65804__$2,temp__5735__auto__,map__65791,map__65791__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null),athens$devcards$node_page$node_page_el_$_iter__65803(cljs.core.rest(s__65804__$2)));
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
var editing_uid = cljs.core.deref((function (){var G__65929 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__65929) : re_frame.core.subscribe.call(null,G__65929));
})());
if(clojure.string.blank_QMARK_(title)){
return null;
} else {
var ref_groups = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Linked References",athens.devcards.node_page.get_data(athens.patterns.linked(title))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unlinked References",athens.devcards.node_page.get_data(athens.patterns.unlinked(title))], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.node_page.node_page_el,node,editing_uid,ref_groups], null);
}
});

//# sourceMappingURL=athens.devcards.node_page.js.map
