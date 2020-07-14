goog.provide('athens.devcards.style_guide');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.style');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('devcards.core');
goog.require('stylefy.core');
athens.devcards.style_guide.color_group_style = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem",new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"repeat( auto-fit, minmax(9rem, 1fr))",new cljs.core.Keyword(null,"grid-gap","grid-gap",1083581064),"3rem 1rem",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null);
athens.devcards.style_guide.color_item_style = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"grid-gap","grid-gap",1083581064),"0.25rem",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"1000px",new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword(null,"height","height",1025178622),"4rem",new cljs.core.Keyword(null,"margin","margin",-995903681),"auto",new cljs.core.Keyword(null,"width","width",-384071477),"4rem"], null)], null)], null)], null);
athens.devcards.style_guide.text_item_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between"], null);
athens.devcards.style_guide.types = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.Keyword(null,"h5","h5",-1829156625),new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"span.block-ref","span.block-ref",1894783192)], null);
athens.devcards.style_guide.fonts = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["IBM Plex Serif","serif"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["IBM Plex Sans","sans-serif"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["IBM Plex Mono","monospace"], null)], null);
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.style_guide","athens.devcards.style_guide",163176557),new cljs.core.Keyword(null,"Colors","Colors",572881364)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Colors",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.style_guide !== 'undefined') && (typeof athens.devcards.style_guide.t_athens$devcards$style_guide61328 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.style_guide.t_athens$devcards$style_guide61328 = (function (meta61329){
this.meta61329 = meta61329;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.style_guide.t_athens$devcards$style_guide61328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61330,meta61329__$1){
var self__ = this;
var _61330__$1 = this;
return (new athens.devcards.style_guide.t_athens$devcards$style_guide61328(meta61329__$1));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide61328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61330){
var self__ = this;
var _61330__$1 = this;
return self__.meta61329;
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide61328.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.style_guide.t_athens$devcards$style_guide61328.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42236__auto__,devcard_opts__42237__auto__){
var self__ = this;
var this__42236__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42237__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42255__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.devcards.style_guide.color_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971))], null)], 0))),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$style_guide$iter__61331(s__61332){
return (new cljs.core.LazySeq(null,(function (){
var s__61332__$1 = s__61332;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__61332__$1);
if(temp__5735__auto__){
var s__61332__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__61332__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__61332__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__61334 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__61333 = (0);
while(true){
if((i__61333 < size__4581__auto__)){
var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__61333);
cljs.core.chunk_append(b__61334,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.color_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 0 0 1px rgba(0,0,0,0.15)"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),c], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(c)], null)], null),athens.style.color.cljs$core$IFn$_invoke$arity$1(c)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),c], null)));

var G__61363 = (i__61333 + (1));
i__61333 = G__61363;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61334),athens$devcards$style_guide$iter__61331(cljs.core.chunk_rest(s__61332__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61334),null);
}
} else {
var c = cljs.core.first(s__61332__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.color_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 0 0 1px rgba(0,0,0,0.15)"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),c], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(c)], null)], null),athens.style.color.cljs$core$IFn$_invoke$arity$1(c)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),c], null)),athens$devcards$style_guide$iter__61331(cljs.core.rest(s__61332__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.keys(athens.style.COLORS));
})())], null);
if(cljs.core.fn_QMARK_(v__42255__auto__)){
return (function (data_atom__42256__auto__,owner__42257__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42255__auto__,data_atom__42256__auto__,owner__42257__auto__], null));
});
} else {
return reagent.core.as_element(v__42255__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42237__auto__))], 0))], 0));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide61328.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta61329","meta61329",1326528997,null)], null);
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide61328.cljs$lang$type = true);

(athens.devcards.style_guide.t_athens$devcards$style_guide61328.cljs$lang$ctorStr = "athens.devcards.style-guide/t_athens$devcards$style_guide61328");

(athens.devcards.style_guide.t_athens$devcards$style_guide61328.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.style-guide/t_athens$devcards$style_guide61328");
}));

/**
 * Positional factory function for athens.devcards.style-guide/t_athens$devcards$style_guide61328.
 */
athens.devcards.style_guide.__GT_t_athens$devcards$style_guide61328 = (function athens$devcards$style_guide$__GT_t_athens$devcards$style_guide61328(meta61329){
return (new athens.devcards.style_guide.t_athens$devcards$style_guide61328(meta61329));
});

}

