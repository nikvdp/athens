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
var G__34732 = arguments.length;
switch (G__34732) {
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
var G__34734 = arguments.length;
switch (G__34734) {
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
var G__34737 = arguments.length;
switch (G__34737) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__34735_SHARP_){
return (!((p1__34735_SHARP_ === base)));
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
var len__4789__auto___35179 = arguments.length;
var i__4790__auto___35180 = (0);
while(true){
if((i__4790__auto___35180 < len__4789__auto___35179)){
args__4795__auto__.push((arguments[i__4790__auto___35180]));

var G__35181 = (i__4790__auto___35180 + (1));
i__4790__auto___35180 = G__35181;
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
var seq__34742_35182 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34743_35183 = null;
var count__34744_35184 = (0);
var i__34745_35185 = (0);
while(true){
if((i__34745_35185 < count__34744_35184)){
var vec__34752_35186 = chunk__34743_35183.cljs$core$IIndexed$_nth$arity$2(null,i__34745_35185);
var k_35187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34752_35186,(0),null);
var v_35188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34752_35186,(1),null);
style.setProperty(dommy.utils.as_str(k_35187),v_35188);


var G__35189 = seq__34742_35182;
var G__35190 = chunk__34743_35183;
var G__35191 = count__34744_35184;
var G__35192 = (i__34745_35185 + (1));
seq__34742_35182 = G__35189;
chunk__34743_35183 = G__35190;
count__34744_35184 = G__35191;
i__34745_35185 = G__35192;
continue;
} else {
var temp__5735__auto___35193 = cljs.core.seq(seq__34742_35182);
if(temp__5735__auto___35193){
var seq__34742_35194__$1 = temp__5735__auto___35193;
if(cljs.core.chunked_seq_QMARK_(seq__34742_35194__$1)){
var c__4609__auto___35196 = cljs.core.chunk_first(seq__34742_35194__$1);
var G__35197 = cljs.core.chunk_rest(seq__34742_35194__$1);
var G__35198 = c__4609__auto___35196;
var G__35199 = cljs.core.count(c__4609__auto___35196);
var G__35200 = (0);
seq__34742_35182 = G__35197;
chunk__34743_35183 = G__35198;
count__34744_35184 = G__35199;
i__34745_35185 = G__35200;
continue;
} else {
var vec__34755_35202 = cljs.core.first(seq__34742_35194__$1);
var k_35203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34755_35202,(0),null);
var v_35204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34755_35202,(1),null);
style.setProperty(dommy.utils.as_str(k_35203),v_35204);


var G__35205 = cljs.core.next(seq__34742_35194__$1);
var G__35206 = null;
var G__35207 = (0);
var G__35208 = (0);
seq__34742_35182 = G__35205;
chunk__34743_35183 = G__35206;
count__34744_35184 = G__35207;
i__34745_35185 = G__35208;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq34740){
var G__34741 = cljs.core.first(seq34740);
var seq34740__$1 = cljs.core.next(seq34740);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34741,seq34740__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35209 = arguments.length;
var i__4790__auto___35210 = (0);
while(true){
if((i__4790__auto___35210 < len__4789__auto___35209)){
args__4795__auto__.push((arguments[i__4790__auto___35210]));

var G__35211 = (i__4790__auto___35210 + (1));
i__4790__auto___35210 = G__35211;
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
var seq__34760_35212 = cljs.core.seq(keywords);
var chunk__34761_35213 = null;
var count__34762_35214 = (0);
var i__34763_35215 = (0);
while(true){
if((i__34763_35215 < count__34762_35214)){
var kw_35216 = chunk__34761_35213.cljs$core$IIndexed$_nth$arity$2(null,i__34763_35215);
style.removeProperty(dommy.utils.as_str(kw_35216));


var G__35217 = seq__34760_35212;
var G__35218 = chunk__34761_35213;
var G__35219 = count__34762_35214;
var G__35220 = (i__34763_35215 + (1));
seq__34760_35212 = G__35217;
chunk__34761_35213 = G__35218;
count__34762_35214 = G__35219;
i__34763_35215 = G__35220;
continue;
} else {
var temp__5735__auto___35222 = cljs.core.seq(seq__34760_35212);
if(temp__5735__auto___35222){
var seq__34760_35223__$1 = temp__5735__auto___35222;
if(cljs.core.chunked_seq_QMARK_(seq__34760_35223__$1)){
var c__4609__auto___35225 = cljs.core.chunk_first(seq__34760_35223__$1);
var G__35226 = cljs.core.chunk_rest(seq__34760_35223__$1);
var G__35227 = c__4609__auto___35225;
var G__35228 = cljs.core.count(c__4609__auto___35225);
var G__35229 = (0);
seq__34760_35212 = G__35226;
chunk__34761_35213 = G__35227;
count__34762_35214 = G__35228;
i__34763_35215 = G__35229;
continue;
} else {
var kw_35230 = cljs.core.first(seq__34760_35223__$1);
style.removeProperty(dommy.utils.as_str(kw_35230));


var G__35231 = cljs.core.next(seq__34760_35223__$1);
var G__35232 = null;
var G__35233 = (0);
var G__35234 = (0);
seq__34760_35212 = G__35231;
chunk__34761_35213 = G__35232;
count__34762_35214 = G__35233;
i__34763_35215 = G__35234;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq34758){
var G__34759 = cljs.core.first(seq34758);
var seq34758__$1 = cljs.core.next(seq34758);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34759,seq34758__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35235 = arguments.length;
var i__4790__auto___35236 = (0);
while(true){
if((i__4790__auto___35236 < len__4789__auto___35235)){
args__4795__auto__.push((arguments[i__4790__auto___35236]));

var G__35237 = (i__4790__auto___35236 + (1));
i__4790__auto___35236 = G__35237;
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

var seq__34767_35240 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34768_35241 = null;
var count__34769_35242 = (0);
var i__34770_35243 = (0);
while(true){
if((i__34770_35243 < count__34769_35242)){
var vec__34777_35244 = chunk__34768_35241.cljs$core$IIndexed$_nth$arity$2(null,i__34770_35243);
var k_35245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34777_35244,(0),null);
var v_35246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34777_35244,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35245,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35246),"px"].join('')], 0));


var G__35247 = seq__34767_35240;
var G__35248 = chunk__34768_35241;
var G__35249 = count__34769_35242;
var G__35250 = (i__34770_35243 + (1));
seq__34767_35240 = G__35247;
chunk__34768_35241 = G__35248;
count__34769_35242 = G__35249;
i__34770_35243 = G__35250;
continue;
} else {
var temp__5735__auto___35251 = cljs.core.seq(seq__34767_35240);
if(temp__5735__auto___35251){
var seq__34767_35252__$1 = temp__5735__auto___35251;
if(cljs.core.chunked_seq_QMARK_(seq__34767_35252__$1)){
var c__4609__auto___35253 = cljs.core.chunk_first(seq__34767_35252__$1);
var G__35254 = cljs.core.chunk_rest(seq__34767_35252__$1);
var G__35255 = c__4609__auto___35253;
var G__35256 = cljs.core.count(c__4609__auto___35253);
var G__35257 = (0);
seq__34767_35240 = G__35254;
chunk__34768_35241 = G__35255;
count__34769_35242 = G__35256;
i__34770_35243 = G__35257;
continue;
} else {
var vec__34780_35258 = cljs.core.first(seq__34767_35252__$1);
var k_35259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34780_35258,(0),null);
var v_35260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34780_35258,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35259,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35260),"px"].join('')], 0));


var G__35261 = cljs.core.next(seq__34767_35252__$1);
var G__35262 = null;
var G__35263 = (0);
var G__35264 = (0);
seq__34767_35240 = G__35261;
chunk__34768_35241 = G__35262;
count__34769_35242 = G__35263;
i__34770_35243 = G__35264;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq34765){
var G__34766 = cljs.core.first(seq34765);
var seq34765__$1 = cljs.core.next(seq34765);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34766,seq34765__$1);
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
var G__34788 = arguments.length;
switch (G__34788) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35266 = arguments.length;
var i__4790__auto___35267 = (0);
while(true){
if((i__4790__auto___35267 < len__4789__auto___35266)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35267]));

var G__35268 = (i__4790__auto___35267 + (1));
i__4790__auto___35267 = G__35268;
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
var G__34789 = elem;
(G__34789[k__$1] = v);

return G__34789;
} else {
var G__34790 = elem;
G__34790.setAttribute(k__$1,v);

return G__34790;
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

var seq__34791_35269 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__34792_35270 = null;
var count__34793_35271 = (0);
var i__34794_35272 = (0);
while(true){
if((i__34794_35272 < count__34793_35271)){
var vec__34801_35273 = chunk__34792_35270.cljs$core$IIndexed$_nth$arity$2(null,i__34794_35272);
var k_35274__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34801_35273,(0),null);
var v_35275__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34801_35273,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35274__$1,v_35275__$1);


var G__35276 = seq__34791_35269;
var G__35277 = chunk__34792_35270;
var G__35278 = count__34793_35271;
var G__35279 = (i__34794_35272 + (1));
seq__34791_35269 = G__35276;
chunk__34792_35270 = G__35277;
count__34793_35271 = G__35278;
i__34794_35272 = G__35279;
continue;
} else {
var temp__5735__auto___35280 = cljs.core.seq(seq__34791_35269);
if(temp__5735__auto___35280){
var seq__34791_35281__$1 = temp__5735__auto___35280;
if(cljs.core.chunked_seq_QMARK_(seq__34791_35281__$1)){
var c__4609__auto___35282 = cljs.core.chunk_first(seq__34791_35281__$1);
var G__35283 = cljs.core.chunk_rest(seq__34791_35281__$1);
var G__35284 = c__4609__auto___35282;
var G__35285 = cljs.core.count(c__4609__auto___35282);
var G__35286 = (0);
seq__34791_35269 = G__35283;
chunk__34792_35270 = G__35284;
count__34793_35271 = G__35285;
i__34794_35272 = G__35286;
continue;
} else {
var vec__34804_35287 = cljs.core.first(seq__34791_35281__$1);
var k_35288__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34804_35287,(0),null);
var v_35289__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34804_35287,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35288__$1,v_35289__$1);


var G__35290 = cljs.core.next(seq__34791_35281__$1);
var G__35291 = null;
var G__35292 = (0);
var G__35293 = (0);
seq__34791_35269 = G__35290;
chunk__34792_35270 = G__35291;
count__34793_35271 = G__35292;
i__34794_35272 = G__35293;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq34784){
var G__34785 = cljs.core.first(seq34784);
var seq34784__$1 = cljs.core.next(seq34784);
var G__34786 = cljs.core.first(seq34784__$1);
var seq34784__$2 = cljs.core.next(seq34784__$1);
var G__34787 = cljs.core.first(seq34784__$2);
var seq34784__$3 = cljs.core.next(seq34784__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34785,G__34786,G__34787,seq34784__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__34811 = arguments.length;
switch (G__34811) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35295 = arguments.length;
var i__4790__auto___35296 = (0);
while(true){
if((i__4790__auto___35296 < len__4789__auto___35295)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35296]));

var G__35297 = (i__4790__auto___35296 + (1));
i__4790__auto___35296 = G__35297;
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
var k_35298__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__34812 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__34812.cljs$core$IFn$_invoke$arity$1 ? fexpr__34812.cljs$core$IFn$_invoke$arity$1(k_35298__$1) : fexpr__34812.call(null,k_35298__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_35298__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__34813_35299 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__34814_35300 = null;
var count__34815_35301 = (0);
var i__34816_35302 = (0);
while(true){
if((i__34816_35302 < count__34815_35301)){
var k_35303__$1 = chunk__34814_35300.cljs$core$IIndexed$_nth$arity$2(null,i__34816_35302);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35303__$1);


var G__35304 = seq__34813_35299;
var G__35305 = chunk__34814_35300;
var G__35306 = count__34815_35301;
var G__35307 = (i__34816_35302 + (1));
seq__34813_35299 = G__35304;
chunk__34814_35300 = G__35305;
count__34815_35301 = G__35306;
i__34816_35302 = G__35307;
continue;
} else {
var temp__5735__auto___35308 = cljs.core.seq(seq__34813_35299);
if(temp__5735__auto___35308){
var seq__34813_35309__$1 = temp__5735__auto___35308;
if(cljs.core.chunked_seq_QMARK_(seq__34813_35309__$1)){
var c__4609__auto___35310 = cljs.core.chunk_first(seq__34813_35309__$1);
var G__35311 = cljs.core.chunk_rest(seq__34813_35309__$1);
var G__35312 = c__4609__auto___35310;
var G__35313 = cljs.core.count(c__4609__auto___35310);
var G__35314 = (0);
seq__34813_35299 = G__35311;
chunk__34814_35300 = G__35312;
count__34815_35301 = G__35313;
i__34816_35302 = G__35314;
continue;
} else {
var k_35315__$1 = cljs.core.first(seq__34813_35309__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35315__$1);


var G__35316 = cljs.core.next(seq__34813_35309__$1);
var G__35317 = null;
var G__35318 = (0);
var G__35319 = (0);
seq__34813_35299 = G__35316;
chunk__34814_35300 = G__35317;
count__34815_35301 = G__35318;
i__34816_35302 = G__35319;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq34808){
var G__34809 = cljs.core.first(seq34808);
var seq34808__$1 = cljs.core.next(seq34808);
var G__34810 = cljs.core.first(seq34808__$1);
var seq34808__$2 = cljs.core.next(seq34808__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34809,G__34810,seq34808__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__34818 = arguments.length;
switch (G__34818) {
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
var G__34823 = arguments.length;
switch (G__34823) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35322 = arguments.length;
var i__4790__auto___35323 = (0);
while(true){
if((i__4790__auto___35323 < len__4789__auto___35322)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35323]));

var G__35324 = (i__4790__auto___35323 + (1));
i__4790__auto___35323 = G__35324;
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
var temp__5733__auto___35325 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35325)){
var class_list_35326 = temp__5733__auto___35325;
var seq__34824_35327 = cljs.core.seq(classes__$1);
var chunk__34825_35328 = null;
var count__34826_35329 = (0);
var i__34827_35330 = (0);
while(true){
if((i__34827_35330 < count__34826_35329)){
var c_35331 = chunk__34825_35328.cljs$core$IIndexed$_nth$arity$2(null,i__34827_35330);
class_list_35326.add(c_35331);


var G__35333 = seq__34824_35327;
var G__35334 = chunk__34825_35328;
var G__35335 = count__34826_35329;
var G__35336 = (i__34827_35330 + (1));
seq__34824_35327 = G__35333;
chunk__34825_35328 = G__35334;
count__34826_35329 = G__35335;
i__34827_35330 = G__35336;
continue;
} else {
var temp__5735__auto___35337 = cljs.core.seq(seq__34824_35327);
if(temp__5735__auto___35337){
var seq__34824_35338__$1 = temp__5735__auto___35337;
if(cljs.core.chunked_seq_QMARK_(seq__34824_35338__$1)){
var c__4609__auto___35339 = cljs.core.chunk_first(seq__34824_35338__$1);
var G__35341 = cljs.core.chunk_rest(seq__34824_35338__$1);
var G__35342 = c__4609__auto___35339;
var G__35343 = cljs.core.count(c__4609__auto___35339);
var G__35344 = (0);
seq__34824_35327 = G__35341;
chunk__34825_35328 = G__35342;
count__34826_35329 = G__35343;
i__34827_35330 = G__35344;
continue;
} else {
var c_35345 = cljs.core.first(seq__34824_35338__$1);
class_list_35326.add(c_35345);


var G__35346 = cljs.core.next(seq__34824_35338__$1);
var G__35347 = null;
var G__35348 = (0);
var G__35349 = (0);
seq__34824_35327 = G__35346;
chunk__34825_35328 = G__35347;
count__34826_35329 = G__35348;
i__34827_35330 = G__35349;
continue;
}
} else {
}
}
break;
}
} else {
var seq__34828_35350 = cljs.core.seq(classes__$1);
var chunk__34829_35351 = null;
var count__34830_35352 = (0);
var i__34831_35353 = (0);
while(true){
if((i__34831_35353 < count__34830_35352)){
var c_35354 = chunk__34829_35351.cljs$core$IIndexed$_nth$arity$2(null,i__34831_35353);
var class_name_35355 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35355,c_35354))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35355 === ""))?c_35354:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35355)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35354)].join('')));
}


