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
var G__34739 = arguments.length;
switch (G__34739) {
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
var G__34741 = arguments.length;
switch (G__34741) {
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
var G__34744 = arguments.length;
switch (G__34744) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__34742_SHARP_){
return (!((p1__34742_SHARP_ === base)));
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
var len__4789__auto___35181 = arguments.length;
var i__4790__auto___35182 = (0);
while(true){
if((i__4790__auto___35182 < len__4789__auto___35181)){
args__4795__auto__.push((arguments[i__4790__auto___35182]));

var G__35183 = (i__4790__auto___35182 + (1));
i__4790__auto___35182 = G__35183;
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
var seq__34749_35184 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34750_35185 = null;
var count__34751_35186 = (0);
var i__34752_35187 = (0);
while(true){
if((i__34752_35187 < count__34751_35186)){
var vec__34759_35188 = chunk__34750_35185.cljs$core$IIndexed$_nth$arity$2(null,i__34752_35187);
var k_35189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34759_35188,(0),null);
var v_35190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34759_35188,(1),null);
style.setProperty(dommy.utils.as_str(k_35189),v_35190);


var G__35191 = seq__34749_35184;
var G__35192 = chunk__34750_35185;
var G__35193 = count__34751_35186;
var G__35194 = (i__34752_35187 + (1));
seq__34749_35184 = G__35191;
chunk__34750_35185 = G__35192;
count__34751_35186 = G__35193;
i__34752_35187 = G__35194;
continue;
} else {
var temp__5735__auto___35195 = cljs.core.seq(seq__34749_35184);
if(temp__5735__auto___35195){
var seq__34749_35196__$1 = temp__5735__auto___35195;
if(cljs.core.chunked_seq_QMARK_(seq__34749_35196__$1)){
var c__4609__auto___35197 = cljs.core.chunk_first(seq__34749_35196__$1);
var G__35198 = cljs.core.chunk_rest(seq__34749_35196__$1);
var G__35199 = c__4609__auto___35197;
var G__35200 = cljs.core.count(c__4609__auto___35197);
var G__35201 = (0);
seq__34749_35184 = G__35198;
chunk__34750_35185 = G__35199;
count__34751_35186 = G__35200;
i__34752_35187 = G__35201;
continue;
} else {
var vec__34762_35202 = cljs.core.first(seq__34749_35196__$1);
var k_35203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34762_35202,(0),null);
var v_35204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34762_35202,(1),null);
style.setProperty(dommy.utils.as_str(k_35203),v_35204);


var G__35205 = cljs.core.next(seq__34749_35196__$1);
var G__35206 = null;
var G__35207 = (0);
var G__35208 = (0);
seq__34749_35184 = G__35205;
chunk__34750_35185 = G__35206;
count__34751_35186 = G__35207;
i__34752_35187 = G__35208;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq34747){
var G__34748 = cljs.core.first(seq34747);
var seq34747__$1 = cljs.core.next(seq34747);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34748,seq34747__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35212 = arguments.length;
var i__4790__auto___35213 = (0);
while(true){
if((i__4790__auto___35213 < len__4789__auto___35212)){
args__4795__auto__.push((arguments[i__4790__auto___35213]));

var G__35214 = (i__4790__auto___35213 + (1));
i__4790__auto___35213 = G__35214;
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
var seq__34767_35215 = cljs.core.seq(keywords);
var chunk__34768_35216 = null;
var count__34769_35217 = (0);
var i__34770_35218 = (0);
while(true){
if((i__34770_35218 < count__34769_35217)){
var kw_35219 = chunk__34768_35216.cljs$core$IIndexed$_nth$arity$2(null,i__34770_35218);
style.removeProperty(dommy.utils.as_str(kw_35219));


var G__35220 = seq__34767_35215;
var G__35221 = chunk__34768_35216;
var G__35222 = count__34769_35217;
var G__35223 = (i__34770_35218 + (1));
seq__34767_35215 = G__35220;
chunk__34768_35216 = G__35221;
count__34769_35217 = G__35222;
i__34770_35218 = G__35223;
continue;
} else {
var temp__5735__auto___35224 = cljs.core.seq(seq__34767_35215);
if(temp__5735__auto___35224){
var seq__34767_35225__$1 = temp__5735__auto___35224;
if(cljs.core.chunked_seq_QMARK_(seq__34767_35225__$1)){
var c__4609__auto___35226 = cljs.core.chunk_first(seq__34767_35225__$1);
var G__35227 = cljs.core.chunk_rest(seq__34767_35225__$1);
var G__35228 = c__4609__auto___35226;
var G__35229 = cljs.core.count(c__4609__auto___35226);
var G__35230 = (0);
seq__34767_35215 = G__35227;
chunk__34768_35216 = G__35228;
count__34769_35217 = G__35229;
i__34770_35218 = G__35230;
continue;
} else {
var kw_35231 = cljs.core.first(seq__34767_35225__$1);
style.removeProperty(dommy.utils.as_str(kw_35231));


var G__35232 = cljs.core.next(seq__34767_35225__$1);
var G__35233 = null;
var G__35234 = (0);
var G__35235 = (0);
seq__34767_35215 = G__35232;
chunk__34768_35216 = G__35233;
count__34769_35217 = G__35234;
i__34770_35218 = G__35235;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq34765){
var G__34766 = cljs.core.first(seq34765);
var seq34765__$1 = cljs.core.next(seq34765);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34766,seq34765__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35237 = arguments.length;
var i__4790__auto___35238 = (0);
while(true){
if((i__4790__auto___35238 < len__4789__auto___35237)){
args__4795__auto__.push((arguments[i__4790__auto___35238]));

var G__35239 = (i__4790__auto___35238 + (1));
i__4790__auto___35238 = G__35239;
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

var seq__34774_35240 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34775_35241 = null;
var count__34776_35242 = (0);
var i__34777_35243 = (0);
while(true){
if((i__34777_35243 < count__34776_35242)){
var vec__34784_35245 = chunk__34775_35241.cljs$core$IIndexed$_nth$arity$2(null,i__34777_35243);
var k_35246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34784_35245,(0),null);
var v_35247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34784_35245,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35246,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35247),"px"].join('')], 0));


var G__35248 = seq__34774_35240;
var G__35249 = chunk__34775_35241;
var G__35250 = count__34776_35242;
var G__35251 = (i__34777_35243 + (1));
seq__34774_35240 = G__35248;
chunk__34775_35241 = G__35249;
count__34776_35242 = G__35250;
i__34777_35243 = G__35251;
continue;
} else {
var temp__5735__auto___35252 = cljs.core.seq(seq__34774_35240);
if(temp__5735__auto___35252){
var seq__34774_35253__$1 = temp__5735__auto___35252;
if(cljs.core.chunked_seq_QMARK_(seq__34774_35253__$1)){
var c__4609__auto___35254 = cljs.core.chunk_first(seq__34774_35253__$1);
var G__35255 = cljs.core.chunk_rest(seq__34774_35253__$1);
var G__35256 = c__4609__auto___35254;
var G__35257 = cljs.core.count(c__4609__auto___35254);
var G__35258 = (0);
seq__34774_35240 = G__35255;
chunk__34775_35241 = G__35256;
count__34776_35242 = G__35257;
i__34777_35243 = G__35258;
continue;
} else {
var vec__34787_35259 = cljs.core.first(seq__34774_35253__$1);
var k_35260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34787_35259,(0),null);
var v_35261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34787_35259,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35260,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35261),"px"].join('')], 0));


var G__35262 = cljs.core.next(seq__34774_35253__$1);
var G__35263 = null;
var G__35264 = (0);
var G__35265 = (0);
seq__34774_35240 = G__35262;
chunk__34775_35241 = G__35263;
count__34776_35242 = G__35264;
i__34777_35243 = G__35265;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq34772){
var G__34773 = cljs.core.first(seq34772);
var seq34772__$1 = cljs.core.next(seq34772);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34773,seq34772__$1);
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
var G__34795 = arguments.length;
switch (G__34795) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35267 = arguments.length;
var i__4790__auto___35268 = (0);
while(true){
if((i__4790__auto___35268 < len__4789__auto___35267)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35268]));

var G__35269 = (i__4790__auto___35268 + (1));
i__4790__auto___35268 = G__35269;
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
var G__34796 = elem;
(G__34796[k__$1] = v);

return G__34796;
} else {
var G__34797 = elem;
G__34797.setAttribute(k__$1,v);

return G__34797;
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

var seq__34798_35270 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__34799_35271 = null;
var count__34800_35272 = (0);
var i__34801_35273 = (0);
while(true){
if((i__34801_35273 < count__34800_35272)){
var vec__34808_35274 = chunk__34799_35271.cljs$core$IIndexed$_nth$arity$2(null,i__34801_35273);
var k_35275__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34808_35274,(0),null);
var v_35276__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34808_35274,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35275__$1,v_35276__$1);


var G__35277 = seq__34798_35270;
var G__35278 = chunk__34799_35271;
var G__35279 = count__34800_35272;
var G__35280 = (i__34801_35273 + (1));
seq__34798_35270 = G__35277;
chunk__34799_35271 = G__35278;
count__34800_35272 = G__35279;
i__34801_35273 = G__35280;
continue;
} else {
var temp__5735__auto___35281 = cljs.core.seq(seq__34798_35270);
if(temp__5735__auto___35281){
var seq__34798_35282__$1 = temp__5735__auto___35281;
if(cljs.core.chunked_seq_QMARK_(seq__34798_35282__$1)){
var c__4609__auto___35283 = cljs.core.chunk_first(seq__34798_35282__$1);
var G__35284 = cljs.core.chunk_rest(seq__34798_35282__$1);
var G__35285 = c__4609__auto___35283;
var G__35286 = cljs.core.count(c__4609__auto___35283);
var G__35287 = (0);
seq__34798_35270 = G__35284;
chunk__34799_35271 = G__35285;
count__34800_35272 = G__35286;
i__34801_35273 = G__35287;
continue;
} else {
var vec__34811_35288 = cljs.core.first(seq__34798_35282__$1);
var k_35289__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34811_35288,(0),null);
var v_35290__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34811_35288,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35289__$1,v_35290__$1);


var G__35291 = cljs.core.next(seq__34798_35282__$1);
var G__35292 = null;
var G__35293 = (0);
var G__35294 = (0);
seq__34798_35270 = G__35291;
chunk__34799_35271 = G__35292;
count__34800_35272 = G__35293;
i__34801_35273 = G__35294;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq34791){
var G__34792 = cljs.core.first(seq34791);
var seq34791__$1 = cljs.core.next(seq34791);
var G__34793 = cljs.core.first(seq34791__$1);
var seq34791__$2 = cljs.core.next(seq34791__$1);
var G__34794 = cljs.core.first(seq34791__$2);
var seq34791__$3 = cljs.core.next(seq34791__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34792,G__34793,G__34794,seq34791__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__34818 = arguments.length;
switch (G__34818) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35296 = arguments.length;
var i__4790__auto___35297 = (0);
while(true){
if((i__4790__auto___35297 < len__4789__auto___35296)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35297]));

var G__35298 = (i__4790__auto___35297 + (1));
i__4790__auto___35297 = G__35298;
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
var k_35299__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__34819 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__34819.cljs$core$IFn$_invoke$arity$1 ? fexpr__34819.cljs$core$IFn$_invoke$arity$1(k_35299__$1) : fexpr__34819.call(null,k_35299__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_35299__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__34820_35300 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__34821_35301 = null;
var count__34822_35302 = (0);
var i__34823_35303 = (0);
while(true){
if((i__34823_35303 < count__34822_35302)){
var k_35304__$1 = chunk__34821_35301.cljs$core$IIndexed$_nth$arity$2(null,i__34823_35303);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35304__$1);


var G__35305 = seq__34820_35300;
var G__35306 = chunk__34821_35301;
var G__35307 = count__34822_35302;
var G__35308 = (i__34823_35303 + (1));
seq__34820_35300 = G__35305;
chunk__34821_35301 = G__35306;
count__34822_35302 = G__35307;
i__34823_35303 = G__35308;
continue;
} else {
var temp__5735__auto___35309 = cljs.core.seq(seq__34820_35300);
if(temp__5735__auto___35309){
var seq__34820_35310__$1 = temp__5735__auto___35309;
if(cljs.core.chunked_seq_QMARK_(seq__34820_35310__$1)){
var c__4609__auto___35311 = cljs.core.chunk_first(seq__34820_35310__$1);
var G__35312 = cljs.core.chunk_rest(seq__34820_35310__$1);
var G__35313 = c__4609__auto___35311;
var G__35314 = cljs.core.count(c__4609__auto___35311);
var G__35315 = (0);
seq__34820_35300 = G__35312;
chunk__34821_35301 = G__35313;
count__34822_35302 = G__35314;
i__34823_35303 = G__35315;
continue;
} else {
var k_35316__$1 = cljs.core.first(seq__34820_35310__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35316__$1);


var G__35317 = cljs.core.next(seq__34820_35310__$1);
var G__35318 = null;
var G__35319 = (0);
var G__35320 = (0);
seq__34820_35300 = G__35317;
chunk__34821_35301 = G__35318;
count__34822_35302 = G__35319;
i__34823_35303 = G__35320;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq34815){
var G__34816 = cljs.core.first(seq34815);
var seq34815__$1 = cljs.core.next(seq34815);
var G__34817 = cljs.core.first(seq34815__$1);
var seq34815__$2 = cljs.core.next(seq34815__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34816,G__34817,seq34815__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__34825 = arguments.length;
switch (G__34825) {
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
var G__34830 = arguments.length;
switch (G__34830) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35323 = arguments.length;
var i__4790__auto___35324 = (0);
while(true){
if((i__4790__auto___35324 < len__4789__auto___35323)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35324]));

var G__35325 = (i__4790__auto___35324 + (1));
i__4790__auto___35324 = G__35325;
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
var temp__5733__auto___35326 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35326)){
var class_list_35327 = temp__5733__auto___35326;
var seq__34831_35328 = cljs.core.seq(classes__$1);
var chunk__34832_35329 = null;
var count__34833_35330 = (0);
var i__34834_35331 = (0);
while(true){
if((i__34834_35331 < count__34833_35330)){
var c_35332 = chunk__34832_35329.cljs$core$IIndexed$_nth$arity$2(null,i__34834_35331);
class_list_35327.add(c_35332);


var G__35333 = seq__34831_35328;
var G__35334 = chunk__34832_35329;
var G__35335 = count__34833_35330;
var G__35336 = (i__34834_35331 + (1));
seq__34831_35328 = G__35333;
chunk__34832_35329 = G__35334;
count__34833_35330 = G__35335;
i__34834_35331 = G__35336;
continue;
} else {
var temp__5735__auto___35337 = cljs.core.seq(seq__34831_35328);
if(temp__5735__auto___35337){
var seq__34831_35338__$1 = temp__5735__auto___35337;
if(cljs.core.chunked_seq_QMARK_(seq__34831_35338__$1)){
var c__4609__auto___35339 = cljs.core.chunk_first(seq__34831_35338__$1);
var G__35340 = cljs.core.chunk_rest(seq__34831_35338__$1);
var G__35341 = c__4609__auto___35339;
var G__35342 = cljs.core.count(c__4609__auto___35339);
var G__35343 = (0);
seq__34831_35328 = G__35340;
chunk__34832_35329 = G__35341;
count__34833_35330 = G__35342;
i__34834_35331 = G__35343;
continue;
} else {
var c_35344 = cljs.core.first(seq__34831_35338__$1);
class_list_35327.add(c_35344);


var G__35345 = cljs.core.next(seq__34831_35338__$1);
var G__35346 = null;
var G__35347 = (0);
var G__35348 = (0);
seq__34831_35328 = G__35345;
chunk__34832_35329 = G__35346;
count__34833_35330 = G__35347;
i__34834_35331 = G__35348;
continue;
}
} else {
}
}
break;
}
} else {
var seq__34835_35349 = cljs.core.seq(classes__$1);
var chunk__34836_35350 = null;
var count__34837_35351 = (0);
var i__34838_35352 = (0);
while(true){
if((i__34838_35352 < count__34837_35351)){
var c_35353 = chunk__34836_35350.cljs$core$IIndexed$_nth$arity$2(null,i__34838_35352);
var class_name_35354 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35354,c_35353))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35354 === ""))?c_35353:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35354)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35353)].join('')));
}


