goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5735__auto__ = (function (){var fexpr__51827 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__51827.cljs$core$IFn$_invoke$arity$1 ? fexpr__51827.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__51827.call(null,channel));
})();
if(cljs.core.truth_(temp__5735__auto__)){
var req = temp__5735__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51828){
var vec__51829 = p__51828;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51829,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51829,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__51832 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__51832)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__51832)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__51832)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__51832)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__51832)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__51832)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51832)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__51833){
var map__51834 = p__51833;
var map__51834__$1 = (((((!((map__51834 == null))))?(((((map__51834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51834):map__51834);
var request = map__51834__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51834__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51834__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51834__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__51836 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__51836,default_headers);

cljs_http.core.apply_response_type_BANG_(G__51836,response_type);

G__51836.setTimeoutInterval(timeout);

G__51836.setWithCredentials(send_credentials);

return G__51836;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__51837){
var map__51838 = p__51837;
var map__51838__$1 = (((((!((map__51838 == null))))?(((((map__51838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51838):map__51838);
var request = map__51838__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51838__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51838__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51838__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51838__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51838__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51838__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__4185__auto__ = request_method;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__51840 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__51840) : cljs_http.core.error_kw.call(null,G__51840));
})(),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

if(cljs.core.truth_(progress)){
var listener_51891 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});
var G__51841_51892 = xhr;
G__51841_51892.setProgressEventsEnabled(true);

G__51841_51892.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_51891,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__51841_51892.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_51891,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__38856__auto___51893 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38857__auto__ = (function (){var switch__38788__auto__ = (function (state_51852){
var state_val_51853 = (state_51852[(1)]);
if((state_val_51853 === (1))){
var state_51852__$1 = state_51852;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51852__$1,(2),cancel);
} else {
if((state_val_51853 === (2))){
var inst_51843 = (state_51852[(2)]);
var inst_51844 = xhr.isComplete();
var inst_51845 = cljs.core.not(inst_51844);
var state_51852__$1 = (function (){var statearr_51854 = state_51852;
(statearr_51854[(7)] = inst_51843);

return statearr_51854;
})();
if(inst_51845){
var statearr_51855_51894 = state_51852__$1;
(statearr_51855_51894[(1)] = (3));

} else {
var statearr_51856_51895 = state_51852__$1;
(statearr_51856_51895[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51853 === (3))){
var inst_51847 = xhr.abort();
var state_51852__$1 = state_51852;
var statearr_51857_51896 = state_51852__$1;
(statearr_51857_51896[(2)] = inst_51847);

(statearr_51857_51896[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51853 === (4))){
var state_51852__$1 = state_51852;
var statearr_51858_51897 = state_51852__$1;
(statearr_51858_51897[(2)] = null);

(statearr_51858_51897[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51853 === (5))){
var inst_51850 = (state_51852[(2)]);
var state_51852__$1 = state_51852;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51852__$1,inst_51850);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__38789__auto__ = null;
var cljs_http$core$xhr_$_state_machine__38789__auto____0 = (function (){
var statearr_51859 = [null,null,null,null,null,null,null,null];
(statearr_51859[(0)] = cljs_http$core$xhr_$_state_machine__38789__auto__);

(statearr_51859[(1)] = (1));

return statearr_51859;
});
var cljs_http$core$xhr_$_state_machine__38789__auto____1 = (function (state_51852){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_51852);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e51860){if((e51860 instanceof Object)){
var ex__38792__auto__ = e51860;
var statearr_51861_51900 = state_51852;
(statearr_51861_51900[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51860;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51901 = state_51852;
state_51852 = G__51901;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__38789__auto__ = function(state_51852){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__38789__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__38789__auto____1.call(this,state_51852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__38789__auto____0;
cljs_http$core$xhr_$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__38789__auto____1;
return cljs_http$core$xhr_$_state_machine__38789__auto__;
})()
})();
var state__38858__auto__ = (function (){var statearr_51862 = (f__38857__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38857__auto__.cljs$core$IFn$_invoke$arity$0() : f__38857__auto__.call(null));
(statearr_51862[(6)] = c__38856__auto___51893);

return statearr_51862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38858__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__51863){
var map__51864 = p__51863;
var map__51864__$1 = (((((!((map__51864 == null))))?(((((map__51864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51864):map__51864);
var request = map__51864__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51864__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51864__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51864__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51864__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_51904 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_51904], null));

if(cljs.core.truth_(cancel)){
var c__38856__auto___51909 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38857__auto__ = (function (){var switch__38788__auto__ = (function (state_51870){
var state_val_51871 = (state_51870[(1)]);
if((state_val_51871 === (1))){
var state_51870__$1 = state_51870;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51870__$1,(2),cancel);
} else {
if((state_val_51871 === (2))){
var inst_51867 = (state_51870[(2)]);
var inst_51868 = jsonp.cancel(req_51904);
var state_51870__$1 = (function (){var statearr_51872 = state_51870;
(statearr_51872[(7)] = inst_51867);

return statearr_51872;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51870__$1,inst_51868);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__38789__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__38789__auto____0 = (function (){
var statearr_51873 = [null,null,null,null,null,null,null,null];
(statearr_51873[(0)] = cljs_http$core$jsonp_$_state_machine__38789__auto__);

(statearr_51873[(1)] = (1));

return statearr_51873;
});
var cljs_http$core$jsonp_$_state_machine__38789__auto____1 = (function (state_51870){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_51870);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e51874){if((e51874 instanceof Object)){
var ex__38792__auto__ = e51874;
var statearr_51875_51913 = state_51870;
(statearr_51875_51913[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51874;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51914 = state_51870;
state_51870 = G__51914;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__38789__auto__ = function(state_51870){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__38789__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__38789__auto____1.call(this,state_51870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__38789__auto____0;
cljs_http$core$jsonp_$_state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__38789__auto____1;
return cljs_http$core$jsonp_$_state_machine__38789__auto__;
})()
})();
var state__38858__auto__ = (function (){var statearr_51876 = (f__38857__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38857__auto__.cljs$core$IFn$_invoke$arity$0() : f__38857__auto__.call(null));
(statearr_51876[(6)] = c__38856__auto___51909);

return statearr_51876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38858__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__51877){
var map__51878 = p__51877;
var map__51878__$1 = (((((!((map__51878 == null))))?(((((map__51878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51878):map__51878);
var request = map__51878__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51878__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
