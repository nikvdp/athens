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
var len__4789__auto___41628 = arguments.length;
var i__4790__auto___41629 = (0);
while(true){
if((i__4790__auto___41629 < len__4789__auto___41628)){
args__4795__auto__.push((arguments[i__4790__auto___41629]));

var G__41630 = (i__4790__auto___41629 + (1));
i__4790__auto___41629 = G__41630;
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
var seq__41189_41631 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__41190_41632 = null;
var count__41191_41633 = (0);
var i__41192_41634 = (0);
while(true){
if((i__41192_41634 < count__41191_41633)){
var vec__41199_41637 = chunk__41190_41632.cljs$core$IIndexed$_nth$arity$2(null,i__41192_41634);
var k_41638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41199_41637,(0),null);
var v_41639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41199_41637,(1),null);
style.setProperty(dommy.utils.as_str(k_41638),v_41639);


var G__41640 = seq__41189_41631;
var G__41641 = chunk__41190_41632;
var G__41642 = count__41191_41633;
var G__41643 = (i__41192_41634 + (1));
seq__41189_41631 = G__41640;
chunk__41190_41632 = G__41641;
count__41191_41633 = G__41642;
i__41192_41634 = G__41643;
continue;
} else {
var temp__5735__auto___41644 = cljs.core.seq(seq__41189_41631);
if(temp__5735__auto___41644){
var seq__41189_41645__$1 = temp__5735__auto___41644;
if(cljs.core.chunked_seq_QMARK_(seq__41189_41645__$1)){
var c__4609__auto___41646 = cljs.core.chunk_first(seq__41189_41645__$1);
var G__41647 = cljs.core.chunk_rest(seq__41189_41645__$1);
var G__41648 = c__4609__auto___41646;
var G__41649 = cljs.core.count(c__4609__auto___41646);
var G__41650 = (0);
seq__41189_41631 = G__41647;
chunk__41190_41632 = G__41648;
count__41191_41633 = G__41649;
i__41192_41634 = G__41650;
continue;
} else {
var vec__41202_41651 = cljs.core.first(seq__41189_41645__$1);
var k_41652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41202_41651,(0),null);
var v_41653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41202_41651,(1),null);
style.setProperty(dommy.utils.as_str(k_41652),v_41653);


var G__41654 = cljs.core.next(seq__41189_41645__$1);
var G__41655 = null;
var G__41656 = (0);
var G__41657 = (0);
seq__41189_41631 = G__41654;
chunk__41190_41632 = G__41655;
count__41191_41633 = G__41656;
i__41192_41634 = G__41657;
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
var len__4789__auto___41660 = arguments.length;
var i__4790__auto___41661 = (0);
while(true){
if((i__4790__auto___41661 < len__4789__auto___41660)){
args__4795__auto__.push((arguments[i__4790__auto___41661]));

var G__41662 = (i__4790__auto___41661 + (1));
i__4790__auto___41661 = G__41662;
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
var seq__41208_41663 = cljs.core.seq(keywords);
var chunk__41209_41664 = null;
var count__41210_41665 = (0);
var i__41211_41666 = (0);
while(true){
if((i__41211_41666 < count__41210_41665)){
var kw_41667 = chunk__41209_41664.cljs$core$IIndexed$_nth$arity$2(null,i__41211_41666);
style.removeProperty(dommy.utils.as_str(kw_41667));


var G__41668 = seq__41208_41663;
var G__41669 = chunk__41209_41664;
var G__41670 = count__41210_41665;
var G__41671 = (i__41211_41666 + (1));
seq__41208_41663 = G__41668;
chunk__41209_41664 = G__41669;
count__41210_41665 = G__41670;
i__41211_41666 = G__41671;
continue;
} else {
var temp__5735__auto___41672 = cljs.core.seq(seq__41208_41663);
if(temp__5735__auto___41672){
var seq__41208_41673__$1 = temp__5735__auto___41672;
if(cljs.core.chunked_seq_QMARK_(seq__41208_41673__$1)){
var c__4609__auto___41674 = cljs.core.chunk_first(seq__41208_41673__$1);
var G__41675 = cljs.core.chunk_rest(seq__41208_41673__$1);
var G__41676 = c__4609__auto___41674;
var G__41677 = cljs.core.count(c__4609__auto___41674);
var G__41678 = (0);
seq__41208_41663 = G__41675;
chunk__41209_41664 = G__41676;
count__41210_41665 = G__41677;
i__41211_41666 = G__41678;
continue;
} else {
var kw_41679 = cljs.core.first(seq__41208_41673__$1);
style.removeProperty(dommy.utils.as_str(kw_41679));


var G__41680 = cljs.core.next(seq__41208_41673__$1);
var G__41681 = null;
var G__41682 = (0);
var G__41683 = (0);
seq__41208_41663 = G__41680;
chunk__41209_41664 = G__41681;
count__41210_41665 = G__41682;
i__41211_41666 = G__41683;
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
var len__4789__auto___41684 = arguments.length;
var i__4790__auto___41685 = (0);
while(true){
if((i__4790__auto___41685 < len__4789__auto___41684)){
args__4795__auto__.push((arguments[i__4790__auto___41685]));

var G__41686 = (i__4790__auto___41685 + (1));
i__4790__auto___41685 = G__41686;
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

var seq__41214_41687 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__41215_41688 = null;
var count__41216_41689 = (0);
var i__41217_41690 = (0);
while(true){
if((i__41217_41690 < count__41216_41689)){
var vec__41224_41691 = chunk__41215_41688.cljs$core$IIndexed$_nth$arity$2(null,i__41217_41690);
var k_41692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41224_41691,(0),null);
var v_41693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41224_41691,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_41692,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_41693),"px"].join('')], 0));


var G__41694 = seq__41214_41687;
var G__41695 = chunk__41215_41688;
var G__41696 = count__41216_41689;
var G__41697 = (i__41217_41690 + (1));
seq__41214_41687 = G__41694;
chunk__41215_41688 = G__41695;
count__41216_41689 = G__41696;
i__41217_41690 = G__41697;
continue;
} else {
var temp__5735__auto___41698 = cljs.core.seq(seq__41214_41687);
if(temp__5735__auto___41698){
var seq__41214_41699__$1 = temp__5735__auto___41698;
if(cljs.core.chunked_seq_QMARK_(seq__41214_41699__$1)){
var c__4609__auto___41700 = cljs.core.chunk_first(seq__41214_41699__$1);
var G__41701 = cljs.core.chunk_rest(seq__41214_41699__$1);
var G__41702 = c__4609__auto___41700;
var G__41703 = cljs.core.count(c__4609__auto___41700);
var G__41704 = (0);
seq__41214_41687 = G__41701;
chunk__41215_41688 = G__41702;
count__41216_41689 = G__41703;
i__41217_41690 = G__41704;
continue;
} else {
var vec__41227_41705 = cljs.core.first(seq__41214_41699__$1);
var k_41706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41227_41705,(0),null);
var v_41707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41227_41705,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_41706,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_41707),"px"].join('')], 0));


var G__41708 = cljs.core.next(seq__41214_41699__$1);
var G__41709 = null;
var G__41710 = (0);
var G__41711 = (0);
seq__41214_41687 = G__41708;
chunk__41215_41688 = G__41709;
count__41216_41689 = G__41710;
i__41217_41690 = G__41711;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq41212){
var G__41213 = cljs.core.first(seq41212);
var seq41212__$1 = cljs.core.next(seq41212);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41213,seq41212__$1);
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
var len__4789__auto___41713 = arguments.length;
var i__4790__auto___41714 = (0);
while(true){
if((i__4790__auto___41714 < len__4789__auto___41713)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41714]));

