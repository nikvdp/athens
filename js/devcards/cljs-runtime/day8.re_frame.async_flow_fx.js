goog.provide('day8.re_frame.async_flow_fx');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('clojure.set');
goog.require('day8.re_frame.forward_events_fx');
/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 *   The key thing is that 'm' remains identical? to itself if the path was never present
 */
day8.re_frame.async_flow_fx.dissoc_in = (function day8$re_frame$async_flow_fx$dissoc_in(m,p__61349){
var vec__61350 = p__61349;
var seq__61351 = cljs.core.seq(vec__61350);
var first__61352 = cljs.core.first(seq__61351);
var seq__61351__$1 = cljs.core.next(seq__61351);
var k = first__61352;
var ks = seq__61351__$1;
var keys = vec__61350;
if(ks){
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__5733__auto__)){
var nextmap = temp__5733__auto__;
var newmap = (day8.re_frame.async_flow_fx.dissoc_in.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame.async_flow_fx.dissoc_in.cljs$core$IFn$_invoke$arity$2(nextmap,ks) : day8.re_frame.async_flow_fx.dissoc_in.call(null,nextmap,ks));
if(cljs.core.seq(newmap)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,newmap);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
});
day8.re_frame.async_flow_fx.seen_all_of_QMARK_ = (function day8$re_frame$async_flow_fx$seen_all_of_QMARK_(required_events,seen_events){
var callback_preds = cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame.forward_events_fx.as_callback_pred,required_events);
return cljs.core.every_QMARK_((function (pred){
return cljs.core.some(pred,seen_events);
}),callback_preds);
});
day8.re_frame.async_flow_fx.seen_any_of_QMARK_ = (function day8$re_frame$async_flow_fx$seen_any_of_QMARK_(required_events,seen_events){
var callback_preds = cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame.forward_events_fx.as_callback_pred,required_events);
return (!((cljs.core.some((function (pred){
return cljs.core.some(pred,seen_events);
}),callback_preds) == null)));
});
/**
 * Given the accumulated set of seen events and the set of rules already started,
 *   return the list of rules which should now be started
 */
day8.re_frame.async_flow_fx.startable_rules = (function day8$re_frame$async_flow_fx$startable_rules(rules,now_seen_events,rules_fired){
return cljs.core.filterv((function (task){
var G__61354 = new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(task);
var G__61355 = now_seen_events;
var fexpr__61353 = new cljs.core.Keyword(null,"when","when",-576417306).cljs$core$IFn$_invoke$arity$1(task);
return (fexpr__61353.cljs$core$IFn$_invoke$arity$2 ? fexpr__61353.cljs$core$IFn$_invoke$arity$2(G__61354,G__61355) : fexpr__61353.call(null,G__61354,G__61355));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(rules_fired,new cljs.core.Keyword(null,"id","id",-1388402092)),rules));
});
day8.re_frame.async_flow_fx.map_when__GT_fn = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"seen?","seen?",-1677689856),day8.re_frame.async_flow_fx.seen_all_of_QMARK_,new cljs.core.Keyword(null,"seen-both?","seen-both?",-1396729677),day8.re_frame.async_flow_fx.seen_all_of_QMARK_,new cljs.core.Keyword(null,"seen-all-of?","seen-all-of?",-651402557),day8.re_frame.async_flow_fx.seen_all_of_QMARK_,new cljs.core.Keyword(null,"seen-any-of?","seen-any-of?",622544182),day8.re_frame.async_flow_fx.seen_any_of_QMARK_], null);
day8.re_frame.async_flow_fx.when__GT_fn = (function day8$re_frame$async_flow_fx$when__GT_fn(when_kw){
var temp__5733__auto__ = (day8.re_frame.async_flow_fx.map_when__GT_fn.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame.async_flow_fx.map_when__GT_fn.cljs$core$IFn$_invoke$arity$1(when_kw) : day8.re_frame.async_flow_fx.map_when__GT_fn.call(null,when_kw));
if(cljs.core.truth_(temp__5733__auto__)){
var when_fn = temp__5733__auto__;
return when_fn;
} else {
var G__61356 = new cljs.core.Keyword(null,"error","error",-978969032);
var G__61357 = "async-flow: got bad value for :when - ";
var G__61358 = when_kw;
return (re_frame.core.console.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$3(G__61356,G__61357,G__61358) : re_frame.core.console.call(null,G__61356,G__61357,G__61358));
}
});
/**
 * Massage the supplied rules as follows:
 *  - replace `:when` keyword value with a function implementing the predicate
 *  - ensure that only `:dispatch` or `:dispatch-n` is provided
 *  - add a unique :id, if one not already present
 */
