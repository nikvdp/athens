goog.provide('shadow.remote.runtime.cljs.js_builtins');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.core.protocols');
goog.object.set(clojure.core.protocols.Datafiable,"object",true);

var G__60955_60961 = clojure.core.protocols.datafy;
var G__60956_60962 = "object";
var G__60957_60963 = (function (o){
if((!((o.__proto__ === Object.prototype)))){
return o;
} else {
return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,key){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,key,goog.object.get(o,key));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),goog.object.getKeys(o))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("clojure.core.protocols","nav","clojure.core.protocols/nav",298936762,null),(function (coll,k,v){
return goog.object.get(o,k);
})], null));
}
});
goog.object.set(G__60955_60961,G__60956_60962,G__60957_60963);

goog.object.set(clojure.core.protocols.Datafiable,"array",true);

var G__60958_60964 = clojure.core.protocols.datafy;
var G__60959_60965 = "array";
var G__60960_60966 = (function (o){
return cljs.core.vec(o);
});
goog.object.set(G__60958_60964,G__60959_60965,G__60960_60966);

//# sourceMappingURL=shadow.remote.runtime.cljs.js_builtins.js.map
