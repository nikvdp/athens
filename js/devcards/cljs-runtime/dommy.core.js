goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_(data)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(dommy.core.selector,data));
} else {
if(((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))){
return cljs.core.name(data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__4185__auto__ = elem.textContent;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str(k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__41179 = arguments.length;
switch (G__41179) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(window.getComputedStyle(elem));
}));

(dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str(k)]);
}));

(dommy.core.style.cljs$lang$maxFixedArity = 2);

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,k);
if(cljs.core.seq(pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto__ = elem.classList;
if(cljs.core.truth_(temp__5733__auto__)){
var class_list = temp__5733__auto__;
return class_list.contains(c__$1);
} else {
var temp__5735__auto__ = dommy.core.class$(elem);
if(cljs.core.truth_(temp__5735__auto__)){
var class_name = temp__5735__auto__;
var temp__5735__auto____$1 = dommy.utils.class_index(class_name,c__$1);
if(cljs.core.truth_(temp__5735__auto____$1)){
var i = temp__5735__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__41181 = arguments.length;
switch (G__41181) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array(base.querySelectorAll(dommy.core.selector(selector)));
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
}));

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
}));

(dommy.core.matches_pred.cljs$lang$maxFixedArity = 2);

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__41184 = arguments.length;
switch (G__41184) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__41182_SHARP_){
return (!((p1__41182_SHARP_ === base)));
}),dommy.core.ancestors(elem))));
}));

(dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3(document.body,elem,selector);
}));

(dommy.core.closest.cljs$lang$maxFixedArity = 3);

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if((!((void 0 === elem.textContent)))){
(elem.textContent = text);
} else {
(elem.innerText = text);
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
(elem.innerHTML = html);

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
(elem.value = value);

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return (elem.className = c);
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41611 = arguments.length;
var i__4790__auto___41612 = (0);
while(true){
if((i__4790__auto___41612 < len__4789__auto___41611)){
args__4795__auto__.push((arguments[i__4790__auto___41612]));

var G__41618 = (i__4790__auto___41612 + (1));
i__4790__auto___41612 = G__41618;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__41189_41624 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__41190_41625 = null;
var count__41191_41626 = (0);
var i__41192_41627 = (0);
while(true){
if((i__41192_41627 < count__41191_41626)){
var vec__41199_41628 = chunk__41190_41625.cljs$core$IIndexed$_nth$arity$2(null,i__41192_41627);
var k_41629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41199_41628,(0),null);
var v_41630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41199_41628,(1),null);
style.setProperty(dommy.utils.as_str(k_41629),v_41630);


var G__41631 = seq__41189_41624;
var G__41632 = chunk__41190_41625;
var G__41633 = count__41191_41626;
var G__41634 = (i__41192_41627 + (1));
seq__41189_41624 = G__41631;
chunk__41190_41625 = G__41632;
count__41191_41626 = G__41633;
i__41192_41627 = G__41634;
continue;
} else {
var temp__5735__auto___41635 = cljs.core.seq(seq__41189_41624);
if(temp__5735__auto___41635){
var seq__41189_41636__$1 = temp__5735__auto___41635;
if(cljs.core.chunked_seq_QMARK_(seq__41189_41636__$1)){
var c__4609__auto___41637 = cljs.core.chunk_first(seq__41189_41636__$1);
var G__41638 = cljs.core.chunk_rest(seq__41189_41636__$1);
var G__41639 = c__4609__auto___41637;
var G__41640 = cljs.core.count(c__4609__auto___41637);
var G__41641 = (0);
seq__41189_41624 = G__41638;
chunk__41190_41625 = G__41639;
count__41191_41626 = G__41640;
i__41192_41627 = G__41641;
continue;
} else {
var vec__41202_41642 = cljs.core.first(seq__41189_41636__$1);
var k_41643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41202_41642,(0),null);
var v_41644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41202_41642,(1),null);
style.setProperty(dommy.utils.as_str(k_41643),v_41644);


var G__41645 = cljs.core.next(seq__41189_41636__$1);
var G__41646 = null;
var G__41647 = (0);
var G__41648 = (0);
seq__41189_41624 = G__41645;
chunk__41190_41625 = G__41646;
count__41191_41626 = G__41647;
i__41192_41627 = G__41648;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq41187){
var G__41188 = cljs.core.first(seq41187);
var seq41187__$1 = cljs.core.next(seq41187);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41188,seq41187__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41649 = arguments.length;
var i__4790__auto___41650 = (0);
while(true){
if((i__4790__auto___41650 < len__4789__auto___41649)){
args__4795__auto__.push((arguments[i__4790__auto___41650]));

var G__41651 = (i__4790__auto___41650 + (1));
i__4790__auto___41650 = G__41651;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__41207_41655 = cljs.core.seq(keywords);
var chunk__41208_41656 = null;
var count__41209_41657 = (0);
var i__41210_41658 = (0);
while(true){
if((i__41210_41658 < count__41209_41657)){
var kw_41659 = chunk__41208_41656.cljs$core$IIndexed$_nth$arity$2(null,i__41210_41658);
style.removeProperty(dommy.utils.as_str(kw_41659));


var G__41660 = seq__41207_41655;
var G__41661 = chunk__41208_41656;
var G__41662 = count__41209_41657;
var G__41663 = (i__41210_41658 + (1));
seq__41207_41655 = G__41660;
chunk__41208_41656 = G__41661;
count__41209_41657 = G__41662;
i__41210_41658 = G__41663;
continue;
} else {
var temp__5735__auto___41664 = cljs.core.seq(seq__41207_41655);
if(temp__5735__auto___41664){
var seq__41207_41665__$1 = temp__5735__auto___41664;
if(cljs.core.chunked_seq_QMARK_(seq__41207_41665__$1)){
var c__4609__auto___41666 = cljs.core.chunk_first(seq__41207_41665__$1);
var G__41667 = cljs.core.chunk_rest(seq__41207_41665__$1);
var G__41668 = c__4609__auto___41666;
var G__41669 = cljs.core.count(c__4609__auto___41666);
var G__41670 = (0);
seq__41207_41655 = G__41667;
chunk__41208_41656 = G__41668;
count__41209_41657 = G__41669;
i__41210_41658 = G__41670;
continue;
} else {
var kw_41671 = cljs.core.first(seq__41207_41665__$1);
style.removeProperty(dommy.utils.as_str(kw_41671));


var G__41672 = cljs.core.next(seq__41207_41665__$1);
var G__41673 = null;
var G__41674 = (0);
var G__41675 = (0);
seq__41207_41655 = G__41672;
chunk__41208_41656 = G__41673;
count__41209_41657 = G__41674;
i__41210_41658 = G__41675;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq41205){
var G__41206 = cljs.core.first(seq41205);
var seq41205__$1 = cljs.core.next(seq41205);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41206,seq41205__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41676 = arguments.length;
var i__4790__auto___41677 = (0);
while(true){
if((i__4790__auto___41677 < len__4789__auto___41676)){
args__4795__auto__.push((arguments[i__4790__auto___41677]));

var G__41678 = (i__4790__auto___41677 + (1));
i__4790__auto___41677 = G__41678;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__41214_41680 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__41215_41681 = null;
var count__41216_41682 = (0);
var i__41217_41683 = (0);
while(true){
if((i__41217_41683 < count__41216_41682)){
var vec__41224_41684 = chunk__41215_41681.cljs$core$IIndexed$_nth$arity$2(null,i__41217_41683);
var k_41685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41224_41684,(0),null);
var v_41686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41224_41684,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_41685,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_41686),"px"].join('')], 0));


var G__41687 = seq__41214_41680;
var G__41688 = chunk__41215_41681;
var G__41689 = count__41216_41682;
var G__41690 = (i__41217_41683 + (1));
seq__41214_41680 = G__41687;
chunk__41215_41681 = G__41688;
count__41216_41682 = G__41689;
i__41217_41683 = G__41690;
continue;
} else {
var temp__5735__auto___41692 = cljs.core.seq(seq__41214_41680);
if(temp__5735__auto___41692){
var seq__41214_41693__$1 = temp__5735__auto___41692;
if(cljs.core.chunked_seq_QMARK_(seq__41214_41693__$1)){
var c__4609__auto___41694 = cljs.core.chunk_first(seq__41214_41693__$1);
var G__41695 = cljs.core.chunk_rest(seq__41214_41693__$1);
var G__41696 = c__4609__auto___41694;
var G__41697 = cljs.core.count(c__4609__auto___41694);
var G__41698 = (0);
seq__41214_41680 = G__41695;
chunk__41215_41681 = G__41696;
count__41216_41682 = G__41697;
i__41217_41683 = G__41698;
continue;
} else {
var vec__41227_41699 = cljs.core.first(seq__41214_41693__$1);
var k_41700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41227_41699,(0),null);
var v_41701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41227_41699,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_41700,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_41701),"px"].join('')], 0));


var G__41702 = cljs.core.next(seq__41214_41693__$1);
var G__41703 = null;
var G__41704 = (0);
var G__41705 = (0);
seq__41214_41680 = G__41702;
chunk__41215_41681 = G__41703;
count__41216_41682 = G__41704;
i__41217_41683 = G__41705;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq41211){
var G__41212 = cljs.core.first(seq41211);
var seq41211__$1 = cljs.core.next(seq41211);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41212,seq41211__$1);
}));

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var G__41235 = arguments.length;
switch (G__41235) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41707 = arguments.length;
var i__4790__auto___41708 = (0);
while(true){
if((i__4790__auto___41708 < len__4789__auto___41707)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41708]));

