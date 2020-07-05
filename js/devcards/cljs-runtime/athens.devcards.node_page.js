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
var G__58079 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact-event","transact-event",1188240621),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58079) : re_frame.core.dispatch.call(null,G__58079));
});
athens.devcards.node_page.db_handler = goog.functions.debounce(athens.devcards.node_page.handler,(500));
athens.devcards.node_page.get_ref_ids = (function athens$devcards$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__58080 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__58081 = athens.db.dsdb;
var G__58082 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__58080,G__58081,G__58082) : posh.reagent.q.call(null,G__58080,G__58081,G__58082));
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
athens.devcards.node_page.node_page_el = (function athens$devcards$node_page$node_page_el(p__58083,editing_uid,ref_groups){
var map__58084 = p__58083;
var map__58084__$1 = (((((!((map__58084 == null))))?(((((map__58084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58084):map__58084);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58084__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58084__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58084__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.page_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58086 = e.target.value;
var G__58087 = uid;
return (athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58086,G__58087) : athens.devcards.node_page.db_handler.call(null,G__58086,G__58087));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__58088(s__58089){
return (new cljs.core.LazySeq(null,(function (){
var s__58089__$1 = s__58089;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58089__$1);
if(temp__5735__auto__){
var s__58089__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58089__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58089__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58091 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58090 = (0);
while(true){
if((i__58090 < size__4581__auto__)){
var map__58092 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58090);
var map__58092__$1 = (((((!((map__58092 == null))))?(((((map__58092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58092):map__58092);
var child = map__58092__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58092__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58091,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58246 = (i__58090 + (1));
i__58090 = G__58246;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58091),athens$devcards$node_page$node_page_el_$_iter__58088(cljs.core.chunk_rest(s__58089__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58091),null);
}
} else {
var map__58094 = cljs.core.first(s__58089__$2);
var map__58094__$1 = (((((!((map__58094 == null))))?(((((map__58094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58094):map__58094);
var child = map__58094__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58094__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$devcards$node_page$node_page_el_$_iter__58088(cljs.core.rest(s__58089__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__58096(s__58097){
return (new cljs.core.LazySeq(null,(function (){
var s__58097__$1 = s__58097;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58097__$1);
if(temp__5735__auto__){
var s__58097__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58097__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58097__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58099 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58098 = (0);
while(true){
if((i__58098 < size__4581__auto__)){
var vec__58100 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58098);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58100,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58100,(1),null);
cljs.core.chunk_append(b__58099,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (i__58098,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58096_$_iter__58103(s__58104){
return (new cljs.core.LazySeq(null,((function (i__58098,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function (){
var s__58104__$1 = s__58104;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58104__$1);
if(temp__5735__auto____$1){
var s__58104__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58104__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58104__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58106 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58105 = (0);
while(true){
if((i__58105 < size__4581__auto____$1)){
var vec__58107 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58105);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58107,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58107,(1),null);
cljs.core.chunk_append(b__58106,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58105,i__58098,vec__58107,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58106,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58105,i__58098,vec__58107,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58106,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58105,i__58098,vec__58107,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58106,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58096_$_iter__58103_$_iter__58110(s__58111){
return (new cljs.core.LazySeq(null,((function (i__58105,i__58098,vec__58107,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58106,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function (){
var s__58111__$1 = s__58111;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58111__$1);
if(temp__5735__auto____$2){
var s__58111__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58111__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58111__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58113 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58112 = (0);
while(true){
if((i__58112 < size__4581__auto____$2)){
var map__58114 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58112);
var map__58114__$1 = (((((!((map__58114 == null))))?(((((map__58114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58114):map__58114);
var block = map__58114__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58114__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58114__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58113,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58112,i__58105,i__58098,map__58114,map__58114__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58113,s__58111__$2,temp__5735__auto____$2,vec__58107,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58106,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58096_$_iter__58103_$_iter__58110_$_iter__58116(s__58117){
return (new cljs.core.LazySeq(null,((function (i__58112,i__58105,i__58098,map__58114,map__58114__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58113,s__58111__$2,temp__5735__auto____$2,vec__58107,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58106,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function (){
var s__58117__$1 = s__58117;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58117__$1);
if(temp__5735__auto____$3){
var s__58117__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58117__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58117__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58119 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58118 = (0);
while(true){
if((i__58118 < size__4581__auto____$3)){
var map__58120 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58118);
var map__58120__$1 = (((((!((map__58120 == null))))?(((((map__58120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58120):map__58120);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58120__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58120__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58120__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58119,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58118,i__58112,i__58105,i__58098,map__58120,map__58120__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58119,s__58117__$2,temp__5735__auto____$3,map__58114,map__58114__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58113,s__58111__$2,temp__5735__auto____$2,vec__58107,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58106,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58118,i__58112,i__58105,i__58098,map__58120,map__58120__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58119,s__58117__$2,temp__5735__auto____$3,map__58114,map__58114__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58113,s__58111__$2,temp__5735__auto____$2,vec__58107,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58106,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58253 = (i__58118 + (1));
i__58118 = G__58253;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58119),athens$devcards$node_page$node_page_el_$_iter__58096_$_iter__58103_$_iter__58110_$_iter__58116(cljs.core.chunk_rest(s__58117__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58119),null);
}
} else {
var map__58122 = cljs.core.first(s__58117__$2);
var map__58122__$1 = (((((!((map__58122 == null))))?(((((map__58122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58122):map__58122);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58122__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58122__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58122__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58112,i__58105,i__58098,map__58122,map__58122__$1,title__$1,string,uid__$2,s__58117__$2,temp__5735__auto____$3,map__58114,map__58114__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58113,s__58111__$2,temp__5735__auto____$2,vec__58107,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58106,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58112,i__58105,i__58098,map__58122,map__58122__$1,title__$1,string,uid__$2,s__58117__$2,temp__5735__auto____$3,map__58114,map__58114__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58113,s__58111__$2,temp__5735__auto____$2,vec__58107,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58106,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58096_$_iter__58103_$_iter__58110_$_iter__58116(cljs.core.rest(s__58117__$2)));
}
} else {
return null;
}
break;
}
});})(i__58112,i__58105,i__58098,map__58114,map__58114__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58113,s__58111__$2,temp__5735__auto____$2,vec__58107,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58106,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
,null,null));
});})(i__58112,i__58105,i__58098,map__58114,map__58114__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58113,s__58111__$2,temp__5735__auto____$2,vec__58107,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58106,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58254 = (i__58112 + (1));
i__58112 = G__58254;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58113),athens$devcards$node_page$node_page_el_$_iter__58096_$_iter__58103_$_iter__58110(cljs.core.chunk_rest(s__58111__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58113),null);
}
} else {
var map__58124 = cljs.core.first(s__58111__$2);
var map__58124__$1 = (((((!((map__58124 == null))))?(((((map__58124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58124):map__58124);
var block = map__58124__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58124__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58124__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58105,i__58098,map__58124,map__58124__$1,block,uid__$1,parents,s__58111__$2,temp__5735__auto____$2,vec__58107,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58106,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58096_$_iter__58103_$_iter__58110_$_iter__58126(s__58127){
return (new cljs.core.LazySeq(null,((function (i__58105,i__58098,map__58124,map__58124__$1,block,uid__$1,parents,s__58111__$2,temp__5735__auto____$2,vec__58107,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58106,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function (){
var s__58127__$1 = s__58127;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58127__$1);
if(temp__5735__auto____$3){
var s__58127__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58127__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58127__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58129 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58128 = (0);
while(true){
if((i__58128 < size__4581__auto____$2)){
var map__58130 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58128);
var map__58130__$1 = (((((!((map__58130 == null))))?(((((map__58130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58130):map__58130);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58130__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58130__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58130__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58129,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58128,i__58105,i__58098,map__58130,map__58130__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58129,s__58127__$2,temp__5735__auto____$3,map__58124,map__58124__$1,block,uid__$1,parents,s__58111__$2,temp__5735__auto____$2,vec__58107,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58106,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58128,i__58105,i__58098,map__58130,map__58130__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58129,s__58127__$2,temp__5735__auto____$3,map__58124,map__58124__$1,block,uid__$1,parents,s__58111__$2,temp__5735__auto____$2,vec__58107,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58106,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58255 = (i__58128 + (1));
i__58128 = G__58255;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58129),athens$devcards$node_page$node_page_el_$_iter__58096_$_iter__58103_$_iter__58110_$_iter__58126(cljs.core.chunk_rest(s__58127__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58129),null);
}
} else {
var map__58132 = cljs.core.first(s__58127__$2);
var map__58132__$1 = (((((!((map__58132 == null))))?(((((map__58132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58132):map__58132);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58132__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58132__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58132__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58105,i__58098,map__58132,map__58132__$1,title__$1,string,uid__$2,s__58127__$2,temp__5735__auto____$3,map__58124,map__58124__$1,block,uid__$1,parents,s__58111__$2,temp__5735__auto____$2,vec__58107,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58106,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58105,i__58098,map__58132,map__58132__$1,title__$1,string,uid__$2,s__58127__$2,temp__5735__auto____$3,map__58124,map__58124__$1,block,uid__$1,parents,s__58111__$2,temp__5735__auto____$2,vec__58107,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58106,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58096_$_iter__58103_$_iter__58110_$_iter__58126(cljs.core.rest(s__58127__$2)));
}
} else {
return null;
}
break;
}
});})(i__58105,i__58098,map__58124,map__58124__$1,block,uid__$1,parents,s__58111__$2,temp__5735__auto____$2,vec__58107,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58106,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
,null,null));
});})(i__58105,i__58098,map__58124,map__58124__$1,block,uid__$1,parents,s__58111__$2,temp__5735__auto____$2,vec__58107,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58106,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__58096_$_iter__58103_$_iter__58110(cljs.core.rest(s__58111__$2)));
}
} else {
return null;
}
break;
}
});})(i__58105,i__58098,vec__58107,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58106,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
,null,null));
});})(i__58105,i__58098,vec__58107,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58106,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58256 = (i__58105 + (1));
i__58105 = G__58256;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58106),athens$devcards$node_page$node_page_el_$_iter__58096_$_iter__58103(cljs.core.chunk_rest(s__58104__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58106),null);
}
} else {
var vec__58134 = cljs.core.first(s__58104__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58134,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58134,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58098,vec__58134,group_title,group,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58098,vec__58134,group_title,group,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58098,vec__58134,group_title,group,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58096_$_iter__58103_$_iter__58137(s__58138){
return (new cljs.core.LazySeq(null,((function (i__58098,vec__58134,group_title,group,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function (){
var s__58138__$1 = s__58138;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58138__$1);
if(temp__5735__auto____$2){
var s__58138__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58138__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58138__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58140 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58139 = (0);
while(true){
if((i__58139 < size__4581__auto____$1)){
var map__58141 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58139);
var map__58141__$1 = (((((!((map__58141 == null))))?(((((map__58141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58141):map__58141);
var block = map__58141__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58141__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58141__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58140,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58139,i__58098,map__58141,map__58141__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58140,s__58138__$2,temp__5735__auto____$2,vec__58134,group_title,group,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58096_$_iter__58103_$_iter__58137_$_iter__58143(s__58144){
return (new cljs.core.LazySeq(null,((function (i__58139,i__58098,map__58141,map__58141__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58140,s__58138__$2,temp__5735__auto____$2,vec__58134,group_title,group,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function (){
var s__58144__$1 = s__58144;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58144__$1);
if(temp__5735__auto____$3){
var s__58144__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58144__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58144__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58146 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58145 = (0);
while(true){
if((i__58145 < size__4581__auto____$2)){
var map__58147 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58145);
var map__58147__$1 = (((((!((map__58147 == null))))?(((((map__58147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58147):map__58147);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58147__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58147__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58147__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58146,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58145,i__58139,i__58098,map__58147,map__58147__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58146,s__58144__$2,temp__5735__auto____$3,map__58141,map__58141__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58140,s__58138__$2,temp__5735__auto____$2,vec__58134,group_title,group,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58145,i__58139,i__58098,map__58147,map__58147__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58146,s__58144__$2,temp__5735__auto____$3,map__58141,map__58141__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58140,s__58138__$2,temp__5735__auto____$2,vec__58134,group_title,group,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58257 = (i__58145 + (1));
i__58145 = G__58257;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58146),athens$devcards$node_page$node_page_el_$_iter__58096_$_iter__58103_$_iter__58137_$_iter__58143(cljs.core.chunk_rest(s__58144__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58146),null);
}
} else {
var map__58149 = cljs.core.first(s__58144__$2);
var map__58149__$1 = (((((!((map__58149 == null))))?(((((map__58149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58149):map__58149);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58149__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58149__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58149__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58139,i__58098,map__58149,map__58149__$1,title__$1,string,uid__$2,s__58144__$2,temp__5735__auto____$3,map__58141,map__58141__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58140,s__58138__$2,temp__5735__auto____$2,vec__58134,group_title,group,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58139,i__58098,map__58149,map__58149__$1,title__$1,string,uid__$2,s__58144__$2,temp__5735__auto____$3,map__58141,map__58141__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58140,s__58138__$2,temp__5735__auto____$2,vec__58134,group_title,group,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58096_$_iter__58103_$_iter__58137_$_iter__58143(cljs.core.rest(s__58144__$2)));
}
} else {
return null;
}
break;
}
});})(i__58139,i__58098,map__58141,map__58141__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58140,s__58138__$2,temp__5735__auto____$2,vec__58134,group_title,group,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
,null,null));
});})(i__58139,i__58098,map__58141,map__58141__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58140,s__58138__$2,temp__5735__auto____$2,vec__58134,group_title,group,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58258 = (i__58139 + (1));
i__58139 = G__58258;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58140),athens$devcards$node_page$node_page_el_$_iter__58096_$_iter__58103_$_iter__58137(cljs.core.chunk_rest(s__58138__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58140),null);
}
} else {
var map__58151 = cljs.core.first(s__58138__$2);
var map__58151__$1 = (((((!((map__58151 == null))))?(((((map__58151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58151):map__58151);
var block = map__58151__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58151__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58151__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58098,map__58151,map__58151__$1,block,uid__$1,parents,s__58138__$2,temp__5735__auto____$2,vec__58134,group_title,group,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58096_$_iter__58103_$_iter__58137_$_iter__58153(s__58154){
return (new cljs.core.LazySeq(null,((function (i__58098,map__58151,map__58151__$1,block,uid__$1,parents,s__58138__$2,temp__5735__auto____$2,vec__58134,group_title,group,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function (){
var s__58154__$1 = s__58154;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58154__$1);
if(temp__5735__auto____$3){
var s__58154__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58154__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58154__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58156 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58155 = (0);
while(true){
if((i__58155 < size__4581__auto____$1)){
var map__58157 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58155);
var map__58157__$1 = (((((!((map__58157 == null))))?(((((map__58157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58157):map__58157);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58157__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58157__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58157__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58156,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58155,i__58098,map__58157,map__58157__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58156,s__58154__$2,temp__5735__auto____$3,map__58151,map__58151__$1,block,uid__$1,parents,s__58138__$2,temp__5735__auto____$2,vec__58134,group_title,group,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58155,i__58098,map__58157,map__58157__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58156,s__58154__$2,temp__5735__auto____$3,map__58151,map__58151__$1,block,uid__$1,parents,s__58138__$2,temp__5735__auto____$2,vec__58134,group_title,group,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58259 = (i__58155 + (1));
i__58155 = G__58259;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58156),athens$devcards$node_page$node_page_el_$_iter__58096_$_iter__58103_$_iter__58137_$_iter__58153(cljs.core.chunk_rest(s__58154__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58156),null);
}
} else {
var map__58159 = cljs.core.first(s__58154__$2);
var map__58159__$1 = (((((!((map__58159 == null))))?(((((map__58159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58159):map__58159);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58159__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58159__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58159__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58098,map__58159,map__58159__$1,title__$1,string,uid__$2,s__58154__$2,temp__5735__auto____$3,map__58151,map__58151__$1,block,uid__$1,parents,s__58138__$2,temp__5735__auto____$2,vec__58134,group_title,group,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58098,map__58159,map__58159__$1,title__$1,string,uid__$2,s__58154__$2,temp__5735__auto____$3,map__58151,map__58151__$1,block,uid__$1,parents,s__58138__$2,temp__5735__auto____$2,vec__58134,group_title,group,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58096_$_iter__58103_$_iter__58137_$_iter__58153(cljs.core.rest(s__58154__$2)));
}
} else {
return null;
}
break;
}
});})(i__58098,map__58151,map__58151__$1,block,uid__$1,parents,s__58138__$2,temp__5735__auto____$2,vec__58134,group_title,group,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
,null,null));
});})(i__58098,map__58151,map__58151__$1,block,uid__$1,parents,s__58138__$2,temp__5735__auto____$2,vec__58134,group_title,group,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__58096_$_iter__58103_$_iter__58137(cljs.core.rest(s__58138__$2)));
}
} else {
return null;
}
break;
}
});})(i__58098,vec__58134,group_title,group,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
,null,null));
});})(i__58098,vec__58134,group_title,group,s__58104__$2,temp__5735__auto____$1,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__58096_$_iter__58103(cljs.core.rest(s__58104__$2)));
}
} else {
return null;
}
break;
}
});})(i__58098,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
,null,null));
});})(i__58098,vec__58100,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58099,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null));

var G__58260 = (i__58098 + (1));
i__58098 = G__58260;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58099),athens$devcards$node_page$node_page_el_$_iter__58096(cljs.core.chunk_rest(s__58097__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58099),null);
}
} else {
var vec__58161 = cljs.core.first(s__58097__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58161,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58161,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (vec__58161,linked_or_unlinked,refs,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58096_$_iter__58164(s__58165){
return (new cljs.core.LazySeq(null,(function (){
var s__58165__$1 = s__58165;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58165__$1);
if(temp__5735__auto____$1){
var s__58165__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58165__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58165__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58167 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58166 = (0);
while(true){
if((i__58166 < size__4581__auto__)){
var vec__58168 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58166);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58168,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58168,(1),null);
cljs.core.chunk_append(b__58167,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58166,vec__58168,group_title,group,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto____$1,vec__58161,linked_or_unlinked,refs,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58166,vec__58168,group_title,group,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto____$1,vec__58161,linked_or_unlinked,refs,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58166,vec__58168,group_title,group,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto____$1,vec__58161,linked_or_unlinked,refs,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58096_$_iter__58164_$_iter__58171(s__58172){
return (new cljs.core.LazySeq(null,((function (i__58166,vec__58168,group_title,group,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto____$1,vec__58161,linked_or_unlinked,refs,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function (){
var s__58172__$1 = s__58172;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58172__$1);
if(temp__5735__auto____$2){
var s__58172__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58172__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58172__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58174 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58173 = (0);
while(true){
if((i__58173 < size__4581__auto____$1)){
var map__58175 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58173);
var map__58175__$1 = (((((!((map__58175 == null))))?(((((map__58175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58175):map__58175);
var block = map__58175__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58175__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58175__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58174,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58173,i__58166,map__58175,map__58175__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58174,s__58172__$2,temp__5735__auto____$2,vec__58168,group_title,group,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto____$1,vec__58161,linked_or_unlinked,refs,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58096_$_iter__58164_$_iter__58171_$_iter__58177(s__58178){
return (new cljs.core.LazySeq(null,((function (i__58173,i__58166,map__58175,map__58175__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58174,s__58172__$2,temp__5735__auto____$2,vec__58168,group_title,group,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto____$1,vec__58161,linked_or_unlinked,refs,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function (){
var s__58178__$1 = s__58178;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58178__$1);
if(temp__5735__auto____$3){
var s__58178__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58178__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58178__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58180 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58179 = (0);
while(true){
if((i__58179 < size__4581__auto____$2)){
var map__58181 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58179);
var map__58181__$1 = (((((!((map__58181 == null))))?(((((map__58181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58181):map__58181);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58181__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58181__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58181__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58180,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58179,i__58173,i__58166,map__58181,map__58181__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58180,s__58178__$2,temp__5735__auto____$3,map__58175,map__58175__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58174,s__58172__$2,temp__5735__auto____$2,vec__58168,group_title,group,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto____$1,vec__58161,linked_or_unlinked,refs,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58179,i__58173,i__58166,map__58181,map__58181__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58180,s__58178__$2,temp__5735__auto____$3,map__58175,map__58175__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58174,s__58172__$2,temp__5735__auto____$2,vec__58168,group_title,group,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto____$1,vec__58161,linked_or_unlinked,refs,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58261 = (i__58179 + (1));
i__58179 = G__58261;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58180),athens$devcards$node_page$node_page_el_$_iter__58096_$_iter__58164_$_iter__58171_$_iter__58177(cljs.core.chunk_rest(s__58178__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58180),null);
}
} else {
var map__58183 = cljs.core.first(s__58178__$2);
var map__58183__$1 = (((((!((map__58183 == null))))?(((((map__58183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58183):map__58183);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58183__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58183__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58183__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58173,i__58166,map__58183,map__58183__$1,title__$1,string,uid__$2,s__58178__$2,temp__5735__auto____$3,map__58175,map__58175__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58174,s__58172__$2,temp__5735__auto____$2,vec__58168,group_title,group,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto____$1,vec__58161,linked_or_unlinked,refs,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58173,i__58166,map__58183,map__58183__$1,title__$1,string,uid__$2,s__58178__$2,temp__5735__auto____$3,map__58175,map__58175__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58174,s__58172__$2,temp__5735__auto____$2,vec__58168,group_title,group,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto____$1,vec__58161,linked_or_unlinked,refs,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58096_$_iter__58164_$_iter__58171_$_iter__58177(cljs.core.rest(s__58178__$2)));
}
} else {
return null;
}
break;
}
});})(i__58173,i__58166,map__58175,map__58175__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58174,s__58172__$2,temp__5735__auto____$2,vec__58168,group_title,group,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto____$1,vec__58161,linked_or_unlinked,refs,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
,null,null));
});})(i__58173,i__58166,map__58175,map__58175__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58174,s__58172__$2,temp__5735__auto____$2,vec__58168,group_title,group,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto____$1,vec__58161,linked_or_unlinked,refs,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58262 = (i__58173 + (1));
i__58173 = G__58262;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58174),athens$devcards$node_page$node_page_el_$_iter__58096_$_iter__58164_$_iter__58171(cljs.core.chunk_rest(s__58172__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58174),null);
}
} else {
var map__58185 = cljs.core.first(s__58172__$2);
var map__58185__$1 = (((((!((map__58185 == null))))?(((((map__58185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58185):map__58185);
var block = map__58185__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58185__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58185__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58166,map__58185,map__58185__$1,block,uid__$1,parents,s__58172__$2,temp__5735__auto____$2,vec__58168,group_title,group,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto____$1,vec__58161,linked_or_unlinked,refs,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58096_$_iter__58164_$_iter__58171_$_iter__58187(s__58188){
return (new cljs.core.LazySeq(null,((function (i__58166,map__58185,map__58185__$1,block,uid__$1,parents,s__58172__$2,temp__5735__auto____$2,vec__58168,group_title,group,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto____$1,vec__58161,linked_or_unlinked,refs,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function (){
var s__58188__$1 = s__58188;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58188__$1);
if(temp__5735__auto____$3){
var s__58188__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58188__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58188__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58190 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58189 = (0);
while(true){
if((i__58189 < size__4581__auto____$1)){
var map__58191 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58189);
var map__58191__$1 = (((((!((map__58191 == null))))?(((((map__58191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58191):map__58191);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58191__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58191__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58191__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58190,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58189,i__58166,map__58191,map__58191__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58190,s__58188__$2,temp__5735__auto____$3,map__58185,map__58185__$1,block,uid__$1,parents,s__58172__$2,temp__5735__auto____$2,vec__58168,group_title,group,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto____$1,vec__58161,linked_or_unlinked,refs,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58189,i__58166,map__58191,map__58191__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58190,s__58188__$2,temp__5735__auto____$3,map__58185,map__58185__$1,block,uid__$1,parents,s__58172__$2,temp__5735__auto____$2,vec__58168,group_title,group,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto____$1,vec__58161,linked_or_unlinked,refs,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58263 = (i__58189 + (1));
i__58189 = G__58263;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58190),athens$devcards$node_page$node_page_el_$_iter__58096_$_iter__58164_$_iter__58171_$_iter__58187(cljs.core.chunk_rest(s__58188__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58190),null);
}
} else {
var map__58193 = cljs.core.first(s__58188__$2);
var map__58193__$1 = (((((!((map__58193 == null))))?(((((map__58193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58193):map__58193);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58193__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58193__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58193__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58166,map__58193,map__58193__$1,title__$1,string,uid__$2,s__58188__$2,temp__5735__auto____$3,map__58185,map__58185__$1,block,uid__$1,parents,s__58172__$2,temp__5735__auto____$2,vec__58168,group_title,group,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto____$1,vec__58161,linked_or_unlinked,refs,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58166,map__58193,map__58193__$1,title__$1,string,uid__$2,s__58188__$2,temp__5735__auto____$3,map__58185,map__58185__$1,block,uid__$1,parents,s__58172__$2,temp__5735__auto____$2,vec__58168,group_title,group,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto____$1,vec__58161,linked_or_unlinked,refs,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58096_$_iter__58164_$_iter__58171_$_iter__58187(cljs.core.rest(s__58188__$2)));
}
} else {
return null;
}
break;
}
});})(i__58166,map__58185,map__58185__$1,block,uid__$1,parents,s__58172__$2,temp__5735__auto____$2,vec__58168,group_title,group,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto____$1,vec__58161,linked_or_unlinked,refs,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
,null,null));
});})(i__58166,map__58185,map__58185__$1,block,uid__$1,parents,s__58172__$2,temp__5735__auto____$2,vec__58168,group_title,group,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto____$1,vec__58161,linked_or_unlinked,refs,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__58096_$_iter__58164_$_iter__58171(cljs.core.rest(s__58172__$2)));
}
} else {
return null;
}
break;
}
});})(i__58166,vec__58168,group_title,group,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto____$1,vec__58161,linked_or_unlinked,refs,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
,null,null));
});})(i__58166,vec__58168,group_title,group,c__4580__auto__,size__4581__auto__,b__58167,s__58165__$2,temp__5735__auto____$1,vec__58161,linked_or_unlinked,refs,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58264 = (i__58166 + (1));
i__58166 = G__58264;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58167),athens$devcards$node_page$node_page_el_$_iter__58096_$_iter__58164(cljs.core.chunk_rest(s__58165__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58167),null);
}
} else {
var vec__58195 = cljs.core.first(s__58165__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58195,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58195,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58195,group_title,group,s__58165__$2,temp__5735__auto____$1,vec__58161,linked_or_unlinked,refs,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__58195,group_title,group,s__58165__$2,temp__5735__auto____$1,vec__58161,linked_or_unlinked,refs,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (vec__58195,group_title,group,s__58165__$2,temp__5735__auto____$1,vec__58161,linked_or_unlinked,refs,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58096_$_iter__58164_$_iter__58198(s__58199){
return (new cljs.core.LazySeq(null,(function (){
var s__58199__$1 = s__58199;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58199__$1);
if(temp__5735__auto____$2){
var s__58199__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58199__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58199__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58201 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58200 = (0);
while(true){
if((i__58200 < size__4581__auto__)){
var map__58202 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58200);
var map__58202__$1 = (((((!((map__58202 == null))))?(((((map__58202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58202):map__58202);
var block = map__58202__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58202__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58202__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58201,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58200,map__58202,map__58202__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58201,s__58199__$2,temp__5735__auto____$2,vec__58195,group_title,group,s__58165__$2,temp__5735__auto____$1,vec__58161,linked_or_unlinked,refs,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58096_$_iter__58164_$_iter__58198_$_iter__58204(s__58205){
return (new cljs.core.LazySeq(null,((function (i__58200,map__58202,map__58202__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58201,s__58199__$2,temp__5735__auto____$2,vec__58195,group_title,group,s__58165__$2,temp__5735__auto____$1,vec__58161,linked_or_unlinked,refs,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function (){
var s__58205__$1 = s__58205;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58205__$1);
if(temp__5735__auto____$3){
var s__58205__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58205__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58205__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58207 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58206 = (0);
while(true){
if((i__58206 < size__4581__auto____$1)){
var map__58208 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58206);
var map__58208__$1 = (((((!((map__58208 == null))))?(((((map__58208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58208):map__58208);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58208__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58208__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58208__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58207,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58206,i__58200,map__58208,map__58208__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58207,s__58205__$2,temp__5735__auto____$3,map__58202,map__58202__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58201,s__58199__$2,temp__5735__auto____$2,vec__58195,group_title,group,s__58165__$2,temp__5735__auto____$1,vec__58161,linked_or_unlinked,refs,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58206,i__58200,map__58208,map__58208__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58207,s__58205__$2,temp__5735__auto____$3,map__58202,map__58202__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58201,s__58199__$2,temp__5735__auto____$2,vec__58195,group_title,group,s__58165__$2,temp__5735__auto____$1,vec__58161,linked_or_unlinked,refs,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58265 = (i__58206 + (1));
i__58206 = G__58265;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58207),athens$devcards$node_page$node_page_el_$_iter__58096_$_iter__58164_$_iter__58198_$_iter__58204(cljs.core.chunk_rest(s__58205__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58207),null);
}
} else {
var map__58210 = cljs.core.first(s__58205__$2);
var map__58210__$1 = (((((!((map__58210 == null))))?(((((map__58210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58210):map__58210);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58210__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58210__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58210__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58200,map__58210,map__58210__$1,title__$1,string,uid__$2,s__58205__$2,temp__5735__auto____$3,map__58202,map__58202__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58201,s__58199__$2,temp__5735__auto____$2,vec__58195,group_title,group,s__58165__$2,temp__5735__auto____$1,vec__58161,linked_or_unlinked,refs,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58200,map__58210,map__58210__$1,title__$1,string,uid__$2,s__58205__$2,temp__5735__auto____$3,map__58202,map__58202__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58201,s__58199__$2,temp__5735__auto____$2,vec__58195,group_title,group,s__58165__$2,temp__5735__auto____$1,vec__58161,linked_or_unlinked,refs,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58096_$_iter__58164_$_iter__58198_$_iter__58204(cljs.core.rest(s__58205__$2)));
}
} else {
return null;
}
break;
}
});})(i__58200,map__58202,map__58202__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58201,s__58199__$2,temp__5735__auto____$2,vec__58195,group_title,group,s__58165__$2,temp__5735__auto____$1,vec__58161,linked_or_unlinked,refs,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
,null,null));
});})(i__58200,map__58202,map__58202__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58201,s__58199__$2,temp__5735__auto____$2,vec__58195,group_title,group,s__58165__$2,temp__5735__auto____$1,vec__58161,linked_or_unlinked,refs,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58266 = (i__58200 + (1));
i__58200 = G__58266;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58201),athens$devcards$node_page$node_page_el_$_iter__58096_$_iter__58164_$_iter__58198(cljs.core.chunk_rest(s__58199__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58201),null);
}
} else {
var map__58212 = cljs.core.first(s__58199__$2);
var map__58212__$1 = (((((!((map__58212 == null))))?(((((map__58212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58212):map__58212);
var block = map__58212__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58212__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58212__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (map__58212,map__58212__$1,block,uid__$1,parents,s__58199__$2,temp__5735__auto____$2,vec__58195,group_title,group,s__58165__$2,temp__5735__auto____$1,vec__58161,linked_or_unlinked,refs,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58096_$_iter__58164_$_iter__58198_$_iter__58214(s__58215){
return (new cljs.core.LazySeq(null,(function (){
var s__58215__$1 = s__58215;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58215__$1);
if(temp__5735__auto____$3){
var s__58215__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58215__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58215__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58217 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58216 = (0);
while(true){
if((i__58216 < size__4581__auto__)){
var map__58218 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58216);
var map__58218__$1 = (((((!((map__58218 == null))))?(((((map__58218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58218):map__58218);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58218__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58218__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58218__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58217,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58216,map__58218,map__58218__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58217,s__58215__$2,temp__5735__auto____$3,map__58212,map__58212__$1,block,uid__$1,parents,s__58199__$2,temp__5735__auto____$2,vec__58195,group_title,group,s__58165__$2,temp__5735__auto____$1,vec__58161,linked_or_unlinked,refs,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58216,map__58218,map__58218__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58217,s__58215__$2,temp__5735__auto____$3,map__58212,map__58212__$1,block,uid__$1,parents,s__58199__$2,temp__5735__auto____$2,vec__58195,group_title,group,s__58165__$2,temp__5735__auto____$1,vec__58161,linked_or_unlinked,refs,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58267 = (i__58216 + (1));
i__58216 = G__58267;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58217),athens$devcards$node_page$node_page_el_$_iter__58096_$_iter__58164_$_iter__58198_$_iter__58214(cljs.core.chunk_rest(s__58215__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58217),null);
}
} else {
var map__58220 = cljs.core.first(s__58215__$2);
var map__58220__$1 = (((((!((map__58220 == null))))?(((((map__58220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58220):map__58220);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58220__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58220__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58220__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__58220,map__58220__$1,title__$1,string,uid__$2,s__58215__$2,temp__5735__auto____$3,map__58212,map__58212__$1,block,uid__$1,parents,s__58199__$2,temp__5735__auto____$2,vec__58195,group_title,group,s__58165__$2,temp__5735__auto____$1,vec__58161,linked_or_unlinked,refs,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__58220,map__58220__$1,title__$1,string,uid__$2,s__58215__$2,temp__5735__auto____$3,map__58212,map__58212__$1,block,uid__$1,parents,s__58199__$2,temp__5735__auto____$2,vec__58195,group_title,group,s__58165__$2,temp__5735__auto____$1,vec__58161,linked_or_unlinked,refs,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58096_$_iter__58164_$_iter__58198_$_iter__58214(cljs.core.rest(s__58215__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58212,map__58212__$1,block,uid__$1,parents,s__58199__$2,temp__5735__auto____$2,vec__58195,group_title,group,s__58165__$2,temp__5735__auto____$1,vec__58161,linked_or_unlinked,refs,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__58096_$_iter__58164_$_iter__58198(cljs.core.rest(s__58199__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58195,group_title,group,s__58165__$2,temp__5735__auto____$1,vec__58161,linked_or_unlinked,refs,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__58096_$_iter__58164(cljs.core.rest(s__58165__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58161,linked_or_unlinked,refs,s__58097__$2,temp__5735__auto__,map__58084,map__58084__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null),athens$devcards$node_page$node_page_el_$_iter__58096(cljs.core.rest(s__58097__$2)));
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
var editing_uid = cljs.core.deref((function (){var G__58222 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58222) : re_frame.core.subscribe.call(null,G__58222));
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
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.node_page !== 'undefined') && (typeof athens.devcards.node_page.t_athens$devcards$node_page58223 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.node_page.t_athens$devcards$node_page58223 = (function (meta58224){
this.meta58224 = meta58224;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.node_page.t_athens$devcards$node_page58223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58225,meta58224__$1){
var self__ = this;
var _58225__$1 = this;
return (new athens.devcards.node_page.t_athens$devcards$node_page58223(meta58224__$1));
}));

(athens.devcards.node_page.t_athens$devcards$node_page58223.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58225){
var self__ = this;
var _58225__$1 = this;
return self__.meta58224;
}));

(athens.devcards.node_page.t_athens$devcards$node_page58223.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.node_page.t_athens$devcards$node_page58223.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__41676__auto__,devcard_opts__41677__auto__){
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

(athens.devcards.node_page.t_athens$devcards$node_page58223.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58224","meta58224",-1926172212,null)], null);
}));

(athens.devcards.node_page.t_athens$devcards$node_page58223.cljs$lang$type = true);

(athens.devcards.node_page.t_athens$devcards$node_page58223.cljs$lang$ctorStr = "athens.devcards.node-page/t_athens$devcards$node_page58223");

(athens.devcards.node_page.t_athens$devcards$node_page58223.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.node-page/t_athens$devcards$node_page58223");
}));

/**
 * Positional factory function for athens.devcards.node-page/t_athens$devcards$node_page58223.
 */
athens.devcards.node_page.__GT_t_athens$devcards$node_page58223 = (function athens$devcards$node_page$__GT_t_athens$devcards$node_page58223(meta58224){
return (new athens.devcards.node_page.t_athens$devcards$node_page58223(meta58224));
});

}

return (new athens.devcards.node_page.t_athens$devcards$node_page58223(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.node_page.js.map
