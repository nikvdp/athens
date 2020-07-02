goog.provide('sci.impl.interpreter');
goog.require('cljs.core');
goog.require('cljs.tools.reader.reader_types');
goog.require('sci.impl.analyzer');
goog.require('sci.impl.fns');
goog.require('sci.impl.interop');
goog.require('sci.impl.macros');
goog.require('sci.impl.max_or_throw');
goog.require('sci.impl.opts');
goog.require('sci.impl.parser');
goog.require('sci.impl.types');
goog.require('sci.impl.utils');
goog.require('sci.impl.vars');

sci.impl.interpreter.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),"null",new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),"null",new cljs.core.Symbol(null,"let","let",358118826,null),"null",new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"or","or",1876275696,null),"null",new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),"null",new cljs.core.Symbol(null,"require","require",1172530194,null),"null",new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"quote","quote",1377916282,null),"null",new cljs.core.Symbol(null,"case","case",-1510733573,null),"null",new cljs.core.Symbol(null,"and","and",668631710,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
/**
 * The and macro from clojure.core.
 */
sci.impl.interpreter.eval_and = (function sci$impl$interpreter$eval_and(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.interpreter.interpret.call(null,ctx,x));
if(cljs.core.truth_(v)){
if(xs){
var G__67593 = xs;
args__$2 = G__67593;
continue;
} else {
return v;
}
} else {
return v;
}
} else {
return true;
}
break;
}
});
/**
 * The or macro from clojure.core.
 */
sci.impl.interpreter.eval_or = (function sci$impl$interpreter$eval_or(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.interpreter.interpret.call(null,ctx,x));
if(cljs.core.truth_(v)){
return v;
} else {
if(xs){
var G__67594 = xs;
args__$2 = G__67594;
continue;
} else {
return v;
}
}
} else {
return null;
}
break;
}
});
/**
 * The let macro from clojure.core
 */
sci.impl.interpreter.eval_let = (function sci$impl$interpreter$eval_let(var_args){
var args__4795__auto__ = [];
var len__4789__auto___67595 = arguments.length;
var i__4790__auto___67596 = (0);
while(true){
if((i__4790__auto___67596 < len__4789__auto___67595)){
args__4795__auto__.push((arguments[i__4790__auto___67596]));

var G__67597 = (i__4790__auto___67596 + (1));
i__4790__auto___67596 = G__67597;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,let_bindings,exprs){
var ctx__$1 = (function (){var ctx__$1 = ctx;
var let_bindings__$1 = let_bindings;
while(true){
var let_name = cljs.core.first(let_bindings__$1);
var let_bindings__$2 = cljs.core.rest(let_bindings__$1);
var let_val = cljs.core.first(let_bindings__$2);
var rest_let_bindings = cljs.core.next(let_bindings__$2);
var val_tag = (function (){var temp__5735__auto__ = cljs.core.meta(let_val);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
})();
var let_name__$1 = (cljs.core.truth_(val_tag)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(let_name,cljs.core.update,new cljs.core.Keyword(null,"tag","tag",-1290361223),((function (ctx__$1,let_bindings__$1,let_name,let_bindings__$2,let_val,rest_let_bindings,val_tag){
return (function (t){
if(cljs.core.truth_(t)){
return t;
} else {
return val_tag;
}
});})(ctx__$1,let_bindings__$1,let_name,let_bindings__$2,let_val,rest_let_bindings,val_tag))
):let_name);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx__$1,let_val) : sci.impl.interpreter.interpret.call(null,ctx__$1,let_val));
var ctx__$2 = cljs.core.assoc_in(ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),let_name__$1], null),v);
if(cljs.core.not(rest_let_bindings)){
return ctx__$2;
} else {
var G__67598 = ctx__$2;
var G__67599 = rest_let_bindings;
ctx__$1 = G__67598;
let_bindings__$1 = G__67599;
continue;
}
break;
}
})();
if(cljs.core.truth_(exprs)){
var exprs__$1 = exprs;
while(true){
var e = cljs.core.first(exprs__$1);
var ret = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx__$1,e) : sci.impl.interpreter.interpret.call(null,ctx__$1,e));
var nexprs = cljs.core.next(exprs__$1);
if(nexprs){
var G__67600 = nexprs;
exprs__$1 = G__67600;
continue;
} else {
return ret;
}
break;
}
} else {
return null;
}
}));

(sci.impl.interpreter.eval_let.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq66812){
var G__66813 = cljs.core.first(seq66812);
var seq66812__$1 = cljs.core.next(seq66812);
var G__66814 = cljs.core.first(seq66812__$1);
var seq66812__$2 = cljs.core.next(seq66812__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66813,G__66814,seq66812__$2);
}));

