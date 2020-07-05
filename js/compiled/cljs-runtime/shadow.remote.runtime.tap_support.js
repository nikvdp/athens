goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__68271,p__68272){
var map__68273 = p__68271;
var map__68273__$1 = (((((!((map__68273 == null))))?(((((map__68273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68273):map__68273);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68273__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__68274 = p__68272;
var map__68274__$1 = (((((!((map__68274 == null))))?(((((map__68274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68274):map__68274);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68274__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__68277,p__68278){
var map__68279 = p__68277;
var map__68279__$1 = (((((!((map__68279 == null))))?(((((map__68279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68279):map__68279);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68279__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__68280 = p__68278;
var map__68280__$1 = (((((!((map__68280 == null))))?(((((map__68280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68280):map__68280);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68280__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__68285,p__68286){
var map__68287 = p__68285;
var map__68287__$1 = (((((!((map__68287 == null))))?(((((map__68287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68287):map__68287);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68287__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68287__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__68288 = p__68286;
var map__68288__$1 = (((((!((map__68288 == null))))?(((((map__68288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68288):map__68288);
var msg = map__68288__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68288__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__68291 = obj_support;
var map__68291__$1 = (((((!((map__68291 == null))))?(((((map__68291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68291):map__68291);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68291__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__68284_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__68284_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__68283_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__68283_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__68293,tid){
var map__68294 = p__68293;
var map__68294__$1 = (((((!((map__68294 == null))))?(((((map__68294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68294):map__68294);
var svc = map__68294__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68294__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__68300 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__68301 = null;
var count__68302 = (0);
var i__68303 = (0);
while(true){
if((i__68303 < count__68302)){
var tid = chunk__68301.cljs$core$IIndexed$_nth$arity$2(null,i__68303);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68307 = seq__68300;
var G__68308 = chunk__68301;
var G__68309 = count__68302;
var G__68310 = (i__68303 + (1));
seq__68300 = G__68307;
chunk__68301 = G__68308;
count__68302 = G__68309;
i__68303 = G__68310;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__68300);
if(temp__5735__auto__){
var seq__68300__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68300__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__68300__$1);
var G__68311 = cljs.core.chunk_rest(seq__68300__$1);
var G__68312 = c__4609__auto__;
var G__68313 = cljs.core.count(c__4609__auto__);
var G__68314 = (0);
seq__68300 = G__68311;
chunk__68301 = G__68312;
count__68302 = G__68313;
i__68303 = G__68314;
continue;
} else {
var tid = cljs.core.first(seq__68300__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68315 = cljs.core.next(seq__68300__$1);
var G__68316 = null;
var G__68317 = (0);
var G__68318 = (0);
seq__68300 = G__68315;
chunk__68301 = G__68316;
count__68302 = G__68317;
i__68303 = G__68318;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__68296_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__68296_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__68297_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__68297_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__68298_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__68298_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__68299_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__68299_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__68304){
var map__68305 = p__68304;
var map__68305__$1 = (((((!((map__68305 == null))))?(((((map__68305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68305):map__68305);
var svc = map__68305__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68305__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68305__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
