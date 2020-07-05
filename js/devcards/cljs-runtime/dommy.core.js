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
var len__4789__auto___35109 = arguments.length;
var i__4790__auto___35110 = (0);
while(true){
if((i__4790__auto___35110 < len__4789__auto___35109)){
args__4795__auto__.push((arguments[i__4790__auto___35110]));

var G__35111 = (i__4790__auto___35110 + (1));
i__4790__auto___35110 = G__35111;
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
var seq__34726_35112 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34727_35113 = null;
var count__34728_35114 = (0);
var i__34729_35115 = (0);
while(true){
if((i__34729_35115 < count__34728_35114)){
var vec__34736_35116 = chunk__34727_35113.cljs$core$IIndexed$_nth$arity$2(null,i__34729_35115);
var k_35117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34736_35116,(0),null);
var v_35118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34736_35116,(1),null);
style.setProperty(dommy.utils.as_str(k_35117),v_35118);


var G__35120 = seq__34726_35112;
var G__35121 = chunk__34727_35113;
var G__35122 = count__34728_35114;
var G__35123 = (i__34729_35115 + (1));
seq__34726_35112 = G__35120;
chunk__34727_35113 = G__35121;
count__34728_35114 = G__35122;
i__34729_35115 = G__35123;
continue;
} else {
var temp__5735__auto___35126 = cljs.core.seq(seq__34726_35112);
if(temp__5735__auto___35126){
var seq__34726_35128__$1 = temp__5735__auto___35126;
if(cljs.core.chunked_seq_QMARK_(seq__34726_35128__$1)){
var c__4609__auto___35129 = cljs.core.chunk_first(seq__34726_35128__$1);
var G__35130 = cljs.core.chunk_rest(seq__34726_35128__$1);
var G__35131 = c__4609__auto___35129;
var G__35132 = cljs.core.count(c__4609__auto___35129);
var G__35133 = (0);
seq__34726_35112 = G__35130;
chunk__34727_35113 = G__35131;
count__34728_35114 = G__35132;
i__34729_35115 = G__35133;
continue;
} else {
var vec__34739_35134 = cljs.core.first(seq__34726_35128__$1);
var k_35135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34739_35134,(0),null);
var v_35136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34739_35134,(1),null);
style.setProperty(dommy.utils.as_str(k_35135),v_35136);


var G__35137 = cljs.core.next(seq__34726_35128__$1);
var G__35138 = null;
var G__35139 = (0);
var G__35140 = (0);
seq__34726_35112 = G__35137;
chunk__34727_35113 = G__35138;
count__34728_35114 = G__35139;
i__34729_35115 = G__35140;
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
var len__4789__auto___35141 = arguments.length;
var i__4790__auto___35142 = (0);
while(true){
if((i__4790__auto___35142 < len__4789__auto___35141)){
args__4795__auto__.push((arguments[i__4790__auto___35142]));

var G__35143 = (i__4790__auto___35142 + (1));
i__4790__auto___35142 = G__35143;
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
var seq__34744_35145 = cljs.core.seq(keywords);
var chunk__34745_35146 = null;
var count__34746_35147 = (0);
var i__34747_35148 = (0);
while(true){
if((i__34747_35148 < count__34746_35147)){
var kw_35150 = chunk__34745_35146.cljs$core$IIndexed$_nth$arity$2(null,i__34747_35148);
style.removeProperty(dommy.utils.as_str(kw_35150));


var G__35155 = seq__34744_35145;
var G__35156 = chunk__34745_35146;
var G__35157 = count__34746_35147;
var G__35158 = (i__34747_35148 + (1));
seq__34744_35145 = G__35155;
chunk__34745_35146 = G__35156;
count__34746_35147 = G__35157;
i__34747_35148 = G__35158;
continue;
} else {
var temp__5735__auto___35160 = cljs.core.seq(seq__34744_35145);
if(temp__5735__auto___35160){
var seq__34744_35161__$1 = temp__5735__auto___35160;
if(cljs.core.chunked_seq_QMARK_(seq__34744_35161__$1)){
var c__4609__auto___35166 = cljs.core.chunk_first(seq__34744_35161__$1);
var G__35167 = cljs.core.chunk_rest(seq__34744_35161__$1);
var G__35168 = c__4609__auto___35166;
var G__35169 = cljs.core.count(c__4609__auto___35166);
var G__35170 = (0);
seq__34744_35145 = G__35167;
chunk__34745_35146 = G__35168;
count__34746_35147 = G__35169;
i__34747_35148 = G__35170;
continue;
} else {
var kw_35174 = cljs.core.first(seq__34744_35161__$1);
style.removeProperty(dommy.utils.as_str(kw_35174));


var G__35179 = cljs.core.next(seq__34744_35161__$1);
var G__35180 = null;
var G__35181 = (0);
var G__35182 = (0);
seq__34744_35145 = G__35179;
chunk__34745_35146 = G__35180;
count__34746_35147 = G__35181;
i__34747_35148 = G__35182;
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
var len__4789__auto___35188 = arguments.length;
var i__4790__auto___35189 = (0);
while(true){
if((i__4790__auto___35189 < len__4789__auto___35188)){
args__4795__auto__.push((arguments[i__4790__auto___35189]));

var G__35190 = (i__4790__auto___35189 + (1));
i__4790__auto___35189 = G__35190;
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

var seq__34750_35191 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34751_35192 = null;
var count__34752_35193 = (0);
var i__34753_35194 = (0);
while(true){
if((i__34753_35194 < count__34752_35193)){
var vec__34761_35195 = chunk__34751_35192.cljs$core$IIndexed$_nth$arity$2(null,i__34753_35194);
var k_35196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34761_35195,(0),null);
var v_35197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34761_35195,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35196,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35197),"px"].join('')], 0));


var G__35198 = seq__34750_35191;
var G__35199 = chunk__34751_35192;
var G__35200 = count__34752_35193;
var G__35201 = (i__34753_35194 + (1));
seq__34750_35191 = G__35198;
chunk__34751_35192 = G__35199;
count__34752_35193 = G__35200;
i__34753_35194 = G__35201;
continue;
} else {
var temp__5735__auto___35202 = cljs.core.seq(seq__34750_35191);
if(temp__5735__auto___35202){
var seq__34750_35203__$1 = temp__5735__auto___35202;
if(cljs.core.chunked_seq_QMARK_(seq__34750_35203__$1)){
var c__4609__auto___35204 = cljs.core.chunk_first(seq__34750_35203__$1);
var G__35205 = cljs.core.chunk_rest(seq__34750_35203__$1);
var G__35206 = c__4609__auto___35204;
var G__35207 = cljs.core.count(c__4609__auto___35204);
var G__35208 = (0);
seq__34750_35191 = G__35205;
chunk__34751_35192 = G__35206;
count__34752_35193 = G__35207;
i__34753_35194 = G__35208;
continue;
} else {
var vec__34764_35209 = cljs.core.first(seq__34750_35203__$1);
var k_35210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34764_35209,(0),null);
var v_35211 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34764_35209,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35210,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35211),"px"].join('')], 0));


var G__35213 = cljs.core.next(seq__34750_35203__$1);
var G__35214 = null;
var G__35215 = (0);
var G__35216 = (0);
seq__34750_35191 = G__35213;
chunk__34751_35192 = G__35214;
count__34752_35193 = G__35215;
i__34753_35194 = G__35216;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq34748){
var G__34749 = cljs.core.first(seq34748);
var seq34748__$1 = cljs.core.next(seq34748);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34749,seq34748__$1);
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
var len__4789__auto___35229 = arguments.length;
var i__4790__auto___35230 = (0);
while(true){
if((i__4790__auto___35230 < len__4789__auto___35229)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35230]));

