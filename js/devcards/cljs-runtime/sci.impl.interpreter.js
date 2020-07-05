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
var G__60176 = xs;
args__$2 = G__60176;
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
var G__60177 = xs;
args__$2 = G__60177;
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
var len__4789__auto___60178 = arguments.length;
var i__4790__auto___60179 = (0);
while(true){
if((i__4790__auto___60179 < len__4789__auto___60178)){
args__4795__auto__.push((arguments[i__4790__auto___60179]));

var G__60180 = (i__4790__auto___60179 + (1));
i__4790__auto___60179 = G__60180;
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
var G__60181 = ctx__$2;
var G__60182 = rest_let_bindings;
ctx__$1 = G__60181;
let_bindings__$1 = G__60182;
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
var G__60183 = nexprs;
exprs__$1 = G__60183;
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
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq59410){
var G__59411 = cljs.core.first(seq59410);
var seq59410__$1 = cljs.core.next(seq59410);
var G__59412 = cljs.core.first(seq59410__$1);
var seq59410__$2 = cljs.core.next(seq59410__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59411,G__59412,seq59410__$2);
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
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__59416){
var vec__59417 = p__59416;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59417,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59417,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59417,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59417,(3),null);
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
var v = (cljs.core.truth_((function (){var G__59424 = new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647);
var G__59425 = init__$1;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__59424,G__59425) : sci.impl.utils.kw_identical_QMARK_.call(null,G__59424,G__59425));
})())?(function (){var G__59426 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__59426,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__59426;
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
var vec__59427 = libspec;
var seq__59428 = cljs.core.seq(vec__59427);
var first__59429 = cljs.core.first(seq__59428);
var seq__59428__$1 = cljs.core.next(seq__59428);
var lib_name = first__59429;
var opts = seq__59428__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__59433 = opts;
var vec__59434 = G__59433;
var seq__59435 = cljs.core.seq(vec__59434);
var first__59436 = cljs.core.first(seq__59435);
var seq__59435__$1 = cljs.core.next(seq__59435);
var opt_name = first__59436;
var first__59436__$1 = cljs.core.first(seq__59435__$1);
var seq__59435__$2 = cljs.core.next(seq__59435__$1);
var fst_opt = first__59436__$1;
var rst_opts = seq__59435__$2;
var ret__$1 = ret;
var G__59433__$1 = G__59433;
while(true){
var ret__$2 = ret__$1;
var vec__59441 = G__59433__$1;
var seq__59442 = cljs.core.seq(vec__59441);
var first__59443 = cljs.core.first(seq__59442);
var seq__59442__$1 = cljs.core.next(seq__59442);
var opt_name__$1 = first__59443;
var first__59443__$1 = cljs.core.first(seq__59442__$1);
var seq__59442__$2 = cljs.core.next(seq__59442__$1);
var fst_opt__$1 = first__59443__$1;
var rst_opts__$1 = seq__59442__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__59444 = opt_name__$1;
var G__59444__$1 = (((G__59444 instanceof cljs.core.Keyword))?G__59444.fqn:null);
switch (G__59444__$1) {
case "as":
var G__60185 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__60186 = rst_opts__$1;
ret__$1 = G__60185;
G__59433__$1 = G__60186;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__60187 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__60188 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__60187;
G__59433__$1 = G__60188;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__60189 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__60190 = rst_opts__$1;
ret__$1 = G__60189;
G__59433__$1 = G__60190;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59444__$1)].join('')));

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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__59445){
var vec__59446 = p__59445;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59446,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59446,(1),null);
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
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(env,use_QMARK_,current_ns,the_loaded_ns,lib_name,p__59449){
var map__59450 = p__59449;
var map__59450__$1 = (((((!((map__59450 == null))))?(((((map__59450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59450):map__59450);
var _parsed_libspec = map__59450__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59450__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59450__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59450__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59450__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59450__$1,new cljs.core.Keyword(null,"only","only",1907811652));
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
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4185__auto__ = (function (){var G__59454 = new cljs.core.Keyword(null,"all","all",892129742);
var G__59455 = refer;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__59454,G__59455) : sci.impl.utils.kw_identical_QMARK_.call(null,G__59454,G__59455));
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
var vec__59457 = temp__5733__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59457,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59457,(1),null);
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
var map__59460 = sci.impl.interpreter.parse_libspec(libspec);
var map__59460__$1 = (((((!((map__59460 == null))))?(((((map__59460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59460):map__59460);
var parsed_libspec = map__59460__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59460__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59460__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
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
var temp__5733__auto____$2 = (function (){var G__59462 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__59462) : load_fn.call(null,G__59462));
})();
if(cljs.core.truth_(temp__5733__auto____$2)){
var map__59464 = temp__5733__auto____$2;
var map__59464__$1 = (((((!((map__59464 == null))))?(((((map__59464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59464):map__59464);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59464__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59464__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__59470_60191 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__59471_60192 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__59470_60191,G__59471_60192) : sci.impl.interpreter.eval_string_STAR_.call(null,G__59470_60191,G__59471_60192));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e59469){if((e59469 instanceof Error)){
var e_60193 = e59469;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_60193;
} else {
throw e59469;

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
var len__4789__auto___60194 = arguments.length;
var i__4790__auto___60195 = (0);
while(true){
if((i__4790__auto___60195 < len__4789__auto___60194)){
args__4795__auto__.push((arguments[i__4790__auto___60195]));

var G__60196 = (i__4790__auto___60195 + (1));
i__4790__auto___60195 = G__60196;
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
var ret = (function (){var G__59487 = ctx;
var G__59488 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59487,G__59488) : sci.impl.interpreter.interpret.call(null,G__59487,G__59488));
})();
if((ret instanceof cljs.core.Symbol)){
var G__60197 = (function (){var G__59489 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__59489,current_libspec);
} else {
return G__59489;
}
})();
var G__60198 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__60199 = cljs.core.next(args__$1);
libspecs = G__60197;
current_libspec = G__60198;
args__$1 = G__60199;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__60200 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__60201 = null;
var G__60202 = cljs.core.next(args__$1);
libspecs = G__60200;
current_libspec = G__60201;
args__$1 = G__60202;
continue;
} else {
var G__60203 = (function (){var G__59490 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__59490,current_libspec);
} else {
return G__59490;
}
})();
var G__60204 = ret;
var G__60205 = cljs.core.next(args__$1);
libspecs = G__60203;
current_libspec = G__60204;
args__$1 = G__60205;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__59491 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__59491,current_libspec);
} else {
return G__59491;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__59475_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__59475_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq59477){
var G__59478 = cljs.core.first(seq59477);
var seq59477__$1 = cljs.core.next(seq59477);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59478,seq59477__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4795__auto__ = [];
var len__4789__auto___60206 = arguments.length;
var i__4790__auto___60207 = (0);
while(true){
if((i__4790__auto___60207 < len__4789__auto___60206)){
args__4795__auto__.push((arguments[i__4790__auto___60207]));

var G__60208 = (i__4790__auto___60207 + (1));
i__4790__auto___60207 = G__60208;
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
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq59492){
var G__59493 = cljs.core.first(seq59492);
var seq59492__$1 = cljs.core.next(seq59492);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59493,seq59492__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__59509){
var vec__59510 = p__59509;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59510,(0),null);
var map__59513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59510,(1),null);
var map__59513__$1 = (((((!((map__59513 == null))))?(((((map__59513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59513):map__59513);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59513__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59513__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59513__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5733__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__59515 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59515,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59515,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__59518 = ctx;
var G__59519 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59518,G__59519) : sci.impl.interpreter.interpret.call(null,G__59518,G__59519));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__59520 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__59520__$1 = (((((!((map__59520 == null))))?(((((map__59520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59520):map__59520);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59520__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59520__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59520__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__59528 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__59529 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__59529);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__59528);
}}catch (e59522){if((e59522 instanceof Error)){
var e = e59522;
var temp__5733__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__59523 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__59524 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59523,G__59524) : sci.impl.interpreter.interpret.call(null,G__59523,G__59524));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__59525 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59525,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59525,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e59522;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__59530){
var vec__59531 = p__59530;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59531,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59531,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59534_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__59534_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__59534_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__59536){
var vec__59537 = p__59536;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59537,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59537,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59537,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59535_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__59535_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__59535_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__59542,p__59543){
var map__59544 = p__59542;
var map__59544__$1 = (((((!((map__59544 == null))))?(((((map__59544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59544):map__59544);
var ctx = map__59544__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59544__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__59545 = p__59543;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59545,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59545,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59545,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59545,(3),null);
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

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59541_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__59541_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__59541_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__59549){
var vec__59550 = p__59549;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59550,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59550,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(ctx,p__59553){
var vec__59554 = p__59553;
var seq__59555 = cljs.core.seq(vec__59554);
var first__59556 = cljs.core.first(seq__59555);
var seq__59555__$1 = cljs.core.next(seq__59555);
var _ = first__59556;
var first__59556__$1 = cljs.core.first(seq__59555__$1);
var seq__59555__$2 = cljs.core.next(seq__59555__$1);
var ns_sym = first__59556__$1;
var exprs = seq__59555__$2;
var ns_sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_sym) : sci.impl.interpreter.interpret.call(null,ctx,ns_sym));
var exprs__$1 = exprs;
while(true){
if(exprs__$1){
var vec__59557 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59557,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59557,(1),null);
var G__59560_60209 = k;
var G__59560_60210__$1 = (((G__59560_60209 instanceof cljs.core.Keyword))?G__59560_60209.fqn:null);
switch (G__59560_60210__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__59560_60209,G__59560_60210__$1,vec__59557,k,v,ns_sym__$1,vec__59554,seq__59555,first__59556,seq__59555__$1,_,first__59556__$1,seq__59555__$2,ns_sym,exprs){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__59560_60209,G__59560_60210__$1,vec__59557,k,v,ns_sym__$1,vec__59554,seq__59555,first__59556,seq__59555__$1,_,first__59556__$1,seq__59555__$2,ns_sym,exprs))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59560_60210__$1)].join('')));

}

var G__60212 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__60212;
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
sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__59561){
var vec__59562 = p__59561;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59562,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59562,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59562,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__59568 = exprs;
var vec__59569 = G__59568;
var seq__59570 = cljs.core.seq(vec__59569);
var first__59571 = cljs.core.first(seq__59570);
var seq__59570__$1 = cljs.core.next(seq__59570);
var expr = first__59571;
var exprs__$1 = seq__59570__$1;
var G__59568__$1 = G__59568;
while(true){
var vec__59572 = G__59568__$1;
var seq__59573 = cljs.core.seq(vec__59572);
var first__59574 = cljs.core.first(seq__59573);
var seq__59573__$1 = cljs.core.next(seq__59573);
var expr__$1 = first__59574;
var exprs__$2 = seq__59573__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e59575){if((e59575 instanceof Error)){
var e = e59575;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e59575;

}
}})();
var temp__5733__auto__ = cljs.core.seq(exprs__$2);
if(temp__5733__auto__){
var exprs__$3 = temp__5733__auto__;
var G__60213 = exprs__$3;
G__59568__$1 = G__60213;
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
var G__59768 = cljs.core.count(args);
switch (G__59768) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg59578 = (function (){var G__59769 = ctx;
var G__59770 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59769,G__59770) : sci.impl.interpreter.interpret.call(null,G__59769,G__59770));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg59578) : f.call(null,arg59578));

break;
case (2):
var arg59579 = (function (){var G__59771 = ctx;
var G__59772 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59771,G__59772) : sci.impl.interpreter.interpret.call(null,G__59771,G__59772));
})();
var args__$1 = cljs.core.rest(args);
var arg59580 = (function (){var G__59773 = ctx;
var G__59774 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59773,G__59774) : sci.impl.interpreter.interpret.call(null,G__59773,G__59774));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg59579,arg59580) : f.call(null,arg59579,arg59580));

break;
case (3):
var arg59581 = (function (){var G__59775 = ctx;
var G__59776 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59775,G__59776) : sci.impl.interpreter.interpret.call(null,G__59775,G__59776));
})();
var args__$1 = cljs.core.rest(args);
var arg59582 = (function (){var G__59777 = ctx;
var G__59778 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59777,G__59778) : sci.impl.interpreter.interpret.call(null,G__59777,G__59778));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59583 = (function (){var G__59779 = ctx;
var G__59780 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59779,G__59780) : sci.impl.interpreter.interpret.call(null,G__59779,G__59780));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg59581,arg59582,arg59583) : f.call(null,arg59581,arg59582,arg59583));

break;
case (4):
var arg59584 = (function (){var G__59781 = ctx;
var G__59782 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59781,G__59782) : sci.impl.interpreter.interpret.call(null,G__59781,G__59782));
})();
var args__$1 = cljs.core.rest(args);
var arg59585 = (function (){var G__59783 = ctx;
var G__59784 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59783,G__59784) : sci.impl.interpreter.interpret.call(null,G__59783,G__59784));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59586 = (function (){var G__59785 = ctx;
var G__59786 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59785,G__59786) : sci.impl.interpreter.interpret.call(null,G__59785,G__59786));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59587 = (function (){var G__59787 = ctx;
var G__59788 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59787,G__59788) : sci.impl.interpreter.interpret.call(null,G__59787,G__59788));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg59584,arg59585,arg59586,arg59587) : f.call(null,arg59584,arg59585,arg59586,arg59587));

break;
case (5):
var arg59588 = (function (){var G__59789 = ctx;
var G__59790 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59789,G__59790) : sci.impl.interpreter.interpret.call(null,G__59789,G__59790));
})();
var args__$1 = cljs.core.rest(args);
var arg59589 = (function (){var G__59791 = ctx;
var G__59792 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59791,G__59792) : sci.impl.interpreter.interpret.call(null,G__59791,G__59792));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59590 = (function (){var G__59793 = ctx;
var G__59794 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59793,G__59794) : sci.impl.interpreter.interpret.call(null,G__59793,G__59794));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59591 = (function (){var G__59795 = ctx;
var G__59796 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59795,G__59796) : sci.impl.interpreter.interpret.call(null,G__59795,G__59796));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59592 = (function (){var G__59797 = ctx;
var G__59798 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59797,G__59798) : sci.impl.interpreter.interpret.call(null,G__59797,G__59798));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg59588,arg59589,arg59590,arg59591,arg59592) : f.call(null,arg59588,arg59589,arg59590,arg59591,arg59592));

