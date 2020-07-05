goog.provide('athens.events');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.util');
goog.require('datascript.core');
goog.require('datascript.transit');
goog.require('day8.re_frame.async_flow_fx');
goog.require('day8.re_frame.tracing');
goog.require('posh.reagent');
goog.require('re_frame.core');
athens.events.get_block = (function athens$events$get_block(id){
return cljs.core.deref((function (){var G__61439 = athens.db.dsdb;
var G__61440 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","order","block/order",-1429282437)], null)], null)], null);
var G__61441 = id;
return (posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(G__61439,G__61440,G__61441) : posh.reagent.pull.call(null,G__61439,G__61440,G__61441));
})());
});
athens.events.get_parent = (function athens$events$get_parent(id){
var eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword("block","_children","block/_children",1128070632).cljs$core$IFn$_invoke$arity$1((function (){var G__61442 = cljs.core.deref(athens.db.dsdb);
var G__61443 = id;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__61442,G__61443) : datascript.core.entity.call(null,G__61442,G__61443));
})())));
return athens.events.get_block(eid);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"init-rfdb","init-rfdb",-460710127),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.Symbol("db","rfdb","db/rfdb",-1730642210,null));

var opts__46521__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = athens.db.rfdb;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","rfdb","db/rfdb",-1730642210,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46522__auto__;
}catch (e61444){var e = e61444;
throw e;
}}):(function (_,___$1){
return athens.db.rfdb;
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-athena","toggle-athena",102452770),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("athena","open","athena/open",1253777725),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-devtool","toggle-devtool",-1568832653),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"devtool","devtool",1338288336),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-left-sidebar","toggle-left-sidebar",-468830841),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"left-sidebar","left-sidebar",-1413634357),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("right-sidebar","toggle","right-sidebar/toggle",-1089397191),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("right-sidebar","open","right-sidebar/open",83006133),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("right-sidebar","toggle-item","right-sidebar/toggle-item",-445072841),(function (db,p__61445){
var vec__61446 = p__61445;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61446,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61446,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("right-sidebar","items","right-sidebar/items",-881766733),item,new cljs.core.Keyword(null,"open","open",-1763596448)], null),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("athena","update-recent","athena/update-recent",-359210978),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__61449){
var vec__61450 = p__61449;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61450,(0),null);
var selected_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61450,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.Symbol(null,"selected-page","selected-page",899689913,null))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"selected-page","selected-page",899689913,null))));

var opts__46521__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = (((function (){var opts__46521__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = ((function (){var G__61455 = (function (){var opts__46521__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = selected_page;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"selected-page","selected-page",899689913,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46522__auto__;
})();
var fexpr__61454 = (function (){var opts__46521__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = cljs.core.set((function (){var opts__46521__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227).cljs$core$IFn$_invoke$arity$1((function (){var opts__46521__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__46522__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__46522__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46522__auto__;
})();
return (fexpr__61454.cljs$core$IFn$_invoke$arity$1 ? fexpr__61454.cljs$core$IFn$_invoke$arity$1(G__61455) : fexpr__61454.call(null,G__61455));
})() == null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.Symbol(null,"selected-page","selected-page",899689913,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46522__auto__;
})())?(function (){var opts__46521__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$4((function (){var opts__46521__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__46522__auto__;
})(),new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227),(function (){var opts__46521__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = cljs.core.conj;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__46522__auto__;
})(),(function (){var opts__46521__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = selected_page;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"selected-page","selected-page",899689913,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__46522__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"selected-page","selected-page",899689913,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46522__auto__;
})():null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.Symbol(null,"selected-page","selected-page",899689913,null))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"selected-page","selected-page",899689913,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46522__auto__;
}catch (e61453){var e = e61453;
throw e;
}}):(function (db,p__61456){
var vec__61457 = p__61456;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61457,(0),null);
var selected_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61457,(1),null);
if(((function (){var fexpr__61460 = cljs.core.set(new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227).cljs$core$IFn$_invoke$arity$1(db));
return (fexpr__61460.cljs$core$IFn$_invoke$arity$1 ? fexpr__61460.cljs$core$IFn$_invoke$arity$1(selected_page) : fexpr__61460.call(null,selected_page));
})() == null)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227),cljs.core.conj,selected_page);
} else {
return null;
}
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("right-sidebar","close-item","right-sidebar/close-item",-2021662216),(function (db,p__61461){
var vec__61462 = p__61461;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61462,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61462,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword("right-sidebar","items","right-sidebar/items",-881766733),cljs.core.dissoc,uid);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("right-sidebar","open-item","right-sidebar/open-item",-1234515614),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__61465,p__61466){
var map__61467 = p__61465;
var map__61467__$1 = (((((!((map__61467 == null))))?(((((map__61467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61467):map__61467);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61467__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__61468 = p__61466;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61468,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61468,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"block","block",-1989749559,null),cljs.core.list(new cljs.core.Symbol("d","pull","d/pull",779986566,null),cljs.core.list(new cljs.core.Symbol(null,"deref","deref",1494944732,null),new cljs.core.Symbol("db","dsdb","db/dsdb",-512073290,null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Keyword("block","string","block/string",-2066596447)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"uid","uid",192762127,null)], null)),new cljs.core.Symbol(null,"new-item","new-item",151288566,null),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"block","block",-1989749559,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),true,new cljs.core.Keyword(null,"index","index",-1531685915),(-1)], null)),new cljs.core.Symbol(null,"new-items","new-items",-482179310,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),cljs.core.list(new cljs.core.Keyword("right-sidebar","items","right-sidebar/items",-881766733),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"uid","uid",192762127,null),new cljs.core.Symbol(null,"new-item","new-item",151288566,null)),new cljs.core.Symbol(null,"inc-items","inc-items",415027690,null),cljs.core.list(new cljs.core.Symbol(null,"reduce-kv","reduce-kv",1856296400,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"k","k",-505765866,null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Symbol(null,"inc","inc",324505433,null)))),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Symbol(null,"new-items","new-items",-482179310,null)),new cljs.core.Symbol(null,"sorted-items","sorted-items",-766570090,null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.list(new cljs.core.Symbol(null,"sorted-map-by","sorted-map-by",218894812,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)], null),cljs.core.list(new cljs.core.Symbol(null,"compare","compare",1109853757,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"new-items","new-items",-482179310,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Keyword(null,"index","index",-1531685915)], null)),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"new-items","new-items",-482179310,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k2","k2",-1225133949,null),new cljs.core.Keyword(null,"index","index",-1531685915)], null)),new cljs.core.Symbol(null,"k1","k1",-1701777341,null)], null)))),new cljs.core.Symbol(null,"inc-items","inc-items",415027690,null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("right-sidebar","items","right-sidebar/items",-881766733),new cljs.core.Symbol(null,"sorted-items","sorted-items",-766570090,null)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Keyword("right-sidebar","open","right-sidebar/open",83006133),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("right-sidebar","toggle","right-sidebar/toggle",-1089397191)], null))], null)));

