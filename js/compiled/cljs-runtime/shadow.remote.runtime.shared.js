goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__68029,p__68030){
var map__68031 = p__68029;
var map__68031__$1 = (((((!((map__68031 == null))))?(((((map__68031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68031):map__68031);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68031__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__68032 = p__68030;
var map__68032__$1 = (((((!((map__68032 == null))))?(((((map__68032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68032):map__68032);
var msg = map__68032__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68032__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__68035,p__68036){
var map__68037 = p__68035;
var map__68037__$1 = (((((!((map__68037 == null))))?(((((map__68037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68037):map__68037);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68037__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__68038 = p__68036;
var map__68038__$1 = (((((!((map__68038 == null))))?(((((map__68038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68038):map__68038);
var msg = map__68038__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68038__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__68041 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__68043 = null;
var count__68044 = (0);
var i__68045 = (0);
while(true){
if((i__68045 < count__68044)){
var map__68051 = chunk__68043.cljs$core$IIndexed$_nth$arity$2(null,i__68045);
var map__68051__$1 = (((((!((map__68051 == null))))?(((((map__68051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68051):map__68051);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68051__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__68098 = seq__68041;
var G__68099 = chunk__68043;
var G__68100 = count__68044;
var G__68101 = (i__68045 + (1));
seq__68041 = G__68098;
chunk__68043 = G__68099;
count__68044 = G__68100;
i__68045 = G__68101;
continue;
} else {
var G__68102 = seq__68041;
var G__68103 = chunk__68043;
var G__68104 = count__68044;
var G__68105 = (i__68045 + (1));
seq__68041 = G__68102;
chunk__68043 = G__68103;
count__68044 = G__68104;
i__68045 = G__68105;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__68041);
if(temp__5735__auto__){
var seq__68041__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68041__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__68041__$1);
var G__68106 = cljs.core.chunk_rest(seq__68041__$1);
var G__68107 = c__4609__auto__;
var G__68108 = cljs.core.count(c__4609__auto__);
var G__68109 = (0);
seq__68041 = G__68106;
chunk__68043 = G__68107;
count__68044 = G__68108;
i__68045 = G__68109;
continue;
} else {
var map__68053 = cljs.core.first(seq__68041__$1);
var map__68053__$1 = (((((!((map__68053 == null))))?(((((map__68053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68053):map__68053);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68053__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__68110 = cljs.core.next(seq__68041__$1);
var G__68111 = null;
var G__68112 = (0);
var G__68113 = (0);
seq__68041 = G__68110;
chunk__68043 = G__68111;
count__68044 = G__68112;
i__68045 = G__68113;
continue;
} else {
var G__68114 = cljs.core.next(seq__68041__$1);
var G__68115 = null;
var G__68116 = (0);
var G__68117 = (0);
seq__68041 = G__68114;
chunk__68043 = G__68115;
count__68044 = G__68116;
i__68045 = G__68117;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__68055,msg){
var map__68056 = p__68055;
var map__68056__$1 = (((((!((map__68056 == null))))?(((((map__68056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68056):map__68056);
var runtime = map__68056__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68056__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__68058,key,p__68059){
var map__68060 = p__68058;
var map__68060__$1 = (((((!((map__68060 == null))))?(((((map__68060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68060):map__68060);
var state = map__68060__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68060__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__68061 = p__68059;
var map__68061__$1 = (((((!((map__68061 == null))))?(((((map__68061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68061):map__68061);
var spec = map__68061__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68061__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__68064,key,spec){
var map__68065 = p__68064;
var map__68065__$1 = (((((!((map__68065 == null))))?(((((map__68065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68065):map__68065);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68065__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__68072){
var map__68073 = p__68072;
var map__68073__$1 = (((((!((map__68073 == null))))?(((((map__68073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68073):map__68073);
var runtime = map__68073__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68073__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__68067_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__68067_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__68068_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__68068_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__68069_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__68069_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__68070_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__68070_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__68071_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__68071_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__68075,key){
var map__68076 = p__68075;
var map__68076__$1 = (((((!((map__68076 == null))))?(((((map__68076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68076):map__68076);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68076__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__68078,p__68079){
var map__68080 = p__68078;
var map__68080__$1 = (((((!((map__68080 == null))))?(((((map__68080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68080):map__68080);
var runtime = map__68080__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68080__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__68081 = p__68079;
var map__68081__$1 = (((((!((map__68081 == null))))?(((((map__68081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68081):map__68081);
var msg = map__68081__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68081__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__68084 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__68086 = null;
var count__68087 = (0);
var i__68088 = (0);
while(true){
if((i__68088 < count__68087)){
var map__68094 = chunk__68086.cljs$core$IIndexed$_nth$arity$2(null,i__68088);
var map__68094__$1 = (((((!((map__68094 == null))))?(((((map__68094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68094):map__68094);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68094__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__68118 = seq__68084;
var G__68119 = chunk__68086;
var G__68120 = count__68087;
var G__68121 = (i__68088 + (1));
seq__68084 = G__68118;
chunk__68086 = G__68119;
count__68087 = G__68120;
i__68088 = G__68121;
continue;
} else {
var G__68122 = seq__68084;
var G__68123 = chunk__68086;
var G__68124 = count__68087;
var G__68125 = (i__68088 + (1));
seq__68084 = G__68122;
chunk__68086 = G__68123;
count__68087 = G__68124;
i__68088 = G__68125;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__68084);
if(temp__5735__auto__){
var seq__68084__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68084__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__68084__$1);
var G__68126 = cljs.core.chunk_rest(seq__68084__$1);
var G__68127 = c__4609__auto__;
var G__68128 = cljs.core.count(c__4609__auto__);
var G__68129 = (0);
seq__68084 = G__68126;
chunk__68086 = G__68127;
count__68087 = G__68128;
i__68088 = G__68129;
continue;
} else {
var map__68096 = cljs.core.first(seq__68084__$1);
var map__68096__$1 = (((((!((map__68096 == null))))?(((((map__68096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68096):map__68096);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68096__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__68130 = cljs.core.next(seq__68084__$1);
var G__68131 = null;
var G__68132 = (0);
var G__68133 = (0);
seq__68084 = G__68130;
chunk__68086 = G__68131;
count__68087 = G__68132;
i__68088 = G__68133;
continue;
} else {
var G__68134 = cljs.core.next(seq__68084__$1);
var G__68135 = null;
var G__68136 = (0);
var G__68137 = (0);
seq__68084 = G__68134;
chunk__68086 = G__68135;
count__68087 = G__68136;
i__68088 = G__68137;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
