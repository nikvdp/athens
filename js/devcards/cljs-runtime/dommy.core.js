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
var len__4736__auto___40583 = arguments.length;
var i__4737__auto___40584 = (0);
while(true){
if((i__4737__auto___40584 < len__4736__auto___40583)){
args__4742__auto__.push((arguments[i__4737__auto___40584]));

var G__40586 = (i__4737__auto___40584 + (1));
i__4737__auto___40584 = G__40586;
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
var seq__40141_40588 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__40142_40589 = null;
var count__40143_40590 = (0);
var i__40144_40591 = (0);
while(true){
if((i__40144_40591 < count__40143_40590)){
var vec__40154_40592 = chunk__40142_40589.cljs$core$IIndexed$_nth$arity$2(null,i__40144_40591);
var k_40593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40154_40592,(0),null);
var v_40594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40154_40592,(1),null);
style.setProperty(dommy.utils.as_str(k_40593),v_40594);


var G__40595 = seq__40141_40588;
var G__40596 = chunk__40142_40589;
var G__40597 = count__40143_40590;
var G__40598 = (i__40144_40591 + (1));
seq__40141_40588 = G__40595;
chunk__40142_40589 = G__40596;
count__40143_40590 = G__40597;
i__40144_40591 = G__40598;
continue;
} else {
var temp__5735__auto___40599 = cljs.core.seq(seq__40141_40588);
if(temp__5735__auto___40599){
var seq__40141_40600__$1 = temp__5735__auto___40599;
if(cljs.core.chunked_seq_QMARK_(seq__40141_40600__$1)){
var c__4556__auto___40601 = cljs.core.chunk_first(seq__40141_40600__$1);
var G__40602 = cljs.core.chunk_rest(seq__40141_40600__$1);
var G__40603 = c__4556__auto___40601;
var G__40604 = cljs.core.count(c__4556__auto___40601);
var G__40605 = (0);
seq__40141_40588 = G__40602;
chunk__40142_40589 = G__40603;
count__40143_40590 = G__40604;
i__40144_40591 = G__40605;
continue;
} else {
var vec__40158_40606 = cljs.core.first(seq__40141_40600__$1);
var k_40607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40158_40606,(0),null);
var v_40608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40158_40606,(1),null);
style.setProperty(dommy.utils.as_str(k_40607),v_40608);


var G__40609 = cljs.core.next(seq__40141_40600__$1);
var G__40610 = null;
var G__40611 = (0);
var G__40612 = (0);
seq__40141_40588 = G__40609;
chunk__40142_40589 = G__40610;
count__40143_40590 = G__40611;
i__40144_40591 = G__40612;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq40136){
var G__40137 = cljs.core.first(seq40136);
var seq40136__$1 = cljs.core.next(seq40136);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40137,seq40136__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40615 = arguments.length;
var i__4737__auto___40616 = (0);
while(true){
if((i__4737__auto___40616 < len__4736__auto___40615)){
args__4742__auto__.push((arguments[i__4737__auto___40616]));

var G__40617 = (i__4737__auto___40616 + (1));
i__4737__auto___40616 = G__40617;
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
var seq__40163_40618 = cljs.core.seq(keywords);
var chunk__40164_40619 = null;
var count__40165_40620 = (0);
var i__40166_40621 = (0);
while(true){
if((i__40166_40621 < count__40165_40620)){
var kw_40622 = chunk__40164_40619.cljs$core$IIndexed$_nth$arity$2(null,i__40166_40621);
style.removeProperty(dommy.utils.as_str(kw_40622));


var G__40623 = seq__40163_40618;
var G__40624 = chunk__40164_40619;
var G__40625 = count__40165_40620;
var G__40626 = (i__40166_40621 + (1));
seq__40163_40618 = G__40623;
chunk__40164_40619 = G__40624;
count__40165_40620 = G__40625;
i__40166_40621 = G__40626;
continue;
} else {
var temp__5735__auto___40627 = cljs.core.seq(seq__40163_40618);
if(temp__5735__auto___40627){
var seq__40163_40628__$1 = temp__5735__auto___40627;
if(cljs.core.chunked_seq_QMARK_(seq__40163_40628__$1)){
var c__4556__auto___40629 = cljs.core.chunk_first(seq__40163_40628__$1);
var G__40630 = cljs.core.chunk_rest(seq__40163_40628__$1);
var G__40631 = c__4556__auto___40629;
var G__40632 = cljs.core.count(c__4556__auto___40629);
var G__40633 = (0);
seq__40163_40618 = G__40630;
chunk__40164_40619 = G__40631;
count__40165_40620 = G__40632;
i__40166_40621 = G__40633;
continue;
} else {
var kw_40634 = cljs.core.first(seq__40163_40628__$1);
style.removeProperty(dommy.utils.as_str(kw_40634));


var G__40635 = cljs.core.next(seq__40163_40628__$1);
var G__40636 = null;
var G__40637 = (0);
var G__40638 = (0);
seq__40163_40618 = G__40635;
chunk__40164_40619 = G__40636;
count__40165_40620 = G__40637;
i__40166_40621 = G__40638;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq40161){
var G__40162 = cljs.core.first(seq40161);
var seq40161__$1 = cljs.core.next(seq40161);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40162,seq40161__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40639 = arguments.length;
var i__4737__auto___40640 = (0);
while(true){
if((i__4737__auto___40640 < len__4736__auto___40639)){
args__4742__auto__.push((arguments[i__4737__auto___40640]));

var G__40641 = (i__4737__auto___40640 + (1));
i__4737__auto___40640 = G__40641;
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

var seq__40169_40642 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__40170_40643 = null;
var count__40171_40644 = (0);
var i__40172_40645 = (0);
while(true){
if((i__40172_40645 < count__40171_40644)){
var vec__40179_40646 = chunk__40170_40643.cljs$core$IIndexed$_nth$arity$2(null,i__40172_40645);
var k_40647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40179_40646,(0),null);
var v_40648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40179_40646,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_40647,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_40648),"px"].join('')], 0));


var G__40649 = seq__40169_40642;
var G__40650 = chunk__40170_40643;
var G__40651 = count__40171_40644;
var G__40652 = (i__40172_40645 + (1));
seq__40169_40642 = G__40649;
chunk__40170_40643 = G__40650;
count__40171_40644 = G__40651;
i__40172_40645 = G__40652;
continue;
} else {
var temp__5735__auto___40653 = cljs.core.seq(seq__40169_40642);
if(temp__5735__auto___40653){
var seq__40169_40654__$1 = temp__5735__auto___40653;
if(cljs.core.chunked_seq_QMARK_(seq__40169_40654__$1)){
var c__4556__auto___40655 = cljs.core.chunk_first(seq__40169_40654__$1);
var G__40656 = cljs.core.chunk_rest(seq__40169_40654__$1);
var G__40657 = c__4556__auto___40655;
var G__40658 = cljs.core.count(c__4556__auto___40655);
var G__40659 = (0);
seq__40169_40642 = G__40656;
chunk__40170_40643 = G__40657;
count__40171_40644 = G__40658;
i__40172_40645 = G__40659;
continue;
} else {
var vec__40182_40660 = cljs.core.first(seq__40169_40654__$1);
var k_40661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40182_40660,(0),null);
var v_40662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40182_40660,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_40661,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_40662),"px"].join('')], 0));


var G__40663 = cljs.core.next(seq__40169_40654__$1);
var G__40664 = null;
var G__40665 = (0);
var G__40666 = (0);
seq__40169_40642 = G__40663;
chunk__40170_40643 = G__40664;
count__40171_40644 = G__40665;
i__40172_40645 = G__40666;
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
var len__4736__auto___40668 = arguments.length;
var i__4737__auto___40669 = (0);
while(true){
if((i__4737__auto___40669 < len__4736__auto___40668)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40669]));

var G__40670 = (i__4737__auto___40669 + (1));
i__4737__auto___40669 = G__40670;
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

var seq__40193_40671 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__40194_40672 = null;
var count__40195_40673 = (0);
var i__40196_40674 = (0);
while(true){
if((i__40196_40674 < count__40195_40673)){
var vec__40203_40675 = chunk__40194_40672.cljs$core$IIndexed$_nth$arity$2(null,i__40196_40674);
var k_40676__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40203_40675,(0),null);
var v_40677__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40203_40675,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_40676__$1,v_40677__$1);


var G__40678 = seq__40193_40671;
var G__40679 = chunk__40194_40672;
var G__40680 = count__40195_40673;
var G__40681 = (i__40196_40674 + (1));
seq__40193_40671 = G__40678;
chunk__40194_40672 = G__40679;
count__40195_40673 = G__40680;
i__40196_40674 = G__40681;
continue;
} else {
var temp__5735__auto___40682 = cljs.core.seq(seq__40193_40671);
if(temp__5735__auto___40682){
var seq__40193_40683__$1 = temp__5735__auto___40682;
if(cljs.core.chunked_seq_QMARK_(seq__40193_40683__$1)){
var c__4556__auto___40684 = cljs.core.chunk_first(seq__40193_40683__$1);
var G__40685 = cljs.core.chunk_rest(seq__40193_40683__$1);
var G__40686 = c__4556__auto___40684;
var G__40687 = cljs.core.count(c__4556__auto___40684);
var G__40688 = (0);
seq__40193_40671 = G__40685;
chunk__40194_40672 = G__40686;
count__40195_40673 = G__40687;
i__40196_40674 = G__40688;
continue;
} else {
var vec__40206_40689 = cljs.core.first(seq__40193_40683__$1);
var k_40690__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40206_40689,(0),null);
var v_40691__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40206_40689,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_40690__$1,v_40691__$1);


var G__40692 = cljs.core.next(seq__40193_40683__$1);
var G__40693 = null;
var G__40694 = (0);
var G__40695 = (0);
seq__40193_40671 = G__40692;
chunk__40194_40672 = G__40693;
count__40195_40673 = G__40694;
i__40196_40674 = G__40695;
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
var len__4736__auto___40697 = arguments.length;
var i__4737__auto___40698 = (0);
while(true){
if((i__4737__auto___40698 < len__4736__auto___40697)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40698]));

