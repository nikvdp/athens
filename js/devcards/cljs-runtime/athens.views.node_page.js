goog.provide('athens.views.node_page');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.db');
goog.require('athens.parse_renderer');
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
var G__58249 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58249) : re_frame.core.dispatch.call(null,G__58249));
});
athens.views.node_page.db_handler = goog.functions.debounce(athens.views.node_page.handler,(500));
athens.views.node_page.get_ref_ids = (function athens$views$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__58250 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__58251 = athens.db.dsdb;
var G__58252 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__58250,G__58251,G__58252) : posh.reagent.q.call(null,G__58250,G__58251,G__58252));
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
return cljs.core.boolean$((function (){try{var vec__58254 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58254,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58254,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58254,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e58253){if((e58253 instanceof Object)){
var _ = e58253;
return false;
} else {
throw e58253;

}
}})());
});
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(p__58257,editing_uid,ref_groups,timeline_page_QMARK_){
var map__58258 = p__58257;
var map__58258__$1 = (((((!((map__58258 == null))))?(((((map__58258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58258):map__58258);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58258__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58258__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58258__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.page_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58260 = e.target.value;
var G__58261 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58260,G__58261) : athens.views.node_page.db_handler.call(null,G__58260,G__58261));
})], null)], null)),athens.parse_renderer.parse_and_render(title)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58262(s__58263){
return (new cljs.core.LazySeq(null,(function (){
var s__58263__$1 = s__58263;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58263__$1);
if(temp__5735__auto__){
var s__58263__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58263__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58263__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58265 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58264 = (0);
while(true){
if((i__58264 < size__4581__auto__)){
var map__58266 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58264);
var map__58266__$1 = (((((!((map__58266 == null))))?(((((map__58266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58266):map__58266);
var child = map__58266__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58266__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58265,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58399 = (i__58264 + (1));
i__58264 = G__58399;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58265),athens$views$node_page$node_page_el_$_iter__58262(cljs.core.chunk_rest(s__58263__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58265),null);
}
} else {
var map__58268 = cljs.core.first(s__58263__$2);
var map__58268__$1 = (((((!((map__58268 == null))))?(((((map__58268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58268):map__58268);
var child = map__58268__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58268__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__58262(cljs.core.rest(s__58263__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58270(s__58271){
return (new cljs.core.LazySeq(null,(function (){
var s__58271__$1 = s__58271;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58271__$1);
if(temp__5735__auto__){
var s__58271__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58271__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58271__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58273 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58272 = (0);
while(true){
if((i__58272 < size__4581__auto__)){
var vec__58274 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58272);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58274,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58274,(1),null);
cljs.core.chunk_append(b__58273,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (i__58272,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58270_$_iter__58277(s__58278){
return (new cljs.core.LazySeq(null,((function (i__58272,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function (){
var s__58278__$1 = s__58278;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58278__$1);
if(temp__5735__auto____$1){
var s__58278__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58278__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58278__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58280 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58279 = (0);
while(true){
if((i__58279 < size__4581__auto____$1)){
var vec__58281 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58279);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58281,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58281,(1),null);
cljs.core.chunk_append(b__58280,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58279,i__58272,vec__58281,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58280,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58279,i__58272,vec__58281,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58280,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58279,i__58272,vec__58281,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58280,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58270_$_iter__58277_$_iter__58284(s__58285){
return (new cljs.core.LazySeq(null,((function (i__58279,i__58272,vec__58281,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58280,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function (){
var s__58285__$1 = s__58285;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58285__$1);
if(temp__5735__auto____$2){
var s__58285__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58285__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58285__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58287 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58286 = (0);
while(true){
if((i__58286 < size__4581__auto____$2)){
var map__58288 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58286);
var map__58288__$1 = (((((!((map__58288 == null))))?(((((map__58288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58288):map__58288);
var block = map__58288__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58288__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58288__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58287,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58286,i__58279,i__58272,map__58288,map__58288__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58287,s__58285__$2,temp__5735__auto____$2,vec__58281,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58280,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58270_$_iter__58277_$_iter__58284_$_iter__58290(s__58291){
return (new cljs.core.LazySeq(null,((function (i__58286,i__58279,i__58272,map__58288,map__58288__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58287,s__58285__$2,temp__5735__auto____$2,vec__58281,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58280,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function (){
var s__58291__$1 = s__58291;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58291__$1);
if(temp__5735__auto____$3){
var s__58291__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58291__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58291__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58293 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58292 = (0);
while(true){
if((i__58292 < size__4581__auto____$3)){
var map__58294 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58292);
var map__58294__$1 = (((((!((map__58294 == null))))?(((((map__58294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58294):map__58294);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58294__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58294__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58294__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58293,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58292,i__58286,i__58279,i__58272,map__58294,map__58294__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58293,s__58291__$2,temp__5735__auto____$3,map__58288,map__58288__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58287,s__58285__$2,temp__5735__auto____$2,vec__58281,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58280,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58292,i__58286,i__58279,i__58272,map__58294,map__58294__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58293,s__58291__$2,temp__5735__auto____$3,map__58288,map__58288__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58287,s__58285__$2,temp__5735__auto____$2,vec__58281,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58280,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58400 = (i__58292 + (1));
i__58292 = G__58400;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58293),athens$views$node_page$node_page_el_$_iter__58270_$_iter__58277_$_iter__58284_$_iter__58290(cljs.core.chunk_rest(s__58291__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58293),null);
}
} else {
var map__58296 = cljs.core.first(s__58291__$2);
var map__58296__$1 = (((((!((map__58296 == null))))?(((((map__58296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58296):map__58296);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58296__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58296__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58296__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58286,i__58279,i__58272,map__58296,map__58296__$1,title__$1,string,uid__$2,s__58291__$2,temp__5735__auto____$3,map__58288,map__58288__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58287,s__58285__$2,temp__5735__auto____$2,vec__58281,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58280,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58286,i__58279,i__58272,map__58296,map__58296__$1,title__$1,string,uid__$2,s__58291__$2,temp__5735__auto____$3,map__58288,map__58288__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58287,s__58285__$2,temp__5735__auto____$2,vec__58281,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58280,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58270_$_iter__58277_$_iter__58284_$_iter__58290(cljs.core.rest(s__58291__$2)));
}
} else {
return null;
}
break;
}
});})(i__58286,i__58279,i__58272,map__58288,map__58288__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58287,s__58285__$2,temp__5735__auto____$2,vec__58281,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58280,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
,null,null));
});})(i__58286,i__58279,i__58272,map__58288,map__58288__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58287,s__58285__$2,temp__5735__auto____$2,vec__58281,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58280,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58401 = (i__58286 + (1));
i__58286 = G__58401;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58287),athens$views$node_page$node_page_el_$_iter__58270_$_iter__58277_$_iter__58284(cljs.core.chunk_rest(s__58285__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58287),null);
}
} else {
var map__58298 = cljs.core.first(s__58285__$2);
var map__58298__$1 = (((((!((map__58298 == null))))?(((((map__58298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58298):map__58298);
var block = map__58298__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58298__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58298__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58279,i__58272,map__58298,map__58298__$1,block,uid__$1,parents,s__58285__$2,temp__5735__auto____$2,vec__58281,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58280,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58270_$_iter__58277_$_iter__58284_$_iter__58300(s__58301){
return (new cljs.core.LazySeq(null,((function (i__58279,i__58272,map__58298,map__58298__$1,block,uid__$1,parents,s__58285__$2,temp__5735__auto____$2,vec__58281,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58280,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function (){
var s__58301__$1 = s__58301;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58301__$1);
if(temp__5735__auto____$3){
var s__58301__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58301__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58301__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58303 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58302 = (0);
while(true){
if((i__58302 < size__4581__auto____$2)){
var map__58304 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58302);
var map__58304__$1 = (((((!((map__58304 == null))))?(((((map__58304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58304):map__58304);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58304__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58304__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58304__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58303,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58302,i__58279,i__58272,map__58304,map__58304__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58303,s__58301__$2,temp__5735__auto____$3,map__58298,map__58298__$1,block,uid__$1,parents,s__58285__$2,temp__5735__auto____$2,vec__58281,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58280,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58302,i__58279,i__58272,map__58304,map__58304__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58303,s__58301__$2,temp__5735__auto____$3,map__58298,map__58298__$1,block,uid__$1,parents,s__58285__$2,temp__5735__auto____$2,vec__58281,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58280,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58402 = (i__58302 + (1));
i__58302 = G__58402;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58303),athens$views$node_page$node_page_el_$_iter__58270_$_iter__58277_$_iter__58284_$_iter__58300(cljs.core.chunk_rest(s__58301__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58303),null);
}
} else {
var map__58306 = cljs.core.first(s__58301__$2);
var map__58306__$1 = (((((!((map__58306 == null))))?(((((map__58306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58306):map__58306);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58306__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58306__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58306__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58279,i__58272,map__58306,map__58306__$1,title__$1,string,uid__$2,s__58301__$2,temp__5735__auto____$3,map__58298,map__58298__$1,block,uid__$1,parents,s__58285__$2,temp__5735__auto____$2,vec__58281,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58280,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58279,i__58272,map__58306,map__58306__$1,title__$1,string,uid__$2,s__58301__$2,temp__5735__auto____$3,map__58298,map__58298__$1,block,uid__$1,parents,s__58285__$2,temp__5735__auto____$2,vec__58281,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58280,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58270_$_iter__58277_$_iter__58284_$_iter__58300(cljs.core.rest(s__58301__$2)));
}
} else {
return null;
}
break;
}
});})(i__58279,i__58272,map__58298,map__58298__$1,block,uid__$1,parents,s__58285__$2,temp__5735__auto____$2,vec__58281,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58280,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
,null,null));
});})(i__58279,i__58272,map__58298,map__58298__$1,block,uid__$1,parents,s__58285__$2,temp__5735__auto____$2,vec__58281,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58280,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58270_$_iter__58277_$_iter__58284(cljs.core.rest(s__58285__$2)));
}
} else {
return null;
}
break;
}
});})(i__58279,i__58272,vec__58281,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58280,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
,null,null));
});})(i__58279,i__58272,vec__58281,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58280,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58403 = (i__58279 + (1));
i__58279 = G__58403;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58280),athens$views$node_page$node_page_el_$_iter__58270_$_iter__58277(cljs.core.chunk_rest(s__58278__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58280),null);
}
} else {
var vec__58308 = cljs.core.first(s__58278__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58308,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58308,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58272,vec__58308,group_title,group,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58272,vec__58308,group_title,group,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58272,vec__58308,group_title,group,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58270_$_iter__58277_$_iter__58311(s__58312){
return (new cljs.core.LazySeq(null,((function (i__58272,vec__58308,group_title,group,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function (){
var s__58312__$1 = s__58312;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58312__$1);
if(temp__5735__auto____$2){
var s__58312__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58312__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58312__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58314 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58313 = (0);
while(true){
if((i__58313 < size__4581__auto____$1)){
var map__58315 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58313);
var map__58315__$1 = (((((!((map__58315 == null))))?(((((map__58315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58315):map__58315);
var block = map__58315__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58315__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58315__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58314,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58313,i__58272,map__58315,map__58315__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58314,s__58312__$2,temp__5735__auto____$2,vec__58308,group_title,group,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58270_$_iter__58277_$_iter__58311_$_iter__58317(s__58318){
return (new cljs.core.LazySeq(null,((function (i__58313,i__58272,map__58315,map__58315__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58314,s__58312__$2,temp__5735__auto____$2,vec__58308,group_title,group,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function (){
var s__58318__$1 = s__58318;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58318__$1);
if(temp__5735__auto____$3){
var s__58318__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58318__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58318__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58320 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58319 = (0);
while(true){
if((i__58319 < size__4581__auto____$2)){
var map__58321 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58319);
var map__58321__$1 = (((((!((map__58321 == null))))?(((((map__58321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58321):map__58321);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58321__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58321__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58321__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58320,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58319,i__58313,i__58272,map__58321,map__58321__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58320,s__58318__$2,temp__5735__auto____$3,map__58315,map__58315__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58314,s__58312__$2,temp__5735__auto____$2,vec__58308,group_title,group,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58319,i__58313,i__58272,map__58321,map__58321__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58320,s__58318__$2,temp__5735__auto____$3,map__58315,map__58315__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58314,s__58312__$2,temp__5735__auto____$2,vec__58308,group_title,group,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58404 = (i__58319 + (1));
i__58319 = G__58404;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58320),athens$views$node_page$node_page_el_$_iter__58270_$_iter__58277_$_iter__58311_$_iter__58317(cljs.core.chunk_rest(s__58318__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58320),null);
}
} else {
var map__58323 = cljs.core.first(s__58318__$2);
var map__58323__$1 = (((((!((map__58323 == null))))?(((((map__58323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58323):map__58323);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58323__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58323__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58323__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58313,i__58272,map__58323,map__58323__$1,title__$1,string,uid__$2,s__58318__$2,temp__5735__auto____$3,map__58315,map__58315__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58314,s__58312__$2,temp__5735__auto____$2,vec__58308,group_title,group,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58313,i__58272,map__58323,map__58323__$1,title__$1,string,uid__$2,s__58318__$2,temp__5735__auto____$3,map__58315,map__58315__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58314,s__58312__$2,temp__5735__auto____$2,vec__58308,group_title,group,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58270_$_iter__58277_$_iter__58311_$_iter__58317(cljs.core.rest(s__58318__$2)));
}
} else {
return null;
}
break;
}
});})(i__58313,i__58272,map__58315,map__58315__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58314,s__58312__$2,temp__5735__auto____$2,vec__58308,group_title,group,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
,null,null));
});})(i__58313,i__58272,map__58315,map__58315__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58314,s__58312__$2,temp__5735__auto____$2,vec__58308,group_title,group,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58405 = (i__58313 + (1));
i__58313 = G__58405;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58314),athens$views$node_page$node_page_el_$_iter__58270_$_iter__58277_$_iter__58311(cljs.core.chunk_rest(s__58312__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58314),null);
}
} else {
var map__58325 = cljs.core.first(s__58312__$2);
var map__58325__$1 = (((((!((map__58325 == null))))?(((((map__58325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58325):map__58325);
var block = map__58325__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58325__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58325__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58272,map__58325,map__58325__$1,block,uid__$1,parents,s__58312__$2,temp__5735__auto____$2,vec__58308,group_title,group,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58270_$_iter__58277_$_iter__58311_$_iter__58327(s__58328){
return (new cljs.core.LazySeq(null,((function (i__58272,map__58325,map__58325__$1,block,uid__$1,parents,s__58312__$2,temp__5735__auto____$2,vec__58308,group_title,group,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function (){
var s__58328__$1 = s__58328;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58328__$1);
if(temp__5735__auto____$3){
var s__58328__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58328__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58328__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58330 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58329 = (0);
while(true){
if((i__58329 < size__4581__auto____$1)){
var map__58331 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58329);
var map__58331__$1 = (((((!((map__58331 == null))))?(((((map__58331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58331):map__58331);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58331__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58331__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58331__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58330,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58329,i__58272,map__58331,map__58331__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58330,s__58328__$2,temp__5735__auto____$3,map__58325,map__58325__$1,block,uid__$1,parents,s__58312__$2,temp__5735__auto____$2,vec__58308,group_title,group,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58329,i__58272,map__58331,map__58331__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58330,s__58328__$2,temp__5735__auto____$3,map__58325,map__58325__$1,block,uid__$1,parents,s__58312__$2,temp__5735__auto____$2,vec__58308,group_title,group,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58406 = (i__58329 + (1));
i__58329 = G__58406;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58330),athens$views$node_page$node_page_el_$_iter__58270_$_iter__58277_$_iter__58311_$_iter__58327(cljs.core.chunk_rest(s__58328__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58330),null);
}
} else {
var map__58333 = cljs.core.first(s__58328__$2);
var map__58333__$1 = (((((!((map__58333 == null))))?(((((map__58333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58333):map__58333);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58333__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58333__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58333__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58272,map__58333,map__58333__$1,title__$1,string,uid__$2,s__58328__$2,temp__5735__auto____$3,map__58325,map__58325__$1,block,uid__$1,parents,s__58312__$2,temp__5735__auto____$2,vec__58308,group_title,group,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58272,map__58333,map__58333__$1,title__$1,string,uid__$2,s__58328__$2,temp__5735__auto____$3,map__58325,map__58325__$1,block,uid__$1,parents,s__58312__$2,temp__5735__auto____$2,vec__58308,group_title,group,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58270_$_iter__58277_$_iter__58311_$_iter__58327(cljs.core.rest(s__58328__$2)));
}
} else {
return null;
}
break;
}
});})(i__58272,map__58325,map__58325__$1,block,uid__$1,parents,s__58312__$2,temp__5735__auto____$2,vec__58308,group_title,group,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
,null,null));
});})(i__58272,map__58325,map__58325__$1,block,uid__$1,parents,s__58312__$2,temp__5735__auto____$2,vec__58308,group_title,group,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58270_$_iter__58277_$_iter__58311(cljs.core.rest(s__58312__$2)));
}
} else {
return null;
}
break;
}
});})(i__58272,vec__58308,group_title,group,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
,null,null));
});})(i__58272,vec__58308,group_title,group,s__58278__$2,temp__5735__auto____$1,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__58270_$_iter__58277(cljs.core.rest(s__58278__$2)));
}
} else {
return null;
}
break;
}
});})(i__58272,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
,null,null));
});})(i__58272,vec__58274,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58273,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null));

var G__58407 = (i__58272 + (1));
i__58272 = G__58407;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58273),athens$views$node_page$node_page_el_$_iter__58270(cljs.core.chunk_rest(s__58271__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58273),null);
}
} else {
var vec__58335 = cljs.core.first(s__58271__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58335,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58335,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (vec__58335,linked_or_unlinked,refs,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58270_$_iter__58338(s__58339){
return (new cljs.core.LazySeq(null,(function (){
var s__58339__$1 = s__58339;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58339__$1);
if(temp__5735__auto____$1){
var s__58339__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58339__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58339__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58341 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58340 = (0);
while(true){
if((i__58340 < size__4581__auto__)){
var vec__58342 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58340);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58342,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58342,(1),null);
cljs.core.chunk_append(b__58341,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58340,vec__58342,group_title,group,c__4580__auto__,size__4581__auto__,b__58341,s__58339__$2,temp__5735__auto____$1,vec__58335,linked_or_unlinked,refs,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58340,vec__58342,group_title,group,c__4580__auto__,size__4581__auto__,b__58341,s__58339__$2,temp__5735__auto____$1,vec__58335,linked_or_unlinked,refs,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58340,vec__58342,group_title,group,c__4580__auto__,size__4581__auto__,b__58341,s__58339__$2,temp__5735__auto____$1,vec__58335,linked_or_unlinked,refs,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58270_$_iter__58338_$_iter__58345(s__58346){
return (new cljs.core.LazySeq(null,((function (i__58340,vec__58342,group_title,group,c__4580__auto__,size__4581__auto__,b__58341,s__58339__$2,temp__5735__auto____$1,vec__58335,linked_or_unlinked,refs,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function (){
var s__58346__$1 = s__58346;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58346__$1);
if(temp__5735__auto____$2){
var s__58346__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58346__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58346__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58348 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58347 = (0);
while(true){
if((i__58347 < size__4581__auto____$1)){
var map__58349 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58347);
var map__58349__$1 = (((((!((map__58349 == null))))?(((((map__58349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58349):map__58349);
var block = map__58349__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58349__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58349__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58348,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58347,i__58340,map__58349,map__58349__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58348,s__58346__$2,temp__5735__auto____$2,vec__58342,group_title,group,c__4580__auto__,size__4581__auto__,b__58341,s__58339__$2,temp__5735__auto____$1,vec__58335,linked_or_unlinked,refs,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58270_$_iter__58338_$_iter__58345_$_iter__58351(s__58352){
return (new cljs.core.LazySeq(null,((function (i__58347,i__58340,map__58349,map__58349__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58348,s__58346__$2,temp__5735__auto____$2,vec__58342,group_title,group,c__4580__auto__,size__4581__auto__,b__58341,s__58339__$2,temp__5735__auto____$1,vec__58335,linked_or_unlinked,refs,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function (){
var s__58352__$1 = s__58352;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58352__$1);
if(temp__5735__auto____$3){
var s__58352__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58352__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58352__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58354 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58353 = (0);
while(true){
if((i__58353 < size__4581__auto____$2)){
var map__58355 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58353);
var map__58355__$1 = (((((!((map__58355 == null))))?(((((map__58355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58355):map__58355);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58355__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58355__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58355__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58354,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58353,i__58347,i__58340,map__58355,map__58355__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58354,s__58352__$2,temp__5735__auto____$3,map__58349,map__58349__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58348,s__58346__$2,temp__5735__auto____$2,vec__58342,group_title,group,c__4580__auto__,size__4581__auto__,b__58341,s__58339__$2,temp__5735__auto____$1,vec__58335,linked_or_unlinked,refs,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58353,i__58347,i__58340,map__58355,map__58355__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58354,s__58352__$2,temp__5735__auto____$3,map__58349,map__58349__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58348,s__58346__$2,temp__5735__auto____$2,vec__58342,group_title,group,c__4580__auto__,size__4581__auto__,b__58341,s__58339__$2,temp__5735__auto____$1,vec__58335,linked_or_unlinked,refs,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58408 = (i__58353 + (1));
i__58353 = G__58408;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58354),athens$views$node_page$node_page_el_$_iter__58270_$_iter__58338_$_iter__58345_$_iter__58351(cljs.core.chunk_rest(s__58352__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58354),null);
}
} else {
var map__58357 = cljs.core.first(s__58352__$2);
var map__58357__$1 = (((((!((map__58357 == null))))?(((((map__58357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58357):map__58357);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58357__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58357__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58357__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58347,i__58340,map__58357,map__58357__$1,title__$1,string,uid__$2,s__58352__$2,temp__5735__auto____$3,map__58349,map__58349__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58348,s__58346__$2,temp__5735__auto____$2,vec__58342,group_title,group,c__4580__auto__,size__4581__auto__,b__58341,s__58339__$2,temp__5735__auto____$1,vec__58335,linked_or_unlinked,refs,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58347,i__58340,map__58357,map__58357__$1,title__$1,string,uid__$2,s__58352__$2,temp__5735__auto____$3,map__58349,map__58349__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58348,s__58346__$2,temp__5735__auto____$2,vec__58342,group_title,group,c__4580__auto__,size__4581__auto__,b__58341,s__58339__$2,temp__5735__auto____$1,vec__58335,linked_or_unlinked,refs,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58270_$_iter__58338_$_iter__58345_$_iter__58351(cljs.core.rest(s__58352__$2)));
}
} else {
return null;
}
break;
}
});})(i__58347,i__58340,map__58349,map__58349__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58348,s__58346__$2,temp__5735__auto____$2,vec__58342,group_title,group,c__4580__auto__,size__4581__auto__,b__58341,s__58339__$2,temp__5735__auto____$1,vec__58335,linked_or_unlinked,refs,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
,null,null));
});})(i__58347,i__58340,map__58349,map__58349__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58348,s__58346__$2,temp__5735__auto____$2,vec__58342,group_title,group,c__4580__auto__,size__4581__auto__,b__58341,s__58339__$2,temp__5735__auto____$1,vec__58335,linked_or_unlinked,refs,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58409 = (i__58347 + (1));
i__58347 = G__58409;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58348),athens$views$node_page$node_page_el_$_iter__58270_$_iter__58338_$_iter__58345(cljs.core.chunk_rest(s__58346__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58348),null);
}
} else {
var map__58359 = cljs.core.first(s__58346__$2);
var map__58359__$1 = (((((!((map__58359 == null))))?(((((map__58359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58359):map__58359);
var block = map__58359__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58359__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58359__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58340,map__58359,map__58359__$1,block,uid__$1,parents,s__58346__$2,temp__5735__auto____$2,vec__58342,group_title,group,c__4580__auto__,size__4581__auto__,b__58341,s__58339__$2,temp__5735__auto____$1,vec__58335,linked_or_unlinked,refs,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58270_$_iter__58338_$_iter__58345_$_iter__58361(s__58362){
return (new cljs.core.LazySeq(null,((function (i__58340,map__58359,map__58359__$1,block,uid__$1,parents,s__58346__$2,temp__5735__auto____$2,vec__58342,group_title,group,c__4580__auto__,size__4581__auto__,b__58341,s__58339__$2,temp__5735__auto____$1,vec__58335,linked_or_unlinked,refs,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function (){
var s__58362__$1 = s__58362;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58362__$1);
if(temp__5735__auto____$3){
var s__58362__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58362__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58362__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58364 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58363 = (0);
while(true){
if((i__58363 < size__4581__auto____$1)){
var map__58365 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58363);
var map__58365__$1 = (((((!((map__58365 == null))))?(((((map__58365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58365):map__58365);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58365__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58365__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58365__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58364,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58363,i__58340,map__58365,map__58365__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58364,s__58362__$2,temp__5735__auto____$3,map__58359,map__58359__$1,block,uid__$1,parents,s__58346__$2,temp__5735__auto____$2,vec__58342,group_title,group,c__4580__auto__,size__4581__auto__,b__58341,s__58339__$2,temp__5735__auto____$1,vec__58335,linked_or_unlinked,refs,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58363,i__58340,map__58365,map__58365__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58364,s__58362__$2,temp__5735__auto____$3,map__58359,map__58359__$1,block,uid__$1,parents,s__58346__$2,temp__5735__auto____$2,vec__58342,group_title,group,c__4580__auto__,size__4581__auto__,b__58341,s__58339__$2,temp__5735__auto____$1,vec__58335,linked_or_unlinked,refs,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58410 = (i__58363 + (1));
i__58363 = G__58410;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58364),athens$views$node_page$node_page_el_$_iter__58270_$_iter__58338_$_iter__58345_$_iter__58361(cljs.core.chunk_rest(s__58362__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58364),null);
}
} else {
var map__58367 = cljs.core.first(s__58362__$2);
var map__58367__$1 = (((((!((map__58367 == null))))?(((((map__58367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58367):map__58367);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58367__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58367__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58367__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58340,map__58367,map__58367__$1,title__$1,string,uid__$2,s__58362__$2,temp__5735__auto____$3,map__58359,map__58359__$1,block,uid__$1,parents,s__58346__$2,temp__5735__auto____$2,vec__58342,group_title,group,c__4580__auto__,size__4581__auto__,b__58341,s__58339__$2,temp__5735__auto____$1,vec__58335,linked_or_unlinked,refs,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58340,map__58367,map__58367__$1,title__$1,string,uid__$2,s__58362__$2,temp__5735__auto____$3,map__58359,map__58359__$1,block,uid__$1,parents,s__58346__$2,temp__5735__auto____$2,vec__58342,group_title,group,c__4580__auto__,size__4581__auto__,b__58341,s__58339__$2,temp__5735__auto____$1,vec__58335,linked_or_unlinked,refs,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58270_$_iter__58338_$_iter__58345_$_iter__58361(cljs.core.rest(s__58362__$2)));
}
} else {
return null;
}
break;
}
});})(i__58340,map__58359,map__58359__$1,block,uid__$1,parents,s__58346__$2,temp__5735__auto____$2,vec__58342,group_title,group,c__4580__auto__,size__4581__auto__,b__58341,s__58339__$2,temp__5735__auto____$1,vec__58335,linked_or_unlinked,refs,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
,null,null));
});})(i__58340,map__58359,map__58359__$1,block,uid__$1,parents,s__58346__$2,temp__5735__auto____$2,vec__58342,group_title,group,c__4580__auto__,size__4581__auto__,b__58341,s__58339__$2,temp__5735__auto____$1,vec__58335,linked_or_unlinked,refs,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58270_$_iter__58338_$_iter__58345(cljs.core.rest(s__58346__$2)));
}
} else {
return null;
}
break;
}
});})(i__58340,vec__58342,group_title,group,c__4580__auto__,size__4581__auto__,b__58341,s__58339__$2,temp__5735__auto____$1,vec__58335,linked_or_unlinked,refs,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
,null,null));
});})(i__58340,vec__58342,group_title,group,c__4580__auto__,size__4581__auto__,b__58341,s__58339__$2,temp__5735__auto____$1,vec__58335,linked_or_unlinked,refs,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58411 = (i__58340 + (1));
i__58340 = G__58411;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58341),athens$views$node_page$node_page_el_$_iter__58270_$_iter__58338(cljs.core.chunk_rest(s__58339__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58341),null);
}
} else {
var vec__58369 = cljs.core.first(s__58339__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58369,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58369,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58369,group_title,group,s__58339__$2,temp__5735__auto____$1,vec__58335,linked_or_unlinked,refs,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__58369,group_title,group,s__58339__$2,temp__5735__auto____$1,vec__58335,linked_or_unlinked,refs,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (vec__58369,group_title,group,s__58339__$2,temp__5735__auto____$1,vec__58335,linked_or_unlinked,refs,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58270_$_iter__58338_$_iter__58372(s__58373){
return (new cljs.core.LazySeq(null,(function (){
var s__58373__$1 = s__58373;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58373__$1);
if(temp__5735__auto____$2){
var s__58373__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58373__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58373__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58375 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58374 = (0);
while(true){
if((i__58374 < size__4581__auto__)){
var map__58376 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58374);
var map__58376__$1 = (((((!((map__58376 == null))))?(((((map__58376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58376):map__58376);
var block = map__58376__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58376__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58376__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58375,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58374,map__58376,map__58376__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58375,s__58373__$2,temp__5735__auto____$2,vec__58369,group_title,group,s__58339__$2,temp__5735__auto____$1,vec__58335,linked_or_unlinked,refs,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58270_$_iter__58338_$_iter__58372_$_iter__58378(s__58379){
return (new cljs.core.LazySeq(null,((function (i__58374,map__58376,map__58376__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58375,s__58373__$2,temp__5735__auto____$2,vec__58369,group_title,group,s__58339__$2,temp__5735__auto____$1,vec__58335,linked_or_unlinked,refs,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function (){
var s__58379__$1 = s__58379;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58379__$1);
if(temp__5735__auto____$3){
var s__58379__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58379__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58379__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58381 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58380 = (0);
while(true){
if((i__58380 < size__4581__auto____$1)){
var map__58382 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58380);
var map__58382__$1 = (((((!((map__58382 == null))))?(((((map__58382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58382):map__58382);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58382__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58382__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58382__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58381,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58380,i__58374,map__58382,map__58382__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58381,s__58379__$2,temp__5735__auto____$3,map__58376,map__58376__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58375,s__58373__$2,temp__5735__auto____$2,vec__58369,group_title,group,s__58339__$2,temp__5735__auto____$1,vec__58335,linked_or_unlinked,refs,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58380,i__58374,map__58382,map__58382__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58381,s__58379__$2,temp__5735__auto____$3,map__58376,map__58376__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58375,s__58373__$2,temp__5735__auto____$2,vec__58369,group_title,group,s__58339__$2,temp__5735__auto____$1,vec__58335,linked_or_unlinked,refs,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58412 = (i__58380 + (1));
i__58380 = G__58412;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58381),athens$views$node_page$node_page_el_$_iter__58270_$_iter__58338_$_iter__58372_$_iter__58378(cljs.core.chunk_rest(s__58379__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58381),null);
}
} else {
var map__58384 = cljs.core.first(s__58379__$2);
var map__58384__$1 = (((((!((map__58384 == null))))?(((((map__58384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58384):map__58384);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58384__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58384__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58384__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58374,map__58384,map__58384__$1,title__$1,string,uid__$2,s__58379__$2,temp__5735__auto____$3,map__58376,map__58376__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58375,s__58373__$2,temp__5735__auto____$2,vec__58369,group_title,group,s__58339__$2,temp__5735__auto____$1,vec__58335,linked_or_unlinked,refs,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58374,map__58384,map__58384__$1,title__$1,string,uid__$2,s__58379__$2,temp__5735__auto____$3,map__58376,map__58376__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58375,s__58373__$2,temp__5735__auto____$2,vec__58369,group_title,group,s__58339__$2,temp__5735__auto____$1,vec__58335,linked_or_unlinked,refs,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58270_$_iter__58338_$_iter__58372_$_iter__58378(cljs.core.rest(s__58379__$2)));
}
} else {
return null;
}
break;
}
});})(i__58374,map__58376,map__58376__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58375,s__58373__$2,temp__5735__auto____$2,vec__58369,group_title,group,s__58339__$2,temp__5735__auto____$1,vec__58335,linked_or_unlinked,refs,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
,null,null));
});})(i__58374,map__58376,map__58376__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58375,s__58373__$2,temp__5735__auto____$2,vec__58369,group_title,group,s__58339__$2,temp__5735__auto____$1,vec__58335,linked_or_unlinked,refs,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58413 = (i__58374 + (1));
i__58374 = G__58413;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58375),athens$views$node_page$node_page_el_$_iter__58270_$_iter__58338_$_iter__58372(cljs.core.chunk_rest(s__58373__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58375),null);
}
} else {
var map__58386 = cljs.core.first(s__58373__$2);
var map__58386__$1 = (((((!((map__58386 == null))))?(((((map__58386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58386):map__58386);
var block = map__58386__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58386__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58386__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (map__58386,map__58386__$1,block,uid__$1,parents,s__58373__$2,temp__5735__auto____$2,vec__58369,group_title,group,s__58339__$2,temp__5735__auto____$1,vec__58335,linked_or_unlinked,refs,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58270_$_iter__58338_$_iter__58372_$_iter__58388(s__58389){
return (new cljs.core.LazySeq(null,(function (){
var s__58389__$1 = s__58389;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58389__$1);
if(temp__5735__auto____$3){
var s__58389__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58389__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58389__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58391 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58390 = (0);
while(true){
if((i__58390 < size__4581__auto__)){
var map__58392 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58390);
var map__58392__$1 = (((((!((map__58392 == null))))?(((((map__58392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58392):map__58392);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58392__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58392__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58392__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58391,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58390,map__58392,map__58392__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58391,s__58389__$2,temp__5735__auto____$3,map__58386,map__58386__$1,block,uid__$1,parents,s__58373__$2,temp__5735__auto____$2,vec__58369,group_title,group,s__58339__$2,temp__5735__auto____$1,vec__58335,linked_or_unlinked,refs,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58390,map__58392,map__58392__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58391,s__58389__$2,temp__5735__auto____$3,map__58386,map__58386__$1,block,uid__$1,parents,s__58373__$2,temp__5735__auto____$2,vec__58369,group_title,group,s__58339__$2,temp__5735__auto____$1,vec__58335,linked_or_unlinked,refs,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58414 = (i__58390 + (1));
i__58390 = G__58414;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58391),athens$views$node_page$node_page_el_$_iter__58270_$_iter__58338_$_iter__58372_$_iter__58388(cljs.core.chunk_rest(s__58389__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58391),null);
}
} else {
var map__58394 = cljs.core.first(s__58389__$2);
var map__58394__$1 = (((((!((map__58394 == null))))?(((((map__58394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58394):map__58394);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58394__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58394__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58394__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__58394,map__58394__$1,title__$1,string,uid__$2,s__58389__$2,temp__5735__auto____$3,map__58386,map__58386__$1,block,uid__$1,parents,s__58373__$2,temp__5735__auto____$2,vec__58369,group_title,group,s__58339__$2,temp__5735__auto____$1,vec__58335,linked_or_unlinked,refs,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__58394,map__58394__$1,title__$1,string,uid__$2,s__58389__$2,temp__5735__auto____$3,map__58386,map__58386__$1,block,uid__$1,parents,s__58373__$2,temp__5735__auto____$2,vec__58369,group_title,group,s__58339__$2,temp__5735__auto____$1,vec__58335,linked_or_unlinked,refs,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58270_$_iter__58338_$_iter__58372_$_iter__58388(cljs.core.rest(s__58389__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58386,map__58386__$1,block,uid__$1,parents,s__58373__$2,temp__5735__auto____$2,vec__58369,group_title,group,s__58339__$2,temp__5735__auto____$1,vec__58335,linked_or_unlinked,refs,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58270_$_iter__58338_$_iter__58372(cljs.core.rest(s__58373__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58369,group_title,group,s__58339__$2,temp__5735__auto____$1,vec__58335,linked_or_unlinked,refs,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__58270_$_iter__58338(cljs.core.rest(s__58339__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58335,linked_or_unlinked,refs,s__58271__$2,temp__5735__auto__,map__58258,map__58258__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null),athens$views$node_page$node_page_el_$_iter__58270(cljs.core.rest(s__58271__$2)));
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
var map__58396 = athens.db.get_node_document(ident);
var map__58396__$1 = (((((!((map__58396 == null))))?(((((map__58396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58396):map__58396);
var node = map__58396__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58396__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58396__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__58398 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58398) : re_frame.core.subscribe.call(null,G__58398));
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
