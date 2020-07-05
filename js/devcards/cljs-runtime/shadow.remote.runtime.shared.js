goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__60537,p__60538){
var map__60539 = p__60537;
var map__60539__$1 = (((((!((map__60539 == null))))?(((((map__60539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60539):map__60539);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60539__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60540 = p__60538;
var map__60540__$1 = (((((!((map__60540 == null))))?(((((map__60540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60540):map__60540);
var msg = map__60540__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60540__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__60543,p__60544){
var map__60545 = p__60543;
var map__60545__$1 = (((((!((map__60545 == null))))?(((((map__60545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60545):map__60545);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60545__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60546 = p__60544;
var map__60546__$1 = (((((!((map__60546 == null))))?(((((map__60546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60546):map__60546);
var msg = map__60546__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60546__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__60549 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60551 = null;
var count__60552 = (0);
var i__60553 = (0);
while(true){
if((i__60553 < count__60552)){
var map__60559 = chunk__60551.cljs$core$IIndexed$_nth$arity$2(null,i__60553);
var map__60559__$1 = (((((!((map__60559 == null))))?(((((map__60559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60559):map__60559);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60559__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60606 = seq__60549;
var G__60607 = chunk__60551;
var G__60608 = count__60552;
var G__60609 = (i__60553 + (1));
seq__60549 = G__60606;
chunk__60551 = G__60607;
count__60552 = G__60608;
i__60553 = G__60609;
continue;
} else {
var G__60610 = seq__60549;
var G__60611 = chunk__60551;
var G__60612 = count__60552;
var G__60613 = (i__60553 + (1));
seq__60549 = G__60610;
chunk__60551 = G__60611;
count__60552 = G__60612;
i__60553 = G__60613;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60549);
if(temp__5735__auto__){
var seq__60549__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60549__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60549__$1);
var G__60614 = cljs.core.chunk_rest(seq__60549__$1);
var G__60615 = c__4609__auto__;
var G__60616 = cljs.core.count(c__4609__auto__);
var G__60617 = (0);
seq__60549 = G__60614;
chunk__60551 = G__60615;
count__60552 = G__60616;
i__60553 = G__60617;
continue;
} else {
var map__60561 = cljs.core.first(seq__60549__$1);
var map__60561__$1 = (((((!((map__60561 == null))))?(((((map__60561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60561):map__60561);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60561__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60618 = cljs.core.next(seq__60549__$1);
var G__60619 = null;
var G__60620 = (0);
var G__60621 = (0);
seq__60549 = G__60618;
chunk__60551 = G__60619;
count__60552 = G__60620;
i__60553 = G__60621;
continue;
} else {
var G__60622 = cljs.core.next(seq__60549__$1);
var G__60623 = null;
var G__60624 = (0);
var G__60625 = (0);
seq__60549 = G__60622;
chunk__60551 = G__60623;
count__60552 = G__60624;
i__60553 = G__60625;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__60563,msg){
var map__60564 = p__60563;
var map__60564__$1 = (((((!((map__60564 == null))))?(((((map__60564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60564):map__60564);
var runtime = map__60564__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60564__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__60566,key,p__60567){
var map__60568 = p__60566;
var map__60568__$1 = (((((!((map__60568 == null))))?(((((map__60568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60568):map__60568);
var state = map__60568__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60568__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__60569 = p__60567;
var map__60569__$1 = (((((!((map__60569 == null))))?(((((map__60569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60569):map__60569);
var spec = map__60569__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60569__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__60572,key,spec){
var map__60573 = p__60572;
var map__60573__$1 = (((((!((map__60573 == null))))?(((((map__60573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60573):map__60573);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60573__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__60580){
var map__60581 = p__60580;
var map__60581__$1 = (((((!((map__60581 == null))))?(((((map__60581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60581):map__60581);
var runtime = map__60581__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60581__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__60575_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__60575_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__60576_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__60576_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__60577_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__60577_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__60578_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__60578_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__60579_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__60579_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__60583,key){
var map__60584 = p__60583;
var map__60584__$1 = (((((!((map__60584 == null))))?(((((map__60584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60584):map__60584);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60584__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__60586,p__60587){
var map__60588 = p__60586;
var map__60588__$1 = (((((!((map__60588 == null))))?(((((map__60588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60588):map__60588);
var runtime = map__60588__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60588__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60589 = p__60587;
var map__60589__$1 = (((((!((map__60589 == null))))?(((((map__60589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60589):map__60589);
var msg = map__60589__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60589__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__60592 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60594 = null;
var count__60595 = (0);
var i__60596 = (0);
while(true){
if((i__60596 < count__60595)){
var map__60602 = chunk__60594.cljs$core$IIndexed$_nth$arity$2(null,i__60596);
var map__60602__$1 = (((((!((map__60602 == null))))?(((((map__60602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60602):map__60602);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60602__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60626 = seq__60592;
var G__60627 = chunk__60594;
var G__60628 = count__60595;
var G__60629 = (i__60596 + (1));
seq__60592 = G__60626;
chunk__60594 = G__60627;
count__60595 = G__60628;
i__60596 = G__60629;
continue;
} else {
var G__60630 = seq__60592;
var G__60631 = chunk__60594;
var G__60632 = count__60595;
var G__60633 = (i__60596 + (1));
seq__60592 = G__60630;
chunk__60594 = G__60631;
count__60595 = G__60632;
i__60596 = G__60633;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60592);
if(temp__5735__auto__){
var seq__60592__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60592__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60592__$1);
var G__60634 = cljs.core.chunk_rest(seq__60592__$1);
var G__60635 = c__4609__auto__;
var G__60636 = cljs.core.count(c__4609__auto__);
var G__60637 = (0);
seq__60592 = G__60634;
chunk__60594 = G__60635;
count__60595 = G__60636;
i__60596 = G__60637;
continue;
} else {
var map__60604 = cljs.core.first(seq__60592__$1);
var map__60604__$1 = (((((!((map__60604 == null))))?(((((map__60604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60604):map__60604);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60604__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60638 = cljs.core.next(seq__60592__$1);
var G__60639 = null;
var G__60640 = (0);
var G__60641 = (0);
seq__60592 = G__60638;
chunk__60594 = G__60639;
count__60595 = G__60640;
i__60596 = G__60641;
continue;
} else {
var G__60642 = cljs.core.next(seq__60592__$1);
var G__60643 = null;
var G__60644 = (0);
var G__60645 = (0);
seq__60592 = G__60642;
chunk__60594 = G__60643;
count__60595 = G__60644;
i__60596 = G__60645;
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