var G__35356 = seq__34828_35350;
var G__35357 = chunk__34829_35351;
var G__35358 = count__34830_35352;
var G__35359 = (i__34831_35353 + (1));
seq__34828_35350 = G__35356;
chunk__34829_35351 = G__35357;
count__34830_35352 = G__35358;
i__34831_35353 = G__35359;
continue;
} else {
var temp__5735__auto___35361 = cljs.core.seq(seq__34828_35350);
if(temp__5735__auto___35361){
var seq__34828_35362__$1 = temp__5735__auto___35361;
if(cljs.core.chunked_seq_QMARK_(seq__34828_35362__$1)){
var c__4609__auto___35363 = cljs.core.chunk_first(seq__34828_35362__$1);
var G__35364 = cljs.core.chunk_rest(seq__34828_35362__$1);
var G__35365 = c__4609__auto___35363;
var G__35366 = cljs.core.count(c__4609__auto___35363);
var G__35367 = (0);
seq__34828_35350 = G__35364;
chunk__34829_35351 = G__35365;
count__34830_35352 = G__35366;
i__34831_35353 = G__35367;
continue;
} else {
var c_35368 = cljs.core.first(seq__34828_35362__$1);
var class_name_35370 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35370,c_35368))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35370 === ""))?c_35368:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35370)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35368)].join('')));
}


