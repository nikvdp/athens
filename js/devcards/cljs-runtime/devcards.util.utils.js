goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__5733__auto__ = goog.global.document;
if(cljs.core.truth_(temp__5733__auto__)){
var doc = temp__5733__auto__;
return goog.object.get(doc,"write");
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return (!((goog.nodeGlobalRequire == null)));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__41624_41633 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__41625_41634 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__41626_41635 = true;
var _STAR_print_fn_STAR__temp_val__41627_41636 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__41626_41635);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__41627_41636);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(obj);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__41625_41634);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__41624_41633);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
}catch (e41622){if((e41622 instanceof Error)){
var e1 = e41622;
try{return obj.toString();
}catch (e41623){if((e41623 instanceof Error)){
var e2 = e41623;
return "<<Un-printable Type>>";
} else {
throw e41623;

}
}} else {
throw e41622;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR__orig_val__41630 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pprint_dispatch_STAR__temp_val__41631 = cljs.pprint.code_dispatch;
(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__41631);

try{return devcards.util.utils.pprint_str(code);
}finally {(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__41630);
}});

//# sourceMappingURL=devcards.util.utils.js.map
