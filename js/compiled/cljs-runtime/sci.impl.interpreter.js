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
var G__67590 = xs;
args__$2 = G__67590;
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
var G__67591 = xs;
args__$2 = G__67591;
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
var len__4789__auto___67592 = arguments.length;
var i__4790__auto___67593 = (0);
while(true){
if((i__4790__auto___67593 < len__4789__auto___67592)){
args__4795__auto__.push((arguments[i__4790__auto___67593]));

var G__67594 = (i__4790__auto___67593 + (1));
i__4790__auto___67593 = G__67594;
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
var G__67595 = ctx__$2;
var G__67596 = rest_let_bindings;
ctx__$1 = G__67595;
let_bindings__$1 = G__67596;
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
var G__67597 = nexprs;
exprs__$1 = G__67597;
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
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq66824){
var G__66825 = cljs.core.first(seq66824);
var seq66824__$1 = cljs.core.next(seq66824);
var G__66826 = cljs.core.first(seq66824__$1);
var seq66824__$2 = cljs.core.next(seq66824__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66825,G__66826,seq66824__$2);
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
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__66830){
var vec__66831 = p__66830;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66831,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66831,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66831,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66831,(3),null);
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
var v = (cljs.core.truth_((function (){var G__66834 = new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647);
var G__66835 = init__$1;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__66834,G__66835) : sci.impl.utils.kw_identical_QMARK_.call(null,G__66834,G__66835));
})())?(function (){var G__66836 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__66836,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__66836;
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
var vec__66841 = libspec;
var seq__66842 = cljs.core.seq(vec__66841);
var first__66843 = cljs.core.first(seq__66842);
var seq__66842__$1 = cljs.core.next(seq__66842);
var lib_name = first__66843;
var opts = seq__66842__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__66847 = opts;
var vec__66848 = G__66847;
var seq__66849 = cljs.core.seq(vec__66848);
var first__66850 = cljs.core.first(seq__66849);
var seq__66849__$1 = cljs.core.next(seq__66849);
var opt_name = first__66850;
var first__66850__$1 = cljs.core.first(seq__66849__$1);
var seq__66849__$2 = cljs.core.next(seq__66849__$1);
var fst_opt = first__66850__$1;
var rst_opts = seq__66849__$2;
var ret__$1 = ret;
var G__66847__$1 = G__66847;
while(true){
var ret__$2 = ret__$1;
var vec__66855 = G__66847__$1;
var seq__66856 = cljs.core.seq(vec__66855);
var first__66857 = cljs.core.first(seq__66856);
var seq__66856__$1 = cljs.core.next(seq__66856);
var opt_name__$1 = first__66857;
var first__66857__$1 = cljs.core.first(seq__66856__$1);
var seq__66856__$2 = cljs.core.next(seq__66856__$1);
var fst_opt__$1 = first__66857__$1;
var rst_opts__$1 = seq__66856__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__66858 = opt_name__$1;
var G__66858__$1 = (((G__66858 instanceof cljs.core.Keyword))?G__66858.fqn:null);
switch (G__66858__$1) {
case "as":
var G__67599 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__67600 = rst_opts__$1;
ret__$1 = G__67599;
G__66847__$1 = G__67600;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__67601 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__67602 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__67601;
G__66847__$1 = G__67602;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__67603 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__67604 = rst_opts__$1;
ret__$1 = G__67603;
G__66847__$1 = G__67604;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66858__$1)].join('')));

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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__66859){
var vec__66860 = p__66859;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66860,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66860,(1),null);
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
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(env,use_QMARK_,current_ns,the_loaded_ns,lib_name,p__66863){
var map__66864 = p__66863;
var map__66864__$1 = (((((!((map__66864 == null))))?(((((map__66864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66864):map__66864);
var _parsed_libspec = map__66864__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66864__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66864__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66864__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66864__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66864__$1,new cljs.core.Keyword(null,"only","only",1907811652));
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
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4185__auto__ = (function (){var G__66868 = new cljs.core.Keyword(null,"all","all",892129742);
var G__66869 = refer;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__66868,G__66869) : sci.impl.utils.kw_identical_QMARK_.call(null,G__66868,G__66869));
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
var vec__66870 = temp__5733__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66870,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66870,(1),null);
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
var map__66874 = sci.impl.interpreter.parse_libspec(libspec);
var map__66874__$1 = (((((!((map__66874 == null))))?(((((map__66874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66874):map__66874);
var parsed_libspec = map__66874__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66874__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66874__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
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
var temp__5733__auto____$2 = (function (){var G__66876 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__66876) : load_fn.call(null,G__66876));
})();
if(cljs.core.truth_(temp__5733__auto____$2)){
var map__66877 = temp__5733__auto____$2;
var map__66877__$1 = (((((!((map__66877 == null))))?(((((map__66877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66877):map__66877);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66877__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66877__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__66881_67605 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__66882_67606 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__66881_67605,G__66882_67606) : sci.impl.interpreter.eval_string_STAR_.call(null,G__66881_67605,G__66882_67606));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e66879){if((e66879 instanceof Error)){
var e_67607 = e66879;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_67607;
} else {
throw e66879;

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
var len__4789__auto___67608 = arguments.length;
var i__4790__auto___67609 = (0);
while(true){
if((i__4790__auto___67609 < len__4789__auto___67608)){
args__4795__auto__.push((arguments[i__4790__auto___67609]));

var G__67610 = (i__4790__auto___67609 + (1));
i__4790__auto___67609 = G__67610;
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
var ret = (function (){var G__66898 = ctx;
var G__66899 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__66898,G__66899) : sci.impl.interpreter.interpret.call(null,G__66898,G__66899));
})();
if((ret instanceof cljs.core.Symbol)){
var G__67611 = (function (){var G__66900 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__66900,current_libspec);
} else {
return G__66900;
}
})();
var G__67612 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__67613 = cljs.core.next(args__$1);
libspecs = G__67611;
current_libspec = G__67612;
args__$1 = G__67613;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__67614 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__67615 = null;
var G__67616 = cljs.core.next(args__$1);
libspecs = G__67614;
current_libspec = G__67615;
args__$1 = G__67616;
continue;
} else {
var G__67617 = (function (){var G__66904 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__66904,current_libspec);
} else {
return G__66904;
}
})();
var G__67618 = ret;
var G__67619 = cljs.core.next(args__$1);
libspecs = G__67617;
current_libspec = G__67618;
args__$1 = G__67619;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__66905 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__66905,current_libspec);
} else {
return G__66905;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__66889_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__66889_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq66890){
var G__66891 = cljs.core.first(seq66890);
var seq66890__$1 = cljs.core.next(seq66890);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66891,seq66890__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4795__auto__ = [];
var len__4789__auto___67620 = arguments.length;
var i__4790__auto___67621 = (0);
while(true){
if((i__4790__auto___67621 < len__4789__auto___67620)){
args__4795__auto__.push((arguments[i__4790__auto___67621]));

var G__67622 = (i__4790__auto___67621 + (1));
i__4790__auto___67621 = G__67622;
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
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq66906){
var G__66907 = cljs.core.first(seq66906);
var seq66906__$1 = cljs.core.next(seq66906);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66907,seq66906__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__66916){
var vec__66917 = p__66916;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66917,(0),null);
var map__66920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66917,(1),null);
var map__66920__$1 = (((((!((map__66920 == null))))?(((((map__66920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66920):map__66920);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66920__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66920__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66920__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5733__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__66928 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66928,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66928,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__66932 = ctx;
var G__66933 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__66932,G__66933) : sci.impl.interpreter.interpret.call(null,G__66932,G__66933));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__66934 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__66934__$1 = (((((!((map__66934 == null))))?(((((map__66934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66934):map__66934);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66934__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66934__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66934__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__66942 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__66943 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__66943);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__66942);
}}catch (e66936){if((e66936 instanceof Error)){
var e = e66936;
var temp__5733__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__66937 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__66938 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__66937,G__66938) : sci.impl.interpreter.interpret.call(null,G__66937,G__66938));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__66939 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66939,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66939,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e66936;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__66944){
var vec__66945 = p__66944;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66945,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66945,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66948_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__66948_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__66948_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__66950){
var vec__66951 = p__66950;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66951,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66951,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66951,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66949_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__66949_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__66949_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__66956,p__66957){
var map__66958 = p__66956;
var map__66958__$1 = (((((!((map__66958 == null))))?(((((map__66958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66958):map__66958);
var ctx = map__66958__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66958__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__66959 = p__66957;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66959,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66959,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66959,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66959,(3),null);
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

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66955_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__66955_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__66955_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__66963){
var vec__66964 = p__66963;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66964,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66964,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(ctx,p__66967){
var vec__66968 = p__66967;
var seq__66969 = cljs.core.seq(vec__66968);
var first__66970 = cljs.core.first(seq__66969);
var seq__66969__$1 = cljs.core.next(seq__66969);
var _ = first__66970;
var first__66970__$1 = cljs.core.first(seq__66969__$1);
var seq__66969__$2 = cljs.core.next(seq__66969__$1);
var ns_sym = first__66970__$1;
var exprs = seq__66969__$2;
var ns_sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_sym) : sci.impl.interpreter.interpret.call(null,ctx,ns_sym));
var exprs__$1 = exprs;
while(true){
if(exprs__$1){
var vec__66971 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66971,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66971,(1),null);
var G__66974_67623 = k;
var G__66974_67624__$1 = (((G__66974_67623 instanceof cljs.core.Keyword))?G__66974_67623.fqn:null);
switch (G__66974_67624__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__66974_67623,G__66974_67624__$1,vec__66971,k,v,ns_sym__$1,vec__66968,seq__66969,first__66970,seq__66969__$1,_,first__66970__$1,seq__66969__$2,ns_sym,exprs){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__66974_67623,G__66974_67624__$1,vec__66971,k,v,ns_sym__$1,vec__66968,seq__66969,first__66970,seq__66969__$1,_,first__66970__$1,seq__66969__$2,ns_sym,exprs))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66974_67624__$1)].join('')));

}

var G__67626 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__67626;
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
sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__66975){
var vec__66976 = p__66975;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66976,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66976,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66976,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__66982 = exprs;
var vec__66983 = G__66982;
var seq__66984 = cljs.core.seq(vec__66983);
var first__66985 = cljs.core.first(seq__66984);
var seq__66984__$1 = cljs.core.next(seq__66984);
var expr = first__66985;
var exprs__$1 = seq__66984__$1;
var G__66982__$1 = G__66982;
while(true){
var vec__66986 = G__66982__$1;
var seq__66987 = cljs.core.seq(vec__66986);
var first__66988 = cljs.core.first(seq__66987);
var seq__66987__$1 = cljs.core.next(seq__66987);
var expr__$1 = first__66988;
var exprs__$2 = seq__66987__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e66989){if((e66989 instanceof Error)){
var e = e66989;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e66989;

}
}})();
var temp__5733__auto__ = cljs.core.seq(exprs__$2);
if(temp__5733__auto__){
var exprs__$3 = temp__5733__auto__;
var G__67627 = exprs__$3;
G__66982__$1 = G__67627;
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
var G__67182 = cljs.core.count(args);
switch (G__67182) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg66992 = (function (){var G__67183 = ctx;
var G__67184 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67183,G__67184) : sci.impl.interpreter.interpret.call(null,G__67183,G__67184));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg66992) : f.call(null,arg66992));

break;
case (2):
var arg66993 = (function (){var G__67185 = ctx;
var G__67186 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67185,G__67186) : sci.impl.interpreter.interpret.call(null,G__67185,G__67186));
})();
var args__$1 = cljs.core.rest(args);
var arg66994 = (function (){var G__67187 = ctx;
var G__67188 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67187,G__67188) : sci.impl.interpreter.interpret.call(null,G__67187,G__67188));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg66993,arg66994) : f.call(null,arg66993,arg66994));

break;
case (3):
var arg66995 = (function (){var G__67189 = ctx;
var G__67190 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67189,G__67190) : sci.impl.interpreter.interpret.call(null,G__67189,G__67190));
})();
var args__$1 = cljs.core.rest(args);
var arg66996 = (function (){var G__67191 = ctx;
var G__67192 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67191,G__67192) : sci.impl.interpreter.interpret.call(null,G__67191,G__67192));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg66997 = (function (){var G__67193 = ctx;
var G__67194 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67193,G__67194) : sci.impl.interpreter.interpret.call(null,G__67193,G__67194));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg66995,arg66996,arg66997) : f.call(null,arg66995,arg66996,arg66997));

break;
case (4):
var arg66998 = (function (){var G__67195 = ctx;
var G__67196 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67195,G__67196) : sci.impl.interpreter.interpret.call(null,G__67195,G__67196));
})();
var args__$1 = cljs.core.rest(args);
var arg66999 = (function (){var G__67197 = ctx;
var G__67198 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67197,G__67198) : sci.impl.interpreter.interpret.call(null,G__67197,G__67198));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67000 = (function (){var G__67199 = ctx;
var G__67200 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67199,G__67200) : sci.impl.interpreter.interpret.call(null,G__67199,G__67200));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67001 = (function (){var G__67201 = ctx;
var G__67202 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67201,G__67202) : sci.impl.interpreter.interpret.call(null,G__67201,G__67202));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg66998,arg66999,arg67000,arg67001) : f.call(null,arg66998,arg66999,arg67000,arg67001));

break;
case (5):
var arg67002 = (function (){var G__67203 = ctx;
var G__67204 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67203,G__67204) : sci.impl.interpreter.interpret.call(null,G__67203,G__67204));
})();
var args__$1 = cljs.core.rest(args);
var arg67003 = (function (){var G__67205 = ctx;
var G__67206 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67205,G__67206) : sci.impl.interpreter.interpret.call(null,G__67205,G__67206));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67004 = (function (){var G__67207 = ctx;
var G__67208 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67207,G__67208) : sci.impl.interpreter.interpret.call(null,G__67207,G__67208));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67005 = (function (){var G__67209 = ctx;
var G__67210 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67209,G__67210) : sci.impl.interpreter.interpret.call(null,G__67209,G__67210));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67006 = (function (){var G__67211 = ctx;
var G__67212 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67211,G__67212) : sci.impl.interpreter.interpret.call(null,G__67211,G__67212));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg67002,arg67003,arg67004,arg67005,arg67006) : f.call(null,arg67002,arg67003,arg67004,arg67005,arg67006));

