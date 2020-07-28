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
var G__41169 = arguments.length;
switch (G__41169) {
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
var G__41171 = arguments.length;
switch (G__41171) {
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
var G__41174 = arguments.length;
switch (G__41174) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__41172_SHARP_){
return (!((p1__41172_SHARP_ === base)));
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
var len__4789__auto___41616 = arguments.length;
var i__4790__auto___41617 = (0);
while(true){
if((i__4790__auto___41617 < len__4789__auto___41616)){
args__4795__auto__.push((arguments[i__4790__auto___41617]));

var G__41618 = (i__4790__auto___41617 + (1));
i__4790__auto___41617 = G__41618;
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
var seq__41179_41619 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__41180_41620 = null;
var count__41181_41621 = (0);
var i__41182_41622 = (0);
while(true){
if((i__41182_41622 < count__41181_41621)){
var vec__41189_41623 = chunk__41180_41620.cljs$core$IIndexed$_nth$arity$2(null,i__41182_41622);
var k_41624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41189_41623,(0),null);
var v_41625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41189_41623,(1),null);
style.setProperty(dommy.utils.as_str(k_41624),v_41625);


var G__41626 = seq__41179_41619;
var G__41627 = chunk__41180_41620;
var G__41628 = count__41181_41621;
var G__41629 = (i__41182_41622 + (1));
seq__41179_41619 = G__41626;
chunk__41180_41620 = G__41627;
count__41181_41621 = G__41628;
i__41182_41622 = G__41629;
continue;
} else {
var temp__5735__auto___41630 = cljs.core.seq(seq__41179_41619);
if(temp__5735__auto___41630){
var seq__41179_41631__$1 = temp__5735__auto___41630;
if(cljs.core.chunked_seq_QMARK_(seq__41179_41631__$1)){
var c__4609__auto___41632 = cljs.core.chunk_first(seq__41179_41631__$1);
var G__41633 = cljs.core.chunk_rest(seq__41179_41631__$1);
var G__41634 = c__4609__auto___41632;
var G__41635 = cljs.core.count(c__4609__auto___41632);
var G__41636 = (0);
seq__41179_41619 = G__41633;
chunk__41180_41620 = G__41634;
count__41181_41621 = G__41635;
i__41182_41622 = G__41636;
continue;
} else {
var vec__41192_41637 = cljs.core.first(seq__41179_41631__$1);
var k_41638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41192_41637,(0),null);
var v_41639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41192_41637,(1),null);
style.setProperty(dommy.utils.as_str(k_41638),v_41639);


var G__41640 = cljs.core.next(seq__41179_41631__$1);
var G__41641 = null;
var G__41642 = (0);
var G__41643 = (0);
seq__41179_41619 = G__41640;
chunk__41180_41620 = G__41641;
count__41181_41621 = G__41642;
i__41182_41622 = G__41643;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq41177){
var G__41178 = cljs.core.first(seq41177);
var seq41177__$1 = cljs.core.next(seq41177);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41178,seq41177__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41644 = arguments.length;
var i__4790__auto___41645 = (0);
while(true){
if((i__4790__auto___41645 < len__4789__auto___41644)){
args__4795__auto__.push((arguments[i__4790__auto___41645]));

var G__41646 = (i__4790__auto___41645 + (1));
i__4790__auto___41645 = G__41646;
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
var seq__41197_41647 = cljs.core.seq(keywords);
var chunk__41198_41648 = null;
var count__41199_41649 = (0);
var i__41200_41650 = (0);
while(true){
if((i__41200_41650 < count__41199_41649)){
var kw_41651 = chunk__41198_41648.cljs$core$IIndexed$_nth$arity$2(null,i__41200_41650);
style.removeProperty(dommy.utils.as_str(kw_41651));


var G__41652 = seq__41197_41647;
var G__41653 = chunk__41198_41648;
var G__41654 = count__41199_41649;
var G__41655 = (i__41200_41650 + (1));
seq__41197_41647 = G__41652;
chunk__41198_41648 = G__41653;
count__41199_41649 = G__41654;
i__41200_41650 = G__41655;
continue;
} else {
var temp__5735__auto___41656 = cljs.core.seq(seq__41197_41647);
if(temp__5735__auto___41656){
var seq__41197_41657__$1 = temp__5735__auto___41656;
if(cljs.core.chunked_seq_QMARK_(seq__41197_41657__$1)){
var c__4609__auto___41658 = cljs.core.chunk_first(seq__41197_41657__$1);
var G__41659 = cljs.core.chunk_rest(seq__41197_41657__$1);
var G__41660 = c__4609__auto___41658;
var G__41661 = cljs.core.count(c__4609__auto___41658);
var G__41662 = (0);
seq__41197_41647 = G__41659;
chunk__41198_41648 = G__41660;
count__41199_41649 = G__41661;
i__41200_41650 = G__41662;
continue;
} else {
var kw_41663 = cljs.core.first(seq__41197_41657__$1);
style.removeProperty(dommy.utils.as_str(kw_41663));


var G__41664 = cljs.core.next(seq__41197_41657__$1);
var G__41665 = null;
var G__41666 = (0);
var G__41667 = (0);
seq__41197_41647 = G__41664;
chunk__41198_41648 = G__41665;
count__41199_41649 = G__41666;
i__41200_41650 = G__41667;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq41195){
var G__41196 = cljs.core.first(seq41195);
var seq41195__$1 = cljs.core.next(seq41195);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41196,seq41195__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41668 = arguments.length;
var i__4790__auto___41669 = (0);
while(true){
if((i__4790__auto___41669 < len__4789__auto___41668)){
args__4795__auto__.push((arguments[i__4790__auto___41669]));

var G__41670 = (i__4790__auto___41669 + (1));
i__4790__auto___41669 = G__41670;
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

var seq__41204_41671 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__41205_41672 = null;
var count__41206_41673 = (0);
var i__41207_41674 = (0);
while(true){
if((i__41207_41674 < count__41206_41673)){
var vec__41214_41675 = chunk__41205_41672.cljs$core$IIndexed$_nth$arity$2(null,i__41207_41674);
var k_41676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41214_41675,(0),null);
var v_41677 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41214_41675,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_41676,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_41677),"px"].join('')], 0));


var G__41678 = seq__41204_41671;
var G__41679 = chunk__41205_41672;
var G__41680 = count__41206_41673;
var G__41681 = (i__41207_41674 + (1));
seq__41204_41671 = G__41678;
chunk__41205_41672 = G__41679;
count__41206_41673 = G__41680;
i__41207_41674 = G__41681;
continue;
} else {
var temp__5735__auto___41682 = cljs.core.seq(seq__41204_41671);
if(temp__5735__auto___41682){
var seq__41204_41683__$1 = temp__5735__auto___41682;
if(cljs.core.chunked_seq_QMARK_(seq__41204_41683__$1)){
var c__4609__auto___41684 = cljs.core.chunk_first(seq__41204_41683__$1);
var G__41685 = cljs.core.chunk_rest(seq__41204_41683__$1);
var G__41686 = c__4609__auto___41684;
var G__41687 = cljs.core.count(c__4609__auto___41684);
var G__41688 = (0);
seq__41204_41671 = G__41685;
chunk__41205_41672 = G__41686;
count__41206_41673 = G__41687;
i__41207_41674 = G__41688;
continue;
} else {
var vec__41217_41689 = cljs.core.first(seq__41204_41683__$1);
var k_41690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41217_41689,(0),null);
var v_41691 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41217_41689,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_41690,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_41691),"px"].join('')], 0));


var G__41692 = cljs.core.next(seq__41204_41683__$1);
var G__41693 = null;
var G__41694 = (0);
var G__41695 = (0);
seq__41204_41671 = G__41692;
chunk__41205_41672 = G__41693;
count__41206_41673 = G__41694;
i__41207_41674 = G__41695;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq41202){
var G__41203 = cljs.core.first(seq41202);
var seq41202__$1 = cljs.core.next(seq41202);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41203,seq41202__$1);
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
var G__41225 = arguments.length;
switch (G__41225) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41697 = arguments.length;
var i__4790__auto___41698 = (0);
while(true){
if((i__4790__auto___41698 < len__4789__auto___41697)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41698]));

var G__41699 = (i__4790__auto___41698 + (1));
i__4790__auto___41698 = G__41699;
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
var G__41226 = elem;
(G__41226[k__$1] = v);

return G__41226;
} else {
var G__41227 = elem;
G__41227.setAttribute(k__$1,v);

return G__41227;
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

var seq__41228_41700 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__41229_41701 = null;
var count__41230_41702 = (0);
var i__41231_41703 = (0);
while(true){
if((i__41231_41703 < count__41230_41702)){
var vec__41238_41704 = chunk__41229_41701.cljs$core$IIndexed$_nth$arity$2(null,i__41231_41703);
var k_41705__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41238_41704,(0),null);
var v_41706__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41238_41704,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_41705__$1,v_41706__$1);


var G__41708 = seq__41228_41700;
var G__41709 = chunk__41229_41701;
var G__41710 = count__41230_41702;
var G__41711 = (i__41231_41703 + (1));
seq__41228_41700 = G__41708;
chunk__41229_41701 = G__41709;
count__41230_41702 = G__41710;
i__41231_41703 = G__41711;
continue;
} else {
var temp__5735__auto___41713 = cljs.core.seq(seq__41228_41700);
if(temp__5735__auto___41713){
var seq__41228_41714__$1 = temp__5735__auto___41713;
if(cljs.core.chunked_seq_QMARK_(seq__41228_41714__$1)){
var c__4609__auto___41715 = cljs.core.chunk_first(seq__41228_41714__$1);
var G__41716 = cljs.core.chunk_rest(seq__41228_41714__$1);
var G__41717 = c__4609__auto___41715;
var G__41718 = cljs.core.count(c__4609__auto___41715);
var G__41719 = (0);
seq__41228_41700 = G__41716;
chunk__41229_41701 = G__41717;
count__41230_41702 = G__41718;
i__41231_41703 = G__41719;
continue;
} else {
var vec__41241_41720 = cljs.core.first(seq__41228_41714__$1);
var k_41721__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41241_41720,(0),null);
var v_41722__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41241_41720,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_41721__$1,v_41722__$1);


var G__41723 = cljs.core.next(seq__41228_41714__$1);
var G__41724 = null;
var G__41725 = (0);
var G__41726 = (0);
seq__41228_41700 = G__41723;
chunk__41229_41701 = G__41724;
count__41230_41702 = G__41725;
i__41231_41703 = G__41726;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq41221){
var G__41222 = cljs.core.first(seq41221);
var seq41221__$1 = cljs.core.next(seq41221);
var G__41223 = cljs.core.first(seq41221__$1);
var seq41221__$2 = cljs.core.next(seq41221__$1);
var G__41224 = cljs.core.first(seq41221__$2);
var seq41221__$3 = cljs.core.next(seq41221__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41222,G__41223,G__41224,seq41221__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__41248 = arguments.length;
switch (G__41248) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41728 = arguments.length;
var i__4790__auto___41729 = (0);
while(true){
if((i__4790__auto___41729 < len__4789__auto___41728)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41729]));

var G__41730 = (i__4790__auto___41729 + (1));
i__4790__auto___41729 = G__41730;
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
var k_41731__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__41249 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__41249.cljs$core$IFn$_invoke$arity$1 ? fexpr__41249.cljs$core$IFn$_invoke$arity$1(k_41731__$1) : fexpr__41249.call(null,k_41731__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_41731__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__41250_41733 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__41251_41734 = null;
var count__41252_41735 = (0);
var i__41253_41736 = (0);
while(true){
if((i__41253_41736 < count__41252_41735)){
var k_41738__$1 = chunk__41251_41734.cljs$core$IIndexed$_nth$arity$2(null,i__41253_41736);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_41738__$1);


var G__41739 = seq__41250_41733;
var G__41740 = chunk__41251_41734;
var G__41741 = count__41252_41735;
var G__41742 = (i__41253_41736 + (1));
seq__41250_41733 = G__41739;
chunk__41251_41734 = G__41740;
count__41252_41735 = G__41741;
i__41253_41736 = G__41742;
continue;
} else {
var temp__5735__auto___41743 = cljs.core.seq(seq__41250_41733);
if(temp__5735__auto___41743){
var seq__41250_41744__$1 = temp__5735__auto___41743;
if(cljs.core.chunked_seq_QMARK_(seq__41250_41744__$1)){
var c__4609__auto___41745 = cljs.core.chunk_first(seq__41250_41744__$1);
var G__41746 = cljs.core.chunk_rest(seq__41250_41744__$1);
var G__41747 = c__4609__auto___41745;
var G__41748 = cljs.core.count(c__4609__auto___41745);
var G__41749 = (0);
seq__41250_41733 = G__41746;
chunk__41251_41734 = G__41747;
count__41252_41735 = G__41748;
i__41253_41736 = G__41749;
continue;
} else {
var k_41750__$1 = cljs.core.first(seq__41250_41744__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_41750__$1);


var G__41751 = cljs.core.next(seq__41250_41744__$1);
var G__41752 = null;
var G__41753 = (0);
var G__41754 = (0);
seq__41250_41733 = G__41751;
chunk__41251_41734 = G__41752;
count__41252_41735 = G__41753;
i__41253_41736 = G__41754;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq41245){
var G__41246 = cljs.core.first(seq41245);
var seq41245__$1 = cljs.core.next(seq41245);
var G__41247 = cljs.core.first(seq41245__$1);
var seq41245__$2 = cljs.core.next(seq41245__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41246,G__41247,seq41245__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__41255 = arguments.length;
switch (G__41255) {
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
var G__41260 = arguments.length;
switch (G__41260) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41759 = arguments.length;
var i__4790__auto___41760 = (0);
while(true){
if((i__4790__auto___41760 < len__4789__auto___41759)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41760]));

var G__41761 = (i__4790__auto___41760 + (1));
i__4790__auto___41760 = G__41761;
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
var temp__5733__auto___41762 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___41762)){
var class_list_41763 = temp__5733__auto___41762;
var seq__41261_41764 = cljs.core.seq(classes__$1);
var chunk__41262_41765 = null;
var count__41263_41766 = (0);
var i__41264_41767 = (0);
while(true){
if((i__41264_41767 < count__41263_41766)){
var c_41768 = chunk__41262_41765.cljs$core$IIndexed$_nth$arity$2(null,i__41264_41767);
class_list_41763.add(c_41768);


var G__41769 = seq__41261_41764;
var G__41770 = chunk__41262_41765;
var G__41771 = count__41263_41766;
var G__41772 = (i__41264_41767 + (1));
seq__41261_41764 = G__41769;
chunk__41262_41765 = G__41770;
count__41263_41766 = G__41771;
i__41264_41767 = G__41772;
continue;
} else {
var temp__5735__auto___41773 = cljs.core.seq(seq__41261_41764);
if(temp__5735__auto___41773){
var seq__41261_41774__$1 = temp__5735__auto___41773;
if(cljs.core.chunked_seq_QMARK_(seq__41261_41774__$1)){
var c__4609__auto___41775 = cljs.core.chunk_first(seq__41261_41774__$1);
var G__41776 = cljs.core.chunk_rest(seq__41261_41774__$1);
var G__41777 = c__4609__auto___41775;
var G__41778 = cljs.core.count(c__4609__auto___41775);
var G__41779 = (0);
seq__41261_41764 = G__41776;
chunk__41262_41765 = G__41777;
count__41263_41766 = G__41778;
i__41264_41767 = G__41779;
continue;
} else {
var c_41780 = cljs.core.first(seq__41261_41774__$1);
class_list_41763.add(c_41780);


var G__41781 = cljs.core.next(seq__41261_41774__$1);
var G__41782 = null;
var G__41783 = (0);
var G__41784 = (0);
seq__41261_41764 = G__41781;
chunk__41262_41765 = G__41782;
count__41263_41766 = G__41783;
i__41264_41767 = G__41784;
continue;
}
} else {
}
}
break;
}
} else {
var seq__41265_41785 = cljs.core.seq(classes__$1);
var chunk__41266_41786 = null;
var count__41267_41787 = (0);
var i__41268_41788 = (0);
while(true){
if((i__41268_41788 < count__41267_41787)){
var c_41789 = chunk__41266_41786.cljs$core$IIndexed$_nth$arity$2(null,i__41268_41788);
var class_name_41790 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_41790,c_41789))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_41790 === ""))?c_41789:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_41790)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_41789)].join('')));
}