break;
case (6):
var arg59593 = (function (){var G__59799 = ctx;
var G__59800 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59799,G__59800) : sci.impl.interpreter.interpret.call(null,G__59799,G__59800));
})();
var args__$1 = cljs.core.rest(args);
var arg59594 = (function (){var G__59801 = ctx;
var G__59802 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59801,G__59802) : sci.impl.interpreter.interpret.call(null,G__59801,G__59802));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59595 = (function (){var G__59803 = ctx;
var G__59804 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59803,G__59804) : sci.impl.interpreter.interpret.call(null,G__59803,G__59804));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59596 = (function (){var G__59805 = ctx;
var G__59806 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59805,G__59806) : sci.impl.interpreter.interpret.call(null,G__59805,G__59806));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59597 = (function (){var G__59807 = ctx;
var G__59808 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59807,G__59808) : sci.impl.interpreter.interpret.call(null,G__59807,G__59808));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59598 = (function (){var G__59809 = ctx;
var G__59810 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59809,G__59810) : sci.impl.interpreter.interpret.call(null,G__59809,G__59810));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg59593,arg59594,arg59595,arg59596,arg59597,arg59598) : f.call(null,arg59593,arg59594,arg59595,arg59596,arg59597,arg59598));

break;
case (7):
var arg59599 = (function (){var G__59811 = ctx;
var G__59812 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59811,G__59812) : sci.impl.interpreter.interpret.call(null,G__59811,G__59812));
})();
var args__$1 = cljs.core.rest(args);
var arg59600 = (function (){var G__59813 = ctx;
var G__59814 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59813,G__59814) : sci.impl.interpreter.interpret.call(null,G__59813,G__59814));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59601 = (function (){var G__59815 = ctx;
var G__59816 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59815,G__59816) : sci.impl.interpreter.interpret.call(null,G__59815,G__59816));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59602 = (function (){var G__59817 = ctx;
var G__59818 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59817,G__59818) : sci.impl.interpreter.interpret.call(null,G__59817,G__59818));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59603 = (function (){var G__59819 = ctx;
var G__59820 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59819,G__59820) : sci.impl.interpreter.interpret.call(null,G__59819,G__59820));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59604 = (function (){var G__59821 = ctx;
var G__59822 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59821,G__59822) : sci.impl.interpreter.interpret.call(null,G__59821,G__59822));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59605 = (function (){var G__59823 = ctx;
var G__59824 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59823,G__59824) : sci.impl.interpreter.interpret.call(null,G__59823,G__59824));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg59599,arg59600,arg59601,arg59602,arg59603,arg59604,arg59605) : f.call(null,arg59599,arg59600,arg59601,arg59602,arg59603,arg59604,arg59605));

