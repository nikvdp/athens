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
var G__41173 = arguments.length;
switch (G__41173) {
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
var G__41175 = arguments.length;
switch (G__41175) {
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
var G__41178 = arguments.length;
switch (G__41178) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__41176_SHARP_){
return (!((p1__41176_SHARP_ === base)));
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
var seq__41183_41631 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__41184_41632 = null;
var count__41185_41633 = (0);
var i__41186_41634 = (0);
while(true){
if((i__41186_41634 < count__41185_41633)){
var vec__41193_41635 = chunk__41184_41632.cljs$core$IIndexed$_nth$arity$2(null,i__41186_41634);
var k_41636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41193_41635,(0),null);
var v_41637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41193_41635,(1),null);
style.setProperty(dommy.utils.as_str(k_41636),v_41637);


var G__41638 = seq__41183_41631;
var G__41639 = chunk__41184_41632;
var G__41640 = count__41185_41633;
var G__41641 = (i__41186_41634 + (1));
seq__41183_41631 = G__41638;
chunk__41184_41632 = G__41639;
count__41185_41633 = G__41640;
i__41186_41634 = G__41641;
continue;
} else {
var temp__5735__auto___41642 = cljs.core.seq(seq__41183_41631);
if(temp__5735__auto___41642){
var seq__41183_41643__$1 = temp__5735__auto___41642;
if(cljs.core.chunked_seq_QMARK_(seq__41183_41643__$1)){
var c__4609__auto___41644 = cljs.core.chunk_first(seq__41183_41643__$1);
var G__41645 = cljs.core.chunk_rest(seq__41183_41643__$1);
var G__41646 = c__4609__auto___41644;
var G__41647 = cljs.core.count(c__4609__auto___41644);
var G__41648 = (0);
seq__41183_41631 = G__41645;
chunk__41184_41632 = G__41646;
count__41185_41633 = G__41647;
i__41186_41634 = G__41648;
continue;
} else {
var vec__41196_41649 = cljs.core.first(seq__41183_41643__$1);
var k_41650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41196_41649,(0),null);
var v_41651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41196_41649,(1),null);
style.setProperty(dommy.utils.as_str(k_41650),v_41651);


var G__41653 = cljs.core.next(seq__41183_41643__$1);
var G__41654 = null;
var G__41655 = (0);
var G__41656 = (0);
seq__41183_41631 = G__41653;
chunk__41184_41632 = G__41654;
count__41185_41633 = G__41655;
i__41186_41634 = G__41656;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq41181){
var G__41182 = cljs.core.first(seq41181);
var seq41181__$1 = cljs.core.next(seq41181);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41182,seq41181__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41658 = arguments.length;
var i__4790__auto___41660 = (0);
while(true){
if((i__4790__auto___41660 < len__4789__auto___41658)){
args__4795__auto__.push((arguments[i__4790__auto___41660]));

var G__41661 = (i__4790__auto___41660 + (1));
i__4790__auto___41660 = G__41661;
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
var seq__41202_41663 = cljs.core.seq(keywords);
var chunk__41203_41664 = null;
var count__41204_41665 = (0);
var i__41205_41666 = (0);
while(true){
if((i__41205_41666 < count__41204_41665)){
var kw_41667 = chunk__41203_41664.cljs$core$IIndexed$_nth$arity$2(null,i__41205_41666);
style.removeProperty(dommy.utils.as_str(kw_41667));


var G__41668 = seq__41202_41663;
var G__41669 = chunk__41203_41664;
var G__41670 = count__41204_41665;
var G__41671 = (i__41205_41666 + (1));
seq__41202_41663 = G__41668;
chunk__41203_41664 = G__41669;
count__41204_41665 = G__41670;
i__41205_41666 = G__41671;
continue;
} else {
var temp__5735__auto___41672 = cljs.core.seq(seq__41202_41663);
if(temp__5735__auto___41672){
var seq__41202_41674__$1 = temp__5735__auto___41672;
if(cljs.core.chunked_seq_QMARK_(seq__41202_41674__$1)){
var c__4609__auto___41675 = cljs.core.chunk_first(seq__41202_41674__$1);
var G__41680 = cljs.core.chunk_rest(seq__41202_41674__$1);
var G__41681 = c__4609__auto___41675;
var G__41682 = cljs.core.count(c__4609__auto___41675);
var G__41683 = (0);
seq__41202_41663 = G__41680;
chunk__41203_41664 = G__41681;
count__41204_41665 = G__41682;
i__41205_41666 = G__41683;
continue;
} else {
var kw_41684 = cljs.core.first(seq__41202_41674__$1);
style.removeProperty(dommy.utils.as_str(kw_41684));


var G__41685 = cljs.core.next(seq__41202_41674__$1);
var G__41686 = null;
var G__41687 = (0);
var G__41688 = (0);
seq__41202_41663 = G__41685;
chunk__41203_41664 = G__41686;
count__41204_41665 = G__41687;
i__41205_41666 = G__41688;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq41200){
var G__41201 = cljs.core.first(seq41200);
var seq41200__$1 = cljs.core.next(seq41200);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41201,seq41200__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41691 = arguments.length;
var i__4790__auto___41692 = (0);
while(true){
if((i__4790__auto___41692 < len__4789__auto___41691)){
args__4795__auto__.push((arguments[i__4790__auto___41692]));

var G__41693 = (i__4790__auto___41692 + (1));
i__4790__auto___41692 = G__41693;
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

var seq__41208_41694 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__41209_41695 = null;
var count__41210_41696 = (0);
var i__41211_41697 = (0);
while(true){
if((i__41211_41697 < count__41210_41696)){
var vec__41218_41699 = chunk__41209_41695.cljs$core$IIndexed$_nth$arity$2(null,i__41211_41697);
var k_41700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41218_41699,(0),null);
var v_41701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41218_41699,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_41700,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_41701),"px"].join('')], 0));


var G__41705 = seq__41208_41694;
var G__41706 = chunk__41209_41695;
var G__41707 = count__41210_41696;
var G__41708 = (i__41211_41697 + (1));
seq__41208_41694 = G__41705;
chunk__41209_41695 = G__41706;
count__41210_41696 = G__41707;
i__41211_41697 = G__41708;
continue;
} else {
var temp__5735__auto___41709 = cljs.core.seq(seq__41208_41694);
if(temp__5735__auto___41709){
var seq__41208_41710__$1 = temp__5735__auto___41709;
if(cljs.core.chunked_seq_QMARK_(seq__41208_41710__$1)){
var c__4609__auto___41711 = cljs.core.chunk_first(seq__41208_41710__$1);
var G__41712 = cljs.core.chunk_rest(seq__41208_41710__$1);
var G__41713 = c__4609__auto___41711;
var G__41714 = cljs.core.count(c__4609__auto___41711);
var G__41715 = (0);
seq__41208_41694 = G__41712;
chunk__41209_41695 = G__41713;
count__41210_41696 = G__41714;
i__41211_41697 = G__41715;
continue;
} else {
var vec__41221_41716 = cljs.core.first(seq__41208_41710__$1);
var k_41717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41221_41716,(0),null);
var v_41718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41221_41716,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_41717,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_41718),"px"].join('')], 0));


var G__41724 = cljs.core.next(seq__41208_41710__$1);
var G__41725 = null;
var G__41726 = (0);
var G__41727 = (0);
seq__41208_41694 = G__41724;
chunk__41209_41695 = G__41725;
count__41210_41696 = G__41726;
i__41211_41697 = G__41727;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq41206){
var G__41207 = cljs.core.first(seq41206);
var seq41206__$1 = cljs.core.next(seq41206);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41207,seq41206__$1);
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
var G__41229 = arguments.length;
switch (G__41229) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41734 = arguments.length;
var i__4790__auto___41735 = (0);
while(true){
if((i__4790__auto___41735 < len__4789__auto___41734)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41735]));

