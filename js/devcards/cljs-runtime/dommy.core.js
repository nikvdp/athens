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
var G__34702 = arguments.length;
switch (G__34702) {
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
var G__34704 = arguments.length;
switch (G__34704) {
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
var G__34707 = arguments.length;
switch (G__34707) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__34705_SHARP_){
return (!((p1__34705_SHARP_ === base)));
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
var len__4789__auto___35144 = arguments.length;
var i__4790__auto___35145 = (0);
while(true){
if((i__4790__auto___35145 < len__4789__auto___35144)){
args__4795__auto__.push((arguments[i__4790__auto___35145]));

var G__35146 = (i__4790__auto___35145 + (1));
i__4790__auto___35145 = G__35146;
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
var seq__34712_35150 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34713_35151 = null;
var count__34714_35152 = (0);
var i__34715_35153 = (0);
while(true){
if((i__34715_35153 < count__34714_35152)){
var vec__34722_35154 = chunk__34713_35151.cljs$core$IIndexed$_nth$arity$2(null,i__34715_35153);
var k_35155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34722_35154,(0),null);
var v_35156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34722_35154,(1),null);
style.setProperty(dommy.utils.as_str(k_35155),v_35156);


var G__35157 = seq__34712_35150;
var G__35158 = chunk__34713_35151;
var G__35159 = count__34714_35152;
var G__35160 = (i__34715_35153 + (1));
seq__34712_35150 = G__35157;
chunk__34713_35151 = G__35158;
count__34714_35152 = G__35159;
i__34715_35153 = G__35160;
continue;
} else {
var temp__5735__auto___35161 = cljs.core.seq(seq__34712_35150);
if(temp__5735__auto___35161){
var seq__34712_35162__$1 = temp__5735__auto___35161;
if(cljs.core.chunked_seq_QMARK_(seq__34712_35162__$1)){
var c__4609__auto___35163 = cljs.core.chunk_first(seq__34712_35162__$1);
var G__35164 = cljs.core.chunk_rest(seq__34712_35162__$1);
var G__35165 = c__4609__auto___35163;
var G__35166 = cljs.core.count(c__4609__auto___35163);
var G__35167 = (0);
seq__34712_35150 = G__35164;
chunk__34713_35151 = G__35165;
count__34714_35152 = G__35166;
i__34715_35153 = G__35167;
continue;
} else {
var vec__34725_35168 = cljs.core.first(seq__34712_35162__$1);
var k_35169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34725_35168,(0),null);
var v_35170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34725_35168,(1),null);
style.setProperty(dommy.utils.as_str(k_35169),v_35170);


var G__35171 = cljs.core.next(seq__34712_35162__$1);
var G__35172 = null;
var G__35173 = (0);
var G__35174 = (0);
seq__34712_35150 = G__35171;
chunk__34713_35151 = G__35172;
count__34714_35152 = G__35173;
i__34715_35153 = G__35174;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq34710){
var G__34711 = cljs.core.first(seq34710);
var seq34710__$1 = cljs.core.next(seq34710);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34711,seq34710__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35176 = arguments.length;
var i__4790__auto___35177 = (0);
while(true){
if((i__4790__auto___35177 < len__4789__auto___35176)){
args__4795__auto__.push((arguments[i__4790__auto___35177]));

var G__35178 = (i__4790__auto___35177 + (1));
i__4790__auto___35177 = G__35178;
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
var seq__34730_35179 = cljs.core.seq(keywords);
var chunk__34731_35180 = null;
var count__34732_35181 = (0);
var i__34733_35182 = (0);
while(true){
if((i__34733_35182 < count__34732_35181)){
var kw_35184 = chunk__34731_35180.cljs$core$IIndexed$_nth$arity$2(null,i__34733_35182);
style.removeProperty(dommy.utils.as_str(kw_35184));


var G__35185 = seq__34730_35179;
var G__35186 = chunk__34731_35180;
var G__35187 = count__34732_35181;
var G__35188 = (i__34733_35182 + (1));
seq__34730_35179 = G__35185;
chunk__34731_35180 = G__35186;
count__34732_35181 = G__35187;
i__34733_35182 = G__35188;
continue;
} else {
var temp__5735__auto___35189 = cljs.core.seq(seq__34730_35179);
if(temp__5735__auto___35189){
var seq__34730_35190__$1 = temp__5735__auto___35189;
if(cljs.core.chunked_seq_QMARK_(seq__34730_35190__$1)){
var c__4609__auto___35191 = cljs.core.chunk_first(seq__34730_35190__$1);
var G__35192 = cljs.core.chunk_rest(seq__34730_35190__$1);
var G__35193 = c__4609__auto___35191;
var G__35194 = cljs.core.count(c__4609__auto___35191);
var G__35195 = (0);
seq__34730_35179 = G__35192;
chunk__34731_35180 = G__35193;
count__34732_35181 = G__35194;
i__34733_35182 = G__35195;
continue;
} else {
var kw_35196 = cljs.core.first(seq__34730_35190__$1);
style.removeProperty(dommy.utils.as_str(kw_35196));


var G__35197 = cljs.core.next(seq__34730_35190__$1);
var G__35198 = null;
var G__35199 = (0);
var G__35200 = (0);
seq__34730_35179 = G__35197;
chunk__34731_35180 = G__35198;
count__34732_35181 = G__35199;
i__34733_35182 = G__35200;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq34728){
var G__34729 = cljs.core.first(seq34728);
var seq34728__$1 = cljs.core.next(seq34728);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34729,seq34728__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35201 = arguments.length;
var i__4790__auto___35202 = (0);
while(true){
if((i__4790__auto___35202 < len__4789__auto___35201)){
args__4795__auto__.push((arguments[i__4790__auto___35202]));

var G__35203 = (i__4790__auto___35202 + (1));
i__4790__auto___35202 = G__35203;
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

var seq__34737_35204 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34738_35205 = null;
var count__34739_35206 = (0);
var i__34740_35207 = (0);
while(true){
if((i__34740_35207 < count__34739_35206)){
var vec__34747_35208 = chunk__34738_35205.cljs$core$IIndexed$_nth$arity$2(null,i__34740_35207);
var k_35209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34747_35208,(0),null);
var v_35210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34747_35208,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35209,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35210),"px"].join('')], 0));


var G__35211 = seq__34737_35204;
var G__35212 = chunk__34738_35205;
var G__35213 = count__34739_35206;
var G__35214 = (i__34740_35207 + (1));
seq__34737_35204 = G__35211;
chunk__34738_35205 = G__35212;
count__34739_35206 = G__35213;
i__34740_35207 = G__35214;
continue;
} else {
var temp__5735__auto___35215 = cljs.core.seq(seq__34737_35204);
if(temp__5735__auto___35215){
var seq__34737_35216__$1 = temp__5735__auto___35215;
if(cljs.core.chunked_seq_QMARK_(seq__34737_35216__$1)){
var c__4609__auto___35217 = cljs.core.chunk_first(seq__34737_35216__$1);
var G__35218 = cljs.core.chunk_rest(seq__34737_35216__$1);
var G__35219 = c__4609__auto___35217;
var G__35220 = cljs.core.count(c__4609__auto___35217);
var G__35221 = (0);
seq__34737_35204 = G__35218;
chunk__34738_35205 = G__35219;
count__34739_35206 = G__35220;
i__34740_35207 = G__35221;
continue;
} else {
var vec__34750_35222 = cljs.core.first(seq__34737_35216__$1);
var k_35223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34750_35222,(0),null);
var v_35224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34750_35222,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35223,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35224),"px"].join('')], 0));


var G__35225 = cljs.core.next(seq__34737_35216__$1);
var G__35226 = null;
var G__35227 = (0);
var G__35228 = (0);
seq__34737_35204 = G__35225;
chunk__34738_35205 = G__35226;
count__34739_35206 = G__35227;
i__34740_35207 = G__35228;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq34735){
var G__34736 = cljs.core.first(seq34735);
var seq34735__$1 = cljs.core.next(seq34735);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34736,seq34735__$1);
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
var G__34758 = arguments.length;
switch (G__34758) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35230 = arguments.length;
var i__4790__auto___35231 = (0);
while(true){
if((i__4790__auto___35231 < len__4789__auto___35230)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35231]));

var G__35232 = (i__4790__auto___35231 + (1));
i__4790__auto___35231 = G__35232;
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
var G__34759 = elem;
(G__34759[k__$1] = v);

return G__34759;
} else {
var G__34760 = elem;
G__34760.setAttribute(k__$1,v);

return G__34760;
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

var seq__34761_35233 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__34762_35234 = null;
var count__34763_35235 = (0);
var i__34764_35236 = (0);
while(true){
if((i__34764_35236 < count__34763_35235)){
var vec__34771_35237 = chunk__34762_35234.cljs$core$IIndexed$_nth$arity$2(null,i__34764_35236);
var k_35238__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34771_35237,(0),null);
var v_35239__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34771_35237,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35238__$1,v_35239__$1);


var G__35240 = seq__34761_35233;
var G__35241 = chunk__34762_35234;
var G__35242 = count__34763_35235;
var G__35243 = (i__34764_35236 + (1));
seq__34761_35233 = G__35240;
chunk__34762_35234 = G__35241;
count__34763_35235 = G__35242;
i__34764_35236 = G__35243;
continue;
} else {
var temp__5735__auto___35244 = cljs.core.seq(seq__34761_35233);
if(temp__5735__auto___35244){
var seq__34761_35245__$1 = temp__5735__auto___35244;
if(cljs.core.chunked_seq_QMARK_(seq__34761_35245__$1)){
var c__4609__auto___35246 = cljs.core.chunk_first(seq__34761_35245__$1);
var G__35247 = cljs.core.chunk_rest(seq__34761_35245__$1);
var G__35248 = c__4609__auto___35246;
var G__35249 = cljs.core.count(c__4609__auto___35246);
var G__35250 = (0);
seq__34761_35233 = G__35247;
chunk__34762_35234 = G__35248;
count__34763_35235 = G__35249;
i__34764_35236 = G__35250;
continue;
} else {
var vec__34774_35251 = cljs.core.first(seq__34761_35245__$1);
var k_35252__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34774_35251,(0),null);
var v_35253__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34774_35251,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35252__$1,v_35253__$1);


var G__35254 = cljs.core.next(seq__34761_35245__$1);
var G__35255 = null;
var G__35256 = (0);
var G__35257 = (0);
seq__34761_35233 = G__35254;
chunk__34762_35234 = G__35255;
count__34763_35235 = G__35256;
i__34764_35236 = G__35257;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq34754){
var G__34755 = cljs.core.first(seq34754);
var seq34754__$1 = cljs.core.next(seq34754);
var G__34756 = cljs.core.first(seq34754__$1);
var seq34754__$2 = cljs.core.next(seq34754__$1);
var G__34757 = cljs.core.first(seq34754__$2);
var seq34754__$3 = cljs.core.next(seq34754__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34755,G__34756,G__34757,seq34754__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__34781 = arguments.length;
switch (G__34781) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35259 = arguments.length;
var i__4790__auto___35260 = (0);
while(true){
if((i__4790__auto___35260 < len__4789__auto___35259)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35260]));

var G__35261 = (i__4790__auto___35260 + (1));
i__4790__auto___35260 = G__35261;
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
var k_35262__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__34782 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__34782.cljs$core$IFn$_invoke$arity$1 ? fexpr__34782.cljs$core$IFn$_invoke$arity$1(k_35262__$1) : fexpr__34782.call(null,k_35262__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_35262__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__34783_35263 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__34784_35264 = null;
var count__34785_35265 = (0);
var i__34786_35266 = (0);
while(true){
if((i__34786_35266 < count__34785_35265)){
var k_35267__$1 = chunk__34784_35264.cljs$core$IIndexed$_nth$arity$2(null,i__34786_35266);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35267__$1);


var G__35268 = seq__34783_35263;
var G__35269 = chunk__34784_35264;
var G__35270 = count__34785_35265;
var G__35271 = (i__34786_35266 + (1));
seq__34783_35263 = G__35268;
chunk__34784_35264 = G__35269;
count__34785_35265 = G__35270;
i__34786_35266 = G__35271;
continue;
} else {
var temp__5735__auto___35272 = cljs.core.seq(seq__34783_35263);
if(temp__5735__auto___35272){
var seq__34783_35273__$1 = temp__5735__auto___35272;
if(cljs.core.chunked_seq_QMARK_(seq__34783_35273__$1)){
var c__4609__auto___35274 = cljs.core.chunk_first(seq__34783_35273__$1);
var G__35275 = cljs.core.chunk_rest(seq__34783_35273__$1);
var G__35276 = c__4609__auto___35274;
var G__35277 = cljs.core.count(c__4609__auto___35274);
var G__35278 = (0);
seq__34783_35263 = G__35275;
chunk__34784_35264 = G__35276;
count__34785_35265 = G__35277;
i__34786_35266 = G__35278;
continue;
} else {
var k_35279__$1 = cljs.core.first(seq__34783_35273__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35279__$1);


var G__35280 = cljs.core.next(seq__34783_35273__$1);
var G__35281 = null;
var G__35282 = (0);
var G__35283 = (0);
seq__34783_35263 = G__35280;
chunk__34784_35264 = G__35281;
count__34785_35265 = G__35282;
i__34786_35266 = G__35283;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq34778){
var G__34779 = cljs.core.first(seq34778);
var seq34778__$1 = cljs.core.next(seq34778);
var G__34780 = cljs.core.first(seq34778__$1);
var seq34778__$2 = cljs.core.next(seq34778__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34779,G__34780,seq34778__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__34788 = arguments.length;
switch (G__34788) {
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
var G__34793 = arguments.length;
switch (G__34793) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35286 = arguments.length;
var i__4790__auto___35287 = (0);
while(true){
if((i__4790__auto___35287 < len__4789__auto___35286)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35287]));

var G__35288 = (i__4790__auto___35287 + (1));
i__4790__auto___35287 = G__35288;
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
var temp__5733__auto___35289 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35289)){
var class_list_35290 = temp__5733__auto___35289;
var seq__34794_35291 = cljs.core.seq(classes__$1);
var chunk__34795_35292 = null;
var count__34796_35293 = (0);
var i__34797_35294 = (0);
while(true){
if((i__34797_35294 < count__34796_35293)){
var c_35295 = chunk__34795_35292.cljs$core$IIndexed$_nth$arity$2(null,i__34797_35294);
class_list_35290.add(c_35295);


var G__35296 = seq__34794_35291;
var G__35297 = chunk__34795_35292;
var G__35298 = count__34796_35293;
var G__35299 = (i__34797_35294 + (1));
seq__34794_35291 = G__35296;
chunk__34795_35292 = G__35297;
count__34796_35293 = G__35298;
i__34797_35294 = G__35299;
continue;
} else {
var temp__5735__auto___35300 = cljs.core.seq(seq__34794_35291);
if(temp__5735__auto___35300){
var seq__34794_35301__$1 = temp__5735__auto___35300;
if(cljs.core.chunked_seq_QMARK_(seq__34794_35301__$1)){
var c__4609__auto___35302 = cljs.core.chunk_first(seq__34794_35301__$1);
var G__35303 = cljs.core.chunk_rest(seq__34794_35301__$1);
var G__35304 = c__4609__auto___35302;
var G__35305 = cljs.core.count(c__4609__auto___35302);
var G__35306 = (0);
seq__34794_35291 = G__35303;
chunk__34795_35292 = G__35304;
count__34796_35293 = G__35305;
i__34797_35294 = G__35306;
continue;
} else {
var c_35307 = cljs.core.first(seq__34794_35301__$1);
class_list_35290.add(c_35307);


var G__35308 = cljs.core.next(seq__34794_35301__$1);
var G__35309 = null;
var G__35310 = (0);
var G__35311 = (0);
seq__34794_35291 = G__35308;
chunk__34795_35292 = G__35309;
count__34796_35293 = G__35310;
i__34797_35294 = G__35311;
continue;
}
} else {
}
}
break;
}
} else {
var seq__34798_35312 = cljs.core.seq(classes__$1);
var chunk__34799_35313 = null;
var count__34800_35314 = (0);
var i__34801_35315 = (0);
while(true){
if((i__34801_35315 < count__34800_35314)){
var c_35316 = chunk__34799_35313.cljs$core$IIndexed$_nth$arity$2(null,i__34801_35315);
var class_name_35317 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35317,c_35316))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35317 === ""))?c_35316:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35317)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35316)].join('')));
}