break;
case (8):
var arg59606 = (function (){var G__59825 = ctx;
var G__59826 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59825,G__59826) : sci.impl.interpreter.interpret.call(null,G__59825,G__59826));
})();
var args__$1 = cljs.core.rest(args);
var arg59607 = (function (){var G__59827 = ctx;
var G__59828 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59827,G__59828) : sci.impl.interpreter.interpret.call(null,G__59827,G__59828));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59608 = (function (){var G__59829 = ctx;
var G__59830 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59829,G__59830) : sci.impl.interpreter.interpret.call(null,G__59829,G__59830));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59609 = (function (){var G__59831 = ctx;
var G__59832 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59831,G__59832) : sci.impl.interpreter.interpret.call(null,G__59831,G__59832));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59610 = (function (){var G__59833 = ctx;
var G__59834 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59833,G__59834) : sci.impl.interpreter.interpret.call(null,G__59833,G__59834));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59611 = (function (){var G__59835 = ctx;
var G__59836 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59835,G__59836) : sci.impl.interpreter.interpret.call(null,G__59835,G__59836));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59612 = (function (){var G__59837 = ctx;
var G__59838 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59837,G__59838) : sci.impl.interpreter.interpret.call(null,G__59837,G__59838));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59613 = (function (){var G__59839 = ctx;
var G__59840 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59839,G__59840) : sci.impl.interpreter.interpret.call(null,G__59839,G__59840));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg59606,arg59607,arg59608,arg59609,arg59610,arg59611,arg59612,arg59613) : f.call(null,arg59606,arg59607,arg59608,arg59609,arg59610,arg59611,arg59612,arg59613));

