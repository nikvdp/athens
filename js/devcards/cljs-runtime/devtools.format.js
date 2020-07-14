goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__4487__auto__ = (((value == null))?null:value);
var m__4488__auto__ = (devtools.format._header[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4488__auto__.call(null,value));
} else {
var m__4485__auto__ = (devtools.format._header["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4485__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__4487__auto__ = (((value == null))?null:value);
var m__4488__auto__ = (devtools.format._has_body[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4488__auto__.call(null,value));
} else {
var m__4485__auto__ = (devtools.format._has_body["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4485__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__4487__auto__ = (((value == null))?null:value);
var m__4488__auto__ = (devtools.format._body[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4488__auto__.call(null,value));
} else {
var m__4485__auto__ = (devtools.format._body["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4485__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5733__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o23477 = temp__5733__auto__;
var temp__5733__auto____$1 = (o23477["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o23478 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o23478["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o23479 = temp__5733__auto____$2;
return (o23479["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5733__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o23480 = temp__5733__auto__;
var temp__5733__auto____$1 = (o23480["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o23481 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o23481["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o23482 = temp__5733__auto____$2;
return (o23482["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5733__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o23483 = temp__5733__auto__;
var temp__5733__auto____$1 = (o23483["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o23484 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o23484["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o23485 = temp__5733__auto____$2;
return (o23485["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5733__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o23486 = temp__5733__auto__;
var temp__5733__auto____$1 = (o23486["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o23487 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o23487["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o23488 = temp__5733__auto____$2;
return (o23488["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5733__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o23489 = temp__5733__auto__;
var temp__5733__auto____$1 = (o23489["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o23490 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o23490["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o23491 = temp__5733__auto____$2;
return (o23491["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5733__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o23492 = temp__5733__auto__;
var temp__5733__auto____$1 = (o23492["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o23493 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o23493["markup"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o23494 = temp__5733__auto____$2;
return (o23494["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5733__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o23495 = temp__5733__auto__;
var temp__5733__auto____$1 = (o23495["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o23496 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o23496["markup"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o23497 = temp__5733__auto____$2;
return (o23497["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4795__auto__ = [];
var len__4789__auto___23539 = arguments.length;
var i__4790__auto___23540 = (0);
while(true){
if((i__4790__auto___23540 < len__4789__auto___23539)){
args__4795__auto__.push((arguments[i__4790__auto___23540]));

var G__23541 = (i__4790__auto___23540 + (1));
i__4790__auto___23540 = G__23541;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq23498){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23498));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4795__auto__ = [];
var len__4789__auto___23544 = arguments.length;
var i__4790__auto___23545 = (0);
while(true){
if((i__4790__auto___23545 < len__4789__auto___23544)){
args__4795__auto__.push((arguments[i__4790__auto___23545]));

var G__23547 = (i__4790__auto___23545 + (1));
i__4790__auto___23545 = G__23547;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq23499){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23499));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4795__auto__ = [];
var len__4789__auto___23554 = arguments.length;
var i__4790__auto___23555 = (0);
while(true){
if((i__4790__auto___23555 < len__4789__auto___23554)){
args__4795__auto__.push((arguments[i__4790__auto___23555]));

var G__23556 = (i__4790__auto___23555 + (1));
i__4790__auto___23555 = G__23556;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq23500){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23500));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4795__auto__ = [];
var len__4789__auto___23557 = arguments.length;
var i__4790__auto___23558 = (0);
while(true){
if((i__4790__auto___23558 < len__4789__auto___23557)){
args__4795__auto__.push((arguments[i__4790__auto___23558]));

var G__23559 = (i__4790__auto___23558 + (1));
i__4790__auto___23558 = G__23559;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq23502){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23502));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__4795__auto__ = [];
var len__4789__auto___23560 = arguments.length;
var i__4790__auto___23561 = (0);
while(true){
if((i__4790__auto___23561 < len__4789__auto___23560)){
args__4795__auto__.push((arguments[i__4790__auto___23561]));

var G__23562 = (i__4790__auto___23561 + (1));
i__4790__auto___23561 = G__23562;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq23503){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23503));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__4795__auto__ = [];
var len__4789__auto___23563 = arguments.length;
var i__4790__auto___23564 = (0);
while(true){
if((i__4790__auto___23564 < len__4789__auto___23563)){
args__4795__auto__.push((arguments[i__4790__auto___23564]));

var G__23565 = (i__4790__auto___23564 + (1));
i__4790__auto___23564 = G__23565;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq23505){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23505));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4795__auto__ = [];
var len__4789__auto___23566 = arguments.length;
var i__4790__auto___23567 = (0);
while(true){
if((i__4790__auto___23567 < len__4789__auto___23566)){
args__4795__auto__.push((arguments[i__4790__auto___23567]));

var G__23568 = (i__4790__auto___23567 + (1));
i__4790__auto___23567 = G__23568;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq23509){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23509));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4795__auto__ = [];
var len__4789__auto___23569 = arguments.length;
var i__4790__auto___23570 = (0);
while(true){
if((i__4790__auto___23570 < len__4789__auto___23569)){
args__4795__auto__.push((arguments[i__4790__auto___23570]));

var G__23571 = (i__4790__auto___23570 + (1));
i__4790__auto___23570 = G__23571;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__23520){
var vec__23521 = p__23520;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23521,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__23510_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__23510_SHARP_,state_override], 0));
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq23515){
var G__23516 = cljs.core.first(seq23515);
var seq23515__$1 = cljs.core.next(seq23515);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23516,seq23515__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__23524 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__23525 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__23526 = (function (){var G__23527 = new cljs.core.Keyword(null,"li","li",723558921);
var G__23528 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__23529 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__23527,G__23528,G__23529) : devtools.format.make_template_fn.call(null,G__23527,G__23528,G__23529));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__23524,G__23525,G__23526) : devtools.format.make_template_fn.call(null,G__23524,G__23525,G__23526));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4795__auto__ = [];
var len__4789__auto___23574 = arguments.length;
var i__4790__auto___23575 = (0);
while(true){
if((i__4790__auto___23575 < len__4789__auto___23574)){
args__4795__auto__.push((arguments[i__4790__auto___23575]));

var G__23576 = (i__4790__auto___23575 + (1));
i__4790__auto___23575 = G__23576;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq23530){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23530));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4795__auto__ = [];
var len__4789__auto___23580 = arguments.length;
var i__4790__auto___23581 = (0);
while(true){
if((i__4790__auto___23581 < len__4789__auto___23580)){
args__4795__auto__.push((arguments[i__4790__auto___23581]));

var G__23582 = (i__4790__auto___23581 + (1));
i__4790__auto___23581 = G__23582;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq23531){
var G__23532 = cljs.core.first(seq23531);
var seq23531__$1 = cljs.core.next(seq23531);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23532,seq23531__$1);
}));


//# sourceMappingURL=devtools.format.js.map
