goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__67773,p__67774){
var map__67775 = p__67773;
var map__67775__$1 = (((((!((map__67775 == null))))?(((((map__67775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67775):map__67775);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67775__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__67776 = p__67774;
var map__67776__$1 = (((((!((map__67776 == null))))?(((((map__67776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67776):map__67776);
var msg = map__67776__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67776__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__67779,p__67780){
var map__67781 = p__67779;
var map__67781__$1 = (((((!((map__67781 == null))))?(((((map__67781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67781):map__67781);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67781__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__67782 = p__67780;
var map__67782__$1 = (((((!((map__67782 == null))))?(((((map__67782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67782):map__67782);
var msg = map__67782__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67782__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__67785 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__67787 = null;
var count__67788 = (0);
var i__67789 = (0);
while(true){
if((i__67789 < count__67788)){
var map__67795 = chunk__67787.cljs$core$IIndexed$_nth$arity$2(null,i__67789);
var map__67795__$1 = (((((!((map__67795 == null))))?(((((map__67795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67795):map__67795);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67795__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__67842 = seq__67785;
var G__67843 = chunk__67787;
var G__67844 = count__67788;
var G__67845 = (i__67789 + (1));
seq__67785 = G__67842;
chunk__67787 = G__67843;
count__67788 = G__67844;
i__67789 = G__67845;
continue;
} else {
var G__67846 = seq__67785;
var G__67847 = chunk__67787;
var G__67848 = count__67788;
var G__67849 = (i__67789 + (1));
seq__67785 = G__67846;
chunk__67787 = G__67847;
count__67788 = G__67848;
i__67789 = G__67849;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67785);
if(temp__5735__auto__){
var seq__67785__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67785__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__67785__$1);
var G__67850 = cljs.core.chunk_rest(seq__67785__$1);
var G__67851 = c__4609__auto__;
var G__67852 = cljs.core.count(c__4609__auto__);
var G__67853 = (0);
seq__67785 = G__67850;
chunk__67787 = G__67851;
count__67788 = G__67852;
i__67789 = G__67853;
continue;
} else {
var map__67797 = cljs.core.first(seq__67785__$1);
var map__67797__$1 = (((((!((map__67797 == null))))?(((((map__67797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67797):map__67797);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67797__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__67854 = cljs.core.next(seq__67785__$1);
var G__67855 = null;
var G__67856 = (0);
var G__67857 = (0);
seq__67785 = G__67854;
chunk__67787 = G__67855;
count__67788 = G__67856;
i__67789 = G__67857;
continue;
} else {
var G__67858 = cljs.core.next(seq__67785__$1);
var G__67859 = null;
var G__67860 = (0);
var G__67861 = (0);
seq__67785 = G__67858;
chunk__67787 = G__67859;
count__67788 = G__67860;
i__67789 = G__67861;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__67799,msg){
var map__67800 = p__67799;
var map__67800__$1 = (((((!((map__67800 == null))))?(((((map__67800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67800):map__67800);
var runtime = map__67800__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67800__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__67802,key,p__67803){
var map__67804 = p__67802;
var map__67804__$1 = (((((!((map__67804 == null))))?(((((map__67804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67804):map__67804);
var state = map__67804__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67804__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__67805 = p__67803;
var map__67805__$1 = (((((!((map__67805 == null))))?(((((map__67805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67805):map__67805);
var spec = map__67805__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67805__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__67808,key,spec){
var map__67809 = p__67808;
var map__67809__$1 = (((((!((map__67809 == null))))?(((((map__67809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67809):map__67809);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67809__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__67816){
var map__67817 = p__67816;
var map__67817__$1 = (((((!((map__67817 == null))))?(((((map__67817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67817):map__67817);
var runtime = map__67817__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67817__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__67811_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__67811_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__67812_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__67812_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__67813_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__67813_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__67814_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__67814_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__67815_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__67815_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__67819,key){
var map__67820 = p__67819;
var map__67820__$1 = (((((!((map__67820 == null))))?(((((map__67820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67820):map__67820);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67820__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__67822,p__67823){
var map__67824 = p__67822;
var map__67824__$1 = (((((!((map__67824 == null))))?(((((map__67824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67824):map__67824);
var runtime = map__67824__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67824__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__67825 = p__67823;
var map__67825__$1 = (((((!((map__67825 == null))))?(((((map__67825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67825):map__67825);
var msg = map__67825__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67825__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__67828 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__67830 = null;
var count__67831 = (0);
var i__67832 = (0);
while(true){
if((i__67832 < count__67831)){
var map__67838 = chunk__67830.cljs$core$IIndexed$_nth$arity$2(null,i__67832);
var map__67838__$1 = (((((!((map__67838 == null))))?(((((map__67838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67838):map__67838);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67838__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__67862 = seq__67828;
var G__67863 = chunk__67830;
var G__67864 = count__67831;
var G__67865 = (i__67832 + (1));
seq__67828 = G__67862;
chunk__67830 = G__67863;
count__67831 = G__67864;
i__67832 = G__67865;
continue;
} else {
var G__67866 = seq__67828;
var G__67867 = chunk__67830;
var G__67868 = count__67831;
var G__67869 = (i__67832 + (1));
seq__67828 = G__67866;
chunk__67830 = G__67867;
count__67831 = G__67868;
i__67832 = G__67869;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67828);
if(temp__5735__auto__){
var seq__67828__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67828__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__67828__$1);
var G__67870 = cljs.core.chunk_rest(seq__67828__$1);
var G__67871 = c__4609__auto__;
var G__67872 = cljs.core.count(c__4609__auto__);
var G__67873 = (0);
seq__67828 = G__67870;
chunk__67830 = G__67871;
count__67831 = G__67872;
i__67832 = G__67873;
continue;
} else {
var map__67840 = cljs.core.first(seq__67828__$1);
var map__67840__$1 = (((((!((map__67840 == null))))?(((((map__67840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67840):map__67840);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67840__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__67874 = cljs.core.next(seq__67828__$1);
var G__67875 = null;
var G__67876 = (0);
var G__67877 = (0);
seq__67828 = G__67874;
chunk__67830 = G__67875;
count__67831 = G__67876;
i__67832 = G__67877;
continue;
} else {
var G__67878 = cljs.core.next(seq__67828__$1);
var G__67879 = null;
var G__67880 = (0);
var G__67881 = (0);
seq__67828 = G__67878;
chunk__67830 = G__67879;
count__67831 = G__67880;
i__67832 = G__67881;
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
