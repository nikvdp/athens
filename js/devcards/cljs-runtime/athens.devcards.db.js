goog.provide('athens.devcards.db');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.devcards.buttons');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('datascript.core');
goog.require('devcards.core');
goog.require('posh.reagent');
goog.require('reagent.core');
athens.devcards.db.load_real_db_BANG_ = (function athens$devcards$db$load_real_db_BANG_(){
var c__36984__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36986__auto__ = (function (){var switch__36917__auto__ = (function (state_42769){
var state_val_42770 = (state_42769[(1)]);
if((state_val_42770 === (7))){
var state_42769__$1 = state_42769;
var statearr_42771_42799 = state_42769__$1;
(statearr_42771_42799[(2)] = false);

(statearr_42771_42799[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42770 === (1))){
var inst_42732 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_42733 = [false];
var inst_42734 = cljs.core.PersistentHashMap.fromArrays(inst_42732,inst_42733);
var inst_42735 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_42734], 0));
var state_42769__$1 = state_42769;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42769__$1,(2),inst_42735);
} else {
if((state_val_42770 === (4))){
var state_42769__$1 = state_42769;
var statearr_42772_42800 = state_42769__$1;
(statearr_42772_42800[(2)] = false);

(statearr_42772_42800[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42770 === (13))){
var inst_42765 = alert("Failed to retrieve data from GitHub");
var state_42769__$1 = state_42769;
var statearr_42773_42801 = state_42769__$1;
(statearr_42773_42801[(2)] = inst_42765);

(statearr_42773_42801[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42770 === (6))){
var state_42769__$1 = state_42769;
var statearr_42774_42802 = state_42769__$1;
(statearr_42774_42802[(2)] = true);

(statearr_42774_42802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42770 === (3))){
var inst_42737 = (state_42769[(7)]);
var inst_42742 = inst_42737.cljs$lang$protocol_mask$partition0$;
var inst_42743 = (inst_42742 & (64));
var inst_42744 = inst_42737.cljs$core$ISeq$;
var inst_42745 = (cljs.core.PROTOCOL_SENTINEL === inst_42744);
var inst_42746 = ((inst_42743) || (inst_42745));
var state_42769__$1 = state_42769;
if(cljs.core.truth_(inst_42746)){
var statearr_42775_42803 = state_42769__$1;
(statearr_42775_42803[(1)] = (6));

} else {
var statearr_42776_42804 = state_42769__$1;
(statearr_42776_42804[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42770 === (12))){
var inst_42760 = (state_42769[(8)]);
var inst_42762 = athens.db.str_to_db_tx(inst_42760);
var inst_42763 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,inst_42762) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,inst_42762));
var state_42769__$1 = state_42769;
var statearr_42777_42805 = state_42769__$1;
(statearr_42777_42805[(2)] = inst_42763);

(statearr_42777_42805[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42770 === (2))){
var inst_42737 = (state_42769[(7)]);
var inst_42737__$1 = (state_42769[(2)]);
var inst_42739 = (inst_42737__$1 == null);
var inst_42740 = cljs.core.not(inst_42739);
var state_42769__$1 = (function (){var statearr_42778 = state_42769;
(statearr_42778[(7)] = inst_42737__$1);

return statearr_42778;
})();
if(inst_42740){
var statearr_42779_42806 = state_42769__$1;
(statearr_42779_42806[(1)] = (3));

} else {
var statearr_42780_42807 = state_42769__$1;
(statearr_42780_42807[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42770 === (11))){
var inst_42758 = (state_42769[(2)]);
var inst_42759 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42758,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_42760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42758,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_42769__$1 = (function (){var statearr_42781 = state_42769;
(statearr_42781[(8)] = inst_42760);

return statearr_42781;
})();
if(cljs.core.truth_(inst_42759)){
var statearr_42782_42808 = state_42769__$1;
(statearr_42782_42808[(1)] = (12));

} else {
var statearr_42783_42809 = state_42769__$1;
(statearr_42783_42809[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42770 === (9))){
var inst_42737 = (state_42769[(7)]);
var inst_42755 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_42737);
var state_42769__$1 = state_42769;
var statearr_42784_42810 = state_42769__$1;
(statearr_42784_42810[(2)] = inst_42755);

(statearr_42784_42810[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42770 === (5))){
var inst_42753 = (state_42769[(2)]);
var state_42769__$1 = state_42769;
if(cljs.core.truth_(inst_42753)){
var statearr_42785_42811 = state_42769__$1;
(statearr_42785_42811[(1)] = (9));

} else {
var statearr_42786_42812 = state_42769__$1;
(statearr_42786_42812[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42770 === (14))){
var inst_42767 = (state_42769[(2)]);
var state_42769__$1 = state_42769;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42769__$1,inst_42767);
} else {
if((state_val_42770 === (10))){
var inst_42737 = (state_42769[(7)]);
var state_42769__$1 = state_42769;
var statearr_42787_42813 = state_42769__$1;
(statearr_42787_42813[(2)] = inst_42737);

(statearr_42787_42813[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42770 === (8))){
var inst_42750 = (state_42769[(2)]);
var state_42769__$1 = state_42769;
var statearr_42788_42814 = state_42769__$1;
(statearr_42788_42814[(2)] = inst_42750);

(statearr_42788_42814[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var athens$devcards$db$load_real_db_BANG__$_state_machine__36918__auto__ = null;
var athens$devcards$db$load_real_db_BANG__$_state_machine__36918__auto____0 = (function (){
var statearr_42789 = [null,null,null,null,null,null,null,null,null];
(statearr_42789[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__36918__auto__);

(statearr_42789[(1)] = (1));

return statearr_42789;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__36918__auto____1 = (function (state_42769){
while(true){
var ret_value__36919__auto__ = (function (){try{while(true){
var result__36920__auto__ = switch__36917__auto__(state_42769);
if(cljs.core.keyword_identical_QMARK_(result__36920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36920__auto__;
}
break;
}
}catch (e42790){if((e42790 instanceof Object)){
var ex__36921__auto__ = e42790;
var statearr_42791_42815 = state_42769;
(statearr_42791_42815[(5)] = ex__36921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42790;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42816 = state_42769;
state_42769 = G__42816;
continue;
} else {
return ret_value__36919__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__36918__auto__ = function(state_42769){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__36918__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__36918__auto____1.call(this,state_42769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__36918__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__36918__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__36918__auto__;
})()
})();
var state__36987__auto__ = (function (){var statearr_42792 = (f__36986__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36986__auto__.cljs$core$IFn$_invoke$arity$0() : f__36986__auto__.call(null));
(statearr_42792[(6)] = c__36984__auto__);

return statearr_42792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36987__auto__);
}));

return c__36984__auto__;
});
athens.devcards.db.load_real_db_button = (function athens$devcards$db$load_real_db_button(){
var pressed_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var handler = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pressed_QMARK_,cljs.core.not);

return athens.devcards.db.load_real_db_BANG_();
});
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref(pressed_QMARK_),new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),handler,new cljs.core.Keyword(null,"label","label",1718410804),"Load Real Data"], null)], null);
});
});
athens.devcards.db.reset_db_button = (function athens$devcards$db$reset_db_button(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,(datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(athens.db.schema) : datascript.core.empty_db.call(null,athens.db.schema)));
}),new cljs.core.Keyword(null,"label","label",1718410804),"Reset DB"], null)], null);
});
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"Load-Real-DB","Load-Real-DB",504458170)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load-Real-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Downloads the ego db. Takes a few seconds. Can only press once.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db42793 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db42793 = (function (meta42794){
this.meta42794 = meta42794;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db42793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42795,meta42794__$1){
var self__ = this;
var _42795__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db42793(meta42794__$1));
}));

(athens.devcards.db.t_athens$devcards$db42793.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42795){
var self__ = this;
var _42795__$1 = this;
return self__.meta42794;
}));