var G__35236 = (i__4790__auto___35230 + (1));
i__4790__auto___35230 = G__35236;
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

var seq__34775_35242 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__34776_35243 = null;
var count__34777_35244 = (0);
var i__34778_35245 = (0);
while(true){
if((i__34778_35245 < count__34777_35244)){
var vec__34785_35246 = chunk__34776_35243.cljs$core$IIndexed$_nth$arity$2(null,i__34778_35245);
var k_35247__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34785_35246,(0),null);
var v_35248__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34785_35246,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35247__$1,v_35248__$1);


var G__35249 = seq__34775_35242;
var G__35250 = chunk__34776_35243;
var G__35251 = count__34777_35244;
var G__35252 = (i__34778_35245 + (1));
seq__34775_35242 = G__35249;
chunk__34776_35243 = G__35250;
count__34777_35244 = G__35251;
i__34778_35245 = G__35252;
continue;
} else {
var temp__5735__auto___35253 = cljs.core.seq(seq__34775_35242);
if(temp__5735__auto___35253){
var seq__34775_35254__$1 = temp__5735__auto___35253;
if(cljs.core.chunked_seq_QMARK_(seq__34775_35254__$1)){
var c__4609__auto___35255 = cljs.core.chunk_first(seq__34775_35254__$1);
var G__35256 = cljs.core.chunk_rest(seq__34775_35254__$1);
var G__35257 = c__4609__auto___35255;
var G__35258 = cljs.core.count(c__4609__auto___35255);
var G__35259 = (0);
seq__34775_35242 = G__35256;
chunk__34776_35243 = G__35257;
count__34777_35244 = G__35258;
i__34778_35245 = G__35259;
continue;
} else {
var vec__34788_35260 = cljs.core.first(seq__34775_35254__$1);
var k_35261__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34788_35260,(0),null);
var v_35262__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34788_35260,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35261__$1,v_35262__$1);


var G__35263 = cljs.core.next(seq__34775_35254__$1);
var G__35265 = null;
var G__35266 = (0);
var G__35267 = (0);
seq__34775_35242 = G__35263;
chunk__34776_35243 = G__35265;
count__34777_35244 = G__35266;
i__34778_35245 = G__35267;
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
var len__4789__auto___35271 = arguments.length;
var i__4790__auto___35272 = (0);
while(true){
if((i__4790__auto___35272 < len__4789__auto___35271)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35272]));

