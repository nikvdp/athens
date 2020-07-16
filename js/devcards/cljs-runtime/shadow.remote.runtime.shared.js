goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__61095,p__61096){
var map__61097 = p__61095;
var map__61097__$1 = (((((!((map__61097 == null))))?(((((map__61097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61097):map__61097);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61097__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61098 = p__61096;
var map__61098__$1 = (((((!((map__61098 == null))))?(((((map__61098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61098):map__61098);
var msg = map__61098__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61098__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__61101,p__61102){
var map__61103 = p__61101;
var map__61103__$1 = (((((!((map__61103 == null))))?(((((map__61103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61103):map__61103);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61103__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61104 = p__61102;
var map__61104__$1 = (((((!((map__61104 == null))))?(((((map__61104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61104):map__61104);
var msg = map__61104__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61104__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__61107 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__61109 = null;
var count__61110 = (0);
var i__61111 = (0);
while(true){
if((i__61111 < count__61110)){
var map__61117 = chunk__61109.cljs$core$IIndexed$_nth$arity$2(null,i__61111);
var map__61117__$1 = (((((!((map__61117 == null))))?(((((map__61117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61117):map__61117);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61117__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__61164 = seq__61107;
var G__61165 = chunk__61109;
var G__61166 = count__61110;
var G__61167 = (i__61111 + (1));
seq__61107 = G__61164;
chunk__61109 = G__61165;
count__61110 = G__61166;
i__61111 = G__61167;
continue;
} else {
var G__61168 = seq__61107;
var G__61169 = chunk__61109;
var G__61170 = count__61110;
var G__61171 = (i__61111 + (1));
seq__61107 = G__61168;
chunk__61109 = G__61169;
count__61110 = G__61170;
i__61111 = G__61171;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61107);
if(temp__5735__auto__){
var seq__61107__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61107__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61107__$1);
var G__61172 = cljs.core.chunk_rest(seq__61107__$1);
var G__61173 = c__4609__auto__;
var G__61174 = cljs.core.count(c__4609__auto__);
var G__61175 = (0);
seq__61107 = G__61172;
chunk__61109 = G__61173;
count__61110 = G__61174;
i__61111 = G__61175;
continue;
} else {
var map__61119 = cljs.core.first(seq__61107__$1);
var map__61119__$1 = (((((!((map__61119 == null))))?(((((map__61119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61119):map__61119);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61119__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__61176 = cljs.core.next(seq__61107__$1);
var G__61177 = null;
var G__61178 = (0);
var G__61179 = (0);
seq__61107 = G__61176;
chunk__61109 = G__61177;
count__61110 = G__61178;
i__61111 = G__61179;
continue;
} else {
var G__61180 = cljs.core.next(seq__61107__$1);
var G__61181 = null;
var G__61182 = (0);
var G__61183 = (0);
seq__61107 = G__61180;
chunk__61109 = G__61181;
count__61110 = G__61182;
i__61111 = G__61183;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__61121,msg){
var map__61122 = p__61121;
var map__61122__$1 = (((((!((map__61122 == null))))?(((((map__61122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61122):map__61122);
var runtime = map__61122__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61122__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__61124,key,p__61125){
var map__61126 = p__61124;
var map__61126__$1 = (((((!((map__61126 == null))))?(((((map__61126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61126):map__61126);
var state = map__61126__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61126__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__61127 = p__61125;
var map__61127__$1 = (((((!((map__61127 == null))))?(((((map__61127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61127):map__61127);
var spec = map__61127__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61127__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__61130,key,spec){
var map__61131 = p__61130;
var map__61131__$1 = (((((!((map__61131 == null))))?(((((map__61131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61131):map__61131);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61131__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__61138){
var map__61139 = p__61138;
var map__61139__$1 = (((((!((map__61139 == null))))?(((((map__61139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61139):map__61139);
var runtime = map__61139__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61139__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__61133_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__61133_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__61134_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__61134_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__61135_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__61135_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__61136_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__61136_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__61137_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__61137_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__61141,key){
var map__61142 = p__61141;
var map__61142__$1 = (((((!((map__61142 == null))))?(((((map__61142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61142):map__61142);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61142__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__61144,p__61145){
var map__61146 = p__61144;
var map__61146__$1 = (((((!((map__61146 == null))))?(((((map__61146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61146):map__61146);
var runtime = map__61146__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61146__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61147 = p__61145;
var map__61147__$1 = (((((!((map__61147 == null))))?(((((map__61147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61147):map__61147);
var msg = map__61147__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61147__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__61150 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__61152 = null;
var count__61153 = (0);
var i__61154 = (0);
while(true){
if((i__61154 < count__61153)){
var map__61160 = chunk__61152.cljs$core$IIndexed$_nth$arity$2(null,i__61154);
var map__61160__$1 = (((((!((map__61160 == null))))?(((((map__61160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61160):map__61160);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61160__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__61184 = seq__61150;
var G__61185 = chunk__61152;
var G__61186 = count__61153;
var G__61187 = (i__61154 + (1));
seq__61150 = G__61184;
chunk__61152 = G__61185;
count__61153 = G__61186;
i__61154 = G__61187;
continue;
} else {
var G__61188 = seq__61150;
var G__61189 = chunk__61152;
var G__61190 = count__61153;
var G__61191 = (i__61154 + (1));
seq__61150 = G__61188;
chunk__61152 = G__61189;
count__61153 = G__61190;
i__61154 = G__61191;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61150);
if(temp__5735__auto__){
var seq__61150__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61150__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61150__$1);
var G__61192 = cljs.core.chunk_rest(seq__61150__$1);
var G__61193 = c__4609__auto__;
var G__61194 = cljs.core.count(c__4609__auto__);
var G__61195 = (0);
seq__61150 = G__61192;
chunk__61152 = G__61193;
count__61153 = G__61194;
i__61154 = G__61195;
continue;
} else {
var map__61162 = cljs.core.first(seq__61150__$1);
var map__61162__$1 = (((((!((map__61162 == null))))?(((((map__61162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61162):map__61162);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61162__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__61196 = cljs.core.next(seq__61150__$1);
var G__61197 = null;
var G__61198 = (0);
var G__61199 = (0);
seq__61150 = G__61196;
chunk__61152 = G__61197;
count__61153 = G__61198;
i__61154 = G__61199;
continue;
} else {
var G__61200 = cljs.core.next(seq__61150__$1);
var G__61201 = null;
var G__61202 = (0);
var G__61203 = (0);
seq__61150 = G__61200;
chunk__61152 = G__61201;
count__61153 = G__61202;
i__61154 = G__61203;
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
