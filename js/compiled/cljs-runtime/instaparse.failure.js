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
var G__63612 = (line + (1));
var G__63613 = (1);
var G__63614 = (counter + (1));
line = G__63612;
col = G__63613;
counter = G__63614;
continue;
} else {
var G__63616 = line;
var G__63617 = (col + (1));
var G__63618 = (counter + (1));
line = G__63616;
col = G__63617;
counter = G__63618;
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
var G__63620 = cljs.core.next(chars);
var G__63621 = (n__$1 - (1));
chars = G__63620;
n__$1 = G__63621;
continue;
} else {
var G__63622 = cljs.core.next(chars);
var G__63623 = n__$1;
chars = G__63622;
n__$1 = G__63623;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__63592){
var map__63593 = p__63592;
var map__63593__$1 = (((((!((map__63593 == null))))?(((((map__63593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63593):map__63593);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63593__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63593__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63593__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63593__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__63599_63624 = cljs.core.seq(full_reasons);
var chunk__63600_63625 = null;
var count__63601_63626 = (0);
var i__63602_63627 = (0);
while(true){
if((i__63602_63627 < count__63601_63626)){
var r_63628 = chunk__63600_63625.cljs$core$IIndexed$_nth$arity$2(null,i__63602_63627);
instaparse.failure.print_reason(r_63628);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__63629 = seq__63599_63624;
var G__63630 = chunk__63600_63625;
var G__63631 = count__63601_63626;
var G__63632 = (i__63602_63627 + (1));
seq__63599_63624 = G__63629;
chunk__63600_63625 = G__63630;
count__63601_63626 = G__63631;
i__63602_63627 = G__63632;
continue;
} else {
var temp__5735__auto___63633 = cljs.core.seq(seq__63599_63624);
if(temp__5735__auto___63633){
var seq__63599_63634__$1 = temp__5735__auto___63633;
if(cljs.core.chunked_seq_QMARK_(seq__63599_63634__$1)){
var c__4609__auto___63635 = cljs.core.chunk_first(seq__63599_63634__$1);
var G__63636 = cljs.core.chunk_rest(seq__63599_63634__$1);
var G__63637 = c__4609__auto___63635;
var G__63638 = cljs.core.count(c__4609__auto___63635);
var G__63639 = (0);
seq__63599_63624 = G__63636;
chunk__63600_63625 = G__63637;
count__63601_63626 = G__63638;
i__63602_63627 = G__63639;
continue;
} else {
var r_63640 = cljs.core.first(seq__63599_63634__$1);
instaparse.failure.print_reason(r_63640);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__63641 = cljs.core.next(seq__63599_63634__$1);
var G__63642 = null;
var G__63643 = (0);
var G__63644 = (0);
seq__63599_63624 = G__63641;
chunk__63600_63625 = G__63642;
count__63601_63626 = G__63643;
i__63602_63627 = G__63644;
continue;
}
} else {
}
}
break;
}

var seq__63607 = cljs.core.seq(partial_reasons);
var chunk__63608 = null;
var count__63609 = (0);
var i__63610 = (0);
while(true){
if((i__63610 < count__63609)){
var r = chunk__63608.cljs$core$IIndexed$_nth$arity$2(null,i__63610);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__63645 = seq__63607;
var G__63646 = chunk__63608;
var G__63647 = count__63609;
var G__63648 = (i__63610 + (1));
seq__63607 = G__63645;
chunk__63608 = G__63646;
count__63609 = G__63647;
i__63610 = G__63648;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63607);
if(temp__5735__auto__){
var seq__63607__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63607__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__63607__$1);
var G__63649 = cljs.core.chunk_rest(seq__63607__$1);
var G__63650 = c__4609__auto__;
var G__63651 = cljs.core.count(c__4609__auto__);
var G__63652 = (0);
seq__63607 = G__63649;
chunk__63608 = G__63650;
count__63609 = G__63651;
i__63610 = G__63652;
continue;
} else {
var r = cljs.core.first(seq__63607__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__63653 = cljs.core.next(seq__63607__$1);
var G__63654 = null;
var G__63655 = (0);
var G__63656 = (0);
seq__63607 = G__63653;
chunk__63608 = G__63654;
count__63609 = G__63655;
i__63610 = G__63656;
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
