goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__49437){
var map__49438 = p__49437;
var map__49438__$1 = (((((!((map__49438 == null))))?(((((map__49438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49438):map__49438);
var m = map__49438__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49438__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49438__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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
var seq__49441_49563 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49442_49564 = null;
var count__49443_49565 = (0);
var i__49444_49566 = (0);
while(true){
if((i__49444_49566 < count__49443_49565)){
var f_49567 = chunk__49442_49564.cljs$core$IIndexed$_nth$arity$2(null,i__49444_49566);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_49567], 0));


var G__49568 = seq__49441_49563;
var G__49569 = chunk__49442_49564;
var G__49570 = count__49443_49565;
var G__49571 = (i__49444_49566 + (1));
seq__49441_49563 = G__49568;
chunk__49442_49564 = G__49569;
count__49443_49565 = G__49570;
i__49444_49566 = G__49571;
continue;
} else {
var temp__5735__auto___49573 = cljs.core.seq(seq__49441_49563);
if(temp__5735__auto___49573){
var seq__49441_49574__$1 = temp__5735__auto___49573;
if(cljs.core.chunked_seq_QMARK_(seq__49441_49574__$1)){
var c__4556__auto___49575 = cljs.core.chunk_first(seq__49441_49574__$1);
var G__49576 = cljs.core.chunk_rest(seq__49441_49574__$1);
var G__49577 = c__4556__auto___49575;
var G__49578 = cljs.core.count(c__4556__auto___49575);
var G__49579 = (0);
seq__49441_49563 = G__49576;
chunk__49442_49564 = G__49577;
count__49443_49565 = G__49578;
i__49444_49566 = G__49579;
continue;
} else {
var f_49580 = cljs.core.first(seq__49441_49574__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_49580], 0));


var G__49581 = cljs.core.next(seq__49441_49574__$1);
var G__49582 = null;
var G__49583 = (0);
var G__49584 = (0);
seq__49441_49563 = G__49581;
chunk__49442_49564 = G__49582;
count__49443_49565 = G__49583;
i__49444_49566 = G__49584;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_49585 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_49585], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_49585)))?cljs.core.second(arglists_49585):arglists_49585)], 0));
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
var seq__49447_49587 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49448_49588 = null;
var count__49449_49589 = (0);
var i__49450_49590 = (0);
while(true){
if((i__49450_49590 < count__49449_49589)){
var vec__49462_49591 = chunk__49448_49588.cljs$core$IIndexed$_nth$arity$2(null,i__49450_49590);
var name_49592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49462_49591,(0),null);
var map__49465_49593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49462_49591,(1),null);
var map__49465_49594__$1 = (((((!((map__49465_49593 == null))))?(((((map__49465_49593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49465_49593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49465_49593):map__49465_49593);
var doc_49595 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49465_49594__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49596 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49465_49594__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_49592], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_49596], 0));

if(cljs.core.truth_(doc_49595)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_49595], 0));
} else {
}


var G__49597 = seq__49447_49587;
var G__49598 = chunk__49448_49588;
var G__49599 = count__49449_49589;
var G__49600 = (i__49450_49590 + (1));
seq__49447_49587 = G__49597;
chunk__49448_49588 = G__49598;
count__49449_49589 = G__49599;
i__49450_49590 = G__49600;
continue;
} else {
var temp__5735__auto___49601 = cljs.core.seq(seq__49447_49587);
if(temp__5735__auto___49601){
var seq__49447_49602__$1 = temp__5735__auto___49601;
if(cljs.core.chunked_seq_QMARK_(seq__49447_49602__$1)){
var c__4556__auto___49603 = cljs.core.chunk_first(seq__49447_49602__$1);
var G__49604 = cljs.core.chunk_rest(seq__49447_49602__$1);
var G__49605 = c__4556__auto___49603;
var G__49606 = cljs.core.count(c__4556__auto___49603);
var G__49607 = (0);
seq__49447_49587 = G__49604;
chunk__49448_49588 = G__49605;
count__49449_49589 = G__49606;
i__49450_49590 = G__49607;
continue;
} else {
var vec__49467_49608 = cljs.core.first(seq__49447_49602__$1);
var name_49609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49467_49608,(0),null);
var map__49470_49610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49467_49608,(1),null);
var map__49470_49611__$1 = (((((!((map__49470_49610 == null))))?(((((map__49470_49610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49470_49610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49470_49610):map__49470_49610);
var doc_49612 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49470_49611__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49470_49611__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_49609], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_49613], 0));

if(cljs.core.truth_(doc_49612)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_49612], 0));
} else {
}


var G__49614 = cljs.core.next(seq__49447_49602__$1);
var G__49615 = null;
var G__49616 = (0);
var G__49617 = (0);
seq__49447_49587 = G__49614;
chunk__49448_49588 = G__49615;
count__49449_49589 = G__49616;
i__49450_49590 = G__49617;
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

var seq__49472 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__49473 = null;
var count__49474 = (0);
var i__49475 = (0);
while(true){
if((i__49475 < count__49474)){
var role = chunk__49473.cljs$core$IIndexed$_nth$arity$2(null,i__49475);
var temp__5735__auto___49618__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___49618__$1)){
var spec_49619 = temp__5735__auto___49618__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_49619)], 0));
} else {
}


var G__49620 = seq__49472;
var G__49621 = chunk__49473;
var G__49622 = count__49474;
var G__49623 = (i__49475 + (1));
seq__49472 = G__49620;
chunk__49473 = G__49621;
count__49474 = G__49622;
i__49475 = G__49623;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__49472);
if(temp__5735__auto____$1){
var seq__49472__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__49472__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49472__$1);
var G__49624 = cljs.core.chunk_rest(seq__49472__$1);
var G__49625 = c__4556__auto__;
var G__49626 = cljs.core.count(c__4556__auto__);
var G__49627 = (0);
seq__49472 = G__49624;
chunk__49473 = G__49625;
count__49474 = G__49626;
i__49475 = G__49627;
continue;
} else {
var role = cljs.core.first(seq__49472__$1);
var temp__5735__auto___49628__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___49628__$2)){
var spec_49629 = temp__5735__auto___49628__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_49629)], 0));
} else {
}