var G__41715 = (i__4790__auto___41714 + (1));
i__4790__auto___41714 = G__41715;
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

var seq__41238_41716 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__41239_41717 = null;
var count__41240_41718 = (0);
var i__41241_41719 = (0);
while(true){
if((i__41241_41719 < count__41240_41718)){
var vec__41248_41720 = chunk__41239_41717.cljs$core$IIndexed$_nth$arity$2(null,i__41241_41719);
var k_41721__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41248_41720,(0),null);
var v_41722__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41248_41720,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_41721__$1,v_41722__$1);


var G__41723 = seq__41238_41716;
var G__41724 = chunk__41239_41717;
var G__41725 = count__41240_41718;
var G__41726 = (i__41241_41719 + (1));
seq__41238_41716 = G__41723;
chunk__41239_41717 = G__41724;
count__41240_41718 = G__41725;
i__41241_41719 = G__41726;
continue;
} else {
var temp__5735__auto___41727 = cljs.core.seq(seq__41238_41716);
if(temp__5735__auto___41727){
var seq__41238_41728__$1 = temp__5735__auto___41727;
if(cljs.core.chunked_seq_QMARK_(seq__41238_41728__$1)){
var c__4609__auto___41729 = cljs.core.chunk_first(seq__41238_41728__$1);
var G__41730 = cljs.core.chunk_rest(seq__41238_41728__$1);
var G__41731 = c__4609__auto___41729;
var G__41732 = cljs.core.count(c__4609__auto___41729);
var G__41733 = (0);
seq__41238_41716 = G__41730;
chunk__41239_41717 = G__41731;
count__41240_41718 = G__41732;
i__41241_41719 = G__41733;
continue;
} else {
var vec__41251_41734 = cljs.core.first(seq__41238_41728__$1);
var k_41735__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41251_41734,(0),null);
var v_41736__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41251_41734,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_41735__$1,v_41736__$1);


var G__41737 = cljs.core.next(seq__41238_41728__$1);
var G__41738 = null;
var G__41739 = (0);
var G__41740 = (0);
seq__41238_41716 = G__41737;
chunk__41239_41717 = G__41738;
count__41240_41718 = G__41739;
i__41241_41719 = G__41740;
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
var len__4789__auto___41742 = arguments.length;
var i__4790__auto___41743 = (0);
while(true){
if((i__4790__auto___41743 < len__4789__auto___41742)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41743]));

