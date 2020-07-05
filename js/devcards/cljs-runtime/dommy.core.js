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
var G__34716 = arguments.length;
switch (G__34716) {
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
var G__34718 = arguments.length;
switch (G__34718) {
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
var G__34721 = arguments.length;
switch (G__34721) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__34719_SHARP_){
return (!((p1__34719_SHARP_ === base)));
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
var len__4789__auto___35158 = arguments.length;
var i__4790__auto___35159 = (0);
while(true){
if((i__4790__auto___35159 < len__4789__auto___35158)){
args__4795__auto__.push((arguments[i__4790__auto___35159]));

var G__35160 = (i__4790__auto___35159 + (1));
i__4790__auto___35159 = G__35160;
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
var seq__34726_35164 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34727_35165 = null;
var count__34728_35166 = (0);
var i__34729_35167 = (0);
while(true){
if((i__34729_35167 < count__34728_35166)){
var vec__34736_35168 = chunk__34727_35165.cljs$core$IIndexed$_nth$arity$2(null,i__34729_35167);
var k_35169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34736_35168,(0),null);
var v_35170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34736_35168,(1),null);
style.setProperty(dommy.utils.as_str(k_35169),v_35170);


var G__35171 = seq__34726_35164;
var G__35172 = chunk__34727_35165;
var G__35173 = count__34728_35166;
var G__35174 = (i__34729_35167 + (1));
seq__34726_35164 = G__35171;
chunk__34727_35165 = G__35172;
count__34728_35166 = G__35173;
i__34729_35167 = G__35174;
continue;
} else {
var temp__5735__auto___35175 = cljs.core.seq(seq__34726_35164);
if(temp__5735__auto___35175){
var seq__34726_35176__$1 = temp__5735__auto___35175;
if(cljs.core.chunked_seq_QMARK_(seq__34726_35176__$1)){
var c__4609__auto___35177 = cljs.core.chunk_first(seq__34726_35176__$1);
var G__35178 = cljs.core.chunk_rest(seq__34726_35176__$1);
var G__35179 = c__4609__auto___35177;
var G__35180 = cljs.core.count(c__4609__auto___35177);
var G__35181 = (0);
seq__34726_35164 = G__35178;
chunk__34727_35165 = G__35179;
count__34728_35166 = G__35180;
i__34729_35167 = G__35181;
continue;
} else {
var vec__34739_35182 = cljs.core.first(seq__34726_35176__$1);
var k_35183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34739_35182,(0),null);
var v_35184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34739_35182,(1),null);
style.setProperty(dommy.utils.as_str(k_35183),v_35184);


var G__35185 = cljs.core.next(seq__34726_35176__$1);
var G__35186 = null;
var G__35187 = (0);
var G__35188 = (0);
seq__34726_35164 = G__35185;
chunk__34727_35165 = G__35186;
count__34728_35166 = G__35187;
i__34729_35167 = G__35188;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq34724){
var G__34725 = cljs.core.first(seq34724);
var seq34724__$1 = cljs.core.next(seq34724);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34725,seq34724__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35190 = arguments.length;
var i__4790__auto___35191 = (0);
while(true){
if((i__4790__auto___35191 < len__4789__auto___35190)){
args__4795__auto__.push((arguments[i__4790__auto___35191]));

var G__35192 = (i__4790__auto___35191 + (1));
i__4790__auto___35191 = G__35192;
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
var seq__34744_35193 = cljs.core.seq(keywords);
var chunk__34745_35194 = null;
var count__34746_35195 = (0);
var i__34747_35196 = (0);
while(true){
if((i__34747_35196 < count__34746_35195)){
var kw_35197 = chunk__34745_35194.cljs$core$IIndexed$_nth$arity$2(null,i__34747_35196);
style.removeProperty(dommy.utils.as_str(kw_35197));


var G__35199 = seq__34744_35193;
var G__35200 = chunk__34745_35194;
var G__35201 = count__34746_35195;
var G__35202 = (i__34747_35196 + (1));
seq__34744_35193 = G__35199;
chunk__34745_35194 = G__35200;
count__34746_35195 = G__35201;
i__34747_35196 = G__35202;
continue;
} else {
var temp__5735__auto___35203 = cljs.core.seq(seq__34744_35193);
if(temp__5735__auto___35203){
var seq__34744_35204__$1 = temp__5735__auto___35203;
if(cljs.core.chunked_seq_QMARK_(seq__34744_35204__$1)){
var c__4609__auto___35205 = cljs.core.chunk_first(seq__34744_35204__$1);
var G__35206 = cljs.core.chunk_rest(seq__34744_35204__$1);
var G__35207 = c__4609__auto___35205;
var G__35208 = cljs.core.count(c__4609__auto___35205);
var G__35209 = (0);
seq__34744_35193 = G__35206;
chunk__34745_35194 = G__35207;
count__34746_35195 = G__35208;
i__34747_35196 = G__35209;
continue;
} else {
var kw_35210 = cljs.core.first(seq__34744_35204__$1);
style.removeProperty(dommy.utils.as_str(kw_35210));


var G__35211 = cljs.core.next(seq__34744_35204__$1);
var G__35212 = null;
var G__35213 = (0);
var G__35214 = (0);
seq__34744_35193 = G__35211;
chunk__34745_35194 = G__35212;
count__34746_35195 = G__35213;
i__34747_35196 = G__35214;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq34742){
var G__34743 = cljs.core.first(seq34742);
var seq34742__$1 = cljs.core.next(seq34742);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34743,seq34742__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35215 = arguments.length;
var i__4790__auto___35216 = (0);
while(true){
if((i__4790__auto___35216 < len__4789__auto___35215)){
args__4795__auto__.push((arguments[i__4790__auto___35216]));

var G__35217 = (i__4790__auto___35216 + (1));
i__4790__auto___35216 = G__35217;
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

var seq__34751_35218 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34752_35219 = null;
var count__34753_35220 = (0);
var i__34754_35221 = (0);
while(true){
if((i__34754_35221 < count__34753_35220)){
var vec__34761_35222 = chunk__34752_35219.cljs$core$IIndexed$_nth$arity$2(null,i__34754_35221);
var k_35223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34761_35222,(0),null);
var v_35224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34761_35222,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35223,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35224),"px"].join('')], 0));


var G__35225 = seq__34751_35218;
var G__35226 = chunk__34752_35219;
var G__35227 = count__34753_35220;
var G__35228 = (i__34754_35221 + (1));
seq__34751_35218 = G__35225;
chunk__34752_35219 = G__35226;
count__34753_35220 = G__35227;
i__34754_35221 = G__35228;
continue;
} else {
var temp__5735__auto___35229 = cljs.core.seq(seq__34751_35218);
if(temp__5735__auto___35229){
var seq__34751_35230__$1 = temp__5735__auto___35229;
if(cljs.core.chunked_seq_QMARK_(seq__34751_35230__$1)){
var c__4609__auto___35231 = cljs.core.chunk_first(seq__34751_35230__$1);
var G__35232 = cljs.core.chunk_rest(seq__34751_35230__$1);
var G__35233 = c__4609__auto___35231;
var G__35234 = cljs.core.count(c__4609__auto___35231);
var G__35235 = (0);
seq__34751_35218 = G__35232;
chunk__34752_35219 = G__35233;
count__34753_35220 = G__35234;
i__34754_35221 = G__35235;
continue;
} else {
var vec__34764_35236 = cljs.core.first(seq__34751_35230__$1);
var k_35237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34764_35236,(0),null);
var v_35238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34764_35236,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35237,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35238),"px"].join('')], 0));


var G__35239 = cljs.core.next(seq__34751_35230__$1);
var G__35240 = null;
var G__35241 = (0);
var G__35242 = (0);
seq__34751_35218 = G__35239;
chunk__34752_35219 = G__35240;
count__34753_35220 = G__35241;
i__34754_35221 = G__35242;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq34749){
var G__34750 = cljs.core.first(seq34749);
var seq34749__$1 = cljs.core.next(seq34749);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34750,seq34749__$1);
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
var G__34772 = arguments.length;
switch (G__34772) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35244 = arguments.length;
var i__4790__auto___35245 = (0);
while(true){
if((i__4790__auto___35245 < len__4789__auto___35244)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35245]));

var G__35246 = (i__4790__auto___35245 + (1));
i__4790__auto___35245 = G__35246;
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
var G__34773 = elem;
(G__34773[k__$1] = v);

return G__34773;
} else {
var G__34774 = elem;
G__34774.setAttribute(k__$1,v);

return G__34774;
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

var seq__34775_35247 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__34776_35248 = null;
var count__34777_35249 = (0);
var i__34778_35250 = (0);
while(true){
if((i__34778_35250 < count__34777_35249)){
var vec__34785_35251 = chunk__34776_35248.cljs$core$IIndexed$_nth$arity$2(null,i__34778_35250);
var k_35252__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34785_35251,(0),null);
var v_35253__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34785_35251,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35252__$1,v_35253__$1);


var G__35254 = seq__34775_35247;
var G__35255 = chunk__34776_35248;
var G__35256 = count__34777_35249;
var G__35257 = (i__34778_35250 + (1));
seq__34775_35247 = G__35254;
chunk__34776_35248 = G__35255;
count__34777_35249 = G__35256;
i__34778_35250 = G__35257;
continue;
} else {
var temp__5735__auto___35258 = cljs.core.seq(seq__34775_35247);
if(temp__5735__auto___35258){
var seq__34775_35259__$1 = temp__5735__auto___35258;
if(cljs.core.chunked_seq_QMARK_(seq__34775_35259__$1)){
var c__4609__auto___35260 = cljs.core.chunk_first(seq__34775_35259__$1);
var G__35261 = cljs.core.chunk_rest(seq__34775_35259__$1);
var G__35262 = c__4609__auto___35260;
var G__35263 = cljs.core.count(c__4609__auto___35260);
var G__35264 = (0);
seq__34775_35247 = G__35261;
chunk__34776_35248 = G__35262;
count__34777_35249 = G__35263;
i__34778_35250 = G__35264;
continue;
} else {
var vec__34788_35265 = cljs.core.first(seq__34775_35259__$1);
var k_35266__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34788_35265,(0),null);
var v_35267__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34788_35265,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35266__$1,v_35267__$1);


var G__35268 = cljs.core.next(seq__34775_35259__$1);
var G__35269 = null;
var G__35270 = (0);
var G__35271 = (0);
seq__34775_35247 = G__35268;
chunk__34776_35248 = G__35269;
count__34777_35249 = G__35270;
i__34778_35250 = G__35271;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq34768){
var G__34769 = cljs.core.first(seq34768);
var seq34768__$1 = cljs.core.next(seq34768);
var G__34770 = cljs.core.first(seq34768__$1);
var seq34768__$2 = cljs.core.next(seq34768__$1);
var G__34771 = cljs.core.first(seq34768__$2);
var seq34768__$3 = cljs.core.next(seq34768__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34769,G__34770,G__34771,seq34768__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__34795 = arguments.length;
switch (G__34795) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35273 = arguments.length;
var i__4790__auto___35274 = (0);
while(true){
if((i__4790__auto___35274 < len__4789__auto___35273)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35274]));

var G__35275 = (i__4790__auto___35274 + (1));
i__4790__auto___35274 = G__35275;
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
var k_35276__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__34796 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__34796.cljs$core$IFn$_invoke$arity$1 ? fexpr__34796.cljs$core$IFn$_invoke$arity$1(k_35276__$1) : fexpr__34796.call(null,k_35276__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_35276__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__34797_35277 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__34798_35278 = null;
var count__34799_35279 = (0);
var i__34800_35280 = (0);
while(true){
if((i__34800_35280 < count__34799_35279)){
var k_35281__$1 = chunk__34798_35278.cljs$core$IIndexed$_nth$arity$2(null,i__34800_35280);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35281__$1);


var G__35282 = seq__34797_35277;
var G__35283 = chunk__34798_35278;
var G__35284 = count__34799_35279;
var G__35285 = (i__34800_35280 + (1));
seq__34797_35277 = G__35282;
chunk__34798_35278 = G__35283;
count__34799_35279 = G__35284;
i__34800_35280 = G__35285;
continue;
} else {
var temp__5735__auto___35286 = cljs.core.seq(seq__34797_35277);
if(temp__5735__auto___35286){
var seq__34797_35287__$1 = temp__5735__auto___35286;
if(cljs.core.chunked_seq_QMARK_(seq__34797_35287__$1)){
var c__4609__auto___35288 = cljs.core.chunk_first(seq__34797_35287__$1);
var G__35289 = cljs.core.chunk_rest(seq__34797_35287__$1);
var G__35290 = c__4609__auto___35288;
var G__35291 = cljs.core.count(c__4609__auto___35288);
var G__35292 = (0);
seq__34797_35277 = G__35289;
chunk__34798_35278 = G__35290;
count__34799_35279 = G__35291;
i__34800_35280 = G__35292;
continue;
} else {
var k_35293__$1 = cljs.core.first(seq__34797_35287__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35293__$1);


var G__35294 = cljs.core.next(seq__34797_35287__$1);
var G__35295 = null;
var G__35296 = (0);
var G__35297 = (0);
seq__34797_35277 = G__35294;
chunk__34798_35278 = G__35295;
count__34799_35279 = G__35296;
i__34800_35280 = G__35297;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq34792){
var G__34793 = cljs.core.first(seq34792);
var seq34792__$1 = cljs.core.next(seq34792);
var G__34794 = cljs.core.first(seq34792__$1);
var seq34792__$2 = cljs.core.next(seq34792__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34793,G__34794,seq34792__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__34802 = arguments.length;
switch (G__34802) {
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
var G__34807 = arguments.length;
switch (G__34807) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35300 = arguments.length;
var i__4790__auto___35301 = (0);
while(true){
if((i__4790__auto___35301 < len__4789__auto___35300)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35301]));

var G__35302 = (i__4790__auto___35301 + (1));
i__4790__auto___35301 = G__35302;
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
var temp__5733__auto___35305 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35305)){
var class_list_35306 = temp__5733__auto___35305;
var seq__34808_35307 = cljs.core.seq(classes__$1);
var chunk__34809_35308 = null;
var count__34810_35309 = (0);
var i__34811_35310 = (0);
while(true){
if((i__34811_35310 < count__34810_35309)){
var c_35311 = chunk__34809_35308.cljs$core$IIndexed$_nth$arity$2(null,i__34811_35310);
class_list_35306.add(c_35311);


var G__35312 = seq__34808_35307;
var G__35313 = chunk__34809_35308;
var G__35314 = count__34810_35309;
var G__35315 = (i__34811_35310 + (1));
seq__34808_35307 = G__35312;
chunk__34809_35308 = G__35313;
count__34810_35309 = G__35314;
i__34811_35310 = G__35315;
continue;
} else {
var temp__5735__auto___35316 = cljs.core.seq(seq__34808_35307);
if(temp__5735__auto___35316){
var seq__34808_35317__$1 = temp__5735__auto___35316;
if(cljs.core.chunked_seq_QMARK_(seq__34808_35317__$1)){
var c__4609__auto___35318 = cljs.core.chunk_first(seq__34808_35317__$1);
var G__35319 = cljs.core.chunk_rest(seq__34808_35317__$1);
var G__35320 = c__4609__auto___35318;
var G__35321 = cljs.core.count(c__4609__auto___35318);
var G__35322 = (0);
seq__34808_35307 = G__35319;
chunk__34809_35308 = G__35320;
count__34810_35309 = G__35321;
i__34811_35310 = G__35322;
continue;
} else {
var c_35323 = cljs.core.first(seq__34808_35317__$1);
class_list_35306.add(c_35323);


var G__35324 = cljs.core.next(seq__34808_35317__$1);
var G__35325 = null;
var G__35326 = (0);
var G__35327 = (0);
seq__34808_35307 = G__35324;
chunk__34809_35308 = G__35325;
count__34810_35309 = G__35326;
i__34811_35310 = G__35327;
continue;
}
} else {
}
}
break;
}
} else {
var seq__34812_35328 = cljs.core.seq(classes__$1);
var chunk__34813_35329 = null;
var count__34814_35330 = (0);
var i__34815_35331 = (0);
while(true){
if((i__34815_35331 < count__34814_35330)){
var c_35332 = chunk__34813_35329.cljs$core$IIndexed$_nth$arity$2(null,i__34815_35331);
var class_name_35333 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35333,c_35332))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35333 === ""))?c_35332:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35333)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35332)].join('')));
}