break;
case (6):
var arg67007 = (function (){var G__67213 = ctx;
var G__67214 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67213,G__67214) : sci.impl.interpreter.interpret.call(null,G__67213,G__67214));
})();
var args__$1 = cljs.core.rest(args);
var arg67008 = (function (){var G__67215 = ctx;
var G__67216 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67215,G__67216) : sci.impl.interpreter.interpret.call(null,G__67215,G__67216));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67009 = (function (){var G__67217 = ctx;
var G__67218 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67217,G__67218) : sci.impl.interpreter.interpret.call(null,G__67217,G__67218));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67010 = (function (){var G__67219 = ctx;
var G__67220 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67219,G__67220) : sci.impl.interpreter.interpret.call(null,G__67219,G__67220));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67011 = (function (){var G__67221 = ctx;
var G__67222 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67221,G__67222) : sci.impl.interpreter.interpret.call(null,G__67221,G__67222));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67012 = (function (){var G__67223 = ctx;
var G__67224 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67223,G__67224) : sci.impl.interpreter.interpret.call(null,G__67223,G__67224));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg67007,arg67008,arg67009,arg67010,arg67011,arg67012) : f.call(null,arg67007,arg67008,arg67009,arg67010,arg67011,arg67012));

break;
case (7):
var arg67013 = (function (){var G__67225 = ctx;
var G__67226 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67225,G__67226) : sci.impl.interpreter.interpret.call(null,G__67225,G__67226));
})();
var args__$1 = cljs.core.rest(args);
var arg67014 = (function (){var G__67227 = ctx;
var G__67228 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67227,G__67228) : sci.impl.interpreter.interpret.call(null,G__67227,G__67228));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67015 = (function (){var G__67229 = ctx;
var G__67230 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67229,G__67230) : sci.impl.interpreter.interpret.call(null,G__67229,G__67230));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67016 = (function (){var G__67231 = ctx;
var G__67232 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67231,G__67232) : sci.impl.interpreter.interpret.call(null,G__67231,G__67232));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67017 = (function (){var G__67233 = ctx;
var G__67234 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67233,G__67234) : sci.impl.interpreter.interpret.call(null,G__67233,G__67234));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67018 = (function (){var G__67235 = ctx;
var G__67236 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67235,G__67236) : sci.impl.interpreter.interpret.call(null,G__67235,G__67236));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67019 = (function (){var G__67237 = ctx;
var G__67238 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67237,G__67238) : sci.impl.interpreter.interpret.call(null,G__67237,G__67238));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg67013,arg67014,arg67015,arg67016,arg67017,arg67018,arg67019) : f.call(null,arg67013,arg67014,arg67015,arg67016,arg67017,arg67018,arg67019));

