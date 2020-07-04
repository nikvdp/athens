goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__67970,p__67971){
var map__67972 = p__67970;
var map__67972__$1 = (((((!((map__67972 == null))))?(((((map__67972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67972):map__67972);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67972__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__67973 = p__67971;
var map__67973__$1 = (((((!((map__67973 == null))))?(((((map__67973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67973):map__67973);
var msg = map__67973__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67973__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__67976,p__67977){
var map__67978 = p__67976;
var map__67978__$1 = (((((!((map__67978 == null))))?(((((map__67978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67978):map__67978);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67978__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__67979 = p__67977;
var map__67979__$1 = (((((!((map__67979 == null))))?(((((map__67979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67979):map__67979);
var msg = map__67979__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67979__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__67982 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__67984 = null;
var count__67985 = (0);
var i__67986 = (0);
while(true){
if((i__67986 < count__67985)){
var map__67992 = chunk__67984.cljs$core$IIndexed$_nth$arity$2(null,i__67986);
var map__67992__$1 = (((((!((map__67992 == null))))?(((((map__67992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67992):map__67992);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67992__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__68039 = seq__67982;
var G__68040 = chunk__67984;
var G__68041 = count__67985;
var G__68042 = (i__67986 + (1));
seq__67982 = G__68039;
chunk__67984 = G__68040;
count__67985 = G__68041;
i__67986 = G__68042;
continue;
} else {
var G__68043 = seq__67982;
var G__68044 = chunk__67984;
var G__68045 = count__67985;
var G__68046 = (i__67986 + (1));
seq__67982 = G__68043;
chunk__67984 = G__68044;
count__67985 = G__68045;
i__67986 = G__68046;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67982);
if(temp__5735__auto__){
var seq__67982__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67982__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__67982__$1);
var G__68047 = cljs.core.chunk_rest(seq__67982__$1);
var G__68048 = c__4609__auto__;
var G__68049 = cljs.core.count(c__4609__auto__);
var G__68050 = (0);
seq__67982 = G__68047;
chunk__67984 = G__68048;
count__67985 = G__68049;
i__67986 = G__68050;
continue;
} else {
var map__67994 = cljs.core.first(seq__67982__$1);
var map__67994__$1 = (((((!((map__67994 == null))))?(((((map__67994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67994):map__67994);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67994__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__68051 = cljs.core.next(seq__67982__$1);
var G__68052 = null;
var G__68053 = (0);
var G__68054 = (0);
seq__67982 = G__68051;
chunk__67984 = G__68052;
count__67985 = G__68053;
i__67986 = G__68054;
continue;
} else {
var G__68055 = cljs.core.next(seq__67982__$1);
var G__68056 = null;
var G__68057 = (0);
var G__68058 = (0);
seq__67982 = G__68055;
chunk__67984 = G__68056;
count__67985 = G__68057;
i__67986 = G__68058;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__67996,msg){
var map__67997 = p__67996;
var map__67997__$1 = (((((!((map__67997 == null))))?(((((map__67997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67997):map__67997);
var runtime = map__67997__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67997__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__67999,key,p__68000){
var map__68001 = p__67999;
var map__68001__$1 = (((((!((map__68001 == null))))?(((((map__68001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68001):map__68001);
var state = map__68001__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68001__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__68002 = p__68000;
var map__68002__$1 = (((((!((map__68002 == null))))?(((((map__68002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68002):map__68002);
var spec = map__68002__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68002__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__68005,key,spec){
var map__68006 = p__68005;
var map__68006__$1 = (((((!((map__68006 == null))))?(((((map__68006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68006):map__68006);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68006__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__68013){
var map__68014 = p__68013;
var map__68014__$1 = (((((!((map__68014 == null))))?(((((map__68014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68014):map__68014);
var runtime = map__68014__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68014__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__68008_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__68008_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__68009_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__68009_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__68010_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__68010_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__68011_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__68011_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__68012_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__68012_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__68016,key){
var map__68017 = p__68016;
var map__68017__$1 = (((((!((map__68017 == null))))?(((((map__68017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68017):map__68017);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68017__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__68019,p__68020){
var map__68021 = p__68019;
var map__68021__$1 = (((((!((map__68021 == null))))?(((((map__68021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68021):map__68021);
var runtime = map__68021__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68021__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__68022 = p__68020;
var map__68022__$1 = (((((!((map__68022 == null))))?(((((map__68022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68022):map__68022);
var msg = map__68022__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68022__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__68025 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__68027 = null;
var count__68028 = (0);
var i__68029 = (0);
while(true){
if((i__68029 < count__68028)){
var map__68035 = chunk__68027.cljs$core$IIndexed$_nth$arity$2(null,i__68029);
var map__68035__$1 = (((((!((map__68035 == null))))?(((((map__68035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68035):map__68035);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68035__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__68059 = seq__68025;
var G__68060 = chunk__68027;
var G__68061 = count__68028;
var G__68062 = (i__68029 + (1));
seq__68025 = G__68059;
chunk__68027 = G__68060;
count__68028 = G__68061;
i__68029 = G__68062;
continue;
} else {
var G__68063 = seq__68025;
var G__68064 = chunk__68027;
var G__68065 = count__68028;
var G__68066 = (i__68029 + (1));
seq__68025 = G__68063;
chunk__68027 = G__68064;
count__68028 = G__68065;
i__68029 = G__68066;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__68025);
if(temp__5735__auto__){
var seq__68025__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68025__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__68025__$1);
var G__68067 = cljs.core.chunk_rest(seq__68025__$1);
var G__68068 = c__4609__auto__;
var G__68069 = cljs.core.count(c__4609__auto__);
var G__68070 = (0);
seq__68025 = G__68067;
chunk__68027 = G__68068;
count__68028 = G__68069;
i__68029 = G__68070;
continue;
} else {
var map__68037 = cljs.core.first(seq__68025__$1);
var map__68037__$1 = (((((!((map__68037 == null))))?(((((map__68037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68037):map__68037);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68037__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__68071 = cljs.core.next(seq__68025__$1);
var G__68072 = null;
var G__68073 = (0);
var G__68074 = (0);
seq__68025 = G__68071;
chunk__68027 = G__68072;
count__68028 = G__68073;
i__68029 = G__68074;
continue;
} else {
var G__68075 = cljs.core.next(seq__68025__$1);
var G__68076 = null;
var G__68077 = (0);
var G__68078 = (0);
seq__68025 = G__68075;
chunk__68027 = G__68076;
count__68028 = G__68077;
i__68029 = G__68078;
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
