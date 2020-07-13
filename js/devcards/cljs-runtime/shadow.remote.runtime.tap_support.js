goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__61006,p__61007){
var map__61008 = p__61006;
var map__61008__$1 = (((((!((map__61008 == null))))?(((((map__61008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61008):map__61008);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61008__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__61009 = p__61007;
var map__61009__$1 = (((((!((map__61009 == null))))?(((((map__61009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61009):map__61009);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61009__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__61012,p__61013){
var map__61014 = p__61012;
var map__61014__$1 = (((((!((map__61014 == null))))?(((((map__61014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61014):map__61014);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61014__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__61015 = p__61013;
var map__61015__$1 = (((((!((map__61015 == null))))?(((((map__61015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61015):map__61015);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61015__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__61020,p__61021){
var map__61022 = p__61020;
var map__61022__$1 = (((((!((map__61022 == null))))?(((((map__61022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61022):map__61022);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61022__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61022__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__61023 = p__61021;
var map__61023__$1 = (((((!((map__61023 == null))))?(((((map__61023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61023):map__61023);
var msg = map__61023__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61023__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__61026 = obj_support;
var map__61026__$1 = (((((!((map__61026 == null))))?(((((map__61026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61026):map__61026);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61026__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__61019_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__61019_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__61018_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__61018_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__61028,tid){
var map__61029 = p__61028;
var map__61029__$1 = (((((!((map__61029 == null))))?(((((map__61029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61029):map__61029);
var svc = map__61029__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61029__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__61035 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__61036 = null;
var count__61037 = (0);
var i__61038 = (0);
while(true){
if((i__61038 < count__61037)){
var tid = chunk__61036.cljs$core$IIndexed$_nth$arity$2(null,i__61038);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61042 = seq__61035;
var G__61043 = chunk__61036;
var G__61044 = count__61037;
var G__61045 = (i__61038 + (1));
seq__61035 = G__61042;
chunk__61036 = G__61043;
count__61037 = G__61044;
i__61038 = G__61045;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61035);
if(temp__5735__auto__){
var seq__61035__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61035__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61035__$1);
var G__61046 = cljs.core.chunk_rest(seq__61035__$1);
var G__61047 = c__4609__auto__;
var G__61048 = cljs.core.count(c__4609__auto__);
var G__61049 = (0);
seq__61035 = G__61046;
chunk__61036 = G__61047;
count__61037 = G__61048;
i__61038 = G__61049;
continue;
} else {
var tid = cljs.core.first(seq__61035__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61050 = cljs.core.next(seq__61035__$1);
var G__61051 = null;
var G__61052 = (0);
var G__61053 = (0);
seq__61035 = G__61050;
chunk__61036 = G__61051;
count__61037 = G__61052;
i__61038 = G__61053;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__61031_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__61031_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__61032_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__61032_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__61033_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__61033_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__61034_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__61034_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__61039){
var map__61040 = p__61039;
var map__61040__$1 = (((((!((map__61040 == null))))?(((((map__61040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61040):map__61040);
var svc = map__61040__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61040__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61040__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
