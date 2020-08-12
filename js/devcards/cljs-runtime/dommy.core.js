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
var or__4126__auto__ = elem.textContent;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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
var G__40123 = arguments.length;
switch (G__40123) {
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
var G__40125 = arguments.length;
switch (G__40125) {
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
var G__40128 = arguments.length;
switch (G__40128) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__40126_SHARP_){
return (!((p1__40126_SHARP_ === base)));
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
var args__4742__auto__ = [];
var len__4736__auto___40580 = arguments.length;
var i__4737__auto___40581 = (0);
while(true){
if((i__4737__auto___40581 < len__4736__auto___40580)){
args__4742__auto__.push((arguments[i__4737__auto___40581]));

var G__40582 = (i__4737__auto___40581 + (1));
i__4737__auto___40581 = G__40582;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__40137_40584 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__40138_40585 = null;
var count__40139_40586 = (0);
var i__40140_40587 = (0);
while(true){
if((i__40140_40587 < count__40139_40586)){
var vec__40149_40588 = chunk__40138_40585.cljs$core$IIndexed$_nth$arity$2(null,i__40140_40587);
var k_40589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40149_40588,(0),null);
var v_40590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40149_40588,(1),null);
style.setProperty(dommy.utils.as_str(k_40589),v_40590);


var G__40591 = seq__40137_40584;
var G__40592 = chunk__40138_40585;
var G__40593 = count__40139_40586;
var G__40594 = (i__40140_40587 + (1));
seq__40137_40584 = G__40591;
chunk__40138_40585 = G__40592;
count__40139_40586 = G__40593;
i__40140_40587 = G__40594;
continue;
} else {
var temp__5735__auto___40595 = cljs.core.seq(seq__40137_40584);
if(temp__5735__auto___40595){
var seq__40137_40596__$1 = temp__5735__auto___40595;
if(cljs.core.chunked_seq_QMARK_(seq__40137_40596__$1)){
var c__4556__auto___40597 = cljs.core.chunk_first(seq__40137_40596__$1);
var G__40598 = cljs.core.chunk_rest(seq__40137_40596__$1);
var G__40599 = c__4556__auto___40597;
var G__40600 = cljs.core.count(c__4556__auto___40597);
var G__40601 = (0);
seq__40137_40584 = G__40598;
chunk__40138_40585 = G__40599;
count__40139_40586 = G__40600;
i__40140_40587 = G__40601;
continue;
} else {
var vec__40153_40602 = cljs.core.first(seq__40137_40596__$1);
var k_40603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40153_40602,(0),null);
var v_40604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40153_40602,(1),null);
style.setProperty(dommy.utils.as_str(k_40603),v_40604);


var G__40605 = cljs.core.next(seq__40137_40596__$1);
var G__40606 = null;
var G__40607 = (0);
var G__40608 = (0);
seq__40137_40584 = G__40605;
chunk__40138_40585 = G__40606;
count__40139_40586 = G__40607;
i__40140_40587 = G__40608;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq40134){
var G__40135 = cljs.core.first(seq40134);
var seq40134__$1 = cljs.core.next(seq40134);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40135,seq40134__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40609 = arguments.length;
var i__4737__auto___40610 = (0);
while(true){
if((i__4737__auto___40610 < len__4736__auto___40609)){
args__4742__auto__.push((arguments[i__4737__auto___40610]));

var G__40611 = (i__4737__auto___40610 + (1));
i__4737__auto___40610 = G__40611;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__40161_40612 = cljs.core.seq(keywords);
var chunk__40162_40613 = null;
var count__40163_40614 = (0);
var i__40164_40615 = (0);
while(true){
if((i__40164_40615 < count__40163_40614)){
var kw_40616 = chunk__40162_40613.cljs$core$IIndexed$_nth$arity$2(null,i__40164_40615);
style.removeProperty(dommy.utils.as_str(kw_40616));


var G__40617 = seq__40161_40612;
var G__40618 = chunk__40162_40613;
var G__40619 = count__40163_40614;
var G__40620 = (i__40164_40615 + (1));
seq__40161_40612 = G__40617;
chunk__40162_40613 = G__40618;
count__40163_40614 = G__40619;
i__40164_40615 = G__40620;
continue;
} else {
var temp__5735__auto___40621 = cljs.core.seq(seq__40161_40612);
if(temp__5735__auto___40621){
var seq__40161_40622__$1 = temp__5735__auto___40621;
if(cljs.core.chunked_seq_QMARK_(seq__40161_40622__$1)){
var c__4556__auto___40623 = cljs.core.chunk_first(seq__40161_40622__$1);
var G__40624 = cljs.core.chunk_rest(seq__40161_40622__$1);
var G__40625 = c__4556__auto___40623;
var G__40626 = cljs.core.count(c__4556__auto___40623);
var G__40627 = (0);
seq__40161_40612 = G__40624;
chunk__40162_40613 = G__40625;
count__40163_40614 = G__40626;
i__40164_40615 = G__40627;
continue;
} else {
var kw_40628 = cljs.core.first(seq__40161_40622__$1);
style.removeProperty(dommy.utils.as_str(kw_40628));


var G__40629 = cljs.core.next(seq__40161_40622__$1);
var G__40630 = null;
var G__40631 = (0);
var G__40632 = (0);
seq__40161_40612 = G__40629;
chunk__40162_40613 = G__40630;
count__40163_40614 = G__40631;
i__40164_40615 = G__40632;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq40158){
var G__40159 = cljs.core.first(seq40158);
var seq40158__$1 = cljs.core.next(seq40158);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40159,seq40158__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40633 = arguments.length;
var i__4737__auto___40634 = (0);
while(true){
if((i__4737__auto___40634 < len__4736__auto___40633)){
args__4742__auto__.push((arguments[i__4737__auto___40634]));

var G__40635 = (i__4737__auto___40634 + (1));
i__4737__auto___40634 = G__40635;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__40169_40636 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__40170_40637 = null;
var count__40171_40638 = (0);
var i__40172_40639 = (0);
while(true){
if((i__40172_40639 < count__40171_40638)){
var vec__40179_40640 = chunk__40170_40637.cljs$core$IIndexed$_nth$arity$2(null,i__40172_40639);
var k_40641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40179_40640,(0),null);
var v_40642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40179_40640,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_40641,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_40642),"px"].join('')], 0));


var G__40643 = seq__40169_40636;
var G__40644 = chunk__40170_40637;
var G__40645 = count__40171_40638;
var G__40646 = (i__40172_40639 + (1));
seq__40169_40636 = G__40643;
chunk__40170_40637 = G__40644;
count__40171_40638 = G__40645;
i__40172_40639 = G__40646;
continue;
} else {
var temp__5735__auto___40647 = cljs.core.seq(seq__40169_40636);
if(temp__5735__auto___40647){
var seq__40169_40648__$1 = temp__5735__auto___40647;
if(cljs.core.chunked_seq_QMARK_(seq__40169_40648__$1)){
var c__4556__auto___40649 = cljs.core.chunk_first(seq__40169_40648__$1);
var G__40650 = cljs.core.chunk_rest(seq__40169_40648__$1);
var G__40651 = c__4556__auto___40649;
var G__40652 = cljs.core.count(c__4556__auto___40649);
var G__40653 = (0);
seq__40169_40636 = G__40650;
chunk__40170_40637 = G__40651;
count__40171_40638 = G__40652;
i__40172_40639 = G__40653;
continue;
} else {
var vec__40182_40654 = cljs.core.first(seq__40169_40648__$1);
var k_40655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40182_40654,(0),null);
var v_40656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40182_40654,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_40655,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_40656),"px"].join('')], 0));


var G__40657 = cljs.core.next(seq__40169_40648__$1);
var G__40658 = null;
var G__40659 = (0);
var G__40660 = (0);
seq__40169_40636 = G__40657;
chunk__40170_40637 = G__40658;
count__40171_40638 = G__40659;
i__40172_40639 = G__40660;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq40167){
var G__40168 = cljs.core.first(seq40167);
var seq40167__$1 = cljs.core.next(seq40167);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40168,seq40167__$1);
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
var G__40190 = arguments.length;
switch (G__40190) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___40662 = arguments.length;
var i__4737__auto___40663 = (0);
while(true){
if((i__4737__auto___40663 < len__4736__auto___40662)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40663]));

var G__40664 = (i__4737__auto___40663 + (1));
i__4737__auto___40663 = G__40664;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4758__auto__);

}
});

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__40191 = elem;
(G__40191[k__$1] = v);

