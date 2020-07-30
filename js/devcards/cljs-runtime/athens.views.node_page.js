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
var G__58579 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58579) : re_frame.core.dispatch.call(null,G__58579));
});
athens.views.node_page.db_handler = goog.functions.debounce(athens.views.node_page.handler,(500));
athens.views.node_page.is_timeline_page = (function athens$views$node_page$is_timeline_page(uid){
return cljs.core.boolean$((function (){try{var vec__58581 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58581,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58581,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58581,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e58580){if((e58580 instanceof Object)){
var _ = e58580;
return false;
} else {
throw e58580;

}
}})());
});
athens.views.node_page.handle_new_first_child_block_click = (function athens$views$node_page$handle_new_first_child_block_click(parent_uid){
var new_uid = athens.util.gen_block_uid();
var now = athens.util.now_ts();
var G__58584_58732 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),parent_uid,new cljs.core.Keyword("edit","time","edit/time",1384867476),now,new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("block","order","block/order",-1429282437),(0),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new_uid,new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","string","block/string",-2066596447),""], null)], null)], null)], null)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58584_58732) : re_frame.core.dispatch.call(null,G__58584_58732));

var G__58585 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),new_uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58585) : re_frame.core.dispatch.call(null,G__58585));
});
athens.views.node_page.placeholder_block_el = (function athens$views$node_page$placeholder_block_el(parent_uid){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block-container"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.blocks.bullet_style)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.views.node_page.handle_new_first_child_block_click(parent_uid);
})], null),"Click here to add content..."], null)], null)], null);
});
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(_,___$1,___$2,___$3){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("menu","show","menu/show",-580966400),false,new cljs.core.Keyword("menu","x","menu/x",2085660544),null,new cljs.core.Keyword("menu","y","menu/y",-1754654817),null], null));
return (function (block,editing_uid,ref_groups,timeline_page_QMARK_){
var map__58586 = block;
var map__58586__$1 = (((((!((map__58586 == null))))?(((((map__58586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58586):map__58586);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58586__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var is_shortcut_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58586__$1,new cljs.core.Keyword("page","sidebar","page/sidebar",32416927));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58586__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58586__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var map__58587 = cljs.core.deref(state);
var map__58587__$1 = (((((!((map__58587 == null))))?(((((map__58587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58587):map__58587);
var show = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58587__$1,new cljs.core.Keyword("menu","show","menu/show",-580966400));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58587__$1,new cljs.core.Keyword("menu","x","menu/x",2085660544));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58587__$1,new cljs.core.Keyword("menu","y","menu/y",-1754654817));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.page_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node-page"], null)], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58590 = e.target.value;
var G__58591 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58590,G__58591) : athens.views.node_page.db_handler.call(null,G__58590,G__58591));
})], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(show)?"active":null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
if(cljs.core.truth_(show)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("menu","show","menu/show",-580966400),false);
} else {
var rect = e.target.getBoundingClientRect();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("menu","show","menu/show",-580966400),true,new cljs.core.Keyword("menu","x","menu/x",2085660544),rect.left,new cljs.core.Keyword("menu","y","menu/y",-1754654817),rect.bottom], null));
}
}),new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.page_menu_toggle_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.ExpandMore], null)], null),(cljs.core.truth_(show)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.dropdown_style),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px"].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px"].join('')], null)], null)], 0)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.menu_style),(cljs.core.truth_(is_shortcut_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__58592 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","remove-shortcut","page/remove-shortcut",301722603),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58592) : re_frame.core.dispatch.call(null,G__58592));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.BookmarkBorder], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Remove Shortcut"], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__58593 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","add-shortcut","page/add-shortcut",467846378),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58593) : re_frame.core.dispatch.call(null,G__58593));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Bookmark], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Add Shortcut"], null)], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.menu_separator_style)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
athens.router.navigate(new cljs.core.Keyword(null,"pages","pages",-285406513));

