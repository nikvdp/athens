goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__53465){
var map__53466 = p__53465;
var map__53466__$1 = (((((!((map__53466 == null))))?(((((map__53466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53466):map__53466);
var m = map__53466__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53466__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53466__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__53468_53592 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53469_53593 = null;
var count__53470_53594 = (0);
var i__53471_53595 = (0);
while(true){
if((i__53471_53595 < count__53470_53594)){
var f_53596 = chunk__53469_53593.cljs$core$IIndexed$_nth$arity$2(null,i__53471_53595);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_53596], 0));


var G__53600 = seq__53468_53592;
var G__53601 = chunk__53469_53593;
var G__53602 = count__53470_53594;
var G__53603 = (i__53471_53595 + (1));
seq__53468_53592 = G__53600;
chunk__53469_53593 = G__53601;
count__53470_53594 = G__53602;
i__53471_53595 = G__53603;
continue;
} else {
var temp__5735__auto___53604 = cljs.core.seq(seq__53468_53592);
if(temp__5735__auto___53604){
var seq__53468_53606__$1 = temp__5735__auto___53604;
if(cljs.core.chunked_seq_QMARK_(seq__53468_53606__$1)){
var c__4609__auto___53607 = cljs.core.chunk_first(seq__53468_53606__$1);
var G__53608 = cljs.core.chunk_rest(seq__53468_53606__$1);
var G__53609 = c__4609__auto___53607;
var G__53610 = cljs.core.count(c__4609__auto___53607);
var G__53611 = (0);
seq__53468_53592 = G__53608;
chunk__53469_53593 = G__53609;
count__53470_53594 = G__53610;
i__53471_53595 = G__53611;
continue;
} else {
var f_53612 = cljs.core.first(seq__53468_53606__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_53612], 0));


var G__53613 = cljs.core.next(seq__53468_53606__$1);
var G__53614 = null;
var G__53615 = (0);
var G__53616 = (0);
seq__53468_53592 = G__53613;
chunk__53469_53593 = G__53614;
count__53470_53594 = G__53615;
i__53471_53595 = G__53616;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_53617 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_53617], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_53617)))?cljs.core.second(arglists_53617):arglists_53617)], 0));
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
var seq__53473_53619 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53474_53620 = null;
var count__53475_53621 = (0);
var i__53476_53622 = (0);
while(true){
if((i__53476_53622 < count__53475_53621)){
var vec__53495_53623 = chunk__53474_53620.cljs$core$IIndexed$_nth$arity$2(null,i__53476_53622);
var name_53624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53495_53623,(0),null);
var map__53498_53625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53495_53623,(1),null);
var map__53498_53626__$1 = (((((!((map__53498_53625 == null))))?(((((map__53498_53625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53498_53625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53498_53625):map__53498_53625);
var doc_53627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53498_53626__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53498_53626__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_53624], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_53628], 0));

if(cljs.core.truth_(doc_53627)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_53627], 0));
} else {
}


var G__53629 = seq__53473_53619;
var G__53630 = chunk__53474_53620;
var G__53631 = count__53475_53621;
var G__53632 = (i__53476_53622 + (1));
seq__53473_53619 = G__53629;
chunk__53474_53620 = G__53630;
count__53475_53621 = G__53631;
i__53476_53622 = G__53632;
continue;
} else {
var temp__5735__auto___53633 = cljs.core.seq(seq__53473_53619);
if(temp__5735__auto___53633){
var seq__53473_53634__$1 = temp__5735__auto___53633;
if(cljs.core.chunked_seq_QMARK_(seq__53473_53634__$1)){
var c__4609__auto___53635 = cljs.core.chunk_first(seq__53473_53634__$1);
var G__53636 = cljs.core.chunk_rest(seq__53473_53634__$1);
var G__53637 = c__4609__auto___53635;
var G__53638 = cljs.core.count(c__4609__auto___53635);
var G__53639 = (0);
seq__53473_53619 = G__53636;
chunk__53474_53620 = G__53637;
count__53475_53621 = G__53638;
i__53476_53622 = G__53639;
continue;
} else {
var vec__53505_53640 = cljs.core.first(seq__53473_53634__$1);
var name_53641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53505_53640,(0),null);
var map__53508_53642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53505_53640,(1),null);
var map__53508_53643__$1 = (((((!((map__53508_53642 == null))))?(((((map__53508_53642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53508_53642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53508_53642):map__53508_53642);
var doc_53644 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53508_53643__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53645 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53508_53643__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_53641], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_53645], 0));

if(cljs.core.truth_(doc_53644)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_53644], 0));
} else {
}


