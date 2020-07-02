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
var G__59938 = xs;
args__$2 = G__59938;
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
var G__59939 = xs;
args__$2 = G__59939;
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
var len__4789__auto___59940 = arguments.length;
var i__4790__auto___59941 = (0);
while(true){
if((i__4790__auto___59941 < len__4789__auto___59940)){
args__4795__auto__.push((arguments[i__4790__auto___59941]));

var G__59942 = (i__4790__auto___59941 + (1));
i__4790__auto___59941 = G__59942;
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
var G__59943 = ctx__$2;
var G__59944 = rest_let_bindings;
ctx__$1 = G__59943;
let_bindings__$1 = G__59944;
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
var G__59945 = nexprs;
exprs__$1 = G__59945;
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
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq59160){
var G__59161 = cljs.core.first(seq59160);
var seq59160__$1 = cljs.core.next(seq59160);
var G__59162 = cljs.core.first(seq59160__$1);
var seq59160__$2 = cljs.core.next(seq59160__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59161,G__59162,seq59160__$2);
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
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__59165){
var vec__59167 = p__59165;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59167,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59167,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59167,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59167,(3),null);
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
var v = (cljs.core.truth_((function (){var G__59170 = new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647);
var G__59171 = init__$1;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__59170,G__59171) : sci.impl.utils.kw_identical_QMARK_.call(null,G__59170,G__59171));
})())?(function (){var G__59172 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__59172,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__59172;
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
var vec__59177 = libspec;
var seq__59178 = cljs.core.seq(vec__59177);
var first__59179 = cljs.core.first(seq__59178);
var seq__59178__$1 = cljs.core.next(seq__59178);
var lib_name = first__59179;
var opts = seq__59178__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__59184 = opts;
var vec__59186 = G__59184;
var seq__59187 = cljs.core.seq(vec__59186);
var first__59188 = cljs.core.first(seq__59187);
var seq__59187__$1 = cljs.core.next(seq__59187);
var opt_name = first__59188;
var first__59188__$1 = cljs.core.first(seq__59187__$1);
var seq__59187__$2 = cljs.core.next(seq__59187__$1);
var fst_opt = first__59188__$1;
var rst_opts = seq__59187__$2;
var ret__$1 = ret;
var G__59184__$1 = G__59184;
while(true){
var ret__$2 = ret__$1;
var vec__59193 = G__59184__$1;
var seq__59194 = cljs.core.seq(vec__59193);
var first__59195 = cljs.core.first(seq__59194);
var seq__59194__$1 = cljs.core.next(seq__59194);
var opt_name__$1 = first__59195;
var first__59195__$1 = cljs.core.first(seq__59194__$1);
var seq__59194__$2 = cljs.core.next(seq__59194__$1);
var fst_opt__$1 = first__59195__$1;
var rst_opts__$1 = seq__59194__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__59198 = opt_name__$1;
var G__59198__$1 = (((G__59198 instanceof cljs.core.Keyword))?G__59198.fqn:null);
switch (G__59198__$1) {
case "as":
var G__59947 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__59948 = rst_opts__$1;
ret__$1 = G__59947;
G__59184__$1 = G__59948;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__59949 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__59950 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__59949;
G__59184__$1 = G__59950;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__59951 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__59952 = rst_opts__$1;
ret__$1 = G__59951;
G__59184__$1 = G__59952;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59198__$1)].join('')));

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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__59200){
var vec__59201 = p__59200;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59201,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59201,(1),null);
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
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(env,use_QMARK_,current_ns,the_loaded_ns,lib_name,p__59204){
var map__59205 = p__59204;
var map__59205__$1 = (((((!((map__59205 == null))))?(((((map__59205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59205):map__59205);
var _parsed_libspec = map__59205__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59205__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59205__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59205__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59205__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59205__$1,new cljs.core.Keyword(null,"only","only",1907811652));
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
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4185__auto__ = (function (){var G__59209 = new cljs.core.Keyword(null,"all","all",892129742);
var G__59210 = refer;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__59209,G__59210) : sci.impl.utils.kw_identical_QMARK_.call(null,G__59209,G__59210));
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
var vec__59211 = temp__5733__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59211,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59211,(1),null);
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
var map__59214 = sci.impl.interpreter.parse_libspec(libspec);
var map__59214__$1 = (((((!((map__59214 == null))))?(((((map__59214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59214):map__59214);
var parsed_libspec = map__59214__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59214__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59214__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
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
var temp__5733__auto____$2 = (function (){var G__59218 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__59218) : load_fn.call(null,G__59218));
})();
if(cljs.core.truth_(temp__5733__auto____$2)){
var map__59220 = temp__5733__auto____$2;
var map__59220__$1 = (((((!((map__59220 == null))))?(((((map__59220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59220):map__59220);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59220__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59220__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__59223_59953 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__59224_59954 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__59223_59953,G__59224_59954) : sci.impl.interpreter.eval_string_STAR_.call(null,G__59223_59953,G__59224_59954));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e59222){if((e59222 instanceof Error)){
var e_59955 = e59222;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_59955;
} else {
throw e59222;

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
var len__4789__auto___59956 = arguments.length;
var i__4790__auto___59957 = (0);
while(true){
if((i__4790__auto___59957 < len__4789__auto___59956)){
args__4795__auto__.push((arguments[i__4790__auto___59957]));

var G__59958 = (i__4790__auto___59957 + (1));
i__4790__auto___59957 = G__59958;
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
var ret = (function (){var G__59237 = ctx;
var G__59238 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59237,G__59238) : sci.impl.interpreter.interpret.call(null,G__59237,G__59238));
})();
if((ret instanceof cljs.core.Symbol)){
var G__59959 = (function (){var G__59239 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__59239,current_libspec);
} else {
return G__59239;
}
})();
var G__59960 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__59961 = cljs.core.next(args__$1);
libspecs = G__59959;
current_libspec = G__59960;
args__$1 = G__59961;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__59962 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__59963 = null;
var G__59964 = cljs.core.next(args__$1);
libspecs = G__59962;
current_libspec = G__59963;
args__$1 = G__59964;
continue;
} else {
var G__59965 = (function (){var G__59240 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__59240,current_libspec);
} else {
return G__59240;
}
})();
var G__59966 = ret;
var G__59967 = cljs.core.next(args__$1);
libspecs = G__59965;
current_libspec = G__59966;
args__$1 = G__59967;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__59241 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__59241,current_libspec);
} else {
return G__59241;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__59229_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__59229_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq59230){
var G__59231 = cljs.core.first(seq59230);
var seq59230__$1 = cljs.core.next(seq59230);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59231,seq59230__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4795__auto__ = [];
var len__4789__auto___59968 = arguments.length;
var i__4790__auto___59969 = (0);
while(true){
if((i__4790__auto___59969 < len__4789__auto___59968)){
args__4795__auto__.push((arguments[i__4790__auto___59969]));

var G__59970 = (i__4790__auto___59969 + (1));
i__4790__auto___59969 = G__59970;
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
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq59242){
var G__59243 = cljs.core.first(seq59242);
var seq59242__$1 = cljs.core.next(seq59242);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59243,seq59242__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__59244){
var vec__59245 = p__59244;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59245,(0),null);
var map__59248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59245,(1),null);
var map__59248__$1 = (((((!((map__59248 == null))))?(((((map__59248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59248):map__59248);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59248__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59248__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59248__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5733__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__59250 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59250,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59250,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__59253 = ctx;
var G__59254 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59253,G__59254) : sci.impl.interpreter.interpret.call(null,G__59253,G__59254));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__59255 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__59255__$1 = (((((!((map__59255 == null))))?(((((map__59255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59255):map__59255);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59255__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59255__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59255__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__59263 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__59264 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__59264);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__59263);
}}catch (e59257){if((e59257 instanceof Error)){
var e = e59257;
var temp__5733__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__59258 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__59259 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59258,G__59259) : sci.impl.interpreter.interpret.call(null,G__59258,G__59259));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__59260 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59260,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59260,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e59257;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__59265){
var vec__59266 = p__59265;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59266,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59266,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59270_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__59270_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__59270_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__59272){
var vec__59273 = p__59272;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59273,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59273,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59273,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59271_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__59271_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__59271_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__59278,p__59279){
var map__59280 = p__59278;
var map__59280__$1 = (((((!((map__59280 == null))))?(((((map__59280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59280):map__59280);
var ctx = map__59280__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59280__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__59281 = p__59279;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59281,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59281,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59281,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59281,(3),null);
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

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59277_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__59277_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__59277_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__59292){
var vec__59293 = p__59292;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59293,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59293,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(ctx,p__59296){
var vec__59297 = p__59296;
var seq__59298 = cljs.core.seq(vec__59297);
var first__59299 = cljs.core.first(seq__59298);
var seq__59298__$1 = cljs.core.next(seq__59298);
var _ = first__59299;
var first__59299__$1 = cljs.core.first(seq__59298__$1);
var seq__59298__$2 = cljs.core.next(seq__59298__$1);
var ns_sym = first__59299__$1;
var exprs = seq__59298__$2;
var ns_sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_sym) : sci.impl.interpreter.interpret.call(null,ctx,ns_sym));
var exprs__$1 = exprs;
while(true){
if(exprs__$1){
var vec__59301 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59301,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59301,(1),null);
var G__59304_59971 = k;
var G__59304_59972__$1 = (((G__59304_59971 instanceof cljs.core.Keyword))?G__59304_59971.fqn:null);
switch (G__59304_59972__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__59304_59971,G__59304_59972__$1,vec__59301,k,v,ns_sym__$1,vec__59297,seq__59298,first__59299,seq__59298__$1,_,first__59299__$1,seq__59298__$2,ns_sym,exprs){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__59304_59971,G__59304_59972__$1,vec__59301,k,v,ns_sym__$1,vec__59297,seq__59298,first__59299,seq__59298__$1,_,first__59299__$1,seq__59298__$2,ns_sym,exprs))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59304_59972__$1)].join('')));

}

var G__59974 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__59974;
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
sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__59308){
var vec__59309 = p__59308;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59309,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59309,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59309,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__59319 = exprs;
var vec__59324 = G__59319;
var seq__59325 = cljs.core.seq(vec__59324);
var first__59326 = cljs.core.first(seq__59325);
var seq__59325__$1 = cljs.core.next(seq__59325);
var expr = first__59326;
var exprs__$1 = seq__59325__$1;
var G__59319__$1 = G__59319;
while(true){
var vec__59327 = G__59319__$1;
var seq__59328 = cljs.core.seq(vec__59327);
var first__59329 = cljs.core.first(seq__59328);
var seq__59328__$1 = cljs.core.next(seq__59328);
var expr__$1 = first__59329;
var exprs__$2 = seq__59328__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e59334){if((e59334 instanceof Error)){
var e = e59334;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e59334;

}
}})();
var temp__5733__auto__ = cljs.core.seq(exprs__$2);
if(temp__5733__auto__){
var exprs__$3 = temp__5733__auto__;
var G__59975 = exprs__$3;
G__59319__$1 = G__59975;
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
var G__59530 = cljs.core.count(args);
switch (G__59530) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg59340 = (function (){var G__59531 = ctx;
var G__59532 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59531,G__59532) : sci.impl.interpreter.interpret.call(null,G__59531,G__59532));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg59340) : f.call(null,arg59340));

break;
case (2):
var arg59341 = (function (){var G__59533 = ctx;
var G__59534 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59533,G__59534) : sci.impl.interpreter.interpret.call(null,G__59533,G__59534));
})();
var args__$1 = cljs.core.rest(args);
var arg59342 = (function (){var G__59535 = ctx;
var G__59536 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59535,G__59536) : sci.impl.interpreter.interpret.call(null,G__59535,G__59536));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg59341,arg59342) : f.call(null,arg59341,arg59342));

break;
case (3):
var arg59343 = (function (){var G__59537 = ctx;
var G__59538 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59537,G__59538) : sci.impl.interpreter.interpret.call(null,G__59537,G__59538));
})();
var args__$1 = cljs.core.rest(args);
var arg59344 = (function (){var G__59539 = ctx;
var G__59540 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59539,G__59540) : sci.impl.interpreter.interpret.call(null,G__59539,G__59540));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59345 = (function (){var G__59541 = ctx;
var G__59542 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59541,G__59542) : sci.impl.interpreter.interpret.call(null,G__59541,G__59542));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg59343,arg59344,arg59345) : f.call(null,arg59343,arg59344,arg59345));

break;
case (4):
var arg59346 = (function (){var G__59543 = ctx;
var G__59544 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59543,G__59544) : sci.impl.interpreter.interpret.call(null,G__59543,G__59544));
})();
var args__$1 = cljs.core.rest(args);
var arg59347 = (function (){var G__59545 = ctx;
var G__59546 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59545,G__59546) : sci.impl.interpreter.interpret.call(null,G__59545,G__59546));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59348 = (function (){var G__59547 = ctx;
var G__59548 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59547,G__59548) : sci.impl.interpreter.interpret.call(null,G__59547,G__59548));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59349 = (function (){var G__59549 = ctx;
var G__59550 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59549,G__59550) : sci.impl.interpreter.interpret.call(null,G__59549,G__59550));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg59346,arg59347,arg59348,arg59349) : f.call(null,arg59346,arg59347,arg59348,arg59349));

break;
case (5):
var arg59350 = (function (){var G__59551 = ctx;
var G__59552 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59551,G__59552) : sci.impl.interpreter.interpret.call(null,G__59551,G__59552));
})();
var args__$1 = cljs.core.rest(args);
var arg59351 = (function (){var G__59553 = ctx;
var G__59554 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59553,G__59554) : sci.impl.interpreter.interpret.call(null,G__59553,G__59554));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59352 = (function (){var G__59555 = ctx;
var G__59556 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59555,G__59556) : sci.impl.interpreter.interpret.call(null,G__59555,G__59556));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59353 = (function (){var G__59557 = ctx;
var G__59558 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59557,G__59558) : sci.impl.interpreter.interpret.call(null,G__59557,G__59558));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59354 = (function (){var G__59559 = ctx;
var G__59560 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59559,G__59560) : sci.impl.interpreter.interpret.call(null,G__59559,G__59560));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg59350,arg59351,arg59352,arg59353,arg59354) : f.call(null,arg59350,arg59351,arg59352,arg59353,arg59354));

