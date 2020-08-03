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
re_frame.core.reg_fx(new cljs.core.Keyword(null,"transact!","transact!",-822725810),(function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379),(function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949),(function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"http","http",382524695),(function (p__61617){
var map__61618 = p__61617;
var map__61618__$1 = (((((!((map__61618 == null))))?(((((map__61618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61618):map__61618);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61618__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61618__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61618__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61618__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61618__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__43461__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43462__auto__ = (function (){var switch__43394__auto__ = (function (state_61662){
var state_val_61663 = (state_61662[(1)]);
if((state_val_61663 === (7))){
var inst_61629 = (state_61662[(7)]);
var inst_61629__$1 = (state_61662[(2)]);
var inst_61631 = (inst_61629__$1 == null);
var inst_61632 = cljs.core.not(inst_61631);
var state_61662__$1 = (function (){var statearr_61664 = state_61662;
(statearr_61664[(7)] = inst_61629__$1);

return statearr_61664;
})();
if(inst_61632){
var statearr_61665_61699 = state_61662__$1;
(statearr_61665_61699[(1)] = (8));

} else {
var statearr_61666_61700 = state_61662__$1;
(statearr_61666_61700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61663 === (1))){
var state_61662__$1 = state_61662;
var G__61667_61701 = method;
var G__61667_61702__$1 = (((G__61667_61701 instanceof cljs.core.Keyword))?G__61667_61701.fqn:null);
switch (G__61667_61702__$1) {
case "post":
var statearr_61668_61704 = state_61662__$1;
(statearr_61668_61704[(1)] = (3));


break;
case "get":
var statearr_61669_61705 = state_61662__$1;
(statearr_61669_61705[(1)] = (4));


break;
case "put":
var statearr_61670_61706 = state_61662__$1;
(statearr_61670_61706[(1)] = (5));


break;
case "delete":
var statearr_61671_61707 = state_61662__$1;
(statearr_61671_61707[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61667_61702__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61663 === (4))){
var state_61662__$1 = state_61662;
var statearr_61672_61708 = state_61662__$1;
(statearr_61672_61708[(2)] = cljs_http.client.get);

(statearr_61672_61708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61663 === (15))){
var inst_61629 = (state_61662[(7)]);
var state_61662__$1 = state_61662;
var statearr_61673_61709 = state_61662__$1;
(statearr_61673_61709[(2)] = inst_61629);

(statearr_61673_61709[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61663 === (13))){
var inst_61642 = (state_61662[(2)]);
var state_61662__$1 = state_61662;
var statearr_61674_61710 = state_61662__$1;
(statearr_61674_61710[(2)] = inst_61642);

(statearr_61674_61710[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61663 === (6))){
var state_61662__$1 = state_61662;
var statearr_61675_61711 = state_61662__$1;
(statearr_61675_61711[(2)] = cljs_http.client.delete$);

(statearr_61675_61711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61663 === (17))){
var inst_61652 = (state_61662[(8)]);
var inst_61654 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61652);
var inst_61655 = re_frame.core.dispatch(inst_61654);
var state_61662__$1 = state_61662;
var statearr_61676_61712 = state_61662__$1;
(statearr_61676_61712[(2)] = inst_61655);

(statearr_61676_61712[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61663 === (3))){
var state_61662__$1 = state_61662;
var statearr_61677_61713 = state_61662__$1;
(statearr_61677_61713[(2)] = cljs_http.client.post);

(statearr_61677_61713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61663 === (12))){
var state_61662__$1 = state_61662;
var statearr_61678_61714 = state_61662__$1;
(statearr_61678_61714[(2)] = false);

(statearr_61678_61714[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61663 === (2))){
var inst_61626 = (state_61662[(2)]);
var inst_61627 = (inst_61626.cljs$core$IFn$_invoke$arity$2 ? inst_61626.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61626.call(null,url,opts));
var state_61662__$1 = state_61662;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61662__$1,(7),inst_61627);
} else {
if((state_val_61663 === (19))){
var inst_61660 = (state_61662[(2)]);
var state_61662__$1 = state_61662;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61662__$1,inst_61660);
} else {
if((state_val_61663 === (11))){
var state_61662__$1 = state_61662;
var statearr_61679_61715 = state_61662__$1;
(statearr_61679_61715[(2)] = true);

(statearr_61679_61715[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61663 === (9))){
var state_61662__$1 = state_61662;
var statearr_61680_61716 = state_61662__$1;
(statearr_61680_61716[(2)] = false);

(statearr_61680_61716[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61663 === (5))){
var state_61662__$1 = state_61662;
var statearr_61681_61717 = state_61662__$1;
(statearr_61681_61717[(2)] = cljs_http.client.put);

(statearr_61681_61717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61663 === (14))){
var inst_61629 = (state_61662[(7)]);
var inst_61647 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61629);
var state_61662__$1 = state_61662;
var statearr_61682_61718 = state_61662__$1;
(statearr_61682_61718[(2)] = inst_61647);

(statearr_61682_61718[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61663 === (16))){
var inst_61650 = (state_61662[(9)]);
var inst_61650__$1 = (state_61662[(2)]);
var inst_61651 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61650__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61650__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61662__$1 = (function (){var statearr_61683 = state_61662;
(statearr_61683[(8)] = inst_61652);

(statearr_61683[(9)] = inst_61650__$1);

return statearr_61683;
})();
if(cljs.core.truth_(inst_61651)){
var statearr_61684_61719 = state_61662__$1;
(statearr_61684_61719[(1)] = (17));

} else {
var statearr_61685_61720 = state_61662__$1;
(statearr_61685_61720[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61663 === (10))){
var inst_61645 = (state_61662[(2)]);
var state_61662__$1 = state_61662;
if(cljs.core.truth_(inst_61645)){
var statearr_61686_61721 = state_61662__$1;
(statearr_61686_61721[(1)] = (14));

} else {
var statearr_61687_61722 = state_61662__$1;
(statearr_61687_61722[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61663 === (18))){
var inst_61650 = (state_61662[(9)]);
var inst_61657 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61650);
var inst_61658 = re_frame.core.dispatch(inst_61657);
var state_61662__$1 = state_61662;
var statearr_61688_61723 = state_61662__$1;
(statearr_61688_61723[(2)] = inst_61658);

(statearr_61688_61723[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61663 === (8))){
var inst_61629 = (state_61662[(7)]);
var inst_61634 = inst_61629.cljs$lang$protocol_mask$partition0$;
var inst_61635 = (inst_61634 & (64));
var inst_61636 = inst_61629.cljs$core$ISeq$;
var inst_61637 = (cljs.core.PROTOCOL_SENTINEL === inst_61636);
var inst_61638 = ((inst_61635) || (inst_61637));
var state_61662__$1 = state_61662;
if(cljs.core.truth_(inst_61638)){
var statearr_61689_61724 = state_61662__$1;
(statearr_61689_61724[(1)] = (11));

} else {
var statearr_61690_61725 = state_61662__$1;
(statearr_61690_61725[(1)] = (12));

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
var athens$effects$state_machine__43395__auto__ = null;
var athens$effects$state_machine__43395__auto____0 = (function (){
var statearr_61691 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61691[(0)] = athens$effects$state_machine__43395__auto__);

(statearr_61691[(1)] = (1));

return statearr_61691;
});
var athens$effects$state_machine__43395__auto____1 = (function (state_61662){
while(true){
var ret_value__43396__auto__ = (function (){try{while(true){
var result__43397__auto__ = switch__43394__auto__(state_61662);
if(cljs.core.keyword_identical_QMARK_(result__43397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43397__auto__;
}
break;
}
}catch (e61692){if((e61692 instanceof Object)){
var ex__43398__auto__ = e61692;
var statearr_61693_61726 = state_61662;
(statearr_61693_61726[(5)] = ex__43398__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61692;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61727 = state_61662;
state_61662 = G__61727;
continue;
} else {
return ret_value__43396__auto__;
}
break;
}
});
athens$effects$state_machine__43395__auto__ = function(state_61662){
switch(arguments.length){
case 0:
return athens$effects$state_machine__43395__auto____0.call(this);
case 1:
return athens$effects$state_machine__43395__auto____1.call(this,state_61662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__43395__auto____0;
athens$effects$state_machine__43395__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__43395__auto____1;
return athens$effects$state_machine__43395__auto__;
})()
})();
var state__43463__auto__ = (function (){var statearr_61694 = (f__43462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43462__auto__.cljs$core$IFn$_invoke$arity$0() : f__43462__auto__.call(null));
(statearr_61694[(6)] = c__43461__auto__);

return statearr_61694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43463__auto__);
}));

return c__43461__auto__;
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"timeout","timeout",-318625318),(function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61695){
var map__61696 = p__61695;
var map__61696__$1 = (((((!((map__61696 == null))))?(((((map__61696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61696):map__61696);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61696__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61696__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61696__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61696__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61698 = action;
var G__61698__$1 = (((G__61698 instanceof cljs.core.Keyword))?G__61698.fqn:null);
switch (G__61698__$1) {
case "start":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(timers,cljs.core.assoc,id,setTimeout((function (){
return re_frame.core.dispatch(event);
}),wait));

break;
case "clear":
clearTimeout(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(timers),id));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(timers,cljs.core.dissoc,id);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61698__$1)].join('')));

}
});
})());

//# sourceMappingURL=athens.effects.js.map