sci.impl.interpreter.eval_if = (function sci$impl$interpreter$eval_if(ctx,expr){
var cond = cljs.core.first(expr);
var expr__$1 = cljs.core.rest(expr);
var then = cljs.core.first(expr__$1);
var expr__$2 = cljs.core.rest(expr__$1);
var else$ = cljs.core.first(expr__$2);
if(cljs.core.truth_((sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,cond) : sci.impl.interpreter.interpret.call(null,ctx,cond)))){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,then) : sci.impl.interpreter.interpret.call(null,ctx,then));
} else {
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,else$) : sci.impl.interpreter.interpret.call(null,ctx,else$));
}
});
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__66818){
var vec__66819 = p__66818;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66819,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66819,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66819,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66819,(3),null);
var docstring = (cljs.core.truth_(_QMARK_init)?_QMARK_docstring:null);
var init = (cljs.core.truth_(docstring)?_QMARK_init:_QMARK_docstring);
var init__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,init) : sci.impl.interpreter.interpret.call(null,ctx,init));
var m = cljs.core.meta(var_name);
var m__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,m) : sci.impl.interpreter.interpret.call(null,ctx,m));
var cnn = sci.impl.vars.getName(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m__$1));
var assoc_in_env = (function (env){
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null));
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns,var_name);
var prev__$1 = (((!(sci.impl.vars.var_QMARK_(prev))))?sci.impl.vars.__GT_SciVar(prev,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)),cljs.core.meta(prev)):prev);
var v = (cljs.core.truth_((function (){var G__66822 = new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647);
var G__66823 = init__$1;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__66822,G__66823) : sci.impl.utils.kw_identical_QMARK_.call(null,G__66822,G__66823));
})())?(function (){var G__66824 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__66824,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__66824;
})():(function (){
sci.impl.vars.bindRoot(prev__$1,init__$1);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(prev__$1,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return prev__$1;
})()
);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,var_name,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});
var env = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),assoc_in_env);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,var_name], null));
});
sci.impl.interpreter.resolve_symbol = (function sci$impl$interpreter$resolve_symbol(ctx,sym){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var temp__5733__auto__ = cljs.core.find(bindings,sym);
if(cljs.core.truth_(temp__5733__auto__)){
var v = temp__5733__auto__;
return cljs.core.second(v);
} else {
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Could not resolve symbol: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),"\nks:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx)))].join(''),sym);
}
});
sci.impl.interpreter.parse_libspec = (function sci$impl$interpreter$parse_libspec(libspec){
if(cljs.core.sequential_QMARK_(libspec)){
var vec__66826 = libspec;
var seq__66827 = cljs.core.seq(vec__66826);
var first__66828 = cljs.core.first(seq__66827);
var seq__66827__$1 = cljs.core.next(seq__66827);
var lib_name = first__66828;
var opts = seq__66827__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__66833 = opts;
var vec__66835 = G__66833;
var seq__66836 = cljs.core.seq(vec__66835);
var first__66837 = cljs.core.first(seq__66836);
var seq__66836__$1 = cljs.core.next(seq__66836);
var opt_name = first__66837;
var first__66837__$1 = cljs.core.first(seq__66836__$1);
var seq__66836__$2 = cljs.core.next(seq__66836__$1);
var fst_opt = first__66837__$1;
var rst_opts = seq__66836__$2;
var ret__$1 = ret;
var G__66833__$1 = G__66833;
while(true){
var ret__$2 = ret__$1;
var vec__66844 = G__66833__$1;
var seq__66845 = cljs.core.seq(vec__66844);
var first__66846 = cljs.core.first(seq__66845);
var seq__66845__$1 = cljs.core.next(seq__66845);
var opt_name__$1 = first__66846;
var first__66846__$1 = cljs.core.first(seq__66845__$1);
var seq__66845__$2 = cljs.core.next(seq__66845__$1);
var fst_opt__$1 = first__66846__$1;
var rst_opts__$1 = seq__66845__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__66848 = opt_name__$1;
var G__66848__$1 = (((G__66848 instanceof cljs.core.Keyword))?G__66848.fqn:null);
switch (G__66848__$1) {
case "as":
var G__67602 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__67603 = rst_opts__$1;
ret__$1 = G__67602;
G__66833__$1 = G__67603;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__67604 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__67605 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__67604;
G__66833__$1 = G__67605;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__67606 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__67607 = rst_opts__$1;
ret__$1 = G__67606;
G__66833__$1 = G__67607;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66848__$1)].join('')));

}
}
break;
}
} else {
if((libspec instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),libspec], null);
} else {
throw (new Error(["Invalid libspec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(libspec)].join('')));

}
}
});
sci.impl.interpreter.handle_refer_all = (function sci$impl$interpreter$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__66849){
var vec__66851 = p__66849;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66851,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66851,(1),null);
if(cljs.core.truth_((((k instanceof cljs.core.Symbol))?(function (){var and__4174__auto__ = (include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : include_sym_QMARK_.call(null,k));
if(cljs.core.truth_(and__4174__auto__)){
return ((cljs.core.not(only__$1)) || (cljs.core.contains_QMARK_(only__$1,k)));
} else {
return and__4174__auto__;
}
})():false))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(k) : rename_sym.call(null,k)),v);
} else {
return ns;
}
}),the_current_ns,the_loaded_ns);
});
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(env,use_QMARK_,current_ns,the_loaded_ns,lib_name,p__66856){
var map__66857 = p__66856;
var map__66857__$1 = (((((!((map__66857 == null))))?(((((map__66857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66857):map__66857);
var _parsed_libspec = map__66857__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66857__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66857__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66857__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66857__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66857__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),as], null),lib_name):the_current_ns);
var rename_sym = (cljs.core.truth_(rename)?(function (sym){
var or__4185__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return sym;
}
}):cljs.core.identity);
var include_sym_QMARK_ = (cljs.core.truth_(exclude)?(function (){var excludes = cljs.core.set(exclude);
return (function (sym){
return (!(cljs.core.contains_QMARK_(excludes,sym)));
});
})():cljs.core.constantly(true));
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4185__auto__ = (function (){var G__66864 = new cljs.core.Keyword(null,"all","all",892129742);
var G__66865 = refer;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__66864,G__66865) : sci.impl.utils.kw_identical_QMARK_.call(null,G__66864,G__66865));
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return use_QMARK_;
}
})())?sci.impl.interpreter.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,null):((cljs.core.sequential_QMARK_(refer))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
if(cljs.core.truth_((include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(sym) : include_sym_QMARK_.call(null,sym)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(sym) : rename_sym.call(null,sym)),(function (){var temp__5733__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__66866 = temp__5733__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66866,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66866,(1),null);
return v;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')));
}
})());
} else {
return ns;
}
}),the_current_ns__$1,refer):(function(){throw (new Error(":refer value must be a sequential collection of symbols"))})()
)):(cljs.core.truth_(use_QMARK_)?sci.impl.interpreter.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,only):the_current_ns__$1
));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null),the_current_ns__$2);
return env__$1;
});
sci.impl.interpreter.handle_require_libspec = (function sci$impl$interpreter$handle_require_libspec(ctx,libspec){
var map__66869 = sci.impl.interpreter.parse_libspec(libspec);
var map__66869__$1 = (((((!((map__66869 == null))))?(((((map__66869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66869):map__66869);
var parsed_libspec = map__66869__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66869__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66869__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var env_STAR_ = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var env = cljs.core.deref(env_STAR_);
var cnn = sci.impl.vars.current_ns_name();
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var use_QMARK_ = new cljs.core.Keyword("sci.impl","use","sci.impl/use",1724565881).cljs$core$IFn$_invoke$arity$1(ctx);
var temp__5733__auto__ = (cljs.core.truth_(reload)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name));
if(cljs.core.truth_(temp__5733__auto__)){
var the_loaded_ns = temp__5733__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(env,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec));
} else {
var temp__5733__auto____$1 = new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5733__auto____$1)){
var load_fn = temp__5733__auto____$1;
var temp__5733__auto____$2 = (function (){var G__66871 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__66871) : load_fn.call(null,G__66871));
})();
if(cljs.core.truth_(temp__5733__auto____$2)){
var map__66872 = temp__5733__auto____$2;
var map__66872__$1 = (((((!((map__66872 == null))))?(((((map__66872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66872):map__66872);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66872__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66872__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__66875_67608 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__66876_67609 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__66875_67608,G__66876_67609) : sci.impl.interpreter.eval_string_STAR_.call(null,G__66875_67608,G__66876_67609));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e66874){if((e66874 instanceof Error)){
var e_67610 = e66874;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_67610;
} else {
throw e66874;

}
}
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib_name);
return sci.impl.interpreter.handle_require_libspec_env(env__$1,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec);
}));
} else {
var or__4185__auto__ = (cljs.core.truth_(reload)?(function (){var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name);
if(cljs.core.truth_(temp__5735__auto__)){
var the_loaded_ns = temp__5735__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(env,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
throw (new Error(["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"."].join('')));
}
}
} else {
throw (new Error(["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"."].join('')));
}
}
});
sci.impl.interpreter.eval_require = (function sci$impl$interpreter$eval_require(var_args){
var args__4795__auto__ = [];
var len__4789__auto___67611 = arguments.length;
var i__4790__auto___67612 = (0);
while(true){
if((i__4790__auto___67612 < len__4789__auto___67611)){
args__4795__auto__.push((arguments[i__4790__auto___67612]));

var G__67613 = (i__4790__auto___67612 + (1));
i__4790__auto___67612 = G__67613;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sci.impl.interpreter.eval_require.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
var libspecs = cljs.core.PersistentVector.EMPTY;
var current_libspec = null;
var args__$1 = args;
while(true){
if(cljs.core.truth_(args__$1)){
var ret = (function (){var G__66888 = ctx;
var G__66889 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__66888,G__66889) : sci.impl.interpreter.interpret.call(null,G__66888,G__66889));
})();
if((ret instanceof cljs.core.Symbol)){
var G__67614 = (function (){var G__66890 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__66890,current_libspec);
} else {
return G__66890;
}
})();
var G__67615 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__67616 = cljs.core.next(args__$1);
libspecs = G__67614;
current_libspec = G__67615;
args__$1 = G__67616;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__67617 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__67618 = null;
var G__67619 = cljs.core.next(args__$1);
libspecs = G__67617;
current_libspec = G__67618;
args__$1 = G__67619;
continue;
} else {
var G__67620 = (function (){var G__66891 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__66891,current_libspec);
} else {
return G__66891;
}
})();
var G__67621 = ret;
var G__67622 = cljs.core.next(args__$1);
libspecs = G__67620;
current_libspec = G__67621;
args__$1 = G__67622;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__66892 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__66892,current_libspec);
} else {
return G__66892;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__66877_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__66877_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq66878){
var G__66879 = cljs.core.first(seq66878);
var seq66878__$1 = cljs.core.next(seq66878);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66879,seq66878__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4795__auto__ = [];
var len__4789__auto___67623 = arguments.length;
var i__4790__auto___67624 = (0);
while(true){
if((i__4790__auto___67624 < len__4789__auto___67623)){
args__4795__auto__.push((arguments[i__4790__auto___67624]));

var G__67625 = (i__4790__auto___67624 + (1));
i__4790__auto___67624 = G__67625;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sci.impl.interpreter.eval_use.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","use","sci.impl/use",1724565881),true),args);
}));

(sci.impl.interpreter.eval_use.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq66897){
var G__66898 = cljs.core.first(seq66897);
var seq66897__$1 = cljs.core.next(seq66897);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66898,seq66897__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__66899){
var vec__66900 = p__66899;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66900,(0),null);
var map__66903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66900,(1),null);
var map__66903__$1 = (((((!((map__66903 == null))))?(((((map__66903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66903):map__66903);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66903__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66903__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66903__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5733__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__66905 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66905,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66905,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__66908 = ctx;
var G__66909 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__66908,G__66909) : sci.impl.interpreter.interpret.call(null,G__66908,G__66909));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__66910 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__66910__$1 = (((((!((map__66910 == null))))?(((((map__66910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66910):map__66910);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66910__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66910__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66910__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__66918 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__66919 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__66919);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__66918);
}}catch (e66912){if((e66912 instanceof Error)){
var e = e66912;
var temp__5733__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__66913 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__66914 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__66913,G__66914) : sci.impl.interpreter.interpret.call(null,G__66913,G__66914));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__66915 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66915,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66915,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e66912;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__66920){
var vec__66921 = p__66920;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66921,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66921,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66924_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__66924_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__66924_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__66926){
var vec__66927 = p__66926;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66927,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66927,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66927,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66925_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__66925_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__66925_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__66932,p__66933){
var map__66934 = p__66932;
var map__66934__$1 = (((((!((map__66934 == null))))?(((((map__66934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66934):map__66934);
var ctx = map__66934__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66934__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__66935 = p__66933;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66935,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66935,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66935,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66935,(3),null);
var instance_meta = cljs.core.meta(instance_expr);
var tag_class = new cljs.core.Keyword(null,"tag-class","tag-class",714967874).cljs$core$IFn$_invoke$arity$1(instance_meta);
var instance_expr_STAR_ = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,instance_expr) : sci.impl.interpreter.interpret.call(null,ctx,instance_expr));
var instance_class = (function (){var or__4185__auto__ = tag_class;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.type(instance_expr_STAR_);
}
})();
var instance_class_name = instance_class.name;
var instance_class_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(instance_class_name);
var allowed_QMARK_ = (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,instance_class_symbol);
}
})();
var target_class = (cljs.core.truth_(allowed_QMARK_)?instance_class:(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"public-class","public-class",1127293019).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(instance_expr_STAR_) : f.call(null,instance_expr_STAR_));
} else {
return null;
}
})());
if(cljs.core.truth_(target_class)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_class)," not allowed!"].join(''),instance_expr);
}

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66931_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__66931_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__66931_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__66940){
var vec__66941 = p__66940;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66941,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66941,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(ctx,p__66944){
var vec__66945 = p__66944;
var seq__66946 = cljs.core.seq(vec__66945);
var first__66947 = cljs.core.first(seq__66946);
var seq__66946__$1 = cljs.core.next(seq__66946);
var _ = first__66947;
var first__66947__$1 = cljs.core.first(seq__66946__$1);
var seq__66946__$2 = cljs.core.next(seq__66946__$1);
var ns_sym = first__66947__$1;
var exprs = seq__66946__$2;
var ns_sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_sym) : sci.impl.interpreter.interpret.call(null,ctx,ns_sym));
var exprs__$1 = exprs;
while(true){
if(exprs__$1){
var vec__66948 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66948,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66948,(1),null);
var G__66951_67626 = k;
var G__66951_67627__$1 = (((G__66951_67626 instanceof cljs.core.Keyword))?G__66951_67626.fqn:null);
switch (G__66951_67627__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__66951_67626,G__66951_67627__$1,vec__66948,k,v,ns_sym__$1,vec__66945,seq__66946,first__66947,seq__66946__$1,_,first__66947__$1,seq__66946__$2,ns_sym,exprs){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__66951_67626,G__66951_67627__$1,vec__66948,k,v,ns_sym__$1,vec__66945,seq__66946,first__66947,seq__66946__$1,_,first__66947__$1,seq__66946__$2,ns_sym,exprs))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66951_67627__$1)].join('')));

}

