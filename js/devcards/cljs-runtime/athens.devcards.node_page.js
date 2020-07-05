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
var G__58083 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58083) : re_frame.core.dispatch.call(null,G__58083));
});
athens.devcards.node_page.db_handler = goog.functions.debounce(athens.devcards.node_page.handler,(500));
athens.devcards.node_page.get_ref_ids = (function athens$devcards$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__58084 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__58085 = athens.db.dsdb;
var G__58086 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__58084,G__58085,G__58086) : posh.reagent.q.call(null,G__58084,G__58085,G__58086));
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
athens.devcards.node_page.node_page_el = (function athens$devcards$node_page$node_page_el(p__58087,editing_uid,ref_groups){
var map__58088 = p__58087;
var map__58088__$1 = (((((!((map__58088 == null))))?(((((map__58088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58088):map__58088);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58088__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58088__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58088__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.page_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58090 = e.target.value;
var G__58091 = uid;
return (athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58090,G__58091) : athens.devcards.node_page.db_handler.call(null,G__58090,G__58091));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__58092(s__58093){
return (new cljs.core.LazySeq(null,(function (){
var s__58093__$1 = s__58093;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58093__$1);
if(temp__5735__auto__){
var s__58093__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58093__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58093__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58095 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58094 = (0);
while(true){
if((i__58094 < size__4581__auto__)){
var map__58096 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58094);
var map__58096__$1 = (((((!((map__58096 == null))))?(((((map__58096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58096):map__58096);
var child = map__58096__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58096__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58095,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58250 = (i__58094 + (1));
i__58094 = G__58250;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58095),athens$devcards$node_page$node_page_el_$_iter__58092(cljs.core.chunk_rest(s__58093__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58095),null);
}
} else {
var map__58098 = cljs.core.first(s__58093__$2);
var map__58098__$1 = (((((!((map__58098 == null))))?(((((map__58098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58098):map__58098);
var child = map__58098__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58098__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$devcards$node_page$node_page_el_$_iter__58092(cljs.core.rest(s__58093__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__58100(s__58101){
return (new cljs.core.LazySeq(null,(function (){
var s__58101__$1 = s__58101;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58101__$1);
if(temp__5735__auto__){
var s__58101__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58101__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58101__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58103 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58102 = (0);
while(true){
if((i__58102 < size__4581__auto__)){
var vec__58104 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58102);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58104,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58104,(1),null);
cljs.core.chunk_append(b__58103,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (i__58102,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58100_$_iter__58107(s__58108){
return (new cljs.core.LazySeq(null,((function (i__58102,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function (){
var s__58108__$1 = s__58108;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58108__$1);
if(temp__5735__auto____$1){
var s__58108__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58108__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58108__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58110 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58109 = (0);
while(true){
if((i__58109 < size__4581__auto____$1)){
var vec__58111 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58109);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58111,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58111,(1),null);
cljs.core.chunk_append(b__58110,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58109,i__58102,vec__58111,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58110,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58109,i__58102,vec__58111,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58110,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58109,i__58102,vec__58111,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58110,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58100_$_iter__58107_$_iter__58114(s__58115){
return (new cljs.core.LazySeq(null,((function (i__58109,i__58102,vec__58111,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58110,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function (){
var s__58115__$1 = s__58115;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58115__$1);
if(temp__5735__auto____$2){
var s__58115__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58115__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58115__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58117 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58116 = (0);
while(true){
if((i__58116 < size__4581__auto____$2)){
var map__58118 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58116);
var map__58118__$1 = (((((!((map__58118 == null))))?(((((map__58118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58118):map__58118);
var block = map__58118__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58118__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58118__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58117,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58116,i__58109,i__58102,map__58118,map__58118__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58117,s__58115__$2,temp__5735__auto____$2,vec__58111,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58110,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58100_$_iter__58107_$_iter__58114_$_iter__58120(s__58121){
return (new cljs.core.LazySeq(null,((function (i__58116,i__58109,i__58102,map__58118,map__58118__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58117,s__58115__$2,temp__5735__auto____$2,vec__58111,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58110,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function (){
var s__58121__$1 = s__58121;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58121__$1);
if(temp__5735__auto____$3){
var s__58121__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58121__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58121__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58123 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58122 = (0);
while(true){
if((i__58122 < size__4581__auto____$3)){
var map__58124 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58122);
var map__58124__$1 = (((((!((map__58124 == null))))?(((((map__58124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58124):map__58124);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58124__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58124__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58124__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58123,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58122,i__58116,i__58109,i__58102,map__58124,map__58124__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58123,s__58121__$2,temp__5735__auto____$3,map__58118,map__58118__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58117,s__58115__$2,temp__5735__auto____$2,vec__58111,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58110,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58122,i__58116,i__58109,i__58102,map__58124,map__58124__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58123,s__58121__$2,temp__5735__auto____$3,map__58118,map__58118__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58117,s__58115__$2,temp__5735__auto____$2,vec__58111,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58110,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58257 = (i__58122 + (1));
i__58122 = G__58257;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58123),athens$devcards$node_page$node_page_el_$_iter__58100_$_iter__58107_$_iter__58114_$_iter__58120(cljs.core.chunk_rest(s__58121__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58123),null);
}
} else {
var map__58126 = cljs.core.first(s__58121__$2);
var map__58126__$1 = (((((!((map__58126 == null))))?(((((map__58126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58126):map__58126);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58126__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58126__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58126__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58116,i__58109,i__58102,map__58126,map__58126__$1,title__$1,string,uid__$2,s__58121__$2,temp__5735__auto____$3,map__58118,map__58118__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58117,s__58115__$2,temp__5735__auto____$2,vec__58111,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58110,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58116,i__58109,i__58102,map__58126,map__58126__$1,title__$1,string,uid__$2,s__58121__$2,temp__5735__auto____$3,map__58118,map__58118__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58117,s__58115__$2,temp__5735__auto____$2,vec__58111,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58110,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58100_$_iter__58107_$_iter__58114_$_iter__58120(cljs.core.rest(s__58121__$2)));
}
} else {
return null;
}
break;
}
});})(i__58116,i__58109,i__58102,map__58118,map__58118__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58117,s__58115__$2,temp__5735__auto____$2,vec__58111,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58110,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
,null,null));
});})(i__58116,i__58109,i__58102,map__58118,map__58118__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58117,s__58115__$2,temp__5735__auto____$2,vec__58111,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58110,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58258 = (i__58116 + (1));
i__58116 = G__58258;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58117),athens$devcards$node_page$node_page_el_$_iter__58100_$_iter__58107_$_iter__58114(cljs.core.chunk_rest(s__58115__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58117),null);
}
} else {
var map__58128 = cljs.core.first(s__58115__$2);
var map__58128__$1 = (((((!((map__58128 == null))))?(((((map__58128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58128):map__58128);
var block = map__58128__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58128__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58128__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58109,i__58102,map__58128,map__58128__$1,block,uid__$1,parents,s__58115__$2,temp__5735__auto____$2,vec__58111,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58110,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58100_$_iter__58107_$_iter__58114_$_iter__58130(s__58131){
return (new cljs.core.LazySeq(null,((function (i__58109,i__58102,map__58128,map__58128__$1,block,uid__$1,parents,s__58115__$2,temp__5735__auto____$2,vec__58111,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58110,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function (){
var s__58131__$1 = s__58131;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58131__$1);
if(temp__5735__auto____$3){
var s__58131__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58131__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58131__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58133 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58132 = (0);
while(true){
if((i__58132 < size__4581__auto____$2)){
var map__58134 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58132);
var map__58134__$1 = (((((!((map__58134 == null))))?(((((map__58134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58134):map__58134);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58134__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58134__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58134__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58133,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58132,i__58109,i__58102,map__58134,map__58134__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58133,s__58131__$2,temp__5735__auto____$3,map__58128,map__58128__$1,block,uid__$1,parents,s__58115__$2,temp__5735__auto____$2,vec__58111,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58110,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58132,i__58109,i__58102,map__58134,map__58134__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58133,s__58131__$2,temp__5735__auto____$3,map__58128,map__58128__$1,block,uid__$1,parents,s__58115__$2,temp__5735__auto____$2,vec__58111,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58110,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58259 = (i__58132 + (1));
i__58132 = G__58259;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58133),athens$devcards$node_page$node_page_el_$_iter__58100_$_iter__58107_$_iter__58114_$_iter__58130(cljs.core.chunk_rest(s__58131__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58133),null);
}
} else {
var map__58136 = cljs.core.first(s__58131__$2);
var map__58136__$1 = (((((!((map__58136 == null))))?(((((map__58136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58136):map__58136);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58136__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58136__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58136__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58109,i__58102,map__58136,map__58136__$1,title__$1,string,uid__$2,s__58131__$2,temp__5735__auto____$3,map__58128,map__58128__$1,block,uid__$1,parents,s__58115__$2,temp__5735__auto____$2,vec__58111,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58110,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58109,i__58102,map__58136,map__58136__$1,title__$1,string,uid__$2,s__58131__$2,temp__5735__auto____$3,map__58128,map__58128__$1,block,uid__$1,parents,s__58115__$2,temp__5735__auto____$2,vec__58111,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58110,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58100_$_iter__58107_$_iter__58114_$_iter__58130(cljs.core.rest(s__58131__$2)));
}
} else {
return null;
}
break;
}
});})(i__58109,i__58102,map__58128,map__58128__$1,block,uid__$1,parents,s__58115__$2,temp__5735__auto____$2,vec__58111,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58110,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
,null,null));
});})(i__58109,i__58102,map__58128,map__58128__$1,block,uid__$1,parents,s__58115__$2,temp__5735__auto____$2,vec__58111,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58110,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__58100_$_iter__58107_$_iter__58114(cljs.core.rest(s__58115__$2)));
}
} else {
return null;
}
break;
}
});})(i__58109,i__58102,vec__58111,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58110,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
,null,null));
});})(i__58109,i__58102,vec__58111,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58110,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58260 = (i__58109 + (1));
i__58109 = G__58260;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58110),athens$devcards$node_page$node_page_el_$_iter__58100_$_iter__58107(cljs.core.chunk_rest(s__58108__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58110),null);
}
} else {
var vec__58138 = cljs.core.first(s__58108__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58138,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58138,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58102,vec__58138,group_title,group,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58102,vec__58138,group_title,group,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58102,vec__58138,group_title,group,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58100_$_iter__58107_$_iter__58141(s__58142){
return (new cljs.core.LazySeq(null,((function (i__58102,vec__58138,group_title,group,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function (){
var s__58142__$1 = s__58142;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58142__$1);
if(temp__5735__auto____$2){
var s__58142__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58142__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58142__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58144 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58143 = (0);
while(true){
if((i__58143 < size__4581__auto____$1)){
var map__58145 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58143);
var map__58145__$1 = (((((!((map__58145 == null))))?(((((map__58145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58145):map__58145);
var block = map__58145__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58145__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58145__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58144,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58143,i__58102,map__58145,map__58145__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58144,s__58142__$2,temp__5735__auto____$2,vec__58138,group_title,group,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58100_$_iter__58107_$_iter__58141_$_iter__58147(s__58148){
return (new cljs.core.LazySeq(null,((function (i__58143,i__58102,map__58145,map__58145__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58144,s__58142__$2,temp__5735__auto____$2,vec__58138,group_title,group,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function (){
var s__58148__$1 = s__58148;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58148__$1);
if(temp__5735__auto____$3){
var s__58148__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58148__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58148__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58150 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58149 = (0);
while(true){
if((i__58149 < size__4581__auto____$2)){
var map__58151 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58149);
var map__58151__$1 = (((((!((map__58151 == null))))?(((((map__58151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58151):map__58151);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58151__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58151__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58151__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58150,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58149,i__58143,i__58102,map__58151,map__58151__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58150,s__58148__$2,temp__5735__auto____$3,map__58145,map__58145__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58144,s__58142__$2,temp__5735__auto____$2,vec__58138,group_title,group,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58149,i__58143,i__58102,map__58151,map__58151__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58150,s__58148__$2,temp__5735__auto____$3,map__58145,map__58145__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58144,s__58142__$2,temp__5735__auto____$2,vec__58138,group_title,group,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58261 = (i__58149 + (1));
i__58149 = G__58261;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58150),athens$devcards$node_page$node_page_el_$_iter__58100_$_iter__58107_$_iter__58141_$_iter__58147(cljs.core.chunk_rest(s__58148__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58150),null);
}
} else {
var map__58153 = cljs.core.first(s__58148__$2);
var map__58153__$1 = (((((!((map__58153 == null))))?(((((map__58153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58153):map__58153);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58153__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58153__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58153__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58143,i__58102,map__58153,map__58153__$1,title__$1,string,uid__$2,s__58148__$2,temp__5735__auto____$3,map__58145,map__58145__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58144,s__58142__$2,temp__5735__auto____$2,vec__58138,group_title,group,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58143,i__58102,map__58153,map__58153__$1,title__$1,string,uid__$2,s__58148__$2,temp__5735__auto____$3,map__58145,map__58145__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58144,s__58142__$2,temp__5735__auto____$2,vec__58138,group_title,group,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58100_$_iter__58107_$_iter__58141_$_iter__58147(cljs.core.rest(s__58148__$2)));
}
} else {
return null;
}
break;
}
});})(i__58143,i__58102,map__58145,map__58145__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58144,s__58142__$2,temp__5735__auto____$2,vec__58138,group_title,group,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
,null,null));
});})(i__58143,i__58102,map__58145,map__58145__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58144,s__58142__$2,temp__5735__auto____$2,vec__58138,group_title,group,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58262 = (i__58143 + (1));
i__58143 = G__58262;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58144),athens$devcards$node_page$node_page_el_$_iter__58100_$_iter__58107_$_iter__58141(cljs.core.chunk_rest(s__58142__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58144),null);
}
} else {
var map__58155 = cljs.core.first(s__58142__$2);
var map__58155__$1 = (((((!((map__58155 == null))))?(((((map__58155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58155):map__58155);
var block = map__58155__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58155__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58155__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58102,map__58155,map__58155__$1,block,uid__$1,parents,s__58142__$2,temp__5735__auto____$2,vec__58138,group_title,group,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58100_$_iter__58107_$_iter__58141_$_iter__58157(s__58158){
return (new cljs.core.LazySeq(null,((function (i__58102,map__58155,map__58155__$1,block,uid__$1,parents,s__58142__$2,temp__5735__auto____$2,vec__58138,group_title,group,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function (){
var s__58158__$1 = s__58158;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58158__$1);
if(temp__5735__auto____$3){
var s__58158__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58158__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58158__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58160 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58159 = (0);
while(true){
if((i__58159 < size__4581__auto____$1)){
var map__58161 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58159);
var map__58161__$1 = (((((!((map__58161 == null))))?(((((map__58161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58161):map__58161);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58161__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58161__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58161__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58160,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58159,i__58102,map__58161,map__58161__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58160,s__58158__$2,temp__5735__auto____$3,map__58155,map__58155__$1,block,uid__$1,parents,s__58142__$2,temp__5735__auto____$2,vec__58138,group_title,group,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58159,i__58102,map__58161,map__58161__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58160,s__58158__$2,temp__5735__auto____$3,map__58155,map__58155__$1,block,uid__$1,parents,s__58142__$2,temp__5735__auto____$2,vec__58138,group_title,group,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58263 = (i__58159 + (1));
i__58159 = G__58263;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58160),athens$devcards$node_page$node_page_el_$_iter__58100_$_iter__58107_$_iter__58141_$_iter__58157(cljs.core.chunk_rest(s__58158__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58160),null);
}
} else {
var map__58163 = cljs.core.first(s__58158__$2);
var map__58163__$1 = (((((!((map__58163 == null))))?(((((map__58163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58163):map__58163);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58163__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58163__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58163__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58102,map__58163,map__58163__$1,title__$1,string,uid__$2,s__58158__$2,temp__5735__auto____$3,map__58155,map__58155__$1,block,uid__$1,parents,s__58142__$2,temp__5735__auto____$2,vec__58138,group_title,group,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58102,map__58163,map__58163__$1,title__$1,string,uid__$2,s__58158__$2,temp__5735__auto____$3,map__58155,map__58155__$1,block,uid__$1,parents,s__58142__$2,temp__5735__auto____$2,vec__58138,group_title,group,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58100_$_iter__58107_$_iter__58141_$_iter__58157(cljs.core.rest(s__58158__$2)));
}
} else {
return null;
}
break;
}
});})(i__58102,map__58155,map__58155__$1,block,uid__$1,parents,s__58142__$2,temp__5735__auto____$2,vec__58138,group_title,group,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
,null,null));
});})(i__58102,map__58155,map__58155__$1,block,uid__$1,parents,s__58142__$2,temp__5735__auto____$2,vec__58138,group_title,group,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__58100_$_iter__58107_$_iter__58141(cljs.core.rest(s__58142__$2)));
}
} else {
return null;
}
break;
}
});})(i__58102,vec__58138,group_title,group,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
,null,null));
});})(i__58102,vec__58138,group_title,group,s__58108__$2,temp__5735__auto____$1,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__58100_$_iter__58107(cljs.core.rest(s__58108__$2)));
}
} else {
return null;
}
break;
}
});})(i__58102,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
,null,null));
});})(i__58102,vec__58104,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58103,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null));

var G__58264 = (i__58102 + (1));
i__58102 = G__58264;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58103),athens$devcards$node_page$node_page_el_$_iter__58100(cljs.core.chunk_rest(s__58101__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58103),null);
}
} else {
var vec__58165 = cljs.core.first(s__58101__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58165,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58165,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (vec__58165,linked_or_unlinked,refs,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58100_$_iter__58168(s__58169){
return (new cljs.core.LazySeq(null,(function (){
var s__58169__$1 = s__58169;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58169__$1);
if(temp__5735__auto____$1){
var s__58169__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58169__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58169__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58171 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58170 = (0);
while(true){
if((i__58170 < size__4581__auto__)){
var vec__58172 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58170);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58172,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58172,(1),null);
cljs.core.chunk_append(b__58171,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58170,vec__58172,group_title,group,c__4580__auto__,size__4581__auto__,b__58171,s__58169__$2,temp__5735__auto____$1,vec__58165,linked_or_unlinked,refs,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58170,vec__58172,group_title,group,c__4580__auto__,size__4581__auto__,b__58171,s__58169__$2,temp__5735__auto____$1,vec__58165,linked_or_unlinked,refs,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58170,vec__58172,group_title,group,c__4580__auto__,size__4581__auto__,b__58171,s__58169__$2,temp__5735__auto____$1,vec__58165,linked_or_unlinked,refs,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58100_$_iter__58168_$_iter__58175(s__58176){
return (new cljs.core.LazySeq(null,((function (i__58170,vec__58172,group_title,group,c__4580__auto__,size__4581__auto__,b__58171,s__58169__$2,temp__5735__auto____$1,vec__58165,linked_or_unlinked,refs,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function (){
var s__58176__$1 = s__58176;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58176__$1);
if(temp__5735__auto____$2){
var s__58176__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58176__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58176__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58178 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58177 = (0);
while(true){
if((i__58177 < size__4581__auto____$1)){
var map__58179 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58177);
var map__58179__$1 = (((((!((map__58179 == null))))?(((((map__58179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58179):map__58179);
var block = map__58179__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58179__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58179__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58178,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58177,i__58170,map__58179,map__58179__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58178,s__58176__$2,temp__5735__auto____$2,vec__58172,group_title,group,c__4580__auto__,size__4581__auto__,b__58171,s__58169__$2,temp__5735__auto____$1,vec__58165,linked_or_unlinked,refs,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58100_$_iter__58168_$_iter__58175_$_iter__58181(s__58182){
return (new cljs.core.LazySeq(null,((function (i__58177,i__58170,map__58179,map__58179__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58178,s__58176__$2,temp__5735__auto____$2,vec__58172,group_title,group,c__4580__auto__,size__4581__auto__,b__58171,s__58169__$2,temp__5735__auto____$1,vec__58165,linked_or_unlinked,refs,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function (){
var s__58182__$1 = s__58182;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58182__$1);
if(temp__5735__auto____$3){
var s__58182__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58182__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58182__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58184 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58183 = (0);
while(true){
if((i__58183 < size__4581__auto____$2)){
var map__58185 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58183);
var map__58185__$1 = (((((!((map__58185 == null))))?(((((map__58185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58185):map__58185);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58185__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58185__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58185__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58184,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58183,i__58177,i__58170,map__58185,map__58185__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58184,s__58182__$2,temp__5735__auto____$3,map__58179,map__58179__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58178,s__58176__$2,temp__5735__auto____$2,vec__58172,group_title,group,c__4580__auto__,size__4581__auto__,b__58171,s__58169__$2,temp__5735__auto____$1,vec__58165,linked_or_unlinked,refs,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58183,i__58177,i__58170,map__58185,map__58185__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58184,s__58182__$2,temp__5735__auto____$3,map__58179,map__58179__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58178,s__58176__$2,temp__5735__auto____$2,vec__58172,group_title,group,c__4580__auto__,size__4581__auto__,b__58171,s__58169__$2,temp__5735__auto____$1,vec__58165,linked_or_unlinked,refs,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58265 = (i__58183 + (1));
i__58183 = G__58265;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58184),athens$devcards$node_page$node_page_el_$_iter__58100_$_iter__58168_$_iter__58175_$_iter__58181(cljs.core.chunk_rest(s__58182__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58184),null);
}
} else {
var map__58187 = cljs.core.first(s__58182__$2);
var map__58187__$1 = (((((!((map__58187 == null))))?(((((map__58187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58187):map__58187);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58187__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58187__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58187__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58177,i__58170,map__58187,map__58187__$1,title__$1,string,uid__$2,s__58182__$2,temp__5735__auto____$3,map__58179,map__58179__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58178,s__58176__$2,temp__5735__auto____$2,vec__58172,group_title,group,c__4580__auto__,size__4581__auto__,b__58171,s__58169__$2,temp__5735__auto____$1,vec__58165,linked_or_unlinked,refs,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58177,i__58170,map__58187,map__58187__$1,title__$1,string,uid__$2,s__58182__$2,temp__5735__auto____$3,map__58179,map__58179__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58178,s__58176__$2,temp__5735__auto____$2,vec__58172,group_title,group,c__4580__auto__,size__4581__auto__,b__58171,s__58169__$2,temp__5735__auto____$1,vec__58165,linked_or_unlinked,refs,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58100_$_iter__58168_$_iter__58175_$_iter__58181(cljs.core.rest(s__58182__$2)));
}
} else {
return null;
}
break;
}
});})(i__58177,i__58170,map__58179,map__58179__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58178,s__58176__$2,temp__5735__auto____$2,vec__58172,group_title,group,c__4580__auto__,size__4581__auto__,b__58171,s__58169__$2,temp__5735__auto____$1,vec__58165,linked_or_unlinked,refs,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
,null,null));
});})(i__58177,i__58170,map__58179,map__58179__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58178,s__58176__$2,temp__5735__auto____$2,vec__58172,group_title,group,c__4580__auto__,size__4581__auto__,b__58171,s__58169__$2,temp__5735__auto____$1,vec__58165,linked_or_unlinked,refs,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58266 = (i__58177 + (1));
i__58177 = G__58266;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58178),athens$devcards$node_page$node_page_el_$_iter__58100_$_iter__58168_$_iter__58175(cljs.core.chunk_rest(s__58176__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58178),null);
}
} else {
var map__58189 = cljs.core.first(s__58176__$2);
var map__58189__$1 = (((((!((map__58189 == null))))?(((((map__58189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58189):map__58189);
var block = map__58189__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58189__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58189__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58170,map__58189,map__58189__$1,block,uid__$1,parents,s__58176__$2,temp__5735__auto____$2,vec__58172,group_title,group,c__4580__auto__,size__4581__auto__,b__58171,s__58169__$2,temp__5735__auto____$1,vec__58165,linked_or_unlinked,refs,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58100_$_iter__58168_$_iter__58175_$_iter__58191(s__58192){
return (new cljs.core.LazySeq(null,((function (i__58170,map__58189,map__58189__$1,block,uid__$1,parents,s__58176__$2,temp__5735__auto____$2,vec__58172,group_title,group,c__4580__auto__,size__4581__auto__,b__58171,s__58169__$2,temp__5735__auto____$1,vec__58165,linked_or_unlinked,refs,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function (){
var s__58192__$1 = s__58192;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58192__$1);
if(temp__5735__auto____$3){
var s__58192__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58192__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58192__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58194 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58193 = (0);
while(true){
if((i__58193 < size__4581__auto____$1)){
var map__58195 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58193);
var map__58195__$1 = (((((!((map__58195 == null))))?(((((map__58195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58195):map__58195);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58195__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58195__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58195__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58194,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58193,i__58170,map__58195,map__58195__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58194,s__58192__$2,temp__5735__auto____$3,map__58189,map__58189__$1,block,uid__$1,parents,s__58176__$2,temp__5735__auto____$2,vec__58172,group_title,group,c__4580__auto__,size__4581__auto__,b__58171,s__58169__$2,temp__5735__auto____$1,vec__58165,linked_or_unlinked,refs,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58193,i__58170,map__58195,map__58195__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58194,s__58192__$2,temp__5735__auto____$3,map__58189,map__58189__$1,block,uid__$1,parents,s__58176__$2,temp__5735__auto____$2,vec__58172,group_title,group,c__4580__auto__,size__4581__auto__,b__58171,s__58169__$2,temp__5735__auto____$1,vec__58165,linked_or_unlinked,refs,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58267 = (i__58193 + (1));
i__58193 = G__58267;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58194),athens$devcards$node_page$node_page_el_$_iter__58100_$_iter__58168_$_iter__58175_$_iter__58191(cljs.core.chunk_rest(s__58192__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58194),null);
}
} else {
var map__58197 = cljs.core.first(s__58192__$2);
var map__58197__$1 = (((((!((map__58197 == null))))?(((((map__58197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58197):map__58197);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58197__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58197__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58197__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58170,map__58197,map__58197__$1,title__$1,string,uid__$2,s__58192__$2,temp__5735__auto____$3,map__58189,map__58189__$1,block,uid__$1,parents,s__58176__$2,temp__5735__auto____$2,vec__58172,group_title,group,c__4580__auto__,size__4581__auto__,b__58171,s__58169__$2,temp__5735__auto____$1,vec__58165,linked_or_unlinked,refs,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58170,map__58197,map__58197__$1,title__$1,string,uid__$2,s__58192__$2,temp__5735__auto____$3,map__58189,map__58189__$1,block,uid__$1,parents,s__58176__$2,temp__5735__auto____$2,vec__58172,group_title,group,c__4580__auto__,size__4581__auto__,b__58171,s__58169__$2,temp__5735__auto____$1,vec__58165,linked_or_unlinked,refs,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58100_$_iter__58168_$_iter__58175_$_iter__58191(cljs.core.rest(s__58192__$2)));
}
} else {
return null;
}
break;
}
});})(i__58170,map__58189,map__58189__$1,block,uid__$1,parents,s__58176__$2,temp__5735__auto____$2,vec__58172,group_title,group,c__4580__auto__,size__4581__auto__,b__58171,s__58169__$2,temp__5735__auto____$1,vec__58165,linked_or_unlinked,refs,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
,null,null));
});})(i__58170,map__58189,map__58189__$1,block,uid__$1,parents,s__58176__$2,temp__5735__auto____$2,vec__58172,group_title,group,c__4580__auto__,size__4581__auto__,b__58171,s__58169__$2,temp__5735__auto____$1,vec__58165,linked_or_unlinked,refs,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__58100_$_iter__58168_$_iter__58175(cljs.core.rest(s__58176__$2)));
}
} else {
return null;
}
break;
}
});})(i__58170,vec__58172,group_title,group,c__4580__auto__,size__4581__auto__,b__58171,s__58169__$2,temp__5735__auto____$1,vec__58165,linked_or_unlinked,refs,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
,null,null));
});})(i__58170,vec__58172,group_title,group,c__4580__auto__,size__4581__auto__,b__58171,s__58169__$2,temp__5735__auto____$1,vec__58165,linked_or_unlinked,refs,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58268 = (i__58170 + (1));
i__58170 = G__58268;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58171),athens$devcards$node_page$node_page_el_$_iter__58100_$_iter__58168(cljs.core.chunk_rest(s__58169__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58171),null);
}
} else {
var vec__58199 = cljs.core.first(s__58169__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58199,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58199,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58199,group_title,group,s__58169__$2,temp__5735__auto____$1,vec__58165,linked_or_unlinked,refs,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__58199,group_title,group,s__58169__$2,temp__5735__auto____$1,vec__58165,linked_or_unlinked,refs,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (vec__58199,group_title,group,s__58169__$2,temp__5735__auto____$1,vec__58165,linked_or_unlinked,refs,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58100_$_iter__58168_$_iter__58202(s__58203){
return (new cljs.core.LazySeq(null,(function (){
var s__58203__$1 = s__58203;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58203__$1);
if(temp__5735__auto____$2){
var s__58203__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58203__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58203__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58205 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58204 = (0);
while(true){
if((i__58204 < size__4581__auto__)){
var map__58206 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58204);
var map__58206__$1 = (((((!((map__58206 == null))))?(((((map__58206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58206):map__58206);
var block = map__58206__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58206__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58206__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58205,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58204,map__58206,map__58206__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58205,s__58203__$2,temp__5735__auto____$2,vec__58199,group_title,group,s__58169__$2,temp__5735__auto____$1,vec__58165,linked_or_unlinked,refs,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58100_$_iter__58168_$_iter__58202_$_iter__58208(s__58209){
return (new cljs.core.LazySeq(null,((function (i__58204,map__58206,map__58206__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58205,s__58203__$2,temp__5735__auto____$2,vec__58199,group_title,group,s__58169__$2,temp__5735__auto____$1,vec__58165,linked_or_unlinked,refs,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function (){
var s__58209__$1 = s__58209;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58209__$1);
if(temp__5735__auto____$3){
var s__58209__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58209__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58209__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58211 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58210 = (0);
while(true){
if((i__58210 < size__4581__auto____$1)){
var map__58212 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58210);
var map__58212__$1 = (((((!((map__58212 == null))))?(((((map__58212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58212):map__58212);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58212__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58212__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58212__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58211,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58210,i__58204,map__58212,map__58212__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58211,s__58209__$2,temp__5735__auto____$3,map__58206,map__58206__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58205,s__58203__$2,temp__5735__auto____$2,vec__58199,group_title,group,s__58169__$2,temp__5735__auto____$1,vec__58165,linked_or_unlinked,refs,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58210,i__58204,map__58212,map__58212__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58211,s__58209__$2,temp__5735__auto____$3,map__58206,map__58206__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58205,s__58203__$2,temp__5735__auto____$2,vec__58199,group_title,group,s__58169__$2,temp__5735__auto____$1,vec__58165,linked_or_unlinked,refs,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58269 = (i__58210 + (1));
i__58210 = G__58269;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58211),athens$devcards$node_page$node_page_el_$_iter__58100_$_iter__58168_$_iter__58202_$_iter__58208(cljs.core.chunk_rest(s__58209__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58211),null);
}
} else {
var map__58214 = cljs.core.first(s__58209__$2);
var map__58214__$1 = (((((!((map__58214 == null))))?(((((map__58214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58214):map__58214);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58214__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58214__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58214__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58204,map__58214,map__58214__$1,title__$1,string,uid__$2,s__58209__$2,temp__5735__auto____$3,map__58206,map__58206__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58205,s__58203__$2,temp__5735__auto____$2,vec__58199,group_title,group,s__58169__$2,temp__5735__auto____$1,vec__58165,linked_or_unlinked,refs,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58204,map__58214,map__58214__$1,title__$1,string,uid__$2,s__58209__$2,temp__5735__auto____$3,map__58206,map__58206__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58205,s__58203__$2,temp__5735__auto____$2,vec__58199,group_title,group,s__58169__$2,temp__5735__auto____$1,vec__58165,linked_or_unlinked,refs,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58100_$_iter__58168_$_iter__58202_$_iter__58208(cljs.core.rest(s__58209__$2)));
}
} else {
return null;
}
break;
}
});})(i__58204,map__58206,map__58206__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58205,s__58203__$2,temp__5735__auto____$2,vec__58199,group_title,group,s__58169__$2,temp__5735__auto____$1,vec__58165,linked_or_unlinked,refs,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
,null,null));
});})(i__58204,map__58206,map__58206__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58205,s__58203__$2,temp__5735__auto____$2,vec__58199,group_title,group,s__58169__$2,temp__5735__auto____$1,vec__58165,linked_or_unlinked,refs,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58270 = (i__58204 + (1));
i__58204 = G__58270;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58205),athens$devcards$node_page$node_page_el_$_iter__58100_$_iter__58168_$_iter__58202(cljs.core.chunk_rest(s__58203__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58205),null);
}
} else {
var map__58216 = cljs.core.first(s__58203__$2);
var map__58216__$1 = (((((!((map__58216 == null))))?(((((map__58216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58216):map__58216);
var block = map__58216__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58216__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58216__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (map__58216,map__58216__$1,block,uid__$1,parents,s__58203__$2,temp__5735__auto____$2,vec__58199,group_title,group,s__58169__$2,temp__5735__auto____$1,vec__58165,linked_or_unlinked,refs,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58100_$_iter__58168_$_iter__58202_$_iter__58218(s__58219){
return (new cljs.core.LazySeq(null,(function (){
var s__58219__$1 = s__58219;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58219__$1);
if(temp__5735__auto____$3){
var s__58219__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58219__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58219__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58221 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58220 = (0);
while(true){
if((i__58220 < size__4581__auto__)){
var map__58222 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58220);
var map__58222__$1 = (((((!((map__58222 == null))))?(((((map__58222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58222):map__58222);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58222__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58222__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58222__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58221,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58220,map__58222,map__58222__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58221,s__58219__$2,temp__5735__auto____$3,map__58216,map__58216__$1,block,uid__$1,parents,s__58203__$2,temp__5735__auto____$2,vec__58199,group_title,group,s__58169__$2,temp__5735__auto____$1,vec__58165,linked_or_unlinked,refs,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58220,map__58222,map__58222__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58221,s__58219__$2,temp__5735__auto____$3,map__58216,map__58216__$1,block,uid__$1,parents,s__58203__$2,temp__5735__auto____$2,vec__58199,group_title,group,s__58169__$2,temp__5735__auto____$1,vec__58165,linked_or_unlinked,refs,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58271 = (i__58220 + (1));
i__58220 = G__58271;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58221),athens$devcards$node_page$node_page_el_$_iter__58100_$_iter__58168_$_iter__58202_$_iter__58218(cljs.core.chunk_rest(s__58219__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58221),null);
}
} else {
var map__58224 = cljs.core.first(s__58219__$2);
var map__58224__$1 = (((((!((map__58224 == null))))?(((((map__58224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58224):map__58224);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58224__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58224__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58224__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__58224,map__58224__$1,title__$1,string,uid__$2,s__58219__$2,temp__5735__auto____$3,map__58216,map__58216__$1,block,uid__$1,parents,s__58203__$2,temp__5735__auto____$2,vec__58199,group_title,group,s__58169__$2,temp__5735__auto____$1,vec__58165,linked_or_unlinked,refs,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__58224,map__58224__$1,title__$1,string,uid__$2,s__58219__$2,temp__5735__auto____$3,map__58216,map__58216__$1,block,uid__$1,parents,s__58203__$2,temp__5735__auto____$2,vec__58199,group_title,group,s__58169__$2,temp__5735__auto____$1,vec__58165,linked_or_unlinked,refs,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58100_$_iter__58168_$_iter__58202_$_iter__58218(cljs.core.rest(s__58219__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58216,map__58216__$1,block,uid__$1,parents,s__58203__$2,temp__5735__auto____$2,vec__58199,group_title,group,s__58169__$2,temp__5735__auto____$1,vec__58165,linked_or_unlinked,refs,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__58100_$_iter__58168_$_iter__58202(cljs.core.rest(s__58203__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58199,group_title,group,s__58169__$2,temp__5735__auto____$1,vec__58165,linked_or_unlinked,refs,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__58100_$_iter__58168(cljs.core.rest(s__58169__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58165,linked_or_unlinked,refs,s__58101__$2,temp__5735__auto__,map__58088,map__58088__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null),athens$devcards$node_page$node_page_el_$_iter__58100(cljs.core.rest(s__58101__$2)));
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
var editing_uid = cljs.core.deref((function (){var G__58226 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58226) : re_frame.core.subscribe.call(null,G__58226));
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
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.node_page !== 'undefined') && (typeof athens.devcards.node_page.t_athens$devcards$node_page58227 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.node_page.t_athens$devcards$node_page58227 = (function (meta58228){
this.meta58228 = meta58228;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.node_page.t_athens$devcards$node_page58227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58229,meta58228__$1){
var self__ = this;
var _58229__$1 = this;
return (new athens.devcards.node_page.t_athens$devcards$node_page58227(meta58228__$1));
}));

(athens.devcards.node_page.t_athens$devcards$node_page58227.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58229){
var self__ = this;
var _58229__$1 = this;
return self__.meta58228;
}));

(athens.devcards.node_page.t_athens$devcards$node_page58227.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.node_page.t_athens$devcards$node_page58227.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__41690__auto__,devcard_opts__41691__auto__){
var self__ = this;
var this__41690__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__41691__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__41709__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.node_page.node_page_component,(4093)], null);
if(cljs.core.fn_QMARK_(v__41709__auto__)){
return (function (data_atom__41710__auto__,owner__41711__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__41709__auto__,data_atom__41710__auto__,owner__41711__auto__], null));
});
} else {
return reagent.core.as_element(v__41709__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__41691__auto__))], 0))], 0));
}));

(athens.devcards.node_page.t_athens$devcards$node_page58227.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58228","meta58228",-1281526644,null)], null);
}));

(athens.devcards.node_page.t_athens$devcards$node_page58227.cljs$lang$type = true);

(athens.devcards.node_page.t_athens$devcards$node_page58227.cljs$lang$ctorStr = "athens.devcards.node-page/t_athens$devcards$node_page58227");

(athens.devcards.node_page.t_athens$devcards$node_page58227.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.node-page/t_athens$devcards$node_page58227");
}));

/**
 * Positional factory function for athens.devcards.node-page/t_athens$devcards$node_page58227.
 */
athens.devcards.node_page.__GT_t_athens$devcards$node_page58227 = (function athens$devcards$node_page$__GT_t_athens$devcards$node_page58227(meta58228){
return (new athens.devcards.node_page.t_athens$devcards$node_page58227(meta58228));
});

}

return (new athens.devcards.node_page.t_athens$devcards$node_page58227(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.node_page.js.map