var G__40699 = (i__4737__auto___40698 + (1));
i__4737__auto___40698 = G__40699;
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
var k_40700__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__40214 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__40214.cljs$core$IFn$_invoke$arity$1 ? fexpr__40214.cljs$core$IFn$_invoke$arity$1(k_40700__$1) : fexpr__40214.call(null,k_40700__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_40700__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__40215_40701 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__40216_40702 = null;
var count__40217_40703 = (0);
var i__40218_40704 = (0);
while(true){
if((i__40218_40704 < count__40217_40703)){
var k_40705__$1 = chunk__40216_40702.cljs$core$IIndexed$_nth$arity$2(null,i__40218_40704);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_40705__$1);


var G__40706 = seq__40215_40701;
var G__40707 = chunk__40216_40702;
var G__40708 = count__40217_40703;
var G__40709 = (i__40218_40704 + (1));
seq__40215_40701 = G__40706;
chunk__40216_40702 = G__40707;
count__40217_40703 = G__40708;
i__40218_40704 = G__40709;
continue;
} else {
var temp__5735__auto___40710 = cljs.core.seq(seq__40215_40701);
if(temp__5735__auto___40710){
var seq__40215_40711__$1 = temp__5735__auto___40710;
if(cljs.core.chunked_seq_QMARK_(seq__40215_40711__$1)){
var c__4556__auto___40712 = cljs.core.chunk_first(seq__40215_40711__$1);
var G__40713 = cljs.core.chunk_rest(seq__40215_40711__$1);
var G__40714 = c__4556__auto___40712;
var G__40715 = cljs.core.count(c__4556__auto___40712);
var G__40716 = (0);
seq__40215_40701 = G__40713;
chunk__40216_40702 = G__40714;
count__40217_40703 = G__40715;
i__40218_40704 = G__40716;
continue;
} else {
var k_40717__$1 = cljs.core.first(seq__40215_40711__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_40717__$1);


var G__40718 = cljs.core.next(seq__40215_40711__$1);
var G__40719 = null;
var G__40720 = (0);
var G__40721 = (0);
seq__40215_40701 = G__40718;
chunk__40216_40702 = G__40719;
count__40217_40703 = G__40720;
i__40218_40704 = G__40721;
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
var len__4736__auto___40724 = arguments.length;
var i__4737__auto___40725 = (0);
while(true){
if((i__4737__auto___40725 < len__4736__auto___40724)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40725]));

var G__40726 = (i__4737__auto___40725 + (1));
i__4737__auto___40725 = G__40726;
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
var temp__5733__auto___40727 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___40727)){
var class_list_40728 = temp__5733__auto___40727;
var seq__40226_40729 = cljs.core.seq(classes__$1);
var chunk__40227_40730 = null;
var count__40228_40731 = (0);
var i__40229_40732 = (0);
while(true){
if((i__40229_40732 < count__40228_40731)){
var c_40733 = chunk__40227_40730.cljs$core$IIndexed$_nth$arity$2(null,i__40229_40732);
class_list_40728.add(c_40733);


var G__40734 = seq__40226_40729;
var G__40735 = chunk__40227_40730;
var G__40736 = count__40228_40731;
var G__40737 = (i__40229_40732 + (1));
seq__40226_40729 = G__40734;
chunk__40227_40730 = G__40735;
count__40228_40731 = G__40736;
i__40229_40732 = G__40737;
continue;
} else {
var temp__5735__auto___40738 = cljs.core.seq(seq__40226_40729);
if(temp__5735__auto___40738){
var seq__40226_40739__$1 = temp__5735__auto___40738;
if(cljs.core.chunked_seq_QMARK_(seq__40226_40739__$1)){
var c__4556__auto___40740 = cljs.core.chunk_first(seq__40226_40739__$1);
var G__40741 = cljs.core.chunk_rest(seq__40226_40739__$1);
var G__40742 = c__4556__auto___40740;
var G__40743 = cljs.core.count(c__4556__auto___40740);
var G__40744 = (0);
seq__40226_40729 = G__40741;
chunk__40227_40730 = G__40742;
count__40228_40731 = G__40743;
i__40229_40732 = G__40744;
continue;
} else {
var c_40746 = cljs.core.first(seq__40226_40739__$1);
class_list_40728.add(c_40746);


var G__40747 = cljs.core.next(seq__40226_40739__$1);
var G__40748 = null;
var G__40749 = (0);
var G__40750 = (0);
seq__40226_40729 = G__40747;
chunk__40227_40730 = G__40748;
count__40228_40731 = G__40749;
i__40229_40732 = G__40750;
continue;
}
} else {
}
}
break;
}
} else {
var seq__40230_40751 = cljs.core.seq(classes__$1);
var chunk__40231_40752 = null;
var count__40232_40753 = (0);
var i__40233_40754 = (0);
while(true){
if((i__40233_40754 < count__40232_40753)){
var c_40756 = chunk__40231_40752.cljs$core$IIndexed$_nth$arity$2(null,i__40233_40754);
var class_name_40757 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_40757,c_40756))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_40757 === ""))?c_40756:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_40757)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_40756)].join('')));
}


