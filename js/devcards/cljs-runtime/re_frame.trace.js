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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__50177){
var map__50178 = p__50177;
var map__50178__$1 = (((((!((map__50178 == null))))?(((((map__50178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50178):map__50178);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50178__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50178__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50178__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50178__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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
var seq__50184_50245 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__50185_50246 = null;
var count__50186_50247 = (0);
var i__50187_50248 = (0);
while(true){
if((i__50187_50248 < count__50186_50247)){
var vec__50207_50249 = chunk__50185_50246.cljs$core$IIndexed$_nth$arity$2(null,i__50187_50248);
var k_50250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50207_50249,(0),null);
var cb_50251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50207_50249,(1),null);
try{var G__50211_50252 = cljs.core.deref(re_frame.trace.traces);
(cb_50251.cljs$core$IFn$_invoke$arity$1 ? cb_50251.cljs$core$IFn$_invoke$arity$1(G__50211_50252) : cb_50251.call(null,G__50211_50252));
}catch (e50210){var e_50253 = e50210;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_50250,"while storing",cljs.core.deref(re_frame.trace.traces),e_50253], 0));
}

var G__50254 = seq__50184_50245;
var G__50255 = chunk__50185_50246;
var G__50256 = count__50186_50247;
var G__50257 = (i__50187_50248 + (1));
seq__50184_50245 = G__50254;
chunk__50185_50246 = G__50255;
count__50186_50247 = G__50256;
i__50187_50248 = G__50257;
continue;
} else {
var temp__5735__auto___50258 = cljs.core.seq(seq__50184_50245);
if(temp__5735__auto___50258){
var seq__50184_50259__$1 = temp__5735__auto___50258;
if(cljs.core.chunked_seq_QMARK_(seq__50184_50259__$1)){
var c__4556__auto___50260 = cljs.core.chunk_first(seq__50184_50259__$1);
var G__50261 = cljs.core.chunk_rest(seq__50184_50259__$1);
var G__50262 = c__4556__auto___50260;
var G__50263 = cljs.core.count(c__4556__auto___50260);
var G__50264 = (0);
seq__50184_50245 = G__50261;
chunk__50185_50246 = G__50262;
count__50186_50247 = G__50263;
i__50187_50248 = G__50264;
continue;
} else {
var vec__50219_50265 = cljs.core.first(seq__50184_50259__$1);
var k_50266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50219_50265,(0),null);
var cb_50267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50219_50265,(1),null);
try{var G__50223_50268 = cljs.core.deref(re_frame.trace.traces);
(cb_50267.cljs$core$IFn$_invoke$arity$1 ? cb_50267.cljs$core$IFn$_invoke$arity$1(G__50223_50268) : cb_50267.call(null,G__50223_50268));
}catch (e50222){var e_50269 = e50222;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_50266,"while storing",cljs.core.deref(re_frame.trace.traces),e_50269], 0));
}

var G__50270 = cljs.core.next(seq__50184_50259__$1);
var G__50271 = null;
var G__50272 = (0);
var G__50273 = (0);
seq__50184_50245 = G__50270;
chunk__50185_50246 = G__50271;
count__50186_50247 = G__50272;
i__50187_50248 = G__50273;
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
