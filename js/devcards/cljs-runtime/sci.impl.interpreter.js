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
var G__60534 = xs;
args__$2 = G__60534;
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
var G__60535 = xs;
args__$2 = G__60535;
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
var len__4789__auto___60536 = arguments.length;
var i__4790__auto___60537 = (0);
while(true){
if((i__4790__auto___60537 < len__4789__auto___60536)){
args__4795__auto__.push((arguments[i__4790__auto___60537]));

var G__60538 = (i__4790__auto___60537 + (1));
i__4790__auto___60537 = G__60538;
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
var G__60539 = ctx__$2;
var G__60540 = rest_let_bindings;
ctx__$1 = G__60539;
let_bindings__$1 = G__60540;
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
var G__60541 = nexprs;
exprs__$1 = G__60541;
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
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq59765){
var G__59766 = cljs.core.first(seq59765);
var seq59765__$1 = cljs.core.next(seq59765);
var G__59767 = cljs.core.first(seq59765__$1);
var seq59765__$2 = cljs.core.next(seq59765__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59766,G__59767,seq59765__$2);
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
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__59771){
var vec__59772 = p__59771;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59772,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59772,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59772,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59772,(3),null);
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
var v = (cljs.core.truth_((function (){var G__59775 = new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647);
var G__59776 = init__$1;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__59775,G__59776) : sci.impl.utils.kw_identical_QMARK_.call(null,G__59775,G__59776));
})())?(function (){var G__59777 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__59777,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__59777;
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
var vec__59778 = libspec;
var seq__59779 = cljs.core.seq(vec__59778);
var first__59780 = cljs.core.first(seq__59779);
var seq__59779__$1 = cljs.core.next(seq__59779);
var lib_name = first__59780;
var opts = seq__59779__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__59784 = opts;
var vec__59785 = G__59784;
var seq__59786 = cljs.core.seq(vec__59785);
var first__59787 = cljs.core.first(seq__59786);
var seq__59786__$1 = cljs.core.next(seq__59786);
var opt_name = first__59787;
var first__59787__$1 = cljs.core.first(seq__59786__$1);
var seq__59786__$2 = cljs.core.next(seq__59786__$1);
var fst_opt = first__59787__$1;
var rst_opts = seq__59786__$2;
var ret__$1 = ret;
var G__59784__$1 = G__59784;
while(true){
var ret__$2 = ret__$1;
var vec__59792 = G__59784__$1;
var seq__59793 = cljs.core.seq(vec__59792);
var first__59794 = cljs.core.first(seq__59793);
var seq__59793__$1 = cljs.core.next(seq__59793);
var opt_name__$1 = first__59794;
var first__59794__$1 = cljs.core.first(seq__59793__$1);
var seq__59793__$2 = cljs.core.next(seq__59793__$1);
var fst_opt__$1 = first__59794__$1;
var rst_opts__$1 = seq__59793__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__59795 = opt_name__$1;
var G__59795__$1 = (((G__59795 instanceof cljs.core.Keyword))?G__59795.fqn:null);
switch (G__59795__$1) {
case "as":
var G__60543 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__60544 = rst_opts__$1;
ret__$1 = G__60543;
G__59784__$1 = G__60544;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__60545 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__60546 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__60545;
G__59784__$1 = G__60546;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__60547 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__60548 = rst_opts__$1;
ret__$1 = G__60547;
G__59784__$1 = G__60548;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59795__$1)].join('')));

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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__59799){
var vec__59800 = p__59799;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59800,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59800,(1),null);
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
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(env,use_QMARK_,current_ns,the_loaded_ns,lib_name,p__59807){
var map__59808 = p__59807;
var map__59808__$1 = (((((!((map__59808 == null))))?(((((map__59808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59808):map__59808);
var _parsed_libspec = map__59808__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59808__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59808__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59808__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59808__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59808__$1,new cljs.core.Keyword(null,"only","only",1907811652));
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
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4185__auto__ = (function (){var G__59812 = new cljs.core.Keyword(null,"all","all",892129742);
var G__59813 = refer;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__59812,G__59813) : sci.impl.utils.kw_identical_QMARK_.call(null,G__59812,G__59813));
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
var vec__59814 = temp__5733__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59814,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59814,(1),null);
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
var map__59817 = sci.impl.interpreter.parse_libspec(libspec);
var map__59817__$1 = (((((!((map__59817 == null))))?(((((map__59817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59817):map__59817);
var parsed_libspec = map__59817__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59817__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59817__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
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
var temp__5733__auto____$2 = (function (){var G__59819 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__59819) : load_fn.call(null,G__59819));
})();
if(cljs.core.truth_(temp__5733__auto____$2)){
var map__59820 = temp__5733__auto____$2;
var map__59820__$1 = (((((!((map__59820 == null))))?(((((map__59820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59820):map__59820);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59820__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59820__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__59823_60549 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__59824_60550 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__59823_60549,G__59824_60550) : sci.impl.interpreter.eval_string_STAR_.call(null,G__59823_60549,G__59824_60550));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e59822){if((e59822 instanceof Error)){
var e_60551 = e59822;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_60551;
} else {
throw e59822;

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
var len__4789__auto___60552 = arguments.length;
var i__4790__auto___60553 = (0);
while(true){
if((i__4790__auto___60553 < len__4789__auto___60552)){
args__4795__auto__.push((arguments[i__4790__auto___60553]));

var G__60554 = (i__4790__auto___60553 + (1));
i__4790__auto___60553 = G__60554;
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
var ret = (function (){var G__59834 = ctx;
var G__59835 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59834,G__59835) : sci.impl.interpreter.interpret.call(null,G__59834,G__59835));
})();
if((ret instanceof cljs.core.Symbol)){
var G__60555 = (function (){var G__59836 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__59836,current_libspec);
} else {
return G__59836;
}
})();
var G__60556 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__60557 = cljs.core.next(args__$1);
libspecs = G__60555;
current_libspec = G__60556;
args__$1 = G__60557;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__60558 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__60559 = null;
var G__60560 = cljs.core.next(args__$1);
libspecs = G__60558;
current_libspec = G__60559;
args__$1 = G__60560;
continue;
} else {
var G__60561 = (function (){var G__59837 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__59837,current_libspec);
} else {
return G__59837;
}
})();
var G__60562 = ret;
var G__60563 = cljs.core.next(args__$1);
libspecs = G__60561;
current_libspec = G__60562;
args__$1 = G__60563;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__59838 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__59838,current_libspec);
} else {
return G__59838;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__59825_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__59825_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq59826){
var G__59827 = cljs.core.first(seq59826);
var seq59826__$1 = cljs.core.next(seq59826);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59827,seq59826__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4795__auto__ = [];
var len__4789__auto___60564 = arguments.length;
var i__4790__auto___60565 = (0);
while(true){
if((i__4790__auto___60565 < len__4789__auto___60564)){
args__4795__auto__.push((arguments[i__4790__auto___60565]));

var G__60566 = (i__4790__auto___60565 + (1));
i__4790__auto___60565 = G__60566;
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
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq59839){
var G__59840 = cljs.core.first(seq59839);
var seq59839__$1 = cljs.core.next(seq59839);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59840,seq59839__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__59847){
var vec__59849 = p__59847;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59849,(0),null);
var map__59852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59849,(1),null);
var map__59852__$1 = (((((!((map__59852 == null))))?(((((map__59852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59852):map__59852);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59852__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59852__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59852__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5733__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__59854 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59854,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59854,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__59857 = ctx;
var G__59858 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59857,G__59858) : sci.impl.interpreter.interpret.call(null,G__59857,G__59858));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__59860 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__59860__$1 = (((((!((map__59860 == null))))?(((((map__59860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59860):map__59860);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59860__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59860__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59860__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__59871 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__59872 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__59872);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__59871);
}}catch (e59862){if((e59862 instanceof Error)){
var e = e59862;
var temp__5733__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__59865 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__59866 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59865,G__59866) : sci.impl.interpreter.interpret.call(null,G__59865,G__59866));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__59868 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59868,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59868,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e59862;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__59873){
var vec__59874 = p__59873;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59874,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59874,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59877_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__59877_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__59877_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__59879){
var vec__59880 = p__59879;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59880,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59880,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59880,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59878_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__59878_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__59878_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__59893,p__59894){
var map__59899 = p__59893;
var map__59899__$1 = (((((!((map__59899 == null))))?(((((map__59899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59899):map__59899);
var ctx = map__59899__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59899__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__59900 = p__59894;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59900,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59900,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59900,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59900,(3),null);
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

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59888_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__59888_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__59888_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__59907){
var vec__59908 = p__59907;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59908,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59908,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(ctx,p__59911){
var vec__59912 = p__59911;
var seq__59913 = cljs.core.seq(vec__59912);
var first__59914 = cljs.core.first(seq__59913);
var seq__59913__$1 = cljs.core.next(seq__59913);
var _ = first__59914;
var first__59914__$1 = cljs.core.first(seq__59913__$1);
var seq__59913__$2 = cljs.core.next(seq__59913__$1);
var ns_sym = first__59914__$1;
var exprs = seq__59913__$2;
var ns_sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_sym) : sci.impl.interpreter.interpret.call(null,ctx,ns_sym));
var exprs__$1 = exprs;
while(true){
if(exprs__$1){
var vec__59915 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59915,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59915,(1),null);
var G__59918_60567 = k;
var G__59918_60568__$1 = (((G__59918_60567 instanceof cljs.core.Keyword))?G__59918_60567.fqn:null);
switch (G__59918_60568__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__59918_60567,G__59918_60568__$1,vec__59915,k,v,ns_sym__$1,vec__59912,seq__59913,first__59914,seq__59913__$1,_,first__59914__$1,seq__59913__$2,ns_sym,exprs){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__59918_60567,G__59918_60568__$1,vec__59915,k,v,ns_sym__$1,vec__59912,seq__59913,first__59914,seq__59913__$1,_,first__59914__$1,seq__59913__$2,ns_sym,exprs))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59918_60568__$1)].join('')));

}

var G__60570 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__60570;
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
sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__59919){
var vec__59920 = p__59919;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59920,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59920,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59920,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__59926 = exprs;
var vec__59927 = G__59926;
var seq__59928 = cljs.core.seq(vec__59927);
var first__59929 = cljs.core.first(seq__59928);
var seq__59928__$1 = cljs.core.next(seq__59928);
var expr = first__59929;
var exprs__$1 = seq__59928__$1;
var G__59926__$1 = G__59926;
while(true){
var vec__59930 = G__59926__$1;
var seq__59931 = cljs.core.seq(vec__59930);
var first__59932 = cljs.core.first(seq__59931);
var seq__59931__$1 = cljs.core.next(seq__59931);
var expr__$1 = first__59932;
var exprs__$2 = seq__59931__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e59933){if((e59933 instanceof Error)){
var e = e59933;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e59933;

}
}})();
var temp__5733__auto__ = cljs.core.seq(exprs__$2);
if(temp__5733__auto__){
var exprs__$3 = temp__5733__auto__;
var G__60571 = exprs__$3;
G__59926__$1 = G__60571;
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
var G__60126 = cljs.core.count(args);
switch (G__60126) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg59936 = (function (){var G__60127 = ctx;
var G__60128 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60127,G__60128) : sci.impl.interpreter.interpret.call(null,G__60127,G__60128));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg59936) : f.call(null,arg59936));

break;
case (2):
var arg59937 = (function (){var G__60129 = ctx;
var G__60130 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60129,G__60130) : sci.impl.interpreter.interpret.call(null,G__60129,G__60130));
})();
var args__$1 = cljs.core.rest(args);
var arg59938 = (function (){var G__60131 = ctx;
var G__60132 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60131,G__60132) : sci.impl.interpreter.interpret.call(null,G__60131,G__60132));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg59937,arg59938) : f.call(null,arg59937,arg59938));

break;
case (3):
var arg59939 = (function (){var G__60133 = ctx;
var G__60134 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60133,G__60134) : sci.impl.interpreter.interpret.call(null,G__60133,G__60134));
})();
var args__$1 = cljs.core.rest(args);
var arg59940 = (function (){var G__60135 = ctx;
var G__60136 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60135,G__60136) : sci.impl.interpreter.interpret.call(null,G__60135,G__60136));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59941 = (function (){var G__60137 = ctx;
var G__60138 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60137,G__60138) : sci.impl.interpreter.interpret.call(null,G__60137,G__60138));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg59939,arg59940,arg59941) : f.call(null,arg59939,arg59940,arg59941));

break;
case (4):
var arg59942 = (function (){var G__60139 = ctx;
var G__60140 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60139,G__60140) : sci.impl.interpreter.interpret.call(null,G__60139,G__60140));
})();
var args__$1 = cljs.core.rest(args);
var arg59943 = (function (){var G__60141 = ctx;
var G__60142 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60141,G__60142) : sci.impl.interpreter.interpret.call(null,G__60141,G__60142));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59944 = (function (){var G__60143 = ctx;
var G__60144 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60143,G__60144) : sci.impl.interpreter.interpret.call(null,G__60143,G__60144));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59945 = (function (){var G__60145 = ctx;
var G__60146 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60145,G__60146) : sci.impl.interpreter.interpret.call(null,G__60145,G__60146));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg59942,arg59943,arg59944,arg59945) : f.call(null,arg59942,arg59943,arg59944,arg59945));

break;
case (5):
var arg59946 = (function (){var G__60147 = ctx;
var G__60148 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60147,G__60148) : sci.impl.interpreter.interpret.call(null,G__60147,G__60148));
})();
var args__$1 = cljs.core.rest(args);
var arg59947 = (function (){var G__60149 = ctx;
var G__60150 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60149,G__60150) : sci.impl.interpreter.interpret.call(null,G__60149,G__60150));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59948 = (function (){var G__60151 = ctx;
var G__60152 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60151,G__60152) : sci.impl.interpreter.interpret.call(null,G__60151,G__60152));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59949 = (function (){var G__60153 = ctx;
var G__60154 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60153,G__60154) : sci.impl.interpreter.interpret.call(null,G__60153,G__60154));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59950 = (function (){var G__60155 = ctx;
var G__60156 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60155,G__60156) : sci.impl.interpreter.interpret.call(null,G__60155,G__60156));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg59946,arg59947,arg59948,arg59949,arg59950) : f.call(null,arg59946,arg59947,arg59948,arg59949,arg59950));

