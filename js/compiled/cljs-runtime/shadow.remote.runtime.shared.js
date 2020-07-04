goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__67986,p__67987){
var map__67988 = p__67986;
var map__67988__$1 = (((((!((map__67988 == null))))?(((((map__67988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67988):map__67988);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67988__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__67989 = p__67987;
var map__67989__$1 = (((((!((map__67989 == null))))?(((((map__67989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67989):map__67989);
var msg = map__67989__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67989__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__67992,p__67993){
var map__67994 = p__67992;
var map__67994__$1 = (((((!((map__67994 == null))))?(((((map__67994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67994):map__67994);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67994__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__67995 = p__67993;
var map__67995__$1 = (((((!((map__67995 == null))))?(((((map__67995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67995):map__67995);
var msg = map__67995__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67995__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__67998 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__68000 = null;
var count__68001 = (0);
var i__68002 = (0);
while(true){
if((i__68002 < count__68001)){
var map__68008 = chunk__68000.cljs$core$IIndexed$_nth$arity$2(null,i__68002);
var map__68008__$1 = (((((!((map__68008 == null))))?(((((map__68008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68008):map__68008);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68008__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__68055 = seq__67998;
var G__68056 = chunk__68000;
var G__68057 = count__68001;
var G__68058 = (i__68002 + (1));
seq__67998 = G__68055;
chunk__68000 = G__68056;
count__68001 = G__68057;
i__68002 = G__68058;
continue;
} else {
var G__68059 = seq__67998;
var G__68060 = chunk__68000;
var G__68061 = count__68001;
var G__68062 = (i__68002 + (1));
seq__67998 = G__68059;
chunk__68000 = G__68060;
count__68001 = G__68061;
i__68002 = G__68062;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67998);
if(temp__5735__auto__){
var seq__67998__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67998__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__67998__$1);
var G__68063 = cljs.core.chunk_rest(seq__67998__$1);
var G__68064 = c__4609__auto__;
var G__68065 = cljs.core.count(c__4609__auto__);
var G__68066 = (0);
seq__67998 = G__68063;
chunk__68000 = G__68064;
count__68001 = G__68065;
i__68002 = G__68066;
continue;
} else {
var map__68010 = cljs.core.first(seq__67998__$1);
var map__68010__$1 = (((((!((map__68010 == null))))?(((((map__68010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68010):map__68010);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68010__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__68067 = cljs.core.next(seq__67998__$1);
var G__68068 = null;
var G__68069 = (0);
var G__68070 = (0);
seq__67998 = G__68067;
chunk__68000 = G__68068;
count__68001 = G__68069;
i__68002 = G__68070;
continue;
} else {
var G__68071 = cljs.core.next(seq__67998__$1);
var G__68072 = null;
var G__68073 = (0);
var G__68074 = (0);
seq__67998 = G__68071;
chunk__68000 = G__68072;
count__68001 = G__68073;
i__68002 = G__68074;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__68012,msg){
var map__68013 = p__68012;
var map__68013__$1 = (((((!((map__68013 == null))))?(((((map__68013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68013):map__68013);
var runtime = map__68013__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68013__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__68015,key,p__68016){
var map__68017 = p__68015;
var map__68017__$1 = (((((!((map__68017 == null))))?(((((map__68017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68017):map__68017);
var state = map__68017__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68017__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__68018 = p__68016;
var map__68018__$1 = (((((!((map__68018 == null))))?(((((map__68018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68018):map__68018);
var spec = map__68018__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68018__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__68021,key,spec){
var map__68022 = p__68021;
var map__68022__$1 = (((((!((map__68022 == null))))?(((((map__68022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68022):map__68022);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68022__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__68029){
var map__68030 = p__68029;
var map__68030__$1 = (((((!((map__68030 == null))))?(((((map__68030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68030):map__68030);
var runtime = map__68030__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68030__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__68024_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__68024_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__68025_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__68025_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__68026_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__68026_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__68027_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__68027_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__68028_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__68028_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__68032,key){
var map__68033 = p__68032;
var map__68033__$1 = (((((!((map__68033 == null))))?(((((map__68033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68033):map__68033);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68033__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__68035,p__68036){
var map__68037 = p__68035;
var map__68037__$1 = (((((!((map__68037 == null))))?(((((map__68037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68037):map__68037);
var runtime = map__68037__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68037__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__68038 = p__68036;
var map__68038__$1 = (((((!((map__68038 == null))))?(((((map__68038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68038):map__68038);
var msg = map__68038__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68038__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__68041 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__68043 = null;
var count__68044 = (0);
var i__68045 = (0);
while(true){
if((i__68045 < count__68044)){
var map__68051 = chunk__68043.cljs$core$IIndexed$_nth$arity$2(null,i__68045);
var map__68051__$1 = (((((!((map__68051 == null))))?(((((map__68051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68051):map__68051);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68051__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__68075 = seq__68041;
var G__68076 = chunk__68043;
var G__68077 = count__68044;
var G__68078 = (i__68045 + (1));
seq__68041 = G__68075;
chunk__68043 = G__68076;
count__68044 = G__68077;
i__68045 = G__68078;
continue;
} else {
var G__68079 = seq__68041;
var G__68080 = chunk__68043;
var G__68081 = count__68044;
var G__68082 = (i__68045 + (1));
seq__68041 = G__68079;
chunk__68043 = G__68080;
count__68044 = G__68081;
i__68045 = G__68082;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__68041);
if(temp__5735__auto__){
var seq__68041__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68041__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__68041__$1);
var G__68083 = cljs.core.chunk_rest(seq__68041__$1);
var G__68084 = c__4609__auto__;
var G__68085 = cljs.core.count(c__4609__auto__);
var G__68086 = (0);
seq__68041 = G__68083;
chunk__68043 = G__68084;
count__68044 = G__68085;
i__68045 = G__68086;
continue;
} else {
var map__68053 = cljs.core.first(seq__68041__$1);
var map__68053__$1 = (((((!((map__68053 == null))))?(((((map__68053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68053):map__68053);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68053__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__68087 = cljs.core.next(seq__68041__$1);
var G__68088 = null;
var G__68089 = (0);
var G__68090 = (0);
seq__68041 = G__68087;
chunk__68043 = G__68088;
count__68044 = G__68089;
i__68045 = G__68090;
continue;
} else {
var G__68091 = cljs.core.next(seq__68041__$1);
var G__68092 = null;
var G__68093 = (0);
var G__68094 = (0);
seq__68041 = G__68091;
chunk__68043 = G__68092;
count__68044 = G__68093;
i__68045 = G__68094;
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
