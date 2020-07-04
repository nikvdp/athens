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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__57932,match){
var map__57933 = p__57932;
var map__57933__$1 = (((((!((map__57933 == null))))?(((((map__57933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57933):map__57933);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57933__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57933__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57933__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__57935(s__57936){
return (new cljs.core.LazySeq(null,(function (){
var s__57936__$1 = s__57936;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57936__$1);
if(temp__5735__auto__){
var s__57936__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57936__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__57936__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__57938 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__57937 = (0);
while(true){
if((i__57937 < size__4581__auto__)){
var vec__57939 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__57937);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57939,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57939,(1),null);
cljs.core.chunk_append(b__57938,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__57957 = (i__57937 + (1));
i__57937 = G__57957;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57938),reitit$frontend$controllers$get_identity_$_iter__57935(cljs.core.chunk_rest(s__57936__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57938),null);
}
} else {
var vec__57942 = cljs.core.first(s__57936__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57942,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57942,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__57935(cljs.core.rest(s__57936__$2)));
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
var G__57945 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__57945) : f.call(null,G__57945));
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
var seq__57946_57958 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__57947_57959 = null;
var count__57948_57960 = (0);
var i__57949_57961 = (0);
while(true){
if((i__57949_57961 < count__57948_57960)){
var controller_57962 = chunk__57947_57959.cljs$core$IIndexed$_nth$arity$2(null,i__57949_57961);
reitit.frontend.controllers.apply_controller(controller_57962,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57963 = seq__57946_57958;
var G__57964 = chunk__57947_57959;
var G__57965 = count__57948_57960;
var G__57966 = (i__57949_57961 + (1));
seq__57946_57958 = G__57963;
chunk__57947_57959 = G__57964;
count__57948_57960 = G__57965;
i__57949_57961 = G__57966;
continue;
} else {
var temp__5735__auto___57967 = cljs.core.seq(seq__57946_57958);
if(temp__5735__auto___57967){
var seq__57946_57968__$1 = temp__5735__auto___57967;
if(cljs.core.chunked_seq_QMARK_(seq__57946_57968__$1)){
var c__4609__auto___57969 = cljs.core.chunk_first(seq__57946_57968__$1);
var G__57970 = cljs.core.chunk_rest(seq__57946_57968__$1);
var G__57971 = c__4609__auto___57969;
var G__57972 = cljs.core.count(c__4609__auto___57969);
var G__57973 = (0);
seq__57946_57958 = G__57970;
chunk__57947_57959 = G__57971;
count__57948_57960 = G__57972;
i__57949_57961 = G__57973;
continue;
} else {
var controller_57974 = cljs.core.first(seq__57946_57968__$1);
reitit.frontend.controllers.apply_controller(controller_57974,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57975 = cljs.core.next(seq__57946_57968__$1);
var G__57976 = null;
var G__57977 = (0);
var G__57978 = (0);
seq__57946_57958 = G__57975;
chunk__57947_57959 = G__57976;
count__57948_57960 = G__57977;
i__57949_57961 = G__57978;
continue;
}
} else {
}
}
break;
}

var seq__57950_57979 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__57951_57980 = null;
var count__57952_57981 = (0);
var i__57953_57982 = (0);
while(true){
if((i__57953_57982 < count__57952_57981)){
var controller_57983 = chunk__57951_57980.cljs$core$IIndexed$_nth$arity$2(null,i__57953_57982);
reitit.frontend.controllers.apply_controller(controller_57983,new cljs.core.Keyword(null,"start","start",-355208981));


var G__57984 = seq__57950_57979;
var G__57985 = chunk__57951_57980;
var G__57986 = count__57952_57981;
var G__57987 = (i__57953_57982 + (1));
seq__57950_57979 = G__57984;
chunk__57951_57980 = G__57985;
count__57952_57981 = G__57986;
i__57953_57982 = G__57987;
continue;
} else {
var temp__5735__auto___57988 = cljs.core.seq(seq__57950_57979);
if(temp__5735__auto___57988){
var seq__57950_57989__$1 = temp__5735__auto___57988;
if(cljs.core.chunked_seq_QMARK_(seq__57950_57989__$1)){
var c__4609__auto___57990 = cljs.core.chunk_first(seq__57950_57989__$1);
var G__57991 = cljs.core.chunk_rest(seq__57950_57989__$1);
var G__57992 = c__4609__auto___57990;
var G__57993 = cljs.core.count(c__4609__auto___57990);
var G__57994 = (0);
seq__57950_57979 = G__57991;
chunk__57951_57980 = G__57992;
count__57952_57981 = G__57993;
i__57953_57982 = G__57994;
continue;
} else {
var controller_57995 = cljs.core.first(seq__57950_57989__$1);
reitit.frontend.controllers.apply_controller(controller_57995,new cljs.core.Keyword(null,"start","start",-355208981));


var G__57996 = cljs.core.next(seq__57950_57989__$1);
var G__57997 = null;
var G__57998 = (0);
var G__57999 = (0);
seq__57950_57979 = G__57996;
chunk__57951_57980 = G__57997;
count__57952_57981 = G__57998;
i__57953_57982 = G__57999;
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