return (new athens.devcards.style_guide.t_athens$devcards$style_guide61328(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.style_guide","athens.devcards.style_guide",163176557),new cljs.core.Keyword(null,"Opacities","Opacities",-312274473)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Opacities",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.style_guide !== 'undefined') && (typeof athens.devcards.style_guide.t_athens$devcards$style_guide61335 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.style_guide.t_athens$devcards$style_guide61335 = (function (meta61336){
this.meta61336 = meta61336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.style_guide.t_athens$devcards$style_guide61335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61337,meta61336__$1){
var self__ = this;
var _61337__$1 = this;
return (new athens.devcards.style_guide.t_athens$devcards$style_guide61335(meta61336__$1));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide61335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61337){
var self__ = this;
var _61337__$1 = this;
return self__.meta61336;
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide61335.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.style_guide.t_athens$devcards$style_guide61335.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42236__auto__,devcard_opts__42237__auto__){
var self__ = this;
var this__42236__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42237__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42255__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.color_group_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$style_guide$iter__61338(s__61339){
return (new cljs.core.LazySeq(null,(function (){
var s__61339__$1 = s__61339;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__61339__$1);
if(temp__5735__auto__){
var s__61339__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__61339__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__61339__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__61341 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__61340 = (0);
while(true){
if((i__61340 < size__4581__auto__)){
var o = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__61340);
cljs.core.chunk_append(b__61341,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.color_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(o.cljs$core$IFn$_invoke$arity$1 ? o.cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES) : o.call(null,athens.style.OPACITIES))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),o], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),o], null)));

var G__61364 = (i__61340 + (1));
i__61340 = G__61364;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61341),athens$devcards$style_guide$iter__61338(cljs.core.chunk_rest(s__61339__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61341),null);
}
} else {
var o = cljs.core.first(s__61339__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.color_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(o.cljs$core$IFn$_invoke$arity$1 ? o.cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES) : o.call(null,athens.style.OPACITIES))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),o], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),o], null)),athens$devcards$style_guide$iter__61338(cljs.core.rest(s__61339__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.keys(athens.style.OPACITIES));
})())], null);
if(cljs.core.fn_QMARK_(v__42255__auto__)){
return (function (data_atom__42256__auto__,owner__42257__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42255__auto__,data_atom__42256__auto__,owner__42257__auto__], null));
});
} else {
return reagent.core.as_element(v__42255__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42237__auto__))], 0))], 0));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide61335.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta61336","meta61336",1847205668,null)], null);
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide61335.cljs$lang$type = true);

(athens.devcards.style_guide.t_athens$devcards$style_guide61335.cljs$lang$ctorStr = "athens.devcards.style-guide/t_athens$devcards$style_guide61335");

(athens.devcards.style_guide.t_athens$devcards$style_guide61335.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.style-guide/t_athens$devcards$style_guide61335");
}));

/**
 * Positional factory function for athens.devcards.style-guide/t_athens$devcards$style_guide61335.
 */
athens.devcards.style_guide.__GT_t_athens$devcards$style_guide61335 = (function athens$devcards$style_guide$__GT_t_athens$devcards$style_guide61335(meta61336){
return (new athens.devcards.style_guide.t_athens$devcards$style_guide61335(meta61336));
});

}

