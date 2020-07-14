goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__60792,p__60793){
var map__60794 = p__60792;
var map__60794__$1 = (((((!((map__60794 == null))))?(((((map__60794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60794):map__60794);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60794__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60795 = p__60793;
var map__60795__$1 = (((((!((map__60795 == null))))?(((((map__60795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60795):map__60795);
var msg = map__60795__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60795__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__60798,p__60799){
var map__60800 = p__60798;
var map__60800__$1 = (((((!((map__60800 == null))))?(((((map__60800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60800):map__60800);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60800__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60801 = p__60799;
var map__60801__$1 = (((((!((map__60801 == null))))?(((((map__60801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60801):map__60801);
var msg = map__60801__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60801__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__60804 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60806 = null;
var count__60807 = (0);
var i__60808 = (0);
while(true){
if((i__60808 < count__60807)){
var map__60814 = chunk__60806.cljs$core$IIndexed$_nth$arity$2(null,i__60808);
var map__60814__$1 = (((((!((map__60814 == null))))?(((((map__60814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60814):map__60814);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60814__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60861 = seq__60804;
var G__60862 = chunk__60806;
var G__60863 = count__60807;
var G__60864 = (i__60808 + (1));
seq__60804 = G__60861;
chunk__60806 = G__60862;
count__60807 = G__60863;
i__60808 = G__60864;
continue;
} else {
var G__60865 = seq__60804;
var G__60866 = chunk__60806;
var G__60867 = count__60807;
var G__60868 = (i__60808 + (1));
seq__60804 = G__60865;
chunk__60806 = G__60866;
count__60807 = G__60867;
i__60808 = G__60868;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60804);
if(temp__5735__auto__){
var seq__60804__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60804__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60804__$1);
var G__60869 = cljs.core.chunk_rest(seq__60804__$1);
var G__60870 = c__4609__auto__;
var G__60871 = cljs.core.count(c__4609__auto__);
var G__60872 = (0);
seq__60804 = G__60869;
chunk__60806 = G__60870;
count__60807 = G__60871;
i__60808 = G__60872;
continue;
} else {
var map__60816 = cljs.core.first(seq__60804__$1);
var map__60816__$1 = (((((!((map__60816 == null))))?(((((map__60816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60816):map__60816);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60816__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60873 = cljs.core.next(seq__60804__$1);
var G__60874 = null;
var G__60875 = (0);
var G__60876 = (0);
seq__60804 = G__60873;
chunk__60806 = G__60874;
count__60807 = G__60875;
i__60808 = G__60876;
continue;
} else {
var G__60877 = cljs.core.next(seq__60804__$1);
var G__60878 = null;
var G__60879 = (0);
var G__60880 = (0);
seq__60804 = G__60877;
chunk__60806 = G__60878;
count__60807 = G__60879;
i__60808 = G__60880;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__60818,msg){
var map__60819 = p__60818;
var map__60819__$1 = (((((!((map__60819 == null))))?(((((map__60819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60819):map__60819);
var runtime = map__60819__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60819__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__60821,key,p__60822){
var map__60823 = p__60821;
var map__60823__$1 = (((((!((map__60823 == null))))?(((((map__60823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60823):map__60823);
var state = map__60823__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60823__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__60824 = p__60822;
var map__60824__$1 = (((((!((map__60824 == null))))?(((((map__60824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60824):map__60824);
var spec = map__60824__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60824__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__60827,key,spec){
var map__60828 = p__60827;
var map__60828__$1 = (((((!((map__60828 == null))))?(((((map__60828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60828):map__60828);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60828__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__60835){
var map__60836 = p__60835;
var map__60836__$1 = (((((!((map__60836 == null))))?(((((map__60836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60836):map__60836);
var runtime = map__60836__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60836__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__60830_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__60830_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__60831_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__60831_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__60832_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__60832_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__60833_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__60833_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__60834_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__60834_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__60838,key){
var map__60839 = p__60838;
var map__60839__$1 = (((((!((map__60839 == null))))?(((((map__60839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60839):map__60839);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60839__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__60841,p__60842){
var map__60843 = p__60841;
var map__60843__$1 = (((((!((map__60843 == null))))?(((((map__60843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60843):map__60843);
var runtime = map__60843__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60843__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60844 = p__60842;
var map__60844__$1 = (((((!((map__60844 == null))))?(((((map__60844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60844):map__60844);
var msg = map__60844__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60844__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__60847 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60849 = null;
var count__60850 = (0);
var i__60851 = (0);
while(true){
if((i__60851 < count__60850)){
var map__60857 = chunk__60849.cljs$core$IIndexed$_nth$arity$2(null,i__60851);
var map__60857__$1 = (((((!((map__60857 == null))))?(((((map__60857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60857):map__60857);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60857__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60881 = seq__60847;
var G__60882 = chunk__60849;
var G__60883 = count__60850;
var G__60884 = (i__60851 + (1));
seq__60847 = G__60881;
chunk__60849 = G__60882;
count__60850 = G__60883;
i__60851 = G__60884;
continue;
} else {
var G__60885 = seq__60847;
var G__60886 = chunk__60849;
var G__60887 = count__60850;
var G__60888 = (i__60851 + (1));
seq__60847 = G__60885;
chunk__60849 = G__60886;
count__60850 = G__60887;
i__60851 = G__60888;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60847);
if(temp__5735__auto__){
var seq__60847__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60847__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60847__$1);
var G__60889 = cljs.core.chunk_rest(seq__60847__$1);
var G__60890 = c__4609__auto__;
var G__60891 = cljs.core.count(c__4609__auto__);
var G__60892 = (0);
seq__60847 = G__60889;
chunk__60849 = G__60890;
count__60850 = G__60891;
i__60851 = G__60892;
continue;
} else {
var map__60859 = cljs.core.first(seq__60847__$1);
var map__60859__$1 = (((((!((map__60859 == null))))?(((((map__60859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60859):map__60859);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60859__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60893 = cljs.core.next(seq__60847__$1);
var G__60894 = null;
var G__60895 = (0);
var G__60896 = (0);
seq__60847 = G__60893;
chunk__60849 = G__60894;
count__60850 = G__60895;
i__60851 = G__60896;
continue;
} else {
var G__60897 = cljs.core.next(seq__60847__$1);
var G__60898 = null;
var G__60899 = (0);
var G__60900 = (0);
seq__60847 = G__60897;
chunk__60849 = G__60898;
count__60850 = G__60899;
i__60851 = G__60900;
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