var G__35355 = seq__34835_35349;
var G__35356 = chunk__34836_35350;
var G__35357 = count__34837_35351;
var G__35358 = (i__34838_35352 + (1));
seq__34835_35349 = G__35355;
chunk__34836_35350 = G__35356;
count__34837_35351 = G__35357;
i__34838_35352 = G__35358;
continue;
} else {
var temp__5735__auto___35359 = cljs.core.seq(seq__34835_35349);
if(temp__5735__auto___35359){
var seq__34835_35360__$1 = temp__5735__auto___35359;
if(cljs.core.chunked_seq_QMARK_(seq__34835_35360__$1)){
var c__4609__auto___35361 = cljs.core.chunk_first(seq__34835_35360__$1);
var G__35362 = cljs.core.chunk_rest(seq__34835_35360__$1);
var G__35363 = c__4609__auto___35361;
var G__35364 = cljs.core.count(c__4609__auto___35361);
var G__35365 = (0);
seq__34835_35349 = G__35362;
chunk__34836_35350 = G__35363;
count__34837_35351 = G__35364;
i__34838_35352 = G__35365;
continue;
} else {
var c_35366 = cljs.core.first(seq__34835_35360__$1);
var class_name_35367 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35367,c_35366))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35367 === ""))?c_35366:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35367)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35366)].join('')));
}