var G__41709 = (i__4790__auto___41708 + (1));
i__4790__auto___41708 = G__41709;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4811__auto__);

}
});

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__41236 = elem;
(G__41236[k__$1] = v);

return G__41236;
} else {
var G__41237 = elem;
G__41237.setAttribute(k__$1,v);

return G__41237;
}
} else {
return null;
}
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__41238_41710 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__41239_41711 = null;
var count__41240_41712 = (0);
var i__41241_41713 = (0);
while(true){
if((i__41241_41713 < count__41240_41712)){
var vec__41248_41714 = chunk__41239_41711.cljs$core$IIndexed$_nth$arity$2(null,i__41241_41713);
var k_41715__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41248_41714,(0),null);
var v_41716__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41248_41714,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_41715__$1,v_41716__$1);


var G__41717 = seq__41238_41710;
var G__41718 = chunk__41239_41711;
var G__41719 = count__41240_41712;
var G__41720 = (i__41241_41713 + (1));
seq__41238_41710 = G__41717;
chunk__41239_41711 = G__41718;
count__41240_41712 = G__41719;
i__41241_41713 = G__41720;
continue;
} else {
var temp__5735__auto___41721 = cljs.core.seq(seq__41238_41710);
if(temp__5735__auto___41721){
var seq__41238_41722__$1 = temp__5735__auto___41721;
if(cljs.core.chunked_seq_QMARK_(seq__41238_41722__$1)){
var c__4609__auto___41723 = cljs.core.chunk_first(seq__41238_41722__$1);
var G__41724 = cljs.core.chunk_rest(seq__41238_41722__$1);
var G__41725 = c__4609__auto___41723;
var G__41726 = cljs.core.count(c__4609__auto___41723);
var G__41727 = (0);
seq__41238_41710 = G__41724;
chunk__41239_41711 = G__41725;
count__41240_41712 = G__41726;
i__41241_41713 = G__41727;
continue;
} else {
var vec__41251_41728 = cljs.core.first(seq__41238_41722__$1);
var k_41729__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41251_41728,(0),null);
var v_41730__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41251_41728,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_41729__$1,v_41730__$1);


var G__41731 = cljs.core.next(seq__41238_41722__$1);
var G__41732 = null;
var G__41733 = (0);
var G__41734 = (0);
seq__41238_41710 = G__41731;
chunk__41239_41711 = G__41732;
count__41240_41712 = G__41733;
i__41241_41713 = G__41734;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq41231){
var G__41232 = cljs.core.first(seq41231);
var seq41231__$1 = cljs.core.next(seq41231);
var G__41233 = cljs.core.first(seq41231__$1);
var seq41231__$2 = cljs.core.next(seq41231__$1);
var G__41234 = cljs.core.first(seq41231__$2);
var seq41231__$3 = cljs.core.next(seq41231__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41232,G__41233,G__41234,seq41231__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__41258 = arguments.length;
switch (G__41258) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41736 = arguments.length;
var i__4790__auto___41737 = (0);
while(true){
if((i__4790__auto___41737 < len__4789__auto___41736)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41737]));

var G__41738 = (i__4790__auto___41737 + (1));
i__4790__auto___41737 = G__41738;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_41739__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__41259 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__41259.cljs$core$IFn$_invoke$arity$1 ? fexpr__41259.cljs$core$IFn$_invoke$arity$1(k_41739__$1) : fexpr__41259.call(null,k_41739__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_41739__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__41260_41740 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__41261_41741 = null;
var count__41262_41742 = (0);
var i__41263_41743 = (0);
while(true){
if((i__41263_41743 < count__41262_41742)){
var k_41744__$1 = chunk__41261_41741.cljs$core$IIndexed$_nth$arity$2(null,i__41263_41743);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_41744__$1);


var G__41745 = seq__41260_41740;
var G__41746 = chunk__41261_41741;
var G__41747 = count__41262_41742;
var G__41748 = (i__41263_41743 + (1));
seq__41260_41740 = G__41745;
chunk__41261_41741 = G__41746;
count__41262_41742 = G__41747;
i__41263_41743 = G__41748;
continue;
} else {
var temp__5735__auto___41749 = cljs.core.seq(seq__41260_41740);
if(temp__5735__auto___41749){
var seq__41260_41750__$1 = temp__5735__auto___41749;
if(cljs.core.chunked_seq_QMARK_(seq__41260_41750__$1)){
var c__4609__auto___41751 = cljs.core.chunk_first(seq__41260_41750__$1);
var G__41752 = cljs.core.chunk_rest(seq__41260_41750__$1);
var G__41753 = c__4609__auto___41751;
var G__41754 = cljs.core.count(c__4609__auto___41751);
var G__41755 = (0);
seq__41260_41740 = G__41752;
chunk__41261_41741 = G__41753;
count__41262_41742 = G__41754;
i__41263_41743 = G__41755;
continue;
} else {
var k_41756__$1 = cljs.core.first(seq__41260_41750__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_41756__$1);


var G__41757 = cljs.core.next(seq__41260_41750__$1);
var G__41758 = null;
var G__41759 = (0);
var G__41760 = (0);
seq__41260_41740 = G__41757;
chunk__41261_41741 = G__41758;
count__41262_41742 = G__41759;
i__41263_41743 = G__41760;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq41255){
var G__41256 = cljs.core.first(seq41255);
var seq41255__$1 = cljs.core.next(seq41255);
var G__41257 = cljs.core.first(seq41255__$1);
var seq41255__$2 = cljs.core.next(seq41255__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41256,G__41257,seq41255__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__41265 = arguments.length;
switch (G__41265) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.core.attr(elem,k)));
}));

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
} else {
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
}
}));

(dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__41270 = arguments.length;
switch (G__41270) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41763 = arguments.length;
var i__4790__auto___41764 = (0);
while(true){
if((i__4790__auto___41764 < len__4789__auto___41763)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41764]));

var G__41765 = (i__4790__auto___41764 + (1));
i__4790__auto___41764 = G__41765;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__5733__auto___41766 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___41766)){
var class_list_41767 = temp__5733__auto___41766;
var seq__41271_41768 = cljs.core.seq(classes__$1);
var chunk__41272_41769 = null;
var count__41273_41770 = (0);
var i__41274_41771 = (0);
while(true){
if((i__41274_41771 < count__41273_41770)){
var c_41772 = chunk__41272_41769.cljs$core$IIndexed$_nth$arity$2(null,i__41274_41771);
class_list_41767.add(c_41772);


var G__41773 = seq__41271_41768;
var G__41774 = chunk__41272_41769;
var G__41775 = count__41273_41770;
var G__41776 = (i__41274_41771 + (1));
seq__41271_41768 = G__41773;
chunk__41272_41769 = G__41774;
count__41273_41770 = G__41775;
i__41274_41771 = G__41776;
continue;
} else {
var temp__5735__auto___41777 = cljs.core.seq(seq__41271_41768);
if(temp__5735__auto___41777){
var seq__41271_41778__$1 = temp__5735__auto___41777;
if(cljs.core.chunked_seq_QMARK_(seq__41271_41778__$1)){
var c__4609__auto___41779 = cljs.core.chunk_first(seq__41271_41778__$1);
var G__41780 = cljs.core.chunk_rest(seq__41271_41778__$1);
var G__41781 = c__4609__auto___41779;
var G__41782 = cljs.core.count(c__4609__auto___41779);
var G__41783 = (0);
seq__41271_41768 = G__41780;
chunk__41272_41769 = G__41781;
count__41273_41770 = G__41782;
i__41274_41771 = G__41783;
continue;
} else {
var c_41784 = cljs.core.first(seq__41271_41778__$1);
class_list_41767.add(c_41784);


var G__41785 = cljs.core.next(seq__41271_41778__$1);
var G__41786 = null;
var G__41787 = (0);
var G__41788 = (0);
seq__41271_41768 = G__41785;
chunk__41272_41769 = G__41786;
count__41273_41770 = G__41787;
i__41274_41771 = G__41788;
continue;
}
} else {
}
}
break;
}
} else {
var seq__41275_41789 = cljs.core.seq(classes__$1);
var chunk__41276_41790 = null;
var count__41277_41791 = (0);
var i__41278_41792 = (0);
while(true){
if((i__41278_41792 < count__41277_41791)){
var c_41793 = chunk__41276_41790.cljs$core$IIndexed$_nth$arity$2(null,i__41278_41792);
var class_name_41794 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_41794,c_41793))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_41794 === ""))?c_41793:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_41794)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_41793)].join('')));
}


var G__41795 = seq__41275_41789;
var G__41796 = chunk__41276_41790;
var G__41797 = count__41277_41791;
var G__41798 = (i__41278_41792 + (1));
seq__41275_41789 = G__41795;
chunk__41276_41790 = G__41796;
count__41277_41791 = G__41797;
i__41278_41792 = G__41798;
continue;
} else {
var temp__5735__auto___41799 = cljs.core.seq(seq__41275_41789);
if(temp__5735__auto___41799){
var seq__41275_41800__$1 = temp__5735__auto___41799;
if(cljs.core.chunked_seq_QMARK_(seq__41275_41800__$1)){
var c__4609__auto___41801 = cljs.core.chunk_first(seq__41275_41800__$1);
var G__41802 = cljs.core.chunk_rest(seq__41275_41800__$1);
var G__41803 = c__4609__auto___41801;
var G__41804 = cljs.core.count(c__4609__auto___41801);
var G__41805 = (0);
seq__41275_41789 = G__41802;
chunk__41276_41790 = G__41803;
count__41277_41791 = G__41804;
i__41278_41792 = G__41805;
continue;
} else {
var c_41806 = cljs.core.first(seq__41275_41800__$1);
var class_name_41807 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_41807,c_41806))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_41807 === ""))?c_41806:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_41807)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_41806)].join('')));
}


