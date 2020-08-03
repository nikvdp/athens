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
return cljs.core.boolean$((function (){try{var vec__58451 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58451,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58451,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58451,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e58450){if((e58450 instanceof Object)){
var _ = e58450;
return false;
} else {
throw e58450;

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
var map__58454 = block;
var map__58454__$1 = (((((!((map__58454 == null))))?(((((map__58454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58454):map__58454);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58454__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var is_shortcut_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58454__$1,new cljs.core.Keyword("page","sidebar","page/sidebar",32416927));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58454__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58454__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var map__58455 = cljs.core.deref(state);
var map__58455__$1 = (((((!((map__58455 == null))))?(((((map__58455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58455):map__58455);
var show = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58455__$1,new cljs.core.Keyword("menu","show","menu/show",-580966400));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58455__$1,new cljs.core.Keyword("menu","x","menu/x",2085660544));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58455__$1,new cljs.core.Keyword("menu","y","menu/y",-1754654817));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.page_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node-page"], null)], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58458 = e.target.value;
var G__58459 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58458,G__58459) : athens.views.node_page.db_handler.call(null,G__58458,G__58459));
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
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Delete], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Delete Page"], null)], null)], null)], null)], null):null),athens.parse_renderer.parse_and_render(title,uid)], null),((cljs.core.empty_QMARK_(children))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.placeholder_block_el,uid], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58460(s__58461){
return (new cljs.core.LazySeq(null,(function (){
var s__58461__$1 = s__58461;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58461__$1);
if(temp__5735__auto__){
var s__58461__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58461__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58461__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58463 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58462 = (0);
while(true){
if((i__58462 < size__4581__auto__)){
var map__58464 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58462);
var map__58464__$1 = (((((!((map__58464 == null))))?(((((map__58464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58464):map__58464);
var child = map__58464__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58464__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58463,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58596 = (i__58462 + (1));
i__58462 = G__58596;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58463),athens$views$node_page$node_page_el_$_iter__58460(cljs.core.chunk_rest(s__58461__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58463),null);
}
} else {
var map__58466 = cljs.core.first(s__58461__$2);
var map__58466__$1 = (((((!((map__58466 == null))))?(((((map__58466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58466):map__58466);
var child = map__58466__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58466__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__58460(cljs.core.rest(s__58461__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58468(s__58469){
return (new cljs.core.LazySeq(null,(function (){
var s__58469__$1 = s__58469;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58469__$1);
if(temp__5735__auto__){
var s__58469__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58469__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58469__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58471 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58470 = (0);
while(true){
if((i__58470 < size__4581__auto__)){
var vec__58472 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58470);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58472,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58472,(1),null);
cljs.core.chunk_append(b__58471,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58470,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58468_$_iter__58475(s__58476){
return (new cljs.core.LazySeq(null,((function (i__58470,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function (){
var s__58476__$1 = s__58476;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58476__$1);
if(temp__5735__auto____$1){
var s__58476__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58476__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58476__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58478 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58477 = (0);
while(true){
if((i__58477 < size__4581__auto____$1)){
var vec__58479 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58477);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58479,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58479,(1),null);
cljs.core.chunk_append(b__58478,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58477,i__58470,vec__58479,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58478,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__58477,i__58470,vec__58479,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58478,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58477,i__58470,vec__58479,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58478,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58468_$_iter__58475_$_iter__58482(s__58483){
return (new cljs.core.LazySeq(null,((function (i__58477,i__58470,vec__58479,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58478,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function (){
var s__58483__$1 = s__58483;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58483__$1);
if(temp__5735__auto____$2){
var s__58483__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58483__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58483__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58485 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58484 = (0);
while(true){
if((i__58484 < size__4581__auto____$2)){
var map__58486 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58484);
var map__58486__$1 = (((((!((map__58486 == null))))?(((((map__58486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58486):map__58486);
var block__$1 = map__58486__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58486__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58486__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58485,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58484,i__58477,i__58470,map__58486,map__58486__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58485,s__58483__$2,temp__5735__auto____$2,vec__58479,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58478,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58468_$_iter__58475_$_iter__58482_$_iter__58488(s__58489){
return (new cljs.core.LazySeq(null,((function (i__58484,i__58477,i__58470,map__58486,map__58486__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58485,s__58483__$2,temp__5735__auto____$2,vec__58479,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58478,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function (){
var s__58489__$1 = s__58489;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58489__$1);
if(temp__5735__auto____$3){
var s__58489__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58489__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58489__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58491 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58490 = (0);
while(true){
if((i__58490 < size__4581__auto____$3)){
var map__58492 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58490);
var map__58492__$1 = (((((!((map__58492 == null))))?(((((map__58492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58492):map__58492);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58492__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58492__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58492__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58491,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58490,i__58484,i__58477,i__58470,map__58492,map__58492__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58491,s__58489__$2,temp__5735__auto____$3,map__58486,map__58486__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58485,s__58483__$2,temp__5735__auto____$2,vec__58479,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58478,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58490,i__58484,i__58477,i__58470,map__58492,map__58492__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58491,s__58489__$2,temp__5735__auto____$3,map__58486,map__58486__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58485,s__58483__$2,temp__5735__auto____$2,vec__58479,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58478,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58597 = (i__58490 + (1));
i__58490 = G__58597;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58491),athens$views$node_page$node_page_el_$_iter__58468_$_iter__58475_$_iter__58482_$_iter__58488(cljs.core.chunk_rest(s__58489__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58491),null);
}
} else {
var map__58494 = cljs.core.first(s__58489__$2);
var map__58494__$1 = (((((!((map__58494 == null))))?(((((map__58494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58494):map__58494);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58494__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58494__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58494__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58484,i__58477,i__58470,map__58494,map__58494__$1,title__$1,string,uid__$2,s__58489__$2,temp__5735__auto____$3,map__58486,map__58486__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58485,s__58483__$2,temp__5735__auto____$2,vec__58479,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58478,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58484,i__58477,i__58470,map__58494,map__58494__$1,title__$1,string,uid__$2,s__58489__$2,temp__5735__auto____$3,map__58486,map__58486__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58485,s__58483__$2,temp__5735__auto____$2,vec__58479,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58478,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58468_$_iter__58475_$_iter__58482_$_iter__58488(cljs.core.rest(s__58489__$2)));
}
} else {
return null;
}
break;
}
});})(i__58484,i__58477,i__58470,map__58486,map__58486__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58485,s__58483__$2,temp__5735__auto____$2,vec__58479,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58478,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
,null,null));
});})(i__58484,i__58477,i__58470,map__58486,map__58486__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58485,s__58483__$2,temp__5735__auto____$2,vec__58479,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58478,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58598 = (i__58484 + (1));
i__58484 = G__58598;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58485),athens$views$node_page$node_page_el_$_iter__58468_$_iter__58475_$_iter__58482(cljs.core.chunk_rest(s__58483__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58485),null);
}
} else {
var map__58496 = cljs.core.first(s__58483__$2);
var map__58496__$1 = (((((!((map__58496 == null))))?(((((map__58496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58496):map__58496);
var block__$1 = map__58496__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58496__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58496__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58477,i__58470,map__58496,map__58496__$1,block__$1,uid__$1,parents,s__58483__$2,temp__5735__auto____$2,vec__58479,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58478,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58468_$_iter__58475_$_iter__58482_$_iter__58498(s__58499){
return (new cljs.core.LazySeq(null,((function (i__58477,i__58470,map__58496,map__58496__$1,block__$1,uid__$1,parents,s__58483__$2,temp__5735__auto____$2,vec__58479,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58478,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function (){
var s__58499__$1 = s__58499;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58499__$1);
if(temp__5735__auto____$3){
var s__58499__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58499__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58499__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58501 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58500 = (0);
while(true){
if((i__58500 < size__4581__auto____$2)){
var map__58502 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58500);
var map__58502__$1 = (((((!((map__58502 == null))))?(((((map__58502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58502):map__58502);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58502__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58502__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58502__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58501,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58500,i__58477,i__58470,map__58502,map__58502__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58501,s__58499__$2,temp__5735__auto____$3,map__58496,map__58496__$1,block__$1,uid__$1,parents,s__58483__$2,temp__5735__auto____$2,vec__58479,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58478,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58500,i__58477,i__58470,map__58502,map__58502__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58501,s__58499__$2,temp__5735__auto____$3,map__58496,map__58496__$1,block__$1,uid__$1,parents,s__58483__$2,temp__5735__auto____$2,vec__58479,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58478,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58599 = (i__58500 + (1));
i__58500 = G__58599;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58501),athens$views$node_page$node_page_el_$_iter__58468_$_iter__58475_$_iter__58482_$_iter__58498(cljs.core.chunk_rest(s__58499__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58501),null);
}
} else {
var map__58504 = cljs.core.first(s__58499__$2);
var map__58504__$1 = (((((!((map__58504 == null))))?(((((map__58504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58504):map__58504);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58504__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58504__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58504__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58477,i__58470,map__58504,map__58504__$1,title__$1,string,uid__$2,s__58499__$2,temp__5735__auto____$3,map__58496,map__58496__$1,block__$1,uid__$1,parents,s__58483__$2,temp__5735__auto____$2,vec__58479,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58478,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58477,i__58470,map__58504,map__58504__$1,title__$1,string,uid__$2,s__58499__$2,temp__5735__auto____$3,map__58496,map__58496__$1,block__$1,uid__$1,parents,s__58483__$2,temp__5735__auto____$2,vec__58479,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58478,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58468_$_iter__58475_$_iter__58482_$_iter__58498(cljs.core.rest(s__58499__$2)));
}
} else {
return null;
}
break;
}
});})(i__58477,i__58470,map__58496,map__58496__$1,block__$1,uid__$1,parents,s__58483__$2,temp__5735__auto____$2,vec__58479,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58478,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
,null,null));
});})(i__58477,i__58470,map__58496,map__58496__$1,block__$1,uid__$1,parents,s__58483__$2,temp__5735__auto____$2,vec__58479,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58478,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58468_$_iter__58475_$_iter__58482(cljs.core.rest(s__58483__$2)));
}
} else {
return null;
}
break;
}
});})(i__58477,i__58470,vec__58479,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58478,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
,null,null));
});})(i__58477,i__58470,vec__58479,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58478,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
;
return iter__4582__auto__(group);
})())], null));

var G__58600 = (i__58477 + (1));
i__58477 = G__58600;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58478),athens$views$node_page$node_page_el_$_iter__58468_$_iter__58475(cljs.core.chunk_rest(s__58476__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58478),null);
}
} else {
var vec__58506 = cljs.core.first(s__58476__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58506,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58506,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58470,vec__58506,group_title,group,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__58470,vec__58506,group_title,group,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58470,vec__58506,group_title,group,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58468_$_iter__58475_$_iter__58509(s__58510){
return (new cljs.core.LazySeq(null,((function (i__58470,vec__58506,group_title,group,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function (){
var s__58510__$1 = s__58510;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58510__$1);
if(temp__5735__auto____$2){
var s__58510__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58510__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58510__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58512 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58511 = (0);
while(true){
if((i__58511 < size__4581__auto____$1)){
var map__58513 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58511);
var map__58513__$1 = (((((!((map__58513 == null))))?(((((map__58513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58513):map__58513);
var block__$1 = map__58513__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58513__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58513__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58512,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58511,i__58470,map__58513,map__58513__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58512,s__58510__$2,temp__5735__auto____$2,vec__58506,group_title,group,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58468_$_iter__58475_$_iter__58509_$_iter__58515(s__58516){
return (new cljs.core.LazySeq(null,((function (i__58511,i__58470,map__58513,map__58513__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58512,s__58510__$2,temp__5735__auto____$2,vec__58506,group_title,group,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function (){
var s__58516__$1 = s__58516;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58516__$1);
if(temp__5735__auto____$3){
var s__58516__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58516__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58516__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58518 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58517 = (0);
while(true){
if((i__58517 < size__4581__auto____$2)){
var map__58519 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58517);
var map__58519__$1 = (((((!((map__58519 == null))))?(((((map__58519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58519):map__58519);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58519__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58519__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58519__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58518,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58517,i__58511,i__58470,map__58519,map__58519__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58518,s__58516__$2,temp__5735__auto____$3,map__58513,map__58513__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58512,s__58510__$2,temp__5735__auto____$2,vec__58506,group_title,group,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58517,i__58511,i__58470,map__58519,map__58519__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58518,s__58516__$2,temp__5735__auto____$3,map__58513,map__58513__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58512,s__58510__$2,temp__5735__auto____$2,vec__58506,group_title,group,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58601 = (i__58517 + (1));
i__58517 = G__58601;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58518),athens$views$node_page$node_page_el_$_iter__58468_$_iter__58475_$_iter__58509_$_iter__58515(cljs.core.chunk_rest(s__58516__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58518),null);
}
} else {
var map__58521 = cljs.core.first(s__58516__$2);
var map__58521__$1 = (((((!((map__58521 == null))))?(((((map__58521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58521):map__58521);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58521__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58521__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58521__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58511,i__58470,map__58521,map__58521__$1,title__$1,string,uid__$2,s__58516__$2,temp__5735__auto____$3,map__58513,map__58513__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58512,s__58510__$2,temp__5735__auto____$2,vec__58506,group_title,group,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58511,i__58470,map__58521,map__58521__$1,title__$1,string,uid__$2,s__58516__$2,temp__5735__auto____$3,map__58513,map__58513__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58512,s__58510__$2,temp__5735__auto____$2,vec__58506,group_title,group,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58468_$_iter__58475_$_iter__58509_$_iter__58515(cljs.core.rest(s__58516__$2)));
}
} else {
return null;
}
break;
}
});})(i__58511,i__58470,map__58513,map__58513__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58512,s__58510__$2,temp__5735__auto____$2,vec__58506,group_title,group,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
,null,null));
});})(i__58511,i__58470,map__58513,map__58513__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58512,s__58510__$2,temp__5735__auto____$2,vec__58506,group_title,group,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58602 = (i__58511 + (1));
i__58511 = G__58602;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58512),athens$views$node_page$node_page_el_$_iter__58468_$_iter__58475_$_iter__58509(cljs.core.chunk_rest(s__58510__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58512),null);
}
} else {
var map__58523 = cljs.core.first(s__58510__$2);
var map__58523__$1 = (((((!((map__58523 == null))))?(((((map__58523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58523):map__58523);
var block__$1 = map__58523__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58523__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58523__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58470,map__58523,map__58523__$1,block__$1,uid__$1,parents,s__58510__$2,temp__5735__auto____$2,vec__58506,group_title,group,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58468_$_iter__58475_$_iter__58509_$_iter__58525(s__58526){
return (new cljs.core.LazySeq(null,((function (i__58470,map__58523,map__58523__$1,block__$1,uid__$1,parents,s__58510__$2,temp__5735__auto____$2,vec__58506,group_title,group,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function (){
var s__58526__$1 = s__58526;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58526__$1);
if(temp__5735__auto____$3){
var s__58526__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58526__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58526__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58528 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58527 = (0);
while(true){
if((i__58527 < size__4581__auto____$1)){
var map__58529 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58527);
var map__58529__$1 = (((((!((map__58529 == null))))?(((((map__58529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58529):map__58529);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58529__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58529__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58529__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58528,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58527,i__58470,map__58529,map__58529__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58528,s__58526__$2,temp__5735__auto____$3,map__58523,map__58523__$1,block__$1,uid__$1,parents,s__58510__$2,temp__5735__auto____$2,vec__58506,group_title,group,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58527,i__58470,map__58529,map__58529__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58528,s__58526__$2,temp__5735__auto____$3,map__58523,map__58523__$1,block__$1,uid__$1,parents,s__58510__$2,temp__5735__auto____$2,vec__58506,group_title,group,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58603 = (i__58527 + (1));
i__58527 = G__58603;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58528),athens$views$node_page$node_page_el_$_iter__58468_$_iter__58475_$_iter__58509_$_iter__58525(cljs.core.chunk_rest(s__58526__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58528),null);
}
} else {
var map__58531 = cljs.core.first(s__58526__$2);
var map__58531__$1 = (((((!((map__58531 == null))))?(((((map__58531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58531):map__58531);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58531__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58531__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58531__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58470,map__58531,map__58531__$1,title__$1,string,uid__$2,s__58526__$2,temp__5735__auto____$3,map__58523,map__58523__$1,block__$1,uid__$1,parents,s__58510__$2,temp__5735__auto____$2,vec__58506,group_title,group,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58470,map__58531,map__58531__$1,title__$1,string,uid__$2,s__58526__$2,temp__5735__auto____$3,map__58523,map__58523__$1,block__$1,uid__$1,parents,s__58510__$2,temp__5735__auto____$2,vec__58506,group_title,group,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58468_$_iter__58475_$_iter__58509_$_iter__58525(cljs.core.rest(s__58526__$2)));
}
} else {
return null;
}
break;
}
});})(i__58470,map__58523,map__58523__$1,block__$1,uid__$1,parents,s__58510__$2,temp__5735__auto____$2,vec__58506,group_title,group,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
,null,null));
});})(i__58470,map__58523,map__58523__$1,block__$1,uid__$1,parents,s__58510__$2,temp__5735__auto____$2,vec__58506,group_title,group,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58468_$_iter__58475_$_iter__58509(cljs.core.rest(s__58510__$2)));
}
} else {
return null;
}
break;
}
});})(i__58470,vec__58506,group_title,group,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
,null,null));
});})(i__58470,vec__58506,group_title,group,s__58476__$2,temp__5735__auto____$1,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
;
return iter__4582__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__58468_$_iter__58475(cljs.core.rest(s__58476__$2)));
}
} else {
return null;
}
break;
}
});})(i__58470,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
,null,null));
});})(i__58470,vec__58472,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58471,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
;
return iter__4582__auto__(refs);
})())], null)], null):null));

var G__58604 = (i__58470 + (1));
i__58470 = G__58604;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58471),athens$views$node_page$node_page_el_$_iter__58468(cljs.core.chunk_rest(s__58469__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58471),null);
}
} else {
var vec__58533 = cljs.core.first(s__58469__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58533,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58533,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__58533,linked_or_unlinked,refs,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58468_$_iter__58536(s__58537){
return (new cljs.core.LazySeq(null,(function (){
var s__58537__$1 = s__58537;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58537__$1);
if(temp__5735__auto____$1){
var s__58537__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58537__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58537__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58539 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58538 = (0);
while(true){
if((i__58538 < size__4581__auto__)){
var vec__58540 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58538);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58540,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58540,(1),null);
cljs.core.chunk_append(b__58539,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58538,vec__58540,group_title,group,c__4580__auto__,size__4581__auto__,b__58539,s__58537__$2,temp__5735__auto____$1,vec__58533,linked_or_unlinked,refs,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__58538,vec__58540,group_title,group,c__4580__auto__,size__4581__auto__,b__58539,s__58537__$2,temp__5735__auto____$1,vec__58533,linked_or_unlinked,refs,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58538,vec__58540,group_title,group,c__4580__auto__,size__4581__auto__,b__58539,s__58537__$2,temp__5735__auto____$1,vec__58533,linked_or_unlinked,refs,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58468_$_iter__58536_$_iter__58543(s__58544){
return (new cljs.core.LazySeq(null,((function (i__58538,vec__58540,group_title,group,c__4580__auto__,size__4581__auto__,b__58539,s__58537__$2,temp__5735__auto____$1,vec__58533,linked_or_unlinked,refs,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function (){
var s__58544__$1 = s__58544;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58544__$1);
if(temp__5735__auto____$2){
var s__58544__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58544__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58544__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58546 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58545 = (0);
while(true){
if((i__58545 < size__4581__auto____$1)){
var map__58547 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58545);
var map__58547__$1 = (((((!((map__58547 == null))))?(((((map__58547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58547):map__58547);
var block__$1 = map__58547__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58547__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58547__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58546,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58545,i__58538,map__58547,map__58547__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58546,s__58544__$2,temp__5735__auto____$2,vec__58540,group_title,group,c__4580__auto__,size__4581__auto__,b__58539,s__58537__$2,temp__5735__auto____$1,vec__58533,linked_or_unlinked,refs,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58468_$_iter__58536_$_iter__58543_$_iter__58549(s__58550){
return (new cljs.core.LazySeq(null,((function (i__58545,i__58538,map__58547,map__58547__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58546,s__58544__$2,temp__5735__auto____$2,vec__58540,group_title,group,c__4580__auto__,size__4581__auto__,b__58539,s__58537__$2,temp__5735__auto____$1,vec__58533,linked_or_unlinked,refs,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function (){
var s__58550__$1 = s__58550;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58550__$1);
if(temp__5735__auto____$3){
var s__58550__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58550__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58550__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58552 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58551 = (0);
while(true){
if((i__58551 < size__4581__auto____$2)){
var map__58553 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58551);
var map__58553__$1 = (((((!((map__58553 == null))))?(((((map__58553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58553):map__58553);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58553__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58553__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58553__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58552,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58551,i__58545,i__58538,map__58553,map__58553__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58552,s__58550__$2,temp__5735__auto____$3,map__58547,map__58547__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58546,s__58544__$2,temp__5735__auto____$2,vec__58540,group_title,group,c__4580__auto__,size__4581__auto__,b__58539,s__58537__$2,temp__5735__auto____$1,vec__58533,linked_or_unlinked,refs,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58551,i__58545,i__58538,map__58553,map__58553__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58552,s__58550__$2,temp__5735__auto____$3,map__58547,map__58547__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58546,s__58544__$2,temp__5735__auto____$2,vec__58540,group_title,group,c__4580__auto__,size__4581__auto__,b__58539,s__58537__$2,temp__5735__auto____$1,vec__58533,linked_or_unlinked,refs,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58605 = (i__58551 + (1));
i__58551 = G__58605;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58552),athens$views$node_page$node_page_el_$_iter__58468_$_iter__58536_$_iter__58543_$_iter__58549(cljs.core.chunk_rest(s__58550__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58552),null);
}
} else {
var map__58555 = cljs.core.first(s__58550__$2);
var map__58555__$1 = (((((!((map__58555 == null))))?(((((map__58555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58555):map__58555);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58555__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58555__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58555__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58545,i__58538,map__58555,map__58555__$1,title__$1,string,uid__$2,s__58550__$2,temp__5735__auto____$3,map__58547,map__58547__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58546,s__58544__$2,temp__5735__auto____$2,vec__58540,group_title,group,c__4580__auto__,size__4581__auto__,b__58539,s__58537__$2,temp__5735__auto____$1,vec__58533,linked_or_unlinked,refs,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58545,i__58538,map__58555,map__58555__$1,title__$1,string,uid__$2,s__58550__$2,temp__5735__auto____$3,map__58547,map__58547__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58546,s__58544__$2,temp__5735__auto____$2,vec__58540,group_title,group,c__4580__auto__,size__4581__auto__,b__58539,s__58537__$2,temp__5735__auto____$1,vec__58533,linked_or_unlinked,refs,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58468_$_iter__58536_$_iter__58543_$_iter__58549(cljs.core.rest(s__58550__$2)));
}
} else {
return null;
}
break;
}
});})(i__58545,i__58538,map__58547,map__58547__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58546,s__58544__$2,temp__5735__auto____$2,vec__58540,group_title,group,c__4580__auto__,size__4581__auto__,b__58539,s__58537__$2,temp__5735__auto____$1,vec__58533,linked_or_unlinked,refs,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
,null,null));
});})(i__58545,i__58538,map__58547,map__58547__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58546,s__58544__$2,temp__5735__auto____$2,vec__58540,group_title,group,c__4580__auto__,size__4581__auto__,b__58539,s__58537__$2,temp__5735__auto____$1,vec__58533,linked_or_unlinked,refs,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58606 = (i__58545 + (1));
i__58545 = G__58606;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58546),athens$views$node_page$node_page_el_$_iter__58468_$_iter__58536_$_iter__58543(cljs.core.chunk_rest(s__58544__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58546),null);
}
} else {
var map__58557 = cljs.core.first(s__58544__$2);
var map__58557__$1 = (((((!((map__58557 == null))))?(((((map__58557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58557):map__58557);
var block__$1 = map__58557__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58557__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58557__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58538,map__58557,map__58557__$1,block__$1,uid__$1,parents,s__58544__$2,temp__5735__auto____$2,vec__58540,group_title,group,c__4580__auto__,size__4581__auto__,b__58539,s__58537__$2,temp__5735__auto____$1,vec__58533,linked_or_unlinked,refs,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58468_$_iter__58536_$_iter__58543_$_iter__58559(s__58560){
return (new cljs.core.LazySeq(null,((function (i__58538,map__58557,map__58557__$1,block__$1,uid__$1,parents,s__58544__$2,temp__5735__auto____$2,vec__58540,group_title,group,c__4580__auto__,size__4581__auto__,b__58539,s__58537__$2,temp__5735__auto____$1,vec__58533,linked_or_unlinked,refs,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function (){
var s__58560__$1 = s__58560;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58560__$1);
if(temp__5735__auto____$3){
var s__58560__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58560__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58560__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58562 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58561 = (0);
while(true){
if((i__58561 < size__4581__auto____$1)){
var map__58563 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58561);
var map__58563__$1 = (((((!((map__58563 == null))))?(((((map__58563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58563):map__58563);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58563__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58563__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58563__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58562,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58561,i__58538,map__58563,map__58563__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58562,s__58560__$2,temp__5735__auto____$3,map__58557,map__58557__$1,block__$1,uid__$1,parents,s__58544__$2,temp__5735__auto____$2,vec__58540,group_title,group,c__4580__auto__,size__4581__auto__,b__58539,s__58537__$2,temp__5735__auto____$1,vec__58533,linked_or_unlinked,refs,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58561,i__58538,map__58563,map__58563__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58562,s__58560__$2,temp__5735__auto____$3,map__58557,map__58557__$1,block__$1,uid__$1,parents,s__58544__$2,temp__5735__auto____$2,vec__58540,group_title,group,c__4580__auto__,size__4581__auto__,b__58539,s__58537__$2,temp__5735__auto____$1,vec__58533,linked_or_unlinked,refs,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58607 = (i__58561 + (1));
i__58561 = G__58607;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58562),athens$views$node_page$node_page_el_$_iter__58468_$_iter__58536_$_iter__58543_$_iter__58559(cljs.core.chunk_rest(s__58560__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58562),null);
}
} else {
var map__58565 = cljs.core.first(s__58560__$2);
var map__58565__$1 = (((((!((map__58565 == null))))?(((((map__58565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58565):map__58565);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58565__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58565__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58565__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58538,map__58565,map__58565__$1,title__$1,string,uid__$2,s__58560__$2,temp__5735__auto____$3,map__58557,map__58557__$1,block__$1,uid__$1,parents,s__58544__$2,temp__5735__auto____$2,vec__58540,group_title,group,c__4580__auto__,size__4581__auto__,b__58539,s__58537__$2,temp__5735__auto____$1,vec__58533,linked_or_unlinked,refs,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58538,map__58565,map__58565__$1,title__$1,string,uid__$2,s__58560__$2,temp__5735__auto____$3,map__58557,map__58557__$1,block__$1,uid__$1,parents,s__58544__$2,temp__5735__auto____$2,vec__58540,group_title,group,c__4580__auto__,size__4581__auto__,b__58539,s__58537__$2,temp__5735__auto____$1,vec__58533,linked_or_unlinked,refs,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58468_$_iter__58536_$_iter__58543_$_iter__58559(cljs.core.rest(s__58560__$2)));
}
} else {
return null;
}
break;
}
});})(i__58538,map__58557,map__58557__$1,block__$1,uid__$1,parents,s__58544__$2,temp__5735__auto____$2,vec__58540,group_title,group,c__4580__auto__,size__4581__auto__,b__58539,s__58537__$2,temp__5735__auto____$1,vec__58533,linked_or_unlinked,refs,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
,null,null));
});})(i__58538,map__58557,map__58557__$1,block__$1,uid__$1,parents,s__58544__$2,temp__5735__auto____$2,vec__58540,group_title,group,c__4580__auto__,size__4581__auto__,b__58539,s__58537__$2,temp__5735__auto____$1,vec__58533,linked_or_unlinked,refs,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58468_$_iter__58536_$_iter__58543(cljs.core.rest(s__58544__$2)));
}
} else {
return null;
}
break;
}
});})(i__58538,vec__58540,group_title,group,c__4580__auto__,size__4581__auto__,b__58539,s__58537__$2,temp__5735__auto____$1,vec__58533,linked_or_unlinked,refs,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
,null,null));
});})(i__58538,vec__58540,group_title,group,c__4580__auto__,size__4581__auto__,b__58539,s__58537__$2,temp__5735__auto____$1,vec__58533,linked_or_unlinked,refs,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
;
return iter__4582__auto__(group);
})())], null));

var G__58608 = (i__58538 + (1));
i__58538 = G__58608;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58539),athens$views$node_page$node_page_el_$_iter__58468_$_iter__58536(cljs.core.chunk_rest(s__58537__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58539),null);
}
} else {
var vec__58567 = cljs.core.first(s__58537__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58567,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58567,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58567,group_title,group,s__58537__$2,temp__5735__auto____$1,vec__58533,linked_or_unlinked,refs,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(vec__58567,group_title,group,s__58537__$2,temp__5735__auto____$1,vec__58533,linked_or_unlinked,refs,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__58567,group_title,group,s__58537__$2,temp__5735__auto____$1,vec__58533,linked_or_unlinked,refs,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58468_$_iter__58536_$_iter__58570(s__58571){
return (new cljs.core.LazySeq(null,(function (){
var s__58571__$1 = s__58571;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58571__$1);
if(temp__5735__auto____$2){
var s__58571__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58571__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58571__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58573 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58572 = (0);
while(true){
if((i__58572 < size__4581__auto__)){
var map__58574 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58572);
var map__58574__$1 = (((((!((map__58574 == null))))?(((((map__58574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58574):map__58574);
var block__$1 = map__58574__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58574__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58574__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58573,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58572,map__58574,map__58574__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58573,s__58571__$2,temp__5735__auto____$2,vec__58567,group_title,group,s__58537__$2,temp__5735__auto____$1,vec__58533,linked_or_unlinked,refs,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58468_$_iter__58536_$_iter__58570_$_iter__58576(s__58577){
return (new cljs.core.LazySeq(null,((function (i__58572,map__58574,map__58574__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58573,s__58571__$2,temp__5735__auto____$2,vec__58567,group_title,group,s__58537__$2,temp__5735__auto____$1,vec__58533,linked_or_unlinked,refs,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function (){
var s__58577__$1 = s__58577;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58577__$1);
if(temp__5735__auto____$3){
var s__58577__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58577__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58577__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58579 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58578 = (0);
while(true){
if((i__58578 < size__4581__auto____$1)){
var map__58580 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58578);
var map__58580__$1 = (((((!((map__58580 == null))))?(((((map__58580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58580):map__58580);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58580__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58580__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58580__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58579,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58578,i__58572,map__58580,map__58580__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58579,s__58577__$2,temp__5735__auto____$3,map__58574,map__58574__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58573,s__58571__$2,temp__5735__auto____$2,vec__58567,group_title,group,s__58537__$2,temp__5735__auto____$1,vec__58533,linked_or_unlinked,refs,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58578,i__58572,map__58580,map__58580__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58579,s__58577__$2,temp__5735__auto____$3,map__58574,map__58574__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58573,s__58571__$2,temp__5735__auto____$2,vec__58567,group_title,group,s__58537__$2,temp__5735__auto____$1,vec__58533,linked_or_unlinked,refs,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58609 = (i__58578 + (1));
i__58578 = G__58609;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58579),athens$views$node_page$node_page_el_$_iter__58468_$_iter__58536_$_iter__58570_$_iter__58576(cljs.core.chunk_rest(s__58577__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58579),null);
}
} else {
var map__58582 = cljs.core.first(s__58577__$2);
var map__58582__$1 = (((((!((map__58582 == null))))?(((((map__58582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58582):map__58582);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58582__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58582__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58582__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58572,map__58582,map__58582__$1,title__$1,string,uid__$2,s__58577__$2,temp__5735__auto____$3,map__58574,map__58574__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58573,s__58571__$2,temp__5735__auto____$2,vec__58567,group_title,group,s__58537__$2,temp__5735__auto____$1,vec__58533,linked_or_unlinked,refs,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58572,map__58582,map__58582__$1,title__$1,string,uid__$2,s__58577__$2,temp__5735__auto____$3,map__58574,map__58574__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58573,s__58571__$2,temp__5735__auto____$2,vec__58567,group_title,group,s__58537__$2,temp__5735__auto____$1,vec__58533,linked_or_unlinked,refs,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58468_$_iter__58536_$_iter__58570_$_iter__58576(cljs.core.rest(s__58577__$2)));
}
} else {
return null;
}
break;
}
});})(i__58572,map__58574,map__58574__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58573,s__58571__$2,temp__5735__auto____$2,vec__58567,group_title,group,s__58537__$2,temp__5735__auto____$1,vec__58533,linked_or_unlinked,refs,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
,null,null));
});})(i__58572,map__58574,map__58574__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58573,s__58571__$2,temp__5735__auto____$2,vec__58567,group_title,group,s__58537__$2,temp__5735__auto____$1,vec__58533,linked_or_unlinked,refs,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58610 = (i__58572 + (1));
i__58572 = G__58610;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58573),athens$views$node_page$node_page_el_$_iter__58468_$_iter__58536_$_iter__58570(cljs.core.chunk_rest(s__58571__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58573),null);
}
} else {
var map__58584 = cljs.core.first(s__58571__$2);
var map__58584__$1 = (((((!((map__58584 == null))))?(((((map__58584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58584):map__58584);
var block__$1 = map__58584__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58584__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58584__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (map__58584,map__58584__$1,block__$1,uid__$1,parents,s__58571__$2,temp__5735__auto____$2,vec__58567,group_title,group,s__58537__$2,temp__5735__auto____$1,vec__58533,linked_or_unlinked,refs,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58468_$_iter__58536_$_iter__58570_$_iter__58586(s__58587){
return (new cljs.core.LazySeq(null,(function (){
var s__58587__$1 = s__58587;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58587__$1);
if(temp__5735__auto____$3){
var s__58587__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58587__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58587__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58589 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58588 = (0);
while(true){
if((i__58588 < size__4581__auto__)){
var map__58590 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58588);
var map__58590__$1 = (((((!((map__58590 == null))))?(((((map__58590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58590):map__58590);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58590__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58590__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58590__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58589,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58588,map__58590,map__58590__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58589,s__58587__$2,temp__5735__auto____$3,map__58584,map__58584__$1,block__$1,uid__$1,parents,s__58571__$2,temp__5735__auto____$2,vec__58567,group_title,group,s__58537__$2,temp__5735__auto____$1,vec__58533,linked_or_unlinked,refs,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58588,map__58590,map__58590__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58589,s__58587__$2,temp__5735__auto____$3,map__58584,map__58584__$1,block__$1,uid__$1,parents,s__58571__$2,temp__5735__auto____$2,vec__58567,group_title,group,s__58537__$2,temp__5735__auto____$1,vec__58533,linked_or_unlinked,refs,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58611 = (i__58588 + (1));
i__58588 = G__58611;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58589),athens$views$node_page$node_page_el_$_iter__58468_$_iter__58536_$_iter__58570_$_iter__58586(cljs.core.chunk_rest(s__58587__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58589),null);
}
} else {
var map__58592 = cljs.core.first(s__58587__$2);
var map__58592__$1 = (((((!((map__58592 == null))))?(((((map__58592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58592):map__58592);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58592__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58592__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58592__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__58592,map__58592__$1,title__$1,string,uid__$2,s__58587__$2,temp__5735__auto____$3,map__58584,map__58584__$1,block__$1,uid__$1,parents,s__58571__$2,temp__5735__auto____$2,vec__58567,group_title,group,s__58537__$2,temp__5735__auto____$1,vec__58533,linked_or_unlinked,refs,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__58592,map__58592__$1,title__$1,string,uid__$2,s__58587__$2,temp__5735__auto____$3,map__58584,map__58584__$1,block__$1,uid__$1,parents,s__58571__$2,temp__5735__auto____$2,vec__58567,group_title,group,s__58537__$2,temp__5735__auto____$1,vec__58533,linked_or_unlinked,refs,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58468_$_iter__58536_$_iter__58570_$_iter__58586(cljs.core.rest(s__58587__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58584,map__58584__$1,block__$1,uid__$1,parents,s__58571__$2,temp__5735__auto____$2,vec__58567,group_title,group,s__58537__$2,temp__5735__auto____$1,vec__58533,linked_or_unlinked,refs,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58468_$_iter__58536_$_iter__58570(cljs.core.rest(s__58571__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58567,group_title,group,s__58537__$2,temp__5735__auto____$1,vec__58533,linked_or_unlinked,refs,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
;
return iter__4582__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__58468_$_iter__58536(cljs.core.rest(s__58537__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58533,linked_or_unlinked,refs,s__58469__$2,temp__5735__auto__,map__58454,map__58454__$1,title,is_shortcut_QMARK_,children,uid,map__58455,map__58455__$1,show,x,y,state))
;
return iter__4582__auto__(refs);
})())], null)], null):null),athens$views$node_page$node_page_el_$_iter__58468(cljs.core.rest(s__58469__$2)));
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
});
/**
 * One diff between datascript and posh: we don't have pull in q for posh
 *   https://github.com/mpdairy/posh/issues/21
 */
athens.views.node_page.node_page_component = (function athens$views$node_page$node_page_component(ident){
var map__58594 = athens.db.get_node_document(ident);
var map__58594__$1 = (((((!((map__58594 == null))))?(((((map__58594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58594):map__58594);
var node = map__58594__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58594__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58594__$1,new cljs.core.Keyword("node","title","node/title",628940777));
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
