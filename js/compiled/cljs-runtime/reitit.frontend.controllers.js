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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__57923,match){
var map__57924 = p__57923;
var map__57924__$1 = (((((!((map__57924 == null))))?(((((map__57924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57924):map__57924);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57924__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57924__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57924__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__57926(s__57927){
return (new cljs.core.LazySeq(null,(function (){
var s__57927__$1 = s__57927;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57927__$1);
if(temp__5735__auto__){
var s__57927__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57927__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__57927__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__57929 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__57928 = (0);
while(true){
if((i__57928 < size__4581__auto__)){
var vec__57930 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__57928);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57930,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57930,(1),null);
cljs.core.chunk_append(b__57929,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__57948 = (i__57928 + (1));
i__57928 = G__57948;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57929),reitit$frontend$controllers$get_identity_$_iter__57926(cljs.core.chunk_rest(s__57927__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57929),null);
}
} else {
var vec__57933 = cljs.core.first(s__57927__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57933,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57933,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__57926(cljs.core.rest(s__57927__$2)));
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
var G__57936 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__57936) : f.call(null,G__57936));
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
var seq__57937_57949 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__57938_57950 = null;
var count__57939_57951 = (0);
var i__57940_57952 = (0);
while(true){
if((i__57940_57952 < count__57939_57951)){
var controller_57953 = chunk__57938_57950.cljs$core$IIndexed$_nth$arity$2(null,i__57940_57952);
reitit.frontend.controllers.apply_controller(controller_57953,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57954 = seq__57937_57949;
var G__57955 = chunk__57938_57950;
var G__57956 = count__57939_57951;
var G__57957 = (i__57940_57952 + (1));
seq__57937_57949 = G__57954;
chunk__57938_57950 = G__57955;
count__57939_57951 = G__57956;
i__57940_57952 = G__57957;
continue;
} else {
var temp__5735__auto___57958 = cljs.core.seq(seq__57937_57949);
if(temp__5735__auto___57958){
var seq__57937_57959__$1 = temp__5735__auto___57958;
if(cljs.core.chunked_seq_QMARK_(seq__57937_57959__$1)){
var c__4609__auto___57960 = cljs.core.chunk_first(seq__57937_57959__$1);
var G__57961 = cljs.core.chunk_rest(seq__57937_57959__$1);
var G__57962 = c__4609__auto___57960;
var G__57963 = cljs.core.count(c__4609__auto___57960);
var G__57964 = (0);
seq__57937_57949 = G__57961;
chunk__57938_57950 = G__57962;
count__57939_57951 = G__57963;
i__57940_57952 = G__57964;
continue;
} else {
var controller_57965 = cljs.core.first(seq__57937_57959__$1);
reitit.frontend.controllers.apply_controller(controller_57965,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57966 = cljs.core.next(seq__57937_57959__$1);
var G__57967 = null;
var G__57968 = (0);
var G__57969 = (0);
seq__57937_57949 = G__57966;
chunk__57938_57950 = G__57967;
count__57939_57951 = G__57968;
i__57940_57952 = G__57969;
continue;
}
} else {
}
}
break;
}

var seq__57943_57970 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__57944_57971 = null;
var count__57945_57972 = (0);
var i__57946_57973 = (0);
while(true){
if((i__57946_57973 < count__57945_57972)){
var controller_57974 = chunk__57944_57971.cljs$core$IIndexed$_nth$arity$2(null,i__57946_57973);
reitit.frontend.controllers.apply_controller(controller_57974,new cljs.core.Keyword(null,"start","start",-355208981));


var G__57975 = seq__57943_57970;
var G__57976 = chunk__57944_57971;
var G__57977 = count__57945_57972;
var G__57978 = (i__57946_57973 + (1));
seq__57943_57970 = G__57975;
chunk__57944_57971 = G__57976;
count__57945_57972 = G__57977;
i__57946_57973 = G__57978;
continue;
} else {
var temp__5735__auto___57979 = cljs.core.seq(seq__57943_57970);
if(temp__5735__auto___57979){
var seq__57943_57980__$1 = temp__5735__auto___57979;
if(cljs.core.chunked_seq_QMARK_(seq__57943_57980__$1)){
var c__4609__auto___57981 = cljs.core.chunk_first(seq__57943_57980__$1);
var G__57982 = cljs.core.chunk_rest(seq__57943_57980__$1);
var G__57983 = c__4609__auto___57981;
var G__57984 = cljs.core.count(c__4609__auto___57981);
var G__57985 = (0);
seq__57943_57970 = G__57982;
chunk__57944_57971 = G__57983;
count__57945_57972 = G__57984;
i__57946_57973 = G__57985;
continue;
} else {
var controller_57986 = cljs.core.first(seq__57943_57980__$1);
reitit.frontend.controllers.apply_controller(controller_57986,new cljs.core.Keyword(null,"start","start",-355208981));


var G__57987 = cljs.core.next(seq__57943_57980__$1);
var G__57988 = null;
var G__57989 = (0);
var G__57990 = (0);
seq__57943_57970 = G__57987;
chunk__57944_57971 = G__57988;
count__57945_57972 = G__57989;
i__57946_57973 = G__57990;
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
