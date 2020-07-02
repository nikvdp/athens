goog.provide('instaparse.abnf');
goog.require('cljs.core');
goog.require('instaparse.transform');
goog.require('instaparse.cfg');
goog.require('instaparse.gll');
goog.require('instaparse.reduction');
goog.require('instaparse.util');
goog.require('instaparse.combinators_source');
goog.require('goog.string.format');
goog.require('clojure.walk');
/**
 * This is normally set to false, in which case the non-terminals
 * are treated as case-sensitive, which is NOT the norm
 * for ABNF grammars. If you really want case-insensitivity,
 * bind this to true, in which case all non-terminals
 * will be converted to upper-case internally (which
 * you'll have to keep in mind when transforming).
 */
instaparse.abnf._STAR_case_insensitive_STAR_ = false;
instaparse.abnf.abnf_core = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"CRLF","CRLF",11418756),new cljs.core.Keyword(null,"HTAB","HTAB",11392612),new cljs.core.Keyword(null,"LWSP","LWSP",782998598),new cljs.core.Keyword(null,"LF","LF",1177033158),new cljs.core.Keyword(null,"VCHAR","VCHAR",1962437706),new cljs.core.Keyword(null,"DIGIT","DIGIT",341251338),new cljs.core.Keyword(null,"SP","SP",124290284),new cljs.core.Keyword(null,"HEXDIG","HEXDIG",-200221072),new cljs.core.Keyword(null,"CTL","CTL",-9995632),new cljs.core.Keyword(null,"DQUOTE","DQUOTE",-571169808),new cljs.core.Keyword(null,"WSP","WSP",-1046948716),new cljs.core.Keyword(null,"CR","CR",-1654295403),new cljs.core.Keyword(null,"OCTET","OCTET",-743420682),new cljs.core.Keyword(null,"ALPHA","ALPHA",-1463859144),new cljs.core.Keyword(null,"CHAR","CHAR",-1280338086),new cljs.core.Keyword(null,"BIT","BIT",-1854474115)],[instaparse.combinators_source.string("\r\n"),instaparse.combinators_source.string("\t"),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.string(" "),instaparse.combinators_source.string("\t")], 0)),instaparse.combinators_source.star(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.string("\r\n"),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.string(" "),instaparse.combinators_source.string("\t")], 0))], 0)))], 0)),instaparse.combinators_source.string("\n"),instaparse.combinators_source.regexp("[\\u0021-\\u007E]"),instaparse.combinators_source.regexp("[0-9]"),instaparse.combinators_source.string(" "),instaparse.combinators_source.regexp("[0-9a-fA-F]"),instaparse.combinators_source.regexp("[\\u0000-\\u001F|\\u007F]"),instaparse.combinators_source.string("\""),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.string(" "),instaparse.combinators_source.string("\t")], 0)),instaparse.combinators_source.string("\r"),instaparse.combinators_source.regexp("[\\u0000-\\u00FF]"),instaparse.combinators_source.regexp("[a-zA-Z]"),instaparse.combinators_source.regexp("[\\u0001-\\u007F]"),instaparse.combinators_source.regexp("[01]")]);
instaparse.abnf.abnf_grammar_common = "\n<rulelist> = <opt-whitespace> (rule | hide-tag-rule)+;\nrule = rulename-left <defined-as> alternation <opt-whitespace>;\nhide-tag-rule = hide-tag <defined-as> alternation <opt-whitespace>;\nrulename-left = rulename;\nrulename-right = rulename;\n<hide-tag> = <'<' opt-whitespace> rulename-left <opt-whitespace '>'>;\ndefined-as = <opt-whitespace> ('=' | '=/') <opt-whitespace>;\nalternation = concatenation (<opt-whitespace '/' opt-whitespace> concatenation)*;\nconcatenation = repetition (<whitespace> repetition)*;\nrepetition = [repeat] <opt-whitespace> element;\nrepeat = NUM | (NUM? '*' NUM?);\n<element> = rulename-right | group | hide | option | char-val | num-val\n          | look | neg | regexp;\nlook = <'&' opt-whitespace> element;\nneg = <'!' opt-whitespace> element;\n<group> = <'(' opt-whitespace> alternation <opt-whitespace ')'>;\noption = <'[' opt-whitespace> alternation <opt-whitespace ']'>;\nhide = <'<' opt-whitespace> alternation <opt-whitespace '>'>;\nchar-val = <'\\u0022'> #'[\\u0020-\\u0021\\u0023-\\u007E]'* <'\\u0022'> (* double-quoted strings *)\n         | <'\\u0027'> #'[\\u0020-\\u0026(-~]'* <'\\u0027'>;  (* single-quoted strings *)\n<num-val> = <'%'> (bin-val | dec-val | hex-val);\nbin-val = <'b'> bin-char\n          [ (<'.'> bin-char)+ | ('-' bin-char) ];\nbin-char = ('0' | '1')+;\ndec-val = <'d'> dec-char\n          [ (<'.'> dec-char)+ | ('-' dec-char) ];\ndec-char = DIGIT+;\nhex-val = <'x'> hex-char\n          [ (<'.'> hex-char)+ | ('-' hex-char) ];\nhex-char = HEXDIG+;\nNUM = DIGIT+;\n<DIGIT> = #'[0-9]';\n<HEXDIG> = #'[0-9a-fA-F]';\n\n\n(* extra entrypoint to be used by the abnf combinator *)\n<rules-or-parser> = rulelist | alternation;\n  ";
instaparse.abnf.abnf_grammar_clj_only = "\n<rulename> = #'[a-zA-Z][-a-zA-Z0-9]*(?x) #identifier';\nopt-whitespace = #'\\s*(?:;.*?(?:\\u000D?\\u000A\\s*|$))*(?x) # optional whitespace or comments';\nwhitespace = #'\\s+(?:;.*?\\u000D?\\u000A\\s*)*(?x) # whitespace or comments';\nregexp = #\"#'[^'\\\\]*(?:\\\\.[^'\\\\]*)*'(?x) #Single-quoted regexp\"\n       | #\"#\\\"[^\\\"\\\\]*(?:\\\\.[^\\\"\\\\]*)*\\\"(?x) #Double-quoted regexp\"\n";
instaparse.abnf.abnf_grammar_cljs_only = "\n<rulename> = #'[a-zA-Z][-a-zA-Z0-9]*';\nopt-whitespace = #'\\s*(?:;.*?(?:\\u000D?\\u000A\\s*|$))*';\nwhitespace = #'\\s+(?:;.*?\\u000D?\\u000A\\s*)*';\nregexp = #\"#'[^'\\\\]*(?:\\\\.[^'\\\\]*)*'\"\n       | #\"#\\\"[^\\\"\\\\]*(?:\\\\.[^\\\"\\\\]*)*\\\"\"\n";
instaparse.abnf.abnf_parser = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"neg","neg",1800032960),new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"hide-tag","hide-tag",1347642501),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"hide-tag-rule","hide-tag-rule",150267589),new cljs.core.Keyword(null,"look","look",-539441433),new cljs.core.Keyword(null,"bin-char","bin-char",-1662780697),new cljs.core.Keyword(null,"rule","rule",729973257),new cljs.core.Keyword(null,"rulename-right","rulename-right",1125609193),new cljs.core.Keyword(null,"DIGIT","DIGIT",341251338),new cljs.core.Keyword(null,"NUM","NUM",-218662260),new cljs.core.Keyword(null,"char-val","char-val",1408617933),new cljs.core.Keyword(null,"num-val","num-val",1497434478),new cljs.core.Keyword(null,"hide","hide",-596913169),new cljs.core.Keyword(null,"defined-as","defined-as",-474679152),new cljs.core.Keyword(null,"HEXDIG","HEXDIG",-200221072),new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.Keyword(null,"hex-char","hex-char",764443568),new cljs.core.Keyword(null,"rulename","rulename",948914160),new cljs.core.Keyword(null,"bin-val","bin-val",1705209105),new cljs.core.Keyword(null,"dec-val","dec-val",-1263870894),new cljs.core.Keyword(null,"concatenation","concatenation",-951369614),new cljs.core.Keyword(null,"alternation","alternation",-1162147630),new cljs.core.Keyword(null,"regexp","regexp",-541372782),new cljs.core.Keyword(null,"repetition","repetition",1938392115),new cljs.core.Keyword(null,"rulename-left","rulename-left",-1824251564),new cljs.core.Keyword(null,"rulelist","rulelist",-1871218473),new cljs.core.Keyword(null,"opt-whitespace","opt-whitespace",1115207927),new cljs.core.Keyword(null,"repeat","repeat",832692087),new cljs.core.Keyword(null,"hex-val","hex-val",1267737401),new cljs.core.Keyword(null,"dec-char","dec-char",-646625154),new cljs.core.Keyword(null,"rules-or-parser","rules-or-parser",-314380386)],[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),"!"], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"opt-whitespace","opt-whitespace",1115207927)], null),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"element","element",1974019749)], null),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"neg","neg",1800032960)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),"("], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"opt-whitespace","opt-whitespace",1115207927)], null),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"alternation","alternation",-1162147630)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"opt-whitespace","opt-whitespace",1115207927)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),")"], null),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),null,(1),null)),(2),null)),(3),null)),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"raw","raw",1604651272)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),"<"], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"opt-whitespace","opt-whitespace",1115207927)], null),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"rulename-left","rulename-left",-1824251564)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"opt-whitespace","opt-whitespace",1115207927)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),">"], null),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),null,(1),null)),(2),null)),(3),null)),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"raw","raw",1604651272)], null)], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp("\\s+(?:;.*?\\u000D?\\u000A\\s*)*"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null)], null)], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"rulename-right","rulename-right",1125609193)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"group","group",582596132)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"hide","hide",-596913169)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"option","option",65132272)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"char-val","char-val",1408617933)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"num-val","num-val",1497434478)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"look","look",-539441433)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"neg","neg",1800032960)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"regexp","regexp",-541372782)], null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),(7),null)),(8),null)),(9),null)),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"raw","raw",1604651272)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"hide-tag","hide-tag",1347642501)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"defined-as","defined-as",-474679152),new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"alternation","alternation",-1162147630)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"opt-whitespace","opt-whitespace",1115207927),new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),null,(1),null)),(2),null)),(3),null)),(4),null)),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"hide-tag-rule","hide-tag-rule",150267589)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),"&"], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"opt-whitespace","opt-whitespace",1115207927)], null),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"element","element",1974019749)], null),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"look","look",-539441433)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"plus","plus",211540661),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),"0"], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),"1"], null),null,(1),null)),(2),null))], null),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"bin-char","bin-char",-1662780697)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"rulename-left","rulename-left",-1824251564)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"defined-as","defined-as",-474679152),new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"alternation","alternation",-1162147630)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"opt-whitespace","opt-whitespace",1115207927),new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),null,(1),null)),(2),null)),(3),null)),(4),null)),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"rule","rule",729973257)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"rulename","rulename",948914160),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"rulename-right","rulename-right",1125609193)], null)], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp("[0-9]"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"raw","raw",1604651272)], null)], null)], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"plus","plus",211540661),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"DIGIT","DIGIT",341251338)], null),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"NUM","NUM",-218662260)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),"\"",new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"star","star",279424429),new cljs.core.Keyword(null,"parser","parser",-1543495310),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp("[\\u0020-\\u0021\\u0023-\\u007E]"),cljs.core.PersistentArrayMap.EMPTY], 0))], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),"\"",new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),null,(1),null)),(2),null)),(3),null))], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),"'",new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"star","star",279424429),new cljs.core.Keyword(null,"parser","parser",-1543495310),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp("[\\u0020-\\u0026(-~]"),cljs.core.PersistentArrayMap.EMPTY], 0))], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),"'",new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),null,(1),null)),(2),null)),(3),null))], null),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"char-val","char-val",1408617933)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),"%",new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"bin-val","bin-val",1705209105)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"dec-val","dec-val",-1263870894)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"hex-val","hex-val",1267737401)], null),null,(1),null)),(2),null)),(3),null))], null),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"raw","raw",1604651272)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),"<"], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"opt-whitespace","opt-whitespace",1115207927)], null),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"alternation","alternation",-1162147630)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"opt-whitespace","opt-whitespace",1115207927)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),">"], null),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),null,(1),null)),(2),null)),(3),null)),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"hide","hide",-596913169)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"opt-whitespace","opt-whitespace",1115207927),new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),"="], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),"=/"], null),null,(1),null)),(2),null))], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"opt-whitespace","opt-whitespace",1115207927),new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),null,(1),null)),(2),null)),(3),null)),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"defined-as","defined-as",-474679152)], null)], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp("[0-9a-fA-F]"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"raw","raw",1604651272)], null)], null)], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),"["], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"opt-whitespace","opt-whitespace",1115207927)], null),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"alternation","alternation",-1162147630)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"opt-whitespace","opt-whitespace",1115207927)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),"]"], null),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),null,(1),null)),(2),null)),(3),null)),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"option","option",65132272)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"plus","plus",211540661),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"HEXDIG","HEXDIG",-200221072)], null),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"hex-char","hex-char",764443568)], null)], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp("[a-zA-Z][-a-zA-Z0-9]*"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"raw","raw",1604651272)], null)], null)], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),"b",new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"bin-char","bin-char",-1662780697)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"plus","plus",211540661),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),".",new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"bin-char","bin-char",-1662780697)], null),null,(1),null)),(2),null))], null)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),"-"], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"bin-char","bin-char",-1662780697)], null),null,(1),null)),(2),null))], null),null,(1),null)),(2),null))], null)], null),null,(1),null)),(2),null)),(3),null)),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"bin-val","bin-val",1705209105)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),"d",new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"dec-char","dec-char",-646625154)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"plus","plus",211540661),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),".",new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"dec-char","dec-char",-646625154)], null),null,(1),null)),(2),null))], null)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),"-"], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"dec-char","dec-char",-646625154)], null),null,(1),null)),(2),null))], null),null,(1),null)),(2),null))], null)], null),null,(1),null)),(2),null)),(3),null)),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"dec-val","dec-val",-1263870894)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"repetition","repetition",1938392115)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"star","star",279424429),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"repetition","repetition",1938392115)], null),null,(1),null)),(2),null))], null)], null),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"concatenation","concatenation",-951369614)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"concatenation","concatenation",-951369614)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"star","star",279424429),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"opt-whitespace","opt-whitespace",1115207927)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),"/"], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"opt-whitespace","opt-whitespace",1115207927)], null),null,(1),null)),(2),null)),(3),null)),new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"concatenation","concatenation",-951369614)], null),null,(1),null)),(2),null))], null)], null),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"alternation","alternation",-1162147630)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp("#'[^'\\\\]*(?:\\\\.[^'\\\\]*)*'"),cljs.core.PersistentArrayMap.EMPTY], 0)),(new cljs.core.List(null,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp("#\\\"[^\\\"\\\\]*(?:\\\\.[^\\\"\\\\]*)*\\\""),cljs.core.PersistentArrayMap.EMPTY], 0)),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"regexp","regexp",-541372782)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"repeat","repeat",832692087)], null)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"opt-whitespace","opt-whitespace",1115207927),new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"element","element",1974019749)], null),null,(1),null)),(2),null)),(3),null)),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"repetition","repetition",1938392115)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"rulename","rulename",948914160),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"rulename-left","rulename-left",-1824251564)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"opt-whitespace","opt-whitespace",1115207927),new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"plus","plus",211540661),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"rule","rule",729973257)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"hide-tag-rule","hide-tag-rule",150267589)], null),null,(1),null)),(2),null))], null)], null),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"raw","raw",1604651272)], null)], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp("\\s*(?:;.*?(?:\\u000D?\\u000A\\s*|$))*"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"opt-whitespace","opt-whitespace",1115207927)], null)], null)], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"NUM","NUM",-218662260)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"NUM","NUM",-218662260)], null)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),"*"], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"NUM","NUM",-218662260)], null)], null),null,(1),null)),(2),null)),(3),null))], null),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"repeat","repeat",832692087)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),"x",new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"hex-char","hex-char",764443568)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"plus","plus",211540661),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),".",new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"hex-char","hex-char",764443568)], null),null,(1),null)),(2),null))], null)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),"-"], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"hex-char","hex-char",764443568)], null),null,(1),null)),(2),null))], null),null,(1),null)),(2),null))], null)], null),null,(1),null)),(2),null)),(3),null)),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"hex-val","hex-val",1267737401)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"plus","plus",211540661),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"DIGIT","DIGIT",341251338)], null),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"dec-char","dec-char",-646625154)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"rulelist","rulelist",-1871218473)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"alternation","alternation",-1162147630)], null),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"raw","raw",1604651272)], null)], null)]);
instaparse.abnf.get_char_combinator = (function instaparse$abnf$get_char_combinator(var_args){
var args__4795__auto__ = [];
var len__4789__auto___57486 = arguments.length;
var i__4790__auto___57487 = (0);
while(true){
if((i__4790__auto___57487 < len__4789__auto___57486)){
args__4795__auto__.push((arguments[i__4790__auto___57487]));

var G__57488 = (i__4790__auto___57487 + (1));
i__4790__auto___57487 = G__57488;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return instaparse.abnf.get_char_combinator.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(instaparse.abnf.get_char_combinator.cljs$core$IFn$_invoke$arity$variadic = (function (nums){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.second(nums))){
var vec__57422 = nums;
var lo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57422,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57422,(1),null);
var hi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57422,(2),null);
return instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$2(lo,hi);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.cat,(function (){var iter__4582__auto__ = (function instaparse$abnf$iter__57425(s__57426){
return (new cljs.core.LazySeq(null,(function (){
var s__57426__$1 = s__57426;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57426__$1);
if(temp__5735__auto__){
var s__57426__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57426__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__57426__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__57428 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__57427 = (0);
while(true){
if((i__57427 < size__4581__auto__)){
var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__57427);
cljs.core.chunk_append(b__57428,instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$1(n));

var G__57489 = (i__57427 + (1));
i__57427 = G__57489;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57428),instaparse$abnf$iter__57425(cljs.core.chunk_rest(s__57426__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57428),null);
}
} else {
var n = cljs.core.first(s__57426__$2);
return cljs.core.cons(instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$1(n),instaparse$abnf$iter__57425(cljs.core.rest(s__57426__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(nums);
})());

}
}));

(instaparse.abnf.get_char_combinator.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.abnf.get_char_combinator.cljs$lang$applyTo = (function (seq57421){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57421));
}));

/**
 * Restricts map to certain keys
 */
instaparse.abnf.project = (function instaparse$abnf$project(m,ks){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function instaparse$abnf$project_$_iter__57429(s__57430){
return (new cljs.core.LazySeq(null,(function (){
var s__57430__$1 = s__57430;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57430__$1);
if(temp__5735__auto__){
var s__57430__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57430__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__57430__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__57432 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__57431 = (0);
while(true){
if((i__57431 < size__4581__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__57431);
if(cljs.core.contains_QMARK_(m,k)){
cljs.core.chunk_append(b__57432,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(k) : m.call(null,k))], null));

var G__57496 = (i__57431 + (1));
i__57431 = G__57496;
continue;
} else {
var G__57497 = (i__57431 + (1));
i__57431 = G__57497;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57432),instaparse$abnf$project_$_iter__57429(cljs.core.chunk_rest(s__57430__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57432),null);
}
} else {
var k = cljs.core.first(s__57430__$2);
if(cljs.core.contains_QMARK_(m,k)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(k) : m.call(null,k))], null),instaparse$abnf$project_$_iter__57429(cljs.core.rest(s__57430__$2)));
} else {
var G__57498 = cljs.core.rest(s__57430__$2);
s__57430__$1 = G__57498;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(ks);
})());
});
/**
 * Merges abnf-core map in with parsed grammar map
 */
instaparse.abnf.merge_core = (function instaparse$abnf$merge_core(grammar_map){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.abnf.project(instaparse.abnf.abnf_core,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(instaparse.cfg.seq_nt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(grammar_map)], 0)))),grammar_map], 0));
});
/**
 * Tests whether parser was constructed with hide-tag
 */
