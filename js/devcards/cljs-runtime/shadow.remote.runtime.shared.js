goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__60981,p__60982){
var map__60983 = p__60981;
var map__60983__$1 = (((((!((map__60983 == null))))?(((((map__60983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60983):map__60983);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60983__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60984 = p__60982;
var map__60984__$1 = (((((!((map__60984 == null))))?(((((map__60984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60984):map__60984);
var msg = map__60984__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60984__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__60987,p__60988){
var map__60989 = p__60987;
var map__60989__$1 = (((((!((map__60989 == null))))?(((((map__60989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60989):map__60989);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60989__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60990 = p__60988;
var map__60990__$1 = (((((!((map__60990 == null))))?(((((map__60990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60990):map__60990);
var msg = map__60990__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60990__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__60993 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60995 = null;
var count__60996 = (0);
var i__60997 = (0);
while(true){
if((i__60997 < count__60996)){
var map__61003 = chunk__60995.cljs$core$IIndexed$_nth$arity$2(null,i__60997);
var map__61003__$1 = (((((!((map__61003 == null))))?(((((map__61003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61003):map__61003);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61003__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__61050 = seq__60993;
var G__61051 = chunk__60995;
var G__61052 = count__60996;
var G__61053 = (i__60997 + (1));
seq__60993 = G__61050;
chunk__60995 = G__61051;
count__60996 = G__61052;
i__60997 = G__61053;
continue;
} else {
var G__61054 = seq__60993;
var G__61055 = chunk__60995;
var G__61056 = count__60996;
var G__61057 = (i__60997 + (1));
seq__60993 = G__61054;
chunk__60995 = G__61055;
count__60996 = G__61056;
i__60997 = G__61057;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60993);
if(temp__5735__auto__){
var seq__60993__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60993__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60993__$1);
var G__61058 = cljs.core.chunk_rest(seq__60993__$1);
var G__61059 = c__4609__auto__;
var G__61060 = cljs.core.count(c__4609__auto__);
var G__61061 = (0);
seq__60993 = G__61058;
chunk__60995 = G__61059;
count__60996 = G__61060;
i__60997 = G__61061;
continue;
} else {
var map__61005 = cljs.core.first(seq__60993__$1);
var map__61005__$1 = (((((!((map__61005 == null))))?(((((map__61005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61005):map__61005);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61005__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__61062 = cljs.core.next(seq__60993__$1);
var G__61063 = null;
var G__61064 = (0);
var G__61065 = (0);
seq__60993 = G__61062;
chunk__60995 = G__61063;
count__60996 = G__61064;
i__60997 = G__61065;
continue;
} else {
var G__61066 = cljs.core.next(seq__60993__$1);
var G__61067 = null;
var G__61068 = (0);
var G__61069 = (0);
seq__60993 = G__61066;
chunk__60995 = G__61067;
count__60996 = G__61068;
i__60997 = G__61069;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__61007,msg){
var map__61008 = p__61007;
var map__61008__$1 = (((((!((map__61008 == null))))?(((((map__61008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61008):map__61008);
var runtime = map__61008__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61008__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__61010,key,p__61011){
var map__61012 = p__61010;
var map__61012__$1 = (((((!((map__61012 == null))))?(((((map__61012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61012):map__61012);
var state = map__61012__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61012__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__61013 = p__61011;
var map__61013__$1 = (((((!((map__61013 == null))))?(((((map__61013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61013):map__61013);
var spec = map__61013__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61013__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__61016,key,spec){
var map__61017 = p__61016;
var map__61017__$1 = (((((!((map__61017 == null))))?(((((map__61017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61017):map__61017);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61017__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__61024){
var map__61025 = p__61024;
var map__61025__$1 = (((((!((map__61025 == null))))?(((((map__61025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61025):map__61025);
var runtime = map__61025__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61025__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__61019_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__61019_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__61020_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__61020_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__61021_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__61021_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__61022_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__61022_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__61023_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__61023_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__61027,key){
var map__61028 = p__61027;
var map__61028__$1 = (((((!((map__61028 == null))))?(((((map__61028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61028):map__61028);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61028__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__61030,p__61031){
var map__61032 = p__61030;
var map__61032__$1 = (((((!((map__61032 == null))))?(((((map__61032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61032):map__61032);
var runtime = map__61032__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61032__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61033 = p__61031;
var map__61033__$1 = (((((!((map__61033 == null))))?(((((map__61033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61033):map__61033);
var msg = map__61033__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61033__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__61036 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__61038 = null;
var count__61039 = (0);
var i__61040 = (0);
while(true){
if((i__61040 < count__61039)){
var map__61046 = chunk__61038.cljs$core$IIndexed$_nth$arity$2(null,i__61040);
var map__61046__$1 = (((((!((map__61046 == null))))?(((((map__61046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61046):map__61046);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61046__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__61070 = seq__61036;
var G__61071 = chunk__61038;
var G__61072 = count__61039;
var G__61073 = (i__61040 + (1));
seq__61036 = G__61070;
chunk__61038 = G__61071;
count__61039 = G__61072;
i__61040 = G__61073;
continue;
} else {
var G__61074 = seq__61036;
var G__61075 = chunk__61038;
var G__61076 = count__61039;
var G__61077 = (i__61040 + (1));
seq__61036 = G__61074;
chunk__61038 = G__61075;
count__61039 = G__61076;
i__61040 = G__61077;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61036);
if(temp__5735__auto__){
var seq__61036__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61036__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61036__$1);
var G__61078 = cljs.core.chunk_rest(seq__61036__$1);
var G__61079 = c__4609__auto__;
var G__61080 = cljs.core.count(c__4609__auto__);
var G__61081 = (0);
seq__61036 = G__61078;
chunk__61038 = G__61079;
count__61039 = G__61080;
i__61040 = G__61081;
continue;
} else {
var map__61048 = cljs.core.first(seq__61036__$1);
var map__61048__$1 = (((((!((map__61048 == null))))?(((((map__61048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61048):map__61048);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61048__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__61082 = cljs.core.next(seq__61036__$1);
var G__61083 = null;
var G__61084 = (0);
var G__61085 = (0);
seq__61036 = G__61082;
chunk__61038 = G__61083;
count__61039 = G__61084;
i__61040 = G__61085;
continue;
} else {
var G__61086 = cljs.core.next(seq__61036__$1);
var G__61087 = null;
var G__61088 = (0);
var G__61089 = (0);
seq__61036 = G__61086;
chunk__61038 = G__61087;
count__61039 = G__61088;
i__61040 = G__61089;
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