break;
case (8):
var arg67020 = (function (){var G__67239 = ctx;
var G__67240 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67239,G__67240) : sci.impl.interpreter.interpret.call(null,G__67239,G__67240));
})();
var args__$1 = cljs.core.rest(args);
var arg67021 = (function (){var G__67241 = ctx;
var G__67242 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67241,G__67242) : sci.impl.interpreter.interpret.call(null,G__67241,G__67242));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67022 = (function (){var G__67243 = ctx;
var G__67244 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67243,G__67244) : sci.impl.interpreter.interpret.call(null,G__67243,G__67244));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67023 = (function (){var G__67245 = ctx;
var G__67246 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67245,G__67246) : sci.impl.interpreter.interpret.call(null,G__67245,G__67246));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67024 = (function (){var G__67247 = ctx;
var G__67248 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67247,G__67248) : sci.impl.interpreter.interpret.call(null,G__67247,G__67248));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67025 = (function (){var G__67249 = ctx;
var G__67250 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67249,G__67250) : sci.impl.interpreter.interpret.call(null,G__67249,G__67250));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67026 = (function (){var G__67251 = ctx;
var G__67252 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67251,G__67252) : sci.impl.interpreter.interpret.call(null,G__67251,G__67252));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67027 = (function (){var G__67253 = ctx;
var G__67254 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67253,G__67254) : sci.impl.interpreter.interpret.call(null,G__67253,G__67254));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg67020,arg67021,arg67022,arg67023,arg67024,arg67025,arg67026,arg67027) : f.call(null,arg67020,arg67021,arg67022,arg67023,arg67024,arg67025,arg67026,arg67027));