break;
case (9):
var arg59614 = (function (){var G__59841 = ctx;
var G__59842 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59841,G__59842) : sci.impl.interpreter.interpret.call(null,G__59841,G__59842));
})();
var args__$1 = cljs.core.rest(args);
var arg59615 = (function (){var G__59843 = ctx;
var G__59844 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59843,G__59844) : sci.impl.interpreter.interpret.call(null,G__59843,G__59844));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59616 = (function (){var G__59845 = ctx;
var G__59846 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59845,G__59846) : sci.impl.interpreter.interpret.call(null,G__59845,G__59846));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59617 = (function (){var G__59847 = ctx;
var G__59848 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59847,G__59848) : sci.impl.interpreter.interpret.call(null,G__59847,G__59848));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59618 = (function (){var G__59849 = ctx;
var G__59850 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59849,G__59850) : sci.impl.interpreter.interpret.call(null,G__59849,G__59850));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59619 = (function (){var G__59851 = ctx;
var G__59852 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59851,G__59852) : sci.impl.interpreter.interpret.call(null,G__59851,G__59852));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59620 = (function (){var G__59853 = ctx;
var G__59854 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59853,G__59854) : sci.impl.interpreter.interpret.call(null,G__59853,G__59854));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59621 = (function (){var G__59855 = ctx;
var G__59856 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59855,G__59856) : sci.impl.interpreter.interpret.call(null,G__59855,G__59856));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59622 = (function (){var G__59857 = ctx;
var G__59858 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59857,G__59858) : sci.impl.interpreter.interpret.call(null,G__59857,G__59858));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg59614,arg59615,arg59616,arg59617,arg59618,arg59619,arg59620,arg59621,arg59622) : f.call(null,arg59614,arg59615,arg59616,arg59617,arg59618,arg59619,arg59620,arg59621,arg59622));

break;
case (10):
var arg59623 = (function (){var G__59859 = ctx;
var G__59860 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59859,G__59860) : sci.impl.interpreter.interpret.call(null,G__59859,G__59860));
})();
var args__$1 = cljs.core.rest(args);
var arg59624 = (function (){var G__59861 = ctx;
var G__59862 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59861,G__59862) : sci.impl.interpreter.interpret.call(null,G__59861,G__59862));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59625 = (function (){var G__59863 = ctx;
var G__59864 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59863,G__59864) : sci.impl.interpreter.interpret.call(null,G__59863,G__59864));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59626 = (function (){var G__59865 = ctx;
var G__59866 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59865,G__59866) : sci.impl.interpreter.interpret.call(null,G__59865,G__59866));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59627 = (function (){var G__59867 = ctx;
var G__59868 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59867,G__59868) : sci.impl.interpreter.interpret.call(null,G__59867,G__59868));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59628 = (function (){var G__59869 = ctx;
var G__59870 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59869,G__59870) : sci.impl.interpreter.interpret.call(null,G__59869,G__59870));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59629 = (function (){var G__59871 = ctx;
var G__59872 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59871,G__59872) : sci.impl.interpreter.interpret.call(null,G__59871,G__59872));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59630 = (function (){var G__59873 = ctx;
var G__59874 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59873,G__59874) : sci.impl.interpreter.interpret.call(null,G__59873,G__59874));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59631 = (function (){var G__59875 = ctx;
var G__59876 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59875,G__59876) : sci.impl.interpreter.interpret.call(null,G__59875,G__59876));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59632 = (function (){var G__59877 = ctx;
var G__59878 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59877,G__59878) : sci.impl.interpreter.interpret.call(null,G__59877,G__59878));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg59623,arg59624,arg59625,arg59626,arg59627,arg59628,arg59629,arg59630,arg59631,arg59632) : f.call(null,arg59623,arg59624,arg59625,arg59626,arg59627,arg59628,arg59629,arg59630,arg59631,arg59632));

break;
case (11):
var arg59633 = (function (){var G__59879 = ctx;
var G__59880 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59879,G__59880) : sci.impl.interpreter.interpret.call(null,G__59879,G__59880));
})();
var args__$1 = cljs.core.rest(args);
var arg59634 = (function (){var G__59881 = ctx;
var G__59882 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59881,G__59882) : sci.impl.interpreter.interpret.call(null,G__59881,G__59882));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59635 = (function (){var G__59883 = ctx;
var G__59884 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59883,G__59884) : sci.impl.interpreter.interpret.call(null,G__59883,G__59884));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59636 = (function (){var G__59885 = ctx;
var G__59886 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59885,G__59886) : sci.impl.interpreter.interpret.call(null,G__59885,G__59886));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59637 = (function (){var G__59887 = ctx;
var G__59888 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59887,G__59888) : sci.impl.interpreter.interpret.call(null,G__59887,G__59888));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59638 = (function (){var G__59889 = ctx;
var G__59890 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59889,G__59890) : sci.impl.interpreter.interpret.call(null,G__59889,G__59890));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59639 = (function (){var G__59891 = ctx;
var G__59892 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59891,G__59892) : sci.impl.interpreter.interpret.call(null,G__59891,G__59892));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59640 = (function (){var G__59893 = ctx;
var G__59894 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59893,G__59894) : sci.impl.interpreter.interpret.call(null,G__59893,G__59894));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59641 = (function (){var G__59895 = ctx;
var G__59896 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59895,G__59896) : sci.impl.interpreter.interpret.call(null,G__59895,G__59896));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59642 = (function (){var G__59897 = ctx;
var G__59898 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59897,G__59898) : sci.impl.interpreter.interpret.call(null,G__59897,G__59898));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59643 = (function (){var G__59899 = ctx;
var G__59900 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59899,G__59900) : sci.impl.interpreter.interpret.call(null,G__59899,G__59900));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg59633,arg59634,arg59635,arg59636,arg59637,arg59638,arg59639,arg59640,arg59641,arg59642,arg59643) : f.call(null,arg59633,arg59634,arg59635,arg59636,arg59637,arg59638,arg59639,arg59640,arg59641,arg59642,arg59643));

