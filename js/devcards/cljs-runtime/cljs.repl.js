goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45128){
var map__45129 = p__45128;
var map__45129__$1 = (((((!((map__45129 == null))))?(((((map__45129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45129):map__45129);
var m = map__45129__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45129__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45129__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45132_45334 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45133_45335 = null;
var count__45134_45336 = (0);
var i__45135_45337 = (0);
while(true){
if((i__45135_45337 < count__45134_45336)){
var f_45338 = chunk__45133_45335.cljs$core$IIndexed$_nth$arity$2(null,i__45135_45337);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45338], 0));


var G__45341 = seq__45132_45334;
var G__45342 = chunk__45133_45335;
var G__45343 = count__45134_45336;
var G__45344 = (i__45135_45337 + (1));
seq__45132_45334 = G__45341;
chunk__45133_45335 = G__45342;
count__45134_45336 = G__45343;
i__45135_45337 = G__45344;
continue;
} else {
var temp__5735__auto___45347 = cljs.core.seq(seq__45132_45334);
if(temp__5735__auto___45347){
var seq__45132_45348__$1 = temp__5735__auto___45347;
if(cljs.core.chunked_seq_QMARK_(seq__45132_45348__$1)){
var c__4609__auto___45349 = cljs.core.chunk_first(seq__45132_45348__$1);
var G__45350 = cljs.core.chunk_rest(seq__45132_45348__$1);
var G__45351 = c__4609__auto___45349;
var G__45352 = cljs.core.count(c__4609__auto___45349);
var G__45353 = (0);
seq__45132_45334 = G__45350;
chunk__45133_45335 = G__45351;
count__45134_45336 = G__45352;
i__45135_45337 = G__45353;
continue;
} else {
var f_45354 = cljs.core.first(seq__45132_45348__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45354], 0));


var G__45355 = cljs.core.next(seq__45132_45348__$1);
var G__45356 = null;
var G__45357 = (0);
var G__45358 = (0);
seq__45132_45334 = G__45355;
chunk__45133_45335 = G__45356;
count__45134_45336 = G__45357;
i__45135_45337 = G__45358;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45359 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45359], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45359)))?cljs.core.second(arglists_45359):arglists_45359)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45136_45364 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45137_45365 = null;
var count__45138_45366 = (0);
var i__45139_45367 = (0);
while(true){
if((i__45139_45367 < count__45138_45366)){
var vec__45167_45368 = chunk__45137_45365.cljs$core$IIndexed$_nth$arity$2(null,i__45139_45367);
var name_45369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45167_45368,(0),null);
var map__45170_45370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45167_45368,(1),null);
var map__45170_45371__$1 = (((((!((map__45170_45370 == null))))?(((((map__45170_45370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45170_45370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45170_45370):map__45170_45370);
var doc_45372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45170_45371__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45170_45371__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45369], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45373], 0));

if(cljs.core.truth_(doc_45372)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45372], 0));
} else {
}


var G__45374 = seq__45136_45364;
var G__45375 = chunk__45137_45365;
var G__45376 = count__45138_45366;
var G__45377 = (i__45139_45367 + (1));
seq__45136_45364 = G__45374;
chunk__45137_45365 = G__45375;
count__45138_45366 = G__45376;
i__45139_45367 = G__45377;
continue;
} else {
var temp__5735__auto___45378 = cljs.core.seq(seq__45136_45364);
if(temp__5735__auto___45378){
var seq__45136_45379__$1 = temp__5735__auto___45378;
if(cljs.core.chunked_seq_QMARK_(seq__45136_45379__$1)){
var c__4609__auto___45380 = cljs.core.chunk_first(seq__45136_45379__$1);
var G__45381 = cljs.core.chunk_rest(seq__45136_45379__$1);
var G__45382 = c__4609__auto___45380;
var G__45383 = cljs.core.count(c__4609__auto___45380);
var G__45384 = (0);
seq__45136_45364 = G__45381;
chunk__45137_45365 = G__45382;
count__45138_45366 = G__45383;
i__45139_45367 = G__45384;
continue;
} else {
var vec__45179_45385 = cljs.core.first(seq__45136_45379__$1);
var name_45386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45179_45385,(0),null);
var map__45182_45387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45179_45385,(1),null);
var map__45182_45388__$1 = (((((!((map__45182_45387 == null))))?(((((map__45182_45387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45182_45387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45182_45387):map__45182_45387);
var doc_45389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45182_45388__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45182_45388__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45386], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45390], 0));

if(cljs.core.truth_(doc_45389)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45389], 0));
} else {
}


var G__45391 = cljs.core.next(seq__45136_45379__$1);
var G__45392 = null;
var G__45393 = (0);
var G__45394 = (0);
seq__45136_45364 = G__45391;
chunk__45137_45365 = G__45392;
count__45138_45366 = G__45393;
i__45139_45367 = G__45394;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__45195 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45196 = null;
var count__45197 = (0);
var i__45198 = (0);
while(true){
if((i__45198 < count__45197)){
var role = chunk__45196.cljs$core$IIndexed$_nth$arity$2(null,i__45198);
var temp__5735__auto___45395__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45395__$1)){
var spec_45396 = temp__5735__auto___45395__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45396)], 0));
} else {
}


var G__45397 = seq__45195;
var G__45398 = chunk__45196;
var G__45399 = count__45197;
var G__45400 = (i__45198 + (1));
seq__45195 = G__45397;
chunk__45196 = G__45398;
count__45197 = G__45399;
i__45198 = G__45400;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__45195);
if(temp__5735__auto____$1){
var seq__45195__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__45195__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45195__$1);
var G__45401 = cljs.core.chunk_rest(seq__45195__$1);
var G__45402 = c__4609__auto__;
var G__45403 = cljs.core.count(c__4609__auto__);
var G__45404 = (0);
seq__45195 = G__45401;
chunk__45196 = G__45402;
count__45197 = G__45403;
i__45198 = G__45404;
continue;
} else {
var role = cljs.core.first(seq__45195__$1);
var temp__5735__auto___45405__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45405__$2)){
var spec_45406 = temp__5735__auto___45405__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45406)], 0));
} else {
}


