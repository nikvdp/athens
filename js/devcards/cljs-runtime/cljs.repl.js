goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45498){
var map__45499 = p__45498;
var map__45499__$1 = (((((!((map__45499 == null))))?(((((map__45499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45499):map__45499);
var m = map__45499__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45499__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45499__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__45503_45616 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45504_45617 = null;
var count__45505_45618 = (0);
var i__45506_45619 = (0);
while(true){
if((i__45506_45619 < count__45505_45618)){
var f_45620 = chunk__45504_45617.cljs$core$IIndexed$_nth$arity$2(null,i__45506_45619);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45620], 0));


var G__45621 = seq__45503_45616;
var G__45622 = chunk__45504_45617;
var G__45623 = count__45505_45618;
var G__45624 = (i__45506_45619 + (1));
seq__45503_45616 = G__45621;
chunk__45504_45617 = G__45622;
count__45505_45618 = G__45623;
i__45506_45619 = G__45624;
continue;
} else {
var temp__5735__auto___45625 = cljs.core.seq(seq__45503_45616);
if(temp__5735__auto___45625){
var seq__45503_45626__$1 = temp__5735__auto___45625;
if(cljs.core.chunked_seq_QMARK_(seq__45503_45626__$1)){
var c__4609__auto___45627 = cljs.core.chunk_first(seq__45503_45626__$1);
var G__45628 = cljs.core.chunk_rest(seq__45503_45626__$1);
var G__45629 = c__4609__auto___45627;
var G__45630 = cljs.core.count(c__4609__auto___45627);
var G__45631 = (0);
seq__45503_45616 = G__45628;
chunk__45504_45617 = G__45629;
count__45505_45618 = G__45630;
i__45506_45619 = G__45631;
continue;
} else {
var f_45632 = cljs.core.first(seq__45503_45626__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45632], 0));


var G__45633 = cljs.core.next(seq__45503_45626__$1);
var G__45634 = null;
var G__45635 = (0);
var G__45636 = (0);
seq__45503_45616 = G__45633;
chunk__45504_45617 = G__45634;
count__45505_45618 = G__45635;
i__45506_45619 = G__45636;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45637 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45637], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45637)))?cljs.core.second(arglists_45637):arglists_45637)], 0));
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
var seq__45507_45638 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45508_45639 = null;
var count__45509_45640 = (0);
var i__45510_45641 = (0);
while(true){
if((i__45510_45641 < count__45509_45640)){
var vec__45522_45642 = chunk__45508_45639.cljs$core$IIndexed$_nth$arity$2(null,i__45510_45641);
var name_45643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45522_45642,(0),null);
var map__45525_45644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45522_45642,(1),null);
var map__45525_45645__$1 = (((((!((map__45525_45644 == null))))?(((((map__45525_45644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45525_45644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45525_45644):map__45525_45644);
var doc_45646 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45525_45645__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45647 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45525_45645__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45643], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45647], 0));

if(cljs.core.truth_(doc_45646)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45646], 0));
} else {
}


var G__45648 = seq__45507_45638;
var G__45649 = chunk__45508_45639;
var G__45650 = count__45509_45640;
var G__45651 = (i__45510_45641 + (1));
seq__45507_45638 = G__45648;
chunk__45508_45639 = G__45649;
count__45509_45640 = G__45650;
i__45510_45641 = G__45651;
continue;
} else {
var temp__5735__auto___45652 = cljs.core.seq(seq__45507_45638);
if(temp__5735__auto___45652){
var seq__45507_45653__$1 = temp__5735__auto___45652;
if(cljs.core.chunked_seq_QMARK_(seq__45507_45653__$1)){
var c__4609__auto___45654 = cljs.core.chunk_first(seq__45507_45653__$1);
var G__45655 = cljs.core.chunk_rest(seq__45507_45653__$1);
var G__45656 = c__4609__auto___45654;
var G__45657 = cljs.core.count(c__4609__auto___45654);
var G__45658 = (0);
seq__45507_45638 = G__45655;
chunk__45508_45639 = G__45656;
count__45509_45640 = G__45657;
i__45510_45641 = G__45658;
continue;
} else {
var vec__45528_45659 = cljs.core.first(seq__45507_45653__$1);
var name_45660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45528_45659,(0),null);
var map__45531_45661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45528_45659,(1),null);
var map__45531_45662__$1 = (((((!((map__45531_45661 == null))))?(((((map__45531_45661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45531_45661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45531_45661):map__45531_45661);
var doc_45663 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45531_45662__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45531_45662__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45660], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45664], 0));

if(cljs.core.truth_(doc_45663)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45663], 0));
} else {
}


var G__45665 = cljs.core.next(seq__45507_45653__$1);
var G__45666 = null;
var G__45667 = (0);
var G__45668 = (0);
seq__45507_45638 = G__45665;
chunk__45508_45639 = G__45666;
count__45509_45640 = G__45667;
i__45510_45641 = G__45668;
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

var seq__45533 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45534 = null;
var count__45535 = (0);
var i__45536 = (0);
while(true){
if((i__45536 < count__45535)){
var role = chunk__45534.cljs$core$IIndexed$_nth$arity$2(null,i__45536);
var temp__5735__auto___45669__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45669__$1)){
var spec_45670 = temp__5735__auto___45669__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45670)], 0));
} else {
}


