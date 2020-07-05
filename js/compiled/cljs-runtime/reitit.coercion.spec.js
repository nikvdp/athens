goog.provide('reitit.coercion.spec');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('spec_tools.core');
goog.require('spec_tools.data_spec');
goog.require('spec_tools.swagger.core');
goog.require('reitit.coercion');
goog.require('clojure.set');
reitit.coercion.spec.string_transformer = spec_tools.core.type_transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([spec_tools.core.strip_extra_keys_transformer,spec_tools.core.string_transformer], 0));
reitit.coercion.spec.json_transformer = spec_tools.core.type_transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([spec_tools.core.strip_extra_keys_transformer,spec_tools.core.json_transformer], 0));
reitit.coercion.spec.strip_extra_keys_transformer = spec_tools.core.strip_extra_keys_transformer;
reitit.coercion.spec.no_op_transformer = (function (){
if((typeof reitit !== 'undefined') && (typeof reitit.coercion !== 'undefined') && (typeof reitit.coercion.spec !== 'undefined') && (typeof reitit.coercion.spec.t_reitit$coercion$spec57712 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {spec_tools.core.Transformer}
 * @implements {cljs.core.IWithMeta}
*/
reitit.coercion.spec.t_reitit$coercion$spec57712 = (function (meta57713){
this.meta57713 = meta57713;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.coercion.spec.t_reitit$coercion$spec57712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57714,meta57713__$1){
var self__ = this;
var _57714__$1 = this;
return (new reitit.coercion.spec.t_reitit$coercion$spec57712(meta57713__$1));
}));

(reitit.coercion.spec.t_reitit$coercion$spec57712.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57714){
var self__ = this;
var _57714__$1 = this;
return self__.meta57713;
}));

(reitit.coercion.spec.t_reitit$coercion$spec57712.prototype.spec_tools$core$Transformer$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.coercion.spec.t_reitit$coercion$spec57712.prototype.spec_tools$core$Transformer$_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword("reitit.coercion.spec","no-op","reitit.coercion.spec/no-op",-549362779);
}));

(reitit.coercion.spec.t_reitit$coercion$spec57712.prototype.spec_tools$core$Transformer$_encoder$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return null;
}));

(reitit.coercion.spec.t_reitit$coercion$spec57712.prototype.spec_tools$core$Transformer$_decoder$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return null;
}));

(reitit.coercion.spec.t_reitit$coercion$spec57712.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta57713","meta57713",-1854482875,null)], null);
}));

(reitit.coercion.spec.t_reitit$coercion$spec57712.cljs$lang$type = true);

(reitit.coercion.spec.t_reitit$coercion$spec57712.cljs$lang$ctorStr = "reitit.coercion.spec/t_reitit$coercion$spec57712");

(reitit.coercion.spec.t_reitit$coercion$spec57712.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"reitit.coercion.spec/t_reitit$coercion$spec57712");
}));

/**
 * Positional factory function for reitit.coercion.spec/t_reitit$coercion$spec57712.
 */
reitit.coercion.spec.__GT_t_reitit$coercion$spec57712 = (function reitit$coercion$spec$__GT_t_reitit$coercion$spec57712(meta57713){
return (new reitit.coercion.spec.t_reitit$coercion$spec57712(meta57713));
});

}

return (new reitit.coercion.spec.t_reitit$coercion$spec57712(cljs.core.PersistentArrayMap.EMPTY));
})()
;

/**
 * @interface
 */
reitit.coercion.spec.IntoSpec = function(){};

reitit.coercion.spec.into_spec = (function reitit$coercion$spec$into_spec(this$,name){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$spec$IntoSpec$into_spec$arity$2 == null)))))){
return this$.reitit$coercion$spec$IntoSpec$into_spec$arity$2(this$,name);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (reitit.coercion.spec.into_spec[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(this$,name) : m__4488__auto__.call(null,this$,name));
} else {
var m__4485__auto__ = (reitit.coercion.spec.into_spec["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(this$,name) : m__4485__auto__.call(null,this$,name));
} else {
throw cljs.core.missing_protocol("IntoSpec.into-spec",this$);
}
}
}
});

