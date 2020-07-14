goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__61073,p__61074){
var map__61075 = p__61073;
var map__61075__$1 = (((((!((map__61075 == null))))?(((((map__61075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61075):map__61075);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61075__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__61076 = p__61074;
var map__61076__$1 = (((((!((map__61076 == null))))?(((((map__61076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61076):map__61076);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61076__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__61079,p__61080){
var map__61081 = p__61079;
var map__61081__$1 = (((((!((map__61081 == null))))?(((((map__61081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61081):map__61081);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61081__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__61082 = p__61080;
var map__61082__$1 = (((((!((map__61082 == null))))?(((((map__61082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61082):map__61082);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61082__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__61087,p__61088){
var map__61089 = p__61087;
var map__61089__$1 = (((((!((map__61089 == null))))?(((((map__61089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61089):map__61089);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61089__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61089__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__61090 = p__61088;
var map__61090__$1 = (((((!((map__61090 == null))))?(((((map__61090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61090):map__61090);
var msg = map__61090__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61090__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__61093 = obj_support;
var map__61093__$1 = (((((!((map__61093 == null))))?(((((map__61093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61093):map__61093);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61093__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__61086_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__61086_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__61085_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__61085_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__61095,tid){
var map__61096 = p__61095;
var map__61096__$1 = (((((!((map__61096 == null))))?(((((map__61096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61096):map__61096);
var svc = map__61096__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61096__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__61102 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__61103 = null;
var count__61104 = (0);
var i__61105 = (0);
while(true){
if((i__61105 < count__61104)){
var tid = chunk__61103.cljs$core$IIndexed$_nth$arity$2(null,i__61105);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61109 = seq__61102;
var G__61110 = chunk__61103;
var G__61111 = count__61104;
var G__61112 = (i__61105 + (1));
seq__61102 = G__61109;
chunk__61103 = G__61110;
count__61104 = G__61111;
i__61105 = G__61112;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61102);
if(temp__5735__auto__){
var seq__61102__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61102__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61102__$1);
var G__61113 = cljs.core.chunk_rest(seq__61102__$1);
var G__61114 = c__4609__auto__;
var G__61115 = cljs.core.count(c__4609__auto__);
var G__61116 = (0);
seq__61102 = G__61113;
chunk__61103 = G__61114;
count__61104 = G__61115;
i__61105 = G__61116;
continue;
} else {
var tid = cljs.core.first(seq__61102__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61117 = cljs.core.next(seq__61102__$1);
var G__61118 = null;
var G__61119 = (0);
var G__61120 = (0);
seq__61102 = G__61117;
chunk__61103 = G__61118;
count__61104 = G__61119;
i__61105 = G__61120;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__61098_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__61098_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__61099_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__61099_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__61100_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__61100_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__61101_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__61101_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__61106){
var map__61107 = p__61106;
var map__61107__$1 = (((((!((map__61107 == null))))?(((((map__61107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61107):map__61107);
var svc = map__61107__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61107__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61107__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