var G__35372 = cljs.core.next(seq__34828_35362__$1);
var G__35373 = null;
var G__35374 = (0);
var G__35375 = (0);
seq__34828_35350 = G__35372;
chunk__34829_35351 = G__35373;
count__34830_35352 = G__35374;
i__34831_35353 = G__35375;
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
var seq__34832_35377 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__34833_35378 = null;
var count__34834_35379 = (0);
var i__34835_35380 = (0);
while(true){
if((i__34835_35380 < count__34834_35379)){
var c_35381 = chunk__34833_35378.cljs$core$IIndexed$_nth$arity$2(null,i__34835_35380);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35381);


var G__35382 = seq__34832_35377;
var G__35383 = chunk__34833_35378;
var G__35384 = count__34834_35379;
var G__35385 = (i__34835_35380 + (1));
seq__34832_35377 = G__35382;
chunk__34833_35378 = G__35383;
count__34834_35379 = G__35384;
i__34835_35380 = G__35385;
continue;
} else {
var temp__5735__auto___35387 = cljs.core.seq(seq__34832_35377);
if(temp__5735__auto___35387){
var seq__34832_35388__$1 = temp__5735__auto___35387;
if(cljs.core.chunked_seq_QMARK_(seq__34832_35388__$1)){
var c__4609__auto___35393 = cljs.core.chunk_first(seq__34832_35388__$1);
var G__35394 = cljs.core.chunk_rest(seq__34832_35388__$1);
var G__35395 = c__4609__auto___35393;
var G__35396 = cljs.core.count(c__4609__auto___35393);
var G__35397 = (0);
seq__34832_35377 = G__35394;
chunk__34833_35378 = G__35395;
count__34834_35379 = G__35396;
i__34835_35380 = G__35397;
continue;
} else {
var c_35398 = cljs.core.first(seq__34832_35388__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35398);


var G__35399 = cljs.core.next(seq__34832_35388__$1);
var G__35400 = null;
var G__35401 = (0);
var G__35402 = (0);
seq__34832_35377 = G__35399;
chunk__34833_35378 = G__35400;
count__34834_35379 = G__35401;
i__34835_35380 = G__35402;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq34820){
var G__34821 = cljs.core.first(seq34820);
var seq34820__$1 = cljs.core.next(seq34820);
var G__34822 = cljs.core.first(seq34820__$1);
var seq34820__$2 = cljs.core.next(seq34820__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34821,G__34822,seq34820__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__34840 = arguments.length;
switch (G__34840) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35406 = arguments.length;
var i__4790__auto___35407 = (0);
while(true){
if((i__4790__auto___35407 < len__4789__auto___35406)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35407]));

var G__35408 = (i__4790__auto___35407 + (1));
i__4790__auto___35407 = G__35408;
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
var temp__5733__auto___35409 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35409)){
var class_list_35410 = temp__5733__auto___35409;
class_list_35410.remove(c__$1);
} else {
var class_name_35411 = dommy.core.class$(elem);
var new_class_name_35412 = dommy.utils.remove_class_str(class_name_35411,c__$1);
if((class_name_35411 === new_class_name_35412)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_35412);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__34841 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__34842 = null;
var count__34843 = (0);
var i__34844 = (0);
while(true){
if((i__34844 < count__34843)){
var c = chunk__34842.cljs$core$IIndexed$_nth$arity$2(null,i__34844);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35417 = seq__34841;
var G__35418 = chunk__34842;
var G__35419 = count__34843;
var G__35420 = (i__34844 + (1));
seq__34841 = G__35417;
chunk__34842 = G__35418;
count__34843 = G__35419;
i__34844 = G__35420;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34841);
if(temp__5735__auto__){
var seq__34841__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34841__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34841__$1);
var G__35421 = cljs.core.chunk_rest(seq__34841__$1);
var G__35422 = c__4609__auto__;
var G__35423 = cljs.core.count(c__4609__auto__);
var G__35424 = (0);
seq__34841 = G__35421;
chunk__34842 = G__35422;
count__34843 = G__35423;
i__34844 = G__35424;
continue;
} else {
var c = cljs.core.first(seq__34841__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35428 = cljs.core.next(seq__34841__$1);
var G__35429 = null;
var G__35430 = (0);
var G__35431 = (0);
seq__34841 = G__35428;
chunk__34842 = G__35429;
count__34843 = G__35430;
i__34844 = G__35431;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq34837){
var G__34838 = cljs.core.first(seq34837);
var seq34837__$1 = cljs.core.next(seq34837);
var G__34839 = cljs.core.first(seq34837__$1);
var seq34837__$2 = cljs.core.next(seq34837__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34838,G__34839,seq34837__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__34847 = arguments.length;
switch (G__34847) {
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
var temp__5733__auto___35440 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35440)){
var class_list_35441 = temp__5733__auto___35440;
class_list_35441.toggle(c__$1);
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
var G__34851 = arguments.length;
switch (G__34851) {
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
var G__34853 = arguments.length;
switch (G__34853) {
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
var G__34858 = arguments.length;
switch (G__34858) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35445 = arguments.length;
var i__4790__auto___35446 = (0);
while(true){
if((i__4790__auto___35446 < len__4789__auto___35445)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35446]));

var G__35447 = (i__4790__auto___35446 + (1));
i__4790__auto___35446 = G__35447;
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
var G__34859 = parent;
G__34859.appendChild(child);

return G__34859;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__34860_35448 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34861_35449 = null;
var count__34862_35450 = (0);
var i__34863_35451 = (0);
while(true){
if((i__34863_35451 < count__34862_35450)){
var c_35452 = chunk__34861_35449.cljs$core$IIndexed$_nth$arity$2(null,i__34863_35451);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35452);


var G__35453 = seq__34860_35448;
var G__35454 = chunk__34861_35449;
var G__35455 = count__34862_35450;
var G__35456 = (i__34863_35451 + (1));
seq__34860_35448 = G__35453;
chunk__34861_35449 = G__35454;
count__34862_35450 = G__35455;
i__34863_35451 = G__35456;
continue;
} else {
var temp__5735__auto___35457 = cljs.core.seq(seq__34860_35448);
if(temp__5735__auto___35457){
var seq__34860_35458__$1 = temp__5735__auto___35457;
if(cljs.core.chunked_seq_QMARK_(seq__34860_35458__$1)){
var c__4609__auto___35459 = cljs.core.chunk_first(seq__34860_35458__$1);
var G__35460 = cljs.core.chunk_rest(seq__34860_35458__$1);
var G__35461 = c__4609__auto___35459;
var G__35462 = cljs.core.count(c__4609__auto___35459);
var G__35463 = (0);
seq__34860_35448 = G__35460;
chunk__34861_35449 = G__35461;
count__34862_35450 = G__35462;
i__34863_35451 = G__35463;
continue;
} else {
var c_35464 = cljs.core.first(seq__34860_35458__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35464);


var G__35465 = cljs.core.next(seq__34860_35458__$1);
var G__35466 = null;
var G__35467 = (0);
var G__35468 = (0);
seq__34860_35448 = G__35465;
chunk__34861_35449 = G__35466;
count__34862_35450 = G__35467;
i__34863_35451 = G__35468;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq34855){
var G__34856 = cljs.core.first(seq34855);
var seq34855__$1 = cljs.core.next(seq34855);
var G__34857 = cljs.core.first(seq34855__$1);
var seq34855__$2 = cljs.core.next(seq34855__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34856,G__34857,seq34855__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__34868 = arguments.length;
switch (G__34868) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35470 = arguments.length;
var i__4790__auto___35471 = (0);
while(true){
if((i__4790__auto___35471 < len__4789__auto___35470)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35471]));

var G__35472 = (i__4790__auto___35471 + (1));
i__4790__auto___35471 = G__35472;
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
var G__34869 = parent;
G__34869.insertBefore(child,parent.firstChild);

return G__34869;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__34870_35473 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34871_35474 = null;
var count__34872_35475 = (0);
var i__34873_35476 = (0);
while(true){
if((i__34873_35476 < count__34872_35475)){
var c_35477 = chunk__34871_35474.cljs$core$IIndexed$_nth$arity$2(null,i__34873_35476);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35477);


var G__35478 = seq__34870_35473;
var G__35479 = chunk__34871_35474;
var G__35480 = count__34872_35475;
var G__35481 = (i__34873_35476 + (1));
seq__34870_35473 = G__35478;
chunk__34871_35474 = G__35479;
count__34872_35475 = G__35480;
i__34873_35476 = G__35481;
continue;
} else {
var temp__5735__auto___35482 = cljs.core.seq(seq__34870_35473);
if(temp__5735__auto___35482){
var seq__34870_35483__$1 = temp__5735__auto___35482;
if(cljs.core.chunked_seq_QMARK_(seq__34870_35483__$1)){
var c__4609__auto___35484 = cljs.core.chunk_first(seq__34870_35483__$1);
var G__35485 = cljs.core.chunk_rest(seq__34870_35483__$1);
var G__35486 = c__4609__auto___35484;
var G__35487 = cljs.core.count(c__4609__auto___35484);
var G__35488 = (0);
seq__34870_35473 = G__35485;
chunk__34871_35474 = G__35486;
count__34872_35475 = G__35487;
i__34873_35476 = G__35488;
continue;
} else {
var c_35489 = cljs.core.first(seq__34870_35483__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35489);


var G__35490 = cljs.core.next(seq__34870_35483__$1);
var G__35491 = null;
var G__35492 = (0);
var G__35493 = (0);
seq__34870_35473 = G__35490;
chunk__34871_35474 = G__35491;
count__34872_35475 = G__35492;
i__34873_35476 = G__35493;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq34865){
var G__34866 = cljs.core.first(seq34865);
var seq34865__$1 = cljs.core.next(seq34865);
var G__34867 = cljs.core.first(seq34865__$1);
var seq34865__$2 = cljs.core.next(seq34865__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34866,G__34867,seq34865__$2);
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
var temp__5733__auto___35494 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___35494)){
var next_35495 = temp__5733__auto___35494;
dommy.core.insert_before_BANG_(elem,next_35495);
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
var G__34875 = arguments.length;
switch (G__34875) {
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
var G__34876 = p;
G__34876.removeChild(elem);

return G__34876;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34877){
var vec__34878 = p__34877;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34878,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34878,(1),null);
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
var len__4789__auto___35497 = arguments.length;
var i__4790__auto___35498 = (0);
while(true){
if((i__4790__auto___35498 < len__4789__auto___35497)){
args__4795__auto__.push((arguments[i__4790__auto___35498]));

var G__35499 = (i__4790__auto___35498 + (1));
i__4790__auto___35498 = G__35499;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq34884){
var G__34885 = cljs.core.first(seq34884);
var seq34884__$1 = cljs.core.next(seq34884);
var G__34886 = cljs.core.first(seq34884__$1);
var seq34884__$2 = cljs.core.next(seq34884__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34885,G__34886,seq34884__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__34887 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__34887.cljs$core$IFn$_invoke$arity$1 ? fexpr__34887.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__34887.call(null,elem_sel));
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
var len__4789__auto___35500 = arguments.length;
var i__4790__auto___35501 = (0);
while(true){
if((i__4790__auto___35501 < len__4789__auto___35500)){
args__4795__auto__.push((arguments[i__4790__auto___35501]));

var G__35502 = (i__4790__auto___35501 + (1));
i__4790__auto___35501 = G__35502;
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

var vec__34890_35506 = dommy.core.elem_and_selector(elem_sel);
var elem_35507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34890_35506,(0),null);
var selector_35508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34890_35506,(1),null);
var seq__34893_35510 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__34900_35511 = null;
var count__34901_35512 = (0);
var i__34902_35513 = (0);
while(true){
if((i__34902_35513 < count__34901_35512)){
var vec__34958_35516 = chunk__34900_35511.cljs$core$IIndexed$_nth$arity$2(null,i__34902_35513);
var orig_type_35517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34958_35516,(0),null);
var f_35518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34958_35516,(1),null);
var seq__34903_35519 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35517,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35517,cljs.core.identity])));
var chunk__34905_35520 = null;
var count__34906_35521 = (0);
var i__34907_35522 = (0);
while(true){
if((i__34907_35522 < count__34906_35521)){
var vec__34975_35523 = chunk__34905_35520.cljs$core$IIndexed$_nth$arity$2(null,i__34907_35522);
var actual_type_35524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34975_35523,(0),null);
var factory_35525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34975_35523,(1),null);
var canonical_f_35526 = (function (){var G__34979 = (factory_35525.cljs$core$IFn$_invoke$arity$1 ? factory_35525.cljs$core$IFn$_invoke$arity$1(f_35518) : factory_35525.call(null,f_35518));
var fexpr__34978 = (cljs.core.truth_(selector_35508)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35507,selector_35508):cljs.core.identity);
return (fexpr__34978.cljs$core$IFn$_invoke$arity$1 ? fexpr__34978.cljs$core$IFn$_invoke$arity$1(G__34979) : fexpr__34978.call(null,G__34979));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35507,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35508,actual_type_35524,f_35518], null),canonical_f_35526], 0));

if(cljs.core.truth_(elem_35507.addEventListener)){
elem_35507.addEventListener(cljs.core.name(actual_type_35524),canonical_f_35526);
} else {
elem_35507.attachEvent(cljs.core.name(actual_type_35524),canonical_f_35526);
}


var G__35528 = seq__34903_35519;
var G__35529 = chunk__34905_35520;
var G__35530 = count__34906_35521;
var G__35531 = (i__34907_35522 + (1));
seq__34903_35519 = G__35528;
chunk__34905_35520 = G__35529;
count__34906_35521 = G__35530;
i__34907_35522 = G__35531;
continue;
} else {
var temp__5735__auto___35534 = cljs.core.seq(seq__34903_35519);
if(temp__5735__auto___35534){
var seq__34903_35536__$1 = temp__5735__auto___35534;
if(cljs.core.chunked_seq_QMARK_(seq__34903_35536__$1)){
var c__4609__auto___35537 = cljs.core.chunk_first(seq__34903_35536__$1);
var G__35538 = cljs.core.chunk_rest(seq__34903_35536__$1);
var G__35539 = c__4609__auto___35537;
var G__35540 = cljs.core.count(c__4609__auto___35537);
var G__35541 = (0);
seq__34903_35519 = G__35538;
chunk__34905_35520 = G__35539;
count__34906_35521 = G__35540;
i__34907_35522 = G__35541;
continue;
} else {
var vec__34980_35542 = cljs.core.first(seq__34903_35536__$1);
var actual_type_35543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34980_35542,(0),null);
var factory_35544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34980_35542,(1),null);
var canonical_f_35547 = (function (){var G__34984 = (factory_35544.cljs$core$IFn$_invoke$arity$1 ? factory_35544.cljs$core$IFn$_invoke$arity$1(f_35518) : factory_35544.call(null,f_35518));
var fexpr__34983 = (cljs.core.truth_(selector_35508)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35507,selector_35508):cljs.core.identity);
return (fexpr__34983.cljs$core$IFn$_invoke$arity$1 ? fexpr__34983.cljs$core$IFn$_invoke$arity$1(G__34984) : fexpr__34983.call(null,G__34984));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35507,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35508,actual_type_35543,f_35518], null),canonical_f_35547], 0));

if(cljs.core.truth_(elem_35507.addEventListener)){
elem_35507.addEventListener(cljs.core.name(actual_type_35543),canonical_f_35547);
} else {
elem_35507.attachEvent(cljs.core.name(actual_type_35543),canonical_f_35547);
}


var G__35549 = cljs.core.next(seq__34903_35536__$1);
var G__35550 = null;
var G__35551 = (0);
var G__35552 = (0);
seq__34903_35519 = G__35549;
chunk__34905_35520 = G__35550;
count__34906_35521 = G__35551;
i__34907_35522 = G__35552;
continue;
}
} else {
}
}
break;
}