var G__35273 = (i__4790__auto___35272 + (1));
i__4790__auto___35272 = G__35273;
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
var k_35274__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__34796 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__34796.cljs$core$IFn$_invoke$arity$1 ? fexpr__34796.cljs$core$IFn$_invoke$arity$1(k_35274__$1) : fexpr__34796.call(null,k_35274__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_35274__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__34797_35275 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__34798_35276 = null;
var count__34799_35277 = (0);
var i__34800_35278 = (0);
while(true){
if((i__34800_35278 < count__34799_35277)){
var k_35279__$1 = chunk__34798_35276.cljs$core$IIndexed$_nth$arity$2(null,i__34800_35278);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35279__$1);


var G__35280 = seq__34797_35275;
var G__35281 = chunk__34798_35276;
var G__35282 = count__34799_35277;
var G__35283 = (i__34800_35278 + (1));
seq__34797_35275 = G__35280;
chunk__34798_35276 = G__35281;
count__34799_35277 = G__35282;
i__34800_35278 = G__35283;
continue;
} else {
var temp__5735__auto___35284 = cljs.core.seq(seq__34797_35275);
if(temp__5735__auto___35284){
var seq__34797_35285__$1 = temp__5735__auto___35284;
if(cljs.core.chunked_seq_QMARK_(seq__34797_35285__$1)){
var c__4609__auto___35286 = cljs.core.chunk_first(seq__34797_35285__$1);
var G__35287 = cljs.core.chunk_rest(seq__34797_35285__$1);
var G__35288 = c__4609__auto___35286;
var G__35289 = cljs.core.count(c__4609__auto___35286);
var G__35290 = (0);
seq__34797_35275 = G__35287;
chunk__34798_35276 = G__35288;
count__34799_35277 = G__35289;
i__34800_35278 = G__35290;
continue;
} else {
var k_35291__$1 = cljs.core.first(seq__34797_35285__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_35291__$1);


var G__35292 = cljs.core.next(seq__34797_35285__$1);
var G__35293 = null;
var G__35294 = (0);
var G__35295 = (0);
seq__34797_35275 = G__35292;
chunk__34798_35276 = G__35293;
count__34799_35277 = G__35294;
i__34800_35278 = G__35295;
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
var temp__5733__auto___35303 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35303)){
var class_list_35304 = temp__5733__auto___35303;
var seq__34808_35305 = cljs.core.seq(classes__$1);
var chunk__34809_35306 = null;
var count__34810_35307 = (0);
var i__34811_35308 = (0);
while(true){
if((i__34811_35308 < count__34810_35307)){
var c_35309 = chunk__34809_35306.cljs$core$IIndexed$_nth$arity$2(null,i__34811_35308);
class_list_35304.add(c_35309);


var G__35310 = seq__34808_35305;
var G__35311 = chunk__34809_35306;
var G__35312 = count__34810_35307;
var G__35313 = (i__34811_35308 + (1));
seq__34808_35305 = G__35310;
chunk__34809_35306 = G__35311;
count__34810_35307 = G__35312;
i__34811_35308 = G__35313;
continue;
} else {
var temp__5735__auto___35314 = cljs.core.seq(seq__34808_35305);
if(temp__5735__auto___35314){
var seq__34808_35315__$1 = temp__5735__auto___35314;
if(cljs.core.chunked_seq_QMARK_(seq__34808_35315__$1)){
var c__4609__auto___35316 = cljs.core.chunk_first(seq__34808_35315__$1);
var G__35317 = cljs.core.chunk_rest(seq__34808_35315__$1);
var G__35318 = c__4609__auto___35316;
var G__35319 = cljs.core.count(c__4609__auto___35316);
var G__35320 = (0);
seq__34808_35305 = G__35317;
chunk__34809_35306 = G__35318;
count__34810_35307 = G__35319;
i__34811_35308 = G__35320;
continue;
} else {
var c_35321 = cljs.core.first(seq__34808_35315__$1);
class_list_35304.add(c_35321);


var G__35322 = cljs.core.next(seq__34808_35315__$1);
var G__35323 = null;
var G__35324 = (0);
var G__35325 = (0);
seq__34808_35305 = G__35322;
chunk__34809_35306 = G__35323;
count__34810_35307 = G__35324;
i__34811_35308 = G__35325;
continue;
}
} else {
}
}
break;
}
} else {
var seq__34812_35326 = cljs.core.seq(classes__$1);
var chunk__34813_35327 = null;
var count__34814_35328 = (0);
var i__34815_35329 = (0);
while(true){
if((i__34815_35329 < count__34814_35328)){
var c_35330 = chunk__34813_35327.cljs$core$IIndexed$_nth$arity$2(null,i__34815_35329);
var class_name_35331 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35331,c_35330))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35331 === ""))?c_35330:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35331)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35330)].join('')));
}


var G__35332 = seq__34812_35326;
var G__35333 = chunk__34813_35327;
var G__35334 = count__34814_35328;
var G__35335 = (i__34815_35329 + (1));
seq__34812_35326 = G__35332;
chunk__34813_35327 = G__35333;
count__34814_35328 = G__35334;
i__34815_35329 = G__35335;
continue;
} else {
var temp__5735__auto___35336 = cljs.core.seq(seq__34812_35326);
if(temp__5735__auto___35336){
var seq__34812_35337__$1 = temp__5735__auto___35336;
if(cljs.core.chunked_seq_QMARK_(seq__34812_35337__$1)){
var c__4609__auto___35338 = cljs.core.chunk_first(seq__34812_35337__$1);
var G__35339 = cljs.core.chunk_rest(seq__34812_35337__$1);
var G__35340 = c__4609__auto___35338;
var G__35341 = cljs.core.count(c__4609__auto___35338);
var G__35342 = (0);
seq__34812_35326 = G__35339;
chunk__34813_35327 = G__35340;
count__34814_35328 = G__35341;
i__34815_35329 = G__35342;
continue;
} else {
var c_35343 = cljs.core.first(seq__34812_35337__$1);
var class_name_35344 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_35344,c_35343))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_35344 === ""))?c_35343:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_35344)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_35343)].join('')));
}