var G__35334 = seq__34812_35328;
var G__35335 = chunk__34813_35329;
var G__35336 = count__34814_35330;
var G__35337 = (i__34815_35331 + (1));
seq__34812_35328 = G__35334;
chunk__34813_35329 = G__35335;
count__34814_35330 = G__35336;
i__34815_35331 = G__35337;
continue;
} else {
var temp__5735__auto___35338 = cljs.core.seq(seq__34812_35328);
if(temp__5735__auto___35338){
var seq__34812_35339__$1 = temp__5735__auto___35338;
if(cljs.core.chunked_seq_QMARK_(seq__34812_35339__$1)){
var c__4609__auto___35340 = cljs.core.chunk_first(seq__34812_35339__$1);
var G__35341 = cljs.core.chunk_rest(seq__34812_35339__$1);
var G__35342 = c__4609__auto___35340;
var G__35343 = cljs.core.count(c__4609__auto___35340);
var G__35344 = (0);
seq__34812_35328 = G__35341;
chunk__34813_35329 = G__35342;
count__34814_35330 = G__35343;
i__34815_35331 = G__35344;
continue;
} else {
var c_35345 = cljs.core.first(seq__34812_35339__$1);
var class_name_35346 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35346,c_35345))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35346 === ""))?c_35345:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35346)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35345)].join('')));
}


