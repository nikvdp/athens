goog.provide('instaparse.failure');
goog.require('cljs.core');
goog.require('instaparse.print');
/**
 * Takes an index into text, and determines the line and column info
 */
instaparse.failure.index__GT_line_column = (function instaparse$failure$index__GT_line_column(index,text){
var line = (1);
var col = (1);
var counter = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,counter)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.get.cljs$core$IFn$_invoke$arity$2(text,counter))){
var G__63651 = (line + (1));
var G__63652 = (1);
var G__63653 = (counter + (1));
line = G__63651;
col = G__63652;
counter = G__63653;
continue;
} else {
var G__63654 = line;
var G__63655 = (col + (1));
var G__63656 = (counter + (1));
line = G__63654;
col = G__63655;
counter = G__63656;
continue;

}
}
break;
}
});
instaparse.failure.get_line = (function instaparse$failure$get_line(n,text){
var chars = cljs.core.seq(clojure.string.replace(text,"\r\n","\n"));
var n__$1 = n;
while(true){
if(cljs.core.empty_QMARK_(chars)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n__$1,(1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\n",null], null), null)),chars));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.first(chars))){
var G__63657 = cljs.core.next(chars);
var G__63658 = (n__$1 - (1));
chars = G__63657;
n__$1 = G__63658;
continue;
} else {
var G__63659 = cljs.core.next(chars);
var G__63660 = n__$1;
chars = G__63659;
n__$1 = G__63660;
continue;

}
}
}
break;
}
});
/**
 * Creates string with caret at nth position, 1-based
 */
instaparse.failure.marker = (function instaparse$failure$marker(n){
if(cljs.core.integer_QMARK_(n)){
if((n <= (1))){
return "^";
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - (1))," "),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null)));
}
} else {
return null;
}
});
/**
 * Adds text, line, and column info to failure object.
 */
instaparse.failure.augment_failure = (function instaparse$failure$augment_failure(failure,text){
var lc = instaparse.failure.index__GT_line_column(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure),text);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([failure,lc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),instaparse.failure.get_line(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(lc),text)], null)], 0));
});
/**
 * Provides special case for printing negative lookahead reasons
 */
instaparse.failure.print_reason = (function instaparse$failure$print_reason(r){
if(cljs.core.truth_(new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r))){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NOT "], 0));

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r)], 0));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"char-range","char-range",1443391389).cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.char_range__GT_str(r)], 0));
} else {
if((r instanceof RegExp)){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.regexp__GT_str(r)], 0));
} else {
return cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0));

}
}
}
});
/**
 * Takes an augmented failure object and prints the error message
 */
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__63637){
var map__63638 = p__63637;
var map__63638__$1 = (((((!((map__63638 == null))))?(((((map__63638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63638):map__63638);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63638__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63638__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63638__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63638__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Parse error at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),":"].join('')], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.failure.marker(column)], 0));

var full_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"full","full",436801220),reason)));
var partial_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.Keyword(null,"full","full",436801220)),reason)));
var total = (cljs.core.count(full_reasons) + cljs.core.count(partial_reasons));
if((total === (0))){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),total)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected:"], 0));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected one of:"], 0));

}
}

var seq__63643_63661 = cljs.core.seq(full_reasons);
var chunk__63644_63662 = null;
var count__63645_63663 = (0);
var i__63646_63664 = (0);
while(true){
if((i__63646_63664 < count__63645_63663)){
var r_63665 = chunk__63644_63662.cljs$core$IIndexed$_nth$arity$2(null,i__63646_63664);
instaparse.failure.print_reason(r_63665);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__63666 = seq__63643_63661;
var G__63667 = chunk__63644_63662;
var G__63668 = count__63645_63663;
var G__63669 = (i__63646_63664 + (1));
seq__63643_63661 = G__63666;
chunk__63644_63662 = G__63667;
count__63645_63663 = G__63668;
i__63646_63664 = G__63669;
continue;
} else {
var temp__5735__auto___63670 = cljs.core.seq(seq__63643_63661);
if(temp__5735__auto___63670){
var seq__63643_63671__$1 = temp__5735__auto___63670;
if(cljs.core.chunked_seq_QMARK_(seq__63643_63671__$1)){
var c__4609__auto___63672 = cljs.core.chunk_first(seq__63643_63671__$1);
var G__63673 = cljs.core.chunk_rest(seq__63643_63671__$1);
var G__63674 = c__4609__auto___63672;
var G__63675 = cljs.core.count(c__4609__auto___63672);
var G__63676 = (0);
seq__63643_63661 = G__63673;
chunk__63644_63662 = G__63674;
count__63645_63663 = G__63675;
i__63646_63664 = G__63676;
continue;
} else {
var r_63677 = cljs.core.first(seq__63643_63671__$1);
instaparse.failure.print_reason(r_63677);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__63678 = cljs.core.next(seq__63643_63671__$1);
var G__63679 = null;
var G__63680 = (0);
var G__63681 = (0);
seq__63643_63661 = G__63678;
chunk__63644_63662 = G__63679;
count__63645_63663 = G__63680;
i__63646_63664 = G__63681;
continue;
}
} else {
}
}
break;
}

var seq__63647 = cljs.core.seq(partial_reasons);
var chunk__63648 = null;
var count__63649 = (0);
var i__63650 = (0);
while(true){
if((i__63650 < count__63649)){
var r = chunk__63648.cljs$core$IIndexed$_nth$arity$2(null,i__63650);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__63682 = seq__63647;
var G__63683 = chunk__63648;
var G__63684 = count__63649;
var G__63685 = (i__63650 + (1));
seq__63647 = G__63682;
chunk__63648 = G__63683;
count__63649 = G__63684;
i__63650 = G__63685;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63647);
if(temp__5735__auto__){
var seq__63647__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63647__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__63647__$1);
var G__63686 = cljs.core.chunk_rest(seq__63647__$1);
var G__63687 = c__4609__auto__;
var G__63688 = cljs.core.count(c__4609__auto__);
var G__63689 = (0);
seq__63647 = G__63686;
chunk__63648 = G__63687;
count__63649 = G__63688;
i__63650 = G__63689;
continue;
} else {
var r = cljs.core.first(seq__63647__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__63690 = cljs.core.next(seq__63647__$1);
var G__63691 = null;
var G__63692 = (0);
var G__63693 = (0);
seq__63647 = G__63690;
chunk__63648 = G__63691;
count__63649 = G__63692;
i__63650 = G__63693;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=instaparse.failure.js.map
