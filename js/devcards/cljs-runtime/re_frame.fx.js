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
var _STAR_current_trace_STAR__orig_val__47038 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__47039 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__47039);

try{try{var seq__47040 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__47041 = null;
var count__47042 = (0);
var i__47043 = (0);
while(true){
if((i__47043 < count__47042)){
var vec__47050 = chunk__47041.cljs$core$IIndexed$_nth$arity$2(null,i__47043);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47050,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47050,(1),null);
var temp__5733__auto___47098 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47098)){
var effect_fn_47101 = temp__5733__auto___47098;
(effect_fn_47101.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47101.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47101.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47102 = seq__47040;
var G__47103 = chunk__47041;
var G__47104 = count__47042;
var G__47105 = (i__47043 + (1));
seq__47040 = G__47102;
chunk__47041 = G__47103;
count__47042 = G__47104;
i__47043 = G__47105;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47040);
if(temp__5735__auto__){
var seq__47040__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47040__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47040__$1);
var G__47108 = cljs.core.chunk_rest(seq__47040__$1);
var G__47109 = c__4609__auto__;
var G__47110 = cljs.core.count(c__4609__auto__);
var G__47111 = (0);
seq__47040 = G__47108;
chunk__47041 = G__47109;
count__47042 = G__47110;
i__47043 = G__47111;
continue;
} else {
var vec__47054 = cljs.core.first(seq__47040__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47054,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47054,(1),null);
var temp__5733__auto___47112 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47112)){
var effect_fn_47113 = temp__5733__auto___47112;
(effect_fn_47113.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47113.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47113.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47114 = cljs.core.next(seq__47040__$1);
var G__47115 = null;
var G__47116 = (0);
var G__47117 = (0);
seq__47040 = G__47114;
chunk__47041 = G__47115;
count__47042 = G__47116;
i__47043 = G__47117;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__46202__auto___47118 = re_frame.interop.now();
var duration__46203__auto___47119 = (end__46202__auto___47118 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__46203__auto___47119,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__46202__auto___47118);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__47038);
}} else {
var seq__47057 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__47058 = null;
var count__47059 = (0);
var i__47060 = (0);
while(true){
if((i__47060 < count__47059)){
var vec__47067 = chunk__47058.cljs$core$IIndexed$_nth$arity$2(null,i__47060);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47067,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47067,(1),null);
var temp__5733__auto___47123 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47123)){
var effect_fn_47125 = temp__5733__auto___47123;
(effect_fn_47125.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47125.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47125.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47126 = seq__47057;
var G__47127 = chunk__47058;
var G__47128 = count__47059;
var G__47129 = (i__47060 + (1));
seq__47057 = G__47126;
chunk__47058 = G__47127;
count__47059 = G__47128;
i__47060 = G__47129;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47057);
if(temp__5735__auto__){
var seq__47057__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47057__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47057__$1);
var G__47132 = cljs.core.chunk_rest(seq__47057__$1);
var G__47133 = c__4609__auto__;
var G__47134 = cljs.core.count(c__4609__auto__);
var G__47135 = (0);
seq__47057 = G__47132;
chunk__47058 = G__47133;
count__47059 = G__47134;
i__47060 = G__47135;
continue;
} else {
var vec__47070 = cljs.core.first(seq__47057__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47070,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47070,(1),null);
var temp__5733__auto___47136 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47136)){
var effect_fn_47137 = temp__5733__auto___47136;
(effect_fn_47137.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47137.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47137.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47138 = cljs.core.next(seq__47057__$1);
var G__47139 = null;
var G__47140 = (0);
var G__47141 = (0);
seq__47057 = G__47138;
chunk__47058 = G__47139;
count__47059 = G__47140;
i__47060 = G__47141;
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
var seq__47073 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__47074 = null;
var count__47075 = (0);
var i__47076 = (0);
while(true){
if((i__47076 < count__47075)){
var map__47081 = chunk__47074.cljs$core$IIndexed$_nth$arity$2(null,i__47076);
var map__47081__$1 = (((((!((map__47081 == null))))?(((((map__47081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47081):map__47081);
var effect = map__47081__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47081__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47081__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__47073,chunk__47074,count__47075,i__47076,map__47081,map__47081__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__47073,chunk__47074,count__47075,i__47076,map__47081,map__47081__$1,effect,ms,dispatch))
,ms);
}


var G__47144 = seq__47073;
var G__47145 = chunk__47074;
var G__47146 = count__47075;
var G__47147 = (i__47076 + (1));
seq__47073 = G__47144;
chunk__47074 = G__47145;
count__47075 = G__47146;
i__47076 = G__47147;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47073);
if(temp__5735__auto__){
var seq__47073__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47073__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47073__$1);
var G__47148 = cljs.core.chunk_rest(seq__47073__$1);
var G__47149 = c__4609__auto__;
var G__47150 = cljs.core.count(c__4609__auto__);
var G__47151 = (0);
seq__47073 = G__47148;
chunk__47074 = G__47149;
count__47075 = G__47150;
i__47076 = G__47151;
continue;
} else {
var map__47083 = cljs.core.first(seq__47073__$1);
var map__47083__$1 = (((((!((map__47083 == null))))?(((((map__47083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47083):map__47083);
var effect = map__47083__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47083__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47083__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__47073,chunk__47074,count__47075,i__47076,map__47083,map__47083__$1,effect,ms,dispatch,seq__47073__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__47073,chunk__47074,count__47075,i__47076,map__47083,map__47083__$1,effect,ms,dispatch,seq__47073__$1,temp__5735__auto__))
,ms);
}


var G__47153 = cljs.core.next(seq__47073__$1);
var G__47154 = null;
var G__47155 = (0);
var G__47156 = (0);
seq__47073 = G__47153;
chunk__47074 = G__47154;
count__47075 = G__47155;
i__47076 = G__47156;
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
var seq__47085 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__47086 = null;
var count__47087 = (0);
var i__47088 = (0);
while(true){
if((i__47088 < count__47087)){
var event = chunk__47086.cljs$core$IIndexed$_nth$arity$2(null,i__47088);
re_frame.router.dispatch(event);


var G__47157 = seq__47085;
var G__47158 = chunk__47086;
var G__47159 = count__47087;
var G__47160 = (i__47088 + (1));
seq__47085 = G__47157;
chunk__47086 = G__47158;
count__47087 = G__47159;
i__47088 = G__47160;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47085);
if(temp__5735__auto__){
var seq__47085__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47085__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47085__$1);
var G__47161 = cljs.core.chunk_rest(seq__47085__$1);
var G__47162 = c__4609__auto__;
var G__47163 = cljs.core.count(c__4609__auto__);
var G__47164 = (0);
seq__47085 = G__47161;
chunk__47086 = G__47162;
count__47087 = G__47163;
i__47088 = G__47164;
continue;
} else {
var event = cljs.core.first(seq__47085__$1);
re_frame.router.dispatch(event);


var G__47165 = cljs.core.next(seq__47085__$1);
var G__47166 = null;
var G__47167 = (0);
var G__47168 = (0);
seq__47085 = G__47165;
chunk__47086 = G__47166;
count__47087 = G__47167;
i__47088 = G__47168;
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
var seq__47089 = cljs.core.seq(value);
var chunk__47090 = null;
var count__47091 = (0);
var i__47092 = (0);
while(true){
if((i__47092 < count__47091)){
var event = chunk__47090.cljs$core$IIndexed$_nth$arity$2(null,i__47092);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__47169 = seq__47089;
var G__47170 = chunk__47090;
var G__47171 = count__47091;
var G__47172 = (i__47092 + (1));
seq__47089 = G__47169;
chunk__47090 = G__47170;
count__47091 = G__47171;
i__47092 = G__47172;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47089);
if(temp__5735__auto__){
var seq__47089__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47089__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47089__$1);
var G__47173 = cljs.core.chunk_rest(seq__47089__$1);
var G__47174 = c__4609__auto__;
var G__47175 = cljs.core.count(c__4609__auto__);
var G__47176 = (0);
seq__47089 = G__47173;
chunk__47090 = G__47174;
count__47091 = G__47175;
i__47092 = G__47176;
continue;
} else {
var event = cljs.core.first(seq__47089__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__47177 = cljs.core.next(seq__47089__$1);
var G__47178 = null;
var G__47179 = (0);
var G__47180 = (0);
seq__47089 = G__47177;
chunk__47090 = G__47178;
count__47091 = G__47179;
i__47092 = G__47180;
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