var G__41736 = (i__4790__auto___41735 + (1));
i__4790__auto___41735 = G__41736;
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
var G__41230 = elem;
(G__41230[k__$1] = v);

return G__41230;
} else {
var G__41231 = elem;
G__41231.setAttribute(k__$1,v);

return G__41231;
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

var seq__41232_41737 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__41233_41738 = null;
var count__41234_41739 = (0);
var i__41235_41740 = (0);
while(true){
if((i__41235_41740 < count__41234_41739)){
var vec__41242_41741 = chunk__41233_41738.cljs$core$IIndexed$_nth$arity$2(null,i__41235_41740);
var k_41742__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41242_41741,(0),null);
var v_41743__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41242_41741,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_41742__$1,v_41743__$1);


var G__41744 = seq__41232_41737;
var G__41745 = chunk__41233_41738;
var G__41746 = count__41234_41739;
var G__41747 = (i__41235_41740 + (1));
seq__41232_41737 = G__41744;
chunk__41233_41738 = G__41745;
count__41234_41739 = G__41746;
i__41235_41740 = G__41747;
continue;
} else {
var temp__5735__auto___41748 = cljs.core.seq(seq__41232_41737);
if(temp__5735__auto___41748){
var seq__41232_41749__$1 = temp__5735__auto___41748;
if(cljs.core.chunked_seq_QMARK_(seq__41232_41749__$1)){
var c__4609__auto___41750 = cljs.core.chunk_first(seq__41232_41749__$1);
var G__41751 = cljs.core.chunk_rest(seq__41232_41749__$1);
var G__41752 = c__4609__auto___41750;
var G__41753 = cljs.core.count(c__4609__auto___41750);
var G__41754 = (0);
seq__41232_41737 = G__41751;
chunk__41233_41738 = G__41752;
count__41234_41739 = G__41753;
i__41235_41740 = G__41754;
continue;
} else {
var vec__41245_41755 = cljs.core.first(seq__41232_41749__$1);
var k_41756__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41245_41755,(0),null);
var v_41757__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41245_41755,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_41756__$1,v_41757__$1);


var G__41758 = cljs.core.next(seq__41232_41749__$1);
var G__41759 = null;
var G__41760 = (0);
var G__41761 = (0);
seq__41232_41737 = G__41758;
chunk__41233_41738 = G__41759;
count__41234_41739 = G__41760;
i__41235_41740 = G__41761;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq41225){
var G__41226 = cljs.core.first(seq41225);
var seq41225__$1 = cljs.core.next(seq41225);
var G__41227 = cljs.core.first(seq41225__$1);
var seq41225__$2 = cljs.core.next(seq41225__$1);
var G__41228 = cljs.core.first(seq41225__$2);
var seq41225__$3 = cljs.core.next(seq41225__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41226,G__41227,G__41228,seq41225__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__41252 = arguments.length;
switch (G__41252) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

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
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_41766__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__41253 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__41253.cljs$core$IFn$_invoke$arity$1 ? fexpr__41253.cljs$core$IFn$_invoke$arity$1(k_41766__$1) : fexpr__41253.call(null,k_41766__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_41766__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__41254_41767 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__41255_41768 = null;
var count__41256_41769 = (0);
var i__41257_41770 = (0);
while(true){
if((i__41257_41770 < count__41256_41769)){
var k_41771__$1 = chunk__41255_41768.cljs$core$IIndexed$_nth$arity$2(null,i__41257_41770);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_41771__$1);


var G__41772 = seq__41254_41767;
var G__41773 = chunk__41255_41768;
var G__41774 = count__41256_41769;
var G__41775 = (i__41257_41770 + (1));
seq__41254_41767 = G__41772;
chunk__41255_41768 = G__41773;
count__41256_41769 = G__41774;
i__41257_41770 = G__41775;
continue;
} else {
var temp__5735__auto___41776 = cljs.core.seq(seq__41254_41767);
if(temp__5735__auto___41776){
var seq__41254_41777__$1 = temp__5735__auto___41776;
if(cljs.core.chunked_seq_QMARK_(seq__41254_41777__$1)){
var c__4609__auto___41778 = cljs.core.chunk_first(seq__41254_41777__$1);
var G__41779 = cljs.core.chunk_rest(seq__41254_41777__$1);
var G__41780 = c__4609__auto___41778;
var G__41781 = cljs.core.count(c__4609__auto___41778);
var G__41782 = (0);
seq__41254_41767 = G__41779;
chunk__41255_41768 = G__41780;
count__41256_41769 = G__41781;
i__41257_41770 = G__41782;
continue;
} else {
var k_41783__$1 = cljs.core.first(seq__41254_41777__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_41783__$1);


var G__41784 = cljs.core.next(seq__41254_41777__$1);
var G__41785 = null;
var G__41786 = (0);
var G__41787 = (0);
seq__41254_41767 = G__41784;
chunk__41255_41768 = G__41785;
count__41256_41769 = G__41786;
i__41257_41770 = G__41787;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq41249){
var G__41250 = cljs.core.first(seq41249);
var seq41249__$1 = cljs.core.next(seq41249);
var G__41251 = cljs.core.first(seq41249__$1);
var seq41249__$2 = cljs.core.next(seq41249__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41250,G__41251,seq41249__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__41259 = arguments.length;
switch (G__41259) {
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
var G__41264 = arguments.length;
switch (G__41264) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41790 = arguments.length;
var i__4790__auto___41791 = (0);
while(true){
if((i__4790__auto___41791 < len__4789__auto___41790)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41791]));

var G__41792 = (i__4790__auto___41791 + (1));
i__4790__auto___41791 = G__41792;
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
var temp__5733__auto___41793 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___41793)){
var class_list_41794 = temp__5733__auto___41793;
var seq__41265_41795 = cljs.core.seq(classes__$1);
var chunk__41266_41796 = null;
var count__41267_41797 = (0);
var i__41268_41798 = (0);
while(true){
if((i__41268_41798 < count__41267_41797)){
var c_41799 = chunk__41266_41796.cljs$core$IIndexed$_nth$arity$2(null,i__41268_41798);
class_list_41794.add(c_41799);


var G__41800 = seq__41265_41795;
var G__41801 = chunk__41266_41796;
var G__41802 = count__41267_41797;
var G__41803 = (i__41268_41798 + (1));
seq__41265_41795 = G__41800;
chunk__41266_41796 = G__41801;
count__41267_41797 = G__41802;
i__41268_41798 = G__41803;
continue;
} else {
var temp__5735__auto___41804 = cljs.core.seq(seq__41265_41795);
if(temp__5735__auto___41804){
var seq__41265_41805__$1 = temp__5735__auto___41804;
if(cljs.core.chunked_seq_QMARK_(seq__41265_41805__$1)){
var c__4609__auto___41806 = cljs.core.chunk_first(seq__41265_41805__$1);
var G__41807 = cljs.core.chunk_rest(seq__41265_41805__$1);
var G__41808 = c__4609__auto___41806;
var G__41809 = cljs.core.count(c__4609__auto___41806);
var G__41810 = (0);
seq__41265_41795 = G__41807;
chunk__41266_41796 = G__41808;
count__41267_41797 = G__41809;
i__41268_41798 = G__41810;
continue;
} else {
var c_41811 = cljs.core.first(seq__41265_41805__$1);
class_list_41794.add(c_41811);


var G__41812 = cljs.core.next(seq__41265_41805__$1);
var G__41813 = null;
var G__41814 = (0);
var G__41815 = (0);
seq__41265_41795 = G__41812;
chunk__41266_41796 = G__41813;
count__41267_41797 = G__41814;
i__41268_41798 = G__41815;
continue;
}
} else {
}
}
break;
}
} else {
var seq__41270_41816 = cljs.core.seq(classes__$1);
var chunk__41271_41817 = null;
var count__41272_41818 = (0);
var i__41273_41819 = (0);
while(true){
if((i__41273_41819 < count__41272_41818)){
var c_41820 = chunk__41271_41817.cljs$core$IIndexed$_nth$arity$2(null,i__41273_41819);
var class_name_41821 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_41821,c_41820))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_41821 === ""))?c_41820:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_41821)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_41820)].join('')));
}


