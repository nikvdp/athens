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
var G__61496_61588 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__61497_61589 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61496_61588,G__61497_61589) : re_frame.core.reg_fx.call(null,G__61496_61588,G__61497_61589));
var G__61498_61590 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__61499_61591 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61498_61590,G__61499_61591) : re_frame.core.reg_fx.call(null,G__61498_61590,G__61499_61591));
var G__61500_61592 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__61501_61593 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61500_61592,G__61501_61593) : re_frame.core.reg_fx.call(null,G__61500_61592,G__61501_61593));
var G__61502_61594 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61503_61595 = (function (p__61504){
var map__61505 = p__61504;
var map__61505__$1 = (((((!((map__61505 == null))))?(((((map__61505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61505):map__61505);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61505__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61505__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61505__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61505__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61505__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__37022__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37023__auto__ = (function (){var switch__36954__auto__ = (function (state_61549){
var state_val_61550 = (state_61549[(1)]);
if((state_val_61550 === (7))){
var inst_61516 = (state_61549[(7)]);
var inst_61516__$1 = (state_61549[(2)]);
var inst_61518 = (inst_61516__$1 == null);
var inst_61519 = cljs.core.not(inst_61518);
var state_61549__$1 = (function (){var statearr_61551 = state_61549;
(statearr_61551[(7)] = inst_61516__$1);

return statearr_61551;
})();
if(inst_61519){
var statearr_61552_61596 = state_61549__$1;
(statearr_61552_61596[(1)] = (8));

} else {
var statearr_61553_61597 = state_61549__$1;
(statearr_61553_61597[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61550 === (1))){
var state_61549__$1 = state_61549;
var G__61554_61598 = method;
var G__61554_61599__$1 = (((G__61554_61598 instanceof cljs.core.Keyword))?G__61554_61598.fqn:null);
switch (G__61554_61599__$1) {
case "post":
var statearr_61555_61601 = state_61549__$1;
(statearr_61555_61601[(1)] = (3));


break;
case "get":
var statearr_61556_61602 = state_61549__$1;
(statearr_61556_61602[(1)] = (4));


break;
case "put":
var statearr_61557_61603 = state_61549__$1;
(statearr_61557_61603[(1)] = (5));


break;
case "delete":
var statearr_61558_61604 = state_61549__$1;
(statearr_61558_61604[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61554_61599__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61550 === (4))){
var state_61549__$1 = state_61549;
var statearr_61559_61605 = state_61549__$1;
(statearr_61559_61605[(2)] = cljs_http.client.get);

(statearr_61559_61605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61550 === (15))){
var inst_61516 = (state_61549[(7)]);
var state_61549__$1 = state_61549;
var statearr_61560_61606 = state_61549__$1;
(statearr_61560_61606[(2)] = inst_61516);

(statearr_61560_61606[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61550 === (13))){
var inst_61529 = (state_61549[(2)]);
var state_61549__$1 = state_61549;
var statearr_61561_61607 = state_61549__$1;
(statearr_61561_61607[(2)] = inst_61529);

(statearr_61561_61607[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61550 === (6))){
var state_61549__$1 = state_61549;
var statearr_61562_61608 = state_61549__$1;
(statearr_61562_61608[(2)] = cljs_http.client.delete$);

(statearr_61562_61608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61550 === (17))){
var inst_61539 = (state_61549[(8)]);
var inst_61541 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61539);
var inst_61542 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61541) : re_frame.core.dispatch.call(null,inst_61541));
var state_61549__$1 = state_61549;
var statearr_61563_61609 = state_61549__$1;
(statearr_61563_61609[(2)] = inst_61542);

(statearr_61563_61609[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61550 === (3))){
var state_61549__$1 = state_61549;
var statearr_61564_61610 = state_61549__$1;
(statearr_61564_61610[(2)] = cljs_http.client.post);

(statearr_61564_61610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61550 === (12))){
var state_61549__$1 = state_61549;
var statearr_61565_61611 = state_61549__$1;
(statearr_61565_61611[(2)] = false);

(statearr_61565_61611[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61550 === (2))){
var inst_61513 = (state_61549[(2)]);
var inst_61514 = (inst_61513.cljs$core$IFn$_invoke$arity$2 ? inst_61513.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61513.call(null,url,opts));
var state_61549__$1 = state_61549;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61549__$1,(7),inst_61514);
} else {
if((state_val_61550 === (19))){
var inst_61547 = (state_61549[(2)]);
var state_61549__$1 = state_61549;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61549__$1,inst_61547);
} else {
if((state_val_61550 === (11))){
var state_61549__$1 = state_61549;
var statearr_61566_61612 = state_61549__$1;
(statearr_61566_61612[(2)] = true);

(statearr_61566_61612[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61550 === (9))){
var state_61549__$1 = state_61549;
var statearr_61567_61613 = state_61549__$1;
(statearr_61567_61613[(2)] = false);

(statearr_61567_61613[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61550 === (5))){
var state_61549__$1 = state_61549;
var statearr_61568_61614 = state_61549__$1;
(statearr_61568_61614[(2)] = cljs_http.client.put);

(statearr_61568_61614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61550 === (14))){
var inst_61516 = (state_61549[(7)]);
var inst_61534 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61516);
var state_61549__$1 = state_61549;
var statearr_61569_61615 = state_61549__$1;
(statearr_61569_61615[(2)] = inst_61534);

(statearr_61569_61615[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61550 === (16))){
var inst_61537 = (state_61549[(9)]);
var inst_61537__$1 = (state_61549[(2)]);
var inst_61538 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61537__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61539 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61537__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61549__$1 = (function (){var statearr_61570 = state_61549;
(statearr_61570[(9)] = inst_61537__$1);

(statearr_61570[(8)] = inst_61539);

return statearr_61570;
})();
if(cljs.core.truth_(inst_61538)){
var statearr_61571_61616 = state_61549__$1;
(statearr_61571_61616[(1)] = (17));

} else {
var statearr_61572_61617 = state_61549__$1;
(statearr_61572_61617[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61550 === (10))){
var inst_61532 = (state_61549[(2)]);
var state_61549__$1 = state_61549;
if(cljs.core.truth_(inst_61532)){
var statearr_61573_61618 = state_61549__$1;
(statearr_61573_61618[(1)] = (14));

} else {
var statearr_61574_61619 = state_61549__$1;
(statearr_61574_61619[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61550 === (18))){
var inst_61537 = (state_61549[(9)]);
var inst_61544 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61537);
var inst_61545 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61544) : re_frame.core.dispatch.call(null,inst_61544));
var state_61549__$1 = state_61549;
var statearr_61575_61620 = state_61549__$1;
(statearr_61575_61620[(2)] = inst_61545);

(statearr_61575_61620[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61550 === (8))){
var inst_61516 = (state_61549[(7)]);
var inst_61521 = inst_61516.cljs$lang$protocol_mask$partition0$;
var inst_61522 = (inst_61521 & (64));
var inst_61523 = inst_61516.cljs$core$ISeq$;
var inst_61524 = (cljs.core.PROTOCOL_SENTINEL === inst_61523);
var inst_61525 = ((inst_61522) || (inst_61524));
var state_61549__$1 = state_61549;
if(cljs.core.truth_(inst_61525)){
var statearr_61576_61621 = state_61549__$1;
(statearr_61576_61621[(1)] = (11));

} else {
var statearr_61577_61622 = state_61549__$1;
(statearr_61577_61622[(1)] = (12));

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
var athens$effects$state_machine__36955__auto__ = null;
var athens$effects$state_machine__36955__auto____0 = (function (){
var statearr_61578 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61578[(0)] = athens$effects$state_machine__36955__auto__);

(statearr_61578[(1)] = (1));

return statearr_61578;
});
var athens$effects$state_machine__36955__auto____1 = (function (state_61549){
while(true){
var ret_value__36956__auto__ = (function (){try{while(true){
var result__36957__auto__ = switch__36954__auto__(state_61549);
if(cljs.core.keyword_identical_QMARK_(result__36957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36957__auto__;
}
break;
}
}catch (e61579){if((e61579 instanceof Object)){
var ex__36958__auto__ = e61579;
var statearr_61580_61623 = state_61549;
(statearr_61580_61623[(5)] = ex__36958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61579;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61624 = state_61549;
state_61549 = G__61624;
continue;
} else {
return ret_value__36956__auto__;
}
break;
}
});
athens$effects$state_machine__36955__auto__ = function(state_61549){
switch(arguments.length){
case 0:
return athens$effects$state_machine__36955__auto____0.call(this);
case 1:
return athens$effects$state_machine__36955__auto____1.call(this,state_61549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__36955__auto____0;
athens$effects$state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__36955__auto____1;
return athens$effects$state_machine__36955__auto__;
})()
})();
var state__37024__auto__ = (function (){var statearr_61581 = (f__37023__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37023__auto__.cljs$core$IFn$_invoke$arity$0() : f__37023__auto__.call(null));
(statearr_61581[(6)] = c__37022__auto__);

return statearr_61581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37024__auto__);
}));

return c__37022__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61502_61594,G__61503_61595) : re_frame.core.reg_fx.call(null,G__61502_61594,G__61503_61595));
var G__61582_61625 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61583_61626 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61584){
var map__61585 = p__61584;
var map__61585__$1 = (((((!((map__61585 == null))))?(((((map__61585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61585):map__61585);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61585__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61585__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61585__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61585__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61587 = action;
var G__61587__$1 = (((G__61587 instanceof cljs.core.Keyword))?G__61587.fqn:null);
switch (G__61587__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61587__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61582_61625,G__61583_61626) : re_frame.core.reg_fx.call(null,G__61582_61625,G__61583_61626));

//# sourceMappingURL=athens.effects.js.map
