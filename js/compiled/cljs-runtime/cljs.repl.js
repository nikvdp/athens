goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__53448){
var map__53449 = p__53448;
var map__53449__$1 = (((((!((map__53449 == null))))?(((((map__53449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53449):map__53449);
var m = map__53449__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53449__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53449__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__53455_53579 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53456_53580 = null;
var count__53457_53581 = (0);
var i__53458_53582 = (0);
while(true){
if((i__53458_53582 < count__53457_53581)){
var f_53583 = chunk__53456_53580.cljs$core$IIndexed$_nth$arity$2(null,i__53458_53582);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_53583], 0));


var G__53584 = seq__53455_53579;
var G__53585 = chunk__53456_53580;
var G__53586 = count__53457_53581;
var G__53587 = (i__53458_53582 + (1));
seq__53455_53579 = G__53584;
chunk__53456_53580 = G__53585;
count__53457_53581 = G__53586;
i__53458_53582 = G__53587;
continue;
} else {
var temp__5735__auto___53588 = cljs.core.seq(seq__53455_53579);
if(temp__5735__auto___53588){
var seq__53455_53589__$1 = temp__5735__auto___53588;
if(cljs.core.chunked_seq_QMARK_(seq__53455_53589__$1)){
var c__4609__auto___53590 = cljs.core.chunk_first(seq__53455_53589__$1);
var G__53591 = cljs.core.chunk_rest(seq__53455_53589__$1);
var G__53592 = c__4609__auto___53590;
var G__53593 = cljs.core.count(c__4609__auto___53590);
var G__53594 = (0);
seq__53455_53579 = G__53591;
chunk__53456_53580 = G__53592;
count__53457_53581 = G__53593;
i__53458_53582 = G__53594;
continue;
} else {
var f_53595 = cljs.core.first(seq__53455_53589__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_53595], 0));


var G__53596 = cljs.core.next(seq__53455_53589__$1);
var G__53597 = null;
var G__53598 = (0);
var G__53599 = (0);
seq__53455_53579 = G__53596;
chunk__53456_53580 = G__53597;
count__53457_53581 = G__53598;
i__53458_53582 = G__53599;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_53600 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_53600], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_53600)))?cljs.core.second(arglists_53600):arglists_53600)], 0));
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
var seq__53468_53601 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53469_53602 = null;
var count__53470_53603 = (0);
var i__53471_53604 = (0);
while(true){
if((i__53471_53604 < count__53470_53603)){
var vec__53483_53605 = chunk__53469_53602.cljs$core$IIndexed$_nth$arity$2(null,i__53471_53604);
var name_53606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53483_53605,(0),null);
var map__53486_53607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53483_53605,(1),null);
var map__53486_53608__$1 = (((((!((map__53486_53607 == null))))?(((((map__53486_53607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53486_53607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53486_53607):map__53486_53607);
var doc_53609 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53486_53608__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53486_53608__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_53606], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_53610], 0));

if(cljs.core.truth_(doc_53609)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_53609], 0));
} else {
}


var G__53611 = seq__53468_53601;
var G__53612 = chunk__53469_53602;
var G__53613 = count__53470_53603;
var G__53614 = (i__53471_53604 + (1));
seq__53468_53601 = G__53611;
chunk__53469_53602 = G__53612;
count__53470_53603 = G__53613;
i__53471_53604 = G__53614;
continue;
} else {
var temp__5735__auto___53615 = cljs.core.seq(seq__53468_53601);
if(temp__5735__auto___53615){
var seq__53468_53616__$1 = temp__5735__auto___53615;
if(cljs.core.chunked_seq_QMARK_(seq__53468_53616__$1)){
var c__4609__auto___53617 = cljs.core.chunk_first(seq__53468_53616__$1);
var G__53618 = cljs.core.chunk_rest(seq__53468_53616__$1);
var G__53619 = c__4609__auto___53617;
var G__53620 = cljs.core.count(c__4609__auto___53617);
var G__53621 = (0);
seq__53468_53601 = G__53618;
chunk__53469_53602 = G__53619;
count__53470_53603 = G__53620;
i__53471_53604 = G__53621;
continue;
} else {
var vec__53488_53623 = cljs.core.first(seq__53468_53616__$1);
var name_53624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53488_53623,(0),null);
var map__53491_53625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53488_53623,(1),null);
var map__53491_53626__$1 = (((((!((map__53491_53625 == null))))?(((((map__53491_53625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53491_53625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53491_53625):map__53491_53625);
var doc_53627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53491_53626__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53491_53626__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_53624], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_53628], 0));

if(cljs.core.truth_(doc_53627)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_53627], 0));
} else {
}