break;
case (12):
var arg59644 = (function (){var G__59901 = ctx;
var G__59902 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59901,G__59902) : sci.impl.interpreter.interpret.call(null,G__59901,G__59902));
})();
var args__$1 = cljs.core.rest(args);
var arg59645 = (function (){var G__59903 = ctx;
var G__59904 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59903,G__59904) : sci.impl.interpreter.interpret.call(null,G__59903,G__59904));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59646 = (function (){var G__59905 = ctx;
var G__59906 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59905,G__59906) : sci.impl.interpreter.interpret.call(null,G__59905,G__59906));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59647 = (function (){var G__59907 = ctx;
var G__59908 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59907,G__59908) : sci.impl.interpreter.interpret.call(null,G__59907,G__59908));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59648 = (function (){var G__59909 = ctx;
var G__59910 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59909,G__59910) : sci.impl.interpreter.interpret.call(null,G__59909,G__59910));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59649 = (function (){var G__59911 = ctx;
var G__59912 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59911,G__59912) : sci.impl.interpreter.interpret.call(null,G__59911,G__59912));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59650 = (function (){var G__59913 = ctx;
var G__59914 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59913,G__59914) : sci.impl.interpreter.interpret.call(null,G__59913,G__59914));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59651 = (function (){var G__59915 = ctx;
var G__59916 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59915,G__59916) : sci.impl.interpreter.interpret.call(null,G__59915,G__59916));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59652 = (function (){var G__59917 = ctx;
var G__59918 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59917,G__59918) : sci.impl.interpreter.interpret.call(null,G__59917,G__59918));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59653 = (function (){var G__59919 = ctx;
var G__59920 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59919,G__59920) : sci.impl.interpreter.interpret.call(null,G__59919,G__59920));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59654 = (function (){var G__59921 = ctx;
var G__59922 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59921,G__59922) : sci.impl.interpreter.interpret.call(null,G__59921,G__59922));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59655 = (function (){var G__59923 = ctx;
var G__59924 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59923,G__59924) : sci.impl.interpreter.interpret.call(null,G__59923,G__59924));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg59644,arg59645,arg59646,arg59647,arg59648,arg59649,arg59650,arg59651,arg59652,arg59653,arg59654,arg59655) : f.call(null,arg59644,arg59645,arg59646,arg59647,arg59648,arg59649,arg59650,arg59651,arg59652,arg59653,arg59654,arg59655));

break;
case (13):
var arg59656 = (function (){var G__59925 = ctx;
var G__59926 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59925,G__59926) : sci.impl.interpreter.interpret.call(null,G__59925,G__59926));
})();
var args__$1 = cljs.core.rest(args);
var arg59657 = (function (){var G__59927 = ctx;
var G__59928 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59927,G__59928) : sci.impl.interpreter.interpret.call(null,G__59927,G__59928));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59658 = (function (){var G__59929 = ctx;
var G__59930 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59929,G__59930) : sci.impl.interpreter.interpret.call(null,G__59929,G__59930));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59659 = (function (){var G__59931 = ctx;
var G__59932 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59931,G__59932) : sci.impl.interpreter.interpret.call(null,G__59931,G__59932));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59660 = (function (){var G__59933 = ctx;
var G__59934 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59933,G__59934) : sci.impl.interpreter.interpret.call(null,G__59933,G__59934));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59661 = (function (){var G__59935 = ctx;
var G__59936 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59935,G__59936) : sci.impl.interpreter.interpret.call(null,G__59935,G__59936));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59662 = (function (){var G__59937 = ctx;
var G__59938 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59937,G__59938) : sci.impl.interpreter.interpret.call(null,G__59937,G__59938));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59663 = (function (){var G__59939 = ctx;
var G__59940 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59939,G__59940) : sci.impl.interpreter.interpret.call(null,G__59939,G__59940));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59664 = (function (){var G__59941 = ctx;
var G__59942 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59941,G__59942) : sci.impl.interpreter.interpret.call(null,G__59941,G__59942));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59665 = (function (){var G__59943 = ctx;
var G__59944 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59943,G__59944) : sci.impl.interpreter.interpret.call(null,G__59943,G__59944));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59666 = (function (){var G__59945 = ctx;
var G__59946 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59945,G__59946) : sci.impl.interpreter.interpret.call(null,G__59945,G__59946));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59667 = (function (){var G__59947 = ctx;
var G__59948 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59947,G__59948) : sci.impl.interpreter.interpret.call(null,G__59947,G__59948));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59668 = (function (){var G__59949 = ctx;
var G__59950 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59949,G__59950) : sci.impl.interpreter.interpret.call(null,G__59949,G__59950));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg59656,arg59657,arg59658,arg59659,arg59660,arg59661,arg59662,arg59663,arg59664,arg59665,arg59666,arg59667,arg59668) : f.call(null,arg59656,arg59657,arg59658,arg59659,arg59660,arg59661,arg59662,arg59663,arg59664,arg59665,arg59666,arg59667,arg59668));

break;
case (14):
var arg59669 = (function (){var G__59951 = ctx;
var G__59952 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59951,G__59952) : sci.impl.interpreter.interpret.call(null,G__59951,G__59952));
})();
var args__$1 = cljs.core.rest(args);
var arg59670 = (function (){var G__59953 = ctx;
var G__59954 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59953,G__59954) : sci.impl.interpreter.interpret.call(null,G__59953,G__59954));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59671 = (function (){var G__59955 = ctx;
var G__59956 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59955,G__59956) : sci.impl.interpreter.interpret.call(null,G__59955,G__59956));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59672 = (function (){var G__59957 = ctx;
var G__59958 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59957,G__59958) : sci.impl.interpreter.interpret.call(null,G__59957,G__59958));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59673 = (function (){var G__59959 = ctx;
var G__59960 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59959,G__59960) : sci.impl.interpreter.interpret.call(null,G__59959,G__59960));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59674 = (function (){var G__59961 = ctx;
var G__59962 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59961,G__59962) : sci.impl.interpreter.interpret.call(null,G__59961,G__59962));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59675 = (function (){var G__59963 = ctx;
var G__59964 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59963,G__59964) : sci.impl.interpreter.interpret.call(null,G__59963,G__59964));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59676 = (function (){var G__59965 = ctx;
var G__59966 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59965,G__59966) : sci.impl.interpreter.interpret.call(null,G__59965,G__59966));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59677 = (function (){var G__59967 = ctx;
var G__59968 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59967,G__59968) : sci.impl.interpreter.interpret.call(null,G__59967,G__59968));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59678 = (function (){var G__59969 = ctx;
var G__59970 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59969,G__59970) : sci.impl.interpreter.interpret.call(null,G__59969,G__59970));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59679 = (function (){var G__59971 = ctx;
var G__59972 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59971,G__59972) : sci.impl.interpreter.interpret.call(null,G__59971,G__59972));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59680 = (function (){var G__59973 = ctx;
var G__59974 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59973,G__59974) : sci.impl.interpreter.interpret.call(null,G__59973,G__59974));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59681 = (function (){var G__59975 = ctx;
var G__59976 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59975,G__59976) : sci.impl.interpreter.interpret.call(null,G__59975,G__59976));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg59682 = (function (){var G__59977 = ctx;
var G__59978 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59977,G__59978) : sci.impl.interpreter.interpret.call(null,G__59977,G__59978));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg59669,arg59670,arg59671,arg59672,arg59673,arg59674,arg59675,arg59676,arg59677,arg59678,arg59679,arg59680,arg59681,arg59682) : f.call(null,arg59669,arg59670,arg59671,arg59672,arg59673,arg59674,arg59675,arg59676,arg59677,arg59678,arg59679,arg59680,arg59681,arg59682));

