goog.provide('athens.views');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.devcards.all_pages');
goog.require('athens.devcards.athena');
goog.require('athens.devcards.block_page');
goog.require('athens.devcards.daily_notes');
goog.require('athens.devcards.devtool');
goog.require('athens.devcards.left_sidebar');
goog.require('athens.devcards.node_page');
goog.require('athens.devcards.right_sidebar');
goog.require('athens.devcards.spinner');
goog.require('athens.subs');
goog.require('posh.reagent');
goog.require('re_frame.core');
goog.require('stylefy.core');
athens.views.app_wrapper_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"grid-template-areas","grid-template-areas",-1162938120),"'left-sidebar main-content secondary-content'\n   'devtool devtool devtool'",new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"auto 1fr auto",new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),"1fr auto",new cljs.core.Keyword(null,"height","height",1025178622),"100vh"], null);
athens.views.main_content_style = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%",new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),"main-content",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"stretch",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"stretch",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto"], null);
/**
 * When `:errors` subscription is updated, global alert will be called with its contents and then cleared.
 */
athens.views.alert = (function athens$views$alert(){
var errors = (function (){var G__68554 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__68554) : re_frame.core.subscribe.call(null,G__68554));
})();
if(cljs.core.seq(cljs.core.deref(errors))){
alert(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(errors)));

var G__68555 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-errors","clear-errors",-937972213)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__68555) : re_frame.core.dispatch.call(null,G__68555));
} else {
return null;
}
});
athens.views.file_cb = (function athens$views$file_cb(e){
var fr = (new FileReader());
var file = e.target.files.item((0));
(fr.onload = (function (p1__68556_SHARP_){
var G__68557 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577),p1__68556_SHARP_.target.result], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__68557) : re_frame.core.dispatch.call(null,G__68557));
}));

return fr.readAsText(file);
});
athens.views.about_panel = (function athens$views$about_panel(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"About Panel"], null)], null);
});
athens.views.pages_panel = (function athens$views$pages_panel(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.all_pages.table,athens.db.dsdb], null);
});
});
athens.views.page_panel = (function athens$views$page_panel(){
var current_route = (function (){var G__68558 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-route","current-route",2067529448)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__68558) : re_frame.core.subscribe.call(null,G__68558));
})();
var uid = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(current_route)));
var node_or_block = cljs.core.deref((function (){var G__68559 = athens.db.dsdb;
var G__68560 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__68561 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null);
return (posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(G__68559,G__68560,G__68561) : posh.reagent.pull.call(null,G__68559,G__68560,G__68561));
})());
if(cljs.core.truth_(new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(node_or_block))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.node_page.node_page_component,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(node_or_block)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.block_page.block_page_component,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(node_or_block)], null);
}
});
athens.views.match_panel = (function athens$views$match_panel(route_name){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__68562 = route_name;
var G__68562__$1 = (((G__68562 instanceof cljs.core.Keyword))?G__68562.fqn:null);
switch (G__68562__$1) {
case "about":
return athens.views.about_panel;

break;
case "home":
return athens.devcards.daily_notes.daily_notes_panel;

break;
case "pages":
return athens.views.pages_panel;

break;
case "page":
return athens.views.page_panel;

break;
default:
return athens.devcards.daily_notes.daily_notes_panel;

}
})()], null);
});
athens.views.main_panel = (function athens$views$main_panel(){
var current_route = (function (){var G__68563 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-route","current-route",2067529448)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__68563) : re_frame.core.subscribe.call(null,G__68563));
})();
var loading = (function (){var G__68564 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__68564) : re_frame.core.subscribe.call(null,G__68564));
})();
return (function (){
var route_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(current_route)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.alert], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.athena.athena_component], null),(cljs.core.truth_(cljs.core.deref(loading))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.spinner.initial_spinner_component], null):new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.app_wrapper_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.left_sidebar.left_sidebar], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.main_content_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-scroll","on-scroll",1590848677),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route_name,new cljs.core.Keyword(null,"home","home",-74557309)))?athens.devcards.daily_notes.db_scroll_daily_notes:null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.match_panel,route_name], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.right_sidebar.right_sidebar_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.devtool.devtool_component], null)], null))], null);
});
});

//# sourceMappingURL=athens.views.js.map