var G__40758 = seq__40230_40751;
var G__40759 = chunk__40231_40752;
var G__40760 = count__40232_40753;
var G__40761 = (i__40233_40754 + (1));
seq__40230_40751 = G__40758;
chunk__40231_40752 = G__40759;
count__40232_40753 = G__40760;
i__40233_40754 = G__40761;
continue;
} else {
var temp__5735__auto___40762 = cljs.core.seq(seq__40230_40751);
if(temp__5735__auto___40762){
var seq__40230_40763__$1 = temp__5735__auto___40762;
if(cljs.core.chunked_seq_QMARK_(seq__40230_40763__$1)){
var c__4556__auto___40764 = cljs.core.chunk_first(seq__40230_40763__$1);
var G__40765 = cljs.core.chunk_rest(seq__40230_40763__$1);
var G__40766 = c__4556__auto___40764;
var G__40767 = cljs.core.count(c__4556__auto___40764);
var G__40768 = (0);
seq__40230_40751 = G__40765;
chunk__40231_40752 = G__40766;
count__40232_40753 = G__40767;
i__40233_40754 = G__40768;
continue;
} else {
var c_40769 = cljs.core.first(seq__40230_40763__$1);
var class_name_40770 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_40770,c_40769))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_40770 === ""))?c_40769:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_40770)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_40769)].join('')));
}


