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
var G__58303 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58303) : re_frame.core.dispatch.call(null,G__58303));
});
athens.views.node_page.db_handler = goog.functions.debounce(athens.views.node_page.handler,(500));
athens.views.node_page.get_ref_ids = (function athens$views$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__58304 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__58305 = athens.db.dsdb;
var G__58306 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__58304,G__58305,G__58306) : posh.reagent.q.call(null,G__58304,G__58305,G__58306));
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
return cljs.core.boolean$((function (){try{var vec__58308 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58308,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58308,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58308,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e58307){if((e58307 instanceof Object)){
var _ = e58307;
return false;
} else {
throw e58307;

}
}})());
});
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(p__58311,editing_uid,ref_groups,timeline_page_QMARK_){
var map__58312 = p__58311;
var map__58312__$1 = (((((!((map__58312 == null))))?(((((map__58312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58312):map__58312);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58312__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58312__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58312__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.page_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58314 = e.target.value;
var G__58315 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58314,G__58315) : athens.views.node_page.db_handler.call(null,G__58314,G__58315));
})], null)], null)),athens.parse_renderer.parse_and_render(title)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58316(s__58317){
return (new cljs.core.LazySeq(null,(function (){
var s__58317__$1 = s__58317;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58317__$1);
if(temp__5735__auto__){
var s__58317__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58317__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58317__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58319 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58318 = (0);
while(true){
if((i__58318 < size__4581__auto__)){
var map__58320 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58318);
var map__58320__$1 = (((((!((map__58320 == null))))?(((((map__58320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58320):map__58320);
var child = map__58320__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58320__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58319,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58453 = (i__58318 + (1));
i__58318 = G__58453;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58319),athens$views$node_page$node_page_el_$_iter__58316(cljs.core.chunk_rest(s__58317__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58319),null);
}
} else {
var map__58322 = cljs.core.first(s__58317__$2);
var map__58322__$1 = (((((!((map__58322 == null))))?(((((map__58322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58322):map__58322);
var child = map__58322__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58322__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__58316(cljs.core.rest(s__58317__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58324(s__58325){
return (new cljs.core.LazySeq(null,(function (){
var s__58325__$1 = s__58325;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58325__$1);
if(temp__5735__auto__){
var s__58325__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58325__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58325__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58327 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58326 = (0);
while(true){
if((i__58326 < size__4581__auto__)){
var vec__58328 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58326);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58328,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58328,(1),null);
cljs.core.chunk_append(b__58327,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (i__58326,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58324_$_iter__58331(s__58332){
return (new cljs.core.LazySeq(null,((function (i__58326,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function (){
var s__58332__$1 = s__58332;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58332__$1);
if(temp__5735__auto____$1){
var s__58332__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58332__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58332__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58334 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58333 = (0);
while(true){
if((i__58333 < size__4581__auto____$1)){
var vec__58335 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58333);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58335,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58335,(1),null);
cljs.core.chunk_append(b__58334,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58333,i__58326,vec__58335,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58334,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58333,i__58326,vec__58335,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58334,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58333,i__58326,vec__58335,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58334,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58324_$_iter__58331_$_iter__58338(s__58339){
return (new cljs.core.LazySeq(null,((function (i__58333,i__58326,vec__58335,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58334,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function (){
var s__58339__$1 = s__58339;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58339__$1);
if(temp__5735__auto____$2){
var s__58339__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58339__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58339__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58341 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58340 = (0);
while(true){
if((i__58340 < size__4581__auto____$2)){
var map__58342 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58340);
var map__58342__$1 = (((((!((map__58342 == null))))?(((((map__58342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58342):map__58342);
var block = map__58342__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58342__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58342__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58341,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58340,i__58333,i__58326,map__58342,map__58342__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58341,s__58339__$2,temp__5735__auto____$2,vec__58335,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58334,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58324_$_iter__58331_$_iter__58338_$_iter__58344(s__58345){
return (new cljs.core.LazySeq(null,((function (i__58340,i__58333,i__58326,map__58342,map__58342__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58341,s__58339__$2,temp__5735__auto____$2,vec__58335,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58334,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function (){
var s__58345__$1 = s__58345;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58345__$1);
if(temp__5735__auto____$3){
var s__58345__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58345__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58345__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58347 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58346 = (0);
while(true){
if((i__58346 < size__4581__auto____$3)){
var map__58348 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58346);
var map__58348__$1 = (((((!((map__58348 == null))))?(((((map__58348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58348):map__58348);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58348__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58348__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58348__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58347,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58346,i__58340,i__58333,i__58326,map__58348,map__58348__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58347,s__58345__$2,temp__5735__auto____$3,map__58342,map__58342__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58341,s__58339__$2,temp__5735__auto____$2,vec__58335,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58334,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58346,i__58340,i__58333,i__58326,map__58348,map__58348__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58347,s__58345__$2,temp__5735__auto____$3,map__58342,map__58342__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58341,s__58339__$2,temp__5735__auto____$2,vec__58335,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58334,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58454 = (i__58346 + (1));
i__58346 = G__58454;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58347),athens$views$node_page$node_page_el_$_iter__58324_$_iter__58331_$_iter__58338_$_iter__58344(cljs.core.chunk_rest(s__58345__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58347),null);
}
} else {
var map__58350 = cljs.core.first(s__58345__$2);
var map__58350__$1 = (((((!((map__58350 == null))))?(((((map__58350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58350):map__58350);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58350__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58350__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58350__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58340,i__58333,i__58326,map__58350,map__58350__$1,title__$1,string,uid__$2,s__58345__$2,temp__5735__auto____$3,map__58342,map__58342__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58341,s__58339__$2,temp__5735__auto____$2,vec__58335,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58334,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58340,i__58333,i__58326,map__58350,map__58350__$1,title__$1,string,uid__$2,s__58345__$2,temp__5735__auto____$3,map__58342,map__58342__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58341,s__58339__$2,temp__5735__auto____$2,vec__58335,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58334,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58324_$_iter__58331_$_iter__58338_$_iter__58344(cljs.core.rest(s__58345__$2)));
}
} else {
return null;
}
break;
}
});})(i__58340,i__58333,i__58326,map__58342,map__58342__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58341,s__58339__$2,temp__5735__auto____$2,vec__58335,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58334,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
,null,null));
});})(i__58340,i__58333,i__58326,map__58342,map__58342__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58341,s__58339__$2,temp__5735__auto____$2,vec__58335,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58334,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58455 = (i__58340 + (1));
i__58340 = G__58455;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58341),athens$views$node_page$node_page_el_$_iter__58324_$_iter__58331_$_iter__58338(cljs.core.chunk_rest(s__58339__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58341),null);
}
} else {
var map__58352 = cljs.core.first(s__58339__$2);
var map__58352__$1 = (((((!((map__58352 == null))))?(((((map__58352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58352):map__58352);
var block = map__58352__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58352__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58352__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58333,i__58326,map__58352,map__58352__$1,block,uid__$1,parents,s__58339__$2,temp__5735__auto____$2,vec__58335,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58334,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58324_$_iter__58331_$_iter__58338_$_iter__58354(s__58355){
return (new cljs.core.LazySeq(null,((function (i__58333,i__58326,map__58352,map__58352__$1,block,uid__$1,parents,s__58339__$2,temp__5735__auto____$2,vec__58335,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58334,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function (){
var s__58355__$1 = s__58355;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58355__$1);
if(temp__5735__auto____$3){
var s__58355__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58355__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58355__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58357 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58356 = (0);
while(true){
if((i__58356 < size__4581__auto____$2)){
var map__58358 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58356);
var map__58358__$1 = (((((!((map__58358 == null))))?(((((map__58358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58358):map__58358);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58358__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58358__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58358__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58357,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58356,i__58333,i__58326,map__58358,map__58358__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58357,s__58355__$2,temp__5735__auto____$3,map__58352,map__58352__$1,block,uid__$1,parents,s__58339__$2,temp__5735__auto____$2,vec__58335,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58334,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58356,i__58333,i__58326,map__58358,map__58358__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58357,s__58355__$2,temp__5735__auto____$3,map__58352,map__58352__$1,block,uid__$1,parents,s__58339__$2,temp__5735__auto____$2,vec__58335,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58334,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58456 = (i__58356 + (1));
i__58356 = G__58456;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58357),athens$views$node_page$node_page_el_$_iter__58324_$_iter__58331_$_iter__58338_$_iter__58354(cljs.core.chunk_rest(s__58355__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58357),null);
}
} else {
var map__58360 = cljs.core.first(s__58355__$2);
var map__58360__$1 = (((((!((map__58360 == null))))?(((((map__58360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58360):map__58360);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58360__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58360__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58360__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58333,i__58326,map__58360,map__58360__$1,title__$1,string,uid__$2,s__58355__$2,temp__5735__auto____$3,map__58352,map__58352__$1,block,uid__$1,parents,s__58339__$2,temp__5735__auto____$2,vec__58335,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58334,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58333,i__58326,map__58360,map__58360__$1,title__$1,string,uid__$2,s__58355__$2,temp__5735__auto____$3,map__58352,map__58352__$1,block,uid__$1,parents,s__58339__$2,temp__5735__auto____$2,vec__58335,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58334,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58324_$_iter__58331_$_iter__58338_$_iter__58354(cljs.core.rest(s__58355__$2)));
}
} else {
return null;
}
break;
}
});})(i__58333,i__58326,map__58352,map__58352__$1,block,uid__$1,parents,s__58339__$2,temp__5735__auto____$2,vec__58335,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58334,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
,null,null));
});})(i__58333,i__58326,map__58352,map__58352__$1,block,uid__$1,parents,s__58339__$2,temp__5735__auto____$2,vec__58335,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58334,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58324_$_iter__58331_$_iter__58338(cljs.core.rest(s__58339__$2)));
}
} else {
return null;
}
break;
}
});})(i__58333,i__58326,vec__58335,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58334,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
,null,null));
});})(i__58333,i__58326,vec__58335,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58334,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58457 = (i__58333 + (1));
i__58333 = G__58457;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58334),athens$views$node_page$node_page_el_$_iter__58324_$_iter__58331(cljs.core.chunk_rest(s__58332__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58334),null);
}
} else {
var vec__58362 = cljs.core.first(s__58332__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58362,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58362,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58326,vec__58362,group_title,group,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58326,vec__58362,group_title,group,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58326,vec__58362,group_title,group,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58324_$_iter__58331_$_iter__58365(s__58366){
return (new cljs.core.LazySeq(null,((function (i__58326,vec__58362,group_title,group,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function (){
var s__58366__$1 = s__58366;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58366__$1);
if(temp__5735__auto____$2){
var s__58366__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58366__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58366__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58368 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58367 = (0);
while(true){
if((i__58367 < size__4581__auto____$1)){
var map__58369 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58367);
var map__58369__$1 = (((((!((map__58369 == null))))?(((((map__58369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58369):map__58369);
var block = map__58369__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58369__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58369__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58368,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58367,i__58326,map__58369,map__58369__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58368,s__58366__$2,temp__5735__auto____$2,vec__58362,group_title,group,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58324_$_iter__58331_$_iter__58365_$_iter__58371(s__58372){
return (new cljs.core.LazySeq(null,((function (i__58367,i__58326,map__58369,map__58369__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58368,s__58366__$2,temp__5735__auto____$2,vec__58362,group_title,group,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function (){
var s__58372__$1 = s__58372;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58372__$1);
if(temp__5735__auto____$3){
var s__58372__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58372__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58372__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58374 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58373 = (0);
while(true){
if((i__58373 < size__4581__auto____$2)){
var map__58375 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58373);
var map__58375__$1 = (((((!((map__58375 == null))))?(((((map__58375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58375):map__58375);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58375__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58375__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58375__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58374,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58373,i__58367,i__58326,map__58375,map__58375__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58374,s__58372__$2,temp__5735__auto____$3,map__58369,map__58369__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58368,s__58366__$2,temp__5735__auto____$2,vec__58362,group_title,group,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58373,i__58367,i__58326,map__58375,map__58375__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58374,s__58372__$2,temp__5735__auto____$3,map__58369,map__58369__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58368,s__58366__$2,temp__5735__auto____$2,vec__58362,group_title,group,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58458 = (i__58373 + (1));
i__58373 = G__58458;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58374),athens$views$node_page$node_page_el_$_iter__58324_$_iter__58331_$_iter__58365_$_iter__58371(cljs.core.chunk_rest(s__58372__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58374),null);
}
} else {
var map__58377 = cljs.core.first(s__58372__$2);
var map__58377__$1 = (((((!((map__58377 == null))))?(((((map__58377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58377):map__58377);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58377__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58377__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58377__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58367,i__58326,map__58377,map__58377__$1,title__$1,string,uid__$2,s__58372__$2,temp__5735__auto____$3,map__58369,map__58369__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58368,s__58366__$2,temp__5735__auto____$2,vec__58362,group_title,group,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58367,i__58326,map__58377,map__58377__$1,title__$1,string,uid__$2,s__58372__$2,temp__5735__auto____$3,map__58369,map__58369__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58368,s__58366__$2,temp__5735__auto____$2,vec__58362,group_title,group,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58324_$_iter__58331_$_iter__58365_$_iter__58371(cljs.core.rest(s__58372__$2)));
}
} else {
return null;
}
break;
}
});})(i__58367,i__58326,map__58369,map__58369__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58368,s__58366__$2,temp__5735__auto____$2,vec__58362,group_title,group,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
,null,null));
});})(i__58367,i__58326,map__58369,map__58369__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58368,s__58366__$2,temp__5735__auto____$2,vec__58362,group_title,group,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58459 = (i__58367 + (1));
i__58367 = G__58459;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58368),athens$views$node_page$node_page_el_$_iter__58324_$_iter__58331_$_iter__58365(cljs.core.chunk_rest(s__58366__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58368),null);
}
} else {
var map__58379 = cljs.core.first(s__58366__$2);
var map__58379__$1 = (((((!((map__58379 == null))))?(((((map__58379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58379):map__58379);
var block = map__58379__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58379__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58379__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58326,map__58379,map__58379__$1,block,uid__$1,parents,s__58366__$2,temp__5735__auto____$2,vec__58362,group_title,group,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58324_$_iter__58331_$_iter__58365_$_iter__58381(s__58382){
return (new cljs.core.LazySeq(null,((function (i__58326,map__58379,map__58379__$1,block,uid__$1,parents,s__58366__$2,temp__5735__auto____$2,vec__58362,group_title,group,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function (){
var s__58382__$1 = s__58382;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58382__$1);
if(temp__5735__auto____$3){
var s__58382__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58382__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58382__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58384 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58383 = (0);
while(true){
if((i__58383 < size__4581__auto____$1)){
var map__58385 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58383);
var map__58385__$1 = (((((!((map__58385 == null))))?(((((map__58385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58385):map__58385);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58385__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58385__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58385__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58384,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58383,i__58326,map__58385,map__58385__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58384,s__58382__$2,temp__5735__auto____$3,map__58379,map__58379__$1,block,uid__$1,parents,s__58366__$2,temp__5735__auto____$2,vec__58362,group_title,group,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58383,i__58326,map__58385,map__58385__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58384,s__58382__$2,temp__5735__auto____$3,map__58379,map__58379__$1,block,uid__$1,parents,s__58366__$2,temp__5735__auto____$2,vec__58362,group_title,group,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58460 = (i__58383 + (1));
i__58383 = G__58460;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58384),athens$views$node_page$node_page_el_$_iter__58324_$_iter__58331_$_iter__58365_$_iter__58381(cljs.core.chunk_rest(s__58382__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58384),null);
}
} else {
var map__58387 = cljs.core.first(s__58382__$2);
var map__58387__$1 = (((((!((map__58387 == null))))?(((((map__58387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58387):map__58387);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58387__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58387__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58387__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58326,map__58387,map__58387__$1,title__$1,string,uid__$2,s__58382__$2,temp__5735__auto____$3,map__58379,map__58379__$1,block,uid__$1,parents,s__58366__$2,temp__5735__auto____$2,vec__58362,group_title,group,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58326,map__58387,map__58387__$1,title__$1,string,uid__$2,s__58382__$2,temp__5735__auto____$3,map__58379,map__58379__$1,block,uid__$1,parents,s__58366__$2,temp__5735__auto____$2,vec__58362,group_title,group,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58324_$_iter__58331_$_iter__58365_$_iter__58381(cljs.core.rest(s__58382__$2)));
}
} else {
return null;
}
break;
}
});})(i__58326,map__58379,map__58379__$1,block,uid__$1,parents,s__58366__$2,temp__5735__auto____$2,vec__58362,group_title,group,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
,null,null));
});})(i__58326,map__58379,map__58379__$1,block,uid__$1,parents,s__58366__$2,temp__5735__auto____$2,vec__58362,group_title,group,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58324_$_iter__58331_$_iter__58365(cljs.core.rest(s__58366__$2)));
}
} else {
return null;
}
break;
}
});})(i__58326,vec__58362,group_title,group,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
,null,null));
});})(i__58326,vec__58362,group_title,group,s__58332__$2,temp__5735__auto____$1,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__58324_$_iter__58331(cljs.core.rest(s__58332__$2)));
}
} else {
return null;
}
break;
}
});})(i__58326,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
,null,null));
});})(i__58326,vec__58328,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58327,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null));

var G__58461 = (i__58326 + (1));
i__58326 = G__58461;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58327),athens$views$node_page$node_page_el_$_iter__58324(cljs.core.chunk_rest(s__58325__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58327),null);
}
} else {
var vec__58389 = cljs.core.first(s__58325__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58389,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58389,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (vec__58389,linked_or_unlinked,refs,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58324_$_iter__58392(s__58393){
return (new cljs.core.LazySeq(null,(function (){
var s__58393__$1 = s__58393;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58393__$1);
if(temp__5735__auto____$1){
var s__58393__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58393__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58393__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58395 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58394 = (0);
while(true){
if((i__58394 < size__4581__auto__)){
var vec__58396 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58394);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58396,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58396,(1),null);
cljs.core.chunk_append(b__58395,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58394,vec__58396,group_title,group,c__4580__auto__,size__4581__auto__,b__58395,s__58393__$2,temp__5735__auto____$1,vec__58389,linked_or_unlinked,refs,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58394,vec__58396,group_title,group,c__4580__auto__,size__4581__auto__,b__58395,s__58393__$2,temp__5735__auto____$1,vec__58389,linked_or_unlinked,refs,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58394,vec__58396,group_title,group,c__4580__auto__,size__4581__auto__,b__58395,s__58393__$2,temp__5735__auto____$1,vec__58389,linked_or_unlinked,refs,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58324_$_iter__58392_$_iter__58399(s__58400){
return (new cljs.core.LazySeq(null,((function (i__58394,vec__58396,group_title,group,c__4580__auto__,size__4581__auto__,b__58395,s__58393__$2,temp__5735__auto____$1,vec__58389,linked_or_unlinked,refs,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function (){
var s__58400__$1 = s__58400;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58400__$1);
if(temp__5735__auto____$2){
var s__58400__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58400__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58400__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58402 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58401 = (0);
while(true){
if((i__58401 < size__4581__auto____$1)){
var map__58403 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58401);
var map__58403__$1 = (((((!((map__58403 == null))))?(((((map__58403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58403):map__58403);
var block = map__58403__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58403__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58403__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58402,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58401,i__58394,map__58403,map__58403__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58402,s__58400__$2,temp__5735__auto____$2,vec__58396,group_title,group,c__4580__auto__,size__4581__auto__,b__58395,s__58393__$2,temp__5735__auto____$1,vec__58389,linked_or_unlinked,refs,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58324_$_iter__58392_$_iter__58399_$_iter__58405(s__58406){
return (new cljs.core.LazySeq(null,((function (i__58401,i__58394,map__58403,map__58403__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58402,s__58400__$2,temp__5735__auto____$2,vec__58396,group_title,group,c__4580__auto__,size__4581__auto__,b__58395,s__58393__$2,temp__5735__auto____$1,vec__58389,linked_or_unlinked,refs,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function (){
var s__58406__$1 = s__58406;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58406__$1);
if(temp__5735__auto____$3){
var s__58406__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58406__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58406__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58408 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58407 = (0);
while(true){
if((i__58407 < size__4581__auto____$2)){
var map__58409 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58407);
var map__58409__$1 = (((((!((map__58409 == null))))?(((((map__58409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58409):map__58409);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58409__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58409__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58409__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58408,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58407,i__58401,i__58394,map__58409,map__58409__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58408,s__58406__$2,temp__5735__auto____$3,map__58403,map__58403__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58402,s__58400__$2,temp__5735__auto____$2,vec__58396,group_title,group,c__4580__auto__,size__4581__auto__,b__58395,s__58393__$2,temp__5735__auto____$1,vec__58389,linked_or_unlinked,refs,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58407,i__58401,i__58394,map__58409,map__58409__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58408,s__58406__$2,temp__5735__auto____$3,map__58403,map__58403__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58402,s__58400__$2,temp__5735__auto____$2,vec__58396,group_title,group,c__4580__auto__,size__4581__auto__,b__58395,s__58393__$2,temp__5735__auto____$1,vec__58389,linked_or_unlinked,refs,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58462 = (i__58407 + (1));
i__58407 = G__58462;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58408),athens$views$node_page$node_page_el_$_iter__58324_$_iter__58392_$_iter__58399_$_iter__58405(cljs.core.chunk_rest(s__58406__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58408),null);
}
} else {
var map__58411 = cljs.core.first(s__58406__$2);
var map__58411__$1 = (((((!((map__58411 == null))))?(((((map__58411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58411):map__58411);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58411__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58411__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58411__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58401,i__58394,map__58411,map__58411__$1,title__$1,string,uid__$2,s__58406__$2,temp__5735__auto____$3,map__58403,map__58403__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58402,s__58400__$2,temp__5735__auto____$2,vec__58396,group_title,group,c__4580__auto__,size__4581__auto__,b__58395,s__58393__$2,temp__5735__auto____$1,vec__58389,linked_or_unlinked,refs,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58401,i__58394,map__58411,map__58411__$1,title__$1,string,uid__$2,s__58406__$2,temp__5735__auto____$3,map__58403,map__58403__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58402,s__58400__$2,temp__5735__auto____$2,vec__58396,group_title,group,c__4580__auto__,size__4581__auto__,b__58395,s__58393__$2,temp__5735__auto____$1,vec__58389,linked_or_unlinked,refs,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58324_$_iter__58392_$_iter__58399_$_iter__58405(cljs.core.rest(s__58406__$2)));
}
} else {
return null;
}
break;
}
});})(i__58401,i__58394,map__58403,map__58403__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58402,s__58400__$2,temp__5735__auto____$2,vec__58396,group_title,group,c__4580__auto__,size__4581__auto__,b__58395,s__58393__$2,temp__5735__auto____$1,vec__58389,linked_or_unlinked,refs,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
,null,null));
});})(i__58401,i__58394,map__58403,map__58403__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58402,s__58400__$2,temp__5735__auto____$2,vec__58396,group_title,group,c__4580__auto__,size__4581__auto__,b__58395,s__58393__$2,temp__5735__auto____$1,vec__58389,linked_or_unlinked,refs,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58463 = (i__58401 + (1));
i__58401 = G__58463;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58402),athens$views$node_page$node_page_el_$_iter__58324_$_iter__58392_$_iter__58399(cljs.core.chunk_rest(s__58400__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58402),null);
}
} else {
var map__58413 = cljs.core.first(s__58400__$2);
var map__58413__$1 = (((((!((map__58413 == null))))?(((((map__58413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58413):map__58413);
var block = map__58413__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58413__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58413__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58394,map__58413,map__58413__$1,block,uid__$1,parents,s__58400__$2,temp__5735__auto____$2,vec__58396,group_title,group,c__4580__auto__,size__4581__auto__,b__58395,s__58393__$2,temp__5735__auto____$1,vec__58389,linked_or_unlinked,refs,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58324_$_iter__58392_$_iter__58399_$_iter__58415(s__58416){
return (new cljs.core.LazySeq(null,((function (i__58394,map__58413,map__58413__$1,block,uid__$1,parents,s__58400__$2,temp__5735__auto____$2,vec__58396,group_title,group,c__4580__auto__,size__4581__auto__,b__58395,s__58393__$2,temp__5735__auto____$1,vec__58389,linked_or_unlinked,refs,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function (){
var s__58416__$1 = s__58416;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58416__$1);
if(temp__5735__auto____$3){
var s__58416__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58416__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58416__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58418 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58417 = (0);
while(true){
if((i__58417 < size__4581__auto____$1)){
var map__58419 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58417);
var map__58419__$1 = (((((!((map__58419 == null))))?(((((map__58419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58419):map__58419);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58419__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58419__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58419__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58418,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58417,i__58394,map__58419,map__58419__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58418,s__58416__$2,temp__5735__auto____$3,map__58413,map__58413__$1,block,uid__$1,parents,s__58400__$2,temp__5735__auto____$2,vec__58396,group_title,group,c__4580__auto__,size__4581__auto__,b__58395,s__58393__$2,temp__5735__auto____$1,vec__58389,linked_or_unlinked,refs,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58417,i__58394,map__58419,map__58419__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58418,s__58416__$2,temp__5735__auto____$3,map__58413,map__58413__$1,block,uid__$1,parents,s__58400__$2,temp__5735__auto____$2,vec__58396,group_title,group,c__4580__auto__,size__4581__auto__,b__58395,s__58393__$2,temp__5735__auto____$1,vec__58389,linked_or_unlinked,refs,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58464 = (i__58417 + (1));
i__58417 = G__58464;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58418),athens$views$node_page$node_page_el_$_iter__58324_$_iter__58392_$_iter__58399_$_iter__58415(cljs.core.chunk_rest(s__58416__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58418),null);
}
} else {
var map__58421 = cljs.core.first(s__58416__$2);
var map__58421__$1 = (((((!((map__58421 == null))))?(((((map__58421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58421):map__58421);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58421__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58421__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58421__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58394,map__58421,map__58421__$1,title__$1,string,uid__$2,s__58416__$2,temp__5735__auto____$3,map__58413,map__58413__$1,block,uid__$1,parents,s__58400__$2,temp__5735__auto____$2,vec__58396,group_title,group,c__4580__auto__,size__4581__auto__,b__58395,s__58393__$2,temp__5735__auto____$1,vec__58389,linked_or_unlinked,refs,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58394,map__58421,map__58421__$1,title__$1,string,uid__$2,s__58416__$2,temp__5735__auto____$3,map__58413,map__58413__$1,block,uid__$1,parents,s__58400__$2,temp__5735__auto____$2,vec__58396,group_title,group,c__4580__auto__,size__4581__auto__,b__58395,s__58393__$2,temp__5735__auto____$1,vec__58389,linked_or_unlinked,refs,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58324_$_iter__58392_$_iter__58399_$_iter__58415(cljs.core.rest(s__58416__$2)));
}
} else {
return null;
}
break;
}
});})(i__58394,map__58413,map__58413__$1,block,uid__$1,parents,s__58400__$2,temp__5735__auto____$2,vec__58396,group_title,group,c__4580__auto__,size__4581__auto__,b__58395,s__58393__$2,temp__5735__auto____$1,vec__58389,linked_or_unlinked,refs,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
,null,null));
});})(i__58394,map__58413,map__58413__$1,block,uid__$1,parents,s__58400__$2,temp__5735__auto____$2,vec__58396,group_title,group,c__4580__auto__,size__4581__auto__,b__58395,s__58393__$2,temp__5735__auto____$1,vec__58389,linked_or_unlinked,refs,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58324_$_iter__58392_$_iter__58399(cljs.core.rest(s__58400__$2)));
}
} else {
return null;
}
break;
}
});})(i__58394,vec__58396,group_title,group,c__4580__auto__,size__4581__auto__,b__58395,s__58393__$2,temp__5735__auto____$1,vec__58389,linked_or_unlinked,refs,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
,null,null));
});})(i__58394,vec__58396,group_title,group,c__4580__auto__,size__4581__auto__,b__58395,s__58393__$2,temp__5735__auto____$1,vec__58389,linked_or_unlinked,refs,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58465 = (i__58394 + (1));
i__58394 = G__58465;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58395),athens$views$node_page$node_page_el_$_iter__58324_$_iter__58392(cljs.core.chunk_rest(s__58393__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58395),null);
}
} else {
var vec__58423 = cljs.core.first(s__58393__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58423,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58423,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58423,group_title,group,s__58393__$2,temp__5735__auto____$1,vec__58389,linked_or_unlinked,refs,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__58423,group_title,group,s__58393__$2,temp__5735__auto____$1,vec__58389,linked_or_unlinked,refs,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (vec__58423,group_title,group,s__58393__$2,temp__5735__auto____$1,vec__58389,linked_or_unlinked,refs,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58324_$_iter__58392_$_iter__58426(s__58427){
return (new cljs.core.LazySeq(null,(function (){
var s__58427__$1 = s__58427;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58427__$1);
if(temp__5735__auto____$2){
var s__58427__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58427__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58427__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58429 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58428 = (0);
while(true){
if((i__58428 < size__4581__auto__)){
var map__58430 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58428);
var map__58430__$1 = (((((!((map__58430 == null))))?(((((map__58430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58430):map__58430);
var block = map__58430__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58430__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58430__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58429,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58428,map__58430,map__58430__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58429,s__58427__$2,temp__5735__auto____$2,vec__58423,group_title,group,s__58393__$2,temp__5735__auto____$1,vec__58389,linked_or_unlinked,refs,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58324_$_iter__58392_$_iter__58426_$_iter__58432(s__58433){
return (new cljs.core.LazySeq(null,((function (i__58428,map__58430,map__58430__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58429,s__58427__$2,temp__5735__auto____$2,vec__58423,group_title,group,s__58393__$2,temp__5735__auto____$1,vec__58389,linked_or_unlinked,refs,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function (){
var s__58433__$1 = s__58433;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58433__$1);
if(temp__5735__auto____$3){
var s__58433__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58433__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58433__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58435 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58434 = (0);
while(true){
if((i__58434 < size__4581__auto____$1)){
var map__58436 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58434);
var map__58436__$1 = (((((!((map__58436 == null))))?(((((map__58436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58436):map__58436);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58436__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58436__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58436__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58435,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58434,i__58428,map__58436,map__58436__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58435,s__58433__$2,temp__5735__auto____$3,map__58430,map__58430__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58429,s__58427__$2,temp__5735__auto____$2,vec__58423,group_title,group,s__58393__$2,temp__5735__auto____$1,vec__58389,linked_or_unlinked,refs,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58434,i__58428,map__58436,map__58436__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58435,s__58433__$2,temp__5735__auto____$3,map__58430,map__58430__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58429,s__58427__$2,temp__5735__auto____$2,vec__58423,group_title,group,s__58393__$2,temp__5735__auto____$1,vec__58389,linked_or_unlinked,refs,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58466 = (i__58434 + (1));
i__58434 = G__58466;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58435),athens$views$node_page$node_page_el_$_iter__58324_$_iter__58392_$_iter__58426_$_iter__58432(cljs.core.chunk_rest(s__58433__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58435),null);
}
} else {
var map__58438 = cljs.core.first(s__58433__$2);
var map__58438__$1 = (((((!((map__58438 == null))))?(((((map__58438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58438):map__58438);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58438__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58438__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58438__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58428,map__58438,map__58438__$1,title__$1,string,uid__$2,s__58433__$2,temp__5735__auto____$3,map__58430,map__58430__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58429,s__58427__$2,temp__5735__auto____$2,vec__58423,group_title,group,s__58393__$2,temp__5735__auto____$1,vec__58389,linked_or_unlinked,refs,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58428,map__58438,map__58438__$1,title__$1,string,uid__$2,s__58433__$2,temp__5735__auto____$3,map__58430,map__58430__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58429,s__58427__$2,temp__5735__auto____$2,vec__58423,group_title,group,s__58393__$2,temp__5735__auto____$1,vec__58389,linked_or_unlinked,refs,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58324_$_iter__58392_$_iter__58426_$_iter__58432(cljs.core.rest(s__58433__$2)));
}
} else {
return null;
}
break;
}
});})(i__58428,map__58430,map__58430__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58429,s__58427__$2,temp__5735__auto____$2,vec__58423,group_title,group,s__58393__$2,temp__5735__auto____$1,vec__58389,linked_or_unlinked,refs,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
,null,null));
});})(i__58428,map__58430,map__58430__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58429,s__58427__$2,temp__5735__auto____$2,vec__58423,group_title,group,s__58393__$2,temp__5735__auto____$1,vec__58389,linked_or_unlinked,refs,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58467 = (i__58428 + (1));
i__58428 = G__58467;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58429),athens$views$node_page$node_page_el_$_iter__58324_$_iter__58392_$_iter__58426(cljs.core.chunk_rest(s__58427__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58429),null);
}
} else {
var map__58440 = cljs.core.first(s__58427__$2);
var map__58440__$1 = (((((!((map__58440 == null))))?(((((map__58440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58440):map__58440);
var block = map__58440__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58440__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58440__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (map__58440,map__58440__$1,block,uid__$1,parents,s__58427__$2,temp__5735__auto____$2,vec__58423,group_title,group,s__58393__$2,temp__5735__auto____$1,vec__58389,linked_or_unlinked,refs,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58324_$_iter__58392_$_iter__58426_$_iter__58442(s__58443){
return (new cljs.core.LazySeq(null,(function (){
var s__58443__$1 = s__58443;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58443__$1);
if(temp__5735__auto____$3){
var s__58443__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58443__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58443__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58445 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58444 = (0);
while(true){
if((i__58444 < size__4581__auto__)){
var map__58446 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58444);
var map__58446__$1 = (((((!((map__58446 == null))))?(((((map__58446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58446):map__58446);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58446__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58446__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58446__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58445,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58444,map__58446,map__58446__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58445,s__58443__$2,temp__5735__auto____$3,map__58440,map__58440__$1,block,uid__$1,parents,s__58427__$2,temp__5735__auto____$2,vec__58423,group_title,group,s__58393__$2,temp__5735__auto____$1,vec__58389,linked_or_unlinked,refs,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58444,map__58446,map__58446__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58445,s__58443__$2,temp__5735__auto____$3,map__58440,map__58440__$1,block,uid__$1,parents,s__58427__$2,temp__5735__auto____$2,vec__58423,group_title,group,s__58393__$2,temp__5735__auto____$1,vec__58389,linked_or_unlinked,refs,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58468 = (i__58444 + (1));
i__58444 = G__58468;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58445),athens$views$node_page$node_page_el_$_iter__58324_$_iter__58392_$_iter__58426_$_iter__58442(cljs.core.chunk_rest(s__58443__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58445),null);
}
} else {
var map__58448 = cljs.core.first(s__58443__$2);
var map__58448__$1 = (((((!((map__58448 == null))))?(((((map__58448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58448):map__58448);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58448__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58448__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58448__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__58448,map__58448__$1,title__$1,string,uid__$2,s__58443__$2,temp__5735__auto____$3,map__58440,map__58440__$1,block,uid__$1,parents,s__58427__$2,temp__5735__auto____$2,vec__58423,group_title,group,s__58393__$2,temp__5735__auto____$1,vec__58389,linked_or_unlinked,refs,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__58448,map__58448__$1,title__$1,string,uid__$2,s__58443__$2,temp__5735__auto____$3,map__58440,map__58440__$1,block,uid__$1,parents,s__58427__$2,temp__5735__auto____$2,vec__58423,group_title,group,s__58393__$2,temp__5735__auto____$1,vec__58389,linked_or_unlinked,refs,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58324_$_iter__58392_$_iter__58426_$_iter__58442(cljs.core.rest(s__58443__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58440,map__58440__$1,block,uid__$1,parents,s__58427__$2,temp__5735__auto____$2,vec__58423,group_title,group,s__58393__$2,temp__5735__auto____$1,vec__58389,linked_or_unlinked,refs,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58324_$_iter__58392_$_iter__58426(cljs.core.rest(s__58427__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58423,group_title,group,s__58393__$2,temp__5735__auto____$1,vec__58389,linked_or_unlinked,refs,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__58324_$_iter__58392(cljs.core.rest(s__58393__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58389,linked_or_unlinked,refs,s__58325__$2,temp__5735__auto__,map__58312,map__58312__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null),athens$views$node_page$node_page_el_$_iter__58324(cljs.core.rest(s__58325__$2)));
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
var map__58450 = athens.db.get_node_document(ident);
var map__58450__$1 = (((((!((map__58450 == null))))?(((((map__58450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58450):map__58450);
var node = map__58450__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58450__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58450__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__58452 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58452) : re_frame.core.subscribe.call(null,G__58452));
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
