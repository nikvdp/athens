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
var G__61231_61325 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__61232_61326 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["OUTPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms))));

return cljs.core.println();
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61231_61325,G__61232_61326) : re_frame.core.reg_fx.call(null,G__61231_61325,G__61232_61326));
var G__61233_61327 = new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638);
var G__61234_61328 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61233_61327,G__61234_61328) : re_frame.core.reg_fx.call(null,G__61233_61327,G__61234_61328));
var G__61235_61329 = new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211);
var G__61236_61330 = (function (_){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(cljs.core.deref(athens.db.dsdb)));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61235_61329,G__61236_61330) : re_frame.core.reg_fx.call(null,G__61235_61329,G__61236_61330));
var G__61237_61331 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61238_61332 = (function (p__61239){
var map__61240 = p__61239;
var map__61240__$1 = (((((!((map__61240 == null))))?(((((map__61240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61240):map__61240);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61240__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61240__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61240__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61240__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61240__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__36984__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36986__auto__ = (function (){var switch__36917__auto__ = (function (state_61284){
var state_val_61285 = (state_61284[(1)]);
if((state_val_61285 === (7))){
var inst_61251 = (state_61284[(7)]);
var inst_61251__$1 = (state_61284[(2)]);
var inst_61253 = (inst_61251__$1 == null);
var inst_61254 = cljs.core.not(inst_61253);
var state_61284__$1 = (function (){var statearr_61286 = state_61284;
(statearr_61286[(7)] = inst_61251__$1);

return statearr_61286;
})();
if(inst_61254){
var statearr_61287_61333 = state_61284__$1;
(statearr_61287_61333[(1)] = (8));

} else {
var statearr_61288_61334 = state_61284__$1;
(statearr_61288_61334[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61285 === (1))){
var state_61284__$1 = state_61284;
var G__61289_61335 = method;
var G__61289_61336__$1 = (((G__61289_61335 instanceof cljs.core.Keyword))?G__61289_61335.fqn:null);
switch (G__61289_61336__$1) {
case "post":
var statearr_61290_61338 = state_61284__$1;
(statearr_61290_61338[(1)] = (3));


break;
case "get":
var statearr_61291_61339 = state_61284__$1;
(statearr_61291_61339[(1)] = (4));


break;
case "put":
var statearr_61292_61340 = state_61284__$1;
(statearr_61292_61340[(1)] = (5));


break;
case "delete":
var statearr_61293_61341 = state_61284__$1;
(statearr_61293_61341[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61289_61336__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61285 === (4))){
var state_61284__$1 = state_61284;
var statearr_61294_61342 = state_61284__$1;
(statearr_61294_61342[(2)] = cljs_http.client.get);

(statearr_61294_61342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61285 === (15))){
var inst_61251 = (state_61284[(7)]);
var state_61284__$1 = state_61284;
var statearr_61295_61343 = state_61284__$1;
(statearr_61295_61343[(2)] = inst_61251);

(statearr_61295_61343[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61285 === (13))){
var inst_61264 = (state_61284[(2)]);
var state_61284__$1 = state_61284;
var statearr_61296_61344 = state_61284__$1;
(statearr_61296_61344[(2)] = inst_61264);

(statearr_61296_61344[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61285 === (6))){
var state_61284__$1 = state_61284;
var statearr_61297_61345 = state_61284__$1;
(statearr_61297_61345[(2)] = cljs_http.client.delete$);

(statearr_61297_61345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61285 === (17))){
var inst_61274 = (state_61284[(8)]);
var inst_61276 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61274);
var inst_61277 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61276) : re_frame.core.dispatch.call(null,inst_61276));
var state_61284__$1 = state_61284;
var statearr_61298_61346 = state_61284__$1;
(statearr_61298_61346[(2)] = inst_61277);

(statearr_61298_61346[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61285 === (3))){
var state_61284__$1 = state_61284;
var statearr_61299_61347 = state_61284__$1;
(statearr_61299_61347[(2)] = cljs_http.client.post);

(statearr_61299_61347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61285 === (12))){
var state_61284__$1 = state_61284;
var statearr_61300_61348 = state_61284__$1;
(statearr_61300_61348[(2)] = false);

(statearr_61300_61348[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61285 === (2))){
var inst_61248 = (state_61284[(2)]);
var inst_61249 = (inst_61248.cljs$core$IFn$_invoke$arity$2 ? inst_61248.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61248.call(null,url,opts));
var state_61284__$1 = state_61284;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61284__$1,(7),inst_61249);
} else {
if((state_val_61285 === (19))){
var inst_61282 = (state_61284[(2)]);
var state_61284__$1 = state_61284;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61284__$1,inst_61282);
} else {
if((state_val_61285 === (11))){
var state_61284__$1 = state_61284;
var statearr_61301_61349 = state_61284__$1;
(statearr_61301_61349[(2)] = true);

(statearr_61301_61349[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61285 === (9))){
var state_61284__$1 = state_61284;
var statearr_61302_61350 = state_61284__$1;
(statearr_61302_61350[(2)] = false);

(statearr_61302_61350[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61285 === (5))){
var state_61284__$1 = state_61284;
var statearr_61303_61351 = state_61284__$1;
(statearr_61303_61351[(2)] = cljs_http.client.put);

(statearr_61303_61351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61285 === (14))){
var inst_61251 = (state_61284[(7)]);
var inst_61269 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61251);
var state_61284__$1 = state_61284;
var statearr_61304_61352 = state_61284__$1;
(statearr_61304_61352[(2)] = inst_61269);

(statearr_61304_61352[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61285 === (16))){
var inst_61272 = (state_61284[(9)]);
var inst_61272__$1 = (state_61284[(2)]);
var inst_61273 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61272__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61272__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61284__$1 = (function (){var statearr_61305 = state_61284;
(statearr_61305[(9)] = inst_61272__$1);

(statearr_61305[(8)] = inst_61274);

return statearr_61305;
})();
if(cljs.core.truth_(inst_61273)){
var statearr_61306_61353 = state_61284__$1;
(statearr_61306_61353[(1)] = (17));

} else {
var statearr_61307_61354 = state_61284__$1;
(statearr_61307_61354[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61285 === (10))){
var inst_61267 = (state_61284[(2)]);
var state_61284__$1 = state_61284;
if(cljs.core.truth_(inst_61267)){
var statearr_61308_61355 = state_61284__$1;
(statearr_61308_61355[(1)] = (14));

} else {
var statearr_61309_61356 = state_61284__$1;
(statearr_61309_61356[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61285 === (18))){
var inst_61272 = (state_61284[(9)]);
var inst_61279 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61272);
var inst_61280 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61279) : re_frame.core.dispatch.call(null,inst_61279));
var state_61284__$1 = state_61284;
var statearr_61310_61357 = state_61284__$1;
(statearr_61310_61357[(2)] = inst_61280);

(statearr_61310_61357[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61285 === (8))){
var inst_61251 = (state_61284[(7)]);
var inst_61256 = inst_61251.cljs$lang$protocol_mask$partition0$;
var inst_61257 = (inst_61256 & (64));
var inst_61258 = inst_61251.cljs$core$ISeq$;
var inst_61259 = (cljs.core.PROTOCOL_SENTINEL === inst_61258);
var inst_61260 = ((inst_61257) || (inst_61259));
var state_61284__$1 = state_61284;
if(cljs.core.truth_(inst_61260)){
var statearr_61311_61358 = state_61284__$1;
(statearr_61311_61358[(1)] = (11));

} else {
var statearr_61312_61359 = state_61284__$1;
(statearr_61312_61359[(1)] = (12));

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
var statearr_61313 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61313[(0)] = athens$effects$state_machine__36918__auto__);

(statearr_61313[(1)] = (1));

return statearr_61313;
});
var athens$effects$state_machine__36918__auto____1 = (function (state_61284){
while(true){
var ret_value__36919__auto__ = (function (){try{while(true){
var result__36920__auto__ = switch__36917__auto__(state_61284);
if(cljs.core.keyword_identical_QMARK_(result__36920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36920__auto__;
}
break;
}
}catch (e61314){if((e61314 instanceof Object)){
var ex__36921__auto__ = e61314;
var statearr_61317_61360 = state_61284;
(statearr_61317_61360[(5)] = ex__36921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61314;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61361 = state_61284;
state_61284 = G__61361;
continue;
} else {
return ret_value__36919__auto__;
}
break;
}
});
athens$effects$state_machine__36918__auto__ = function(state_61284){
switch(arguments.length){
case 0:
return athens$effects$state_machine__36918__auto____0.call(this);
case 1:
return athens$effects$state_machine__36918__auto____1.call(this,state_61284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__36918__auto____0;
athens$effects$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__36918__auto____1;
return athens$effects$state_machine__36918__auto__;
})()
})();
var state__36987__auto__ = (function (){var statearr_61318 = (f__36986__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36986__auto__.cljs$core$IFn$_invoke$arity$0() : f__36986__auto__.call(null));
(statearr_61318[(6)] = c__36984__auto__);

return statearr_61318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36987__auto__);
}));

return c__36984__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61237_61331,G__61238_61332) : re_frame.core.reg_fx.call(null,G__61237_61331,G__61238_61332));
var G__61319_61362 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61320_61363 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61321){
var map__61322 = p__61321;
var map__61322__$1 = (((((!((map__61322 == null))))?(((((map__61322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61322):map__61322);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61322__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61322__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61322__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61322__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61324 = action;
var G__61324__$1 = (((G__61324 instanceof cljs.core.Keyword))?G__61324.fqn:null);
switch (G__61324__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61324__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61319_61362,G__61320_61363) : re_frame.core.reg_fx.call(null,G__61319_61362,G__61320_61363));

//# sourceMappingURL=athens.effects.js.map
