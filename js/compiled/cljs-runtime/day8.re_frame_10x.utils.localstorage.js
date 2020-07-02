goog.provide('day8.re_frame_10x.utils.localstorage');
goog.require('cljs.core');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('cljs.reader');
goog.require('clojure.string');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [day8.re_frame_10x.utils.localstorage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__33580 = arguments.length;
switch (G__33580) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2(key,null);
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key(key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2);

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__33599 = cljs.core.seq(Object.keys(localStorage));
var chunk__33600 = null;
var count__33601 = (0);
var i__33602 = (0);
while(true){
if((i__33602 < count__33601)){
var k = chunk__33600.cljs$core$IIndexed$_nth$arity$2(null,i__33602);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__33606 = seq__33599;
var G__33607 = chunk__33600;
var G__33608 = count__33601;
var G__33609 = (i__33602 + (1));
seq__33599 = G__33606;
chunk__33600 = G__33607;
count__33601 = G__33608;
i__33602 = G__33609;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33599);
if(temp__5735__auto__){
var seq__33599__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33599__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33599__$1);
var G__33610 = cljs.core.chunk_rest(seq__33599__$1);
var G__33611 = c__4609__auto__;
var G__33612 = cljs.core.count(c__4609__auto__);
var G__33613 = (0);
seq__33599 = G__33610;
chunk__33600 = G__33611;
count__33601 = G__33612;
i__33602 = G__33613;
continue;
} else {
var k = cljs.core.first(seq__33599__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__33615 = cljs.core.next(seq__33599__$1);
var G__33616 = null;
var G__33617 = (0);
var G__33618 = (0);
seq__33599 = G__33615;
chunk__33600 = G__33616;
count__33601 = G__33617;
i__33602 = G__33618;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=day8.re_frame_10x.utils.localstorage.js.map
