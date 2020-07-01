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
var G__41164__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__40977 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__40978 = cljs.core.seq(vec__40977);
var first__40979 = cljs.core.first(seq__40978);
var seq__40978__$1 = cljs.core.next(seq__40978);
var tag = first__40979;
var body = seq__40978__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__41164 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41165__i = 0, G__41165__a = new Array(arguments.length -  0);
while (G__41165__i < G__41165__a.length) {G__41165__a[G__41165__i] = arguments[G__41165__i + 0]; ++G__41165__i;}
  args = new cljs.core.IndexedSeq(G__41165__a,0,null);
} 
return G__41164__delegate.call(this,args);};
G__41164.cljs$lang$maxFixedArity = 0;
G__41164.cljs$lang$applyTo = (function (arglist__41166){
var args = cljs.core.seq(arglist__41166);
return G__41164__delegate(args);
});
G__41164.cljs$core$IFn$_invoke$arity$variadic = G__41164__delegate;
return G__41164;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__40984(s__40985){
return (new cljs.core.LazySeq(null,(function (){
var s__40985__$1 = s__40985;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40985__$1);
if(temp__5735__auto__){
var s__40985__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40985__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__40985__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__40987 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__40986 = (0);
while(true){
if((i__40986 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__40986);
cljs.core.chunk_append(b__40987,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__41167 = (i__40986 + (1));
i__40986 = G__41167;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40987),sablono$core$update_arglists_$_iter__40984(cljs.core.chunk_rest(s__40985__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40987),null);
}
} else {
var args = cljs.core.first(s__40985__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__40984(cljs.core.rest(s__40985__$2)));
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
var len__4789__auto___41168 = arguments.length;
var i__4790__auto___41169 = (0);
while(true){
if((i__4790__auto___41169 < len__4789__auto___41168)){
args__4795__auto__.push((arguments[i__4790__auto___41169]));

var G__41170 = (i__4790__auto___41169 + (1));
i__4790__auto___41169 = G__41170;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__40994(s__40995){
return (new cljs.core.LazySeq(null,(function (){
var s__40995__$1 = s__40995;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40995__$1);
if(temp__5735__auto__){
var s__40995__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40995__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__40995__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__40997 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__40996 = (0);
while(true){
if((i__40996 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__40996);
cljs.core.chunk_append(b__40997,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__41171 = (i__40996 + (1));
i__40996 = G__41171;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40997),sablono$core$iter__40994(cljs.core.chunk_rest(s__40995__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40997),null);
}
} else {
var style = cljs.core.first(s__40995__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__40994(cljs.core.rest(s__40995__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq40989){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40989));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__41014 = goog.dom.getDocument().body;
var G__41015 = (function (){var G__41016 = "script";
var G__41017 = ({"src": src});
return goog.dom.createDom(G__41016,G__41017);
})();
return goog.dom.appendChild(G__41014,G__41015);
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
sablono.core.link_to41022 = (function sablono$core$link_to41022(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41172 = arguments.length;
var i__4790__auto___41173 = (0);
while(true){
if((i__4790__auto___41173 < len__4789__auto___41172)){
args__4795__auto__.push((arguments[i__4790__auto___41173]));

var G__41174 = (i__4790__auto___41173 + (1));
i__4790__auto___41173 = G__41174;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to41022.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to41022.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to41022.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to41022.cljs$lang$applyTo = (function (seq41023){
var G__41024 = cljs.core.first(seq41023);
var seq41023__$1 = cljs.core.next(seq41023);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41024,seq41023__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to41022);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to41031 = (function sablono$core$mail_to41031(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41175 = arguments.length;
var i__4790__auto___41176 = (0);
while(true){
if((i__4790__auto___41176 < len__4789__auto___41175)){
args__4795__auto__.push((arguments[i__4790__auto___41176]));

var G__41177 = (i__4790__auto___41176 + (1));
i__4790__auto___41176 = G__41177;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to41031.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to41031.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__41037){
var vec__41038 = p__41037;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41038,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to41031.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to41031.cljs$lang$applyTo = (function (seq41034){
var G__41035 = cljs.core.first(seq41034);
var seq41034__$1 = cljs.core.next(seq41034);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41035,seq41034__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to41031);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list41045 = (function sablono$core$unordered_list41045(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function sablono$core$unordered_list41045_$_iter__41046(s__41047){
return (new cljs.core.LazySeq(null,(function (){
var s__41047__$1 = s__41047;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41047__$1);
if(temp__5735__auto__){
var s__41047__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41047__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41047__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41049 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41048 = (0);
while(true){
if((i__41048 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__41048);
cljs.core.chunk_append(b__41049,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__41178 = (i__41048 + (1));
i__41048 = G__41178;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41049),sablono$core$unordered_list41045_$_iter__41046(cljs.core.chunk_rest(s__41047__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41049),null);
}
} else {
var x = cljs.core.first(s__41047__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list41045_$_iter__41046(cljs.core.rest(s__41047__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list41045);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list41056 = (function sablono$core$ordered_list41056(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list41056_$_iter__41057(s__41058){
return (new cljs.core.LazySeq(null,(function (){
var s__41058__$1 = s__41058;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41058__$1);
if(temp__5735__auto__){
var s__41058__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41058__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41058__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41060 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41059 = (0);
while(true){
if((i__41059 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__41059);
cljs.core.chunk_append(b__41060,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__41179 = (i__41059 + (1));
i__41059 = G__41179;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41060),sablono$core$ordered_list41056_$_iter__41057(cljs.core.chunk_rest(s__41058__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41060),null);
}
} else {
var x = cljs.core.first(s__41058__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list41056_$_iter__41057(cljs.core.rest(s__41058__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list41056);
/**
 * Create an image element.
 */
sablono.core.image41067 = (function sablono$core$image41067(var_args){
var G__41069 = arguments.length;
switch (G__41069) {
case 1:
return sablono.core.image41067.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image41067.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image41067.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image41067.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image41067.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image41067);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__41070_SHARP_,p2__41071_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41070_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__41071_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__41072_SHARP_,p2__41073_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41072_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__41073_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__41075 = arguments.length;
switch (G__41075) {
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
sablono.core.color_field41076 = (function sablono$core$color_field41076(var_args){
var G__41078 = arguments.length;
switch (G__41078) {
case 1:
return sablono.core.color_field41076.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field41076.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field41076.cljs$core$IFn$_invoke$arity$1 = (function (name__40968__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__40968__auto__);
}));

(sablono.core.color_field41076.cljs$core$IFn$_invoke$arity$2 = (function (name__40968__auto__,value__40969__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__40968__auto__,value__40969__auto__);
}));

(sablono.core.color_field41076.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field41076);

/**
 * Creates a date input field.
 */
sablono.core.date_field41079 = (function sablono$core$date_field41079(var_args){
var G__41081 = arguments.length;
switch (G__41081) {
case 1:
return sablono.core.date_field41079.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field41079.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field41079.cljs$core$IFn$_invoke$arity$1 = (function (name__40968__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__40968__auto__);
}));

(sablono.core.date_field41079.cljs$core$IFn$_invoke$arity$2 = (function (name__40968__auto__,value__40969__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__40968__auto__,value__40969__auto__);
}));

(sablono.core.date_field41079.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field41079);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field41082 = (function sablono$core$datetime_field41082(var_args){
var G__41084 = arguments.length;
switch (G__41084) {
case 1:
return sablono.core.datetime_field41082.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field41082.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field41082.cljs$core$IFn$_invoke$arity$1 = (function (name__40968__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__40968__auto__);
}));

(sablono.core.datetime_field41082.cljs$core$IFn$_invoke$arity$2 = (function (name__40968__auto__,value__40969__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__40968__auto__,value__40969__auto__);
}));

(sablono.core.datetime_field41082.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field41082);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field41085 = (function sablono$core$datetime_local_field41085(var_args){
var G__41087 = arguments.length;
switch (G__41087) {
case 1:
return sablono.core.datetime_local_field41085.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field41085.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field41085.cljs$core$IFn$_invoke$arity$1 = (function (name__40968__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__40968__auto__);
}));

(sablono.core.datetime_local_field41085.cljs$core$IFn$_invoke$arity$2 = (function (name__40968__auto__,value__40969__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__40968__auto__,value__40969__auto__);
}));

(sablono.core.datetime_local_field41085.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field41085);

/**
 * Creates a email input field.
 */
sablono.core.email_field41088 = (function sablono$core$email_field41088(var_args){
var G__41090 = arguments.length;
switch (G__41090) {
case 1:
return sablono.core.email_field41088.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field41088.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field41088.cljs$core$IFn$_invoke$arity$1 = (function (name__40968__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__40968__auto__);
}));

(sablono.core.email_field41088.cljs$core$IFn$_invoke$arity$2 = (function (name__40968__auto__,value__40969__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__40968__auto__,value__40969__auto__);
}));

(sablono.core.email_field41088.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field41088);

/**
 * Creates a file input field.
 */
sablono.core.file_field41091 = (function sablono$core$file_field41091(var_args){
var G__41093 = arguments.length;
switch (G__41093) {
case 1:
return sablono.core.file_field41091.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field41091.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field41091.cljs$core$IFn$_invoke$arity$1 = (function (name__40968__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__40968__auto__);
}));

(sablono.core.file_field41091.cljs$core$IFn$_invoke$arity$2 = (function (name__40968__auto__,value__40969__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__40968__auto__,value__40969__auto__);
}));

(sablono.core.file_field41091.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field41091);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field41094 = (function sablono$core$hidden_field41094(var_args){
var G__41096 = arguments.length;
switch (G__41096) {
case 1:
return sablono.core.hidden_field41094.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field41094.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field41094.cljs$core$IFn$_invoke$arity$1 = (function (name__40968__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__40968__auto__);
}));

(sablono.core.hidden_field41094.cljs$core$IFn$_invoke$arity$2 = (function (name__40968__auto__,value__40969__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__40968__auto__,value__40969__auto__);
}));

(sablono.core.hidden_field41094.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field41094);

/**
 * Creates a month input field.
 */
sablono.core.month_field41097 = (function sablono$core$month_field41097(var_args){
var G__41099 = arguments.length;
switch (G__41099) {
case 1:
return sablono.core.month_field41097.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field41097.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field41097.cljs$core$IFn$_invoke$arity$1 = (function (name__40968__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__40968__auto__);
}));

(sablono.core.month_field41097.cljs$core$IFn$_invoke$arity$2 = (function (name__40968__auto__,value__40969__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__40968__auto__,value__40969__auto__);
}));

(sablono.core.month_field41097.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field41097);

/**
 * Creates a number input field.
 */
sablono.core.number_field41100 = (function sablono$core$number_field41100(var_args){
var G__41102 = arguments.length;
switch (G__41102) {
case 1:
return sablono.core.number_field41100.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field41100.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field41100.cljs$core$IFn$_invoke$arity$1 = (function (name__40968__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__40968__auto__);
}));

(sablono.core.number_field41100.cljs$core$IFn$_invoke$arity$2 = (function (name__40968__auto__,value__40969__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__40968__auto__,value__40969__auto__);
}));

(sablono.core.number_field41100.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field41100);

/**
 * Creates a password input field.
 */
sablono.core.password_field41103 = (function sablono$core$password_field41103(var_args){
var G__41105 = arguments.length;
switch (G__41105) {
case 1:
return sablono.core.password_field41103.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field41103.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field41103.cljs$core$IFn$_invoke$arity$1 = (function (name__40968__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__40968__auto__);
}));

(sablono.core.password_field41103.cljs$core$IFn$_invoke$arity$2 = (function (name__40968__auto__,value__40969__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__40968__auto__,value__40969__auto__);
}));

(sablono.core.password_field41103.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field41103);

/**
 * Creates a range input field.
 */
sablono.core.range_field41106 = (function sablono$core$range_field41106(var_args){
var G__41108 = arguments.length;
switch (G__41108) {
case 1:
return sablono.core.range_field41106.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field41106.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field41106.cljs$core$IFn$_invoke$arity$1 = (function (name__40968__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__40968__auto__);
}));

(sablono.core.range_field41106.cljs$core$IFn$_invoke$arity$2 = (function (name__40968__auto__,value__40969__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__40968__auto__,value__40969__auto__);
}));

(sablono.core.range_field41106.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field41106);

/**
 * Creates a search input field.
 */
sablono.core.search_field41109 = (function sablono$core$search_field41109(var_args){
var G__41111 = arguments.length;
switch (G__41111) {
case 1:
return sablono.core.search_field41109.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field41109.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field41109.cljs$core$IFn$_invoke$arity$1 = (function (name__40968__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__40968__auto__);
}));

(sablono.core.search_field41109.cljs$core$IFn$_invoke$arity$2 = (function (name__40968__auto__,value__40969__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__40968__auto__,value__40969__auto__);
}));

(sablono.core.search_field41109.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field41109);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field41112 = (function sablono$core$tel_field41112(var_args){
var G__41114 = arguments.length;
switch (G__41114) {
case 1:
return sablono.core.tel_field41112.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field41112.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field41112.cljs$core$IFn$_invoke$arity$1 = (function (name__40968__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__40968__auto__);
}));

(sablono.core.tel_field41112.cljs$core$IFn$_invoke$arity$2 = (function (name__40968__auto__,value__40969__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__40968__auto__,value__40969__auto__);
}));

(sablono.core.tel_field41112.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field41112);

/**
 * Creates a text input field.
 */
sablono.core.text_field41115 = (function sablono$core$text_field41115(var_args){
var G__41117 = arguments.length;
switch (G__41117) {
case 1:
return sablono.core.text_field41115.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field41115.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field41115.cljs$core$IFn$_invoke$arity$1 = (function (name__40968__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__40968__auto__);
}));

(sablono.core.text_field41115.cljs$core$IFn$_invoke$arity$2 = (function (name__40968__auto__,value__40969__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__40968__auto__,value__40969__auto__);
}));

(sablono.core.text_field41115.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field41115);

/**
 * Creates a time input field.
 */
sablono.core.time_field41118 = (function sablono$core$time_field41118(var_args){
var G__41120 = arguments.length;
switch (G__41120) {
case 1:
return sablono.core.time_field41118.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field41118.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field41118.cljs$core$IFn$_invoke$arity$1 = (function (name__40968__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__40968__auto__);
}));

(sablono.core.time_field41118.cljs$core$IFn$_invoke$arity$2 = (function (name__40968__auto__,value__40969__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__40968__auto__,value__40969__auto__);
}));

(sablono.core.time_field41118.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field41118);

/**
 * Creates a url input field.
 */
sablono.core.url_field41121 = (function sablono$core$url_field41121(var_args){
var G__41123 = arguments.length;
switch (G__41123) {
case 1:
return sablono.core.url_field41121.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field41121.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field41121.cljs$core$IFn$_invoke$arity$1 = (function (name__40968__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__40968__auto__);
}));

(sablono.core.url_field41121.cljs$core$IFn$_invoke$arity$2 = (function (name__40968__auto__,value__40969__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__40968__auto__,value__40969__auto__);
}));

(sablono.core.url_field41121.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field41121);

/**
 * Creates a week input field.
 */
sablono.core.week_field41124 = (function sablono$core$week_field41124(var_args){
var G__41126 = arguments.length;
switch (G__41126) {
case 1:
return sablono.core.week_field41124.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field41124.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field41124.cljs$core$IFn$_invoke$arity$1 = (function (name__40968__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__40968__auto__);
}));

(sablono.core.week_field41124.cljs$core$IFn$_invoke$arity$2 = (function (name__40968__auto__,value__40969__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__40968__auto__,value__40969__auto__);
}));

(sablono.core.week_field41124.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field41124);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box41127 = (function sablono$core$check_box41127(var_args){
var G__41129 = arguments.length;
switch (G__41129) {
case 1:
return sablono.core.check_box41127.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box41127.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box41127.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box41127.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box41127.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box41127.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box41127.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box41127);
/**
 * Creates a radio button.
 */
sablono.core.radio_button41130 = (function sablono$core$radio_button41130(var_args){
var G__41132 = arguments.length;
switch (G__41132) {
case 1:
return sablono.core.radio_button41130.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button41130.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button41130.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button41130.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button41130.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button41130.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button41130.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button41130);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__41133 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__41133);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options41134 = (function sablono$core$select_options41134(coll){
var iter__4582__auto__ = (function sablono$core$select_options41134_$_iter__41135(s__41136){
return (new cljs.core.LazySeq(null,(function (){
var s__41136__$1 = s__41136;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41136__$1);
if(temp__5735__auto__){
var s__41136__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41136__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41136__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41138 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41137 = (0);
while(true){
if((i__41137 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__41137);
cljs.core.chunk_append(b__41138,((cljs.core.sequential_QMARK_(x))?(function (){var vec__41139 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41139,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41139,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41139,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options41134.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options41134.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options41134.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__41210 = (i__41137 + (1));
i__41137 = G__41210;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41138),sablono$core$select_options41134_$_iter__41135(cljs.core.chunk_rest(s__41136__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41138),null);
}
} else {
var x = cljs.core.first(s__41136__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__41142 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41142,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41142,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41142,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options41134.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options41134.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options41134.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options41134_$_iter__41135(cljs.core.rest(s__41136__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options41134);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down41145 = (function sablono$core$drop_down41145(var_args){
var G__41147 = arguments.length;
switch (G__41147) {
case 2:
return sablono.core.drop_down41145.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down41145.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down41145.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down41145.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down41145.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down41145.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down41145);
/**
 * Creates a text area element.
 */
sablono.core.text_area41148 = (function sablono$core$text_area41148(var_args){
var G__41150 = arguments.length;
switch (G__41150) {
case 1:
return sablono.core.text_area41148.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area41148.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area41148.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area41148.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area41148.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area41148);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label41151 = (function sablono$core$label41151(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label41151);
/**
 * Creates a submit button.
 */
sablono.core.submit_button41152 = (function sablono$core$submit_button41152(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button41152);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button41153 = (function sablono$core$reset_button41153(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button41153);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to41154 = (function sablono$core$form_to41154(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41213 = arguments.length;
var i__4790__auto___41214 = (0);
while(true){
if((i__4790__auto___41214 < len__4789__auto___41213)){
args__4795__auto__.push((arguments[i__4790__auto___41214]));

var G__41215 = (i__4790__auto___41214 + (1));
i__4790__auto___41214 = G__41215;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to41154.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to41154.cljs$core$IFn$_invoke$arity$variadic = (function (p__41157,body){
var vec__41158 = p__41157;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41158,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41158,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__41161 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__41162 = "_method";
var G__41163 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__41161,G__41162,G__41163) : sablono.core.hidden_field.call(null,G__41161,G__41162,G__41163));
})()], null)),body));
}));

(sablono.core.form_to41154.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to41154.cljs$lang$applyTo = (function (seq41155){
var G__41156 = cljs.core.first(seq41155);
var seq41155__$1 = cljs.core.next(seq41155);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41156,seq41155__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to41154);

//# sourceMappingURL=sablono.core.js.map