var G__35368 = cljs.core.next(seq__34835_35360__$1);
var G__35369 = null;
var G__35370 = (0);
var G__35371 = (0);
seq__34835_35349 = G__35368;
chunk__34836_35350 = G__35369;
count__34837_35351 = G__35370;
i__34838_35352 = G__35371;
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
var seq__34839_35372 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__34840_35373 = null;
var count__34841_35374 = (0);
var i__34842_35375 = (0);
while(true){
if((i__34842_35375 < count__34841_35374)){
var c_35376 = chunk__34840_35373.cljs$core$IIndexed$_nth$arity$2(null,i__34842_35375);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35376);


var G__35377 = seq__34839_35372;
var G__35378 = chunk__34840_35373;
var G__35379 = count__34841_35374;
var G__35380 = (i__34842_35375 + (1));
seq__34839_35372 = G__35377;
chunk__34840_35373 = G__35378;
count__34841_35374 = G__35379;
i__34842_35375 = G__35380;
continue;
} else {
var temp__5735__auto___35381 = cljs.core.seq(seq__34839_35372);
if(temp__5735__auto___35381){
var seq__34839_35382__$1 = temp__5735__auto___35381;
if(cljs.core.chunked_seq_QMARK_(seq__34839_35382__$1)){
var c__4609__auto___35383 = cljs.core.chunk_first(seq__34839_35382__$1);
var G__35384 = cljs.core.chunk_rest(seq__34839_35382__$1);
var G__35385 = c__4609__auto___35383;
var G__35386 = cljs.core.count(c__4609__auto___35383);
var G__35387 = (0);
seq__34839_35372 = G__35384;
chunk__34840_35373 = G__35385;
count__34841_35374 = G__35386;
i__34842_35375 = G__35387;
continue;
} else {
var c_35388 = cljs.core.first(seq__34839_35382__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35388);


var G__35389 = cljs.core.next(seq__34839_35382__$1);
var G__35390 = null;
var G__35391 = (0);
var G__35392 = (0);
seq__34839_35372 = G__35389;
chunk__34840_35373 = G__35390;
count__34841_35374 = G__35391;
i__34842_35375 = G__35392;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq34827){
var G__34828 = cljs.core.first(seq34827);
var seq34827__$1 = cljs.core.next(seq34827);
var G__34829 = cljs.core.first(seq34827__$1);
var seq34827__$2 = cljs.core.next(seq34827__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34828,G__34829,seq34827__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__34847 = arguments.length;
switch (G__34847) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35394 = arguments.length;
var i__4790__auto___35395 = (0);
while(true){
if((i__4790__auto___35395 < len__4789__auto___35394)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35395]));

var G__35396 = (i__4790__auto___35395 + (1));
i__4790__auto___35395 = G__35396;
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
var temp__5733__auto___35397 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35397)){
var class_list_35398 = temp__5733__auto___35397;
class_list_35398.remove(c__$1);
} else {
var class_name_35399 = dommy.core.class$(elem);
var new_class_name_35400 = dommy.utils.remove_class_str(class_name_35399,c__$1);
if((class_name_35399 === new_class_name_35400)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_35400);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__34848 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__34849 = null;
var count__34850 = (0);
var i__34851 = (0);
while(true){
if((i__34851 < count__34850)){
var c = chunk__34849.cljs$core$IIndexed$_nth$arity$2(null,i__34851);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35402 = seq__34848;
var G__35403 = chunk__34849;
var G__35404 = count__34850;
var G__35405 = (i__34851 + (1));
seq__34848 = G__35402;
chunk__34849 = G__35403;
count__34850 = G__35404;
i__34851 = G__35405;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34848);
if(temp__5735__auto__){
var seq__34848__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34848__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34848__$1);
var G__35407 = cljs.core.chunk_rest(seq__34848__$1);
var G__35408 = c__4609__auto__;
var G__35409 = cljs.core.count(c__4609__auto__);
var G__35410 = (0);
seq__34848 = G__35407;
chunk__34849 = G__35408;
count__34850 = G__35409;
i__34851 = G__35410;
continue;
} else {
var c = cljs.core.first(seq__34848__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35411 = cljs.core.next(seq__34848__$1);
var G__35412 = null;
var G__35413 = (0);
var G__35414 = (0);
seq__34848 = G__35411;
chunk__34849 = G__35412;
count__34850 = G__35413;
i__34851 = G__35414;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq34844){
var G__34845 = cljs.core.first(seq34844);
var seq34844__$1 = cljs.core.next(seq34844);
var G__34846 = cljs.core.first(seq34844__$1);
var seq34844__$2 = cljs.core.next(seq34844__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34845,G__34846,seq34844__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__34853 = arguments.length;
switch (G__34853) {
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
var temp__5733__auto___35416 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35416)){
var class_list_35417 = temp__5733__auto___35416;
class_list_35417.toggle(c__$1);
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
var G__34855 = arguments.length;
switch (G__34855) {
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
var G__34857 = arguments.length;
switch (G__34857) {
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
var G__34863 = arguments.length;
switch (G__34863) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35423 = arguments.length;
var i__4790__auto___35424 = (0);
while(true){
if((i__4790__auto___35424 < len__4789__auto___35423)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35424]));

var G__35425 = (i__4790__auto___35424 + (1));
i__4790__auto___35424 = G__35425;
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
var G__34864 = parent;
G__34864.appendChild(child);

return G__34864;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__34865_35428 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34866_35429 = null;
var count__34867_35430 = (0);
var i__34868_35431 = (0);
while(true){
if((i__34868_35431 < count__34867_35430)){
var c_35432 = chunk__34866_35429.cljs$core$IIndexed$_nth$arity$2(null,i__34868_35431);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35432);


var G__35433 = seq__34865_35428;
var G__35434 = chunk__34866_35429;
var G__35435 = count__34867_35430;
var G__35436 = (i__34868_35431 + (1));
seq__34865_35428 = G__35433;
chunk__34866_35429 = G__35434;
count__34867_35430 = G__35435;
i__34868_35431 = G__35436;
continue;
} else {
var temp__5735__auto___35437 = cljs.core.seq(seq__34865_35428);
if(temp__5735__auto___35437){
var seq__34865_35438__$1 = temp__5735__auto___35437;
if(cljs.core.chunked_seq_QMARK_(seq__34865_35438__$1)){
var c__4609__auto___35439 = cljs.core.chunk_first(seq__34865_35438__$1);
var G__35440 = cljs.core.chunk_rest(seq__34865_35438__$1);
var G__35441 = c__4609__auto___35439;
var G__35442 = cljs.core.count(c__4609__auto___35439);
var G__35443 = (0);
seq__34865_35428 = G__35440;
chunk__34866_35429 = G__35441;
count__34867_35430 = G__35442;
i__34868_35431 = G__35443;
continue;
} else {
var c_35444 = cljs.core.first(seq__34865_35438__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35444);


var G__35445 = cljs.core.next(seq__34865_35438__$1);
var G__35446 = null;
var G__35447 = (0);
var G__35448 = (0);
seq__34865_35428 = G__35445;
chunk__34866_35429 = G__35446;
count__34867_35430 = G__35447;
i__34868_35431 = G__35448;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq34860){
var G__34861 = cljs.core.first(seq34860);
var seq34860__$1 = cljs.core.next(seq34860);
var G__34862 = cljs.core.first(seq34860__$1);
var seq34860__$2 = cljs.core.next(seq34860__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34861,G__34862,seq34860__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__34875 = arguments.length;
switch (G__34875) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35450 = arguments.length;
var i__4790__auto___35451 = (0);
while(true){
if((i__4790__auto___35451 < len__4789__auto___35450)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35451]));

var G__35452 = (i__4790__auto___35451 + (1));
i__4790__auto___35451 = G__35452;
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
var G__34876 = parent;
G__34876.insertBefore(child,parent.firstChild);

return G__34876;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__34877_35453 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34878_35454 = null;
var count__34879_35455 = (0);
var i__34880_35456 = (0);
while(true){
if((i__34880_35456 < count__34879_35455)){
var c_35457 = chunk__34878_35454.cljs$core$IIndexed$_nth$arity$2(null,i__34880_35456);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35457);


var G__35458 = seq__34877_35453;
var G__35459 = chunk__34878_35454;
var G__35460 = count__34879_35455;
var G__35461 = (i__34880_35456 + (1));
seq__34877_35453 = G__35458;
chunk__34878_35454 = G__35459;
count__34879_35455 = G__35460;
i__34880_35456 = G__35461;
continue;
} else {
var temp__5735__auto___35462 = cljs.core.seq(seq__34877_35453);
if(temp__5735__auto___35462){
var seq__34877_35463__$1 = temp__5735__auto___35462;
if(cljs.core.chunked_seq_QMARK_(seq__34877_35463__$1)){
var c__4609__auto___35464 = cljs.core.chunk_first(seq__34877_35463__$1);
var G__35465 = cljs.core.chunk_rest(seq__34877_35463__$1);
var G__35466 = c__4609__auto___35464;
var G__35467 = cljs.core.count(c__4609__auto___35464);
var G__35468 = (0);
seq__34877_35453 = G__35465;
chunk__34878_35454 = G__35466;
count__34879_35455 = G__35467;
i__34880_35456 = G__35468;
continue;
} else {
var c_35469 = cljs.core.first(seq__34877_35463__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35469);


var G__35470 = cljs.core.next(seq__34877_35463__$1);
var G__35471 = null;
var G__35472 = (0);
var G__35473 = (0);
seq__34877_35453 = G__35470;
chunk__34878_35454 = G__35471;
count__34879_35455 = G__35472;
i__34880_35456 = G__35473;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq34872){
var G__34873 = cljs.core.first(seq34872);
var seq34872__$1 = cljs.core.next(seq34872);
var G__34874 = cljs.core.first(seq34872__$1);
var seq34872__$2 = cljs.core.next(seq34872__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34873,G__34874,seq34872__$2);
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
var temp__5733__auto___35474 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___35474)){
var next_35475 = temp__5733__auto___35474;
dommy.core.insert_before_BANG_(elem,next_35475);
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
var G__34882 = arguments.length;
switch (G__34882) {
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
var G__34883 = p;
G__34883.removeChild(elem);

return G__34883;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34884){
var vec__34885 = p__34884;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34885,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34885,(1),null);
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
var len__4789__auto___35477 = arguments.length;
var i__4790__auto___35478 = (0);
while(true){
if((i__4790__auto___35478 < len__4789__auto___35477)){
args__4795__auto__.push((arguments[i__4790__auto___35478]));

var G__35479 = (i__4790__auto___35478 + (1));
i__4790__auto___35478 = G__35479;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq34888){
var G__34889 = cljs.core.first(seq34888);
var seq34888__$1 = cljs.core.next(seq34888);
var G__34890 = cljs.core.first(seq34888__$1);
var seq34888__$2 = cljs.core.next(seq34888__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34889,G__34890,seq34888__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__34891 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__34891.cljs$core$IFn$_invoke$arity$1 ? fexpr__34891.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__34891.call(null,elem_sel));
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
var len__4789__auto___35480 = arguments.length;
var i__4790__auto___35481 = (0);
while(true){
if((i__4790__auto___35481 < len__4789__auto___35480)){
args__4795__auto__.push((arguments[i__4790__auto___35481]));

var G__35482 = (i__4790__auto___35481 + (1));
i__4790__auto___35481 = G__35482;
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

var vec__34894_35483 = dommy.core.elem_and_selector(elem_sel);
var elem_35484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34894_35483,(0),null);
var selector_35485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34894_35483,(1),null);
var seq__34897_35486 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__34904_35487 = null;
var count__34905_35488 = (0);
var i__34906_35489 = (0);
while(true){
if((i__34906_35489 < count__34905_35488)){
var vec__34962_35490 = chunk__34904_35487.cljs$core$IIndexed$_nth$arity$2(null,i__34906_35489);
var orig_type_35491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34962_35490,(0),null);
var f_35492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34962_35490,(1),null);
var seq__34907_35493 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35491,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35491,cljs.core.identity])));
var chunk__34909_35494 = null;
var count__34910_35495 = (0);
var i__34911_35496 = (0);
while(true){
if((i__34911_35496 < count__34910_35495)){
var vec__34975_35497 = chunk__34909_35494.cljs$core$IIndexed$_nth$arity$2(null,i__34911_35496);
var actual_type_35498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34975_35497,(0),null);
var factory_35499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34975_35497,(1),null);
var canonical_f_35500 = (function (){var G__34979 = (factory_35499.cljs$core$IFn$_invoke$arity$1 ? factory_35499.cljs$core$IFn$_invoke$arity$1(f_35492) : factory_35499.call(null,f_35492));
var fexpr__34978 = (cljs.core.truth_(selector_35485)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35484,selector_35485):cljs.core.identity);
return (fexpr__34978.cljs$core$IFn$_invoke$arity$1 ? fexpr__34978.cljs$core$IFn$_invoke$arity$1(G__34979) : fexpr__34978.call(null,G__34979));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35484,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35485,actual_type_35498,f_35492], null),canonical_f_35500], 0));

if(cljs.core.truth_(elem_35484.addEventListener)){
elem_35484.addEventListener(cljs.core.name(actual_type_35498),canonical_f_35500);
} else {
elem_35484.attachEvent(cljs.core.name(actual_type_35498),canonical_f_35500);
}


var G__35501 = seq__34907_35493;
var G__35502 = chunk__34909_35494;
var G__35503 = count__34910_35495;
var G__35504 = (i__34911_35496 + (1));
seq__34907_35493 = G__35501;
chunk__34909_35494 = G__35502;
count__34910_35495 = G__35503;
i__34911_35496 = G__35504;
continue;
} else {
var temp__5735__auto___35505 = cljs.core.seq(seq__34907_35493);
if(temp__5735__auto___35505){
var seq__34907_35506__$1 = temp__5735__auto___35505;
if(cljs.core.chunked_seq_QMARK_(seq__34907_35506__$1)){
var c__4609__auto___35507 = cljs.core.chunk_first(seq__34907_35506__$1);
var G__35508 = cljs.core.chunk_rest(seq__34907_35506__$1);
var G__35509 = c__4609__auto___35507;
var G__35510 = cljs.core.count(c__4609__auto___35507);
var G__35511 = (0);
seq__34907_35493 = G__35508;
chunk__34909_35494 = G__35509;
count__34910_35495 = G__35510;
i__34911_35496 = G__35511;
continue;
} else {
var vec__34980_35513 = cljs.core.first(seq__34907_35506__$1);
var actual_type_35514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34980_35513,(0),null);
var factory_35515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34980_35513,(1),null);
var canonical_f_35516 = (function (){var G__34984 = (factory_35515.cljs$core$IFn$_invoke$arity$1 ? factory_35515.cljs$core$IFn$_invoke$arity$1(f_35492) : factory_35515.call(null,f_35492));
var fexpr__34983 = (cljs.core.truth_(selector_35485)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35484,selector_35485):cljs.core.identity);
return (fexpr__34983.cljs$core$IFn$_invoke$arity$1 ? fexpr__34983.cljs$core$IFn$_invoke$arity$1(G__34984) : fexpr__34983.call(null,G__34984));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35484,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35485,actual_type_35514,f_35492], null),canonical_f_35516], 0));

if(cljs.core.truth_(elem_35484.addEventListener)){
elem_35484.addEventListener(cljs.core.name(actual_type_35514),canonical_f_35516);
} else {
elem_35484.attachEvent(cljs.core.name(actual_type_35514),canonical_f_35516);
}


var G__35518 = cljs.core.next(seq__34907_35506__$1);
var G__35519 = null;
var G__35520 = (0);
var G__35521 = (0);
seq__34907_35493 = G__35518;
chunk__34909_35494 = G__35519;
count__34910_35495 = G__35520;
i__34911_35496 = G__35521;
continue;
}
} else {
}
}
break;
}