var G__41791 = seq__41265_41785;
var G__41792 = chunk__41266_41786;
var G__41793 = count__41267_41787;
var G__41794 = (i__41268_41788 + (1));
seq__41265_41785 = G__41791;
chunk__41266_41786 = G__41792;
count__41267_41787 = G__41793;
i__41268_41788 = G__41794;
continue;
} else {
var temp__5735__auto___41795 = cljs.core.seq(seq__41265_41785);
if(temp__5735__auto___41795){
var seq__41265_41796__$1 = temp__5735__auto___41795;
if(cljs.core.chunked_seq_QMARK_(seq__41265_41796__$1)){
var c__4609__auto___41797 = cljs.core.chunk_first(seq__41265_41796__$1);
var G__41798 = cljs.core.chunk_rest(seq__41265_41796__$1);
var G__41799 = c__4609__auto___41797;
var G__41800 = cljs.core.count(c__4609__auto___41797);
var G__41801 = (0);
seq__41265_41785 = G__41798;
chunk__41266_41786 = G__41799;
count__41267_41787 = G__41800;
i__41268_41788 = G__41801;
continue;
} else {
var c_41802 = cljs.core.first(seq__41265_41796__$1);
var class_name_41803 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_41803,c_41802))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_41803 === ""))?c_41802:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_41803)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_41802)].join('')));
}


