goog.provide('athens.devcards.node_page');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.db');
goog.require('athens.devcards.blocks');
goog.require('athens.devcards.buttons');
goog.require('athens.patterns');
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
athens.devcards.node_page.handler = (function athens$devcards$node_page$handler(val,uid){
var G__58039 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact-event","transact-event",1188240621),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58039) : re_frame.core.dispatch.call(null,G__58039));
});
athens.devcards.node_page.db_handler = goog.functions.debounce(athens.devcards.node_page.handler,(500));
athens.devcards.node_page.get_ref_ids = (function athens$devcards$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__58040 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__58041 = athens.db.dsdb;
var G__58042 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__58040,G__58041,G__58042) : posh.reagent.q.call(null,G__58040,G__58041,G__58042));
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
athens.devcards.node_page.node_page_el = (function athens$devcards$node_page$node_page_el(p__58043,editing_uid,ref_groups){
var map__58044 = p__58043;
var map__58044__$1 = (((((!((map__58044 == null))))?(((((map__58044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58044):map__58044);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58044__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58044__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58044__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58046 = e.target.value;
var G__58047 = uid;
return (athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58046,G__58047) : athens.devcards.node_page.db_handler.call(null,G__58046,G__58047));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__58048(s__58049){
return (new cljs.core.LazySeq(null,(function (){
var s__58049__$1 = s__58049;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58049__$1);
if(temp__5735__auto__){
var s__58049__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58049__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58049__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58051 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58050 = (0);
while(true){
if((i__58050 < size__4581__auto__)){
var map__58052 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58050);
var map__58052__$1 = (((((!((map__58052 == null))))?(((((map__58052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58052):map__58052);
var child = map__58052__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58052__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58051,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58203 = (i__58050 + (1));
i__58050 = G__58203;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58051),athens$devcards$node_page$node_page_el_$_iter__58048(cljs.core.chunk_rest(s__58049__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58051),null);
}
} else {
var map__58054 = cljs.core.first(s__58049__$2);
var map__58054__$1 = (((((!((map__58054 == null))))?(((((map__58054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58054):map__58054);
var child = map__58054__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58054__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$devcards$node_page$node_page_el_$_iter__58048(cljs.core.rest(s__58049__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__58056(s__58057){
return (new cljs.core.LazySeq(null,(function (){
var s__58057__$1 = s__58057;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58057__$1);
if(temp__5735__auto__){
var s__58057__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58057__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58057__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58059 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58058 = (0);
while(true){
if((i__58058 < size__4581__auto__)){
var vec__58060 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58058);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58060,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58060,(1),null);
cljs.core.chunk_append(b__58059,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null)], null),(function (){var iter__4582__auto__ = ((function (i__58058,vec__58060,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58059,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58056_$_iter__58063(s__58064){
return (new cljs.core.LazySeq(null,((function (i__58058,vec__58060,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58059,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid){
return (function (){
var s__58064__$1 = s__58064;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58064__$1);
if(temp__5735__auto____$1){
var s__58064__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58064__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58064__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58066 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58065 = (0);
while(true){
if((i__58065 < size__4581__auto____$1)){
var vec__58067 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58065);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58067,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58067,(1),null);
cljs.core.chunk_append(b__58066,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (i__58065,i__58058,vec__58067,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58066,s__58064__$2,temp__5735__auto____$1,vec__58060,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58059,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58056_$_iter__58063_$_iter__58070(s__58071){
return (new cljs.core.LazySeq(null,((function (i__58065,i__58058,vec__58067,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58066,s__58064__$2,temp__5735__auto____$1,vec__58060,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58059,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid){
return (function (){
var s__58071__$1 = s__58071;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58071__$1);
if(temp__5735__auto____$2){
var s__58071__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58071__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58071__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58073 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58072 = (0);
while(true){
if((i__58072 < size__4581__auto____$2)){
var map__58074 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58072);
var map__58074__$1 = (((((!((map__58074 == null))))?(((((map__58074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58074):map__58074);
var block = map__58074__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58074__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58074__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58073,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__58072,i__58065,i__58058,map__58074,map__58074__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58073,s__58071__$2,temp__5735__auto____$2,vec__58067,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58066,s__58064__$2,temp__5735__auto____$1,vec__58060,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58059,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__58072,i__58065,i__58058,map__58074,map__58074__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58073,s__58071__$2,temp__5735__auto____$2,vec__58067,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58066,s__58064__$2,temp__5735__auto____$1,vec__58060,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58059,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__58072,i__58065,i__58058,map__58074,map__58074__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58073,s__58071__$2,temp__5735__auto____$2,vec__58067,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58066,s__58064__$2,temp__5735__auto____$1,vec__58060,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58059,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58056_$_iter__58063_$_iter__58070_$_iter__58076(s__58077){
return (new cljs.core.LazySeq(null,((function (i__58072,i__58065,i__58058,map__58074,map__58074__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58073,s__58071__$2,temp__5735__auto____$2,vec__58067,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58066,s__58064__$2,temp__5735__auto____$1,vec__58060,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58059,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid){
return (function (){
var s__58077__$1 = s__58077;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58077__$1);
if(temp__5735__auto____$3){
var s__58077__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58077__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58077__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58079 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58078 = (0);
while(true){
if((i__58078 < size__4581__auto____$3)){
var map__58080 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58078);
var map__58080__$1 = (((((!((map__58080 == null))))?(((((map__58080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58080):map__58080);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58080__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58080__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58080__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58079,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58210 = (i__58078 + (1));
i__58078 = G__58210;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58079),athens$devcards$node_page$node_page_el_$_iter__58056_$_iter__58063_$_iter__58070_$_iter__58076(cljs.core.chunk_rest(s__58077__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58079),null);
}
} else {
var map__58082 = cljs.core.first(s__58077__$2);
var map__58082__$1 = (((((!((map__58082 == null))))?(((((map__58082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58082):map__58082);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58082__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58082__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58082__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58056_$_iter__58063_$_iter__58070_$_iter__58076(cljs.core.rest(s__58077__$2)));
}
} else {
return null;
}
break;
}
});})(i__58072,i__58065,i__58058,map__58074,map__58074__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58073,s__58071__$2,temp__5735__auto____$2,vec__58067,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58066,s__58064__$2,temp__5735__auto____$1,vec__58060,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58059,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid))
,null,null));
});})(i__58072,i__58065,i__58058,map__58074,map__58074__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58073,s__58071__$2,temp__5735__auto____$2,vec__58067,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58066,s__58064__$2,temp__5735__auto____$1,vec__58060,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58059,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__58211 = (i__58072 + (1));
i__58072 = G__58211;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58073),athens$devcards$node_page$node_page_el_$_iter__58056_$_iter__58063_$_iter__58070(cljs.core.chunk_rest(s__58071__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58073),null);
}
} else {
var map__58084 = cljs.core.first(s__58071__$2);
var map__58084__$1 = (((((!((map__58084 == null))))?(((((map__58084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58084):map__58084);
var block = map__58084__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58084__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58084__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__58065,i__58058,map__58084,map__58084__$1,block,uid__$1,parents,s__58071__$2,temp__5735__auto____$2,vec__58067,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58066,s__58064__$2,temp__5735__auto____$1,vec__58060,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58059,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__58065,i__58058,map__58084,map__58084__$1,block,uid__$1,parents,s__58071__$2,temp__5735__auto____$2,vec__58067,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58066,s__58064__$2,temp__5735__auto____$1,vec__58060,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58059,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__58065,i__58058,map__58084,map__58084__$1,block,uid__$1,parents,s__58071__$2,temp__5735__auto____$2,vec__58067,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58066,s__58064__$2,temp__5735__auto____$1,vec__58060,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58059,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58056_$_iter__58063_$_iter__58070_$_iter__58086(s__58087){
return (new cljs.core.LazySeq(null,((function (i__58065,i__58058,map__58084,map__58084__$1,block,uid__$1,parents,s__58071__$2,temp__5735__auto____$2,vec__58067,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58066,s__58064__$2,temp__5735__auto____$1,vec__58060,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58059,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid){
return (function (){
var s__58087__$1 = s__58087;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58087__$1);
if(temp__5735__auto____$3){
var s__58087__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58087__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58087__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58089 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58088 = (0);
while(true){
if((i__58088 < size__4581__auto____$2)){
var map__58090 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58088);
var map__58090__$1 = (((((!((map__58090 == null))))?(((((map__58090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58090):map__58090);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58090__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58090__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58090__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58089,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58212 = (i__58088 + (1));
i__58088 = G__58212;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58089),athens$devcards$node_page$node_page_el_$_iter__58056_$_iter__58063_$_iter__58070_$_iter__58086(cljs.core.chunk_rest(s__58087__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58089),null);
}
} else {
var map__58092 = cljs.core.first(s__58087__$2);
var map__58092__$1 = (((((!((map__58092 == null))))?(((((map__58092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58092):map__58092);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58092__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58092__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58092__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58056_$_iter__58063_$_iter__58070_$_iter__58086(cljs.core.rest(s__58087__$2)));
}
} else {
return null;
}
break;
}
});})(i__58065,i__58058,map__58084,map__58084__$1,block,uid__$1,parents,s__58071__$2,temp__5735__auto____$2,vec__58067,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58066,s__58064__$2,temp__5735__auto____$1,vec__58060,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58059,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid))
,null,null));
});})(i__58065,i__58058,map__58084,map__58084__$1,block,uid__$1,parents,s__58071__$2,temp__5735__auto____$2,vec__58067,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58066,s__58064__$2,temp__5735__auto____$1,vec__58060,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58059,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__58056_$_iter__58063_$_iter__58070(cljs.core.rest(s__58071__$2)));
}
} else {
return null;
}
break;
}
});})(i__58065,i__58058,vec__58067,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58066,s__58064__$2,temp__5735__auto____$1,vec__58060,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58059,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid))
,null,null));
});})(i__58065,i__58058,vec__58067,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58066,s__58064__$2,temp__5735__auto____$1,vec__58060,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58059,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58213 = (i__58065 + (1));
i__58065 = G__58213;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58066),athens$devcards$node_page$node_page_el_$_iter__58056_$_iter__58063(cljs.core.chunk_rest(s__58064__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58066),null);
}
} else {
var vec__58094 = cljs.core.first(s__58064__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58094,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58094,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (i__58058,vec__58094,group_title,group,s__58064__$2,temp__5735__auto____$1,vec__58060,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58059,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58056_$_iter__58063_$_iter__58097(s__58098){
return (new cljs.core.LazySeq(null,((function (i__58058,vec__58094,group_title,group,s__58064__$2,temp__5735__auto____$1,vec__58060,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58059,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid){
return (function (){
var s__58098__$1 = s__58098;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58098__$1);
if(temp__5735__auto____$2){
var s__58098__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58098__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58098__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58100 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58099 = (0);
while(true){
if((i__58099 < size__4581__auto____$1)){
var map__58101 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58099);
var map__58101__$1 = (((((!((map__58101 == null))))?(((((map__58101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58101):map__58101);
var block = map__58101__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58101__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58101__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58100,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__58099,i__58058,map__58101,map__58101__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58100,s__58098__$2,temp__5735__auto____$2,vec__58094,group_title,group,s__58064__$2,temp__5735__auto____$1,vec__58060,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58059,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__58099,i__58058,map__58101,map__58101__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58100,s__58098__$2,temp__5735__auto____$2,vec__58094,group_title,group,s__58064__$2,temp__5735__auto____$1,vec__58060,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58059,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__58099,i__58058,map__58101,map__58101__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58100,s__58098__$2,temp__5735__auto____$2,vec__58094,group_title,group,s__58064__$2,temp__5735__auto____$1,vec__58060,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58059,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58056_$_iter__58063_$_iter__58097_$_iter__58103(s__58104){
return (new cljs.core.LazySeq(null,((function (i__58099,i__58058,map__58101,map__58101__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58100,s__58098__$2,temp__5735__auto____$2,vec__58094,group_title,group,s__58064__$2,temp__5735__auto____$1,vec__58060,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58059,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid){
return (function (){
var s__58104__$1 = s__58104;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58104__$1);
if(temp__5735__auto____$3){
var s__58104__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58104__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58104__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58106 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58105 = (0);
while(true){
if((i__58105 < size__4581__auto____$2)){
var map__58107 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58105);
var map__58107__$1 = (((((!((map__58107 == null))))?(((((map__58107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58107):map__58107);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58107__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58107__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58107__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58106,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58214 = (i__58105 + (1));
i__58105 = G__58214;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58106),athens$devcards$node_page$node_page_el_$_iter__58056_$_iter__58063_$_iter__58097_$_iter__58103(cljs.core.chunk_rest(s__58104__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58106),null);
}
} else {
var map__58109 = cljs.core.first(s__58104__$2);
var map__58109__$1 = (((((!((map__58109 == null))))?(((((map__58109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58109):map__58109);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58109__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58109__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58109__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58056_$_iter__58063_$_iter__58097_$_iter__58103(cljs.core.rest(s__58104__$2)));
}
} else {
return null;
}
break;
}
});})(i__58099,i__58058,map__58101,map__58101__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58100,s__58098__$2,temp__5735__auto____$2,vec__58094,group_title,group,s__58064__$2,temp__5735__auto____$1,vec__58060,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58059,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid))
,null,null));
});})(i__58099,i__58058,map__58101,map__58101__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58100,s__58098__$2,temp__5735__auto____$2,vec__58094,group_title,group,s__58064__$2,temp__5735__auto____$1,vec__58060,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58059,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__58215 = (i__58099 + (1));
i__58099 = G__58215;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58100),athens$devcards$node_page$node_page_el_$_iter__58056_$_iter__58063_$_iter__58097(cljs.core.chunk_rest(s__58098__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58100),null);
}
} else {
var map__58111 = cljs.core.first(s__58098__$2);
var map__58111__$1 = (((((!((map__58111 == null))))?(((((map__58111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58111):map__58111);
var block = map__58111__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58111__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58111__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__58058,map__58111,map__58111__$1,block,uid__$1,parents,s__58098__$2,temp__5735__auto____$2,vec__58094,group_title,group,s__58064__$2,temp__5735__auto____$1,vec__58060,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58059,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__58058,map__58111,map__58111__$1,block,uid__$1,parents,s__58098__$2,temp__5735__auto____$2,vec__58094,group_title,group,s__58064__$2,temp__5735__auto____$1,vec__58060,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58059,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__58058,map__58111,map__58111__$1,block,uid__$1,parents,s__58098__$2,temp__5735__auto____$2,vec__58094,group_title,group,s__58064__$2,temp__5735__auto____$1,vec__58060,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58059,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58056_$_iter__58063_$_iter__58097_$_iter__58113(s__58114){
return (new cljs.core.LazySeq(null,((function (i__58058,map__58111,map__58111__$1,block,uid__$1,parents,s__58098__$2,temp__5735__auto____$2,vec__58094,group_title,group,s__58064__$2,temp__5735__auto____$1,vec__58060,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58059,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid){
return (function (){
var s__58114__$1 = s__58114;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58114__$1);
if(temp__5735__auto____$3){
var s__58114__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58114__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58114__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58116 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58115 = (0);
while(true){
if((i__58115 < size__4581__auto____$1)){
var map__58117 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58115);
var map__58117__$1 = (((((!((map__58117 == null))))?(((((map__58117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58117):map__58117);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58117__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58117__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58117__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58116,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58216 = (i__58115 + (1));
i__58115 = G__58216;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58116),athens$devcards$node_page$node_page_el_$_iter__58056_$_iter__58063_$_iter__58097_$_iter__58113(cljs.core.chunk_rest(s__58114__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58116),null);
}
} else {
var map__58119 = cljs.core.first(s__58114__$2);
var map__58119__$1 = (((((!((map__58119 == null))))?(((((map__58119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58119):map__58119);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58119__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58119__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58119__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58056_$_iter__58063_$_iter__58097_$_iter__58113(cljs.core.rest(s__58114__$2)));
}
} else {
return null;
}
break;
}
});})(i__58058,map__58111,map__58111__$1,block,uid__$1,parents,s__58098__$2,temp__5735__auto____$2,vec__58094,group_title,group,s__58064__$2,temp__5735__auto____$1,vec__58060,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58059,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid))
,null,null));
});})(i__58058,map__58111,map__58111__$1,block,uid__$1,parents,s__58098__$2,temp__5735__auto____$2,vec__58094,group_title,group,s__58064__$2,temp__5735__auto____$1,vec__58060,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58059,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__58056_$_iter__58063_$_iter__58097(cljs.core.rest(s__58098__$2)));
}
} else {
return null;
}
break;
}
});})(i__58058,vec__58094,group_title,group,s__58064__$2,temp__5735__auto____$1,vec__58060,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58059,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid))
,null,null));
});})(i__58058,vec__58094,group_title,group,s__58064__$2,temp__5735__auto____$1,vec__58060,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58059,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__58056_$_iter__58063(cljs.core.rest(s__58064__$2)));
}
} else {
return null;
}
break;
}
});})(i__58058,vec__58060,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58059,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid))
,null,null));
});})(i__58058,vec__58060,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58059,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null));

var G__58217 = (i__58058 + (1));
i__58058 = G__58217;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58059),athens$devcards$node_page$node_page_el_$_iter__58056(cljs.core.chunk_rest(s__58057__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58059),null);
}
} else {
var vec__58121 = cljs.core.first(s__58057__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58121,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58121,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null)], null),(function (){var iter__4582__auto__ = ((function (vec__58121,linked_or_unlinked,refs,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58056_$_iter__58124(s__58125){
return (new cljs.core.LazySeq(null,(function (){
var s__58125__$1 = s__58125;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58125__$1);
if(temp__5735__auto____$1){
var s__58125__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58125__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58125__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58127 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58126 = (0);
while(true){
if((i__58126 < size__4581__auto__)){
var vec__58128 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58126);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58128,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58128,(1),null);
cljs.core.chunk_append(b__58127,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (i__58126,vec__58128,group_title,group,c__4580__auto__,size__4581__auto__,b__58127,s__58125__$2,temp__5735__auto____$1,vec__58121,linked_or_unlinked,refs,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58056_$_iter__58124_$_iter__58131(s__58132){
return (new cljs.core.LazySeq(null,((function (i__58126,vec__58128,group_title,group,c__4580__auto__,size__4581__auto__,b__58127,s__58125__$2,temp__5735__auto____$1,vec__58121,linked_or_unlinked,refs,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid){
return (function (){
var s__58132__$1 = s__58132;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58132__$1);
if(temp__5735__auto____$2){
var s__58132__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58132__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58132__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58134 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58133 = (0);
while(true){
if((i__58133 < size__4581__auto____$1)){
var map__58135 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58133);
var map__58135__$1 = (((((!((map__58135 == null))))?(((((map__58135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58135):map__58135);
var block = map__58135__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58135__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58135__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58134,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__58133,i__58126,map__58135,map__58135__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58134,s__58132__$2,temp__5735__auto____$2,vec__58128,group_title,group,c__4580__auto__,size__4581__auto__,b__58127,s__58125__$2,temp__5735__auto____$1,vec__58121,linked_or_unlinked,refs,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__58133,i__58126,map__58135,map__58135__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58134,s__58132__$2,temp__5735__auto____$2,vec__58128,group_title,group,c__4580__auto__,size__4581__auto__,b__58127,s__58125__$2,temp__5735__auto____$1,vec__58121,linked_or_unlinked,refs,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__58133,i__58126,map__58135,map__58135__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58134,s__58132__$2,temp__5735__auto____$2,vec__58128,group_title,group,c__4580__auto__,size__4581__auto__,b__58127,s__58125__$2,temp__5735__auto____$1,vec__58121,linked_or_unlinked,refs,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58056_$_iter__58124_$_iter__58131_$_iter__58137(s__58138){
return (new cljs.core.LazySeq(null,((function (i__58133,i__58126,map__58135,map__58135__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58134,s__58132__$2,temp__5735__auto____$2,vec__58128,group_title,group,c__4580__auto__,size__4581__auto__,b__58127,s__58125__$2,temp__5735__auto____$1,vec__58121,linked_or_unlinked,refs,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid){
return (function (){
var s__58138__$1 = s__58138;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58138__$1);
if(temp__5735__auto____$3){
var s__58138__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58138__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58138__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58140 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58139 = (0);
while(true){
if((i__58139 < size__4581__auto____$2)){
var map__58141 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58139);
var map__58141__$1 = (((((!((map__58141 == null))))?(((((map__58141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58141):map__58141);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58141__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58141__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58141__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58140,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58218 = (i__58139 + (1));
i__58139 = G__58218;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58140),athens$devcards$node_page$node_page_el_$_iter__58056_$_iter__58124_$_iter__58131_$_iter__58137(cljs.core.chunk_rest(s__58138__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58140),null);
}
} else {
var map__58143 = cljs.core.first(s__58138__$2);
var map__58143__$1 = (((((!((map__58143 == null))))?(((((map__58143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58143):map__58143);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58143__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58143__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58143__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58056_$_iter__58124_$_iter__58131_$_iter__58137(cljs.core.rest(s__58138__$2)));
}
} else {
return null;
}
break;
}
});})(i__58133,i__58126,map__58135,map__58135__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58134,s__58132__$2,temp__5735__auto____$2,vec__58128,group_title,group,c__4580__auto__,size__4581__auto__,b__58127,s__58125__$2,temp__5735__auto____$1,vec__58121,linked_or_unlinked,refs,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid))
,null,null));
});})(i__58133,i__58126,map__58135,map__58135__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58134,s__58132__$2,temp__5735__auto____$2,vec__58128,group_title,group,c__4580__auto__,size__4581__auto__,b__58127,s__58125__$2,temp__5735__auto____$1,vec__58121,linked_or_unlinked,refs,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__58219 = (i__58133 + (1));
i__58133 = G__58219;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58134),athens$devcards$node_page$node_page_el_$_iter__58056_$_iter__58124_$_iter__58131(cljs.core.chunk_rest(s__58132__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58134),null);
}
} else {
var map__58145 = cljs.core.first(s__58132__$2);
var map__58145__$1 = (((((!((map__58145 == null))))?(((((map__58145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58145):map__58145);
var block = map__58145__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58145__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58145__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__58126,map__58145,map__58145__$1,block,uid__$1,parents,s__58132__$2,temp__5735__auto____$2,vec__58128,group_title,group,c__4580__auto__,size__4581__auto__,b__58127,s__58125__$2,temp__5735__auto____$1,vec__58121,linked_or_unlinked,refs,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__58126,map__58145,map__58145__$1,block,uid__$1,parents,s__58132__$2,temp__5735__auto____$2,vec__58128,group_title,group,c__4580__auto__,size__4581__auto__,b__58127,s__58125__$2,temp__5735__auto____$1,vec__58121,linked_or_unlinked,refs,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__58126,map__58145,map__58145__$1,block,uid__$1,parents,s__58132__$2,temp__5735__auto____$2,vec__58128,group_title,group,c__4580__auto__,size__4581__auto__,b__58127,s__58125__$2,temp__5735__auto____$1,vec__58121,linked_or_unlinked,refs,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58056_$_iter__58124_$_iter__58131_$_iter__58147(s__58148){
return (new cljs.core.LazySeq(null,((function (i__58126,map__58145,map__58145__$1,block,uid__$1,parents,s__58132__$2,temp__5735__auto____$2,vec__58128,group_title,group,c__4580__auto__,size__4581__auto__,b__58127,s__58125__$2,temp__5735__auto____$1,vec__58121,linked_or_unlinked,refs,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid){
return (function (){
var s__58148__$1 = s__58148;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58148__$1);
if(temp__5735__auto____$3){
var s__58148__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58148__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58148__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58150 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58149 = (0);
while(true){
if((i__58149 < size__4581__auto____$1)){
var map__58151 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58149);
var map__58151__$1 = (((((!((map__58151 == null))))?(((((map__58151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58151):map__58151);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58151__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58151__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58151__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58150,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58220 = (i__58149 + (1));
i__58149 = G__58220;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58150),athens$devcards$node_page$node_page_el_$_iter__58056_$_iter__58124_$_iter__58131_$_iter__58147(cljs.core.chunk_rest(s__58148__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58150),null);
}
} else {
var map__58153 = cljs.core.first(s__58148__$2);
var map__58153__$1 = (((((!((map__58153 == null))))?(((((map__58153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58153):map__58153);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58153__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58153__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58153__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58056_$_iter__58124_$_iter__58131_$_iter__58147(cljs.core.rest(s__58148__$2)));
}
} else {
return null;
}
break;
}
});})(i__58126,map__58145,map__58145__$1,block,uid__$1,parents,s__58132__$2,temp__5735__auto____$2,vec__58128,group_title,group,c__4580__auto__,size__4581__auto__,b__58127,s__58125__$2,temp__5735__auto____$1,vec__58121,linked_or_unlinked,refs,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid))
,null,null));
});})(i__58126,map__58145,map__58145__$1,block,uid__$1,parents,s__58132__$2,temp__5735__auto____$2,vec__58128,group_title,group,c__4580__auto__,size__4581__auto__,b__58127,s__58125__$2,temp__5735__auto____$1,vec__58121,linked_or_unlinked,refs,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__58056_$_iter__58124_$_iter__58131(cljs.core.rest(s__58132__$2)));
}
} else {
return null;
}
break;
}
});})(i__58126,vec__58128,group_title,group,c__4580__auto__,size__4581__auto__,b__58127,s__58125__$2,temp__5735__auto____$1,vec__58121,linked_or_unlinked,refs,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid))
,null,null));
});})(i__58126,vec__58128,group_title,group,c__4580__auto__,size__4581__auto__,b__58127,s__58125__$2,temp__5735__auto____$1,vec__58121,linked_or_unlinked,refs,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58221 = (i__58126 + (1));
i__58126 = G__58221;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58127),athens$devcards$node_page$node_page_el_$_iter__58056_$_iter__58124(cljs.core.chunk_rest(s__58125__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58127),null);
}
} else {
var vec__58155 = cljs.core.first(s__58125__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58155,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58155,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (vec__58155,group_title,group,s__58125__$2,temp__5735__auto____$1,vec__58121,linked_or_unlinked,refs,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58056_$_iter__58124_$_iter__58158(s__58159){
return (new cljs.core.LazySeq(null,(function (){
var s__58159__$1 = s__58159;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58159__$1);
if(temp__5735__auto____$2){
var s__58159__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58159__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58159__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58161 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58160 = (0);
while(true){
if((i__58160 < size__4581__auto__)){
var map__58162 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58160);
var map__58162__$1 = (((((!((map__58162 == null))))?(((((map__58162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58162):map__58162);
var block = map__58162__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58162__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58162__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58161,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__58160,map__58162,map__58162__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58161,s__58159__$2,temp__5735__auto____$2,vec__58155,group_title,group,s__58125__$2,temp__5735__auto____$1,vec__58121,linked_or_unlinked,refs,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__58160,map__58162,map__58162__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58161,s__58159__$2,temp__5735__auto____$2,vec__58155,group_title,group,s__58125__$2,temp__5735__auto____$1,vec__58121,linked_or_unlinked,refs,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__58160,map__58162,map__58162__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58161,s__58159__$2,temp__5735__auto____$2,vec__58155,group_title,group,s__58125__$2,temp__5735__auto____$1,vec__58121,linked_or_unlinked,refs,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58056_$_iter__58124_$_iter__58158_$_iter__58164(s__58165){
return (new cljs.core.LazySeq(null,((function (i__58160,map__58162,map__58162__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58161,s__58159__$2,temp__5735__auto____$2,vec__58155,group_title,group,s__58125__$2,temp__5735__auto____$1,vec__58121,linked_or_unlinked,refs,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid){
return (function (){
var s__58165__$1 = s__58165;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58165__$1);
if(temp__5735__auto____$3){
var s__58165__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58165__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58165__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58167 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58166 = (0);
while(true){
if((i__58166 < size__4581__auto____$1)){
var map__58168 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58166);
var map__58168__$1 = (((((!((map__58168 == null))))?(((((map__58168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58168):map__58168);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58168__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58168__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58168__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58167,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58222 = (i__58166 + (1));
i__58166 = G__58222;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58167),athens$devcards$node_page$node_page_el_$_iter__58056_$_iter__58124_$_iter__58158_$_iter__58164(cljs.core.chunk_rest(s__58165__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58167),null);
}
} else {
var map__58170 = cljs.core.first(s__58165__$2);
var map__58170__$1 = (((((!((map__58170 == null))))?(((((map__58170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58170):map__58170);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58170__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58170__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58170__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58056_$_iter__58124_$_iter__58158_$_iter__58164(cljs.core.rest(s__58165__$2)));
}
} else {
return null;
}
break;
}
});})(i__58160,map__58162,map__58162__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58161,s__58159__$2,temp__5735__auto____$2,vec__58155,group_title,group,s__58125__$2,temp__5735__auto____$1,vec__58121,linked_or_unlinked,refs,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid))
,null,null));
});})(i__58160,map__58162,map__58162__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58161,s__58159__$2,temp__5735__auto____$2,vec__58155,group_title,group,s__58125__$2,temp__5735__auto____$1,vec__58121,linked_or_unlinked,refs,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__58223 = (i__58160 + (1));
i__58160 = G__58223;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58161),athens$devcards$node_page$node_page_el_$_iter__58056_$_iter__58124_$_iter__58158(cljs.core.chunk_rest(s__58159__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58161),null);
}
} else {
var map__58172 = cljs.core.first(s__58159__$2);
var map__58172__$1 = (((((!((map__58172 == null))))?(((((map__58172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58172):map__58172);
var block = map__58172__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58172__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58172__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__58172,map__58172__$1,block,uid__$1,parents,s__58159__$2,temp__5735__auto____$2,vec__58155,group_title,group,s__58125__$2,temp__5735__auto____$1,vec__58121,linked_or_unlinked,refs,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(map__58172,map__58172__$1,block,uid__$1,parents,s__58159__$2,temp__5735__auto____$2,vec__58155,group_title,group,s__58125__$2,temp__5735__auto____$1,vec__58121,linked_or_unlinked,refs,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (map__58172,map__58172__$1,block,uid__$1,parents,s__58159__$2,temp__5735__auto____$2,vec__58155,group_title,group,s__58125__$2,temp__5735__auto____$1,vec__58121,linked_or_unlinked,refs,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58056_$_iter__58124_$_iter__58158_$_iter__58174(s__58175){
return (new cljs.core.LazySeq(null,(function (){
var s__58175__$1 = s__58175;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58175__$1);
if(temp__5735__auto____$3){
var s__58175__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58175__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58175__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58177 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58176 = (0);
while(true){
if((i__58176 < size__4581__auto__)){
var map__58178 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58176);
var map__58178__$1 = (((((!((map__58178 == null))))?(((((map__58178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58178):map__58178);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58178__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58178__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58178__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58177,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58224 = (i__58176 + (1));
i__58176 = G__58224;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58177),athens$devcards$node_page$node_page_el_$_iter__58056_$_iter__58124_$_iter__58158_$_iter__58174(cljs.core.chunk_rest(s__58175__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58177),null);
}
} else {
var map__58180 = cljs.core.first(s__58175__$2);
var map__58180__$1 = (((((!((map__58180 == null))))?(((((map__58180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58180):map__58180);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58180__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58180__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58180__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58056_$_iter__58124_$_iter__58158_$_iter__58174(cljs.core.rest(s__58175__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58172,map__58172__$1,block,uid__$1,parents,s__58159__$2,temp__5735__auto____$2,vec__58155,group_title,group,s__58125__$2,temp__5735__auto____$1,vec__58121,linked_or_unlinked,refs,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__58056_$_iter__58124_$_iter__58158(cljs.core.rest(s__58159__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58155,group_title,group,s__58125__$2,temp__5735__auto____$1,vec__58121,linked_or_unlinked,refs,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__58056_$_iter__58124(cljs.core.rest(s__58125__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58121,linked_or_unlinked,refs,s__58057__$2,temp__5735__auto__,map__58044,map__58044__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null),athens$devcards$node_page$node_page_el_$_iter__58056(cljs.core.rest(s__58057__$2)));
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
var editing_uid = cljs.core.deref((function (){var G__58182 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58182) : re_frame.core.subscribe.call(null,G__58182));
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
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.node_page !== 'undefined') && (typeof athens.devcards.node_page.t_athens$devcards$node_page58183 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.node_page.t_athens$devcards$node_page58183 = (function (meta58184){
this.meta58184 = meta58184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.node_page.t_athens$devcards$node_page58183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58185,meta58184__$1){
var self__ = this;
var _58185__$1 = this;
return (new athens.devcards.node_page.t_athens$devcards$node_page58183(meta58184__$1));
}));

(athens.devcards.node_page.t_athens$devcards$node_page58183.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58185){
var self__ = this;
var _58185__$1 = this;
return self__.meta58184;
}));

(athens.devcards.node_page.t_athens$devcards$node_page58183.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.node_page.t_athens$devcards$node_page58183.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__41676__auto__,devcard_opts__41677__auto__){
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

(athens.devcards.node_page.t_athens$devcards$node_page58183.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58184","meta58184",-2025973363,null)], null);
}));

(athens.devcards.node_page.t_athens$devcards$node_page58183.cljs$lang$type = true);

(athens.devcards.node_page.t_athens$devcards$node_page58183.cljs$lang$ctorStr = "athens.devcards.node-page/t_athens$devcards$node_page58183");

(athens.devcards.node_page.t_athens$devcards$node_page58183.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.node-page/t_athens$devcards$node_page58183");
}));

/**
 * Positional factory function for athens.devcards.node-page/t_athens$devcards$node_page58183.
 */
athens.devcards.node_page.__GT_t_athens$devcards$node_page58183 = (function athens$devcards$node_page$__GT_t_athens$devcards$node_page58183(meta58184){
return (new athens.devcards.node_page.t_athens$devcards$node_page58183(meta58184));
});

}

return (new athens.devcards.node_page.t_athens$devcards$node_page58183(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.node_page.js.map
