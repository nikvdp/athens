goog.provide('instaparse.gll');
goog.require('cljs.core');
goog.require('instaparse.auto_flatten_seq');
goog.require('instaparse.failure');
goog.require('instaparse.reduction');
goog.require('instaparse.combinators_source');
goog.require('instaparse.print');
goog.require('instaparse.util');
goog.require('goog.i18n.uChar');
instaparse.gll._STAR_diagnostic_char_lookahead_STAR_ = (10);

instaparse.gll.get_parser = (function instaparse$gll$get_parser(grammar,p){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(grammar,p,p);
});














instaparse.gll._parse = (function instaparse$gll$_parse(parser,index,tramp){

var G__57101 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser);
var G__57101__$1 = (((G__57101 instanceof cljs.core.Keyword))?G__57101.fqn:null);
switch (G__57101__$1) {
case "nt":
return (instaparse.gll.non_terminal_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.non_terminal_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.non_terminal_parse.call(null,parser,index,tramp));

break;
case "alt":
return (instaparse.gll.alt_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.alt_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.alt_parse.call(null,parser,index,tramp));

break;
case "cat":
return (instaparse.gll.cat_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.cat_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.cat_parse.call(null,parser,index,tramp));

break;
case "string":
return (instaparse.gll.string_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.string_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.string_parse.call(null,parser,index,tramp));

break;
case "string-ci":
return (instaparse.gll.string_case_insensitive_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.string_case_insensitive_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.string_case_insensitive_parse.call(null,parser,index,tramp));

break;
case "char":
return (instaparse.gll.char_range_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.char_range_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.char_range_parse.call(null,parser,index,tramp));

break;
case "epsilon":
return (instaparse.gll.epsilon_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.epsilon_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.epsilon_parse.call(null,parser,index,tramp));

break;
case "opt":
return (instaparse.gll.opt_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.opt_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.opt_parse.call(null,parser,index,tramp));

break;
case "plus":
return (instaparse.gll.plus_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.plus_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.plus_parse.call(null,parser,index,tramp));

break;
case "rep":
return (instaparse.gll.rep_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.rep_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.rep_parse.call(null,parser,index,tramp));

break;
case "star":
return (instaparse.gll.star_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.star_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.star_parse.call(null,parser,index,tramp));

break;
case "regexp":
return (instaparse.gll.regexp_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.regexp_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.regexp_parse.call(null,parser,index,tramp));

break;
case "look":
return (instaparse.gll.lookahead_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.lookahead_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.lookahead_parse.call(null,parser,index,tramp));

break;
case "neg":
return (instaparse.gll.negative_lookahead_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.negative_lookahead_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.negative_lookahead_parse.call(null,parser,index,tramp));

break;
case "ord":
return (instaparse.gll.ordered_alt_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.ordered_alt_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.ordered_alt_parse.call(null,parser,index,tramp));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57101__$1)].join('')));

}
});













instaparse.gll._full_parse = (function instaparse$gll$_full_parse(parser,index,tramp){

var G__57102 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser);
var G__57102__$1 = (((G__57102 instanceof cljs.core.Keyword))?G__57102.fqn:null);
switch (G__57102__$1) {
case "nt":
return (instaparse.gll.non_terminal_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.non_terminal_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.non_terminal_full_parse.call(null,parser,index,tramp));

break;
case "alt":
return (instaparse.gll.alt_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.alt_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.alt_full_parse.call(null,parser,index,tramp));

break;
case "cat":
return (instaparse.gll.cat_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.cat_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.cat_full_parse.call(null,parser,index,tramp));

break;
case "string":
return (instaparse.gll.string_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.string_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.string_full_parse.call(null,parser,index,tramp));

break;
case "string-ci":
return (instaparse.gll.string_case_insensitive_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.string_case_insensitive_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.string_case_insensitive_full_parse.call(null,parser,index,tramp));

break;
case "char":
return (instaparse.gll.char_range_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.char_range_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.char_range_full_parse.call(null,parser,index,tramp));

break;
case "epsilon":
return (instaparse.gll.epsilon_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.epsilon_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.epsilon_full_parse.call(null,parser,index,tramp));

break;
case "opt":
return (instaparse.gll.opt_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.opt_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.opt_full_parse.call(null,parser,index,tramp));

break;
case "plus":
return (instaparse.gll.plus_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.plus_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.plus_full_parse.call(null,parser,index,tramp));

break;
case "rep":
return (instaparse.gll.rep_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.rep_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.rep_full_parse.call(null,parser,index,tramp));

break;
case "star":
return (instaparse.gll.star_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.star_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.star_full_parse.call(null,parser,index,tramp));

break;
case "regexp":
return (instaparse.gll.regexp_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.regexp_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.regexp_full_parse.call(null,parser,index,tramp));

break;
case "look":
return (instaparse.gll.lookahead_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.lookahead_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.lookahead_full_parse.call(null,parser,index,tramp));

break;
case "neg":
return (instaparse.gll.negative_lookahead_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.negative_lookahead_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.negative_lookahead_parse.call(null,parser,index,tramp));

break;
case "ord":
return (instaparse.gll.ordered_alt_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.ordered_alt_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.ordered_alt_full_parse.call(null,parser,index,tramp));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57102__$1)].join('')));

}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
instaparse.gll.Failure = (function (index,reason,__meta,__extmap,__hash){
this.index = index;
this.reason = reason;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(instaparse.gll.Failure.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(instaparse.gll.Failure.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k57104,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__57108 = k57104;
var G__57108__$1 = (((G__57108 instanceof cljs.core.Keyword))?G__57108.fqn:null);
switch (G__57108__$1) {
case "index":
return self__.index;

break;
case "reason":
return self__.reason;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57104,else__4442__auto__);

}
}));

(instaparse.gll.Failure.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__57109){
var vec__57110 = p__57109;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57110,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57110,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(instaparse.gll.Failure.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#instaparse.gll.Failure{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"index","index",-1531685915),self__.index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reason","reason",-2070751759),self__.reason],null))], null),self__.__extmap));
}));

(instaparse.gll.Failure.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57103){
var self__ = this;
var G__57103__$1 = this;
return (new cljs.core.RecordIter((0),G__57103__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"reason","reason",-2070751759)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(instaparse.gll.Failure.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(instaparse.gll.Failure.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new instaparse.gll.Failure(self__.index,self__.reason,self__.__meta,self__.__extmap,self__.__hash));
}));

(instaparse.gll.Failure.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(instaparse.gll.Failure.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__57113 = (function (coll__4436__auto__){
return (-1140991288 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__57113(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(instaparse.gll.Failure.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57105,other57106){
var self__ = this;
var this57105__$1 = this;
return (((!((other57106 == null)))) && ((this57105__$1.constructor === other57106.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57105__$1.index,other57106.index)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57105__$1.reason,other57106.reason)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57105__$1.__extmap,other57106.__extmap)));
}));

(instaparse.gll.Failure.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new instaparse.gll.Failure(self__.index,self__.reason,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(instaparse.gll.Failure.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__57103){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__57114 = cljs.core.keyword_identical_QMARK_;
var expr__57115 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__57117 = new cljs.core.Keyword(null,"index","index",-1531685915);
var G__57118 = expr__57115;
return (pred__57114.cljs$core$IFn$_invoke$arity$2 ? pred__57114.cljs$core$IFn$_invoke$arity$2(G__57117,G__57118) : pred__57114.call(null,G__57117,G__57118));
})())){
return (new instaparse.gll.Failure(G__57103,self__.reason,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__57119 = new cljs.core.Keyword(null,"reason","reason",-2070751759);
var G__57120 = expr__57115;
return (pred__57114.cljs$core$IFn$_invoke$arity$2 ? pred__57114.cljs$core$IFn$_invoke$arity$2(G__57119,G__57120) : pred__57114.call(null,G__57119,G__57120));
})())){
return (new instaparse.gll.Failure(self__.index,G__57103,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.gll.Failure(self__.index,self__.reason,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__57103),null));
}
}
}));

(instaparse.gll.Failure.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"index","index",-1531685915),self__.index,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"reason","reason",-2070751759),self__.reason,null))], null),self__.__extmap));
}));

(instaparse.gll.Failure.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__57103){
var self__ = this;
var this__4438__auto____$1 = this;
return (new instaparse.gll.Failure(self__.index,self__.reason,G__57103,self__.__extmap,self__.__hash));
}));

(instaparse.gll.Failure.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(instaparse.gll.Failure.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"reason","reason",-430220232,null)], null);
}));

(instaparse.gll.Failure.cljs$lang$type = true);

(instaparse.gll.Failure.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"instaparse.gll/Failure",null,(1),null));
}));

(instaparse.gll.Failure.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"instaparse.gll/Failure");
}));

/**
 * Positional factory function for instaparse.gll/Failure.
 */
instaparse.gll.__GT_Failure = (function instaparse$gll$__GT_Failure(index,reason){
return (new instaparse.gll.Failure(index,reason,null,null,null));
});

/**
 * Factory function for instaparse.gll/Failure, taking a map of keywords to field values.
 */
instaparse.gll.map__GT_Failure = (function instaparse$gll$map__GT_Failure(G__57107){
var extmap__4478__auto__ = (function (){var G__57121 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57107,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reason","reason",-2070751759)], 0));
if(cljs.core.record_QMARK_(G__57107)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57121);
} else {
return G__57121;
}
})();
return (new instaparse.gll.Failure(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(G__57107),new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(G__57107),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

(instaparse.gll.Failure.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(instaparse.gll.Failure.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (fail,writer,_){
var fail__$1 = this;
return cljs.core._write(writer,(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__57122_57290 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__57123_57291 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__57124_57292 = true;
var _STAR_print_fn_STAR__temp_val__57125_57293 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__57124_57292);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__57125_57293);

try{instaparse.failure.pprint_failure(fail__$1);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__57123_57291);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__57122_57290);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})());
}));
instaparse.gll.failure_type = cljs.core.type((new instaparse.gll.Failure(null,null,null,null,null)));
instaparse.gll.text__GT_segment = (function instaparse$gll$text__GT_segment(text){
return text;
});
instaparse.gll.sub_sequence = cljs.core.subs;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
instaparse.gll.Tramp = (function (grammar,text,segment,fail_index,node_builder,stack,next_stack,generation,negative_listeners,msg_cache,nodes,success,failure,trace_QMARK_,__meta,__extmap,__hash){
this.grammar = grammar;
this.text = text;
this.segment = segment;
this.fail_index = fail_index;
this.node_builder = node_builder;
this.stack = stack;
this.next_stack = next_stack;
this.generation = generation;
this.negative_listeners = negative_listeners;
this.msg_cache = msg_cache;
this.nodes = nodes;
this.success = success;
this.failure = failure;
this.trace_QMARK_ = trace_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(instaparse.gll.Tramp.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(instaparse.gll.Tramp.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k57127,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__57131 = k57127;
var G__57131__$1 = (((G__57131 instanceof cljs.core.Keyword))?G__57131.fqn:null);
switch (G__57131__$1) {
case "grammar":
return self__.grammar;

break;
case "text":
return self__.text;

break;
case "segment":
return self__.segment;

break;
case "fail-index":
return self__.fail_index;

break;
case "node-builder":
return self__.node_builder;

break;
case "stack":
return self__.stack;

break;
case "next-stack":
return self__.next_stack;

break;
case "generation":
return self__.generation;

break;
case "negative-listeners":
return self__.negative_listeners;

break;
case "msg-cache":
return self__.msg_cache;

break;
case "nodes":
return self__.nodes;

break;
case "success":
return self__.success;

break;
case "failure":
return self__.failure;

break;
case "trace?":
return self__.trace_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57127,else__4442__auto__);

}
}));