var G__41804 = cljs.core.next(seq__41265_41796__$1);
var G__41805 = null;
var G__41806 = (0);
var G__41807 = (0);
seq__41265_41785 = G__41804;
chunk__41266_41786 = G__41805;
count__41267_41787 = G__41806;
i__41268_41788 = G__41807;
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
var seq__41269_41808 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__41270_41809 = null;
var count__41271_41810 = (0);
var i__41272_41811 = (0);
while(true){
if((i__41272_41811 < count__41271_41810)){
var c_41812 = chunk__41270_41809.cljs$core$IIndexed$_nth$arity$2(null,i__41272_41811);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_41812);


var G__41813 = seq__41269_41808;
var G__41814 = chunk__41270_41809;
var G__41815 = count__41271_41810;
var G__41816 = (i__41272_41811 + (1));
seq__41269_41808 = G__41813;
chunk__41270_41809 = G__41814;
count__41271_41810 = G__41815;
i__41272_41811 = G__41816;
continue;
} else {
var temp__5735__auto___41817 = cljs.core.seq(seq__41269_41808);
if(temp__5735__auto___41817){
var seq__41269_41818__$1 = temp__5735__auto___41817;
if(cljs.core.chunked_seq_QMARK_(seq__41269_41818__$1)){
var c__4609__auto___41819 = cljs.core.chunk_first(seq__41269_41818__$1);
var G__41820 = cljs.core.chunk_rest(seq__41269_41818__$1);
var G__41821 = c__4609__auto___41819;
var G__41822 = cljs.core.count(c__4609__auto___41819);
var G__41823 = (0);
seq__41269_41808 = G__41820;
chunk__41270_41809 = G__41821;
count__41271_41810 = G__41822;
i__41272_41811 = G__41823;
continue;
} else {
var c_41824 = cljs.core.first(seq__41269_41818__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_41824);


var G__41825 = cljs.core.next(seq__41269_41818__$1);
var G__41826 = null;
var G__41827 = (0);
var G__41828 = (0);
seq__41269_41808 = G__41825;
chunk__41270_41809 = G__41826;
count__41271_41810 = G__41827;
i__41272_41811 = G__41828;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq41257){
var G__41258 = cljs.core.first(seq41257);
var seq41257__$1 = cljs.core.next(seq41257);
var G__41259 = cljs.core.first(seq41257__$1);
var seq41257__$2 = cljs.core.next(seq41257__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41258,G__41259,seq41257__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__41277 = arguments.length;
switch (G__41277) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41830 = arguments.length;
var i__4790__auto___41831 = (0);
while(true){
if((i__4790__auto___41831 < len__4789__auto___41830)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41831]));

var G__41832 = (i__4790__auto___41831 + (1));
i__4790__auto___41831 = G__41832;
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
var temp__5733__auto___41833 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___41833)){
var class_list_41834 = temp__5733__auto___41833;
class_list_41834.remove(c__$1);
} else {
var class_name_41835 = dommy.core.class$(elem);
var new_class_name_41836 = dommy.utils.remove_class_str(class_name_41835,c__$1);
if((class_name_41835 === new_class_name_41836)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_41836);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__41278 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__41279 = null;
var count__41280 = (0);
var i__41281 = (0);
while(true){
if((i__41281 < count__41280)){
var c = chunk__41279.cljs$core$IIndexed$_nth$arity$2(null,i__41281);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__41837 = seq__41278;
var G__41838 = chunk__41279;
var G__41839 = count__41280;
var G__41840 = (i__41281 + (1));
seq__41278 = G__41837;
chunk__41279 = G__41838;
count__41280 = G__41839;
i__41281 = G__41840;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41278);
if(temp__5735__auto__){
var seq__41278__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41278__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41278__$1);
var G__41841 = cljs.core.chunk_rest(seq__41278__$1);
var G__41842 = c__4609__auto__;
var G__41843 = cljs.core.count(c__4609__auto__);
var G__41844 = (0);
seq__41278 = G__41841;
chunk__41279 = G__41842;
count__41280 = G__41843;
i__41281 = G__41844;
continue;
} else {
var c = cljs.core.first(seq__41278__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__41845 = cljs.core.next(seq__41278__$1);
var G__41846 = null;
var G__41847 = (0);
var G__41848 = (0);
seq__41278 = G__41845;
chunk__41279 = G__41846;
count__41280 = G__41847;
i__41281 = G__41848;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq41274){
var G__41275 = cljs.core.first(seq41274);
var seq41274__$1 = cljs.core.next(seq41274);
var G__41276 = cljs.core.first(seq41274__$1);
var seq41274__$2 = cljs.core.next(seq41274__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41275,G__41276,seq41274__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__41284 = arguments.length;
switch (G__41284) {
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
var temp__5733__auto___41850 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___41850)){
var class_list_41851 = temp__5733__auto___41850;
class_list_41851.toggle(c__$1);
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
var G__41286 = arguments.length;
switch (G__41286) {
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
var G__41290 = arguments.length;
switch (G__41290) {
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
var G__41295 = arguments.length;
switch (G__41295) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41857 = arguments.length;
var i__4790__auto___41858 = (0);
while(true){
if((i__4790__auto___41858 < len__4789__auto___41857)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41858]));

var G__41859 = (i__4790__auto___41858 + (1));
i__4790__auto___41858 = G__41859;
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
var G__41296 = parent;
G__41296.appendChild(child);

return G__41296;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__41297_41861 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__41298_41862 = null;
var count__41299_41863 = (0);
var i__41300_41864 = (0);
while(true){
if((i__41300_41864 < count__41299_41863)){
var c_41866 = chunk__41298_41862.cljs$core$IIndexed$_nth$arity$2(null,i__41300_41864);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41866);


var G__41868 = seq__41297_41861;
var G__41869 = chunk__41298_41862;
var G__41870 = count__41299_41863;
var G__41871 = (i__41300_41864 + (1));
seq__41297_41861 = G__41868;
chunk__41298_41862 = G__41869;
count__41299_41863 = G__41870;
i__41300_41864 = G__41871;
continue;
} else {
var temp__5735__auto___41872 = cljs.core.seq(seq__41297_41861);
if(temp__5735__auto___41872){
var seq__41297_41873__$1 = temp__5735__auto___41872;
if(cljs.core.chunked_seq_QMARK_(seq__41297_41873__$1)){
var c__4609__auto___41875 = cljs.core.chunk_first(seq__41297_41873__$1);
var G__41876 = cljs.core.chunk_rest(seq__41297_41873__$1);
var G__41877 = c__4609__auto___41875;
var G__41878 = cljs.core.count(c__4609__auto___41875);
var G__41879 = (0);
seq__41297_41861 = G__41876;
chunk__41298_41862 = G__41877;
count__41299_41863 = G__41878;
i__41300_41864 = G__41879;
continue;
} else {
var c_41880 = cljs.core.first(seq__41297_41873__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41880);


var G__41881 = cljs.core.next(seq__41297_41873__$1);
var G__41882 = null;
var G__41883 = (0);
var G__41884 = (0);
seq__41297_41861 = G__41881;
chunk__41298_41862 = G__41882;
count__41299_41863 = G__41883;
i__41300_41864 = G__41884;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq41292){
var G__41293 = cljs.core.first(seq41292);
var seq41292__$1 = cljs.core.next(seq41292);
var G__41294 = cljs.core.first(seq41292__$1);
var seq41292__$2 = cljs.core.next(seq41292__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41293,G__41294,seq41292__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__41305 = arguments.length;
switch (G__41305) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41891 = arguments.length;
var i__4790__auto___41892 = (0);
while(true){
if((i__4790__auto___41892 < len__4789__auto___41891)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41892]));

var G__41893 = (i__4790__auto___41892 + (1));
i__4790__auto___41892 = G__41893;
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
var G__41306 = parent;
G__41306.insertBefore(child,parent.firstChild);

return G__41306;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__41307_41895 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__41308_41896 = null;
var count__41309_41897 = (0);
var i__41310_41898 = (0);
while(true){
if((i__41310_41898 < count__41309_41897)){
var c_41900 = chunk__41308_41896.cljs$core$IIndexed$_nth$arity$2(null,i__41310_41898);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41900);


var G__41901 = seq__41307_41895;
var G__41902 = chunk__41308_41896;
var G__41903 = count__41309_41897;
var G__41904 = (i__41310_41898 + (1));
seq__41307_41895 = G__41901;
chunk__41308_41896 = G__41902;
count__41309_41897 = G__41903;
i__41310_41898 = G__41904;
continue;
} else {
var temp__5735__auto___41905 = cljs.core.seq(seq__41307_41895);
if(temp__5735__auto___41905){
var seq__41307_41906__$1 = temp__5735__auto___41905;
if(cljs.core.chunked_seq_QMARK_(seq__41307_41906__$1)){
var c__4609__auto___41907 = cljs.core.chunk_first(seq__41307_41906__$1);
var G__41908 = cljs.core.chunk_rest(seq__41307_41906__$1);
var G__41909 = c__4609__auto___41907;
var G__41910 = cljs.core.count(c__4609__auto___41907);
var G__41911 = (0);
seq__41307_41895 = G__41908;
chunk__41308_41896 = G__41909;
count__41309_41897 = G__41910;
i__41310_41898 = G__41911;
continue;
} else {
var c_41912 = cljs.core.first(seq__41307_41906__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41912);


var G__41913 = cljs.core.next(seq__41307_41906__$1);
var G__41914 = null;
var G__41915 = (0);
var G__41916 = (0);
seq__41307_41895 = G__41913;
chunk__41308_41896 = G__41914;
count__41309_41897 = G__41915;
i__41310_41898 = G__41916;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq41302){
var G__41303 = cljs.core.first(seq41302);
var seq41302__$1 = cljs.core.next(seq41302);
var G__41304 = cljs.core.first(seq41302__$1);
var seq41302__$2 = cljs.core.next(seq41302__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41303,G__41304,seq41302__$2);
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
var temp__5733__auto___41921 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___41921)){
var next_41922 = temp__5733__auto___41921;
dommy.core.insert_before_BANG_(elem,next_41922);
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
var G__41312 = arguments.length;
switch (G__41312) {
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
var G__41313 = p;
G__41313.removeChild(elem);

return G__41313;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__41314){
var vec__41315 = p__41314;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41315,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41315,(1),null);
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
var len__4789__auto___41934 = arguments.length;
var i__4790__auto___41935 = (0);
while(true){
if((i__4790__auto___41935 < len__4789__auto___41934)){
args__4795__auto__.push((arguments[i__4790__auto___41935]));

var G__41936 = (i__4790__auto___41935 + (1));
i__4790__auto___41935 = G__41936;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq41318){
var G__41319 = cljs.core.first(seq41318);
var seq41318__$1 = cljs.core.next(seq41318);
var G__41320 = cljs.core.first(seq41318__$1);
var seq41318__$2 = cljs.core.next(seq41318__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41319,G__41320,seq41318__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__41321 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__41321.cljs$core$IFn$_invoke$arity$1 ? fexpr__41321.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__41321.call(null,elem_sel));
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
var len__4789__auto___41937 = arguments.length;
var i__4790__auto___41938 = (0);
while(true){
if((i__4790__auto___41938 < len__4789__auto___41937)){
args__4795__auto__.push((arguments[i__4790__auto___41938]));

var G__41939 = (i__4790__auto___41938 + (1));
i__4790__auto___41938 = G__41939;
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

var vec__41327_41940 = dommy.core.elem_and_selector(elem_sel);
var elem_41941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41327_41940,(0),null);
var selector_41942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41327_41940,(1),null);
var seq__41330_41943 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__41337_41944 = null;
var count__41338_41945 = (0);
var i__41339_41946 = (0);
while(true){
if((i__41339_41946 < count__41338_41945)){
var vec__41395_41947 = chunk__41337_41944.cljs$core$IIndexed$_nth$arity$2(null,i__41339_41946);
var orig_type_41948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41395_41947,(0),null);
var f_41949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41395_41947,(1),null);
var seq__41340_41950 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_41948,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_41948,cljs.core.identity])));
var chunk__41342_41951 = null;
var count__41343_41952 = (0);
var i__41344_41953 = (0);
while(true){
if((i__41344_41953 < count__41343_41952)){
var vec__41408_41954 = chunk__41342_41951.cljs$core$IIndexed$_nth$arity$2(null,i__41344_41953);
var actual_type_41955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41408_41954,(0),null);
var factory_41956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41408_41954,(1),null);
var canonical_f_41957 = (function (){var G__41412 = (factory_41956.cljs$core$IFn$_invoke$arity$1 ? factory_41956.cljs$core$IFn$_invoke$arity$1(f_41949) : factory_41956.call(null,f_41949));
var fexpr__41411 = (cljs.core.truth_(selector_41942)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41941,selector_41942):cljs.core.identity);
return (fexpr__41411.cljs$core$IFn$_invoke$arity$1 ? fexpr__41411.cljs$core$IFn$_invoke$arity$1(G__41412) : fexpr__41411.call(null,G__41412));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41941,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41942,actual_type_41955,f_41949], null),canonical_f_41957], 0));

if(cljs.core.truth_(elem_41941.addEventListener)){
elem_41941.addEventListener(cljs.core.name(actual_type_41955),canonical_f_41957);
} else {
elem_41941.attachEvent(cljs.core.name(actual_type_41955),canonical_f_41957);
}


var G__41958 = seq__41340_41950;
var G__41959 = chunk__41342_41951;
var G__41960 = count__41343_41952;
var G__41961 = (i__41344_41953 + (1));
seq__41340_41950 = G__41958;
chunk__41342_41951 = G__41959;
count__41343_41952 = G__41960;
i__41344_41953 = G__41961;
continue;
} else {
var temp__5735__auto___41962 = cljs.core.seq(seq__41340_41950);
if(temp__5735__auto___41962){
var seq__41340_41963__$1 = temp__5735__auto___41962;
if(cljs.core.chunked_seq_QMARK_(seq__41340_41963__$1)){
var c__4609__auto___41964 = cljs.core.chunk_first(seq__41340_41963__$1);
var G__41965 = cljs.core.chunk_rest(seq__41340_41963__$1);
var G__41966 = c__4609__auto___41964;
var G__41967 = cljs.core.count(c__4609__auto___41964);
var G__41968 = (0);
seq__41340_41950 = G__41965;
chunk__41342_41951 = G__41966;
count__41343_41952 = G__41967;
i__41344_41953 = G__41968;
continue;
} else {
var vec__41413_41969 = cljs.core.first(seq__41340_41963__$1);
var actual_type_41970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41413_41969,(0),null);
var factory_41971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41413_41969,(1),null);
var canonical_f_41972 = (function (){var G__41417 = (factory_41971.cljs$core$IFn$_invoke$arity$1 ? factory_41971.cljs$core$IFn$_invoke$arity$1(f_41949) : factory_41971.call(null,f_41949));
var fexpr__41416 = (cljs.core.truth_(selector_41942)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41941,selector_41942):cljs.core.identity);
return (fexpr__41416.cljs$core$IFn$_invoke$arity$1 ? fexpr__41416.cljs$core$IFn$_invoke$arity$1(G__41417) : fexpr__41416.call(null,G__41417));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41941,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41942,actual_type_41970,f_41949], null),canonical_f_41972], 0));

if(cljs.core.truth_(elem_41941.addEventListener)){
elem_41941.addEventListener(cljs.core.name(actual_type_41970),canonical_f_41972);
} else {
elem_41941.attachEvent(cljs.core.name(actual_type_41970),canonical_f_41972);
}


var G__41973 = cljs.core.next(seq__41340_41963__$1);
var G__41974 = null;
var G__41975 = (0);
var G__41976 = (0);
seq__41340_41950 = G__41973;
chunk__41342_41951 = G__41974;
count__41343_41952 = G__41975;
i__41344_41953 = G__41976;
continue;
}
} else {
}
}
break;
}