var G__35553 = seq__34893_35510;
var G__35554 = chunk__34900_35511;
var G__35555 = count__34901_35512;
var G__35556 = (i__34902_35513 + (1));
seq__34893_35510 = G__35553;
chunk__34900_35511 = G__35554;
count__34901_35512 = G__35555;
i__34902_35513 = G__35556;
continue;
} else {
var temp__5735__auto___35557 = cljs.core.seq(seq__34893_35510);
if(temp__5735__auto___35557){
var seq__34893_35558__$1 = temp__5735__auto___35557;
if(cljs.core.chunked_seq_QMARK_(seq__34893_35558__$1)){
var c__4609__auto___35564 = cljs.core.chunk_first(seq__34893_35558__$1);
var G__35565 = cljs.core.chunk_rest(seq__34893_35558__$1);
var G__35566 = c__4609__auto___35564;
var G__35567 = cljs.core.count(c__4609__auto___35564);
var G__35568 = (0);
seq__34893_35510 = G__35565;
chunk__34900_35511 = G__35566;
count__34901_35512 = G__35567;
i__34902_35513 = G__35568;
continue;
} else {
var vec__34988_35571 = cljs.core.first(seq__34893_35558__$1);
var orig_type_35572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34988_35571,(0),null);
var f_35573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34988_35571,(1),null);
var seq__34894_35574 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35572,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35572,cljs.core.identity])));
var chunk__34896_35575 = null;
var count__34897_35576 = (0);
var i__34898_35577 = (0);
while(true){
if((i__34898_35577 < count__34897_35576)){
var vec__35005_35580 = chunk__34896_35575.cljs$core$IIndexed$_nth$arity$2(null,i__34898_35577);
var actual_type_35581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35005_35580,(0),null);
var factory_35582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35005_35580,(1),null);
var canonical_f_35585 = (function (){var G__35009 = (factory_35582.cljs$core$IFn$_invoke$arity$1 ? factory_35582.cljs$core$IFn$_invoke$arity$1(f_35573) : factory_35582.call(null,f_35573));
var fexpr__35008 = (cljs.core.truth_(selector_35508)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35507,selector_35508):cljs.core.identity);
return (fexpr__35008.cljs$core$IFn$_invoke$arity$1 ? fexpr__35008.cljs$core$IFn$_invoke$arity$1(G__35009) : fexpr__35008.call(null,G__35009));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35507,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35508,actual_type_35581,f_35573], null),canonical_f_35585], 0));