var G__35345 = cljs.core.next(seq__34812_35337__$1);
var G__35346 = null;
var G__35347 = (0);
var G__35348 = (0);
seq__34812_35326 = G__35345;
chunk__34813_35327 = G__35346;
count__34814_35328 = G__35347;
i__34815_35329 = G__35348;
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
var seq__34816_35349 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__34817_35350 = null;
var count__34818_35351 = (0);
var i__34819_35352 = (0);
while(true){
if((i__34819_35352 < count__34818_35351)){
var c_35353 = chunk__34817_35350.cljs$core$IIndexed$_nth$arity$2(null,i__34819_35352);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35353);


var G__35354 = seq__34816_35349;
var G__35355 = chunk__34817_35350;
var G__35356 = count__34818_35351;
var G__35357 = (i__34819_35352 + (1));
seq__34816_35349 = G__35354;
chunk__34817_35350 = G__35355;
count__34818_35351 = G__35356;
i__34819_35352 = G__35357;
continue;
} else {
var temp__5735__auto___35358 = cljs.core.seq(seq__34816_35349);
if(temp__5735__auto___35358){
var seq__34816_35359__$1 = temp__5735__auto___35358;
if(cljs.core.chunked_seq_QMARK_(seq__34816_35359__$1)){
var c__4609__auto___35360 = cljs.core.chunk_first(seq__34816_35359__$1);
var G__35361 = cljs.core.chunk_rest(seq__34816_35359__$1);
var G__35362 = c__4609__auto___35360;
var G__35363 = cljs.core.count(c__4609__auto___35360);
var G__35364 = (0);
seq__34816_35349 = G__35361;
chunk__34817_35350 = G__35362;
count__34818_35351 = G__35363;
i__34819_35352 = G__35364;
continue;
} else {
var c_35365 = cljs.core.first(seq__34816_35359__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_35365);


var G__35366 = cljs.core.next(seq__34816_35359__$1);
var G__35367 = null;
var G__35368 = (0);
var G__35369 = (0);
seq__34816_35349 = G__35366;
chunk__34817_35350 = G__35367;
count__34818_35351 = G__35368;
i__34819_35352 = G__35369;
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
var len__4789__auto___35371 = arguments.length;
var i__4790__auto___35372 = (0);
while(true){
if((i__4790__auto___35372 < len__4789__auto___35371)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35372]));

var G__35373 = (i__4790__auto___35372 + (1));
i__4790__auto___35372 = G__35373;
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
var temp__5733__auto___35374 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35374)){
var class_list_35375 = temp__5733__auto___35374;
class_list_35375.remove(c__$1);
} else {
var class_name_35376 = dommy.core.class$(elem);
var new_class_name_35377 = dommy.utils.remove_class_str(class_name_35376,c__$1);
if((class_name_35376 === new_class_name_35377)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_35377);
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


var G__35378 = seq__34825;
var G__35379 = chunk__34826;
var G__35380 = count__34827;
var G__35381 = (i__34828 + (1));
seq__34825 = G__35378;
chunk__34826 = G__35379;
count__34827 = G__35380;
i__34828 = G__35381;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34825);
if(temp__5735__auto__){
var seq__34825__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34825__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34825__$1);
var G__35382 = cljs.core.chunk_rest(seq__34825__$1);
var G__35383 = c__4609__auto__;
var G__35384 = cljs.core.count(c__4609__auto__);
var G__35385 = (0);
seq__34825 = G__35382;
chunk__34826 = G__35383;
count__34827 = G__35384;
i__34828 = G__35385;
continue;
} else {
var c = cljs.core.first(seq__34825__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__35386 = cljs.core.next(seq__34825__$1);
var G__35387 = null;
var G__35388 = (0);
var G__35389 = (0);
seq__34825 = G__35386;
chunk__34826 = G__35387;
count__34827 = G__35388;
i__34828 = G__35389;
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
var temp__5733__auto___35391 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___35391)){
var class_list_35392 = temp__5733__auto___35391;
class_list_35392.toggle(c__$1);
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
var G__34839 = arguments.length;
switch (G__34839) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35396 = arguments.length;
var i__4790__auto___35397 = (0);
while(true){
if((i__4790__auto___35397 < len__4789__auto___35396)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35397]));

var G__35399 = (i__4790__auto___35397 + (1));
i__4790__auto___35397 = G__35399;
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
var G__34840 = parent;
G__34840.appendChild(child);