var G__45671 = seq__45533;
var G__45672 = chunk__45534;
var G__45673 = count__45535;
var G__45674 = (i__45536 + (1));
seq__45533 = G__45671;
chunk__45534 = G__45672;
count__45535 = G__45673;
i__45536 = G__45674;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__45533);
if(temp__5735__auto____$1){
var seq__45533__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__45533__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45533__$1);
var G__45678 = cljs.core.chunk_rest(seq__45533__$1);
var G__45679 = c__4609__auto__;
var G__45680 = cljs.core.count(c__4609__auto__);
var G__45681 = (0);
seq__45533 = G__45678;
chunk__45534 = G__45679;
count__45535 = G__45680;
i__45536 = G__45681;
continue;
} else {
var role = cljs.core.first(seq__45533__$1);
var temp__5735__auto___45682__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45682__$2)){
var spec_45683 = temp__5735__auto___45682__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45683)], 0));
} else {
}


var G__45684 = cljs.core.next(seq__45533__$1);
var G__45685 = null;
var G__45686 = (0);
var G__45687 = (0);
seq__45533 = G__45684;
chunk__45534 = G__45685;
count__45535 = G__45686;
i__45536 = G__45687;
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
var G__45691 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45692 = cljs.core.ex_cause(t);
via = G__45691;
t = G__45692;
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
var map__45545 = datafied_throwable;
var map__45545__$1 = (((((!((map__45545 == null))))?(((((map__45545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45545):map__45545);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45545__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45545__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45545__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__45546 = cljs.core.last(via);
var map__45546__$1 = (((((!((map__45546 == null))))?(((((map__45546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45546):map__45546);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45546__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45546__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45546__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__45547 = data;
var map__45547__$1 = (((((!((map__45547 == null))))?(((((map__45547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45547):map__45547);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45547__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45547__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45547__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__45548 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__45548__$1 = (((((!((map__45548 == null))))?(((((map__45548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45548):map__45548);
var top_data = map__45548__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45548__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45554 = phase;
var G__45554__$1 = (((G__45554 instanceof cljs.core.Keyword))?G__45554.fqn:null);
switch (G__45554__$1) {
case "read-source":
var map__45557 = data;
var map__45557__$1 = (((((!((map__45557 == null))))?(((((map__45557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45557):map__45557);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45557__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45557__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__45559 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__45559__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45559,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45559);
var G__45559__$2 = (cljs.core.truth_((function (){var fexpr__45560 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45560.cljs$core$IFn$_invoke$arity$1 ? fexpr__45560.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45560.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45559__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45559__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45559__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45559__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__45561 = top_data;
var G__45561__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45561,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45561);
var G__45561__$2 = (cljs.core.truth_((function (){var fexpr__45562 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45562.cljs$core$IFn$_invoke$arity$1 ? fexpr__45562.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45562.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45561__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45561__$1);
var G__45561__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45561__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45561__$2);
var G__45561__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45561__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45561__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45561__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45561__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__45563 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45563,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45563,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45563,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45563,(3),null);
var G__45566 = top_data;
var G__45566__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45566,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__45566);
var G__45566__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45566__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__45566__$1);
var G__45566__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45566__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__45566__$2);
var G__45566__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45566__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45566__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45566__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45566__$4;
}

break;
case "execution":
var vec__45567 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45567,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45567,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45567,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45567,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45541_SHARP_){
var or__4185__auto__ = (p1__45541_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__45571 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45571.cljs$core$IFn$_invoke$arity$1 ? fexpr__45571.cljs$core$IFn$_invoke$arity$1(p1__45541_SHARP_) : fexpr__45571.call(null,p1__45541_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__45572 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__45572__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45572,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__45572);
var G__45572__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45572__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45572__$1);
var G__45572__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45572__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__45572__$2);
var G__45572__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45572__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__45572__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45572__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45572__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45554__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__45575){
var map__45576 = p__45575;
var map__45576__$1 = (((((!((map__45576 == null))))?(((((map__45576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45576):map__45576);
var triage_data = map__45576__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45576__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45576__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45576__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45576__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45576__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45576__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45576__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45576__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__45578 = phase;
var G__45578__$1 = (((G__45578 instanceof cljs.core.Keyword))?G__45578.fqn:null);
switch (G__45578__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__45579 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__45580 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45581 = loc;
var G__45582 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45583_45698 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45584_45699 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45585_45700 = true;
var _STAR_print_fn_STAR__temp_val__45586_45701 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45585_45700);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45586_45701);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45573_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45573_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45584_45699);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45583_45698);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45579,G__45580,G__45581,G__45582) : format.call(null,G__45579,G__45580,G__45581,G__45582));

break;
case "macroexpansion":
var G__45587 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__45588 = cause_type;
var G__45589 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45590 = loc;
var G__45591 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45587,G__45588,G__45589,G__45590,G__45591) : format.call(null,G__45587,G__45588,G__45589,G__45590,G__45591));

break;
case "compile-syntax-check":
var G__45592 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45593 = cause_type;
var G__45594 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45595 = loc;
var G__45596 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45592,G__45593,G__45594,G__45595,G__45596) : format.call(null,G__45592,G__45593,G__45594,G__45595,G__45596));

break;
case "compilation":
var G__45597 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45598 = cause_type;
var G__45599 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45600 = loc;
var G__45601 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45597,G__45598,G__45599,G__45600,G__45601) : format.call(null,G__45597,G__45598,G__45599,G__45600,G__45601));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45602 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45603 = symbol;
var G__45604 = loc;
var G__45605 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45606_45705 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45607_45706 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45608_45707 = true;
var _STAR_print_fn_STAR__temp_val__45609_45708 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45608_45707);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45609_45708);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45574_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45574_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45607_45706);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45606_45705);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45602,G__45603,G__45604,G__45605) : format.call(null,G__45602,G__45603,G__45604,G__45605));
} else {
var G__45610 = "Execution error%s at %s(%s).\n%s\n";
var G__45611 = cause_type;
var G__45612 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45613 = loc;
var G__45614 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45610,G__45611,G__45612,G__45613,G__45614) : format.call(null,G__45610,G__45611,G__45612,G__45613,G__45614));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45578__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
