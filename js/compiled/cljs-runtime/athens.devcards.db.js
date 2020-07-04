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
var c__38856__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38857__auto__ = (function (){var switch__38788__auto__ = (function (state_58257){
var state_val_58258 = (state_58257[(1)]);
if((state_val_58258 === (7))){
var state_58257__$1 = state_58257;
var statearr_58259_58281 = state_58257__$1;
(statearr_58259_58281[(2)] = false);

(statearr_58259_58281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58258 === (1))){
var inst_58220 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_58221 = [false];
var inst_58222 = cljs.core.PersistentHashMap.fromArrays(inst_58220,inst_58221);
var inst_58223 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_58222], 0));
var state_58257__$1 = state_58257;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58257__$1,(2),inst_58223);
} else {
if((state_val_58258 === (4))){
var state_58257__$1 = state_58257;
var statearr_58260_58282 = state_58257__$1;
(statearr_58260_58282[(2)] = false);

(statearr_58260_58282[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58258 === (13))){
var inst_58253 = alert("Failed to retrieve data from GitHub");
var state_58257__$1 = state_58257;
var statearr_58261_58283 = state_58257__$1;
(statearr_58261_58283[(2)] = inst_58253);

(statearr_58261_58283[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58258 === (6))){
var state_58257__$1 = state_58257;
var statearr_58262_58284 = state_58257__$1;
(statearr_58262_58284[(2)] = true);

(statearr_58262_58284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58258 === (3))){
var inst_58225 = (state_58257[(7)]);
var inst_58230 = inst_58225.cljs$lang$protocol_mask$partition0$;
var inst_58231 = (inst_58230 & (64));
var inst_58232 = inst_58225.cljs$core$ISeq$;
var inst_58233 = (cljs.core.PROTOCOL_SENTINEL === inst_58232);
var inst_58234 = ((inst_58231) || (inst_58233));
var state_58257__$1 = state_58257;
if(cljs.core.truth_(inst_58234)){
var statearr_58263_58285 = state_58257__$1;
(statearr_58263_58285[(1)] = (6));

} else {
var statearr_58264_58286 = state_58257__$1;
(statearr_58264_58286[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58258 === (12))){
var inst_58248 = (state_58257[(8)]);
var inst_58250 = athens.db.str_to_db_tx(inst_58248);
var inst_58251 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,inst_58250) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,inst_58250));
var state_58257__$1 = state_58257;
var statearr_58265_58287 = state_58257__$1;
(statearr_58265_58287[(2)] = inst_58251);

(statearr_58265_58287[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58258 === (2))){
var inst_58225 = (state_58257[(7)]);
var inst_58225__$1 = (state_58257[(2)]);
var inst_58227 = (inst_58225__$1 == null);
var inst_58228 = cljs.core.not(inst_58227);
var state_58257__$1 = (function (){var statearr_58266 = state_58257;
(statearr_58266[(7)] = inst_58225__$1);

return statearr_58266;
})();
if(inst_58228){
var statearr_58267_58288 = state_58257__$1;
(statearr_58267_58288[(1)] = (3));

} else {
var statearr_58268_58289 = state_58257__$1;
(statearr_58268_58289[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58258 === (11))){
var inst_58246 = (state_58257[(2)]);
var inst_58247 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58246,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_58248 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58246,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_58257__$1 = (function (){var statearr_58269 = state_58257;
(statearr_58269[(8)] = inst_58248);

return statearr_58269;
})();
if(cljs.core.truth_(inst_58247)){
var statearr_58270_58290 = state_58257__$1;
(statearr_58270_58290[(1)] = (12));

} else {
var statearr_58271_58291 = state_58257__$1;
(statearr_58271_58291[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58258 === (9))){
var inst_58225 = (state_58257[(7)]);
var inst_58243 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_58225);
var state_58257__$1 = state_58257;
var statearr_58272_58292 = state_58257__$1;
(statearr_58272_58292[(2)] = inst_58243);

(statearr_58272_58292[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58258 === (5))){
var inst_58241 = (state_58257[(2)]);
var state_58257__$1 = state_58257;
if(cljs.core.truth_(inst_58241)){
var statearr_58273_58293 = state_58257__$1;
(statearr_58273_58293[(1)] = (9));

} else {
var statearr_58274_58294 = state_58257__$1;
(statearr_58274_58294[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58258 === (14))){
var inst_58255 = (state_58257[(2)]);
var state_58257__$1 = state_58257;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58257__$1,inst_58255);
} else {
if((state_val_58258 === (10))){
var inst_58225 = (state_58257[(7)]);
var state_58257__$1 = state_58257;
var statearr_58275_58295 = state_58257__$1;
(statearr_58275_58295[(2)] = inst_58225);

(statearr_58275_58295[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58258 === (8))){
var inst_58238 = (state_58257[(2)]);
var state_58257__$1 = state_58257;
var statearr_58276_58296 = state_58257__$1;
(statearr_58276_58296[(2)] = inst_58238);

(statearr_58276_58296[(1)] = (5));


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
var statearr_58277 = [null,null,null,null,null,null,null,null,null];
(statearr_58277[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__);

(statearr_58277[(1)] = (1));

return statearr_58277;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1 = (function (state_58257){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_58257);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e58278){if((e58278 instanceof Object)){
var ex__38792__auto__ = e58278;
var statearr_58279_58297 = state_58257;
(statearr_58279_58297[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_58257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58278;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58298 = state_58257;
state_58257 = G__58298;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__ = function(state_58257){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1.call(this,state_58257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__38789__auto__;
})()
})();
var state__38858__auto__ = (function (){var statearr_58280 = (f__38857__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38857__auto__.cljs$core$IFn$_invoke$arity$0() : f__38857__auto__.call(null));
(statearr_58280[(6)] = c__38856__auto__);

return statearr_58280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38858__auto__);
}));

return c__38856__auto__;
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
