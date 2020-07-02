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
var G__61079_61171 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__61080_61172 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["OUTPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms))));

return cljs.core.println();
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61079_61171,G__61080_61172) : re_frame.core.reg_fx.call(null,G__61079_61171,G__61080_61172));
var G__61081_61173 = new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638);
var G__61082_61174 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61081_61173,G__61082_61174) : re_frame.core.reg_fx.call(null,G__61081_61173,G__61082_61174));
var G__61083_61175 = new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211);
var G__61084_61176 = (function (_){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(cljs.core.deref(athens.db.dsdb)));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61083_61175,G__61084_61176) : re_frame.core.reg_fx.call(null,G__61083_61175,G__61084_61176));
var G__61085_61177 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61086_61178 = (function (p__61087){
var map__61088 = p__61087;
var map__61088__$1 = (((((!((map__61088 == null))))?(((((map__61088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61088):map__61088);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61088__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61088__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61088__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61088__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61088__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__36985__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36986__auto__ = (function (){var switch__36917__auto__ = (function (state_61132){
var state_val_61133 = (state_61132[(1)]);
if((state_val_61133 === (7))){
var inst_61099 = (state_61132[(7)]);
var inst_61099__$1 = (state_61132[(2)]);
var inst_61101 = (inst_61099__$1 == null);
var inst_61102 = cljs.core.not(inst_61101);
var state_61132__$1 = (function (){var statearr_61134 = state_61132;
(statearr_61134[(7)] = inst_61099__$1);

return statearr_61134;
})();
if(inst_61102){
var statearr_61135_61179 = state_61132__$1;
(statearr_61135_61179[(1)] = (8));

} else {
var statearr_61136_61180 = state_61132__$1;
(statearr_61136_61180[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61133 === (1))){
var state_61132__$1 = state_61132;
var G__61137_61181 = method;
var G__61137_61182__$1 = (((G__61137_61181 instanceof cljs.core.Keyword))?G__61137_61181.fqn:null);
switch (G__61137_61182__$1) {
case "post":
var statearr_61138_61184 = state_61132__$1;
(statearr_61138_61184[(1)] = (3));


break;
case "get":
var statearr_61139_61185 = state_61132__$1;
(statearr_61139_61185[(1)] = (4));


break;
case "put":
var statearr_61140_61186 = state_61132__$1;
(statearr_61140_61186[(1)] = (5));


break;
case "delete":
var statearr_61141_61187 = state_61132__$1;
(statearr_61141_61187[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61137_61182__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61133 === (4))){
var state_61132__$1 = state_61132;
var statearr_61142_61188 = state_61132__$1;
(statearr_61142_61188[(2)] = cljs_http.client.get);

(statearr_61142_61188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61133 === (15))){
var inst_61099 = (state_61132[(7)]);
var state_61132__$1 = state_61132;
var statearr_61143_61189 = state_61132__$1;
(statearr_61143_61189[(2)] = inst_61099);

(statearr_61143_61189[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61133 === (13))){
var inst_61112 = (state_61132[(2)]);
var state_61132__$1 = state_61132;
var statearr_61144_61190 = state_61132__$1;
(statearr_61144_61190[(2)] = inst_61112);

(statearr_61144_61190[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61133 === (6))){
var state_61132__$1 = state_61132;
var statearr_61145_61191 = state_61132__$1;
(statearr_61145_61191[(2)] = cljs_http.client.delete$);

(statearr_61145_61191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61133 === (17))){
var inst_61122 = (state_61132[(8)]);
var inst_61124 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61122);
var inst_61125 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61124) : re_frame.core.dispatch.call(null,inst_61124));
var state_61132__$1 = state_61132;
var statearr_61146_61192 = state_61132__$1;
(statearr_61146_61192[(2)] = inst_61125);

(statearr_61146_61192[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61133 === (3))){
var state_61132__$1 = state_61132;
var statearr_61147_61193 = state_61132__$1;
(statearr_61147_61193[(2)] = cljs_http.client.post);

(statearr_61147_61193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61133 === (12))){
var state_61132__$1 = state_61132;
var statearr_61148_61194 = state_61132__$1;
(statearr_61148_61194[(2)] = false);

(statearr_61148_61194[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61133 === (2))){
var inst_61096 = (state_61132[(2)]);
var inst_61097 = (inst_61096.cljs$core$IFn$_invoke$arity$2 ? inst_61096.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61096.call(null,url,opts));
var state_61132__$1 = state_61132;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61132__$1,(7),inst_61097);
} else {
if((state_val_61133 === (19))){
var inst_61130 = (state_61132[(2)]);
var state_61132__$1 = state_61132;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61132__$1,inst_61130);
} else {
if((state_val_61133 === (11))){
var state_61132__$1 = state_61132;
var statearr_61149_61195 = state_61132__$1;
(statearr_61149_61195[(2)] = true);

(statearr_61149_61195[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61133 === (9))){
var state_61132__$1 = state_61132;
var statearr_61150_61196 = state_61132__$1;
(statearr_61150_61196[(2)] = false);

(statearr_61150_61196[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61133 === (5))){
var state_61132__$1 = state_61132;
var statearr_61151_61197 = state_61132__$1;
(statearr_61151_61197[(2)] = cljs_http.client.put);

(statearr_61151_61197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61133 === (14))){
var inst_61099 = (state_61132[(7)]);
var inst_61117 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61099);
var state_61132__$1 = state_61132;
var statearr_61152_61198 = state_61132__$1;
(statearr_61152_61198[(2)] = inst_61117);

(statearr_61152_61198[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61133 === (16))){
var inst_61120 = (state_61132[(9)]);
var inst_61120__$1 = (state_61132[(2)]);
var inst_61121 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61120__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61122 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61120__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61132__$1 = (function (){var statearr_61153 = state_61132;
(statearr_61153[(9)] = inst_61120__$1);

(statearr_61153[(8)] = inst_61122);

return statearr_61153;
})();
if(cljs.core.truth_(inst_61121)){
var statearr_61154_61199 = state_61132__$1;
(statearr_61154_61199[(1)] = (17));

} else {
var statearr_61155_61200 = state_61132__$1;
(statearr_61155_61200[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61133 === (10))){
var inst_61115 = (state_61132[(2)]);
var state_61132__$1 = state_61132;
if(cljs.core.truth_(inst_61115)){
var statearr_61156_61201 = state_61132__$1;
(statearr_61156_61201[(1)] = (14));

} else {
var statearr_61157_61202 = state_61132__$1;
(statearr_61157_61202[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61133 === (18))){
var inst_61120 = (state_61132[(9)]);
var inst_61127 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61120);
var inst_61128 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61127) : re_frame.core.dispatch.call(null,inst_61127));
var state_61132__$1 = state_61132;
var statearr_61158_61203 = state_61132__$1;
(statearr_61158_61203[(2)] = inst_61128);

(statearr_61158_61203[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61133 === (8))){
var inst_61099 = (state_61132[(7)]);
var inst_61104 = inst_61099.cljs$lang$protocol_mask$partition0$;
var inst_61105 = (inst_61104 & (64));
var inst_61106 = inst_61099.cljs$core$ISeq$;
var inst_61107 = (cljs.core.PROTOCOL_SENTINEL === inst_61106);
var inst_61108 = ((inst_61105) || (inst_61107));
var state_61132__$1 = state_61132;
if(cljs.core.truth_(inst_61108)){
var statearr_61159_61204 = state_61132__$1;
(statearr_61159_61204[(1)] = (11));

} else {
var statearr_61160_61205 = state_61132__$1;
(statearr_61160_61205[(1)] = (12));

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
var statearr_61161 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61161[(0)] = athens$effects$state_machine__36918__auto__);

(statearr_61161[(1)] = (1));

return statearr_61161;
});
var athens$effects$state_machine__36918__auto____1 = (function (state_61132){
while(true){
var ret_value__36919__auto__ = (function (){try{while(true){
var result__36920__auto__ = switch__36917__auto__(state_61132);
if(cljs.core.keyword_identical_QMARK_(result__36920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36920__auto__;
}
break;
}
}catch (e61162){if((e61162 instanceof Object)){
var ex__36921__auto__ = e61162;
var statearr_61163_61206 = state_61132;
(statearr_61163_61206[(5)] = ex__36921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61162;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61207 = state_61132;
state_61132 = G__61207;
continue;
} else {
return ret_value__36919__auto__;
}
break;
}
});
athens$effects$state_machine__36918__auto__ = function(state_61132){
switch(arguments.length){
case 0:
return athens$effects$state_machine__36918__auto____0.call(this);
case 1:
return athens$effects$state_machine__36918__auto____1.call(this,state_61132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__36918__auto____0;
athens$effects$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__36918__auto____1;
return athens$effects$state_machine__36918__auto__;
})()
})();
var state__36987__auto__ = (function (){var statearr_61164 = (f__36986__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36986__auto__.cljs$core$IFn$_invoke$arity$0() : f__36986__auto__.call(null));
(statearr_61164[(6)] = c__36985__auto__);

return statearr_61164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36987__auto__);
}));

return c__36985__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61085_61177,G__61086_61178) : re_frame.core.reg_fx.call(null,G__61085_61177,G__61086_61178));
var G__61165_61208 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61166_61209 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61167){
var map__61168 = p__61167;
var map__61168__$1 = (((((!((map__61168 == null))))?(((((map__61168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61168):map__61168);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61168__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61168__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61168__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61168__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61170 = action;
var G__61170__$1 = (((G__61170 instanceof cljs.core.Keyword))?G__61170.fqn:null);
switch (G__61170__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61170__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61165_61208,G__61166_61209) : re_frame.core.reg_fx.call(null,G__61165_61208,G__61166_61209));

//# sourceMappingURL=athens.effects.js.map