return G__40191;
} else {
var G__40192 = elem;
G__40192.setAttribute(k__$1,v);

return G__40192;
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

var seq__40193_40665 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__40194_40666 = null;
var count__40195_40667 = (0);
var i__40196_40668 = (0);
while(true){
if((i__40196_40668 < count__40195_40667)){
var vec__40203_40669 = chunk__40194_40666.cljs$core$IIndexed$_nth$arity$2(null,i__40196_40668);
var k_40670__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40203_40669,(0),null);
var v_40671__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40203_40669,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_40670__$1,v_40671__$1);


var G__40672 = seq__40193_40665;
var G__40673 = chunk__40194_40666;
var G__40674 = count__40195_40667;
var G__40675 = (i__40196_40668 + (1));
seq__40193_40665 = G__40672;
chunk__40194_40666 = G__40673;
count__40195_40667 = G__40674;
i__40196_40668 = G__40675;
continue;
} else {
var temp__5735__auto___40676 = cljs.core.seq(seq__40193_40665);
if(temp__5735__auto___40676){
var seq__40193_40677__$1 = temp__5735__auto___40676;
if(cljs.core.chunked_seq_QMARK_(seq__40193_40677__$1)){
var c__4556__auto___40678 = cljs.core.chunk_first(seq__40193_40677__$1);
var G__40679 = cljs.core.chunk_rest(seq__40193_40677__$1);
var G__40680 = c__4556__auto___40678;
var G__40681 = cljs.core.count(c__4556__auto___40678);
var G__40682 = (0);
seq__40193_40665 = G__40679;
chunk__40194_40666 = G__40680;
count__40195_40667 = G__40681;
i__40196_40668 = G__40682;
continue;
} else {
var vec__40206_40683 = cljs.core.first(seq__40193_40677__$1);
var k_40684__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40206_40683,(0),null);
var v_40685__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40206_40683,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_40684__$1,v_40685__$1);


var G__40686 = cljs.core.next(seq__40193_40677__$1);
var G__40687 = null;
var G__40688 = (0);
var G__40689 = (0);
seq__40193_40665 = G__40686;
chunk__40194_40666 = G__40687;
count__40195_40667 = G__40688;
i__40196_40668 = G__40689;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq40186){
var G__40187 = cljs.core.first(seq40186);
var seq40186__$1 = cljs.core.next(seq40186);
var G__40188 = cljs.core.first(seq40186__$1);
var seq40186__$2 = cljs.core.next(seq40186__$1);
var G__40189 = cljs.core.first(seq40186__$2);
var seq40186__$3 = cljs.core.next(seq40186__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40187,G__40188,G__40189,seq40186__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__40213 = arguments.length;
switch (G__40213) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___40691 = arguments.length;
var i__4737__auto___40692 = (0);
while(true){
if((i__4737__auto___40692 < len__4736__auto___40691)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40692]));

var G__40693 = (i__4737__auto___40692 + (1));
i__4737__auto___40692 = G__40693;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_40694__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__40214 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__40214.cljs$core$IFn$_invoke$arity$1 ? fexpr__40214.cljs$core$IFn$_invoke$arity$1(k_40694__$1) : fexpr__40214.call(null,k_40694__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_40694__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__40215_40695 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__40216_40696 = null;
var count__40217_40697 = (0);
var i__40218_40698 = (0);
while(true){
if((i__40218_40698 < count__40217_40697)){
var k_40699__$1 = chunk__40216_40696.cljs$core$IIndexed$_nth$arity$2(null,i__40218_40698);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_40699__$1);


var G__40700 = seq__40215_40695;
var G__40701 = chunk__40216_40696;
var G__40702 = count__40217_40697;
var G__40703 = (i__40218_40698 + (1));
seq__40215_40695 = G__40700;
chunk__40216_40696 = G__40701;
count__40217_40697 = G__40702;
i__40218_40698 = G__40703;
continue;
} else {
var temp__5735__auto___40704 = cljs.core.seq(seq__40215_40695);
if(temp__5735__auto___40704){
var seq__40215_40705__$1 = temp__5735__auto___40704;
if(cljs.core.chunked_seq_QMARK_(seq__40215_40705__$1)){
var c__4556__auto___40706 = cljs.core.chunk_first(seq__40215_40705__$1);
var G__40707 = cljs.core.chunk_rest(seq__40215_40705__$1);
var G__40708 = c__4556__auto___40706;
var G__40709 = cljs.core.count(c__4556__auto___40706);
var G__40710 = (0);
seq__40215_40695 = G__40707;
chunk__40216_40696 = G__40708;
count__40217_40697 = G__40709;
i__40218_40698 = G__40710;
continue;
} else {
var k_40711__$1 = cljs.core.first(seq__40215_40705__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_40711__$1);


var G__40712 = cljs.core.next(seq__40215_40705__$1);
var G__40713 = null;
var G__40714 = (0);
var G__40715 = (0);
seq__40215_40695 = G__40712;
chunk__40216_40696 = G__40713;
count__40217_40697 = G__40714;
i__40218_40698 = G__40715;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq40210){
var G__40211 = cljs.core.first(seq40210);
var seq40210__$1 = cljs.core.next(seq40210);
var G__40212 = cljs.core.first(seq40210__$1);
var seq40210__$2 = cljs.core.next(seq40210__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40211,G__40212,seq40210__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__40220 = arguments.length;
switch (G__40220) {
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
var G__40225 = arguments.length;
switch (G__40225) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___40718 = arguments.length;
var i__4737__auto___40719 = (0);
while(true){
if((i__4737__auto___40719 < len__4736__auto___40718)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40719]));

var G__40720 = (i__4737__auto___40719 + (1));
i__4737__auto___40719 = G__40720;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__5733__auto___40721 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___40721)){
var class_list_40722 = temp__5733__auto___40721;
var seq__40226_40723 = cljs.core.seq(classes__$1);
var chunk__40227_40724 = null;
var count__40228_40725 = (0);
var i__40229_40726 = (0);
while(true){
if((i__40229_40726 < count__40228_40725)){
var c_40727 = chunk__40227_40724.cljs$core$IIndexed$_nth$arity$2(null,i__40229_40726);
class_list_40722.add(c_40727);


var G__40728 = seq__40226_40723;
var G__40729 = chunk__40227_40724;
var G__40730 = count__40228_40725;
var G__40731 = (i__40229_40726 + (1));
seq__40226_40723 = G__40728;
chunk__40227_40724 = G__40729;
count__40228_40725 = G__40730;
i__40229_40726 = G__40731;
continue;
} else {
var temp__5735__auto___40732 = cljs.core.seq(seq__40226_40723);
if(temp__5735__auto___40732){
var seq__40226_40733__$1 = temp__5735__auto___40732;
if(cljs.core.chunked_seq_QMARK_(seq__40226_40733__$1)){
var c__4556__auto___40734 = cljs.core.chunk_first(seq__40226_40733__$1);
var G__40735 = cljs.core.chunk_rest(seq__40226_40733__$1);
var G__40736 = c__4556__auto___40734;
var G__40737 = cljs.core.count(c__4556__auto___40734);
var G__40738 = (0);
seq__40226_40723 = G__40735;
chunk__40227_40724 = G__40736;
count__40228_40725 = G__40737;
i__40229_40726 = G__40738;
continue;
} else {
var c_40739 = cljs.core.first(seq__40226_40733__$1);
class_list_40722.add(c_40739);


var G__40740 = cljs.core.next(seq__40226_40733__$1);
var G__40741 = null;
var G__40742 = (0);
var G__40743 = (0);
seq__40226_40723 = G__40740;
chunk__40227_40724 = G__40741;
count__40228_40725 = G__40742;
i__40229_40726 = G__40743;
continue;
}
} else {
}
}
break;
}
} else {
var seq__40230_40744 = cljs.core.seq(classes__$1);
var chunk__40231_40745 = null;
var count__40232_40746 = (0);
var i__40233_40747 = (0);
while(true){
if((i__40233_40747 < count__40232_40746)){
var c_40748 = chunk__40231_40745.cljs$core$IIndexed$_nth$arity$2(null,i__40233_40747);
var class_name_40749 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_40749,c_40748))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_40749 === ""))?c_40748:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_40749)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_40748)].join('')));
}


