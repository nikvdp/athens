goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__61019,p__61020){
var map__61021 = p__61019;
var map__61021__$1 = (((((!((map__61021 == null))))?(((((map__61021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61021):map__61021);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61021__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__61022 = p__61020;
var map__61022__$1 = (((((!((map__61022 == null))))?(((((map__61022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61022):map__61022);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61022__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__61025,p__61026){
var map__61027 = p__61025;
var map__61027__$1 = (((((!((map__61027 == null))))?(((((map__61027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61027):map__61027);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61027__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__61028 = p__61026;
var map__61028__$1 = (((((!((map__61028 == null))))?(((((map__61028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61028):map__61028);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61028__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__61033,p__61034){
var map__61035 = p__61033;
var map__61035__$1 = (((((!((map__61035 == null))))?(((((map__61035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61035):map__61035);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61035__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61035__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__61036 = p__61034;
var map__61036__$1 = (((((!((map__61036 == null))))?(((((map__61036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61036):map__61036);
var msg = map__61036__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61036__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__61039 = obj_support;
var map__61039__$1 = (((((!((map__61039 == null))))?(((((map__61039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61039):map__61039);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61039__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__61032_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__61032_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__61031_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__61031_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__61041,tid){
var map__61042 = p__61041;
var map__61042__$1 = (((((!((map__61042 == null))))?(((((map__61042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61042):map__61042);
var svc = map__61042__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61042__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__61048 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__61049 = null;
var count__61050 = (0);
var i__61051 = (0);
while(true){
if((i__61051 < count__61050)){
var tid = chunk__61049.cljs$core$IIndexed$_nth$arity$2(null,i__61051);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61055 = seq__61048;
var G__61056 = chunk__61049;
var G__61057 = count__61050;
var G__61058 = (i__61051 + (1));
seq__61048 = G__61055;
chunk__61049 = G__61056;
count__61050 = G__61057;
i__61051 = G__61058;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61048);
if(temp__5735__auto__){
var seq__61048__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61048__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61048__$1);
var G__61059 = cljs.core.chunk_rest(seq__61048__$1);
var G__61060 = c__4609__auto__;
var G__61061 = cljs.core.count(c__4609__auto__);
var G__61062 = (0);
seq__61048 = G__61059;
chunk__61049 = G__61060;
count__61050 = G__61061;
i__61051 = G__61062;
continue;
} else {
var tid = cljs.core.first(seq__61048__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61063 = cljs.core.next(seq__61048__$1);
var G__61064 = null;
var G__61065 = (0);
var G__61066 = (0);
seq__61048 = G__61063;
chunk__61049 = G__61064;
count__61050 = G__61065;
i__61051 = G__61066;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__61044_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__61044_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__61045_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__61045_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__61046_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__61046_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__61047_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__61047_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__61052){
var map__61053 = p__61052;
var map__61053__$1 = (((((!((map__61053 == null))))?(((((map__61053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61053):map__61053);
var svc = map__61053__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61053__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61053__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