break;
case (6):
var arg59951 = (function (){var G__60157 = ctx;
var G__60158 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60157,G__60158) : sci.impl.interpreter.interpret.call(null,G__60157,G__60158));
})();
var args__$1 = cljs.core.rest(args);
var arg59952 = (function (){var G__60159 = ctx;
var G__60160 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60159,G__60160) : sci.impl.interpreter.interpret.call(null,G__60159,G__60160));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59953 = (function (){var G__60161 = ctx;
var G__60162 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60161,G__60162) : sci.impl.interpreter.interpret.call(null,G__60161,G__60162));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59954 = (function (){var G__60163 = ctx;
var G__60164 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60163,G__60164) : sci.impl.interpreter.interpret.call(null,G__60163,G__60164));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59955 = (function (){var G__60165 = ctx;
var G__60166 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60165,G__60166) : sci.impl.interpreter.interpret.call(null,G__60165,G__60166));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59956 = (function (){var G__60167 = ctx;
var G__60168 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60167,G__60168) : sci.impl.interpreter.interpret.call(null,G__60167,G__60168));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg59951,arg59952,arg59953,arg59954,arg59955,arg59956) : f.call(null,arg59951,arg59952,arg59953,arg59954,arg59955,arg59956));

break;
case (7):
var arg59957 = (function (){var G__60169 = ctx;
var G__60170 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60169,G__60170) : sci.impl.interpreter.interpret.call(null,G__60169,G__60170));
})();
var args__$1 = cljs.core.rest(args);
var arg59958 = (function (){var G__60171 = ctx;
var G__60172 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60171,G__60172) : sci.impl.interpreter.interpret.call(null,G__60171,G__60172));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59959 = (function (){var G__60173 = ctx;
var G__60174 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60173,G__60174) : sci.impl.interpreter.interpret.call(null,G__60173,G__60174));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59960 = (function (){var G__60175 = ctx;
var G__60176 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60175,G__60176) : sci.impl.interpreter.interpret.call(null,G__60175,G__60176));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59961 = (function (){var G__60177 = ctx;
var G__60178 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60177,G__60178) : sci.impl.interpreter.interpret.call(null,G__60177,G__60178));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59962 = (function (){var G__60179 = ctx;
var G__60180 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60179,G__60180) : sci.impl.interpreter.interpret.call(null,G__60179,G__60180));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59963 = (function (){var G__60181 = ctx;
var G__60182 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60181,G__60182) : sci.impl.interpreter.interpret.call(null,G__60181,G__60182));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg59957,arg59958,arg59959,arg59960,arg59961,arg59962,arg59963) : f.call(null,arg59957,arg59958,arg59959,arg59960,arg59961,arg59962,arg59963));

