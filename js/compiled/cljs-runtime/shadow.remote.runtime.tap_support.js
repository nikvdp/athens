goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__68003,p__68004){
var map__68005 = p__68003;
var map__68005__$1 = (((((!((map__68005 == null))))?(((((map__68005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68005):map__68005);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68005__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__68006 = p__68004;
var map__68006__$1 = (((((!((map__68006 == null))))?(((((map__68006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68006):map__68006);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68006__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__68009,p__68010){
var map__68011 = p__68009;
var map__68011__$1 = (((((!((map__68011 == null))))?(((((map__68011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68011):map__68011);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68011__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__68012 = p__68010;
var map__68012__$1 = (((((!((map__68012 == null))))?(((((map__68012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68012):map__68012);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68012__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__68017,p__68018){
var map__68019 = p__68017;
var map__68019__$1 = (((((!((map__68019 == null))))?(((((map__68019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68019):map__68019);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68019__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68019__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__68020 = p__68018;
var map__68020__$1 = (((((!((map__68020 == null))))?(((((map__68020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68020):map__68020);
var msg = map__68020__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68020__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__68023 = obj_support;
var map__68023__$1 = (((((!((map__68023 == null))))?(((((map__68023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68023):map__68023);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68023__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__68016_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__68016_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__68015_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__68015_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__68025,tid){
var map__68026 = p__68025;
var map__68026__$1 = (((((!((map__68026 == null))))?(((((map__68026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68026):map__68026);
var svc = map__68026__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68026__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__68032 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__68033 = null;
var count__68034 = (0);
var i__68035 = (0);
while(true){
if((i__68035 < count__68034)){
var tid = chunk__68033.cljs$core$IIndexed$_nth$arity$2(null,i__68035);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68039 = seq__68032;
var G__68040 = chunk__68033;
var G__68041 = count__68034;
var G__68042 = (i__68035 + (1));
seq__68032 = G__68039;
chunk__68033 = G__68040;
count__68034 = G__68041;
i__68035 = G__68042;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__68032);
if(temp__5735__auto__){
var seq__68032__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68032__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__68032__$1);
var G__68043 = cljs.core.chunk_rest(seq__68032__$1);
var G__68044 = c__4609__auto__;
var G__68045 = cljs.core.count(c__4609__auto__);
var G__68046 = (0);
seq__68032 = G__68043;
chunk__68033 = G__68044;
count__68034 = G__68045;
i__68035 = G__68046;
continue;
} else {
var tid = cljs.core.first(seq__68032__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68047 = cljs.core.next(seq__68032__$1);
var G__68048 = null;
var G__68049 = (0);
var G__68050 = (0);
seq__68032 = G__68047;
chunk__68033 = G__68048;
count__68034 = G__68049;
i__68035 = G__68050;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__68028_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__68028_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__68029_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__68029_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__68030_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__68030_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__68031_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__68031_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__68036){
var map__68037 = p__68036;
var map__68037__$1 = (((((!((map__68037 == null))))?(((((map__68037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68037):map__68037);
var svc = map__68037__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68037__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68037__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