break;
case (6):
var arg59355 = (function (){var G__59561 = ctx;
var G__59562 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59561,G__59562) : sci.impl.interpreter.interpret.call(null,G__59561,G__59562));
})();
var args__$1 = cljs.core.rest(args);
var arg59356 = (function (){var G__59563 = ctx;
var G__59564 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59563,G__59564) : sci.impl.interpreter.interpret.call(null,G__59563,G__59564));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59357 = (function (){var G__59565 = ctx;
var G__59566 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59565,G__59566) : sci.impl.interpreter.interpret.call(null,G__59565,G__59566));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59358 = (function (){var G__59567 = ctx;
var G__59568 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59567,G__59568) : sci.impl.interpreter.interpret.call(null,G__59567,G__59568));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59359 = (function (){var G__59569 = ctx;
var G__59570 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59569,G__59570) : sci.impl.interpreter.interpret.call(null,G__59569,G__59570));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59360 = (function (){var G__59571 = ctx;
var G__59572 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59571,G__59572) : sci.impl.interpreter.interpret.call(null,G__59571,G__59572));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg59355,arg59356,arg59357,arg59358,arg59359,arg59360) : f.call(null,arg59355,arg59356,arg59357,arg59358,arg59359,arg59360));

break;
case (7):
var arg59361 = (function (){var G__59573 = ctx;
var G__59574 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59573,G__59574) : sci.impl.interpreter.interpret.call(null,G__59573,G__59574));
})();
var args__$1 = cljs.core.rest(args);
var arg59362 = (function (){var G__59575 = ctx;
var G__59576 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59575,G__59576) : sci.impl.interpreter.interpret.call(null,G__59575,G__59576));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59363 = (function (){var G__59577 = ctx;
var G__59578 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59577,G__59578) : sci.impl.interpreter.interpret.call(null,G__59577,G__59578));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59364 = (function (){var G__59579 = ctx;
var G__59580 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59579,G__59580) : sci.impl.interpreter.interpret.call(null,G__59579,G__59580));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59365 = (function (){var G__59581 = ctx;
var G__59582 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59581,G__59582) : sci.impl.interpreter.interpret.call(null,G__59581,G__59582));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59366 = (function (){var G__59583 = ctx;
var G__59584 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59583,G__59584) : sci.impl.interpreter.interpret.call(null,G__59583,G__59584));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59367 = (function (){var G__59585 = ctx;
var G__59586 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59585,G__59586) : sci.impl.interpreter.interpret.call(null,G__59585,G__59586));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg59361,arg59362,arg59363,arg59364,arg59365,arg59366,arg59367) : f.call(null,arg59361,arg59362,arg59363,arg59364,arg59365,arg59366,arg59367));