var G__41822 = seq__41270_41816;
var G__41823 = chunk__41271_41817;
var G__41824 = count__41272_41818;
var G__41825 = (i__41273_41819 + (1));
seq__41270_41816 = G__41822;
chunk__41271_41817 = G__41823;
count__41272_41818 = G__41824;
i__41273_41819 = G__41825;
continue;
} else {
var temp__5735__auto___41826 = cljs.core.seq(seq__41270_41816);
if(temp__5735__auto___41826){
var seq__41270_41827__$1 = temp__5735__auto___41826;
if(cljs.core.chunked_seq_QMARK_(seq__41270_41827__$1)){
var c__4609__auto___41828 = cljs.core.chunk_first(seq__41270_41827__$1);
var G__41829 = cljs.core.chunk_rest(seq__41270_41827__$1);
var G__41830 = c__4609__auto___41828;
var G__41831 = cljs.core.count(c__4609__auto___41828);
var G__41832 = (0);
seq__41270_41816 = G__41829;
chunk__41271_41817 = G__41830;
count__41272_41818 = G__41831;
i__41273_41819 = G__41832;
continue;
} else {
var c_41833 = cljs.core.first(seq__41270_41827__$1);
var class_name_41834 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_41834,c_41833))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_41834 === ""))?c_41833:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_41834)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_41833)].join('')));
}


