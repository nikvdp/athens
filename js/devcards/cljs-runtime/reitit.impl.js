goog.provide('reitit.impl');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('meta_merge.core');
goog.require('reitit.trie');
goog.require('reitit.exception');
reitit.impl.parse = (function reitit$impl$parse(path,opts){
var path__$1 = reitit.trie.normalize(path,opts);
var path_parts = reitit.trie.split_path(path__$1,opts);
var path_params = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,path_parts)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),path_params,new cljs.core.Keyword(null,"path-parts","path-parts",945822894),path_parts,new cljs.core.Keyword(null,"path","path",-188191168),path__$1], null);
});
reitit.impl.wild_path_QMARK_ = (function reitit$impl$wild_path_QMARK_(path,opts){
return cljs.core.boolean$(cljs.core.seq(new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(reitit.impl.parse(path,opts))));
});
reitit.impl.__GT_wild_route_QMARK_ = (function reitit$impl$__GT_wild_route_QMARK_(opts){
return (function (p__49778){
var vec__49779 = p__49778;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49779,(0),null);
return cljs.core.boolean$(cljs.core.seq(new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(reitit.impl.parse(path,opts))));
});
});
/**
 * Applies a function to every value of a map, updates the value if not nil.
 *   Also works on vectors. Maintains key for maps, order for vectors.
 */
