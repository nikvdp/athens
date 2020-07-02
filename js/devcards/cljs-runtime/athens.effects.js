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
var G__61211_61303 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__61212_61304 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["OUTPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms))));

return cljs.core.println();
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61211_61303,G__61212_61304) : re_frame.core.reg_fx.call(null,G__61211_61303,G__61212_61304));
var G__61213_61305 = new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638);
var G__61214_61306 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61213_61305,G__61214_61306) : re_frame.core.reg_fx.call(null,G__61213_61305,G__61214_61306));
var G__61215_61307 = new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211);
var G__61216_61308 = (function (_){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(cljs.core.deref(athens.db.dsdb)));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61215_61307,G__61216_61308) : re_frame.core.reg_fx.call(null,G__61215_61307,G__61216_61308));
var G__61217_61309 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61218_61310 = (function (p__61219){
var map__61220 = p__61219;
var map__61220__$1 = (((((!((map__61220 == null))))?(((((map__61220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61220):map__61220);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61220__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61220__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61220__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61220__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61220__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__36984__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36985__auto__ = (function (){var switch__36917__auto__ = (function (state_61264){
var state_val_61265 = (state_61264[(1)]);
if((state_val_61265 === (7))){
var inst_61231 = (state_61264[(7)]);
var inst_61231__$1 = (state_61264[(2)]);
var inst_61233 = (inst_61231__$1 == null);
var inst_61234 = cljs.core.not(inst_61233);
var state_61264__$1 = (function (){var statearr_61266 = state_61264;
(statearr_61266[(7)] = inst_61231__$1);

return statearr_61266;
})();
if(inst_61234){
var statearr_61267_61311 = state_61264__$1;
(statearr_61267_61311[(1)] = (8));

} else {
var statearr_61268_61312 = state_61264__$1;
(statearr_61268_61312[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61265 === (1))){
var state_61264__$1 = state_61264;
var G__61269_61313 = method;
var G__61269_61314__$1 = (((G__61269_61313 instanceof cljs.core.Keyword))?G__61269_61313.fqn:null);
switch (G__61269_61314__$1) {
case "post":
var statearr_61270_61316 = state_61264__$1;
(statearr_61270_61316[(1)] = (3));


break;
case "get":
var statearr_61271_61317 = state_61264__$1;
(statearr_61271_61317[(1)] = (4));


break;
case "put":
var statearr_61272_61318 = state_61264__$1;
(statearr_61272_61318[(1)] = (5));


break;
case "delete":
var statearr_61273_61319 = state_61264__$1;
(statearr_61273_61319[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61269_61314__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61265 === (4))){
var state_61264__$1 = state_61264;
var statearr_61274_61320 = state_61264__$1;
(statearr_61274_61320[(2)] = cljs_http.client.get);

(statearr_61274_61320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61265 === (15))){
var inst_61231 = (state_61264[(7)]);
var state_61264__$1 = state_61264;
var statearr_61275_61321 = state_61264__$1;
(statearr_61275_61321[(2)] = inst_61231);

(statearr_61275_61321[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61265 === (13))){
var inst_61244 = (state_61264[(2)]);
var state_61264__$1 = state_61264;
var statearr_61276_61322 = state_61264__$1;
(statearr_61276_61322[(2)] = inst_61244);

(statearr_61276_61322[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61265 === (6))){
var state_61264__$1 = state_61264;
var statearr_61277_61323 = state_61264__$1;
(statearr_61277_61323[(2)] = cljs_http.client.delete$);

(statearr_61277_61323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61265 === (17))){
var inst_61254 = (state_61264[(8)]);
var inst_61256 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61254);
var inst_61257 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61256) : re_frame.core.dispatch.call(null,inst_61256));
var state_61264__$1 = state_61264;
var statearr_61278_61324 = state_61264__$1;
(statearr_61278_61324[(2)] = inst_61257);

(statearr_61278_61324[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61265 === (3))){
var state_61264__$1 = state_61264;
var statearr_61279_61325 = state_61264__$1;
(statearr_61279_61325[(2)] = cljs_http.client.post);

(statearr_61279_61325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61265 === (12))){
var state_61264__$1 = state_61264;
var statearr_61280_61326 = state_61264__$1;
(statearr_61280_61326[(2)] = false);

(statearr_61280_61326[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61265 === (2))){
var inst_61228 = (state_61264[(2)]);
var inst_61229 = (inst_61228.cljs$core$IFn$_invoke$arity$2 ? inst_61228.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61228.call(null,url,opts));
var state_61264__$1 = state_61264;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61264__$1,(7),inst_61229);
} else {
if((state_val_61265 === (19))){
var inst_61262 = (state_61264[(2)]);
var state_61264__$1 = state_61264;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61264__$1,inst_61262);
} else {
if((state_val_61265 === (11))){
var state_61264__$1 = state_61264;
var statearr_61281_61327 = state_61264__$1;
(statearr_61281_61327[(2)] = true);

(statearr_61281_61327[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61265 === (9))){
var state_61264__$1 = state_61264;
var statearr_61282_61328 = state_61264__$1;
(statearr_61282_61328[(2)] = false);

(statearr_61282_61328[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61265 === (5))){
var state_61264__$1 = state_61264;
var statearr_61283_61329 = state_61264__$1;
(statearr_61283_61329[(2)] = cljs_http.client.put);

(statearr_61283_61329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61265 === (14))){
var inst_61231 = (state_61264[(7)]);
var inst_61249 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61231);
var state_61264__$1 = state_61264;
var statearr_61284_61330 = state_61264__$1;
(statearr_61284_61330[(2)] = inst_61249);

(statearr_61284_61330[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61265 === (16))){
var inst_61252 = (state_61264[(9)]);
var inst_61252__$1 = (state_61264[(2)]);
var inst_61253 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61252__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61252__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61264__$1 = (function (){var statearr_61285 = state_61264;
(statearr_61285[(8)] = inst_61254);

(statearr_61285[(9)] = inst_61252__$1);

return statearr_61285;
})();
if(cljs.core.truth_(inst_61253)){
var statearr_61286_61331 = state_61264__$1;
(statearr_61286_61331[(1)] = (17));

} else {
var statearr_61287_61332 = state_61264__$1;
(statearr_61287_61332[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61265 === (10))){
var inst_61247 = (state_61264[(2)]);
var state_61264__$1 = state_61264;
if(cljs.core.truth_(inst_61247)){
var statearr_61288_61333 = state_61264__$1;
(statearr_61288_61333[(1)] = (14));

} else {
var statearr_61289_61334 = state_61264__$1;
(statearr_61289_61334[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61265 === (18))){
var inst_61252 = (state_61264[(9)]);
var inst_61259 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61252);
var inst_61260 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61259) : re_frame.core.dispatch.call(null,inst_61259));
var state_61264__$1 = state_61264;
var statearr_61290_61335 = state_61264__$1;
(statearr_61290_61335[(2)] = inst_61260);

(statearr_61290_61335[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61265 === (8))){
var inst_61231 = (state_61264[(7)]);
var inst_61236 = inst_61231.cljs$lang$protocol_mask$partition0$;
var inst_61237 = (inst_61236 & (64));
var inst_61238 = inst_61231.cljs$core$ISeq$;
var inst_61239 = (cljs.core.PROTOCOL_SENTINEL === inst_61238);
var inst_61240 = ((inst_61237) || (inst_61239));
var state_61264__$1 = state_61264;
if(cljs.core.truth_(inst_61240)){
var statearr_61291_61336 = state_61264__$1;
(statearr_61291_61336[(1)] = (11));

} else {
var statearr_61292_61337 = state_61264__$1;
(statearr_61292_61337[(1)] = (12));

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
var statearr_61293 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61293[(0)] = athens$effects$state_machine__36918__auto__);

(statearr_61293[(1)] = (1));

return statearr_61293;
});
var athens$effects$state_machine__36918__auto____1 = (function (state_61264){
while(true){
var ret_value__36919__auto__ = (function (){try{while(true){
var result__36920__auto__ = switch__36917__auto__(state_61264);
if(cljs.core.keyword_identical_QMARK_(result__36920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36920__auto__;
}
break;
}
}catch (e61294){if((e61294 instanceof Object)){
var ex__36921__auto__ = e61294;
var statearr_61295_61338 = state_61264;
(statearr_61295_61338[(5)] = ex__36921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61294;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61339 = state_61264;
state_61264 = G__61339;
continue;
} else {
return ret_value__36919__auto__;
}
break;
}
});
athens$effects$state_machine__36918__auto__ = function(state_61264){
switch(arguments.length){
case 0:
return athens$effects$state_machine__36918__auto____0.call(this);
case 1:
return athens$effects$state_machine__36918__auto____1.call(this,state_61264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__36918__auto____0;
athens$effects$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__36918__auto____1;
return athens$effects$state_machine__36918__auto__;
})()
})();
var state__36986__auto__ = (function (){var statearr_61296 = (f__36985__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36985__auto__.cljs$core$IFn$_invoke$arity$0() : f__36985__auto__.call(null));
(statearr_61296[(6)] = c__36984__auto__);

return statearr_61296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36986__auto__);
}));

return c__36984__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61217_61309,G__61218_61310) : re_frame.core.reg_fx.call(null,G__61217_61309,G__61218_61310));
var G__61297_61340 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61298_61341 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61299){
var map__61300 = p__61299;
var map__61300__$1 = (((((!((map__61300 == null))))?(((((map__61300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61300):map__61300);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61300__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61300__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61300__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61300__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61302 = action;
var G__61302__$1 = (((G__61302 instanceof cljs.core.Keyword))?G__61302.fqn:null);
switch (G__61302__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61302__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61297_61340,G__61298_61341) : re_frame.core.reg_fx.call(null,G__61297_61340,G__61298_61341));

//# sourceMappingURL=athens.effects.js.map
