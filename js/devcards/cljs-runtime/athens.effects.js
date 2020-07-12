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
var G__61403_61495 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__61404_61496 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61403_61495,G__61404_61496) : re_frame.core.reg_fx.call(null,G__61403_61495,G__61404_61496));
var G__61405_61497 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__61406_61498 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61405_61497,G__61406_61498) : re_frame.core.reg_fx.call(null,G__61405_61497,G__61406_61498));
var G__61407_61499 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__61408_61500 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61407_61499,G__61408_61500) : re_frame.core.reg_fx.call(null,G__61407_61499,G__61408_61500));
var G__61409_61501 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61410_61502 = (function (p__61411){
var map__61412 = p__61411;
var map__61412__$1 = (((((!((map__61412 == null))))?(((((map__61412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61412):map__61412);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61412__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61412__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61412__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61412__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61412__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__37015__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37016__auto__ = (function (){var switch__36947__auto__ = (function (state_61456){
var state_val_61457 = (state_61456[(1)]);
if((state_val_61457 === (7))){
var inst_61423 = (state_61456[(7)]);
var inst_61423__$1 = (state_61456[(2)]);
var inst_61425 = (inst_61423__$1 == null);
var inst_61426 = cljs.core.not(inst_61425);
var state_61456__$1 = (function (){var statearr_61458 = state_61456;
(statearr_61458[(7)] = inst_61423__$1);

return statearr_61458;
})();
if(inst_61426){
var statearr_61459_61503 = state_61456__$1;
(statearr_61459_61503[(1)] = (8));

} else {
var statearr_61460_61504 = state_61456__$1;
(statearr_61460_61504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61457 === (1))){
var state_61456__$1 = state_61456;
var G__61461_61505 = method;
var G__61461_61506__$1 = (((G__61461_61505 instanceof cljs.core.Keyword))?G__61461_61505.fqn:null);
switch (G__61461_61506__$1) {
case "post":
var statearr_61462_61508 = state_61456__$1;
(statearr_61462_61508[(1)] = (3));


break;
case "get":
var statearr_61463_61509 = state_61456__$1;
(statearr_61463_61509[(1)] = (4));


break;
case "put":
var statearr_61464_61510 = state_61456__$1;
(statearr_61464_61510[(1)] = (5));


break;
case "delete":
var statearr_61465_61511 = state_61456__$1;
(statearr_61465_61511[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61461_61506__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61457 === (4))){
var state_61456__$1 = state_61456;
var statearr_61466_61512 = state_61456__$1;
(statearr_61466_61512[(2)] = cljs_http.client.get);

(statearr_61466_61512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61457 === (15))){
var inst_61423 = (state_61456[(7)]);
var state_61456__$1 = state_61456;
var statearr_61467_61513 = state_61456__$1;
(statearr_61467_61513[(2)] = inst_61423);

(statearr_61467_61513[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61457 === (13))){
var inst_61436 = (state_61456[(2)]);
var state_61456__$1 = state_61456;
var statearr_61468_61514 = state_61456__$1;
(statearr_61468_61514[(2)] = inst_61436);

(statearr_61468_61514[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61457 === (6))){
var state_61456__$1 = state_61456;
var statearr_61469_61515 = state_61456__$1;
(statearr_61469_61515[(2)] = cljs_http.client.delete$);

(statearr_61469_61515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61457 === (17))){
var inst_61446 = (state_61456[(8)]);
var inst_61448 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61446);
var inst_61449 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61448) : re_frame.core.dispatch.call(null,inst_61448));
var state_61456__$1 = state_61456;
var statearr_61470_61516 = state_61456__$1;
(statearr_61470_61516[(2)] = inst_61449);

(statearr_61470_61516[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61457 === (3))){
var state_61456__$1 = state_61456;
var statearr_61471_61517 = state_61456__$1;
(statearr_61471_61517[(2)] = cljs_http.client.post);

(statearr_61471_61517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61457 === (12))){
var state_61456__$1 = state_61456;
var statearr_61472_61518 = state_61456__$1;
(statearr_61472_61518[(2)] = false);

(statearr_61472_61518[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61457 === (2))){
var inst_61420 = (state_61456[(2)]);
var inst_61421 = (inst_61420.cljs$core$IFn$_invoke$arity$2 ? inst_61420.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61420.call(null,url,opts));
var state_61456__$1 = state_61456;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61456__$1,(7),inst_61421);
} else {
if((state_val_61457 === (19))){
var inst_61454 = (state_61456[(2)]);
var state_61456__$1 = state_61456;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61456__$1,inst_61454);
} else {
if((state_val_61457 === (11))){
var state_61456__$1 = state_61456;
var statearr_61473_61519 = state_61456__$1;
(statearr_61473_61519[(2)] = true);

(statearr_61473_61519[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61457 === (9))){
var state_61456__$1 = state_61456;
var statearr_61474_61520 = state_61456__$1;
(statearr_61474_61520[(2)] = false);

(statearr_61474_61520[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61457 === (5))){
var state_61456__$1 = state_61456;
var statearr_61475_61521 = state_61456__$1;
(statearr_61475_61521[(2)] = cljs_http.client.put);

(statearr_61475_61521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61457 === (14))){
var inst_61423 = (state_61456[(7)]);
var inst_61441 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61423);
var state_61456__$1 = state_61456;
var statearr_61476_61522 = state_61456__$1;
(statearr_61476_61522[(2)] = inst_61441);

(statearr_61476_61522[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61457 === (16))){
var inst_61444 = (state_61456[(9)]);
var inst_61444__$1 = (state_61456[(2)]);
var inst_61445 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61444__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61446 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61444__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61456__$1 = (function (){var statearr_61477 = state_61456;
(statearr_61477[(9)] = inst_61444__$1);

(statearr_61477[(8)] = inst_61446);

return statearr_61477;
})();
if(cljs.core.truth_(inst_61445)){
var statearr_61478_61523 = state_61456__$1;
(statearr_61478_61523[(1)] = (17));

} else {
var statearr_61479_61524 = state_61456__$1;
(statearr_61479_61524[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61457 === (10))){
var inst_61439 = (state_61456[(2)]);
var state_61456__$1 = state_61456;
if(cljs.core.truth_(inst_61439)){
var statearr_61480_61525 = state_61456__$1;
(statearr_61480_61525[(1)] = (14));

} else {
var statearr_61481_61526 = state_61456__$1;
(statearr_61481_61526[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61457 === (18))){
var inst_61444 = (state_61456[(9)]);
var inst_61451 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61444);
var inst_61452 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61451) : re_frame.core.dispatch.call(null,inst_61451));
var state_61456__$1 = state_61456;
var statearr_61482_61527 = state_61456__$1;
(statearr_61482_61527[(2)] = inst_61452);

(statearr_61482_61527[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61457 === (8))){
var inst_61423 = (state_61456[(7)]);
var inst_61428 = inst_61423.cljs$lang$protocol_mask$partition0$;
var inst_61429 = (inst_61428 & (64));
var inst_61430 = inst_61423.cljs$core$ISeq$;
var inst_61431 = (cljs.core.PROTOCOL_SENTINEL === inst_61430);
var inst_61432 = ((inst_61429) || (inst_61431));
var state_61456__$1 = state_61456;
if(cljs.core.truth_(inst_61432)){
var statearr_61483_61528 = state_61456__$1;
(statearr_61483_61528[(1)] = (11));

} else {
var statearr_61484_61529 = state_61456__$1;
(statearr_61484_61529[(1)] = (12));

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
var statearr_61485 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61485[(0)] = athens$effects$state_machine__36948__auto__);

(statearr_61485[(1)] = (1));

return statearr_61485;
});
var athens$effects$state_machine__36948__auto____1 = (function (state_61456){
while(true){
var ret_value__36949__auto__ = (function (){try{while(true){
var result__36950__auto__ = switch__36947__auto__(state_61456);
if(cljs.core.keyword_identical_QMARK_(result__36950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36950__auto__;
}
break;
}
}catch (e61486){if((e61486 instanceof Object)){
var ex__36951__auto__ = e61486;
var statearr_61487_61530 = state_61456;
(statearr_61487_61530[(5)] = ex__36951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61486;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61531 = state_61456;
state_61456 = G__61531;
continue;
} else {
return ret_value__36949__auto__;
}
break;
}
});
athens$effects$state_machine__36948__auto__ = function(state_61456){
switch(arguments.length){
case 0:
return athens$effects$state_machine__36948__auto____0.call(this);
case 1:
return athens$effects$state_machine__36948__auto____1.call(this,state_61456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__36948__auto____0;
athens$effects$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__36948__auto____1;
return athens$effects$state_machine__36948__auto__;
})()
})();
var state__37017__auto__ = (function (){var statearr_61488 = (f__37016__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37016__auto__.cljs$core$IFn$_invoke$arity$0() : f__37016__auto__.call(null));
(statearr_61488[(6)] = c__37015__auto__);

return statearr_61488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37017__auto__);
}));

return c__37015__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61409_61501,G__61410_61502) : re_frame.core.reg_fx.call(null,G__61409_61501,G__61410_61502));
var G__61489_61532 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61490_61533 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61491){
var map__61492 = p__61491;
var map__61492__$1 = (((((!((map__61492 == null))))?(((((map__61492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61492):map__61492);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61492__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61492__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61492__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61492__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61494 = action;
var G__61494__$1 = (((G__61494 instanceof cljs.core.Keyword))?G__61494.fqn:null);
switch (G__61494__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61494__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61489_61532,G__61490_61533) : re_frame.core.reg_fx.call(null,G__61489_61532,G__61490_61533));

//# sourceMappingURL=athens.effects.js.map
