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
var G__56255 = (line + (1));
var G__56256 = (1);
var G__56257 = (counter + (1));
line = G__56255;
col = G__56256;
counter = G__56257;
continue;
} else {
var G__56258 = line;
var G__56259 = (col + (1));
var G__56260 = (counter + (1));
line = G__56258;
col = G__56259;
counter = G__56260;
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
var G__56261 = cljs.core.next(chars);
var G__56262 = (n__$1 - (1));
chars = G__56261;
n__$1 = G__56262;
continue;
} else {
var G__56263 = cljs.core.next(chars);
var G__56264 = n__$1;
chars = G__56263;
n__$1 = G__56264;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__56241){
var map__56242 = p__56241;
var map__56242__$1 = (((((!((map__56242 == null))))?(((((map__56242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56242):map__56242);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56242__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56242__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56242__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56242__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__56244_56265 = cljs.core.seq(full_reasons);
var chunk__56245_56266 = null;
var count__56246_56267 = (0);
var i__56247_56268 = (0);
while(true){
if((i__56247_56268 < count__56246_56267)){
var r_56269 = chunk__56245_56266.cljs$core$IIndexed$_nth$arity$2(null,i__56247_56268);
instaparse.failure.print_reason(r_56269);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__56270 = seq__56244_56265;
var G__56271 = chunk__56245_56266;
var G__56272 = count__56246_56267;
var G__56273 = (i__56247_56268 + (1));
seq__56244_56265 = G__56270;
chunk__56245_56266 = G__56271;
count__56246_56267 = G__56272;
i__56247_56268 = G__56273;
continue;
} else {
var temp__5735__auto___56274 = cljs.core.seq(seq__56244_56265);
if(temp__5735__auto___56274){
var seq__56244_56275__$1 = temp__5735__auto___56274;
if(cljs.core.chunked_seq_QMARK_(seq__56244_56275__$1)){
var c__4609__auto___56276 = cljs.core.chunk_first(seq__56244_56275__$1);
var G__56277 = cljs.core.chunk_rest(seq__56244_56275__$1);
var G__56278 = c__4609__auto___56276;
var G__56279 = cljs.core.count(c__4609__auto___56276);
var G__56280 = (0);
seq__56244_56265 = G__56277;
chunk__56245_56266 = G__56278;
count__56246_56267 = G__56279;
i__56247_56268 = G__56280;
continue;
} else {
var r_56281 = cljs.core.first(seq__56244_56275__$1);
instaparse.failure.print_reason(r_56281);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__56282 = cljs.core.next(seq__56244_56275__$1);
var G__56283 = null;
var G__56284 = (0);
var G__56285 = (0);
seq__56244_56265 = G__56282;
chunk__56245_56266 = G__56283;
count__56246_56267 = G__56284;
i__56247_56268 = G__56285;
continue;
}
} else {
}
}
break;
}

var seq__56250 = cljs.core.seq(partial_reasons);
var chunk__56251 = null;
var count__56252 = (0);
var i__56253 = (0);
while(true){
if((i__56253 < count__56252)){
var r = chunk__56251.cljs$core$IIndexed$_nth$arity$2(null,i__56253);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__56287 = seq__56250;
var G__56288 = chunk__56251;
var G__56289 = count__56252;
var G__56290 = (i__56253 + (1));
seq__56250 = G__56287;
chunk__56251 = G__56288;
count__56252 = G__56289;
i__56253 = G__56290;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56250);
if(temp__5735__auto__){
var seq__56250__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56250__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56250__$1);
var G__56291 = cljs.core.chunk_rest(seq__56250__$1);
var G__56292 = c__4609__auto__;
var G__56293 = cljs.core.count(c__4609__auto__);
var G__56294 = (0);
seq__56250 = G__56291;
chunk__56251 = G__56292;
count__56252 = G__56293;
i__56253 = G__56294;
continue;
} else {
var r = cljs.core.first(seq__56250__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__56295 = cljs.core.next(seq__56250__$1);
var G__56296 = null;
var G__56297 = (0);
var G__56298 = (0);
seq__56250 = G__56295;
chunk__56251 = G__56296;
count__56252 = G__56297;
i__56253 = G__56298;
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
