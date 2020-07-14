goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__37082 = arguments.length;
switch (G__37082) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37083 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37083 = (function (f,blockable,meta37084){
this.f = f;
this.blockable = blockable;
this.meta37084 = meta37084;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37085,meta37084__$1){
var self__ = this;
var _37085__$1 = this;
return (new cljs.core.async.t_cljs$core$async37083(self__.f,self__.blockable,meta37084__$1));
}));

(cljs.core.async.t_cljs$core$async37083.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37085){
var self__ = this;
var _37085__$1 = this;
return self__.meta37084;
}));

(cljs.core.async.t_cljs$core$async37083.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37083.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37083.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async37083.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async37083.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37084","meta37084",183435057,null)], null);
}));

(cljs.core.async.t_cljs$core$async37083.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37083.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37083");

(cljs.core.async.t_cljs$core$async37083.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37083");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37083.
 */
cljs.core.async.__GT_t_cljs$core$async37083 = (function cljs$core$async$__GT_t_cljs$core$async37083(f__$1,blockable__$1,meta37084){
return (new cljs.core.async.t_cljs$core$async37083(f__$1,blockable__$1,meta37084));
});

}

return (new cljs.core.async.t_cljs$core$async37083(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__37088 = arguments.length;
switch (G__37088) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__37090 = arguments.length;
switch (G__37090) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__37092 = arguments.length;
switch (G__37092) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_38540 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38540) : fn1.call(null,val_38540));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38540) : fn1.call(null,val_38540));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__37094 = arguments.length;
switch (G__37094) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___38547 = n;
var x_38549 = (0);
while(true){
if((x_38549 < n__4666__auto___38547)){
(a[x_38549] = x_38549);

var G__38550 = (x_38549 + (1));
x_38549 = G__38550;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37095 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37095 = (function (flag,meta37096){
this.flag = flag;
this.meta37096 = meta37096;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37097,meta37096__$1){
var self__ = this;
var _37097__$1 = this;
return (new cljs.core.async.t_cljs$core$async37095(self__.flag,meta37096__$1));
}));

(cljs.core.async.t_cljs$core$async37095.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37097){
var self__ = this;
var _37097__$1 = this;
return self__.meta37096;
}));

(cljs.core.async.t_cljs$core$async37095.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37095.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37095.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37095.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async37095.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37096","meta37096",-1888781068,null)], null);
}));

(cljs.core.async.t_cljs$core$async37095.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37095.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37095");

(cljs.core.async.t_cljs$core$async37095.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37095");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37095.
 */
cljs.core.async.__GT_t_cljs$core$async37095 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37095(flag__$1,meta37096){
return (new cljs.core.async.t_cljs$core$async37095(flag__$1,meta37096));
});

}

return (new cljs.core.async.t_cljs$core$async37095(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37100 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37100 = (function (flag,cb,meta37101){
this.flag = flag;
this.cb = cb;
this.meta37101 = meta37101;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37102,meta37101__$1){
var self__ = this;
var _37102__$1 = this;
return (new cljs.core.async.t_cljs$core$async37100(self__.flag,self__.cb,meta37101__$1));
}));

(cljs.core.async.t_cljs$core$async37100.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37102){
var self__ = this;
var _37102__$1 = this;
return self__.meta37101;
}));

(cljs.core.async.t_cljs$core$async37100.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37100.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37100.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37100.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async37100.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37101","meta37101",-1169135910,null)], null);
}));

(cljs.core.async.t_cljs$core$async37100.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37100.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37100");

(cljs.core.async.t_cljs$core$async37100.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37100");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37100.
 */
cljs.core.async.__GT_t_cljs$core$async37100 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37100(flag__$1,cb__$1,meta37101){
return (new cljs.core.async.t_cljs$core$async37100(flag__$1,cb__$1,meta37101));
});

}

