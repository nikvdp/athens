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
var _STAR_current_trace_STAR__orig_val__52225 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__52226 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__52226);

try{try{var seq__52227 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52228 = null;
var count__52229 = (0);
var i__52230 = (0);
while(true){
if((i__52230 < count__52229)){
var vec__52237 = chunk__52228.cljs$core$IIndexed$_nth$arity$2(null,i__52230);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52237,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52237,(1),null);
var temp__5733__auto___52282 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52282)){
var effect_fn_52283 = temp__5733__auto___52282;
(effect_fn_52283.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52283.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52283.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52284 = seq__52227;
var G__52285 = chunk__52228;
var G__52286 = count__52229;
var G__52287 = (i__52230 + (1));
seq__52227 = G__52284;
chunk__52228 = G__52285;
count__52229 = G__52286;
i__52230 = G__52287;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52227);
if(temp__5735__auto__){
var seq__52227__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52227__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52227__$1);
var G__52288 = cljs.core.chunk_rest(seq__52227__$1);
var G__52289 = c__4609__auto__;
var G__52290 = cljs.core.count(c__4609__auto__);
var G__52291 = (0);
seq__52227 = G__52288;
chunk__52228 = G__52289;
count__52229 = G__52290;
i__52230 = G__52291;
continue;
} else {
var vec__52242 = cljs.core.first(seq__52227__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52242,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52242,(1),null);
var temp__5733__auto___52292 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52292)){
var effect_fn_52293 = temp__5733__auto___52292;
(effect_fn_52293.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52293.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52293.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52294 = cljs.core.next(seq__52227__$1);
var G__52295 = null;
var G__52296 = (0);
var G__52297 = (0);
seq__52227 = G__52294;
chunk__52228 = G__52295;
count__52229 = G__52296;
i__52230 = G__52297;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__51243__auto___52298 = re_frame.interop.now();
var duration__51244__auto___52299 = (end__51243__auto___52298 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__51244__auto___52299,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__51243__auto___52298);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__52225);
}} else {
var seq__52245 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52246 = null;
var count__52247 = (0);
var i__52248 = (0);
while(true){
if((i__52248 < count__52247)){
var vec__52256 = chunk__52246.cljs$core$IIndexed$_nth$arity$2(null,i__52248);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52256,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52256,(1),null);
var temp__5733__auto___52300 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52300)){
var effect_fn_52304 = temp__5733__auto___52300;
(effect_fn_52304.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52304.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52304.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52305 = seq__52245;
var G__52306 = chunk__52246;
var G__52307 = count__52247;
var G__52308 = (i__52248 + (1));
seq__52245 = G__52305;
chunk__52246 = G__52306;
count__52247 = G__52307;
i__52248 = G__52308;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52245);
if(temp__5735__auto__){
var seq__52245__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52245__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52245__$1);
var G__52309 = cljs.core.chunk_rest(seq__52245__$1);
var G__52310 = c__4609__auto__;
var G__52311 = cljs.core.count(c__4609__auto__);
var G__52312 = (0);
seq__52245 = G__52309;
chunk__52246 = G__52310;
count__52247 = G__52311;
i__52248 = G__52312;
continue;
} else {
var vec__52259 = cljs.core.first(seq__52245__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52259,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52259,(1),null);
var temp__5733__auto___52313 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52313)){
var effect_fn_52314 = temp__5733__auto___52313;
(effect_fn_52314.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52314.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52314.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52315 = cljs.core.next(seq__52245__$1);
var G__52316 = null;
var G__52317 = (0);
var G__52318 = (0);
seq__52245 = G__52315;
chunk__52246 = G__52316;
count__52247 = G__52317;
i__52248 = G__52318;
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
var seq__52262 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52263 = null;
var count__52264 = (0);
var i__52265 = (0);
while(true){
if((i__52265 < count__52264)){
var map__52270 = chunk__52263.cljs$core$IIndexed$_nth$arity$2(null,i__52265);
var map__52270__$1 = (((((!((map__52270 == null))))?(((((map__52270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52270):map__52270);
var effect = map__52270__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52270__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52270__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52262,chunk__52263,count__52264,i__52265,map__52270,map__52270__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52262,chunk__52263,count__52264,i__52265,map__52270,map__52270__$1,effect,ms,dispatch))
,ms);
}


var G__52323 = seq__52262;
var G__52324 = chunk__52263;
var G__52325 = count__52264;
var G__52326 = (i__52265 + (1));
seq__52262 = G__52323;
chunk__52263 = G__52324;
count__52264 = G__52325;
i__52265 = G__52326;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52262);
if(temp__5735__auto__){
var seq__52262__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52262__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52262__$1);
var G__52329 = cljs.core.chunk_rest(seq__52262__$1);
var G__52330 = c__4609__auto__;
var G__52331 = cljs.core.count(c__4609__auto__);
var G__52332 = (0);
seq__52262 = G__52329;
chunk__52263 = G__52330;
count__52264 = G__52331;
i__52265 = G__52332;
continue;
} else {
var map__52272 = cljs.core.first(seq__52262__$1);
var map__52272__$1 = (((((!((map__52272 == null))))?(((((map__52272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52272):map__52272);
var effect = map__52272__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52272__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52272__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52262,chunk__52263,count__52264,i__52265,map__52272,map__52272__$1,effect,ms,dispatch,seq__52262__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52262,chunk__52263,count__52264,i__52265,map__52272,map__52272__$1,effect,ms,dispatch,seq__52262__$1,temp__5735__auto__))
,ms);
}


var G__52333 = cljs.core.next(seq__52262__$1);
var G__52334 = null;
var G__52335 = (0);
var G__52336 = (0);
seq__52262 = G__52333;
chunk__52263 = G__52334;
count__52264 = G__52335;
i__52265 = G__52336;
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
var seq__52274 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52275 = null;
var count__52276 = (0);
var i__52277 = (0);
while(true){
if((i__52277 < count__52276)){
var event = chunk__52275.cljs$core$IIndexed$_nth$arity$2(null,i__52277);
re_frame.router.dispatch(event);


var G__52340 = seq__52274;
var G__52341 = chunk__52275;
var G__52342 = count__52276;
var G__52343 = (i__52277 + (1));
seq__52274 = G__52340;
chunk__52275 = G__52341;
count__52276 = G__52342;
i__52277 = G__52343;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52274);
if(temp__5735__auto__){
var seq__52274__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52274__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52274__$1);
var G__52345 = cljs.core.chunk_rest(seq__52274__$1);
var G__52346 = c__4609__auto__;
var G__52347 = cljs.core.count(c__4609__auto__);
var G__52348 = (0);
seq__52274 = G__52345;
chunk__52275 = G__52346;
count__52276 = G__52347;
i__52277 = G__52348;
continue;
} else {
var event = cljs.core.first(seq__52274__$1);
re_frame.router.dispatch(event);


var G__52351 = cljs.core.next(seq__52274__$1);
var G__52352 = null;
var G__52353 = (0);
var G__52354 = (0);
seq__52274 = G__52351;
chunk__52275 = G__52352;
count__52276 = G__52353;
i__52277 = G__52354;
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
var seq__52278 = cljs.core.seq(value);
var chunk__52279 = null;
var count__52280 = (0);
var i__52281 = (0);
while(true){
if((i__52281 < count__52280)){
var event = chunk__52279.cljs$core$IIndexed$_nth$arity$2(null,i__52281);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__52355 = seq__52278;
var G__52356 = chunk__52279;
var G__52357 = count__52280;
var G__52358 = (i__52281 + (1));
seq__52278 = G__52355;
chunk__52279 = G__52356;
count__52280 = G__52357;
i__52281 = G__52358;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52278);
if(temp__5735__auto__){
var seq__52278__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52278__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52278__$1);
var G__52359 = cljs.core.chunk_rest(seq__52278__$1);
var G__52360 = c__4609__auto__;
var G__52361 = cljs.core.count(c__4609__auto__);
var G__52362 = (0);
seq__52278 = G__52359;
chunk__52279 = G__52360;
count__52280 = G__52361;
i__52281 = G__52362;
continue;
} else {
var event = cljs.core.first(seq__52278__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__52365 = cljs.core.next(seq__52278__$1);
var G__52366 = null;
var G__52367 = (0);
var G__52368 = (0);
seq__52278 = G__52365;
chunk__52279 = G__52366;
count__52280 = G__52367;
i__52281 = G__52368;
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