break;
case (8):
var arg59964 = (function (){var G__60183 = ctx;
var G__60184 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60183,G__60184) : sci.impl.interpreter.interpret.call(null,G__60183,G__60184));
})();
var args__$1 = cljs.core.rest(args);
var arg59965 = (function (){var G__60185 = ctx;
var G__60186 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60185,G__60186) : sci.impl.interpreter.interpret.call(null,G__60185,G__60186));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59966 = (function (){var G__60187 = ctx;
var G__60188 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60187,G__60188) : sci.impl.interpreter.interpret.call(null,G__60187,G__60188));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59967 = (function (){var G__60189 = ctx;
var G__60190 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60189,G__60190) : sci.impl.interpreter.interpret.call(null,G__60189,G__60190));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59968 = (function (){var G__60191 = ctx;
var G__60192 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60191,G__60192) : sci.impl.interpreter.interpret.call(null,G__60191,G__60192));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59969 = (function (){var G__60193 = ctx;
var G__60194 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60193,G__60194) : sci.impl.interpreter.interpret.call(null,G__60193,G__60194));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59970 = (function (){var G__60195 = ctx;
var G__60196 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60195,G__60196) : sci.impl.interpreter.interpret.call(null,G__60195,G__60196));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59971 = (function (){var G__60197 = ctx;
var G__60198 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60197,G__60198) : sci.impl.interpreter.interpret.call(null,G__60197,G__60198));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg59964,arg59965,arg59966,arg59967,arg59968,arg59969,arg59970,arg59971) : f.call(null,arg59964,arg59965,arg59966,arg59967,arg59968,arg59969,arg59970,arg59971));

