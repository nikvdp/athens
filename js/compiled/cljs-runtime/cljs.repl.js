goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__53445){
var map__53446 = p__53445;
var map__53446__$1 = (((((!((map__53446 == null))))?(((((map__53446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53446):map__53446);
var m = map__53446__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53446__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53446__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__53449_53570 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53450_53571 = null;
var count__53451_53572 = (0);
var i__53452_53573 = (0);
while(true){
if((i__53452_53573 < count__53451_53572)){
var f_53576 = chunk__53450_53571.cljs$core$IIndexed$_nth$arity$2(null,i__53452_53573);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_53576], 0));


var G__53578 = seq__53449_53570;
var G__53579 = chunk__53450_53571;
var G__53580 = count__53451_53572;
var G__53581 = (i__53452_53573 + (1));
seq__53449_53570 = G__53578;
chunk__53450_53571 = G__53579;
count__53451_53572 = G__53580;
i__53452_53573 = G__53581;
continue;
} else {
var temp__5735__auto___53582 = cljs.core.seq(seq__53449_53570);
if(temp__5735__auto___53582){
var seq__53449_53583__$1 = temp__5735__auto___53582;
if(cljs.core.chunked_seq_QMARK_(seq__53449_53583__$1)){
var c__4609__auto___53584 = cljs.core.chunk_first(seq__53449_53583__$1);
var G__53585 = cljs.core.chunk_rest(seq__53449_53583__$1);
var G__53586 = c__4609__auto___53584;
var G__53587 = cljs.core.count(c__4609__auto___53584);
var G__53588 = (0);
seq__53449_53570 = G__53585;
chunk__53450_53571 = G__53586;
count__53451_53572 = G__53587;
i__53452_53573 = G__53588;
continue;
} else {
var f_53589 = cljs.core.first(seq__53449_53583__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_53589], 0));


var G__53590 = cljs.core.next(seq__53449_53583__$1);
var G__53591 = null;
var G__53592 = (0);
var G__53593 = (0);
seq__53449_53570 = G__53590;
chunk__53450_53571 = G__53591;
count__53451_53572 = G__53592;
i__53452_53573 = G__53593;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_53594 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_53594], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_53594)))?cljs.core.second(arglists_53594):arglists_53594)], 0));
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
var seq__53454_53596 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53455_53597 = null;
var count__53456_53598 = (0);
var i__53457_53599 = (0);
while(true){
if((i__53457_53599 < count__53456_53598)){
var vec__53468_53600 = chunk__53455_53597.cljs$core$IIndexed$_nth$arity$2(null,i__53457_53599);
var name_53601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53468_53600,(0),null);
var map__53471_53602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53468_53600,(1),null);
var map__53471_53603__$1 = (((((!((map__53471_53602 == null))))?(((((map__53471_53602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53471_53602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53471_53602):map__53471_53602);
var doc_53604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53471_53603__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53605 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53471_53603__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_53601], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_53605], 0));

if(cljs.core.truth_(doc_53604)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_53604], 0));
} else {
}


var G__53606 = seq__53454_53596;
var G__53607 = chunk__53455_53597;
var G__53608 = count__53456_53598;
var G__53609 = (i__53457_53599 + (1));
seq__53454_53596 = G__53606;
chunk__53455_53597 = G__53607;
count__53456_53598 = G__53608;
i__53457_53599 = G__53609;
continue;
} else {
var temp__5735__auto___53610 = cljs.core.seq(seq__53454_53596);
if(temp__5735__auto___53610){
var seq__53454_53611__$1 = temp__5735__auto___53610;
if(cljs.core.chunked_seq_QMARK_(seq__53454_53611__$1)){
var c__4609__auto___53612 = cljs.core.chunk_first(seq__53454_53611__$1);
var G__53613 = cljs.core.chunk_rest(seq__53454_53611__$1);
var G__53614 = c__4609__auto___53612;
var G__53615 = cljs.core.count(c__4609__auto___53612);
var G__53616 = (0);
seq__53454_53596 = G__53613;
chunk__53455_53597 = G__53614;
count__53456_53598 = G__53615;
i__53457_53599 = G__53616;
continue;
} else {
var vec__53474_53620 = cljs.core.first(seq__53454_53611__$1);
var name_53621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53474_53620,(0),null);
var map__53477_53622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53474_53620,(1),null);
var map__53477_53623__$1 = (((((!((map__53477_53622 == null))))?(((((map__53477_53622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53477_53622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53477_53622):map__53477_53622);
var doc_53624 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53477_53623__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53625 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53477_53623__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_53621], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_53625], 0));

if(cljs.core.truth_(doc_53624)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_53624], 0));
} else {
}