break;
case (8):
var arg59368 = (function (){var G__59587 = ctx;
var G__59588 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59587,G__59588) : sci.impl.interpreter.interpret.call(null,G__59587,G__59588));
})();
var args__$1 = cljs.core.rest(args);
var arg59369 = (function (){var G__59589 = ctx;
var G__59590 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59589,G__59590) : sci.impl.interpreter.interpret.call(null,G__59589,G__59590));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59370 = (function (){var G__59591 = ctx;
var G__59592 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59591,G__59592) : sci.impl.interpreter.interpret.call(null,G__59591,G__59592));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59371 = (function (){var G__59593 = ctx;
var G__59594 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59593,G__59594) : sci.impl.interpreter.interpret.call(null,G__59593,G__59594));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59372 = (function (){var G__59595 = ctx;
var G__59596 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59595,G__59596) : sci.impl.interpreter.interpret.call(null,G__59595,G__59596));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59373 = (function (){var G__59597 = ctx;
var G__59598 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59597,G__59598) : sci.impl.interpreter.interpret.call(null,G__59597,G__59598));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59374 = (function (){var G__59599 = ctx;
var G__59600 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59599,G__59600) : sci.impl.interpreter.interpret.call(null,G__59599,G__59600));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59375 = (function (){var G__59601 = ctx;
var G__59602 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59601,G__59602) : sci.impl.interpreter.interpret.call(null,G__59601,G__59602));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg59368,arg59369,arg59370,arg59371,arg59372,arg59373,arg59374,arg59375) : f.call(null,arg59368,arg59369,arg59370,arg59371,arg59372,arg59373,arg59374,arg59375));