reitit.impl.maybe_map_values = (function reitit$impl$maybe_map_values(f,coll){
return cljs.core.reduce_kv((function (coll__$1,k,v){
var temp__5737__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v));
if((temp__5737__auto__ == null)){
return coll__$1;
} else {
var v_SINGLEQUOTE_ = temp__5737__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coll__$1,k,v_SINGLEQUOTE_);
}
}),coll,coll);
});
reitit.impl.walk = (function reitit$impl$walk(raw_routes,p__49784){
var map__49785 = p__49784;
var map__49785__$1 = (((((!((map__49785 == null))))?(((((map__49785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49785):map__49785);
var opts = map__49785__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49785__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49785__$1,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var routes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49785__$1,new cljs.core.Keyword(null,"routes","routes",457900162),cljs.core.PersistentVector.EMPTY);
var expand = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49785__$1,new cljs.core.Keyword(null,"expand","expand",595248157));
var walk_many = (function reitit$impl$walk_$_walk_many(p,m,r){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__49782_SHARP_,p2__49783_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__49782_SHARP_,walk_one(p,m,p2__49783_SHARP_));
}),cljs.core.PersistentVector.EMPTY,r);
});
var walk_one = (function reitit$impl$walk_$_walk_one(pacc,macc,routes__$1){
if(cljs.core.vector_QMARK_(cljs.core.first(routes__$1))){
return walk_many(pacc,macc,routes__$1);
} else {
if(typeof cljs.core.first(routes__$1) === 'string'){
var vec__49796 = routes__$1;
var seq__49797 = cljs.core.seq(vec__49796);
var first__49798 = cljs.core.first(seq__49797);
var seq__49797__$1 = cljs.core.next(seq__49797);
var path__$1 = first__49798;
var vec__49799 = seq__49797__$1;
var maybe_arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49799,(0),null);
var args = vec__49799;
var vec__49802 = ((((cljs.core.vector_QMARK_(maybe_arg)) || (((cljs.core.sequential_QMARK_(maybe_arg)) && (cljs.core.sequential_QMARK_(cljs.core.first(maybe_arg))))) || ((maybe_arg == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maybe_arg,cljs.core.rest(args)], null));
var data__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49802,(0),null);
var childs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49802,(1),null);
var macc__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(macc,(expand.cljs$core$IFn$_invoke$arity$2 ? expand.cljs$core$IFn$_invoke$arity$2(data__$1,opts) : expand.call(null,data__$1,opts)));
var child_routes = walk_many([cljs.core.str.cljs$core$IFn$_invoke$arity$1(pacc),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1)].join(''),macc__$1,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,childs));
if(cljs.core.seq(childs)){
return cljs.core.seq(child_routes);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pacc),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1)].join(''),macc__$1], null)], null);
}
} else {
return null;
}
}
});
return walk_one(path,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,data),raw_routes);
});
reitit.impl.map_data = (function reitit$impl$map_data(f,routes){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__49805){
var vec__49806 = p__49805;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49806,(0),null);
var ds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49806,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p,ds) : f.call(null,p,ds))], null);
}),routes);
});
reitit.impl.merge_data = (function reitit$impl$merge_data(p,x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__49809){
var vec__49810 = p__49809;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49810,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49810,(1),null);
try{return meta_merge.core.meta_merge.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]));
}catch (e49813){if((e49813 instanceof Error)){
var e = e49813;
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reitit.impl","merge-data","reitit.impl/merge-data",-588218417),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),p,new cljs.core.Keyword(null,"left","left",-399115937),acc,new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]),new cljs.core.Keyword(null,"exception","exception",-335277064),e], null));
} else {
throw e49813;

}
}}),cljs.core.PersistentArrayMap.EMPTY,x);
});
reitit.impl.resolve_routes = (function reitit$impl$resolve_routes(raw_routes,p__49815){
var map__49816 = p__49815;
var map__49816__$1 = (((((!((map__49816 == null))))?(((((map__49816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49816):map__49816);
var opts = map__49816__$1;
var coerce = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49816__$1,new cljs.core.Keyword(null,"coerce","coerce",1917884504));
var G__49818 = reitit.impl.map_data(reitit.impl.merge_data,reitit.impl.walk(raw_routes,opts));
if(cljs.core.truth_(coerce)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__49814_SHARP_){
return (coerce.cljs$core$IFn$_invoke$arity$2 ? coerce.cljs$core$IFn$_invoke$arity$2(p1__49814_SHARP_,opts) : coerce.call(null,p1__49814_SHARP_,opts));
})),G__49818);
} else {
return G__49818;
}
});
reitit.impl.path_conflicting_routes = (function reitit$impl$path_conflicting_routes(routes,opts){
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (index,route){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [route,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__49819_SHARP_){
return reitit.trie.conflicting_paths_QMARK_(cljs.core.first(route),cljs.core.first(p1__49819_SHARP_),opts);
})),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(routes,(index + (1))))], null);
})),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.second))),routes));
});
reitit.impl.unresolved_conflicts = (function reitit$impl$unresolved_conflicts(path_conflicting){
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__49820){
var vec__49821 = p__49820;
var vec__49824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49821,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49824,(0),null);
var route_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49824,(1),null);
var conflicts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49821,(1),null);
var and__4174__auto__ = new cljs.core.Keyword(null,"conflicting","conflicting",2003828416).cljs$core$IFn$_invoke$arity$1(route_data);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.every_QMARK_(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"conflicting","conflicting",2003828416),cljs.core.second),conflicts);
} else {
return and__4174__auto__;
}
})),path_conflicting));
});
reitit.impl.conflicting_paths = (function reitit$impl$conflicting_paths(conflicts){
return cljs.core.set(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4582__auto__ = (function reitit$impl$conflicting_paths_$_iter__49827(s__49828){
return (new cljs.core.LazySeq(null,(function (){
var s__49828__$1 = s__49828;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49828__$1);
if(temp__5735__auto__){
var s__49828__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49828__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__49828__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__49830 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__49829 = (0);
while(true){
if((i__49829 < size__4581__auto__)){
var vec__49831 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__49829);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49831,(0),null);
var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49831,(1),null);
cljs.core.chunk_append(b__49830,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pc),cljs.core.first(p)));

var G__49873 = (i__49829 + (1));
i__49829 = G__49873;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49830),reitit$impl$conflicting_paths_$_iter__49827(cljs.core.chunk_rest(s__49828__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49830),null);
}
} else {
var vec__49834 = cljs.core.first(s__49828__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49834,(0),null);
var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49834,(1),null);
return cljs.core.cons(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pc),cljs.core.first(p)),reitit$impl$conflicting_paths_$_iter__49827(cljs.core.rest(s__49828__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(conflicts);
})()));
});
reitit.impl.name_conflicting_routes = (function reitit$impl$name_conflicting_routes(routes){
var G__49837 = routes;
var G__49837__$1 = (((G__49837 == null))?null:cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.second),G__49837));
var G__49837__$2 = (((G__49837__$1 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.first),G__49837__$1));
var G__49837__$3 = (((G__49837__$2 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.pos_QMARK_,cljs.core.count,cljs.core.butlast,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.second], 0)),G__49837__$2));
var G__49837__$4 = (((G__49837__$3 == null))?null:cljs.core.seq(G__49837__$3));
var G__49837__$5 = (((G__49837__$4 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49838){
var vec__49839 = p__49838;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49839,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49839,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.set(v)], null);
}),G__49837__$4));
if((G__49837__$5 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49837__$5);
}
});
reitit.impl.find_names = (function reitit$impl$find_names(routes,_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__49842_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__49842_SHARP_));
})),routes);
});
reitit.impl.compile_route = (function reitit$impl$compile_route(p__49843,p__49844){
var vec__49845 = p__49843;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49845,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49845,(1),null);
var route = vec__49845;
var map__49848 = p__49844;
var map__49848__$1 = (((((!((map__49848 == null))))?(((((map__49848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49848):map__49848);
var opts = map__49848__$1;
var compile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49848__$1,new cljs.core.Keyword(null,"compile","compile",608186429));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,m,(cljs.core.truth_(compile)?(compile.cljs$core$IFn$_invoke$arity$2 ? compile.cljs$core$IFn$_invoke$arity$2(route,opts) : compile.call(null,route,opts)):null)], null);
});
reitit.impl.compile_routes = (function reitit$impl$compile_routes(routes,opts){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__49850_SHARP_){
return reitit.impl.compile_route(p1__49850_SHARP_,opts);
}),routes));
});
reitit.impl.uncompile_routes = (function reitit$impl$uncompile_routes(routes){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.take,(2))),routes);
});
reitit.impl.path_for = (function reitit$impl$path_for(route,path_params){
if(cljs.core.truth_(new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(route))){
var temp__5733__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,part){
if(typeof part === 'string'){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,part);
} else {
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(path_params,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(part));
if(cljs.core.truth_(temp__5733__auto__)){
var p = temp__5733__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return cljs.core.reduced(null);
}
}
}),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"path-parts","path-parts",945822894).cljs$core$IFn$_invoke$arity$1(route));
if(cljs.core.truth_(temp__5733__auto__)){
var parts = temp__5733__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,parts);
} else {
return null;
}
} else {
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(route);
}
});
reitit.impl.throw_on_missing_path_params = (function reitit$impl$throw_on_missing_path_params(template,required,path_params){
if(cljs.core.every_QMARK_((function (p1__49851_SHARP_){
return cljs.core.contains_QMARK_(path_params,p1__49851_SHARP_);
}),required)){
return null;
} else {
var defined = cljs.core.set(cljs.core.keys(path_params));
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(required,defined);
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(["missing path-params for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(template)," -> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(missing)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),path_params,new cljs.core.Keyword(null,"required","required",1807647006),required], null));
}
});
reitit.impl.fast_assoc = (function reitit$impl$fast_assoc(a,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,k,v);
});
reitit.impl.fast_map = (function reitit$impl$fast_map(m){
return m;
});
reitit.impl.fast_get = (function reitit$impl$fast_get(m,k){
return (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(k) : m.call(null,k));
});
reitit.impl.strip_nils = (function reitit$impl$strip_nils(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second),m));
});
reitit.impl.url_encode = (function reitit$impl$url_encode(s){
if(cljs.core.truth_(s)){
return encodeURIComponent(s);
} else {
return null;
}
});
reitit.impl.maybe_url_decode = (function reitit$impl$maybe_url_decode(s){
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});
reitit.impl.url_decode = (function reitit$impl$url_decode(s){
var or__4185__auto__ = reitit.impl.maybe_url_decode(s);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return s;
}
});
reitit.impl.form_encode = (function reitit$impl$form_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace(encodeURIComponent(s),"%20","+");
} else {
return null;
}
});
reitit.impl.form_decode = (function reitit$impl$form_decode(s){
if(cljs.core.truth_(s)){
return decodeURIComponent(clojure.string.replace(s,"+"," "));
} else {
return null;
}
});
/**
 * URL-decodes maps and vectors
 */
