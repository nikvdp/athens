goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__68044,p__68045){
var map__68046 = p__68044;
var map__68046__$1 = (((((!((map__68046 == null))))?(((((map__68046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68046):map__68046);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68046__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__68047 = p__68045;
var map__68047__$1 = (((((!((map__68047 == null))))?(((((map__68047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68047):map__68047);
var msg = map__68047__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68047__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__68050,p__68051){
var map__68052 = p__68050;
var map__68052__$1 = (((((!((map__68052 == null))))?(((((map__68052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68052):map__68052);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68052__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__68053 = p__68051;
var map__68053__$1 = (((((!((map__68053 == null))))?(((((map__68053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68053):map__68053);
var msg = map__68053__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68053__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__68056 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__68058 = null;
var count__68059 = (0);
var i__68060 = (0);
while(true){
if((i__68060 < count__68059)){
var map__68066 = chunk__68058.cljs$core$IIndexed$_nth$arity$2(null,i__68060);
var map__68066__$1 = (((((!((map__68066 == null))))?(((((map__68066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68066):map__68066);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68066__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__68113 = seq__68056;
var G__68114 = chunk__68058;
var G__68115 = count__68059;
var G__68116 = (i__68060 + (1));
seq__68056 = G__68113;
chunk__68058 = G__68114;
count__68059 = G__68115;
i__68060 = G__68116;
continue;
} else {
var G__68117 = seq__68056;
var G__68118 = chunk__68058;
var G__68119 = count__68059;
var G__68120 = (i__68060 + (1));
seq__68056 = G__68117;
chunk__68058 = G__68118;
count__68059 = G__68119;
i__68060 = G__68120;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__68056);
if(temp__5735__auto__){
var seq__68056__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68056__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__68056__$1);
var G__68121 = cljs.core.chunk_rest(seq__68056__$1);
var G__68122 = c__4609__auto__;
var G__68123 = cljs.core.count(c__4609__auto__);
var G__68124 = (0);
seq__68056 = G__68121;
chunk__68058 = G__68122;
count__68059 = G__68123;
i__68060 = G__68124;
continue;
} else {
var map__68068 = cljs.core.first(seq__68056__$1);
var map__68068__$1 = (((((!((map__68068 == null))))?(((((map__68068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68068):map__68068);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68068__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__68125 = cljs.core.next(seq__68056__$1);
var G__68126 = null;
var G__68127 = (0);
var G__68128 = (0);
seq__68056 = G__68125;
chunk__68058 = G__68126;
count__68059 = G__68127;
i__68060 = G__68128;
continue;
} else {
var G__68129 = cljs.core.next(seq__68056__$1);
var G__68130 = null;
var G__68131 = (0);
var G__68132 = (0);
seq__68056 = G__68129;
chunk__68058 = G__68130;
count__68059 = G__68131;
i__68060 = G__68132;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__68070,msg){
var map__68071 = p__68070;
var map__68071__$1 = (((((!((map__68071 == null))))?(((((map__68071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68071):map__68071);
var runtime = map__68071__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68071__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__68073,key,p__68074){
var map__68075 = p__68073;
var map__68075__$1 = (((((!((map__68075 == null))))?(((((map__68075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68075):map__68075);
var state = map__68075__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68075__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__68076 = p__68074;
var map__68076__$1 = (((((!((map__68076 == null))))?(((((map__68076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68076):map__68076);
var spec = map__68076__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68076__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__68079,key,spec){
var map__68080 = p__68079;
var map__68080__$1 = (((((!((map__68080 == null))))?(((((map__68080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68080):map__68080);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68080__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__68087){
var map__68088 = p__68087;
var map__68088__$1 = (((((!((map__68088 == null))))?(((((map__68088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68088):map__68088);
var runtime = map__68088__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68088__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__68082_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__68082_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__68083_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__68083_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__68084_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__68084_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__68085_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__68085_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__68086_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__68086_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__68090,key){
var map__68091 = p__68090;
var map__68091__$1 = (((((!((map__68091 == null))))?(((((map__68091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68091):map__68091);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68091__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__68093,p__68094){
var map__68095 = p__68093;
var map__68095__$1 = (((((!((map__68095 == null))))?(((((map__68095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68095):map__68095);
var runtime = map__68095__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68095__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__68096 = p__68094;
var map__68096__$1 = (((((!((map__68096 == null))))?(((((map__68096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68096):map__68096);
var msg = map__68096__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68096__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__68099 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__68101 = null;
var count__68102 = (0);
var i__68103 = (0);
while(true){
if((i__68103 < count__68102)){
var map__68109 = chunk__68101.cljs$core$IIndexed$_nth$arity$2(null,i__68103);
var map__68109__$1 = (((((!((map__68109 == null))))?(((((map__68109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68109):map__68109);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68109__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__68133 = seq__68099;
var G__68134 = chunk__68101;
var G__68135 = count__68102;
var G__68136 = (i__68103 + (1));
seq__68099 = G__68133;
chunk__68101 = G__68134;
count__68102 = G__68135;
i__68103 = G__68136;
continue;
} else {
var G__68137 = seq__68099;
var G__68138 = chunk__68101;
var G__68139 = count__68102;
var G__68140 = (i__68103 + (1));
seq__68099 = G__68137;
chunk__68101 = G__68138;
count__68102 = G__68139;
i__68103 = G__68140;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__68099);
if(temp__5735__auto__){
var seq__68099__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68099__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__68099__$1);
var G__68141 = cljs.core.chunk_rest(seq__68099__$1);
var G__68142 = c__4609__auto__;
var G__68143 = cljs.core.count(c__4609__auto__);
var G__68144 = (0);
seq__68099 = G__68141;
chunk__68101 = G__68142;
count__68102 = G__68143;
i__68103 = G__68144;
continue;
} else {
var map__68111 = cljs.core.first(seq__68099__$1);
var map__68111__$1 = (((((!((map__68111 == null))))?(((((map__68111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68111):map__68111);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68111__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__68145 = cljs.core.next(seq__68099__$1);
var G__68146 = null;
var G__68147 = (0);
var G__68148 = (0);
seq__68099 = G__68145;
chunk__68101 = G__68146;
count__68102 = G__68147;
i__68103 = G__68148;
continue;
} else {
var G__68149 = cljs.core.next(seq__68099__$1);
var G__68150 = null;
var G__68151 = (0);
var G__68152 = (0);
seq__68099 = G__68149;
chunk__68101 = G__68150;
count__68102 = G__68151;
i__68103 = G__68152;
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
