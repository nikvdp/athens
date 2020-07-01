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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__57908,match){
var map__57909 = p__57908;
var map__57909__$1 = (((((!((map__57909 == null))))?(((((map__57909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57909):map__57909);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57909__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57909__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57909__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__57911(s__57912){
return (new cljs.core.LazySeq(null,(function (){
var s__57912__$1 = s__57912;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57912__$1);
if(temp__5735__auto__){
var s__57912__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57912__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__57912__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__57914 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__57913 = (0);
while(true){
if((i__57913 < size__4581__auto__)){
var vec__57915 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__57913);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57915,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57915,(1),null);
cljs.core.chunk_append(b__57914,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__57933 = (i__57913 + (1));
i__57913 = G__57933;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57914),reitit$frontend$controllers$get_identity_$_iter__57911(cljs.core.chunk_rest(s__57912__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57914),null);
}
} else {
var vec__57918 = cljs.core.first(s__57912__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57918,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57918,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__57911(cljs.core.rest(s__57912__$2)));
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
var G__57921 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__57921) : f.call(null,G__57921));
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
var seq__57922_57935 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__57923_57936 = null;
var count__57924_57937 = (0);
var i__57925_57938 = (0);
while(true){
if((i__57925_57938 < count__57924_57937)){
var controller_57939 = chunk__57923_57936.cljs$core$IIndexed$_nth$arity$2(null,i__57925_57938);
reitit.frontend.controllers.apply_controller(controller_57939,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57940 = seq__57922_57935;
var G__57941 = chunk__57923_57936;
var G__57942 = count__57924_57937;
var G__57943 = (i__57925_57938 + (1));
seq__57922_57935 = G__57940;
chunk__57923_57936 = G__57941;
count__57924_57937 = G__57942;
i__57925_57938 = G__57943;
continue;
} else {
var temp__5735__auto___57944 = cljs.core.seq(seq__57922_57935);
if(temp__5735__auto___57944){
var seq__57922_57945__$1 = temp__5735__auto___57944;
if(cljs.core.chunked_seq_QMARK_(seq__57922_57945__$1)){
var c__4609__auto___57946 = cljs.core.chunk_first(seq__57922_57945__$1);
var G__57947 = cljs.core.chunk_rest(seq__57922_57945__$1);
var G__57948 = c__4609__auto___57946;
var G__57949 = cljs.core.count(c__4609__auto___57946);
var G__57950 = (0);
seq__57922_57935 = G__57947;
chunk__57923_57936 = G__57948;
count__57924_57937 = G__57949;
i__57925_57938 = G__57950;
continue;
} else {
var controller_57951 = cljs.core.first(seq__57922_57945__$1);
reitit.frontend.controllers.apply_controller(controller_57951,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57952 = cljs.core.next(seq__57922_57945__$1);
var G__57953 = null;
var G__57954 = (0);
var G__57955 = (0);
seq__57922_57935 = G__57952;
chunk__57923_57936 = G__57953;
count__57924_57937 = G__57954;
i__57925_57938 = G__57955;
continue;
}
} else {
}
}
break;
}

var seq__57926_57956 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__57927_57957 = null;
var count__57928_57958 = (0);
var i__57929_57959 = (0);
while(true){
if((i__57929_57959 < count__57928_57958)){
var controller_57960 = chunk__57927_57957.cljs$core$IIndexed$_nth$arity$2(null,i__57929_57959);
reitit.frontend.controllers.apply_controller(controller_57960,new cljs.core.Keyword(null,"start","start",-355208981));


var G__57961 = seq__57926_57956;
var G__57962 = chunk__57927_57957;
var G__57963 = count__57928_57958;
var G__57964 = (i__57929_57959 + (1));
seq__57926_57956 = G__57961;
chunk__57927_57957 = G__57962;
count__57928_57958 = G__57963;
i__57929_57959 = G__57964;
continue;
} else {
var temp__5735__auto___57965 = cljs.core.seq(seq__57926_57956);
if(temp__5735__auto___57965){
var seq__57926_57966__$1 = temp__5735__auto___57965;
if(cljs.core.chunked_seq_QMARK_(seq__57926_57966__$1)){
var c__4609__auto___57967 = cljs.core.chunk_first(seq__57926_57966__$1);
var G__57968 = cljs.core.chunk_rest(seq__57926_57966__$1);
var G__57969 = c__4609__auto___57967;
var G__57970 = cljs.core.count(c__4609__auto___57967);
var G__57971 = (0);
seq__57926_57956 = G__57968;
chunk__57927_57957 = G__57969;
count__57928_57958 = G__57970;
i__57929_57959 = G__57971;
continue;
} else {
var controller_57972 = cljs.core.first(seq__57926_57966__$1);
reitit.frontend.controllers.apply_controller(controller_57972,new cljs.core.Keyword(null,"start","start",-355208981));


var G__57973 = cljs.core.next(seq__57926_57966__$1);
var G__57974 = null;
var G__57975 = (0);
var G__57976 = (0);
seq__57926_57956 = G__57973;
chunk__57927_57957 = G__57974;
count__57928_57958 = G__57975;
i__57929_57959 = G__57976;
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