var G__53627 = cljs.core.next(seq__53454_53611__$1);
var G__53628 = null;
var G__53629 = (0);
var G__53630 = (0);
seq__53454_53596 = G__53627;
chunk__53455_53597 = G__53628;
count__53456_53598 = G__53629;
i__53457_53599 = G__53630;
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

var seq__53479 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__53480 = null;
var count__53481 = (0);
var i__53482 = (0);
while(true){
if((i__53482 < count__53481)){
var role = chunk__53480.cljs$core$IIndexed$_nth$arity$2(null,i__53482);
var temp__5735__auto___53631__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___53631__$1)){
var spec_53632 = temp__5735__auto___53631__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_53632)], 0));
} else {
}


var G__53634 = seq__53479;
var G__53635 = chunk__53480;
var G__53636 = count__53481;
var G__53637 = (i__53482 + (1));
seq__53479 = G__53634;
chunk__53480 = G__53635;
count__53481 = G__53636;
i__53482 = G__53637;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__53479);
if(temp__5735__auto____$1){
var seq__53479__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__53479__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__53479__$1);
var G__53638 = cljs.core.chunk_rest(seq__53479__$1);
var G__53639 = c__4609__auto__;
var G__53640 = cljs.core.count(c__4609__auto__);
var G__53641 = (0);
seq__53479 = G__53638;
chunk__53480 = G__53639;
count__53481 = G__53640;
i__53482 = G__53641;
continue;
} else {
var role = cljs.core.first(seq__53479__$1);
var temp__5735__auto___53642__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___53642__$2)){
var spec_53643 = temp__5735__auto___53642__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_53643)], 0));
} else {
}