var G__45407 = cljs.core.next(seq__45195__$1);
var G__45408 = null;
var G__45409 = (0);
var G__45410 = (0);
seq__45195 = G__45407;
chunk__45196 = G__45408;
count__45197 = G__45409;
i__45198 = G__45410;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__45411 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45412 = cljs.core.ex_cause(t);
via = G__45411;
t = G__45412;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__45261 = datafied_throwable;
var map__45261__$1 = (((((!((map__45261 == null))))?(((((map__45261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45261):map__45261);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45261__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45261__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45261__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__45262 = cljs.core.last(via);
var map__45262__$1 = (((((!((map__45262 == null))))?(((((map__45262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45262):map__45262);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45262__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45262__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45262__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__45263 = data;
var map__45263__$1 = (((((!((map__45263 == null))))?(((((map__45263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45263):map__45263);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45263__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45263__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45263__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__45264 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__45264__$1 = (((((!((map__45264 == null))))?(((((map__45264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45264):map__45264);
var top_data = map__45264__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45264__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45271 = phase;
var G__45271__$1 = (((G__45271 instanceof cljs.core.Keyword))?G__45271.fqn:null);
switch (G__45271__$1) {
case "read-source":
var map__45272 = data;
var map__45272__$1 = (((((!((map__45272 == null))))?(((((map__45272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45272):map__45272);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45272__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45272__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__45274 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__45274__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45274,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45274);
var G__45274__$2 = (cljs.core.truth_((function (){var fexpr__45275 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45275.cljs$core$IFn$_invoke$arity$1 ? fexpr__45275.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45275.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45274__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45274__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45274__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45274__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__45276 = top_data;
var G__45276__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45276,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45276);
var G__45276__$2 = (cljs.core.truth_((function (){var fexpr__45277 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45277.cljs$core$IFn$_invoke$arity$1 ? fexpr__45277.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45277.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45276__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45276__$1);
var G__45276__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45276__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45276__$2);
var G__45276__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45276__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45276__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45276__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45276__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__45278 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45278,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45278,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45278,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45278,(3),null);
var G__45281 = top_data;
var G__45281__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45281,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__45281);
var G__45281__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45281__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__45281__$1);
var G__45281__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45281__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__45281__$2);
var G__45281__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45281__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45281__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45281__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45281__$4;
}

break;
case "execution":
var vec__45283 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45283,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45283,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45283,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45283,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45260_SHARP_){
var or__4185__auto__ = (p1__45260_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__45287 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45287.cljs$core$IFn$_invoke$arity$1 ? fexpr__45287.cljs$core$IFn$_invoke$arity$1(p1__45260_SHARP_) : fexpr__45287.call(null,p1__45260_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__45288 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__45288__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45288,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__45288);
var G__45288__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45288__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45288__$1);
var G__45288__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45288__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__45288__$2);
var G__45288__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45288__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__45288__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45288__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45288__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45271__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__45293){
var map__45294 = p__45293;
var map__45294__$1 = (((((!((map__45294 == null))))?(((((map__45294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45294):map__45294);
var triage_data = map__45294__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45294__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45294__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45294__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45294__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45294__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45294__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45294__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45294__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__45297 = phase;
var G__45297__$1 = (((G__45297 instanceof cljs.core.Keyword))?G__45297.fqn:null);
switch (G__45297__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__45298 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__45299 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45300 = loc;
var G__45301 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45302_45417 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45303_45418 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45304_45419 = true;
var _STAR_print_fn_STAR__temp_val__45305_45420 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45304_45419);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45305_45420);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45291_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45291_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45303_45418);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45302_45417);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45298,G__45299,G__45300,G__45301) : format.call(null,G__45298,G__45299,G__45300,G__45301));

break;
case "macroexpansion":
var G__45306 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__45307 = cause_type;
var G__45308 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45309 = loc;
var G__45310 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45306,G__45307,G__45308,G__45309,G__45310) : format.call(null,G__45306,G__45307,G__45308,G__45309,G__45310));

break;
case "compile-syntax-check":
var G__45311 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45312 = cause_type;
var G__45313 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45314 = loc;
var G__45315 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45311,G__45312,G__45313,G__45314,G__45315) : format.call(null,G__45311,G__45312,G__45313,G__45314,G__45315));

break;
case "compilation":
var G__45316 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45317 = cause_type;
var G__45318 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45319 = loc;
var G__45320 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45316,G__45317,G__45318,G__45319,G__45320) : format.call(null,G__45316,G__45317,G__45318,G__45319,G__45320));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45321 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45322 = symbol;
var G__45323 = loc;
var G__45324 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45325_45422 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45326_45423 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45327_45424 = true;
var _STAR_print_fn_STAR__temp_val__45328_45425 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45327_45424);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45328_45425);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45292_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45292_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45326_45423);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45325_45422);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45321,G__45322,G__45323,G__45324) : format.call(null,G__45321,G__45322,G__45323,G__45324));
} else {
var G__45329 = "Execution error%s at %s(%s).\n%s\n";
var G__45330 = cause_type;
var G__45331 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45332 = loc;
var G__45333 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45329,G__45330,G__45331,G__45332,G__45333) : format.call(null,G__45329,G__45330,G__45331,G__45332,G__45333));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45297__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
