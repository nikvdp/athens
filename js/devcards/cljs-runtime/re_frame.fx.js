goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__52212 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__52213 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__52213);

try{try{var seq__52215 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52216 = null;
var count__52217 = (0);
var i__52218 = (0);
while(true){
if((i__52218 < count__52217)){
var vec__52225 = chunk__52216.cljs$core$IIndexed$_nth$arity$2(null,i__52218);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52225,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52225,(1),null);
var temp__5733__auto___52268 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52268)){
var effect_fn_52269 = temp__5733__auto___52268;
(effect_fn_52269.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52269.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52269.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52270 = seq__52215;
var G__52271 = chunk__52216;
var G__52272 = count__52217;
var G__52273 = (i__52218 + (1));
seq__52215 = G__52270;
chunk__52216 = G__52271;
count__52217 = G__52272;
i__52218 = G__52273;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52215);
if(temp__5735__auto__){
var seq__52215__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52215__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52215__$1);
var G__52274 = cljs.core.chunk_rest(seq__52215__$1);
var G__52275 = c__4609__auto__;
var G__52276 = cljs.core.count(c__4609__auto__);
var G__52277 = (0);
seq__52215 = G__52274;
chunk__52216 = G__52275;
count__52217 = G__52276;
i__52218 = G__52277;
continue;
} else {
var vec__52229 = cljs.core.first(seq__52215__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52229,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52229,(1),null);
var temp__5733__auto___52278 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52278)){
var effect_fn_52282 = temp__5733__auto___52278;
(effect_fn_52282.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52282.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52282.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52283 = cljs.core.next(seq__52215__$1);
var G__52284 = null;
var G__52285 = (0);
var G__52286 = (0);
seq__52215 = G__52283;
chunk__52216 = G__52284;
count__52217 = G__52285;
i__52218 = G__52286;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__51297__auto___52287 = re_frame.interop.now();
var duration__51298__auto___52288 = (end__51297__auto___52287 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__51298__auto___52288,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__51297__auto___52287);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__52212);
}} else {
var seq__52232 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52233 = null;
var count__52234 = (0);
var i__52235 = (0);
while(true){
if((i__52235 < count__52234)){
var vec__52242 = chunk__52233.cljs$core$IIndexed$_nth$arity$2(null,i__52235);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52242,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52242,(1),null);
var temp__5733__auto___52289 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52289)){
var effect_fn_52290 = temp__5733__auto___52289;
(effect_fn_52290.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52290.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52290.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52291 = seq__52232;
var G__52292 = chunk__52233;
var G__52293 = count__52234;
var G__52294 = (i__52235 + (1));
seq__52232 = G__52291;
chunk__52233 = G__52292;
count__52234 = G__52293;
i__52235 = G__52294;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52232);
if(temp__5735__auto__){
var seq__52232__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52232__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52232__$1);
var G__52295 = cljs.core.chunk_rest(seq__52232__$1);
var G__52296 = c__4609__auto__;
var G__52297 = cljs.core.count(c__4609__auto__);
var G__52298 = (0);
seq__52232 = G__52295;
chunk__52233 = G__52296;
count__52234 = G__52297;
i__52235 = G__52298;
continue;
} else {
var vec__52245 = cljs.core.first(seq__52232__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52245,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52245,(1),null);
var temp__5733__auto___52301 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52301)){
var effect_fn_52302 = temp__5733__auto___52301;
(effect_fn_52302.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52302.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52302.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52303 = cljs.core.next(seq__52232__$1);
var G__52304 = null;
var G__52305 = (0);
var G__52306 = (0);
seq__52232 = G__52303;
chunk__52233 = G__52304;
count__52234 = G__52305;
i__52235 = G__52306;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__52248 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52249 = null;
var count__52250 = (0);
var i__52251 = (0);
while(true){
if((i__52251 < count__52250)){
var map__52256 = chunk__52249.cljs$core$IIndexed$_nth$arity$2(null,i__52251);
var map__52256__$1 = (((((!((map__52256 == null))))?(((((map__52256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52256):map__52256);
var effect = map__52256__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52256__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52256__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52248,chunk__52249,count__52250,i__52251,map__52256,map__52256__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52248,chunk__52249,count__52250,i__52251,map__52256,map__52256__$1,effect,ms,dispatch))
,ms);
}


var G__52311 = seq__52248;
var G__52312 = chunk__52249;
var G__52313 = count__52250;
var G__52314 = (i__52251 + (1));
seq__52248 = G__52311;
chunk__52249 = G__52312;
count__52250 = G__52313;
i__52251 = G__52314;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52248);
if(temp__5735__auto__){
var seq__52248__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52248__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52248__$1);
var G__52315 = cljs.core.chunk_rest(seq__52248__$1);
var G__52316 = c__4609__auto__;
var G__52317 = cljs.core.count(c__4609__auto__);
var G__52318 = (0);
seq__52248 = G__52315;
chunk__52249 = G__52316;
count__52250 = G__52317;
i__52251 = G__52318;
continue;
} else {
var map__52258 = cljs.core.first(seq__52248__$1);
var map__52258__$1 = (((((!((map__52258 == null))))?(((((map__52258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52258):map__52258);
var effect = map__52258__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52258__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52258__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52248,chunk__52249,count__52250,i__52251,map__52258,map__52258__$1,effect,ms,dispatch,seq__52248__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52248,chunk__52249,count__52250,i__52251,map__52258,map__52258__$1,effect,ms,dispatch,seq__52248__$1,temp__5735__auto__))
,ms);
}


var G__52321 = cljs.core.next(seq__52248__$1);
var G__52322 = null;
var G__52323 = (0);
var G__52324 = (0);
seq__52248 = G__52321;
chunk__52249 = G__52322;
count__52250 = G__52323;
i__52251 = G__52324;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__52260 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52261 = null;
var count__52262 = (0);
var i__52263 = (0);
while(true){
if((i__52263 < count__52262)){
var event = chunk__52261.cljs$core$IIndexed$_nth$arity$2(null,i__52263);
re_frame.router.dispatch(event);


var G__52329 = seq__52260;
var G__52330 = chunk__52261;
var G__52331 = count__52262;
var G__52332 = (i__52263 + (1));
seq__52260 = G__52329;
chunk__52261 = G__52330;
count__52262 = G__52331;
i__52263 = G__52332;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52260);
if(temp__5735__auto__){
var seq__52260__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52260__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52260__$1);
var G__52333 = cljs.core.chunk_rest(seq__52260__$1);
var G__52334 = c__4609__auto__;
var G__52335 = cljs.core.count(c__4609__auto__);
var G__52336 = (0);
seq__52260 = G__52333;
chunk__52261 = G__52334;
count__52262 = G__52335;
i__52263 = G__52336;
continue;
} else {
var event = cljs.core.first(seq__52260__$1);
re_frame.router.dispatch(event);


var G__52337 = cljs.core.next(seq__52260__$1);
var G__52338 = null;
var G__52339 = (0);
var G__52340 = (0);
seq__52260 = G__52337;
chunk__52261 = G__52338;
count__52262 = G__52339;
i__52263 = G__52340;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__52264 = cljs.core.seq(value);
var chunk__52265 = null;
var count__52266 = (0);
var i__52267 = (0);
while(true){
if((i__52267 < count__52266)){
var event = chunk__52265.cljs$core$IIndexed$_nth$arity$2(null,i__52267);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__52341 = seq__52264;
var G__52342 = chunk__52265;
var G__52343 = count__52266;
var G__52344 = (i__52267 + (1));
seq__52264 = G__52341;
chunk__52265 = G__52342;
count__52266 = G__52343;
i__52267 = G__52344;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52264);
if(temp__5735__auto__){
var seq__52264__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52264__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52264__$1);
var G__52347 = cljs.core.chunk_rest(seq__52264__$1);
var G__52348 = c__4609__auto__;
var G__52349 = cljs.core.count(c__4609__auto__);
var G__52350 = (0);
seq__52264 = G__52347;
chunk__52265 = G__52348;
count__52266 = G__52349;
i__52267 = G__52350;
continue;
} else {
var event = cljs.core.first(seq__52264__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__52351 = cljs.core.next(seq__52264__$1);
var G__52352 = null;
var G__52353 = (0);
var G__52354 = (0);
seq__52264 = G__52351;
chunk__52265 = G__52352;
count__52266 = G__52353;
i__52267 = G__52354;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
