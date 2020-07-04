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
var seq__57947_57958 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__57948_57959 = null;
var count__57949_57960 = (0);
var i__57950_57961 = (0);
while(true){
if((i__57950_57961 < count__57949_57960)){
var controller_57963 = chunk__57948_57959.cljs$core$IIndexed$_nth$arity$2(null,i__57950_57961);
reitit.frontend.controllers.apply_controller(controller_57963,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57964 = seq__57947_57958;
var G__57965 = chunk__57948_57959;
var G__57966 = count__57949_57960;
var G__57967 = (i__57950_57961 + (1));
seq__57947_57958 = G__57964;
chunk__57948_57959 = G__57965;
count__57949_57960 = G__57966;
i__57950_57961 = G__57967;
continue;
} else {
var temp__5735__auto___57968 = cljs.core.seq(seq__57947_57958);
if(temp__5735__auto___57968){
var seq__57947_57969__$1 = temp__5735__auto___57968;
if(cljs.core.chunked_seq_QMARK_(seq__57947_57969__$1)){
var c__4609__auto___57971 = cljs.core.chunk_first(seq__57947_57969__$1);
var G__57972 = cljs.core.chunk_rest(seq__57947_57969__$1);
var G__57973 = c__4609__auto___57971;
var G__57974 = cljs.core.count(c__4609__auto___57971);
var G__57975 = (0);
seq__57947_57958 = G__57972;
chunk__57948_57959 = G__57973;
count__57949_57960 = G__57974;
i__57950_57961 = G__57975;
continue;
} else {
var controller_57977 = cljs.core.first(seq__57947_57969__$1);
reitit.frontend.controllers.apply_controller(controller_57977,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57978 = cljs.core.next(seq__57947_57969__$1);
var G__57979 = null;
var G__57980 = (0);
var G__57981 = (0);
seq__57947_57958 = G__57978;
chunk__57948_57959 = G__57979;
count__57949_57960 = G__57980;
i__57950_57961 = G__57981;
continue;
}
} else {
}
}
break;
}

var seq__57953_57982 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__57954_57983 = null;
var count__57955_57984 = (0);
var i__57956_57985 = (0);
while(true){
if((i__57956_57985 < count__57955_57984)){
var controller_57986 = chunk__57954_57983.cljs$core$IIndexed$_nth$arity$2(null,i__57956_57985);
reitit.frontend.controllers.apply_controller(controller_57986,new cljs.core.Keyword(null,"start","start",-355208981));


var G__57987 = seq__57953_57982;
var G__57988 = chunk__57954_57983;
var G__57989 = count__57955_57984;
var G__57990 = (i__57956_57985 + (1));
seq__57953_57982 = G__57987;
chunk__57954_57983 = G__57988;
count__57955_57984 = G__57989;
i__57956_57985 = G__57990;
continue;
} else {
var temp__5735__auto___57991 = cljs.core.seq(seq__57953_57982);
if(temp__5735__auto___57991){
var seq__57953_57992__$1 = temp__5735__auto___57991;
if(cljs.core.chunked_seq_QMARK_(seq__57953_57992__$1)){
var c__4609__auto___57993 = cljs.core.chunk_first(seq__57953_57992__$1);
var G__57994 = cljs.core.chunk_rest(seq__57953_57992__$1);
var G__57995 = c__4609__auto___57993;
var G__57996 = cljs.core.count(c__4609__auto___57993);
var G__57997 = (0);
seq__57953_57982 = G__57994;
chunk__57954_57983 = G__57995;
count__57955_57984 = G__57996;
i__57956_57985 = G__57997;
continue;
} else {
var controller_57998 = cljs.core.first(seq__57953_57992__$1);
reitit.frontend.controllers.apply_controller(controller_57998,new cljs.core.Keyword(null,"start","start",-355208981));


var G__57999 = cljs.core.next(seq__57953_57992__$1);
var G__58000 = null;
var G__58001 = (0);
var G__58002 = (0);
seq__57953_57982 = G__57999;
chunk__57954_57983 = G__58000;
count__57955_57984 = G__58001;
i__57956_57985 = G__58002;
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