break;
case (9):
var arg59972 = (function (){var G__60199 = ctx;
var G__60200 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60199,G__60200) : sci.impl.interpreter.interpret.call(null,G__60199,G__60200));
})();
var args__$1 = cljs.core.rest(args);
var arg59973 = (function (){var G__60201 = ctx;
var G__60202 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60201,G__60202) : sci.impl.interpreter.interpret.call(null,G__60201,G__60202));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59974 = (function (){var G__60203 = ctx;
var G__60204 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60203,G__60204) : sci.impl.interpreter.interpret.call(null,G__60203,G__60204));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59975 = (function (){var G__60205 = ctx;
var G__60206 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60205,G__60206) : sci.impl.interpreter.interpret.call(null,G__60205,G__60206));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59976 = (function (){var G__60207 = ctx;
var G__60208 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60207,G__60208) : sci.impl.interpreter.interpret.call(null,G__60207,G__60208));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59977 = (function (){var G__60209 = ctx;
var G__60210 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60209,G__60210) : sci.impl.interpreter.interpret.call(null,G__60209,G__60210));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59978 = (function (){var G__60211 = ctx;
var G__60212 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60211,G__60212) : sci.impl.interpreter.interpret.call(null,G__60211,G__60212));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59979 = (function (){var G__60213 = ctx;
var G__60214 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60213,G__60214) : sci.impl.interpreter.interpret.call(null,G__60213,G__60214));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59980 = (function (){var G__60215 = ctx;
var G__60216 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60215,G__60216) : sci.impl.interpreter.interpret.call(null,G__60215,G__60216));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg59972,arg59973,arg59974,arg59975,arg59976,arg59977,arg59978,arg59979,arg59980) : f.call(null,arg59972,arg59973,arg59974,arg59975,arg59976,arg59977,arg59978,arg59979,arg59980));

break;
case (10):
var arg59981 = (function (){var G__60217 = ctx;
var G__60218 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60217,G__60218) : sci.impl.interpreter.interpret.call(null,G__60217,G__60218));
})();
var args__$1 = cljs.core.rest(args);
var arg59982 = (function (){var G__60219 = ctx;
var G__60220 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60219,G__60220) : sci.impl.interpreter.interpret.call(null,G__60219,G__60220));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59983 = (function (){var G__60221 = ctx;
var G__60222 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60221,G__60222) : sci.impl.interpreter.interpret.call(null,G__60221,G__60222));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59984 = (function (){var G__60223 = ctx;
var G__60224 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60223,G__60224) : sci.impl.interpreter.interpret.call(null,G__60223,G__60224));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59985 = (function (){var G__60225 = ctx;
var G__60226 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60225,G__60226) : sci.impl.interpreter.interpret.call(null,G__60225,G__60226));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59986 = (function (){var G__60227 = ctx;
var G__60228 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60227,G__60228) : sci.impl.interpreter.interpret.call(null,G__60227,G__60228));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59987 = (function (){var G__60229 = ctx;
var G__60230 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60229,G__60230) : sci.impl.interpreter.interpret.call(null,G__60229,G__60230));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59988 = (function (){var G__60231 = ctx;
var G__60232 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60231,G__60232) : sci.impl.interpreter.interpret.call(null,G__60231,G__60232));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59989 = (function (){var G__60233 = ctx;
var G__60234 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60233,G__60234) : sci.impl.interpreter.interpret.call(null,G__60233,G__60234));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59990 = (function (){var G__60235 = ctx;
var G__60236 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60235,G__60236) : sci.impl.interpreter.interpret.call(null,G__60235,G__60236));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg59981,arg59982,arg59983,arg59984,arg59985,arg59986,arg59987,arg59988,arg59989,arg59990) : f.call(null,arg59981,arg59982,arg59983,arg59984,arg59985,arg59986,arg59987,arg59988,arg59989,arg59990));

break;
case (11):
var arg59991 = (function (){var G__60237 = ctx;
var G__60238 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60237,G__60238) : sci.impl.interpreter.interpret.call(null,G__60237,G__60238));
})();
var args__$1 = cljs.core.rest(args);
var arg59992 = (function (){var G__60239 = ctx;
var G__60240 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60239,G__60240) : sci.impl.interpreter.interpret.call(null,G__60239,G__60240));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59993 = (function (){var G__60241 = ctx;
var G__60242 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60241,G__60242) : sci.impl.interpreter.interpret.call(null,G__60241,G__60242));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59994 = (function (){var G__60243 = ctx;
var G__60244 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60243,G__60244) : sci.impl.interpreter.interpret.call(null,G__60243,G__60244));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59995 = (function (){var G__60245 = ctx;
var G__60246 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60245,G__60246) : sci.impl.interpreter.interpret.call(null,G__60245,G__60246));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59996 = (function (){var G__60247 = ctx;
var G__60248 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60247,G__60248) : sci.impl.interpreter.interpret.call(null,G__60247,G__60248));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59997 = (function (){var G__60249 = ctx;
var G__60250 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60249,G__60250) : sci.impl.interpreter.interpret.call(null,G__60249,G__60250));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59998 = (function (){var G__60251 = ctx;
var G__60252 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60251,G__60252) : sci.impl.interpreter.interpret.call(null,G__60251,G__60252));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59999 = (function (){var G__60253 = ctx;
var G__60254 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60253,G__60254) : sci.impl.interpreter.interpret.call(null,G__60253,G__60254));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg60000 = (function (){var G__60255 = ctx;
var G__60256 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60255,G__60256) : sci.impl.interpreter.interpret.call(null,G__60255,G__60256));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg60001 = (function (){var G__60257 = ctx;
var G__60258 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60257,G__60258) : sci.impl.interpreter.interpret.call(null,G__60257,G__60258));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg59991,arg59992,arg59993,arg59994,arg59995,arg59996,arg59997,arg59998,arg59999,arg60000,arg60001) : f.call(null,arg59991,arg59992,arg59993,arg59994,arg59995,arg59996,arg59997,arg59998,arg59999,arg60000,arg60001));

