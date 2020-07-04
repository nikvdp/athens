goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___55902 = arguments.length;
var i__4790__auto___55903 = (0);
while(true){
if((i__4790__auto___55903 < len__4789__auto___55902)){
args__4795__auto__.push((arguments[i__4790__auto___55903]));

var G__55904 = (i__4790__auto___55903 + (1));
i__4790__auto___55903 = G__55904;
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
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq55899){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55899));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___55905 = arguments.length;
var i__4790__auto___55906 = (0);
while(true){
if((i__4790__auto___55906 < len__4789__auto___55905)){
args__4795__auto__.push((arguments[i__4790__auto___55906]));

var G__55907 = (i__4790__auto___55906 + (1));
i__4790__auto___55906 = G__55907;
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
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq55900){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55900));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__55901 = "";
var G__55901__$1 = (cljs.core.truth_(re.ignoreCase)?[G__55901,"i"].join(''):G__55901);
var G__55901__$2 = (cljs.core.truth_(re.multiline)?[G__55901__$1,"m"].join(''):G__55901__$1);
if(cljs.core.truth_(re.unicode)){
return [G__55901__$2,"u"].join('');
} else {
return G__55901__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
