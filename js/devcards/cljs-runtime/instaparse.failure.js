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
var G__55856 = (line + (1));
var G__55857 = (1);
var G__55858 = (counter + (1));
line = G__55856;
col = G__55857;
counter = G__55858;
continue;
} else {
var G__55859 = line;
var G__55860 = (col + (1));
var G__55861 = (counter + (1));
line = G__55859;
col = G__55860;
counter = G__55861;
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
var G__55862 = cljs.core.next(chars);
var G__55863 = (n__$1 - (1));
chars = G__55862;
n__$1 = G__55863;
continue;
} else {
var G__55864 = cljs.core.next(chars);
var G__55865 = n__$1;
chars = G__55864;
n__$1 = G__55865;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__55845){
var map__55846 = p__55845;
var map__55846__$1 = (((((!((map__55846 == null))))?(((((map__55846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55846):map__55846);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55846__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55846__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55846__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55846__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__55848_55866 = cljs.core.seq(full_reasons);
var chunk__55849_55867 = null;
var count__55850_55868 = (0);
var i__55851_55869 = (0);
while(true){
if((i__55851_55869 < count__55850_55868)){
var r_55870 = chunk__55849_55867.cljs$core$IIndexed$_nth$arity$2(null,i__55851_55869);
instaparse.failure.print_reason(r_55870);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55871 = seq__55848_55866;
var G__55872 = chunk__55849_55867;
var G__55873 = count__55850_55868;
var G__55874 = (i__55851_55869 + (1));
seq__55848_55866 = G__55871;
chunk__55849_55867 = G__55872;
count__55850_55868 = G__55873;
i__55851_55869 = G__55874;
continue;
} else {
var temp__5735__auto___55875 = cljs.core.seq(seq__55848_55866);
if(temp__5735__auto___55875){
var seq__55848_55876__$1 = temp__5735__auto___55875;
if(cljs.core.chunked_seq_QMARK_(seq__55848_55876__$1)){
var c__4609__auto___55877 = cljs.core.chunk_first(seq__55848_55876__$1);
var G__55878 = cljs.core.chunk_rest(seq__55848_55876__$1);
var G__55879 = c__4609__auto___55877;
var G__55880 = cljs.core.count(c__4609__auto___55877);
var G__55881 = (0);
seq__55848_55866 = G__55878;
chunk__55849_55867 = G__55879;
count__55850_55868 = G__55880;
i__55851_55869 = G__55881;
continue;
} else {
var r_55882 = cljs.core.first(seq__55848_55876__$1);
instaparse.failure.print_reason(r_55882);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55883 = cljs.core.next(seq__55848_55876__$1);
var G__55884 = null;
var G__55885 = (0);
var G__55886 = (0);
seq__55848_55866 = G__55883;
chunk__55849_55867 = G__55884;
count__55850_55868 = G__55885;
i__55851_55869 = G__55886;
continue;
}
} else {
}
}
break;
}

var seq__55852 = cljs.core.seq(partial_reasons);
var chunk__55853 = null;
var count__55854 = (0);
var i__55855 = (0);
while(true){
if((i__55855 < count__55854)){
var r = chunk__55853.cljs$core$IIndexed$_nth$arity$2(null,i__55855);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55887 = seq__55852;
var G__55888 = chunk__55853;
var G__55889 = count__55854;
var G__55890 = (i__55855 + (1));
seq__55852 = G__55887;
chunk__55853 = G__55888;
count__55854 = G__55889;
i__55855 = G__55890;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55852);
if(temp__5735__auto__){
var seq__55852__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55852__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__55852__$1);
var G__55891 = cljs.core.chunk_rest(seq__55852__$1);
var G__55892 = c__4609__auto__;
var G__55893 = cljs.core.count(c__4609__auto__);
var G__55894 = (0);
seq__55852 = G__55891;
chunk__55853 = G__55892;
count__55854 = G__55893;
i__55855 = G__55894;
continue;
} else {
var r = cljs.core.first(seq__55852__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55895 = cljs.core.next(seq__55852__$1);
var G__55896 = null;
var G__55897 = (0);
var G__55898 = (0);
seq__55852 = G__55895;
chunk__55853 = G__55896;
count__55854 = G__55897;
i__55855 = G__55898;
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