break;
case (9):
var arg67028 = (function (){var G__67255 = ctx;
var G__67256 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67255,G__67256) : sci.impl.interpreter.interpret.call(null,G__67255,G__67256));
})();
var args__$1 = cljs.core.rest(args);
var arg67029 = (function (){var G__67257 = ctx;
var G__67258 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67257,G__67258) : sci.impl.interpreter.interpret.call(null,G__67257,G__67258));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67030 = (function (){var G__67259 = ctx;
var G__67260 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67259,G__67260) : sci.impl.interpreter.interpret.call(null,G__67259,G__67260));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67031 = (function (){var G__67261 = ctx;
var G__67262 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67261,G__67262) : sci.impl.interpreter.interpret.call(null,G__67261,G__67262));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67032 = (function (){var G__67263 = ctx;
var G__67264 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67263,G__67264) : sci.impl.interpreter.interpret.call(null,G__67263,G__67264));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67033 = (function (){var G__67265 = ctx;
var G__67266 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67265,G__67266) : sci.impl.interpreter.interpret.call(null,G__67265,G__67266));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67034 = (function (){var G__67267 = ctx;
var G__67268 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67267,G__67268) : sci.impl.interpreter.interpret.call(null,G__67267,G__67268));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67035 = (function (){var G__67269 = ctx;
var G__67270 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67269,G__67270) : sci.impl.interpreter.interpret.call(null,G__67269,G__67270));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67036 = (function (){var G__67271 = ctx;
var G__67272 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67271,G__67272) : sci.impl.interpreter.interpret.call(null,G__67271,G__67272));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg67028,arg67029,arg67030,arg67031,arg67032,arg67033,arg67034,arg67035,arg67036) : f.call(null,arg67028,arg67029,arg67030,arg67031,arg67032,arg67033,arg67034,arg67035,arg67036));

break;
case (10):
var arg67037 = (function (){var G__67273 = ctx;
var G__67274 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67273,G__67274) : sci.impl.interpreter.interpret.call(null,G__67273,G__67274));
})();
var args__$1 = cljs.core.rest(args);
var arg67038 = (function (){var G__67275 = ctx;
var G__67276 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67275,G__67276) : sci.impl.interpreter.interpret.call(null,G__67275,G__67276));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67039 = (function (){var G__67277 = ctx;
var G__67278 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67277,G__67278) : sci.impl.interpreter.interpret.call(null,G__67277,G__67278));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67040 = (function (){var G__67279 = ctx;
var G__67280 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67279,G__67280) : sci.impl.interpreter.interpret.call(null,G__67279,G__67280));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67041 = (function (){var G__67281 = ctx;
var G__67282 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67281,G__67282) : sci.impl.interpreter.interpret.call(null,G__67281,G__67282));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67042 = (function (){var G__67283 = ctx;
var G__67284 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67283,G__67284) : sci.impl.interpreter.interpret.call(null,G__67283,G__67284));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67043 = (function (){var G__67285 = ctx;
var G__67286 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67285,G__67286) : sci.impl.interpreter.interpret.call(null,G__67285,G__67286));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67044 = (function (){var G__67287 = ctx;
var G__67288 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67287,G__67288) : sci.impl.interpreter.interpret.call(null,G__67287,G__67288));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67045 = (function (){var G__67289 = ctx;
var G__67290 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67289,G__67290) : sci.impl.interpreter.interpret.call(null,G__67289,G__67290));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67046 = (function (){var G__67291 = ctx;
var G__67292 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67291,G__67292) : sci.impl.interpreter.interpret.call(null,G__67291,G__67292));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg67037,arg67038,arg67039,arg67040,arg67041,arg67042,arg67043,arg67044,arg67045,arg67046) : f.call(null,arg67037,arg67038,arg67039,arg67040,arg67041,arg67042,arg67043,arg67044,arg67045,arg67046));

break;
case (11):
var arg67047 = (function (){var G__67293 = ctx;
var G__67294 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67293,G__67294) : sci.impl.interpreter.interpret.call(null,G__67293,G__67294));
})();
var args__$1 = cljs.core.rest(args);
var arg67048 = (function (){var G__67295 = ctx;
var G__67296 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67295,G__67296) : sci.impl.interpreter.interpret.call(null,G__67295,G__67296));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67049 = (function (){var G__67297 = ctx;
var G__67298 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67297,G__67298) : sci.impl.interpreter.interpret.call(null,G__67297,G__67298));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67050 = (function (){var G__67299 = ctx;
var G__67300 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67299,G__67300) : sci.impl.interpreter.interpret.call(null,G__67299,G__67300));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67051 = (function (){var G__67301 = ctx;
var G__67302 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67301,G__67302) : sci.impl.interpreter.interpret.call(null,G__67301,G__67302));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67052 = (function (){var G__67303 = ctx;
var G__67304 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67303,G__67304) : sci.impl.interpreter.interpret.call(null,G__67303,G__67304));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67053 = (function (){var G__67305 = ctx;
var G__67306 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67305,G__67306) : sci.impl.interpreter.interpret.call(null,G__67305,G__67306));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67054 = (function (){var G__67307 = ctx;
var G__67308 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67307,G__67308) : sci.impl.interpreter.interpret.call(null,G__67307,G__67308));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67055 = (function (){var G__67309 = ctx;
var G__67310 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67309,G__67310) : sci.impl.interpreter.interpret.call(null,G__67309,G__67310));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67056 = (function (){var G__67311 = ctx;
var G__67312 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67311,G__67312) : sci.impl.interpreter.interpret.call(null,G__67311,G__67312));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67057 = (function (){var G__67313 = ctx;
var G__67314 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67313,G__67314) : sci.impl.interpreter.interpret.call(null,G__67313,G__67314));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg67047,arg67048,arg67049,arg67050,arg67051,arg67052,arg67053,arg67054,arg67055,arg67056,arg67057) : f.call(null,arg67047,arg67048,arg67049,arg67050,arg67051,arg67052,arg67053,arg67054,arg67055,arg67056,arg67057));

