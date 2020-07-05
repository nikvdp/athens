goog.provide('spec_tools.transform');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.date.UtcDateTime');
goog.require('goog.date.Date');
goog.require('clojure.set');
goog.require('spec_tools.parse');
goog.require('clojure.string');
goog.require('spec_tools.impl');
spec_tools.transform.keyword__GT_string = (function spec_tools$transform$keyword__GT_string(_,x){
if((x instanceof cljs.core.Keyword)){
return spec_tools.impl.qualified_name(x);
} else {
return x;
}
});
spec_tools.transform.keyword_or_string__GT_ = (function spec_tools$transform$keyword_or_string__GT_(f){
return (function (spec,x){
if((x instanceof cljs.core.Keyword)){
var G__55141 = spec;
var G__55142 = spec_tools.transform.keyword__GT_string(spec,x);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__55141,G__55142) : f.call(null,G__55141,G__55142));
} else {
if(typeof x === 'string'){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(spec,x) : f.call(null,spec,x));
} else {
return x;

}
}
});
});
spec_tools.transform.keyword__GT_ = (function spec_tools$transform$keyword__GT_(f){
return (function (spec,x){
if((x instanceof cljs.core.Keyword)){
var G__55143 = spec;
var G__55144 = spec_tools.transform.keyword__GT_string(spec,x);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__55143,G__55144) : f.call(null,G__55143,G__55144));
} else {
return x;

}
});
});
spec_tools.transform.string__GT_long = (function spec_tools$transform$string__GT_long(_,x){
if(typeof x === 'string'){
try{var x_SINGLEQUOTE_ = parseInt(x,(10));
if(cljs.core.truth_(isNaN(x_SINGLEQUOTE_))){
return x;
} else {
return x_SINGLEQUOTE_;
}
}catch (e55145){if((e55145 instanceof Error)){
var ___$1 = e55145;
return x;
} else {
throw e55145;

}
}} else {
return x;
}
});
spec_tools.transform.string__GT_double = (function spec_tools$transform$string__GT_double(_,x){
if(typeof x === 'string'){
try{var x_SINGLEQUOTE_ = parseFloat(x);
if(cljs.core.truth_(isNaN(x_SINGLEQUOTE_))){
return x;
} else {
return x_SINGLEQUOTE_;
}
}catch (e55146){if((e55146 instanceof Error)){
var ___$1 = e55146;
return x;
} else {
throw e55146;

}
}} else {
return x;
}
});
spec_tools.transform.string__GT_keyword = (function spec_tools$transform$string__GT_keyword(_,x){
if(typeof x === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
});
spec_tools.transform.string__GT_boolean = (function spec_tools$transform$string__GT_boolean(_,x){
if(typeof x === 'string'){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",x)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("false",x)){
return false;
} else {
return x;

}
}
} else {
return x;
}
});
spec_tools.transform.string__GT_uuid = (function spec_tools$transform$string__GT_uuid(_,x){
if(typeof x === 'string'){
try{if(cljs.core.truth_(cljs.core.re_find(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/,x))){
return cljs.core.uuid(x);
} else {
return x;
}
}catch (e55147){if((e55147 instanceof Error)){
var ___$1 = e55147;
return x;
} else {
throw e55147;

}
}} else {
return x;
}
});
spec_tools.transform.string__GT_date = (function spec_tools$transform$string__GT_date(_,x){
if(typeof x === 'string'){
try{return (new Date(goog.date.UtcDateTime.fromIsoString(x).getTime()));
}catch (e55148){if((e55148 instanceof Error)){
var ___$1 = e55148;
return x;
} else {
throw e55148;

}
}} else {
return x;
}
});
spec_tools.transform.date__GT_string = (function spec_tools$transform$date__GT_string(_,x){
if(cljs.core.inst_QMARK_(x)){
try{return x.toISOString();
}catch (e55149){if((e55149 instanceof Error)){
var ___$1 = e55149;
return x;
} else {
throw e55149;

}
}} else {
return x;
}
});
spec_tools.transform.string__GT_symbol = (function spec_tools$transform$string__GT_symbol(_,x){
if(typeof x === 'string'){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
});
spec_tools.transform.string__GT_nil = (function spec_tools$transform$string__GT_nil(_,x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",x)){
return null;
} else {
return x;
}
});
spec_tools.transform.any__GT_string = (function spec_tools$transform$any__GT_string(_,x){
if((!((x == null)))){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
} else {
return null;
}
});
spec_tools.transform.number__GT_double = (function spec_tools$transform$number__GT_double(_,x){
if(typeof x === 'number'){
return x;
} else {
return x;
}
});
spec_tools.transform.any__GT_any = (function spec_tools$transform$any__GT_any(_,x){
return x;
});
spec_tools.transform.strip_extra_keys = (function spec_tools$transform$strip_extra_keys(p__55150,x){
var map__55151 = p__55150;
var map__55151__$1 = (((((!((map__55151 == null))))?(((((map__55151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55151):map__55151);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55151__$1,new cljs.core.Keyword("spec-tools.parse","keys","spec-tools.parse/keys",1331815460));
if(cljs.core.truth_((function (){var and__4174__auto__ = keys;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.map_QMARK_(x);
} else {
return and__4174__auto__;
}
})())){
return cljs.core.select_keys(x,keys);
} else {
return x;
}
});
spec_tools.transform.fail_on_extra_keys = (function spec_tools$transform$fail_on_extra_keys(p__55153,x){
var map__55154 = p__55153;
var map__55154__$1 = (((((!((map__55154 == null))))?(((((map__55154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55154):map__55154);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55154__$1,new cljs.core.Keyword("spec-tools.parse","keys","spec-tools.parse/keys",1331815460));
if(((cljs.core.map_QMARK_(x)) && ((!(clojure.set.subset_QMARK_(cljs.core.set(cljs.core.keys(x)),keys)))))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return x;
}
});
spec_tools.transform.strip_extra_values = (function spec_tools$transform$strip_extra_values(p__55156,x){
var map__55157 = p__55156;
var map__55157__$1 = (((((!((map__55157 == null))))?(((((map__55157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55157):map__55157);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55157__$1,new cljs.core.Keyword("spec-tools.parse","items","spec-tools.parse/items",1255627600));
var size = cljs.core.count(items);
if(((cljs.core.vector_QMARK_(x)) && ((cljs.core.count(x) > size)))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(x,(0),size);
} else {
return x;
}
});
spec_tools.transform.json_type_decoders = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"keyword","keyword",811389747),spec_tools.transform.string__GT_keyword,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),spec_tools.transform.keyword_or_string__GT_(spec_tools.transform.string__GT_uuid),new cljs.core.Keyword(null,"date","date",-1463434462),spec_tools.transform.keyword_or_string__GT_(spec_tools.transform.string__GT_date),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),spec_tools.transform.keyword_or_string__GT_(spec_tools.transform.string__GT_symbol),new cljs.core.Keyword(null,"long","long",-171452093),spec_tools.transform.keyword__GT_(spec_tools.transform.string__GT_long),new cljs.core.Keyword(null,"double","double",884886883),spec_tools.transform.keyword__GT_(spec_tools.transform.string__GT_double),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),spec_tools.transform.keyword__GT_(spec_tools.transform.string__GT_boolean),new cljs.core.Keyword(null,"string","string",-1989541586),spec_tools.transform.keyword__GT_string], null)], 0));
spec_tools.transform.string_type_decoders = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([spec_tools.transform.json_type_decoders,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"long","long",-171452093),spec_tools.transform.keyword_or_string__GT_(spec_tools.transform.string__GT_long),new cljs.core.Keyword(null,"double","double",884886883),spec_tools.transform.keyword_or_string__GT_(spec_tools.transform.string__GT_double),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),spec_tools.transform.keyword_or_string__GT_(spec_tools.transform.string__GT_boolean)], null)], 0));
spec_tools.transform.strip_extra_keys_type_decoders = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map","map",1371690461),spec_tools.transform.strip_extra_keys], null);
spec_tools.transform.fail_on_extra_keys_type_decoders = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map","map",1371690461),spec_tools.transform.fail_on_extra_keys], null);
spec_tools.transform.strip_extra_values_type_decoders = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),spec_tools.transform.strip_extra_values], null);
spec_tools.transform.json_type_encoders = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"bigdec","bigdec",1019443956),new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"map","map",1371690461)],[spec_tools.transform.date__GT_string,spec_tools.transform.any__GT_string,spec_tools.transform.any__GT_any,spec_tools.transform.keyword__GT_string,spec_tools.transform.any__GT_string,spec_tools.transform.any__GT_string,spec_tools.transform.any__GT_string,spec_tools.transform.any__GT_any,spec_tools.transform.any__GT_any]);
spec_tools.transform.string_type_encoders = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([spec_tools.transform.json_type_encoders,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"long","long",-171452093),spec_tools.transform.any__GT_string,new cljs.core.Keyword(null,"double","double",884886883),spec_tools.transform.any__GT_string], null)], 0));

//# sourceMappingURL=spec_tools.transform.js.map
