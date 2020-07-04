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
var c__38854__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38855__auto__ = (function (){var switch__38788__auto__ = (function (state_58240){
var state_val_58241 = (state_58240[(1)]);
if((state_val_58241 === (7))){
var state_58240__$1 = state_58240;
var statearr_58242_58264 = state_58240__$1;
(statearr_58242_58264[(2)] = false);

(statearr_58242_58264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58241 === (1))){
var inst_58203 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_58204 = [false];
var inst_58205 = cljs.core.PersistentHashMap.fromArrays(inst_58203,inst_58204);
var inst_58206 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_58205], 0));
var state_58240__$1 = state_58240;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58240__$1,(2),inst_58206);
} else {
if((state_val_58241 === (4))){
var state_58240__$1 = state_58240;
var statearr_58243_58265 = state_58240__$1;
(statearr_58243_58265[(2)] = false);

(statearr_58243_58265[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58241 === (13))){
var inst_58236 = alert("Failed to retrieve data from GitHub");
var state_58240__$1 = state_58240;
var statearr_58244_58266 = state_58240__$1;
(statearr_58244_58266[(2)] = inst_58236);

(statearr_58244_58266[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58241 === (6))){
var state_58240__$1 = state_58240;
var statearr_58245_58267 = state_58240__$1;
(statearr_58245_58267[(2)] = true);

(statearr_58245_58267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58241 === (3))){
var inst_58208 = (state_58240[(7)]);
var inst_58213 = inst_58208.cljs$lang$protocol_mask$partition0$;
var inst_58214 = (inst_58213 & (64));
var inst_58215 = inst_58208.cljs$core$ISeq$;
var inst_58216 = (cljs.core.PROTOCOL_SENTINEL === inst_58215);
var inst_58217 = ((inst_58214) || (inst_58216));
var state_58240__$1 = state_58240;
if(cljs.core.truth_(inst_58217)){
var statearr_58246_58268 = state_58240__$1;
(statearr_58246_58268[(1)] = (6));

} else {
var statearr_58247_58269 = state_58240__$1;
(statearr_58247_58269[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58241 === (12))){
var inst_58231 = (state_58240[(8)]);
var inst_58233 = athens.db.str_to_db_tx(inst_58231);
var inst_58234 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,inst_58233) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,inst_58233));
var state_58240__$1 = state_58240;
var statearr_58248_58270 = state_58240__$1;
(statearr_58248_58270[(2)] = inst_58234);

(statearr_58248_58270[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58241 === (2))){
var inst_58208 = (state_58240[(7)]);
var inst_58208__$1 = (state_58240[(2)]);
var inst_58210 = (inst_58208__$1 == null);
var inst_58211 = cljs.core.not(inst_58210);
var state_58240__$1 = (function (){var statearr_58249 = state_58240;
(statearr_58249[(7)] = inst_58208__$1);

return statearr_58249;
})();
if(inst_58211){
var statearr_58250_58271 = state_58240__$1;
(statearr_58250_58271[(1)] = (3));

} else {
var statearr_58251_58272 = state_58240__$1;
(statearr_58251_58272[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58241 === (11))){
var inst_58229 = (state_58240[(2)]);
var inst_58230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58229,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_58231 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58229,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_58240__$1 = (function (){var statearr_58252 = state_58240;
(statearr_58252[(8)] = inst_58231);

return statearr_58252;
})();
if(cljs.core.truth_(inst_58230)){
var statearr_58253_58273 = state_58240__$1;
(statearr_58253_58273[(1)] = (12));

} else {
var statearr_58254_58274 = state_58240__$1;
(statearr_58254_58274[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58241 === (9))){
var inst_58208 = (state_58240[(7)]);
var inst_58226 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_58208);
var state_58240__$1 = state_58240;
var statearr_58255_58275 = state_58240__$1;
(statearr_58255_58275[(2)] = inst_58226);

(statearr_58255_58275[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58241 === (5))){
var inst_58224 = (state_58240[(2)]);
var state_58240__$1 = state_58240;
if(cljs.core.truth_(inst_58224)){
var statearr_58256_58276 = state_58240__$1;
(statearr_58256_58276[(1)] = (9));

} else {
var statearr_58257_58277 = state_58240__$1;
(statearr_58257_58277[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58241 === (14))){
var inst_58238 = (state_58240[(2)]);
var state_58240__$1 = state_58240;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58240__$1,inst_58238);
} else {
if((state_val_58241 === (10))){
var inst_58208 = (state_58240[(7)]);
var state_58240__$1 = state_58240;
var statearr_58258_58278 = state_58240__$1;
(statearr_58258_58278[(2)] = inst_58208);

(statearr_58258_58278[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58241 === (8))){
var inst_58221 = (state_58240[(2)]);
var state_58240__$1 = state_58240;
var statearr_58259_58279 = state_58240__$1;
(statearr_58259_58279[(2)] = inst_58221);

(statearr_58259_58279[(1)] = (5));


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
var statearr_58260 = [null,null,null,null,null,null,null,null,null];
(statearr_58260[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__);

(statearr_58260[(1)] = (1));

return statearr_58260;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1 = (function (state_58240){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_58240);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e58261){if((e58261 instanceof Object)){
var ex__38792__auto__ = e58261;
var statearr_58262_58280 = state_58240;
(statearr_58262_58280[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_58240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58261;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58281 = state_58240;
state_58240 = G__58281;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__ = function(state_58240){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1.call(this,state_58240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__;
})()
})();
var state__38856__auto__ = (function (){var statearr_58263 = (f__38855__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38855__auto__.cljs$core$IFn$_invoke$arity$0() : f__38855__auto__.call(null));
(statearr_58263[(6)] = c__38854__auto__);

return statearr_58263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38856__auto__);
}));

return c__38854__auto__;
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
