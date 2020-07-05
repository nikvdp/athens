goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.core');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.core.css = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$core$css(var_args){
var args__4795__auto__ = [];
var len__4789__auto___26833 = arguments.length;
var i__4790__auto___26835 = (0);
while(true){
if((i__4790__auto___26835 < len__4789__auto___26833)){
args__4795__auto__.push((arguments[i__4790__auto___26835]));

var G__26836 = (i__4790__auto___26835 + (1));
i__4790__auto___26835 = G__26836;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.compile_css,rules);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.core.css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.core.css.cljs$lang$applyTo = (function (seq26826){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26826));
}));

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.core.style = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$core$style(var_args){
var args__4795__auto__ = [];
var len__4789__auto___26839 = arguments.length;
var i__4790__auto___26840 = (0);
while(true){
if((i__4790__auto___26840 < len__4789__auto___26839)){
args__4795__auto__.push((arguments[i__4790__auto___26840]));

var G__26841 = (i__4790__auto___26840 + (1));
i__4790__auto___26840 = G__26841;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.compile_style(maps);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.core.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.core.style.cljs$lang$applyTo = (function (seq26830){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26830));
}));


//# sourceMappingURL=day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.core.js.map
