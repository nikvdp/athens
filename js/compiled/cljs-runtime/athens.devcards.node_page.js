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
var G__65770 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact-event","transact-event",1188240621),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__65770) : re_frame.core.dispatch.call(null,G__65770));
});
athens.devcards.node_page.db_handler = goog.functions.debounce(athens.devcards.node_page.handler,(500));
athens.devcards.node_page.get_ref_ids = (function athens$devcards$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__65771 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__65772 = athens.db.dsdb;
var G__65773 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__65771,G__65772,G__65773) : posh.reagent.q.call(null,G__65771,G__65772,G__65773));
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
athens.devcards.node_page.node_page_el = (function athens$devcards$node_page$node_page_el(p__65774,editing_uid,ref_groups){
var map__65775 = p__65774;
var map__65775__$1 = (((((!((map__65775 == null))))?(((((map__65775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65775):map__65775);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65775__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65775__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65775__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__65777 = e.target.value;
var G__65778 = uid;
return (athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__65777,G__65778) : athens.devcards.node_page.db_handler.call(null,G__65777,G__65778));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__65779(s__65780){
return (new cljs.core.LazySeq(null,(function (){
var s__65780__$1 = s__65780;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65780__$1);
if(temp__5735__auto__){
var s__65780__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65780__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65780__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65782 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65781 = (0);
while(true){
if((i__65781 < size__4581__auto__)){
var map__65783 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65781);
var map__65783__$1 = (((((!((map__65783 == null))))?(((((map__65783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65783):map__65783);
var child = map__65783__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65783__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65782,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__65927 = (i__65781 + (1));
i__65781 = G__65927;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65782),athens$devcards$node_page$node_page_el_$_iter__65779(cljs.core.chunk_rest(s__65780__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65782),null);
}
} else {
var map__65785 = cljs.core.first(s__65780__$2);
var map__65785__$1 = (((((!((map__65785 == null))))?(((((map__65785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65785):map__65785);
var child = map__65785__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65785__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$devcards$node_page$node_page_el_$_iter__65779(cljs.core.rest(s__65780__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__65787(s__65788){
return (new cljs.core.LazySeq(null,(function (){
var s__65788__$1 = s__65788;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65788__$1);
if(temp__5735__auto__){
var s__65788__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65788__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65788__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65790 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65789 = (0);
while(true){
if((i__65789 < size__4581__auto__)){
var vec__65791 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65789);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65791,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65791,(1),null);
cljs.core.chunk_append(b__65790,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null)], null),(function (){var iter__4582__auto__ = ((function (i__65789,vec__65791,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65790,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65787_$_iter__65794(s__65795){
return (new cljs.core.LazySeq(null,((function (i__65789,vec__65791,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65790,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid){
return (function (){
var s__65795__$1 = s__65795;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__65795__$1);
if(temp__5735__auto____$1){
var s__65795__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__65795__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65795__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65797 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65796 = (0);
while(true){
if((i__65796 < size__4581__auto____$1)){
var vec__65798 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65796);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65798,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65798,(1),null);
cljs.core.chunk_append(b__65797,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (i__65796,i__65789,vec__65798,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65797,s__65795__$2,temp__5735__auto____$1,vec__65791,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65790,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65787_$_iter__65794_$_iter__65801(s__65802){
return (new cljs.core.LazySeq(null,((function (i__65796,i__65789,vec__65798,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65797,s__65795__$2,temp__5735__auto____$1,vec__65791,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65790,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid){
return (function (){
var s__65802__$1 = s__65802;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65802__$1);
if(temp__5735__auto____$2){
var s__65802__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65802__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__65802__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__65804 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__65803 = (0);
while(true){
if((i__65803 < size__4581__auto____$2)){
var map__65805 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__65803);
var map__65805__$1 = (((((!((map__65805 == null))))?(((((map__65805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65805):map__65805);
var block = map__65805__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65805__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65805__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__65804,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__65803,i__65796,i__65789,map__65805,map__65805__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65804,s__65802__$2,temp__5735__auto____$2,vec__65798,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65797,s__65795__$2,temp__5735__auto____$1,vec__65791,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65790,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__65803,i__65796,i__65789,map__65805,map__65805__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65804,s__65802__$2,temp__5735__auto____$2,vec__65798,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65797,s__65795__$2,temp__5735__auto____$1,vec__65791,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65790,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__65803,i__65796,i__65789,map__65805,map__65805__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65804,s__65802__$2,temp__5735__auto____$2,vec__65798,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65797,s__65795__$2,temp__5735__auto____$1,vec__65791,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65790,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65787_$_iter__65794_$_iter__65801_$_iter__65807(s__65808){
return (new cljs.core.LazySeq(null,((function (i__65803,i__65796,i__65789,map__65805,map__65805__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65804,s__65802__$2,temp__5735__auto____$2,vec__65798,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65797,s__65795__$2,temp__5735__auto____$1,vec__65791,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65790,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid){
return (function (){
var s__65808__$1 = s__65808;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65808__$1);
if(temp__5735__auto____$3){
var s__65808__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65808__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__65808__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__65810 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__65809 = (0);
while(true){
if((i__65809 < size__4581__auto____$3)){
var map__65811 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__65809);
var map__65811__$1 = (((((!((map__65811 == null))))?(((((map__65811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65811):map__65811);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65811__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65811__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65811__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65810,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65935 = (i__65809 + (1));
i__65809 = G__65935;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65810),athens$devcards$node_page$node_page_el_$_iter__65787_$_iter__65794_$_iter__65801_$_iter__65807(cljs.core.chunk_rest(s__65808__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65810),null);
}
} else {
var map__65813 = cljs.core.first(s__65808__$2);
var map__65813__$1 = (((((!((map__65813 == null))))?(((((map__65813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65813):map__65813);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65813__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65813__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65813__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65787_$_iter__65794_$_iter__65801_$_iter__65807(cljs.core.rest(s__65808__$2)));
}
} else {
return null;
}
break;
}
});})(i__65803,i__65796,i__65789,map__65805,map__65805__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65804,s__65802__$2,temp__5735__auto____$2,vec__65798,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65797,s__65795__$2,temp__5735__auto____$1,vec__65791,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65790,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid))
,null,null));
});})(i__65803,i__65796,i__65789,map__65805,map__65805__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__65804,s__65802__$2,temp__5735__auto____$2,vec__65798,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65797,s__65795__$2,temp__5735__auto____$1,vec__65791,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65790,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__65936 = (i__65803 + (1));
i__65803 = G__65936;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65804),athens$devcards$node_page$node_page_el_$_iter__65787_$_iter__65794_$_iter__65801(cljs.core.chunk_rest(s__65802__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65804),null);
}
} else {
var map__65815 = cljs.core.first(s__65802__$2);
var map__65815__$1 = (((((!((map__65815 == null))))?(((((map__65815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65815):map__65815);
var block = map__65815__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65815__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65815__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__65796,i__65789,map__65815,map__65815__$1,block,uid__$1,parents,s__65802__$2,temp__5735__auto____$2,vec__65798,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65797,s__65795__$2,temp__5735__auto____$1,vec__65791,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65790,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__65796,i__65789,map__65815,map__65815__$1,block,uid__$1,parents,s__65802__$2,temp__5735__auto____$2,vec__65798,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65797,s__65795__$2,temp__5735__auto____$1,vec__65791,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65790,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__65796,i__65789,map__65815,map__65815__$1,block,uid__$1,parents,s__65802__$2,temp__5735__auto____$2,vec__65798,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65797,s__65795__$2,temp__5735__auto____$1,vec__65791,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65790,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65787_$_iter__65794_$_iter__65801_$_iter__65817(s__65818){
return (new cljs.core.LazySeq(null,((function (i__65796,i__65789,map__65815,map__65815__$1,block,uid__$1,parents,s__65802__$2,temp__5735__auto____$2,vec__65798,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65797,s__65795__$2,temp__5735__auto____$1,vec__65791,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65790,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid){
return (function (){
var s__65818__$1 = s__65818;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65818__$1);
if(temp__5735__auto____$3){
var s__65818__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65818__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__65818__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__65820 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__65819 = (0);
while(true){
if((i__65819 < size__4581__auto____$2)){
var map__65821 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__65819);
var map__65821__$1 = (((((!((map__65821 == null))))?(((((map__65821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65821):map__65821);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65821__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65821__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65821__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65820,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65937 = (i__65819 + (1));
i__65819 = G__65937;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65820),athens$devcards$node_page$node_page_el_$_iter__65787_$_iter__65794_$_iter__65801_$_iter__65817(cljs.core.chunk_rest(s__65818__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65820),null);
}
} else {
var map__65823 = cljs.core.first(s__65818__$2);
var map__65823__$1 = (((((!((map__65823 == null))))?(((((map__65823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65823):map__65823);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65823__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65823__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65823__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65787_$_iter__65794_$_iter__65801_$_iter__65817(cljs.core.rest(s__65818__$2)));
}
} else {
return null;
}
break;
}
});})(i__65796,i__65789,map__65815,map__65815__$1,block,uid__$1,parents,s__65802__$2,temp__5735__auto____$2,vec__65798,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65797,s__65795__$2,temp__5735__auto____$1,vec__65791,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65790,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid))
,null,null));
});})(i__65796,i__65789,map__65815,map__65815__$1,block,uid__$1,parents,s__65802__$2,temp__5735__auto____$2,vec__65798,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65797,s__65795__$2,temp__5735__auto____$1,vec__65791,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65790,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__65787_$_iter__65794_$_iter__65801(cljs.core.rest(s__65802__$2)));
}
} else {
return null;
}
break;
}
});})(i__65796,i__65789,vec__65798,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65797,s__65795__$2,temp__5735__auto____$1,vec__65791,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65790,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid))
,null,null));
});})(i__65796,i__65789,vec__65798,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__65797,s__65795__$2,temp__5735__auto____$1,vec__65791,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65790,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__65938 = (i__65796 + (1));
i__65796 = G__65938;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65797),athens$devcards$node_page$node_page_el_$_iter__65787_$_iter__65794(cljs.core.chunk_rest(s__65795__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65797),null);
}
} else {
var vec__65825 = cljs.core.first(s__65795__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65825,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65825,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (i__65789,vec__65825,group_title,group,s__65795__$2,temp__5735__auto____$1,vec__65791,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65790,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65787_$_iter__65794_$_iter__65828(s__65829){
return (new cljs.core.LazySeq(null,((function (i__65789,vec__65825,group_title,group,s__65795__$2,temp__5735__auto____$1,vec__65791,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65790,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid){
return (function (){
var s__65829__$1 = s__65829;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65829__$1);
if(temp__5735__auto____$2){
var s__65829__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65829__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65829__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65831 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65830 = (0);
while(true){
if((i__65830 < size__4581__auto____$1)){
var map__65832 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65830);
var map__65832__$1 = (((((!((map__65832 == null))))?(((((map__65832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65832):map__65832);
var block = map__65832__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65832__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65832__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__65831,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__65830,i__65789,map__65832,map__65832__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65831,s__65829__$2,temp__5735__auto____$2,vec__65825,group_title,group,s__65795__$2,temp__5735__auto____$1,vec__65791,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65790,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__65830,i__65789,map__65832,map__65832__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65831,s__65829__$2,temp__5735__auto____$2,vec__65825,group_title,group,s__65795__$2,temp__5735__auto____$1,vec__65791,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65790,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__65830,i__65789,map__65832,map__65832__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65831,s__65829__$2,temp__5735__auto____$2,vec__65825,group_title,group,s__65795__$2,temp__5735__auto____$1,vec__65791,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65790,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65787_$_iter__65794_$_iter__65828_$_iter__65834(s__65835){
return (new cljs.core.LazySeq(null,((function (i__65830,i__65789,map__65832,map__65832__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65831,s__65829__$2,temp__5735__auto____$2,vec__65825,group_title,group,s__65795__$2,temp__5735__auto____$1,vec__65791,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65790,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid){
return (function (){
var s__65835__$1 = s__65835;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65835__$1);
if(temp__5735__auto____$3){
var s__65835__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65835__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__65835__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__65837 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__65836 = (0);
while(true){
if((i__65836 < size__4581__auto____$2)){
var map__65838 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__65836);
var map__65838__$1 = (((((!((map__65838 == null))))?(((((map__65838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65838):map__65838);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65838__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65838__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65838__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65837,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65939 = (i__65836 + (1));
i__65836 = G__65939;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65837),athens$devcards$node_page$node_page_el_$_iter__65787_$_iter__65794_$_iter__65828_$_iter__65834(cljs.core.chunk_rest(s__65835__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65837),null);
}
} else {
var map__65840 = cljs.core.first(s__65835__$2);
var map__65840__$1 = (((((!((map__65840 == null))))?(((((map__65840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65840):map__65840);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65840__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65840__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65840__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65787_$_iter__65794_$_iter__65828_$_iter__65834(cljs.core.rest(s__65835__$2)));
}
} else {
return null;
}
break;
}
});})(i__65830,i__65789,map__65832,map__65832__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65831,s__65829__$2,temp__5735__auto____$2,vec__65825,group_title,group,s__65795__$2,temp__5735__auto____$1,vec__65791,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65790,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid))
,null,null));
});})(i__65830,i__65789,map__65832,map__65832__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65831,s__65829__$2,temp__5735__auto____$2,vec__65825,group_title,group,s__65795__$2,temp__5735__auto____$1,vec__65791,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65790,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__65940 = (i__65830 + (1));
i__65830 = G__65940;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65831),athens$devcards$node_page$node_page_el_$_iter__65787_$_iter__65794_$_iter__65828(cljs.core.chunk_rest(s__65829__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65831),null);
}
} else {
var map__65842 = cljs.core.first(s__65829__$2);
var map__65842__$1 = (((((!((map__65842 == null))))?(((((map__65842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65842):map__65842);
var block = map__65842__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65842__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65842__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__65789,map__65842,map__65842__$1,block,uid__$1,parents,s__65829__$2,temp__5735__auto____$2,vec__65825,group_title,group,s__65795__$2,temp__5735__auto____$1,vec__65791,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65790,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__65789,map__65842,map__65842__$1,block,uid__$1,parents,s__65829__$2,temp__5735__auto____$2,vec__65825,group_title,group,s__65795__$2,temp__5735__auto____$1,vec__65791,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65790,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__65789,map__65842,map__65842__$1,block,uid__$1,parents,s__65829__$2,temp__5735__auto____$2,vec__65825,group_title,group,s__65795__$2,temp__5735__auto____$1,vec__65791,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65790,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65787_$_iter__65794_$_iter__65828_$_iter__65844(s__65845){
return (new cljs.core.LazySeq(null,((function (i__65789,map__65842,map__65842__$1,block,uid__$1,parents,s__65829__$2,temp__5735__auto____$2,vec__65825,group_title,group,s__65795__$2,temp__5735__auto____$1,vec__65791,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65790,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid){
return (function (){
var s__65845__$1 = s__65845;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65845__$1);
if(temp__5735__auto____$3){
var s__65845__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65845__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65845__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65847 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65846 = (0);
while(true){
if((i__65846 < size__4581__auto____$1)){
var map__65848 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65846);
var map__65848__$1 = (((((!((map__65848 == null))))?(((((map__65848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65848):map__65848);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65848__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65848__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65848__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65847,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65941 = (i__65846 + (1));
i__65846 = G__65941;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65847),athens$devcards$node_page$node_page_el_$_iter__65787_$_iter__65794_$_iter__65828_$_iter__65844(cljs.core.chunk_rest(s__65845__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65847),null);
}
} else {
var map__65850 = cljs.core.first(s__65845__$2);
var map__65850__$1 = (((((!((map__65850 == null))))?(((((map__65850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65850):map__65850);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65850__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65850__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65850__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65787_$_iter__65794_$_iter__65828_$_iter__65844(cljs.core.rest(s__65845__$2)));
}
} else {
return null;
}
break;
}
});})(i__65789,map__65842,map__65842__$1,block,uid__$1,parents,s__65829__$2,temp__5735__auto____$2,vec__65825,group_title,group,s__65795__$2,temp__5735__auto____$1,vec__65791,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65790,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid))
,null,null));
});})(i__65789,map__65842,map__65842__$1,block,uid__$1,parents,s__65829__$2,temp__5735__auto____$2,vec__65825,group_title,group,s__65795__$2,temp__5735__auto____$1,vec__65791,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65790,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__65787_$_iter__65794_$_iter__65828(cljs.core.rest(s__65829__$2)));
}
} else {
return null;
}
break;
}
});})(i__65789,vec__65825,group_title,group,s__65795__$2,temp__5735__auto____$1,vec__65791,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65790,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid))
,null,null));
});})(i__65789,vec__65825,group_title,group,s__65795__$2,temp__5735__auto____$1,vec__65791,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65790,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__65787_$_iter__65794(cljs.core.rest(s__65795__$2)));
}
} else {
return null;
}
break;
}
});})(i__65789,vec__65791,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65790,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid))
,null,null));
});})(i__65789,vec__65791,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__65790,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null));

var G__65942 = (i__65789 + (1));
i__65789 = G__65942;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65790),athens$devcards$node_page$node_page_el_$_iter__65787(cljs.core.chunk_rest(s__65788__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65790),null);
}
} else {
var vec__65852 = cljs.core.first(s__65788__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65852,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65852,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null)], null),(function (){var iter__4582__auto__ = ((function (vec__65852,linked_or_unlinked,refs,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65787_$_iter__65855(s__65856){
return (new cljs.core.LazySeq(null,(function (){
var s__65856__$1 = s__65856;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__65856__$1);
if(temp__5735__auto____$1){
var s__65856__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__65856__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65856__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65858 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65857 = (0);
while(true){
if((i__65857 < size__4581__auto__)){
var vec__65859 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65857);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65859,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65859,(1),null);
cljs.core.chunk_append(b__65858,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (i__65857,vec__65859,group_title,group,c__4580__auto__,size__4581__auto__,b__65858,s__65856__$2,temp__5735__auto____$1,vec__65852,linked_or_unlinked,refs,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65787_$_iter__65855_$_iter__65862(s__65863){
return (new cljs.core.LazySeq(null,((function (i__65857,vec__65859,group_title,group,c__4580__auto__,size__4581__auto__,b__65858,s__65856__$2,temp__5735__auto____$1,vec__65852,linked_or_unlinked,refs,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid){
return (function (){
var s__65863__$1 = s__65863;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65863__$1);
if(temp__5735__auto____$2){
var s__65863__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65863__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65863__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65865 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65864 = (0);
while(true){
if((i__65864 < size__4581__auto____$1)){
var map__65866 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65864);
var map__65866__$1 = (((((!((map__65866 == null))))?(((((map__65866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65866):map__65866);
var block = map__65866__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65866__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65866__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__65865,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__65864,i__65857,map__65866,map__65866__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65865,s__65863__$2,temp__5735__auto____$2,vec__65859,group_title,group,c__4580__auto__,size__4581__auto__,b__65858,s__65856__$2,temp__5735__auto____$1,vec__65852,linked_or_unlinked,refs,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__65864,i__65857,map__65866,map__65866__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65865,s__65863__$2,temp__5735__auto____$2,vec__65859,group_title,group,c__4580__auto__,size__4581__auto__,b__65858,s__65856__$2,temp__5735__auto____$1,vec__65852,linked_or_unlinked,refs,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__65864,i__65857,map__65866,map__65866__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65865,s__65863__$2,temp__5735__auto____$2,vec__65859,group_title,group,c__4580__auto__,size__4581__auto__,b__65858,s__65856__$2,temp__5735__auto____$1,vec__65852,linked_or_unlinked,refs,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65787_$_iter__65855_$_iter__65862_$_iter__65868(s__65869){
return (new cljs.core.LazySeq(null,((function (i__65864,i__65857,map__65866,map__65866__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65865,s__65863__$2,temp__5735__auto____$2,vec__65859,group_title,group,c__4580__auto__,size__4581__auto__,b__65858,s__65856__$2,temp__5735__auto____$1,vec__65852,linked_or_unlinked,refs,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid){
return (function (){
var s__65869__$1 = s__65869;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65869__$1);
if(temp__5735__auto____$3){
var s__65869__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65869__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__65869__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__65871 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__65870 = (0);
while(true){
if((i__65870 < size__4581__auto____$2)){
var map__65872 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__65870);
var map__65872__$1 = (((((!((map__65872 == null))))?(((((map__65872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65872):map__65872);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65872__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65872__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65872__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65871,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65943 = (i__65870 + (1));
i__65870 = G__65943;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65871),athens$devcards$node_page$node_page_el_$_iter__65787_$_iter__65855_$_iter__65862_$_iter__65868(cljs.core.chunk_rest(s__65869__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65871),null);
}
} else {
var map__65874 = cljs.core.first(s__65869__$2);
var map__65874__$1 = (((((!((map__65874 == null))))?(((((map__65874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65874):map__65874);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65874__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65874__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65874__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65787_$_iter__65855_$_iter__65862_$_iter__65868(cljs.core.rest(s__65869__$2)));
}
} else {
return null;
}
break;
}
});})(i__65864,i__65857,map__65866,map__65866__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65865,s__65863__$2,temp__5735__auto____$2,vec__65859,group_title,group,c__4580__auto__,size__4581__auto__,b__65858,s__65856__$2,temp__5735__auto____$1,vec__65852,linked_or_unlinked,refs,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid))
,null,null));
});})(i__65864,i__65857,map__65866,map__65866__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__65865,s__65863__$2,temp__5735__auto____$2,vec__65859,group_title,group,c__4580__auto__,size__4581__auto__,b__65858,s__65856__$2,temp__5735__auto____$1,vec__65852,linked_or_unlinked,refs,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__65944 = (i__65864 + (1));
i__65864 = G__65944;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65865),athens$devcards$node_page$node_page_el_$_iter__65787_$_iter__65855_$_iter__65862(cljs.core.chunk_rest(s__65863__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65865),null);
}
} else {
var map__65876 = cljs.core.first(s__65863__$2);
var map__65876__$1 = (((((!((map__65876 == null))))?(((((map__65876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65876):map__65876);
var block = map__65876__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65876__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65876__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__65857,map__65876,map__65876__$1,block,uid__$1,parents,s__65863__$2,temp__5735__auto____$2,vec__65859,group_title,group,c__4580__auto__,size__4581__auto__,b__65858,s__65856__$2,temp__5735__auto____$1,vec__65852,linked_or_unlinked,refs,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__65857,map__65876,map__65876__$1,block,uid__$1,parents,s__65863__$2,temp__5735__auto____$2,vec__65859,group_title,group,c__4580__auto__,size__4581__auto__,b__65858,s__65856__$2,temp__5735__auto____$1,vec__65852,linked_or_unlinked,refs,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__65857,map__65876,map__65876__$1,block,uid__$1,parents,s__65863__$2,temp__5735__auto____$2,vec__65859,group_title,group,c__4580__auto__,size__4581__auto__,b__65858,s__65856__$2,temp__5735__auto____$1,vec__65852,linked_or_unlinked,refs,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65787_$_iter__65855_$_iter__65862_$_iter__65878(s__65879){
return (new cljs.core.LazySeq(null,((function (i__65857,map__65876,map__65876__$1,block,uid__$1,parents,s__65863__$2,temp__5735__auto____$2,vec__65859,group_title,group,c__4580__auto__,size__4581__auto__,b__65858,s__65856__$2,temp__5735__auto____$1,vec__65852,linked_or_unlinked,refs,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid){
return (function (){
var s__65879__$1 = s__65879;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65879__$1);
if(temp__5735__auto____$3){
var s__65879__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65879__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65879__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65881 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65880 = (0);
while(true){
if((i__65880 < size__4581__auto____$1)){
var map__65882 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65880);
var map__65882__$1 = (((((!((map__65882 == null))))?(((((map__65882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65882):map__65882);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65882__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65882__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65882__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65881,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65945 = (i__65880 + (1));
i__65880 = G__65945;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65881),athens$devcards$node_page$node_page_el_$_iter__65787_$_iter__65855_$_iter__65862_$_iter__65878(cljs.core.chunk_rest(s__65879__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65881),null);
}
} else {
var map__65884 = cljs.core.first(s__65879__$2);
var map__65884__$1 = (((((!((map__65884 == null))))?(((((map__65884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65884):map__65884);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65884__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65884__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65884__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65787_$_iter__65855_$_iter__65862_$_iter__65878(cljs.core.rest(s__65879__$2)));
}
} else {
return null;
}
break;
}
});})(i__65857,map__65876,map__65876__$1,block,uid__$1,parents,s__65863__$2,temp__5735__auto____$2,vec__65859,group_title,group,c__4580__auto__,size__4581__auto__,b__65858,s__65856__$2,temp__5735__auto____$1,vec__65852,linked_or_unlinked,refs,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid))
,null,null));
});})(i__65857,map__65876,map__65876__$1,block,uid__$1,parents,s__65863__$2,temp__5735__auto____$2,vec__65859,group_title,group,c__4580__auto__,size__4581__auto__,b__65858,s__65856__$2,temp__5735__auto____$1,vec__65852,linked_or_unlinked,refs,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__65787_$_iter__65855_$_iter__65862(cljs.core.rest(s__65863__$2)));
}
} else {
return null;
}
break;
}
});})(i__65857,vec__65859,group_title,group,c__4580__auto__,size__4581__auto__,b__65858,s__65856__$2,temp__5735__auto____$1,vec__65852,linked_or_unlinked,refs,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid))
,null,null));
});})(i__65857,vec__65859,group_title,group,c__4580__auto__,size__4581__auto__,b__65858,s__65856__$2,temp__5735__auto____$1,vec__65852,linked_or_unlinked,refs,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__65946 = (i__65857 + (1));
i__65857 = G__65946;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65858),athens$devcards$node_page$node_page_el_$_iter__65787_$_iter__65855(cljs.core.chunk_rest(s__65856__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65858),null);
}
} else {
var vec__65886 = cljs.core.first(s__65856__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65886,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65886,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),group_title], null),(function (){var iter__4582__auto__ = ((function (vec__65886,group_title,group,s__65856__$2,temp__5735__auto____$1,vec__65852,linked_or_unlinked,refs,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65787_$_iter__65855_$_iter__65889(s__65890){
return (new cljs.core.LazySeq(null,(function (){
var s__65890__$1 = s__65890;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65890__$1);
if(temp__5735__auto____$2){
var s__65890__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65890__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65890__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65892 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65891 = (0);
while(true){
if((i__65891 < size__4581__auto__)){
var map__65893 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65891);
var map__65893__$1 = (((((!((map__65893 == null))))?(((((map__65893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65893):map__65893);
var block = map__65893__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65893__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65893__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__65892,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__65891,map__65893,map__65893__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65892,s__65890__$2,temp__5735__auto____$2,vec__65886,group_title,group,s__65856__$2,temp__5735__auto____$1,vec__65852,linked_or_unlinked,refs,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(i__65891,map__65893,map__65893__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65892,s__65890__$2,temp__5735__auto____$2,vec__65886,group_title,group,s__65856__$2,temp__5735__auto____$1,vec__65852,linked_or_unlinked,refs,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (i__65891,map__65893,map__65893__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65892,s__65890__$2,temp__5735__auto____$2,vec__65886,group_title,group,s__65856__$2,temp__5735__auto____$1,vec__65852,linked_or_unlinked,refs,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65787_$_iter__65855_$_iter__65889_$_iter__65895(s__65896){
return (new cljs.core.LazySeq(null,((function (i__65891,map__65893,map__65893__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65892,s__65890__$2,temp__5735__auto____$2,vec__65886,group_title,group,s__65856__$2,temp__5735__auto____$1,vec__65852,linked_or_unlinked,refs,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid){
return (function (){
var s__65896__$1 = s__65896;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65896__$1);
if(temp__5735__auto____$3){
var s__65896__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65896__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__65896__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__65898 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__65897 = (0);
while(true){
if((i__65897 < size__4581__auto____$1)){
var map__65899 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__65897);
var map__65899__$1 = (((((!((map__65899 == null))))?(((((map__65899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65899):map__65899);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65899__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65899__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65899__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65898,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65947 = (i__65897 + (1));
i__65897 = G__65947;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65898),athens$devcards$node_page$node_page_el_$_iter__65787_$_iter__65855_$_iter__65889_$_iter__65895(cljs.core.chunk_rest(s__65896__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65898),null);
}
} else {
var map__65901 = cljs.core.first(s__65896__$2);
var map__65901__$1 = (((((!((map__65901 == null))))?(((((map__65901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65901):map__65901);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65901__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65901__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65901__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65787_$_iter__65855_$_iter__65889_$_iter__65895(cljs.core.rest(s__65896__$2)));
}
} else {
return null;
}
break;
}
});})(i__65891,map__65893,map__65893__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65892,s__65890__$2,temp__5735__auto____$2,vec__65886,group_title,group,s__65856__$2,temp__5735__auto____$1,vec__65852,linked_or_unlinked,refs,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid))
,null,null));
});})(i__65891,map__65893,map__65893__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__65892,s__65890__$2,temp__5735__auto____$2,vec__65886,group_title,group,s__65856__$2,temp__5735__auto____$1,vec__65852,linked_or_unlinked,refs,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null));

var G__65948 = (i__65891 + (1));
i__65891 = G__65948;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65892),athens$devcards$node_page$node_page_el_$_iter__65787_$_iter__65855_$_iter__65889(cljs.core.chunk_rest(s__65890__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65892),null);
}
} else {
var map__65903 = cljs.core.first(s__65890__$2);
var map__65903__$1 = (((((!((map__65903 == null))))?(((((map__65903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65903):map__65903);
var block = map__65903__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65903__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65903__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__65903,map__65903__$1,block,uid__$1,parents,s__65890__$2,temp__5735__auto____$2,vec__65886,group_title,group,s__65856__$2,temp__5735__auto____$1,vec__65852,linked_or_unlinked,refs,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.KeyboardArrowRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
});})(map__65903,map__65903__$1,block,uid__$1,parents,s__65890__$2,temp__5735__auto____$2,vec__65886,group_title,group,s__65856__$2,temp__5735__auto____$1,vec__65852,linked_or_unlinked,refs,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = ((function (map__65903,map__65903__$1,block,uid__$1,parents,s__65890__$2,temp__5735__auto____$2,vec__65886,group_title,group,s__65856__$2,temp__5735__auto____$1,vec__65852,linked_or_unlinked,refs,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__65787_$_iter__65855_$_iter__65889_$_iter__65905(s__65906){
return (new cljs.core.LazySeq(null,(function (){
var s__65906__$1 = s__65906;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__65906__$1);
if(temp__5735__auto____$3){
var s__65906__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__65906__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65906__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65908 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65907 = (0);
while(true){
if((i__65907 < size__4581__auto__)){
var map__65909 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65907);
var map__65909__$1 = (((((!((map__65909 == null))))?(((((map__65909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65909):map__65909);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65909__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65909__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65909__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__65908,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__65949 = (i__65907 + (1));
i__65907 = G__65949;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65908),athens$devcards$node_page$node_page_el_$_iter__65787_$_iter__65855_$_iter__65889_$_iter__65905(cljs.core.chunk_rest(s__65906__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65908),null);
}
} else {
var map__65911 = cljs.core.first(s__65906__$2);
var map__65911__$1 = (((((!((map__65911 == null))))?(((((map__65911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65911):map__65911);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65911__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65911__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65911__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2], null)),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__65787_$_iter__65855_$_iter__65889_$_iter__65905(cljs.core.rest(s__65906__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__65903,map__65903__$1,block,uid__$1,parents,s__65890__$2,temp__5735__auto____$2,vec__65886,group_title,group,s__65856__$2,temp__5735__auto____$1,vec__65852,linked_or_unlinked,refs,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null)], null),athens$devcards$node_page$node_page_el_$_iter__65787_$_iter__65855_$_iter__65889(cljs.core.rest(s__65890__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__65886,group_title,group,s__65856__$2,temp__5735__auto____$1,vec__65852,linked_or_unlinked,refs,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__65787_$_iter__65855(cljs.core.rest(s__65856__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__65852,linked_or_unlinked,refs,s__65788__$2,temp__5735__auto__,map__65775,map__65775__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null),athens$devcards$node_page$node_page_el_$_iter__65787(cljs.core.rest(s__65788__$2)));
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
var editing_uid = cljs.core.deref((function (){var G__65913 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__65913) : re_frame.core.subscribe.call(null,G__65913));
})());
if(clojure.string.blank_QMARK_(title)){
return null;
} else {
var ref_groups = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Linked References",athens.devcards.node_page.get_data(athens.patterns.linked(title))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unlinked References",athens.devcards.node_page.get_data(athens.patterns.unlinked(title))], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.node_page.node_page_el,node,editing_uid,ref_groups], null);
}
});

//# sourceMappingURL=athens.devcards.node_page.js.map