var G__40751 = seq__40230_40744;
var G__40752 = chunk__40231_40745;
var G__40753 = count__40232_40746;
var G__40754 = (i__40233_40747 + (1));
seq__40230_40744 = G__40751;
chunk__40231_40745 = G__40752;
count__40232_40746 = G__40753;
i__40233_40747 = G__40754;
continue;
} else {
var temp__5735__auto___40756 = cljs.core.seq(seq__40230_40744);
if(temp__5735__auto___40756){
var seq__40230_40757__$1 = temp__5735__auto___40756;
if(cljs.core.chunked_seq_QMARK_(seq__40230_40757__$1)){
var c__4556__auto___40758 = cljs.core.chunk_first(seq__40230_40757__$1);
var G__40759 = cljs.core.chunk_rest(seq__40230_40757__$1);
var G__40760 = c__4556__auto___40758;
var G__40761 = cljs.core.count(c__4556__auto___40758);
var G__40762 = (0);
seq__40230_40744 = G__40759;
chunk__40231_40745 = G__40760;
count__40232_40746 = G__40761;
i__40233_40747 = G__40762;
continue;
} else {
var c_40763 = cljs.core.first(seq__40230_40757__$1);
var class_name_40764 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_40764,c_40763))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_40764 === ""))?c_40763:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_40764)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_40763)].join('')));
}


