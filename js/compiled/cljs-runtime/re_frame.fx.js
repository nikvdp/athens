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
var _STAR_current_trace_STAR__orig_val__33069 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__33070 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__33070);

try{try{var seq__33071 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__33072 = null;
var count__33073 = (0);
var i__33074 = (0);
while(true){
if((i__33074 < count__33073)){
var vec__33081 = chunk__33072.cljs$core$IIndexed$_nth$arity$2(null,i__33074);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33081,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33081,(1),null);
var temp__5733__auto___33123 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___33123)){
var effect_fn_33124 = temp__5733__auto___33123;
(effect_fn_33124.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33124.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33124.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__33125 = seq__33071;
var G__33126 = chunk__33072;
var G__33127 = count__33073;
var G__33128 = (i__33074 + (1));
seq__33071 = G__33125;
chunk__33072 = G__33126;
count__33073 = G__33127;
i__33074 = G__33128;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33071);
if(temp__5735__auto__){
var seq__33071__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33071__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33071__$1);
var G__33129 = cljs.core.chunk_rest(seq__33071__$1);
var G__33130 = c__4609__auto__;
var G__33131 = cljs.core.count(c__4609__auto__);
var G__33132 = (0);
seq__33071 = G__33129;
chunk__33072 = G__33130;
count__33073 = G__33131;
i__33074 = G__33132;
continue;
} else {
var vec__33084 = cljs.core.first(seq__33071__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33084,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33084,(1),null);
var temp__5733__auto___33133 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___33133)){
var effect_fn_33134 = temp__5733__auto___33133;
(effect_fn_33134.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33134.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33134.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__33135 = cljs.core.next(seq__33071__$1);
var G__33136 = null;
var G__33137 = (0);
var G__33138 = (0);
seq__33071 = G__33135;
chunk__33072 = G__33136;
count__33073 = G__33137;
i__33074 = G__33138;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__32788__auto___33139 = re_frame.interop.now();
var duration__32789__auto___33140 = (end__32788__auto___33139 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32789__auto___33140,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__32788__auto___33139);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__33069);
}} else {
var seq__33087 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__33088 = null;
var count__33089 = (0);
var i__33090 = (0);
while(true){
if((i__33090 < count__33089)){
var vec__33097 = chunk__33088.cljs$core$IIndexed$_nth$arity$2(null,i__33090);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33097,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33097,(1),null);
var temp__5733__auto___33141 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___33141)){
var effect_fn_33142 = temp__5733__auto___33141;
(effect_fn_33142.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33142.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33142.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__33143 = seq__33087;
var G__33144 = chunk__33088;
var G__33145 = count__33089;
var G__33146 = (i__33090 + (1));
seq__33087 = G__33143;
chunk__33088 = G__33144;
count__33089 = G__33145;
i__33090 = G__33146;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33087);
if(temp__5735__auto__){
var seq__33087__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33087__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33087__$1);
var G__33148 = cljs.core.chunk_rest(seq__33087__$1);
var G__33149 = c__4609__auto__;
var G__33150 = cljs.core.count(c__4609__auto__);
var G__33151 = (0);
seq__33087 = G__33148;
chunk__33088 = G__33149;
count__33089 = G__33150;
i__33090 = G__33151;
continue;
} else {
var vec__33100 = cljs.core.first(seq__33087__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33100,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33100,(1),null);
var temp__5733__auto___33153 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___33153)){
var effect_fn_33154 = temp__5733__auto___33153;
(effect_fn_33154.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33154.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33154.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__33155 = cljs.core.next(seq__33087__$1);
var G__33156 = null;
var G__33157 = (0);
var G__33158 = (0);
seq__33087 = G__33155;
chunk__33088 = G__33156;
count__33089 = G__33157;
i__33090 = G__33158;
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
var seq__33103 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__33104 = null;
var count__33105 = (0);
var i__33106 = (0);
while(true){
if((i__33106 < count__33105)){
var map__33111 = chunk__33104.cljs$core$IIndexed$_nth$arity$2(null,i__33106);
var map__33111__$1 = (((((!((map__33111 == null))))?(((((map__33111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33111):map__33111);
var effect = map__33111__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33111__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33111__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__33103,chunk__33104,count__33105,i__33106,map__33111,map__33111__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__33103,chunk__33104,count__33105,i__33106,map__33111,map__33111__$1,effect,ms,dispatch))
,ms);
}


var G__33160 = seq__33103;
var G__33161 = chunk__33104;
var G__33162 = count__33105;
var G__33163 = (i__33106 + (1));
seq__33103 = G__33160;
chunk__33104 = G__33161;
count__33105 = G__33162;
i__33106 = G__33163;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33103);
if(temp__5735__auto__){
var seq__33103__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33103__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33103__$1);
var G__33164 = cljs.core.chunk_rest(seq__33103__$1);
var G__33165 = c__4609__auto__;
var G__33166 = cljs.core.count(c__4609__auto__);
var G__33167 = (0);
seq__33103 = G__33164;
chunk__33104 = G__33165;
count__33105 = G__33166;
i__33106 = G__33167;
continue;
} else {
var map__33113 = cljs.core.first(seq__33103__$1);
var map__33113__$1 = (((((!((map__33113 == null))))?(((((map__33113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33113):map__33113);
var effect = map__33113__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33113__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33113__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__33103,chunk__33104,count__33105,i__33106,map__33113,map__33113__$1,effect,ms,dispatch,seq__33103__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__33103,chunk__33104,count__33105,i__33106,map__33113,map__33113__$1,effect,ms,dispatch,seq__33103__$1,temp__5735__auto__))
,ms);
}


var G__33168 = cljs.core.next(seq__33103__$1);
var G__33169 = null;
var G__33170 = (0);
var G__33171 = (0);
seq__33103 = G__33168;
chunk__33104 = G__33169;
count__33105 = G__33170;
i__33106 = G__33171;
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
var seq__33115 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__33116 = null;
var count__33117 = (0);
var i__33118 = (0);
while(true){
if((i__33118 < count__33117)){
var event = chunk__33116.cljs$core$IIndexed$_nth$arity$2(null,i__33118);
re_frame.router.dispatch(event);


var G__33172 = seq__33115;
var G__33173 = chunk__33116;
var G__33174 = count__33117;
var G__33175 = (i__33118 + (1));
seq__33115 = G__33172;
chunk__33116 = G__33173;
count__33117 = G__33174;
i__33118 = G__33175;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33115);
if(temp__5735__auto__){
var seq__33115__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33115__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33115__$1);
var G__33176 = cljs.core.chunk_rest(seq__33115__$1);
var G__33177 = c__4609__auto__;
var G__33178 = cljs.core.count(c__4609__auto__);
var G__33179 = (0);
seq__33115 = G__33176;
chunk__33116 = G__33177;
count__33117 = G__33178;
i__33118 = G__33179;
continue;
} else {
var event = cljs.core.first(seq__33115__$1);
re_frame.router.dispatch(event);


var G__33180 = cljs.core.next(seq__33115__$1);
var G__33181 = null;
var G__33182 = (0);
var G__33183 = (0);
seq__33115 = G__33180;
chunk__33116 = G__33181;
count__33117 = G__33182;
i__33118 = G__33183;
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
var seq__33119 = cljs.core.seq(value);
var chunk__33120 = null;
var count__33121 = (0);
var i__33122 = (0);
while(true){
if((i__33122 < count__33121)){
var event = chunk__33120.cljs$core$IIndexed$_nth$arity$2(null,i__33122);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__33184 = seq__33119;
var G__33185 = chunk__33120;
var G__33186 = count__33121;
var G__33187 = (i__33122 + (1));
seq__33119 = G__33184;
chunk__33120 = G__33185;
count__33121 = G__33186;
i__33122 = G__33187;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33119);
if(temp__5735__auto__){
var seq__33119__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33119__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33119__$1);
var G__33188 = cljs.core.chunk_rest(seq__33119__$1);
var G__33189 = c__4609__auto__;
var G__33190 = cljs.core.count(c__4609__auto__);
var G__33191 = (0);
seq__33119 = G__33188;
chunk__33120 = G__33189;
count__33121 = G__33190;
i__33122 = G__33191;
continue;
} else {
var event = cljs.core.first(seq__33119__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__33192 = cljs.core.next(seq__33119__$1);
var G__33193 = null;
var G__33194 = (0);
var G__33195 = (0);
seq__33119 = G__33192;
chunk__33120 = G__33193;
count__33121 = G__33194;
i__33122 = G__33195;
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