var G__35347 = cljs.core.next(seq__34812_35339__$1);
var G__35348 = null;
var G__35349 = (0);
var G__35350 = (0);
seq__34812_35328 = G__35347;
chunk__34813_35329 = G__35348;
count__34814_35330 = G__35349;
i__34815_35331 = G__35350;
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
var seq__34816_35352 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__34817_35353 = null;
var count__34818_35354 = (0);
var i__34819_35355 = (0);
while(true){
if((i__34819_35355 < count__34818_35354)){
var c_35357 = chunk__34817_35353.cljs$core$IIndexed$_nth$arity$2(null,i__34819_35355);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35357);


var G__35358 = seq__34816_35352;
var G__35359 = chunk__34817_35353;
var G__35360 = count__34818_35354;
var G__35361 = (i__34819_35355 + (1));
seq__34816_35352 = G__35358;
chunk__34817_35353 = G__35359;
count__34818_35354 = G__35360;
i__34819_35355 = G__35361;
continue;
} else {
var temp__5735__auto___35362 = cljs.core.seq(seq__34816_35352);
if(temp__5735__auto___35362){
var seq__34816_35363__$1 = temp__5735__auto___35362;
if(cljs.core.chunked_seq_QMARK_(seq__34816_35363__$1)){
var c__4609__auto___35364 = cljs.core.chunk_first(seq__34816_35363__$1);
var G__35365 = cljs.core.chunk_rest(seq__34816_35363__$1);
var G__35366 = c__4609__auto___35364;
var G__35367 = cljs.core.count(c__4609__auto___35364);
var G__35368 = (0);
seq__34816_35352 = G__35365;
chunk__34817_35353 = G__35366;
count__34818_35354 = G__35367;
i__34819_35355 = G__35368;
continue;
} else {
var c_35369 = cljs.core.first(seq__34816_35363__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35369);


var G__35370 = cljs.core.next(seq__34816_35363__$1);
var G__35371 = null;
var G__35372 = (0);
var G__35373 = (0);
seq__34816_35352 = G__35370;
chunk__34817_35353 = G__35371;
count__34818_35354 = G__35372;
i__34819_35355 = G__35373;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq34804){
var G__34805 = cljs.core.first(seq34804);
var seq34804__$1 = cljs.core.next(seq34804);
var G__34806 = cljs.core.first(seq34804__$1);
var seq34804__$2 = cljs.core.next(seq34804__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34805,G__34806,seq34804__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__34824 = arguments.length;
switch (G__34824) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35376 = arguments.length;
var i__4790__auto___35377 = (0);
while(true){
if((i__4790__auto___35377 < len__4789__auto___35376)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35377]));

var G__35379 = (i__4790__auto___35377 + (1));
i__4790__auto___35377 = G__35379;
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
var temp__5733__auto___35380 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35380)){
var class_list_35381 = temp__5733__auto___35380;
class_list_35381.remove(c__$1);
} else {
var class_name_35382 = dommy.core.class$(elem);
var new_class_name_35383 = dommy.utils.remove_class_str(class_name_35382,c__$1);
if((class_name_35382 === new_class_name_35383)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_35383);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__34825 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__34826 = null;
var count__34827 = (0);
var i__34828 = (0);
while(true){
if((i__34828 < count__34827)){
var c = chunk__34826.cljs$core$IIndexed$_nth$arity$2(null,i__34828);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35384 = seq__34825;
var G__35385 = chunk__34826;
var G__35386 = count__34827;
var G__35387 = (i__34828 + (1));
seq__34825 = G__35384;
chunk__34826 = G__35385;
count__34827 = G__35386;
i__34828 = G__35387;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34825);
if(temp__5735__auto__){
var seq__34825__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34825__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34825__$1);
var G__35388 = cljs.core.chunk_rest(seq__34825__$1);
var G__35389 = c__4609__auto__;
var G__35390 = cljs.core.count(c__4609__auto__);
var G__35391 = (0);
seq__34825 = G__35388;
chunk__34826 = G__35389;
count__34827 = G__35390;
i__34828 = G__35391;
continue;
} else {
var c = cljs.core.first(seq__34825__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35392 = cljs.core.next(seq__34825__$1);
var G__35393 = null;
var G__35394 = (0);
var G__35395 = (0);
seq__34825 = G__35392;
chunk__34826 = G__35393;
count__34827 = G__35394;
i__34828 = G__35395;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq34821){
var G__34822 = cljs.core.first(seq34821);
var seq34821__$1 = cljs.core.next(seq34821);
var G__34823 = cljs.core.first(seq34821__$1);
var seq34821__$2 = cljs.core.next(seq34821__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34822,G__34823,seq34821__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__34830 = arguments.length;
switch (G__34830) {
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
var temp__5733__auto___35397 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35397)){
var class_list_35398 = temp__5733__auto___35397;
class_list_35398.toggle(c__$1);
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
var G__34832 = arguments.length;
switch (G__34832) {
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
var G__34834 = arguments.length;
switch (G__34834) {
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
var G__34840 = arguments.length;
switch (G__34840) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35402 = arguments.length;
var i__4790__auto___35403 = (0);
while(true){
if((i__4790__auto___35403 < len__4789__auto___35402)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35403]));

var G__35404 = (i__4790__auto___35403 + (1));
i__4790__auto___35403 = G__35404;
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
var G__34841 = parent;
G__34841.appendChild(child);

return G__34841;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__34843_35405 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34844_35406 = null;
var count__34846_35407 = (0);
var i__34847_35408 = (0);
while(true){
if((i__34847_35408 < count__34846_35407)){
var c_35409 = chunk__34844_35406.cljs$core$IIndexed$_nth$arity$2(null,i__34847_35408);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35409);


var G__35410 = seq__34843_35405;
var G__35411 = chunk__34844_35406;
var G__35412 = count__34846_35407;
var G__35413 = (i__34847_35408 + (1));
seq__34843_35405 = G__35410;
chunk__34844_35406 = G__35411;
count__34846_35407 = G__35412;
i__34847_35408 = G__35413;
continue;
} else {
var temp__5735__auto___35414 = cljs.core.seq(seq__34843_35405);
if(temp__5735__auto___35414){
var seq__34843_35415__$1 = temp__5735__auto___35414;
if(cljs.core.chunked_seq_QMARK_(seq__34843_35415__$1)){
var c__4609__auto___35416 = cljs.core.chunk_first(seq__34843_35415__$1);
var G__35417 = cljs.core.chunk_rest(seq__34843_35415__$1);
var G__35418 = c__4609__auto___35416;
var G__35419 = cljs.core.count(c__4609__auto___35416);
var G__35420 = (0);
seq__34843_35405 = G__35417;
chunk__34844_35406 = G__35418;
count__34846_35407 = G__35419;
i__34847_35408 = G__35420;
continue;
} else {
var c_35421 = cljs.core.first(seq__34843_35415__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35421);


var G__35422 = cljs.core.next(seq__34843_35415__$1);
var G__35423 = null;
var G__35424 = (0);
var G__35425 = (0);
seq__34843_35405 = G__35422;
chunk__34844_35406 = G__35423;
count__34846_35407 = G__35424;
i__34847_35408 = G__35425;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq34837){
var G__34838 = cljs.core.first(seq34837);
var seq34837__$1 = cljs.core.next(seq34837);
var G__34839 = cljs.core.first(seq34837__$1);
var seq34837__$2 = cljs.core.next(seq34837__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34838,G__34839,seq34837__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__34852 = arguments.length;
switch (G__34852) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35427 = arguments.length;
var i__4790__auto___35428 = (0);
while(true){
if((i__4790__auto___35428 < len__4789__auto___35427)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35428]));

var G__35429 = (i__4790__auto___35428 + (1));
i__4790__auto___35428 = G__35429;
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
var G__34853 = parent;
G__34853.insertBefore(child,parent.firstChild);

return G__34853;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__34854_35430 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34855_35431 = null;
var count__34856_35432 = (0);
var i__34857_35433 = (0);
while(true){
if((i__34857_35433 < count__34856_35432)){
var c_35434 = chunk__34855_35431.cljs$core$IIndexed$_nth$arity$2(null,i__34857_35433);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35434);


var G__35435 = seq__34854_35430;
var G__35436 = chunk__34855_35431;
var G__35437 = count__34856_35432;
var G__35438 = (i__34857_35433 + (1));
seq__34854_35430 = G__35435;
chunk__34855_35431 = G__35436;
count__34856_35432 = G__35437;
i__34857_35433 = G__35438;
continue;
} else {
var temp__5735__auto___35439 = cljs.core.seq(seq__34854_35430);
if(temp__5735__auto___35439){
var seq__34854_35440__$1 = temp__5735__auto___35439;
if(cljs.core.chunked_seq_QMARK_(seq__34854_35440__$1)){
var c__4609__auto___35441 = cljs.core.chunk_first(seq__34854_35440__$1);
var G__35442 = cljs.core.chunk_rest(seq__34854_35440__$1);
var G__35443 = c__4609__auto___35441;
var G__35444 = cljs.core.count(c__4609__auto___35441);
var G__35445 = (0);
seq__34854_35430 = G__35442;
chunk__34855_35431 = G__35443;
count__34856_35432 = G__35444;
i__34857_35433 = G__35445;
continue;
} else {
var c_35446 = cljs.core.first(seq__34854_35440__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35446);


var G__35447 = cljs.core.next(seq__34854_35440__$1);
var G__35448 = null;
var G__35449 = (0);
var G__35450 = (0);
seq__34854_35430 = G__35447;
chunk__34855_35431 = G__35448;
count__34856_35432 = G__35449;
i__34857_35433 = G__35450;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq34849){
var G__34850 = cljs.core.first(seq34849);
var seq34849__$1 = cljs.core.next(seq34849);
var G__34851 = cljs.core.first(seq34849__$1);
var seq34849__$2 = cljs.core.next(seq34849__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34850,G__34851,seq34849__$2);
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
var temp__5733__auto___35451 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___35451)){
var next_35452 = temp__5733__auto___35451;
dommy.core.insert_before_BANG_(elem,next_35452);
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
var G__34859 = arguments.length;
switch (G__34859) {
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
var G__34860 = p;
G__34860.removeChild(elem);

return G__34860;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34861){
var vec__34862 = p__34861;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34862,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34862,(1),null);
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
var len__4789__auto___35456 = arguments.length;
var i__4790__auto___35457 = (0);
while(true){
if((i__4790__auto___35457 < len__4789__auto___35456)){
args__4795__auto__.push((arguments[i__4790__auto___35457]));

var G__35458 = (i__4790__auto___35457 + (1));
i__4790__auto___35457 = G__35458;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq34865){
var G__34866 = cljs.core.first(seq34865);
var seq34865__$1 = cljs.core.next(seq34865);
var G__34867 = cljs.core.first(seq34865__$1);
var seq34865__$2 = cljs.core.next(seq34865__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34866,G__34867,seq34865__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__34868 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__34868.cljs$core$IFn$_invoke$arity$1 ? fexpr__34868.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__34868.call(null,elem_sel));
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
var len__4789__auto___35460 = arguments.length;
var i__4790__auto___35461 = (0);
while(true){
if((i__4790__auto___35461 < len__4789__auto___35460)){
args__4795__auto__.push((arguments[i__4790__auto___35461]));

var G__35463 = (i__4790__auto___35461 + (1));
i__4790__auto___35461 = G__35463;
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

var vec__34871_35466 = dommy.core.elem_and_selector(elem_sel);
var elem_35467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34871_35466,(0),null);
var selector_35468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34871_35466,(1),null);
var seq__34874_35469 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__34881_35470 = null;
var count__34882_35471 = (0);
var i__34883_35472 = (0);
while(true){
if((i__34883_35472 < count__34882_35471)){
var vec__34939_35473 = chunk__34881_35470.cljs$core$IIndexed$_nth$arity$2(null,i__34883_35472);
var orig_type_35474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34939_35473,(0),null);
var f_35475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34939_35473,(1),null);
var seq__34884_35476 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35474,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35474,cljs.core.identity])));
var chunk__34886_35477 = null;
var count__34887_35478 = (0);
var i__34888_35479 = (0);
while(true){
if((i__34888_35479 < count__34887_35478)){
var vec__34952_35485 = chunk__34886_35477.cljs$core$IIndexed$_nth$arity$2(null,i__34888_35479);
var actual_type_35486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34952_35485,(0),null);
var factory_35487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34952_35485,(1),null);
var canonical_f_35488 = (function (){var G__34956 = (factory_35487.cljs$core$IFn$_invoke$arity$1 ? factory_35487.cljs$core$IFn$_invoke$arity$1(f_35475) : factory_35487.call(null,f_35475));
var fexpr__34955 = (cljs.core.truth_(selector_35468)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35467,selector_35468):cljs.core.identity);
return (fexpr__34955.cljs$core$IFn$_invoke$arity$1 ? fexpr__34955.cljs$core$IFn$_invoke$arity$1(G__34956) : fexpr__34955.call(null,G__34956));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35467,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35468,actual_type_35486,f_35475], null),canonical_f_35488], 0));

if(cljs.core.truth_(elem_35467.addEventListener)){
elem_35467.addEventListener(cljs.core.name(actual_type_35486),canonical_f_35488);
} else {
elem_35467.attachEvent(cljs.core.name(actual_type_35486),canonical_f_35488);
}


var G__35490 = seq__34884_35476;
var G__35491 = chunk__34886_35477;
var G__35492 = count__34887_35478;
var G__35493 = (i__34888_35479 + (1));
seq__34884_35476 = G__35490;
chunk__34886_35477 = G__35491;
count__34887_35478 = G__35492;
i__34888_35479 = G__35493;
continue;
} else {
var temp__5735__auto___35495 = cljs.core.seq(seq__34884_35476);
if(temp__5735__auto___35495){
var seq__34884_35496__$1 = temp__5735__auto___35495;
if(cljs.core.chunked_seq_QMARK_(seq__34884_35496__$1)){
var c__4609__auto___35497 = cljs.core.chunk_first(seq__34884_35496__$1);
var G__35498 = cljs.core.chunk_rest(seq__34884_35496__$1);
var G__35499 = c__4609__auto___35497;
var G__35500 = cljs.core.count(c__4609__auto___35497);
var G__35501 = (0);
seq__34884_35476 = G__35498;
chunk__34886_35477 = G__35499;
count__34887_35478 = G__35500;
i__34888_35479 = G__35501;
continue;
} else {
var vec__34960_35502 = cljs.core.first(seq__34884_35496__$1);
var actual_type_35503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34960_35502,(0),null);
var factory_35504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34960_35502,(1),null);
var canonical_f_35505 = (function (){var G__34964 = (factory_35504.cljs$core$IFn$_invoke$arity$1 ? factory_35504.cljs$core$IFn$_invoke$arity$1(f_35475) : factory_35504.call(null,f_35475));
var fexpr__34963 = (cljs.core.truth_(selector_35468)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35467,selector_35468):cljs.core.identity);
return (fexpr__34963.cljs$core$IFn$_invoke$arity$1 ? fexpr__34963.cljs$core$IFn$_invoke$arity$1(G__34964) : fexpr__34963.call(null,G__34964));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35467,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35468,actual_type_35503,f_35475], null),canonical_f_35505], 0));

if(cljs.core.truth_(elem_35467.addEventListener)){
elem_35467.addEventListener(cljs.core.name(actual_type_35503),canonical_f_35505);
} else {
elem_35467.attachEvent(cljs.core.name(actual_type_35503),canonical_f_35505);
}


var G__35509 = cljs.core.next(seq__34884_35496__$1);
var G__35510 = null;
var G__35511 = (0);
var G__35512 = (0);
seq__34884_35476 = G__35509;
chunk__34886_35477 = G__35510;
count__34887_35478 = G__35511;
i__34888_35479 = G__35512;
continue;
}
} else {
}
}
break;
}

