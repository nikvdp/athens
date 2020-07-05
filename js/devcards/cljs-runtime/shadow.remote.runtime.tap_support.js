goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__60764,p__60765){
var map__60766 = p__60764;
var map__60766__$1 = (((((!((map__60766 == null))))?(((((map__60766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60766):map__60766);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60766__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60767 = p__60765;
var map__60767__$1 = (((((!((map__60767 == null))))?(((((map__60767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60767):map__60767);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60767__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__60770,p__60771){
var map__60772 = p__60770;
var map__60772__$1 = (((((!((map__60772 == null))))?(((((map__60772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60772):map__60772);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60772__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60773 = p__60771;
var map__60773__$1 = (((((!((map__60773 == null))))?(((((map__60773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60773):map__60773);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60773__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__60778,p__60779){
var map__60780 = p__60778;
var map__60780__$1 = (((((!((map__60780 == null))))?(((((map__60780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60780):map__60780);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60780__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60780__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__60781 = p__60779;
var map__60781__$1 = (((((!((map__60781 == null))))?(((((map__60781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60781):map__60781);
var msg = map__60781__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60781__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__60784 = obj_support;
var map__60784__$1 = (((((!((map__60784 == null))))?(((((map__60784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60784):map__60784);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60784__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__60777_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60777_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60776_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60776_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__60786,tid){
var map__60787 = p__60786;
var map__60787__$1 = (((((!((map__60787 == null))))?(((((map__60787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60787):map__60787);
var svc = map__60787__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60787__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__60793 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__60794 = null;
var count__60795 = (0);
var i__60796 = (0);
while(true){
if((i__60796 < count__60795)){
var tid = chunk__60794.cljs$core$IIndexed$_nth$arity$2(null,i__60796);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60800 = seq__60793;
var G__60801 = chunk__60794;
var G__60802 = count__60795;
var G__60803 = (i__60796 + (1));
seq__60793 = G__60800;
chunk__60794 = G__60801;
count__60795 = G__60802;
i__60796 = G__60803;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60793);
if(temp__5735__auto__){
var seq__60793__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60793__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60793__$1);
var G__60804 = cljs.core.chunk_rest(seq__60793__$1);
var G__60805 = c__4609__auto__;
var G__60806 = cljs.core.count(c__4609__auto__);
var G__60807 = (0);
seq__60793 = G__60804;
chunk__60794 = G__60805;
count__60795 = G__60806;
i__60796 = G__60807;
continue;
} else {
var tid = cljs.core.first(seq__60793__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60808 = cljs.core.next(seq__60793__$1);
var G__60809 = null;
var G__60810 = (0);
var G__60811 = (0);
seq__60793 = G__60808;
chunk__60794 = G__60809;
count__60795 = G__60810;
i__60796 = G__60811;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__60789_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__60789_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__60790_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__60790_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__60791_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__60791_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__60792_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__60792_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__60797){
var map__60798 = p__60797;
var map__60798__$1 = (((((!((map__60798 == null))))?(((((map__60798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60798):map__60798);
var svc = map__60798__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60798__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60798__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