return (new athens.devcards.style_guide.t_athens$devcards$style_guide61335(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.style_guide","athens.devcards.style_guide",163176557),new cljs.core.Keyword(null,"Sans-Types","Sans-Types",-759330260)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Sans-Types",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.style_guide !== 'undefined') && (typeof athens.devcards.style_guide.t_athens$devcards$style_guide61342 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.style_guide.t_athens$devcards$style_guide61342 = (function (meta61343){
this.meta61343 = meta61343;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.style_guide.t_athens$devcards$style_guide61342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61344,meta61343__$1){
var self__ = this;
var _61344__$1 = this;
return (new athens.devcards.style_guide.t_athens$devcards$style_guide61342(meta61343__$1));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide61342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61344){
var self__ = this;
var _61344__$1 = this;
return self__.meta61343;
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide61342.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.style_guide.t_athens$devcards$style_guide61342.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42236__auto__,devcard_opts__42237__auto__){
var self__ = this;
var this__42236__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42237__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42255__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$style_guide$iter__61345(s__61346){
return (new cljs.core.LazySeq(null,(function (){
var s__61346__$1 = s__61346;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__61346__$1);
if(temp__5735__auto__){
var s__61346__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__61346__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__61346__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__61348 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__61347 = (0);
while(true){
if((i__61347 < size__4581__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__61347);
cljs.core.chunk_append(b__61348,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.text_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),t], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.second(athens.devcards.style_guide.fonts)], null)], null),"Welcome to Athens"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)));

var G__61365 = (i__61347 + (1));
i__61347 = G__61365;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61348),athens$devcards$style_guide$iter__61345(cljs.core.chunk_rest(s__61346__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61348),null);
}
} else {
var t = cljs.core.first(s__61346__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.text_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),t], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.second(athens.devcards.style_guide.fonts)], null)], null),"Welcome to Athens"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)),athens$devcards$style_guide$iter__61345(cljs.core.rest(s__61346__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(athens.devcards.style_guide.types);
})())], null);
if(cljs.core.fn_QMARK_(v__42255__auto__)){
return (function (data_atom__42256__auto__,owner__42257__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42255__auto__,data_atom__42256__auto__,owner__42257__auto__], null));
});
} else {
return reagent.core.as_element(v__42255__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42237__auto__))], 0))], 0));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide61342.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta61343","meta61343",-1406000280,null)], null);
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide61342.cljs$lang$type = true);

(athens.devcards.style_guide.t_athens$devcards$style_guide61342.cljs$lang$ctorStr = "athens.devcards.style-guide/t_athens$devcards$style_guide61342");

(athens.devcards.style_guide.t_athens$devcards$style_guide61342.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.style-guide/t_athens$devcards$style_guide61342");
}));

/**
 * Positional factory function for athens.devcards.style-guide/t_athens$devcards$style_guide61342.
 */
athens.devcards.style_guide.__GT_t_athens$devcards$style_guide61342 = (function athens$devcards$style_guide$__GT_t_athens$devcards$style_guide61342(meta61343){
return (new athens.devcards.style_guide.t_athens$devcards$style_guide61342(meta61343));
});

}

return (new athens.devcards.style_guide.t_athens$devcards$style_guide61342(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.style_guide","athens.devcards.style_guide",163176557),new cljs.core.Keyword(null,"Serif-Types","Serif-Types",-1395581219)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Serif-Types",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.style_guide !== 'undefined') && (typeof athens.devcards.style_guide.t_athens$devcards$style_guide61349 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.style_guide.t_athens$devcards$style_guide61349 = (function (meta61350){
this.meta61350 = meta61350;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.style_guide.t_athens$devcards$style_guide61349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61351,meta61350__$1){
var self__ = this;
var _61351__$1 = this;
return (new athens.devcards.style_guide.t_athens$devcards$style_guide61349(meta61350__$1));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide61349.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61351){
var self__ = this;
var _61351__$1 = this;
return self__.meta61350;
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide61349.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.style_guide.t_athens$devcards$style_guide61349.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42236__auto__,devcard_opts__42237__auto__){
var self__ = this;
var this__42236__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42237__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42255__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$style_guide$iter__61352(s__61353){
return (new cljs.core.LazySeq(null,(function (){
var s__61353__$1 = s__61353;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__61353__$1);
if(temp__5735__auto__){
var s__61353__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__61353__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__61353__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__61355 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__61354 = (0);
while(true){
if((i__61354 < size__4581__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__61354);
cljs.core.chunk_append(b__61355,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.text_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),t], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.first(athens.devcards.style_guide.fonts)], null)], null),"Welcome to Athens"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)));

var G__61366 = (i__61354 + (1));
i__61354 = G__61366;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61355),athens$devcards$style_guide$iter__61352(cljs.core.chunk_rest(s__61353__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61355),null);
}
} else {
var t = cljs.core.first(s__61353__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.text_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),t], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.first(athens.devcards.style_guide.fonts)], null)], null),"Welcome to Athens"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)),athens$devcards$style_guide$iter__61352(cljs.core.rest(s__61353__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(athens.devcards.style_guide.types);
})())], null);
if(cljs.core.fn_QMARK_(v__42255__auto__)){
return (function (data_atom__42256__auto__,owner__42257__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42255__auto__,data_atom__42256__auto__,owner__42257__auto__], null));
});
} else {
return reagent.core.as_element(v__42255__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42237__auto__))], 0))], 0));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide61349.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta61350","meta61350",1142366507,null)], null);
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide61349.cljs$lang$type = true);

