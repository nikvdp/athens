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
var G__37043 = arguments.length;
switch (G__37043) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37044 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37044 = (function (f,blockable,meta37045){
this.f = f;
this.blockable = blockable;
this.meta37045 = meta37045;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37046,meta37045__$1){
var self__ = this;
var _37046__$1 = this;
return (new cljs.core.async.t_cljs$core$async37044(self__.f,self__.blockable,meta37045__$1));
}));

(cljs.core.async.t_cljs$core$async37044.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37046){
var self__ = this;
var _37046__$1 = this;
return self__.meta37045;
}));

(cljs.core.async.t_cljs$core$async37044.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37044.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37044.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async37044.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async37044.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37045","meta37045",-1648473940,null)], null);
}));

(cljs.core.async.t_cljs$core$async37044.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37044.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37044");

(cljs.core.async.t_cljs$core$async37044.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37044");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37044.
 */
cljs.core.async.__GT_t_cljs$core$async37044 = (function cljs$core$async$__GT_t_cljs$core$async37044(f__$1,blockable__$1,meta37045){
return (new cljs.core.async.t_cljs$core$async37044(f__$1,blockable__$1,meta37045));
});

}

return (new cljs.core.async.t_cljs$core$async37044(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__37051 = arguments.length;
switch (G__37051) {
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
var G__37053 = arguments.length;
switch (G__37053) {
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
var G__37055 = arguments.length;
switch (G__37055) {
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
var val_38507 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38507) : fn1.call(null,val_38507));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38507) : fn1.call(null,val_38507));
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
var G__37057 = arguments.length;
switch (G__37057) {
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
var n__4666__auto___38518 = n;
var x_38519 = (0);
while(true){
if((x_38519 < n__4666__auto___38518)){
(a[x_38519] = x_38519);

var G__38520 = (x_38519 + (1));
x_38519 = G__38520;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37058 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37058 = (function (flag,meta37059){
this.flag = flag;
this.meta37059 = meta37059;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37060,meta37059__$1){
var self__ = this;
var _37060__$1 = this;
return (new cljs.core.async.t_cljs$core$async37058(self__.flag,meta37059__$1));
}));

(cljs.core.async.t_cljs$core$async37058.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37060){
var self__ = this;
var _37060__$1 = this;
return self__.meta37059;
}));

(cljs.core.async.t_cljs$core$async37058.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37058.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37058.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37058.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async37058.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37059","meta37059",773853717,null)], null);
}));

(cljs.core.async.t_cljs$core$async37058.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37058.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37058");

(cljs.core.async.t_cljs$core$async37058.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37058");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37058.
 */
cljs.core.async.__GT_t_cljs$core$async37058 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37058(flag__$1,meta37059){
return (new cljs.core.async.t_cljs$core$async37058(flag__$1,meta37059));
});

}

return (new cljs.core.async.t_cljs$core$async37058(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37063 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37063 = (function (flag,cb,meta37064){
this.flag = flag;
this.cb = cb;
this.meta37064 = meta37064;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37065,meta37064__$1){
var self__ = this;
var _37065__$1 = this;
return (new cljs.core.async.t_cljs$core$async37063(self__.flag,self__.cb,meta37064__$1));
}));

(cljs.core.async.t_cljs$core$async37063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37065){
var self__ = this;
var _37065__$1 = this;
return self__.meta37064;
}));

(cljs.core.async.t_cljs$core$async37063.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37063.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37063.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37063.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async37063.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37064","meta37064",40052684,null)], null);
}));

(cljs.core.async.t_cljs$core$async37063.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37063.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37063");

(cljs.core.async.t_cljs$core$async37063.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37063");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37063.
 */
cljs.core.async.__GT_t_cljs$core$async37063 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37063(flag__$1,cb__$1,meta37064){
return (new cljs.core.async.t_cljs$core$async37063(flag__$1,cb__$1,meta37064));
});

}

