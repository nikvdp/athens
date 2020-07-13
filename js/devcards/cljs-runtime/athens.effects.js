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
var G__61429_61521 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__61430_61522 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61429_61521,G__61430_61522) : re_frame.core.reg_fx.call(null,G__61429_61521,G__61430_61522));
var G__61431_61523 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__61432_61524 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61431_61523,G__61432_61524) : re_frame.core.reg_fx.call(null,G__61431_61523,G__61432_61524));
var G__61433_61525 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__61434_61526 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61433_61525,G__61434_61526) : re_frame.core.reg_fx.call(null,G__61433_61525,G__61434_61526));
var G__61435_61527 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61436_61528 = (function (p__61437){
var map__61438 = p__61437;
var map__61438__$1 = (((((!((map__61438 == null))))?(((((map__61438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61438):map__61438);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61438__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61438__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61438__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61438__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61438__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__37015__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37016__auto__ = (function (){var switch__36947__auto__ = (function (state_61482){
var state_val_61483 = (state_61482[(1)]);
if((state_val_61483 === (7))){
var inst_61449 = (state_61482[(7)]);
var inst_61449__$1 = (state_61482[(2)]);
var inst_61451 = (inst_61449__$1 == null);
var inst_61452 = cljs.core.not(inst_61451);
var state_61482__$1 = (function (){var statearr_61484 = state_61482;
(statearr_61484[(7)] = inst_61449__$1);

return statearr_61484;
})();
if(inst_61452){
var statearr_61485_61529 = state_61482__$1;
(statearr_61485_61529[(1)] = (8));

} else {
var statearr_61486_61530 = state_61482__$1;
(statearr_61486_61530[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61483 === (1))){
var state_61482__$1 = state_61482;
var G__61487_61531 = method;
var G__61487_61532__$1 = (((G__61487_61531 instanceof cljs.core.Keyword))?G__61487_61531.fqn:null);
switch (G__61487_61532__$1) {
case "post":
var statearr_61488_61534 = state_61482__$1;
(statearr_61488_61534[(1)] = (3));


break;
case "get":
var statearr_61489_61535 = state_61482__$1;
(statearr_61489_61535[(1)] = (4));


break;
case "put":
var statearr_61490_61536 = state_61482__$1;
(statearr_61490_61536[(1)] = (5));


break;
case "delete":
var statearr_61491_61537 = state_61482__$1;
(statearr_61491_61537[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61487_61532__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61483 === (4))){
var state_61482__$1 = state_61482;
var statearr_61492_61538 = state_61482__$1;
(statearr_61492_61538[(2)] = cljs_http.client.get);

(statearr_61492_61538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61483 === (15))){
var inst_61449 = (state_61482[(7)]);
var state_61482__$1 = state_61482;
var statearr_61493_61539 = state_61482__$1;
(statearr_61493_61539[(2)] = inst_61449);

(statearr_61493_61539[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61483 === (13))){
var inst_61462 = (state_61482[(2)]);
var state_61482__$1 = state_61482;
var statearr_61494_61540 = state_61482__$1;
(statearr_61494_61540[(2)] = inst_61462);

(statearr_61494_61540[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61483 === (6))){
var state_61482__$1 = state_61482;
var statearr_61495_61541 = state_61482__$1;
(statearr_61495_61541[(2)] = cljs_http.client.delete$);

(statearr_61495_61541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61483 === (17))){
var inst_61472 = (state_61482[(8)]);
var inst_61474 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61472);
var inst_61475 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61474) : re_frame.core.dispatch.call(null,inst_61474));
var state_61482__$1 = state_61482;
var statearr_61496_61542 = state_61482__$1;
(statearr_61496_61542[(2)] = inst_61475);

(statearr_61496_61542[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61483 === (3))){
var state_61482__$1 = state_61482;
var statearr_61497_61543 = state_61482__$1;
(statearr_61497_61543[(2)] = cljs_http.client.post);

(statearr_61497_61543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61483 === (12))){
var state_61482__$1 = state_61482;
var statearr_61498_61544 = state_61482__$1;
(statearr_61498_61544[(2)] = false);

(statearr_61498_61544[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61483 === (2))){
var inst_61446 = (state_61482[(2)]);
var inst_61447 = (inst_61446.cljs$core$IFn$_invoke$arity$2 ? inst_61446.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61446.call(null,url,opts));
var state_61482__$1 = state_61482;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61482__$1,(7),inst_61447);
} else {
if((state_val_61483 === (19))){
var inst_61480 = (state_61482[(2)]);
var state_61482__$1 = state_61482;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61482__$1,inst_61480);
} else {
if((state_val_61483 === (11))){
var state_61482__$1 = state_61482;
var statearr_61499_61545 = state_61482__$1;
(statearr_61499_61545[(2)] = true);

(statearr_61499_61545[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61483 === (9))){
var state_61482__$1 = state_61482;
var statearr_61500_61546 = state_61482__$1;
(statearr_61500_61546[(2)] = false);

(statearr_61500_61546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61483 === (5))){
var state_61482__$1 = state_61482;
var statearr_61501_61547 = state_61482__$1;
(statearr_61501_61547[(2)] = cljs_http.client.put);

(statearr_61501_61547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61483 === (14))){
var inst_61449 = (state_61482[(7)]);
var inst_61467 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61449);
var state_61482__$1 = state_61482;
var statearr_61502_61548 = state_61482__$1;
(statearr_61502_61548[(2)] = inst_61467);

(statearr_61502_61548[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61483 === (16))){
var inst_61470 = (state_61482[(9)]);
var inst_61470__$1 = (state_61482[(2)]);
var inst_61471 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61470__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61472 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61470__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61482__$1 = (function (){var statearr_61503 = state_61482;
(statearr_61503[(9)] = inst_61470__$1);

(statearr_61503[(8)] = inst_61472);

return statearr_61503;
})();
if(cljs.core.truth_(inst_61471)){
var statearr_61504_61549 = state_61482__$1;
(statearr_61504_61549[(1)] = (17));

} else {
var statearr_61505_61550 = state_61482__$1;
(statearr_61505_61550[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61483 === (10))){
var inst_61465 = (state_61482[(2)]);
var state_61482__$1 = state_61482;
if(cljs.core.truth_(inst_61465)){
var statearr_61506_61551 = state_61482__$1;
(statearr_61506_61551[(1)] = (14));

} else {
var statearr_61507_61552 = state_61482__$1;
(statearr_61507_61552[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61483 === (18))){
var inst_61470 = (state_61482[(9)]);
var inst_61477 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61470);
var inst_61478 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61477) : re_frame.core.dispatch.call(null,inst_61477));
var state_61482__$1 = state_61482;
var statearr_61508_61553 = state_61482__$1;
(statearr_61508_61553[(2)] = inst_61478);

(statearr_61508_61553[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61483 === (8))){
var inst_61449 = (state_61482[(7)]);
var inst_61454 = inst_61449.cljs$lang$protocol_mask$partition0$;
var inst_61455 = (inst_61454 & (64));
var inst_61456 = inst_61449.cljs$core$ISeq$;
var inst_61457 = (cljs.core.PROTOCOL_SENTINEL === inst_61456);
var inst_61458 = ((inst_61455) || (inst_61457));
var state_61482__$1 = state_61482;
if(cljs.core.truth_(inst_61458)){
var statearr_61509_61554 = state_61482__$1;
(statearr_61509_61554[(1)] = (11));

} else {
var statearr_61510_61555 = state_61482__$1;
(statearr_61510_61555[(1)] = (12));

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
var statearr_61511 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61511[(0)] = athens$effects$state_machine__36948__auto__);

(statearr_61511[(1)] = (1));

return statearr_61511;
});
var athens$effects$state_machine__36948__auto____1 = (function (state_61482){
while(true){
var ret_value__36949__auto__ = (function (){try{while(true){
var result__36950__auto__ = switch__36947__auto__(state_61482);
if(cljs.core.keyword_identical_QMARK_(result__36950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36950__auto__;
}
break;
}
}catch (e61512){if((e61512 instanceof Object)){
var ex__36951__auto__ = e61512;
var statearr_61513_61556 = state_61482;
(statearr_61513_61556[(5)] = ex__36951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61512;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61557 = state_61482;
state_61482 = G__61557;
continue;
} else {
return ret_value__36949__auto__;
}
break;
}
});
athens$effects$state_machine__36948__auto__ = function(state_61482){
switch(arguments.length){
case 0:
return athens$effects$state_machine__36948__auto____0.call(this);
case 1:
return athens$effects$state_machine__36948__auto____1.call(this,state_61482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__36948__auto____0;
athens$effects$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__36948__auto____1;
return athens$effects$state_machine__36948__auto__;
})()
})();
var state__37017__auto__ = (function (){var statearr_61514 = (f__37016__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37016__auto__.cljs$core$IFn$_invoke$arity$0() : f__37016__auto__.call(null));
(statearr_61514[(6)] = c__37015__auto__);

return statearr_61514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37017__auto__);
}));

return c__37015__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61435_61527,G__61436_61528) : re_frame.core.reg_fx.call(null,G__61435_61527,G__61436_61528));
var G__61515_61558 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61516_61559 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61517){
var map__61518 = p__61517;
var map__61518__$1 = (((((!((map__61518 == null))))?(((((map__61518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61518):map__61518);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61518__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61518__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61518__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61518__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61520 = action;
var G__61520__$1 = (((G__61520 instanceof cljs.core.Keyword))?G__61520.fqn:null);
switch (G__61520__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61520__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61515_61558,G__61516_61559) : re_frame.core.reg_fx.call(null,G__61515_61558,G__61516_61559));

//# sourceMappingURL=athens.effects.js.map
