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
var G__56171 = (line + (1));
var G__56172 = (1);
var G__56173 = (counter + (1));
line = G__56171;
col = G__56172;
counter = G__56173;
continue;
} else {
var G__56174 = line;
var G__56175 = (col + (1));
var G__56176 = (counter + (1));
line = G__56174;
col = G__56175;
counter = G__56176;
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
var G__56177 = cljs.core.next(chars);
var G__56178 = (n__$1 - (1));
chars = G__56177;
n__$1 = G__56178;
continue;
} else {
var G__56179 = cljs.core.next(chars);
var G__56180 = n__$1;
chars = G__56179;
n__$1 = G__56180;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__56149){
var map__56150 = p__56149;
var map__56150__$1 = (((((!((map__56150 == null))))?(((((map__56150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56150):map__56150);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56150__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56150__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56150__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56150__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__56152_56181 = cljs.core.seq(full_reasons);
var chunk__56153_56182 = null;
var count__56154_56183 = (0);
var i__56155_56184 = (0);
while(true){
if((i__56155_56184 < count__56154_56183)){
var r_56185 = chunk__56153_56182.cljs$core$IIndexed$_nth$arity$2(null,i__56155_56184);
instaparse.failure.print_reason(r_56185);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__56186 = seq__56152_56181;
var G__56187 = chunk__56153_56182;
var G__56188 = count__56154_56183;
var G__56189 = (i__56155_56184 + (1));
seq__56152_56181 = G__56186;
chunk__56153_56182 = G__56187;
count__56154_56183 = G__56188;
i__56155_56184 = G__56189;
continue;
} else {
var temp__5735__auto___56190 = cljs.core.seq(seq__56152_56181);
if(temp__5735__auto___56190){
var seq__56152_56191__$1 = temp__5735__auto___56190;
if(cljs.core.chunked_seq_QMARK_(seq__56152_56191__$1)){
var c__4609__auto___56192 = cljs.core.chunk_first(seq__56152_56191__$1);
var G__56193 = cljs.core.chunk_rest(seq__56152_56191__$1);
var G__56194 = c__4609__auto___56192;
var G__56195 = cljs.core.count(c__4609__auto___56192);
var G__56196 = (0);
seq__56152_56181 = G__56193;
chunk__56153_56182 = G__56194;
count__56154_56183 = G__56195;
i__56155_56184 = G__56196;
continue;
} else {
var r_56197 = cljs.core.first(seq__56152_56191__$1);
instaparse.failure.print_reason(r_56197);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__56198 = cljs.core.next(seq__56152_56191__$1);
var G__56199 = null;
var G__56200 = (0);
var G__56201 = (0);
seq__56152_56181 = G__56198;
chunk__56153_56182 = G__56199;
count__56154_56183 = G__56200;
i__56155_56184 = G__56201;
continue;
}
} else {
}
}
break;
}

var seq__56164 = cljs.core.seq(partial_reasons);
var chunk__56165 = null;
var count__56166 = (0);
var i__56167 = (0);
while(true){
if((i__56167 < count__56166)){
var r = chunk__56165.cljs$core$IIndexed$_nth$arity$2(null,i__56167);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__56202 = seq__56164;
var G__56203 = chunk__56165;
var G__56204 = count__56166;
var G__56205 = (i__56167 + (1));
seq__56164 = G__56202;
chunk__56165 = G__56203;
count__56166 = G__56204;
i__56167 = G__56205;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56164);
if(temp__5735__auto__){
var seq__56164__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56164__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56164__$1);
var G__56207 = cljs.core.chunk_rest(seq__56164__$1);
var G__56208 = c__4609__auto__;
var G__56209 = cljs.core.count(c__4609__auto__);
var G__56210 = (0);
seq__56164 = G__56207;
chunk__56165 = G__56208;
count__56166 = G__56209;
i__56167 = G__56210;
continue;
} else {
var r = cljs.core.first(seq__56164__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__56211 = cljs.core.next(seq__56164__$1);
var G__56212 = null;
var G__56213 = (0);
var G__56214 = (0);
seq__56164 = G__56211;
chunk__56165 = G__56212;
count__56166 = G__56213;
i__56167 = G__56214;
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
