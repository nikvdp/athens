goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__68222,p__68223){
var map__68224 = p__68222;
var map__68224__$1 = (((((!((map__68224 == null))))?(((((map__68224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68224):map__68224);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68224__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__68225 = p__68223;
var map__68225__$1 = (((((!((map__68225 == null))))?(((((map__68225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68225):map__68225);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68225__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__68228,p__68229){
var map__68230 = p__68228;
var map__68230__$1 = (((((!((map__68230 == null))))?(((((map__68230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68230):map__68230);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68230__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__68231 = p__68229;
var map__68231__$1 = (((((!((map__68231 == null))))?(((((map__68231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68231):map__68231);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68231__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__68236,p__68237){
var map__68238 = p__68236;
var map__68238__$1 = (((((!((map__68238 == null))))?(((((map__68238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68238):map__68238);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68238__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68238__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__68239 = p__68237;
var map__68239__$1 = (((((!((map__68239 == null))))?(((((map__68239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68239):map__68239);
var msg = map__68239__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68239__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__68242 = obj_support;
var map__68242__$1 = (((((!((map__68242 == null))))?(((((map__68242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68242):map__68242);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68242__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__68235_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__68235_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__68234_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__68234_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__68244,tid){
var map__68245 = p__68244;
var map__68245__$1 = (((((!((map__68245 == null))))?(((((map__68245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68245):map__68245);
var svc = map__68245__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68245__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__68251 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__68252 = null;
var count__68253 = (0);
var i__68254 = (0);
while(true){
if((i__68254 < count__68253)){
var tid = chunk__68252.cljs$core$IIndexed$_nth$arity$2(null,i__68254);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68258 = seq__68251;
var G__68259 = chunk__68252;
var G__68260 = count__68253;
var G__68261 = (i__68254 + (1));
seq__68251 = G__68258;
chunk__68252 = G__68259;
count__68253 = G__68260;
i__68254 = G__68261;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__68251);
if(temp__5735__auto__){
var seq__68251__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68251__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__68251__$1);
var G__68262 = cljs.core.chunk_rest(seq__68251__$1);
var G__68263 = c__4609__auto__;
var G__68264 = cljs.core.count(c__4609__auto__);
var G__68265 = (0);
seq__68251 = G__68262;
chunk__68252 = G__68263;
count__68253 = G__68264;
i__68254 = G__68265;
continue;
} else {
var tid = cljs.core.first(seq__68251__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68266 = cljs.core.next(seq__68251__$1);
var G__68267 = null;
var G__68268 = (0);
var G__68269 = (0);
seq__68251 = G__68266;
chunk__68252 = G__68267;
count__68253 = G__68268;
i__68254 = G__68269;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__68247_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__68247_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__68248_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__68248_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__68249_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__68249_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__68250_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__68250_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__68255){
var map__68256 = p__68255;
var map__68256__$1 = (((((!((map__68256 == null))))?(((((map__68256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68256):map__68256);
var svc = map__68256__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68256__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68256__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
