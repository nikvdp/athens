goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__68023,p__68024){
var map__68025 = p__68023;
var map__68025__$1 = (((((!((map__68025 == null))))?(((((map__68025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68025):map__68025);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68025__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__68026 = p__68024;
var map__68026__$1 = (((((!((map__68026 == null))))?(((((map__68026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68026):map__68026);
var msg = map__68026__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68026__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__68029,p__68030){
var map__68031 = p__68029;
var map__68031__$1 = (((((!((map__68031 == null))))?(((((map__68031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68031):map__68031);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68031__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__68032 = p__68030;
var map__68032__$1 = (((((!((map__68032 == null))))?(((((map__68032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68032):map__68032);
var msg = map__68032__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68032__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__68035 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__68037 = null;
var count__68038 = (0);
var i__68039 = (0);
while(true){
if((i__68039 < count__68038)){
var map__68045 = chunk__68037.cljs$core$IIndexed$_nth$arity$2(null,i__68039);
var map__68045__$1 = (((((!((map__68045 == null))))?(((((map__68045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68045):map__68045);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68045__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__68092 = seq__68035;
var G__68093 = chunk__68037;
var G__68094 = count__68038;
var G__68095 = (i__68039 + (1));
seq__68035 = G__68092;
chunk__68037 = G__68093;
count__68038 = G__68094;
i__68039 = G__68095;
continue;
} else {
var G__68096 = seq__68035;
var G__68097 = chunk__68037;
var G__68098 = count__68038;
var G__68099 = (i__68039 + (1));
seq__68035 = G__68096;
chunk__68037 = G__68097;
count__68038 = G__68098;
i__68039 = G__68099;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__68035);
if(temp__5735__auto__){
var seq__68035__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68035__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__68035__$1);
var G__68100 = cljs.core.chunk_rest(seq__68035__$1);
var G__68101 = c__4609__auto__;
var G__68102 = cljs.core.count(c__4609__auto__);
var G__68103 = (0);
seq__68035 = G__68100;
chunk__68037 = G__68101;
count__68038 = G__68102;
i__68039 = G__68103;
continue;
} else {
var map__68047 = cljs.core.first(seq__68035__$1);
var map__68047__$1 = (((((!((map__68047 == null))))?(((((map__68047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68047):map__68047);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68047__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__68104 = cljs.core.next(seq__68035__$1);
var G__68105 = null;
var G__68106 = (0);
var G__68107 = (0);
seq__68035 = G__68104;
chunk__68037 = G__68105;
count__68038 = G__68106;
i__68039 = G__68107;
continue;
} else {
var G__68108 = cljs.core.next(seq__68035__$1);
var G__68109 = null;
var G__68110 = (0);
var G__68111 = (0);
seq__68035 = G__68108;
chunk__68037 = G__68109;
count__68038 = G__68110;
i__68039 = G__68111;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__68049,msg){
var map__68050 = p__68049;
var map__68050__$1 = (((((!((map__68050 == null))))?(((((map__68050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68050):map__68050);
var runtime = map__68050__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68050__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__68052,key,p__68053){
var map__68054 = p__68052;
var map__68054__$1 = (((((!((map__68054 == null))))?(((((map__68054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68054):map__68054);
var state = map__68054__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68054__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__68055 = p__68053;
var map__68055__$1 = (((((!((map__68055 == null))))?(((((map__68055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68055):map__68055);
var spec = map__68055__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68055__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__68058,key,spec){
var map__68059 = p__68058;
var map__68059__$1 = (((((!((map__68059 == null))))?(((((map__68059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68059):map__68059);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68059__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__68066){
var map__68067 = p__68066;
var map__68067__$1 = (((((!((map__68067 == null))))?(((((map__68067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68067):map__68067);
var runtime = map__68067__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68067__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__68061_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__68061_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__68062_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__68062_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__68063_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__68063_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__68064_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__68064_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__68065_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__68065_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__68069,key){
var map__68070 = p__68069;
var map__68070__$1 = (((((!((map__68070 == null))))?(((((map__68070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68070):map__68070);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68070__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__68072,p__68073){
var map__68074 = p__68072;
var map__68074__$1 = (((((!((map__68074 == null))))?(((((map__68074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68074):map__68074);
var runtime = map__68074__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68074__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__68075 = p__68073;
var map__68075__$1 = (((((!((map__68075 == null))))?(((((map__68075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68075):map__68075);
var msg = map__68075__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68075__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__68078 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__68080 = null;
var count__68081 = (0);
var i__68082 = (0);
while(true){
if((i__68082 < count__68081)){
var map__68088 = chunk__68080.cljs$core$IIndexed$_nth$arity$2(null,i__68082);
var map__68088__$1 = (((((!((map__68088 == null))))?(((((map__68088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68088):map__68088);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68088__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__68112 = seq__68078;
var G__68113 = chunk__68080;
var G__68114 = count__68081;
var G__68115 = (i__68082 + (1));
seq__68078 = G__68112;
chunk__68080 = G__68113;
count__68081 = G__68114;
i__68082 = G__68115;
continue;
} else {
var G__68116 = seq__68078;
var G__68117 = chunk__68080;
var G__68118 = count__68081;
var G__68119 = (i__68082 + (1));
seq__68078 = G__68116;
chunk__68080 = G__68117;
count__68081 = G__68118;
i__68082 = G__68119;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__68078);
if(temp__5735__auto__){
var seq__68078__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68078__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__68078__$1);
var G__68120 = cljs.core.chunk_rest(seq__68078__$1);
var G__68121 = c__4609__auto__;
var G__68122 = cljs.core.count(c__4609__auto__);
var G__68123 = (0);
seq__68078 = G__68120;
chunk__68080 = G__68121;
count__68081 = G__68122;
i__68082 = G__68123;
continue;
} else {
var map__68090 = cljs.core.first(seq__68078__$1);
var map__68090__$1 = (((((!((map__68090 == null))))?(((((map__68090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68090):map__68090);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68090__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__68124 = cljs.core.next(seq__68078__$1);
var G__68125 = null;
var G__68126 = (0);
var G__68127 = (0);
seq__68078 = G__68124;
chunk__68080 = G__68125;
count__68081 = G__68126;
i__68082 = G__68127;
continue;
} else {
var G__68128 = cljs.core.next(seq__68078__$1);
var G__68129 = null;
var G__68130 = (0);
var G__68131 = (0);
seq__68078 = G__68128;
chunk__68080 = G__68129;
count__68081 = G__68130;
i__68082 = G__68131;
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