var G__40771 = cljs.core.next(seq__40230_40763__$1);
var G__40772 = null;
var G__40773 = (0);
var G__40774 = (0);
seq__40230_40751 = G__40771;
chunk__40231_40752 = G__40772;
count__40232_40753 = G__40773;
i__40233_40754 = G__40774;
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
var seq__40234_40776 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__40235_40777 = null;
var count__40236_40778 = (0);
var i__40237_40779 = (0);
while(true){
if((i__40237_40779 < count__40236_40778)){
var c_40780 = chunk__40235_40777.cljs$core$IIndexed$_nth$arity$2(null,i__40237_40779);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_40780);


var G__40781 = seq__40234_40776;
var G__40782 = chunk__40235_40777;
var G__40783 = count__40236_40778;
var G__40784 = (i__40237_40779 + (1));
seq__40234_40776 = G__40781;
chunk__40235_40777 = G__40782;
count__40236_40778 = G__40783;
i__40237_40779 = G__40784;
continue;
} else {
var temp__5735__auto___40787 = cljs.core.seq(seq__40234_40776);
if(temp__5735__auto___40787){
var seq__40234_40788__$1 = temp__5735__auto___40787;
if(cljs.core.chunked_seq_QMARK_(seq__40234_40788__$1)){
var c__4556__auto___40789 = cljs.core.chunk_first(seq__40234_40788__$1);
var G__40790 = cljs.core.chunk_rest(seq__40234_40788__$1);
var G__40791 = c__4556__auto___40789;
var G__40792 = cljs.core.count(c__4556__auto___40789);
var G__40793 = (0);
seq__40234_40776 = G__40790;
chunk__40235_40777 = G__40791;
count__40236_40778 = G__40792;
i__40237_40779 = G__40793;
continue;
} else {
var c_40795 = cljs.core.first(seq__40234_40788__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_40795);


var G__40796 = cljs.core.next(seq__40234_40788__$1);
var G__40797 = null;
var G__40798 = (0);
var G__40799 = (0);
seq__40234_40776 = G__40796;
chunk__40235_40777 = G__40797;
count__40236_40778 = G__40798;
i__40237_40779 = G__40799;
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
var len__4736__auto___40806 = arguments.length;
var i__4737__auto___40807 = (0);
while(true){
if((i__4737__auto___40807 < len__4736__auto___40806)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40807]));

var G__40808 = (i__4737__auto___40807 + (1));
i__4737__auto___40807 = G__40808;
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
var temp__5733__auto___40809 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___40809)){
var class_list_40810 = temp__5733__auto___40809;
class_list_40810.remove(c__$1);
} else {
var class_name_40812 = dommy.core.class$(elem);
var new_class_name_40813 = dommy.utils.remove_class_str(class_name_40812,c__$1);
if((class_name_40812 === new_class_name_40813)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_40813);
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


var G__40817 = seq__40243;
var G__40818 = chunk__40244;
var G__40819 = count__40245;
var G__40820 = (i__40246 + (1));
seq__40243 = G__40817;
chunk__40244 = G__40818;
count__40245 = G__40819;
i__40246 = G__40820;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40243);
if(temp__5735__auto__){
var seq__40243__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40243__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40243__$1);
var G__40821 = cljs.core.chunk_rest(seq__40243__$1);
var G__40822 = c__4556__auto__;
var G__40823 = cljs.core.count(c__4556__auto__);
var G__40824 = (0);
seq__40243 = G__40821;
chunk__40244 = G__40822;
count__40245 = G__40823;
i__40246 = G__40824;
continue;
} else {
var c = cljs.core.first(seq__40243__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__40827 = cljs.core.next(seq__40243__$1);
var G__40828 = null;
var G__40829 = (0);
var G__40830 = (0);
seq__40243 = G__40827;
chunk__40244 = G__40828;
count__40245 = G__40829;
i__40246 = G__40830;
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
var G__40249 = arguments.length;
switch (G__40249) {
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
var temp__5733__auto___40837 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___40837)){
var class_list_40840 = temp__5733__auto___40837;
class_list_40840.toggle(c__$1);
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
var G__40253 = arguments.length;
switch (G__40253) {
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
var G__40255 = arguments.length;
switch (G__40255) {
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
var G__40260 = arguments.length;
switch (G__40260) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___40849 = arguments.length;
var i__4737__auto___40850 = (0);
while(true){
if((i__4737__auto___40850 < len__4736__auto___40849)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40850]));

var G__40851 = (i__4737__auto___40850 + (1));
i__4737__auto___40850 = G__40851;
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
var G__40261 = parent;
G__40261.appendChild(child);

return G__40261;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__40262_40852 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__40263_40853 = null;
var count__40264_40854 = (0);
var i__40265_40855 = (0);
while(true){
if((i__40265_40855 < count__40264_40854)){
var c_40856 = chunk__40263_40853.cljs$core$IIndexed$_nth$arity$2(null,i__40265_40855);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_40856);


var G__40857 = seq__40262_40852;
var G__40858 = chunk__40263_40853;
var G__40859 = count__40264_40854;
var G__40860 = (i__40265_40855 + (1));
seq__40262_40852 = G__40857;
chunk__40263_40853 = G__40858;
count__40264_40854 = G__40859;
i__40265_40855 = G__40860;
continue;
} else {
var temp__5735__auto___40861 = cljs.core.seq(seq__40262_40852);
if(temp__5735__auto___40861){
var seq__40262_40862__$1 = temp__5735__auto___40861;
if(cljs.core.chunked_seq_QMARK_(seq__40262_40862__$1)){
var c__4556__auto___40863 = cljs.core.chunk_first(seq__40262_40862__$1);
var G__40864 = cljs.core.chunk_rest(seq__40262_40862__$1);
var G__40865 = c__4556__auto___40863;
var G__40866 = cljs.core.count(c__4556__auto___40863);
var G__40867 = (0);
seq__40262_40852 = G__40864;
chunk__40263_40853 = G__40865;
count__40264_40854 = G__40866;
i__40265_40855 = G__40867;
continue;
} else {
var c_40868 = cljs.core.first(seq__40262_40862__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_40868);


var G__40869 = cljs.core.next(seq__40262_40862__$1);
var G__40870 = null;
var G__40871 = (0);
var G__40872 = (0);
seq__40262_40852 = G__40869;
chunk__40263_40853 = G__40870;
count__40264_40854 = G__40871;
i__40265_40855 = G__40872;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq40257){
var G__40258 = cljs.core.first(seq40257);
var seq40257__$1 = cljs.core.next(seq40257);
var G__40259 = cljs.core.first(seq40257__$1);
var seq40257__$2 = cljs.core.next(seq40257__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40258,G__40259,seq40257__$2);
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
var len__4736__auto___40874 = arguments.length;
var i__4737__auto___40875 = (0);
while(true){
if((i__4737__auto___40875 < len__4736__auto___40874)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40875]));

var G__40876 = (i__4737__auto___40875 + (1));
i__4737__auto___40875 = G__40876;
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
var seq__40272_40877 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__40273_40878 = null;
var count__40274_40879 = (0);
var i__40275_40880 = (0);
while(true){
if((i__40275_40880 < count__40274_40879)){
var c_40881 = chunk__40273_40878.cljs$core$IIndexed$_nth$arity$2(null,i__40275_40880);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_40881);


var G__40882 = seq__40272_40877;
var G__40883 = chunk__40273_40878;
var G__40884 = count__40274_40879;
var G__40885 = (i__40275_40880 + (1));
seq__40272_40877 = G__40882;
chunk__40273_40878 = G__40883;
count__40274_40879 = G__40884;
i__40275_40880 = G__40885;
continue;
} else {
var temp__5735__auto___40886 = cljs.core.seq(seq__40272_40877);
if(temp__5735__auto___40886){
var seq__40272_40887__$1 = temp__5735__auto___40886;
if(cljs.core.chunked_seq_QMARK_(seq__40272_40887__$1)){
var c__4556__auto___40888 = cljs.core.chunk_first(seq__40272_40887__$1);
var G__40889 = cljs.core.chunk_rest(seq__40272_40887__$1);
var G__40890 = c__4556__auto___40888;
var G__40891 = cljs.core.count(c__4556__auto___40888);
var G__40892 = (0);
seq__40272_40877 = G__40889;
chunk__40273_40878 = G__40890;
count__40274_40879 = G__40891;
i__40275_40880 = G__40892;
continue;
} else {
var c_40893 = cljs.core.first(seq__40272_40887__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_40893);


var G__40894 = cljs.core.next(seq__40272_40887__$1);
var G__40895 = null;
var G__40896 = (0);
var G__40897 = (0);
seq__40272_40877 = G__40894;
chunk__40273_40878 = G__40895;
count__40274_40879 = G__40896;
i__40275_40880 = G__40897;
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
var temp__5733__auto___40898 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___40898)){
var next_40899 = temp__5733__auto___40898;
dommy.core.insert_before_BANG_(elem,next_40899);
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
var len__4736__auto___40901 = arguments.length;
var i__4737__auto___40902 = (0);
while(true){
if((i__4737__auto___40902 < len__4736__auto___40901)){
args__4742__auto__.push((arguments[i__4737__auto___40902]));

var G__40903 = (i__4737__auto___40902 + (1));
i__4737__auto___40902 = G__40903;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq40286){
var G__40287 = cljs.core.first(seq40286);
var seq40286__$1 = cljs.core.next(seq40286);
var G__40288 = cljs.core.first(seq40286__$1);
var seq40286__$2 = cljs.core.next(seq40286__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40287,G__40288,seq40286__$2);
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
var len__4736__auto___40904 = arguments.length;
var i__4737__auto___40905 = (0);
while(true){
if((i__4737__auto___40905 < len__4736__auto___40904)){
args__4742__auto__.push((arguments[i__4737__auto___40905]));

var G__40906 = (i__4737__auto___40905 + (1));
i__4737__auto___40905 = G__40906;
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

var vec__40291_40907 = dommy.core.elem_and_selector(elem_sel);
var elem_40908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40291_40907,(0),null);
var selector_40909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40291_40907,(1),null);
var seq__40294_40910 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__40301_40911 = null;
var count__40302_40912 = (0);
var i__40303_40913 = (0);
while(true){
if((i__40303_40913 < count__40302_40912)){
var vec__40359_40914 = chunk__40301_40911.cljs$core$IIndexed$_nth$arity$2(null,i__40303_40913);
var orig_type_40915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40359_40914,(0),null);
var f_40916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40359_40914,(1),null);
var seq__40304_40917 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_40915,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_40915,cljs.core.identity])));
var chunk__40306_40918 = null;
var count__40307_40919 = (0);
var i__40308_40920 = (0);
while(true){
if((i__40308_40920 < count__40307_40919)){
var vec__40376_40921 = chunk__40306_40918.cljs$core$IIndexed$_nth$arity$2(null,i__40308_40920);
var actual_type_40922 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40376_40921,(0),null);
var factory_40923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40376_40921,(1),null);
var canonical_f_40924 = (function (){var G__40380 = (factory_40923.cljs$core$IFn$_invoke$arity$1 ? factory_40923.cljs$core$IFn$_invoke$arity$1(f_40916) : factory_40923.call(null,f_40916));
var fexpr__40379 = (cljs.core.truth_(selector_40909)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_40908,selector_40909):cljs.core.identity);
return (fexpr__40379.cljs$core$IFn$_invoke$arity$1 ? fexpr__40379.cljs$core$IFn$_invoke$arity$1(G__40380) : fexpr__40379.call(null,G__40380));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40908,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40909,actual_type_40922,f_40916], null),canonical_f_40924], 0));

if(cljs.core.truth_(elem_40908.addEventListener)){
elem_40908.addEventListener(cljs.core.name(actual_type_40922),canonical_f_40924);
} else {
elem_40908.attachEvent(cljs.core.name(actual_type_40922),canonical_f_40924);
}


var G__40925 = seq__40304_40917;
var G__40926 = chunk__40306_40918;
var G__40927 = count__40307_40919;
var G__40928 = (i__40308_40920 + (1));
seq__40304_40917 = G__40925;
chunk__40306_40918 = G__40926;
count__40307_40919 = G__40927;
i__40308_40920 = G__40928;
continue;
} else {
var temp__5735__auto___40929 = cljs.core.seq(seq__40304_40917);
if(temp__5735__auto___40929){
var seq__40304_40930__$1 = temp__5735__auto___40929;
if(cljs.core.chunked_seq_QMARK_(seq__40304_40930__$1)){
var c__4556__auto___40931 = cljs.core.chunk_first(seq__40304_40930__$1);
var G__40932 = cljs.core.chunk_rest(seq__40304_40930__$1);
var G__40933 = c__4556__auto___40931;
var G__40934 = cljs.core.count(c__4556__auto___40931);
var G__40935 = (0);
seq__40304_40917 = G__40932;
chunk__40306_40918 = G__40933;
count__40307_40919 = G__40934;
i__40308_40920 = G__40935;
continue;
} else {
var vec__40381_40936 = cljs.core.first(seq__40304_40930__$1);
var actual_type_40937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40381_40936,(0),null);
var factory_40938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40381_40936,(1),null);
var canonical_f_40939 = (function (){var G__40385 = (factory_40938.cljs$core$IFn$_invoke$arity$1 ? factory_40938.cljs$core$IFn$_invoke$arity$1(f_40916) : factory_40938.call(null,f_40916));
var fexpr__40384 = (cljs.core.truth_(selector_40909)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_40908,selector_40909):cljs.core.identity);
return (fexpr__40384.cljs$core$IFn$_invoke$arity$1 ? fexpr__40384.cljs$core$IFn$_invoke$arity$1(G__40385) : fexpr__40384.call(null,G__40385));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40908,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40909,actual_type_40937,f_40916], null),canonical_f_40939], 0));