var G__41835 = cljs.core.next(seq__41270_41827__$1);
var G__41836 = null;
var G__41837 = (0);
var G__41838 = (0);
seq__41270_41816 = G__41835;
chunk__41271_41817 = G__41836;
count__41272_41818 = G__41837;
i__41273_41819 = G__41838;
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
var seq__41276_41839 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__41277_41840 = null;
var count__41278_41841 = (0);
var i__41279_41842 = (0);
while(true){
if((i__41279_41842 < count__41278_41841)){
var c_41843 = chunk__41277_41840.cljs$core$IIndexed$_nth$arity$2(null,i__41279_41842);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_41843);


var G__41844 = seq__41276_41839;
var G__41845 = chunk__41277_41840;
var G__41846 = count__41278_41841;
var G__41847 = (i__41279_41842 + (1));
seq__41276_41839 = G__41844;
chunk__41277_41840 = G__41845;
count__41278_41841 = G__41846;
i__41279_41842 = G__41847;
continue;
} else {
var temp__5735__auto___41848 = cljs.core.seq(seq__41276_41839);
if(temp__5735__auto___41848){
var seq__41276_41849__$1 = temp__5735__auto___41848;
if(cljs.core.chunked_seq_QMARK_(seq__41276_41849__$1)){
var c__4609__auto___41850 = cljs.core.chunk_first(seq__41276_41849__$1);
var G__41852 = cljs.core.chunk_rest(seq__41276_41849__$1);
var G__41853 = c__4609__auto___41850;
var G__41854 = cljs.core.count(c__4609__auto___41850);
var G__41855 = (0);
seq__41276_41839 = G__41852;
chunk__41277_41840 = G__41853;
count__41278_41841 = G__41854;
i__41279_41842 = G__41855;
continue;
} else {
var c_41857 = cljs.core.first(seq__41276_41849__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_41857);


var G__41859 = cljs.core.next(seq__41276_41849__$1);
var G__41860 = null;
var G__41861 = (0);
var G__41862 = (0);
seq__41276_41839 = G__41859;
chunk__41277_41840 = G__41860;
count__41278_41841 = G__41861;
i__41279_41842 = G__41862;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq41261){
var G__41262 = cljs.core.first(seq41261);
var seq41261__$1 = cljs.core.next(seq41261);
var G__41263 = cljs.core.first(seq41261__$1);
var seq41261__$2 = cljs.core.next(seq41261__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41262,G__41263,seq41261__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__41284 = arguments.length;
switch (G__41284) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41867 = arguments.length;
var i__4790__auto___41868 = (0);
while(true){
if((i__4790__auto___41868 < len__4789__auto___41867)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41868]));

var G__41869 = (i__4790__auto___41868 + (1));
i__4790__auto___41868 = G__41869;
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
var temp__5733__auto___41871 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___41871)){
var class_list_41872 = temp__5733__auto___41871;
class_list_41872.remove(c__$1);
} else {
var class_name_41875 = dommy.core.class$(elem);
var new_class_name_41876 = dommy.utils.remove_class_str(class_name_41875,c__$1);
if((class_name_41875 === new_class_name_41876)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_41876);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__41285 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__41286 = null;
var count__41287 = (0);
var i__41288 = (0);
while(true){
if((i__41288 < count__41287)){
var c = chunk__41286.cljs$core$IIndexed$_nth$arity$2(null,i__41288);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__41881 = seq__41285;
var G__41882 = chunk__41286;
var G__41883 = count__41287;
var G__41884 = (i__41288 + (1));
seq__41285 = G__41881;
chunk__41286 = G__41882;
count__41287 = G__41883;
i__41288 = G__41884;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41285);
if(temp__5735__auto__){
var seq__41285__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41285__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41285__$1);
var G__41885 = cljs.core.chunk_rest(seq__41285__$1);
var G__41886 = c__4609__auto__;
var G__41887 = cljs.core.count(c__4609__auto__);
var G__41888 = (0);
seq__41285 = G__41885;
chunk__41286 = G__41886;
count__41287 = G__41887;
i__41288 = G__41888;
continue;
} else {
var c = cljs.core.first(seq__41285__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__41889 = cljs.core.next(seq__41285__$1);
var G__41890 = null;
var G__41891 = (0);
var G__41892 = (0);
seq__41285 = G__41889;
chunk__41286 = G__41890;
count__41287 = G__41891;
i__41288 = G__41892;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq41281){
var G__41282 = cljs.core.first(seq41281);
var seq41281__$1 = cljs.core.next(seq41281);
var G__41283 = cljs.core.first(seq41281__$1);
var seq41281__$2 = cljs.core.next(seq41281__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41282,G__41283,seq41281__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__41290 = arguments.length;
switch (G__41290) {
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
var temp__5733__auto___41905 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___41905)){
var class_list_41906 = temp__5733__auto___41905;
class_list_41906.toggle(c__$1);
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
var G__41292 = arguments.length;
switch (G__41292) {
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
var G__41294 = arguments.length;
switch (G__41294) {
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
var G__41299 = arguments.length;
switch (G__41299) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41937 = arguments.length;
var i__4790__auto___41938 = (0);
while(true){
if((i__4790__auto___41938 < len__4789__auto___41937)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41938]));

var G__41941 = (i__4790__auto___41938 + (1));
i__4790__auto___41938 = G__41941;
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
var G__41300 = parent;
G__41300.appendChild(child);

return G__41300;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__41301_41949 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__41302_41950 = null;
var count__41303_41951 = (0);
var i__41304_41952 = (0);
while(true){
if((i__41304_41952 < count__41303_41951)){
var c_41958 = chunk__41302_41950.cljs$core$IIndexed$_nth$arity$2(null,i__41304_41952);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41958);


var G__41960 = seq__41301_41949;
var G__41961 = chunk__41302_41950;
var G__41962 = count__41303_41951;
var G__41963 = (i__41304_41952 + (1));
seq__41301_41949 = G__41960;
chunk__41302_41950 = G__41961;
count__41303_41951 = G__41962;
i__41304_41952 = G__41963;
continue;
} else {
var temp__5735__auto___41964 = cljs.core.seq(seq__41301_41949);
if(temp__5735__auto___41964){
var seq__41301_41967__$1 = temp__5735__auto___41964;
if(cljs.core.chunked_seq_QMARK_(seq__41301_41967__$1)){
var c__4609__auto___41969 = cljs.core.chunk_first(seq__41301_41967__$1);
var G__41970 = cljs.core.chunk_rest(seq__41301_41967__$1);
var G__41971 = c__4609__auto___41969;
var G__41972 = cljs.core.count(c__4609__auto___41969);
var G__41973 = (0);
seq__41301_41949 = G__41970;
chunk__41302_41950 = G__41971;
count__41303_41951 = G__41972;
i__41304_41952 = G__41973;
continue;
} else {
var c_41974 = cljs.core.first(seq__41301_41967__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41974);


var G__41978 = cljs.core.next(seq__41301_41967__$1);
var G__41979 = null;
var G__41980 = (0);
var G__41981 = (0);
seq__41301_41949 = G__41978;
chunk__41302_41950 = G__41979;
count__41303_41951 = G__41980;
i__41304_41952 = G__41981;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq41296){
var G__41297 = cljs.core.first(seq41296);
var seq41296__$1 = cljs.core.next(seq41296);
var G__41298 = cljs.core.first(seq41296__$1);
var seq41296__$2 = cljs.core.next(seq41296__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41297,G__41298,seq41296__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__41312 = arguments.length;
switch (G__41312) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41989 = arguments.length;
var i__4790__auto___41990 = (0);
while(true){
if((i__4790__auto___41990 < len__4789__auto___41989)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41990]));

var G__41993 = (i__4790__auto___41990 + (1));
i__4790__auto___41990 = G__41993;
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
var G__41313 = parent;
G__41313.insertBefore(child,parent.firstChild);

return G__41313;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__41314_41998 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__41315_41999 = null;
var count__41316_42000 = (0);
var i__41317_42001 = (0);
while(true){
if((i__41317_42001 < count__41316_42000)){
var c_42003 = chunk__41315_41999.cljs$core$IIndexed$_nth$arity$2(null,i__41317_42001);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_42003);


var G__42005 = seq__41314_41998;
var G__42006 = chunk__41315_41999;
var G__42007 = count__41316_42000;
var G__42008 = (i__41317_42001 + (1));
seq__41314_41998 = G__42005;
chunk__41315_41999 = G__42006;
count__41316_42000 = G__42007;
i__41317_42001 = G__42008;
continue;
} else {
var temp__5735__auto___42012 = cljs.core.seq(seq__41314_41998);
if(temp__5735__auto___42012){
var seq__41314_42031__$1 = temp__5735__auto___42012;
if(cljs.core.chunked_seq_QMARK_(seq__41314_42031__$1)){
var c__4609__auto___42032 = cljs.core.chunk_first(seq__41314_42031__$1);
var G__42033 = cljs.core.chunk_rest(seq__41314_42031__$1);
var G__42034 = c__4609__auto___42032;
var G__42035 = cljs.core.count(c__4609__auto___42032);
var G__42036 = (0);
seq__41314_41998 = G__42033;
chunk__41315_41999 = G__42034;
count__41316_42000 = G__42035;
i__41317_42001 = G__42036;
continue;
} else {
var c_42038 = cljs.core.first(seq__41314_42031__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_42038);


var G__42040 = cljs.core.next(seq__41314_42031__$1);
var G__42041 = null;
var G__42042 = (0);
var G__42043 = (0);
seq__41314_41998 = G__42040;
chunk__41315_41999 = G__42041;
count__41316_42000 = G__42042;
i__41317_42001 = G__42043;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq41309){
var G__41310 = cljs.core.first(seq41309);
var seq41309__$1 = cljs.core.next(seq41309);
var G__41311 = cljs.core.first(seq41309__$1);
var seq41309__$2 = cljs.core.next(seq41309__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41310,G__41311,seq41309__$2);
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
var temp__5733__auto___42055 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___42055)){
var next_42056 = temp__5733__auto___42055;
dommy.core.insert_before_BANG_(elem,next_42056);
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
var len__4789__auto___42115 = arguments.length;
var i__4790__auto___42116 = (0);
while(true){
if((i__4790__auto___42116 < len__4789__auto___42115)){
args__4795__auto__.push((arguments[i__4790__auto___42116]));

var G__42117 = (i__4790__auto___42116 + (1));
i__4790__auto___42116 = G__42117;
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
var len__4789__auto___42137 = arguments.length;
var i__4790__auto___42138 = (0);
while(true){
if((i__4790__auto___42138 < len__4789__auto___42137)){
args__4795__auto__.push((arguments[i__4790__auto___42138]));

var G__42141 = (i__4790__auto___42138 + (1));
i__4790__auto___42138 = G__42141;
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

var vec__41338_42151 = dommy.core.elem_and_selector(elem_sel);
var elem_42152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41338_42151,(0),null);
var selector_42153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41338_42151,(1),null);
var seq__41341_42154 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__41348_42155 = null;
var count__41349_42156 = (0);
var i__41350_42157 = (0);
while(true){
if((i__41350_42157 < count__41349_42156)){
var vec__41415_42162 = chunk__41348_42155.cljs$core$IIndexed$_nth$arity$2(null,i__41350_42157);
var orig_type_42163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41415_42162,(0),null);
var f_42164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41415_42162,(1),null);
var seq__41351_42165 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_42163,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_42163,cljs.core.identity])));
var chunk__41353_42166 = null;
var count__41354_42167 = (0);
var i__41355_42168 = (0);
while(true){
if((i__41355_42168 < count__41354_42167)){
var vec__41428_42176 = chunk__41353_42166.cljs$core$IIndexed$_nth$arity$2(null,i__41355_42168);
var actual_type_42177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41428_42176,(0),null);
var factory_42178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41428_42176,(1),null);
var canonical_f_42184 = (function (){var G__41435 = (factory_42178.cljs$core$IFn$_invoke$arity$1 ? factory_42178.cljs$core$IFn$_invoke$arity$1(f_42164) : factory_42178.call(null,f_42164));
var fexpr__41434 = (cljs.core.truth_(selector_42153)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_42152,selector_42153):cljs.core.identity);
return (fexpr__41434.cljs$core$IFn$_invoke$arity$1 ? fexpr__41434.cljs$core$IFn$_invoke$arity$1(G__41435) : fexpr__41434.call(null,G__41435));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42152,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42153,actual_type_42177,f_42164], null),canonical_f_42184], 0));

if(cljs.core.truth_(elem_42152.addEventListener)){
elem_42152.addEventListener(cljs.core.name(actual_type_42177),canonical_f_42184);
} else {
elem_42152.attachEvent(cljs.core.name(actual_type_42177),canonical_f_42184);
}


var G__42200 = seq__41351_42165;
var G__42201 = chunk__41353_42166;
var G__42202 = count__41354_42167;
var G__42204 = (i__41355_42168 + (1));
seq__41351_42165 = G__42200;
chunk__41353_42166 = G__42201;
count__41354_42167 = G__42202;
i__41355_42168 = G__42204;
continue;
} else {
var temp__5735__auto___42205 = cljs.core.seq(seq__41351_42165);
if(temp__5735__auto___42205){
var seq__41351_42206__$1 = temp__5735__auto___42205;
if(cljs.core.chunked_seq_QMARK_(seq__41351_42206__$1)){
var c__4609__auto___42207 = cljs.core.chunk_first(seq__41351_42206__$1);
var G__42208 = cljs.core.chunk_rest(seq__41351_42206__$1);
var G__42209 = c__4609__auto___42207;
var G__42210 = cljs.core.count(c__4609__auto___42207);
var G__42211 = (0);
seq__41351_42165 = G__42208;
chunk__41353_42166 = G__42209;
count__41354_42167 = G__42210;
i__41355_42168 = G__42211;
continue;
} else {
var vec__41437_42213 = cljs.core.first(seq__41351_42206__$1);
var actual_type_42214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41437_42213,(0),null);
var factory_42215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41437_42213,(1),null);
var canonical_f_42217 = (function (){var G__41441 = (factory_42215.cljs$core$IFn$_invoke$arity$1 ? factory_42215.cljs$core$IFn$_invoke$arity$1(f_42164) : factory_42215.call(null,f_42164));
var fexpr__41440 = (cljs.core.truth_(selector_42153)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_42152,selector_42153):cljs.core.identity);
return (fexpr__41440.cljs$core$IFn$_invoke$arity$1 ? fexpr__41440.cljs$core$IFn$_invoke$arity$1(G__41441) : fexpr__41440.call(null,G__41441));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42152,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42153,actual_type_42214,f_42164], null),canonical_f_42217], 0));

if(cljs.core.truth_(elem_42152.addEventListener)){
elem_42152.addEventListener(cljs.core.name(actual_type_42214),canonical_f_42217);
} else {
elem_42152.attachEvent(cljs.core.name(actual_type_42214),canonical_f_42217);
}


var G__42222 = cljs.core.next(seq__41351_42206__$1);
var G__42223 = null;
var G__42224 = (0);
var G__42225 = (0);
seq__41351_42165 = G__42222;
chunk__41353_42166 = G__42223;
count__41354_42167 = G__42224;
i__41355_42168 = G__42225;
continue;
}
} else {
}
}
break;
}