break;
case (12):
var arg60002 = (function (){var G__60259 = ctx;
var G__60260 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60259,G__60260) : sci.impl.interpreter.interpret.call(null,G__60259,G__60260));
})();
var args__$1 = cljs.core.rest(args);
var arg60003 = (function (){var G__60261 = ctx;
var G__60262 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60261,G__60262) : sci.impl.interpreter.interpret.call(null,G__60261,G__60262));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60004 = (function (){var G__60263 = ctx;
var G__60264 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60263,G__60264) : sci.impl.interpreter.interpret.call(null,G__60263,G__60264));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60005 = (function (){var G__60265 = ctx;
var G__60266 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60265,G__60266) : sci.impl.interpreter.interpret.call(null,G__60265,G__60266));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60006 = (function (){var G__60267 = ctx;
var G__60268 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60267,G__60268) : sci.impl.interpreter.interpret.call(null,G__60267,G__60268));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60007 = (function (){var G__60269 = ctx;
var G__60270 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60269,G__60270) : sci.impl.interpreter.interpret.call(null,G__60269,G__60270));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60008 = (function (){var G__60271 = ctx;
var G__60272 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60271,G__60272) : sci.impl.interpreter.interpret.call(null,G__60271,G__60272));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60009 = (function (){var G__60273 = ctx;
var G__60274 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60273,G__60274) : sci.impl.interpreter.interpret.call(null,G__60273,G__60274));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg60010 = (function (){var G__60275 = ctx;
var G__60276 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60275,G__60276) : sci.impl.interpreter.interpret.call(null,G__60275,G__60276));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg60011 = (function (){var G__60277 = ctx;
var G__60278 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60277,G__60278) : sci.impl.interpreter.interpret.call(null,G__60277,G__60278));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg60012 = (function (){var G__60279 = ctx;
var G__60280 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60279,G__60280) : sci.impl.interpreter.interpret.call(null,G__60279,G__60280));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg60013 = (function (){var G__60281 = ctx;
var G__60282 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60281,G__60282) : sci.impl.interpreter.interpret.call(null,G__60281,G__60282));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg60002,arg60003,arg60004,arg60005,arg60006,arg60007,arg60008,arg60009,arg60010,arg60011,arg60012,arg60013) : f.call(null,arg60002,arg60003,arg60004,arg60005,arg60006,arg60007,arg60008,arg60009,arg60010,arg60011,arg60012,arg60013));

break;
case (13):
var arg60014 = (function (){var G__60283 = ctx;
var G__60284 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60283,G__60284) : sci.impl.interpreter.interpret.call(null,G__60283,G__60284));
})();
var args__$1 = cljs.core.rest(args);
var arg60015 = (function (){var G__60285 = ctx;
var G__60286 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60285,G__60286) : sci.impl.interpreter.interpret.call(null,G__60285,G__60286));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60016 = (function (){var G__60287 = ctx;
var G__60288 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60287,G__60288) : sci.impl.interpreter.interpret.call(null,G__60287,G__60288));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60017 = (function (){var G__60289 = ctx;
var G__60290 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60289,G__60290) : sci.impl.interpreter.interpret.call(null,G__60289,G__60290));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60018 = (function (){var G__60291 = ctx;
var G__60292 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60291,G__60292) : sci.impl.interpreter.interpret.call(null,G__60291,G__60292));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60019 = (function (){var G__60293 = ctx;
var G__60294 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60293,G__60294) : sci.impl.interpreter.interpret.call(null,G__60293,G__60294));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60020 = (function (){var G__60295 = ctx;
var G__60296 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60295,G__60296) : sci.impl.interpreter.interpret.call(null,G__60295,G__60296));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60021 = (function (){var G__60297 = ctx;
var G__60298 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60297,G__60298) : sci.impl.interpreter.interpret.call(null,G__60297,G__60298));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg60022 = (function (){var G__60299 = ctx;
var G__60300 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60299,G__60300) : sci.impl.interpreter.interpret.call(null,G__60299,G__60300));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg60023 = (function (){var G__60301 = ctx;
var G__60302 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60301,G__60302) : sci.impl.interpreter.interpret.call(null,G__60301,G__60302));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg60024 = (function (){var G__60303 = ctx;
var G__60304 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60303,G__60304) : sci.impl.interpreter.interpret.call(null,G__60303,G__60304));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg60025 = (function (){var G__60305 = ctx;
var G__60306 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60305,G__60306) : sci.impl.interpreter.interpret.call(null,G__60305,G__60306));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg60026 = (function (){var G__60307 = ctx;
var G__60308 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60307,G__60308) : sci.impl.interpreter.interpret.call(null,G__60307,G__60308));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg60014,arg60015,arg60016,arg60017,arg60018,arg60019,arg60020,arg60021,arg60022,arg60023,arg60024,arg60025,arg60026) : f.call(null,arg60014,arg60015,arg60016,arg60017,arg60018,arg60019,arg60020,arg60021,arg60022,arg60023,arg60024,arg60025,arg60026));

break;
case (14):
var arg60027 = (function (){var G__60309 = ctx;
var G__60310 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60309,G__60310) : sci.impl.interpreter.interpret.call(null,G__60309,G__60310));
})();
var args__$1 = cljs.core.rest(args);
var arg60028 = (function (){var G__60311 = ctx;
var G__60312 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60311,G__60312) : sci.impl.interpreter.interpret.call(null,G__60311,G__60312));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60029 = (function (){var G__60313 = ctx;
var G__60314 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60313,G__60314) : sci.impl.interpreter.interpret.call(null,G__60313,G__60314));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60030 = (function (){var G__60315 = ctx;
var G__60316 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60315,G__60316) : sci.impl.interpreter.interpret.call(null,G__60315,G__60316));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60031 = (function (){var G__60317 = ctx;
var G__60318 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60317,G__60318) : sci.impl.interpreter.interpret.call(null,G__60317,G__60318));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60032 = (function (){var G__60319 = ctx;
var G__60320 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60319,G__60320) : sci.impl.interpreter.interpret.call(null,G__60319,G__60320));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60033 = (function (){var G__60321 = ctx;
var G__60322 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60321,G__60322) : sci.impl.interpreter.interpret.call(null,G__60321,G__60322));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60034 = (function (){var G__60323 = ctx;
var G__60324 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60323,G__60324) : sci.impl.interpreter.interpret.call(null,G__60323,G__60324));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg60035 = (function (){var G__60325 = ctx;
var G__60326 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60325,G__60326) : sci.impl.interpreter.interpret.call(null,G__60325,G__60326));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg60036 = (function (){var G__60327 = ctx;
var G__60328 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60327,G__60328) : sci.impl.interpreter.interpret.call(null,G__60327,G__60328));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg60037 = (function (){var G__60329 = ctx;
var G__60330 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60329,G__60330) : sci.impl.interpreter.interpret.call(null,G__60329,G__60330));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg60038 = (function (){var G__60331 = ctx;
var G__60332 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60331,G__60332) : sci.impl.interpreter.interpret.call(null,G__60331,G__60332));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg60039 = (function (){var G__60333 = ctx;
var G__60334 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60333,G__60334) : sci.impl.interpreter.interpret.call(null,G__60333,G__60334));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg60040 = (function (){var G__60335 = ctx;
var G__60336 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60335,G__60336) : sci.impl.interpreter.interpret.call(null,G__60335,G__60336));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg60027,arg60028,arg60029,arg60030,arg60031,arg60032,arg60033,arg60034,arg60035,arg60036,arg60037,arg60038,arg60039,arg60040) : f.call(null,arg60027,arg60028,arg60029,arg60030,arg60031,arg60032,arg60033,arg60034,arg60035,arg60036,arg60037,arg60038,arg60039,arg60040));

