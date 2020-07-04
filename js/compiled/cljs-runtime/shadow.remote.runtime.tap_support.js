goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__68213,p__68214){
var map__68215 = p__68213;
var map__68215__$1 = (((((!((map__68215 == null))))?(((((map__68215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68215):map__68215);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68215__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__68216 = p__68214;
var map__68216__$1 = (((((!((map__68216 == null))))?(((((map__68216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68216):map__68216);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68216__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__68219,p__68220){
var map__68221 = p__68219;
var map__68221__$1 = (((((!((map__68221 == null))))?(((((map__68221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68221):map__68221);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68221__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__68222 = p__68220;
var map__68222__$1 = (((((!((map__68222 == null))))?(((((map__68222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68222):map__68222);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68222__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__68227,p__68228){
var map__68229 = p__68227;
var map__68229__$1 = (((((!((map__68229 == null))))?(((((map__68229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68229):map__68229);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68229__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68229__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__68230 = p__68228;
var map__68230__$1 = (((((!((map__68230 == null))))?(((((map__68230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68230):map__68230);
var msg = map__68230__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68230__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__68233 = obj_support;
var map__68233__$1 = (((((!((map__68233 == null))))?(((((map__68233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68233):map__68233);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68233__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__68226_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__68226_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__68225_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__68225_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__68235,tid){
var map__68236 = p__68235;
var map__68236__$1 = (((((!((map__68236 == null))))?(((((map__68236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68236):map__68236);
var svc = map__68236__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68236__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__68242 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__68243 = null;
var count__68244 = (0);
var i__68245 = (0);
while(true){
if((i__68245 < count__68244)){
var tid = chunk__68243.cljs$core$IIndexed$_nth$arity$2(null,i__68245);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68249 = seq__68242;
var G__68250 = chunk__68243;
var G__68251 = count__68244;
var G__68252 = (i__68245 + (1));
seq__68242 = G__68249;
chunk__68243 = G__68250;
count__68244 = G__68251;
i__68245 = G__68252;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__68242);
if(temp__5735__auto__){
var seq__68242__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68242__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__68242__$1);
var G__68253 = cljs.core.chunk_rest(seq__68242__$1);
var G__68254 = c__4609__auto__;
var G__68255 = cljs.core.count(c__4609__auto__);
var G__68256 = (0);
seq__68242 = G__68253;
chunk__68243 = G__68254;
count__68244 = G__68255;
i__68245 = G__68256;
continue;
} else {
var tid = cljs.core.first(seq__68242__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68257 = cljs.core.next(seq__68242__$1);
var G__68258 = null;
var G__68259 = (0);
var G__68260 = (0);
seq__68242 = G__68257;
chunk__68243 = G__68258;
count__68244 = G__68259;
i__68245 = G__68260;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__68238_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__68238_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__68239_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__68239_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__68240_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__68240_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__68241_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__68241_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__68246){
var map__68247 = p__68246;
var map__68247__$1 = (((((!((map__68247 == null))))?(((((map__68247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68247):map__68247);
var svc = map__68247__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68247__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68247__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