var opts__46521__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = (function (){var block = (function (){var opts__46521__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = (function (){var G__61473 = (function (){var opts__46521__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = cljs.core.deref((function (){var opts__46521__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = athens.db.dsdb;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","dsdb","db/dsdb",-512073290,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__46522__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol("db","dsdb","db/dsdb",-512073290,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46522__auto__;
})();
var G__61474 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Keyword("block","string","block/string",-2066596447)], null);
var G__61475 = (function (){var opts__46521__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),(function (){var opts__46521__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = uid;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"uid","uid",192762127,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__46522__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"uid","uid",192762127,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46522__auto__;
})();
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__61473,G__61474,G__61475) : datascript.core.pull.call(null,G__61473,G__61474,G__61475));
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("d","pull","d/pull",779986566,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol("db","dsdb","db/dsdb",-512073290,null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Keyword("block","string","block/string",-2066596447)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"uid","uid",192762127,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__46522__auto__;
})();
var new_item = (function (){var opts__46521__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var opts__46521__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = block;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"block","block",-1989749559,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46522__auto__;
})(),(function (){var opts__46521__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),true,new cljs.core.Keyword(null,"index","index",-1531685915),(-1)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),true,new cljs.core.Keyword(null,"index","index",-1531685915),(-1)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46522__auto__;
})()], 0));
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"block","block",-1989749559,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),true,new cljs.core.Keyword(null,"index","index",-1531685915),(-1)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__46522__auto__;
})();
var new_items = (function (){var opts__46521__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__46521__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = new cljs.core.Keyword("right-sidebar","items","right-sidebar/items",-881766733).cljs$core$IFn$_invoke$arity$1((function (){var opts__46521__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__46522__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("right-sidebar","items","right-sidebar/items",-881766733),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46522__auto__;
})(),(function (){var opts__46521__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = uid;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"uid","uid",192762127,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46522__auto__;
})(),(function (){var opts__46521__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = new_item;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-item","new-item",151288566,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46522__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),cljs.core.list(new cljs.core.Keyword("right-sidebar","items","right-sidebar/items",-881766733),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"uid","uid",192762127,null),new cljs.core.Symbol(null,"new-item","new-item",151288566,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__46522__auto__;
})();
var inc_items = (function (){var opts__46521__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = cljs.core.reduce_kv((function (){var opts__46521__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = (function (m,k,v){
var opts__46521__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__46521__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = m;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__46522__auto__;
})(),(function (){var opts__46521__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = k;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__46522__auto__;
})(),(function (){var opts__46521__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var opts__46521__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = v;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__46522__auto__;
})(),new cljs.core.Keyword(null,"index","index",-1531685915),(function (){var opts__46521__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = cljs.core.inc;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__46522__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Symbol(null,"inc","inc",324505433,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__46522__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"k","k",-505765866,null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Symbol(null,"inc","inc",324505433,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__46522__auto__;
});
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"k","k",-505765866,null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Symbol(null,"inc","inc",324505433,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46522__auto__;
})(),(function (){var opts__46521__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = cljs.core.PersistentArrayMap.EMPTY;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46522__auto__;
})(),(function (){var opts__46521__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = new_items;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-items","new-items",-482179310,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46522__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"reduce-kv","reduce-kv",1856296400,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"k","k",-505765866,null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Symbol(null,"inc","inc",324505433,null)))),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Symbol(null,"new-items","new-items",-482179310,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__46522__auto__;
})();
var sorted_items = (function (){var opts__46521__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var opts__46521__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = cljs.core.sorted_map_by((function (){var opts__46521__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = (function (k1,k2){
var opts__46521__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = cljs.core.compare((function (){var opts__46521__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var opts__46521__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__46521__auto____$7 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = new_items;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-items","new-items",-482179310,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__46522__auto__;
})(),(function (){var opts__46521__auto____$7 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var opts__46521__auto____$8 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = k1;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(9)], null));

return result__46522__auto__;
})(),new cljs.core.Keyword(null,"index","index",-1531685915)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Keyword(null,"index","index",-1531685915)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__46522__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"new-items","new-items",-482179310,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Keyword(null,"index","index",-1531685915)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__46522__auto__;
})(),(function (){var opts__46521__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = k2;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"k2","k2",-1225133949,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__46522__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"new-items","new-items",-482179310,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Keyword(null,"index","index",-1531685915)], null)),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__46522__auto__;
})(),(function (){var opts__46521__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var opts__46521__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__46521__auto____$7 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = new_items;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-items","new-items",-482179310,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__46522__auto__;
})(),(function (){var opts__46521__auto____$7 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var opts__46521__auto____$8 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = k2;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"k2","k2",-1225133949,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(9)], null));

return result__46522__auto__;
})(),new cljs.core.Keyword(null,"index","index",-1531685915)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k2","k2",-1225133949,null),new cljs.core.Keyword(null,"index","index",-1531685915)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__46522__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"new-items","new-items",-482179310,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k2","k2",-1225133949,null),new cljs.core.Keyword(null,"index","index",-1531685915)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__46522__auto__;
})(),(function (){var opts__46521__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = k1;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__46522__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"new-items","new-items",-482179310,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k2","k2",-1225133949,null),new cljs.core.Keyword(null,"index","index",-1531685915)], null)),new cljs.core.Symbol(null,"k1","k1",-1701777341,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__46522__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"compare","compare",1109853757,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"new-items","new-items",-482179310,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Keyword(null,"index","index",-1531685915)], null)),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"new-items","new-items",-482179310,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k2","k2",-1225133949,null),new cljs.core.Keyword(null,"index","index",-1531685915)], null)),new cljs.core.Symbol(null,"k1","k1",-1701777341,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__46522__auto__;
});
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)], null),cljs.core.list(new cljs.core.Symbol(null,"compare","compare",1109853757,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"new-items","new-items",-482179310,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Keyword(null,"index","index",-1531685915)], null)),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"new-items","new-items",-482179310,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k2","k2",-1225133949,null),new cljs.core.Keyword(null,"index","index",-1531685915)], null)),new cljs.core.Symbol(null,"k1","k1",-1701777341,null)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__46522__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"sorted-map-by","sorted-map-by",218894812,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)], null),cljs.core.list(new cljs.core.Symbol(null,"compare","compare",1109853757,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"new-items","new-items",-482179310,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Keyword(null,"index","index",-1531685915)], null)),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"new-items","new-items",-482179310,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k2","k2",-1225133949,null),new cljs.core.Keyword(null,"index","index",-1531685915)], null)),new cljs.core.Symbol(null,"k1","k1",-1701777341,null)], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46522__auto__;
})(),(function (){var opts__46521__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = inc_items;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"inc-items","inc-items",415027690,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46522__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.list(new cljs.core.Symbol(null,"sorted-map-by","sorted-map-by",218894812,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)], null),cljs.core.list(new cljs.core.Symbol(null,"compare","compare",1109853757,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"new-items","new-items",-482179310,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Keyword(null,"index","index",-1531685915)], null)),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"new-items","new-items",-482179310,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k2","k2",-1225133949,null),new cljs.core.Keyword(null,"index","index",-1531685915)], null)),new cljs.core.Symbol(null,"k1","k1",-1701777341,null)], null)))),new cljs.core.Symbol(null,"inc-items","inc-items",415027690,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__46522__auto__;
})();
var opts__46521__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("right-sidebar","items","right-sidebar/items",-881766733),sorted_items),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),((new cljs.core.Keyword("right-sidebar","open","right-sidebar/open",83006133).cljs$core$IFn$_invoke$arity$1(db) === false)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("right-sidebar","toggle","right-sidebar/toggle",-1089397191)], null):null)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("right-sidebar","items","right-sidebar/items",-881766733),new cljs.core.Symbol(null,"sorted-items","sorted-items",-766570090,null)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Keyword("right-sidebar","open","right-sidebar/open",83006133),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("right-sidebar","toggle","right-sidebar/toggle",-1089397191)], null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46522__auto__;
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"block","block",-1989749559,null),cljs.core.list(new cljs.core.Symbol("d","pull","d/pull",779986566,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol("db","dsdb","db/dsdb",-512073290,null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Keyword("block","string","block/string",-2066596447)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"uid","uid",192762127,null)], null)),new cljs.core.Symbol(null,"new-item","new-item",151288566,null),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"block","block",-1989749559,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),true,new cljs.core.Keyword(null,"index","index",-1531685915),(-1)], null)),new cljs.core.Symbol(null,"new-items","new-items",-482179310,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),cljs.core.list(new cljs.core.Keyword("right-sidebar","items","right-sidebar/items",-881766733),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"uid","uid",192762127,null),new cljs.core.Symbol(null,"new-item","new-item",151288566,null)),new cljs.core.Symbol(null,"inc-items","inc-items",415027690,null),cljs.core.list(new cljs.core.Symbol(null,"reduce-kv","reduce-kv",1856296400,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"k","k",-505765866,null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Symbol(null,"inc","inc",324505433,null)))),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Symbol(null,"new-items","new-items",-482179310,null)),new cljs.core.Symbol(null,"sorted-items","sorted-items",-766570090,null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.list(new cljs.core.Symbol(null,"sorted-map-by","sorted-map-by",218894812,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)], null),cljs.core.list(new cljs.core.Symbol(null,"compare","compare",1109853757,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"new-items","new-items",-482179310,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Keyword(null,"index","index",-1531685915)], null)),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"new-items","new-items",-482179310,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k2","k2",-1225133949,null),new cljs.core.Keyword(null,"index","index",-1531685915)], null)),new cljs.core.Symbol(null,"k1","k1",-1701777341,null)], null)))),new cljs.core.Symbol(null,"inc-items","inc-items",415027690,null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("right-sidebar","items","right-sidebar/items",-881766733),new cljs.core.Symbol(null,"sorted-items","sorted-items",-766570090,null)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Keyword("right-sidebar","open","right-sidebar/open",83006133),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("right-sidebar","toggle","right-sidebar/toggle",-1089397191)], null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46522__auto__;
}catch (e61472){var e = e61472;
throw e;
}}):(function (p__61476,p__61477){
var map__61478 = p__61476;
var map__61478__$1 = (((((!((map__61478 == null))))?(((((map__61478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61478):map__61478);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61478__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__61479 = p__61477;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61479,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61479,(1),null);
var block = (function (){var G__61483 = cljs.core.deref(athens.db.dsdb);
var G__61484 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Keyword("block","string","block/string",-2066596447)], null);
var G__61485 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null);
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__61483,G__61484,G__61485) : datascript.core.pull.call(null,G__61483,G__61484,G__61485));
})();
var new_item = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),true,new cljs.core.Keyword(null,"index","index",-1531685915),(-1)], null)], 0));
var new_items = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("right-sidebar","items","right-sidebar/items",-881766733).cljs$core$IFn$_invoke$arity$1(db),uid,new_item);
var inc_items = cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.update.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.inc));
}),cljs.core.PersistentArrayMap.EMPTY,new_items);
var sorted_items = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map_by((function (k1,k2){
return cljs.core.compare(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,new cljs.core.Keyword(null,"index","index",-1531685915)], null)),k2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k2,new cljs.core.Keyword(null,"index","index",-1531685915)], null)),k1], null));
})),inc_items);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("right-sidebar","items","right-sidebar/items",-881766733),sorted_items),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),((new cljs.core.Keyword("right-sidebar","open","right-sidebar/open",83006133).cljs$core$IFn$_invoke$arity$1(db) === false)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("right-sidebar","toggle","right-sidebar/toggle",-1089397191)], null):null)], null);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,error){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Symbol(null,"error","error",661562495,null)));

