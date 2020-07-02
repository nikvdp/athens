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
var c__38855__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38856__auto__ = (function (){var switch__38788__auto__ = (function (state_58226){
var state_val_58227 = (state_58226[(1)]);
if((state_val_58227 === (7))){
var state_58226__$1 = state_58226;
var statearr_58228_58250 = state_58226__$1;
(statearr_58228_58250[(2)] = false);

(statearr_58228_58250[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58227 === (1))){
var inst_58189 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_58190 = [false];
var inst_58191 = cljs.core.PersistentHashMap.fromArrays(inst_58189,inst_58190);
var inst_58192 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_58191], 0));
var state_58226__$1 = state_58226;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58226__$1,(2),inst_58192);
} else {
if((state_val_58227 === (4))){
var state_58226__$1 = state_58226;
var statearr_58229_58251 = state_58226__$1;
(statearr_58229_58251[(2)] = false);

(statearr_58229_58251[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58227 === (13))){
var inst_58222 = alert("Failed to retrieve data from GitHub");
var state_58226__$1 = state_58226;
var statearr_58230_58252 = state_58226__$1;
(statearr_58230_58252[(2)] = inst_58222);

(statearr_58230_58252[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58227 === (6))){
var state_58226__$1 = state_58226;
var statearr_58231_58253 = state_58226__$1;
(statearr_58231_58253[(2)] = true);

(statearr_58231_58253[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58227 === (3))){
var inst_58194 = (state_58226[(7)]);
var inst_58199 = inst_58194.cljs$lang$protocol_mask$partition0$;
var inst_58200 = (inst_58199 & (64));
var inst_58201 = inst_58194.cljs$core$ISeq$;
var inst_58202 = (cljs.core.PROTOCOL_SENTINEL === inst_58201);
var inst_58203 = ((inst_58200) || (inst_58202));
var state_58226__$1 = state_58226;
if(cljs.core.truth_(inst_58203)){
var statearr_58232_58254 = state_58226__$1;
(statearr_58232_58254[(1)] = (6));

} else {
var statearr_58233_58255 = state_58226__$1;
(statearr_58233_58255[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58227 === (12))){
var inst_58217 = (state_58226[(8)]);
var inst_58219 = athens.db.str_to_db_tx(inst_58217);
var inst_58220 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,inst_58219) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,inst_58219));
var state_58226__$1 = state_58226;
var statearr_58234_58256 = state_58226__$1;
(statearr_58234_58256[(2)] = inst_58220);

(statearr_58234_58256[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58227 === (2))){
var inst_58194 = (state_58226[(7)]);
var inst_58194__$1 = (state_58226[(2)]);
var inst_58196 = (inst_58194__$1 == null);
var inst_58197 = cljs.core.not(inst_58196);
var state_58226__$1 = (function (){var statearr_58235 = state_58226;
(statearr_58235[(7)] = inst_58194__$1);

return statearr_58235;
})();
if(inst_58197){
var statearr_58236_58257 = state_58226__$1;
(statearr_58236_58257[(1)] = (3));

} else {
var statearr_58237_58258 = state_58226__$1;
(statearr_58237_58258[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58227 === (11))){
var inst_58215 = (state_58226[(2)]);
var inst_58216 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58215,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_58217 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58215,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_58226__$1 = (function (){var statearr_58238 = state_58226;
(statearr_58238[(8)] = inst_58217);

return statearr_58238;
})();
if(cljs.core.truth_(inst_58216)){
var statearr_58239_58259 = state_58226__$1;
(statearr_58239_58259[(1)] = (12));

} else {
var statearr_58240_58260 = state_58226__$1;
(statearr_58240_58260[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58227 === (9))){
var inst_58194 = (state_58226[(7)]);
var inst_58212 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_58194);
var state_58226__$1 = state_58226;
var statearr_58241_58261 = state_58226__$1;
(statearr_58241_58261[(2)] = inst_58212);

(statearr_58241_58261[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58227 === (5))){
var inst_58210 = (state_58226[(2)]);
var state_58226__$1 = state_58226;
if(cljs.core.truth_(inst_58210)){
var statearr_58242_58262 = state_58226__$1;
(statearr_58242_58262[(1)] = (9));

} else {
var statearr_58243_58263 = state_58226__$1;
(statearr_58243_58263[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58227 === (14))){
var inst_58224 = (state_58226[(2)]);
var state_58226__$1 = state_58226;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58226__$1,inst_58224);
} else {
if((state_val_58227 === (10))){
var inst_58194 = (state_58226[(7)]);
var state_58226__$1 = state_58226;
var statearr_58244_58264 = state_58226__$1;
(statearr_58244_58264[(2)] = inst_58194);

(statearr_58244_58264[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58227 === (8))){
var inst_58207 = (state_58226[(2)]);
var state_58226__$1 = state_58226;
var statearr_58245_58265 = state_58226__$1;
(statearr_58245_58265[(2)] = inst_58207);

(statearr_58245_58265[(1)] = (5));


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
var athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__ = null;
var athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____0 = (function (){
var statearr_58246 = [null,null,null,null,null,null,null,null,null];
(statearr_58246[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__);

(statearr_58246[(1)] = (1));

return statearr_58246;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1 = (function (state_58226){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_58226);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e58247){if((e58247 instanceof Object)){
var ex__38792__auto__ = e58247;
var statearr_58248_58266 = state_58226;
(statearr_58248_58266[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_58226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58247;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58267 = state_58226;
state_58226 = G__58267;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__ = function(state_58226){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1.call(this,state_58226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__;
})()
})();
var state__38857__auto__ = (function (){var statearr_58249 = (f__38856__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38856__auto__.cljs$core$IFn$_invoke$arity$0() : f__38856__auto__.call(null));
(statearr_58249[(6)] = c__38855__auto__);

return statearr_58249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38857__auto__);
}));

return c__38855__auto__;
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

//# sourceMappingURL=athens.devcards.db.js.map