instaparse.abnf.hide_tag_QMARK_ = (function instaparse$abnf$hide_tag_QMARK_(p){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(p),instaparse.reduction.raw_non_terminal_reduction);
});
instaparse.abnf.alt_preserving_hide_tag = (function instaparse$abnf$alt_preserving_hide_tag(p1,p2){
var hide_tag_p1_QMARK_ = instaparse.abnf.hide_tag_QMARK_(p1);
var hide_tag_p2_QMARK_ = instaparse.abnf.hide_tag_QMARK_(p2);
if(((hide_tag_p1_QMARK_) && (hide_tag_p2_QMARK_))){
return instaparse.combinators_source.hide_tag(instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1,new cljs.core.Keyword(null,"red","red",-969428204)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p2,new cljs.core.Keyword(null,"red","red",-969428204))], 0)));
} else {
if(hide_tag_p1_QMARK_){
return instaparse.combinators_source.hide_tag(instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1,new cljs.core.Keyword(null,"red","red",-969428204)),p2], 0)));
} else {
if(hide_tag_p2_QMARK_){
return instaparse.combinators_source.hide_tag(instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p2,new cljs.core.Keyword(null,"red","red",-969428204))], 0)));
} else {
return instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1,p2], 0));

}
}
}
});
instaparse.abnf.parse_int = parseInt;
instaparse.abnf.abnf_transformer = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"neg","neg",1800032960),new cljs.core.Keyword(null,"hide-tag-rule","hide-tag-rule",150267589),new cljs.core.Keyword(null,"look","look",-539441433),new cljs.core.Keyword(null,"bin-char","bin-char",-1662780697),new cljs.core.Keyword(null,"rule","rule",729973257),new cljs.core.Keyword(null,"rulename-right","rulename-right",1125609193),new cljs.core.Keyword(null,"NUM","NUM",-218662260),new cljs.core.Keyword(null,"char-val","char-val",1408617933),new cljs.core.Keyword(null,"hide","hide",-596913169),new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.Keyword(null,"hex-char","hex-char",764443568),new cljs.core.Keyword(null,"bin-val","bin-val",1705209105),new cljs.core.Keyword(null,"dec-val","dec-val",-1263870894),new cljs.core.Keyword(null,"concatenation","concatenation",-951369614),new cljs.core.Keyword(null,"alternation","alternation",-1162147630),new cljs.core.Keyword(null,"regexp","regexp",-541372782),new cljs.core.Keyword(null,"repetition","repetition",1938392115),new cljs.core.Keyword(null,"rulename-left","rulename-left",-1824251564),new cljs.core.Keyword(null,"repeat","repeat",832692087),new cljs.core.Keyword(null,"hex-val","hex-val",1267737401),new cljs.core.Keyword(null,"dec-char","dec-char",-646625154)],[instaparse.combinators_source.neg,(function (tag,rule){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([tag,instaparse.combinators_source.hide_tag(rule)]);
}),instaparse.combinators_source.look,(function() { 
var G__57504__delegate = function (cs){
var G__57446 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cs);
var G__57447 = (2);
return (instaparse.abnf.parse_int.cljs$core$IFn$_invoke$arity$2 ? instaparse.abnf.parse_int.cljs$core$IFn$_invoke$arity$2(G__57446,G__57447) : instaparse.abnf.parse_int.call(null,G__57446,G__57447));
};
var G__57504 = function (var_args){
var cs = null;
if (arguments.length > 0) {
var G__57506__i = 0, G__57506__a = new Array(arguments.length -  0);
while (G__57506__i < G__57506__a.length) {G__57506__a[G__57506__i] = arguments[G__57506__i + 0]; ++G__57506__i;}
  cs = new cljs.core.IndexedSeq(G__57506__a,0,null);
} 
return G__57504__delegate.call(this,cs);};
G__57504.cljs$lang$maxFixedArity = 0;
G__57504.cljs$lang$applyTo = (function (arglist__57508){
var cs = cljs.core.seq(arglist__57508);
return G__57504__delegate(cs);
});
G__57504.cljs$core$IFn$_invoke$arity$variadic = G__57504__delegate;
return G__57504;
})()
,cljs.core.hash_map,(function() { 
var G__57509__delegate = function (rest__57444_SHARP_){
if(cljs.core.truth_(instaparse.abnf._STAR_case_insensitive_STAR_)){
return instaparse.combinators_source.nt(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,rest__57444_SHARP_))));
} else {
return instaparse.combinators_source.nt(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,rest__57444_SHARP_)));
}
};
var G__57509 = function (var_args){
var rest__57444_SHARP_ = null;
if (arguments.length > 0) {
var G__57512__i = 0, G__57512__a = new Array(arguments.length -  0);
while (G__57512__i < G__57512__a.length) {G__57512__a[G__57512__i] = arguments[G__57512__i + 0]; ++G__57512__i;}
  rest__57444_SHARP_ = new cljs.core.IndexedSeq(G__57512__a,0,null);
} 
return G__57509__delegate.call(this,rest__57444_SHARP_);};
G__57509.cljs$lang$maxFixedArity = 0;
G__57509.cljs$lang$applyTo = (function (arglist__57513){
var rest__57444_SHARP_ = cljs.core.seq(arglist__57513);
return G__57509__delegate(rest__57444_SHARP_);
});
G__57509.cljs$core$IFn$_invoke$arity$variadic = G__57509__delegate;
return G__57509;
})()
,(function() { 
var G__57514__delegate = function (rest__57445_SHARP_){
var G__57449 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,rest__57445_SHARP_);
return (instaparse.abnf.parse_int.cljs$core$IFn$_invoke$arity$1 ? instaparse.abnf.parse_int.cljs$core$IFn$_invoke$arity$1(G__57449) : instaparse.abnf.parse_int.call(null,G__57449));
};
var G__57514 = function (var_args){
var rest__57445_SHARP_ = null;
if (arguments.length > 0) {
var G__57515__i = 0, G__57515__a = new Array(arguments.length -  0);
while (G__57515__i < G__57515__a.length) {G__57515__a[G__57515__i] = arguments[G__57515__i + 0]; ++G__57515__i;}
  rest__57445_SHARP_ = new cljs.core.IndexedSeq(G__57515__a,0,null);
} 
return G__57514__delegate.call(this,rest__57445_SHARP_);};
G__57514.cljs$lang$maxFixedArity = 0;
G__57514.cljs$lang$applyTo = (function (arglist__57516){
var rest__57445_SHARP_ = cljs.core.seq(arglist__57516);
return G__57514__delegate(rest__57445_SHARP_);
});
G__57514.cljs$core$IFn$_invoke$arity$variadic = G__57514__delegate;
return G__57514;
})()
,(function() { 
var G__57517__delegate = function (cs){
return instaparse.cfg.string_PLUS_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cs),true);
};
var G__57517 = function (var_args){
var cs = null;
if (arguments.length > 0) {
var G__57518__i = 0, G__57518__a = new Array(arguments.length -  0);
while (G__57518__i < G__57518__a.length) {G__57518__a[G__57518__i] = arguments[G__57518__i + 0]; ++G__57518__i;}
  cs = new cljs.core.IndexedSeq(G__57518__a,0,null);
} 
return G__57517__delegate.call(this,cs);};
G__57517.cljs$lang$maxFixedArity = 0;
G__57517.cljs$lang$applyTo = (function (arglist__57519){
var cs = cljs.core.seq(arglist__57519);
return G__57517__delegate(cs);
});
G__57517.cljs$core$IFn$_invoke$arity$variadic = G__57517__delegate;
return G__57517;
})()
,instaparse.combinators_source.hide,instaparse.combinators_source.opt,(function() { 
var G__57520__delegate = function (cs){
var G__57450 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cs);
var G__57451 = (16);
return (instaparse.abnf.parse_int.cljs$core$IFn$_invoke$arity$2 ? instaparse.abnf.parse_int.cljs$core$IFn$_invoke$arity$2(G__57450,G__57451) : instaparse.abnf.parse_int.call(null,G__57450,G__57451));
};
var G__57520 = function (var_args){
var cs = null;
if (arguments.length > 0) {
var G__57521__i = 0, G__57521__a = new Array(arguments.length -  0);
while (G__57521__i < G__57521__a.length) {G__57521__a[G__57521__i] = arguments[G__57521__i + 0]; ++G__57521__i;}
  cs = new cljs.core.IndexedSeq(G__57521__a,0,null);
} 
return G__57520__delegate.call(this,cs);};
G__57520.cljs$lang$maxFixedArity = 0;
G__57520.cljs$lang$applyTo = (function (arglist__57522){
var cs = cljs.core.seq(arglist__57522);
return G__57520__delegate(cs);
});
G__57520.cljs$core$IFn$_invoke$arity$variadic = G__57520__delegate;
return G__57520;
})()
,instaparse.abnf.get_char_combinator,instaparse.abnf.get_char_combinator,instaparse.combinators_source.cat,instaparse.combinators_source.alt,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.regexp,instaparse.cfg.process_regexp),(function() {
var G__57523 = null;
var G__57523__1 = (function (element){
return element;
});
var G__57523__2 = (function (repeat,element){
if(cljs.core.empty_QMARK_(repeat)){
return instaparse.combinators_source.star(element);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(repeat),(2))){
return instaparse.combinators_source.rep(new cljs.core.Keyword(null,"low","low",-1601362409).cljs$core$IFn$_invoke$arity$1(repeat),new cljs.core.Keyword(null,"high","high",2027297808).cljs$core$IFn$_invoke$arity$1(repeat),element);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"low","low",-1601362409).cljs$core$IFn$_invoke$arity$1(repeat),(1))){
return instaparse.combinators_source.plus(element);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"high","high",2027297808).cljs$core$IFn$_invoke$arity$1(repeat),(1))){
return instaparse.combinators_source.opt(element);
} else {
return instaparse.combinators_source.rep((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"low","low",-1601362409).cljs$core$IFn$_invoke$arity$1(repeat);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
})(),(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"high","high",2027297808).cljs$core$IFn$_invoke$arity$1(repeat);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return Infinity;
}
})(),element);

}
}
}
}
});
G__57523 = function(repeat,element){
switch(arguments.length){
case 1:
return G__57523__1.call(this,repeat);
case 2:
return G__57523__2.call(this,repeat,element);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__57523.cljs$core$IFn$_invoke$arity$1 = G__57523__1;
G__57523.cljs$core$IFn$_invoke$arity$2 = G__57523__2;
return G__57523;
})()
,(function() { 
var G__57525__delegate = function (rest__57443_SHARP_){
if(cljs.core.truth_(instaparse.abnf._STAR_case_insensitive_STAR_)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,rest__57443_SHARP_)));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,rest__57443_SHARP_));
}
};
var G__57525 = function (var_args){
var rest__57443_SHARP_ = null;
if (arguments.length > 0) {
var G__57530__i = 0, G__57530__a = new Array(arguments.length -  0);
while (G__57530__i < G__57530__a.length) {G__57530__a[G__57530__i] = arguments[G__57530__i + 0]; ++G__57530__i;}
  rest__57443_SHARP_ = new cljs.core.IndexedSeq(G__57530__a,0,null);
} 
return G__57525__delegate.call(this,rest__57443_SHARP_);};
G__57525.cljs$lang$maxFixedArity = 0;
G__57525.cljs$lang$applyTo = (function (arglist__57531){
var rest__57443_SHARP_ = cljs.core.seq(arglist__57531);
return G__57525__delegate(rest__57443_SHARP_);
});
G__57525.cljs$core$IFn$_invoke$arity$variadic = G__57525__delegate;
return G__57525;
})()
,(function() { 
var G__57532__delegate = function (items){
var G__57452 = cljs.core.count(items);
switch (G__57452) {
case (1):
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(items),"*")){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"low","low",-1601362409),cljs.core.first(items),new cljs.core.Keyword(null,"high","high",2027297808),cljs.core.first(items)], null);

}

