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
var _STAR_current_trace_STAR__orig_val__47018 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__47019 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__47019);

try{try{var seq__47022 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__47023 = null;
var count__47024 = (0);
var i__47025 = (0);
while(true){
if((i__47025 < count__47024)){
var vec__47032 = chunk__47023.cljs$core$IIndexed$_nth$arity$2(null,i__47025);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47032,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47032,(1),null);
var temp__5733__auto___47082 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47082)){
var effect_fn_47083 = temp__5733__auto___47082;
(effect_fn_47083.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47083.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47083.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47084 = seq__47022;
var G__47085 = chunk__47023;
var G__47086 = count__47024;
var G__47087 = (i__47025 + (1));
seq__47022 = G__47084;
chunk__47023 = G__47085;
count__47024 = G__47086;
i__47025 = G__47087;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47022);
if(temp__5735__auto__){
var seq__47022__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47022__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47022__$1);
var G__47088 = cljs.core.chunk_rest(seq__47022__$1);
var G__47089 = c__4609__auto__;
var G__47090 = cljs.core.count(c__4609__auto__);
var G__47091 = (0);
seq__47022 = G__47088;
chunk__47023 = G__47089;
count__47024 = G__47090;
i__47025 = G__47091;
continue;
} else {
var vec__47035 = cljs.core.first(seq__47022__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47035,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47035,(1),null);
var temp__5733__auto___47092 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47092)){
var effect_fn_47093 = temp__5733__auto___47092;
(effect_fn_47093.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47093.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47093.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47094 = cljs.core.next(seq__47022__$1);
var G__47095 = null;
var G__47096 = (0);
var G__47097 = (0);
seq__47022 = G__47094;
chunk__47023 = G__47095;
count__47024 = G__47096;
i__47025 = G__47097;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__46194__auto___47098 = re_frame.interop.now();
var duration__46195__auto___47099 = (end__46194__auto___47098 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__46195__auto___47099,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__46194__auto___47098);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__47018);
}} else {
var seq__47038 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__47039 = null;
var count__47040 = (0);
var i__47041 = (0);
while(true){
if((i__47041 < count__47040)){
var vec__47052 = chunk__47039.cljs$core$IIndexed$_nth$arity$2(null,i__47041);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47052,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47052,(1),null);
var temp__5733__auto___47100 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47100)){
var effect_fn_47101 = temp__5733__auto___47100;
(effect_fn_47101.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47101.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47101.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47102 = seq__47038;
var G__47103 = chunk__47039;
var G__47104 = count__47040;
var G__47105 = (i__47041 + (1));
seq__47038 = G__47102;
chunk__47039 = G__47103;
count__47040 = G__47104;
i__47041 = G__47105;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47038);
if(temp__5735__auto__){
var seq__47038__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47038__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47038__$1);
var G__47106 = cljs.core.chunk_rest(seq__47038__$1);
var G__47107 = c__4609__auto__;
var G__47108 = cljs.core.count(c__4609__auto__);
var G__47109 = (0);
seq__47038 = G__47106;
chunk__47039 = G__47107;
count__47040 = G__47108;
i__47041 = G__47109;
continue;
} else {
var vec__47055 = cljs.core.first(seq__47038__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47055,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47055,(1),null);
var temp__5733__auto___47110 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47110)){
var effect_fn_47111 = temp__5733__auto___47110;
(effect_fn_47111.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47111.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47111.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47112 = cljs.core.next(seq__47038__$1);
var G__47113 = null;
var G__47114 = (0);
var G__47115 = (0);
seq__47038 = G__47112;
chunk__47039 = G__47113;
count__47040 = G__47114;
i__47041 = G__47115;
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
var seq__47059 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__47060 = null;
var count__47061 = (0);
var i__47062 = (0);
while(true){
if((i__47062 < count__47061)){
var map__47070 = chunk__47060.cljs$core$IIndexed$_nth$arity$2(null,i__47062);
var map__47070__$1 = (((((!((map__47070 == null))))?(((((map__47070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47070):map__47070);
var effect = map__47070__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47070__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47070__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__47059,chunk__47060,count__47061,i__47062,map__47070,map__47070__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__47059,chunk__47060,count__47061,i__47062,map__47070,map__47070__$1,effect,ms,dispatch))
,ms);
}


var G__47116 = seq__47059;
var G__47117 = chunk__47060;
var G__47118 = count__47061;
var G__47119 = (i__47062 + (1));
seq__47059 = G__47116;
chunk__47060 = G__47117;
count__47061 = G__47118;
i__47062 = G__47119;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47059);
if(temp__5735__auto__){
var seq__47059__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47059__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47059__$1);
var G__47120 = cljs.core.chunk_rest(seq__47059__$1);
var G__47121 = c__4609__auto__;
var G__47122 = cljs.core.count(c__4609__auto__);
var G__47123 = (0);
seq__47059 = G__47120;
chunk__47060 = G__47121;
count__47061 = G__47122;
i__47062 = G__47123;
continue;
} else {
var map__47072 = cljs.core.first(seq__47059__$1);
var map__47072__$1 = (((((!((map__47072 == null))))?(((((map__47072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47072):map__47072);
var effect = map__47072__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47072__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47072__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__47059,chunk__47060,count__47061,i__47062,map__47072,map__47072__$1,effect,ms,dispatch,seq__47059__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__47059,chunk__47060,count__47061,i__47062,map__47072,map__47072__$1,effect,ms,dispatch,seq__47059__$1,temp__5735__auto__))
,ms);
}


var G__47124 = cljs.core.next(seq__47059__$1);
var G__47125 = null;
var G__47126 = (0);
var G__47127 = (0);
seq__47059 = G__47124;
chunk__47060 = G__47125;
count__47061 = G__47126;
i__47062 = G__47127;
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
var seq__47074 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__47075 = null;
var count__47076 = (0);
var i__47077 = (0);
while(true){
if((i__47077 < count__47076)){
var event = chunk__47075.cljs$core$IIndexed$_nth$arity$2(null,i__47077);
re_frame.router.dispatch(event);


var G__47128 = seq__47074;
var G__47129 = chunk__47075;
var G__47130 = count__47076;
var G__47131 = (i__47077 + (1));
seq__47074 = G__47128;
chunk__47075 = G__47129;
count__47076 = G__47130;
i__47077 = G__47131;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47074);
if(temp__5735__auto__){
var seq__47074__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47074__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47074__$1);
var G__47132 = cljs.core.chunk_rest(seq__47074__$1);
var G__47133 = c__4609__auto__;
var G__47134 = cljs.core.count(c__4609__auto__);
var G__47135 = (0);
seq__47074 = G__47132;
chunk__47075 = G__47133;
count__47076 = G__47134;
i__47077 = G__47135;
continue;
} else {
var event = cljs.core.first(seq__47074__$1);
re_frame.router.dispatch(event);


var G__47136 = cljs.core.next(seq__47074__$1);
var G__47137 = null;
var G__47138 = (0);
var G__47139 = (0);
seq__47074 = G__47136;
chunk__47075 = G__47137;
count__47076 = G__47138;
i__47077 = G__47139;
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
var seq__47078 = cljs.core.seq(value);
var chunk__47079 = null;
var count__47080 = (0);
var i__47081 = (0);
while(true){
if((i__47081 < count__47080)){
var event = chunk__47079.cljs$core$IIndexed$_nth$arity$2(null,i__47081);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__47140 = seq__47078;
var G__47141 = chunk__47079;
var G__47142 = count__47080;
var G__47143 = (i__47081 + (1));
seq__47078 = G__47140;
chunk__47079 = G__47141;
count__47080 = G__47142;
i__47081 = G__47143;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47078);
if(temp__5735__auto__){
var seq__47078__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47078__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47078__$1);
var G__47144 = cljs.core.chunk_rest(seq__47078__$1);
var G__47145 = c__4609__auto__;
var G__47146 = cljs.core.count(c__4609__auto__);
var G__47147 = (0);
seq__47078 = G__47144;
chunk__47079 = G__47145;
count__47080 = G__47146;
i__47081 = G__47147;
continue;
} else {
var event = cljs.core.first(seq__47078__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__47148 = cljs.core.next(seq__47078__$1);
var G__47149 = null;
var G__47150 = (0);
var G__47151 = (0);
seq__47078 = G__47148;
chunk__47079 = G__47149;
count__47080 = G__47150;
i__47081 = G__47151;
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