var G__67629 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__67629;
continue;
} else {
return null;
}
break;
}
});
sci.impl.interpreter.eval_resolve = (function sci$impl$interpreter$eval_resolve(ctx,sym){
var sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,sym) : sci.impl.interpreter.interpret.call(null,ctx,sym));
return cljs.core.second(sci.impl.analyzer.lookup(ctx,sym__$1,false));
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_resolve_state,sci.impl.interpreter.eval_resolve);
sci.impl.interpreter.macroexpand_1 = (function sci$impl$interpreter$macroexpand_1(ctx,expr){
var original_expr = expr;
if(cljs.core.seq_QMARK_(expr)){
var op = cljs.core.first(expr);
if((op instanceof cljs.core.Symbol)){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,op))){
return expr;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"for","for",316745208,null),null], null), null),op)){
return sci.impl.analyzer.analyze(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825),true),expr);
} else {
var f = sci.impl.analyzer.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,op,true);
var f__$1 = (cljs.core.truth_(((sci.impl.vars.var_QMARK_(f))?sci.impl.vars.isMacro(f):false))?cljs.core.deref(f):f);
if(cljs.core.truth_(sci.impl.analyzer.macro_QMARK_(f__$1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$1,original_expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr));
} else {
return expr;
}

}
}
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.interpreter.macroexpand = (function sci$impl$interpreter$macroexpand(ctx,form){
var ex = sci.impl.interpreter.macroexpand_1(ctx,form);
if((ex === form)){
return form;
} else {
return (sci.impl.interpreter.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.macroexpand.call(null,ctx,ex));
}
});
sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__66959){
var vec__66960 = p__66959;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66960,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66960,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66960,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__66967 = exprs;
var vec__66968 = G__66967;
var seq__66969 = cljs.core.seq(vec__66968);
var first__66970 = cljs.core.first(seq__66969);
var seq__66969__$1 = cljs.core.next(seq__66969);
var expr = first__66970;
var exprs__$1 = seq__66969__$1;
var G__66967__$1 = G__66967;
while(true){
var vec__66971 = G__66967__$1;
var seq__66972 = cljs.core.seq(vec__66971);
var first__66973 = cljs.core.first(seq__66972);
var seq__66972__$1 = cljs.core.next(seq__66972);
var expr__$1 = first__66973;
var exprs__$2 = seq__66972__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e66974){if((e66974 instanceof Error)){
var e = e66974;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e66974;

}
}})();
var temp__5733__auto__ = cljs.core.seq(exprs__$2);
if(temp__5733__auto__){
var exprs__$3 = temp__5733__auto__;
var G__67630 = exprs__$3;
G__66967__$1 = G__67630;
continue;
} else {
return ret;
}
break;
}
});
sci.impl.interpreter.eval_do = (function sci$impl$interpreter$eval_do(ctx,expr){
var temp__5735__auto__ = cljs.core.next(expr);
if(temp__5735__auto__){
var exprs = temp__5735__auto__;
return sci.impl.interpreter.eval_do_STAR_(ctx,exprs);
} else {
return null;
}
});
sci.impl.interpreter.fn_call = (function sci$impl$interpreter$fn_call(ctx,f,args){
var G__67170 = cljs.core.count(args);
switch (G__67170) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg66980 = (function (){var G__67171 = ctx;
var G__67172 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67171,G__67172) : sci.impl.interpreter.interpret.call(null,G__67171,G__67172));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg66980) : f.call(null,arg66980));

break;
case (2):
var arg66981 = (function (){var G__67173 = ctx;
var G__67174 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67173,G__67174) : sci.impl.interpreter.interpret.call(null,G__67173,G__67174));
})();
var args__$1 = cljs.core.rest(args);
var arg66982 = (function (){var G__67175 = ctx;
var G__67176 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67175,G__67176) : sci.impl.interpreter.interpret.call(null,G__67175,G__67176));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg66981,arg66982) : f.call(null,arg66981,arg66982));

break;
case (3):
var arg66983 = (function (){var G__67181 = ctx;
var G__67182 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67181,G__67182) : sci.impl.interpreter.interpret.call(null,G__67181,G__67182));
})();
var args__$1 = cljs.core.rest(args);
var arg66984 = (function (){var G__67183 = ctx;
var G__67184 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67183,G__67184) : sci.impl.interpreter.interpret.call(null,G__67183,G__67184));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg66985 = (function (){var G__67189 = ctx;
var G__67190 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67189,G__67190) : sci.impl.interpreter.interpret.call(null,G__67189,G__67190));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg66983,arg66984,arg66985) : f.call(null,arg66983,arg66984,arg66985));

break;
case (4):
var arg66986 = (function (){var G__67191 = ctx;
var G__67192 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67191,G__67192) : sci.impl.interpreter.interpret.call(null,G__67191,G__67192));
})();
var args__$1 = cljs.core.rest(args);
var arg66987 = (function (){var G__67197 = ctx;
var G__67198 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67197,G__67198) : sci.impl.interpreter.interpret.call(null,G__67197,G__67198));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg66988 = (function (){var G__67199 = ctx;
var G__67200 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67199,G__67200) : sci.impl.interpreter.interpret.call(null,G__67199,G__67200));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg66989 = (function (){var G__67201 = ctx;
var G__67202 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67201,G__67202) : sci.impl.interpreter.interpret.call(null,G__67201,G__67202));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg66986,arg66987,arg66988,arg66989) : f.call(null,arg66986,arg66987,arg66988,arg66989));

