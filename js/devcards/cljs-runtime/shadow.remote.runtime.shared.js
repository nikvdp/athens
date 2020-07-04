goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__60532,p__60533){
var map__60534 = p__60532;
var map__60534__$1 = (((((!((map__60534 == null))))?(((((map__60534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60534):map__60534);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60534__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60535 = p__60533;
var map__60535__$1 = (((((!((map__60535 == null))))?(((((map__60535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60535):map__60535);
var msg = map__60535__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60535__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__60538,p__60539){
var map__60540 = p__60538;
var map__60540__$1 = (((((!((map__60540 == null))))?(((((map__60540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60540):map__60540);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60540__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60541 = p__60539;
var map__60541__$1 = (((((!((map__60541 == null))))?(((((map__60541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60541):map__60541);
var msg = map__60541__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60541__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__60544 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60546 = null;
var count__60547 = (0);
var i__60548 = (0);
while(true){
if((i__60548 < count__60547)){
var map__60554 = chunk__60546.cljs$core$IIndexed$_nth$arity$2(null,i__60548);
var map__60554__$1 = (((((!((map__60554 == null))))?(((((map__60554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60554):map__60554);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60554__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60601 = seq__60544;
var G__60602 = chunk__60546;
var G__60603 = count__60547;
var G__60604 = (i__60548 + (1));
seq__60544 = G__60601;
chunk__60546 = G__60602;
count__60547 = G__60603;
i__60548 = G__60604;
continue;
} else {
var G__60605 = seq__60544;
var G__60606 = chunk__60546;
var G__60607 = count__60547;
var G__60608 = (i__60548 + (1));
seq__60544 = G__60605;
chunk__60546 = G__60606;
count__60547 = G__60607;
i__60548 = G__60608;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60544);
if(temp__5735__auto__){
var seq__60544__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60544__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60544__$1);
var G__60609 = cljs.core.chunk_rest(seq__60544__$1);
var G__60610 = c__4609__auto__;
var G__60611 = cljs.core.count(c__4609__auto__);
var G__60612 = (0);
seq__60544 = G__60609;
chunk__60546 = G__60610;
count__60547 = G__60611;
i__60548 = G__60612;
continue;
} else {
var map__60556 = cljs.core.first(seq__60544__$1);
var map__60556__$1 = (((((!((map__60556 == null))))?(((((map__60556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60556):map__60556);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60556__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60613 = cljs.core.next(seq__60544__$1);
var G__60614 = null;
var G__60615 = (0);
var G__60616 = (0);
seq__60544 = G__60613;
chunk__60546 = G__60614;
count__60547 = G__60615;
i__60548 = G__60616;
continue;
} else {
var G__60617 = cljs.core.next(seq__60544__$1);
var G__60618 = null;
var G__60619 = (0);
var G__60620 = (0);
seq__60544 = G__60617;
chunk__60546 = G__60618;
count__60547 = G__60619;
i__60548 = G__60620;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__60558,msg){
var map__60559 = p__60558;
var map__60559__$1 = (((((!((map__60559 == null))))?(((((map__60559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60559):map__60559);
var runtime = map__60559__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60559__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__60561,key,p__60562){
var map__60563 = p__60561;
var map__60563__$1 = (((((!((map__60563 == null))))?(((((map__60563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60563):map__60563);
var state = map__60563__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60563__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__60564 = p__60562;
var map__60564__$1 = (((((!((map__60564 == null))))?(((((map__60564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60564):map__60564);
var spec = map__60564__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60564__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__60567,key,spec){
var map__60568 = p__60567;
var map__60568__$1 = (((((!((map__60568 == null))))?(((((map__60568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60568):map__60568);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60568__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__60575){
var map__60576 = p__60575;
var map__60576__$1 = (((((!((map__60576 == null))))?(((((map__60576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60576):map__60576);
var runtime = map__60576__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60576__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__60570_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__60570_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__60571_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__60571_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__60572_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__60572_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__60573_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__60573_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__60574_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__60574_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__60578,key){
var map__60579 = p__60578;
var map__60579__$1 = (((((!((map__60579 == null))))?(((((map__60579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60579):map__60579);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60579__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__60581,p__60582){
var map__60583 = p__60581;
var map__60583__$1 = (((((!((map__60583 == null))))?(((((map__60583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60583):map__60583);
var runtime = map__60583__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60583__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60584 = p__60582;
var map__60584__$1 = (((((!((map__60584 == null))))?(((((map__60584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60584):map__60584);
var msg = map__60584__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60584__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__60587 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60589 = null;
var count__60590 = (0);
var i__60591 = (0);
while(true){
if((i__60591 < count__60590)){
var map__60597 = chunk__60589.cljs$core$IIndexed$_nth$arity$2(null,i__60591);
var map__60597__$1 = (((((!((map__60597 == null))))?(((((map__60597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60597):map__60597);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60597__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60621 = seq__60587;
var G__60622 = chunk__60589;
var G__60623 = count__60590;
var G__60624 = (i__60591 + (1));
seq__60587 = G__60621;
chunk__60589 = G__60622;
count__60590 = G__60623;
i__60591 = G__60624;
continue;
} else {
var G__60625 = seq__60587;
var G__60626 = chunk__60589;
var G__60627 = count__60590;
var G__60628 = (i__60591 + (1));
seq__60587 = G__60625;
chunk__60589 = G__60626;
count__60590 = G__60627;
i__60591 = G__60628;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60587);
if(temp__5735__auto__){
var seq__60587__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60587__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60587__$1);
var G__60629 = cljs.core.chunk_rest(seq__60587__$1);
var G__60630 = c__4609__auto__;
var G__60631 = cljs.core.count(c__4609__auto__);
var G__60632 = (0);
seq__60587 = G__60629;
chunk__60589 = G__60630;
count__60590 = G__60631;
i__60591 = G__60632;
continue;
} else {
var map__60599 = cljs.core.first(seq__60587__$1);
var map__60599__$1 = (((((!((map__60599 == null))))?(((((map__60599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60599):map__60599);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60599__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60633 = cljs.core.next(seq__60587__$1);
var G__60634 = null;
var G__60635 = (0);
var G__60636 = (0);
seq__60587 = G__60633;
chunk__60589 = G__60634;
count__60590 = G__60635;
i__60591 = G__60636;
continue;
} else {
var G__60637 = cljs.core.next(seq__60587__$1);
var G__60638 = null;
var G__60639 = (0);
var G__60640 = (0);
seq__60587 = G__60637;
chunk__60589 = G__60638;
count__60590 = G__60639;
i__60591 = G__60640;
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