var G__35318 = seq__34798_35312;
var G__35319 = chunk__34799_35313;
var G__35320 = count__34800_35314;
var G__35321 = (i__34801_35315 + (1));
seq__34798_35312 = G__35318;
chunk__34799_35313 = G__35319;
count__34800_35314 = G__35320;
i__34801_35315 = G__35321;
continue;
} else {
var temp__5735__auto___35322 = cljs.core.seq(seq__34798_35312);
if(temp__5735__auto___35322){
var seq__34798_35323__$1 = temp__5735__auto___35322;
if(cljs.core.chunked_seq_QMARK_(seq__34798_35323__$1)){
var c__4609__auto___35324 = cljs.core.chunk_first(seq__34798_35323__$1);
var G__35325 = cljs.core.chunk_rest(seq__34798_35323__$1);
var G__35326 = c__4609__auto___35324;
var G__35327 = cljs.core.count(c__4609__auto___35324);
var G__35328 = (0);
seq__34798_35312 = G__35325;
chunk__34799_35313 = G__35326;
count__34800_35314 = G__35327;
i__34801_35315 = G__35328;
continue;
} else {
var c_35329 = cljs.core.first(seq__34798_35323__$1);
var class_name_35330 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35330,c_35329))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35330 === ""))?c_35329:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35330)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35329)].join('')));
}