var G__42226 = seq__41341_42154;
var G__42227 = chunk__41348_42155;
var G__42228 = count__41349_42156;
var G__42229 = (i__41350_42157 + (1));
seq__41341_42154 = G__42226;
chunk__41348_42155 = G__42227;
count__41349_42156 = G__42228;
i__41350_42157 = G__42229;
continue;
} else {
var temp__5735__auto___42230 = cljs.core.seq(seq__41341_42154);
if(temp__5735__auto___42230){
var seq__41341_42231__$1 = temp__5735__auto___42230;
if(cljs.core.chunked_seq_QMARK_(seq__41341_42231__$1)){
var c__4609__auto___42232 = cljs.core.chunk_first(seq__41341_42231__$1);
var G__42233 = cljs.core.chunk_rest(seq__41341_42231__$1);
var G__42234 = c__4609__auto___42232;
var G__42235 = cljs.core.count(c__4609__auto___42232);
var G__42236 = (0);
seq__41341_42154 = G__42233;
chunk__41348_42155 = G__42234;
count__41349_42156 = G__42235;
i__41350_42157 = G__42236;
continue;
} else {
var vec__41448_42239 = cljs.core.first(seq__41341_42231__$1);
var orig_type_42240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41448_42239,(0),null);
var f_42241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41448_42239,(1),null);
var seq__41342_42242 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_42240,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_42240,cljs.core.identity])));
var chunk__41344_42243 = null;
var count__41345_42244 = (0);
var i__41346_42245 = (0);
while(true){
if((i__41346_42245 < count__41345_42244)){
var vec__41483_42247 = chunk__41344_42243.cljs$core$IIndexed$_nth$arity$2(null,i__41346_42245);
var actual_type_42248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41483_42247,(0),null);
var factory_42249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41483_42247,(1),null);
var canonical_f_42253 = (function (){var G__41488 = (factory_42249.cljs$core$IFn$_invoke$arity$1 ? factory_42249.cljs$core$IFn$_invoke$arity$1(f_42241) : factory_42249.call(null,f_42241));
var fexpr__41487 = (cljs.core.truth_(selector_42153)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_42152,selector_42153):cljs.core.identity);
return (fexpr__41487.cljs$core$IFn$_invoke$arity$1 ? fexpr__41487.cljs$core$IFn$_invoke$arity$1(G__41488) : fexpr__41487.call(null,G__41488));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42152,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42153,actual_type_42248,f_42241], null),canonical_f_42253], 0));

