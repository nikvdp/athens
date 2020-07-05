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
goog.require('tick.alpha.api');
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
var G__65786 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__65786) : re_frame.core.dispatch.call(null,G__65786));
});
athens.devcards.node_page.db_handler = goog.functions.debounce(athens.devcards.node_page.handler,(500));
athens.devcards.node_page.get_ref_ids = (function athens$devcards$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__65787 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__65788 = athens.db.dsdb;
var G__65789 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__65787,G__65788,G__65789) : posh.reagent.q.call(null,G__65787,G__65788,G__65789));
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
athens.devcards.node_page.is_timeline_page = (function athens$devcards$node_page$is_timeline_page(uid){
return cljs.core.boolean$((function (){try{var vec__65791 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65791,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65791,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65791,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e65790){if((e65790 instanceof Object)){
var _ = e65790;
return false;
} else {
throw e65790;

}
}})());
});
athens.devcards.node_page.node_page_el = (function athens$devcards$node_page$node_page_el(p__65794,editing_uid,ref_groups,timeline_page_QMARK_){
var map__65795 = p__65794;
var map__65795__$1 = (((((!((map__65795 == null))))?(((((map__65795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65795):map__65795);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65795__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65795__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65795__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.page_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__65797 = e.target.value;
var G__65798 = uid;
return (athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__65797,G__65798) : athens.devcards.node_page.db_handler.call(null,G__65797,G__65798));
})], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__65799(s__65800){
return (new cljs.core.LazySeq(null,(function (){
var s__65800__$1 = s__65800;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65800__$1);
if(temp__5735__auto__){
var s__65800__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65800__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65800__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65802 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65801 = (0);
while(true){
if((i__65801 < size__4581__auto__)){
var map__65803 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65801);
var map__65803__$1 = (((((!((map__65803 == null))))?(((((map__65803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65803):map__65803);
var child = map__65803__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65803__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65802,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__65956 = (i__65801 + (1));
i__65801 = G__65956;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65802),athens$devcards$node_page$node_page_el_$_iter__65799(cljs.core.chunk_rest(s__65800__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65802),null);
}
} else {
var map__65805 = cljs.core.first(s__65800__$2);
var map__65805__$1 = (((((!((map__65805 == null))))?(((((map__65805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65805):map__65805);
var child = map__65805__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65805__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$devcards$node_page$node_page_el_$_iter__65799(cljs.core.rest(s__65800__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__65807(s__65808){
return (new cljs.core.LazySeq(null,(function (){
var s__65808__$1 = s__65808;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65808__$1);
if(temp__5735__auto__){
var s__65808__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65808__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65808__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65810 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65809 = (0);
while(true){
if((i__65809 < size__4581__auto__)){
var vec__65811 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65809);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65811,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65811,(1),null);
cljs.core.chunk_append(b__65810,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (i__65809,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65807_$_iter__65814(s__65815){
return (new cljs.core.LazySeq(null,((function (i__65809,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
return (function (){
var s__65815__$1 = s__65815;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__65815__$1);
if(temp__5735__auto____$1){
var s__65815__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__65815__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65815__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65817 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65816 = (0);
while(true){
if((i__65816 < size__4581__auto____$1)){
var vec__65818 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65816);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65818,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65818,(1),null);
cljs.core.chunk_append(b__65817,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65816,i__65809,vec__65818,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65817,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__65816,i__65809,vec__65818,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65817,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__65816,i__65809,vec__65818,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65817,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65807_$_iter__65814_$_iter__65821(s__65822){
return (new cljs.core.LazySeq(null,((function (i__65816,i__65809,vec__65818,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65817,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
return (function (){
var s__65822__$1 = s__65822;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65822__$1);
if(temp__5735__auto____$2){
var s__65822__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65822__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__65822__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__65824 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__65823 = (0);
while(true){
if((i__65823 < size__4581__auto____$2)){
var map__65825 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__65823);
var map__65825__$1 = (((((!((map__65825 == null))))?(((((map__65825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65825):map__65825);
var block = map__65825__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65825__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65825__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__65824,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65823,i__65816,i__65809,map__65825,map__65825__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65824,s__65822__$2,temp__5735__auto____$2,vec__65818,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65817,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65807_$_iter__65814_$_iter__65821_$_iter__65827(s__65828){
return (new cljs.core.LazySeq(null,((function (i__65823,i__65816,i__65809,map__65825,map__65825__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65824,s__65822__$2,temp__5735__auto____$2,vec__65818,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65817,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
return (function (){
var s__65828__$1 = s__65828;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65828__$1);
if(temp__5735__auto____$3){
var s__65828__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65828__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__65828__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__65830 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__65829 = (0);
while(true){
if((i__65829 < size__4581__auto____$3)){
var map__65831 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__65829);
var map__65831__$1 = (((((!((map__65831 == null))))?(((((map__65831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65831):map__65831);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65831__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65831__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65831__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65830,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65829,i__65823,i__65816,i__65809,map__65831,map__65831__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__65830,s__65828__$2,temp__5735__auto____$3,map__65825,map__65825__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65824,s__65822__$2,temp__5735__auto____$2,vec__65818,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65817,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65829,i__65823,i__65816,i__65809,map__65831,map__65831__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__65830,s__65828__$2,temp__5735__auto____$3,map__65825,map__65825__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65824,s__65822__$2,temp__5735__auto____$2,vec__65818,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65817,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65960 = (i__65829 + (1));
i__65829 = G__65960;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65830),athens$devcards$node_page$node_page_el_$_iter__65807_$_iter__65814_$_iter__65821_$_iter__65827(cljs.core.chunk_rest(s__65828__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65830),null);
}
} else {
var map__65833 = cljs.core.first(s__65828__$2);
var map__65833__$1 = (((((!((map__65833 == null))))?(((((map__65833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65833):map__65833);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65833__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65833__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65833__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65823,i__65816,i__65809,map__65833,map__65833__$1,title__$1,string,uid__$2,s__65828__$2,temp__5735__auto____$3,map__65825,map__65825__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65824,s__65822__$2,temp__5735__auto____$2,vec__65818,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65817,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65823,i__65816,i__65809,map__65833,map__65833__$1,title__$1,string,uid__$2,s__65828__$2,temp__5735__auto____$3,map__65825,map__65825__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65824,s__65822__$2,temp__5735__auto____$2,vec__65818,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65817,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65807_$_iter__65814_$_iter__65821_$_iter__65827(cljs.core.rest(s__65828__$2)));
}
} else {
return null;
}
break;
}
});})(i__65823,i__65816,i__65809,map__65825,map__65825__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65824,s__65822__$2,temp__5735__auto____$2,vec__65818,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65817,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
,null,null));
});})(i__65823,i__65816,i__65809,map__65825,map__65825__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65824,s__65822__$2,temp__5735__auto____$2,vec__65818,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65817,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__65961 = (i__65823 + (1));
i__65823 = G__65961;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65824),athens$devcards$node_page$node_page_el_$_iter__65807_$_iter__65814_$_iter__65821(cljs.core.chunk_rest(s__65822__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65824),null);
}
} else {
var map__65835 = cljs.core.first(s__65822__$2);
var map__65835__$1 = (((((!((map__65835 == null))))?(((((map__65835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65835):map__65835);
var block = map__65835__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65835__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65835__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65816,i__65809,map__65835,map__65835__$1,block,uid__$1,parents,s__65822__$2,temp__5735__auto____$2,vec__65818,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65817,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65807_$_iter__65814_$_iter__65821_$_iter__65837(s__65838){
return (new cljs.core.LazySeq(null,((function (i__65816,i__65809,map__65835,map__65835__$1,block,uid__$1,parents,s__65822__$2,temp__5735__auto____$2,vec__65818,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65817,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
return (function (){
var s__65838__$1 = s__65838;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65838__$1);
if(temp__5735__auto____$3){
var s__65838__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65838__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__65838__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__65840 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__65839 = (0);
while(true){
if((i__65839 < size__4581__auto____$2)){
var map__65841 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__65839);
var map__65841__$1 = (((((!((map__65841 == null))))?(((((map__65841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65841):map__65841);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65841__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65841__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65841__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65840,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65839,i__65816,i__65809,map__65841,map__65841__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65840,s__65838__$2,temp__5735__auto____$3,map__65835,map__65835__$1,block,uid__$1,parents,s__65822__$2,temp__5735__auto____$2,vec__65818,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65817,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65839,i__65816,i__65809,map__65841,map__65841__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65840,s__65838__$2,temp__5735__auto____$3,map__65835,map__65835__$1,block,uid__$1,parents,s__65822__$2,temp__5735__auto____$2,vec__65818,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65817,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65962 = (i__65839 + (1));
i__65839 = G__65962;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65840),athens$devcards$node_page$node_page_el_$_iter__65807_$_iter__65814_$_iter__65821_$_iter__65837(cljs.core.chunk_rest(s__65838__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65840),null);
}
} else {
var map__65843 = cljs.core.first(s__65838__$2);
var map__65843__$1 = (((((!((map__65843 == null))))?(((((map__65843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65843):map__65843);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65843__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65843__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65843__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65816,i__65809,map__65843,map__65843__$1,title__$1,string,uid__$2,s__65838__$2,temp__5735__auto____$3,map__65835,map__65835__$1,block,uid__$1,parents,s__65822__$2,temp__5735__auto____$2,vec__65818,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65817,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65816,i__65809,map__65843,map__65843__$1,title__$1,string,uid__$2,s__65838__$2,temp__5735__auto____$3,map__65835,map__65835__$1,block,uid__$1,parents,s__65822__$2,temp__5735__auto____$2,vec__65818,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65817,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65807_$_iter__65814_$_iter__65821_$_iter__65837(cljs.core.rest(s__65838__$2)));
}
} else {
return null;
}
break;
}
});})(i__65816,i__65809,map__65835,map__65835__$1,block,uid__$1,parents,s__65822__$2,temp__5735__auto____$2,vec__65818,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65817,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
,null,null));
});})(i__65816,i__65809,map__65835,map__65835__$1,block,uid__$1,parents,s__65822__$2,temp__5735__auto____$2,vec__65818,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65817,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__65807_$_iter__65814_$_iter__65821(cljs.core.rest(s__65822__$2)));
}
} else {
return null;
}
break;
}
});})(i__65816,i__65809,vec__65818,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65817,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
,null,null));
});})(i__65816,i__65809,vec__65818,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65817,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__65963 = (i__65816 + (1));
i__65816 = G__65963;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65817),athens$devcards$node_page$node_page_el_$_iter__65807_$_iter__65814(cljs.core.chunk_rest(s__65815__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65817),null);
}
} else {
var vec__65845 = cljs.core.first(s__65815__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65845,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65845,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65809,vec__65845,group_title,group,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__65809,vec__65845,group_title,group,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__65809,vec__65845,group_title,group,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65807_$_iter__65814_$_iter__65848(s__65849){
return (new cljs.core.LazySeq(null,((function (i__65809,vec__65845,group_title,group,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
return (function (){
var s__65849__$1 = s__65849;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65849__$1);
if(temp__5735__auto____$2){
var s__65849__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65849__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65849__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65851 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65850 = (0);
while(true){
if((i__65850 < size__4581__auto____$1)){
var map__65852 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65850);
var map__65852__$1 = (((((!((map__65852 == null))))?(((((map__65852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65852):map__65852);
var block = map__65852__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65852__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65852__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__65851,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65850,i__65809,map__65852,map__65852__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65851,s__65849__$2,temp__5735__auto____$2,vec__65845,group_title,group,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65807_$_iter__65814_$_iter__65848_$_iter__65854(s__65855){
return (new cljs.core.LazySeq(null,((function (i__65850,i__65809,map__65852,map__65852__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65851,s__65849__$2,temp__5735__auto____$2,vec__65845,group_title,group,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
return (function (){
var s__65855__$1 = s__65855;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65855__$1);
if(temp__5735__auto____$3){
var s__65855__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65855__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__65855__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__65857 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__65856 = (0);
while(true){
if((i__65856 < size__4581__auto____$2)){
var map__65858 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__65856);
var map__65858__$1 = (((((!((map__65858 == null))))?(((((map__65858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65858):map__65858);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65858__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65858__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65858__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65857,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65856,i__65850,i__65809,map__65858,map__65858__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65857,s__65855__$2,temp__5735__auto____$3,map__65852,map__65852__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65851,s__65849__$2,temp__5735__auto____$2,vec__65845,group_title,group,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65856,i__65850,i__65809,map__65858,map__65858__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65857,s__65855__$2,temp__5735__auto____$3,map__65852,map__65852__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65851,s__65849__$2,temp__5735__auto____$2,vec__65845,group_title,group,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65964 = (i__65856 + (1));
i__65856 = G__65964;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65857),athens$devcards$node_page$node_page_el_$_iter__65807_$_iter__65814_$_iter__65848_$_iter__65854(cljs.core.chunk_rest(s__65855__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65857),null);
}
} else {
var map__65860 = cljs.core.first(s__65855__$2);
var map__65860__$1 = (((((!((map__65860 == null))))?(((((map__65860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65860):map__65860);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65860__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65860__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65860__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65850,i__65809,map__65860,map__65860__$1,title__$1,string,uid__$2,s__65855__$2,temp__5735__auto____$3,map__65852,map__65852__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65851,s__65849__$2,temp__5735__auto____$2,vec__65845,group_title,group,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65850,i__65809,map__65860,map__65860__$1,title__$1,string,uid__$2,s__65855__$2,temp__5735__auto____$3,map__65852,map__65852__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65851,s__65849__$2,temp__5735__auto____$2,vec__65845,group_title,group,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65807_$_iter__65814_$_iter__65848_$_iter__65854(cljs.core.rest(s__65855__$2)));
}
} else {
return null;
}
break;
}
});})(i__65850,i__65809,map__65852,map__65852__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65851,s__65849__$2,temp__5735__auto____$2,vec__65845,group_title,group,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
,null,null));
});})(i__65850,i__65809,map__65852,map__65852__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65851,s__65849__$2,temp__5735__auto____$2,vec__65845,group_title,group,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__65965 = (i__65850 + (1));
i__65850 = G__65965;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65851),athens$devcards$node_page$node_page_el_$_iter__65807_$_iter__65814_$_iter__65848(cljs.core.chunk_rest(s__65849__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65851),null);
}
} else {
var map__65862 = cljs.core.first(s__65849__$2);
var map__65862__$1 = (((((!((map__65862 == null))))?(((((map__65862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65862):map__65862);
var block = map__65862__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65862__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65862__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65809,map__65862,map__65862__$1,block,uid__$1,parents,s__65849__$2,temp__5735__auto____$2,vec__65845,group_title,group,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65807_$_iter__65814_$_iter__65848_$_iter__65864(s__65865){
return (new cljs.core.LazySeq(null,((function (i__65809,map__65862,map__65862__$1,block,uid__$1,parents,s__65849__$2,temp__5735__auto____$2,vec__65845,group_title,group,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
return (function (){
var s__65865__$1 = s__65865;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65865__$1);
if(temp__5735__auto____$3){
var s__65865__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65865__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65865__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65867 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65866 = (0);
while(true){
if((i__65866 < size__4581__auto____$1)){
var map__65868 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65866);
var map__65868__$1 = (((((!((map__65868 == null))))?(((((map__65868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65868):map__65868);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65868__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65868__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65868__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65867,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65866,i__65809,map__65868,map__65868__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65867,s__65865__$2,temp__5735__auto____$3,map__65862,map__65862__$1,block,uid__$1,parents,s__65849__$2,temp__5735__auto____$2,vec__65845,group_title,group,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65866,i__65809,map__65868,map__65868__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65867,s__65865__$2,temp__5735__auto____$3,map__65862,map__65862__$1,block,uid__$1,parents,s__65849__$2,temp__5735__auto____$2,vec__65845,group_title,group,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65966 = (i__65866 + (1));
i__65866 = G__65966;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65867),athens$devcards$node_page$node_page_el_$_iter__65807_$_iter__65814_$_iter__65848_$_iter__65864(cljs.core.chunk_rest(s__65865__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65867),null);
}
} else {
var map__65870 = cljs.core.first(s__65865__$2);
var map__65870__$1 = (((((!((map__65870 == null))))?(((((map__65870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65870):map__65870);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65870__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65870__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65870__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65809,map__65870,map__65870__$1,title__$1,string,uid__$2,s__65865__$2,temp__5735__auto____$3,map__65862,map__65862__$1,block,uid__$1,parents,s__65849__$2,temp__5735__auto____$2,vec__65845,group_title,group,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65809,map__65870,map__65870__$1,title__$1,string,uid__$2,s__65865__$2,temp__5735__auto____$3,map__65862,map__65862__$1,block,uid__$1,parents,s__65849__$2,temp__5735__auto____$2,vec__65845,group_title,group,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65807_$_iter__65814_$_iter__65848_$_iter__65864(cljs.core.rest(s__65865__$2)));
}
} else {
return null;
}
break;
}
});})(i__65809,map__65862,map__65862__$1,block,uid__$1,parents,s__65849__$2,temp__5735__auto____$2,vec__65845,group_title,group,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
,null,null));
});})(i__65809,map__65862,map__65862__$1,block,uid__$1,parents,s__65849__$2,temp__5735__auto____$2,vec__65845,group_title,group,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__65807_$_iter__65814_$_iter__65848(cljs.core.rest(s__65849__$2)));
}
} else {
return null;
}
break;
}
});})(i__65809,vec__65845,group_title,group,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
,null,null));
});})(i__65809,vec__65845,group_title,group,s__65815__$2,temp__5735__auto____$1,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__65807_$_iter__65814(cljs.core.rest(s__65815__$2)));
}
} else {
return null;
}
break;
}
});})(i__65809,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
,null,null));
});})(i__65809,vec__65811,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65810,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null));

var G__65967 = (i__65809 + (1));
i__65809 = G__65967;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65810),athens$devcards$node_page$node_page_el_$_iter__65807(cljs.core.chunk_rest(s__65808__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65810),null);
}
} else {
var vec__65872 = cljs.core.first(s__65808__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65872,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65872,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (vec__65872,linked_or_unlinked,refs,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65807_$_iter__65875(s__65876){
return (new cljs.core.LazySeq(null,(function (){
var s__65876__$1 = s__65876;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__65876__$1);
if(temp__5735__auto____$1){
var s__65876__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__65876__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65876__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65878 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65877 = (0);
while(true){
if((i__65877 < size__4581__auto__)){
var vec__65879 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65877);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65879,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65879,(1),null);
cljs.core.chunk_append(b__65878,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65877,vec__65879,group_title,group,c__4580__auto__,size__4581__auto__,b__65878,s__65876__$2,temp__5735__auto____$1,vec__65872,linked_or_unlinked,refs,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__65877,vec__65879,group_title,group,c__4580__auto__,size__4581__auto__,b__65878,s__65876__$2,temp__5735__auto____$1,vec__65872,linked_or_unlinked,refs,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__65877,vec__65879,group_title,group,c__4580__auto__,size__4581__auto__,b__65878,s__65876__$2,temp__5735__auto____$1,vec__65872,linked_or_unlinked,refs,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65807_$_iter__65875_$_iter__65882(s__65883){
return (new cljs.core.LazySeq(null,((function (i__65877,vec__65879,group_title,group,c__4580__auto__,size__4581__auto__,b__65878,s__65876__$2,temp__5735__auto____$1,vec__65872,linked_or_unlinked,refs,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
return (function (){
var s__65883__$1 = s__65883;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65883__$1);
if(temp__5735__auto____$2){
var s__65883__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65883__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65883__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65885 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65884 = (0);
while(true){
if((i__65884 < size__4581__auto____$1)){
var map__65886 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65884);
var map__65886__$1 = (((((!((map__65886 == null))))?(((((map__65886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65886):map__65886);
var block = map__65886__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65886__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65886__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__65885,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65884,i__65877,map__65886,map__65886__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65885,s__65883__$2,temp__5735__auto____$2,vec__65879,group_title,group,c__4580__auto__,size__4581__auto__,b__65878,s__65876__$2,temp__5735__auto____$1,vec__65872,linked_or_unlinked,refs,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65807_$_iter__65875_$_iter__65882_$_iter__65888(s__65889){
return (new cljs.core.LazySeq(null,((function (i__65884,i__65877,map__65886,map__65886__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65885,s__65883__$2,temp__5735__auto____$2,vec__65879,group_title,group,c__4580__auto__,size__4581__auto__,b__65878,s__65876__$2,temp__5735__auto____$1,vec__65872,linked_or_unlinked,refs,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
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
cljs.core.chunk_append(b__65891,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65890,i__65884,i__65877,map__65892,map__65892__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65891,s__65889__$2,temp__5735__auto____$3,map__65886,map__65886__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65885,s__65883__$2,temp__5735__auto____$2,vec__65879,group_title,group,c__4580__auto__,size__4581__auto__,b__65878,s__65876__$2,temp__5735__auto____$1,vec__65872,linked_or_unlinked,refs,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65890,i__65884,i__65877,map__65892,map__65892__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65891,s__65889__$2,temp__5735__auto____$3,map__65886,map__65886__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65885,s__65883__$2,temp__5735__auto____$2,vec__65879,group_title,group,c__4580__auto__,size__4581__auto__,b__65878,s__65876__$2,temp__5735__auto____$1,vec__65872,linked_or_unlinked,refs,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65968 = (i__65890 + (1));
i__65890 = G__65968;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65891),athens$devcards$node_page$node_page_el_$_iter__65807_$_iter__65875_$_iter__65882_$_iter__65888(cljs.core.chunk_rest(s__65889__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65891),null);
}
} else {
var map__65894 = cljs.core.first(s__65889__$2);
var map__65894__$1 = (((((!((map__65894 == null))))?(((((map__65894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65894):map__65894);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65894__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65894__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65894__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65884,i__65877,map__65894,map__65894__$1,title__$1,string,uid__$2,s__65889__$2,temp__5735__auto____$3,map__65886,map__65886__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65885,s__65883__$2,temp__5735__auto____$2,vec__65879,group_title,group,c__4580__auto__,size__4581__auto__,b__65878,s__65876__$2,temp__5735__auto____$1,vec__65872,linked_or_unlinked,refs,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65884,i__65877,map__65894,map__65894__$1,title__$1,string,uid__$2,s__65889__$2,temp__5735__auto____$3,map__65886,map__65886__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65885,s__65883__$2,temp__5735__auto____$2,vec__65879,group_title,group,c__4580__auto__,size__4581__auto__,b__65878,s__65876__$2,temp__5735__auto____$1,vec__65872,linked_or_unlinked,refs,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65807_$_iter__65875_$_iter__65882_$_iter__65888(cljs.core.rest(s__65889__$2)));
}
} else {
return null;
}
break;
}
});})(i__65884,i__65877,map__65886,map__65886__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65885,s__65883__$2,temp__5735__auto____$2,vec__65879,group_title,group,c__4580__auto__,size__4581__auto__,b__65878,s__65876__$2,temp__5735__auto____$1,vec__65872,linked_or_unlinked,refs,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
,null,null));
});})(i__65884,i__65877,map__65886,map__65886__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65885,s__65883__$2,temp__5735__auto____$2,vec__65879,group_title,group,c__4580__auto__,size__4581__auto__,b__65878,s__65876__$2,temp__5735__auto____$1,vec__65872,linked_or_unlinked,refs,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__65969 = (i__65884 + (1));
i__65884 = G__65969;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65885),athens$devcards$node_page$node_page_el_$_iter__65807_$_iter__65875_$_iter__65882(cljs.core.chunk_rest(s__65883__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65885),null);
}
} else {
var map__65896 = cljs.core.first(s__65883__$2);
var map__65896__$1 = (((((!((map__65896 == null))))?(((((map__65896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65896):map__65896);
var block = map__65896__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65896__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65896__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65877,map__65896,map__65896__$1,block,uid__$1,parents,s__65883__$2,temp__5735__auto____$2,vec__65879,group_title,group,c__4580__auto__,size__4581__auto__,b__65878,s__65876__$2,temp__5735__auto____$1,vec__65872,linked_or_unlinked,refs,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65807_$_iter__65875_$_iter__65882_$_iter__65898(s__65899){
return (new cljs.core.LazySeq(null,((function (i__65877,map__65896,map__65896__$1,block,uid__$1,parents,s__65883__$2,temp__5735__auto____$2,vec__65879,group_title,group,c__4580__auto__,size__4581__auto__,b__65878,s__65876__$2,temp__5735__auto____$1,vec__65872,linked_or_unlinked,refs,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
return (function (){
var s__65899__$1 = s__65899;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65899__$1);
if(temp__5735__auto____$3){
var s__65899__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65899__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65899__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65901 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65900 = (0);
while(true){
if((i__65900 < size__4581__auto____$1)){
var map__65902 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65900);
var map__65902__$1 = (((((!((map__65902 == null))))?(((((map__65902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65902):map__65902);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65902__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65902__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65902__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65901,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65900,i__65877,map__65902,map__65902__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65901,s__65899__$2,temp__5735__auto____$3,map__65896,map__65896__$1,block,uid__$1,parents,s__65883__$2,temp__5735__auto____$2,vec__65879,group_title,group,c__4580__auto__,size__4581__auto__,b__65878,s__65876__$2,temp__5735__auto____$1,vec__65872,linked_or_unlinked,refs,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65900,i__65877,map__65902,map__65902__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65901,s__65899__$2,temp__5735__auto____$3,map__65896,map__65896__$1,block,uid__$1,parents,s__65883__$2,temp__5735__auto____$2,vec__65879,group_title,group,c__4580__auto__,size__4581__auto__,b__65878,s__65876__$2,temp__5735__auto____$1,vec__65872,linked_or_unlinked,refs,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65970 = (i__65900 + (1));
i__65900 = G__65970;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65901),athens$devcards$node_page$node_page_el_$_iter__65807_$_iter__65875_$_iter__65882_$_iter__65898(cljs.core.chunk_rest(s__65899__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65901),null);
}
} else {
var map__65904 = cljs.core.first(s__65899__$2);
var map__65904__$1 = (((((!((map__65904 == null))))?(((((map__65904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65904):map__65904);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65904__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65904__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65904__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65877,map__65904,map__65904__$1,title__$1,string,uid__$2,s__65899__$2,temp__5735__auto____$3,map__65896,map__65896__$1,block,uid__$1,parents,s__65883__$2,temp__5735__auto____$2,vec__65879,group_title,group,c__4580__auto__,size__4581__auto__,b__65878,s__65876__$2,temp__5735__auto____$1,vec__65872,linked_or_unlinked,refs,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65877,map__65904,map__65904__$1,title__$1,string,uid__$2,s__65899__$2,temp__5735__auto____$3,map__65896,map__65896__$1,block,uid__$1,parents,s__65883__$2,temp__5735__auto____$2,vec__65879,group_title,group,c__4580__auto__,size__4581__auto__,b__65878,s__65876__$2,temp__5735__auto____$1,vec__65872,linked_or_unlinked,refs,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65807_$_iter__65875_$_iter__65882_$_iter__65898(cljs.core.rest(s__65899__$2)));
}
} else {
return null;
}
break;
}
});})(i__65877,map__65896,map__65896__$1,block,uid__$1,parents,s__65883__$2,temp__5735__auto____$2,vec__65879,group_title,group,c__4580__auto__,size__4581__auto__,b__65878,s__65876__$2,temp__5735__auto____$1,vec__65872,linked_or_unlinked,refs,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
,null,null));
});})(i__65877,map__65896,map__65896__$1,block,uid__$1,parents,s__65883__$2,temp__5735__auto____$2,vec__65879,group_title,group,c__4580__auto__,size__4581__auto__,b__65878,s__65876__$2,temp__5735__auto____$1,vec__65872,linked_or_unlinked,refs,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__65807_$_iter__65875_$_iter__65882(cljs.core.rest(s__65883__$2)));
}
} else {
return null;
}
break;
}
});})(i__65877,vec__65879,group_title,group,c__4580__auto__,size__4581__auto__,b__65878,s__65876__$2,temp__5735__auto____$1,vec__65872,linked_or_unlinked,refs,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
,null,null));
});})(i__65877,vec__65879,group_title,group,c__4580__auto__,size__4581__auto__,b__65878,s__65876__$2,temp__5735__auto____$1,vec__65872,linked_or_unlinked,refs,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__65971 = (i__65877 + (1));
i__65877 = G__65971;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65878),athens$devcards$node_page$node_page_el_$_iter__65807_$_iter__65875(cljs.core.chunk_rest(s__65876__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65878),null);
}
} else {
var vec__65906 = cljs.core.first(s__65876__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65906,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65906,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__65906,group_title,group,s__65876__$2,temp__5735__auto____$1,vec__65872,linked_or_unlinked,refs,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__65906,group_title,group,s__65876__$2,temp__5735__auto____$1,vec__65872,linked_or_unlinked,refs,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (vec__65906,group_title,group,s__65876__$2,temp__5735__auto____$1,vec__65872,linked_or_unlinked,refs,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65807_$_iter__65875_$_iter__65909(s__65910){
return (new cljs.core.LazySeq(null,(function (){
var s__65910__$1 = s__65910;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65910__$1);
if(temp__5735__auto____$2){
var s__65910__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65910__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65910__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65912 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65911 = (0);
while(true){
if((i__65911 < size__4581__auto__)){
var map__65913 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65911);
var map__65913__$1 = (((((!((map__65913 == null))))?(((((map__65913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65913):map__65913);
var block = map__65913__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65913__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65913__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__65912,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65911,map__65913,map__65913__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65912,s__65910__$2,temp__5735__auto____$2,vec__65906,group_title,group,s__65876__$2,temp__5735__auto____$1,vec__65872,linked_or_unlinked,refs,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65807_$_iter__65875_$_iter__65909_$_iter__65915(s__65916){
return (new cljs.core.LazySeq(null,((function (i__65911,map__65913,map__65913__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65912,s__65910__$2,temp__5735__auto____$2,vec__65906,group_title,group,s__65876__$2,temp__5735__auto____$1,vec__65872,linked_or_unlinked,refs,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
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
cljs.core.chunk_append(b__65918,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65917,i__65911,map__65919,map__65919__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65918,s__65916__$2,temp__5735__auto____$3,map__65913,map__65913__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65912,s__65910__$2,temp__5735__auto____$2,vec__65906,group_title,group,s__65876__$2,temp__5735__auto____$1,vec__65872,linked_or_unlinked,refs,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65917,i__65911,map__65919,map__65919__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65918,s__65916__$2,temp__5735__auto____$3,map__65913,map__65913__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65912,s__65910__$2,temp__5735__auto____$2,vec__65906,group_title,group,s__65876__$2,temp__5735__auto____$1,vec__65872,linked_or_unlinked,refs,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65972 = (i__65917 + (1));
i__65917 = G__65972;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65918),athens$devcards$node_page$node_page_el_$_iter__65807_$_iter__65875_$_iter__65909_$_iter__65915(cljs.core.chunk_rest(s__65916__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65918),null);
}
} else {
var map__65921 = cljs.core.first(s__65916__$2);
var map__65921__$1 = (((((!((map__65921 == null))))?(((((map__65921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65921):map__65921);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65921__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65921__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65921__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65911,map__65921,map__65921__$1,title__$1,string,uid__$2,s__65916__$2,temp__5735__auto____$3,map__65913,map__65913__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65912,s__65910__$2,temp__5735__auto____$2,vec__65906,group_title,group,s__65876__$2,temp__5735__auto____$1,vec__65872,linked_or_unlinked,refs,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65911,map__65921,map__65921__$1,title__$1,string,uid__$2,s__65916__$2,temp__5735__auto____$3,map__65913,map__65913__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65912,s__65910__$2,temp__5735__auto____$2,vec__65906,group_title,group,s__65876__$2,temp__5735__auto____$1,vec__65872,linked_or_unlinked,refs,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65807_$_iter__65875_$_iter__65909_$_iter__65915(cljs.core.rest(s__65916__$2)));
}
} else {
return null;
}
break;
}
});})(i__65911,map__65913,map__65913__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65912,s__65910__$2,temp__5735__auto____$2,vec__65906,group_title,group,s__65876__$2,temp__5735__auto____$1,vec__65872,linked_or_unlinked,refs,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
,null,null));
});})(i__65911,map__65913,map__65913__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65912,s__65910__$2,temp__5735__auto____$2,vec__65906,group_title,group,s__65876__$2,temp__5735__auto____$1,vec__65872,linked_or_unlinked,refs,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__65973 = (i__65911 + (1));
i__65911 = G__65973;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65912),athens$devcards$node_page$node_page_el_$_iter__65807_$_iter__65875_$_iter__65909(cljs.core.chunk_rest(s__65910__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65912),null);
}
} else {
var map__65923 = cljs.core.first(s__65910__$2);
var map__65923__$1 = (((((!((map__65923 == null))))?(((((map__65923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65923):map__65923);
var block = map__65923__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65923__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65923__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (map__65923,map__65923__$1,block,uid__$1,parents,s__65910__$2,temp__5735__auto____$2,vec__65906,group_title,group,s__65876__$2,temp__5735__auto____$1,vec__65872,linked_or_unlinked,refs,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65807_$_iter__65875_$_iter__65909_$_iter__65925(s__65926){
return (new cljs.core.LazySeq(null,(function (){
var s__65926__$1 = s__65926;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65926__$1);
if(temp__5735__auto____$3){
var s__65926__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65926__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65926__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65928 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65927 = (0);
while(true){
if((i__65927 < size__4581__auto__)){
var map__65929 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65927);
var map__65929__$1 = (((((!((map__65929 == null))))?(((((map__65929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65929):map__65929);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65929__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65929__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65929__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65928,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65927,map__65929,map__65929__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__65928,s__65926__$2,temp__5735__auto____$3,map__65923,map__65923__$1,block,uid__$1,parents,s__65910__$2,temp__5735__auto____$2,vec__65906,group_title,group,s__65876__$2,temp__5735__auto____$1,vec__65872,linked_or_unlinked,refs,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65927,map__65929,map__65929__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__65928,s__65926__$2,temp__5735__auto____$3,map__65923,map__65923__$1,block,uid__$1,parents,s__65910__$2,temp__5735__auto____$2,vec__65906,group_title,group,s__65876__$2,temp__5735__auto____$1,vec__65872,linked_or_unlinked,refs,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65974 = (i__65927 + (1));
i__65927 = G__65974;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65928),athens$devcards$node_page$node_page_el_$_iter__65807_$_iter__65875_$_iter__65909_$_iter__65925(cljs.core.chunk_rest(s__65926__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65928),null);
}
} else {
var map__65931 = cljs.core.first(s__65926__$2);
var map__65931__$1 = (((((!((map__65931 == null))))?(((((map__65931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65931):map__65931);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65931__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65931__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65931__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__65931,map__65931__$1,title__$1,string,uid__$2,s__65926__$2,temp__5735__auto____$3,map__65923,map__65923__$1,block,uid__$1,parents,s__65910__$2,temp__5735__auto____$2,vec__65906,group_title,group,s__65876__$2,temp__5735__auto____$1,vec__65872,linked_or_unlinked,refs,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__65931,map__65931__$1,title__$1,string,uid__$2,s__65926__$2,temp__5735__auto____$3,map__65923,map__65923__$1,block,uid__$1,parents,s__65910__$2,temp__5735__auto____$2,vec__65906,group_title,group,s__65876__$2,temp__5735__auto____$1,vec__65872,linked_or_unlinked,refs,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65807_$_iter__65875_$_iter__65909_$_iter__65925(cljs.core.rest(s__65926__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__65923,map__65923__$1,block,uid__$1,parents,s__65910__$2,temp__5735__auto____$2,vec__65906,group_title,group,s__65876__$2,temp__5735__auto____$1,vec__65872,linked_or_unlinked,refs,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__65807_$_iter__65875_$_iter__65909(cljs.core.rest(s__65910__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__65906,group_title,group,s__65876__$2,temp__5735__auto____$1,vec__65872,linked_or_unlinked,refs,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__65807_$_iter__65875(cljs.core.rest(s__65876__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__65872,linked_or_unlinked,refs,s__65808__$2,temp__5735__auto__,map__65795,map__65795__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null),athens$devcards$node_page$node_page_el_$_iter__65807(cljs.core.rest(s__65808__$2)));
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
var map__65933 = athens.db.get_node_document(ident);
var map__65933__$1 = (((((!((map__65933 == null))))?(((((map__65933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65933):map__65933);
var node = map__65933__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65933__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65933__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__65935 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__65935) : re_frame.core.subscribe.call(null,G__65935));
})());
var timeline_page_QMARK_ = athens.devcards.node_page.is_timeline_page(uid);
if(clojure.string.blank_QMARK_(title)){
return null;
} else {
var ref_groups = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Linked References",athens.devcards.node_page.get_data(athens.patterns.linked(title))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unlinked References",athens.devcards.node_page.get_data(athens.patterns.unlinked(title))], null)], null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.node_page.node_page_el,node,editing_uid,ref_groups,timeline_page_QMARK_], null);
}
});

//# sourceMappingURL=athens.devcards.node_page.js.map