var G__40765 = cljs.core.next(seq__40230_40757__$1);
var G__40766 = null;
var G__40767 = (0);
var G__40768 = (0);
seq__40230_40744 = G__40765;
chunk__40231_40745 = G__40766;
count__40232_40746 = G__40767;
i__40233_40747 = G__40768;
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
var seq__40234_40769 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__40235_40770 = null;
var count__40236_40771 = (0);
var i__40237_40772 = (0);
while(true){
if((i__40237_40772 < count__40236_40771)){
var c_40773 = chunk__40235_40770.cljs$core$IIndexed$_nth$arity$2(null,i__40237_40772);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_40773);


var G__40774 = seq__40234_40769;
var G__40775 = chunk__40235_40770;
var G__40776 = count__40236_40771;
var G__40777 = (i__40237_40772 + (1));
seq__40234_40769 = G__40774;
chunk__40235_40770 = G__40775;
count__40236_40771 = G__40776;
i__40237_40772 = G__40777;
continue;
} else {
var temp__5735__auto___40778 = cljs.core.seq(seq__40234_40769);
if(temp__5735__auto___40778){
var seq__40234_40779__$1 = temp__5735__auto___40778;
if(cljs.core.chunked_seq_QMARK_(seq__40234_40779__$1)){
var c__4556__auto___40780 = cljs.core.chunk_first(seq__40234_40779__$1);
var G__40781 = cljs.core.chunk_rest(seq__40234_40779__$1);
var G__40782 = c__4556__auto___40780;
var G__40783 = cljs.core.count(c__4556__auto___40780);
var G__40784 = (0);
seq__40234_40769 = G__40781;
chunk__40235_40770 = G__40782;
count__40236_40771 = G__40783;
i__40237_40772 = G__40784;
continue;
} else {
var c_40785 = cljs.core.first(seq__40234_40779__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_40785);


var G__40786 = cljs.core.next(seq__40234_40779__$1);
var G__40787 = null;
var G__40788 = (0);
var G__40789 = (0);
seq__40234_40769 = G__40786;
chunk__40235_40770 = G__40787;
count__40236_40771 = G__40788;
i__40237_40772 = G__40789;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq40222){
var G__40223 = cljs.core.first(seq40222);
var seq40222__$1 = cljs.core.next(seq40222);
var G__40224 = cljs.core.first(seq40222__$1);
var seq40222__$2 = cljs.core.next(seq40222__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40223,G__40224,seq40222__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__40242 = arguments.length;
switch (G__40242) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___40791 = arguments.length;
var i__4737__auto___40792 = (0);
while(true){
if((i__4737__auto___40792 < len__4736__auto___40791)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40792]));

var G__40793 = (i__4737__auto___40792 + (1));
i__4737__auto___40792 = G__40793;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___40795 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___40795)){
var class_list_40796 = temp__5733__auto___40795;
class_list_40796.remove(c__$1);
} else {
var class_name_40798 = dommy.core.class$(elem);
var new_class_name_40799 = dommy.utils.remove_class_str(class_name_40798,c__$1);
if((class_name_40798 === new_class_name_40799)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_40799);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__40243 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__40244 = null;
var count__40245 = (0);
var i__40246 = (0);
while(true){
if((i__40246 < count__40245)){
var c = chunk__40244.cljs$core$IIndexed$_nth$arity$2(null,i__40246);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__40800 = seq__40243;
var G__40801 = chunk__40244;
var G__40802 = count__40245;
var G__40803 = (i__40246 + (1));
seq__40243 = G__40800;
chunk__40244 = G__40801;
count__40245 = G__40802;
i__40246 = G__40803;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40243);
if(temp__5735__auto__){
var seq__40243__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40243__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40243__$1);
var G__40804 = cljs.core.chunk_rest(seq__40243__$1);
var G__40805 = c__4556__auto__;
var G__40806 = cljs.core.count(c__4556__auto__);
var G__40807 = (0);
seq__40243 = G__40804;
chunk__40244 = G__40805;
count__40245 = G__40806;
i__40246 = G__40807;
continue;
} else {
var c = cljs.core.first(seq__40243__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__40808 = cljs.core.next(seq__40243__$1);
var G__40809 = null;
var G__40810 = (0);
var G__40811 = (0);
seq__40243 = G__40808;
chunk__40244 = G__40809;
count__40245 = G__40810;
i__40246 = G__40811;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq40239){
var G__40240 = cljs.core.first(seq40239);
var seq40239__$1 = cljs.core.next(seq40239);
var G__40241 = cljs.core.first(seq40239__$1);
var seq40239__$2 = cljs.core.next(seq40239__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40240,G__40241,seq40239__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__40248 = arguments.length;
switch (G__40248) {
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
var temp__5733__auto___40815 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___40815)){
var class_list_40816 = temp__5733__auto___40815;
class_list_40816.toggle(c__$1);
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
var G__40250 = arguments.length;
switch (G__40250) {
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
var G__40252 = arguments.length;
switch (G__40252) {
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
var G__40258 = arguments.length;
switch (G__40258) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___40820 = arguments.length;
var i__4737__auto___40821 = (0);
while(true){
if((i__4737__auto___40821 < len__4736__auto___40820)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40821]));

var G__40822 = (i__4737__auto___40821 + (1));
i__4737__auto___40821 = G__40822;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__40259 = parent;
G__40259.appendChild(child);

return G__40259;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__40260_40823 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__40261_40824 = null;
var count__40262_40825 = (0);
var i__40263_40826 = (0);
while(true){
if((i__40263_40826 < count__40262_40825)){
var c_40827 = chunk__40261_40824.cljs$core$IIndexed$_nth$arity$2(null,i__40263_40826);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_40827);


var G__40828 = seq__40260_40823;
var G__40829 = chunk__40261_40824;
var G__40830 = count__40262_40825;
var G__40831 = (i__40263_40826 + (1));
seq__40260_40823 = G__40828;
chunk__40261_40824 = G__40829;
count__40262_40825 = G__40830;
i__40263_40826 = G__40831;
continue;
} else {
var temp__5735__auto___40832 = cljs.core.seq(seq__40260_40823);
if(temp__5735__auto___40832){
var seq__40260_40833__$1 = temp__5735__auto___40832;
if(cljs.core.chunked_seq_QMARK_(seq__40260_40833__$1)){
var c__4556__auto___40834 = cljs.core.chunk_first(seq__40260_40833__$1);
var G__40835 = cljs.core.chunk_rest(seq__40260_40833__$1);
var G__40836 = c__4556__auto___40834;
var G__40837 = cljs.core.count(c__4556__auto___40834);
var G__40838 = (0);
seq__40260_40823 = G__40835;
chunk__40261_40824 = G__40836;
count__40262_40825 = G__40837;
i__40263_40826 = G__40838;
continue;
} else {
var c_40839 = cljs.core.first(seq__40260_40833__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_40839);


var G__40840 = cljs.core.next(seq__40260_40833__$1);
var G__40841 = null;
var G__40842 = (0);
var G__40843 = (0);
seq__40260_40823 = G__40840;
chunk__40261_40824 = G__40841;
count__40262_40825 = G__40842;
i__40263_40826 = G__40843;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq40255){
var G__40256 = cljs.core.first(seq40255);
var seq40255__$1 = cljs.core.next(seq40255);
var G__40257 = cljs.core.first(seq40255__$1);
var seq40255__$2 = cljs.core.next(seq40255__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40256,G__40257,seq40255__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__40270 = arguments.length;
switch (G__40270) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___40845 = arguments.length;
var i__4737__auto___40846 = (0);
while(true){
if((i__4737__auto___40846 < len__4736__auto___40845)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40846]));

var G__40847 = (i__4737__auto___40846 + (1));
i__4737__auto___40846 = G__40847;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__40271 = parent;
G__40271.insertBefore(child,parent.firstChild);

return G__40271;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__40272_40848 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__40273_40849 = null;
var count__40274_40850 = (0);
var i__40275_40851 = (0);
while(true){
if((i__40275_40851 < count__40274_40850)){
var c_40852 = chunk__40273_40849.cljs$core$IIndexed$_nth$arity$2(null,i__40275_40851);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_40852);


var G__40853 = seq__40272_40848;
var G__40854 = chunk__40273_40849;
var G__40855 = count__40274_40850;
var G__40856 = (i__40275_40851 + (1));
seq__40272_40848 = G__40853;
chunk__40273_40849 = G__40854;
count__40274_40850 = G__40855;
i__40275_40851 = G__40856;
continue;
} else {
var temp__5735__auto___40857 = cljs.core.seq(seq__40272_40848);
if(temp__5735__auto___40857){
var seq__40272_40858__$1 = temp__5735__auto___40857;
if(cljs.core.chunked_seq_QMARK_(seq__40272_40858__$1)){
var c__4556__auto___40859 = cljs.core.chunk_first(seq__40272_40858__$1);
var G__40860 = cljs.core.chunk_rest(seq__40272_40858__$1);
var G__40861 = c__4556__auto___40859;
var G__40862 = cljs.core.count(c__4556__auto___40859);
var G__40863 = (0);
seq__40272_40848 = G__40860;
chunk__40273_40849 = G__40861;
count__40274_40850 = G__40862;
i__40275_40851 = G__40863;
continue;
} else {
var c_40864 = cljs.core.first(seq__40272_40858__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_40864);


var G__40865 = cljs.core.next(seq__40272_40858__$1);
var G__40866 = null;
var G__40867 = (0);
var G__40868 = (0);
seq__40272_40848 = G__40865;
chunk__40273_40849 = G__40866;
count__40274_40850 = G__40867;
i__40275_40851 = G__40868;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq40267){
var G__40268 = cljs.core.first(seq40267);
var seq40267__$1 = cljs.core.next(seq40267);
var G__40269 = cljs.core.first(seq40267__$1);
var seq40267__$2 = cljs.core.next(seq40267__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40268,G__40269,seq40267__$2);
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
var temp__5733__auto___40869 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___40869)){
var next_40870 = temp__5733__auto___40869;
dommy.core.insert_before_BANG_(elem,next_40870);
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
var G__40277 = arguments.length;
switch (G__40277) {
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
var G__40278 = p;
G__40278.removeChild(elem);

return G__40278;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__40279){
var vec__40280 = p__40279;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40280,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40280,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__4126__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__4115__auto__ = related_target;
if(cljs.core.truth_(and__4115__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__4115__auto__;
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
if(cljs.core.truth_((function (){var and__4115__auto__ = selected_target;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__4115__auto__;
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
var or__4126__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40872 = arguments.length;
var i__4737__auto___40873 = (0);
while(true){
if((i__4737__auto___40873 < len__4736__auto___40872)){
args__4742__auto__.push((arguments[i__4737__auto___40873]));

var G__40874 = (i__4737__auto___40873 + (1));
i__4737__auto___40873 = G__40874;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return (elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args));
}));

(dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq40283){
var G__40284 = cljs.core.first(seq40283);
var seq40283__$1 = cljs.core.next(seq40283);
var G__40285 = cljs.core.first(seq40283__$1);
var seq40283__$2 = cljs.core.next(seq40283__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40284,G__40285,seq40283__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest)(elem_sel);
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
var args__4742__auto__ = [];
var len__4736__auto___40875 = arguments.length;
var i__4737__auto___40876 = (0);
while(true){
if((i__4737__auto___40876 < len__4736__auto___40875)){
args__4742__auto__.push((arguments[i__4737__auto___40876]));

var G__40877 = (i__4737__auto___40876 + (1));
i__4737__auto___40876 = G__40877;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__40288_40878 = dommy.core.elem_and_selector(elem_sel);
var elem_40879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40288_40878,(0),null);
var selector_40880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40288_40878,(1),null);
var seq__40291_40881 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__40298_40882 = null;
var count__40299_40883 = (0);
var i__40300_40884 = (0);
while(true){
if((i__40300_40884 < count__40299_40883)){
var vec__40356_40886 = chunk__40298_40882.cljs$core$IIndexed$_nth$arity$2(null,i__40300_40884);
var orig_type_40887 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40356_40886,(0),null);
var f_40888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40356_40886,(1),null);
var seq__40301_40889 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_40887,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_40887,cljs.core.identity])));
var chunk__40303_40890 = null;
var count__40304_40891 = (0);
var i__40305_40892 = (0);
while(true){
if((i__40305_40892 < count__40304_40891)){
var vec__40369_40894 = chunk__40303_40890.cljs$core$IIndexed$_nth$arity$2(null,i__40305_40892);
var actual_type_40895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40369_40894,(0),null);
var factory_40896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40369_40894,(1),null);
var canonical_f_40897 = (function (){var G__40373 = (factory_40896.cljs$core$IFn$_invoke$arity$1 ? factory_40896.cljs$core$IFn$_invoke$arity$1(f_40888) : factory_40896.call(null,f_40888));
var fexpr__40372 = (cljs.core.truth_(selector_40880)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_40879,selector_40880):cljs.core.identity);
return (fexpr__40372.cljs$core$IFn$_invoke$arity$1 ? fexpr__40372.cljs$core$IFn$_invoke$arity$1(G__40373) : fexpr__40372.call(null,G__40373));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40879,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40880,actual_type_40895,f_40888], null),canonical_f_40897], 0));

if(cljs.core.truth_(elem_40879.addEventListener)){
elem_40879.addEventListener(cljs.core.name(actual_type_40895),canonical_f_40897);
} else {
elem_40879.attachEvent(cljs.core.name(actual_type_40895),canonical_f_40897);
}


var G__40898 = seq__40301_40889;
var G__40899 = chunk__40303_40890;
var G__40900 = count__40304_40891;
var G__40901 = (i__40305_40892 + (1));
seq__40301_40889 = G__40898;
chunk__40303_40890 = G__40899;
count__40304_40891 = G__40900;
i__40305_40892 = G__40901;
continue;
} else {
var temp__5735__auto___40902 = cljs.core.seq(seq__40301_40889);
if(temp__5735__auto___40902){
var seq__40301_40903__$1 = temp__5735__auto___40902;
if(cljs.core.chunked_seq_QMARK_(seq__40301_40903__$1)){
var c__4556__auto___40904 = cljs.core.chunk_first(seq__40301_40903__$1);
var G__40906 = cljs.core.chunk_rest(seq__40301_40903__$1);
var G__40907 = c__4556__auto___40904;
var G__40908 = cljs.core.count(c__4556__auto___40904);
var G__40909 = (0);
seq__40301_40889 = G__40906;
chunk__40303_40890 = G__40907;
count__40304_40891 = G__40908;
i__40305_40892 = G__40909;
continue;
} else {
var vec__40374_40910 = cljs.core.first(seq__40301_40903__$1);
var actual_type_40911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40374_40910,(0),null);
var factory_40912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40374_40910,(1),null);
var canonical_f_40913 = (function (){var G__40381 = (factory_40912.cljs$core$IFn$_invoke$arity$1 ? factory_40912.cljs$core$IFn$_invoke$arity$1(f_40888) : factory_40912.call(null,f_40888));
var fexpr__40380 = (cljs.core.truth_(selector_40880)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_40879,selector_40880):cljs.core.identity);
return (fexpr__40380.cljs$core$IFn$_invoke$arity$1 ? fexpr__40380.cljs$core$IFn$_invoke$arity$1(G__40381) : fexpr__40380.call(null,G__40381));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40879,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40880,actual_type_40911,f_40888], null),canonical_f_40913], 0));

if(cljs.core.truth_(elem_40879.addEventListener)){
elem_40879.addEventListener(cljs.core.name(actual_type_40911),canonical_f_40913);
} else {
elem_40879.attachEvent(cljs.core.name(actual_type_40911),canonical_f_40913);
}


var G__40917 = cljs.core.next(seq__40301_40903__$1);
var G__40918 = null;
var G__40919 = (0);
var G__40920 = (0);
seq__40301_40889 = G__40917;
chunk__40303_40890 = G__40918;
count__40304_40891 = G__40919;
i__40305_40892 = G__40920;
continue;
}
} else {
}
}
break;
}

var G__40921 = seq__40291_40881;
var G__40922 = chunk__40298_40882;
var G__40923 = count__40299_40883;
var G__40924 = (i__40300_40884 + (1));
seq__40291_40881 = G__40921;
chunk__40298_40882 = G__40922;
count__40299_40883 = G__40923;
i__40300_40884 = G__40924;
continue;
} else {
var temp__5735__auto___40925 = cljs.core.seq(seq__40291_40881);
if(temp__5735__auto___40925){
var seq__40291_40926__$1 = temp__5735__auto___40925;
if(cljs.core.chunked_seq_QMARK_(seq__40291_40926__$1)){
var c__4556__auto___40927 = cljs.core.chunk_first(seq__40291_40926__$1);
var G__40928 = cljs.core.chunk_rest(seq__40291_40926__$1);
var G__40929 = c__4556__auto___40927;
var G__40930 = cljs.core.count(c__4556__auto___40927);
var G__40931 = (0);
seq__40291_40881 = G__40928;
chunk__40298_40882 = G__40929;
count__40299_40883 = G__40930;
i__40300_40884 = G__40931;
continue;
} else {
var vec__40382_40932 = cljs.core.first(seq__40291_40926__$1);
var orig_type_40933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40382_40932,(0),null);
var f_40934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40382_40932,(1),null);
var seq__40292_40936 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_40933,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_40933,cljs.core.identity])));
var chunk__40294_40937 = null;
var count__40295_40938 = (0);
var i__40296_40939 = (0);
while(true){
if((i__40296_40939 < count__40295_40938)){
var vec__40395_40944 = chunk__40294_40937.cljs$core$IIndexed$_nth$arity$2(null,i__40296_40939);
var actual_type_40945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40395_40944,(0),null);
var factory_40946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40395_40944,(1),null);
var canonical_f_40947 = (function (){var G__40399 = (factory_40946.cljs$core$IFn$_invoke$arity$1 ? factory_40946.cljs$core$IFn$_invoke$arity$1(f_40934) : factory_40946.call(null,f_40934));
var fexpr__40398 = (cljs.core.truth_(selector_40880)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_40879,selector_40880):cljs.core.identity);
return (fexpr__40398.cljs$core$IFn$_invoke$arity$1 ? fexpr__40398.cljs$core$IFn$_invoke$arity$1(G__40399) : fexpr__40398.call(null,G__40399));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40879,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40880,actual_type_40945,f_40934], null),canonical_f_40947], 0));