var G__41977 = seq__41330_41943;
var G__41978 = chunk__41337_41944;
var G__41979 = count__41338_41945;
var G__41980 = (i__41339_41946 + (1));
seq__41330_41943 = G__41977;
chunk__41337_41944 = G__41978;
count__41338_41945 = G__41979;
i__41339_41946 = G__41980;
continue;
} else {
var temp__5735__auto___41981 = cljs.core.seq(seq__41330_41943);
if(temp__5735__auto___41981){
var seq__41330_41982__$1 = temp__5735__auto___41981;
if(cljs.core.chunked_seq_QMARK_(seq__41330_41982__$1)){
var c__4609__auto___41983 = cljs.core.chunk_first(seq__41330_41982__$1);
var G__41984 = cljs.core.chunk_rest(seq__41330_41982__$1);
var G__41985 = c__4609__auto___41983;
var G__41986 = cljs.core.count(c__4609__auto___41983);
var G__41987 = (0);
seq__41330_41943 = G__41984;
chunk__41337_41944 = G__41985;
count__41338_41945 = G__41986;
i__41339_41946 = G__41987;
continue;
} else {
var vec__41418_41988 = cljs.core.first(seq__41330_41982__$1);
var orig_type_41989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41418_41988,(0),null);
var f_41990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41418_41988,(1),null);
var seq__41331_41991 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_41989,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_41989,cljs.core.identity])));
var chunk__41333_41992 = null;
var count__41334_41993 = (0);
var i__41335_41994 = (0);
while(true){
if((i__41335_41994 < count__41334_41993)){
var vec__41435_41995 = chunk__41333_41992.cljs$core$IIndexed$_nth$arity$2(null,i__41335_41994);
var actual_type_41996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41435_41995,(0),null);
var factory_41997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41435_41995,(1),null);
var canonical_f_41998 = (function (){var G__41439 = (factory_41997.cljs$core$IFn$_invoke$arity$1 ? factory_41997.cljs$core$IFn$_invoke$arity$1(f_41990) : factory_41997.call(null,f_41990));
var fexpr__41438 = (cljs.core.truth_(selector_41942)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41941,selector_41942):cljs.core.identity);
return (fexpr__41438.cljs$core$IFn$_invoke$arity$1 ? fexpr__41438.cljs$core$IFn$_invoke$arity$1(G__41439) : fexpr__41438.call(null,G__41439));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41941,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41942,actual_type_41996,f_41990], null),canonical_f_41998], 0));