if(cljs.core.truth_(elem_40908.addEventListener)){
elem_40908.addEventListener(cljs.core.name(actual_type_40937),canonical_f_40939);
} else {
elem_40908.attachEvent(cljs.core.name(actual_type_40937),canonical_f_40939);
}


var G__40940 = cljs.core.next(seq__40304_40930__$1);
var G__40941 = null;
var G__40942 = (0);
var G__40943 = (0);
seq__40304_40917 = G__40940;
chunk__40306_40918 = G__40941;
count__40307_40919 = G__40942;
i__40308_40920 = G__40943;
continue;
}
} else {
}
}
break;
}

var G__40944 = seq__40294_40910;
var G__40945 = chunk__40301_40911;
var G__40946 = count__40302_40912;
var G__40947 = (i__40303_40913 + (1));
seq__40294_40910 = G__40944;
chunk__40301_40911 = G__40945;
count__40302_40912 = G__40946;
i__40303_40913 = G__40947;
continue;
} else {
var temp__5735__auto___40948 = cljs.core.seq(seq__40294_40910);
if(temp__5735__auto___40948){
var seq__40294_40949__$1 = temp__5735__auto___40948;
if(cljs.core.chunked_seq_QMARK_(seq__40294_40949__$1)){
var c__4556__auto___40950 = cljs.core.chunk_first(seq__40294_40949__$1);
var G__40951 = cljs.core.chunk_rest(seq__40294_40949__$1);
var G__40952 = c__4556__auto___40950;
var G__40953 = cljs.core.count(c__4556__auto___40950);
var G__40954 = (0);
seq__40294_40910 = G__40951;
chunk__40301_40911 = G__40952;
count__40302_40912 = G__40953;
i__40303_40913 = G__40954;
continue;
} else {
var vec__40389_40955 = cljs.core.first(seq__40294_40949__$1);
var orig_type_40956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40389_40955,(0),null);
var f_40957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40389_40955,(1),null);
var seq__40295_40958 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_40956,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_40956,cljs.core.identity])));
var chunk__40297_40959 = null;
var count__40298_40960 = (0);
var i__40299_40961 = (0);
while(true){
if((i__40299_40961 < count__40298_40960)){
var vec__40406_40962 = chunk__40297_40959.cljs$core$IIndexed$_nth$arity$2(null,i__40299_40961);
var actual_type_40963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40406_40962,(0),null);
var factory_40964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40406_40962,(1),null);
var canonical_f_40967 = (function (){var G__40410 = (factory_40964.cljs$core$IFn$_invoke$arity$1 ? factory_40964.cljs$core$IFn$_invoke$arity$1(f_40957) : factory_40964.call(null,f_40957));
var fexpr__40409 = (cljs.core.truth_(selector_40909)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_40908,selector_40909):cljs.core.identity);
return (fexpr__40409.cljs$core$IFn$_invoke$arity$1 ? fexpr__40409.cljs$core$IFn$_invoke$arity$1(G__40410) : fexpr__40409.call(null,G__40410));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40908,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40909,actual_type_40963,f_40957], null),canonical_f_40967], 0));

