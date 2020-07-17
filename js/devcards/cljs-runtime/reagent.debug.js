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
var G__31570__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31570 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31571__i = 0, G__31571__a = new Array(arguments.length -  0);
while (G__31571__i < G__31571__a.length) {G__31571__a[G__31571__i] = arguments[G__31571__i + 0]; ++G__31571__i;}
  args = new cljs.core.IndexedSeq(G__31571__a,0,null);
} 
return G__31570__delegate.call(this,args);};
G__31570.cljs$lang$maxFixedArity = 0;
G__31570.cljs$lang$applyTo = (function (arglist__31572){
var args = cljs.core.seq(arglist__31572);
return G__31570__delegate(args);
});
G__31570.cljs$core$IFn$_invoke$arity$variadic = G__31570__delegate;
return G__31570;
})()
);

(o.error = (function() { 
var G__31573__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31573 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31574__i = 0, G__31574__a = new Array(arguments.length -  0);
while (G__31574__i < G__31574__a.length) {G__31574__a[G__31574__i] = arguments[G__31574__i + 0]; ++G__31574__i;}
  args = new cljs.core.IndexedSeq(G__31574__a,0,null);
} 
return G__31573__delegate.call(this,args);};
G__31573.cljs$lang$maxFixedArity = 0;
G__31573.cljs$lang$applyTo = (function (arglist__31575){
var args = cljs.core.seq(arglist__31575);
return G__31573__delegate(args);
});
G__31573.cljs$core$IFn$_invoke$arity$variadic = G__31573__delegate;
return G__31573;
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