break;
case (12):
var arg67058 = (function (){var G__67315 = ctx;
var G__67316 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67315,G__67316) : sci.impl.interpreter.interpret.call(null,G__67315,G__67316));
})();
var args__$1 = cljs.core.rest(args);
var arg67059 = (function (){var G__67317 = ctx;
var G__67318 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67317,G__67318) : sci.impl.interpreter.interpret.call(null,G__67317,G__67318));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67060 = (function (){var G__67319 = ctx;
var G__67320 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67319,G__67320) : sci.impl.interpreter.interpret.call(null,G__67319,G__67320));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67061 = (function (){var G__67321 = ctx;
var G__67322 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67321,G__67322) : sci.impl.interpreter.interpret.call(null,G__67321,G__67322));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67062 = (function (){var G__67323 = ctx;
var G__67324 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67323,G__67324) : sci.impl.interpreter.interpret.call(null,G__67323,G__67324));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67063 = (function (){var G__67325 = ctx;
var G__67326 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67325,G__67326) : sci.impl.interpreter.interpret.call(null,G__67325,G__67326));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67064 = (function (){var G__67327 = ctx;
var G__67328 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67327,G__67328) : sci.impl.interpreter.interpret.call(null,G__67327,G__67328));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67065 = (function (){var G__67329 = ctx;
var G__67330 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67329,G__67330) : sci.impl.interpreter.interpret.call(null,G__67329,G__67330));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67066 = (function (){var G__67331 = ctx;
var G__67332 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67331,G__67332) : sci.impl.interpreter.interpret.call(null,G__67331,G__67332));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67067 = (function (){var G__67333 = ctx;
var G__67334 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67333,G__67334) : sci.impl.interpreter.interpret.call(null,G__67333,G__67334));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67068 = (function (){var G__67335 = ctx;
var G__67336 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67335,G__67336) : sci.impl.interpreter.interpret.call(null,G__67335,G__67336));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67069 = (function (){var G__67337 = ctx;
var G__67338 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67337,G__67338) : sci.impl.interpreter.interpret.call(null,G__67337,G__67338));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg67058,arg67059,arg67060,arg67061,arg67062,arg67063,arg67064,arg67065,arg67066,arg67067,arg67068,arg67069) : f.call(null,arg67058,arg67059,arg67060,arg67061,arg67062,arg67063,arg67064,arg67065,arg67066,arg67067,arg67068,arg67069));

break;
case (13):
var arg67070 = (function (){var G__67339 = ctx;
var G__67340 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67339,G__67340) : sci.impl.interpreter.interpret.call(null,G__67339,G__67340));
})();
var args__$1 = cljs.core.rest(args);
var arg67071 = (function (){var G__67341 = ctx;
var G__67342 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67341,G__67342) : sci.impl.interpreter.interpret.call(null,G__67341,G__67342));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67072 = (function (){var G__67343 = ctx;
var G__67344 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67343,G__67344) : sci.impl.interpreter.interpret.call(null,G__67343,G__67344));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67073 = (function (){var G__67345 = ctx;
var G__67346 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67345,G__67346) : sci.impl.interpreter.interpret.call(null,G__67345,G__67346));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67074 = (function (){var G__67347 = ctx;
var G__67348 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67347,G__67348) : sci.impl.interpreter.interpret.call(null,G__67347,G__67348));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67075 = (function (){var G__67349 = ctx;
var G__67350 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67349,G__67350) : sci.impl.interpreter.interpret.call(null,G__67349,G__67350));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67076 = (function (){var G__67351 = ctx;
var G__67352 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67351,G__67352) : sci.impl.interpreter.interpret.call(null,G__67351,G__67352));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67077 = (function (){var G__67353 = ctx;
var G__67354 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67353,G__67354) : sci.impl.interpreter.interpret.call(null,G__67353,G__67354));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67078 = (function (){var G__67355 = ctx;
var G__67356 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67355,G__67356) : sci.impl.interpreter.interpret.call(null,G__67355,G__67356));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67079 = (function (){var G__67357 = ctx;
var G__67358 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67357,G__67358) : sci.impl.interpreter.interpret.call(null,G__67357,G__67358));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67080 = (function (){var G__67359 = ctx;
var G__67360 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67359,G__67360) : sci.impl.interpreter.interpret.call(null,G__67359,G__67360));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67081 = (function (){var G__67361 = ctx;
var G__67362 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67361,G__67362) : sci.impl.interpreter.interpret.call(null,G__67361,G__67362));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67082 = (function (){var G__67363 = ctx;
var G__67364 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67363,G__67364) : sci.impl.interpreter.interpret.call(null,G__67363,G__67364));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg67070,arg67071,arg67072,arg67073,arg67074,arg67075,arg67076,arg67077,arg67078,arg67079,arg67080,arg67081,arg67082) : f.call(null,arg67070,arg67071,arg67072,arg67073,arg67074,arg67075,arg67076,arg67077,arg67078,arg67079,arg67080,arg67081,arg67082));

break;
case (14):
var arg67083 = (function (){var G__67365 = ctx;
var G__67366 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67365,G__67366) : sci.impl.interpreter.interpret.call(null,G__67365,G__67366));
})();
var args__$1 = cljs.core.rest(args);
var arg67084 = (function (){var G__67367 = ctx;
var G__67368 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67367,G__67368) : sci.impl.interpreter.interpret.call(null,G__67367,G__67368));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67085 = (function (){var G__67369 = ctx;
var G__67370 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67369,G__67370) : sci.impl.interpreter.interpret.call(null,G__67369,G__67370));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67086 = (function (){var G__67371 = ctx;
var G__67372 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67371,G__67372) : sci.impl.interpreter.interpret.call(null,G__67371,G__67372));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67087 = (function (){var G__67373 = ctx;
var G__67374 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67373,G__67374) : sci.impl.interpreter.interpret.call(null,G__67373,G__67374));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67088 = (function (){var G__67375 = ctx;
var G__67376 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67375,G__67376) : sci.impl.interpreter.interpret.call(null,G__67375,G__67376));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67089 = (function (){var G__67377 = ctx;
var G__67378 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67377,G__67378) : sci.impl.interpreter.interpret.call(null,G__67377,G__67378));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67090 = (function (){var G__67379 = ctx;
var G__67380 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67379,G__67380) : sci.impl.interpreter.interpret.call(null,G__67379,G__67380));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67091 = (function (){var G__67381 = ctx;
var G__67382 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67381,G__67382) : sci.impl.interpreter.interpret.call(null,G__67381,G__67382));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67092 = (function (){var G__67383 = ctx;
var G__67384 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67383,G__67384) : sci.impl.interpreter.interpret.call(null,G__67383,G__67384));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67093 = (function (){var G__67385 = ctx;
var G__67386 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67385,G__67386) : sci.impl.interpreter.interpret.call(null,G__67385,G__67386));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67094 = (function (){var G__67387 = ctx;
var G__67388 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67387,G__67388) : sci.impl.interpreter.interpret.call(null,G__67387,G__67388));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67095 = (function (){var G__67389 = ctx;
var G__67390 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67389,G__67390) : sci.impl.interpreter.interpret.call(null,G__67389,G__67390));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg67096 = (function (){var G__67391 = ctx;
var G__67392 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67391,G__67392) : sci.impl.interpreter.interpret.call(null,G__67391,G__67392));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg67083,arg67084,arg67085,arg67086,arg67087,arg67088,arg67089,arg67090,arg67091,arg67092,arg67093,arg67094,arg67095,arg67096) : f.call(null,arg67083,arg67084,arg67085,arg67086,arg67087,arg67088,arg67089,arg67090,arg67091,arg67092,arg67093,arg67094,arg67095,arg67096));