break;
case (5):
var arg66990 = (function (){var G__67203 = ctx;
var G__67204 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67203,G__67204) : sci.impl.interpreter.interpret.call(null,G__67203,G__67204));
})();
var args__$1 = cljs.core.rest(args);
var arg66991 = (function (){var G__67207 = ctx;
var G__67208 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67207,G__67208) : sci.impl.interpreter.interpret.call(null,G__67207,G__67208));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg66992 = (function (){var G__67210 = ctx;
var G__67211 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67210,G__67211) : sci.impl.interpreter.interpret.call(null,G__67210,G__67211));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg66993 = (function (){var G__67212 = ctx;
var G__67213 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67212,G__67213) : sci.impl.interpreter.interpret.call(null,G__67212,G__67213));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg66994 = (function (){var G__67214 = ctx;
var G__67215 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67214,G__67215) : sci.impl.interpreter.interpret.call(null,G__67214,G__67215));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg66990,arg66991,arg66992,arg66993,arg66994) : f.call(null,arg66990,arg66991,arg66992,arg66993,arg66994));

break;
case (6):
var arg66995 = (function (){var G__67216 = ctx;
var G__67217 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67216,G__67217) : sci.impl.interpreter.interpret.call(null,G__67216,G__67217));
})();
var args__$1 = cljs.core.rest(args);
var arg66996 = (function (){var G__67218 = ctx;
var G__67219 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67218,G__67219) : sci.impl.interpreter.interpret.call(null,G__67218,G__67219));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg66997 = (function (){var G__67220 = ctx;
var G__67221 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67220,G__67221) : sci.impl.interpreter.interpret.call(null,G__67220,G__67221));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg66998 = (function (){var G__67222 = ctx;
var G__67223 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67222,G__67223) : sci.impl.interpreter.interpret.call(null,G__67222,G__67223));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg66999 = (function (){var G__67224 = ctx;
var G__67225 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67224,G__67225) : sci.impl.interpreter.interpret.call(null,G__67224,G__67225));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67000 = (function (){var G__67226 = ctx;
var G__67227 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67226,G__67227) : sci.impl.interpreter.interpret.call(null,G__67226,G__67227));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg66995,arg66996,arg66997,arg66998,arg66999,arg67000) : f.call(null,arg66995,arg66996,arg66997,arg66998,arg66999,arg67000));

break;
case (7):
var arg67001 = (function (){var G__67228 = ctx;
var G__67229 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67228,G__67229) : sci.impl.interpreter.interpret.call(null,G__67228,G__67229));
})();
var args__$1 = cljs.core.rest(args);
var arg67002 = (function (){var G__67230 = ctx;
var G__67231 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67230,G__67231) : sci.impl.interpreter.interpret.call(null,G__67230,G__67231));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67003 = (function (){var G__67232 = ctx;
var G__67233 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67232,G__67233) : sci.impl.interpreter.interpret.call(null,G__67232,G__67233));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67004 = (function (){var G__67234 = ctx;
var G__67235 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67234,G__67235) : sci.impl.interpreter.interpret.call(null,G__67234,G__67235));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67005 = (function (){var G__67236 = ctx;
var G__67237 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67236,G__67237) : sci.impl.interpreter.interpret.call(null,G__67236,G__67237));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67006 = (function (){var G__67238 = ctx;
var G__67239 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67238,G__67239) : sci.impl.interpreter.interpret.call(null,G__67238,G__67239));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67007 = (function (){var G__67240 = ctx;
var G__67241 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67240,G__67241) : sci.impl.interpreter.interpret.call(null,G__67240,G__67241));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg67001,arg67002,arg67003,arg67004,arg67005,arg67006,arg67007) : f.call(null,arg67001,arg67002,arg67003,arg67004,arg67005,arg67006,arg67007));

break;
case (8):
var arg67008 = (function (){var G__67242 = ctx;
var G__67243 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67242,G__67243) : sci.impl.interpreter.interpret.call(null,G__67242,G__67243));
})();
var args__$1 = cljs.core.rest(args);
var arg67009 = (function (){var G__67244 = ctx;
var G__67245 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67244,G__67245) : sci.impl.interpreter.interpret.call(null,G__67244,G__67245));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67010 = (function (){var G__67246 = ctx;
var G__67247 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67246,G__67247) : sci.impl.interpreter.interpret.call(null,G__67246,G__67247));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67011 = (function (){var G__67248 = ctx;
var G__67249 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67248,G__67249) : sci.impl.interpreter.interpret.call(null,G__67248,G__67249));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67012 = (function (){var G__67250 = ctx;
var G__67251 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67250,G__67251) : sci.impl.interpreter.interpret.call(null,G__67250,G__67251));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67013 = (function (){var G__67252 = ctx;
var G__67253 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67252,G__67253) : sci.impl.interpreter.interpret.call(null,G__67252,G__67253));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67014 = (function (){var G__67254 = ctx;
var G__67255 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67254,G__67255) : sci.impl.interpreter.interpret.call(null,G__67254,G__67255));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67015 = (function (){var G__67256 = ctx;
var G__67257 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67256,G__67257) : sci.impl.interpreter.interpret.call(null,G__67256,G__67257));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg67008,arg67009,arg67010,arg67011,arg67012,arg67013,arg67014,arg67015) : f.call(null,arg67008,arg67009,arg67010,arg67011,arg67012,arg67013,arg67014,arg67015));

break;
case (9):
var arg67016 = (function (){var G__67258 = ctx;
var G__67259 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67258,G__67259) : sci.impl.interpreter.interpret.call(null,G__67258,G__67259));
})();
var args__$1 = cljs.core.rest(args);
var arg67017 = (function (){var G__67260 = ctx;
var G__67261 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67260,G__67261) : sci.impl.interpreter.interpret.call(null,G__67260,G__67261));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67018 = (function (){var G__67262 = ctx;
var G__67263 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67262,G__67263) : sci.impl.interpreter.interpret.call(null,G__67262,G__67263));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67019 = (function (){var G__67264 = ctx;
var G__67265 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67264,G__67265) : sci.impl.interpreter.interpret.call(null,G__67264,G__67265));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67020 = (function (){var G__67266 = ctx;
var G__67267 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67266,G__67267) : sci.impl.interpreter.interpret.call(null,G__67266,G__67267));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67021 = (function (){var G__67268 = ctx;
var G__67269 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67268,G__67269) : sci.impl.interpreter.interpret.call(null,G__67268,G__67269));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67022 = (function (){var G__67270 = ctx;
var G__67271 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67270,G__67271) : sci.impl.interpreter.interpret.call(null,G__67270,G__67271));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67023 = (function (){var G__67272 = ctx;
var G__67273 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67272,G__67273) : sci.impl.interpreter.interpret.call(null,G__67272,G__67273));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67024 = (function (){var G__67274 = ctx;
var G__67275 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67274,G__67275) : sci.impl.interpreter.interpret.call(null,G__67274,G__67275));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg67016,arg67017,arg67018,arg67019,arg67020,arg67021,arg67022,arg67023,arg67024) : f.call(null,arg67016,arg67017,arg67018,arg67019,arg67020,arg67021,arg67022,arg67023,arg67024));

break;
case (10):
var arg67025 = (function (){var G__67276 = ctx;
var G__67277 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67276,G__67277) : sci.impl.interpreter.interpret.call(null,G__67276,G__67277));
})();
var args__$1 = cljs.core.rest(args);
var arg67026 = (function (){var G__67278 = ctx;
var G__67279 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67278,G__67279) : sci.impl.interpreter.interpret.call(null,G__67278,G__67279));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67027 = (function (){var G__67280 = ctx;
var G__67281 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67280,G__67281) : sci.impl.interpreter.interpret.call(null,G__67280,G__67281));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67028 = (function (){var G__67282 = ctx;
var G__67283 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67282,G__67283) : sci.impl.interpreter.interpret.call(null,G__67282,G__67283));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67029 = (function (){var G__67284 = ctx;
var G__67285 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67284,G__67285) : sci.impl.interpreter.interpret.call(null,G__67284,G__67285));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67030 = (function (){var G__67286 = ctx;
var G__67287 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67286,G__67287) : sci.impl.interpreter.interpret.call(null,G__67286,G__67287));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67031 = (function (){var G__67288 = ctx;
var G__67289 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67288,G__67289) : sci.impl.interpreter.interpret.call(null,G__67288,G__67289));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67032 = (function (){var G__67290 = ctx;
var G__67291 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67290,G__67291) : sci.impl.interpreter.interpret.call(null,G__67290,G__67291));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67033 = (function (){var G__67292 = ctx;
var G__67293 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67292,G__67293) : sci.impl.interpreter.interpret.call(null,G__67292,G__67293));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67034 = (function (){var G__67294 = ctx;
var G__67295 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67294,G__67295) : sci.impl.interpreter.interpret.call(null,G__67294,G__67295));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg67025,arg67026,arg67027,arg67028,arg67029,arg67030,arg67031,arg67032,arg67033,arg67034) : f.call(null,arg67025,arg67026,arg67027,arg67028,arg67029,arg67030,arg67031,arg67032,arg67033,arg67034));

