goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___56302 = arguments.length;
var i__4790__auto___56303 = (0);
while(true){
if((i__4790__auto___56303 < len__4789__auto___56302)){
args__4795__auto__.push((arguments[i__4790__auto___56303]));

var G__56304 = (i__4790__auto___56303 + (1));
i__4790__auto___56303 = G__56304;
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
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq56299){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56299));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___56305 = arguments.length;
var i__4790__auto___56306 = (0);
while(true){
if((i__4790__auto___56306 < len__4789__auto___56305)){
args__4795__auto__.push((arguments[i__4790__auto___56306]));

var G__56307 = (i__4790__auto___56306 + (1));
i__4790__auto___56306 = G__56307;
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
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq56300){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56300));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__56301 = "";
var G__56301__$1 = (cljs.core.truth_(re.ignoreCase)?[G__56301,"i"].join(''):G__56301);
var G__56301__$2 = (cljs.core.truth_(re.multiline)?[G__56301__$1,"m"].join(''):G__56301__$1);
if(cljs.core.truth_(re.unicode)){
return [G__56301__$2,"u"].join('');
} else {
return G__56301__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