day8.re_frame.async_flow_fx.massage_rules = (function day8$re_frame$async_flow_fx$massage_rules(rules){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,p__61359){
var map__61360 = p__61359;
var map__61360__$1 = (((((!((map__61360 == null))))?(((((map__61360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61360):map__61360);
var rule = map__61360__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61360__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var when = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61360__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61360__$1,new cljs.core.Keyword(null,"events","events",1792552201));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61360__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
var dispatch_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61360__$1,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236));
var dispatch_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61360__$1,new cljs.core.Keyword(null,"dispatch-fn","dispatch-fn",1253347614));
var halt_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61360__$1,new cljs.core.Keyword(null,"halt?","halt?",-1110658247));
if(((1) < cljs.core.count(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dispatch,dispatch_n,dispatch_fn], null))))){
var G__61362 = new cljs.core.Keyword(null,"error","error",-978969032);
var G__61363 = "async-flow: rule can only specify one of :dispatch, :dispatch-n and :dispatch-fn. Got more than one: ";
var G__61364 = rule;
return (re_frame.core.console.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$3(G__61362,G__61363,G__61364) : re_frame.core.console.call(null,G__61362,G__61363,G__61364));
} else {
var G__61365 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__4185__auto__ = id;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return index;
}
})(),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),(function (){var or__4185__auto__ = halt_QMARK_;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return false;
}
})(),new cljs.core.Keyword(null,"when","when",-576417306),day8.re_frame.async_flow_fx.when__GT_fn(when),new cljs.core.Keyword(null,"events","events",1792552201),((cljs.core.coll_QMARK_(events))?cljs.core.set(events):cljs.core.PersistentHashSet.createAsIfByAssoc([events]))], null);
var G__61365__$1 = (cljs.core.truth_(dispatch_fn)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61365,new cljs.core.Keyword(null,"dispatch-fn","dispatch-fn",1253347614),dispatch_fn):G__61365);
if(cljs.core.not(dispatch_fn)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61365__$1,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(cljs.core.truth_(dispatch_n)?dispatch_n:(cljs.core.truth_(dispatch)?(new cljs.core.List(null,dispatch,null,(1),null)):cljs.core.List.EMPTY
)));
} else {
return G__61365__$1;
}
}
}),rules);
});
day8.re_frame.async_flow_fx.rules__GT_dispatches = (function day8$re_frame$async_flow_fx$rules__GT_dispatches(rules,event){

return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (rule){
var map__61366 = rule;
var map__61366__$1 = (((((!((map__61366 == null))))?(((((map__61366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61366):map__61366);
var dispatch_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61366__$1,new cljs.core.Keyword(null,"dispatch-fn","dispatch-fn",1253347614));
var dispatch_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61366__$1,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236));
if(cljs.core.truth_(dispatch_n)){
return dispatch_n;
} else {
if(cljs.core.truth_(dispatch_fn)){
var dispatch_n__$1 = (dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? dispatch_fn.cljs$core$IFn$_invoke$arity$1(event) : dispatch_fn.call(null,event));
if(cljs.core.every_QMARK_(cljs.core.vector_QMARK_,dispatch_n__$1)){
return dispatch_n__$1;
} else {
var G__61368 = new cljs.core.Keyword(null,"error","error",-978969032);
var G__61369 = "async-flow: dispatch-fn must return a seq of events ";
var G__61370 = rule;
return (re_frame.core.console.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$3(G__61368,G__61369,G__61370) : re_frame.core.console.call(null,G__61368,G__61369,G__61370));
}
} else {
return cljs.core.List.EMPTY;

}
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rules], 0));
});
/**
 * Given a flow definition, returns an event handler which implements this definition
 */
day8.re_frame.async_flow_fx.make_flow_event_handler = (function day8$re_frame$async_flow_fx$make_flow_event_handler(p__61371){
var map__61372 = p__61371;
var map__61372__$1 = (((((!((map__61372 == null))))?(((((map__61372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61372):map__61372);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61372__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var db_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61372__$1,new cljs.core.Keyword(null,"db-path","db-path",-68094099));
var rules = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61372__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
var first_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61372__$1,new cljs.core.Keyword(null,"first-dispatch","first-dispatch",128561923));
var _ = (((((db_path == null)) || (cljs.core.vector_QMARK_(db_path))))?null:(function(){throw (new Error(["Assert failed: ","async-flow: db-path must be a vector","\n","(or (nil? db-path) (vector? db-path))"].join('')))})());
var local_store = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var set_state = (cljs.core.truth_(db_path)?(function (db,seen,started){
return cljs.core.assoc_in(db,db_path,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"seen-events","seen-events",1607648392),seen,new cljs.core.Keyword(null,"rules-fired","rules-fired",-1669838140),started], null));
}):(function (db,seen,started){
cljs.core.reset_BANG_(local_store,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"seen-events","seen-events",1607648392),seen,new cljs.core.Keyword(null,"rules-fired","rules-fired",-1669838140),started], null));

return db;
}));
var get_state = (cljs.core.truth_(db_path)?(function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,db_path);
}):(function (___$1){
return cljs.core.deref(local_store);
}));
var rules__$1 = day8.re_frame.async_flow_fx.massage_rules(rules);
return (function day8$re_frame$async_flow_fx$make_flow_event_handler_$_async_flow_event_handler(p__61374,p__61375){
var map__61376 = p__61374;
var map__61376__$1 = (((((!((map__61376 == null))))?(((((map__61376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61376):map__61376);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61376__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__61377 = p__61375;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61377,(0),null);
var event_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61377,(1),null);
var event_v = vec__61377;
var pred__61381 = cljs.core._EQ_;
var expr__61382 = event_type;
if(cljs.core.truth_((function (){var G__61384 = new cljs.core.Keyword(null,"setup","setup",1987730512);
var G__61385 = expr__61382;
return (pred__61381.cljs$core$IFn$_invoke$arity$2 ? pred__61381.cljs$core$IFn$_invoke$arity$2(G__61384,G__61385) : pred__61381.call(null,G__61384,G__61385));
})())){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var G__61386 = db;
var G__61387 = cljs.core.PersistentHashSet.EMPTY;
var G__61388 = cljs.core.PersistentHashSet.EMPTY;
return (set_state.cljs$core$IFn$_invoke$arity$3 ? set_state.cljs$core$IFn$_invoke$arity$3(G__61386,G__61387,G__61388) : set_state.call(null,G__61386,G__61387,G__61388));
})(),new cljs.core.Keyword(null,"forward-events","forward-events",1216790539),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"register","register",1968522516),id,new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"events","events",1792552201),rules__$1)),new cljs.core.Keyword(null,"dispatch-to","dispatch-to",-354764401),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null)], null)], null),(cljs.core.truth_(first_dispatch)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),first_dispatch], null):null)], 0));
} else {
var vec__61389 = event_v;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61389,(0),null);
var forwarded_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61389,(1),null);
var map__61392 = (get_state.cljs$core$IFn$_invoke$arity$1 ? get_state.cljs$core$IFn$_invoke$arity$1(db) : get_state.call(null,db));
var map__61392__$1 = (((((!((map__61392 == null))))?(((((map__61392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61392):map__61392);
var seen_events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61392__$1,new cljs.core.Keyword(null,"seen-events","seen-events",1607648392));
var rules_fired = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61392__$1,new cljs.core.Keyword(null,"rules-fired","rules-fired",-1669838140));
var new_seen_events = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen_events,forwarded_event);
var ready_rules = day8.re_frame.async_flow_fx.startable_rules(rules__$1,new_seen_events,rules_fired);
var halt_QMARK_ = cljs.core.some(new cljs.core.Keyword(null,"halt?","halt?",-1110658247),ready_rules);
var ready_rules_ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),ready_rules));
var new_rules_fired = clojure.set.union.cljs$core$IFn$_invoke$arity$2(rules_fired,ready_rules_ids);
var new_dispatches = day8.re_frame.async_flow_fx.rules__GT_dispatches(ready_rules,forwarded_event);
var new_db = (set_state.cljs$core$IFn$_invoke$arity$3 ? set_state.cljs$core$IFn$_invoke$arity$3(db,new_seen_events,new_rules_fired) : set_state.call(null,db,new_seen_events,new_rules_fired));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new_db], null),((cljs.core.seq(new_dispatches))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new_dispatches], null):null),(cljs.core.truth_(halt_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),day8.re_frame.async_flow_fx.dissoc_in(new_db,db_path),new cljs.core.Keyword(null,"forward-events","forward-events",1216790539),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unregister","unregister",2105339971),id], null),new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),id], null):null)], 0));
}
});
});
/**
 * Ensure `flow` has an id. Return a vector of [id flow].
 */