return (new cljs.core.async.t_cljs$core$async37100(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37107_SHARP_){
var G__37111 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37107_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37111) : fret.call(null,G__37111));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37108_SHARP_){
var G__37112 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37108_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37112) : fret.call(null,G__37112));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__38564 = (i + (1));
i = G__38564;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38568 = arguments.length;
var i__4790__auto___38569 = (0);
while(true){
if((i__4790__auto___38569 < len__4789__auto___38568)){
args__4795__auto__.push((arguments[i__4790__auto___38569]));

var G__38571 = (i__4790__auto___38569 + (1));
i__4790__auto___38569 = G__38571;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37116){
var map__37117 = p__37116;
var map__37117__$1 = (((((!((map__37117 == null))))?(((((map__37117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37117):map__37117);
var opts = map__37117__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37113){
var G__37114 = cljs.core.first(seq37113);
var seq37113__$1 = cljs.core.next(seq37113);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37114,seq37113__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__37123 = arguments.length;
switch (G__37123) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__37022__auto___38579 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37023__auto__ = (function (){var switch__36954__auto__ = (function (state_37147){
var state_val_37148 = (state_37147[(1)]);
if((state_val_37148 === (7))){
var inst_37143 = (state_37147[(2)]);
var state_37147__$1 = state_37147;
var statearr_37149_38580 = state_37147__$1;
(statearr_37149_38580[(2)] = inst_37143);

(statearr_37149_38580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37148 === (1))){
var state_37147__$1 = state_37147;
var statearr_37150_38582 = state_37147__$1;
(statearr_37150_38582[(2)] = null);

(statearr_37150_38582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37148 === (4))){
var inst_37126 = (state_37147[(7)]);
var inst_37126__$1 = (state_37147[(2)]);
var inst_37127 = (inst_37126__$1 == null);
var state_37147__$1 = (function (){var statearr_37151 = state_37147;
(statearr_37151[(7)] = inst_37126__$1);

return statearr_37151;
})();
if(cljs.core.truth_(inst_37127)){
var statearr_37152_38583 = state_37147__$1;
(statearr_37152_38583[(1)] = (5));

} else {
var statearr_37153_38584 = state_37147__$1;
(statearr_37153_38584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37148 === (13))){
var state_37147__$1 = state_37147;
var statearr_37154_38585 = state_37147__$1;
(statearr_37154_38585[(2)] = null);

(statearr_37154_38585[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37148 === (6))){
var inst_37126 = (state_37147[(7)]);
var state_37147__$1 = state_37147;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37147__$1,(11),to,inst_37126);
} else {
if((state_val_37148 === (3))){
var inst_37145 = (state_37147[(2)]);
var state_37147__$1 = state_37147;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37147__$1,inst_37145);
} else {
if((state_val_37148 === (12))){
var state_37147__$1 = state_37147;
var statearr_37155_38586 = state_37147__$1;
(statearr_37155_38586[(2)] = null);

(statearr_37155_38586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37148 === (2))){
var state_37147__$1 = state_37147;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37147__$1,(4),from);
} else {
if((state_val_37148 === (11))){
var inst_37136 = (state_37147[(2)]);
var state_37147__$1 = state_37147;
if(cljs.core.truth_(inst_37136)){
var statearr_37156_38590 = state_37147__$1;
(statearr_37156_38590[(1)] = (12));

} else {
var statearr_37157_38591 = state_37147__$1;
(statearr_37157_38591[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37148 === (9))){
var state_37147__$1 = state_37147;
var statearr_37158_38592 = state_37147__$1;
(statearr_37158_38592[(2)] = null);

(statearr_37158_38592[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37148 === (5))){
var state_37147__$1 = state_37147;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37159_38593 = state_37147__$1;
(statearr_37159_38593[(1)] = (8));

} else {
var statearr_37160_38594 = state_37147__$1;
(statearr_37160_38594[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37148 === (14))){
var inst_37141 = (state_37147[(2)]);
var state_37147__$1 = state_37147;
var statearr_37161_38595 = state_37147__$1;
(statearr_37161_38595[(2)] = inst_37141);

(statearr_37161_38595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37148 === (10))){
var inst_37133 = (state_37147[(2)]);
var state_37147__$1 = state_37147;
var statearr_37162_38596 = state_37147__$1;
(statearr_37162_38596[(2)] = inst_37133);

(statearr_37162_38596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37148 === (8))){
var inst_37130 = cljs.core.async.close_BANG_(to);
var state_37147__$1 = state_37147;
var statearr_37163_38597 = state_37147__$1;
(statearr_37163_38597[(2)] = inst_37130);

(statearr_37163_38597[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36955__auto__ = null;
var cljs$core$async$state_machine__36955__auto____0 = (function (){
var statearr_37164 = [null,null,null,null,null,null,null,null];
(statearr_37164[(0)] = cljs$core$async$state_machine__36955__auto__);

(statearr_37164[(1)] = (1));

return statearr_37164;
});
var cljs$core$async$state_machine__36955__auto____1 = (function (state_37147){
while(true){
var ret_value__36956__auto__ = (function (){try{while(true){
var result__36957__auto__ = switch__36954__auto__(state_37147);
if(cljs.core.keyword_identical_QMARK_(result__36957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36957__auto__;
}
break;
}
}catch (e37165){if((e37165 instanceof Object)){
var ex__36958__auto__ = e37165;
var statearr_37166_38598 = state_37147;
(statearr_37166_38598[(5)] = ex__36958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37165;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38599 = state_37147;
state_37147 = G__38599;
continue;
} else {
return ret_value__36956__auto__;
}
break;
}
});
cljs$core$async$state_machine__36955__auto__ = function(state_37147){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36955__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36955__auto____1.call(this,state_37147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36955__auto____0;
cljs$core$async$state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36955__auto____1;
return cljs$core$async$state_machine__36955__auto__;
})()
})();
var state__37024__auto__ = (function (){var statearr_37167 = (f__37023__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37023__auto__.cljs$core$IFn$_invoke$arity$0() : f__37023__auto__.call(null));
(statearr_37167[(6)] = c__37022__auto___38579);

return statearr_37167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37024__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__37168){
var vec__37169 = p__37168;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37169,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37169,(1),null);
var job = vec__37169;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__37022__auto___38600 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37023__auto__ = (function (){var switch__36954__auto__ = (function (state_37176){
var state_val_37177 = (state_37176[(1)]);
if((state_val_37177 === (1))){
var state_37176__$1 = state_37176;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37176__$1,(2),res,v);
} else {
if((state_val_37177 === (2))){
var inst_37173 = (state_37176[(2)]);
var inst_37174 = cljs.core.async.close_BANG_(res);
var state_37176__$1 = (function (){var statearr_37178 = state_37176;
(statearr_37178[(7)] = inst_37173);

return statearr_37178;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37176__$1,inst_37174);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36955__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36955__auto____0 = (function (){
var statearr_37179 = [null,null,null,null,null,null,null,null];
(statearr_37179[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36955__auto__);

(statearr_37179[(1)] = (1));

return statearr_37179;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36955__auto____1 = (function (state_37176){
while(true){
var ret_value__36956__auto__ = (function (){try{while(true){
var result__36957__auto__ = switch__36954__auto__(state_37176);
if(cljs.core.keyword_identical_QMARK_(result__36957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36957__auto__;
}
break;
}
}catch (e37180){if((e37180 instanceof Object)){
var ex__36958__auto__ = e37180;
var statearr_37181_38601 = state_37176;
(statearr_37181_38601[(5)] = ex__36958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37180;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38602 = state_37176;
state_37176 = G__38602;
continue;
} else {
return ret_value__36956__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36955__auto__ = function(state_37176){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36955__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36955__auto____1.call(this,state_37176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36955__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36955__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36955__auto__;
})()
})();
var state__37024__auto__ = (function (){var statearr_37182 = (f__37023__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37023__auto__.cljs$core$IFn$_invoke$arity$0() : f__37023__auto__.call(null));
(statearr_37182[(6)] = c__37022__auto___38600);

return statearr_37182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37024__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__37183){
var vec__37184 = p__37183;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37184,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37184,(1),null);
var job = vec__37184;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___38607 = n;
var __38608 = (0);
while(true){
if((__38608 < n__4666__auto___38607)){
var G__37187_38613 = type;
var G__37187_38614__$1 = (((G__37187_38613 instanceof cljs.core.Keyword))?G__37187_38613.fqn:null);
switch (G__37187_38614__$1) {
case "compute":
var c__37022__auto___38616 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38608,c__37022__auto___38616,G__37187_38613,G__37187_38614__$1,n__4666__auto___38607,jobs,results,process,async){
return (function (){
var f__37023__auto__ = (function (){var switch__36954__auto__ = ((function (__38608,c__37022__auto___38616,G__37187_38613,G__37187_38614__$1,n__4666__auto___38607,jobs,results,process,async){
return (function (state_37200){
var state_val_37201 = (state_37200[(1)]);
if((state_val_37201 === (1))){
var state_37200__$1 = state_37200;
var statearr_37202_38621 = state_37200__$1;
(statearr_37202_38621[(2)] = null);

(statearr_37202_38621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37201 === (2))){
var state_37200__$1 = state_37200;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37200__$1,(4),jobs);
} else {
if((state_val_37201 === (3))){
var inst_37198 = (state_37200[(2)]);
var state_37200__$1 = state_37200;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37200__$1,inst_37198);
} else {
if((state_val_37201 === (4))){
var inst_37190 = (state_37200[(2)]);
var inst_37191 = process(inst_37190);
var state_37200__$1 = state_37200;
if(cljs.core.truth_(inst_37191)){
var statearr_37203_38622 = state_37200__$1;
(statearr_37203_38622[(1)] = (5));

} else {
var statearr_37204_38623 = state_37200__$1;
(statearr_37204_38623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37201 === (5))){
var state_37200__$1 = state_37200;
var statearr_37205_38625 = state_37200__$1;
(statearr_37205_38625[(2)] = null);

(statearr_37205_38625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37201 === (6))){
var state_37200__$1 = state_37200;
var statearr_37206_38626 = state_37200__$1;
(statearr_37206_38626[(2)] = null);

(statearr_37206_38626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37201 === (7))){
var inst_37196 = (state_37200[(2)]);
var state_37200__$1 = state_37200;
var statearr_37207_38628 = state_37200__$1;
(statearr_37207_38628[(2)] = inst_37196);

(statearr_37207_38628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__38608,c__37022__auto___38616,G__37187_38613,G__37187_38614__$1,n__4666__auto___38607,jobs,results,process,async))
;
return ((function (__38608,switch__36954__auto__,c__37022__auto___38616,G__37187_38613,G__37187_38614__$1,n__4666__auto___38607,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36955__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36955__auto____0 = (function (){
var statearr_37208 = [null,null,null,null,null,null,null];
(statearr_37208[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36955__auto__);

(statearr_37208[(1)] = (1));

return statearr_37208;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36955__auto____1 = (function (state_37200){
while(true){
var ret_value__36956__auto__ = (function (){try{while(true){
var result__36957__auto__ = switch__36954__auto__(state_37200);
if(cljs.core.keyword_identical_QMARK_(result__36957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36957__auto__;
}
break;
}
}catch (e37209){if((e37209 instanceof Object)){
var ex__36958__auto__ = e37209;
var statearr_37210_38629 = state_37200;
(statearr_37210_38629[(5)] = ex__36958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37200);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37209;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38631 = state_37200;
state_37200 = G__38631;
continue;
} else {
return ret_value__36956__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36955__auto__ = function(state_37200){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36955__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36955__auto____1.call(this,state_37200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36955__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36955__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36955__auto__;
})()
;})(__38608,switch__36954__auto__,c__37022__auto___38616,G__37187_38613,G__37187_38614__$1,n__4666__auto___38607,jobs,results,process,async))
})();
var state__37024__auto__ = (function (){var statearr_37211 = (f__37023__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37023__auto__.cljs$core$IFn$_invoke$arity$0() : f__37023__auto__.call(null));
(statearr_37211[(6)] = c__37022__auto___38616);

return statearr_37211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37024__auto__);
});})(__38608,c__37022__auto___38616,G__37187_38613,G__37187_38614__$1,n__4666__auto___38607,jobs,results,process,async))
);


break;
case "async":
var c__37022__auto___38633 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38608,c__37022__auto___38633,G__37187_38613,G__37187_38614__$1,n__4666__auto___38607,jobs,results,process,async){
return (function (){
var f__37023__auto__ = (function (){var switch__36954__auto__ = ((function (__38608,c__37022__auto___38633,G__37187_38613,G__37187_38614__$1,n__4666__auto___38607,jobs,results,process,async){
return (function (state_37224){
var state_val_37225 = (state_37224[(1)]);
if((state_val_37225 === (1))){
var state_37224__$1 = state_37224;
var statearr_37226_38634 = state_37224__$1;
(statearr_37226_38634[(2)] = null);

(statearr_37226_38634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37225 === (2))){
var state_37224__$1 = state_37224;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37224__$1,(4),jobs);
} else {
if((state_val_37225 === (3))){
var inst_37222 = (state_37224[(2)]);
var state_37224__$1 = state_37224;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37224__$1,inst_37222);
} else {
if((state_val_37225 === (4))){
var inst_37214 = (state_37224[(2)]);
var inst_37215 = async(inst_37214);
var state_37224__$1 = state_37224;
if(cljs.core.truth_(inst_37215)){
var statearr_37227_38635 = state_37224__$1;
(statearr_37227_38635[(1)] = (5));

} else {
var statearr_37228_38636 = state_37224__$1;
(statearr_37228_38636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37225 === (5))){
var state_37224__$1 = state_37224;
var statearr_37229_38637 = state_37224__$1;
(statearr_37229_38637[(2)] = null);

(statearr_37229_38637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37225 === (6))){
var state_37224__$1 = state_37224;
var statearr_37230_38638 = state_37224__$1;
(statearr_37230_38638[(2)] = null);

(statearr_37230_38638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37225 === (7))){
var inst_37220 = (state_37224[(2)]);
var state_37224__$1 = state_37224;
var statearr_37231_38639 = state_37224__$1;
(statearr_37231_38639[(2)] = inst_37220);

(statearr_37231_38639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__38608,c__37022__auto___38633,G__37187_38613,G__37187_38614__$1,n__4666__auto___38607,jobs,results,process,async))
;
return ((function (__38608,switch__36954__auto__,c__37022__auto___38633,G__37187_38613,G__37187_38614__$1,n__4666__auto___38607,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36955__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36955__auto____0 = (function (){
var statearr_37232 = [null,null,null,null,null,null,null];
(statearr_37232[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36955__auto__);

(statearr_37232[(1)] = (1));

return statearr_37232;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36955__auto____1 = (function (state_37224){
while(true){
var ret_value__36956__auto__ = (function (){try{while(true){
var result__36957__auto__ = switch__36954__auto__(state_37224);
if(cljs.core.keyword_identical_QMARK_(result__36957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36957__auto__;
}
break;
}
}catch (e37233){if((e37233 instanceof Object)){
var ex__36958__auto__ = e37233;
var statearr_37234_38640 = state_37224;
(statearr_37234_38640[(5)] = ex__36958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37233;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38641 = state_37224;
state_37224 = G__38641;
continue;
} else {
return ret_value__36956__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36955__auto__ = function(state_37224){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36955__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36955__auto____1.call(this,state_37224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36955__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36955__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36955__auto__;
})()
;})(__38608,switch__36954__auto__,c__37022__auto___38633,G__37187_38613,G__37187_38614__$1,n__4666__auto___38607,jobs,results,process,async))
})();
var state__37024__auto__ = (function (){var statearr_37235 = (f__37023__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37023__auto__.cljs$core$IFn$_invoke$arity$0() : f__37023__auto__.call(null));
(statearr_37235[(6)] = c__37022__auto___38633);

return statearr_37235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37024__auto__);
});})(__38608,c__37022__auto___38633,G__37187_38613,G__37187_38614__$1,n__4666__auto___38607,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37187_38614__$1)].join('')));

}

var G__38642 = (__38608 + (1));
__38608 = G__38642;
continue;
} else {
}
break;
}

var c__37022__auto___38643 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37023__auto__ = (function (){var switch__36954__auto__ = (function (state_37257){
var state_val_37258 = (state_37257[(1)]);
if((state_val_37258 === (7))){
var inst_37253 = (state_37257[(2)]);
var state_37257__$1 = state_37257;
var statearr_37259_38644 = state_37257__$1;
(statearr_37259_38644[(2)] = inst_37253);

(statearr_37259_38644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37258 === (1))){
var state_37257__$1 = state_37257;
var statearr_37260_38645 = state_37257__$1;
(statearr_37260_38645[(2)] = null);

(statearr_37260_38645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37258 === (4))){
var inst_37238 = (state_37257[(7)]);
var inst_37238__$1 = (state_37257[(2)]);
var inst_37239 = (inst_37238__$1 == null);
var state_37257__$1 = (function (){var statearr_37261 = state_37257;
(statearr_37261[(7)] = inst_37238__$1);

return statearr_37261;
})();
if(cljs.core.truth_(inst_37239)){
var statearr_37262_38646 = state_37257__$1;
(statearr_37262_38646[(1)] = (5));

} else {
var statearr_37263_38647 = state_37257__$1;
(statearr_37263_38647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37258 === (6))){
var inst_37243 = (state_37257[(8)]);
var inst_37238 = (state_37257[(7)]);
var inst_37243__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_37244 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37245 = [inst_37238,inst_37243__$1];
var inst_37246 = (new cljs.core.PersistentVector(null,2,(5),inst_37244,inst_37245,null));
var state_37257__$1 = (function (){var statearr_37264 = state_37257;
(statearr_37264[(8)] = inst_37243__$1);

return statearr_37264;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37257__$1,(8),jobs,inst_37246);
} else {
if((state_val_37258 === (3))){
var inst_37255 = (state_37257[(2)]);
var state_37257__$1 = state_37257;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37257__$1,inst_37255);
} else {
if((state_val_37258 === (2))){
var state_37257__$1 = state_37257;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37257__$1,(4),from);
} else {
if((state_val_37258 === (9))){
var inst_37250 = (state_37257[(2)]);
var state_37257__$1 = (function (){var statearr_37265 = state_37257;
(statearr_37265[(9)] = inst_37250);

return statearr_37265;
})();
var statearr_37266_38648 = state_37257__$1;
(statearr_37266_38648[(2)] = null);

(statearr_37266_38648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37258 === (5))){
var inst_37241 = cljs.core.async.close_BANG_(jobs);
var state_37257__$1 = state_37257;
var statearr_37267_38649 = state_37257__$1;
(statearr_37267_38649[(2)] = inst_37241);

(statearr_37267_38649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37258 === (8))){
var inst_37243 = (state_37257[(8)]);
var inst_37248 = (state_37257[(2)]);
var state_37257__$1 = (function (){var statearr_37268 = state_37257;
(statearr_37268[(10)] = inst_37248);

return statearr_37268;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37257__$1,(9),results,inst_37243);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36955__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36955__auto____0 = (function (){
var statearr_37269 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37269[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36955__auto__);

(statearr_37269[(1)] = (1));

return statearr_37269;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36955__auto____1 = (function (state_37257){
while(true){
var ret_value__36956__auto__ = (function (){try{while(true){
var result__36957__auto__ = switch__36954__auto__(state_37257);
if(cljs.core.keyword_identical_QMARK_(result__36957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36957__auto__;
}
break;
}
}catch (e37270){if((e37270 instanceof Object)){
var ex__36958__auto__ = e37270;
var statearr_37271_38650 = state_37257;
(statearr_37271_38650[(5)] = ex__36958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37270;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38651 = state_37257;
state_37257 = G__38651;
continue;
} else {
return ret_value__36956__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36955__auto__ = function(state_37257){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36955__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36955__auto____1.call(this,state_37257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36955__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36955__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36955__auto__;
})()
})();
var state__37024__auto__ = (function (){var statearr_37272 = (f__37023__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37023__auto__.cljs$core$IFn$_invoke$arity$0() : f__37023__auto__.call(null));
(statearr_37272[(6)] = c__37022__auto___38643);

return statearr_37272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37024__auto__);
}));


var c__37022__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37023__auto__ = (function (){var switch__36954__auto__ = (function (state_37310){
var state_val_37311 = (state_37310[(1)]);
if((state_val_37311 === (7))){
var inst_37306 = (state_37310[(2)]);
var state_37310__$1 = state_37310;
var statearr_37312_38652 = state_37310__$1;
(statearr_37312_38652[(2)] = inst_37306);

(statearr_37312_38652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37311 === (20))){
var state_37310__$1 = state_37310;
var statearr_37313_38653 = state_37310__$1;
(statearr_37313_38653[(2)] = null);

(statearr_37313_38653[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37311 === (1))){
var state_37310__$1 = state_37310;
var statearr_37314_38654 = state_37310__$1;
(statearr_37314_38654[(2)] = null);

(statearr_37314_38654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37311 === (4))){
var inst_37275 = (state_37310[(7)]);
var inst_37275__$1 = (state_37310[(2)]);
var inst_37276 = (inst_37275__$1 == null);
var state_37310__$1 = (function (){var statearr_37315 = state_37310;
(statearr_37315[(7)] = inst_37275__$1);

return statearr_37315;
})();
if(cljs.core.truth_(inst_37276)){
var statearr_37316_38655 = state_37310__$1;
(statearr_37316_38655[(1)] = (5));

} else {
var statearr_37317_38656 = state_37310__$1;
(statearr_37317_38656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37311 === (15))){
var inst_37288 = (state_37310[(8)]);
var state_37310__$1 = state_37310;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37310__$1,(18),to,inst_37288);
} else {
if((state_val_37311 === (21))){
var inst_37301 = (state_37310[(2)]);
var state_37310__$1 = state_37310;
var statearr_37318_38657 = state_37310__$1;
(statearr_37318_38657[(2)] = inst_37301);

(statearr_37318_38657[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37311 === (13))){
var inst_37303 = (state_37310[(2)]);
var state_37310__$1 = (function (){var statearr_37319 = state_37310;
(statearr_37319[(9)] = inst_37303);

return statearr_37319;
})();
var statearr_37320_38658 = state_37310__$1;
(statearr_37320_38658[(2)] = null);

(statearr_37320_38658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37311 === (6))){
var inst_37275 = (state_37310[(7)]);
var state_37310__$1 = state_37310;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37310__$1,(11),inst_37275);
} else {
if((state_val_37311 === (17))){
var inst_37296 = (state_37310[(2)]);
var state_37310__$1 = state_37310;
if(cljs.core.truth_(inst_37296)){
var statearr_37321_38659 = state_37310__$1;
(statearr_37321_38659[(1)] = (19));

} else {
var statearr_37322_38660 = state_37310__$1;
(statearr_37322_38660[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37311 === (3))){
var inst_37308 = (state_37310[(2)]);
var state_37310__$1 = state_37310;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37310__$1,inst_37308);
} else {
if((state_val_37311 === (12))){
var inst_37285 = (state_37310[(10)]);
var state_37310__$1 = state_37310;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37310__$1,(14),inst_37285);
} else {
if((state_val_37311 === (2))){
var state_37310__$1 = state_37310;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37310__$1,(4),results);
} else {
if((state_val_37311 === (19))){
var state_37310__$1 = state_37310;
var statearr_37323_38661 = state_37310__$1;
(statearr_37323_38661[(2)] = null);

(statearr_37323_38661[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37311 === (11))){
var inst_37285 = (state_37310[(2)]);
var state_37310__$1 = (function (){var statearr_37324 = state_37310;
(statearr_37324[(10)] = inst_37285);

return statearr_37324;
})();
var statearr_37325_38662 = state_37310__$1;
(statearr_37325_38662[(2)] = null);

(statearr_37325_38662[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37311 === (9))){
var state_37310__$1 = state_37310;
var statearr_37326_38663 = state_37310__$1;
(statearr_37326_38663[(2)] = null);

(statearr_37326_38663[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37311 === (5))){
var state_37310__$1 = state_37310;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37327_38664 = state_37310__$1;
(statearr_37327_38664[(1)] = (8));

} else {
var statearr_37328_38665 = state_37310__$1;
(statearr_37328_38665[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37311 === (14))){
var inst_37288 = (state_37310[(8)]);
var inst_37288__$1 = (state_37310[(2)]);
var inst_37289 = (inst_37288__$1 == null);
var inst_37290 = cljs.core.not(inst_37289);
var state_37310__$1 = (function (){var statearr_37329 = state_37310;
(statearr_37329[(8)] = inst_37288__$1);

return statearr_37329;
})();
if(inst_37290){
var statearr_37330_38666 = state_37310__$1;
(statearr_37330_38666[(1)] = (15));

} else {
var statearr_37331_38667 = state_37310__$1;
(statearr_37331_38667[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37311 === (16))){
var state_37310__$1 = state_37310;
var statearr_37332_38668 = state_37310__$1;
(statearr_37332_38668[(2)] = false);

(statearr_37332_38668[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37311 === (10))){
var inst_37282 = (state_37310[(2)]);
var state_37310__$1 = state_37310;
var statearr_37333_38669 = state_37310__$1;
(statearr_37333_38669[(2)] = inst_37282);

(statearr_37333_38669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37311 === (18))){
var inst_37293 = (state_37310[(2)]);
var state_37310__$1 = state_37310;
var statearr_37334_38670 = state_37310__$1;
(statearr_37334_38670[(2)] = inst_37293);

(statearr_37334_38670[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37311 === (8))){
var inst_37279 = cljs.core.async.close_BANG_(to);
var state_37310__$1 = state_37310;
var statearr_37335_38671 = state_37310__$1;
(statearr_37335_38671[(2)] = inst_37279);

(statearr_37335_38671[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36955__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36955__auto____0 = (function (){
var statearr_37336 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37336[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36955__auto__);

(statearr_37336[(1)] = (1));

return statearr_37336;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36955__auto____1 = (function (state_37310){
while(true){
var ret_value__36956__auto__ = (function (){try{while(true){
var result__36957__auto__ = switch__36954__auto__(state_37310);
if(cljs.core.keyword_identical_QMARK_(result__36957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36957__auto__;
}
break;
}
}catch (e37337){if((e37337 instanceof Object)){
var ex__36958__auto__ = e37337;
var statearr_37338_38672 = state_37310;
(statearr_37338_38672[(5)] = ex__36958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37337;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38673 = state_37310;
state_37310 = G__38673;
continue;
} else {
return ret_value__36956__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36955__auto__ = function(state_37310){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36955__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36955__auto____1.call(this,state_37310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36955__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36955__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36955__auto__;
})()
})();
var state__37024__auto__ = (function (){var statearr_37339 = (f__37023__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37023__auto__.cljs$core$IFn$_invoke$arity$0() : f__37023__auto__.call(null));
(statearr_37339[(6)] = c__37022__auto__);

return statearr_37339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37024__auto__);
}));

return c__37022__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__37341 = arguments.length;
switch (G__37341) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__37343 = arguments.length;
switch (G__37343) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__37345 = arguments.length;
switch (G__37345) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__37022__auto___38677 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37023__auto__ = (function (){var switch__36954__auto__ = (function (state_37371){
var state_val_37372 = (state_37371[(1)]);
if((state_val_37372 === (7))){
var inst_37367 = (state_37371[(2)]);
var state_37371__$1 = state_37371;
var statearr_37373_38678 = state_37371__$1;
(statearr_37373_38678[(2)] = inst_37367);

(statearr_37373_38678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37372 === (1))){
var state_37371__$1 = state_37371;
var statearr_37374_38679 = state_37371__$1;
(statearr_37374_38679[(2)] = null);

(statearr_37374_38679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37372 === (4))){
var inst_37348 = (state_37371[(7)]);
var inst_37348__$1 = (state_37371[(2)]);
var inst_37349 = (inst_37348__$1 == null);
var state_37371__$1 = (function (){var statearr_37375 = state_37371;
(statearr_37375[(7)] = inst_37348__$1);

return statearr_37375;
})();
if(cljs.core.truth_(inst_37349)){
var statearr_37376_38680 = state_37371__$1;
(statearr_37376_38680[(1)] = (5));

} else {
var statearr_37377_38681 = state_37371__$1;
(statearr_37377_38681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37372 === (13))){
var state_37371__$1 = state_37371;
var statearr_37378_38682 = state_37371__$1;
(statearr_37378_38682[(2)] = null);

(statearr_37378_38682[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37372 === (6))){
var inst_37348 = (state_37371[(7)]);
var inst_37354 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37348) : p.call(null,inst_37348));
var state_37371__$1 = state_37371;
if(cljs.core.truth_(inst_37354)){
var statearr_37379_38683 = state_37371__$1;
(statearr_37379_38683[(1)] = (9));

} else {
var statearr_37380_38684 = state_37371__$1;
(statearr_37380_38684[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37372 === (3))){
var inst_37369 = (state_37371[(2)]);
var state_37371__$1 = state_37371;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37371__$1,inst_37369);
} else {
if((state_val_37372 === (12))){
var state_37371__$1 = state_37371;
var statearr_37381_38685 = state_37371__$1;
(statearr_37381_38685[(2)] = null);

(statearr_37381_38685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37372 === (2))){
var state_37371__$1 = state_37371;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37371__$1,(4),ch);
} else {
if((state_val_37372 === (11))){
var inst_37348 = (state_37371[(7)]);
var inst_37358 = (state_37371[(2)]);
var state_37371__$1 = state_37371;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37371__$1,(8),inst_37358,inst_37348);
} else {
if((state_val_37372 === (9))){
var state_37371__$1 = state_37371;
var statearr_37382_38686 = state_37371__$1;
(statearr_37382_38686[(2)] = tc);

(statearr_37382_38686[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37372 === (5))){
var inst_37351 = cljs.core.async.close_BANG_(tc);
var inst_37352 = cljs.core.async.close_BANG_(fc);
var state_37371__$1 = (function (){var statearr_37383 = state_37371;
(statearr_37383[(8)] = inst_37351);

return statearr_37383;
})();
var statearr_37384_38687 = state_37371__$1;
(statearr_37384_38687[(2)] = inst_37352);

(statearr_37384_38687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37372 === (14))){
var inst_37365 = (state_37371[(2)]);
var state_37371__$1 = state_37371;
var statearr_37385_38688 = state_37371__$1;
(statearr_37385_38688[(2)] = inst_37365);

(statearr_37385_38688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37372 === (10))){
var state_37371__$1 = state_37371;
var statearr_37386_38689 = state_37371__$1;
(statearr_37386_38689[(2)] = fc);

(statearr_37386_38689[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37372 === (8))){
var inst_37360 = (state_37371[(2)]);
var state_37371__$1 = state_37371;
if(cljs.core.truth_(inst_37360)){
var statearr_37387_38690 = state_37371__$1;
(statearr_37387_38690[(1)] = (12));

} else {
var statearr_37388_38691 = state_37371__$1;
(statearr_37388_38691[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36955__auto__ = null;
var cljs$core$async$state_machine__36955__auto____0 = (function (){
var statearr_37389 = [null,null,null,null,null,null,null,null,null];
(statearr_37389[(0)] = cljs$core$async$state_machine__36955__auto__);

(statearr_37389[(1)] = (1));

return statearr_37389;
});
var cljs$core$async$state_machine__36955__auto____1 = (function (state_37371){
while(true){
var ret_value__36956__auto__ = (function (){try{while(true){
var result__36957__auto__ = switch__36954__auto__(state_37371);
if(cljs.core.keyword_identical_QMARK_(result__36957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36957__auto__;
}
break;
}
}catch (e37390){if((e37390 instanceof Object)){
var ex__36958__auto__ = e37390;
var statearr_37391_38692 = state_37371;
(statearr_37391_38692[(5)] = ex__36958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37390;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38693 = state_37371;
state_37371 = G__38693;
continue;
} else {
return ret_value__36956__auto__;
}
break;
}
});
cljs$core$async$state_machine__36955__auto__ = function(state_37371){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36955__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36955__auto____1.call(this,state_37371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36955__auto____0;
cljs$core$async$state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36955__auto____1;
return cljs$core$async$state_machine__36955__auto__;
})()
})();
var state__37024__auto__ = (function (){var statearr_37392 = (f__37023__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37023__auto__.cljs$core$IFn$_invoke$arity$0() : f__37023__auto__.call(null));
(statearr_37392[(6)] = c__37022__auto___38677);

return statearr_37392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37024__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__37022__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37023__auto__ = (function (){var switch__36954__auto__ = (function (state_37413){
var state_val_37414 = (state_37413[(1)]);
if((state_val_37414 === (7))){
var inst_37409 = (state_37413[(2)]);
var state_37413__$1 = state_37413;
var statearr_37415_38694 = state_37413__$1;
(statearr_37415_38694[(2)] = inst_37409);

(statearr_37415_38694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37414 === (1))){
var inst_37393 = init;
var state_37413__$1 = (function (){var statearr_37416 = state_37413;
(statearr_37416[(7)] = inst_37393);

return statearr_37416;
})();
var statearr_37417_38695 = state_37413__$1;
(statearr_37417_38695[(2)] = null);

(statearr_37417_38695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37414 === (4))){
var inst_37396 = (state_37413[(8)]);
var inst_37396__$1 = (state_37413[(2)]);
var inst_37397 = (inst_37396__$1 == null);
var state_37413__$1 = (function (){var statearr_37418 = state_37413;
(statearr_37418[(8)] = inst_37396__$1);

return statearr_37418;
})();
if(cljs.core.truth_(inst_37397)){
var statearr_37419_38696 = state_37413__$1;
(statearr_37419_38696[(1)] = (5));

} else {
var statearr_37420_38697 = state_37413__$1;
(statearr_37420_38697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37414 === (6))){
var inst_37400 = (state_37413[(9)]);
var inst_37393 = (state_37413[(7)]);
var inst_37396 = (state_37413[(8)]);
var inst_37400__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_37393,inst_37396) : f.call(null,inst_37393,inst_37396));
var inst_37401 = cljs.core.reduced_QMARK_(inst_37400__$1);
var state_37413__$1 = (function (){var statearr_37421 = state_37413;
(statearr_37421[(9)] = inst_37400__$1);

return statearr_37421;
})();
if(inst_37401){
var statearr_37422_38698 = state_37413__$1;
(statearr_37422_38698[(1)] = (8));

} else {
var statearr_37423_38699 = state_37413__$1;
(statearr_37423_38699[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37414 === (3))){
var inst_37411 = (state_37413[(2)]);
var state_37413__$1 = state_37413;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37413__$1,inst_37411);
} else {
if((state_val_37414 === (2))){
var state_37413__$1 = state_37413;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37413__$1,(4),ch);
} else {
if((state_val_37414 === (9))){
var inst_37400 = (state_37413[(9)]);
var inst_37393 = inst_37400;
var state_37413__$1 = (function (){var statearr_37424 = state_37413;
(statearr_37424[(7)] = inst_37393);

return statearr_37424;
})();
var statearr_37425_38700 = state_37413__$1;
(statearr_37425_38700[(2)] = null);

(statearr_37425_38700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37414 === (5))){
var inst_37393 = (state_37413[(7)]);
var state_37413__$1 = state_37413;
var statearr_37426_38701 = state_37413__$1;
(statearr_37426_38701[(2)] = inst_37393);

(statearr_37426_38701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37414 === (10))){
var inst_37407 = (state_37413[(2)]);
var state_37413__$1 = state_37413;
var statearr_37427_38702 = state_37413__$1;
(statearr_37427_38702[(2)] = inst_37407);

(statearr_37427_38702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37414 === (8))){
var inst_37400 = (state_37413[(9)]);
var inst_37403 = cljs.core.deref(inst_37400);
var state_37413__$1 = state_37413;
var statearr_37428_38703 = state_37413__$1;
(statearr_37428_38703[(2)] = inst_37403);

(statearr_37428_38703[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__36955__auto__ = null;
var cljs$core$async$reduce_$_state_machine__36955__auto____0 = (function (){
var statearr_37429 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37429[(0)] = cljs$core$async$reduce_$_state_machine__36955__auto__);

(statearr_37429[(1)] = (1));

return statearr_37429;
});
var cljs$core$async$reduce_$_state_machine__36955__auto____1 = (function (state_37413){
while(true){
var ret_value__36956__auto__ = (function (){try{while(true){
var result__36957__auto__ = switch__36954__auto__(state_37413);
if(cljs.core.keyword_identical_QMARK_(result__36957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36957__auto__;
}
break;
}
}catch (e37430){if((e37430 instanceof Object)){
var ex__36958__auto__ = e37430;
var statearr_37431_38704 = state_37413;
(statearr_37431_38704[(5)] = ex__36958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37430;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38705 = state_37413;
state_37413 = G__38705;
continue;
} else {
return ret_value__36956__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__36955__auto__ = function(state_37413){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__36955__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__36955__auto____1.call(this,state_37413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__36955__auto____0;
cljs$core$async$reduce_$_state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__36955__auto____1;
return cljs$core$async$reduce_$_state_machine__36955__auto__;
})()
})();
var state__37024__auto__ = (function (){var statearr_37432 = (f__37023__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37023__auto__.cljs$core$IFn$_invoke$arity$0() : f__37023__auto__.call(null));
(statearr_37432[(6)] = c__37022__auto__);

return statearr_37432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37024__auto__);
}));

return c__37022__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__37022__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37023__auto__ = (function (){var switch__36954__auto__ = (function (state_37438){
var state_val_37439 = (state_37438[(1)]);
if((state_val_37439 === (1))){
var inst_37433 = cljs.core.async.reduce(f__$1,init,ch);
var state_37438__$1 = state_37438;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37438__$1,(2),inst_37433);
} else {
if((state_val_37439 === (2))){
var inst_37435 = (state_37438[(2)]);
var inst_37436 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_37435) : f__$1.call(null,inst_37435));
var state_37438__$1 = state_37438;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37438__$1,inst_37436);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__36955__auto__ = null;
var cljs$core$async$transduce_$_state_machine__36955__auto____0 = (function (){
var statearr_37440 = [null,null,null,null,null,null,null];
(statearr_37440[(0)] = cljs$core$async$transduce_$_state_machine__36955__auto__);

(statearr_37440[(1)] = (1));

return statearr_37440;
});
var cljs$core$async$transduce_$_state_machine__36955__auto____1 = (function (state_37438){
while(true){
var ret_value__36956__auto__ = (function (){try{while(true){
var result__36957__auto__ = switch__36954__auto__(state_37438);
if(cljs.core.keyword_identical_QMARK_(result__36957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36957__auto__;
}
break;
}
}catch (e37441){if((e37441 instanceof Object)){
var ex__36958__auto__ = e37441;
var statearr_37442_38706 = state_37438;
(statearr_37442_38706[(5)] = ex__36958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37441;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38707 = state_37438;
state_37438 = G__38707;
continue;
} else {
return ret_value__36956__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__36955__auto__ = function(state_37438){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__36955__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__36955__auto____1.call(this,state_37438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__36955__auto____0;
cljs$core$async$transduce_$_state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__36955__auto____1;
return cljs$core$async$transduce_$_state_machine__36955__auto__;
})()
})();
var state__37024__auto__ = (function (){var statearr_37443 = (f__37023__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37023__auto__.cljs$core$IFn$_invoke$arity$0() : f__37023__auto__.call(null));
(statearr_37443[(6)] = c__37022__auto__);

return statearr_37443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37024__auto__);
}));

return c__37022__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__37445 = arguments.length;
switch (G__37445) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__37022__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37023__auto__ = (function (){var switch__36954__auto__ = (function (state_37470){
var state_val_37471 = (state_37470[(1)]);
if((state_val_37471 === (7))){
var inst_37452 = (state_37470[(2)]);
var state_37470__$1 = state_37470;
var statearr_37472_38709 = state_37470__$1;
(statearr_37472_38709[(2)] = inst_37452);

(statearr_37472_38709[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37471 === (1))){
var inst_37446 = cljs.core.seq(coll);
var inst_37447 = inst_37446;
var state_37470__$1 = (function (){var statearr_37473 = state_37470;
(statearr_37473[(7)] = inst_37447);

return statearr_37473;
})();
var statearr_37474_38710 = state_37470__$1;
(statearr_37474_38710[(2)] = null);

(statearr_37474_38710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37471 === (4))){
var inst_37447 = (state_37470[(7)]);
var inst_37450 = cljs.core.first(inst_37447);
var state_37470__$1 = state_37470;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37470__$1,(7),ch,inst_37450);
} else {
if((state_val_37471 === (13))){
var inst_37464 = (state_37470[(2)]);
var state_37470__$1 = state_37470;
var statearr_37475_38711 = state_37470__$1;
(statearr_37475_38711[(2)] = inst_37464);

(statearr_37475_38711[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37471 === (6))){
var inst_37455 = (state_37470[(2)]);
var state_37470__$1 = state_37470;
if(cljs.core.truth_(inst_37455)){
var statearr_37476_38712 = state_37470__$1;
(statearr_37476_38712[(1)] = (8));

} else {
var statearr_37477_38713 = state_37470__$1;
(statearr_37477_38713[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37471 === (3))){
var inst_37468 = (state_37470[(2)]);
var state_37470__$1 = state_37470;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37470__$1,inst_37468);
} else {
if((state_val_37471 === (12))){
var state_37470__$1 = state_37470;
var statearr_37478_38714 = state_37470__$1;
(statearr_37478_38714[(2)] = null);

(statearr_37478_38714[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37471 === (2))){
var inst_37447 = (state_37470[(7)]);
var state_37470__$1 = state_37470;
if(cljs.core.truth_(inst_37447)){
var statearr_37479_38715 = state_37470__$1;
(statearr_37479_38715[(1)] = (4));

} else {
var statearr_37480_38716 = state_37470__$1;
(statearr_37480_38716[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37471 === (11))){
var inst_37461 = cljs.core.async.close_BANG_(ch);
var state_37470__$1 = state_37470;
var statearr_37481_38717 = state_37470__$1;
(statearr_37481_38717[(2)] = inst_37461);

(statearr_37481_38717[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37471 === (9))){
var state_37470__$1 = state_37470;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37482_38718 = state_37470__$1;
(statearr_37482_38718[(1)] = (11));

} else {
var statearr_37483_38719 = state_37470__$1;
(statearr_37483_38719[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37471 === (5))){
var inst_37447 = (state_37470[(7)]);
var state_37470__$1 = state_37470;
var statearr_37484_38720 = state_37470__$1;
(statearr_37484_38720[(2)] = inst_37447);

(statearr_37484_38720[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37471 === (10))){
var inst_37466 = (state_37470[(2)]);
var state_37470__$1 = state_37470;
var statearr_37485_38721 = state_37470__$1;
(statearr_37485_38721[(2)] = inst_37466);

(statearr_37485_38721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37471 === (8))){
var inst_37447 = (state_37470[(7)]);
var inst_37457 = cljs.core.next(inst_37447);
var inst_37447__$1 = inst_37457;
var state_37470__$1 = (function (){var statearr_37486 = state_37470;
(statearr_37486[(7)] = inst_37447__$1);

return statearr_37486;
})();
var statearr_37487_38722 = state_37470__$1;
(statearr_37487_38722[(2)] = null);

(statearr_37487_38722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36955__auto__ = null;
var cljs$core$async$state_machine__36955__auto____0 = (function (){
var statearr_37488 = [null,null,null,null,null,null,null,null];
(statearr_37488[(0)] = cljs$core$async$state_machine__36955__auto__);

(statearr_37488[(1)] = (1));

return statearr_37488;
});
var cljs$core$async$state_machine__36955__auto____1 = (function (state_37470){
while(true){
var ret_value__36956__auto__ = (function (){try{while(true){
var result__36957__auto__ = switch__36954__auto__(state_37470);
if(cljs.core.keyword_identical_QMARK_(result__36957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36957__auto__;
}
break;
}
}catch (e37489){if((e37489 instanceof Object)){
var ex__36958__auto__ = e37489;
var statearr_37490_38723 = state_37470;
(statearr_37490_38723[(5)] = ex__36958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37489;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38724 = state_37470;
state_37470 = G__38724;
continue;
} else {
return ret_value__36956__auto__;
}
break;
}
});
cljs$core$async$state_machine__36955__auto__ = function(state_37470){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36955__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36955__auto____1.call(this,state_37470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36955__auto____0;
cljs$core$async$state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36955__auto____1;
return cljs$core$async$state_machine__36955__auto__;
})()
})();
var state__37024__auto__ = (function (){var statearr_37491 = (f__37023__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37023__auto__.cljs$core$IFn$_invoke$arity$0() : f__37023__auto__.call(null));
(statearr_37491[(6)] = c__37022__auto__);

return statearr_37491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37024__auto__);
}));

return c__37022__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37492 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37492 = (function (ch,cs,meta37493){
this.ch = ch;
this.cs = cs;
this.meta37493 = meta37493;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37494,meta37493__$1){
var self__ = this;
var _37494__$1 = this;
return (new cljs.core.async.t_cljs$core$async37492(self__.ch,self__.cs,meta37493__$1));
}));

(cljs.core.async.t_cljs$core$async37492.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37494){
var self__ = this;
var _37494__$1 = this;
return self__.meta37493;
}));

(cljs.core.async.t_cljs$core$async37492.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37492.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async37492.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37492.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async37492.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async37492.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async37492.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta37493","meta37493",1498281431,null)], null);
}));

(cljs.core.async.t_cljs$core$async37492.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37492.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37492");

(cljs.core.async.t_cljs$core$async37492.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37492");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37492.
 */
cljs.core.async.__GT_t_cljs$core$async37492 = (function cljs$core$async$mult_$___GT_t_cljs$core$async37492(ch__$1,cs__$1,meta37493){
return (new cljs.core.async.t_cljs$core$async37492(ch__$1,cs__$1,meta37493));
});

}

return (new cljs.core.async.t_cljs$core$async37492(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__37022__auto___38725 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37023__auto__ = (function (){var switch__36954__auto__ = (function (state_37629){
var state_val_37630 = (state_37629[(1)]);
if((state_val_37630 === (7))){
var inst_37625 = (state_37629[(2)]);
var state_37629__$1 = state_37629;
var statearr_37631_38726 = state_37629__$1;
(statearr_37631_38726[(2)] = inst_37625);

(statearr_37631_38726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37630 === (20))){
var inst_37528 = (state_37629[(7)]);
var inst_37540 = cljs.core.first(inst_37528);
var inst_37541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37540,(0),null);
var inst_37542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37540,(1),null);
var state_37629__$1 = (function (){var statearr_37632 = state_37629;
(statearr_37632[(8)] = inst_37541);

return statearr_37632;
})();
if(cljs.core.truth_(inst_37542)){
var statearr_37633_38727 = state_37629__$1;
(statearr_37633_38727[(1)] = (22));

} else {
var statearr_37634_38728 = state_37629__$1;
(statearr_37634_38728[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37630 === (27))){
var inst_37497 = (state_37629[(9)]);
var inst_37577 = (state_37629[(10)]);
var inst_37570 = (state_37629[(11)]);
var inst_37572 = (state_37629[(12)]);
var inst_37577__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37570,inst_37572);
var inst_37578 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37577__$1,inst_37497,done);
var state_37629__$1 = (function (){var statearr_37635 = state_37629;
(statearr_37635[(10)] = inst_37577__$1);

return statearr_37635;
})();
if(cljs.core.truth_(inst_37578)){
var statearr_37636_38729 = state_37629__$1;
(statearr_37636_38729[(1)] = (30));

} else {
var statearr_37637_38730 = state_37629__$1;
(statearr_37637_38730[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37630 === (1))){
var state_37629__$1 = state_37629;
var statearr_37638_38731 = state_37629__$1;
(statearr_37638_38731[(2)] = null);

(statearr_37638_38731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37630 === (24))){
var inst_37528 = (state_37629[(7)]);
var inst_37547 = (state_37629[(2)]);
var inst_37548 = cljs.core.next(inst_37528);
var inst_37506 = inst_37548;
var inst_37507 = null;
var inst_37508 = (0);
var inst_37509 = (0);
var state_37629__$1 = (function (){var statearr_37639 = state_37629;
(statearr_37639[(13)] = inst_37507);

(statearr_37639[(14)] = inst_37506);

(statearr_37639[(15)] = inst_37508);

(statearr_37639[(16)] = inst_37509);

(statearr_37639[(17)] = inst_37547);

return statearr_37639;
})();
var statearr_37640_38735 = state_37629__$1;
(statearr_37640_38735[(2)] = null);

(statearr_37640_38735[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37630 === (39))){
var state_37629__$1 = state_37629;
var statearr_37644_38737 = state_37629__$1;
(statearr_37644_38737[(2)] = null);

(statearr_37644_38737[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37630 === (4))){
var inst_37497 = (state_37629[(9)]);
var inst_37497__$1 = (state_37629[(2)]);
var inst_37498 = (inst_37497__$1 == null);
var state_37629__$1 = (function (){var statearr_37645 = state_37629;
(statearr_37645[(9)] = inst_37497__$1);

return statearr_37645;
})();
if(cljs.core.truth_(inst_37498)){
var statearr_37646_38744 = state_37629__$1;
(statearr_37646_38744[(1)] = (5));

} else {
var statearr_37647_38745 = state_37629__$1;
(statearr_37647_38745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37630 === (15))){
var inst_37507 = (state_37629[(13)]);
var inst_37506 = (state_37629[(14)]);
var inst_37508 = (state_37629[(15)]);
var inst_37509 = (state_37629[(16)]);
var inst_37524 = (state_37629[(2)]);
var inst_37525 = (inst_37509 + (1));
var tmp37641 = inst_37507;
var tmp37642 = inst_37506;
var tmp37643 = inst_37508;
var inst_37506__$1 = tmp37642;
var inst_37507__$1 = tmp37641;
var inst_37508__$1 = tmp37643;
var inst_37509__$1 = inst_37525;
var state_37629__$1 = (function (){var statearr_37648 = state_37629;
(statearr_37648[(18)] = inst_37524);

(statearr_37648[(13)] = inst_37507__$1);

(statearr_37648[(14)] = inst_37506__$1);

(statearr_37648[(15)] = inst_37508__$1);

(statearr_37648[(16)] = inst_37509__$1);

return statearr_37648;
})();
var statearr_37649_38748 = state_37629__$1;
(statearr_37649_38748[(2)] = null);

(statearr_37649_38748[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37630 === (21))){
var inst_37551 = (state_37629[(2)]);
var state_37629__$1 = state_37629;
var statearr_37653_38751 = state_37629__$1;
(statearr_37653_38751[(2)] = inst_37551);

(statearr_37653_38751[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37630 === (31))){
var inst_37577 = (state_37629[(10)]);
var inst_37581 = done(null);
var inst_37582 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37577);
var state_37629__$1 = (function (){var statearr_37654 = state_37629;
(statearr_37654[(19)] = inst_37581);

return statearr_37654;
})();
var statearr_37655_38754 = state_37629__$1;
(statearr_37655_38754[(2)] = inst_37582);

(statearr_37655_38754[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37630 === (32))){
var inst_37569 = (state_37629[(20)]);
var inst_37570 = (state_37629[(11)]);
var inst_37571 = (state_37629[(21)]);
var inst_37572 = (state_37629[(12)]);
var inst_37584 = (state_37629[(2)]);
var inst_37585 = (inst_37572 + (1));
var tmp37650 = inst_37569;
var tmp37651 = inst_37570;
var tmp37652 = inst_37571;
var inst_37569__$1 = tmp37650;
var inst_37570__$1 = tmp37651;
var inst_37571__$1 = tmp37652;
var inst_37572__$1 = inst_37585;
var state_37629__$1 = (function (){var statearr_37656 = state_37629;
(statearr_37656[(20)] = inst_37569__$1);

(statearr_37656[(11)] = inst_37570__$1);

(statearr_37656[(22)] = inst_37584);

(statearr_37656[(21)] = inst_37571__$1);

(statearr_37656[(12)] = inst_37572__$1);

return statearr_37656;
})();
var statearr_37657_38755 = state_37629__$1;
(statearr_37657_38755[(2)] = null);

(statearr_37657_38755[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37630 === (40))){
var inst_37597 = (state_37629[(23)]);
var inst_37601 = done(null);
var inst_37602 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37597);
var state_37629__$1 = (function (){var statearr_37658 = state_37629;
(statearr_37658[(24)] = inst_37601);

return statearr_37658;
})();
var statearr_37659_38757 = state_37629__$1;
(statearr_37659_38757[(2)] = inst_37602);

(statearr_37659_38757[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37630 === (33))){
var inst_37588 = (state_37629[(25)]);
var inst_37590 = cljs.core.chunked_seq_QMARK_(inst_37588);
var state_37629__$1 = state_37629;
if(inst_37590){
var statearr_37660_38758 = state_37629__$1;
(statearr_37660_38758[(1)] = (36));

} else {
var statearr_37661_38759 = state_37629__$1;
(statearr_37661_38759[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37630 === (13))){
var inst_37518 = (state_37629[(26)]);
var inst_37521 = cljs.core.async.close_BANG_(inst_37518);
var state_37629__$1 = state_37629;
var statearr_37662_38760 = state_37629__$1;
(statearr_37662_38760[(2)] = inst_37521);

(statearr_37662_38760[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37630 === (22))){
var inst_37541 = (state_37629[(8)]);
var inst_37544 = cljs.core.async.close_BANG_(inst_37541);
var state_37629__$1 = state_37629;
var statearr_37663_38761 = state_37629__$1;
(statearr_37663_38761[(2)] = inst_37544);

(statearr_37663_38761[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37630 === (36))){
var inst_37588 = (state_37629[(25)]);
var inst_37592 = cljs.core.chunk_first(inst_37588);
var inst_37593 = cljs.core.chunk_rest(inst_37588);
var inst_37594 = cljs.core.count(inst_37592);
var inst_37569 = inst_37593;
var inst_37570 = inst_37592;
var inst_37571 = inst_37594;
var inst_37572 = (0);
var state_37629__$1 = (function (){var statearr_37664 = state_37629;
(statearr_37664[(20)] = inst_37569);

(statearr_37664[(11)] = inst_37570);

(statearr_37664[(21)] = inst_37571);

(statearr_37664[(12)] = inst_37572);

return statearr_37664;
})();
var statearr_37665_38762 = state_37629__$1;
(statearr_37665_38762[(2)] = null);

(statearr_37665_38762[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37630 === (41))){
var inst_37588 = (state_37629[(25)]);
var inst_37604 = (state_37629[(2)]);
var inst_37605 = cljs.core.next(inst_37588);
var inst_37569 = inst_37605;
var inst_37570 = null;
var inst_37571 = (0);
var inst_37572 = (0);
var state_37629__$1 = (function (){var statearr_37666 = state_37629;
(statearr_37666[(20)] = inst_37569);

(statearr_37666[(27)] = inst_37604);

(statearr_37666[(11)] = inst_37570);

(statearr_37666[(21)] = inst_37571);

(statearr_37666[(12)] = inst_37572);

return statearr_37666;
})();
var statearr_37667_38763 = state_37629__$1;
(statearr_37667_38763[(2)] = null);

(statearr_37667_38763[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37630 === (43))){
var state_37629__$1 = state_37629;
var statearr_37668_38764 = state_37629__$1;
(statearr_37668_38764[(2)] = null);

(statearr_37668_38764[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37630 === (29))){
var inst_37613 = (state_37629[(2)]);
var state_37629__$1 = state_37629;
var statearr_37669_38765 = state_37629__$1;
(statearr_37669_38765[(2)] = inst_37613);

(statearr_37669_38765[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37630 === (44))){
var inst_37622 = (state_37629[(2)]);
var state_37629__$1 = (function (){var statearr_37670 = state_37629;
(statearr_37670[(28)] = inst_37622);

return statearr_37670;
})();
var statearr_37671_38766 = state_37629__$1;
(statearr_37671_38766[(2)] = null);

(statearr_37671_38766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37630 === (6))){
var inst_37561 = (state_37629[(29)]);
var inst_37560 = cljs.core.deref(cs);
var inst_37561__$1 = cljs.core.keys(inst_37560);
var inst_37562 = cljs.core.count(inst_37561__$1);
var inst_37563 = cljs.core.reset_BANG_(dctr,inst_37562);
var inst_37568 = cljs.core.seq(inst_37561__$1);
var inst_37569 = inst_37568;
var inst_37570 = null;
var inst_37571 = (0);
var inst_37572 = (0);
var state_37629__$1 = (function (){var statearr_37672 = state_37629;
(statearr_37672[(30)] = inst_37563);

(statearr_37672[(29)] = inst_37561__$1);

(statearr_37672[(20)] = inst_37569);

(statearr_37672[(11)] = inst_37570);

(statearr_37672[(21)] = inst_37571);

(statearr_37672[(12)] = inst_37572);

return statearr_37672;
})();
var statearr_37673_38767 = state_37629__$1;
(statearr_37673_38767[(2)] = null);

(statearr_37673_38767[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37630 === (28))){
var inst_37588 = (state_37629[(25)]);
var inst_37569 = (state_37629[(20)]);
var inst_37588__$1 = cljs.core.seq(inst_37569);
var state_37629__$1 = (function (){var statearr_37674 = state_37629;
(statearr_37674[(25)] = inst_37588__$1);

return statearr_37674;
})();
if(inst_37588__$1){
var statearr_37675_38768 = state_37629__$1;
(statearr_37675_38768[(1)] = (33));

} else {
var statearr_37676_38769 = state_37629__$1;
(statearr_37676_38769[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37630 === (25))){
var inst_37571 = (state_37629[(21)]);
var inst_37572 = (state_37629[(12)]);
var inst_37574 = (inst_37572 < inst_37571);
var inst_37575 = inst_37574;
var state_37629__$1 = state_37629;
if(cljs.core.truth_(inst_37575)){
var statearr_37677_38770 = state_37629__$1;
(statearr_37677_38770[(1)] = (27));

} else {
var statearr_37678_38771 = state_37629__$1;
(statearr_37678_38771[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37630 === (34))){
var state_37629__$1 = state_37629;
var statearr_37679_38772 = state_37629__$1;
(statearr_37679_38772[(2)] = null);

(statearr_37679_38772[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37630 === (17))){
var state_37629__$1 = state_37629;
var statearr_37680_38773 = state_37629__$1;
(statearr_37680_38773[(2)] = null);

(statearr_37680_38773[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37630 === (3))){
var inst_37627 = (state_37629[(2)]);
var state_37629__$1 = state_37629;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37629__$1,inst_37627);
} else {
if((state_val_37630 === (12))){
var inst_37556 = (state_37629[(2)]);
var state_37629__$1 = state_37629;
var statearr_37681_38774 = state_37629__$1;
(statearr_37681_38774[(2)] = inst_37556);

(statearr_37681_38774[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37630 === (2))){
var state_37629__$1 = state_37629;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37629__$1,(4),ch);
} else {
if((state_val_37630 === (23))){
var state_37629__$1 = state_37629;
var statearr_37682_38775 = state_37629__$1;
(statearr_37682_38775[(2)] = null);

(statearr_37682_38775[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37630 === (35))){
var inst_37611 = (state_37629[(2)]);
var state_37629__$1 = state_37629;
var statearr_37683_38776 = state_37629__$1;
(statearr_37683_38776[(2)] = inst_37611);

(statearr_37683_38776[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37630 === (19))){
var inst_37528 = (state_37629[(7)]);
var inst_37532 = cljs.core.chunk_first(inst_37528);
var inst_37533 = cljs.core.chunk_rest(inst_37528);
var inst_37534 = cljs.core.count(inst_37532);
var inst_37506 = inst_37533;
var inst_37507 = inst_37532;
var inst_37508 = inst_37534;
var inst_37509 = (0);
var state_37629__$1 = (function (){var statearr_37684 = state_37629;
(statearr_37684[(13)] = inst_37507);

(statearr_37684[(14)] = inst_37506);

(statearr_37684[(15)] = inst_37508);

(statearr_37684[(16)] = inst_37509);

return statearr_37684;
})();
var statearr_37685_38777 = state_37629__$1;
(statearr_37685_38777[(2)] = null);

(statearr_37685_38777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37630 === (11))){
var inst_37506 = (state_37629[(14)]);
var inst_37528 = (state_37629[(7)]);
var inst_37528__$1 = cljs.core.seq(inst_37506);
var state_37629__$1 = (function (){var statearr_37686 = state_37629;
(statearr_37686[(7)] = inst_37528__$1);

return statearr_37686;
})();
if(inst_37528__$1){
var statearr_37687_38778 = state_37629__$1;
(statearr_37687_38778[(1)] = (16));

} else {
var statearr_37688_38779 = state_37629__$1;
(statearr_37688_38779[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37630 === (9))){
var inst_37558 = (state_37629[(2)]);
var state_37629__$1 = state_37629;
var statearr_37689_38780 = state_37629__$1;
(statearr_37689_38780[(2)] = inst_37558);

(statearr_37689_38780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37630 === (5))){
var inst_37504 = cljs.core.deref(cs);
var inst_37505 = cljs.core.seq(inst_37504);
var inst_37506 = inst_37505;
var inst_37507 = null;
var inst_37508 = (0);
var inst_37509 = (0);
var state_37629__$1 = (function (){var statearr_37690 = state_37629;
(statearr_37690[(13)] = inst_37507);

(statearr_37690[(14)] = inst_37506);

(statearr_37690[(15)] = inst_37508);

(statearr_37690[(16)] = inst_37509);

return statearr_37690;
})();
var statearr_37691_38781 = state_37629__$1;
(statearr_37691_38781[(2)] = null);

(statearr_37691_38781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37630 === (14))){
var state_37629__$1 = state_37629;
var statearr_37692_38782 = state_37629__$1;
(statearr_37692_38782[(2)] = null);

(statearr_37692_38782[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37630 === (45))){
var inst_37619 = (state_37629[(2)]);
var state_37629__$1 = state_37629;
var statearr_37693_38783 = state_37629__$1;
(statearr_37693_38783[(2)] = inst_37619);

(statearr_37693_38783[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37630 === (26))){
var inst_37561 = (state_37629[(29)]);
var inst_37615 = (state_37629[(2)]);
var inst_37616 = cljs.core.seq(inst_37561);
var state_37629__$1 = (function (){var statearr_37694 = state_37629;
(statearr_37694[(31)] = inst_37615);

return statearr_37694;
})();
if(inst_37616){
var statearr_37695_38784 = state_37629__$1;
(statearr_37695_38784[(1)] = (42));

} else {
var statearr_37696_38785 = state_37629__$1;
(statearr_37696_38785[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37630 === (16))){
var inst_37528 = (state_37629[(7)]);
var inst_37530 = cljs.core.chunked_seq_QMARK_(inst_37528);
var state_37629__$1 = state_37629;
if(inst_37530){
var statearr_37697_38788 = state_37629__$1;
(statearr_37697_38788[(1)] = (19));

} else {
var statearr_37698_38791 = state_37629__$1;
(statearr_37698_38791[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37630 === (38))){
var inst_37608 = (state_37629[(2)]);
var state_37629__$1 = state_37629;
var statearr_37699_38792 = state_37629__$1;
(statearr_37699_38792[(2)] = inst_37608);

(statearr_37699_38792[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37630 === (30))){
var state_37629__$1 = state_37629;
var statearr_37700_38793 = state_37629__$1;
(statearr_37700_38793[(2)] = null);

(statearr_37700_38793[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37630 === (10))){
var inst_37507 = (state_37629[(13)]);
var inst_37509 = (state_37629[(16)]);
var inst_37517 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37507,inst_37509);
var inst_37518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37517,(0),null);
var inst_37519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37517,(1),null);
var state_37629__$1 = (function (){var statearr_37701 = state_37629;
(statearr_37701[(26)] = inst_37518);

return statearr_37701;
})();
if(cljs.core.truth_(inst_37519)){
var statearr_37702_38794 = state_37629__$1;
(statearr_37702_38794[(1)] = (13));

} else {
var statearr_37703_38795 = state_37629__$1;
(statearr_37703_38795[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37630 === (18))){
var inst_37554 = (state_37629[(2)]);
var state_37629__$1 = state_37629;
var statearr_37704_38796 = state_37629__$1;
(statearr_37704_38796[(2)] = inst_37554);

(statearr_37704_38796[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37630 === (42))){
var state_37629__$1 = state_37629;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37629__$1,(45),dchan);
} else {
if((state_val_37630 === (37))){
var inst_37588 = (state_37629[(25)]);
var inst_37497 = (state_37629[(9)]);
var inst_37597 = (state_37629[(23)]);
var inst_37597__$1 = cljs.core.first(inst_37588);
var inst_37598 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37597__$1,inst_37497,done);
var state_37629__$1 = (function (){var statearr_37705 = state_37629;
(statearr_37705[(23)] = inst_37597__$1);

return statearr_37705;
})();
if(cljs.core.truth_(inst_37598)){
var statearr_37706_38798 = state_37629__$1;
(statearr_37706_38798[(1)] = (39));

} else {
var statearr_37707_38800 = state_37629__$1;
(statearr_37707_38800[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37630 === (8))){
var inst_37508 = (state_37629[(15)]);
var inst_37509 = (state_37629[(16)]);
var inst_37511 = (inst_37509 < inst_37508);
var inst_37512 = inst_37511;
var state_37629__$1 = state_37629;
if(cljs.core.truth_(inst_37512)){
var statearr_37708_38801 = state_37629__$1;
(statearr_37708_38801[(1)] = (10));

} else {
var statearr_37709_38802 = state_37629__$1;
(statearr_37709_38802[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__36955__auto__ = null;
var cljs$core$async$mult_$_state_machine__36955__auto____0 = (function (){
var statearr_37710 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37710[(0)] = cljs$core$async$mult_$_state_machine__36955__auto__);

(statearr_37710[(1)] = (1));

return statearr_37710;
});
var cljs$core$async$mult_$_state_machine__36955__auto____1 = (function (state_37629){
while(true){
var ret_value__36956__auto__ = (function (){try{while(true){
var result__36957__auto__ = switch__36954__auto__(state_37629);
if(cljs.core.keyword_identical_QMARK_(result__36957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36957__auto__;
}
break;
}
}catch (e37711){if((e37711 instanceof Object)){
var ex__36958__auto__ = e37711;
var statearr_37712_38810 = state_37629;
(statearr_37712_38810[(5)] = ex__36958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37711;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38811 = state_37629;
state_37629 = G__38811;
continue;
} else {
return ret_value__36956__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__36955__auto__ = function(state_37629){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__36955__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__36955__auto____1.call(this,state_37629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__36955__auto____0;
cljs$core$async$mult_$_state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__36955__auto____1;
return cljs$core$async$mult_$_state_machine__36955__auto__;
})()
})();
var state__37024__auto__ = (function (){var statearr_37713 = (f__37023__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37023__auto__.cljs$core$IFn$_invoke$arity$0() : f__37023__auto__.call(null));
(statearr_37713[(6)] = c__37022__auto___38725);

return statearr_37713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37024__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__37715 = arguments.length;
switch (G__37715) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38816 = arguments.length;
var i__4790__auto___38817 = (0);
while(true){
if((i__4790__auto___38817 < len__4789__auto___38816)){
args__4795__auto__.push((arguments[i__4790__auto___38817]));

var G__38822 = (i__4790__auto___38817 + (1));
i__4790__auto___38817 = G__38822;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37720){
var map__37721 = p__37720;
var map__37721__$1 = (((((!((map__37721 == null))))?(((((map__37721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37721):map__37721);
var opts = map__37721__$1;
var statearr_37723_38829 = state;
(statearr_37723_38829[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_37724_38834 = state;
(statearr_37724_38834[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_37725_38835 = state;
(statearr_37725_38835[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37716){
var G__37717 = cljs.core.first(seq37716);
var seq37716__$1 = cljs.core.next(seq37716);
var G__37718 = cljs.core.first(seq37716__$1);
var seq37716__$2 = cljs.core.next(seq37716__$1);
var G__37719 = cljs.core.first(seq37716__$2);
var seq37716__$3 = cljs.core.next(seq37716__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37717,G__37718,G__37719,seq37716__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37726 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37726 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta37727){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta37727 = meta37727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37728,meta37727__$1){
var self__ = this;
var _37728__$1 = this;
return (new cljs.core.async.t_cljs$core$async37726(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta37727__$1));
}));

(cljs.core.async.t_cljs$core$async37726.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37728){
var self__ = this;
var _37728__$1 = this;
return self__.meta37727;
}));

(cljs.core.async.t_cljs$core$async37726.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37726.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async37726.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37726.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37726.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37726.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37726.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37726.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37726.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta37727","meta37727",-1063632507,null)], null);
}));

(cljs.core.async.t_cljs$core$async37726.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37726.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37726");

(cljs.core.async.t_cljs$core$async37726.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37726");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37726.
 */
cljs.core.async.__GT_t_cljs$core$async37726 = (function cljs$core$async$mix_$___GT_t_cljs$core$async37726(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37727){
return (new cljs.core.async.t_cljs$core$async37726(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37727));
});

}

return (new cljs.core.async.t_cljs$core$async37726(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37022__auto___38839 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37023__auto__ = (function (){var switch__36954__auto__ = (function (state_37830){
var state_val_37831 = (state_37830[(1)]);
if((state_val_37831 === (7))){
var inst_37745 = (state_37830[(2)]);
var state_37830__$1 = state_37830;
var statearr_37832_38840 = state_37830__$1;
(statearr_37832_38840[(2)] = inst_37745);

(statearr_37832_38840[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37831 === (20))){
var inst_37757 = (state_37830[(7)]);
var state_37830__$1 = state_37830;
var statearr_37833_38842 = state_37830__$1;
(statearr_37833_38842[(2)] = inst_37757);

(statearr_37833_38842[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37831 === (27))){
var state_37830__$1 = state_37830;
var statearr_37834_38843 = state_37830__$1;
(statearr_37834_38843[(2)] = null);

(statearr_37834_38843[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37831 === (1))){
var inst_37732 = (state_37830[(8)]);
var inst_37732__$1 = calc_state();
var inst_37734 = (inst_37732__$1 == null);
var inst_37735 = cljs.core.not(inst_37734);
var state_37830__$1 = (function (){var statearr_37835 = state_37830;
(statearr_37835[(8)] = inst_37732__$1);

return statearr_37835;
})();
if(inst_37735){
var statearr_37836_38844 = state_37830__$1;
(statearr_37836_38844[(1)] = (2));

} else {
var statearr_37837_38845 = state_37830__$1;
(statearr_37837_38845[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37831 === (24))){
var inst_37781 = (state_37830[(9)]);
var inst_37790 = (state_37830[(10)]);
var inst_37804 = (state_37830[(11)]);
var inst_37804__$1 = (inst_37781.cljs$core$IFn$_invoke$arity$1 ? inst_37781.cljs$core$IFn$_invoke$arity$1(inst_37790) : inst_37781.call(null,inst_37790));
var state_37830__$1 = (function (){var statearr_37838 = state_37830;
(statearr_37838[(11)] = inst_37804__$1);

return statearr_37838;
})();
if(cljs.core.truth_(inst_37804__$1)){
var statearr_37839_38853 = state_37830__$1;
(statearr_37839_38853[(1)] = (29));

} else {
var statearr_37840_38855 = state_37830__$1;
(statearr_37840_38855[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37831 === (4))){
var inst_37748 = (state_37830[(2)]);
var state_37830__$1 = state_37830;
if(cljs.core.truth_(inst_37748)){
var statearr_37841_38856 = state_37830__$1;
(statearr_37841_38856[(1)] = (8));

} else {
var statearr_37842_38861 = state_37830__$1;
(statearr_37842_38861[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37831 === (15))){
var inst_37775 = (state_37830[(2)]);
var state_37830__$1 = state_37830;
if(cljs.core.truth_(inst_37775)){
var statearr_37843_38864 = state_37830__$1;
(statearr_37843_38864[(1)] = (19));

} else {
var statearr_37844_38866 = state_37830__$1;
(statearr_37844_38866[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37831 === (21))){
var inst_37780 = (state_37830[(12)]);
var inst_37780__$1 = (state_37830[(2)]);
var inst_37781 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37780__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37782 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37780__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37783 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37780__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_37830__$1 = (function (){var statearr_37845 = state_37830;
(statearr_37845[(9)] = inst_37781);

(statearr_37845[(13)] = inst_37782);

(statearr_37845[(12)] = inst_37780__$1);

return statearr_37845;
})();
return cljs.core.async.ioc_alts_BANG_(state_37830__$1,(22),inst_37783);
} else {
if((state_val_37831 === (31))){
var inst_37812 = (state_37830[(2)]);
var state_37830__$1 = state_37830;
if(cljs.core.truth_(inst_37812)){
var statearr_37846_38878 = state_37830__$1;
(statearr_37846_38878[(1)] = (32));

} else {
var statearr_37847_38879 = state_37830__$1;
(statearr_37847_38879[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37831 === (32))){
var inst_37789 = (state_37830[(14)]);
var state_37830__$1 = state_37830;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37830__$1,(35),out,inst_37789);
} else {
if((state_val_37831 === (33))){
var inst_37780 = (state_37830[(12)]);
var inst_37757 = inst_37780;
var state_37830__$1 = (function (){var statearr_37848 = state_37830;
(statearr_37848[(7)] = inst_37757);

return statearr_37848;
})();
var statearr_37849_38880 = state_37830__$1;
(statearr_37849_38880[(2)] = null);

(statearr_37849_38880[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37831 === (13))){
var inst_37757 = (state_37830[(7)]);
var inst_37764 = inst_37757.cljs$lang$protocol_mask$partition0$;
var inst_37765 = (inst_37764 & (64));
var inst_37766 = inst_37757.cljs$core$ISeq$;
var inst_37767 = (cljs.core.PROTOCOL_SENTINEL === inst_37766);
var inst_37768 = ((inst_37765) || (inst_37767));
var state_37830__$1 = state_37830;
if(cljs.core.truth_(inst_37768)){
var statearr_37850_38881 = state_37830__$1;
(statearr_37850_38881[(1)] = (16));

} else {
var statearr_37851_38882 = state_37830__$1;
(statearr_37851_38882[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37831 === (22))){
var inst_37790 = (state_37830[(10)]);
var inst_37789 = (state_37830[(14)]);
var inst_37788 = (state_37830[(2)]);
var inst_37789__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37788,(0),null);
var inst_37790__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37788,(1),null);
var inst_37791 = (inst_37789__$1 == null);
var inst_37792 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37790__$1,change);
var inst_37793 = ((inst_37791) || (inst_37792));
var state_37830__$1 = (function (){var statearr_37852 = state_37830;
(statearr_37852[(10)] = inst_37790__$1);

(statearr_37852[(14)] = inst_37789__$1);

return statearr_37852;
})();
if(cljs.core.truth_(inst_37793)){
var statearr_37853_38883 = state_37830__$1;
(statearr_37853_38883[(1)] = (23));

} else {
var statearr_37854_38884 = state_37830__$1;
(statearr_37854_38884[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37831 === (36))){
var inst_37780 = (state_37830[(12)]);
var inst_37757 = inst_37780;
var state_37830__$1 = (function (){var statearr_37855 = state_37830;
(statearr_37855[(7)] = inst_37757);

return statearr_37855;
})();
var statearr_37856_38885 = state_37830__$1;
(statearr_37856_38885[(2)] = null);

(statearr_37856_38885[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37831 === (29))){
var inst_37804 = (state_37830[(11)]);
var state_37830__$1 = state_37830;
var statearr_37857_38886 = state_37830__$1;
(statearr_37857_38886[(2)] = inst_37804);

(statearr_37857_38886[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37831 === (6))){
var state_37830__$1 = state_37830;
var statearr_37858_38887 = state_37830__$1;
(statearr_37858_38887[(2)] = false);

(statearr_37858_38887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37831 === (28))){
var inst_37800 = (state_37830[(2)]);
var inst_37801 = calc_state();
var inst_37757 = inst_37801;
var state_37830__$1 = (function (){var statearr_37859 = state_37830;
(statearr_37859[(7)] = inst_37757);

(statearr_37859[(15)] = inst_37800);

return statearr_37859;
})();
var statearr_37860_38888 = state_37830__$1;
(statearr_37860_38888[(2)] = null);

(statearr_37860_38888[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37831 === (25))){
var inst_37826 = (state_37830[(2)]);
var state_37830__$1 = state_37830;
var statearr_37861_38889 = state_37830__$1;
(statearr_37861_38889[(2)] = inst_37826);

(statearr_37861_38889[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37831 === (34))){
var inst_37824 = (state_37830[(2)]);
var state_37830__$1 = state_37830;
var statearr_37862_38890 = state_37830__$1;
(statearr_37862_38890[(2)] = inst_37824);

(statearr_37862_38890[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37831 === (17))){
var state_37830__$1 = state_37830;
var statearr_37863_38891 = state_37830__$1;
(statearr_37863_38891[(2)] = false);

(statearr_37863_38891[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37831 === (3))){
var state_37830__$1 = state_37830;
var statearr_37864_38892 = state_37830__$1;
(statearr_37864_38892[(2)] = false);

(statearr_37864_38892[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37831 === (12))){
var inst_37828 = (state_37830[(2)]);
var state_37830__$1 = state_37830;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37830__$1,inst_37828);
} else {
if((state_val_37831 === (2))){
var inst_37732 = (state_37830[(8)]);
var inst_37737 = inst_37732.cljs$lang$protocol_mask$partition0$;
var inst_37738 = (inst_37737 & (64));
var inst_37739 = inst_37732.cljs$core$ISeq$;
var inst_37740 = (cljs.core.PROTOCOL_SENTINEL === inst_37739);
var inst_37741 = ((inst_37738) || (inst_37740));
var state_37830__$1 = state_37830;
if(cljs.core.truth_(inst_37741)){
var statearr_37865_38893 = state_37830__$1;
(statearr_37865_38893[(1)] = (5));

} else {
var statearr_37866_38894 = state_37830__$1;
(statearr_37866_38894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37831 === (23))){
var inst_37789 = (state_37830[(14)]);
var inst_37795 = (inst_37789 == null);
var state_37830__$1 = state_37830;
if(cljs.core.truth_(inst_37795)){
var statearr_37867_38895 = state_37830__$1;
(statearr_37867_38895[(1)] = (26));

} else {
var statearr_37868_38896 = state_37830__$1;
(statearr_37868_38896[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37831 === (35))){
var inst_37815 = (state_37830[(2)]);
var state_37830__$1 = state_37830;
if(cljs.core.truth_(inst_37815)){
var statearr_37869_38897 = state_37830__$1;
(statearr_37869_38897[(1)] = (36));

} else {
var statearr_37870_38898 = state_37830__$1;
(statearr_37870_38898[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37831 === (19))){
var inst_37757 = (state_37830[(7)]);
var inst_37777 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37757);
var state_37830__$1 = state_37830;
var statearr_37871_38899 = state_37830__$1;
(statearr_37871_38899[(2)] = inst_37777);

(statearr_37871_38899[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37831 === (11))){
var inst_37757 = (state_37830[(7)]);
var inst_37761 = (inst_37757 == null);
var inst_37762 = cljs.core.not(inst_37761);
var state_37830__$1 = state_37830;
if(inst_37762){
var statearr_37872_38900 = state_37830__$1;
(statearr_37872_38900[(1)] = (13));

} else {
var statearr_37873_38901 = state_37830__$1;
(statearr_37873_38901[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37831 === (9))){
var inst_37732 = (state_37830[(8)]);
var state_37830__$1 = state_37830;
var statearr_37874_38902 = state_37830__$1;
(statearr_37874_38902[(2)] = inst_37732);

(statearr_37874_38902[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37831 === (5))){
var state_37830__$1 = state_37830;
var statearr_37875_38903 = state_37830__$1;
(statearr_37875_38903[(2)] = true);

(statearr_37875_38903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37831 === (14))){
var state_37830__$1 = state_37830;
var statearr_37876_38904 = state_37830__$1;
(statearr_37876_38904[(2)] = false);

(statearr_37876_38904[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37831 === (26))){
var inst_37790 = (state_37830[(10)]);
var inst_37797 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_37790);
var state_37830__$1 = state_37830;
var statearr_37877_38905 = state_37830__$1;
(statearr_37877_38905[(2)] = inst_37797);

(statearr_37877_38905[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37831 === (16))){
var state_37830__$1 = state_37830;
var statearr_37878_38906 = state_37830__$1;
(statearr_37878_38906[(2)] = true);

(statearr_37878_38906[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37831 === (38))){
var inst_37820 = (state_37830[(2)]);
var state_37830__$1 = state_37830;
var statearr_37879_38907 = state_37830__$1;
(statearr_37879_38907[(2)] = inst_37820);

(statearr_37879_38907[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37831 === (30))){
var inst_37781 = (state_37830[(9)]);
var inst_37782 = (state_37830[(13)]);
var inst_37790 = (state_37830[(10)]);
var inst_37807 = cljs.core.empty_QMARK_(inst_37781);
var inst_37808 = (inst_37782.cljs$core$IFn$_invoke$arity$1 ? inst_37782.cljs$core$IFn$_invoke$arity$1(inst_37790) : inst_37782.call(null,inst_37790));
var inst_37809 = cljs.core.not(inst_37808);
var inst_37810 = ((inst_37807) && (inst_37809));
var state_37830__$1 = state_37830;
var statearr_37880_38908 = state_37830__$1;
(statearr_37880_38908[(2)] = inst_37810);

(statearr_37880_38908[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37831 === (10))){
var inst_37732 = (state_37830[(8)]);
var inst_37753 = (state_37830[(2)]);
var inst_37754 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37753,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37755 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37753,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37756 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37753,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37757 = inst_37732;
var state_37830__$1 = (function (){var statearr_37881 = state_37830;
(statearr_37881[(16)] = inst_37755);

(statearr_37881[(7)] = inst_37757);

(statearr_37881[(17)] = inst_37754);

(statearr_37881[(18)] = inst_37756);

return statearr_37881;
})();
var statearr_37882_38909 = state_37830__$1;
(statearr_37882_38909[(2)] = null);

(statearr_37882_38909[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37831 === (18))){
var inst_37772 = (state_37830[(2)]);
var state_37830__$1 = state_37830;
var statearr_37883_38910 = state_37830__$1;
(statearr_37883_38910[(2)] = inst_37772);

(statearr_37883_38910[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37831 === (37))){
var state_37830__$1 = state_37830;
var statearr_37884_38911 = state_37830__$1;
(statearr_37884_38911[(2)] = null);

(statearr_37884_38911[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37831 === (8))){
var inst_37732 = (state_37830[(8)]);
var inst_37750 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37732);
var state_37830__$1 = state_37830;
var statearr_37885_38912 = state_37830__$1;
(statearr_37885_38912[(2)] = inst_37750);

(statearr_37885_38912[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__36955__auto__ = null;
var cljs$core$async$mix_$_state_machine__36955__auto____0 = (function (){
var statearr_37886 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37886[(0)] = cljs$core$async$mix_$_state_machine__36955__auto__);

(statearr_37886[(1)] = (1));

return statearr_37886;
});
var cljs$core$async$mix_$_state_machine__36955__auto____1 = (function (state_37830){
while(true){
var ret_value__36956__auto__ = (function (){try{while(true){
var result__36957__auto__ = switch__36954__auto__(state_37830);
if(cljs.core.keyword_identical_QMARK_(result__36957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36957__auto__;
}
break;
}
}catch (e37887){if((e37887 instanceof Object)){
var ex__36958__auto__ = e37887;
var statearr_37888_38913 = state_37830;
(statearr_37888_38913[(5)] = ex__36958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37887;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38914 = state_37830;
state_37830 = G__38914;
continue;
} else {
return ret_value__36956__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__36955__auto__ = function(state_37830){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__36955__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__36955__auto____1.call(this,state_37830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__36955__auto____0;
cljs$core$async$mix_$_state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__36955__auto____1;
return cljs$core$async$mix_$_state_machine__36955__auto__;
})()
})();
var state__37024__auto__ = (function (){var statearr_37889 = (f__37023__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37023__auto__.cljs$core$IFn$_invoke$arity$0() : f__37023__auto__.call(null));
(statearr_37889[(6)] = c__37022__auto___38839);

return statearr_37889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37024__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__37891 = arguments.length;
switch (G__37891) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__37894 = arguments.length;
switch (G__37894) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__37892_SHARP_){
if(cljs.core.truth_((p1__37892_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37892_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__37892_SHARP_.call(null,topic)))){
return p1__37892_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37892_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37895 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37895 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta37896){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37896 = meta37896;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37895.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37897,meta37896__$1){
var self__ = this;
var _37897__$1 = this;
return (new cljs.core.async.t_cljs$core$async37895(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37896__$1));
}));

(cljs.core.async.t_cljs$core$async37895.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37897){
var self__ = this;
var _37897__$1 = this;
return self__.meta37896;
}));

(cljs.core.async.t_cljs$core$async37895.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37895.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async37895.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37895.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async37895.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async37895.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async37895.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async37895.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta37896","meta37896",274901356,null)], null);
}));

(cljs.core.async.t_cljs$core$async37895.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37895.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37895");

(cljs.core.async.t_cljs$core$async37895.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37895");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37895.
 */
cljs.core.async.__GT_t_cljs$core$async37895 = (function cljs$core$async$__GT_t_cljs$core$async37895(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37896){
return (new cljs.core.async.t_cljs$core$async37895(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37896));
});

}

return (new cljs.core.async.t_cljs$core$async37895(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37022__auto___38917 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37023__auto__ = (function (){var switch__36954__auto__ = (function (state_37969){
var state_val_37970 = (state_37969[(1)]);
if((state_val_37970 === (7))){
var inst_37965 = (state_37969[(2)]);
var state_37969__$1 = state_37969;
var statearr_37971_38918 = state_37969__$1;
(statearr_37971_38918[(2)] = inst_37965);

(statearr_37971_38918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37970 === (20))){
var state_37969__$1 = state_37969;
var statearr_37972_38919 = state_37969__$1;
(statearr_37972_38919[(2)] = null);

(statearr_37972_38919[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37970 === (1))){
var state_37969__$1 = state_37969;
var statearr_37973_38920 = state_37969__$1;
(statearr_37973_38920[(2)] = null);

(statearr_37973_38920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37970 === (24))){
var inst_37948 = (state_37969[(7)]);
var inst_37957 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_37948);
var state_37969__$1 = state_37969;
var statearr_37974_38921 = state_37969__$1;
(statearr_37974_38921[(2)] = inst_37957);

(statearr_37974_38921[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37970 === (4))){
var inst_37900 = (state_37969[(8)]);
var inst_37900__$1 = (state_37969[(2)]);
var inst_37901 = (inst_37900__$1 == null);
var state_37969__$1 = (function (){var statearr_37975 = state_37969;
(statearr_37975[(8)] = inst_37900__$1);

return statearr_37975;
})();
if(cljs.core.truth_(inst_37901)){
var statearr_37976_38922 = state_37969__$1;
(statearr_37976_38922[(1)] = (5));

} else {
var statearr_37977_38923 = state_37969__$1;
(statearr_37977_38923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37970 === (15))){
var inst_37942 = (state_37969[(2)]);
var state_37969__$1 = state_37969;
var statearr_37978_38924 = state_37969__$1;
(statearr_37978_38924[(2)] = inst_37942);

(statearr_37978_38924[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37970 === (21))){
var inst_37962 = (state_37969[(2)]);
var state_37969__$1 = (function (){var statearr_37979 = state_37969;
(statearr_37979[(9)] = inst_37962);

return statearr_37979;
})();
var statearr_37980_38925 = state_37969__$1;
(statearr_37980_38925[(2)] = null);

(statearr_37980_38925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37970 === (13))){
var inst_37924 = (state_37969[(10)]);
var inst_37926 = cljs.core.chunked_seq_QMARK_(inst_37924);
var state_37969__$1 = state_37969;
if(inst_37926){
var statearr_37981_38926 = state_37969__$1;
(statearr_37981_38926[(1)] = (16));

} else {
var statearr_37982_38927 = state_37969__$1;
(statearr_37982_38927[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37970 === (22))){
var inst_37954 = (state_37969[(2)]);
var state_37969__$1 = state_37969;
if(cljs.core.truth_(inst_37954)){
var statearr_37983_38928 = state_37969__$1;
(statearr_37983_38928[(1)] = (23));

} else {
var statearr_37984_38929 = state_37969__$1;
(statearr_37984_38929[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37970 === (6))){
var inst_37900 = (state_37969[(8)]);
var inst_37950 = (state_37969[(11)]);
var inst_37948 = (state_37969[(7)]);
var inst_37948__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_37900) : topic_fn.call(null,inst_37900));
var inst_37949 = cljs.core.deref(mults);
var inst_37950__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37949,inst_37948__$1);
var state_37969__$1 = (function (){var statearr_37985 = state_37969;
(statearr_37985[(11)] = inst_37950__$1);

(statearr_37985[(7)] = inst_37948__$1);

return statearr_37985;
})();
if(cljs.core.truth_(inst_37950__$1)){
var statearr_37986_38931 = state_37969__$1;
(statearr_37986_38931[(1)] = (19));

} else {
var statearr_37987_38933 = state_37969__$1;
(statearr_37987_38933[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37970 === (25))){
var inst_37959 = (state_37969[(2)]);
var state_37969__$1 = state_37969;
var statearr_37988_38934 = state_37969__$1;
(statearr_37988_38934[(2)] = inst_37959);

(statearr_37988_38934[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37970 === (17))){
var inst_37924 = (state_37969[(10)]);
var inst_37933 = cljs.core.first(inst_37924);
var inst_37934 = cljs.core.async.muxch_STAR_(inst_37933);
var inst_37935 = cljs.core.async.close_BANG_(inst_37934);
var inst_37936 = cljs.core.next(inst_37924);
var inst_37910 = inst_37936;
var inst_37911 = null;
var inst_37912 = (0);
var inst_37913 = (0);
var state_37969__$1 = (function (){var statearr_37989 = state_37969;
(statearr_37989[(12)] = inst_37912);

(statearr_37989[(13)] = inst_37935);

(statearr_37989[(14)] = inst_37910);

(statearr_37989[(15)] = inst_37911);

(statearr_37989[(16)] = inst_37913);

return statearr_37989;
})();
var statearr_37990_38935 = state_37969__$1;
(statearr_37990_38935[(2)] = null);

(statearr_37990_38935[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37970 === (3))){
var inst_37967 = (state_37969[(2)]);
var state_37969__$1 = state_37969;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37969__$1,inst_37967);
} else {
if((state_val_37970 === (12))){
var inst_37944 = (state_37969[(2)]);
var state_37969__$1 = state_37969;
var statearr_37991_38936 = state_37969__$1;
(statearr_37991_38936[(2)] = inst_37944);

(statearr_37991_38936[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37970 === (2))){
var state_37969__$1 = state_37969;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37969__$1,(4),ch);
} else {
if((state_val_37970 === (23))){
var state_37969__$1 = state_37969;
var statearr_37992_38937 = state_37969__$1;
(statearr_37992_38937[(2)] = null);

(statearr_37992_38937[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37970 === (19))){
var inst_37900 = (state_37969[(8)]);
var inst_37950 = (state_37969[(11)]);
var inst_37952 = cljs.core.async.muxch_STAR_(inst_37950);
var state_37969__$1 = state_37969;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37969__$1,(22),inst_37952,inst_37900);
} else {
if((state_val_37970 === (11))){
var inst_37910 = (state_37969[(14)]);
var inst_37924 = (state_37969[(10)]);
var inst_37924__$1 = cljs.core.seq(inst_37910);
var state_37969__$1 = (function (){var statearr_37993 = state_37969;
(statearr_37993[(10)] = inst_37924__$1);

return statearr_37993;
})();
if(inst_37924__$1){
var statearr_37994_38940 = state_37969__$1;
(statearr_37994_38940[(1)] = (13));

} else {
var statearr_37995_38941 = state_37969__$1;
(statearr_37995_38941[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37970 === (9))){
var inst_37946 = (state_37969[(2)]);
var state_37969__$1 = state_37969;
var statearr_37996_38942 = state_37969__$1;
(statearr_37996_38942[(2)] = inst_37946);

(statearr_37996_38942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37970 === (5))){
var inst_37907 = cljs.core.deref(mults);
var inst_37908 = cljs.core.vals(inst_37907);
var inst_37909 = cljs.core.seq(inst_37908);
var inst_37910 = inst_37909;
var inst_37911 = null;
var inst_37912 = (0);
var inst_37913 = (0);
var state_37969__$1 = (function (){var statearr_37997 = state_37969;
(statearr_37997[(12)] = inst_37912);

(statearr_37997[(14)] = inst_37910);

(statearr_37997[(15)] = inst_37911);

(statearr_37997[(16)] = inst_37913);

return statearr_37997;
})();
var statearr_37998_38943 = state_37969__$1;
(statearr_37998_38943[(2)] = null);

(statearr_37998_38943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37970 === (14))){
var state_37969__$1 = state_37969;
var statearr_38002_38944 = state_37969__$1;
(statearr_38002_38944[(2)] = null);

(statearr_38002_38944[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37970 === (16))){
var inst_37924 = (state_37969[(10)]);
var inst_37928 = cljs.core.chunk_first(inst_37924);
var inst_37929 = cljs.core.chunk_rest(inst_37924);
var inst_37930 = cljs.core.count(inst_37928);
var inst_37910 = inst_37929;
var inst_37911 = inst_37928;
var inst_37912 = inst_37930;
var inst_37913 = (0);
var state_37969__$1 = (function (){var statearr_38003 = state_37969;
(statearr_38003[(12)] = inst_37912);

(statearr_38003[(14)] = inst_37910);

(statearr_38003[(15)] = inst_37911);

(statearr_38003[(16)] = inst_37913);

return statearr_38003;
})();
var statearr_38004_38947 = state_37969__$1;
(statearr_38004_38947[(2)] = null);

(statearr_38004_38947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37970 === (10))){
var inst_37912 = (state_37969[(12)]);
var inst_37910 = (state_37969[(14)]);
var inst_37911 = (state_37969[(15)]);
var inst_37913 = (state_37969[(16)]);
var inst_37918 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37911,inst_37913);
var inst_37919 = cljs.core.async.muxch_STAR_(inst_37918);
var inst_37920 = cljs.core.async.close_BANG_(inst_37919);
var inst_37921 = (inst_37913 + (1));
var tmp37999 = inst_37912;
var tmp38000 = inst_37910;
var tmp38001 = inst_37911;
var inst_37910__$1 = tmp38000;
var inst_37911__$1 = tmp38001;
var inst_37912__$1 = tmp37999;
var inst_37913__$1 = inst_37921;
var state_37969__$1 = (function (){var statearr_38005 = state_37969;
(statearr_38005[(12)] = inst_37912__$1);

(statearr_38005[(14)] = inst_37910__$1);

(statearr_38005[(15)] = inst_37911__$1);

(statearr_38005[(17)] = inst_37920);

(statearr_38005[(16)] = inst_37913__$1);

return statearr_38005;
})();
var statearr_38006_38948 = state_37969__$1;
(statearr_38006_38948[(2)] = null);

(statearr_38006_38948[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37970 === (18))){
var inst_37939 = (state_37969[(2)]);
var state_37969__$1 = state_37969;
var statearr_38007_38949 = state_37969__$1;
(statearr_38007_38949[(2)] = inst_37939);

(statearr_38007_38949[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37970 === (8))){
var inst_37912 = (state_37969[(12)]);
var inst_37913 = (state_37969[(16)]);
var inst_37915 = (inst_37913 < inst_37912);
var inst_37916 = inst_37915;
var state_37969__$1 = state_37969;
if(cljs.core.truth_(inst_37916)){
var statearr_38008_38950 = state_37969__$1;
(statearr_38008_38950[(1)] = (10));

} else {
var statearr_38009_38952 = state_37969__$1;
(statearr_38009_38952[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36955__auto__ = null;
var cljs$core$async$state_machine__36955__auto____0 = (function (){
var statearr_38010 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38010[(0)] = cljs$core$async$state_machine__36955__auto__);

(statearr_38010[(1)] = (1));

return statearr_38010;
});
var cljs$core$async$state_machine__36955__auto____1 = (function (state_37969){
while(true){
var ret_value__36956__auto__ = (function (){try{while(true){
var result__36957__auto__ = switch__36954__auto__(state_37969);
if(cljs.core.keyword_identical_QMARK_(result__36957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36957__auto__;
}
break;
}
}catch (e38011){if((e38011 instanceof Object)){
var ex__36958__auto__ = e38011;
var statearr_38012_38954 = state_37969;
(statearr_38012_38954[(5)] = ex__36958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38011;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38955 = state_37969;
state_37969 = G__38955;
continue;
} else {
return ret_value__36956__auto__;
}
break;
}
});
cljs$core$async$state_machine__36955__auto__ = function(state_37969){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36955__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36955__auto____1.call(this,state_37969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36955__auto____0;
cljs$core$async$state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36955__auto____1;
return cljs$core$async$state_machine__36955__auto__;
})()
})();
var state__37024__auto__ = (function (){var statearr_38013 = (f__37023__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37023__auto__.cljs$core$IFn$_invoke$arity$0() : f__37023__auto__.call(null));
(statearr_38013[(6)] = c__37022__auto___38917);

return statearr_38013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37024__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__38015 = arguments.length;
switch (G__38015) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__38017 = arguments.length;
switch (G__38017) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__38019 = arguments.length;
switch (G__38019) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__37022__auto___38961 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37023__auto__ = (function (){var switch__36954__auto__ = (function (state_38058){
var state_val_38059 = (state_38058[(1)]);
if((state_val_38059 === (7))){
var state_38058__$1 = state_38058;
var statearr_38060_38962 = state_38058__$1;
(statearr_38060_38962[(2)] = null);

(statearr_38060_38962[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38059 === (1))){
var state_38058__$1 = state_38058;
var statearr_38061_38963 = state_38058__$1;
(statearr_38061_38963[(2)] = null);

(statearr_38061_38963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38059 === (4))){
var inst_38022 = (state_38058[(7)]);
var inst_38024 = (inst_38022 < cnt);
var state_38058__$1 = state_38058;
if(cljs.core.truth_(inst_38024)){
var statearr_38062_38964 = state_38058__$1;
(statearr_38062_38964[(1)] = (6));

} else {
var statearr_38063_38965 = state_38058__$1;
(statearr_38063_38965[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38059 === (15))){
var inst_38054 = (state_38058[(2)]);
var state_38058__$1 = state_38058;
var statearr_38064_38966 = state_38058__$1;
(statearr_38064_38966[(2)] = inst_38054);

(statearr_38064_38966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38059 === (13))){
var inst_38047 = cljs.core.async.close_BANG_(out);
var state_38058__$1 = state_38058;
var statearr_38065_38967 = state_38058__$1;
(statearr_38065_38967[(2)] = inst_38047);

(statearr_38065_38967[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38059 === (6))){
var state_38058__$1 = state_38058;
var statearr_38066_38968 = state_38058__$1;
(statearr_38066_38968[(2)] = null);

(statearr_38066_38968[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38059 === (3))){
var inst_38056 = (state_38058[(2)]);
var state_38058__$1 = state_38058;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38058__$1,inst_38056);
} else {
if((state_val_38059 === (12))){
var inst_38044 = (state_38058[(8)]);
var inst_38044__$1 = (state_38058[(2)]);
var inst_38045 = cljs.core.some(cljs.core.nil_QMARK_,inst_38044__$1);
var state_38058__$1 = (function (){var statearr_38067 = state_38058;
(statearr_38067[(8)] = inst_38044__$1);

return statearr_38067;
})();
if(cljs.core.truth_(inst_38045)){
var statearr_38068_38969 = state_38058__$1;
(statearr_38068_38969[(1)] = (13));

} else {
var statearr_38069_38970 = state_38058__$1;
(statearr_38069_38970[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38059 === (2))){
var inst_38021 = cljs.core.reset_BANG_(dctr,cnt);
var inst_38022 = (0);
var state_38058__$1 = (function (){var statearr_38070 = state_38058;
(statearr_38070[(9)] = inst_38021);

(statearr_38070[(7)] = inst_38022);

return statearr_38070;
})();
var statearr_38071_38971 = state_38058__$1;
(statearr_38071_38971[(2)] = null);

(statearr_38071_38971[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38059 === (11))){
var inst_38022 = (state_38058[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_38058,(10),Object,null,(9));
var inst_38031 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_38022) : chs__$1.call(null,inst_38022));
var inst_38032 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_38022) : done.call(null,inst_38022));
var inst_38033 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_38031,inst_38032);
var state_38058__$1 = state_38058;
var statearr_38072_38972 = state_38058__$1;
(statearr_38072_38972[(2)] = inst_38033);


cljs.core.async.impl.ioc_helpers.process_exception(state_38058__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38059 === (9))){
var inst_38022 = (state_38058[(7)]);
var inst_38035 = (state_38058[(2)]);
var inst_38036 = (inst_38022 + (1));
var inst_38022__$1 = inst_38036;
var state_38058__$1 = (function (){var statearr_38073 = state_38058;
(statearr_38073[(7)] = inst_38022__$1);

(statearr_38073[(10)] = inst_38035);

return statearr_38073;
})();
var statearr_38074_38973 = state_38058__$1;
(statearr_38074_38973[(2)] = null);

(statearr_38074_38973[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38059 === (5))){
var inst_38042 = (state_38058[(2)]);
var state_38058__$1 = (function (){var statearr_38075 = state_38058;
(statearr_38075[(11)] = inst_38042);

return statearr_38075;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38058__$1,(12),dchan);
} else {
if((state_val_38059 === (14))){
var inst_38044 = (state_38058[(8)]);
var inst_38049 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_38044);
var state_38058__$1 = state_38058;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38058__$1,(16),out,inst_38049);
} else {
if((state_val_38059 === (16))){
var inst_38051 = (state_38058[(2)]);
var state_38058__$1 = (function (){var statearr_38076 = state_38058;
(statearr_38076[(12)] = inst_38051);

return statearr_38076;
})();
var statearr_38077_38974 = state_38058__$1;
(statearr_38077_38974[(2)] = null);

(statearr_38077_38974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38059 === (10))){
var inst_38026 = (state_38058[(2)]);
var inst_38027 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_38058__$1 = (function (){var statearr_38078 = state_38058;
(statearr_38078[(13)] = inst_38026);

return statearr_38078;
})();
var statearr_38079_38975 = state_38058__$1;
(statearr_38079_38975[(2)] = inst_38027);


cljs.core.async.impl.ioc_helpers.process_exception(state_38058__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38059 === (8))){
var inst_38040 = (state_38058[(2)]);
var state_38058__$1 = state_38058;
var statearr_38080_38976 = state_38058__$1;
(statearr_38080_38976[(2)] = inst_38040);

(statearr_38080_38976[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36955__auto__ = null;
var cljs$core$async$state_machine__36955__auto____0 = (function (){
var statearr_38081 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38081[(0)] = cljs$core$async$state_machine__36955__auto__);

(statearr_38081[(1)] = (1));

return statearr_38081;
});
var cljs$core$async$state_machine__36955__auto____1 = (function (state_38058){
while(true){
var ret_value__36956__auto__ = (function (){try{while(true){
var result__36957__auto__ = switch__36954__auto__(state_38058);
if(cljs.core.keyword_identical_QMARK_(result__36957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36957__auto__;
}
break;
}
}catch (e38082){if((e38082 instanceof Object)){
var ex__36958__auto__ = e38082;
var statearr_38083_38977 = state_38058;
(statearr_38083_38977[(5)] = ex__36958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38082;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38978 = state_38058;
state_38058 = G__38978;
continue;
} else {
return ret_value__36956__auto__;
}
break;
}
});
cljs$core$async$state_machine__36955__auto__ = function(state_38058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36955__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36955__auto____1.call(this,state_38058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36955__auto____0;
cljs$core$async$state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36955__auto____1;
return cljs$core$async$state_machine__36955__auto__;
})()
})();
var state__37024__auto__ = (function (){var statearr_38084 = (f__37023__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37023__auto__.cljs$core$IFn$_invoke$arity$0() : f__37023__auto__.call(null));
(statearr_38084[(6)] = c__37022__auto___38961);

return statearr_38084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37024__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__38087 = arguments.length;
switch (G__38087) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37022__auto___38981 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37023__auto__ = (function (){var switch__36954__auto__ = (function (state_38119){
var state_val_38120 = (state_38119[(1)]);
if((state_val_38120 === (7))){
var inst_38098 = (state_38119[(7)]);
var inst_38099 = (state_38119[(8)]);
var inst_38098__$1 = (state_38119[(2)]);
var inst_38099__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38098__$1,(0),null);
var inst_38100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38098__$1,(1),null);
var inst_38101 = (inst_38099__$1 == null);
var state_38119__$1 = (function (){var statearr_38121 = state_38119;
(statearr_38121[(9)] = inst_38100);

(statearr_38121[(7)] = inst_38098__$1);

(statearr_38121[(8)] = inst_38099__$1);

return statearr_38121;
})();
if(cljs.core.truth_(inst_38101)){
var statearr_38122_38983 = state_38119__$1;
(statearr_38122_38983[(1)] = (8));

} else {
var statearr_38123_38984 = state_38119__$1;
(statearr_38123_38984[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38120 === (1))){
var inst_38088 = cljs.core.vec(chs);
var inst_38089 = inst_38088;
var state_38119__$1 = (function (){var statearr_38124 = state_38119;
(statearr_38124[(10)] = inst_38089);

return statearr_38124;
})();
var statearr_38125_38985 = state_38119__$1;
(statearr_38125_38985[(2)] = null);

(statearr_38125_38985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38120 === (4))){
var inst_38089 = (state_38119[(10)]);
var state_38119__$1 = state_38119;
return cljs.core.async.ioc_alts_BANG_(state_38119__$1,(7),inst_38089);
} else {
if((state_val_38120 === (6))){
var inst_38115 = (state_38119[(2)]);
var state_38119__$1 = state_38119;
var statearr_38126_38989 = state_38119__$1;
(statearr_38126_38989[(2)] = inst_38115);

(statearr_38126_38989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38120 === (3))){
var inst_38117 = (state_38119[(2)]);
var state_38119__$1 = state_38119;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38119__$1,inst_38117);
} else {
if((state_val_38120 === (2))){
var inst_38089 = (state_38119[(10)]);
var inst_38091 = cljs.core.count(inst_38089);
var inst_38092 = (inst_38091 > (0));
var state_38119__$1 = state_38119;
if(cljs.core.truth_(inst_38092)){
var statearr_38128_38990 = state_38119__$1;
(statearr_38128_38990[(1)] = (4));

} else {
var statearr_38129_38991 = state_38119__$1;
(statearr_38129_38991[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38120 === (11))){
var inst_38089 = (state_38119[(10)]);
var inst_38108 = (state_38119[(2)]);
var tmp38127 = inst_38089;
var inst_38089__$1 = tmp38127;
var state_38119__$1 = (function (){var statearr_38130 = state_38119;
(statearr_38130[(11)] = inst_38108);

(statearr_38130[(10)] = inst_38089__$1);

return statearr_38130;
})();
var statearr_38131_38993 = state_38119__$1;
(statearr_38131_38993[(2)] = null);

(statearr_38131_38993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38120 === (9))){
var inst_38099 = (state_38119[(8)]);
var state_38119__$1 = state_38119;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38119__$1,(11),out,inst_38099);
} else {
if((state_val_38120 === (5))){
var inst_38113 = cljs.core.async.close_BANG_(out);
var state_38119__$1 = state_38119;
var statearr_38132_38994 = state_38119__$1;
(statearr_38132_38994[(2)] = inst_38113);

(statearr_38132_38994[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38120 === (10))){
var inst_38111 = (state_38119[(2)]);
var state_38119__$1 = state_38119;
var statearr_38133_38995 = state_38119__$1;
(statearr_38133_38995[(2)] = inst_38111);

(statearr_38133_38995[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38120 === (8))){
var inst_38100 = (state_38119[(9)]);
var inst_38098 = (state_38119[(7)]);
var inst_38099 = (state_38119[(8)]);
var inst_38089 = (state_38119[(10)]);
var inst_38103 = (function (){var cs = inst_38089;
var vec__38094 = inst_38098;
var v = inst_38099;
var c = inst_38100;
return (function (p1__38085_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__38085_SHARP_);
});
})();
var inst_38104 = cljs.core.filterv(inst_38103,inst_38089);
var inst_38089__$1 = inst_38104;
var state_38119__$1 = (function (){var statearr_38134 = state_38119;
(statearr_38134[(10)] = inst_38089__$1);

return statearr_38134;
})();
var statearr_38135_38999 = state_38119__$1;
(statearr_38135_38999[(2)] = null);

(statearr_38135_38999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36955__auto__ = null;
var cljs$core$async$state_machine__36955__auto____0 = (function (){
var statearr_38136 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38136[(0)] = cljs$core$async$state_machine__36955__auto__);

(statearr_38136[(1)] = (1));

return statearr_38136;
});
var cljs$core$async$state_machine__36955__auto____1 = (function (state_38119){
while(true){
var ret_value__36956__auto__ = (function (){try{while(true){
var result__36957__auto__ = switch__36954__auto__(state_38119);
if(cljs.core.keyword_identical_QMARK_(result__36957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36957__auto__;
}
break;
}
}catch (e38137){if((e38137 instanceof Object)){
var ex__36958__auto__ = e38137;
var statearr_38138_39000 = state_38119;
(statearr_38138_39000[(5)] = ex__36958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38137;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39001 = state_38119;
state_38119 = G__39001;
continue;
} else {
return ret_value__36956__auto__;
}
break;
}
});
cljs$core$async$state_machine__36955__auto__ = function(state_38119){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36955__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36955__auto____1.call(this,state_38119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36955__auto____0;
cljs$core$async$state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36955__auto____1;
return cljs$core$async$state_machine__36955__auto__;
})()
})();
var state__37024__auto__ = (function (){var statearr_38139 = (f__37023__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37023__auto__.cljs$core$IFn$_invoke$arity$0() : f__37023__auto__.call(null));
(statearr_38139[(6)] = c__37022__auto___38981);

return statearr_38139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37024__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__38141 = arguments.length;
switch (G__38141) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37022__auto___39003 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37023__auto__ = (function (){var switch__36954__auto__ = (function (state_38165){
var state_val_38166 = (state_38165[(1)]);
if((state_val_38166 === (7))){
var inst_38147 = (state_38165[(7)]);
var inst_38147__$1 = (state_38165[(2)]);
var inst_38148 = (inst_38147__$1 == null);
var inst_38149 = cljs.core.not(inst_38148);
var state_38165__$1 = (function (){var statearr_38167 = state_38165;
(statearr_38167[(7)] = inst_38147__$1);

return statearr_38167;
})();
if(inst_38149){
var statearr_38168_39004 = state_38165__$1;
(statearr_38168_39004[(1)] = (8));

} else {
var statearr_38169_39005 = state_38165__$1;
(statearr_38169_39005[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38166 === (1))){
var inst_38142 = (0);
var state_38165__$1 = (function (){var statearr_38170 = state_38165;
(statearr_38170[(8)] = inst_38142);

return statearr_38170;
})();
var statearr_38171_39006 = state_38165__$1;
(statearr_38171_39006[(2)] = null);

(statearr_38171_39006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38166 === (4))){
var state_38165__$1 = state_38165;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38165__$1,(7),ch);
} else {
if((state_val_38166 === (6))){
var inst_38160 = (state_38165[(2)]);
var state_38165__$1 = state_38165;
var statearr_38172_39007 = state_38165__$1;
(statearr_38172_39007[(2)] = inst_38160);

(statearr_38172_39007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38166 === (3))){
var inst_38162 = (state_38165[(2)]);
var inst_38163 = cljs.core.async.close_BANG_(out);
var state_38165__$1 = (function (){var statearr_38173 = state_38165;
(statearr_38173[(9)] = inst_38162);

return statearr_38173;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38165__$1,inst_38163);
} else {
if((state_val_38166 === (2))){
var inst_38142 = (state_38165[(8)]);
var inst_38144 = (inst_38142 < n);
var state_38165__$1 = state_38165;
if(cljs.core.truth_(inst_38144)){
var statearr_38174_39008 = state_38165__$1;
(statearr_38174_39008[(1)] = (4));

} else {
var statearr_38175_39009 = state_38165__$1;
(statearr_38175_39009[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38166 === (11))){
var inst_38142 = (state_38165[(8)]);
var inst_38152 = (state_38165[(2)]);
var inst_38153 = (inst_38142 + (1));
var inst_38142__$1 = inst_38153;
var state_38165__$1 = (function (){var statearr_38176 = state_38165;
(statearr_38176[(10)] = inst_38152);

(statearr_38176[(8)] = inst_38142__$1);

return statearr_38176;
})();
var statearr_38177_39010 = state_38165__$1;
(statearr_38177_39010[(2)] = null);

(statearr_38177_39010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38166 === (9))){
var state_38165__$1 = state_38165;
var statearr_38178_39011 = state_38165__$1;
(statearr_38178_39011[(2)] = null);

(statearr_38178_39011[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38166 === (5))){
var state_38165__$1 = state_38165;
var statearr_38179_39012 = state_38165__$1;
(statearr_38179_39012[(2)] = null);

(statearr_38179_39012[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38166 === (10))){
var inst_38157 = (state_38165[(2)]);
var state_38165__$1 = state_38165;
var statearr_38180_39013 = state_38165__$1;
(statearr_38180_39013[(2)] = inst_38157);

(statearr_38180_39013[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38166 === (8))){
var inst_38147 = (state_38165[(7)]);
var state_38165__$1 = state_38165;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38165__$1,(11),out,inst_38147);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36955__auto__ = null;
var cljs$core$async$state_machine__36955__auto____0 = (function (){
var statearr_38181 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38181[(0)] = cljs$core$async$state_machine__36955__auto__);

(statearr_38181[(1)] = (1));

return statearr_38181;
});
var cljs$core$async$state_machine__36955__auto____1 = (function (state_38165){
while(true){
var ret_value__36956__auto__ = (function (){try{while(true){
var result__36957__auto__ = switch__36954__auto__(state_38165);
if(cljs.core.keyword_identical_QMARK_(result__36957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36957__auto__;
}
break;
}
}catch (e38182){if((e38182 instanceof Object)){
var ex__36958__auto__ = e38182;
var statearr_38183_39014 = state_38165;
(statearr_38183_39014[(5)] = ex__36958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38182;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39015 = state_38165;
state_38165 = G__39015;
continue;
} else {
return ret_value__36956__auto__;
}
break;
}
});
cljs$core$async$state_machine__36955__auto__ = function(state_38165){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36955__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36955__auto____1.call(this,state_38165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36955__auto____0;
cljs$core$async$state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36955__auto____1;
return cljs$core$async$state_machine__36955__auto__;
})()
})();
var state__37024__auto__ = (function (){var statearr_38184 = (f__37023__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37023__auto__.cljs$core$IFn$_invoke$arity$0() : f__37023__auto__.call(null));
(statearr_38184[(6)] = c__37022__auto___39003);

return statearr_38184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37024__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38186 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38186 = (function (f,ch,meta38187){
this.f = f;
this.ch = ch;
this.meta38187 = meta38187;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38188,meta38187__$1){
var self__ = this;
var _38188__$1 = this;
return (new cljs.core.async.t_cljs$core$async38186(self__.f,self__.ch,meta38187__$1));
}));

(cljs.core.async.t_cljs$core$async38186.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38188){
var self__ = this;
var _38188__$1 = this;
return self__.meta38187;
}));

(cljs.core.async.t_cljs$core$async38186.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38186.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38186.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38186.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38186.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38189 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38189 = (function (f,ch,meta38187,_,fn1,meta38190){
this.f = f;
this.ch = ch;
this.meta38187 = meta38187;
this._ = _;
this.fn1 = fn1;
this.meta38190 = meta38190;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38191,meta38190__$1){
var self__ = this;
var _38191__$1 = this;
return (new cljs.core.async.t_cljs$core$async38189(self__.f,self__.ch,self__.meta38187,self__._,self__.fn1,meta38190__$1));
}));

(cljs.core.async.t_cljs$core$async38189.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38191){
var self__ = this;
var _38191__$1 = this;
return self__.meta38190;
}));

(cljs.core.async.t_cljs$core$async38189.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38189.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async38189.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38189.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__38185_SHARP_){
var G__38192 = (((p1__38185_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__38185_SHARP_) : self__.f.call(null,p1__38185_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__38192) : f1.call(null,G__38192));
});
}));

(cljs.core.async.t_cljs$core$async38189.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38187","meta38187",-889550865,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38186","cljs.core.async/t_cljs$core$async38186",-194604813,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38190","meta38190",-495483836,null)], null);
}));

(cljs.core.async.t_cljs$core$async38189.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38189.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38189");

(cljs.core.async.t_cljs$core$async38189.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38189");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38189.
 */
cljs.core.async.__GT_t_cljs$core$async38189 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38189(f__$1,ch__$1,meta38187__$1,___$2,fn1__$1,meta38190){
return (new cljs.core.async.t_cljs$core$async38189(f__$1,ch__$1,meta38187__$1,___$2,fn1__$1,meta38190));
});

}

return (new cljs.core.async.t_cljs$core$async38189(self__.f,self__.ch,self__.meta38187,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__38193 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__38193) : self__.f.call(null,G__38193));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async38186.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38186.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async38186.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38187","meta38187",-889550865,null)], null);
}));

(cljs.core.async.t_cljs$core$async38186.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38186.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38186");

(cljs.core.async.t_cljs$core$async38186.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38186");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38186.
 */
cljs.core.async.__GT_t_cljs$core$async38186 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38186(f__$1,ch__$1,meta38187){
return (new cljs.core.async.t_cljs$core$async38186(f__$1,ch__$1,meta38187));
});

}

return (new cljs.core.async.t_cljs$core$async38186(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38194 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38194 = (function (f,ch,meta38195){
this.f = f;
this.ch = ch;
this.meta38195 = meta38195;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38196,meta38195__$1){
var self__ = this;
var _38196__$1 = this;
return (new cljs.core.async.t_cljs$core$async38194(self__.f,self__.ch,meta38195__$1));
}));

(cljs.core.async.t_cljs$core$async38194.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38196){
var self__ = this;
var _38196__$1 = this;
return self__.meta38195;
}));

(cljs.core.async.t_cljs$core$async38194.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38194.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38194.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38194.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38194.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38194.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async38194.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38195","meta38195",-71541419,null)], null);
}));

(cljs.core.async.t_cljs$core$async38194.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38194.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38194");

(cljs.core.async.t_cljs$core$async38194.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38194");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38194.
 */
cljs.core.async.__GT_t_cljs$core$async38194 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38194(f__$1,ch__$1,meta38195){
return (new cljs.core.async.t_cljs$core$async38194(f__$1,ch__$1,meta38195));
});

}

return (new cljs.core.async.t_cljs$core$async38194(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38197 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38197 = (function (p,ch,meta38198){
this.p = p;
this.ch = ch;
this.meta38198 = meta38198;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38199,meta38198__$1){
var self__ = this;
var _38199__$1 = this;
return (new cljs.core.async.t_cljs$core$async38197(self__.p,self__.ch,meta38198__$1));
}));

(cljs.core.async.t_cljs$core$async38197.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38199){
var self__ = this;
var _38199__$1 = this;
return self__.meta38198;
}));

(cljs.core.async.t_cljs$core$async38197.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38197.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38197.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38197.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38197.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38197.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38197.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async38197.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38198","meta38198",1951415121,null)], null);
}));

(cljs.core.async.t_cljs$core$async38197.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38197.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38197");

(cljs.core.async.t_cljs$core$async38197.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38197");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38197.
 */
cljs.core.async.__GT_t_cljs$core$async38197 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38197(p__$1,ch__$1,meta38198){
return (new cljs.core.async.t_cljs$core$async38197(p__$1,ch__$1,meta38198));
});

}

return (new cljs.core.async.t_cljs$core$async38197(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__38201 = arguments.length;
switch (G__38201) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37022__auto___39017 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37023__auto__ = (function (){var switch__36954__auto__ = (function (state_38222){
var state_val_38223 = (state_38222[(1)]);
if((state_val_38223 === (7))){
var inst_38218 = (state_38222[(2)]);
var state_38222__$1 = state_38222;
var statearr_38224_39018 = state_38222__$1;
(statearr_38224_39018[(2)] = inst_38218);

(statearr_38224_39018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38223 === (1))){
var state_38222__$1 = state_38222;
var statearr_38225_39019 = state_38222__$1;
(statearr_38225_39019[(2)] = null);

(statearr_38225_39019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38223 === (4))){
var inst_38204 = (state_38222[(7)]);
var inst_38204__$1 = (state_38222[(2)]);
var inst_38205 = (inst_38204__$1 == null);
var state_38222__$1 = (function (){var statearr_38226 = state_38222;
(statearr_38226[(7)] = inst_38204__$1);

return statearr_38226;
})();
if(cljs.core.truth_(inst_38205)){
var statearr_38227_39020 = state_38222__$1;
(statearr_38227_39020[(1)] = (5));

} else {
var statearr_38228_39021 = state_38222__$1;
(statearr_38228_39021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38223 === (6))){
var inst_38204 = (state_38222[(7)]);
var inst_38209 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_38204) : p.call(null,inst_38204));
var state_38222__$1 = state_38222;
if(cljs.core.truth_(inst_38209)){
var statearr_38229_39022 = state_38222__$1;
(statearr_38229_39022[(1)] = (8));

} else {
var statearr_38230_39023 = state_38222__$1;
(statearr_38230_39023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38223 === (3))){
var inst_38220 = (state_38222[(2)]);
var state_38222__$1 = state_38222;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38222__$1,inst_38220);
} else {
if((state_val_38223 === (2))){
var state_38222__$1 = state_38222;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38222__$1,(4),ch);
} else {
if((state_val_38223 === (11))){
var inst_38212 = (state_38222[(2)]);
var state_38222__$1 = state_38222;
var statearr_38231_39024 = state_38222__$1;
(statearr_38231_39024[(2)] = inst_38212);

(statearr_38231_39024[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38223 === (9))){
var state_38222__$1 = state_38222;
var statearr_38232_39025 = state_38222__$1;
(statearr_38232_39025[(2)] = null);

(statearr_38232_39025[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38223 === (5))){
var inst_38207 = cljs.core.async.close_BANG_(out);
var state_38222__$1 = state_38222;
var statearr_38233_39026 = state_38222__$1;
(statearr_38233_39026[(2)] = inst_38207);

(statearr_38233_39026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38223 === (10))){
var inst_38215 = (state_38222[(2)]);
var state_38222__$1 = (function (){var statearr_38234 = state_38222;
(statearr_38234[(8)] = inst_38215);

return statearr_38234;
})();
var statearr_38235_39027 = state_38222__$1;
(statearr_38235_39027[(2)] = null);

(statearr_38235_39027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38223 === (8))){
var inst_38204 = (state_38222[(7)]);
var state_38222__$1 = state_38222;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38222__$1,(11),out,inst_38204);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36955__auto__ = null;
var cljs$core$async$state_machine__36955__auto____0 = (function (){
var statearr_38236 = [null,null,null,null,null,null,null,null,null];
(statearr_38236[(0)] = cljs$core$async$state_machine__36955__auto__);

(statearr_38236[(1)] = (1));

return statearr_38236;
});
var cljs$core$async$state_machine__36955__auto____1 = (function (state_38222){
while(true){
var ret_value__36956__auto__ = (function (){try{while(true){
var result__36957__auto__ = switch__36954__auto__(state_38222);
if(cljs.core.keyword_identical_QMARK_(result__36957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36957__auto__;
}
break;
}
}catch (e38237){if((e38237 instanceof Object)){
var ex__36958__auto__ = e38237;
var statearr_38238_39028 = state_38222;
(statearr_38238_39028[(5)] = ex__36958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38237;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39029 = state_38222;
state_38222 = G__39029;
continue;
} else {
return ret_value__36956__auto__;
}
break;
}
});
cljs$core$async$state_machine__36955__auto__ = function(state_38222){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36955__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36955__auto____1.call(this,state_38222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36955__auto____0;
cljs$core$async$state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36955__auto____1;
return cljs$core$async$state_machine__36955__auto__;
})()
})();
var state__37024__auto__ = (function (){var statearr_38239 = (f__37023__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37023__auto__.cljs$core$IFn$_invoke$arity$0() : f__37023__auto__.call(null));
(statearr_38239[(6)] = c__37022__auto___39017);

return statearr_38239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37024__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__38241 = arguments.length;
switch (G__38241) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__37022__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37023__auto__ = (function (){var switch__36954__auto__ = (function (state_38303){
var state_val_38304 = (state_38303[(1)]);
if((state_val_38304 === (7))){
var inst_38299 = (state_38303[(2)]);
var state_38303__$1 = state_38303;
var statearr_38305_39031 = state_38303__$1;
(statearr_38305_39031[(2)] = inst_38299);

(statearr_38305_39031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38304 === (20))){
var inst_38269 = (state_38303[(7)]);
var inst_38280 = (state_38303[(2)]);
var inst_38281 = cljs.core.next(inst_38269);
var inst_38255 = inst_38281;
var inst_38256 = null;
var inst_38257 = (0);
var inst_38258 = (0);
var state_38303__$1 = (function (){var statearr_38306 = state_38303;
(statearr_38306[(8)] = inst_38258);

(statearr_38306[(9)] = inst_38280);

(statearr_38306[(10)] = inst_38256);

(statearr_38306[(11)] = inst_38257);

(statearr_38306[(12)] = inst_38255);

return statearr_38306;
})();
var statearr_38307_39032 = state_38303__$1;
(statearr_38307_39032[(2)] = null);

(statearr_38307_39032[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38304 === (1))){
var state_38303__$1 = state_38303;
var statearr_38308_39033 = state_38303__$1;
(statearr_38308_39033[(2)] = null);

(statearr_38308_39033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38304 === (4))){
var inst_38244 = (state_38303[(13)]);
var inst_38244__$1 = (state_38303[(2)]);
var inst_38245 = (inst_38244__$1 == null);
var state_38303__$1 = (function (){var statearr_38309 = state_38303;
(statearr_38309[(13)] = inst_38244__$1);

return statearr_38309;
})();
if(cljs.core.truth_(inst_38245)){
var statearr_38310_39034 = state_38303__$1;
(statearr_38310_39034[(1)] = (5));

} else {
var statearr_38311_39035 = state_38303__$1;
(statearr_38311_39035[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38304 === (15))){
var state_38303__$1 = state_38303;
var statearr_38315_39036 = state_38303__$1;
(statearr_38315_39036[(2)] = null);

(statearr_38315_39036[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38304 === (21))){
var state_38303__$1 = state_38303;
var statearr_38316_39037 = state_38303__$1;
(statearr_38316_39037[(2)] = null);

(statearr_38316_39037[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38304 === (13))){
var inst_38258 = (state_38303[(8)]);
var inst_38256 = (state_38303[(10)]);
var inst_38257 = (state_38303[(11)]);
var inst_38255 = (state_38303[(12)]);
var inst_38265 = (state_38303[(2)]);
var inst_38266 = (inst_38258 + (1));
var tmp38312 = inst_38256;
var tmp38313 = inst_38257;
var tmp38314 = inst_38255;
var inst_38255__$1 = tmp38314;
var inst_38256__$1 = tmp38312;
var inst_38257__$1 = tmp38313;
var inst_38258__$1 = inst_38266;
var state_38303__$1 = (function (){var statearr_38317 = state_38303;
(statearr_38317[(8)] = inst_38258__$1);

(statearr_38317[(10)] = inst_38256__$1);

(statearr_38317[(11)] = inst_38257__$1);

(statearr_38317[(12)] = inst_38255__$1);

(statearr_38317[(14)] = inst_38265);

return statearr_38317;
})();
var statearr_38318_39038 = state_38303__$1;
(statearr_38318_39038[(2)] = null);

(statearr_38318_39038[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38304 === (22))){
var state_38303__$1 = state_38303;
var statearr_38319_39039 = state_38303__$1;
(statearr_38319_39039[(2)] = null);

(statearr_38319_39039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38304 === (6))){
var inst_38244 = (state_38303[(13)]);
var inst_38253 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38244) : f.call(null,inst_38244));
var inst_38254 = cljs.core.seq(inst_38253);
var inst_38255 = inst_38254;
var inst_38256 = null;
var inst_38257 = (0);
var inst_38258 = (0);
var state_38303__$1 = (function (){var statearr_38320 = state_38303;
(statearr_38320[(8)] = inst_38258);

(statearr_38320[(10)] = inst_38256);

(statearr_38320[(11)] = inst_38257);

(statearr_38320[(12)] = inst_38255);

return statearr_38320;
})();
var statearr_38321_39043 = state_38303__$1;
(statearr_38321_39043[(2)] = null);

(statearr_38321_39043[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38304 === (17))){
var inst_38269 = (state_38303[(7)]);
var inst_38273 = cljs.core.chunk_first(inst_38269);
var inst_38274 = cljs.core.chunk_rest(inst_38269);
var inst_38275 = cljs.core.count(inst_38273);
var inst_38255 = inst_38274;
var inst_38256 = inst_38273;
var inst_38257 = inst_38275;
var inst_38258 = (0);
var state_38303__$1 = (function (){var statearr_38322 = state_38303;
(statearr_38322[(8)] = inst_38258);

(statearr_38322[(10)] = inst_38256);

(statearr_38322[(11)] = inst_38257);

(statearr_38322[(12)] = inst_38255);

return statearr_38322;
})();
var statearr_38323_39044 = state_38303__$1;
(statearr_38323_39044[(2)] = null);

(statearr_38323_39044[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38304 === (3))){
var inst_38301 = (state_38303[(2)]);
var state_38303__$1 = state_38303;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38303__$1,inst_38301);
} else {
if((state_val_38304 === (12))){
var inst_38289 = (state_38303[(2)]);
var state_38303__$1 = state_38303;
var statearr_38324_39045 = state_38303__$1;
(statearr_38324_39045[(2)] = inst_38289);

(statearr_38324_39045[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38304 === (2))){
var state_38303__$1 = state_38303;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38303__$1,(4),in$);
} else {
if((state_val_38304 === (23))){
var inst_38297 = (state_38303[(2)]);
var state_38303__$1 = state_38303;
var statearr_38325_39046 = state_38303__$1;
(statearr_38325_39046[(2)] = inst_38297);

(statearr_38325_39046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38304 === (19))){
var inst_38284 = (state_38303[(2)]);
var state_38303__$1 = state_38303;
var statearr_38326_39047 = state_38303__$1;
(statearr_38326_39047[(2)] = inst_38284);

(statearr_38326_39047[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38304 === (11))){
var inst_38255 = (state_38303[(12)]);
var inst_38269 = (state_38303[(7)]);
var inst_38269__$1 = cljs.core.seq(inst_38255);
var state_38303__$1 = (function (){var statearr_38327 = state_38303;
(statearr_38327[(7)] = inst_38269__$1);

return statearr_38327;
})();
if(inst_38269__$1){
var statearr_38328_39050 = state_38303__$1;
(statearr_38328_39050[(1)] = (14));

} else {
var statearr_38329_39051 = state_38303__$1;
(statearr_38329_39051[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38304 === (9))){
var inst_38291 = (state_38303[(2)]);
var inst_38292 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_38303__$1 = (function (){var statearr_38330 = state_38303;
(statearr_38330[(15)] = inst_38291);

return statearr_38330;
})();
if(cljs.core.truth_(inst_38292)){
var statearr_38331_39052 = state_38303__$1;
(statearr_38331_39052[(1)] = (21));

} else {
var statearr_38332_39053 = state_38303__$1;
(statearr_38332_39053[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38304 === (5))){
var inst_38247 = cljs.core.async.close_BANG_(out);
var state_38303__$1 = state_38303;
var statearr_38333_39054 = state_38303__$1;
(statearr_38333_39054[(2)] = inst_38247);

(statearr_38333_39054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38304 === (14))){
var inst_38269 = (state_38303[(7)]);
var inst_38271 = cljs.core.chunked_seq_QMARK_(inst_38269);
var state_38303__$1 = state_38303;
if(inst_38271){
var statearr_38334_39055 = state_38303__$1;
(statearr_38334_39055[(1)] = (17));

} else {
var statearr_38335_39056 = state_38303__$1;
(statearr_38335_39056[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38304 === (16))){
var inst_38287 = (state_38303[(2)]);
var state_38303__$1 = state_38303;
var statearr_38336_39057 = state_38303__$1;
(statearr_38336_39057[(2)] = inst_38287);

(statearr_38336_39057[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38304 === (10))){
var inst_38258 = (state_38303[(8)]);
var inst_38256 = (state_38303[(10)]);
var inst_38263 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_38256,inst_38258);
var state_38303__$1 = state_38303;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38303__$1,(13),out,inst_38263);
} else {
if((state_val_38304 === (18))){
var inst_38269 = (state_38303[(7)]);
var inst_38278 = cljs.core.first(inst_38269);
var state_38303__$1 = state_38303;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38303__$1,(20),out,inst_38278);
} else {
if((state_val_38304 === (8))){
var inst_38258 = (state_38303[(8)]);
var inst_38257 = (state_38303[(11)]);
var inst_38260 = (inst_38258 < inst_38257);
var inst_38261 = inst_38260;
var state_38303__$1 = state_38303;
if(cljs.core.truth_(inst_38261)){
var statearr_38337_39058 = state_38303__$1;
(statearr_38337_39058[(1)] = (10));

} else {
var statearr_38338_39059 = state_38303__$1;
(statearr_38338_39059[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__36955__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__36955__auto____0 = (function (){
var statearr_38339 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38339[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__36955__auto__);

(statearr_38339[(1)] = (1));

return statearr_38339;
});
var cljs$core$async$mapcat_STAR__$_state_machine__36955__auto____1 = (function (state_38303){
while(true){
var ret_value__36956__auto__ = (function (){try{while(true){
var result__36957__auto__ = switch__36954__auto__(state_38303);
if(cljs.core.keyword_identical_QMARK_(result__36957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36957__auto__;
}
break;
}
}catch (e38340){if((e38340 instanceof Object)){
var ex__36958__auto__ = e38340;
var statearr_38341_39060 = state_38303;
(statearr_38341_39060[(5)] = ex__36958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38340;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39061 = state_38303;
state_38303 = G__39061;
continue;
} else {
return ret_value__36956__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__36955__auto__ = function(state_38303){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__36955__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__36955__auto____1.call(this,state_38303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__36955__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__36955__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__36955__auto__;
})()
})();
var state__37024__auto__ = (function (){var statearr_38342 = (f__37023__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37023__auto__.cljs$core$IFn$_invoke$arity$0() : f__37023__auto__.call(null));
(statearr_38342[(6)] = c__37022__auto__);

return statearr_38342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37024__auto__);
}));

return c__37022__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__38344 = arguments.length;
switch (G__38344) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__38346 = arguments.length;
switch (G__38346) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__38348 = arguments.length;
switch (G__38348) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37022__auto___39066 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37023__auto__ = (function (){var switch__36954__auto__ = (function (state_38372){
var state_val_38373 = (state_38372[(1)]);
if((state_val_38373 === (7))){
var inst_38367 = (state_38372[(2)]);
var state_38372__$1 = state_38372;
var statearr_38374_39067 = state_38372__$1;
(statearr_38374_39067[(2)] = inst_38367);

(statearr_38374_39067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38373 === (1))){
var inst_38349 = null;
var state_38372__$1 = (function (){var statearr_38375 = state_38372;
(statearr_38375[(7)] = inst_38349);

return statearr_38375;
})();
var statearr_38376_39068 = state_38372__$1;
(statearr_38376_39068[(2)] = null);

(statearr_38376_39068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38373 === (4))){
var inst_38352 = (state_38372[(8)]);
var inst_38352__$1 = (state_38372[(2)]);
var inst_38353 = (inst_38352__$1 == null);
var inst_38354 = cljs.core.not(inst_38353);
var state_38372__$1 = (function (){var statearr_38377 = state_38372;
(statearr_38377[(8)] = inst_38352__$1);

return statearr_38377;
})();
if(inst_38354){
var statearr_38378_39069 = state_38372__$1;
(statearr_38378_39069[(1)] = (5));

} else {
var statearr_38379_39070 = state_38372__$1;
(statearr_38379_39070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38373 === (6))){
var state_38372__$1 = state_38372;
var statearr_38380_39071 = state_38372__$1;
(statearr_38380_39071[(2)] = null);

(statearr_38380_39071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38373 === (3))){
var inst_38369 = (state_38372[(2)]);
var inst_38370 = cljs.core.async.close_BANG_(out);
var state_38372__$1 = (function (){var statearr_38381 = state_38372;
(statearr_38381[(9)] = inst_38369);

return statearr_38381;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38372__$1,inst_38370);
} else {
if((state_val_38373 === (2))){
var state_38372__$1 = state_38372;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38372__$1,(4),ch);
} else {
if((state_val_38373 === (11))){
var inst_38352 = (state_38372[(8)]);
var inst_38361 = (state_38372[(2)]);
var inst_38349 = inst_38352;
var state_38372__$1 = (function (){var statearr_38382 = state_38372;
(statearr_38382[(10)] = inst_38361);

(statearr_38382[(7)] = inst_38349);

return statearr_38382;
})();
var statearr_38383_39072 = state_38372__$1;
(statearr_38383_39072[(2)] = null);

(statearr_38383_39072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38373 === (9))){
var inst_38352 = (state_38372[(8)]);
var state_38372__$1 = state_38372;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38372__$1,(11),out,inst_38352);
} else {
if((state_val_38373 === (5))){
var inst_38352 = (state_38372[(8)]);
var inst_38349 = (state_38372[(7)]);
var inst_38356 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38352,inst_38349);
var state_38372__$1 = state_38372;
if(inst_38356){
var statearr_38385_39073 = state_38372__$1;
(statearr_38385_39073[(1)] = (8));

} else {
var statearr_38386_39074 = state_38372__$1;
(statearr_38386_39074[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38373 === (10))){
var inst_38364 = (state_38372[(2)]);
var state_38372__$1 = state_38372;
var statearr_38387_39075 = state_38372__$1;
(statearr_38387_39075[(2)] = inst_38364);

(statearr_38387_39075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38373 === (8))){
var inst_38349 = (state_38372[(7)]);
var tmp38384 = inst_38349;
var inst_38349__$1 = tmp38384;
var state_38372__$1 = (function (){var statearr_38388 = state_38372;
(statearr_38388[(7)] = inst_38349__$1);

return statearr_38388;
})();
var statearr_38389_39076 = state_38372__$1;
(statearr_38389_39076[(2)] = null);

(statearr_38389_39076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36955__auto__ = null;
var cljs$core$async$state_machine__36955__auto____0 = (function (){
var statearr_38390 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38390[(0)] = cljs$core$async$state_machine__36955__auto__);

(statearr_38390[(1)] = (1));

return statearr_38390;
});
var cljs$core$async$state_machine__36955__auto____1 = (function (state_38372){
while(true){
var ret_value__36956__auto__ = (function (){try{while(true){
var result__36957__auto__ = switch__36954__auto__(state_38372);
if(cljs.core.keyword_identical_QMARK_(result__36957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36957__auto__;
}
break;
}
}catch (e38391){if((e38391 instanceof Object)){
var ex__36958__auto__ = e38391;
var statearr_38392_39077 = state_38372;
(statearr_38392_39077[(5)] = ex__36958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38391;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39078 = state_38372;
state_38372 = G__39078;
continue;
} else {
return ret_value__36956__auto__;
}
break;
}
});
cljs$core$async$state_machine__36955__auto__ = function(state_38372){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36955__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36955__auto____1.call(this,state_38372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36955__auto____0;
cljs$core$async$state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36955__auto____1;
return cljs$core$async$state_machine__36955__auto__;
})()
})();
var state__37024__auto__ = (function (){var statearr_38393 = (f__37023__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37023__auto__.cljs$core$IFn$_invoke$arity$0() : f__37023__auto__.call(null));
(statearr_38393[(6)] = c__37022__auto___39066);

return statearr_38393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37024__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__38395 = arguments.length;
switch (G__38395) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37022__auto___39080 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37023__auto__ = (function (){var switch__36954__auto__ = (function (state_38433){
var state_val_38434 = (state_38433[(1)]);
if((state_val_38434 === (7))){
var inst_38429 = (state_38433[(2)]);
var state_38433__$1 = state_38433;
var statearr_38435_39081 = state_38433__$1;
(statearr_38435_39081[(2)] = inst_38429);

(statearr_38435_39081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38434 === (1))){
var inst_38396 = (new Array(n));
var inst_38397 = inst_38396;
var inst_38398 = (0);
var state_38433__$1 = (function (){var statearr_38436 = state_38433;
(statearr_38436[(7)] = inst_38397);

(statearr_38436[(8)] = inst_38398);

return statearr_38436;
})();
var statearr_38437_39082 = state_38433__$1;
(statearr_38437_39082[(2)] = null);

(statearr_38437_39082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38434 === (4))){
var inst_38401 = (state_38433[(9)]);
var inst_38401__$1 = (state_38433[(2)]);
var inst_38402 = (inst_38401__$1 == null);
var inst_38403 = cljs.core.not(inst_38402);
var state_38433__$1 = (function (){var statearr_38438 = state_38433;
(statearr_38438[(9)] = inst_38401__$1);

return statearr_38438;
})();
if(inst_38403){
var statearr_38439_39083 = state_38433__$1;
(statearr_38439_39083[(1)] = (5));

} else {
var statearr_38440_39084 = state_38433__$1;
(statearr_38440_39084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38434 === (15))){
var inst_38423 = (state_38433[(2)]);
var state_38433__$1 = state_38433;
var statearr_38441_39085 = state_38433__$1;
(statearr_38441_39085[(2)] = inst_38423);

(statearr_38441_39085[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38434 === (13))){
var state_38433__$1 = state_38433;
var statearr_38442_39086 = state_38433__$1;
(statearr_38442_39086[(2)] = null);

(statearr_38442_39086[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38434 === (6))){
var inst_38398 = (state_38433[(8)]);
var inst_38419 = (inst_38398 > (0));
var state_38433__$1 = state_38433;
if(cljs.core.truth_(inst_38419)){
var statearr_38443_39087 = state_38433__$1;
(statearr_38443_39087[(1)] = (12));

} else {
var statearr_38444_39088 = state_38433__$1;
(statearr_38444_39088[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38434 === (3))){
var inst_38431 = (state_38433[(2)]);
var state_38433__$1 = state_38433;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38433__$1,inst_38431);
} else {
if((state_val_38434 === (12))){
var inst_38397 = (state_38433[(7)]);
var inst_38421 = cljs.core.vec(inst_38397);
var state_38433__$1 = state_38433;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38433__$1,(15),out,inst_38421);
} else {
if((state_val_38434 === (2))){
var state_38433__$1 = state_38433;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38433__$1,(4),ch);
} else {
if((state_val_38434 === (11))){
var inst_38413 = (state_38433[(2)]);
var inst_38414 = (new Array(n));
var inst_38397 = inst_38414;
var inst_38398 = (0);
var state_38433__$1 = (function (){var statearr_38445 = state_38433;
(statearr_38445[(10)] = inst_38413);

(statearr_38445[(7)] = inst_38397);

(statearr_38445[(8)] = inst_38398);

return statearr_38445;
})();
var statearr_38446_39089 = state_38433__$1;
(statearr_38446_39089[(2)] = null);

(statearr_38446_39089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38434 === (9))){
var inst_38397 = (state_38433[(7)]);
var inst_38411 = cljs.core.vec(inst_38397);
var state_38433__$1 = state_38433;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38433__$1,(11),out,inst_38411);
} else {
if((state_val_38434 === (5))){
var inst_38406 = (state_38433[(11)]);
var inst_38401 = (state_38433[(9)]);
var inst_38397 = (state_38433[(7)]);
var inst_38398 = (state_38433[(8)]);
var inst_38405 = (inst_38397[inst_38398] = inst_38401);
var inst_38406__$1 = (inst_38398 + (1));
var inst_38407 = (inst_38406__$1 < n);
var state_38433__$1 = (function (){var statearr_38447 = state_38433;
(statearr_38447[(11)] = inst_38406__$1);

(statearr_38447[(12)] = inst_38405);

return statearr_38447;
})();
if(cljs.core.truth_(inst_38407)){
var statearr_38448_39090 = state_38433__$1;
(statearr_38448_39090[(1)] = (8));

} else {
var statearr_38449_39091 = state_38433__$1;
(statearr_38449_39091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38434 === (14))){
var inst_38426 = (state_38433[(2)]);
var inst_38427 = cljs.core.async.close_BANG_(out);
var state_38433__$1 = (function (){var statearr_38451 = state_38433;
(statearr_38451[(13)] = inst_38426);

return statearr_38451;
})();
var statearr_38452_39092 = state_38433__$1;
(statearr_38452_39092[(2)] = inst_38427);

(statearr_38452_39092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38434 === (10))){
var inst_38417 = (state_38433[(2)]);
var state_38433__$1 = state_38433;
var statearr_38453_39093 = state_38433__$1;
(statearr_38453_39093[(2)] = inst_38417);

(statearr_38453_39093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38434 === (8))){
var inst_38406 = (state_38433[(11)]);
var inst_38397 = (state_38433[(7)]);
var tmp38450 = inst_38397;
var inst_38397__$1 = tmp38450;
var inst_38398 = inst_38406;
var state_38433__$1 = (function (){var statearr_38454 = state_38433;
(statearr_38454[(7)] = inst_38397__$1);

(statearr_38454[(8)] = inst_38398);

return statearr_38454;
})();
var statearr_38455_39094 = state_38433__$1;
(statearr_38455_39094[(2)] = null);

(statearr_38455_39094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36955__auto__ = null;
var cljs$core$async$state_machine__36955__auto____0 = (function (){
var statearr_38456 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38456[(0)] = cljs$core$async$state_machine__36955__auto__);

(statearr_38456[(1)] = (1));

return statearr_38456;
});
var cljs$core$async$state_machine__36955__auto____1 = (function (state_38433){
while(true){
var ret_value__36956__auto__ = (function (){try{while(true){
var result__36957__auto__ = switch__36954__auto__(state_38433);
if(cljs.core.keyword_identical_QMARK_(result__36957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36957__auto__;
}
break;
}
}catch (e38457){if((e38457 instanceof Object)){
var ex__36958__auto__ = e38457;
var statearr_38458_39095 = state_38433;
(statearr_38458_39095[(5)] = ex__36958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38457;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39096 = state_38433;
state_38433 = G__39096;
continue;
} else {
return ret_value__36956__auto__;
}
break;
}
});
cljs$core$async$state_machine__36955__auto__ = function(state_38433){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36955__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36955__auto____1.call(this,state_38433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36955__auto____0;
cljs$core$async$state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36955__auto____1;
return cljs$core$async$state_machine__36955__auto__;
})()
})();
var state__37024__auto__ = (function (){var statearr_38459 = (f__37023__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37023__auto__.cljs$core$IFn$_invoke$arity$0() : f__37023__auto__.call(null));
(statearr_38459[(6)] = c__37022__auto___39080);

return statearr_38459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37024__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__38461 = arguments.length;
switch (G__38461) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37022__auto___39098 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37023__auto__ = (function (){var switch__36954__auto__ = (function (state_38503){
var state_val_38504 = (state_38503[(1)]);
if((state_val_38504 === (7))){
var inst_38499 = (state_38503[(2)]);
var state_38503__$1 = state_38503;
var statearr_38505_39099 = state_38503__$1;
(statearr_38505_39099[(2)] = inst_38499);

(statearr_38505_39099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (1))){
var inst_38462 = [];
var inst_38463 = inst_38462;
var inst_38464 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_38503__$1 = (function (){var statearr_38506 = state_38503;
(statearr_38506[(7)] = inst_38463);

(statearr_38506[(8)] = inst_38464);

return statearr_38506;
})();
var statearr_38507_39100 = state_38503__$1;
(statearr_38507_39100[(2)] = null);

(statearr_38507_39100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (4))){
var inst_38467 = (state_38503[(9)]);
var inst_38467__$1 = (state_38503[(2)]);
var inst_38468 = (inst_38467__$1 == null);
var inst_38469 = cljs.core.not(inst_38468);
var state_38503__$1 = (function (){var statearr_38508 = state_38503;
(statearr_38508[(9)] = inst_38467__$1);

return statearr_38508;
})();
if(inst_38469){
var statearr_38509_39101 = state_38503__$1;
(statearr_38509_39101[(1)] = (5));

} else {
var statearr_38510_39102 = state_38503__$1;
(statearr_38510_39102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (15))){
var inst_38493 = (state_38503[(2)]);
var state_38503__$1 = state_38503;
var statearr_38511_39103 = state_38503__$1;
(statearr_38511_39103[(2)] = inst_38493);

(statearr_38511_39103[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (13))){
var state_38503__$1 = state_38503;
var statearr_38512_39104 = state_38503__$1;
(statearr_38512_39104[(2)] = null);

(statearr_38512_39104[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (6))){
var inst_38463 = (state_38503[(7)]);
var inst_38488 = inst_38463.length;
var inst_38489 = (inst_38488 > (0));
var state_38503__$1 = state_38503;
if(cljs.core.truth_(inst_38489)){
var statearr_38513_39105 = state_38503__$1;
(statearr_38513_39105[(1)] = (12));

} else {
var statearr_38514_39106 = state_38503__$1;
(statearr_38514_39106[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (3))){
var inst_38501 = (state_38503[(2)]);
var state_38503__$1 = state_38503;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38503__$1,inst_38501);
} else {
if((state_val_38504 === (12))){
var inst_38463 = (state_38503[(7)]);
var inst_38491 = cljs.core.vec(inst_38463);
var state_38503__$1 = state_38503;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38503__$1,(15),out,inst_38491);
} else {
if((state_val_38504 === (2))){
var state_38503__$1 = state_38503;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38503__$1,(4),ch);
} else {
if((state_val_38504 === (11))){
var inst_38467 = (state_38503[(9)]);
var inst_38471 = (state_38503[(10)]);
var inst_38481 = (state_38503[(2)]);
var inst_38482 = [];
var inst_38483 = inst_38482.push(inst_38467);
var inst_38463 = inst_38482;
var inst_38464 = inst_38471;
var state_38503__$1 = (function (){var statearr_38515 = state_38503;
(statearr_38515[(11)] = inst_38483);

(statearr_38515[(12)] = inst_38481);

(statearr_38515[(7)] = inst_38463);

(statearr_38515[(8)] = inst_38464);

return statearr_38515;
})();
var statearr_38516_39107 = state_38503__$1;
(statearr_38516_39107[(2)] = null);

(statearr_38516_39107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (9))){
var inst_38463 = (state_38503[(7)]);
var inst_38479 = cljs.core.vec(inst_38463);
var state_38503__$1 = state_38503;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38503__$1,(11),out,inst_38479);
} else {
if((state_val_38504 === (5))){
var inst_38467 = (state_38503[(9)]);
var inst_38471 = (state_38503[(10)]);
var inst_38464 = (state_38503[(8)]);
var inst_38471__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38467) : f.call(null,inst_38467));
var inst_38472 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38471__$1,inst_38464);
var inst_38473 = cljs.core.keyword_identical_QMARK_(inst_38464,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_38474 = ((inst_38472) || (inst_38473));
var state_38503__$1 = (function (){var statearr_38517 = state_38503;
(statearr_38517[(10)] = inst_38471__$1);

return statearr_38517;
})();
if(cljs.core.truth_(inst_38474)){
var statearr_38518_39108 = state_38503__$1;
(statearr_38518_39108[(1)] = (8));

} else {
var statearr_38519_39109 = state_38503__$1;
(statearr_38519_39109[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (14))){
var inst_38496 = (state_38503[(2)]);
var inst_38497 = cljs.core.async.close_BANG_(out);
var state_38503__$1 = (function (){var statearr_38521 = state_38503;
(statearr_38521[(13)] = inst_38496);

return statearr_38521;
})();
var statearr_38522_39110 = state_38503__$1;
(statearr_38522_39110[(2)] = inst_38497);

(statearr_38522_39110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (10))){
var inst_38486 = (state_38503[(2)]);
var state_38503__$1 = state_38503;
var statearr_38523_39111 = state_38503__$1;
(statearr_38523_39111[(2)] = inst_38486);

(statearr_38523_39111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (8))){
var inst_38467 = (state_38503[(9)]);
var inst_38463 = (state_38503[(7)]);
var inst_38471 = (state_38503[(10)]);
var inst_38476 = inst_38463.push(inst_38467);
var tmp38520 = inst_38463;
var inst_38463__$1 = tmp38520;
var inst_38464 = inst_38471;
var state_38503__$1 = (function (){var statearr_38524 = state_38503;
(statearr_38524[(14)] = inst_38476);

(statearr_38524[(7)] = inst_38463__$1);

(statearr_38524[(8)] = inst_38464);

return statearr_38524;
})();
var statearr_38525_39112 = state_38503__$1;
(statearr_38525_39112[(2)] = null);

(statearr_38525_39112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36955__auto__ = null;
var cljs$core$async$state_machine__36955__auto____0 = (function (){
var statearr_38526 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38526[(0)] = cljs$core$async$state_machine__36955__auto__);

(statearr_38526[(1)] = (1));

return statearr_38526;
});
var cljs$core$async$state_machine__36955__auto____1 = (function (state_38503){
while(true){
var ret_value__36956__auto__ = (function (){try{while(true){
var result__36957__auto__ = switch__36954__auto__(state_38503);
if(cljs.core.keyword_identical_QMARK_(result__36957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36957__auto__;
}
break;
}
}catch (e38527){if((e38527 instanceof Object)){
var ex__36958__auto__ = e38527;
var statearr_38528_39113 = state_38503;
(statearr_38528_39113[(5)] = ex__36958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38527;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39114 = state_38503;
state_38503 = G__39114;
continue;
} else {
return ret_value__36956__auto__;
}
break;
}
});
cljs$core$async$state_machine__36955__auto__ = function(state_38503){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36955__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36955__auto____1.call(this,state_38503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36955__auto____0;
cljs$core$async$state_machine__36955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36955__auto____1;
return cljs$core$async$state_machine__36955__auto__;
})()
})();
var state__37024__auto__ = (function (){var statearr_38529 = (f__37023__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37023__auto__.cljs$core$IFn$_invoke$arity$0() : f__37023__auto__.call(null));
(statearr_38529[(6)] = c__37022__auto___39098);

return statearr_38529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37024__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