break;
case (9):
var arg59376 = (function (){var G__59603 = ctx;
var G__59604 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59603,G__59604) : sci.impl.interpreter.interpret.call(null,G__59603,G__59604));
})();
var args__$1 = cljs.core.rest(args);
var arg59377 = (function (){var G__59605 = ctx;
var G__59606 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59605,G__59606) : sci.impl.interpreter.interpret.call(null,G__59605,G__59606));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59378 = (function (){var G__59607 = ctx;
var G__59608 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59607,G__59608) : sci.impl.interpreter.interpret.call(null,G__59607,G__59608));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59379 = (function (){var G__59609 = ctx;
var G__59610 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59609,G__59610) : sci.impl.interpreter.interpret.call(null,G__59609,G__59610));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59380 = (function (){var G__59611 = ctx;
var G__59612 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59611,G__59612) : sci.impl.interpreter.interpret.call(null,G__59611,G__59612));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59381 = (function (){var G__59613 = ctx;
var G__59614 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59613,G__59614) : sci.impl.interpreter.interpret.call(null,G__59613,G__59614));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59382 = (function (){var G__59615 = ctx;
var G__59616 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59615,G__59616) : sci.impl.interpreter.interpret.call(null,G__59615,G__59616));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59383 = (function (){var G__59617 = ctx;
var G__59618 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59617,G__59618) : sci.impl.interpreter.interpret.call(null,G__59617,G__59618));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59384 = (function (){var G__59619 = ctx;
var G__59620 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59619,G__59620) : sci.impl.interpreter.interpret.call(null,G__59619,G__59620));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg59376,arg59377,arg59378,arg59379,arg59380,arg59381,arg59382,arg59383,arg59384) : f.call(null,arg59376,arg59377,arg59378,arg59379,arg59380,arg59381,arg59382,arg59383,arg59384));

break;
case (10):
var arg59385 = (function (){var G__59621 = ctx;
var G__59622 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59621,G__59622) : sci.impl.interpreter.interpret.call(null,G__59621,G__59622));
})();
var args__$1 = cljs.core.rest(args);
var arg59386 = (function (){var G__59623 = ctx;
var G__59624 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59623,G__59624) : sci.impl.interpreter.interpret.call(null,G__59623,G__59624));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59387 = (function (){var G__59625 = ctx;
var G__59626 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59625,G__59626) : sci.impl.interpreter.interpret.call(null,G__59625,G__59626));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59388 = (function (){var G__59627 = ctx;
var G__59628 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59627,G__59628) : sci.impl.interpreter.interpret.call(null,G__59627,G__59628));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59389 = (function (){var G__59629 = ctx;
var G__59630 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59629,G__59630) : sci.impl.interpreter.interpret.call(null,G__59629,G__59630));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59390 = (function (){var G__59631 = ctx;
var G__59632 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59631,G__59632) : sci.impl.interpreter.interpret.call(null,G__59631,G__59632));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59391 = (function (){var G__59633 = ctx;
var G__59634 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59633,G__59634) : sci.impl.interpreter.interpret.call(null,G__59633,G__59634));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59392 = (function (){var G__59635 = ctx;
var G__59636 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59635,G__59636) : sci.impl.interpreter.interpret.call(null,G__59635,G__59636));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59393 = (function (){var G__59637 = ctx;
var G__59638 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59637,G__59638) : sci.impl.interpreter.interpret.call(null,G__59637,G__59638));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59394 = (function (){var G__59639 = ctx;
var G__59640 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59639,G__59640) : sci.impl.interpreter.interpret.call(null,G__59639,G__59640));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg59385,arg59386,arg59387,arg59388,arg59389,arg59390,arg59391,arg59392,arg59393,arg59394) : f.call(null,arg59385,arg59386,arg59387,arg59388,arg59389,arg59390,arg59391,arg59392,arg59393,arg59394));

break;
case (11):
var arg59395 = (function (){var G__59641 = ctx;
var G__59642 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59641,G__59642) : sci.impl.interpreter.interpret.call(null,G__59641,G__59642));
})();
var args__$1 = cljs.core.rest(args);
var arg59396 = (function (){var G__59643 = ctx;
var G__59644 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59643,G__59644) : sci.impl.interpreter.interpret.call(null,G__59643,G__59644));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59397 = (function (){var G__59645 = ctx;
var G__59646 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59645,G__59646) : sci.impl.interpreter.interpret.call(null,G__59645,G__59646));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59398 = (function (){var G__59647 = ctx;
var G__59648 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59647,G__59648) : sci.impl.interpreter.interpret.call(null,G__59647,G__59648));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59399 = (function (){var G__59649 = ctx;
var G__59650 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59649,G__59650) : sci.impl.interpreter.interpret.call(null,G__59649,G__59650));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59400 = (function (){var G__59651 = ctx;
var G__59652 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59651,G__59652) : sci.impl.interpreter.interpret.call(null,G__59651,G__59652));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59401 = (function (){var G__59653 = ctx;
var G__59654 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59653,G__59654) : sci.impl.interpreter.interpret.call(null,G__59653,G__59654));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59402 = (function (){var G__59655 = ctx;
var G__59656 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59655,G__59656) : sci.impl.interpreter.interpret.call(null,G__59655,G__59656));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59403 = (function (){var G__59657 = ctx;
var G__59658 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59657,G__59658) : sci.impl.interpreter.interpret.call(null,G__59657,G__59658));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59404 = (function (){var G__59659 = ctx;
var G__59660 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59659,G__59660) : sci.impl.interpreter.interpret.call(null,G__59659,G__59660));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59405 = (function (){var G__59661 = ctx;
var G__59662 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59661,G__59662) : sci.impl.interpreter.interpret.call(null,G__59661,G__59662));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg59395,arg59396,arg59397,arg59398,arg59399,arg59400,arg59401,arg59402,arg59403,arg59404,arg59405) : f.call(null,arg59395,arg59396,arg59397,arg59398,arg59399,arg59400,arg59401,arg59402,arg59403,arg59404,arg59405));