return G__34840;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__34841_35401 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34842_35402 = null;
var count__34843_35403 = (0);
var i__34844_35404 = (0);
while(true){
if((i__34844_35404 < count__34843_35403)){
var c_35405 = chunk__34842_35402.cljs$core$IIndexed$_nth$arity$2(null,i__34844_35404);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35405);


var G__35406 = seq__34841_35401;
var G__35407 = chunk__34842_35402;
var G__35408 = count__34843_35403;
var G__35409 = (i__34844_35404 + (1));
seq__34841_35401 = G__35406;
chunk__34842_35402 = G__35407;
count__34843_35403 = G__35408;
i__34844_35404 = G__35409;
continue;
} else {
var temp__5735__auto___35410 = cljs.core.seq(seq__34841_35401);
if(temp__5735__auto___35410){
var seq__34841_35411__$1 = temp__5735__auto___35410;
if(cljs.core.chunked_seq_QMARK_(seq__34841_35411__$1)){
var c__4609__auto___35412 = cljs.core.chunk_first(seq__34841_35411__$1);
var G__35413 = cljs.core.chunk_rest(seq__34841_35411__$1);
var G__35414 = c__4609__auto___35412;
var G__35415 = cljs.core.count(c__4609__auto___35412);
var G__35416 = (0);
seq__34841_35401 = G__35413;
chunk__34842_35402 = G__35414;
count__34843_35403 = G__35415;
i__34844_35404 = G__35416;
continue;
} else {
var c_35417 = cljs.core.first(seq__34841_35411__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35417);


var G__35418 = cljs.core.next(seq__34841_35411__$1);
var G__35419 = null;
var G__35420 = (0);
var G__35421 = (0);
seq__34841_35401 = G__35418;
chunk__34842_35402 = G__35419;
count__34843_35403 = G__35420;
i__34844_35404 = G__35421;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq34836){
var G__34837 = cljs.core.first(seq34836);
var seq34836__$1 = cljs.core.next(seq34836);
var G__34838 = cljs.core.first(seq34836__$1);
var seq34836__$2 = cljs.core.next(seq34836__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34837,G__34838,seq34836__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__34849 = arguments.length;
switch (G__34849) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

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
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__34851 = parent;
G__34851.insertBefore(child,parent.firstChild);

return G__34851;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__34852_35426 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__34853_35427 = null;
var count__34854_35428 = (0);
var i__34855_35429 = (0);
while(true){
if((i__34855_35429 < count__34854_35428)){
var c_35432 = chunk__34853_35427.cljs$core$IIndexed$_nth$arity$2(null,i__34855_35429);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35432);


var G__35433 = seq__34852_35426;
var G__35434 = chunk__34853_35427;
var G__35435 = count__34854_35428;
var G__35436 = (i__34855_35429 + (1));
seq__34852_35426 = G__35433;
chunk__34853_35427 = G__35434;
count__34854_35428 = G__35435;
i__34855_35429 = G__35436;
continue;
} else {
var temp__5735__auto___35437 = cljs.core.seq(seq__34852_35426);
if(temp__5735__auto___35437){
var seq__34852_35438__$1 = temp__5735__auto___35437;
if(cljs.core.chunked_seq_QMARK_(seq__34852_35438__$1)){
var c__4609__auto___35439 = cljs.core.chunk_first(seq__34852_35438__$1);
var G__35440 = cljs.core.chunk_rest(seq__34852_35438__$1);
var G__35441 = c__4609__auto___35439;
var G__35442 = cljs.core.count(c__4609__auto___35439);
var G__35443 = (0);
seq__34852_35426 = G__35440;
chunk__34853_35427 = G__35441;
count__34854_35428 = G__35442;
i__34855_35429 = G__35443;
continue;
} else {
var c_35444 = cljs.core.first(seq__34852_35438__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_35444);


var G__35445 = cljs.core.next(seq__34852_35438__$1);
var G__35446 = null;
var G__35447 = (0);
var G__35448 = (0);
seq__34852_35426 = G__35445;
chunk__34853_35427 = G__35446;
count__34854_35428 = G__35447;
i__34855_35429 = G__35448;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq34846){
var G__34847 = cljs.core.first(seq34846);
var seq34846__$1 = cljs.core.next(seq34846);
var G__34848 = cljs.core.first(seq34846__$1);
var seq34846__$2 = cljs.core.next(seq34846__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34847,G__34848,seq34846__$2);
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
var len__4789__auto___35454 = arguments.length;
var i__4790__auto___35455 = (0);
while(true){
if((i__4790__auto___35455 < len__4789__auto___35454)){
args__4795__auto__.push((arguments[i__4790__auto___35455]));

var G__35456 = (i__4790__auto___35455 + (1));
i__4790__auto___35455 = G__35456;
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
var len__4789__auto___35457 = arguments.length;
var i__4790__auto___35458 = (0);
while(true){
if((i__4790__auto___35458 < len__4789__auto___35457)){
args__4795__auto__.push((arguments[i__4790__auto___35458]));

var G__35459 = (i__4790__auto___35458 + (1));
i__4790__auto___35458 = G__35459;
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

var vec__34871_35460 = dommy.core.elem_and_selector(elem_sel);
var elem_35461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34871_35460,(0),null);
var selector_35462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34871_35460,(1),null);
var seq__34874_35463 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__34881_35464 = null;
var count__34882_35465 = (0);
var i__34883_35466 = (0);
while(true){
if((i__34883_35466 < count__34882_35465)){
var vec__34936_35467 = chunk__34881_35464.cljs$core$IIndexed$_nth$arity$2(null,i__34883_35466);
var orig_type_35468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34936_35467,(0),null);
var f_35469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34936_35467,(1),null);
var seq__34884_35470 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35468,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35468,cljs.core.identity])));
var chunk__34886_35471 = null;
var count__34887_35472 = (0);
var i__34888_35473 = (0);
while(true){
if((i__34888_35473 < count__34887_35472)){
var vec__34952_35474 = chunk__34886_35471.cljs$core$IIndexed$_nth$arity$2(null,i__34888_35473);
var actual_type_35475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34952_35474,(0),null);
var factory_35476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34952_35474,(1),null);
var canonical_f_35477 = (function (){var G__34956 = (factory_35476.cljs$core$IFn$_invoke$arity$1 ? factory_35476.cljs$core$IFn$_invoke$arity$1(f_35469) : factory_35476.call(null,f_35469));
var fexpr__34955 = (cljs.core.truth_(selector_35462)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35461,selector_35462):cljs.core.identity);
return (fexpr__34955.cljs$core$IFn$_invoke$arity$1 ? fexpr__34955.cljs$core$IFn$_invoke$arity$1(G__34956) : fexpr__34955.call(null,G__34956));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35461,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35462,actual_type_35475,f_35469], null),canonical_f_35477], 0));

if(cljs.core.truth_(elem_35461.addEventListener)){
elem_35461.addEventListener(cljs.core.name(actual_type_35475),canonical_f_35477);
} else {
elem_35461.attachEvent(cljs.core.name(actual_type_35475),canonical_f_35477);
}


var G__35478 = seq__34884_35470;
var G__35479 = chunk__34886_35471;
var G__35480 = count__34887_35472;
var G__35481 = (i__34888_35473 + (1));
seq__34884_35470 = G__35478;
chunk__34886_35471 = G__35479;
count__34887_35472 = G__35480;
i__34888_35473 = G__35481;
continue;
} else {
var temp__5735__auto___35482 = cljs.core.seq(seq__34884_35470);
if(temp__5735__auto___35482){
var seq__34884_35483__$1 = temp__5735__auto___35482;
if(cljs.core.chunked_seq_QMARK_(seq__34884_35483__$1)){
var c__4609__auto___35484 = cljs.core.chunk_first(seq__34884_35483__$1);
var G__35485 = cljs.core.chunk_rest(seq__34884_35483__$1);
var G__35486 = c__4609__auto___35484;
var G__35487 = cljs.core.count(c__4609__auto___35484);
var G__35488 = (0);
seq__34884_35470 = G__35485;
chunk__34886_35471 = G__35486;
count__34887_35472 = G__35487;
i__34888_35473 = G__35488;
continue;
} else {
var vec__34957_35489 = cljs.core.first(seq__34884_35483__$1);
var actual_type_35490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34957_35489,(0),null);
var factory_35491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34957_35489,(1),null);
var canonical_f_35492 = (function (){var G__34961 = (factory_35491.cljs$core$IFn$_invoke$arity$1 ? factory_35491.cljs$core$IFn$_invoke$arity$1(f_35469) : factory_35491.call(null,f_35469));
var fexpr__34960 = (cljs.core.truth_(selector_35462)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35461,selector_35462):cljs.core.identity);
return (fexpr__34960.cljs$core$IFn$_invoke$arity$1 ? fexpr__34960.cljs$core$IFn$_invoke$arity$1(G__34961) : fexpr__34960.call(null,G__34961));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35461,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35462,actual_type_35490,f_35469], null),canonical_f_35492], 0));

if(cljs.core.truth_(elem_35461.addEventListener)){
elem_35461.addEventListener(cljs.core.name(actual_type_35490),canonical_f_35492);
} else {
elem_35461.attachEvent(cljs.core.name(actual_type_35490),canonical_f_35492);
}