if(cljs.core.truth_(elem_40908.addEventListener)){
elem_40908.addEventListener(cljs.core.name(actual_type_40963),canonical_f_40967);
} else {
elem_40908.attachEvent(cljs.core.name(actual_type_40963),canonical_f_40967);
}


var G__40970 = seq__40295_40958;
var G__40971 = chunk__40297_40959;
var G__40972 = count__40298_40960;
var G__40973 = (i__40299_40961 + (1));
seq__40295_40958 = G__40970;
chunk__40297_40959 = G__40971;
count__40298_40960 = G__40972;
i__40299_40961 = G__40973;
continue;
} else {
var temp__5735__auto___40974__$1 = cljs.core.seq(seq__40295_40958);
if(temp__5735__auto___40974__$1){
var seq__40295_40976__$1 = temp__5735__auto___40974__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40295_40976__$1)){
var c__4556__auto___40977 = cljs.core.chunk_first(seq__40295_40976__$1);
var G__40978 = cljs.core.chunk_rest(seq__40295_40976__$1);
var G__40979 = c__4556__auto___40977;
var G__40980 = cljs.core.count(c__4556__auto___40977);
var G__40981 = (0);
seq__40295_40958 = G__40978;
chunk__40297_40959 = G__40979;
count__40298_40960 = G__40980;
i__40299_40961 = G__40981;
continue;
} else {
var vec__40411_40983 = cljs.core.first(seq__40295_40976__$1);
var actual_type_40984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40411_40983,(0),null);
var factory_40985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40411_40983,(1),null);
var canonical_f_40986 = (function (){var G__40415 = (factory_40985.cljs$core$IFn$_invoke$arity$1 ? factory_40985.cljs$core$IFn$_invoke$arity$1(f_40957) : factory_40985.call(null,f_40957));
var fexpr__40414 = (cljs.core.truth_(selector_40909)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_40908,selector_40909):cljs.core.identity);
return (fexpr__40414.cljs$core$IFn$_invoke$arity$1 ? fexpr__40414.cljs$core$IFn$_invoke$arity$1(G__40415) : fexpr__40414.call(null,G__40415));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40908,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40909,actual_type_40984,f_40957], null),canonical_f_40986], 0));

if(cljs.core.truth_(elem_40908.addEventListener)){
elem_40908.addEventListener(cljs.core.name(actual_type_40984),canonical_f_40986);
} else {
elem_40908.attachEvent(cljs.core.name(actual_type_40984),canonical_f_40986);
}


var G__40987 = cljs.core.next(seq__40295_40976__$1);
var G__40988 = null;
var G__40989 = (0);
var G__40990 = (0);
seq__40295_40958 = G__40987;
chunk__40297_40959 = G__40988;
count__40298_40960 = G__40989;
i__40299_40961 = G__40990;
continue;
}
} else {
}
}
break;
}