var G__41744 = (i__4790__auto___41743 + (1));
i__4790__auto___41743 = G__41744;
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
var k_41745__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__41259 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__41259.cljs$core$IFn$_invoke$arity$1 ? fexpr__41259.cljs$core$IFn$_invoke$arity$1(k_41745__$1) : fexpr__41259.call(null,k_41745__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_41745__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__41260_41746 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__41261_41747 = null;
var count__41262_41748 = (0);
var i__41263_41749 = (0);
while(true){
if((i__41263_41749 < count__41262_41748)){
var k_41750__$1 = chunk__41261_41747.cljs$core$IIndexed$_nth$arity$2(null,i__41263_41749);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_41750__$1);


var G__41751 = seq__41260_41746;
var G__41752 = chunk__41261_41747;
var G__41753 = count__41262_41748;
var G__41754 = (i__41263_41749 + (1));
seq__41260_41746 = G__41751;
chunk__41261_41747 = G__41752;
count__41262_41748 = G__41753;
i__41263_41749 = G__41754;
continue;
} else {
var temp__5735__auto___41755 = cljs.core.seq(seq__41260_41746);
if(temp__5735__auto___41755){
var seq__41260_41756__$1 = temp__5735__auto___41755;
if(cljs.core.chunked_seq_QMARK_(seq__41260_41756__$1)){
var c__4609__auto___41757 = cljs.core.chunk_first(seq__41260_41756__$1);
var G__41758 = cljs.core.chunk_rest(seq__41260_41756__$1);
var G__41759 = c__4609__auto___41757;
var G__41760 = cljs.core.count(c__4609__auto___41757);
var G__41761 = (0);
seq__41260_41746 = G__41758;
chunk__41261_41747 = G__41759;
count__41262_41748 = G__41760;
i__41263_41749 = G__41761;
continue;
} else {
var k_41762__$1 = cljs.core.first(seq__41260_41756__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_41762__$1);


var G__41763 = cljs.core.next(seq__41260_41756__$1);
var G__41764 = null;
var G__41765 = (0);
var G__41766 = (0);
seq__41260_41746 = G__41763;
chunk__41261_41747 = G__41764;
count__41262_41748 = G__41765;
i__41263_41749 = G__41766;
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
var len__4789__auto___41771 = arguments.length;
var i__4790__auto___41772 = (0);
while(true){
if((i__4790__auto___41772 < len__4789__auto___41771)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41772]));

var G__41773 = (i__4790__auto___41772 + (1));
i__4790__auto___41772 = G__41773;
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
var temp__5733__auto___41774 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___41774)){
var class_list_41775 = temp__5733__auto___41774;
var seq__41271_41777 = cljs.core.seq(classes__$1);
var chunk__41272_41778 = null;
var count__41273_41779 = (0);
var i__41274_41780 = (0);
while(true){
if((i__41274_41780 < count__41273_41779)){
var c_41781 = chunk__41272_41778.cljs$core$IIndexed$_nth$arity$2(null,i__41274_41780);
class_list_41775.add(c_41781);


var G__41782 = seq__41271_41777;
var G__41783 = chunk__41272_41778;
var G__41784 = count__41273_41779;
var G__41785 = (i__41274_41780 + (1));
seq__41271_41777 = G__41782;
chunk__41272_41778 = G__41783;
count__41273_41779 = G__41784;
i__41274_41780 = G__41785;
continue;
} else {
var temp__5735__auto___41786 = cljs.core.seq(seq__41271_41777);
if(temp__5735__auto___41786){
var seq__41271_41788__$1 = temp__5735__auto___41786;
if(cljs.core.chunked_seq_QMARK_(seq__41271_41788__$1)){
var c__4609__auto___41789 = cljs.core.chunk_first(seq__41271_41788__$1);
var G__41791 = cljs.core.chunk_rest(seq__41271_41788__$1);
var G__41792 = c__4609__auto___41789;
var G__41793 = cljs.core.count(c__4609__auto___41789);
var G__41794 = (0);
seq__41271_41777 = G__41791;
chunk__41272_41778 = G__41792;
count__41273_41779 = G__41793;
i__41274_41780 = G__41794;
continue;
} else {
var c_41795 = cljs.core.first(seq__41271_41788__$1);
class_list_41775.add(c_41795);


var G__41797 = cljs.core.next(seq__41271_41788__$1);
var G__41798 = null;
var G__41799 = (0);
var G__41800 = (0);
seq__41271_41777 = G__41797;
chunk__41272_41778 = G__41798;
count__41273_41779 = G__41799;
i__41274_41780 = G__41800;
continue;
}
} else {
}
}
break;
}
} else {
var seq__41275_41801 = cljs.core.seq(classes__$1);
var chunk__41276_41802 = null;
var count__41277_41803 = (0);
var i__41278_41804 = (0);
while(true){
if((i__41278_41804 < count__41277_41803)){
var c_41805 = chunk__41276_41802.cljs$core$IIndexed$_nth$arity$2(null,i__41278_41804);
var class_name_41806 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_41806,c_41805))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_41806 === ""))?c_41805:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_41806)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_41805)].join('')));
}


var G__41807 = seq__41275_41801;
var G__41808 = chunk__41276_41802;
var G__41809 = count__41277_41803;
var G__41810 = (i__41278_41804 + (1));
seq__41275_41801 = G__41807;
chunk__41276_41802 = G__41808;
count__41277_41803 = G__41809;
i__41278_41804 = G__41810;
continue;
} else {
var temp__5735__auto___41811 = cljs.core.seq(seq__41275_41801);
if(temp__5735__auto___41811){
var seq__41275_41813__$1 = temp__5735__auto___41811;
if(cljs.core.chunked_seq_QMARK_(seq__41275_41813__$1)){
var c__4609__auto___41814 = cljs.core.chunk_first(seq__41275_41813__$1);
var G__41819 = cljs.core.chunk_rest(seq__41275_41813__$1);
var G__41820 = c__4609__auto___41814;
var G__41821 = cljs.core.count(c__4609__auto___41814);
var G__41822 = (0);
seq__41275_41801 = G__41819;
chunk__41276_41802 = G__41820;
count__41277_41803 = G__41821;
i__41278_41804 = G__41822;
continue;
} else {
var c_41823 = cljs.core.first(seq__41275_41813__$1);
var class_name_41824 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_41824,c_41823))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_41824 === ""))?c_41823:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_41824)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_41823)].join('')));
}