var G__58594 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","delete","page/delete",-1774686917),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58594) : re_frame.core.dispatch.call(null,G__58594));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Delete], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Delete Page"], null)], null)], null)], null)], null):null),athens.parse_renderer.parse_and_render(title,uid)], null),((cljs.core.empty_QMARK_(children))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.placeholder_block_el,uid], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58595(s__58596){
return (new cljs.core.LazySeq(null,(function (){
var s__58596__$1 = s__58596;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58596__$1);
if(temp__5735__auto__){
var s__58596__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58596__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58596__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58598 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58597 = (0);
while(true){
if((i__58597 < size__4581__auto__)){
var map__58599 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58597);
var map__58599__$1 = (((((!((map__58599 == null))))?(((((map__58599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58599):map__58599);
var child = map__58599__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58599__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58598,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58733 = (i__58597 + (1));
i__58597 = G__58733;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58598),athens$views$node_page$node_page_el_$_iter__58595(cljs.core.chunk_rest(s__58596__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58598),null);
}
} else {
var map__58601 = cljs.core.first(s__58596__$2);
var map__58601__$1 = (((((!((map__58601 == null))))?(((((map__58601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58601):map__58601);
var child = map__58601__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58601__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__58595(cljs.core.rest(s__58596__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58603(s__58604){
return (new cljs.core.LazySeq(null,(function (){
var s__58604__$1 = s__58604;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58604__$1);
if(temp__5735__auto__){
var s__58604__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58604__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58604__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58606 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58605 = (0);
while(true){
if((i__58605 < size__4581__auto__)){
var vec__58607 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58605);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58607,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58607,(1),null);
cljs.core.chunk_append(b__58606,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58605,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58603_$_iter__58610(s__58611){
return (new cljs.core.LazySeq(null,((function (i__58605,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function (){
var s__58611__$1 = s__58611;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58611__$1);
if(temp__5735__auto____$1){
var s__58611__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58611__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58611__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58613 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58612 = (0);
while(true){
if((i__58612 < size__4581__auto____$1)){
var vec__58614 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58612);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58614,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58614,(1),null);
cljs.core.chunk_append(b__58613,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58612,i__58605,vec__58614,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58613,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__58612,i__58605,vec__58614,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58613,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58612,i__58605,vec__58614,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58613,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58603_$_iter__58610_$_iter__58617(s__58618){
return (new cljs.core.LazySeq(null,((function (i__58612,i__58605,vec__58614,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58613,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function (){
var s__58618__$1 = s__58618;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58618__$1);
if(temp__5735__auto____$2){
var s__58618__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58618__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58618__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58620 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58619 = (0);
while(true){
if((i__58619 < size__4581__auto____$2)){
var map__58621 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58619);
var map__58621__$1 = (((((!((map__58621 == null))))?(((((map__58621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58621):map__58621);
var block__$1 = map__58621__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58621__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58621__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58620,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58619,i__58612,i__58605,map__58621,map__58621__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58620,s__58618__$2,temp__5735__auto____$2,vec__58614,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58613,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58603_$_iter__58610_$_iter__58617_$_iter__58623(s__58624){
return (new cljs.core.LazySeq(null,((function (i__58619,i__58612,i__58605,map__58621,map__58621__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58620,s__58618__$2,temp__5735__auto____$2,vec__58614,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58613,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function (){
var s__58624__$1 = s__58624;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58624__$1);
if(temp__5735__auto____$3){
var s__58624__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58624__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58624__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58626 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58625 = (0);
while(true){
if((i__58625 < size__4581__auto____$3)){
var map__58627 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58625);
var map__58627__$1 = (((((!((map__58627 == null))))?(((((map__58627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58627):map__58627);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58627__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58627__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58627__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58626,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58625,i__58619,i__58612,i__58605,map__58627,map__58627__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58626,s__58624__$2,temp__5735__auto____$3,map__58621,map__58621__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58620,s__58618__$2,temp__5735__auto____$2,vec__58614,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58613,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58625,i__58619,i__58612,i__58605,map__58627,map__58627__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58626,s__58624__$2,temp__5735__auto____$3,map__58621,map__58621__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58620,s__58618__$2,temp__5735__auto____$2,vec__58614,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58613,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58734 = (i__58625 + (1));
i__58625 = G__58734;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58626),athens$views$node_page$node_page_el_$_iter__58603_$_iter__58610_$_iter__58617_$_iter__58623(cljs.core.chunk_rest(s__58624__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58626),null);
}
} else {
var map__58629 = cljs.core.first(s__58624__$2);
var map__58629__$1 = (((((!((map__58629 == null))))?(((((map__58629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58629):map__58629);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58629__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58629__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58629__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58619,i__58612,i__58605,map__58629,map__58629__$1,title__$1,string,uid__$2,s__58624__$2,temp__5735__auto____$3,map__58621,map__58621__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58620,s__58618__$2,temp__5735__auto____$2,vec__58614,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58613,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58619,i__58612,i__58605,map__58629,map__58629__$1,title__$1,string,uid__$2,s__58624__$2,temp__5735__auto____$3,map__58621,map__58621__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58620,s__58618__$2,temp__5735__auto____$2,vec__58614,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58613,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58603_$_iter__58610_$_iter__58617_$_iter__58623(cljs.core.rest(s__58624__$2)));
}
} else {
return null;
}
break;
}
});})(i__58619,i__58612,i__58605,map__58621,map__58621__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58620,s__58618__$2,temp__5735__auto____$2,vec__58614,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58613,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
,null,null));
});})(i__58619,i__58612,i__58605,map__58621,map__58621__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58620,s__58618__$2,temp__5735__auto____$2,vec__58614,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58613,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58735 = (i__58619 + (1));
i__58619 = G__58735;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58620),athens$views$node_page$node_page_el_$_iter__58603_$_iter__58610_$_iter__58617(cljs.core.chunk_rest(s__58618__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58620),null);
}
} else {
var map__58631 = cljs.core.first(s__58618__$2);
var map__58631__$1 = (((((!((map__58631 == null))))?(((((map__58631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58631):map__58631);
var block__$1 = map__58631__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58631__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58631__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58612,i__58605,map__58631,map__58631__$1,block__$1,uid__$1,parents,s__58618__$2,temp__5735__auto____$2,vec__58614,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58613,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58603_$_iter__58610_$_iter__58617_$_iter__58633(s__58634){
return (new cljs.core.LazySeq(null,((function (i__58612,i__58605,map__58631,map__58631__$1,block__$1,uid__$1,parents,s__58618__$2,temp__5735__auto____$2,vec__58614,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58613,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function (){
var s__58634__$1 = s__58634;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58634__$1);
if(temp__5735__auto____$3){
var s__58634__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58634__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58634__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58636 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58635 = (0);
while(true){
if((i__58635 < size__4581__auto____$2)){
var map__58637 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58635);
var map__58637__$1 = (((((!((map__58637 == null))))?(((((map__58637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58637):map__58637);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58637__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58637__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58637__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58636,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58635,i__58612,i__58605,map__58637,map__58637__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58636,s__58634__$2,temp__5735__auto____$3,map__58631,map__58631__$1,block__$1,uid__$1,parents,s__58618__$2,temp__5735__auto____$2,vec__58614,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58613,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58635,i__58612,i__58605,map__58637,map__58637__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58636,s__58634__$2,temp__5735__auto____$3,map__58631,map__58631__$1,block__$1,uid__$1,parents,s__58618__$2,temp__5735__auto____$2,vec__58614,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58613,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58736 = (i__58635 + (1));
i__58635 = G__58736;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58636),athens$views$node_page$node_page_el_$_iter__58603_$_iter__58610_$_iter__58617_$_iter__58633(cljs.core.chunk_rest(s__58634__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58636),null);
}
} else {
var map__58639 = cljs.core.first(s__58634__$2);
var map__58639__$1 = (((((!((map__58639 == null))))?(((((map__58639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58639):map__58639);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58639__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58639__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58639__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58612,i__58605,map__58639,map__58639__$1,title__$1,string,uid__$2,s__58634__$2,temp__5735__auto____$3,map__58631,map__58631__$1,block__$1,uid__$1,parents,s__58618__$2,temp__5735__auto____$2,vec__58614,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58613,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58612,i__58605,map__58639,map__58639__$1,title__$1,string,uid__$2,s__58634__$2,temp__5735__auto____$3,map__58631,map__58631__$1,block__$1,uid__$1,parents,s__58618__$2,temp__5735__auto____$2,vec__58614,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58613,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58603_$_iter__58610_$_iter__58617_$_iter__58633(cljs.core.rest(s__58634__$2)));
}
} else {
return null;
}
break;
}
});})(i__58612,i__58605,map__58631,map__58631__$1,block__$1,uid__$1,parents,s__58618__$2,temp__5735__auto____$2,vec__58614,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58613,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
,null,null));
});})(i__58612,i__58605,map__58631,map__58631__$1,block__$1,uid__$1,parents,s__58618__$2,temp__5735__auto____$2,vec__58614,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58613,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58603_$_iter__58610_$_iter__58617(cljs.core.rest(s__58618__$2)));
}
} else {
return null;
}
break;
}
});})(i__58612,i__58605,vec__58614,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58613,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
,null,null));
});})(i__58612,i__58605,vec__58614,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58613,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
;
return iter__4582__auto__(group);
})())], null));

var G__58737 = (i__58612 + (1));
i__58612 = G__58737;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58613),athens$views$node_page$node_page_el_$_iter__58603_$_iter__58610(cljs.core.chunk_rest(s__58611__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58613),null);
}
} else {
var vec__58641 = cljs.core.first(s__58611__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58641,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58641,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58605,vec__58641,group_title,group,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__58605,vec__58641,group_title,group,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58605,vec__58641,group_title,group,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58603_$_iter__58610_$_iter__58644(s__58645){
return (new cljs.core.LazySeq(null,((function (i__58605,vec__58641,group_title,group,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function (){
var s__58645__$1 = s__58645;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58645__$1);
if(temp__5735__auto____$2){
var s__58645__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58645__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58645__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58647 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58646 = (0);
while(true){
if((i__58646 < size__4581__auto____$1)){
var map__58648 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58646);
var map__58648__$1 = (((((!((map__58648 == null))))?(((((map__58648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58648):map__58648);
var block__$1 = map__58648__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58648__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58648__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58647,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58646,i__58605,map__58648,map__58648__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58647,s__58645__$2,temp__5735__auto____$2,vec__58641,group_title,group,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58603_$_iter__58610_$_iter__58644_$_iter__58650(s__58651){
return (new cljs.core.LazySeq(null,((function (i__58646,i__58605,map__58648,map__58648__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58647,s__58645__$2,temp__5735__auto____$2,vec__58641,group_title,group,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function (){
var s__58651__$1 = s__58651;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58651__$1);
if(temp__5735__auto____$3){
var s__58651__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58651__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58651__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58653 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58652 = (0);
while(true){
if((i__58652 < size__4581__auto____$2)){
var map__58654 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58652);
var map__58654__$1 = (((((!((map__58654 == null))))?(((((map__58654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58654):map__58654);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58654__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58654__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58654__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58653,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58652,i__58646,i__58605,map__58654,map__58654__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58653,s__58651__$2,temp__5735__auto____$3,map__58648,map__58648__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58647,s__58645__$2,temp__5735__auto____$2,vec__58641,group_title,group,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58652,i__58646,i__58605,map__58654,map__58654__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58653,s__58651__$2,temp__5735__auto____$3,map__58648,map__58648__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58647,s__58645__$2,temp__5735__auto____$2,vec__58641,group_title,group,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58738 = (i__58652 + (1));
i__58652 = G__58738;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58653),athens$views$node_page$node_page_el_$_iter__58603_$_iter__58610_$_iter__58644_$_iter__58650(cljs.core.chunk_rest(s__58651__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58653),null);
}
} else {
var map__58656 = cljs.core.first(s__58651__$2);
var map__58656__$1 = (((((!((map__58656 == null))))?(((((map__58656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58656):map__58656);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58656__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58656__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58656__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58646,i__58605,map__58656,map__58656__$1,title__$1,string,uid__$2,s__58651__$2,temp__5735__auto____$3,map__58648,map__58648__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58647,s__58645__$2,temp__5735__auto____$2,vec__58641,group_title,group,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58646,i__58605,map__58656,map__58656__$1,title__$1,string,uid__$2,s__58651__$2,temp__5735__auto____$3,map__58648,map__58648__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58647,s__58645__$2,temp__5735__auto____$2,vec__58641,group_title,group,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58603_$_iter__58610_$_iter__58644_$_iter__58650(cljs.core.rest(s__58651__$2)));
}
} else {
return null;
}
break;
}
});})(i__58646,i__58605,map__58648,map__58648__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58647,s__58645__$2,temp__5735__auto____$2,vec__58641,group_title,group,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
,null,null));
});})(i__58646,i__58605,map__58648,map__58648__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58647,s__58645__$2,temp__5735__auto____$2,vec__58641,group_title,group,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58739 = (i__58646 + (1));
i__58646 = G__58739;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58647),athens$views$node_page$node_page_el_$_iter__58603_$_iter__58610_$_iter__58644(cljs.core.chunk_rest(s__58645__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58647),null);
}
} else {
var map__58658 = cljs.core.first(s__58645__$2);
var map__58658__$1 = (((((!((map__58658 == null))))?(((((map__58658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58658):map__58658);
var block__$1 = map__58658__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58658__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58658__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58605,map__58658,map__58658__$1,block__$1,uid__$1,parents,s__58645__$2,temp__5735__auto____$2,vec__58641,group_title,group,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58603_$_iter__58610_$_iter__58644_$_iter__58660(s__58661){
return (new cljs.core.LazySeq(null,((function (i__58605,map__58658,map__58658__$1,block__$1,uid__$1,parents,s__58645__$2,temp__5735__auto____$2,vec__58641,group_title,group,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function (){
var s__58661__$1 = s__58661;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58661__$1);
if(temp__5735__auto____$3){
var s__58661__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58661__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58661__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58663 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58662 = (0);
while(true){
if((i__58662 < size__4581__auto____$1)){
var map__58664 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58662);
var map__58664__$1 = (((((!((map__58664 == null))))?(((((map__58664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58664):map__58664);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58664__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58664__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58664__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58663,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58662,i__58605,map__58664,map__58664__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58663,s__58661__$2,temp__5735__auto____$3,map__58658,map__58658__$1,block__$1,uid__$1,parents,s__58645__$2,temp__5735__auto____$2,vec__58641,group_title,group,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58662,i__58605,map__58664,map__58664__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58663,s__58661__$2,temp__5735__auto____$3,map__58658,map__58658__$1,block__$1,uid__$1,parents,s__58645__$2,temp__5735__auto____$2,vec__58641,group_title,group,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58740 = (i__58662 + (1));
i__58662 = G__58740;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58663),athens$views$node_page$node_page_el_$_iter__58603_$_iter__58610_$_iter__58644_$_iter__58660(cljs.core.chunk_rest(s__58661__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58663),null);
}
} else {
var map__58666 = cljs.core.first(s__58661__$2);
var map__58666__$1 = (((((!((map__58666 == null))))?(((((map__58666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58666):map__58666);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58666__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58666__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58666__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58605,map__58666,map__58666__$1,title__$1,string,uid__$2,s__58661__$2,temp__5735__auto____$3,map__58658,map__58658__$1,block__$1,uid__$1,parents,s__58645__$2,temp__5735__auto____$2,vec__58641,group_title,group,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58605,map__58666,map__58666__$1,title__$1,string,uid__$2,s__58661__$2,temp__5735__auto____$3,map__58658,map__58658__$1,block__$1,uid__$1,parents,s__58645__$2,temp__5735__auto____$2,vec__58641,group_title,group,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58603_$_iter__58610_$_iter__58644_$_iter__58660(cljs.core.rest(s__58661__$2)));
}
} else {
return null;
}
break;
}
});})(i__58605,map__58658,map__58658__$1,block__$1,uid__$1,parents,s__58645__$2,temp__5735__auto____$2,vec__58641,group_title,group,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
,null,null));
});})(i__58605,map__58658,map__58658__$1,block__$1,uid__$1,parents,s__58645__$2,temp__5735__auto____$2,vec__58641,group_title,group,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58603_$_iter__58610_$_iter__58644(cljs.core.rest(s__58645__$2)));
}
} else {
return null;
}
break;
}
});})(i__58605,vec__58641,group_title,group,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
,null,null));
});})(i__58605,vec__58641,group_title,group,s__58611__$2,temp__5735__auto____$1,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
;
return iter__4582__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__58603_$_iter__58610(cljs.core.rest(s__58611__$2)));
}
} else {
return null;
}
break;
}
});})(i__58605,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
,null,null));
});})(i__58605,vec__58607,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58606,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
;
return iter__4582__auto__(refs);
})())], null)], null):null));

var G__58741 = (i__58605 + (1));
i__58605 = G__58741;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58606),athens$views$node_page$node_page_el_$_iter__58603(cljs.core.chunk_rest(s__58604__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58606),null);
}
} else {
var vec__58668 = cljs.core.first(s__58604__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58668,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58668,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__58668,linked_or_unlinked,refs,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58603_$_iter__58671(s__58672){
return (new cljs.core.LazySeq(null,(function (){
var s__58672__$1 = s__58672;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58672__$1);
if(temp__5735__auto____$1){
var s__58672__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58672__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58672__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58674 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58673 = (0);
while(true){
if((i__58673 < size__4581__auto__)){
var vec__58675 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58673);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58675,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58675,(1),null);
cljs.core.chunk_append(b__58674,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58673,vec__58675,group_title,group,c__4580__auto__,size__4581__auto__,b__58674,s__58672__$2,temp__5735__auto____$1,vec__58668,linked_or_unlinked,refs,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__58673,vec__58675,group_title,group,c__4580__auto__,size__4581__auto__,b__58674,s__58672__$2,temp__5735__auto____$1,vec__58668,linked_or_unlinked,refs,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58673,vec__58675,group_title,group,c__4580__auto__,size__4581__auto__,b__58674,s__58672__$2,temp__5735__auto____$1,vec__58668,linked_or_unlinked,refs,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58603_$_iter__58671_$_iter__58678(s__58679){
return (new cljs.core.LazySeq(null,((function (i__58673,vec__58675,group_title,group,c__4580__auto__,size__4581__auto__,b__58674,s__58672__$2,temp__5735__auto____$1,vec__58668,linked_or_unlinked,refs,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function (){
var s__58679__$1 = s__58679;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58679__$1);
if(temp__5735__auto____$2){
var s__58679__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58679__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58679__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58681 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58680 = (0);
while(true){
if((i__58680 < size__4581__auto____$1)){
var map__58682 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58680);
var map__58682__$1 = (((((!((map__58682 == null))))?(((((map__58682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58682):map__58682);
var block__$1 = map__58682__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58682__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58682__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58681,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58680,i__58673,map__58682,map__58682__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58681,s__58679__$2,temp__5735__auto____$2,vec__58675,group_title,group,c__4580__auto__,size__4581__auto__,b__58674,s__58672__$2,temp__5735__auto____$1,vec__58668,linked_or_unlinked,refs,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58603_$_iter__58671_$_iter__58678_$_iter__58684(s__58685){
return (new cljs.core.LazySeq(null,((function (i__58680,i__58673,map__58682,map__58682__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58681,s__58679__$2,temp__5735__auto____$2,vec__58675,group_title,group,c__4580__auto__,size__4581__auto__,b__58674,s__58672__$2,temp__5735__auto____$1,vec__58668,linked_or_unlinked,refs,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function (){
var s__58685__$1 = s__58685;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58685__$1);
if(temp__5735__auto____$3){
var s__58685__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58685__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58685__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58687 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58686 = (0);
while(true){
if((i__58686 < size__4581__auto____$2)){
var map__58688 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58686);
var map__58688__$1 = (((((!((map__58688 == null))))?(((((map__58688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58688):map__58688);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58688__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58688__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58688__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58687,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58686,i__58680,i__58673,map__58688,map__58688__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58687,s__58685__$2,temp__5735__auto____$3,map__58682,map__58682__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58681,s__58679__$2,temp__5735__auto____$2,vec__58675,group_title,group,c__4580__auto__,size__4581__auto__,b__58674,s__58672__$2,temp__5735__auto____$1,vec__58668,linked_or_unlinked,refs,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58686,i__58680,i__58673,map__58688,map__58688__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58687,s__58685__$2,temp__5735__auto____$3,map__58682,map__58682__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58681,s__58679__$2,temp__5735__auto____$2,vec__58675,group_title,group,c__4580__auto__,size__4581__auto__,b__58674,s__58672__$2,temp__5735__auto____$1,vec__58668,linked_or_unlinked,refs,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58742 = (i__58686 + (1));
i__58686 = G__58742;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58687),athens$views$node_page$node_page_el_$_iter__58603_$_iter__58671_$_iter__58678_$_iter__58684(cljs.core.chunk_rest(s__58685__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58687),null);
}
} else {
var map__58690 = cljs.core.first(s__58685__$2);
var map__58690__$1 = (((((!((map__58690 == null))))?(((((map__58690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58690):map__58690);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58690__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58690__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58690__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58680,i__58673,map__58690,map__58690__$1,title__$1,string,uid__$2,s__58685__$2,temp__5735__auto____$3,map__58682,map__58682__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58681,s__58679__$2,temp__5735__auto____$2,vec__58675,group_title,group,c__4580__auto__,size__4581__auto__,b__58674,s__58672__$2,temp__5735__auto____$1,vec__58668,linked_or_unlinked,refs,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58680,i__58673,map__58690,map__58690__$1,title__$1,string,uid__$2,s__58685__$2,temp__5735__auto____$3,map__58682,map__58682__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58681,s__58679__$2,temp__5735__auto____$2,vec__58675,group_title,group,c__4580__auto__,size__4581__auto__,b__58674,s__58672__$2,temp__5735__auto____$1,vec__58668,linked_or_unlinked,refs,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58603_$_iter__58671_$_iter__58678_$_iter__58684(cljs.core.rest(s__58685__$2)));
}
} else {
return null;
}
break;
}
});})(i__58680,i__58673,map__58682,map__58682__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58681,s__58679__$2,temp__5735__auto____$2,vec__58675,group_title,group,c__4580__auto__,size__4581__auto__,b__58674,s__58672__$2,temp__5735__auto____$1,vec__58668,linked_or_unlinked,refs,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
,null,null));
});})(i__58680,i__58673,map__58682,map__58682__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58681,s__58679__$2,temp__5735__auto____$2,vec__58675,group_title,group,c__4580__auto__,size__4581__auto__,b__58674,s__58672__$2,temp__5735__auto____$1,vec__58668,linked_or_unlinked,refs,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58743 = (i__58680 + (1));
i__58680 = G__58743;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58681),athens$views$node_page$node_page_el_$_iter__58603_$_iter__58671_$_iter__58678(cljs.core.chunk_rest(s__58679__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58681),null);
}
} else {
var map__58692 = cljs.core.first(s__58679__$2);
var map__58692__$1 = (((((!((map__58692 == null))))?(((((map__58692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58692):map__58692);
var block__$1 = map__58692__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58692__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58692__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58673,map__58692,map__58692__$1,block__$1,uid__$1,parents,s__58679__$2,temp__5735__auto____$2,vec__58675,group_title,group,c__4580__auto__,size__4581__auto__,b__58674,s__58672__$2,temp__5735__auto____$1,vec__58668,linked_or_unlinked,refs,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58603_$_iter__58671_$_iter__58678_$_iter__58694(s__58695){
return (new cljs.core.LazySeq(null,((function (i__58673,map__58692,map__58692__$1,block__$1,uid__$1,parents,s__58679__$2,temp__5735__auto____$2,vec__58675,group_title,group,c__4580__auto__,size__4581__auto__,b__58674,s__58672__$2,temp__5735__auto____$1,vec__58668,linked_or_unlinked,refs,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function (){
var s__58695__$1 = s__58695;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58695__$1);
if(temp__5735__auto____$3){
var s__58695__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58695__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58695__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58697 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58696 = (0);
while(true){
if((i__58696 < size__4581__auto____$1)){
var map__58698 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58696);
var map__58698__$1 = (((((!((map__58698 == null))))?(((((map__58698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58698):map__58698);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58698__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58698__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58698__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58697,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58696,i__58673,map__58698,map__58698__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58697,s__58695__$2,temp__5735__auto____$3,map__58692,map__58692__$1,block__$1,uid__$1,parents,s__58679__$2,temp__5735__auto____$2,vec__58675,group_title,group,c__4580__auto__,size__4581__auto__,b__58674,s__58672__$2,temp__5735__auto____$1,vec__58668,linked_or_unlinked,refs,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58696,i__58673,map__58698,map__58698__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58697,s__58695__$2,temp__5735__auto____$3,map__58692,map__58692__$1,block__$1,uid__$1,parents,s__58679__$2,temp__5735__auto____$2,vec__58675,group_title,group,c__4580__auto__,size__4581__auto__,b__58674,s__58672__$2,temp__5735__auto____$1,vec__58668,linked_or_unlinked,refs,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58744 = (i__58696 + (1));
i__58696 = G__58744;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58697),athens$views$node_page$node_page_el_$_iter__58603_$_iter__58671_$_iter__58678_$_iter__58694(cljs.core.chunk_rest(s__58695__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58697),null);
}
} else {
var map__58700 = cljs.core.first(s__58695__$2);
var map__58700__$1 = (((((!((map__58700 == null))))?(((((map__58700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58700):map__58700);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58700__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58700__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58700__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58673,map__58700,map__58700__$1,title__$1,string,uid__$2,s__58695__$2,temp__5735__auto____$3,map__58692,map__58692__$1,block__$1,uid__$1,parents,s__58679__$2,temp__5735__auto____$2,vec__58675,group_title,group,c__4580__auto__,size__4581__auto__,b__58674,s__58672__$2,temp__5735__auto____$1,vec__58668,linked_or_unlinked,refs,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58673,map__58700,map__58700__$1,title__$1,string,uid__$2,s__58695__$2,temp__5735__auto____$3,map__58692,map__58692__$1,block__$1,uid__$1,parents,s__58679__$2,temp__5735__auto____$2,vec__58675,group_title,group,c__4580__auto__,size__4581__auto__,b__58674,s__58672__$2,temp__5735__auto____$1,vec__58668,linked_or_unlinked,refs,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58603_$_iter__58671_$_iter__58678_$_iter__58694(cljs.core.rest(s__58695__$2)));
}
} else {
return null;
}
break;
}
});})(i__58673,map__58692,map__58692__$1,block__$1,uid__$1,parents,s__58679__$2,temp__5735__auto____$2,vec__58675,group_title,group,c__4580__auto__,size__4581__auto__,b__58674,s__58672__$2,temp__5735__auto____$1,vec__58668,linked_or_unlinked,refs,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
,null,null));
});})(i__58673,map__58692,map__58692__$1,block__$1,uid__$1,parents,s__58679__$2,temp__5735__auto____$2,vec__58675,group_title,group,c__4580__auto__,size__4581__auto__,b__58674,s__58672__$2,temp__5735__auto____$1,vec__58668,linked_or_unlinked,refs,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58603_$_iter__58671_$_iter__58678(cljs.core.rest(s__58679__$2)));
}
} else {
return null;
}
break;
}
});})(i__58673,vec__58675,group_title,group,c__4580__auto__,size__4581__auto__,b__58674,s__58672__$2,temp__5735__auto____$1,vec__58668,linked_or_unlinked,refs,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
,null,null));
});})(i__58673,vec__58675,group_title,group,c__4580__auto__,size__4581__auto__,b__58674,s__58672__$2,temp__5735__auto____$1,vec__58668,linked_or_unlinked,refs,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
;
return iter__4582__auto__(group);
})())], null));

var G__58745 = (i__58673 + (1));
i__58673 = G__58745;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58674),athens$views$node_page$node_page_el_$_iter__58603_$_iter__58671(cljs.core.chunk_rest(s__58672__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58674),null);
}
} else {
var vec__58702 = cljs.core.first(s__58672__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58702,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58702,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58702,group_title,group,s__58672__$2,temp__5735__auto____$1,vec__58668,linked_or_unlinked,refs,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(vec__58702,group_title,group,s__58672__$2,temp__5735__auto____$1,vec__58668,linked_or_unlinked,refs,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__58702,group_title,group,s__58672__$2,temp__5735__auto____$1,vec__58668,linked_or_unlinked,refs,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58603_$_iter__58671_$_iter__58705(s__58706){
return (new cljs.core.LazySeq(null,(function (){
var s__58706__$1 = s__58706;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58706__$1);
if(temp__5735__auto____$2){
var s__58706__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58706__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58706__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58708 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58707 = (0);
while(true){
if((i__58707 < size__4581__auto__)){
var map__58709 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58707);
var map__58709__$1 = (((((!((map__58709 == null))))?(((((map__58709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58709):map__58709);
var block__$1 = map__58709__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58709__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58709__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58708,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58707,map__58709,map__58709__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58708,s__58706__$2,temp__5735__auto____$2,vec__58702,group_title,group,s__58672__$2,temp__5735__auto____$1,vec__58668,linked_or_unlinked,refs,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58603_$_iter__58671_$_iter__58705_$_iter__58711(s__58712){
return (new cljs.core.LazySeq(null,((function (i__58707,map__58709,map__58709__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58708,s__58706__$2,temp__5735__auto____$2,vec__58702,group_title,group,s__58672__$2,temp__5735__auto____$1,vec__58668,linked_or_unlinked,refs,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function (){
var s__58712__$1 = s__58712;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58712__$1);
if(temp__5735__auto____$3){
var s__58712__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58712__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58712__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58714 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58713 = (0);
while(true){
if((i__58713 < size__4581__auto____$1)){
var map__58715 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58713);
var map__58715__$1 = (((((!((map__58715 == null))))?(((((map__58715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58715):map__58715);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58715__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58715__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58715__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58714,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58713,i__58707,map__58715,map__58715__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58714,s__58712__$2,temp__5735__auto____$3,map__58709,map__58709__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58708,s__58706__$2,temp__5735__auto____$2,vec__58702,group_title,group,s__58672__$2,temp__5735__auto____$1,vec__58668,linked_or_unlinked,refs,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58713,i__58707,map__58715,map__58715__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58714,s__58712__$2,temp__5735__auto____$3,map__58709,map__58709__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58708,s__58706__$2,temp__5735__auto____$2,vec__58702,group_title,group,s__58672__$2,temp__5735__auto____$1,vec__58668,linked_or_unlinked,refs,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58746 = (i__58713 + (1));
i__58713 = G__58746;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58714),athens$views$node_page$node_page_el_$_iter__58603_$_iter__58671_$_iter__58705_$_iter__58711(cljs.core.chunk_rest(s__58712__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58714),null);
}
} else {
var map__58717 = cljs.core.first(s__58712__$2);
var map__58717__$1 = (((((!((map__58717 == null))))?(((((map__58717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58717):map__58717);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58717__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58717__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58717__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58707,map__58717,map__58717__$1,title__$1,string,uid__$2,s__58712__$2,temp__5735__auto____$3,map__58709,map__58709__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58708,s__58706__$2,temp__5735__auto____$2,vec__58702,group_title,group,s__58672__$2,temp__5735__auto____$1,vec__58668,linked_or_unlinked,refs,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58707,map__58717,map__58717__$1,title__$1,string,uid__$2,s__58712__$2,temp__5735__auto____$3,map__58709,map__58709__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58708,s__58706__$2,temp__5735__auto____$2,vec__58702,group_title,group,s__58672__$2,temp__5735__auto____$1,vec__58668,linked_or_unlinked,refs,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58603_$_iter__58671_$_iter__58705_$_iter__58711(cljs.core.rest(s__58712__$2)));
}
} else {
return null;
}
break;
}
});})(i__58707,map__58709,map__58709__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58708,s__58706__$2,temp__5735__auto____$2,vec__58702,group_title,group,s__58672__$2,temp__5735__auto____$1,vec__58668,linked_or_unlinked,refs,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
,null,null));
});})(i__58707,map__58709,map__58709__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58708,s__58706__$2,temp__5735__auto____$2,vec__58702,group_title,group,s__58672__$2,temp__5735__auto____$1,vec__58668,linked_or_unlinked,refs,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58747 = (i__58707 + (1));
i__58707 = G__58747;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58708),athens$views$node_page$node_page_el_$_iter__58603_$_iter__58671_$_iter__58705(cljs.core.chunk_rest(s__58706__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58708),null);
}
} else {
var map__58719 = cljs.core.first(s__58706__$2);
var map__58719__$1 = (((((!((map__58719 == null))))?(((((map__58719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58719):map__58719);
var block__$1 = map__58719__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58719__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58719__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (map__58719,map__58719__$1,block__$1,uid__$1,parents,s__58706__$2,temp__5735__auto____$2,vec__58702,group_title,group,s__58672__$2,temp__5735__auto____$1,vec__58668,linked_or_unlinked,refs,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58603_$_iter__58671_$_iter__58705_$_iter__58721(s__58722){
return (new cljs.core.LazySeq(null,(function (){
var s__58722__$1 = s__58722;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58722__$1);
if(temp__5735__auto____$3){
var s__58722__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58722__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58722__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58724 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58723 = (0);
while(true){
if((i__58723 < size__4581__auto__)){
var map__58725 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58723);
var map__58725__$1 = (((((!((map__58725 == null))))?(((((map__58725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58725):map__58725);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58725__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58725__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58725__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58724,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58723,map__58725,map__58725__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58724,s__58722__$2,temp__5735__auto____$3,map__58719,map__58719__$1,block__$1,uid__$1,parents,s__58706__$2,temp__5735__auto____$2,vec__58702,group_title,group,s__58672__$2,temp__5735__auto____$1,vec__58668,linked_or_unlinked,refs,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58723,map__58725,map__58725__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58724,s__58722__$2,temp__5735__auto____$3,map__58719,map__58719__$1,block__$1,uid__$1,parents,s__58706__$2,temp__5735__auto____$2,vec__58702,group_title,group,s__58672__$2,temp__5735__auto____$1,vec__58668,linked_or_unlinked,refs,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58748 = (i__58723 + (1));
i__58723 = G__58748;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58724),athens$views$node_page$node_page_el_$_iter__58603_$_iter__58671_$_iter__58705_$_iter__58721(cljs.core.chunk_rest(s__58722__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58724),null);
}
} else {
var map__58727 = cljs.core.first(s__58722__$2);
var map__58727__$1 = (((((!((map__58727 == null))))?(((((map__58727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58727):map__58727);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58727__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58727__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58727__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__58727,map__58727__$1,title__$1,string,uid__$2,s__58722__$2,temp__5735__auto____$3,map__58719,map__58719__$1,block__$1,uid__$1,parents,s__58706__$2,temp__5735__auto____$2,vec__58702,group_title,group,s__58672__$2,temp__5735__auto____$1,vec__58668,linked_or_unlinked,refs,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__58727,map__58727__$1,title__$1,string,uid__$2,s__58722__$2,temp__5735__auto____$3,map__58719,map__58719__$1,block__$1,uid__$1,parents,s__58706__$2,temp__5735__auto____$2,vec__58702,group_title,group,s__58672__$2,temp__5735__auto____$1,vec__58668,linked_or_unlinked,refs,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58603_$_iter__58671_$_iter__58705_$_iter__58721(cljs.core.rest(s__58722__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58719,map__58719__$1,block__$1,uid__$1,parents,s__58706__$2,temp__5735__auto____$2,vec__58702,group_title,group,s__58672__$2,temp__5735__auto____$1,vec__58668,linked_or_unlinked,refs,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58603_$_iter__58671_$_iter__58705(cljs.core.rest(s__58706__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58702,group_title,group,s__58672__$2,temp__5735__auto____$1,vec__58668,linked_or_unlinked,refs,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
;
return iter__4582__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__58603_$_iter__58671(cljs.core.rest(s__58672__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58668,linked_or_unlinked,refs,s__58604__$2,temp__5735__auto__,map__58586,map__58586__$1,title,is_shortcut_QMARK_,children,uid,map__58587,map__58587__$1,show,x,y,state))
;
return iter__4582__auto__(refs);
})())], null)], null):null),athens$views$node_page$node_page_el_$_iter__58603(cljs.core.rest(s__58604__$2)));
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
var map__58729 = athens.db.get_node_document(ident);
var map__58729__$1 = (((((!((map__58729 == null))))?(((((map__58729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58729):map__58729);
var node = map__58729__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58729__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58729__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__58731 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58731) : re_frame.core.subscribe.call(null,G__58731));
})());
var timeline_page_QMARK_ = athens.views.node_page.is_timeline_page(uid);
if(clojure.string.blank_QMARK_(title)){
return null;
} else {
var ref_groups = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Linked References",athens.db.get_linked_references(athens.util.escape_str(title))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unlinked References",athens.db.get_unlinked_references(athens.util.escape_str(title))], null)], null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.node_page_el,node,editing_uid,ref_groups,timeline_page_QMARK_], null);
}
});

//# sourceMappingURL=athens.views.node_page.js.map