if(cljs.core.truth_(elem_35507.addEventListener)){
elem_35507.addEventListener(cljs.core.name(actual_type_35581),canonical_f_35585);
} else {
elem_35507.attachEvent(cljs.core.name(actual_type_35581),canonical_f_35585);
}


var G__35591 = seq__34894_35574;
var G__35592 = chunk__34896_35575;
var G__35593 = count__34897_35576;
var G__35594 = (i__34898_35577 + (1));
seq__34894_35574 = G__35591;
chunk__34896_35575 = G__35592;
count__34897_35576 = G__35593;
i__34898_35577 = G__35594;
continue;
} else {
var temp__5735__auto___35596__$1 = cljs.core.seq(seq__34894_35574);
if(temp__5735__auto___35596__$1){
var seq__34894_35597__$1 = temp__5735__auto___35596__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34894_35597__$1)){
var c__4609__auto___35599 = cljs.core.chunk_first(seq__34894_35597__$1);
var G__35600 = cljs.core.chunk_rest(seq__34894_35597__$1);
var G__35601 = c__4609__auto___35599;
var G__35602 = cljs.core.count(c__4609__auto___35599);
var G__35603 = (0);
seq__34894_35574 = G__35600;
chunk__34896_35575 = G__35601;
count__34897_35576 = G__35602;
i__34898_35577 = G__35603;
continue;
} else {
var vec__35010_35604 = cljs.core.first(seq__34894_35597__$1);
var actual_type_35605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35010_35604,(0),null);
var factory_35606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35010_35604,(1),null);
var canonical_f_35609 = (function (){var G__35014 = (factory_35606.cljs$core$IFn$_invoke$arity$1 ? factory_35606.cljs$core$IFn$_invoke$arity$1(f_35573) : factory_35606.call(null,f_35573));
var fexpr__35013 = (cljs.core.truth_(selector_35508)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35507,selector_35508):cljs.core.identity);
return (fexpr__35013.cljs$core$IFn$_invoke$arity$1 ? fexpr__35013.cljs$core$IFn$_invoke$arity$1(G__35014) : fexpr__35013.call(null,G__35014));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35507,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35508,actual_type_35605,f_35573], null),canonical_f_35609], 0));