var G__41808 = cljs.core.next(seq__41275_41800__$1);
var G__41809 = null;
var G__41810 = (0);
var G__41811 = (0);
seq__41275_41789 = G__41808;
chunk__41276_41790 = G__41809;
count__41277_41791 = G__41810;
i__41278_41792 = G__41811;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
}));

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__41279_41812 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__41280_41813 = null;
var count__41281_41814 = (0);
var i__41282_41815 = (0);
while(true){
if((i__41282_41815 < count__41281_41814)){
var c_41816 = chunk__41280_41813.cljs$core$IIndexed$_nth$arity$2(null,i__41282_41815);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_41816);


var G__41817 = seq__41279_41812;
var G__41818 = chunk__41280_41813;
var G__41819 = count__41281_41814;
var G__41820 = (i__41282_41815 + (1));
seq__41279_41812 = G__41817;
chunk__41280_41813 = G__41818;
count__41281_41814 = G__41819;
i__41282_41815 = G__41820;
continue;
} else {
var temp__5735__auto___41821 = cljs.core.seq(seq__41279_41812);
if(temp__5735__auto___41821){
var seq__41279_41823__$1 = temp__5735__auto___41821;
if(cljs.core.chunked_seq_QMARK_(seq__41279_41823__$1)){
var c__4609__auto___41824 = cljs.core.chunk_first(seq__41279_41823__$1);
var G__41826 = cljs.core.chunk_rest(seq__41279_41823__$1);
var G__41827 = c__4609__auto___41824;
var G__41828 = cljs.core.count(c__4609__auto___41824);
var G__41829 = (0);
seq__41279_41812 = G__41826;
chunk__41280_41813 = G__41827;
count__41281_41814 = G__41828;
i__41282_41815 = G__41829;
continue;
} else {
var c_41830 = cljs.core.first(seq__41279_41823__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_41830);


var G__41831 = cljs.core.next(seq__41279_41823__$1);
var G__41832 = null;
var G__41833 = (0);
var G__41834 = (0);
seq__41279_41812 = G__41831;
chunk__41280_41813 = G__41832;
count__41281_41814 = G__41833;
i__41282_41815 = G__41834;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq41267){
var G__41268 = cljs.core.first(seq41267);
var seq41267__$1 = cljs.core.next(seq41267);
var G__41269 = cljs.core.first(seq41267__$1);
var seq41267__$2 = cljs.core.next(seq41267__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41268,G__41269,seq41267__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__41287 = arguments.length;
switch (G__41287) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41836 = arguments.length;
var i__4790__auto___41837 = (0);
while(true){
if((i__4790__auto___41837 < len__4789__auto___41836)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41837]));

var G__41838 = (i__4790__auto___41837 + (1));
i__4790__auto___41837 = G__41838;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___41839 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___41839)){
var class_list_41840 = temp__5733__auto___41839;
class_list_41840.remove(c__$1);
} else {
var class_name_41841 = dommy.core.class$(elem);
var new_class_name_41842 = dommy.utils.remove_class_str(class_name_41841,c__$1);
if((class_name_41841 === new_class_name_41842)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_41842);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__41288 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__41289 = null;
var count__41290 = (0);
var i__41291 = (0);
while(true){
if((i__41291 < count__41290)){
var c = chunk__41289.cljs$core$IIndexed$_nth$arity$2(null,i__41291);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__41843 = seq__41288;
var G__41844 = chunk__41289;
var G__41845 = count__41290;
var G__41846 = (i__41291 + (1));
seq__41288 = G__41843;
chunk__41289 = G__41844;
count__41290 = G__41845;
i__41291 = G__41846;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41288);
if(temp__5735__auto__){
var seq__41288__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41288__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41288__$1);
var G__41848 = cljs.core.chunk_rest(seq__41288__$1);
var G__41849 = c__4609__auto__;
var G__41850 = cljs.core.count(c__4609__auto__);
var G__41851 = (0);
seq__41288 = G__41848;
chunk__41289 = G__41849;
count__41290 = G__41850;
i__41291 = G__41851;
continue;
} else {
var c = cljs.core.first(seq__41288__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__41853 = cljs.core.next(seq__41288__$1);
var G__41854 = null;
var G__41855 = (0);
var G__41856 = (0);
seq__41288 = G__41853;
chunk__41289 = G__41854;
count__41290 = G__41855;
i__41291 = G__41856;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq41284){
var G__41285 = cljs.core.first(seq41284);
var seq41284__$1 = cljs.core.next(seq41284);
var G__41286 = cljs.core.first(seq41284__$1);
var seq41284__$2 = cljs.core.next(seq41284__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41285,G__41286,seq41284__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__41293 = arguments.length;
switch (G__41293) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___41858 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___41858)){
var class_list_41859 = temp__5733__auto___41858;
class_list_41859.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem,c__$1,(!(dommy.core.has_class_QMARK_(elem,c__$1))));
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__41295 = arguments.length;
switch (G__41295) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none")], 0));
}));

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,dommy.core.hidden_QMARK_(elem));
}));

(dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect(elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__41297 = arguments.length;
switch (G__41297) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str(tag_ns),dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$lang$maxFixedArity = 2);

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_(elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__41303 = arguments.length;
switch (G__41303) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41865 = arguments.length;
var i__4790__auto___41866 = (0);
while(true){
if((i__4790__auto___41866 < len__4789__auto___41865)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41866]));

var G__41867 = (i__4790__auto___41866 + (1));
i__4790__auto___41866 = G__41867;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__41306 = parent;
G__41306.appendChild(child);

return G__41306;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__41307_41868 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__41308_41869 = null;
var count__41309_41870 = (0);
var i__41310_41871 = (0);
while(true){
if((i__41310_41871 < count__41309_41870)){
var c_41872 = chunk__41308_41869.cljs$core$IIndexed$_nth$arity$2(null,i__41310_41871);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41872);


var G__41873 = seq__41307_41868;
var G__41874 = chunk__41308_41869;
var G__41875 = count__41309_41870;
var G__41876 = (i__41310_41871 + (1));
seq__41307_41868 = G__41873;
chunk__41308_41869 = G__41874;
count__41309_41870 = G__41875;
i__41310_41871 = G__41876;
continue;
} else {
var temp__5735__auto___41877 = cljs.core.seq(seq__41307_41868);
if(temp__5735__auto___41877){
var seq__41307_41878__$1 = temp__5735__auto___41877;
if(cljs.core.chunked_seq_QMARK_(seq__41307_41878__$1)){
var c__4609__auto___41879 = cljs.core.chunk_first(seq__41307_41878__$1);
var G__41880 = cljs.core.chunk_rest(seq__41307_41878__$1);
var G__41881 = c__4609__auto___41879;
var G__41882 = cljs.core.count(c__4609__auto___41879);
var G__41883 = (0);
seq__41307_41868 = G__41880;
chunk__41308_41869 = G__41881;
count__41309_41870 = G__41882;
i__41310_41871 = G__41883;
continue;
} else {
var c_41884 = cljs.core.first(seq__41307_41878__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41884);


var G__41885 = cljs.core.next(seq__41307_41878__$1);
var G__41886 = null;
var G__41887 = (0);
var G__41888 = (0);
seq__41307_41868 = G__41885;
chunk__41308_41869 = G__41886;
count__41309_41870 = G__41887;
i__41310_41871 = G__41888;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq41300){
var G__41301 = cljs.core.first(seq41300);
var seq41300__$1 = cljs.core.next(seq41300);
var G__41302 = cljs.core.first(seq41300__$1);
var seq41300__$2 = cljs.core.next(seq41300__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41301,G__41302,seq41300__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__41315 = arguments.length;
switch (G__41315) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41890 = arguments.length;
var i__4790__auto___41891 = (0);
while(true){
if((i__4790__auto___41891 < len__4789__auto___41890)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41891]));

var G__41892 = (i__4790__auto___41891 + (1));
i__4790__auto___41891 = G__41892;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__41316 = parent;
G__41316.insertBefore(child,parent.firstChild);

return G__41316;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__41317_41893 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__41318_41894 = null;
var count__41319_41895 = (0);
var i__41320_41896 = (0);
while(true){
if((i__41320_41896 < count__41319_41895)){
var c_41897 = chunk__41318_41894.cljs$core$IIndexed$_nth$arity$2(null,i__41320_41896);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41897);


var G__41898 = seq__41317_41893;
var G__41899 = chunk__41318_41894;
var G__41900 = count__41319_41895;
var G__41901 = (i__41320_41896 + (1));
seq__41317_41893 = G__41898;
chunk__41318_41894 = G__41899;
count__41319_41895 = G__41900;
i__41320_41896 = G__41901;
continue;
} else {
var temp__5735__auto___41902 = cljs.core.seq(seq__41317_41893);
if(temp__5735__auto___41902){
var seq__41317_41903__$1 = temp__5735__auto___41902;
if(cljs.core.chunked_seq_QMARK_(seq__41317_41903__$1)){
var c__4609__auto___41904 = cljs.core.chunk_first(seq__41317_41903__$1);
var G__41905 = cljs.core.chunk_rest(seq__41317_41903__$1);
var G__41906 = c__4609__auto___41904;
var G__41907 = cljs.core.count(c__4609__auto___41904);
var G__41908 = (0);
seq__41317_41893 = G__41905;
chunk__41318_41894 = G__41906;
count__41319_41895 = G__41907;
i__41320_41896 = G__41908;
continue;
} else {
var c_41909 = cljs.core.first(seq__41317_41903__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41909);


var G__41910 = cljs.core.next(seq__41317_41903__$1);
var G__41911 = null;
var G__41912 = (0);
var G__41913 = (0);
seq__41317_41893 = G__41910;
chunk__41318_41894 = G__41911;
count__41319_41895 = G__41912;
i__41320_41896 = G__41913;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq41312){
var G__41313 = cljs.core.first(seq41312);
var seq41312__$1 = cljs.core.next(seq41312);
var G__41314 = cljs.core.first(seq41312__$1);
var seq41312__$2 = cljs.core.next(seq41312__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41313,G__41314,seq41312__$2);
}));

(dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent(other);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__5733__auto___41914 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___41914)){
var next_41915 = temp__5733__auto___41914;
dommy.core.insert_before_BANG_(elem,next_41915);
} else {
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.clear_BANG_(p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__41322 = arguments.length;
switch (G__41322) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2(p,elem);
}));

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__41323 = p;
G__41323.removeChild(elem);

return G__41323;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__41324){
var vec__41325 = p__41324;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41325,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41325,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__4185__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__4174__auto__ = related_target;
if(cljs.core.truth_(and__4174__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__4174__auto__;
}
})())){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
})])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);
if(cljs.core.truth_((function (){var and__4174__auto__ = selected_target;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__4174__auto__;
}
})())){
(event.selectedTarget = selected_target);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__4185__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41917 = arguments.length;
var i__4790__auto___41918 = (0);
while(true){
if((i__4790__auto___41918 < len__4789__auto___41917)){
args__4795__auto__.push((arguments[i__4790__auto___41918]));

var G__41919 = (i__4790__auto___41918 + (1));
i__4790__auto___41918 = G__41919;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return (elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args));
}));

(dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq41328){
var G__41329 = cljs.core.first(seq41328);
var seq41328__$1 = cljs.core.next(seq41328);
var G__41330 = cljs.core.first(seq41328__$1);
var seq41328__$2 = cljs.core.next(seq41328__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41329,G__41330,seq41328__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__41331 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__41331.cljs$core$IFn$_invoke$arity$1 ? fexpr__41331.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__41331.call(null,elem_sel));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41922 = arguments.length;
var i__4790__auto___41923 = (0);
while(true){
if((i__4790__auto___41923 < len__4789__auto___41922)){
args__4795__auto__.push((arguments[i__4790__auto___41923]));

var G__41924 = (i__4790__auto___41923 + (1));
i__4790__auto___41923 = G__41924;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__41334_41926 = dommy.core.elem_and_selector(elem_sel);
var elem_41927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41334_41926,(0),null);
var selector_41928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41334_41926,(1),null);
var seq__41337_41930 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__41344_41931 = null;
var count__41345_41932 = (0);
var i__41346_41933 = (0);
while(true){
if((i__41346_41933 < count__41345_41932)){
var vec__41402_41935 = chunk__41344_41931.cljs$core$IIndexed$_nth$arity$2(null,i__41346_41933);
var orig_type_41936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41402_41935,(0),null);
var f_41937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41402_41935,(1),null);
var seq__41347_41939 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_41936,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_41936,cljs.core.identity])));
var chunk__41349_41940 = null;
var count__41350_41941 = (0);
var i__41351_41942 = (0);
while(true){
if((i__41351_41942 < count__41350_41941)){
var vec__41415_41943 = chunk__41349_41940.cljs$core$IIndexed$_nth$arity$2(null,i__41351_41942);
var actual_type_41944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41415_41943,(0),null);
var factory_41945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41415_41943,(1),null);
var canonical_f_41946 = (function (){var G__41419 = (factory_41945.cljs$core$IFn$_invoke$arity$1 ? factory_41945.cljs$core$IFn$_invoke$arity$1(f_41937) : factory_41945.call(null,f_41937));
var fexpr__41418 = (cljs.core.truth_(selector_41928)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41927,selector_41928):cljs.core.identity);
return (fexpr__41418.cljs$core$IFn$_invoke$arity$1 ? fexpr__41418.cljs$core$IFn$_invoke$arity$1(G__41419) : fexpr__41418.call(null,G__41419));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41927,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41928,actual_type_41944,f_41937], null),canonical_f_41946], 0));

if(cljs.core.truth_(elem_41927.addEventListener)){
elem_41927.addEventListener(cljs.core.name(actual_type_41944),canonical_f_41946);
} else {
elem_41927.attachEvent(cljs.core.name(actual_type_41944),canonical_f_41946);
}