(instaparse.gll.Tramp.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__57132){
var vec__57133 = p__57132;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57133,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57133,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(instaparse.gll.Tramp.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#instaparse.gll.Tramp{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"grammar","grammar",1881328267),self__.grammar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"text","text",-1790561697),self__.text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"segment","segment",-964921196),self__.segment],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fail-index","fail-index",248726923),self__.fail_index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),self__.node_builder],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stack","stack",-793405930),self__.stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),self__.next_stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"generation","generation",-2132542044),self__.generation],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),self__.negative_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),self__.msg_cache],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.nodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"success","success",1890645906),self__.success],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"failure","failure",720415879),self__.failure],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trace?","trace?",1730690679),self__.trace_QMARK_],null))], null),self__.__extmap));
}));

(instaparse.gll.Tramp.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57126){
var self__ = this;
var G__57126__$1 = this;
return (new cljs.core.RecordIter((0),G__57126__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grammar","grammar",1881328267),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"segment","segment",-964921196),new cljs.core.Keyword(null,"fail-index","fail-index",248726923),new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),new cljs.core.Keyword(null,"stack","stack",-793405930),new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),new cljs.core.Keyword(null,"generation","generation",-2132542044),new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"trace?","trace?",1730690679)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(instaparse.gll.Tramp.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(instaparse.gll.Tramp.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
}));

(instaparse.gll.Tramp.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (14 + cljs.core.count(self__.__extmap));
}));

(instaparse.gll.Tramp.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__57136 = (function (coll__4436__auto__){
return (166878148 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__57136(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(instaparse.gll.Tramp.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57128,other57129){
var self__ = this;
var this57128__$1 = this;
return (((!((other57129 == null)))) && ((this57128__$1.constructor === other57129.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57128__$1.grammar,other57129.grammar)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57128__$1.text,other57129.text)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57128__$1.segment,other57129.segment)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57128__$1.fail_index,other57129.fail_index)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57128__$1.node_builder,other57129.node_builder)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57128__$1.stack,other57129.stack)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57128__$1.next_stack,other57129.next_stack)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57128__$1.generation,other57129.generation)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57128__$1.negative_listeners,other57129.negative_listeners)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57128__$1.msg_cache,other57129.msg_cache)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57128__$1.nodes,other57129.nodes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57128__$1.success,other57129.success)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57128__$1.failure,other57129.failure)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57128__$1.trace_QMARK_,other57129.trace_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57128__$1.__extmap,other57129.__extmap)));
}));

(instaparse.gll.Tramp.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),null,new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),null,new cljs.core.Keyword(null,"generation","generation",-2132542044),null,new cljs.core.Keyword(null,"failure","failure",720415879),null,new cljs.core.Keyword(null,"fail-index","fail-index",248726923),null,new cljs.core.Keyword(null,"grammar","grammar",1881328267),null,new cljs.core.Keyword(null,"success","success",1890645906),null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),null,new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),null,new cljs.core.Keyword(null,"segment","segment",-964921196),null,new cljs.core.Keyword(null,"stack","stack",-793405930),null,new cljs.core.Keyword(null,"trace?","trace?",1730690679),null,new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(instaparse.gll.Tramp.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__57126){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__57137 = cljs.core.keyword_identical_QMARK_;
var expr__57138 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__57140 = new cljs.core.Keyword(null,"grammar","grammar",1881328267);
var G__57141 = expr__57138;
return (pred__57137.cljs$core$IFn$_invoke$arity$2 ? pred__57137.cljs$core$IFn$_invoke$arity$2(G__57140,G__57141) : pred__57137.call(null,G__57140,G__57141));
})())){
return (new instaparse.gll.Tramp(G__57126,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__57142 = new cljs.core.Keyword(null,"text","text",-1790561697);
var G__57143 = expr__57138;
return (pred__57137.cljs$core$IFn$_invoke$arity$2 ? pred__57137.cljs$core$IFn$_invoke$arity$2(G__57142,G__57143) : pred__57137.call(null,G__57142,G__57143));
})())){
return (new instaparse.gll.Tramp(self__.grammar,G__57126,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__57144 = new cljs.core.Keyword(null,"segment","segment",-964921196);
var G__57145 = expr__57138;
return (pred__57137.cljs$core$IFn$_invoke$arity$2 ? pred__57137.cljs$core$IFn$_invoke$arity$2(G__57144,G__57145) : pred__57137.call(null,G__57144,G__57145));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,G__57126,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__57146 = new cljs.core.Keyword(null,"fail-index","fail-index",248726923);
var G__57147 = expr__57138;
return (pred__57137.cljs$core$IFn$_invoke$arity$2 ? pred__57137.cljs$core$IFn$_invoke$arity$2(G__57146,G__57147) : pred__57137.call(null,G__57146,G__57147));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,G__57126,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__57148 = new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605);
var G__57149 = expr__57138;
return (pred__57137.cljs$core$IFn$_invoke$arity$2 ? pred__57137.cljs$core$IFn$_invoke$arity$2(G__57148,G__57149) : pred__57137.call(null,G__57148,G__57149));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,G__57126,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__57150 = new cljs.core.Keyword(null,"stack","stack",-793405930);
var G__57151 = expr__57138;
return (pred__57137.cljs$core$IFn$_invoke$arity$2 ? pred__57137.cljs$core$IFn$_invoke$arity$2(G__57150,G__57151) : pred__57137.call(null,G__57150,G__57151));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,G__57126,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__57152 = new cljs.core.Keyword(null,"next-stack","next-stack",-481930728);
var G__57153 = expr__57138;
return (pred__57137.cljs$core$IFn$_invoke$arity$2 ? pred__57137.cljs$core$IFn$_invoke$arity$2(G__57152,G__57153) : pred__57137.call(null,G__57152,G__57153));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,G__57126,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__57154 = new cljs.core.Keyword(null,"generation","generation",-2132542044);
var G__57155 = expr__57138;
return (pred__57137.cljs$core$IFn$_invoke$arity$2 ? pred__57137.cljs$core$IFn$_invoke$arity$2(G__57154,G__57155) : pred__57137.call(null,G__57154,G__57155));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,G__57126,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__57156 = new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092);
var G__57157 = expr__57138;
return (pred__57137.cljs$core$IFn$_invoke$arity$2 ? pred__57137.cljs$core$IFn$_invoke$arity$2(G__57156,G__57157) : pred__57137.call(null,G__57156,G__57157));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,G__57126,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__57158 = new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070);
var G__57159 = expr__57138;
return (pred__57137.cljs$core$IFn$_invoke$arity$2 ? pred__57137.cljs$core$IFn$_invoke$arity$2(G__57158,G__57159) : pred__57137.call(null,G__57158,G__57159));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,G__57126,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__57160 = new cljs.core.Keyword(null,"nodes","nodes",-2099585805);
var G__57161 = expr__57138;
return (pred__57137.cljs$core$IFn$_invoke$arity$2 ? pred__57137.cljs$core$IFn$_invoke$arity$2(G__57160,G__57161) : pred__57137.call(null,G__57160,G__57161));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,G__57126,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__57162 = new cljs.core.Keyword(null,"success","success",1890645906);
var G__57163 = expr__57138;
return (pred__57137.cljs$core$IFn$_invoke$arity$2 ? pred__57137.cljs$core$IFn$_invoke$arity$2(G__57162,G__57163) : pred__57137.call(null,G__57162,G__57163));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,G__57126,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__57164 = new cljs.core.Keyword(null,"failure","failure",720415879);
var G__57165 = expr__57138;
return (pred__57137.cljs$core$IFn$_invoke$arity$2 ? pred__57137.cljs$core$IFn$_invoke$arity$2(G__57164,G__57165) : pred__57137.call(null,G__57164,G__57165));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,G__57126,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__57166 = new cljs.core.Keyword(null,"trace?","trace?",1730690679);
var G__57167 = expr__57138;
return (pred__57137.cljs$core$IFn$_invoke$arity$2 ? pred__57137.cljs$core$IFn$_invoke$arity$2(G__57166,G__57167) : pred__57137.call(null,G__57166,G__57167));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,G__57126,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__57126),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

(instaparse.gll.Tramp.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"grammar","grammar",1881328267),self__.grammar,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"text","text",-1790561697),self__.text,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"segment","segment",-964921196),self__.segment,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fail-index","fail-index",248726923),self__.fail_index,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),self__.node_builder,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"stack","stack",-793405930),self__.stack,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),self__.next_stack,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"generation","generation",-2132542044),self__.generation,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),self__.negative_listeners,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),self__.msg_cache,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.nodes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"success","success",1890645906),self__.success,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"failure","failure",720415879),self__.failure,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"trace?","trace?",1730690679),self__.trace_QMARK_,null))], null),self__.__extmap));
}));

(instaparse.gll.Tramp.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__57126){
var self__ = this;
var this__4438__auto____$1 = this;
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,G__57126,self__.__extmap,self__.__hash));
}));

(instaparse.gll.Tramp.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(instaparse.gll.Tramp.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"grammar","grammar",-773107502,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"segment","segment",675610331,null),new cljs.core.Symbol(null,"fail-index","fail-index",1889258450,null),new cljs.core.Symbol(null,"node-builder","node-builder",-316031078,null),new cljs.core.Symbol(null,"stack","stack",847125597,null),new cljs.core.Symbol(null,"next-stack","next-stack",1158600799,null),new cljs.core.Symbol(null,"generation","generation",-492010517,null),new cljs.core.Symbol(null,"negative-listeners","negative-listeners",1695772619,null),new cljs.core.Symbol(null,"msg-cache","msg-cache",906756457,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"success","success",-763789863,null),new cljs.core.Symbol(null,"failure","failure",-1934019890,null),new cljs.core.Symbol(null,"trace?","trace?",-923745090,null)], null);
}));

