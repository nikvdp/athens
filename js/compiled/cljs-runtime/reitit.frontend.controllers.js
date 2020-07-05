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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__57918,match){
var map__57919 = p__57918;
var map__57919__$1 = (((((!((map__57919 == null))))?(((((map__57919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57919):map__57919);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57919__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57919__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57919__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__57921(s__57922){
return (new cljs.core.LazySeq(null,(function (){
var s__57922__$1 = s__57922;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57922__$1);
if(temp__5735__auto__){
var s__57922__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57922__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__57922__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__57924 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__57923 = (0);
while(true){
if((i__57923 < size__4581__auto__)){
var vec__57925 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__57923);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57925,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57925,(1),null);
cljs.core.chunk_append(b__57924,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__57943 = (i__57923 + (1));
i__57923 = G__57943;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57924),reitit$frontend$controllers$get_identity_$_iter__57921(cljs.core.chunk_rest(s__57922__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57924),null);
}
} else {
var vec__57928 = cljs.core.first(s__57922__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57928,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57928,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__57921(cljs.core.rest(s__57922__$2)));
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
var G__57931 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__57931) : f.call(null,G__57931));
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
var seq__57933_57944 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__57934_57945 = null;
var count__57935_57946 = (0);
var i__57936_57947 = (0);
while(true){
if((i__57936_57947 < count__57935_57946)){
var controller_57948 = chunk__57934_57945.cljs$core$IIndexed$_nth$arity$2(null,i__57936_57947);
reitit.frontend.controllers.apply_controller(controller_57948,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57949 = seq__57933_57944;
var G__57950 = chunk__57934_57945;
var G__57951 = count__57935_57946;
var G__57952 = (i__57936_57947 + (1));
seq__57933_57944 = G__57949;
chunk__57934_57945 = G__57950;
count__57935_57946 = G__57951;
i__57936_57947 = G__57952;
continue;
} else {
var temp__5735__auto___57953 = cljs.core.seq(seq__57933_57944);
if(temp__5735__auto___57953){
var seq__57933_57954__$1 = temp__5735__auto___57953;
if(cljs.core.chunked_seq_QMARK_(seq__57933_57954__$1)){
var c__4609__auto___57955 = cljs.core.chunk_first(seq__57933_57954__$1);
var G__57956 = cljs.core.chunk_rest(seq__57933_57954__$1);
var G__57957 = c__4609__auto___57955;
var G__57958 = cljs.core.count(c__4609__auto___57955);
var G__57959 = (0);
seq__57933_57944 = G__57956;
chunk__57934_57945 = G__57957;
count__57935_57946 = G__57958;
i__57936_57947 = G__57959;
continue;
} else {
var controller_57961 = cljs.core.first(seq__57933_57954__$1);
reitit.frontend.controllers.apply_controller(controller_57961,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57962 = cljs.core.next(seq__57933_57954__$1);
var G__57963 = null;
var G__57964 = (0);
var G__57965 = (0);
seq__57933_57944 = G__57962;
chunk__57934_57945 = G__57963;
count__57935_57946 = G__57964;
i__57936_57947 = G__57965;
continue;
}
} else {
}
}
break;
}

var seq__57938_57966 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__57939_57967 = null;
var count__57940_57968 = (0);
var i__57941_57969 = (0);
while(true){
if((i__57941_57969 < count__57940_57968)){
var controller_57971 = chunk__57939_57967.cljs$core$IIndexed$_nth$arity$2(null,i__57941_57969);
reitit.frontend.controllers.apply_controller(controller_57971,new cljs.core.Keyword(null,"start","start",-355208981));


var G__57973 = seq__57938_57966;
var G__57974 = chunk__57939_57967;
var G__57975 = count__57940_57968;
var G__57976 = (i__57941_57969 + (1));
seq__57938_57966 = G__57973;
chunk__57939_57967 = G__57974;
count__57940_57968 = G__57975;
i__57941_57969 = G__57976;
continue;
} else {
var temp__5735__auto___57977 = cljs.core.seq(seq__57938_57966);
if(temp__5735__auto___57977){
var seq__57938_57978__$1 = temp__5735__auto___57977;
if(cljs.core.chunked_seq_QMARK_(seq__57938_57978__$1)){
var c__4609__auto___57979 = cljs.core.chunk_first(seq__57938_57978__$1);
var G__57980 = cljs.core.chunk_rest(seq__57938_57978__$1);
var G__57981 = c__4609__auto___57979;
var G__57982 = cljs.core.count(c__4609__auto___57979);
var G__57983 = (0);
seq__57938_57966 = G__57980;
chunk__57939_57967 = G__57981;
count__57940_57968 = G__57982;
i__57941_57969 = G__57983;
continue;
} else {
var controller_57984 = cljs.core.first(seq__57938_57978__$1);
reitit.frontend.controllers.apply_controller(controller_57984,new cljs.core.Keyword(null,"start","start",-355208981));


var G__57985 = cljs.core.next(seq__57938_57978__$1);
var G__57986 = null;
var G__57987 = (0);
var G__57988 = (0);
seq__57938_57966 = G__57985;
chunk__57939_57967 = G__57986;
count__57940_57968 = G__57987;
i__57941_57969 = G__57988;
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
