goog.provide('athens.devcards.breadcrumbs');
goog.require('cljs.core');
goog.require('athens.views.breadcrumbs');
goog.require('devcards.core');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.breadcrumbs","athens.devcards.breadcrumbs",1567780774),new cljs.core.Keyword(null,"Normal-Breadcrumb","Normal-Breadcrumb",1775524535)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Normal-Breadcrumb",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.breadcrumbs !== 'undefined') && (typeof athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58426 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58426 = (function (meta58427){
this.meta58427 = meta58427;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58428,meta58427__$1){
var self__ = this;
var _58428__$1 = this;
return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58426(meta58427__$1));
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58426.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58428){
var self__ = this;
var _58428__$1 = this;
return self__.meta58427;
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58426.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58426.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48675__auto__,devcard_opts__48676__auto__){
var self__ = this;
var this__48675__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__48676__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__48694__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(0)], null),"Athens"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),"Components"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(2)], null),"Breadcrumbs"], null)], null);
if(cljs.core.fn_QMARK_(v__48694__auto__)){
return (function (data_atom__48695__auto__,owner__48696__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__48694__auto__,data_atom__48695__auto__,owner__48696__auto__], null));
});
} else {
return reagent.core.as_element(v__48694__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__48676__auto__))], 0))], 0));
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58426.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58427","meta58427",1194764730,null)], null);
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58426.cljs$lang$type = true);

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58426.cljs$lang$ctorStr = "athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs58426");

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58426.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs58426");
}));

/**
 * Positional factory function for athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs58426.
 */
athens.devcards.breadcrumbs.__GT_t_athens$devcards$breadcrumbs58426 = (function athens$devcards$breadcrumbs$__GT_t_athens$devcards$breadcrumbs58426(meta58427){
return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58426(meta58427));
});

}

return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58426(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.breadcrumbs","athens.devcards.breadcrumbs",1567780774),new cljs.core.Keyword(null,"One-Item","One-Item",566296987)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"One-Item",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.breadcrumbs !== 'undefined') && (typeof athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58429 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58429 = (function (meta58430){
this.meta58430 = meta58430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58431,meta58430__$1){
var self__ = this;
var _58431__$1 = this;
return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58429(meta58430__$1));
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58431){
var self__ = this;
var _58431__$1 = this;
return self__.meta58430;
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58429.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58429.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48675__auto__,devcard_opts__48676__auto__){
var self__ = this;
var this__48675__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__48676__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__48694__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(2)], null),"Athens"], null)], null);
if(cljs.core.fn_QMARK_(v__48694__auto__)){
return (function (data_atom__48695__auto__,owner__48696__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__48694__auto__,data_atom__48695__auto__,owner__48696__auto__], null));
});
} else {
return reagent.core.as_element(v__48694__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__48676__auto__))], 0))], 0));
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58429.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58430","meta58430",-107538500,null)], null);
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58429.cljs$lang$type = true);

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58429.cljs$lang$ctorStr = "athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs58429");

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58429.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs58429");
}));

/**
 * Positional factory function for athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs58429.
 */
athens.devcards.breadcrumbs.__GT_t_athens$devcards$breadcrumbs58429 = (function athens$devcards$breadcrumbs$__GT_t_athens$devcards$breadcrumbs58429(meta58430){
return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58429(meta58430));
});

}

