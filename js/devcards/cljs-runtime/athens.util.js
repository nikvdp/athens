goog.provide('athens.util');
goog.require('cljs.core');
athens.util.gen_block_uid = (function athens$util$gen_block_uid(){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),(27));
});
athens.util.now_ts = (function athens$util$now_ts(){
return (new Date()).getTime();
});
athens.util.scroll_if_needed = (function athens$util$scroll_if_needed(element,container){
if((element.offsetTop < container.scrollTop)){
return (container.scrollTop = element.offsetTop);
} else {
var offsetBottom = (element.offsetTop + element.offsetHeight);
var scrollBottom = (container.scrollTop + container.offsetHeight);
if((scrollBottom < offsetBottom)){
return (container.scrollTop = (offsetBottom - container.offsetHeight));
} else {
return null;
}
}
});

//# sourceMappingURL=athens.util.js.map