reitit.coercion.spec.ensure_name = (function reitit$coercion$spec$ensure_name(_QMARK_name){
var or__4185__auto__ = _QMARK_name;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("spec",cljs.core.name(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("")));
}
});
(cljs.core.PersistentArrayMap.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,name){
var this$__$1 = this;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(reitit.coercion.spec.ensure_name(name),this$__$1),new cljs.core.Keyword(null,"name","name",1843675177));
}));

(cljs.core.PersistentHashMap.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,name){
var this$__$1 = this;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(reitit.coercion.spec.ensure_name(name),this$__$1),new cljs.core.Keyword(null,"name","name",1843675177));
}));

(cljs.core.PersistentVector.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,name){
var this$__$1 = this;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(reitit.coercion.spec.ensure_name(name),this$__$1),new cljs.core.Keyword(null,"name","name",1843675177));
}));

(spec_tools.data_spec.Maybe.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL);

(spec_tools.data_spec.Maybe.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,name){
var this$__$1 = this;
return spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(reitit.coercion.spec.ensure_name(name),this$__$1);
}));

(spec_tools.core.Spec.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL);

(spec_tools.core.Spec.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
}));

goog.object.set(reitit.coercion.spec.IntoSpec,"_",true);

var G__57717_57764 = reitit.coercion.spec.into_spec;
var G__57718_57765 = "_";
var G__57719_57766 = (function (this$,_){
return spec_tools.core.create_spec(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),this$], null));
});
goog.object.set(G__57717_57764,G__57718_57765,G__57719_57766);

goog.object.set(reitit.coercion.spec.IntoSpec,"null",true);