break;
case (15):
var arg67097 = (function (){var G__67393 = ctx;
var G__67394 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67393,G__67394) : sci.impl.interpreter.interpret.call(null,G__67393,G__67394));
})();
var args__$1 = cljs.core.rest(args);
var arg67098 = (function (){var G__67395 = ctx;
var G__67396 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67395,G__67396) : sci.impl.interpreter.interpret.call(null,G__67395,G__67396));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67099 = (function (){var G__67397 = ctx;
var G__67398 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67397,G__67398) : sci.impl.interpreter.interpret.call(null,G__67397,G__67398));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67100 = (function (){var G__67399 = ctx;
var G__67400 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67399,G__67400) : sci.impl.interpreter.interpret.call(null,G__67399,G__67400));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67101 = (function (){var G__67401 = ctx;
var G__67402 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67401,G__67402) : sci.impl.interpreter.interpret.call(null,G__67401,G__67402));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67102 = (function (){var G__67403 = ctx;
var G__67404 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67403,G__67404) : sci.impl.interpreter.interpret.call(null,G__67403,G__67404));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67103 = (function (){var G__67405 = ctx;
var G__67406 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67405,G__67406) : sci.impl.interpreter.interpret.call(null,G__67405,G__67406));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67104 = (function (){var G__67407 = ctx;
var G__67408 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67407,G__67408) : sci.impl.interpreter.interpret.call(null,G__67407,G__67408));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67105 = (function (){var G__67409 = ctx;
var G__67410 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67409,G__67410) : sci.impl.interpreter.interpret.call(null,G__67409,G__67410));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67106 = (function (){var G__67411 = ctx;
var G__67412 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67411,G__67412) : sci.impl.interpreter.interpret.call(null,G__67411,G__67412));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67107 = (function (){var G__67413 = ctx;
var G__67414 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67413,G__67414) : sci.impl.interpreter.interpret.call(null,G__67413,G__67414));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67108 = (function (){var G__67415 = ctx;
var G__67416 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67415,G__67416) : sci.impl.interpreter.interpret.call(null,G__67415,G__67416));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67109 = (function (){var G__67417 = ctx;
var G__67418 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67417,G__67418) : sci.impl.interpreter.interpret.call(null,G__67417,G__67418));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg67110 = (function (){var G__67419 = ctx;
var G__67420 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67419,G__67420) : sci.impl.interpreter.interpret.call(null,G__67419,G__67420));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg67111 = (function (){var G__67421 = ctx;
var G__67422 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67421,G__67422) : sci.impl.interpreter.interpret.call(null,G__67421,G__67422));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg67097,arg67098,arg67099,arg67100,arg67101,arg67102,arg67103,arg67104,arg67105,arg67106,arg67107,arg67108,arg67109,arg67110,arg67111) : f.call(null,arg67097,arg67098,arg67099,arg67100,arg67101,arg67102,arg67103,arg67104,arg67105,arg67106,arg67107,arg67108,arg67109,arg67110,arg67111));

break;
case (16):
var arg67112 = (function (){var G__67423 = ctx;
var G__67424 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67423,G__67424) : sci.impl.interpreter.interpret.call(null,G__67423,G__67424));
})();
var args__$1 = cljs.core.rest(args);
var arg67113 = (function (){var G__67425 = ctx;
var G__67426 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67425,G__67426) : sci.impl.interpreter.interpret.call(null,G__67425,G__67426));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67114 = (function (){var G__67427 = ctx;
var G__67428 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67427,G__67428) : sci.impl.interpreter.interpret.call(null,G__67427,G__67428));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67115 = (function (){var G__67429 = ctx;
var G__67430 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67429,G__67430) : sci.impl.interpreter.interpret.call(null,G__67429,G__67430));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67116 = (function (){var G__67431 = ctx;
var G__67432 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67431,G__67432) : sci.impl.interpreter.interpret.call(null,G__67431,G__67432));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67117 = (function (){var G__67433 = ctx;
var G__67434 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67433,G__67434) : sci.impl.interpreter.interpret.call(null,G__67433,G__67434));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67118 = (function (){var G__67435 = ctx;
var G__67436 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67435,G__67436) : sci.impl.interpreter.interpret.call(null,G__67435,G__67436));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67119 = (function (){var G__67437 = ctx;
var G__67438 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67437,G__67438) : sci.impl.interpreter.interpret.call(null,G__67437,G__67438));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67120 = (function (){var G__67439 = ctx;
var G__67440 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67439,G__67440) : sci.impl.interpreter.interpret.call(null,G__67439,G__67440));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67121 = (function (){var G__67441 = ctx;
var G__67442 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67441,G__67442) : sci.impl.interpreter.interpret.call(null,G__67441,G__67442));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67122 = (function (){var G__67443 = ctx;
var G__67444 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67443,G__67444) : sci.impl.interpreter.interpret.call(null,G__67443,G__67444));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67123 = (function (){var G__67445 = ctx;
var G__67446 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67445,G__67446) : sci.impl.interpreter.interpret.call(null,G__67445,G__67446));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67124 = (function (){var G__67447 = ctx;
var G__67448 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67447,G__67448) : sci.impl.interpreter.interpret.call(null,G__67447,G__67448));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg67125 = (function (){var G__67449 = ctx;
var G__67450 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67449,G__67450) : sci.impl.interpreter.interpret.call(null,G__67449,G__67450));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg67126 = (function (){var G__67451 = ctx;
var G__67452 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67451,G__67452) : sci.impl.interpreter.interpret.call(null,G__67451,G__67452));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg67127 = (function (){var G__67453 = ctx;
var G__67454 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67453,G__67454) : sci.impl.interpreter.interpret.call(null,G__67453,G__67454));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg67112,arg67113,arg67114,arg67115,arg67116,arg67117,arg67118,arg67119,arg67120,arg67121,arg67122,arg67123,arg67124,arg67125,arg67126,arg67127) : f.call(null,arg67112,arg67113,arg67114,arg67115,arg67116,arg67117,arg67118,arg67119,arg67120,arg67121,arg67122,arg67123,arg67124,arg67125,arg67126,arg67127));

