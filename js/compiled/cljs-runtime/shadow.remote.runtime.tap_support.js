goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__68273,p__68274){
var map__68275 = p__68273;
var map__68275__$1 = (((((!((map__68275 == null))))?(((((map__68275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68275):map__68275);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68275__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__68276 = p__68274;
var map__68276__$1 = (((((!((map__68276 == null))))?(((((map__68276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68276):map__68276);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68276__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__68279,p__68280){
var map__68281 = p__68279;
var map__68281__$1 = (((((!((map__68281 == null))))?(((((map__68281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68281):map__68281);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68281__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__68282 = p__68280;
var map__68282__$1 = (((((!((map__68282 == null))))?(((((map__68282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68282):map__68282);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68282__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__68287,p__68288){
var map__68289 = p__68287;
var map__68289__$1 = (((((!((map__68289 == null))))?(((((map__68289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68289):map__68289);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68289__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68289__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__68290 = p__68288;
var map__68290__$1 = (((((!((map__68290 == null))))?(((((map__68290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68290):map__68290);
var msg = map__68290__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68290__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__68293 = obj_support;
var map__68293__$1 = (((((!((map__68293 == null))))?(((((map__68293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68293):map__68293);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68293__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__68286_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__68286_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__68285_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__68285_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__68295,tid){
var map__68296 = p__68295;
var map__68296__$1 = (((((!((map__68296 == null))))?(((((map__68296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68296):map__68296);
var svc = map__68296__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68296__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__68302 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__68303 = null;
var count__68304 = (0);
var i__68305 = (0);
while(true){
if((i__68305 < count__68304)){
var tid = chunk__68303.cljs$core$IIndexed$_nth$arity$2(null,i__68305);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68309 = seq__68302;
var G__68310 = chunk__68303;
var G__68311 = count__68304;
var G__68312 = (i__68305 + (1));
seq__68302 = G__68309;
chunk__68303 = G__68310;
count__68304 = G__68311;
i__68305 = G__68312;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__68302);
if(temp__5735__auto__){
var seq__68302__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68302__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__68302__$1);
var G__68313 = cljs.core.chunk_rest(seq__68302__$1);
var G__68314 = c__4609__auto__;
var G__68315 = cljs.core.count(c__4609__auto__);
var G__68316 = (0);
seq__68302 = G__68313;
chunk__68303 = G__68314;
count__68304 = G__68315;
i__68305 = G__68316;
continue;
} else {
var tid = cljs.core.first(seq__68302__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68317 = cljs.core.next(seq__68302__$1);
var G__68318 = null;
var G__68319 = (0);
var G__68320 = (0);
seq__68302 = G__68317;
chunk__68303 = G__68318;
count__68304 = G__68319;
i__68305 = G__68320;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__68298_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__68298_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__68299_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__68299_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__68300_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__68300_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__68301_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__68301_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__68306){
var map__68307 = p__68306;
var map__68307__$1 = (((((!((map__68307 == null))))?(((((map__68307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68307):map__68307);
var svc = map__68307__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68307__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68307__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