if(cljs.core.truth_(elem_40879.addEventListener)){
elem_40879.addEventListener(cljs.core.name(actual_type_40945),canonical_f_40947);
} else {
elem_40879.attachEvent(cljs.core.name(actual_type_40945),canonical_f_40947);
}


var G__40949 = seq__40292_40936;
var G__40950 = chunk__40294_40937;
var G__40951 = count__40295_40938;
var G__40952 = (i__40296_40939 + (1));
seq__40292_40936 = G__40949;
chunk__40294_40937 = G__40950;
count__40295_40938 = G__40951;
i__40296_40939 = G__40952;
continue;
} else {
var temp__5735__auto___40954__$1 = cljs.core.seq(seq__40292_40936);
if(temp__5735__auto___40954__$1){
var seq__40292_40955__$1 = temp__5735__auto___40954__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40292_40955__$1)){
var c__4556__auto___40956 = cljs.core.chunk_first(seq__40292_40955__$1);
var G__40958 = cljs.core.chunk_rest(seq__40292_40955__$1);
var G__40959 = c__4556__auto___40956;
var G__40960 = cljs.core.count(c__4556__auto___40956);
var G__40961 = (0);
seq__40292_40936 = G__40958;
chunk__40294_40937 = G__40959;
count__40295_40938 = G__40960;
i__40296_40939 = G__40961;
continue;
} else {
var vec__40400_40963 = cljs.core.first(seq__40292_40955__$1);
var actual_type_40964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40400_40963,(0),null);
var factory_40965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40400_40963,(1),null);
var canonical_f_40966 = (function (){var G__40404 = (factory_40965.cljs$core$IFn$_invoke$arity$1 ? factory_40965.cljs$core$IFn$_invoke$arity$1(f_40934) : factory_40965.call(null,f_40934));
var fexpr__40403 = (cljs.core.truth_(selector_40880)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_40879,selector_40880):cljs.core.identity);
return (fexpr__40403.cljs$core$IFn$_invoke$arity$1 ? fexpr__40403.cljs$core$IFn$_invoke$arity$1(G__40404) : fexpr__40403.call(null,G__40404));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40879,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40880,actual_type_40964,f_40934], null),canonical_f_40966], 0));