var G__41825 = cljs.core.next(seq__41275_41813__$1);
var G__41826 = null;
var G__41827 = (0);
var G__41828 = (0);
seq__41275_41801 = G__41825;
chunk__41276_41802 = G__41826;
count__41277_41803 = G__41827;
i__41278_41804 = G__41828;
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
var seq__41279_41829 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__41280_41830 = null;
var count__41281_41831 = (0);
var i__41282_41832 = (0);
while(true){
if((i__41282_41832 < count__41281_41831)){
var c_41835 = chunk__41280_41830.cljs$core$IIndexed$_nth$arity$2(null,i__41282_41832);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_41835);


var G__41836 = seq__41279_41829;
var G__41837 = chunk__41280_41830;
var G__41838 = count__41281_41831;
var G__41839 = (i__41282_41832 + (1));
seq__41279_41829 = G__41836;
chunk__41280_41830 = G__41837;
count__41281_41831 = G__41838;
i__41282_41832 = G__41839;
continue;
} else {
var temp__5735__auto___41840 = cljs.core.seq(seq__41279_41829);
if(temp__5735__auto___41840){
var seq__41279_41841__$1 = temp__5735__auto___41840;
if(cljs.core.chunked_seq_QMARK_(seq__41279_41841__$1)){
var c__4609__auto___41842 = cljs.core.chunk_first(seq__41279_41841__$1);
var G__41843 = cljs.core.chunk_rest(seq__41279_41841__$1);
var G__41844 = c__4609__auto___41842;
var G__41845 = cljs.core.count(c__4609__auto___41842);
var G__41846 = (0);
seq__41279_41829 = G__41843;
chunk__41280_41830 = G__41844;
count__41281_41831 = G__41845;
i__41282_41832 = G__41846;
continue;
} else {
var c_41847 = cljs.core.first(seq__41279_41841__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_41847);


var G__41848 = cljs.core.next(seq__41279_41841__$1);
var G__41849 = null;
var G__41850 = (0);
var G__41851 = (0);
seq__41279_41829 = G__41848;
chunk__41280_41830 = G__41849;
count__41281_41831 = G__41850;
i__41282_41832 = G__41851;
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
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___41863 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___41863)){
var class_list_41866 = temp__5733__auto___41863;
class_list_41866.remove(c__$1);
} else {
var class_name_41867 = dommy.core.class$(elem);
var new_class_name_41868 = dommy.utils.remove_class_str(class_name_41867,c__$1);
if((class_name_41867 === new_class_name_41868)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_41868);
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


var G__41872 = seq__41288;
var G__41873 = chunk__41289;
var G__41874 = count__41290;
var G__41875 = (i__41291 + (1));
seq__41288 = G__41872;
chunk__41289 = G__41873;
count__41290 = G__41874;
i__41291 = G__41875;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41288);
if(temp__5735__auto__){
var seq__41288__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41288__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41288__$1);
var G__41878 = cljs.core.chunk_rest(seq__41288__$1);
var G__41879 = c__4609__auto__;
var G__41880 = cljs.core.count(c__4609__auto__);
var G__41881 = (0);
seq__41288 = G__41878;
chunk__41289 = G__41879;
count__41290 = G__41880;
i__41291 = G__41881;
continue;
} else {
var c = cljs.core.first(seq__41288__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__41882 = cljs.core.next(seq__41288__$1);
var G__41883 = null;
var G__41884 = (0);
var G__41885 = (0);
seq__41288 = G__41882;
chunk__41289 = G__41883;
count__41290 = G__41884;
i__41291 = G__41885;
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
var G__41296 = arguments.length;
switch (G__41296) {
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
var temp__5733__auto___41887 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___41887)){
var class_list_41888 = temp__5733__auto___41887;
class_list_41888.toggle(c__$1);
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
var G__41298 = arguments.length;
switch (G__41298) {
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
var G__41300 = arguments.length;
switch (G__41300) {
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
var G__41305 = arguments.length;
switch (G__41305) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41892 = arguments.length;
var i__4790__auto___41893 = (0);
while(true){
if((i__4790__auto___41893 < len__4789__auto___41892)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41893]));

var G__41894 = (i__4790__auto___41893 + (1));
i__4790__auto___41893 = G__41894;
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
var seq__41307_41895 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__41308_41896 = null;
var count__41309_41897 = (0);
var i__41310_41898 = (0);
while(true){
if((i__41310_41898 < count__41309_41897)){
var c_41899 = chunk__41308_41896.cljs$core$IIndexed$_nth$arity$2(null,i__41310_41898);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41899);


var G__41900 = seq__41307_41895;
var G__41901 = chunk__41308_41896;
var G__41902 = count__41309_41897;
var G__41903 = (i__41310_41898 + (1));
seq__41307_41895 = G__41900;
chunk__41308_41896 = G__41901;
count__41309_41897 = G__41902;
i__41310_41898 = G__41903;
continue;
} else {
var temp__5735__auto___41904 = cljs.core.seq(seq__41307_41895);
if(temp__5735__auto___41904){
var seq__41307_41905__$1 = temp__5735__auto___41904;
if(cljs.core.chunked_seq_QMARK_(seq__41307_41905__$1)){
var c__4609__auto___41906 = cljs.core.chunk_first(seq__41307_41905__$1);
var G__41907 = cljs.core.chunk_rest(seq__41307_41905__$1);
var G__41908 = c__4609__auto___41906;
var G__41909 = cljs.core.count(c__4609__auto___41906);
var G__41910 = (0);
seq__41307_41895 = G__41907;
chunk__41308_41896 = G__41908;
count__41309_41897 = G__41909;
i__41310_41898 = G__41910;
continue;
} else {
var c_41911 = cljs.core.first(seq__41307_41905__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41911);


var G__41912 = cljs.core.next(seq__41307_41905__$1);
var G__41913 = null;
var G__41914 = (0);
var G__41915 = (0);
seq__41307_41895 = G__41912;
chunk__41308_41896 = G__41913;
count__41309_41897 = G__41914;
i__41310_41898 = G__41915;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq41302){
var G__41303 = cljs.core.first(seq41302);
var seq41302__$1 = cljs.core.next(seq41302);
var G__41304 = cljs.core.first(seq41302__$1);
var seq41302__$2 = cljs.core.next(seq41302__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41303,G__41304,seq41302__$2);
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
var len__4789__auto___41917 = arguments.length;
var i__4790__auto___41918 = (0);
while(true){
if((i__4790__auto___41918 < len__4789__auto___41917)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41918]));

var G__41919 = (i__4790__auto___41918 + (1));
i__4790__auto___41918 = G__41919;
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
var seq__41317_41920 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__41318_41921 = null;
var count__41319_41922 = (0);
var i__41320_41923 = (0);
while(true){
if((i__41320_41923 < count__41319_41922)){
var c_41924 = chunk__41318_41921.cljs$core$IIndexed$_nth$arity$2(null,i__41320_41923);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41924);


var G__41925 = seq__41317_41920;
var G__41926 = chunk__41318_41921;
var G__41927 = count__41319_41922;
var G__41928 = (i__41320_41923 + (1));
seq__41317_41920 = G__41925;
chunk__41318_41921 = G__41926;
count__41319_41922 = G__41927;
i__41320_41923 = G__41928;
continue;
} else {
var temp__5735__auto___41929 = cljs.core.seq(seq__41317_41920);
if(temp__5735__auto___41929){
var seq__41317_41930__$1 = temp__5735__auto___41929;
if(cljs.core.chunked_seq_QMARK_(seq__41317_41930__$1)){
var c__4609__auto___41931 = cljs.core.chunk_first(seq__41317_41930__$1);
var G__41932 = cljs.core.chunk_rest(seq__41317_41930__$1);
var G__41933 = c__4609__auto___41931;
var G__41934 = cljs.core.count(c__4609__auto___41931);
var G__41935 = (0);
seq__41317_41920 = G__41932;
chunk__41318_41921 = G__41933;
count__41319_41922 = G__41934;
i__41320_41923 = G__41935;
continue;
} else {
var c_41936 = cljs.core.first(seq__41317_41930__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41936);


var G__41937 = cljs.core.next(seq__41317_41930__$1);
var G__41938 = null;
var G__41939 = (0);
var G__41940 = (0);
seq__41317_41920 = G__41937;
chunk__41318_41921 = G__41938;
count__41319_41922 = G__41939;
i__41320_41923 = G__41940;
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
var temp__5733__auto___41941 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___41941)){
var next_41942 = temp__5733__auto___41941;
dommy.core.insert_before_BANG_(elem,next_41942);
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
var len__4789__auto___41944 = arguments.length;
var i__4790__auto___41945 = (0);
while(true){
if((i__4790__auto___41945 < len__4789__auto___41944)){
args__4795__auto__.push((arguments[i__4790__auto___41945]));

var G__41946 = (i__4790__auto___41945 + (1));
i__4790__auto___41945 = G__41946;
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
var fexpr__41334 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__41334.cljs$core$IFn$_invoke$arity$1 ? fexpr__41334.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__41334.call(null,elem_sel));
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
var len__4789__auto___41952 = arguments.length;
var i__4790__auto___41953 = (0);
while(true){
if((i__4790__auto___41953 < len__4789__auto___41952)){
args__4795__auto__.push((arguments[i__4790__auto___41953]));

var G__41955 = (i__4790__auto___41953 + (1));
i__4790__auto___41953 = G__41955;
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

var vec__41337_41956 = dommy.core.elem_and_selector(elem_sel);
var elem_41957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41337_41956,(0),null);
var selector_41958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41337_41956,(1),null);
var seq__41340_41959 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__41347_41960 = null;
var count__41348_41961 = (0);
var i__41349_41962 = (0);
while(true){
if((i__41349_41962 < count__41348_41961)){
var vec__41405_41963 = chunk__41347_41960.cljs$core$IIndexed$_nth$arity$2(null,i__41349_41962);
var orig_type_41964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41405_41963,(0),null);
var f_41965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41405_41963,(1),null);
var seq__41350_41966 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_41964,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_41964,cljs.core.identity])));
var chunk__41352_41967 = null;
var count__41353_41968 = (0);
var i__41354_41969 = (0);
while(true){
if((i__41354_41969 < count__41353_41968)){
var vec__41418_41971 = chunk__41352_41967.cljs$core$IIndexed$_nth$arity$2(null,i__41354_41969);
var actual_type_41972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41418_41971,(0),null);
var factory_41973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41418_41971,(1),null);
var canonical_f_41976 = (function (){var G__41426 = (factory_41973.cljs$core$IFn$_invoke$arity$1 ? factory_41973.cljs$core$IFn$_invoke$arity$1(f_41965) : factory_41973.call(null,f_41965));
var fexpr__41425 = (cljs.core.truth_(selector_41958)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41957,selector_41958):cljs.core.identity);
return (fexpr__41425.cljs$core$IFn$_invoke$arity$1 ? fexpr__41425.cljs$core$IFn$_invoke$arity$1(G__41426) : fexpr__41425.call(null,G__41426));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41957,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41958,actual_type_41972,f_41965], null),canonical_f_41976], 0));

