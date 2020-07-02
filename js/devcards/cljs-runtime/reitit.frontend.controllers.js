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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__50202,match){
var map__50203 = p__50202;
var map__50203__$1 = (((((!((map__50203 == null))))?(((((map__50203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50203):map__50203);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50203__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50203__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50203__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__50205(s__50206){
return (new cljs.core.LazySeq(null,(function (){
var s__50206__$1 = s__50206;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50206__$1);
if(temp__5735__auto__){
var s__50206__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50206__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50206__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50208 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50207 = (0);
while(true){
if((i__50207 < size__4581__auto__)){
var vec__50209 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50207);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50209,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50209,(1),null);
cljs.core.chunk_append(b__50208,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__50227 = (i__50207 + (1));
i__50207 = G__50227;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50208),reitit$frontend$controllers$get_identity_$_iter__50205(cljs.core.chunk_rest(s__50206__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50208),null);
}
} else {
var vec__50212 = cljs.core.first(s__50206__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50212,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50212,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__50205(cljs.core.rest(s__50206__$2)));
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
var G__50215 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__50215) : f.call(null,G__50215));
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
var seq__50216_50228 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__50217_50229 = null;
var count__50218_50230 = (0);
var i__50219_50231 = (0);
while(true){
if((i__50219_50231 < count__50218_50230)){
var controller_50232 = chunk__50217_50229.cljs$core$IIndexed$_nth$arity$2(null,i__50219_50231);
reitit.frontend.controllers.apply_controller(controller_50232,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__50233 = seq__50216_50228;
var G__50234 = chunk__50217_50229;
var G__50235 = count__50218_50230;
var G__50236 = (i__50219_50231 + (1));
seq__50216_50228 = G__50233;
chunk__50217_50229 = G__50234;
count__50218_50230 = G__50235;
i__50219_50231 = G__50236;
continue;
} else {
var temp__5735__auto___50237 = cljs.core.seq(seq__50216_50228);
if(temp__5735__auto___50237){
var seq__50216_50238__$1 = temp__5735__auto___50237;
if(cljs.core.chunked_seq_QMARK_(seq__50216_50238__$1)){
var c__4609__auto___50239 = cljs.core.chunk_first(seq__50216_50238__$1);
var G__50240 = cljs.core.chunk_rest(seq__50216_50238__$1);
var G__50241 = c__4609__auto___50239;
var G__50242 = cljs.core.count(c__4609__auto___50239);
var G__50243 = (0);
seq__50216_50228 = G__50240;
chunk__50217_50229 = G__50241;
count__50218_50230 = G__50242;
i__50219_50231 = G__50243;
continue;
} else {
var controller_50244 = cljs.core.first(seq__50216_50238__$1);
reitit.frontend.controllers.apply_controller(controller_50244,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__50245 = cljs.core.next(seq__50216_50238__$1);
var G__50246 = null;
var G__50247 = (0);
var G__50248 = (0);
seq__50216_50228 = G__50245;
chunk__50217_50229 = G__50246;
count__50218_50230 = G__50247;
i__50219_50231 = G__50248;
continue;
}
} else {
}
}
break;
}

var seq__50220_50249 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__50221_50250 = null;
var count__50222_50251 = (0);
var i__50223_50252 = (0);
while(true){
if((i__50223_50252 < count__50222_50251)){
var controller_50253 = chunk__50221_50250.cljs$core$IIndexed$_nth$arity$2(null,i__50223_50252);
reitit.frontend.controllers.apply_controller(controller_50253,new cljs.core.Keyword(null,"start","start",-355208981));


var G__50254 = seq__50220_50249;
var G__50255 = chunk__50221_50250;
var G__50256 = count__50222_50251;
var G__50257 = (i__50223_50252 + (1));
seq__50220_50249 = G__50254;
chunk__50221_50250 = G__50255;
count__50222_50251 = G__50256;
i__50223_50252 = G__50257;
continue;
} else {
var temp__5735__auto___50258 = cljs.core.seq(seq__50220_50249);
if(temp__5735__auto___50258){
var seq__50220_50259__$1 = temp__5735__auto___50258;
if(cljs.core.chunked_seq_QMARK_(seq__50220_50259__$1)){
var c__4609__auto___50260 = cljs.core.chunk_first(seq__50220_50259__$1);
var G__50261 = cljs.core.chunk_rest(seq__50220_50259__$1);
var G__50262 = c__4609__auto___50260;
var G__50263 = cljs.core.count(c__4609__auto___50260);
var G__50264 = (0);
seq__50220_50249 = G__50261;
chunk__50221_50250 = G__50262;
count__50222_50251 = G__50263;
i__50223_50252 = G__50264;
continue;
} else {
var controller_50265 = cljs.core.first(seq__50220_50259__$1);
reitit.frontend.controllers.apply_controller(controller_50265,new cljs.core.Keyword(null,"start","start",-355208981));


var G__50266 = cljs.core.next(seq__50220_50259__$1);
var G__50267 = null;
var G__50268 = (0);
var G__50269 = (0);
seq__50220_50249 = G__50266;
chunk__50221_50250 = G__50267;
count__50222_50251 = G__50268;
i__50223_50252 = G__50269;
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