break;
case (2):
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(items),"*")){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"high","high",2027297808),cljs.core.second(items)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"low","low",-1601362409),cljs.core.first(items)], null);

}

break;
case (3):
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"low","low",-1601362409),cljs.core.first(items),new cljs.core.Keyword(null,"high","high",2027297808),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(items,(2))], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57452)].join('')));

}
};
var G__57532 = function (var_args){
var items = null;
if (arguments.length > 0) {
var G__57535__i = 0, G__57535__a = new Array(arguments.length -  0);
while (G__57535__i < G__57535__a.length) {G__57535__a[G__57535__i] = arguments[G__57535__i + 0]; ++G__57535__i;}
  items = new cljs.core.IndexedSeq(G__57535__a,0,null);
} 
return G__57532__delegate.call(this,items);};
G__57532.cljs$lang$maxFixedArity = 0;
G__57532.cljs$lang$applyTo = (function (arglist__57536){
var items = cljs.core.seq(arglist__57536);
return G__57532__delegate(items);
});
G__57532.cljs$core$IFn$_invoke$arity$variadic = G__57532__delegate;
return G__57532;
})()
,instaparse.abnf.get_char_combinator,(function() { 
var G__57537__delegate = function (cs){
var G__57462 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cs);
return (instaparse.abnf.parse_int.cljs$core$IFn$_invoke$arity$1 ? instaparse.abnf.parse_int.cljs$core$IFn$_invoke$arity$1(G__57462) : instaparse.abnf.parse_int.call(null,G__57462));
};
var G__57537 = function (var_args){
var cs = null;
if (arguments.length > 0) {
var G__57539__i = 0, G__57539__a = new Array(arguments.length -  0);
while (G__57539__i < G__57539__a.length) {G__57539__a[G__57539__i] = arguments[G__57539__i + 0]; ++G__57539__i;}
  cs = new cljs.core.IndexedSeq(G__57539__a,0,null);
} 
return G__57537__delegate.call(this,cs);};
G__57537.cljs$lang$maxFixedArity = 0;
G__57537.cljs$lang$applyTo = (function (arglist__57540){
var cs = cljs.core.seq(arglist__57540);
return G__57537__delegate(cs);
});
G__57537.cljs$core$IFn$_invoke$arity$variadic = G__57537__delegate;
return G__57537;
})()
]);
instaparse.abnf.rules__GT_grammar_map = (function instaparse$abnf$rules__GT_grammar_map(rules){
return instaparse.abnf.merge_core(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,instaparse.abnf.alt_preserving_hide_tag,rules));
});
/**
 * Takes an ABNF grammar specification string and returns the combinator version.
 * If you give it the right-hand side of a rule, it will return the combinator equivalent.
 * If you give it a series of rules, it will give you back a grammar map.
 * Useful for combining with other combinators.
 */