return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58429(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.breadcrumbs","athens.devcards.breadcrumbs",1567780774),new cljs.core.Keyword(null,"Breadcrumb-with-many-items","Breadcrumb-with-many-items",456733386)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Breadcrumb-with-many-items",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.breadcrumbs !== 'undefined') && (typeof athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58435 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58435 = (function (meta58436){
this.meta58436 = meta58436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58437,meta58436__$1){
var self__ = this;
var _58437__$1 = this;
return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58435(meta58436__$1));
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58437){
var self__ = this;
var _58437__$1 = this;
return self__.meta58436;
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58435.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58435.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48675__auto__,devcard_opts__48676__auto__){
var self__ = this;
var this__48675__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__48676__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__48694__auto__ = cljs.core.PersistentVector.fromArray([athens.views.breadcrumbs.breadcrumbs_list,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"a"], null),"Lorem"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"b"], null),"Ipsum"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"c"], null),"Laudantium"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"d"], null),"Accusamus"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"e"], null),"Reprehenderit"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"f"], null),"Aliquam"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"g"], null),"Corrupti"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"h"], null),"Omnis"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"i"], null),"Quis"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"a"], null),"Lorem"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"b"], null),"Ipsum"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"c"], null),"Laudantium"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"d"], null),"Accusamus"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"e"], null),"Reprehenderit"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"f"], null),"Aliquam"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"g"], null),"Corrupti"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"h"], null),"Omnis"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"i"], null),"Quis"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"a"], null),"Lorem"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"b"], null),"Ipsum"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"c"], null),"Laudantium"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"d"], null),"Accusamus"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"e"], null),"Reprehenderit"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"f"], null),"Aliquam"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"g"], null),"Corrupti"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"h"], null),"Omnis"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"i"], null),"Quis"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"a"], null),"Lorem"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"b"], null),"Ipsum"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"c"], null),"Laudantium"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"d"], null),"Accusamus"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"e"], null),"Reprehenderit"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"f"], null),"Aliquam"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"g"], null),"Corrupti"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"h"], null),"Omnis"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"i"], null),"Quis"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"j"], null),"Necessitatibus"], null)], true);
if(cljs.core.fn_QMARK_(v__48694__auto__)){
return (function (data_atom__48695__auto__,owner__48696__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__48694__auto__,data_atom__48695__auto__,owner__48696__auto__], null));
});
} else {
return reagent.core.as_element(v__48694__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__48676__auto__))], 0))], 0));
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58435.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58436","meta58436",875683034,null)], null);
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58435.cljs$lang$type = true);

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58435.cljs$lang$ctorStr = "athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs58435");

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58435.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs58435");
}));

/**
 * Positional factory function for athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs58435.
 */
athens.devcards.breadcrumbs.__GT_t_athens$devcards$breadcrumbs58435 = (function athens$devcards$breadcrumbs$__GT_t_athens$devcards$breadcrumbs58435(meta58436){
return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58435(meta58436));
});

}

return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58435(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.breadcrumbs","athens.devcards.breadcrumbs",1567780774),new cljs.core.Keyword(null,"Breadcrumb-with-long-items","Breadcrumb-with-long-items",84935351)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Breadcrumb-with-long-items",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.breadcrumbs !== 'undefined') && (typeof athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58441 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58441 = (function (meta58442){
this.meta58442 = meta58442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58443,meta58442__$1){
var self__ = this;
var _58443__$1 = this;
return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58441(meta58442__$1));
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58441.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58443){
var self__ = this;
var _58443__$1 = this;
return self__.meta58442;
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58441.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58441.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48675__auto__,devcard_opts__48676__auto__){
var self__ = this;
var this__48675__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__48676__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__48694__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(0)], null),"Exercitationem qui dicta officia aut alias eum asperiores voluptates exercitationem"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),"Sapiente ad quia sunt libero"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(2)], null),"Accusantium veritatis placeat quaerat unde odio officia"], null)], null);
if(cljs.core.fn_QMARK_(v__48694__auto__)){
return (function (data_atom__48695__auto__,owner__48696__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__48694__auto__,data_atom__48695__auto__,owner__48696__auto__], null));
});
} else {
return reagent.core.as_element(v__48694__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__48676__auto__))], 0))], 0));
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58441.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58442","meta58442",-471093588,null)], null);
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58441.cljs$lang$type = true);

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58441.cljs$lang$ctorStr = "athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs58441");

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58441.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs58441");
}));

/**
 * Positional factory function for athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs58441.
 */