break;
case (12):
var arg59406 = (function (){var G__59663 = ctx;
var G__59664 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59663,G__59664) : sci.impl.interpreter.interpret.call(null,G__59663,G__59664));
})();
var args__$1 = cljs.core.rest(args);
var arg59407 = (function (){var G__59665 = ctx;
var G__59666 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59665,G__59666) : sci.impl.interpreter.interpret.call(null,G__59665,G__59666));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59408 = (function (){var G__59667 = ctx;
var G__59668 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59667,G__59668) : sci.impl.interpreter.interpret.call(null,G__59667,G__59668));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59409 = (function (){var G__59669 = ctx;
var G__59670 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59669,G__59670) : sci.impl.interpreter.interpret.call(null,G__59669,G__59670));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59410 = (function (){var G__59671 = ctx;
var G__59672 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59671,G__59672) : sci.impl.interpreter.interpret.call(null,G__59671,G__59672));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59411 = (function (){var G__59673 = ctx;
var G__59674 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59673,G__59674) : sci.impl.interpreter.interpret.call(null,G__59673,G__59674));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59412 = (function (){var G__59675 = ctx;
var G__59676 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59675,G__59676) : sci.impl.interpreter.interpret.call(null,G__59675,G__59676));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59413 = (function (){var G__59677 = ctx;
var G__59678 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59677,G__59678) : sci.impl.interpreter.interpret.call(null,G__59677,G__59678));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59414 = (function (){var G__59679 = ctx;
var G__59680 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59679,G__59680) : sci.impl.interpreter.interpret.call(null,G__59679,G__59680));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59415 = (function (){var G__59681 = ctx;
var G__59682 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59681,G__59682) : sci.impl.interpreter.interpret.call(null,G__59681,G__59682));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59416 = (function (){var G__59683 = ctx;
var G__59684 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59683,G__59684) : sci.impl.interpreter.interpret.call(null,G__59683,G__59684));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59417 = (function (){var G__59685 = ctx;
var G__59686 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59685,G__59686) : sci.impl.interpreter.interpret.call(null,G__59685,G__59686));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg59406,arg59407,arg59408,arg59409,arg59410,arg59411,arg59412,arg59413,arg59414,arg59415,arg59416,arg59417) : f.call(null,arg59406,arg59407,arg59408,arg59409,arg59410,arg59411,arg59412,arg59413,arg59414,arg59415,arg59416,arg59417));

break;
case (13):
var arg59418 = (function (){var G__59687 = ctx;
var G__59688 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59687,G__59688) : sci.impl.interpreter.interpret.call(null,G__59687,G__59688));
})();
var args__$1 = cljs.core.rest(args);
var arg59419 = (function (){var G__59689 = ctx;
var G__59690 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59689,G__59690) : sci.impl.interpreter.interpret.call(null,G__59689,G__59690));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59420 = (function (){var G__59691 = ctx;
var G__59692 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59691,G__59692) : sci.impl.interpreter.interpret.call(null,G__59691,G__59692));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59421 = (function (){var G__59693 = ctx;
var G__59694 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59693,G__59694) : sci.impl.interpreter.interpret.call(null,G__59693,G__59694));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59422 = (function (){var G__59695 = ctx;
var G__59696 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59695,G__59696) : sci.impl.interpreter.interpret.call(null,G__59695,G__59696));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59423 = (function (){var G__59697 = ctx;
var G__59698 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59697,G__59698) : sci.impl.interpreter.interpret.call(null,G__59697,G__59698));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59424 = (function (){var G__59699 = ctx;
var G__59700 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59699,G__59700) : sci.impl.interpreter.interpret.call(null,G__59699,G__59700));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59425 = (function (){var G__59701 = ctx;
var G__59702 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59701,G__59702) : sci.impl.interpreter.interpret.call(null,G__59701,G__59702));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59426 = (function (){var G__59703 = ctx;
var G__59704 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59703,G__59704) : sci.impl.interpreter.interpret.call(null,G__59703,G__59704));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59427 = (function (){var G__59705 = ctx;
var G__59706 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59705,G__59706) : sci.impl.interpreter.interpret.call(null,G__59705,G__59706));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59428 = (function (){var G__59707 = ctx;
var G__59708 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59707,G__59708) : sci.impl.interpreter.interpret.call(null,G__59707,G__59708));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59429 = (function (){var G__59709 = ctx;
var G__59710 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59709,G__59710) : sci.impl.interpreter.interpret.call(null,G__59709,G__59710));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59430 = (function (){var G__59711 = ctx;
var G__59712 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59711,G__59712) : sci.impl.interpreter.interpret.call(null,G__59711,G__59712));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg59418,arg59419,arg59420,arg59421,arg59422,arg59423,arg59424,arg59425,arg59426,arg59427,arg59428,arg59429,arg59430) : f.call(null,arg59418,arg59419,arg59420,arg59421,arg59422,arg59423,arg59424,arg59425,arg59426,arg59427,arg59428,arg59429,arg59430));

break;
case (14):
var arg59431 = (function (){var G__59713 = ctx;
var G__59714 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59713,G__59714) : sci.impl.interpreter.interpret.call(null,G__59713,G__59714));
})();
var args__$1 = cljs.core.rest(args);
var arg59432 = (function (){var G__59715 = ctx;
var G__59716 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59715,G__59716) : sci.impl.interpreter.interpret.call(null,G__59715,G__59716));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59433 = (function (){var G__59717 = ctx;
var G__59718 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59717,G__59718) : sci.impl.interpreter.interpret.call(null,G__59717,G__59718));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59434 = (function (){var G__59719 = ctx;
var G__59720 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59719,G__59720) : sci.impl.interpreter.interpret.call(null,G__59719,G__59720));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59435 = (function (){var G__59721 = ctx;
var G__59722 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59721,G__59722) : sci.impl.interpreter.interpret.call(null,G__59721,G__59722));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59436 = (function (){var G__59723 = ctx;
var G__59724 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59723,G__59724) : sci.impl.interpreter.interpret.call(null,G__59723,G__59724));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59437 = (function (){var G__59725 = ctx;
var G__59726 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59725,G__59726) : sci.impl.interpreter.interpret.call(null,G__59725,G__59726));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59438 = (function (){var G__59727 = ctx;
var G__59728 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59727,G__59728) : sci.impl.interpreter.interpret.call(null,G__59727,G__59728));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59439 = (function (){var G__59729 = ctx;
var G__59730 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59729,G__59730) : sci.impl.interpreter.interpret.call(null,G__59729,G__59730));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59440 = (function (){var G__59731 = ctx;
var G__59732 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59731,G__59732) : sci.impl.interpreter.interpret.call(null,G__59731,G__59732));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59441 = (function (){var G__59733 = ctx;
var G__59734 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59733,G__59734) : sci.impl.interpreter.interpret.call(null,G__59733,G__59734));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59442 = (function (){var G__59735 = ctx;
var G__59736 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59735,G__59736) : sci.impl.interpreter.interpret.call(null,G__59735,G__59736));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59443 = (function (){var G__59737 = ctx;
var G__59738 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59737,G__59738) : sci.impl.interpreter.interpret.call(null,G__59737,G__59738));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg59444 = (function (){var G__59739 = ctx;
var G__59740 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59739,G__59740) : sci.impl.interpreter.interpret.call(null,G__59739,G__59740));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg59431,arg59432,arg59433,arg59434,arg59435,arg59436,arg59437,arg59438,arg59439,arg59440,arg59441,arg59442,arg59443,arg59444) : f.call(null,arg59431,arg59432,arg59433,arg59434,arg59435,arg59436,arg59437,arg59438,arg59439,arg59440,arg59441,arg59442,arg59443,arg59444));

