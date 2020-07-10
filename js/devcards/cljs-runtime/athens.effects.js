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
var G__61376_61468 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__61377_61469 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61376_61468,G__61377_61469) : re_frame.core.reg_fx.call(null,G__61376_61468,G__61377_61469));
var G__61378_61470 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__61379_61471 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61378_61470,G__61379_61471) : re_frame.core.reg_fx.call(null,G__61378_61470,G__61379_61471));
var G__61380_61472 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__61381_61473 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61380_61472,G__61381_61473) : re_frame.core.reg_fx.call(null,G__61380_61472,G__61381_61473));
var G__61382_61474 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61383_61475 = (function (p__61384){
var map__61385 = p__61384;
var map__61385__$1 = (((((!((map__61385 == null))))?(((((map__61385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61385):map__61385);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61385__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61385__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61385__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61385__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61385__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__37015__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37016__auto__ = (function (){var switch__36947__auto__ = (function (state_61429){
var state_val_61430 = (state_61429[(1)]);
if((state_val_61430 === (7))){
var inst_61396 = (state_61429[(7)]);
var inst_61396__$1 = (state_61429[(2)]);
var inst_61398 = (inst_61396__$1 == null);
var inst_61399 = cljs.core.not(inst_61398);
var state_61429__$1 = (function (){var statearr_61431 = state_61429;
(statearr_61431[(7)] = inst_61396__$1);

return statearr_61431;
})();
if(inst_61399){
var statearr_61432_61476 = state_61429__$1;
(statearr_61432_61476[(1)] = (8));

} else {
var statearr_61433_61477 = state_61429__$1;
(statearr_61433_61477[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61430 === (1))){
var state_61429__$1 = state_61429;
var G__61434_61478 = method;
var G__61434_61479__$1 = (((G__61434_61478 instanceof cljs.core.Keyword))?G__61434_61478.fqn:null);
switch (G__61434_61479__$1) {
case "post":
var statearr_61435_61481 = state_61429__$1;
(statearr_61435_61481[(1)] = (3));


break;
case "get":
var statearr_61436_61482 = state_61429__$1;
(statearr_61436_61482[(1)] = (4));


break;
case "put":
var statearr_61437_61483 = state_61429__$1;
(statearr_61437_61483[(1)] = (5));


break;
case "delete":
var statearr_61438_61484 = state_61429__$1;
(statearr_61438_61484[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61434_61479__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61430 === (4))){
var state_61429__$1 = state_61429;
var statearr_61439_61485 = state_61429__$1;
(statearr_61439_61485[(2)] = cljs_http.client.get);

(statearr_61439_61485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61430 === (15))){
var inst_61396 = (state_61429[(7)]);
var state_61429__$1 = state_61429;
var statearr_61440_61486 = state_61429__$1;
(statearr_61440_61486[(2)] = inst_61396);

(statearr_61440_61486[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61430 === (13))){
var inst_61409 = (state_61429[(2)]);
var state_61429__$1 = state_61429;
var statearr_61441_61487 = state_61429__$1;
(statearr_61441_61487[(2)] = inst_61409);

(statearr_61441_61487[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61430 === (6))){
var state_61429__$1 = state_61429;
var statearr_61442_61488 = state_61429__$1;
(statearr_61442_61488[(2)] = cljs_http.client.delete$);

(statearr_61442_61488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61430 === (17))){
var inst_61419 = (state_61429[(8)]);
var inst_61421 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61419);
var inst_61422 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61421) : re_frame.core.dispatch.call(null,inst_61421));
var state_61429__$1 = state_61429;
var statearr_61443_61489 = state_61429__$1;
(statearr_61443_61489[(2)] = inst_61422);

(statearr_61443_61489[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61430 === (3))){
var state_61429__$1 = state_61429;
var statearr_61444_61490 = state_61429__$1;
(statearr_61444_61490[(2)] = cljs_http.client.post);

(statearr_61444_61490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61430 === (12))){
var state_61429__$1 = state_61429;
var statearr_61445_61491 = state_61429__$1;
(statearr_61445_61491[(2)] = false);

(statearr_61445_61491[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61430 === (2))){
var inst_61393 = (state_61429[(2)]);
var inst_61394 = (inst_61393.cljs$core$IFn$_invoke$arity$2 ? inst_61393.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61393.call(null,url,opts));
var state_61429__$1 = state_61429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61429__$1,(7),inst_61394);
} else {
if((state_val_61430 === (19))){
var inst_61427 = (state_61429[(2)]);
var state_61429__$1 = state_61429;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61429__$1,inst_61427);
} else {
if((state_val_61430 === (11))){
var state_61429__$1 = state_61429;
var statearr_61446_61492 = state_61429__$1;
(statearr_61446_61492[(2)] = true);

(statearr_61446_61492[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61430 === (9))){
var state_61429__$1 = state_61429;
var statearr_61447_61493 = state_61429__$1;
(statearr_61447_61493[(2)] = false);

(statearr_61447_61493[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61430 === (5))){
var state_61429__$1 = state_61429;
var statearr_61448_61494 = state_61429__$1;
(statearr_61448_61494[(2)] = cljs_http.client.put);

(statearr_61448_61494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61430 === (14))){
var inst_61396 = (state_61429[(7)]);
var inst_61414 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61396);
var state_61429__$1 = state_61429;
var statearr_61449_61495 = state_61429__$1;
(statearr_61449_61495[(2)] = inst_61414);

(statearr_61449_61495[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61430 === (16))){
var inst_61417 = (state_61429[(9)]);
var inst_61417__$1 = (state_61429[(2)]);
var inst_61418 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61417__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61417__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61429__$1 = (function (){var statearr_61450 = state_61429;
(statearr_61450[(9)] = inst_61417__$1);

(statearr_61450[(8)] = inst_61419);

return statearr_61450;
})();
if(cljs.core.truth_(inst_61418)){
var statearr_61451_61496 = state_61429__$1;
(statearr_61451_61496[(1)] = (17));

} else {
var statearr_61452_61497 = state_61429__$1;
(statearr_61452_61497[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61430 === (10))){
var inst_61412 = (state_61429[(2)]);
var state_61429__$1 = state_61429;
if(cljs.core.truth_(inst_61412)){
var statearr_61453_61498 = state_61429__$1;
(statearr_61453_61498[(1)] = (14));

} else {
var statearr_61454_61499 = state_61429__$1;
(statearr_61454_61499[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61430 === (18))){
var inst_61417 = (state_61429[(9)]);
var inst_61424 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61417);
var inst_61425 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61424) : re_frame.core.dispatch.call(null,inst_61424));
var state_61429__$1 = state_61429;
var statearr_61455_61500 = state_61429__$1;
(statearr_61455_61500[(2)] = inst_61425);

(statearr_61455_61500[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61430 === (8))){
var inst_61396 = (state_61429[(7)]);
var inst_61401 = inst_61396.cljs$lang$protocol_mask$partition0$;
var inst_61402 = (inst_61401 & (64));
var inst_61403 = inst_61396.cljs$core$ISeq$;
var inst_61404 = (cljs.core.PROTOCOL_SENTINEL === inst_61403);
var inst_61405 = ((inst_61402) || (inst_61404));
var state_61429__$1 = state_61429;
if(cljs.core.truth_(inst_61405)){
var statearr_61456_61501 = state_61429__$1;
(statearr_61456_61501[(1)] = (11));

} else {
var statearr_61457_61502 = state_61429__$1;
(statearr_61457_61502[(1)] = (12));

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
var statearr_61458 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61458[(0)] = athens$effects$state_machine__36948__auto__);

(statearr_61458[(1)] = (1));

return statearr_61458;
});
var athens$effects$state_machine__36948__auto____1 = (function (state_61429){
while(true){
var ret_value__36949__auto__ = (function (){try{while(true){
var result__36950__auto__ = switch__36947__auto__(state_61429);
if(cljs.core.keyword_identical_QMARK_(result__36950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36950__auto__;
}
break;
}
}catch (e61459){if((e61459 instanceof Object)){
var ex__36951__auto__ = e61459;
var statearr_61460_61503 = state_61429;
(statearr_61460_61503[(5)] = ex__36951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61459;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61504 = state_61429;
state_61429 = G__61504;
continue;
} else {
return ret_value__36949__auto__;
}
break;
}
});
athens$effects$state_machine__36948__auto__ = function(state_61429){
switch(arguments.length){
case 0:
return athens$effects$state_machine__36948__auto____0.call(this);
case 1:
return athens$effects$state_machine__36948__auto____1.call(this,state_61429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__36948__auto____0;
athens$effects$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__36948__auto____1;
return athens$effects$state_machine__36948__auto__;
})()
})();
var state__37017__auto__ = (function (){var statearr_61461 = (f__37016__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37016__auto__.cljs$core$IFn$_invoke$arity$0() : f__37016__auto__.call(null));
(statearr_61461[(6)] = c__37015__auto__);

return statearr_61461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37017__auto__);
}));

return c__37015__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61382_61474,G__61383_61475) : re_frame.core.reg_fx.call(null,G__61382_61474,G__61383_61475));
var G__61462_61505 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61463_61506 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61464){
var map__61465 = p__61464;
var map__61465__$1 = (((((!((map__61465 == null))))?(((((map__61465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61465):map__61465);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61465__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61465__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61465__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61465__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61467 = action;
var G__61467__$1 = (((G__61467 instanceof cljs.core.Keyword))?G__61467.fqn:null);
switch (G__61467__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61467__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61462_61505,G__61463_61506) : re_frame.core.reg_fx.call(null,G__61462_61505,G__61463_61506));

//# sourceMappingURL=athens.effects.js.map