if(cljs.core.truth_(elem_41941.addEventListener)){
elem_41941.addEventListener(cljs.core.name(actual_type_41996),canonical_f_41998);
} else {
elem_41941.attachEvent(cljs.core.name(actual_type_41996),canonical_f_41998);
}


var G__41999 = seq__41331_41991;
var G__42000 = chunk__41333_41992;
var G__42001 = count__41334_41993;
var G__42002 = (i__41335_41994 + (1));
seq__41331_41991 = G__41999;
chunk__41333_41992 = G__42000;
count__41334_41993 = G__42001;
i__41335_41994 = G__42002;
continue;
} else {
var temp__5735__auto___42003__$1 = cljs.core.seq(seq__41331_41991);
if(temp__5735__auto___42003__$1){
var seq__41331_42004__$1 = temp__5735__auto___42003__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41331_42004__$1)){
var c__4609__auto___42005 = cljs.core.chunk_first(seq__41331_42004__$1);
var G__42006 = cljs.core.chunk_rest(seq__41331_42004__$1);
var G__42007 = c__4609__auto___42005;
var G__42008 = cljs.core.count(c__4609__auto___42005);
var G__42009 = (0);
seq__41331_41991 = G__42006;
chunk__41333_41992 = G__42007;
count__41334_41993 = G__42008;
i__41335_41994 = G__42009;
continue;
} else {
var vec__41440_42010 = cljs.core.first(seq__41331_42004__$1);
var actual_type_42011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41440_42010,(0),null);
var factory_42012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41440_42010,(1),null);
var canonical_f_42013 = (function (){var G__41444 = (factory_42012.cljs$core$IFn$_invoke$arity$1 ? factory_42012.cljs$core$IFn$_invoke$arity$1(f_41990) : factory_42012.call(null,f_41990));
var fexpr__41443 = (cljs.core.truth_(selector_41942)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41941,selector_41942):cljs.core.identity);
return (fexpr__41443.cljs$core$IFn$_invoke$arity$1 ? fexpr__41443.cljs$core$IFn$_invoke$arity$1(G__41444) : fexpr__41443.call(null,G__41444));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41941,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41942,actual_type_42011,f_41990], null),canonical_f_42013], 0));

