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
var G__55888 = (line + (1));
var G__55889 = (1);
var G__55890 = (counter + (1));
line = G__55888;
col = G__55889;
counter = G__55890;
continue;
} else {
var G__55891 = line;
var G__55892 = (col + (1));
var G__55893 = (counter + (1));
line = G__55891;
col = G__55892;
counter = G__55893;
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
var G__55894 = cljs.core.next(chars);
var G__55895 = (n__$1 - (1));
chars = G__55894;
n__$1 = G__55895;
continue;
} else {
var G__55896 = cljs.core.next(chars);
var G__55897 = n__$1;
chars = G__55896;
n__$1 = G__55897;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__55877){
var map__55878 = p__55877;
var map__55878__$1 = (((((!((map__55878 == null))))?(((((map__55878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55878):map__55878);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55878__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55878__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55878__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55878__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__55880_55898 = cljs.core.seq(full_reasons);
var chunk__55881_55899 = null;
var count__55882_55900 = (0);
var i__55883_55901 = (0);
while(true){
if((i__55883_55901 < count__55882_55900)){
var r_55902 = chunk__55881_55899.cljs$core$IIndexed$_nth$arity$2(null,i__55883_55901);
instaparse.failure.print_reason(r_55902);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55903 = seq__55880_55898;
var G__55904 = chunk__55881_55899;
var G__55905 = count__55882_55900;
var G__55906 = (i__55883_55901 + (1));
seq__55880_55898 = G__55903;
chunk__55881_55899 = G__55904;
count__55882_55900 = G__55905;
i__55883_55901 = G__55906;
continue;
} else {
var temp__5735__auto___55907 = cljs.core.seq(seq__55880_55898);
if(temp__5735__auto___55907){
var seq__55880_55908__$1 = temp__5735__auto___55907;
if(cljs.core.chunked_seq_QMARK_(seq__55880_55908__$1)){
var c__4609__auto___55909 = cljs.core.chunk_first(seq__55880_55908__$1);
var G__55910 = cljs.core.chunk_rest(seq__55880_55908__$1);
var G__55911 = c__4609__auto___55909;
var G__55912 = cljs.core.count(c__4609__auto___55909);
var G__55913 = (0);
seq__55880_55898 = G__55910;
chunk__55881_55899 = G__55911;
count__55882_55900 = G__55912;
i__55883_55901 = G__55913;
continue;
} else {
var r_55914 = cljs.core.first(seq__55880_55908__$1);
instaparse.failure.print_reason(r_55914);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55915 = cljs.core.next(seq__55880_55908__$1);
var G__55916 = null;
var G__55917 = (0);
var G__55918 = (0);
seq__55880_55898 = G__55915;
chunk__55881_55899 = G__55916;
count__55882_55900 = G__55917;
i__55883_55901 = G__55918;
continue;
}
} else {
}
}
break;
}

var seq__55884 = cljs.core.seq(partial_reasons);
var chunk__55885 = null;
var count__55886 = (0);
var i__55887 = (0);
while(true){
if((i__55887 < count__55886)){
var r = chunk__55885.cljs$core$IIndexed$_nth$arity$2(null,i__55887);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55919 = seq__55884;
var G__55920 = chunk__55885;
var G__55921 = count__55886;
var G__55922 = (i__55887 + (1));
seq__55884 = G__55919;
chunk__55885 = G__55920;
count__55886 = G__55921;
i__55887 = G__55922;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55884);
if(temp__5735__auto__){
var seq__55884__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55884__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__55884__$1);
var G__55923 = cljs.core.chunk_rest(seq__55884__$1);
var G__55924 = c__4609__auto__;
var G__55925 = cljs.core.count(c__4609__auto__);
var G__55926 = (0);
seq__55884 = G__55923;
chunk__55885 = G__55924;
count__55886 = G__55925;
i__55887 = G__55926;
continue;
} else {
var r = cljs.core.first(seq__55884__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55927 = cljs.core.next(seq__55884__$1);
var G__55928 = null;
var G__55929 = (0);
var G__55930 = (0);
seq__55884 = G__55927;
chunk__55885 = G__55928;
count__55886 = G__55929;
i__55887 = G__55930;
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
