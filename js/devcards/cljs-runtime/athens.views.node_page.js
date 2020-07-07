goog.provide('athens.views.node_page');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.db');
goog.require('athens.patterns');
goog.require('athens.router');
goog.require('athens.style');
goog.require('athens.views.blocks');
goog.require('athens.views.breadcrumbs');
goog.require('athens.views.buttons');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
goog.require('garden.selectors');
goog.require('goog.functions');
goog.require('komponentit.autosize');
goog.require('posh.reagent');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('stylefy.core');
goog.require('tick.alpha.api');
athens.views.node_page.page_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),"2rem auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 2rem",new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),"100%",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"55rem"], null);
athens.views.node_page.title_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"visible",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),"1",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.2em 0",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.03em",new cljs.core.Keyword(null,"word-break","word-break",-407281356),"break-word",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"-webkit-appearance","-webkit-appearance",375531635),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"caret-color","caret-color",997187317),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"margin","margin",-995903681)],["inherit","translate3d(0,0,0)","inherit","100%","inherit","opacity 0.15s ease","0","inherit","100%","transparent","text","none","none","0","0",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),"0","absolute","inherit","0","4px","inherit","0","0"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea:focus","textarea:focus",117113075),new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10",new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._PLUS_(new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.Keyword(null,"span","span",1394872991)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null)], null)], null)], null);
athens.views.node_page.references_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-block","margin-block",1690397674),"3em"], null);
athens.views.node_page.references_heading_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 2rem",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"0.25em",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%"], null)], null)], null)], null);
athens.views.node_page.references_list_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null);
athens.views.node_page.references_group_title_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword(null,"margin","margin",-995903681),"0 1.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a:hover","a:hover",-1474674872),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null)], null);
athens.views.node_page.references_group_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527),new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971)),new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 0.5rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.5em 0"], null);
athens.views.node_page.reference_breadcrumbs_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem calc(2rem - 0.5em)"], null);
athens.views.node_page.references_group_block_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px solid ",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527))], null)], null),new cljs.core.Keyword(null,"padding-block-start","padding-block-start",1054404612),"1em",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"1em",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:first-of-type","&:first-of-type",1836617087),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"0",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"0"], null)], null)], null)], null);
athens.views.node_page.handler = (function athens$views$node_page$handler(val,uid){
var G__58143 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58143) : re_frame.core.dispatch.call(null,G__58143));
});
athens.views.node_page.db_handler = goog.functions.debounce(athens.views.node_page.handler,(500));
athens.views.node_page.get_ref_ids = (function athens$views$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__58144 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__58145 = athens.db.dsdb;
var G__58146 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__58144,G__58145,G__58146) : posh.reagent.q.call(null,G__58144,G__58145,G__58146));
})());
});
athens.views.node_page.merge_parents_and_block = (function athens$views$node_page$merge_parents_and_block(ref_ids){
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
athens.views.node_page.group_by_parent = (function athens$views$node_page$group_by_parent(blocks){
return cljs.core.group_by((function (x){
return new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword("block","parents","block/parents",-1954648902).cljs$core$IFn$_invoke$arity$1(x)));
}),blocks);
});
athens.views.node_page.get_data = (function athens$views$node_page$get_data(pattern){
return cljs.core.seq(athens.views.node_page.group_by_parent(athens.views.node_page.merge_parents_and_block(athens.views.node_page.get_ref_ids(pattern))));
});
athens.views.node_page.is_timeline_page = (function athens$views$node_page$is_timeline_page(uid){
return cljs.core.boolean$((function (){try{var vec__58148 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58148,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58148,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58148,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e58147){if((e58147 instanceof Object)){
var _ = e58147;
return false;
} else {
throw e58147;

}
}})());
});
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(p__58151,editing_uid,ref_groups,timeline_page_QMARK_){
var map__58152 = p__58151;
var map__58152__$1 = (((((!((map__58152 == null))))?(((((map__58152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58152):map__58152);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58152__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58152__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58152__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.page_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58154 = e.target.value;
var G__58155 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58154,G__58155) : athens.views.node_page.db_handler.call(null,G__58154,G__58155));
})], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58156(s__58157){
return (new cljs.core.LazySeq(null,(function (){
var s__58157__$1 = s__58157;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58157__$1);
if(temp__5735__auto__){
var s__58157__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58157__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58157__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58159 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58158 = (0);
while(true){
if((i__58158 < size__4581__auto__)){
var map__58160 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58158);
var map__58160__$1 = (((((!((map__58160 == null))))?(((((map__58160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58160):map__58160);
var child = map__58160__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58160__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58159,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58293 = (i__58158 + (1));
i__58158 = G__58293;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58159),athens$views$node_page$node_page_el_$_iter__58156(cljs.core.chunk_rest(s__58157__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58159),null);
}
} else {
var map__58162 = cljs.core.first(s__58157__$2);
var map__58162__$1 = (((((!((map__58162 == null))))?(((((map__58162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58162):map__58162);
var child = map__58162__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58162__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__58156(cljs.core.rest(s__58157__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58164(s__58165){
return (new cljs.core.LazySeq(null,(function (){
var s__58165__$1 = s__58165;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58165__$1);
if(temp__5735__auto__){
var s__58165__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58165__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58165__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58167 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58166 = (0);
while(true){
if((i__58166 < size__4581__auto__)){
var vec__58168 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58166);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58168,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58168,(1),null);
cljs.core.chunk_append(b__58167,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (i__58166,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58164_$_iter__58171(s__58172){
return (new cljs.core.LazySeq(null,((function (i__58166,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function (){
var s__58172__$1 = s__58172;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58172__$1);
if(temp__5735__auto____$1){
var s__58172__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58172__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58172__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58174 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58173 = (0);
while(true){
if((i__58173 < size__4581__auto____$1)){
var vec__58175 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58173);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58175,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58175,(1),null);
cljs.core.chunk_append(b__58174,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58173,i__58166,vec__58175,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58174,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58173,i__58166,vec__58175,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58174,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58173,i__58166,vec__58175,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58174,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58164_$_iter__58171_$_iter__58178(s__58179){
return (new cljs.core.LazySeq(null,((function (i__58173,i__58166,vec__58175,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58174,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function (){
var s__58179__$1 = s__58179;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58179__$1);
if(temp__5735__auto____$2){
var s__58179__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58179__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58179__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58181 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58180 = (0);
while(true){
if((i__58180 < size__4581__auto____$2)){
var map__58182 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58180);
var map__58182__$1 = (((((!((map__58182 == null))))?(((((map__58182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58182):map__58182);
var block = map__58182__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58182__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58182__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58181,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58180,i__58173,i__58166,map__58182,map__58182__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58181,s__58179__$2,temp__5735__auto____$2,vec__58175,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58174,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58164_$_iter__58171_$_iter__58178_$_iter__58184(s__58185){
return (new cljs.core.LazySeq(null,((function (i__58180,i__58173,i__58166,map__58182,map__58182__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58181,s__58179__$2,temp__5735__auto____$2,vec__58175,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58174,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function (){
var s__58185__$1 = s__58185;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58185__$1);
if(temp__5735__auto____$3){
var s__58185__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58185__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58185__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58187 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58186 = (0);
while(true){
if((i__58186 < size__4581__auto____$3)){
var map__58188 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58186);
var map__58188__$1 = (((((!((map__58188 == null))))?(((((map__58188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58188):map__58188);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58188__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58188__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58188__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58187,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58186,i__58180,i__58173,i__58166,map__58188,map__58188__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58187,s__58185__$2,temp__5735__auto____$3,map__58182,map__58182__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58181,s__58179__$2,temp__5735__auto____$2,vec__58175,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58174,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58186,i__58180,i__58173,i__58166,map__58188,map__58188__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58187,s__58185__$2,temp__5735__auto____$3,map__58182,map__58182__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58181,s__58179__$2,temp__5735__auto____$2,vec__58175,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58174,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58294 = (i__58186 + (1));
i__58186 = G__58294;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58187),athens$views$node_page$node_page_el_$_iter__58164_$_iter__58171_$_iter__58178_$_iter__58184(cljs.core.chunk_rest(s__58185__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58187),null);
}
} else {
var map__58190 = cljs.core.first(s__58185__$2);
var map__58190__$1 = (((((!((map__58190 == null))))?(((((map__58190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58190):map__58190);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58190__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58190__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58190__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58180,i__58173,i__58166,map__58190,map__58190__$1,title__$1,string,uid__$2,s__58185__$2,temp__5735__auto____$3,map__58182,map__58182__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58181,s__58179__$2,temp__5735__auto____$2,vec__58175,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58174,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58180,i__58173,i__58166,map__58190,map__58190__$1,title__$1,string,uid__$2,s__58185__$2,temp__5735__auto____$3,map__58182,map__58182__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58181,s__58179__$2,temp__5735__auto____$2,vec__58175,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58174,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58164_$_iter__58171_$_iter__58178_$_iter__58184(cljs.core.rest(s__58185__$2)));
}
} else {
return null;
}
break;
}
});})(i__58180,i__58173,i__58166,map__58182,map__58182__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58181,s__58179__$2,temp__5735__auto____$2,vec__58175,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58174,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
,null,null));
});})(i__58180,i__58173,i__58166,map__58182,map__58182__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58181,s__58179__$2,temp__5735__auto____$2,vec__58175,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58174,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58295 = (i__58180 + (1));
i__58180 = G__58295;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58181),athens$views$node_page$node_page_el_$_iter__58164_$_iter__58171_$_iter__58178(cljs.core.chunk_rest(s__58179__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58181),null);
}
} else {
var map__58192 = cljs.core.first(s__58179__$2);
var map__58192__$1 = (((((!((map__58192 == null))))?(((((map__58192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58192):map__58192);
var block = map__58192__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58192__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58192__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58173,i__58166,map__58192,map__58192__$1,block,uid__$1,parents,s__58179__$2,temp__5735__auto____$2,vec__58175,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58174,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58164_$_iter__58171_$_iter__58178_$_iter__58194(s__58195){
return (new cljs.core.LazySeq(null,((function (i__58173,i__58166,map__58192,map__58192__$1,block,uid__$1,parents,s__58179__$2,temp__5735__auto____$2,vec__58175,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58174,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function (){
var s__58195__$1 = s__58195;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58195__$1);
if(temp__5735__auto____$3){
var s__58195__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58195__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58195__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58197 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58196 = (0);
while(true){
if((i__58196 < size__4581__auto____$2)){
var map__58198 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58196);
var map__58198__$1 = (((((!((map__58198 == null))))?(((((map__58198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58198):map__58198);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58198__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58198__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58198__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58197,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58196,i__58173,i__58166,map__58198,map__58198__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58197,s__58195__$2,temp__5735__auto____$3,map__58192,map__58192__$1,block,uid__$1,parents,s__58179__$2,temp__5735__auto____$2,vec__58175,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58174,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58196,i__58173,i__58166,map__58198,map__58198__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58197,s__58195__$2,temp__5735__auto____$3,map__58192,map__58192__$1,block,uid__$1,parents,s__58179__$2,temp__5735__auto____$2,vec__58175,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58174,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58296 = (i__58196 + (1));
i__58196 = G__58296;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58197),athens$views$node_page$node_page_el_$_iter__58164_$_iter__58171_$_iter__58178_$_iter__58194(cljs.core.chunk_rest(s__58195__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58197),null);
}
} else {
var map__58200 = cljs.core.first(s__58195__$2);
var map__58200__$1 = (((((!((map__58200 == null))))?(((((map__58200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58200):map__58200);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58200__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58200__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58200__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58173,i__58166,map__58200,map__58200__$1,title__$1,string,uid__$2,s__58195__$2,temp__5735__auto____$3,map__58192,map__58192__$1,block,uid__$1,parents,s__58179__$2,temp__5735__auto____$2,vec__58175,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58174,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58173,i__58166,map__58200,map__58200__$1,title__$1,string,uid__$2,s__58195__$2,temp__5735__auto____$3,map__58192,map__58192__$1,block,uid__$1,parents,s__58179__$2,temp__5735__auto____$2,vec__58175,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58174,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58164_$_iter__58171_$_iter__58178_$_iter__58194(cljs.core.rest(s__58195__$2)));
}
} else {
return null;
}
break;
}
});})(i__58173,i__58166,map__58192,map__58192__$1,block,uid__$1,parents,s__58179__$2,temp__5735__auto____$2,vec__58175,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58174,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
,null,null));
});})(i__58173,i__58166,map__58192,map__58192__$1,block,uid__$1,parents,s__58179__$2,temp__5735__auto____$2,vec__58175,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58174,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58164_$_iter__58171_$_iter__58178(cljs.core.rest(s__58179__$2)));
}
} else {
return null;
}
break;
}
});})(i__58173,i__58166,vec__58175,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58174,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
,null,null));
});})(i__58173,i__58166,vec__58175,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58174,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58297 = (i__58173 + (1));
i__58173 = G__58297;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58174),athens$views$node_page$node_page_el_$_iter__58164_$_iter__58171(cljs.core.chunk_rest(s__58172__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58174),null);
}
} else {
var vec__58202 = cljs.core.first(s__58172__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58202,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58202,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58166,vec__58202,group_title,group,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58166,vec__58202,group_title,group,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58166,vec__58202,group_title,group,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58164_$_iter__58171_$_iter__58205(s__58206){
return (new cljs.core.LazySeq(null,((function (i__58166,vec__58202,group_title,group,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function (){
var s__58206__$1 = s__58206;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58206__$1);
if(temp__5735__auto____$2){
var s__58206__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58206__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58206__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58208 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58207 = (0);
while(true){
if((i__58207 < size__4581__auto____$1)){
var map__58209 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58207);
var map__58209__$1 = (((((!((map__58209 == null))))?(((((map__58209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58209):map__58209);
var block = map__58209__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58209__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58209__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58208,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58207,i__58166,map__58209,map__58209__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58208,s__58206__$2,temp__5735__auto____$2,vec__58202,group_title,group,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58164_$_iter__58171_$_iter__58205_$_iter__58211(s__58212){
return (new cljs.core.LazySeq(null,((function (i__58207,i__58166,map__58209,map__58209__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58208,s__58206__$2,temp__5735__auto____$2,vec__58202,group_title,group,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function (){
var s__58212__$1 = s__58212;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58212__$1);
if(temp__5735__auto____$3){
var s__58212__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58212__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58212__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58214 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58213 = (0);
while(true){
if((i__58213 < size__4581__auto____$2)){
var map__58215 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58213);
var map__58215__$1 = (((((!((map__58215 == null))))?(((((map__58215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58215):map__58215);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58215__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58215__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58215__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58214,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58213,i__58207,i__58166,map__58215,map__58215__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58214,s__58212__$2,temp__5735__auto____$3,map__58209,map__58209__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58208,s__58206__$2,temp__5735__auto____$2,vec__58202,group_title,group,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58213,i__58207,i__58166,map__58215,map__58215__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58214,s__58212__$2,temp__5735__auto____$3,map__58209,map__58209__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58208,s__58206__$2,temp__5735__auto____$2,vec__58202,group_title,group,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58298 = (i__58213 + (1));
i__58213 = G__58298;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58214),athens$views$node_page$node_page_el_$_iter__58164_$_iter__58171_$_iter__58205_$_iter__58211(cljs.core.chunk_rest(s__58212__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58214),null);
}
} else {
var map__58217 = cljs.core.first(s__58212__$2);
var map__58217__$1 = (((((!((map__58217 == null))))?(((((map__58217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58217):map__58217);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58217__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58217__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58217__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58207,i__58166,map__58217,map__58217__$1,title__$1,string,uid__$2,s__58212__$2,temp__5735__auto____$3,map__58209,map__58209__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58208,s__58206__$2,temp__5735__auto____$2,vec__58202,group_title,group,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58207,i__58166,map__58217,map__58217__$1,title__$1,string,uid__$2,s__58212__$2,temp__5735__auto____$3,map__58209,map__58209__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58208,s__58206__$2,temp__5735__auto____$2,vec__58202,group_title,group,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58164_$_iter__58171_$_iter__58205_$_iter__58211(cljs.core.rest(s__58212__$2)));
}
} else {
return null;
}
break;
}
});})(i__58207,i__58166,map__58209,map__58209__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58208,s__58206__$2,temp__5735__auto____$2,vec__58202,group_title,group,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
,null,null));
});})(i__58207,i__58166,map__58209,map__58209__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58208,s__58206__$2,temp__5735__auto____$2,vec__58202,group_title,group,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58299 = (i__58207 + (1));
i__58207 = G__58299;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58208),athens$views$node_page$node_page_el_$_iter__58164_$_iter__58171_$_iter__58205(cljs.core.chunk_rest(s__58206__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58208),null);
}
} else {
var map__58219 = cljs.core.first(s__58206__$2);
var map__58219__$1 = (((((!((map__58219 == null))))?(((((map__58219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58219):map__58219);
var block = map__58219__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58219__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58219__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58166,map__58219,map__58219__$1,block,uid__$1,parents,s__58206__$2,temp__5735__auto____$2,vec__58202,group_title,group,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58164_$_iter__58171_$_iter__58205_$_iter__58221(s__58222){
return (new cljs.core.LazySeq(null,((function (i__58166,map__58219,map__58219__$1,block,uid__$1,parents,s__58206__$2,temp__5735__auto____$2,vec__58202,group_title,group,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function (){
var s__58222__$1 = s__58222;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58222__$1);
if(temp__5735__auto____$3){
var s__58222__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58222__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58222__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58224 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58223 = (0);
while(true){
if((i__58223 < size__4581__auto____$1)){
var map__58225 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58223);
var map__58225__$1 = (((((!((map__58225 == null))))?(((((map__58225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58225):map__58225);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58225__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58225__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58225__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58224,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58223,i__58166,map__58225,map__58225__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58224,s__58222__$2,temp__5735__auto____$3,map__58219,map__58219__$1,block,uid__$1,parents,s__58206__$2,temp__5735__auto____$2,vec__58202,group_title,group,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58223,i__58166,map__58225,map__58225__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58224,s__58222__$2,temp__5735__auto____$3,map__58219,map__58219__$1,block,uid__$1,parents,s__58206__$2,temp__5735__auto____$2,vec__58202,group_title,group,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58300 = (i__58223 + (1));
i__58223 = G__58300;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58224),athens$views$node_page$node_page_el_$_iter__58164_$_iter__58171_$_iter__58205_$_iter__58221(cljs.core.chunk_rest(s__58222__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58224),null);
}
} else {
var map__58227 = cljs.core.first(s__58222__$2);
var map__58227__$1 = (((((!((map__58227 == null))))?(((((map__58227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58227):map__58227);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58227__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58227__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58227__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58166,map__58227,map__58227__$1,title__$1,string,uid__$2,s__58222__$2,temp__5735__auto____$3,map__58219,map__58219__$1,block,uid__$1,parents,s__58206__$2,temp__5735__auto____$2,vec__58202,group_title,group,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58166,map__58227,map__58227__$1,title__$1,string,uid__$2,s__58222__$2,temp__5735__auto____$3,map__58219,map__58219__$1,block,uid__$1,parents,s__58206__$2,temp__5735__auto____$2,vec__58202,group_title,group,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58164_$_iter__58171_$_iter__58205_$_iter__58221(cljs.core.rest(s__58222__$2)));
}
} else {
return null;
}
break;
}
});})(i__58166,map__58219,map__58219__$1,block,uid__$1,parents,s__58206__$2,temp__5735__auto____$2,vec__58202,group_title,group,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
,null,null));
});})(i__58166,map__58219,map__58219__$1,block,uid__$1,parents,s__58206__$2,temp__5735__auto____$2,vec__58202,group_title,group,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58164_$_iter__58171_$_iter__58205(cljs.core.rest(s__58206__$2)));
}
} else {
return null;
}
break;
}
});})(i__58166,vec__58202,group_title,group,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
,null,null));
});})(i__58166,vec__58202,group_title,group,s__58172__$2,temp__5735__auto____$1,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__58164_$_iter__58171(cljs.core.rest(s__58172__$2)));
}
} else {
return null;
}
break;
}
});})(i__58166,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
,null,null));
});})(i__58166,vec__58168,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null));

var G__58301 = (i__58166 + (1));
i__58166 = G__58301;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58167),athens$views$node_page$node_page_el_$_iter__58164(cljs.core.chunk_rest(s__58165__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58167),null);
}
} else {
var vec__58229 = cljs.core.first(s__58165__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58229,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58229,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (vec__58229,linked_or_unlinked,refs,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58164_$_iter__58232(s__58233){
return (new cljs.core.LazySeq(null,(function (){
var s__58233__$1 = s__58233;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58233__$1);
if(temp__5735__auto____$1){
var s__58233__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58233__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58233__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58235 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58234 = (0);
while(true){
if((i__58234 < size__4581__auto__)){
var vec__58236 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58234);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58236,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58236,(1),null);
cljs.core.chunk_append(b__58235,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58234,vec__58236,group_title,group,c__4580__auto__,size__4581__auto__,b__58235,s__58233__$2,temp__5735__auto____$1,vec__58229,linked_or_unlinked,refs,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58234,vec__58236,group_title,group,c__4580__auto__,size__4581__auto__,b__58235,s__58233__$2,temp__5735__auto____$1,vec__58229,linked_or_unlinked,refs,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58234,vec__58236,group_title,group,c__4580__auto__,size__4581__auto__,b__58235,s__58233__$2,temp__5735__auto____$1,vec__58229,linked_or_unlinked,refs,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58164_$_iter__58232_$_iter__58239(s__58240){
return (new cljs.core.LazySeq(null,((function (i__58234,vec__58236,group_title,group,c__4580__auto__,size__4581__auto__,b__58235,s__58233__$2,temp__5735__auto____$1,vec__58229,linked_or_unlinked,refs,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function (){
var s__58240__$1 = s__58240;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58240__$1);
if(temp__5735__auto____$2){
var s__58240__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58240__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58240__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58242 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58241 = (0);
while(true){
if((i__58241 < size__4581__auto____$1)){
var map__58243 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58241);
var map__58243__$1 = (((((!((map__58243 == null))))?(((((map__58243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58243):map__58243);
var block = map__58243__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58243__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58243__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58242,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58241,i__58234,map__58243,map__58243__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58242,s__58240__$2,temp__5735__auto____$2,vec__58236,group_title,group,c__4580__auto__,size__4581__auto__,b__58235,s__58233__$2,temp__5735__auto____$1,vec__58229,linked_or_unlinked,refs,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58164_$_iter__58232_$_iter__58239_$_iter__58245(s__58246){
return (new cljs.core.LazySeq(null,((function (i__58241,i__58234,map__58243,map__58243__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58242,s__58240__$2,temp__5735__auto____$2,vec__58236,group_title,group,c__4580__auto__,size__4581__auto__,b__58235,s__58233__$2,temp__5735__auto____$1,vec__58229,linked_or_unlinked,refs,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function (){
var s__58246__$1 = s__58246;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58246__$1);
if(temp__5735__auto____$3){
var s__58246__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58246__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58246__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58248 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58247 = (0);
while(true){
if((i__58247 < size__4581__auto____$2)){
var map__58249 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58247);
var map__58249__$1 = (((((!((map__58249 == null))))?(((((map__58249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58249):map__58249);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58249__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58249__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58249__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58248,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58247,i__58241,i__58234,map__58249,map__58249__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58248,s__58246__$2,temp__5735__auto____$3,map__58243,map__58243__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58242,s__58240__$2,temp__5735__auto____$2,vec__58236,group_title,group,c__4580__auto__,size__4581__auto__,b__58235,s__58233__$2,temp__5735__auto____$1,vec__58229,linked_or_unlinked,refs,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58247,i__58241,i__58234,map__58249,map__58249__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58248,s__58246__$2,temp__5735__auto____$3,map__58243,map__58243__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58242,s__58240__$2,temp__5735__auto____$2,vec__58236,group_title,group,c__4580__auto__,size__4581__auto__,b__58235,s__58233__$2,temp__5735__auto____$1,vec__58229,linked_or_unlinked,refs,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58302 = (i__58247 + (1));
i__58247 = G__58302;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58248),athens$views$node_page$node_page_el_$_iter__58164_$_iter__58232_$_iter__58239_$_iter__58245(cljs.core.chunk_rest(s__58246__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58248),null);
}
} else {
var map__58251 = cljs.core.first(s__58246__$2);
var map__58251__$1 = (((((!((map__58251 == null))))?(((((map__58251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58251):map__58251);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58251__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58251__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58251__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58241,i__58234,map__58251,map__58251__$1,title__$1,string,uid__$2,s__58246__$2,temp__5735__auto____$3,map__58243,map__58243__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58242,s__58240__$2,temp__5735__auto____$2,vec__58236,group_title,group,c__4580__auto__,size__4581__auto__,b__58235,s__58233__$2,temp__5735__auto____$1,vec__58229,linked_or_unlinked,refs,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58241,i__58234,map__58251,map__58251__$1,title__$1,string,uid__$2,s__58246__$2,temp__5735__auto____$3,map__58243,map__58243__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58242,s__58240__$2,temp__5735__auto____$2,vec__58236,group_title,group,c__4580__auto__,size__4581__auto__,b__58235,s__58233__$2,temp__5735__auto____$1,vec__58229,linked_or_unlinked,refs,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58164_$_iter__58232_$_iter__58239_$_iter__58245(cljs.core.rest(s__58246__$2)));
}
} else {
return null;
}
break;
}
});})(i__58241,i__58234,map__58243,map__58243__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58242,s__58240__$2,temp__5735__auto____$2,vec__58236,group_title,group,c__4580__auto__,size__4581__auto__,b__58235,s__58233__$2,temp__5735__auto____$1,vec__58229,linked_or_unlinked,refs,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
,null,null));
});})(i__58241,i__58234,map__58243,map__58243__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58242,s__58240__$2,temp__5735__auto____$2,vec__58236,group_title,group,c__4580__auto__,size__4581__auto__,b__58235,s__58233__$2,temp__5735__auto____$1,vec__58229,linked_or_unlinked,refs,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58303 = (i__58241 + (1));
i__58241 = G__58303;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58242),athens$views$node_page$node_page_el_$_iter__58164_$_iter__58232_$_iter__58239(cljs.core.chunk_rest(s__58240__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58242),null);
}
} else {
var map__58253 = cljs.core.first(s__58240__$2);
var map__58253__$1 = (((((!((map__58253 == null))))?(((((map__58253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58253):map__58253);
var block = map__58253__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58253__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58253__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58234,map__58253,map__58253__$1,block,uid__$1,parents,s__58240__$2,temp__5735__auto____$2,vec__58236,group_title,group,c__4580__auto__,size__4581__auto__,b__58235,s__58233__$2,temp__5735__auto____$1,vec__58229,linked_or_unlinked,refs,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58164_$_iter__58232_$_iter__58239_$_iter__58255(s__58256){
return (new cljs.core.LazySeq(null,((function (i__58234,map__58253,map__58253__$1,block,uid__$1,parents,s__58240__$2,temp__5735__auto____$2,vec__58236,group_title,group,c__4580__auto__,size__4581__auto__,b__58235,s__58233__$2,temp__5735__auto____$1,vec__58229,linked_or_unlinked,refs,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function (){
var s__58256__$1 = s__58256;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58256__$1);
if(temp__5735__auto____$3){
var s__58256__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58256__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58256__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58258 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58257 = (0);
while(true){
if((i__58257 < size__4581__auto____$1)){
var map__58259 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58257);
var map__58259__$1 = (((((!((map__58259 == null))))?(((((map__58259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58259):map__58259);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58259__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58259__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58259__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58258,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58257,i__58234,map__58259,map__58259__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58258,s__58256__$2,temp__5735__auto____$3,map__58253,map__58253__$1,block,uid__$1,parents,s__58240__$2,temp__5735__auto____$2,vec__58236,group_title,group,c__4580__auto__,size__4581__auto__,b__58235,s__58233__$2,temp__5735__auto____$1,vec__58229,linked_or_unlinked,refs,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58257,i__58234,map__58259,map__58259__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58258,s__58256__$2,temp__5735__auto____$3,map__58253,map__58253__$1,block,uid__$1,parents,s__58240__$2,temp__5735__auto____$2,vec__58236,group_title,group,c__4580__auto__,size__4581__auto__,b__58235,s__58233__$2,temp__5735__auto____$1,vec__58229,linked_or_unlinked,refs,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58304 = (i__58257 + (1));
i__58257 = G__58304;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58258),athens$views$node_page$node_page_el_$_iter__58164_$_iter__58232_$_iter__58239_$_iter__58255(cljs.core.chunk_rest(s__58256__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58258),null);
}
} else {
var map__58261 = cljs.core.first(s__58256__$2);
var map__58261__$1 = (((((!((map__58261 == null))))?(((((map__58261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58261):map__58261);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58261__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58261__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58261__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58234,map__58261,map__58261__$1,title__$1,string,uid__$2,s__58256__$2,temp__5735__auto____$3,map__58253,map__58253__$1,block,uid__$1,parents,s__58240__$2,temp__5735__auto____$2,vec__58236,group_title,group,c__4580__auto__,size__4581__auto__,b__58235,s__58233__$2,temp__5735__auto____$1,vec__58229,linked_or_unlinked,refs,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58234,map__58261,map__58261__$1,title__$1,string,uid__$2,s__58256__$2,temp__5735__auto____$3,map__58253,map__58253__$1,block,uid__$1,parents,s__58240__$2,temp__5735__auto____$2,vec__58236,group_title,group,c__4580__auto__,size__4581__auto__,b__58235,s__58233__$2,temp__5735__auto____$1,vec__58229,linked_or_unlinked,refs,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58164_$_iter__58232_$_iter__58239_$_iter__58255(cljs.core.rest(s__58256__$2)));
}
} else {
return null;
}
break;
}
});})(i__58234,map__58253,map__58253__$1,block,uid__$1,parents,s__58240__$2,temp__5735__auto____$2,vec__58236,group_title,group,c__4580__auto__,size__4581__auto__,b__58235,s__58233__$2,temp__5735__auto____$1,vec__58229,linked_or_unlinked,refs,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
,null,null));
});})(i__58234,map__58253,map__58253__$1,block,uid__$1,parents,s__58240__$2,temp__5735__auto____$2,vec__58236,group_title,group,c__4580__auto__,size__4581__auto__,b__58235,s__58233__$2,temp__5735__auto____$1,vec__58229,linked_or_unlinked,refs,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58164_$_iter__58232_$_iter__58239(cljs.core.rest(s__58240__$2)));
}
} else {
return null;
}
break;
}
});})(i__58234,vec__58236,group_title,group,c__4580__auto__,size__4581__auto__,b__58235,s__58233__$2,temp__5735__auto____$1,vec__58229,linked_or_unlinked,refs,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
,null,null));
});})(i__58234,vec__58236,group_title,group,c__4580__auto__,size__4581__auto__,b__58235,s__58233__$2,temp__5735__auto____$1,vec__58229,linked_or_unlinked,refs,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58305 = (i__58234 + (1));
i__58234 = G__58305;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58235),athens$views$node_page$node_page_el_$_iter__58164_$_iter__58232(cljs.core.chunk_rest(s__58233__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58235),null);
}
} else {
var vec__58263 = cljs.core.first(s__58233__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58263,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58263,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58263,group_title,group,s__58233__$2,temp__5735__auto____$1,vec__58229,linked_or_unlinked,refs,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__58263,group_title,group,s__58233__$2,temp__5735__auto____$1,vec__58229,linked_or_unlinked,refs,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (vec__58263,group_title,group,s__58233__$2,temp__5735__auto____$1,vec__58229,linked_or_unlinked,refs,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58164_$_iter__58232_$_iter__58266(s__58267){
return (new cljs.core.LazySeq(null,(function (){
var s__58267__$1 = s__58267;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58267__$1);
if(temp__5735__auto____$2){
var s__58267__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58267__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58267__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58269 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58268 = (0);
while(true){
if((i__58268 < size__4581__auto__)){
var map__58270 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58268);
var map__58270__$1 = (((((!((map__58270 == null))))?(((((map__58270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58270):map__58270);
var block = map__58270__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58270__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58270__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58269,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58268,map__58270,map__58270__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58269,s__58267__$2,temp__5735__auto____$2,vec__58263,group_title,group,s__58233__$2,temp__5735__auto____$1,vec__58229,linked_or_unlinked,refs,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58164_$_iter__58232_$_iter__58266_$_iter__58272(s__58273){
return (new cljs.core.LazySeq(null,((function (i__58268,map__58270,map__58270__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58269,s__58267__$2,temp__5735__auto____$2,vec__58263,group_title,group,s__58233__$2,temp__5735__auto____$1,vec__58229,linked_or_unlinked,refs,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function (){
var s__58273__$1 = s__58273;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58273__$1);
if(temp__5735__auto____$3){
var s__58273__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58273__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58273__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58275 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58274 = (0);
while(true){
if((i__58274 < size__4581__auto____$1)){
var map__58276 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58274);
var map__58276__$1 = (((((!((map__58276 == null))))?(((((map__58276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58276):map__58276);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58276__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58276__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58276__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58275,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58274,i__58268,map__58276,map__58276__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58275,s__58273__$2,temp__5735__auto____$3,map__58270,map__58270__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58269,s__58267__$2,temp__5735__auto____$2,vec__58263,group_title,group,s__58233__$2,temp__5735__auto____$1,vec__58229,linked_or_unlinked,refs,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58274,i__58268,map__58276,map__58276__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58275,s__58273__$2,temp__5735__auto____$3,map__58270,map__58270__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58269,s__58267__$2,temp__5735__auto____$2,vec__58263,group_title,group,s__58233__$2,temp__5735__auto____$1,vec__58229,linked_or_unlinked,refs,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58306 = (i__58274 + (1));
i__58274 = G__58306;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58275),athens$views$node_page$node_page_el_$_iter__58164_$_iter__58232_$_iter__58266_$_iter__58272(cljs.core.chunk_rest(s__58273__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58275),null);
}
} else {
var map__58278 = cljs.core.first(s__58273__$2);
var map__58278__$1 = (((((!((map__58278 == null))))?(((((map__58278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58278):map__58278);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58278__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58278__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58278__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58268,map__58278,map__58278__$1,title__$1,string,uid__$2,s__58273__$2,temp__5735__auto____$3,map__58270,map__58270__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58269,s__58267__$2,temp__5735__auto____$2,vec__58263,group_title,group,s__58233__$2,temp__5735__auto____$1,vec__58229,linked_or_unlinked,refs,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58268,map__58278,map__58278__$1,title__$1,string,uid__$2,s__58273__$2,temp__5735__auto____$3,map__58270,map__58270__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58269,s__58267__$2,temp__5735__auto____$2,vec__58263,group_title,group,s__58233__$2,temp__5735__auto____$1,vec__58229,linked_or_unlinked,refs,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58164_$_iter__58232_$_iter__58266_$_iter__58272(cljs.core.rest(s__58273__$2)));
}
} else {
return null;
}
break;
}
});})(i__58268,map__58270,map__58270__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58269,s__58267__$2,temp__5735__auto____$2,vec__58263,group_title,group,s__58233__$2,temp__5735__auto____$1,vec__58229,linked_or_unlinked,refs,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
,null,null));
});})(i__58268,map__58270,map__58270__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58269,s__58267__$2,temp__5735__auto____$2,vec__58263,group_title,group,s__58233__$2,temp__5735__auto____$1,vec__58229,linked_or_unlinked,refs,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58307 = (i__58268 + (1));
i__58268 = G__58307;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58269),athens$views$node_page$node_page_el_$_iter__58164_$_iter__58232_$_iter__58266(cljs.core.chunk_rest(s__58267__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58269),null);
}
} else {
var map__58280 = cljs.core.first(s__58267__$2);
var map__58280__$1 = (((((!((map__58280 == null))))?(((((map__58280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58280):map__58280);
var block = map__58280__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58280__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58280__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (map__58280,map__58280__$1,block,uid__$1,parents,s__58267__$2,temp__5735__auto____$2,vec__58263,group_title,group,s__58233__$2,temp__5735__auto____$1,vec__58229,linked_or_unlinked,refs,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58164_$_iter__58232_$_iter__58266_$_iter__58282(s__58283){
return (new cljs.core.LazySeq(null,(function (){
var s__58283__$1 = s__58283;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58283__$1);
if(temp__5735__auto____$3){
var s__58283__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58283__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58283__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58285 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58284 = (0);
while(true){
if((i__58284 < size__4581__auto__)){
var map__58286 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58284);
var map__58286__$1 = (((((!((map__58286 == null))))?(((((map__58286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58286):map__58286);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58286__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58286__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58286__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58285,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58284,map__58286,map__58286__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58285,s__58283__$2,temp__5735__auto____$3,map__58280,map__58280__$1,block,uid__$1,parents,s__58267__$2,temp__5735__auto____$2,vec__58263,group_title,group,s__58233__$2,temp__5735__auto____$1,vec__58229,linked_or_unlinked,refs,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58284,map__58286,map__58286__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58285,s__58283__$2,temp__5735__auto____$3,map__58280,map__58280__$1,block,uid__$1,parents,s__58267__$2,temp__5735__auto____$2,vec__58263,group_title,group,s__58233__$2,temp__5735__auto____$1,vec__58229,linked_or_unlinked,refs,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58308 = (i__58284 + (1));
i__58284 = G__58308;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58285),athens$views$node_page$node_page_el_$_iter__58164_$_iter__58232_$_iter__58266_$_iter__58282(cljs.core.chunk_rest(s__58283__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58285),null);
}
} else {
var map__58288 = cljs.core.first(s__58283__$2);
var map__58288__$1 = (((((!((map__58288 == null))))?(((((map__58288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58288):map__58288);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58288__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58288__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58288__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__58288,map__58288__$1,title__$1,string,uid__$2,s__58283__$2,temp__5735__auto____$3,map__58280,map__58280__$1,block,uid__$1,parents,s__58267__$2,temp__5735__auto____$2,vec__58263,group_title,group,s__58233__$2,temp__5735__auto____$1,vec__58229,linked_or_unlinked,refs,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__58288,map__58288__$1,title__$1,string,uid__$2,s__58283__$2,temp__5735__auto____$3,map__58280,map__58280__$1,block,uid__$1,parents,s__58267__$2,temp__5735__auto____$2,vec__58263,group_title,group,s__58233__$2,temp__5735__auto____$1,vec__58229,linked_or_unlinked,refs,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58164_$_iter__58232_$_iter__58266_$_iter__58282(cljs.core.rest(s__58283__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58280,map__58280__$1,block,uid__$1,parents,s__58267__$2,temp__5735__auto____$2,vec__58263,group_title,group,s__58233__$2,temp__5735__auto____$1,vec__58229,linked_or_unlinked,refs,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58164_$_iter__58232_$_iter__58266(cljs.core.rest(s__58267__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58263,group_title,group,s__58233__$2,temp__5735__auto____$1,vec__58229,linked_or_unlinked,refs,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__58164_$_iter__58232(cljs.core.rest(s__58233__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58229,linked_or_unlinked,refs,s__58165__$2,temp__5735__auto__,map__58152,map__58152__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null),athens$views$node_page$node_page_el_$_iter__58164(cljs.core.rest(s__58165__$2)));
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
athens.views.node_page.node_page_component = (function athens$views$node_page$node_page_component(ident){
var map__58290 = athens.db.get_node_document(ident);
var map__58290__$1 = (((((!((map__58290 == null))))?(((((map__58290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58290):map__58290);
var node = map__58290__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58290__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58290__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__58292 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58292) : re_frame.core.subscribe.call(null,G__58292));
})());
var timeline_page_QMARK_ = athens.views.node_page.is_timeline_page(uid);
if(clojure.string.blank_QMARK_(title)){
return null;
} else {
var ref_groups = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Linked References",athens.views.node_page.get_data(athens.patterns.linked(title))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unlinked References",athens.views.node_page.get_data(athens.patterns.unlinked(title))], null)], null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.node_page_el,node,editing_uid,ref_groups,timeline_page_QMARK_], null);
}
});

//# sourceMappingURL=athens.views.node_page.js.map