if(cljs.core.truth_(elem_42152.addEventListener)){
elem_42152.addEventListener(cljs.core.name(actual_type_42248),canonical_f_42253);
} else {
elem_42152.attachEvent(cljs.core.name(actual_type_42248),canonical_f_42253);
}


var G__42262 = seq__41342_42242;
var G__42263 = chunk__41344_42243;
var G__42264 = count__41345_42244;
var G__42265 = (i__41346_42245 + (1));
seq__41342_42242 = G__42262;
chunk__41344_42243 = G__42263;
count__41345_42244 = G__42264;
i__41346_42245 = G__42265;
continue;
} else {
var temp__5735__auto___42266__$1 = cljs.core.seq(seq__41342_42242);
if(temp__5735__auto___42266__$1){
var seq__41342_42267__$1 = temp__5735__auto___42266__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41342_42267__$1)){
var c__4609__auto___42268 = cljs.core.chunk_first(seq__41342_42267__$1);
var G__42269 = cljs.core.chunk_rest(seq__41342_42267__$1);
var G__42270 = c__4609__auto___42268;
var G__42271 = cljs.core.count(c__4609__auto___42268);
var G__42272 = (0);
seq__41342_42242 = G__42269;
chunk__41344_42243 = G__42270;
count__41345_42244 = G__42271;
i__41346_42245 = G__42272;
continue;
} else {
var vec__41505_42274 = cljs.core.first(seq__41342_42267__$1);
var actual_type_42275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41505_42274,(0),null);
var factory_42276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41505_42274,(1),null);
var canonical_f_42278 = (function (){var G__41509 = (factory_42276.cljs$core$IFn$_invoke$arity$1 ? factory_42276.cljs$core$IFn$_invoke$arity$1(f_42241) : factory_42276.call(null,f_42241));
var fexpr__41508 = (cljs.core.truth_(selector_42153)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_42152,selector_42153):cljs.core.identity);
return (fexpr__41508.cljs$core$IFn$_invoke$arity$1 ? fexpr__41508.cljs$core$IFn$_invoke$arity$1(G__41509) : fexpr__41508.call(null,G__41509));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42152,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42153,actual_type_42275,f_42241], null),canonical_f_42278], 0));

if(cljs.core.truth_(elem_42152.addEventListener)){
elem_42152.addEventListener(cljs.core.name(actual_type_42275),canonical_f_42278);
} else {
elem_42152.attachEvent(cljs.core.name(actual_type_42275),canonical_f_42278);
}


var G__42282 = cljs.core.next(seq__41342_42267__$1);
var G__42283 = null;
var G__42284 = (0);
var G__42285 = (0);
seq__41342_42242 = G__42282;
chunk__41344_42243 = G__42283;
count__41345_42244 = G__42284;
i__41346_42245 = G__42285;
continue;
}
} else {
}
}
break;
}