var G__35514 = seq__34874_35469;
var G__35515 = chunk__34881_35470;
var G__35516 = count__34882_35471;
var G__35517 = (i__34883_35472 + (1));
seq__34874_35469 = G__35514;
chunk__34881_35470 = G__35515;
count__34882_35471 = G__35516;
i__34883_35472 = G__35517;
continue;
} else {
var temp__5735__auto___35518 = cljs.core.seq(seq__34874_35469);
if(temp__5735__auto___35518){
var seq__34874_35519__$1 = temp__5735__auto___35518;
if(cljs.core.chunked_seq_QMARK_(seq__34874_35519__$1)){
var c__4609__auto___35520 = cljs.core.chunk_first(seq__34874_35519__$1);
var G__35521 = cljs.core.chunk_rest(seq__34874_35519__$1);
var G__35522 = c__4609__auto___35520;
var G__35523 = cljs.core.count(c__4609__auto___35520);
var G__35524 = (0);
seq__34874_35469 = G__35521;
chunk__34881_35470 = G__35522;
count__34882_35471 = G__35523;
i__34883_35472 = G__35524;
continue;
} else {
var vec__34965_35525 = cljs.core.first(seq__34874_35519__$1);
var orig_type_35526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34965_35525,(0),null);
var f_35527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34965_35525,(1),null);
var seq__34875_35529 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35526,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35526,cljs.core.identity])));
var chunk__34877_35530 = null;
var count__34878_35531 = (0);
var i__34879_35532 = (0);
while(true){
if((i__34879_35532 < count__34878_35531)){
var vec__34978_35537 = chunk__34877_35530.cljs$core$IIndexed$_nth$arity$2(null,i__34879_35532);
var actual_type_35538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34978_35537,(0),null);
var factory_35539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34978_35537,(1),null);
var canonical_f_35540 = (function (){var G__34982 = (factory_35539.cljs$core$IFn$_invoke$arity$1 ? factory_35539.cljs$core$IFn$_invoke$arity$1(f_35527) : factory_35539.call(null,f_35527));
var fexpr__34981 = (cljs.core.truth_(selector_35468)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35467,selector_35468):cljs.core.identity);
return (fexpr__34981.cljs$core$IFn$_invoke$arity$1 ? fexpr__34981.cljs$core$IFn$_invoke$arity$1(G__34982) : fexpr__34981.call(null,G__34982));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35467,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35468,actual_type_35538,f_35527], null),canonical_f_35540], 0));

