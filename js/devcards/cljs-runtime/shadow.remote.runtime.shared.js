goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__59718,p__59719){
var map__59720 = p__59718;
var map__59720__$1 = (((((!((map__59720 == null))))?(((((map__59720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59720):map__59720);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59720__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__59721 = p__59719;
var map__59721__$1 = (((((!((map__59721 == null))))?(((((map__59721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59721):map__59721);
var msg = map__59721__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59721__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__59724,p__59725){
var map__59726 = p__59724;
var map__59726__$1 = (((((!((map__59726 == null))))?(((((map__59726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59726):map__59726);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59726__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__59727 = p__59725;
var map__59727__$1 = (((((!((map__59727 == null))))?(((((map__59727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59727):map__59727);
var msg = map__59727__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59727__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__59730 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__59732 = null;
var count__59733 = (0);
var i__59734 = (0);
while(true){
if((i__59734 < count__59733)){
var map__59740 = chunk__59732.cljs$core$IIndexed$_nth$arity$2(null,i__59734);
var map__59740__$1 = (((((!((map__59740 == null))))?(((((map__59740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59740):map__59740);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59740__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__59787 = seq__59730;
var G__59788 = chunk__59732;
var G__59789 = count__59733;
var G__59790 = (i__59734 + (1));
seq__59730 = G__59787;
chunk__59732 = G__59788;
count__59733 = G__59789;
i__59734 = G__59790;
continue;
} else {
var G__59791 = seq__59730;
var G__59792 = chunk__59732;
var G__59793 = count__59733;
var G__59794 = (i__59734 + (1));
seq__59730 = G__59791;
chunk__59732 = G__59792;
count__59733 = G__59793;
i__59734 = G__59794;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59730);
if(temp__5735__auto__){
var seq__59730__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59730__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59730__$1);
var G__59795 = cljs.core.chunk_rest(seq__59730__$1);
var G__59796 = c__4556__auto__;
var G__59797 = cljs.core.count(c__4556__auto__);
var G__59798 = (0);
seq__59730 = G__59795;
chunk__59732 = G__59796;
count__59733 = G__59797;
i__59734 = G__59798;
continue;
} else {
var map__59742 = cljs.core.first(seq__59730__$1);
var map__59742__$1 = (((((!((map__59742 == null))))?(((((map__59742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59742):map__59742);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59742__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__59799 = cljs.core.next(seq__59730__$1);
var G__59800 = null;
var G__59801 = (0);
var G__59802 = (0);
seq__59730 = G__59799;
chunk__59732 = G__59800;
count__59733 = G__59801;
i__59734 = G__59802;
continue;
} else {
var G__59803 = cljs.core.next(seq__59730__$1);
var G__59804 = null;
var G__59805 = (0);
var G__59806 = (0);
seq__59730 = G__59803;
chunk__59732 = G__59804;
count__59733 = G__59805;
i__59734 = G__59806;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__59744,msg){
var map__59745 = p__59744;
var map__59745__$1 = (((((!((map__59745 == null))))?(((((map__59745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59745):map__59745);
var runtime = map__59745__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59745__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__59747,key,p__59748){
var map__59749 = p__59747;
var map__59749__$1 = (((((!((map__59749 == null))))?(((((map__59749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59749):map__59749);
var state = map__59749__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59749__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__59750 = p__59748;
var map__59750__$1 = (((((!((map__59750 == null))))?(((((map__59750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59750):map__59750);
var spec = map__59750__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59750__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__59753,key,spec){
var map__59754 = p__59753;
var map__59754__$1 = (((((!((map__59754 == null))))?(((((map__59754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59754):map__59754);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59754__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__59761){
var map__59762 = p__59761;
var map__59762__$1 = (((((!((map__59762 == null))))?(((((map__59762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59762):map__59762);
var runtime = map__59762__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59762__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__59756_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__59756_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__59757_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__59757_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__59758_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__59758_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__59759_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__59759_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__59760_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__59760_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__59764,key){
var map__59765 = p__59764;
var map__59765__$1 = (((((!((map__59765 == null))))?(((((map__59765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59765):map__59765);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59765__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__59767,p__59768){
var map__59769 = p__59767;
var map__59769__$1 = (((((!((map__59769 == null))))?(((((map__59769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59769):map__59769);
var runtime = map__59769__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59769__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__59770 = p__59768;
var map__59770__$1 = (((((!((map__59770 == null))))?(((((map__59770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59770):map__59770);
var msg = map__59770__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59770__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__59773 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__59775 = null;
var count__59776 = (0);
var i__59777 = (0);
while(true){
if((i__59777 < count__59776)){
var map__59783 = chunk__59775.cljs$core$IIndexed$_nth$arity$2(null,i__59777);
var map__59783__$1 = (((((!((map__59783 == null))))?(((((map__59783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59783):map__59783);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59783__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__59807 = seq__59773;
var G__59808 = chunk__59775;
var G__59809 = count__59776;
var G__59810 = (i__59777 + (1));
seq__59773 = G__59807;
chunk__59775 = G__59808;
count__59776 = G__59809;
i__59777 = G__59810;
continue;
} else {
var G__59811 = seq__59773;
var G__59812 = chunk__59775;
var G__59813 = count__59776;
var G__59814 = (i__59777 + (1));
seq__59773 = G__59811;
chunk__59775 = G__59812;
count__59776 = G__59813;
i__59777 = G__59814;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59773);
if(temp__5735__auto__){
var seq__59773__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59773__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59773__$1);
var G__59815 = cljs.core.chunk_rest(seq__59773__$1);
var G__59816 = c__4556__auto__;
var G__59817 = cljs.core.count(c__4556__auto__);
var G__59818 = (0);
seq__59773 = G__59815;
chunk__59775 = G__59816;
count__59776 = G__59817;
i__59777 = G__59818;
continue;
} else {
var map__59785 = cljs.core.first(seq__59773__$1);
var map__59785__$1 = (((((!((map__59785 == null))))?(((((map__59785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59785):map__59785);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59785__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__59819 = cljs.core.next(seq__59773__$1);
var G__59820 = null;
var G__59821 = (0);
var G__59822 = (0);
seq__59773 = G__59819;
chunk__59775 = G__59820;
count__59776 = G__59821;
i__59777 = G__59822;
continue;
} else {
var G__59823 = cljs.core.next(seq__59773__$1);
var G__59824 = null;
var G__59825 = (0);
var G__59826 = (0);
seq__59773 = G__59823;
chunk__59775 = G__59824;
count__59776 = G__59825;
i__59777 = G__59826;
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
