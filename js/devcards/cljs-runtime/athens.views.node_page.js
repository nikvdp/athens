goog.provide('athens.views.node_page');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.db');
goog.require('athens.parse_renderer');
goog.require('athens.router');
goog.require('athens.style');
goog.require('athens.util');
goog.require('athens.views.blocks');
goog.require('athens.views.breadcrumbs');
goog.require('athens.views.buttons');
goog.require('athens.views.dropdown');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
goog.require('garden.selectors');
goog.require('goog.functions');
goog.require('komponentit.autosize');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('stylefy.core');
goog.require('tick.alpha.api');
athens.views.node_page.page_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),"2rem auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 2rem",new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),"100%",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"55rem"], null);
athens.views.node_page.title_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"visible",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),"1",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.2em 0 0.2em 1rem",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.03em",new cljs.core.Keyword(null,"word-break","word-break",-407281356),"break-word",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"-webkit-appearance","-webkit-appearance",375531635),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"caret-color","caret-color",997187317),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"margin","margin",-995903681)],["inherit","translate3d(0,0,0)","inherit","100%","inherit","opacity 0.15s ease","0","inherit","100%","transparent","text","none","none","0","0",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),"0","absolute","inherit","0","0.25rem","inherit","0","0"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea:focus","textarea:focus",117113075),new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(3),new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._PLUS_(new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.Keyword(null,"span","span",1394872991)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null)], null)], null)], null);
athens.views.node_page.references_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-block","margin-block",1690397674),"3em"], null);
athens.views.node_page.references_heading_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 2rem",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"0.25em",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%"], null)], null)], null)], null);
athens.views.node_page.references_list_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null);
athens.views.node_page.references_group_title_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword(null,"margin","margin",-995903681),"0 1.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a:hover","a:hover",-1474674872),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null)], null);
athens.views.node_page.references_group_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"background-minus-2","background-minus-2",-1711017591),new cljs.core.Keyword(null,"opacity-med","opacity-med",1700530190)),new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 0.5rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"0.25rem",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.5em 0"], null);
athens.views.node_page.reference_breadcrumbs_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem calc(2rem - 0.5em)"], null);
athens.views.node_page.references_group_block_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px solid ",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"border-color","border-color",-2059162761))], null)], null),new cljs.core.Keyword(null,"padding-block-start","padding-block-start",1054404612),"1em",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"1em",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:first-of-type","&:first-of-type",1836617087),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"0",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"0"], null)], null)], null)], null);
athens.views.node_page.page_menu_toggle_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),"-0.5rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"1000px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.375rem 0.5rem",new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-high","opacity-high",1902226703)),new cljs.core.Keyword(null,"top","top",-1856271961),"50%",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(-100%, -50%)"], null);
athens.views.node_page.handler = (function athens$views$node_page$handler(val,uid){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null));
});
athens.views.node_page.db_handler = goog.functions.debounce(athens.views.node_page.handler,(500));
athens.views.node_page.is_timeline_page = (function athens$views$node_page$is_timeline_page(uid){
return cljs.core.boolean$((function (){try{var vec__57218 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57218,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57218,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57218,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e57217){if((e57217 instanceof Object)){
var _ = e57217;
return false;
} else {
throw e57217;

}
}})());
});
athens.views.node_page.handle_new_first_child_block_click = (function athens$views$node_page$handle_new_first_child_block_click(parent_uid){
var new_uid = athens.util.gen_block_uid();
var now = athens.util.now_ts();
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),parent_uid,new cljs.core.Keyword("edit","time","edit/time",1384867476),now,new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("block","order","block/order",-1429282437),(0),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new_uid,new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","string","block/string",-2066596447),""], null)], null)], null)], null)], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),new_uid], null));
});
athens.views.node_page.placeholder_block_el = (function athens$views$node_page$placeholder_block_el(parent_uid){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block-container"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.blocks.bullet_style)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.views.node_page.handle_new_first_child_block_click(parent_uid);
})], null),"Click here to add content..."], null)], null)], null);
});
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(_,___$1,___$2,___$3){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("menu","show","menu/show",-580966400),false,new cljs.core.Keyword("menu","x","menu/x",2085660544),null,new cljs.core.Keyword("menu","y","menu/y",-1754654817),null], null));
return (function (block,editing_uid,ref_groups,timeline_page_QMARK_){
var map__57221 = block;
var map__57221__$1 = (((((!((map__57221 == null))))?(((((map__57221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57221):map__57221);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57221__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var is_shortcut_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57221__$1,new cljs.core.Keyword("page","sidebar","page/sidebar",32416927));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57221__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57221__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var map__57222 = cljs.core.deref(state);
var map__57222__$1 = (((((!((map__57222 == null))))?(((((map__57222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57222):map__57222);
var show = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57222__$1,new cljs.core.Keyword("menu","show","menu/show",-580966400));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57222__$1,new cljs.core.Keyword("menu","x","menu/x",2085660544));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57222__$1,new cljs.core.Keyword("menu","y","menu/y",-1754654817));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.page_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node-page"], null)], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$2(uid,e);
})], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__57225 = e.target.value;
var G__57226 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__57225,G__57226) : athens.views.node_page.db_handler.call(null,G__57225,G__57226));
})], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(show)?"active":null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
if(cljs.core.truth_(show)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("menu","show","menu/show",-580966400),false);
} else {
var rect = e.target.getBoundingClientRect();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("menu","show","menu/show",-580966400),true,new cljs.core.Keyword("menu","x","menu/x",2085660544),rect.left,new cljs.core.Keyword("menu","y","menu/y",-1754654817),rect.bottom], null));
}
}),new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.page_menu_toggle_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.ExpandMore], null)], null),(cljs.core.truth_(show)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.dropdown_style),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px"].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px"].join('')], null)], null)], 0)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.menu_style),(cljs.core.truth_(is_shortcut_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","remove-shortcut","page/remove-shortcut",301722603),uid], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.BookmarkBorder], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Remove Shortcut"], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","add-shortcut","page/add-shortcut",467846378),uid], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Bookmark], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Add Shortcut"], null)], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.menu_separator_style)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
athens.router.navigate(new cljs.core.Keyword(null,"pages","pages",-285406513));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","delete","page/delete",-1774686917),uid], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Delete], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Delete Page"], null)], null)], null)], null)], null):null),athens.parse_renderer.parse_and_render(title,uid)], null),((cljs.core.empty_QMARK_(children))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.placeholder_block_el,uid], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4529__auto__ = (function athens$views$node_page$node_page_el_$_iter__57227(s__57228){
return (new cljs.core.LazySeq(null,(function (){
var s__57228__$1 = s__57228;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57228__$1);
if(temp__5735__auto__){
var s__57228__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57228__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__57228__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__57230 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__57229 = (0);
while(true){
if((i__57229 < size__4528__auto__)){
var map__57231 = cljs.core._nth(c__4527__auto__,i__57229);
var map__57231__$1 = (((((!((map__57231 == null))))?(((((map__57231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57231):map__57231);
var child = map__57231__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57231__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57230,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__57363 = (i__57229 + (1));
i__57229 = G__57363;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57230),athens$views$node_page$node_page_el_$_iter__57227(cljs.core.chunk_rest(s__57228__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57230),null);
}
} else {
var map__57233 = cljs.core.first(s__57228__$2);
var map__57233__$1 = (((((!((map__57233 == null))))?(((((map__57233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57233):map__57233);
var child = map__57233__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57233__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__57227(cljs.core.rest(s__57228__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(children);
})()], null)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function athens$views$node_page$node_page_el_$_iter__57235(s__57236){
return (new cljs.core.LazySeq(null,(function (){
var s__57236__$1 = s__57236;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57236__$1);
if(temp__5735__auto__){
var s__57236__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57236__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__57236__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__57238 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__57237 = (0);
while(true){
if((i__57237 < size__4528__auto__)){
var vec__57239 = cljs.core._nth(c__4527__auto__,i__57237);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57239,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57239,(1),null);
cljs.core.chunk_append(b__57238,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57237,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57235_$_iter__57242(s__57243){
return (new cljs.core.LazySeq(null,((function (i__57237,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function (){
var s__57243__$1 = s__57243;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__57243__$1);
if(temp__5735__auto____$1){
var s__57243__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__57243__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__57243__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__57245 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__57244 = (0);
while(true){
if((i__57244 < size__4528__auto____$1)){
var vec__57246 = cljs.core._nth(c__4527__auto____$1,i__57244);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57246,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57246,(1),null);
cljs.core.chunk_append(b__57245,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57244,i__57237,vec__57246,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57245,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__57244,i__57237,vec__57246,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57245,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57244,i__57237,vec__57246,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57245,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57235_$_iter__57242_$_iter__57249(s__57250){
return (new cljs.core.LazySeq(null,((function (i__57244,i__57237,vec__57246,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57245,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function (){
var s__57250__$1 = s__57250;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__57250__$1);
if(temp__5735__auto____$2){
var s__57250__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__57250__$2)){
var c__4527__auto____$2 = cljs.core.chunk_first(s__57250__$2);
var size__4528__auto____$2 = cljs.core.count(c__4527__auto____$2);
var b__57252 = cljs.core.chunk_buffer(size__4528__auto____$2);
if((function (){var i__57251 = (0);
while(true){
if((i__57251 < size__4528__auto____$2)){
var map__57253 = cljs.core._nth(c__4527__auto____$2,i__57251);
var map__57253__$1 = (((((!((map__57253 == null))))?(((((map__57253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57253):map__57253);
var block__$1 = map__57253__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57253__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57253__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__57252,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57251,i__57244,i__57237,map__57253,map__57253__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57252,s__57250__$2,temp__5735__auto____$2,vec__57246,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57245,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57235_$_iter__57242_$_iter__57249_$_iter__57255(s__57256){
return (new cljs.core.LazySeq(null,((function (i__57251,i__57244,i__57237,map__57253,map__57253__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57252,s__57250__$2,temp__5735__auto____$2,vec__57246,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57245,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function (){
var s__57256__$1 = s__57256;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57256__$1);
if(temp__5735__auto____$3){
var s__57256__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57256__$2)){
var c__4527__auto____$3 = cljs.core.chunk_first(s__57256__$2);
var size__4528__auto____$3 = cljs.core.count(c__4527__auto____$3);
var b__57258 = cljs.core.chunk_buffer(size__4528__auto____$3);
if((function (){var i__57257 = (0);
while(true){
if((i__57257 < size__4528__auto____$3)){
var map__57259 = cljs.core._nth(c__4527__auto____$3,i__57257);
var map__57259__$1 = (((((!((map__57259 == null))))?(((((map__57259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57259):map__57259);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57259__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57259__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57259__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57258,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57257,i__57251,i__57244,i__57237,map__57259,map__57259__$1,title__$1,string,uid__$2,c__4527__auto____$3,size__4528__auto____$3,b__57258,s__57256__$2,temp__5735__auto____$3,map__57253,map__57253__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57252,s__57250__$2,temp__5735__auto____$2,vec__57246,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57245,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57257,i__57251,i__57244,i__57237,map__57259,map__57259__$1,title__$1,string,uid__$2,c__4527__auto____$3,size__4528__auto____$3,b__57258,s__57256__$2,temp__5735__auto____$3,map__57253,map__57253__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57252,s__57250__$2,temp__5735__auto____$2,vec__57246,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57245,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57364 = (i__57257 + (1));
i__57257 = G__57364;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57258),athens$views$node_page$node_page_el_$_iter__57235_$_iter__57242_$_iter__57249_$_iter__57255(cljs.core.chunk_rest(s__57256__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57258),null);
}
} else {
var map__57261 = cljs.core.first(s__57256__$2);
var map__57261__$1 = (((((!((map__57261 == null))))?(((((map__57261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57261):map__57261);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57261__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57261__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57261__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57251,i__57244,i__57237,map__57261,map__57261__$1,title__$1,string,uid__$2,s__57256__$2,temp__5735__auto____$3,map__57253,map__57253__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57252,s__57250__$2,temp__5735__auto____$2,vec__57246,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57245,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57251,i__57244,i__57237,map__57261,map__57261__$1,title__$1,string,uid__$2,s__57256__$2,temp__5735__auto____$3,map__57253,map__57253__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57252,s__57250__$2,temp__5735__auto____$2,vec__57246,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57245,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57235_$_iter__57242_$_iter__57249_$_iter__57255(cljs.core.rest(s__57256__$2)));
}
} else {
return null;
}
break;
}
});})(i__57251,i__57244,i__57237,map__57253,map__57253__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57252,s__57250__$2,temp__5735__auto____$2,vec__57246,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57245,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
,null,null));
});})(i__57251,i__57244,i__57237,map__57253,map__57253__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57252,s__57250__$2,temp__5735__auto____$2,vec__57246,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57245,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null));

var G__57365 = (i__57251 + (1));
i__57251 = G__57365;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57252),athens$views$node_page$node_page_el_$_iter__57235_$_iter__57242_$_iter__57249(cljs.core.chunk_rest(s__57250__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57252),null);
}
} else {
var map__57263 = cljs.core.first(s__57250__$2);
var map__57263__$1 = (((((!((map__57263 == null))))?(((((map__57263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57263):map__57263);
var block__$1 = map__57263__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57263__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57263__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57244,i__57237,map__57263,map__57263__$1,block__$1,uid__$1,parents,s__57250__$2,temp__5735__auto____$2,vec__57246,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57245,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57235_$_iter__57242_$_iter__57249_$_iter__57265(s__57266){
return (new cljs.core.LazySeq(null,((function (i__57244,i__57237,map__57263,map__57263__$1,block__$1,uid__$1,parents,s__57250__$2,temp__5735__auto____$2,vec__57246,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57245,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function (){
var s__57266__$1 = s__57266;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57266__$1);
if(temp__5735__auto____$3){
var s__57266__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57266__$2)){
var c__4527__auto____$2 = cljs.core.chunk_first(s__57266__$2);
var size__4528__auto____$2 = cljs.core.count(c__4527__auto____$2);
var b__57268 = cljs.core.chunk_buffer(size__4528__auto____$2);
if((function (){var i__57267 = (0);
while(true){
if((i__57267 < size__4528__auto____$2)){
var map__57269 = cljs.core._nth(c__4527__auto____$2,i__57267);
var map__57269__$1 = (((((!((map__57269 == null))))?(((((map__57269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57269):map__57269);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57269__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57269__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57269__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57268,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57267,i__57244,i__57237,map__57269,map__57269__$1,title__$1,string,uid__$2,c__4527__auto____$2,size__4528__auto____$2,b__57268,s__57266__$2,temp__5735__auto____$3,map__57263,map__57263__$1,block__$1,uid__$1,parents,s__57250__$2,temp__5735__auto____$2,vec__57246,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57245,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57267,i__57244,i__57237,map__57269,map__57269__$1,title__$1,string,uid__$2,c__4527__auto____$2,size__4528__auto____$2,b__57268,s__57266__$2,temp__5735__auto____$3,map__57263,map__57263__$1,block__$1,uid__$1,parents,s__57250__$2,temp__5735__auto____$2,vec__57246,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57245,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57366 = (i__57267 + (1));
i__57267 = G__57366;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57268),athens$views$node_page$node_page_el_$_iter__57235_$_iter__57242_$_iter__57249_$_iter__57265(cljs.core.chunk_rest(s__57266__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57268),null);
}
} else {
var map__57271 = cljs.core.first(s__57266__$2);
var map__57271__$1 = (((((!((map__57271 == null))))?(((((map__57271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57271):map__57271);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57271__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57271__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57271__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57244,i__57237,map__57271,map__57271__$1,title__$1,string,uid__$2,s__57266__$2,temp__5735__auto____$3,map__57263,map__57263__$1,block__$1,uid__$1,parents,s__57250__$2,temp__5735__auto____$2,vec__57246,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57245,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57244,i__57237,map__57271,map__57271__$1,title__$1,string,uid__$2,s__57266__$2,temp__5735__auto____$3,map__57263,map__57263__$1,block__$1,uid__$1,parents,s__57250__$2,temp__5735__auto____$2,vec__57246,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57245,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57235_$_iter__57242_$_iter__57249_$_iter__57265(cljs.core.rest(s__57266__$2)));
}
} else {
return null;
}
break;
}
});})(i__57244,i__57237,map__57263,map__57263__$1,block__$1,uid__$1,parents,s__57250__$2,temp__5735__auto____$2,vec__57246,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57245,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
,null,null));
});})(i__57244,i__57237,map__57263,map__57263__$1,block__$1,uid__$1,parents,s__57250__$2,temp__5735__auto____$2,vec__57246,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57245,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__57235_$_iter__57242_$_iter__57249(cljs.core.rest(s__57250__$2)));
}
} else {
return null;
}
break;
}
});})(i__57244,i__57237,vec__57246,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57245,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
,null,null));
});})(i__57244,i__57237,vec__57246,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57245,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
;
return iter__4529__auto__(group);
})())], null));

var G__57367 = (i__57244 + (1));
i__57244 = G__57367;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57245),athens$views$node_page$node_page_el_$_iter__57235_$_iter__57242(cljs.core.chunk_rest(s__57243__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57245),null);
}
} else {
var vec__57273 = cljs.core.first(s__57243__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57273,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57273,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57237,vec__57273,group_title,group,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__57237,vec__57273,group_title,group,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57237,vec__57273,group_title,group,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57235_$_iter__57242_$_iter__57276(s__57277){
return (new cljs.core.LazySeq(null,((function (i__57237,vec__57273,group_title,group,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function (){
var s__57277__$1 = s__57277;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__57277__$1);
if(temp__5735__auto____$2){
var s__57277__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__57277__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__57277__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__57279 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__57278 = (0);
while(true){
if((i__57278 < size__4528__auto____$1)){
var map__57280 = cljs.core._nth(c__4527__auto____$1,i__57278);
var map__57280__$1 = (((((!((map__57280 == null))))?(((((map__57280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57280):map__57280);
var block__$1 = map__57280__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57280__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57280__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__57279,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57278,i__57237,map__57280,map__57280__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57279,s__57277__$2,temp__5735__auto____$2,vec__57273,group_title,group,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57235_$_iter__57242_$_iter__57276_$_iter__57282(s__57283){
return (new cljs.core.LazySeq(null,((function (i__57278,i__57237,map__57280,map__57280__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57279,s__57277__$2,temp__5735__auto____$2,vec__57273,group_title,group,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function (){
var s__57283__$1 = s__57283;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57283__$1);
if(temp__5735__auto____$3){
var s__57283__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57283__$2)){
var c__4527__auto____$2 = cljs.core.chunk_first(s__57283__$2);
var size__4528__auto____$2 = cljs.core.count(c__4527__auto____$2);
var b__57285 = cljs.core.chunk_buffer(size__4528__auto____$2);
if((function (){var i__57284 = (0);
while(true){
if((i__57284 < size__4528__auto____$2)){
var map__57286 = cljs.core._nth(c__4527__auto____$2,i__57284);
var map__57286__$1 = (((((!((map__57286 == null))))?(((((map__57286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57286):map__57286);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57286__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57286__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57286__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57285,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57284,i__57278,i__57237,map__57286,map__57286__$1,title__$1,string,uid__$2,c__4527__auto____$2,size__4528__auto____$2,b__57285,s__57283__$2,temp__5735__auto____$3,map__57280,map__57280__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57279,s__57277__$2,temp__5735__auto____$2,vec__57273,group_title,group,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57284,i__57278,i__57237,map__57286,map__57286__$1,title__$1,string,uid__$2,c__4527__auto____$2,size__4528__auto____$2,b__57285,s__57283__$2,temp__5735__auto____$3,map__57280,map__57280__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57279,s__57277__$2,temp__5735__auto____$2,vec__57273,group_title,group,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57368 = (i__57284 + (1));
i__57284 = G__57368;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57285),athens$views$node_page$node_page_el_$_iter__57235_$_iter__57242_$_iter__57276_$_iter__57282(cljs.core.chunk_rest(s__57283__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57285),null);
}
} else {
var map__57288 = cljs.core.first(s__57283__$2);
var map__57288__$1 = (((((!((map__57288 == null))))?(((((map__57288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57288):map__57288);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57288__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57288__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57288__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57278,i__57237,map__57288,map__57288__$1,title__$1,string,uid__$2,s__57283__$2,temp__5735__auto____$3,map__57280,map__57280__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57279,s__57277__$2,temp__5735__auto____$2,vec__57273,group_title,group,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57278,i__57237,map__57288,map__57288__$1,title__$1,string,uid__$2,s__57283__$2,temp__5735__auto____$3,map__57280,map__57280__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57279,s__57277__$2,temp__5735__auto____$2,vec__57273,group_title,group,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57235_$_iter__57242_$_iter__57276_$_iter__57282(cljs.core.rest(s__57283__$2)));
}
} else {
return null;
}
break;
}
});})(i__57278,i__57237,map__57280,map__57280__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57279,s__57277__$2,temp__5735__auto____$2,vec__57273,group_title,group,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
,null,null));
});})(i__57278,i__57237,map__57280,map__57280__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57279,s__57277__$2,temp__5735__auto____$2,vec__57273,group_title,group,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null));

var G__57369 = (i__57278 + (1));
i__57278 = G__57369;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57279),athens$views$node_page$node_page_el_$_iter__57235_$_iter__57242_$_iter__57276(cljs.core.chunk_rest(s__57277__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57279),null);
}
} else {
var map__57290 = cljs.core.first(s__57277__$2);
var map__57290__$1 = (((((!((map__57290 == null))))?(((((map__57290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57290):map__57290);
var block__$1 = map__57290__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57290__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57290__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57237,map__57290,map__57290__$1,block__$1,uid__$1,parents,s__57277__$2,temp__5735__auto____$2,vec__57273,group_title,group,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57235_$_iter__57242_$_iter__57276_$_iter__57292(s__57293){
return (new cljs.core.LazySeq(null,((function (i__57237,map__57290,map__57290__$1,block__$1,uid__$1,parents,s__57277__$2,temp__5735__auto____$2,vec__57273,group_title,group,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function (){
var s__57293__$1 = s__57293;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57293__$1);
if(temp__5735__auto____$3){
var s__57293__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57293__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__57293__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__57295 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__57294 = (0);
while(true){
if((i__57294 < size__4528__auto____$1)){
var map__57296 = cljs.core._nth(c__4527__auto____$1,i__57294);
var map__57296__$1 = (((((!((map__57296 == null))))?(((((map__57296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57296):map__57296);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57296__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57296__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57296__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57295,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57294,i__57237,map__57296,map__57296__$1,title__$1,string,uid__$2,c__4527__auto____$1,size__4528__auto____$1,b__57295,s__57293__$2,temp__5735__auto____$3,map__57290,map__57290__$1,block__$1,uid__$1,parents,s__57277__$2,temp__5735__auto____$2,vec__57273,group_title,group,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57294,i__57237,map__57296,map__57296__$1,title__$1,string,uid__$2,c__4527__auto____$1,size__4528__auto____$1,b__57295,s__57293__$2,temp__5735__auto____$3,map__57290,map__57290__$1,block__$1,uid__$1,parents,s__57277__$2,temp__5735__auto____$2,vec__57273,group_title,group,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57370 = (i__57294 + (1));
i__57294 = G__57370;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57295),athens$views$node_page$node_page_el_$_iter__57235_$_iter__57242_$_iter__57276_$_iter__57292(cljs.core.chunk_rest(s__57293__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57295),null);
}
} else {
var map__57298 = cljs.core.first(s__57293__$2);
var map__57298__$1 = (((((!((map__57298 == null))))?(((((map__57298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57298):map__57298);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57298__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57298__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57298__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57237,map__57298,map__57298__$1,title__$1,string,uid__$2,s__57293__$2,temp__5735__auto____$3,map__57290,map__57290__$1,block__$1,uid__$1,parents,s__57277__$2,temp__5735__auto____$2,vec__57273,group_title,group,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57237,map__57298,map__57298__$1,title__$1,string,uid__$2,s__57293__$2,temp__5735__auto____$3,map__57290,map__57290__$1,block__$1,uid__$1,parents,s__57277__$2,temp__5735__auto____$2,vec__57273,group_title,group,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57235_$_iter__57242_$_iter__57276_$_iter__57292(cljs.core.rest(s__57293__$2)));
}
} else {
return null;
}
break;
}
});})(i__57237,map__57290,map__57290__$1,block__$1,uid__$1,parents,s__57277__$2,temp__5735__auto____$2,vec__57273,group_title,group,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
,null,null));
});})(i__57237,map__57290,map__57290__$1,block__$1,uid__$1,parents,s__57277__$2,temp__5735__auto____$2,vec__57273,group_title,group,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__57235_$_iter__57242_$_iter__57276(cljs.core.rest(s__57277__$2)));
}
} else {
return null;
}
break;
}
});})(i__57237,vec__57273,group_title,group,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
,null,null));
});})(i__57237,vec__57273,group_title,group,s__57243__$2,temp__5735__auto____$1,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
;
return iter__4529__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__57235_$_iter__57242(cljs.core.rest(s__57243__$2)));
}
} else {
return null;
}
break;
}
});})(i__57237,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
,null,null));
});})(i__57237,vec__57239,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57238,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
;
return iter__4529__auto__(refs);
})())], null)], null):null));

var G__57371 = (i__57237 + (1));
i__57237 = G__57371;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57238),athens$views$node_page$node_page_el_$_iter__57235(cljs.core.chunk_rest(s__57236__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57238),null);
}
} else {
var vec__57300 = cljs.core.first(s__57236__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57300,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57300,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (vec__57300,linked_or_unlinked,refs,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57235_$_iter__57303(s__57304){
return (new cljs.core.LazySeq(null,(function (){
var s__57304__$1 = s__57304;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__57304__$1);
if(temp__5735__auto____$1){
var s__57304__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__57304__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__57304__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__57306 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__57305 = (0);
while(true){
if((i__57305 < size__4528__auto__)){
var vec__57307 = cljs.core._nth(c__4527__auto__,i__57305);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57307,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57307,(1),null);
cljs.core.chunk_append(b__57306,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57305,vec__57307,group_title,group,c__4527__auto__,size__4528__auto__,b__57306,s__57304__$2,temp__5735__auto____$1,vec__57300,linked_or_unlinked,refs,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__57305,vec__57307,group_title,group,c__4527__auto__,size__4528__auto__,b__57306,s__57304__$2,temp__5735__auto____$1,vec__57300,linked_or_unlinked,refs,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57305,vec__57307,group_title,group,c__4527__auto__,size__4528__auto__,b__57306,s__57304__$2,temp__5735__auto____$1,vec__57300,linked_or_unlinked,refs,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57235_$_iter__57303_$_iter__57310(s__57311){
return (new cljs.core.LazySeq(null,((function (i__57305,vec__57307,group_title,group,c__4527__auto__,size__4528__auto__,b__57306,s__57304__$2,temp__5735__auto____$1,vec__57300,linked_or_unlinked,refs,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function (){
var s__57311__$1 = s__57311;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__57311__$1);
if(temp__5735__auto____$2){
var s__57311__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__57311__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__57311__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__57313 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__57312 = (0);
while(true){
if((i__57312 < size__4528__auto____$1)){
var map__57314 = cljs.core._nth(c__4527__auto____$1,i__57312);
var map__57314__$1 = (((((!((map__57314 == null))))?(((((map__57314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57314):map__57314);
var block__$1 = map__57314__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57314__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57314__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__57313,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57312,i__57305,map__57314,map__57314__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57313,s__57311__$2,temp__5735__auto____$2,vec__57307,group_title,group,c__4527__auto__,size__4528__auto__,b__57306,s__57304__$2,temp__5735__auto____$1,vec__57300,linked_or_unlinked,refs,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57235_$_iter__57303_$_iter__57310_$_iter__57316(s__57317){
return (new cljs.core.LazySeq(null,((function (i__57312,i__57305,map__57314,map__57314__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57313,s__57311__$2,temp__5735__auto____$2,vec__57307,group_title,group,c__4527__auto__,size__4528__auto__,b__57306,s__57304__$2,temp__5735__auto____$1,vec__57300,linked_or_unlinked,refs,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function (){
var s__57317__$1 = s__57317;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57317__$1);
if(temp__5735__auto____$3){
var s__57317__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57317__$2)){
var c__4527__auto____$2 = cljs.core.chunk_first(s__57317__$2);
var size__4528__auto____$2 = cljs.core.count(c__4527__auto____$2);
var b__57319 = cljs.core.chunk_buffer(size__4528__auto____$2);
if((function (){var i__57318 = (0);
while(true){
if((i__57318 < size__4528__auto____$2)){
var map__57320 = cljs.core._nth(c__4527__auto____$2,i__57318);
var map__57320__$1 = (((((!((map__57320 == null))))?(((((map__57320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57320):map__57320);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57320__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57320__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57320__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57319,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57318,i__57312,i__57305,map__57320,map__57320__$1,title__$1,string,uid__$2,c__4527__auto____$2,size__4528__auto____$2,b__57319,s__57317__$2,temp__5735__auto____$3,map__57314,map__57314__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57313,s__57311__$2,temp__5735__auto____$2,vec__57307,group_title,group,c__4527__auto__,size__4528__auto__,b__57306,s__57304__$2,temp__5735__auto____$1,vec__57300,linked_or_unlinked,refs,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57318,i__57312,i__57305,map__57320,map__57320__$1,title__$1,string,uid__$2,c__4527__auto____$2,size__4528__auto____$2,b__57319,s__57317__$2,temp__5735__auto____$3,map__57314,map__57314__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57313,s__57311__$2,temp__5735__auto____$2,vec__57307,group_title,group,c__4527__auto__,size__4528__auto__,b__57306,s__57304__$2,temp__5735__auto____$1,vec__57300,linked_or_unlinked,refs,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57372 = (i__57318 + (1));
i__57318 = G__57372;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57319),athens$views$node_page$node_page_el_$_iter__57235_$_iter__57303_$_iter__57310_$_iter__57316(cljs.core.chunk_rest(s__57317__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57319),null);
}
} else {
var map__57322 = cljs.core.first(s__57317__$2);
var map__57322__$1 = (((((!((map__57322 == null))))?(((((map__57322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57322):map__57322);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57322__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57322__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57322__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57312,i__57305,map__57322,map__57322__$1,title__$1,string,uid__$2,s__57317__$2,temp__5735__auto____$3,map__57314,map__57314__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57313,s__57311__$2,temp__5735__auto____$2,vec__57307,group_title,group,c__4527__auto__,size__4528__auto__,b__57306,s__57304__$2,temp__5735__auto____$1,vec__57300,linked_or_unlinked,refs,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57312,i__57305,map__57322,map__57322__$1,title__$1,string,uid__$2,s__57317__$2,temp__5735__auto____$3,map__57314,map__57314__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57313,s__57311__$2,temp__5735__auto____$2,vec__57307,group_title,group,c__4527__auto__,size__4528__auto__,b__57306,s__57304__$2,temp__5735__auto____$1,vec__57300,linked_or_unlinked,refs,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57235_$_iter__57303_$_iter__57310_$_iter__57316(cljs.core.rest(s__57317__$2)));
}
} else {
return null;
}
break;
}
});})(i__57312,i__57305,map__57314,map__57314__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57313,s__57311__$2,temp__5735__auto____$2,vec__57307,group_title,group,c__4527__auto__,size__4528__auto__,b__57306,s__57304__$2,temp__5735__auto____$1,vec__57300,linked_or_unlinked,refs,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
,null,null));
});})(i__57312,i__57305,map__57314,map__57314__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57313,s__57311__$2,temp__5735__auto____$2,vec__57307,group_title,group,c__4527__auto__,size__4528__auto__,b__57306,s__57304__$2,temp__5735__auto____$1,vec__57300,linked_or_unlinked,refs,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null));

var G__57373 = (i__57312 + (1));
i__57312 = G__57373;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57313),athens$views$node_page$node_page_el_$_iter__57235_$_iter__57303_$_iter__57310(cljs.core.chunk_rest(s__57311__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57313),null);
}
} else {
var map__57324 = cljs.core.first(s__57311__$2);
var map__57324__$1 = (((((!((map__57324 == null))))?(((((map__57324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57324):map__57324);
var block__$1 = map__57324__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57324__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57324__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57305,map__57324,map__57324__$1,block__$1,uid__$1,parents,s__57311__$2,temp__5735__auto____$2,vec__57307,group_title,group,c__4527__auto__,size__4528__auto__,b__57306,s__57304__$2,temp__5735__auto____$1,vec__57300,linked_or_unlinked,refs,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57235_$_iter__57303_$_iter__57310_$_iter__57326(s__57327){
return (new cljs.core.LazySeq(null,((function (i__57305,map__57324,map__57324__$1,block__$1,uid__$1,parents,s__57311__$2,temp__5735__auto____$2,vec__57307,group_title,group,c__4527__auto__,size__4528__auto__,b__57306,s__57304__$2,temp__5735__auto____$1,vec__57300,linked_or_unlinked,refs,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function (){
var s__57327__$1 = s__57327;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57327__$1);
if(temp__5735__auto____$3){
var s__57327__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57327__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__57327__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__57329 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__57328 = (0);
while(true){
if((i__57328 < size__4528__auto____$1)){
var map__57330 = cljs.core._nth(c__4527__auto____$1,i__57328);
var map__57330__$1 = (((((!((map__57330 == null))))?(((((map__57330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57330):map__57330);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57330__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57330__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57330__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57329,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57328,i__57305,map__57330,map__57330__$1,title__$1,string,uid__$2,c__4527__auto____$1,size__4528__auto____$1,b__57329,s__57327__$2,temp__5735__auto____$3,map__57324,map__57324__$1,block__$1,uid__$1,parents,s__57311__$2,temp__5735__auto____$2,vec__57307,group_title,group,c__4527__auto__,size__4528__auto__,b__57306,s__57304__$2,temp__5735__auto____$1,vec__57300,linked_or_unlinked,refs,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57328,i__57305,map__57330,map__57330__$1,title__$1,string,uid__$2,c__4527__auto____$1,size__4528__auto____$1,b__57329,s__57327__$2,temp__5735__auto____$3,map__57324,map__57324__$1,block__$1,uid__$1,parents,s__57311__$2,temp__5735__auto____$2,vec__57307,group_title,group,c__4527__auto__,size__4528__auto__,b__57306,s__57304__$2,temp__5735__auto____$1,vec__57300,linked_or_unlinked,refs,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57374 = (i__57328 + (1));
i__57328 = G__57374;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57329),athens$views$node_page$node_page_el_$_iter__57235_$_iter__57303_$_iter__57310_$_iter__57326(cljs.core.chunk_rest(s__57327__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57329),null);
}
} else {
var map__57332 = cljs.core.first(s__57327__$2);
var map__57332__$1 = (((((!((map__57332 == null))))?(((((map__57332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57332):map__57332);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57332__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57332__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57332__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57305,map__57332,map__57332__$1,title__$1,string,uid__$2,s__57327__$2,temp__5735__auto____$3,map__57324,map__57324__$1,block__$1,uid__$1,parents,s__57311__$2,temp__5735__auto____$2,vec__57307,group_title,group,c__4527__auto__,size__4528__auto__,b__57306,s__57304__$2,temp__5735__auto____$1,vec__57300,linked_or_unlinked,refs,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57305,map__57332,map__57332__$1,title__$1,string,uid__$2,s__57327__$2,temp__5735__auto____$3,map__57324,map__57324__$1,block__$1,uid__$1,parents,s__57311__$2,temp__5735__auto____$2,vec__57307,group_title,group,c__4527__auto__,size__4528__auto__,b__57306,s__57304__$2,temp__5735__auto____$1,vec__57300,linked_or_unlinked,refs,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57235_$_iter__57303_$_iter__57310_$_iter__57326(cljs.core.rest(s__57327__$2)));
}
} else {
return null;
}
break;
}
});})(i__57305,map__57324,map__57324__$1,block__$1,uid__$1,parents,s__57311__$2,temp__5735__auto____$2,vec__57307,group_title,group,c__4527__auto__,size__4528__auto__,b__57306,s__57304__$2,temp__5735__auto____$1,vec__57300,linked_or_unlinked,refs,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
,null,null));
});})(i__57305,map__57324,map__57324__$1,block__$1,uid__$1,parents,s__57311__$2,temp__5735__auto____$2,vec__57307,group_title,group,c__4527__auto__,size__4528__auto__,b__57306,s__57304__$2,temp__5735__auto____$1,vec__57300,linked_or_unlinked,refs,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__57235_$_iter__57303_$_iter__57310(cljs.core.rest(s__57311__$2)));
}
} else {
return null;
}
break;
}
});})(i__57305,vec__57307,group_title,group,c__4527__auto__,size__4528__auto__,b__57306,s__57304__$2,temp__5735__auto____$1,vec__57300,linked_or_unlinked,refs,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
,null,null));
});})(i__57305,vec__57307,group_title,group,c__4527__auto__,size__4528__auto__,b__57306,s__57304__$2,temp__5735__auto____$1,vec__57300,linked_or_unlinked,refs,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
;
return iter__4529__auto__(group);
})())], null));

var G__57375 = (i__57305 + (1));
i__57305 = G__57375;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57306),athens$views$node_page$node_page_el_$_iter__57235_$_iter__57303(cljs.core.chunk_rest(s__57304__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57306),null);
}
} else {
var vec__57334 = cljs.core.first(s__57304__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57334,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57334,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__57334,group_title,group,s__57304__$2,temp__5735__auto____$1,vec__57300,linked_or_unlinked,refs,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(vec__57334,group_title,group,s__57304__$2,temp__5735__auto____$1,vec__57300,linked_or_unlinked,refs,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (vec__57334,group_title,group,s__57304__$2,temp__5735__auto____$1,vec__57300,linked_or_unlinked,refs,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57235_$_iter__57303_$_iter__57337(s__57338){
return (new cljs.core.LazySeq(null,(function (){
var s__57338__$1 = s__57338;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__57338__$1);
if(temp__5735__auto____$2){
var s__57338__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__57338__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__57338__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__57340 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__57339 = (0);
while(true){
if((i__57339 < size__4528__auto__)){
var map__57341 = cljs.core._nth(c__4527__auto__,i__57339);
var map__57341__$1 = (((((!((map__57341 == null))))?(((((map__57341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57341):map__57341);
var block__$1 = map__57341__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57341__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57341__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__57340,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57339,map__57341,map__57341__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57340,s__57338__$2,temp__5735__auto____$2,vec__57334,group_title,group,s__57304__$2,temp__5735__auto____$1,vec__57300,linked_or_unlinked,refs,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57235_$_iter__57303_$_iter__57337_$_iter__57343(s__57344){
return (new cljs.core.LazySeq(null,((function (i__57339,map__57341,map__57341__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57340,s__57338__$2,temp__5735__auto____$2,vec__57334,group_title,group,s__57304__$2,temp__5735__auto____$1,vec__57300,linked_or_unlinked,refs,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function (){
var s__57344__$1 = s__57344;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57344__$1);
if(temp__5735__auto____$3){
var s__57344__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57344__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__57344__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__57346 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__57345 = (0);
while(true){
if((i__57345 < size__4528__auto____$1)){
var map__57347 = cljs.core._nth(c__4527__auto____$1,i__57345);
var map__57347__$1 = (((((!((map__57347 == null))))?(((((map__57347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57347):map__57347);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57347__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57347__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57347__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57346,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57345,i__57339,map__57347,map__57347__$1,title__$1,string,uid__$2,c__4527__auto____$1,size__4528__auto____$1,b__57346,s__57344__$2,temp__5735__auto____$3,map__57341,map__57341__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57340,s__57338__$2,temp__5735__auto____$2,vec__57334,group_title,group,s__57304__$2,temp__5735__auto____$1,vec__57300,linked_or_unlinked,refs,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57345,i__57339,map__57347,map__57347__$1,title__$1,string,uid__$2,c__4527__auto____$1,size__4528__auto____$1,b__57346,s__57344__$2,temp__5735__auto____$3,map__57341,map__57341__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57340,s__57338__$2,temp__5735__auto____$2,vec__57334,group_title,group,s__57304__$2,temp__5735__auto____$1,vec__57300,linked_or_unlinked,refs,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57376 = (i__57345 + (1));
i__57345 = G__57376;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57346),athens$views$node_page$node_page_el_$_iter__57235_$_iter__57303_$_iter__57337_$_iter__57343(cljs.core.chunk_rest(s__57344__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57346),null);
}
} else {
var map__57349 = cljs.core.first(s__57344__$2);
var map__57349__$1 = (((((!((map__57349 == null))))?(((((map__57349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57349):map__57349);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57349__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57349__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57349__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57339,map__57349,map__57349__$1,title__$1,string,uid__$2,s__57344__$2,temp__5735__auto____$3,map__57341,map__57341__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57340,s__57338__$2,temp__5735__auto____$2,vec__57334,group_title,group,s__57304__$2,temp__5735__auto____$1,vec__57300,linked_or_unlinked,refs,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57339,map__57349,map__57349__$1,title__$1,string,uid__$2,s__57344__$2,temp__5735__auto____$3,map__57341,map__57341__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57340,s__57338__$2,temp__5735__auto____$2,vec__57334,group_title,group,s__57304__$2,temp__5735__auto____$1,vec__57300,linked_or_unlinked,refs,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57235_$_iter__57303_$_iter__57337_$_iter__57343(cljs.core.rest(s__57344__$2)));
}
} else {
return null;
}
break;
}
});})(i__57339,map__57341,map__57341__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57340,s__57338__$2,temp__5735__auto____$2,vec__57334,group_title,group,s__57304__$2,temp__5735__auto____$1,vec__57300,linked_or_unlinked,refs,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
,null,null));
});})(i__57339,map__57341,map__57341__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57340,s__57338__$2,temp__5735__auto____$2,vec__57334,group_title,group,s__57304__$2,temp__5735__auto____$1,vec__57300,linked_or_unlinked,refs,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null));

var G__57377 = (i__57339 + (1));
i__57339 = G__57377;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57340),athens$views$node_page$node_page_el_$_iter__57235_$_iter__57303_$_iter__57337(cljs.core.chunk_rest(s__57338__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57340),null);
}
} else {
var map__57351 = cljs.core.first(s__57338__$2);
var map__57351__$1 = (((((!((map__57351 == null))))?(((((map__57351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57351):map__57351);
var block__$1 = map__57351__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57351__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57351__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (map__57351,map__57351__$1,block__$1,uid__$1,parents,s__57338__$2,temp__5735__auto____$2,vec__57334,group_title,group,s__57304__$2,temp__5735__auto____$1,vec__57300,linked_or_unlinked,refs,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57235_$_iter__57303_$_iter__57337_$_iter__57353(s__57354){
return (new cljs.core.LazySeq(null,(function (){
var s__57354__$1 = s__57354;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57354__$1);
if(temp__5735__auto____$3){
var s__57354__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57354__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__57354__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__57356 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__57355 = (0);
while(true){
if((i__57355 < size__4528__auto__)){
var map__57357 = cljs.core._nth(c__4527__auto__,i__57355);
var map__57357__$1 = (((((!((map__57357 == null))))?(((((map__57357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57357):map__57357);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57357__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57357__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57357__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57356,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57355,map__57357,map__57357__$1,title__$1,string,uid__$2,c__4527__auto__,size__4528__auto__,b__57356,s__57354__$2,temp__5735__auto____$3,map__57351,map__57351__$1,block__$1,uid__$1,parents,s__57338__$2,temp__5735__auto____$2,vec__57334,group_title,group,s__57304__$2,temp__5735__auto____$1,vec__57300,linked_or_unlinked,refs,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57355,map__57357,map__57357__$1,title__$1,string,uid__$2,c__4527__auto__,size__4528__auto__,b__57356,s__57354__$2,temp__5735__auto____$3,map__57351,map__57351__$1,block__$1,uid__$1,parents,s__57338__$2,temp__5735__auto____$2,vec__57334,group_title,group,s__57304__$2,temp__5735__auto____$1,vec__57300,linked_or_unlinked,refs,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57378 = (i__57355 + (1));
i__57355 = G__57378;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57356),athens$views$node_page$node_page_el_$_iter__57235_$_iter__57303_$_iter__57337_$_iter__57353(cljs.core.chunk_rest(s__57354__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57356),null);
}
} else {
var map__57359 = cljs.core.first(s__57354__$2);
var map__57359__$1 = (((((!((map__57359 == null))))?(((((map__57359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57359):map__57359);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57359__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57359__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57359__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__57359,map__57359__$1,title__$1,string,uid__$2,s__57354__$2,temp__5735__auto____$3,map__57351,map__57351__$1,block__$1,uid__$1,parents,s__57338__$2,temp__5735__auto____$2,vec__57334,group_title,group,s__57304__$2,temp__5735__auto____$1,vec__57300,linked_or_unlinked,refs,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__57359,map__57359__$1,title__$1,string,uid__$2,s__57354__$2,temp__5735__auto____$3,map__57351,map__57351__$1,block__$1,uid__$1,parents,s__57338__$2,temp__5735__auto____$2,vec__57334,group_title,group,s__57304__$2,temp__5735__auto____$1,vec__57300,linked_or_unlinked,refs,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57235_$_iter__57303_$_iter__57337_$_iter__57353(cljs.core.rest(s__57354__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__57351,map__57351__$1,block__$1,uid__$1,parents,s__57338__$2,temp__5735__auto____$2,vec__57334,group_title,group,s__57304__$2,temp__5735__auto____$1,vec__57300,linked_or_unlinked,refs,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__57235_$_iter__57303_$_iter__57337(cljs.core.rest(s__57338__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__57334,group_title,group,s__57304__$2,temp__5735__auto____$1,vec__57300,linked_or_unlinked,refs,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
;
return iter__4529__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__57235_$_iter__57303(cljs.core.rest(s__57304__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__57300,linked_or_unlinked,refs,s__57236__$2,temp__5735__auto__,map__57221,map__57221__$1,title,is_shortcut_QMARK_,children,uid,map__57222,map__57222__$1,show,x,y,state))
;
return iter__4529__auto__(refs);
})())], null)], null):null),athens$views$node_page$node_page_el_$_iter__57235(cljs.core.rest(s__57236__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(ref_groups);
})())], null);
});
});
/**
 * One diff between datascript and posh: we don't have pull in q for posh
 *   https://github.com/mpdairy/posh/issues/21
 */
athens.views.node_page.node_page_component = (function athens$views$node_page$node_page_component(ident){
var map__57361 = athens.db.get_node_document(ident);
var map__57361__$1 = (((((!((map__57361 == null))))?(((((map__57361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57361):map__57361);
var node = map__57361__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57361__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57361__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null)));
var timeline_page_QMARK_ = athens.views.node_page.is_timeline_page(uid);
if(clojure.string.blank_QMARK_(title)){
return null;
} else {
var ref_groups = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Linked References",athens.db.get_linked_references(athens.util.escape_str(title))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unlinked References",athens.db.get_unlinked_references(athens.util.escape_str(title))], null)], null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.node_page_el,node,editing_uid,ref_groups,timeline_page_QMARK_], null);
}
});

//# sourceMappingURL=athens.views.node_page.js.map