if(cljs.core.truth_(elem_41957.addEventListener)){
elem_41957.addEventListener(cljs.core.name(actual_type_41972),canonical_f_41976);
} else {
elem_41957.attachEvent(cljs.core.name(actual_type_41972),canonical_f_41976);
}


var G__41978 = seq__41350_41966;
var G__41979 = chunk__41352_41967;
var G__41980 = count__41353_41968;
var G__41981 = (i__41354_41969 + (1));
seq__41350_41966 = G__41978;
chunk__41352_41967 = G__41979;
count__41353_41968 = G__41980;
i__41354_41969 = G__41981;
continue;
} else {
var temp__5735__auto___41984 = cljs.core.seq(seq__41350_41966);
if(temp__5735__auto___41984){
var seq__41350_41986__$1 = temp__5735__auto___41984;
if(cljs.core.chunked_seq_QMARK_(seq__41350_41986__$1)){
var c__4609__auto___41987 = cljs.core.chunk_first(seq__41350_41986__$1);
var G__41988 = cljs.core.chunk_rest(seq__41350_41986__$1);
var G__41989 = c__4609__auto___41987;
var G__41990 = cljs.core.count(c__4609__auto___41987);
var G__41991 = (0);
seq__41350_41966 = G__41988;
chunk__41352_41967 = G__41989;
count__41353_41968 = G__41990;
i__41354_41969 = G__41991;
continue;
} else {
var vec__41427_41992 = cljs.core.first(seq__41350_41986__$1);
var actual_type_41993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41427_41992,(0),null);
var factory_41994 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41427_41992,(1),null);
var canonical_f_41995 = (function (){var G__41431 = (factory_41994.cljs$core$IFn$_invoke$arity$1 ? factory_41994.cljs$core$IFn$_invoke$arity$1(f_41965) : factory_41994.call(null,f_41965));
var fexpr__41430 = (cljs.core.truth_(selector_41958)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41957,selector_41958):cljs.core.identity);
return (fexpr__41430.cljs$core$IFn$_invoke$arity$1 ? fexpr__41430.cljs$core$IFn$_invoke$arity$1(G__41431) : fexpr__41430.call(null,G__41431));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41957,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41958,actual_type_41993,f_41965], null),canonical_f_41995], 0));

if(cljs.core.truth_(elem_41957.addEventListener)){
elem_41957.addEventListener(cljs.core.name(actual_type_41993),canonical_f_41995);
} else {
elem_41957.attachEvent(cljs.core.name(actual_type_41993),canonical_f_41995);
}


var G__42002 = cljs.core.next(seq__41350_41986__$1);
var G__42003 = null;
var G__42004 = (0);
var G__42005 = (0);
seq__41350_41966 = G__42002;
chunk__41352_41967 = G__42003;
count__41353_41968 = G__42004;
i__41354_41969 = G__42005;
continue;
}
} else {
}
}
break;
}

