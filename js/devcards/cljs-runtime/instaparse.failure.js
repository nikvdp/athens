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
var G__55855 = (line + (1));
var G__55856 = (1);
var G__55857 = (counter + (1));
line = G__55855;
col = G__55856;
counter = G__55857;
continue;
} else {
var G__55860 = line;
var G__55861 = (col + (1));
var G__55862 = (counter + (1));
line = G__55860;
col = G__55861;
counter = G__55862;
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
var G__55865 = cljs.core.next(chars);
var G__55866 = (n__$1 - (1));
chars = G__55865;
n__$1 = G__55866;
continue;
} else {
var G__55868 = cljs.core.next(chars);
var G__55869 = n__$1;
chars = G__55868;
n__$1 = G__55869;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__55843){
var map__55844 = p__55843;
var map__55844__$1 = (((((!((map__55844 == null))))?(((((map__55844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55844):map__55844);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55844__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55844__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55844__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55844__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__55846_55870 = cljs.core.seq(full_reasons);
var chunk__55847_55871 = null;
var count__55848_55872 = (0);
var i__55849_55873 = (0);
while(true){
if((i__55849_55873 < count__55848_55872)){
var r_55874 = chunk__55847_55871.cljs$core$IIndexed$_nth$arity$2(null,i__55849_55873);
instaparse.failure.print_reason(r_55874);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55875 = seq__55846_55870;
var G__55876 = chunk__55847_55871;
var G__55877 = count__55848_55872;
var G__55878 = (i__55849_55873 + (1));
seq__55846_55870 = G__55875;
chunk__55847_55871 = G__55876;
count__55848_55872 = G__55877;
i__55849_55873 = G__55878;
continue;
} else {
var temp__5735__auto___55879 = cljs.core.seq(seq__55846_55870);
if(temp__5735__auto___55879){
var seq__55846_55880__$1 = temp__5735__auto___55879;
if(cljs.core.chunked_seq_QMARK_(seq__55846_55880__$1)){
var c__4609__auto___55881 = cljs.core.chunk_first(seq__55846_55880__$1);
var G__55882 = cljs.core.chunk_rest(seq__55846_55880__$1);
var G__55883 = c__4609__auto___55881;
var G__55884 = cljs.core.count(c__4609__auto___55881);
var G__55885 = (0);
seq__55846_55870 = G__55882;
chunk__55847_55871 = G__55883;
count__55848_55872 = G__55884;
i__55849_55873 = G__55885;
continue;
} else {
var r_55886 = cljs.core.first(seq__55846_55880__$1);
instaparse.failure.print_reason(r_55886);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55887 = cljs.core.next(seq__55846_55880__$1);
var G__55888 = null;
var G__55889 = (0);
var G__55890 = (0);
seq__55846_55870 = G__55887;
chunk__55847_55871 = G__55888;
count__55848_55872 = G__55889;
i__55849_55873 = G__55890;
continue;
}
} else {
}
}
break;
}

var seq__55850 = cljs.core.seq(partial_reasons);
var chunk__55851 = null;
var count__55852 = (0);
var i__55853 = (0);
while(true){
if((i__55853 < count__55852)){
var r = chunk__55851.cljs$core$IIndexed$_nth$arity$2(null,i__55853);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55891 = seq__55850;
var G__55892 = chunk__55851;
var G__55893 = count__55852;
var G__55894 = (i__55853 + (1));
seq__55850 = G__55891;
chunk__55851 = G__55892;
count__55852 = G__55893;
i__55853 = G__55894;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55850);
if(temp__5735__auto__){
var seq__55850__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55850__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__55850__$1);
var G__55895 = cljs.core.chunk_rest(seq__55850__$1);
var G__55896 = c__4609__auto__;
var G__55897 = cljs.core.count(c__4609__auto__);
var G__55898 = (0);
seq__55850 = G__55895;
chunk__55851 = G__55896;
count__55852 = G__55897;
i__55853 = G__55898;
continue;
} else {
var r = cljs.core.first(seq__55850__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55899 = cljs.core.next(seq__55850__$1);
var G__55900 = null;
var G__55901 = (0);
var G__55902 = (0);
seq__55850 = G__55899;
chunk__55851 = G__55900;
count__55852 = G__55901;
i__55853 = G__55902;
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