return (new cljs.core.async.t_cljs$core$async37063(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__37070_SHARP_){
var G__37074 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37070_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37074) : fret.call(null,G__37074));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37071_SHARP_){
var G__37075 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37071_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37075) : fret.call(null,G__37075));
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
var G__38525 = (i + (1));
i = G__38525;
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
var len__4789__auto___38526 = arguments.length;
var i__4790__auto___38527 = (0);
while(true){
if((i__4790__auto___38527 < len__4789__auto___38526)){
args__4795__auto__.push((arguments[i__4790__auto___38527]));

var G__38528 = (i__4790__auto___38527 + (1));
i__4790__auto___38527 = G__38528;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37079){
var map__37080 = p__37079;
var map__37080__$1 = (((((!((map__37080 == null))))?(((((map__37080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37080):map__37080);
var opts = map__37080__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37076){
var G__37077 = cljs.core.first(seq37076);
var seq37076__$1 = cljs.core.next(seq37076);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37077,seq37076__$1);
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
var G__37086 = arguments.length;
switch (G__37086) {
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
var c__36984__auto___38535 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36986__auto__ = (function (){var switch__36917__auto__ = (function (state_37110){
var state_val_37111 = (state_37110[(1)]);
if((state_val_37111 === (7))){
var inst_37106 = (state_37110[(2)]);
var state_37110__$1 = state_37110;
var statearr_37112_38536 = state_37110__$1;
(statearr_37112_38536[(2)] = inst_37106);

(statearr_37112_38536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37111 === (1))){
var state_37110__$1 = state_37110;
var statearr_37113_38538 = state_37110__$1;
(statearr_37113_38538[(2)] = null);

(statearr_37113_38538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37111 === (4))){
var inst_37089 = (state_37110[(7)]);
var inst_37089__$1 = (state_37110[(2)]);
var inst_37090 = (inst_37089__$1 == null);
var state_37110__$1 = (function (){var statearr_37114 = state_37110;
(statearr_37114[(7)] = inst_37089__$1);

return statearr_37114;
})();
if(cljs.core.truth_(inst_37090)){
var statearr_37115_38541 = state_37110__$1;
(statearr_37115_38541[(1)] = (5));

} else {
var statearr_37116_38542 = state_37110__$1;
(statearr_37116_38542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37111 === (13))){
var state_37110__$1 = state_37110;
var statearr_37117_38544 = state_37110__$1;
(statearr_37117_38544[(2)] = null);

(statearr_37117_38544[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37111 === (6))){
var inst_37089 = (state_37110[(7)]);
var state_37110__$1 = state_37110;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37110__$1,(11),to,inst_37089);
} else {
if((state_val_37111 === (3))){
var inst_37108 = (state_37110[(2)]);
var state_37110__$1 = state_37110;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37110__$1,inst_37108);
} else {
if((state_val_37111 === (12))){
var state_37110__$1 = state_37110;
var statearr_37118_38546 = state_37110__$1;
(statearr_37118_38546[(2)] = null);

(statearr_37118_38546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37111 === (2))){
var state_37110__$1 = state_37110;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37110__$1,(4),from);
} else {
if((state_val_37111 === (11))){
var inst_37099 = (state_37110[(2)]);
var state_37110__$1 = state_37110;
if(cljs.core.truth_(inst_37099)){
var statearr_37119_38549 = state_37110__$1;
(statearr_37119_38549[(1)] = (12));

} else {
var statearr_37120_38550 = state_37110__$1;
(statearr_37120_38550[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37111 === (9))){
var state_37110__$1 = state_37110;
var statearr_37121_38551 = state_37110__$1;
(statearr_37121_38551[(2)] = null);

(statearr_37121_38551[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37111 === (5))){
var state_37110__$1 = state_37110;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37122_38552 = state_37110__$1;
(statearr_37122_38552[(1)] = (8));

} else {
var statearr_37123_38553 = state_37110__$1;
(statearr_37123_38553[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37111 === (14))){
var inst_37104 = (state_37110[(2)]);
var state_37110__$1 = state_37110;
var statearr_37124_38555 = state_37110__$1;
(statearr_37124_38555[(2)] = inst_37104);

(statearr_37124_38555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37111 === (10))){
var inst_37096 = (state_37110[(2)]);
var state_37110__$1 = state_37110;
var statearr_37125_38556 = state_37110__$1;
(statearr_37125_38556[(2)] = inst_37096);

(statearr_37125_38556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37111 === (8))){
var inst_37093 = cljs.core.async.close_BANG_(to);
var state_37110__$1 = state_37110;
var statearr_37126_38557 = state_37110__$1;
(statearr_37126_38557[(2)] = inst_37093);

(statearr_37126_38557[(1)] = (10));


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
var cljs$core$async$state_machine__36918__auto__ = null;
var cljs$core$async$state_machine__36918__auto____0 = (function (){
var statearr_37127 = [null,null,null,null,null,null,null,null];
(statearr_37127[(0)] = cljs$core$async$state_machine__36918__auto__);

(statearr_37127[(1)] = (1));

return statearr_37127;
});
var cljs$core$async$state_machine__36918__auto____1 = (function (state_37110){
while(true){
var ret_value__36919__auto__ = (function (){try{while(true){
var result__36920__auto__ = switch__36917__auto__(state_37110);
if(cljs.core.keyword_identical_QMARK_(result__36920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36920__auto__;
}
break;
}
}catch (e37128){if((e37128 instanceof Object)){
var ex__36921__auto__ = e37128;
var statearr_37129_38558 = state_37110;
(statearr_37129_38558[(5)] = ex__36921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37128;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38562 = state_37110;
state_37110 = G__38562;
continue;
} else {
return ret_value__36919__auto__;
}
break;
}
});
cljs$core$async$state_machine__36918__auto__ = function(state_37110){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36918__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36918__auto____1.call(this,state_37110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36918__auto____0;
cljs$core$async$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36918__auto____1;
return cljs$core$async$state_machine__36918__auto__;
})()
})();
var state__36987__auto__ = (function (){var statearr_37130 = (f__36986__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36986__auto__.cljs$core$IFn$_invoke$arity$0() : f__36986__auto__.call(null));
(statearr_37130[(6)] = c__36984__auto___38535);

return statearr_37130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36987__auto__);
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
var process = (function (p__37131){
var vec__37132 = p__37131;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37132,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37132,(1),null);
var job = vec__37132;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__36984__auto___38563 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36986__auto__ = (function (){var switch__36917__auto__ = (function (state_37139){
var state_val_37140 = (state_37139[(1)]);
if((state_val_37140 === (1))){
var state_37139__$1 = state_37139;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37139__$1,(2),res,v);
} else {
if((state_val_37140 === (2))){
var inst_37136 = (state_37139[(2)]);
var inst_37137 = cljs.core.async.close_BANG_(res);
var state_37139__$1 = (function (){var statearr_37141 = state_37139;
(statearr_37141[(7)] = inst_37136);

return statearr_37141;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37139__$1,inst_37137);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36918__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36918__auto____0 = (function (){
var statearr_37142 = [null,null,null,null,null,null,null,null];
(statearr_37142[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36918__auto__);

(statearr_37142[(1)] = (1));

return statearr_37142;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36918__auto____1 = (function (state_37139){
while(true){
var ret_value__36919__auto__ = (function (){try{while(true){
var result__36920__auto__ = switch__36917__auto__(state_37139);
if(cljs.core.keyword_identical_QMARK_(result__36920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36920__auto__;
}
break;
}
}catch (e37143){if((e37143 instanceof Object)){
var ex__36921__auto__ = e37143;
var statearr_37144_38564 = state_37139;
(statearr_37144_38564[(5)] = ex__36921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37143;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38565 = state_37139;
state_37139 = G__38565;
continue;
} else {
return ret_value__36919__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36918__auto__ = function(state_37139){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36918__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36918__auto____1.call(this,state_37139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36918__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36918__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36918__auto__;
})()
})();
var state__36987__auto__ = (function (){var statearr_37145 = (f__36986__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36986__auto__.cljs$core$IFn$_invoke$arity$0() : f__36986__auto__.call(null));
(statearr_37145[(6)] = c__36984__auto___38563);

return statearr_37145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36987__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__37146){
var vec__37147 = p__37146;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37147,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37147,(1),null);
var job = vec__37147;
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
var n__4666__auto___38566 = n;
var __38567 = (0);
while(true){
if((__38567 < n__4666__auto___38566)){
var G__37150_38568 = type;
var G__37150_38569__$1 = (((G__37150_38568 instanceof cljs.core.Keyword))?G__37150_38568.fqn:null);
switch (G__37150_38569__$1) {
case "compute":
var c__36984__auto___38571 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38567,c__36984__auto___38571,G__37150_38568,G__37150_38569__$1,n__4666__auto___38566,jobs,results,process,async){
return (function (){
var f__36986__auto__ = (function (){var switch__36917__auto__ = ((function (__38567,c__36984__auto___38571,G__37150_38568,G__37150_38569__$1,n__4666__auto___38566,jobs,results,process,async){
return (function (state_37163){
var state_val_37164 = (state_37163[(1)]);
if((state_val_37164 === (1))){
var state_37163__$1 = state_37163;
var statearr_37165_38572 = state_37163__$1;
(statearr_37165_38572[(2)] = null);

(statearr_37165_38572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37164 === (2))){
var state_37163__$1 = state_37163;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37163__$1,(4),jobs);
} else {
if((state_val_37164 === (3))){
var inst_37161 = (state_37163[(2)]);
var state_37163__$1 = state_37163;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37163__$1,inst_37161);
} else {
if((state_val_37164 === (4))){
var inst_37153 = (state_37163[(2)]);
var inst_37154 = process(inst_37153);
var state_37163__$1 = state_37163;
if(cljs.core.truth_(inst_37154)){
var statearr_37166_38573 = state_37163__$1;
(statearr_37166_38573[(1)] = (5));

} else {
var statearr_37167_38574 = state_37163__$1;
(statearr_37167_38574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37164 === (5))){
var state_37163__$1 = state_37163;
var statearr_37168_38575 = state_37163__$1;
(statearr_37168_38575[(2)] = null);

(statearr_37168_38575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37164 === (6))){
var state_37163__$1 = state_37163;
var statearr_37169_38580 = state_37163__$1;
(statearr_37169_38580[(2)] = null);

(statearr_37169_38580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37164 === (7))){
var inst_37159 = (state_37163[(2)]);
var state_37163__$1 = state_37163;
var statearr_37170_38581 = state_37163__$1;
(statearr_37170_38581[(2)] = inst_37159);

(statearr_37170_38581[(1)] = (3));


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
});})(__38567,c__36984__auto___38571,G__37150_38568,G__37150_38569__$1,n__4666__auto___38566,jobs,results,process,async))
;
return ((function (__38567,switch__36917__auto__,c__36984__auto___38571,G__37150_38568,G__37150_38569__$1,n__4666__auto___38566,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36918__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36918__auto____0 = (function (){
var statearr_37171 = [null,null,null,null,null,null,null];
(statearr_37171[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36918__auto__);

(statearr_37171[(1)] = (1));

return statearr_37171;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36918__auto____1 = (function (state_37163){
while(true){
var ret_value__36919__auto__ = (function (){try{while(true){
var result__36920__auto__ = switch__36917__auto__(state_37163);
if(cljs.core.keyword_identical_QMARK_(result__36920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36920__auto__;
}
break;
}
}catch (e37172){if((e37172 instanceof Object)){
var ex__36921__auto__ = e37172;
var statearr_37173_38590 = state_37163;
(statearr_37173_38590[(5)] = ex__36921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37172;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38591 = state_37163;
state_37163 = G__38591;
continue;
} else {
return ret_value__36919__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36918__auto__ = function(state_37163){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36918__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36918__auto____1.call(this,state_37163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36918__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36918__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36918__auto__;
})()
;})(__38567,switch__36917__auto__,c__36984__auto___38571,G__37150_38568,G__37150_38569__$1,n__4666__auto___38566,jobs,results,process,async))
})();
var state__36987__auto__ = (function (){var statearr_37174 = (f__36986__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36986__auto__.cljs$core$IFn$_invoke$arity$0() : f__36986__auto__.call(null));
(statearr_37174[(6)] = c__36984__auto___38571);

return statearr_37174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36987__auto__);
});})(__38567,c__36984__auto___38571,G__37150_38568,G__37150_38569__$1,n__4666__auto___38566,jobs,results,process,async))
);


break;
case "async":
var c__36984__auto___38592 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38567,c__36984__auto___38592,G__37150_38568,G__37150_38569__$1,n__4666__auto___38566,jobs,results,process,async){
return (function (){
var f__36986__auto__ = (function (){var switch__36917__auto__ = ((function (__38567,c__36984__auto___38592,G__37150_38568,G__37150_38569__$1,n__4666__auto___38566,jobs,results,process,async){
return (function (state_37187){
var state_val_37188 = (state_37187[(1)]);
if((state_val_37188 === (1))){
var state_37187__$1 = state_37187;
var statearr_37189_38594 = state_37187__$1;
(statearr_37189_38594[(2)] = null);

(statearr_37189_38594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (2))){
var state_37187__$1 = state_37187;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37187__$1,(4),jobs);
} else {
if((state_val_37188 === (3))){
var inst_37185 = (state_37187[(2)]);
var state_37187__$1 = state_37187;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37187__$1,inst_37185);
} else {
if((state_val_37188 === (4))){
var inst_37177 = (state_37187[(2)]);
var inst_37178 = async(inst_37177);
var state_37187__$1 = state_37187;
if(cljs.core.truth_(inst_37178)){
var statearr_37190_38596 = state_37187__$1;
(statearr_37190_38596[(1)] = (5));

} else {
var statearr_37191_38597 = state_37187__$1;
(statearr_37191_38597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (5))){
var state_37187__$1 = state_37187;
var statearr_37192_38598 = state_37187__$1;
(statearr_37192_38598[(2)] = null);

(statearr_37192_38598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (6))){
var state_37187__$1 = state_37187;
var statearr_37193_38600 = state_37187__$1;
(statearr_37193_38600[(2)] = null);

(statearr_37193_38600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (7))){
var inst_37183 = (state_37187[(2)]);
var state_37187__$1 = state_37187;
var statearr_37194_38602 = state_37187__$1;
(statearr_37194_38602[(2)] = inst_37183);

(statearr_37194_38602[(1)] = (3));


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
});})(__38567,c__36984__auto___38592,G__37150_38568,G__37150_38569__$1,n__4666__auto___38566,jobs,results,process,async))
;
return ((function (__38567,switch__36917__auto__,c__36984__auto___38592,G__37150_38568,G__37150_38569__$1,n__4666__auto___38566,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36918__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36918__auto____0 = (function (){
var statearr_37195 = [null,null,null,null,null,null,null];
(statearr_37195[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36918__auto__);

(statearr_37195[(1)] = (1));

return statearr_37195;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36918__auto____1 = (function (state_37187){
while(true){
var ret_value__36919__auto__ = (function (){try{while(true){
var result__36920__auto__ = switch__36917__auto__(state_37187);
if(cljs.core.keyword_identical_QMARK_(result__36920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36920__auto__;
}
break;
}
}catch (e37196){if((e37196 instanceof Object)){
var ex__36921__auto__ = e37196;
var statearr_37197_38603 = state_37187;
(statearr_37197_38603[(5)] = ex__36921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37196;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38604 = state_37187;
state_37187 = G__38604;
continue;
} else {
return ret_value__36919__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36918__auto__ = function(state_37187){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36918__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36918__auto____1.call(this,state_37187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36918__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36918__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36918__auto__;
})()
;})(__38567,switch__36917__auto__,c__36984__auto___38592,G__37150_38568,G__37150_38569__$1,n__4666__auto___38566,jobs,results,process,async))
})();
var state__36987__auto__ = (function (){var statearr_37198 = (f__36986__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36986__auto__.cljs$core$IFn$_invoke$arity$0() : f__36986__auto__.call(null));
(statearr_37198[(6)] = c__36984__auto___38592);

return statearr_37198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36987__auto__);
});})(__38567,c__36984__auto___38592,G__37150_38568,G__37150_38569__$1,n__4666__auto___38566,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37150_38569__$1)].join('')));

}

var G__38605 = (__38567 + (1));
__38567 = G__38605;
continue;
} else {
}
break;
}

var c__36984__auto___38606 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36986__auto__ = (function (){var switch__36917__auto__ = (function (state_37220){
var state_val_37221 = (state_37220[(1)]);
if((state_val_37221 === (7))){
var inst_37216 = (state_37220[(2)]);
var state_37220__$1 = state_37220;
var statearr_37222_38607 = state_37220__$1;
(statearr_37222_38607[(2)] = inst_37216);

(statearr_37222_38607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37221 === (1))){
var state_37220__$1 = state_37220;
var statearr_37223_38608 = state_37220__$1;
(statearr_37223_38608[(2)] = null);

(statearr_37223_38608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37221 === (4))){
var inst_37201 = (state_37220[(7)]);
var inst_37201__$1 = (state_37220[(2)]);
var inst_37202 = (inst_37201__$1 == null);
var state_37220__$1 = (function (){var statearr_37224 = state_37220;
(statearr_37224[(7)] = inst_37201__$1);

return statearr_37224;
})();
if(cljs.core.truth_(inst_37202)){
var statearr_37225_38609 = state_37220__$1;
(statearr_37225_38609[(1)] = (5));

} else {
var statearr_37226_38610 = state_37220__$1;
(statearr_37226_38610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37221 === (6))){
var inst_37206 = (state_37220[(8)]);
var inst_37201 = (state_37220[(7)]);
var inst_37206__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_37207 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37208 = [inst_37201,inst_37206__$1];
var inst_37209 = (new cljs.core.PersistentVector(null,2,(5),inst_37207,inst_37208,null));
var state_37220__$1 = (function (){var statearr_37227 = state_37220;
(statearr_37227[(8)] = inst_37206__$1);

return statearr_37227;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37220__$1,(8),jobs,inst_37209);
} else {
if((state_val_37221 === (3))){
var inst_37218 = (state_37220[(2)]);
var state_37220__$1 = state_37220;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37220__$1,inst_37218);
} else {
if((state_val_37221 === (2))){
var state_37220__$1 = state_37220;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37220__$1,(4),from);
} else {
if((state_val_37221 === (9))){
var inst_37213 = (state_37220[(2)]);
var state_37220__$1 = (function (){var statearr_37228 = state_37220;
(statearr_37228[(9)] = inst_37213);

return statearr_37228;
})();
var statearr_37229_38611 = state_37220__$1;
(statearr_37229_38611[(2)] = null);

(statearr_37229_38611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37221 === (5))){
var inst_37204 = cljs.core.async.close_BANG_(jobs);
var state_37220__$1 = state_37220;
var statearr_37230_38612 = state_37220__$1;
(statearr_37230_38612[(2)] = inst_37204);

(statearr_37230_38612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37221 === (8))){
var inst_37206 = (state_37220[(8)]);
var inst_37211 = (state_37220[(2)]);
var state_37220__$1 = (function (){var statearr_37231 = state_37220;
(statearr_37231[(10)] = inst_37211);

return statearr_37231;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37220__$1,(9),results,inst_37206);
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
var cljs$core$async$pipeline_STAR__$_state_machine__36918__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36918__auto____0 = (function (){
var statearr_37232 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37232[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36918__auto__);

(statearr_37232[(1)] = (1));

return statearr_37232;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36918__auto____1 = (function (state_37220){
while(true){
var ret_value__36919__auto__ = (function (){try{while(true){
var result__36920__auto__ = switch__36917__auto__(state_37220);
if(cljs.core.keyword_identical_QMARK_(result__36920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36920__auto__;
}
break;
}
}catch (e37233){if((e37233 instanceof Object)){
var ex__36921__auto__ = e37233;
var statearr_37234_38613 = state_37220;
(statearr_37234_38613[(5)] = ex__36921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37233;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38614 = state_37220;
state_37220 = G__38614;
continue;
} else {
return ret_value__36919__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36918__auto__ = function(state_37220){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36918__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36918__auto____1.call(this,state_37220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36918__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36918__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36918__auto__;
})()
})();
var state__36987__auto__ = (function (){var statearr_37235 = (f__36986__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36986__auto__.cljs$core$IFn$_invoke$arity$0() : f__36986__auto__.call(null));
(statearr_37235[(6)] = c__36984__auto___38606);

return statearr_37235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36987__auto__);
}));


var c__36984__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36986__auto__ = (function (){var switch__36917__auto__ = (function (state_37273){
var state_val_37274 = (state_37273[(1)]);
if((state_val_37274 === (7))){
var inst_37269 = (state_37273[(2)]);
var state_37273__$1 = state_37273;
var statearr_37275_38615 = state_37273__$1;
(statearr_37275_38615[(2)] = inst_37269);

(statearr_37275_38615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37274 === (20))){
var state_37273__$1 = state_37273;
var statearr_37276_38616 = state_37273__$1;
(statearr_37276_38616[(2)] = null);

(statearr_37276_38616[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37274 === (1))){
var state_37273__$1 = state_37273;
var statearr_37277_38617 = state_37273__$1;
(statearr_37277_38617[(2)] = null);

(statearr_37277_38617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37274 === (4))){
var inst_37238 = (state_37273[(7)]);
var inst_37238__$1 = (state_37273[(2)]);
var inst_37239 = (inst_37238__$1 == null);
var state_37273__$1 = (function (){var statearr_37278 = state_37273;
(statearr_37278[(7)] = inst_37238__$1);

return statearr_37278;
})();
if(cljs.core.truth_(inst_37239)){
var statearr_37279_38618 = state_37273__$1;
(statearr_37279_38618[(1)] = (5));

} else {
var statearr_37280_38619 = state_37273__$1;
(statearr_37280_38619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37274 === (15))){
var inst_37251 = (state_37273[(8)]);
var state_37273__$1 = state_37273;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37273__$1,(18),to,inst_37251);
} else {
if((state_val_37274 === (21))){
var inst_37264 = (state_37273[(2)]);
var state_37273__$1 = state_37273;
var statearr_37281_38620 = state_37273__$1;
(statearr_37281_38620[(2)] = inst_37264);

(statearr_37281_38620[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37274 === (13))){
var inst_37266 = (state_37273[(2)]);
var state_37273__$1 = (function (){var statearr_37282 = state_37273;
(statearr_37282[(9)] = inst_37266);

return statearr_37282;
})();
var statearr_37283_38621 = state_37273__$1;
(statearr_37283_38621[(2)] = null);

(statearr_37283_38621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37274 === (6))){
var inst_37238 = (state_37273[(7)]);
var state_37273__$1 = state_37273;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37273__$1,(11),inst_37238);
} else {
if((state_val_37274 === (17))){
var inst_37259 = (state_37273[(2)]);
var state_37273__$1 = state_37273;
if(cljs.core.truth_(inst_37259)){
var statearr_37284_38622 = state_37273__$1;
(statearr_37284_38622[(1)] = (19));

} else {
var statearr_37285_38623 = state_37273__$1;
(statearr_37285_38623[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37274 === (3))){
var inst_37271 = (state_37273[(2)]);
var state_37273__$1 = state_37273;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37273__$1,inst_37271);
} else {
if((state_val_37274 === (12))){
var inst_37248 = (state_37273[(10)]);
var state_37273__$1 = state_37273;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37273__$1,(14),inst_37248);
} else {
if((state_val_37274 === (2))){
var state_37273__$1 = state_37273;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37273__$1,(4),results);
} else {
if((state_val_37274 === (19))){
var state_37273__$1 = state_37273;
var statearr_37286_38624 = state_37273__$1;
(statearr_37286_38624[(2)] = null);

(statearr_37286_38624[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37274 === (11))){
var inst_37248 = (state_37273[(2)]);
var state_37273__$1 = (function (){var statearr_37287 = state_37273;
(statearr_37287[(10)] = inst_37248);

return statearr_37287;
})();
var statearr_37288_38625 = state_37273__$1;
(statearr_37288_38625[(2)] = null);

(statearr_37288_38625[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37274 === (9))){
var state_37273__$1 = state_37273;
var statearr_37289_38626 = state_37273__$1;
(statearr_37289_38626[(2)] = null);

(statearr_37289_38626[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37274 === (5))){
var state_37273__$1 = state_37273;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37290_38627 = state_37273__$1;
(statearr_37290_38627[(1)] = (8));

} else {
var statearr_37291_38628 = state_37273__$1;
(statearr_37291_38628[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37274 === (14))){
var inst_37251 = (state_37273[(8)]);
var inst_37251__$1 = (state_37273[(2)]);
var inst_37252 = (inst_37251__$1 == null);
var inst_37253 = cljs.core.not(inst_37252);
var state_37273__$1 = (function (){var statearr_37292 = state_37273;
(statearr_37292[(8)] = inst_37251__$1);

return statearr_37292;
})();
if(inst_37253){
var statearr_37293_38629 = state_37273__$1;
(statearr_37293_38629[(1)] = (15));

} else {
var statearr_37294_38630 = state_37273__$1;
(statearr_37294_38630[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37274 === (16))){
var state_37273__$1 = state_37273;
var statearr_37295_38631 = state_37273__$1;
(statearr_37295_38631[(2)] = false);

(statearr_37295_38631[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37274 === (10))){
var inst_37245 = (state_37273[(2)]);
var state_37273__$1 = state_37273;
var statearr_37296_38632 = state_37273__$1;
(statearr_37296_38632[(2)] = inst_37245);

(statearr_37296_38632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37274 === (18))){
var inst_37256 = (state_37273[(2)]);
var state_37273__$1 = state_37273;
var statearr_37297_38633 = state_37273__$1;
(statearr_37297_38633[(2)] = inst_37256);

(statearr_37297_38633[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37274 === (8))){
var inst_37242 = cljs.core.async.close_BANG_(to);
var state_37273__$1 = state_37273;
var statearr_37298_38634 = state_37273__$1;
(statearr_37298_38634[(2)] = inst_37242);

(statearr_37298_38634[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__36918__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36918__auto____0 = (function (){
var statearr_37299 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37299[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36918__auto__);

(statearr_37299[(1)] = (1));

return statearr_37299;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36918__auto____1 = (function (state_37273){
while(true){
var ret_value__36919__auto__ = (function (){try{while(true){
var result__36920__auto__ = switch__36917__auto__(state_37273);
if(cljs.core.keyword_identical_QMARK_(result__36920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36920__auto__;
}
break;
}
}catch (e37300){if((e37300 instanceof Object)){
var ex__36921__auto__ = e37300;
var statearr_37301_38635 = state_37273;
(statearr_37301_38635[(5)] = ex__36921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37300;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38636 = state_37273;
state_37273 = G__38636;
continue;
} else {
return ret_value__36919__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36918__auto__ = function(state_37273){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36918__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36918__auto____1.call(this,state_37273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36918__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36918__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36918__auto__;
})()
})();
var state__36987__auto__ = (function (){var statearr_37302 = (f__36986__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36986__auto__.cljs$core$IFn$_invoke$arity$0() : f__36986__auto__.call(null));
(statearr_37302[(6)] = c__36984__auto__);

return statearr_37302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36987__auto__);
}));

return c__36984__auto__;
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
var G__37304 = arguments.length;
switch (G__37304) {
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
var G__37306 = arguments.length;
switch (G__37306) {
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
var G__37308 = arguments.length;
switch (G__37308) {
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
var c__36984__auto___38640 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36986__auto__ = (function (){var switch__36917__auto__ = (function (state_37334){
var state_val_37335 = (state_37334[(1)]);
if((state_val_37335 === (7))){
var inst_37330 = (state_37334[(2)]);
var state_37334__$1 = state_37334;
var statearr_37336_38641 = state_37334__$1;
(statearr_37336_38641[(2)] = inst_37330);

(statearr_37336_38641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37335 === (1))){
var state_37334__$1 = state_37334;
var statearr_37337_38642 = state_37334__$1;
(statearr_37337_38642[(2)] = null);

(statearr_37337_38642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37335 === (4))){
var inst_37311 = (state_37334[(7)]);
var inst_37311__$1 = (state_37334[(2)]);
var inst_37312 = (inst_37311__$1 == null);
var state_37334__$1 = (function (){var statearr_37338 = state_37334;
(statearr_37338[(7)] = inst_37311__$1);

return statearr_37338;
})();
if(cljs.core.truth_(inst_37312)){
var statearr_37339_38643 = state_37334__$1;
(statearr_37339_38643[(1)] = (5));

} else {
var statearr_37340_38644 = state_37334__$1;
(statearr_37340_38644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37335 === (13))){
var state_37334__$1 = state_37334;
var statearr_37341_38645 = state_37334__$1;
(statearr_37341_38645[(2)] = null);

(statearr_37341_38645[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37335 === (6))){
var inst_37311 = (state_37334[(7)]);
var inst_37317 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37311) : p.call(null,inst_37311));
var state_37334__$1 = state_37334;
if(cljs.core.truth_(inst_37317)){
var statearr_37342_38646 = state_37334__$1;
(statearr_37342_38646[(1)] = (9));

} else {
var statearr_37343_38647 = state_37334__$1;
(statearr_37343_38647[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37335 === (3))){
var inst_37332 = (state_37334[(2)]);
var state_37334__$1 = state_37334;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37334__$1,inst_37332);
} else {
if((state_val_37335 === (12))){
var state_37334__$1 = state_37334;
var statearr_37344_38648 = state_37334__$1;
(statearr_37344_38648[(2)] = null);

(statearr_37344_38648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37335 === (2))){
var state_37334__$1 = state_37334;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37334__$1,(4),ch);
} else {
if((state_val_37335 === (11))){
var inst_37311 = (state_37334[(7)]);
var inst_37321 = (state_37334[(2)]);
var state_37334__$1 = state_37334;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37334__$1,(8),inst_37321,inst_37311);
} else {
if((state_val_37335 === (9))){
var state_37334__$1 = state_37334;
var statearr_37345_38649 = state_37334__$1;
(statearr_37345_38649[(2)] = tc);

(statearr_37345_38649[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37335 === (5))){
var inst_37314 = cljs.core.async.close_BANG_(tc);
var inst_37315 = cljs.core.async.close_BANG_(fc);
var state_37334__$1 = (function (){var statearr_37346 = state_37334;
(statearr_37346[(8)] = inst_37314);

return statearr_37346;
})();
var statearr_37347_38650 = state_37334__$1;
(statearr_37347_38650[(2)] = inst_37315);

(statearr_37347_38650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37335 === (14))){
var inst_37328 = (state_37334[(2)]);
var state_37334__$1 = state_37334;
var statearr_37348_38651 = state_37334__$1;
(statearr_37348_38651[(2)] = inst_37328);

(statearr_37348_38651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37335 === (10))){
var state_37334__$1 = state_37334;
var statearr_37349_38652 = state_37334__$1;
(statearr_37349_38652[(2)] = fc);

(statearr_37349_38652[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37335 === (8))){
var inst_37323 = (state_37334[(2)]);
var state_37334__$1 = state_37334;
if(cljs.core.truth_(inst_37323)){
var statearr_37350_38653 = state_37334__$1;
(statearr_37350_38653[(1)] = (12));

} else {
var statearr_37351_38654 = state_37334__$1;
(statearr_37351_38654[(1)] = (13));

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
var cljs$core$async$state_machine__36918__auto__ = null;
var cljs$core$async$state_machine__36918__auto____0 = (function (){
var statearr_37352 = [null,null,null,null,null,null,null,null,null];
(statearr_37352[(0)] = cljs$core$async$state_machine__36918__auto__);

(statearr_37352[(1)] = (1));

return statearr_37352;
});
var cljs$core$async$state_machine__36918__auto____1 = (function (state_37334){
while(true){
var ret_value__36919__auto__ = (function (){try{while(true){
var result__36920__auto__ = switch__36917__auto__(state_37334);
if(cljs.core.keyword_identical_QMARK_(result__36920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36920__auto__;
}
break;
}
}catch (e37353){if((e37353 instanceof Object)){
var ex__36921__auto__ = e37353;
var statearr_37354_38655 = state_37334;
(statearr_37354_38655[(5)] = ex__36921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37353;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38656 = state_37334;
state_37334 = G__38656;
continue;
} else {
return ret_value__36919__auto__;
}
break;
}
});
cljs$core$async$state_machine__36918__auto__ = function(state_37334){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36918__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36918__auto____1.call(this,state_37334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36918__auto____0;
cljs$core$async$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36918__auto____1;
return cljs$core$async$state_machine__36918__auto__;
})()
})();
var state__36987__auto__ = (function (){var statearr_37355 = (f__36986__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36986__auto__.cljs$core$IFn$_invoke$arity$0() : f__36986__auto__.call(null));
(statearr_37355[(6)] = c__36984__auto___38640);

return statearr_37355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36987__auto__);
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
var c__36984__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36986__auto__ = (function (){var switch__36917__auto__ = (function (state_37376){
var state_val_37377 = (state_37376[(1)]);
if((state_val_37377 === (7))){
var inst_37372 = (state_37376[(2)]);
var state_37376__$1 = state_37376;
var statearr_37378_38657 = state_37376__$1;
(statearr_37378_38657[(2)] = inst_37372);

(statearr_37378_38657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (1))){
var inst_37356 = init;
var state_37376__$1 = (function (){var statearr_37379 = state_37376;
(statearr_37379[(7)] = inst_37356);

return statearr_37379;
})();
var statearr_37380_38658 = state_37376__$1;
(statearr_37380_38658[(2)] = null);

(statearr_37380_38658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (4))){
var inst_37359 = (state_37376[(8)]);
var inst_37359__$1 = (state_37376[(2)]);
var inst_37360 = (inst_37359__$1 == null);
var state_37376__$1 = (function (){var statearr_37381 = state_37376;
(statearr_37381[(8)] = inst_37359__$1);

return statearr_37381;
})();
if(cljs.core.truth_(inst_37360)){
var statearr_37382_38659 = state_37376__$1;
(statearr_37382_38659[(1)] = (5));

} else {
var statearr_37383_38660 = state_37376__$1;
(statearr_37383_38660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (6))){
var inst_37359 = (state_37376[(8)]);
var inst_37363 = (state_37376[(9)]);
var inst_37356 = (state_37376[(7)]);
var inst_37363__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_37356,inst_37359) : f.call(null,inst_37356,inst_37359));
var inst_37364 = cljs.core.reduced_QMARK_(inst_37363__$1);
var state_37376__$1 = (function (){var statearr_37384 = state_37376;
(statearr_37384[(9)] = inst_37363__$1);

return statearr_37384;
})();
if(inst_37364){
var statearr_37385_38661 = state_37376__$1;
(statearr_37385_38661[(1)] = (8));

} else {
var statearr_37386_38662 = state_37376__$1;
(statearr_37386_38662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (3))){
var inst_37374 = (state_37376[(2)]);
var state_37376__$1 = state_37376;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37376__$1,inst_37374);
} else {
if((state_val_37377 === (2))){
var state_37376__$1 = state_37376;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37376__$1,(4),ch);
} else {
if((state_val_37377 === (9))){
var inst_37363 = (state_37376[(9)]);
var inst_37356 = inst_37363;
var state_37376__$1 = (function (){var statearr_37387 = state_37376;
(statearr_37387[(7)] = inst_37356);

return statearr_37387;
})();
var statearr_37388_38663 = state_37376__$1;
(statearr_37388_38663[(2)] = null);

(statearr_37388_38663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (5))){
var inst_37356 = (state_37376[(7)]);
var state_37376__$1 = state_37376;
var statearr_37389_38664 = state_37376__$1;
(statearr_37389_38664[(2)] = inst_37356);

(statearr_37389_38664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (10))){
var inst_37370 = (state_37376[(2)]);
var state_37376__$1 = state_37376;
var statearr_37390_38665 = state_37376__$1;
(statearr_37390_38665[(2)] = inst_37370);

(statearr_37390_38665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (8))){
var inst_37363 = (state_37376[(9)]);
var inst_37366 = cljs.core.deref(inst_37363);
var state_37376__$1 = state_37376;
var statearr_37391_38666 = state_37376__$1;
(statearr_37391_38666[(2)] = inst_37366);

(statearr_37391_38666[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__36918__auto__ = null;
var cljs$core$async$reduce_$_state_machine__36918__auto____0 = (function (){
var statearr_37392 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37392[(0)] = cljs$core$async$reduce_$_state_machine__36918__auto__);

(statearr_37392[(1)] = (1));

return statearr_37392;
});
var cljs$core$async$reduce_$_state_machine__36918__auto____1 = (function (state_37376){
while(true){
var ret_value__36919__auto__ = (function (){try{while(true){
var result__36920__auto__ = switch__36917__auto__(state_37376);
if(cljs.core.keyword_identical_QMARK_(result__36920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36920__auto__;
}
break;
}
}catch (e37393){if((e37393 instanceof Object)){
var ex__36921__auto__ = e37393;
var statearr_37394_38667 = state_37376;
(statearr_37394_38667[(5)] = ex__36921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37393;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38668 = state_37376;
state_37376 = G__38668;
continue;
} else {
return ret_value__36919__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__36918__auto__ = function(state_37376){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__36918__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__36918__auto____1.call(this,state_37376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__36918__auto____0;
cljs$core$async$reduce_$_state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__36918__auto____1;
return cljs$core$async$reduce_$_state_machine__36918__auto__;
})()
})();
var state__36987__auto__ = (function (){var statearr_37395 = (f__36986__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36986__auto__.cljs$core$IFn$_invoke$arity$0() : f__36986__auto__.call(null));
(statearr_37395[(6)] = c__36984__auto__);

return statearr_37395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36987__auto__);
}));

return c__36984__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__36984__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36986__auto__ = (function (){var switch__36917__auto__ = (function (state_37401){
var state_val_37402 = (state_37401[(1)]);
if((state_val_37402 === (1))){
var inst_37396 = cljs.core.async.reduce(f__$1,init,ch);
var state_37401__$1 = state_37401;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37401__$1,(2),inst_37396);
} else {
if((state_val_37402 === (2))){
var inst_37398 = (state_37401[(2)]);
var inst_37399 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_37398) : f__$1.call(null,inst_37398));
var state_37401__$1 = state_37401;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37401__$1,inst_37399);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__36918__auto__ = null;
var cljs$core$async$transduce_$_state_machine__36918__auto____0 = (function (){
var statearr_37403 = [null,null,null,null,null,null,null];
(statearr_37403[(0)] = cljs$core$async$transduce_$_state_machine__36918__auto__);

(statearr_37403[(1)] = (1));

return statearr_37403;
});
var cljs$core$async$transduce_$_state_machine__36918__auto____1 = (function (state_37401){
while(true){
var ret_value__36919__auto__ = (function (){try{while(true){
var result__36920__auto__ = switch__36917__auto__(state_37401);
if(cljs.core.keyword_identical_QMARK_(result__36920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36920__auto__;
}
break;
}
}catch (e37404){if((e37404 instanceof Object)){
var ex__36921__auto__ = e37404;
var statearr_37405_38669 = state_37401;
(statearr_37405_38669[(5)] = ex__36921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37404;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38670 = state_37401;
state_37401 = G__38670;
continue;
} else {
return ret_value__36919__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__36918__auto__ = function(state_37401){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__36918__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__36918__auto____1.call(this,state_37401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__36918__auto____0;
cljs$core$async$transduce_$_state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__36918__auto____1;
return cljs$core$async$transduce_$_state_machine__36918__auto__;
})()
})();
var state__36987__auto__ = (function (){var statearr_37406 = (f__36986__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36986__auto__.cljs$core$IFn$_invoke$arity$0() : f__36986__auto__.call(null));
(statearr_37406[(6)] = c__36984__auto__);

return statearr_37406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36987__auto__);
}));

return c__36984__auto__;
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
var G__37408 = arguments.length;
switch (G__37408) {
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
var c__36984__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36986__auto__ = (function (){var switch__36917__auto__ = (function (state_37433){
var state_val_37434 = (state_37433[(1)]);
if((state_val_37434 === (7))){
var inst_37415 = (state_37433[(2)]);
var state_37433__$1 = state_37433;
var statearr_37435_38672 = state_37433__$1;
(statearr_37435_38672[(2)] = inst_37415);

(statearr_37435_38672[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37434 === (1))){
var inst_37409 = cljs.core.seq(coll);
var inst_37410 = inst_37409;
var state_37433__$1 = (function (){var statearr_37436 = state_37433;
(statearr_37436[(7)] = inst_37410);

return statearr_37436;
})();
var statearr_37437_38673 = state_37433__$1;
(statearr_37437_38673[(2)] = null);

(statearr_37437_38673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37434 === (4))){
var inst_37410 = (state_37433[(7)]);
var inst_37413 = cljs.core.first(inst_37410);
var state_37433__$1 = state_37433;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37433__$1,(7),ch,inst_37413);
} else {
if((state_val_37434 === (13))){
var inst_37427 = (state_37433[(2)]);
var state_37433__$1 = state_37433;
var statearr_37438_38674 = state_37433__$1;
(statearr_37438_38674[(2)] = inst_37427);

(statearr_37438_38674[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37434 === (6))){
var inst_37418 = (state_37433[(2)]);
var state_37433__$1 = state_37433;
if(cljs.core.truth_(inst_37418)){
var statearr_37439_38675 = state_37433__$1;
(statearr_37439_38675[(1)] = (8));

} else {
var statearr_37440_38676 = state_37433__$1;
(statearr_37440_38676[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37434 === (3))){
var inst_37431 = (state_37433[(2)]);
var state_37433__$1 = state_37433;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37433__$1,inst_37431);
} else {
if((state_val_37434 === (12))){
var state_37433__$1 = state_37433;
var statearr_37441_38677 = state_37433__$1;
(statearr_37441_38677[(2)] = null);

(statearr_37441_38677[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37434 === (2))){
var inst_37410 = (state_37433[(7)]);
var state_37433__$1 = state_37433;
if(cljs.core.truth_(inst_37410)){
var statearr_37442_38678 = state_37433__$1;
(statearr_37442_38678[(1)] = (4));

} else {
var statearr_37443_38679 = state_37433__$1;
(statearr_37443_38679[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37434 === (11))){
var inst_37424 = cljs.core.async.close_BANG_(ch);
var state_37433__$1 = state_37433;
var statearr_37444_38680 = state_37433__$1;
(statearr_37444_38680[(2)] = inst_37424);

(statearr_37444_38680[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37434 === (9))){
var state_37433__$1 = state_37433;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37445_38681 = state_37433__$1;
(statearr_37445_38681[(1)] = (11));

} else {
var statearr_37446_38682 = state_37433__$1;
(statearr_37446_38682[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37434 === (5))){
var inst_37410 = (state_37433[(7)]);
var state_37433__$1 = state_37433;
var statearr_37447_38683 = state_37433__$1;
(statearr_37447_38683[(2)] = inst_37410);

(statearr_37447_38683[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37434 === (10))){
var inst_37429 = (state_37433[(2)]);
var state_37433__$1 = state_37433;
var statearr_37448_38684 = state_37433__$1;
(statearr_37448_38684[(2)] = inst_37429);

(statearr_37448_38684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37434 === (8))){
var inst_37410 = (state_37433[(7)]);
var inst_37420 = cljs.core.next(inst_37410);
var inst_37410__$1 = inst_37420;
var state_37433__$1 = (function (){var statearr_37449 = state_37433;
(statearr_37449[(7)] = inst_37410__$1);

return statearr_37449;
})();
var statearr_37450_38685 = state_37433__$1;
(statearr_37450_38685[(2)] = null);

(statearr_37450_38685[(1)] = (2));


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
var cljs$core$async$state_machine__36918__auto__ = null;
var cljs$core$async$state_machine__36918__auto____0 = (function (){
var statearr_37451 = [null,null,null,null,null,null,null,null];
(statearr_37451[(0)] = cljs$core$async$state_machine__36918__auto__);

(statearr_37451[(1)] = (1));

return statearr_37451;
});
var cljs$core$async$state_machine__36918__auto____1 = (function (state_37433){
while(true){
var ret_value__36919__auto__ = (function (){try{while(true){
var result__36920__auto__ = switch__36917__auto__(state_37433);
if(cljs.core.keyword_identical_QMARK_(result__36920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36920__auto__;
}
break;
}
}catch (e37452){if((e37452 instanceof Object)){
var ex__36921__auto__ = e37452;
var statearr_37453_38686 = state_37433;
(statearr_37453_38686[(5)] = ex__36921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37452;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38687 = state_37433;
state_37433 = G__38687;
continue;
} else {
return ret_value__36919__auto__;
}
break;
}
});
cljs$core$async$state_machine__36918__auto__ = function(state_37433){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36918__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36918__auto____1.call(this,state_37433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36918__auto____0;
cljs$core$async$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36918__auto____1;
return cljs$core$async$state_machine__36918__auto__;
})()
})();
var state__36987__auto__ = (function (){var statearr_37454 = (f__36986__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36986__auto__.cljs$core$IFn$_invoke$arity$0() : f__36986__auto__.call(null));
(statearr_37454[(6)] = c__36984__auto__);

return statearr_37454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36987__auto__);
}));

return c__36984__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37455 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37455 = (function (ch,cs,meta37456){
this.ch = ch;
this.cs = cs;
this.meta37456 = meta37456;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37457,meta37456__$1){
var self__ = this;
var _37457__$1 = this;
return (new cljs.core.async.t_cljs$core$async37455(self__.ch,self__.cs,meta37456__$1));
}));

(cljs.core.async.t_cljs$core$async37455.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37457){
var self__ = this;
var _37457__$1 = this;
return self__.meta37456;
}));

(cljs.core.async.t_cljs$core$async37455.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37455.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async37455.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37455.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async37455.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async37455.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async37455.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta37456","meta37456",1776009077,null)], null);
}));

(cljs.core.async.t_cljs$core$async37455.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37455.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37455");

(cljs.core.async.t_cljs$core$async37455.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37455");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37455.
 */
cljs.core.async.__GT_t_cljs$core$async37455 = (function cljs$core$async$mult_$___GT_t_cljs$core$async37455(ch__$1,cs__$1,meta37456){
return (new cljs.core.async.t_cljs$core$async37455(ch__$1,cs__$1,meta37456));
});

}

return (new cljs.core.async.t_cljs$core$async37455(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__36984__auto___38705 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36986__auto__ = (function (){var switch__36917__auto__ = (function (state_37592){
var state_val_37593 = (state_37592[(1)]);
if((state_val_37593 === (7))){
var inst_37588 = (state_37592[(2)]);
var state_37592__$1 = state_37592;
var statearr_37594_38706 = state_37592__$1;
(statearr_37594_38706[(2)] = inst_37588);

(statearr_37594_38706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (20))){
var inst_37491 = (state_37592[(7)]);
var inst_37503 = cljs.core.first(inst_37491);
var inst_37504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37503,(0),null);
var inst_37505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37503,(1),null);
var state_37592__$1 = (function (){var statearr_37595 = state_37592;
(statearr_37595[(8)] = inst_37504);

return statearr_37595;
})();
if(cljs.core.truth_(inst_37505)){
var statearr_37596_38707 = state_37592__$1;
(statearr_37596_38707[(1)] = (22));

} else {
var statearr_37597_38708 = state_37592__$1;
(statearr_37597_38708[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (27))){
var inst_37535 = (state_37592[(9)]);
var inst_37540 = (state_37592[(10)]);
var inst_37533 = (state_37592[(11)]);
var inst_37460 = (state_37592[(12)]);
var inst_37540__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37533,inst_37535);
var inst_37541 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37540__$1,inst_37460,done);
var state_37592__$1 = (function (){var statearr_37598 = state_37592;
(statearr_37598[(10)] = inst_37540__$1);

return statearr_37598;
})();
if(cljs.core.truth_(inst_37541)){
var statearr_37599_38709 = state_37592__$1;
(statearr_37599_38709[(1)] = (30));

} else {
var statearr_37600_38710 = state_37592__$1;
(statearr_37600_38710[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (1))){
var state_37592__$1 = state_37592;
var statearr_37601_38711 = state_37592__$1;
(statearr_37601_38711[(2)] = null);

(statearr_37601_38711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (24))){
var inst_37491 = (state_37592[(7)]);
var inst_37510 = (state_37592[(2)]);
var inst_37511 = cljs.core.next(inst_37491);
var inst_37469 = inst_37511;
var inst_37470 = null;
var inst_37471 = (0);
var inst_37472 = (0);
var state_37592__$1 = (function (){var statearr_37602 = state_37592;
(statearr_37602[(13)] = inst_37469);

(statearr_37602[(14)] = inst_37472);

(statearr_37602[(15)] = inst_37470);

(statearr_37602[(16)] = inst_37510);

(statearr_37602[(17)] = inst_37471);

return statearr_37602;
})();
var statearr_37603_38712 = state_37592__$1;
(statearr_37603_38712[(2)] = null);

(statearr_37603_38712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (39))){
var state_37592__$1 = state_37592;
var statearr_37607_38713 = state_37592__$1;
(statearr_37607_38713[(2)] = null);

(statearr_37607_38713[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (4))){
var inst_37460 = (state_37592[(12)]);
var inst_37460__$1 = (state_37592[(2)]);
var inst_37461 = (inst_37460__$1 == null);
var state_37592__$1 = (function (){var statearr_37608 = state_37592;
(statearr_37608[(12)] = inst_37460__$1);

return statearr_37608;
})();
if(cljs.core.truth_(inst_37461)){
var statearr_37609_38714 = state_37592__$1;
(statearr_37609_38714[(1)] = (5));

} else {
var statearr_37610_38715 = state_37592__$1;
(statearr_37610_38715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (15))){
var inst_37469 = (state_37592[(13)]);
var inst_37472 = (state_37592[(14)]);
var inst_37470 = (state_37592[(15)]);
var inst_37471 = (state_37592[(17)]);
var inst_37487 = (state_37592[(2)]);
var inst_37488 = (inst_37472 + (1));
var tmp37604 = inst_37469;
var tmp37605 = inst_37470;
var tmp37606 = inst_37471;
var inst_37469__$1 = tmp37604;
var inst_37470__$1 = tmp37605;
var inst_37471__$1 = tmp37606;
var inst_37472__$1 = inst_37488;
var state_37592__$1 = (function (){var statearr_37611 = state_37592;
(statearr_37611[(13)] = inst_37469__$1);

(statearr_37611[(14)] = inst_37472__$1);

(statearr_37611[(15)] = inst_37470__$1);

(statearr_37611[(18)] = inst_37487);

(statearr_37611[(17)] = inst_37471__$1);

return statearr_37611;
})();
var statearr_37612_38716 = state_37592__$1;
(statearr_37612_38716[(2)] = null);

(statearr_37612_38716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (21))){
var inst_37514 = (state_37592[(2)]);
var state_37592__$1 = state_37592;
var statearr_37616_38717 = state_37592__$1;
(statearr_37616_38717[(2)] = inst_37514);

(statearr_37616_38717[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (31))){
var inst_37540 = (state_37592[(10)]);
var inst_37544 = done(null);
var inst_37545 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37540);
var state_37592__$1 = (function (){var statearr_37617 = state_37592;
(statearr_37617[(19)] = inst_37544);

return statearr_37617;
})();
var statearr_37618_38718 = state_37592__$1;
(statearr_37618_38718[(2)] = inst_37545);

(statearr_37618_38718[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (32))){
var inst_37535 = (state_37592[(9)]);
var inst_37534 = (state_37592[(20)]);
var inst_37533 = (state_37592[(11)]);
var inst_37532 = (state_37592[(21)]);
var inst_37547 = (state_37592[(2)]);
var inst_37548 = (inst_37535 + (1));
var tmp37613 = inst_37534;
var tmp37614 = inst_37533;
var tmp37615 = inst_37532;
var inst_37532__$1 = tmp37615;
var inst_37533__$1 = tmp37614;
var inst_37534__$1 = tmp37613;
var inst_37535__$1 = inst_37548;
var state_37592__$1 = (function (){var statearr_37619 = state_37592;
(statearr_37619[(9)] = inst_37535__$1);

(statearr_37619[(20)] = inst_37534__$1);

(statearr_37619[(11)] = inst_37533__$1);

(statearr_37619[(21)] = inst_37532__$1);

(statearr_37619[(22)] = inst_37547);

return statearr_37619;
})();
var statearr_37620_38719 = state_37592__$1;
(statearr_37620_38719[(2)] = null);

(statearr_37620_38719[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (40))){
var inst_37560 = (state_37592[(23)]);
var inst_37564 = done(null);
var inst_37565 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37560);
var state_37592__$1 = (function (){var statearr_37621 = state_37592;
(statearr_37621[(24)] = inst_37564);

return statearr_37621;
})();
var statearr_37622_38720 = state_37592__$1;
(statearr_37622_38720[(2)] = inst_37565);

(statearr_37622_38720[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (33))){
var inst_37551 = (state_37592[(25)]);
var inst_37553 = cljs.core.chunked_seq_QMARK_(inst_37551);
var state_37592__$1 = state_37592;
if(inst_37553){
var statearr_37623_38721 = state_37592__$1;
(statearr_37623_38721[(1)] = (36));

} else {
var statearr_37624_38722 = state_37592__$1;
(statearr_37624_38722[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (13))){
var inst_37481 = (state_37592[(26)]);
var inst_37484 = cljs.core.async.close_BANG_(inst_37481);
var state_37592__$1 = state_37592;
var statearr_37625_38723 = state_37592__$1;
(statearr_37625_38723[(2)] = inst_37484);

(statearr_37625_38723[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (22))){
var inst_37504 = (state_37592[(8)]);
var inst_37507 = cljs.core.async.close_BANG_(inst_37504);
var state_37592__$1 = state_37592;
var statearr_37626_38724 = state_37592__$1;
(statearr_37626_38724[(2)] = inst_37507);

(statearr_37626_38724[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (36))){
var inst_37551 = (state_37592[(25)]);
var inst_37555 = cljs.core.chunk_first(inst_37551);
var inst_37556 = cljs.core.chunk_rest(inst_37551);
var inst_37557 = cljs.core.count(inst_37555);
var inst_37532 = inst_37556;
var inst_37533 = inst_37555;
var inst_37534 = inst_37557;
var inst_37535 = (0);
var state_37592__$1 = (function (){var statearr_37627 = state_37592;
(statearr_37627[(9)] = inst_37535);

(statearr_37627[(20)] = inst_37534);

(statearr_37627[(11)] = inst_37533);

(statearr_37627[(21)] = inst_37532);

return statearr_37627;
})();
var statearr_37628_38725 = state_37592__$1;
(statearr_37628_38725[(2)] = null);

(statearr_37628_38725[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (41))){
var inst_37551 = (state_37592[(25)]);
var inst_37567 = (state_37592[(2)]);
var inst_37568 = cljs.core.next(inst_37551);
var inst_37532 = inst_37568;
var inst_37533 = null;
var inst_37534 = (0);
var inst_37535 = (0);
var state_37592__$1 = (function (){var statearr_37629 = state_37592;
(statearr_37629[(9)] = inst_37535);

(statearr_37629[(20)] = inst_37534);

(statearr_37629[(27)] = inst_37567);

(statearr_37629[(11)] = inst_37533);

(statearr_37629[(21)] = inst_37532);

return statearr_37629;
})();
var statearr_37630_38726 = state_37592__$1;
(statearr_37630_38726[(2)] = null);

(statearr_37630_38726[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (43))){
var state_37592__$1 = state_37592;
var statearr_37631_38729 = state_37592__$1;
(statearr_37631_38729[(2)] = null);

(statearr_37631_38729[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (29))){
var inst_37576 = (state_37592[(2)]);
var state_37592__$1 = state_37592;
var statearr_37632_38732 = state_37592__$1;
(statearr_37632_38732[(2)] = inst_37576);

(statearr_37632_38732[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (44))){
var inst_37585 = (state_37592[(2)]);
var state_37592__$1 = (function (){var statearr_37633 = state_37592;
(statearr_37633[(28)] = inst_37585);

return statearr_37633;
})();
var statearr_37634_38733 = state_37592__$1;
(statearr_37634_38733[(2)] = null);

(statearr_37634_38733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (6))){
var inst_37524 = (state_37592[(29)]);
var inst_37523 = cljs.core.deref(cs);
var inst_37524__$1 = cljs.core.keys(inst_37523);
var inst_37525 = cljs.core.count(inst_37524__$1);
var inst_37526 = cljs.core.reset_BANG_(dctr,inst_37525);
var inst_37531 = cljs.core.seq(inst_37524__$1);
var inst_37532 = inst_37531;
var inst_37533 = null;
var inst_37534 = (0);
var inst_37535 = (0);
var state_37592__$1 = (function (){var statearr_37635 = state_37592;
(statearr_37635[(9)] = inst_37535);

(statearr_37635[(29)] = inst_37524__$1);

(statearr_37635[(20)] = inst_37534);

(statearr_37635[(11)] = inst_37533);

(statearr_37635[(21)] = inst_37532);

(statearr_37635[(30)] = inst_37526);

return statearr_37635;
})();
var statearr_37636_38734 = state_37592__$1;
(statearr_37636_38734[(2)] = null);

(statearr_37636_38734[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (28))){
var inst_37551 = (state_37592[(25)]);
var inst_37532 = (state_37592[(21)]);
var inst_37551__$1 = cljs.core.seq(inst_37532);
var state_37592__$1 = (function (){var statearr_37637 = state_37592;
(statearr_37637[(25)] = inst_37551__$1);

return statearr_37637;
})();
if(inst_37551__$1){
var statearr_37638_38736 = state_37592__$1;
(statearr_37638_38736[(1)] = (33));

} else {
var statearr_37639_38738 = state_37592__$1;
(statearr_37639_38738[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (25))){
var inst_37535 = (state_37592[(9)]);
var inst_37534 = (state_37592[(20)]);
var inst_37537 = (inst_37535 < inst_37534);
var inst_37538 = inst_37537;
var state_37592__$1 = state_37592;
if(cljs.core.truth_(inst_37538)){
var statearr_37640_38739 = state_37592__$1;
(statearr_37640_38739[(1)] = (27));

} else {
var statearr_37641_38740 = state_37592__$1;
(statearr_37641_38740[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (34))){
var state_37592__$1 = state_37592;
var statearr_37642_38742 = state_37592__$1;
(statearr_37642_38742[(2)] = null);

(statearr_37642_38742[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (17))){
var state_37592__$1 = state_37592;
var statearr_37643_38745 = state_37592__$1;
(statearr_37643_38745[(2)] = null);

(statearr_37643_38745[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (3))){
var inst_37590 = (state_37592[(2)]);
var state_37592__$1 = state_37592;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37592__$1,inst_37590);
} else {
if((state_val_37593 === (12))){
var inst_37519 = (state_37592[(2)]);
var state_37592__$1 = state_37592;
var statearr_37644_38750 = state_37592__$1;
(statearr_37644_38750[(2)] = inst_37519);

(statearr_37644_38750[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (2))){
var state_37592__$1 = state_37592;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37592__$1,(4),ch);
} else {
if((state_val_37593 === (23))){
var state_37592__$1 = state_37592;
var statearr_37645_38751 = state_37592__$1;
(statearr_37645_38751[(2)] = null);

(statearr_37645_38751[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (35))){
var inst_37574 = (state_37592[(2)]);
var state_37592__$1 = state_37592;
var statearr_37646_38752 = state_37592__$1;
(statearr_37646_38752[(2)] = inst_37574);

(statearr_37646_38752[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (19))){
var inst_37491 = (state_37592[(7)]);
var inst_37495 = cljs.core.chunk_first(inst_37491);
var inst_37496 = cljs.core.chunk_rest(inst_37491);
var inst_37497 = cljs.core.count(inst_37495);
var inst_37469 = inst_37496;
var inst_37470 = inst_37495;
var inst_37471 = inst_37497;
var inst_37472 = (0);
var state_37592__$1 = (function (){var statearr_37647 = state_37592;
(statearr_37647[(13)] = inst_37469);

(statearr_37647[(14)] = inst_37472);

(statearr_37647[(15)] = inst_37470);

(statearr_37647[(17)] = inst_37471);

return statearr_37647;
})();
var statearr_37648_38753 = state_37592__$1;
(statearr_37648_38753[(2)] = null);

(statearr_37648_38753[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (11))){
var inst_37469 = (state_37592[(13)]);
var inst_37491 = (state_37592[(7)]);
var inst_37491__$1 = cljs.core.seq(inst_37469);
var state_37592__$1 = (function (){var statearr_37649 = state_37592;
(statearr_37649[(7)] = inst_37491__$1);

return statearr_37649;
})();
if(inst_37491__$1){
var statearr_37650_38754 = state_37592__$1;
(statearr_37650_38754[(1)] = (16));

} else {
var statearr_37651_38755 = state_37592__$1;
(statearr_37651_38755[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (9))){
var inst_37521 = (state_37592[(2)]);
var state_37592__$1 = state_37592;
var statearr_37652_38756 = state_37592__$1;
(statearr_37652_38756[(2)] = inst_37521);

(statearr_37652_38756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (5))){
var inst_37467 = cljs.core.deref(cs);
var inst_37468 = cljs.core.seq(inst_37467);
var inst_37469 = inst_37468;
var inst_37470 = null;
var inst_37471 = (0);
var inst_37472 = (0);
var state_37592__$1 = (function (){var statearr_37653 = state_37592;
(statearr_37653[(13)] = inst_37469);

(statearr_37653[(14)] = inst_37472);

(statearr_37653[(15)] = inst_37470);

(statearr_37653[(17)] = inst_37471);

return statearr_37653;
})();
var statearr_37654_38757 = state_37592__$1;
(statearr_37654_38757[(2)] = null);

(statearr_37654_38757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (14))){
var state_37592__$1 = state_37592;
var statearr_37655_38758 = state_37592__$1;
(statearr_37655_38758[(2)] = null);

(statearr_37655_38758[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (45))){
var inst_37582 = (state_37592[(2)]);
var state_37592__$1 = state_37592;
var statearr_37656_38759 = state_37592__$1;
(statearr_37656_38759[(2)] = inst_37582);

(statearr_37656_38759[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (26))){
var inst_37524 = (state_37592[(29)]);
var inst_37578 = (state_37592[(2)]);
var inst_37579 = cljs.core.seq(inst_37524);
var state_37592__$1 = (function (){var statearr_37657 = state_37592;
(statearr_37657[(31)] = inst_37578);

return statearr_37657;
})();
if(inst_37579){
var statearr_37658_38760 = state_37592__$1;
(statearr_37658_38760[(1)] = (42));

} else {
var statearr_37659_38761 = state_37592__$1;
(statearr_37659_38761[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (16))){
var inst_37491 = (state_37592[(7)]);
var inst_37493 = cljs.core.chunked_seq_QMARK_(inst_37491);
var state_37592__$1 = state_37592;
if(inst_37493){
var statearr_37660_38762 = state_37592__$1;
(statearr_37660_38762[(1)] = (19));

} else {
var statearr_37661_38763 = state_37592__$1;
(statearr_37661_38763[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (38))){
var inst_37571 = (state_37592[(2)]);
var state_37592__$1 = state_37592;
var statearr_37662_38764 = state_37592__$1;
(statearr_37662_38764[(2)] = inst_37571);

(statearr_37662_38764[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (30))){
var state_37592__$1 = state_37592;
var statearr_37663_38766 = state_37592__$1;
(statearr_37663_38766[(2)] = null);

(statearr_37663_38766[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (10))){
var inst_37472 = (state_37592[(14)]);
var inst_37470 = (state_37592[(15)]);
var inst_37480 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37470,inst_37472);
var inst_37481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37480,(0),null);
var inst_37482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37480,(1),null);
var state_37592__$1 = (function (){var statearr_37664 = state_37592;
(statearr_37664[(26)] = inst_37481);

return statearr_37664;
})();
if(cljs.core.truth_(inst_37482)){
var statearr_37665_38769 = state_37592__$1;
(statearr_37665_38769[(1)] = (13));

} else {
var statearr_37666_38774 = state_37592__$1;
(statearr_37666_38774[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (18))){
var inst_37517 = (state_37592[(2)]);
var state_37592__$1 = state_37592;
var statearr_37667_38775 = state_37592__$1;
(statearr_37667_38775[(2)] = inst_37517);

(statearr_37667_38775[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (42))){
var state_37592__$1 = state_37592;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37592__$1,(45),dchan);
} else {
if((state_val_37593 === (37))){
var inst_37551 = (state_37592[(25)]);
var inst_37560 = (state_37592[(23)]);
var inst_37460 = (state_37592[(12)]);
var inst_37560__$1 = cljs.core.first(inst_37551);
var inst_37561 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37560__$1,inst_37460,done);
var state_37592__$1 = (function (){var statearr_37668 = state_37592;
(statearr_37668[(23)] = inst_37560__$1);

return statearr_37668;
})();
if(cljs.core.truth_(inst_37561)){
var statearr_37669_38786 = state_37592__$1;
(statearr_37669_38786[(1)] = (39));

} else {
var statearr_37670_38787 = state_37592__$1;
(statearr_37670_38787[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (8))){
var inst_37472 = (state_37592[(14)]);
var inst_37471 = (state_37592[(17)]);
var inst_37474 = (inst_37472 < inst_37471);
var inst_37475 = inst_37474;
var state_37592__$1 = state_37592;
if(cljs.core.truth_(inst_37475)){
var statearr_37671_38788 = state_37592__$1;
(statearr_37671_38788[(1)] = (10));

} else {
var statearr_37672_38789 = state_37592__$1;
(statearr_37672_38789[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__36918__auto__ = null;
var cljs$core$async$mult_$_state_machine__36918__auto____0 = (function (){
var statearr_37673 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37673[(0)] = cljs$core$async$mult_$_state_machine__36918__auto__);

(statearr_37673[(1)] = (1));

return statearr_37673;
});
var cljs$core$async$mult_$_state_machine__36918__auto____1 = (function (state_37592){
while(true){
var ret_value__36919__auto__ = (function (){try{while(true){
var result__36920__auto__ = switch__36917__auto__(state_37592);
if(cljs.core.keyword_identical_QMARK_(result__36920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36920__auto__;
}
break;
}
}catch (e37674){if((e37674 instanceof Object)){
var ex__36921__auto__ = e37674;
var statearr_37675_38790 = state_37592;
(statearr_37675_38790[(5)] = ex__36921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37674;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38791 = state_37592;
state_37592 = G__38791;
continue;
} else {
return ret_value__36919__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__36918__auto__ = function(state_37592){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__36918__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__36918__auto____1.call(this,state_37592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__36918__auto____0;
cljs$core$async$mult_$_state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__36918__auto____1;
return cljs$core$async$mult_$_state_machine__36918__auto__;
})()
})();
var state__36987__auto__ = (function (){var statearr_37676 = (f__36986__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36986__auto__.cljs$core$IFn$_invoke$arity$0() : f__36986__auto__.call(null));
(statearr_37676[(6)] = c__36984__auto___38705);

return statearr_37676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36987__auto__);
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
var G__37678 = arguments.length;
switch (G__37678) {
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
var len__4789__auto___38797 = arguments.length;
var i__4790__auto___38798 = (0);
while(true){
if((i__4790__auto___38798 < len__4789__auto___38797)){
args__4795__auto__.push((arguments[i__4790__auto___38798]));

var G__38799 = (i__4790__auto___38798 + (1));
i__4790__auto___38798 = G__38799;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37683){
var map__37684 = p__37683;
var map__37684__$1 = (((((!((map__37684 == null))))?(((((map__37684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37684):map__37684);
var opts = map__37684__$1;
var statearr_37686_38805 = state;
(statearr_37686_38805[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_37687_38808 = state;
(statearr_37687_38808[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_37688_38810 = state;
(statearr_37688_38810[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37679){
var G__37680 = cljs.core.first(seq37679);
var seq37679__$1 = cljs.core.next(seq37679);
var G__37681 = cljs.core.first(seq37679__$1);
var seq37679__$2 = cljs.core.next(seq37679__$1);
var G__37682 = cljs.core.first(seq37679__$2);
var seq37679__$3 = cljs.core.next(seq37679__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37680,G__37681,G__37682,seq37679__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37689 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37689 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta37690){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta37690 = meta37690;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37691,meta37690__$1){
var self__ = this;
var _37691__$1 = this;
return (new cljs.core.async.t_cljs$core$async37689(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta37690__$1));
}));

(cljs.core.async.t_cljs$core$async37689.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37691){
var self__ = this;
var _37691__$1 = this;
return self__.meta37690;
}));

(cljs.core.async.t_cljs$core$async37689.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37689.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async37689.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37689.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37689.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37689.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37689.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37689.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37689.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta37690","meta37690",672337426,null)], null);
}));

(cljs.core.async.t_cljs$core$async37689.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37689.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37689");

(cljs.core.async.t_cljs$core$async37689.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37689");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37689.
 */
cljs.core.async.__GT_t_cljs$core$async37689 = (function cljs$core$async$mix_$___GT_t_cljs$core$async37689(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37690){
return (new cljs.core.async.t_cljs$core$async37689(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37690));
});

}

return (new cljs.core.async.t_cljs$core$async37689(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36984__auto___38829 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36986__auto__ = (function (){var switch__36917__auto__ = (function (state_37793){
var state_val_37794 = (state_37793[(1)]);
if((state_val_37794 === (7))){
var inst_37708 = (state_37793[(2)]);
var state_37793__$1 = state_37793;
var statearr_37795_38830 = state_37793__$1;
(statearr_37795_38830[(2)] = inst_37708);

(statearr_37795_38830[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37794 === (20))){
var inst_37720 = (state_37793[(7)]);
var state_37793__$1 = state_37793;
var statearr_37796_38831 = state_37793__$1;
(statearr_37796_38831[(2)] = inst_37720);

(statearr_37796_38831[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37794 === (27))){
var state_37793__$1 = state_37793;
var statearr_37797_38832 = state_37793__$1;
(statearr_37797_38832[(2)] = null);

(statearr_37797_38832[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37794 === (1))){
var inst_37695 = (state_37793[(8)]);
var inst_37695__$1 = calc_state();
var inst_37697 = (inst_37695__$1 == null);
var inst_37698 = cljs.core.not(inst_37697);
var state_37793__$1 = (function (){var statearr_37798 = state_37793;
(statearr_37798[(8)] = inst_37695__$1);

return statearr_37798;
})();
if(inst_37698){
var statearr_37799_38833 = state_37793__$1;
(statearr_37799_38833[(1)] = (2));

} else {
var statearr_37800_38834 = state_37793__$1;
(statearr_37800_38834[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37794 === (24))){
var inst_37753 = (state_37793[(9)]);
var inst_37767 = (state_37793[(10)]);
var inst_37744 = (state_37793[(11)]);
var inst_37767__$1 = (inst_37744.cljs$core$IFn$_invoke$arity$1 ? inst_37744.cljs$core$IFn$_invoke$arity$1(inst_37753) : inst_37744.call(null,inst_37753));
var state_37793__$1 = (function (){var statearr_37801 = state_37793;
(statearr_37801[(10)] = inst_37767__$1);

return statearr_37801;
})();
if(cljs.core.truth_(inst_37767__$1)){
var statearr_37802_38835 = state_37793__$1;
(statearr_37802_38835[(1)] = (29));

} else {
var statearr_37803_38836 = state_37793__$1;
(statearr_37803_38836[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37794 === (4))){
var inst_37711 = (state_37793[(2)]);
var state_37793__$1 = state_37793;
if(cljs.core.truth_(inst_37711)){
var statearr_37804_38837 = state_37793__$1;
(statearr_37804_38837[(1)] = (8));

} else {
var statearr_37805_38838 = state_37793__$1;
(statearr_37805_38838[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37794 === (15))){
var inst_37738 = (state_37793[(2)]);
var state_37793__$1 = state_37793;
if(cljs.core.truth_(inst_37738)){
var statearr_37806_38839 = state_37793__$1;
(statearr_37806_38839[(1)] = (19));

} else {
var statearr_37807_38840 = state_37793__$1;
(statearr_37807_38840[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37794 === (21))){
var inst_37743 = (state_37793[(12)]);
var inst_37743__$1 = (state_37793[(2)]);
var inst_37744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37743__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37743__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37746 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37743__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_37793__$1 = (function (){var statearr_37808 = state_37793;
(statearr_37808[(12)] = inst_37743__$1);

(statearr_37808[(11)] = inst_37744);

(statearr_37808[(13)] = inst_37745);

return statearr_37808;
})();
return cljs.core.async.ioc_alts_BANG_(state_37793__$1,(22),inst_37746);
} else {
if((state_val_37794 === (31))){
var inst_37775 = (state_37793[(2)]);
var state_37793__$1 = state_37793;
if(cljs.core.truth_(inst_37775)){
var statearr_37809_38841 = state_37793__$1;
(statearr_37809_38841[(1)] = (32));

} else {
var statearr_37810_38842 = state_37793__$1;
(statearr_37810_38842[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37794 === (32))){
var inst_37752 = (state_37793[(14)]);
var state_37793__$1 = state_37793;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37793__$1,(35),out,inst_37752);
} else {
if((state_val_37794 === (33))){
var inst_37743 = (state_37793[(12)]);
var inst_37720 = inst_37743;
var state_37793__$1 = (function (){var statearr_37811 = state_37793;
(statearr_37811[(7)] = inst_37720);

return statearr_37811;
})();
var statearr_37812_38843 = state_37793__$1;
(statearr_37812_38843[(2)] = null);

(statearr_37812_38843[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37794 === (13))){
var inst_37720 = (state_37793[(7)]);
var inst_37727 = inst_37720.cljs$lang$protocol_mask$partition0$;
var inst_37728 = (inst_37727 & (64));
var inst_37729 = inst_37720.cljs$core$ISeq$;
var inst_37730 = (cljs.core.PROTOCOL_SENTINEL === inst_37729);
var inst_37731 = ((inst_37728) || (inst_37730));
var state_37793__$1 = state_37793;
if(cljs.core.truth_(inst_37731)){
var statearr_37813_38844 = state_37793__$1;
(statearr_37813_38844[(1)] = (16));

} else {
var statearr_37814_38845 = state_37793__$1;
(statearr_37814_38845[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37794 === (22))){
var inst_37752 = (state_37793[(14)]);
var inst_37753 = (state_37793[(9)]);
var inst_37751 = (state_37793[(2)]);
var inst_37752__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37751,(0),null);
var inst_37753__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37751,(1),null);
var inst_37754 = (inst_37752__$1 == null);
var inst_37755 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37753__$1,change);
var inst_37756 = ((inst_37754) || (inst_37755));
var state_37793__$1 = (function (){var statearr_37815 = state_37793;
(statearr_37815[(14)] = inst_37752__$1);

(statearr_37815[(9)] = inst_37753__$1);

return statearr_37815;
})();
if(cljs.core.truth_(inst_37756)){
var statearr_37816_38846 = state_37793__$1;
(statearr_37816_38846[(1)] = (23));

} else {
var statearr_37817_38847 = state_37793__$1;
(statearr_37817_38847[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37794 === (36))){
var inst_37743 = (state_37793[(12)]);
var inst_37720 = inst_37743;
var state_37793__$1 = (function (){var statearr_37818 = state_37793;
(statearr_37818[(7)] = inst_37720);

return statearr_37818;
})();
var statearr_37819_38848 = state_37793__$1;
(statearr_37819_38848[(2)] = null);

(statearr_37819_38848[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37794 === (29))){
var inst_37767 = (state_37793[(10)]);
var state_37793__$1 = state_37793;
var statearr_37820_38849 = state_37793__$1;
(statearr_37820_38849[(2)] = inst_37767);

(statearr_37820_38849[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37794 === (6))){
var state_37793__$1 = state_37793;
var statearr_37821_38850 = state_37793__$1;
(statearr_37821_38850[(2)] = false);

(statearr_37821_38850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37794 === (28))){
var inst_37763 = (state_37793[(2)]);
var inst_37764 = calc_state();
var inst_37720 = inst_37764;
var state_37793__$1 = (function (){var statearr_37822 = state_37793;
(statearr_37822[(7)] = inst_37720);

(statearr_37822[(15)] = inst_37763);

return statearr_37822;
})();
var statearr_37823_38851 = state_37793__$1;
(statearr_37823_38851[(2)] = null);

(statearr_37823_38851[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37794 === (25))){
var inst_37789 = (state_37793[(2)]);
var state_37793__$1 = state_37793;
var statearr_37824_38852 = state_37793__$1;
(statearr_37824_38852[(2)] = inst_37789);

(statearr_37824_38852[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37794 === (34))){
var inst_37787 = (state_37793[(2)]);
var state_37793__$1 = state_37793;
var statearr_37825_38853 = state_37793__$1;
(statearr_37825_38853[(2)] = inst_37787);

(statearr_37825_38853[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37794 === (17))){
var state_37793__$1 = state_37793;
var statearr_37826_38854 = state_37793__$1;
(statearr_37826_38854[(2)] = false);

(statearr_37826_38854[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37794 === (3))){
var state_37793__$1 = state_37793;
var statearr_37827_38855 = state_37793__$1;
(statearr_37827_38855[(2)] = false);

(statearr_37827_38855[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37794 === (12))){
var inst_37791 = (state_37793[(2)]);
var state_37793__$1 = state_37793;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37793__$1,inst_37791);
} else {
if((state_val_37794 === (2))){
var inst_37695 = (state_37793[(8)]);
var inst_37700 = inst_37695.cljs$lang$protocol_mask$partition0$;
var inst_37701 = (inst_37700 & (64));
var inst_37702 = inst_37695.cljs$core$ISeq$;
var inst_37703 = (cljs.core.PROTOCOL_SENTINEL === inst_37702);
var inst_37704 = ((inst_37701) || (inst_37703));
var state_37793__$1 = state_37793;
if(cljs.core.truth_(inst_37704)){
var statearr_37828_38856 = state_37793__$1;
(statearr_37828_38856[(1)] = (5));

} else {
var statearr_37829_38857 = state_37793__$1;
(statearr_37829_38857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37794 === (23))){
var inst_37752 = (state_37793[(14)]);
var inst_37758 = (inst_37752 == null);
var state_37793__$1 = state_37793;
if(cljs.core.truth_(inst_37758)){
var statearr_37830_38858 = state_37793__$1;
(statearr_37830_38858[(1)] = (26));

} else {
var statearr_37831_38859 = state_37793__$1;
(statearr_37831_38859[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37794 === (35))){
var inst_37778 = (state_37793[(2)]);
var state_37793__$1 = state_37793;
if(cljs.core.truth_(inst_37778)){
var statearr_37832_38860 = state_37793__$1;
(statearr_37832_38860[(1)] = (36));

} else {
var statearr_37833_38861 = state_37793__$1;
(statearr_37833_38861[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37794 === (19))){
var inst_37720 = (state_37793[(7)]);
var inst_37740 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37720);
var state_37793__$1 = state_37793;
var statearr_37834_38862 = state_37793__$1;
(statearr_37834_38862[(2)] = inst_37740);

(statearr_37834_38862[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37794 === (11))){
var inst_37720 = (state_37793[(7)]);
var inst_37724 = (inst_37720 == null);
var inst_37725 = cljs.core.not(inst_37724);
var state_37793__$1 = state_37793;
if(inst_37725){
var statearr_37835_38863 = state_37793__$1;
(statearr_37835_38863[(1)] = (13));

} else {
var statearr_37836_38864 = state_37793__$1;
(statearr_37836_38864[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37794 === (9))){
var inst_37695 = (state_37793[(8)]);
var state_37793__$1 = state_37793;
var statearr_37837_38865 = state_37793__$1;
(statearr_37837_38865[(2)] = inst_37695);

(statearr_37837_38865[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37794 === (5))){
var state_37793__$1 = state_37793;
var statearr_37838_38866 = state_37793__$1;
(statearr_37838_38866[(2)] = true);

(statearr_37838_38866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37794 === (14))){
var state_37793__$1 = state_37793;
var statearr_37839_38867 = state_37793__$1;
(statearr_37839_38867[(2)] = false);

(statearr_37839_38867[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37794 === (26))){
var inst_37753 = (state_37793[(9)]);
var inst_37760 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_37753);
var state_37793__$1 = state_37793;
var statearr_37840_38868 = state_37793__$1;
(statearr_37840_38868[(2)] = inst_37760);

(statearr_37840_38868[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37794 === (16))){
var state_37793__$1 = state_37793;
var statearr_37841_38869 = state_37793__$1;
(statearr_37841_38869[(2)] = true);

(statearr_37841_38869[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37794 === (38))){
var inst_37783 = (state_37793[(2)]);
var state_37793__$1 = state_37793;
var statearr_37842_38870 = state_37793__$1;
(statearr_37842_38870[(2)] = inst_37783);

(statearr_37842_38870[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37794 === (30))){
var inst_37753 = (state_37793[(9)]);
var inst_37744 = (state_37793[(11)]);
var inst_37745 = (state_37793[(13)]);
var inst_37770 = cljs.core.empty_QMARK_(inst_37744);
var inst_37771 = (inst_37745.cljs$core$IFn$_invoke$arity$1 ? inst_37745.cljs$core$IFn$_invoke$arity$1(inst_37753) : inst_37745.call(null,inst_37753));
var inst_37772 = cljs.core.not(inst_37771);
var inst_37773 = ((inst_37770) && (inst_37772));
var state_37793__$1 = state_37793;
var statearr_37843_38871 = state_37793__$1;
(statearr_37843_38871[(2)] = inst_37773);

(statearr_37843_38871[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37794 === (10))){
var inst_37695 = (state_37793[(8)]);
var inst_37716 = (state_37793[(2)]);
var inst_37717 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37716,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37718 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37716,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37719 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37716,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37720 = inst_37695;
var state_37793__$1 = (function (){var statearr_37844 = state_37793;
(statearr_37844[(7)] = inst_37720);

(statearr_37844[(16)] = inst_37717);

(statearr_37844[(17)] = inst_37718);

(statearr_37844[(18)] = inst_37719);

return statearr_37844;
})();
var statearr_37845_38872 = state_37793__$1;
(statearr_37845_38872[(2)] = null);

(statearr_37845_38872[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37794 === (18))){
var inst_37735 = (state_37793[(2)]);
var state_37793__$1 = state_37793;
var statearr_37846_38873 = state_37793__$1;
(statearr_37846_38873[(2)] = inst_37735);

(statearr_37846_38873[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37794 === (37))){
var state_37793__$1 = state_37793;
var statearr_37847_38874 = state_37793__$1;
(statearr_37847_38874[(2)] = null);

(statearr_37847_38874[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37794 === (8))){
var inst_37695 = (state_37793[(8)]);
var inst_37713 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37695);
var state_37793__$1 = state_37793;
var statearr_37848_38875 = state_37793__$1;
(statearr_37848_38875[(2)] = inst_37713);

(statearr_37848_38875[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__36918__auto__ = null;
var cljs$core$async$mix_$_state_machine__36918__auto____0 = (function (){
var statearr_37849 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37849[(0)] = cljs$core$async$mix_$_state_machine__36918__auto__);

(statearr_37849[(1)] = (1));

return statearr_37849;
});
var cljs$core$async$mix_$_state_machine__36918__auto____1 = (function (state_37793){
while(true){
var ret_value__36919__auto__ = (function (){try{while(true){
var result__36920__auto__ = switch__36917__auto__(state_37793);
if(cljs.core.keyword_identical_QMARK_(result__36920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36920__auto__;
}
break;
}
}catch (e37850){if((e37850 instanceof Object)){
var ex__36921__auto__ = e37850;
var statearr_37851_38878 = state_37793;
(statearr_37851_38878[(5)] = ex__36921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37850;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38879 = state_37793;
state_37793 = G__38879;
continue;
} else {
return ret_value__36919__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__36918__auto__ = function(state_37793){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__36918__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__36918__auto____1.call(this,state_37793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__36918__auto____0;
cljs$core$async$mix_$_state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__36918__auto____1;
return cljs$core$async$mix_$_state_machine__36918__auto__;
})()
})();
var state__36987__auto__ = (function (){var statearr_37852 = (f__36986__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36986__auto__.cljs$core$IFn$_invoke$arity$0() : f__36986__auto__.call(null));
(statearr_37852[(6)] = c__36984__auto___38829);

return statearr_37852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36987__auto__);
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
var G__37854 = arguments.length;
switch (G__37854) {
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
var G__37857 = arguments.length;
switch (G__37857) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__37855_SHARP_){
if(cljs.core.truth_((p1__37855_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37855_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__37855_SHARP_.call(null,topic)))){
return p1__37855_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37855_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37858 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37858 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta37859){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37859 = meta37859;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37860,meta37859__$1){
var self__ = this;
var _37860__$1 = this;
return (new cljs.core.async.t_cljs$core$async37858(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37859__$1));
}));

(cljs.core.async.t_cljs$core$async37858.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37860){
var self__ = this;
var _37860__$1 = this;
return self__.meta37859;
}));

(cljs.core.async.t_cljs$core$async37858.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37858.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async37858.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37858.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async37858.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async37858.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async37858.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async37858.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta37859","meta37859",-984530420,null)], null);
}));

(cljs.core.async.t_cljs$core$async37858.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37858.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37858");

(cljs.core.async.t_cljs$core$async37858.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37858");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37858.
 */
cljs.core.async.__GT_t_cljs$core$async37858 = (function cljs$core$async$__GT_t_cljs$core$async37858(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37859){
return (new cljs.core.async.t_cljs$core$async37858(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37859));
});

}

return (new cljs.core.async.t_cljs$core$async37858(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36984__auto___38890 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36986__auto__ = (function (){var switch__36917__auto__ = (function (state_37932){
var state_val_37933 = (state_37932[(1)]);
if((state_val_37933 === (7))){
var inst_37928 = (state_37932[(2)]);
var state_37932__$1 = state_37932;
var statearr_37934_38891 = state_37932__$1;
(statearr_37934_38891[(2)] = inst_37928);

(statearr_37934_38891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (20))){
var state_37932__$1 = state_37932;
var statearr_37935_38892 = state_37932__$1;
(statearr_37935_38892[(2)] = null);

(statearr_37935_38892[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (1))){
var state_37932__$1 = state_37932;
var statearr_37936_38893 = state_37932__$1;
(statearr_37936_38893[(2)] = null);

(statearr_37936_38893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (24))){
var inst_37911 = (state_37932[(7)]);
var inst_37920 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_37911);
var state_37932__$1 = state_37932;
var statearr_37937_38894 = state_37932__$1;
(statearr_37937_38894[(2)] = inst_37920);

(statearr_37937_38894[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (4))){
var inst_37863 = (state_37932[(8)]);
var inst_37863__$1 = (state_37932[(2)]);
var inst_37864 = (inst_37863__$1 == null);
var state_37932__$1 = (function (){var statearr_37938 = state_37932;
(statearr_37938[(8)] = inst_37863__$1);

return statearr_37938;
})();
if(cljs.core.truth_(inst_37864)){
var statearr_37939_38895 = state_37932__$1;
(statearr_37939_38895[(1)] = (5));

} else {
var statearr_37940_38896 = state_37932__$1;
(statearr_37940_38896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (15))){
var inst_37905 = (state_37932[(2)]);
var state_37932__$1 = state_37932;
var statearr_37941_38897 = state_37932__$1;
(statearr_37941_38897[(2)] = inst_37905);

(statearr_37941_38897[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (21))){
var inst_37925 = (state_37932[(2)]);
var state_37932__$1 = (function (){var statearr_37942 = state_37932;
(statearr_37942[(9)] = inst_37925);

return statearr_37942;
})();
var statearr_37943_38898 = state_37932__$1;
(statearr_37943_38898[(2)] = null);

(statearr_37943_38898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (13))){
var inst_37887 = (state_37932[(10)]);
var inst_37889 = cljs.core.chunked_seq_QMARK_(inst_37887);
var state_37932__$1 = state_37932;
if(inst_37889){
var statearr_37944_38899 = state_37932__$1;
(statearr_37944_38899[(1)] = (16));

} else {
var statearr_37945_38900 = state_37932__$1;
(statearr_37945_38900[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (22))){
var inst_37917 = (state_37932[(2)]);
var state_37932__$1 = state_37932;
if(cljs.core.truth_(inst_37917)){
var statearr_37946_38901 = state_37932__$1;
(statearr_37946_38901[(1)] = (23));

} else {
var statearr_37947_38902 = state_37932__$1;
(statearr_37947_38902[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (6))){
var inst_37911 = (state_37932[(7)]);
var inst_37863 = (state_37932[(8)]);
var inst_37913 = (state_37932[(11)]);
var inst_37911__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_37863) : topic_fn.call(null,inst_37863));
var inst_37912 = cljs.core.deref(mults);
var inst_37913__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37912,inst_37911__$1);
var state_37932__$1 = (function (){var statearr_37948 = state_37932;
(statearr_37948[(7)] = inst_37911__$1);

(statearr_37948[(11)] = inst_37913__$1);

return statearr_37948;
})();
if(cljs.core.truth_(inst_37913__$1)){
var statearr_37949_38903 = state_37932__$1;
(statearr_37949_38903[(1)] = (19));

} else {
var statearr_37950_38904 = state_37932__$1;
(statearr_37950_38904[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (25))){
var inst_37922 = (state_37932[(2)]);
var state_37932__$1 = state_37932;
var statearr_37951_38905 = state_37932__$1;
(statearr_37951_38905[(2)] = inst_37922);

(statearr_37951_38905[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (17))){
var inst_37887 = (state_37932[(10)]);
var inst_37896 = cljs.core.first(inst_37887);
var inst_37897 = cljs.core.async.muxch_STAR_(inst_37896);
var inst_37898 = cljs.core.async.close_BANG_(inst_37897);
var inst_37899 = cljs.core.next(inst_37887);
var inst_37873 = inst_37899;
var inst_37874 = null;
var inst_37875 = (0);
var inst_37876 = (0);
var state_37932__$1 = (function (){var statearr_37952 = state_37932;
(statearr_37952[(12)] = inst_37898);

(statearr_37952[(13)] = inst_37874);

(statearr_37952[(14)] = inst_37873);

(statearr_37952[(15)] = inst_37876);

(statearr_37952[(16)] = inst_37875);

return statearr_37952;
})();
var statearr_37953_38906 = state_37932__$1;
(statearr_37953_38906[(2)] = null);

(statearr_37953_38906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (3))){
var inst_37930 = (state_37932[(2)]);
var state_37932__$1 = state_37932;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37932__$1,inst_37930);
} else {
if((state_val_37933 === (12))){
var inst_37907 = (state_37932[(2)]);
var state_37932__$1 = state_37932;
var statearr_37954_38907 = state_37932__$1;
(statearr_37954_38907[(2)] = inst_37907);

(statearr_37954_38907[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (2))){
var state_37932__$1 = state_37932;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37932__$1,(4),ch);
} else {
if((state_val_37933 === (23))){
var state_37932__$1 = state_37932;
var statearr_37955_38908 = state_37932__$1;
(statearr_37955_38908[(2)] = null);

(statearr_37955_38908[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (19))){
var inst_37863 = (state_37932[(8)]);
var inst_37913 = (state_37932[(11)]);
var inst_37915 = cljs.core.async.muxch_STAR_(inst_37913);
var state_37932__$1 = state_37932;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37932__$1,(22),inst_37915,inst_37863);
} else {
if((state_val_37933 === (11))){
var inst_37887 = (state_37932[(10)]);
var inst_37873 = (state_37932[(14)]);
var inst_37887__$1 = cljs.core.seq(inst_37873);
var state_37932__$1 = (function (){var statearr_37956 = state_37932;
(statearr_37956[(10)] = inst_37887__$1);

return statearr_37956;
})();
if(inst_37887__$1){
var statearr_37957_38909 = state_37932__$1;
(statearr_37957_38909[(1)] = (13));

} else {
var statearr_37958_38910 = state_37932__$1;
(statearr_37958_38910[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (9))){
var inst_37909 = (state_37932[(2)]);
var state_37932__$1 = state_37932;
var statearr_37959_38911 = state_37932__$1;
(statearr_37959_38911[(2)] = inst_37909);

(statearr_37959_38911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (5))){
var inst_37870 = cljs.core.deref(mults);
var inst_37871 = cljs.core.vals(inst_37870);
var inst_37872 = cljs.core.seq(inst_37871);
var inst_37873 = inst_37872;
var inst_37874 = null;
var inst_37875 = (0);
var inst_37876 = (0);
var state_37932__$1 = (function (){var statearr_37960 = state_37932;
(statearr_37960[(13)] = inst_37874);

(statearr_37960[(14)] = inst_37873);

(statearr_37960[(15)] = inst_37876);

(statearr_37960[(16)] = inst_37875);

return statearr_37960;
})();
var statearr_37961_38913 = state_37932__$1;
(statearr_37961_38913[(2)] = null);

(statearr_37961_38913[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (14))){
var state_37932__$1 = state_37932;
var statearr_37965_38914 = state_37932__$1;
(statearr_37965_38914[(2)] = null);

(statearr_37965_38914[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (16))){
var inst_37887 = (state_37932[(10)]);
var inst_37891 = cljs.core.chunk_first(inst_37887);
var inst_37892 = cljs.core.chunk_rest(inst_37887);
var inst_37893 = cljs.core.count(inst_37891);
var inst_37873 = inst_37892;
var inst_37874 = inst_37891;
var inst_37875 = inst_37893;
var inst_37876 = (0);
var state_37932__$1 = (function (){var statearr_37966 = state_37932;
(statearr_37966[(13)] = inst_37874);

(statearr_37966[(14)] = inst_37873);

(statearr_37966[(15)] = inst_37876);

(statearr_37966[(16)] = inst_37875);

return statearr_37966;
})();
var statearr_37967_38916 = state_37932__$1;
(statearr_37967_38916[(2)] = null);

(statearr_37967_38916[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (10))){
var inst_37874 = (state_37932[(13)]);
var inst_37873 = (state_37932[(14)]);
var inst_37876 = (state_37932[(15)]);
var inst_37875 = (state_37932[(16)]);
var inst_37881 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37874,inst_37876);
var inst_37882 = cljs.core.async.muxch_STAR_(inst_37881);
var inst_37883 = cljs.core.async.close_BANG_(inst_37882);
var inst_37884 = (inst_37876 + (1));
var tmp37962 = inst_37874;
var tmp37963 = inst_37873;
var tmp37964 = inst_37875;
var inst_37873__$1 = tmp37963;
var inst_37874__$1 = tmp37962;
var inst_37875__$1 = tmp37964;
var inst_37876__$1 = inst_37884;
var state_37932__$1 = (function (){var statearr_37968 = state_37932;
(statearr_37968[(13)] = inst_37874__$1);

(statearr_37968[(14)] = inst_37873__$1);

(statearr_37968[(15)] = inst_37876__$1);

(statearr_37968[(17)] = inst_37883);

(statearr_37968[(16)] = inst_37875__$1);

return statearr_37968;
})();
var statearr_37969_38920 = state_37932__$1;
(statearr_37969_38920[(2)] = null);

(statearr_37969_38920[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (18))){
var inst_37902 = (state_37932[(2)]);
var state_37932__$1 = state_37932;
var statearr_37970_38921 = state_37932__$1;
(statearr_37970_38921[(2)] = inst_37902);

(statearr_37970_38921[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (8))){
var inst_37876 = (state_37932[(15)]);
var inst_37875 = (state_37932[(16)]);
var inst_37878 = (inst_37876 < inst_37875);
var inst_37879 = inst_37878;
var state_37932__$1 = state_37932;
if(cljs.core.truth_(inst_37879)){
var statearr_37971_38922 = state_37932__$1;
(statearr_37971_38922[(1)] = (10));

} else {
var statearr_37972_38923 = state_37932__$1;
(statearr_37972_38923[(1)] = (11));

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
var cljs$core$async$state_machine__36918__auto__ = null;
var cljs$core$async$state_machine__36918__auto____0 = (function (){
var statearr_37973 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37973[(0)] = cljs$core$async$state_machine__36918__auto__);

(statearr_37973[(1)] = (1));

return statearr_37973;
});
var cljs$core$async$state_machine__36918__auto____1 = (function (state_37932){
while(true){
var ret_value__36919__auto__ = (function (){try{while(true){
var result__36920__auto__ = switch__36917__auto__(state_37932);
if(cljs.core.keyword_identical_QMARK_(result__36920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36920__auto__;
}
break;
}
}catch (e37974){if((e37974 instanceof Object)){
var ex__36921__auto__ = e37974;
var statearr_37975_38925 = state_37932;
(statearr_37975_38925[(5)] = ex__36921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37974;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38926 = state_37932;
state_37932 = G__38926;
continue;
} else {
return ret_value__36919__auto__;
}
break;
}
});
cljs$core$async$state_machine__36918__auto__ = function(state_37932){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36918__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36918__auto____1.call(this,state_37932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36918__auto____0;
cljs$core$async$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36918__auto____1;
return cljs$core$async$state_machine__36918__auto__;
})()
})();
var state__36987__auto__ = (function (){var statearr_37976 = (f__36986__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36986__auto__.cljs$core$IFn$_invoke$arity$0() : f__36986__auto__.call(null));
(statearr_37976[(6)] = c__36984__auto___38890);

return statearr_37976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36987__auto__);
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
var G__37978 = arguments.length;
switch (G__37978) {
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
var G__37980 = arguments.length;
switch (G__37980) {
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
var G__37982 = arguments.length;
switch (G__37982) {
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
var c__36984__auto___38933 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36986__auto__ = (function (){var switch__36917__auto__ = (function (state_38021){
var state_val_38022 = (state_38021[(1)]);
if((state_val_38022 === (7))){
var state_38021__$1 = state_38021;
var statearr_38023_38934 = state_38021__$1;
(statearr_38023_38934[(2)] = null);

(statearr_38023_38934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38022 === (1))){
var state_38021__$1 = state_38021;
var statearr_38024_38935 = state_38021__$1;
(statearr_38024_38935[(2)] = null);

(statearr_38024_38935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38022 === (4))){
var inst_37985 = (state_38021[(7)]);
var inst_37987 = (inst_37985 < cnt);
var state_38021__$1 = state_38021;
if(cljs.core.truth_(inst_37987)){
var statearr_38025_38936 = state_38021__$1;
(statearr_38025_38936[(1)] = (6));

} else {
var statearr_38026_38937 = state_38021__$1;
(statearr_38026_38937[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38022 === (15))){
var inst_38017 = (state_38021[(2)]);
var state_38021__$1 = state_38021;
var statearr_38027_38938 = state_38021__$1;
(statearr_38027_38938[(2)] = inst_38017);

(statearr_38027_38938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38022 === (13))){
var inst_38010 = cljs.core.async.close_BANG_(out);
var state_38021__$1 = state_38021;
var statearr_38028_38939 = state_38021__$1;
(statearr_38028_38939[(2)] = inst_38010);

(statearr_38028_38939[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38022 === (6))){
var state_38021__$1 = state_38021;
var statearr_38029_38940 = state_38021__$1;
(statearr_38029_38940[(2)] = null);

(statearr_38029_38940[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38022 === (3))){
var inst_38019 = (state_38021[(2)]);
var state_38021__$1 = state_38021;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38021__$1,inst_38019);
} else {
if((state_val_38022 === (12))){
var inst_38007 = (state_38021[(8)]);
var inst_38007__$1 = (state_38021[(2)]);
var inst_38008 = cljs.core.some(cljs.core.nil_QMARK_,inst_38007__$1);
var state_38021__$1 = (function (){var statearr_38030 = state_38021;
(statearr_38030[(8)] = inst_38007__$1);

return statearr_38030;
})();
if(cljs.core.truth_(inst_38008)){
var statearr_38031_38941 = state_38021__$1;
(statearr_38031_38941[(1)] = (13));

} else {
var statearr_38032_38942 = state_38021__$1;
(statearr_38032_38942[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38022 === (2))){
var inst_37984 = cljs.core.reset_BANG_(dctr,cnt);
var inst_37985 = (0);
var state_38021__$1 = (function (){var statearr_38033 = state_38021;
(statearr_38033[(7)] = inst_37985);

(statearr_38033[(9)] = inst_37984);

return statearr_38033;
})();
var statearr_38034_38943 = state_38021__$1;
(statearr_38034_38943[(2)] = null);

(statearr_38034_38943[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38022 === (11))){
var inst_37985 = (state_38021[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_38021,(10),Object,null,(9));
var inst_37994 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_37985) : chs__$1.call(null,inst_37985));
var inst_37995 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_37985) : done.call(null,inst_37985));
var inst_37996 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_37994,inst_37995);
var state_38021__$1 = state_38021;
var statearr_38035_38944 = state_38021__$1;
(statearr_38035_38944[(2)] = inst_37996);


cljs.core.async.impl.ioc_helpers.process_exception(state_38021__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38022 === (9))){
var inst_37985 = (state_38021[(7)]);
var inst_37998 = (state_38021[(2)]);
var inst_37999 = (inst_37985 + (1));
var inst_37985__$1 = inst_37999;
var state_38021__$1 = (function (){var statearr_38036 = state_38021;
(statearr_38036[(10)] = inst_37998);

(statearr_38036[(7)] = inst_37985__$1);

return statearr_38036;
})();
var statearr_38037_38945 = state_38021__$1;
(statearr_38037_38945[(2)] = null);

(statearr_38037_38945[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38022 === (5))){
var inst_38005 = (state_38021[(2)]);
var state_38021__$1 = (function (){var statearr_38038 = state_38021;
(statearr_38038[(11)] = inst_38005);

return statearr_38038;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38021__$1,(12),dchan);
} else {
if((state_val_38022 === (14))){
var inst_38007 = (state_38021[(8)]);
var inst_38012 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_38007);
var state_38021__$1 = state_38021;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38021__$1,(16),out,inst_38012);
} else {
if((state_val_38022 === (16))){
var inst_38014 = (state_38021[(2)]);
var state_38021__$1 = (function (){var statearr_38039 = state_38021;
(statearr_38039[(12)] = inst_38014);

return statearr_38039;
})();
var statearr_38040_38946 = state_38021__$1;
(statearr_38040_38946[(2)] = null);

(statearr_38040_38946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38022 === (10))){
var inst_37989 = (state_38021[(2)]);
var inst_37990 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_38021__$1 = (function (){var statearr_38041 = state_38021;
(statearr_38041[(13)] = inst_37989);

return statearr_38041;
})();
var statearr_38042_38947 = state_38021__$1;
(statearr_38042_38947[(2)] = inst_37990);


cljs.core.async.impl.ioc_helpers.process_exception(state_38021__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38022 === (8))){
var inst_38003 = (state_38021[(2)]);
var state_38021__$1 = state_38021;
var statearr_38043_38948 = state_38021__$1;
(statearr_38043_38948[(2)] = inst_38003);

(statearr_38043_38948[(1)] = (5));


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
var cljs$core$async$state_machine__36918__auto__ = null;
var cljs$core$async$state_machine__36918__auto____0 = (function (){
var statearr_38044 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38044[(0)] = cljs$core$async$state_machine__36918__auto__);

(statearr_38044[(1)] = (1));

return statearr_38044;
});
var cljs$core$async$state_machine__36918__auto____1 = (function (state_38021){
while(true){
var ret_value__36919__auto__ = (function (){try{while(true){
var result__36920__auto__ = switch__36917__auto__(state_38021);
if(cljs.core.keyword_identical_QMARK_(result__36920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36920__auto__;
}
break;
}
}catch (e38045){if((e38045 instanceof Object)){
var ex__36921__auto__ = e38045;
var statearr_38046_38949 = state_38021;
(statearr_38046_38949[(5)] = ex__36921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38045;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38950 = state_38021;
state_38021 = G__38950;
continue;
} else {
return ret_value__36919__auto__;
}
break;
}
});
cljs$core$async$state_machine__36918__auto__ = function(state_38021){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36918__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36918__auto____1.call(this,state_38021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36918__auto____0;
cljs$core$async$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36918__auto____1;
return cljs$core$async$state_machine__36918__auto__;
})()
})();
var state__36987__auto__ = (function (){var statearr_38047 = (f__36986__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36986__auto__.cljs$core$IFn$_invoke$arity$0() : f__36986__auto__.call(null));
(statearr_38047[(6)] = c__36984__auto___38933);

return statearr_38047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36987__auto__);
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
var G__38050 = arguments.length;
switch (G__38050) {
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
var c__36984__auto___38952 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36986__auto__ = (function (){var switch__36917__auto__ = (function (state_38082){
var state_val_38083 = (state_38082[(1)]);
if((state_val_38083 === (7))){
var inst_38061 = (state_38082[(7)]);
var inst_38062 = (state_38082[(8)]);
var inst_38061__$1 = (state_38082[(2)]);
var inst_38062__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38061__$1,(0),null);
var inst_38063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38061__$1,(1),null);
var inst_38064 = (inst_38062__$1 == null);
var state_38082__$1 = (function (){var statearr_38084 = state_38082;
(statearr_38084[(7)] = inst_38061__$1);

(statearr_38084[(9)] = inst_38063);

(statearr_38084[(8)] = inst_38062__$1);

return statearr_38084;
})();
if(cljs.core.truth_(inst_38064)){
var statearr_38085_38953 = state_38082__$1;
(statearr_38085_38953[(1)] = (8));

} else {
var statearr_38086_38954 = state_38082__$1;
(statearr_38086_38954[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38083 === (1))){
var inst_38051 = cljs.core.vec(chs);
var inst_38052 = inst_38051;
var state_38082__$1 = (function (){var statearr_38087 = state_38082;
(statearr_38087[(10)] = inst_38052);

return statearr_38087;
})();
var statearr_38088_38955 = state_38082__$1;
(statearr_38088_38955[(2)] = null);

(statearr_38088_38955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38083 === (4))){
var inst_38052 = (state_38082[(10)]);
var state_38082__$1 = state_38082;
return cljs.core.async.ioc_alts_BANG_(state_38082__$1,(7),inst_38052);
} else {
if((state_val_38083 === (6))){
var inst_38078 = (state_38082[(2)]);
var state_38082__$1 = state_38082;
var statearr_38089_38956 = state_38082__$1;
(statearr_38089_38956[(2)] = inst_38078);

(statearr_38089_38956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38083 === (3))){
var inst_38080 = (state_38082[(2)]);
var state_38082__$1 = state_38082;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38082__$1,inst_38080);
} else {
if((state_val_38083 === (2))){
var inst_38052 = (state_38082[(10)]);
var inst_38054 = cljs.core.count(inst_38052);
var inst_38055 = (inst_38054 > (0));
var state_38082__$1 = state_38082;
if(cljs.core.truth_(inst_38055)){
var statearr_38091_38957 = state_38082__$1;
(statearr_38091_38957[(1)] = (4));

} else {
var statearr_38092_38958 = state_38082__$1;
(statearr_38092_38958[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38083 === (11))){
var inst_38052 = (state_38082[(10)]);
var inst_38071 = (state_38082[(2)]);
var tmp38090 = inst_38052;
var inst_38052__$1 = tmp38090;
var state_38082__$1 = (function (){var statearr_38093 = state_38082;
(statearr_38093[(10)] = inst_38052__$1);

(statearr_38093[(11)] = inst_38071);

return statearr_38093;
})();
var statearr_38094_38959 = state_38082__$1;
(statearr_38094_38959[(2)] = null);

(statearr_38094_38959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38083 === (9))){
var inst_38062 = (state_38082[(8)]);
var state_38082__$1 = state_38082;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38082__$1,(11),out,inst_38062);
} else {
if((state_val_38083 === (5))){
var inst_38076 = cljs.core.async.close_BANG_(out);
var state_38082__$1 = state_38082;
var statearr_38095_38960 = state_38082__$1;
(statearr_38095_38960[(2)] = inst_38076);

(statearr_38095_38960[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38083 === (10))){
var inst_38074 = (state_38082[(2)]);
var state_38082__$1 = state_38082;
var statearr_38096_38961 = state_38082__$1;
(statearr_38096_38961[(2)] = inst_38074);

(statearr_38096_38961[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38083 === (8))){
var inst_38052 = (state_38082[(10)]);
var inst_38061 = (state_38082[(7)]);
var inst_38063 = (state_38082[(9)]);
var inst_38062 = (state_38082[(8)]);
var inst_38066 = (function (){var cs = inst_38052;
var vec__38057 = inst_38061;
var v = inst_38062;
var c = inst_38063;
return (function (p1__38048_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__38048_SHARP_);
});
})();
var inst_38067 = cljs.core.filterv(inst_38066,inst_38052);
var inst_38052__$1 = inst_38067;
var state_38082__$1 = (function (){var statearr_38097 = state_38082;
(statearr_38097[(10)] = inst_38052__$1);

return statearr_38097;
})();
var statearr_38098_38962 = state_38082__$1;
(statearr_38098_38962[(2)] = null);

(statearr_38098_38962[(1)] = (2));


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
var cljs$core$async$state_machine__36918__auto__ = null;
var cljs$core$async$state_machine__36918__auto____0 = (function (){
var statearr_38099 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38099[(0)] = cljs$core$async$state_machine__36918__auto__);

(statearr_38099[(1)] = (1));

return statearr_38099;
});
var cljs$core$async$state_machine__36918__auto____1 = (function (state_38082){
while(true){
var ret_value__36919__auto__ = (function (){try{while(true){
var result__36920__auto__ = switch__36917__auto__(state_38082);
if(cljs.core.keyword_identical_QMARK_(result__36920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36920__auto__;
}
break;
}
}catch (e38100){if((e38100 instanceof Object)){
var ex__36921__auto__ = e38100;
var statearr_38101_38963 = state_38082;
(statearr_38101_38963[(5)] = ex__36921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38100;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38964 = state_38082;
state_38082 = G__38964;
continue;
} else {
return ret_value__36919__auto__;
}
break;
}
});
cljs$core$async$state_machine__36918__auto__ = function(state_38082){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36918__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36918__auto____1.call(this,state_38082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36918__auto____0;
cljs$core$async$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36918__auto____1;
return cljs$core$async$state_machine__36918__auto__;
})()
})();
var state__36987__auto__ = (function (){var statearr_38102 = (f__36986__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36986__auto__.cljs$core$IFn$_invoke$arity$0() : f__36986__auto__.call(null));
(statearr_38102[(6)] = c__36984__auto___38952);

return statearr_38102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36987__auto__);
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
var G__38104 = arguments.length;
switch (G__38104) {
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
var c__36984__auto___38969 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36986__auto__ = (function (){var switch__36917__auto__ = (function (state_38128){
var state_val_38129 = (state_38128[(1)]);
if((state_val_38129 === (7))){
var inst_38110 = (state_38128[(7)]);
var inst_38110__$1 = (state_38128[(2)]);
var inst_38111 = (inst_38110__$1 == null);
var inst_38112 = cljs.core.not(inst_38111);
var state_38128__$1 = (function (){var statearr_38130 = state_38128;
(statearr_38130[(7)] = inst_38110__$1);

return statearr_38130;
})();
if(inst_38112){
var statearr_38131_38970 = state_38128__$1;
(statearr_38131_38970[(1)] = (8));

} else {
var statearr_38132_38971 = state_38128__$1;
(statearr_38132_38971[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38129 === (1))){
var inst_38105 = (0);
var state_38128__$1 = (function (){var statearr_38133 = state_38128;
(statearr_38133[(8)] = inst_38105);

return statearr_38133;
})();
var statearr_38134_38972 = state_38128__$1;
(statearr_38134_38972[(2)] = null);

(statearr_38134_38972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38129 === (4))){
var state_38128__$1 = state_38128;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38128__$1,(7),ch);
} else {
if((state_val_38129 === (6))){
var inst_38123 = (state_38128[(2)]);
var state_38128__$1 = state_38128;
var statearr_38135_38974 = state_38128__$1;
(statearr_38135_38974[(2)] = inst_38123);

(statearr_38135_38974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38129 === (3))){
var inst_38125 = (state_38128[(2)]);
var inst_38126 = cljs.core.async.close_BANG_(out);
var state_38128__$1 = (function (){var statearr_38136 = state_38128;
(statearr_38136[(9)] = inst_38125);

return statearr_38136;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38128__$1,inst_38126);
} else {
if((state_val_38129 === (2))){
var inst_38105 = (state_38128[(8)]);
var inst_38107 = (inst_38105 < n);
var state_38128__$1 = state_38128;
if(cljs.core.truth_(inst_38107)){
var statearr_38137_38976 = state_38128__$1;
(statearr_38137_38976[(1)] = (4));

} else {
var statearr_38138_38977 = state_38128__$1;
(statearr_38138_38977[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38129 === (11))){
var inst_38105 = (state_38128[(8)]);
var inst_38115 = (state_38128[(2)]);
var inst_38116 = (inst_38105 + (1));
var inst_38105__$1 = inst_38116;
var state_38128__$1 = (function (){var statearr_38139 = state_38128;
(statearr_38139[(10)] = inst_38115);

(statearr_38139[(8)] = inst_38105__$1);

return statearr_38139;
})();
var statearr_38140_38978 = state_38128__$1;
(statearr_38140_38978[(2)] = null);

(statearr_38140_38978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38129 === (9))){
var state_38128__$1 = state_38128;
var statearr_38141_38979 = state_38128__$1;
(statearr_38141_38979[(2)] = null);

(statearr_38141_38979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38129 === (5))){
var state_38128__$1 = state_38128;
var statearr_38142_38980 = state_38128__$1;
(statearr_38142_38980[(2)] = null);

(statearr_38142_38980[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38129 === (10))){
var inst_38120 = (state_38128[(2)]);
var state_38128__$1 = state_38128;
var statearr_38143_38981 = state_38128__$1;
(statearr_38143_38981[(2)] = inst_38120);

(statearr_38143_38981[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38129 === (8))){
var inst_38110 = (state_38128[(7)]);
var state_38128__$1 = state_38128;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38128__$1,(11),out,inst_38110);
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
var cljs$core$async$state_machine__36918__auto__ = null;
var cljs$core$async$state_machine__36918__auto____0 = (function (){
var statearr_38144 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38144[(0)] = cljs$core$async$state_machine__36918__auto__);

(statearr_38144[(1)] = (1));

return statearr_38144;
});
var cljs$core$async$state_machine__36918__auto____1 = (function (state_38128){
while(true){
var ret_value__36919__auto__ = (function (){try{while(true){
var result__36920__auto__ = switch__36917__auto__(state_38128);
if(cljs.core.keyword_identical_QMARK_(result__36920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36920__auto__;
}
break;
}
}catch (e38145){if((e38145 instanceof Object)){
var ex__36921__auto__ = e38145;
var statearr_38146_38982 = state_38128;
(statearr_38146_38982[(5)] = ex__36921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38145;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38983 = state_38128;
state_38128 = G__38983;
continue;
} else {
return ret_value__36919__auto__;
}
break;
}
});
cljs$core$async$state_machine__36918__auto__ = function(state_38128){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36918__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36918__auto____1.call(this,state_38128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36918__auto____0;
cljs$core$async$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36918__auto____1;
return cljs$core$async$state_machine__36918__auto__;
})()
})();
var state__36987__auto__ = (function (){var statearr_38147 = (f__36986__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36986__auto__.cljs$core$IFn$_invoke$arity$0() : f__36986__auto__.call(null));
(statearr_38147[(6)] = c__36984__auto___38969);

return statearr_38147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36987__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38149 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38149 = (function (f,ch,meta38150){
this.f = f;
this.ch = ch;
this.meta38150 = meta38150;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38151,meta38150__$1){
var self__ = this;
var _38151__$1 = this;
return (new cljs.core.async.t_cljs$core$async38149(self__.f,self__.ch,meta38150__$1));
}));

(cljs.core.async.t_cljs$core$async38149.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38151){
var self__ = this;
var _38151__$1 = this;
return self__.meta38150;
}));

(cljs.core.async.t_cljs$core$async38149.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38149.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38149.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38149.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38149.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38152 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38152 = (function (f,ch,meta38150,_,fn1,meta38153){
this.f = f;
this.ch = ch;
this.meta38150 = meta38150;
this._ = _;
this.fn1 = fn1;
this.meta38153 = meta38153;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38154,meta38153__$1){
var self__ = this;
var _38154__$1 = this;
return (new cljs.core.async.t_cljs$core$async38152(self__.f,self__.ch,self__.meta38150,self__._,self__.fn1,meta38153__$1));
}));

(cljs.core.async.t_cljs$core$async38152.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38154){
var self__ = this;
var _38154__$1 = this;
return self__.meta38153;
}));

(cljs.core.async.t_cljs$core$async38152.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38152.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async38152.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38152.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__38148_SHARP_){
var G__38155 = (((p1__38148_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__38148_SHARP_) : self__.f.call(null,p1__38148_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__38155) : f1.call(null,G__38155));
});
}));

(cljs.core.async.t_cljs$core$async38152.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38150","meta38150",1895780229,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38149","cljs.core.async/t_cljs$core$async38149",1650608714,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38153","meta38153",421627477,null)], null);
}));

(cljs.core.async.t_cljs$core$async38152.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38152.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38152");

(cljs.core.async.t_cljs$core$async38152.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38152");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38152.
 */
cljs.core.async.__GT_t_cljs$core$async38152 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38152(f__$1,ch__$1,meta38150__$1,___$2,fn1__$1,meta38153){
return (new cljs.core.async.t_cljs$core$async38152(f__$1,ch__$1,meta38150__$1,___$2,fn1__$1,meta38153));
});

}

return (new cljs.core.async.t_cljs$core$async38152(self__.f,self__.ch,self__.meta38150,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__38156 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__38156) : self__.f.call(null,G__38156));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async38149.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38149.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async38149.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38150","meta38150",1895780229,null)], null);
}));

(cljs.core.async.t_cljs$core$async38149.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38149.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38149");

(cljs.core.async.t_cljs$core$async38149.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38149");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38149.
 */
cljs.core.async.__GT_t_cljs$core$async38149 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38149(f__$1,ch__$1,meta38150){
return (new cljs.core.async.t_cljs$core$async38149(f__$1,ch__$1,meta38150));
});

}

return (new cljs.core.async.t_cljs$core$async38149(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38157 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38157 = (function (f,ch,meta38158){
this.f = f;
this.ch = ch;
this.meta38158 = meta38158;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38159,meta38158__$1){
var self__ = this;
var _38159__$1 = this;
return (new cljs.core.async.t_cljs$core$async38157(self__.f,self__.ch,meta38158__$1));
}));

(cljs.core.async.t_cljs$core$async38157.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38159){
var self__ = this;
var _38159__$1 = this;
return self__.meta38158;
}));

(cljs.core.async.t_cljs$core$async38157.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38157.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38157.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38157.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38157.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38157.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async38157.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38158","meta38158",963824311,null)], null);
}));

(cljs.core.async.t_cljs$core$async38157.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38157.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38157");

(cljs.core.async.t_cljs$core$async38157.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38157");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38157.
 */
cljs.core.async.__GT_t_cljs$core$async38157 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38157(f__$1,ch__$1,meta38158){
return (new cljs.core.async.t_cljs$core$async38157(f__$1,ch__$1,meta38158));
});

}

return (new cljs.core.async.t_cljs$core$async38157(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38160 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38160 = (function (p,ch,meta38161){
this.p = p;
this.ch = ch;
this.meta38161 = meta38161;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38162,meta38161__$1){
var self__ = this;
var _38162__$1 = this;
return (new cljs.core.async.t_cljs$core$async38160(self__.p,self__.ch,meta38161__$1));
}));

(cljs.core.async.t_cljs$core$async38160.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38162){
var self__ = this;
var _38162__$1 = this;
return self__.meta38161;
}));

(cljs.core.async.t_cljs$core$async38160.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38160.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38160.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38160.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38160.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38160.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38160.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async38160.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38161","meta38161",-671482423,null)], null);
}));

(cljs.core.async.t_cljs$core$async38160.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38160.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38160");

(cljs.core.async.t_cljs$core$async38160.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38160");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38160.
 */
cljs.core.async.__GT_t_cljs$core$async38160 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38160(p__$1,ch__$1,meta38161){
return (new cljs.core.async.t_cljs$core$async38160(p__$1,ch__$1,meta38161));
});

}

return (new cljs.core.async.t_cljs$core$async38160(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__38164 = arguments.length;
switch (G__38164) {
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
var c__36984__auto___38986 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36986__auto__ = (function (){var switch__36917__auto__ = (function (state_38185){
var state_val_38186 = (state_38185[(1)]);
if((state_val_38186 === (7))){
var inst_38181 = (state_38185[(2)]);
var state_38185__$1 = state_38185;
var statearr_38187_38987 = state_38185__$1;
(statearr_38187_38987[(2)] = inst_38181);

(statearr_38187_38987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38186 === (1))){
var state_38185__$1 = state_38185;
var statearr_38188_38988 = state_38185__$1;
(statearr_38188_38988[(2)] = null);

(statearr_38188_38988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38186 === (4))){
var inst_38167 = (state_38185[(7)]);
var inst_38167__$1 = (state_38185[(2)]);
var inst_38168 = (inst_38167__$1 == null);
var state_38185__$1 = (function (){var statearr_38189 = state_38185;
(statearr_38189[(7)] = inst_38167__$1);

return statearr_38189;
})();
if(cljs.core.truth_(inst_38168)){
var statearr_38190_38989 = state_38185__$1;
(statearr_38190_38989[(1)] = (5));

} else {
var statearr_38191_38990 = state_38185__$1;
(statearr_38191_38990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38186 === (6))){
var inst_38167 = (state_38185[(7)]);
var inst_38172 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_38167) : p.call(null,inst_38167));
var state_38185__$1 = state_38185;
if(cljs.core.truth_(inst_38172)){
var statearr_38192_38991 = state_38185__$1;
(statearr_38192_38991[(1)] = (8));

} else {
var statearr_38193_38992 = state_38185__$1;
(statearr_38193_38992[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38186 === (3))){
var inst_38183 = (state_38185[(2)]);
var state_38185__$1 = state_38185;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38185__$1,inst_38183);
} else {
if((state_val_38186 === (2))){
var state_38185__$1 = state_38185;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38185__$1,(4),ch);
} else {
if((state_val_38186 === (11))){
var inst_38175 = (state_38185[(2)]);
var state_38185__$1 = state_38185;
var statearr_38194_38993 = state_38185__$1;
(statearr_38194_38993[(2)] = inst_38175);

(statearr_38194_38993[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38186 === (9))){
var state_38185__$1 = state_38185;
var statearr_38195_38994 = state_38185__$1;
(statearr_38195_38994[(2)] = null);

(statearr_38195_38994[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38186 === (5))){
var inst_38170 = cljs.core.async.close_BANG_(out);
var state_38185__$1 = state_38185;
var statearr_38196_38995 = state_38185__$1;
(statearr_38196_38995[(2)] = inst_38170);

(statearr_38196_38995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38186 === (10))){
var inst_38178 = (state_38185[(2)]);
var state_38185__$1 = (function (){var statearr_38197 = state_38185;
(statearr_38197[(8)] = inst_38178);

return statearr_38197;
})();
var statearr_38198_38996 = state_38185__$1;
(statearr_38198_38996[(2)] = null);

(statearr_38198_38996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38186 === (8))){
var inst_38167 = (state_38185[(7)]);
var state_38185__$1 = state_38185;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38185__$1,(11),out,inst_38167);
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
var cljs$core$async$state_machine__36918__auto__ = null;
var cljs$core$async$state_machine__36918__auto____0 = (function (){
var statearr_38199 = [null,null,null,null,null,null,null,null,null];
(statearr_38199[(0)] = cljs$core$async$state_machine__36918__auto__);

(statearr_38199[(1)] = (1));

return statearr_38199;
});
var cljs$core$async$state_machine__36918__auto____1 = (function (state_38185){
while(true){
var ret_value__36919__auto__ = (function (){try{while(true){
var result__36920__auto__ = switch__36917__auto__(state_38185);
if(cljs.core.keyword_identical_QMARK_(result__36920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36920__auto__;
}
break;
}
}catch (e38200){if((e38200 instanceof Object)){
var ex__36921__auto__ = e38200;
var statearr_38201_38997 = state_38185;
(statearr_38201_38997[(5)] = ex__36921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38200;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38998 = state_38185;
state_38185 = G__38998;
continue;
} else {
return ret_value__36919__auto__;
}
break;
}
});
cljs$core$async$state_machine__36918__auto__ = function(state_38185){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36918__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36918__auto____1.call(this,state_38185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36918__auto____0;
cljs$core$async$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36918__auto____1;
return cljs$core$async$state_machine__36918__auto__;
})()
})();
var state__36987__auto__ = (function (){var statearr_38202 = (f__36986__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36986__auto__.cljs$core$IFn$_invoke$arity$0() : f__36986__auto__.call(null));
(statearr_38202[(6)] = c__36984__auto___38986);

return statearr_38202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36987__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__38204 = arguments.length;
switch (G__38204) {
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
var c__36984__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36986__auto__ = (function (){var switch__36917__auto__ = (function (state_38266){
var state_val_38267 = (state_38266[(1)]);
if((state_val_38267 === (7))){
var inst_38262 = (state_38266[(2)]);
var state_38266__$1 = state_38266;
var statearr_38268_39000 = state_38266__$1;
(statearr_38268_39000[(2)] = inst_38262);

(statearr_38268_39000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38267 === (20))){
var inst_38232 = (state_38266[(7)]);
var inst_38243 = (state_38266[(2)]);
var inst_38244 = cljs.core.next(inst_38232);
var inst_38218 = inst_38244;
var inst_38219 = null;
var inst_38220 = (0);
var inst_38221 = (0);
var state_38266__$1 = (function (){var statearr_38269 = state_38266;
(statearr_38269[(8)] = inst_38221);

(statearr_38269[(9)] = inst_38220);

(statearr_38269[(10)] = inst_38218);

(statearr_38269[(11)] = inst_38243);

(statearr_38269[(12)] = inst_38219);

return statearr_38269;
})();
var statearr_38270_39001 = state_38266__$1;
(statearr_38270_39001[(2)] = null);

(statearr_38270_39001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38267 === (1))){
var state_38266__$1 = state_38266;
var statearr_38271_39002 = state_38266__$1;
(statearr_38271_39002[(2)] = null);

(statearr_38271_39002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38267 === (4))){
var inst_38207 = (state_38266[(13)]);
var inst_38207__$1 = (state_38266[(2)]);
var inst_38208 = (inst_38207__$1 == null);
var state_38266__$1 = (function (){var statearr_38272 = state_38266;
(statearr_38272[(13)] = inst_38207__$1);

return statearr_38272;
})();
if(cljs.core.truth_(inst_38208)){
var statearr_38273_39003 = state_38266__$1;
(statearr_38273_39003[(1)] = (5));

} else {
var statearr_38274_39004 = state_38266__$1;
(statearr_38274_39004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38267 === (15))){
var state_38266__$1 = state_38266;
var statearr_38278_39005 = state_38266__$1;
(statearr_38278_39005[(2)] = null);

(statearr_38278_39005[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38267 === (21))){
var state_38266__$1 = state_38266;
var statearr_38279_39006 = state_38266__$1;
(statearr_38279_39006[(2)] = null);

(statearr_38279_39006[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38267 === (13))){
var inst_38221 = (state_38266[(8)]);
var inst_38220 = (state_38266[(9)]);
var inst_38218 = (state_38266[(10)]);
var inst_38219 = (state_38266[(12)]);
var inst_38228 = (state_38266[(2)]);
var inst_38229 = (inst_38221 + (1));
var tmp38275 = inst_38220;
var tmp38276 = inst_38218;
var tmp38277 = inst_38219;
var inst_38218__$1 = tmp38276;
var inst_38219__$1 = tmp38277;
var inst_38220__$1 = tmp38275;
var inst_38221__$1 = inst_38229;
var state_38266__$1 = (function (){var statearr_38280 = state_38266;
(statearr_38280[(14)] = inst_38228);

(statearr_38280[(8)] = inst_38221__$1);

(statearr_38280[(9)] = inst_38220__$1);

(statearr_38280[(10)] = inst_38218__$1);

(statearr_38280[(12)] = inst_38219__$1);

return statearr_38280;
})();
var statearr_38281_39007 = state_38266__$1;
(statearr_38281_39007[(2)] = null);

(statearr_38281_39007[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38267 === (22))){
var state_38266__$1 = state_38266;
var statearr_38282_39008 = state_38266__$1;
(statearr_38282_39008[(2)] = null);

(statearr_38282_39008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38267 === (6))){
var inst_38207 = (state_38266[(13)]);
var inst_38216 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38207) : f.call(null,inst_38207));
var inst_38217 = cljs.core.seq(inst_38216);
var inst_38218 = inst_38217;
var inst_38219 = null;
var inst_38220 = (0);
var inst_38221 = (0);
var state_38266__$1 = (function (){var statearr_38283 = state_38266;
(statearr_38283[(8)] = inst_38221);

(statearr_38283[(9)] = inst_38220);

(statearr_38283[(10)] = inst_38218);

(statearr_38283[(12)] = inst_38219);

return statearr_38283;
})();
var statearr_38284_39009 = state_38266__$1;
(statearr_38284_39009[(2)] = null);

(statearr_38284_39009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38267 === (17))){
var inst_38232 = (state_38266[(7)]);
var inst_38236 = cljs.core.chunk_first(inst_38232);
var inst_38237 = cljs.core.chunk_rest(inst_38232);
var inst_38238 = cljs.core.count(inst_38236);
var inst_38218 = inst_38237;
var inst_38219 = inst_38236;
var inst_38220 = inst_38238;
var inst_38221 = (0);
var state_38266__$1 = (function (){var statearr_38285 = state_38266;
(statearr_38285[(8)] = inst_38221);

(statearr_38285[(9)] = inst_38220);

(statearr_38285[(10)] = inst_38218);

(statearr_38285[(12)] = inst_38219);

return statearr_38285;
})();
var statearr_38286_39010 = state_38266__$1;
(statearr_38286_39010[(2)] = null);

(statearr_38286_39010[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38267 === (3))){
var inst_38264 = (state_38266[(2)]);
var state_38266__$1 = state_38266;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38266__$1,inst_38264);
} else {
if((state_val_38267 === (12))){
var inst_38252 = (state_38266[(2)]);
var state_38266__$1 = state_38266;
var statearr_38287_39011 = state_38266__$1;
(statearr_38287_39011[(2)] = inst_38252);

(statearr_38287_39011[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38267 === (2))){
var state_38266__$1 = state_38266;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38266__$1,(4),in$);
} else {
if((state_val_38267 === (23))){
var inst_38260 = (state_38266[(2)]);
var state_38266__$1 = state_38266;
var statearr_38288_39012 = state_38266__$1;
(statearr_38288_39012[(2)] = inst_38260);

(statearr_38288_39012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38267 === (19))){
var inst_38247 = (state_38266[(2)]);
var state_38266__$1 = state_38266;
var statearr_38289_39013 = state_38266__$1;
(statearr_38289_39013[(2)] = inst_38247);

(statearr_38289_39013[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38267 === (11))){
var inst_38218 = (state_38266[(10)]);
var inst_38232 = (state_38266[(7)]);
var inst_38232__$1 = cljs.core.seq(inst_38218);
var state_38266__$1 = (function (){var statearr_38290 = state_38266;
(statearr_38290[(7)] = inst_38232__$1);

return statearr_38290;
})();
if(inst_38232__$1){
var statearr_38291_39014 = state_38266__$1;
(statearr_38291_39014[(1)] = (14));

} else {
var statearr_38292_39015 = state_38266__$1;
(statearr_38292_39015[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38267 === (9))){
var inst_38254 = (state_38266[(2)]);
var inst_38255 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_38266__$1 = (function (){var statearr_38293 = state_38266;
(statearr_38293[(15)] = inst_38254);

return statearr_38293;
})();
if(cljs.core.truth_(inst_38255)){
var statearr_38294_39016 = state_38266__$1;
(statearr_38294_39016[(1)] = (21));

} else {
var statearr_38295_39017 = state_38266__$1;
(statearr_38295_39017[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38267 === (5))){
var inst_38210 = cljs.core.async.close_BANG_(out);
var state_38266__$1 = state_38266;
var statearr_38296_39018 = state_38266__$1;
(statearr_38296_39018[(2)] = inst_38210);

(statearr_38296_39018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38267 === (14))){
var inst_38232 = (state_38266[(7)]);
var inst_38234 = cljs.core.chunked_seq_QMARK_(inst_38232);
var state_38266__$1 = state_38266;
if(inst_38234){
var statearr_38297_39019 = state_38266__$1;
(statearr_38297_39019[(1)] = (17));

} else {
var statearr_38298_39020 = state_38266__$1;
(statearr_38298_39020[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38267 === (16))){
var inst_38250 = (state_38266[(2)]);
var state_38266__$1 = state_38266;
var statearr_38299_39021 = state_38266__$1;
(statearr_38299_39021[(2)] = inst_38250);

(statearr_38299_39021[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38267 === (10))){
var inst_38221 = (state_38266[(8)]);
var inst_38219 = (state_38266[(12)]);
var inst_38226 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_38219,inst_38221);
var state_38266__$1 = state_38266;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38266__$1,(13),out,inst_38226);
} else {
if((state_val_38267 === (18))){
var inst_38232 = (state_38266[(7)]);
var inst_38241 = cljs.core.first(inst_38232);
var state_38266__$1 = state_38266;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38266__$1,(20),out,inst_38241);
} else {
if((state_val_38267 === (8))){
var inst_38221 = (state_38266[(8)]);
var inst_38220 = (state_38266[(9)]);
var inst_38223 = (inst_38221 < inst_38220);
var inst_38224 = inst_38223;
var state_38266__$1 = state_38266;
if(cljs.core.truth_(inst_38224)){
var statearr_38300_39022 = state_38266__$1;
(statearr_38300_39022[(1)] = (10));

} else {
var statearr_38301_39023 = state_38266__$1;
(statearr_38301_39023[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__36918__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__36918__auto____0 = (function (){
var statearr_38302 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38302[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__36918__auto__);

(statearr_38302[(1)] = (1));

return statearr_38302;
});
var cljs$core$async$mapcat_STAR__$_state_machine__36918__auto____1 = (function (state_38266){
while(true){
var ret_value__36919__auto__ = (function (){try{while(true){
var result__36920__auto__ = switch__36917__auto__(state_38266);
if(cljs.core.keyword_identical_QMARK_(result__36920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36920__auto__;
}
break;
}
}catch (e38303){if((e38303 instanceof Object)){
var ex__36921__auto__ = e38303;
var statearr_38304_39024 = state_38266;
(statearr_38304_39024[(5)] = ex__36921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38303;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39025 = state_38266;
state_38266 = G__39025;
continue;
} else {
return ret_value__36919__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__36918__auto__ = function(state_38266){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__36918__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__36918__auto____1.call(this,state_38266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__36918__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__36918__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__36918__auto__;
})()
})();
var state__36987__auto__ = (function (){var statearr_38305 = (f__36986__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36986__auto__.cljs$core$IFn$_invoke$arity$0() : f__36986__auto__.call(null));
(statearr_38305[(6)] = c__36984__auto__);

return statearr_38305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36987__auto__);
}));

return c__36984__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__38307 = arguments.length;
switch (G__38307) {
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
var G__38309 = arguments.length;
switch (G__38309) {
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
var G__38311 = arguments.length;
switch (G__38311) {
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
var c__36984__auto___39029 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36986__auto__ = (function (){var switch__36917__auto__ = (function (state_38335){
var state_val_38336 = (state_38335[(1)]);
if((state_val_38336 === (7))){
var inst_38330 = (state_38335[(2)]);
var state_38335__$1 = state_38335;
var statearr_38337_39030 = state_38335__$1;
(statearr_38337_39030[(2)] = inst_38330);

(statearr_38337_39030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38336 === (1))){
var inst_38312 = null;
var state_38335__$1 = (function (){var statearr_38338 = state_38335;
(statearr_38338[(7)] = inst_38312);

return statearr_38338;
})();
var statearr_38339_39031 = state_38335__$1;
(statearr_38339_39031[(2)] = null);

(statearr_38339_39031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38336 === (4))){
var inst_38315 = (state_38335[(8)]);
var inst_38315__$1 = (state_38335[(2)]);
var inst_38316 = (inst_38315__$1 == null);
var inst_38317 = cljs.core.not(inst_38316);
var state_38335__$1 = (function (){var statearr_38340 = state_38335;
(statearr_38340[(8)] = inst_38315__$1);

return statearr_38340;
})();
if(inst_38317){
var statearr_38341_39032 = state_38335__$1;
(statearr_38341_39032[(1)] = (5));

} else {
var statearr_38342_39033 = state_38335__$1;
(statearr_38342_39033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38336 === (6))){
var state_38335__$1 = state_38335;
var statearr_38343_39034 = state_38335__$1;
(statearr_38343_39034[(2)] = null);

(statearr_38343_39034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38336 === (3))){
var inst_38332 = (state_38335[(2)]);
var inst_38333 = cljs.core.async.close_BANG_(out);
var state_38335__$1 = (function (){var statearr_38344 = state_38335;
(statearr_38344[(9)] = inst_38332);

return statearr_38344;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38335__$1,inst_38333);
} else {
if((state_val_38336 === (2))){
var state_38335__$1 = state_38335;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38335__$1,(4),ch);
} else {
if((state_val_38336 === (11))){
var inst_38315 = (state_38335[(8)]);
var inst_38324 = (state_38335[(2)]);
var inst_38312 = inst_38315;
var state_38335__$1 = (function (){var statearr_38345 = state_38335;
(statearr_38345[(10)] = inst_38324);

(statearr_38345[(7)] = inst_38312);

return statearr_38345;
})();
var statearr_38346_39035 = state_38335__$1;
(statearr_38346_39035[(2)] = null);

(statearr_38346_39035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38336 === (9))){
var inst_38315 = (state_38335[(8)]);
var state_38335__$1 = state_38335;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38335__$1,(11),out,inst_38315);
} else {
if((state_val_38336 === (5))){
var inst_38312 = (state_38335[(7)]);
var inst_38315 = (state_38335[(8)]);
var inst_38319 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38315,inst_38312);
var state_38335__$1 = state_38335;
if(inst_38319){
var statearr_38348_39036 = state_38335__$1;
(statearr_38348_39036[(1)] = (8));

} else {
var statearr_38349_39037 = state_38335__$1;
(statearr_38349_39037[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38336 === (10))){
var inst_38327 = (state_38335[(2)]);
var state_38335__$1 = state_38335;
var statearr_38350_39038 = state_38335__$1;
(statearr_38350_39038[(2)] = inst_38327);

(statearr_38350_39038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38336 === (8))){
var inst_38312 = (state_38335[(7)]);
var tmp38347 = inst_38312;
var inst_38312__$1 = tmp38347;
var state_38335__$1 = (function (){var statearr_38351 = state_38335;
(statearr_38351[(7)] = inst_38312__$1);

return statearr_38351;
})();
var statearr_38352_39039 = state_38335__$1;
(statearr_38352_39039[(2)] = null);

(statearr_38352_39039[(1)] = (2));


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
var cljs$core$async$state_machine__36918__auto__ = null;
var cljs$core$async$state_machine__36918__auto____0 = (function (){
var statearr_38353 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38353[(0)] = cljs$core$async$state_machine__36918__auto__);

(statearr_38353[(1)] = (1));

return statearr_38353;
});
var cljs$core$async$state_machine__36918__auto____1 = (function (state_38335){
while(true){
var ret_value__36919__auto__ = (function (){try{while(true){
var result__36920__auto__ = switch__36917__auto__(state_38335);
if(cljs.core.keyword_identical_QMARK_(result__36920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36920__auto__;
}
break;
}
}catch (e38354){if((e38354 instanceof Object)){
var ex__36921__auto__ = e38354;
var statearr_38355_39040 = state_38335;
(statearr_38355_39040[(5)] = ex__36921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38354;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39041 = state_38335;
state_38335 = G__39041;
continue;
} else {
return ret_value__36919__auto__;
}
break;
}
});
cljs$core$async$state_machine__36918__auto__ = function(state_38335){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36918__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36918__auto____1.call(this,state_38335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36918__auto____0;
cljs$core$async$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36918__auto____1;
return cljs$core$async$state_machine__36918__auto__;
})()
})();
var state__36987__auto__ = (function (){var statearr_38356 = (f__36986__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36986__auto__.cljs$core$IFn$_invoke$arity$0() : f__36986__auto__.call(null));
(statearr_38356[(6)] = c__36984__auto___39029);

return statearr_38356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36987__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__38358 = arguments.length;
switch (G__38358) {
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
var c__36984__auto___39044 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36986__auto__ = (function (){var switch__36917__auto__ = (function (state_38396){
var state_val_38397 = (state_38396[(1)]);
if((state_val_38397 === (7))){
var inst_38392 = (state_38396[(2)]);
var state_38396__$1 = state_38396;
var statearr_38398_39045 = state_38396__$1;
(statearr_38398_39045[(2)] = inst_38392);

(statearr_38398_39045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38397 === (1))){
var inst_38359 = (new Array(n));
var inst_38360 = inst_38359;
var inst_38361 = (0);
var state_38396__$1 = (function (){var statearr_38399 = state_38396;
(statearr_38399[(7)] = inst_38361);

(statearr_38399[(8)] = inst_38360);

return statearr_38399;
})();
var statearr_38400_39046 = state_38396__$1;
(statearr_38400_39046[(2)] = null);

(statearr_38400_39046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38397 === (4))){
var inst_38364 = (state_38396[(9)]);
var inst_38364__$1 = (state_38396[(2)]);
var inst_38365 = (inst_38364__$1 == null);
var inst_38366 = cljs.core.not(inst_38365);
var state_38396__$1 = (function (){var statearr_38401 = state_38396;
(statearr_38401[(9)] = inst_38364__$1);

return statearr_38401;
})();
if(inst_38366){
var statearr_38402_39050 = state_38396__$1;
(statearr_38402_39050[(1)] = (5));

} else {
var statearr_38403_39051 = state_38396__$1;
(statearr_38403_39051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38397 === (15))){
var inst_38386 = (state_38396[(2)]);
var state_38396__$1 = state_38396;
var statearr_38404_39052 = state_38396__$1;
(statearr_38404_39052[(2)] = inst_38386);

(statearr_38404_39052[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38397 === (13))){
var state_38396__$1 = state_38396;
var statearr_38405_39053 = state_38396__$1;
(statearr_38405_39053[(2)] = null);

(statearr_38405_39053[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38397 === (6))){
var inst_38361 = (state_38396[(7)]);
var inst_38382 = (inst_38361 > (0));
var state_38396__$1 = state_38396;
if(cljs.core.truth_(inst_38382)){
var statearr_38406_39054 = state_38396__$1;
(statearr_38406_39054[(1)] = (12));

} else {
var statearr_38407_39055 = state_38396__$1;
(statearr_38407_39055[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38397 === (3))){
var inst_38394 = (state_38396[(2)]);
var state_38396__$1 = state_38396;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38396__$1,inst_38394);
} else {
if((state_val_38397 === (12))){
var inst_38360 = (state_38396[(8)]);
var inst_38384 = cljs.core.vec(inst_38360);
var state_38396__$1 = state_38396;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38396__$1,(15),out,inst_38384);
} else {
if((state_val_38397 === (2))){
var state_38396__$1 = state_38396;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38396__$1,(4),ch);
} else {
if((state_val_38397 === (11))){
var inst_38376 = (state_38396[(2)]);
var inst_38377 = (new Array(n));
var inst_38360 = inst_38377;
var inst_38361 = (0);
var state_38396__$1 = (function (){var statearr_38408 = state_38396;
(statearr_38408[(7)] = inst_38361);

(statearr_38408[(10)] = inst_38376);

(statearr_38408[(8)] = inst_38360);

return statearr_38408;
})();
var statearr_38409_39061 = state_38396__$1;
(statearr_38409_39061[(2)] = null);

(statearr_38409_39061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38397 === (9))){
var inst_38360 = (state_38396[(8)]);
var inst_38374 = cljs.core.vec(inst_38360);
var state_38396__$1 = state_38396;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38396__$1,(11),out,inst_38374);
} else {
if((state_val_38397 === (5))){
var inst_38369 = (state_38396[(11)]);
var inst_38361 = (state_38396[(7)]);
var inst_38364 = (state_38396[(9)]);
var inst_38360 = (state_38396[(8)]);
var inst_38368 = (inst_38360[inst_38361] = inst_38364);
var inst_38369__$1 = (inst_38361 + (1));
var inst_38370 = (inst_38369__$1 < n);
var state_38396__$1 = (function (){var statearr_38410 = state_38396;
(statearr_38410[(12)] = inst_38368);

(statearr_38410[(11)] = inst_38369__$1);

return statearr_38410;
})();
if(cljs.core.truth_(inst_38370)){
var statearr_38411_39062 = state_38396__$1;
(statearr_38411_39062[(1)] = (8));

} else {
var statearr_38412_39063 = state_38396__$1;
(statearr_38412_39063[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38397 === (14))){
var inst_38389 = (state_38396[(2)]);
var inst_38390 = cljs.core.async.close_BANG_(out);
var state_38396__$1 = (function (){var statearr_38414 = state_38396;
(statearr_38414[(13)] = inst_38389);

return statearr_38414;
})();
var statearr_38415_39064 = state_38396__$1;
(statearr_38415_39064[(2)] = inst_38390);

(statearr_38415_39064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38397 === (10))){
var inst_38380 = (state_38396[(2)]);
var state_38396__$1 = state_38396;
var statearr_38416_39065 = state_38396__$1;
(statearr_38416_39065[(2)] = inst_38380);

(statearr_38416_39065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38397 === (8))){
var inst_38369 = (state_38396[(11)]);
var inst_38360 = (state_38396[(8)]);
var tmp38413 = inst_38360;
var inst_38360__$1 = tmp38413;
var inst_38361 = inst_38369;
var state_38396__$1 = (function (){var statearr_38417 = state_38396;
(statearr_38417[(7)] = inst_38361);

(statearr_38417[(8)] = inst_38360__$1);

return statearr_38417;
})();
var statearr_38418_39066 = state_38396__$1;
(statearr_38418_39066[(2)] = null);

(statearr_38418_39066[(1)] = (2));


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
var cljs$core$async$state_machine__36918__auto__ = null;
var cljs$core$async$state_machine__36918__auto____0 = (function (){
var statearr_38419 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38419[(0)] = cljs$core$async$state_machine__36918__auto__);

(statearr_38419[(1)] = (1));

return statearr_38419;
});
var cljs$core$async$state_machine__36918__auto____1 = (function (state_38396){
while(true){
var ret_value__36919__auto__ = (function (){try{while(true){
var result__36920__auto__ = switch__36917__auto__(state_38396);
if(cljs.core.keyword_identical_QMARK_(result__36920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36920__auto__;
}
break;
}
}catch (e38420){if((e38420 instanceof Object)){
var ex__36921__auto__ = e38420;
var statearr_38421_39067 = state_38396;
(statearr_38421_39067[(5)] = ex__36921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38420;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39068 = state_38396;
state_38396 = G__39068;
continue;
} else {
return ret_value__36919__auto__;
}
break;
}
});
cljs$core$async$state_machine__36918__auto__ = function(state_38396){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36918__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36918__auto____1.call(this,state_38396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36918__auto____0;
cljs$core$async$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36918__auto____1;
return cljs$core$async$state_machine__36918__auto__;
})()
})();
var state__36987__auto__ = (function (){var statearr_38422 = (f__36986__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36986__auto__.cljs$core$IFn$_invoke$arity$0() : f__36986__auto__.call(null));
(statearr_38422[(6)] = c__36984__auto___39044);

return statearr_38422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36987__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__38424 = arguments.length;
switch (G__38424) {
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
var c__36984__auto___39076 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36986__auto__ = (function (){var switch__36917__auto__ = (function (state_38466){
var state_val_38467 = (state_38466[(1)]);
if((state_val_38467 === (7))){
var inst_38462 = (state_38466[(2)]);
var state_38466__$1 = state_38466;
var statearr_38468_39080 = state_38466__$1;
(statearr_38468_39080[(2)] = inst_38462);

(statearr_38468_39080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38467 === (1))){
var inst_38425 = [];
var inst_38426 = inst_38425;
var inst_38427 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_38466__$1 = (function (){var statearr_38469 = state_38466;
(statearr_38469[(7)] = inst_38427);

(statearr_38469[(8)] = inst_38426);

return statearr_38469;
})();
var statearr_38470_39081 = state_38466__$1;
(statearr_38470_39081[(2)] = null);

(statearr_38470_39081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38467 === (4))){
var inst_38430 = (state_38466[(9)]);
var inst_38430__$1 = (state_38466[(2)]);
var inst_38431 = (inst_38430__$1 == null);
var inst_38432 = cljs.core.not(inst_38431);
var state_38466__$1 = (function (){var statearr_38471 = state_38466;
(statearr_38471[(9)] = inst_38430__$1);

return statearr_38471;
})();
if(inst_38432){
var statearr_38472_39083 = state_38466__$1;
(statearr_38472_39083[(1)] = (5));

} else {
var statearr_38473_39086 = state_38466__$1;
(statearr_38473_39086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38467 === (15))){
var inst_38456 = (state_38466[(2)]);
var state_38466__$1 = state_38466;
var statearr_38474_39087 = state_38466__$1;
(statearr_38474_39087[(2)] = inst_38456);

(statearr_38474_39087[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38467 === (13))){
var state_38466__$1 = state_38466;
var statearr_38475_39088 = state_38466__$1;
(statearr_38475_39088[(2)] = null);

(statearr_38475_39088[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38467 === (6))){
var inst_38426 = (state_38466[(8)]);
var inst_38451 = inst_38426.length;
var inst_38452 = (inst_38451 > (0));
var state_38466__$1 = state_38466;
if(cljs.core.truth_(inst_38452)){
var statearr_38476_39089 = state_38466__$1;
(statearr_38476_39089[(1)] = (12));

} else {
var statearr_38477_39090 = state_38466__$1;
(statearr_38477_39090[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38467 === (3))){
var inst_38464 = (state_38466[(2)]);
var state_38466__$1 = state_38466;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38466__$1,inst_38464);
} else {
if((state_val_38467 === (12))){
var inst_38426 = (state_38466[(8)]);
var inst_38454 = cljs.core.vec(inst_38426);
var state_38466__$1 = state_38466;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38466__$1,(15),out,inst_38454);
} else {
if((state_val_38467 === (2))){
var state_38466__$1 = state_38466;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38466__$1,(4),ch);
} else {
if((state_val_38467 === (11))){
var inst_38430 = (state_38466[(9)]);
var inst_38434 = (state_38466[(10)]);
var inst_38444 = (state_38466[(2)]);
var inst_38445 = [];
var inst_38446 = inst_38445.push(inst_38430);
var inst_38426 = inst_38445;
var inst_38427 = inst_38434;
var state_38466__$1 = (function (){var statearr_38478 = state_38466;
(statearr_38478[(7)] = inst_38427);

(statearr_38478[(11)] = inst_38446);

(statearr_38478[(12)] = inst_38444);

(statearr_38478[(8)] = inst_38426);

return statearr_38478;
})();
var statearr_38479_39091 = state_38466__$1;
(statearr_38479_39091[(2)] = null);

(statearr_38479_39091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38467 === (9))){
var inst_38426 = (state_38466[(8)]);
var inst_38442 = cljs.core.vec(inst_38426);
var state_38466__$1 = state_38466;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38466__$1,(11),out,inst_38442);
} else {
if((state_val_38467 === (5))){
var inst_38427 = (state_38466[(7)]);
var inst_38430 = (state_38466[(9)]);
var inst_38434 = (state_38466[(10)]);
var inst_38434__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38430) : f.call(null,inst_38430));
var inst_38435 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38434__$1,inst_38427);
var inst_38436 = cljs.core.keyword_identical_QMARK_(inst_38427,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_38437 = ((inst_38435) || (inst_38436));
var state_38466__$1 = (function (){var statearr_38480 = state_38466;
(statearr_38480[(10)] = inst_38434__$1);

return statearr_38480;
})();
if(cljs.core.truth_(inst_38437)){
var statearr_38481_39095 = state_38466__$1;
(statearr_38481_39095[(1)] = (8));

} else {
var statearr_38482_39096 = state_38466__$1;
(statearr_38482_39096[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38467 === (14))){
var inst_38459 = (state_38466[(2)]);
var inst_38460 = cljs.core.async.close_BANG_(out);
var state_38466__$1 = (function (){var statearr_38484 = state_38466;
(statearr_38484[(13)] = inst_38459);

return statearr_38484;
})();
var statearr_38485_39097 = state_38466__$1;
(statearr_38485_39097[(2)] = inst_38460);

(statearr_38485_39097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38467 === (10))){
var inst_38449 = (state_38466[(2)]);
var state_38466__$1 = state_38466;
var statearr_38486_39098 = state_38466__$1;
(statearr_38486_39098[(2)] = inst_38449);

(statearr_38486_39098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38467 === (8))){
var inst_38430 = (state_38466[(9)]);
var inst_38434 = (state_38466[(10)]);
var inst_38426 = (state_38466[(8)]);
var inst_38439 = inst_38426.push(inst_38430);
var tmp38483 = inst_38426;
var inst_38426__$1 = tmp38483;
var inst_38427 = inst_38434;
var state_38466__$1 = (function (){var statearr_38487 = state_38466;
(statearr_38487[(7)] = inst_38427);

(statearr_38487[(14)] = inst_38439);

(statearr_38487[(8)] = inst_38426__$1);

return statearr_38487;
})();
var statearr_38488_39099 = state_38466__$1;
(statearr_38488_39099[(2)] = null);

(statearr_38488_39099[(1)] = (2));


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
var cljs$core$async$state_machine__36918__auto__ = null;
var cljs$core$async$state_machine__36918__auto____0 = (function (){
var statearr_38489 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38489[(0)] = cljs$core$async$state_machine__36918__auto__);

(statearr_38489[(1)] = (1));

return statearr_38489;
});
var cljs$core$async$state_machine__36918__auto____1 = (function (state_38466){
while(true){
var ret_value__36919__auto__ = (function (){try{while(true){
var result__36920__auto__ = switch__36917__auto__(state_38466);
if(cljs.core.keyword_identical_QMARK_(result__36920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36920__auto__;
}
break;
}
}catch (e38490){if((e38490 instanceof Object)){
var ex__36921__auto__ = e38490;
var statearr_38491_39100 = state_38466;
(statearr_38491_39100[(5)] = ex__36921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38490;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39101 = state_38466;
state_38466 = G__39101;
continue;
} else {
return ret_value__36919__auto__;
}
break;
}
});
cljs$core$async$state_machine__36918__auto__ = function(state_38466){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36918__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36918__auto____1.call(this,state_38466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36918__auto____0;
cljs$core$async$state_machine__36918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36918__auto____1;
return cljs$core$async$state_machine__36918__auto__;
})()
})();
var state__36987__auto__ = (function (){var statearr_38492 = (f__36986__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36986__auto__.cljs$core$IFn$_invoke$arity$0() : f__36986__auto__.call(null));
(statearr_38492[(6)] = c__36984__auto___39076);

return statearr_38492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36987__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
