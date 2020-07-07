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
var G__61340_61432 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__61341_61433 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61340_61432,G__61341_61433) : re_frame.core.reg_fx.call(null,G__61340_61432,G__61341_61433));
var G__61342_61434 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__61343_61435 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61342_61434,G__61343_61435) : re_frame.core.reg_fx.call(null,G__61342_61434,G__61343_61435));
var G__61344_61436 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__61345_61437 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61344_61436,G__61345_61437) : re_frame.core.reg_fx.call(null,G__61344_61436,G__61345_61437));
var G__61346_61438 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61347_61439 = (function (p__61348){
var map__61349 = p__61348;
var map__61349__$1 = (((((!((map__61349 == null))))?(((((map__61349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61349):map__61349);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61349__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61349__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61349__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61349__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61349__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__37014__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37015__auto__ = (function (){var switch__36947__auto__ = (function (state_61393){
var state_val_61394 = (state_61393[(1)]);
if((state_val_61394 === (7))){
var inst_61360 = (state_61393[(7)]);
var inst_61360__$1 = (state_61393[(2)]);
var inst_61362 = (inst_61360__$1 == null);
var inst_61363 = cljs.core.not(inst_61362);
var state_61393__$1 = (function (){var statearr_61395 = state_61393;
(statearr_61395[(7)] = inst_61360__$1);

return statearr_61395;
})();
if(inst_61363){
var statearr_61396_61440 = state_61393__$1;
(statearr_61396_61440[(1)] = (8));

} else {
var statearr_61397_61441 = state_61393__$1;
(statearr_61397_61441[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61394 === (1))){
var state_61393__$1 = state_61393;
var G__61398_61442 = method;
var G__61398_61443__$1 = (((G__61398_61442 instanceof cljs.core.Keyword))?G__61398_61442.fqn:null);
switch (G__61398_61443__$1) {
case "post":
var statearr_61399_61445 = state_61393__$1;
(statearr_61399_61445[(1)] = (3));


break;
case "get":
var statearr_61400_61446 = state_61393__$1;
(statearr_61400_61446[(1)] = (4));


break;
case "put":
var statearr_61401_61447 = state_61393__$1;
(statearr_61401_61447[(1)] = (5));


break;
case "delete":
var statearr_61402_61448 = state_61393__$1;
(statearr_61402_61448[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61398_61443__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61394 === (4))){
var state_61393__$1 = state_61393;
var statearr_61403_61449 = state_61393__$1;
(statearr_61403_61449[(2)] = cljs_http.client.get);

(statearr_61403_61449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61394 === (15))){
var inst_61360 = (state_61393[(7)]);
var state_61393__$1 = state_61393;
var statearr_61404_61450 = state_61393__$1;
(statearr_61404_61450[(2)] = inst_61360);

(statearr_61404_61450[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61394 === (13))){
var inst_61373 = (state_61393[(2)]);
var state_61393__$1 = state_61393;
var statearr_61405_61451 = state_61393__$1;
(statearr_61405_61451[(2)] = inst_61373);

(statearr_61405_61451[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61394 === (6))){
var state_61393__$1 = state_61393;
var statearr_61406_61452 = state_61393__$1;
(statearr_61406_61452[(2)] = cljs_http.client.delete$);

(statearr_61406_61452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61394 === (17))){
var inst_61383 = (state_61393[(8)]);
var inst_61385 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61383);
var inst_61386 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61385) : re_frame.core.dispatch.call(null,inst_61385));
var state_61393__$1 = state_61393;
var statearr_61407_61453 = state_61393__$1;
(statearr_61407_61453[(2)] = inst_61386);

(statearr_61407_61453[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61394 === (3))){
var state_61393__$1 = state_61393;
var statearr_61408_61454 = state_61393__$1;
(statearr_61408_61454[(2)] = cljs_http.client.post);

(statearr_61408_61454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61394 === (12))){
var state_61393__$1 = state_61393;
var statearr_61409_61455 = state_61393__$1;
(statearr_61409_61455[(2)] = false);

(statearr_61409_61455[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61394 === (2))){
var inst_61357 = (state_61393[(2)]);
var inst_61358 = (inst_61357.cljs$core$IFn$_invoke$arity$2 ? inst_61357.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61357.call(null,url,opts));
var state_61393__$1 = state_61393;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61393__$1,(7),inst_61358);
} else {
if((state_val_61394 === (19))){
var inst_61391 = (state_61393[(2)]);
var state_61393__$1 = state_61393;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61393__$1,inst_61391);
} else {
if((state_val_61394 === (11))){
var state_61393__$1 = state_61393;
var statearr_61410_61456 = state_61393__$1;
(statearr_61410_61456[(2)] = true);

(statearr_61410_61456[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61394 === (9))){
var state_61393__$1 = state_61393;
var statearr_61411_61457 = state_61393__$1;
(statearr_61411_61457[(2)] = false);

(statearr_61411_61457[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61394 === (5))){
var state_61393__$1 = state_61393;
var statearr_61412_61458 = state_61393__$1;
(statearr_61412_61458[(2)] = cljs_http.client.put);

(statearr_61412_61458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61394 === (14))){
var inst_61360 = (state_61393[(7)]);
var inst_61378 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61360);
var state_61393__$1 = state_61393;
var statearr_61413_61459 = state_61393__$1;
(statearr_61413_61459[(2)] = inst_61378);

(statearr_61413_61459[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61394 === (16))){
var inst_61381 = (state_61393[(9)]);
var inst_61381__$1 = (state_61393[(2)]);
var inst_61382 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61381__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61381__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61393__$1 = (function (){var statearr_61414 = state_61393;
(statearr_61414[(9)] = inst_61381__$1);

(statearr_61414[(8)] = inst_61383);

return statearr_61414;
})();
if(cljs.core.truth_(inst_61382)){
var statearr_61415_61460 = state_61393__$1;
(statearr_61415_61460[(1)] = (17));

} else {
var statearr_61416_61461 = state_61393__$1;
(statearr_61416_61461[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61394 === (10))){
var inst_61376 = (state_61393[(2)]);
var state_61393__$1 = state_61393;
if(cljs.core.truth_(inst_61376)){
var statearr_61417_61462 = state_61393__$1;
(statearr_61417_61462[(1)] = (14));

} else {
var statearr_61418_61463 = state_61393__$1;
(statearr_61418_61463[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61394 === (18))){
var inst_61381 = (state_61393[(9)]);
var inst_61388 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61381);
var inst_61389 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61388) : re_frame.core.dispatch.call(null,inst_61388));
var state_61393__$1 = state_61393;
var statearr_61419_61464 = state_61393__$1;
(statearr_61419_61464[(2)] = inst_61389);

(statearr_61419_61464[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61394 === (8))){
var inst_61360 = (state_61393[(7)]);
var inst_61365 = inst_61360.cljs$lang$protocol_mask$partition0$;
var inst_61366 = (inst_61365 & (64));
var inst_61367 = inst_61360.cljs$core$ISeq$;
var inst_61368 = (cljs.core.PROTOCOL_SENTINEL === inst_61367);
var inst_61369 = ((inst_61366) || (inst_61368));
var state_61393__$1 = state_61393;
if(cljs.core.truth_(inst_61369)){
var statearr_61420_61465 = state_61393__$1;
(statearr_61420_61465[(1)] = (11));

} else {
var statearr_61421_61466 = state_61393__$1;
(statearr_61421_61466[(1)] = (12));

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
var athens$effects$state_machine__36948__auto__ = null;
var athens$effects$state_machine__36948__auto____0 = (function (){
var statearr_61422 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61422[(0)] = athens$effects$state_machine__36948__auto__);

(statearr_61422[(1)] = (1));

return statearr_61422;
});
var athens$effects$state_machine__36948__auto____1 = (function (state_61393){
while(true){
var ret_value__36949__auto__ = (function (){try{while(true){
var result__36950__auto__ = switch__36947__auto__(state_61393);
if(cljs.core.keyword_identical_QMARK_(result__36950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36950__auto__;
}
break;
}
}catch (e61423){if((e61423 instanceof Object)){
var ex__36951__auto__ = e61423;
var statearr_61424_61467 = state_61393;
(statearr_61424_61467[(5)] = ex__36951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61423;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61468 = state_61393;
state_61393 = G__61468;
continue;
} else {
return ret_value__36949__auto__;
}
break;
}
});
athens$effects$state_machine__36948__auto__ = function(state_61393){
switch(arguments.length){
case 0:
return athens$effects$state_machine__36948__auto____0.call(this);
case 1:
return athens$effects$state_machine__36948__auto____1.call(this,state_61393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__36948__auto____0;
athens$effects$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__36948__auto____1;
return athens$effects$state_machine__36948__auto__;
})()
})();
var state__37016__auto__ = (function (){var statearr_61425 = (f__37015__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37015__auto__.cljs$core$IFn$_invoke$arity$0() : f__37015__auto__.call(null));
(statearr_61425[(6)] = c__37014__auto__);

return statearr_61425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37016__auto__);
}));

return c__37014__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61346_61438,G__61347_61439) : re_frame.core.reg_fx.call(null,G__61346_61438,G__61347_61439));
var G__61426_61469 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61427_61470 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61428){
var map__61429 = p__61428;
var map__61429__$1 = (((((!((map__61429 == null))))?(((((map__61429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61429):map__61429);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61429__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61429__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61429__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61429__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61431 = action;
var G__61431__$1 = (((G__61431 instanceof cljs.core.Keyword))?G__61431.fqn:null);
switch (G__61431__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61431__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61426_61469,G__61427_61470) : re_frame.core.reg_fx.call(null,G__61426_61469,G__61427_61470));

//# sourceMappingURL=athens.effects.js.map