var G__57720_57768 = reitit.coercion.spec.into_spec;
var G__57721_57769 = "null";
var G__57722_57770 = (function (this$,_){
return null;
});
goog.object.set(G__57720_57768,G__57721_57769,G__57722_57770);
reitit.coercion.spec.stringify_pred = (function reitit$coercion$spec$stringify_pred(pred){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.seq_QMARK_(pred))?cljs.core.seq(pred):pred));
});
if((typeof reitit !== 'undefined') && (typeof reitit.coercion !== 'undefined') && (typeof reitit.coercion.spec !== 'undefined') && (typeof reitit.coercion.spec.coerce_response_QMARK_ !== 'undefined')){
} else {
reitit.coercion.spec.coerce_response_QMARK_ = (function (){var method_table__4672__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("reitit.coercion.spec","default","reitit.coercion.spec/default",-1835621218)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__57723 = cljs.core.get_global_hierarchy;
return (fexpr__57723.cljs$core$IFn$_invoke$arity$0 ? fexpr__57723.cljs$core$IFn$_invoke$arity$0() : fexpr__57723.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reitit.coercion.spec","coerce-response?"),cljs.core.identity,new cljs.core.Keyword("reitit.coercion.spec","default","reitit.coercion.spec/default",-1835621218),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
reitit.coercion.spec.coerce_response_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("reitit.coercion.spec","default","reitit.coercion.spec/default",-1835621218),(function (_){
return true;
}));
reitit.coercion.spec.default_options = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"coerce-response?","coerce-response?",1125033091),reitit.coercion.spec.coerce_response_QMARK_,new cljs.core.Keyword(null,"transformers","transformers",-734201565),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion.spec.strip_extra_keys_transformer,new cljs.core.Keyword(null,"formats","formats",-1397890976),new cljs.core.PersistentArrayMap(null, 1, ["application/json",reitit.coercion.spec.json_transformer], null)], null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion.spec.string_transformer], null),new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion.spec.no_op_transformer], null)], null)], null);
reitit.coercion.spec.create = (function reitit$coercion$spec$create(p__57726){
var map__57727 = p__57726;
var map__57727__$1 = (((((!((map__57727 == null))))?(((((map__57727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57727):map__57727);
var opts = map__57727__$1;
var transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57727__$1,new cljs.core.Keyword(null,"transformers","transformers",-734201565));
var coerce_response_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57727__$1,new cljs.core.Keyword(null,"coerce-response?","coerce-response?",1125033091));
if((typeof reitit !== 'undefined') && (typeof reitit.coercion !== 'undefined') && (typeof reitit.coercion.spec !== 'undefined') && (typeof reitit.coercion.spec.t_reitit$coercion$spec57729 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {reitit.coercion.Coercion}
*/
reitit.coercion.spec.t_reitit$coercion$spec57729 = (function (p__57726,map__57727,opts,transformers,coerce_response_QMARK_,meta57730){
this.p__57726 = p__57726;
this.map__57727 = map__57727;
this.opts = opts;
this.transformers = transformers;
this.coerce_response_QMARK_ = coerce_response_QMARK_;
this.meta57730 = meta57730;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.coercion.spec.t_reitit$coercion$spec57729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57731,meta57730__$1){
var self__ = this;
var _57731__$1 = this;
return (new reitit.coercion.spec.t_reitit$coercion$spec57729(self__.p__57726,self__.map__57727,self__.opts,self__.transformers,self__.coerce_response_QMARK_,meta57730__$1));
}));

(reitit.coercion.spec.t_reitit$coercion$spec57729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57731){
var self__ = this;
var _57731__$1 = this;
return self__.meta57730;
}));

(reitit.coercion.spec.t_reitit$coercion$spec57729.prototype.reitit$coercion$Coercion$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.coercion.spec.t_reitit$coercion$spec57729.prototype.reitit$coercion$Coercion$_get_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"spec","spec",347520401);
}));

(reitit.coercion.spec.t_reitit$coercion$spec57729.prototype.reitit$coercion$Coercion$_get_options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.coercion.spec.t_reitit$coercion$spec57729.prototype.reitit$coercion$Coercion$_get_apidocs$arity$3 = (function (this$,specification,p__57732){
var self__ = this;
var map__57733 = p__57732;
var map__57733__$1 = (((((!((map__57733 == null))))?(((((map__57733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57733):map__57733);
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57733__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var responses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57733__$1,new cljs.core.Keyword(null,"responses","responses",1257546453));
var this$__$1 = this;
var G__57735 = specification;
var G__57735__$1 = (((G__57735 instanceof cljs.core.Keyword))?G__57735.fqn:null);
switch (G__57735__$1) {
case "swagger":
return spec_tools.swagger.core.swagger_spec.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(parameters)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("spec-tools.swagger.core","parameters","spec-tools.swagger.core/parameters",-239005676),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(parameters),(function (){var iter__4582__auto__ = (function reitit$coercion$spec$create_$_iter__57736(s__57737){
return (new cljs.core.LazySeq(null,(function (){
var s__57737__$1 = s__57737;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57737__$1);
if(temp__5735__auto__){
var s__57737__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57737__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__57737__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__57739 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__57738 = (0);
while(true){
if((i__57738 < size__4581__auto__)){
var vec__57740 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__57738);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57740,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57740,(1),null);
cljs.core.chunk_append(b__57739,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,this$__$1.reitit$coercion$Coercion$_compile_model$arity$3(null,v,null)], null));

var G__57772 = (i__57738 + (1));
i__57738 = G__57772;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57739),reitit$coercion$spec$create_$_iter__57736(cljs.core.chunk_rest(s__57737__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57739),null);
}
} else {
var vec__57743 = cljs.core.first(s__57737__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57743,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57743,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,this$__$1.reitit$coercion$Coercion$_compile_model$arity$3(null,v,null)], null),reitit$coercion$spec$create_$_iter__57736(cljs.core.rest(s__57737__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(parameters);
})())], null):null),(cljs.core.truth_(responses)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("spec-tools.swagger.core","responses","spec-tools.swagger.core/responses",308528333),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(responses),(function (){var iter__4582__auto__ = (function reitit$coercion$spec$create_$_iter__57746(s__57747){
return (new cljs.core.LazySeq(null,(function (){
var s__57747__$1 = s__57747;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57747__$1);
if(temp__5735__auto__){
var s__57747__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57747__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__57747__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__57749 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__57748 = (0);
while(true){
if((i__57748 < size__4581__auto__)){
var vec__57750 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__57748);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57750,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57750,(1),null);
cljs.core.chunk_append(b__57749,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var $ = response;
var $__$1 = clojure.set.rename_keys($,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1($__$1))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3($__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791),((function (i__57748,$,$__$1,vec__57750,k,response,c__4580__auto__,size__4581__auto__,b__57749,s__57747__$2,temp__5735__auto__,G__57735,G__57735__$1,this$__$1,map__57733,map__57733__$1,parameters,responses,map__57727,map__57727__$1,opts,transformers,coerce_response_QMARK_){
return (function (p1__57724_SHARP_){
return this$__$1.reitit$coercion$Coercion$_compile_model$arity$3(null,p1__57724_SHARP_,null);
});})(i__57748,$,$__$1,vec__57750,k,response,c__4580__auto__,size__4581__auto__,b__57749,s__57747__$2,temp__5735__auto__,G__57735,G__57735__$1,this$__$1,map__57733,map__57733__$1,parameters,responses,map__57727,map__57727__$1,opts,transformers,coerce_response_QMARK_))
);
} else {
return $__$1;
}
})()], null));

var G__57773 = (i__57748 + (1));
i__57748 = G__57773;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57749),reitit$coercion$spec$create_$_iter__57746(cljs.core.chunk_rest(s__57747__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57749),null);
}
} else {
var vec__57753 = cljs.core.first(s__57747__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57753,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57753,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var $ = response;
var $__$1 = clojure.set.rename_keys($,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1($__$1))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3($__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791),((function ($,$__$1,vec__57753,k,response,s__57747__$2,temp__5735__auto__,G__57735,G__57735__$1,this$__$1,map__57733,map__57733__$1,parameters,responses,map__57727,map__57727__$1,opts,transformers,coerce_response_QMARK_){
return (function (p1__57724_SHARP_){
return this$__$1.reitit$coercion$Coercion$_compile_model$arity$3(null,p1__57724_SHARP_,null);
});})($,$__$1,vec__57753,k,response,s__57747__$2,temp__5735__auto__,G__57735,G__57735__$1,this$__$1,map__57733,map__57733__$1,parameters,responses,map__57727,map__57727__$1,opts,transformers,coerce_response_QMARK_))
);
} else {
return $__$1;
}
})()], null),reitit$coercion$spec$create_$_iter__57746(cljs.core.rest(s__57747__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(responses);
})())], null):null)], 0)));

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't produce Spec apidocs for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(specification)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"specification","specification",22067900),specification,new cljs.core.Keyword(null,"coercion","coercion",904067157),new cljs.core.Keyword(null,"spec","spec",347520401)], null));

}
}));

