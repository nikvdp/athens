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
var _STAR_current_trace_STAR__orig_val__52211 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__52212 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__52212);

try{try{var seq__52213 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52214 = null;
var count__52215 = (0);
var i__52216 = (0);
while(true){
if((i__52216 < count__52215)){
var vec__52223 = chunk__52214.cljs$core$IIndexed$_nth$arity$2(null,i__52216);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52223,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52223,(1),null);
var temp__5733__auto___52267 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52267)){
var effect_fn_52268 = temp__5733__auto___52267;
(effect_fn_52268.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52268.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52268.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52269 = seq__52213;
var G__52270 = chunk__52214;
var G__52271 = count__52215;
var G__52272 = (i__52216 + (1));
seq__52213 = G__52269;
chunk__52214 = G__52270;
count__52215 = G__52271;
i__52216 = G__52272;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52213);
if(temp__5735__auto__){
var seq__52213__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52213__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52213__$1);
var G__52273 = cljs.core.chunk_rest(seq__52213__$1);
var G__52274 = c__4609__auto__;
var G__52275 = cljs.core.count(c__4609__auto__);
var G__52276 = (0);
seq__52213 = G__52273;
chunk__52214 = G__52274;
count__52215 = G__52275;
i__52216 = G__52276;
continue;
} else {
var vec__52226 = cljs.core.first(seq__52213__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52226,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52226,(1),null);
var temp__5733__auto___52277 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52277)){
var effect_fn_52278 = temp__5733__auto___52277;
(effect_fn_52278.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52278.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52278.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52279 = cljs.core.next(seq__52213__$1);
var G__52280 = null;
var G__52281 = (0);
var G__52282 = (0);
seq__52213 = G__52279;
chunk__52214 = G__52280;
count__52215 = G__52281;
i__52216 = G__52282;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__51203__auto___52283 = re_frame.interop.now();
var duration__51204__auto___52284 = (end__51203__auto___52283 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__51204__auto___52284,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__51203__auto___52283);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__52211);
}} else {
var seq__52229 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52230 = null;
var count__52231 = (0);
var i__52232 = (0);
while(true){
if((i__52232 < count__52231)){
var vec__52239 = chunk__52230.cljs$core$IIndexed$_nth$arity$2(null,i__52232);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52239,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52239,(1),null);
var temp__5733__auto___52286 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52286)){
var effect_fn_52287 = temp__5733__auto___52286;
(effect_fn_52287.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52287.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52287.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52288 = seq__52229;
var G__52289 = chunk__52230;
var G__52290 = count__52231;
var G__52291 = (i__52232 + (1));
seq__52229 = G__52288;
chunk__52230 = G__52289;
count__52231 = G__52290;
i__52232 = G__52291;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52229);
if(temp__5735__auto__){
var seq__52229__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52229__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52229__$1);
var G__52292 = cljs.core.chunk_rest(seq__52229__$1);
var G__52293 = c__4609__auto__;
var G__52294 = cljs.core.count(c__4609__auto__);
var G__52295 = (0);
seq__52229 = G__52292;
chunk__52230 = G__52293;
count__52231 = G__52294;
i__52232 = G__52295;
continue;
} else {
var vec__52242 = cljs.core.first(seq__52229__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52242,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52242,(1),null);
var temp__5733__auto___52296 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52296)){
var effect_fn_52297 = temp__5733__auto___52296;
(effect_fn_52297.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52297.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52297.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52298 = cljs.core.next(seq__52229__$1);
var G__52299 = null;
var G__52300 = (0);
var G__52301 = (0);
seq__52229 = G__52298;
chunk__52230 = G__52299;
count__52231 = G__52300;
i__52232 = G__52301;
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
var seq__52245 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52246 = null;
var count__52247 = (0);
var i__52248 = (0);
while(true){
if((i__52248 < count__52247)){
var map__52253 = chunk__52246.cljs$core$IIndexed$_nth$arity$2(null,i__52248);
var map__52253__$1 = (((((!((map__52253 == null))))?(((((map__52253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52253):map__52253);
var effect = map__52253__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52253__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52253__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52245,chunk__52246,count__52247,i__52248,map__52253,map__52253__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52245,chunk__52246,count__52247,i__52248,map__52253,map__52253__$1,effect,ms,dispatch))
,ms);
}


var G__52302 = seq__52245;
var G__52303 = chunk__52246;
var G__52304 = count__52247;
var G__52305 = (i__52248 + (1));
seq__52245 = G__52302;
chunk__52246 = G__52303;
count__52247 = G__52304;
i__52248 = G__52305;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52245);
if(temp__5735__auto__){
var seq__52245__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52245__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52245__$1);
var G__52306 = cljs.core.chunk_rest(seq__52245__$1);
var G__52307 = c__4609__auto__;
var G__52308 = cljs.core.count(c__4609__auto__);
var G__52309 = (0);
seq__52245 = G__52306;
chunk__52246 = G__52307;
count__52247 = G__52308;
i__52248 = G__52309;
continue;
} else {
var map__52255 = cljs.core.first(seq__52245__$1);
var map__52255__$1 = (((((!((map__52255 == null))))?(((((map__52255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52255):map__52255);
var effect = map__52255__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52255__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52255__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52245,chunk__52246,count__52247,i__52248,map__52255,map__52255__$1,effect,ms,dispatch,seq__52245__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52245,chunk__52246,count__52247,i__52248,map__52255,map__52255__$1,effect,ms,dispatch,seq__52245__$1,temp__5735__auto__))
,ms);
}


var G__52310 = cljs.core.next(seq__52245__$1);
var G__52311 = null;
var G__52312 = (0);
var G__52313 = (0);
seq__52245 = G__52310;
chunk__52246 = G__52311;
count__52247 = G__52312;
i__52248 = G__52313;
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
var seq__52257 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52258 = null;
var count__52259 = (0);
var i__52260 = (0);
while(true){
if((i__52260 < count__52259)){
var event = chunk__52258.cljs$core$IIndexed$_nth$arity$2(null,i__52260);
re_frame.router.dispatch(event);


var G__52314 = seq__52257;
var G__52315 = chunk__52258;
var G__52316 = count__52259;
var G__52317 = (i__52260 + (1));
seq__52257 = G__52314;
chunk__52258 = G__52315;
count__52259 = G__52316;
i__52260 = G__52317;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52257);
if(temp__5735__auto__){
var seq__52257__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52257__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52257__$1);
var G__52318 = cljs.core.chunk_rest(seq__52257__$1);
var G__52319 = c__4609__auto__;
var G__52320 = cljs.core.count(c__4609__auto__);
var G__52321 = (0);
seq__52257 = G__52318;
chunk__52258 = G__52319;
count__52259 = G__52320;
i__52260 = G__52321;
continue;
} else {
var event = cljs.core.first(seq__52257__$1);
re_frame.router.dispatch(event);


var G__52322 = cljs.core.next(seq__52257__$1);
var G__52323 = null;
var G__52324 = (0);
var G__52325 = (0);
seq__52257 = G__52322;
chunk__52258 = G__52323;
count__52259 = G__52324;
i__52260 = G__52325;
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
var seq__52261 = cljs.core.seq(value);
var chunk__52262 = null;
var count__52263 = (0);
var i__52264 = (0);
while(true){
if((i__52264 < count__52263)){
var event = chunk__52262.cljs$core$IIndexed$_nth$arity$2(null,i__52264);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__52326 = seq__52261;
var G__52327 = chunk__52262;
var G__52328 = count__52263;
var G__52329 = (i__52264 + (1));
seq__52261 = G__52326;
chunk__52262 = G__52327;
count__52263 = G__52328;
i__52264 = G__52329;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52261);
if(temp__5735__auto__){
var seq__52261__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52261__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52261__$1);
var G__52330 = cljs.core.chunk_rest(seq__52261__$1);
var G__52331 = c__4609__auto__;
var G__52332 = cljs.core.count(c__4609__auto__);
var G__52333 = (0);
seq__52261 = G__52330;
chunk__52262 = G__52331;
count__52263 = G__52332;
i__52264 = G__52333;
continue;
} else {
var event = cljs.core.first(seq__52261__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__52334 = cljs.core.next(seq__52261__$1);
var G__52335 = null;
var G__52336 = (0);
var G__52337 = (0);
seq__52261 = G__52334;
chunk__52262 = G__52335;
count__52263 = G__52336;
i__52264 = G__52337;
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