if(cljs.core.truth_(elem_35507.addEventListener)){
elem_35507.addEventListener(cljs.core.name(actual_type_35605),canonical_f_35609);
} else {
elem_35507.attachEvent(cljs.core.name(actual_type_35605),canonical_f_35609);
}


var G__35613 = cljs.core.next(seq__34894_35597__$1);
var G__35614 = null;
var G__35615 = (0);
var G__35616 = (0);
seq__34894_35574 = G__35613;
chunk__34896_35575 = G__35614;
count__34897_35576 = G__35615;
i__34898_35577 = G__35616;
continue;
}
} else {
}
}
break;
}

var G__35619 = cljs.core.next(seq__34893_35558__$1);
var G__35620 = null;
var G__35621 = (0);
var G__35622 = (0);
seq__34893_35510 = G__35619;
chunk__34900_35511 = G__35620;
count__34901_35512 = G__35621;
i__34902_35513 = G__35622;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq34888){
var G__34889 = cljs.core.first(seq34888);
var seq34888__$1 = cljs.core.next(seq34888);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34889,seq34888__$1);
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
var len__4789__auto___35629 = arguments.length;
var i__4790__auto___35630 = (0);
while(true){
if((i__4790__auto___35630 < len__4789__auto___35629)){
args__4795__auto__.push((arguments[i__4790__auto___35630]));

var G__35632 = (i__4790__auto___35630 + (1));
i__4790__auto___35630 = G__35632;
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

var vec__35017_35636 = dommy.core.elem_and_selector(elem_sel);
var elem_35637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35017_35636,(0),null);
var selector_35638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35017_35636,(1),null);
var seq__35020_35639 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35027_35641 = null;
var count__35028_35642 = (0);
var i__35029_35643 = (0);
while(true){
if((i__35029_35643 < count__35028_35642)){
var vec__35087_35646 = chunk__35027_35641.cljs$core$IIndexed$_nth$arity$2(null,i__35029_35643);
var orig_type_35647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35087_35646,(0),null);
var f_35648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35087_35646,(1),null);
var seq__35030_35651 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35647,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35647,cljs.core.identity])));
var chunk__35032_35652 = null;
var count__35033_35653 = (0);
var i__35034_35654 = (0);
while(true){
if((i__35034_35654 < count__35033_35653)){
var vec__35107_35656 = chunk__35032_35652.cljs$core$IIndexed$_nth$arity$2(null,i__35034_35654);
var actual_type_35657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35107_35656,(0),null);
var __35658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35107_35656,(1),null);
var keys_35660 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35638,actual_type_35657,f_35648], null);
var canonical_f_35661 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35637),keys_35660);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35637,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35660], 0));

