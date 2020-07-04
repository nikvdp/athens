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
var G__65823 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact-event","transact-event",1188240621),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__65823) : re_frame.core.dispatch.call(null,G__65823));
});
athens.devcards.node_page.db_handler = goog.functions.debounce(athens.devcards.node_page.handler,(500));
athens.devcards.node_page.get_ref_ids = (function athens$devcards$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__65824 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__65825 = athens.db.dsdb;
var G__65826 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__65824,G__65825,G__65826) : posh.reagent.q.call(null,G__65824,G__65825,G__65826));
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
athens.devcards.node_page.node_page_el = (function athens$devcards$node_page$node_page_el(p__65827,editing_uid,ref_groups){
var map__65828 = p__65827;
var map__65828__$1 = (((((!((map__65828 == null))))?(((((map__65828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65828):map__65828);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65828__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65828__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65828__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__65830 = e.target.value;
var G__65831 = uid;
return (athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__65830,G__65831) : athens.devcards.node_page.db_handler.call(null,G__65830,G__65831));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__65832(s__65833){
return (new cljs.core.LazySeq(null,(function (){
var s__65833__$1 = s__65833;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65833__$1);
if(temp__5735__auto__){
var s__65833__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65833__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65833__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65835 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65834 = (0);
while(true){
if((i__65834 < size__4581__auto__)){
var map__65836 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65834);
var map__65836__$1 = (((((!((map__65836 == null))))?(((((map__65836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65836):map__65836);
var child = map__65836__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65836__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65835,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__65982 = (i__65834 + (1));
i__65834 = G__65982;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65835),athens$devcards$node_page$node_page_el_$_iter__65832(cljs.core.chunk_rest(s__65833__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65835),null);
}
} else {
var map__65838 = cljs.core.first(s__65833__$2);
var map__65838__$1 = (((((!((map__65838 == null))))?(((((map__65838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65838):map__65838);
var child = map__65838__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65838__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$devcards$node_page$node_page_el_$_iter__65832(cljs.core.rest(s__65833__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__65840(s__65841){
return (new cljs.core.LazySeq(null,(function (){
var s__65841__$1 = s__65841;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65841__$1);
if(temp__5735__auto__){
var s__65841__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65841__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65841__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65843 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65842 = (0);
while(true){
if((i__65842 < size__4581__auto__)){
var vec__65844 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65842);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65844,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65844,(1),null);
cljs.core.chunk_append(b__65843,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (i__65842,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65840_$_iter__65847(s__65848){
return (new cljs.core.LazySeq(null,((function (i__65842,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function (){
var s__65848__$1 = s__65848;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__65848__$1);
if(temp__5735__auto____$1){
var s__65848__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__65848__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65848__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65850 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65849 = (0);
while(true){
if((i__65849 < size__4581__auto____$1)){
var vec__65851 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65849);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65851,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65851,(1),null);
cljs.core.chunk_append(b__65850,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65849,i__65842,vec__65851,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65850,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__65849,i__65842,vec__65851,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65850,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__65849,i__65842,vec__65851,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65850,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65840_$_iter__65847_$_iter__65854(s__65855){
return (new cljs.core.LazySeq(null,((function (i__65849,i__65842,vec__65851,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65850,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function (){
var s__65855__$1 = s__65855;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65855__$1);
if(temp__5735__auto____$2){
var s__65855__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65855__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__65855__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__65857 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__65856 = (0);
while(true){
if((i__65856 < size__4581__auto____$2)){
var map__65858 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__65856);
var map__65858__$1 = (((((!((map__65858 == null))))?(((((map__65858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65858):map__65858);
var block = map__65858__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65858__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65858__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__65857,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65856,i__65849,i__65842,map__65858,map__65858__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65857,s__65855__$2,temp__5735__auto____$2,vec__65851,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65850,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65840_$_iter__65847_$_iter__65854_$_iter__65860(s__65861){
return (new cljs.core.LazySeq(null,((function (i__65856,i__65849,i__65842,map__65858,map__65858__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65857,s__65855__$2,temp__5735__auto____$2,vec__65851,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65850,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function (){
var s__65861__$1 = s__65861;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65861__$1);
if(temp__5735__auto____$3){
var s__65861__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65861__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__65861__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__65863 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__65862 = (0);
while(true){
if((i__65862 < size__4581__auto____$3)){
var map__65864 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__65862);
var map__65864__$1 = (((((!((map__65864 == null))))?(((((map__65864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65864):map__65864);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65864__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65864__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65864__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65863,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65862,i__65856,i__65849,i__65842,map__65864,map__65864__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__65863,s__65861__$2,temp__5735__auto____$3,map__65858,map__65858__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65857,s__65855__$2,temp__5735__auto____$2,vec__65851,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65850,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65862,i__65856,i__65849,i__65842,map__65864,map__65864__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__65863,s__65861__$2,temp__5735__auto____$3,map__65858,map__65858__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65857,s__65855__$2,temp__5735__auto____$2,vec__65851,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65850,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65988 = (i__65862 + (1));
i__65862 = G__65988;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65863),athens$devcards$node_page$node_page_el_$_iter__65840_$_iter__65847_$_iter__65854_$_iter__65860(cljs.core.chunk_rest(s__65861__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65863),null);
}
} else {
var map__65866 = cljs.core.first(s__65861__$2);
var map__65866__$1 = (((((!((map__65866 == null))))?(((((map__65866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65866):map__65866);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65866__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65866__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65866__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65856,i__65849,i__65842,map__65866,map__65866__$1,title__$1,string,uid__$2,s__65861__$2,temp__5735__auto____$3,map__65858,map__65858__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65857,s__65855__$2,temp__5735__auto____$2,vec__65851,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65850,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65856,i__65849,i__65842,map__65866,map__65866__$1,title__$1,string,uid__$2,s__65861__$2,temp__5735__auto____$3,map__65858,map__65858__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65857,s__65855__$2,temp__5735__auto____$2,vec__65851,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65850,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65840_$_iter__65847_$_iter__65854_$_iter__65860(cljs.core.rest(s__65861__$2)));
}
} else {
return null;
}
break;
}
});})(i__65856,i__65849,i__65842,map__65858,map__65858__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65857,s__65855__$2,temp__5735__auto____$2,vec__65851,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65850,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
,null,null));
});})(i__65856,i__65849,i__65842,map__65858,map__65858__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65857,s__65855__$2,temp__5735__auto____$2,vec__65851,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65850,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__65989 = (i__65856 + (1));
i__65856 = G__65989;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65857),athens$devcards$node_page$node_page_el_$_iter__65840_$_iter__65847_$_iter__65854(cljs.core.chunk_rest(s__65855__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65857),null);
}
} else {
var map__65868 = cljs.core.first(s__65855__$2);
var map__65868__$1 = (((((!((map__65868 == null))))?(((((map__65868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65868):map__65868);
var block = map__65868__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65868__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65868__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65849,i__65842,map__65868,map__65868__$1,block,uid__$1,parents,s__65855__$2,temp__5735__auto____$2,vec__65851,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65850,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65840_$_iter__65847_$_iter__65854_$_iter__65870(s__65871){
return (new cljs.core.LazySeq(null,((function (i__65849,i__65842,map__65868,map__65868__$1,block,uid__$1,parents,s__65855__$2,temp__5735__auto____$2,vec__65851,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65850,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function (){
var s__65871__$1 = s__65871;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65871__$1);
if(temp__5735__auto____$3){
var s__65871__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65871__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__65871__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__65873 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__65872 = (0);
while(true){
if((i__65872 < size__4581__auto____$2)){
var map__65874 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__65872);
var map__65874__$1 = (((((!((map__65874 == null))))?(((((map__65874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65874):map__65874);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65874__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65874__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65874__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65873,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65872,i__65849,i__65842,map__65874,map__65874__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65873,s__65871__$2,temp__5735__auto____$3,map__65868,map__65868__$1,block,uid__$1,parents,s__65855__$2,temp__5735__auto____$2,vec__65851,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65850,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65872,i__65849,i__65842,map__65874,map__65874__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65873,s__65871__$2,temp__5735__auto____$3,map__65868,map__65868__$1,block,uid__$1,parents,s__65855__$2,temp__5735__auto____$2,vec__65851,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65850,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65990 = (i__65872 + (1));
i__65872 = G__65990;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65873),athens$devcards$node_page$node_page_el_$_iter__65840_$_iter__65847_$_iter__65854_$_iter__65870(cljs.core.chunk_rest(s__65871__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65873),null);
}
} else {
var map__65876 = cljs.core.first(s__65871__$2);
var map__65876__$1 = (((((!((map__65876 == null))))?(((((map__65876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65876):map__65876);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65876__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65876__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65876__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65849,i__65842,map__65876,map__65876__$1,title__$1,string,uid__$2,s__65871__$2,temp__5735__auto____$3,map__65868,map__65868__$1,block,uid__$1,parents,s__65855__$2,temp__5735__auto____$2,vec__65851,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65850,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65849,i__65842,map__65876,map__65876__$1,title__$1,string,uid__$2,s__65871__$2,temp__5735__auto____$3,map__65868,map__65868__$1,block,uid__$1,parents,s__65855__$2,temp__5735__auto____$2,vec__65851,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65850,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65840_$_iter__65847_$_iter__65854_$_iter__65870(cljs.core.rest(s__65871__$2)));
}
} else {
return null;
}
break;
}
});})(i__65849,i__65842,map__65868,map__65868__$1,block,uid__$1,parents,s__65855__$2,temp__5735__auto____$2,vec__65851,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65850,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
,null,null));
});})(i__65849,i__65842,map__65868,map__65868__$1,block,uid__$1,parents,s__65855__$2,temp__5735__auto____$2,vec__65851,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65850,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__65840_$_iter__65847_$_iter__65854(cljs.core.rest(s__65855__$2)));
}
} else {
return null;
}
break;
}
});})(i__65849,i__65842,vec__65851,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65850,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
,null,null));
});})(i__65849,i__65842,vec__65851,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65850,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__65991 = (i__65849 + (1));
i__65849 = G__65991;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65850),athens$devcards$node_page$node_page_el_$_iter__65840_$_iter__65847(cljs.core.chunk_rest(s__65848__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65850),null);
}
} else {
var vec__65878 = cljs.core.first(s__65848__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65878,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65878,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65842,vec__65878,group_title,group,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__65842,vec__65878,group_title,group,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__65842,vec__65878,group_title,group,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65840_$_iter__65847_$_iter__65881(s__65882){
return (new cljs.core.LazySeq(null,((function (i__65842,vec__65878,group_title,group,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function (){
var s__65882__$1 = s__65882;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65882__$1);
if(temp__5735__auto____$2){
var s__65882__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65882__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65882__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65884 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65883 = (0);
while(true){
if((i__65883 < size__4581__auto____$1)){
var map__65885 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65883);
var map__65885__$1 = (((((!((map__65885 == null))))?(((((map__65885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65885):map__65885);
var block = map__65885__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65885__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65885__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__65884,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65883,i__65842,map__65885,map__65885__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65884,s__65882__$2,temp__5735__auto____$2,vec__65878,group_title,group,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65840_$_iter__65847_$_iter__65881_$_iter__65887(s__65888){
return (new cljs.core.LazySeq(null,((function (i__65883,i__65842,map__65885,map__65885__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65884,s__65882__$2,temp__5735__auto____$2,vec__65878,group_title,group,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function (){
var s__65888__$1 = s__65888;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65888__$1);
if(temp__5735__auto____$3){
var s__65888__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65888__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__65888__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__65890 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__65889 = (0);
while(true){
if((i__65889 < size__4581__auto____$2)){
var map__65891 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__65889);
var map__65891__$1 = (((((!((map__65891 == null))))?(((((map__65891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65891):map__65891);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65891__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65891__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65891__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65890,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65889,i__65883,i__65842,map__65891,map__65891__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65890,s__65888__$2,temp__5735__auto____$3,map__65885,map__65885__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65884,s__65882__$2,temp__5735__auto____$2,vec__65878,group_title,group,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65889,i__65883,i__65842,map__65891,map__65891__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65890,s__65888__$2,temp__5735__auto____$3,map__65885,map__65885__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65884,s__65882__$2,temp__5735__auto____$2,vec__65878,group_title,group,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65992 = (i__65889 + (1));
i__65889 = G__65992;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65890),athens$devcards$node_page$node_page_el_$_iter__65840_$_iter__65847_$_iter__65881_$_iter__65887(cljs.core.chunk_rest(s__65888__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65890),null);
}
} else {
var map__65893 = cljs.core.first(s__65888__$2);
var map__65893__$1 = (((((!((map__65893 == null))))?(((((map__65893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65893):map__65893);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65893__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65893__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65893__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65883,i__65842,map__65893,map__65893__$1,title__$1,string,uid__$2,s__65888__$2,temp__5735__auto____$3,map__65885,map__65885__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65884,s__65882__$2,temp__5735__auto____$2,vec__65878,group_title,group,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65883,i__65842,map__65893,map__65893__$1,title__$1,string,uid__$2,s__65888__$2,temp__5735__auto____$3,map__65885,map__65885__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65884,s__65882__$2,temp__5735__auto____$2,vec__65878,group_title,group,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65840_$_iter__65847_$_iter__65881_$_iter__65887(cljs.core.rest(s__65888__$2)));
}
} else {
return null;
}
break;
}
});})(i__65883,i__65842,map__65885,map__65885__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65884,s__65882__$2,temp__5735__auto____$2,vec__65878,group_title,group,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
,null,null));
});})(i__65883,i__65842,map__65885,map__65885__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65884,s__65882__$2,temp__5735__auto____$2,vec__65878,group_title,group,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__65993 = (i__65883 + (1));
i__65883 = G__65993;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65884),athens$devcards$node_page$node_page_el_$_iter__65840_$_iter__65847_$_iter__65881(cljs.core.chunk_rest(s__65882__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65884),null);
}
} else {
var map__65895 = cljs.core.first(s__65882__$2);
var map__65895__$1 = (((((!((map__65895 == null))))?(((((map__65895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65895):map__65895);
var block = map__65895__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65895__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65895__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65842,map__65895,map__65895__$1,block,uid__$1,parents,s__65882__$2,temp__5735__auto____$2,vec__65878,group_title,group,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65840_$_iter__65847_$_iter__65881_$_iter__65897(s__65898){
return (new cljs.core.LazySeq(null,((function (i__65842,map__65895,map__65895__$1,block,uid__$1,parents,s__65882__$2,temp__5735__auto____$2,vec__65878,group_title,group,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function (){
var s__65898__$1 = s__65898;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65898__$1);
if(temp__5735__auto____$3){
var s__65898__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65898__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65898__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65900 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65899 = (0);
while(true){
if((i__65899 < size__4581__auto____$1)){
var map__65901 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65899);
var map__65901__$1 = (((((!((map__65901 == null))))?(((((map__65901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65901):map__65901);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65901__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65901__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65901__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65900,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65899,i__65842,map__65901,map__65901__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65900,s__65898__$2,temp__5735__auto____$3,map__65895,map__65895__$1,block,uid__$1,parents,s__65882__$2,temp__5735__auto____$2,vec__65878,group_title,group,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65899,i__65842,map__65901,map__65901__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65900,s__65898__$2,temp__5735__auto____$3,map__65895,map__65895__$1,block,uid__$1,parents,s__65882__$2,temp__5735__auto____$2,vec__65878,group_title,group,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65994 = (i__65899 + (1));
i__65899 = G__65994;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65900),athens$devcards$node_page$node_page_el_$_iter__65840_$_iter__65847_$_iter__65881_$_iter__65897(cljs.core.chunk_rest(s__65898__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65900),null);
}
} else {
var map__65903 = cljs.core.first(s__65898__$2);
var map__65903__$1 = (((((!((map__65903 == null))))?(((((map__65903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65903):map__65903);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65903__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65903__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65903__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65842,map__65903,map__65903__$1,title__$1,string,uid__$2,s__65898__$2,temp__5735__auto____$3,map__65895,map__65895__$1,block,uid__$1,parents,s__65882__$2,temp__5735__auto____$2,vec__65878,group_title,group,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65842,map__65903,map__65903__$1,title__$1,string,uid__$2,s__65898__$2,temp__5735__auto____$3,map__65895,map__65895__$1,block,uid__$1,parents,s__65882__$2,temp__5735__auto____$2,vec__65878,group_title,group,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65840_$_iter__65847_$_iter__65881_$_iter__65897(cljs.core.rest(s__65898__$2)));
}
} else {
return null;
}
break;
}
});})(i__65842,map__65895,map__65895__$1,block,uid__$1,parents,s__65882__$2,temp__5735__auto____$2,vec__65878,group_title,group,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
,null,null));
});})(i__65842,map__65895,map__65895__$1,block,uid__$1,parents,s__65882__$2,temp__5735__auto____$2,vec__65878,group_title,group,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__65840_$_iter__65847_$_iter__65881(cljs.core.rest(s__65882__$2)));
}
} else {
return null;
}
break;
}
});})(i__65842,vec__65878,group_title,group,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
,null,null));
});})(i__65842,vec__65878,group_title,group,s__65848__$2,temp__5735__auto____$1,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__65840_$_iter__65847(cljs.core.rest(s__65848__$2)));
}
} else {
return null;
}
break;
}
});})(i__65842,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
,null,null));
});})(i__65842,vec__65844,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65843,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null));

var G__65995 = (i__65842 + (1));
i__65842 = G__65995;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65843),athens$devcards$node_page$node_page_el_$_iter__65840(cljs.core.chunk_rest(s__65841__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65843),null);
}
} else {
var vec__65905 = cljs.core.first(s__65841__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65905,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65905,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (vec__65905,linked_or_unlinked,refs,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65840_$_iter__65908(s__65909){
return (new cljs.core.LazySeq(null,(function (){
var s__65909__$1 = s__65909;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__65909__$1);
if(temp__5735__auto____$1){
var s__65909__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__65909__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65909__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65911 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65910 = (0);
while(true){
if((i__65910 < size__4581__auto__)){
var vec__65912 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65910);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65912,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65912,(1),null);
cljs.core.chunk_append(b__65911,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65910,vec__65912,group_title,group,c__4580__auto__,size__4581__auto__,b__65911,s__65909__$2,temp__5735__auto____$1,vec__65905,linked_or_unlinked,refs,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__65910,vec__65912,group_title,group,c__4580__auto__,size__4581__auto__,b__65911,s__65909__$2,temp__5735__auto____$1,vec__65905,linked_or_unlinked,refs,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__65910,vec__65912,group_title,group,c__4580__auto__,size__4581__auto__,b__65911,s__65909__$2,temp__5735__auto____$1,vec__65905,linked_or_unlinked,refs,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65840_$_iter__65908_$_iter__65915(s__65916){
return (new cljs.core.LazySeq(null,((function (i__65910,vec__65912,group_title,group,c__4580__auto__,size__4581__auto__,b__65911,s__65909__$2,temp__5735__auto____$1,vec__65905,linked_or_unlinked,refs,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function (){
var s__65916__$1 = s__65916;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65916__$1);
if(temp__5735__auto____$2){
var s__65916__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65916__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65916__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65918 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65917 = (0);
while(true){
if((i__65917 < size__4581__auto____$1)){
var map__65919 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65917);
var map__65919__$1 = (((((!((map__65919 == null))))?(((((map__65919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65919):map__65919);
var block = map__65919__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65919__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65919__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__65918,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65917,i__65910,map__65919,map__65919__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65918,s__65916__$2,temp__5735__auto____$2,vec__65912,group_title,group,c__4580__auto__,size__4581__auto__,b__65911,s__65909__$2,temp__5735__auto____$1,vec__65905,linked_or_unlinked,refs,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65840_$_iter__65908_$_iter__65915_$_iter__65921(s__65922){
return (new cljs.core.LazySeq(null,((function (i__65917,i__65910,map__65919,map__65919__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65918,s__65916__$2,temp__5735__auto____$2,vec__65912,group_title,group,c__4580__auto__,size__4581__auto__,b__65911,s__65909__$2,temp__5735__auto____$1,vec__65905,linked_or_unlinked,refs,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function (){
var s__65922__$1 = s__65922;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65922__$1);
if(temp__5735__auto____$3){
var s__65922__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65922__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__65922__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__65924 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__65923 = (0);
while(true){
if((i__65923 < size__4581__auto____$2)){
var map__65925 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__65923);
var map__65925__$1 = (((((!((map__65925 == null))))?(((((map__65925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65925):map__65925);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65925__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65925__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65925__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65924,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65923,i__65917,i__65910,map__65925,map__65925__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65924,s__65922__$2,temp__5735__auto____$3,map__65919,map__65919__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65918,s__65916__$2,temp__5735__auto____$2,vec__65912,group_title,group,c__4580__auto__,size__4581__auto__,b__65911,s__65909__$2,temp__5735__auto____$1,vec__65905,linked_or_unlinked,refs,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65923,i__65917,i__65910,map__65925,map__65925__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65924,s__65922__$2,temp__5735__auto____$3,map__65919,map__65919__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65918,s__65916__$2,temp__5735__auto____$2,vec__65912,group_title,group,c__4580__auto__,size__4581__auto__,b__65911,s__65909__$2,temp__5735__auto____$1,vec__65905,linked_or_unlinked,refs,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65996 = (i__65923 + (1));
i__65923 = G__65996;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65924),athens$devcards$node_page$node_page_el_$_iter__65840_$_iter__65908_$_iter__65915_$_iter__65921(cljs.core.chunk_rest(s__65922__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65924),null);
}
} else {
var map__65927 = cljs.core.first(s__65922__$2);
var map__65927__$1 = (((((!((map__65927 == null))))?(((((map__65927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65927):map__65927);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65927__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65927__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65927__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65917,i__65910,map__65927,map__65927__$1,title__$1,string,uid__$2,s__65922__$2,temp__5735__auto____$3,map__65919,map__65919__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65918,s__65916__$2,temp__5735__auto____$2,vec__65912,group_title,group,c__4580__auto__,size__4581__auto__,b__65911,s__65909__$2,temp__5735__auto____$1,vec__65905,linked_or_unlinked,refs,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65917,i__65910,map__65927,map__65927__$1,title__$1,string,uid__$2,s__65922__$2,temp__5735__auto____$3,map__65919,map__65919__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65918,s__65916__$2,temp__5735__auto____$2,vec__65912,group_title,group,c__4580__auto__,size__4581__auto__,b__65911,s__65909__$2,temp__5735__auto____$1,vec__65905,linked_or_unlinked,refs,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65840_$_iter__65908_$_iter__65915_$_iter__65921(cljs.core.rest(s__65922__$2)));
}
} else {
return null;
}
break;
}
});})(i__65917,i__65910,map__65919,map__65919__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65918,s__65916__$2,temp__5735__auto____$2,vec__65912,group_title,group,c__4580__auto__,size__4581__auto__,b__65911,s__65909__$2,temp__5735__auto____$1,vec__65905,linked_or_unlinked,refs,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
,null,null));
});})(i__65917,i__65910,map__65919,map__65919__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65918,s__65916__$2,temp__5735__auto____$2,vec__65912,group_title,group,c__4580__auto__,size__4581__auto__,b__65911,s__65909__$2,temp__5735__auto____$1,vec__65905,linked_or_unlinked,refs,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__65997 = (i__65917 + (1));
i__65917 = G__65997;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65918),athens$devcards$node_page$node_page_el_$_iter__65840_$_iter__65908_$_iter__65915(cljs.core.chunk_rest(s__65916__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65918),null);
}
} else {
var map__65929 = cljs.core.first(s__65916__$2);
var map__65929__$1 = (((((!((map__65929 == null))))?(((((map__65929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65929):map__65929);
var block = map__65929__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65929__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65929__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65910,map__65929,map__65929__$1,block,uid__$1,parents,s__65916__$2,temp__5735__auto____$2,vec__65912,group_title,group,c__4580__auto__,size__4581__auto__,b__65911,s__65909__$2,temp__5735__auto____$1,vec__65905,linked_or_unlinked,refs,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65840_$_iter__65908_$_iter__65915_$_iter__65931(s__65932){
return (new cljs.core.LazySeq(null,((function (i__65910,map__65929,map__65929__$1,block,uid__$1,parents,s__65916__$2,temp__5735__auto____$2,vec__65912,group_title,group,c__4580__auto__,size__4581__auto__,b__65911,s__65909__$2,temp__5735__auto____$1,vec__65905,linked_or_unlinked,refs,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function (){
var s__65932__$1 = s__65932;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65932__$1);
if(temp__5735__auto____$3){
var s__65932__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65932__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65932__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65934 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65933 = (0);
while(true){
if((i__65933 < size__4581__auto____$1)){
var map__65935 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65933);
var map__65935__$1 = (((((!((map__65935 == null))))?(((((map__65935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65935):map__65935);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65935__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65935__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65935__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65934,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65933,i__65910,map__65935,map__65935__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65934,s__65932__$2,temp__5735__auto____$3,map__65929,map__65929__$1,block,uid__$1,parents,s__65916__$2,temp__5735__auto____$2,vec__65912,group_title,group,c__4580__auto__,size__4581__auto__,b__65911,s__65909__$2,temp__5735__auto____$1,vec__65905,linked_or_unlinked,refs,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65933,i__65910,map__65935,map__65935__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65934,s__65932__$2,temp__5735__auto____$3,map__65929,map__65929__$1,block,uid__$1,parents,s__65916__$2,temp__5735__auto____$2,vec__65912,group_title,group,c__4580__auto__,size__4581__auto__,b__65911,s__65909__$2,temp__5735__auto____$1,vec__65905,linked_or_unlinked,refs,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65998 = (i__65933 + (1));
i__65933 = G__65998;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65934),athens$devcards$node_page$node_page_el_$_iter__65840_$_iter__65908_$_iter__65915_$_iter__65931(cljs.core.chunk_rest(s__65932__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65934),null);
}
} else {
var map__65937 = cljs.core.first(s__65932__$2);
var map__65937__$1 = (((((!((map__65937 == null))))?(((((map__65937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65937):map__65937);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65937__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65937__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65937__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65910,map__65937,map__65937__$1,title__$1,string,uid__$2,s__65932__$2,temp__5735__auto____$3,map__65929,map__65929__$1,block,uid__$1,parents,s__65916__$2,temp__5735__auto____$2,vec__65912,group_title,group,c__4580__auto__,size__4581__auto__,b__65911,s__65909__$2,temp__5735__auto____$1,vec__65905,linked_or_unlinked,refs,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65910,map__65937,map__65937__$1,title__$1,string,uid__$2,s__65932__$2,temp__5735__auto____$3,map__65929,map__65929__$1,block,uid__$1,parents,s__65916__$2,temp__5735__auto____$2,vec__65912,group_title,group,c__4580__auto__,size__4581__auto__,b__65911,s__65909__$2,temp__5735__auto____$1,vec__65905,linked_or_unlinked,refs,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65840_$_iter__65908_$_iter__65915_$_iter__65931(cljs.core.rest(s__65932__$2)));
}
} else {
return null;
}
break;
}
});})(i__65910,map__65929,map__65929__$1,block,uid__$1,parents,s__65916__$2,temp__5735__auto____$2,vec__65912,group_title,group,c__4580__auto__,size__4581__auto__,b__65911,s__65909__$2,temp__5735__auto____$1,vec__65905,linked_or_unlinked,refs,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
,null,null));
});})(i__65910,map__65929,map__65929__$1,block,uid__$1,parents,s__65916__$2,temp__5735__auto____$2,vec__65912,group_title,group,c__4580__auto__,size__4581__auto__,b__65911,s__65909__$2,temp__5735__auto____$1,vec__65905,linked_or_unlinked,refs,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__65840_$_iter__65908_$_iter__65915(cljs.core.rest(s__65916__$2)));
}
} else {
return null;
}
break;
}
});})(i__65910,vec__65912,group_title,group,c__4580__auto__,size__4581__auto__,b__65911,s__65909__$2,temp__5735__auto____$1,vec__65905,linked_or_unlinked,refs,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
,null,null));
});})(i__65910,vec__65912,group_title,group,c__4580__auto__,size__4581__auto__,b__65911,s__65909__$2,temp__5735__auto____$1,vec__65905,linked_or_unlinked,refs,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__65999 = (i__65910 + (1));
i__65910 = G__65999;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65911),athens$devcards$node_page$node_page_el_$_iter__65840_$_iter__65908(cljs.core.chunk_rest(s__65909__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65911),null);
}
} else {
var vec__65939 = cljs.core.first(s__65909__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65939,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65939,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__65939,group_title,group,s__65909__$2,temp__5735__auto____$1,vec__65905,linked_or_unlinked,refs,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__65939,group_title,group,s__65909__$2,temp__5735__auto____$1,vec__65905,linked_or_unlinked,refs,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (vec__65939,group_title,group,s__65909__$2,temp__5735__auto____$1,vec__65905,linked_or_unlinked,refs,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65840_$_iter__65908_$_iter__65942(s__65943){
return (new cljs.core.LazySeq(null,(function (){
var s__65943__$1 = s__65943;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65943__$1);
if(temp__5735__auto____$2){
var s__65943__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65943__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65943__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65945 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65944 = (0);
while(true){
if((i__65944 < size__4581__auto__)){
var map__65946 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65944);
var map__65946__$1 = (((((!((map__65946 == null))))?(((((map__65946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65946):map__65946);
var block = map__65946__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65946__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65946__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__65945,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65944,map__65946,map__65946__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65945,s__65943__$2,temp__5735__auto____$2,vec__65939,group_title,group,s__65909__$2,temp__5735__auto____$1,vec__65905,linked_or_unlinked,refs,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65840_$_iter__65908_$_iter__65942_$_iter__65948(s__65949){
return (new cljs.core.LazySeq(null,((function (i__65944,map__65946,map__65946__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65945,s__65943__$2,temp__5735__auto____$2,vec__65939,group_title,group,s__65909__$2,temp__5735__auto____$1,vec__65905,linked_or_unlinked,refs,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function (){
var s__65949__$1 = s__65949;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65949__$1);
if(temp__5735__auto____$3){
var s__65949__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65949__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65949__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65951 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65950 = (0);
while(true){
if((i__65950 < size__4581__auto____$1)){
var map__65952 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65950);
var map__65952__$1 = (((((!((map__65952 == null))))?(((((map__65952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65952):map__65952);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65952__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65952__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65952__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65951,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65950,i__65944,map__65952,map__65952__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65951,s__65949__$2,temp__5735__auto____$3,map__65946,map__65946__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65945,s__65943__$2,temp__5735__auto____$2,vec__65939,group_title,group,s__65909__$2,temp__5735__auto____$1,vec__65905,linked_or_unlinked,refs,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65950,i__65944,map__65952,map__65952__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65951,s__65949__$2,temp__5735__auto____$3,map__65946,map__65946__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65945,s__65943__$2,temp__5735__auto____$2,vec__65939,group_title,group,s__65909__$2,temp__5735__auto____$1,vec__65905,linked_or_unlinked,refs,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__66000 = (i__65950 + (1));
i__65950 = G__66000;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65951),athens$devcards$node_page$node_page_el_$_iter__65840_$_iter__65908_$_iter__65942_$_iter__65948(cljs.core.chunk_rest(s__65949__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65951),null);
}
} else {
var map__65954 = cljs.core.first(s__65949__$2);
var map__65954__$1 = (((((!((map__65954 == null))))?(((((map__65954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65954):map__65954);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65954__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65954__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65954__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65944,map__65954,map__65954__$1,title__$1,string,uid__$2,s__65949__$2,temp__5735__auto____$3,map__65946,map__65946__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65945,s__65943__$2,temp__5735__auto____$2,vec__65939,group_title,group,s__65909__$2,temp__5735__auto____$1,vec__65905,linked_or_unlinked,refs,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65944,map__65954,map__65954__$1,title__$1,string,uid__$2,s__65949__$2,temp__5735__auto____$3,map__65946,map__65946__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65945,s__65943__$2,temp__5735__auto____$2,vec__65939,group_title,group,s__65909__$2,temp__5735__auto____$1,vec__65905,linked_or_unlinked,refs,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65840_$_iter__65908_$_iter__65942_$_iter__65948(cljs.core.rest(s__65949__$2)));
}
} else {
return null;
}
break;
}
});})(i__65944,map__65946,map__65946__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65945,s__65943__$2,temp__5735__auto____$2,vec__65939,group_title,group,s__65909__$2,temp__5735__auto____$1,vec__65905,linked_or_unlinked,refs,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
,null,null));
});})(i__65944,map__65946,map__65946__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65945,s__65943__$2,temp__5735__auto____$2,vec__65939,group_title,group,s__65909__$2,temp__5735__auto____$1,vec__65905,linked_or_unlinked,refs,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__66001 = (i__65944 + (1));
i__65944 = G__66001;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65945),athens$devcards$node_page$node_page_el_$_iter__65840_$_iter__65908_$_iter__65942(cljs.core.chunk_rest(s__65943__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65945),null);
}
} else {
var map__65956 = cljs.core.first(s__65943__$2);
var map__65956__$1 = (((((!((map__65956 == null))))?(((((map__65956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65956):map__65956);
var block = map__65956__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65956__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65956__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (map__65956,map__65956__$1,block,uid__$1,parents,s__65943__$2,temp__5735__auto____$2,vec__65939,group_title,group,s__65909__$2,temp__5735__auto____$1,vec__65905,linked_or_unlinked,refs,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65840_$_iter__65908_$_iter__65942_$_iter__65958(s__65959){
return (new cljs.core.LazySeq(null,(function (){
var s__65959__$1 = s__65959;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65959__$1);
if(temp__5735__auto____$3){
var s__65959__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65959__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65959__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65961 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65960 = (0);
while(true){
if((i__65960 < size__4581__auto__)){
var map__65962 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65960);
var map__65962__$1 = (((((!((map__65962 == null))))?(((((map__65962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65962):map__65962);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65962__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65962__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65962__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65961,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65960,map__65962,map__65962__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__65961,s__65959__$2,temp__5735__auto____$3,map__65956,map__65956__$1,block,uid__$1,parents,s__65943__$2,temp__5735__auto____$2,vec__65939,group_title,group,s__65909__$2,temp__5735__auto____$1,vec__65905,linked_or_unlinked,refs,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65960,map__65962,map__65962__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__65961,s__65959__$2,temp__5735__auto____$3,map__65956,map__65956__$1,block,uid__$1,parents,s__65943__$2,temp__5735__auto____$2,vec__65939,group_title,group,s__65909__$2,temp__5735__auto____$1,vec__65905,linked_or_unlinked,refs,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__66002 = (i__65960 + (1));
i__65960 = G__66002;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65961),athens$devcards$node_page$node_page_el_$_iter__65840_$_iter__65908_$_iter__65942_$_iter__65958(cljs.core.chunk_rest(s__65959__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65961),null);
}
} else {
var map__65964 = cljs.core.first(s__65959__$2);
var map__65964__$1 = (((((!((map__65964 == null))))?(((((map__65964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65964):map__65964);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65964__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65964__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65964__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__65964,map__65964__$1,title__$1,string,uid__$2,s__65959__$2,temp__5735__auto____$3,map__65956,map__65956__$1,block,uid__$1,parents,s__65943__$2,temp__5735__auto____$2,vec__65939,group_title,group,s__65909__$2,temp__5735__auto____$1,vec__65905,linked_or_unlinked,refs,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__65964,map__65964__$1,title__$1,string,uid__$2,s__65959__$2,temp__5735__auto____$3,map__65956,map__65956__$1,block,uid__$1,parents,s__65943__$2,temp__5735__auto____$2,vec__65939,group_title,group,s__65909__$2,temp__5735__auto____$1,vec__65905,linked_or_unlinked,refs,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65840_$_iter__65908_$_iter__65942_$_iter__65958(cljs.core.rest(s__65959__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__65956,map__65956__$1,block,uid__$1,parents,s__65943__$2,temp__5735__auto____$2,vec__65939,group_title,group,s__65909__$2,temp__5735__auto____$1,vec__65905,linked_or_unlinked,refs,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__65840_$_iter__65908_$_iter__65942(cljs.core.rest(s__65943__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__65939,group_title,group,s__65909__$2,temp__5735__auto____$1,vec__65905,linked_or_unlinked,refs,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__65840_$_iter__65908(cljs.core.rest(s__65909__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__65905,linked_or_unlinked,refs,s__65841__$2,temp__5735__auto__,map__65828,map__65828__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null),athens$devcards$node_page$node_page_el_$_iter__65840(cljs.core.rest(s__65841__$2)));
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
var editing_uid = cljs.core.deref((function (){var G__65966 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__65966) : re_frame.core.subscribe.call(null,G__65966));
})());
if(clojure.string.blank_QMARK_(title)){
return null;
} else {
var ref_groups = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Linked References",athens.devcards.node_page.get_data(athens.patterns.linked(title))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unlinked References",athens.devcards.node_page.get_data(athens.patterns.unlinked(title))], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.node_page.node_page_el,node,editing_uid,ref_groups], null);
}
});

//# sourceMappingURL=athens.devcards.node_page.js.map