(reitit.coercion.spec.t_reitit$coercion$spec57729.prototype.reitit$coercion$Coercion$_compile_model$arity$3 = (function (_,model,name){
var self__ = this;
var ___$1 = this;
return reitit.coercion.spec.into_spec(model,name);
}));

(reitit.coercion.spec.t_reitit$coercion$spec57729.prototype.reitit$coercion$Coercion$_open_model$arity$2 = (function (_,spec){
var self__ = this;
var ___$1 = this;
return spec;
}));

(reitit.coercion.spec.t_reitit$coercion$spec57729.prototype.reitit$coercion$Coercion$_encode_error$arity$2 = (function (_,error){
var self__ = this;
var ___$1 = this;
var problems = new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"problems","problems",2097327077).cljs$core$IFn$_invoke$arity$1(error));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(error,new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.spec.alpha.form)),new cljs.core.Keyword(null,"problems","problems",2097327077),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__57725_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__57725_SHARP_,new cljs.core.Keyword(null,"pred","pred",1927423397),reitit.coercion.spec.stringify_pred);
}),problems));
}));

(reitit.coercion.spec.t_reitit$coercion$spec57729.prototype.reitit$coercion$Coercion$_request_coercer$arity$3 = (function (this$,type,spec){
var self__ = this;
var this$__$1 = this;
var spec__$1 = this$__$1.reitit$coercion$Coercion$_compile_model$arity$3(null,spec,null);
var map__57756 = (self__.transformers.cljs$core$IFn$_invoke$arity$1 ? self__.transformers.cljs$core$IFn$_invoke$arity$1(type) : self__.transformers.call(null,type));
var map__57756__$1 = (((((!((map__57756 == null))))?(((((map__57756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57756):map__57756);
var formats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57756__$1,new cljs.core.Keyword(null,"formats","formats",-1397890976));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57756__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
return (function (value,format){
var temp__5733__auto__ = (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(formats,format);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var transformer = temp__5733__auto__;
var coerced = spec_tools.core.coerce.cljs$core$IFn$_invoke$arity$3(spec__$1,value,transformer);
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,coerced)){
return coerced;
} else {
var transformed = spec_tools.core.conform.cljs$core$IFn$_invoke$arity$3(spec__$1,coerced,transformer);
if(cljs.spec.alpha.invalid_QMARK_(transformed)){
var problems = spec_tools.core.explain_data.cljs$core$IFn$_invoke$arity$3(spec__$1,coerced,transformer);
return reitit.coercion.map__GT_CoercionError(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),spec__$1,new cljs.core.Keyword(null,"problems","problems",2097327077),problems], null));
} else {
return cljs.spec.alpha.unform(spec__$1,transformed);
}
}
} else {
return value;
}
});
}));

