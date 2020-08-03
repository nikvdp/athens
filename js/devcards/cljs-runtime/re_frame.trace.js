goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__51292){
var map__51293 = p__51292;
var map__51293__$1 = (((((!((map__51293 == null))))?(((((map__51293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51293):map__51293);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51293__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51293__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51293__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51293__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4185__auto__ = child_of;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__51297_51349 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__51298_51350 = null;
var count__51299_51351 = (0);
var i__51300_51352 = (0);
while(true){
if((i__51300_51352 < count__51299_51351)){
var vec__51311_51353 = chunk__51298_51350.cljs$core$IIndexed$_nth$arity$2(null,i__51300_51352);
var k_51354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51311_51353,(0),null);
var cb_51355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51311_51353,(1),null);
try{var G__51315_51356 = cljs.core.deref(re_frame.trace.traces);
(cb_51355.cljs$core$IFn$_invoke$arity$1 ? cb_51355.cljs$core$IFn$_invoke$arity$1(G__51315_51356) : cb_51355.call(null,G__51315_51356));
}catch (e51314){var e_51357 = e51314;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_51354,"while storing",cljs.core.deref(re_frame.trace.traces),e_51357], 0));
}

var G__51358 = seq__51297_51349;
var G__51359 = chunk__51298_51350;
var G__51360 = count__51299_51351;
var G__51361 = (i__51300_51352 + (1));
seq__51297_51349 = G__51358;
chunk__51298_51350 = G__51359;
count__51299_51351 = G__51360;
i__51300_51352 = G__51361;
continue;
} else {
var temp__5735__auto___51362 = cljs.core.seq(seq__51297_51349);
if(temp__5735__auto___51362){
var seq__51297_51363__$1 = temp__5735__auto___51362;
if(cljs.core.chunked_seq_QMARK_(seq__51297_51363__$1)){
var c__4609__auto___51364 = cljs.core.chunk_first(seq__51297_51363__$1);
var G__51365 = cljs.core.chunk_rest(seq__51297_51363__$1);
var G__51366 = c__4609__auto___51364;
var G__51367 = cljs.core.count(c__4609__auto___51364);
var G__51368 = (0);
seq__51297_51349 = G__51365;
chunk__51298_51350 = G__51366;
count__51299_51351 = G__51367;
i__51300_51352 = G__51368;
continue;
} else {
var vec__51316_51369 = cljs.core.first(seq__51297_51363__$1);
var k_51370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51316_51369,(0),null);
var cb_51371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51316_51369,(1),null);
try{var G__51320_51372 = cljs.core.deref(re_frame.trace.traces);
(cb_51371.cljs$core$IFn$_invoke$arity$1 ? cb_51371.cljs$core$IFn$_invoke$arity$1(G__51320_51372) : cb_51371.call(null,G__51320_51372));
}catch (e51319){var e_51373 = e51319;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_51370,"while storing",cljs.core.deref(re_frame.trace.traces),e_51373], 0));
}

var G__51376 = cljs.core.next(seq__51297_51363__$1);
var G__51377 = null;
var G__51378 = (0);
var G__51379 = (0);
seq__51297_51349 = G__51376;
chunk__51298_51350 = G__51377;
count__51299_51351 = G__51378;
i__51300_51352 = G__51379;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