break;
case (11):
var arg67035 = (function (){var G__67296 = ctx;
var G__67297 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67296,G__67297) : sci.impl.interpreter.interpret.call(null,G__67296,G__67297));
})();
var args__$1 = cljs.core.rest(args);
var arg67036 = (function (){var G__67298 = ctx;
var G__67299 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67298,G__67299) : sci.impl.interpreter.interpret.call(null,G__67298,G__67299));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67037 = (function (){var G__67300 = ctx;
var G__67301 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67300,G__67301) : sci.impl.interpreter.interpret.call(null,G__67300,G__67301));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67038 = (function (){var G__67302 = ctx;
var G__67303 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67302,G__67303) : sci.impl.interpreter.interpret.call(null,G__67302,G__67303));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67039 = (function (){var G__67304 = ctx;
var G__67305 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67304,G__67305) : sci.impl.interpreter.interpret.call(null,G__67304,G__67305));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67040 = (function (){var G__67306 = ctx;
var G__67307 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67306,G__67307) : sci.impl.interpreter.interpret.call(null,G__67306,G__67307));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67041 = (function (){var G__67308 = ctx;
var G__67309 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67308,G__67309) : sci.impl.interpreter.interpret.call(null,G__67308,G__67309));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67042 = (function (){var G__67310 = ctx;
var G__67311 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67310,G__67311) : sci.impl.interpreter.interpret.call(null,G__67310,G__67311));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67043 = (function (){var G__67312 = ctx;
var G__67313 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67312,G__67313) : sci.impl.interpreter.interpret.call(null,G__67312,G__67313));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67044 = (function (){var G__67314 = ctx;
var G__67315 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67314,G__67315) : sci.impl.interpreter.interpret.call(null,G__67314,G__67315));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67045 = (function (){var G__67316 = ctx;
var G__67317 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67316,G__67317) : sci.impl.interpreter.interpret.call(null,G__67316,G__67317));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg67035,arg67036,arg67037,arg67038,arg67039,arg67040,arg67041,arg67042,arg67043,arg67044,arg67045) : f.call(null,arg67035,arg67036,arg67037,arg67038,arg67039,arg67040,arg67041,arg67042,arg67043,arg67044,arg67045));

break;
case (12):
var arg67046 = (function (){var G__67318 = ctx;
var G__67319 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67318,G__67319) : sci.impl.interpreter.interpret.call(null,G__67318,G__67319));
})();
var args__$1 = cljs.core.rest(args);
var arg67047 = (function (){var G__67320 = ctx;
var G__67321 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67320,G__67321) : sci.impl.interpreter.interpret.call(null,G__67320,G__67321));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67048 = (function (){var G__67322 = ctx;
var G__67323 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67322,G__67323) : sci.impl.interpreter.interpret.call(null,G__67322,G__67323));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67049 = (function (){var G__67324 = ctx;
var G__67325 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67324,G__67325) : sci.impl.interpreter.interpret.call(null,G__67324,G__67325));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67050 = (function (){var G__67326 = ctx;
var G__67327 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67326,G__67327) : sci.impl.interpreter.interpret.call(null,G__67326,G__67327));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67051 = (function (){var G__67328 = ctx;
var G__67329 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67328,G__67329) : sci.impl.interpreter.interpret.call(null,G__67328,G__67329));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67052 = (function (){var G__67330 = ctx;
var G__67331 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67330,G__67331) : sci.impl.interpreter.interpret.call(null,G__67330,G__67331));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67053 = (function (){var G__67332 = ctx;
var G__67333 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67332,G__67333) : sci.impl.interpreter.interpret.call(null,G__67332,G__67333));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67054 = (function (){var G__67334 = ctx;
var G__67335 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67334,G__67335) : sci.impl.interpreter.interpret.call(null,G__67334,G__67335));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67055 = (function (){var G__67336 = ctx;
var G__67337 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67336,G__67337) : sci.impl.interpreter.interpret.call(null,G__67336,G__67337));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67056 = (function (){var G__67338 = ctx;
var G__67339 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67338,G__67339) : sci.impl.interpreter.interpret.call(null,G__67338,G__67339));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67057 = (function (){var G__67340 = ctx;
var G__67341 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67340,G__67341) : sci.impl.interpreter.interpret.call(null,G__67340,G__67341));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg67046,arg67047,arg67048,arg67049,arg67050,arg67051,arg67052,arg67053,arg67054,arg67055,arg67056,arg67057) : f.call(null,arg67046,arg67047,arg67048,arg67049,arg67050,arg67051,arg67052,arg67053,arg67054,arg67055,arg67056,arg67057));

break;
case (13):
var arg67058 = (function (){var G__67342 = ctx;
var G__67343 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67342,G__67343) : sci.impl.interpreter.interpret.call(null,G__67342,G__67343));
})();
var args__$1 = cljs.core.rest(args);
var arg67059 = (function (){var G__67344 = ctx;
var G__67345 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67344,G__67345) : sci.impl.interpreter.interpret.call(null,G__67344,G__67345));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67060 = (function (){var G__67346 = ctx;
var G__67347 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67346,G__67347) : sci.impl.interpreter.interpret.call(null,G__67346,G__67347));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67061 = (function (){var G__67348 = ctx;
var G__67349 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67348,G__67349) : sci.impl.interpreter.interpret.call(null,G__67348,G__67349));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67062 = (function (){var G__67350 = ctx;
var G__67351 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67350,G__67351) : sci.impl.interpreter.interpret.call(null,G__67350,G__67351));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67063 = (function (){var G__67352 = ctx;
var G__67353 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67352,G__67353) : sci.impl.interpreter.interpret.call(null,G__67352,G__67353));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67064 = (function (){var G__67354 = ctx;
var G__67355 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67354,G__67355) : sci.impl.interpreter.interpret.call(null,G__67354,G__67355));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67065 = (function (){var G__67356 = ctx;
var G__67357 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67356,G__67357) : sci.impl.interpreter.interpret.call(null,G__67356,G__67357));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67066 = (function (){var G__67358 = ctx;
var G__67359 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67358,G__67359) : sci.impl.interpreter.interpret.call(null,G__67358,G__67359));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67067 = (function (){var G__67360 = ctx;
var G__67361 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67360,G__67361) : sci.impl.interpreter.interpret.call(null,G__67360,G__67361));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67068 = (function (){var G__67362 = ctx;
var G__67363 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67362,G__67363) : sci.impl.interpreter.interpret.call(null,G__67362,G__67363));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67069 = (function (){var G__67364 = ctx;
var G__67365 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67364,G__67365) : sci.impl.interpreter.interpret.call(null,G__67364,G__67365));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67070 = (function (){var G__67366 = ctx;
var G__67367 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67366,G__67367) : sci.impl.interpreter.interpret.call(null,G__67366,G__67367));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg67058,arg67059,arg67060,arg67061,arg67062,arg67063,arg67064,arg67065,arg67066,arg67067,arg67068,arg67069,arg67070) : f.call(null,arg67058,arg67059,arg67060,arg67061,arg67062,arg67063,arg67064,arg67065,arg67066,arg67067,arg67068,arg67069,arg67070));

