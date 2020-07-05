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
var _STAR_current_trace_STAR__orig_val__46763 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__46764 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__46764);

try{try{var seq__46765 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__46766 = null;
var count__46767 = (0);
var i__46768 = (0);
while(true){
if((i__46768 < count__46767)){
var vec__46775 = chunk__46766.cljs$core$IIndexed$_nth$arity$2(null,i__46768);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46775,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46775,(1),null);
var temp__5733__auto___46819 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46819)){
var effect_fn_46820 = temp__5733__auto___46819;
(effect_fn_46820.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46820.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46820.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46821 = seq__46765;
var G__46822 = chunk__46766;
var G__46823 = count__46767;
var G__46824 = (i__46768 + (1));
seq__46765 = G__46821;
chunk__46766 = G__46822;
count__46767 = G__46823;
i__46768 = G__46824;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46765);
if(temp__5735__auto__){
var seq__46765__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46765__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46765__$1);
var G__46825 = cljs.core.chunk_rest(seq__46765__$1);
var G__46826 = c__4609__auto__;
var G__46827 = cljs.core.count(c__4609__auto__);
var G__46828 = (0);
seq__46765 = G__46825;
chunk__46766 = G__46826;
count__46767 = G__46827;
i__46768 = G__46828;
continue;
} else {
var vec__46778 = cljs.core.first(seq__46765__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46778,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46778,(1),null);
var temp__5733__auto___46829 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46829)){
var effect_fn_46830 = temp__5733__auto___46829;
(effect_fn_46830.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46830.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46830.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46831 = cljs.core.next(seq__46765__$1);
var G__46832 = null;
var G__46833 = (0);
var G__46834 = (0);
seq__46765 = G__46831;
chunk__46766 = G__46832;
count__46767 = G__46833;
i__46768 = G__46834;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__45929__auto___46835 = re_frame.interop.now();
var duration__45930__auto___46836 = (end__45929__auto___46835 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__45930__auto___46836,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__45929__auto___46835);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__46763);
}} else {
var seq__46781 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__46782 = null;
var count__46783 = (0);
var i__46784 = (0);
while(true){
if((i__46784 < count__46783)){
var vec__46791 = chunk__46782.cljs$core$IIndexed$_nth$arity$2(null,i__46784);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46791,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46791,(1),null);
var temp__5733__auto___46838 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46838)){
var effect_fn_46839 = temp__5733__auto___46838;
(effect_fn_46839.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46839.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46839.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46840 = seq__46781;
var G__46841 = chunk__46782;
var G__46842 = count__46783;
var G__46843 = (i__46784 + (1));
seq__46781 = G__46840;
chunk__46782 = G__46841;
count__46783 = G__46842;
i__46784 = G__46843;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46781);
if(temp__5735__auto__){
var seq__46781__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46781__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46781__$1);
var G__46844 = cljs.core.chunk_rest(seq__46781__$1);
var G__46845 = c__4609__auto__;
var G__46846 = cljs.core.count(c__4609__auto__);
var G__46847 = (0);
seq__46781 = G__46844;
chunk__46782 = G__46845;
count__46783 = G__46846;
i__46784 = G__46847;
continue;
} else {
var vec__46794 = cljs.core.first(seq__46781__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46794,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46794,(1),null);
var temp__5733__auto___46848 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46848)){
var effect_fn_46849 = temp__5733__auto___46848;
(effect_fn_46849.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46849.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46849.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46850 = cljs.core.next(seq__46781__$1);
var G__46851 = null;
var G__46852 = (0);
var G__46853 = (0);
seq__46781 = G__46850;
chunk__46782 = G__46851;
count__46783 = G__46852;
i__46784 = G__46853;
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
var seq__46797 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__46798 = null;
var count__46799 = (0);
var i__46800 = (0);
while(true){
if((i__46800 < count__46799)){
var map__46805 = chunk__46798.cljs$core$IIndexed$_nth$arity$2(null,i__46800);
var map__46805__$1 = (((((!((map__46805 == null))))?(((((map__46805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46805):map__46805);
var effect = map__46805__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46805__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46805__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__46797,chunk__46798,count__46799,i__46800,map__46805,map__46805__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__46797,chunk__46798,count__46799,i__46800,map__46805,map__46805__$1,effect,ms,dispatch))
,ms);
}


var G__46854 = seq__46797;
var G__46855 = chunk__46798;
var G__46856 = count__46799;
var G__46857 = (i__46800 + (1));
seq__46797 = G__46854;
chunk__46798 = G__46855;
count__46799 = G__46856;
i__46800 = G__46857;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46797);
if(temp__5735__auto__){
var seq__46797__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46797__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46797__$1);
var G__46858 = cljs.core.chunk_rest(seq__46797__$1);
var G__46859 = c__4609__auto__;
var G__46860 = cljs.core.count(c__4609__auto__);
var G__46861 = (0);
seq__46797 = G__46858;
chunk__46798 = G__46859;
count__46799 = G__46860;
i__46800 = G__46861;
continue;
} else {
var map__46807 = cljs.core.first(seq__46797__$1);
var map__46807__$1 = (((((!((map__46807 == null))))?(((((map__46807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46807):map__46807);
var effect = map__46807__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46807__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46807__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__46797,chunk__46798,count__46799,i__46800,map__46807,map__46807__$1,effect,ms,dispatch,seq__46797__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__46797,chunk__46798,count__46799,i__46800,map__46807,map__46807__$1,effect,ms,dispatch,seq__46797__$1,temp__5735__auto__))
,ms);
}


var G__46862 = cljs.core.next(seq__46797__$1);
var G__46863 = null;
var G__46864 = (0);
var G__46865 = (0);
seq__46797 = G__46862;
chunk__46798 = G__46863;
count__46799 = G__46864;
i__46800 = G__46865;
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
var seq__46809 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__46810 = null;
var count__46811 = (0);
var i__46812 = (0);
while(true){
if((i__46812 < count__46811)){
var event = chunk__46810.cljs$core$IIndexed$_nth$arity$2(null,i__46812);
re_frame.router.dispatch(event);


var G__46866 = seq__46809;
var G__46867 = chunk__46810;
var G__46868 = count__46811;
var G__46869 = (i__46812 + (1));
seq__46809 = G__46866;
chunk__46810 = G__46867;
count__46811 = G__46868;
i__46812 = G__46869;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46809);
if(temp__5735__auto__){
var seq__46809__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46809__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46809__$1);
var G__46870 = cljs.core.chunk_rest(seq__46809__$1);
var G__46871 = c__4609__auto__;
var G__46872 = cljs.core.count(c__4609__auto__);
var G__46873 = (0);
seq__46809 = G__46870;
chunk__46810 = G__46871;
count__46811 = G__46872;
i__46812 = G__46873;
continue;
} else {
var event = cljs.core.first(seq__46809__$1);
re_frame.router.dispatch(event);


var G__46874 = cljs.core.next(seq__46809__$1);
var G__46875 = null;
var G__46876 = (0);
var G__46877 = (0);
seq__46809 = G__46874;
chunk__46810 = G__46875;
count__46811 = G__46876;
i__46812 = G__46877;
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
var seq__46813 = cljs.core.seq(value);
var chunk__46814 = null;
var count__46815 = (0);
var i__46816 = (0);
while(true){
if((i__46816 < count__46815)){
var event = chunk__46814.cljs$core$IIndexed$_nth$arity$2(null,i__46816);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__46878 = seq__46813;
var G__46879 = chunk__46814;
var G__46880 = count__46815;
var G__46881 = (i__46816 + (1));
seq__46813 = G__46878;
chunk__46814 = G__46879;
count__46815 = G__46880;
i__46816 = G__46881;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46813);
if(temp__5735__auto__){
var seq__46813__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46813__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46813__$1);
var G__46882 = cljs.core.chunk_rest(seq__46813__$1);
var G__46883 = c__4609__auto__;
var G__46884 = cljs.core.count(c__4609__auto__);
var G__46885 = (0);
seq__46813 = G__46882;
chunk__46814 = G__46883;
count__46815 = G__46884;
i__46816 = G__46885;
continue;
} else {
var event = cljs.core.first(seq__46813__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__46886 = cljs.core.next(seq__46813__$1);
var G__46887 = null;
var G__46888 = (0);
var G__46889 = (0);
seq__46813 = G__46886;
chunk__46814 = G__46887;
count__46815 = G__46888;
i__46816 = G__46889;
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
