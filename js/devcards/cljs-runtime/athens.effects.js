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
var G__61795_61887 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__61796_61888 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61795_61887,G__61796_61888) : re_frame.core.reg_fx.call(null,G__61795_61887,G__61796_61888));
var G__61797_61889 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__61798_61890 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61797_61889,G__61798_61890) : re_frame.core.reg_fx.call(null,G__61797_61889,G__61798_61890));
var G__61799_61891 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__61800_61892 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61799_61891,G__61800_61892) : re_frame.core.reg_fx.call(null,G__61799_61891,G__61800_61892));
var G__61801_61893 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61802_61894 = (function (p__61803){
var map__61804 = p__61803;
var map__61804__$1 = (((((!((map__61804 == null))))?(((((map__61804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61804):map__61804);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61804__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61804__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61804__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61804__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61804__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__43456__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43457__auto__ = (function (){var switch__43388__auto__ = (function (state_61848){
var state_val_61849 = (state_61848[(1)]);
if((state_val_61849 === (7))){
var inst_61815 = (state_61848[(7)]);
var inst_61815__$1 = (state_61848[(2)]);
var inst_61817 = (inst_61815__$1 == null);
var inst_61818 = cljs.core.not(inst_61817);
var state_61848__$1 = (function (){var statearr_61850 = state_61848;
(statearr_61850[(7)] = inst_61815__$1);

return statearr_61850;
})();
if(inst_61818){
var statearr_61851_61895 = state_61848__$1;
(statearr_61851_61895[(1)] = (8));

} else {
var statearr_61852_61896 = state_61848__$1;
(statearr_61852_61896[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61849 === (1))){
var state_61848__$1 = state_61848;
var G__61853_61897 = method;
var G__61853_61898__$1 = (((G__61853_61897 instanceof cljs.core.Keyword))?G__61853_61897.fqn:null);
switch (G__61853_61898__$1) {
case "post":
var statearr_61854_61900 = state_61848__$1;
(statearr_61854_61900[(1)] = (3));


break;
case "get":
var statearr_61855_61901 = state_61848__$1;
(statearr_61855_61901[(1)] = (4));


break;
case "put":
var statearr_61856_61902 = state_61848__$1;
(statearr_61856_61902[(1)] = (5));


break;
case "delete":
var statearr_61857_61903 = state_61848__$1;
(statearr_61857_61903[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61853_61898__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61849 === (4))){
var state_61848__$1 = state_61848;
var statearr_61858_61904 = state_61848__$1;
(statearr_61858_61904[(2)] = cljs_http.client.get);

(statearr_61858_61904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61849 === (15))){
var inst_61815 = (state_61848[(7)]);
var state_61848__$1 = state_61848;
var statearr_61859_61905 = state_61848__$1;
(statearr_61859_61905[(2)] = inst_61815);

(statearr_61859_61905[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61849 === (13))){
var inst_61828 = (state_61848[(2)]);
var state_61848__$1 = state_61848;
var statearr_61860_61906 = state_61848__$1;
(statearr_61860_61906[(2)] = inst_61828);

(statearr_61860_61906[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61849 === (6))){
var state_61848__$1 = state_61848;
var statearr_61861_61907 = state_61848__$1;
(statearr_61861_61907[(2)] = cljs_http.client.delete$);

(statearr_61861_61907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61849 === (17))){
var inst_61838 = (state_61848[(8)]);
var inst_61840 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61838);
var inst_61841 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61840) : re_frame.core.dispatch.call(null,inst_61840));
var state_61848__$1 = state_61848;
var statearr_61862_61908 = state_61848__$1;
(statearr_61862_61908[(2)] = inst_61841);

(statearr_61862_61908[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61849 === (3))){
var state_61848__$1 = state_61848;
var statearr_61863_61909 = state_61848__$1;
(statearr_61863_61909[(2)] = cljs_http.client.post);

(statearr_61863_61909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61849 === (12))){
var state_61848__$1 = state_61848;
var statearr_61864_61910 = state_61848__$1;
(statearr_61864_61910[(2)] = false);

(statearr_61864_61910[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61849 === (2))){
var inst_61812 = (state_61848[(2)]);
var inst_61813 = (inst_61812.cljs$core$IFn$_invoke$arity$2 ? inst_61812.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61812.call(null,url,opts));
var state_61848__$1 = state_61848;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61848__$1,(7),inst_61813);
} else {
if((state_val_61849 === (19))){
var inst_61846 = (state_61848[(2)]);
var state_61848__$1 = state_61848;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61848__$1,inst_61846);
} else {
if((state_val_61849 === (11))){
var state_61848__$1 = state_61848;
var statearr_61865_61911 = state_61848__$1;
(statearr_61865_61911[(2)] = true);

(statearr_61865_61911[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61849 === (9))){
var state_61848__$1 = state_61848;
var statearr_61866_61912 = state_61848__$1;
(statearr_61866_61912[(2)] = false);

(statearr_61866_61912[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61849 === (5))){
var state_61848__$1 = state_61848;
var statearr_61867_61913 = state_61848__$1;
(statearr_61867_61913[(2)] = cljs_http.client.put);

(statearr_61867_61913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61849 === (14))){
var inst_61815 = (state_61848[(7)]);
var inst_61833 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61815);
var state_61848__$1 = state_61848;
var statearr_61868_61914 = state_61848__$1;
(statearr_61868_61914[(2)] = inst_61833);

(statearr_61868_61914[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61849 === (16))){
var inst_61836 = (state_61848[(9)]);
var inst_61836__$1 = (state_61848[(2)]);
var inst_61837 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61836__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61838 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61836__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61848__$1 = (function (){var statearr_61869 = state_61848;
(statearr_61869[(8)] = inst_61838);

(statearr_61869[(9)] = inst_61836__$1);

return statearr_61869;
})();
if(cljs.core.truth_(inst_61837)){
var statearr_61870_61915 = state_61848__$1;
(statearr_61870_61915[(1)] = (17));

} else {
var statearr_61871_61916 = state_61848__$1;
(statearr_61871_61916[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61849 === (10))){
var inst_61831 = (state_61848[(2)]);
var state_61848__$1 = state_61848;
if(cljs.core.truth_(inst_61831)){
var statearr_61872_61917 = state_61848__$1;
(statearr_61872_61917[(1)] = (14));

} else {
var statearr_61873_61918 = state_61848__$1;
(statearr_61873_61918[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61849 === (18))){
var inst_61836 = (state_61848[(9)]);
var inst_61843 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61836);
var inst_61844 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61843) : re_frame.core.dispatch.call(null,inst_61843));
var state_61848__$1 = state_61848;
var statearr_61874_61919 = state_61848__$1;
(statearr_61874_61919[(2)] = inst_61844);

(statearr_61874_61919[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61849 === (8))){
var inst_61815 = (state_61848[(7)]);
var inst_61820 = inst_61815.cljs$lang$protocol_mask$partition0$;
var inst_61821 = (inst_61820 & (64));
var inst_61822 = inst_61815.cljs$core$ISeq$;
var inst_61823 = (cljs.core.PROTOCOL_SENTINEL === inst_61822);
var inst_61824 = ((inst_61821) || (inst_61823));
var state_61848__$1 = state_61848;
if(cljs.core.truth_(inst_61824)){
var statearr_61875_61920 = state_61848__$1;
(statearr_61875_61920[(1)] = (11));

} else {
var statearr_61876_61921 = state_61848__$1;
(statearr_61876_61921[(1)] = (12));

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
var athens$effects$state_machine__43389__auto__ = null;
var athens$effects$state_machine__43389__auto____0 = (function (){
var statearr_61877 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61877[(0)] = athens$effects$state_machine__43389__auto__);

(statearr_61877[(1)] = (1));

return statearr_61877;
});
var athens$effects$state_machine__43389__auto____1 = (function (state_61848){
while(true){
var ret_value__43390__auto__ = (function (){try{while(true){
var result__43391__auto__ = switch__43388__auto__(state_61848);
if(cljs.core.keyword_identical_QMARK_(result__43391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43391__auto__;
}
break;
}
}catch (e61878){if((e61878 instanceof Object)){
var ex__43392__auto__ = e61878;
var statearr_61879_61922 = state_61848;
(statearr_61879_61922[(5)] = ex__43392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61878;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61923 = state_61848;
state_61848 = G__61923;
continue;
} else {
return ret_value__43390__auto__;
}
break;
}
});
athens$effects$state_machine__43389__auto__ = function(state_61848){
switch(arguments.length){
case 0:
return athens$effects$state_machine__43389__auto____0.call(this);
case 1:
return athens$effects$state_machine__43389__auto____1.call(this,state_61848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__43389__auto____0;
athens$effects$state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__43389__auto____1;
return athens$effects$state_machine__43389__auto__;
})()
})();
var state__43458__auto__ = (function (){var statearr_61880 = (f__43457__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43457__auto__.cljs$core$IFn$_invoke$arity$0() : f__43457__auto__.call(null));
(statearr_61880[(6)] = c__43456__auto__);

return statearr_61880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43458__auto__);
}));

return c__43456__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61801_61893,G__61802_61894) : re_frame.core.reg_fx.call(null,G__61801_61893,G__61802_61894));
var G__61881_61924 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61882_61925 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61883){
var map__61884 = p__61883;
var map__61884__$1 = (((((!((map__61884 == null))))?(((((map__61884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61884):map__61884);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61884__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61884__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61884__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61884__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61886 = action;
var G__61886__$1 = (((G__61886 instanceof cljs.core.Keyword))?G__61886.fqn:null);
switch (G__61886__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61886__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61881_61924,G__61882_61925) : re_frame.core.reg_fx.call(null,G__61881_61924,G__61882_61925));

//# sourceMappingURL=athens.effects.js.map
