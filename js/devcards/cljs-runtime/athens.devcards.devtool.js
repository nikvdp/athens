goog.provide('athens.devcards.devtool');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.devcards.db');
goog.require('athens.views.buttons');
goog.require('athens.views.devtool');
goog.require('datascript.db');
goog.require('devcards.core');
goog.require('me.tonsky.persistent_sorted_set');
goog.require('reagent.ratom');
goog.require('shadow.remote.runtime.cljs.browser');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.devtool","athens.devcards.devtool",-979853863),new cljs.core.Keyword(null,"Load-Real-DB","Load-Real-DB",504458170)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load-Real-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.devtool !== 'undefined') && (typeof athens.devcards.devtool.t_athens$devcards$devtool61353 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.devtool.t_athens$devcards$devtool61353 = (function (meta61354){
this.meta61354 = meta61354;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.devtool.t_athens$devcards$devtool61353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61355,meta61354__$1){
var self__ = this;
var _61355__$1 = this;
return (new athens.devcards.devtool.t_athens$devcards$devtool61353(meta61354__$1));
}));

(athens.devcards.devtool.t_athens$devcards$devtool61353.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61355){
var self__ = this;
var _61355__$1 = this;
return self__.meta61354;
}));

(athens.devcards.devtool.t_athens$devcards$devtool61353.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.devtool.t_athens$devcards$devtool61353.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48675__auto__,devcard_opts__48676__auto__){
var self__ = this;
var this__48675__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__48676__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__48694__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button,athens.db.dsdb], null);
if(cljs.core.fn_QMARK_(v__48694__auto__)){
return (function (data_atom__48695__auto__,owner__48696__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__48694__auto__,data_atom__48695__auto__,owner__48696__auto__], null));
});
} else {
return reagent.core.as_element(v__48694__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__48676__auto__))], 0))], 0));
}));

(athens.devcards.devtool.t_athens$devcards$devtool61353.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta61354","meta61354",-360907224,null)], null);
}));

(athens.devcards.devtool.t_athens$devcards$devtool61353.cljs$lang$type = true);

(athens.devcards.devtool.t_athens$devcards$devtool61353.cljs$lang$ctorStr = "athens.devcards.devtool/t_athens$devcards$devtool61353");

(athens.devcards.devtool.t_athens$devcards$devtool61353.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.devtool/t_athens$devcards$devtool61353");
}));

/**
 * Positional factory function for athens.devcards.devtool/t_athens$devcards$devtool61353.
 */
athens.devcards.devtool.__GT_t_athens$devcards$devtool61353 = (function athens$devcards$devtool$__GT_t_athens$devcards$devtool61353(meta61354){
return (new athens.devcards.devtool.t_athens$devcards$devtool61353(meta61354));
});

}

return (new athens.devcards.devtool.t_athens$devcards$devtool61353(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.devtool","athens.devcards.devtool",-979853863),new cljs.core.Keyword(null,"Create-Page","Create-Page",-1525048441)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Create-Page",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Press button and then search \"test\" ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.devtool !== 'undefined') && (typeof athens.devcards.devtool.t_athens$devcards$devtool61356 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.devtool.t_athens$devcards$devtool61356 = (function (meta61357){
this.meta61357 = meta61357;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.devtool.t_athens$devcards$devtool61356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61358,meta61357__$1){
var self__ = this;
var _61358__$1 = this;
return (new athens.devcards.devtool.t_athens$devcards$devtool61356(meta61357__$1));
}));

(athens.devcards.devtool.t_athens$devcards$devtool61356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61358){
var self__ = this;
var _61358__$1 = this;
return self__.meta61357;
}));

(athens.devcards.devtool.t_athens$devcards$devtool61356.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.devtool.t_athens$devcards$devtool61356.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48675__auto__,devcard_opts__48676__auto__){
var self__ = this;
var this__48675__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__48676__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__48694__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),athens.views.devtool.handler], null),"Create Test Pages and Blocks"], null);
if(cljs.core.fn_QMARK_(v__48694__auto__)){
return (function (data_atom__48695__auto__,owner__48696__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__48694__auto__,data_atom__48695__auto__,owner__48696__auto__], null));
});
} else {
return reagent.core.as_element(v__48694__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__48676__auto__))], 0))], 0));
}));

(athens.devcards.devtool.t_athens$devcards$devtool61356.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta61357","meta61357",-1054828368,null)], null);
}));

(athens.devcards.devtool.t_athens$devcards$devtool61356.cljs$lang$type = true);

(athens.devcards.devtool.t_athens$devcards$devtool61356.cljs$lang$ctorStr = "athens.devcards.devtool/t_athens$devcards$devtool61356");

(athens.devcards.devtool.t_athens$devcards$devtool61356.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.devtool/t_athens$devcards$devtool61356");
}));

/**
 * Positional factory function for athens.devcards.devtool/t_athens$devcards$devtool61356.
 */
athens.devcards.devtool.__GT_t_athens$devcards$devtool61356 = (function athens$devcards$devtool$__GT_t_athens$devcards$devtool61356(meta61357){
return (new athens.devcards.devtool.t_athens$devcards$devtool61356(meta61357));
});

}