var G__35331 = cljs.core.next(seq__34798_35323__$1);
var G__35332 = null;
var G__35333 = (0);
var G__35334 = (0);
seq__34798_35312 = G__35331;
chunk__34799_35313 = G__35332;
count__34800_35314 = G__35333;
i__34801_35315 = G__35334;
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
var seq__34802_35335 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__34803_35336 = null;
var count__34804_35337 = (0);
var i__34805_35338 = (0);
while(true){
if((i__34805_35338 < count__34804_35337)){
var c_35339 = chunk__34803_35336.cljs$core$IIndexed$_nth$arity$2(null,i__34805_35338);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35339);


var G__35340 = seq__34802_35335;
var G__35341 = chunk__34803_35336;
var G__35342 = count__34804_35337;
var G__35343 = (i__34805_35338 + (1));
seq__34802_35335 = G__35340;
chunk__34803_35336 = G__35341;
count__34804_35337 = G__35342;
i__34805_35338 = G__35343;
continue;
} else {
var temp__5735__auto___35344 = cljs.core.seq(seq__34802_35335);
if(temp__5735__auto___35344){
var seq__34802_35345__$1 = temp__5735__auto___35344;
if(cljs.core.chunked_seq_QMARK_(seq__34802_35345__$1)){
var c__4609__auto___35346 = cljs.core.chunk_first(seq__34802_35345__$1);
var G__35347 = cljs.core.chunk_rest(seq__34802_35345__$1);
var G__35348 = c__4609__auto___35346;
var G__35349 = cljs.core.count(c__4609__auto___35346);
var G__35350 = (0);
seq__34802_35335 = G__35347;
chunk__34803_35336 = G__35348;
count__34804_35337 = G__35349;
i__34805_35338 = G__35350;
continue;
} else {
var c_35352 = cljs.core.first(seq__34802_35345__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35352);


var G__35354 = cljs.core.next(seq__34802_35345__$1);
var G__35355 = null;
var G__35356 = (0);
var G__35357 = (0);
seq__34802_35335 = G__35354;
chunk__34803_35336 = G__35355;
count__34804_35337 = G__35356;
i__34805_35338 = G__35357;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq34790){
var G__34791 = cljs.core.first(seq34790);
var seq34790__$1 = cljs.core.next(seq34790);
var G__34792 = cljs.core.first(seq34790__$1);
var seq34790__$2 = cljs.core.next(seq34790__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34791,G__34792,seq34790__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__34810 = arguments.length;
switch (G__34810) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35359 = arguments.length;
var i__4790__auto___35360 = (0);
while(true){
if((i__4790__auto___35360 < len__4789__auto___35359)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35360]));

var G__35361 = (i__4790__auto___35360 + (1));
i__4790__auto___35360 = G__35361;
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
var temp__5733__auto___35362 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35362)){
var class_list_35363 = temp__5733__auto___35362;
class_list_35363.remove(c__$1);
} else {
var class_name_35364 = dommy.core.class$(elem);
var new_class_name_35365 = dommy.utils.remove_class_str(class_name_35364,c__$1);
if((class_name_35364 === new_class_name_35365)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_35365);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__34811 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__34812 = null;
var count__34813 = (0);
var i__34814 = (0);
while(true){
if((i__34814 < count__34813)){
var c = chunk__34812.cljs$core$IIndexed$_nth$arity$2(null,i__34814);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35366 = seq__34811;
var G__35367 = chunk__34812;
var G__35368 = count__34813;
var G__35369 = (i__34814 + (1));
seq__34811 = G__35366;
chunk__34812 = G__35367;
count__34813 = G__35368;
i__34814 = G__35369;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34811);
if(temp__5735__auto__){
var seq__34811__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34811__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34811__$1);
var G__35370 = cljs.core.chunk_rest(seq__34811__$1);
var G__35371 = c__4609__auto__;
var G__35372 = cljs.core.count(c__4609__auto__);
var G__35373 = (0);
seq__34811 = G__35370;
chunk__34812 = G__35371;
count__34813 = G__35372;
i__34814 = G__35373;
continue;
} else {
var c = cljs.core.first(seq__34811__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35374 = cljs.core.next(seq__34811__$1);
var G__35375 = null;
var G__35376 = (0);
var G__35377 = (0);
seq__34811 = G__35374;
chunk__34812 = G__35375;
count__34813 = G__35376;
i__34814 = G__35377;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq34807){
var G__34808 = cljs.core.first(seq34807);
var seq34807__$1 = cljs.core.next(seq34807);
var G__34809 = cljs.core.first(seq34807__$1);
var seq34807__$2 = cljs.core.next(seq34807__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34808,G__34809,seq34807__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__34816 = arguments.length;
switch (G__34816) {
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
var temp__5733__auto___35381 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35381)){
var class_list_35382 = temp__5733__auto___35381;
class_list_35382.toggle(c__$1);
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
var G__34818 = arguments.length;
switch (G__34818) {
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
var G__34820 = arguments.length;
switch (G__34820) {
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
var G__34826 = arguments.length;
switch (G__34826) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35388 = arguments.length;
var i__4790__auto___35389 = (0);
while(true){
if((i__4790__auto___35389 < len__4789__auto___35388)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35389]));

var G__35390 = (i__4790__auto___35389 + (1));
i__4790__auto___35389 = G__35390;
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
var G__34827 = parent;
G__34827.appendChild(child);

return G__34827;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__34830_35391 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34831_35392 = null;
var count__34832_35393 = (0);
var i__34833_35394 = (0);
while(true){
if((i__34833_35394 < count__34832_35393)){
var c_35395 = chunk__34831_35392.cljs$core$IIndexed$_nth$arity$2(null,i__34833_35394);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35395);


var G__35396 = seq__34830_35391;
var G__35397 = chunk__34831_35392;
var G__35398 = count__34832_35393;
var G__35399 = (i__34833_35394 + (1));
seq__34830_35391 = G__35396;
chunk__34831_35392 = G__35397;
count__34832_35393 = G__35398;
i__34833_35394 = G__35399;
continue;
} else {
var temp__5735__auto___35400 = cljs.core.seq(seq__34830_35391);
if(temp__5735__auto___35400){
var seq__34830_35401__$1 = temp__5735__auto___35400;
if(cljs.core.chunked_seq_QMARK_(seq__34830_35401__$1)){
var c__4609__auto___35402 = cljs.core.chunk_first(seq__34830_35401__$1);
var G__35403 = cljs.core.chunk_rest(seq__34830_35401__$1);
var G__35404 = c__4609__auto___35402;
var G__35405 = cljs.core.count(c__4609__auto___35402);
var G__35406 = (0);
seq__34830_35391 = G__35403;
chunk__34831_35392 = G__35404;
count__34832_35393 = G__35405;
i__34833_35394 = G__35406;
continue;
} else {
var c_35407 = cljs.core.first(seq__34830_35401__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35407);


var G__35408 = cljs.core.next(seq__34830_35401__$1);
var G__35409 = null;
var G__35410 = (0);
var G__35411 = (0);
seq__34830_35391 = G__35408;
chunk__34831_35392 = G__35409;
count__34832_35393 = G__35410;
i__34833_35394 = G__35411;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq34823){
var G__34824 = cljs.core.first(seq34823);
var seq34823__$1 = cljs.core.next(seq34823);
var G__34825 = cljs.core.first(seq34823__$1);
var seq34823__$2 = cljs.core.next(seq34823__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34824,G__34825,seq34823__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__34838 = arguments.length;
switch (G__34838) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35413 = arguments.length;
var i__4790__auto___35414 = (0);
while(true){
if((i__4790__auto___35414 < len__4789__auto___35413)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35414]));

var G__35415 = (i__4790__auto___35414 + (1));
i__4790__auto___35414 = G__35415;
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
var G__34839 = parent;
G__34839.insertBefore(child,parent.firstChild);

return G__34839;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__34840_35416 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34841_35417 = null;
var count__34842_35418 = (0);
var i__34843_35419 = (0);
while(true){
if((i__34843_35419 < count__34842_35418)){
var c_35420 = chunk__34841_35417.cljs$core$IIndexed$_nth$arity$2(null,i__34843_35419);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35420);


var G__35421 = seq__34840_35416;
var G__35422 = chunk__34841_35417;
var G__35423 = count__34842_35418;
var G__35424 = (i__34843_35419 + (1));
seq__34840_35416 = G__35421;
chunk__34841_35417 = G__35422;
count__34842_35418 = G__35423;
i__34843_35419 = G__35424;
continue;
} else {
var temp__5735__auto___35425 = cljs.core.seq(seq__34840_35416);
if(temp__5735__auto___35425){
var seq__34840_35426__$1 = temp__5735__auto___35425;
if(cljs.core.chunked_seq_QMARK_(seq__34840_35426__$1)){
var c__4609__auto___35427 = cljs.core.chunk_first(seq__34840_35426__$1);
var G__35428 = cljs.core.chunk_rest(seq__34840_35426__$1);
var G__35429 = c__4609__auto___35427;
var G__35430 = cljs.core.count(c__4609__auto___35427);
var G__35431 = (0);
seq__34840_35416 = G__35428;
chunk__34841_35417 = G__35429;
count__34842_35418 = G__35430;
i__34843_35419 = G__35431;
continue;
} else {
var c_35432 = cljs.core.first(seq__34840_35426__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35432);


var G__35433 = cljs.core.next(seq__34840_35426__$1);
var G__35434 = null;
var G__35435 = (0);
var G__35436 = (0);
seq__34840_35416 = G__35433;
chunk__34841_35417 = G__35434;
count__34842_35418 = G__35435;
i__34843_35419 = G__35436;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq34835){
var G__34836 = cljs.core.first(seq34835);
var seq34835__$1 = cljs.core.next(seq34835);
var G__34837 = cljs.core.first(seq34835__$1);
var seq34835__$2 = cljs.core.next(seq34835__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34836,G__34837,seq34835__$2);
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
var temp__5733__auto___35437 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___35437)){
var next_35438 = temp__5733__auto___35437;
dommy.core.insert_before_BANG_(elem,next_35438);
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
var G__34845 = arguments.length;
switch (G__34845) {
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
var G__34846 = p;
G__34846.removeChild(elem);

return G__34846;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34847){
var vec__34848 = p__34847;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34848,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34848,(1),null);
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
var len__4789__auto___35440 = arguments.length;
var i__4790__auto___35441 = (0);
while(true){
if((i__4790__auto___35441 < len__4789__auto___35440)){
args__4795__auto__.push((arguments[i__4790__auto___35441]));

var G__35442 = (i__4790__auto___35441 + (1));
i__4790__auto___35441 = G__35442;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq34851){
var G__34852 = cljs.core.first(seq34851);
var seq34851__$1 = cljs.core.next(seq34851);
var G__34853 = cljs.core.first(seq34851__$1);
var seq34851__$2 = cljs.core.next(seq34851__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34852,G__34853,seq34851__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__34854 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__34854.cljs$core$IFn$_invoke$arity$1 ? fexpr__34854.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__34854.call(null,elem_sel));
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
var len__4789__auto___35443 = arguments.length;
var i__4790__auto___35444 = (0);
while(true){
if((i__4790__auto___35444 < len__4789__auto___35443)){
args__4795__auto__.push((arguments[i__4790__auto___35444]));

var G__35445 = (i__4790__auto___35444 + (1));
i__4790__auto___35444 = G__35445;
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

var vec__34857_35446 = dommy.core.elem_and_selector(elem_sel);
var elem_35447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34857_35446,(0),null);
var selector_35448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34857_35446,(1),null);
var seq__34860_35449 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__34867_35450 = null;
var count__34868_35451 = (0);
var i__34869_35452 = (0);
while(true){
if((i__34869_35452 < count__34868_35451)){
var vec__34925_35453 = chunk__34867_35450.cljs$core$IIndexed$_nth$arity$2(null,i__34869_35452);
var orig_type_35454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34925_35453,(0),null);
var f_35455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34925_35453,(1),null);
var seq__34870_35456 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35454,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35454,cljs.core.identity])));
var chunk__34872_35457 = null;
var count__34873_35458 = (0);
var i__34874_35459 = (0);
while(true){
if((i__34874_35459 < count__34873_35458)){
var vec__34938_35461 = chunk__34872_35457.cljs$core$IIndexed$_nth$arity$2(null,i__34874_35459);
var actual_type_35462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34938_35461,(0),null);
var factory_35463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34938_35461,(1),null);
var canonical_f_35464 = (function (){var G__34942 = (factory_35463.cljs$core$IFn$_invoke$arity$1 ? factory_35463.cljs$core$IFn$_invoke$arity$1(f_35455) : factory_35463.call(null,f_35455));
var fexpr__34941 = (cljs.core.truth_(selector_35448)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35447,selector_35448):cljs.core.identity);
return (fexpr__34941.cljs$core$IFn$_invoke$arity$1 ? fexpr__34941.cljs$core$IFn$_invoke$arity$1(G__34942) : fexpr__34941.call(null,G__34942));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35447,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35448,actual_type_35462,f_35455], null),canonical_f_35464], 0));

if(cljs.core.truth_(elem_35447.addEventListener)){
elem_35447.addEventListener(cljs.core.name(actual_type_35462),canonical_f_35464);
} else {
elem_35447.attachEvent(cljs.core.name(actual_type_35462),canonical_f_35464);
}


var G__35466 = seq__34870_35456;
var G__35467 = chunk__34872_35457;
var G__35468 = count__34873_35458;
var G__35469 = (i__34874_35459 + (1));
seq__34870_35456 = G__35466;
chunk__34872_35457 = G__35467;
count__34873_35458 = G__35468;
i__34874_35459 = G__35469;
continue;
} else {
var temp__5735__auto___35470 = cljs.core.seq(seq__34870_35456);
if(temp__5735__auto___35470){
var seq__34870_35471__$1 = temp__5735__auto___35470;
if(cljs.core.chunked_seq_QMARK_(seq__34870_35471__$1)){
var c__4609__auto___35472 = cljs.core.chunk_first(seq__34870_35471__$1);
var G__35473 = cljs.core.chunk_rest(seq__34870_35471__$1);
var G__35474 = c__4609__auto___35472;
var G__35475 = cljs.core.count(c__4609__auto___35472);
var G__35476 = (0);
seq__34870_35456 = G__35473;
chunk__34872_35457 = G__35474;
count__34873_35458 = G__35475;
i__34874_35459 = G__35476;
continue;
} else {
var vec__34946_35477 = cljs.core.first(seq__34870_35471__$1);
var actual_type_35478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34946_35477,(0),null);
var factory_35479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34946_35477,(1),null);
var canonical_f_35480 = (function (){var G__34950 = (factory_35479.cljs$core$IFn$_invoke$arity$1 ? factory_35479.cljs$core$IFn$_invoke$arity$1(f_35455) : factory_35479.call(null,f_35455));
var fexpr__34949 = (cljs.core.truth_(selector_35448)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35447,selector_35448):cljs.core.identity);
return (fexpr__34949.cljs$core$IFn$_invoke$arity$1 ? fexpr__34949.cljs$core$IFn$_invoke$arity$1(G__34950) : fexpr__34949.call(null,G__34950));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35447,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35448,actual_type_35478,f_35455], null),canonical_f_35480], 0));

if(cljs.core.truth_(elem_35447.addEventListener)){
elem_35447.addEventListener(cljs.core.name(actual_type_35478),canonical_f_35480);
} else {
elem_35447.attachEvent(cljs.core.name(actual_type_35478),canonical_f_35480);
}


var G__35483 = cljs.core.next(seq__34870_35471__$1);
var G__35484 = null;
var G__35485 = (0);
var G__35486 = (0);
seq__34870_35456 = G__35483;
chunk__34872_35457 = G__35484;
count__34873_35458 = G__35485;
i__34874_35459 = G__35486;
continue;
}
} else {
}
}
break;
}