instaparse.abnf.abnf = (function instaparse$abnf$abnf(var_args){
var args__4795__auto__ = [];
var len__4789__auto___57541 = arguments.length;
var i__4790__auto___57542 = (0);
while(true){
if((i__4790__auto___57542 < len__4789__auto___57541)){
args__4795__auto__.push((arguments[i__4790__auto___57542]));

var G__57543 = (i__4790__auto___57542 + (1));
i__4790__auto___57542 = G__57543;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return instaparse.abnf.abnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(instaparse.abnf.abnf.cljs$core$IFn$_invoke$arity$variadic = (function (spec,p__57465){
var map__57466 = p__57465;
var map__57466__$1 = (((((!((map__57466 == null))))?(((((map__57466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57466):map__57466);
var opts = map__57466__$1;
var _STAR_case_insensitive_literals_STAR__orig_val__57469 = instaparse.cfg._STAR_case_insensitive_literals_STAR_;
var _STAR_case_insensitive_literals_STAR__temp_val__57470 = new cljs.core.Keyword(null,"string-ci","string-ci",374631805).cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"default","default",-1987822328));
(instaparse.cfg._STAR_case_insensitive_literals_STAR_ = _STAR_case_insensitive_literals_STAR__temp_val__57470);

try{var tree = instaparse.gll.parse(instaparse.abnf.abnf_parser,new cljs.core.Keyword(null,"rules-or-parser","rules-or-parser",-314380386),spec,false);
if((tree instanceof instaparse.gll.Failure)){
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error parsing grammar specification:\n",(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__57471_57545 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__57472_57546 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__57473_57547 = true;
var _STAR_print_fn_STAR__temp_val__57474_57548 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__57473_57547);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__57474_57548);

try{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tree], 0));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__57472_57546);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__57471_57545);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})()], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"alternation","alternation",-1162147630),cljs.core.ffirst(tree))){
return instaparse.transform.transform(instaparse.abnf.abnf_transformer,cljs.core.first(tree));
} else {
return instaparse.abnf.rules__GT_grammar_map(instaparse.transform.transform(instaparse.abnf.abnf_transformer,tree));

}
}
}finally {(instaparse.cfg._STAR_case_insensitive_literals_STAR_ = _STAR_case_insensitive_literals_STAR__orig_val__57469);
}}));

