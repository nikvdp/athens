goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__60948,p__60949){
var map__60950 = p__60948;
var map__60950__$1 = (((((!((map__60950 == null))))?(((((map__60950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60950):map__60950);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60950__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60951 = p__60949;
var map__60951__$1 = (((((!((map__60951 == null))))?(((((map__60951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60951):map__60951);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60951__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__60954,p__60955){
var map__60956 = p__60954;
var map__60956__$1 = (((((!((map__60956 == null))))?(((((map__60956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60956):map__60956);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60956__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60957 = p__60955;
var map__60957__$1 = (((((!((map__60957 == null))))?(((((map__60957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60957):map__60957);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60957__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__60962,p__60963){
var map__60964 = p__60962;
var map__60964__$1 = (((((!((map__60964 == null))))?(((((map__60964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60964):map__60964);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60964__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60964__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__60965 = p__60963;
var map__60965__$1 = (((((!((map__60965 == null))))?(((((map__60965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60965):map__60965);
var msg = map__60965__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60965__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__60968 = obj_support;
var map__60968__$1 = (((((!((map__60968 == null))))?(((((map__60968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60968):map__60968);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60968__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__60961_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60961_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60960_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60960_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__60970,tid){
var map__60971 = p__60970;
var map__60971__$1 = (((((!((map__60971 == null))))?(((((map__60971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60971):map__60971);
var svc = map__60971__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60971__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__60977 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__60978 = null;
var count__60979 = (0);
var i__60980 = (0);
while(true){
if((i__60980 < count__60979)){
var tid = chunk__60978.cljs$core$IIndexed$_nth$arity$2(null,i__60980);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60984 = seq__60977;
var G__60985 = chunk__60978;
var G__60986 = count__60979;
var G__60987 = (i__60980 + (1));
seq__60977 = G__60984;
chunk__60978 = G__60985;
count__60979 = G__60986;
i__60980 = G__60987;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60977);
if(temp__5735__auto__){
var seq__60977__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60977__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60977__$1);
var G__60988 = cljs.core.chunk_rest(seq__60977__$1);
var G__60989 = c__4609__auto__;
var G__60990 = cljs.core.count(c__4609__auto__);
var G__60991 = (0);
seq__60977 = G__60988;
chunk__60978 = G__60989;
count__60979 = G__60990;
i__60980 = G__60991;
continue;
} else {
var tid = cljs.core.first(seq__60977__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60992 = cljs.core.next(seq__60977__$1);
var G__60993 = null;
var G__60994 = (0);
var G__60995 = (0);
seq__60977 = G__60992;
chunk__60978 = G__60993;
count__60979 = G__60994;
i__60980 = G__60995;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__60973_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__60973_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__60974_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__60974_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__60975_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__60975_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__60976_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__60976_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__60981){
var map__60982 = p__60981;
var map__60982__$1 = (((((!((map__60982 == null))))?(((((map__60982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60982):map__60982);
var svc = map__60982__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60982__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60982__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
