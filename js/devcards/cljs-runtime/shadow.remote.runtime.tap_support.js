goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__61351,p__61352){
var map__61353 = p__61351;
var map__61353__$1 = (((((!((map__61353 == null))))?(((((map__61353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61353):map__61353);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61353__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__61354 = p__61352;
var map__61354__$1 = (((((!((map__61354 == null))))?(((((map__61354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61354):map__61354);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61354__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__61357,p__61358){
var map__61359 = p__61357;
var map__61359__$1 = (((((!((map__61359 == null))))?(((((map__61359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61359):map__61359);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61359__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__61360 = p__61358;
var map__61360__$1 = (((((!((map__61360 == null))))?(((((map__61360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61360):map__61360);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61360__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__61365,p__61366){
var map__61367 = p__61365;
var map__61367__$1 = (((((!((map__61367 == null))))?(((((map__61367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61367):map__61367);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61367__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61367__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__61368 = p__61366;
var map__61368__$1 = (((((!((map__61368 == null))))?(((((map__61368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61368):map__61368);
var msg = map__61368__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61368__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__61371 = obj_support;
var map__61371__$1 = (((((!((map__61371 == null))))?(((((map__61371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61371):map__61371);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61371__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__61364_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__61364_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__61363_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__61363_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__61373,tid){
var map__61374 = p__61373;
var map__61374__$1 = (((((!((map__61374 == null))))?(((((map__61374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61374):map__61374);
var svc = map__61374__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61374__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__61380 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__61381 = null;
var count__61382 = (0);
var i__61383 = (0);
while(true){
if((i__61383 < count__61382)){
var tid = chunk__61381.cljs$core$IIndexed$_nth$arity$2(null,i__61383);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61387 = seq__61380;
var G__61388 = chunk__61381;
var G__61389 = count__61382;
var G__61390 = (i__61383 + (1));
seq__61380 = G__61387;
chunk__61381 = G__61388;
count__61382 = G__61389;
i__61383 = G__61390;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61380);
if(temp__5735__auto__){
var seq__61380__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61380__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61380__$1);
var G__61391 = cljs.core.chunk_rest(seq__61380__$1);
var G__61392 = c__4609__auto__;
var G__61393 = cljs.core.count(c__4609__auto__);
var G__61394 = (0);
seq__61380 = G__61391;
chunk__61381 = G__61392;
count__61382 = G__61393;
i__61383 = G__61394;
continue;
} else {
var tid = cljs.core.first(seq__61380__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61395 = cljs.core.next(seq__61380__$1);
var G__61396 = null;
var G__61397 = (0);
var G__61398 = (0);
seq__61380 = G__61395;
chunk__61381 = G__61396;
count__61382 = G__61397;
i__61383 = G__61398;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__61376_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__61376_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__61377_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__61377_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__61378_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__61378_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__61379_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__61379_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__61384){
var map__61385 = p__61384;
var map__61385__$1 = (((((!((map__61385 == null))))?(((((map__61385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61385):map__61385);
var svc = map__61385__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61385__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61385__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