var G__35493 = cljs.core.next(seq__34884_35483__$1);
var G__35494 = null;
var G__35495 = (0);
var G__35496 = (0);
seq__34884_35470 = G__35493;
chunk__34886_35471 = G__35494;
count__34887_35472 = G__35495;
i__34888_35473 = G__35496;
continue;
}
} else {
}
}
break;
}

var G__35497 = seq__34874_35463;
var G__35498 = chunk__34881_35464;
var G__35499 = count__34882_35465;
var G__35500 = (i__34883_35466 + (1));
seq__34874_35463 = G__35497;
chunk__34881_35464 = G__35498;
count__34882_35465 = G__35499;
i__34883_35466 = G__35500;
continue;
} else {
var temp__5735__auto___35501 = cljs.core.seq(seq__34874_35463);
if(temp__5735__auto___35501){
var seq__34874_35502__$1 = temp__5735__auto___35501;
if(cljs.core.chunked_seq_QMARK_(seq__34874_35502__$1)){
var c__4609__auto___35503 = cljs.core.chunk_first(seq__34874_35502__$1);
var G__35504 = cljs.core.chunk_rest(seq__34874_35502__$1);
var G__35505 = c__4609__auto___35503;
var G__35506 = cljs.core.count(c__4609__auto___35503);
var G__35507 = (0);
seq__34874_35463 = G__35504;
chunk__34881_35464 = G__35505;
count__34882_35465 = G__35506;
i__34883_35466 = G__35507;
continue;
} else {
var vec__34962_35508 = cljs.core.first(seq__34874_35502__$1);
var orig_type_35509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34962_35508,(0),null);
var f_35510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34962_35508,(1),null);
var seq__34875_35511 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35509,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35509,cljs.core.identity])));
var chunk__34877_35512 = null;
var count__34878_35513 = (0);
var i__34879_35514 = (0);
while(true){
if((i__34879_35514 < count__34878_35513)){
var vec__34975_35515 = chunk__34877_35512.cljs$core$IIndexed$_nth$arity$2(null,i__34879_35514);
var actual_type_35516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34975_35515,(0),null);
var factory_35517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34975_35515,(1),null);
var canonical_f_35518 = (function (){var G__34979 = (factory_35517.cljs$core$IFn$_invoke$arity$1 ? factory_35517.cljs$core$IFn$_invoke$arity$1(f_35510) : factory_35517.call(null,f_35510));
var fexpr__34978 = (cljs.core.truth_(selector_35462)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35461,selector_35462):cljs.core.identity);
return (fexpr__34978.cljs$core$IFn$_invoke$arity$1 ? fexpr__34978.cljs$core$IFn$_invoke$arity$1(G__34979) : fexpr__34978.call(null,G__34979));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35461,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35462,actual_type_35516,f_35510], null),canonical_f_35518], 0));

if(cljs.core.truth_(elem_35461.addEventListener)){
elem_35461.addEventListener(cljs.core.name(actual_type_35516),canonical_f_35518);
} else {
elem_35461.attachEvent(cljs.core.name(actual_type_35516),canonical_f_35518);
}


var G__35519 = seq__34875_35511;
var G__35520 = chunk__34877_35512;
var G__35521 = count__34878_35513;
var G__35522 = (i__34879_35514 + (1));
seq__34875_35511 = G__35519;
chunk__34877_35512 = G__35520;
count__34878_35513 = G__35521;
i__34879_35514 = G__35522;
continue;
} else {
var temp__5735__auto___35524__$1 = cljs.core.seq(seq__34875_35511);
if(temp__5735__auto___35524__$1){
var seq__34875_35525__$1 = temp__5735__auto___35524__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34875_35525__$1)){
var c__4609__auto___35526 = cljs.core.chunk_first(seq__34875_35525__$1);
var G__35527 = cljs.core.chunk_rest(seq__34875_35525__$1);
var G__35528 = c__4609__auto___35526;
var G__35529 = cljs.core.count(c__4609__auto___35526);
var G__35530 = (0);
seq__34875_35511 = G__35527;
chunk__34877_35512 = G__35528;
count__34878_35513 = G__35529;
i__34879_35514 = G__35530;
continue;
} else {
var vec__34980_35531 = cljs.core.first(seq__34875_35525__$1);
var actual_type_35532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34980_35531,(0),null);
var factory_35533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34980_35531,(1),null);
var canonical_f_35535 = (function (){var G__34984 = (factory_35533.cljs$core$IFn$_invoke$arity$1 ? factory_35533.cljs$core$IFn$_invoke$arity$1(f_35510) : factory_35533.call(null,f_35510));
var fexpr__34983 = (cljs.core.truth_(selector_35462)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_35461,selector_35462):cljs.core.identity);
return (fexpr__34983.cljs$core$IFn$_invoke$arity$1 ? fexpr__34983.cljs$core$IFn$_invoke$arity$1(G__34984) : fexpr__34983.call(null,G__34984));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35461,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35462,actual_type_35532,f_35510], null),canonical_f_35535], 0));

if(cljs.core.truth_(elem_35461.addEventListener)){
elem_35461.addEventListener(cljs.core.name(actual_type_35532),canonical_f_35535);
} else {
elem_35461.attachEvent(cljs.core.name(actual_type_35532),canonical_f_35535);
}


var G__35536 = cljs.core.next(seq__34875_35525__$1);
var G__35537 = null;
var G__35538 = (0);
var G__35539 = (0);
seq__34875_35511 = G__35536;
chunk__34877_35512 = G__35537;
count__34878_35513 = G__35538;
i__34879_35514 = G__35539;
continue;
}
} else {
}
}
break;
}

var G__35540 = cljs.core.next(seq__34874_35502__$1);
var G__35541 = null;
var G__35542 = (0);
var G__35543 = (0);
seq__34874_35463 = G__35540;
chunk__34881_35464 = G__35541;
count__34882_35465 = G__35542;
i__34883_35466 = G__35543;
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