var G__42007 = seq__41340_41959;
var G__42008 = chunk__41347_41960;
var G__42009 = count__41348_41961;
var G__42010 = (i__41349_41962 + (1));
seq__41340_41959 = G__42007;
chunk__41347_41960 = G__42008;
count__41348_41961 = G__42009;
i__41349_41962 = G__42010;
continue;
} else {
var temp__5735__auto___42011 = cljs.core.seq(seq__41340_41959);
if(temp__5735__auto___42011){
var seq__41340_42012__$1 = temp__5735__auto___42011;
if(cljs.core.chunked_seq_QMARK_(seq__41340_42012__$1)){
var c__4609__auto___42013 = cljs.core.chunk_first(seq__41340_42012__$1);
var G__42014 = cljs.core.chunk_rest(seq__41340_42012__$1);
var G__42015 = c__4609__auto___42013;
var G__42016 = cljs.core.count(c__4609__auto___42013);
var G__42017 = (0);
seq__41340_41959 = G__42014;
chunk__41347_41960 = G__42015;
count__41348_41961 = G__42016;
i__41349_41962 = G__42017;
continue;
} else {
var vec__41432_42018 = cljs.core.first(seq__41340_42012__$1);
var orig_type_42019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41432_42018,(0),null);
var f_42020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41432_42018,(1),null);
var seq__41341_42023 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_42019,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_42019,cljs.core.identity])));
var chunk__41343_42024 = null;
var count__41344_42025 = (0);
var i__41345_42026 = (0);
while(true){
if((i__41345_42026 < count__41344_42025)){
var vec__41452_42029 = chunk__41343_42024.cljs$core$IIndexed$_nth$arity$2(null,i__41345_42026);
var actual_type_42030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41452_42029,(0),null);
var factory_42031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41452_42029,(1),null);
var canonical_f_42032 = (function (){var G__41456 = (factory_42031.cljs$core$IFn$_invoke$arity$1 ? factory_42031.cljs$core$IFn$_invoke$arity$1(f_42020) : factory_42031.call(null,f_42020));
var fexpr__41455 = (cljs.core.truth_(selector_41958)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41957,selector_41958):cljs.core.identity);
return (fexpr__41455.cljs$core$IFn$_invoke$arity$1 ? fexpr__41455.cljs$core$IFn$_invoke$arity$1(G__41456) : fexpr__41455.call(null,G__41456));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41957,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41958,actual_type_42030,f_42020], null),canonical_f_42032], 0));

if(cljs.core.truth_(elem_41957.addEventListener)){
elem_41957.addEventListener(cljs.core.name(actual_type_42030),canonical_f_42032);
} else {
elem_41957.attachEvent(cljs.core.name(actual_type_42030),canonical_f_42032);
}


var G__42039 = seq__41341_42023;
var G__42040 = chunk__41343_42024;
var G__42041 = count__41344_42025;
var G__42042 = (i__41345_42026 + (1));
seq__41341_42023 = G__42039;
chunk__41343_42024 = G__42040;
count__41344_42025 = G__42041;
i__41345_42026 = G__42042;
continue;
} else {
var temp__5735__auto___42044__$1 = cljs.core.seq(seq__41341_42023);
if(temp__5735__auto___42044__$1){
var seq__41341_42045__$1 = temp__5735__auto___42044__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41341_42045__$1)){
var c__4609__auto___42046 = cljs.core.chunk_first(seq__41341_42045__$1);
var G__42047 = cljs.core.chunk_rest(seq__41341_42045__$1);
var G__42048 = c__4609__auto___42046;
var G__42049 = cljs.core.count(c__4609__auto___42046);
var G__42050 = (0);
seq__41341_42023 = G__42047;
chunk__41343_42024 = G__42048;
count__41344_42025 = G__42049;
i__41345_42026 = G__42050;
continue;
} else {
var vec__41457_42053 = cljs.core.first(seq__41341_42045__$1);
var actual_type_42054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41457_42053,(0),null);
var factory_42055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41457_42053,(1),null);
var canonical_f_42058 = (function (){var G__41461 = (factory_42055.cljs$core$IFn$_invoke$arity$1 ? factory_42055.cljs$core$IFn$_invoke$arity$1(f_42020) : factory_42055.call(null,f_42020));
var fexpr__41460 = (cljs.core.truth_(selector_41958)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41957,selector_41958):cljs.core.identity);
return (fexpr__41460.cljs$core$IFn$_invoke$arity$1 ? fexpr__41460.cljs$core$IFn$_invoke$arity$1(G__41461) : fexpr__41460.call(null,G__41461));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41957,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41958,actual_type_42054,f_42020], null),canonical_f_42058], 0));

if(cljs.core.truth_(elem_41957.addEventListener)){
elem_41957.addEventListener(cljs.core.name(actual_type_42054),canonical_f_42058);
} else {
elem_41957.attachEvent(cljs.core.name(actual_type_42054),canonical_f_42058);
}


var G__42060 = cljs.core.next(seq__41341_42045__$1);
var G__42061 = null;
var G__42062 = (0);
var G__42063 = (0);
seq__41341_42023 = G__42060;
chunk__41343_42024 = G__42061;
count__41344_42025 = G__42062;
i__41345_42026 = G__42063;
continue;
}
} else {
}
}
break;
}

