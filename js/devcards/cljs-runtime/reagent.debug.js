goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__31299__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31299 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31301__i = 0, G__31301__a = new Array(arguments.length -  0);
while (G__31301__i < G__31301__a.length) {G__31301__a[G__31301__i] = arguments[G__31301__i + 0]; ++G__31301__i;}
  args = new cljs.core.IndexedSeq(G__31301__a,0,null);
} 
return G__31299__delegate.call(this,args);};
G__31299.cljs$lang$maxFixedArity = 0;
G__31299.cljs$lang$applyTo = (function (arglist__31303){
var args = cljs.core.seq(arglist__31303);
return G__31299__delegate(args);
});
G__31299.cljs$core$IFn$_invoke$arity$variadic = G__31299__delegate;
return G__31299;
})()
);

(o.error = (function() { 
var G__31304__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31304 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31306__i = 0, G__31306__a = new Array(arguments.length -  0);
while (G__31306__i < G__31306__a.length) {G__31306__a[G__31306__i] = arguments[G__31306__i + 0]; ++G__31306__i;}
  args = new cljs.core.IndexedSeq(G__31306__a,0,null);
} 
return G__31304__delegate.call(this,args);};
G__31304.cljs$lang$maxFixedArity = 0;
G__31304.cljs$lang$applyTo = (function (arglist__31307){
var args = cljs.core.seq(arglist__31307);
return G__31304__delegate(args);
});
G__31304.cljs$core$IFn$_invoke$arity$variadic = G__31304__delegate;
return G__31304;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