var G__35522 = seq__34897_35486;
var G__35523 = chunk__34904_35487;
var G__35524 = count__34905_35488;
var G__35525 = (i__34906_35489 + (1));
seq__34897_35486 = G__35522;
chunk__34904_35487 = G__35523;
count__34905_35488 = G__35524;
i__34906_35489 = G__35525;
continue;
} else {
var temp__5735__auto___35526 = cljs.core.seq(seq__34897_35486);
if(temp__5735__auto___35526){
var seq__34897_35527__$1 = temp__5735__auto___35526;
if(cljs.core.chunked_seq_QMARK_(seq__34897_35527__$1)){
var c__4609__auto___35528 = cljs.core.chunk_first(seq__34897_35527__$1);
var G__35529 = cljs.core.chunk_rest(seq__34897_35527__$1);
var G__35530 = c__4609__auto___35528;
var G__35531 = cljs.core.count(c__4609__auto___35528);
var G__35532 = (0);
seq__34897_35486 = G__35529;
chunk__34904_35487 = G__35530;
count__34905_35488 = G__35531;
i__34906_35489 = G__35532;
continue;
} else {
var vec__34985_35533 = cljs.core.first(seq__34897_35527__$1);
var orig_type_35534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34985_35533,(0),null);
var f_35535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34985_35533,(1),null);
var seq__34898_35537 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35534,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35534,cljs.core.identity])));
var chunk__34900_35538 = null;
var count__34901_35539 = (0);
var i__34902_35540 = (0);
while(true){
if((i__34902_35540 < count__34901_35539)){
var vec__35001_35541 = chunk__34900_35538.cljs$core$IIndexed$_nth$arity$2(null,i__34902_35540);
var actual_type_35542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35001_35541,(0),null);
var factory_35543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35001_35541,(1),null);
var canonical_f_35545 = (function (){var G__35005 = (factory_35543.cljs$core$IFn$_invoke$arity$1 ? factory_35543.cljs$core$IFn$_invoke$arity$1(f_35535) : factory_35543.call(null,f_35535));
var fexpr__35004 = (cljs.core.truth_(selector_35485)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35484,selector_35485):cljs.core.identity);
return (fexpr__35004.cljs$core$IFn$_invoke$arity$1 ? fexpr__35004.cljs$core$IFn$_invoke$arity$1(G__35005) : fexpr__35004.call(null,G__35005));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35484,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35485,actual_type_35542,f_35535], null),canonical_f_35545], 0));

