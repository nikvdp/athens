goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45101){
var map__45102 = p__45101;
var map__45102__$1 = (((((!((map__45102 == null))))?(((((map__45102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45102):map__45102);
var m = map__45102__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45102__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45102__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__45104_45311 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45105_45312 = null;
var count__45106_45313 = (0);
var i__45107_45314 = (0);
while(true){
if((i__45107_45314 < count__45106_45313)){
var f_45315 = chunk__45105_45312.cljs$core$IIndexed$_nth$arity$2(null,i__45107_45314);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45315], 0));


var G__45317 = seq__45104_45311;
var G__45318 = chunk__45105_45312;
var G__45319 = count__45106_45313;
var G__45320 = (i__45107_45314 + (1));
seq__45104_45311 = G__45317;
chunk__45105_45312 = G__45318;
count__45106_45313 = G__45319;
i__45107_45314 = G__45320;
continue;
} else {
var temp__5735__auto___45321 = cljs.core.seq(seq__45104_45311);
if(temp__5735__auto___45321){
var seq__45104_45322__$1 = temp__5735__auto___45321;
if(cljs.core.chunked_seq_QMARK_(seq__45104_45322__$1)){
var c__4609__auto___45323 = cljs.core.chunk_first(seq__45104_45322__$1);
var G__45324 = cljs.core.chunk_rest(seq__45104_45322__$1);
var G__45325 = c__4609__auto___45323;
var G__45326 = cljs.core.count(c__4609__auto___45323);
var G__45327 = (0);
seq__45104_45311 = G__45324;
chunk__45105_45312 = G__45325;
count__45106_45313 = G__45326;
i__45107_45314 = G__45327;
continue;
} else {
var f_45328 = cljs.core.first(seq__45104_45322__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45328], 0));


var G__45329 = cljs.core.next(seq__45104_45322__$1);
var G__45330 = null;
var G__45331 = (0);
var G__45332 = (0);
seq__45104_45311 = G__45329;
chunk__45105_45312 = G__45330;
count__45106_45313 = G__45331;
i__45107_45314 = G__45332;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45333 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45333], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45333)))?cljs.core.second(arglists_45333):arglists_45333)], 0));
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
var seq__45109_45334 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45110_45335 = null;
var count__45111_45336 = (0);
var i__45112_45337 = (0);
while(true){
if((i__45112_45337 < count__45111_45336)){
var vec__45127_45338 = chunk__45110_45335.cljs$core$IIndexed$_nth$arity$2(null,i__45112_45337);
var name_45339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45127_45338,(0),null);
var map__45130_45340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45127_45338,(1),null);
var map__45130_45341__$1 = (((((!((map__45130_45340 == null))))?(((((map__45130_45340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45130_45340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45130_45340):map__45130_45340);
var doc_45342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45130_45341__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45343 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45130_45341__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45339], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45343], 0));

if(cljs.core.truth_(doc_45342)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45342], 0));
} else {
}


var G__45344 = seq__45109_45334;
var G__45345 = chunk__45110_45335;
var G__45346 = count__45111_45336;
var G__45347 = (i__45112_45337 + (1));
seq__45109_45334 = G__45344;
chunk__45110_45335 = G__45345;
count__45111_45336 = G__45346;
i__45112_45337 = G__45347;
continue;
} else {
var temp__5735__auto___45348 = cljs.core.seq(seq__45109_45334);
if(temp__5735__auto___45348){
var seq__45109_45349__$1 = temp__5735__auto___45348;
if(cljs.core.chunked_seq_QMARK_(seq__45109_45349__$1)){
var c__4609__auto___45350 = cljs.core.chunk_first(seq__45109_45349__$1);
var G__45351 = cljs.core.chunk_rest(seq__45109_45349__$1);
var G__45352 = c__4609__auto___45350;
var G__45353 = cljs.core.count(c__4609__auto___45350);
var G__45354 = (0);
seq__45109_45334 = G__45351;
chunk__45110_45335 = G__45352;
count__45111_45336 = G__45353;
i__45112_45337 = G__45354;
continue;
} else {
var vec__45133_45355 = cljs.core.first(seq__45109_45349__$1);
var name_45356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45133_45355,(0),null);
var map__45136_45357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45133_45355,(1),null);
var map__45136_45358__$1 = (((((!((map__45136_45357 == null))))?(((((map__45136_45357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45136_45357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45136_45357):map__45136_45357);
var doc_45359 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45136_45358__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45136_45358__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45356], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45360], 0));

if(cljs.core.truth_(doc_45359)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45359], 0));
} else {
}


var G__45363 = cljs.core.next(seq__45109_45349__$1);
var G__45364 = null;
var G__45365 = (0);
var G__45366 = (0);
seq__45109_45334 = G__45363;
chunk__45110_45335 = G__45364;
count__45111_45336 = G__45365;
i__45112_45337 = G__45366;
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

var seq__45138 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45139 = null;
var count__45140 = (0);
var i__45141 = (0);
while(true){
if((i__45141 < count__45140)){
var role = chunk__45139.cljs$core$IIndexed$_nth$arity$2(null,i__45141);
var temp__5735__auto___45369__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45369__$1)){
var spec_45370 = temp__5735__auto___45369__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45370)], 0));
} else {
}


var G__45371 = seq__45138;
var G__45372 = chunk__45139;
var G__45373 = count__45140;
var G__45374 = (i__45141 + (1));
seq__45138 = G__45371;
chunk__45139 = G__45372;
count__45140 = G__45373;
i__45141 = G__45374;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__45138);
if(temp__5735__auto____$1){
var seq__45138__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__45138__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45138__$1);
var G__45379 = cljs.core.chunk_rest(seq__45138__$1);
var G__45380 = c__4609__auto__;
var G__45381 = cljs.core.count(c__4609__auto__);
var G__45382 = (0);
seq__45138 = G__45379;
chunk__45139 = G__45380;
count__45140 = G__45381;
i__45141 = G__45382;
continue;
} else {
var role = cljs.core.first(seq__45138__$1);
var temp__5735__auto___45383__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45383__$2)){
var spec_45384 = temp__5735__auto___45383__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45384)], 0));
} else {
}


