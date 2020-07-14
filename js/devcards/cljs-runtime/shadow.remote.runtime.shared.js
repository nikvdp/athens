goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__61094,p__61095){
var map__61096 = p__61094;
var map__61096__$1 = (((((!((map__61096 == null))))?(((((map__61096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61096):map__61096);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61096__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61097 = p__61095;
var map__61097__$1 = (((((!((map__61097 == null))))?(((((map__61097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61097):map__61097);
var msg = map__61097__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61097__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__61100,p__61101){
var map__61102 = p__61100;
var map__61102__$1 = (((((!((map__61102 == null))))?(((((map__61102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61102):map__61102);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61102__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61103 = p__61101;
var map__61103__$1 = (((((!((map__61103 == null))))?(((((map__61103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61103):map__61103);
var msg = map__61103__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61103__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__61106 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__61108 = null;
var count__61109 = (0);
var i__61110 = (0);
while(true){
if((i__61110 < count__61109)){
var map__61116 = chunk__61108.cljs$core$IIndexed$_nth$arity$2(null,i__61110);
var map__61116__$1 = (((((!((map__61116 == null))))?(((((map__61116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61116):map__61116);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61116__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__61163 = seq__61106;
var G__61164 = chunk__61108;
var G__61165 = count__61109;
var G__61166 = (i__61110 + (1));
seq__61106 = G__61163;
chunk__61108 = G__61164;
count__61109 = G__61165;
i__61110 = G__61166;
continue;
} else {
var G__61167 = seq__61106;
var G__61168 = chunk__61108;
var G__61169 = count__61109;
var G__61170 = (i__61110 + (1));
seq__61106 = G__61167;
chunk__61108 = G__61168;
count__61109 = G__61169;
i__61110 = G__61170;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61106);
if(temp__5735__auto__){
var seq__61106__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61106__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61106__$1);
var G__61171 = cljs.core.chunk_rest(seq__61106__$1);
var G__61172 = c__4609__auto__;
var G__61173 = cljs.core.count(c__4609__auto__);
var G__61174 = (0);
seq__61106 = G__61171;
chunk__61108 = G__61172;
count__61109 = G__61173;
i__61110 = G__61174;
continue;
} else {
var map__61118 = cljs.core.first(seq__61106__$1);
var map__61118__$1 = (((((!((map__61118 == null))))?(((((map__61118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61118):map__61118);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61118__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__61175 = cljs.core.next(seq__61106__$1);
var G__61176 = null;
var G__61177 = (0);
var G__61178 = (0);
seq__61106 = G__61175;
chunk__61108 = G__61176;
count__61109 = G__61177;
i__61110 = G__61178;
continue;
} else {
var G__61179 = cljs.core.next(seq__61106__$1);
var G__61180 = null;
var G__61181 = (0);
var G__61182 = (0);
seq__61106 = G__61179;
chunk__61108 = G__61180;
count__61109 = G__61181;
i__61110 = G__61182;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__61120,msg){
var map__61121 = p__61120;
var map__61121__$1 = (((((!((map__61121 == null))))?(((((map__61121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61121):map__61121);
var runtime = map__61121__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61121__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__61123,key,p__61124){
var map__61125 = p__61123;
var map__61125__$1 = (((((!((map__61125 == null))))?(((((map__61125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61125):map__61125);
var state = map__61125__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61125__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__61126 = p__61124;
var map__61126__$1 = (((((!((map__61126 == null))))?(((((map__61126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61126):map__61126);
var spec = map__61126__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61126__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__61129,key,spec){
var map__61130 = p__61129;
var map__61130__$1 = (((((!((map__61130 == null))))?(((((map__61130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61130):map__61130);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61130__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__61137){
var map__61138 = p__61137;
var map__61138__$1 = (((((!((map__61138 == null))))?(((((map__61138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61138):map__61138);
var runtime = map__61138__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61138__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__61132_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__61132_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__61133_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__61133_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__61134_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__61134_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__61135_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__61135_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__61136_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__61136_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__61140,key){
var map__61141 = p__61140;
var map__61141__$1 = (((((!((map__61141 == null))))?(((((map__61141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61141):map__61141);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61141__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__61143,p__61144){
var map__61145 = p__61143;
var map__61145__$1 = (((((!((map__61145 == null))))?(((((map__61145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61145):map__61145);
var runtime = map__61145__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61145__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61146 = p__61144;
var map__61146__$1 = (((((!((map__61146 == null))))?(((((map__61146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61146):map__61146);
var msg = map__61146__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61146__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__61149 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__61151 = null;
var count__61152 = (0);
var i__61153 = (0);
while(true){
if((i__61153 < count__61152)){
var map__61159 = chunk__61151.cljs$core$IIndexed$_nth$arity$2(null,i__61153);
var map__61159__$1 = (((((!((map__61159 == null))))?(((((map__61159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61159):map__61159);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61159__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__61183 = seq__61149;
var G__61184 = chunk__61151;
var G__61185 = count__61152;
var G__61186 = (i__61153 + (1));
seq__61149 = G__61183;
chunk__61151 = G__61184;
count__61152 = G__61185;
i__61153 = G__61186;
continue;
} else {
var G__61187 = seq__61149;
var G__61188 = chunk__61151;
var G__61189 = count__61152;
var G__61190 = (i__61153 + (1));
seq__61149 = G__61187;
chunk__61151 = G__61188;
count__61152 = G__61189;
i__61153 = G__61190;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61149);
if(temp__5735__auto__){
var seq__61149__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61149__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61149__$1);
var G__61191 = cljs.core.chunk_rest(seq__61149__$1);
var G__61192 = c__4609__auto__;
var G__61193 = cljs.core.count(c__4609__auto__);
var G__61194 = (0);
seq__61149 = G__61191;
chunk__61151 = G__61192;
count__61152 = G__61193;
i__61153 = G__61194;
continue;
} else {
var map__61161 = cljs.core.first(seq__61149__$1);
var map__61161__$1 = (((((!((map__61161 == null))))?(((((map__61161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61161):map__61161);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61161__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__61195 = cljs.core.next(seq__61149__$1);
var G__61196 = null;
var G__61197 = (0);
var G__61198 = (0);
seq__61149 = G__61195;
chunk__61151 = G__61196;
count__61152 = G__61197;
i__61153 = G__61198;
continue;
} else {
var G__61199 = cljs.core.next(seq__61149__$1);
var G__61200 = null;
var G__61201 = (0);
var G__61202 = (0);
seq__61149 = G__61199;
chunk__61151 = G__61200;
count__61152 = G__61201;
i__61153 = G__61202;
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
