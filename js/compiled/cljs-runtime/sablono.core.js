goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__50559__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__50374 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__50375 = cljs.core.seq(vec__50374);
var first__50376 = cljs.core.first(seq__50375);
var seq__50375__$1 = cljs.core.next(seq__50375);
var tag = first__50376;
var body = seq__50375__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__50559 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50560__i = 0, G__50560__a = new Array(arguments.length -  0);
while (G__50560__i < G__50560__a.length) {G__50560__a[G__50560__i] = arguments[G__50560__i + 0]; ++G__50560__i;}
  args = new cljs.core.IndexedSeq(G__50560__a,0,null);
} 
return G__50559__delegate.call(this,args);};
G__50559.cljs$lang$maxFixedArity = 0;
G__50559.cljs$lang$applyTo = (function (arglist__50561){
var args = cljs.core.seq(arglist__50561);
return G__50559__delegate(args);
});
G__50559.cljs$core$IFn$_invoke$arity$variadic = G__50559__delegate;
return G__50559;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__50380(s__50381){
return (new cljs.core.LazySeq(null,(function (){
var s__50381__$1 = s__50381;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50381__$1);
if(temp__5735__auto__){
var s__50381__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50381__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50381__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50383 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50382 = (0);
while(true){
if((i__50382 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50382);
cljs.core.chunk_append(b__50383,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__50562 = (i__50382 + (1));
i__50382 = G__50562;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50383),sablono$core$update_arglists_$_iter__50380(cljs.core.chunk_rest(s__50381__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50383),null);
}
} else {
var args = cljs.core.first(s__50381__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__50380(cljs.core.rest(s__50381__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4795__auto__ = [];
var len__4789__auto___50563 = arguments.length;
var i__4790__auto___50564 = (0);
while(true){
if((i__4790__auto___50564 < len__4789__auto___50563)){
args__4795__auto__.push((arguments[i__4790__auto___50564]));

var G__50565 = (i__4790__auto___50564 + (1));
i__4790__auto___50564 = G__50565;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__50405(s__50406){
return (new cljs.core.LazySeq(null,(function (){
var s__50406__$1 = s__50406;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50406__$1);
if(temp__5735__auto__){
var s__50406__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50406__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50406__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50408 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50407 = (0);
while(true){
if((i__50407 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50407);
cljs.core.chunk_append(b__50408,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__50566 = (i__50407 + (1));
i__50407 = G__50566;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50408),sablono$core$iter__50405(cljs.core.chunk_rest(s__50406__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50408),null);
}
} else {
var style = cljs.core.first(s__50406__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__50405(cljs.core.rest(s__50406__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(styles);
}));

(sablono.core.include_css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.core.include_css.cljs$lang$applyTo = (function (seq50389){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50389));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__50417 = goog.dom.getDocument().body;
var G__50418 = (function (){var G__50419 = "script";
var G__50420 = ({"src": src});
return goog.dom.createDom(G__50419,G__50420);
})();
return goog.dom.appendChild(G__50417,G__50418);
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to50425 = (function sablono$core$link_to50425(var_args){
var args__4795__auto__ = [];
var len__4789__auto___50567 = arguments.length;
var i__4790__auto___50568 = (0);
while(true){
if((i__4790__auto___50568 < len__4789__auto___50567)){
args__4795__auto__.push((arguments[i__4790__auto___50568]));

var G__50569 = (i__4790__auto___50568 + (1));
i__4790__auto___50568 = G__50569;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to50425.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to50425.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to50425.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to50425.cljs$lang$applyTo = (function (seq50427){
var G__50428 = cljs.core.first(seq50427);
var seq50427__$1 = cljs.core.next(seq50427);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50428,seq50427__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to50425);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to50433 = (function sablono$core$mail_to50433(var_args){
var args__4795__auto__ = [];
var len__4789__auto___50572 = arguments.length;
var i__4790__auto___50573 = (0);
while(true){
if((i__4790__auto___50573 < len__4789__auto___50572)){
args__4795__auto__.push((arguments[i__4790__auto___50573]));

var G__50574 = (i__4790__auto___50573 + (1));
i__4790__auto___50573 = G__50574;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to50433.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to50433.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__50438){
var vec__50439 = p__50438;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50439,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to50433.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to50433.cljs$lang$applyTo = (function (seq50434){
var G__50435 = cljs.core.first(seq50434);
var seq50434__$1 = cljs.core.next(seq50434);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50435,seq50434__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to50433);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list50446 = (function sablono$core$unordered_list50446(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function sablono$core$unordered_list50446_$_iter__50449(s__50450){
return (new cljs.core.LazySeq(null,(function (){
var s__50450__$1 = s__50450;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50450__$1);
if(temp__5735__auto__){
var s__50450__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50450__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50450__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50452 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50451 = (0);
while(true){
if((i__50451 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50451);
cljs.core.chunk_append(b__50452,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__50576 = (i__50451 + (1));
i__50451 = G__50576;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50452),sablono$core$unordered_list50446_$_iter__50449(cljs.core.chunk_rest(s__50450__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50452),null);
}
} else {
var x = cljs.core.first(s__50450__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list50446_$_iter__50449(cljs.core.rest(s__50450__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list50446);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list50457 = (function sablono$core$ordered_list50457(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list50457_$_iter__50458(s__50459){
return (new cljs.core.LazySeq(null,(function (){
var s__50459__$1 = s__50459;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50459__$1);
if(temp__5735__auto__){
var s__50459__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50459__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50459__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50461 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50460 = (0);
while(true){
if((i__50460 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50460);
cljs.core.chunk_append(b__50461,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__50578 = (i__50460 + (1));
i__50460 = G__50578;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50461),sablono$core$ordered_list50457_$_iter__50458(cljs.core.chunk_rest(s__50459__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50461),null);
}
} else {
var x = cljs.core.first(s__50459__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list50457_$_iter__50458(cljs.core.rest(s__50459__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list50457);
/**
 * Create an image element.
 */
sablono.core.image50462 = (function sablono$core$image50462(var_args){
var G__50464 = arguments.length;
switch (G__50464) {
case 1:
return sablono.core.image50462.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image50462.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image50462.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image50462.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image50462.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image50462);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__50465_SHARP_,p2__50466_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__50465_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__50466_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__50467_SHARP_,p2__50468_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__50467_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__50468_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__50470 = arguments.length;
switch (G__50470) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Creates a color input field.
 */
sablono.core.color_field50471 = (function sablono$core$color_field50471(var_args){
var G__50473 = arguments.length;
switch (G__50473) {
case 1:
return sablono.core.color_field50471.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field50471.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field50471.cljs$core$IFn$_invoke$arity$1 = (function (name__50363__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__50363__auto__);
}));

(sablono.core.color_field50471.cljs$core$IFn$_invoke$arity$2 = (function (name__50363__auto__,value__50364__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__50363__auto__,value__50364__auto__);
}));

(sablono.core.color_field50471.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field50471);

/**
 * Creates a date input field.
 */
sablono.core.date_field50474 = (function sablono$core$date_field50474(var_args){
var G__50476 = arguments.length;
switch (G__50476) {
case 1:
return sablono.core.date_field50474.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field50474.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field50474.cljs$core$IFn$_invoke$arity$1 = (function (name__50363__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__50363__auto__);
}));

(sablono.core.date_field50474.cljs$core$IFn$_invoke$arity$2 = (function (name__50363__auto__,value__50364__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__50363__auto__,value__50364__auto__);
}));

(sablono.core.date_field50474.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field50474);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field50477 = (function sablono$core$datetime_field50477(var_args){
var G__50479 = arguments.length;
switch (G__50479) {
case 1:
return sablono.core.datetime_field50477.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field50477.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field50477.cljs$core$IFn$_invoke$arity$1 = (function (name__50363__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__50363__auto__);
}));

(sablono.core.datetime_field50477.cljs$core$IFn$_invoke$arity$2 = (function (name__50363__auto__,value__50364__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__50363__auto__,value__50364__auto__);
}));

(sablono.core.datetime_field50477.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field50477);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field50480 = (function sablono$core$datetime_local_field50480(var_args){
var G__50482 = arguments.length;
switch (G__50482) {
case 1:
return sablono.core.datetime_local_field50480.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field50480.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field50480.cljs$core$IFn$_invoke$arity$1 = (function (name__50363__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__50363__auto__);
}));

(sablono.core.datetime_local_field50480.cljs$core$IFn$_invoke$arity$2 = (function (name__50363__auto__,value__50364__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__50363__auto__,value__50364__auto__);
}));

(sablono.core.datetime_local_field50480.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field50480);

/**
 * Creates a email input field.
 */
sablono.core.email_field50483 = (function sablono$core$email_field50483(var_args){
var G__50485 = arguments.length;
switch (G__50485) {
case 1:
return sablono.core.email_field50483.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field50483.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field50483.cljs$core$IFn$_invoke$arity$1 = (function (name__50363__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__50363__auto__);
}));

(sablono.core.email_field50483.cljs$core$IFn$_invoke$arity$2 = (function (name__50363__auto__,value__50364__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__50363__auto__,value__50364__auto__);
}));

(sablono.core.email_field50483.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field50483);

/**
 * Creates a file input field.
 */
sablono.core.file_field50486 = (function sablono$core$file_field50486(var_args){
var G__50488 = arguments.length;
switch (G__50488) {
case 1:
return sablono.core.file_field50486.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field50486.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field50486.cljs$core$IFn$_invoke$arity$1 = (function (name__50363__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__50363__auto__);
}));

(sablono.core.file_field50486.cljs$core$IFn$_invoke$arity$2 = (function (name__50363__auto__,value__50364__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__50363__auto__,value__50364__auto__);
}));

(sablono.core.file_field50486.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field50486);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field50489 = (function sablono$core$hidden_field50489(var_args){
var G__50491 = arguments.length;
switch (G__50491) {
case 1:
return sablono.core.hidden_field50489.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field50489.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field50489.cljs$core$IFn$_invoke$arity$1 = (function (name__50363__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__50363__auto__);
}));

(sablono.core.hidden_field50489.cljs$core$IFn$_invoke$arity$2 = (function (name__50363__auto__,value__50364__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__50363__auto__,value__50364__auto__);
}));

(sablono.core.hidden_field50489.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field50489);

/**
 * Creates a month input field.
 */
sablono.core.month_field50492 = (function sablono$core$month_field50492(var_args){
var G__50494 = arguments.length;
switch (G__50494) {
case 1:
return sablono.core.month_field50492.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field50492.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field50492.cljs$core$IFn$_invoke$arity$1 = (function (name__50363__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__50363__auto__);
}));

(sablono.core.month_field50492.cljs$core$IFn$_invoke$arity$2 = (function (name__50363__auto__,value__50364__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__50363__auto__,value__50364__auto__);
}));

(sablono.core.month_field50492.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field50492);

/**
 * Creates a number input field.
 */
sablono.core.number_field50495 = (function sablono$core$number_field50495(var_args){
var G__50497 = arguments.length;
switch (G__50497) {
case 1:
return sablono.core.number_field50495.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field50495.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field50495.cljs$core$IFn$_invoke$arity$1 = (function (name__50363__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__50363__auto__);
}));

(sablono.core.number_field50495.cljs$core$IFn$_invoke$arity$2 = (function (name__50363__auto__,value__50364__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__50363__auto__,value__50364__auto__);
}));

(sablono.core.number_field50495.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field50495);

/**
 * Creates a password input field.
 */
sablono.core.password_field50498 = (function sablono$core$password_field50498(var_args){
var G__50500 = arguments.length;
switch (G__50500) {
case 1:
return sablono.core.password_field50498.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field50498.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field50498.cljs$core$IFn$_invoke$arity$1 = (function (name__50363__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__50363__auto__);
}));

(sablono.core.password_field50498.cljs$core$IFn$_invoke$arity$2 = (function (name__50363__auto__,value__50364__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__50363__auto__,value__50364__auto__);
}));

(sablono.core.password_field50498.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field50498);

/**
 * Creates a range input field.
 */
sablono.core.range_field50501 = (function sablono$core$range_field50501(var_args){
var G__50503 = arguments.length;
switch (G__50503) {
case 1:
return sablono.core.range_field50501.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field50501.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field50501.cljs$core$IFn$_invoke$arity$1 = (function (name__50363__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__50363__auto__);
}));

(sablono.core.range_field50501.cljs$core$IFn$_invoke$arity$2 = (function (name__50363__auto__,value__50364__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__50363__auto__,value__50364__auto__);
}));

(sablono.core.range_field50501.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field50501);

/**
 * Creates a search input field.
 */
sablono.core.search_field50504 = (function sablono$core$search_field50504(var_args){
var G__50506 = arguments.length;
switch (G__50506) {
case 1:
return sablono.core.search_field50504.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field50504.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field50504.cljs$core$IFn$_invoke$arity$1 = (function (name__50363__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__50363__auto__);
}));

(sablono.core.search_field50504.cljs$core$IFn$_invoke$arity$2 = (function (name__50363__auto__,value__50364__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__50363__auto__,value__50364__auto__);
}));

(sablono.core.search_field50504.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field50504);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field50507 = (function sablono$core$tel_field50507(var_args){
var G__50509 = arguments.length;
switch (G__50509) {
case 1:
return sablono.core.tel_field50507.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field50507.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field50507.cljs$core$IFn$_invoke$arity$1 = (function (name__50363__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__50363__auto__);
}));

(sablono.core.tel_field50507.cljs$core$IFn$_invoke$arity$2 = (function (name__50363__auto__,value__50364__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__50363__auto__,value__50364__auto__);
}));

(sablono.core.tel_field50507.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field50507);

/**
 * Creates a text input field.
 */
sablono.core.text_field50510 = (function sablono$core$text_field50510(var_args){
var G__50512 = arguments.length;
switch (G__50512) {
case 1:
return sablono.core.text_field50510.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field50510.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field50510.cljs$core$IFn$_invoke$arity$1 = (function (name__50363__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__50363__auto__);
}));

(sablono.core.text_field50510.cljs$core$IFn$_invoke$arity$2 = (function (name__50363__auto__,value__50364__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__50363__auto__,value__50364__auto__);
}));

(sablono.core.text_field50510.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field50510);

/**
 * Creates a time input field.
 */
sablono.core.time_field50513 = (function sablono$core$time_field50513(var_args){
var G__50515 = arguments.length;
switch (G__50515) {
case 1:
return sablono.core.time_field50513.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field50513.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field50513.cljs$core$IFn$_invoke$arity$1 = (function (name__50363__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__50363__auto__);
}));

(sablono.core.time_field50513.cljs$core$IFn$_invoke$arity$2 = (function (name__50363__auto__,value__50364__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__50363__auto__,value__50364__auto__);
}));

(sablono.core.time_field50513.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field50513);

/**
 * Creates a url input field.
 */
sablono.core.url_field50516 = (function sablono$core$url_field50516(var_args){
var G__50518 = arguments.length;
switch (G__50518) {
case 1:
return sablono.core.url_field50516.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field50516.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field50516.cljs$core$IFn$_invoke$arity$1 = (function (name__50363__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__50363__auto__);
}));

(sablono.core.url_field50516.cljs$core$IFn$_invoke$arity$2 = (function (name__50363__auto__,value__50364__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__50363__auto__,value__50364__auto__);
}));

(sablono.core.url_field50516.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field50516);

/**
 * Creates a week input field.
 */
sablono.core.week_field50519 = (function sablono$core$week_field50519(var_args){
var G__50521 = arguments.length;
switch (G__50521) {
case 1:
return sablono.core.week_field50519.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field50519.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field50519.cljs$core$IFn$_invoke$arity$1 = (function (name__50363__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__50363__auto__);
}));

(sablono.core.week_field50519.cljs$core$IFn$_invoke$arity$2 = (function (name__50363__auto__,value__50364__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__50363__auto__,value__50364__auto__);
}));

(sablono.core.week_field50519.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field50519);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box50522 = (function sablono$core$check_box50522(var_args){
var G__50524 = arguments.length;
switch (G__50524) {
case 1:
return sablono.core.check_box50522.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box50522.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box50522.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box50522.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box50522.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box50522.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box50522.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box50522);
/**
 * Creates a radio button.
 */
sablono.core.radio_button50525 = (function sablono$core$radio_button50525(var_args){
var G__50527 = arguments.length;
switch (G__50527) {
case 1:
return sablono.core.radio_button50525.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button50525.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button50525.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button50525.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button50525.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button50525.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button50525.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button50525);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__50528 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__50528);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options50529 = (function sablono$core$select_options50529(coll){
var iter__4582__auto__ = (function sablono$core$select_options50529_$_iter__50530(s__50531){
return (new cljs.core.LazySeq(null,(function (){
var s__50531__$1 = s__50531;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50531__$1);
if(temp__5735__auto__){
var s__50531__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50531__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50531__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50533 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50532 = (0);
while(true){
if((i__50532 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50532);
cljs.core.chunk_append(b__50533,((cljs.core.sequential_QMARK_(x))?(function (){var vec__50534 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50534,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50534,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50534,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options50529.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options50529.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options50529.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__50605 = (i__50532 + (1));
i__50532 = G__50605;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50533),sablono$core$select_options50529_$_iter__50530(cljs.core.chunk_rest(s__50531__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50533),null);
}
} else {
var x = cljs.core.first(s__50531__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__50537 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50537,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50537,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50537,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options50529.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options50529.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options50529.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options50529_$_iter__50530(cljs.core.rest(s__50531__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options50529);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down50540 = (function sablono$core$drop_down50540(var_args){
var G__50542 = arguments.length;
switch (G__50542) {
case 2:
return sablono.core.drop_down50540.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down50540.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down50540.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down50540.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down50540.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down50540.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down50540);
/**
 * Creates a text area element.
 */
sablono.core.text_area50543 = (function sablono$core$text_area50543(var_args){
var G__50545 = arguments.length;
switch (G__50545) {
case 1:
return sablono.core.text_area50543.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area50543.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area50543.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area50543.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area50543.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area50543);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label50546 = (function sablono$core$label50546(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label50546);
/**
 * Creates a submit button.
 */
sablono.core.submit_button50547 = (function sablono$core$submit_button50547(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button50547);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button50548 = (function sablono$core$reset_button50548(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button50548);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to50549 = (function sablono$core$form_to50549(var_args){
var args__4795__auto__ = [];
var len__4789__auto___50624 = arguments.length;
var i__4790__auto___50625 = (0);
while(true){
if((i__4790__auto___50625 < len__4789__auto___50624)){
args__4795__auto__.push((arguments[i__4790__auto___50625]));

var G__50626 = (i__4790__auto___50625 + (1));
i__4790__auto___50625 = G__50626;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to50549.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to50549.cljs$core$IFn$_invoke$arity$variadic = (function (p__50552,body){
var vec__50553 = p__50552;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50553,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50553,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__50556 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__50557 = "_method";
var G__50558 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__50556,G__50557,G__50558) : sablono.core.hidden_field.call(null,G__50556,G__50557,G__50558));
})()], null)),body));
}));

(sablono.core.form_to50549.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to50549.cljs$lang$applyTo = (function (seq50550){
var G__50551 = cljs.core.first(seq50550);
var seq50550__$1 = cljs.core.next(seq50550);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50551,seq50550__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to50549);

//# sourceMappingURL=sablono.core.js.map
