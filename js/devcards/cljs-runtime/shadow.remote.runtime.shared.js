goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__60779,p__60780){
var map__60781 = p__60779;
var map__60781__$1 = (((((!((map__60781 == null))))?(((((map__60781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60781):map__60781);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60781__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60782 = p__60780;
var map__60782__$1 = (((((!((map__60782 == null))))?(((((map__60782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60782):map__60782);
var msg = map__60782__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60782__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__60785,p__60786){
var map__60787 = p__60785;
var map__60787__$1 = (((((!((map__60787 == null))))?(((((map__60787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60787):map__60787);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60787__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60788 = p__60786;
var map__60788__$1 = (((((!((map__60788 == null))))?(((((map__60788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60788):map__60788);
var msg = map__60788__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60788__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__60791 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60793 = null;
var count__60794 = (0);
var i__60795 = (0);
while(true){
if((i__60795 < count__60794)){
var map__60801 = chunk__60793.cljs$core$IIndexed$_nth$arity$2(null,i__60795);
var map__60801__$1 = (((((!((map__60801 == null))))?(((((map__60801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60801):map__60801);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60801__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60848 = seq__60791;
var G__60849 = chunk__60793;
var G__60850 = count__60794;
var G__60851 = (i__60795 + (1));
seq__60791 = G__60848;
chunk__60793 = G__60849;
count__60794 = G__60850;
i__60795 = G__60851;
continue;
} else {
var G__60852 = seq__60791;
var G__60853 = chunk__60793;
var G__60854 = count__60794;
var G__60855 = (i__60795 + (1));
seq__60791 = G__60852;
chunk__60793 = G__60853;
count__60794 = G__60854;
i__60795 = G__60855;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60791);
if(temp__5735__auto__){
var seq__60791__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60791__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60791__$1);
var G__60856 = cljs.core.chunk_rest(seq__60791__$1);
var G__60857 = c__4609__auto__;
var G__60858 = cljs.core.count(c__4609__auto__);
var G__60859 = (0);
seq__60791 = G__60856;
chunk__60793 = G__60857;
count__60794 = G__60858;
i__60795 = G__60859;
continue;
} else {
var map__60803 = cljs.core.first(seq__60791__$1);
var map__60803__$1 = (((((!((map__60803 == null))))?(((((map__60803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60803):map__60803);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60803__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60860 = cljs.core.next(seq__60791__$1);
var G__60861 = null;
var G__60862 = (0);
var G__60863 = (0);
seq__60791 = G__60860;
chunk__60793 = G__60861;
count__60794 = G__60862;
i__60795 = G__60863;
continue;
} else {
var G__60864 = cljs.core.next(seq__60791__$1);
var G__60865 = null;
var G__60866 = (0);
var G__60867 = (0);
seq__60791 = G__60864;
chunk__60793 = G__60865;
count__60794 = G__60866;
i__60795 = G__60867;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__60805,msg){
var map__60806 = p__60805;
var map__60806__$1 = (((((!((map__60806 == null))))?(((((map__60806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60806):map__60806);
var runtime = map__60806__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60806__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__60808,key,p__60809){
var map__60810 = p__60808;
var map__60810__$1 = (((((!((map__60810 == null))))?(((((map__60810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60810):map__60810);
var state = map__60810__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60810__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__60811 = p__60809;
var map__60811__$1 = (((((!((map__60811 == null))))?(((((map__60811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60811):map__60811);
var spec = map__60811__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60811__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__60814,key,spec){
var map__60815 = p__60814;
var map__60815__$1 = (((((!((map__60815 == null))))?(((((map__60815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60815):map__60815);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60815__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__60822){
var map__60823 = p__60822;
var map__60823__$1 = (((((!((map__60823 == null))))?(((((map__60823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60823):map__60823);
var runtime = map__60823__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60823__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__60817_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__60817_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__60818_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__60818_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__60819_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__60819_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__60820_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__60820_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__60821_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__60821_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__60825,key){
var map__60826 = p__60825;
var map__60826__$1 = (((((!((map__60826 == null))))?(((((map__60826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60826):map__60826);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60826__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__60828,p__60829){
var map__60830 = p__60828;
var map__60830__$1 = (((((!((map__60830 == null))))?(((((map__60830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60830):map__60830);
var runtime = map__60830__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60830__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60831 = p__60829;
var map__60831__$1 = (((((!((map__60831 == null))))?(((((map__60831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60831):map__60831);
var msg = map__60831__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60831__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__60834 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60836 = null;
var count__60837 = (0);
var i__60838 = (0);
while(true){
if((i__60838 < count__60837)){
var map__60844 = chunk__60836.cljs$core$IIndexed$_nth$arity$2(null,i__60838);
var map__60844__$1 = (((((!((map__60844 == null))))?(((((map__60844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60844):map__60844);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60844__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60868 = seq__60834;
var G__60869 = chunk__60836;
var G__60870 = count__60837;
var G__60871 = (i__60838 + (1));
seq__60834 = G__60868;
chunk__60836 = G__60869;
count__60837 = G__60870;
i__60838 = G__60871;
continue;
} else {
var G__60872 = seq__60834;
var G__60873 = chunk__60836;
var G__60874 = count__60837;
var G__60875 = (i__60838 + (1));
seq__60834 = G__60872;
chunk__60836 = G__60873;
count__60837 = G__60874;
i__60838 = G__60875;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60834);
if(temp__5735__auto__){
var seq__60834__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60834__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60834__$1);
var G__60876 = cljs.core.chunk_rest(seq__60834__$1);
var G__60877 = c__4609__auto__;
var G__60878 = cljs.core.count(c__4609__auto__);
var G__60879 = (0);
seq__60834 = G__60876;
chunk__60836 = G__60877;
count__60837 = G__60878;
i__60838 = G__60879;
continue;
} else {
var map__60846 = cljs.core.first(seq__60834__$1);
var map__60846__$1 = (((((!((map__60846 == null))))?(((((map__60846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60846):map__60846);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60846__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60880 = cljs.core.next(seq__60834__$1);
var G__60881 = null;
var G__60882 = (0);
var G__60883 = (0);
seq__60834 = G__60880;
chunk__60836 = G__60881;
count__60837 = G__60882;
i__60838 = G__60883;
continue;
} else {
var G__60884 = cljs.core.next(seq__60834__$1);
var G__60885 = null;
var G__60886 = (0);
var G__60887 = (0);
seq__60834 = G__60884;
chunk__60836 = G__60885;
count__60837 = G__60886;
i__60838 = G__60887;
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
