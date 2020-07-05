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
athens.devcards.node_page.page_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),"2rem auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 2rem",new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),"100%",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"55rem"], null);
athens.devcards.node_page.title_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"visible",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),"1",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.2em 0",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.03em",new cljs.core.Keyword(null,"word-break","word-break",-407281356),"break-word",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"-webkit-appearance","-webkit-appearance",375531635),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"caret-color","caret-color",997187317),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"margin","margin",-995903681)],["inherit","translate3d(0,0,0)","inherit","100%","inherit","opacity 0.15s ease","0","inherit","100%","transparent","text","none","none","0","0",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),"0","absolute","inherit","0","4px","inherit","0","0"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea:focus","textarea:focus",117113075),new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10",new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._PLUS_(new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.Keyword(null,"span","span",1394872991)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null)], null)], null)], null);
athens.devcards.node_page.references_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-block","margin-block",1690397674),"3em"], null);
athens.devcards.node_page.references_heading_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 2rem",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"0.25em",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%"], null)], null)], null)], null);
athens.devcards.node_page.references_list_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null);
athens.devcards.node_page.references_group_title_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword(null,"margin","margin",-995903681),"0 1.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a:hover","a:hover",-1474674872),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null)], null);
athens.devcards.node_page.references_group_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527),new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971)),new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 0.5rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.5em 0"], null);
athens.devcards.node_page.reference_breadcrumbs_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem calc(2rem - 0.5em)"], null);
athens.devcards.node_page.references_group_block_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px solid ",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527))], null)], null),new cljs.core.Keyword(null,"padding-block-start","padding-block-start",1054404612),"1em",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"1em",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:first-of-type","&:first-of-type",1836617087),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"0",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"0"], null)], null)], null)], null);
athens.devcards.node_page.handler = (function athens$devcards$node_page$handler(val,uid){
var G__65841 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__65841) : re_frame.core.dispatch.call(null,G__65841));
});
athens.devcards.node_page.db_handler = goog.functions.debounce(athens.devcards.node_page.handler,(500));
athens.devcards.node_page.get_ref_ids = (function athens$devcards$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__65842 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__65843 = athens.db.dsdb;
var G__65844 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__65842,G__65843,G__65844) : posh.reagent.q.call(null,G__65842,G__65843,G__65844));
})());
});
athens.devcards.node_page.merge_parents_and_block = (function athens$devcards$node_page$merge_parents_and_block(ref_ids){
var parents = cljs.core.reduce_kv((function (m,_,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,athens.db.get_parents_recursively(v));
}),cljs.core.PersistentArrayMap.EMPTY,ref_ids);
var blocks = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return athens.db.get_block_document(id);
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
athens.devcards.node_page.node_page_el = (function athens$devcards$node_page$node_page_el(p__65845,editing_uid,ref_groups){
var map__65846 = p__65845;
var map__65846__$1 = (((((!((map__65846 == null))))?(((((map__65846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65846):map__65846);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65846__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65846__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65846__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.page_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__65848 = e.target.value;
var G__65849 = uid;
return (athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__65848,G__65849) : athens.devcards.node_page.db_handler.call(null,G__65848,G__65849));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__65850(s__65851){
return (new cljs.core.LazySeq(null,(function (){
var s__65851__$1 = s__65851;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65851__$1);
if(temp__5735__auto__){
var s__65851__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65851__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65851__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65853 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65852 = (0);
while(true){
if((i__65852 < size__4581__auto__)){
var map__65854 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65852);
var map__65854__$1 = (((((!((map__65854 == null))))?(((((map__65854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65854):map__65854);
var child = map__65854__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65854__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65853,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__66005 = (i__65852 + (1));
i__65852 = G__66005;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65853),athens$devcards$node_page$node_page_el_$_iter__65850(cljs.core.chunk_rest(s__65851__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65853),null);
}
} else {
var map__65856 = cljs.core.first(s__65851__$2);
var map__65856__$1 = (((((!((map__65856 == null))))?(((((map__65856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65856):map__65856);
var child = map__65856__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65856__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$devcards$node_page$node_page_el_$_iter__65850(cljs.core.rest(s__65851__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__65858(s__65859){
return (new cljs.core.LazySeq(null,(function (){
var s__65859__$1 = s__65859;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65859__$1);
if(temp__5735__auto__){
var s__65859__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65859__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65859__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65861 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65860 = (0);
while(true){
if((i__65860 < size__4581__auto__)){
var vec__65862 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65860);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65862,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65862,(1),null);
cljs.core.chunk_append(b__65861,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (i__65860,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65858_$_iter__65865(s__65866){
return (new cljs.core.LazySeq(null,((function (i__65860,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function (){
var s__65866__$1 = s__65866;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__65866__$1);
if(temp__5735__auto____$1){
var s__65866__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__65866__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65866__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65868 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65867 = (0);
while(true){
if((i__65867 < size__4581__auto____$1)){
var vec__65869 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65867);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65869,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65869,(1),null);
cljs.core.chunk_append(b__65868,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65867,i__65860,vec__65869,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65868,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__65867,i__65860,vec__65869,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65868,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__65867,i__65860,vec__65869,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65868,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65858_$_iter__65865_$_iter__65872(s__65873){
return (new cljs.core.LazySeq(null,((function (i__65867,i__65860,vec__65869,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65868,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function (){
var s__65873__$1 = s__65873;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65873__$1);
if(temp__5735__auto____$2){
var s__65873__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65873__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__65873__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__65875 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__65874 = (0);
while(true){
if((i__65874 < size__4581__auto____$2)){
var map__65876 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__65874);
var map__65876__$1 = (((((!((map__65876 == null))))?(((((map__65876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65876):map__65876);
var block = map__65876__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65876__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65876__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__65875,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65874,i__65867,i__65860,map__65876,map__65876__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65875,s__65873__$2,temp__5735__auto____$2,vec__65869,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65868,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65858_$_iter__65865_$_iter__65872_$_iter__65878(s__65879){
return (new cljs.core.LazySeq(null,((function (i__65874,i__65867,i__65860,map__65876,map__65876__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65875,s__65873__$2,temp__5735__auto____$2,vec__65869,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65868,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function (){
var s__65879__$1 = s__65879;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65879__$1);
if(temp__5735__auto____$3){
var s__65879__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65879__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__65879__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__65881 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__65880 = (0);
while(true){
if((i__65880 < size__4581__auto____$3)){
var map__65882 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__65880);
var map__65882__$1 = (((((!((map__65882 == null))))?(((((map__65882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65882):map__65882);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65882__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65882__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65882__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65881,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65880,i__65874,i__65867,i__65860,map__65882,map__65882__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__65881,s__65879__$2,temp__5735__auto____$3,map__65876,map__65876__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65875,s__65873__$2,temp__5735__auto____$2,vec__65869,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65868,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65880,i__65874,i__65867,i__65860,map__65882,map__65882__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__65881,s__65879__$2,temp__5735__auto____$3,map__65876,map__65876__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65875,s__65873__$2,temp__5735__auto____$2,vec__65869,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65868,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__66009 = (i__65880 + (1));
i__65880 = G__66009;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65881),athens$devcards$node_page$node_page_el_$_iter__65858_$_iter__65865_$_iter__65872_$_iter__65878(cljs.core.chunk_rest(s__65879__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65881),null);
}
} else {
var map__65884 = cljs.core.first(s__65879__$2);
var map__65884__$1 = (((((!((map__65884 == null))))?(((((map__65884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65884):map__65884);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65884__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65884__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65884__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65874,i__65867,i__65860,map__65884,map__65884__$1,title__$1,string,uid__$2,s__65879__$2,temp__5735__auto____$3,map__65876,map__65876__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65875,s__65873__$2,temp__5735__auto____$2,vec__65869,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65868,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65874,i__65867,i__65860,map__65884,map__65884__$1,title__$1,string,uid__$2,s__65879__$2,temp__5735__auto____$3,map__65876,map__65876__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65875,s__65873__$2,temp__5735__auto____$2,vec__65869,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65868,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65858_$_iter__65865_$_iter__65872_$_iter__65878(cljs.core.rest(s__65879__$2)));
}
} else {
return null;
}
break;
}
});})(i__65874,i__65867,i__65860,map__65876,map__65876__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65875,s__65873__$2,temp__5735__auto____$2,vec__65869,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65868,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
,null,null));
});})(i__65874,i__65867,i__65860,map__65876,map__65876__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65875,s__65873__$2,temp__5735__auto____$2,vec__65869,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65868,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__66010 = (i__65874 + (1));
i__65874 = G__66010;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65875),athens$devcards$node_page$node_page_el_$_iter__65858_$_iter__65865_$_iter__65872(cljs.core.chunk_rest(s__65873__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65875),null);
}
} else {
var map__65886 = cljs.core.first(s__65873__$2);
var map__65886__$1 = (((((!((map__65886 == null))))?(((((map__65886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65886):map__65886);
var block = map__65886__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65886__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65886__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65867,i__65860,map__65886,map__65886__$1,block,uid__$1,parents,s__65873__$2,temp__5735__auto____$2,vec__65869,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65868,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65858_$_iter__65865_$_iter__65872_$_iter__65888(s__65889){
return (new cljs.core.LazySeq(null,((function (i__65867,i__65860,map__65886,map__65886__$1,block,uid__$1,parents,s__65873__$2,temp__5735__auto____$2,vec__65869,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65868,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function (){
var s__65889__$1 = s__65889;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65889__$1);
if(temp__5735__auto____$3){
var s__65889__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65889__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__65889__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__65891 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__65890 = (0);
while(true){
if((i__65890 < size__4581__auto____$2)){
var map__65892 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__65890);
var map__65892__$1 = (((((!((map__65892 == null))))?(((((map__65892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65892):map__65892);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65892__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65892__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65892__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65891,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65890,i__65867,i__65860,map__65892,map__65892__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65891,s__65889__$2,temp__5735__auto____$3,map__65886,map__65886__$1,block,uid__$1,parents,s__65873__$2,temp__5735__auto____$2,vec__65869,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65868,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65890,i__65867,i__65860,map__65892,map__65892__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65891,s__65889__$2,temp__5735__auto____$3,map__65886,map__65886__$1,block,uid__$1,parents,s__65873__$2,temp__5735__auto____$2,vec__65869,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65868,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__66011 = (i__65890 + (1));
i__65890 = G__66011;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65891),athens$devcards$node_page$node_page_el_$_iter__65858_$_iter__65865_$_iter__65872_$_iter__65888(cljs.core.chunk_rest(s__65889__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65891),null);
}
} else {
var map__65894 = cljs.core.first(s__65889__$2);
var map__65894__$1 = (((((!((map__65894 == null))))?(((((map__65894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65894):map__65894);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65894__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65894__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65894__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65867,i__65860,map__65894,map__65894__$1,title__$1,string,uid__$2,s__65889__$2,temp__5735__auto____$3,map__65886,map__65886__$1,block,uid__$1,parents,s__65873__$2,temp__5735__auto____$2,vec__65869,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65868,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65867,i__65860,map__65894,map__65894__$1,title__$1,string,uid__$2,s__65889__$2,temp__5735__auto____$3,map__65886,map__65886__$1,block,uid__$1,parents,s__65873__$2,temp__5735__auto____$2,vec__65869,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65868,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65858_$_iter__65865_$_iter__65872_$_iter__65888(cljs.core.rest(s__65889__$2)));
}
} else {
return null;
}
break;
}
});})(i__65867,i__65860,map__65886,map__65886__$1,block,uid__$1,parents,s__65873__$2,temp__5735__auto____$2,vec__65869,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65868,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
,null,null));
});})(i__65867,i__65860,map__65886,map__65886__$1,block,uid__$1,parents,s__65873__$2,temp__5735__auto____$2,vec__65869,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65868,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__65858_$_iter__65865_$_iter__65872(cljs.core.rest(s__65873__$2)));
}
} else {
return null;
}
break;
}
});})(i__65867,i__65860,vec__65869,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65868,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
,null,null));
});})(i__65867,i__65860,vec__65869,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65868,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__66012 = (i__65867 + (1));
i__65867 = G__66012;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65868),athens$devcards$node_page$node_page_el_$_iter__65858_$_iter__65865(cljs.core.chunk_rest(s__65866__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65868),null);
}
} else {
var vec__65896 = cljs.core.first(s__65866__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65896,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65896,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65860,vec__65896,group_title,group,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__65860,vec__65896,group_title,group,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__65860,vec__65896,group_title,group,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65858_$_iter__65865_$_iter__65899(s__65900){
return (new cljs.core.LazySeq(null,((function (i__65860,vec__65896,group_title,group,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function (){
var s__65900__$1 = s__65900;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65900__$1);
if(temp__5735__auto____$2){
var s__65900__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65900__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65900__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65902 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65901 = (0);
while(true){
if((i__65901 < size__4581__auto____$1)){
var map__65903 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65901);
var map__65903__$1 = (((((!((map__65903 == null))))?(((((map__65903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65903):map__65903);
var block = map__65903__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65903__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65903__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__65902,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65901,i__65860,map__65903,map__65903__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65902,s__65900__$2,temp__5735__auto____$2,vec__65896,group_title,group,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65858_$_iter__65865_$_iter__65899_$_iter__65905(s__65906){
return (new cljs.core.LazySeq(null,((function (i__65901,i__65860,map__65903,map__65903__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65902,s__65900__$2,temp__5735__auto____$2,vec__65896,group_title,group,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function (){
var s__65906__$1 = s__65906;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65906__$1);
if(temp__5735__auto____$3){
var s__65906__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65906__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__65906__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__65908 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__65907 = (0);
while(true){
if((i__65907 < size__4581__auto____$2)){
var map__65909 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__65907);
var map__65909__$1 = (((((!((map__65909 == null))))?(((((map__65909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65909):map__65909);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65909__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65909__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65909__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65908,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65907,i__65901,i__65860,map__65909,map__65909__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65908,s__65906__$2,temp__5735__auto____$3,map__65903,map__65903__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65902,s__65900__$2,temp__5735__auto____$2,vec__65896,group_title,group,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65907,i__65901,i__65860,map__65909,map__65909__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65908,s__65906__$2,temp__5735__auto____$3,map__65903,map__65903__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65902,s__65900__$2,temp__5735__auto____$2,vec__65896,group_title,group,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__66013 = (i__65907 + (1));
i__65907 = G__66013;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65908),athens$devcards$node_page$node_page_el_$_iter__65858_$_iter__65865_$_iter__65899_$_iter__65905(cljs.core.chunk_rest(s__65906__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65908),null);
}
} else {
var map__65911 = cljs.core.first(s__65906__$2);
var map__65911__$1 = (((((!((map__65911 == null))))?(((((map__65911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65911):map__65911);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65911__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65911__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65911__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65901,i__65860,map__65911,map__65911__$1,title__$1,string,uid__$2,s__65906__$2,temp__5735__auto____$3,map__65903,map__65903__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65902,s__65900__$2,temp__5735__auto____$2,vec__65896,group_title,group,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65901,i__65860,map__65911,map__65911__$1,title__$1,string,uid__$2,s__65906__$2,temp__5735__auto____$3,map__65903,map__65903__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65902,s__65900__$2,temp__5735__auto____$2,vec__65896,group_title,group,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65858_$_iter__65865_$_iter__65899_$_iter__65905(cljs.core.rest(s__65906__$2)));
}
} else {
return null;
}
break;
}
});})(i__65901,i__65860,map__65903,map__65903__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65902,s__65900__$2,temp__5735__auto____$2,vec__65896,group_title,group,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
,null,null));
});})(i__65901,i__65860,map__65903,map__65903__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65902,s__65900__$2,temp__5735__auto____$2,vec__65896,group_title,group,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__66014 = (i__65901 + (1));
i__65901 = G__66014;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65902),athens$devcards$node_page$node_page_el_$_iter__65858_$_iter__65865_$_iter__65899(cljs.core.chunk_rest(s__65900__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65902),null);
}
} else {
var map__65913 = cljs.core.first(s__65900__$2);
var map__65913__$1 = (((((!((map__65913 == null))))?(((((map__65913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65913):map__65913);
var block = map__65913__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65913__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65913__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65860,map__65913,map__65913__$1,block,uid__$1,parents,s__65900__$2,temp__5735__auto____$2,vec__65896,group_title,group,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65858_$_iter__65865_$_iter__65899_$_iter__65915(s__65916){
return (new cljs.core.LazySeq(null,((function (i__65860,map__65913,map__65913__$1,block,uid__$1,parents,s__65900__$2,temp__5735__auto____$2,vec__65896,group_title,group,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function (){
var s__65916__$1 = s__65916;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65916__$1);
if(temp__5735__auto____$3){
var s__65916__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65916__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65916__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65918 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65917 = (0);
while(true){
if((i__65917 < size__4581__auto____$1)){
var map__65919 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65917);
var map__65919__$1 = (((((!((map__65919 == null))))?(((((map__65919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65919):map__65919);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65919__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65919__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65919__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65918,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65917,i__65860,map__65919,map__65919__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65918,s__65916__$2,temp__5735__auto____$3,map__65913,map__65913__$1,block,uid__$1,parents,s__65900__$2,temp__5735__auto____$2,vec__65896,group_title,group,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65917,i__65860,map__65919,map__65919__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65918,s__65916__$2,temp__5735__auto____$3,map__65913,map__65913__$1,block,uid__$1,parents,s__65900__$2,temp__5735__auto____$2,vec__65896,group_title,group,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__66015 = (i__65917 + (1));
i__65917 = G__66015;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65918),athens$devcards$node_page$node_page_el_$_iter__65858_$_iter__65865_$_iter__65899_$_iter__65915(cljs.core.chunk_rest(s__65916__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65918),null);
}
} else {
var map__65921 = cljs.core.first(s__65916__$2);
var map__65921__$1 = (((((!((map__65921 == null))))?(((((map__65921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65921):map__65921);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65921__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65921__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65921__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65860,map__65921,map__65921__$1,title__$1,string,uid__$2,s__65916__$2,temp__5735__auto____$3,map__65913,map__65913__$1,block,uid__$1,parents,s__65900__$2,temp__5735__auto____$2,vec__65896,group_title,group,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65860,map__65921,map__65921__$1,title__$1,string,uid__$2,s__65916__$2,temp__5735__auto____$3,map__65913,map__65913__$1,block,uid__$1,parents,s__65900__$2,temp__5735__auto____$2,vec__65896,group_title,group,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65858_$_iter__65865_$_iter__65899_$_iter__65915(cljs.core.rest(s__65916__$2)));
}
} else {
return null;
}
break;
}
});})(i__65860,map__65913,map__65913__$1,block,uid__$1,parents,s__65900__$2,temp__5735__auto____$2,vec__65896,group_title,group,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
,null,null));
});})(i__65860,map__65913,map__65913__$1,block,uid__$1,parents,s__65900__$2,temp__5735__auto____$2,vec__65896,group_title,group,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__65858_$_iter__65865_$_iter__65899(cljs.core.rest(s__65900__$2)));
}
} else {
return null;
}
break;
}
});})(i__65860,vec__65896,group_title,group,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
,null,null));
});})(i__65860,vec__65896,group_title,group,s__65866__$2,temp__5735__auto____$1,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__65858_$_iter__65865(cljs.core.rest(s__65866__$2)));
}
} else {
return null;
}
break;
}
});})(i__65860,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
,null,null));
});})(i__65860,vec__65862,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65861,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null));

var G__66016 = (i__65860 + (1));
i__65860 = G__66016;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65861),athens$devcards$node_page$node_page_el_$_iter__65858(cljs.core.chunk_rest(s__65859__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65861),null);
}
} else {
var vec__65923 = cljs.core.first(s__65859__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65923,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65923,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (vec__65923,linked_or_unlinked,refs,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65858_$_iter__65926(s__65927){
return (new cljs.core.LazySeq(null,(function (){
var s__65927__$1 = s__65927;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__65927__$1);
if(temp__5735__auto____$1){
var s__65927__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__65927__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65927__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65929 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65928 = (0);
while(true){
if((i__65928 < size__4581__auto__)){
var vec__65930 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65928);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65930,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65930,(1),null);
cljs.core.chunk_append(b__65929,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65928,vec__65930,group_title,group,c__4580__auto__,size__4581__auto__,b__65929,s__65927__$2,temp__5735__auto____$1,vec__65923,linked_or_unlinked,refs,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__65928,vec__65930,group_title,group,c__4580__auto__,size__4581__auto__,b__65929,s__65927__$2,temp__5735__auto____$1,vec__65923,linked_or_unlinked,refs,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__65928,vec__65930,group_title,group,c__4580__auto__,size__4581__auto__,b__65929,s__65927__$2,temp__5735__auto____$1,vec__65923,linked_or_unlinked,refs,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65858_$_iter__65926_$_iter__65933(s__65934){
return (new cljs.core.LazySeq(null,((function (i__65928,vec__65930,group_title,group,c__4580__auto__,size__4581__auto__,b__65929,s__65927__$2,temp__5735__auto____$1,vec__65923,linked_or_unlinked,refs,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function (){
var s__65934__$1 = s__65934;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65934__$1);
if(temp__5735__auto____$2){
var s__65934__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65934__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65934__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65936 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65935 = (0);
while(true){
if((i__65935 < size__4581__auto____$1)){
var map__65937 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65935);
var map__65937__$1 = (((((!((map__65937 == null))))?(((((map__65937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65937):map__65937);
var block = map__65937__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65937__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65937__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__65936,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65935,i__65928,map__65937,map__65937__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65936,s__65934__$2,temp__5735__auto____$2,vec__65930,group_title,group,c__4580__auto__,size__4581__auto__,b__65929,s__65927__$2,temp__5735__auto____$1,vec__65923,linked_or_unlinked,refs,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65858_$_iter__65926_$_iter__65933_$_iter__65939(s__65940){
return (new cljs.core.LazySeq(null,((function (i__65935,i__65928,map__65937,map__65937__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65936,s__65934__$2,temp__5735__auto____$2,vec__65930,group_title,group,c__4580__auto__,size__4581__auto__,b__65929,s__65927__$2,temp__5735__auto____$1,vec__65923,linked_or_unlinked,refs,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function (){
var s__65940__$1 = s__65940;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65940__$1);
if(temp__5735__auto____$3){
var s__65940__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65940__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__65940__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__65942 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__65941 = (0);
while(true){
if((i__65941 < size__4581__auto____$2)){
var map__65943 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__65941);
var map__65943__$1 = (((((!((map__65943 == null))))?(((((map__65943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65943):map__65943);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65943__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65943__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65943__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65942,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65941,i__65935,i__65928,map__65943,map__65943__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65942,s__65940__$2,temp__5735__auto____$3,map__65937,map__65937__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65936,s__65934__$2,temp__5735__auto____$2,vec__65930,group_title,group,c__4580__auto__,size__4581__auto__,b__65929,s__65927__$2,temp__5735__auto____$1,vec__65923,linked_or_unlinked,refs,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65941,i__65935,i__65928,map__65943,map__65943__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65942,s__65940__$2,temp__5735__auto____$3,map__65937,map__65937__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65936,s__65934__$2,temp__5735__auto____$2,vec__65930,group_title,group,c__4580__auto__,size__4581__auto__,b__65929,s__65927__$2,temp__5735__auto____$1,vec__65923,linked_or_unlinked,refs,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__66017 = (i__65941 + (1));
i__65941 = G__66017;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65942),athens$devcards$node_page$node_page_el_$_iter__65858_$_iter__65926_$_iter__65933_$_iter__65939(cljs.core.chunk_rest(s__65940__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65942),null);
}
} else {
var map__65945 = cljs.core.first(s__65940__$2);
var map__65945__$1 = (((((!((map__65945 == null))))?(((((map__65945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65945):map__65945);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65945__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65945__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65945__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65935,i__65928,map__65945,map__65945__$1,title__$1,string,uid__$2,s__65940__$2,temp__5735__auto____$3,map__65937,map__65937__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65936,s__65934__$2,temp__5735__auto____$2,vec__65930,group_title,group,c__4580__auto__,size__4581__auto__,b__65929,s__65927__$2,temp__5735__auto____$1,vec__65923,linked_or_unlinked,refs,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65935,i__65928,map__65945,map__65945__$1,title__$1,string,uid__$2,s__65940__$2,temp__5735__auto____$3,map__65937,map__65937__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65936,s__65934__$2,temp__5735__auto____$2,vec__65930,group_title,group,c__4580__auto__,size__4581__auto__,b__65929,s__65927__$2,temp__5735__auto____$1,vec__65923,linked_or_unlinked,refs,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65858_$_iter__65926_$_iter__65933_$_iter__65939(cljs.core.rest(s__65940__$2)));
}
} else {
return null;
}
break;
}
});})(i__65935,i__65928,map__65937,map__65937__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65936,s__65934__$2,temp__5735__auto____$2,vec__65930,group_title,group,c__4580__auto__,size__4581__auto__,b__65929,s__65927__$2,temp__5735__auto____$1,vec__65923,linked_or_unlinked,refs,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
,null,null));
});})(i__65935,i__65928,map__65937,map__65937__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65936,s__65934__$2,temp__5735__auto____$2,vec__65930,group_title,group,c__4580__auto__,size__4581__auto__,b__65929,s__65927__$2,temp__5735__auto____$1,vec__65923,linked_or_unlinked,refs,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__66018 = (i__65935 + (1));
i__65935 = G__66018;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65936),athens$devcards$node_page$node_page_el_$_iter__65858_$_iter__65926_$_iter__65933(cljs.core.chunk_rest(s__65934__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65936),null);
}
} else {
var map__65947 = cljs.core.first(s__65934__$2);
var map__65947__$1 = (((((!((map__65947 == null))))?(((((map__65947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65947):map__65947);
var block = map__65947__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65947__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65947__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65928,map__65947,map__65947__$1,block,uid__$1,parents,s__65934__$2,temp__5735__auto____$2,vec__65930,group_title,group,c__4580__auto__,size__4581__auto__,b__65929,s__65927__$2,temp__5735__auto____$1,vec__65923,linked_or_unlinked,refs,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65858_$_iter__65926_$_iter__65933_$_iter__65949(s__65950){
return (new cljs.core.LazySeq(null,((function (i__65928,map__65947,map__65947__$1,block,uid__$1,parents,s__65934__$2,temp__5735__auto____$2,vec__65930,group_title,group,c__4580__auto__,size__4581__auto__,b__65929,s__65927__$2,temp__5735__auto____$1,vec__65923,linked_or_unlinked,refs,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function (){
var s__65950__$1 = s__65950;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65950__$1);
if(temp__5735__auto____$3){
var s__65950__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65950__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65950__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65952 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65951 = (0);
while(true){
if((i__65951 < size__4581__auto____$1)){
var map__65953 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65951);
var map__65953__$1 = (((((!((map__65953 == null))))?(((((map__65953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65953):map__65953);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65953__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65953__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65953__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65952,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65951,i__65928,map__65953,map__65953__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65952,s__65950__$2,temp__5735__auto____$3,map__65947,map__65947__$1,block,uid__$1,parents,s__65934__$2,temp__5735__auto____$2,vec__65930,group_title,group,c__4580__auto__,size__4581__auto__,b__65929,s__65927__$2,temp__5735__auto____$1,vec__65923,linked_or_unlinked,refs,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65951,i__65928,map__65953,map__65953__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65952,s__65950__$2,temp__5735__auto____$3,map__65947,map__65947__$1,block,uid__$1,parents,s__65934__$2,temp__5735__auto____$2,vec__65930,group_title,group,c__4580__auto__,size__4581__auto__,b__65929,s__65927__$2,temp__5735__auto____$1,vec__65923,linked_or_unlinked,refs,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__66019 = (i__65951 + (1));
i__65951 = G__66019;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65952),athens$devcards$node_page$node_page_el_$_iter__65858_$_iter__65926_$_iter__65933_$_iter__65949(cljs.core.chunk_rest(s__65950__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65952),null);
}
} else {
var map__65955 = cljs.core.first(s__65950__$2);
var map__65955__$1 = (((((!((map__65955 == null))))?(((((map__65955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65955):map__65955);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65955__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65955__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65955__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65928,map__65955,map__65955__$1,title__$1,string,uid__$2,s__65950__$2,temp__5735__auto____$3,map__65947,map__65947__$1,block,uid__$1,parents,s__65934__$2,temp__5735__auto____$2,vec__65930,group_title,group,c__4580__auto__,size__4581__auto__,b__65929,s__65927__$2,temp__5735__auto____$1,vec__65923,linked_or_unlinked,refs,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65928,map__65955,map__65955__$1,title__$1,string,uid__$2,s__65950__$2,temp__5735__auto____$3,map__65947,map__65947__$1,block,uid__$1,parents,s__65934__$2,temp__5735__auto____$2,vec__65930,group_title,group,c__4580__auto__,size__4581__auto__,b__65929,s__65927__$2,temp__5735__auto____$1,vec__65923,linked_or_unlinked,refs,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65858_$_iter__65926_$_iter__65933_$_iter__65949(cljs.core.rest(s__65950__$2)));
}
} else {
return null;
}
break;
}
});})(i__65928,map__65947,map__65947__$1,block,uid__$1,parents,s__65934__$2,temp__5735__auto____$2,vec__65930,group_title,group,c__4580__auto__,size__4581__auto__,b__65929,s__65927__$2,temp__5735__auto____$1,vec__65923,linked_or_unlinked,refs,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
,null,null));
});})(i__65928,map__65947,map__65947__$1,block,uid__$1,parents,s__65934__$2,temp__5735__auto____$2,vec__65930,group_title,group,c__4580__auto__,size__4581__auto__,b__65929,s__65927__$2,temp__5735__auto____$1,vec__65923,linked_or_unlinked,refs,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__65858_$_iter__65926_$_iter__65933(cljs.core.rest(s__65934__$2)));
}
} else {
return null;
}
break;
}
});})(i__65928,vec__65930,group_title,group,c__4580__auto__,size__4581__auto__,b__65929,s__65927__$2,temp__5735__auto____$1,vec__65923,linked_or_unlinked,refs,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
,null,null));
});})(i__65928,vec__65930,group_title,group,c__4580__auto__,size__4581__auto__,b__65929,s__65927__$2,temp__5735__auto____$1,vec__65923,linked_or_unlinked,refs,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__66020 = (i__65928 + (1));
i__65928 = G__66020;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65929),athens$devcards$node_page$node_page_el_$_iter__65858_$_iter__65926(cljs.core.chunk_rest(s__65927__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65929),null);
}
} else {
var vec__65957 = cljs.core.first(s__65927__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65957,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65957,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__65957,group_title,group,s__65927__$2,temp__5735__auto____$1,vec__65923,linked_or_unlinked,refs,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__65957,group_title,group,s__65927__$2,temp__5735__auto____$1,vec__65923,linked_or_unlinked,refs,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (vec__65957,group_title,group,s__65927__$2,temp__5735__auto____$1,vec__65923,linked_or_unlinked,refs,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65858_$_iter__65926_$_iter__65960(s__65961){
return (new cljs.core.LazySeq(null,(function (){
var s__65961__$1 = s__65961;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65961__$1);
if(temp__5735__auto____$2){
var s__65961__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65961__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65961__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65963 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65962 = (0);
while(true){
if((i__65962 < size__4581__auto__)){
var map__65964 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65962);
var map__65964__$1 = (((((!((map__65964 == null))))?(((((map__65964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65964):map__65964);
var block = map__65964__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65964__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65964__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__65963,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65962,map__65964,map__65964__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65963,s__65961__$2,temp__5735__auto____$2,vec__65957,group_title,group,s__65927__$2,temp__5735__auto____$1,vec__65923,linked_or_unlinked,refs,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65858_$_iter__65926_$_iter__65960_$_iter__65966(s__65967){
return (new cljs.core.LazySeq(null,((function (i__65962,map__65964,map__65964__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65963,s__65961__$2,temp__5735__auto____$2,vec__65957,group_title,group,s__65927__$2,temp__5735__auto____$1,vec__65923,linked_or_unlinked,refs,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function (){
var s__65967__$1 = s__65967;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65967__$1);
if(temp__5735__auto____$3){
var s__65967__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65967__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65967__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65969 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65968 = (0);
while(true){
if((i__65968 < size__4581__auto____$1)){
var map__65970 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65968);
var map__65970__$1 = (((((!((map__65970 == null))))?(((((map__65970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65970):map__65970);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65970__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65970__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65970__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65969,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65968,i__65962,map__65970,map__65970__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65969,s__65967__$2,temp__5735__auto____$3,map__65964,map__65964__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65963,s__65961__$2,temp__5735__auto____$2,vec__65957,group_title,group,s__65927__$2,temp__5735__auto____$1,vec__65923,linked_or_unlinked,refs,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65968,i__65962,map__65970,map__65970__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65969,s__65967__$2,temp__5735__auto____$3,map__65964,map__65964__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65963,s__65961__$2,temp__5735__auto____$2,vec__65957,group_title,group,s__65927__$2,temp__5735__auto____$1,vec__65923,linked_or_unlinked,refs,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__66021 = (i__65968 + (1));
i__65968 = G__66021;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65969),athens$devcards$node_page$node_page_el_$_iter__65858_$_iter__65926_$_iter__65960_$_iter__65966(cljs.core.chunk_rest(s__65967__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65969),null);
}
} else {
var map__65972 = cljs.core.first(s__65967__$2);
var map__65972__$1 = (((((!((map__65972 == null))))?(((((map__65972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65972):map__65972);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65972__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65972__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65972__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65962,map__65972,map__65972__$1,title__$1,string,uid__$2,s__65967__$2,temp__5735__auto____$3,map__65964,map__65964__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65963,s__65961__$2,temp__5735__auto____$2,vec__65957,group_title,group,s__65927__$2,temp__5735__auto____$1,vec__65923,linked_or_unlinked,refs,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65962,map__65972,map__65972__$1,title__$1,string,uid__$2,s__65967__$2,temp__5735__auto____$3,map__65964,map__65964__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65963,s__65961__$2,temp__5735__auto____$2,vec__65957,group_title,group,s__65927__$2,temp__5735__auto____$1,vec__65923,linked_or_unlinked,refs,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65858_$_iter__65926_$_iter__65960_$_iter__65966(cljs.core.rest(s__65967__$2)));
}
} else {
return null;
}
break;
}
});})(i__65962,map__65964,map__65964__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65963,s__65961__$2,temp__5735__auto____$2,vec__65957,group_title,group,s__65927__$2,temp__5735__auto____$1,vec__65923,linked_or_unlinked,refs,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
,null,null));
});})(i__65962,map__65964,map__65964__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65963,s__65961__$2,temp__5735__auto____$2,vec__65957,group_title,group,s__65927__$2,temp__5735__auto____$1,vec__65923,linked_or_unlinked,refs,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__66022 = (i__65962 + (1));
i__65962 = G__66022;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65963),athens$devcards$node_page$node_page_el_$_iter__65858_$_iter__65926_$_iter__65960(cljs.core.chunk_rest(s__65961__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65963),null);
}
} else {
var map__65974 = cljs.core.first(s__65961__$2);
var map__65974__$1 = (((((!((map__65974 == null))))?(((((map__65974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65974):map__65974);
var block = map__65974__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65974__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65974__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (map__65974,map__65974__$1,block,uid__$1,parents,s__65961__$2,temp__5735__auto____$2,vec__65957,group_title,group,s__65927__$2,temp__5735__auto____$1,vec__65923,linked_or_unlinked,refs,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65858_$_iter__65926_$_iter__65960_$_iter__65976(s__65977){
return (new cljs.core.LazySeq(null,(function (){
var s__65977__$1 = s__65977;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65977__$1);
if(temp__5735__auto____$3){
var s__65977__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65977__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65977__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65979 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65978 = (0);
while(true){
if((i__65978 < size__4581__auto__)){
var map__65980 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65978);
var map__65980__$1 = (((((!((map__65980 == null))))?(((((map__65980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65980):map__65980);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65980__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65980__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65980__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65979,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65978,map__65980,map__65980__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__65979,s__65977__$2,temp__5735__auto____$3,map__65974,map__65974__$1,block,uid__$1,parents,s__65961__$2,temp__5735__auto____$2,vec__65957,group_title,group,s__65927__$2,temp__5735__auto____$1,vec__65923,linked_or_unlinked,refs,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65978,map__65980,map__65980__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__65979,s__65977__$2,temp__5735__auto____$3,map__65974,map__65974__$1,block,uid__$1,parents,s__65961__$2,temp__5735__auto____$2,vec__65957,group_title,group,s__65927__$2,temp__5735__auto____$1,vec__65923,linked_or_unlinked,refs,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__66023 = (i__65978 + (1));
i__65978 = G__66023;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65979),athens$devcards$node_page$node_page_el_$_iter__65858_$_iter__65926_$_iter__65960_$_iter__65976(cljs.core.chunk_rest(s__65977__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65979),null);
}
} else {
var map__65982 = cljs.core.first(s__65977__$2);
var map__65982__$1 = (((((!((map__65982 == null))))?(((((map__65982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65982):map__65982);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65982__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65982__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65982__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__65982,map__65982__$1,title__$1,string,uid__$2,s__65977__$2,temp__5735__auto____$3,map__65974,map__65974__$1,block,uid__$1,parents,s__65961__$2,temp__5735__auto____$2,vec__65957,group_title,group,s__65927__$2,temp__5735__auto____$1,vec__65923,linked_or_unlinked,refs,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__65982,map__65982__$1,title__$1,string,uid__$2,s__65977__$2,temp__5735__auto____$3,map__65974,map__65974__$1,block,uid__$1,parents,s__65961__$2,temp__5735__auto____$2,vec__65957,group_title,group,s__65927__$2,temp__5735__auto____$1,vec__65923,linked_or_unlinked,refs,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65858_$_iter__65926_$_iter__65960_$_iter__65976(cljs.core.rest(s__65977__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__65974,map__65974__$1,block,uid__$1,parents,s__65961__$2,temp__5735__auto____$2,vec__65957,group_title,group,s__65927__$2,temp__5735__auto____$1,vec__65923,linked_or_unlinked,refs,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__65858_$_iter__65926_$_iter__65960(cljs.core.rest(s__65961__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__65957,group_title,group,s__65927__$2,temp__5735__auto____$1,vec__65923,linked_or_unlinked,refs,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__65858_$_iter__65926(cljs.core.rest(s__65927__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__65923,linked_or_unlinked,refs,s__65859__$2,temp__5735__auto__,map__65846,map__65846__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null),athens$devcards$node_page$node_page_el_$_iter__65858(cljs.core.rest(s__65859__$2)));
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
var node = athens.db.get_node_document(ident);
var title = new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(node);
var editing_uid = cljs.core.deref((function (){var G__65984 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__65984) : re_frame.core.subscribe.call(null,G__65984));
})());
if(clojure.string.blank_QMARK_(title)){
return null;
} else {
var ref_groups = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Linked References",athens.devcards.node_page.get_data(athens.patterns.linked(title))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unlinked References",athens.devcards.node_page.get_data(athens.patterns.unlinked(title))], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.node_page.node_page_el,node,editing_uid,ref_groups], null);
}
});

//# sourceMappingURL=athens.devcards.node_page.js.map
