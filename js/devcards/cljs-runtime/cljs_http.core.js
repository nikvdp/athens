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
var temp__5735__auto__ = (function (){var fexpr__39363 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__39363.cljs$core$IFn$_invoke$arity$1 ? fexpr__39363.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__39363.call(null,channel));
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
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__39364){
var vec__39365 = p__39364;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39365,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39365,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__39368 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__39368)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__39368)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__39368)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__39368)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__39368)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__39368)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39368)].join('')));

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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__39369){
var map__39370 = p__39369;
var map__39370__$1 = (((((!((map__39370 == null))))?(((((map__39370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39370):map__39370);
var request = map__39370__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39370__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39370__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39370__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__39372 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__39372,default_headers);

cljs_http.core.apply_response_type_BANG_(G__39372,response_type);

G__39372.setTimeoutInterval(timeout);

G__39372.setWithCredentials(send_credentials);

return G__39372;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__39373){
var map__39374 = p__39373;
var map__39374__$1 = (((((!((map__39374 == null))))?(((((map__39374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39374):map__39374);
var request = map__39374__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39374__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39374__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39374__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39374__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39374__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39374__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
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
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__39376 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__39376) : cljs_http.core.error_kw.call(null,G__39376));
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
var listener_39421 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});
var G__39377_39422 = xhr;
G__39377_39422.setProgressEventsEnabled(true);

G__39377_39422.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_39421,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__39377_39422.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_39421,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__37022__auto___39424 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37023__auto__ = (function (){var switch__36954__auto__ = (function (state_39388){
var state_val_39389 = (state_39388[(1)]);
if((state_val_39389 === (1))){
var state_39388__$1 = state_39388;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39388__$1,(2),cancel);
} else {
if((state_val_39389 === (2))){
var inst_39379 = (state_39388[(2)]);
var inst_39380 = xhr.isComplete();
var inst_39381 = cljs.core.not(inst_39380);
var state_39388__$1 = (function (){var statearr_39390 = state_39388;
(statearr_39390[(7)] = inst_39379);

return statearr_39390;
})();
if(inst_39381){
var statearr_39391_39425 = state_39388__$1;
(statearr_39391_39425[(1)] = (3));

} else {
var statearr_39392_39426 = state_39388__$1;
(statearr_39392_39426[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39389 === (3))){
var inst_39383 = xhr.abort();
var state_39388__$1 = state_39388;
var statearr_39393_39428 = state_39388__$1;
(statearr_39393_39428[(2)] = inst_39383);

(statearr_39393_39428[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39389 === (4))){
var state_39388__$1 = state_39388;
var statearr_39394_39432 = state_39388__$1;
(statearr_39394_39432[(2)] = null);

(statearr_39394_39432[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39389 === (5))){
var inst_39386 = (state_39388[(2)]);
var state_39388__$1 = state_39388;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39388__$1,inst_39386);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__36955__auto__ = null;
var cljs_http$core$xhr_$_state_machine__36955__auto____0 = (function (){
var statearr_39395 = [null,null,null,null,null,null,null,null];
(statearr_39395[(0)] = cljs_http$core$xhr_$_state_machine__36955__auto__);

(statearr_39395[(1)] = (1));

return statearr_39395;
});
var cljs_http$core$xhr_$_state_machine__36955__auto____1 = (function (state_39388){
while(true){
var ret_value__36956__auto__ = (function (){try{while(true){
var result__36957__auto__ = switch__36954__auto__(state_39388);
if(cljs.core.keyword_identical_QMARK_(result__36957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36957__auto__;
}
break;
}
}catch (e39396){if((e39396 instanceof Object)){
var ex__36958__auto__ = e39396;
var statearr_39397_39434 = state_39388;
(statearr_39397_39434[(5)] = ex__36958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39396;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39435 = state_39388;
state_39388 = G__39435;
continue;
} else {
return ret_value__36956__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__36955__auto__ = function(state_39388){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__36955__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__36955__auto____1.call(this,state_39388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__36955__auto____0;
cljs_http$core$xhr_$_state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__36955__auto____1;
return cljs_http$core$xhr_$_state_machine__36955__auto__;
})()
})();
var state__37024__auto__ = (function (){var statearr_39398 = (f__37023__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37023__auto__.cljs$core$IFn$_invoke$arity$0() : f__37023__auto__.call(null));
(statearr_39398[(6)] = c__37022__auto___39424);

return statearr_39398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37024__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__39399){
var map__39400 = p__39399;
var map__39400__$1 = (((((!((map__39400 == null))))?(((((map__39400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39400):map__39400);
var request = map__39400__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39400__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39400__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39400__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39400__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_39436 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_39436], null));

if(cljs.core.truth_(cancel)){
var c__37022__auto___39437 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37023__auto__ = (function (){var switch__36954__auto__ = (function (state_39406){
var state_val_39407 = (state_39406[(1)]);
if((state_val_39407 === (1))){
var state_39406__$1 = state_39406;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39406__$1,(2),cancel);
} else {
if((state_val_39407 === (2))){
var inst_39403 = (state_39406[(2)]);
var inst_39404 = jsonp.cancel(req_39436);
var state_39406__$1 = (function (){var statearr_39408 = state_39406;
(statearr_39408[(7)] = inst_39403);

return statearr_39408;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39406__$1,inst_39404);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__36955__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__36955__auto____0 = (function (){
var statearr_39409 = [null,null,null,null,null,null,null,null];
(statearr_39409[(0)] = cljs_http$core$jsonp_$_state_machine__36955__auto__);

(statearr_39409[(1)] = (1));

return statearr_39409;
});
var cljs_http$core$jsonp_$_state_machine__36955__auto____1 = (function (state_39406){
while(true){
var ret_value__36956__auto__ = (function (){try{while(true){
var result__36957__auto__ = switch__36954__auto__(state_39406);
if(cljs.core.keyword_identical_QMARK_(result__36957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36957__auto__;
}
break;
}
}catch (e39410){if((e39410 instanceof Object)){
var ex__36958__auto__ = e39410;
var statearr_39411_39440 = state_39406;
(statearr_39411_39440[(5)] = ex__36958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39410;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39441 = state_39406;
state_39406 = G__39441;
continue;
} else {
return ret_value__36956__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__36955__auto__ = function(state_39406){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__36955__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__36955__auto____1.call(this,state_39406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__36955__auto____0;
cljs_http$core$jsonp_$_state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__36955__auto____1;
return cljs_http$core$jsonp_$_state_machine__36955__auto__;
})()
})();
var state__37024__auto__ = (function (){var statearr_39412 = (f__37023__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37023__auto__.cljs$core$IFn$_invoke$arity$0() : f__37023__auto__.call(null));
(statearr_39412[(6)] = c__37022__auto___39437);

return statearr_39412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37024__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__39413){
var map__39414 = p__39413;
var map__39414__$1 = (((((!((map__39414 == null))))?(((((map__39414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39414):map__39414);
var request = map__39414__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39414__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