day8.re_frame.async_flow_fx.ensure_has_id = (function day8$re_frame$async_flow_fx$ensure_has_id(flow){
var temp__5733__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(flow);
if(cljs.core.truth_(temp__5733__auto__)){
var id = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,flow], null);
} else {
var new_id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["async-flow/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("id-"))].join(''));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_id,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flow,new cljs.core.Keyword(null,"id","id",-1388402092),new_id)], null);
}
});
/**
 * Action the given flow effect
 */
day8.re_frame.async_flow_fx.flow__GT_handler = (function day8$re_frame$async_flow_fx$flow__GT_handler(flow){
var vec__61394 = day8.re_frame.async_flow_fx.ensure_has_id(flow);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61394,(0),null);
var flow_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61394,(1),null);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(id,day8.re_frame.async_flow_fx.make_flow_event_handler(flow_SINGLEQUOTE_));

var G__61397 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"setup","setup",1987730512)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__61397) : re_frame.core.dispatch.call(null,G__61397));
});
var G__61398_61400 = new cljs.core.Keyword(null,"async-flow","async-flow",1464712702);
var G__61399_61401 = day8.re_frame.async_flow_fx.flow__GT_handler;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61398_61400,G__61399_61401) : re_frame.core.reg_fx.call(null,G__61398_61400,G__61399_61401));

//# sourceMappingURL=day8.re_frame.async_flow_fx.js.map