if(cljs.core.truth_(elem_35467.addEventListener)){
elem_35467.addEventListener(cljs.core.name(actual_type_35538),canonical_f_35540);
} else {
elem_35467.attachEvent(cljs.core.name(actual_type_35538),canonical_f_35540);
}


var G__35546 = seq__34875_35529;
var G__35547 = chunk__34877_35530;
var G__35548 = count__34878_35531;
var G__35549 = (i__34879_35532 + (1));
seq__34875_35529 = G__35546;
chunk__34877_35530 = G__35547;
count__34878_35531 = G__35548;
i__34879_35532 = G__35549;
continue;
} else {
var temp__5735__auto___35550__$1 = cljs.core.seq(seq__34875_35529);
if(temp__5735__auto___35550__$1){
var seq__34875_35551__$1 = temp__5735__auto___35550__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34875_35551__$1)){
var c__4609__auto___35552 = cljs.core.chunk_first(seq__34875_35551__$1);
var G__35553 = cljs.core.chunk_rest(seq__34875_35551__$1);
var G__35554 = c__4609__auto___35552;
var G__35555 = cljs.core.count(c__4609__auto___35552);
var G__35556 = (0);
seq__34875_35529 = G__35553;
chunk__34877_35530 = G__35554;
count__34878_35531 = G__35555;
i__34879_35532 = G__35556;
continue;
} else {
var vec__34983_35557 = cljs.core.first(seq__34875_35551__$1);
var actual_type_35558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34983_35557,(0),null);
var factory_35559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34983_35557,(1),null);
var canonical_f_35560 = (function (){var G__34987 = (factory_35559.cljs$core$IFn$_invoke$arity$1 ? factory_35559.cljs$core$IFn$_invoke$arity$1(f_35527) : factory_35559.call(null,f_35527));
var fexpr__34986 = (cljs.core.truth_(selector_35468)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35467,selector_35468):cljs.core.identity);
return (fexpr__34986.cljs$core$IFn$_invoke$arity$1 ? fexpr__34986.cljs$core$IFn$_invoke$arity$1(G__34987) : fexpr__34986.call(null,G__34987));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35467,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35468,actual_type_35558,f_35527], null),canonical_f_35560], 0));

