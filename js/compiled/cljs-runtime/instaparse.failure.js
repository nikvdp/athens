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
var G__63557 = (line + (1));
var G__63558 = (1);
var G__63559 = (counter + (1));
line = G__63557;
col = G__63558;
counter = G__63559;
continue;
} else {
var G__63560 = line;
var G__63561 = (col + (1));
var G__63562 = (counter + (1));
line = G__63560;
col = G__63561;
counter = G__63562;
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
var G__63563 = cljs.core.next(chars);
var G__63564 = (n__$1 - (1));
chars = G__63563;
n__$1 = G__63564;
continue;
} else {
var G__63565 = cljs.core.next(chars);
var G__63566 = n__$1;
chars = G__63565;
n__$1 = G__63566;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__63543){
var map__63544 = p__63543;
var map__63544__$1 = (((((!((map__63544 == null))))?(((((map__63544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63544):map__63544);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63544__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63544__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63544__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63544__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__63546_63567 = cljs.core.seq(full_reasons);
var chunk__63547_63568 = null;
var count__63548_63569 = (0);
var i__63549_63570 = (0);
while(true){
if((i__63549_63570 < count__63548_63569)){
var r_63571 = chunk__63547_63568.cljs$core$IIndexed$_nth$arity$2(null,i__63549_63570);
instaparse.failure.print_reason(r_63571);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__63572 = seq__63546_63567;
var G__63573 = chunk__63547_63568;
var G__63574 = count__63548_63569;
var G__63575 = (i__63549_63570 + (1));
seq__63546_63567 = G__63572;
chunk__63547_63568 = G__63573;
count__63548_63569 = G__63574;
i__63549_63570 = G__63575;
continue;
} else {
var temp__5735__auto___63576 = cljs.core.seq(seq__63546_63567);
if(temp__5735__auto___63576){
var seq__63546_63577__$1 = temp__5735__auto___63576;
if(cljs.core.chunked_seq_QMARK_(seq__63546_63577__$1)){
var c__4609__auto___63578 = cljs.core.chunk_first(seq__63546_63577__$1);
var G__63579 = cljs.core.chunk_rest(seq__63546_63577__$1);
var G__63580 = c__4609__auto___63578;
var G__63581 = cljs.core.count(c__4609__auto___63578);
var G__63582 = (0);
seq__63546_63567 = G__63579;
chunk__63547_63568 = G__63580;
count__63548_63569 = G__63581;
i__63549_63570 = G__63582;
continue;
} else {
var r_63583 = cljs.core.first(seq__63546_63577__$1);
instaparse.failure.print_reason(r_63583);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__63584 = cljs.core.next(seq__63546_63577__$1);
var G__63585 = null;
var G__63586 = (0);
var G__63587 = (0);
seq__63546_63567 = G__63584;
chunk__63547_63568 = G__63585;
count__63548_63569 = G__63586;
i__63549_63570 = G__63587;
continue;
}
} else {
}
}
break;
}

var seq__63553 = cljs.core.seq(partial_reasons);
var chunk__63554 = null;
var count__63555 = (0);
var i__63556 = (0);
while(true){
if((i__63556 < count__63555)){
var r = chunk__63554.cljs$core$IIndexed$_nth$arity$2(null,i__63556);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__63588 = seq__63553;
var G__63589 = chunk__63554;
var G__63590 = count__63555;
var G__63591 = (i__63556 + (1));
seq__63553 = G__63588;
chunk__63554 = G__63589;
count__63555 = G__63590;
i__63556 = G__63591;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63553);
if(temp__5735__auto__){
var seq__63553__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63553__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__63553__$1);
var G__63592 = cljs.core.chunk_rest(seq__63553__$1);
var G__63593 = c__4609__auto__;
var G__63594 = cljs.core.count(c__4609__auto__);
var G__63595 = (0);
seq__63553 = G__63592;
chunk__63554 = G__63593;
count__63555 = G__63594;
i__63556 = G__63595;
continue;
} else {
var r = cljs.core.first(seq__63553__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__63596 = cljs.core.next(seq__63553__$1);
var G__63597 = null;
var G__63598 = (0);
var G__63599 = (0);
seq__63553 = G__63596;
chunk__63554 = G__63597;
count__63555 = G__63598;
i__63556 = G__63599;
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