var G__49630 = cljs.core.next(seq__49472__$1);
var G__49631 = null;
var G__49632 = (0);
var G__49633 = (0);
seq__49472 = G__49630;
chunk__49473 = G__49631;
count__49474 = G__49632;
i__49475 = G__49633;
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
var G__49634 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__49635 = cljs.core.ex_cause(t);
via = G__49634;
t = G__49635;
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
var map__49480 = datafied_throwable;
var map__49480__$1 = (((((!((map__49480 == null))))?(((((map__49480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49480):map__49480);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49480__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49480__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49480__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__49481 = cljs.core.last(via);
var map__49481__$1 = (((((!((map__49481 == null))))?(((((map__49481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49481):map__49481);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49481__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49481__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49481__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__49482 = data;
var map__49482__$1 = (((((!((map__49482 == null))))?(((((map__49482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49482):map__49482);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49482__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49482__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49482__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__49483 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__49483__$1 = (((((!((map__49483 == null))))?(((((map__49483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49483):map__49483);
var top_data = map__49483__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49483__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__49489 = phase;
var G__49489__$1 = (((G__49489 instanceof cljs.core.Keyword))?G__49489.fqn:null);
switch (G__49489__$1) {
case "read-source":
var map__49490 = data;
var map__49490__$1 = (((((!((map__49490 == null))))?(((((map__49490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49490):map__49490);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49490__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49490__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__49492 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__49492__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49492,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49492);
var G__49492__$2 = (cljs.core.truth_((function (){var fexpr__49493 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49493.cljs$core$IFn$_invoke$arity$1 ? fexpr__49493.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49493.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49492__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49492__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49492__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49492__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__49494 = top_data;
var G__49494__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49494,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49494);
var G__49494__$2 = (cljs.core.truth_((function (){var fexpr__49495 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49495.cljs$core$IFn$_invoke$arity$1 ? fexpr__49495.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49495.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49494__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49494__$1);
var G__49494__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49494__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49494__$2);
var G__49494__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49494__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__49494__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49494__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__49494__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__49500 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49500,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49500,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49500,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49500,(3),null);
var G__49507 = top_data;
var G__49507__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49507,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__49507);
var G__49507__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49507__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__49507__$1);
var G__49507__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49507__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__49507__$2);
var G__49507__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49507__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49507__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49507__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49507__$4;
}

break;
case "execution":
var vec__49512 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49512,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49512,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49512,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49512,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__49479_SHARP_){
var or__4126__auto__ = (p1__49479_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__49517 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49517.cljs$core$IFn$_invoke$arity$1 ? fexpr__49517.cljs$core$IFn$_invoke$arity$1(p1__49479_SHARP_) : fexpr__49517.call(null,p1__49479_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__49518 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__49518__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49518,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__49518);
var G__49518__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49518__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__49518__$1);
var G__49518__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49518__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__49518__$2);
var G__49518__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49518__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__49518__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49518__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__49518__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49489__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__49522){
var map__49523 = p__49522;
var map__49523__$1 = (((((!((map__49523 == null))))?(((((map__49523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49523):map__49523);
var triage_data = map__49523__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49523__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49523__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49523__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49523__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49523__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49523__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49523__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49523__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__49525 = phase;
var G__49525__$1 = (((G__49525 instanceof cljs.core.Keyword))?G__49525.fqn:null);
switch (G__49525__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__49526 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__49527 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49528 = loc;
var G__49529 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49530_49648 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49531_49649 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49532_49650 = true;
var _STAR_print_fn_STAR__temp_val__49533_49651 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49532_49650);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49533_49651);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49520_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49520_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49531_49649);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49530_49648);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__49526,G__49527,G__49528,G__49529) : format.call(null,G__49526,G__49527,G__49528,G__49529));

break;
case "macroexpansion":
var G__49534 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__49535 = cause_type;
var G__49536 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49537 = loc;
var G__49538 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49534,G__49535,G__49536,G__49537,G__49538) : format.call(null,G__49534,G__49535,G__49536,G__49537,G__49538));

break;
case "compile-syntax-check":
var G__49539 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__49540 = cause_type;
var G__49541 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49542 = loc;
var G__49543 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49539,G__49540,G__49541,G__49542,G__49543) : format.call(null,G__49539,G__49540,G__49541,G__49542,G__49543));

break;
case "compilation":
var G__49544 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__49545 = cause_type;
var G__49546 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49547 = loc;
var G__49548 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49544,G__49545,G__49546,G__49547,G__49548) : format.call(null,G__49544,G__49545,G__49546,G__49547,G__49548));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__49549 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__49550 = symbol;
var G__49551 = loc;
var G__49552 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49553_49652 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49554_49653 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49555_49654 = true;
var _STAR_print_fn_STAR__temp_val__49556_49655 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49555_49654);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49556_49655);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49521_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49521_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49554_49653);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49553_49652);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__49549,G__49550,G__49551,G__49552) : format.call(null,G__49549,G__49550,G__49551,G__49552));
} else {
var G__49557 = "Execution error%s at %s(%s).\n%s\n";
var G__49558 = cause_type;
var G__49559 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49560 = loc;
var G__49561 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49557,G__49558,G__49559,G__49560,G__49561) : format.call(null,G__49557,G__49558,G__49559,G__49560,G__49561));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49525__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
