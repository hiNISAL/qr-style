var f1 = Object.defineProperty;
var l1 = (Q, H, s) => H in Q ? f1(Q, H, { enumerable: !0, configurable: !0, writable: !0, value: s }) : Q[H] = s;
var ht = (Q, H, s) => l1(Q, typeof H != "symbol" ? H + "" : H, s);
var er = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
function c1(Q) {
  return Q && Q.__esModule && Object.prototype.hasOwnProperty.call(Q, "default") ? Q.default : Q;
}
var Kr = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Kr.exports;
(function(Q, H) {
  (function() {
    var s, Qt = "4.17.21", xt = 200, St = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", gt = "Expected a function", Tt = "Invalid `variable` option passed into `_.template`", zn = "__lodash_hash_undefined__", we = 500, Yt = "__lodash_placeholder__", Ut = 1, jt = 2, Gt = 4, pt = 1, bt = 2, Pt = 1, Rt = 2, hn = 4, Bt = 8, Rn = 16, Zt = 32, En = 64, an = 128, en = 256, gn = 512, ye = 30, se = "...", me = 800, B = 16, T = 1, L = 2, I = 3, b = 1 / 0, P = 9007199254740991, k = 17976931348623157e292, q = NaN, U = 4294967295, Wt = U - 1, A = U >>> 1, o = [
      ["ary", an],
      ["bind", Pt],
      ["bindKey", Rt],
      ["curry", Bt],
      ["curryRight", Rn],
      ["flip", gn],
      ["partial", Zt],
      ["partialRight", En],
      ["rearg", en]
    ], l = "[object Arguments]", f = "[object Array]", p = "[object AsyncFunction]", w = "[object Boolean]", _ = "[object Date]", O = "[object DOMException]", g = "[object Error]", d = "[object Function]", h = "[object GeneratorFunction]", y = "[object Map]", S = "[object Number]", N = "[object Null]", W = "[object Object]", R = "[object Promise]", $ = "[object Proxy]", Z = "[object RegExp]", K = "[object Set]", lt = "[object String]", X = "[object Symbol]", nt = "[object Undefined]", J = "[object WeakMap]", et = "[object WeakSet]", kt = "[object ArrayBuffer]", wt = "[object DataView]", rt = "[object Float32Array]", Ct = "[object Float64Array]", vt = "[object Int8Array]", Ot = "[object Int16Array]", Dt = "[object Int32Array]", Ft = "[object Uint8Array]", Ht = "[object Uint8ClampedArray]", Dn = "[object Uint16Array]", Ne = "[object Uint32Array]", Un = /\b__p \+= '';/g, We = /\b(__p \+=) '' \+/g, Yr = /(__e\(.*?\)|\b__t\)) \+\n'';/g, mn = /&(?:amp|lt|gt|quot|#39);/g, xe = /[&<>"']/g, kn = RegExp(mn.source), Gn = RegExp(xe.source), qe = /<%-([\s\S]+?)%>/g, ze = /<%([\s\S]+?)%>/g, Fn = /<%=([\s\S]+?)%>/g, Fa = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Na = /^\w*$/, Wa = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Zr = /[\\^$.*+?()[\]{}|]/g, qa = RegExp(Zr.source), Xr = /^\s+/, za = /\s/, Ua = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, ka = /\{\n\/\* \[wrapped with (.+)\] \*/, Ga = /,? & /, Ha = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, $a = /[()=,{}\[\]\/\s]/, Ka = /\\(\\)?/g, Ya = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, ao = /\w*$/, Za = /^[-+]0x[0-9a-f]+$/i, Xa = /^0b[01]+$/i, Qa = /^\[object .+?Constructor\]$/, Ja = /^0o[0-7]+$/i, Va = /^(?:0|[1-9]\d*)$/, ja = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, rr = /($^)/, ts = /['\n\r\u2028\u2029\\]/g, ir = "\\ud800-\\udfff", ns = "\\u0300-\\u036f", es = "\\ufe20-\\ufe2f", rs = "\\u20d0-\\u20ff", so = ns + es + rs, fo = "\\u2700-\\u27bf", lo = "a-z\\xdf-\\xf6\\xf8-\\xff", is = "\\xac\\xb1\\xd7\\xf7", os = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", us = "\\u2000-\\u206f", as = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", co = "A-Z\\xc0-\\xd6\\xd8-\\xde", ho = "\\ufe0e\\ufe0f", go = is + os + us + as, Qr = "['’]", ss = "[" + ir + "]", po = "[" + go + "]", or = "[" + so + "]", vo = "\\d+", fs = "[" + fo + "]", _o = "[" + lo + "]", wo = "[^" + ir + go + vo + fo + lo + co + "]", Jr = "\\ud83c[\\udffb-\\udfff]", ls = "(?:" + or + "|" + Jr + ")", yo = "[^" + ir + "]", Vr = "(?:\\ud83c[\\udde6-\\uddff]){2}", jr = "[\\ud800-\\udbff][\\udc00-\\udfff]", be = "[" + co + "]", mo = "\\u200d", xo = "(?:" + _o + "|" + wo + ")", cs = "(?:" + be + "|" + wo + ")", bo = "(?:" + Qr + "(?:d|ll|m|re|s|t|ve))?", So = "(?:" + Qr + "(?:D|LL|M|RE|S|T|VE))?", Co = ls + "?", Ao = "[" + ho + "]?", hs = "(?:" + mo + "(?:" + [yo, Vr, jr].join("|") + ")" + Ao + Co + ")*", gs = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", ds = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Oo = Ao + Co + hs, ps = "(?:" + [fs, Vr, jr].join("|") + ")" + Oo, vs = "(?:" + [yo + or + "?", or, Vr, jr, ss].join("|") + ")", _s = RegExp(Qr, "g"), ws = RegExp(or, "g"), ti = RegExp(Jr + "(?=" + Jr + ")|" + vs + Oo, "g"), ys = RegExp([
      be + "?" + _o + "+" + bo + "(?=" + [po, be, "$"].join("|") + ")",
      cs + "+" + So + "(?=" + [po, be + xo, "$"].join("|") + ")",
      be + "?" + xo + "+" + bo,
      be + "+" + So,
      ds,
      gs,
      vo,
      ps
    ].join("|"), "g"), ms = RegExp("[" + mo + ir + so + ho + "]"), xs = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, bs = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], Ss = -1, It = {};
    It[rt] = It[Ct] = It[vt] = It[Ot] = It[Dt] = It[Ft] = It[Ht] = It[Dn] = It[Ne] = !0, It[l] = It[f] = It[kt] = It[w] = It[wt] = It[_] = It[g] = It[d] = It[y] = It[S] = It[W] = It[Z] = It[K] = It[lt] = It[J] = !1;
    var Mt = {};
    Mt[l] = Mt[f] = Mt[kt] = Mt[wt] = Mt[w] = Mt[_] = Mt[rt] = Mt[Ct] = Mt[vt] = Mt[Ot] = Mt[Dt] = Mt[y] = Mt[S] = Mt[W] = Mt[Z] = Mt[K] = Mt[lt] = Mt[X] = Mt[Ft] = Mt[Ht] = Mt[Dn] = Mt[Ne] = !0, Mt[g] = Mt[d] = Mt[J] = !1;
    var Cs = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, As = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, Os = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, Ms = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, Is = parseFloat, Rs = parseInt, Mo = typeof er == "object" && er && er.Object === Object && er, Es = typeof self == "object" && self && self.Object === Object && self, Jt = Mo || Es || Function("return this")(), ni = H && !H.nodeType && H, fe = ni && !0 && Q && !Q.nodeType && Q, Io = fe && fe.exports === ni, ei = Io && Mo.process, xn = function() {
      try {
        var m = fe && fe.require && fe.require("util").types;
        return m || ei && ei.binding && ei.binding("util");
      } catch (M) {
      }
    }(), Ro = xn && xn.isArrayBuffer, Eo = xn && xn.isDate, Do = xn && xn.isMap, Lo = xn && xn.isRegExp, To = xn && xn.isSet, Po = xn && xn.isTypedArray;
    function dn(m, M, C) {
      switch (C.length) {
        case 0:
          return m.call(M);
        case 1:
          return m.call(M, C[0]);
        case 2:
          return m.call(M, C[0], C[1]);
        case 3:
          return m.call(M, C[0], C[1], C[2]);
      }
      return m.apply(M, C);
    }
    function Ds(m, M, C, G) {
      for (var it = -1, _t = m == null ? 0 : m.length; ++it < _t; ) {
        var $t = m[it];
        M(G, $t, C($t), m);
      }
      return G;
    }
    function bn(m, M) {
      for (var C = -1, G = m == null ? 0 : m.length; ++C < G && M(m[C], C, m) !== !1; )
        ;
      return m;
    }
    function Ls(m, M) {
      for (var C = m == null ? 0 : m.length; C-- && M(m[C], C, m) !== !1; )
        ;
      return m;
    }
    function Bo(m, M) {
      for (var C = -1, G = m == null ? 0 : m.length; ++C < G; )
        if (!M(m[C], C, m))
          return !1;
      return !0;
    }
    function jn(m, M) {
      for (var C = -1, G = m == null ? 0 : m.length, it = 0, _t = []; ++C < G; ) {
        var $t = m[C];
        M($t, C, m) && (_t[it++] = $t);
      }
      return _t;
    }
    function ur(m, M) {
      var C = m == null ? 0 : m.length;
      return !!C && Se(m, M, 0) > -1;
    }
    function ri(m, M, C) {
      for (var G = -1, it = m == null ? 0 : m.length; ++G < it; )
        if (C(M, m[G]))
          return !0;
      return !1;
    }
    function Et(m, M) {
      for (var C = -1, G = m == null ? 0 : m.length, it = Array(G); ++C < G; )
        it[C] = M(m[C], C, m);
      return it;
    }
    function te(m, M) {
      for (var C = -1, G = M.length, it = m.length; ++C < G; )
        m[it + C] = M[C];
      return m;
    }
    function ii(m, M, C, G) {
      var it = -1, _t = m == null ? 0 : m.length;
      for (G && _t && (C = m[++it]); ++it < _t; )
        C = M(C, m[it], it, m);
      return C;
    }
    function Ts(m, M, C, G) {
      var it = m == null ? 0 : m.length;
      for (G && it && (C = m[--it]); it--; )
        C = M(C, m[it], it, m);
      return C;
    }
    function oi(m, M) {
      for (var C = -1, G = m == null ? 0 : m.length; ++C < G; )
        if (M(m[C], C, m))
          return !0;
      return !1;
    }
    var Ps = ui("length");
    function Bs(m) {
      return m.split("");
    }
    function Fs(m) {
      return m.match(Ha) || [];
    }
    function Fo(m, M, C) {
      var G;
      return C(m, function(it, _t, $t) {
        if (M(it, _t, $t))
          return G = _t, !1;
      }), G;
    }
    function ar(m, M, C, G) {
      for (var it = m.length, _t = C + (G ? 1 : -1); G ? _t-- : ++_t < it; )
        if (M(m[_t], _t, m))
          return _t;
      return -1;
    }
    function Se(m, M, C) {
      return M === M ? Zs(m, M, C) : ar(m, No, C);
    }
    function Ns(m, M, C, G) {
      for (var it = C - 1, _t = m.length; ++it < _t; )
        if (G(m[it], M))
          return it;
      return -1;
    }
    function No(m) {
      return m !== m;
    }
    function Wo(m, M) {
      var C = m == null ? 0 : m.length;
      return C ? si(m, M) / C : q;
    }
    function ui(m) {
      return function(M) {
        return M == null ? s : M[m];
      };
    }
    function ai(m) {
      return function(M) {
        return m == null ? s : m[M];
      };
    }
    function qo(m, M, C, G, it) {
      return it(m, function(_t, $t, At) {
        C = G ? (G = !1, _t) : M(C, _t, $t, At);
      }), C;
    }
    function Ws(m, M) {
      var C = m.length;
      for (m.sort(M); C--; )
        m[C] = m[C].value;
      return m;
    }
    function si(m, M) {
      for (var C, G = -1, it = m.length; ++G < it; ) {
        var _t = M(m[G]);
        _t !== s && (C = C === s ? _t : C + _t);
      }
      return C;
    }
    function fi(m, M) {
      for (var C = -1, G = Array(m); ++C < m; )
        G[C] = M(C);
      return G;
    }
    function qs(m, M) {
      return Et(M, function(C) {
        return [C, m[C]];
      });
    }
    function zo(m) {
      return m && m.slice(0, Ho(m) + 1).replace(Xr, "");
    }
    function pn(m) {
      return function(M) {
        return m(M);
      };
    }
    function li(m, M) {
      return Et(M, function(C) {
        return m[C];
      });
    }
    function Ue(m, M) {
      return m.has(M);
    }
    function Uo(m, M) {
      for (var C = -1, G = m.length; ++C < G && Se(M, m[C], 0) > -1; )
        ;
      return C;
    }
    function ko(m, M) {
      for (var C = m.length; C-- && Se(M, m[C], 0) > -1; )
        ;
      return C;
    }
    function zs(m, M) {
      for (var C = m.length, G = 0; C--; )
        m[C] === M && ++G;
      return G;
    }
    var Us = ai(Cs), ks = ai(As);
    function Gs(m) {
      return "\\" + Ms[m];
    }
    function Hs(m, M) {
      return m == null ? s : m[M];
    }
    function Ce(m) {
      return ms.test(m);
    }
    function $s(m) {
      return xs.test(m);
    }
    function Ks(m) {
      for (var M, C = []; !(M = m.next()).done; )
        C.push(M.value);
      return C;
    }
    function ci(m) {
      var M = -1, C = Array(m.size);
      return m.forEach(function(G, it) {
        C[++M] = [it, G];
      }), C;
    }
    function Go(m, M) {
      return function(C) {
        return m(M(C));
      };
    }
    function ne(m, M) {
      for (var C = -1, G = m.length, it = 0, _t = []; ++C < G; ) {
        var $t = m[C];
        ($t === M || $t === Yt) && (m[C] = Yt, _t[it++] = C);
      }
      return _t;
    }
    function sr(m) {
      var M = -1, C = Array(m.size);
      return m.forEach(function(G) {
        C[++M] = G;
      }), C;
    }
    function Ys(m) {
      var M = -1, C = Array(m.size);
      return m.forEach(function(G) {
        C[++M] = [G, G];
      }), C;
    }
    function Zs(m, M, C) {
      for (var G = C - 1, it = m.length; ++G < it; )
        if (m[G] === M)
          return G;
      return -1;
    }
    function Xs(m, M, C) {
      for (var G = C + 1; G--; )
        if (m[G] === M)
          return G;
      return G;
    }
    function Ae(m) {
      return Ce(m) ? Js(m) : Ps(m);
    }
    function Ln(m) {
      return Ce(m) ? Vs(m) : Bs(m);
    }
    function Ho(m) {
      for (var M = m.length; M-- && za.test(m.charAt(M)); )
        ;
      return M;
    }
    var Qs = ai(Os);
    function Js(m) {
      for (var M = ti.lastIndex = 0; ti.test(m); )
        ++M;
      return M;
    }
    function Vs(m) {
      return m.match(ti) || [];
    }
    function js(m) {
      return m.match(ys) || [];
    }
    var tf = function m(M) {
      M = M == null ? Jt : Oe.defaults(Jt.Object(), M, Oe.pick(Jt, bs));
      var C = M.Array, G = M.Date, it = M.Error, _t = M.Function, $t = M.Math, At = M.Object, hi = M.RegExp, nf = M.String, Sn = M.TypeError, fr = C.prototype, ef = _t.prototype, Me = At.prototype, lr = M["__core-js_shared__"], cr = ef.toString, mt = Me.hasOwnProperty, rf = 0, $o = function() {
        var t = /[^.]+$/.exec(lr && lr.keys && lr.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), hr = Me.toString, of = cr.call(At), uf = Jt._, af = hi(
        "^" + cr.call(mt).replace(Zr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), gr = Io ? M.Buffer : s, ee = M.Symbol, dr = M.Uint8Array, Ko = gr ? gr.allocUnsafe : s, pr = Go(At.getPrototypeOf, At), Yo = At.create, Zo = Me.propertyIsEnumerable, vr = fr.splice, Xo = ee ? ee.isConcatSpreadable : s, ke = ee ? ee.iterator : s, le = ee ? ee.toStringTag : s, _r = function() {
        try {
          var t = pe(At, "defineProperty");
          return t({}, "", {}), t;
        } catch (n) {
        }
      }(), sf = M.clearTimeout !== Jt.clearTimeout && M.clearTimeout, ff = G && G.now !== Jt.Date.now && G.now, lf = M.setTimeout !== Jt.setTimeout && M.setTimeout, wr = $t.ceil, yr = $t.floor, gi = At.getOwnPropertySymbols, cf = gr ? gr.isBuffer : s, Qo = M.isFinite, hf = fr.join, gf = Go(At.keys, At), Kt = $t.max, tn = $t.min, df = G.now, pf = M.parseInt, Jo = $t.random, vf = fr.reverse, di = pe(M, "DataView"), Ge = pe(M, "Map"), pi = pe(M, "Promise"), Ie = pe(M, "Set"), He = pe(M, "WeakMap"), $e = pe(At, "create"), mr = He && new He(), Re = {}, _f = ve(di), wf = ve(Ge), yf = ve(pi), mf = ve(Ie), xf = ve(He), xr = ee ? ee.prototype : s, Ke = xr ? xr.valueOf : s, Vo = xr ? xr.toString : s;
      function u(t) {
        if (Nt(t) && !ot(t) && !(t instanceof ct)) {
          if (t instanceof Cn)
            return t;
          if (mt.call(t, "__wrapped__"))
            return ju(t);
        }
        return new Cn(t);
      }
      var Ee = /* @__PURE__ */ function() {
        function t() {
        }
        return function(n) {
          if (!Lt(n))
            return {};
          if (Yo)
            return Yo(n);
          t.prototype = n;
          var e = new t();
          return t.prototype = s, e;
        };
      }();
      function br() {
      }
      function Cn(t, n) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = s;
      }
      u.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: qe,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: ze,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: Fn,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: u
        }
      }, u.prototype = br.prototype, u.prototype.constructor = u, Cn.prototype = Ee(br.prototype), Cn.prototype.constructor = Cn;
      function ct(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = U, this.__views__ = [];
      }
      function bf() {
        var t = new ct(this.__wrapped__);
        return t.__actions__ = sn(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = sn(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = sn(this.__views__), t;
      }
      function Sf() {
        if (this.__filtered__) {
          var t = new ct(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function Cf() {
        var t = this.__wrapped__.value(), n = this.__dir__, e = ot(t), r = n < 0, i = e ? t.length : 0, a = Fl(0, i, this.__views__), c = a.start, v = a.end, x = v - c, E = r ? v : c - 1, D = this.__iteratees__, F = D.length, z = 0, Y = tn(x, this.__takeCount__);
        if (!e || !r && i == x && Y == x)
          return bu(t, this.__actions__);
        var j = [];
        t:
          for (; x-- && z < Y; ) {
            E += n;
            for (var at = -1, tt = t[E]; ++at < F; ) {
              var ft = D[at], dt = ft.iteratee, wn = ft.type, un = dt(tt);
              if (wn == L)
                tt = un;
              else if (!un) {
                if (wn == T)
                  continue t;
                break t;
              }
            }
            j[z++] = tt;
          }
        return j;
      }
      ct.prototype = Ee(br.prototype), ct.prototype.constructor = ct;
      function ce(t) {
        var n = -1, e = t == null ? 0 : t.length;
        for (this.clear(); ++n < e; ) {
          var r = t[n];
          this.set(r[0], r[1]);
        }
      }
      function Af() {
        this.__data__ = $e ? $e(null) : {}, this.size = 0;
      }
      function Of(t) {
        var n = this.has(t) && delete this.__data__[t];
        return this.size -= n ? 1 : 0, n;
      }
      function Mf(t) {
        var n = this.__data__;
        if ($e) {
          var e = n[t];
          return e === zn ? s : e;
        }
        return mt.call(n, t) ? n[t] : s;
      }
      function If(t) {
        var n = this.__data__;
        return $e ? n[t] !== s : mt.call(n, t);
      }
      function Rf(t, n) {
        var e = this.__data__;
        return this.size += this.has(t) ? 0 : 1, e[t] = $e && n === s ? zn : n, this;
      }
      ce.prototype.clear = Af, ce.prototype.delete = Of, ce.prototype.get = Mf, ce.prototype.has = If, ce.prototype.set = Rf;
      function Hn(t) {
        var n = -1, e = t == null ? 0 : t.length;
        for (this.clear(); ++n < e; ) {
          var r = t[n];
          this.set(r[0], r[1]);
        }
      }
      function Ef() {
        this.__data__ = [], this.size = 0;
      }
      function Df(t) {
        var n = this.__data__, e = Sr(n, t);
        if (e < 0)
          return !1;
        var r = n.length - 1;
        return e == r ? n.pop() : vr.call(n, e, 1), --this.size, !0;
      }
      function Lf(t) {
        var n = this.__data__, e = Sr(n, t);
        return e < 0 ? s : n[e][1];
      }
      function Tf(t) {
        return Sr(this.__data__, t) > -1;
      }
      function Pf(t, n) {
        var e = this.__data__, r = Sr(e, t);
        return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
      }
      Hn.prototype.clear = Ef, Hn.prototype.delete = Df, Hn.prototype.get = Lf, Hn.prototype.has = Tf, Hn.prototype.set = Pf;
      function $n(t) {
        var n = -1, e = t == null ? 0 : t.length;
        for (this.clear(); ++n < e; ) {
          var r = t[n];
          this.set(r[0], r[1]);
        }
      }
      function Bf() {
        this.size = 0, this.__data__ = {
          hash: new ce(),
          map: new (Ge || Hn)(),
          string: new ce()
        };
      }
      function Ff(t) {
        var n = Br(this, t).delete(t);
        return this.size -= n ? 1 : 0, n;
      }
      function Nf(t) {
        return Br(this, t).get(t);
      }
      function Wf(t) {
        return Br(this, t).has(t);
      }
      function qf(t, n) {
        var e = Br(this, t), r = e.size;
        return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
      }
      $n.prototype.clear = Bf, $n.prototype.delete = Ff, $n.prototype.get = Nf, $n.prototype.has = Wf, $n.prototype.set = qf;
      function he(t) {
        var n = -1, e = t == null ? 0 : t.length;
        for (this.__data__ = new $n(); ++n < e; )
          this.add(t[n]);
      }
      function zf(t) {
        return this.__data__.set(t, zn), this;
      }
      function Uf(t) {
        return this.__data__.has(t);
      }
      he.prototype.add = he.prototype.push = zf, he.prototype.has = Uf;
      function Tn(t) {
        var n = this.__data__ = new Hn(t);
        this.size = n.size;
      }
      function kf() {
        this.__data__ = new Hn(), this.size = 0;
      }
      function Gf(t) {
        var n = this.__data__, e = n.delete(t);
        return this.size = n.size, e;
      }
      function Hf(t) {
        return this.__data__.get(t);
      }
      function $f(t) {
        return this.__data__.has(t);
      }
      function Kf(t, n) {
        var e = this.__data__;
        if (e instanceof Hn) {
          var r = e.__data__;
          if (!Ge || r.length < xt - 1)
            return r.push([t, n]), this.size = ++e.size, this;
          e = this.__data__ = new $n(r);
        }
        return e.set(t, n), this.size = e.size, this;
      }
      Tn.prototype.clear = kf, Tn.prototype.delete = Gf, Tn.prototype.get = Hf, Tn.prototype.has = $f, Tn.prototype.set = Kf;
      function jo(t, n) {
        var e = ot(t), r = !e && _e(t), i = !e && !r && ae(t), a = !e && !r && !i && Pe(t), c = e || r || i || a, v = c ? fi(t.length, nf) : [], x = v.length;
        for (var E in t)
          (n || mt.call(t, E)) && !(c && // Safari 9 has enumerable `arguments.length` in strict mode.
          (E == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          i && (E == "offset" || E == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          a && (E == "buffer" || E == "byteLength" || E == "byteOffset") || // Skip index properties.
          Xn(E, x))) && v.push(E);
        return v;
      }
      function tu(t) {
        var n = t.length;
        return n ? t[Oi(0, n - 1)] : s;
      }
      function Yf(t, n) {
        return Fr(sn(t), ge(n, 0, t.length));
      }
      function Zf(t) {
        return Fr(sn(t));
      }
      function vi(t, n, e) {
        (e !== s && !Pn(t[n], e) || e === s && !(n in t)) && Kn(t, n, e);
      }
      function Ye(t, n, e) {
        var r = t[n];
        (!(mt.call(t, n) && Pn(r, e)) || e === s && !(n in t)) && Kn(t, n, e);
      }
      function Sr(t, n) {
        for (var e = t.length; e--; )
          if (Pn(t[e][0], n))
            return e;
        return -1;
      }
      function Xf(t, n, e, r) {
        return re(t, function(i, a, c) {
          n(r, i, e(i), c);
        }), r;
      }
      function nu(t, n) {
        return t && Wn(n, Xt(n), t);
      }
      function Qf(t, n) {
        return t && Wn(n, ln(n), t);
      }
      function Kn(t, n, e) {
        n == "__proto__" && _r ? _r(t, n, {
          configurable: !0,
          enumerable: !0,
          value: e,
          writable: !0
        }) : t[n] = e;
      }
      function _i(t, n) {
        for (var e = -1, r = n.length, i = C(r), a = t == null; ++e < r; )
          i[e] = a ? s : Ji(t, n[e]);
        return i;
      }
      function ge(t, n, e) {
        return t === t && (e !== s && (t = t <= e ? t : e), n !== s && (t = t >= n ? t : n)), t;
      }
      function An(t, n, e, r, i, a) {
        var c, v = n & Ut, x = n & jt, E = n & Gt;
        if (e && (c = i ? e(t, r, i, a) : e(t)), c !== s)
          return c;
        if (!Lt(t))
          return t;
        var D = ot(t);
        if (D) {
          if (c = Wl(t), !v)
            return sn(t, c);
        } else {
          var F = nn(t), z = F == d || F == h;
          if (ae(t))
            return Au(t, v);
          if (F == W || F == l || z && !i) {
            if (c = x || z ? {} : Hu(t), !v)
              return x ? Ml(t, Qf(c, t)) : Ol(t, nu(c, t));
          } else {
            if (!Mt[F])
              return i ? t : {};
            c = ql(t, F, v);
          }
        }
        a || (a = new Tn());
        var Y = a.get(t);
        if (Y)
          return Y;
        a.set(t, c), ya(t) ? t.forEach(function(tt) {
          c.add(An(tt, n, e, tt, t, a));
        }) : _a(t) && t.forEach(function(tt, ft) {
          c.set(ft, An(tt, n, e, ft, t, a));
        });
        var j = E ? x ? Ni : Fi : x ? ln : Xt, at = D ? s : j(t);
        return bn(at || t, function(tt, ft) {
          at && (ft = tt, tt = t[ft]), Ye(c, ft, An(tt, n, e, ft, t, a));
        }), c;
      }
      function Jf(t) {
        var n = Xt(t);
        return function(e) {
          return eu(e, t, n);
        };
      }
      function eu(t, n, e) {
        var r = e.length;
        if (t == null)
          return !r;
        for (t = At(t); r--; ) {
          var i = e[r], a = n[i], c = t[i];
          if (c === s && !(i in t) || !a(c))
            return !1;
        }
        return !0;
      }
      function ru(t, n, e) {
        if (typeof t != "function")
          throw new Sn(gt);
        return tr(function() {
          t.apply(s, e);
        }, n);
      }
      function Ze(t, n, e, r) {
        var i = -1, a = ur, c = !0, v = t.length, x = [], E = n.length;
        if (!v)
          return x;
        e && (n = Et(n, pn(e))), r ? (a = ri, c = !1) : n.length >= xt && (a = Ue, c = !1, n = new he(n));
        t:
          for (; ++i < v; ) {
            var D = t[i], F = e == null ? D : e(D);
            if (D = r || D !== 0 ? D : 0, c && F === F) {
              for (var z = E; z--; )
                if (n[z] === F)
                  continue t;
              x.push(D);
            } else a(n, F, r) || x.push(D);
          }
        return x;
      }
      var re = Eu(Nn), iu = Eu(yi, !0);
      function Vf(t, n) {
        var e = !0;
        return re(t, function(r, i, a) {
          return e = !!n(r, i, a), e;
        }), e;
      }
      function Cr(t, n, e) {
        for (var r = -1, i = t.length; ++r < i; ) {
          var a = t[r], c = n(a);
          if (c != null && (v === s ? c === c && !_n(c) : e(c, v)))
            var v = c, x = a;
        }
        return x;
      }
      function jf(t, n, e, r) {
        var i = t.length;
        for (e = ut(e), e < 0 && (e = -e > i ? 0 : i + e), r = r === s || r > i ? i : ut(r), r < 0 && (r += i), r = e > r ? 0 : xa(r); e < r; )
          t[e++] = n;
        return t;
      }
      function ou(t, n) {
        var e = [];
        return re(t, function(r, i, a) {
          n(r, i, a) && e.push(r);
        }), e;
      }
      function Vt(t, n, e, r, i) {
        var a = -1, c = t.length;
        for (e || (e = Ul), i || (i = []); ++a < c; ) {
          var v = t[a];
          n > 0 && e(v) ? n > 1 ? Vt(v, n - 1, e, r, i) : te(i, v) : r || (i[i.length] = v);
        }
        return i;
      }
      var wi = Du(), uu = Du(!0);
      function Nn(t, n) {
        return t && wi(t, n, Xt);
      }
      function yi(t, n) {
        return t && uu(t, n, Xt);
      }
      function Ar(t, n) {
        return jn(n, function(e) {
          return Qn(t[e]);
        });
      }
      function de(t, n) {
        n = oe(n, t);
        for (var e = 0, r = n.length; t != null && e < r; )
          t = t[qn(n[e++])];
        return e && e == r ? t : s;
      }
      function au(t, n, e) {
        var r = n(t);
        return ot(t) ? r : te(r, e(t));
      }
      function rn(t) {
        return t == null ? t === s ? nt : N : le && le in At(t) ? Bl(t) : Zl(t);
      }
      function mi(t, n) {
        return t > n;
      }
      function tl(t, n) {
        return t != null && mt.call(t, n);
      }
      function nl(t, n) {
        return t != null && n in At(t);
      }
      function el(t, n, e) {
        return t >= tn(n, e) && t < Kt(n, e);
      }
      function xi(t, n, e) {
        for (var r = e ? ri : ur, i = t[0].length, a = t.length, c = a, v = C(a), x = 1 / 0, E = []; c--; ) {
          var D = t[c];
          c && n && (D = Et(D, pn(n))), x = tn(D.length, x), v[c] = !e && (n || i >= 120 && D.length >= 120) ? new he(c && D) : s;
        }
        D = t[0];
        var F = -1, z = v[0];
        t:
          for (; ++F < i && E.length < x; ) {
            var Y = D[F], j = n ? n(Y) : Y;
            if (Y = e || Y !== 0 ? Y : 0, !(z ? Ue(z, j) : r(E, j, e))) {
              for (c = a; --c; ) {
                var at = v[c];
                if (!(at ? Ue(at, j) : r(t[c], j, e)))
                  continue t;
              }
              z && z.push(j), E.push(Y);
            }
          }
        return E;
      }
      function rl(t, n, e, r) {
        return Nn(t, function(i, a, c) {
          n(r, e(i), a, c);
        }), r;
      }
      function Xe(t, n, e) {
        n = oe(n, t), t = Zu(t, n);
        var r = t == null ? t : t[qn(Mn(n))];
        return r == null ? s : dn(r, t, e);
      }
      function su(t) {
        return Nt(t) && rn(t) == l;
      }
      function il(t) {
        return Nt(t) && rn(t) == kt;
      }
      function ol(t) {
        return Nt(t) && rn(t) == _;
      }
      function Qe(t, n, e, r, i) {
        return t === n ? !0 : t == null || n == null || !Nt(t) && !Nt(n) ? t !== t && n !== n : ul(t, n, e, r, Qe, i);
      }
      function ul(t, n, e, r, i, a) {
        var c = ot(t), v = ot(n), x = c ? f : nn(t), E = v ? f : nn(n);
        x = x == l ? W : x, E = E == l ? W : E;
        var D = x == W, F = E == W, z = x == E;
        if (z && ae(t)) {
          if (!ae(n))
            return !1;
          c = !0, D = !1;
        }
        if (z && !D)
          return a || (a = new Tn()), c || Pe(t) ? Uu(t, n, e, r, i, a) : Tl(t, n, x, e, r, i, a);
        if (!(e & pt)) {
          var Y = D && mt.call(t, "__wrapped__"), j = F && mt.call(n, "__wrapped__");
          if (Y || j) {
            var at = Y ? t.value() : t, tt = j ? n.value() : n;
            return a || (a = new Tn()), i(at, tt, e, r, a);
          }
        }
        return z ? (a || (a = new Tn()), Pl(t, n, e, r, i, a)) : !1;
      }
      function al(t) {
        return Nt(t) && nn(t) == y;
      }
      function bi(t, n, e, r) {
        var i = e.length, a = i, c = !r;
        if (t == null)
          return !a;
        for (t = At(t); i--; ) {
          var v = e[i];
          if (c && v[2] ? v[1] !== t[v[0]] : !(v[0] in t))
            return !1;
        }
        for (; ++i < a; ) {
          v = e[i];
          var x = v[0], E = t[x], D = v[1];
          if (c && v[2]) {
            if (E === s && !(x in t))
              return !1;
          } else {
            var F = new Tn();
            if (r)
              var z = r(E, D, x, t, n, F);
            if (!(z === s ? Qe(D, E, pt | bt, r, F) : z))
              return !1;
          }
        }
        return !0;
      }
      function fu(t) {
        if (!Lt(t) || Gl(t))
          return !1;
        var n = Qn(t) ? af : Qa;
        return n.test(ve(t));
      }
      function sl(t) {
        return Nt(t) && rn(t) == Z;
      }
      function fl(t) {
        return Nt(t) && nn(t) == K;
      }
      function ll(t) {
        return Nt(t) && kr(t.length) && !!It[rn(t)];
      }
      function lu(t) {
        return typeof t == "function" ? t : t == null ? cn : typeof t == "object" ? ot(t) ? gu(t[0], t[1]) : hu(t) : La(t);
      }
      function Si(t) {
        if (!je(t))
          return gf(t);
        var n = [];
        for (var e in At(t))
          mt.call(t, e) && e != "constructor" && n.push(e);
        return n;
      }
      function cl(t) {
        if (!Lt(t))
          return Yl(t);
        var n = je(t), e = [];
        for (var r in t)
          r == "constructor" && (n || !mt.call(t, r)) || e.push(r);
        return e;
      }
      function Ci(t, n) {
        return t < n;
      }
      function cu(t, n) {
        var e = -1, r = fn(t) ? C(t.length) : [];
        return re(t, function(i, a, c) {
          r[++e] = n(i, a, c);
        }), r;
      }
      function hu(t) {
        var n = qi(t);
        return n.length == 1 && n[0][2] ? Ku(n[0][0], n[0][1]) : function(e) {
          return e === t || bi(e, t, n);
        };
      }
      function gu(t, n) {
        return Ui(t) && $u(n) ? Ku(qn(t), n) : function(e) {
          var r = Ji(e, t);
          return r === s && r === n ? Vi(e, t) : Qe(n, r, pt | bt);
        };
      }
      function Or(t, n, e, r, i) {
        t !== n && wi(n, function(a, c) {
          if (i || (i = new Tn()), Lt(a))
            hl(t, n, c, e, Or, r, i);
          else {
            var v = r ? r(Gi(t, c), a, c + "", t, n, i) : s;
            v === s && (v = a), vi(t, c, v);
          }
        }, ln);
      }
      function hl(t, n, e, r, i, a, c) {
        var v = Gi(t, e), x = Gi(n, e), E = c.get(x);
        if (E) {
          vi(t, e, E);
          return;
        }
        var D = a ? a(v, x, e + "", t, n, c) : s, F = D === s;
        if (F) {
          var z = ot(x), Y = !z && ae(x), j = !z && !Y && Pe(x);
          D = x, z || Y || j ? ot(v) ? D = v : qt(v) ? D = sn(v) : Y ? (F = !1, D = Au(x, !0)) : j ? (F = !1, D = Ou(x, !0)) : D = [] : nr(x) || _e(x) ? (D = v, _e(v) ? D = ba(v) : (!Lt(v) || Qn(v)) && (D = Hu(x))) : F = !1;
        }
        F && (c.set(x, D), i(D, x, r, a, c), c.delete(x)), vi(t, e, D);
      }
      function du(t, n) {
        var e = t.length;
        if (e)
          return n += n < 0 ? e : 0, Xn(n, e) ? t[n] : s;
      }
      function pu(t, n, e) {
        n.length ? n = Et(n, function(a) {
          return ot(a) ? function(c) {
            return de(c, a.length === 1 ? a[0] : a);
          } : a;
        }) : n = [cn];
        var r = -1;
        n = Et(n, pn(V()));
        var i = cu(t, function(a, c, v) {
          var x = Et(n, function(E) {
            return E(a);
          });
          return { criteria: x, index: ++r, value: a };
        });
        return Ws(i, function(a, c) {
          return Al(a, c, e);
        });
      }
      function gl(t, n) {
        return vu(t, n, function(e, r) {
          return Vi(t, r);
        });
      }
      function vu(t, n, e) {
        for (var r = -1, i = n.length, a = {}; ++r < i; ) {
          var c = n[r], v = de(t, c);
          e(v, c) && Je(a, oe(c, t), v);
        }
        return a;
      }
      function dl(t) {
        return function(n) {
          return de(n, t);
        };
      }
      function Ai(t, n, e, r) {
        var i = r ? Ns : Se, a = -1, c = n.length, v = t;
        for (t === n && (n = sn(n)), e && (v = Et(t, pn(e))); ++a < c; )
          for (var x = 0, E = n[a], D = e ? e(E) : E; (x = i(v, D, x, r)) > -1; )
            v !== t && vr.call(v, x, 1), vr.call(t, x, 1);
        return t;
      }
      function _u(t, n) {
        for (var e = t ? n.length : 0, r = e - 1; e--; ) {
          var i = n[e];
          if (e == r || i !== a) {
            var a = i;
            Xn(i) ? vr.call(t, i, 1) : Ri(t, i);
          }
        }
        return t;
      }
      function Oi(t, n) {
        return t + yr(Jo() * (n - t + 1));
      }
      function pl(t, n, e, r) {
        for (var i = -1, a = Kt(wr((n - t) / (e || 1)), 0), c = C(a); a--; )
          c[r ? a : ++i] = t, t += e;
        return c;
      }
      function Mi(t, n) {
        var e = "";
        if (!t || n < 1 || n > P)
          return e;
        do
          n % 2 && (e += t), n = yr(n / 2), n && (t += t);
        while (n);
        return e;
      }
      function st(t, n) {
        return Hi(Yu(t, n, cn), t + "");
      }
      function vl(t) {
        return tu(Be(t));
      }
      function _l(t, n) {
        var e = Be(t);
        return Fr(e, ge(n, 0, e.length));
      }
      function Je(t, n, e, r) {
        if (!Lt(t))
          return t;
        n = oe(n, t);
        for (var i = -1, a = n.length, c = a - 1, v = t; v != null && ++i < a; ) {
          var x = qn(n[i]), E = e;
          if (x === "__proto__" || x === "constructor" || x === "prototype")
            return t;
          if (i != c) {
            var D = v[x];
            E = r ? r(D, x, v) : s, E === s && (E = Lt(D) ? D : Xn(n[i + 1]) ? [] : {});
          }
          Ye(v, x, E), v = v[x];
        }
        return t;
      }
      var wu = mr ? function(t, n) {
        return mr.set(t, n), t;
      } : cn, wl = _r ? function(t, n) {
        return _r(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: to(n),
          writable: !0
        });
      } : cn;
      function yl(t) {
        return Fr(Be(t));
      }
      function On(t, n, e) {
        var r = -1, i = t.length;
        n < 0 && (n = -n > i ? 0 : i + n), e = e > i ? i : e, e < 0 && (e += i), i = n > e ? 0 : e - n >>> 0, n >>>= 0;
        for (var a = C(i); ++r < i; )
          a[r] = t[r + n];
        return a;
      }
      function ml(t, n) {
        var e;
        return re(t, function(r, i, a) {
          return e = n(r, i, a), !e;
        }), !!e;
      }
      function Mr(t, n, e) {
        var r = 0, i = t == null ? r : t.length;
        if (typeof n == "number" && n === n && i <= A) {
          for (; r < i; ) {
            var a = r + i >>> 1, c = t[a];
            c !== null && !_n(c) && (e ? c <= n : c < n) ? r = a + 1 : i = a;
          }
          return i;
        }
        return Ii(t, n, cn, e);
      }
      function Ii(t, n, e, r) {
        var i = 0, a = t == null ? 0 : t.length;
        if (a === 0)
          return 0;
        n = e(n);
        for (var c = n !== n, v = n === null, x = _n(n), E = n === s; i < a; ) {
          var D = yr((i + a) / 2), F = e(t[D]), z = F !== s, Y = F === null, j = F === F, at = _n(F);
          if (c)
            var tt = r || j;
          else E ? tt = j && (r || z) : v ? tt = j && z && (r || !Y) : x ? tt = j && z && !Y && (r || !at) : Y || at ? tt = !1 : tt = r ? F <= n : F < n;
          tt ? i = D + 1 : a = D;
        }
        return tn(a, Wt);
      }
      function yu(t, n) {
        for (var e = -1, r = t.length, i = 0, a = []; ++e < r; ) {
          var c = t[e], v = n ? n(c) : c;
          if (!e || !Pn(v, x)) {
            var x = v;
            a[i++] = c === 0 ? 0 : c;
          }
        }
        return a;
      }
      function mu(t) {
        return typeof t == "number" ? t : _n(t) ? q : +t;
      }
      function vn(t) {
        if (typeof t == "string")
          return t;
        if (ot(t))
          return Et(t, vn) + "";
        if (_n(t))
          return Vo ? Vo.call(t) : "";
        var n = t + "";
        return n == "0" && 1 / t == -b ? "-0" : n;
      }
      function ie(t, n, e) {
        var r = -1, i = ur, a = t.length, c = !0, v = [], x = v;
        if (e)
          c = !1, i = ri;
        else if (a >= xt) {
          var E = n ? null : Dl(t);
          if (E)
            return sr(E);
          c = !1, i = Ue, x = new he();
        } else
          x = n ? [] : v;
        t:
          for (; ++r < a; ) {
            var D = t[r], F = n ? n(D) : D;
            if (D = e || D !== 0 ? D : 0, c && F === F) {
              for (var z = x.length; z--; )
                if (x[z] === F)
                  continue t;
              n && x.push(F), v.push(D);
            } else i(x, F, e) || (x !== v && x.push(F), v.push(D));
          }
        return v;
      }
      function Ri(t, n) {
        return n = oe(n, t), t = Zu(t, n), t == null || delete t[qn(Mn(n))];
      }
      function xu(t, n, e, r) {
        return Je(t, n, e(de(t, n)), r);
      }
      function Ir(t, n, e, r) {
        for (var i = t.length, a = r ? i : -1; (r ? a-- : ++a < i) && n(t[a], a, t); )
          ;
        return e ? On(t, r ? 0 : a, r ? a + 1 : i) : On(t, r ? a + 1 : 0, r ? i : a);
      }
      function bu(t, n) {
        var e = t;
        return e instanceof ct && (e = e.value()), ii(n, function(r, i) {
          return i.func.apply(i.thisArg, te([r], i.args));
        }, e);
      }
      function Ei(t, n, e) {
        var r = t.length;
        if (r < 2)
          return r ? ie(t[0]) : [];
        for (var i = -1, a = C(r); ++i < r; )
          for (var c = t[i], v = -1; ++v < r; )
            v != i && (a[i] = Ze(a[i] || c, t[v], n, e));
        return ie(Vt(a, 1), n, e);
      }
      function Su(t, n, e) {
        for (var r = -1, i = t.length, a = n.length, c = {}; ++r < i; ) {
          var v = r < a ? n[r] : s;
          e(c, t[r], v);
        }
        return c;
      }
      function Di(t) {
        return qt(t) ? t : [];
      }
      function Li(t) {
        return typeof t == "function" ? t : cn;
      }
      function oe(t, n) {
        return ot(t) ? t : Ui(t, n) ? [t] : Vu(yt(t));
      }
      var xl = st;
      function ue(t, n, e) {
        var r = t.length;
        return e = e === s ? r : e, !n && e >= r ? t : On(t, n, e);
      }
      var Cu = sf || function(t) {
        return Jt.clearTimeout(t);
      };
      function Au(t, n) {
        if (n)
          return t.slice();
        var e = t.length, r = Ko ? Ko(e) : new t.constructor(e);
        return t.copy(r), r;
      }
      function Ti(t) {
        var n = new t.constructor(t.byteLength);
        return new dr(n).set(new dr(t)), n;
      }
      function bl(t, n) {
        var e = n ? Ti(t.buffer) : t.buffer;
        return new t.constructor(e, t.byteOffset, t.byteLength);
      }
      function Sl(t) {
        var n = new t.constructor(t.source, ao.exec(t));
        return n.lastIndex = t.lastIndex, n;
      }
      function Cl(t) {
        return Ke ? At(Ke.call(t)) : {};
      }
      function Ou(t, n) {
        var e = n ? Ti(t.buffer) : t.buffer;
        return new t.constructor(e, t.byteOffset, t.length);
      }
      function Mu(t, n) {
        if (t !== n) {
          var e = t !== s, r = t === null, i = t === t, a = _n(t), c = n !== s, v = n === null, x = n === n, E = _n(n);
          if (!v && !E && !a && t > n || a && c && x && !v && !E || r && c && x || !e && x || !i)
            return 1;
          if (!r && !a && !E && t < n || E && e && i && !r && !a || v && e && i || !c && i || !x)
            return -1;
        }
        return 0;
      }
      function Al(t, n, e) {
        for (var r = -1, i = t.criteria, a = n.criteria, c = i.length, v = e.length; ++r < c; ) {
          var x = Mu(i[r], a[r]);
          if (x) {
            if (r >= v)
              return x;
            var E = e[r];
            return x * (E == "desc" ? -1 : 1);
          }
        }
        return t.index - n.index;
      }
      function Iu(t, n, e, r) {
        for (var i = -1, a = t.length, c = e.length, v = -1, x = n.length, E = Kt(a - c, 0), D = C(x + E), F = !r; ++v < x; )
          D[v] = n[v];
        for (; ++i < c; )
          (F || i < a) && (D[e[i]] = t[i]);
        for (; E--; )
          D[v++] = t[i++];
        return D;
      }
      function Ru(t, n, e, r) {
        for (var i = -1, a = t.length, c = -1, v = e.length, x = -1, E = n.length, D = Kt(a - v, 0), F = C(D + E), z = !r; ++i < D; )
          F[i] = t[i];
        for (var Y = i; ++x < E; )
          F[Y + x] = n[x];
        for (; ++c < v; )
          (z || i < a) && (F[Y + e[c]] = t[i++]);
        return F;
      }
      function sn(t, n) {
        var e = -1, r = t.length;
        for (n || (n = C(r)); ++e < r; )
          n[e] = t[e];
        return n;
      }
      function Wn(t, n, e, r) {
        var i = !e;
        e || (e = {});
        for (var a = -1, c = n.length; ++a < c; ) {
          var v = n[a], x = r ? r(e[v], t[v], v, e, t) : s;
          x === s && (x = t[v]), i ? Kn(e, v, x) : Ye(e, v, x);
        }
        return e;
      }
      function Ol(t, n) {
        return Wn(t, zi(t), n);
      }
      function Ml(t, n) {
        return Wn(t, ku(t), n);
      }
      function Rr(t, n) {
        return function(e, r) {
          var i = ot(e) ? Ds : Xf, a = n ? n() : {};
          return i(e, t, V(r, 2), a);
        };
      }
      function De(t) {
        return st(function(n, e) {
          var r = -1, i = e.length, a = i > 1 ? e[i - 1] : s, c = i > 2 ? e[2] : s;
          for (a = t.length > 3 && typeof a == "function" ? (i--, a) : s, c && on(e[0], e[1], c) && (a = i < 3 ? s : a, i = 1), n = At(n); ++r < i; ) {
            var v = e[r];
            v && t(n, v, r, a);
          }
          return n;
        });
      }
      function Eu(t, n) {
        return function(e, r) {
          if (e == null)
            return e;
          if (!fn(e))
            return t(e, r);
          for (var i = e.length, a = n ? i : -1, c = At(e); (n ? a-- : ++a < i) && r(c[a], a, c) !== !1; )
            ;
          return e;
        };
      }
      function Du(t) {
        return function(n, e, r) {
          for (var i = -1, a = At(n), c = r(n), v = c.length; v--; ) {
            var x = c[t ? v : ++i];
            if (e(a[x], x, a) === !1)
              break;
          }
          return n;
        };
      }
      function Il(t, n, e) {
        var r = n & Pt, i = Ve(t);
        function a() {
          var c = this && this !== Jt && this instanceof a ? i : t;
          return c.apply(r ? e : this, arguments);
        }
        return a;
      }
      function Lu(t) {
        return function(n) {
          n = yt(n);
          var e = Ce(n) ? Ln(n) : s, r = e ? e[0] : n.charAt(0), i = e ? ue(e, 1).join("") : n.slice(1);
          return r[t]() + i;
        };
      }
      function Le(t) {
        return function(n) {
          return ii(Ea(Ra(n).replace(_s, "")), t, "");
        };
      }
      function Ve(t) {
        return function() {
          var n = arguments;
          switch (n.length) {
            case 0:
              return new t();
            case 1:
              return new t(n[0]);
            case 2:
              return new t(n[0], n[1]);
            case 3:
              return new t(n[0], n[1], n[2]);
            case 4:
              return new t(n[0], n[1], n[2], n[3]);
            case 5:
              return new t(n[0], n[1], n[2], n[3], n[4]);
            case 6:
              return new t(n[0], n[1], n[2], n[3], n[4], n[5]);
            case 7:
              return new t(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
          }
          var e = Ee(t.prototype), r = t.apply(e, n);
          return Lt(r) ? r : e;
        };
      }
      function Rl(t, n, e) {
        var r = Ve(t);
        function i() {
          for (var a = arguments.length, c = C(a), v = a, x = Te(i); v--; )
            c[v] = arguments[v];
          var E = a < 3 && c[0] !== x && c[a - 1] !== x ? [] : ne(c, x);
          if (a -= E.length, a < e)
            return Nu(
              t,
              n,
              Er,
              i.placeholder,
              s,
              c,
              E,
              s,
              s,
              e - a
            );
          var D = this && this !== Jt && this instanceof i ? r : t;
          return dn(D, this, c);
        }
        return i;
      }
      function Tu(t) {
        return function(n, e, r) {
          var i = At(n);
          if (!fn(n)) {
            var a = V(e, 3);
            n = Xt(n), e = function(v) {
              return a(i[v], v, i);
            };
          }
          var c = t(n, e, r);
          return c > -1 ? i[a ? n[c] : c] : s;
        };
      }
      function Pu(t) {
        return Zn(function(n) {
          var e = n.length, r = e, i = Cn.prototype.thru;
          for (t && n.reverse(); r--; ) {
            var a = n[r];
            if (typeof a != "function")
              throw new Sn(gt);
            if (i && !c && Pr(a) == "wrapper")
              var c = new Cn([], !0);
          }
          for (r = c ? r : e; ++r < e; ) {
            a = n[r];
            var v = Pr(a), x = v == "wrapper" ? Wi(a) : s;
            x && ki(x[0]) && x[1] == (an | Bt | Zt | en) && !x[4].length && x[9] == 1 ? c = c[Pr(x[0])].apply(c, x[3]) : c = a.length == 1 && ki(a) ? c[v]() : c.thru(a);
          }
          return function() {
            var E = arguments, D = E[0];
            if (c && E.length == 1 && ot(D))
              return c.plant(D).value();
            for (var F = 0, z = e ? n[F].apply(this, E) : D; ++F < e; )
              z = n[F].call(this, z);
            return z;
          };
        });
      }
      function Er(t, n, e, r, i, a, c, v, x, E) {
        var D = n & an, F = n & Pt, z = n & Rt, Y = n & (Bt | Rn), j = n & gn, at = z ? s : Ve(t);
        function tt() {
          for (var ft = arguments.length, dt = C(ft), wn = ft; wn--; )
            dt[wn] = arguments[wn];
          if (Y)
            var un = Te(tt), yn = zs(dt, un);
          if (r && (dt = Iu(dt, r, i, Y)), a && (dt = Ru(dt, a, c, Y)), ft -= yn, Y && ft < E) {
            var zt = ne(dt, un);
            return Nu(
              t,
              n,
              Er,
              tt.placeholder,
              e,
              dt,
              zt,
              v,
              x,
              E - ft
            );
          }
          var Bn = F ? e : this, Vn = z ? Bn[t] : t;
          return ft = dt.length, v ? dt = Xl(dt, v) : j && ft > 1 && dt.reverse(), D && x < ft && (dt.length = x), this && this !== Jt && this instanceof tt && (Vn = at || Ve(Vn)), Vn.apply(Bn, dt);
        }
        return tt;
      }
      function Bu(t, n) {
        return function(e, r) {
          return rl(e, t, n(r), {});
        };
      }
      function Dr(t, n) {
        return function(e, r) {
          var i;
          if (e === s && r === s)
            return n;
          if (e !== s && (i = e), r !== s) {
            if (i === s)
              return r;
            typeof e == "string" || typeof r == "string" ? (e = vn(e), r = vn(r)) : (e = mu(e), r = mu(r)), i = t(e, r);
          }
          return i;
        };
      }
      function Pi(t) {
        return Zn(function(n) {
          return n = Et(n, pn(V())), st(function(e) {
            var r = this;
            return t(n, function(i) {
              return dn(i, r, e);
            });
          });
        });
      }
      function Lr(t, n) {
        n = n === s ? " " : vn(n);
        var e = n.length;
        if (e < 2)
          return e ? Mi(n, t) : n;
        var r = Mi(n, wr(t / Ae(n)));
        return Ce(n) ? ue(Ln(r), 0, t).join("") : r.slice(0, t);
      }
      function El(t, n, e, r) {
        var i = n & Pt, a = Ve(t);
        function c() {
          for (var v = -1, x = arguments.length, E = -1, D = r.length, F = C(D + x), z = this && this !== Jt && this instanceof c ? a : t; ++E < D; )
            F[E] = r[E];
          for (; x--; )
            F[E++] = arguments[++v];
          return dn(z, i ? e : this, F);
        }
        return c;
      }
      function Fu(t) {
        return function(n, e, r) {
          return r && typeof r != "number" && on(n, e, r) && (e = r = s), n = Jn(n), e === s ? (e = n, n = 0) : e = Jn(e), r = r === s ? n < e ? 1 : -1 : Jn(r), pl(n, e, r, t);
        };
      }
      function Tr(t) {
        return function(n, e) {
          return typeof n == "string" && typeof e == "string" || (n = In(n), e = In(e)), t(n, e);
        };
      }
      function Nu(t, n, e, r, i, a, c, v, x, E) {
        var D = n & Bt, F = D ? c : s, z = D ? s : c, Y = D ? a : s, j = D ? s : a;
        n |= D ? Zt : En, n &= ~(D ? En : Zt), n & hn || (n &= ~(Pt | Rt));
        var at = [
          t,
          n,
          i,
          Y,
          F,
          j,
          z,
          v,
          x,
          E
        ], tt = e.apply(s, at);
        return ki(t) && Xu(tt, at), tt.placeholder = r, Qu(tt, t, n);
      }
      function Bi(t) {
        var n = $t[t];
        return function(e, r) {
          if (e = In(e), r = r == null ? 0 : tn(ut(r), 292), r && Qo(e)) {
            var i = (yt(e) + "e").split("e"), a = n(i[0] + "e" + (+i[1] + r));
            return i = (yt(a) + "e").split("e"), +(i[0] + "e" + (+i[1] - r));
          }
          return n(e);
        };
      }
      var Dl = Ie && 1 / sr(new Ie([, -0]))[1] == b ? function(t) {
        return new Ie(t);
      } : ro;
      function Wu(t) {
        return function(n) {
          var e = nn(n);
          return e == y ? ci(n) : e == K ? Ys(n) : qs(n, t(n));
        };
      }
      function Yn(t, n, e, r, i, a, c, v) {
        var x = n & Rt;
        if (!x && typeof t != "function")
          throw new Sn(gt);
        var E = r ? r.length : 0;
        if (E || (n &= ~(Zt | En), r = i = s), c = c === s ? c : Kt(ut(c), 0), v = v === s ? v : ut(v), E -= i ? i.length : 0, n & En) {
          var D = r, F = i;
          r = i = s;
        }
        var z = x ? s : Wi(t), Y = [
          t,
          n,
          e,
          r,
          i,
          D,
          F,
          a,
          c,
          v
        ];
        if (z && Kl(Y, z), t = Y[0], n = Y[1], e = Y[2], r = Y[3], i = Y[4], v = Y[9] = Y[9] === s ? x ? 0 : t.length : Kt(Y[9] - E, 0), !v && n & (Bt | Rn) && (n &= ~(Bt | Rn)), !n || n == Pt)
          var j = Il(t, n, e);
        else n == Bt || n == Rn ? j = Rl(t, n, v) : (n == Zt || n == (Pt | Zt)) && !i.length ? j = El(t, n, e, r) : j = Er.apply(s, Y);
        var at = z ? wu : Xu;
        return Qu(at(j, Y), t, n);
      }
      function qu(t, n, e, r) {
        return t === s || Pn(t, Me[e]) && !mt.call(r, e) ? n : t;
      }
      function zu(t, n, e, r, i, a) {
        return Lt(t) && Lt(n) && (a.set(n, t), Or(t, n, s, zu, a), a.delete(n)), t;
      }
      function Ll(t) {
        return nr(t) ? s : t;
      }
      function Uu(t, n, e, r, i, a) {
        var c = e & pt, v = t.length, x = n.length;
        if (v != x && !(c && x > v))
          return !1;
        var E = a.get(t), D = a.get(n);
        if (E && D)
          return E == n && D == t;
        var F = -1, z = !0, Y = e & bt ? new he() : s;
        for (a.set(t, n), a.set(n, t); ++F < v; ) {
          var j = t[F], at = n[F];
          if (r)
            var tt = c ? r(at, j, F, n, t, a) : r(j, at, F, t, n, a);
          if (tt !== s) {
            if (tt)
              continue;
            z = !1;
            break;
          }
          if (Y) {
            if (!oi(n, function(ft, dt) {
              if (!Ue(Y, dt) && (j === ft || i(j, ft, e, r, a)))
                return Y.push(dt);
            })) {
              z = !1;
              break;
            }
          } else if (!(j === at || i(j, at, e, r, a))) {
            z = !1;
            break;
          }
        }
        return a.delete(t), a.delete(n), z;
      }
      function Tl(t, n, e, r, i, a, c) {
        switch (e) {
          case wt:
            if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
              return !1;
            t = t.buffer, n = n.buffer;
          case kt:
            return !(t.byteLength != n.byteLength || !a(new dr(t), new dr(n)));
          case w:
          case _:
          case S:
            return Pn(+t, +n);
          case g:
            return t.name == n.name && t.message == n.message;
          case Z:
          case lt:
            return t == n + "";
          case y:
            var v = ci;
          case K:
            var x = r & pt;
            if (v || (v = sr), t.size != n.size && !x)
              return !1;
            var E = c.get(t);
            if (E)
              return E == n;
            r |= bt, c.set(t, n);
            var D = Uu(v(t), v(n), r, i, a, c);
            return c.delete(t), D;
          case X:
            if (Ke)
              return Ke.call(t) == Ke.call(n);
        }
        return !1;
      }
      function Pl(t, n, e, r, i, a) {
        var c = e & pt, v = Fi(t), x = v.length, E = Fi(n), D = E.length;
        if (x != D && !c)
          return !1;
        for (var F = x; F--; ) {
          var z = v[F];
          if (!(c ? z in n : mt.call(n, z)))
            return !1;
        }
        var Y = a.get(t), j = a.get(n);
        if (Y && j)
          return Y == n && j == t;
        var at = !0;
        a.set(t, n), a.set(n, t);
        for (var tt = c; ++F < x; ) {
          z = v[F];
          var ft = t[z], dt = n[z];
          if (r)
            var wn = c ? r(dt, ft, z, n, t, a) : r(ft, dt, z, t, n, a);
          if (!(wn === s ? ft === dt || i(ft, dt, e, r, a) : wn)) {
            at = !1;
            break;
          }
          tt || (tt = z == "constructor");
        }
        if (at && !tt) {
          var un = t.constructor, yn = n.constructor;
          un != yn && "constructor" in t && "constructor" in n && !(typeof un == "function" && un instanceof un && typeof yn == "function" && yn instanceof yn) && (at = !1);
        }
        return a.delete(t), a.delete(n), at;
      }
      function Zn(t) {
        return Hi(Yu(t, s, ea), t + "");
      }
      function Fi(t) {
        return au(t, Xt, zi);
      }
      function Ni(t) {
        return au(t, ln, ku);
      }
      var Wi = mr ? function(t) {
        return mr.get(t);
      } : ro;
      function Pr(t) {
        for (var n = t.name + "", e = Re[n], r = mt.call(Re, n) ? e.length : 0; r--; ) {
          var i = e[r], a = i.func;
          if (a == null || a == t)
            return i.name;
        }
        return n;
      }
      function Te(t) {
        var n = mt.call(u, "placeholder") ? u : t;
        return n.placeholder;
      }
      function V() {
        var t = u.iteratee || no;
        return t = t === no ? lu : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function Br(t, n) {
        var e = t.__data__;
        return kl(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
      }
      function qi(t) {
        for (var n = Xt(t), e = n.length; e--; ) {
          var r = n[e], i = t[r];
          n[e] = [r, i, $u(i)];
        }
        return n;
      }
      function pe(t, n) {
        var e = Hs(t, n);
        return fu(e) ? e : s;
      }
      function Bl(t) {
        var n = mt.call(t, le), e = t[le];
        try {
          t[le] = s;
          var r = !0;
        } catch (a) {
        }
        var i = hr.call(t);
        return r && (n ? t[le] = e : delete t[le]), i;
      }
      var zi = gi ? function(t) {
        return t == null ? [] : (t = At(t), jn(gi(t), function(n) {
          return Zo.call(t, n);
        }));
      } : io, ku = gi ? function(t) {
        for (var n = []; t; )
          te(n, zi(t)), t = pr(t);
        return n;
      } : io, nn = rn;
      (di && nn(new di(new ArrayBuffer(1))) != wt || Ge && nn(new Ge()) != y || pi && nn(pi.resolve()) != R || Ie && nn(new Ie()) != K || He && nn(new He()) != J) && (nn = function(t) {
        var n = rn(t), e = n == W ? t.constructor : s, r = e ? ve(e) : "";
        if (r)
          switch (r) {
            case _f:
              return wt;
            case wf:
              return y;
            case yf:
              return R;
            case mf:
              return K;
            case xf:
              return J;
          }
        return n;
      });
      function Fl(t, n, e) {
        for (var r = -1, i = e.length; ++r < i; ) {
          var a = e[r], c = a.size;
          switch (a.type) {
            case "drop":
              t += c;
              break;
            case "dropRight":
              n -= c;
              break;
            case "take":
              n = tn(n, t + c);
              break;
            case "takeRight":
              t = Kt(t, n - c);
              break;
          }
        }
        return { start: t, end: n };
      }
      function Nl(t) {
        var n = t.match(ka);
        return n ? n[1].split(Ga) : [];
      }
      function Gu(t, n, e) {
        n = oe(n, t);
        for (var r = -1, i = n.length, a = !1; ++r < i; ) {
          var c = qn(n[r]);
          if (!(a = t != null && e(t, c)))
            break;
          t = t[c];
        }
        return a || ++r != i ? a : (i = t == null ? 0 : t.length, !!i && kr(i) && Xn(c, i) && (ot(t) || _e(t)));
      }
      function Wl(t) {
        var n = t.length, e = new t.constructor(n);
        return n && typeof t[0] == "string" && mt.call(t, "index") && (e.index = t.index, e.input = t.input), e;
      }
      function Hu(t) {
        return typeof t.constructor == "function" && !je(t) ? Ee(pr(t)) : {};
      }
      function ql(t, n, e) {
        var r = t.constructor;
        switch (n) {
          case kt:
            return Ti(t);
          case w:
          case _:
            return new r(+t);
          case wt:
            return bl(t, e);
          case rt:
          case Ct:
          case vt:
          case Ot:
          case Dt:
          case Ft:
          case Ht:
          case Dn:
          case Ne:
            return Ou(t, e);
          case y:
            return new r();
          case S:
          case lt:
            return new r(t);
          case Z:
            return Sl(t);
          case K:
            return new r();
          case X:
            return Cl(t);
        }
      }
      function zl(t, n) {
        var e = n.length;
        if (!e)
          return t;
        var r = e - 1;
        return n[r] = (e > 1 ? "& " : "") + n[r], n = n.join(e > 2 ? ", " : " "), t.replace(Ua, `{
/* [wrapped with ` + n + `] */
`);
      }
      function Ul(t) {
        return ot(t) || _e(t) || !!(Xo && t && t[Xo]);
      }
      function Xn(t, n) {
        var e = typeof t;
        return n = n == null ? P : n, !!n && (e == "number" || e != "symbol" && Va.test(t)) && t > -1 && t % 1 == 0 && t < n;
      }
      function on(t, n, e) {
        if (!Lt(e))
          return !1;
        var r = typeof n;
        return (r == "number" ? fn(e) && Xn(n, e.length) : r == "string" && n in e) ? Pn(e[n], t) : !1;
      }
      function Ui(t, n) {
        if (ot(t))
          return !1;
        var e = typeof t;
        return e == "number" || e == "symbol" || e == "boolean" || t == null || _n(t) ? !0 : Na.test(t) || !Fa.test(t) || n != null && t in At(n);
      }
      function kl(t) {
        var n = typeof t;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
      }
      function ki(t) {
        var n = Pr(t), e = u[n];
        if (typeof e != "function" || !(n in ct.prototype))
          return !1;
        if (t === e)
          return !0;
        var r = Wi(e);
        return !!r && t === r[0];
      }
      function Gl(t) {
        return !!$o && $o in t;
      }
      var Hl = lr ? Qn : oo;
      function je(t) {
        var n = t && t.constructor, e = typeof n == "function" && n.prototype || Me;
        return t === e;
      }
      function $u(t) {
        return t === t && !Lt(t);
      }
      function Ku(t, n) {
        return function(e) {
          return e == null ? !1 : e[t] === n && (n !== s || t in At(e));
        };
      }
      function $l(t) {
        var n = zr(t, function(r) {
          return e.size === we && e.clear(), r;
        }), e = n.cache;
        return n;
      }
      function Kl(t, n) {
        var e = t[1], r = n[1], i = e | r, a = i < (Pt | Rt | an), c = r == an && e == Bt || r == an && e == en && t[7].length <= n[8] || r == (an | en) && n[7].length <= n[8] && e == Bt;
        if (!(a || c))
          return t;
        r & Pt && (t[2] = n[2], i |= e & Pt ? 0 : hn);
        var v = n[3];
        if (v) {
          var x = t[3];
          t[3] = x ? Iu(x, v, n[4]) : v, t[4] = x ? ne(t[3], Yt) : n[4];
        }
        return v = n[5], v && (x = t[5], t[5] = x ? Ru(x, v, n[6]) : v, t[6] = x ? ne(t[5], Yt) : n[6]), v = n[7], v && (t[7] = v), r & an && (t[8] = t[8] == null ? n[8] : tn(t[8], n[8])), t[9] == null && (t[9] = n[9]), t[0] = n[0], t[1] = i, t;
      }
      function Yl(t) {
        var n = [];
        if (t != null)
          for (var e in At(t))
            n.push(e);
        return n;
      }
      function Zl(t) {
        return hr.call(t);
      }
      function Yu(t, n, e) {
        return n = Kt(n === s ? t.length - 1 : n, 0), function() {
          for (var r = arguments, i = -1, a = Kt(r.length - n, 0), c = C(a); ++i < a; )
            c[i] = r[n + i];
          i = -1;
          for (var v = C(n + 1); ++i < n; )
            v[i] = r[i];
          return v[n] = e(c), dn(t, this, v);
        };
      }
      function Zu(t, n) {
        return n.length < 2 ? t : de(t, On(n, 0, -1));
      }
      function Xl(t, n) {
        for (var e = t.length, r = tn(n.length, e), i = sn(t); r--; ) {
          var a = n[r];
          t[r] = Xn(a, e) ? i[a] : s;
        }
        return t;
      }
      function Gi(t, n) {
        if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
          return t[n];
      }
      var Xu = Ju(wu), tr = lf || function(t, n) {
        return Jt.setTimeout(t, n);
      }, Hi = Ju(wl);
      function Qu(t, n, e) {
        var r = n + "";
        return Hi(t, zl(r, Ql(Nl(r), e)));
      }
      function Ju(t) {
        var n = 0, e = 0;
        return function() {
          var r = df(), i = B - (r - e);
          if (e = r, i > 0) {
            if (++n >= me)
              return arguments[0];
          } else
            n = 0;
          return t.apply(s, arguments);
        };
      }
      function Fr(t, n) {
        var e = -1, r = t.length, i = r - 1;
        for (n = n === s ? r : n; ++e < n; ) {
          var a = Oi(e, i), c = t[a];
          t[a] = t[e], t[e] = c;
        }
        return t.length = n, t;
      }
      var Vu = $l(function(t) {
        var n = [];
        return t.charCodeAt(0) === 46 && n.push(""), t.replace(Wa, function(e, r, i, a) {
          n.push(i ? a.replace(Ka, "$1") : r || e);
        }), n;
      });
      function qn(t) {
        if (typeof t == "string" || _n(t))
          return t;
        var n = t + "";
        return n == "0" && 1 / t == -b ? "-0" : n;
      }
      function ve(t) {
        if (t != null) {
          try {
            return cr.call(t);
          } catch (n) {
          }
          try {
            return t + "";
          } catch (n) {
          }
        }
        return "";
      }
      function Ql(t, n) {
        return bn(o, function(e) {
          var r = "_." + e[0];
          n & e[1] && !ur(t, r) && t.push(r);
        }), t.sort();
      }
      function ju(t) {
        if (t instanceof ct)
          return t.clone();
        var n = new Cn(t.__wrapped__, t.__chain__);
        return n.__actions__ = sn(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n;
      }
      function Jl(t, n, e) {
        (e ? on(t, n, e) : n === s) ? n = 1 : n = Kt(ut(n), 0);
        var r = t == null ? 0 : t.length;
        if (!r || n < 1)
          return [];
        for (var i = 0, a = 0, c = C(wr(r / n)); i < r; )
          c[a++] = On(t, i, i += n);
        return c;
      }
      function Vl(t) {
        for (var n = -1, e = t == null ? 0 : t.length, r = 0, i = []; ++n < e; ) {
          var a = t[n];
          a && (i[r++] = a);
        }
        return i;
      }
      function jl() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var n = C(t - 1), e = arguments[0], r = t; r--; )
          n[r - 1] = arguments[r];
        return te(ot(e) ? sn(e) : [e], Vt(n, 1));
      }
      var tc = st(function(t, n) {
        return qt(t) ? Ze(t, Vt(n, 1, qt, !0)) : [];
      }), nc = st(function(t, n) {
        var e = Mn(n);
        return qt(e) && (e = s), qt(t) ? Ze(t, Vt(n, 1, qt, !0), V(e, 2)) : [];
      }), ec = st(function(t, n) {
        var e = Mn(n);
        return qt(e) && (e = s), qt(t) ? Ze(t, Vt(n, 1, qt, !0), s, e) : [];
      });
      function rc(t, n, e) {
        var r = t == null ? 0 : t.length;
        return r ? (n = e || n === s ? 1 : ut(n), On(t, n < 0 ? 0 : n, r)) : [];
      }
      function ic(t, n, e) {
        var r = t == null ? 0 : t.length;
        return r ? (n = e || n === s ? 1 : ut(n), n = r - n, On(t, 0, n < 0 ? 0 : n)) : [];
      }
      function oc(t, n) {
        return t && t.length ? Ir(t, V(n, 3), !0, !0) : [];
      }
      function uc(t, n) {
        return t && t.length ? Ir(t, V(n, 3), !0) : [];
      }
      function ac(t, n, e, r) {
        var i = t == null ? 0 : t.length;
        return i ? (e && typeof e != "number" && on(t, n, e) && (e = 0, r = i), jf(t, n, e, r)) : [];
      }
      function ta(t, n, e) {
        var r = t == null ? 0 : t.length;
        if (!r)
          return -1;
        var i = e == null ? 0 : ut(e);
        return i < 0 && (i = Kt(r + i, 0)), ar(t, V(n, 3), i);
      }
      function na(t, n, e) {
        var r = t == null ? 0 : t.length;
        if (!r)
          return -1;
        var i = r - 1;
        return e !== s && (i = ut(e), i = e < 0 ? Kt(r + i, 0) : tn(i, r - 1)), ar(t, V(n, 3), i, !0);
      }
      function ea(t) {
        var n = t == null ? 0 : t.length;
        return n ? Vt(t, 1) : [];
      }
      function sc(t) {
        var n = t == null ? 0 : t.length;
        return n ? Vt(t, b) : [];
      }
      function fc(t, n) {
        var e = t == null ? 0 : t.length;
        return e ? (n = n === s ? 1 : ut(n), Vt(t, n)) : [];
      }
      function lc(t) {
        for (var n = -1, e = t == null ? 0 : t.length, r = {}; ++n < e; ) {
          var i = t[n];
          r[i[0]] = i[1];
        }
        return r;
      }
      function ra(t) {
        return t && t.length ? t[0] : s;
      }
      function cc(t, n, e) {
        var r = t == null ? 0 : t.length;
        if (!r)
          return -1;
        var i = e == null ? 0 : ut(e);
        return i < 0 && (i = Kt(r + i, 0)), Se(t, n, i);
      }
      function hc(t) {
        var n = t == null ? 0 : t.length;
        return n ? On(t, 0, -1) : [];
      }
      var gc = st(function(t) {
        var n = Et(t, Di);
        return n.length && n[0] === t[0] ? xi(n) : [];
      }), dc = st(function(t) {
        var n = Mn(t), e = Et(t, Di);
        return n === Mn(e) ? n = s : e.pop(), e.length && e[0] === t[0] ? xi(e, V(n, 2)) : [];
      }), pc = st(function(t) {
        var n = Mn(t), e = Et(t, Di);
        return n = typeof n == "function" ? n : s, n && e.pop(), e.length && e[0] === t[0] ? xi(e, s, n) : [];
      });
      function vc(t, n) {
        return t == null ? "" : hf.call(t, n);
      }
      function Mn(t) {
        var n = t == null ? 0 : t.length;
        return n ? t[n - 1] : s;
      }
      function _c(t, n, e) {
        var r = t == null ? 0 : t.length;
        if (!r)
          return -1;
        var i = r;
        return e !== s && (i = ut(e), i = i < 0 ? Kt(r + i, 0) : tn(i, r - 1)), n === n ? Xs(t, n, i) : ar(t, No, i, !0);
      }
      function wc(t, n) {
        return t && t.length ? du(t, ut(n)) : s;
      }
      var yc = st(ia);
      function ia(t, n) {
        return t && t.length && n && n.length ? Ai(t, n) : t;
      }
      function mc(t, n, e) {
        return t && t.length && n && n.length ? Ai(t, n, V(e, 2)) : t;
      }
      function xc(t, n, e) {
        return t && t.length && n && n.length ? Ai(t, n, s, e) : t;
      }
      var bc = Zn(function(t, n) {
        var e = t == null ? 0 : t.length, r = _i(t, n);
        return _u(t, Et(n, function(i) {
          return Xn(i, e) ? +i : i;
        }).sort(Mu)), r;
      });
      function Sc(t, n) {
        var e = [];
        if (!(t && t.length))
          return e;
        var r = -1, i = [], a = t.length;
        for (n = V(n, 3); ++r < a; ) {
          var c = t[r];
          n(c, r, t) && (e.push(c), i.push(r));
        }
        return _u(t, i), e;
      }
      function $i(t) {
        return t == null ? t : vf.call(t);
      }
      function Cc(t, n, e) {
        var r = t == null ? 0 : t.length;
        return r ? (e && typeof e != "number" && on(t, n, e) ? (n = 0, e = r) : (n = n == null ? 0 : ut(n), e = e === s ? r : ut(e)), On(t, n, e)) : [];
      }
      function Ac(t, n) {
        return Mr(t, n);
      }
      function Oc(t, n, e) {
        return Ii(t, n, V(e, 2));
      }
      function Mc(t, n) {
        var e = t == null ? 0 : t.length;
        if (e) {
          var r = Mr(t, n);
          if (r < e && Pn(t[r], n))
            return r;
        }
        return -1;
      }
      function Ic(t, n) {
        return Mr(t, n, !0);
      }
      function Rc(t, n, e) {
        return Ii(t, n, V(e, 2), !0);
      }
      function Ec(t, n) {
        var e = t == null ? 0 : t.length;
        if (e) {
          var r = Mr(t, n, !0) - 1;
          if (Pn(t[r], n))
            return r;
        }
        return -1;
      }
      function Dc(t) {
        return t && t.length ? yu(t) : [];
      }
      function Lc(t, n) {
        return t && t.length ? yu(t, V(n, 2)) : [];
      }
      function Tc(t) {
        var n = t == null ? 0 : t.length;
        return n ? On(t, 1, n) : [];
      }
      function Pc(t, n, e) {
        return t && t.length ? (n = e || n === s ? 1 : ut(n), On(t, 0, n < 0 ? 0 : n)) : [];
      }
      function Bc(t, n, e) {
        var r = t == null ? 0 : t.length;
        return r ? (n = e || n === s ? 1 : ut(n), n = r - n, On(t, n < 0 ? 0 : n, r)) : [];
      }
      function Fc(t, n) {
        return t && t.length ? Ir(t, V(n, 3), !1, !0) : [];
      }
      function Nc(t, n) {
        return t && t.length ? Ir(t, V(n, 3)) : [];
      }
      var Wc = st(function(t) {
        return ie(Vt(t, 1, qt, !0));
      }), qc = st(function(t) {
        var n = Mn(t);
        return qt(n) && (n = s), ie(Vt(t, 1, qt, !0), V(n, 2));
      }), zc = st(function(t) {
        var n = Mn(t);
        return n = typeof n == "function" ? n : s, ie(Vt(t, 1, qt, !0), s, n);
      });
      function Uc(t) {
        return t && t.length ? ie(t) : [];
      }
      function kc(t, n) {
        return t && t.length ? ie(t, V(n, 2)) : [];
      }
      function Gc(t, n) {
        return n = typeof n == "function" ? n : s, t && t.length ? ie(t, s, n) : [];
      }
      function Ki(t) {
        if (!(t && t.length))
          return [];
        var n = 0;
        return t = jn(t, function(e) {
          if (qt(e))
            return n = Kt(e.length, n), !0;
        }), fi(n, function(e) {
          return Et(t, ui(e));
        });
      }
      function oa(t, n) {
        if (!(t && t.length))
          return [];
        var e = Ki(t);
        return n == null ? e : Et(e, function(r) {
          return dn(n, s, r);
        });
      }
      var Hc = st(function(t, n) {
        return qt(t) ? Ze(t, n) : [];
      }), $c = st(function(t) {
        return Ei(jn(t, qt));
      }), Kc = st(function(t) {
        var n = Mn(t);
        return qt(n) && (n = s), Ei(jn(t, qt), V(n, 2));
      }), Yc = st(function(t) {
        var n = Mn(t);
        return n = typeof n == "function" ? n : s, Ei(jn(t, qt), s, n);
      }), Zc = st(Ki);
      function Xc(t, n) {
        return Su(t || [], n || [], Ye);
      }
      function Qc(t, n) {
        return Su(t || [], n || [], Je);
      }
      var Jc = st(function(t) {
        var n = t.length, e = n > 1 ? t[n - 1] : s;
        return e = typeof e == "function" ? (t.pop(), e) : s, oa(t, e);
      });
      function ua(t) {
        var n = u(t);
        return n.__chain__ = !0, n;
      }
      function Vc(t, n) {
        return n(t), t;
      }
      function Nr(t, n) {
        return n(t);
      }
      var jc = Zn(function(t) {
        var n = t.length, e = n ? t[0] : 0, r = this.__wrapped__, i = function(a) {
          return _i(a, t);
        };
        return n > 1 || this.__actions__.length || !(r instanceof ct) || !Xn(e) ? this.thru(i) : (r = r.slice(e, +e + (n ? 1 : 0)), r.__actions__.push({
          func: Nr,
          args: [i],
          thisArg: s
        }), new Cn(r, this.__chain__).thru(function(a) {
          return n && !a.length && a.push(s), a;
        }));
      });
      function th() {
        return ua(this);
      }
      function nh() {
        return new Cn(this.value(), this.__chain__);
      }
      function eh() {
        this.__values__ === s && (this.__values__ = ma(this.value()));
        var t = this.__index__ >= this.__values__.length, n = t ? s : this.__values__[this.__index__++];
        return { done: t, value: n };
      }
      function rh() {
        return this;
      }
      function ih(t) {
        for (var n, e = this; e instanceof br; ) {
          var r = ju(e);
          r.__index__ = 0, r.__values__ = s, n ? i.__wrapped__ = r : n = r;
          var i = r;
          e = e.__wrapped__;
        }
        return i.__wrapped__ = t, n;
      }
      function oh() {
        var t = this.__wrapped__;
        if (t instanceof ct) {
          var n = t;
          return this.__actions__.length && (n = new ct(this)), n = n.reverse(), n.__actions__.push({
            func: Nr,
            args: [$i],
            thisArg: s
          }), new Cn(n, this.__chain__);
        }
        return this.thru($i);
      }
      function uh() {
        return bu(this.__wrapped__, this.__actions__);
      }
      var ah = Rr(function(t, n, e) {
        mt.call(t, e) ? ++t[e] : Kn(t, e, 1);
      });
      function sh(t, n, e) {
        var r = ot(t) ? Bo : Vf;
        return e && on(t, n, e) && (n = s), r(t, V(n, 3));
      }
      function fh(t, n) {
        var e = ot(t) ? jn : ou;
        return e(t, V(n, 3));
      }
      var lh = Tu(ta), ch = Tu(na);
      function hh(t, n) {
        return Vt(Wr(t, n), 1);
      }
      function gh(t, n) {
        return Vt(Wr(t, n), b);
      }
      function dh(t, n, e) {
        return e = e === s ? 1 : ut(e), Vt(Wr(t, n), e);
      }
      function aa(t, n) {
        var e = ot(t) ? bn : re;
        return e(t, V(n, 3));
      }
      function sa(t, n) {
        var e = ot(t) ? Ls : iu;
        return e(t, V(n, 3));
      }
      var ph = Rr(function(t, n, e) {
        mt.call(t, e) ? t[e].push(n) : Kn(t, e, [n]);
      });
      function vh(t, n, e, r) {
        t = fn(t) ? t : Be(t), e = e && !r ? ut(e) : 0;
        var i = t.length;
        return e < 0 && (e = Kt(i + e, 0)), Gr(t) ? e <= i && t.indexOf(n, e) > -1 : !!i && Se(t, n, e) > -1;
      }
      var _h = st(function(t, n, e) {
        var r = -1, i = typeof n == "function", a = fn(t) ? C(t.length) : [];
        return re(t, function(c) {
          a[++r] = i ? dn(n, c, e) : Xe(c, n, e);
        }), a;
      }), wh = Rr(function(t, n, e) {
        Kn(t, e, n);
      });
      function Wr(t, n) {
        var e = ot(t) ? Et : cu;
        return e(t, V(n, 3));
      }
      function yh(t, n, e, r) {
        return t == null ? [] : (ot(n) || (n = n == null ? [] : [n]), e = r ? s : e, ot(e) || (e = e == null ? [] : [e]), pu(t, n, e));
      }
      var mh = Rr(function(t, n, e) {
        t[e ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function xh(t, n, e) {
        var r = ot(t) ? ii : qo, i = arguments.length < 3;
        return r(t, V(n, 4), e, i, re);
      }
      function bh(t, n, e) {
        var r = ot(t) ? Ts : qo, i = arguments.length < 3;
        return r(t, V(n, 4), e, i, iu);
      }
      function Sh(t, n) {
        var e = ot(t) ? jn : ou;
        return e(t, Ur(V(n, 3)));
      }
      function Ch(t) {
        var n = ot(t) ? tu : vl;
        return n(t);
      }
      function Ah(t, n, e) {
        (e ? on(t, n, e) : n === s) ? n = 1 : n = ut(n);
        var r = ot(t) ? Yf : _l;
        return r(t, n);
      }
      function Oh(t) {
        var n = ot(t) ? Zf : yl;
        return n(t);
      }
      function Mh(t) {
        if (t == null)
          return 0;
        if (fn(t))
          return Gr(t) ? Ae(t) : t.length;
        var n = nn(t);
        return n == y || n == K ? t.size : Si(t).length;
      }
      function Ih(t, n, e) {
        var r = ot(t) ? oi : ml;
        return e && on(t, n, e) && (n = s), r(t, V(n, 3));
      }
      var Rh = st(function(t, n) {
        if (t == null)
          return [];
        var e = n.length;
        return e > 1 && on(t, n[0], n[1]) ? n = [] : e > 2 && on(n[0], n[1], n[2]) && (n = [n[0]]), pu(t, Vt(n, 1), []);
      }), qr = ff || function() {
        return Jt.Date.now();
      };
      function Eh(t, n) {
        if (typeof n != "function")
          throw new Sn(gt);
        return t = ut(t), function() {
          if (--t < 1)
            return n.apply(this, arguments);
        };
      }
      function fa(t, n, e) {
        return n = e ? s : n, n = t && n == null ? t.length : n, Yn(t, an, s, s, s, s, n);
      }
      function la(t, n) {
        var e;
        if (typeof n != "function")
          throw new Sn(gt);
        return t = ut(t), function() {
          return --t > 0 && (e = n.apply(this, arguments)), t <= 1 && (n = s), e;
        };
      }
      var Yi = st(function(t, n, e) {
        var r = Pt;
        if (e.length) {
          var i = ne(e, Te(Yi));
          r |= Zt;
        }
        return Yn(t, r, n, e, i);
      }), ca = st(function(t, n, e) {
        var r = Pt | Rt;
        if (e.length) {
          var i = ne(e, Te(ca));
          r |= Zt;
        }
        return Yn(n, r, t, e, i);
      });
      function ha(t, n, e) {
        n = e ? s : n;
        var r = Yn(t, Bt, s, s, s, s, s, n);
        return r.placeholder = ha.placeholder, r;
      }
      function ga(t, n, e) {
        n = e ? s : n;
        var r = Yn(t, Rn, s, s, s, s, s, n);
        return r.placeholder = ga.placeholder, r;
      }
      function da(t, n, e) {
        var r, i, a, c, v, x, E = 0, D = !1, F = !1, z = !0;
        if (typeof t != "function")
          throw new Sn(gt);
        n = In(n) || 0, Lt(e) && (D = !!e.leading, F = "maxWait" in e, a = F ? Kt(In(e.maxWait) || 0, n) : a, z = "trailing" in e ? !!e.trailing : z);
        function Y(zt) {
          var Bn = r, Vn = i;
          return r = i = s, E = zt, c = t.apply(Vn, Bn), c;
        }
        function j(zt) {
          return E = zt, v = tr(ft, n), D ? Y(zt) : c;
        }
        function at(zt) {
          var Bn = zt - x, Vn = zt - E, Ta = n - Bn;
          return F ? tn(Ta, a - Vn) : Ta;
        }
        function tt(zt) {
          var Bn = zt - x, Vn = zt - E;
          return x === s || Bn >= n || Bn < 0 || F && Vn >= a;
        }
        function ft() {
          var zt = qr();
          if (tt(zt))
            return dt(zt);
          v = tr(ft, at(zt));
        }
        function dt(zt) {
          return v = s, z && r ? Y(zt) : (r = i = s, c);
        }
        function wn() {
          v !== s && Cu(v), E = 0, r = x = i = v = s;
        }
        function un() {
          return v === s ? c : dt(qr());
        }
        function yn() {
          var zt = qr(), Bn = tt(zt);
          if (r = arguments, i = this, x = zt, Bn) {
            if (v === s)
              return j(x);
            if (F)
              return Cu(v), v = tr(ft, n), Y(x);
          }
          return v === s && (v = tr(ft, n)), c;
        }
        return yn.cancel = wn, yn.flush = un, yn;
      }
      var Dh = st(function(t, n) {
        return ru(t, 1, n);
      }), Lh = st(function(t, n, e) {
        return ru(t, In(n) || 0, e);
      });
      function Th(t) {
        return Yn(t, gn);
      }
      function zr(t, n) {
        if (typeof t != "function" || n != null && typeof n != "function")
          throw new Sn(gt);
        var e = function() {
          var r = arguments, i = n ? n.apply(this, r) : r[0], a = e.cache;
          if (a.has(i))
            return a.get(i);
          var c = t.apply(this, r);
          return e.cache = a.set(i, c) || a, c;
        };
        return e.cache = new (zr.Cache || $n)(), e;
      }
      zr.Cache = $n;
      function Ur(t) {
        if (typeof t != "function")
          throw new Sn(gt);
        return function() {
          var n = arguments;
          switch (n.length) {
            case 0:
              return !t.call(this);
            case 1:
              return !t.call(this, n[0]);
            case 2:
              return !t.call(this, n[0], n[1]);
            case 3:
              return !t.call(this, n[0], n[1], n[2]);
          }
          return !t.apply(this, n);
        };
      }
      function Ph(t) {
        return la(2, t);
      }
      var Bh = xl(function(t, n) {
        n = n.length == 1 && ot(n[0]) ? Et(n[0], pn(V())) : Et(Vt(n, 1), pn(V()));
        var e = n.length;
        return st(function(r) {
          for (var i = -1, a = tn(r.length, e); ++i < a; )
            r[i] = n[i].call(this, r[i]);
          return dn(t, this, r);
        });
      }), Zi = st(function(t, n) {
        var e = ne(n, Te(Zi));
        return Yn(t, Zt, s, n, e);
      }), pa = st(function(t, n) {
        var e = ne(n, Te(pa));
        return Yn(t, En, s, n, e);
      }), Fh = Zn(function(t, n) {
        return Yn(t, en, s, s, s, n);
      });
      function Nh(t, n) {
        if (typeof t != "function")
          throw new Sn(gt);
        return n = n === s ? n : ut(n), st(t, n);
      }
      function Wh(t, n) {
        if (typeof t != "function")
          throw new Sn(gt);
        return n = n == null ? 0 : Kt(ut(n), 0), st(function(e) {
          var r = e[n], i = ue(e, 0, n);
          return r && te(i, r), dn(t, this, i);
        });
      }
      function qh(t, n, e) {
        var r = !0, i = !0;
        if (typeof t != "function")
          throw new Sn(gt);
        return Lt(e) && (r = "leading" in e ? !!e.leading : r, i = "trailing" in e ? !!e.trailing : i), da(t, n, {
          leading: r,
          maxWait: n,
          trailing: i
        });
      }
      function zh(t) {
        return fa(t, 1);
      }
      function Uh(t, n) {
        return Zi(Li(n), t);
      }
      function kh() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return ot(t) ? t : [t];
      }
      function Gh(t) {
        return An(t, Gt);
      }
      function Hh(t, n) {
        return n = typeof n == "function" ? n : s, An(t, Gt, n);
      }
      function $h(t) {
        return An(t, Ut | Gt);
      }
      function Kh(t, n) {
        return n = typeof n == "function" ? n : s, An(t, Ut | Gt, n);
      }
      function Yh(t, n) {
        return n == null || eu(t, n, Xt(n));
      }
      function Pn(t, n) {
        return t === n || t !== t && n !== n;
      }
      var Zh = Tr(mi), Xh = Tr(function(t, n) {
        return t >= n;
      }), _e = su(/* @__PURE__ */ function() {
        return arguments;
      }()) ? su : function(t) {
        return Nt(t) && mt.call(t, "callee") && !Zo.call(t, "callee");
      }, ot = C.isArray, Qh = Ro ? pn(Ro) : il;
      function fn(t) {
        return t != null && kr(t.length) && !Qn(t);
      }
      function qt(t) {
        return Nt(t) && fn(t);
      }
      function Jh(t) {
        return t === !0 || t === !1 || Nt(t) && rn(t) == w;
      }
      var ae = cf || oo, Vh = Eo ? pn(Eo) : ol;
      function jh(t) {
        return Nt(t) && t.nodeType === 1 && !nr(t);
      }
      function t0(t) {
        if (t == null)
          return !0;
        if (fn(t) && (ot(t) || typeof t == "string" || typeof t.splice == "function" || ae(t) || Pe(t) || _e(t)))
          return !t.length;
        var n = nn(t);
        if (n == y || n == K)
          return !t.size;
        if (je(t))
          return !Si(t).length;
        for (var e in t)
          if (mt.call(t, e))
            return !1;
        return !0;
      }
      function n0(t, n) {
        return Qe(t, n);
      }
      function e0(t, n, e) {
        e = typeof e == "function" ? e : s;
        var r = e ? e(t, n) : s;
        return r === s ? Qe(t, n, s, e) : !!r;
      }
      function Xi(t) {
        if (!Nt(t))
          return !1;
        var n = rn(t);
        return n == g || n == O || typeof t.message == "string" && typeof t.name == "string" && !nr(t);
      }
      function r0(t) {
        return typeof t == "number" && Qo(t);
      }
      function Qn(t) {
        if (!Lt(t))
          return !1;
        var n = rn(t);
        return n == d || n == h || n == p || n == $;
      }
      function va(t) {
        return typeof t == "number" && t == ut(t);
      }
      function kr(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= P;
      }
      function Lt(t) {
        var n = typeof t;
        return t != null && (n == "object" || n == "function");
      }
      function Nt(t) {
        return t != null && typeof t == "object";
      }
      var _a = Do ? pn(Do) : al;
      function i0(t, n) {
        return t === n || bi(t, n, qi(n));
      }
      function o0(t, n, e) {
        return e = typeof e == "function" ? e : s, bi(t, n, qi(n), e);
      }
      function u0(t) {
        return wa(t) && t != +t;
      }
      function a0(t) {
        if (Hl(t))
          throw new it(St);
        return fu(t);
      }
      function s0(t) {
        return t === null;
      }
      function f0(t) {
        return t == null;
      }
      function wa(t) {
        return typeof t == "number" || Nt(t) && rn(t) == S;
      }
      function nr(t) {
        if (!Nt(t) || rn(t) != W)
          return !1;
        var n = pr(t);
        if (n === null)
          return !0;
        var e = mt.call(n, "constructor") && n.constructor;
        return typeof e == "function" && e instanceof e && cr.call(e) == of;
      }
      var Qi = Lo ? pn(Lo) : sl;
      function l0(t) {
        return va(t) && t >= -P && t <= P;
      }
      var ya = To ? pn(To) : fl;
      function Gr(t) {
        return typeof t == "string" || !ot(t) && Nt(t) && rn(t) == lt;
      }
      function _n(t) {
        return typeof t == "symbol" || Nt(t) && rn(t) == X;
      }
      var Pe = Po ? pn(Po) : ll;
      function c0(t) {
        return t === s;
      }
      function h0(t) {
        return Nt(t) && nn(t) == J;
      }
      function g0(t) {
        return Nt(t) && rn(t) == et;
      }
      var d0 = Tr(Ci), p0 = Tr(function(t, n) {
        return t <= n;
      });
      function ma(t) {
        if (!t)
          return [];
        if (fn(t))
          return Gr(t) ? Ln(t) : sn(t);
        if (ke && t[ke])
          return Ks(t[ke]());
        var n = nn(t), e = n == y ? ci : n == K ? sr : Be;
        return e(t);
      }
      function Jn(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = In(t), t === b || t === -b) {
          var n = t < 0 ? -1 : 1;
          return n * k;
        }
        return t === t ? t : 0;
      }
      function ut(t) {
        var n = Jn(t), e = n % 1;
        return n === n ? e ? n - e : n : 0;
      }
      function xa(t) {
        return t ? ge(ut(t), 0, U) : 0;
      }
      function In(t) {
        if (typeof t == "number")
          return t;
        if (_n(t))
          return q;
        if (Lt(t)) {
          var n = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = Lt(n) ? n + "" : n;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = zo(t);
        var e = Xa.test(t);
        return e || Ja.test(t) ? Rs(t.slice(2), e ? 2 : 8) : Za.test(t) ? q : +t;
      }
      function ba(t) {
        return Wn(t, ln(t));
      }
      function v0(t) {
        return t ? ge(ut(t), -P, P) : t === 0 ? t : 0;
      }
      function yt(t) {
        return t == null ? "" : vn(t);
      }
      var _0 = De(function(t, n) {
        if (je(n) || fn(n)) {
          Wn(n, Xt(n), t);
          return;
        }
        for (var e in n)
          mt.call(n, e) && Ye(t, e, n[e]);
      }), Sa = De(function(t, n) {
        Wn(n, ln(n), t);
      }), Hr = De(function(t, n, e, r) {
        Wn(n, ln(n), t, r);
      }), w0 = De(function(t, n, e, r) {
        Wn(n, Xt(n), t, r);
      }), y0 = Zn(_i);
      function m0(t, n) {
        var e = Ee(t);
        return n == null ? e : nu(e, n);
      }
      var x0 = st(function(t, n) {
        t = At(t);
        var e = -1, r = n.length, i = r > 2 ? n[2] : s;
        for (i && on(n[0], n[1], i) && (r = 1); ++e < r; )
          for (var a = n[e], c = ln(a), v = -1, x = c.length; ++v < x; ) {
            var E = c[v], D = t[E];
            (D === s || Pn(D, Me[E]) && !mt.call(t, E)) && (t[E] = a[E]);
          }
        return t;
      }), b0 = st(function(t) {
        return t.push(s, zu), dn(Ca, s, t);
      });
      function S0(t, n) {
        return Fo(t, V(n, 3), Nn);
      }
      function C0(t, n) {
        return Fo(t, V(n, 3), yi);
      }
      function A0(t, n) {
        return t == null ? t : wi(t, V(n, 3), ln);
      }
      function O0(t, n) {
        return t == null ? t : uu(t, V(n, 3), ln);
      }
      function M0(t, n) {
        return t && Nn(t, V(n, 3));
      }
      function I0(t, n) {
        return t && yi(t, V(n, 3));
      }
      function R0(t) {
        return t == null ? [] : Ar(t, Xt(t));
      }
      function E0(t) {
        return t == null ? [] : Ar(t, ln(t));
      }
      function Ji(t, n, e) {
        var r = t == null ? s : de(t, n);
        return r === s ? e : r;
      }
      function D0(t, n) {
        return t != null && Gu(t, n, tl);
      }
      function Vi(t, n) {
        return t != null && Gu(t, n, nl);
      }
      var L0 = Bu(function(t, n, e) {
        n != null && typeof n.toString != "function" && (n = hr.call(n)), t[n] = e;
      }, to(cn)), T0 = Bu(function(t, n, e) {
        n != null && typeof n.toString != "function" && (n = hr.call(n)), mt.call(t, n) ? t[n].push(e) : t[n] = [e];
      }, V), P0 = st(Xe);
      function Xt(t) {
        return fn(t) ? jo(t) : Si(t);
      }
      function ln(t) {
        return fn(t) ? jo(t, !0) : cl(t);
      }
      function B0(t, n) {
        var e = {};
        return n = V(n, 3), Nn(t, function(r, i, a) {
          Kn(e, n(r, i, a), r);
        }), e;
      }
      function F0(t, n) {
        var e = {};
        return n = V(n, 3), Nn(t, function(r, i, a) {
          Kn(e, i, n(r, i, a));
        }), e;
      }
      var N0 = De(function(t, n, e) {
        Or(t, n, e);
      }), Ca = De(function(t, n, e, r) {
        Or(t, n, e, r);
      }), W0 = Zn(function(t, n) {
        var e = {};
        if (t == null)
          return e;
        var r = !1;
        n = Et(n, function(a) {
          return a = oe(a, t), r || (r = a.length > 1), a;
        }), Wn(t, Ni(t), e), r && (e = An(e, Ut | jt | Gt, Ll));
        for (var i = n.length; i--; )
          Ri(e, n[i]);
        return e;
      });
      function q0(t, n) {
        return Aa(t, Ur(V(n)));
      }
      var z0 = Zn(function(t, n) {
        return t == null ? {} : gl(t, n);
      });
      function Aa(t, n) {
        if (t == null)
          return {};
        var e = Et(Ni(t), function(r) {
          return [r];
        });
        return n = V(n), vu(t, e, function(r, i) {
          return n(r, i[0]);
        });
      }
      function U0(t, n, e) {
        n = oe(n, t);
        var r = -1, i = n.length;
        for (i || (i = 1, t = s); ++r < i; ) {
          var a = t == null ? s : t[qn(n[r])];
          a === s && (r = i, a = e), t = Qn(a) ? a.call(t) : a;
        }
        return t;
      }
      function k0(t, n, e) {
        return t == null ? t : Je(t, n, e);
      }
      function G0(t, n, e, r) {
        return r = typeof r == "function" ? r : s, t == null ? t : Je(t, n, e, r);
      }
      var Oa = Wu(Xt), Ma = Wu(ln);
      function H0(t, n, e) {
        var r = ot(t), i = r || ae(t) || Pe(t);
        if (n = V(n, 4), e == null) {
          var a = t && t.constructor;
          i ? e = r ? new a() : [] : Lt(t) ? e = Qn(a) ? Ee(pr(t)) : {} : e = {};
        }
        return (i ? bn : Nn)(t, function(c, v, x) {
          return n(e, c, v, x);
        }), e;
      }
      function $0(t, n) {
        return t == null ? !0 : Ri(t, n);
      }
      function K0(t, n, e) {
        return t == null ? t : xu(t, n, Li(e));
      }
      function Y0(t, n, e, r) {
        return r = typeof r == "function" ? r : s, t == null ? t : xu(t, n, Li(e), r);
      }
      function Be(t) {
        return t == null ? [] : li(t, Xt(t));
      }
      function Z0(t) {
        return t == null ? [] : li(t, ln(t));
      }
      function X0(t, n, e) {
        return e === s && (e = n, n = s), e !== s && (e = In(e), e = e === e ? e : 0), n !== s && (n = In(n), n = n === n ? n : 0), ge(In(t), n, e);
      }
      function Q0(t, n, e) {
        return n = Jn(n), e === s ? (e = n, n = 0) : e = Jn(e), t = In(t), el(t, n, e);
      }
      function J0(t, n, e) {
        if (e && typeof e != "boolean" && on(t, n, e) && (n = e = s), e === s && (typeof n == "boolean" ? (e = n, n = s) : typeof t == "boolean" && (e = t, t = s)), t === s && n === s ? (t = 0, n = 1) : (t = Jn(t), n === s ? (n = t, t = 0) : n = Jn(n)), t > n) {
          var r = t;
          t = n, n = r;
        }
        if (e || t % 1 || n % 1) {
          var i = Jo();
          return tn(t + i * (n - t + Is("1e-" + ((i + "").length - 1))), n);
        }
        return Oi(t, n);
      }
      var V0 = Le(function(t, n, e) {
        return n = n.toLowerCase(), t + (e ? Ia(n) : n);
      });
      function Ia(t) {
        return ji(yt(t).toLowerCase());
      }
      function Ra(t) {
        return t = yt(t), t && t.replace(ja, Us).replace(ws, "");
      }
      function j0(t, n, e) {
        t = yt(t), n = vn(n);
        var r = t.length;
        e = e === s ? r : ge(ut(e), 0, r);
        var i = e;
        return e -= n.length, e >= 0 && t.slice(e, i) == n;
      }
      function tg(t) {
        return t = yt(t), t && Gn.test(t) ? t.replace(xe, ks) : t;
      }
      function ng(t) {
        return t = yt(t), t && qa.test(t) ? t.replace(Zr, "\\$&") : t;
      }
      var eg = Le(function(t, n, e) {
        return t + (e ? "-" : "") + n.toLowerCase();
      }), rg = Le(function(t, n, e) {
        return t + (e ? " " : "") + n.toLowerCase();
      }), ig = Lu("toLowerCase");
      function og(t, n, e) {
        t = yt(t), n = ut(n);
        var r = n ? Ae(t) : 0;
        if (!n || r >= n)
          return t;
        var i = (n - r) / 2;
        return Lr(yr(i), e) + t + Lr(wr(i), e);
      }
      function ug(t, n, e) {
        t = yt(t), n = ut(n);
        var r = n ? Ae(t) : 0;
        return n && r < n ? t + Lr(n - r, e) : t;
      }
      function ag(t, n, e) {
        t = yt(t), n = ut(n);
        var r = n ? Ae(t) : 0;
        return n && r < n ? Lr(n - r, e) + t : t;
      }
      function sg(t, n, e) {
        return e || n == null ? n = 0 : n && (n = +n), pf(yt(t).replace(Xr, ""), n || 0);
      }
      function fg(t, n, e) {
        return (e ? on(t, n, e) : n === s) ? n = 1 : n = ut(n), Mi(yt(t), n);
      }
      function lg() {
        var t = arguments, n = yt(t[0]);
        return t.length < 3 ? n : n.replace(t[1], t[2]);
      }
      var cg = Le(function(t, n, e) {
        return t + (e ? "_" : "") + n.toLowerCase();
      });
      function hg(t, n, e) {
        return e && typeof e != "number" && on(t, n, e) && (n = e = s), e = e === s ? U : e >>> 0, e ? (t = yt(t), t && (typeof n == "string" || n != null && !Qi(n)) && (n = vn(n), !n && Ce(t)) ? ue(Ln(t), 0, e) : t.split(n, e)) : [];
      }
      var gg = Le(function(t, n, e) {
        return t + (e ? " " : "") + ji(n);
      });
      function dg(t, n, e) {
        return t = yt(t), e = e == null ? 0 : ge(ut(e), 0, t.length), n = vn(n), t.slice(e, e + n.length) == n;
      }
      function pg(t, n, e) {
        var r = u.templateSettings;
        e && on(t, n, e) && (n = s), t = yt(t), n = Hr({}, n, r, qu);
        var i = Hr({}, n.imports, r.imports, qu), a = Xt(i), c = li(i, a), v, x, E = 0, D = n.interpolate || rr, F = "__p += '", z = hi(
          (n.escape || rr).source + "|" + D.source + "|" + (D === Fn ? Ya : rr).source + "|" + (n.evaluate || rr).source + "|$",
          "g"
        ), Y = "//# sourceURL=" + (mt.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Ss + "]") + `
`;
        t.replace(z, function(tt, ft, dt, wn, un, yn) {
          return dt || (dt = wn), F += t.slice(E, yn).replace(ts, Gs), ft && (v = !0, F += `' +
__e(` + ft + `) +
'`), un && (x = !0, F += `';
` + un + `;
__p += '`), dt && (F += `' +
((__t = (` + dt + `)) == null ? '' : __t) +
'`), E = yn + tt.length, tt;
        }), F += `';
`;
        var j = mt.call(n, "variable") && n.variable;
        if (!j)
          F = `with (obj) {
` + F + `
}
`;
        else if ($a.test(j))
          throw new it(Tt);
        F = (x ? F.replace(Un, "") : F).replace(We, "$1").replace(Yr, "$1;"), F = "function(" + (j || "obj") + `) {
` + (j ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (v ? ", __e = _.escape" : "") + (x ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + F + `return __p
}`;
        var at = Da(function() {
          return _t(a, Y + "return " + F).apply(s, c);
        });
        if (at.source = F, Xi(at))
          throw at;
        return at;
      }
      function vg(t) {
        return yt(t).toLowerCase();
      }
      function _g(t) {
        return yt(t).toUpperCase();
      }
      function wg(t, n, e) {
        if (t = yt(t), t && (e || n === s))
          return zo(t);
        if (!t || !(n = vn(n)))
          return t;
        var r = Ln(t), i = Ln(n), a = Uo(r, i), c = ko(r, i) + 1;
        return ue(r, a, c).join("");
      }
      function yg(t, n, e) {
        if (t = yt(t), t && (e || n === s))
          return t.slice(0, Ho(t) + 1);
        if (!t || !(n = vn(n)))
          return t;
        var r = Ln(t), i = ko(r, Ln(n)) + 1;
        return ue(r, 0, i).join("");
      }
      function mg(t, n, e) {
        if (t = yt(t), t && (e || n === s))
          return t.replace(Xr, "");
        if (!t || !(n = vn(n)))
          return t;
        var r = Ln(t), i = Uo(r, Ln(n));
        return ue(r, i).join("");
      }
      function xg(t, n) {
        var e = ye, r = se;
        if (Lt(n)) {
          var i = "separator" in n ? n.separator : i;
          e = "length" in n ? ut(n.length) : e, r = "omission" in n ? vn(n.omission) : r;
        }
        t = yt(t);
        var a = t.length;
        if (Ce(t)) {
          var c = Ln(t);
          a = c.length;
        }
        if (e >= a)
          return t;
        var v = e - Ae(r);
        if (v < 1)
          return r;
        var x = c ? ue(c, 0, v).join("") : t.slice(0, v);
        if (i === s)
          return x + r;
        if (c && (v += x.length - v), Qi(i)) {
          if (t.slice(v).search(i)) {
            var E, D = x;
            for (i.global || (i = hi(i.source, yt(ao.exec(i)) + "g")), i.lastIndex = 0; E = i.exec(D); )
              var F = E.index;
            x = x.slice(0, F === s ? v : F);
          }
        } else if (t.indexOf(vn(i), v) != v) {
          var z = x.lastIndexOf(i);
          z > -1 && (x = x.slice(0, z));
        }
        return x + r;
      }
      function bg(t) {
        return t = yt(t), t && kn.test(t) ? t.replace(mn, Qs) : t;
      }
      var Sg = Le(function(t, n, e) {
        return t + (e ? " " : "") + n.toUpperCase();
      }), ji = Lu("toUpperCase");
      function Ea(t, n, e) {
        return t = yt(t), n = e ? s : n, n === s ? $s(t) ? js(t) : Fs(t) : t.match(n) || [];
      }
      var Da = st(function(t, n) {
        try {
          return dn(t, s, n);
        } catch (e) {
          return Xi(e) ? e : new it(e);
        }
      }), Cg = Zn(function(t, n) {
        return bn(n, function(e) {
          e = qn(e), Kn(t, e, Yi(t[e], t));
        }), t;
      });
      function Ag(t) {
        var n = t == null ? 0 : t.length, e = V();
        return t = n ? Et(t, function(r) {
          if (typeof r[1] != "function")
            throw new Sn(gt);
          return [e(r[0]), r[1]];
        }) : [], st(function(r) {
          for (var i = -1; ++i < n; ) {
            var a = t[i];
            if (dn(a[0], this, r))
              return dn(a[1], this, r);
          }
        });
      }
      function Og(t) {
        return Jf(An(t, Ut));
      }
      function to(t) {
        return function() {
          return t;
        };
      }
      function Mg(t, n) {
        return t == null || t !== t ? n : t;
      }
      var Ig = Pu(), Rg = Pu(!0);
      function cn(t) {
        return t;
      }
      function no(t) {
        return lu(typeof t == "function" ? t : An(t, Ut));
      }
      function Eg(t) {
        return hu(An(t, Ut));
      }
      function Dg(t, n) {
        return gu(t, An(n, Ut));
      }
      var Lg = st(function(t, n) {
        return function(e) {
          return Xe(e, t, n);
        };
      }), Tg = st(function(t, n) {
        return function(e) {
          return Xe(t, e, n);
        };
      });
      function eo(t, n, e) {
        var r = Xt(n), i = Ar(n, r);
        e == null && !(Lt(n) && (i.length || !r.length)) && (e = n, n = t, t = this, i = Ar(n, Xt(n)));
        var a = !(Lt(e) && "chain" in e) || !!e.chain, c = Qn(t);
        return bn(i, function(v) {
          var x = n[v];
          t[v] = x, c && (t.prototype[v] = function() {
            var E = this.__chain__;
            if (a || E) {
              var D = t(this.__wrapped__), F = D.__actions__ = sn(this.__actions__);
              return F.push({ func: x, args: arguments, thisArg: t }), D.__chain__ = E, D;
            }
            return x.apply(t, te([this.value()], arguments));
          });
        }), t;
      }
      function Pg() {
        return Jt._ === this && (Jt._ = uf), this;
      }
      function ro() {
      }
      function Bg(t) {
        return t = ut(t), st(function(n) {
          return du(n, t);
        });
      }
      var Fg = Pi(Et), Ng = Pi(Bo), Wg = Pi(oi);
      function La(t) {
        return Ui(t) ? ui(qn(t)) : dl(t);
      }
      function qg(t) {
        return function(n) {
          return t == null ? s : de(t, n);
        };
      }
      var zg = Fu(), Ug = Fu(!0);
      function io() {
        return [];
      }
      function oo() {
        return !1;
      }
      function kg() {
        return {};
      }
      function Gg() {
        return "";
      }
      function Hg() {
        return !0;
      }
      function $g(t, n) {
        if (t = ut(t), t < 1 || t > P)
          return [];
        var e = U, r = tn(t, U);
        n = V(n), t -= U;
        for (var i = fi(r, n); ++e < t; )
          n(e);
        return i;
      }
      function Kg(t) {
        return ot(t) ? Et(t, qn) : _n(t) ? [t] : sn(Vu(yt(t)));
      }
      function Yg(t) {
        var n = ++rf;
        return yt(t) + n;
      }
      var Zg = Dr(function(t, n) {
        return t + n;
      }, 0), Xg = Bi("ceil"), Qg = Dr(function(t, n) {
        return t / n;
      }, 1), Jg = Bi("floor");
      function Vg(t) {
        return t && t.length ? Cr(t, cn, mi) : s;
      }
      function jg(t, n) {
        return t && t.length ? Cr(t, V(n, 2), mi) : s;
      }
      function t1(t) {
        return Wo(t, cn);
      }
      function n1(t, n) {
        return Wo(t, V(n, 2));
      }
      function e1(t) {
        return t && t.length ? Cr(t, cn, Ci) : s;
      }
      function r1(t, n) {
        return t && t.length ? Cr(t, V(n, 2), Ci) : s;
      }
      var i1 = Dr(function(t, n) {
        return t * n;
      }, 1), o1 = Bi("round"), u1 = Dr(function(t, n) {
        return t - n;
      }, 0);
      function a1(t) {
        return t && t.length ? si(t, cn) : 0;
      }
      function s1(t, n) {
        return t && t.length ? si(t, V(n, 2)) : 0;
      }
      return u.after = Eh, u.ary = fa, u.assign = _0, u.assignIn = Sa, u.assignInWith = Hr, u.assignWith = w0, u.at = y0, u.before = la, u.bind = Yi, u.bindAll = Cg, u.bindKey = ca, u.castArray = kh, u.chain = ua, u.chunk = Jl, u.compact = Vl, u.concat = jl, u.cond = Ag, u.conforms = Og, u.constant = to, u.countBy = ah, u.create = m0, u.curry = ha, u.curryRight = ga, u.debounce = da, u.defaults = x0, u.defaultsDeep = b0, u.defer = Dh, u.delay = Lh, u.difference = tc, u.differenceBy = nc, u.differenceWith = ec, u.drop = rc, u.dropRight = ic, u.dropRightWhile = oc, u.dropWhile = uc, u.fill = ac, u.filter = fh, u.flatMap = hh, u.flatMapDeep = gh, u.flatMapDepth = dh, u.flatten = ea, u.flattenDeep = sc, u.flattenDepth = fc, u.flip = Th, u.flow = Ig, u.flowRight = Rg, u.fromPairs = lc, u.functions = R0, u.functionsIn = E0, u.groupBy = ph, u.initial = hc, u.intersection = gc, u.intersectionBy = dc, u.intersectionWith = pc, u.invert = L0, u.invertBy = T0, u.invokeMap = _h, u.iteratee = no, u.keyBy = wh, u.keys = Xt, u.keysIn = ln, u.map = Wr, u.mapKeys = B0, u.mapValues = F0, u.matches = Eg, u.matchesProperty = Dg, u.memoize = zr, u.merge = N0, u.mergeWith = Ca, u.method = Lg, u.methodOf = Tg, u.mixin = eo, u.negate = Ur, u.nthArg = Bg, u.omit = W0, u.omitBy = q0, u.once = Ph, u.orderBy = yh, u.over = Fg, u.overArgs = Bh, u.overEvery = Ng, u.overSome = Wg, u.partial = Zi, u.partialRight = pa, u.partition = mh, u.pick = z0, u.pickBy = Aa, u.property = La, u.propertyOf = qg, u.pull = yc, u.pullAll = ia, u.pullAllBy = mc, u.pullAllWith = xc, u.pullAt = bc, u.range = zg, u.rangeRight = Ug, u.rearg = Fh, u.reject = Sh, u.remove = Sc, u.rest = Nh, u.reverse = $i, u.sampleSize = Ah, u.set = k0, u.setWith = G0, u.shuffle = Oh, u.slice = Cc, u.sortBy = Rh, u.sortedUniq = Dc, u.sortedUniqBy = Lc, u.split = hg, u.spread = Wh, u.tail = Tc, u.take = Pc, u.takeRight = Bc, u.takeRightWhile = Fc, u.takeWhile = Nc, u.tap = Vc, u.throttle = qh, u.thru = Nr, u.toArray = ma, u.toPairs = Oa, u.toPairsIn = Ma, u.toPath = Kg, u.toPlainObject = ba, u.transform = H0, u.unary = zh, u.union = Wc, u.unionBy = qc, u.unionWith = zc, u.uniq = Uc, u.uniqBy = kc, u.uniqWith = Gc, u.unset = $0, u.unzip = Ki, u.unzipWith = oa, u.update = K0, u.updateWith = Y0, u.values = Be, u.valuesIn = Z0, u.without = Hc, u.words = Ea, u.wrap = Uh, u.xor = $c, u.xorBy = Kc, u.xorWith = Yc, u.zip = Zc, u.zipObject = Xc, u.zipObjectDeep = Qc, u.zipWith = Jc, u.entries = Oa, u.entriesIn = Ma, u.extend = Sa, u.extendWith = Hr, eo(u, u), u.add = Zg, u.attempt = Da, u.camelCase = V0, u.capitalize = Ia, u.ceil = Xg, u.clamp = X0, u.clone = Gh, u.cloneDeep = $h, u.cloneDeepWith = Kh, u.cloneWith = Hh, u.conformsTo = Yh, u.deburr = Ra, u.defaultTo = Mg, u.divide = Qg, u.endsWith = j0, u.eq = Pn, u.escape = tg, u.escapeRegExp = ng, u.every = sh, u.find = lh, u.findIndex = ta, u.findKey = S0, u.findLast = ch, u.findLastIndex = na, u.findLastKey = C0, u.floor = Jg, u.forEach = aa, u.forEachRight = sa, u.forIn = A0, u.forInRight = O0, u.forOwn = M0, u.forOwnRight = I0, u.get = Ji, u.gt = Zh, u.gte = Xh, u.has = D0, u.hasIn = Vi, u.head = ra, u.identity = cn, u.includes = vh, u.indexOf = cc, u.inRange = Q0, u.invoke = P0, u.isArguments = _e, u.isArray = ot, u.isArrayBuffer = Qh, u.isArrayLike = fn, u.isArrayLikeObject = qt, u.isBoolean = Jh, u.isBuffer = ae, u.isDate = Vh, u.isElement = jh, u.isEmpty = t0, u.isEqual = n0, u.isEqualWith = e0, u.isError = Xi, u.isFinite = r0, u.isFunction = Qn, u.isInteger = va, u.isLength = kr, u.isMap = _a, u.isMatch = i0, u.isMatchWith = o0, u.isNaN = u0, u.isNative = a0, u.isNil = f0, u.isNull = s0, u.isNumber = wa, u.isObject = Lt, u.isObjectLike = Nt, u.isPlainObject = nr, u.isRegExp = Qi, u.isSafeInteger = l0, u.isSet = ya, u.isString = Gr, u.isSymbol = _n, u.isTypedArray = Pe, u.isUndefined = c0, u.isWeakMap = h0, u.isWeakSet = g0, u.join = vc, u.kebabCase = eg, u.last = Mn, u.lastIndexOf = _c, u.lowerCase = rg, u.lowerFirst = ig, u.lt = d0, u.lte = p0, u.max = Vg, u.maxBy = jg, u.mean = t1, u.meanBy = n1, u.min = e1, u.minBy = r1, u.stubArray = io, u.stubFalse = oo, u.stubObject = kg, u.stubString = Gg, u.stubTrue = Hg, u.multiply = i1, u.nth = wc, u.noConflict = Pg, u.noop = ro, u.now = qr, u.pad = og, u.padEnd = ug, u.padStart = ag, u.parseInt = sg, u.random = J0, u.reduce = xh, u.reduceRight = bh, u.repeat = fg, u.replace = lg, u.result = U0, u.round = o1, u.runInContext = m, u.sample = Ch, u.size = Mh, u.snakeCase = cg, u.some = Ih, u.sortedIndex = Ac, u.sortedIndexBy = Oc, u.sortedIndexOf = Mc, u.sortedLastIndex = Ic, u.sortedLastIndexBy = Rc, u.sortedLastIndexOf = Ec, u.startCase = gg, u.startsWith = dg, u.subtract = u1, u.sum = a1, u.sumBy = s1, u.template = pg, u.times = $g, u.toFinite = Jn, u.toInteger = ut, u.toLength = xa, u.toLower = vg, u.toNumber = In, u.toSafeInteger = v0, u.toString = yt, u.toUpper = _g, u.trim = wg, u.trimEnd = yg, u.trimStart = mg, u.truncate = xg, u.unescape = bg, u.uniqueId = Yg, u.upperCase = Sg, u.upperFirst = ji, u.each = aa, u.eachRight = sa, u.first = ra, eo(u, function() {
        var t = {};
        return Nn(u, function(n, e) {
          mt.call(u.prototype, e) || (t[e] = n);
        }), t;
      }(), { chain: !1 }), u.VERSION = Qt, bn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        u[t].placeholder = u;
      }), bn(["drop", "take"], function(t, n) {
        ct.prototype[t] = function(e) {
          e = e === s ? 1 : Kt(ut(e), 0);
          var r = this.__filtered__ && !n ? new ct(this) : this.clone();
          return r.__filtered__ ? r.__takeCount__ = tn(e, r.__takeCount__) : r.__views__.push({
            size: tn(e, U),
            type: t + (r.__dir__ < 0 ? "Right" : "")
          }), r;
        }, ct.prototype[t + "Right"] = function(e) {
          return this.reverse()[t](e).reverse();
        };
      }), bn(["filter", "map", "takeWhile"], function(t, n) {
        var e = n + 1, r = e == T || e == I;
        ct.prototype[t] = function(i) {
          var a = this.clone();
          return a.__iteratees__.push({
            iteratee: V(i, 3),
            type: e
          }), a.__filtered__ = a.__filtered__ || r, a;
        };
      }), bn(["head", "last"], function(t, n) {
        var e = "take" + (n ? "Right" : "");
        ct.prototype[t] = function() {
          return this[e](1).value()[0];
        };
      }), bn(["initial", "tail"], function(t, n) {
        var e = "drop" + (n ? "" : "Right");
        ct.prototype[t] = function() {
          return this.__filtered__ ? new ct(this) : this[e](1);
        };
      }), ct.prototype.compact = function() {
        return this.filter(cn);
      }, ct.prototype.find = function(t) {
        return this.filter(t).head();
      }, ct.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, ct.prototype.invokeMap = st(function(t, n) {
        return typeof t == "function" ? new ct(this) : this.map(function(e) {
          return Xe(e, t, n);
        });
      }), ct.prototype.reject = function(t) {
        return this.filter(Ur(V(t)));
      }, ct.prototype.slice = function(t, n) {
        t = ut(t);
        var e = this;
        return e.__filtered__ && (t > 0 || n < 0) ? new ct(e) : (t < 0 ? e = e.takeRight(-t) : t && (e = e.drop(t)), n !== s && (n = ut(n), e = n < 0 ? e.dropRight(-n) : e.take(n - t)), e);
      }, ct.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, ct.prototype.toArray = function() {
        return this.take(U);
      }, Nn(ct.prototype, function(t, n) {
        var e = /^(?:filter|find|map|reject)|While$/.test(n), r = /^(?:head|last)$/.test(n), i = u[r ? "take" + (n == "last" ? "Right" : "") : n], a = r || /^find/.test(n);
        i && (u.prototype[n] = function() {
          var c = this.__wrapped__, v = r ? [1] : arguments, x = c instanceof ct, E = v[0], D = x || ot(c), F = function(ft) {
            var dt = i.apply(u, te([ft], v));
            return r && z ? dt[0] : dt;
          };
          D && e && typeof E == "function" && E.length != 1 && (x = D = !1);
          var z = this.__chain__, Y = !!this.__actions__.length, j = a && !z, at = x && !Y;
          if (!a && D) {
            c = at ? c : new ct(this);
            var tt = t.apply(c, v);
            return tt.__actions__.push({ func: Nr, args: [F], thisArg: s }), new Cn(tt, z);
          }
          return j && at ? t.apply(this, v) : (tt = this.thru(F), j ? r ? tt.value()[0] : tt.value() : tt);
        });
      }), bn(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var n = fr[t], e = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", r = /^(?:pop|shift)$/.test(t);
        u.prototype[t] = function() {
          var i = arguments;
          if (r && !this.__chain__) {
            var a = this.value();
            return n.apply(ot(a) ? a : [], i);
          }
          return this[e](function(c) {
            return n.apply(ot(c) ? c : [], i);
          });
        };
      }), Nn(ct.prototype, function(t, n) {
        var e = u[n];
        if (e) {
          var r = e.name + "";
          mt.call(Re, r) || (Re[r] = []), Re[r].push({ name: n, func: e });
        }
      }), Re[Er(s, Rt).name] = [{
        name: "wrapper",
        func: s
      }], ct.prototype.clone = bf, ct.prototype.reverse = Sf, ct.prototype.value = Cf, u.prototype.at = jc, u.prototype.chain = th, u.prototype.commit = nh, u.prototype.next = eh, u.prototype.plant = ih, u.prototype.reverse = oh, u.prototype.toJSON = u.prototype.valueOf = u.prototype.value = uh, u.prototype.first = u.prototype.head, ke && (u.prototype[ke] = rh), u;
    }, Oe = tf();
    fe ? ((fe.exports = Oe)._ = Oe, ni._ = Oe) : Jt._ = Oe;
  }).call(er);
})(Kr, Kr.exports);
var Fe = Kr.exports, Pa = { exports: {} };
(function(Q, H) {
  (function(s, Qt) {
    Q.exports = Qt();
  })(self, function() {
    return (() => {
      var s = { 192: (St, gt) => {
        var Tt, zn, we = function() {
          var Yt = function(B, T) {
            var L = B, I = Pt[T], b = null, P = 0, k = null, q = [], U = {}, Wt = function(g, d) {
              b = function(h) {
                for (var y = new Array(h), S = 0; S < h; S += 1) {
                  y[S] = new Array(h);
                  for (var N = 0; N < h; N += 1) y[S][N] = null;
                }
                return y;
              }(P = 4 * L + 17), A(0, 0), A(P - 7, 0), A(0, P - 7), l(), o(), p(g, d), L >= 7 && f(g), k == null && (k = _(L, I, q)), w(k, d);
            }, A = function(g, d) {
              for (var h = -1; h <= 7; h += 1) if (!(g + h <= -1 || P <= g + h)) for (var y = -1; y <= 7; y += 1) d + y <= -1 || P <= d + y || (b[g + h][d + y] = 0 <= h && h <= 6 && (y == 0 || y == 6) || 0 <= y && y <= 6 && (h == 0 || h == 6) || 2 <= h && h <= 4 && 2 <= y && y <= 4);
            }, o = function() {
              for (var g = 8; g < P - 8; g += 1) b[g][6] == null && (b[g][6] = g % 2 == 0);
              for (var d = 8; d < P - 8; d += 1) b[6][d] == null && (b[6][d] = d % 2 == 0);
            }, l = function() {
              for (var g = Rt.getPatternPosition(L), d = 0; d < g.length; d += 1) for (var h = 0; h < g.length; h += 1) {
                var y = g[d], S = g[h];
                if (b[y][S] == null) for (var N = -2; N <= 2; N += 1) for (var W = -2; W <= 2; W += 1) b[y + N][S + W] = N == -2 || N == 2 || W == -2 || W == 2 || N == 0 && W == 0;
              }
            }, f = function(g) {
              for (var d = Rt.getBCHTypeNumber(L), h = 0; h < 18; h += 1) {
                var y = !g && (d >> h & 1) == 1;
                b[Math.floor(h / 3)][h % 3 + P - 8 - 3] = y;
              }
              for (h = 0; h < 18; h += 1) y = !g && (d >> h & 1) == 1, b[h % 3 + P - 8 - 3][Math.floor(h / 3)] = y;
            }, p = function(g, d) {
              for (var h = I << 3 | d, y = Rt.getBCHTypeInfo(h), S = 0; S < 15; S += 1) {
                var N = !g && (y >> S & 1) == 1;
                S < 6 ? b[S][8] = N : S < 8 ? b[S + 1][8] = N : b[P - 15 + S][8] = N;
              }
              for (S = 0; S < 15; S += 1) N = !g && (y >> S & 1) == 1, S < 8 ? b[8][P - S - 1] = N : S < 9 ? b[8][15 - S - 1 + 1] = N : b[8][15 - S - 1] = N;
              b[P - 8][8] = !g;
            }, w = function(g, d) {
              for (var h = -1, y = P - 1, S = 7, N = 0, W = Rt.getMaskFunction(d), R = P - 1; R > 0; R -= 2) for (R == 6 && (R -= 1); ; ) {
                for (var $ = 0; $ < 2; $ += 1) if (b[y][R - $] == null) {
                  var Z = !1;
                  N < g.length && (Z = (g[N] >>> S & 1) == 1), W(y, R - $) && (Z = !Z), b[y][R - $] = Z, (S -= 1) == -1 && (N += 1, S = 7);
                }
                if ((y += h) < 0 || P <= y) {
                  y -= h, h = -h;
                  break;
                }
              }
            }, _ = function(g, d, h) {
              for (var y = Rn.getRSBlocks(g, d), S = Zt(), N = 0; N < h.length; N += 1) {
                var W = h[N];
                S.put(W.getMode(), 4), S.put(W.getLength(), Rt.getLengthInBits(W.getMode(), g)), W.write(S);
              }
              var R = 0;
              for (N = 0; N < y.length; N += 1) R += y[N].dataCount;
              if (S.getLengthInBits() > 8 * R) throw "code length overflow. (" + S.getLengthInBits() + ">" + 8 * R + ")";
              for (S.getLengthInBits() + 4 <= 8 * R && S.put(0, 4); S.getLengthInBits() % 8 != 0; ) S.putBit(!1);
              for (; !(S.getLengthInBits() >= 8 * R || (S.put(236, 8), S.getLengthInBits() >= 8 * R)); ) S.put(17, 8);
              return function($, Z) {
                for (var K = 0, lt = 0, X = 0, nt = new Array(Z.length), J = new Array(Z.length), et = 0; et < Z.length; et += 1) {
                  var kt = Z[et].dataCount, wt = Z[et].totalCount - kt;
                  lt = Math.max(lt, kt), X = Math.max(X, wt), nt[et] = new Array(kt);
                  for (var rt = 0; rt < nt[et].length; rt += 1) nt[et][rt] = 255 & $.getBuffer()[rt + K];
                  K += kt;
                  var Ct = Rt.getErrorCorrectPolynomial(wt), vt = Bt(nt[et], Ct.getLength() - 1).mod(Ct);
                  for (J[et] = new Array(Ct.getLength() - 1), rt = 0; rt < J[et].length; rt += 1) {
                    var Ot = rt + vt.getLength() - J[et].length;
                    J[et][rt] = Ot >= 0 ? vt.getAt(Ot) : 0;
                  }
                }
                var Dt = 0;
                for (rt = 0; rt < Z.length; rt += 1) Dt += Z[rt].totalCount;
                var Ft = new Array(Dt), Ht = 0;
                for (rt = 0; rt < lt; rt += 1) for (et = 0; et < Z.length; et += 1) rt < nt[et].length && (Ft[Ht] = nt[et][rt], Ht += 1);
                for (rt = 0; rt < X; rt += 1) for (et = 0; et < Z.length; et += 1) rt < J[et].length && (Ft[Ht] = J[et][rt], Ht += 1);
                return Ft;
              }(S, y);
            };
            U.addData = function(g, d) {
              var h = null;
              switch (d = d || "Byte") {
                case "Numeric":
                  h = En(g);
                  break;
                case "Alphanumeric":
                  h = an(g);
                  break;
                case "Byte":
                  h = en(g);
                  break;
                case "Kanji":
                  h = gn(g);
                  break;
                default:
                  throw "mode:" + d;
              }
              q.push(h), k = null;
            }, U.isDark = function(g, d) {
              if (g < 0 || P <= g || d < 0 || P <= d) throw g + "," + d;
              return b[g][d];
            }, U.getModuleCount = function() {
              return P;
            }, U.make = function() {
              if (L < 1) {
                for (var g = 1; g < 40; g++) {
                  for (var d = Rn.getRSBlocks(g, I), h = Zt(), y = 0; y < q.length; y++) {
                    var S = q[y];
                    h.put(S.getMode(), 4), h.put(S.getLength(), Rt.getLengthInBits(S.getMode(), g)), S.write(h);
                  }
                  var N = 0;
                  for (y = 0; y < d.length; y++) N += d[y].dataCount;
                  if (h.getLengthInBits() <= 8 * N) break;
                }
                L = g;
              }
              Wt(!1, function() {
                for (var W = 0, R = 0, $ = 0; $ < 8; $ += 1) {
                  Wt(!0, $);
                  var Z = Rt.getLostPoint(U);
                  ($ == 0 || W > Z) && (W = Z, R = $);
                }
                return R;
              }());
            }, U.createTableTag = function(g, d) {
              g = g || 2;
              var h = "";
              h += '<table style="', h += " border-width: 0px; border-style: none;", h += " border-collapse: collapse;", h += " padding: 0px; margin: " + (d = d === void 0 ? 4 * g : d) + "px;", h += '">', h += "<tbody>";
              for (var y = 0; y < U.getModuleCount(); y += 1) {
                h += "<tr>";
                for (var S = 0; S < U.getModuleCount(); S += 1) h += '<td style="', h += " border-width: 0px; border-style: none;", h += " border-collapse: collapse;", h += " padding: 0px; margin: 0px;", h += " width: " + g + "px;", h += " height: " + g + "px;", h += " background-color: ", h += U.isDark(y, S) ? "#000000" : "#ffffff", h += ";", h += '"/>';
                h += "</tr>";
              }
              return (h += "</tbody>") + "</table>";
            }, U.createSvgTag = function(g, d, h, y) {
              var S = {};
              typeof arguments[0] == "object" && (g = (S = arguments[0]).cellSize, d = S.margin, h = S.alt, y = S.title), g = g || 2, d = d === void 0 ? 4 * g : d, (h = typeof h == "string" ? { text: h } : h || {}).text = h.text || null, h.id = h.text ? h.id || "qrcode-description" : null, (y = typeof y == "string" ? { text: y } : y || {}).text = y.text || null, y.id = y.text ? y.id || "qrcode-title" : null;
              var N, W, R, $, Z = U.getModuleCount() * g + 2 * d, K = "";
              for ($ = "l" + g + ",0 0," + g + " -" + g + ",0 0,-" + g + "z ", K += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', K += S.scalable ? "" : ' width="' + Z + 'px" height="' + Z + 'px"', K += ' viewBox="0 0 ' + Z + " " + Z + '" ', K += ' preserveAspectRatio="xMinYMin meet"', K += y.text || h.text ? ' role="img" aria-labelledby="' + O([y.id, h.id].join(" ").trim()) + '"' : "", K += ">", K += y.text ? '<title id="' + O(y.id) + '">' + O(y.text) + "</title>" : "", K += h.text ? '<description id="' + O(h.id) + '">' + O(h.text) + "</description>" : "", K += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', K += '<path d="', W = 0; W < U.getModuleCount(); W += 1) for (R = W * g + d, N = 0; N < U.getModuleCount(); N += 1) U.isDark(W, N) && (K += "M" + (N * g + d) + "," + R + $);
              return (K += '" stroke="transparent" fill="black"/>') + "</svg>";
            }, U.createDataURL = function(g, d) {
              g = g || 2, d = d === void 0 ? 4 * g : d;
              var h = U.getModuleCount() * g + 2 * d, y = d, S = h - d;
              return me(h, h, function(N, W) {
                if (y <= N && N < S && y <= W && W < S) {
                  var R = Math.floor((N - y) / g), $ = Math.floor((W - y) / g);
                  return U.isDark($, R) ? 0 : 1;
                }
                return 1;
              });
            }, U.createImgTag = function(g, d, h) {
              g = g || 2, d = d === void 0 ? 4 * g : d;
              var y = U.getModuleCount() * g + 2 * d, S = "";
              return S += "<img", S += ' src="', S += U.createDataURL(g, d), S += '"', S += ' width="', S += y, S += '"', S += ' height="', S += y, S += '"', h && (S += ' alt="', S += O(h), S += '"'), S + "/>";
            };
            var O = function(g) {
              for (var d = "", h = 0; h < g.length; h += 1) {
                var y = g.charAt(h);
                switch (y) {
                  case "<":
                    d += "&lt;";
                    break;
                  case ">":
                    d += "&gt;";
                    break;
                  case "&":
                    d += "&amp;";
                    break;
                  case '"':
                    d += "&quot;";
                    break;
                  default:
                    d += y;
                }
              }
              return d;
            };
            return U.createASCII = function(g, d) {
              if ((g = g || 1) < 2) return function(nt) {
                nt = nt === void 0 ? 2 : nt;
                var J, et, kt, wt, rt, Ct = 1 * U.getModuleCount() + 2 * nt, vt = nt, Ot = Ct - nt, Dt = { "██": "█", "█ ": "▀", " █": "▄", "  ": " " }, Ft = { "██": "▀", "█ ": "▀", " █": " ", "  ": " " }, Ht = "";
                for (J = 0; J < Ct; J += 2) {
                  for (kt = Math.floor((J - vt) / 1), wt = Math.floor((J + 1 - vt) / 1), et = 0; et < Ct; et += 1) rt = "█", vt <= et && et < Ot && vt <= J && J < Ot && U.isDark(kt, Math.floor((et - vt) / 1)) && (rt = " "), vt <= et && et < Ot && vt <= J + 1 && J + 1 < Ot && U.isDark(wt, Math.floor((et - vt) / 1)) ? rt += " " : rt += "█", Ht += nt < 1 && J + 1 >= Ot ? Ft[rt] : Dt[rt];
                  Ht += `
`;
                }
                return Ct % 2 && nt > 0 ? Ht.substring(0, Ht.length - Ct - 1) + Array(Ct + 1).join("▀") : Ht.substring(0, Ht.length - 1);
              }(d);
              g -= 1, d = d === void 0 ? 2 * g : d;
              var h, y, S, N, W = U.getModuleCount() * g + 2 * d, R = d, $ = W - d, Z = Array(g + 1).join("██"), K = Array(g + 1).join("  "), lt = "", X = "";
              for (h = 0; h < W; h += 1) {
                for (S = Math.floor((h - R) / g), X = "", y = 0; y < W; y += 1) N = 1, R <= y && y < $ && R <= h && h < $ && U.isDark(S, Math.floor((y - R) / g)) && (N = 0), X += N ? Z : K;
                for (S = 0; S < g; S += 1) lt += X + `
`;
              }
              return lt.substring(0, lt.length - 1);
            }, U.renderTo2dContext = function(g, d) {
              d = d || 2;
              for (var h = U.getModuleCount(), y = 0; y < h; y++) for (var S = 0; S < h; S++) g.fillStyle = U.isDark(y, S) ? "black" : "white", g.fillRect(y * d, S * d, d, d);
            }, U;
          };
          Yt.stringToBytes = (Yt.stringToBytesFuncs = { default: function(B) {
            for (var T = [], L = 0; L < B.length; L += 1) {
              var I = B.charCodeAt(L);
              T.push(255 & I);
            }
            return T;
          } }).default, Yt.createStringToBytes = function(B, T) {
            var L = function() {
              for (var b = se(B), P = function() {
                var o = b.read();
                if (o == -1) throw "eof";
                return o;
              }, k = 0, q = {}; ; ) {
                var U = b.read();
                if (U == -1) break;
                var Wt = P(), A = P() << 8 | P();
                q[String.fromCharCode(U << 8 | Wt)] = A, k += 1;
              }
              if (k != T) throw k + " != " + T;
              return q;
            }(), I = 63;
            return function(b) {
              for (var P = [], k = 0; k < b.length; k += 1) {
                var q = b.charCodeAt(k);
                if (q < 128) P.push(q);
                else {
                  var U = L[b.charAt(k)];
                  typeof U == "number" ? (255 & U) == U ? P.push(U) : (P.push(U >>> 8), P.push(255 & U)) : P.push(I);
                }
              }
              return P;
            };
          };
          var Ut, jt, Gt, pt, bt, Pt = { L: 1, M: 0, Q: 3, H: 2 }, Rt = (Ut = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], jt = 1335, Gt = 7973, bt = function(B) {
            for (var T = 0; B != 0; ) T += 1, B >>>= 1;
            return T;
          }, (pt = {}).getBCHTypeInfo = function(B) {
            for (var T = B << 10; bt(T) - bt(jt) >= 0; ) T ^= jt << bt(T) - bt(jt);
            return 21522 ^ (B << 10 | T);
          }, pt.getBCHTypeNumber = function(B) {
            for (var T = B << 12; bt(T) - bt(Gt) >= 0; ) T ^= Gt << bt(T) - bt(Gt);
            return B << 12 | T;
          }, pt.getPatternPosition = function(B) {
            return Ut[B - 1];
          }, pt.getMaskFunction = function(B) {
            switch (B) {
              case 0:
                return function(T, L) {
                  return (T + L) % 2 == 0;
                };
              case 1:
                return function(T, L) {
                  return T % 2 == 0;
                };
              case 2:
                return function(T, L) {
                  return L % 3 == 0;
                };
              case 3:
                return function(T, L) {
                  return (T + L) % 3 == 0;
                };
              case 4:
                return function(T, L) {
                  return (Math.floor(T / 2) + Math.floor(L / 3)) % 2 == 0;
                };
              case 5:
                return function(T, L) {
                  return T * L % 2 + T * L % 3 == 0;
                };
              case 6:
                return function(T, L) {
                  return (T * L % 2 + T * L % 3) % 2 == 0;
                };
              case 7:
                return function(T, L) {
                  return (T * L % 3 + (T + L) % 2) % 2 == 0;
                };
              default:
                throw "bad maskPattern:" + B;
            }
          }, pt.getErrorCorrectPolynomial = function(B) {
            for (var T = Bt([1], 0), L = 0; L < B; L += 1) T = T.multiply(Bt([1, hn.gexp(L)], 0));
            return T;
          }, pt.getLengthInBits = function(B, T) {
            if (1 <= T && T < 10) switch (B) {
              case 1:
                return 10;
              case 2:
                return 9;
              case 4:
              case 8:
                return 8;
              default:
                throw "mode:" + B;
            }
            else if (T < 27) switch (B) {
              case 1:
                return 12;
              case 2:
                return 11;
              case 4:
                return 16;
              case 8:
                return 10;
              default:
                throw "mode:" + B;
            }
            else {
              if (!(T < 41)) throw "type:" + T;
              switch (B) {
                case 1:
                  return 14;
                case 2:
                  return 13;
                case 4:
                  return 16;
                case 8:
                  return 12;
                default:
                  throw "mode:" + B;
              }
            }
          }, pt.getLostPoint = function(B) {
            for (var T = B.getModuleCount(), L = 0, I = 0; I < T; I += 1) for (var b = 0; b < T; b += 1) {
              for (var P = 0, k = B.isDark(I, b), q = -1; q <= 1; q += 1) if (!(I + q < 0 || T <= I + q)) for (var U = -1; U <= 1; U += 1) b + U < 0 || T <= b + U || q == 0 && U == 0 || k == B.isDark(I + q, b + U) && (P += 1);
              P > 5 && (L += 3 + P - 5);
            }
            for (I = 0; I < T - 1; I += 1) for (b = 0; b < T - 1; b += 1) {
              var Wt = 0;
              B.isDark(I, b) && (Wt += 1), B.isDark(I + 1, b) && (Wt += 1), B.isDark(I, b + 1) && (Wt += 1), B.isDark(I + 1, b + 1) && (Wt += 1), Wt != 0 && Wt != 4 || (L += 3);
            }
            for (I = 0; I < T; I += 1) for (b = 0; b < T - 6; b += 1) B.isDark(I, b) && !B.isDark(I, b + 1) && B.isDark(I, b + 2) && B.isDark(I, b + 3) && B.isDark(I, b + 4) && !B.isDark(I, b + 5) && B.isDark(I, b + 6) && (L += 40);
            for (b = 0; b < T; b += 1) for (I = 0; I < T - 6; I += 1) B.isDark(I, b) && !B.isDark(I + 1, b) && B.isDark(I + 2, b) && B.isDark(I + 3, b) && B.isDark(I + 4, b) && !B.isDark(I + 5, b) && B.isDark(I + 6, b) && (L += 40);
            var A = 0;
            for (b = 0; b < T; b += 1) for (I = 0; I < T; I += 1) B.isDark(I, b) && (A += 1);
            return L + Math.abs(100 * A / T / T - 50) / 5 * 10;
          }, pt), hn = function() {
            for (var B = new Array(256), T = new Array(256), L = 0; L < 8; L += 1) B[L] = 1 << L;
            for (L = 8; L < 256; L += 1) B[L] = B[L - 4] ^ B[L - 5] ^ B[L - 6] ^ B[L - 8];
            for (L = 0; L < 255; L += 1) T[B[L]] = L;
            return { glog: function(I) {
              if (I < 1) throw "glog(" + I + ")";
              return T[I];
            }, gexp: function(I) {
              for (; I < 0; ) I += 255;
              for (; I >= 256; ) I -= 255;
              return B[I];
            } };
          }();
          function Bt(B, T) {
            if (B.length === void 0) throw B.length + "/" + T;
            var L = function() {
              for (var b = 0; b < B.length && B[b] == 0; ) b += 1;
              for (var P = new Array(B.length - b + T), k = 0; k < B.length - b; k += 1) P[k] = B[k + b];
              return P;
            }(), I = { getAt: function(b) {
              return L[b];
            }, getLength: function() {
              return L.length;
            }, multiply: function(b) {
              for (var P = new Array(I.getLength() + b.getLength() - 1), k = 0; k < I.getLength(); k += 1) for (var q = 0; q < b.getLength(); q += 1) P[k + q] ^= hn.gexp(hn.glog(I.getAt(k)) + hn.glog(b.getAt(q)));
              return Bt(P, 0);
            }, mod: function(b) {
              if (I.getLength() - b.getLength() < 0) return I;
              for (var P = hn.glog(I.getAt(0)) - hn.glog(b.getAt(0)), k = new Array(I.getLength()), q = 0; q < I.getLength(); q += 1) k[q] = I.getAt(q);
              for (q = 0; q < b.getLength(); q += 1) k[q] ^= hn.gexp(hn.glog(b.getAt(q)) + P);
              return Bt(k, 0).mod(b);
            } };
            return I;
          }
          var Rn = /* @__PURE__ */ function() {
            var B = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12, 7, 37, 13], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], T = function(I, b) {
              var P = {};
              return P.totalCount = I, P.dataCount = b, P;
            }, L = { getRSBlocks: function(I, b) {
              var P = function(f, p) {
                switch (p) {
                  case Pt.L:
                    return B[4 * (f - 1) + 0];
                  case Pt.M:
                    return B[4 * (f - 1) + 1];
                  case Pt.Q:
                    return B[4 * (f - 1) + 2];
                  case Pt.H:
                    return B[4 * (f - 1) + 3];
                  default:
                    return;
                }
              }(I, b);
              if (P === void 0) throw "bad rs block @ typeNumber:" + I + "/errorCorrectionLevel:" + b;
              for (var k = P.length / 3, q = [], U = 0; U < k; U += 1) for (var Wt = P[3 * U + 0], A = P[3 * U + 1], o = P[3 * U + 2], l = 0; l < Wt; l += 1) q.push(T(A, o));
              return q;
            } };
            return L;
          }(), Zt = function() {
            var B = [], T = 0, L = { getBuffer: function() {
              return B;
            }, getAt: function(I) {
              var b = Math.floor(I / 8);
              return (B[b] >>> 7 - I % 8 & 1) == 1;
            }, put: function(I, b) {
              for (var P = 0; P < b; P += 1) L.putBit((I >>> b - P - 1 & 1) == 1);
            }, getLengthInBits: function() {
              return T;
            }, putBit: function(I) {
              var b = Math.floor(T / 8);
              B.length <= b && B.push(0), I && (B[b] |= 128 >>> T % 8), T += 1;
            } };
            return L;
          }, En = function(B) {
            var T = B, L = { getMode: function() {
              return 1;
            }, getLength: function(P) {
              return T.length;
            }, write: function(P) {
              for (var k = T, q = 0; q + 2 < k.length; ) P.put(I(k.substring(q, q + 3)), 10), q += 3;
              q < k.length && (k.length - q == 1 ? P.put(I(k.substring(q, q + 1)), 4) : k.length - q == 2 && P.put(I(k.substring(q, q + 2)), 7));
            } }, I = function(P) {
              for (var k = 0, q = 0; q < P.length; q += 1) k = 10 * k + b(P.charAt(q));
              return k;
            }, b = function(P) {
              if ("0" <= P && P <= "9") return P.charCodeAt(0) - 48;
              throw "illegal char :" + P;
            };
            return L;
          }, an = function(B) {
            var T = B, L = { getMode: function() {
              return 2;
            }, getLength: function(b) {
              return T.length;
            }, write: function(b) {
              for (var P = T, k = 0; k + 1 < P.length; ) b.put(45 * I(P.charAt(k)) + I(P.charAt(k + 1)), 11), k += 2;
              k < P.length && b.put(I(P.charAt(k)), 6);
            } }, I = function(b) {
              if ("0" <= b && b <= "9") return b.charCodeAt(0) - 48;
              if ("A" <= b && b <= "Z") return b.charCodeAt(0) - 65 + 10;
              switch (b) {
                case " ":
                  return 36;
                case "$":
                  return 37;
                case "%":
                  return 38;
                case "*":
                  return 39;
                case "+":
                  return 40;
                case "-":
                  return 41;
                case ".":
                  return 42;
                case "/":
                  return 43;
                case ":":
                  return 44;
                default:
                  throw "illegal char :" + b;
              }
            };
            return L;
          }, en = function(B) {
            var T = Yt.stringToBytes(B);
            return { getMode: function() {
              return 4;
            }, getLength: function(L) {
              return T.length;
            }, write: function(L) {
              for (var I = 0; I < T.length; I += 1) L.put(T[I], 8);
            } };
          }, gn = function(B) {
            var T = Yt.stringToBytesFuncs.SJIS;
            if (!T) throw "sjis not supported.";
            (function(I, b) {
              var P = T("友");
              if (P.length != 2 || (P[0] << 8 | P[1]) != 38726) throw "sjis not supported.";
            })();
            var L = T(B);
            return { getMode: function() {
              return 8;
            }, getLength: function(I) {
              return ~~(L.length / 2);
            }, write: function(I) {
              for (var b = L, P = 0; P + 1 < b.length; ) {
                var k = (255 & b[P]) << 8 | 255 & b[P + 1];
                if (33088 <= k && k <= 40956) k -= 33088;
                else {
                  if (!(57408 <= k && k <= 60351)) throw "illegal char at " + (P + 1) + "/" + k;
                  k -= 49472;
                }
                k = 192 * (k >>> 8 & 255) + (255 & k), I.put(k, 13), P += 2;
              }
              if (P < b.length) throw "illegal char at " + (P + 1);
            } };
          }, ye = function() {
            var B = [], T = { writeByte: function(L) {
              B.push(255 & L);
            }, writeShort: function(L) {
              T.writeByte(L), T.writeByte(L >>> 8);
            }, writeBytes: function(L, I, b) {
              I = I || 0, b = b || L.length;
              for (var P = 0; P < b; P += 1) T.writeByte(L[P + I]);
            }, writeString: function(L) {
              for (var I = 0; I < L.length; I += 1) T.writeByte(L.charCodeAt(I));
            }, toByteArray: function() {
              return B;
            }, toString: function() {
              var L = "";
              L += "[";
              for (var I = 0; I < B.length; I += 1) I > 0 && (L += ","), L += B[I];
              return L + "]";
            } };
            return T;
          }, se = function(B) {
            var T = B, L = 0, I = 0, b = 0, P = { read: function() {
              for (; b < 8; ) {
                if (L >= T.length) {
                  if (b == 0) return -1;
                  throw "unexpected end of file./" + b;
                }
                var q = T.charAt(L);
                if (L += 1, q == "=") return b = 0, -1;
                q.match(/^\s$/) || (I = I << 6 | k(q.charCodeAt(0)), b += 6);
              }
              var U = I >>> b - 8 & 255;
              return b -= 8, U;
            } }, k = function(q) {
              if (65 <= q && q <= 90) return q - 65;
              if (97 <= q && q <= 122) return q - 97 + 26;
              if (48 <= q && q <= 57) return q - 48 + 52;
              if (q == 43) return 62;
              if (q == 47) return 63;
              throw "c:" + q;
            };
            return P;
          }, me = function(B, T, L) {
            for (var I = function(A, o) {
              var l = A, f = o, p = new Array(A * o), w = { setPixel: function(g, d, h) {
                p[d * l + g] = h;
              }, write: function(g) {
                g.writeString("GIF87a"), g.writeShort(l), g.writeShort(f), g.writeByte(128), g.writeByte(0), g.writeByte(0), g.writeByte(0), g.writeByte(0), g.writeByte(0), g.writeByte(255), g.writeByte(255), g.writeByte(255), g.writeString(","), g.writeShort(0), g.writeShort(0), g.writeShort(l), g.writeShort(f), g.writeByte(0);
                var d = _(2);
                g.writeByte(2);
                for (var h = 0; d.length - h > 255; ) g.writeByte(255), g.writeBytes(d, h, 255), h += 255;
                g.writeByte(d.length - h), g.writeBytes(d, h, d.length - h), g.writeByte(0), g.writeString(";");
              } }, _ = function(g) {
                for (var d = 1 << g, h = 1 + (1 << g), y = g + 1, S = O(), N = 0; N < d; N += 1) S.add(String.fromCharCode(N));
                S.add(String.fromCharCode(d)), S.add(String.fromCharCode(h));
                var W, R, $, Z = ye(), K = (W = Z, R = 0, $ = 0, { write: function(J, et) {
                  if (J >>> et) throw "length over";
                  for (; R + et >= 8; ) W.writeByte(255 & (J << R | $)), et -= 8 - R, J >>>= 8 - R, $ = 0, R = 0;
                  $ |= J << R, R += et;
                }, flush: function() {
                  R > 0 && W.writeByte($);
                } });
                K.write(d, y);
                var lt = 0, X = String.fromCharCode(p[lt]);
                for (lt += 1; lt < p.length; ) {
                  var nt = String.fromCharCode(p[lt]);
                  lt += 1, S.contains(X + nt) ? X += nt : (K.write(S.indexOf(X), y), S.size() < 4095 && (S.size() == 1 << y && (y += 1), S.add(X + nt)), X = nt);
                }
                return K.write(S.indexOf(X), y), K.write(h, y), K.flush(), Z.toByteArray();
              }, O = function() {
                var g = {}, d = 0, h = { add: function(y) {
                  if (h.contains(y)) throw "dup key:" + y;
                  g[y] = d, d += 1;
                }, size: function() {
                  return d;
                }, indexOf: function(y) {
                  return g[y];
                }, contains: function(y) {
                  return g[y] !== void 0;
                } };
                return h;
              };
              return w;
            }(B, T), b = 0; b < T; b += 1) for (var P = 0; P < B; P += 1) I.setPixel(P, b, L(P, b));
            var k = ye();
            I.write(k);
            for (var q = function() {
              var A = 0, o = 0, l = 0, f = "", p = {}, w = function(O) {
                f += String.fromCharCode(_(63 & O));
              }, _ = function(O) {
                if (!(O < 0)) {
                  if (O < 26) return 65 + O;
                  if (O < 52) return O - 26 + 97;
                  if (O < 62) return O - 52 + 48;
                  if (O == 62) return 43;
                  if (O == 63) return 47;
                }
                throw "n:" + O;
              };
              return p.writeByte = function(O) {
                for (A = A << 8 | 255 & O, o += 8, l += 1; o >= 6; ) w(A >>> o - 6), o -= 6;
              }, p.flush = function() {
                if (o > 0 && (w(A << 6 - o), A = 0, o = 0), l % 3 != 0) for (var O = 3 - l % 3, g = 0; g < O; g += 1) f += "=";
              }, p.toString = function() {
                return f;
              }, p;
            }(), U = k.toByteArray(), Wt = 0; Wt < U.length; Wt += 1) q.writeByte(U[Wt]);
            return q.flush(), "data:image/gif;base64," + q;
          };
          return Yt;
        }();
        we.stringToBytesFuncs["UTF-8"] = function(Yt) {
          return function(Ut) {
            for (var jt = [], Gt = 0; Gt < Ut.length; Gt++) {
              var pt = Ut.charCodeAt(Gt);
              pt < 128 ? jt.push(pt) : pt < 2048 ? jt.push(192 | pt >> 6, 128 | 63 & pt) : pt < 55296 || pt >= 57344 ? jt.push(224 | pt >> 12, 128 | pt >> 6 & 63, 128 | 63 & pt) : (Gt++, pt = 65536 + ((1023 & pt) << 10 | 1023 & Ut.charCodeAt(Gt)), jt.push(240 | pt >> 18, 128 | pt >> 12 & 63, 128 | pt >> 6 & 63, 128 | 63 & pt));
            }
            return jt;
          }(Yt);
        }, (zn = typeof (Tt = function() {
          return we;
        }) == "function" ? Tt.apply(gt, []) : Tt) === void 0 || (St.exports = zn);
      }, 676: (St, gt, Tt) => {
        Tt.d(gt, { default: () => Wt });
        var zn = function() {
          return (zn = Object.assign || function(A) {
            for (var o, l = 1, f = arguments.length; l < f; l++) for (var p in o = arguments[l]) Object.prototype.hasOwnProperty.call(o, p) && (A[p] = o[p]);
            return A;
          }).apply(this, arguments);
        }, we = function() {
          for (var A = 0, o = 0, l = arguments.length; o < l; o++) A += arguments[o].length;
          var f = Array(A), p = 0;
          for (o = 0; o < l; o++) for (var w = arguments[o], _ = 0, O = w.length; _ < O; _++, p++) f[p] = w[_];
          return f;
        }, Yt = function(A) {
          return !!A && typeof A == "object" && !Array.isArray(A);
        };
        function Ut(A) {
          for (var o = [], l = 1; l < arguments.length; l++) o[l - 1] = arguments[l];
          if (!o.length) return A;
          var f = o.shift();
          return f !== void 0 && Yt(A) && Yt(f) ? (A = zn({}, A), Object.keys(f).forEach(function(p) {
            var w = A[p], _ = f[p];
            Array.isArray(w) && Array.isArray(_) ? A[p] = _ : Yt(w) && Yt(_) ? A[p] = Ut(Object.assign({}, w), _) : A[p] = _;
          }), Ut.apply(void 0, we([A], o))) : A;
        }
        function jt(A, o) {
          var l = document.createElement("a");
          l.download = o, l.href = A, document.body.appendChild(l), l.click(), document.body.removeChild(l);
        }
        function Gt(A) {
          return o = this, l = void 0, p = function() {
            return function(w, _) {
              var O, g, d, h, y = { label: 0, sent: function() {
                if (1 & d[0]) throw d[1];
                return d[1];
              }, trys: [], ops: [] };
              return h = { next: S(0), throw: S(1), return: S(2) }, typeof Symbol == "function" && (h[Symbol.iterator] = function() {
                return this;
              }), h;
              function S(N) {
                return function(W) {
                  return function(R) {
                    if (O) throw new TypeError("Generator is already executing.");
                    for (; y; ) try {
                      if (O = 1, g && (d = 2 & R[0] ? g.return : R[0] ? g.throw || ((d = g.return) && d.call(g), 0) : g.next) && !(d = d.call(g, R[1])).done) return d;
                      switch (g = 0, d && (R = [2 & R[0], d.value]), R[0]) {
                        case 0:
                        case 1:
                          d = R;
                          break;
                        case 4:
                          return y.label++, { value: R[1], done: !1 };
                        case 5:
                          y.label++, g = R[1], R = [0];
                          continue;
                        case 7:
                          R = y.ops.pop(), y.trys.pop();
                          continue;
                        default:
                          if (!((d = (d = y.trys).length > 0 && d[d.length - 1]) || R[0] !== 6 && R[0] !== 2)) {
                            y = 0;
                            continue;
                          }
                          if (R[0] === 3 && (!d || R[1] > d[0] && R[1] < d[3])) {
                            y.label = R[1];
                            break;
                          }
                          if (R[0] === 6 && y.label < d[1]) {
                            y.label = d[1], d = R;
                            break;
                          }
                          if (d && y.label < d[2]) {
                            y.label = d[2], y.ops.push(R);
                            break;
                          }
                          d[2] && y.ops.pop(), y.trys.pop();
                          continue;
                      }
                      R = _.call(w, y);
                    } catch ($) {
                      R = [6, $], g = 0;
                    } finally {
                      O = d = 0;
                    }
                    if (5 & R[0]) throw R[1];
                    return { value: R[0] ? R[1] : void 0, done: !0 };
                  }([N, W]);
                };
              }
            }(this, function(w) {
              return [2, new Promise(function(_) {
                var O = new XMLHttpRequest();
                O.onload = function() {
                  var g = new FileReader();
                  g.onloadend = function() {
                    _(g.result);
                  }, g.readAsDataURL(O.response);
                }, O.open("GET", A), O.responseType = "blob", O.send();
              })];
            });
          }, new ((f = void 0) || (f = Promise))(function(w, _) {
            function O(h) {
              try {
                d(p.next(h));
              } catch (y) {
                _(y);
              }
            }
            function g(h) {
              try {
                d(p.throw(h));
              } catch (y) {
                _(y);
              }
            }
            function d(h) {
              var y;
              h.done ? w(h.value) : (y = h.value, y instanceof f ? y : new f(function(S) {
                S(y);
              })).then(O, g);
            }
            d((p = p.apply(o, l || [])).next());
          });
          var o, l, f, p;
        }
        const pt = { L: 0.07, M: 0.15, Q: 0.25, H: 0.3 };
        var bt = function() {
          return (bt = Object.assign || function(A) {
            for (var o, l = 1, f = arguments.length; l < f; l++) for (var p in o = arguments[l]) Object.prototype.hasOwnProperty.call(o, p) && (A[p] = o[p]);
            return A;
          }).apply(this, arguments);
        };
        const Pt = function() {
          function A(o) {
            var l = o.svg, f = o.type;
            this._svg = l, this._type = f;
          }
          return A.prototype.draw = function(o, l, f, p) {
            var w;
            switch (this._type) {
              case "dots":
                w = this._drawDot;
                break;
              case "classy":
                w = this._drawClassy;
                break;
              case "classy-rounded":
                w = this._drawClassyRounded;
                break;
              case "rounded":
                w = this._drawRounded;
                break;
              case "extra-rounded":
                w = this._drawExtraRounded;
                break;
              case "square":
              default:
                w = this._drawSquare;
            }
            w.call(this, { x: o, y: l, size: f, getNeighbor: p });
          }, A.prototype._rotateFigure = function(o) {
            var l, f = o.x, p = o.y, w = o.size, _ = o.rotation, O = _ === void 0 ? 0 : _, g = f + w / 2, d = p + w / 2;
            (0, o.draw)(), (l = this._element) === null || l === void 0 || l.setAttribute("transform", "rotate(" + 180 * O / Math.PI + "," + g + "," + d + ")");
          }, A.prototype._basicDot = function(o) {
            var l = this, f = o.size, p = o.x, w = o.y;
            this._rotateFigure(bt(bt({}, o), { draw: function() {
              l._element = document.createElementNS("http://www.w3.org/2000/svg", "circle"), l._element.setAttribute("cx", String(p + f / 2)), l._element.setAttribute("cy", String(w + f / 2)), l._element.setAttribute("r", String(f / 2));
            } }));
          }, A.prototype._basicSquare = function(o) {
            var l = this, f = o.size, p = o.x, w = o.y;
            this._rotateFigure(bt(bt({}, o), { draw: function() {
              l._element = document.createElementNS("http://www.w3.org/2000/svg", "rect"), l._element.setAttribute("x", String(p)), l._element.setAttribute("y", String(w)), l._element.setAttribute("width", String(f)), l._element.setAttribute("height", String(f));
            } }));
          }, A.prototype._basicSideRounded = function(o) {
            var l = this, f = o.size, p = o.x, w = o.y;
            this._rotateFigure(bt(bt({}, o), { draw: function() {
              l._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), l._element.setAttribute("d", "M " + p + " " + w + "v " + f + "h " + f / 2 + "a " + f / 2 + " " + f / 2 + ", 0, 0, 0, 0 " + -f);
            } }));
          }, A.prototype._basicCornerRounded = function(o) {
            var l = this, f = o.size, p = o.x, w = o.y;
            this._rotateFigure(bt(bt({}, o), { draw: function() {
              l._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), l._element.setAttribute("d", "M " + p + " " + w + "v " + f + "h " + f + "v " + -f / 2 + "a " + f / 2 + " " + f / 2 + ", 0, 0, 0, " + -f / 2 + " " + -f / 2);
            } }));
          }, A.prototype._basicCornerExtraRounded = function(o) {
            var l = this, f = o.size, p = o.x, w = o.y;
            this._rotateFigure(bt(bt({}, o), { draw: function() {
              l._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), l._element.setAttribute("d", "M " + p + " " + w + "v " + f + "h " + f + "a " + f + " " + f + ", 0, 0, 0, " + -f + " " + -f);
            } }));
          }, A.prototype._basicCornersRounded = function(o) {
            var l = this, f = o.size, p = o.x, w = o.y;
            this._rotateFigure(bt(bt({}, o), { draw: function() {
              l._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), l._element.setAttribute("d", "M " + p + " " + w + "v " + f / 2 + "a " + f / 2 + " " + f / 2 + ", 0, 0, 0, " + f / 2 + " " + f / 2 + "h " + f / 2 + "v " + -f / 2 + "a " + f / 2 + " " + f / 2 + ", 0, 0, 0, " + -f / 2 + " " + -f / 2);
            } }));
          }, A.prototype._drawDot = function(o) {
            var l = o.x, f = o.y, p = o.size;
            this._basicDot({ x: l, y: f, size: p, rotation: 0 });
          }, A.prototype._drawSquare = function(o) {
            var l = o.x, f = o.y, p = o.size;
            this._basicSquare({ x: l, y: f, size: p, rotation: 0 });
          }, A.prototype._drawRounded = function(o) {
            var l = o.x, f = o.y, p = o.size, w = o.getNeighbor, _ = w ? +w(-1, 0) : 0, O = w ? +w(1, 0) : 0, g = w ? +w(0, -1) : 0, d = w ? +w(0, 1) : 0, h = _ + O + g + d;
            if (h !== 0) if (h > 2 || _ && O || g && d) this._basicSquare({ x: l, y: f, size: p, rotation: 0 });
            else {
              if (h === 2) {
                var y = 0;
                return _ && g ? y = Math.PI / 2 : g && O ? y = Math.PI : O && d && (y = -Math.PI / 2), void this._basicCornerRounded({ x: l, y: f, size: p, rotation: y });
              }
              if (h === 1) return y = 0, g ? y = Math.PI / 2 : O ? y = Math.PI : d && (y = -Math.PI / 2), void this._basicSideRounded({ x: l, y: f, size: p, rotation: y });
            }
            else this._basicDot({ x: l, y: f, size: p, rotation: 0 });
          }, A.prototype._drawExtraRounded = function(o) {
            var l = o.x, f = o.y, p = o.size, w = o.getNeighbor, _ = w ? +w(-1, 0) : 0, O = w ? +w(1, 0) : 0, g = w ? +w(0, -1) : 0, d = w ? +w(0, 1) : 0, h = _ + O + g + d;
            if (h !== 0) if (h > 2 || _ && O || g && d) this._basicSquare({ x: l, y: f, size: p, rotation: 0 });
            else {
              if (h === 2) {
                var y = 0;
                return _ && g ? y = Math.PI / 2 : g && O ? y = Math.PI : O && d && (y = -Math.PI / 2), void this._basicCornerExtraRounded({ x: l, y: f, size: p, rotation: y });
              }
              if (h === 1) return y = 0, g ? y = Math.PI / 2 : O ? y = Math.PI : d && (y = -Math.PI / 2), void this._basicSideRounded({ x: l, y: f, size: p, rotation: y });
            }
            else this._basicDot({ x: l, y: f, size: p, rotation: 0 });
          }, A.prototype._drawClassy = function(o) {
            var l = o.x, f = o.y, p = o.size, w = o.getNeighbor, _ = w ? +w(-1, 0) : 0, O = w ? +w(1, 0) : 0, g = w ? +w(0, -1) : 0, d = w ? +w(0, 1) : 0;
            _ + O + g + d !== 0 ? _ || g ? O || d ? this._basicSquare({ x: l, y: f, size: p, rotation: 0 }) : this._basicCornerRounded({ x: l, y: f, size: p, rotation: Math.PI / 2 }) : this._basicCornerRounded({ x: l, y: f, size: p, rotation: -Math.PI / 2 }) : this._basicCornersRounded({ x: l, y: f, size: p, rotation: Math.PI / 2 });
          }, A.prototype._drawClassyRounded = function(o) {
            var l = o.x, f = o.y, p = o.size, w = o.getNeighbor, _ = w ? +w(-1, 0) : 0, O = w ? +w(1, 0) : 0, g = w ? +w(0, -1) : 0, d = w ? +w(0, 1) : 0;
            _ + O + g + d !== 0 ? _ || g ? O || d ? this._basicSquare({ x: l, y: f, size: p, rotation: 0 }) : this._basicCornerExtraRounded({ x: l, y: f, size: p, rotation: Math.PI / 2 }) : this._basicCornerExtraRounded({ x: l, y: f, size: p, rotation: -Math.PI / 2 }) : this._basicCornersRounded({ x: l, y: f, size: p, rotation: Math.PI / 2 });
          }, A;
        }();
        var Rt = function() {
          return (Rt = Object.assign || function(A) {
            for (var o, l = 1, f = arguments.length; l < f; l++) for (var p in o = arguments[l]) Object.prototype.hasOwnProperty.call(o, p) && (A[p] = o[p]);
            return A;
          }).apply(this, arguments);
        };
        const hn = function() {
          function A(o) {
            var l = o.svg, f = o.type;
            this._svg = l, this._type = f;
          }
          return A.prototype.draw = function(o, l, f, p) {
            var w;
            switch (this._type) {
              case "square":
                w = this._drawSquare;
                break;
              case "extra-rounded":
                w = this._drawExtraRounded;
                break;
              case "dot":
              default:
                w = this._drawDot;
            }
            w.call(this, { x: o, y: l, size: f, rotation: p });
          }, A.prototype._rotateFigure = function(o) {
            var l, f = o.x, p = o.y, w = o.size, _ = o.rotation, O = _ === void 0 ? 0 : _, g = f + w / 2, d = p + w / 2;
            (0, o.draw)(), (l = this._element) === null || l === void 0 || l.setAttribute("transform", "rotate(" + 180 * O / Math.PI + "," + g + "," + d + ")");
          }, A.prototype._basicDot = function(o) {
            var l = this, f = o.size, p = o.x, w = o.y, _ = f / 7;
            this._rotateFigure(Rt(Rt({}, o), { draw: function() {
              l._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), l._element.setAttribute("clip-rule", "evenodd"), l._element.setAttribute("d", "M " + (p + f / 2) + " " + w + "a " + f / 2 + " " + f / 2 + " 0 1 0 0.1 0zm 0 " + _ + "a " + (f / 2 - _) + " " + (f / 2 - _) + " 0 1 1 -0.1 0Z");
            } }));
          }, A.prototype._basicSquare = function(o) {
            var l = this, f = o.size, p = o.x, w = o.y, _ = f / 7;
            this._rotateFigure(Rt(Rt({}, o), { draw: function() {
              l._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), l._element.setAttribute("clip-rule", "evenodd"), l._element.setAttribute("d", "M " + p + " " + w + "v " + f + "h " + f + "v " + -f + "zM " + (p + _) + " " + (w + _) + "h " + (f - 2 * _) + "v " + (f - 2 * _) + "h " + (2 * _ - f) + "z");
            } }));
          }, A.prototype._basicExtraRounded = function(o) {
            var l = this, f = o.size, p = o.x, w = o.y, _ = f / 7;
            this._rotateFigure(Rt(Rt({}, o), { draw: function() {
              l._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), l._element.setAttribute("clip-rule", "evenodd"), l._element.setAttribute("d", "M " + p + " " + (w + 2.5 * _) + "v " + 2 * _ + "a " + 2.5 * _ + " " + 2.5 * _ + ", 0, 0, 0, " + 2.5 * _ + " " + 2.5 * _ + "h " + 2 * _ + "a " + 2.5 * _ + " " + 2.5 * _ + ", 0, 0, 0, " + 2.5 * _ + " " + 2.5 * -_ + "v " + -2 * _ + "a " + 2.5 * _ + " " + 2.5 * _ + ", 0, 0, 0, " + 2.5 * -_ + " " + 2.5 * -_ + "h " + -2 * _ + "a " + 2.5 * _ + " " + 2.5 * _ + ", 0, 0, 0, " + 2.5 * -_ + " " + 2.5 * _ + "M " + (p + 2.5 * _) + " " + (w + _) + "h " + 2 * _ + "a " + 1.5 * _ + " " + 1.5 * _ + ", 0, 0, 1, " + 1.5 * _ + " " + 1.5 * _ + "v " + 2 * _ + "a " + 1.5 * _ + " " + 1.5 * _ + ", 0, 0, 1, " + 1.5 * -_ + " " + 1.5 * _ + "h " + -2 * _ + "a " + 1.5 * _ + " " + 1.5 * _ + ", 0, 0, 1, " + 1.5 * -_ + " " + 1.5 * -_ + "v " + -2 * _ + "a " + 1.5 * _ + " " + 1.5 * _ + ", 0, 0, 1, " + 1.5 * _ + " " + 1.5 * -_);
            } }));
          }, A.prototype._drawDot = function(o) {
            var l = o.x, f = o.y, p = o.size, w = o.rotation;
            this._basicDot({ x: l, y: f, size: p, rotation: w });
          }, A.prototype._drawSquare = function(o) {
            var l = o.x, f = o.y, p = o.size, w = o.rotation;
            this._basicSquare({ x: l, y: f, size: p, rotation: w });
          }, A.prototype._drawExtraRounded = function(o) {
            var l = o.x, f = o.y, p = o.size, w = o.rotation;
            this._basicExtraRounded({ x: l, y: f, size: p, rotation: w });
          }, A;
        }();
        var Bt = function() {
          return (Bt = Object.assign || function(A) {
            for (var o, l = 1, f = arguments.length; l < f; l++) for (var p in o = arguments[l]) Object.prototype.hasOwnProperty.call(o, p) && (A[p] = o[p]);
            return A;
          }).apply(this, arguments);
        };
        const Rn = function() {
          function A(o) {
            var l = o.svg, f = o.type;
            this._svg = l, this._type = f;
          }
          return A.prototype.draw = function(o, l, f, p) {
            var w;
            switch (this._type) {
              case "square":
                w = this._drawSquare;
                break;
              case "dot":
              default:
                w = this._drawDot;
            }
            w.call(this, { x: o, y: l, size: f, rotation: p });
          }, A.prototype._rotateFigure = function(o) {
            var l, f = o.x, p = o.y, w = o.size, _ = o.rotation, O = _ === void 0 ? 0 : _, g = f + w / 2, d = p + w / 2;
            (0, o.draw)(), (l = this._element) === null || l === void 0 || l.setAttribute("transform", "rotate(" + 180 * O / Math.PI + "," + g + "," + d + ")");
          }, A.prototype._basicDot = function(o) {
            var l = this, f = o.size, p = o.x, w = o.y;
            this._rotateFigure(Bt(Bt({}, o), { draw: function() {
              l._element = document.createElementNS("http://www.w3.org/2000/svg", "circle"), l._element.setAttribute("cx", String(p + f / 2)), l._element.setAttribute("cy", String(w + f / 2)), l._element.setAttribute("r", String(f / 2));
            } }));
          }, A.prototype._basicSquare = function(o) {
            var l = this, f = o.size, p = o.x, w = o.y;
            this._rotateFigure(Bt(Bt({}, o), { draw: function() {
              l._element = document.createElementNS("http://www.w3.org/2000/svg", "rect"), l._element.setAttribute("x", String(p)), l._element.setAttribute("y", String(w)), l._element.setAttribute("width", String(f)), l._element.setAttribute("height", String(f));
            } }));
          }, A.prototype._drawDot = function(o) {
            var l = o.x, f = o.y, p = o.size, w = o.rotation;
            this._basicDot({ x: l, y: f, size: p, rotation: w });
          }, A.prototype._drawSquare = function(o) {
            var l = o.x, f = o.y, p = o.size, w = o.rotation;
            this._basicSquare({ x: l, y: f, size: p, rotation: w });
          }, A;
        }(), Zt = "circle";
        var En = function(A, o, l, f) {
          return new (l || (l = Promise))(function(p, w) {
            function _(d) {
              try {
                g(f.next(d));
              } catch (h) {
                w(h);
              }
            }
            function O(d) {
              try {
                g(f.throw(d));
              } catch (h) {
                w(h);
              }
            }
            function g(d) {
              var h;
              d.done ? p(d.value) : (h = d.value, h instanceof l ? h : new l(function(y) {
                y(h);
              })).then(_, O);
            }
            g((f = f.apply(A, [])).next());
          });
        }, an = function(A, o) {
          var l, f, p, w, _ = { label: 0, sent: function() {
            if (1 & p[0]) throw p[1];
            return p[1];
          }, trys: [], ops: [] };
          return w = { next: O(0), throw: O(1), return: O(2) }, typeof Symbol == "function" && (w[Symbol.iterator] = function() {
            return this;
          }), w;
          function O(g) {
            return function(d) {
              return function(h) {
                if (l) throw new TypeError("Generator is already executing.");
                for (; _; ) try {
                  if (l = 1, f && (p = 2 & h[0] ? f.return : h[0] ? f.throw || ((p = f.return) && p.call(f), 0) : f.next) && !(p = p.call(f, h[1])).done) return p;
                  switch (f = 0, p && (h = [2 & h[0], p.value]), h[0]) {
                    case 0:
                    case 1:
                      p = h;
                      break;
                    case 4:
                      return _.label++, { value: h[1], done: !1 };
                    case 5:
                      _.label++, f = h[1], h = [0];
                      continue;
                    case 7:
                      h = _.ops.pop(), _.trys.pop();
                      continue;
                    default:
                      if (!((p = (p = _.trys).length > 0 && p[p.length - 1]) || h[0] !== 6 && h[0] !== 2)) {
                        _ = 0;
                        continue;
                      }
                      if (h[0] === 3 && (!p || h[1] > p[0] && h[1] < p[3])) {
                        _.label = h[1];
                        break;
                      }
                      if (h[0] === 6 && _.label < p[1]) {
                        _.label = p[1], p = h;
                        break;
                      }
                      if (p && _.label < p[2]) {
                        _.label = p[2], _.ops.push(h);
                        break;
                      }
                      p[2] && _.ops.pop(), _.trys.pop();
                      continue;
                  }
                  h = o.call(A, _);
                } catch (y) {
                  h = [6, y], f = 0;
                } finally {
                  l = p = 0;
                }
                if (5 & h[0]) throw h[1];
                return { value: h[0] ? h[1] : void 0, done: !0 };
              }([g, d]);
            };
          }
        }, en = [[1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1]], gn = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];
        const ye = function() {
          function A(o) {
            this._element = document.createElementNS("http://www.w3.org/2000/svg", "svg"), this._element.setAttribute("width", String(o.width)), this._element.setAttribute("height", String(o.height)), this._defs = document.createElementNS("http://www.w3.org/2000/svg", "defs"), this._element.appendChild(this._defs), this._options = o;
          }
          return Object.defineProperty(A.prototype, "width", { get: function() {
            return this._options.width;
          }, enumerable: !1, configurable: !0 }), Object.defineProperty(A.prototype, "height", { get: function() {
            return this._options.height;
          }, enumerable: !1, configurable: !0 }), A.prototype.getElement = function() {
            return this._element;
          }, A.prototype.drawQR = function(o) {
            return En(this, void 0, void 0, function() {
              var l, f, p, w, _, O, g, d, h, y, S = this;
              return an(this, function(N) {
                switch (N.label) {
                  case 0:
                    return l = o.getModuleCount(), f = Math.min(this._options.width, this._options.height) - 2 * this._options.margin, p = this._options.shape === Zt ? f / Math.sqrt(2) : f, w = Math.floor(p / l), _ = { hideXDots: 0, hideYDots: 0, width: 0, height: 0 }, this._qr = o, this._options.image ? [4, this.loadImage()] : [3, 2];
                  case 1:
                    if (N.sent(), !this._image) return [2];
                    O = this._options, g = O.imageOptions, d = O.qrOptions, h = g.imageSize * pt[d.errorCorrectionLevel], y = Math.floor(h * l * l), _ = function(W) {
                      var R = W.originalHeight, $ = W.originalWidth, Z = W.maxHiddenDots, K = W.maxHiddenAxisDots, lt = W.dotSize, X = { x: 0, y: 0 }, nt = { x: 0, y: 0 };
                      if (R <= 0 || $ <= 0 || Z <= 0 || lt <= 0) return { height: 0, width: 0, hideYDots: 0, hideXDots: 0 };
                      var J = R / $;
                      return X.x = Math.floor(Math.sqrt(Z / J)), X.x <= 0 && (X.x = 1), K && K < X.x && (X.x = K), X.x % 2 == 0 && X.x--, nt.x = X.x * lt, X.y = 1 + 2 * Math.ceil((X.x * J - 1) / 2), nt.y = Math.round(nt.x * J), (X.y * X.x > Z || K && K < X.y) && (K && K < X.y ? (X.y = K, X.y % 2 == 0 && X.x--) : X.y -= 2, nt.y = X.y * lt, X.x = 1 + 2 * Math.ceil((X.y / J - 1) / 2), nt.x = Math.round(nt.y / J)), { height: nt.y, width: nt.x, hideYDots: X.y, hideXDots: X.x };
                    }({ originalWidth: this._image.width, originalHeight: this._image.height, maxHiddenDots: y, maxHiddenAxisDots: l - 14, dotSize: w }), N.label = 2;
                  case 2:
                    return this.drawBackground(), this.drawDots(function(W, R) {
                      var $, Z, K, lt, X, nt;
                      return !(S._options.imageOptions.hideBackgroundDots && W >= (l - _.hideXDots) / 2 && W < (l + _.hideXDots) / 2 && R >= (l - _.hideYDots) / 2 && R < (l + _.hideYDots) / 2 || !(($ = en[W]) === null || $ === void 0) && $[R] || !((Z = en[W - l + 7]) === null || Z === void 0) && Z[R] || !((K = en[W]) === null || K === void 0) && K[R - l + 7] || !((lt = gn[W]) === null || lt === void 0) && lt[R] || !((X = gn[W - l + 7]) === null || X === void 0) && X[R] || !((nt = gn[W]) === null || nt === void 0) && nt[R - l + 7]);
                    }), this.drawCorners(), this._options.image ? [4, this.drawImage({ width: _.width, height: _.height, count: l, dotSize: w })] : [3, 4];
                  case 3:
                    N.sent(), N.label = 4;
                  case 4:
                    return [2];
                }
              });
            });
          }, A.prototype.drawBackground = function() {
            var o, l, f, p = this._element, w = this._options;
            if (p) {
              var _ = (o = w.backgroundOptions) === null || o === void 0 ? void 0 : o.gradient, O = (l = w.backgroundOptions) === null || l === void 0 ? void 0 : l.color;
              if ((_ || O) && this._createColor({ options: _, color: O, additionalRotation: 0, x: 0, y: 0, height: w.height, width: w.width, name: "background-color" }), (f = w.backgroundOptions) === null || f === void 0 ? void 0 : f.round) {
                var g = Math.min(w.width, w.height), d = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                this._backgroundClipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), this._backgroundClipPath.setAttribute("id", "clip-path-background-color"), this._defs.appendChild(this._backgroundClipPath), d.setAttribute("x", String((w.width - g) / 2)), d.setAttribute("y", String((w.height - g) / 2)), d.setAttribute("width", String(g)), d.setAttribute("height", String(g)), d.setAttribute("rx", String(g / 2 * w.backgroundOptions.round)), this._backgroundClipPath.appendChild(d);
              }
            }
          }, A.prototype.drawDots = function(o) {
            var l, f, p = this;
            if (!this._qr) throw "QR code is not defined";
            var w = this._options, _ = this._qr.getModuleCount();
            if (_ > w.width || _ > w.height) throw "The canvas is too small.";
            var O = Math.min(w.width, w.height) - 2 * w.margin, g = w.shape === Zt ? O / Math.sqrt(2) : O, d = Math.floor(g / _), h = Math.floor((w.width - _ * d) / 2), y = Math.floor((w.height - _ * d) / 2), S = new Pt({ svg: this._element, type: w.dotsOptions.type });
            this._dotsClipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), this._dotsClipPath.setAttribute("id", "clip-path-dot-color"), this._defs.appendChild(this._dotsClipPath), this._createColor({ options: (l = w.dotsOptions) === null || l === void 0 ? void 0 : l.gradient, color: w.dotsOptions.color, additionalRotation: 0, x: 0, y: 0, height: w.height, width: w.width, name: "dot-color" });
            for (var N = function(wt) {
              for (var rt = function(vt) {
                return o && !o(wt, vt) ? "continue" : !((f = W._qr) === null || f === void 0) && f.isDark(wt, vt) ? (S.draw(h + wt * d, y + vt * d, d, function(Ot, Dt) {
                  return !(wt + Ot < 0 || vt + Dt < 0 || wt + Ot >= _ || vt + Dt >= _) && !(o && !o(wt + Ot, vt + Dt)) && !!p._qr && p._qr.isDark(wt + Ot, vt + Dt);
                }), void (S._element && W._dotsClipPath && W._dotsClipPath.appendChild(S._element))) : "continue";
              }, Ct = 0; Ct < _; Ct++) rt(Ct);
            }, W = this, R = 0; R < _; R++) N(R);
            if (w.shape === Zt) {
              var $ = Math.floor((O / d - _) / 2), Z = _ + 2 * $, K = h - $ * d, lt = y - $ * d, X = [], nt = Math.floor(Z / 2);
              for (R = 0; R < Z; R++) {
                X[R] = [];
                for (var J = 0; J < Z; J++) R >= $ - 1 && R <= Z - $ && J >= $ - 1 && J <= Z - $ || Math.sqrt((R - nt) * (R - nt) + (J - nt) * (J - nt)) > nt ? X[R][J] = 0 : X[R][J] = this._qr.isDark(J - 2 * $ < 0 ? J : J >= _ ? J - 2 * $ : J - $, R - 2 * $ < 0 ? R : R >= _ ? R - 2 * $ : R - $) ? 1 : 0;
              }
              var et = function(wt) {
                for (var rt = function(vt) {
                  if (!X[wt][vt]) return "continue";
                  S.draw(K + wt * d, lt + vt * d, d, function(Ot, Dt) {
                    var Ft;
                    return !!(!((Ft = X[wt + Ot]) === null || Ft === void 0) && Ft[vt + Dt]);
                  }), S._element && kt._dotsClipPath && kt._dotsClipPath.appendChild(S._element);
                }, Ct = 0; Ct < Z; Ct++) rt(Ct);
              }, kt = this;
              for (R = 0; R < Z; R++) et(R);
            }
          }, A.prototype.drawCorners = function() {
            var o = this;
            if (!this._qr) throw "QR code is not defined";
            var l = this._element, f = this._options;
            if (!l) throw "Element code is not defined";
            var p = this._qr.getModuleCount(), w = Math.min(f.width, f.height) - 2 * f.margin, _ = f.shape === Zt ? w / Math.sqrt(2) : w, O = Math.floor(_ / p), g = 7 * O, d = 3 * O, h = Math.floor((f.width - p * O) / 2), y = Math.floor((f.height - p * O) / 2);
            [[0, 0, 0], [1, 0, Math.PI / 2], [0, 1, -Math.PI / 2]].forEach(function(S) {
              var N, W, R, $, Z, K, lt, X, nt, J, et, kt, wt = S[0], rt = S[1], Ct = S[2], vt = h + wt * O * (p - 7), Ot = y + rt * O * (p - 7), Dt = o._dotsClipPath, Ft = o._dotsClipPath;
              if ((!((N = f.cornersSquareOptions) === null || N === void 0) && N.gradient || !((W = f.cornersSquareOptions) === null || W === void 0) && W.color) && ((Dt = document.createElementNS("http://www.w3.org/2000/svg", "clipPath")).setAttribute("id", "clip-path-corners-square-color-" + wt + "-" + rt), o._defs.appendChild(Dt), o._cornersSquareClipPath = o._cornersDotClipPath = Ft = Dt, o._createColor({ options: (R = f.cornersSquareOptions) === null || R === void 0 ? void 0 : R.gradient, color: ($ = f.cornersSquareOptions) === null || $ === void 0 ? void 0 : $.color, additionalRotation: Ct, x: vt, y: Ot, height: g, width: g, name: "corners-square-color-" + wt + "-" + rt })), (Z = f.cornersSquareOptions) === null || Z === void 0 ? void 0 : Z.type) {
                var Ht = new hn({ svg: o._element, type: f.cornersSquareOptions.type });
                Ht.draw(vt, Ot, g, Ct), Ht._element && Dt && Dt.appendChild(Ht._element);
              } else for (var Dn = new Pt({ svg: o._element, type: f.dotsOptions.type }), Ne = function(mn) {
                for (var xe = function(Gn) {
                  if (!(!((K = en[mn]) === null || K === void 0) && K[Gn])) return "continue";
                  Dn.draw(vt + mn * O, Ot + Gn * O, O, function(qe, ze) {
                    var Fn;
                    return !!(!((Fn = en[mn + qe]) === null || Fn === void 0) && Fn[Gn + ze]);
                  }), Dn._element && Dt && Dt.appendChild(Dn._element);
                }, kn = 0; kn < en[mn].length; kn++) xe(kn);
              }, Un = 0; Un < en.length; Un++) Ne(Un);
              if ((!((lt = f.cornersDotOptions) === null || lt === void 0) && lt.gradient || !((X = f.cornersDotOptions) === null || X === void 0) && X.color) && ((Ft = document.createElementNS("http://www.w3.org/2000/svg", "clipPath")).setAttribute("id", "clip-path-corners-dot-color-" + wt + "-" + rt), o._defs.appendChild(Ft), o._cornersDotClipPath = Ft, o._createColor({ options: (nt = f.cornersDotOptions) === null || nt === void 0 ? void 0 : nt.gradient, color: (J = f.cornersDotOptions) === null || J === void 0 ? void 0 : J.color, additionalRotation: Ct, x: vt + 2 * O, y: Ot + 2 * O, height: d, width: d, name: "corners-dot-color-" + wt + "-" + rt })), (et = f.cornersDotOptions) === null || et === void 0 ? void 0 : et.type) {
                var We = new Rn({ svg: o._element, type: f.cornersDotOptions.type });
                We.draw(vt + 2 * O, Ot + 2 * O, d, Ct), We._element && Ft && Ft.appendChild(We._element);
              } else {
                Dn = new Pt({ svg: o._element, type: f.dotsOptions.type });
                var Yr = function(mn) {
                  for (var xe = function(Gn) {
                    if (!(!((kt = gn[mn]) === null || kt === void 0) && kt[Gn])) return "continue";
                    Dn.draw(vt + mn * O, Ot + Gn * O, O, function(qe, ze) {
                      var Fn;
                      return !!(!((Fn = gn[mn + qe]) === null || Fn === void 0) && Fn[Gn + ze]);
                    }), Dn._element && Ft && Ft.appendChild(Dn._element);
                  }, kn = 0; kn < gn[mn].length; kn++) xe(kn);
                };
                for (Un = 0; Un < gn.length; Un++) Yr(Un);
              }
            });
          }, A.prototype.loadImage = function() {
            var o = this;
            return new Promise(function(l, f) {
              var p = o._options, w = new Image();
              if (!p.image) return f("Image is not defined");
              typeof p.imageOptions.crossOrigin == "string" && (w.crossOrigin = p.imageOptions.crossOrigin), o._image = w, w.onload = function() {
                l();
              }, w.src = p.image;
            });
          }, A.prototype.drawImage = function(o) {
            var l = o.width, f = o.height, p = o.count, w = o.dotSize;
            return En(this, void 0, void 0, function() {
              var _, O, g, d, h, y, S, N, W;
              return an(this, function(R) {
                switch (R.label) {
                  case 0:
                    return _ = this._options, O = Math.floor((_.width - p * w) / 2), g = Math.floor((_.height - p * w) / 2), d = O + _.imageOptions.margin + (p * w - l) / 2, h = g + _.imageOptions.margin + (p * w - f) / 2, y = l - 2 * _.imageOptions.margin, S = f - 2 * _.imageOptions.margin, (N = document.createElementNS("http://www.w3.org/2000/svg", "image")).setAttribute("x", String(d)), N.setAttribute("y", String(h)), N.setAttribute("width", y + "px"), N.setAttribute("height", S + "px"), [4, Gt(_.image || "")];
                  case 1:
                    return W = R.sent(), N.setAttribute("href", W || ""), this._element.appendChild(N), [2];
                }
              });
            });
          }, A.prototype._createColor = function(o) {
            var l = o.options, f = o.color, p = o.additionalRotation, w = o.x, _ = o.y, O = o.height, g = o.width, d = o.name, h = g > O ? g : O, y = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            if (y.setAttribute("x", String(w)), y.setAttribute("y", String(_)), y.setAttribute("height", String(O)), y.setAttribute("width", String(g)), y.setAttribute("clip-path", "url('#clip-path-" + d + "')"), l) {
              var S;
              if (l.type === "radial") (S = document.createElementNS("http://www.w3.org/2000/svg", "radialGradient")).setAttribute("id", d), S.setAttribute("gradientUnits", "userSpaceOnUse"), S.setAttribute("fx", String(w + g / 2)), S.setAttribute("fy", String(_ + O / 2)), S.setAttribute("cx", String(w + g / 2)), S.setAttribute("cy", String(_ + O / 2)), S.setAttribute("r", String(h / 2));
              else {
                var N = ((l.rotation || 0) + p) % (2 * Math.PI), W = (N + 2 * Math.PI) % (2 * Math.PI), R = w + g / 2, $ = _ + O / 2, Z = w + g / 2, K = _ + O / 2;
                W >= 0 && W <= 0.25 * Math.PI || W > 1.75 * Math.PI && W <= 2 * Math.PI ? (R -= g / 2, $ -= O / 2 * Math.tan(N), Z += g / 2, K += O / 2 * Math.tan(N)) : W > 0.25 * Math.PI && W <= 0.75 * Math.PI ? ($ -= O / 2, R -= g / 2 / Math.tan(N), K += O / 2, Z += g / 2 / Math.tan(N)) : W > 0.75 * Math.PI && W <= 1.25 * Math.PI ? (R += g / 2, $ += O / 2 * Math.tan(N), Z -= g / 2, K -= O / 2 * Math.tan(N)) : W > 1.25 * Math.PI && W <= 1.75 * Math.PI && ($ += O / 2, R += g / 2 / Math.tan(N), K -= O / 2, Z -= g / 2 / Math.tan(N)), (S = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient")).setAttribute("id", d), S.setAttribute("gradientUnits", "userSpaceOnUse"), S.setAttribute("x1", String(Math.round(R))), S.setAttribute("y1", String(Math.round($))), S.setAttribute("x2", String(Math.round(Z))), S.setAttribute("y2", String(Math.round(K)));
              }
              l.colorStops.forEach(function(lt) {
                var X = lt.offset, nt = lt.color, J = document.createElementNS("http://www.w3.org/2000/svg", "stop");
                J.setAttribute("offset", 100 * X + "%"), J.setAttribute("stop-color", nt), S.appendChild(J);
              }), y.setAttribute("fill", "url('#" + d + "')"), this._defs.appendChild(S);
            } else f && y.setAttribute("fill", f);
            this._element.appendChild(y);
          }, A;
        }(), se = "canvas";
        for (var me = {}, B = 0; B <= 40; B++) me[B] = B;
        const T = { type: se, shape: "square", width: 300, height: 300, data: "", margin: 0, qrOptions: { typeNumber: me[0], mode: void 0, errorCorrectionLevel: "Q" }, imageOptions: { hideBackgroundDots: !0, imageSize: 0.4, crossOrigin: void 0, margin: 0 }, dotsOptions: { type: "square", color: "#000" }, backgroundOptions: { round: 0, color: "#fff" } };
        var L = function() {
          return (L = Object.assign || function(A) {
            for (var o, l = 1, f = arguments.length; l < f; l++) for (var p in o = arguments[l]) Object.prototype.hasOwnProperty.call(o, p) && (A[p] = o[p]);
            return A;
          }).apply(this, arguments);
        };
        function I(A) {
          var o = L({}, A);
          if (!o.colorStops || !o.colorStops.length) throw "Field 'colorStops' is required in gradient";
          return o.rotation ? o.rotation = Number(o.rotation) : o.rotation = 0, o.colorStops = o.colorStops.map(function(l) {
            return L(L({}, l), { offset: Number(l.offset) });
          }), o;
        }
        function b(A) {
          var o = L({}, A);
          return o.width = Number(o.width), o.height = Number(o.height), o.margin = Number(o.margin), o.imageOptions = L(L({}, o.imageOptions), { hideBackgroundDots: !!o.imageOptions.hideBackgroundDots, imageSize: Number(o.imageOptions.imageSize), margin: Number(o.imageOptions.margin) }), o.margin > Math.min(o.width, o.height) && (o.margin = Math.min(o.width, o.height)), o.dotsOptions = L({}, o.dotsOptions), o.dotsOptions.gradient && (o.dotsOptions.gradient = I(o.dotsOptions.gradient)), o.cornersSquareOptions && (o.cornersSquareOptions = L({}, o.cornersSquareOptions), o.cornersSquareOptions.gradient && (o.cornersSquareOptions.gradient = I(o.cornersSquareOptions.gradient))), o.cornersDotOptions && (o.cornersDotOptions = L({}, o.cornersDotOptions), o.cornersDotOptions.gradient && (o.cornersDotOptions.gradient = I(o.cornersDotOptions.gradient))), o.backgroundOptions && (o.backgroundOptions = L({}, o.backgroundOptions), o.backgroundOptions.gradient && (o.backgroundOptions.gradient = I(o.backgroundOptions.gradient))), o;
        }
        var P = Tt(192), k = Tt.n(P), q = function(A, o, l, f) {
          return new (l || (l = Promise))(function(p, w) {
            function _(d) {
              try {
                g(f.next(d));
              } catch (h) {
                w(h);
              }
            }
            function O(d) {
              try {
                g(f.throw(d));
              } catch (h) {
                w(h);
              }
            }
            function g(d) {
              var h;
              d.done ? p(d.value) : (h = d.value, h instanceof l ? h : new l(function(y) {
                y(h);
              })).then(_, O);
            }
            g((f = f.apply(A, [])).next());
          });
        }, U = function(A, o) {
          var l, f, p, w, _ = { label: 0, sent: function() {
            if (1 & p[0]) throw p[1];
            return p[1];
          }, trys: [], ops: [] };
          return w = { next: O(0), throw: O(1), return: O(2) }, typeof Symbol == "function" && (w[Symbol.iterator] = function() {
            return this;
          }), w;
          function O(g) {
            return function(d) {
              return function(h) {
                if (l) throw new TypeError("Generator is already executing.");
                for (; _; ) try {
                  if (l = 1, f && (p = 2 & h[0] ? f.return : h[0] ? f.throw || ((p = f.return) && p.call(f), 0) : f.next) && !(p = p.call(f, h[1])).done) return p;
                  switch (f = 0, p && (h = [2 & h[0], p.value]), h[0]) {
                    case 0:
                    case 1:
                      p = h;
                      break;
                    case 4:
                      return _.label++, { value: h[1], done: !1 };
                    case 5:
                      _.label++, f = h[1], h = [0];
                      continue;
                    case 7:
                      h = _.ops.pop(), _.trys.pop();
                      continue;
                    default:
                      if (!((p = (p = _.trys).length > 0 && p[p.length - 1]) || h[0] !== 6 && h[0] !== 2)) {
                        _ = 0;
                        continue;
                      }
                      if (h[0] === 3 && (!p || h[1] > p[0] && h[1] < p[3])) {
                        _.label = h[1];
                        break;
                      }
                      if (h[0] === 6 && _.label < p[1]) {
                        _.label = p[1], p = h;
                        break;
                      }
                      if (p && _.label < p[2]) {
                        _.label = p[2], _.ops.push(h);
                        break;
                      }
                      p[2] && _.ops.pop(), _.trys.pop();
                      continue;
                  }
                  h = o.call(A, _);
                } catch (y) {
                  h = [6, y], f = 0;
                } finally {
                  l = p = 0;
                }
                if (5 & h[0]) throw h[1];
                return { value: h[0] ? h[1] : void 0, done: !0 };
              }([g, d]);
            };
          }
        };
        const Wt = function() {
          function A(o) {
            this._options = o ? b(Ut(T, o)) : T, this.update();
          }
          return A._clearContainer = function(o) {
            o && (o.innerHTML = "");
          }, A.prototype._setupSvg = function() {
            var o = this;
            if (this._qr) {
              var l = new ye(this._options);
              this._svg = l.getElement(), this._svgDrawingPromise = l.drawQR(this._qr).then(function() {
                var f;
                o._svg && ((f = o._extension) === null || f === void 0 || f.call(o, l.getElement(), o._options));
              });
            }
          }, A.prototype._setupCanvas = function() {
            var o, l = this;
            this._qr && (this._canvas = document.createElement("canvas"), this._canvas.width = this._options.width, this._canvas.height = this._options.height, this._setupSvg(), this._canvasDrawingPromise = (o = this._svgDrawingPromise) === null || o === void 0 ? void 0 : o.then(function() {
              if (l._svg) {
                var f = l._svg, p = new XMLSerializer().serializeToString(f), w = "data:image/svg+xml;base64," + btoa(p), _ = new Image();
                return new Promise(function(O) {
                  _.onload = function() {
                    var g, d;
                    (d = (g = l._canvas) === null || g === void 0 ? void 0 : g.getContext("2d")) === null || d === void 0 || d.drawImage(_, 0, 0), O();
                  }, _.src = w;
                });
              }
            }));
          }, A.prototype._getElement = function(o) {
            return o === void 0 && (o = "png"), q(this, void 0, void 0, function() {
              return U(this, function(l) {
                switch (l.label) {
                  case 0:
                    if (!this._qr) throw "QR code is empty";
                    return o.toLowerCase() !== "svg" ? [3, 2] : (this._svg && this._svgDrawingPromise || this._setupSvg(), [4, this._svgDrawingPromise]);
                  case 1:
                    return l.sent(), [2, this._svg];
                  case 2:
                    return this._canvas && this._canvasDrawingPromise || this._setupCanvas(), [4, this._canvasDrawingPromise];
                  case 3:
                    return l.sent(), [2, this._canvas];
                }
              });
            });
          }, A.prototype.update = function(o) {
            A._clearContainer(this._container), this._options = o ? b(Ut(this._options, o)) : this._options, this._options.data && (this._qr = k()(this._options.qrOptions.typeNumber, this._options.qrOptions.errorCorrectionLevel), this._qr.addData(this._options.data, this._options.qrOptions.mode || function(l) {
              switch (!0) {
                case /^[0-9]*$/.test(l):
                  return "Numeric";
                case /^[0-9A-Z $%*+\-./:]*$/.test(l):
                  return "Alphanumeric";
                default:
                  return "Byte";
              }
            }(this._options.data)), this._qr.make(), this._options.type === se ? this._setupCanvas() : this._setupSvg(), this.append(this._container));
          }, A.prototype.append = function(o) {
            if (o) {
              if (typeof o.appendChild != "function") throw "Container should be a single DOM node";
              this._options.type === se ? this._canvas && o.appendChild(this._canvas) : this._svg && o.appendChild(this._svg), this._container = o;
            }
          }, A.prototype.applyExtension = function(o) {
            if (!o) throw "Extension function should be defined.";
            this._extension = o, this.update();
          }, A.prototype.deleteExtension = function() {
            this._extension = void 0, this.update();
          }, A.prototype.getRawData = function(o) {
            return o === void 0 && (o = "png"), q(this, void 0, void 0, function() {
              var l, f, p;
              return U(this, function(w) {
                switch (w.label) {
                  case 0:
                    if (!this._qr) throw "QR code is empty";
                    return [4, this._getElement(o)];
                  case 1:
                    return (l = w.sent()) ? o.toLowerCase() === "svg" ? (f = new XMLSerializer(), p = f.serializeToString(l), [2, new Blob([`<?xml version="1.0" standalone="no"?>\r
` + p], { type: "image/svg+xml" })]) : [2, new Promise(function(_) {
                      return l.toBlob(_, "image/" + o, 1);
                    })] : [2, null];
                }
              });
            });
          }, A.prototype.download = function(o) {
            return q(this, void 0, void 0, function() {
              var l, f, p, w, _;
              return U(this, function(O) {
                switch (O.label) {
                  case 0:
                    if (!this._qr) throw "QR code is empty";
                    return l = "png", f = "qr", typeof o == "string" ? (l = o, console.warn("Extension is deprecated as argument for 'download' method, please pass object { name: '...', extension: '...' } as argument")) : typeof o == "object" && o !== null && (o.name && (f = o.name), o.extension && (l = o.extension)), [4, this._getElement(l)];
                  case 1:
                    return (p = O.sent()) ? (l.toLowerCase() === "svg" ? (w = new XMLSerializer(), _ = `<?xml version="1.0" standalone="no"?>\r
` + (_ = w.serializeToString(p)), jt("data:image/svg+xml;charset=utf-8," + encodeURIComponent(_), f + ".svg")) : jt(p.toDataURL("image/" + l), f + "." + l), [2]) : [2];
                }
              });
            });
          }, A;
        }();
      } }, Qt = {};
      function xt(St) {
        if (Qt[St]) return Qt[St].exports;
        var gt = Qt[St] = { exports: {} };
        return s[St](gt, gt.exports, xt), gt.exports;
      }
      return xt.n = (St) => {
        var gt = St && St.__esModule ? () => St.default : () => St;
        return xt.d(gt, { a: gt }), gt;
      }, xt.d = (St, gt) => {
        for (var Tt in gt) xt.o(gt, Tt) && !xt.o(St, Tt) && Object.defineProperty(St, Tt, { enumerable: !0, get: gt[Tt] });
      }, xt.o = (St, gt) => Object.prototype.hasOwnProperty.call(St, gt), xt(676);
    })().default;
  });
})(Pa);
var h1 = Pa.exports;
const g1 = /* @__PURE__ */ c1(h1);
class d1 {
  constructor() {
    ht(this, "gradientColor", ["#000000", "#ffffff"]);
    ht(this, "gradientDirection", "toRight");
    ht(this, "gradientType", "linear");
  }
  toggleColorStops() {
    [this.gradientColor[0], this.gradientColor[1]] = [this.gradientColor[1], this.gradientColor[0]];
  }
  setFromColor(H) {
    this.gradientColor[0] = H;
  }
  setToColor(H) {
    this.gradientColor[1] = H;
  }
  toQRCodeStylingGradientOptions() {
    const H = (() => {
      switch (this.gradientDirection) {
        case "toRight":
          return 0;
        case "toLeft":
          return 180;
        case "toTop":
          return 270;
        case "toBottom":
          return 90;
        case "toTopRight":
          return 315;
        case "toTopLeft":
          return 45;
        case "toBottomRight":
          return 135;
        case "toBottomLeft":
          return 225;
      }
    })();
    return {
      type: this.gradientType,
      rotation: H,
      colorStops: this.gradientColor.map((s, Qt) => ({
        offset: Qt,
        color: s
      }))
    };
  }
}
class $r {
  constructor(H = {}) {
    ht(this, "colorType", "solid");
    ht(this, "color", "#000000");
    ht(this, "gradient", new d1());
    ht(this, "image", "");
    ht(this, "imageOpacity", 0.5);
    this.color = H.color || "#000000";
  }
  merge(H) {
    Fe.assign(this, H.gradient), delete H.gradient, Fe.assign(this, H);
  }
}
const Ba = ["qrCodeStyling", "canvas", "svg", "onGenerated"];
function uo(Q, H) {
  const s = (xt) => xt && typeof xt == "object", Qt = {
    get(xt, St, gt) {
      const Tt = Reflect.get(xt, St, gt);
      return Fe.includes(Ba, St) ? Tt : s(Tt) ? uo(Tt, H) : Tt;
    },
    set(xt, St, gt, Tt) {
      return H.set ? H.set(xt, St, gt, Tt) : Reflect.set(xt, St, gt, Tt);
    }
  };
  return new Proxy(Q, Qt);
}
const p1 = (Q) => uo(Q, {
  get(H, s, Qt) {
    const xt = Reflect.get(H, s, Qt);
    return Fe.includes(Ba, s) ? xt : typeof xt == "object" && xt !== null ? uo(xt, this) : xt;
  },
  set(H, s, Qt, xt) {
    const St = Reflect.set(H, s, Qt, xt);
    return Q.generate(), St;
  }
}), v1 = (Q) => {
  const H = {
    width: Q.width,
    height: Q.height,
    type: Q.type,
    margin: Q.margin,
    data: Q.text,
    image: Q.image,
    qrOptions: {
      errorCorrectionLevel: Q.errorCorrectionLevel,
      typeNumber: Q.typeNumber
    },
    dotsOptions: {
      type: Q.dotsStyle
    },
    backgroundOptions: {},
    cornersDotOptions: {
      type: Q.cornersDotStyle
    },
    cornersSquareOptions: {
      type: Q.cornersSquareStyle
    },
    imageOptions: {
      hideBackgroundDots: Q.hideBehindImageDots,
      margin: Q.imageMargin,
      // @ts-ignore
      saveAsBlob: Q.saveImageAsBase64BlobWhenTypeIsSVG,
      crossOrigin: Q.imageCrossOrigin
    }
  };
  return Q.backgroundColor.colorType === "solid" ? H.backgroundOptions.color = Q.backgroundColor.color : Q.backgroundColor.colorType === "gradient" && (H.backgroundOptions.gradient = Q.backgroundColor.gradient.toQRCodeStylingGradientOptions()), Q.cornersDotColor.colorType === "solid" ? H.cornersDotOptions.color = Q.cornersDotColor.color : Q.cornersDotColor.colorType === "gradient" && (H.cornersDotOptions.gradient = Q.cornersDotColor.gradient.toQRCodeStylingGradientOptions()), Q.cornersSquareColor.colorType === "solid" ? H.cornersSquareOptions.color = Q.cornersSquareColor.color : Q.cornersSquareColor.colorType === "gradient" && (H.cornersSquareOptions.gradient = Q.cornersSquareColor.gradient.toQRCodeStylingGradientOptions()), Q.dotsColor.colorType === "solid" ? H.dotsOptions.color = Q.dotsColor.color : Q.dotsColor.colorType === "gradient" && (H.dotsOptions.gradient = Q.dotsColor.gradient.toQRCodeStylingGradientOptions()), H;
};
class w1 {
  // -------------------------------------------------------------------------
  constructor(H) {
    // -------------------------------------------------------------------------
    ht(this, "pause", !1);
    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------
    // styled definitions
    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------
    // image styled
    ht(this, "image", "");
    ht(this, "imageWidth", 0);
    ht(this, "imageMargin", 0);
    ht(this, "imageStyle", "normal");
    ht(this, "imageShadow", "none");
    ht(this, "imageShadowColor", "rgba(0, 0, 0, 0.1)");
    ht(this, "hideBehindImageDots", !1);
    ht(this, "saveImageAsBase64BlobWhenTypeIsSVG", !1);
    ht(this, "imageCrossOrigin", "anonymous");
    // -------------------------------------------------------------------------
    // background color
    ht(this, "backgroundColor", new $r({
      color: "#FFFFFF"
    }));
    // -------------------------------------------------------------------------
    // dots
    ht(this, "dotsStyle", "square");
    ht(this, "dotsColor", new $r());
    // -------------------------------------------------------------------------
    // corners dots
    ht(this, "cornersDotStyle", "square");
    ht(this, "cornersDotColor", new $r({
      color: "#000000"
    }));
    // -------------------------------------------------------------------------
    // corners square
    ht(this, "cornersSquareStyle", "square");
    ht(this, "cornersSquareColor", new $r());
    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------
    // qr code based settings definitions
    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------
    ht(this, "text", "");
    ht(this, "errorCorrectionLevel", "M");
    // 0-40, got 0 will auto calculate
    ht(this, "typeNumber", 0);
    ht(this, "height", 300);
    ht(this, "width", 300);
    ht(this, "type", "canvas");
    ht(this, "mode", "Numeric");
    ht(this, "margin", 0);
    // -------------------------------------------------------------------------
    ht(this, "qrCodeStyling", null);
    // -------------------------------------------------------------------------
    ht(this, "onGenerated", () => {
    });
    return this.text = H.text, H.config && this.merge(H.config), H.onGenerated && (this.onGenerated = H.onGenerated), H.type && (this.type = H.type), this.generate(), p1(this);
  }
  // -------------------------------------------------------------------------
  generate() {
    if (this.pause)
      return;
    const H = v1(this);
    this.qrCodeStyling ? this.qrCodeStyling.update(H) : this.qrCodeStyling = new g1(H);
    const s = this.qrCodeStyling._canvas, Qt = this.qrCodeStyling._svg;
    this.onGenerated({
      qr: this,
      canvas: s,
      svg: Qt
    });
  }
  // -------------------------------------------------------------------------
  getRawData(H = "png") {
    return this.qrCodeStyling.getRawData(H);
  }
  // -------------------------------------------------------------------------
  saveAs(H, s = "png") {
    return this.qrCodeStyling.download({
      name: H,
      extension: s
    });
  }
  // -------------------------------------------------------------------------
  merge(H) {
    const s = Fe.cloneDeep(H);
    return this.backgroundColor.merge(s.backgroundColor || {}), this.cornersDotColor.merge(s.cornersDotColor || {}), this.cornersSquareColor.merge(s.cornersSquareColor || {}), this.dotsColor.merge(s.dotsColor || {}), delete s.backgroundColor, delete s.cornersDotColor, delete s.cornersSquareColor, delete s.dotsColor, Fe.assign(this, s), this;
  }
  // -------------------------------------------------------------------------
  fromJSON(H) {
    this.merge(H);
  }
  // -------------------------------------------------------------------------
  toJSON() {
    return JSON.parse(JSON.stringify({
      image: this.image,
      imageWidth: this.imageWidth,
      imageMargin: this.imageMargin,
      imageStyle: this.imageStyle,
      imageShadow: this.imageShadow,
      imageShadowColor: this.imageShadowColor,
      hideBehindImageDots: this.hideBehindImageDots,
      backgroundColor: this.backgroundColor,
      dotsStyle: this.dotsStyle,
      dotsColor: this.dotsColor,
      cornersDotStyle: this.cornersDotStyle,
      cornersDotColor: this.cornersDotColor,
      cornersSquareStyle: this.cornersSquareStyle,
      cornersSquareColor: this.cornersSquareColor,
      text: this.text,
      errorCorrectionLevel: this.errorCorrectionLevel,
      typeNumber: this.typeNumber,
      height: this.height,
      width: this.width,
      type: this.type,
      margin: this.margin,
      saveImageAsBase64BlobWhenTypeIsSVG: this.saveImageAsBase64BlobWhenTypeIsSVG,
      imageCrossOrigin: this.imageCrossOrigin,
      mode: this.mode
    }));
  }
  // -------------------------------------------------------------------------
  waitForSetting(H) {
    this.pause = !0, H(this), this.pause = !1, this.generate();
  }
  // -------------------------------------------------------------------------
  get canvas() {
    return this.qrCodeStyling._canvas;
  }
  get svg() {
    return this.qrCodeStyling._svg;
  }
}
export {
  w1 as default
};