break;
case (15):
var arg59445 = (function (){var G__59741 = ctx;
var G__59742 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59741,G__59742) : sci.impl.interpreter.interpret.call(null,G__59741,G__59742));
})();
var args__$1 = cljs.core.rest(args);
var arg59446 = (function (){var G__59743 = ctx;
var G__59744 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59743,G__59744) : sci.impl.interpreter.interpret.call(null,G__59743,G__59744));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59447 = (function (){var G__59745 = ctx;
var G__59746 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59745,G__59746) : sci.impl.interpreter.interpret.call(null,G__59745,G__59746));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59448 = (function (){var G__59747 = ctx;
var G__59748 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59747,G__59748) : sci.impl.interpreter.interpret.call(null,G__59747,G__59748));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59449 = (function (){var G__59749 = ctx;
var G__59750 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59749,G__59750) : sci.impl.interpreter.interpret.call(null,G__59749,G__59750));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59450 = (function (){var G__59751 = ctx;
var G__59752 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59751,G__59752) : sci.impl.interpreter.interpret.call(null,G__59751,G__59752));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59451 = (function (){var G__59753 = ctx;
var G__59754 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59753,G__59754) : sci.impl.interpreter.interpret.call(null,G__59753,G__59754));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59452 = (function (){var G__59755 = ctx;
var G__59756 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59755,G__59756) : sci.impl.interpreter.interpret.call(null,G__59755,G__59756));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59453 = (function (){var G__59757 = ctx;
var G__59758 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59757,G__59758) : sci.impl.interpreter.interpret.call(null,G__59757,G__59758));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59454 = (function (){var G__59759 = ctx;
var G__59760 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59759,G__59760) : sci.impl.interpreter.interpret.call(null,G__59759,G__59760));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59455 = (function (){var G__59761 = ctx;
var G__59762 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59761,G__59762) : sci.impl.interpreter.interpret.call(null,G__59761,G__59762));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59456 = (function (){var G__59763 = ctx;
var G__59764 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59763,G__59764) : sci.impl.interpreter.interpret.call(null,G__59763,G__59764));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59457 = (function (){var G__59765 = ctx;
var G__59766 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59765,G__59766) : sci.impl.interpreter.interpret.call(null,G__59765,G__59766));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg59458 = (function (){var G__59767 = ctx;
var G__59768 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59767,G__59768) : sci.impl.interpreter.interpret.call(null,G__59767,G__59768));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg59459 = (function (){var G__59769 = ctx;
var G__59770 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59769,G__59770) : sci.impl.interpreter.interpret.call(null,G__59769,G__59770));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg59445,arg59446,arg59447,arg59448,arg59449,arg59450,arg59451,arg59452,arg59453,arg59454,arg59455,arg59456,arg59457,arg59458,arg59459) : f.call(null,arg59445,arg59446,arg59447,arg59448,arg59449,arg59450,arg59451,arg59452,arg59453,arg59454,arg59455,arg59456,arg59457,arg59458,arg59459));

break;
case (16):
var arg59460 = (function (){var G__59771 = ctx;
var G__59772 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59771,G__59772) : sci.impl.interpreter.interpret.call(null,G__59771,G__59772));
})();
var args__$1 = cljs.core.rest(args);
var arg59461 = (function (){var G__59773 = ctx;
var G__59774 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59773,G__59774) : sci.impl.interpreter.interpret.call(null,G__59773,G__59774));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59462 = (function (){var G__59775 = ctx;
var G__59776 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59775,G__59776) : sci.impl.interpreter.interpret.call(null,G__59775,G__59776));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59463 = (function (){var G__59777 = ctx;
var G__59778 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59777,G__59778) : sci.impl.interpreter.interpret.call(null,G__59777,G__59778));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59464 = (function (){var G__59779 = ctx;
var G__59780 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59779,G__59780) : sci.impl.interpreter.interpret.call(null,G__59779,G__59780));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59465 = (function (){var G__59781 = ctx;
var G__59782 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59781,G__59782) : sci.impl.interpreter.interpret.call(null,G__59781,G__59782));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59466 = (function (){var G__59783 = ctx;
var G__59784 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59783,G__59784) : sci.impl.interpreter.interpret.call(null,G__59783,G__59784));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59467 = (function (){var G__59785 = ctx;
var G__59786 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59785,G__59786) : sci.impl.interpreter.interpret.call(null,G__59785,G__59786));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59468 = (function (){var G__59787 = ctx;
var G__59788 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59787,G__59788) : sci.impl.interpreter.interpret.call(null,G__59787,G__59788));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59469 = (function (){var G__59789 = ctx;
var G__59790 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59789,G__59790) : sci.impl.interpreter.interpret.call(null,G__59789,G__59790));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59470 = (function (){var G__59791 = ctx;
var G__59792 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59791,G__59792) : sci.impl.interpreter.interpret.call(null,G__59791,G__59792));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59471 = (function (){var G__59793 = ctx;
var G__59794 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59793,G__59794) : sci.impl.interpreter.interpret.call(null,G__59793,G__59794));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59472 = (function (){var G__59795 = ctx;
var G__59796 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59795,G__59796) : sci.impl.interpreter.interpret.call(null,G__59795,G__59796));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg59473 = (function (){var G__59797 = ctx;
var G__59798 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59797,G__59798) : sci.impl.interpreter.interpret.call(null,G__59797,G__59798));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg59474 = (function (){var G__59799 = ctx;
var G__59800 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59799,G__59800) : sci.impl.interpreter.interpret.call(null,G__59799,G__59800));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg59475 = (function (){var G__59801 = ctx;
var G__59802 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59801,G__59802) : sci.impl.interpreter.interpret.call(null,G__59801,G__59802));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg59460,arg59461,arg59462,arg59463,arg59464,arg59465,arg59466,arg59467,arg59468,arg59469,arg59470,arg59471,arg59472,arg59473,arg59474,arg59475) : f.call(null,arg59460,arg59461,arg59462,arg59463,arg59464,arg59465,arg59466,arg59467,arg59468,arg59469,arg59470,arg59471,arg59472,arg59473,arg59474,arg59475));