athens.devcards.breadcrumbs.__GT_t_athens$devcards$breadcrumbs58441 = (function athens$devcards$breadcrumbs$__GT_t_athens$devcards$breadcrumbs58441(meta58442){
return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58441(meta58442));
});

}

return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58441(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.breadcrumbs","athens.devcards.breadcrumbs",1567780774),new cljs.core.Keyword(null,"Breadcrumb-with-one-long-item-at-start","Breadcrumb-with-one-long-item-at-start",-1820972041)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Breadcrumb-with-one-long-item-at-start",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.breadcrumbs !== 'undefined') && (typeof athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58444 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58444 = (function (meta58445){
this.meta58445 = meta58445;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58446,meta58445__$1){
var self__ = this;
var _58446__$1 = this;
return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58444(meta58445__$1));
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58444.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58446){
var self__ = this;
var _58446__$1 = this;
return self__.meta58445;
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58444.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58444.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48675__auto__,devcard_opts__48676__auto__){
var self__ = this;
var this__48675__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__48676__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__48694__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(0)], null),"Voluptates exercitationem dicta officia aut alias eum asperiores voluptates exercitationem"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(2)], null),"Libero"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3)], null),"Unde"], null)], null);
if(cljs.core.fn_QMARK_(v__48694__auto__)){
return (function (data_atom__48695__auto__,owner__48696__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__48694__auto__,data_atom__48695__auto__,owner__48696__auto__], null));
});
} else {
return reagent.core.as_element(v__48694__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__48676__auto__))], 0))], 0));
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58444.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58445","meta58445",-1128628313,null)], null);
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58444.cljs$lang$type = true);

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58444.cljs$lang$ctorStr = "athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs58444");

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58444.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs58444");
}));

/**
 * Positional factory function for athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs58444.
 */
athens.devcards.breadcrumbs.__GT_t_athens$devcards$breadcrumbs58444 = (function athens$devcards$breadcrumbs$__GT_t_athens$devcards$breadcrumbs58444(meta58445){
return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58444(meta58445));
});

}

return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58444(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.breadcrumbs","athens.devcards.breadcrumbs",1567780774),new cljs.core.Keyword(null,"Breadcrumb-with-one-long-item-at-end","Breadcrumb-with-one-long-item-at-end",1243888517)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Breadcrumb-with-one-long-item-at-end",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.breadcrumbs !== 'undefined') && (typeof athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58447 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58447 = (function (meta58448){
this.meta58448 = meta58448;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58449,meta58448__$1){
var self__ = this;
var _58449__$1 = this;
return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58447(meta58448__$1));
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58447.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58449){
var self__ = this;
var _58449__$1 = this;
return self__.meta58448;
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58447.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58447.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48675__auto__,devcard_opts__48676__auto__){
var self__ = this;
var this__48675__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__48676__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__48694__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(0)], null),"Unde"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),"Libero"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(2)], null),"Exercitationem qui dicta officia aut alias eum asperiores voluptates exercitationem dicta officia aut alias eum asperiores voluptates exercitationem"], null)], null);
if(cljs.core.fn_QMARK_(v__48694__auto__)){
return (function (data_atom__48695__auto__,owner__48696__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__48694__auto__,data_atom__48695__auto__,owner__48696__auto__], null));
});
} else {
return reagent.core.as_element(v__48694__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__48676__auto__))], 0))], 0));
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58447.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58448","meta58448",1620724704,null)], null);
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58447.cljs$lang$type = true);

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58447.cljs$lang$ctorStr = "athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs58447");

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58447.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs58447");
}));

/**
 * Positional factory function for athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs58447.
 */
athens.devcards.breadcrumbs.__GT_t_athens$devcards$breadcrumbs58447 = (function athens$devcards$breadcrumbs$__GT_t_athens$devcards$breadcrumbs58447(meta58448){
return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58447(meta58448));
});

}

return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs58447(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.breadcrumbs.js.map