if(cljs.core.truth_(elem_35637.removeEventListener)){
elem_35637.removeEventListener(cljs.core.name(actual_type_35657),canonical_f_35661);
} else {
elem_35637.detachEvent(cljs.core.name(actual_type_35657),canonical_f_35661);
}


var G__35672 = seq__35030_35651;
var G__35673 = chunk__35032_35652;
var G__35674 = count__35033_35653;
var G__35675 = (i__35034_35654 + (1));
seq__35030_35651 = G__35672;
chunk__35032_35652 = G__35673;
count__35033_35653 = G__35674;
i__35034_35654 = G__35675;
continue;
} else {
var temp__5735__auto___35677 = cljs.core.seq(seq__35030_35651);
if(temp__5735__auto___35677){
var seq__35030_35678__$1 = temp__5735__auto___35677;
if(cljs.core.chunked_seq_QMARK_(seq__35030_35678__$1)){
var c__4609__auto___35679 = cljs.core.chunk_first(seq__35030_35678__$1);
var G__35680 = cljs.core.chunk_rest(seq__35030_35678__$1);
var G__35681 = c__4609__auto___35679;
var G__35682 = cljs.core.count(c__4609__auto___35679);
var G__35683 = (0);
seq__35030_35651 = G__35680;
chunk__35032_35652 = G__35681;
count__35033_35653 = G__35682;
i__35034_35654 = G__35683;
continue;
} else {
var vec__35116_35687 = cljs.core.first(seq__35030_35678__$1);
var actual_type_35688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35116_35687,(0),null);
var __35689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35116_35687,(1),null);
var keys_35690 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35638,actual_type_35688,f_35648], null);
var canonical_f_35691 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35637),keys_35690);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35637,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35690], 0));

if(cljs.core.truth_(elem_35637.removeEventListener)){
elem_35637.removeEventListener(cljs.core.name(actual_type_35688),canonical_f_35691);
} else {
elem_35637.detachEvent(cljs.core.name(actual_type_35688),canonical_f_35691);
}


var G__35695 = cljs.core.next(seq__35030_35678__$1);
var G__35696 = null;
var G__35697 = (0);
var G__35698 = (0);
seq__35030_35651 = G__35695;
chunk__35032_35652 = G__35696;
count__35033_35653 = G__35697;
i__35034_35654 = G__35698;
continue;
}
} else {
}
}
break;
}

var G__35699 = seq__35020_35639;
var G__35700 = chunk__35027_35641;
var G__35701 = count__35028_35642;
var G__35702 = (i__35029_35643 + (1));
seq__35020_35639 = G__35699;
chunk__35027_35641 = G__35700;
count__35028_35642 = G__35701;
i__35029_35643 = G__35702;
continue;
} else {
var temp__5735__auto___35706 = cljs.core.seq(seq__35020_35639);
if(temp__5735__auto___35706){
var seq__35020_35707__$1 = temp__5735__auto___35706;
if(cljs.core.chunked_seq_QMARK_(seq__35020_35707__$1)){
var c__4609__auto___35708 = cljs.core.chunk_first(seq__35020_35707__$1);
var G__35709 = cljs.core.chunk_rest(seq__35020_35707__$1);
var G__35710 = c__4609__auto___35708;
var G__35711 = cljs.core.count(c__4609__auto___35708);
var G__35712 = (0);
seq__35020_35639 = G__35709;
chunk__35027_35641 = G__35710;
count__35028_35642 = G__35711;
i__35029_35643 = G__35712;
continue;
} else {
var vec__35135_35716 = cljs.core.first(seq__35020_35707__$1);
var orig_type_35717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35135_35716,(0),null);
var f_35718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35135_35716,(1),null);
var seq__35021_35719 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35717,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35717,cljs.core.identity])));
var chunk__35023_35720 = null;
var count__35024_35721 = (0);
var i__35025_35722 = (0);
while(true){
if((i__35025_35722 < count__35024_35721)){
var vec__35147_35726 = chunk__35023_35720.cljs$core$IIndexed$_nth$arity$2(null,i__35025_35722);
var actual_type_35727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35147_35726,(0),null);
var __35728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35147_35726,(1),null);
var keys_35730 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35638,actual_type_35727,f_35718], null);
var canonical_f_35731 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35637),keys_35730);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35637,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35730], 0));

if(cljs.core.truth_(elem_35637.removeEventListener)){
elem_35637.removeEventListener(cljs.core.name(actual_type_35727),canonical_f_35731);
} else {
elem_35637.detachEvent(cljs.core.name(actual_type_35727),canonical_f_35731);
}


