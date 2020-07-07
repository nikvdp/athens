goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__60913,p__60914){
var map__60915 = p__60913;
var map__60915__$1 = (((((!((map__60915 == null))))?(((((map__60915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60915):map__60915);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60915__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60916 = p__60914;
var map__60916__$1 = (((((!((map__60916 == null))))?(((((map__60916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60916):map__60916);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60916__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__60919,p__60920){
var map__60921 = p__60919;
var map__60921__$1 = (((((!((map__60921 == null))))?(((((map__60921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60921):map__60921);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60921__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60922 = p__60920;
var map__60922__$1 = (((((!((map__60922 == null))))?(((((map__60922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60922):map__60922);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60922__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__60927,p__60928){
var map__60929 = p__60927;
var map__60929__$1 = (((((!((map__60929 == null))))?(((((map__60929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60929):map__60929);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60929__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60929__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__60930 = p__60928;
var map__60930__$1 = (((((!((map__60930 == null))))?(((((map__60930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60930):map__60930);
var msg = map__60930__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60930__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__60933 = obj_support;
var map__60933__$1 = (((((!((map__60933 == null))))?(((((map__60933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60933):map__60933);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60933__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__60926_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60926_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60925_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60925_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__60935,tid){
var map__60936 = p__60935;
var map__60936__$1 = (((((!((map__60936 == null))))?(((((map__60936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60936):map__60936);
var svc = map__60936__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60936__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__60942 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__60943 = null;
var count__60944 = (0);
var i__60945 = (0);
while(true){
if((i__60945 < count__60944)){
var tid = chunk__60943.cljs$core$IIndexed$_nth$arity$2(null,i__60945);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60949 = seq__60942;
var G__60950 = chunk__60943;
var G__60951 = count__60944;
var G__60952 = (i__60945 + (1));
seq__60942 = G__60949;
chunk__60943 = G__60950;
count__60944 = G__60951;
i__60945 = G__60952;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60942);
if(temp__5735__auto__){
var seq__60942__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60942__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60942__$1);
var G__60953 = cljs.core.chunk_rest(seq__60942__$1);
var G__60954 = c__4609__auto__;
var G__60955 = cljs.core.count(c__4609__auto__);
var G__60956 = (0);
seq__60942 = G__60953;
chunk__60943 = G__60954;
count__60944 = G__60955;
i__60945 = G__60956;
continue;
} else {
var tid = cljs.core.first(seq__60942__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60957 = cljs.core.next(seq__60942__$1);
var G__60958 = null;
var G__60959 = (0);
var G__60960 = (0);
seq__60942 = G__60957;
chunk__60943 = G__60958;
count__60944 = G__60959;
i__60945 = G__60960;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__60938_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__60938_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__60939_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__60939_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__60940_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__60940_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__60941_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__60941_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__60946){
var map__60947 = p__60946;
var map__60947__$1 = (((((!((map__60947 == null))))?(((((map__60947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60947):map__60947);
var svc = map__60947__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60947__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60947__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