break;
case (15):
var arg60041 = (function (){var G__60337 = ctx;
var G__60338 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60337,G__60338) : sci.impl.interpreter.interpret.call(null,G__60337,G__60338));
})();
var args__$1 = cljs.core.rest(args);
var arg60042 = (function (){var G__60339 = ctx;
var G__60340 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60339,G__60340) : sci.impl.interpreter.interpret.call(null,G__60339,G__60340));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60043 = (function (){var G__60341 = ctx;
var G__60342 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60341,G__60342) : sci.impl.interpreter.interpret.call(null,G__60341,G__60342));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60044 = (function (){var G__60343 = ctx;
var G__60344 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60343,G__60344) : sci.impl.interpreter.interpret.call(null,G__60343,G__60344));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60045 = (function (){var G__60345 = ctx;
var G__60346 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60345,G__60346) : sci.impl.interpreter.interpret.call(null,G__60345,G__60346));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60046 = (function (){var G__60347 = ctx;
var G__60348 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60347,G__60348) : sci.impl.interpreter.interpret.call(null,G__60347,G__60348));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60047 = (function (){var G__60349 = ctx;
var G__60350 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60349,G__60350) : sci.impl.interpreter.interpret.call(null,G__60349,G__60350));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60048 = (function (){var G__60351 = ctx;
var G__60352 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60351,G__60352) : sci.impl.interpreter.interpret.call(null,G__60351,G__60352));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg60049 = (function (){var G__60353 = ctx;
var G__60354 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60353,G__60354) : sci.impl.interpreter.interpret.call(null,G__60353,G__60354));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg60050 = (function (){var G__60355 = ctx;
var G__60356 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60355,G__60356) : sci.impl.interpreter.interpret.call(null,G__60355,G__60356));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg60051 = (function (){var G__60357 = ctx;
var G__60358 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60357,G__60358) : sci.impl.interpreter.interpret.call(null,G__60357,G__60358));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg60052 = (function (){var G__60359 = ctx;
var G__60360 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60359,G__60360) : sci.impl.interpreter.interpret.call(null,G__60359,G__60360));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg60053 = (function (){var G__60361 = ctx;
var G__60362 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60361,G__60362) : sci.impl.interpreter.interpret.call(null,G__60361,G__60362));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg60054 = (function (){var G__60363 = ctx;
var G__60364 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60363,G__60364) : sci.impl.interpreter.interpret.call(null,G__60363,G__60364));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg60055 = (function (){var G__60365 = ctx;
var G__60366 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60365,G__60366) : sci.impl.interpreter.interpret.call(null,G__60365,G__60366));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg60041,arg60042,arg60043,arg60044,arg60045,arg60046,arg60047,arg60048,arg60049,arg60050,arg60051,arg60052,arg60053,arg60054,arg60055) : f.call(null,arg60041,arg60042,arg60043,arg60044,arg60045,arg60046,arg60047,arg60048,arg60049,arg60050,arg60051,arg60052,arg60053,arg60054,arg60055));

break;
case (16):
var arg60056 = (function (){var G__60367 = ctx;
var G__60368 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60367,G__60368) : sci.impl.interpreter.interpret.call(null,G__60367,G__60368));
})();
var args__$1 = cljs.core.rest(args);
var arg60057 = (function (){var G__60369 = ctx;
var G__60370 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60369,G__60370) : sci.impl.interpreter.interpret.call(null,G__60369,G__60370));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60058 = (function (){var G__60371 = ctx;
var G__60372 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60371,G__60372) : sci.impl.interpreter.interpret.call(null,G__60371,G__60372));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60059 = (function (){var G__60373 = ctx;
var G__60374 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60373,G__60374) : sci.impl.interpreter.interpret.call(null,G__60373,G__60374));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60060 = (function (){var G__60375 = ctx;
var G__60376 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60375,G__60376) : sci.impl.interpreter.interpret.call(null,G__60375,G__60376));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60061 = (function (){var G__60377 = ctx;
var G__60378 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60377,G__60378) : sci.impl.interpreter.interpret.call(null,G__60377,G__60378));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60062 = (function (){var G__60379 = ctx;
var G__60380 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60379,G__60380) : sci.impl.interpreter.interpret.call(null,G__60379,G__60380));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60063 = (function (){var G__60381 = ctx;
var G__60382 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60381,G__60382) : sci.impl.interpreter.interpret.call(null,G__60381,G__60382));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg60064 = (function (){var G__60383 = ctx;
var G__60384 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60383,G__60384) : sci.impl.interpreter.interpret.call(null,G__60383,G__60384));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg60065 = (function (){var G__60385 = ctx;
var G__60386 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60385,G__60386) : sci.impl.interpreter.interpret.call(null,G__60385,G__60386));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg60066 = (function (){var G__60387 = ctx;
var G__60388 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60387,G__60388) : sci.impl.interpreter.interpret.call(null,G__60387,G__60388));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg60067 = (function (){var G__60389 = ctx;
var G__60390 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60389,G__60390) : sci.impl.interpreter.interpret.call(null,G__60389,G__60390));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg60068 = (function (){var G__60391 = ctx;
var G__60392 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60391,G__60392) : sci.impl.interpreter.interpret.call(null,G__60391,G__60392));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg60069 = (function (){var G__60393 = ctx;
var G__60394 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60393,G__60394) : sci.impl.interpreter.interpret.call(null,G__60393,G__60394));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg60070 = (function (){var G__60395 = ctx;
var G__60396 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60395,G__60396) : sci.impl.interpreter.interpret.call(null,G__60395,G__60396));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg60071 = (function (){var G__60397 = ctx;
var G__60398 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60397,G__60398) : sci.impl.interpreter.interpret.call(null,G__60397,G__60398));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg60056,arg60057,arg60058,arg60059,arg60060,arg60061,arg60062,arg60063,arg60064,arg60065,arg60066,arg60067,arg60068,arg60069,arg60070,arg60071) : f.call(null,arg60056,arg60057,arg60058,arg60059,arg60060,arg60061,arg60062,arg60063,arg60064,arg60065,arg60066,arg60067,arg60068,arg60069,arg60070,arg60071));