if(cljs.core.truth_(elem_41941.addEventListener)){
elem_41941.addEventListener(cljs.core.name(actual_type_42011),canonical_f_42013);
} else {
elem_41941.attachEvent(cljs.core.name(actual_type_42011),canonical_f_42013);
}


var G__42014 = cljs.core.next(seq__41331_42004__$1);
var G__42015 = null;
var G__42016 = (0);
var G__42017 = (0);
seq__41331_41991 = G__42014;
chunk__41333_41992 = G__42015;
count__41334_41993 = G__42016;
i__41335_41994 = G__42017;
continue;
}
} else {
}
}
break;
}

var G__42018 = cljs.core.next(seq__41330_41982__$1);
var G__42019 = null;
var G__42020 = (0);
var G__42021 = (0);
seq__41330_41943 = G__42018;
chunk__41337_41944 = G__42019;
count__41338_41945 = G__42020;
i__41339_41946 = G__42021;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq41324){
var G__41325 = cljs.core.first(seq41324);
var seq41324__$1 = cljs.core.next(seq41324);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41325,seq41324__$1);
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
var len__4789__auto___42022 = arguments.length;
var i__4790__auto___42023 = (0);
while(true){
if((i__4790__auto___42023 < len__4789__auto___42022)){
args__4795__auto__.push((arguments[i__4790__auto___42023]));

var G__42024 = (i__4790__auto___42023 + (1));
i__4790__auto___42023 = G__42024;
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

var vec__41454_42025 = dommy.core.elem_and_selector(elem_sel);
var elem_42026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41454_42025,(0),null);
var selector_42027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41454_42025,(1),null);
var seq__41457_42028 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__41464_42029 = null;
var count__41465_42030 = (0);
var i__41466_42031 = (0);
while(true){
if((i__41466_42031 < count__41465_42030)){
var vec__41506_42032 = chunk__41464_42029.cljs$core$IIndexed$_nth$arity$2(null,i__41466_42031);
var orig_type_42033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41506_42032,(0),null);
var f_42034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41506_42032,(1),null);
var seq__41467_42035 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_42033,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_42033,cljs.core.identity])));
var chunk__41469_42036 = null;
var count__41470_42037 = (0);
var i__41471_42038 = (0);
while(true){
if((i__41471_42038 < count__41470_42037)){
var vec__41517_42039 = chunk__41469_42036.cljs$core$IIndexed$_nth$arity$2(null,i__41471_42038);
var actual_type_42040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41517_42039,(0),null);
var __42041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41517_42039,(1),null);
var keys_42042 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42027,actual_type_42040,f_42034], null);
var canonical_f_42043 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42026),keys_42042);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42026,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42042], 0));