(instaparse.gll.Tramp.cljs$lang$type = true);

(instaparse.gll.Tramp.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"instaparse.gll/Tramp",null,(1),null));
}));

(instaparse.gll.Tramp.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"instaparse.gll/Tramp");
}));

/**
 * Positional factory function for instaparse.gll/Tramp.
 */
instaparse.gll.__GT_Tramp = (function instaparse$gll$__GT_Tramp(grammar,text,segment,fail_index,node_builder,stack,next_stack,generation,negative_listeners,msg_cache,nodes,success,failure,trace_QMARK_){
return (new instaparse.gll.Tramp(grammar,text,segment,fail_index,node_builder,stack,next_stack,generation,negative_listeners,msg_cache,nodes,success,failure,trace_QMARK_,null,null,null));
});

/**
 * Factory function for instaparse.gll/Tramp, taking a map of keywords to field values.
 */
instaparse.gll.map__GT_Tramp = (function instaparse$gll$map__GT_Tramp(G__57130){
var extmap__4478__auto__ = (function (){var G__57168 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57130,new cljs.core.Keyword(null,"grammar","grammar",1881328267),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"segment","segment",-964921196),new cljs.core.Keyword(null,"fail-index","fail-index",248726923),new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),new cljs.core.Keyword(null,"stack","stack",-793405930),new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),new cljs.core.Keyword(null,"generation","generation",-2132542044),new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"trace?","trace?",1730690679)], 0));
if(cljs.core.record_QMARK_(G__57130)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57168);
} else {
return G__57168;
}
})();
return (new instaparse.gll.Tramp(new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(G__57130),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(G__57130),new cljs.core.Keyword(null,"segment","segment",-964921196).cljs$core$IFn$_invoke$arity$1(G__57130),new cljs.core.Keyword(null,"fail-index","fail-index",248726923).cljs$core$IFn$_invoke$arity$1(G__57130),new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605).cljs$core$IFn$_invoke$arity$1(G__57130),new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(G__57130),new cljs.core.Keyword(null,"next-stack","next-stack",-481930728).cljs$core$IFn$_invoke$arity$1(G__57130),new cljs.core.Keyword(null,"generation","generation",-2132542044).cljs$core$IFn$_invoke$arity$1(G__57130),new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092).cljs$core$IFn$_invoke$arity$1(G__57130),new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070).cljs$core$IFn$_invoke$arity$1(G__57130),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(G__57130),new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(G__57130),new cljs.core.Keyword(null,"failure","failure",720415879).cljs$core$IFn$_invoke$arity$1(G__57130),new cljs.core.Keyword(null,"trace?","trace?",1730690679).cljs$core$IFn$_invoke$arity$1(G__57130),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

instaparse.gll.make_tramp = (function instaparse$gll$make_tramp(var_args){
var G__57170 = arguments.length;
switch (G__57170) {
case 2:
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$2 = (function (grammar,text){
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$5(grammar,text,instaparse.gll.text__GT_segment(text),(-1),null);
}));

(instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$3 = (function (grammar,text,segment){
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$5(grammar,text,segment,(-1),null);
}));

(instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$4 = (function (grammar,text,fail_index,node_builder){
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$5(grammar,text,instaparse.gll.text__GT_segment(text),fail_index,node_builder);
}));

(instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$5 = (function (grammar,text,segment,fail_index,node_builder){
return (new instaparse.gll.Tramp(grammar,text,segment,fail_index,node_builder,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.sorted_map_by(cljs.core._GT_)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((new instaparse.gll.Failure((0),cljs.core.PersistentVector.EMPTY,null,null,null))),false,null,null,null));
}));

(instaparse.gll.make_tramp.cljs$lang$maxFixedArity = 5);

instaparse.gll.make_success = (function instaparse$gll$make_success(result,index){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"index","index",-1531685915),index], null);
});
instaparse.gll.total_success_QMARK_ = (function instaparse$gll$total_success_QMARK_(tramp,s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp)),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(s));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
instaparse.gll.Node = (function (listeners,full_listeners,results,full_results,__meta,__extmap,__hash){
this.listeners = listeners;
this.full_listeners = full_listeners;
this.results = results;
this.full_results = full_results;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(instaparse.gll.Node.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(instaparse.gll.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k57172,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__57176 = k57172;
var G__57176__$1 = (((G__57176 instanceof cljs.core.Keyword))?G__57176.fqn:null);
switch (G__57176__$1) {
case "listeners":
return self__.listeners;

break;
case "full-listeners":
return self__.full_listeners;

break;
case "results":
return self__.results;

break;
case "full-results":
return self__.full_results;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57172,else__4442__auto__);

}
}));

(instaparse.gll.Node.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__57177){
var vec__57178 = p__57177;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57178,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57178,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(instaparse.gll.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#instaparse.gll.Node{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"listeners","listeners",394544445),self__.listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),self__.full_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"results","results",-1134170113),self__.results],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"full-results","full-results",-1500225407),self__.full_results],null))], null),self__.__extmap));
}));

(instaparse.gll.Node.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57171){
var self__ = this;
var G__57171__$1 = this;
return (new cljs.core.RecordIter((0),G__57171__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword(null,"full-results","full-results",-1500225407)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(instaparse.gll.Node.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(instaparse.gll.Node.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,self__.__meta,self__.__extmap,self__.__hash));
}));

(instaparse.gll.Node.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(instaparse.gll.Node.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__57181 = (function (coll__4436__auto__){
return (-1610074144 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__57181(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(instaparse.gll.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57173,other57174){
var self__ = this;
var this57173__$1 = this;
return (((!((other57174 == null)))) && ((this57173__$1.constructor === other57174.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57173__$1.listeners,other57174.listeners)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57173__$1.full_listeners,other57174.full_listeners)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57173__$1.results,other57174.results)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57173__$1.full_results,other57174.full_results)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57173__$1.__extmap,other57174.__extmap)));
}));

(instaparse.gll.Node.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"full-results","full-results",-1500225407),null,new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),null,new cljs.core.Keyword(null,"listeners","listeners",394544445),null,new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(instaparse.gll.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__57171){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__57182 = cljs.core.keyword_identical_QMARK_;
var expr__57183 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__57185 = new cljs.core.Keyword(null,"listeners","listeners",394544445);
var G__57186 = expr__57183;
return (pred__57182.cljs$core$IFn$_invoke$arity$2 ? pred__57182.cljs$core$IFn$_invoke$arity$2(G__57185,G__57186) : pred__57182.call(null,G__57185,G__57186));
})())){
return (new instaparse.gll.Node(G__57171,self__.full_listeners,self__.results,self__.full_results,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__57187 = new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827);
var G__57188 = expr__57183;
return (pred__57182.cljs$core$IFn$_invoke$arity$2 ? pred__57182.cljs$core$IFn$_invoke$arity$2(G__57187,G__57188) : pred__57182.call(null,G__57187,G__57188));
})())){
return (new instaparse.gll.Node(self__.listeners,G__57171,self__.results,self__.full_results,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__57189 = new cljs.core.Keyword(null,"results","results",-1134170113);
var G__57190 = expr__57183;
return (pred__57182.cljs$core$IFn$_invoke$arity$2 ? pred__57182.cljs$core$IFn$_invoke$arity$2(G__57189,G__57190) : pred__57182.call(null,G__57189,G__57190));
})())){
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,G__57171,self__.full_results,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__57191 = new cljs.core.Keyword(null,"full-results","full-results",-1500225407);
var G__57192 = expr__57183;
return (pred__57182.cljs$core$IFn$_invoke$arity$2 ? pred__57182.cljs$core$IFn$_invoke$arity$2(G__57191,G__57192) : pred__57182.call(null,G__57191,G__57192));
})())){
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,G__57171,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__57171),null));
}
}
}
}
}));

(instaparse.gll.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"listeners","listeners",394544445),self__.listeners,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),self__.full_listeners,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"results","results",-1134170113),self__.results,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"full-results","full-results",-1500225407),self__.full_results,null))], null),self__.__extmap));
}));

(instaparse.gll.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__57171){
var self__ = this;
var this__4438__auto____$1 = this;
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,G__57171,self__.__extmap,self__.__hash));
}));

(instaparse.gll.Node.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(instaparse.gll.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"listeners","listeners",2035075972,null),new cljs.core.Symbol(null,"full-listeners","full-listeners",1691153354,null),new cljs.core.Symbol(null,"results","results",506361414,null),new cljs.core.Symbol(null,"full-results","full-results",140306120,null)], null);
}));

(instaparse.gll.Node.cljs$lang$type = true);

(instaparse.gll.Node.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"instaparse.gll/Node",null,(1),null));
}));

(instaparse.gll.Node.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"instaparse.gll/Node");
}));

/**
 * Positional factory function for instaparse.gll/Node.
 */
instaparse.gll.__GT_Node = (function instaparse$gll$__GT_Node(listeners,full_listeners,results,full_results){
return (new instaparse.gll.Node(listeners,full_listeners,results,full_results,null,null,null));
});

/**
 * Factory function for instaparse.gll/Node, taking a map of keywords to field values.
 */
instaparse.gll.map__GT_Node = (function instaparse$gll$map__GT_Node(G__57175){
var extmap__4478__auto__ = (function (){var G__57193 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57175,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword(null,"full-results","full-results",-1500225407)], 0));
if(cljs.core.record_QMARK_(G__57175)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57193);
} else {
return G__57193;
}
})();
return (new instaparse.gll.Node(new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(G__57175),new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827).cljs$core$IFn$_invoke$arity$1(G__57175),new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(G__57175),new cljs.core.Keyword(null,"full-results","full-results",-1500225407).cljs$core$IFn$_invoke$arity$1(G__57175),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

instaparse.gll.make_node = (function instaparse$gll$make_node(){
return (new instaparse.gll.Node(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),null,null,null));
});
/**
 * Pushes an item onto the trampoline's stack
 */
instaparse.gll.push_stack = (function instaparse$gll$push_stack(tramp,item){

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.conj,item);
});
/**
 * Pushes onto stack a message to a given listener about a result
 */