(instaparse.abnf.abnf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(instaparse.abnf.abnf.cljs$lang$applyTo = (function (seq57463){
var G__57464 = cljs.core.first(seq57463);
var seq57463__$1 = cljs.core.next(seq57463);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57464,seq57463__$1);
}));

instaparse.abnf.build_parser = (function instaparse$abnf$build_parser(spec,output_format){
var rule_tree = instaparse.gll.parse(instaparse.abnf.abnf_parser,new cljs.core.Keyword(null,"rulelist","rulelist",-1871218473),spec,false);
if((rule_tree instanceof instaparse.gll.Failure)){
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error parsing grammar specification:\n",(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__57475_57552 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__57476_57553 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__57477_57554 = true;
var _STAR_print_fn_STAR__temp_val__57478_57555 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__57477_57554);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__57478_57555);

try{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rule_tree], 0));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__57476_57553);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__57475_57552);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})()], 0));
} else {
var rules = instaparse.transform.transform(instaparse.abnf.abnf_transformer,rule_tree);
var grammar_map = instaparse.abnf.rules__GT_grammar_map(rules);
var start_production = cljs.core.first(cljs.core.first(cljs.core.first(rules)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grammar","grammar",1881328267),instaparse.cfg.check_grammar(instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$2(output_format,grammar_map)),new cljs.core.Keyword(null,"start-production","start-production",687546537),start_production,new cljs.core.Keyword(null,"output-format","output-format",-1826382676),output_format], null);
}
});

//# sourceMappingURL=instaparse.abnf.js.map
