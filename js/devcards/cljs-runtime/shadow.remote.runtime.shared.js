goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__60846,p__60847){
var map__60848 = p__60846;
var map__60848__$1 = (((((!((map__60848 == null))))?(((((map__60848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60848):map__60848);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60848__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60849 = p__60847;
var map__60849__$1 = (((((!((map__60849 == null))))?(((((map__60849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60849):map__60849);
var msg = map__60849__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60849__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__60852,p__60853){
var map__60854 = p__60852;
var map__60854__$1 = (((((!((map__60854 == null))))?(((((map__60854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60854):map__60854);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60854__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60855 = p__60853;
var map__60855__$1 = (((((!((map__60855 == null))))?(((((map__60855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60855):map__60855);
var msg = map__60855__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60855__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__60858 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60860 = null;
var count__60861 = (0);
var i__60862 = (0);
while(true){
if((i__60862 < count__60861)){
var map__60868 = chunk__60860.cljs$core$IIndexed$_nth$arity$2(null,i__60862);
var map__60868__$1 = (((((!((map__60868 == null))))?(((((map__60868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60868):map__60868);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60868__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60915 = seq__60858;
var G__60916 = chunk__60860;
var G__60917 = count__60861;
var G__60918 = (i__60862 + (1));
seq__60858 = G__60915;
chunk__60860 = G__60916;
count__60861 = G__60917;
i__60862 = G__60918;
continue;
} else {
var G__60919 = seq__60858;
var G__60920 = chunk__60860;
var G__60921 = count__60861;
var G__60922 = (i__60862 + (1));
seq__60858 = G__60919;
chunk__60860 = G__60920;
count__60861 = G__60921;
i__60862 = G__60922;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60858);
if(temp__5735__auto__){
var seq__60858__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60858__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60858__$1);
var G__60923 = cljs.core.chunk_rest(seq__60858__$1);
var G__60924 = c__4609__auto__;
var G__60925 = cljs.core.count(c__4609__auto__);
var G__60926 = (0);
seq__60858 = G__60923;
chunk__60860 = G__60924;
count__60861 = G__60925;
i__60862 = G__60926;
continue;
} else {
var map__60870 = cljs.core.first(seq__60858__$1);
var map__60870__$1 = (((((!((map__60870 == null))))?(((((map__60870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60870):map__60870);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60870__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60927 = cljs.core.next(seq__60858__$1);
var G__60928 = null;
var G__60929 = (0);
var G__60930 = (0);
seq__60858 = G__60927;
chunk__60860 = G__60928;
count__60861 = G__60929;
i__60862 = G__60930;
continue;
} else {
var G__60931 = cljs.core.next(seq__60858__$1);
var G__60932 = null;
var G__60933 = (0);
var G__60934 = (0);
seq__60858 = G__60931;
chunk__60860 = G__60932;
count__60861 = G__60933;
i__60862 = G__60934;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__60872,msg){
var map__60873 = p__60872;
var map__60873__$1 = (((((!((map__60873 == null))))?(((((map__60873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60873):map__60873);
var runtime = map__60873__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60873__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__60875,key,p__60876){
var map__60877 = p__60875;
var map__60877__$1 = (((((!((map__60877 == null))))?(((((map__60877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60877):map__60877);
var state = map__60877__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60877__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__60878 = p__60876;
var map__60878__$1 = (((((!((map__60878 == null))))?(((((map__60878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60878):map__60878);
var spec = map__60878__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60878__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__60881,key,spec){
var map__60882 = p__60881;
var map__60882__$1 = (((((!((map__60882 == null))))?(((((map__60882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60882):map__60882);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60882__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__60889){
var map__60890 = p__60889;
var map__60890__$1 = (((((!((map__60890 == null))))?(((((map__60890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60890):map__60890);
var runtime = map__60890__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60890__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__60884_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__60884_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__60885_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__60885_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__60886_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__60886_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__60887_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__60887_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__60888_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__60888_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__60892,key){
var map__60893 = p__60892;
var map__60893__$1 = (((((!((map__60893 == null))))?(((((map__60893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60893):map__60893);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60893__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__60895,p__60896){
var map__60897 = p__60895;
var map__60897__$1 = (((((!((map__60897 == null))))?(((((map__60897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60897):map__60897);
var runtime = map__60897__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60897__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60898 = p__60896;
var map__60898__$1 = (((((!((map__60898 == null))))?(((((map__60898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60898):map__60898);
var msg = map__60898__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60898__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__60901 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60903 = null;
var count__60904 = (0);
var i__60905 = (0);
while(true){
if((i__60905 < count__60904)){
var map__60911 = chunk__60903.cljs$core$IIndexed$_nth$arity$2(null,i__60905);
var map__60911__$1 = (((((!((map__60911 == null))))?(((((map__60911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60911):map__60911);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60911__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60935 = seq__60901;
var G__60936 = chunk__60903;
var G__60937 = count__60904;
var G__60938 = (i__60905 + (1));
seq__60901 = G__60935;
chunk__60903 = G__60936;
count__60904 = G__60937;
i__60905 = G__60938;
continue;
} else {
var G__60939 = seq__60901;
var G__60940 = chunk__60903;
var G__60941 = count__60904;
var G__60942 = (i__60905 + (1));
seq__60901 = G__60939;
chunk__60903 = G__60940;
count__60904 = G__60941;
i__60905 = G__60942;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60901);
if(temp__5735__auto__){
var seq__60901__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60901__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60901__$1);
var G__60943 = cljs.core.chunk_rest(seq__60901__$1);
var G__60944 = c__4609__auto__;
var G__60945 = cljs.core.count(c__4609__auto__);
var G__60946 = (0);
seq__60901 = G__60943;
chunk__60903 = G__60944;
count__60904 = G__60945;
i__60905 = G__60946;
continue;
} else {
var map__60913 = cljs.core.first(seq__60901__$1);
var map__60913__$1 = (((((!((map__60913 == null))))?(((((map__60913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60913):map__60913);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60913__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60947 = cljs.core.next(seq__60901__$1);
var G__60948 = null;
var G__60949 = (0);
var G__60950 = (0);
seq__60901 = G__60947;
chunk__60903 = G__60948;
count__60904 = G__60949;
i__60905 = G__60950;
continue;
} else {
var G__60951 = cljs.core.next(seq__60901__$1);
var G__60952 = null;
var G__60953 = (0);
var G__60954 = (0);
seq__60901 = G__60951;
chunk__60903 = G__60952;
count__60904 = G__60953;
i__60905 = G__60954;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