var G__35488 = seq__34860_35449;
var G__35489 = chunk__34867_35450;
var G__35490 = count__34868_35451;
var G__35491 = (i__34869_35452 + (1));
seq__34860_35449 = G__35488;
chunk__34867_35450 = G__35489;
count__34868_35451 = G__35490;
i__34869_35452 = G__35491;
continue;
} else {
var temp__5735__auto___35493 = cljs.core.seq(seq__34860_35449);
if(temp__5735__auto___35493){
var seq__34860_35494__$1 = temp__5735__auto___35493;
if(cljs.core.chunked_seq_QMARK_(seq__34860_35494__$1)){
var c__4609__auto___35495 = cljs.core.chunk_first(seq__34860_35494__$1);
var G__35496 = cljs.core.chunk_rest(seq__34860_35494__$1);
var G__35497 = c__4609__auto___35495;
var G__35498 = cljs.core.count(c__4609__auto___35495);
var G__35499 = (0);
seq__34860_35449 = G__35496;
chunk__34867_35450 = G__35497;
count__34868_35451 = G__35498;
i__34869_35452 = G__35499;
continue;
} else {
var vec__34951_35500 = cljs.core.first(seq__34860_35494__$1);
var orig_type_35501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34951_35500,(0),null);
var f_35502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34951_35500,(1),null);
var seq__34861_35503 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35501,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35501,cljs.core.identity])));
var chunk__34863_35504 = null;
var count__34864_35505 = (0);
var i__34865_35506 = (0);
while(true){
if((i__34865_35506 < count__34864_35505)){
var vec__34964_35507 = chunk__34863_35504.cljs$core$IIndexed$_nth$arity$2(null,i__34865_35506);
var actual_type_35508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34964_35507,(0),null);
var factory_35509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34964_35507,(1),null);
var canonical_f_35515 = (function (){var G__34968 = (factory_35509.cljs$core$IFn$_invoke$arity$1 ? factory_35509.cljs$core$IFn$_invoke$arity$1(f_35502) : factory_35509.call(null,f_35502));
var fexpr__34967 = (cljs.core.truth_(selector_35448)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35447,selector_35448):cljs.core.identity);
return (fexpr__34967.cljs$core$IFn$_invoke$arity$1 ? fexpr__34967.cljs$core$IFn$_invoke$arity$1(G__34968) : fexpr__34967.call(null,G__34968));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35447,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35448,actual_type_35508,f_35502], null),canonical_f_35515], 0));