break;
case (17):
var arg67128 = (function (){var G__67455 = ctx;
var G__67456 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67455,G__67456) : sci.impl.interpreter.interpret.call(null,G__67455,G__67456));
})();
var args__$1 = cljs.core.rest(args);
var arg67129 = (function (){var G__67457 = ctx;
var G__67458 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67457,G__67458) : sci.impl.interpreter.interpret.call(null,G__67457,G__67458));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67130 = (function (){var G__67459 = ctx;
var G__67460 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67459,G__67460) : sci.impl.interpreter.interpret.call(null,G__67459,G__67460));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67131 = (function (){var G__67461 = ctx;
var G__67462 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67461,G__67462) : sci.impl.interpreter.interpret.call(null,G__67461,G__67462));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67132 = (function (){var G__67463 = ctx;
var G__67464 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67463,G__67464) : sci.impl.interpreter.interpret.call(null,G__67463,G__67464));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67133 = (function (){var G__67465 = ctx;
var G__67466 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67465,G__67466) : sci.impl.interpreter.interpret.call(null,G__67465,G__67466));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67134 = (function (){var G__67467 = ctx;
var G__67468 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67467,G__67468) : sci.impl.interpreter.interpret.call(null,G__67467,G__67468));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67135 = (function (){var G__67469 = ctx;
var G__67470 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67469,G__67470) : sci.impl.interpreter.interpret.call(null,G__67469,G__67470));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67136 = (function (){var G__67471 = ctx;
var G__67472 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67471,G__67472) : sci.impl.interpreter.interpret.call(null,G__67471,G__67472));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67137 = (function (){var G__67473 = ctx;
var G__67474 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67473,G__67474) : sci.impl.interpreter.interpret.call(null,G__67473,G__67474));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67138 = (function (){var G__67475 = ctx;
var G__67476 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67475,G__67476) : sci.impl.interpreter.interpret.call(null,G__67475,G__67476));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67139 = (function (){var G__67477 = ctx;
var G__67478 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67477,G__67478) : sci.impl.interpreter.interpret.call(null,G__67477,G__67478));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67140 = (function (){var G__67479 = ctx;
var G__67480 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67479,G__67480) : sci.impl.interpreter.interpret.call(null,G__67479,G__67480));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg67141 = (function (){var G__67481 = ctx;
var G__67482 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67481,G__67482) : sci.impl.interpreter.interpret.call(null,G__67481,G__67482));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg67142 = (function (){var G__67483 = ctx;
var G__67484 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67483,G__67484) : sci.impl.interpreter.interpret.call(null,G__67483,G__67484));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg67143 = (function (){var G__67485 = ctx;
var G__67486 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67485,G__67486) : sci.impl.interpreter.interpret.call(null,G__67485,G__67486));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg67144 = (function (){var G__67487 = ctx;
var G__67488 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67487,G__67488) : sci.impl.interpreter.interpret.call(null,G__67487,G__67488));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg67128,arg67129,arg67130,arg67131,arg67132,arg67133,arg67134,arg67135,arg67136,arg67137,arg67138,arg67139,arg67140,arg67141,arg67142,arg67143,arg67144) : f.call(null,arg67128,arg67129,arg67130,arg67131,arg67132,arg67133,arg67134,arg67135,arg67136,arg67137,arg67138,arg67139,arg67140,arg67141,arg67142,arg67143,arg67144));

break;
case (18):
var arg67145 = (function (){var G__67489 = ctx;
var G__67490 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67489,G__67490) : sci.impl.interpreter.interpret.call(null,G__67489,G__67490));
})();
var args__$1 = cljs.core.rest(args);
var arg67146 = (function (){var G__67491 = ctx;
var G__67492 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67491,G__67492) : sci.impl.interpreter.interpret.call(null,G__67491,G__67492));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67147 = (function (){var G__67493 = ctx;
var G__67494 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67493,G__67494) : sci.impl.interpreter.interpret.call(null,G__67493,G__67494));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67148 = (function (){var G__67495 = ctx;
var G__67496 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67495,G__67496) : sci.impl.interpreter.interpret.call(null,G__67495,G__67496));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67149 = (function (){var G__67497 = ctx;
var G__67498 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67497,G__67498) : sci.impl.interpreter.interpret.call(null,G__67497,G__67498));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67150 = (function (){var G__67499 = ctx;
var G__67500 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67499,G__67500) : sci.impl.interpreter.interpret.call(null,G__67499,G__67500));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67151 = (function (){var G__67501 = ctx;
var G__67502 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67501,G__67502) : sci.impl.interpreter.interpret.call(null,G__67501,G__67502));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67152 = (function (){var G__67503 = ctx;
var G__67504 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67503,G__67504) : sci.impl.interpreter.interpret.call(null,G__67503,G__67504));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67153 = (function (){var G__67505 = ctx;
var G__67506 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67505,G__67506) : sci.impl.interpreter.interpret.call(null,G__67505,G__67506));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67154 = (function (){var G__67507 = ctx;
var G__67508 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67507,G__67508) : sci.impl.interpreter.interpret.call(null,G__67507,G__67508));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67155 = (function (){var G__67509 = ctx;
var G__67510 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67509,G__67510) : sci.impl.interpreter.interpret.call(null,G__67509,G__67510));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67156 = (function (){var G__67511 = ctx;
var G__67512 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67511,G__67512) : sci.impl.interpreter.interpret.call(null,G__67511,G__67512));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67157 = (function (){var G__67513 = ctx;
var G__67514 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67513,G__67514) : sci.impl.interpreter.interpret.call(null,G__67513,G__67514));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg67158 = (function (){var G__67515 = ctx;
var G__67516 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67515,G__67516) : sci.impl.interpreter.interpret.call(null,G__67515,G__67516));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg67159 = (function (){var G__67517 = ctx;
var G__67518 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67517,G__67518) : sci.impl.interpreter.interpret.call(null,G__67517,G__67518));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg67160 = (function (){var G__67519 = ctx;
var G__67520 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67519,G__67520) : sci.impl.interpreter.interpret.call(null,G__67519,G__67520));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg67161 = (function (){var G__67521 = ctx;
var G__67522 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67521,G__67522) : sci.impl.interpreter.interpret.call(null,G__67521,G__67522));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg67162 = (function (){var G__67523 = ctx;
var G__67524 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67523,G__67524) : sci.impl.interpreter.interpret.call(null,G__67523,G__67524));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg67145,arg67146,arg67147,arg67148,arg67149,arg67150,arg67151,arg67152,arg67153,arg67154,arg67155,arg67156,arg67157,arg67158,arg67159,arg67160,arg67161,arg67162) : f.call(null,arg67145,arg67146,arg67147,arg67148,arg67149,arg67150,arg67151,arg67152,arg67153,arg67154,arg67155,arg67156,arg67157,arg67158,arg67159,arg67160,arg67161,arg67162));

