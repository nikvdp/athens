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
var G__52183_52287 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__52184_52288 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__52183_52287,G__52184_52288) : re_frame.core.reg_fx.call(null,G__52183_52287,G__52184_52288));
var G__52185_52289 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__52186_52290 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__52185_52289,G__52186_52290) : re_frame.core.reg_fx.call(null,G__52185_52289,G__52186_52290));
var G__52187_52291 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__52188_52292 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__52187_52291,G__52188_52292) : re_frame.core.reg_fx.call(null,G__52187_52291,G__52188_52292));
var G__52192_52293 = new cljs.core.Keyword(null,"http","http",382524695);
var G__52193_52294 = (function (p__52194){
var map__52195 = p__52194;
var map__52195__$1 = (((((!((map__52195 == null))))?(((((map__52195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52195):map__52195);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52195__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52195__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52195__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52195__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52195__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__38853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38854__auto__ = (function (){var switch__38788__auto__ = (function (state_52242){
var state_val_52243 = (state_52242[(1)]);
if((state_val_52243 === (7))){
var inst_52209 = (state_52242[(7)]);
var inst_52209__$1 = (state_52242[(2)]);
var inst_52211 = (inst_52209__$1 == null);
var inst_52212 = cljs.core.not(inst_52211);
var state_52242__$1 = (function (){var statearr_52247 = state_52242;
(statearr_52247[(7)] = inst_52209__$1);

return statearr_52247;
})();
if(inst_52212){
var statearr_52248_52295 = state_52242__$1;
(statearr_52248_52295[(1)] = (8));

} else {
var statearr_52249_52296 = state_52242__$1;
(statearr_52249_52296[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52243 === (1))){
var state_52242__$1 = state_52242;
var G__52250_52297 = method;
var G__52250_52298__$1 = (((G__52250_52297 instanceof cljs.core.Keyword))?G__52250_52297.fqn:null);
switch (G__52250_52298__$1) {
case "post":
var statearr_52252_52300 = state_52242__$1;
(statearr_52252_52300[(1)] = (3));


break;
case "get":
var statearr_52254_52301 = state_52242__$1;
(statearr_52254_52301[(1)] = (4));


break;
case "put":
var statearr_52256_52302 = state_52242__$1;
(statearr_52256_52302[(1)] = (5));


break;
case "delete":
var statearr_52257_52303 = state_52242__$1;
(statearr_52257_52303[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52250_52298__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52243 === (4))){
var state_52242__$1 = state_52242;
var statearr_52258_52304 = state_52242__$1;
(statearr_52258_52304[(2)] = cljs_http.client.get);

(statearr_52258_52304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52243 === (15))){
var inst_52209 = (state_52242[(7)]);
var state_52242__$1 = state_52242;
var statearr_52259_52305 = state_52242__$1;
(statearr_52259_52305[(2)] = inst_52209);

(statearr_52259_52305[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52243 === (13))){
var inst_52222 = (state_52242[(2)]);
var state_52242__$1 = state_52242;
var statearr_52260_52306 = state_52242__$1;
(statearr_52260_52306[(2)] = inst_52222);

(statearr_52260_52306[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52243 === (6))){
var state_52242__$1 = state_52242;
var statearr_52261_52307 = state_52242__$1;
(statearr_52261_52307[(2)] = cljs_http.client.delete$);

(statearr_52261_52307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52243 === (17))){
var inst_52232 = (state_52242[(8)]);
var inst_52234 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_52232);
var inst_52235 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_52234) : re_frame.core.dispatch.call(null,inst_52234));
var state_52242__$1 = state_52242;
var statearr_52262_52308 = state_52242__$1;
(statearr_52262_52308[(2)] = inst_52235);

(statearr_52262_52308[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52243 === (3))){
var state_52242__$1 = state_52242;
var statearr_52263_52309 = state_52242__$1;
(statearr_52263_52309[(2)] = cljs_http.client.post);

(statearr_52263_52309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52243 === (12))){
var state_52242__$1 = state_52242;
var statearr_52264_52310 = state_52242__$1;
(statearr_52264_52310[(2)] = false);

(statearr_52264_52310[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52243 === (2))){
var inst_52206 = (state_52242[(2)]);
var inst_52207 = (inst_52206.cljs$core$IFn$_invoke$arity$2 ? inst_52206.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_52206.call(null,url,opts));
var state_52242__$1 = state_52242;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52242__$1,(7),inst_52207);
} else {
if((state_val_52243 === (19))){
var inst_52240 = (state_52242[(2)]);
var state_52242__$1 = state_52242;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52242__$1,inst_52240);
} else {
if((state_val_52243 === (11))){
var state_52242__$1 = state_52242;
var statearr_52265_52311 = state_52242__$1;
(statearr_52265_52311[(2)] = true);

(statearr_52265_52311[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52243 === (9))){
var state_52242__$1 = state_52242;
var statearr_52266_52312 = state_52242__$1;
(statearr_52266_52312[(2)] = false);

(statearr_52266_52312[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52243 === (5))){
var state_52242__$1 = state_52242;
var statearr_52267_52313 = state_52242__$1;
(statearr_52267_52313[(2)] = cljs_http.client.put);

(statearr_52267_52313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52243 === (14))){
var inst_52209 = (state_52242[(7)]);
var inst_52227 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_52209);
var state_52242__$1 = state_52242;
var statearr_52268_52314 = state_52242__$1;
(statearr_52268_52314[(2)] = inst_52227);

(statearr_52268_52314[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52243 === (16))){
var inst_52230 = (state_52242[(9)]);
var inst_52230__$1 = (state_52242[(2)]);
var inst_52231 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52230__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_52232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52230__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_52242__$1 = (function (){var statearr_52269 = state_52242;
(statearr_52269[(8)] = inst_52232);

(statearr_52269[(9)] = inst_52230__$1);

return statearr_52269;
})();
if(cljs.core.truth_(inst_52231)){
var statearr_52270_52315 = state_52242__$1;
(statearr_52270_52315[(1)] = (17));

} else {
var statearr_52271_52316 = state_52242__$1;
(statearr_52271_52316[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52243 === (10))){
var inst_52225 = (state_52242[(2)]);
var state_52242__$1 = state_52242;
if(cljs.core.truth_(inst_52225)){
var statearr_52272_52317 = state_52242__$1;
(statearr_52272_52317[(1)] = (14));

} else {
var statearr_52273_52318 = state_52242__$1;
(statearr_52273_52318[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52243 === (18))){
var inst_52230 = (state_52242[(9)]);
var inst_52237 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_52230);
var inst_52238 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_52237) : re_frame.core.dispatch.call(null,inst_52237));
var state_52242__$1 = state_52242;
var statearr_52274_52319 = state_52242__$1;
(statearr_52274_52319[(2)] = inst_52238);

(statearr_52274_52319[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52243 === (8))){
var inst_52209 = (state_52242[(7)]);
var inst_52214 = inst_52209.cljs$lang$protocol_mask$partition0$;
var inst_52215 = (inst_52214 & (64));
var inst_52216 = inst_52209.cljs$core$ISeq$;
var inst_52217 = (cljs.core.PROTOCOL_SENTINEL === inst_52216);
var inst_52218 = ((inst_52215) || (inst_52217));
var state_52242__$1 = state_52242;
if(cljs.core.truth_(inst_52218)){
var statearr_52275_52320 = state_52242__$1;
(statearr_52275_52320[(1)] = (11));

} else {
var statearr_52276_52321 = state_52242__$1;
(statearr_52276_52321[(1)] = (12));

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
var athens$effects$state_machine__38789__auto__ = null;
var athens$effects$state_machine__38789__auto____0 = (function (){
var statearr_52277 = [null,null,null,null,null,null,null,null,null,null];
(statearr_52277[(0)] = athens$effects$state_machine__38789__auto__);

(statearr_52277[(1)] = (1));

return statearr_52277;
});
var athens$effects$state_machine__38789__auto____1 = (function (state_52242){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_52242);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e52278){if((e52278 instanceof Object)){
var ex__38792__auto__ = e52278;
var statearr_52279_52322 = state_52242;
(statearr_52279_52322[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52278;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52323 = state_52242;
state_52242 = G__52323;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
athens$effects$state_machine__38789__auto__ = function(state_52242){
switch(arguments.length){
case 0:
return athens$effects$state_machine__38789__auto____0.call(this);
case 1:
return athens$effects$state_machine__38789__auto____1.call(this,state_52242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__38789__auto____0;
athens$effects$state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__38789__auto____1;
return athens$effects$state_machine__38789__auto__;
})()
})();
var state__38855__auto__ = (function (){var statearr_52280 = (f__38854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38854__auto__.cljs$core$IFn$_invoke$arity$0() : f__38854__auto__.call(null));
(statearr_52280[(6)] = c__38853__auto__);

return statearr_52280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38855__auto__);
}));

return c__38853__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__52192_52293,G__52193_52294) : re_frame.core.reg_fx.call(null,G__52192_52293,G__52193_52294));
var G__52281_52324 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__52282_52325 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__52283){
var map__52284 = p__52283;
var map__52284__$1 = (((((!((map__52284 == null))))?(((((map__52284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52284):map__52284);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52284__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52284__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52284__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52284__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__52286 = action;
var G__52286__$1 = (((G__52286 instanceof cljs.core.Keyword))?G__52286.fqn:null);
switch (G__52286__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52286__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__52281_52324,G__52282_52325) : re_frame.core.reg_fx.call(null,G__52281_52324,G__52282_52325));

//# sourceMappingURL=athens.effects.js.map