var G__53646 = cljs.core.next(seq__53473_53634__$1);
var G__53647 = null;
var G__53648 = (0);
var G__53649 = (0);
seq__53473_53619 = G__53646;
chunk__53474_53620 = G__53647;
count__53475_53621 = G__53648;
i__53476_53622 = G__53649;
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

var seq__53510 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__53511 = null;
var count__53512 = (0);
var i__53513 = (0);
while(true){
if((i__53513 < count__53512)){
var role = chunk__53511.cljs$core$IIndexed$_nth$arity$2(null,i__53513);
var temp__5735__auto___53650__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___53650__$1)){
var spec_53651 = temp__5735__auto___53650__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_53651)], 0));
} else {
}


var G__53652 = seq__53510;
var G__53653 = chunk__53511;
var G__53654 = count__53512;
var G__53655 = (i__53513 + (1));
seq__53510 = G__53652;
chunk__53511 = G__53653;
count__53512 = G__53654;
i__53513 = G__53655;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__53510);
if(temp__5735__auto____$1){
var seq__53510__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__53510__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__53510__$1);
var G__53656 = cljs.core.chunk_rest(seq__53510__$1);
var G__53657 = c__4609__auto__;
var G__53658 = cljs.core.count(c__4609__auto__);
var G__53659 = (0);
seq__53510 = G__53656;
chunk__53511 = G__53657;
count__53512 = G__53658;
i__53513 = G__53659;
continue;
} else {
var role = cljs.core.first(seq__53510__$1);
var temp__5735__auto___53660__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___53660__$2)){
var spec_53661 = temp__5735__auto___53660__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_53661)], 0));
} else {
}