if(cljs.core.truth_(elem_40879.addEventListener)){
elem_40879.addEventListener(cljs.core.name(actual_type_40964),canonical_f_40966);
} else {
elem_40879.attachEvent(cljs.core.name(actual_type_40964),canonical_f_40966);
}


var G__40969 = cljs.core.next(seq__40292_40955__$1);
var G__40970 = null;
var G__40971 = (0);
var G__40972 = (0);
seq__40292_40936 = G__40969;
chunk__40294_40937 = G__40970;
count__40295_40938 = G__40971;
i__40296_40939 = G__40972;
continue;
}
} else {
}
}
break;
}

var G__40975 = cljs.core.next(seq__40291_40926__$1);
var G__40976 = null;
var G__40977 = (0);
var G__40978 = (0);
seq__40291_40881 = G__40975;
chunk__40298_40882 = G__40976;
count__40299_40883 = G__40977;
i__40300_40884 = G__40978;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq40286){
var G__40287 = cljs.core.first(seq40286);
var seq40286__$1 = cljs.core.next(seq40286);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40287,seq40286__$1);
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
var args__4742__auto__ = [];
var len__4736__auto___40979 = arguments.length;
var i__4737__auto___40980 = (0);
while(true){
if((i__4737__auto___40980 < len__4736__auto___40979)){
args__4742__auto__.push((arguments[i__4737__auto___40980]));

var G__40982 = (i__4737__auto___40980 + (1));
i__4737__auto___40980 = G__40982;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__40407_40987 = dommy.core.elem_and_selector(elem_sel);
var elem_40988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40407_40987,(0),null);
var selector_40989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40407_40987,(1),null);
var seq__40410_40990 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__40417_40991 = null;
var count__40418_40992 = (0);
var i__40419_40993 = (0);
while(true){
if((i__40419_40993 < count__40418_40992)){
var vec__40467_40995 = chunk__40417_40991.cljs$core$IIndexed$_nth$arity$2(null,i__40419_40993);
var orig_type_40996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40467_40995,(0),null);
var f_40997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40467_40995,(1),null);
var seq__40420_41002 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_40996,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_40996,cljs.core.identity])));
var chunk__40422_41003 = null;
var count__40423_41004 = (0);
var i__40424_41005 = (0);
while(true){
if((i__40424_41005 < count__40423_41004)){
var vec__40476_41006 = chunk__40422_41003.cljs$core$IIndexed$_nth$arity$2(null,i__40424_41005);
var actual_type_41007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40476_41006,(0),null);
var __41008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40476_41006,(1),null);
var keys_41009 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40989,actual_type_41007,f_40997], null);
var canonical_f_41010 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_40988),keys_41009);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40988,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_41009], 0));