break;
case (17):
var arg59476 = (function (){var G__59803 = ctx;
var G__59804 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59803,G__59804) : sci.impl.interpreter.interpret.call(null,G__59803,G__59804));
})();
var args__$1 = cljs.core.rest(args);
var arg59477 = (function (){var G__59805 = ctx;
var G__59806 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59805,G__59806) : sci.impl.interpreter.interpret.call(null,G__59805,G__59806));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59478 = (function (){var G__59807 = ctx;
var G__59808 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59807,G__59808) : sci.impl.interpreter.interpret.call(null,G__59807,G__59808));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59479 = (function (){var G__59809 = ctx;
var G__59810 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59809,G__59810) : sci.impl.interpreter.interpret.call(null,G__59809,G__59810));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59480 = (function (){var G__59811 = ctx;
var G__59812 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59811,G__59812) : sci.impl.interpreter.interpret.call(null,G__59811,G__59812));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59481 = (function (){var G__59813 = ctx;
var G__59814 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59813,G__59814) : sci.impl.interpreter.interpret.call(null,G__59813,G__59814));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59482 = (function (){var G__59815 = ctx;
var G__59816 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59815,G__59816) : sci.impl.interpreter.interpret.call(null,G__59815,G__59816));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59483 = (function (){var G__59817 = ctx;
var G__59818 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59817,G__59818) : sci.impl.interpreter.interpret.call(null,G__59817,G__59818));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59484 = (function (){var G__59819 = ctx;
var G__59820 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59819,G__59820) : sci.impl.interpreter.interpret.call(null,G__59819,G__59820));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59485 = (function (){var G__59821 = ctx;
var G__59822 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59821,G__59822) : sci.impl.interpreter.interpret.call(null,G__59821,G__59822));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59486 = (function (){var G__59823 = ctx;
var G__59824 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59823,G__59824) : sci.impl.interpreter.interpret.call(null,G__59823,G__59824));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59487 = (function (){var G__59825 = ctx;
var G__59826 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59825,G__59826) : sci.impl.interpreter.interpret.call(null,G__59825,G__59826));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59488 = (function (){var G__59827 = ctx;
var G__59828 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59827,G__59828) : sci.impl.interpreter.interpret.call(null,G__59827,G__59828));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg59489 = (function (){var G__59829 = ctx;
var G__59830 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59829,G__59830) : sci.impl.interpreter.interpret.call(null,G__59829,G__59830));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg59490 = (function (){var G__59831 = ctx;
var G__59832 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59831,G__59832) : sci.impl.interpreter.interpret.call(null,G__59831,G__59832));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg59491 = (function (){var G__59833 = ctx;
var G__59834 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59833,G__59834) : sci.impl.interpreter.interpret.call(null,G__59833,G__59834));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg59492 = (function (){var G__59835 = ctx;
var G__59836 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59835,G__59836) : sci.impl.interpreter.interpret.call(null,G__59835,G__59836));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg59476,arg59477,arg59478,arg59479,arg59480,arg59481,arg59482,arg59483,arg59484,arg59485,arg59486,arg59487,arg59488,arg59489,arg59490,arg59491,arg59492) : f.call(null,arg59476,arg59477,arg59478,arg59479,arg59480,arg59481,arg59482,arg59483,arg59484,arg59485,arg59486,arg59487,arg59488,arg59489,arg59490,arg59491,arg59492));

break;
case (18):
var arg59493 = (function (){var G__59837 = ctx;
var G__59838 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59837,G__59838) : sci.impl.interpreter.interpret.call(null,G__59837,G__59838));
})();
var args__$1 = cljs.core.rest(args);
var arg59494 = (function (){var G__59839 = ctx;
var G__59840 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59839,G__59840) : sci.impl.interpreter.interpret.call(null,G__59839,G__59840));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59495 = (function (){var G__59841 = ctx;
var G__59842 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59841,G__59842) : sci.impl.interpreter.interpret.call(null,G__59841,G__59842));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59496 = (function (){var G__59843 = ctx;
var G__59844 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59843,G__59844) : sci.impl.interpreter.interpret.call(null,G__59843,G__59844));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59497 = (function (){var G__59845 = ctx;
var G__59846 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59845,G__59846) : sci.impl.interpreter.interpret.call(null,G__59845,G__59846));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59498 = (function (){var G__59847 = ctx;
var G__59848 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59847,G__59848) : sci.impl.interpreter.interpret.call(null,G__59847,G__59848));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59499 = (function (){var G__59849 = ctx;
var G__59850 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59849,G__59850) : sci.impl.interpreter.interpret.call(null,G__59849,G__59850));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59500 = (function (){var G__59851 = ctx;
var G__59852 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59851,G__59852) : sci.impl.interpreter.interpret.call(null,G__59851,G__59852));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59501 = (function (){var G__59853 = ctx;
var G__59854 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59853,G__59854) : sci.impl.interpreter.interpret.call(null,G__59853,G__59854));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59502 = (function (){var G__59855 = ctx;
var G__59856 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59855,G__59856) : sci.impl.interpreter.interpret.call(null,G__59855,G__59856));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59503 = (function (){var G__59857 = ctx;
var G__59858 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59857,G__59858) : sci.impl.interpreter.interpret.call(null,G__59857,G__59858));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59504 = (function (){var G__59859 = ctx;
var G__59860 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59859,G__59860) : sci.impl.interpreter.interpret.call(null,G__59859,G__59860));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59505 = (function (){var G__59861 = ctx;
var G__59862 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59861,G__59862) : sci.impl.interpreter.interpret.call(null,G__59861,G__59862));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg59506 = (function (){var G__59863 = ctx;
var G__59864 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59863,G__59864) : sci.impl.interpreter.interpret.call(null,G__59863,G__59864));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg59507 = (function (){var G__59865 = ctx;
var G__59866 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59865,G__59866) : sci.impl.interpreter.interpret.call(null,G__59865,G__59866));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg59508 = (function (){var G__59867 = ctx;
var G__59868 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59867,G__59868) : sci.impl.interpreter.interpret.call(null,G__59867,G__59868));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg59509 = (function (){var G__59869 = ctx;
var G__59870 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59869,G__59870) : sci.impl.interpreter.interpret.call(null,G__59869,G__59870));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg59510 = (function (){var G__59871 = ctx;
var G__59872 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59871,G__59872) : sci.impl.interpreter.interpret.call(null,G__59871,G__59872));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg59493,arg59494,arg59495,arg59496,arg59497,arg59498,arg59499,arg59500,arg59501,arg59502,arg59503,arg59504,arg59505,arg59506,arg59507,arg59508,arg59509,arg59510) : f.call(null,arg59493,arg59494,arg59495,arg59496,arg59497,arg59498,arg59499,arg59500,arg59501,arg59502,arg59503,arg59504,arg59505,arg59506,arg59507,arg59508,arg59509,arg59510));