var vec__34990_35551 = dommy.core.elem_and_selector(elem_sel);
var elem_35552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34990_35551,(0),null);
var selector_35553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34990_35551,(1),null);
var seq__34993_35554 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35000_35555 = null;
var count__35001_35556 = (0);
var i__35002_35557 = (0);
while(true){
if((i__35002_35557 < count__35001_35556)){
var vec__35039_35558 = chunk__35000_35555.cljs$core$IIndexed$_nth$arity$2(null,i__35002_35557);
var orig_type_35559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35039_35558,(0),null);
var f_35560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35039_35558,(1),null);
var seq__35003_35561 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35559,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35559,cljs.core.identity])));
var chunk__35005_35562 = null;
var count__35006_35563 = (0);
var i__35007_35564 = (0);
while(true){
if((i__35007_35564 < count__35006_35563)){
var vec__35052_35566 = chunk__35005_35562.cljs$core$IIndexed$_nth$arity$2(null,i__35007_35564);
var actual_type_35567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35052_35566,(0),null);
var __35568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35052_35566,(1),null);
var keys_35573 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35553,actual_type_35567,f_35560], null);
var canonical_f_35574 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35552),keys_35573);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35552,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35573], 0));

if(cljs.core.truth_(elem_35552.removeEventListener)){
elem_35552.removeEventListener(cljs.core.name(actual_type_35567),canonical_f_35574);
} else {
elem_35552.detachEvent(cljs.core.name(actual_type_35567),canonical_f_35574);
}


var G__35575 = seq__35003_35561;
var G__35576 = chunk__35005_35562;
var G__35577 = count__35006_35563;
var G__35578 = (i__35007_35564 + (1));
seq__35003_35561 = G__35575;
chunk__35005_35562 = G__35576;
count__35006_35563 = G__35577;
i__35007_35564 = G__35578;
continue;
} else {
var temp__5735__auto___35579 = cljs.core.seq(seq__35003_35561);
if(temp__5735__auto___35579){
var seq__35003_35581__$1 = temp__5735__auto___35579;
if(cljs.core.chunked_seq_QMARK_(seq__35003_35581__$1)){
var c__4609__auto___35582 = cljs.core.chunk_first(seq__35003_35581__$1);
var G__35584 = cljs.core.chunk_rest(seq__35003_35581__$1);
var G__35585 = c__4609__auto___35582;
var G__35586 = cljs.core.count(c__4609__auto___35582);
var G__35587 = (0);
seq__35003_35561 = G__35584;
chunk__35005_35562 = G__35585;
count__35006_35563 = G__35586;
i__35007_35564 = G__35587;
continue;
} else {
var vec__35055_35588 = cljs.core.first(seq__35003_35581__$1);
var actual_type_35589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35055_35588,(0),null);
var __35590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35055_35588,(1),null);
var keys_35591 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35553,actual_type_35589,f_35560], null);
var canonical_f_35592 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35552),keys_35591);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35552,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35591], 0));

if(cljs.core.truth_(elem_35552.removeEventListener)){
elem_35552.removeEventListener(cljs.core.name(actual_type_35589),canonical_f_35592);
} else {
elem_35552.detachEvent(cljs.core.name(actual_type_35589),canonical_f_35592);
}


var G__35593 = cljs.core.next(seq__35003_35581__$1);
var G__35594 = null;
var G__35595 = (0);
var G__35596 = (0);
seq__35003_35561 = G__35593;
chunk__35005_35562 = G__35594;
count__35006_35563 = G__35595;
i__35007_35564 = G__35596;
continue;
}
} else {
}
}
break;
}

var G__35599 = seq__34993_35554;
var G__35600 = chunk__35000_35555;
var G__35601 = count__35001_35556;
var G__35602 = (i__35002_35557 + (1));
seq__34993_35554 = G__35599;
chunk__35000_35555 = G__35600;
count__35001_35556 = G__35601;
i__35002_35557 = G__35602;
continue;
} else {
var temp__5735__auto___35603 = cljs.core.seq(seq__34993_35554);
if(temp__5735__auto___35603){
var seq__34993_35604__$1 = temp__5735__auto___35603;
if(cljs.core.chunked_seq_QMARK_(seq__34993_35604__$1)){
var c__4609__auto___35607 = cljs.core.chunk_first(seq__34993_35604__$1);
var G__35608 = cljs.core.chunk_rest(seq__34993_35604__$1);
var G__35609 = c__4609__auto___35607;
var G__35610 = cljs.core.count(c__4609__auto___35607);
var G__35611 = (0);
seq__34993_35554 = G__35608;
chunk__35000_35555 = G__35609;
count__35001_35556 = G__35610;
i__35002_35557 = G__35611;
continue;
} else {
var vec__35058_35612 = cljs.core.first(seq__34993_35604__$1);
var orig_type_35613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35058_35612,(0),null);
var f_35614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35058_35612,(1),null);
var seq__34994_35615 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_35613,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_35613,cljs.core.identity])));
var chunk__34996_35616 = null;
var count__34997_35617 = (0);
var i__34998_35618 = (0);
while(true){
if((i__34998_35618 < count__34997_35617)){
var vec__35070_35619 = chunk__34996_35616.cljs$core$IIndexed$_nth$arity$2(null,i__34998_35618);
var actual_type_35620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35070_35619,(0),null);
var __35621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35070_35619,(1),null);
var keys_35627 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35553,actual_type_35620,f_35614], null);
var canonical_f_35628 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35552),keys_35627);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35552,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35627], 0));

if(cljs.core.truth_(elem_35552.removeEventListener)){
elem_35552.removeEventListener(cljs.core.name(actual_type_35620),canonical_f_35628);
} else {
elem_35552.detachEvent(cljs.core.name(actual_type_35620),canonical_f_35628);
}