instaparse.gll.push_message = (function instaparse$gll$push_message(tramp,listener,result){
var cache = new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070).cljs$core$IFn$_invoke$arity$1(tramp);
var i = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(result);
var k = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [listener,i], null);
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(cache),k,(0));
var f = (function (){
return (listener.cljs$core$IFn$_invoke$arity$1 ? listener.cljs$core$IFn$_invoke$arity$1(result) : listener.call(null,result));
});

if((c > cljs.core.deref(new cljs.core.Keyword(null,"generation","generation",-2132542044).cljs$core$IFn$_invoke$arity$1(tramp)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"next-stack","next-stack",-481930728).cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.conj,f);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.conj,f);
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,k,(c + (1)));
});
/**
 * Tests whether node already has a listener
 */
instaparse.gll.listener_exists_QMARK_ = (function instaparse$gll$listener_exists_QMARK_(tramp,node_key){
var nodes = new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(tramp);
var temp__5735__auto__ = (function (){var fexpr__57194 = cljs.core.deref(nodes);
return (fexpr__57194.cljs$core$IFn$_invoke$arity$1 ? fexpr__57194.cljs$core$IFn$_invoke$arity$1(node_key) : fexpr__57194.call(null,node_key));
})();
if(cljs.core.truth_(temp__5735__auto__)){
var node = temp__5735__auto__;
return (cljs.core.count(cljs.core.deref(new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(node))) > (0));
} else {
return null;
}
});
/**
 * Tests whether node already has a listener or full-listener
 */
instaparse.gll.full_listener_exists_QMARK_ = (function instaparse$gll$full_listener_exists_QMARK_(tramp,node_key){
var nodes = new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(tramp);
var temp__5735__auto__ = (function (){var fexpr__57195 = cljs.core.deref(nodes);
return (fexpr__57195.cljs$core$IFn$_invoke$arity$1 ? fexpr__57195.cljs$core$IFn$_invoke$arity$1(node_key) : fexpr__57195.call(null,node_key));
})();
if(cljs.core.truth_(temp__5735__auto__)){
var node = temp__5735__auto__;
return (((cljs.core.count(cljs.core.deref(new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827).cljs$core$IFn$_invoke$arity$1(node))) > (0))) || ((cljs.core.count(cljs.core.deref(new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(node))) > (0))));
} else {
return null;
}
});
/**
 * Tests whether node has a result or full-result
 */
instaparse.gll.result_exists_QMARK_ = (function instaparse$gll$result_exists_QMARK_(tramp,node_key){
var nodes = new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(tramp);
var temp__5735__auto__ = (function (){var fexpr__57196 = cljs.core.deref(nodes);
return (fexpr__57196.cljs$core$IFn$_invoke$arity$1 ? fexpr__57196.cljs$core$IFn$_invoke$arity$1(node_key) : fexpr__57196.call(null,node_key));
})();
if(cljs.core.truth_(temp__5735__auto__)){
var node = temp__5735__auto__;
return (((cljs.core.count(cljs.core.deref(new cljs.core.Keyword(null,"full-results","full-results",-1500225407).cljs$core$IFn$_invoke$arity$1(node))) > (0))) || ((cljs.core.count(cljs.core.deref(new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(node))) > (0))));
} else {
return null;
}
});
/**
 * Tests whether node has a full-result
 */
instaparse.gll.full_result_exists_QMARK_ = (function instaparse$gll$full_result_exists_QMARK_(tramp,node_key){
var nodes = new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(tramp);
var temp__5735__auto__ = (function (){var fexpr__57197 = cljs.core.deref(nodes);
return (fexpr__57197.cljs$core$IFn$_invoke$arity$1 ? fexpr__57197.cljs$core$IFn$_invoke$arity$1(node_key) : fexpr__57197.call(null,node_key));
})();
if(cljs.core.truth_(temp__5735__auto__)){
var node = temp__5735__auto__;
return (cljs.core.count(cljs.core.deref(new cljs.core.Keyword(null,"full-results","full-results",-1500225407).cljs$core$IFn$_invoke$arity$1(node))) > (0));
} else {
return null;
}
});
/**
 * Gets node if already exists, otherwise creates one
 */
instaparse.gll.node_get = (function instaparse$gll$node_get(tramp,node_key){
var nodes = new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(tramp);
var temp__5733__auto__ = (function (){var fexpr__57198 = cljs.core.deref(nodes);
return (fexpr__57198.cljs$core$IFn$_invoke$arity$1 ? fexpr__57198.cljs$core$IFn$_invoke$arity$1(node_key) : fexpr__57198.call(null,node_key));
})();
if(cljs.core.truth_(temp__5733__auto__)){
var node = temp__5733__auto__;
return node;
} else {
var node = instaparse.gll.make_node();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,node_key,node);

return node;
}
});
instaparse.gll.safe_with_meta = (function instaparse$gll$safe_with_meta(obj,metamap){
if((((!((obj == null))))?(((((obj.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IWithMeta$))))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,obj))){
return cljs.core.with_meta(obj,metamap);
} else {
return obj;
}
});
/**
 * Pushes a result into the trampoline's node.
 * Categorizes as either result or full-result.
 * Schedules notification to all existing listeners of result
 * (Full listeners only get notified about full results)
 */
instaparse.gll.push_result = (function instaparse$gll$push_result(tramp,node_key,result){

var node = instaparse.gll.node_get(tramp,node_key);
var parser = (node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1((1)) : node_key.call(null,(1)));
var result__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"hide","hide",-596913169).cljs$core$IFn$_invoke$arity$1(parser))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"result","result",1415092211),null):result);
var result__$2 = (function (){var temp__5733__auto__ = new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(parser);
if(cljs.core.truth_(temp__5733__auto__)){
var reduction_function = temp__5733__auto__;
return instaparse.gll.make_success(instaparse.gll.safe_with_meta(instaparse.reduction.apply_reduction(reduction_function,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(result__$1)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("instaparse.gll","start-index","instaparse.gll/start-index",404653620),(node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1((0)) : node_key.call(null,(0))),new cljs.core.Keyword("instaparse.gll","end-index","instaparse.gll/end-index",-1851404441),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(result__$1)], null)),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(result__$1));
} else {
return result__$1;
}
})();
var total_QMARK_ = instaparse.gll.total_success_QMARK_(tramp,result__$2);
var results = ((total_QMARK_)?new cljs.core.Keyword(null,"full-results","full-results",-1500225407).cljs$core$IFn$_invoke$arity$1(node):new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.not((function (){var fexpr__57200 = cljs.core.deref(results);
return (fexpr__57200.cljs$core$IFn$_invoke$arity$1 ? fexpr__57200.cljs$core$IFn$_invoke$arity$1(result__$2) : fexpr__57200.call(null,result__$2));
})())){

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,result__$2);

var seq__57201_57363 = cljs.core.seq(cljs.core.deref(new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(node)));
var chunk__57202_57364 = null;
var count__57203_57365 = (0);
var i__57204_57366 = (0);
while(true){
if((i__57204_57366 < count__57203_57365)){
var listener_57367 = chunk__57202_57364.cljs$core$IIndexed$_nth$arity$2(null,i__57204_57366);
instaparse.gll.push_message(tramp,listener_57367,result__$2);


var G__57368 = seq__57201_57363;
var G__57369 = chunk__57202_57364;
var G__57370 = count__57203_57365;
var G__57371 = (i__57204_57366 + (1));
seq__57201_57363 = G__57368;
chunk__57202_57364 = G__57369;
count__57203_57365 = G__57370;
i__57204_57366 = G__57371;
continue;
} else {
var temp__5735__auto___57372 = cljs.core.seq(seq__57201_57363);
if(temp__5735__auto___57372){
var seq__57201_57373__$1 = temp__5735__auto___57372;
if(cljs.core.chunked_seq_QMARK_(seq__57201_57373__$1)){
var c__4609__auto___57374 = cljs.core.chunk_first(seq__57201_57373__$1);
var G__57375 = cljs.core.chunk_rest(seq__57201_57373__$1);
var G__57376 = c__4609__auto___57374;
var G__57377 = cljs.core.count(c__4609__auto___57374);
var G__57378 = (0);
seq__57201_57363 = G__57375;
chunk__57202_57364 = G__57376;
count__57203_57365 = G__57377;
i__57204_57366 = G__57378;
continue;
} else {
var listener_57379 = cljs.core.first(seq__57201_57373__$1);
instaparse.gll.push_message(tramp,listener_57379,result__$2);


var G__57380 = cljs.core.next(seq__57201_57373__$1);
var G__57381 = null;
var G__57382 = (0);
var G__57383 = (0);
seq__57201_57363 = G__57380;
chunk__57202_57364 = G__57381;
count__57203_57365 = G__57382;
i__57204_57366 = G__57383;
continue;
}
} else {
}
}
break;
}

