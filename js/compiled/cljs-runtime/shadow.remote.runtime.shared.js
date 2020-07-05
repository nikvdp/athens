goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__67995,p__67996){
var map__67997 = p__67995;
var map__67997__$1 = (((((!((map__67997 == null))))?(((((map__67997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67997):map__67997);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67997__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__67998 = p__67996;
var map__67998__$1 = (((((!((map__67998 == null))))?(((((map__67998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67998):map__67998);
var msg = map__67998__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67998__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__68001,p__68002){
var map__68003 = p__68001;
var map__68003__$1 = (((((!((map__68003 == null))))?(((((map__68003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68003):map__68003);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68003__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__68004 = p__68002;
var map__68004__$1 = (((((!((map__68004 == null))))?(((((map__68004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68004):map__68004);
var msg = map__68004__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68004__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__68007 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__68009 = null;
var count__68010 = (0);
var i__68011 = (0);
while(true){
if((i__68011 < count__68010)){
var map__68017 = chunk__68009.cljs$core$IIndexed$_nth$arity$2(null,i__68011);
var map__68017__$1 = (((((!((map__68017 == null))))?(((((map__68017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68017):map__68017);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68017__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__68064 = seq__68007;
var G__68065 = chunk__68009;
var G__68066 = count__68010;
var G__68067 = (i__68011 + (1));
seq__68007 = G__68064;
chunk__68009 = G__68065;
count__68010 = G__68066;
i__68011 = G__68067;
continue;
} else {
var G__68068 = seq__68007;
var G__68069 = chunk__68009;
var G__68070 = count__68010;
var G__68071 = (i__68011 + (1));
seq__68007 = G__68068;
chunk__68009 = G__68069;
count__68010 = G__68070;
i__68011 = G__68071;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__68007);
if(temp__5735__auto__){
var seq__68007__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68007__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__68007__$1);
var G__68072 = cljs.core.chunk_rest(seq__68007__$1);
var G__68073 = c__4609__auto__;
var G__68074 = cljs.core.count(c__4609__auto__);
var G__68075 = (0);
seq__68007 = G__68072;
chunk__68009 = G__68073;
count__68010 = G__68074;
i__68011 = G__68075;
continue;
} else {
var map__68019 = cljs.core.first(seq__68007__$1);
var map__68019__$1 = (((((!((map__68019 == null))))?(((((map__68019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68019):map__68019);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68019__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__68076 = cljs.core.next(seq__68007__$1);
var G__68077 = null;
var G__68078 = (0);
var G__68079 = (0);
seq__68007 = G__68076;
chunk__68009 = G__68077;
count__68010 = G__68078;
i__68011 = G__68079;
continue;
} else {
var G__68080 = cljs.core.next(seq__68007__$1);
var G__68081 = null;
var G__68082 = (0);
var G__68083 = (0);
seq__68007 = G__68080;
chunk__68009 = G__68081;
count__68010 = G__68082;
i__68011 = G__68083;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__68021,msg){
var map__68022 = p__68021;
var map__68022__$1 = (((((!((map__68022 == null))))?(((((map__68022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68022):map__68022);
var runtime = map__68022__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68022__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__68024,key,p__68025){
var map__68026 = p__68024;
var map__68026__$1 = (((((!((map__68026 == null))))?(((((map__68026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68026):map__68026);
var state = map__68026__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68026__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__68027 = p__68025;
var map__68027__$1 = (((((!((map__68027 == null))))?(((((map__68027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68027):map__68027);
var spec = map__68027__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68027__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__68030,key,spec){
var map__68031 = p__68030;
var map__68031__$1 = (((((!((map__68031 == null))))?(((((map__68031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68031):map__68031);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68031__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__68038){
var map__68039 = p__68038;
var map__68039__$1 = (((((!((map__68039 == null))))?(((((map__68039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68039):map__68039);
var runtime = map__68039__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68039__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__68033_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__68033_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__68034_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__68034_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__68035_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__68035_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__68036_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__68036_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__68037_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__68037_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__68041,key){
var map__68042 = p__68041;
var map__68042__$1 = (((((!((map__68042 == null))))?(((((map__68042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68042):map__68042);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68042__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__68044,p__68045){
var map__68046 = p__68044;
var map__68046__$1 = (((((!((map__68046 == null))))?(((((map__68046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68046):map__68046);
var runtime = map__68046__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68046__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__68047 = p__68045;
var map__68047__$1 = (((((!((map__68047 == null))))?(((((map__68047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68047):map__68047);
var msg = map__68047__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68047__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__68050 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__68052 = null;
var count__68053 = (0);
var i__68054 = (0);
while(true){
if((i__68054 < count__68053)){
var map__68060 = chunk__68052.cljs$core$IIndexed$_nth$arity$2(null,i__68054);
var map__68060__$1 = (((((!((map__68060 == null))))?(((((map__68060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68060):map__68060);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68060__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__68084 = seq__68050;
var G__68085 = chunk__68052;
var G__68086 = count__68053;
var G__68087 = (i__68054 + (1));
seq__68050 = G__68084;
chunk__68052 = G__68085;
count__68053 = G__68086;
i__68054 = G__68087;
continue;
} else {
var G__68088 = seq__68050;
var G__68089 = chunk__68052;
var G__68090 = count__68053;
var G__68091 = (i__68054 + (1));
seq__68050 = G__68088;
chunk__68052 = G__68089;
count__68053 = G__68090;
i__68054 = G__68091;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__68050);
if(temp__5735__auto__){
var seq__68050__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68050__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__68050__$1);
var G__68092 = cljs.core.chunk_rest(seq__68050__$1);
var G__68093 = c__4609__auto__;
var G__68094 = cljs.core.count(c__4609__auto__);
var G__68095 = (0);
seq__68050 = G__68092;
chunk__68052 = G__68093;
count__68053 = G__68094;
i__68054 = G__68095;
continue;
} else {
var map__68062 = cljs.core.first(seq__68050__$1);
var map__68062__$1 = (((((!((map__68062 == null))))?(((((map__68062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68062):map__68062);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68062__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__68096 = cljs.core.next(seq__68050__$1);
var G__68097 = null;
var G__68098 = (0);
var G__68099 = (0);
seq__68050 = G__68096;
chunk__68052 = G__68097;
count__68053 = G__68098;
i__68054 = G__68099;
continue;
} else {
var G__68100 = cljs.core.next(seq__68050__$1);
var G__68101 = null;
var G__68102 = (0);
var G__68103 = (0);
seq__68050 = G__68100;
chunk__68052 = G__68101;
count__68053 = G__68102;
i__68054 = G__68103;
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