var G__40991 = cljs.core.next(seq__40294_40949__$1);
var G__40992 = null;
var G__40993 = (0);
var G__40994 = (0);
seq__40294_40910 = G__40991;
chunk__40301_40911 = G__40992;
count__40302_40912 = G__40993;
i__40303_40913 = G__40994;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq40289){
var G__40290 = cljs.core.first(seq40289);
var seq40289__$1 = cljs.core.next(seq40289);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40290,seq40289__$1);
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
var len__4736__auto___40995 = arguments.length;
var i__4737__auto___40996 = (0);
while(true){
if((i__4737__auto___40996 < len__4736__auto___40995)){
args__4742__auto__.push((arguments[i__4737__auto___40996]));

var G__40998 = (i__4737__auto___40996 + (1));
i__4737__auto___40996 = G__40998;
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

var vec__40418_41002 = dommy.core.elem_and_selector(elem_sel);
var elem_41003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40418_41002,(0),null);
var selector_41004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40418_41002,(1),null);
var seq__40421_41005 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__40428_41006 = null;
var count__40429_41007 = (0);
var i__40430_41008 = (0);
while(true){
if((i__40430_41008 < count__40429_41007)){
var vec__40500_41009 = chunk__40428_41006.cljs$core$IIndexed$_nth$arity$2(null,i__40430_41008);
var orig_type_41010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40500_41009,(0),null);
var f_41011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40500_41009,(1),null);
var seq__40431_41015 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_41010,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_41010,cljs.core.identity])));
var chunk__40433_41016 = null;
var count__40434_41017 = (0);
var i__40435_41018 = (0);
while(true){
if((i__40435_41018 < count__40434_41017)){
var vec__40520_41019 = chunk__40433_41016.cljs$core$IIndexed$_nth$arity$2(null,i__40435_41018);
var actual_type_41020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40520_41019,(0),null);
var __41021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40520_41019,(1),null);
var keys_41022 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41004,actual_type_41020,f_41011], null);
var canonical_f_41023 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_41003),keys_41022);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41003,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_41022], 0));

if(cljs.core.truth_(elem_41003.removeEventListener)){
elem_41003.removeEventListener(cljs.core.name(actual_type_41020),canonical_f_41023);
} else {
elem_41003.detachEvent(cljs.core.name(actual_type_41020),canonical_f_41023);
}


var G__41026 = seq__40431_41015;
var G__41027 = chunk__40433_41016;
var G__41028 = count__40434_41017;
var G__41029 = (i__40435_41018 + (1));
seq__40431_41015 = G__41026;
chunk__40433_41016 = G__41027;
count__40434_41017 = G__41028;
i__40435_41018 = G__41029;
continue;
} else {
var temp__5735__auto___41034 = cljs.core.seq(seq__40431_41015);
if(temp__5735__auto___41034){
var seq__40431_41035__$1 = temp__5735__auto___41034;
if(cljs.core.chunked_seq_QMARK_(seq__40431_41035__$1)){
var c__4556__auto___41037 = cljs.core.chunk_first(seq__40431_41035__$1);
var G__41038 = cljs.core.chunk_rest(seq__40431_41035__$1);
var G__41039 = c__4556__auto___41037;
var G__41040 = cljs.core.count(c__4556__auto___41037);
var G__41041 = (0);
seq__40431_41015 = G__41038;
chunk__40433_41016 = G__41039;
count__40434_41017 = G__41040;
i__40435_41018 = G__41041;
continue;
} else {
var vec__40534_41042 = cljs.core.first(seq__40431_41035__$1);
var actual_type_41043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40534_41042,(0),null);
var __41044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40534_41042,(1),null);
var keys_41045 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41004,actual_type_41043,f_41011], null);
var canonical_f_41046 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_41003),keys_41045);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41003,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_41045], 0));

if(cljs.core.truth_(elem_41003.removeEventListener)){
elem_41003.removeEventListener(cljs.core.name(actual_type_41043),canonical_f_41046);
} else {
elem_41003.detachEvent(cljs.core.name(actual_type_41043),canonical_f_41046);
}


var G__41051 = cljs.core.next(seq__40431_41035__$1);
var G__41052 = null;
var G__41053 = (0);
var G__41054 = (0);
seq__40431_41015 = G__41051;
chunk__40433_41016 = G__41052;
count__40434_41017 = G__41053;
i__40435_41018 = G__41054;
continue;
}
} else {
}
}
break;
}

var G__41055 = seq__40421_41005;
var G__41056 = chunk__40428_41006;
var G__41057 = count__40429_41007;
var G__41058 = (i__40430_41008 + (1));
seq__40421_41005 = G__41055;
chunk__40428_41006 = G__41056;
count__40429_41007 = G__41057;
i__40430_41008 = G__41058;
continue;
} else {
var temp__5735__auto___41059 = cljs.core.seq(seq__40421_41005);
if(temp__5735__auto___41059){
var seq__40421_41060__$1 = temp__5735__auto___41059;
if(cljs.core.chunked_seq_QMARK_(seq__40421_41060__$1)){
var c__4556__auto___41061 = cljs.core.chunk_first(seq__40421_41060__$1);
var G__41062 = cljs.core.chunk_rest(seq__40421_41060__$1);
var G__41063 = c__4556__auto___41061;
var G__41064 = cljs.core.count(c__4556__auto___41061);
var G__41065 = (0);
seq__40421_41005 = G__41062;
chunk__40428_41006 = G__41063;
count__40429_41007 = G__41064;
i__40430_41008 = G__41065;
continue;
} else {
var vec__40537_41066 = cljs.core.first(seq__40421_41060__$1);
var orig_type_41067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40537_41066,(0),null);
var f_41068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40537_41066,(1),null);
var seq__40422_41074 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_41067,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_41067,cljs.core.identity])));
var chunk__40424_41075 = null;
var count__40425_41076 = (0);
var i__40426_41077 = (0);
while(true){
if((i__40426_41077 < count__40425_41076)){
var vec__40551_41079 = chunk__40424_41075.cljs$core$IIndexed$_nth$arity$2(null,i__40426_41077);
var actual_type_41080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40551_41079,(0),null);
var __41081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40551_41079,(1),null);
var keys_41083 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41004,actual_type_41080,f_41068], null);
var canonical_f_41084 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_41003),keys_41083);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41003,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_41083], 0));

if(cljs.core.truth_(elem_41003.removeEventListener)){
elem_41003.removeEventListener(cljs.core.name(actual_type_41080),canonical_f_41084);
} else {
elem_41003.detachEvent(cljs.core.name(actual_type_41080),canonical_f_41084);
}


