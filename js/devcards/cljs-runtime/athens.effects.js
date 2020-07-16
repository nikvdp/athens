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
var G__61754_61846 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__61755_61847 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61754_61846,G__61755_61847) : re_frame.core.reg_fx.call(null,G__61754_61846,G__61755_61847));
var G__61756_61848 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__61757_61849 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61756_61848,G__61757_61849) : re_frame.core.reg_fx.call(null,G__61756_61848,G__61757_61849));
var G__61758_61850 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__61759_61851 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61758_61850,G__61759_61851) : re_frame.core.reg_fx.call(null,G__61758_61850,G__61759_61851));
var G__61760_61852 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61761_61853 = (function (p__61762){
var map__61763 = p__61762;
var map__61763__$1 = (((((!((map__61763 == null))))?(((((map__61763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61763):map__61763);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61763__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61763__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61763__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61763__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61763__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__37270__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37271__auto__ = (function (){var switch__37202__auto__ = (function (state_61807){
var state_val_61808 = (state_61807[(1)]);
if((state_val_61808 === (7))){
var inst_61774 = (state_61807[(7)]);
var inst_61774__$1 = (state_61807[(2)]);
var inst_61776 = (inst_61774__$1 == null);
var inst_61777 = cljs.core.not(inst_61776);
var state_61807__$1 = (function (){var statearr_61809 = state_61807;
(statearr_61809[(7)] = inst_61774__$1);

return statearr_61809;
})();
if(inst_61777){
var statearr_61810_61854 = state_61807__$1;
(statearr_61810_61854[(1)] = (8));

} else {
var statearr_61811_61855 = state_61807__$1;
(statearr_61811_61855[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61808 === (1))){
var state_61807__$1 = state_61807;
var G__61812_61856 = method;
var G__61812_61857__$1 = (((G__61812_61856 instanceof cljs.core.Keyword))?G__61812_61856.fqn:null);
switch (G__61812_61857__$1) {
case "post":
var statearr_61813_61859 = state_61807__$1;
(statearr_61813_61859[(1)] = (3));


break;
case "get":
var statearr_61814_61860 = state_61807__$1;
(statearr_61814_61860[(1)] = (4));


break;
case "put":
var statearr_61815_61861 = state_61807__$1;
(statearr_61815_61861[(1)] = (5));


break;
case "delete":
var statearr_61816_61862 = state_61807__$1;
(statearr_61816_61862[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61812_61857__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61808 === (4))){
var state_61807__$1 = state_61807;
var statearr_61817_61863 = state_61807__$1;
(statearr_61817_61863[(2)] = cljs_http.client.get);

(statearr_61817_61863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61808 === (15))){
var inst_61774 = (state_61807[(7)]);
var state_61807__$1 = state_61807;
var statearr_61818_61864 = state_61807__$1;
(statearr_61818_61864[(2)] = inst_61774);

(statearr_61818_61864[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61808 === (13))){
var inst_61787 = (state_61807[(2)]);
var state_61807__$1 = state_61807;
var statearr_61819_61865 = state_61807__$1;
(statearr_61819_61865[(2)] = inst_61787);

(statearr_61819_61865[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61808 === (6))){
var state_61807__$1 = state_61807;
var statearr_61820_61866 = state_61807__$1;
(statearr_61820_61866[(2)] = cljs_http.client.delete$);

(statearr_61820_61866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61808 === (17))){
var inst_61797 = (state_61807[(8)]);
var inst_61799 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61797);
var inst_61800 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61799) : re_frame.core.dispatch.call(null,inst_61799));
var state_61807__$1 = state_61807;
var statearr_61821_61867 = state_61807__$1;
(statearr_61821_61867[(2)] = inst_61800);

(statearr_61821_61867[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61808 === (3))){
var state_61807__$1 = state_61807;
var statearr_61822_61868 = state_61807__$1;
(statearr_61822_61868[(2)] = cljs_http.client.post);

(statearr_61822_61868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61808 === (12))){
var state_61807__$1 = state_61807;
var statearr_61823_61869 = state_61807__$1;
(statearr_61823_61869[(2)] = false);

(statearr_61823_61869[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61808 === (2))){
var inst_61771 = (state_61807[(2)]);
var inst_61772 = (inst_61771.cljs$core$IFn$_invoke$arity$2 ? inst_61771.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61771.call(null,url,opts));
var state_61807__$1 = state_61807;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61807__$1,(7),inst_61772);
} else {
if((state_val_61808 === (19))){
var inst_61805 = (state_61807[(2)]);
var state_61807__$1 = state_61807;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61807__$1,inst_61805);
} else {
if((state_val_61808 === (11))){
var state_61807__$1 = state_61807;
var statearr_61824_61870 = state_61807__$1;
(statearr_61824_61870[(2)] = true);

(statearr_61824_61870[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61808 === (9))){
var state_61807__$1 = state_61807;
var statearr_61825_61871 = state_61807__$1;
(statearr_61825_61871[(2)] = false);

(statearr_61825_61871[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61808 === (5))){
var state_61807__$1 = state_61807;
var statearr_61826_61872 = state_61807__$1;
(statearr_61826_61872[(2)] = cljs_http.client.put);

(statearr_61826_61872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61808 === (14))){
var inst_61774 = (state_61807[(7)]);
var inst_61792 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61774);
var state_61807__$1 = state_61807;
var statearr_61827_61873 = state_61807__$1;
(statearr_61827_61873[(2)] = inst_61792);

(statearr_61827_61873[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61808 === (16))){
var inst_61795 = (state_61807[(9)]);
var inst_61795__$1 = (state_61807[(2)]);
var inst_61796 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61795__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61795__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61807__$1 = (function (){var statearr_61828 = state_61807;
(statearr_61828[(9)] = inst_61795__$1);

(statearr_61828[(8)] = inst_61797);

return statearr_61828;
})();
if(cljs.core.truth_(inst_61796)){
var statearr_61829_61874 = state_61807__$1;
(statearr_61829_61874[(1)] = (17));

} else {
var statearr_61830_61875 = state_61807__$1;
(statearr_61830_61875[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61808 === (10))){
var inst_61790 = (state_61807[(2)]);
var state_61807__$1 = state_61807;
if(cljs.core.truth_(inst_61790)){
var statearr_61831_61876 = state_61807__$1;
(statearr_61831_61876[(1)] = (14));

} else {
var statearr_61832_61877 = state_61807__$1;
(statearr_61832_61877[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61808 === (18))){
var inst_61795 = (state_61807[(9)]);
var inst_61802 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61795);
var inst_61803 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61802) : re_frame.core.dispatch.call(null,inst_61802));
var state_61807__$1 = state_61807;
var statearr_61833_61878 = state_61807__$1;
(statearr_61833_61878[(2)] = inst_61803);

(statearr_61833_61878[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61808 === (8))){
var inst_61774 = (state_61807[(7)]);
var inst_61779 = inst_61774.cljs$lang$protocol_mask$partition0$;
var inst_61780 = (inst_61779 & (64));
var inst_61781 = inst_61774.cljs$core$ISeq$;
var inst_61782 = (cljs.core.PROTOCOL_SENTINEL === inst_61781);
var inst_61783 = ((inst_61780) || (inst_61782));
var state_61807__$1 = state_61807;
if(cljs.core.truth_(inst_61783)){
var statearr_61834_61879 = state_61807__$1;
(statearr_61834_61879[(1)] = (11));

} else {
var statearr_61835_61880 = state_61807__$1;
(statearr_61835_61880[(1)] = (12));

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
var athens$effects$state_machine__37203__auto__ = null;
var athens$effects$state_machine__37203__auto____0 = (function (){
var statearr_61836 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61836[(0)] = athens$effects$state_machine__37203__auto__);

(statearr_61836[(1)] = (1));

return statearr_61836;
});
var athens$effects$state_machine__37203__auto____1 = (function (state_61807){
while(true){
var ret_value__37204__auto__ = (function (){try{while(true){
var result__37205__auto__ = switch__37202__auto__(state_61807);
if(cljs.core.keyword_identical_QMARK_(result__37205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37205__auto__;
}
break;
}
}catch (e61837){if((e61837 instanceof Object)){
var ex__37206__auto__ = e61837;
var statearr_61838_61881 = state_61807;
(statearr_61838_61881[(5)] = ex__37206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61837;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61882 = state_61807;
state_61807 = G__61882;
continue;
} else {
return ret_value__37204__auto__;
}
break;
}
});
athens$effects$state_machine__37203__auto__ = function(state_61807){
switch(arguments.length){
case 0:
return athens$effects$state_machine__37203__auto____0.call(this);
case 1:
return athens$effects$state_machine__37203__auto____1.call(this,state_61807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__37203__auto____0;
athens$effects$state_machine__37203__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__37203__auto____1;
return athens$effects$state_machine__37203__auto__;
})()
})();
var state__37272__auto__ = (function (){var statearr_61839 = (f__37271__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37271__auto__.cljs$core$IFn$_invoke$arity$0() : f__37271__auto__.call(null));
(statearr_61839[(6)] = c__37270__auto__);

return statearr_61839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37272__auto__);
}));

return c__37270__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61760_61852,G__61761_61853) : re_frame.core.reg_fx.call(null,G__61760_61852,G__61761_61853));
var G__61840_61883 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61841_61884 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61842){
var map__61843 = p__61842;
var map__61843__$1 = (((((!((map__61843 == null))))?(((((map__61843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61843):map__61843);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61843__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61843__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61843__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61843__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61845 = action;
var G__61845__$1 = (((G__61845 instanceof cljs.core.Keyword))?G__61845.fqn:null);
switch (G__61845__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61845__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61840_61883,G__61841_61884) : re_frame.core.reg_fx.call(null,G__61840_61883,G__61841_61884));

//# sourceMappingURL=athens.effects.js.map