var G__42066 = cljs.core.next(seq__41340_42012__$1);
var G__42067 = null;
var G__42068 = (0);
var G__42069 = (0);
seq__41340_41959 = G__42066;
chunk__41347_41960 = G__42067;
count__41348_41961 = G__42068;
i__41349_41962 = G__42069;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq41335){
var G__41336 = cljs.core.first(seq41335);
var seq41335__$1 = cljs.core.next(seq41335);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41336,seq41335__$1);
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
var len__4789__auto___42075 = arguments.length;
var i__4790__auto___42077 = (0);
while(true){
if((i__4790__auto___42077 < len__4789__auto___42075)){
args__4795__auto__.push((arguments[i__4790__auto___42077]));

var G__42079 = (i__4790__auto___42077 + (1));
i__4790__auto___42077 = G__42079;
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

var vec__41464_42082 = dommy.core.elem_and_selector(elem_sel);
var elem_42083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41464_42082,(0),null);
var selector_42084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41464_42082,(1),null);
var seq__41467_42086 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__41474_42087 = null;
var count__41475_42088 = (0);
var i__41476_42089 = (0);
while(true){
if((i__41476_42089 < count__41475_42088)){
var vec__41551_42091 = chunk__41474_42087.cljs$core$IIndexed$_nth$arity$2(null,i__41476_42089);
var orig_type_42092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41551_42091,(0),null);
var f_42093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41551_42091,(1),null);
var seq__41477_42096 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_42092,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_42092,cljs.core.identity])));
var chunk__41479_42097 = null;
var count__41480_42098 = (0);
var i__41481_42099 = (0);
while(true){
if((i__41481_42099 < count__41480_42098)){
var vec__41576_42102 = chunk__41479_42097.cljs$core$IIndexed$_nth$arity$2(null,i__41481_42099);
var actual_type_42103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41576_42102,(0),null);
var __42104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41576_42102,(1),null);
var keys_42106 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42084,actual_type_42103,f_42093], null);
var canonical_f_42107 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42083),keys_42106);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42083,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42106], 0));

if(cljs.core.truth_(elem_42083.removeEventListener)){
elem_42083.removeEventListener(cljs.core.name(actual_type_42103),canonical_f_42107);
} else {
elem_42083.detachEvent(cljs.core.name(actual_type_42103),canonical_f_42107);
}


var G__42114 = seq__41477_42096;
var G__42115 = chunk__41479_42097;
var G__42116 = count__41480_42098;
var G__42117 = (i__41481_42099 + (1));
seq__41477_42096 = G__42114;
chunk__41479_42097 = G__42115;
count__41480_42098 = G__42116;
i__41481_42099 = G__42117;
continue;
} else {
var temp__5735__auto___42121 = cljs.core.seq(seq__41477_42096);
if(temp__5735__auto___42121){
var seq__41477_42123__$1 = temp__5735__auto___42121;
if(cljs.core.chunked_seq_QMARK_(seq__41477_42123__$1)){
var c__4609__auto___42124 = cljs.core.chunk_first(seq__41477_42123__$1);
var G__42126 = cljs.core.chunk_rest(seq__41477_42123__$1);
var G__42127 = c__4609__auto___42124;
var G__42128 = cljs.core.count(c__4609__auto___42124);
var G__42129 = (0);
seq__41477_42096 = G__42126;
chunk__41479_42097 = G__42127;
count__41480_42098 = G__42128;
i__41481_42099 = G__42129;
continue;
} else {
var vec__41582_42131 = cljs.core.first(seq__41477_42123__$1);
var actual_type_42132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41582_42131,(0),null);
var __42133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41582_42131,(1),null);
var keys_42134 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42084,actual_type_42132,f_42093], null);
var canonical_f_42135 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42083),keys_42134);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42083,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42134], 0));

if(cljs.core.truth_(elem_42083.removeEventListener)){
elem_42083.removeEventListener(cljs.core.name(actual_type_42132),canonical_f_42135);
} else {
elem_42083.detachEvent(cljs.core.name(actual_type_42132),canonical_f_42135);
}


var G__42139 = cljs.core.next(seq__41477_42123__$1);
var G__42140 = null;
var G__42141 = (0);
var G__42142 = (0);
seq__41477_42096 = G__42139;
chunk__41479_42097 = G__42140;
count__41480_42098 = G__42141;
i__41481_42099 = G__42142;
continue;
}
} else {
}
}
break;
}

var G__42143 = seq__41467_42086;
var G__42144 = chunk__41474_42087;
var G__42145 = count__41475_42088;
var G__42146 = (i__41476_42089 + (1));
seq__41467_42086 = G__42143;
chunk__41474_42087 = G__42144;
count__41475_42088 = G__42145;
i__41476_42089 = G__42146;
continue;
} else {
var temp__5735__auto___42150 = cljs.core.seq(seq__41467_42086);
if(temp__5735__auto___42150){
var seq__41467_42151__$1 = temp__5735__auto___42150;
if(cljs.core.chunked_seq_QMARK_(seq__41467_42151__$1)){
var c__4609__auto___42152 = cljs.core.chunk_first(seq__41467_42151__$1);
var G__42153 = cljs.core.chunk_rest(seq__41467_42151__$1);
var G__42154 = c__4609__auto___42152;
var G__42155 = cljs.core.count(c__4609__auto___42152);
var G__42156 = (0);
seq__41467_42086 = G__42153;
chunk__41474_42087 = G__42154;
count__41475_42088 = G__42155;
i__41476_42089 = G__42156;
continue;
} else {
var vec__41586_42157 = cljs.core.first(seq__41467_42151__$1);
var orig_type_42159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41586_42157,(0),null);
var f_42160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41586_42157,(1),null);
var seq__41468_42163 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_42159,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_42159,cljs.core.identity])));
var chunk__41470_42164 = null;
var count__41471_42165 = (0);
var i__41472_42166 = (0);
while(true){
if((i__41472_42166 < count__41471_42165)){
var vec__41596_42169 = chunk__41470_42164.cljs$core$IIndexed$_nth$arity$2(null,i__41472_42166);
var actual_type_42170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41596_42169,(0),null);
var __42171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41596_42169,(1),null);
var keys_42173 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42084,actual_type_42170,f_42160], null);
var canonical_f_42174 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42083),keys_42173);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42083,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42173], 0));

if(cljs.core.truth_(elem_42083.removeEventListener)){
elem_42083.removeEventListener(cljs.core.name(actual_type_42170),canonical_f_42174);
} else {
elem_42083.detachEvent(cljs.core.name(actual_type_42170),canonical_f_42174);
}