var G__41952 = seq__41347_41939;
var G__41953 = chunk__41349_41940;
var G__41954 = count__41350_41941;
var G__41955 = (i__41351_41942 + (1));
seq__41347_41939 = G__41952;
chunk__41349_41940 = G__41953;
count__41350_41941 = G__41954;
i__41351_41942 = G__41955;
continue;
} else {
var temp__5735__auto___41956 = cljs.core.seq(seq__41347_41939);
if(temp__5735__auto___41956){
var seq__41347_41957__$1 = temp__5735__auto___41956;
if(cljs.core.chunked_seq_QMARK_(seq__41347_41957__$1)){
var c__4609__auto___41958 = cljs.core.chunk_first(seq__41347_41957__$1);
var G__41959 = cljs.core.chunk_rest(seq__41347_41957__$1);
var G__41960 = c__4609__auto___41958;
var G__41961 = cljs.core.count(c__4609__auto___41958);
var G__41962 = (0);
seq__41347_41939 = G__41959;
chunk__41349_41940 = G__41960;
count__41350_41941 = G__41961;
i__41351_41942 = G__41962;
continue;
} else {
var vec__41420_41963 = cljs.core.first(seq__41347_41957__$1);
var actual_type_41964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41420_41963,(0),null);
var factory_41965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41420_41963,(1),null);
var canonical_f_41967 = (function (){var G__41424 = (factory_41965.cljs$core$IFn$_invoke$arity$1 ? factory_41965.cljs$core$IFn$_invoke$arity$1(f_41937) : factory_41965.call(null,f_41937));
var fexpr__41423 = (cljs.core.truth_(selector_41928)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41927,selector_41928):cljs.core.identity);
return (fexpr__41423.cljs$core$IFn$_invoke$arity$1 ? fexpr__41423.cljs$core$IFn$_invoke$arity$1(G__41424) : fexpr__41423.call(null,G__41424));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41927,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41928,actual_type_41964,f_41937], null),canonical_f_41967], 0));

if(cljs.core.truth_(elem_41927.addEventListener)){
elem_41927.addEventListener(cljs.core.name(actual_type_41964),canonical_f_41967);
} else {
elem_41927.attachEvent(cljs.core.name(actual_type_41964),canonical_f_41967);
}


var G__41969 = cljs.core.next(seq__41347_41957__$1);
var G__41970 = null;
var G__41971 = (0);
var G__41972 = (0);
seq__41347_41939 = G__41969;
chunk__41349_41940 = G__41970;
count__41350_41941 = G__41971;
i__41351_41942 = G__41972;
continue;
}
} else {
}
}
break;
}

var G__41973 = seq__41337_41930;
var G__41974 = chunk__41344_41931;
var G__41975 = count__41345_41932;
var G__41976 = (i__41346_41933 + (1));
seq__41337_41930 = G__41973;
chunk__41344_41931 = G__41974;
count__41345_41932 = G__41975;
i__41346_41933 = G__41976;
continue;
} else {
var temp__5735__auto___41977 = cljs.core.seq(seq__41337_41930);
if(temp__5735__auto___41977){
var seq__41337_41979__$1 = temp__5735__auto___41977;
if(cljs.core.chunked_seq_QMARK_(seq__41337_41979__$1)){
var c__4609__auto___41981 = cljs.core.chunk_first(seq__41337_41979__$1);
var G__41982 = cljs.core.chunk_rest(seq__41337_41979__$1);
var G__41983 = c__4609__auto___41981;
var G__41984 = cljs.core.count(c__4609__auto___41981);
var G__41985 = (0);
seq__41337_41930 = G__41982;
chunk__41344_41931 = G__41983;
count__41345_41932 = G__41984;
i__41346_41933 = G__41985;
continue;
} else {
var vec__41425_41986 = cljs.core.first(seq__41337_41979__$1);
var orig_type_41987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41425_41986,(0),null);
var f_41988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41425_41986,(1),null);
var seq__41338_41991 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_41987,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_41987,cljs.core.identity])));
var chunk__41340_41992 = null;
var count__41341_41993 = (0);
var i__41342_41994 = (0);
while(true){
if((i__41342_41994 < count__41341_41993)){
var vec__41441_41995 = chunk__41340_41992.cljs$core$IIndexed$_nth$arity$2(null,i__41342_41994);
var actual_type_41996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41441_41995,(0),null);
var factory_41997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41441_41995,(1),null);
var canonical_f_41998 = (function (){var G__41445 = (factory_41997.cljs$core$IFn$_invoke$arity$1 ? factory_41997.cljs$core$IFn$_invoke$arity$1(f_41988) : factory_41997.call(null,f_41988));
var fexpr__41444 = (cljs.core.truth_(selector_41928)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41927,selector_41928):cljs.core.identity);
return (fexpr__41444.cljs$core$IFn$_invoke$arity$1 ? fexpr__41444.cljs$core$IFn$_invoke$arity$1(G__41445) : fexpr__41444.call(null,G__41445));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41927,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41928,actual_type_41996,f_41988], null),canonical_f_41998], 0));

if(cljs.core.truth_(elem_41927.addEventListener)){
elem_41927.addEventListener(cljs.core.name(actual_type_41996),canonical_f_41998);
} else {
elem_41927.attachEvent(cljs.core.name(actual_type_41996),canonical_f_41998);
}


var G__42004 = seq__41338_41991;
var G__42005 = chunk__41340_41992;
var G__42006 = count__41341_41993;
var G__42007 = (i__41342_41994 + (1));
seq__41338_41991 = G__42004;
chunk__41340_41992 = G__42005;
count__41341_41993 = G__42006;
i__41342_41994 = G__42007;
continue;
} else {
var temp__5735__auto___42008__$1 = cljs.core.seq(seq__41338_41991);
if(temp__5735__auto___42008__$1){
var seq__41338_42009__$1 = temp__5735__auto___42008__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41338_42009__$1)){
var c__4609__auto___42011 = cljs.core.chunk_first(seq__41338_42009__$1);
var G__42012 = cljs.core.chunk_rest(seq__41338_42009__$1);
var G__42013 = c__4609__auto___42011;
var G__42014 = cljs.core.count(c__4609__auto___42011);
var G__42015 = (0);
seq__41338_41991 = G__42012;
chunk__41340_41992 = G__42013;
count__41341_41993 = G__42014;
i__41342_41994 = G__42015;
continue;
} else {
var vec__41446_42020 = cljs.core.first(seq__41338_42009__$1);
var actual_type_42021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41446_42020,(0),null);
var factory_42022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41446_42020,(1),null);
var canonical_f_42023 = (function (){var G__41450 = (factory_42022.cljs$core$IFn$_invoke$arity$1 ? factory_42022.cljs$core$IFn$_invoke$arity$1(f_41988) : factory_42022.call(null,f_41988));
var fexpr__41449 = (cljs.core.truth_(selector_41928)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41927,selector_41928):cljs.core.identity);
return (fexpr__41449.cljs$core$IFn$_invoke$arity$1 ? fexpr__41449.cljs$core$IFn$_invoke$arity$1(G__41450) : fexpr__41449.call(null,G__41450));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41927,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41928,actual_type_42021,f_41988], null),canonical_f_42023], 0));