var opts__46521__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = cljs.core.assoc_in((function (){var opts__46521__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46522__auto__;
})(),(function (){var opts__46521__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46522__auto__;
})(),(function (){var opts__46521__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = error;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"error","error",661562495,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46522__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Symbol(null,"error","error",661562495,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46522__auto__;
}catch (e61486){var e = e61486;
throw e;
}}):(function (db,error){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),error);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-errors","clear-errors",-937972213),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.PersistentArrayMap.EMPTY));

var opts__46521__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = cljs.core.assoc_in((function (){var opts__46521__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46522__auto__;
})(),(function (){var opts__46521__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46522__auto__;
})(),(function (){var opts__46521__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = cljs.core.PersistentArrayMap.EMPTY;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46522__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46522__auto__;
}catch (e61487){var e = e61487;
throw e;
}}):(function (db){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.PersistentArrayMap.EMPTY);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-loading","set-loading",984627975),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),true));

var opts__46521__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = cljs.core.assoc_in((function (){var opts__46521__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46522__auto__;
})(),(function (){var opts__46521__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46522__auto__;
})(),true);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),true),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46522__auto__;
}catch (e61488){var e = e61488;
throw e;
}}):(function (db){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),true);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-loading","clear-loading",-1208278228),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false));

var opts__46521__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = cljs.core.assoc_in((function (){var opts__46521__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46522__auto__;
})(),(function (){var opts__46521__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46522__auto__;
})(),false);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46522__auto__;
}catch (e61489){var e = e61489;
throw e;
}}):(function (db){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__61490){
var vec__61491 = p__61490;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61491,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61491,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377),new cljs.core.Symbol(null,"uid","uid",192762127,null)));