if(cljs.core.truth_(elem_35484.addEventListener)){
elem_35484.addEventListener(cljs.core.name(actual_type_35542),canonical_f_35545);
} else {
elem_35484.attachEvent(cljs.core.name(actual_type_35542),canonical_f_35545);
}


var G__35548 = seq__34898_35537;
var G__35549 = chunk__34900_35538;
var G__35550 = count__34901_35539;
var G__35551 = (i__34902_35540 + (1));
seq__34898_35537 = G__35548;
chunk__34900_35538 = G__35549;
count__34901_35539 = G__35550;
i__34902_35540 = G__35551;
continue;
} else {
var temp__5735__auto___35552__$1 = cljs.core.seq(seq__34898_35537);
if(temp__5735__auto___35552__$1){
var seq__34898_35553__$1 = temp__5735__auto___35552__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34898_35553__$1)){
var c__4609__auto___35554 = cljs.core.chunk_first(seq__34898_35553__$1);
var G__35555 = cljs.core.chunk_rest(seq__34898_35553__$1);
var G__35556 = c__4609__auto___35554;
var G__35557 = cljs.core.count(c__4609__auto___35554);
var G__35558 = (0);
seq__34898_35537 = G__35555;
chunk__34900_35538 = G__35556;
count__34901_35539 = G__35557;
i__34902_35540 = G__35558;
continue;
} else {
var vec__35006_35559 = cljs.core.first(seq__34898_35553__$1);
var actual_type_35560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35006_35559,(0),null);
var factory_35561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35006_35559,(1),null);
var canonical_f_35567 = (function (){var G__35010 = (factory_35561.cljs$core$IFn$_invoke$arity$1 ? factory_35561.cljs$core$IFn$_invoke$arity$1(f_35535) : factory_35561.call(null,f_35535));
var fexpr__35009 = (cljs.core.truth_(selector_35485)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35484,selector_35485):cljs.core.identity);
return (fexpr__35009.cljs$core$IFn$_invoke$arity$1 ? fexpr__35009.cljs$core$IFn$_invoke$arity$1(G__35010) : fexpr__35009.call(null,G__35010));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35484,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35485,actual_type_35560,f_35535], null),canonical_f_35567], 0));

