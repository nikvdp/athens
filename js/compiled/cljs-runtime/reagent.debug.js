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
var G__32152__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__32152 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32153__i = 0, G__32153__a = new Array(arguments.length -  0);
while (G__32153__i < G__32153__a.length) {G__32153__a[G__32153__i] = arguments[G__32153__i + 0]; ++G__32153__i;}
  args = new cljs.core.IndexedSeq(G__32153__a,0,null);
} 
return G__32152__delegate.call(this,args);};
G__32152.cljs$lang$maxFixedArity = 0;
G__32152.cljs$lang$applyTo = (function (arglist__32154){
var args = cljs.core.seq(arglist__32154);
return G__32152__delegate(args);
});
G__32152.cljs$core$IFn$_invoke$arity$variadic = G__32152__delegate;
return G__32152;
})()
);

(o.error = (function() { 
var G__32155__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__32155 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32156__i = 0, G__32156__a = new Array(arguments.length -  0);
while (G__32156__i < G__32156__a.length) {G__32156__a[G__32156__i] = arguments[G__32156__i + 0]; ++G__32156__i;}
  args = new cljs.core.IndexedSeq(G__32156__a,0,null);
} 
return G__32155__delegate.call(this,args);};
G__32155.cljs$lang$maxFixedArity = 0;
G__32155.cljs$lang$applyTo = (function (arglist__32157){
var args = cljs.core.seq(arglist__32157);
return G__32155__delegate(args);
});
G__32155.cljs$core$IFn$_invoke$arity$variadic = G__32155__delegate;
return G__32155;
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
