goog.provide('garden.stylesheet');
goog.require('cljs.core');
goog.require('garden.util');
goog.require('garden.color');
goog.require('garden.types');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
garden.stylesheet.rule = (function garden$stylesheet$rule(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34547 = arguments.length;
var i__4790__auto___34548 = (0);
while(true){
if((i__4790__auto___34548 < len__4789__auto___34547)){
args__4795__auto__.push((arguments[i__4790__auto___34548]));

var G__34549 = (i__4790__auto___34548 + (1));
i__4790__auto___34548 = G__34549;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__34551__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__34551 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__34552__i = 0, G__34552__a = new Array(arguments.length -  0);
while (G__34552__i < G__34552__a.length) {G__34552__a[G__34552__i] = arguments[G__34552__i + 0]; ++G__34552__i;}
  children = new cljs.core.IndexedSeq(G__34552__a,0,null);
} 
return G__34551__delegate.call(this,children);};
G__34551.cljs$lang$maxFixedArity = 0;
G__34551.cljs$lang$applyTo = (function (arglist__34553){
var children = cljs.core.seq(arglist__34553);
return G__34551__delegate(children);
});
G__34551.cljs$core$IFn$_invoke$arity$variadic = G__34551__delegate;
return G__34551;
})()
;
}
}));

(garden.stylesheet.rule.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.rule.cljs$lang$applyTo = (function (seq34528){
var G__34529 = cljs.core.first(seq34528);
var seq34528__$1 = cljs.core.next(seq34528);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34529,seq34528__$1);
}));

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__34554__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__34554 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34555__i = 0, G__34555__a = new Array(arguments.length -  0);
while (G__34555__i < G__34555__a.length) {G__34555__a[G__34555__i] = arguments[G__34555__i + 0]; ++G__34555__i;}
  args = new cljs.core.IndexedSeq(G__34555__a,0,null);
} 
return G__34554__delegate.call(this,args);};
G__34554.cljs$lang$maxFixedArity = 0;
G__34554.cljs$lang$applyTo = (function (arglist__34556){
var args = cljs.core.seq(arglist__34556);
return G__34554__delegate(args);
});
G__34554.cljs$core$IFn$_invoke$arity$variadic = G__34554__delegate;
return G__34554;
})()
;
});
garden.stylesheet.at_rule = (function garden$stylesheet$at_rule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
garden.stylesheet.at_font_face = (function garden$stylesheet$at_font_face(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34557 = arguments.length;
var i__4790__auto___34558 = (0);
while(true){
if((i__4790__auto___34558 < len__4789__auto___34557)){
args__4795__auto__.push((arguments[i__4790__auto___34558]));

var G__34559 = (i__4790__auto___34558 + (1));
i__4790__auto___34558 = G__34559;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
}));

(garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq34533){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34533));
}));

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__34537 = arguments.length;
switch (G__34537) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___34561 = arguments.length;
var i__4790__auto___34562 = (0);
while(true){
if((i__4790__auto___34562 < len__4789__auto___34561)){
args_arr__4810__auto__.push((arguments[i__4790__auto___34562]));

var G__34563 = (i__4790__auto___34562 + (1));
i__4790__auto___34562 = G__34563;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((1)),(0),null));
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4811__auto__);

}
});

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
}));

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
}));

/** @this {Function} */
(garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq34535){
var G__34536 = cljs.core.first(seq34535);
var seq34535__$1 = cljs.core.next(seq34535);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34536,seq34535__$1);
}));

(garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1));

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34564 = arguments.length;
var i__4790__auto___34565 = (0);
while(true){
if((i__4790__auto___34565 < len__4789__auto___34564)){
args__4795__auto__.push((arguments[i__4790__auto___34565]));

var G__34566 = (i__4790__auto___34565 + (1));
i__4790__auto___34565 = G__34566;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq34539){
var G__34540 = cljs.core.first(seq34539);
var seq34539__$1 = cljs.core.next(seq34539);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34540,seq34539__$1);
}));

garden.stylesheet.at_supports = (function garden$stylesheet$at_supports(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34567 = arguments.length;
var i__4790__auto___34568 = (0);
while(true){
if((i__4790__auto___34568 < len__4789__auto___34567)){
args__4795__auto__.push((arguments[i__4790__auto___34568]));

var G__34569 = (i__4790__auto___34568 + (1));
i__4790__auto___34568 = G__34569;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic = (function (feature_queries,rules){

return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"feature","feature",27242652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feature-queries","feature-queries",-1340998408),feature_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(garden.stylesheet.at_supports.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq34542){
var G__34543 = cljs.core.first(seq34542);
var seq34542__$1 = cljs.core.next(seq34542);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34543,seq34542__$1);
}));

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34570 = arguments.length;
var i__4790__auto___34571 = (0);
while(true){
if((i__4790__auto___34571 < len__4789__auto___34570)){
args__4795__auto__.push((arguments[i__4790__auto___34571]));

var G__34572 = (i__4790__auto___34571 + (1));
i__4790__auto___34571 = G__34572;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
}));

(garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq34545){
var G__34546 = cljs.core.first(seq34545);
var seq34545__$1 = cljs.core.next(seq34545);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34546,seq34545__$1);
}));

/**
 * Create a color from RGB values.
 */
garden.stylesheet.rgb = (function garden$stylesheet$rgb(r,g,b){
return garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
garden.stylesheet.hsl = (function garden$stylesheet$hsl(h,s,l){
return garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=garden.stylesheet.js.map