break;
case (17):
var arg60072 = (function (){var G__60399 = ctx;
var G__60400 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60399,G__60400) : sci.impl.interpreter.interpret.call(null,G__60399,G__60400));
})();
var args__$1 = cljs.core.rest(args);
var arg60073 = (function (){var G__60401 = ctx;
var G__60402 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60401,G__60402) : sci.impl.interpreter.interpret.call(null,G__60401,G__60402));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60074 = (function (){var G__60403 = ctx;
var G__60404 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60403,G__60404) : sci.impl.interpreter.interpret.call(null,G__60403,G__60404));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60075 = (function (){var G__60405 = ctx;
var G__60406 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60405,G__60406) : sci.impl.interpreter.interpret.call(null,G__60405,G__60406));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60076 = (function (){var G__60407 = ctx;
var G__60408 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60407,G__60408) : sci.impl.interpreter.interpret.call(null,G__60407,G__60408));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60077 = (function (){var G__60409 = ctx;
var G__60410 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60409,G__60410) : sci.impl.interpreter.interpret.call(null,G__60409,G__60410));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60078 = (function (){var G__60411 = ctx;
var G__60412 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60411,G__60412) : sci.impl.interpreter.interpret.call(null,G__60411,G__60412));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60079 = (function (){var G__60413 = ctx;
var G__60414 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60413,G__60414) : sci.impl.interpreter.interpret.call(null,G__60413,G__60414));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg60080 = (function (){var G__60415 = ctx;
var G__60416 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60415,G__60416) : sci.impl.interpreter.interpret.call(null,G__60415,G__60416));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg60081 = (function (){var G__60417 = ctx;
var G__60418 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60417,G__60418) : sci.impl.interpreter.interpret.call(null,G__60417,G__60418));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg60082 = (function (){var G__60419 = ctx;
var G__60420 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60419,G__60420) : sci.impl.interpreter.interpret.call(null,G__60419,G__60420));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg60083 = (function (){var G__60421 = ctx;
var G__60422 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60421,G__60422) : sci.impl.interpreter.interpret.call(null,G__60421,G__60422));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg60084 = (function (){var G__60423 = ctx;
var G__60424 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60423,G__60424) : sci.impl.interpreter.interpret.call(null,G__60423,G__60424));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg60085 = (function (){var G__60425 = ctx;
var G__60426 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60425,G__60426) : sci.impl.interpreter.interpret.call(null,G__60425,G__60426));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg60086 = (function (){var G__60427 = ctx;
var G__60428 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60427,G__60428) : sci.impl.interpreter.interpret.call(null,G__60427,G__60428));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg60087 = (function (){var G__60429 = ctx;
var G__60430 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60429,G__60430) : sci.impl.interpreter.interpret.call(null,G__60429,G__60430));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg60088 = (function (){var G__60431 = ctx;
var G__60432 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60431,G__60432) : sci.impl.interpreter.interpret.call(null,G__60431,G__60432));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg60072,arg60073,arg60074,arg60075,arg60076,arg60077,arg60078,arg60079,arg60080,arg60081,arg60082,arg60083,arg60084,arg60085,arg60086,arg60087,arg60088) : f.call(null,arg60072,arg60073,arg60074,arg60075,arg60076,arg60077,arg60078,arg60079,arg60080,arg60081,arg60082,arg60083,arg60084,arg60085,arg60086,arg60087,arg60088));

break;
case (18):
var arg60089 = (function (){var G__60433 = ctx;
var G__60434 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60433,G__60434) : sci.impl.interpreter.interpret.call(null,G__60433,G__60434));
})();
var args__$1 = cljs.core.rest(args);
var arg60090 = (function (){var G__60435 = ctx;
var G__60436 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60435,G__60436) : sci.impl.interpreter.interpret.call(null,G__60435,G__60436));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60091 = (function (){var G__60437 = ctx;
var G__60438 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60437,G__60438) : sci.impl.interpreter.interpret.call(null,G__60437,G__60438));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60092 = (function (){var G__60439 = ctx;
var G__60440 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60439,G__60440) : sci.impl.interpreter.interpret.call(null,G__60439,G__60440));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60093 = (function (){var G__60441 = ctx;
var G__60442 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60441,G__60442) : sci.impl.interpreter.interpret.call(null,G__60441,G__60442));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60094 = (function (){var G__60443 = ctx;
var G__60444 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60443,G__60444) : sci.impl.interpreter.interpret.call(null,G__60443,G__60444));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60095 = (function (){var G__60445 = ctx;
var G__60446 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60445,G__60446) : sci.impl.interpreter.interpret.call(null,G__60445,G__60446));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60096 = (function (){var G__60447 = ctx;
var G__60448 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60447,G__60448) : sci.impl.interpreter.interpret.call(null,G__60447,G__60448));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg60097 = (function (){var G__60449 = ctx;
var G__60450 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60449,G__60450) : sci.impl.interpreter.interpret.call(null,G__60449,G__60450));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg60098 = (function (){var G__60451 = ctx;
var G__60452 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60451,G__60452) : sci.impl.interpreter.interpret.call(null,G__60451,G__60452));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg60099 = (function (){var G__60453 = ctx;
var G__60454 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60453,G__60454) : sci.impl.interpreter.interpret.call(null,G__60453,G__60454));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg60100 = (function (){var G__60455 = ctx;
var G__60456 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60455,G__60456) : sci.impl.interpreter.interpret.call(null,G__60455,G__60456));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg60101 = (function (){var G__60457 = ctx;
var G__60458 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60457,G__60458) : sci.impl.interpreter.interpret.call(null,G__60457,G__60458));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg60102 = (function (){var G__60459 = ctx;
var G__60460 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60459,G__60460) : sci.impl.interpreter.interpret.call(null,G__60459,G__60460));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg60103 = (function (){var G__60461 = ctx;
var G__60462 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60461,G__60462) : sci.impl.interpreter.interpret.call(null,G__60461,G__60462));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg60104 = (function (){var G__60463 = ctx;
var G__60464 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60463,G__60464) : sci.impl.interpreter.interpret.call(null,G__60463,G__60464));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg60105 = (function (){var G__60465 = ctx;
var G__60466 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60465,G__60466) : sci.impl.interpreter.interpret.call(null,G__60465,G__60466));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg60106 = (function (){var G__60467 = ctx;
var G__60468 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60467,G__60468) : sci.impl.interpreter.interpret.call(null,G__60467,G__60468));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg60089,arg60090,arg60091,arg60092,arg60093,arg60094,arg60095,arg60096,arg60097,arg60098,arg60099,arg60100,arg60101,arg60102,arg60103,arg60104,arg60105,arg60106) : f.call(null,arg60089,arg60090,arg60091,arg60092,arg60093,arg60094,arg60095,arg60096,arg60097,arg60098,arg60099,arg60100,arg60101,arg60102,arg60103,arg60104,arg60105,arg60106));

