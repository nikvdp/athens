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
var G__65826 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact-event","transact-event",1188240621),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__65826) : re_frame.core.dispatch.call(null,G__65826));
});
athens.devcards.node_page.db_handler = goog.functions.debounce(athens.devcards.node_page.handler,(500));
athens.devcards.node_page.get_ref_ids = (function athens$devcards$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__65827 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__65828 = athens.db.dsdb;
var G__65829 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__65827,G__65828,G__65829) : posh.reagent.q.call(null,G__65827,G__65828,G__65829));
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
athens.devcards.node_page.node_page_el = (function athens$devcards$node_page$node_page_el(p__65830,editing_uid,ref_groups){
var map__65831 = p__65830;
var map__65831__$1 = (((((!((map__65831 == null))))?(((((map__65831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65831):map__65831);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65831__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65831__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65831__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.page_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__65833 = e.target.value;
var G__65834 = uid;
return (athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__65833,G__65834) : athens.devcards.node_page.db_handler.call(null,G__65833,G__65834));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__65835(s__65836){
return (new cljs.core.LazySeq(null,(function (){
var s__65836__$1 = s__65836;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65836__$1);
if(temp__5735__auto__){
var s__65836__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65836__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65836__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65838 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65837 = (0);
while(true){
if((i__65837 < size__4581__auto__)){
var map__65839 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65837);
var map__65839__$1 = (((((!((map__65839 == null))))?(((((map__65839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65839):map__65839);
var child = map__65839__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65839__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65838,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__65988 = (i__65837 + (1));
i__65837 = G__65988;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65838),athens$devcards$node_page$node_page_el_$_iter__65835(cljs.core.chunk_rest(s__65836__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65838),null);
}
} else {
var map__65841 = cljs.core.first(s__65836__$2);
var map__65841__$1 = (((((!((map__65841 == null))))?(((((map__65841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65841):map__65841);
var child = map__65841__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65841__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$devcards$node_page$node_page_el_$_iter__65835(cljs.core.rest(s__65836__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__65843(s__65844){
return (new cljs.core.LazySeq(null,(function (){
var s__65844__$1 = s__65844;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65844__$1);
if(temp__5735__auto__){
var s__65844__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65844__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65844__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65846 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65845 = (0);
while(true){
if((i__65845 < size__4581__auto__)){
var vec__65847 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65845);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65847,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65847,(1),null);
cljs.core.chunk_append(b__65846,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (i__65845,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65843_$_iter__65850(s__65851){
return (new cljs.core.LazySeq(null,((function (i__65845,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function (){
var s__65851__$1 = s__65851;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__65851__$1);
if(temp__5735__auto____$1){
var s__65851__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__65851__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65851__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65853 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65852 = (0);
while(true){
if((i__65852 < size__4581__auto____$1)){
var vec__65854 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65852);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65854,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65854,(1),null);
cljs.core.chunk_append(b__65853,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65852,i__65845,vec__65854,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65853,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__65852,i__65845,vec__65854,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65853,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__65852,i__65845,vec__65854,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65853,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65843_$_iter__65850_$_iter__65857(s__65858){
return (new cljs.core.LazySeq(null,((function (i__65852,i__65845,vec__65854,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65853,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function (){
var s__65858__$1 = s__65858;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65858__$1);
if(temp__5735__auto____$2){
var s__65858__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65858__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__65858__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__65860 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__65859 = (0);
while(true){
if((i__65859 < size__4581__auto____$2)){
var map__65861 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__65859);
var map__65861__$1 = (((((!((map__65861 == null))))?(((((map__65861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65861):map__65861);
var block = map__65861__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65861__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65861__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__65860,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65859,i__65852,i__65845,map__65861,map__65861__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65860,s__65858__$2,temp__5735__auto____$2,vec__65854,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65853,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65843_$_iter__65850_$_iter__65857_$_iter__65863(s__65864){
return (new cljs.core.LazySeq(null,((function (i__65859,i__65852,i__65845,map__65861,map__65861__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65860,s__65858__$2,temp__5735__auto____$2,vec__65854,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65853,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function (){
var s__65864__$1 = s__65864;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65864__$1);
if(temp__5735__auto____$3){
var s__65864__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65864__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__65864__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__65866 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__65865 = (0);
while(true){
if((i__65865 < size__4581__auto____$3)){
var map__65867 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__65865);
var map__65867__$1 = (((((!((map__65867 == null))))?(((((map__65867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65867):map__65867);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65867__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65867__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65867__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65866,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65865,i__65859,i__65852,i__65845,map__65867,map__65867__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__65866,s__65864__$2,temp__5735__auto____$3,map__65861,map__65861__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65860,s__65858__$2,temp__5735__auto____$2,vec__65854,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65853,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65865,i__65859,i__65852,i__65845,map__65867,map__65867__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__65866,s__65864__$2,temp__5735__auto____$3,map__65861,map__65861__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65860,s__65858__$2,temp__5735__auto____$2,vec__65854,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65853,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65994 = (i__65865 + (1));
i__65865 = G__65994;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65866),athens$devcards$node_page$node_page_el_$_iter__65843_$_iter__65850_$_iter__65857_$_iter__65863(cljs.core.chunk_rest(s__65864__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65866),null);
}
} else {
var map__65869 = cljs.core.first(s__65864__$2);
var map__65869__$1 = (((((!((map__65869 == null))))?(((((map__65869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65869):map__65869);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65869__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65869__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65869__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65859,i__65852,i__65845,map__65869,map__65869__$1,title__$1,string,uid__$2,s__65864__$2,temp__5735__auto____$3,map__65861,map__65861__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65860,s__65858__$2,temp__5735__auto____$2,vec__65854,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65853,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65859,i__65852,i__65845,map__65869,map__65869__$1,title__$1,string,uid__$2,s__65864__$2,temp__5735__auto____$3,map__65861,map__65861__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65860,s__65858__$2,temp__5735__auto____$2,vec__65854,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65853,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65843_$_iter__65850_$_iter__65857_$_iter__65863(cljs.core.rest(s__65864__$2)));
}
} else {
return null;
}
break;
}
});})(i__65859,i__65852,i__65845,map__65861,map__65861__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65860,s__65858__$2,temp__5735__auto____$2,vec__65854,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65853,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
,null,null));
});})(i__65859,i__65852,i__65845,map__65861,map__65861__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65860,s__65858__$2,temp__5735__auto____$2,vec__65854,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65853,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__65995 = (i__65859 + (1));
i__65859 = G__65995;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65860),athens$devcards$node_page$node_page_el_$_iter__65843_$_iter__65850_$_iter__65857(cljs.core.chunk_rest(s__65858__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65860),null);
}
} else {
var map__65871 = cljs.core.first(s__65858__$2);
var map__65871__$1 = (((((!((map__65871 == null))))?(((((map__65871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65871):map__65871);
var block = map__65871__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65871__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65871__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65852,i__65845,map__65871,map__65871__$1,block,uid__$1,parents,s__65858__$2,temp__5735__auto____$2,vec__65854,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65853,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65843_$_iter__65850_$_iter__65857_$_iter__65873(s__65874){
return (new cljs.core.LazySeq(null,((function (i__65852,i__65845,map__65871,map__65871__$1,block,uid__$1,parents,s__65858__$2,temp__5735__auto____$2,vec__65854,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65853,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function (){
var s__65874__$1 = s__65874;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65874__$1);
if(temp__5735__auto____$3){
var s__65874__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65874__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__65874__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__65876 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__65875 = (0);
while(true){
if((i__65875 < size__4581__auto____$2)){
var map__65877 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__65875);
var map__65877__$1 = (((((!((map__65877 == null))))?(((((map__65877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65877):map__65877);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65877__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65877__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65877__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65876,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65875,i__65852,i__65845,map__65877,map__65877__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65876,s__65874__$2,temp__5735__auto____$3,map__65871,map__65871__$1,block,uid__$1,parents,s__65858__$2,temp__5735__auto____$2,vec__65854,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65853,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65875,i__65852,i__65845,map__65877,map__65877__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65876,s__65874__$2,temp__5735__auto____$3,map__65871,map__65871__$1,block,uid__$1,parents,s__65858__$2,temp__5735__auto____$2,vec__65854,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65853,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65996 = (i__65875 + (1));
i__65875 = G__65996;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65876),athens$devcards$node_page$node_page_el_$_iter__65843_$_iter__65850_$_iter__65857_$_iter__65873(cljs.core.chunk_rest(s__65874__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65876),null);
}
} else {
var map__65879 = cljs.core.first(s__65874__$2);
var map__65879__$1 = (((((!((map__65879 == null))))?(((((map__65879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65879):map__65879);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65879__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65879__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65879__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65852,i__65845,map__65879,map__65879__$1,title__$1,string,uid__$2,s__65874__$2,temp__5735__auto____$3,map__65871,map__65871__$1,block,uid__$1,parents,s__65858__$2,temp__5735__auto____$2,vec__65854,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65853,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65852,i__65845,map__65879,map__65879__$1,title__$1,string,uid__$2,s__65874__$2,temp__5735__auto____$3,map__65871,map__65871__$1,block,uid__$1,parents,s__65858__$2,temp__5735__auto____$2,vec__65854,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65853,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65843_$_iter__65850_$_iter__65857_$_iter__65873(cljs.core.rest(s__65874__$2)));
}
} else {
return null;
}
break;
}
});})(i__65852,i__65845,map__65871,map__65871__$1,block,uid__$1,parents,s__65858__$2,temp__5735__auto____$2,vec__65854,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65853,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
,null,null));
});})(i__65852,i__65845,map__65871,map__65871__$1,block,uid__$1,parents,s__65858__$2,temp__5735__auto____$2,vec__65854,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65853,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__65843_$_iter__65850_$_iter__65857(cljs.core.rest(s__65858__$2)));
}
} else {
return null;
}
break;
}
});})(i__65852,i__65845,vec__65854,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65853,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
,null,null));
});})(i__65852,i__65845,vec__65854,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65853,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__65997 = (i__65852 + (1));
i__65852 = G__65997;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65853),athens$devcards$node_page$node_page_el_$_iter__65843_$_iter__65850(cljs.core.chunk_rest(s__65851__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65853),null);
}
} else {
var vec__65881 = cljs.core.first(s__65851__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65881,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65881,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65845,vec__65881,group_title,group,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__65845,vec__65881,group_title,group,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__65845,vec__65881,group_title,group,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65843_$_iter__65850_$_iter__65884(s__65885){
return (new cljs.core.LazySeq(null,((function (i__65845,vec__65881,group_title,group,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function (){
var s__65885__$1 = s__65885;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65885__$1);
if(temp__5735__auto____$2){
var s__65885__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65885__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65885__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65887 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65886 = (0);
while(true){
if((i__65886 < size__4581__auto____$1)){
var map__65888 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65886);
var map__65888__$1 = (((((!((map__65888 == null))))?(((((map__65888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65888):map__65888);
var block = map__65888__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65888__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65888__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__65887,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65886,i__65845,map__65888,map__65888__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65887,s__65885__$2,temp__5735__auto____$2,vec__65881,group_title,group,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65843_$_iter__65850_$_iter__65884_$_iter__65890(s__65891){
return (new cljs.core.LazySeq(null,((function (i__65886,i__65845,map__65888,map__65888__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65887,s__65885__$2,temp__5735__auto____$2,vec__65881,group_title,group,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function (){
var s__65891__$1 = s__65891;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65891__$1);
if(temp__5735__auto____$3){
var s__65891__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65891__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__65891__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__65893 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__65892 = (0);
while(true){
if((i__65892 < size__4581__auto____$2)){
var map__65894 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__65892);
var map__65894__$1 = (((((!((map__65894 == null))))?(((((map__65894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65894):map__65894);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65894__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65894__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65894__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65893,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65892,i__65886,i__65845,map__65894,map__65894__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65893,s__65891__$2,temp__5735__auto____$3,map__65888,map__65888__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65887,s__65885__$2,temp__5735__auto____$2,vec__65881,group_title,group,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65892,i__65886,i__65845,map__65894,map__65894__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65893,s__65891__$2,temp__5735__auto____$3,map__65888,map__65888__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65887,s__65885__$2,temp__5735__auto____$2,vec__65881,group_title,group,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65998 = (i__65892 + (1));
i__65892 = G__65998;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65893),athens$devcards$node_page$node_page_el_$_iter__65843_$_iter__65850_$_iter__65884_$_iter__65890(cljs.core.chunk_rest(s__65891__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65893),null);
}
} else {
var map__65896 = cljs.core.first(s__65891__$2);
var map__65896__$1 = (((((!((map__65896 == null))))?(((((map__65896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65896):map__65896);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65896__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65896__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65896__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65886,i__65845,map__65896,map__65896__$1,title__$1,string,uid__$2,s__65891__$2,temp__5735__auto____$3,map__65888,map__65888__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65887,s__65885__$2,temp__5735__auto____$2,vec__65881,group_title,group,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65886,i__65845,map__65896,map__65896__$1,title__$1,string,uid__$2,s__65891__$2,temp__5735__auto____$3,map__65888,map__65888__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65887,s__65885__$2,temp__5735__auto____$2,vec__65881,group_title,group,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65843_$_iter__65850_$_iter__65884_$_iter__65890(cljs.core.rest(s__65891__$2)));
}
} else {
return null;
}
break;
}
});})(i__65886,i__65845,map__65888,map__65888__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65887,s__65885__$2,temp__5735__auto____$2,vec__65881,group_title,group,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
,null,null));
});})(i__65886,i__65845,map__65888,map__65888__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65887,s__65885__$2,temp__5735__auto____$2,vec__65881,group_title,group,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__65999 = (i__65886 + (1));
i__65886 = G__65999;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65887),athens$devcards$node_page$node_page_el_$_iter__65843_$_iter__65850_$_iter__65884(cljs.core.chunk_rest(s__65885__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65887),null);
}
} else {
var map__65898 = cljs.core.first(s__65885__$2);
var map__65898__$1 = (((((!((map__65898 == null))))?(((((map__65898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65898):map__65898);
var block = map__65898__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65898__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65898__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65845,map__65898,map__65898__$1,block,uid__$1,parents,s__65885__$2,temp__5735__auto____$2,vec__65881,group_title,group,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65843_$_iter__65850_$_iter__65884_$_iter__65900(s__65901){
return (new cljs.core.LazySeq(null,((function (i__65845,map__65898,map__65898__$1,block,uid__$1,parents,s__65885__$2,temp__5735__auto____$2,vec__65881,group_title,group,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function (){
var s__65901__$1 = s__65901;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65901__$1);
if(temp__5735__auto____$3){
var s__65901__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65901__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65901__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65903 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65902 = (0);
while(true){
if((i__65902 < size__4581__auto____$1)){
var map__65904 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65902);
var map__65904__$1 = (((((!((map__65904 == null))))?(((((map__65904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65904):map__65904);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65904__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65904__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65904__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65903,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65902,i__65845,map__65904,map__65904__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65903,s__65901__$2,temp__5735__auto____$3,map__65898,map__65898__$1,block,uid__$1,parents,s__65885__$2,temp__5735__auto____$2,vec__65881,group_title,group,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65902,i__65845,map__65904,map__65904__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65903,s__65901__$2,temp__5735__auto____$3,map__65898,map__65898__$1,block,uid__$1,parents,s__65885__$2,temp__5735__auto____$2,vec__65881,group_title,group,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__66000 = (i__65902 + (1));
i__65902 = G__66000;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65903),athens$devcards$node_page$node_page_el_$_iter__65843_$_iter__65850_$_iter__65884_$_iter__65900(cljs.core.chunk_rest(s__65901__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65903),null);
}
} else {
var map__65906 = cljs.core.first(s__65901__$2);
var map__65906__$1 = (((((!((map__65906 == null))))?(((((map__65906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65906):map__65906);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65906__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65906__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65906__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65845,map__65906,map__65906__$1,title__$1,string,uid__$2,s__65901__$2,temp__5735__auto____$3,map__65898,map__65898__$1,block,uid__$1,parents,s__65885__$2,temp__5735__auto____$2,vec__65881,group_title,group,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65845,map__65906,map__65906__$1,title__$1,string,uid__$2,s__65901__$2,temp__5735__auto____$3,map__65898,map__65898__$1,block,uid__$1,parents,s__65885__$2,temp__5735__auto____$2,vec__65881,group_title,group,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65843_$_iter__65850_$_iter__65884_$_iter__65900(cljs.core.rest(s__65901__$2)));
}
} else {
return null;
}
break;
}
});})(i__65845,map__65898,map__65898__$1,block,uid__$1,parents,s__65885__$2,temp__5735__auto____$2,vec__65881,group_title,group,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
,null,null));
});})(i__65845,map__65898,map__65898__$1,block,uid__$1,parents,s__65885__$2,temp__5735__auto____$2,vec__65881,group_title,group,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__65843_$_iter__65850_$_iter__65884(cljs.core.rest(s__65885__$2)));
}
} else {
return null;
}
break;
}
});})(i__65845,vec__65881,group_title,group,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
,null,null));
});})(i__65845,vec__65881,group_title,group,s__65851__$2,temp__5735__auto____$1,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__65843_$_iter__65850(cljs.core.rest(s__65851__$2)));
}
} else {
return null;
}
break;
}
});})(i__65845,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
,null,null));
});})(i__65845,vec__65847,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65846,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null));

var G__66001 = (i__65845 + (1));
i__65845 = G__66001;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65846),athens$devcards$node_page$node_page_el_$_iter__65843(cljs.core.chunk_rest(s__65844__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65846),null);
}
} else {
var vec__65908 = cljs.core.first(s__65844__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65908,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65908,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (vec__65908,linked_or_unlinked,refs,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65843_$_iter__65911(s__65912){
return (new cljs.core.LazySeq(null,(function (){
var s__65912__$1 = s__65912;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__65912__$1);
if(temp__5735__auto____$1){
var s__65912__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__65912__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65912__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65914 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65913 = (0);
while(true){
if((i__65913 < size__4581__auto__)){
var vec__65915 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65913);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65915,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65915,(1),null);
cljs.core.chunk_append(b__65914,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65913,vec__65915,group_title,group,c__4580__auto__,size__4581__auto__,b__65914,s__65912__$2,temp__5735__auto____$1,vec__65908,linked_or_unlinked,refs,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__65913,vec__65915,group_title,group,c__4580__auto__,size__4581__auto__,b__65914,s__65912__$2,temp__5735__auto____$1,vec__65908,linked_or_unlinked,refs,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__65913,vec__65915,group_title,group,c__4580__auto__,size__4581__auto__,b__65914,s__65912__$2,temp__5735__auto____$1,vec__65908,linked_or_unlinked,refs,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65843_$_iter__65911_$_iter__65918(s__65919){
return (new cljs.core.LazySeq(null,((function (i__65913,vec__65915,group_title,group,c__4580__auto__,size__4581__auto__,b__65914,s__65912__$2,temp__5735__auto____$1,vec__65908,linked_or_unlinked,refs,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function (){
var s__65919__$1 = s__65919;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65919__$1);
if(temp__5735__auto____$2){
var s__65919__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65919__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65919__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65921 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65920 = (0);
while(true){
if((i__65920 < size__4581__auto____$1)){
var map__65922 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65920);
var map__65922__$1 = (((((!((map__65922 == null))))?(((((map__65922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65922):map__65922);
var block = map__65922__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65922__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65922__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__65921,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65920,i__65913,map__65922,map__65922__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65921,s__65919__$2,temp__5735__auto____$2,vec__65915,group_title,group,c__4580__auto__,size__4581__auto__,b__65914,s__65912__$2,temp__5735__auto____$1,vec__65908,linked_or_unlinked,refs,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65843_$_iter__65911_$_iter__65918_$_iter__65924(s__65925){
return (new cljs.core.LazySeq(null,((function (i__65920,i__65913,map__65922,map__65922__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65921,s__65919__$2,temp__5735__auto____$2,vec__65915,group_title,group,c__4580__auto__,size__4581__auto__,b__65914,s__65912__$2,temp__5735__auto____$1,vec__65908,linked_or_unlinked,refs,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function (){
var s__65925__$1 = s__65925;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65925__$1);
if(temp__5735__auto____$3){
var s__65925__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65925__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__65925__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__65927 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__65926 = (0);
while(true){
if((i__65926 < size__4581__auto____$2)){
var map__65928 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__65926);
var map__65928__$1 = (((((!((map__65928 == null))))?(((((map__65928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65928):map__65928);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65928__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65928__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65928__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65927,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65926,i__65920,i__65913,map__65928,map__65928__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65927,s__65925__$2,temp__5735__auto____$3,map__65922,map__65922__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65921,s__65919__$2,temp__5735__auto____$2,vec__65915,group_title,group,c__4580__auto__,size__4581__auto__,b__65914,s__65912__$2,temp__5735__auto____$1,vec__65908,linked_or_unlinked,refs,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65926,i__65920,i__65913,map__65928,map__65928__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__65927,s__65925__$2,temp__5735__auto____$3,map__65922,map__65922__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65921,s__65919__$2,temp__5735__auto____$2,vec__65915,group_title,group,c__4580__auto__,size__4581__auto__,b__65914,s__65912__$2,temp__5735__auto____$1,vec__65908,linked_or_unlinked,refs,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__66002 = (i__65926 + (1));
i__65926 = G__66002;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65927),athens$devcards$node_page$node_page_el_$_iter__65843_$_iter__65911_$_iter__65918_$_iter__65924(cljs.core.chunk_rest(s__65925__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65927),null);
}
} else {
var map__65930 = cljs.core.first(s__65925__$2);
var map__65930__$1 = (((((!((map__65930 == null))))?(((((map__65930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65930):map__65930);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65930__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65930__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65930__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65920,i__65913,map__65930,map__65930__$1,title__$1,string,uid__$2,s__65925__$2,temp__5735__auto____$3,map__65922,map__65922__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65921,s__65919__$2,temp__5735__auto____$2,vec__65915,group_title,group,c__4580__auto__,size__4581__auto__,b__65914,s__65912__$2,temp__5735__auto____$1,vec__65908,linked_or_unlinked,refs,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65920,i__65913,map__65930,map__65930__$1,title__$1,string,uid__$2,s__65925__$2,temp__5735__auto____$3,map__65922,map__65922__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65921,s__65919__$2,temp__5735__auto____$2,vec__65915,group_title,group,c__4580__auto__,size__4581__auto__,b__65914,s__65912__$2,temp__5735__auto____$1,vec__65908,linked_or_unlinked,refs,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65843_$_iter__65911_$_iter__65918_$_iter__65924(cljs.core.rest(s__65925__$2)));
}
} else {
return null;
}
break;
}
});})(i__65920,i__65913,map__65922,map__65922__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65921,s__65919__$2,temp__5735__auto____$2,vec__65915,group_title,group,c__4580__auto__,size__4581__auto__,b__65914,s__65912__$2,temp__5735__auto____$1,vec__65908,linked_or_unlinked,refs,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
,null,null));
});})(i__65920,i__65913,map__65922,map__65922__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65921,s__65919__$2,temp__5735__auto____$2,vec__65915,group_title,group,c__4580__auto__,size__4581__auto__,b__65914,s__65912__$2,temp__5735__auto____$1,vec__65908,linked_or_unlinked,refs,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__66003 = (i__65920 + (1));
i__65920 = G__66003;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65921),athens$devcards$node_page$node_page_el_$_iter__65843_$_iter__65911_$_iter__65918(cljs.core.chunk_rest(s__65919__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65921),null);
}
} else {
var map__65932 = cljs.core.first(s__65919__$2);
var map__65932__$1 = (((((!((map__65932 == null))))?(((((map__65932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65932):map__65932);
var block = map__65932__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65932__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65932__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65913,map__65932,map__65932__$1,block,uid__$1,parents,s__65919__$2,temp__5735__auto____$2,vec__65915,group_title,group,c__4580__auto__,size__4581__auto__,b__65914,s__65912__$2,temp__5735__auto____$1,vec__65908,linked_or_unlinked,refs,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65843_$_iter__65911_$_iter__65918_$_iter__65934(s__65935){
return (new cljs.core.LazySeq(null,((function (i__65913,map__65932,map__65932__$1,block,uid__$1,parents,s__65919__$2,temp__5735__auto____$2,vec__65915,group_title,group,c__4580__auto__,size__4581__auto__,b__65914,s__65912__$2,temp__5735__auto____$1,vec__65908,linked_or_unlinked,refs,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function (){
var s__65935__$1 = s__65935;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65935__$1);
if(temp__5735__auto____$3){
var s__65935__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65935__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65935__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65937 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65936 = (0);
while(true){
if((i__65936 < size__4581__auto____$1)){
var map__65938 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65936);
var map__65938__$1 = (((((!((map__65938 == null))))?(((((map__65938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65938):map__65938);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65938__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65938__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65938__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65937,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65936,i__65913,map__65938,map__65938__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65937,s__65935__$2,temp__5735__auto____$3,map__65932,map__65932__$1,block,uid__$1,parents,s__65919__$2,temp__5735__auto____$2,vec__65915,group_title,group,c__4580__auto__,size__4581__auto__,b__65914,s__65912__$2,temp__5735__auto____$1,vec__65908,linked_or_unlinked,refs,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65936,i__65913,map__65938,map__65938__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65937,s__65935__$2,temp__5735__auto____$3,map__65932,map__65932__$1,block,uid__$1,parents,s__65919__$2,temp__5735__auto____$2,vec__65915,group_title,group,c__4580__auto__,size__4581__auto__,b__65914,s__65912__$2,temp__5735__auto____$1,vec__65908,linked_or_unlinked,refs,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__66004 = (i__65936 + (1));
i__65936 = G__66004;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65937),athens$devcards$node_page$node_page_el_$_iter__65843_$_iter__65911_$_iter__65918_$_iter__65934(cljs.core.chunk_rest(s__65935__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65937),null);
}
} else {
var map__65940 = cljs.core.first(s__65935__$2);
var map__65940__$1 = (((((!((map__65940 == null))))?(((((map__65940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65940):map__65940);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65940__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65940__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65940__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65913,map__65940,map__65940__$1,title__$1,string,uid__$2,s__65935__$2,temp__5735__auto____$3,map__65932,map__65932__$1,block,uid__$1,parents,s__65919__$2,temp__5735__auto____$2,vec__65915,group_title,group,c__4580__auto__,size__4581__auto__,b__65914,s__65912__$2,temp__5735__auto____$1,vec__65908,linked_or_unlinked,refs,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65913,map__65940,map__65940__$1,title__$1,string,uid__$2,s__65935__$2,temp__5735__auto____$3,map__65932,map__65932__$1,block,uid__$1,parents,s__65919__$2,temp__5735__auto____$2,vec__65915,group_title,group,c__4580__auto__,size__4581__auto__,b__65914,s__65912__$2,temp__5735__auto____$1,vec__65908,linked_or_unlinked,refs,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65843_$_iter__65911_$_iter__65918_$_iter__65934(cljs.core.rest(s__65935__$2)));
}
} else {
return null;
}
break;
}
});})(i__65913,map__65932,map__65932__$1,block,uid__$1,parents,s__65919__$2,temp__5735__auto____$2,vec__65915,group_title,group,c__4580__auto__,size__4581__auto__,b__65914,s__65912__$2,temp__5735__auto____$1,vec__65908,linked_or_unlinked,refs,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
,null,null));
});})(i__65913,map__65932,map__65932__$1,block,uid__$1,parents,s__65919__$2,temp__5735__auto____$2,vec__65915,group_title,group,c__4580__auto__,size__4581__auto__,b__65914,s__65912__$2,temp__5735__auto____$1,vec__65908,linked_or_unlinked,refs,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__65843_$_iter__65911_$_iter__65918(cljs.core.rest(s__65919__$2)));
}
} else {
return null;
}
break;
}
});})(i__65913,vec__65915,group_title,group,c__4580__auto__,size__4581__auto__,b__65914,s__65912__$2,temp__5735__auto____$1,vec__65908,linked_or_unlinked,refs,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
,null,null));
});})(i__65913,vec__65915,group_title,group,c__4580__auto__,size__4581__auto__,b__65914,s__65912__$2,temp__5735__auto____$1,vec__65908,linked_or_unlinked,refs,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__66005 = (i__65913 + (1));
i__65913 = G__66005;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65914),athens$devcards$node_page$node_page_el_$_iter__65843_$_iter__65911(cljs.core.chunk_rest(s__65912__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65914),null);
}
} else {
var vec__65942 = cljs.core.first(s__65912__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65942,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65942,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__65942,group_title,group,s__65912__$2,temp__5735__auto____$1,vec__65908,linked_or_unlinked,refs,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__65942,group_title,group,s__65912__$2,temp__5735__auto____$1,vec__65908,linked_or_unlinked,refs,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (vec__65942,group_title,group,s__65912__$2,temp__5735__auto____$1,vec__65908,linked_or_unlinked,refs,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65843_$_iter__65911_$_iter__65945(s__65946){
return (new cljs.core.LazySeq(null,(function (){
var s__65946__$1 = s__65946;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65946__$1);
if(temp__5735__auto____$2){
var s__65946__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65946__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65946__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65948 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65947 = (0);
while(true){
if((i__65947 < size__4581__auto__)){
var map__65949 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65947);
var map__65949__$1 = (((((!((map__65949 == null))))?(((((map__65949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65949):map__65949);
var block = map__65949__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65949__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65949__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__65948,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__65947,map__65949,map__65949__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65948,s__65946__$2,temp__5735__auto____$2,vec__65942,group_title,group,s__65912__$2,temp__5735__auto____$1,vec__65908,linked_or_unlinked,refs,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65843_$_iter__65911_$_iter__65945_$_iter__65951(s__65952){
return (new cljs.core.LazySeq(null,((function (i__65947,map__65949,map__65949__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65948,s__65946__$2,temp__5735__auto____$2,vec__65942,group_title,group,s__65912__$2,temp__5735__auto____$1,vec__65908,linked_or_unlinked,refs,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function (){
var s__65952__$1 = s__65952;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65952__$1);
if(temp__5735__auto____$3){
var s__65952__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65952__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65952__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65954 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65953 = (0);
while(true){
if((i__65953 < size__4581__auto____$1)){
var map__65955 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65953);
var map__65955__$1 = (((((!((map__65955 == null))))?(((((map__65955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65955):map__65955);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65955__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65955__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65955__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65954,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65953,i__65947,map__65955,map__65955__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65954,s__65952__$2,temp__5735__auto____$3,map__65949,map__65949__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65948,s__65946__$2,temp__5735__auto____$2,vec__65942,group_title,group,s__65912__$2,temp__5735__auto____$1,vec__65908,linked_or_unlinked,refs,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65953,i__65947,map__65955,map__65955__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__65954,s__65952__$2,temp__5735__auto____$3,map__65949,map__65949__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65948,s__65946__$2,temp__5735__auto____$2,vec__65942,group_title,group,s__65912__$2,temp__5735__auto____$1,vec__65908,linked_or_unlinked,refs,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__66006 = (i__65953 + (1));
i__65953 = G__66006;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65954),athens$devcards$node_page$node_page_el_$_iter__65843_$_iter__65911_$_iter__65945_$_iter__65951(cljs.core.chunk_rest(s__65952__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65954),null);
}
} else {
var map__65957 = cljs.core.first(s__65952__$2);
var map__65957__$1 = (((((!((map__65957 == null))))?(((((map__65957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65957):map__65957);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65957__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65957__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65957__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65947,map__65957,map__65957__$1,title__$1,string,uid__$2,s__65952__$2,temp__5735__auto____$3,map__65949,map__65949__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65948,s__65946__$2,temp__5735__auto____$2,vec__65942,group_title,group,s__65912__$2,temp__5735__auto____$1,vec__65908,linked_or_unlinked,refs,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65947,map__65957,map__65957__$1,title__$1,string,uid__$2,s__65952__$2,temp__5735__auto____$3,map__65949,map__65949__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65948,s__65946__$2,temp__5735__auto____$2,vec__65942,group_title,group,s__65912__$2,temp__5735__auto____$1,vec__65908,linked_or_unlinked,refs,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65843_$_iter__65911_$_iter__65945_$_iter__65951(cljs.core.rest(s__65952__$2)));
}
} else {
return null;
}
break;
}
});})(i__65947,map__65949,map__65949__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65948,s__65946__$2,temp__5735__auto____$2,vec__65942,group_title,group,s__65912__$2,temp__5735__auto____$1,vec__65908,linked_or_unlinked,refs,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
,null,null));
});})(i__65947,map__65949,map__65949__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65948,s__65946__$2,temp__5735__auto____$2,vec__65942,group_title,group,s__65912__$2,temp__5735__auto____$1,vec__65908,linked_or_unlinked,refs,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__66007 = (i__65947 + (1));
i__65947 = G__66007;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65948),athens$devcards$node_page$node_page_el_$_iter__65843_$_iter__65911_$_iter__65945(cljs.core.chunk_rest(s__65946__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65948),null);
}
} else {
var map__65959 = cljs.core.first(s__65946__$2);
var map__65959__$1 = (((((!((map__65959 == null))))?(((((map__65959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65959):map__65959);
var block = map__65959__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65959__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65959__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (map__65959,map__65959__$1,block,uid__$1,parents,s__65946__$2,temp__5735__auto____$2,vec__65942,group_title,group,s__65912__$2,temp__5735__auto____$1,vec__65908,linked_or_unlinked,refs,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65843_$_iter__65911_$_iter__65945_$_iter__65961(s__65962){
return (new cljs.core.LazySeq(null,(function (){
var s__65962__$1 = s__65962;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65962__$1);
if(temp__5735__auto____$3){
var s__65962__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65962__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65962__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65964 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65963 = (0);
while(true){
if((i__65963 < size__4581__auto__)){
var map__65965 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65963);
var map__65965__$1 = (((((!((map__65965 == null))))?(((((map__65965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65965):map__65965);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65965__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65965__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65965__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65964,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65963,map__65965,map__65965__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__65964,s__65962__$2,temp__5735__auto____$3,map__65959,map__65959__$1,block,uid__$1,parents,s__65946__$2,temp__5735__auto____$2,vec__65942,group_title,group,s__65912__$2,temp__5735__auto____$1,vec__65908,linked_or_unlinked,refs,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__65963,map__65965,map__65965__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__65964,s__65962__$2,temp__5735__auto____$3,map__65959,map__65959__$1,block,uid__$1,parents,s__65946__$2,temp__5735__auto____$2,vec__65942,group_title,group,s__65912__$2,temp__5735__auto____$1,vec__65908,linked_or_unlinked,refs,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__66008 = (i__65963 + (1));
i__65963 = G__66008;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65964),athens$devcards$node_page$node_page_el_$_iter__65843_$_iter__65911_$_iter__65945_$_iter__65961(cljs.core.chunk_rest(s__65962__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65964),null);
}
} else {
var map__65967 = cljs.core.first(s__65962__$2);
var map__65967__$1 = (((((!((map__65967 == null))))?(((((map__65967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65967):map__65967);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65967__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65967__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65967__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__65967,map__65967__$1,title__$1,string,uid__$2,s__65962__$2,temp__5735__auto____$3,map__65959,map__65959__$1,block,uid__$1,parents,s__65946__$2,temp__5735__auto____$2,vec__65942,group_title,group,s__65912__$2,temp__5735__auto____$1,vec__65908,linked_or_unlinked,refs,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__65967,map__65967__$1,title__$1,string,uid__$2,s__65962__$2,temp__5735__auto____$3,map__65959,map__65959__$1,block,uid__$1,parents,s__65946__$2,temp__5735__auto____$2,vec__65942,group_title,group,s__65912__$2,temp__5735__auto____$1,vec__65908,linked_or_unlinked,refs,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65843_$_iter__65911_$_iter__65945_$_iter__65961(cljs.core.rest(s__65962__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__65959,map__65959__$1,block,uid__$1,parents,s__65946__$2,temp__5735__auto____$2,vec__65942,group_title,group,s__65912__$2,temp__5735__auto____$1,vec__65908,linked_or_unlinked,refs,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__65843_$_iter__65911_$_iter__65945(cljs.core.rest(s__65946__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__65942,group_title,group,s__65912__$2,temp__5735__auto____$1,vec__65908,linked_or_unlinked,refs,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__65843_$_iter__65911(cljs.core.rest(s__65912__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__65908,linked_or_unlinked,refs,s__65844__$2,temp__5735__auto__,map__65831,map__65831__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null),athens$devcards$node_page$node_page_el_$_iter__65843(cljs.core.rest(s__65844__$2)));
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
var editing_uid = cljs.core.deref((function (){var G__65969 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__65969) : re_frame.core.subscribe.call(null,G__65969));
})());
if(clojure.string.blank_QMARK_(title)){
return null;
} else {
var ref_groups = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Linked References",athens.devcards.node_page.get_data(athens.patterns.linked(title))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unlinked References",athens.devcards.node_page.get_data(athens.patterns.unlinked(title))], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.node_page.node_page_el,node,editing_uid,ref_groups], null);
}
});

//# sourceMappingURL=athens.devcards.node_page.js.map
