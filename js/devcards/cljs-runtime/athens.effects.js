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
var G__61073_61165 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__61074_61166 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["OUTPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms))));

return cljs.core.println();
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61073_61165,G__61074_61166) : re_frame.core.reg_fx.call(null,G__61073_61165,G__61074_61166));
var G__61075_61167 = new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638);
var G__61076_61168 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61075_61167,G__61076_61168) : re_frame.core.reg_fx.call(null,G__61075_61167,G__61076_61168));
var G__61077_61169 = new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211);
var G__61078_61170 = (function (_){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(cljs.core.deref(athens.db.dsdb)));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61077_61169,G__61078_61170) : re_frame.core.reg_fx.call(null,G__61077_61169,G__61078_61170));
var G__61079_61171 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61080_61172 = (function (p__61081){
var map__61082 = p__61081;
var map__61082__$1 = (((((!((map__61082 == null))))?(((((map__61082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61082):map__61082);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61082__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61082__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61082__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61082__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61082__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__36985__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36986__auto__ = (function (){var switch__36917__auto__ = (function (state_61126){
var state_val_61127 = (state_61126[(1)]);
if((state_val_61127 === (7))){
var inst_61093 = (state_61126[(7)]);
var inst_61093__$1 = (state_61126[(2)]);
var inst_61095 = (inst_61093__$1 == null);
var inst_61096 = cljs.core.not(inst_61095);
var state_61126__$1 = (function (){var statearr_61128 = state_61126;
(statearr_61128[(7)] = inst_61093__$1);

return statearr_61128;
})();
if(inst_61096){
var statearr_61129_61173 = state_61126__$1;
(statearr_61129_61173[(1)] = (8));

} else {
var statearr_61130_61174 = state_61126__$1;
(statearr_61130_61174[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61127 === (1))){
var state_61126__$1 = state_61126;
var G__61131_61175 = method;
var G__61131_61176__$1 = (((G__61131_61175 instanceof cljs.core.Keyword))?G__61131_61175.fqn:null);
switch (G__61131_61176__$1) {
case "post":
var statearr_61132_61178 = state_61126__$1;
(statearr_61132_61178[(1)] = (3));


break;
case "get":
var statearr_61133_61179 = state_61126__$1;
(statearr_61133_61179[(1)] = (4));


break;
case "put":
var statearr_61134_61180 = state_61126__$1;
(statearr_61134_61180[(1)] = (5));


break;
case "delete":
var statearr_61135_61181 = state_61126__$1;
(statearr_61135_61181[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61131_61176__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61127 === (4))){
var state_61126__$1 = state_61126;
var statearr_61136_61182 = state_61126__$1;
(statearr_61136_61182[(2)] = cljs_http.client.get);

(statearr_61136_61182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61127 === (15))){
var inst_61093 = (state_61126[(7)]);
var state_61126__$1 = state_61126;
var statearr_61137_61183 = state_61126__$1;
(statearr_61137_61183[(2)] = inst_61093);

(statearr_61137_61183[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61127 === (13))){
var inst_61106 = (state_61126[(2)]);
var state_61126__$1 = state_61126;
var statearr_61138_61184 = state_61126__$1;
(statearr_61138_61184[(2)] = inst_61106);

(statearr_61138_61184[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61127 === (6))){
var state_61126__$1 = state_61126;
var statearr_61139_61185 = state_61126__$1;
(statearr_61139_61185[(2)] = cljs_http.client.delete$);

(statearr_61139_61185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61127 === (17))){
var inst_61116 = (state_61126[(8)]);
var inst_61118 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61116);
var inst_61119 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61118) : re_frame.core.dispatch.call(null,inst_61118));
var state_61126__$1 = state_61126;
var statearr_61140_61186 = state_61126__$1;
(statearr_61140_61186[(2)] = inst_61119);

(statearr_61140_61186[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61127 === (3))){
var state_61126__$1 = state_61126;
var statearr_61141_61187 = state_61126__$1;
(statearr_61141_61187[(2)] = cljs_http.client.post);

(statearr_61141_61187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61127 === (12))){
var state_61126__$1 = state_61126;
var statearr_61142_61188 = state_61126__$1;
(statearr_61142_61188[(2)] = false);

(statearr_61142_61188[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61127 === (2))){
var inst_61090 = (state_61126[(2)]);
var inst_61091 = (inst_61090.cljs$core$IFn$_invoke$arity$2 ? inst_61090.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61090.call(null,url,opts));
var state_61126__$1 = state_61126;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61126__$1,(7),inst_61091);
} else {
if((state_val_61127 === (19))){
var inst_61124 = (state_61126[(2)]);
var state_61126__$1 = state_61126;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61126__$1,inst_61124);
} else {
if((state_val_61127 === (11))){
var state_61126__$1 = state_61126;
var statearr_61143_61189 = state_61126__$1;
(statearr_61143_61189[(2)] = true);

(statearr_61143_61189[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61127 === (9))){
var state_61126__$1 = state_61126;
var statearr_61144_61190 = state_61126__$1;
(statearr_61144_61190[(2)] = false);

(statearr_61144_61190[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61127 === (5))){
var state_61126__$1 = state_61126;
var statearr_61145_61191 = state_61126__$1;
(statearr_61145_61191[(2)] = cljs_http.client.put);

(statearr_61145_61191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61127 === (14))){
var inst_61093 = (state_61126[(7)]);
var inst_61111 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61093);
var state_61126__$1 = state_61126;
var statearr_61146_61192 = state_61126__$1;
(statearr_61146_61192[(2)] = inst_61111);

(statearr_61146_61192[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61127 === (16))){
var inst_61114 = (state_61126[(9)]);
var inst_61114__$1 = (state_61126[(2)]);
var inst_61115 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61114__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61116 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61114__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61126__$1 = (function (){var statearr_61147 = state_61126;
(statearr_61147[(9)] = inst_61114__$1);

(statearr_61147[(8)] = inst_61116);

return statearr_61147;
})();
if(cljs.core.truth_(inst_61115)){
var statearr_61148_61193 = state_61126__$1;
(statearr_61148_61193[(1)] = (17));

} else {
var statearr_61149_61194 = state_61126__$1;
(statearr_61149_61194[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61127 === (10))){
var inst_61109 = (state_61126[(2)]);
var state_61126__$1 = state_61126;
if(cljs.core.truth_(inst_61109)){
var statearr_61150_61195 = state_61126__$1;
(statearr_61150_61195[(1)] = (14));

} else {
var statearr_61151_61196 = state_61126__$1;
(statearr_61151_61196[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61127 === (18))){
var inst_61114 = (state_61126[(9)]);
var inst_61121 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61114);
var inst_61122 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61121) : re_frame.core.dispatch.call(null,inst_61121));
var state_61126__$1 = state_61126;
var statearr_61152_61197 = state_61126__$1;
(statearr_61152_61197[(2)] = inst_61122);

(statearr_61152_61197[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61127 === (8))){
var inst_61093 = (state_61126[(7)]);
var inst_61098 = inst_61093.cljs$lang$protocol_mask$partition0$;
var inst_61099 = (inst_61098 & (64));
var inst_61100 = inst_61093.cljs$core$ISeq$;
var inst_61101 = (cljs.core.PROTOCOL_SENTINEL === inst_61100);
var inst_61102 = ((inst_61099) || (inst_61101));
var state_61126__$1 = state_61126;
if(cljs.core.truth_(inst_61102)){
var statearr_61153_61198 = state_61126__$1;
(statearr_61153_61198[(1)] = (11));

} else {
var statearr_61154_61199 = state_61126__$1;
(statearr_61154_61199[(1)] = (12));

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
var statearr_61155 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61155[(0)] = athens$effects$state_machine__36918__auto__);

(statearr_61155[(1)] = (1));

return statearr_61155;
});
var athens$effects$state_machine__36918__auto____1 = (function (state_61126){
while(true){
var ret_value__36919__auto__ = (function (){try{while(true){
var result__36920__auto__ = switch__36917__auto__(state_61126);
if(cljs.core.keyword_identical_QMARK_(result__36920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36920__auto__;
}
break;
}
}catch (e61156){if((e61156 instanceof Object)){
var ex__36921__auto__ = e61156;
var statearr_61157_61200 = state_61126;
(statearr_61157_61200[(5)] = ex__36921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61156;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61201 = state_61126;
state_61126 = G__61201;
continue;
} else {
return ret_value__36919__auto__;
}
break;
}
});
athens$effects$state_machine__36918__auto__ = function(state_61126){
switch(arguments.length){
case 0:
return athens$effects$state_machine__36918__auto____0.call(this);
case 1:
return athens$effects$state_machine__36918__auto____1.call(this,state_61126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__36918__auto____0;
athens$effects$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__36918__auto____1;
return athens$effects$state_machine__36918__auto__;
})()
})();
var state__36987__auto__ = (function (){var statearr_61158 = (f__36986__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36986__auto__.cljs$core$IFn$_invoke$arity$0() : f__36986__auto__.call(null));
(statearr_61158[(6)] = c__36985__auto__);

return statearr_61158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36987__auto__);
}));

return c__36985__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61079_61171,G__61080_61172) : re_frame.core.reg_fx.call(null,G__61079_61171,G__61080_61172));
var G__61159_61202 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61160_61203 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61161){
var map__61162 = p__61161;
var map__61162__$1 = (((((!((map__61162 == null))))?(((((map__61162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61162):map__61162);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61162__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61162__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61162__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61162__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61164 = action;
var G__61164__$1 = (((G__61164 instanceof cljs.core.Keyword))?G__61164.fqn:null);
switch (G__61164__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61164__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61159_61202,G__61160_61203) : re_frame.core.reg_fx.call(null,G__61159_61202,G__61160_61203));

//# sourceMappingURL=athens.effects.js.map
