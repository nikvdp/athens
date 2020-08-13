goog.provide('shadow.remote.runtime.eval_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.eval_support.obj_support_inst = null;
shadow.remote.runtime.eval_support.get_ref = (function shadow$remote$runtime$eval_support$get_ref(oid){
if(cljs.core.truth_(shadow.remote.runtime.eval_support.obj_support_inst)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("obj-support not bound, can only call this from eval",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));
}

return shadow.remote.runtime.obj_support.get_ref(shadow.remote.runtime.eval_support.obj_support_inst,oid);
});
shadow.remote.runtime.eval_support.eval_cljs = (function shadow$remote$runtime$eval_support$eval_cljs(p__60003,msg){
var map__60004 = p__60003;
var map__60004__$1 = (((((!((map__60004 == null))))?(((((map__60004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60004):map__60004);
var svc = map__60004__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60004__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60004__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
(shadow.remote.runtime.eval_support.obj_support_inst = obj_support);

return runtime.eval_cljs(msg,(function (p__60006){
var map__60007 = p__60006;
var map__60007__$1 = (((((!((map__60007 == null))))?(((((map__60007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60007):map__60007);
var result = map__60007__$1;
var eval_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60007__$1,new cljs.core.Keyword(null,"eval-results","eval-results",553789722));
(shadow.remote.runtime.eval_support.obj_support_inst = null);

console.log("eval-cljs result",result);

var seq__60009 = cljs.core.seq(eval_results);
var chunk__60010 = null;
var count__60011 = (0);
var i__60012 = (0);
while(true){
if((i__60012 < count__60011)){
var map__60017 = chunk__60010.cljs$core$IIndexed$_nth$arity$2(null,i__60012);
var map__60017__$1 = (((((!((map__60017 == null))))?(((((map__60017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60017):map__60017);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60017__$1,new cljs.core.Keyword(null,"value","value",305978217));
if((value == null)){
shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-result","eval-result",937286342),new cljs.core.Keyword(null,"result","result",1415092211),null], null));
} else {
var ref_oid_60033 = shadow.remote.runtime.obj_support.register(obj_support,value,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-result-ref","eval-result-ref",263827420),new cljs.core.Keyword(null,"ref-oid","ref-oid",-526648644),ref_oid_60033], null));
}


var G__60034 = seq__60009;
var G__60035 = chunk__60010;
var G__60036 = count__60011;
var G__60037 = (i__60012 + (1));
seq__60009 = G__60034;
chunk__60010 = G__60035;
count__60011 = G__60036;
i__60012 = G__60037;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60009);
if(temp__5735__auto__){
var seq__60009__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60009__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60009__$1);
var G__60038 = cljs.core.chunk_rest(seq__60009__$1);
var G__60039 = c__4556__auto__;
var G__60040 = cljs.core.count(c__4556__auto__);
var G__60041 = (0);
seq__60009 = G__60038;
chunk__60010 = G__60039;
count__60011 = G__60040;
i__60012 = G__60041;
continue;
} else {
var map__60019 = cljs.core.first(seq__60009__$1);
var map__60019__$1 = (((((!((map__60019 == null))))?(((((map__60019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60019):map__60019);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60019__$1,new cljs.core.Keyword(null,"value","value",305978217));
if((value == null)){
shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-result","eval-result",937286342),new cljs.core.Keyword(null,"result","result",1415092211),null], null));
} else {
var ref_oid_60042 = shadow.remote.runtime.obj_support.register(obj_support,value,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-result-ref","eval-result-ref",263827420),new cljs.core.Keyword(null,"ref-oid","ref-oid",-526648644),ref_oid_60042], null));
}


var G__60043 = cljs.core.next(seq__60009__$1);
var G__60044 = null;
var G__60045 = (0);
var G__60046 = (0);
seq__60009 = G__60043;
chunk__60010 = G__60044;
count__60011 = G__60045;
i__60012 = G__60046;
continue;
}
} else {
return null;
}
}
break;
}
}));
});
shadow.remote.runtime.eval_support.eval_js = (function shadow$remote$runtime$eval_support$eval_js(p__60021,p__60022){
var map__60023 = p__60021;
var map__60023__$1 = (((((!((map__60023 == null))))?(((((map__60023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60023):map__60023);
var svc = map__60023__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60023__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60023__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var map__60024 = p__60022;
var map__60024__$1 = (((((!((map__60024 == null))))?(((((map__60024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60024):map__60024);
var msg = map__60024__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60024__$1,new cljs.core.Keyword(null,"code","code",1586293142));
try{var res = runtime.eval_js(code);
var ref_oid = shadow.remote.runtime.obj_support.register(obj_support,res,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"js-code","js-code",1816578331),code], null));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-result-ref","eval-result-ref",263827420),new cljs.core.Keyword(null,"ref-oid","ref-oid",-526648644),ref_oid], null));
}catch (e60027){var e = e60027;
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-error","eval-error",466139568),new cljs.core.Keyword(null,"e","e",1381269198),e.message], null));
}});
shadow.remote.runtime.eval_support.start = (function shadow$remote$runtime$eval_support$start(runtime,obj_support){
var svc = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.eval-support","ext","shadow.remote.runtime.eval-support/ext",1781604625),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eval-js","eval-js",760905924),(function (p1__60028_SHARP_){
return shadow.remote.runtime.eval_support.eval_js(svc,p1__60028_SHARP_);
}),new cljs.core.Keyword(null,"eval-cljs","eval-cljs",-119543019),(function (p1__60029_SHARP_){
return shadow.remote.runtime.eval_support.eval_cljs(svc,p1__60029_SHARP_);
})], null)], null));

return svc;
});
shadow.remote.runtime.eval_support.stop = (function shadow$remote$runtime$eval_support$stop(p__60030){
var map__60031 = p__60030;
var map__60031__$1 = (((((!((map__60031 == null))))?(((((map__60031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60031):map__60031);
var svc = map__60031__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60031__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.eval-support","ext","shadow.remote.runtime.eval-support/ext",1781604625));
});

//# sourceMappingURL=shadow.remote.runtime.eval_support.js.map
