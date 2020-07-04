goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__68197,p__68198){
var map__68199 = p__68197;
var map__68199__$1 = (((((!((map__68199 == null))))?(((((map__68199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68199):map__68199);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68199__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__68200 = p__68198;
var map__68200__$1 = (((((!((map__68200 == null))))?(((((map__68200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68200):map__68200);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68200__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__68203,p__68204){
var map__68205 = p__68203;
var map__68205__$1 = (((((!((map__68205 == null))))?(((((map__68205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68205):map__68205);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68205__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__68206 = p__68204;
var map__68206__$1 = (((((!((map__68206 == null))))?(((((map__68206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68206):map__68206);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68206__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__68211,p__68212){
var map__68213 = p__68211;
var map__68213__$1 = (((((!((map__68213 == null))))?(((((map__68213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68213):map__68213);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68213__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68213__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__68214 = p__68212;
var map__68214__$1 = (((((!((map__68214 == null))))?(((((map__68214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68214):map__68214);
var msg = map__68214__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68214__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__68217 = obj_support;
var map__68217__$1 = (((((!((map__68217 == null))))?(((((map__68217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68217):map__68217);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68217__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__68210_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__68210_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__68209_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__68209_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__68219,tid){
var map__68220 = p__68219;
var map__68220__$1 = (((((!((map__68220 == null))))?(((((map__68220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68220):map__68220);
var svc = map__68220__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68220__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__68226 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__68227 = null;
var count__68228 = (0);
var i__68229 = (0);
while(true){
if((i__68229 < count__68228)){
var tid = chunk__68227.cljs$core$IIndexed$_nth$arity$2(null,i__68229);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68233 = seq__68226;
var G__68234 = chunk__68227;
var G__68235 = count__68228;
var G__68236 = (i__68229 + (1));
seq__68226 = G__68233;
chunk__68227 = G__68234;
count__68228 = G__68235;
i__68229 = G__68236;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__68226);
if(temp__5735__auto__){
var seq__68226__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68226__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__68226__$1);
var G__68237 = cljs.core.chunk_rest(seq__68226__$1);
var G__68238 = c__4609__auto__;
var G__68239 = cljs.core.count(c__4609__auto__);
var G__68240 = (0);
seq__68226 = G__68237;
chunk__68227 = G__68238;
count__68228 = G__68239;
i__68229 = G__68240;
continue;
} else {
var tid = cljs.core.first(seq__68226__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68241 = cljs.core.next(seq__68226__$1);
var G__68242 = null;
var G__68243 = (0);
var G__68244 = (0);
seq__68226 = G__68241;
chunk__68227 = G__68242;
count__68228 = G__68243;
i__68229 = G__68244;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__68222_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__68222_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__68223_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__68223_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__68224_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__68224_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__68225_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__68225_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__68230){
var map__68231 = p__68230;
var map__68231__$1 = (((((!((map__68231 == null))))?(((((map__68231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68231):map__68231);
var svc = map__68231__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68231__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68231__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