break;
case (15):
var arg59683 = (function (){var G__59979 = ctx;
var G__59980 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59979,G__59980) : sci.impl.interpreter.interpret.call(null,G__59979,G__59980));
})();
var args__$1 = cljs.core.rest(args);
var arg59684 = (function (){var G__59981 = ctx;
var G__59982 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59981,G__59982) : sci.impl.interpreter.interpret.call(null,G__59981,G__59982));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59685 = (function (){var G__59983 = ctx;
var G__59984 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59983,G__59984) : sci.impl.interpreter.interpret.call(null,G__59983,G__59984));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59686 = (function (){var G__59985 = ctx;
var G__59986 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59985,G__59986) : sci.impl.interpreter.interpret.call(null,G__59985,G__59986));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59687 = (function (){var G__59987 = ctx;
var G__59988 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59987,G__59988) : sci.impl.interpreter.interpret.call(null,G__59987,G__59988));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59688 = (function (){var G__59989 = ctx;
var G__59990 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59989,G__59990) : sci.impl.interpreter.interpret.call(null,G__59989,G__59990));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59689 = (function (){var G__59991 = ctx;
var G__59992 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59991,G__59992) : sci.impl.interpreter.interpret.call(null,G__59991,G__59992));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59690 = (function (){var G__59993 = ctx;
var G__59994 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59993,G__59994) : sci.impl.interpreter.interpret.call(null,G__59993,G__59994));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59691 = (function (){var G__59995 = ctx;
var G__59996 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59995,G__59996) : sci.impl.interpreter.interpret.call(null,G__59995,G__59996));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59692 = (function (){var G__59997 = ctx;
var G__59998 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59997,G__59998) : sci.impl.interpreter.interpret.call(null,G__59997,G__59998));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59693 = (function (){var G__59999 = ctx;
var G__60000 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59999,G__60000) : sci.impl.interpreter.interpret.call(null,G__59999,G__60000));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59694 = (function (){var G__60001 = ctx;
var G__60002 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60001,G__60002) : sci.impl.interpreter.interpret.call(null,G__60001,G__60002));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59695 = (function (){var G__60003 = ctx;
var G__60004 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60003,G__60004) : sci.impl.interpreter.interpret.call(null,G__60003,G__60004));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg59696 = (function (){var G__60005 = ctx;
var G__60006 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60005,G__60006) : sci.impl.interpreter.interpret.call(null,G__60005,G__60006));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg59697 = (function (){var G__60007 = ctx;
var G__60008 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60007,G__60008) : sci.impl.interpreter.interpret.call(null,G__60007,G__60008));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg59683,arg59684,arg59685,arg59686,arg59687,arg59688,arg59689,arg59690,arg59691,arg59692,arg59693,arg59694,arg59695,arg59696,arg59697) : f.call(null,arg59683,arg59684,arg59685,arg59686,arg59687,arg59688,arg59689,arg59690,arg59691,arg59692,arg59693,arg59694,arg59695,arg59696,arg59697));

break;
case (16):
var arg59698 = (function (){var G__60009 = ctx;
var G__60010 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60009,G__60010) : sci.impl.interpreter.interpret.call(null,G__60009,G__60010));
})();
var args__$1 = cljs.core.rest(args);
var arg59699 = (function (){var G__60011 = ctx;
var G__60012 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60011,G__60012) : sci.impl.interpreter.interpret.call(null,G__60011,G__60012));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59700 = (function (){var G__60013 = ctx;
var G__60014 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60013,G__60014) : sci.impl.interpreter.interpret.call(null,G__60013,G__60014));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59701 = (function (){var G__60015 = ctx;
var G__60016 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60015,G__60016) : sci.impl.interpreter.interpret.call(null,G__60015,G__60016));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59702 = (function (){var G__60017 = ctx;
var G__60018 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60017,G__60018) : sci.impl.interpreter.interpret.call(null,G__60017,G__60018));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59703 = (function (){var G__60019 = ctx;
var G__60020 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60019,G__60020) : sci.impl.interpreter.interpret.call(null,G__60019,G__60020));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59704 = (function (){var G__60021 = ctx;
var G__60022 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60021,G__60022) : sci.impl.interpreter.interpret.call(null,G__60021,G__60022));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59705 = (function (){var G__60023 = ctx;
var G__60024 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60023,G__60024) : sci.impl.interpreter.interpret.call(null,G__60023,G__60024));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59706 = (function (){var G__60025 = ctx;
var G__60026 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60025,G__60026) : sci.impl.interpreter.interpret.call(null,G__60025,G__60026));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59707 = (function (){var G__60027 = ctx;
var G__60028 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60027,G__60028) : sci.impl.interpreter.interpret.call(null,G__60027,G__60028));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59708 = (function (){var G__60029 = ctx;
var G__60030 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60029,G__60030) : sci.impl.interpreter.interpret.call(null,G__60029,G__60030));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59709 = (function (){var G__60031 = ctx;
var G__60032 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60031,G__60032) : sci.impl.interpreter.interpret.call(null,G__60031,G__60032));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59710 = (function (){var G__60033 = ctx;
var G__60034 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60033,G__60034) : sci.impl.interpreter.interpret.call(null,G__60033,G__60034));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg59711 = (function (){var G__60035 = ctx;
var G__60036 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60035,G__60036) : sci.impl.interpreter.interpret.call(null,G__60035,G__60036));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg59712 = (function (){var G__60037 = ctx;
var G__60038 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60037,G__60038) : sci.impl.interpreter.interpret.call(null,G__60037,G__60038));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg59713 = (function (){var G__60039 = ctx;
var G__60040 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60039,G__60040) : sci.impl.interpreter.interpret.call(null,G__60039,G__60040));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg59698,arg59699,arg59700,arg59701,arg59702,arg59703,arg59704,arg59705,arg59706,arg59707,arg59708,arg59709,arg59710,arg59711,arg59712,arg59713) : f.call(null,arg59698,arg59699,arg59700,arg59701,arg59702,arg59703,arg59704,arg59705,arg59706,arg59707,arg59708,arg59709,arg59710,arg59711,arg59712,arg59713));