var G__42286 = cljs.core.next(seq__41341_42231__$1);
var G__42287 = null;
var G__42288 = (0);
var G__42289 = (0);
seq__41341_42154 = G__42286;
chunk__41348_42155 = G__42287;
count__41349_42156 = G__42288;
i__41350_42157 = G__42289;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq41336){
var G__41337 = cljs.core.first(seq41336);
var seq41336__$1 = cljs.core.next(seq41336);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41337,seq41336__$1);
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
var len__4789__auto___42292 = arguments.length;
var i__4790__auto___42293 = (0);
while(true){
if((i__4790__auto___42293 < len__4789__auto___42292)){
args__4795__auto__.push((arguments[i__4790__auto___42293]));

var G__42294 = (i__4790__auto___42293 + (1));
i__4790__auto___42293 = G__42294;
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

var vec__41515_42297 = dommy.core.elem_and_selector(elem_sel);
var elem_42298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41515_42297,(0),null);
var selector_42299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41515_42297,(1),null);
var seq__41518_42300 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__41525_42301 = null;
var count__41526_42302 = (0);
var i__41527_42303 = (0);
while(true){
if((i__41527_42303 < count__41526_42302)){
var vec__41566_42304 = chunk__41525_42301.cljs$core$IIndexed$_nth$arity$2(null,i__41527_42303);
var orig_type_42305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41566_42304,(0),null);
var f_42306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41566_42304,(1),null);
var seq__41528_42307 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_42305,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_42305,cljs.core.identity])));
var chunk__41530_42308 = null;
var count__41531_42309 = (0);
var i__41532_42310 = (0);
while(true){
if((i__41532_42310 < count__41531_42309)){
var vec__41575_42311 = chunk__41530_42308.cljs$core$IIndexed$_nth$arity$2(null,i__41532_42310);
var actual_type_42312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41575_42311,(0),null);
var __42313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41575_42311,(1),null);
var keys_42314 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42299,actual_type_42312,f_42306], null);
var canonical_f_42315 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42298),keys_42314);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42298,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42314], 0));

if(cljs.core.truth_(elem_42298.removeEventListener)){
elem_42298.removeEventListener(cljs.core.name(actual_type_42312),canonical_f_42315);
} else {
elem_42298.detachEvent(cljs.core.name(actual_type_42312),canonical_f_42315);
}


var G__42316 = seq__41528_42307;
var G__42317 = chunk__41530_42308;
var G__42318 = count__41531_42309;
var G__42319 = (i__41532_42310 + (1));
seq__41528_42307 = G__42316;
chunk__41530_42308 = G__42317;
count__41531_42309 = G__42318;
i__41532_42310 = G__42319;
continue;
} else {
var temp__5735__auto___42320 = cljs.core.seq(seq__41528_42307);
if(temp__5735__auto___42320){
var seq__41528_42321__$1 = temp__5735__auto___42320;
if(cljs.core.chunked_seq_QMARK_(seq__41528_42321__$1)){
var c__4609__auto___42322 = cljs.core.chunk_first(seq__41528_42321__$1);
var G__42323 = cljs.core.chunk_rest(seq__41528_42321__$1);
var G__42324 = c__4609__auto___42322;
var G__42325 = cljs.core.count(c__4609__auto___42322);
var G__42326 = (0);
seq__41528_42307 = G__42323;
chunk__41530_42308 = G__42324;
count__41531_42309 = G__42325;
i__41532_42310 = G__42326;
continue;
} else {
var vec__41578_42327 = cljs.core.first(seq__41528_42321__$1);
var actual_type_42328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41578_42327,(0),null);
var __42329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41578_42327,(1),null);
var keys_42331 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42299,actual_type_42328,f_42306], null);
var canonical_f_42332 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42298),keys_42331);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42298,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42331], 0));

if(cljs.core.truth_(elem_42298.removeEventListener)){
elem_42298.removeEventListener(cljs.core.name(actual_type_42328),canonical_f_42332);
} else {
elem_42298.detachEvent(cljs.core.name(actual_type_42328),canonical_f_42332);
}


var G__42338 = cljs.core.next(seq__41528_42321__$1);
var G__42339 = null;
var G__42340 = (0);
var G__42341 = (0);
seq__41528_42307 = G__42338;
chunk__41530_42308 = G__42339;
count__41531_42309 = G__42340;
i__41532_42310 = G__42341;
continue;
}
} else {
}
}
break;
}

var G__42344 = seq__41518_42300;
var G__42345 = chunk__41525_42301;
var G__42346 = count__41526_42302;
var G__42347 = (i__41527_42303 + (1));
seq__41518_42300 = G__42344;
chunk__41525_42301 = G__42345;
count__41526_42302 = G__42346;
i__41527_42303 = G__42347;
continue;
} else {
var temp__5735__auto___42348 = cljs.core.seq(seq__41518_42300);
if(temp__5735__auto___42348){
var seq__41518_42349__$1 = temp__5735__auto___42348;
if(cljs.core.chunked_seq_QMARK_(seq__41518_42349__$1)){
var c__4609__auto___42350 = cljs.core.chunk_first(seq__41518_42349__$1);
var G__42351 = cljs.core.chunk_rest(seq__41518_42349__$1);
var G__42352 = c__4609__auto___42350;
var G__42353 = cljs.core.count(c__4609__auto___42350);
var G__42354 = (0);
seq__41518_42300 = G__42351;
chunk__41525_42301 = G__42352;
count__41526_42302 = G__42353;
i__41527_42303 = G__42354;
continue;
} else {
var vec__41581_42360 = cljs.core.first(seq__41518_42349__$1);
var orig_type_42361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41581_42360,(0),null);
var f_42362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41581_42360,(1),null);
var seq__41519_42368 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_42361,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_42361,cljs.core.identity])));
var chunk__41521_42369 = null;
var count__41522_42370 = (0);
var i__41523_42371 = (0);
while(true){
if((i__41523_42371 < count__41522_42370)){
var vec__41592_42372 = chunk__41521_42369.cljs$core$IIndexed$_nth$arity$2(null,i__41523_42371);
var actual_type_42373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41592_42372,(0),null);
var __42374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41592_42372,(1),null);
var keys_42376 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42299,actual_type_42373,f_42362], null);
var canonical_f_42377 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42298),keys_42376);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42298,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42376], 0));

if(cljs.core.truth_(elem_42298.removeEventListener)){
elem_42298.removeEventListener(cljs.core.name(actual_type_42373),canonical_f_42377);
} else {
elem_42298.detachEvent(cljs.core.name(actual_type_42373),canonical_f_42377);
}


