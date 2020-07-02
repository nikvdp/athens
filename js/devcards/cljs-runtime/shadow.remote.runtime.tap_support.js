goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__60530,p__60531){
var map__60532 = p__60530;
var map__60532__$1 = (((((!((map__60532 == null))))?(((((map__60532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60532):map__60532);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60532__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60533 = p__60531;
var map__60533__$1 = (((((!((map__60533 == null))))?(((((map__60533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60533):map__60533);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60533__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__60536,p__60537){
var map__60538 = p__60536;
var map__60538__$1 = (((((!((map__60538 == null))))?(((((map__60538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60538):map__60538);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60538__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60539 = p__60537;
var map__60539__$1 = (((((!((map__60539 == null))))?(((((map__60539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60539):map__60539);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60539__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__60544,p__60545){
var map__60546 = p__60544;
var map__60546__$1 = (((((!((map__60546 == null))))?(((((map__60546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60546):map__60546);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60546__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60546__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__60547 = p__60545;
var map__60547__$1 = (((((!((map__60547 == null))))?(((((map__60547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60547):map__60547);
var msg = map__60547__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60547__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__60550 = obj_support;
var map__60550__$1 = (((((!((map__60550 == null))))?(((((map__60550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60550):map__60550);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60550__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__60543_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60543_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60542_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60542_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__60552,tid){
var map__60553 = p__60552;
var map__60553__$1 = (((((!((map__60553 == null))))?(((((map__60553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60553):map__60553);
var svc = map__60553__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60553__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__60559 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__60560 = null;
var count__60561 = (0);
var i__60562 = (0);
while(true){
if((i__60562 < count__60561)){
var tid = chunk__60560.cljs$core$IIndexed$_nth$arity$2(null,i__60562);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60566 = seq__60559;
var G__60567 = chunk__60560;
var G__60568 = count__60561;
var G__60569 = (i__60562 + (1));
seq__60559 = G__60566;
chunk__60560 = G__60567;
count__60561 = G__60568;
i__60562 = G__60569;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60559);
if(temp__5735__auto__){
var seq__60559__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60559__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60559__$1);
var G__60570 = cljs.core.chunk_rest(seq__60559__$1);
var G__60571 = c__4609__auto__;
var G__60572 = cljs.core.count(c__4609__auto__);
var G__60573 = (0);
seq__60559 = G__60570;
chunk__60560 = G__60571;
count__60561 = G__60572;
i__60562 = G__60573;
continue;
} else {
var tid = cljs.core.first(seq__60559__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60574 = cljs.core.next(seq__60559__$1);
var G__60575 = null;
var G__60576 = (0);
var G__60577 = (0);
seq__60559 = G__60574;
chunk__60560 = G__60575;
count__60561 = G__60576;
i__60562 = G__60577;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__60555_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__60555_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__60556_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__60556_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__60557_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__60557_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__60558_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__60558_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__60563){
var map__60564 = p__60563;
var map__60564__$1 = (((((!((map__60564 == null))))?(((((map__60564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60564):map__60564);
var svc = map__60564__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60564__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60564__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