break;
case (14):
var arg67071 = (function (){var G__67368 = ctx;
var G__67369 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67368,G__67369) : sci.impl.interpreter.interpret.call(null,G__67368,G__67369));
})();
var args__$1 = cljs.core.rest(args);
var arg67072 = (function (){var G__67370 = ctx;
var G__67371 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67370,G__67371) : sci.impl.interpreter.interpret.call(null,G__67370,G__67371));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67073 = (function (){var G__67372 = ctx;
var G__67373 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67372,G__67373) : sci.impl.interpreter.interpret.call(null,G__67372,G__67373));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67074 = (function (){var G__67374 = ctx;
var G__67375 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67374,G__67375) : sci.impl.interpreter.interpret.call(null,G__67374,G__67375));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67075 = (function (){var G__67376 = ctx;
var G__67377 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67376,G__67377) : sci.impl.interpreter.interpret.call(null,G__67376,G__67377));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67076 = (function (){var G__67378 = ctx;
var G__67379 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67378,G__67379) : sci.impl.interpreter.interpret.call(null,G__67378,G__67379));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67077 = (function (){var G__67380 = ctx;
var G__67381 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67380,G__67381) : sci.impl.interpreter.interpret.call(null,G__67380,G__67381));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67078 = (function (){var G__67382 = ctx;
var G__67383 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67382,G__67383) : sci.impl.interpreter.interpret.call(null,G__67382,G__67383));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67079 = (function (){var G__67384 = ctx;
var G__67385 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67384,G__67385) : sci.impl.interpreter.interpret.call(null,G__67384,G__67385));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67080 = (function (){var G__67386 = ctx;
var G__67387 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67386,G__67387) : sci.impl.interpreter.interpret.call(null,G__67386,G__67387));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67081 = (function (){var G__67388 = ctx;
var G__67389 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67388,G__67389) : sci.impl.interpreter.interpret.call(null,G__67388,G__67389));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67082 = (function (){var G__67390 = ctx;
var G__67391 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67390,G__67391) : sci.impl.interpreter.interpret.call(null,G__67390,G__67391));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67083 = (function (){var G__67392 = ctx;
var G__67393 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67392,G__67393) : sci.impl.interpreter.interpret.call(null,G__67392,G__67393));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg67084 = (function (){var G__67394 = ctx;
var G__67395 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67394,G__67395) : sci.impl.interpreter.interpret.call(null,G__67394,G__67395));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg67071,arg67072,arg67073,arg67074,arg67075,arg67076,arg67077,arg67078,arg67079,arg67080,arg67081,arg67082,arg67083,arg67084) : f.call(null,arg67071,arg67072,arg67073,arg67074,arg67075,arg67076,arg67077,arg67078,arg67079,arg67080,arg67081,arg67082,arg67083,arg67084));

break;
case (15):
var arg67085 = (function (){var G__67396 = ctx;
var G__67397 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67396,G__67397) : sci.impl.interpreter.interpret.call(null,G__67396,G__67397));
})();
var args__$1 = cljs.core.rest(args);
var arg67086 = (function (){var G__67398 = ctx;
var G__67399 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67398,G__67399) : sci.impl.interpreter.interpret.call(null,G__67398,G__67399));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67087 = (function (){var G__67400 = ctx;
var G__67401 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67400,G__67401) : sci.impl.interpreter.interpret.call(null,G__67400,G__67401));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67088 = (function (){var G__67402 = ctx;
var G__67403 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67402,G__67403) : sci.impl.interpreter.interpret.call(null,G__67402,G__67403));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67089 = (function (){var G__67404 = ctx;
var G__67405 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67404,G__67405) : sci.impl.interpreter.interpret.call(null,G__67404,G__67405));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67090 = (function (){var G__67406 = ctx;
var G__67407 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67406,G__67407) : sci.impl.interpreter.interpret.call(null,G__67406,G__67407));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67091 = (function (){var G__67408 = ctx;
var G__67409 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67408,G__67409) : sci.impl.interpreter.interpret.call(null,G__67408,G__67409));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67092 = (function (){var G__67410 = ctx;
var G__67411 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67410,G__67411) : sci.impl.interpreter.interpret.call(null,G__67410,G__67411));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67093 = (function (){var G__67412 = ctx;
var G__67413 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67412,G__67413) : sci.impl.interpreter.interpret.call(null,G__67412,G__67413));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67094 = (function (){var G__67414 = ctx;
var G__67415 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67414,G__67415) : sci.impl.interpreter.interpret.call(null,G__67414,G__67415));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67095 = (function (){var G__67416 = ctx;
var G__67417 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67416,G__67417) : sci.impl.interpreter.interpret.call(null,G__67416,G__67417));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67096 = (function (){var G__67418 = ctx;
var G__67419 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67418,G__67419) : sci.impl.interpreter.interpret.call(null,G__67418,G__67419));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67097 = (function (){var G__67420 = ctx;
var G__67421 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67420,G__67421) : sci.impl.interpreter.interpret.call(null,G__67420,G__67421));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg67098 = (function (){var G__67422 = ctx;
var G__67423 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67422,G__67423) : sci.impl.interpreter.interpret.call(null,G__67422,G__67423));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg67099 = (function (){var G__67424 = ctx;
var G__67425 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67424,G__67425) : sci.impl.interpreter.interpret.call(null,G__67424,G__67425));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg67085,arg67086,arg67087,arg67088,arg67089,arg67090,arg67091,arg67092,arg67093,arg67094,arg67095,arg67096,arg67097,arg67098,arg67099) : f.call(null,arg67085,arg67086,arg67087,arg67088,arg67089,arg67090,arg67091,arg67092,arg67093,arg67094,arg67095,arg67096,arg67097,arg67098,arg67099));

break;
case (16):
var arg67100 = (function (){var G__67426 = ctx;
var G__67427 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67426,G__67427) : sci.impl.interpreter.interpret.call(null,G__67426,G__67427));
})();
var args__$1 = cljs.core.rest(args);
var arg67101 = (function (){var G__67428 = ctx;
var G__67429 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67428,G__67429) : sci.impl.interpreter.interpret.call(null,G__67428,G__67429));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67102 = (function (){var G__67430 = ctx;
var G__67431 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67430,G__67431) : sci.impl.interpreter.interpret.call(null,G__67430,G__67431));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67103 = (function (){var G__67432 = ctx;
var G__67433 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67432,G__67433) : sci.impl.interpreter.interpret.call(null,G__67432,G__67433));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67104 = (function (){var G__67434 = ctx;
var G__67435 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67434,G__67435) : sci.impl.interpreter.interpret.call(null,G__67434,G__67435));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67105 = (function (){var G__67436 = ctx;
var G__67437 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67436,G__67437) : sci.impl.interpreter.interpret.call(null,G__67436,G__67437));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67106 = (function (){var G__67438 = ctx;
var G__67439 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67438,G__67439) : sci.impl.interpreter.interpret.call(null,G__67438,G__67439));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67107 = (function (){var G__67440 = ctx;
var G__67441 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67440,G__67441) : sci.impl.interpreter.interpret.call(null,G__67440,G__67441));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67108 = (function (){var G__67442 = ctx;
var G__67443 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67442,G__67443) : sci.impl.interpreter.interpret.call(null,G__67442,G__67443));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67109 = (function (){var G__67444 = ctx;
var G__67445 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67444,G__67445) : sci.impl.interpreter.interpret.call(null,G__67444,G__67445));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67110 = (function (){var G__67446 = ctx;
var G__67447 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67446,G__67447) : sci.impl.interpreter.interpret.call(null,G__67446,G__67447));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67111 = (function (){var G__67448 = ctx;
var G__67449 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67448,G__67449) : sci.impl.interpreter.interpret.call(null,G__67448,G__67449));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67112 = (function (){var G__67450 = ctx;
var G__67451 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67450,G__67451) : sci.impl.interpreter.interpret.call(null,G__67450,G__67451));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg67113 = (function (){var G__67452 = ctx;
var G__67453 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67452,G__67453) : sci.impl.interpreter.interpret.call(null,G__67452,G__67453));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg67114 = (function (){var G__67454 = ctx;
var G__67455 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67454,G__67455) : sci.impl.interpreter.interpret.call(null,G__67454,G__67455));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg67115 = (function (){var G__67456 = ctx;
var G__67457 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67456,G__67457) : sci.impl.interpreter.interpret.call(null,G__67456,G__67457));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg67100,arg67101,arg67102,arg67103,arg67104,arg67105,arg67106,arg67107,arg67108,arg67109,arg67110,arg67111,arg67112,arg67113,arg67114,arg67115) : f.call(null,arg67100,arg67101,arg67102,arg67103,arg67104,arg67105,arg67106,arg67107,arg67108,arg67109,arg67110,arg67111,arg67112,arg67113,arg67114,arg67115));