var G__42381 = seq__41519_42368;
var G__42382 = chunk__41521_42369;
var G__42383 = count__41522_42370;
var G__42384 = (i__41523_42371 + (1));
seq__41519_42368 = G__42381;
chunk__41521_42369 = G__42382;
count__41522_42370 = G__42383;
i__41523_42371 = G__42384;
continue;
} else {
var temp__5735__auto___42386__$1 = cljs.core.seq(seq__41519_42368);
if(temp__5735__auto___42386__$1){
var seq__41519_42387__$1 = temp__5735__auto___42386__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41519_42387__$1)){
var c__4609__auto___42388 = cljs.core.chunk_first(seq__41519_42387__$1);
var G__42389 = cljs.core.chunk_rest(seq__41519_42387__$1);
var G__42390 = c__4609__auto___42388;
var G__42391 = cljs.core.count(c__4609__auto___42388);
var G__42392 = (0);
seq__41519_42368 = G__42389;
chunk__41521_42369 = G__42390;
count__41522_42370 = G__42391;
i__41523_42371 = G__42392;
continue;
} else {
var vec__41597_42393 = cljs.core.first(seq__41519_42387__$1);
var actual_type_42394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41597_42393,(0),null);
var __42395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41597_42393,(1),null);
var keys_42396 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42299,actual_type_42394,f_42362], null);
var canonical_f_42397 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42298),keys_42396);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42298,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42396], 0));

if(cljs.core.truth_(elem_42298.removeEventListener)){
elem_42298.removeEventListener(cljs.core.name(actual_type_42394),canonical_f_42397);
} else {
elem_42298.detachEvent(cljs.core.name(actual_type_42394),canonical_f_42397);
}


var G__42402 = cljs.core.next(seq__41519_42387__$1);
var G__42403 = null;
var G__42404 = (0);
var G__42405 = (0);
seq__41519_42368 = G__42402;
chunk__41521_42369 = G__42403;
count__41522_42370 = G__42404;
i__41523_42371 = G__42405;
continue;
}
} else {
}
}
break;
}

var G__42408 = cljs.core.next(seq__41518_42349__$1);
var G__42409 = null;
var G__42410 = (0);
var G__42411 = (0);
seq__41518_42300 = G__42408;
chunk__41525_42301 = G__42409;
count__41526_42302 = G__42410;
i__41527_42303 = G__42411;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq41510){
var G__41511 = cljs.core.first(seq41510);
var seq41510__$1 = cljs.core.next(seq41510);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41511,seq41510__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42415 = arguments.length;
var i__4790__auto___42416 = (0);
while(true){
if((i__4790__auto___42416 < len__4789__auto___42415)){
args__4795__auto__.push((arguments[i__4790__auto___42416]));

var G__42417 = (i__4790__auto___42416 + (1));
i__4790__auto___42416 = G__42417;
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

var vec__41604_42420 = dommy.core.elem_and_selector(elem_sel);
var elem_42421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41604_42420,(0),null);
var selector_42422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41604_42420,(1),null);
var seq__41607_42423 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__41608_42424 = null;
var count__41609_42425 = (0);
var i__41610_42426 = (0);
while(true){
if((i__41610_42426 < count__41609_42425)){
var vec__41617_42427 = chunk__41608_42424.cljs$core$IIndexed$_nth$arity$2(null,i__41610_42426);
var type_42428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41617_42427,(0),null);
var f_42429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41617_42427,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42428,((function (seq__41607_42423,chunk__41608_42424,count__41609_42425,i__41610_42426,vec__41617_42427,type_42428,f_42429,vec__41604_42420,elem_42421,selector_42422){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42428,dommy$core$this_fn], 0));

return (f_42429.cljs$core$IFn$_invoke$arity$1 ? f_42429.cljs$core$IFn$_invoke$arity$1(e) : f_42429.call(null,e));
});})(seq__41607_42423,chunk__41608_42424,count__41609_42425,i__41610_42426,vec__41617_42427,type_42428,f_42429,vec__41604_42420,elem_42421,selector_42422))
], 0));


var G__42436 = seq__41607_42423;
var G__42437 = chunk__41608_42424;
var G__42438 = count__41609_42425;
var G__42439 = (i__41610_42426 + (1));
seq__41607_42423 = G__42436;
chunk__41608_42424 = G__42437;
count__41609_42425 = G__42438;
i__41610_42426 = G__42439;
continue;
} else {
var temp__5735__auto___42440 = cljs.core.seq(seq__41607_42423);
if(temp__5735__auto___42440){
var seq__41607_42441__$1 = temp__5735__auto___42440;
if(cljs.core.chunked_seq_QMARK_(seq__41607_42441__$1)){
var c__4609__auto___42442 = cljs.core.chunk_first(seq__41607_42441__$1);
var G__42443 = cljs.core.chunk_rest(seq__41607_42441__$1);
var G__42444 = c__4609__auto___42442;
var G__42445 = cljs.core.count(c__4609__auto___42442);
var G__42446 = (0);
seq__41607_42423 = G__42443;
chunk__41608_42424 = G__42444;
count__41609_42425 = G__42445;
i__41610_42426 = G__42446;
continue;
} else {
var vec__41620_42447 = cljs.core.first(seq__41607_42441__$1);
var type_42448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41620_42447,(0),null);
var f_42449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41620_42447,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42448,((function (seq__41607_42423,chunk__41608_42424,count__41609_42425,i__41610_42426,vec__41620_42447,type_42448,f_42449,seq__41607_42441__$1,temp__5735__auto___42440,vec__41604_42420,elem_42421,selector_42422){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42448,dommy$core$this_fn], 0));

return (f_42449.cljs$core$IFn$_invoke$arity$1 ? f_42449.cljs$core$IFn$_invoke$arity$1(e) : f_42449.call(null,e));
});})(seq__41607_42423,chunk__41608_42424,count__41609_42425,i__41610_42426,vec__41620_42447,type_42448,f_42449,seq__41607_42441__$1,temp__5735__auto___42440,vec__41604_42420,elem_42421,selector_42422))
], 0));


var G__42450 = cljs.core.next(seq__41607_42441__$1);
var G__42451 = null;
var G__42452 = (0);
var G__42453 = (0);
seq__41607_42423 = G__42450;
chunk__41608_42424 = G__42451;
count__41609_42425 = G__42452;
i__41610_42426 = G__42453;
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
