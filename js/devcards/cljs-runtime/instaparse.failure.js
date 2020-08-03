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
var G__54985 = (line + (1));
var G__54986 = (1);
var G__54987 = (counter + (1));
line = G__54985;
col = G__54986;
counter = G__54987;
continue;
} else {
var G__54988 = line;
var G__54989 = (col + (1));
var G__54990 = (counter + (1));
line = G__54988;
col = G__54989;
counter = G__54990;
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
var G__54991 = cljs.core.next(chars);
var G__54992 = (n__$1 - (1));
chars = G__54991;
n__$1 = G__54992;
continue;
} else {
var G__54993 = cljs.core.next(chars);
var G__54994 = n__$1;
chars = G__54993;
n__$1 = G__54994;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__54973){
var map__54974 = p__54973;
var map__54974__$1 = (((((!((map__54974 == null))))?(((((map__54974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54974):map__54974);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54974__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54974__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54974__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54974__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__54977_54997 = cljs.core.seq(full_reasons);
var chunk__54978_54998 = null;
var count__54979_54999 = (0);
var i__54980_55000 = (0);
while(true){
if((i__54980_55000 < count__54979_54999)){
var r_55001 = chunk__54978_54998.cljs$core$IIndexed$_nth$arity$2(null,i__54980_55000);
instaparse.failure.print_reason(r_55001);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55002 = seq__54977_54997;
var G__55003 = chunk__54978_54998;
var G__55004 = count__54979_54999;
var G__55005 = (i__54980_55000 + (1));
seq__54977_54997 = G__55002;
chunk__54978_54998 = G__55003;
count__54979_54999 = G__55004;
i__54980_55000 = G__55005;
continue;
} else {
var temp__5735__auto___55006 = cljs.core.seq(seq__54977_54997);
if(temp__5735__auto___55006){
var seq__54977_55007__$1 = temp__5735__auto___55006;
if(cljs.core.chunked_seq_QMARK_(seq__54977_55007__$1)){
var c__4556__auto___55008 = cljs.core.chunk_first(seq__54977_55007__$1);
var G__55009 = cljs.core.chunk_rest(seq__54977_55007__$1);
var G__55010 = c__4556__auto___55008;
var G__55011 = cljs.core.count(c__4556__auto___55008);
var G__55012 = (0);
seq__54977_54997 = G__55009;
chunk__54978_54998 = G__55010;
count__54979_54999 = G__55011;
i__54980_55000 = G__55012;
continue;
} else {
var r_55013 = cljs.core.first(seq__54977_55007__$1);
instaparse.failure.print_reason(r_55013);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55014 = cljs.core.next(seq__54977_55007__$1);
var G__55015 = null;
var G__55016 = (0);
var G__55017 = (0);
seq__54977_54997 = G__55014;
chunk__54978_54998 = G__55015;
count__54979_54999 = G__55016;
i__54980_55000 = G__55017;
continue;
}
} else {
}
}
break;
}

var seq__54981 = cljs.core.seq(partial_reasons);
var chunk__54982 = null;
var count__54983 = (0);
var i__54984 = (0);
while(true){
if((i__54984 < count__54983)){
var r = chunk__54982.cljs$core$IIndexed$_nth$arity$2(null,i__54984);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55026 = seq__54981;
var G__55027 = chunk__54982;
var G__55028 = count__54983;
var G__55029 = (i__54984 + (1));
seq__54981 = G__55026;
chunk__54982 = G__55027;
count__54983 = G__55028;
i__54984 = G__55029;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54981);
if(temp__5735__auto__){
var seq__54981__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54981__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__54981__$1);
var G__55030 = cljs.core.chunk_rest(seq__54981__$1);
var G__55031 = c__4556__auto__;
var G__55032 = cljs.core.count(c__4556__auto__);
var G__55033 = (0);
seq__54981 = G__55030;
chunk__54982 = G__55031;
count__54983 = G__55032;
i__54984 = G__55033;
continue;
} else {
var r = cljs.core.first(seq__54981__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55034 = cljs.core.next(seq__54981__$1);
var G__55035 = null;
var G__55036 = (0);
var G__55037 = (0);
seq__54981 = G__55034;
chunk__54982 = G__55035;
count__54983 = G__55036;
i__54984 = G__55037;
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