break;
case (17):
var arg67116 = (function (){var G__67458 = ctx;
var G__67459 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67458,G__67459) : sci.impl.interpreter.interpret.call(null,G__67458,G__67459));
})();
var args__$1 = cljs.core.rest(args);
var arg67117 = (function (){var G__67460 = ctx;
var G__67461 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67460,G__67461) : sci.impl.interpreter.interpret.call(null,G__67460,G__67461));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67118 = (function (){var G__67462 = ctx;
var G__67463 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67462,G__67463) : sci.impl.interpreter.interpret.call(null,G__67462,G__67463));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67119 = (function (){var G__67464 = ctx;
var G__67465 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67464,G__67465) : sci.impl.interpreter.interpret.call(null,G__67464,G__67465));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67120 = (function (){var G__67466 = ctx;
var G__67467 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67466,G__67467) : sci.impl.interpreter.interpret.call(null,G__67466,G__67467));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67121 = (function (){var G__67468 = ctx;
var G__67469 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67468,G__67469) : sci.impl.interpreter.interpret.call(null,G__67468,G__67469));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67122 = (function (){var G__67470 = ctx;
var G__67471 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67470,G__67471) : sci.impl.interpreter.interpret.call(null,G__67470,G__67471));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67123 = (function (){var G__67472 = ctx;
var G__67473 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67472,G__67473) : sci.impl.interpreter.interpret.call(null,G__67472,G__67473));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67124 = (function (){var G__67474 = ctx;
var G__67475 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67474,G__67475) : sci.impl.interpreter.interpret.call(null,G__67474,G__67475));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67125 = (function (){var G__67476 = ctx;
var G__67477 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67476,G__67477) : sci.impl.interpreter.interpret.call(null,G__67476,G__67477));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67126 = (function (){var G__67478 = ctx;
var G__67479 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67478,G__67479) : sci.impl.interpreter.interpret.call(null,G__67478,G__67479));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67127 = (function (){var G__67480 = ctx;
var G__67481 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67480,G__67481) : sci.impl.interpreter.interpret.call(null,G__67480,G__67481));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67128 = (function (){var G__67482 = ctx;
var G__67483 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67482,G__67483) : sci.impl.interpreter.interpret.call(null,G__67482,G__67483));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg67129 = (function (){var G__67484 = ctx;
var G__67485 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67484,G__67485) : sci.impl.interpreter.interpret.call(null,G__67484,G__67485));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg67130 = (function (){var G__67486 = ctx;
var G__67487 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67486,G__67487) : sci.impl.interpreter.interpret.call(null,G__67486,G__67487));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg67131 = (function (){var G__67488 = ctx;
var G__67489 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67488,G__67489) : sci.impl.interpreter.interpret.call(null,G__67488,G__67489));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg67132 = (function (){var G__67490 = ctx;
var G__67491 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67490,G__67491) : sci.impl.interpreter.interpret.call(null,G__67490,G__67491));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg67116,arg67117,arg67118,arg67119,arg67120,arg67121,arg67122,arg67123,arg67124,arg67125,arg67126,arg67127,arg67128,arg67129,arg67130,arg67131,arg67132) : f.call(null,arg67116,arg67117,arg67118,arg67119,arg67120,arg67121,arg67122,arg67123,arg67124,arg67125,arg67126,arg67127,arg67128,arg67129,arg67130,arg67131,arg67132));

break;
case (18):
var arg67133 = (function (){var G__67492 = ctx;
var G__67493 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67492,G__67493) : sci.impl.interpreter.interpret.call(null,G__67492,G__67493));
})();
var args__$1 = cljs.core.rest(args);
var arg67134 = (function (){var G__67494 = ctx;
var G__67495 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67494,G__67495) : sci.impl.interpreter.interpret.call(null,G__67494,G__67495));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67135 = (function (){var G__67496 = ctx;
var G__67497 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67496,G__67497) : sci.impl.interpreter.interpret.call(null,G__67496,G__67497));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67136 = (function (){var G__67498 = ctx;
var G__67499 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67498,G__67499) : sci.impl.interpreter.interpret.call(null,G__67498,G__67499));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67137 = (function (){var G__67500 = ctx;
var G__67501 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67500,G__67501) : sci.impl.interpreter.interpret.call(null,G__67500,G__67501));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67138 = (function (){var G__67502 = ctx;
var G__67503 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67502,G__67503) : sci.impl.interpreter.interpret.call(null,G__67502,G__67503));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67139 = (function (){var G__67504 = ctx;
var G__67505 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67504,G__67505) : sci.impl.interpreter.interpret.call(null,G__67504,G__67505));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67140 = (function (){var G__67506 = ctx;
var G__67507 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67506,G__67507) : sci.impl.interpreter.interpret.call(null,G__67506,G__67507));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67141 = (function (){var G__67508 = ctx;
var G__67509 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67508,G__67509) : sci.impl.interpreter.interpret.call(null,G__67508,G__67509));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67142 = (function (){var G__67510 = ctx;
var G__67511 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67510,G__67511) : sci.impl.interpreter.interpret.call(null,G__67510,G__67511));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67143 = (function (){var G__67512 = ctx;
var G__67513 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67512,G__67513) : sci.impl.interpreter.interpret.call(null,G__67512,G__67513));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67144 = (function (){var G__67514 = ctx;
var G__67515 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67514,G__67515) : sci.impl.interpreter.interpret.call(null,G__67514,G__67515));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67145 = (function (){var G__67516 = ctx;
var G__67517 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67516,G__67517) : sci.impl.interpreter.interpret.call(null,G__67516,G__67517));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg67146 = (function (){var G__67518 = ctx;
var G__67519 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67518,G__67519) : sci.impl.interpreter.interpret.call(null,G__67518,G__67519));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg67147 = (function (){var G__67520 = ctx;
var G__67521 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67520,G__67521) : sci.impl.interpreter.interpret.call(null,G__67520,G__67521));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg67148 = (function (){var G__67522 = ctx;
var G__67523 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67522,G__67523) : sci.impl.interpreter.interpret.call(null,G__67522,G__67523));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg67149 = (function (){var G__67524 = ctx;
var G__67525 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67524,G__67525) : sci.impl.interpreter.interpret.call(null,G__67524,G__67525));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg67150 = (function (){var G__67526 = ctx;
var G__67527 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67526,G__67527) : sci.impl.interpreter.interpret.call(null,G__67526,G__67527));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg67133,arg67134,arg67135,arg67136,arg67137,arg67138,arg67139,arg67140,arg67141,arg67142,arg67143,arg67144,arg67145,arg67146,arg67147,arg67148,arg67149,arg67150) : f.call(null,arg67133,arg67134,arg67135,arg67136,arg67137,arg67138,arg67139,arg67140,arg67141,arg67142,arg67143,arg67144,arg67145,arg67146,arg67147,arg67148,arg67149,arg67150));