if(cljs.core.truth_(elem_35447.addEventListener)){
elem_35447.addEventListener(cljs.core.name(actual_type_35508),canonical_f_35515);
} else {
elem_35447.attachEvent(cljs.core.name(actual_type_35508),canonical_f_35515);
}


var G__35516 = seq__34861_35503;
var G__35517 = chunk__34863_35504;
var G__35518 = count__34864_35505;
var G__35519 = (i__34865_35506 + (1));
seq__34861_35503 = G__35516;
chunk__34863_35504 = G__35517;
count__34864_35505 = G__35518;
i__34865_35506 = G__35519;
continue;
} else {
var temp__5735__auto___35521__$1 = cljs.core.seq(seq__34861_35503);
if(temp__5735__auto___35521__$1){
var seq__34861_35522__$1 = temp__5735__auto___35521__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34861_35522__$1)){
var c__4609__auto___35524 = cljs.core.chunk_first(seq__34861_35522__$1);
var G__35525 = cljs.core.chunk_rest(seq__34861_35522__$1);
var G__35526 = c__4609__auto___35524;
var G__35527 = cljs.core.count(c__4609__auto___35524);
var G__35528 = (0);
seq__34861_35503 = G__35525;
chunk__34863_35504 = G__35526;
count__34864_35505 = G__35527;
i__34865_35506 = G__35528;
continue;
} else {
var vec__34969_35529 = cljs.core.first(seq__34861_35522__$1);
var actual_type_35530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34969_35529,(0),null);
var factory_35531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34969_35529,(1),null);
var canonical_f_35532 = (function (){var G__34973 = (factory_35531.cljs$core$IFn$_invoke$arity$1 ? factory_35531.cljs$core$IFn$_invoke$arity$1(f_35502) : factory_35531.call(null,f_35502));
var fexpr__34972 = (cljs.core.truth_(selector_35448)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35447,selector_35448):cljs.core.identity);
return (fexpr__34972.cljs$core$IFn$_invoke$arity$1 ? fexpr__34972.cljs$core$IFn$_invoke$arity$1(G__34973) : fexpr__34972.call(null,G__34973));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35447,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35448,actual_type_35530,f_35502], null),canonical_f_35532], 0));