(reitit.coercion.spec.t_reitit$coercion$spec57729.prototype.reitit$coercion$Coercion$_response_coercer$arity$2 = (function (this$,spec){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.coerce_response_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.coerce_response_QMARK_.cljs$core$IFn$_invoke$arity$1(spec) : self__.coerce_response_QMARK_.call(null,spec)))){
return this$__$1.reitit$coercion$Coercion$_request_coercer$arity$3(null,new cljs.core.Keyword(null,"response","response",-1068424192),spec);
} else {
return null;
}
}));

(reitit.coercion.spec.t_reitit$coercion$spec57729.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p__57726","p__57726",496559319,null),new cljs.core.Symbol(null,"map__57727","map__57727",1323536446,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"transformers","transformers",906329962,null),new cljs.core.Symbol(null,"coerce-response?","coerce-response?",-1529402678,null),new cljs.core.Symbol(null,"meta57730","meta57730",526763756,null)], null);
}));

(reitit.coercion.spec.t_reitit$coercion$spec57729.cljs$lang$type = true);

(reitit.coercion.spec.t_reitit$coercion$spec57729.cljs$lang$ctorStr = "reitit.coercion.spec/t_reitit$coercion$spec57729");

(reitit.coercion.spec.t_reitit$coercion$spec57729.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"reitit.coercion.spec/t_reitit$coercion$spec57729");
}));

/**
 * Positional factory function for reitit.coercion.spec/t_reitit$coercion$spec57729.
 */
reitit.coercion.spec.__GT_t_reitit$coercion$spec57729 = (function reitit$coercion$spec$create_$___GT_t_reitit$coercion$spec57729(p__57726__$1,map__57727__$2,opts__$1,transformers__$1,coerce_response_QMARK___$1,meta57730){
return (new reitit.coercion.spec.t_reitit$coercion$spec57729(p__57726__$1,map__57727__$2,opts__$1,transformers__$1,coerce_response_QMARK___$1,meta57730));
});

}

return (new reitit.coercion.spec.t_reitit$coercion$spec57729(p__57726,map__57727__$1,opts,transformers,coerce_response_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.coercion","coercion","reitit.coercion/coercion",-866612966)], null)));
});
reitit.coercion.spec.coercion = reitit.coercion.spec.create(reitit.coercion.spec.default_options);

//# sourceMappingURL=reitit.coercion.spec.js.map
