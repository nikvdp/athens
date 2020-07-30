goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__61126,p__61127){
var map__61128 = p__61126;
var map__61128__$1 = (((((!((map__61128 == null))))?(((((map__61128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61128):map__61128);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61128__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61129 = p__61127;
var map__61129__$1 = (((((!((map__61129 == null))))?(((((map__61129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61129):map__61129);
var msg = map__61129__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61129__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__61132,p__61133){
var map__61134 = p__61132;
var map__61134__$1 = (((((!((map__61134 == null))))?(((((map__61134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61134):map__61134);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61134__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61135 = p__61133;
var map__61135__$1 = (((((!((map__61135 == null))))?(((((map__61135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61135):map__61135);
var msg = map__61135__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61135__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__61138 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__61140 = null;
var count__61141 = (0);
var i__61142 = (0);
while(true){
if((i__61142 < count__61141)){
var map__61148 = chunk__61140.cljs$core$IIndexed$_nth$arity$2(null,i__61142);
var map__61148__$1 = (((((!((map__61148 == null))))?(((((map__61148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61148):map__61148);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61148__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__61195 = seq__61138;
var G__61196 = chunk__61140;
var G__61197 = count__61141;
var G__61198 = (i__61142 + (1));
seq__61138 = G__61195;
chunk__61140 = G__61196;
count__61141 = G__61197;
i__61142 = G__61198;
continue;
} else {
var G__61199 = seq__61138;
var G__61200 = chunk__61140;
var G__61201 = count__61141;
var G__61202 = (i__61142 + (1));
seq__61138 = G__61199;
chunk__61140 = G__61200;
count__61141 = G__61201;
i__61142 = G__61202;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61138);
if(temp__5735__auto__){
var seq__61138__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61138__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61138__$1);
var G__61203 = cljs.core.chunk_rest(seq__61138__$1);
var G__61204 = c__4609__auto__;
var G__61205 = cljs.core.count(c__4609__auto__);
var G__61206 = (0);
seq__61138 = G__61203;
chunk__61140 = G__61204;
count__61141 = G__61205;
i__61142 = G__61206;
continue;
} else {
var map__61150 = cljs.core.first(seq__61138__$1);
var map__61150__$1 = (((((!((map__61150 == null))))?(((((map__61150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61150):map__61150);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61150__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__61207 = cljs.core.next(seq__61138__$1);
var G__61208 = null;
var G__61209 = (0);
var G__61210 = (0);
seq__61138 = G__61207;
chunk__61140 = G__61208;
count__61141 = G__61209;
i__61142 = G__61210;
continue;
} else {
var G__61211 = cljs.core.next(seq__61138__$1);
var G__61212 = null;
var G__61213 = (0);
var G__61214 = (0);
seq__61138 = G__61211;
chunk__61140 = G__61212;
count__61141 = G__61213;
i__61142 = G__61214;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__61152,msg){
var map__61153 = p__61152;
var map__61153__$1 = (((((!((map__61153 == null))))?(((((map__61153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61153):map__61153);
var runtime = map__61153__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61153__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__61155,key,p__61156){
var map__61157 = p__61155;
var map__61157__$1 = (((((!((map__61157 == null))))?(((((map__61157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61157):map__61157);
var state = map__61157__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61157__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__61158 = p__61156;
var map__61158__$1 = (((((!((map__61158 == null))))?(((((map__61158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61158):map__61158);
var spec = map__61158__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61158__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__61161,key,spec){
var map__61162 = p__61161;
var map__61162__$1 = (((((!((map__61162 == null))))?(((((map__61162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61162):map__61162);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61162__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__61169){
var map__61170 = p__61169;
var map__61170__$1 = (((((!((map__61170 == null))))?(((((map__61170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61170):map__61170);
var runtime = map__61170__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61170__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__61164_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__61164_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__61165_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__61165_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__61166_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__61166_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__61167_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__61167_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__61168_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__61168_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__61172,key){
var map__61173 = p__61172;
var map__61173__$1 = (((((!((map__61173 == null))))?(((((map__61173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61173):map__61173);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61173__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__61175,p__61176){
var map__61177 = p__61175;
var map__61177__$1 = (((((!((map__61177 == null))))?(((((map__61177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61177):map__61177);
var runtime = map__61177__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61177__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61178 = p__61176;
var map__61178__$1 = (((((!((map__61178 == null))))?(((((map__61178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61178):map__61178);
var msg = map__61178__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61178__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__61181 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__61183 = null;
var count__61184 = (0);
var i__61185 = (0);
while(true){
if((i__61185 < count__61184)){
var map__61191 = chunk__61183.cljs$core$IIndexed$_nth$arity$2(null,i__61185);
var map__61191__$1 = (((((!((map__61191 == null))))?(((((map__61191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61191):map__61191);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61191__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__61215 = seq__61181;
var G__61216 = chunk__61183;
var G__61217 = count__61184;
var G__61218 = (i__61185 + (1));
seq__61181 = G__61215;
chunk__61183 = G__61216;
count__61184 = G__61217;
i__61185 = G__61218;
continue;
} else {
var G__61219 = seq__61181;
var G__61220 = chunk__61183;
var G__61221 = count__61184;
var G__61222 = (i__61185 + (1));
seq__61181 = G__61219;
chunk__61183 = G__61220;
count__61184 = G__61221;
i__61185 = G__61222;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61181);
if(temp__5735__auto__){
var seq__61181__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61181__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61181__$1);
var G__61223 = cljs.core.chunk_rest(seq__61181__$1);
var G__61224 = c__4609__auto__;
var G__61225 = cljs.core.count(c__4609__auto__);
var G__61226 = (0);
seq__61181 = G__61223;
chunk__61183 = G__61224;
count__61184 = G__61225;
i__61185 = G__61226;
continue;
} else {
var map__61193 = cljs.core.first(seq__61181__$1);
var map__61193__$1 = (((((!((map__61193 == null))))?(((((map__61193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61193):map__61193);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61193__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__61227 = cljs.core.next(seq__61181__$1);
var G__61228 = null;
var G__61229 = (0);
var G__61230 = (0);
seq__61181 = G__61227;
chunk__61183 = G__61228;
count__61184 = G__61229;
i__61185 = G__61230;
continue;
} else {
var G__61231 = cljs.core.next(seq__61181__$1);
var G__61232 = null;
var G__61233 = (0);
var G__61234 = (0);
seq__61181 = G__61231;
chunk__61183 = G__61232;
count__61184 = G__61233;
i__61185 = G__61234;
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