var G__41087 = seq__40422_41074;
var G__41088 = chunk__40424_41075;
var G__41089 = count__40425_41076;
var G__41090 = (i__40426_41077 + (1));
seq__40422_41074 = G__41087;
chunk__40424_41075 = G__41088;
count__40425_41076 = G__41089;
i__40426_41077 = G__41090;
continue;
} else {
var temp__5735__auto___41093__$1 = cljs.core.seq(seq__40422_41074);
if(temp__5735__auto___41093__$1){
var seq__40422_41094__$1 = temp__5735__auto___41093__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40422_41094__$1)){
var c__4556__auto___41095 = cljs.core.chunk_first(seq__40422_41094__$1);
var G__41096 = cljs.core.chunk_rest(seq__40422_41094__$1);
var G__41097 = c__4556__auto___41095;
var G__41098 = cljs.core.count(c__4556__auto___41095);
var G__41099 = (0);
seq__40422_41074 = G__41096;
chunk__40424_41075 = G__41097;
count__40425_41076 = G__41098;
i__40426_41077 = G__41099;
continue;
} else {
var vec__40554_41101 = cljs.core.first(seq__40422_41094__$1);
var actual_type_41102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40554_41101,(0),null);
var __41103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40554_41101,(1),null);
var keys_41104 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41004,actual_type_41102,f_41068], null);
var canonical_f_41105 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_41003),keys_41104);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41003,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_41104], 0));

if(cljs.core.truth_(elem_41003.removeEventListener)){
elem_41003.removeEventListener(cljs.core.name(actual_type_41102),canonical_f_41105);
} else {
elem_41003.detachEvent(cljs.core.name(actual_type_41102),canonical_f_41105);
}


var G__41109 = cljs.core.next(seq__40422_41094__$1);
var G__41110 = null;
var G__41111 = (0);
var G__41112 = (0);
seq__40422_41074 = G__41109;
chunk__40424_41075 = G__41110;
count__40425_41076 = G__41111;
i__40426_41077 = G__41112;
continue;
}
} else {
}
}
break;
}

var G__41114 = cljs.core.next(seq__40421_41060__$1);
var G__41115 = null;
var G__41116 = (0);
var G__41117 = (0);
seq__40421_41005 = G__41114;
chunk__40428_41006 = G__41115;
count__40429_41007 = G__41116;
i__40430_41008 = G__41117;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq40416){
var G__40417 = cljs.core.first(seq40416);
var seq40416__$1 = cljs.core.next(seq40416);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40417,seq40416__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___41122 = arguments.length;
var i__4737__auto___41123 = (0);
while(true){
if((i__4737__auto___41123 < len__4736__auto___41122)){
args__4742__auto__.push((arguments[i__4737__auto___41123]));

var G__41125 = (i__4737__auto___41123 + (1));
i__4737__auto___41123 = G__41125;
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

var vec__40559_41128 = dommy.core.elem_and_selector(elem_sel);
var elem_41129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40559_41128,(0),null);
var selector_41130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40559_41128,(1),null);
var seq__40562_41132 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__40563_41133 = null;
var count__40564_41134 = (0);
var i__40565_41135 = (0);
while(true){
if((i__40565_41135 < count__40564_41134)){
var vec__40572_41136 = chunk__40563_41133.cljs$core$IIndexed$_nth$arity$2(null,i__40565_41135);
var type_41137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40572_41136,(0),null);
var f_41138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40572_41136,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41137,((function (seq__40562_41132,chunk__40563_41133,count__40564_41134,i__40565_41135,vec__40572_41136,type_41137,f_41138,vec__40559_41128,elem_41129,selector_41130){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41137,dommy$core$this_fn], 0));

return (f_41138.cljs$core$IFn$_invoke$arity$1 ? f_41138.cljs$core$IFn$_invoke$arity$1(e) : f_41138.call(null,e));
});})(seq__40562_41132,chunk__40563_41133,count__40564_41134,i__40565_41135,vec__40572_41136,type_41137,f_41138,vec__40559_41128,elem_41129,selector_41130))
], 0));


var G__41142 = seq__40562_41132;
var G__41143 = chunk__40563_41133;
var G__41144 = count__40564_41134;
var G__41145 = (i__40565_41135 + (1));
seq__40562_41132 = G__41142;
chunk__40563_41133 = G__41143;
count__40564_41134 = G__41144;
i__40565_41135 = G__41145;
continue;
} else {
var temp__5735__auto___41149 = cljs.core.seq(seq__40562_41132);
if(temp__5735__auto___41149){
var seq__40562_41150__$1 = temp__5735__auto___41149;
if(cljs.core.chunked_seq_QMARK_(seq__40562_41150__$1)){
var c__4556__auto___41151 = cljs.core.chunk_first(seq__40562_41150__$1);
var G__41152 = cljs.core.chunk_rest(seq__40562_41150__$1);
var G__41153 = c__4556__auto___41151;
var G__41154 = cljs.core.count(c__4556__auto___41151);
var G__41155 = (0);
seq__40562_41132 = G__41152;
chunk__40563_41133 = G__41153;
count__40564_41134 = G__41154;
i__40565_41135 = G__41155;
continue;
} else {
var vec__40575_41156 = cljs.core.first(seq__40562_41150__$1);
var type_41157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40575_41156,(0),null);
var f_41158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40575_41156,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41157,((function (seq__40562_41132,chunk__40563_41133,count__40564_41134,i__40565_41135,vec__40575_41156,type_41157,f_41158,seq__40562_41150__$1,temp__5735__auto___41149,vec__40559_41128,elem_41129,selector_41130){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41157,dommy$core$this_fn], 0));

return (f_41158.cljs$core$IFn$_invoke$arity$1 ? f_41158.cljs$core$IFn$_invoke$arity$1(e) : f_41158.call(null,e));
});})(seq__40562_41132,chunk__40563_41133,count__40564_41134,i__40565_41135,vec__40575_41156,type_41157,f_41158,seq__40562_41150__$1,temp__5735__auto___41149,vec__40559_41128,elem_41129,selector_41130))
], 0));


var G__41168 = cljs.core.next(seq__40562_41150__$1);
var G__41169 = null;
var G__41170 = (0);
var G__41171 = (0);
seq__40562_41132 = G__41168;
chunk__40563_41133 = G__41169;
count__40564_41134 = G__41170;
i__40565_41135 = G__41171;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq40557){
var G__40558 = cljs.core.first(seq40557);
var seq40557__$1 = cljs.core.next(seq40557);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40558,seq40557__$1);
}));


//# sourceMappingURL=dommy.core.js.map