break;
case (17):
var arg59714 = (function (){var G__60041 = ctx;
var G__60042 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60041,G__60042) : sci.impl.interpreter.interpret.call(null,G__60041,G__60042));
})();
var args__$1 = cljs.core.rest(args);
var arg59715 = (function (){var G__60043 = ctx;
var G__60044 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60043,G__60044) : sci.impl.interpreter.interpret.call(null,G__60043,G__60044));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59716 = (function (){var G__60045 = ctx;
var G__60046 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60045,G__60046) : sci.impl.interpreter.interpret.call(null,G__60045,G__60046));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59717 = (function (){var G__60047 = ctx;
var G__60048 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60047,G__60048) : sci.impl.interpreter.interpret.call(null,G__60047,G__60048));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59718 = (function (){var G__60049 = ctx;
var G__60050 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60049,G__60050) : sci.impl.interpreter.interpret.call(null,G__60049,G__60050));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59719 = (function (){var G__60051 = ctx;
var G__60052 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60051,G__60052) : sci.impl.interpreter.interpret.call(null,G__60051,G__60052));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59720 = (function (){var G__60053 = ctx;
var G__60054 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60053,G__60054) : sci.impl.interpreter.interpret.call(null,G__60053,G__60054));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59721 = (function (){var G__60055 = ctx;
var G__60056 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60055,G__60056) : sci.impl.interpreter.interpret.call(null,G__60055,G__60056));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59722 = (function (){var G__60057 = ctx;
var G__60058 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60057,G__60058) : sci.impl.interpreter.interpret.call(null,G__60057,G__60058));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59723 = (function (){var G__60059 = ctx;
var G__60060 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60059,G__60060) : sci.impl.interpreter.interpret.call(null,G__60059,G__60060));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59724 = (function (){var G__60061 = ctx;
var G__60062 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60061,G__60062) : sci.impl.interpreter.interpret.call(null,G__60061,G__60062));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59725 = (function (){var G__60063 = ctx;
var G__60064 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60063,G__60064) : sci.impl.interpreter.interpret.call(null,G__60063,G__60064));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59726 = (function (){var G__60065 = ctx;
var G__60066 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60065,G__60066) : sci.impl.interpreter.interpret.call(null,G__60065,G__60066));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg59727 = (function (){var G__60067 = ctx;
var G__60068 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60067,G__60068) : sci.impl.interpreter.interpret.call(null,G__60067,G__60068));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg59728 = (function (){var G__60069 = ctx;
var G__60070 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60069,G__60070) : sci.impl.interpreter.interpret.call(null,G__60069,G__60070));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg59729 = (function (){var G__60071 = ctx;
var G__60072 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60071,G__60072) : sci.impl.interpreter.interpret.call(null,G__60071,G__60072));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg59730 = (function (){var G__60073 = ctx;
var G__60074 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60073,G__60074) : sci.impl.interpreter.interpret.call(null,G__60073,G__60074));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg59714,arg59715,arg59716,arg59717,arg59718,arg59719,arg59720,arg59721,arg59722,arg59723,arg59724,arg59725,arg59726,arg59727,arg59728,arg59729,arg59730) : f.call(null,arg59714,arg59715,arg59716,arg59717,arg59718,arg59719,arg59720,arg59721,arg59722,arg59723,arg59724,arg59725,arg59726,arg59727,arg59728,arg59729,arg59730));

break;
case (18):
var arg59731 = (function (){var G__60075 = ctx;
var G__60076 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60075,G__60076) : sci.impl.interpreter.interpret.call(null,G__60075,G__60076));
})();
var args__$1 = cljs.core.rest(args);
var arg59732 = (function (){var G__60077 = ctx;
var G__60078 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60077,G__60078) : sci.impl.interpreter.interpret.call(null,G__60077,G__60078));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59733 = (function (){var G__60079 = ctx;
var G__60080 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60079,G__60080) : sci.impl.interpreter.interpret.call(null,G__60079,G__60080));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59734 = (function (){var G__60081 = ctx;
var G__60082 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60081,G__60082) : sci.impl.interpreter.interpret.call(null,G__60081,G__60082));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59735 = (function (){var G__60083 = ctx;
var G__60084 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60083,G__60084) : sci.impl.interpreter.interpret.call(null,G__60083,G__60084));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59736 = (function (){var G__60085 = ctx;
var G__60086 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60085,G__60086) : sci.impl.interpreter.interpret.call(null,G__60085,G__60086));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59737 = (function (){var G__60087 = ctx;
var G__60088 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60087,G__60088) : sci.impl.interpreter.interpret.call(null,G__60087,G__60088));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59738 = (function (){var G__60089 = ctx;
var G__60090 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60089,G__60090) : sci.impl.interpreter.interpret.call(null,G__60089,G__60090));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59739 = (function (){var G__60091 = ctx;
var G__60092 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60091,G__60092) : sci.impl.interpreter.interpret.call(null,G__60091,G__60092));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59740 = (function (){var G__60093 = ctx;
var G__60094 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60093,G__60094) : sci.impl.interpreter.interpret.call(null,G__60093,G__60094));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59741 = (function (){var G__60095 = ctx;
var G__60096 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60095,G__60096) : sci.impl.interpreter.interpret.call(null,G__60095,G__60096));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59742 = (function (){var G__60097 = ctx;
var G__60098 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60097,G__60098) : sci.impl.interpreter.interpret.call(null,G__60097,G__60098));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59743 = (function (){var G__60099 = ctx;
var G__60100 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60099,G__60100) : sci.impl.interpreter.interpret.call(null,G__60099,G__60100));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg59744 = (function (){var G__60101 = ctx;
var G__60102 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60101,G__60102) : sci.impl.interpreter.interpret.call(null,G__60101,G__60102));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg59745 = (function (){var G__60103 = ctx;
var G__60104 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60103,G__60104) : sci.impl.interpreter.interpret.call(null,G__60103,G__60104));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg59746 = (function (){var G__60105 = ctx;
var G__60106 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60105,G__60106) : sci.impl.interpreter.interpret.call(null,G__60105,G__60106));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg59747 = (function (){var G__60107 = ctx;
var G__60108 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60107,G__60108) : sci.impl.interpreter.interpret.call(null,G__60107,G__60108));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg59748 = (function (){var G__60109 = ctx;
var G__60110 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60109,G__60110) : sci.impl.interpreter.interpret.call(null,G__60109,G__60110));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg59731,arg59732,arg59733,arg59734,arg59735,arg59736,arg59737,arg59738,arg59739,arg59740,arg59741,arg59742,arg59743,arg59744,arg59745,arg59746,arg59747,arg59748) : f.call(null,arg59731,arg59732,arg59733,arg59734,arg59735,arg59736,arg59737,arg59738,arg59739,arg59740,arg59741,arg59742,arg59743,arg59744,arg59745,arg59746,arg59747,arg59748));