var G__53644 = cljs.core.next(seq__53479__$1);
var G__53645 = null;
var G__53646 = (0);
var G__53647 = (0);
seq__53479 = G__53644;
chunk__53480 = G__53645;
count__53481 = G__53646;
i__53482 = G__53647;
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
var G__53648 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__53649 = cljs.core.ex_cause(t);
via = G__53648;
t = G__53649;
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
var map__53499 = datafied_throwable;
var map__53499__$1 = (((((!((map__53499 == null))))?(((((map__53499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53499):map__53499);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53499__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53499__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53499__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__53500 = cljs.core.last(via);
var map__53500__$1 = (((((!((map__53500 == null))))?(((((map__53500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53500):map__53500);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53500__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53500__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53500__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__53501 = data;
var map__53501__$1 = (((((!((map__53501 == null))))?(((((map__53501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53501):map__53501);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53501__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53501__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53501__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__53502 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__53502__$1 = (((((!((map__53502 == null))))?(((((map__53502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53502):map__53502);
var top_data = map__53502__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53502__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__53507 = phase;
var G__53507__$1 = (((G__53507 instanceof cljs.core.Keyword))?G__53507.fqn:null);
switch (G__53507__$1) {
case "read-source":
var map__53508 = data;
var map__53508__$1 = (((((!((map__53508 == null))))?(((((map__53508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53508):map__53508);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53508__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53508__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__53511 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__53511__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53511,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__53511);
var G__53511__$2 = (cljs.core.truth_((function (){var fexpr__53512 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53512.cljs$core$IFn$_invoke$arity$1 ? fexpr__53512.cljs$core$IFn$_invoke$arity$1(source) : fexpr__53512.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53511__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__53511__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53511__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__53511__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__53513 = top_data;
var G__53513__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53513,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__53513);
var G__53513__$2 = (cljs.core.truth_((function (){var fexpr__53514 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53514.cljs$core$IFn$_invoke$arity$1 ? fexpr__53514.cljs$core$IFn$_invoke$arity$1(source) : fexpr__53514.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53513__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__53513__$1);
var G__53513__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53513__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__53513__$2);
var G__53513__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53513__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__53513__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53513__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__53513__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__53515 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53515,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53515,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53515,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53515,(3),null);
var G__53518 = top_data;
var G__53518__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53518,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__53518);
var G__53518__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53518__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__53518__$1);
var G__53518__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53518__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__53518__$2);
var G__53518__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53518__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__53518__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53518__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__53518__$4;
}

break;
case "execution":
var vec__53519 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53519,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53519,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53519,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53519,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__53498_SHARP_){
var or__4185__auto__ = (p1__53498_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__53524 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53524.cljs$core$IFn$_invoke$arity$1 ? fexpr__53524.cljs$core$IFn$_invoke$arity$1(p1__53498_SHARP_) : fexpr__53524.call(null,p1__53498_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__53525 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__53525__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53525,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__53525);
var G__53525__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53525__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__53525__$1);
var G__53525__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53525__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__53525__$2);
var G__53525__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53525__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__53525__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53525__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__53525__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53507__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__53529){
var map__53530 = p__53529;
var map__53530__$1 = (((((!((map__53530 == null))))?(((((map__53530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53530):map__53530);
var triage_data = map__53530__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53530__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53530__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53530__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53530__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53530__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53530__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53530__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53530__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__53532 = phase;
var G__53532__$1 = (((G__53532 instanceof cljs.core.Keyword))?G__53532.fqn:null);
switch (G__53532__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__53533 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__53534 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53535 = loc;
var G__53536 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53537_53654 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53538_53655 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53539_53656 = true;
var _STAR_print_fn_STAR__temp_val__53540_53657 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53539_53656);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53540_53657);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53527_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53527_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53538_53655);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53537_53654);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__53533,G__53534,G__53535,G__53536) : format.call(null,G__53533,G__53534,G__53535,G__53536));

break;
case "macroexpansion":
var G__53541 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__53542 = cause_type;
var G__53543 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53544 = loc;
var G__53545 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53541,G__53542,G__53543,G__53544,G__53545) : format.call(null,G__53541,G__53542,G__53543,G__53544,G__53545));

break;
case "compile-syntax-check":
var G__53546 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__53547 = cause_type;
var G__53548 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53549 = loc;
var G__53550 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53546,G__53547,G__53548,G__53549,G__53550) : format.call(null,G__53546,G__53547,G__53548,G__53549,G__53550));

break;
case "compilation":
var G__53551 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__53552 = cause_type;
var G__53553 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53554 = loc;
var G__53555 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53551,G__53552,G__53553,G__53554,G__53555) : format.call(null,G__53551,G__53552,G__53553,G__53554,G__53555));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__53556 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__53557 = symbol;
var G__53558 = loc;
var G__53559 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53560_53661 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53561_53662 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53562_53663 = true;
var _STAR_print_fn_STAR__temp_val__53563_53664 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53562_53663);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53563_53664);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53528_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53528_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53561_53662);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53560_53661);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__53556,G__53557,G__53558,G__53559) : format.call(null,G__53556,G__53557,G__53558,G__53559));
} else {
var G__53564 = "Execution error%s at %s(%s).\n%s\n";
var G__53565 = cause_type;
var G__53566 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53567 = loc;
var G__53568 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53564,G__53565,G__53566,G__53567,G__53568) : format.call(null,G__53564,G__53565,G__53566,G__53567,G__53568));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53532__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