reitit.impl.url_decode_coll = (function reitit$impl$url_decode_coll(coll){
return reitit.impl.maybe_map_values(reitit.impl.maybe_url_decode,coll);
});

/**
 * @interface
 */
reitit.impl.IntoString = function(){};

reitit.impl.into_string = (function reitit$impl$into_string(_){
if((((!((_ == null)))) && ((!((_.reitit$impl$IntoString$into_string$arity$1 == null)))))){
return _.reitit$impl$IntoString$into_string$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (reitit.impl.into_string[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (reitit.impl.into_string["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IntoString.into-string",_);
}
}
}
});

goog.object.set(reitit.impl.IntoString,"string",true);

var G__49853_49888 = reitit.impl.into_string;
var G__49854_49889 = "string";
var G__49855_49890 = (function (this$){
return this$;
});
goog.object.set(G__49853_49888,G__49854_49889,G__49855_49890);

(cljs.core.Keyword.prototype.reitit$impl$IntoString$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.reitit$impl$IntoString$into_string$arity$1 = (function (this$){
var this$__$1 = this;
var ns = cljs.core.namespace(this$__$1);
return [ns,(cljs.core.truth_(ns)?"/":null),cljs.core.name(this$__$1)].join('');
}));

goog.object.set(reitit.impl.IntoString,"boolean",true);

var G__49856_49891 = reitit.impl.into_string;
var G__49857_49892 = "boolean";
var G__49858_49893 = (function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
});
goog.object.set(G__49856_49891,G__49857_49892,G__49858_49893);

