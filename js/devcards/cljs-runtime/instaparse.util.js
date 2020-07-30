goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___56347 = arguments.length;
var i__4790__auto___56348 = (0);
while(true){
if((i__4790__auto___56348 < len__4789__auto___56347)){
args__4795__auto__.push((arguments[i__4790__auto___56348]));

var G__56349 = (i__4790__auto___56348 + (1));
i__4790__auto___56348 = G__56349;
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
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq56344){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56344));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___56350 = arguments.length;
var i__4790__auto___56351 = (0);
while(true){
if((i__4790__auto___56351 < len__4789__auto___56350)){
args__4795__auto__.push((arguments[i__4790__auto___56351]));

var G__56352 = (i__4790__auto___56351 + (1));
i__4790__auto___56351 = G__56352;
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
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq56345){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56345));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__56346 = "";
var G__56346__$1 = (cljs.core.truth_(re.ignoreCase)?[G__56346,"i"].join(''):G__56346);
var G__56346__$2 = (cljs.core.truth_(re.multiline)?[G__56346__$1,"m"].join(''):G__56346__$1);
if(cljs.core.truth_(re.unicode)){
return [G__56346__$2,"u"].join('');
} else {
return G__56346__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
