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
var G__52177_52274 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__52178_52275 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["OUTPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms))));

return cljs.core.println();
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__52177_52274,G__52178_52275) : re_frame.core.reg_fx.call(null,G__52177_52274,G__52178_52275));
var G__52179_52276 = new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638);
var G__52180_52277 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__52179_52276,G__52180_52277) : re_frame.core.reg_fx.call(null,G__52179_52276,G__52180_52277));
var G__52181_52278 = new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211);
var G__52182_52279 = (function (_){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(cljs.core.deref(athens.db.dsdb)));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__52181_52278,G__52182_52279) : re_frame.core.reg_fx.call(null,G__52181_52278,G__52182_52279));
var G__52183_52280 = new cljs.core.Keyword(null,"http","http",382524695);
var G__52184_52281 = (function (p__52185){
var map__52186 = p__52185;
var map__52186__$1 = (((((!((map__52186 == null))))?(((((map__52186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52186):map__52186);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52186__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52186__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52186__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52186__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52186__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__38856__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38857__auto__ = (function (){var switch__38788__auto__ = (function (state_52230){
var state_val_52231 = (state_52230[(1)]);
if((state_val_52231 === (7))){
var inst_52197 = (state_52230[(7)]);
var inst_52197__$1 = (state_52230[(2)]);
var inst_52199 = (inst_52197__$1 == null);
var inst_52200 = cljs.core.not(inst_52199);
var state_52230__$1 = (function (){var statearr_52232 = state_52230;
(statearr_52232[(7)] = inst_52197__$1);

return statearr_52232;
})();
if(inst_52200){
var statearr_52233_52282 = state_52230__$1;
(statearr_52233_52282[(1)] = (8));

} else {
var statearr_52234_52283 = state_52230__$1;
(statearr_52234_52283[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52231 === (1))){
var state_52230__$1 = state_52230;
var G__52235_52284 = method;
var G__52235_52285__$1 = (((G__52235_52284 instanceof cljs.core.Keyword))?G__52235_52284.fqn:null);
switch (G__52235_52285__$1) {
case "post":
var statearr_52236_52287 = state_52230__$1;
(statearr_52236_52287[(1)] = (3));


break;
case "get":
var statearr_52237_52288 = state_52230__$1;
(statearr_52237_52288[(1)] = (4));


break;
case "put":
var statearr_52238_52289 = state_52230__$1;
(statearr_52238_52289[(1)] = (5));


break;
case "delete":
var statearr_52239_52290 = state_52230__$1;
(statearr_52239_52290[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52235_52285__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52231 === (4))){
var state_52230__$1 = state_52230;
var statearr_52240_52291 = state_52230__$1;
(statearr_52240_52291[(2)] = cljs_http.client.get);

(statearr_52240_52291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52231 === (15))){
var inst_52197 = (state_52230[(7)]);
var state_52230__$1 = state_52230;
var statearr_52241_52292 = state_52230__$1;
(statearr_52241_52292[(2)] = inst_52197);

(statearr_52241_52292[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52231 === (13))){
var inst_52210 = (state_52230[(2)]);
var state_52230__$1 = state_52230;
var statearr_52242_52293 = state_52230__$1;
(statearr_52242_52293[(2)] = inst_52210);

(statearr_52242_52293[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52231 === (6))){
var state_52230__$1 = state_52230;
var statearr_52243_52295 = state_52230__$1;
(statearr_52243_52295[(2)] = cljs_http.client.delete$);

(statearr_52243_52295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52231 === (17))){
var inst_52220 = (state_52230[(8)]);
var inst_52222 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_52220);
var inst_52223 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_52222) : re_frame.core.dispatch.call(null,inst_52222));
var state_52230__$1 = state_52230;
var statearr_52244_52296 = state_52230__$1;
(statearr_52244_52296[(2)] = inst_52223);

(statearr_52244_52296[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52231 === (3))){
var state_52230__$1 = state_52230;
var statearr_52245_52298 = state_52230__$1;
(statearr_52245_52298[(2)] = cljs_http.client.post);

(statearr_52245_52298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52231 === (12))){
var state_52230__$1 = state_52230;
var statearr_52246_52299 = state_52230__$1;
(statearr_52246_52299[(2)] = false);

(statearr_52246_52299[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52231 === (2))){
var inst_52194 = (state_52230[(2)]);
var inst_52195 = (inst_52194.cljs$core$IFn$_invoke$arity$2 ? inst_52194.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_52194.call(null,url,opts));
var state_52230__$1 = state_52230;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52230__$1,(7),inst_52195);
} else {
if((state_val_52231 === (19))){
var inst_52228 = (state_52230[(2)]);
var state_52230__$1 = state_52230;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52230__$1,inst_52228);
} else {
if((state_val_52231 === (11))){
var state_52230__$1 = state_52230;
var statearr_52247_52301 = state_52230__$1;
(statearr_52247_52301[(2)] = true);

(statearr_52247_52301[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52231 === (9))){
var state_52230__$1 = state_52230;
var statearr_52248_52302 = state_52230__$1;
(statearr_52248_52302[(2)] = false);

(statearr_52248_52302[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52231 === (5))){
var state_52230__$1 = state_52230;
var statearr_52249_52303 = state_52230__$1;
(statearr_52249_52303[(2)] = cljs_http.client.put);

(statearr_52249_52303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52231 === (14))){
var inst_52197 = (state_52230[(7)]);
var inst_52215 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_52197);
var state_52230__$1 = state_52230;
var statearr_52250_52304 = state_52230__$1;
(statearr_52250_52304[(2)] = inst_52215);

(statearr_52250_52304[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52231 === (16))){
var inst_52218 = (state_52230[(9)]);
var inst_52218__$1 = (state_52230[(2)]);
var inst_52219 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52218__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_52220 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52218__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_52230__$1 = (function (){var statearr_52252 = state_52230;
(statearr_52252[(9)] = inst_52218__$1);

(statearr_52252[(8)] = inst_52220);

return statearr_52252;
})();
if(cljs.core.truth_(inst_52219)){
var statearr_52254_52305 = state_52230__$1;
(statearr_52254_52305[(1)] = (17));

} else {
var statearr_52255_52306 = state_52230__$1;
(statearr_52255_52306[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52231 === (10))){
var inst_52213 = (state_52230[(2)]);
var state_52230__$1 = state_52230;
if(cljs.core.truth_(inst_52213)){
var statearr_52256_52307 = state_52230__$1;
(statearr_52256_52307[(1)] = (14));

} else {
var statearr_52257_52308 = state_52230__$1;
(statearr_52257_52308[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52231 === (18))){
var inst_52218 = (state_52230[(9)]);
var inst_52225 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_52218);
var inst_52226 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_52225) : re_frame.core.dispatch.call(null,inst_52225));
var state_52230__$1 = state_52230;
var statearr_52258_52309 = state_52230__$1;
(statearr_52258_52309[(2)] = inst_52226);

(statearr_52258_52309[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52231 === (8))){
var inst_52197 = (state_52230[(7)]);
var inst_52202 = inst_52197.cljs$lang$protocol_mask$partition0$;
var inst_52203 = (inst_52202 & (64));
var inst_52204 = inst_52197.cljs$core$ISeq$;
var inst_52205 = (cljs.core.PROTOCOL_SENTINEL === inst_52204);
var inst_52206 = ((inst_52203) || (inst_52205));
var state_52230__$1 = state_52230;
if(cljs.core.truth_(inst_52206)){
var statearr_52262_52310 = state_52230__$1;
(statearr_52262_52310[(1)] = (11));

} else {
var statearr_52263_52311 = state_52230__$1;
(statearr_52263_52311[(1)] = (12));

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
var statearr_52264 = [null,null,null,null,null,null,null,null,null,null];
(statearr_52264[(0)] = athens$effects$state_machine__38789__auto__);

(statearr_52264[(1)] = (1));

return statearr_52264;
});
var athens$effects$state_machine__38789__auto____1 = (function (state_52230){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_52230);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e52265){if((e52265 instanceof Object)){
var ex__38792__auto__ = e52265;
var statearr_52266_52312 = state_52230;
(statearr_52266_52312[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52265;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52313 = state_52230;
state_52230 = G__52313;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
athens$effects$state_machine__38789__auto__ = function(state_52230){
switch(arguments.length){
case 0:
return athens$effects$state_machine__38789__auto____0.call(this);
case 1:
return athens$effects$state_machine__38789__auto____1.call(this,state_52230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__38789__auto____0;
athens$effects$state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__38789__auto____1;
return athens$effects$state_machine__38789__auto__;
})()
})();
var state__38858__auto__ = (function (){var statearr_52267 = (f__38857__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38857__auto__.cljs$core$IFn$_invoke$arity$0() : f__38857__auto__.call(null));
(statearr_52267[(6)] = c__38856__auto__);

return statearr_52267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38858__auto__);
}));

return c__38856__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__52183_52280,G__52184_52281) : re_frame.core.reg_fx.call(null,G__52183_52280,G__52184_52281));
var G__52268_52314 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__52269_52315 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__52270){
var map__52271 = p__52270;
var map__52271__$1 = (((((!((map__52271 == null))))?(((((map__52271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52271):map__52271);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52271__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52271__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52271__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52271__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__52273 = action;
var G__52273__$1 = (((G__52273 instanceof cljs.core.Keyword))?G__52273.fqn:null);
switch (G__52273__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52273__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__52268_52314,G__52269_52315) : re_frame.core.reg_fx.call(null,G__52268_52314,G__52269_52315));

//# sourceMappingURL=athens.effects.js.map
