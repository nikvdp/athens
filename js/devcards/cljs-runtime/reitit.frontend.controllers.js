goog.provide('reitit.frontend.controllers');
goog.require('cljs.core');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__55654,match){
var map__55655 = p__55654;
var map__55655__$1 = (((((!((map__55655 == null))))?(((((map__55655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55655):map__55655);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55655__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55655__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55655__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__4174__auto__ = identity;
if(cljs.core.truth_(and__4174__auto__)){
return parameters;
} else {
return and__4174__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__55657(s__55658){
return (new cljs.core.LazySeq(null,(function (){
var s__55658__$1 = s__55658;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55658__$1);
if(temp__5735__auto__){
var s__55658__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55658__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__55658__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__55660 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__55659 = (0);
while(true){
if((i__55659 < size__4581__auto__)){
var vec__55661 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__55659);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55661,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55661,(1),null);
cljs.core.chunk_append(b__55660,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__55679 = (i__55659 + (1));
i__55659 = G__55679;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55660),reitit$frontend$controllers$get_identity_$_iter__55657(cljs.core.chunk_rest(s__55658__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55660),null);
}
} else {
var vec__55664 = cljs.core.first(s__55658__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55664,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55664,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__55657(cljs.core.rest(s__55658__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
var G__55667 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__55667) : f.call(null,G__55667));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__55669_55680 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__55670_55681 = null;
var count__55671_55682 = (0);
var i__55672_55683 = (0);
while(true){
if((i__55672_55683 < count__55671_55682)){
var controller_55684 = chunk__55670_55681.cljs$core$IIndexed$_nth$arity$2(null,i__55672_55683);
reitit.frontend.controllers.apply_controller(controller_55684,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__55686 = seq__55669_55680;
var G__55687 = chunk__55670_55681;
var G__55688 = count__55671_55682;
var G__55689 = (i__55672_55683 + (1));
seq__55669_55680 = G__55686;
chunk__55670_55681 = G__55687;
count__55671_55682 = G__55688;
i__55672_55683 = G__55689;
continue;
} else {
var temp__5735__auto___55690 = cljs.core.seq(seq__55669_55680);
if(temp__5735__auto___55690){
var seq__55669_55691__$1 = temp__5735__auto___55690;
if(cljs.core.chunked_seq_QMARK_(seq__55669_55691__$1)){
var c__4609__auto___55692 = cljs.core.chunk_first(seq__55669_55691__$1);
var G__55694 = cljs.core.chunk_rest(seq__55669_55691__$1);
var G__55695 = c__4609__auto___55692;
var G__55696 = cljs.core.count(c__4609__auto___55692);
var G__55697 = (0);
seq__55669_55680 = G__55694;
chunk__55670_55681 = G__55695;
count__55671_55682 = G__55696;
i__55672_55683 = G__55697;
continue;
} else {
var controller_55699 = cljs.core.first(seq__55669_55691__$1);
reitit.frontend.controllers.apply_controller(controller_55699,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__55700 = cljs.core.next(seq__55669_55691__$1);
var G__55701 = null;
var G__55702 = (0);
var G__55703 = (0);
seq__55669_55680 = G__55700;
chunk__55670_55681 = G__55701;
count__55671_55682 = G__55702;
i__55672_55683 = G__55703;
continue;
}
} else {
}
}
break;
}

var seq__55675_55704 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__55676_55705 = null;
var count__55677_55706 = (0);
var i__55678_55707 = (0);
while(true){
if((i__55678_55707 < count__55677_55706)){
var controller_55708 = chunk__55676_55705.cljs$core$IIndexed$_nth$arity$2(null,i__55678_55707);
reitit.frontend.controllers.apply_controller(controller_55708,new cljs.core.Keyword(null,"start","start",-355208981));


var G__55709 = seq__55675_55704;
var G__55710 = chunk__55676_55705;
var G__55711 = count__55677_55706;
var G__55712 = (i__55678_55707 + (1));
seq__55675_55704 = G__55709;
chunk__55676_55705 = G__55710;
count__55677_55706 = G__55711;
i__55678_55707 = G__55712;
continue;
} else {
var temp__5735__auto___55713 = cljs.core.seq(seq__55675_55704);
if(temp__5735__auto___55713){
var seq__55675_55714__$1 = temp__5735__auto___55713;
if(cljs.core.chunked_seq_QMARK_(seq__55675_55714__$1)){
var c__4609__auto___55715 = cljs.core.chunk_first(seq__55675_55714__$1);
var G__55716 = cljs.core.chunk_rest(seq__55675_55714__$1);
var G__55717 = c__4609__auto___55715;
var G__55718 = cljs.core.count(c__4609__auto___55715);
var G__55719 = (0);
seq__55675_55704 = G__55716;
chunk__55676_55705 = G__55717;
count__55677_55706 = G__55718;
i__55678_55707 = G__55719;
continue;
} else {
var controller_55720 = cljs.core.first(seq__55675_55714__$1);
reitit.frontend.controllers.apply_controller(controller_55720,new cljs.core.Keyword(null,"start","start",-355208981));


var G__55721 = cljs.core.next(seq__55675_55714__$1);
var G__55722 = null;
var G__55723 = (0);
var G__55724 = (0);
seq__55675_55704 = G__55721;
chunk__55676_55705 = G__55722;
count__55677_55706 = G__55723;
i__55678_55707 = G__55724;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map