if(cljs.core.truth_(elem_35447.addEventListener)){
elem_35447.addEventListener(cljs.core.name(actual_type_35530),canonical_f_35532);
} else {
elem_35447.attachEvent(cljs.core.name(actual_type_35530),canonical_f_35532);
}


var G__35535 = cljs.core.next(seq__34861_35522__$1);
var G__35536 = null;
var G__35537 = (0);
var G__35538 = (0);
seq__34861_35503 = G__35535;
chunk__34863_35504 = G__35536;
count__34864_35505 = G__35537;
i__34865_35506 = G__35538;
continue;
}
} else {
}
}
break;
}

var G__35540 = cljs.core.next(seq__34860_35494__$1);
var G__35541 = null;
var G__35542 = (0);
var G__35543 = (0);
seq__34860_35449 = G__35540;
chunk__34867_35450 = G__35541;
count__34868_35451 = G__35542;
i__34869_35452 = G__35543;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq34855){
var G__34856 = cljs.core.first(seq34855);
var seq34855__$1 = cljs.core.next(seq34855);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34856,seq34855__$1);
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
var len__4789__auto___35545 = arguments.length;
var i__4790__auto___35546 = (0);
while(true){
if((i__4790__auto___35546 < len__4789__auto___35545)){
args__4795__auto__.push((arguments[i__4790__auto___35546]));

var G__35547 = (i__4790__auto___35546 + (1));
i__4790__auto___35546 = G__35547;
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

var vec__34976_35553 = dommy.core.elem_and_selector(elem_sel);
var elem_35554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34976_35553,(0),null);
var selector_35555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34976_35553,(1),null);
var seq__34979_35556 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__34986_35557 = null;
var count__34987_35558 = (0);
var i__34988_35559 = (0);
while(true){
if((i__34988_35559 < count__34987_35558)){
var vec__35036_35561 = chunk__34986_35557.cljs$core$IIndexed$_nth$arity$2(null,i__34988_35559);
var orig_type_35562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35036_35561,(0),null);
var f_35563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35036_35561,(1),null);
var seq__34989_35568 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35562,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35562,cljs.core.identity])));
var chunk__34991_35569 = null;
var count__34992_35570 = (0);
var i__34993_35571 = (0);
while(true){
if((i__34993_35571 < count__34992_35570)){
var vec__35045_35572 = chunk__34991_35569.cljs$core$IIndexed$_nth$arity$2(null,i__34993_35571);
var actual_type_35573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35045_35572,(0),null);
var __35574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35045_35572,(1),null);
var keys_35575 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35555,actual_type_35573,f_35563], null);
var canonical_f_35576 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35554),keys_35575);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35554,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35575], 0));