break;
case (19):
var arg60107 = (function (){var G__60469 = ctx;
var G__60470 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60469,G__60470) : sci.impl.interpreter.interpret.call(null,G__60469,G__60470));
})();
var args__$1 = cljs.core.rest(args);
var arg60108 = (function (){var G__60471 = ctx;
var G__60472 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60471,G__60472) : sci.impl.interpreter.interpret.call(null,G__60471,G__60472));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60109 = (function (){var G__60473 = ctx;
var G__60474 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60473,G__60474) : sci.impl.interpreter.interpret.call(null,G__60473,G__60474));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60110 = (function (){var G__60475 = ctx;
var G__60476 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60475,G__60476) : sci.impl.interpreter.interpret.call(null,G__60475,G__60476));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60111 = (function (){var G__60477 = ctx;
var G__60478 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60477,G__60478) : sci.impl.interpreter.interpret.call(null,G__60477,G__60478));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60112 = (function (){var G__60479 = ctx;
var G__60480 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60479,G__60480) : sci.impl.interpreter.interpret.call(null,G__60479,G__60480));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60113 = (function (){var G__60481 = ctx;
var G__60482 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60481,G__60482) : sci.impl.interpreter.interpret.call(null,G__60481,G__60482));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60114 = (function (){var G__60483 = ctx;
var G__60484 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60483,G__60484) : sci.impl.interpreter.interpret.call(null,G__60483,G__60484));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg60115 = (function (){var G__60485 = ctx;
var G__60486 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60485,G__60486) : sci.impl.interpreter.interpret.call(null,G__60485,G__60486));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg60116 = (function (){var G__60487 = ctx;
var G__60488 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60487,G__60488) : sci.impl.interpreter.interpret.call(null,G__60487,G__60488));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg60117 = (function (){var G__60489 = ctx;
var G__60490 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60489,G__60490) : sci.impl.interpreter.interpret.call(null,G__60489,G__60490));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg60118 = (function (){var G__60491 = ctx;
var G__60492 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60491,G__60492) : sci.impl.interpreter.interpret.call(null,G__60491,G__60492));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg60119 = (function (){var G__60493 = ctx;
var G__60494 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60493,G__60494) : sci.impl.interpreter.interpret.call(null,G__60493,G__60494));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg60120 = (function (){var G__60495 = ctx;
var G__60496 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60495,G__60496) : sci.impl.interpreter.interpret.call(null,G__60495,G__60496));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg60121 = (function (){var G__60497 = ctx;
var G__60498 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60497,G__60498) : sci.impl.interpreter.interpret.call(null,G__60497,G__60498));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg60122 = (function (){var G__60499 = ctx;
var G__60500 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60499,G__60500) : sci.impl.interpreter.interpret.call(null,G__60499,G__60500));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg60123 = (function (){var G__60501 = ctx;
var G__60502 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60501,G__60502) : sci.impl.interpreter.interpret.call(null,G__60501,G__60502));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg60124 = (function (){var G__60503 = ctx;
var G__60504 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60503,G__60504) : sci.impl.interpreter.interpret.call(null,G__60503,G__60504));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg60125 = (function (){var G__60505 = ctx;
var G__60506 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60505,G__60506) : sci.impl.interpreter.interpret.call(null,G__60505,G__60506));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg60107,arg60108,arg60109,arg60110,arg60111,arg60112,arg60113,arg60114,arg60115,arg60116,arg60117,arg60118,arg60119,arg60120,arg60121,arg60122,arg60123,arg60124,arg60125) : f.call(null,arg60107,arg60108,arg60109,arg60110,arg60111,arg60112,arg60113,arg60114,arg60115,arg60116,arg60117,arg60118,arg60119,arg60120,arg60121,arg60122,arg60123,arg60124,arg60125));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__4373_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__4373_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__4373_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__60507 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__60507)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__60507)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__60507)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__60507)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__60507)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__60507)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__60508 = ctx;
var G__60509 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60508,G__60509) : sci.impl.interpreter.interpret.call(null,G__60508,G__60509));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__60507)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__60507)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__60507)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__60507)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__60507)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__60507)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__60507)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__60507)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__60507)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__60510 = ctx;
var G__60511 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60510,G__60511) : sci.impl.interpreter.interpret.call(null,G__60510,G__60511));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__60507)){
return sci.impl.interpreter.eval_refer(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__60507)){
return (new cljs.core.LazySeq(null,(function (){var G__60512 = ctx;
var G__60513 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60512,G__60513) : sci.impl.interpreter.interpret.call(null,G__60512,G__60513));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__60507)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__60507)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__60507)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__60507)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60507)].join('')));

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
if(cljs.core.truth_((function (){var G__60515 = op;
var G__60516 = new cljs.core.Keyword(null,"static-access","static-access",-1860919441);
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__60515,G__60516) : sci.impl.utils.kw_identical_QMARK_.call(null,G__60515,G__60516));
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
}catch (e60514){if((e60514 instanceof Error)){
var e = e60514;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e60514;

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
var ret = ((cljs.core.not(op))?expr:(function (){var G__60523 = op;
var G__60523__$1 = (((G__60523 instanceof cljs.core.Keyword))?G__60523.fqn:null);
switch (G__60523__$1) {
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
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60520_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__60520_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__60520_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60521_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__60521_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__60521_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60522_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__60522_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__60522_SHARP_));
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
var G__60574 = cljs.core.rest(exprs);
var G__60575 = (function (){var G__60526 = ctx;
var G__60527 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__60526,G__60527) : sci.impl.interpreter.eval_form.call(null,G__60526,G__60527));
})();
exprs = G__60574;
ret = G__60575;
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
if(cljs.core.truth_((function (){var G__60530 = new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006);
var G__60531 = expr;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__60530,G__60531) : sci.impl.utils.kw_identical_QMARK_.call(null,G__60530,G__60531));
})())){
return ret;
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx,expr);
var G__60576 = ret__$1;
ret = G__60576;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__60533 = arguments.length;
switch (G__60533) {
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