if(cljs.core.truth_(elem_41927.addEventListener)){
elem_41927.addEventListener(cljs.core.name(actual_type_42021),canonical_f_42023);
} else {
elem_41927.attachEvent(cljs.core.name(actual_type_42021),canonical_f_42023);
}


var G__42024 = cljs.core.next(seq__41338_42009__$1);
var G__42025 = null;
var G__42026 = (0);
var G__42027 = (0);
seq__41338_41991 = G__42024;
chunk__41340_41992 = G__42025;
count__41341_41993 = G__42026;
i__41342_41994 = G__42027;
continue;
}
} else {
}
}
break;
}

var G__42028 = cljs.core.next(seq__41337_41979__$1);
var G__42029 = null;
var G__42030 = (0);
var G__42031 = (0);
seq__41337_41930 = G__42028;
chunk__41344_41931 = G__42029;
count__41345_41932 = G__42030;
i__41346_41933 = G__42031;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq41332){
var G__41333 = cljs.core.first(seq41332);
var seq41332__$1 = cljs.core.next(seq41332);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41333,seq41332__$1);
}));

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42032 = arguments.length;
var i__4790__auto___42033 = (0);
while(true){
if((i__4790__auto___42033 < len__4789__auto___42032)){
args__4795__auto__.push((arguments[i__4790__auto___42033]));

var G__42034 = (i__4790__auto___42033 + (1));
i__4790__auto___42033 = G__42034;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__41453_42035 = dommy.core.elem_and_selector(elem_sel);
var elem_42036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41453_42035,(0),null);
var selector_42037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41453_42035,(1),null);
var seq__41456_42038 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__41463_42039 = null;
var count__41464_42040 = (0);
var i__41465_42041 = (0);
while(true){
if((i__41465_42041 < count__41464_42040)){
var vec__41509_42042 = chunk__41463_42039.cljs$core$IIndexed$_nth$arity$2(null,i__41465_42041);
var orig_type_42043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41509_42042,(0),null);
var f_42044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41509_42042,(1),null);
var seq__41466_42045 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_42043,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_42043,cljs.core.identity])));
var chunk__41468_42046 = null;
var count__41469_42047 = (0);
var i__41470_42048 = (0);
while(true){
if((i__41470_42048 < count__41469_42047)){
var vec__41522_42049 = chunk__41468_42046.cljs$core$IIndexed$_nth$arity$2(null,i__41470_42048);
var actual_type_42050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41522_42049,(0),null);
var __42051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41522_42049,(1),null);
var keys_42052 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42037,actual_type_42050,f_42044], null);
var canonical_f_42053 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42036),keys_42052);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42036,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42052], 0));

if(cljs.core.truth_(elem_42036.removeEventListener)){
elem_42036.removeEventListener(cljs.core.name(actual_type_42050),canonical_f_42053);
} else {
elem_42036.detachEvent(cljs.core.name(actual_type_42050),canonical_f_42053);
}


var G__42054 = seq__41466_42045;
var G__42055 = chunk__41468_42046;
var G__42056 = count__41469_42047;
var G__42057 = (i__41470_42048 + (1));
seq__41466_42045 = G__42054;
chunk__41468_42046 = G__42055;
count__41469_42047 = G__42056;
i__41470_42048 = G__42057;
continue;
} else {
var temp__5735__auto___42058 = cljs.core.seq(seq__41466_42045);
if(temp__5735__auto___42058){
var seq__41466_42059__$1 = temp__5735__auto___42058;
if(cljs.core.chunked_seq_QMARK_(seq__41466_42059__$1)){
var c__4609__auto___42060 = cljs.core.chunk_first(seq__41466_42059__$1);
var G__42061 = cljs.core.chunk_rest(seq__41466_42059__$1);
var G__42062 = c__4609__auto___42060;
var G__42063 = cljs.core.count(c__4609__auto___42060);
var G__42064 = (0);
seq__41466_42045 = G__42061;
chunk__41468_42046 = G__42062;
count__41469_42047 = G__42063;
i__41470_42048 = G__42064;
continue;
} else {
var vec__41525_42065 = cljs.core.first(seq__41466_42059__$1);
var actual_type_42066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41525_42065,(0),null);
var __42067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41525_42065,(1),null);
var keys_42068 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42037,actual_type_42066,f_42044], null);
var canonical_f_42069 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42036),keys_42068);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42036,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42068], 0));

if(cljs.core.truth_(elem_42036.removeEventListener)){
elem_42036.removeEventListener(cljs.core.name(actual_type_42066),canonical_f_42069);
} else {
elem_42036.detachEvent(cljs.core.name(actual_type_42066),canonical_f_42069);
}


var G__42070 = cljs.core.next(seq__41466_42059__$1);
var G__42071 = null;
var G__42072 = (0);
var G__42073 = (0);
seq__41466_42045 = G__42070;
chunk__41468_42046 = G__42071;
count__41469_42047 = G__42072;
i__41470_42048 = G__42073;
continue;
}
} else {
}
}
break;
}

var G__42074 = seq__41456_42038;
var G__42075 = chunk__41463_42039;
var G__42076 = count__41464_42040;
var G__42077 = (i__41465_42041 + (1));
seq__41456_42038 = G__42074;
chunk__41463_42039 = G__42075;
count__41464_42040 = G__42076;
i__41465_42041 = G__42077;
continue;
} else {
var temp__5735__auto___42078 = cljs.core.seq(seq__41456_42038);
if(temp__5735__auto___42078){
var seq__41456_42079__$1 = temp__5735__auto___42078;
if(cljs.core.chunked_seq_QMARK_(seq__41456_42079__$1)){
var c__4609__auto___42080 = cljs.core.chunk_first(seq__41456_42079__$1);
var G__42081 = cljs.core.chunk_rest(seq__41456_42079__$1);
var G__42082 = c__4609__auto___42080;
var G__42083 = cljs.core.count(c__4609__auto___42080);
var G__42084 = (0);
seq__41456_42038 = G__42081;
chunk__41463_42039 = G__42082;
count__41464_42040 = G__42083;
i__41465_42041 = G__42084;
continue;
} else {
var vec__41528_42085 = cljs.core.first(seq__41456_42079__$1);
var orig_type_42086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41528_42085,(0),null);
var f_42087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41528_42085,(1),null);
var seq__41457_42088 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_42086,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_42086,cljs.core.identity])));
var chunk__41459_42089 = null;
var count__41460_42090 = (0);
var i__41461_42091 = (0);
while(true){
if((i__41461_42091 < count__41460_42090)){
var vec__41537_42092 = chunk__41459_42089.cljs$core$IIndexed$_nth$arity$2(null,i__41461_42091);
var actual_type_42093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41537_42092,(0),null);
var __42094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41537_42092,(1),null);
var keys_42095 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42037,actual_type_42093,f_42087], null);
var canonical_f_42096 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42036),keys_42095);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42036,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42095], 0));

