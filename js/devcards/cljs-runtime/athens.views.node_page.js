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
athens.views.node_page.references_group_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527),new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971)),new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 0.5rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.5em 0"], null);
athens.views.node_page.reference_breadcrumbs_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem calc(2rem - 0.5em)"], null);
athens.views.node_page.references_group_block_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px solid ",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527))], null)], null),new cljs.core.Keyword(null,"padding-block-start","padding-block-start",1054404612),"1em",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"1em",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:first-of-type","&:first-of-type",1836617087),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"0",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"0"], null)], null)], null)], null);
athens.views.node_page.handler = (function athens$views$node_page$handler(val,uid){
var G__58178 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58178) : re_frame.core.dispatch.call(null,G__58178));
});
athens.views.node_page.db_handler = goog.functions.debounce(athens.views.node_page.handler,(500));
athens.views.node_page.get_ref_ids = (function athens$views$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__58179 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__58180 = athens.db.dsdb;
var G__58181 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__58179,G__58180,G__58181) : posh.reagent.q.call(null,G__58179,G__58180,G__58181));
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
return cljs.core.boolean$((function (){try{var vec__58183 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58183,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58183,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58183,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e58182){if((e58182 instanceof Object)){
var _ = e58182;
return false;
} else {
throw e58182;

}
}})());
});
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(p__58186,editing_uid,ref_groups,timeline_page_QMARK_){
var map__58187 = p__58186;
var map__58187__$1 = (((((!((map__58187 == null))))?(((((map__58187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58187):map__58187);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58187__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58187__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58187__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.page_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58189 = e.target.value;
var G__58190 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58189,G__58190) : athens.views.node_page.db_handler.call(null,G__58189,G__58190));
})], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58191(s__58192){
return (new cljs.core.LazySeq(null,(function (){
var s__58192__$1 = s__58192;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58192__$1);
if(temp__5735__auto__){
var s__58192__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58192__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58192__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58194 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58193 = (0);
while(true){
if((i__58193 < size__4581__auto__)){
var map__58195 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58193);
var map__58195__$1 = (((((!((map__58195 == null))))?(((((map__58195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58195):map__58195);
var child = map__58195__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58195__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58194,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58328 = (i__58193 + (1));
i__58193 = G__58328;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58194),athens$views$node_page$node_page_el_$_iter__58191(cljs.core.chunk_rest(s__58192__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58194),null);
}
} else {
var map__58197 = cljs.core.first(s__58192__$2);
var map__58197__$1 = (((((!((map__58197 == null))))?(((((map__58197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58197):map__58197);
var child = map__58197__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58197__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__58191(cljs.core.rest(s__58192__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58199(s__58200){
return (new cljs.core.LazySeq(null,(function (){
var s__58200__$1 = s__58200;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58200__$1);
if(temp__5735__auto__){
var s__58200__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58200__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58200__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58202 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58201 = (0);
while(true){
if((i__58201 < size__4581__auto__)){
var vec__58203 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58201);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58203,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58203,(1),null);
cljs.core.chunk_append(b__58202,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (i__58201,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58199_$_iter__58206(s__58207){
return (new cljs.core.LazySeq(null,((function (i__58201,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function (){
var s__58207__$1 = s__58207;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58207__$1);
if(temp__5735__auto____$1){
var s__58207__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58207__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58207__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58209 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58208 = (0);
while(true){
if((i__58208 < size__4581__auto____$1)){
var vec__58210 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58208);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58210,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58210,(1),null);
cljs.core.chunk_append(b__58209,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58208,i__58201,vec__58210,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58209,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58208,i__58201,vec__58210,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58209,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58208,i__58201,vec__58210,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58209,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58199_$_iter__58206_$_iter__58213(s__58214){
return (new cljs.core.LazySeq(null,((function (i__58208,i__58201,vec__58210,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58209,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function (){
var s__58214__$1 = s__58214;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58214__$1);
if(temp__5735__auto____$2){
var s__58214__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58214__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58214__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58216 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58215 = (0);
while(true){
if((i__58215 < size__4581__auto____$2)){
var map__58217 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58215);
var map__58217__$1 = (((((!((map__58217 == null))))?(((((map__58217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58217):map__58217);
var block = map__58217__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58217__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58217__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58216,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58215,i__58208,i__58201,map__58217,map__58217__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58216,s__58214__$2,temp__5735__auto____$2,vec__58210,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58209,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58199_$_iter__58206_$_iter__58213_$_iter__58219(s__58220){
return (new cljs.core.LazySeq(null,((function (i__58215,i__58208,i__58201,map__58217,map__58217__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58216,s__58214__$2,temp__5735__auto____$2,vec__58210,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58209,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function (){
var s__58220__$1 = s__58220;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58220__$1);
if(temp__5735__auto____$3){
var s__58220__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58220__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58220__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58222 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58221 = (0);
while(true){
if((i__58221 < size__4581__auto____$3)){
var map__58223 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58221);
var map__58223__$1 = (((((!((map__58223 == null))))?(((((map__58223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58223):map__58223);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58223__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58223__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58223__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58222,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58221,i__58215,i__58208,i__58201,map__58223,map__58223__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58222,s__58220__$2,temp__5735__auto____$3,map__58217,map__58217__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58216,s__58214__$2,temp__5735__auto____$2,vec__58210,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58209,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58221,i__58215,i__58208,i__58201,map__58223,map__58223__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58222,s__58220__$2,temp__5735__auto____$3,map__58217,map__58217__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58216,s__58214__$2,temp__5735__auto____$2,vec__58210,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58209,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58329 = (i__58221 + (1));
i__58221 = G__58329;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58222),athens$views$node_page$node_page_el_$_iter__58199_$_iter__58206_$_iter__58213_$_iter__58219(cljs.core.chunk_rest(s__58220__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58222),null);
}
} else {
var map__58225 = cljs.core.first(s__58220__$2);
var map__58225__$1 = (((((!((map__58225 == null))))?(((((map__58225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58225):map__58225);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58225__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58225__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58225__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58215,i__58208,i__58201,map__58225,map__58225__$1,title__$1,string,uid__$2,s__58220__$2,temp__5735__auto____$3,map__58217,map__58217__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58216,s__58214__$2,temp__5735__auto____$2,vec__58210,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58209,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58215,i__58208,i__58201,map__58225,map__58225__$1,title__$1,string,uid__$2,s__58220__$2,temp__5735__auto____$3,map__58217,map__58217__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58216,s__58214__$2,temp__5735__auto____$2,vec__58210,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58209,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58199_$_iter__58206_$_iter__58213_$_iter__58219(cljs.core.rest(s__58220__$2)));
}
} else {
return null;
}
break;
}
});})(i__58215,i__58208,i__58201,map__58217,map__58217__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58216,s__58214__$2,temp__5735__auto____$2,vec__58210,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58209,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
,null,null));
});})(i__58215,i__58208,i__58201,map__58217,map__58217__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58216,s__58214__$2,temp__5735__auto____$2,vec__58210,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58209,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58330 = (i__58215 + (1));
i__58215 = G__58330;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58216),athens$views$node_page$node_page_el_$_iter__58199_$_iter__58206_$_iter__58213(cljs.core.chunk_rest(s__58214__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58216),null);
}
} else {
var map__58227 = cljs.core.first(s__58214__$2);
var map__58227__$1 = (((((!((map__58227 == null))))?(((((map__58227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58227):map__58227);
var block = map__58227__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58227__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58227__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58208,i__58201,map__58227,map__58227__$1,block,uid__$1,parents,s__58214__$2,temp__5735__auto____$2,vec__58210,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58209,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58199_$_iter__58206_$_iter__58213_$_iter__58229(s__58230){
return (new cljs.core.LazySeq(null,((function (i__58208,i__58201,map__58227,map__58227__$1,block,uid__$1,parents,s__58214__$2,temp__5735__auto____$2,vec__58210,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58209,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function (){
var s__58230__$1 = s__58230;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58230__$1);
if(temp__5735__auto____$3){
var s__58230__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58230__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58230__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58232 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58231 = (0);
while(true){
if((i__58231 < size__4581__auto____$2)){
var map__58233 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58231);
var map__58233__$1 = (((((!((map__58233 == null))))?(((((map__58233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58233):map__58233);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58233__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58233__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58233__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58232,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58231,i__58208,i__58201,map__58233,map__58233__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58232,s__58230__$2,temp__5735__auto____$3,map__58227,map__58227__$1,block,uid__$1,parents,s__58214__$2,temp__5735__auto____$2,vec__58210,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58209,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58231,i__58208,i__58201,map__58233,map__58233__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58232,s__58230__$2,temp__5735__auto____$3,map__58227,map__58227__$1,block,uid__$1,parents,s__58214__$2,temp__5735__auto____$2,vec__58210,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58209,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58331 = (i__58231 + (1));
i__58231 = G__58331;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58232),athens$views$node_page$node_page_el_$_iter__58199_$_iter__58206_$_iter__58213_$_iter__58229(cljs.core.chunk_rest(s__58230__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58232),null);
}
} else {
var map__58235 = cljs.core.first(s__58230__$2);
var map__58235__$1 = (((((!((map__58235 == null))))?(((((map__58235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58235):map__58235);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58235__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58235__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58235__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58208,i__58201,map__58235,map__58235__$1,title__$1,string,uid__$2,s__58230__$2,temp__5735__auto____$3,map__58227,map__58227__$1,block,uid__$1,parents,s__58214__$2,temp__5735__auto____$2,vec__58210,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58209,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58208,i__58201,map__58235,map__58235__$1,title__$1,string,uid__$2,s__58230__$2,temp__5735__auto____$3,map__58227,map__58227__$1,block,uid__$1,parents,s__58214__$2,temp__5735__auto____$2,vec__58210,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58209,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58199_$_iter__58206_$_iter__58213_$_iter__58229(cljs.core.rest(s__58230__$2)));
}
} else {
return null;
}
break;
}
});})(i__58208,i__58201,map__58227,map__58227__$1,block,uid__$1,parents,s__58214__$2,temp__5735__auto____$2,vec__58210,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58209,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
,null,null));
});})(i__58208,i__58201,map__58227,map__58227__$1,block,uid__$1,parents,s__58214__$2,temp__5735__auto____$2,vec__58210,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58209,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58199_$_iter__58206_$_iter__58213(cljs.core.rest(s__58214__$2)));
}
} else {
return null;
}
break;
}
});})(i__58208,i__58201,vec__58210,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58209,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
,null,null));
});})(i__58208,i__58201,vec__58210,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58209,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58332 = (i__58208 + (1));
i__58208 = G__58332;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58209),athens$views$node_page$node_page_el_$_iter__58199_$_iter__58206(cljs.core.chunk_rest(s__58207__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58209),null);
}
} else {
var vec__58237 = cljs.core.first(s__58207__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58237,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58237,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58201,vec__58237,group_title,group,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58201,vec__58237,group_title,group,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58201,vec__58237,group_title,group,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58199_$_iter__58206_$_iter__58240(s__58241){
return (new cljs.core.LazySeq(null,((function (i__58201,vec__58237,group_title,group,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function (){
var s__58241__$1 = s__58241;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58241__$1);
if(temp__5735__auto____$2){
var s__58241__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58241__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58241__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58243 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58242 = (0);
while(true){
if((i__58242 < size__4581__auto____$1)){
var map__58244 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58242);
var map__58244__$1 = (((((!((map__58244 == null))))?(((((map__58244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58244):map__58244);
var block = map__58244__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58244__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58244__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58243,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58242,i__58201,map__58244,map__58244__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58243,s__58241__$2,temp__5735__auto____$2,vec__58237,group_title,group,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58199_$_iter__58206_$_iter__58240_$_iter__58246(s__58247){
return (new cljs.core.LazySeq(null,((function (i__58242,i__58201,map__58244,map__58244__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58243,s__58241__$2,temp__5735__auto____$2,vec__58237,group_title,group,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function (){
var s__58247__$1 = s__58247;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58247__$1);
if(temp__5735__auto____$3){
var s__58247__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58247__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58247__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58249 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58248 = (0);
while(true){
if((i__58248 < size__4581__auto____$2)){
var map__58250 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58248);
var map__58250__$1 = (((((!((map__58250 == null))))?(((((map__58250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58250):map__58250);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58250__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58250__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58250__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58249,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58248,i__58242,i__58201,map__58250,map__58250__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58249,s__58247__$2,temp__5735__auto____$3,map__58244,map__58244__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58243,s__58241__$2,temp__5735__auto____$2,vec__58237,group_title,group,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58248,i__58242,i__58201,map__58250,map__58250__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58249,s__58247__$2,temp__5735__auto____$3,map__58244,map__58244__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58243,s__58241__$2,temp__5735__auto____$2,vec__58237,group_title,group,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58333 = (i__58248 + (1));
i__58248 = G__58333;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58249),athens$views$node_page$node_page_el_$_iter__58199_$_iter__58206_$_iter__58240_$_iter__58246(cljs.core.chunk_rest(s__58247__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58249),null);
}
} else {
var map__58252 = cljs.core.first(s__58247__$2);
var map__58252__$1 = (((((!((map__58252 == null))))?(((((map__58252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58252):map__58252);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58252__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58252__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58252__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58242,i__58201,map__58252,map__58252__$1,title__$1,string,uid__$2,s__58247__$2,temp__5735__auto____$3,map__58244,map__58244__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58243,s__58241__$2,temp__5735__auto____$2,vec__58237,group_title,group,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58242,i__58201,map__58252,map__58252__$1,title__$1,string,uid__$2,s__58247__$2,temp__5735__auto____$3,map__58244,map__58244__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58243,s__58241__$2,temp__5735__auto____$2,vec__58237,group_title,group,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58199_$_iter__58206_$_iter__58240_$_iter__58246(cljs.core.rest(s__58247__$2)));
}
} else {
return null;
}
break;
}
});})(i__58242,i__58201,map__58244,map__58244__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58243,s__58241__$2,temp__5735__auto____$2,vec__58237,group_title,group,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
,null,null));
});})(i__58242,i__58201,map__58244,map__58244__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58243,s__58241__$2,temp__5735__auto____$2,vec__58237,group_title,group,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58334 = (i__58242 + (1));
i__58242 = G__58334;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58243),athens$views$node_page$node_page_el_$_iter__58199_$_iter__58206_$_iter__58240(cljs.core.chunk_rest(s__58241__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58243),null);
}
} else {
var map__58254 = cljs.core.first(s__58241__$2);
var map__58254__$1 = (((((!((map__58254 == null))))?(((((map__58254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58254):map__58254);
var block = map__58254__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58254__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58254__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58201,map__58254,map__58254__$1,block,uid__$1,parents,s__58241__$2,temp__5735__auto____$2,vec__58237,group_title,group,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58199_$_iter__58206_$_iter__58240_$_iter__58256(s__58257){
return (new cljs.core.LazySeq(null,((function (i__58201,map__58254,map__58254__$1,block,uid__$1,parents,s__58241__$2,temp__5735__auto____$2,vec__58237,group_title,group,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function (){
var s__58257__$1 = s__58257;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58257__$1);
if(temp__5735__auto____$3){
var s__58257__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58257__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58257__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58259 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58258 = (0);
while(true){
if((i__58258 < size__4581__auto____$1)){
var map__58260 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58258);
var map__58260__$1 = (((((!((map__58260 == null))))?(((((map__58260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58260):map__58260);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58260__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58260__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58260__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58259,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58258,i__58201,map__58260,map__58260__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58259,s__58257__$2,temp__5735__auto____$3,map__58254,map__58254__$1,block,uid__$1,parents,s__58241__$2,temp__5735__auto____$2,vec__58237,group_title,group,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58258,i__58201,map__58260,map__58260__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58259,s__58257__$2,temp__5735__auto____$3,map__58254,map__58254__$1,block,uid__$1,parents,s__58241__$2,temp__5735__auto____$2,vec__58237,group_title,group,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58335 = (i__58258 + (1));
i__58258 = G__58335;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58259),athens$views$node_page$node_page_el_$_iter__58199_$_iter__58206_$_iter__58240_$_iter__58256(cljs.core.chunk_rest(s__58257__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58259),null);
}
} else {
var map__58262 = cljs.core.first(s__58257__$2);
var map__58262__$1 = (((((!((map__58262 == null))))?(((((map__58262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58262):map__58262);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58262__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58262__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58262__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58201,map__58262,map__58262__$1,title__$1,string,uid__$2,s__58257__$2,temp__5735__auto____$3,map__58254,map__58254__$1,block,uid__$1,parents,s__58241__$2,temp__5735__auto____$2,vec__58237,group_title,group,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58201,map__58262,map__58262__$1,title__$1,string,uid__$2,s__58257__$2,temp__5735__auto____$3,map__58254,map__58254__$1,block,uid__$1,parents,s__58241__$2,temp__5735__auto____$2,vec__58237,group_title,group,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58199_$_iter__58206_$_iter__58240_$_iter__58256(cljs.core.rest(s__58257__$2)));
}
} else {
return null;
}
break;
}
});})(i__58201,map__58254,map__58254__$1,block,uid__$1,parents,s__58241__$2,temp__5735__auto____$2,vec__58237,group_title,group,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
,null,null));
});})(i__58201,map__58254,map__58254__$1,block,uid__$1,parents,s__58241__$2,temp__5735__auto____$2,vec__58237,group_title,group,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58199_$_iter__58206_$_iter__58240(cljs.core.rest(s__58241__$2)));
}
} else {
return null;
}
break;
}
});})(i__58201,vec__58237,group_title,group,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
,null,null));
});})(i__58201,vec__58237,group_title,group,s__58207__$2,temp__5735__auto____$1,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__58199_$_iter__58206(cljs.core.rest(s__58207__$2)));
}
} else {
return null;
}
break;
}
});})(i__58201,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
,null,null));
});})(i__58201,vec__58203,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58202,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null));

var G__58336 = (i__58201 + (1));
i__58201 = G__58336;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58202),athens$views$node_page$node_page_el_$_iter__58199(cljs.core.chunk_rest(s__58200__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58202),null);
}
} else {
var vec__58264 = cljs.core.first(s__58200__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58264,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58264,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (vec__58264,linked_or_unlinked,refs,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58199_$_iter__58267(s__58268){
return (new cljs.core.LazySeq(null,(function (){
var s__58268__$1 = s__58268;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58268__$1);
if(temp__5735__auto____$1){
var s__58268__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58268__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58268__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58270 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58269 = (0);
while(true){
if((i__58269 < size__4581__auto__)){
var vec__58271 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58269);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58271,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58271,(1),null);
cljs.core.chunk_append(b__58270,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58269,vec__58271,group_title,group,c__4580__auto__,size__4581__auto__,b__58270,s__58268__$2,temp__5735__auto____$1,vec__58264,linked_or_unlinked,refs,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58269,vec__58271,group_title,group,c__4580__auto__,size__4581__auto__,b__58270,s__58268__$2,temp__5735__auto____$1,vec__58264,linked_or_unlinked,refs,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58269,vec__58271,group_title,group,c__4580__auto__,size__4581__auto__,b__58270,s__58268__$2,temp__5735__auto____$1,vec__58264,linked_or_unlinked,refs,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58199_$_iter__58267_$_iter__58274(s__58275){
return (new cljs.core.LazySeq(null,((function (i__58269,vec__58271,group_title,group,c__4580__auto__,size__4581__auto__,b__58270,s__58268__$2,temp__5735__auto____$1,vec__58264,linked_or_unlinked,refs,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function (){
var s__58275__$1 = s__58275;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58275__$1);
if(temp__5735__auto____$2){
var s__58275__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58275__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58275__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58277 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58276 = (0);
while(true){
if((i__58276 < size__4581__auto____$1)){
var map__58278 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58276);
var map__58278__$1 = (((((!((map__58278 == null))))?(((((map__58278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58278):map__58278);
var block = map__58278__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58278__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58278__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58277,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58276,i__58269,map__58278,map__58278__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58277,s__58275__$2,temp__5735__auto____$2,vec__58271,group_title,group,c__4580__auto__,size__4581__auto__,b__58270,s__58268__$2,temp__5735__auto____$1,vec__58264,linked_or_unlinked,refs,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58199_$_iter__58267_$_iter__58274_$_iter__58280(s__58281){
return (new cljs.core.LazySeq(null,((function (i__58276,i__58269,map__58278,map__58278__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58277,s__58275__$2,temp__5735__auto____$2,vec__58271,group_title,group,c__4580__auto__,size__4581__auto__,b__58270,s__58268__$2,temp__5735__auto____$1,vec__58264,linked_or_unlinked,refs,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function (){
var s__58281__$1 = s__58281;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58281__$1);
if(temp__5735__auto____$3){
var s__58281__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58281__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58281__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58283 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58282 = (0);
while(true){
if((i__58282 < size__4581__auto____$2)){
var map__58284 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58282);
var map__58284__$1 = (((((!((map__58284 == null))))?(((((map__58284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58284):map__58284);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58284__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58284__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58284__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58283,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58282,i__58276,i__58269,map__58284,map__58284__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58283,s__58281__$2,temp__5735__auto____$3,map__58278,map__58278__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58277,s__58275__$2,temp__5735__auto____$2,vec__58271,group_title,group,c__4580__auto__,size__4581__auto__,b__58270,s__58268__$2,temp__5735__auto____$1,vec__58264,linked_or_unlinked,refs,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58282,i__58276,i__58269,map__58284,map__58284__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58283,s__58281__$2,temp__5735__auto____$3,map__58278,map__58278__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58277,s__58275__$2,temp__5735__auto____$2,vec__58271,group_title,group,c__4580__auto__,size__4581__auto__,b__58270,s__58268__$2,temp__5735__auto____$1,vec__58264,linked_or_unlinked,refs,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58337 = (i__58282 + (1));
i__58282 = G__58337;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58283),athens$views$node_page$node_page_el_$_iter__58199_$_iter__58267_$_iter__58274_$_iter__58280(cljs.core.chunk_rest(s__58281__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58283),null);
}
} else {
var map__58286 = cljs.core.first(s__58281__$2);
var map__58286__$1 = (((((!((map__58286 == null))))?(((((map__58286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58286):map__58286);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58286__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58286__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58286__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58276,i__58269,map__58286,map__58286__$1,title__$1,string,uid__$2,s__58281__$2,temp__5735__auto____$3,map__58278,map__58278__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58277,s__58275__$2,temp__5735__auto____$2,vec__58271,group_title,group,c__4580__auto__,size__4581__auto__,b__58270,s__58268__$2,temp__5735__auto____$1,vec__58264,linked_or_unlinked,refs,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58276,i__58269,map__58286,map__58286__$1,title__$1,string,uid__$2,s__58281__$2,temp__5735__auto____$3,map__58278,map__58278__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58277,s__58275__$2,temp__5735__auto____$2,vec__58271,group_title,group,c__4580__auto__,size__4581__auto__,b__58270,s__58268__$2,temp__5735__auto____$1,vec__58264,linked_or_unlinked,refs,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58199_$_iter__58267_$_iter__58274_$_iter__58280(cljs.core.rest(s__58281__$2)));
}
} else {
return null;
}
break;
}
});})(i__58276,i__58269,map__58278,map__58278__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58277,s__58275__$2,temp__5735__auto____$2,vec__58271,group_title,group,c__4580__auto__,size__4581__auto__,b__58270,s__58268__$2,temp__5735__auto____$1,vec__58264,linked_or_unlinked,refs,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
,null,null));
});})(i__58276,i__58269,map__58278,map__58278__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58277,s__58275__$2,temp__5735__auto____$2,vec__58271,group_title,group,c__4580__auto__,size__4581__auto__,b__58270,s__58268__$2,temp__5735__auto____$1,vec__58264,linked_or_unlinked,refs,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58338 = (i__58276 + (1));
i__58276 = G__58338;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58277),athens$views$node_page$node_page_el_$_iter__58199_$_iter__58267_$_iter__58274(cljs.core.chunk_rest(s__58275__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58277),null);
}
} else {
var map__58288 = cljs.core.first(s__58275__$2);
var map__58288__$1 = (((((!((map__58288 == null))))?(((((map__58288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58288):map__58288);
var block = map__58288__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58288__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58288__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58269,map__58288,map__58288__$1,block,uid__$1,parents,s__58275__$2,temp__5735__auto____$2,vec__58271,group_title,group,c__4580__auto__,size__4581__auto__,b__58270,s__58268__$2,temp__5735__auto____$1,vec__58264,linked_or_unlinked,refs,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58199_$_iter__58267_$_iter__58274_$_iter__58290(s__58291){
return (new cljs.core.LazySeq(null,((function (i__58269,map__58288,map__58288__$1,block,uid__$1,parents,s__58275__$2,temp__5735__auto____$2,vec__58271,group_title,group,c__4580__auto__,size__4581__auto__,b__58270,s__58268__$2,temp__5735__auto____$1,vec__58264,linked_or_unlinked,refs,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function (){
var s__58291__$1 = s__58291;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58291__$1);
if(temp__5735__auto____$3){
var s__58291__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58291__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58291__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58293 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58292 = (0);
while(true){
if((i__58292 < size__4581__auto____$1)){
var map__58294 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58292);
var map__58294__$1 = (((((!((map__58294 == null))))?(((((map__58294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58294):map__58294);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58294__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58294__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58294__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58293,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58292,i__58269,map__58294,map__58294__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58293,s__58291__$2,temp__5735__auto____$3,map__58288,map__58288__$1,block,uid__$1,parents,s__58275__$2,temp__5735__auto____$2,vec__58271,group_title,group,c__4580__auto__,size__4581__auto__,b__58270,s__58268__$2,temp__5735__auto____$1,vec__58264,linked_or_unlinked,refs,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58292,i__58269,map__58294,map__58294__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58293,s__58291__$2,temp__5735__auto____$3,map__58288,map__58288__$1,block,uid__$1,parents,s__58275__$2,temp__5735__auto____$2,vec__58271,group_title,group,c__4580__auto__,size__4581__auto__,b__58270,s__58268__$2,temp__5735__auto____$1,vec__58264,linked_or_unlinked,refs,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58339 = (i__58292 + (1));
i__58292 = G__58339;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58293),athens$views$node_page$node_page_el_$_iter__58199_$_iter__58267_$_iter__58274_$_iter__58290(cljs.core.chunk_rest(s__58291__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58293),null);
}
} else {
var map__58296 = cljs.core.first(s__58291__$2);
var map__58296__$1 = (((((!((map__58296 == null))))?(((((map__58296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58296):map__58296);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58296__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58296__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58296__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58269,map__58296,map__58296__$1,title__$1,string,uid__$2,s__58291__$2,temp__5735__auto____$3,map__58288,map__58288__$1,block,uid__$1,parents,s__58275__$2,temp__5735__auto____$2,vec__58271,group_title,group,c__4580__auto__,size__4581__auto__,b__58270,s__58268__$2,temp__5735__auto____$1,vec__58264,linked_or_unlinked,refs,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58269,map__58296,map__58296__$1,title__$1,string,uid__$2,s__58291__$2,temp__5735__auto____$3,map__58288,map__58288__$1,block,uid__$1,parents,s__58275__$2,temp__5735__auto____$2,vec__58271,group_title,group,c__4580__auto__,size__4581__auto__,b__58270,s__58268__$2,temp__5735__auto____$1,vec__58264,linked_or_unlinked,refs,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58199_$_iter__58267_$_iter__58274_$_iter__58290(cljs.core.rest(s__58291__$2)));
}
} else {
return null;
}
break;
}
});})(i__58269,map__58288,map__58288__$1,block,uid__$1,parents,s__58275__$2,temp__5735__auto____$2,vec__58271,group_title,group,c__4580__auto__,size__4581__auto__,b__58270,s__58268__$2,temp__5735__auto____$1,vec__58264,linked_or_unlinked,refs,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
,null,null));
});})(i__58269,map__58288,map__58288__$1,block,uid__$1,parents,s__58275__$2,temp__5735__auto____$2,vec__58271,group_title,group,c__4580__auto__,size__4581__auto__,b__58270,s__58268__$2,temp__5735__auto____$1,vec__58264,linked_or_unlinked,refs,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58199_$_iter__58267_$_iter__58274(cljs.core.rest(s__58275__$2)));
}
} else {
return null;
}
break;
}
});})(i__58269,vec__58271,group_title,group,c__4580__auto__,size__4581__auto__,b__58270,s__58268__$2,temp__5735__auto____$1,vec__58264,linked_or_unlinked,refs,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
,null,null));
});})(i__58269,vec__58271,group_title,group,c__4580__auto__,size__4581__auto__,b__58270,s__58268__$2,temp__5735__auto____$1,vec__58264,linked_or_unlinked,refs,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58340 = (i__58269 + (1));
i__58269 = G__58340;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58270),athens$views$node_page$node_page_el_$_iter__58199_$_iter__58267(cljs.core.chunk_rest(s__58268__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58270),null);
}
} else {
var vec__58298 = cljs.core.first(s__58268__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58298,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58298,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58298,group_title,group,s__58268__$2,temp__5735__auto____$1,vec__58264,linked_or_unlinked,refs,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__58298,group_title,group,s__58268__$2,temp__5735__auto____$1,vec__58264,linked_or_unlinked,refs,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (vec__58298,group_title,group,s__58268__$2,temp__5735__auto____$1,vec__58264,linked_or_unlinked,refs,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58199_$_iter__58267_$_iter__58301(s__58302){
return (new cljs.core.LazySeq(null,(function (){
var s__58302__$1 = s__58302;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58302__$1);
if(temp__5735__auto____$2){
var s__58302__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58302__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58302__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58304 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58303 = (0);
while(true){
if((i__58303 < size__4581__auto__)){
var map__58305 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58303);
var map__58305__$1 = (((((!((map__58305 == null))))?(((((map__58305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58305):map__58305);
var block = map__58305__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58305__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58305__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58304,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58303,map__58305,map__58305__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58304,s__58302__$2,temp__5735__auto____$2,vec__58298,group_title,group,s__58268__$2,temp__5735__auto____$1,vec__58264,linked_or_unlinked,refs,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58199_$_iter__58267_$_iter__58301_$_iter__58307(s__58308){
return (new cljs.core.LazySeq(null,((function (i__58303,map__58305,map__58305__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58304,s__58302__$2,temp__5735__auto____$2,vec__58298,group_title,group,s__58268__$2,temp__5735__auto____$1,vec__58264,linked_or_unlinked,refs,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function (){
var s__58308__$1 = s__58308;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58308__$1);
if(temp__5735__auto____$3){
var s__58308__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58308__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58308__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58310 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58309 = (0);
while(true){
if((i__58309 < size__4581__auto____$1)){
var map__58311 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58309);
var map__58311__$1 = (((((!((map__58311 == null))))?(((((map__58311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58311):map__58311);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58311__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58311__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58311__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58310,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58309,i__58303,map__58311,map__58311__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58310,s__58308__$2,temp__5735__auto____$3,map__58305,map__58305__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58304,s__58302__$2,temp__5735__auto____$2,vec__58298,group_title,group,s__58268__$2,temp__5735__auto____$1,vec__58264,linked_or_unlinked,refs,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58309,i__58303,map__58311,map__58311__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58310,s__58308__$2,temp__5735__auto____$3,map__58305,map__58305__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58304,s__58302__$2,temp__5735__auto____$2,vec__58298,group_title,group,s__58268__$2,temp__5735__auto____$1,vec__58264,linked_or_unlinked,refs,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58341 = (i__58309 + (1));
i__58309 = G__58341;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58310),athens$views$node_page$node_page_el_$_iter__58199_$_iter__58267_$_iter__58301_$_iter__58307(cljs.core.chunk_rest(s__58308__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58310),null);
}
} else {
var map__58313 = cljs.core.first(s__58308__$2);
var map__58313__$1 = (((((!((map__58313 == null))))?(((((map__58313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58313):map__58313);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58313__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58313__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58313__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58303,map__58313,map__58313__$1,title__$1,string,uid__$2,s__58308__$2,temp__5735__auto____$3,map__58305,map__58305__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58304,s__58302__$2,temp__5735__auto____$2,vec__58298,group_title,group,s__58268__$2,temp__5735__auto____$1,vec__58264,linked_or_unlinked,refs,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58303,map__58313,map__58313__$1,title__$1,string,uid__$2,s__58308__$2,temp__5735__auto____$3,map__58305,map__58305__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58304,s__58302__$2,temp__5735__auto____$2,vec__58298,group_title,group,s__58268__$2,temp__5735__auto____$1,vec__58264,linked_or_unlinked,refs,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58199_$_iter__58267_$_iter__58301_$_iter__58307(cljs.core.rest(s__58308__$2)));
}
} else {
return null;
}
break;
}
});})(i__58303,map__58305,map__58305__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58304,s__58302__$2,temp__5735__auto____$2,vec__58298,group_title,group,s__58268__$2,temp__5735__auto____$1,vec__58264,linked_or_unlinked,refs,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
,null,null));
});})(i__58303,map__58305,map__58305__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58304,s__58302__$2,temp__5735__auto____$2,vec__58298,group_title,group,s__58268__$2,temp__5735__auto____$1,vec__58264,linked_or_unlinked,refs,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58342 = (i__58303 + (1));
i__58303 = G__58342;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58304),athens$views$node_page$node_page_el_$_iter__58199_$_iter__58267_$_iter__58301(cljs.core.chunk_rest(s__58302__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58304),null);
}
} else {
var map__58315 = cljs.core.first(s__58302__$2);
var map__58315__$1 = (((((!((map__58315 == null))))?(((((map__58315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58315):map__58315);
var block = map__58315__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58315__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58315__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (map__58315,map__58315__$1,block,uid__$1,parents,s__58302__$2,temp__5735__auto____$2,vec__58298,group_title,group,s__58268__$2,temp__5735__auto____$1,vec__58264,linked_or_unlinked,refs,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58199_$_iter__58267_$_iter__58301_$_iter__58317(s__58318){
return (new cljs.core.LazySeq(null,(function (){
var s__58318__$1 = s__58318;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58318__$1);
if(temp__5735__auto____$3){
var s__58318__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58318__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58318__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58320 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58319 = (0);
while(true){
if((i__58319 < size__4581__auto__)){
var map__58321 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58319);
var map__58321__$1 = (((((!((map__58321 == null))))?(((((map__58321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58321):map__58321);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58321__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58321__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58321__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58320,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58319,map__58321,map__58321__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58320,s__58318__$2,temp__5735__auto____$3,map__58315,map__58315__$1,block,uid__$1,parents,s__58302__$2,temp__5735__auto____$2,vec__58298,group_title,group,s__58268__$2,temp__5735__auto____$1,vec__58264,linked_or_unlinked,refs,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58319,map__58321,map__58321__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58320,s__58318__$2,temp__5735__auto____$3,map__58315,map__58315__$1,block,uid__$1,parents,s__58302__$2,temp__5735__auto____$2,vec__58298,group_title,group,s__58268__$2,temp__5735__auto____$1,vec__58264,linked_or_unlinked,refs,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58343 = (i__58319 + (1));
i__58319 = G__58343;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58320),athens$views$node_page$node_page_el_$_iter__58199_$_iter__58267_$_iter__58301_$_iter__58317(cljs.core.chunk_rest(s__58318__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58320),null);
}
} else {
var map__58323 = cljs.core.first(s__58318__$2);
var map__58323__$1 = (((((!((map__58323 == null))))?(((((map__58323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58323):map__58323);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58323__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58323__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58323__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__58323,map__58323__$1,title__$1,string,uid__$2,s__58318__$2,temp__5735__auto____$3,map__58315,map__58315__$1,block,uid__$1,parents,s__58302__$2,temp__5735__auto____$2,vec__58298,group_title,group,s__58268__$2,temp__5735__auto____$1,vec__58264,linked_or_unlinked,refs,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__58323,map__58323__$1,title__$1,string,uid__$2,s__58318__$2,temp__5735__auto____$3,map__58315,map__58315__$1,block,uid__$1,parents,s__58302__$2,temp__5735__auto____$2,vec__58298,group_title,group,s__58268__$2,temp__5735__auto____$1,vec__58264,linked_or_unlinked,refs,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58199_$_iter__58267_$_iter__58301_$_iter__58317(cljs.core.rest(s__58318__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58315,map__58315__$1,block,uid__$1,parents,s__58302__$2,temp__5735__auto____$2,vec__58298,group_title,group,s__58268__$2,temp__5735__auto____$1,vec__58264,linked_or_unlinked,refs,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58199_$_iter__58267_$_iter__58301(cljs.core.rest(s__58302__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58298,group_title,group,s__58268__$2,temp__5735__auto____$1,vec__58264,linked_or_unlinked,refs,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__58199_$_iter__58267(cljs.core.rest(s__58268__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58264,linked_or_unlinked,refs,s__58200__$2,temp__5735__auto__,map__58187,map__58187__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null),athens$views$node_page$node_page_el_$_iter__58199(cljs.core.rest(s__58200__$2)));
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
var map__58325 = athens.db.get_node_document(ident);
var map__58325__$1 = (((((!((map__58325 == null))))?(((((map__58325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58325):map__58325);
var node = map__58325__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58325__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58325__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__58327 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58327) : re_frame.core.subscribe.call(null,G__58327));
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