(athens.devcards.style_guide.t_athens$devcards$style_guide61349.cljs$lang$ctorStr = "athens.devcards.style-guide/t_athens$devcards$style_guide61349");

(athens.devcards.style_guide.t_athens$devcards$style_guide61349.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.style-guide/t_athens$devcards$style_guide61349");
}));

/**
 * Positional factory function for athens.devcards.style-guide/t_athens$devcards$style_guide61349.
 */
athens.devcards.style_guide.__GT_t_athens$devcards$style_guide61349 = (function athens$devcards$style_guide$__GT_t_athens$devcards$style_guide61349(meta61350){
return (new athens.devcards.style_guide.t_athens$devcards$style_guide61349(meta61350));
});

}

return (new athens.devcards.style_guide.t_athens$devcards$style_guide61349(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.style_guide","athens.devcards.style_guide",163176557),new cljs.core.Keyword(null,"Monospace-Types","Monospace-Types",-1076182681)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Monospace-Types",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.style_guide !== 'undefined') && (typeof athens.devcards.style_guide.t_athens$devcards$style_guide61356 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.style_guide.t_athens$devcards$style_guide61356 = (function (meta61357){
this.meta61357 = meta61357;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.style_guide.t_athens$devcards$style_guide61356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61358,meta61357__$1){
var self__ = this;
var _61358__$1 = this;
return (new athens.devcards.style_guide.t_athens$devcards$style_guide61356(meta61357__$1));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide61356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61358){
var self__ = this;
var _61358__$1 = this;
return self__.meta61357;
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide61356.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.style_guide.t_athens$devcards$style_guide61356.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42236__auto__,devcard_opts__42237__auto__){
var self__ = this;
var this__42236__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42237__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42255__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$style_guide$iter__61359(s__61360){
return (new cljs.core.LazySeq(null,(function (){
var s__61360__$1 = s__61360;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__61360__$1);
if(temp__5735__auto__){
var s__61360__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__61360__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__61360__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__61362 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__61361 = (0);
while(true){
if((i__61361 < size__4581__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__61361);
cljs.core.chunk_append(b__61362,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.text_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),t], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.last(athens.devcards.style_guide.fonts)], null)], null),"Welcome to Athens"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)));

var G__61367 = (i__61361 + (1));
i__61361 = G__61367;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61362),athens$devcards$style_guide$iter__61359(cljs.core.chunk_rest(s__61360__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61362),null);
}
} else {
var t = cljs.core.first(s__61360__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.text_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),t], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.last(athens.devcards.style_guide.fonts)], null)], null),"Welcome to Athens"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)),athens$devcards$style_guide$iter__61359(cljs.core.rest(s__61360__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(athens.devcards.style_guide.types);
})())], null);
if(cljs.core.fn_QMARK_(v__42255__auto__)){
return (function (data_atom__42256__auto__,owner__42257__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42255__auto__,data_atom__42256__auto__,owner__42257__auto__], null));
});
} else {
return reagent.core.as_element(v__42255__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42237__auto__))], 0))], 0));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide61356.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta61357","meta61357",-1054828368,null)], null);
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide61356.cljs$lang$type = true);

(athens.devcards.style_guide.t_athens$devcards$style_guide61356.cljs$lang$ctorStr = "athens.devcards.style-guide/t_athens$devcards$style_guide61356");

(athens.devcards.style_guide.t_athens$devcards$style_guide61356.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.style-guide/t_athens$devcards$style_guide61356");
}));

/**
 * Positional factory function for athens.devcards.style-guide/t_athens$devcards$style_guide61356.
 */
athens.devcards.style_guide.__GT_t_athens$devcards$style_guide61356 = (function athens$devcards$style_guide$__GT_t_athens$devcards$style_guide61356(meta61357){
return (new athens.devcards.style_guide.t_athens$devcards$style_guide61356(meta61357));
});

}

return (new athens.devcards.style_guide.t_athens$devcards$style_guide61356(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.style_guide.js.map