if(cljs.core.truth_(elem_42036.removeEventListener)){
elem_42036.removeEventListener(cljs.core.name(actual_type_42093),canonical_f_42096);
} else {
elem_42036.detachEvent(cljs.core.name(actual_type_42093),canonical_f_42096);
}


var G__42097 = seq__41457_42088;
var G__42098 = chunk__41459_42089;
var G__42099 = count__41460_42090;
var G__42100 = (i__41461_42091 + (1));
seq__41457_42088 = G__42097;
chunk__41459_42089 = G__42098;
count__41460_42090 = G__42099;
i__41461_42091 = G__42100;
continue;
} else {
var temp__5735__auto___42101__$1 = cljs.core.seq(seq__41457_42088);
if(temp__5735__auto___42101__$1){
var seq__41457_42102__$1 = temp__5735__auto___42101__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41457_42102__$1)){
var c__4609__auto___42103 = cljs.core.chunk_first(seq__41457_42102__$1);
var G__42104 = cljs.core.chunk_rest(seq__41457_42102__$1);
var G__42105 = c__4609__auto___42103;
var G__42106 = cljs.core.count(c__4609__auto___42103);
var G__42107 = (0);
seq__41457_42088 = G__42104;
chunk__41459_42089 = G__42105;
count__41460_42090 = G__42106;
i__41461_42091 = G__42107;
continue;
} else {
var vec__41541_42108 = cljs.core.first(seq__41457_42102__$1);
var actual_type_42109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41541_42108,(0),null);
var __42110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41541_42108,(1),null);
var keys_42111 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42037,actual_type_42109,f_42087], null);
var canonical_f_42112 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42036),keys_42111);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42036,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42111], 0));

if(cljs.core.truth_(elem_42036.removeEventListener)){
elem_42036.removeEventListener(cljs.core.name(actual_type_42109),canonical_f_42112);
} else {
elem_42036.detachEvent(cljs.core.name(actual_type_42109),canonical_f_42112);
}


var G__42113 = cljs.core.next(seq__41457_42102__$1);
var G__42114 = null;
var G__42115 = (0);
var G__42116 = (0);
seq__41457_42088 = G__42113;
chunk__41459_42089 = G__42114;
count__41460_42090 = G__42115;
i__41461_42091 = G__42116;
continue;
}
} else {
}
}
break;
}

var G__42117 = cljs.core.next(seq__41456_42079__$1);
var G__42118 = null;
var G__42119 = (0);
var G__42120 = (0);
seq__41456_42038 = G__42117;
chunk__41463_42039 = G__42118;
count__41464_42040 = G__42119;
i__41465_42041 = G__42120;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq41451){
var G__41452 = cljs.core.first(seq41451);
var seq41451__$1 = cljs.core.next(seq41451);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41452,seq41451__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42121 = arguments.length;
var i__4790__auto___42122 = (0);
while(true){
if((i__4790__auto___42122 < len__4789__auto___42121)){
args__4795__auto__.push((arguments[i__4790__auto___42122]));

var G__42123 = (i__4790__auto___42122 + (1));
i__4790__auto___42122 = G__42123;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__41550_42124 = dommy.core.elem_and_selector(elem_sel);
var elem_42125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41550_42124,(0),null);
var selector_42126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41550_42124,(1),null);
var seq__41553_42127 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__41554_42128 = null;
var count__41555_42129 = (0);
var i__41556_42130 = (0);
while(true){
if((i__41556_42130 < count__41555_42129)){
var vec__41563_42131 = chunk__41554_42128.cljs$core$IIndexed$_nth$arity$2(null,i__41556_42130);
var type_42132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41563_42131,(0),null);
var f_42133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41563_42131,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42132,((function (seq__41553_42127,chunk__41554_42128,count__41555_42129,i__41556_42130,vec__41563_42131,type_42132,f_42133,vec__41550_42124,elem_42125,selector_42126){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42132,dommy$core$this_fn], 0));

return (f_42133.cljs$core$IFn$_invoke$arity$1 ? f_42133.cljs$core$IFn$_invoke$arity$1(e) : f_42133.call(null,e));
});})(seq__41553_42127,chunk__41554_42128,count__41555_42129,i__41556_42130,vec__41563_42131,type_42132,f_42133,vec__41550_42124,elem_42125,selector_42126))
], 0));


var G__42134 = seq__41553_42127;
var G__42135 = chunk__41554_42128;
var G__42136 = count__41555_42129;
var G__42137 = (i__41556_42130 + (1));
seq__41553_42127 = G__42134;
chunk__41554_42128 = G__42135;
count__41555_42129 = G__42136;
i__41556_42130 = G__42137;
continue;
} else {
var temp__5735__auto___42138 = cljs.core.seq(seq__41553_42127);
if(temp__5735__auto___42138){
var seq__41553_42139__$1 = temp__5735__auto___42138;
if(cljs.core.chunked_seq_QMARK_(seq__41553_42139__$1)){
var c__4609__auto___42140 = cljs.core.chunk_first(seq__41553_42139__$1);
var G__42141 = cljs.core.chunk_rest(seq__41553_42139__$1);
var G__42142 = c__4609__auto___42140;
var G__42143 = cljs.core.count(c__4609__auto___42140);
var G__42144 = (0);
seq__41553_42127 = G__42141;
chunk__41554_42128 = G__42142;
count__41555_42129 = G__42143;
i__41556_42130 = G__42144;
continue;
} else {
var vec__41566_42145 = cljs.core.first(seq__41553_42139__$1);
var type_42146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41566_42145,(0),null);
var f_42147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41566_42145,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42146,((function (seq__41553_42127,chunk__41554_42128,count__41555_42129,i__41556_42130,vec__41566_42145,type_42146,f_42147,seq__41553_42139__$1,temp__5735__auto___42138,vec__41550_42124,elem_42125,selector_42126){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42146,dommy$core$this_fn], 0));

return (f_42147.cljs$core$IFn$_invoke$arity$1 ? f_42147.cljs$core$IFn$_invoke$arity$1(e) : f_42147.call(null,e));
});})(seq__41553_42127,chunk__41554_42128,count__41555_42129,i__41556_42130,vec__41566_42145,type_42146,f_42147,seq__41553_42139__$1,temp__5735__auto___42138,vec__41550_42124,elem_42125,selector_42126))
], 0));


var G__42148 = cljs.core.next(seq__41553_42139__$1);
var G__42149 = null;
var G__42150 = (0);
var G__42151 = (0);
seq__41553_42127 = G__42148;
chunk__41554_42128 = G__42149;
count__41555_42129 = G__42150;
i__41556_42130 = G__42151;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq41546){
var G__41547 = cljs.core.first(seq41546);
var seq41546__$1 = cljs.core.next(seq41546);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41547,seq41546__$1);
}));


//# sourceMappingURL=dommy.core.js.map
