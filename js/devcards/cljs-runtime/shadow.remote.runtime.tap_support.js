goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__61208,p__61209){
var map__61210 = p__61208;
var map__61210__$1 = (((((!((map__61210 == null))))?(((((map__61210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61210):map__61210);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61210__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__61211 = p__61209;
var map__61211__$1 = (((((!((map__61211 == null))))?(((((map__61211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61211):map__61211);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61211__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__61214,p__61215){
var map__61216 = p__61214;
var map__61216__$1 = (((((!((map__61216 == null))))?(((((map__61216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61216):map__61216);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61216__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__61217 = p__61215;
var map__61217__$1 = (((((!((map__61217 == null))))?(((((map__61217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61217):map__61217);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61217__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__61222,p__61223){
var map__61224 = p__61222;
var map__61224__$1 = (((((!((map__61224 == null))))?(((((map__61224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61224):map__61224);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61224__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61224__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__61225 = p__61223;
var map__61225__$1 = (((((!((map__61225 == null))))?(((((map__61225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61225):map__61225);
var msg = map__61225__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61225__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__61228 = obj_support;
var map__61228__$1 = (((((!((map__61228 == null))))?(((((map__61228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61228):map__61228);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61228__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__61221_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__61221_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__61220_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__61220_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__61230,tid){
var map__61231 = p__61230;
var map__61231__$1 = (((((!((map__61231 == null))))?(((((map__61231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61231):map__61231);
var svc = map__61231__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61231__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__61237 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__61238 = null;
var count__61239 = (0);
var i__61240 = (0);
while(true){
if((i__61240 < count__61239)){
var tid = chunk__61238.cljs$core$IIndexed$_nth$arity$2(null,i__61240);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61244 = seq__61237;
var G__61245 = chunk__61238;
var G__61246 = count__61239;
var G__61247 = (i__61240 + (1));
seq__61237 = G__61244;
chunk__61238 = G__61245;
count__61239 = G__61246;
i__61240 = G__61247;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61237);
if(temp__5735__auto__){
var seq__61237__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61237__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61237__$1);
var G__61248 = cljs.core.chunk_rest(seq__61237__$1);
var G__61249 = c__4609__auto__;
var G__61250 = cljs.core.count(c__4609__auto__);
var G__61251 = (0);
seq__61237 = G__61248;
chunk__61238 = G__61249;
count__61239 = G__61250;
i__61240 = G__61251;
continue;
} else {
var tid = cljs.core.first(seq__61237__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61252 = cljs.core.next(seq__61237__$1);
var G__61253 = null;
var G__61254 = (0);
var G__61255 = (0);
seq__61237 = G__61252;
chunk__61238 = G__61253;
count__61239 = G__61254;
i__61240 = G__61255;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__61233_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__61233_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__61234_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__61234_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__61235_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__61235_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__61236_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__61236_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__61241){
var map__61242 = p__61241;
var map__61242__$1 = (((((!((map__61242 == null))))?(((((map__61242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61242):map__61242);
var svc = map__61242__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61242__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61242__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
