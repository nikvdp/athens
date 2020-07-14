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
var G__61505_61597 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__61506_61598 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61505_61597,G__61506_61598) : re_frame.core.reg_fx.call(null,G__61505_61597,G__61506_61598));
var G__61507_61599 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__61508_61600 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61507_61599,G__61508_61600) : re_frame.core.reg_fx.call(null,G__61507_61599,G__61508_61600));
var G__61509_61601 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__61510_61602 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61509_61601,G__61510_61602) : re_frame.core.reg_fx.call(null,G__61509_61601,G__61510_61602));
var G__61511_61603 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61512_61604 = (function (p__61513){
var map__61514 = p__61513;
var map__61514__$1 = (((((!((map__61514 == null))))?(((((map__61514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61514):map__61514);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61514__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61514__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61514__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61514__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61514__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__37022__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37023__auto__ = (function (){var switch__36954__auto__ = (function (state_61558){
var state_val_61559 = (state_61558[(1)]);
if((state_val_61559 === (7))){
var inst_61525 = (state_61558[(7)]);
var inst_61525__$1 = (state_61558[(2)]);
var inst_61527 = (inst_61525__$1 == null);
var inst_61528 = cljs.core.not(inst_61527);
var state_61558__$1 = (function (){var statearr_61560 = state_61558;
(statearr_61560[(7)] = inst_61525__$1);

return statearr_61560;
})();
if(inst_61528){
var statearr_61561_61605 = state_61558__$1;
(statearr_61561_61605[(1)] = (8));

} else {
var statearr_61562_61606 = state_61558__$1;
(statearr_61562_61606[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (1))){
var state_61558__$1 = state_61558;
var G__61563_61607 = method;
var G__61563_61608__$1 = (((G__61563_61607 instanceof cljs.core.Keyword))?G__61563_61607.fqn:null);
switch (G__61563_61608__$1) {
case "post":
var statearr_61564_61610 = state_61558__$1;
(statearr_61564_61610[(1)] = (3));


break;
case "get":
var statearr_61565_61611 = state_61558__$1;
(statearr_61565_61611[(1)] = (4));


break;
case "put":
var statearr_61566_61612 = state_61558__$1;
(statearr_61566_61612[(1)] = (5));


break;
case "delete":
var statearr_61567_61613 = state_61558__$1;
(statearr_61567_61613[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61563_61608__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (4))){
var state_61558__$1 = state_61558;
var statearr_61568_61614 = state_61558__$1;
(statearr_61568_61614[(2)] = cljs_http.client.get);

(statearr_61568_61614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (15))){
var inst_61525 = (state_61558[(7)]);
var state_61558__$1 = state_61558;
var statearr_61569_61615 = state_61558__$1;
(statearr_61569_61615[(2)] = inst_61525);

(statearr_61569_61615[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (13))){
var inst_61538 = (state_61558[(2)]);
var state_61558__$1 = state_61558;
var statearr_61570_61616 = state_61558__$1;
(statearr_61570_61616[(2)] = inst_61538);

(statearr_61570_61616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (6))){
var state_61558__$1 = state_61558;
var statearr_61571_61617 = state_61558__$1;
(statearr_61571_61617[(2)] = cljs_http.client.delete$);

(statearr_61571_61617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (17))){
var inst_61548 = (state_61558[(8)]);
var inst_61550 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61548);
var inst_61551 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61550) : re_frame.core.dispatch.call(null,inst_61550));
var state_61558__$1 = state_61558;
var statearr_61572_61618 = state_61558__$1;
(statearr_61572_61618[(2)] = inst_61551);

(statearr_61572_61618[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (3))){
var state_61558__$1 = state_61558;
var statearr_61573_61619 = state_61558__$1;
(statearr_61573_61619[(2)] = cljs_http.client.post);

(statearr_61573_61619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (12))){
var state_61558__$1 = state_61558;
var statearr_61574_61620 = state_61558__$1;
(statearr_61574_61620[(2)] = false);

(statearr_61574_61620[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (2))){
var inst_61522 = (state_61558[(2)]);
var inst_61523 = (inst_61522.cljs$core$IFn$_invoke$arity$2 ? inst_61522.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61522.call(null,url,opts));
var state_61558__$1 = state_61558;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61558__$1,(7),inst_61523);
} else {
if((state_val_61559 === (19))){
var inst_61556 = (state_61558[(2)]);
var state_61558__$1 = state_61558;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61558__$1,inst_61556);
} else {
if((state_val_61559 === (11))){
var state_61558__$1 = state_61558;
var statearr_61575_61621 = state_61558__$1;
(statearr_61575_61621[(2)] = true);

(statearr_61575_61621[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (9))){
var state_61558__$1 = state_61558;
var statearr_61576_61622 = state_61558__$1;
(statearr_61576_61622[(2)] = false);

(statearr_61576_61622[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (5))){
var state_61558__$1 = state_61558;
var statearr_61577_61623 = state_61558__$1;
(statearr_61577_61623[(2)] = cljs_http.client.put);

(statearr_61577_61623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (14))){
var inst_61525 = (state_61558[(7)]);
var inst_61543 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61525);
var state_61558__$1 = state_61558;
var statearr_61578_61624 = state_61558__$1;
(statearr_61578_61624[(2)] = inst_61543);

(statearr_61578_61624[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (16))){
var inst_61546 = (state_61558[(9)]);
var inst_61546__$1 = (state_61558[(2)]);
var inst_61547 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61546__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61546__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61558__$1 = (function (){var statearr_61579 = state_61558;
(statearr_61579[(8)] = inst_61548);

(statearr_61579[(9)] = inst_61546__$1);

return statearr_61579;
})();
if(cljs.core.truth_(inst_61547)){
var statearr_61580_61625 = state_61558__$1;
(statearr_61580_61625[(1)] = (17));

} else {
var statearr_61581_61626 = state_61558__$1;
(statearr_61581_61626[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (10))){
var inst_61541 = (state_61558[(2)]);
var state_61558__$1 = state_61558;
if(cljs.core.truth_(inst_61541)){
var statearr_61582_61627 = state_61558__$1;
(statearr_61582_61627[(1)] = (14));

} else {
var statearr_61583_61628 = state_61558__$1;
(statearr_61583_61628[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (18))){
var inst_61546 = (state_61558[(9)]);
var inst_61553 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61546);
var inst_61554 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61553) : re_frame.core.dispatch.call(null,inst_61553));
var state_61558__$1 = state_61558;
var statearr_61584_61629 = state_61558__$1;
(statearr_61584_61629[(2)] = inst_61554);

(statearr_61584_61629[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (8))){
var inst_61525 = (state_61558[(7)]);
var inst_61530 = inst_61525.cljs$lang$protocol_mask$partition0$;
var inst_61531 = (inst_61530 & (64));
var inst_61532 = inst_61525.cljs$core$ISeq$;
var inst_61533 = (cljs.core.PROTOCOL_SENTINEL === inst_61532);
var inst_61534 = ((inst_61531) || (inst_61533));
var state_61558__$1 = state_61558;
if(cljs.core.truth_(inst_61534)){
var statearr_61585_61630 = state_61558__$1;
(statearr_61585_61630[(1)] = (11));

} else {
var statearr_61586_61631 = state_61558__$1;
(statearr_61586_61631[(1)] = (12));

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
var statearr_61587 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61587[(0)] = athens$effects$state_machine__36955__auto__);

(statearr_61587[(1)] = (1));

return statearr_61587;
});
var athens$effects$state_machine__36955__auto____1 = (function (state_61558){
while(true){
var ret_value__36956__auto__ = (function (){try{while(true){
var result__36957__auto__ = switch__36954__auto__(state_61558);
if(cljs.core.keyword_identical_QMARK_(result__36957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36957__auto__;
}
break;
}
}catch (e61588){if((e61588 instanceof Object)){
var ex__36958__auto__ = e61588;
var statearr_61589_61632 = state_61558;
(statearr_61589_61632[(5)] = ex__36958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61588;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61633 = state_61558;
state_61558 = G__61633;
continue;
} else {
return ret_value__36956__auto__;
}
break;
}
});
athens$effects$state_machine__36955__auto__ = function(state_61558){
switch(arguments.length){
case 0:
return athens$effects$state_machine__36955__auto____0.call(this);
case 1:
return athens$effects$state_machine__36955__auto____1.call(this,state_61558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__36955__auto____0;
athens$effects$state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__36955__auto____1;
return athens$effects$state_machine__36955__auto__;
})()
})();
var state__37024__auto__ = (function (){var statearr_61590 = (f__37023__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37023__auto__.cljs$core$IFn$_invoke$arity$0() : f__37023__auto__.call(null));
(statearr_61590[(6)] = c__37022__auto__);

return statearr_61590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37024__auto__);
}));

return c__37022__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61511_61603,G__61512_61604) : re_frame.core.reg_fx.call(null,G__61511_61603,G__61512_61604));
var G__61591_61634 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61592_61635 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61593){
var map__61594 = p__61593;
var map__61594__$1 = (((((!((map__61594 == null))))?(((((map__61594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61594):map__61594);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61594__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61594__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61594__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61594__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61596 = action;
var G__61596__$1 = (((G__61596 instanceof cljs.core.Keyword))?G__61596.fqn:null);
switch (G__61596__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61596__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61591_61634,G__61592_61635) : re_frame.core.reg_fx.call(null,G__61591_61634,G__61592_61635));

//# sourceMappingURL=athens.effects.js.map