goog.object.set(reitit.impl.IntoString,"number",true);

var G__49859_49894 = reitit.impl.into_string;
var G__49860_49895 = "number";
var G__49861_49896 = (function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
});
goog.object.set(G__49859_49894,G__49860_49895,G__49861_49896);

goog.object.set(reitit.impl.IntoString,"object",true);

var G__49862_49897 = reitit.impl.into_string;
var G__49863_49898 = "object";
var G__49864_49899 = (function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
});
goog.object.set(G__49862_49897,G__49863_49898,G__49864_49899);

goog.object.set(reitit.impl.IntoString,"null",true);

var G__49865_49900 = reitit.impl.into_string;
var G__49866_49901 = "null";
var G__49867_49902 = (function (_){
return null;
});
goog.object.set(G__49865_49900,G__49866_49901,G__49867_49902);
/**
 * Convert parameters' values into URL-encoded strings, suitable for URL paths
 */
reitit.impl.path_params = (function reitit$impl$path_params(params){
return reitit.impl.maybe_map_values((function (p1__49868_SHARP_){
return reitit.impl.url_encode(reitit.impl.into_string(p1__49868_SHARP_));
}),params);
});
reitit.impl.query_parameter = (function reitit$impl$query_parameter(k,v){
return [reitit.impl.form_encode(reitit.impl.into_string(k)),"=",reitit.impl.form_encode(reitit.impl.into_string(v))].join('');
});
/**
 * shallow transform of query parameters into query string
 */
reitit.impl.query_string = (function reitit$impl$query_string(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49869){
var vec__49870 = p__49869;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49870,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49870,(1),null);
if(((cljs.core.sequential_QMARK_(v)) || (cljs.core.set_QMARK_(v)))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$3(reitit.impl.query_parameter,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(k),v));
} else {
return reitit.impl.query_parameter(k,v);
}
}),params));
});

//# sourceMappingURL=reitit.impl.js.map