break;
case (19):
var arg59511 = (function (){var G__59873 = ctx;
var G__59874 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59873,G__59874) : sci.impl.interpreter.interpret.call(null,G__59873,G__59874));
})();
var args__$1 = cljs.core.rest(args);
var arg59512 = (function (){var G__59875 = ctx;
var G__59876 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59875,G__59876) : sci.impl.interpreter.interpret.call(null,G__59875,G__59876));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59513 = (function (){var G__59877 = ctx;
var G__59878 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59877,G__59878) : sci.impl.interpreter.interpret.call(null,G__59877,G__59878));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59514 = (function (){var G__59879 = ctx;
var G__59880 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59879,G__59880) : sci.impl.interpreter.interpret.call(null,G__59879,G__59880));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59515 = (function (){var G__59881 = ctx;
var G__59882 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59881,G__59882) : sci.impl.interpreter.interpret.call(null,G__59881,G__59882));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59516 = (function (){var G__59883 = ctx;
var G__59884 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59883,G__59884) : sci.impl.interpreter.interpret.call(null,G__59883,G__59884));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59517 = (function (){var G__59885 = ctx;
var G__59886 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59885,G__59886) : sci.impl.interpreter.interpret.call(null,G__59885,G__59886));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59518 = (function (){var G__59887 = ctx;
var G__59888 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59887,G__59888) : sci.impl.interpreter.interpret.call(null,G__59887,G__59888));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59519 = (function (){var G__59889 = ctx;
var G__59890 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59889,G__59890) : sci.impl.interpreter.interpret.call(null,G__59889,G__59890));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59520 = (function (){var G__59891 = ctx;
var G__59892 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59891,G__59892) : sci.impl.interpreter.interpret.call(null,G__59891,G__59892));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59521 = (function (){var G__59893 = ctx;
var G__59894 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59893,G__59894) : sci.impl.interpreter.interpret.call(null,G__59893,G__59894));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59522 = (function (){var G__59895 = ctx;
var G__59896 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59895,G__59896) : sci.impl.interpreter.interpret.call(null,G__59895,G__59896));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59523 = (function (){var G__59897 = ctx;
var G__59898 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59897,G__59898) : sci.impl.interpreter.interpret.call(null,G__59897,G__59898));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg59524 = (function (){var G__59899 = ctx;
var G__59900 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59899,G__59900) : sci.impl.interpreter.interpret.call(null,G__59899,G__59900));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg59525 = (function (){var G__59901 = ctx;
var G__59902 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59901,G__59902) : sci.impl.interpreter.interpret.call(null,G__59901,G__59902));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg59526 = (function (){var G__59903 = ctx;
var G__59904 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59903,G__59904) : sci.impl.interpreter.interpret.call(null,G__59903,G__59904));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg59527 = (function (){var G__59905 = ctx;
var G__59906 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59905,G__59906) : sci.impl.interpreter.interpret.call(null,G__59905,G__59906));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg59528 = (function (){var G__59907 = ctx;
var G__59908 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59907,G__59908) : sci.impl.interpreter.interpret.call(null,G__59907,G__59908));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg59529 = (function (){var G__59909 = ctx;
var G__59910 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59909,G__59910) : sci.impl.interpreter.interpret.call(null,G__59909,G__59910));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg59511,arg59512,arg59513,arg59514,arg59515,arg59516,arg59517,arg59518,arg59519,arg59520,arg59521,arg59522,arg59523,arg59524,arg59525,arg59526,arg59527,arg59528,arg59529) : f.call(null,arg59511,arg59512,arg59513,arg59514,arg59515,arg59516,arg59517,arg59518,arg59519,arg59520,arg59521,arg59522,arg59523,arg59524,arg59525,arg59526,arg59527,arg59528,arg59529));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__4373_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__4373_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__4373_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__59911 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__59911)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__59911)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__59911)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__59911)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__59911)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__59911)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__59912 = ctx;
var G__59913 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59912,G__59913) : sci.impl.interpreter.interpret.call(null,G__59912,G__59913));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__59911)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__59911)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__59911)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__59911)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__59911)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__59911)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__59911)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__59911)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__59911)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__59914 = ctx;
var G__59915 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59914,G__59915) : sci.impl.interpreter.interpret.call(null,G__59914,G__59915));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__59911)){
return sci.impl.interpreter.eval_refer(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__59911)){
return (new cljs.core.LazySeq(null,(function (){var G__59916 = ctx;
var G__59917 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59916,G__59917) : sci.impl.interpreter.interpret.call(null,G__59916,G__59917));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__59911)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__59911)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__59911)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__59911)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59911)].join('')));

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
if(cljs.core.truth_((function (){var G__59919 = op;
var G__59920 = new cljs.core.Keyword(null,"static-access","static-access",-1860919441);
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__59919,G__59920) : sci.impl.utils.kw_identical_QMARK_.call(null,G__59919,G__59920));
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
}catch (e59918){if((e59918 instanceof Error)){
var e = e59918;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e59918;

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
var ret = ((cljs.core.not(op))?expr:(function (){var G__59927 = op;
var G__59927__$1 = (((G__59927 instanceof cljs.core.Keyword))?G__59927.fqn:null);
switch (G__59927__$1) {
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
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59924_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__59924_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__59924_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59925_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__59925_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__59925_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59926_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__59926_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__59926_SHARP_));
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
var G__59978 = cljs.core.rest(exprs);
var G__59979 = (function (){var G__59930 = ctx;
var G__59931 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__59930,G__59931) : sci.impl.interpreter.eval_form.call(null,G__59930,G__59931));
})();
exprs = G__59978;
ret = G__59979;
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
if(cljs.core.truth_((function (){var G__59934 = new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006);
var G__59935 = expr;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__59934,G__59935) : sci.impl.utils.kw_identical_QMARK_.call(null,G__59934,G__59935));
})())){
return ret;
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx,expr);
var G__59980 = ret__$1;
ret = G__59980;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__59937 = arguments.length;
switch (G__59937) {
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