var G__35735 = seq__35021_35719;
var G__35736 = chunk__35023_35720;
var G__35737 = count__35024_35721;
var G__35738 = (i__35025_35722 + (1));
seq__35021_35719 = G__35735;
chunk__35023_35720 = G__35736;
count__35024_35721 = G__35737;
i__35025_35722 = G__35738;
continue;
} else {
var temp__5735__auto___35739__$1 = cljs.core.seq(seq__35021_35719);
if(temp__5735__auto___35739__$1){
var seq__35021_35741__$1 = temp__5735__auto___35739__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35021_35741__$1)){
var c__4609__auto___35742 = cljs.core.chunk_first(seq__35021_35741__$1);
var G__35743 = cljs.core.chunk_rest(seq__35021_35741__$1);
var G__35744 = c__4609__auto___35742;
var G__35745 = cljs.core.count(c__4609__auto___35742);
var G__35746 = (0);
seq__35021_35719 = G__35743;
chunk__35023_35720 = G__35744;
count__35024_35721 = G__35745;
i__35025_35722 = G__35746;
continue;
} else {
var vec__35150_35768 = cljs.core.first(seq__35021_35741__$1);
var actual_type_35769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35150_35768,(0),null);
var __35770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35150_35768,(1),null);
var keys_35771 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35638,actual_type_35769,f_35718], null);
var canonical_f_35772 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35637),keys_35771);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35637,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35771], 0));

if(cljs.core.truth_(elem_35637.removeEventListener)){
elem_35637.removeEventListener(cljs.core.name(actual_type_35769),canonical_f_35772);
} else {
elem_35637.detachEvent(cljs.core.name(actual_type_35769),canonical_f_35772);
}


var G__35775 = cljs.core.next(seq__35021_35741__$1);
var G__35776 = null;
var G__35777 = (0);
var G__35778 = (0);
seq__35021_35719 = G__35775;
chunk__35023_35720 = G__35776;
count__35024_35721 = G__35777;
i__35025_35722 = G__35778;
continue;
}
} else {
}
}
break;
}

var G__35779 = cljs.core.next(seq__35020_35707__$1);
var G__35780 = null;
var G__35781 = (0);
var G__35782 = (0);
seq__35020_35639 = G__35779;
chunk__35027_35641 = G__35780;
count__35028_35642 = G__35781;
i__35029_35643 = G__35782;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq35015){
var G__35016 = cljs.core.first(seq35015);
var seq35015__$1 = cljs.core.next(seq35015);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35016,seq35015__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35785 = arguments.length;
var i__4790__auto___35786 = (0);
while(true){
if((i__4790__auto___35786 < len__4789__auto___35785)){
args__4795__auto__.push((arguments[i__4790__auto___35786]));

var G__35794 = (i__4790__auto___35786 + (1));
i__4790__auto___35786 = G__35794;
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

var vec__35157_35797 = dommy.core.elem_and_selector(elem_sel);
var elem_35798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35157_35797,(0),null);
var selector_35799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35157_35797,(1),null);
var seq__35160_35809 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35161_35810 = null;
var count__35162_35811 = (0);
var i__35163_35812 = (0);
while(true){
if((i__35163_35812 < count__35162_35811)){
var vec__35170_35813 = chunk__35161_35810.cljs$core$IIndexed$_nth$arity$2(null,i__35163_35812);
var type_35814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35170_35813,(0),null);
var f_35815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35170_35813,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35814,((function (seq__35160_35809,chunk__35161_35810,count__35162_35811,i__35163_35812,vec__35170_35813,type_35814,f_35815,vec__35157_35797,elem_35798,selector_35799){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35814,dommy$core$this_fn], 0));

return (f_35815.cljs$core$IFn$_invoke$arity$1 ? f_35815.cljs$core$IFn$_invoke$arity$1(e) : f_35815.call(null,e));
});})(seq__35160_35809,chunk__35161_35810,count__35162_35811,i__35163_35812,vec__35170_35813,type_35814,f_35815,vec__35157_35797,elem_35798,selector_35799))
], 0));


var G__35820 = seq__35160_35809;
var G__35821 = chunk__35161_35810;
var G__35822 = count__35162_35811;
var G__35823 = (i__35163_35812 + (1));
seq__35160_35809 = G__35820;
chunk__35161_35810 = G__35821;
count__35162_35811 = G__35822;
i__35163_35812 = G__35823;
continue;
} else {
var temp__5735__auto___35824 = cljs.core.seq(seq__35160_35809);
if(temp__5735__auto___35824){
var seq__35160_35826__$1 = temp__5735__auto___35824;
if(cljs.core.chunked_seq_QMARK_(seq__35160_35826__$1)){
var c__4609__auto___35828 = cljs.core.chunk_first(seq__35160_35826__$1);
var G__35830 = cljs.core.chunk_rest(seq__35160_35826__$1);
var G__35831 = c__4609__auto___35828;
var G__35832 = cljs.core.count(c__4609__auto___35828);
var G__35833 = (0);
seq__35160_35809 = G__35830;
chunk__35161_35810 = G__35831;
count__35162_35811 = G__35832;
i__35163_35812 = G__35833;
continue;
} else {
var vec__35173_35837 = cljs.core.first(seq__35160_35826__$1);
var type_35838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35173_35837,(0),null);
var f_35839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35173_35837,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35838,((function (seq__35160_35809,chunk__35161_35810,count__35162_35811,i__35163_35812,vec__35173_35837,type_35838,f_35839,seq__35160_35826__$1,temp__5735__auto___35824,vec__35157_35797,elem_35798,selector_35799){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35838,dommy$core$this_fn], 0));

return (f_35839.cljs$core$IFn$_invoke$arity$1 ? f_35839.cljs$core$IFn$_invoke$arity$1(e) : f_35839.call(null,e));
});})(seq__35160_35809,chunk__35161_35810,count__35162_35811,i__35163_35812,vec__35173_35837,type_35838,f_35839,seq__35160_35826__$1,temp__5735__auto___35824,vec__35157_35797,elem_35798,selector_35799))
], 0));


var G__35850 = cljs.core.next(seq__35160_35826__$1);
var G__35851 = null;
var G__35852 = (0);
var G__35853 = (0);
seq__35160_35809 = G__35850;
chunk__35161_35810 = G__35851;
count__35162_35811 = G__35852;
i__35163_35812 = G__35853;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq35154){
var G__35155 = cljs.core.first(seq35154);
var seq35154__$1 = cljs.core.next(seq35154);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35155,seq35154__$1);
}));


//# sourceMappingURL=dommy.core.js.map