if(cljs.core.truth_(elem_40988.removeEventListener)){
elem_40988.removeEventListener(cljs.core.name(actual_type_41007),canonical_f_41010);
} else {
elem_40988.detachEvent(cljs.core.name(actual_type_41007),canonical_f_41010);
}


var G__41011 = seq__40420_41002;
var G__41012 = chunk__40422_41003;
var G__41013 = count__40423_41004;
var G__41014 = (i__40424_41005 + (1));
seq__40420_41002 = G__41011;
chunk__40422_41003 = G__41012;
count__40423_41004 = G__41013;
i__40424_41005 = G__41014;
continue;
} else {
var temp__5735__auto___41015 = cljs.core.seq(seq__40420_41002);
if(temp__5735__auto___41015){
var seq__40420_41016__$1 = temp__5735__auto___41015;
if(cljs.core.chunked_seq_QMARK_(seq__40420_41016__$1)){
var c__4556__auto___41017 = cljs.core.chunk_first(seq__40420_41016__$1);
var G__41018 = cljs.core.chunk_rest(seq__40420_41016__$1);
var G__41019 = c__4556__auto___41017;
var G__41020 = cljs.core.count(c__4556__auto___41017);
var G__41021 = (0);
seq__40420_41002 = G__41018;
chunk__40422_41003 = G__41019;
count__40423_41004 = G__41020;
i__40424_41005 = G__41021;
continue;
} else {
var vec__40479_41022 = cljs.core.first(seq__40420_41016__$1);
var actual_type_41023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40479_41022,(0),null);
var __41024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40479_41022,(1),null);
var keys_41025 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40989,actual_type_41023,f_40997], null);
var canonical_f_41026 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_40988),keys_41025);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40988,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_41025], 0));

if(cljs.core.truth_(elem_40988.removeEventListener)){
elem_40988.removeEventListener(cljs.core.name(actual_type_41023),canonical_f_41026);
} else {
elem_40988.detachEvent(cljs.core.name(actual_type_41023),canonical_f_41026);
}


var G__41027 = cljs.core.next(seq__40420_41016__$1);
var G__41028 = null;
var G__41029 = (0);
var G__41030 = (0);
seq__40420_41002 = G__41027;
chunk__40422_41003 = G__41028;
count__40423_41004 = G__41029;
i__40424_41005 = G__41030;
continue;
}
} else {
}
}
break;
}

var G__41031 = seq__40410_40990;
var G__41032 = chunk__40417_40991;
var G__41033 = count__40418_40992;
var G__41034 = (i__40419_40993 + (1));
seq__40410_40990 = G__41031;
chunk__40417_40991 = G__41032;
count__40418_40992 = G__41033;
i__40419_40993 = G__41034;
continue;
} else {
var temp__5735__auto___41035 = cljs.core.seq(seq__40410_40990);
if(temp__5735__auto___41035){
var seq__40410_41036__$1 = temp__5735__auto___41035;
if(cljs.core.chunked_seq_QMARK_(seq__40410_41036__$1)){
var c__4556__auto___41037 = cljs.core.chunk_first(seq__40410_41036__$1);
var G__41038 = cljs.core.chunk_rest(seq__40410_41036__$1);
var G__41039 = c__4556__auto___41037;
var G__41040 = cljs.core.count(c__4556__auto___41037);
var G__41041 = (0);
seq__40410_40990 = G__41038;
chunk__40417_40991 = G__41039;
count__40418_40992 = G__41040;
i__40419_40993 = G__41041;
continue;
} else {
var vec__40482_41042 = cljs.core.first(seq__40410_41036__$1);
var orig_type_41043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40482_41042,(0),null);
var f_41044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40482_41042,(1),null);
var seq__40411_41045 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_41043,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_41043,cljs.core.identity])));
var chunk__40413_41046 = null;
var count__40414_41047 = (0);
var i__40415_41048 = (0);
while(true){
if((i__40415_41048 < count__40414_41047)){
var vec__40494_41049 = chunk__40413_41046.cljs$core$IIndexed$_nth$arity$2(null,i__40415_41048);
var actual_type_41050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40494_41049,(0),null);
var __41051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40494_41049,(1),null);
var keys_41052 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40989,actual_type_41050,f_41044], null);
var canonical_f_41053 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_40988),keys_41052);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40988,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_41052], 0));

if(cljs.core.truth_(elem_40988.removeEventListener)){
elem_40988.removeEventListener(cljs.core.name(actual_type_41050),canonical_f_41053);
} else {
elem_40988.detachEvent(cljs.core.name(actual_type_41050),canonical_f_41053);
}