var G__35629 = seq__34994_35615;
var G__35630 = chunk__34996_35616;
var G__35631 = count__34997_35617;
var G__35632 = (i__34998_35618 + (1));
seq__34994_35615 = G__35629;
chunk__34996_35616 = G__35630;
count__34997_35617 = G__35631;
i__34998_35618 = G__35632;
continue;
} else {
var temp__5735__auto___35633__$1 = cljs.core.seq(seq__34994_35615);
if(temp__5735__auto___35633__$1){
var seq__34994_35635__$1 = temp__5735__auto___35633__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34994_35635__$1)){
var c__4609__auto___35636 = cljs.core.chunk_first(seq__34994_35635__$1);
var G__35639 = cljs.core.chunk_rest(seq__34994_35635__$1);
var G__35640 = c__4609__auto___35636;
var G__35641 = cljs.core.count(c__4609__auto___35636);
var G__35642 = (0);
seq__34994_35615 = G__35639;
chunk__34996_35616 = G__35640;
count__34997_35617 = G__35641;
i__34998_35618 = G__35642;
continue;
} else {
var vec__35077_35645 = cljs.core.first(seq__34994_35635__$1);
var actual_type_35646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35077_35645,(0),null);
var __35647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35077_35645,(1),null);
var keys_35648 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35553,actual_type_35646,f_35614], null);
var canonical_f_35649 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_35552),keys_35648);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_35552,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_35648], 0));

if(cljs.core.truth_(elem_35552.removeEventListener)){
elem_35552.removeEventListener(cljs.core.name(actual_type_35646),canonical_f_35649);
} else {
elem_35552.detachEvent(cljs.core.name(actual_type_35646),canonical_f_35649);
}


var G__35650 = cljs.core.next(seq__34994_35635__$1);
var G__35651 = null;
var G__35652 = (0);
var G__35653 = (0);
seq__34994_35615 = G__35650;
chunk__34996_35616 = G__35651;
count__34997_35617 = G__35652;
i__34998_35618 = G__35653;
continue;
}
} else {
}
}
break;
}

var G__35654 = cljs.core.next(seq__34993_35604__$1);
var G__35655 = null;
var G__35656 = (0);
var G__35657 = (0);
seq__34993_35554 = G__35654;
chunk__35000_35555 = G__35655;
count__35001_35556 = G__35656;
i__35002_35557 = G__35657;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq34985){
var G__34986 = cljs.core.first(seq34985);
var seq34985__$1 = cljs.core.next(seq34985);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34986,seq34985__$1);
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

var vec__35082_35661 = dommy.core.elem_and_selector(elem_sel);
var elem_35662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35082_35661,(0),null);
var selector_35663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35082_35661,(1),null);
var seq__35085_35664 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35086_35665 = null;
var count__35087_35666 = (0);
var i__35088_35667 = (0);
while(true){
if((i__35088_35667 < count__35087_35666)){
var vec__35095_35668 = chunk__35086_35665.cljs$core$IIndexed$_nth$arity$2(null,i__35088_35667);
var type_35669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35095_35668,(0),null);
var f_35670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35095_35668,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35669,((function (seq__35085_35664,chunk__35086_35665,count__35087_35666,i__35088_35667,vec__35095_35668,type_35669,f_35670,vec__35082_35661,elem_35662,selector_35663){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35669,dommy$core$this_fn], 0));

return (f_35670.cljs$core$IFn$_invoke$arity$1 ? f_35670.cljs$core$IFn$_invoke$arity$1(e) : f_35670.call(null,e));
});})(seq__35085_35664,chunk__35086_35665,count__35087_35666,i__35088_35667,vec__35095_35668,type_35669,f_35670,vec__35082_35661,elem_35662,selector_35663))
], 0));


var G__35671 = seq__35085_35664;
var G__35672 = chunk__35086_35665;
var G__35673 = count__35087_35666;
var G__35674 = (i__35088_35667 + (1));
seq__35085_35664 = G__35671;
chunk__35086_35665 = G__35672;
count__35087_35666 = G__35673;
i__35088_35667 = G__35674;
continue;
} else {
var temp__5735__auto___35675 = cljs.core.seq(seq__35085_35664);
if(temp__5735__auto___35675){
var seq__35085_35676__$1 = temp__5735__auto___35675;
if(cljs.core.chunked_seq_QMARK_(seq__35085_35676__$1)){
var c__4609__auto___35677 = cljs.core.chunk_first(seq__35085_35676__$1);
var G__35678 = cljs.core.chunk_rest(seq__35085_35676__$1);
var G__35679 = c__4609__auto___35677;
var G__35680 = cljs.core.count(c__4609__auto___35677);
var G__35681 = (0);
seq__35085_35664 = G__35678;
chunk__35086_35665 = G__35679;
count__35087_35666 = G__35680;
i__35088_35667 = G__35681;
continue;
} else {
var vec__35098_35682 = cljs.core.first(seq__35085_35676__$1);
var type_35683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35098_35682,(0),null);
var f_35684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35098_35682,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35683,((function (seq__35085_35664,chunk__35086_35665,count__35087_35666,i__35088_35667,vec__35098_35682,type_35683,f_35684,seq__35085_35676__$1,temp__5735__auto___35675,vec__35082_35661,elem_35662,selector_35663){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_35683,dommy$core$this_fn], 0));

return (f_35684.cljs$core$IFn$_invoke$arity$1 ? f_35684.cljs$core$IFn$_invoke$arity$1(e) : f_35684.call(null,e));
});})(seq__35085_35664,chunk__35086_35665,count__35087_35666,i__35088_35667,vec__35098_35682,type_35683,f_35684,seq__35085_35676__$1,temp__5735__auto___35675,vec__35082_35661,elem_35662,selector_35663))
], 0));


var G__35685 = cljs.core.next(seq__35085_35676__$1);
var G__35686 = null;
var G__35687 = (0);
var G__35688 = (0);
seq__35085_35664 = G__35685;
chunk__35086_35665 = G__35686;
count__35087_35666 = G__35687;
i__35088_35667 = G__35688;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq35080){
var G__35081 = cljs.core.first(seq35080);
var seq35080__$1 = cljs.core.next(seq35080);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35081,seq35080__$1);
}));


//# sourceMappingURL=dommy.core.js.map