if(cljs.core.truth_(elem_35484.addEventListener)){
elem_35484.addEventListener(cljs.core.name(actual_type_35560),canonical_f_35567);
} else {
elem_35484.attachEvent(cljs.core.name(actual_type_35560),canonical_f_35567);
}


var G__35568 = cljs.core.next(seq__34898_35553__$1);
var G__35569 = null;
var G__35570 = (0);
var G__35571 = (0);
seq__34898_35537 = G__35568;
chunk__34900_35538 = G__35569;
count__34901_35539 = G__35570;
i__34902_35540 = G__35571;
continue;
}
} else {
}
}
break;
}

var G__35572 = cljs.core.next(seq__34897_35527__$1);
var G__35573 = null;
var G__35574 = (0);
var G__35575 = (0);
seq__34897_35486 = G__35572;
chunk__34904_35487 = G__35573;
count__34905_35488 = G__35574;
i__34906_35489 = G__35575;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq34892){
var G__34893 = cljs.core.first(seq34892);
var seq34892__$1 = cljs.core.next(seq34892);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34893,seq34892__$1);
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
var len__4789__auto___35578 = arguments.length;
var i__4790__auto___35579 = (0);
while(true){
if((i__4790__auto___35579 < len__4789__auto___35578)){
args__4795__auto__.push((arguments[i__4790__auto___35579]));

var G__35580 = (i__4790__auto___35579 + (1));
i__4790__auto___35579 = G__35580;
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

var vec__35013_35583 = dommy.core.elem_and_selector(elem_sel);
var elem_35584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35013_35583,(0),null);
var selector_35585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35013_35583,(1),null);
var seq__35016_35587 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35023_35588 = null;
var count__35024_35589 = (0);
var i__35025_35590 = (0);
while(true){
if((i__35025_35590 < count__35024_35589)){
var vec__35073_35592 = chunk__35023_35588.cljs$core$IIndexed$_nth$arity$2(null,i__35025_35590);
var orig_type_35593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35073_35592,(0),null);
var f_35594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35073_35592,(1),null);
var seq__35026_35595 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35593,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35593,cljs.core.identity])));
var chunk__35028_35596 = null;
var count__35029_35597 = (0);
var i__35030_35598 = (0);
while(true){
if((i__35030_35598 < count__35029_35597)){
var vec__35082_35599 = chunk__35028_35596.cljs$core$IIndexed$_nth$arity$2(null,i__35030_35598);
var actual_type_35600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35082_35599,(0),null);
var __35601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35082_35599,(1),null);
var keys_35605 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35585,actual_type_35600,f_35594], null);
var canonical_f_35606 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35584),keys_35605);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35584,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35605], 0));