if(total_QMARK_){
var seq__57205 = cljs.core.seq(cljs.core.deref(new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827).cljs$core$IFn$_invoke$arity$1(node)));
var chunk__57206 = null;
var count__57207 = (0);
var i__57208 = (0);
while(true){
if((i__57208 < count__57207)){
var listener = chunk__57206.cljs$core$IIndexed$_nth$arity$2(null,i__57208);
instaparse.gll.push_message(tramp,listener,result__$2);


var G__57384 = seq__57205;
var G__57385 = chunk__57206;
var G__57386 = count__57207;
var G__57387 = (i__57208 + (1));
seq__57205 = G__57384;
chunk__57206 = G__57385;
count__57207 = G__57386;
i__57208 = G__57387;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57205);
if(temp__5735__auto__){
var seq__57205__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57205__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57205__$1);
var G__57388 = cljs.core.chunk_rest(seq__57205__$1);
var G__57389 = c__4609__auto__;
var G__57390 = cljs.core.count(c__4609__auto__);
var G__57391 = (0);
seq__57205 = G__57388;
chunk__57206 = G__57389;
count__57207 = G__57390;
i__57208 = G__57391;
continue;
} else {
var listener = cljs.core.first(seq__57205__$1);
instaparse.gll.push_message(tramp,listener,result__$2);


var G__57392 = cljs.core.next(seq__57205__$1);
var G__57393 = null;
var G__57394 = (0);
var G__57395 = (0);
seq__57205 = G__57392;
chunk__57206 = G__57393;
count__57207 = G__57394;
i__57208 = G__57395;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Pushes a listener into the trampoline's node.
 * Schedules notification to listener of all existing results.
 * Initiates parse if necessary
 */
instaparse.gll.push_listener = (function instaparse$gll$push_listener(tramp,node_key,listener){
var listener_already_exists_QMARK_ = instaparse.gll.listener_exists_QMARK_(tramp,node_key);
var node = instaparse.gll.node_get(tramp,node_key);
var listeners = new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(node);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners,cljs.core.conj,listener);

var seq__57209_57396 = cljs.core.seq(cljs.core.deref(new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(node)));
var chunk__57210_57397 = null;
var count__57211_57398 = (0);
var i__57212_57399 = (0);
while(true){
if((i__57212_57399 < count__57211_57398)){
var result_57400 = chunk__57210_57397.cljs$core$IIndexed$_nth$arity$2(null,i__57212_57399);
instaparse.gll.push_message(tramp,listener,result_57400);


var G__57401 = seq__57209_57396;
var G__57402 = chunk__57210_57397;
var G__57403 = count__57211_57398;
var G__57404 = (i__57212_57399 + (1));
seq__57209_57396 = G__57401;
chunk__57210_57397 = G__57402;
count__57211_57398 = G__57403;
i__57212_57399 = G__57404;
continue;
} else {
var temp__5735__auto___57405 = cljs.core.seq(seq__57209_57396);
if(temp__5735__auto___57405){
var seq__57209_57406__$1 = temp__5735__auto___57405;
if(cljs.core.chunked_seq_QMARK_(seq__57209_57406__$1)){
var c__4609__auto___57407 = cljs.core.chunk_first(seq__57209_57406__$1);
var G__57408 = cljs.core.chunk_rest(seq__57209_57406__$1);
var G__57409 = c__4609__auto___57407;
var G__57410 = cljs.core.count(c__4609__auto___57407);
var G__57411 = (0);
seq__57209_57396 = G__57408;
chunk__57210_57397 = G__57409;
count__57211_57398 = G__57410;
i__57212_57399 = G__57411;
continue;
} else {
var result_57412 = cljs.core.first(seq__57209_57406__$1);
instaparse.gll.push_message(tramp,listener,result_57412);


var G__57413 = cljs.core.next(seq__57209_57406__$1);
var G__57414 = null;
var G__57415 = (0);
var G__57416 = (0);
seq__57209_57396 = G__57413;
chunk__57210_57397 = G__57414;
count__57211_57398 = G__57415;
i__57212_57399 = G__57416;
continue;
}
} else {
}
}
break;
}

var seq__57213_57417 = cljs.core.seq(cljs.core.deref(new cljs.core.Keyword(null,"full-results","full-results",-1500225407).cljs$core$IFn$_invoke$arity$1(node)));
var chunk__57214_57418 = null;
var count__57215_57419 = (0);
var i__57216_57420 = (0);
while(true){
if((i__57216_57420 < count__57215_57419)){
var result_57421 = chunk__57214_57418.cljs$core$IIndexed$_nth$arity$2(null,i__57216_57420);
instaparse.gll.push_message(tramp,listener,result_57421);


var G__57422 = seq__57213_57417;
var G__57423 = chunk__57214_57418;
var G__57424 = count__57215_57419;
var G__57425 = (i__57216_57420 + (1));
seq__57213_57417 = G__57422;
chunk__57214_57418 = G__57423;
count__57215_57419 = G__57424;
i__57216_57420 = G__57425;
continue;
} else {
var temp__5735__auto___57426 = cljs.core.seq(seq__57213_57417);
if(temp__5735__auto___57426){
var seq__57213_57427__$1 = temp__5735__auto___57426;
if(cljs.core.chunked_seq_QMARK_(seq__57213_57427__$1)){
var c__4609__auto___57428 = cljs.core.chunk_first(seq__57213_57427__$1);
var G__57429 = cljs.core.chunk_rest(seq__57213_57427__$1);
var G__57430 = c__4609__auto___57428;
var G__57431 = cljs.core.count(c__4609__auto___57428);
var G__57432 = (0);
seq__57213_57417 = G__57429;
chunk__57214_57418 = G__57430;
count__57215_57419 = G__57431;
i__57216_57420 = G__57432;
continue;
} else {
var result_57433 = cljs.core.first(seq__57213_57427__$1);
instaparse.gll.push_message(tramp,listener,result_57433);


var G__57434 = cljs.core.next(seq__57213_57427__$1);
var G__57435 = null;
var G__57436 = (0);
var G__57437 = (0);
seq__57213_57417 = G__57434;
chunk__57214_57418 = G__57435;
count__57215_57419 = G__57436;
i__57216_57420 = G__57437;
continue;
}
} else {
}
}
break;
}

if(cljs.core.not(listener_already_exists_QMARK_)){
return instaparse.gll.push_stack(tramp,(function (){
return instaparse.gll._parse((node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1((1)) : node_key.call(null,(1))),(node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1((0)) : node_key.call(null,(0))),tramp);
}));
} else {
return null;
}
});
/**
 * Pushes a listener into the trampoline's node.
 * Schedules notification to listener of all existing full results.
 */
instaparse.gll.push_full_listener = (function instaparse$gll$push_full_listener(tramp,node_key,listener){
var full_listener_already_exists_QMARK_ = instaparse.gll.full_listener_exists_QMARK_(tramp,node_key);
var node = instaparse.gll.node_get(tramp,node_key);
var listeners = new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827).cljs$core$IFn$_invoke$arity$1(node);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners,cljs.core.conj,listener);

var seq__57217_57438 = cljs.core.seq(cljs.core.deref(new cljs.core.Keyword(null,"full-results","full-results",-1500225407).cljs$core$IFn$_invoke$arity$1(node)));
var chunk__57218_57439 = null;
var count__57219_57440 = (0);
var i__57220_57441 = (0);
while(true){
if((i__57220_57441 < count__57219_57440)){
var result_57442 = chunk__57218_57439.cljs$core$IIndexed$_nth$arity$2(null,i__57220_57441);
instaparse.gll.push_message(tramp,listener,result_57442);


var G__57443 = seq__57217_57438;
var G__57444 = chunk__57218_57439;
var G__57445 = count__57219_57440;
var G__57446 = (i__57220_57441 + (1));
seq__57217_57438 = G__57443;
chunk__57218_57439 = G__57444;
count__57219_57440 = G__57445;
i__57220_57441 = G__57446;
continue;
} else {
var temp__5735__auto___57447 = cljs.core.seq(seq__57217_57438);
if(temp__5735__auto___57447){
var seq__57217_57448__$1 = temp__5735__auto___57447;
if(cljs.core.chunked_seq_QMARK_(seq__57217_57448__$1)){
var c__4609__auto___57449 = cljs.core.chunk_first(seq__57217_57448__$1);
var G__57450 = cljs.core.chunk_rest(seq__57217_57448__$1);
var G__57451 = c__4609__auto___57449;
var G__57452 = cljs.core.count(c__4609__auto___57449);
var G__57453 = (0);
seq__57217_57438 = G__57450;
chunk__57218_57439 = G__57451;
count__57219_57440 = G__57452;
i__57220_57441 = G__57453;
continue;
} else {
var result_57454 = cljs.core.first(seq__57217_57448__$1);
instaparse.gll.push_message(tramp,listener,result_57454);


var G__57455 = cljs.core.next(seq__57217_57448__$1);
var G__57456 = null;
var G__57457 = (0);
var G__57458 = (0);
seq__57217_57438 = G__57455;
chunk__57218_57439 = G__57456;
count__57219_57440 = G__57457;
i__57220_57441 = G__57458;
continue;
}
} else {
}
}
break;
}

if(cljs.core.not(full_listener_already_exists_QMARK_)){
return instaparse.gll.push_stack(tramp,(function (){
return instaparse.gll._full_parse((node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1((1)) : node_key.call(null,(1))),(node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1((0)) : node_key.call(null,(0))),tramp);
}));
} else {
return null;
}
});
instaparse.gll.merge_negative_listeners = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.into);
/**
 * Pushes a thunk onto the trampoline's negative-listener stack.
 */
instaparse.gll.push_negative_listener = (function instaparse$gll$push_negative_listener(tramp,creator,negative_listener){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092).cljs$core$IFn$_invoke$arity$1(tramp),instaparse.gll.merge_negative_listeners,cljs.core.PersistentArrayMap.createAsIfByAssoc([(creator.cljs$core$IFn$_invoke$arity$1 ? creator.cljs$core$IFn$_invoke$arity$1((0)) : creator.call(null,(0))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negative_listener], null)]));
});
instaparse.gll.fail = (function instaparse$gll$fail(tramp,node_key,index,reason){

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"failure","failure",720415879).cljs$core$IFn$_invoke$arity$1(tramp),(function (failure){
var current_index = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure);
var G__57221 = cljs.core.compare(index,current_index);
switch (G__57221) {
case (1):
return (new instaparse.gll.Failure(index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reason], null),null,null,null));

break;
case (0):
return (new instaparse.gll.Failure(index,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(failure),reason),null,null,null));

break;
case (-1):
return failure;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57221)].join('')));

}
}));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,new cljs.core.Keyword(null,"fail-index","fail-index",248726923).cljs$core$IFn$_invoke$arity$1(tramp))){
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success((function (){var G__57222 = new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605).cljs$core$IFn$_invoke$arity$1(tramp);
var G__57223 = new cljs.core.Keyword("instaparse","failure","instaparse/failure",1422918607);
var G__57224 = (function (){var G__57227 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp);
var G__57228 = index;
return (instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$2 ? instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$2(G__57227,G__57228) : instaparse.gll.sub_sequence.call(null,G__57227,G__57228));
})();
var G__57225 = index;
var G__57226 = cljs.core.count(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp));
return (instaparse.gll.build_node_with_meta.cljs$core$IFn$_invoke$arity$5 ? instaparse.gll.build_node_with_meta.cljs$core$IFn$_invoke$arity$5(G__57222,G__57223,G__57224,G__57225,G__57226) : instaparse.gll.build_node_with_meta.call(null,G__57222,G__57223,G__57224,G__57225,G__57226));
})(),cljs.core.count(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp))));
} else {
return null;
}
});
/**
 * Executes one thing on the stack (not threadsafe)
 */
instaparse.gll.step = (function instaparse$gll$step(stack){
var top = cljs.core.peek(cljs.core.deref(stack));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.pop);

return (top.cljs$core$IFn$_invoke$arity$0 ? top.cljs$core$IFn$_invoke$arity$0() : top.call(null));
});
/**
 * Executes the stack until exhausted
 */
