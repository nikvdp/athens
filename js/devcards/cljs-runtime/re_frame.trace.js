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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__46222){
var map__46223 = p__46222;
var map__46223__$1 = (((((!((map__46223 == null))))?(((((map__46223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46223):map__46223);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46223__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46223__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46223__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46223__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__46225_46252 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__46226_46253 = null;
var count__46227_46254 = (0);
var i__46228_46255 = (0);
while(true){
if((i__46228_46255 < count__46227_46254)){
var vec__46239_46256 = chunk__46226_46253.cljs$core$IIndexed$_nth$arity$2(null,i__46228_46255);
var k_46257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46239_46256,(0),null);
var cb_46258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46239_46256,(1),null);
try{var G__46243_46262 = cljs.core.deref(re_frame.trace.traces);
(cb_46258.cljs$core$IFn$_invoke$arity$1 ? cb_46258.cljs$core$IFn$_invoke$arity$1(G__46243_46262) : cb_46258.call(null,G__46243_46262));
}catch (e46242){var e_46263 = e46242;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_46257,"while storing",cljs.core.deref(re_frame.trace.traces),e_46263], 0));
}

var G__46264 = seq__46225_46252;
var G__46265 = chunk__46226_46253;
var G__46266 = count__46227_46254;
var G__46267 = (i__46228_46255 + (1));
seq__46225_46252 = G__46264;
chunk__46226_46253 = G__46265;
count__46227_46254 = G__46266;
i__46228_46255 = G__46267;
continue;
} else {
var temp__5735__auto___46268 = cljs.core.seq(seq__46225_46252);
if(temp__5735__auto___46268){
var seq__46225_46269__$1 = temp__5735__auto___46268;
if(cljs.core.chunked_seq_QMARK_(seq__46225_46269__$1)){
var c__4609__auto___46270 = cljs.core.chunk_first(seq__46225_46269__$1);
var G__46271 = cljs.core.chunk_rest(seq__46225_46269__$1);
var G__46272 = c__4609__auto___46270;
var G__46273 = cljs.core.count(c__4609__auto___46270);
var G__46274 = (0);
seq__46225_46252 = G__46271;
chunk__46226_46253 = G__46272;
count__46227_46254 = G__46273;
i__46228_46255 = G__46274;
continue;
} else {
var vec__46244_46275 = cljs.core.first(seq__46225_46269__$1);
var k_46276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46244_46275,(0),null);
var cb_46277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46244_46275,(1),null);
try{var G__46248_46278 = cljs.core.deref(re_frame.trace.traces);
(cb_46277.cljs$core$IFn$_invoke$arity$1 ? cb_46277.cljs$core$IFn$_invoke$arity$1(G__46248_46278) : cb_46277.call(null,G__46248_46278));
}catch (e46247){var e_46279 = e46247;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_46276,"while storing",cljs.core.deref(re_frame.trace.traces),e_46279], 0));
}

var G__46281 = cljs.core.next(seq__46225_46269__$1);
var G__46282 = null;
var G__46283 = (0);
var G__46284 = (0);
seq__46225_46252 = G__46281;
chunk__46226_46253 = G__46282;
count__46227_46254 = G__46283;
i__46228_46255 = G__46284;
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
