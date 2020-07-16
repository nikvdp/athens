goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__61322,p__61323){
var map__61324 = p__61322;
var map__61324__$1 = (((((!((map__61324 == null))))?(((((map__61324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61324):map__61324);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61324__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__61325 = p__61323;
var map__61325__$1 = (((((!((map__61325 == null))))?(((((map__61325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61325):map__61325);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61325__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__61328,p__61329){
var map__61330 = p__61328;
var map__61330__$1 = (((((!((map__61330 == null))))?(((((map__61330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61330):map__61330);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61330__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__61331 = p__61329;
var map__61331__$1 = (((((!((map__61331 == null))))?(((((map__61331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61331):map__61331);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61331__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__61336,p__61337){
var map__61338 = p__61336;
var map__61338__$1 = (((((!((map__61338 == null))))?(((((map__61338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61338):map__61338);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61338__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61338__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__61339 = p__61337;
var map__61339__$1 = (((((!((map__61339 == null))))?(((((map__61339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61339):map__61339);
var msg = map__61339__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61339__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__61342 = obj_support;
var map__61342__$1 = (((((!((map__61342 == null))))?(((((map__61342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61342):map__61342);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61342__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__61335_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__61335_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__61334_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__61334_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__61344,tid){
var map__61345 = p__61344;
var map__61345__$1 = (((((!((map__61345 == null))))?(((((map__61345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61345):map__61345);
var svc = map__61345__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61345__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__61351 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__61352 = null;
var count__61353 = (0);
var i__61354 = (0);
while(true){
if((i__61354 < count__61353)){
var tid = chunk__61352.cljs$core$IIndexed$_nth$arity$2(null,i__61354);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61358 = seq__61351;
var G__61359 = chunk__61352;
var G__61360 = count__61353;
var G__61361 = (i__61354 + (1));
seq__61351 = G__61358;
chunk__61352 = G__61359;
count__61353 = G__61360;
i__61354 = G__61361;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61351);
if(temp__5735__auto__){
var seq__61351__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61351__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61351__$1);
var G__61362 = cljs.core.chunk_rest(seq__61351__$1);
var G__61363 = c__4609__auto__;
var G__61364 = cljs.core.count(c__4609__auto__);
var G__61365 = (0);
seq__61351 = G__61362;
chunk__61352 = G__61363;
count__61353 = G__61364;
i__61354 = G__61365;
continue;
} else {
var tid = cljs.core.first(seq__61351__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61366 = cljs.core.next(seq__61351__$1);
var G__61367 = null;
var G__61368 = (0);
var G__61369 = (0);
seq__61351 = G__61366;
chunk__61352 = G__61367;
count__61353 = G__61368;
i__61354 = G__61369;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__61347_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__61347_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__61348_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__61348_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__61349_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__61349_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__61350_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__61350_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__61355){
var map__61356 = p__61355;
var map__61356__$1 = (((((!((map__61356 == null))))?(((((map__61356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61356):map__61356);
var svc = map__61356__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61356__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61356__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