if(cljs.core.truth_(elem_35467.addEventListener)){
elem_35467.addEventListener(cljs.core.name(actual_type_35558),canonical_f_35560);
} else {
elem_35467.attachEvent(cljs.core.name(actual_type_35558),canonical_f_35560);
}


var G__35561 = cljs.core.next(seq__34875_35551__$1);
var G__35562 = null;
var G__35563 = (0);
var G__35564 = (0);
seq__34875_35529 = G__35561;
chunk__34877_35530 = G__35562;
count__34878_35531 = G__35563;
i__34879_35532 = G__35564;
continue;
}
} else {
}
}
break;
}

var G__35565 = cljs.core.next(seq__34874_35519__$1);
var G__35566 = null;
var G__35567 = (0);
var G__35568 = (0);
seq__34874_35469 = G__35565;
chunk__34881_35470 = G__35566;
count__34882_35471 = G__35567;
i__34883_35472 = G__35568;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq34869){
var G__34870 = cljs.core.first(seq34869);
var seq34869__$1 = cljs.core.next(seq34869);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34870,seq34869__$1);
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
var len__4789__auto___35569 = arguments.length;
var i__4790__auto___35570 = (0);
while(true){
if((i__4790__auto___35570 < len__4789__auto___35569)){
args__4795__auto__.push((arguments[i__4790__auto___35570]));

var G__35571 = (i__4790__auto___35570 + (1));
i__4790__auto___35570 = G__35571;
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

var vec__34990_35572 = dommy.core.elem_and_selector(elem_sel);
var elem_35573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34990_35572,(0),null);
var selector_35574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34990_35572,(1),null);
var seq__34993_35575 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35000_35576 = null;
var count__35001_35577 = (0);
var i__35002_35578 = (0);
while(true){
if((i__35002_35578 < count__35001_35577)){
var vec__35050_35579 = chunk__35000_35576.cljs$core$IIndexed$_nth$arity$2(null,i__35002_35578);
var orig_type_35580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35050_35579,(0),null);
var f_35581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35050_35579,(1),null);
var seq__35003_35582 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35580,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35580,cljs.core.identity])));
var chunk__35005_35583 = null;
var count__35006_35584 = (0);
var i__35007_35585 = (0);
while(true){
if((i__35007_35585 < count__35006_35584)){
var vec__35059_35586 = chunk__35005_35583.cljs$core$IIndexed$_nth$arity$2(null,i__35007_35585);
var actual_type_35587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35059_35586,(0),null);
var __35588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35059_35586,(1),null);
var keys_35589 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35574,actual_type_35587,f_35581], null);
var canonical_f_35590 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35573),keys_35589);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35573,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35589], 0));