var G__53629 = cljs.core.next(seq__53468_53616__$1);
var G__53630 = null;
var G__53631 = (0);
var G__53632 = (0);
seq__53468_53601 = G__53629;
chunk__53469_53602 = G__53630;
count__53470_53603 = G__53631;
i__53471_53604 = G__53632;
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

var seq__53493 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__53494 = null;
var count__53495 = (0);
var i__53496 = (0);
while(true){
if((i__53496 < count__53495)){
var role = chunk__53494.cljs$core$IIndexed$_nth$arity$2(null,i__53496);
var temp__5735__auto___53634__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___53634__$1)){
var spec_53635 = temp__5735__auto___53634__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_53635)], 0));
} else {
}


var G__53636 = seq__53493;
var G__53637 = chunk__53494;
var G__53638 = count__53495;
var G__53639 = (i__53496 + (1));
seq__53493 = G__53636;
chunk__53494 = G__53637;
count__53495 = G__53638;
i__53496 = G__53639;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__53493);
if(temp__5735__auto____$1){
var seq__53493__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__53493__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__53493__$1);
var G__53640 = cljs.core.chunk_rest(seq__53493__$1);
var G__53641 = c__4609__auto__;
var G__53642 = cljs.core.count(c__4609__auto__);
var G__53643 = (0);
seq__53493 = G__53640;
chunk__53494 = G__53641;
count__53495 = G__53642;
i__53496 = G__53643;
continue;
} else {
var role = cljs.core.first(seq__53493__$1);
var temp__5735__auto___53644__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___53644__$2)){
var spec_53645 = temp__5735__auto___53644__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_53645)], 0));
} else {
}


