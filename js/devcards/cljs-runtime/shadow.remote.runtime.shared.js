goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__60686,p__60687){
var map__60688 = p__60686;
var map__60688__$1 = (((((!((map__60688 == null))))?(((((map__60688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60688):map__60688);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60688__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60689 = p__60687;
var map__60689__$1 = (((((!((map__60689 == null))))?(((((map__60689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60689):map__60689);
var msg = map__60689__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60689__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__60692,p__60693){
var map__60694 = p__60692;
var map__60694__$1 = (((((!((map__60694 == null))))?(((((map__60694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60694):map__60694);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60694__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60695 = p__60693;
var map__60695__$1 = (((((!((map__60695 == null))))?(((((map__60695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60695):map__60695);
var msg = map__60695__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60695__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__60698 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60700 = null;
var count__60701 = (0);
var i__60702 = (0);
while(true){
if((i__60702 < count__60701)){
var map__60708 = chunk__60700.cljs$core$IIndexed$_nth$arity$2(null,i__60702);
var map__60708__$1 = (((((!((map__60708 == null))))?(((((map__60708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60708):map__60708);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60708__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60755 = seq__60698;
var G__60756 = chunk__60700;
var G__60757 = count__60701;
var G__60758 = (i__60702 + (1));
seq__60698 = G__60755;
chunk__60700 = G__60756;
count__60701 = G__60757;
i__60702 = G__60758;
continue;
} else {
var G__60759 = seq__60698;
var G__60760 = chunk__60700;
var G__60761 = count__60701;
var G__60762 = (i__60702 + (1));
seq__60698 = G__60759;
chunk__60700 = G__60760;
count__60701 = G__60761;
i__60702 = G__60762;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60698);
if(temp__5735__auto__){
var seq__60698__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60698__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60698__$1);
var G__60763 = cljs.core.chunk_rest(seq__60698__$1);
var G__60764 = c__4609__auto__;
var G__60765 = cljs.core.count(c__4609__auto__);
var G__60766 = (0);
seq__60698 = G__60763;
chunk__60700 = G__60764;
count__60701 = G__60765;
i__60702 = G__60766;
continue;
} else {
var map__60710 = cljs.core.first(seq__60698__$1);
var map__60710__$1 = (((((!((map__60710 == null))))?(((((map__60710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60710):map__60710);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60710__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60767 = cljs.core.next(seq__60698__$1);
var G__60768 = null;
var G__60769 = (0);
var G__60770 = (0);
seq__60698 = G__60767;
chunk__60700 = G__60768;
count__60701 = G__60769;
i__60702 = G__60770;
continue;
} else {
var G__60771 = cljs.core.next(seq__60698__$1);
var G__60772 = null;
var G__60773 = (0);
var G__60774 = (0);
seq__60698 = G__60771;
chunk__60700 = G__60772;
count__60701 = G__60773;
i__60702 = G__60774;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__60712,msg){
var map__60713 = p__60712;
var map__60713__$1 = (((((!((map__60713 == null))))?(((((map__60713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60713):map__60713);
var runtime = map__60713__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60713__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__60715,key,p__60716){
var map__60717 = p__60715;
var map__60717__$1 = (((((!((map__60717 == null))))?(((((map__60717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60717):map__60717);
var state = map__60717__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60717__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__60718 = p__60716;
var map__60718__$1 = (((((!((map__60718 == null))))?(((((map__60718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60718):map__60718);
var spec = map__60718__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60718__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__60721,key,spec){
var map__60722 = p__60721;
var map__60722__$1 = (((((!((map__60722 == null))))?(((((map__60722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60722):map__60722);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60722__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__60729){
var map__60730 = p__60729;
var map__60730__$1 = (((((!((map__60730 == null))))?(((((map__60730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60730):map__60730);
var runtime = map__60730__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60730__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__60724_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__60724_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__60725_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__60725_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__60726_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__60726_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__60727_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__60727_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__60728_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__60728_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__60732,key){
var map__60733 = p__60732;
var map__60733__$1 = (((((!((map__60733 == null))))?(((((map__60733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60733):map__60733);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60733__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__60735,p__60736){
var map__60737 = p__60735;
var map__60737__$1 = (((((!((map__60737 == null))))?(((((map__60737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60737):map__60737);
var runtime = map__60737__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60737__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60738 = p__60736;
var map__60738__$1 = (((((!((map__60738 == null))))?(((((map__60738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60738):map__60738);
var msg = map__60738__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60738__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__60741 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60743 = null;
var count__60744 = (0);
var i__60745 = (0);
while(true){
if((i__60745 < count__60744)){
var map__60751 = chunk__60743.cljs$core$IIndexed$_nth$arity$2(null,i__60745);
var map__60751__$1 = (((((!((map__60751 == null))))?(((((map__60751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60751):map__60751);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60751__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60775 = seq__60741;
var G__60776 = chunk__60743;
var G__60777 = count__60744;
var G__60778 = (i__60745 + (1));
seq__60741 = G__60775;
chunk__60743 = G__60776;
count__60744 = G__60777;
i__60745 = G__60778;
continue;
} else {
var G__60779 = seq__60741;
var G__60780 = chunk__60743;
var G__60781 = count__60744;
var G__60782 = (i__60745 + (1));
seq__60741 = G__60779;
chunk__60743 = G__60780;
count__60744 = G__60781;
i__60745 = G__60782;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60741);
if(temp__5735__auto__){
var seq__60741__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60741__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60741__$1);
var G__60783 = cljs.core.chunk_rest(seq__60741__$1);
var G__60784 = c__4609__auto__;
var G__60785 = cljs.core.count(c__4609__auto__);
var G__60786 = (0);
seq__60741 = G__60783;
chunk__60743 = G__60784;
count__60744 = G__60785;
i__60745 = G__60786;
continue;
} else {
var map__60753 = cljs.core.first(seq__60741__$1);
var map__60753__$1 = (((((!((map__60753 == null))))?(((((map__60753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60753):map__60753);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60753__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60787 = cljs.core.next(seq__60741__$1);
var G__60788 = null;
var G__60789 = (0);
var G__60790 = (0);
seq__60741 = G__60787;
chunk__60743 = G__60788;
count__60744 = G__60789;
i__60745 = G__60790;
continue;
} else {
var G__60791 = cljs.core.next(seq__60741__$1);
var G__60792 = null;
var G__60793 = (0);
var G__60794 = (0);
seq__60741 = G__60791;
chunk__60743 = G__60792;
count__60744 = G__60793;
i__60745 = G__60794;
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