var opts__46521__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__46521__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46522__auto__;
})(),new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377),(function (){var opts__46521__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = uid;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"uid","uid",192762127,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46522__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377),new cljs.core.Symbol(null,"uid","uid",192762127,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46522__auto__;
}catch (e61494){var e = e61494;
throw e;
}}):(function (db,p__61495){
var vec__61496 = p__61495;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61496,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61496,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377),uid);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drag-bullet","drag-bullet",441161411),(function (db,p__61499){
var vec__61500 = p__61499;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61500,(0),null);
var map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61500,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"drag-bullet","drag-bullet",441161411),map);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tooltip-uid","tooltip-uid",-1719650452),(function (db,p__61503){
var vec__61504 = p__61503;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61504,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61504,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"tooltip-uid","tooltip-uid",-1719650452),uid);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boot","boot",2007860585),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-dispatch","first-dispatch",128561923),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-local-storage-db","get-local-storage-db",381131920)], null),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-loading","clear-loading",-1208278228)], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945),"Boot Error"], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null)], null)], null)], null));

var opts__46521__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-dispatch","first-dispatch",128561923),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-local-storage-db","get-local-storage-db",381131920)], null),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-loading","clear-loading",-1208278228)], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945),"Boot Error"], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null)], null)], null)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-dispatch","first-dispatch",128561923),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-local-storage-db","get-local-storage-db",381131920)], null),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-loading","clear-loading",-1208278228)], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945),"Boot Error"], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null)], null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46522__auto__;
}catch (e61507){var e = e61507;
throw e;
}}):(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-dispatch","first-dispatch",128561923),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-local-storage-db","get-local-storage-db",381131920)], null),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-loading","clear-loading",-1208278228)], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945),"Boot Error"], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null)], null)], null)], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-datoms","get-datoms",1153619048),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),athens.db.athens_url,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577),(function (_,p__61508){
var vec__61509 = p__61508;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61509,(0),null);
var json_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61509,(1),null);
var datoms = athens.db.str_to_db_tx(json_str);
var new_db = datascript.core.db_with((datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(athens.db.schema) : datascript.core.empty_db.call(null,athens.db.schema)),datoms);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638),new_db,new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211),new_db,new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(athens.db.rfdb,new cljs.core.Keyword(null,"loading","loading",-737050189),false)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-dsdb","reset-dsdb",-1710342304),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638),(datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(athens.db.schema) : datascript.core.empty_db.call(null,athens.db.schema))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-local-storage-db","get-local-storage-db",381131920),(function (p__61512){
var map__61513 = p__61512;
var map__61513__$1 = (((((!((map__61513 == null))))?(((((map__61513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61513):map__61513);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61513__$1,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5733__auto__ = localStorage.getItem("datascript/DB");
if(cljs.core.truth_(temp__5733__auto__)){
var stored = temp__5733__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638),datascript.transit.read_transit_str(stored),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.db.rfdb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loading","loading",-737050189),false,new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(db)], null)], 0))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-datoms","get-datoms",1153619048)], null),new cljs.core.Keyword(null,"db","db",993250759),athens.db.rfdb], null);
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("daily-notes","reset","daily-notes/reset",1615543639),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"daily-notes","daily-notes",302751021),cljs.core.PersistentVector.EMPTY);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"transact-event","transact-event",1188240621),(function (_,p__61515){
var vec__61516 = p__61515;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61516,(0),null);
var datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61516,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),datoms], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"undo","undo",-1818036302),(function (_,___$1){
var temp__5735__auto__ = athens.db.find_prev(cljs.core.deref(athens.db.history),(function (p1__61519_SHARP_){
return (cljs.core.deref(athens.db.dsdb) === p1__61519_SHARP_);
}));
if(cljs.core.truth_(temp__5735__auto__)){
var prev = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638),prev], null);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"redo","redo",501190664),(function (_,___$1){
var temp__5735__auto__ = athens.db.find_next(cljs.core.deref(athens.db.history),(function (p1__61520_SHARP_){
return (cljs.core.deref(athens.db.dsdb) === p1__61520_SHARP_);
}));
if(cljs.core.truth_(temp__5735__auto__)){
var next = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638),next], null);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("page","create","page/create",-1304816391),(function (_,p__61521){
var vec__61522 = p__61521;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61522,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61522,(1),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61522,(2),null);
var now = athens.util.now_ts();
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("node","title","node/title",628940777),title,new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid,new cljs.core.Keyword("create","time","create/time",-1563077754),now,new cljs.core.Keyword("edit","time","edit/time",1384867476),now], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"next-daily-note","next-daily-note",557965411),(function (p__61525,p__61526){
var map__61527 = p__61525;
var map__61527__$1 = (((((!((map__61527 == null))))?(((((map__61527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61527):map__61527);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61527__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__61528 = p__61526;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61528,(0),null);
var map__61531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61528,(1),null);
var map__61531__$1 = (((((!((map__61531 == null))))?(((((map__61531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61531):map__61531);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61531__$1,new cljs.core.Keyword(null,"uid","uid",-1447769400));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61531__$1,new cljs.core.Keyword(null,"title","title",636505583));
var new_db = cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"daily-notes","daily-notes",302751021),cljs.core.conj,uid);
var now = athens.util.now_ts();
if(cljs.core.truth_(athens.db.e_by_av(new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new_db], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new_db,new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("node","title","node/title",628940777),title,new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid,new cljs.core.Keyword("create","time","create/time",-1563077754),now,new cljs.core.Keyword("edit","time","edit/time",1384867476),now], null)], null)], null);
}
}));
athens.events.rules = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"after","after",-2059438855,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"inc-after","inc-after",1008662500,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null)),cljs.core.list(new cljs.core.Symbol(null,"after","after",-2059438855,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"dec-after","dec-after",-2019085122,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null)),cljs.core.list(new cljs.core.Symbol(null,"after","after",-2059438855,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null)], null)], null)], null);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"backspace","backspace",-696007848),(function (_,p__61534){
var vec__61535 = p__61534;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61535,(0),null);
var _uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61535,(1),null);
return null;
}));
athens.events.split_block = (function athens$events$split_block(uid,val,sel_start){
var parent = athens.events.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var block = athens.events.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var head = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(val,(0),sel_start);
var tail = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(val,sel_start);
var new_uid = athens.util.gen_block_uid();
var new_block = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("block","order","block/order",-1429282437),(new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block) + (1)),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new_uid,new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","string","block/string",-2066596447),tail], null);
var reindex = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__61538){
var vec__61539 = p__61538;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61539,(0),null);
var order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61539,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("block","order","block/order",-1429282437),order], null);
}),(function (){var G__61542 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"inc-after","inc-after",1008662500,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null))], null);
var G__61543 = cljs.core.deref(athens.db.dsdb);
var G__61544 = athens.events.rules;
var G__61545 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent);
var G__61546 = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__61542,G__61543,G__61544,G__61545,G__61546) : datascript.core.q.call(null,G__61542,G__61543,G__61544,G__61545,G__61546));
})()));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","string","block/string",-2066596447),head], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex], null)], null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377),new_uid], null)], null);
});
athens.events.bump_up = (function athens$events$bump_up(uid,val,sel_start){
var parent = athens.events.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var block = athens.events.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var tail = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(val,sel_start);
var new_uid = athens.util.gen_block_uid();
var new_block = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new_uid,new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","string","block/string",-2066596447),tail], null);
var reindex = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__61547){
var vec__61548 = p__61547;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61548,(0),null);
var order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61548,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("block","order","block/order",-1429282437),order], null);
}),(function (){var G__61551 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"inc-after","inc-after",1008662500,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null))], null);
var G__61552 = cljs.core.deref(athens.db.dsdb);
var G__61553 = athens.events.rules;
var G__61554 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent);
var G__61555 = (new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block) + (1));
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__61551,G__61552,G__61553,G__61554,G__61555) : datascript.core.q.call(null,G__61551,G__61552,G__61553,G__61554,G__61555));
})()));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","string","block/string",-2066596447),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex], null)], null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377),new_uid], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"enter","enter",1792452624),(function (_,p__61556){
var vec__61557 = p__61556;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61557,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61557,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61557,(2),null);
var sel_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61557,(3),null);
if((!((sel_start === (0))))){
return athens.events.split_block(uid,val,sel_start);
} else {
if(cljs.core.empty_QMARK_(val)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unindent","unindent",-1291301718),uid], null)], null);
} else {
if(cljs.core.truth_((((sel_start === (0)))?val:false))){
return athens.events.bump_up(uid,val,sel_start);
} else {
return null;
}
}
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indent","indent",-148200125),(function (_,p__61561){
var vec__61562 = p__61561;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61562,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61562,(1),null);
var block = athens.events.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var parent = athens.events.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var older_sib = athens.events.get_block(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__61560_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block) - (1)),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(p1__61560_SHARP_));
}),new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(parent)))));
var new_block = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","order","block/order",-1429282437),cljs.core.count(new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(older_sib))], null);
var reindex_blocks = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__61565){
var vec__61566 = p__61565;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61566,(0),null);
var order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61566,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("block","order","block/order",-1429282437),order], null);
}),(function (){var G__61569 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"dec-after","dec-after",-2019085122,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null))], null);
var G__61570 = cljs.core.deref(athens.db.dsdb);
var G__61571 = athens.events.rules;
var G__61572 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent);
var G__61573 = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__61569,G__61570,G__61571,G__61572,G__61573) : datascript.core.q.call(null,G__61569,G__61570,G__61571,G__61572,G__61573));
})());
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(older_sib),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex_blocks], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unindent","unindent",-1291301718),(function (_,p__61574){
var vec__61575 = p__61574;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61575,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61575,(1),null);
var parent = athens.events.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var grandpa = athens.events.get_parent(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent));
var new_block = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid,new cljs.core.Keyword("block","order","block/order",-1429282437),(new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(parent) + (1))], null);
var reindex_grandpa = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__61578){
var vec__61579 = p__61578;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61579,(0),null);
var order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61579,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("block","order","block/order",-1429282437),order], null);
}),(function (){var G__61582 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?grandpa","?grandpa",-1807655486,null),new cljs.core.Symbol(null,"?parent-order","?parent-order",318887288,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"inc-after","inc-after",1008662500,null),new cljs.core.Symbol(null,"?grandpa","?grandpa",-1807655486,null),new cljs.core.Symbol(null,"?parent-order","?parent-order",318887288,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null))], null);
var G__61583 = cljs.core.deref(athens.db.dsdb);
var G__61584 = athens.events.rules;
var G__61585 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(grandpa);
var G__61586 = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(parent);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__61582,G__61583,G__61584,G__61585,G__61586) : datascript.core.q.call(null,G__61582,G__61583,G__61584,G__61585,G__61586));
})()));
if(cljs.core.truth_((function (){var and__4174__auto__ = parent;
if(cljs.core.truth_(and__4174__auto__)){
return grandpa;
} else {
return and__4174__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(grandpa),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex_grandpa], null)], null)], null);
} else {
return null;
}
}));
athens.events.target_child = (function athens$events$target_child(source,source_parent,target){
var new_block = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(source),new cljs.core.Keyword("block","order","block/order",-1429282437),(0)], null);
var new_parent_children = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__61587){
var vec__61588 = p__61587;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61588,(0),null);
var order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61588,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("block","order","block/order",-1429282437),order], null);
}),(function (){var G__61591 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"?source-order","?source-order",-2138536659,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"dec-after","dec-after",-2019085122,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"?source-order","?source-order",-2138536659,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null))], null);
var G__61592 = cljs.core.deref(athens.db.dsdb);
var G__61593 = athens.events.rules;
var G__61594 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_parent);
var G__61595 = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(source);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__61591,G__61592,G__61593,G__61594,G__61595) : datascript.core.q.call(null,G__61591,G__61592,G__61593,G__61594,G__61595));
})());
var new_target_children = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__61596){
var vec__61597 = p__61596;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61597,(0),null);
var order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61597,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("block","order","block/order",-1429282437),order], null);
}),(function (){var G__61600 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"inc-after","inc-after",1008662500,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null))], null);
var G__61601 = cljs.core.deref(athens.db.dsdb);
var G__61602 = athens.events.rules;
var G__61603 = new cljs.core.Keyword(null,"dbid","dbid",-196647356).cljs$core$IFn$_invoke$arity$1(target);
var G__61604 = (0);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__61600,G__61601,G__61602,G__61603,G__61604) : datascript.core.q.call(null,G__61600,G__61601,G__61602,G__61603,G__61604));
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(source)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new_parent_children], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.Keyword("block","children","block/children",-1040716209),new_target_children], null)], null);
});
/**
 * http://blog.jenkster.com/2013/11/clojure-less-than-greater-than-tip.html
 */
