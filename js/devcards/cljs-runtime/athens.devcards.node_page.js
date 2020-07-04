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
var G__58052 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact-event","transact-event",1188240621),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58052) : re_frame.core.dispatch.call(null,G__58052));
});
athens.devcards.node_page.db_handler = goog.functions.debounce(athens.devcards.node_page.handler,(500));
athens.devcards.node_page.get_ref_ids = (function athens$devcards$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__58053 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__58054 = athens.db.dsdb;
var G__58055 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__58053,G__58054,G__58055) : posh.reagent.q.call(null,G__58053,G__58054,G__58055));
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
athens.devcards.node_page.node_page_el = (function athens$devcards$node_page$node_page_el(p__58056,editing_uid,ref_groups){
var map__58057 = p__58056;
var map__58057__$1 = (((((!((map__58057 == null))))?(((((map__58057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58057):map__58057);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58057__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58057__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58057__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58059 = e.target.value;
var G__58060 = uid;
return (athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58059,G__58060) : athens.devcards.node_page.db_handler.call(null,G__58059,G__58060));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__58061(s__58062){
return (new cljs.core.LazySeq(null,(function (){
var s__58062__$1 = s__58062;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58062__$1);
if(temp__5735__auto__){
var s__58062__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58062__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58062__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58064 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58063 = (0);
while(true){
if((i__58063 < size__4581__auto__)){
var map__58065 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58063);
var map__58065__$1 = (((((!((map__58065 == null))))?(((((map__58065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58065):map__58065);
var child = map__58065__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58065__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58064,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58219 = (i__58063 + (1));
i__58063 = G__58219;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58064),athens$devcards$node_page$node_page_el_$_iter__58061(cljs.core.chunk_rest(s__58062__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58064),null);
}
} else {
var map__58067 = cljs.core.first(s__58062__$2);
var map__58067__$1 = (((((!((map__58067 == null))))?(((((map__58067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58067):map__58067);
var child = map__58067__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58067__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$devcards$node_page$node_page_el_$_iter__58061(cljs.core.rest(s__58062__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__58069(s__58070){
return (new cljs.core.LazySeq(null,(function (){
var s__58070__$1 = s__58070;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58070__$1);
if(temp__5735__auto__){
var s__58070__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58070__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58070__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58072 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58071 = (0);
while(true){
if((i__58071 < size__4581__auto__)){
var vec__58073 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58071);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58073,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58073,(1),null);
cljs.core.chunk_append(b__58072,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (i__58071,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58069_$_iter__58076(s__58077){
return (new cljs.core.LazySeq(null,((function (i__58071,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function (){
var s__58077__$1 = s__58077;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58077__$1);
if(temp__5735__auto____$1){
var s__58077__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58077__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58077__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58079 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58078 = (0);
while(true){
if((i__58078 < size__4581__auto____$1)){
var vec__58080 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58078);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58080,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58080,(1),null);
cljs.core.chunk_append(b__58079,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58078,i__58071,vec__58080,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58079,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58078,i__58071,vec__58080,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58079,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58078,i__58071,vec__58080,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58079,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58069_$_iter__58076_$_iter__58083(s__58084){
return (new cljs.core.LazySeq(null,((function (i__58078,i__58071,vec__58080,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58079,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function (){
var s__58084__$1 = s__58084;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58084__$1);
if(temp__5735__auto____$2){
var s__58084__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58084__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58084__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58086 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58085 = (0);
while(true){
if((i__58085 < size__4581__auto____$2)){
var map__58087 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58085);
var map__58087__$1 = (((((!((map__58087 == null))))?(((((map__58087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58087):map__58087);
var block = map__58087__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58087__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58087__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58086,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58085,i__58078,i__58071,map__58087,map__58087__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58086,s__58084__$2,temp__5735__auto____$2,vec__58080,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58079,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58069_$_iter__58076_$_iter__58083_$_iter__58089(s__58090){
return (new cljs.core.LazySeq(null,((function (i__58085,i__58078,i__58071,map__58087,map__58087__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58086,s__58084__$2,temp__5735__auto____$2,vec__58080,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58079,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function (){
var s__58090__$1 = s__58090;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58090__$1);
if(temp__5735__auto____$3){
var s__58090__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58090__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58090__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58092 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58091 = (0);
while(true){
if((i__58091 < size__4581__auto____$3)){
var map__58093 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58091);
var map__58093__$1 = (((((!((map__58093 == null))))?(((((map__58093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58093):map__58093);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58093__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58093__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58093__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58092,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58091,i__58085,i__58078,i__58071,map__58093,map__58093__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58092,s__58090__$2,temp__5735__auto____$3,map__58087,map__58087__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58086,s__58084__$2,temp__5735__auto____$2,vec__58080,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58079,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58091,i__58085,i__58078,i__58071,map__58093,map__58093__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58092,s__58090__$2,temp__5735__auto____$3,map__58087,map__58087__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58086,s__58084__$2,temp__5735__auto____$2,vec__58080,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58079,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58223 = (i__58091 + (1));
i__58091 = G__58223;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58092),athens$devcards$node_page$node_page_el_$_iter__58069_$_iter__58076_$_iter__58083_$_iter__58089(cljs.core.chunk_rest(s__58090__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58092),null);
}
} else {
var map__58095 = cljs.core.first(s__58090__$2);
var map__58095__$1 = (((((!((map__58095 == null))))?(((((map__58095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58095):map__58095);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58095__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58095__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58095__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58085,i__58078,i__58071,map__58095,map__58095__$1,title__$1,string,uid__$2,s__58090__$2,temp__5735__auto____$3,map__58087,map__58087__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58086,s__58084__$2,temp__5735__auto____$2,vec__58080,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58079,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58085,i__58078,i__58071,map__58095,map__58095__$1,title__$1,string,uid__$2,s__58090__$2,temp__5735__auto____$3,map__58087,map__58087__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58086,s__58084__$2,temp__5735__auto____$2,vec__58080,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58079,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58069_$_iter__58076_$_iter__58083_$_iter__58089(cljs.core.rest(s__58090__$2)));
}
} else {
return null;
}
break;
}
});})(i__58085,i__58078,i__58071,map__58087,map__58087__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58086,s__58084__$2,temp__5735__auto____$2,vec__58080,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58079,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
,null,null));
});})(i__58085,i__58078,i__58071,map__58087,map__58087__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58086,s__58084__$2,temp__5735__auto____$2,vec__58080,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58079,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58224 = (i__58085 + (1));
i__58085 = G__58224;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58086),athens$devcards$node_page$node_page_el_$_iter__58069_$_iter__58076_$_iter__58083(cljs.core.chunk_rest(s__58084__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58086),null);
}
} else {
var map__58097 = cljs.core.first(s__58084__$2);
var map__58097__$1 = (((((!((map__58097 == null))))?(((((map__58097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58097):map__58097);
var block = map__58097__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58097__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58097__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58078,i__58071,map__58097,map__58097__$1,block,uid__$1,parents,s__58084__$2,temp__5735__auto____$2,vec__58080,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58079,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58069_$_iter__58076_$_iter__58083_$_iter__58099(s__58100){
return (new cljs.core.LazySeq(null,((function (i__58078,i__58071,map__58097,map__58097__$1,block,uid__$1,parents,s__58084__$2,temp__5735__auto____$2,vec__58080,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58079,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function (){
var s__58100__$1 = s__58100;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58100__$1);
if(temp__5735__auto____$3){
var s__58100__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58100__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58100__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58102 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58101 = (0);
while(true){
if((i__58101 < size__4581__auto____$2)){
var map__58103 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58101);
var map__58103__$1 = (((((!((map__58103 == null))))?(((((map__58103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58103):map__58103);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58103__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58103__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58103__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58102,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58101,i__58078,i__58071,map__58103,map__58103__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58102,s__58100__$2,temp__5735__auto____$3,map__58097,map__58097__$1,block,uid__$1,parents,s__58084__$2,temp__5735__auto____$2,vec__58080,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58079,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58101,i__58078,i__58071,map__58103,map__58103__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58102,s__58100__$2,temp__5735__auto____$3,map__58097,map__58097__$1,block,uid__$1,parents,s__58084__$2,temp__5735__auto____$2,vec__58080,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58079,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58225 = (i__58101 + (1));
i__58101 = G__58225;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58102),athens$devcards$node_page$node_page_el_$_iter__58069_$_iter__58076_$_iter__58083_$_iter__58099(cljs.core.chunk_rest(s__58100__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58102),null);
}
} else {
var map__58105 = cljs.core.first(s__58100__$2);
var map__58105__$1 = (((((!((map__58105 == null))))?(((((map__58105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58105):map__58105);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58105__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58105__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58105__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58078,i__58071,map__58105,map__58105__$1,title__$1,string,uid__$2,s__58100__$2,temp__5735__auto____$3,map__58097,map__58097__$1,block,uid__$1,parents,s__58084__$2,temp__5735__auto____$2,vec__58080,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58079,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58078,i__58071,map__58105,map__58105__$1,title__$1,string,uid__$2,s__58100__$2,temp__5735__auto____$3,map__58097,map__58097__$1,block,uid__$1,parents,s__58084__$2,temp__5735__auto____$2,vec__58080,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58079,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58069_$_iter__58076_$_iter__58083_$_iter__58099(cljs.core.rest(s__58100__$2)));
}
} else {
return null;
}
break;
}
});})(i__58078,i__58071,map__58097,map__58097__$1,block,uid__$1,parents,s__58084__$2,temp__5735__auto____$2,vec__58080,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58079,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
,null,null));
});})(i__58078,i__58071,map__58097,map__58097__$1,block,uid__$1,parents,s__58084__$2,temp__5735__auto____$2,vec__58080,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58079,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__58069_$_iter__58076_$_iter__58083(cljs.core.rest(s__58084__$2)));
}
} else {
return null;
}
break;
}
});})(i__58078,i__58071,vec__58080,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58079,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
,null,null));
});})(i__58078,i__58071,vec__58080,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58079,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58226 = (i__58078 + (1));
i__58078 = G__58226;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58079),athens$devcards$node_page$node_page_el_$_iter__58069_$_iter__58076(cljs.core.chunk_rest(s__58077__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58079),null);
}
} else {
var vec__58107 = cljs.core.first(s__58077__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58107,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58107,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58071,vec__58107,group_title,group,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58071,vec__58107,group_title,group,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58071,vec__58107,group_title,group,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58069_$_iter__58076_$_iter__58110(s__58111){
return (new cljs.core.LazySeq(null,((function (i__58071,vec__58107,group_title,group,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function (){
var s__58111__$1 = s__58111;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58111__$1);
if(temp__5735__auto____$2){
var s__58111__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58111__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58111__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58113 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58112 = (0);
while(true){
if((i__58112 < size__4581__auto____$1)){
var map__58114 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58112);
var map__58114__$1 = (((((!((map__58114 == null))))?(((((map__58114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58114):map__58114);
var block = map__58114__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58114__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58114__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58113,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58112,i__58071,map__58114,map__58114__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58113,s__58111__$2,temp__5735__auto____$2,vec__58107,group_title,group,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58069_$_iter__58076_$_iter__58110_$_iter__58116(s__58117){
return (new cljs.core.LazySeq(null,((function (i__58112,i__58071,map__58114,map__58114__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58113,s__58111__$2,temp__5735__auto____$2,vec__58107,group_title,group,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function (){
var s__58117__$1 = s__58117;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58117__$1);
if(temp__5735__auto____$3){
var s__58117__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58117__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58117__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58119 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58118 = (0);
while(true){
if((i__58118 < size__4581__auto____$2)){
var map__58120 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58118);
var map__58120__$1 = (((((!((map__58120 == null))))?(((((map__58120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58120):map__58120);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58120__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58120__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58120__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58119,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58118,i__58112,i__58071,map__58120,map__58120__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58119,s__58117__$2,temp__5735__auto____$3,map__58114,map__58114__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58113,s__58111__$2,temp__5735__auto____$2,vec__58107,group_title,group,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58118,i__58112,i__58071,map__58120,map__58120__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58119,s__58117__$2,temp__5735__auto____$3,map__58114,map__58114__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58113,s__58111__$2,temp__5735__auto____$2,vec__58107,group_title,group,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58227 = (i__58118 + (1));
i__58118 = G__58227;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58119),athens$devcards$node_page$node_page_el_$_iter__58069_$_iter__58076_$_iter__58110_$_iter__58116(cljs.core.chunk_rest(s__58117__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58119),null);
}
} else {
var map__58122 = cljs.core.first(s__58117__$2);
var map__58122__$1 = (((((!((map__58122 == null))))?(((((map__58122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58122):map__58122);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58122__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58122__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58122__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58112,i__58071,map__58122,map__58122__$1,title__$1,string,uid__$2,s__58117__$2,temp__5735__auto____$3,map__58114,map__58114__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58113,s__58111__$2,temp__5735__auto____$2,vec__58107,group_title,group,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58112,i__58071,map__58122,map__58122__$1,title__$1,string,uid__$2,s__58117__$2,temp__5735__auto____$3,map__58114,map__58114__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58113,s__58111__$2,temp__5735__auto____$2,vec__58107,group_title,group,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58069_$_iter__58076_$_iter__58110_$_iter__58116(cljs.core.rest(s__58117__$2)));
}
} else {
return null;
}
break;
}
});})(i__58112,i__58071,map__58114,map__58114__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58113,s__58111__$2,temp__5735__auto____$2,vec__58107,group_title,group,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
,null,null));
});})(i__58112,i__58071,map__58114,map__58114__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58113,s__58111__$2,temp__5735__auto____$2,vec__58107,group_title,group,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58228 = (i__58112 + (1));
i__58112 = G__58228;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58113),athens$devcards$node_page$node_page_el_$_iter__58069_$_iter__58076_$_iter__58110(cljs.core.chunk_rest(s__58111__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58113),null);
}
} else {
var map__58124 = cljs.core.first(s__58111__$2);
var map__58124__$1 = (((((!((map__58124 == null))))?(((((map__58124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58124):map__58124);
var block = map__58124__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58124__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58124__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58071,map__58124,map__58124__$1,block,uid__$1,parents,s__58111__$2,temp__5735__auto____$2,vec__58107,group_title,group,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58069_$_iter__58076_$_iter__58110_$_iter__58126(s__58127){
return (new cljs.core.LazySeq(null,((function (i__58071,map__58124,map__58124__$1,block,uid__$1,parents,s__58111__$2,temp__5735__auto____$2,vec__58107,group_title,group,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function (){
var s__58127__$1 = s__58127;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58127__$1);
if(temp__5735__auto____$3){
var s__58127__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58127__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58127__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58129 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58128 = (0);
while(true){
if((i__58128 < size__4581__auto____$1)){
var map__58130 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58128);
var map__58130__$1 = (((((!((map__58130 == null))))?(((((map__58130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58130):map__58130);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58130__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58130__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58130__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58129,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58128,i__58071,map__58130,map__58130__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58129,s__58127__$2,temp__5735__auto____$3,map__58124,map__58124__$1,block,uid__$1,parents,s__58111__$2,temp__5735__auto____$2,vec__58107,group_title,group,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58128,i__58071,map__58130,map__58130__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58129,s__58127__$2,temp__5735__auto____$3,map__58124,map__58124__$1,block,uid__$1,parents,s__58111__$2,temp__5735__auto____$2,vec__58107,group_title,group,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58229 = (i__58128 + (1));
i__58128 = G__58229;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58129),athens$devcards$node_page$node_page_el_$_iter__58069_$_iter__58076_$_iter__58110_$_iter__58126(cljs.core.chunk_rest(s__58127__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58129),null);
}
} else {
var map__58132 = cljs.core.first(s__58127__$2);
var map__58132__$1 = (((((!((map__58132 == null))))?(((((map__58132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58132):map__58132);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58132__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58132__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58132__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58071,map__58132,map__58132__$1,title__$1,string,uid__$2,s__58127__$2,temp__5735__auto____$3,map__58124,map__58124__$1,block,uid__$1,parents,s__58111__$2,temp__5735__auto____$2,vec__58107,group_title,group,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58071,map__58132,map__58132__$1,title__$1,string,uid__$2,s__58127__$2,temp__5735__auto____$3,map__58124,map__58124__$1,block,uid__$1,parents,s__58111__$2,temp__5735__auto____$2,vec__58107,group_title,group,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58069_$_iter__58076_$_iter__58110_$_iter__58126(cljs.core.rest(s__58127__$2)));
}
} else {
return null;
}
break;
}
});})(i__58071,map__58124,map__58124__$1,block,uid__$1,parents,s__58111__$2,temp__5735__auto____$2,vec__58107,group_title,group,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
,null,null));
});})(i__58071,map__58124,map__58124__$1,block,uid__$1,parents,s__58111__$2,temp__5735__auto____$2,vec__58107,group_title,group,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__58069_$_iter__58076_$_iter__58110(cljs.core.rest(s__58111__$2)));
}
} else {
return null;
}
break;
}
});})(i__58071,vec__58107,group_title,group,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
,null,null));
});})(i__58071,vec__58107,group_title,group,s__58077__$2,temp__5735__auto____$1,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__58069_$_iter__58076(cljs.core.rest(s__58077__$2)));
}
} else {
return null;
}
break;
}
});})(i__58071,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
,null,null));
});})(i__58071,vec__58073,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58072,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null));

var G__58230 = (i__58071 + (1));
i__58071 = G__58230;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58072),athens$devcards$node_page$node_page_el_$_iter__58069(cljs.core.chunk_rest(s__58070__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58072),null);
}
} else {
var vec__58134 = cljs.core.first(s__58070__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58134,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58134,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (vec__58134,linked_or_unlinked,refs,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58069_$_iter__58137(s__58138){
return (new cljs.core.LazySeq(null,(function (){
var s__58138__$1 = s__58138;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58138__$1);
if(temp__5735__auto____$1){
var s__58138__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58138__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58138__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58140 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58139 = (0);
while(true){
if((i__58139 < size__4581__auto__)){
var vec__58141 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58139);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58141,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58141,(1),null);
cljs.core.chunk_append(b__58140,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58139,vec__58141,group_title,group,c__4580__auto__,size__4581__auto__,b__58140,s__58138__$2,temp__5735__auto____$1,vec__58134,linked_or_unlinked,refs,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58139,vec__58141,group_title,group,c__4580__auto__,size__4581__auto__,b__58140,s__58138__$2,temp__5735__auto____$1,vec__58134,linked_or_unlinked,refs,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58139,vec__58141,group_title,group,c__4580__auto__,size__4581__auto__,b__58140,s__58138__$2,temp__5735__auto____$1,vec__58134,linked_or_unlinked,refs,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58069_$_iter__58137_$_iter__58144(s__58145){
return (new cljs.core.LazySeq(null,((function (i__58139,vec__58141,group_title,group,c__4580__auto__,size__4581__auto__,b__58140,s__58138__$2,temp__5735__auto____$1,vec__58134,linked_or_unlinked,refs,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function (){
var s__58145__$1 = s__58145;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58145__$1);
if(temp__5735__auto____$2){
var s__58145__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58145__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58145__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58147 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58146 = (0);
while(true){
if((i__58146 < size__4581__auto____$1)){
var map__58148 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58146);
var map__58148__$1 = (((((!((map__58148 == null))))?(((((map__58148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58148):map__58148);
var block = map__58148__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58148__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58148__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58147,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58146,i__58139,map__58148,map__58148__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58147,s__58145__$2,temp__5735__auto____$2,vec__58141,group_title,group,c__4580__auto__,size__4581__auto__,b__58140,s__58138__$2,temp__5735__auto____$1,vec__58134,linked_or_unlinked,refs,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58069_$_iter__58137_$_iter__58144_$_iter__58150(s__58151){
return (new cljs.core.LazySeq(null,((function (i__58146,i__58139,map__58148,map__58148__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58147,s__58145__$2,temp__5735__auto____$2,vec__58141,group_title,group,c__4580__auto__,size__4581__auto__,b__58140,s__58138__$2,temp__5735__auto____$1,vec__58134,linked_or_unlinked,refs,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function (){
var s__58151__$1 = s__58151;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58151__$1);
if(temp__5735__auto____$3){
var s__58151__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58151__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58151__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58153 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58152 = (0);
while(true){
if((i__58152 < size__4581__auto____$2)){
var map__58154 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58152);
var map__58154__$1 = (((((!((map__58154 == null))))?(((((map__58154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58154):map__58154);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58154__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58154__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58154__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58153,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58152,i__58146,i__58139,map__58154,map__58154__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58153,s__58151__$2,temp__5735__auto____$3,map__58148,map__58148__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58147,s__58145__$2,temp__5735__auto____$2,vec__58141,group_title,group,c__4580__auto__,size__4581__auto__,b__58140,s__58138__$2,temp__5735__auto____$1,vec__58134,linked_or_unlinked,refs,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58152,i__58146,i__58139,map__58154,map__58154__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58153,s__58151__$2,temp__5735__auto____$3,map__58148,map__58148__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58147,s__58145__$2,temp__5735__auto____$2,vec__58141,group_title,group,c__4580__auto__,size__4581__auto__,b__58140,s__58138__$2,temp__5735__auto____$1,vec__58134,linked_or_unlinked,refs,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58231 = (i__58152 + (1));
i__58152 = G__58231;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58153),athens$devcards$node_page$node_page_el_$_iter__58069_$_iter__58137_$_iter__58144_$_iter__58150(cljs.core.chunk_rest(s__58151__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58153),null);
}
} else {
var map__58156 = cljs.core.first(s__58151__$2);
var map__58156__$1 = (((((!((map__58156 == null))))?(((((map__58156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58156):map__58156);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58156__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58156__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58156__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58146,i__58139,map__58156,map__58156__$1,title__$1,string,uid__$2,s__58151__$2,temp__5735__auto____$3,map__58148,map__58148__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58147,s__58145__$2,temp__5735__auto____$2,vec__58141,group_title,group,c__4580__auto__,size__4581__auto__,b__58140,s__58138__$2,temp__5735__auto____$1,vec__58134,linked_or_unlinked,refs,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58146,i__58139,map__58156,map__58156__$1,title__$1,string,uid__$2,s__58151__$2,temp__5735__auto____$3,map__58148,map__58148__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58147,s__58145__$2,temp__5735__auto____$2,vec__58141,group_title,group,c__4580__auto__,size__4581__auto__,b__58140,s__58138__$2,temp__5735__auto____$1,vec__58134,linked_or_unlinked,refs,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58069_$_iter__58137_$_iter__58144_$_iter__58150(cljs.core.rest(s__58151__$2)));
}
} else {
return null;
}
break;
}
});})(i__58146,i__58139,map__58148,map__58148__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58147,s__58145__$2,temp__5735__auto____$2,vec__58141,group_title,group,c__4580__auto__,size__4581__auto__,b__58140,s__58138__$2,temp__5735__auto____$1,vec__58134,linked_or_unlinked,refs,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
,null,null));
});})(i__58146,i__58139,map__58148,map__58148__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58147,s__58145__$2,temp__5735__auto____$2,vec__58141,group_title,group,c__4580__auto__,size__4581__auto__,b__58140,s__58138__$2,temp__5735__auto____$1,vec__58134,linked_or_unlinked,refs,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58232 = (i__58146 + (1));
i__58146 = G__58232;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58147),athens$devcards$node_page$node_page_el_$_iter__58069_$_iter__58137_$_iter__58144(cljs.core.chunk_rest(s__58145__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58147),null);
}
} else {
var map__58158 = cljs.core.first(s__58145__$2);
var map__58158__$1 = (((((!((map__58158 == null))))?(((((map__58158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58158):map__58158);
var block = map__58158__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58158__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58158__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58139,map__58158,map__58158__$1,block,uid__$1,parents,s__58145__$2,temp__5735__auto____$2,vec__58141,group_title,group,c__4580__auto__,size__4581__auto__,b__58140,s__58138__$2,temp__5735__auto____$1,vec__58134,linked_or_unlinked,refs,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58069_$_iter__58137_$_iter__58144_$_iter__58160(s__58161){
return (new cljs.core.LazySeq(null,((function (i__58139,map__58158,map__58158__$1,block,uid__$1,parents,s__58145__$2,temp__5735__auto____$2,vec__58141,group_title,group,c__4580__auto__,size__4581__auto__,b__58140,s__58138__$2,temp__5735__auto____$1,vec__58134,linked_or_unlinked,refs,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function (){
var s__58161__$1 = s__58161;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58161__$1);
if(temp__5735__auto____$3){
var s__58161__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58161__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58161__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58163 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58162 = (0);
while(true){
if((i__58162 < size__4581__auto____$1)){
var map__58164 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58162);
var map__58164__$1 = (((((!((map__58164 == null))))?(((((map__58164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58164):map__58164);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58164__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58164__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58164__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58163,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58162,i__58139,map__58164,map__58164__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58163,s__58161__$2,temp__5735__auto____$3,map__58158,map__58158__$1,block,uid__$1,parents,s__58145__$2,temp__5735__auto____$2,vec__58141,group_title,group,c__4580__auto__,size__4581__auto__,b__58140,s__58138__$2,temp__5735__auto____$1,vec__58134,linked_or_unlinked,refs,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58162,i__58139,map__58164,map__58164__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58163,s__58161__$2,temp__5735__auto____$3,map__58158,map__58158__$1,block,uid__$1,parents,s__58145__$2,temp__5735__auto____$2,vec__58141,group_title,group,c__4580__auto__,size__4581__auto__,b__58140,s__58138__$2,temp__5735__auto____$1,vec__58134,linked_or_unlinked,refs,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58233 = (i__58162 + (1));
i__58162 = G__58233;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58163),athens$devcards$node_page$node_page_el_$_iter__58069_$_iter__58137_$_iter__58144_$_iter__58160(cljs.core.chunk_rest(s__58161__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58163),null);
}
} else {
var map__58166 = cljs.core.first(s__58161__$2);
var map__58166__$1 = (((((!((map__58166 == null))))?(((((map__58166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58166):map__58166);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58166__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58166__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58166__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58139,map__58166,map__58166__$1,title__$1,string,uid__$2,s__58161__$2,temp__5735__auto____$3,map__58158,map__58158__$1,block,uid__$1,parents,s__58145__$2,temp__5735__auto____$2,vec__58141,group_title,group,c__4580__auto__,size__4581__auto__,b__58140,s__58138__$2,temp__5735__auto____$1,vec__58134,linked_or_unlinked,refs,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58139,map__58166,map__58166__$1,title__$1,string,uid__$2,s__58161__$2,temp__5735__auto____$3,map__58158,map__58158__$1,block,uid__$1,parents,s__58145__$2,temp__5735__auto____$2,vec__58141,group_title,group,c__4580__auto__,size__4581__auto__,b__58140,s__58138__$2,temp__5735__auto____$1,vec__58134,linked_or_unlinked,refs,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58069_$_iter__58137_$_iter__58144_$_iter__58160(cljs.core.rest(s__58161__$2)));
}
} else {
return null;
}
break;
}
});})(i__58139,map__58158,map__58158__$1,block,uid__$1,parents,s__58145__$2,temp__5735__auto____$2,vec__58141,group_title,group,c__4580__auto__,size__4581__auto__,b__58140,s__58138__$2,temp__5735__auto____$1,vec__58134,linked_or_unlinked,refs,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
,null,null));
});})(i__58139,map__58158,map__58158__$1,block,uid__$1,parents,s__58145__$2,temp__5735__auto____$2,vec__58141,group_title,group,c__4580__auto__,size__4581__auto__,b__58140,s__58138__$2,temp__5735__auto____$1,vec__58134,linked_or_unlinked,refs,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__58069_$_iter__58137_$_iter__58144(cljs.core.rest(s__58145__$2)));
}
} else {
return null;
}
break;
}
});})(i__58139,vec__58141,group_title,group,c__4580__auto__,size__4581__auto__,b__58140,s__58138__$2,temp__5735__auto____$1,vec__58134,linked_or_unlinked,refs,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
,null,null));
});})(i__58139,vec__58141,group_title,group,c__4580__auto__,size__4581__auto__,b__58140,s__58138__$2,temp__5735__auto____$1,vec__58134,linked_or_unlinked,refs,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58234 = (i__58139 + (1));
i__58139 = G__58234;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58140),athens$devcards$node_page$node_page_el_$_iter__58069_$_iter__58137(cljs.core.chunk_rest(s__58138__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58140),null);
}
} else {
var vec__58168 = cljs.core.first(s__58138__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58168,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58168,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58168,group_title,group,s__58138__$2,temp__5735__auto____$1,vec__58134,linked_or_unlinked,refs,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__58168,group_title,group,s__58138__$2,temp__5735__auto____$1,vec__58134,linked_or_unlinked,refs,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (vec__58168,group_title,group,s__58138__$2,temp__5735__auto____$1,vec__58134,linked_or_unlinked,refs,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58069_$_iter__58137_$_iter__58171(s__58172){
return (new cljs.core.LazySeq(null,(function (){
var s__58172__$1 = s__58172;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58172__$1);
if(temp__5735__auto____$2){
var s__58172__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58172__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58172__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58174 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58173 = (0);
while(true){
if((i__58173 < size__4581__auto__)){
var map__58175 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58173);
var map__58175__$1 = (((((!((map__58175 == null))))?(((((map__58175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58175):map__58175);
var block = map__58175__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58175__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58175__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58174,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58173,map__58175,map__58175__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58174,s__58172__$2,temp__5735__auto____$2,vec__58168,group_title,group,s__58138__$2,temp__5735__auto____$1,vec__58134,linked_or_unlinked,refs,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58069_$_iter__58137_$_iter__58171_$_iter__58177(s__58178){
return (new cljs.core.LazySeq(null,((function (i__58173,map__58175,map__58175__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58174,s__58172__$2,temp__5735__auto____$2,vec__58168,group_title,group,s__58138__$2,temp__5735__auto____$1,vec__58134,linked_or_unlinked,refs,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function (){
var s__58178__$1 = s__58178;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58178__$1);
if(temp__5735__auto____$3){
var s__58178__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58178__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58178__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58180 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58179 = (0);
while(true){
if((i__58179 < size__4581__auto____$1)){
var map__58181 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58179);
var map__58181__$1 = (((((!((map__58181 == null))))?(((((map__58181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58181):map__58181);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58181__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58181__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58181__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58180,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58179,i__58173,map__58181,map__58181__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58180,s__58178__$2,temp__5735__auto____$3,map__58175,map__58175__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58174,s__58172__$2,temp__5735__auto____$2,vec__58168,group_title,group,s__58138__$2,temp__5735__auto____$1,vec__58134,linked_or_unlinked,refs,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58179,i__58173,map__58181,map__58181__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58180,s__58178__$2,temp__5735__auto____$3,map__58175,map__58175__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58174,s__58172__$2,temp__5735__auto____$2,vec__58168,group_title,group,s__58138__$2,temp__5735__auto____$1,vec__58134,linked_or_unlinked,refs,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58235 = (i__58179 + (1));
i__58179 = G__58235;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58180),athens$devcards$node_page$node_page_el_$_iter__58069_$_iter__58137_$_iter__58171_$_iter__58177(cljs.core.chunk_rest(s__58178__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58180),null);
}
} else {
var map__58183 = cljs.core.first(s__58178__$2);
var map__58183__$1 = (((((!((map__58183 == null))))?(((((map__58183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58183):map__58183);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58183__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58183__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58183__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58173,map__58183,map__58183__$1,title__$1,string,uid__$2,s__58178__$2,temp__5735__auto____$3,map__58175,map__58175__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58174,s__58172__$2,temp__5735__auto____$2,vec__58168,group_title,group,s__58138__$2,temp__5735__auto____$1,vec__58134,linked_or_unlinked,refs,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58173,map__58183,map__58183__$1,title__$1,string,uid__$2,s__58178__$2,temp__5735__auto____$3,map__58175,map__58175__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58174,s__58172__$2,temp__5735__auto____$2,vec__58168,group_title,group,s__58138__$2,temp__5735__auto____$1,vec__58134,linked_or_unlinked,refs,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58069_$_iter__58137_$_iter__58171_$_iter__58177(cljs.core.rest(s__58178__$2)));
}
} else {
return null;
}
break;
}
});})(i__58173,map__58175,map__58175__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58174,s__58172__$2,temp__5735__auto____$2,vec__58168,group_title,group,s__58138__$2,temp__5735__auto____$1,vec__58134,linked_or_unlinked,refs,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
,null,null));
});})(i__58173,map__58175,map__58175__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58174,s__58172__$2,temp__5735__auto____$2,vec__58168,group_title,group,s__58138__$2,temp__5735__auto____$1,vec__58134,linked_or_unlinked,refs,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58236 = (i__58173 + (1));
i__58173 = G__58236;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58174),athens$devcards$node_page$node_page_el_$_iter__58069_$_iter__58137_$_iter__58171(cljs.core.chunk_rest(s__58172__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58174),null);
}
} else {
var map__58185 = cljs.core.first(s__58172__$2);
var map__58185__$1 = (((((!((map__58185 == null))))?(((((map__58185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58185):map__58185);
var block = map__58185__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58185__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58185__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (map__58185,map__58185__$1,block,uid__$1,parents,s__58172__$2,temp__5735__auto____$2,vec__58168,group_title,group,s__58138__$2,temp__5735__auto____$1,vec__58134,linked_or_unlinked,refs,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58069_$_iter__58137_$_iter__58171_$_iter__58187(s__58188){
return (new cljs.core.LazySeq(null,(function (){
var s__58188__$1 = s__58188;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58188__$1);
if(temp__5735__auto____$3){
var s__58188__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58188__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58188__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58190 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58189 = (0);
while(true){
if((i__58189 < size__4581__auto__)){
var map__58191 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58189);
var map__58191__$1 = (((((!((map__58191 == null))))?(((((map__58191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58191):map__58191);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58191__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58191__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58191__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58190,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58189,map__58191,map__58191__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58190,s__58188__$2,temp__5735__auto____$3,map__58185,map__58185__$1,block,uid__$1,parents,s__58172__$2,temp__5735__auto____$2,vec__58168,group_title,group,s__58138__$2,temp__5735__auto____$1,vec__58134,linked_or_unlinked,refs,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58189,map__58191,map__58191__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58190,s__58188__$2,temp__5735__auto____$3,map__58185,map__58185__$1,block,uid__$1,parents,s__58172__$2,temp__5735__auto____$2,vec__58168,group_title,group,s__58138__$2,temp__5735__auto____$1,vec__58134,linked_or_unlinked,refs,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58237 = (i__58189 + (1));
i__58189 = G__58237;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58190),athens$devcards$node_page$node_page_el_$_iter__58069_$_iter__58137_$_iter__58171_$_iter__58187(cljs.core.chunk_rest(s__58188__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58190),null);
}
} else {
var map__58193 = cljs.core.first(s__58188__$2);
var map__58193__$1 = (((((!((map__58193 == null))))?(((((map__58193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58193):map__58193);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58193__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58193__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58193__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__58193,map__58193__$1,title__$1,string,uid__$2,s__58188__$2,temp__5735__auto____$3,map__58185,map__58185__$1,block,uid__$1,parents,s__58172__$2,temp__5735__auto____$2,vec__58168,group_title,group,s__58138__$2,temp__5735__auto____$1,vec__58134,linked_or_unlinked,refs,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__58193,map__58193__$1,title__$1,string,uid__$2,s__58188__$2,temp__5735__auto____$3,map__58185,map__58185__$1,block,uid__$1,parents,s__58172__$2,temp__5735__auto____$2,vec__58168,group_title,group,s__58138__$2,temp__5735__auto____$1,vec__58134,linked_or_unlinked,refs,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58069_$_iter__58137_$_iter__58171_$_iter__58187(cljs.core.rest(s__58188__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58185,map__58185__$1,block,uid__$1,parents,s__58172__$2,temp__5735__auto____$2,vec__58168,group_title,group,s__58138__$2,temp__5735__auto____$1,vec__58134,linked_or_unlinked,refs,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__58069_$_iter__58137_$_iter__58171(cljs.core.rest(s__58172__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58168,group_title,group,s__58138__$2,temp__5735__auto____$1,vec__58134,linked_or_unlinked,refs,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__58069_$_iter__58137(cljs.core.rest(s__58138__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58134,linked_or_unlinked,refs,s__58070__$2,temp__5735__auto__,map__58057,map__58057__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null),athens$devcards$node_page$node_page_el_$_iter__58069(cljs.core.rest(s__58070__$2)));
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
var editing_uid = cljs.core.deref((function (){var G__58195 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58195) : re_frame.core.subscribe.call(null,G__58195));
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
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.node_page !== 'undefined') && (typeof athens.devcards.node_page.t_athens$devcards$node_page58196 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.node_page.t_athens$devcards$node_page58196 = (function (meta58197){
this.meta58197 = meta58197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.node_page.t_athens$devcards$node_page58196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58198,meta58197__$1){
var self__ = this;
var _58198__$1 = this;
return (new athens.devcards.node_page.t_athens$devcards$node_page58196(meta58197__$1));
}));

(athens.devcards.node_page.t_athens$devcards$node_page58196.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58198){
var self__ = this;
var _58198__$1 = this;
return self__.meta58197;
}));

(athens.devcards.node_page.t_athens$devcards$node_page58196.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.node_page.t_athens$devcards$node_page58196.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__41676__auto__,devcard_opts__41677__auto__){
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

(athens.devcards.node_page.t_athens$devcards$node_page58196.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58197","meta58197",-1636684826,null)], null);
}));

(athens.devcards.node_page.t_athens$devcards$node_page58196.cljs$lang$type = true);

(athens.devcards.node_page.t_athens$devcards$node_page58196.cljs$lang$ctorStr = "athens.devcards.node-page/t_athens$devcards$node_page58196");

(athens.devcards.node_page.t_athens$devcards$node_page58196.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.node-page/t_athens$devcards$node_page58196");
}));

/**
 * Positional factory function for athens.devcards.node-page/t_athens$devcards$node_page58196.
 */
athens.devcards.node_page.__GT_t_athens$devcards$node_page58196 = (function athens$devcards$node_page$__GT_t_athens$devcards$node_page58196(meta58197){
return (new athens.devcards.node_page.t_athens$devcards$node_page58196(meta58197));
});

}

return (new athens.devcards.node_page.t_athens$devcards$node_page58196(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.node_page.js.map