var G__42178 = seq__41468_42163;
var G__42179 = chunk__41470_42164;
var G__42180 = count__41471_42165;
var G__42181 = (i__41472_42166 + (1));
seq__41468_42163 = G__42178;
chunk__41470_42164 = G__42179;
count__41471_42165 = G__42180;
i__41472_42166 = G__42181;
continue;
} else {
var temp__5735__auto___42182__$1 = cljs.core.seq(seq__41468_42163);
if(temp__5735__auto___42182__$1){
var seq__41468_42185__$1 = temp__5735__auto___42182__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41468_42185__$1)){
var c__4609__auto___42187 = cljs.core.chunk_first(seq__41468_42185__$1);
var G__42188 = cljs.core.chunk_rest(seq__41468_42185__$1);
var G__42189 = c__4609__auto___42187;
var G__42190 = cljs.core.count(c__4609__auto___42187);
var G__42191 = (0);
seq__41468_42163 = G__42188;
chunk__41470_42164 = G__42189;
count__41471_42165 = G__42190;
i__41472_42166 = G__42191;
continue;
} else {
var vec__41599_42192 = cljs.core.first(seq__41468_42185__$1);
var actual_type_42193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41599_42192,(0),null);
var __42194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41599_42192,(1),null);
var keys_42196 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42084,actual_type_42193,f_42160], null);
var canonical_f_42197 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42083),keys_42196);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42083,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42196], 0));

if(cljs.core.truth_(elem_42083.removeEventListener)){
elem_42083.removeEventListener(cljs.core.name(actual_type_42193),canonical_f_42197);
} else {
elem_42083.detachEvent(cljs.core.name(actual_type_42193),canonical_f_42197);
}


var G__42206 = cljs.core.next(seq__41468_42185__$1);
var G__42209 = null;
var G__42210 = (0);
var G__42211 = (0);
seq__41468_42163 = G__42206;
chunk__41470_42164 = G__42209;
count__41471_42165 = G__42210;
i__41472_42166 = G__42211;
continue;
}
} else {
}
}
break;
}

var G__42224 = cljs.core.next(seq__41467_42151__$1);
var G__42225 = null;
var G__42226 = (0);
var G__42227 = (0);
seq__41467_42086 = G__42224;
chunk__41474_42087 = G__42225;
count__41475_42088 = G__42226;
i__41476_42089 = G__42227;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq41462){
var G__41463 = cljs.core.first(seq41462);
var seq41462__$1 = cljs.core.next(seq41462);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41463,seq41462__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42230 = arguments.length;
var i__4790__auto___42231 = (0);
while(true){
if((i__4790__auto___42231 < len__4789__auto___42230)){
args__4795__auto__.push((arguments[i__4790__auto___42231]));

var G__42232 = (i__4790__auto___42231 + (1));
i__4790__auto___42231 = G__42232;
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

var vec__41604_42234 = dommy.core.elem_and_selector(elem_sel);
var elem_42235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41604_42234,(0),null);
var selector_42236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41604_42234,(1),null);
var seq__41607_42237 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__41608_42238 = null;
var count__41609_42239 = (0);
var i__41610_42240 = (0);
while(true){
if((i__41610_42240 < count__41609_42239)){
var vec__41617_42243 = chunk__41608_42238.cljs$core$IIndexed$_nth$arity$2(null,i__41610_42240);
var type_42244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41617_42243,(0),null);
var f_42245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41617_42243,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42244,((function (seq__41607_42237,chunk__41608_42238,count__41609_42239,i__41610_42240,vec__41617_42243,type_42244,f_42245,vec__41604_42234,elem_42235,selector_42236){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42244,dommy$core$this_fn], 0));

return (f_42245.cljs$core$IFn$_invoke$arity$1 ? f_42245.cljs$core$IFn$_invoke$arity$1(e) : f_42245.call(null,e));
});})(seq__41607_42237,chunk__41608_42238,count__41609_42239,i__41610_42240,vec__41617_42243,type_42244,f_42245,vec__41604_42234,elem_42235,selector_42236))
], 0));


var G__42254 = seq__41607_42237;
var G__42255 = chunk__41608_42238;
var G__42256 = count__41609_42239;
var G__42257 = (i__41610_42240 + (1));
seq__41607_42237 = G__42254;
chunk__41608_42238 = G__42255;
count__41609_42239 = G__42256;
i__41610_42240 = G__42257;
continue;
} else {
var temp__5735__auto___42258 = cljs.core.seq(seq__41607_42237);
if(temp__5735__auto___42258){
var seq__41607_42265__$1 = temp__5735__auto___42258;
if(cljs.core.chunked_seq_QMARK_(seq__41607_42265__$1)){
var c__4609__auto___42267 = cljs.core.chunk_first(seq__41607_42265__$1);
var G__42270 = cljs.core.chunk_rest(seq__41607_42265__$1);
var G__42271 = c__4609__auto___42267;
var G__42272 = cljs.core.count(c__4609__auto___42267);
var G__42273 = (0);
seq__41607_42237 = G__42270;
chunk__41608_42238 = G__42271;
count__41609_42239 = G__42272;
i__41610_42240 = G__42273;
continue;
} else {
var vec__41620_42274 = cljs.core.first(seq__41607_42265__$1);
var type_42275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41620_42274,(0),null);
var f_42276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41620_42274,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42275,((function (seq__41607_42237,chunk__41608_42238,count__41609_42239,i__41610_42240,vec__41620_42274,type_42275,f_42276,seq__41607_42265__$1,temp__5735__auto___42258,vec__41604_42234,elem_42235,selector_42236){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42275,dommy$core$this_fn], 0));

return (f_42276.cljs$core$IFn$_invoke$arity$1 ? f_42276.cljs$core$IFn$_invoke$arity$1(e) : f_42276.call(null,e));
});})(seq__41607_42237,chunk__41608_42238,count__41609_42239,i__41610_42240,vec__41620_42274,type_42275,f_42276,seq__41607_42265__$1,temp__5735__auto___42258,vec__41604_42234,elem_42235,selector_42236))
], 0));


var G__42281 = cljs.core.next(seq__41607_42265__$1);
var G__42282 = null;
var G__42283 = (0);
var G__42284 = (0);
seq__41607_42237 = G__42281;
chunk__41608_42238 = G__42282;
count__41609_42239 = G__42283;
i__41610_42240 = G__42284;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq41602){
var G__41603 = cljs.core.first(seq41602);
var seq41602__$1 = cljs.core.next(seq41602);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41603,seq41602__$1);
}));


//# sourceMappingURL=dommy.core.js.map
