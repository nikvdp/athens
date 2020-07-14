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
var G__56006 = (line + (1));
var G__56007 = (1);
var G__56008 = (counter + (1));
line = G__56006;
col = G__56007;
counter = G__56008;
continue;
} else {
var G__56009 = line;
var G__56010 = (col + (1));
var G__56011 = (counter + (1));
line = G__56009;
col = G__56010;
counter = G__56011;
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
var G__56013 = cljs.core.next(chars);
var G__56014 = (n__$1 - (1));
chars = G__56013;
n__$1 = G__56014;
continue;
} else {
var G__56015 = cljs.core.next(chars);
var G__56016 = n__$1;
chars = G__56015;
n__$1 = G__56016;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__55985){
var map__55986 = p__55985;
var map__55986__$1 = (((((!((map__55986 == null))))?(((((map__55986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55986):map__55986);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55986__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55986__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55986__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55986__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__55988_56017 = cljs.core.seq(full_reasons);
var chunk__55989_56018 = null;
var count__55990_56019 = (0);
var i__55991_56020 = (0);
while(true){
if((i__55991_56020 < count__55990_56019)){
var r_56021 = chunk__55989_56018.cljs$core$IIndexed$_nth$arity$2(null,i__55991_56020);
instaparse.failure.print_reason(r_56021);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__56022 = seq__55988_56017;
var G__56023 = chunk__55989_56018;
var G__56024 = count__55990_56019;
var G__56025 = (i__55991_56020 + (1));
seq__55988_56017 = G__56022;
chunk__55989_56018 = G__56023;
count__55990_56019 = G__56024;
i__55991_56020 = G__56025;
continue;
} else {
var temp__5735__auto___56026 = cljs.core.seq(seq__55988_56017);
if(temp__5735__auto___56026){
var seq__55988_56027__$1 = temp__5735__auto___56026;
if(cljs.core.chunked_seq_QMARK_(seq__55988_56027__$1)){
var c__4609__auto___56028 = cljs.core.chunk_first(seq__55988_56027__$1);
var G__56029 = cljs.core.chunk_rest(seq__55988_56027__$1);
var G__56030 = c__4609__auto___56028;
var G__56031 = cljs.core.count(c__4609__auto___56028);
var G__56032 = (0);
seq__55988_56017 = G__56029;
chunk__55989_56018 = G__56030;
count__55990_56019 = G__56031;
i__55991_56020 = G__56032;
continue;
} else {
var r_56033 = cljs.core.first(seq__55988_56027__$1);
instaparse.failure.print_reason(r_56033);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__56034 = cljs.core.next(seq__55988_56027__$1);
var G__56035 = null;
var G__56036 = (0);
var G__56037 = (0);
seq__55988_56017 = G__56034;
chunk__55989_56018 = G__56035;
count__55990_56019 = G__56036;
i__55991_56020 = G__56037;
continue;
}
} else {
}
}
break;
}

var seq__56000 = cljs.core.seq(partial_reasons);
var chunk__56001 = null;
var count__56002 = (0);
var i__56003 = (0);
while(true){
if((i__56003 < count__56002)){
var r = chunk__56001.cljs$core$IIndexed$_nth$arity$2(null,i__56003);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__56038 = seq__56000;
var G__56039 = chunk__56001;
var G__56040 = count__56002;
var G__56041 = (i__56003 + (1));
seq__56000 = G__56038;
chunk__56001 = G__56039;
count__56002 = G__56040;
i__56003 = G__56041;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56000);
if(temp__5735__auto__){
var seq__56000__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56000__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56000__$1);
var G__56042 = cljs.core.chunk_rest(seq__56000__$1);
var G__56043 = c__4609__auto__;
var G__56044 = cljs.core.count(c__4609__auto__);
var G__56045 = (0);
seq__56000 = G__56042;
chunk__56001 = G__56043;
count__56002 = G__56044;
i__56003 = G__56045;
continue;
} else {
var r = cljs.core.first(seq__56000__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__56046 = cljs.core.next(seq__56000__$1);
var G__56047 = null;
var G__56048 = (0);
var G__56049 = (0);
seq__56000 = G__56046;
chunk__56001 = G__56047;
count__56002 = G__56048;
i__56003 = G__56049;
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