if(cljs.core.truth_(elem_35584.removeEventListener)){
elem_35584.removeEventListener(cljs.core.name(actual_type_35600),canonical_f_35606);
} else {
elem_35584.detachEvent(cljs.core.name(actual_type_35600),canonical_f_35606);
}


var G__35609 = seq__35026_35595;
var G__35610 = chunk__35028_35596;
var G__35611 = count__35029_35597;
var G__35612 = (i__35030_35598 + (1));
seq__35026_35595 = G__35609;
chunk__35028_35596 = G__35610;
count__35029_35597 = G__35611;
i__35030_35598 = G__35612;
continue;
} else {
var temp__5735__auto___35613 = cljs.core.seq(seq__35026_35595);
if(temp__5735__auto___35613){
var seq__35026_35614__$1 = temp__5735__auto___35613;
if(cljs.core.chunked_seq_QMARK_(seq__35026_35614__$1)){
var c__4609__auto___35616 = cljs.core.chunk_first(seq__35026_35614__$1);
var G__35617 = cljs.core.chunk_rest(seq__35026_35614__$1);
var G__35618 = c__4609__auto___35616;
var G__35619 = cljs.core.count(c__4609__auto___35616);
var G__35620 = (0);
seq__35026_35595 = G__35617;
chunk__35028_35596 = G__35618;
count__35029_35597 = G__35619;
i__35030_35598 = G__35620;
continue;
} else {
var vec__35085_35625 = cljs.core.first(seq__35026_35614__$1);
var actual_type_35626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35085_35625,(0),null);
var __35627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35085_35625,(1),null);
var keys_35628 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35585,actual_type_35626,f_35594], null);
var canonical_f_35629 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35584),keys_35628);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35584,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35628], 0));

if(cljs.core.truth_(elem_35584.removeEventListener)){
elem_35584.removeEventListener(cljs.core.name(actual_type_35626),canonical_f_35629);
} else {
elem_35584.detachEvent(cljs.core.name(actual_type_35626),canonical_f_35629);
}


var G__35630 = cljs.core.next(seq__35026_35614__$1);
var G__35631 = null;
var G__35632 = (0);
var G__35633 = (0);
seq__35026_35595 = G__35630;
chunk__35028_35596 = G__35631;
count__35029_35597 = G__35632;
i__35030_35598 = G__35633;
continue;
}
} else {
}
}
break;
}

var G__35634 = seq__35016_35587;
var G__35635 = chunk__35023_35588;
var G__35636 = count__35024_35589;
var G__35637 = (i__35025_35590 + (1));
seq__35016_35587 = G__35634;
chunk__35023_35588 = G__35635;
count__35024_35589 = G__35636;
i__35025_35590 = G__35637;
continue;
} else {
var temp__5735__auto___35638 = cljs.core.seq(seq__35016_35587);
if(temp__5735__auto___35638){
var seq__35016_35639__$1 = temp__5735__auto___35638;
if(cljs.core.chunked_seq_QMARK_(seq__35016_35639__$1)){
var c__4609__auto___35640 = cljs.core.chunk_first(seq__35016_35639__$1);
var G__35641 = cljs.core.chunk_rest(seq__35016_35639__$1);
var G__35642 = c__4609__auto___35640;
var G__35643 = cljs.core.count(c__4609__auto___35640);
var G__35644 = (0);
seq__35016_35587 = G__35641;
chunk__35023_35588 = G__35642;
count__35024_35589 = G__35643;
i__35025_35590 = G__35644;
continue;
} else {
var vec__35088_35645 = cljs.core.first(seq__35016_35639__$1);
var orig_type_35646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35088_35645,(0),null);
var f_35647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35088_35645,(1),null);
var seq__35017_35648 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35646,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35646,cljs.core.identity])));
var chunk__35019_35649 = null;
var count__35020_35650 = (0);
var i__35021_35651 = (0);
while(true){
if((i__35021_35651 < count__35020_35650)){
var vec__35097_35652 = chunk__35019_35649.cljs$core$IIndexed$_nth$arity$2(null,i__35021_35651);
var actual_type_35653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35097_35652,(0),null);
var __35654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35097_35652,(1),null);
var keys_35655 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35585,actual_type_35653,f_35647], null);
var canonical_f_35656 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35584),keys_35655);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35584,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35655], 0));

if(cljs.core.truth_(elem_35584.removeEventListener)){
elem_35584.removeEventListener(cljs.core.name(actual_type_35653),canonical_f_35656);
} else {
elem_35584.detachEvent(cljs.core.name(actual_type_35653),canonical_f_35656);
}


