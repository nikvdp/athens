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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__55697,match){
var map__55698 = p__55697;
var map__55698__$1 = (((((!((map__55698 == null))))?(((((map__55698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55698):map__55698);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55698__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55698__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55698__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__55700(s__55701){
return (new cljs.core.LazySeq(null,(function (){
var s__55701__$1 = s__55701;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55701__$1);
if(temp__5735__auto__){
var s__55701__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55701__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__55701__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__55703 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__55702 = (0);
while(true){
if((i__55702 < size__4581__auto__)){
var vec__55704 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__55702);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55704,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55704,(1),null);
cljs.core.chunk_append(b__55703,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__55722 = (i__55702 + (1));
i__55702 = G__55722;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55703),reitit$frontend$controllers$get_identity_$_iter__55700(cljs.core.chunk_rest(s__55701__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55703),null);
}
} else {
var vec__55707 = cljs.core.first(s__55701__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55707,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55707,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__55700(cljs.core.rest(s__55701__$2)));
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
var G__55710 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__55710) : f.call(null,G__55710));
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
var seq__55712_55723 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__55713_55724 = null;
var count__55714_55725 = (0);
var i__55715_55726 = (0);
while(true){
if((i__55715_55726 < count__55714_55725)){
var controller_55728 = chunk__55713_55724.cljs$core$IIndexed$_nth$arity$2(null,i__55715_55726);
reitit.frontend.controllers.apply_controller(controller_55728,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__55729 = seq__55712_55723;
var G__55730 = chunk__55713_55724;
var G__55731 = count__55714_55725;
var G__55732 = (i__55715_55726 + (1));
seq__55712_55723 = G__55729;
chunk__55713_55724 = G__55730;
count__55714_55725 = G__55731;
i__55715_55726 = G__55732;
continue;
} else {
var temp__5735__auto___55733 = cljs.core.seq(seq__55712_55723);
if(temp__5735__auto___55733){
var seq__55712_55735__$1 = temp__5735__auto___55733;
if(cljs.core.chunked_seq_QMARK_(seq__55712_55735__$1)){
var c__4609__auto___55736 = cljs.core.chunk_first(seq__55712_55735__$1);
var G__55738 = cljs.core.chunk_rest(seq__55712_55735__$1);
var G__55739 = c__4609__auto___55736;
var G__55740 = cljs.core.count(c__4609__auto___55736);
var G__55741 = (0);
seq__55712_55723 = G__55738;
chunk__55713_55724 = G__55739;
count__55714_55725 = G__55740;
i__55715_55726 = G__55741;
continue;
} else {
var controller_55742 = cljs.core.first(seq__55712_55735__$1);
reitit.frontend.controllers.apply_controller(controller_55742,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__55743 = cljs.core.next(seq__55712_55735__$1);
var G__55744 = null;
var G__55745 = (0);
var G__55746 = (0);
seq__55712_55723 = G__55743;
chunk__55713_55724 = G__55744;
count__55714_55725 = G__55745;
i__55715_55726 = G__55746;
continue;
}
} else {
}
}
break;
}

var seq__55717_55747 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__55718_55748 = null;
var count__55719_55749 = (0);
var i__55720_55750 = (0);
while(true){
if((i__55720_55750 < count__55719_55749)){
var controller_55751 = chunk__55718_55748.cljs$core$IIndexed$_nth$arity$2(null,i__55720_55750);
reitit.frontend.controllers.apply_controller(controller_55751,new cljs.core.Keyword(null,"start","start",-355208981));


var G__55752 = seq__55717_55747;
var G__55753 = chunk__55718_55748;
var G__55754 = count__55719_55749;
var G__55755 = (i__55720_55750 + (1));
seq__55717_55747 = G__55752;
chunk__55718_55748 = G__55753;
count__55719_55749 = G__55754;
i__55720_55750 = G__55755;
continue;
} else {
var temp__5735__auto___55756 = cljs.core.seq(seq__55717_55747);
if(temp__5735__auto___55756){
var seq__55717_55757__$1 = temp__5735__auto___55756;
if(cljs.core.chunked_seq_QMARK_(seq__55717_55757__$1)){
var c__4609__auto___55758 = cljs.core.chunk_first(seq__55717_55757__$1);
var G__55759 = cljs.core.chunk_rest(seq__55717_55757__$1);
var G__55760 = c__4609__auto___55758;
var G__55761 = cljs.core.count(c__4609__auto___55758);
var G__55762 = (0);
seq__55717_55747 = G__55759;
chunk__55718_55748 = G__55760;
count__55719_55749 = G__55761;
i__55720_55750 = G__55762;
continue;
} else {
var controller_55763 = cljs.core.first(seq__55717_55757__$1);
reitit.frontend.controllers.apply_controller(controller_55763,new cljs.core.Keyword(null,"start","start",-355208981));


var G__55764 = cljs.core.next(seq__55717_55757__$1);
var G__55765 = null;
var G__55766 = (0);
var G__55767 = (0);
seq__55717_55747 = G__55764;
chunk__55718_55748 = G__55765;
count__55719_55749 = G__55766;
i__55720_55750 = G__55767;
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
