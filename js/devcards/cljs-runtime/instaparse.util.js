goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___56225 = arguments.length;
var i__4790__auto___56226 = (0);
while(true){
if((i__4790__auto___56226 < len__4789__auto___56225)){
args__4795__auto__.push((arguments[i__4790__auto___56226]));

var G__56227 = (i__4790__auto___56226 + (1));
i__4790__auto___56226 = G__56227;
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
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq56221){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56221));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___56228 = arguments.length;
var i__4790__auto___56229 = (0);
while(true){
if((i__4790__auto___56229 < len__4789__auto___56228)){
args__4795__auto__.push((arguments[i__4790__auto___56229]));

var G__56230 = (i__4790__auto___56229 + (1));
i__4790__auto___56229 = G__56230;
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
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq56223){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56223));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__56224 = "";
var G__56224__$1 = (cljs.core.truth_(re.ignoreCase)?[G__56224,"i"].join(''):G__56224);
var G__56224__$2 = (cljs.core.truth_(re.multiline)?[G__56224__$1,"m"].join(''):G__56224__$1);
if(cljs.core.truth_(re.unicode)){
return [G__56224__$2,"u"].join('');
} else {
return G__56224__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