var G__35657 = seq__35017_35648;
var G__35658 = chunk__35019_35649;
var G__35659 = count__35020_35650;
var G__35660 = (i__35021_35651 + (1));
seq__35017_35648 = G__35657;
chunk__35019_35649 = G__35658;
count__35020_35650 = G__35659;
i__35021_35651 = G__35660;
continue;
} else {
var temp__5735__auto___35661__$1 = cljs.core.seq(seq__35017_35648);
if(temp__5735__auto___35661__$1){
var seq__35017_35662__$1 = temp__5735__auto___35661__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35017_35662__$1)){
var c__4609__auto___35663 = cljs.core.chunk_first(seq__35017_35662__$1);
var G__35664 = cljs.core.chunk_rest(seq__35017_35662__$1);
var G__35665 = c__4609__auto___35663;
var G__35666 = cljs.core.count(c__4609__auto___35663);
var G__35667 = (0);
seq__35017_35648 = G__35664;
chunk__35019_35649 = G__35665;
count__35020_35650 = G__35666;
i__35021_35651 = G__35667;
continue;
} else {
var vec__35102_35668 = cljs.core.first(seq__35017_35662__$1);
var actual_type_35669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35102_35668,(0),null);
var __35670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35102_35668,(1),null);
var keys_35671 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35585,actual_type_35669,f_35647], null);
var canonical_f_35672 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35584),keys_35671);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35584,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35671], 0));

if(cljs.core.truth_(elem_35584.removeEventListener)){
elem_35584.removeEventListener(cljs.core.name(actual_type_35669),canonical_f_35672);
} else {
elem_35584.detachEvent(cljs.core.name(actual_type_35669),canonical_f_35672);
}


var G__35673 = cljs.core.next(seq__35017_35662__$1);
var G__35674 = null;
var G__35675 = (0);
var G__35676 = (0);
seq__35017_35648 = G__35673;
chunk__35019_35649 = G__35674;
count__35020_35650 = G__35675;
i__35021_35651 = G__35676;
continue;
}
} else {
}
}
break;
}

var G__35677 = cljs.core.next(seq__35016_35639__$1);
var G__35678 = null;
var G__35679 = (0);
var G__35680 = (0);
seq__35016_35587 = G__35677;
chunk__35023_35588 = G__35678;
count__35024_35589 = G__35679;
i__35025_35590 = G__35680;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq35011){
var G__35012 = cljs.core.first(seq35011);
var seq35011__$1 = cljs.core.next(seq35011);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35012,seq35011__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35681 = arguments.length;
var i__4790__auto___35682 = (0);
while(true){
if((i__4790__auto___35682 < len__4789__auto___35681)){
args__4795__auto__.push((arguments[i__4790__auto___35682]));

var G__35683 = (i__4790__auto___35682 + (1));
i__4790__auto___35682 = G__35683;
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

var vec__35110_35684 = dommy.core.elem_and_selector(elem_sel);
var elem_35685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35110_35684,(0),null);
var selector_35686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35110_35684,(1),null);
var seq__35113_35687 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35114_35688 = null;
var count__35115_35689 = (0);
var i__35116_35690 = (0);
while(true){
if((i__35116_35690 < count__35115_35689)){
var vec__35123_35691 = chunk__35114_35688.cljs$core$IIndexed$_nth$arity$2(null,i__35116_35690);
var type_35692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35123_35691,(0),null);
var f_35693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35123_35691,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35692,((function (seq__35113_35687,chunk__35114_35688,count__35115_35689,i__35116_35690,vec__35123_35691,type_35692,f_35693,vec__35110_35684,elem_35685,selector_35686){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35692,dommy$core$this_fn], 0));

return (f_35693.cljs$core$IFn$_invoke$arity$1 ? f_35693.cljs$core$IFn$_invoke$arity$1(e) : f_35693.call(null,e));
});})(seq__35113_35687,chunk__35114_35688,count__35115_35689,i__35116_35690,vec__35123_35691,type_35692,f_35693,vec__35110_35684,elem_35685,selector_35686))
], 0));


var G__35694 = seq__35113_35687;
var G__35695 = chunk__35114_35688;
var G__35696 = count__35115_35689;
var G__35697 = (i__35116_35690 + (1));
seq__35113_35687 = G__35694;
chunk__35114_35688 = G__35695;
count__35115_35689 = G__35696;
i__35116_35690 = G__35697;
continue;
} else {
var temp__5735__auto___35698 = cljs.core.seq(seq__35113_35687);
if(temp__5735__auto___35698){
var seq__35113_35699__$1 = temp__5735__auto___35698;
if(cljs.core.chunked_seq_QMARK_(seq__35113_35699__$1)){
var c__4609__auto___35700 = cljs.core.chunk_first(seq__35113_35699__$1);
var G__35701 = cljs.core.chunk_rest(seq__35113_35699__$1);
var G__35702 = c__4609__auto___35700;
var G__35703 = cljs.core.count(c__4609__auto___35700);
var G__35704 = (0);
seq__35113_35687 = G__35701;
chunk__35114_35688 = G__35702;
count__35115_35689 = G__35703;
i__35116_35690 = G__35704;
continue;
} else {
var vec__35130_35705 = cljs.core.first(seq__35113_35699__$1);
var type_35706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35130_35705,(0),null);
var f_35707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35130_35705,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35706,((function (seq__35113_35687,chunk__35114_35688,count__35115_35689,i__35116_35690,vec__35130_35705,type_35706,f_35707,seq__35113_35699__$1,temp__5735__auto___35698,vec__35110_35684,elem_35685,selector_35686){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35706,dommy$core$this_fn], 0));

return (f_35707.cljs$core$IFn$_invoke$arity$1 ? f_35707.cljs$core$IFn$_invoke$arity$1(e) : f_35707.call(null,e));
});})(seq__35113_35687,chunk__35114_35688,count__35115_35689,i__35116_35690,vec__35130_35705,type_35706,f_35707,seq__35113_35699__$1,temp__5735__auto___35698,vec__35110_35684,elem_35685,selector_35686))
], 0));


var G__35708 = cljs.core.next(seq__35113_35699__$1);
var G__35709 = null;
var G__35710 = (0);
var G__35711 = (0);
seq__35113_35687 = G__35708;
chunk__35114_35688 = G__35709;
count__35115_35689 = G__35710;
i__35116_35690 = G__35711;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq35106){
var G__35107 = cljs.core.first(seq35106);
var seq35106__$1 = cljs.core.next(seq35106);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35107,seq35106__$1);
}));


//# sourceMappingURL=dommy.core.js.map
