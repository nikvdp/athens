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
var G__33549 = arguments.length;
switch (G__33549) {
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
var seq__33550 = cljs.core.seq(Object.keys(localStorage));
var chunk__33551 = null;
var count__33552 = (0);
var i__33553 = (0);
while(true){
if((i__33553 < count__33552)){
var k = chunk__33551.cljs$core$IIndexed$_nth$arity$2(null,i__33553);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__33582 = seq__33550;
var G__33583 = chunk__33551;
var G__33584 = count__33552;
var G__33585 = (i__33553 + (1));
seq__33550 = G__33582;
chunk__33551 = G__33583;
count__33552 = G__33584;
i__33553 = G__33585;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33550);
if(temp__5735__auto__){
var seq__33550__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33550__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33550__$1);
var G__33586 = cljs.core.chunk_rest(seq__33550__$1);
var G__33587 = c__4609__auto__;
var G__33588 = cljs.core.count(c__4609__auto__);
var G__33589 = (0);
seq__33550 = G__33586;
chunk__33551 = G__33587;
count__33552 = G__33588;
i__33553 = G__33589;
continue;
} else {
var k = cljs.core.first(seq__33550__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__33590 = cljs.core.next(seq__33550__$1);
var G__33591 = null;
var G__33592 = (0);
var G__33593 = (0);
seq__33550 = G__33590;
chunk__33551 = G__33591;
count__33552 = G__33592;
i__33553 = G__33593;
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
