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
var G__61276_61368 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__61277_61369 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["OUTPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms))));

return cljs.core.println();
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61276_61368,G__61277_61369) : re_frame.core.reg_fx.call(null,G__61276_61368,G__61277_61369));
var G__61278_61370 = new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638);
var G__61279_61371 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61278_61370,G__61279_61371) : re_frame.core.reg_fx.call(null,G__61278_61370,G__61279_61371));
var G__61280_61372 = new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211);
var G__61281_61373 = (function (_){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(cljs.core.deref(athens.db.dsdb)));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61280_61372,G__61281_61373) : re_frame.core.reg_fx.call(null,G__61280_61372,G__61281_61373));
var G__61282_61374 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61283_61375 = (function (p__61284){
var map__61285 = p__61284;
var map__61285__$1 = (((((!((map__61285 == null))))?(((((map__61285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61285):map__61285);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61285__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61285__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61285__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61285__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61285__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__36985__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36986__auto__ = (function (){var switch__36917__auto__ = (function (state_61329){
var state_val_61330 = (state_61329[(1)]);
if((state_val_61330 === (7))){
var inst_61296 = (state_61329[(7)]);
var inst_61296__$1 = (state_61329[(2)]);
var inst_61298 = (inst_61296__$1 == null);
var inst_61299 = cljs.core.not(inst_61298);
var state_61329__$1 = (function (){var statearr_61331 = state_61329;
(statearr_61331[(7)] = inst_61296__$1);

return statearr_61331;
})();
if(inst_61299){
var statearr_61332_61376 = state_61329__$1;
(statearr_61332_61376[(1)] = (8));

} else {
var statearr_61333_61377 = state_61329__$1;
(statearr_61333_61377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61330 === (1))){
var state_61329__$1 = state_61329;
var G__61334_61378 = method;
var G__61334_61379__$1 = (((G__61334_61378 instanceof cljs.core.Keyword))?G__61334_61378.fqn:null);
switch (G__61334_61379__$1) {
case "post":
var statearr_61335_61381 = state_61329__$1;
(statearr_61335_61381[(1)] = (3));


break;
case "get":
var statearr_61336_61382 = state_61329__$1;
(statearr_61336_61382[(1)] = (4));


break;
case "put":
var statearr_61337_61383 = state_61329__$1;
(statearr_61337_61383[(1)] = (5));


break;
case "delete":
var statearr_61338_61384 = state_61329__$1;
(statearr_61338_61384[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61334_61379__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61330 === (4))){
var state_61329__$1 = state_61329;
var statearr_61339_61385 = state_61329__$1;
(statearr_61339_61385[(2)] = cljs_http.client.get);

(statearr_61339_61385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61330 === (15))){
var inst_61296 = (state_61329[(7)]);
var state_61329__$1 = state_61329;
var statearr_61340_61386 = state_61329__$1;
(statearr_61340_61386[(2)] = inst_61296);

(statearr_61340_61386[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61330 === (13))){
var inst_61309 = (state_61329[(2)]);
var state_61329__$1 = state_61329;
var statearr_61341_61387 = state_61329__$1;
(statearr_61341_61387[(2)] = inst_61309);

(statearr_61341_61387[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61330 === (6))){
var state_61329__$1 = state_61329;
var statearr_61342_61388 = state_61329__$1;
(statearr_61342_61388[(2)] = cljs_http.client.delete$);

(statearr_61342_61388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61330 === (17))){
var inst_61319 = (state_61329[(8)]);
var inst_61321 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61319);
var inst_61322 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61321) : re_frame.core.dispatch.call(null,inst_61321));
var state_61329__$1 = state_61329;
var statearr_61343_61389 = state_61329__$1;
(statearr_61343_61389[(2)] = inst_61322);

(statearr_61343_61389[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61330 === (3))){
var state_61329__$1 = state_61329;
var statearr_61344_61390 = state_61329__$1;
(statearr_61344_61390[(2)] = cljs_http.client.post);

(statearr_61344_61390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61330 === (12))){
var state_61329__$1 = state_61329;
var statearr_61345_61391 = state_61329__$1;
(statearr_61345_61391[(2)] = false);

(statearr_61345_61391[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61330 === (2))){
var inst_61293 = (state_61329[(2)]);
var inst_61294 = (inst_61293.cljs$core$IFn$_invoke$arity$2 ? inst_61293.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61293.call(null,url,opts));
var state_61329__$1 = state_61329;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61329__$1,(7),inst_61294);
} else {
if((state_val_61330 === (19))){
var inst_61327 = (state_61329[(2)]);
var state_61329__$1 = state_61329;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61329__$1,inst_61327);
} else {
if((state_val_61330 === (11))){
var state_61329__$1 = state_61329;
var statearr_61346_61392 = state_61329__$1;
(statearr_61346_61392[(2)] = true);

(statearr_61346_61392[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61330 === (9))){
var state_61329__$1 = state_61329;
var statearr_61347_61393 = state_61329__$1;
(statearr_61347_61393[(2)] = false);

(statearr_61347_61393[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61330 === (5))){
var state_61329__$1 = state_61329;
var statearr_61348_61394 = state_61329__$1;
(statearr_61348_61394[(2)] = cljs_http.client.put);

(statearr_61348_61394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61330 === (14))){
var inst_61296 = (state_61329[(7)]);
var inst_61314 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61296);
var state_61329__$1 = state_61329;
var statearr_61349_61395 = state_61329__$1;
(statearr_61349_61395[(2)] = inst_61314);

(statearr_61349_61395[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61330 === (16))){
var inst_61317 = (state_61329[(9)]);
var inst_61317__$1 = (state_61329[(2)]);
var inst_61318 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61317__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61317__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61329__$1 = (function (){var statearr_61350 = state_61329;
(statearr_61350[(8)] = inst_61319);

(statearr_61350[(9)] = inst_61317__$1);

return statearr_61350;
})();
if(cljs.core.truth_(inst_61318)){
var statearr_61351_61396 = state_61329__$1;
(statearr_61351_61396[(1)] = (17));

} else {
var statearr_61352_61397 = state_61329__$1;
(statearr_61352_61397[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61330 === (10))){
var inst_61312 = (state_61329[(2)]);
var state_61329__$1 = state_61329;
if(cljs.core.truth_(inst_61312)){
var statearr_61353_61398 = state_61329__$1;
(statearr_61353_61398[(1)] = (14));

} else {
var statearr_61354_61399 = state_61329__$1;
(statearr_61354_61399[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61330 === (18))){
var inst_61317 = (state_61329[(9)]);
var inst_61324 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61317);
var inst_61325 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61324) : re_frame.core.dispatch.call(null,inst_61324));
var state_61329__$1 = state_61329;
var statearr_61355_61400 = state_61329__$1;
(statearr_61355_61400[(2)] = inst_61325);

(statearr_61355_61400[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61330 === (8))){
var inst_61296 = (state_61329[(7)]);
var inst_61301 = inst_61296.cljs$lang$protocol_mask$partition0$;
var inst_61302 = (inst_61301 & (64));
var inst_61303 = inst_61296.cljs$core$ISeq$;
var inst_61304 = (cljs.core.PROTOCOL_SENTINEL === inst_61303);
var inst_61305 = ((inst_61302) || (inst_61304));
var state_61329__$1 = state_61329;
if(cljs.core.truth_(inst_61305)){
var statearr_61356_61401 = state_61329__$1;
(statearr_61356_61401[(1)] = (11));

} else {
var statearr_61357_61402 = state_61329__$1;
(statearr_61357_61402[(1)] = (12));

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
var statearr_61358 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61358[(0)] = athens$effects$state_machine__36918__auto__);

(statearr_61358[(1)] = (1));

return statearr_61358;
});
var athens$effects$state_machine__36918__auto____1 = (function (state_61329){
while(true){
var ret_value__36919__auto__ = (function (){try{while(true){
var result__36920__auto__ = switch__36917__auto__(state_61329);
if(cljs.core.keyword_identical_QMARK_(result__36920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36920__auto__;
}
break;
}
}catch (e61359){if((e61359 instanceof Object)){
var ex__36921__auto__ = e61359;
var statearr_61360_61403 = state_61329;
(statearr_61360_61403[(5)] = ex__36921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61359;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61404 = state_61329;
state_61329 = G__61404;
continue;
} else {
return ret_value__36919__auto__;
}
break;
}
});
athens$effects$state_machine__36918__auto__ = function(state_61329){
switch(arguments.length){
case 0:
return athens$effects$state_machine__36918__auto____0.call(this);
case 1:
return athens$effects$state_machine__36918__auto____1.call(this,state_61329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__36918__auto____0;
athens$effects$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__36918__auto____1;
return athens$effects$state_machine__36918__auto__;
})()
})();
var state__36987__auto__ = (function (){var statearr_61361 = (f__36986__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36986__auto__.cljs$core$IFn$_invoke$arity$0() : f__36986__auto__.call(null));
(statearr_61361[(6)] = c__36985__auto__);

return statearr_61361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36987__auto__);
}));

return c__36985__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61282_61374,G__61283_61375) : re_frame.core.reg_fx.call(null,G__61282_61374,G__61283_61375));
var G__61362_61405 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61363_61406 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61364){
var map__61365 = p__61364;
var map__61365__$1 = (((((!((map__61365 == null))))?(((((map__61365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61365):map__61365);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61365__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61365__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61365__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61365__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61367 = action;
var G__61367__$1 = (((G__61367 instanceof cljs.core.Keyword))?G__61367.fqn:null);
switch (G__61367__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61367__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61362_61405,G__61363_61406) : re_frame.core.reg_fx.call(null,G__61362_61405,G__61363_61406));

//# sourceMappingURL=athens.effects.js.map