var G__53662 = cljs.core.next(seq__53510__$1);
var G__53663 = null;
var G__53664 = (0);
var G__53665 = (0);
seq__53510 = G__53662;
chunk__53511 = G__53663;
count__53512 = G__53664;
i__53513 = G__53665;
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
var G__53666 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__53667 = cljs.core.ex_cause(t);
via = G__53666;
t = G__53667;
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
var map__53518 = datafied_throwable;
var map__53518__$1 = (((((!((map__53518 == null))))?(((((map__53518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53518):map__53518);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53518__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53518__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53518__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__53519 = cljs.core.last(via);
var map__53519__$1 = (((((!((map__53519 == null))))?(((((map__53519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53519):map__53519);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53519__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53519__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53519__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__53520 = data;
var map__53520__$1 = (((((!((map__53520 == null))))?(((((map__53520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53520):map__53520);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53520__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53520__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53520__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__53521 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__53521__$1 = (((((!((map__53521 == null))))?(((((map__53521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53521):map__53521);
var top_data = map__53521__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53521__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__53526 = phase;
var G__53526__$1 = (((G__53526 instanceof cljs.core.Keyword))?G__53526.fqn:null);
switch (G__53526__$1) {
case "read-source":
var map__53527 = data;
var map__53527__$1 = (((((!((map__53527 == null))))?(((((map__53527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53527):map__53527);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53527__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53527__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__53529 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__53529__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53529,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__53529);
var G__53529__$2 = (cljs.core.truth_((function (){var fexpr__53531 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53531.cljs$core$IFn$_invoke$arity$1 ? fexpr__53531.cljs$core$IFn$_invoke$arity$1(source) : fexpr__53531.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53529__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__53529__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53529__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__53529__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__53532 = top_data;
var G__53532__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53532,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__53532);
var G__53532__$2 = (cljs.core.truth_((function (){var fexpr__53533 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53533.cljs$core$IFn$_invoke$arity$1 ? fexpr__53533.cljs$core$IFn$_invoke$arity$1(source) : fexpr__53533.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53532__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__53532__$1);
var G__53532__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53532__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__53532__$2);
var G__53532__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53532__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__53532__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53532__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__53532__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__53535 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53535,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53535,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53535,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53535,(3),null);
var G__53538 = top_data;
var G__53538__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53538,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__53538);
var G__53538__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53538__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__53538__$1);
var G__53538__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53538__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__53538__$2);
var G__53538__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53538__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__53538__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53538__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__53538__$4;
}

break;
case "execution":
var vec__53539 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53539,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53539,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53539,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53539,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__53517_SHARP_){
var or__4185__auto__ = (p1__53517_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__53543 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53543.cljs$core$IFn$_invoke$arity$1 ? fexpr__53543.cljs$core$IFn$_invoke$arity$1(p1__53517_SHARP_) : fexpr__53543.call(null,p1__53517_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__53544 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__53544__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53544,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__53544);
var G__53544__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53544__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__53544__$1);
var G__53544__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53544__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__53544__$2);
var G__53544__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53544__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__53544__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53544__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__53544__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53526__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__53547){
var map__53548 = p__53547;
var map__53548__$1 = (((((!((map__53548 == null))))?(((((map__53548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53548):map__53548);
var triage_data = map__53548__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53548__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53548__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53548__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53548__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53548__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53548__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53548__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53548__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__53550 = phase;
var G__53550__$1 = (((G__53550 instanceof cljs.core.Keyword))?G__53550.fqn:null);
switch (G__53550__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__53551 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__53552 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53553 = loc;
var G__53554 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53555_53681 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53556_53682 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53557_53683 = true;
var _STAR_print_fn_STAR__temp_val__53558_53684 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53557_53683);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53558_53684);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53545_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53545_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53556_53682);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53555_53681);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__53551,G__53552,G__53553,G__53554) : format.call(null,G__53551,G__53552,G__53553,G__53554));

break;
case "macroexpansion":
var G__53563 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__53564 = cause_type;
var G__53565 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53566 = loc;
var G__53567 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53563,G__53564,G__53565,G__53566,G__53567) : format.call(null,G__53563,G__53564,G__53565,G__53566,G__53567));

break;
case "compile-syntax-check":
var G__53568 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__53569 = cause_type;
var G__53570 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53571 = loc;
var G__53572 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53568,G__53569,G__53570,G__53571,G__53572) : format.call(null,G__53568,G__53569,G__53570,G__53571,G__53572));

break;
case "compilation":
var G__53573 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__53574 = cause_type;
var G__53575 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53576 = loc;
var G__53577 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53573,G__53574,G__53575,G__53576,G__53577) : format.call(null,G__53573,G__53574,G__53575,G__53576,G__53577));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__53578 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__53579 = symbol;
var G__53580 = loc;
var G__53581 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53582_53687 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53583_53688 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53584_53689 = true;
var _STAR_print_fn_STAR__temp_val__53585_53690 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53584_53689);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53585_53690);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53546_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53546_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53583_53688);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53582_53687);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__53578,G__53579,G__53580,G__53581) : format.call(null,G__53578,G__53579,G__53580,G__53581));
} else {
var G__53587 = "Execution error%s at %s(%s).\n%s\n";
var G__53588 = cause_type;
var G__53589 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53590 = loc;
var G__53591 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53587,G__53588,G__53589,G__53590,G__53591) : format.call(null,G__53587,G__53588,G__53589,G__53590,G__53591));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53550__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
