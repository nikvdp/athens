goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55052 = arguments.length;
var i__4737__auto___55053 = (0);
while(true){
if((i__4737__auto___55053 < len__4736__auto___55052)){
args__4742__auto__.push((arguments[i__4737__auto___55053]));

var G__55054 = (i__4737__auto___55053 + (1));
i__4737__auto___55053 = G__55054;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq55042){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55042));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55055 = arguments.length;
var i__4737__auto___55056 = (0);
while(true){
if((i__4737__auto___55056 < len__4736__auto___55055)){
args__4742__auto__.push((arguments[i__4737__auto___55056]));

var G__55057 = (i__4737__auto___55056 + (1));
i__4737__auto___55056 = G__55057;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_illegal_argument_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq55049){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55049));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__55051 = "";
var G__55051__$1 = (cljs.core.truth_(re.ignoreCase)?[G__55051,"i"].join(''):G__55051);
var G__55051__$2 = (cljs.core.truth_(re.multiline)?[G__55051__$1,"m"].join(''):G__55051__$1);
if(cljs.core.truth_(re.unicode)){
return [G__55051__$2,"u"].join('');
} else {
return G__55051__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
