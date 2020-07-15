goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___56301 = arguments.length;
var i__4790__auto___56302 = (0);
while(true){
if((i__4790__auto___56302 < len__4789__auto___56301)){
args__4795__auto__.push((arguments[i__4790__auto___56302]));

var G__56303 = (i__4790__auto___56302 + (1));
i__4790__auto___56302 = G__56303;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq56298){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56298));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___56304 = arguments.length;
var i__4790__auto___56305 = (0);
while(true){
if((i__4790__auto___56305 < len__4789__auto___56304)){
args__4795__auto__.push((arguments[i__4790__auto___56305]));

var G__56306 = (i__4790__auto___56305 + (1));
i__4790__auto___56305 = G__56306;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_illegal_argument_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq56299){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56299));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__56300 = "";
var G__56300__$1 = (cljs.core.truth_(re.ignoreCase)?[G__56300,"i"].join(''):G__56300);
var G__56300__$2 = (cljs.core.truth_(re.multiline)?[G__56300__$1,"m"].join(''):G__56300__$1);
if(cljs.core.truth_(re.unicode)){
return [G__56300__$2,"u"].join('');
} else {
return G__56300__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
