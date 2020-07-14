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
var G__61442_61534 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__61443_61535 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61442_61534,G__61443_61535) : re_frame.core.reg_fx.call(null,G__61442_61534,G__61443_61535));
var G__61444_61536 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__61445_61537 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61444_61536,G__61445_61537) : re_frame.core.reg_fx.call(null,G__61444_61536,G__61445_61537));
var G__61446_61538 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__61447_61539 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61446_61538,G__61447_61539) : re_frame.core.reg_fx.call(null,G__61446_61538,G__61447_61539));
var G__61448_61540 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61449_61541 = (function (p__61450){
var map__61451 = p__61450;
var map__61451__$1 = (((((!((map__61451 == null))))?(((((map__61451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61451):map__61451);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61451__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61451__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61451__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61451__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61451__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__37015__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37016__auto__ = (function (){var switch__36947__auto__ = (function (state_61495){
var state_val_61496 = (state_61495[(1)]);
if((state_val_61496 === (7))){
var inst_61462 = (state_61495[(7)]);
var inst_61462__$1 = (state_61495[(2)]);
var inst_61464 = (inst_61462__$1 == null);
var inst_61465 = cljs.core.not(inst_61464);
var state_61495__$1 = (function (){var statearr_61497 = state_61495;
(statearr_61497[(7)] = inst_61462__$1);

return statearr_61497;
})();
if(inst_61465){
var statearr_61498_61542 = state_61495__$1;
(statearr_61498_61542[(1)] = (8));

} else {
var statearr_61499_61543 = state_61495__$1;
(statearr_61499_61543[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61496 === (1))){
var state_61495__$1 = state_61495;
var G__61500_61544 = method;
var G__61500_61545__$1 = (((G__61500_61544 instanceof cljs.core.Keyword))?G__61500_61544.fqn:null);
switch (G__61500_61545__$1) {
case "post":
var statearr_61501_61547 = state_61495__$1;
(statearr_61501_61547[(1)] = (3));


break;
case "get":
var statearr_61502_61548 = state_61495__$1;
(statearr_61502_61548[(1)] = (4));


break;
case "put":
var statearr_61503_61549 = state_61495__$1;
(statearr_61503_61549[(1)] = (5));


break;
case "delete":
var statearr_61504_61550 = state_61495__$1;
(statearr_61504_61550[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61500_61545__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61496 === (4))){
var state_61495__$1 = state_61495;
var statearr_61505_61551 = state_61495__$1;
(statearr_61505_61551[(2)] = cljs_http.client.get);

(statearr_61505_61551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61496 === (15))){
var inst_61462 = (state_61495[(7)]);
var state_61495__$1 = state_61495;
var statearr_61506_61552 = state_61495__$1;
(statearr_61506_61552[(2)] = inst_61462);

(statearr_61506_61552[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61496 === (13))){
var inst_61475 = (state_61495[(2)]);
var state_61495__$1 = state_61495;
var statearr_61507_61553 = state_61495__$1;
(statearr_61507_61553[(2)] = inst_61475);

(statearr_61507_61553[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61496 === (6))){
var state_61495__$1 = state_61495;
var statearr_61508_61554 = state_61495__$1;
(statearr_61508_61554[(2)] = cljs_http.client.delete$);

(statearr_61508_61554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61496 === (17))){
var inst_61485 = (state_61495[(8)]);
var inst_61487 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61485);
var inst_61488 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61487) : re_frame.core.dispatch.call(null,inst_61487));
var state_61495__$1 = state_61495;
var statearr_61509_61555 = state_61495__$1;
(statearr_61509_61555[(2)] = inst_61488);

(statearr_61509_61555[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61496 === (3))){
var state_61495__$1 = state_61495;
var statearr_61510_61556 = state_61495__$1;
(statearr_61510_61556[(2)] = cljs_http.client.post);

(statearr_61510_61556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61496 === (12))){
var state_61495__$1 = state_61495;
var statearr_61511_61557 = state_61495__$1;
(statearr_61511_61557[(2)] = false);

(statearr_61511_61557[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61496 === (2))){
var inst_61459 = (state_61495[(2)]);
var inst_61460 = (inst_61459.cljs$core$IFn$_invoke$arity$2 ? inst_61459.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61459.call(null,url,opts));
var state_61495__$1 = state_61495;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61495__$1,(7),inst_61460);
} else {
if((state_val_61496 === (19))){
var inst_61493 = (state_61495[(2)]);
var state_61495__$1 = state_61495;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61495__$1,inst_61493);
} else {
if((state_val_61496 === (11))){
var state_61495__$1 = state_61495;
var statearr_61512_61558 = state_61495__$1;
(statearr_61512_61558[(2)] = true);

(statearr_61512_61558[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61496 === (9))){
var state_61495__$1 = state_61495;
var statearr_61513_61559 = state_61495__$1;
(statearr_61513_61559[(2)] = false);

(statearr_61513_61559[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61496 === (5))){
var state_61495__$1 = state_61495;
var statearr_61514_61560 = state_61495__$1;
(statearr_61514_61560[(2)] = cljs_http.client.put);

(statearr_61514_61560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61496 === (14))){
var inst_61462 = (state_61495[(7)]);
var inst_61480 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61462);
var state_61495__$1 = state_61495;
var statearr_61515_61561 = state_61495__$1;
(statearr_61515_61561[(2)] = inst_61480);

(statearr_61515_61561[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61496 === (16))){
var inst_61483 = (state_61495[(9)]);
var inst_61483__$1 = (state_61495[(2)]);
var inst_61484 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61483__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61483__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61495__$1 = (function (){var statearr_61516 = state_61495;
(statearr_61516[(8)] = inst_61485);

(statearr_61516[(9)] = inst_61483__$1);

return statearr_61516;
})();
if(cljs.core.truth_(inst_61484)){
var statearr_61517_61562 = state_61495__$1;
(statearr_61517_61562[(1)] = (17));

} else {
var statearr_61518_61563 = state_61495__$1;
(statearr_61518_61563[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61496 === (10))){
var inst_61478 = (state_61495[(2)]);
var state_61495__$1 = state_61495;
if(cljs.core.truth_(inst_61478)){
var statearr_61519_61564 = state_61495__$1;
(statearr_61519_61564[(1)] = (14));

} else {
var statearr_61520_61565 = state_61495__$1;
(statearr_61520_61565[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61496 === (18))){
var inst_61483 = (state_61495[(9)]);
var inst_61490 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61483);
var inst_61491 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61490) : re_frame.core.dispatch.call(null,inst_61490));
var state_61495__$1 = state_61495;
var statearr_61521_61566 = state_61495__$1;
(statearr_61521_61566[(2)] = inst_61491);

(statearr_61521_61566[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61496 === (8))){
var inst_61462 = (state_61495[(7)]);
var inst_61467 = inst_61462.cljs$lang$protocol_mask$partition0$;
var inst_61468 = (inst_61467 & (64));
var inst_61469 = inst_61462.cljs$core$ISeq$;
var inst_61470 = (cljs.core.PROTOCOL_SENTINEL === inst_61469);
var inst_61471 = ((inst_61468) || (inst_61470));
var state_61495__$1 = state_61495;
if(cljs.core.truth_(inst_61471)){
var statearr_61522_61567 = state_61495__$1;
(statearr_61522_61567[(1)] = (11));

} else {
var statearr_61523_61568 = state_61495__$1;
(statearr_61523_61568[(1)] = (12));

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
var statearr_61524 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61524[(0)] = athens$effects$state_machine__36948__auto__);

(statearr_61524[(1)] = (1));

return statearr_61524;
});
var athens$effects$state_machine__36948__auto____1 = (function (state_61495){
while(true){
var ret_value__36949__auto__ = (function (){try{while(true){
var result__36950__auto__ = switch__36947__auto__(state_61495);
if(cljs.core.keyword_identical_QMARK_(result__36950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36950__auto__;
}
break;
}
}catch (e61525){if((e61525 instanceof Object)){
var ex__36951__auto__ = e61525;
var statearr_61526_61569 = state_61495;
(statearr_61526_61569[(5)] = ex__36951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61525;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61570 = state_61495;
state_61495 = G__61570;
continue;
} else {
return ret_value__36949__auto__;
}
break;
}
});
athens$effects$state_machine__36948__auto__ = function(state_61495){
switch(arguments.length){
case 0:
return athens$effects$state_machine__36948__auto____0.call(this);
case 1:
return athens$effects$state_machine__36948__auto____1.call(this,state_61495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__36948__auto____0;
athens$effects$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__36948__auto____1;
return athens$effects$state_machine__36948__auto__;
})()
})();
var state__37017__auto__ = (function (){var statearr_61527 = (f__37016__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37016__auto__.cljs$core$IFn$_invoke$arity$0() : f__37016__auto__.call(null));
(statearr_61527[(6)] = c__37015__auto__);

return statearr_61527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37017__auto__);
}));

return c__37015__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61448_61540,G__61449_61541) : re_frame.core.reg_fx.call(null,G__61448_61540,G__61449_61541));
var G__61528_61571 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61529_61572 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61530){
var map__61531 = p__61530;
var map__61531__$1 = (((((!((map__61531 == null))))?(((((map__61531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61531):map__61531);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61531__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61531__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61531__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61531__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61533 = action;
var G__61533__$1 = (((G__61533 instanceof cljs.core.Keyword))?G__61533.fqn:null);
switch (G__61533__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61533__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61528_61571,G__61529_61572) : re_frame.core.reg_fx.call(null,G__61528_61571,G__61529_61572));

//# sourceMappingURL=athens.effects.js.map
