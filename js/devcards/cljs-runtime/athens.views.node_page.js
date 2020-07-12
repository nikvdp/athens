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
athens.views.node_page.title_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"visible",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),"1",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.2em 0",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.03em",new cljs.core.Keyword(null,"word-break","word-break",-407281356),"break-word",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"-webkit-appearance","-webkit-appearance",375531635),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"caret-color","caret-color",997187317),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"margin","margin",-995903681)],["inherit","translate3d(0,0,0)","inherit","100%","inherit","opacity 0.15s ease","0","inherit","100%","transparent","text","none","none","0","0",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),"0","absolute","inherit","0","4px","inherit","0","0"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea:focus","textarea:focus",117113075),new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(3),new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._PLUS_(new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.Keyword(null,"span","span",1394872991)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null)], null)], null)], null);
athens.views.node_page.references_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-block","margin-block",1690397674),"3em"], null);
athens.views.node_page.references_heading_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 2rem",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"0.25em",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%"], null)], null)], null)], null);
athens.views.node_page.references_list_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null);
athens.views.node_page.references_group_title_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword(null,"margin","margin",-995903681),"0 1.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a:hover","a:hover",-1474674872),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null)], null);
athens.views.node_page.references_group_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"background-minus-2","background-minus-2",-1711017591),new cljs.core.Keyword(null,"opacity-med","opacity-med",1700530190)),new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 0.5rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.5em 0"], null);
athens.views.node_page.reference_breadcrumbs_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem calc(2rem - 0.5em)"], null);
athens.views.node_page.references_group_block_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px solid ",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"border-color","border-color",-2059162761))], null)], null),new cljs.core.Keyword(null,"padding-block-start","padding-block-start",1054404612),"1em",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"1em",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:first-of-type","&:first-of-type",1836617087),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"0",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"0"], null)], null)], null)], null);
athens.views.node_page.handler = (function athens$views$node_page$handler(val,uid){
var G__58209 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58209) : re_frame.core.dispatch.call(null,G__58209));
});
athens.views.node_page.db_handler = goog.functions.debounce(athens.views.node_page.handler,(500));
athens.views.node_page.get_ref_ids = (function athens$views$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__58210 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__58211 = athens.db.dsdb;
var G__58212 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__58210,G__58211,G__58212) : posh.reagent.q.call(null,G__58210,G__58211,G__58212));
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
return cljs.core.boolean$((function (){try{var vec__58214 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58214,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58214,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58214,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e58213){if((e58213 instanceof Object)){
var _ = e58213;
return false;
} else {
throw e58213;

}
}})());
});
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(p__58217,editing_uid,ref_groups,timeline_page_QMARK_){
var map__58218 = p__58217;
var map__58218__$1 = (((((!((map__58218 == null))))?(((((map__58218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58218):map__58218);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58218__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58218__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58218__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.page_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58220 = e.target.value;
var G__58221 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58220,G__58221) : athens.views.node_page.db_handler.call(null,G__58220,G__58221));
})], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58222(s__58223){
return (new cljs.core.LazySeq(null,(function (){
var s__58223__$1 = s__58223;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58223__$1);
if(temp__5735__auto__){
var s__58223__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58223__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58223__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58225 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58224 = (0);
while(true){
if((i__58224 < size__4581__auto__)){
var map__58226 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58224);
var map__58226__$1 = (((((!((map__58226 == null))))?(((((map__58226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58226):map__58226);
var child = map__58226__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58226__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58225,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58359 = (i__58224 + (1));
i__58224 = G__58359;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58225),athens$views$node_page$node_page_el_$_iter__58222(cljs.core.chunk_rest(s__58223__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58225),null);
}
} else {
var map__58228 = cljs.core.first(s__58223__$2);
var map__58228__$1 = (((((!((map__58228 == null))))?(((((map__58228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58228):map__58228);
var child = map__58228__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58228__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__58222(cljs.core.rest(s__58223__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58230(s__58231){
return (new cljs.core.LazySeq(null,(function (){
var s__58231__$1 = s__58231;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58231__$1);
if(temp__5735__auto__){
var s__58231__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58231__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58231__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58233 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58232 = (0);
while(true){
if((i__58232 < size__4581__auto__)){
var vec__58234 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58232);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58234,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58234,(1),null);
cljs.core.chunk_append(b__58233,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (i__58232,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58230_$_iter__58237(s__58238){
return (new cljs.core.LazySeq(null,((function (i__58232,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function (){
var s__58238__$1 = s__58238;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58238__$1);
if(temp__5735__auto____$1){
var s__58238__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58238__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58238__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58240 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58239 = (0);
while(true){
if((i__58239 < size__4581__auto____$1)){
var vec__58241 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58239);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58241,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58241,(1),null);
cljs.core.chunk_append(b__58240,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58239,i__58232,vec__58241,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58240,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58239,i__58232,vec__58241,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58240,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58239,i__58232,vec__58241,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58240,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58230_$_iter__58237_$_iter__58244(s__58245){
return (new cljs.core.LazySeq(null,((function (i__58239,i__58232,vec__58241,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58240,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function (){
var s__58245__$1 = s__58245;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58245__$1);
if(temp__5735__auto____$2){
var s__58245__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58245__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58245__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58247 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58246 = (0);
while(true){
if((i__58246 < size__4581__auto____$2)){
var map__58248 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58246);
var map__58248__$1 = (((((!((map__58248 == null))))?(((((map__58248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58248):map__58248);
var block = map__58248__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58248__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58248__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58247,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58246,i__58239,i__58232,map__58248,map__58248__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58247,s__58245__$2,temp__5735__auto____$2,vec__58241,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58240,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58230_$_iter__58237_$_iter__58244_$_iter__58250(s__58251){
return (new cljs.core.LazySeq(null,((function (i__58246,i__58239,i__58232,map__58248,map__58248__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58247,s__58245__$2,temp__5735__auto____$2,vec__58241,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58240,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function (){
var s__58251__$1 = s__58251;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58251__$1);
if(temp__5735__auto____$3){
var s__58251__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58251__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58251__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58253 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58252 = (0);
while(true){
if((i__58252 < size__4581__auto____$3)){
var map__58254 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58252);
var map__58254__$1 = (((((!((map__58254 == null))))?(((((map__58254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58254):map__58254);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58254__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58254__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58254__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58253,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58252,i__58246,i__58239,i__58232,map__58254,map__58254__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58253,s__58251__$2,temp__5735__auto____$3,map__58248,map__58248__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58247,s__58245__$2,temp__5735__auto____$2,vec__58241,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58240,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58252,i__58246,i__58239,i__58232,map__58254,map__58254__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58253,s__58251__$2,temp__5735__auto____$3,map__58248,map__58248__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58247,s__58245__$2,temp__5735__auto____$2,vec__58241,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58240,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58360 = (i__58252 + (1));
i__58252 = G__58360;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58253),athens$views$node_page$node_page_el_$_iter__58230_$_iter__58237_$_iter__58244_$_iter__58250(cljs.core.chunk_rest(s__58251__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58253),null);
}
} else {
var map__58256 = cljs.core.first(s__58251__$2);
var map__58256__$1 = (((((!((map__58256 == null))))?(((((map__58256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58256):map__58256);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58256__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58256__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58256__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58246,i__58239,i__58232,map__58256,map__58256__$1,title__$1,string,uid__$2,s__58251__$2,temp__5735__auto____$3,map__58248,map__58248__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58247,s__58245__$2,temp__5735__auto____$2,vec__58241,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58240,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58246,i__58239,i__58232,map__58256,map__58256__$1,title__$1,string,uid__$2,s__58251__$2,temp__5735__auto____$3,map__58248,map__58248__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58247,s__58245__$2,temp__5735__auto____$2,vec__58241,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58240,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58230_$_iter__58237_$_iter__58244_$_iter__58250(cljs.core.rest(s__58251__$2)));
}
} else {
return null;
}
break;
}
});})(i__58246,i__58239,i__58232,map__58248,map__58248__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58247,s__58245__$2,temp__5735__auto____$2,vec__58241,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58240,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
,null,null));
});})(i__58246,i__58239,i__58232,map__58248,map__58248__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58247,s__58245__$2,temp__5735__auto____$2,vec__58241,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58240,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58361 = (i__58246 + (1));
i__58246 = G__58361;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58247),athens$views$node_page$node_page_el_$_iter__58230_$_iter__58237_$_iter__58244(cljs.core.chunk_rest(s__58245__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58247),null);
}
} else {
var map__58258 = cljs.core.first(s__58245__$2);
var map__58258__$1 = (((((!((map__58258 == null))))?(((((map__58258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58258):map__58258);
var block = map__58258__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58258__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58258__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58239,i__58232,map__58258,map__58258__$1,block,uid__$1,parents,s__58245__$2,temp__5735__auto____$2,vec__58241,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58240,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58230_$_iter__58237_$_iter__58244_$_iter__58260(s__58261){
return (new cljs.core.LazySeq(null,((function (i__58239,i__58232,map__58258,map__58258__$1,block,uid__$1,parents,s__58245__$2,temp__5735__auto____$2,vec__58241,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58240,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function (){
var s__58261__$1 = s__58261;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58261__$1);
if(temp__5735__auto____$3){
var s__58261__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58261__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58261__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58263 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58262 = (0);
while(true){
if((i__58262 < size__4581__auto____$2)){
var map__58264 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58262);
var map__58264__$1 = (((((!((map__58264 == null))))?(((((map__58264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58264):map__58264);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58264__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58264__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58264__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58263,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58262,i__58239,i__58232,map__58264,map__58264__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58263,s__58261__$2,temp__5735__auto____$3,map__58258,map__58258__$1,block,uid__$1,parents,s__58245__$2,temp__5735__auto____$2,vec__58241,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58240,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58262,i__58239,i__58232,map__58264,map__58264__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58263,s__58261__$2,temp__5735__auto____$3,map__58258,map__58258__$1,block,uid__$1,parents,s__58245__$2,temp__5735__auto____$2,vec__58241,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58240,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58362 = (i__58262 + (1));
i__58262 = G__58362;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58263),athens$views$node_page$node_page_el_$_iter__58230_$_iter__58237_$_iter__58244_$_iter__58260(cljs.core.chunk_rest(s__58261__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58263),null);
}
} else {
var map__58266 = cljs.core.first(s__58261__$2);
var map__58266__$1 = (((((!((map__58266 == null))))?(((((map__58266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58266):map__58266);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58266__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58266__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58266__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58239,i__58232,map__58266,map__58266__$1,title__$1,string,uid__$2,s__58261__$2,temp__5735__auto____$3,map__58258,map__58258__$1,block,uid__$1,parents,s__58245__$2,temp__5735__auto____$2,vec__58241,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58240,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58239,i__58232,map__58266,map__58266__$1,title__$1,string,uid__$2,s__58261__$2,temp__5735__auto____$3,map__58258,map__58258__$1,block,uid__$1,parents,s__58245__$2,temp__5735__auto____$2,vec__58241,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58240,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58230_$_iter__58237_$_iter__58244_$_iter__58260(cljs.core.rest(s__58261__$2)));
}
} else {
return null;
}
break;
}
});})(i__58239,i__58232,map__58258,map__58258__$1,block,uid__$1,parents,s__58245__$2,temp__5735__auto____$2,vec__58241,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58240,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
,null,null));
});})(i__58239,i__58232,map__58258,map__58258__$1,block,uid__$1,parents,s__58245__$2,temp__5735__auto____$2,vec__58241,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58240,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58230_$_iter__58237_$_iter__58244(cljs.core.rest(s__58245__$2)));
}
} else {
return null;
}
break;
}
});})(i__58239,i__58232,vec__58241,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58240,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
,null,null));
});})(i__58239,i__58232,vec__58241,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58240,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58363 = (i__58239 + (1));
i__58239 = G__58363;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58240),athens$views$node_page$node_page_el_$_iter__58230_$_iter__58237(cljs.core.chunk_rest(s__58238__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58240),null);
}
} else {
var vec__58268 = cljs.core.first(s__58238__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58268,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58268,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58232,vec__58268,group_title,group,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58232,vec__58268,group_title,group,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58232,vec__58268,group_title,group,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58230_$_iter__58237_$_iter__58271(s__58272){
return (new cljs.core.LazySeq(null,((function (i__58232,vec__58268,group_title,group,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function (){
var s__58272__$1 = s__58272;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58272__$1);
if(temp__5735__auto____$2){
var s__58272__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58272__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58272__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58274 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58273 = (0);
while(true){
if((i__58273 < size__4581__auto____$1)){
var map__58275 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58273);
var map__58275__$1 = (((((!((map__58275 == null))))?(((((map__58275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58275):map__58275);
var block = map__58275__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58275__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58275__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58274,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58273,i__58232,map__58275,map__58275__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58274,s__58272__$2,temp__5735__auto____$2,vec__58268,group_title,group,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58230_$_iter__58237_$_iter__58271_$_iter__58277(s__58278){
return (new cljs.core.LazySeq(null,((function (i__58273,i__58232,map__58275,map__58275__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58274,s__58272__$2,temp__5735__auto____$2,vec__58268,group_title,group,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function (){
var s__58278__$1 = s__58278;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58278__$1);
if(temp__5735__auto____$3){
var s__58278__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58278__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58278__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58280 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58279 = (0);
while(true){
if((i__58279 < size__4581__auto____$2)){
var map__58281 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58279);
var map__58281__$1 = (((((!((map__58281 == null))))?(((((map__58281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58281):map__58281);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58281__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58281__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58281__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58280,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58279,i__58273,i__58232,map__58281,map__58281__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58280,s__58278__$2,temp__5735__auto____$3,map__58275,map__58275__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58274,s__58272__$2,temp__5735__auto____$2,vec__58268,group_title,group,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58279,i__58273,i__58232,map__58281,map__58281__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58280,s__58278__$2,temp__5735__auto____$3,map__58275,map__58275__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58274,s__58272__$2,temp__5735__auto____$2,vec__58268,group_title,group,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58364 = (i__58279 + (1));
i__58279 = G__58364;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58280),athens$views$node_page$node_page_el_$_iter__58230_$_iter__58237_$_iter__58271_$_iter__58277(cljs.core.chunk_rest(s__58278__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58280),null);
}
} else {
var map__58283 = cljs.core.first(s__58278__$2);
var map__58283__$1 = (((((!((map__58283 == null))))?(((((map__58283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58283):map__58283);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58283__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58283__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58283__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58273,i__58232,map__58283,map__58283__$1,title__$1,string,uid__$2,s__58278__$2,temp__5735__auto____$3,map__58275,map__58275__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58274,s__58272__$2,temp__5735__auto____$2,vec__58268,group_title,group,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58273,i__58232,map__58283,map__58283__$1,title__$1,string,uid__$2,s__58278__$2,temp__5735__auto____$3,map__58275,map__58275__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58274,s__58272__$2,temp__5735__auto____$2,vec__58268,group_title,group,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58230_$_iter__58237_$_iter__58271_$_iter__58277(cljs.core.rest(s__58278__$2)));
}
} else {
return null;
}
break;
}
});})(i__58273,i__58232,map__58275,map__58275__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58274,s__58272__$2,temp__5735__auto____$2,vec__58268,group_title,group,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
,null,null));
});})(i__58273,i__58232,map__58275,map__58275__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58274,s__58272__$2,temp__5735__auto____$2,vec__58268,group_title,group,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58365 = (i__58273 + (1));
i__58273 = G__58365;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58274),athens$views$node_page$node_page_el_$_iter__58230_$_iter__58237_$_iter__58271(cljs.core.chunk_rest(s__58272__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58274),null);
}
} else {
var map__58285 = cljs.core.first(s__58272__$2);
var map__58285__$1 = (((((!((map__58285 == null))))?(((((map__58285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58285):map__58285);
var block = map__58285__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58285__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58285__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58232,map__58285,map__58285__$1,block,uid__$1,parents,s__58272__$2,temp__5735__auto____$2,vec__58268,group_title,group,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58230_$_iter__58237_$_iter__58271_$_iter__58287(s__58288){
return (new cljs.core.LazySeq(null,((function (i__58232,map__58285,map__58285__$1,block,uid__$1,parents,s__58272__$2,temp__5735__auto____$2,vec__58268,group_title,group,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function (){
var s__58288__$1 = s__58288;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58288__$1);
if(temp__5735__auto____$3){
var s__58288__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58288__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58288__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58290 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58289 = (0);
while(true){
if((i__58289 < size__4581__auto____$1)){
var map__58291 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58289);
var map__58291__$1 = (((((!((map__58291 == null))))?(((((map__58291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58291):map__58291);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58291__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58291__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58291__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58290,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58289,i__58232,map__58291,map__58291__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58290,s__58288__$2,temp__5735__auto____$3,map__58285,map__58285__$1,block,uid__$1,parents,s__58272__$2,temp__5735__auto____$2,vec__58268,group_title,group,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58289,i__58232,map__58291,map__58291__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58290,s__58288__$2,temp__5735__auto____$3,map__58285,map__58285__$1,block,uid__$1,parents,s__58272__$2,temp__5735__auto____$2,vec__58268,group_title,group,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58366 = (i__58289 + (1));
i__58289 = G__58366;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58290),athens$views$node_page$node_page_el_$_iter__58230_$_iter__58237_$_iter__58271_$_iter__58287(cljs.core.chunk_rest(s__58288__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58290),null);
}
} else {
var map__58293 = cljs.core.first(s__58288__$2);
var map__58293__$1 = (((((!((map__58293 == null))))?(((((map__58293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58293):map__58293);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58293__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58293__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58293__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58232,map__58293,map__58293__$1,title__$1,string,uid__$2,s__58288__$2,temp__5735__auto____$3,map__58285,map__58285__$1,block,uid__$1,parents,s__58272__$2,temp__5735__auto____$2,vec__58268,group_title,group,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58232,map__58293,map__58293__$1,title__$1,string,uid__$2,s__58288__$2,temp__5735__auto____$3,map__58285,map__58285__$1,block,uid__$1,parents,s__58272__$2,temp__5735__auto____$2,vec__58268,group_title,group,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58230_$_iter__58237_$_iter__58271_$_iter__58287(cljs.core.rest(s__58288__$2)));
}
} else {
return null;
}
break;
}
});})(i__58232,map__58285,map__58285__$1,block,uid__$1,parents,s__58272__$2,temp__5735__auto____$2,vec__58268,group_title,group,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
,null,null));
});})(i__58232,map__58285,map__58285__$1,block,uid__$1,parents,s__58272__$2,temp__5735__auto____$2,vec__58268,group_title,group,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58230_$_iter__58237_$_iter__58271(cljs.core.rest(s__58272__$2)));
}
} else {
return null;
}
break;
}
});})(i__58232,vec__58268,group_title,group,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
,null,null));
});})(i__58232,vec__58268,group_title,group,s__58238__$2,temp__5735__auto____$1,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__58230_$_iter__58237(cljs.core.rest(s__58238__$2)));
}
} else {
return null;
}
break;
}
});})(i__58232,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
,null,null));
});})(i__58232,vec__58234,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58233,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null));

var G__58367 = (i__58232 + (1));
i__58232 = G__58367;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58233),athens$views$node_page$node_page_el_$_iter__58230(cljs.core.chunk_rest(s__58231__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58233),null);
}
} else {
var vec__58295 = cljs.core.first(s__58231__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58295,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58295,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (vec__58295,linked_or_unlinked,refs,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58230_$_iter__58298(s__58299){
return (new cljs.core.LazySeq(null,(function (){
var s__58299__$1 = s__58299;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58299__$1);
if(temp__5735__auto____$1){
var s__58299__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58299__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58299__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58301 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58300 = (0);
while(true){
if((i__58300 < size__4581__auto__)){
var vec__58302 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58300);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58302,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58302,(1),null);
cljs.core.chunk_append(b__58301,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58300,vec__58302,group_title,group,c__4580__auto__,size__4581__auto__,b__58301,s__58299__$2,temp__5735__auto____$1,vec__58295,linked_or_unlinked,refs,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58300,vec__58302,group_title,group,c__4580__auto__,size__4581__auto__,b__58301,s__58299__$2,temp__5735__auto____$1,vec__58295,linked_or_unlinked,refs,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58300,vec__58302,group_title,group,c__4580__auto__,size__4581__auto__,b__58301,s__58299__$2,temp__5735__auto____$1,vec__58295,linked_or_unlinked,refs,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58230_$_iter__58298_$_iter__58305(s__58306){
return (new cljs.core.LazySeq(null,((function (i__58300,vec__58302,group_title,group,c__4580__auto__,size__4581__auto__,b__58301,s__58299__$2,temp__5735__auto____$1,vec__58295,linked_or_unlinked,refs,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function (){
var s__58306__$1 = s__58306;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58306__$1);
if(temp__5735__auto____$2){
var s__58306__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58306__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58306__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58308 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58307 = (0);
while(true){
if((i__58307 < size__4581__auto____$1)){
var map__58309 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58307);
var map__58309__$1 = (((((!((map__58309 == null))))?(((((map__58309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58309):map__58309);
var block = map__58309__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58309__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58309__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58308,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58307,i__58300,map__58309,map__58309__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58308,s__58306__$2,temp__5735__auto____$2,vec__58302,group_title,group,c__4580__auto__,size__4581__auto__,b__58301,s__58299__$2,temp__5735__auto____$1,vec__58295,linked_or_unlinked,refs,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58230_$_iter__58298_$_iter__58305_$_iter__58311(s__58312){
return (new cljs.core.LazySeq(null,((function (i__58307,i__58300,map__58309,map__58309__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58308,s__58306__$2,temp__5735__auto____$2,vec__58302,group_title,group,c__4580__auto__,size__4581__auto__,b__58301,s__58299__$2,temp__5735__auto____$1,vec__58295,linked_or_unlinked,refs,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function (){
var s__58312__$1 = s__58312;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58312__$1);
if(temp__5735__auto____$3){
var s__58312__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58312__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58312__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58314 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58313 = (0);
while(true){
if((i__58313 < size__4581__auto____$2)){
var map__58315 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58313);
var map__58315__$1 = (((((!((map__58315 == null))))?(((((map__58315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58315):map__58315);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58315__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58315__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58315__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58314,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58313,i__58307,i__58300,map__58315,map__58315__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58314,s__58312__$2,temp__5735__auto____$3,map__58309,map__58309__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58308,s__58306__$2,temp__5735__auto____$2,vec__58302,group_title,group,c__4580__auto__,size__4581__auto__,b__58301,s__58299__$2,temp__5735__auto____$1,vec__58295,linked_or_unlinked,refs,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58313,i__58307,i__58300,map__58315,map__58315__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58314,s__58312__$2,temp__5735__auto____$3,map__58309,map__58309__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58308,s__58306__$2,temp__5735__auto____$2,vec__58302,group_title,group,c__4580__auto__,size__4581__auto__,b__58301,s__58299__$2,temp__5735__auto____$1,vec__58295,linked_or_unlinked,refs,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58368 = (i__58313 + (1));
i__58313 = G__58368;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58314),athens$views$node_page$node_page_el_$_iter__58230_$_iter__58298_$_iter__58305_$_iter__58311(cljs.core.chunk_rest(s__58312__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58314),null);
}
} else {
var map__58317 = cljs.core.first(s__58312__$2);
var map__58317__$1 = (((((!((map__58317 == null))))?(((((map__58317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58317):map__58317);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58317__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58317__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58317__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58307,i__58300,map__58317,map__58317__$1,title__$1,string,uid__$2,s__58312__$2,temp__5735__auto____$3,map__58309,map__58309__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58308,s__58306__$2,temp__5735__auto____$2,vec__58302,group_title,group,c__4580__auto__,size__4581__auto__,b__58301,s__58299__$2,temp__5735__auto____$1,vec__58295,linked_or_unlinked,refs,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58307,i__58300,map__58317,map__58317__$1,title__$1,string,uid__$2,s__58312__$2,temp__5735__auto____$3,map__58309,map__58309__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58308,s__58306__$2,temp__5735__auto____$2,vec__58302,group_title,group,c__4580__auto__,size__4581__auto__,b__58301,s__58299__$2,temp__5735__auto____$1,vec__58295,linked_or_unlinked,refs,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58230_$_iter__58298_$_iter__58305_$_iter__58311(cljs.core.rest(s__58312__$2)));
}
} else {
return null;
}
break;
}
});})(i__58307,i__58300,map__58309,map__58309__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58308,s__58306__$2,temp__5735__auto____$2,vec__58302,group_title,group,c__4580__auto__,size__4581__auto__,b__58301,s__58299__$2,temp__5735__auto____$1,vec__58295,linked_or_unlinked,refs,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
,null,null));
});})(i__58307,i__58300,map__58309,map__58309__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58308,s__58306__$2,temp__5735__auto____$2,vec__58302,group_title,group,c__4580__auto__,size__4581__auto__,b__58301,s__58299__$2,temp__5735__auto____$1,vec__58295,linked_or_unlinked,refs,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58369 = (i__58307 + (1));
i__58307 = G__58369;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58308),athens$views$node_page$node_page_el_$_iter__58230_$_iter__58298_$_iter__58305(cljs.core.chunk_rest(s__58306__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58308),null);
}
} else {
var map__58319 = cljs.core.first(s__58306__$2);
var map__58319__$1 = (((((!((map__58319 == null))))?(((((map__58319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58319):map__58319);
var block = map__58319__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58319__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58319__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58300,map__58319,map__58319__$1,block,uid__$1,parents,s__58306__$2,temp__5735__auto____$2,vec__58302,group_title,group,c__4580__auto__,size__4581__auto__,b__58301,s__58299__$2,temp__5735__auto____$1,vec__58295,linked_or_unlinked,refs,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58230_$_iter__58298_$_iter__58305_$_iter__58321(s__58322){
return (new cljs.core.LazySeq(null,((function (i__58300,map__58319,map__58319__$1,block,uid__$1,parents,s__58306__$2,temp__5735__auto____$2,vec__58302,group_title,group,c__4580__auto__,size__4581__auto__,b__58301,s__58299__$2,temp__5735__auto____$1,vec__58295,linked_or_unlinked,refs,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function (){
var s__58322__$1 = s__58322;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58322__$1);
if(temp__5735__auto____$3){
var s__58322__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58322__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58322__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58324 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58323 = (0);
while(true){
if((i__58323 < size__4581__auto____$1)){
var map__58325 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58323);
var map__58325__$1 = (((((!((map__58325 == null))))?(((((map__58325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58325):map__58325);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58325__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58325__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58325__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58324,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58323,i__58300,map__58325,map__58325__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58324,s__58322__$2,temp__5735__auto____$3,map__58319,map__58319__$1,block,uid__$1,parents,s__58306__$2,temp__5735__auto____$2,vec__58302,group_title,group,c__4580__auto__,size__4581__auto__,b__58301,s__58299__$2,temp__5735__auto____$1,vec__58295,linked_or_unlinked,refs,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58323,i__58300,map__58325,map__58325__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58324,s__58322__$2,temp__5735__auto____$3,map__58319,map__58319__$1,block,uid__$1,parents,s__58306__$2,temp__5735__auto____$2,vec__58302,group_title,group,c__4580__auto__,size__4581__auto__,b__58301,s__58299__$2,temp__5735__auto____$1,vec__58295,linked_or_unlinked,refs,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58370 = (i__58323 + (1));
i__58323 = G__58370;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58324),athens$views$node_page$node_page_el_$_iter__58230_$_iter__58298_$_iter__58305_$_iter__58321(cljs.core.chunk_rest(s__58322__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58324),null);
}
} else {
var map__58327 = cljs.core.first(s__58322__$2);
var map__58327__$1 = (((((!((map__58327 == null))))?(((((map__58327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58327):map__58327);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58327__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58327__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58327__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58300,map__58327,map__58327__$1,title__$1,string,uid__$2,s__58322__$2,temp__5735__auto____$3,map__58319,map__58319__$1,block,uid__$1,parents,s__58306__$2,temp__5735__auto____$2,vec__58302,group_title,group,c__4580__auto__,size__4581__auto__,b__58301,s__58299__$2,temp__5735__auto____$1,vec__58295,linked_or_unlinked,refs,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58300,map__58327,map__58327__$1,title__$1,string,uid__$2,s__58322__$2,temp__5735__auto____$3,map__58319,map__58319__$1,block,uid__$1,parents,s__58306__$2,temp__5735__auto____$2,vec__58302,group_title,group,c__4580__auto__,size__4581__auto__,b__58301,s__58299__$2,temp__5735__auto____$1,vec__58295,linked_or_unlinked,refs,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58230_$_iter__58298_$_iter__58305_$_iter__58321(cljs.core.rest(s__58322__$2)));
}
} else {
return null;
}
break;
}
});})(i__58300,map__58319,map__58319__$1,block,uid__$1,parents,s__58306__$2,temp__5735__auto____$2,vec__58302,group_title,group,c__4580__auto__,size__4581__auto__,b__58301,s__58299__$2,temp__5735__auto____$1,vec__58295,linked_or_unlinked,refs,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
,null,null));
});})(i__58300,map__58319,map__58319__$1,block,uid__$1,parents,s__58306__$2,temp__5735__auto____$2,vec__58302,group_title,group,c__4580__auto__,size__4581__auto__,b__58301,s__58299__$2,temp__5735__auto____$1,vec__58295,linked_or_unlinked,refs,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58230_$_iter__58298_$_iter__58305(cljs.core.rest(s__58306__$2)));
}
} else {
return null;
}
break;
}
});})(i__58300,vec__58302,group_title,group,c__4580__auto__,size__4581__auto__,b__58301,s__58299__$2,temp__5735__auto____$1,vec__58295,linked_or_unlinked,refs,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
,null,null));
});})(i__58300,vec__58302,group_title,group,c__4580__auto__,size__4581__auto__,b__58301,s__58299__$2,temp__5735__auto____$1,vec__58295,linked_or_unlinked,refs,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58371 = (i__58300 + (1));
i__58300 = G__58371;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58301),athens$views$node_page$node_page_el_$_iter__58230_$_iter__58298(cljs.core.chunk_rest(s__58299__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58301),null);
}
} else {
var vec__58329 = cljs.core.first(s__58299__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58329,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58329,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58329,group_title,group,s__58299__$2,temp__5735__auto____$1,vec__58295,linked_or_unlinked,refs,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__58329,group_title,group,s__58299__$2,temp__5735__auto____$1,vec__58295,linked_or_unlinked,refs,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (vec__58329,group_title,group,s__58299__$2,temp__5735__auto____$1,vec__58295,linked_or_unlinked,refs,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58230_$_iter__58298_$_iter__58332(s__58333){
return (new cljs.core.LazySeq(null,(function (){
var s__58333__$1 = s__58333;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58333__$1);
if(temp__5735__auto____$2){
var s__58333__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58333__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58333__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58335 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58334 = (0);
while(true){
if((i__58334 < size__4581__auto__)){
var map__58336 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58334);
var map__58336__$1 = (((((!((map__58336 == null))))?(((((map__58336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58336):map__58336);
var block = map__58336__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58336__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58336__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58335,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58334,map__58336,map__58336__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58335,s__58333__$2,temp__5735__auto____$2,vec__58329,group_title,group,s__58299__$2,temp__5735__auto____$1,vec__58295,linked_or_unlinked,refs,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58230_$_iter__58298_$_iter__58332_$_iter__58338(s__58339){
return (new cljs.core.LazySeq(null,((function (i__58334,map__58336,map__58336__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58335,s__58333__$2,temp__5735__auto____$2,vec__58329,group_title,group,s__58299__$2,temp__5735__auto____$1,vec__58295,linked_or_unlinked,refs,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function (){
var s__58339__$1 = s__58339;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58339__$1);
if(temp__5735__auto____$3){
var s__58339__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58339__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58339__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58341 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58340 = (0);
while(true){
if((i__58340 < size__4581__auto____$1)){
var map__58342 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58340);
var map__58342__$1 = (((((!((map__58342 == null))))?(((((map__58342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58342):map__58342);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58342__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58342__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58342__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58341,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58340,i__58334,map__58342,map__58342__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58341,s__58339__$2,temp__5735__auto____$3,map__58336,map__58336__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58335,s__58333__$2,temp__5735__auto____$2,vec__58329,group_title,group,s__58299__$2,temp__5735__auto____$1,vec__58295,linked_or_unlinked,refs,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58340,i__58334,map__58342,map__58342__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58341,s__58339__$2,temp__5735__auto____$3,map__58336,map__58336__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58335,s__58333__$2,temp__5735__auto____$2,vec__58329,group_title,group,s__58299__$2,temp__5735__auto____$1,vec__58295,linked_or_unlinked,refs,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58372 = (i__58340 + (1));
i__58340 = G__58372;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58341),athens$views$node_page$node_page_el_$_iter__58230_$_iter__58298_$_iter__58332_$_iter__58338(cljs.core.chunk_rest(s__58339__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58341),null);
}
} else {
var map__58344 = cljs.core.first(s__58339__$2);
var map__58344__$1 = (((((!((map__58344 == null))))?(((((map__58344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58344):map__58344);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58344__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58344__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58344__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58334,map__58344,map__58344__$1,title__$1,string,uid__$2,s__58339__$2,temp__5735__auto____$3,map__58336,map__58336__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58335,s__58333__$2,temp__5735__auto____$2,vec__58329,group_title,group,s__58299__$2,temp__5735__auto____$1,vec__58295,linked_or_unlinked,refs,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58334,map__58344,map__58344__$1,title__$1,string,uid__$2,s__58339__$2,temp__5735__auto____$3,map__58336,map__58336__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58335,s__58333__$2,temp__5735__auto____$2,vec__58329,group_title,group,s__58299__$2,temp__5735__auto____$1,vec__58295,linked_or_unlinked,refs,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58230_$_iter__58298_$_iter__58332_$_iter__58338(cljs.core.rest(s__58339__$2)));
}
} else {
return null;
}
break;
}
});})(i__58334,map__58336,map__58336__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58335,s__58333__$2,temp__5735__auto____$2,vec__58329,group_title,group,s__58299__$2,temp__5735__auto____$1,vec__58295,linked_or_unlinked,refs,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
,null,null));
});})(i__58334,map__58336,map__58336__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58335,s__58333__$2,temp__5735__auto____$2,vec__58329,group_title,group,s__58299__$2,temp__5735__auto____$1,vec__58295,linked_or_unlinked,refs,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58373 = (i__58334 + (1));
i__58334 = G__58373;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58335),athens$views$node_page$node_page_el_$_iter__58230_$_iter__58298_$_iter__58332(cljs.core.chunk_rest(s__58333__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58335),null);
}
} else {
var map__58346 = cljs.core.first(s__58333__$2);
var map__58346__$1 = (((((!((map__58346 == null))))?(((((map__58346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58346):map__58346);
var block = map__58346__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58346__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58346__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (map__58346,map__58346__$1,block,uid__$1,parents,s__58333__$2,temp__5735__auto____$2,vec__58329,group_title,group,s__58299__$2,temp__5735__auto____$1,vec__58295,linked_or_unlinked,refs,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58230_$_iter__58298_$_iter__58332_$_iter__58348(s__58349){
return (new cljs.core.LazySeq(null,(function (){
var s__58349__$1 = s__58349;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58349__$1);
if(temp__5735__auto____$3){
var s__58349__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58349__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58349__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58351 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58350 = (0);
while(true){
if((i__58350 < size__4581__auto__)){
var map__58352 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58350);
var map__58352__$1 = (((((!((map__58352 == null))))?(((((map__58352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58352):map__58352);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58352__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58352__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58352__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58351,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58350,map__58352,map__58352__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58351,s__58349__$2,temp__5735__auto____$3,map__58346,map__58346__$1,block,uid__$1,parents,s__58333__$2,temp__5735__auto____$2,vec__58329,group_title,group,s__58299__$2,temp__5735__auto____$1,vec__58295,linked_or_unlinked,refs,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58350,map__58352,map__58352__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58351,s__58349__$2,temp__5735__auto____$3,map__58346,map__58346__$1,block,uid__$1,parents,s__58333__$2,temp__5735__auto____$2,vec__58329,group_title,group,s__58299__$2,temp__5735__auto____$1,vec__58295,linked_or_unlinked,refs,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58374 = (i__58350 + (1));
i__58350 = G__58374;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58351),athens$views$node_page$node_page_el_$_iter__58230_$_iter__58298_$_iter__58332_$_iter__58348(cljs.core.chunk_rest(s__58349__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58351),null);
}
} else {
var map__58354 = cljs.core.first(s__58349__$2);
var map__58354__$1 = (((((!((map__58354 == null))))?(((((map__58354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58354):map__58354);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58354__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58354__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58354__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__58354,map__58354__$1,title__$1,string,uid__$2,s__58349__$2,temp__5735__auto____$3,map__58346,map__58346__$1,block,uid__$1,parents,s__58333__$2,temp__5735__auto____$2,vec__58329,group_title,group,s__58299__$2,temp__5735__auto____$1,vec__58295,linked_or_unlinked,refs,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__58354,map__58354__$1,title__$1,string,uid__$2,s__58349__$2,temp__5735__auto____$3,map__58346,map__58346__$1,block,uid__$1,parents,s__58333__$2,temp__5735__auto____$2,vec__58329,group_title,group,s__58299__$2,temp__5735__auto____$1,vec__58295,linked_or_unlinked,refs,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58230_$_iter__58298_$_iter__58332_$_iter__58348(cljs.core.rest(s__58349__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58346,map__58346__$1,block,uid__$1,parents,s__58333__$2,temp__5735__auto____$2,vec__58329,group_title,group,s__58299__$2,temp__5735__auto____$1,vec__58295,linked_or_unlinked,refs,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58230_$_iter__58298_$_iter__58332(cljs.core.rest(s__58333__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58329,group_title,group,s__58299__$2,temp__5735__auto____$1,vec__58295,linked_or_unlinked,refs,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__58230_$_iter__58298(cljs.core.rest(s__58299__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58295,linked_or_unlinked,refs,s__58231__$2,temp__5735__auto__,map__58218,map__58218__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null),athens$views$node_page$node_page_el_$_iter__58230(cljs.core.rest(s__58231__$2)));
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
var map__58356 = athens.db.get_node_document(ident);
var map__58356__$1 = (((((!((map__58356 == null))))?(((((map__58356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58356):map__58356);
var node = map__58356__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58356__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58356__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__58358 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58358) : re_frame.core.subscribe.call(null,G__58358));
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