instaparse.gll.run = (function instaparse$gll$run(var_args){
var G__57230 = arguments.length;
switch (G__57230) {
case 1:
return instaparse.gll.run.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return instaparse.gll.run.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(instaparse.gll.run.cljs$core$IFn$_invoke$arity$1 = (function (tramp){
return instaparse.gll.run.cljs$core$IFn$_invoke$arity$2(tramp,null);
}));

(instaparse.gll.run.cljs$core$IFn$_invoke$arity$2 = (function (tramp,found_result_QMARK_){
while(true){
var stack = new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(tramp);
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(tramp)))){

return cljs.core.cons(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(tramp))),(new cljs.core.LazySeq(null,((function (tramp,found_result_QMARK_,stack){
return (function (){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(tramp),null);

return instaparse.gll.run.cljs$core$IFn$_invoke$arity$2(tramp,true);
});})(tramp,found_result_QMARK_,stack))
,null,null)));
} else {
if((cljs.core.count(cljs.core.deref(stack)) > (0))){
instaparse.gll.step(stack);

var G__57464 = tramp;
var G__57465 = found_result_QMARK_;
tramp = G__57464;
found_result_QMARK_ = G__57465;
continue;
} else {
if((cljs.core.count(cljs.core.deref(new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092).cljs$core$IFn$_invoke$arity$1(tramp))) > (0))){
var vec__57231 = cljs.core.first(cljs.core.deref(new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092).cljs$core$IFn$_invoke$arity$1(tramp)));
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57231,(0),null);
var listeners = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57231,(1),null);
var listener = cljs.core.peek(listeners);

(listener.cljs$core$IFn$_invoke$arity$0 ? listener.cljs$core$IFn$_invoke$arity$0() : listener.call(null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(listeners),(1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092).cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.dissoc,index);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092).cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [index], null),cljs.core.pop);
}

var G__57466 = tramp;
var G__57467 = found_result_QMARK_;
tramp = G__57466;
found_result_QMARK_ = G__57467;
continue;
} else {
if(cljs.core.truth_(found_result_QMARK_)){
var next_stack = new cljs.core.Keyword(null,"next-stack","next-stack",-481930728).cljs$core$IFn$_invoke$arity$1(tramp);
cljs.core.reset_BANG_(stack,cljs.core.deref(next_stack));

cljs.core.reset_BANG_(next_stack,cljs.core.PersistentVector.EMPTY);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"generation","generation",-2132542044).cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.inc);

var G__57468 = tramp;
var G__57469 = null;
tramp = G__57468;
found_result_QMARK_ = G__57469;
continue;
} else {
return null;

}
}
}
}
break;
}
}));

(instaparse.gll.run.cljs$lang$maxFixedArity = 2);