var G__53646 = cljs.core.next(seq__53493__$1);
var G__53647 = null;
var G__53648 = (0);
var G__53649 = (0);
seq__53493 = G__53646;
chunk__53494 = G__53647;
count__53495 = G__53648;
i__53496 = G__53649;
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
var G__53650 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__53651 = cljs.core.ex_cause(t);
via = G__53650;
t = G__53651;
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
var map__53502 = datafied_throwable;
var map__53502__$1 = (((((!((map__53502 == null))))?(((((map__53502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53502):map__53502);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53502__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53502__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53502__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__53503 = cljs.core.last(via);
var map__53503__$1 = (((((!((map__53503 == null))))?(((((map__53503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53503):map__53503);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53503__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53503__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53503__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__53504 = data;
var map__53504__$1 = (((((!((map__53504 == null))))?(((((map__53504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53504):map__53504);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53504__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53504__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53504__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__53505 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__53505__$1 = (((((!((map__53505 == null))))?(((((map__53505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53505):map__53505);
var top_data = map__53505__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53505__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__53510 = phase;
var G__53510__$1 = (((G__53510 instanceof cljs.core.Keyword))?G__53510.fqn:null);
switch (G__53510__$1) {
case "read-source":
var map__53512 = data;
var map__53512__$1 = (((((!((map__53512 == null))))?(((((map__53512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53512):map__53512);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53512__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53512__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__53517 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__53517__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53517,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__53517);
var G__53517__$2 = (cljs.core.truth_((function (){var fexpr__53518 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53518.cljs$core$IFn$_invoke$arity$1 ? fexpr__53518.cljs$core$IFn$_invoke$arity$1(source) : fexpr__53518.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53517__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__53517__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53517__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__53517__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__53519 = top_data;
var G__53519__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53519,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__53519);
var G__53519__$2 = (cljs.core.truth_((function (){var fexpr__53520 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53520.cljs$core$IFn$_invoke$arity$1 ? fexpr__53520.cljs$core$IFn$_invoke$arity$1(source) : fexpr__53520.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53519__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__53519__$1);
var G__53519__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53519__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__53519__$2);
var G__53519__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53519__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__53519__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53519__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__53519__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__53521 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53521,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53521,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53521,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53521,(3),null);
var G__53524 = top_data;
var G__53524__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53524,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__53524);
var G__53524__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53524__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__53524__$1);
var G__53524__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53524__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__53524__$2);
var G__53524__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53524__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__53524__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53524__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__53524__$4;
}

break;
case "execution":
var vec__53526 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53526,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53526,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53526,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53526,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__53501_SHARP_){
var or__4185__auto__ = (p1__53501_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__53530 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53530.cljs$core$IFn$_invoke$arity$1 ? fexpr__53530.cljs$core$IFn$_invoke$arity$1(p1__53501_SHARP_) : fexpr__53530.call(null,p1__53501_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__53531 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__53531__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53531,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__53531);
var G__53531__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53531__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__53531__$1);
var G__53531__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53531__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__53531__$2);
var G__53531__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53531__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__53531__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53531__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__53531__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53510__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__53538){
var map__53539 = p__53538;
var map__53539__$1 = (((((!((map__53539 == null))))?(((((map__53539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53539):map__53539);
var triage_data = map__53539__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53539__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53539__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53539__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53539__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53539__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53539__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53539__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53539__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__53542 = phase;
var G__53542__$1 = (((G__53542 instanceof cljs.core.Keyword))?G__53542.fqn:null);
switch (G__53542__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__53543 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__53544 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53545 = loc;
var G__53546 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53547_53675 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53548_53676 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53549_53677 = true;
var _STAR_print_fn_STAR__temp_val__53550_53678 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53549_53677);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53550_53678);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53535_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53535_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53548_53676);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53547_53675);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__53543,G__53544,G__53545,G__53546) : format.call(null,G__53543,G__53544,G__53545,G__53546));

break;
case "macroexpansion":
var G__53551 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__53552 = cause_type;
var G__53553 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53554 = loc;
var G__53555 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53551,G__53552,G__53553,G__53554,G__53555) : format.call(null,G__53551,G__53552,G__53553,G__53554,G__53555));

break;
case "compile-syntax-check":
var G__53556 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__53557 = cause_type;
var G__53558 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53559 = loc;
var G__53560 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53556,G__53557,G__53558,G__53559,G__53560) : format.call(null,G__53556,G__53557,G__53558,G__53559,G__53560));

break;
case "compilation":
var G__53561 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__53562 = cause_type;
var G__53563 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53564 = loc;
var G__53565 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53561,G__53562,G__53563,G__53564,G__53565) : format.call(null,G__53561,G__53562,G__53563,G__53564,G__53565));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__53566 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__53567 = symbol;
var G__53568 = loc;
var G__53569 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53570_53683 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53571_53684 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53572_53685 = true;
var _STAR_print_fn_STAR__temp_val__53573_53686 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53572_53685);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53573_53686);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53537_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53537_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53571_53684);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53570_53683);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__53566,G__53567,G__53568,G__53569) : format.call(null,G__53566,G__53567,G__53568,G__53569));
} else {
var G__53574 = "Execution error%s at %s(%s).\n%s\n";
var G__53575 = cause_type;
var G__53576 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53577 = loc;
var G__53578 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53574,G__53575,G__53576,G__53577,G__53578) : format.call(null,G__53574,G__53575,G__53576,G__53577,G__53578));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53542__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