(athens.devcards.db.t_athens$devcards$db42793.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db42793.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__41676__auto__,devcard_opts__41677__auto__){
var self__ = this;
var this__41676__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__41677__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__41695__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button], null);
if(cljs.core.fn_QMARK_(v__41695__auto__)){
return (function (data_atom__41696__auto__,owner__41697__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__41695__auto__,data_atom__41696__auto__,owner__41697__auto__], null));
});
} else {
return reagent.core.as_element(v__41695__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__41677__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db42793.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42794","meta42794",1238292830,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db42793.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db42793.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db42793");

(athens.devcards.db.t_athens$devcards$db42793.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db42793");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db42793.
 */
athens.devcards.db.__GT_t_athens$devcards$db42793 = (function athens$devcards$db$__GT_t_athens$devcards$db42793(meta42794){
return (new athens.devcards.db.t_athens$devcards$db42793(meta42794));
});

}

return (new athens.devcards.db.t_athens$devcards$db42793(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"Reset-DB","Reset-DB",2022815017)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db42796 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db42796 = (function (meta42797){
this.meta42797 = meta42797;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db42796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42798,meta42797__$1){
var self__ = this;
var _42798__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db42796(meta42797__$1));
}));

(athens.devcards.db.t_athens$devcards$db42796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42798){
var self__ = this;
var _42798__$1 = this;
return self__.meta42797;
}));

(athens.devcards.db.t_athens$devcards$db42796.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db42796.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__41676__auto__,devcard_opts__41677__auto__){
var self__ = this;
var this__41676__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__41677__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__41695__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.reset_db_button], null);
if(cljs.core.fn_QMARK_(v__41695__auto__)){
return (function (data_atom__41696__auto__,owner__41697__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__41695__auto__,data_atom__41696__auto__,owner__41697__auto__], null));
});
} else {
return reagent.core.as_element(v__41695__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__41677__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db42796.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42797","meta42797",-2059523696,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db42796.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db42796.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db42796");

(athens.devcards.db.t_athens$devcards$db42796.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db42796");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db42796.
 */
athens.devcards.db.__GT_t_athens$devcards$db42796 = (function athens$devcards$db$__GT_t_athens$devcards$db42796(meta42797){
return (new athens.devcards.db.t_athens$devcards$db42796(meta42797));
});

}

return (new athens.devcards.db.t_athens$devcards$db42796(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"athens-dsdb","athens-dsdb",-417293929)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"athens-dsdb",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"The main Athens dsdb:",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),athens.db.dsdb,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

//# sourceMappingURL=athens.devcards.db.js.map