if(cljs.core.truth_(elem_35554.removeEventListener)){
elem_35554.removeEventListener(cljs.core.name(actual_type_35573),canonical_f_35576);
} else {
elem_35554.detachEvent(cljs.core.name(actual_type_35573),canonical_f_35576);
}


var G__35577 = seq__34989_35568;
var G__35578 = chunk__34991_35569;
var G__35579 = count__34992_35570;
var G__35580 = (i__34993_35571 + (1));
seq__34989_35568 = G__35577;
chunk__34991_35569 = G__35578;
count__34992_35570 = G__35579;
i__34993_35571 = G__35580;
continue;
} else {
var temp__5735__auto___35581 = cljs.core.seq(seq__34989_35568);
if(temp__5735__auto___35581){
var seq__34989_35582__$1 = temp__5735__auto___35581;
if(cljs.core.chunked_seq_QMARK_(seq__34989_35582__$1)){
var c__4609__auto___35583 = cljs.core.chunk_first(seq__34989_35582__$1);
var G__35584 = cljs.core.chunk_rest(seq__34989_35582__$1);
var G__35585 = c__4609__auto___35583;
var G__35586 = cljs.core.count(c__4609__auto___35583);
var G__35587 = (0);
seq__34989_35568 = G__35584;
chunk__34991_35569 = G__35585;
count__34992_35570 = G__35586;
i__34993_35571 = G__35587;
continue;
} else {
var vec__35048_35588 = cljs.core.first(seq__34989_35582__$1);
var actual_type_35589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35048_35588,(0),null);
var __35590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35048_35588,(1),null);
var keys_35591 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35555,actual_type_35589,f_35563], null);
var canonical_f_35592 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35554),keys_35591);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35554,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35591], 0));

if(cljs.core.truth_(elem_35554.removeEventListener)){
elem_35554.removeEventListener(cljs.core.name(actual_type_35589),canonical_f_35592);
} else {
elem_35554.detachEvent(cljs.core.name(actual_type_35589),canonical_f_35592);
}


var G__35593 = cljs.core.next(seq__34989_35582__$1);
var G__35594 = null;
var G__35595 = (0);
var G__35596 = (0);
seq__34989_35568 = G__35593;
chunk__34991_35569 = G__35594;
count__34992_35570 = G__35595;
i__34993_35571 = G__35596;
continue;
}
} else {
}
}
break;
}

var G__35597 = seq__34979_35556;
var G__35598 = chunk__34986_35557;
var G__35599 = count__34987_35558;
var G__35600 = (i__34988_35559 + (1));
seq__34979_35556 = G__35597;
chunk__34986_35557 = G__35598;
count__34987_35558 = G__35599;
i__34988_35559 = G__35600;
continue;
} else {
var temp__5735__auto___35601 = cljs.core.seq(seq__34979_35556);
if(temp__5735__auto___35601){
var seq__34979_35602__$1 = temp__5735__auto___35601;
if(cljs.core.chunked_seq_QMARK_(seq__34979_35602__$1)){
var c__4609__auto___35603 = cljs.core.chunk_first(seq__34979_35602__$1);
var G__35604 = cljs.core.chunk_rest(seq__34979_35602__$1);
var G__35605 = c__4609__auto___35603;
var G__35606 = cljs.core.count(c__4609__auto___35603);
var G__35607 = (0);
seq__34979_35556 = G__35604;
chunk__34986_35557 = G__35605;
count__34987_35558 = G__35606;
i__34988_35559 = G__35607;
continue;
} else {
var vec__35051_35608 = cljs.core.first(seq__34979_35602__$1);
var orig_type_35609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35051_35608,(0),null);
var f_35610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35051_35608,(1),null);
var seq__34980_35611 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35609,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35609,cljs.core.identity])));
var chunk__34982_35612 = null;
var count__34983_35613 = (0);
var i__34984_35614 = (0);
while(true){
if((i__34984_35614 < count__34983_35613)){
var vec__35063_35615 = chunk__34982_35612.cljs$core$IIndexed$_nth$arity$2(null,i__34984_35614);
var actual_type_35616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35063_35615,(0),null);
var __35617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35063_35615,(1),null);
var keys_35618 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35555,actual_type_35616,f_35610], null);
var canonical_f_35619 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35554),keys_35618);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35554,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35618], 0));

if(cljs.core.truth_(elem_35554.removeEventListener)){
elem_35554.removeEventListener(cljs.core.name(actual_type_35616),canonical_f_35619);
} else {
elem_35554.detachEvent(cljs.core.name(actual_type_35616),canonical_f_35619);
}