if(cljs.core.truth_(elem_42026.removeEventListener)){
elem_42026.removeEventListener(cljs.core.name(actual_type_42040),canonical_f_42043);
} else {
elem_42026.detachEvent(cljs.core.name(actual_type_42040),canonical_f_42043);
}


var G__42047 = seq__41467_42035;
var G__42048 = chunk__41469_42036;
var G__42049 = count__41470_42037;
var G__42050 = (i__41471_42038 + (1));
seq__41467_42035 = G__42047;
chunk__41469_42036 = G__42048;
count__41470_42037 = G__42049;
i__41471_42038 = G__42050;
continue;
} else {
var temp__5735__auto___42052 = cljs.core.seq(seq__41467_42035);
if(temp__5735__auto___42052){
var seq__41467_42053__$1 = temp__5735__auto___42052;
if(cljs.core.chunked_seq_QMARK_(seq__41467_42053__$1)){
var c__4609__auto___42055 = cljs.core.chunk_first(seq__41467_42053__$1);
var G__42056 = cljs.core.chunk_rest(seq__41467_42053__$1);
var G__42057 = c__4609__auto___42055;
var G__42058 = cljs.core.count(c__4609__auto___42055);
var G__42059 = (0);
seq__41467_42035 = G__42056;
chunk__41469_42036 = G__42057;
count__41470_42037 = G__42058;
i__41471_42038 = G__42059;
continue;
} else {
var vec__41520_42061 = cljs.core.first(seq__41467_42053__$1);
var actual_type_42062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41520_42061,(0),null);
var __42063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41520_42061,(1),null);
var keys_42064 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42027,actual_type_42062,f_42034], null);
var canonical_f_42065 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42026),keys_42064);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42026,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42064], 0));

if(cljs.core.truth_(elem_42026.removeEventListener)){
elem_42026.removeEventListener(cljs.core.name(actual_type_42062),canonical_f_42065);
} else {
elem_42026.detachEvent(cljs.core.name(actual_type_42062),canonical_f_42065);
}


var G__42066 = cljs.core.next(seq__41467_42053__$1);
var G__42067 = null;
var G__42068 = (0);
var G__42069 = (0);
seq__41467_42035 = G__42066;
chunk__41469_42036 = G__42067;
count__41470_42037 = G__42068;
i__41471_42038 = G__42069;
continue;
}
} else {
}
}
break;
}

var G__42070 = seq__41457_42028;
var G__42071 = chunk__41464_42029;
var G__42072 = count__41465_42030;
var G__42073 = (i__41466_42031 + (1));
seq__41457_42028 = G__42070;
chunk__41464_42029 = G__42071;
count__41465_42030 = G__42072;
i__41466_42031 = G__42073;
continue;
} else {
var temp__5735__auto___42074 = cljs.core.seq(seq__41457_42028);
if(temp__5735__auto___42074){
var seq__41457_42075__$1 = temp__5735__auto___42074;
if(cljs.core.chunked_seq_QMARK_(seq__41457_42075__$1)){
var c__4609__auto___42076 = cljs.core.chunk_first(seq__41457_42075__$1);
var G__42077 = cljs.core.chunk_rest(seq__41457_42075__$1);
var G__42078 = c__4609__auto___42076;
var G__42079 = cljs.core.count(c__4609__auto___42076);
var G__42080 = (0);
seq__41457_42028 = G__42077;
chunk__41464_42029 = G__42078;
count__41465_42030 = G__42079;
i__41466_42031 = G__42080;
continue;
} else {
var vec__41527_42082 = cljs.core.first(seq__41457_42075__$1);
var orig_type_42083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41527_42082,(0),null);
var f_42084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41527_42082,(1),null);
var seq__41458_42088 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_42083,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_42083,cljs.core.identity])));
var chunk__41460_42089 = null;
var count__41461_42090 = (0);
var i__41462_42091 = (0);
while(true){
if((i__41462_42091 < count__41461_42090)){
var vec__41547_42092 = chunk__41460_42089.cljs$core$IIndexed$_nth$arity$2(null,i__41462_42091);
var actual_type_42093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41547_42092,(0),null);
var __42094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41547_42092,(1),null);
var keys_42095 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42027,actual_type_42093,f_42084], null);
var canonical_f_42096 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42026),keys_42095);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42026,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42095], 0));

if(cljs.core.truth_(elem_42026.removeEventListener)){
elem_42026.removeEventListener(cljs.core.name(actual_type_42093),canonical_f_42096);
} else {
elem_42026.detachEvent(cljs.core.name(actual_type_42093),canonical_f_42096);
}