break;
case (19):
var arg59749 = (function (){var G__60111 = ctx;
var G__60112 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60111,G__60112) : sci.impl.interpreter.interpret.call(null,G__60111,G__60112));
})();
var args__$1 = cljs.core.rest(args);
var arg59750 = (function (){var G__60113 = ctx;
var G__60114 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60113,G__60114) : sci.impl.interpreter.interpret.call(null,G__60113,G__60114));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59751 = (function (){var G__60115 = ctx;
var G__60116 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60115,G__60116) : sci.impl.interpreter.interpret.call(null,G__60115,G__60116));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59752 = (function (){var G__60117 = ctx;
var G__60118 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60117,G__60118) : sci.impl.interpreter.interpret.call(null,G__60117,G__60118));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59753 = (function (){var G__60119 = ctx;
var G__60120 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60119,G__60120) : sci.impl.interpreter.interpret.call(null,G__60119,G__60120));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59754 = (function (){var G__60121 = ctx;
var G__60122 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60121,G__60122) : sci.impl.interpreter.interpret.call(null,G__60121,G__60122));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59755 = (function (){var G__60123 = ctx;
var G__60124 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60123,G__60124) : sci.impl.interpreter.interpret.call(null,G__60123,G__60124));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59756 = (function (){var G__60125 = ctx;
var G__60126 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60125,G__60126) : sci.impl.interpreter.interpret.call(null,G__60125,G__60126));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59757 = (function (){var G__60127 = ctx;
var G__60128 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60127,G__60128) : sci.impl.interpreter.interpret.call(null,G__60127,G__60128));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59758 = (function (){var G__60129 = ctx;
var G__60130 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60129,G__60130) : sci.impl.interpreter.interpret.call(null,G__60129,G__60130));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59759 = (function (){var G__60131 = ctx;
var G__60132 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60131,G__60132) : sci.impl.interpreter.interpret.call(null,G__60131,G__60132));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59760 = (function (){var G__60133 = ctx;
var G__60134 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60133,G__60134) : sci.impl.interpreter.interpret.call(null,G__60133,G__60134));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59761 = (function (){var G__60135 = ctx;
var G__60136 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60135,G__60136) : sci.impl.interpreter.interpret.call(null,G__60135,G__60136));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg59762 = (function (){var G__60137 = ctx;
var G__60138 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60137,G__60138) : sci.impl.interpreter.interpret.call(null,G__60137,G__60138));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg59763 = (function (){var G__60139 = ctx;
var G__60140 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60139,G__60140) : sci.impl.interpreter.interpret.call(null,G__60139,G__60140));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg59764 = (function (){var G__60141 = ctx;
var G__60142 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60141,G__60142) : sci.impl.interpreter.interpret.call(null,G__60141,G__60142));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg59765 = (function (){var G__60143 = ctx;
var G__60144 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60143,G__60144) : sci.impl.interpreter.interpret.call(null,G__60143,G__60144));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg59766 = (function (){var G__60145 = ctx;
var G__60146 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60145,G__60146) : sci.impl.interpreter.interpret.call(null,G__60145,G__60146));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg59767 = (function (){var G__60147 = ctx;
var G__60148 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60147,G__60148) : sci.impl.interpreter.interpret.call(null,G__60147,G__60148));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg59749,arg59750,arg59751,arg59752,arg59753,arg59754,arg59755,arg59756,arg59757,arg59758,arg59759,arg59760,arg59761,arg59762,arg59763,arg59764,arg59765,arg59766,arg59767) : f.call(null,arg59749,arg59750,arg59751,arg59752,arg59753,arg59754,arg59755,arg59756,arg59757,arg59758,arg59759,arg59760,arg59761,arg59762,arg59763,arg59764,arg59765,arg59766,arg59767));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__4373_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__4373_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__4373_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__60149 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__60149)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__60149)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__60149)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__60149)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__60149)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__60149)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__60150 = ctx;
var G__60151 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60150,G__60151) : sci.impl.interpreter.interpret.call(null,G__60150,G__60151));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__60149)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__60149)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__60149)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__60149)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__60149)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__60149)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__60149)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__60149)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__60149)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__60152 = ctx;
var G__60153 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60152,G__60153) : sci.impl.interpreter.interpret.call(null,G__60152,G__60153));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__60149)){
return sci.impl.interpreter.eval_refer(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__60149)){
return (new cljs.core.LazySeq(null,(function (){var G__60154 = ctx;
var G__60155 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60154,G__60155) : sci.impl.interpreter.interpret.call(null,G__60154,G__60155));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__60149)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__60149)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__60149)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__60149)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60149)].join('')));

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
if(cljs.core.truth_((function (){var G__60157 = op;
var G__60158 = new cljs.core.Keyword(null,"static-access","static-access",-1860919441);
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__60157,G__60158) : sci.impl.utils.kw_identical_QMARK_.call(null,G__60157,G__60158));
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
}catch (e60156){if((e60156 instanceof Error)){
var e = e60156;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e60156;

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
var ret = ((cljs.core.not(op))?expr:(function (){var G__60165 = op;
var G__60165__$1 = (((G__60165 instanceof cljs.core.Keyword))?G__60165.fqn:null);
switch (G__60165__$1) {
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
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60162_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__60162_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__60162_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60163_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__60163_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__60163_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60164_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__60164_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__60164_SHARP_));
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
var G__60216 = cljs.core.rest(exprs);
var G__60217 = (function (){var G__60168 = ctx;
var G__60169 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__60168,G__60169) : sci.impl.interpreter.eval_form.call(null,G__60168,G__60169));
})();
exprs = G__60216;
ret = G__60217;
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
if(cljs.core.truth_((function (){var G__60172 = new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006);
var G__60173 = expr;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__60172,G__60173) : sci.impl.utils.kw_identical_QMARK_.call(null,G__60172,G__60173));
})())){
return ret;
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx,expr);
var G__60218 = ret__$1;
ret = G__60218;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__60175 = arguments.length;
switch (G__60175) {
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