var G__35620 = seq__34980_35611;
var G__35621 = chunk__34982_35612;
var G__35622 = count__34983_35613;
var G__35623 = (i__34984_35614 + (1));
seq__34980_35611 = G__35620;
chunk__34982_35612 = G__35621;
count__34983_35613 = G__35622;
i__34984_35614 = G__35623;
continue;
} else {
var temp__5735__auto___35624__$1 = cljs.core.seq(seq__34980_35611);
if(temp__5735__auto___35624__$1){
var seq__34980_35625__$1 = temp__5735__auto___35624__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34980_35625__$1)){
var c__4609__auto___35626 = cljs.core.chunk_first(seq__34980_35625__$1);
var G__35627 = cljs.core.chunk_rest(seq__34980_35625__$1);
var G__35628 = c__4609__auto___35626;
var G__35629 = cljs.core.count(c__4609__auto___35626);
var G__35630 = (0);
seq__34980_35611 = G__35627;
chunk__34982_35612 = G__35628;
count__34983_35613 = G__35629;
i__34984_35614 = G__35630;
continue;
} else {
var vec__35068_35631 = cljs.core.first(seq__34980_35625__$1);
var actual_type_35632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35068_35631,(0),null);
var __35633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35068_35631,(1),null);
var keys_35634 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35555,actual_type_35632,f_35610], null);
var canonical_f_35635 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35554),keys_35634);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35554,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35634], 0));

if(cljs.core.truth_(elem_35554.removeEventListener)){
elem_35554.removeEventListener(cljs.core.name(actual_type_35632),canonical_f_35635);
} else {
elem_35554.detachEvent(cljs.core.name(actual_type_35632),canonical_f_35635);
}


var G__35636 = cljs.core.next(seq__34980_35625__$1);
var G__35637 = null;
var G__35638 = (0);
var G__35639 = (0);
seq__34980_35611 = G__35636;
chunk__34982_35612 = G__35637;
count__34983_35613 = G__35638;
i__34984_35614 = G__35639;
continue;
}
} else {
}
}
break;
}

var G__35640 = cljs.core.next(seq__34979_35602__$1);
var G__35641 = null;
var G__35642 = (0);
var G__35643 = (0);
seq__34979_35556 = G__35640;
chunk__34986_35557 = G__35641;
count__34987_35558 = G__35642;
i__34988_35559 = G__35643;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq34974){
var G__34975 = cljs.core.first(seq34974);
var seq34974__$1 = cljs.core.next(seq34974);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34975,seq34974__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35644 = arguments.length;
var i__4790__auto___35645 = (0);
while(true){
if((i__4790__auto___35645 < len__4789__auto___35644)){
args__4795__auto__.push((arguments[i__4790__auto___35645]));

var G__35646 = (i__4790__auto___35645 + (1));
i__4790__auto___35645 = G__35646;
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

var vec__35073_35647 = dommy.core.elem_and_selector(elem_sel);
var elem_35648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35073_35647,(0),null);
var selector_35649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35073_35647,(1),null);
var seq__35076_35650 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35077_35651 = null;
var count__35078_35652 = (0);
var i__35079_35653 = (0);
while(true){
if((i__35079_35653 < count__35078_35652)){
var vec__35090_35654 = chunk__35077_35651.cljs$core$IIndexed$_nth$arity$2(null,i__35079_35653);
var type_35655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35090_35654,(0),null);
var f_35656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35090_35654,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35655,((function (seq__35076_35650,chunk__35077_35651,count__35078_35652,i__35079_35653,vec__35090_35654,type_35655,f_35656,vec__35073_35647,elem_35648,selector_35649){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35655,dommy$core$this_fn], 0));

return (f_35656.cljs$core$IFn$_invoke$arity$1 ? f_35656.cljs$core$IFn$_invoke$arity$1(e) : f_35656.call(null,e));
});})(seq__35076_35650,chunk__35077_35651,count__35078_35652,i__35079_35653,vec__35090_35654,type_35655,f_35656,vec__35073_35647,elem_35648,selector_35649))
], 0));


var G__35657 = seq__35076_35650;
var G__35658 = chunk__35077_35651;
var G__35659 = count__35078_35652;
var G__35660 = (i__35079_35653 + (1));
seq__35076_35650 = G__35657;
chunk__35077_35651 = G__35658;
count__35078_35652 = G__35659;
i__35079_35653 = G__35660;
continue;
} else {
var temp__5735__auto___35661 = cljs.core.seq(seq__35076_35650);
if(temp__5735__auto___35661){
var seq__35076_35662__$1 = temp__5735__auto___35661;
if(cljs.core.chunked_seq_QMARK_(seq__35076_35662__$1)){
var c__4609__auto___35663 = cljs.core.chunk_first(seq__35076_35662__$1);
var G__35664 = cljs.core.chunk_rest(seq__35076_35662__$1);
var G__35665 = c__4609__auto___35663;
var G__35666 = cljs.core.count(c__4609__auto___35663);
var G__35667 = (0);
seq__35076_35650 = G__35664;
chunk__35077_35651 = G__35665;
count__35078_35652 = G__35666;
i__35079_35653 = G__35667;
continue;
} else {
var vec__35095_35668 = cljs.core.first(seq__35076_35662__$1);
var type_35669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35095_35668,(0),null);
var f_35670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35095_35668,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35669,((function (seq__35076_35650,chunk__35077_35651,count__35078_35652,i__35079_35653,vec__35095_35668,type_35669,f_35670,seq__35076_35662__$1,temp__5735__auto___35661,vec__35073_35647,elem_35648,selector_35649){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35669,dommy$core$this_fn], 0));

return (f_35670.cljs$core$IFn$_invoke$arity$1 ? f_35670.cljs$core$IFn$_invoke$arity$1(e) : f_35670.call(null,e));
});})(seq__35076_35650,chunk__35077_35651,count__35078_35652,i__35079_35653,vec__35095_35668,type_35669,f_35670,seq__35076_35662__$1,temp__5735__auto___35661,vec__35073_35647,elem_35648,selector_35649))
], 0));


var G__35671 = cljs.core.next(seq__35076_35662__$1);
var G__35672 = null;
var G__35673 = (0);
var G__35674 = (0);
seq__35076_35650 = G__35671;
chunk__35077_35651 = G__35672;
count__35078_35652 = G__35673;
i__35079_35653 = G__35674;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq35071){
var G__35072 = cljs.core.first(seq35071);
var seq35071__$1 = cljs.core.next(seq35071);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35072,seq35071__$1);
}));


//# sourceMappingURL=dommy.core.js.map