var G__42100 = seq__41458_42088;
var G__42101 = chunk__41460_42089;
var G__42102 = count__41461_42090;
var G__42103 = (i__41462_42091 + (1));
seq__41458_42088 = G__42100;
chunk__41460_42089 = G__42101;
count__41461_42090 = G__42102;
i__41462_42091 = G__42103;
continue;
} else {
var temp__5735__auto___42104__$1 = cljs.core.seq(seq__41458_42088);
if(temp__5735__auto___42104__$1){
var seq__41458_42105__$1 = temp__5735__auto___42104__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41458_42105__$1)){
var c__4609__auto___42106 = cljs.core.chunk_first(seq__41458_42105__$1);
var G__42107 = cljs.core.chunk_rest(seq__41458_42105__$1);
var G__42108 = c__4609__auto___42106;
var G__42109 = cljs.core.count(c__4609__auto___42106);
var G__42110 = (0);
seq__41458_42088 = G__42107;
chunk__41460_42089 = G__42108;
count__41461_42090 = G__42109;
i__41462_42091 = G__42110;
continue;
} else {
var vec__41562_42111 = cljs.core.first(seq__41458_42105__$1);
var actual_type_42112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41562_42111,(0),null);
var __42113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41562_42111,(1),null);
var keys_42119 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42027,actual_type_42112,f_42084], null);
var canonical_f_42120 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42026),keys_42119);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42026,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42119], 0));

if(cljs.core.truth_(elem_42026.removeEventListener)){
elem_42026.removeEventListener(cljs.core.name(actual_type_42112),canonical_f_42120);
} else {
elem_42026.detachEvent(cljs.core.name(actual_type_42112),canonical_f_42120);
}


var G__42123 = cljs.core.next(seq__41458_42105__$1);
var G__42124 = null;
var G__42125 = (0);
var G__42126 = (0);
seq__41458_42088 = G__42123;
chunk__41460_42089 = G__42124;
count__41461_42090 = G__42125;
i__41462_42091 = G__42126;
continue;
}
} else {
}
}
break;
}

var G__42127 = cljs.core.next(seq__41457_42075__$1);
var G__42128 = null;
var G__42129 = (0);
var G__42130 = (0);
seq__41457_42028 = G__42127;
chunk__41464_42029 = G__42128;
count__41465_42030 = G__42129;
i__41466_42031 = G__42130;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq41448){
var G__41449 = cljs.core.first(seq41448);
var seq41448__$1 = cljs.core.next(seq41448);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41449,seq41448__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42133 = arguments.length;
var i__4790__auto___42134 = (0);
while(true){
if((i__4790__auto___42134 < len__4789__auto___42133)){
args__4795__auto__.push((arguments[i__4790__auto___42134]));

var G__42137 = (i__4790__auto___42134 + (1));
i__4790__auto___42134 = G__42137;
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

var vec__41572_42139 = dommy.core.elem_and_selector(elem_sel);
var elem_42140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41572_42139,(0),null);
var selector_42141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41572_42139,(1),null);
var seq__41576_42147 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__41577_42148 = null;
var count__41578_42149 = (0);
var i__41579_42150 = (0);
while(true){
if((i__41579_42150 < count__41578_42149)){
var vec__41602_42151 = chunk__41577_42148.cljs$core$IIndexed$_nth$arity$2(null,i__41579_42150);
var type_42152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41602_42151,(0),null);
var f_42153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41602_42151,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42152,((function (seq__41576_42147,chunk__41577_42148,count__41578_42149,i__41579_42150,vec__41602_42151,type_42152,f_42153,vec__41572_42139,elem_42140,selector_42141){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42152,dommy$core$this_fn], 0));

return (f_42153.cljs$core$IFn$_invoke$arity$1 ? f_42153.cljs$core$IFn$_invoke$arity$1(e) : f_42153.call(null,e));
});})(seq__41576_42147,chunk__41577_42148,count__41578_42149,i__41579_42150,vec__41602_42151,type_42152,f_42153,vec__41572_42139,elem_42140,selector_42141))
], 0));


var G__42159 = seq__41576_42147;
var G__42160 = chunk__41577_42148;
var G__42161 = count__41578_42149;
var G__42162 = (i__41579_42150 + (1));
seq__41576_42147 = G__42159;
chunk__41577_42148 = G__42160;
count__41578_42149 = G__42161;
i__41579_42150 = G__42162;
continue;
} else {
var temp__5735__auto___42163 = cljs.core.seq(seq__41576_42147);
if(temp__5735__auto___42163){
var seq__41576_42164__$1 = temp__5735__auto___42163;
if(cljs.core.chunked_seq_QMARK_(seq__41576_42164__$1)){
var c__4609__auto___42166 = cljs.core.chunk_first(seq__41576_42164__$1);
var G__42167 = cljs.core.chunk_rest(seq__41576_42164__$1);
var G__42168 = c__4609__auto___42166;
var G__42169 = cljs.core.count(c__4609__auto___42166);
var G__42170 = (0);
seq__41576_42147 = G__42167;
chunk__41577_42148 = G__42168;
count__41578_42149 = G__42169;
i__41579_42150 = G__42170;
continue;
} else {
var vec__41605_42171 = cljs.core.first(seq__41576_42164__$1);
var type_42172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41605_42171,(0),null);
var f_42173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41605_42171,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42172,((function (seq__41576_42147,chunk__41577_42148,count__41578_42149,i__41579_42150,vec__41605_42171,type_42172,f_42173,seq__41576_42164__$1,temp__5735__auto___42163,vec__41572_42139,elem_42140,selector_42141){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42172,dommy$core$this_fn], 0));

return (f_42173.cljs$core$IFn$_invoke$arity$1 ? f_42173.cljs$core$IFn$_invoke$arity$1(e) : f_42173.call(null,e));
});})(seq__41576_42147,chunk__41577_42148,count__41578_42149,i__41579_42150,vec__41605_42171,type_42172,f_42173,seq__41576_42164__$1,temp__5735__auto___42163,vec__41572_42139,elem_42140,selector_42141))
], 0));


var G__42178 = cljs.core.next(seq__41576_42164__$1);
var G__42179 = null;
var G__42180 = (0);
var G__42181 = (0);
seq__41576_42147 = G__42178;
chunk__41577_42148 = G__42179;
count__41578_42149 = G__42180;
i__41579_42150 = G__42181;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq41565){
var G__41566 = cljs.core.first(seq41565);
var seq41565__$1 = cljs.core.next(seq41565);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41566,seq41565__$1);
}));


//# sourceMappingURL=dommy.core.js.map
