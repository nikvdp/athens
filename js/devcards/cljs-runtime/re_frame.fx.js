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
var _STAR_current_trace_STAR__orig_val__46788 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__46789 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__46789);

try{try{var seq__46790 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__46791 = null;
var count__46792 = (0);
var i__46793 = (0);
while(true){
if((i__46793 < count__46792)){
var vec__46800 = chunk__46791.cljs$core$IIndexed$_nth$arity$2(null,i__46793);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46800,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46800,(1),null);
var temp__5733__auto___46845 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46845)){
var effect_fn_46846 = temp__5733__auto___46845;
(effect_fn_46846.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46846.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46846.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46847 = seq__46790;
var G__46848 = chunk__46791;
var G__46849 = count__46792;
var G__46850 = (i__46793 + (1));
seq__46790 = G__46847;
chunk__46791 = G__46848;
count__46792 = G__46849;
i__46793 = G__46850;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46790);
if(temp__5735__auto__){
var seq__46790__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46790__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46790__$1);
var G__46851 = cljs.core.chunk_rest(seq__46790__$1);
var G__46852 = c__4609__auto__;
var G__46853 = cljs.core.count(c__4609__auto__);
var G__46854 = (0);
seq__46790 = G__46851;
chunk__46791 = G__46852;
count__46792 = G__46853;
i__46793 = G__46854;
continue;
} else {
var vec__46805 = cljs.core.first(seq__46790__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46805,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46805,(1),null);
var temp__5733__auto___46855 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46855)){
var effect_fn_46856 = temp__5733__auto___46855;
(effect_fn_46856.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46856.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46856.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46857 = cljs.core.next(seq__46790__$1);
var G__46858 = null;
var G__46859 = (0);
var G__46860 = (0);
seq__46790 = G__46857;
chunk__46791 = G__46858;
count__46792 = G__46859;
i__46793 = G__46860;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__45954__auto___46861 = re_frame.interop.now();
var duration__45955__auto___46862 = (end__45954__auto___46861 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__45955__auto___46862,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__45954__auto___46861);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__46788);
}} else {
var seq__46808 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__46809 = null;
var count__46810 = (0);
var i__46811 = (0);
while(true){
if((i__46811 < count__46810)){
var vec__46818 = chunk__46809.cljs$core$IIndexed$_nth$arity$2(null,i__46811);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46818,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46818,(1),null);
var temp__5733__auto___46863 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46863)){
var effect_fn_46864 = temp__5733__auto___46863;
(effect_fn_46864.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46864.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46864.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46865 = seq__46808;
var G__46866 = chunk__46809;
var G__46867 = count__46810;
var G__46868 = (i__46811 + (1));
seq__46808 = G__46865;
chunk__46809 = G__46866;
count__46810 = G__46867;
i__46811 = G__46868;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46808);
if(temp__5735__auto__){
var seq__46808__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46808__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46808__$1);
var G__46869 = cljs.core.chunk_rest(seq__46808__$1);
var G__46870 = c__4609__auto__;
var G__46871 = cljs.core.count(c__4609__auto__);
var G__46872 = (0);
seq__46808 = G__46869;
chunk__46809 = G__46870;
count__46810 = G__46871;
i__46811 = G__46872;
continue;
} else {
var vec__46822 = cljs.core.first(seq__46808__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46822,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46822,(1),null);
var temp__5733__auto___46873 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46873)){
var effect_fn_46874 = temp__5733__auto___46873;
(effect_fn_46874.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46874.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46874.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46875 = cljs.core.next(seq__46808__$1);
var G__46876 = null;
var G__46877 = (0);
var G__46878 = (0);
seq__46808 = G__46875;
chunk__46809 = G__46876;
count__46810 = G__46877;
i__46811 = G__46878;
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
var seq__46825 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__46826 = null;
var count__46827 = (0);
var i__46828 = (0);
while(true){
if((i__46828 < count__46827)){
var map__46833 = chunk__46826.cljs$core$IIndexed$_nth$arity$2(null,i__46828);
var map__46833__$1 = (((((!((map__46833 == null))))?(((((map__46833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46833):map__46833);
var effect = map__46833__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46833__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46833__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__46825,chunk__46826,count__46827,i__46828,map__46833,map__46833__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__46825,chunk__46826,count__46827,i__46828,map__46833,map__46833__$1,effect,ms,dispatch))
,ms);
}


var G__46882 = seq__46825;
var G__46883 = chunk__46826;
var G__46884 = count__46827;
var G__46885 = (i__46828 + (1));
seq__46825 = G__46882;
chunk__46826 = G__46883;
count__46827 = G__46884;
i__46828 = G__46885;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46825);
if(temp__5735__auto__){
var seq__46825__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46825__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46825__$1);
var G__46886 = cljs.core.chunk_rest(seq__46825__$1);
var G__46887 = c__4609__auto__;
var G__46888 = cljs.core.count(c__4609__auto__);
var G__46889 = (0);
seq__46825 = G__46886;
chunk__46826 = G__46887;
count__46827 = G__46888;
i__46828 = G__46889;
continue;
} else {
var map__46835 = cljs.core.first(seq__46825__$1);
var map__46835__$1 = (((((!((map__46835 == null))))?(((((map__46835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46835):map__46835);
var effect = map__46835__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46835__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46835__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__46825,chunk__46826,count__46827,i__46828,map__46835,map__46835__$1,effect,ms,dispatch,seq__46825__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__46825,chunk__46826,count__46827,i__46828,map__46835,map__46835__$1,effect,ms,dispatch,seq__46825__$1,temp__5735__auto__))
,ms);
}


var G__46892 = cljs.core.next(seq__46825__$1);
var G__46893 = null;
var G__46894 = (0);
var G__46895 = (0);
seq__46825 = G__46892;
chunk__46826 = G__46893;
count__46827 = G__46894;
i__46828 = G__46895;
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
var seq__46837 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__46838 = null;
var count__46839 = (0);
var i__46840 = (0);
while(true){
if((i__46840 < count__46839)){
var event = chunk__46838.cljs$core$IIndexed$_nth$arity$2(null,i__46840);
re_frame.router.dispatch(event);


var G__46900 = seq__46837;
var G__46901 = chunk__46838;
var G__46902 = count__46839;
var G__46903 = (i__46840 + (1));
seq__46837 = G__46900;
chunk__46838 = G__46901;
count__46839 = G__46902;
i__46840 = G__46903;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46837);
if(temp__5735__auto__){
var seq__46837__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46837__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46837__$1);
var G__46904 = cljs.core.chunk_rest(seq__46837__$1);
var G__46905 = c__4609__auto__;
var G__46906 = cljs.core.count(c__4609__auto__);
var G__46907 = (0);
seq__46837 = G__46904;
chunk__46838 = G__46905;
count__46839 = G__46906;
i__46840 = G__46907;
continue;
} else {
var event = cljs.core.first(seq__46837__$1);
re_frame.router.dispatch(event);


var G__46908 = cljs.core.next(seq__46837__$1);
var G__46909 = null;
var G__46910 = (0);
var G__46911 = (0);
seq__46837 = G__46908;
chunk__46838 = G__46909;
count__46839 = G__46910;
i__46840 = G__46911;
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
var seq__46841 = cljs.core.seq(value);
var chunk__46842 = null;
var count__46843 = (0);
var i__46844 = (0);
while(true){
if((i__46844 < count__46843)){
var event = chunk__46842.cljs$core$IIndexed$_nth$arity$2(null,i__46844);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__46912 = seq__46841;
var G__46913 = chunk__46842;
var G__46914 = count__46843;
var G__46915 = (i__46844 + (1));
seq__46841 = G__46912;
chunk__46842 = G__46913;
count__46843 = G__46914;
i__46844 = G__46915;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46841);
if(temp__5735__auto__){
var seq__46841__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46841__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46841__$1);
var G__46918 = cljs.core.chunk_rest(seq__46841__$1);
var G__46919 = c__4609__auto__;
var G__46920 = cljs.core.count(c__4609__auto__);
var G__46921 = (0);
seq__46841 = G__46918;
chunk__46842 = G__46919;
count__46843 = G__46920;
i__46844 = G__46921;
continue;
} else {
var event = cljs.core.first(seq__46841__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__46922 = cljs.core.next(seq__46841__$1);
var G__46923 = null;
var G__46924 = (0);
var G__46925 = (0);
seq__46841 = G__46922;
chunk__46842 = G__46923;
count__46843 = G__46924;
i__46844 = G__46925;
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