return (new athens.devcards.devtool.t_athens$devcards$devtool61356(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.devtool","athens.devcards.devtool",-979853863),new cljs.core.Keyword(null,"Reset-to-all-pages","Reset-to-all-pages",-1077601314)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-to-all-pages",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.devtool !== 'undefined') && (typeof athens.devcards.devtool.t_athens$devcards$devtool61359 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.devtool.t_athens$devcards$devtool61359 = (function (meta61360){
this.meta61360 = meta61360;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.devtool.t_athens$devcards$devtool61359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61361,meta61360__$1){
var self__ = this;
var _61361__$1 = this;
return (new athens.devcards.devtool.t_athens$devcards$devtool61359(meta61360__$1));
}));

(athens.devcards.devtool.t_athens$devcards$devtool61359.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61361){
var self__ = this;
var _61361__$1 = this;
return self__.meta61360;
}));

(athens.devcards.devtool.t_athens$devcards$devtool61359.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.devtool.t_athens$devcards$devtool61359.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48675__auto__,devcard_opts__48676__auto__){
var self__ = this;
var this__48675__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__48676__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__48694__auto__ = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(athens.views.devtool.state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"eval-str","eval-str",752008756),new cljs.core.Keyword(null,"eval-str","eval-str",752008756).cljs$core$IFn$_invoke$arity$1(athens.views.devtool.initial_state));

return athens.views.devtool.eval_box_BANG_();
})], null),"Reset"], null);
});
if(cljs.core.fn_QMARK_(v__48694__auto__)){
return (function (data_atom__48695__auto__,owner__48696__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__48694__auto__,data_atom__48695__auto__,owner__48696__auto__], null));
});
} else {
return reagent.core.as_element(v__48694__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__48676__auto__))], 0))], 0));
}));

(athens.devcards.devtool.t_athens$devcards$devtool61359.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta61360","meta61360",1884588662,null)], null);
}));

(athens.devcards.devtool.t_athens$devcards$devtool61359.cljs$lang$type = true);

(athens.devcards.devtool.t_athens$devcards$devtool61359.cljs$lang$ctorStr = "athens.devcards.devtool/t_athens$devcards$devtool61359");

(athens.devcards.devtool.t_athens$devcards$devtool61359.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.devtool/t_athens$devcards$devtool61359");
}));

/**
 * Positional factory function for athens.devcards.devtool/t_athens$devcards$devtool61359.
 */
athens.devcards.devtool.__GT_t_athens$devcards$devtool61359 = (function athens$devcards$devtool$__GT_t_athens$devcards$devtool61359(meta61360){
return (new athens.devcards.devtool.t_athens$devcards$devtool61359(meta61360));
});

}

return (new athens.devcards.devtool.t_athens$devcards$devtool61359(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.devtool","athens.devcards.devtool",-979853863),new cljs.core.Keyword(null,"Devtool-box","Devtool-box",1953946451)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Devtool-box",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.devtool !== 'undefined') && (typeof athens.devcards.devtool.t_athens$devcards$devtool61362 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.devtool.t_athens$devcards$devtool61362 = (function (meta61363){
this.meta61363 = meta61363;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.devtool.t_athens$devcards$devtool61362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61364,meta61363__$1){
var self__ = this;
var _61364__$1 = this;
return (new athens.devcards.devtool.t_athens$devcards$devtool61362(meta61363__$1));
}));

(athens.devcards.devtool.t_athens$devcards$devtool61362.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61364){
var self__ = this;
var _61364__$1 = this;
return self__.meta61363;
}));

(athens.devcards.devtool.t_athens$devcards$devtool61362.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.devtool.t_athens$devcards$devtool61362.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48675__auto__,devcard_opts__48676__auto__){
var self__ = this;
var this__48675__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__48676__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__48694__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.devtool.devtool_prompt_el], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.devtool.devtool_component], null)], null);
if(cljs.core.fn_QMARK_(v__48694__auto__)){
return (function (data_atom__48695__auto__,owner__48696__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__48694__auto__,data_atom__48695__auto__,owner__48696__auto__], null));
});
} else {
return reagent.core.as_element(v__48694__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__48676__auto__))], 0))], 0));
}));

(athens.devcards.devtool.t_athens$devcards$devtool61362.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta61363","meta61363",-466391202,null)], null);
}));

(athens.devcards.devtool.t_athens$devcards$devtool61362.cljs$lang$type = true);

(athens.devcards.devtool.t_athens$devcards$devtool61362.cljs$lang$ctorStr = "athens.devcards.devtool/t_athens$devcards$devtool61362");

(athens.devcards.devtool.t_athens$devcards$devtool61362.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.devtool/t_athens$devcards$devtool61362");
}));

/**
 * Positional factory function for athens.devcards.devtool/t_athens$devcards$devtool61362.
 */
athens.devcards.devtool.__GT_t_athens$devcards$devtool61362 = (function athens$devcards$devtool$__GT_t_athens$devcards$devtool61362(meta61363){
return (new athens.devcards.devtool.t_athens$devcards$devtool61362(meta61363));
});

}

return (new athens.devcards.devtool.t_athens$devcards$devtool61362(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.devtool.js.map