if(cljs.core.truth_(elem_35573.removeEventListener)){
elem_35573.removeEventListener(cljs.core.name(actual_type_35587),canonical_f_35590);
} else {
elem_35573.detachEvent(cljs.core.name(actual_type_35587),canonical_f_35590);
}


var G__35591 = seq__35003_35582;
var G__35592 = chunk__35005_35583;
var G__35593 = count__35006_35584;
var G__35594 = (i__35007_35585 + (1));
seq__35003_35582 = G__35591;
chunk__35005_35583 = G__35592;
count__35006_35584 = G__35593;
i__35007_35585 = G__35594;
continue;
} else {
var temp__5735__auto___35595 = cljs.core.seq(seq__35003_35582);
if(temp__5735__auto___35595){
var seq__35003_35596__$1 = temp__5735__auto___35595;
if(cljs.core.chunked_seq_QMARK_(seq__35003_35596__$1)){
var c__4609__auto___35597 = cljs.core.chunk_first(seq__35003_35596__$1);
var G__35598 = cljs.core.chunk_rest(seq__35003_35596__$1);
var G__35599 = c__4609__auto___35597;
var G__35600 = cljs.core.count(c__4609__auto___35597);
var G__35601 = (0);
seq__35003_35582 = G__35598;
chunk__35005_35583 = G__35599;
count__35006_35584 = G__35600;
i__35007_35585 = G__35601;
continue;
} else {
var vec__35062_35602 = cljs.core.first(seq__35003_35596__$1);
var actual_type_35603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35062_35602,(0),null);
var __35604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35062_35602,(1),null);
var keys_35605 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35574,actual_type_35603,f_35581], null);
var canonical_f_35606 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35573),keys_35605);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35573,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35605], 0));

if(cljs.core.truth_(elem_35573.removeEventListener)){
elem_35573.removeEventListener(cljs.core.name(actual_type_35603),canonical_f_35606);
} else {
elem_35573.detachEvent(cljs.core.name(actual_type_35603),canonical_f_35606);
}


var G__35607 = cljs.core.next(seq__35003_35596__$1);
var G__35608 = null;
var G__35609 = (0);
var G__35610 = (0);
seq__35003_35582 = G__35607;
chunk__35005_35583 = G__35608;
count__35006_35584 = G__35609;
i__35007_35585 = G__35610;
continue;
}
} else {
}
}
break;
}

var G__35611 = seq__34993_35575;
var G__35612 = chunk__35000_35576;
var G__35613 = count__35001_35577;
var G__35614 = (i__35002_35578 + (1));
seq__34993_35575 = G__35611;
chunk__35000_35576 = G__35612;
count__35001_35577 = G__35613;
i__35002_35578 = G__35614;
continue;
} else {
var temp__5735__auto___35615 = cljs.core.seq(seq__34993_35575);
if(temp__5735__auto___35615){
var seq__34993_35616__$1 = temp__5735__auto___35615;
if(cljs.core.chunked_seq_QMARK_(seq__34993_35616__$1)){
var c__4609__auto___35617 = cljs.core.chunk_first(seq__34993_35616__$1);
var G__35618 = cljs.core.chunk_rest(seq__34993_35616__$1);
var G__35619 = c__4609__auto___35617;
var G__35620 = cljs.core.count(c__4609__auto___35617);
var G__35621 = (0);
seq__34993_35575 = G__35618;
chunk__35000_35576 = G__35619;
count__35001_35577 = G__35620;
i__35002_35578 = G__35621;
continue;
} else {
var vec__35065_35622 = cljs.core.first(seq__34993_35616__$1);
var orig_type_35623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35065_35622,(0),null);
var f_35624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35065_35622,(1),null);
var seq__34994_35625 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35623,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35623,cljs.core.identity])));
var chunk__34996_35626 = null;
var count__34997_35627 = (0);
var i__34998_35628 = (0);
while(true){
if((i__34998_35628 < count__34997_35627)){
var vec__35077_35629 = chunk__34996_35626.cljs$core$IIndexed$_nth$arity$2(null,i__34998_35628);
var actual_type_35630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35077_35629,(0),null);
var __35631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35077_35629,(1),null);
var keys_35632 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35574,actual_type_35630,f_35624], null);
var canonical_f_35633 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35573),keys_35632);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35573,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35632], 0));

if(cljs.core.truth_(elem_35573.removeEventListener)){
elem_35573.removeEventListener(cljs.core.name(actual_type_35630),canonical_f_35633);
} else {
elem_35573.detachEvent(cljs.core.name(actual_type_35630),canonical_f_35633);
}