athens.events.between = (function athens$events$between(s,t,x){
if((s < t)){
return (((s < x)) && ((x < t)));
} else {
return (((t < x)) && ((x < s)));
}
});
athens.events.target_sibling_same_parent = (function athens$events$target_sibling_same_parent(source,target,parent){
var t_order = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(target);
var s_order = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(source);
var new_block = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source),new cljs.core.Keyword("block","order","block/order",-1429282437),(t_order + (1))], null);
var inc_or_dec = (((s_order > t_order))?cljs.core.inc:cljs.core.dec);
var reindex = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__61605){
var vec__61606 = p__61605;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61606,(0),null);
var order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61606,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("block","order","block/order",-1429282437),order], null);
}),(function (){var G__61609 = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"?s-order","?s-order",-1665716070,null),new cljs.core.Symbol(null,"?t-order","?t-order",-1133173893,null),new cljs.core.Symbol(null,"?between","?between",-299074232,null),new cljs.core.Symbol(null,"?inc-or-dec","?inc-or-dec",515984879,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Symbol(null,"?order","?order",2076500391,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?between","?between",-299074232,null),new cljs.core.Symbol(null,"?s-order","?s-order",-1665716070,null),new cljs.core.Symbol(null,"?t-order","?t-order",-1133173893,null),new cljs.core.Symbol(null,"?order","?order",2076500391,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?inc-or-dec","?inc-or-dec",515984879,null),new cljs.core.Symbol(null,"?order","?order",2076500391,null)),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null)], null)], null);
var G__61610 = cljs.core.deref(athens.db.dsdb);
var G__61611 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent);
var G__61612 = s_order;
var G__61613 = t_order;
var G__61614 = athens.events.between;
var G__61615 = inc_or_dec;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$7 ? datascript.core.q.cljs$core$IFn$_invoke$arity$7(G__61609,G__61610,G__61611,G__61612,G__61613,G__61614,G__61615) : datascript.core.q.call(null,G__61609,G__61610,G__61611,G__61612,G__61613,G__61614,G__61615));
})()));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex], null)], null);
});
athens.events.target_sibling_diff_parent = (function athens$events$target_sibling_diff_parent(source,target,source_parent,target_parent){
var new_block = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source),new cljs.core.Keyword("block","order","block/order",-1429282437),(new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(target) + (1))], null);
var source_parent_children = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__61616){
var vec__61617 = p__61616;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61617,(0),null);
var order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61617,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("block","order","block/order",-1429282437),order], null);
}),(function (){var G__61620 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"?source-order","?source-order",-2138536659,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"dec-after","dec-after",-2019085122,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"?source-order","?source-order",-2138536659,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null))], null);
var G__61621 = cljs.core.deref(athens.db.dsdb);
var G__61622 = athens.events.rules;
var G__61623 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_parent);
var G__61624 = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(source);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__61620,G__61621,G__61622,G__61623,G__61624) : datascript.core.q.call(null,G__61620,G__61621,G__61622,G__61623,G__61624));
})());
var target_parent_children = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__61625){
var vec__61626 = p__61625;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61626,(0),null);
var order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61626,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("block","order","block/order",-1429282437),order], null);
}),(function (){var G__61629 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"?target-order","?target-order",-692071803,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"inc-after","inc-after",1008662500,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"?target-order","?target-order",-692071803,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null))], null);
var G__61630 = cljs.core.deref(athens.db.dsdb);
var G__61631 = athens.events.rules;
var G__61632 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_parent);
var G__61633 = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(target);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__61629,G__61630,G__61631,G__61632,G__61633) : datascript.core.q.call(null,G__61629,G__61630,G__61631,G__61632,G__61633));
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_parent),new cljs.core.Keyword("block","children","block/children",-1040716209),source_parent_children], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_parent),new cljs.core.Keyword("block","children","block/children",-1040716209),target_parent_children], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drop-bullet","drop-bullet",1177869489),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__61634){
var vec__61635 = p__61634;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61635,(0),null);
var source_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61635,(1),null);
var target_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61635,(2),null);
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61635,(3),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),cljs.core.list(new cljs.core.Symbol(null,"get-block","get-block",-1878521400,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"source-uid","source-uid",-1936151351,null)], null)),new cljs.core.Symbol(null,"target","target",1893533248,null),cljs.core.list(new cljs.core.Symbol(null,"get-block","get-block",-1878521400,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"target-uid","target-uid",361434315,null)], null)),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),cljs.core.list(new cljs.core.Symbol(null,"get-parent","get-parent",282544271,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"source-uid","source-uid",-1936151351,null)], null)),new cljs.core.Symbol(null,"target-parent","target-parent",1350954620,null),cljs.core.list(new cljs.core.Symbol(null,"get-parent","get-parent",282544271,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"target-uid","target-uid",361434315,null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"cond","cond",1606708055,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Keyword(null,"child","child",623967545)),cljs.core.list(new cljs.core.Symbol(null,"target-child","target-child",-2004457132,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target","target",1893533248,null)),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target-parent","target-parent",1350954620,null)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Symbol(null,"source","source",1206599988,null)),cljs.core.list(new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Symbol(null,"target","target",1893533248,null))))),null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target-parent","target-parent",1350954620,null)),cljs.core.list(new cljs.core.Symbol(null,"target-sibling-same-parent","target-sibling-same-parent",326992955,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null)),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target-parent","target-parent",1350954620,null)),cljs.core.list(new cljs.core.Symbol(null,"target-sibling-diff-parent","target-sibling-diff-parent",-1933683421,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target-parent","target-parent",1350954620,null)))], null)));

var opts__46521__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = (function (){var source = (function (){var opts__46521__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = athens.events.get_block((function (){var opts__46521__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),(function (){var opts__46521__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = source_uid;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"source-uid","source-uid",-1936151351,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__46522__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"source-uid","source-uid",-1936151351,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46522__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-block","get-block",-1878521400,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"source-uid","source-uid",-1936151351,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__46522__auto__;
})();
var target = (function (){var opts__46521__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = athens.events.get_block((function (){var opts__46521__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),(function (){var opts__46521__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = target_uid;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"target-uid","target-uid",361434315,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__46522__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"target-uid","target-uid",361434315,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46522__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-block","get-block",-1878521400,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"target-uid","target-uid",361434315,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__46522__auto__;
})();
var source_parent = (function (){var opts__46521__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = athens.events.get_parent((function (){var opts__46521__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),(function (){var opts__46521__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = source_uid;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"source-uid","source-uid",-1936151351,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__46522__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"source-uid","source-uid",-1936151351,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46522__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-parent","get-parent",282544271,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"source-uid","source-uid",-1936151351,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__46522__auto__;
})();
var target_parent = (function (){var opts__46521__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = athens.events.get_parent((function (){var opts__46521__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),(function (){var opts__46521__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = target_uid;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"target-uid","target-uid",361434315,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__46522__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"target-uid","target-uid",361434315,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46522__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-parent","get-parent",282544271,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"target-uid","target-uid",361434315,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__46522__auto__;
})();
var opts__46521__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46522__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"child","child",623967545)))?athens.events.target_child(source,source_parent,target):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(source_parent,target_parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(source) - new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(target))))))?null:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(source_parent,target_parent))?athens.events.target_sibling_same_parent(source,target,source_parent):((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(source_parent,target_parent))?athens.events.target_sibling_diff_parent(source,target,source_parent,target_parent):null))))], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"cond","cond",1606708055,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Keyword(null,"child","child",623967545)),cljs.core.list(new cljs.core.Symbol(null,"target-child","target-child",-2004457132,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target","target",1893533248,null)),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target-parent","target-parent",1350954620,null)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Symbol(null,"source","source",1206599988,null)),cljs.core.list(new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Symbol(null,"target","target",1893533248,null))))),null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target-parent","target-parent",1350954620,null)),cljs.core.list(new cljs.core.Symbol(null,"target-sibling-same-parent","target-sibling-same-parent",326992955,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null)),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target-parent","target-parent",1350954620,null)),cljs.core.list(new cljs.core.Symbol(null,"target-sibling-diff-parent","target-sibling-diff-parent",-1933683421,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target-parent","target-parent",1350954620,null)))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46522__auto__;
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46522__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),cljs.core.list(new cljs.core.Symbol(null,"get-block","get-block",-1878521400,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"source-uid","source-uid",-1936151351,null)], null)),new cljs.core.Symbol(null,"target","target",1893533248,null),cljs.core.list(new cljs.core.Symbol(null,"get-block","get-block",-1878521400,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"target-uid","target-uid",361434315,null)], null)),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),cljs.core.list(new cljs.core.Symbol(null,"get-parent","get-parent",282544271,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"source-uid","source-uid",-1936151351,null)], null)),new cljs.core.Symbol(null,"target-parent","target-parent",1350954620,null),cljs.core.list(new cljs.core.Symbol(null,"get-parent","get-parent",282544271,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"target-uid","target-uid",361434315,null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"cond","cond",1606708055,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Keyword(null,"child","child",623967545)),cljs.core.list(new cljs.core.Symbol(null,"target-child","target-child",-2004457132,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target","target",1893533248,null)),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target-parent","target-parent",1350954620,null)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Symbol(null,"source","source",1206599988,null)),cljs.core.list(new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Symbol(null,"target","target",1893533248,null))))),null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target-parent","target-parent",1350954620,null)),cljs.core.list(new cljs.core.Symbol(null,"target-sibling-same-parent","target-sibling-same-parent",326992955,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null)),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target-parent","target-parent",1350954620,null)),cljs.core.list(new cljs.core.Symbol(null,"target-sibling-diff-parent","target-sibling-diff-parent",-1933683421,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target-parent","target-parent",1350954620,null)))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46522__auto__;
}catch (e61638){var e = e61638;
throw e;
}}):(function (_,p__61639){
var vec__61640 = p__61639;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61640,(0),null);
var source_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61640,(1),null);
var target_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61640,(2),null);
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61640,(3),null);
var source = athens.events.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),source_uid], null));
var target = athens.events.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),target_uid], null));
var source_parent = athens.events.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),source_uid], null));
var target_parent = athens.events.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),target_uid], null));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"child","child",623967545)))?athens.events.target_child(source,source_parent,target):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(source_parent,target_parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(source) - new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(target))))))?null:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(source_parent,target_parent))?athens.events.target_sibling_same_parent(source,target,source_parent):((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(source_parent,target_parent))?athens.events.target_sibling_diff_parent(source,target,source_parent,target_parent):null))))], null);
})));

//# sourceMappingURL=athens.events.js.map