var G__41054 = seq__40411_41045;
var G__41055 = chunk__40413_41046;
var G__41056 = count__40414_41047;
var G__41057 = (i__40415_41048 + (1));
seq__40411_41045 = G__41054;
chunk__40413_41046 = G__41055;
count__40414_41047 = G__41056;
i__40415_41048 = G__41057;
continue;
} else {
var temp__5735__auto___41058__$1 = cljs.core.seq(seq__40411_41045);
if(temp__5735__auto___41058__$1){
var seq__40411_41059__$1 = temp__5735__auto___41058__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40411_41059__$1)){
var c__4556__auto___41060 = cljs.core.chunk_first(seq__40411_41059__$1);
var G__41061 = cljs.core.chunk_rest(seq__40411_41059__$1);
var G__41062 = c__4556__auto___41060;
var G__41063 = cljs.core.count(c__4556__auto___41060);
var G__41064 = (0);
seq__40411_41045 = G__41061;
chunk__40413_41046 = G__41062;
count__40414_41047 = G__41063;
i__40415_41048 = G__41064;
continue;
} else {
var vec__40499_41065 = cljs.core.first(seq__40411_41059__$1);
var actual_type_41066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40499_41065,(0),null);
var __41067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40499_41065,(1),null);
var keys_41068 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40989,actual_type_41066,f_41044], null);
var canonical_f_41069 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_40988),keys_41068);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40988,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_41068], 0));

if(cljs.core.truth_(elem_40988.removeEventListener)){
elem_40988.removeEventListener(cljs.core.name(actual_type_41066),canonical_f_41069);
} else {
elem_40988.detachEvent(cljs.core.name(actual_type_41066),canonical_f_41069);
}


var G__41070 = cljs.core.next(seq__40411_41059__$1);
var G__41071 = null;
var G__41072 = (0);
var G__41073 = (0);
seq__40411_41045 = G__41070;
chunk__40413_41046 = G__41071;
count__40414_41047 = G__41072;
i__40415_41048 = G__41073;
continue;
}
} else {
}
}
break;
}

var G__41074 = cljs.core.next(seq__40410_41036__$1);
var G__41075 = null;
var G__41076 = (0);
var G__41077 = (0);
seq__40410_40990 = G__41074;
chunk__40417_40991 = G__41075;
count__40418_40992 = G__41076;
i__40419_40993 = G__41077;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq40405){
var G__40406 = cljs.core.first(seq40405);
var seq40405__$1 = cljs.core.next(seq40405);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40406,seq40405__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___41078 = arguments.length;
var i__4737__auto___41079 = (0);
while(true){
if((i__4737__auto___41079 < len__4736__auto___41078)){
args__4742__auto__.push((arguments[i__4737__auto___41079]));

var G__41080 = (i__4737__auto___41079 + (1));
i__4737__auto___41079 = G__41080;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__40505_41081 = dommy.core.elem_and_selector(elem_sel);
var elem_41082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40505_41081,(0),null);
var selector_41083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40505_41081,(1),null);
var seq__40508_41084 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__40509_41085 = null;
var count__40510_41086 = (0);
var i__40511_41087 = (0);
while(true){
if((i__40511_41087 < count__40510_41086)){
var vec__40523_41088 = chunk__40509_41085.cljs$core$IIndexed$_nth$arity$2(null,i__40511_41087);
var type_41089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40523_41088,(0),null);
var f_41090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40523_41088,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41089,((function (seq__40508_41084,chunk__40509_41085,count__40510_41086,i__40511_41087,vec__40523_41088,type_41089,f_41090,vec__40505_41081,elem_41082,selector_41083){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41089,dommy$core$this_fn], 0));

return (f_41090.cljs$core$IFn$_invoke$arity$1 ? f_41090.cljs$core$IFn$_invoke$arity$1(e) : f_41090.call(null,e));
});})(seq__40508_41084,chunk__40509_41085,count__40510_41086,i__40511_41087,vec__40523_41088,type_41089,f_41090,vec__40505_41081,elem_41082,selector_41083))
], 0));


var G__41091 = seq__40508_41084;
var G__41092 = chunk__40509_41085;
var G__41093 = count__40510_41086;
var G__41094 = (i__40511_41087 + (1));
seq__40508_41084 = G__41091;
chunk__40509_41085 = G__41092;
count__40510_41086 = G__41093;
i__40511_41087 = G__41094;
continue;
} else {
var temp__5735__auto___41095 = cljs.core.seq(seq__40508_41084);
if(temp__5735__auto___41095){
var seq__40508_41096__$1 = temp__5735__auto___41095;
if(cljs.core.chunked_seq_QMARK_(seq__40508_41096__$1)){
var c__4556__auto___41097 = cljs.core.chunk_first(seq__40508_41096__$1);
var G__41098 = cljs.core.chunk_rest(seq__40508_41096__$1);
var G__41099 = c__4556__auto___41097;
var G__41100 = cljs.core.count(c__4556__auto___41097);
var G__41101 = (0);
seq__40508_41084 = G__41098;
chunk__40509_41085 = G__41099;
count__40510_41086 = G__41100;
i__40511_41087 = G__41101;
continue;
} else {
var vec__40543_41102 = cljs.core.first(seq__40508_41096__$1);
var type_41103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40543_41102,(0),null);
var f_41104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40543_41102,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41103,((function (seq__40508_41084,chunk__40509_41085,count__40510_41086,i__40511_41087,vec__40543_41102,type_41103,f_41104,seq__40508_41096__$1,temp__5735__auto___41095,vec__40505_41081,elem_41082,selector_41083){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41103,dommy$core$this_fn], 0));

return (f_41104.cljs$core$IFn$_invoke$arity$1 ? f_41104.cljs$core$IFn$_invoke$arity$1(e) : f_41104.call(null,e));
});})(seq__40508_41084,chunk__40509_41085,count__40510_41086,i__40511_41087,vec__40543_41102,type_41103,f_41104,seq__40508_41096__$1,temp__5735__auto___41095,vec__40505_41081,elem_41082,selector_41083))
], 0));


var G__41105 = cljs.core.next(seq__40508_41096__$1);
var G__41106 = null;
var G__41107 = (0);
var G__41108 = (0);
seq__40508_41084 = G__41105;
chunk__40509_41085 = G__41106;
count__40510_41086 = G__41107;
i__40511_41087 = G__41108;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq40502){
var G__40503 = cljs.core.first(seq40502);
var seq40502__$1 = cljs.core.next(seq40502);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40503,seq40502__$1);
}));


//# sourceMappingURL=dommy.core.js.map