instaparse.gll.NodeListener = (function instaparse$gll$NodeListener(node_key,tramp){
return (function (result){
return instaparse.gll.push_result(tramp,node_key,result);
});
});
instaparse.gll.LookListener = (function instaparse$gll$LookListener(node_key,tramp){
return (function (result){
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(null,(node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1((0)) : node_key.call(null,(0)))));
});
});
instaparse.gll.CatListener = (function instaparse$gll$CatListener(results_so_far,parser_sequence,node_key,tramp){

return (function (result){
var map__57234 = result;
var map__57234__$1 = (((((!((map__57234 == null))))?(((((map__57234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57234):map__57234);
var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57234__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57234__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);
if(cljs.core.seq(parser_sequence)){
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,cljs.core.first(parser_sequence)], null),(function (){var G__57236 = new_results_so_far;
var G__57237 = cljs.core.next(parser_sequence);
var G__57238 = node_key;
var G__57239 = tramp;
return (instaparse.gll.CatListener.cljs$core$IFn$_invoke$arity$4 ? instaparse.gll.CatListener.cljs$core$IFn$_invoke$arity$4(G__57236,G__57237,G__57238,G__57239) : instaparse.gll.CatListener.call(null,G__57236,G__57237,G__57238,G__57239));
})());
} else {
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));
}
});
});
instaparse.gll.CatFullListener = (function instaparse$gll$CatFullListener(results_so_far,parser_sequence,node_key,tramp){
return (function (result){
var map__57240 = result;
var map__57240__$1 = (((((!((map__57240 == null))))?(((((map__57240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57240):map__57240);
var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57240__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57240__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);
if(instaparse.reduction.singleton_QMARK_(parser_sequence)){
return instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,cljs.core.first(parser_sequence)], null),(function (){var G__57242 = new_results_so_far;
var G__57243 = cljs.core.next(parser_sequence);
var G__57244 = node_key;
var G__57245 = tramp;
return (instaparse.gll.CatFullListener.cljs$core$IFn$_invoke$arity$4 ? instaparse.gll.CatFullListener.cljs$core$IFn$_invoke$arity$4(G__57242,G__57243,G__57244,G__57245) : instaparse.gll.CatFullListener.call(null,G__57242,G__57243,G__57244,G__57245));
})());
} else {
if(cljs.core.seq(parser_sequence)){
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,cljs.core.first(parser_sequence)], null),(function (){var G__57246 = new_results_so_far;
var G__57247 = cljs.core.next(parser_sequence);
var G__57248 = node_key;
var G__57249 = tramp;
return (instaparse.gll.CatFullListener.cljs$core$IFn$_invoke$arity$4 ? instaparse.gll.CatFullListener.cljs$core$IFn$_invoke$arity$4(G__57246,G__57247,G__57248,G__57249) : instaparse.gll.CatFullListener.call(null,G__57246,G__57247,G__57248,G__57249));
})());
} else {
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));

}
}
});
});
instaparse.gll.PlusListener = (function instaparse$gll$PlusListener(results_so_far,parser,prev_index,node_key,tramp){
return (function (result){
var map__57250 = result;
var map__57250__$1 = (((((!((map__57250 == null))))?(((((map__57250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57250):map__57250);
var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57250__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57250__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(continue_index,prev_index)){
if((cljs.core.count(results_so_far) === (0))){
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(null,continue_index));
} else {
return null;
}
} else {
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);
instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),(instaparse.gll.PlusListener.cljs$core$IFn$_invoke$arity$5 ? instaparse.gll.PlusListener.cljs$core$IFn$_invoke$arity$5(new_results_so_far,parser,continue_index,node_key,tramp) : instaparse.gll.PlusListener.call(null,new_results_so_far,parser,continue_index,node_key,tramp)));

return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));
}
});
});
instaparse.gll.PlusFullListener = (function instaparse$gll$PlusFullListener(results_so_far,parser,prev_index,node_key,tramp){
return (function (result){
var map__57252 = result;
var map__57252__$1 = (((((!((map__57252 == null))))?(((((map__57252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57252):map__57252);
var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57252__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57252__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(continue_index,prev_index)){
if((cljs.core.count(results_so_far) === (0))){
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(null,continue_index));
} else {
return null;
}
} else {
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(continue_index,cljs.core.count(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));
} else {
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),(instaparse.gll.PlusFullListener.cljs$core$IFn$_invoke$arity$5 ? instaparse.gll.PlusFullListener.cljs$core$IFn$_invoke$arity$5(new_results_so_far,parser,continue_index,node_key,tramp) : instaparse.gll.PlusFullListener.call(null,new_results_so_far,parser,continue_index,node_key,tramp)));
}
}
});
});
instaparse.gll.RepListener = (function instaparse$gll$RepListener(results_so_far,n_results_so_far,parser,m,n,prev_index,node_key,tramp){
return (function (result){
var map__57254 = result;
var map__57254__$1 = (((((!((map__57254 == null))))?(((((map__57254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57254):map__57254);
var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57254__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57254__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);
var new_n_results_so_far = (n_results_so_far + (1));
if((((m <= new_n_results_so_far)) && ((new_n_results_so_far <= n)))){
instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));
} else {
}

if((new_n_results_so_far < n)){
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),(instaparse.gll.RepListener.cljs$core$IFn$_invoke$arity$8 ? instaparse.gll.RepListener.cljs$core$IFn$_invoke$arity$8(new_results_so_far,new_n_results_so_far,parser,m,n,continue_index,node_key,tramp) : instaparse.gll.RepListener.call(null,new_results_so_far,new_n_results_so_far,parser,m,n,continue_index,node_key,tramp)));
} else {
return null;
}
});
});
instaparse.gll.RepFullListener = (function instaparse$gll$RepFullListener(results_so_far,n_results_so_far,parser,m,n,prev_index,node_key,tramp){
return (function (result){
var map__57256 = result;
var map__57256__$1 = (((((!((map__57256 == null))))?(((((map__57256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57256):map__57256);
var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57256__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57256__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);
var new_n_results_so_far = (n_results_so_far + (1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(continue_index,cljs.core.count(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp)))){
if((((m <= new_n_results_so_far)) && ((new_n_results_so_far <= n)))){
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));
} else {
return null;
}
} else {
if((new_n_results_so_far < n)){
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),(instaparse.gll.RepFullListener.cljs$core$IFn$_invoke$arity$8 ? instaparse.gll.RepFullListener.cljs$core$IFn$_invoke$arity$8(new_results_so_far,new_n_results_so_far,parser,m,n,continue_index,node_key,tramp) : instaparse.gll.RepFullListener.call(null,new_results_so_far,new_n_results_so_far,parser,m,n,continue_index,node_key,tramp)));
} else {
return null;
}
}
});
});
instaparse.gll.TopListener = (function instaparse$gll$TopListener(tramp){
return (function (result){
return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(tramp),result);
});
});
instaparse.gll.string_parse = (function instaparse$gll$string_parse(this$,index,tramp){
var string = new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(this$);
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp);
var end = (function (){var x__4276__auto__ = cljs.core.count(text);
var y__4277__auto__ = (index + cljs.core.count(string));
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})();
var head = (instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3(text,index,end) : instaparse.gll.sub_sequence.call(null,text,index,end));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(string,head)){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(string,end));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),string], null));
}
});
instaparse.gll.string_full_parse = (function instaparse$gll$string_full_parse(this$,index,tramp){
var string = new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(this$);
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp);
var end = (function (){var x__4276__auto__ = cljs.core.count(text);
var y__4277__auto__ = (index + cljs.core.count(string));
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})();
var head = (instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3(text,index,end) : instaparse.gll.sub_sequence.call(null,text,index,end));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end,cljs.core.count(text))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(string,head)))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(string,end));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),string,new cljs.core.Keyword(null,"full","full",436801220),true], null));
}
});
instaparse.gll.equals_ignore_case = (function instaparse$gll$equals_ignore_case(s1,s2){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s1.toUpperCase(),s2.toUpperCase());
});
instaparse.gll.string_case_insensitive_parse = (function instaparse$gll$string_case_insensitive_parse(this$,index,tramp){
var string = new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(this$);
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp);
var end = (function (){var x__4276__auto__ = cljs.core.count(text);
var y__4277__auto__ = (index + cljs.core.count(string));
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})();
var head = (instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3(text,index,end) : instaparse.gll.sub_sequence.call(null,text,index,end));
if(instaparse.gll.equals_ignore_case(string,head)){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(string,end));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),string], null));
}
});
instaparse.gll.string_case_insensitive_full_parse = (function instaparse$gll$string_case_insensitive_full_parse(this$,index,tramp){
var string = new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(this$);
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp);
var end = (function (){var x__4276__auto__ = cljs.core.count(text);
var y__4277__auto__ = (index + cljs.core.count(string));
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})();
var head = (instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3(text,index,end) : instaparse.gll.sub_sequence.call(null,text,index,end));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end,cljs.core.count(text))) && (instaparse.gll.equals_ignore_case(string,head)))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(string,end));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),string,new cljs.core.Keyword(null,"full","full",436801220),true], null));
}
});
instaparse.gll.single_char_code_at = (function instaparse$gll$single_char_code_at(text,index){
return text.charCodeAt(index);
});
instaparse.gll.unicode_code_point_at = (function instaparse$gll$unicode_code_point_at(text,index){
var G__57258 = text;
var G__57259 = (index | (0));
return goog.i18n.uChar.getCodePointAround(G__57258,G__57259);
});
instaparse.gll.code_point__GT_chars = (function instaparse$gll$code_point__GT_chars(code_point){
return goog.i18n.uChar.fromCharCode(code_point);
});
instaparse.gll.char_range_parse = (function instaparse$gll$char_range_parse(this$,index,tramp){
var lo = new cljs.core.Keyword(null,"lo","lo",-931799889).cljs$core$IFn$_invoke$arity$1(this$);
var hi = new cljs.core.Keyword(null,"hi","hi",-1821422114).cljs$core$IFn$_invoke$arity$1(this$);
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp);
if((index >= cljs.core.count(text))){
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char-range","char-range",1443391389),true,new cljs.core.Keyword(null,"lo","lo",-931799889),lo,new cljs.core.Keyword(null,"hi","hi",-1821422114),hi], null)], null));
} else {
if((hi <= (65535))){
var code = instaparse.gll.single_char_code_at(text,index);
if((((lo <= code)) && ((code <= hi)))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$(code)),(index + (1))));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char-range","char-range",1443391389),true,new cljs.core.Keyword(null,"lo","lo",-931799889),lo,new cljs.core.Keyword(null,"hi","hi",-1821422114),hi], null)], null));
}
} else {
var code_point = instaparse.gll.unicode_code_point_at(text,index);
var char_string = instaparse.gll.code_point__GT_chars(code_point);
if((((lo <= code_point)) && ((code_point <= hi)))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(char_string,(index + cljs.core.count(char_string))));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char-range","char-range",1443391389),true,new cljs.core.Keyword(null,"lo","lo",-931799889),lo,new cljs.core.Keyword(null,"hi","hi",-1821422114),hi], null)], null));
}

}
}
});
instaparse.gll.char_range_full_parse = (function instaparse$gll$char_range_full_parse(this$,index,tramp){
var lo = new cljs.core.Keyword(null,"lo","lo",-931799889).cljs$core$IFn$_invoke$arity$1(this$);
var hi = new cljs.core.Keyword(null,"hi","hi",-1821422114).cljs$core$IFn$_invoke$arity$1(this$);
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp);
var end = cljs.core.count(text);
if((index >= cljs.core.count(text))){
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char-range","char-range",1443391389),true,new cljs.core.Keyword(null,"lo","lo",-931799889),lo,new cljs.core.Keyword(null,"hi","hi",-1821422114),hi], null)], null));
} else {
if((hi <= (65535))){
var code = instaparse.gll.single_char_code_at(text,index);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((index + (1)),end)) && ((((lo <= code)) && ((code <= hi)))))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$(code)),end));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char-range","char-range",1443391389),true,new cljs.core.Keyword(null,"lo","lo",-931799889),lo,new cljs.core.Keyword(null,"hi","hi",-1821422114),hi], null)], null));
}
} else {
var code_point = instaparse.gll.unicode_code_point_at(text,index);
var char_string = instaparse.gll.code_point__GT_chars(code_point);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((index + cljs.core.count(char_string)),end)) && ((((lo <= code_point)) && ((code_point <= hi)))))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(char_string,end));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char-range","char-range",1443391389),true,new cljs.core.Keyword(null,"lo","lo",-931799889),lo,new cljs.core.Keyword(null,"hi","hi",-1821422114),hi], null),new cljs.core.Keyword(null,"full","full",436801220),true], null));
}

}
}
});
instaparse.gll.re_match_at_front = (function instaparse$gll$re_match_at_front(regexp,text){
var re = (new RegExp(regexp.source,["g",instaparse.util.regexp_flags(regexp)].join('')));
var m = re.exec(text);
if(cljs.core.truth_((function (){var and__4174__auto__ = m;
if(cljs.core.truth_(and__4174__auto__)){
return (m.index === (0));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.first(m);
} else {
return null;
}
});
instaparse.gll.regexp_parse = (function instaparse$gll$regexp_parse(this$,index,tramp){
var regexp = new cljs.core.Keyword(null,"regexp","regexp",-541372782).cljs$core$IFn$_invoke$arity$1(this$);
var text = new cljs.core.Keyword(null,"segment","segment",-964921196).cljs$core$IFn$_invoke$arity$1(tramp);
var substring = (instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$2 ? instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$2(text,index) : instaparse.gll.sub_sequence.call(null,text,index));
var match = instaparse.gll.re_match_at_front(regexp,substring);
if(cljs.core.truth_(match)){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(match,(index + cljs.core.count(match))));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"regexp","regexp",-541372782),new cljs.core.Keyword(null,"expecting","expecting",-57706705),regexp], null));
}
});
instaparse.gll.regexp_full_parse = (function instaparse$gll$regexp_full_parse(this$,index,tramp){
var regexp = new cljs.core.Keyword(null,"regexp","regexp",-541372782).cljs$core$IFn$_invoke$arity$1(this$);
var text = new cljs.core.Keyword(null,"segment","segment",-964921196).cljs$core$IFn$_invoke$arity$1(tramp);
var substring = (instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$2 ? instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$2(text,index) : instaparse.gll.sub_sequence.call(null,text,index));
var match = instaparse.gll.re_match_at_front(regexp,substring);
var desired_length = (cljs.core.count(text) - index);
if(cljs.core.truth_((function (){var and__4174__auto__ = match;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(match),desired_length);
} else {
return and__4174__auto__;
}
})())){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(match,cljs.core.count(text)));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"regexp","regexp",-541372782),new cljs.core.Keyword(null,"expecting","expecting",-57706705),regexp,new cljs.core.Keyword(null,"full","full",436801220),true], null));
}
});
instaparse.gll.cat_parse = (function instaparse$gll$cat_parse(this$,index,tramp){
var parsers = new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,cljs.core.first(parsers)], null),instaparse.gll.CatListener(instaparse.auto_flatten_seq.EMPTY,cljs.core.next(parsers),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.cat_full_parse = (function instaparse$gll$cat_full_parse(this$,index,tramp){
var parsers = new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,cljs.core.first(parsers)], null),instaparse.gll.CatFullListener(instaparse.auto_flatten_seq.EMPTY,cljs.core.next(parsers),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.plus_parse = (function instaparse$gll$plus_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusListener(instaparse.auto_flatten_seq.EMPTY,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.plus_full_parse = (function instaparse$gll$plus_full_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusFullListener(instaparse.auto_flatten_seq.EMPTY,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.rep_parse = (function instaparse$gll$rep_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
var m = new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(this$);
var n = new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(this$);
if((m === (0))){
instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));

if((n >= (1))){
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepListener(instaparse.auto_flatten_seq.EMPTY,(0),parser,(1),n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
} else {
return null;
}
} else {
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepListener(instaparse.auto_flatten_seq.EMPTY,(0),parser,m,n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
}
});
instaparse.gll.rep_full_parse = (function instaparse$gll$rep_full_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
var m = new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(this$);
var n = new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(this$);
if((m === (0))){
instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));

if((n >= (1))){
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepFullListener(instaparse.auto_flatten_seq.EMPTY,(0),parser,(1),n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
} else {
return null;
}
} else {
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepFullListener(instaparse.auto_flatten_seq.EMPTY,(0),parser,m,n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
}
});
instaparse.gll.star_parse = (function instaparse$gll$star_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusListener(instaparse.auto_flatten_seq.EMPTY,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
});
instaparse.gll.star_full_parse = (function instaparse$gll$star_full_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.count(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
} else {
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusFullListener(instaparse.auto_flatten_seq.EMPTY,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
}
});
instaparse.gll.alt_parse = (function instaparse$gll$alt_parse(this$,index,tramp){
var parsers = new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(this$);
var seq__57260 = cljs.core.seq(parsers);
var chunk__57261 = null;
var count__57262 = (0);
var i__57263 = (0);
while(true){
if((i__57263 < count__57262)){
var parser = chunk__57261.cljs$core$IIndexed$_nth$arity$2(null,i__57263);
instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));


var G__57508 = seq__57260;
var G__57509 = chunk__57261;
var G__57510 = count__57262;
var G__57511 = (i__57263 + (1));
seq__57260 = G__57508;
chunk__57261 = G__57509;
count__57262 = G__57510;
i__57263 = G__57511;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57260);
if(temp__5735__auto__){
var seq__57260__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57260__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57260__$1);
var G__57515 = cljs.core.chunk_rest(seq__57260__$1);
var G__57516 = c__4609__auto__;
var G__57517 = cljs.core.count(c__4609__auto__);
var G__57518 = (0);
seq__57260 = G__57515;
chunk__57261 = G__57516;
count__57262 = G__57517;
i__57263 = G__57518;
continue;
} else {
var parser = cljs.core.first(seq__57260__$1);
instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));


var G__57519 = cljs.core.next(seq__57260__$1);
var G__57520 = null;
var G__57521 = (0);
var G__57522 = (0);
seq__57260 = G__57519;
chunk__57261 = G__57520;
count__57262 = G__57521;
i__57263 = G__57522;
continue;
}
} else {
return null;
}
}
break;
}
});
instaparse.gll.alt_full_parse = (function instaparse$gll$alt_full_parse(this$,index,tramp){
var parsers = new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(this$);
var seq__57264 = cljs.core.seq(parsers);
var chunk__57265 = null;
var count__57266 = (0);
var i__57267 = (0);
while(true){
if((i__57267 < count__57266)){
var parser = chunk__57265.cljs$core$IIndexed$_nth$arity$2(null,i__57267);
instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));


var G__57524 = seq__57264;
var G__57525 = chunk__57265;
var G__57526 = count__57266;
var G__57527 = (i__57267 + (1));
seq__57264 = G__57524;
chunk__57265 = G__57525;
count__57266 = G__57526;
i__57267 = G__57527;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57264);
if(temp__5735__auto__){
var seq__57264__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57264__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57264__$1);
var G__57528 = cljs.core.chunk_rest(seq__57264__$1);
var G__57529 = c__4609__auto__;
var G__57530 = cljs.core.count(c__4609__auto__);
var G__57531 = (0);
seq__57264 = G__57528;
chunk__57265 = G__57529;
count__57266 = G__57530;
i__57267 = G__57531;
continue;
} else {
var parser = cljs.core.first(seq__57264__$1);
instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));