var G__45385 = cljs.core.next(seq__45138__$1);
var G__45386 = null;
var G__45387 = (0);
var G__45388 = (0);
seq__45138 = G__45385;
chunk__45139 = G__45386;
count__45140 = G__45387;
i__45141 = G__45388;
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
var G__45389 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45390 = cljs.core.ex_cause(t);
via = G__45389;
t = G__45390;
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
var map__45197 = datafied_throwable;
var map__45197__$1 = (((((!((map__45197 == null))))?(((((map__45197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45197):map__45197);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45197__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45197__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45197__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__45198 = cljs.core.last(via);
var map__45198__$1 = (((((!((map__45198 == null))))?(((((map__45198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45198):map__45198);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45198__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45198__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45198__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__45205 = data;
var map__45205__$1 = (((((!((map__45205 == null))))?(((((map__45205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45205):map__45205);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45205__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45205__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45205__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__45208 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__45208__$1 = (((((!((map__45208 == null))))?(((((map__45208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45208):map__45208);
var top_data = map__45208__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45208__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45214 = phase;
var G__45214__$1 = (((G__45214 instanceof cljs.core.Keyword))?G__45214.fqn:null);
switch (G__45214__$1) {
case "read-source":
var map__45215 = data;
var map__45215__$1 = (((((!((map__45215 == null))))?(((((map__45215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45215):map__45215);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45215__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45215__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__45224 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__45224__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45224,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45224);
var G__45224__$2 = (cljs.core.truth_((function (){var fexpr__45225 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45225.cljs$core$IFn$_invoke$arity$1 ? fexpr__45225.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45225.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45224__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45224__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45224__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45224__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__45226 = top_data;
var G__45226__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45226,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45226);
var G__45226__$2 = (cljs.core.truth_((function (){var fexpr__45227 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45227.cljs$core$IFn$_invoke$arity$1 ? fexpr__45227.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45227.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45226__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45226__$1);
var G__45226__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45226__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45226__$2);
var G__45226__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45226__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45226__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45226__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45226__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__45234 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45234,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45234,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45234,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45234,(3),null);
var G__45242 = top_data;
var G__45242__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45242,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__45242);
var G__45242__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45242__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__45242__$1);
var G__45242__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45242__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__45242__$2);
var G__45242__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45242__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45242__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45242__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45242__$4;
}

break;
case "execution":
var vec__45246 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45246,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45246,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45246,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45246,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45190_SHARP_){
var or__4185__auto__ = (p1__45190_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__45258 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45258.cljs$core$IFn$_invoke$arity$1 ? fexpr__45258.cljs$core$IFn$_invoke$arity$1(p1__45190_SHARP_) : fexpr__45258.call(null,p1__45190_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__45259 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__45259__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45259,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__45259);
var G__45259__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45259__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45259__$1);
var G__45259__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45259__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__45259__$2);
var G__45259__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45259__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__45259__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45259__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45259__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45214__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__45266){
var map__45267 = p__45266;
var map__45267__$1 = (((((!((map__45267 == null))))?(((((map__45267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45267):map__45267);
var triage_data = map__45267__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45267__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45267__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45267__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45267__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45267__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45267__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45267__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45267__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__45271 = phase;
var G__45271__$1 = (((G__45271 instanceof cljs.core.Keyword))?G__45271.fqn:null);
switch (G__45271__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__45272 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__45273 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45274 = loc;
var G__45275 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45276_45395 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45277_45396 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45278_45397 = true;
var _STAR_print_fn_STAR__temp_val__45279_45398 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45278_45397);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45279_45398);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45264_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45264_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45277_45396);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45276_45395);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45272,G__45273,G__45274,G__45275) : format.call(null,G__45272,G__45273,G__45274,G__45275));

break;
case "macroexpansion":
var G__45280 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__45281 = cause_type;
var G__45282 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45283 = loc;
var G__45284 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45280,G__45281,G__45282,G__45283,G__45284) : format.call(null,G__45280,G__45281,G__45282,G__45283,G__45284));

break;
case "compile-syntax-check":
var G__45285 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45286 = cause_type;
var G__45287 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45288 = loc;
var G__45289 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45285,G__45286,G__45287,G__45288,G__45289) : format.call(null,G__45285,G__45286,G__45287,G__45288,G__45289));

break;
case "compilation":
var G__45290 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45291 = cause_type;
var G__45292 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45293 = loc;
var G__45294 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45290,G__45291,G__45292,G__45293,G__45294) : format.call(null,G__45290,G__45291,G__45292,G__45293,G__45294));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45295 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45296 = symbol;
var G__45297 = loc;
var G__45298 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45300_45399 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45301_45400 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45302_45401 = true;
var _STAR_print_fn_STAR__temp_val__45303_45402 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45302_45401);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45303_45402);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45265_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45265_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45301_45400);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45300_45399);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45295,G__45296,G__45297,G__45298) : format.call(null,G__45295,G__45296,G__45297,G__45298));
} else {
var G__45304 = "Execution error%s at %s(%s).\n%s\n";
var G__45305 = cause_type;
var G__45306 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45307 = loc;
var G__45308 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45304,G__45305,G__45306,G__45307,G__45308) : format.call(null,G__45304,G__45305,G__45306,G__45307,G__45308));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45271__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
