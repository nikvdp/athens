goog.provide('athens.effects');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljs.pprint');
goog.require('datascript.core');
goog.require('datascript.transit');
goog.require('day8.re_frame.async_flow_fx');
goog.require('posh.reagent');
goog.require('re_frame.core');
var G__61311_61403 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__61312_61404 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61311_61403,G__61312_61404) : re_frame.core.reg_fx.call(null,G__61311_61403,G__61312_61404));
var G__61313_61405 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__61314_61406 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61313_61405,G__61314_61406) : re_frame.core.reg_fx.call(null,G__61313_61405,G__61314_61406));
var G__61315_61407 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__61316_61408 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61315_61407,G__61316_61408) : re_frame.core.reg_fx.call(null,G__61315_61407,G__61316_61408));
var G__61317_61409 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61318_61410 = (function (p__61319){
var map__61320 = p__61319;
var map__61320__$1 = (((((!((map__61320 == null))))?(((((map__61320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61320):map__61320);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61320__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61320__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61320__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61320__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61320__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__36998__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36999__auto__ = (function (){var switch__36931__auto__ = (function (state_61364){
var state_val_61365 = (state_61364[(1)]);
if((state_val_61365 === (7))){
var inst_61331 = (state_61364[(7)]);
var inst_61331__$1 = (state_61364[(2)]);
var inst_61333 = (inst_61331__$1 == null);
var inst_61334 = cljs.core.not(inst_61333);
var state_61364__$1 = (function (){var statearr_61366 = state_61364;
(statearr_61366[(7)] = inst_61331__$1);

return statearr_61366;
})();
if(inst_61334){
var statearr_61367_61411 = state_61364__$1;
(statearr_61367_61411[(1)] = (8));

} else {
var statearr_61368_61412 = state_61364__$1;
(statearr_61368_61412[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (1))){
var state_61364__$1 = state_61364;
var G__61369_61413 = method;
var G__61369_61414__$1 = (((G__61369_61413 instanceof cljs.core.Keyword))?G__61369_61413.fqn:null);
switch (G__61369_61414__$1) {
case "post":
var statearr_61370_61416 = state_61364__$1;
(statearr_61370_61416[(1)] = (3));


break;
case "get":
var statearr_61371_61417 = state_61364__$1;
(statearr_61371_61417[(1)] = (4));


break;
case "put":
var statearr_61372_61418 = state_61364__$1;
(statearr_61372_61418[(1)] = (5));


break;
case "delete":
var statearr_61373_61419 = state_61364__$1;
(statearr_61373_61419[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61369_61414__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (4))){
var state_61364__$1 = state_61364;
var statearr_61374_61420 = state_61364__$1;
(statearr_61374_61420[(2)] = cljs_http.client.get);

(statearr_61374_61420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (15))){
var inst_61331 = (state_61364[(7)]);
var state_61364__$1 = state_61364;
var statearr_61375_61421 = state_61364__$1;
(statearr_61375_61421[(2)] = inst_61331);

(statearr_61375_61421[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (13))){
var inst_61344 = (state_61364[(2)]);
var state_61364__$1 = state_61364;
var statearr_61376_61422 = state_61364__$1;
(statearr_61376_61422[(2)] = inst_61344);

(statearr_61376_61422[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (6))){
var state_61364__$1 = state_61364;
var statearr_61377_61423 = state_61364__$1;
(statearr_61377_61423[(2)] = cljs_http.client.delete$);

(statearr_61377_61423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (17))){
var inst_61354 = (state_61364[(8)]);
var inst_61356 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61354);
var inst_61357 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61356) : re_frame.core.dispatch.call(null,inst_61356));
var state_61364__$1 = state_61364;
var statearr_61378_61424 = state_61364__$1;
(statearr_61378_61424[(2)] = inst_61357);

(statearr_61378_61424[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (3))){
var state_61364__$1 = state_61364;
var statearr_61379_61425 = state_61364__$1;
(statearr_61379_61425[(2)] = cljs_http.client.post);

(statearr_61379_61425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (12))){
var state_61364__$1 = state_61364;
var statearr_61380_61426 = state_61364__$1;
(statearr_61380_61426[(2)] = false);

(statearr_61380_61426[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (2))){
var inst_61328 = (state_61364[(2)]);
var inst_61329 = (inst_61328.cljs$core$IFn$_invoke$arity$2 ? inst_61328.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61328.call(null,url,opts));
var state_61364__$1 = state_61364;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61364__$1,(7),inst_61329);
} else {
if((state_val_61365 === (19))){
var inst_61362 = (state_61364[(2)]);
var state_61364__$1 = state_61364;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61364__$1,inst_61362);
} else {
if((state_val_61365 === (11))){
var state_61364__$1 = state_61364;
var statearr_61381_61427 = state_61364__$1;
(statearr_61381_61427[(2)] = true);

(statearr_61381_61427[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (9))){
var state_61364__$1 = state_61364;
var statearr_61382_61428 = state_61364__$1;
(statearr_61382_61428[(2)] = false);

(statearr_61382_61428[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (5))){
var state_61364__$1 = state_61364;
var statearr_61383_61429 = state_61364__$1;
(statearr_61383_61429[(2)] = cljs_http.client.put);

(statearr_61383_61429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (14))){
var inst_61331 = (state_61364[(7)]);
var inst_61349 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61331);
var state_61364__$1 = state_61364;
var statearr_61384_61430 = state_61364__$1;
(statearr_61384_61430[(2)] = inst_61349);

(statearr_61384_61430[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (16))){
var inst_61352 = (state_61364[(9)]);
var inst_61352__$1 = (state_61364[(2)]);
var inst_61353 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61352__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61352__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61364__$1 = (function (){var statearr_61385 = state_61364;
(statearr_61385[(8)] = inst_61354);

(statearr_61385[(9)] = inst_61352__$1);

return statearr_61385;
})();
if(cljs.core.truth_(inst_61353)){
var statearr_61386_61431 = state_61364__$1;
(statearr_61386_61431[(1)] = (17));

} else {
var statearr_61387_61432 = state_61364__$1;
(statearr_61387_61432[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (10))){
var inst_61347 = (state_61364[(2)]);
var state_61364__$1 = state_61364;
if(cljs.core.truth_(inst_61347)){
var statearr_61388_61433 = state_61364__$1;
(statearr_61388_61433[(1)] = (14));

} else {
var statearr_61389_61434 = state_61364__$1;
(statearr_61389_61434[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (18))){
var inst_61352 = (state_61364[(9)]);
var inst_61359 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61352);
var inst_61360 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61359) : re_frame.core.dispatch.call(null,inst_61359));
var state_61364__$1 = state_61364;
var statearr_61390_61435 = state_61364__$1;
(statearr_61390_61435[(2)] = inst_61360);

(statearr_61390_61435[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (8))){
var inst_61331 = (state_61364[(7)]);
var inst_61336 = inst_61331.cljs$lang$protocol_mask$partition0$;
var inst_61337 = (inst_61336 & (64));
var inst_61338 = inst_61331.cljs$core$ISeq$;
var inst_61339 = (cljs.core.PROTOCOL_SENTINEL === inst_61338);
var inst_61340 = ((inst_61337) || (inst_61339));
var state_61364__$1 = state_61364;
if(cljs.core.truth_(inst_61340)){
var statearr_61391_61436 = state_61364__$1;
(statearr_61391_61436[(1)] = (11));

} else {
var statearr_61392_61437 = state_61364__$1;
(statearr_61392_61437[(1)] = (12));

}

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
}
}
}
}
}
});
return (function() {
var athens$effects$state_machine__36932__auto__ = null;
var athens$effects$state_machine__36932__auto____0 = (function (){
var statearr_61393 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61393[(0)] = athens$effects$state_machine__36932__auto__);

(statearr_61393[(1)] = (1));

return statearr_61393;
});
var athens$effects$state_machine__36932__auto____1 = (function (state_61364){
while(true){
var ret_value__36933__auto__ = (function (){try{while(true){
var result__36934__auto__ = switch__36931__auto__(state_61364);
if(cljs.core.keyword_identical_QMARK_(result__36934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36934__auto__;
}
break;
}
}catch (e61394){if((e61394 instanceof Object)){
var ex__36935__auto__ = e61394;
var statearr_61395_61438 = state_61364;
(statearr_61395_61438[(5)] = ex__36935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61394;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61439 = state_61364;
state_61364 = G__61439;
continue;
} else {
return ret_value__36933__auto__;
}
break;
}
});
athens$effects$state_machine__36932__auto__ = function(state_61364){
switch(arguments.length){
case 0:
return athens$effects$state_machine__36932__auto____0.call(this);
case 1:
return athens$effects$state_machine__36932__auto____1.call(this,state_61364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__36932__auto____0;
athens$effects$state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__36932__auto____1;
return athens$effects$state_machine__36932__auto__;
})()
})();
var state__37000__auto__ = (function (){var statearr_61396 = (f__36999__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36999__auto__.cljs$core$IFn$_invoke$arity$0() : f__36999__auto__.call(null));
(statearr_61396[(6)] = c__36998__auto__);

return statearr_61396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37000__auto__);
}));

return c__36998__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61317_61409,G__61318_61410) : re_frame.core.reg_fx.call(null,G__61317_61409,G__61318_61410));
var G__61397_61440 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61398_61441 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61399){
var map__61400 = p__61399;
var map__61400__$1 = (((((!((map__61400 == null))))?(((((map__61400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61400):map__61400);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61400__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61400__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61400__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61400__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61402 = action;
var G__61402__$1 = (((G__61402 instanceof cljs.core.Keyword))?G__61402.fqn:null);
switch (G__61402__$1) {
case "start":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(timers,cljs.core.assoc,id,setTimeout((function (){
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(event) : re_frame.core.dispatch.call(null,event));
}),wait));

break;
case "clear":
clearTimeout(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(timers),id));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(timers,cljs.core.dissoc,id);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61402__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61397_61440,G__61398_61441) : re_frame.core.reg_fx.call(null,G__61397_61440,G__61398_61441));

//# sourceMappingURL=athens.effects.js.map