var G__57532 = cljs.core.next(seq__57264__$1);
var G__57533 = null;
var G__57534 = (0);
var G__57535 = (0);
seq__57264 = G__57532;
chunk__57265 = G__57533;
count__57266 = G__57534;
i__57267 = G__57535;
continue;
}
} else {
return null;
}
}
break;
}
});
instaparse.gll.ordered_alt_parse = (function instaparse$gll$ordered_alt_parse(this$,index,tramp){
var parser1 = new cljs.core.Keyword(null,"parser1","parser1",-439601422).cljs$core$IFn$_invoke$arity$1(this$);
var parser2 = new cljs.core.Keyword(null,"parser2","parser2",1013754688).cljs$core$IFn$_invoke$arity$1(this$);
var node_key_parser1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser1], null);
var node_key_parser2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser2], null);
var listener = instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp);
instaparse.gll.push_listener(tramp,node_key_parser1,listener);

return instaparse.gll.push_negative_listener(tramp,node_key_parser1,(function (){
return instaparse.gll.push_listener(tramp,node_key_parser2,listener);
}));
});
instaparse.gll.ordered_alt_full_parse = (function instaparse$gll$ordered_alt_full_parse(this$,index,tramp){
var parser1 = new cljs.core.Keyword(null,"parser1","parser1",-439601422).cljs$core$IFn$_invoke$arity$1(this$);
var parser2 = new cljs.core.Keyword(null,"parser2","parser2",1013754688).cljs$core$IFn$_invoke$arity$1(this$);
var node_key_parser1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser1], null);
var node_key_parser2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser2], null);
var listener = instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp);
instaparse.gll.push_full_listener(tramp,node_key_parser1,listener);

return instaparse.gll.push_negative_listener(tramp,node_key_parser1,(function (){
return instaparse.gll.push_full_listener(tramp,node_key_parser2,listener);
}));
});
instaparse.gll.opt_parse = (function instaparse$gll$opt_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
});
instaparse.gll.opt_full_parse = (function instaparse$gll$opt_full_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.count(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"optional","optional",2053951509),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.Keyword(null,"end-of-string","end-of-string",1567354241)], null));
}
});
instaparse.gll.non_terminal_parse = (function instaparse$gll$non_terminal_parse(this$,index,tramp){
var parser = instaparse.gll.get_parser(new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(tramp),new cljs.core.Keyword(null,"keyword","keyword",811389747).cljs$core$IFn$_invoke$arity$1(this$));
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.non_terminal_full_parse = (function instaparse$gll$non_terminal_full_parse(this$,index,tramp){
var parser = instaparse.gll.get_parser(new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(tramp),new cljs.core.Keyword(null,"keyword","keyword",811389747).cljs$core$IFn$_invoke$arity$1(this$));
return instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.lookahead_parse = (function instaparse$gll$lookahead_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.LookListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.lookahead_full_parse = (function instaparse$gll$lookahead_full_parse(this$,index,tramp){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.count(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.lookahead_parse(this$,index,tramp);
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"lookahead","lookahead",-400102393),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.Keyword(null,"end-of-string","end-of-string",1567354241)], null));
}
});
instaparse.gll.negative_lookahead_parse = (function instaparse$gll$negative_lookahead_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
var node_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null);
if(cljs.core.truth_(instaparse.gll.result_exists_QMARK_(tramp,node_key))){
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"negative-lookahead","negative-lookahead",874382387)], null));
} else {
instaparse.gll.push_listener(tramp,node_key,(function (){var fail_send = (new cljs.core.Delay((function (){
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"negative-lookahead","negative-lookahead",874382387),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"NOT","NOT",-1689245341),instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$1(parser)], null)], null));
}),null));
return (function (result){
return cljs.core.force(fail_send);
});
})());

return instaparse.gll.push_negative_listener(tramp,node_key,(function (){
if(cljs.core.not(instaparse.gll.result_exists_QMARK_(tramp,node_key))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
} else {
return null;
}
}));
}
});
instaparse.gll.epsilon_parse = (function instaparse$gll$epsilon_parse(this$,index,tramp){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
});
instaparse.gll.epsilon_full_parse = (function instaparse$gll$epsilon_full_parse(this$,index,tramp){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.count(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"Epsilon","Epsilon",133418452),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.Keyword(null,"end-of-string","end-of-string",1567354241)], null));
}
});
instaparse.gll.start_parser = (function instaparse$gll$start_parser(tramp,parser,partial_QMARK_){
if(cljs.core.truth_(partial_QMARK_)){
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),parser], null),instaparse.gll.TopListener(tramp));
} else {
return instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),parser], null),instaparse.gll.TopListener(tramp));
}
});
instaparse.gll.parses = (function instaparse$gll$parses(grammar,start,text,partial_QMARK_){

var tramp = instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$2(grammar,text);
var parser = instaparse.combinators_source.nt(start);
instaparse.gll.start_parser(tramp,parser,partial_QMARK_);

var temp__5733__auto__ = instaparse.gll.run.cljs$core$IFn$_invoke$arity$1(tramp);
if(cljs.core.truth_(temp__5733__auto__)){
var all_parses = temp__5733__auto__;
return all_parses;
} else {
return cljs.core.with_meta(cljs.core.List.EMPTY,instaparse.failure.augment_failure(cljs.core.deref(new cljs.core.Keyword(null,"failure","failure",720415879).cljs$core$IFn$_invoke$arity$1(tramp)),text));
}
});
instaparse.gll.parse = (function instaparse$gll$parse(grammar,start,text,partial_QMARK_){

var tramp = instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$2(grammar,text);
var parser = instaparse.combinators_source.nt(start);
instaparse.gll.start_parser(tramp,parser,partial_QMARK_);

var temp__5733__auto__ = instaparse.gll.run.cljs$core$IFn$_invoke$arity$1(tramp);
if(cljs.core.truth_(temp__5733__auto__)){
var all_parses = temp__5733__auto__;
return cljs.core.first(all_parses);
} else {
return instaparse.failure.augment_failure(cljs.core.deref(new cljs.core.Keyword(null,"failure","failure",720415879).cljs$core$IFn$_invoke$arity$1(tramp)),text);
}
});
instaparse.gll.build_node_with_meta = (function instaparse$gll$build_node_with_meta(node_builder,tag,content,start,end){
return cljs.core.with_meta((node_builder.cljs$core$IFn$_invoke$arity$2 ? node_builder.cljs$core$IFn$_invoke$arity$2(tag,content) : node_builder.call(null,tag,content)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("instaparse.gll","start-index","instaparse.gll/start-index",404653620),start,new cljs.core.Keyword("instaparse.gll","end-index","instaparse.gll/end-index",-1851404441),end], null));
});
instaparse.gll.build_total_failure_node = (function instaparse$gll$build_total_failure_node(node_builder,start,text){
var build_failure_node = instaparse.gll.build_node_with_meta(node_builder,new cljs.core.Keyword("instaparse","failure","instaparse/failure",1422918607),text,(0),cljs.core.count(text));
var build_start_node = instaparse.gll.build_node_with_meta(node_builder,start,build_failure_node,(0),cljs.core.count(text));
return build_start_node;
});
instaparse.gll.parses_total_after_fail = (function instaparse$gll$parses_total_after_fail(grammar,start,text,fail_index,partial_QMARK_,node_builder){
var tramp = instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$4(grammar,text,fail_index,node_builder);
var parser = instaparse.combinators_source.nt(start);

instaparse.gll.start_parser(tramp,parser,partial_QMARK_);

var temp__5733__auto__ = instaparse.gll.run.cljs$core$IFn$_invoke$arity$1(tramp);
if(cljs.core.truth_(temp__5733__auto__)){
var all_parses = temp__5733__auto__;
return all_parses;
} else {
return (new cljs.core.List(null,instaparse.gll.build_total_failure_node(node_builder,start,text),null,(1),null));
}
});
/**
 * A variation on with-meta that merges the existing metamap into the new metamap,
 * rather than overwriting the metamap entirely.
 */
instaparse.gll.merge_meta = (function instaparse$gll$merge_meta(obj,metamap){
return cljs.core.with_meta(obj,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metamap,cljs.core.meta(obj)], 0)));
});
instaparse.gll.parses_total = (function instaparse$gll$parses_total(grammar,start,text,partial_QMARK_,node_builder){

var all_parses = instaparse.gll.parses(grammar,start,text,partial_QMARK_);
if(cljs.core.seq(all_parses)){
return all_parses;
} else {
return instaparse.gll.merge_meta(instaparse.gll.parses_total_after_fail(grammar,start,text,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(all_parses)),partial_QMARK_,node_builder),cljs.core.meta(all_parses));
}
});
instaparse.gll.parse_total_after_fail = (function instaparse$gll$parse_total_after_fail(grammar,start,text,fail_index,partial_QMARK_,node_builder){
var tramp = instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$4(grammar,text,fail_index,node_builder);
var parser = instaparse.combinators_source.nt(start);

instaparse.gll.start_parser(tramp,parser,partial_QMARK_);

var temp__5733__auto__ = instaparse.gll.run.cljs$core$IFn$_invoke$arity$1(tramp);
if(cljs.core.truth_(temp__5733__auto__)){
var all_parses = temp__5733__auto__;
return cljs.core.first(all_parses);
} else {
return instaparse.gll.build_total_failure_node(node_builder,start,text);
}
});
instaparse.gll.parse_total = (function instaparse$gll$parse_total(grammar,start,text,partial_QMARK_,node_builder){

var result = instaparse.gll.parse(grammar,start,text,partial_QMARK_);
if((!((result instanceof instaparse.gll.Failure)))){
return result;
} else {
return instaparse.gll.merge_meta(instaparse.gll.parse_total_after_fail(grammar,start,text,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(result),partial_QMARK_,node_builder),result);
}
});

//# sourceMappingURL=instaparse.gll.js.map
