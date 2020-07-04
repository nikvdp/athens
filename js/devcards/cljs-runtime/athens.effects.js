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
var G__61302_61394 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__61303_61395 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["OUTPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms))));

return cljs.core.println();
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61302_61394,G__61303_61395) : re_frame.core.reg_fx.call(null,G__61302_61394,G__61303_61395));
var G__61304_61396 = new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638);
var G__61305_61397 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61304_61396,G__61305_61397) : re_frame.core.reg_fx.call(null,G__61304_61396,G__61305_61397));
var G__61306_61398 = new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211);
var G__61307_61399 = (function (_){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(cljs.core.deref(athens.db.dsdb)));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61306_61398,G__61307_61399) : re_frame.core.reg_fx.call(null,G__61306_61398,G__61307_61399));
var G__61308_61400 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61309_61401 = (function (p__61310){
var map__61311 = p__61310;
var map__61311__$1 = (((((!((map__61311 == null))))?(((((map__61311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61311):map__61311);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61311__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61311__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61311__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61311__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61311__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__36985__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36986__auto__ = (function (){var switch__36917__auto__ = (function (state_61355){
var state_val_61356 = (state_61355[(1)]);
if((state_val_61356 === (7))){
var inst_61322 = (state_61355[(7)]);
var inst_61322__$1 = (state_61355[(2)]);
var inst_61324 = (inst_61322__$1 == null);
var inst_61325 = cljs.core.not(inst_61324);
var state_61355__$1 = (function (){var statearr_61357 = state_61355;
(statearr_61357[(7)] = inst_61322__$1);

return statearr_61357;
})();
if(inst_61325){
var statearr_61358_61402 = state_61355__$1;
(statearr_61358_61402[(1)] = (8));

} else {
var statearr_61359_61403 = state_61355__$1;
(statearr_61359_61403[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61356 === (1))){
var state_61355__$1 = state_61355;
var G__61360_61404 = method;
var G__61360_61405__$1 = (((G__61360_61404 instanceof cljs.core.Keyword))?G__61360_61404.fqn:null);
switch (G__61360_61405__$1) {
case "post":
var statearr_61361_61407 = state_61355__$1;
(statearr_61361_61407[(1)] = (3));


break;
case "get":
var statearr_61362_61408 = state_61355__$1;
(statearr_61362_61408[(1)] = (4));


break;
case "put":
var statearr_61363_61409 = state_61355__$1;
(statearr_61363_61409[(1)] = (5));


break;
case "delete":
var statearr_61364_61410 = state_61355__$1;
(statearr_61364_61410[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61360_61405__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61356 === (4))){
var state_61355__$1 = state_61355;
var statearr_61365_61411 = state_61355__$1;
(statearr_61365_61411[(2)] = cljs_http.client.get);

(statearr_61365_61411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61356 === (15))){
var inst_61322 = (state_61355[(7)]);
var state_61355__$1 = state_61355;
var statearr_61366_61412 = state_61355__$1;
(statearr_61366_61412[(2)] = inst_61322);

(statearr_61366_61412[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61356 === (13))){
var inst_61335 = (state_61355[(2)]);
var state_61355__$1 = state_61355;
var statearr_61367_61413 = state_61355__$1;
(statearr_61367_61413[(2)] = inst_61335);

(statearr_61367_61413[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61356 === (6))){
var state_61355__$1 = state_61355;
var statearr_61368_61414 = state_61355__$1;
(statearr_61368_61414[(2)] = cljs_http.client.delete$);

(statearr_61368_61414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61356 === (17))){
var inst_61345 = (state_61355[(8)]);
var inst_61347 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61345);
var inst_61348 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61347) : re_frame.core.dispatch.call(null,inst_61347));
var state_61355__$1 = state_61355;
var statearr_61369_61415 = state_61355__$1;
(statearr_61369_61415[(2)] = inst_61348);

(statearr_61369_61415[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61356 === (3))){
var state_61355__$1 = state_61355;
var statearr_61370_61416 = state_61355__$1;
(statearr_61370_61416[(2)] = cljs_http.client.post);

(statearr_61370_61416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61356 === (12))){
var state_61355__$1 = state_61355;
var statearr_61371_61417 = state_61355__$1;
(statearr_61371_61417[(2)] = false);

(statearr_61371_61417[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61356 === (2))){
var inst_61319 = (state_61355[(2)]);
var inst_61320 = (inst_61319.cljs$core$IFn$_invoke$arity$2 ? inst_61319.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61319.call(null,url,opts));
var state_61355__$1 = state_61355;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61355__$1,(7),inst_61320);
} else {
if((state_val_61356 === (19))){
var inst_61353 = (state_61355[(2)]);
var state_61355__$1 = state_61355;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61355__$1,inst_61353);
} else {
if((state_val_61356 === (11))){
var state_61355__$1 = state_61355;
var statearr_61372_61418 = state_61355__$1;
(statearr_61372_61418[(2)] = true);

(statearr_61372_61418[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61356 === (9))){
var state_61355__$1 = state_61355;
var statearr_61373_61419 = state_61355__$1;
(statearr_61373_61419[(2)] = false);

(statearr_61373_61419[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61356 === (5))){
var state_61355__$1 = state_61355;
var statearr_61374_61420 = state_61355__$1;
(statearr_61374_61420[(2)] = cljs_http.client.put);

(statearr_61374_61420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61356 === (14))){
var inst_61322 = (state_61355[(7)]);
var inst_61340 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61322);
var state_61355__$1 = state_61355;
var statearr_61375_61421 = state_61355__$1;
(statearr_61375_61421[(2)] = inst_61340);

(statearr_61375_61421[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61356 === (16))){
var inst_61343 = (state_61355[(9)]);
var inst_61343__$1 = (state_61355[(2)]);
var inst_61344 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61343__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61345 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61343__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61355__$1 = (function (){var statearr_61376 = state_61355;
(statearr_61376[(8)] = inst_61345);

(statearr_61376[(9)] = inst_61343__$1);

return statearr_61376;
})();
if(cljs.core.truth_(inst_61344)){
var statearr_61377_61422 = state_61355__$1;
(statearr_61377_61422[(1)] = (17));

} else {
var statearr_61378_61423 = state_61355__$1;
(statearr_61378_61423[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61356 === (10))){
var inst_61338 = (state_61355[(2)]);
var state_61355__$1 = state_61355;
if(cljs.core.truth_(inst_61338)){
var statearr_61379_61424 = state_61355__$1;
(statearr_61379_61424[(1)] = (14));

} else {
var statearr_61380_61425 = state_61355__$1;
(statearr_61380_61425[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61356 === (18))){
var inst_61343 = (state_61355[(9)]);
var inst_61350 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61343);
var inst_61351 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61350) : re_frame.core.dispatch.call(null,inst_61350));
var state_61355__$1 = state_61355;
var statearr_61381_61426 = state_61355__$1;
(statearr_61381_61426[(2)] = inst_61351);

(statearr_61381_61426[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61356 === (8))){
var inst_61322 = (state_61355[(7)]);
var inst_61327 = inst_61322.cljs$lang$protocol_mask$partition0$;
var inst_61328 = (inst_61327 & (64));
var inst_61329 = inst_61322.cljs$core$ISeq$;
var inst_61330 = (cljs.core.PROTOCOL_SENTINEL === inst_61329);
var inst_61331 = ((inst_61328) || (inst_61330));
var state_61355__$1 = state_61355;
if(cljs.core.truth_(inst_61331)){
var statearr_61382_61427 = state_61355__$1;
(statearr_61382_61427[(1)] = (11));

} else {
var statearr_61383_61428 = state_61355__$1;
(statearr_61383_61428[(1)] = (12));

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
var athens$effects$state_machine__36918__auto__ = null;
var athens$effects$state_machine__36918__auto____0 = (function (){
var statearr_61384 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61384[(0)] = athens$effects$state_machine__36918__auto__);

(statearr_61384[(1)] = (1));

return statearr_61384;
});
var athens$effects$state_machine__36918__auto____1 = (function (state_61355){
while(true){
var ret_value__36919__auto__ = (function (){try{while(true){
var result__36920__auto__ = switch__36917__auto__(state_61355);
if(cljs.core.keyword_identical_QMARK_(result__36920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36920__auto__;
}
break;
}
}catch (e61385){if((e61385 instanceof Object)){
var ex__36921__auto__ = e61385;
var statearr_61386_61429 = state_61355;
(statearr_61386_61429[(5)] = ex__36921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61385;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61430 = state_61355;
state_61355 = G__61430;
continue;
} else {
return ret_value__36919__auto__;
}
break;
}
});
athens$effects$state_machine__36918__auto__ = function(state_61355){
switch(arguments.length){
case 0:
return athens$effects$state_machine__36918__auto____0.call(this);
case 1:
return athens$effects$state_machine__36918__auto____1.call(this,state_61355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__36918__auto____0;
athens$effects$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__36918__auto____1;
return athens$effects$state_machine__36918__auto__;
})()
})();
var state__36987__auto__ = (function (){var statearr_61387 = (f__36986__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36986__auto__.cljs$core$IFn$_invoke$arity$0() : f__36986__auto__.call(null));
(statearr_61387[(6)] = c__36985__auto__);

return statearr_61387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36987__auto__);
}));

return c__36985__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61308_61400,G__61309_61401) : re_frame.core.reg_fx.call(null,G__61308_61400,G__61309_61401));
var G__61388_61431 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61389_61432 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61390){
var map__61391 = p__61390;
var map__61391__$1 = (((((!((map__61391 == null))))?(((((map__61391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61391):map__61391);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61391__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61391__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61391__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61391__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61393 = action;
var G__61393__$1 = (((G__61393 instanceof cljs.core.Keyword))?G__61393.fqn:null);
switch (G__61393__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61393__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61388_61431,G__61389_61432) : re_frame.core.reg_fx.call(null,G__61388_61431,G__61389_61432));

//# sourceMappingURL=athens.effects.js.map
