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
var G__61307_61399 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__61308_61400 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["OUTPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms))));

return cljs.core.println();
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61307_61399,G__61308_61400) : re_frame.core.reg_fx.call(null,G__61307_61399,G__61308_61400));
var G__61309_61401 = new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638);
var G__61310_61402 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61309_61401,G__61310_61402) : re_frame.core.reg_fx.call(null,G__61309_61401,G__61310_61402));
var G__61311_61403 = new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211);
var G__61312_61404 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61311_61403,G__61312_61404) : re_frame.core.reg_fx.call(null,G__61311_61403,G__61312_61404));
var G__61313_61405 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61314_61406 = (function (p__61315){
var map__61316 = p__61315;
var map__61316__$1 = (((((!((map__61316 == null))))?(((((map__61316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61316):map__61316);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61316__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61316__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61316__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61316__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61316__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__36985__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36986__auto__ = (function (){var switch__36917__auto__ = (function (state_61360){
var state_val_61361 = (state_61360[(1)]);
if((state_val_61361 === (7))){
var inst_61327 = (state_61360[(7)]);
var inst_61327__$1 = (state_61360[(2)]);
var inst_61329 = (inst_61327__$1 == null);
var inst_61330 = cljs.core.not(inst_61329);
var state_61360__$1 = (function (){var statearr_61362 = state_61360;
(statearr_61362[(7)] = inst_61327__$1);

return statearr_61362;
})();
if(inst_61330){
var statearr_61363_61407 = state_61360__$1;
(statearr_61363_61407[(1)] = (8));

} else {
var statearr_61364_61408 = state_61360__$1;
(statearr_61364_61408[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61361 === (1))){
var state_61360__$1 = state_61360;
var G__61365_61409 = method;
var G__61365_61410__$1 = (((G__61365_61409 instanceof cljs.core.Keyword))?G__61365_61409.fqn:null);
switch (G__61365_61410__$1) {
case "post":
var statearr_61366_61412 = state_61360__$1;
(statearr_61366_61412[(1)] = (3));


break;
case "get":
var statearr_61367_61413 = state_61360__$1;
(statearr_61367_61413[(1)] = (4));


break;
case "put":
var statearr_61368_61414 = state_61360__$1;
(statearr_61368_61414[(1)] = (5));


break;
case "delete":
var statearr_61369_61415 = state_61360__$1;
(statearr_61369_61415[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61365_61410__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61361 === (4))){
var state_61360__$1 = state_61360;
var statearr_61370_61416 = state_61360__$1;
(statearr_61370_61416[(2)] = cljs_http.client.get);

(statearr_61370_61416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61361 === (15))){
var inst_61327 = (state_61360[(7)]);
var state_61360__$1 = state_61360;
var statearr_61371_61417 = state_61360__$1;
(statearr_61371_61417[(2)] = inst_61327);

(statearr_61371_61417[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61361 === (13))){
var inst_61340 = (state_61360[(2)]);
var state_61360__$1 = state_61360;
var statearr_61372_61418 = state_61360__$1;
(statearr_61372_61418[(2)] = inst_61340);

(statearr_61372_61418[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61361 === (6))){
var state_61360__$1 = state_61360;
var statearr_61373_61419 = state_61360__$1;
(statearr_61373_61419[(2)] = cljs_http.client.delete$);

(statearr_61373_61419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61361 === (17))){
var inst_61350 = (state_61360[(8)]);
var inst_61352 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61350);
var inst_61353 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61352) : re_frame.core.dispatch.call(null,inst_61352));
var state_61360__$1 = state_61360;
var statearr_61374_61420 = state_61360__$1;
(statearr_61374_61420[(2)] = inst_61353);

(statearr_61374_61420[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61361 === (3))){
var state_61360__$1 = state_61360;
var statearr_61375_61421 = state_61360__$1;
(statearr_61375_61421[(2)] = cljs_http.client.post);

(statearr_61375_61421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61361 === (12))){
var state_61360__$1 = state_61360;
var statearr_61376_61422 = state_61360__$1;
(statearr_61376_61422[(2)] = false);

(statearr_61376_61422[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61361 === (2))){
var inst_61324 = (state_61360[(2)]);
var inst_61325 = (inst_61324.cljs$core$IFn$_invoke$arity$2 ? inst_61324.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61324.call(null,url,opts));
var state_61360__$1 = state_61360;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61360__$1,(7),inst_61325);
} else {
if((state_val_61361 === (19))){
var inst_61358 = (state_61360[(2)]);
var state_61360__$1 = state_61360;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61360__$1,inst_61358);
} else {
if((state_val_61361 === (11))){
var state_61360__$1 = state_61360;
var statearr_61377_61423 = state_61360__$1;
(statearr_61377_61423[(2)] = true);

(statearr_61377_61423[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61361 === (9))){
var state_61360__$1 = state_61360;
var statearr_61378_61424 = state_61360__$1;
(statearr_61378_61424[(2)] = false);

(statearr_61378_61424[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61361 === (5))){
var state_61360__$1 = state_61360;
var statearr_61379_61425 = state_61360__$1;
(statearr_61379_61425[(2)] = cljs_http.client.put);

(statearr_61379_61425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61361 === (14))){
var inst_61327 = (state_61360[(7)]);
var inst_61345 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61327);
var state_61360__$1 = state_61360;
var statearr_61380_61426 = state_61360__$1;
(statearr_61380_61426[(2)] = inst_61345);

(statearr_61380_61426[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61361 === (16))){
var inst_61348 = (state_61360[(9)]);
var inst_61348__$1 = (state_61360[(2)]);
var inst_61349 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61348__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61348__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61360__$1 = (function (){var statearr_61381 = state_61360;
(statearr_61381[(8)] = inst_61350);

(statearr_61381[(9)] = inst_61348__$1);

return statearr_61381;
})();
if(cljs.core.truth_(inst_61349)){
var statearr_61382_61427 = state_61360__$1;
(statearr_61382_61427[(1)] = (17));

} else {
var statearr_61383_61428 = state_61360__$1;
(statearr_61383_61428[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61361 === (10))){
var inst_61343 = (state_61360[(2)]);
var state_61360__$1 = state_61360;
if(cljs.core.truth_(inst_61343)){
var statearr_61384_61429 = state_61360__$1;
(statearr_61384_61429[(1)] = (14));

} else {
var statearr_61385_61430 = state_61360__$1;
(statearr_61385_61430[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61361 === (18))){
var inst_61348 = (state_61360[(9)]);
var inst_61355 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61348);
var inst_61356 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61355) : re_frame.core.dispatch.call(null,inst_61355));
var state_61360__$1 = state_61360;
var statearr_61386_61431 = state_61360__$1;
(statearr_61386_61431[(2)] = inst_61356);

(statearr_61386_61431[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61361 === (8))){
var inst_61327 = (state_61360[(7)]);
var inst_61332 = inst_61327.cljs$lang$protocol_mask$partition0$;
var inst_61333 = (inst_61332 & (64));
var inst_61334 = inst_61327.cljs$core$ISeq$;
var inst_61335 = (cljs.core.PROTOCOL_SENTINEL === inst_61334);
var inst_61336 = ((inst_61333) || (inst_61335));
var state_61360__$1 = state_61360;
if(cljs.core.truth_(inst_61336)){
var statearr_61387_61432 = state_61360__$1;
(statearr_61387_61432[(1)] = (11));

} else {
var statearr_61388_61433 = state_61360__$1;
(statearr_61388_61433[(1)] = (12));

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
var statearr_61389 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61389[(0)] = athens$effects$state_machine__36918__auto__);

(statearr_61389[(1)] = (1));

return statearr_61389;
});
var athens$effects$state_machine__36918__auto____1 = (function (state_61360){
while(true){
var ret_value__36919__auto__ = (function (){try{while(true){
var result__36920__auto__ = switch__36917__auto__(state_61360);
if(cljs.core.keyword_identical_QMARK_(result__36920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36920__auto__;
}
break;
}
}catch (e61390){if((e61390 instanceof Object)){
var ex__36921__auto__ = e61390;
var statearr_61391_61434 = state_61360;
(statearr_61391_61434[(5)] = ex__36921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61390;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61435 = state_61360;
state_61360 = G__61435;
continue;
} else {
return ret_value__36919__auto__;
}
break;
}
});
athens$effects$state_machine__36918__auto__ = function(state_61360){
switch(arguments.length){
case 0:
return athens$effects$state_machine__36918__auto____0.call(this);
case 1:
return athens$effects$state_machine__36918__auto____1.call(this,state_61360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__36918__auto____0;
athens$effects$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__36918__auto____1;
return athens$effects$state_machine__36918__auto__;
})()
})();
var state__36987__auto__ = (function (){var statearr_61392 = (f__36986__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36986__auto__.cljs$core$IFn$_invoke$arity$0() : f__36986__auto__.call(null));
(statearr_61392[(6)] = c__36985__auto__);

return statearr_61392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36987__auto__);
}));

return c__36985__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61313_61405,G__61314_61406) : re_frame.core.reg_fx.call(null,G__61313_61405,G__61314_61406));
var G__61393_61436 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61394_61437 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61395){
var map__61396 = p__61395;
var map__61396__$1 = (((((!((map__61396 == null))))?(((((map__61396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61396):map__61396);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61396__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61396__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61396__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61396__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61398 = action;
var G__61398__$1 = (((G__61398 instanceof cljs.core.Keyword))?G__61398.fqn:null);
switch (G__61398__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61398__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61393_61436,G__61394_61437) : re_frame.core.reg_fx.call(null,G__61393_61436,G__61394_61437));

//# sourceMappingURL=athens.effects.js.map
