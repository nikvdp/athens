goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__60527,p__60528){
var map__60529 = p__60527;
var map__60529__$1 = (((((!((map__60529 == null))))?(((((map__60529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60529):map__60529);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60529__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60530 = p__60528;
var map__60530__$1 = (((((!((map__60530 == null))))?(((((map__60530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60530):map__60530);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60530__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__60533,p__60534){
var map__60535 = p__60533;
var map__60535__$1 = (((((!((map__60535 == null))))?(((((map__60535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60535):map__60535);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60535__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60536 = p__60534;
var map__60536__$1 = (((((!((map__60536 == null))))?(((((map__60536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60536):map__60536);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60536__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__60541,p__60542){
var map__60543 = p__60541;
var map__60543__$1 = (((((!((map__60543 == null))))?(((((map__60543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60543):map__60543);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60543__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60543__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__60544 = p__60542;
var map__60544__$1 = (((((!((map__60544 == null))))?(((((map__60544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60544):map__60544);
var msg = map__60544__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60544__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__60547 = obj_support;
var map__60547__$1 = (((((!((map__60547 == null))))?(((((map__60547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60547):map__60547);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60547__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__60540_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60540_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60539_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60539_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__60549,tid){
var map__60550 = p__60549;
var map__60550__$1 = (((((!((map__60550 == null))))?(((((map__60550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60550):map__60550);
var svc = map__60550__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60550__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__60556 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__60557 = null;
var count__60558 = (0);
var i__60559 = (0);
while(true){
if((i__60559 < count__60558)){
var tid = chunk__60557.cljs$core$IIndexed$_nth$arity$2(null,i__60559);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60566 = seq__60556;
var G__60567 = chunk__60557;
var G__60568 = count__60558;
var G__60569 = (i__60559 + (1));
seq__60556 = G__60566;
chunk__60557 = G__60567;
count__60558 = G__60568;
i__60559 = G__60569;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60556);
if(temp__5735__auto__){
var seq__60556__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60556__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60556__$1);
var G__60570 = cljs.core.chunk_rest(seq__60556__$1);
var G__60571 = c__4609__auto__;
var G__60572 = cljs.core.count(c__4609__auto__);
var G__60573 = (0);
seq__60556 = G__60570;
chunk__60557 = G__60571;
count__60558 = G__60572;
i__60559 = G__60573;
continue;
} else {
var tid = cljs.core.first(seq__60556__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60574 = cljs.core.next(seq__60556__$1);
var G__60575 = null;
var G__60576 = (0);
var G__60577 = (0);
seq__60556 = G__60574;
chunk__60557 = G__60575;
count__60558 = G__60576;
i__60559 = G__60577;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__60552_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__60552_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__60553_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__60553_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__60554_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__60554_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__60555_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__60555_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__60560){
var map__60561 = p__60560;
var map__60561__$1 = (((((!((map__60561 == null))))?(((((map__60561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60561):map__60561);
var svc = map__60561__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60561__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60561__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