var G__35634 = seq__34994_35625;
var G__35635 = chunk__34996_35626;
var G__35636 = count__34997_35627;
var G__35637 = (i__34998_35628 + (1));
seq__34994_35625 = G__35634;
chunk__34996_35626 = G__35635;
count__34997_35627 = G__35636;
i__34998_35628 = G__35637;
continue;
} else {
var temp__5735__auto___35638__$1 = cljs.core.seq(seq__34994_35625);
if(temp__5735__auto___35638__$1){
var seq__34994_35639__$1 = temp__5735__auto___35638__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34994_35639__$1)){
var c__4609__auto___35640 = cljs.core.chunk_first(seq__34994_35639__$1);
var G__35641 = cljs.core.chunk_rest(seq__34994_35639__$1);
var G__35642 = c__4609__auto___35640;
var G__35643 = cljs.core.count(c__4609__auto___35640);
var G__35644 = (0);
seq__34994_35625 = G__35641;
chunk__34996_35626 = G__35642;
count__34997_35627 = G__35643;
i__34998_35628 = G__35644;
continue;
} else {
var vec__35082_35645 = cljs.core.first(seq__34994_35639__$1);
var actual_type_35646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35082_35645,(0),null);
var __35647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35082_35645,(1),null);
var keys_35648 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35574,actual_type_35646,f_35624], null);
var canonical_f_35649 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35573),keys_35648);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35573,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35648], 0));

if(cljs.core.truth_(elem_35573.removeEventListener)){
elem_35573.removeEventListener(cljs.core.name(actual_type_35646),canonical_f_35649);
} else {
elem_35573.detachEvent(cljs.core.name(actual_type_35646),canonical_f_35649);
}


var G__35650 = cljs.core.next(seq__34994_35639__$1);
var G__35651 = null;
var G__35652 = (0);
var G__35653 = (0);
seq__34994_35625 = G__35650;
chunk__34996_35626 = G__35651;
count__34997_35627 = G__35652;
i__34998_35628 = G__35653;
continue;
}
} else {
}
}
break;
}

var G__35654 = cljs.core.next(seq__34993_35616__$1);
var G__35655 = null;
var G__35656 = (0);
var G__35657 = (0);
seq__34993_35575 = G__35654;
chunk__35000_35576 = G__35655;
count__35001_35577 = G__35656;
i__35002_35578 = G__35657;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq34988){
var G__34989 = cljs.core.first(seq34988);
var seq34988__$1 = cljs.core.next(seq34988);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34989,seq34988__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35658 = arguments.length;
var i__4790__auto___35659 = (0);
while(true){
if((i__4790__auto___35659 < len__4789__auto___35658)){
args__4795__auto__.push((arguments[i__4790__auto___35659]));

var G__35660 = (i__4790__auto___35659 + (1));
i__4790__auto___35659 = G__35660;
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

var vec__35087_35661 = dommy.core.elem_and_selector(elem_sel);
var elem_35662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35087_35661,(0),null);
var selector_35663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35087_35661,(1),null);
var seq__35090_35664 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35091_35665 = null;
var count__35092_35666 = (0);
var i__35093_35667 = (0);
while(true){
if((i__35093_35667 < count__35092_35666)){
var vec__35104_35668 = chunk__35091_35665.cljs$core$IIndexed$_nth$arity$2(null,i__35093_35667);
var type_35669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35104_35668,(0),null);
var f_35670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35104_35668,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35669,((function (seq__35090_35664,chunk__35091_35665,count__35092_35666,i__35093_35667,vec__35104_35668,type_35669,f_35670,vec__35087_35661,elem_35662,selector_35663){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35669,dommy$core$this_fn], 0));

return (f_35670.cljs$core$IFn$_invoke$arity$1 ? f_35670.cljs$core$IFn$_invoke$arity$1(e) : f_35670.call(null,e));
});})(seq__35090_35664,chunk__35091_35665,count__35092_35666,i__35093_35667,vec__35104_35668,type_35669,f_35670,vec__35087_35661,elem_35662,selector_35663))
], 0));


var G__35671 = seq__35090_35664;
var G__35672 = chunk__35091_35665;
var G__35673 = count__35092_35666;
var G__35674 = (i__35093_35667 + (1));
seq__35090_35664 = G__35671;
chunk__35091_35665 = G__35672;
count__35092_35666 = G__35673;
i__35093_35667 = G__35674;
continue;
} else {
var temp__5735__auto___35675 = cljs.core.seq(seq__35090_35664);
if(temp__5735__auto___35675){
var seq__35090_35676__$1 = temp__5735__auto___35675;
if(cljs.core.chunked_seq_QMARK_(seq__35090_35676__$1)){
var c__4609__auto___35677 = cljs.core.chunk_first(seq__35090_35676__$1);
var G__35678 = cljs.core.chunk_rest(seq__35090_35676__$1);
var G__35679 = c__4609__auto___35677;
var G__35680 = cljs.core.count(c__4609__auto___35677);
var G__35681 = (0);
seq__35090_35664 = G__35678;
chunk__35091_35665 = G__35679;
count__35092_35666 = G__35680;
i__35093_35667 = G__35681;
continue;
} else {
var vec__35113_35682 = cljs.core.first(seq__35090_35676__$1);
var type_35683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35113_35682,(0),null);
var f_35684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35113_35682,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35683,((function (seq__35090_35664,chunk__35091_35665,count__35092_35666,i__35093_35667,vec__35113_35682,type_35683,f_35684,seq__35090_35676__$1,temp__5735__auto___35675,vec__35087_35661,elem_35662,selector_35663){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35683,dommy$core$this_fn], 0));

return (f_35684.cljs$core$IFn$_invoke$arity$1 ? f_35684.cljs$core$IFn$_invoke$arity$1(e) : f_35684.call(null,e));
});})(seq__35090_35664,chunk__35091_35665,count__35092_35666,i__35093_35667,vec__35113_35682,type_35683,f_35684,seq__35090_35676__$1,temp__5735__auto___35675,vec__35087_35661,elem_35662,selector_35663))
], 0));


var G__35685 = cljs.core.next(seq__35090_35676__$1);
var G__35686 = null;
var G__35687 = (0);
var G__35688 = (0);
seq__35090_35664 = G__35685;
chunk__35091_35665 = G__35686;
count__35092_35666 = G__35687;
i__35093_35667 = G__35688;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq35085){
var G__35086 = cljs.core.first(seq35085);
var seq35085__$1 = cljs.core.next(seq35085);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35086,seq35085__$1);
}));


//# sourceMappingURL=dommy.core.js.map