break;
case (19):
var arg67151 = (function (){var G__67528 = ctx;
var G__67529 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67528,G__67529) : sci.impl.interpreter.interpret.call(null,G__67528,G__67529));
})();
var args__$1 = cljs.core.rest(args);
var arg67152 = (function (){var G__67530 = ctx;
var G__67531 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67530,G__67531) : sci.impl.interpreter.interpret.call(null,G__67530,G__67531));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67153 = (function (){var G__67532 = ctx;
var G__67533 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67532,G__67533) : sci.impl.interpreter.interpret.call(null,G__67532,G__67533));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67154 = (function (){var G__67534 = ctx;
var G__67535 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67534,G__67535) : sci.impl.interpreter.interpret.call(null,G__67534,G__67535));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67155 = (function (){var G__67536 = ctx;
var G__67537 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67536,G__67537) : sci.impl.interpreter.interpret.call(null,G__67536,G__67537));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67156 = (function (){var G__67538 = ctx;
var G__67539 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67538,G__67539) : sci.impl.interpreter.interpret.call(null,G__67538,G__67539));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67157 = (function (){var G__67540 = ctx;
var G__67541 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67540,G__67541) : sci.impl.interpreter.interpret.call(null,G__67540,G__67541));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67158 = (function (){var G__67542 = ctx;
var G__67543 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67542,G__67543) : sci.impl.interpreter.interpret.call(null,G__67542,G__67543));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67159 = (function (){var G__67544 = ctx;
var G__67545 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67544,G__67545) : sci.impl.interpreter.interpret.call(null,G__67544,G__67545));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67160 = (function (){var G__67546 = ctx;
var G__67547 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67546,G__67547) : sci.impl.interpreter.interpret.call(null,G__67546,G__67547));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67161 = (function (){var G__67548 = ctx;
var G__67549 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67548,G__67549) : sci.impl.interpreter.interpret.call(null,G__67548,G__67549));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67162 = (function (){var G__67550 = ctx;
var G__67551 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67550,G__67551) : sci.impl.interpreter.interpret.call(null,G__67550,G__67551));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67163 = (function (){var G__67552 = ctx;
var G__67553 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67552,G__67553) : sci.impl.interpreter.interpret.call(null,G__67552,G__67553));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg67164 = (function (){var G__67554 = ctx;
var G__67555 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67554,G__67555) : sci.impl.interpreter.interpret.call(null,G__67554,G__67555));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg67165 = (function (){var G__67556 = ctx;
var G__67557 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67556,G__67557) : sci.impl.interpreter.interpret.call(null,G__67556,G__67557));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg67166 = (function (){var G__67558 = ctx;
var G__67559 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67558,G__67559) : sci.impl.interpreter.interpret.call(null,G__67558,G__67559));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg67167 = (function (){var G__67560 = ctx;
var G__67561 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67560,G__67561) : sci.impl.interpreter.interpret.call(null,G__67560,G__67561));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg67168 = (function (){var G__67562 = ctx;
var G__67563 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67562,G__67563) : sci.impl.interpreter.interpret.call(null,G__67562,G__67563));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg67169 = (function (){var G__67564 = ctx;
var G__67565 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67564,G__67565) : sci.impl.interpreter.interpret.call(null,G__67564,G__67565));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg67151,arg67152,arg67153,arg67154,arg67155,arg67156,arg67157,arg67158,arg67159,arg67160,arg67161,arg67162,arg67163,arg67164,arg67165,arg67166,arg67167,arg67168,arg67169) : f.call(null,arg67151,arg67152,arg67153,arg67154,arg67155,arg67156,arg67157,arg67158,arg67159,arg67160,arg67161,arg67162,arg67163,arg67164,arg67165,arg67166,arg67167,arg67168,arg67169));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__4373_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__4373_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__4373_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__67566 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__67566)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__67566)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__67566)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__67566)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__67566)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__67566)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__67567 = ctx;
var G__67568 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67567,G__67568) : sci.impl.interpreter.interpret.call(null,G__67567,G__67568));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__67566)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__67566)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__67566)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__67566)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__67566)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__67566)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__67566)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__67566)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__67566)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__67569 = ctx;
var G__67570 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67569,G__67570) : sci.impl.interpreter.interpret.call(null,G__67569,G__67570));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__67566)){
return sci.impl.interpreter.eval_refer(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__67566)){
return (new cljs.core.LazySeq(null,(function (){var G__67571 = ctx;
var G__67572 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67571,G__67572) : sci.impl.interpreter.interpret.call(null,G__67571,G__67572));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__67566)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__67566)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__67566)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__67566)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67566)].join('')));

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
sci.impl.interpreter.eval_call = (function sci$impl$interpreter$eval_call(ctx,expr){
try{var f = cljs.core.first(expr);
var m = cljs.core.meta(f);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
if((((f instanceof cljs.core.Symbol)) && (cljs.core.not(op)))){
return sci.impl.interpreter.eval_special_call(ctx,f,expr);
} else {
if(cljs.core.truth_((function (){var G__67574 = op;
var G__67575 = new cljs.core.Keyword(null,"static-access","static-access",-1860919441);
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__67574,G__67575) : sci.impl.utils.kw_identical_QMARK_.call(null,G__67574,G__67575));
})())){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_static_method_invocation(ctx,expr);
}
} else {
var f__$1 = (cljs.core.truth_(op)?(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,f) : sci.impl.interpreter.interpret.call(null,ctx,f)):f);
if(cljs.core.ifn_QMARK_(f__$1)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.fn_call(ctx,f__$1,cljs.core.rest(expr));
}
} else {
throw (new Error(["Cannot call ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1], 0))," as a function."].join('')));
}

}
}
}catch (e67573){if((e67573 instanceof Error)){
var e = e67573;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e67573;

}
}});
sci.impl.interpreter.fix_meta = (function sci$impl$interpreter$fix_meta(v,old_meta){
if(cljs.core.truth_((((((!((v == null))))?(((((v.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IWithMeta$))))?true:false):false))?cljs.core.meta(v):false))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(v,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(old_meta));
}));
} else {
return v;
}
});
sci.impl.interpreter.interpret = (function sci$impl$interpreter$interpret(ctx,expr){
if((expr instanceof sci.impl.types.EvalVar)){
var v = expr.sci$impl$types$IBox$getVal$arity$1(null);
if(cljs.core.not(sci.impl.vars.isMacro(v))){
return cljs.core.deref(v);
} else {
throw (new Error(["Can't take value of a macro: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),""].join('')));
}
} else {
var m = cljs.core.meta(expr);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
var ret = ((cljs.core.not(op))?expr:(function (){var G__67582 = op;
var G__67582__$1 = (((G__67582 instanceof cljs.core.Keyword))?G__67582.fqn:null);
switch (G__67582__$1) {
case "call":
return sci.impl.interpreter.eval_call(ctx,expr);

break;
case "try":
return sci.impl.interpreter.eval_try(ctx,expr);

break;
case "fn":
return sci.impl.fns.eval_fn(ctx,sci.impl.interpreter.interpret,sci.impl.interpreter.eval_do_STAR_,expr);

break;
case "static-access":
return sci.impl.interop.get_static_field(expr);

break;
case "var-value":
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr,(0));

break;
case "deref!":
var v = cljs.core.first(expr);
var v__$1 = ((sci.impl.vars.var_QMARK_(v))?cljs.core.deref(v):v);
var v__$2 = cljs.core.force(v__$1);
return v__$2;

break;
case "resolve-sym":
return sci.impl.interpreter.resolve_symbol(ctx,expr);

break;
case "needs-ctx":
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expr,ctx);

break;
default:
if(cljs.core.map_QMARK_(expr)){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67579_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__67579_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__67579_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67580_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__67580_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__67580_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67581_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__67581_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__67581_SHARP_));
}),expr));
} else {
throw (new Error(["unexpected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr),", type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(expr)),", meta:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(expr))].join('')));

}
}

}
})());
var ret__$1 = (cljs.core.truth_(m)?sci.impl.interpreter.fix_meta(ret,m):ret);
var temp__5733__auto__ = ctx.get(new cljs.core.Keyword(null,"realize-max","realize-max",-1846442543));
if(cljs.core.truth_(temp__5733__auto__)){
var n = temp__5733__auto__;
return sci.impl.max_or_throw.max_or_throw(ret__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"expression","expression",202311876),expr),n);
} else {
return ret__$1;
}
}
});
sci.impl.interpreter.do_QMARK_ = (function sci$impl$interpreter$do_QMARK_(expr){
return ((cljs.core.list_QMARK_(expr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.first(expr))));
});
sci.impl.interpreter.eval_form = (function sci$impl$interpreter$eval_form(ctx,form){
if(sci.impl.interpreter.do_QMARK_(form)){
var exprs = cljs.core.rest(form);
var ret = null;
while(true){
if(cljs.core.seq(exprs)){
var G__67633 = cljs.core.rest(exprs);
var G__67634 = (function (){var G__67585 = ctx;
var G__67586 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__67585,G__67586) : sci.impl.interpreter.eval_form.call(null,G__67585,G__67586));
})();
exprs = G__67633;
ret = G__67634;
continue;
} else {
return ret;
}
break;
}
} else {
var analyzed = sci.impl.analyzer.analyze(ctx,form);
var ret = sci.impl.interpreter.interpret(ctx,analyzed);
return ret;
}
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_form_state,sci.impl.interpreter.eval_form);
sci.impl.interpreter.eval_string_STAR_ = (function sci$impl$interpreter$eval_string_STAR_(ctx,s){
sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns)]));

try{var reader = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
var ret = null;
while(true){
var expr = sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader);
if(cljs.core.truth_((function (){var G__67589 = new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006);
var G__67590 = expr;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__67589,G__67590) : sci.impl.utils.kw_identical_QMARK_.call(null,G__67589,G__67590));
})())){
return ret;
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx,expr);
var G__67635 = ret__$1;
ret = G__67635;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__67592 = arguments.length;
switch (G__67592) {
case 1:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2(s,null);
}));

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
var init_ctx = sci.impl.opts.init(opts);
var ret = sci.impl.interpreter.eval_string_STAR_(init_ctx,s);
return ret;
}));

(sci.impl.interpreter.eval_string.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=sci.impl.interpreter.js.map
