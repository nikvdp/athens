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
var G__61402_61494 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__61403_61495 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61402_61494,G__61403_61495) : re_frame.core.reg_fx.call(null,G__61402_61494,G__61403_61495));
var G__61404_61496 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__61405_61497 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61404_61496,G__61405_61497) : re_frame.core.reg_fx.call(null,G__61404_61496,G__61405_61497));
var G__61406_61498 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__61407_61499 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61406_61498,G__61407_61499) : re_frame.core.reg_fx.call(null,G__61406_61498,G__61407_61499));
var G__61408_61500 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61409_61501 = (function (p__61410){
var map__61411 = p__61410;
var map__61411__$1 = (((((!((map__61411 == null))))?(((((map__61411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61411):map__61411);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61411__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61411__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61411__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61411__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61411__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__37014__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37015__auto__ = (function (){var switch__36947__auto__ = (function (state_61455){
var state_val_61456 = (state_61455[(1)]);
if((state_val_61456 === (7))){
var inst_61422 = (state_61455[(7)]);
var inst_61422__$1 = (state_61455[(2)]);
var inst_61424 = (inst_61422__$1 == null);
var inst_61425 = cljs.core.not(inst_61424);
var state_61455__$1 = (function (){var statearr_61457 = state_61455;
(statearr_61457[(7)] = inst_61422__$1);

return statearr_61457;
})();
if(inst_61425){
var statearr_61458_61502 = state_61455__$1;
(statearr_61458_61502[(1)] = (8));

} else {
var statearr_61459_61503 = state_61455__$1;
(statearr_61459_61503[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61456 === (1))){
var state_61455__$1 = state_61455;
var G__61460_61504 = method;
var G__61460_61505__$1 = (((G__61460_61504 instanceof cljs.core.Keyword))?G__61460_61504.fqn:null);
switch (G__61460_61505__$1) {
case "post":
var statearr_61461_61507 = state_61455__$1;
(statearr_61461_61507[(1)] = (3));


break;
case "get":
var statearr_61462_61508 = state_61455__$1;
(statearr_61462_61508[(1)] = (4));


break;
case "put":
var statearr_61463_61509 = state_61455__$1;
(statearr_61463_61509[(1)] = (5));


break;
case "delete":
var statearr_61464_61510 = state_61455__$1;
(statearr_61464_61510[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61460_61505__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61456 === (4))){
var state_61455__$1 = state_61455;
var statearr_61465_61511 = state_61455__$1;
(statearr_61465_61511[(2)] = cljs_http.client.get);

(statearr_61465_61511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61456 === (15))){
var inst_61422 = (state_61455[(7)]);
var state_61455__$1 = state_61455;
var statearr_61466_61512 = state_61455__$1;
(statearr_61466_61512[(2)] = inst_61422);

(statearr_61466_61512[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61456 === (13))){
var inst_61435 = (state_61455[(2)]);
var state_61455__$1 = state_61455;
var statearr_61467_61513 = state_61455__$1;
(statearr_61467_61513[(2)] = inst_61435);

(statearr_61467_61513[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61456 === (6))){
var state_61455__$1 = state_61455;
var statearr_61468_61514 = state_61455__$1;
(statearr_61468_61514[(2)] = cljs_http.client.delete$);

(statearr_61468_61514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61456 === (17))){
var inst_61445 = (state_61455[(8)]);
var inst_61447 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61445);
var inst_61448 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61447) : re_frame.core.dispatch.call(null,inst_61447));
var state_61455__$1 = state_61455;
var statearr_61469_61515 = state_61455__$1;
(statearr_61469_61515[(2)] = inst_61448);

(statearr_61469_61515[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61456 === (3))){
var state_61455__$1 = state_61455;
var statearr_61470_61516 = state_61455__$1;
(statearr_61470_61516[(2)] = cljs_http.client.post);

(statearr_61470_61516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61456 === (12))){
var state_61455__$1 = state_61455;
var statearr_61471_61517 = state_61455__$1;
(statearr_61471_61517[(2)] = false);

(statearr_61471_61517[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61456 === (2))){
var inst_61419 = (state_61455[(2)]);
var inst_61420 = (inst_61419.cljs$core$IFn$_invoke$arity$2 ? inst_61419.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61419.call(null,url,opts));
var state_61455__$1 = state_61455;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61455__$1,(7),inst_61420);
} else {
if((state_val_61456 === (19))){
var inst_61453 = (state_61455[(2)]);
var state_61455__$1 = state_61455;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61455__$1,inst_61453);
} else {
if((state_val_61456 === (11))){
var state_61455__$1 = state_61455;
var statearr_61472_61518 = state_61455__$1;
(statearr_61472_61518[(2)] = true);

(statearr_61472_61518[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61456 === (9))){
var state_61455__$1 = state_61455;
var statearr_61473_61519 = state_61455__$1;
(statearr_61473_61519[(2)] = false);

(statearr_61473_61519[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61456 === (5))){
var state_61455__$1 = state_61455;
var statearr_61474_61520 = state_61455__$1;
(statearr_61474_61520[(2)] = cljs_http.client.put);

(statearr_61474_61520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61456 === (14))){
var inst_61422 = (state_61455[(7)]);
var inst_61440 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61422);
var state_61455__$1 = state_61455;
var statearr_61475_61521 = state_61455__$1;
(statearr_61475_61521[(2)] = inst_61440);

(statearr_61475_61521[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61456 === (16))){
var inst_61443 = (state_61455[(9)]);
var inst_61443__$1 = (state_61455[(2)]);
var inst_61444 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61443__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61445 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61443__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61455__$1 = (function (){var statearr_61476 = state_61455;
(statearr_61476[(8)] = inst_61445);

(statearr_61476[(9)] = inst_61443__$1);

return statearr_61476;
})();
if(cljs.core.truth_(inst_61444)){
var statearr_61477_61522 = state_61455__$1;
(statearr_61477_61522[(1)] = (17));

} else {
var statearr_61478_61523 = state_61455__$1;
(statearr_61478_61523[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61456 === (10))){
var inst_61438 = (state_61455[(2)]);
var state_61455__$1 = state_61455;
if(cljs.core.truth_(inst_61438)){
var statearr_61479_61524 = state_61455__$1;
(statearr_61479_61524[(1)] = (14));

} else {
var statearr_61480_61525 = state_61455__$1;
(statearr_61480_61525[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61456 === (18))){
var inst_61443 = (state_61455[(9)]);
var inst_61450 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61443);
var inst_61451 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61450) : re_frame.core.dispatch.call(null,inst_61450));
var state_61455__$1 = state_61455;
var statearr_61481_61526 = state_61455__$1;
(statearr_61481_61526[(2)] = inst_61451);

(statearr_61481_61526[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61456 === (8))){
var inst_61422 = (state_61455[(7)]);
var inst_61427 = inst_61422.cljs$lang$protocol_mask$partition0$;
var inst_61428 = (inst_61427 & (64));
var inst_61429 = inst_61422.cljs$core$ISeq$;
var inst_61430 = (cljs.core.PROTOCOL_SENTINEL === inst_61429);
var inst_61431 = ((inst_61428) || (inst_61430));
var state_61455__$1 = state_61455;
if(cljs.core.truth_(inst_61431)){
var statearr_61482_61527 = state_61455__$1;
(statearr_61482_61527[(1)] = (11));

} else {
var statearr_61483_61528 = state_61455__$1;
(statearr_61483_61528[(1)] = (12));

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
var statearr_61484 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61484[(0)] = athens$effects$state_machine__36948__auto__);

(statearr_61484[(1)] = (1));

return statearr_61484;
});
var athens$effects$state_machine__36948__auto____1 = (function (state_61455){
while(true){
var ret_value__36949__auto__ = (function (){try{while(true){
var result__36950__auto__ = switch__36947__auto__(state_61455);
if(cljs.core.keyword_identical_QMARK_(result__36950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36950__auto__;
}
break;
}
}catch (e61485){if((e61485 instanceof Object)){
var ex__36951__auto__ = e61485;
var statearr_61486_61529 = state_61455;
(statearr_61486_61529[(5)] = ex__36951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61485;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61530 = state_61455;
state_61455 = G__61530;
continue;
} else {
return ret_value__36949__auto__;
}
break;
}
});
athens$effects$state_machine__36948__auto__ = function(state_61455){
switch(arguments.length){
case 0:
return athens$effects$state_machine__36948__auto____0.call(this);
case 1:
return athens$effects$state_machine__36948__auto____1.call(this,state_61455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__36948__auto____0;
athens$effects$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__36948__auto____1;
return athens$effects$state_machine__36948__auto__;
})()
})();
var state__37016__auto__ = (function (){var statearr_61487 = (f__37015__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37015__auto__.cljs$core$IFn$_invoke$arity$0() : f__37015__auto__.call(null));
(statearr_61487[(6)] = c__37014__auto__);

return statearr_61487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37016__auto__);
}));

return c__37014__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61408_61500,G__61409_61501) : re_frame.core.reg_fx.call(null,G__61408_61500,G__61409_61501));
var G__61488_61531 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61489_61532 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61490){
var map__61491 = p__61490;
var map__61491__$1 = (((((!((map__61491 == null))))?(((((map__61491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61491):map__61491);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61491__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61491__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61491__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61491__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61493 = action;
var G__61493__$1 = (((G__61493 instanceof cljs.core.Keyword))?G__61493.fqn:null);
switch (G__61493__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61493__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61488_61531,G__61489_61532) : re_frame.core.reg_fx.call(null,G__61488_61531,G__61489_61532));

//# sourceMappingURL=athens.effects.js.map