break;
case (19):
var arg67163 = (function (){var G__67525 = ctx;
var G__67526 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67525,G__67526) : sci.impl.interpreter.interpret.call(null,G__67525,G__67526));
})();
var args__$1 = cljs.core.rest(args);
var arg67164 = (function (){var G__67527 = ctx;
var G__67528 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67527,G__67528) : sci.impl.interpreter.interpret.call(null,G__67527,G__67528));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67165 = (function (){var G__67529 = ctx;
var G__67530 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67529,G__67530) : sci.impl.interpreter.interpret.call(null,G__67529,G__67530));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67166 = (function (){var G__67531 = ctx;
var G__67532 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67531,G__67532) : sci.impl.interpreter.interpret.call(null,G__67531,G__67532));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67167 = (function (){var G__67533 = ctx;
var G__67534 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67533,G__67534) : sci.impl.interpreter.interpret.call(null,G__67533,G__67534));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67168 = (function (){var G__67535 = ctx;
var G__67536 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67535,G__67536) : sci.impl.interpreter.interpret.call(null,G__67535,G__67536));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67169 = (function (){var G__67537 = ctx;
var G__67538 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67537,G__67538) : sci.impl.interpreter.interpret.call(null,G__67537,G__67538));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67170 = (function (){var G__67539 = ctx;
var G__67540 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67539,G__67540) : sci.impl.interpreter.interpret.call(null,G__67539,G__67540));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67171 = (function (){var G__67541 = ctx;
var G__67542 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67541,G__67542) : sci.impl.interpreter.interpret.call(null,G__67541,G__67542));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67172 = (function (){var G__67543 = ctx;
var G__67544 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67543,G__67544) : sci.impl.interpreter.interpret.call(null,G__67543,G__67544));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67173 = (function (){var G__67545 = ctx;
var G__67546 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67545,G__67546) : sci.impl.interpreter.interpret.call(null,G__67545,G__67546));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67174 = (function (){var G__67547 = ctx;
var G__67548 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67547,G__67548) : sci.impl.interpreter.interpret.call(null,G__67547,G__67548));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67175 = (function (){var G__67549 = ctx;
var G__67550 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67549,G__67550) : sci.impl.interpreter.interpret.call(null,G__67549,G__67550));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg67176 = (function (){var G__67551 = ctx;
var G__67552 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67551,G__67552) : sci.impl.interpreter.interpret.call(null,G__67551,G__67552));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg67177 = (function (){var G__67553 = ctx;
var G__67554 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67553,G__67554) : sci.impl.interpreter.interpret.call(null,G__67553,G__67554));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg67178 = (function (){var G__67555 = ctx;
var G__67556 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67555,G__67556) : sci.impl.interpreter.interpret.call(null,G__67555,G__67556));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg67179 = (function (){var G__67557 = ctx;
var G__67558 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67557,G__67558) : sci.impl.interpreter.interpret.call(null,G__67557,G__67558));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg67180 = (function (){var G__67559 = ctx;
var G__67560 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67559,G__67560) : sci.impl.interpreter.interpret.call(null,G__67559,G__67560));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg67181 = (function (){var G__67561 = ctx;
var G__67562 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67561,G__67562) : sci.impl.interpreter.interpret.call(null,G__67561,G__67562));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg67163,arg67164,arg67165,arg67166,arg67167,arg67168,arg67169,arg67170,arg67171,arg67172,arg67173,arg67174,arg67175,arg67176,arg67177,arg67178,arg67179,arg67180,arg67181) : f.call(null,arg67163,arg67164,arg67165,arg67166,arg67167,arg67168,arg67169,arg67170,arg67171,arg67172,arg67173,arg67174,arg67175,arg67176,arg67177,arg67178,arg67179,arg67180,arg67181));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__4373_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__4373_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__4373_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__67563 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__67563)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__67563)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__67563)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__67563)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__67563)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__67563)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__67564 = ctx;
var G__67565 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67564,G__67565) : sci.impl.interpreter.interpret.call(null,G__67564,G__67565));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__67563)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__67563)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__67563)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__67563)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__67563)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__67563)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__67563)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__67563)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__67563)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__67566 = ctx;
var G__67567 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67566,G__67567) : sci.impl.interpreter.interpret.call(null,G__67566,G__67567));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__67563)){
return sci.impl.interpreter.eval_refer(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__67563)){
return (new cljs.core.LazySeq(null,(function (){var G__67568 = ctx;
var G__67569 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67568,G__67569) : sci.impl.interpreter.interpret.call(null,G__67568,G__67569));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__67563)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__67563)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__67563)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__67563)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67563)].join('')));

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
if(cljs.core.truth_((function (){var G__67571 = op;
var G__67572 = new cljs.core.Keyword(null,"static-access","static-access",-1860919441);
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__67571,G__67572) : sci.impl.utils.kw_identical_QMARK_.call(null,G__67571,G__67572));
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
}catch (e67570){if((e67570 instanceof Error)){
var e = e67570;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e67570;

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
var ret = ((cljs.core.not(op))?expr:(function (){var G__67579 = op;
var G__67579__$1 = (((G__67579 instanceof cljs.core.Keyword))?G__67579.fqn:null);
switch (G__67579__$1) {
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
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67576_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__67576_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__67576_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67577_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__67577_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__67577_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67578_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__67578_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__67578_SHARP_));
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
var G__67630 = cljs.core.rest(exprs);
var G__67631 = (function (){var G__67582 = ctx;
var G__67583 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__67582,G__67583) : sci.impl.interpreter.eval_form.call(null,G__67582,G__67583));
})();
exprs = G__67630;
ret = G__67631;
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
if(cljs.core.truth_((function (){var G__67586 = new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006);
var G__67587 = expr;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__67586,G__67587) : sci.impl.utils.kw_identical_QMARK_.call(null,G__67586,G__67587));
})())){
return ret;
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx,expr);
var G__67632 = ret__$1;
ret = G__67632;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__67589 = arguments.length;
switch (G__67589) {
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
